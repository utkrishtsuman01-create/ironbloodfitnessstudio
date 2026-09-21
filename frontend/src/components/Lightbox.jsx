import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

export const Lightbox = ({ images, index, onClose, onNavigate }) => {
    const open = index !== null;
    const img = open ? images[index] : null;

    const prev = useCallback(() => onNavigate((index - 1 + images.length) % images.length), [index, images.length, onNavigate]);
    const next = useCallback(() => onNavigate((index + 1) % images.length), [index, images.length, onNavigate]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open, onClose, prev, next]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-10"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image viewer"
                    data-testid="gallery-lightbox"
                    onClick={onClose}
                >
                    <button
                        type="button"
                        onClick={onClose}
                        data-testid="lightbox-close-button"
                        aria-label="Close image viewer"
                        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-stone-700 text-[#1B1409] transition-colors hover:border-[#C9A227] hover:bg-[#C9A227]"
                    >
                        <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        data-testid="lightbox-prev-button"
                        aria-label="Previous image"
                        className="absolute left-3 sm:left-6 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-stone-700 bg-black/60 text-[#1B1409] transition-colors hover:border-[#C9A227] hover:bg-[#C9A227]"
                    >
                        <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        data-testid="lightbox-next-button"
                        aria-label="Next image"
                        className="absolute right-3 sm:right-6 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-stone-700 bg-black/60 text-[#1B1409] transition-colors hover:border-[#C9A227] hover:bg-[#C9A227]"
                    >
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <motion.figure
                        key={index}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="max-h-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={img.src} alt={img.alt} className="max-h-[78vh] w-auto max-w-full object-contain" />
                        <figcaption className="mt-4 flex items-start justify-between gap-4">
                            <span className="text-xs sm:text-sm leading-relaxed text-stone-400">{img.alt}</span>
                            <span className="shrink-0 font-mono2 text-xs text-stone-600" data-testid="lightbox-counter">
                                {index + 1} / {images.length}
                            </span>
                        </figcaption>
                    </motion.figure>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
