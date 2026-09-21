import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { REVIEWS, BUSINESS } from "@/data/content";

const AUTO_MS = 6000;

export const ReviewCarousel = () => {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const timer = useRef(null);

    const go = useCallback((next) => {
        setIndex((i) => (next + REVIEWS.length) % REVIEWS.length);
    }, []);

    useEffect(() => {
        if (paused) return;
        timer.current = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), AUTO_MS);
        return () => clearInterval(timer.current);
    }, [paused, index]);

    const manual = (next) => {
        setPaused(true);
        go(next);
    };

    const review = REVIEWS[index];

    return (
        <div
            data-testid="review-carousel"
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div className="min-h-[300px] sm:min-h-[260px]" aria-live="polite">
                <AnimatePresence mode="wait">
                    <motion.figure
                        key={index}
                        initial={{ opacity: 0, x: 32 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -32 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        data-testid={`review-slide-${index + 1}`}
                    >
                        <Quote className="h-8 w-8 text-[#D61C24]" aria-hidden="true" />
                        <blockquote className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-200 whitespace-pre-line">
                            “{review.text}”
                        </blockquote>
                        <figcaption className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                            <span className="font-display text-xl font-bold uppercase tracking-wide text-white">{review.name}</span>
                            <span className="flex gap-1" role="img" aria-label="Rated 5 out of 5 stars">
                                {[...Array(5)].map((_, s) => (
                                    <Star key={s} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
                                ))}
                            </span>
                        </figcaption>
                    </motion.figure>
                </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-zinc-900 pt-6">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => manual(index - 1)}
                        data-testid="review-carousel-prev-button"
                        aria-label="Previous review"
                        className="flex h-11 w-11 items-center justify-center border border-zinc-700 text-white transition-colors hover:border-[#D61C24] hover:bg-[#D61C24]"
                    >
                        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        onClick={() => manual(index + 1)}
                        data-testid="review-carousel-next-button"
                        aria-label="Next review"
                        className="flex h-11 w-11 items-center justify-center border border-zinc-700 text-white transition-colors hover:border-[#D61C24] hover:bg-[#D61C24]"
                    >
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <span data-testid="review-carousel-progress" className="ml-3 font-mono2 text-xs tracking-[0.2em] text-zinc-500">
                        {index + 1} / {REVIEWS.length}
                    </span>
                </div>
                <a
                    href={BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="review-carousel-google-link"
                    className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-zinc-500 transition-colors hover:text-[#FF4A52]"
                >
                    Google Reviews ↗
                </a>
            </div>

            <div className="mt-5 flex gap-1.5" aria-hidden="true">
                {REVIEWS.map((_, i) => (
                    <span key={i} className={`h-[3px] flex-1 transition-colors duration-500 ${i === index ? "bg-[#D61C24]" : "bg-zinc-800"}`} />
                ))}
            </div>
        </div>
    );
};

export default ReviewCarousel;
