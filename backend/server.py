from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# ---------------- Public gallery (visitor uploads) ----------------
import requests
from fastapi import UploadFile, File, Form, Response, HTTPException

STORAGE_BASE = (os.environ.get("INTEGRATION_PROXY_URL") or "").strip() or "https://integrations.emergentagent.com"
STORAGE_URL = STORAGE_BASE.rstrip("/") + "/objstore/api/v1/storage"
EMERGENT_KEY = os.environ.get("EMERGENT_LLM_KEY")
APP_NAME = "ironblood-fitness"
ALLOWED_IMAGE_TYPES = {"image/jpeg": "jpg", "image/png": "png", "image/webp": "webp"}
MAX_UPLOAD_BYTES = 8 * 1024 * 1024
storage_key = None


def init_storage(force: bool = False):
    global storage_key
    if storage_key and not force:
        return storage_key
    resp = requests.post(f"{STORAGE_URL}/init", json={"emergent_key": EMERGENT_KEY}, timeout=30)
    resp.raise_for_status()
    storage_key = resp.json()["storage_key"]
    return storage_key


def put_object(path: str, data: bytes, content_type: str) -> dict:
    resp = requests.put(
        f"{STORAGE_URL}/objects/{path}",
        headers={"X-Storage-Key": init_storage(), "Content-Type": content_type},
        data=data,
        timeout=120,
    )
    resp.raise_for_status()
    return resp.json()


def get_object(path: str):
    resp = requests.get(
        f"{STORAGE_URL}/objects/{path}",
        headers={"X-Storage-Key": init_storage()},
        timeout=60,
    )
    resp.raise_for_status()
    return resp.content, resp.headers.get("Content-Type", "application/octet-stream")


