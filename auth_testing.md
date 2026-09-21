# Auth Testing Playbook — IRONBLOOD FITNESS STUDIO

## Accounts
- Owner: phone `8282072600`, password `ironbloodbapi20@` (is_owner=true, seeded at startup from backend/.env OWNER_PHONE/OWNER_PASSWORD)
- Test user: created via POST /api/auth/signup (phone+password login)

## Endpoints (all under /api)
- POST /api/auth/signup {name, email, phone, password, confirm_password}
- POST /api/auth/login {phone, password} — 5 failed attempts = 15 min lockout per ip+phone
- POST /api/auth/logout
- GET /api/auth/me
- POST /api/auth/refresh
- Owner-only (401 unauthenticated / 403 non-owner): POST /api/gallery, DELETE /api/gallery/{id}, POST /api/achievements, PUT /api/achievements/{id}, DELETE /api/achievements/{id}
- Public GETs: /api/gallery, /api/gallery/file/{id}, /api/achievements, /api/achievements/file/{id}

## Session
- httpOnly cookies: access_token (24h) + refresh_token (7d), SameSite=Lax, Secure. Passwords bcrypt-hashed ($2b$).

## Quick tests
```
API=https://bapi-das-elite.preview.emergentagent.com/api
# owner login
curl -c /tmp/ck.txt -X POST $API/auth/login -H "Content-Type: application/json" -d '{"phone":"8282072600","password":"ironbloodbapi20@"}'
curl -b /tmp/ck.txt $API/auth/me
# unauthenticated rejection
curl -X POST $API/gallery -F "file=@x.jpg"   # expect 401
# non-owner rejection
curl -c /tmp/ck2.txt -X POST $API/auth/signup -H "Content-Type: application/json" -d '{"name":"Test User","email":"t@t.com","phone":"9876543210","password":"password123","confirm_password":"password123"}'
curl -b /tmp/ck2.txt -X POST $API/gallery -F "file=@x.jpg"   # expect 403
```

## Mongo verification
```
mongosh $MONGO_URL
db.users.find({is_owner: true})
db.users.findOne({}, {password_hash: 1})  # must start with $2b$
```
