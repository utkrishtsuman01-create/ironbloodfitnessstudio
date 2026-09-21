import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Seo from "@/components/Seo";
import CtaBanner from "@/components/CtaBanner";
import Lightbox from "@/components/Lightbox";
import { GALLERY } from "@/data/content";

const CATEGORIES = ["All", ...new Set(GALLERY.map((g) => g.category))];

const Gallery = () => {
    const [cat, setCat] = useState("All");
    const [lightbox, setLightbox] = useState(null);
    const images = useMemo(() => (cat === "All" ? GALLERY : GALLERY.filter((g) => g.category === cat)), [cat]);

    return (
        <>
            <Seo
                title="Gallery | IRONBLOOD FITNESS STUDIO ♾️ Kolkata"
                description="Real photos from Ironblood Fitness Studio, Kolkata — the training floor, competition moments, trophies and coach Bapi Das."
                path="/gallery"
                image="/images/gym-floor-2.jpg"
            />
            <header className="on-gold border-b border-border pt-40 pb-16 sm:pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">Gallery</p>
                    <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
                        Real place.
                        <span className="block text-stroke">Real work.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-400 sm:text-lg">
                        Every image here is from the studio, the coach or the competitive record — no stock photography.
                    </p>
                </div>
            </header>

            <section className="on-gold py-16 sm:py-24" data-testid="gallery-grid-section">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
                        {CATEGORIES.map((c) => (
                            <button
                                key={c}
                                type="button"
                                onClick={() => setCat(c)}
                                data-testid={`gallery-filter-${c.toLowerCase().replace(/\s+/g, "-")}-button`}
                                aria-pressed={cat === c}
                                className={`border px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                                    cat === c
                                        ? "border-[#173322] bg-[#173322] text-[#F4EDDD]"
                                        : "border-[#173322]/50 text-[#37422F] hover:border-[#173322] hover:text-[#173322]"
                                }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence mode="popLayout">
                            {images.map((img, i) => (
                                <motion.button
                                    layout
                                    key={img.src}
                                    type="button"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.97 }}
                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    onClick={() => setLightbox(i)}
                                    data-testid={`gallery-item-${i + 1}`}
                                    aria-label={`Open image: ${img.alt}`}
                                    className="on-dark group relative block overflow-hidden border border-border text-left"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        loading="lazy"
                                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                                    <span className="absolute bottom-4 left-4 font-mono2 text-[10px] uppercase tracking-[0.25em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        {img.category}
                                    </span>
                                </motion.button>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <Lightbox images={images} index={lightbox} onClose={() => setLightbox(null)} onNavigate={setLightbox} />

            <CtaBanner testId="gallery-cta-banner" eyebrow="LIKE WHAT YOU SEE?" title="Come see it in person" />
        </>
    );
};

export default Gallery;