@api_router.get("/gallery")
async def list_gallery():
    docs = await db.gallery_uploads.find({"is_deleted": False}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return {"items": docs}


@api_router.post("/gallery", status_code=201)
async def upload_gallery_image(file: UploadFile = File(...), caption: str = Form("")):
    content_type = (file.content_type or "").lower()
    if content_type not in ALLOWED_IMAGE_TYPES:
        raise HTTPException(status_code=400, detail="Unsupported file type. Please upload a JPG, PNG or WEBP image.")
    data = await file.read()
    if not data:
        raise HTTPException(status_code=400, detail="The selected file is empty.")
    if len(data) > MAX_UPLOAD_BYTES:
        raise HTTPException(status_code=400, detail="Image is too large. Maximum size is 8 MB.")
    file_id = str(uuid.uuid4())
    path = f"{APP_NAME}/gallery/{file_id}.{ALLOWED_IMAGE_TYPES[content_type]}"
    try:
        result = put_object(path, data, content_type)
    except Exception as exc:
        logger.error(f"Gallery upload storage failure: {exc}")
        raise HTTPException(status_code=502, detail="Upload failed. Please try again.")
    doc = {
        "id": file_id,
        "storage_path": result["path"],
        "caption": caption.strip()[:140],
        "content_type": content_type,
        "size": result["size"],
        "is_deleted": False,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.gallery_uploads.insert_one(doc)
    doc.pop("_id", None)
    return doc


@api_router.get("/gallery/file/{file_id}")
async def get_gallery_file(file_id: str):
    record = await db.gallery_uploads.find_one({"id": file_id, "is_deleted": False})
    if not record:
        raise HTTPException(status_code=404, detail="Image not found")
    try:
        data, content_type = get_object(record["storage_path"])
    except Exception:
        raise HTTPException(status_code=404, detail="Image not found")
    return Response(
        content=data,
        media_type=record.get("content_type", content_type),
        headers={"Cache-Control": "public, max-age=86400"},
    )


@api_router.delete("/gallery/{file_id}")
async def delete_gallery_image(file_id: str):
    result = await db.gallery_uploads.update_one(
        {"id": file_id, "is_deleted": False}, {"$set": {"is_deleted": True}}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Image not found")
    return {"ok": True}


@app.on_event("startup")
async def startup_storage():
    try:
        init_storage()
        logger.info("Object storage initialized")
    except Exception as exc:
        logger.error(f"Object storage init failed: {exc}")


# ---------------- Achievements (public, directly editable) ----------------
import json as jsonlib

ALLOWED_TIERS = {"gold", "silver", "bronze", "ranking"}

ACHIEVEMENT_SEED = [
    {"title": "Junior Mr. India (IBBF)", "year": "2016", "location": "Coimbatore, Tamil Nadu", "org": "IBBF", "description": "", "results": [{"label": "Gold Medal", "tier": "gold"}]},
    {"title": "Junior Mr. India (IBBF)", "year": "2017", "location": "Maharashtra", "org": "IBBF", "description": "", "results": [{"label": "Gold Medal", "tier": "gold"}]},
    {"title": "Mr. World 2018, Delhi", "year": "2018", "location": "Delhi", "org": "National Bodybuilding Union International (NBBUI)", "description": "", "results": [{"label": "Bodybuilding — Gold Medal", "tier": "gold"}, {"label": "Classic Physique — Gold Medal", "tier": "gold"}]},
    {"title": "Mr. Universe 2023", "year": "2023", "location": "Thailand, Pattaya", "org": "", "description": "", "results": [{"label": "Bodybuilding — Gold Medal", "tier": "gold"}, {"label": "Classic Bodybuilding — Gold Medal", "tier": "gold"}]},
    {"title": "Mr. Asia 2019", "year": "2019", "location": "Bangalore", "org": "", "description": "", "results": [{"label": "Bodybuilding — Silver Medal", "tier": "silver"}]},
    {"title": "Mr. Asia 2019", "year": "2019", "location": "Bangalore", "org": "", "description": "", "results": [{"label": "Sports Model — Bronze Medal", "tier": "bronze"}]},
    {"title": "Mr. India (Senior) 2019", "year": "2019", "location": "Kochi / Kerala", "org": "", "description": "", "results": [{"label": "Bodybuilding — Silver Medal", "tier": "silver"}]},
    {"title": "Mr. Bengal", "year": "", "location": "West Bengal", "org": "Various Associations", "description": "", "results": [{"label": "13 Times — Gold Medal", "tier": "gold"}, {"label": "4 Times — Silver Medal", "tier": "silver"}, {"label": "3 Times — 3rd Place", "tier": "bronze"}]},
    {"title": "The Fit Expo Kolkata 2017", "year": "2017", "location": "Kolkata", "org": "", "description": "", "results": [{"label": "Bronze Medalist", "tier": "bronze"}]},
    {"title": "Numerous Other Championships", "year": "", "location": "India", "org": "", "description": "", "results": [{"label": "Bodybuilding & Men's Physique Championships", "tier": "ranking"}]},
    {"title": "Satisb Sugar Classic Bodybuilding Championship 2018", "year": "2018", "location": "Belgaum, Andhra Pradesh", "org": "", "description": "", "results": [{"label": "All India — 7th Position", "tier": "ranking"}]},
    {"title": "Federation Cup 2018", "year": "2018", "location": "Patna, Bihar", "org": "IBBF", "description": "", "results": [{"label": "All India — 7th Position", "tier": "ranking"}]},
    {"title": "Senior Mr. India 2018", "year": "2018", "location": "Pune, India", "org": "", "description": "", "results": [{"label": "Positioned in Top 15", "tier": "ranking"}]},
    {"title": "Mr. Asia & Mr. World Selection 2018", "year": "2018", "location": "Chhattisgarh", "org": "", "description": "", "results": [{"label": "Positioned in Top 10", "tier": "ranking"}]},
]


async def seed_achievements():
    if await db.achievements.count_documents({}) > 0:
        return
    now = datetime.now(timezone.utc).isoformat()
    docs = [
        {"id": str(uuid.uuid4()), "sort": i, "image": None, "created_at": now, **a}
        for i, a in enumerate(ACHIEVEMENT_SEED)
    ]
    await db.achievements.insert_many(docs)
    logger.info("Seeded %d achievements", len(docs))


def delete_object(path: str):
    resp = requests.delete(
        f"{STORAGE_URL}/objects/{path}",
        headers={"X-Storage-Key": init_storage()},
        timeout=30,
    )
    resp.raise_for_status()
    return resp.json()


def parse_achievement_form(title, year, location, org, description, results_raw):
    title = (title or "").strip()
    if len(title) < 2:
        raise HTTPException(status_code=400, detail="Achievement name is required.")
    try:
        results = jsonlib.loads(results_raw or "[]")
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid results data.")
    if not isinstance(results, list):
        raise HTTPException(status_code=400, detail="Invalid results data.")
    cleaned = []
    for r in results:
        label = str(r.get("label", "")).strip()[:140]
        tier = str(r.get("tier", "")).strip().lower()
        if not label:
            continue
        if tier not in ALLOWED_TIERS:
            raise HTTPException(status_code=400, detail="Invalid medal type.")
        cleaned.append({"label": label, "tier": tier})
    if not cleaned:
        raise HTTPException(status_code=400, detail="Add at least one category / result.")
    return {
        "title": title[:200],
        "year": (year or "").strip()[:20],
        "location": (location or "").strip()[:140],
        "org": (org or "").strip()[:160],
        "description": (description or "").strip()[:400],
        "results": cleaned,
    }


async def store_achievement_image(file):
    content_type = (file.content_type or "").lower()
    if content_type not in ALLOWED_IMAGE_TYPES:
        raise HTTPException(status_code=400, detail="Unsupported file type. Please upload a JPG, PNG or WEBP image.")
    data = await file.read()
    if not data:
        raise HTTPException(status_code=400, detail="The selected file is empty.")
    if len(data) > MAX_UPLOAD_BYTES:
        raise HTTPException(status_code=400, detail="Image is too large. Maximum size is 8 MB.")
    path = f"{APP_NAME}/achievements/{uuid.uuid4()}.{ALLOWED_IMAGE_TYPES[content_type]}"
    try:
        put_object(path, data, content_type)
    except Exception as exc:
        logger.error(f"Achievement image storage failure: {exc}")
        raise HTTPException(status_code=502, detail="Image upload failed. Please try again.")
    return {"path": path, "content_type": content_type, "size": len(data)}


@api_router.get("/achievements")
async def list_achievements():
    docs = await db.achievements.find({}, {"_id": 0}).sort([("sort", 1), ("created_at", 1)]).to_list(500)
    if not docs:
        await seed_achievements()
        docs = await db.achievements.find({}, {"_id": 0}).sort([("sort", 1), ("created_at", 1)]).to_list(500)
    return {"items": docs}


@api_router.post("/achievements", status_code=201)
async def create_achievement(
    title: str = Form(""),
    year: str = Form(""),
    location: str = Form(""),
    org: str = Form(""),
    description: str = Form(""),
    results: str = Form("[]"),
    file: UploadFile = File(None),
):
    fields = parse_achievement_form(title, year, location, org, description, results)
    image = None
    if file is not None and file.filename:
        image = await store_achievement_image(file)
    top = await db.achievements.find_one({}, sort=[("sort", -1)])
    doc = {
        "id": str(uuid.uuid4()),
        "sort": (top["sort"] + 1) if top else 0,
        "image": image,
        "created_at": datetime.now(timezone.utc).isoformat(),
        **fields,
    }
    await db.achievements.insert_one(doc)
    doc.pop("_id", None)
    return doc


@api_router.put("/achievements/{achievement_id}")
async def update_achievement(
    achievement_id: str,
    title: str = Form(""),
    year: str = Form(""),
    location: str = Form(""),
    org: str = Form(""),
    description: str = Form(""),
    results: str = Form("[]"),
    remove_image: str = Form("false"),
    file: UploadFile = File(None),
):
    existing = await db.achievements.find_one({"id": achievement_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Achievement not found")
    fields = parse_achievement_form(title, year, location, org, description, results)
    image = existing.get("image")
    if file is not None and file.filename:
        new_image = await store_achievement_image(file)
        if image:
            try:
                delete_object(image["path"])
            except Exception as exc:
                logger.warning(f"Old achievement image cleanup failed: {exc}")
        image = new_image
    elif remove_image == "true" and image:
        try:
            delete_object(image["path"])
        except Exception as exc:
            logger.warning(f"Achievement image removal failed: {exc}")
        image = None
    await db.achievements.update_one({"id": achievement_id}, {"$set": {**fields, "image": image}})
    updated = await db.achievements.find_one({"id": achievement_id}, {"_id": 0})
    return updated


@api_router.get("/achievements/file/{achievement_id}")
async def get_achievement_file(achievement_id: str):
    record = await db.achievements.find_one({"id": achievement_id})
    if not record or not record.get("image"):
        raise HTTPException(status_code=404, detail="Image not found")
    try:
        data, content_type = get_object(record["image"]["path"])
    except Exception:
        raise HTTPException(status_code=404, detail="Image not found")
    return Response(
        content=data,
        media_type=record["image"].get("content_type", content_type),
        headers={"Cache-Control": "public, max-age=86400"},
    )


@api_router.delete("/achievements/{achievement_id}")
async def delete_achievement(achievement_id: str):
    existing = await db.achievements.find_one({"id": achievement_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Achievement not found")
    if existing.get("image"):
        try:
            delete_object(existing["image"]["path"])
        except Exception as exc:
            logger.warning(f"Achievement image delete failed: {exc}")
    await db.achievements.delete_one({"id": achievement_id})
    return {"ok": True}


@app.on_event("startup")
async def startup_achievements():
    try:
        await seed_achievements()
    except Exception as exc:
        logger.error(f"Achievement seeding failed: {exc}")


# Include the router in the main app
app.include_router(api_router)


@app.middleware("http")
async def security_headers(request, call_next):
    response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["Permissions-Policy"] = "camera=(), microphone=(), geolocation=()"
    response.headers["X-Frame-Options"] = "DENY"
    return response

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()