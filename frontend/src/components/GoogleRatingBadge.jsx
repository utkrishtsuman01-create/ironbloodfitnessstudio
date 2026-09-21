import { Star } from "lucide-react";
import { BUSINESS } from "@/data/content";

export const GoogleRatingBadge = ({ testId = "google-rating-badge", compact = false }) => (
    <a
        href={BUSINESS.googleListingUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={testId}
        aria-label={`Rated ${BUSINESS.googleRating} out of 5 from ${BUSINESS.googleReviewCount} Google reviews — open the Google listing`}
        className={`group inline-flex items-center gap-4 border border-border bg-[#142B21] transition-colors duration-300 hover:border-[#D4AF37]/50 ${
            compact ? "px-4 py-3" : "px-6 py-4"
        }`}
    >
        <span className="flex flex-col items-start">
            <span className="flex items-center gap-2">
                <span className="font-display text-2xl font-black leading-none text-white">{BUSINESS.googleRating}</span>
                <span className="flex gap-0.5" role="img" aria-label={`${BUSINESS.googleRating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
                    ))}
                </span>
            </span>
            <span className="mt-1.5 font-mono2 text-[10px] uppercase tracking-[0.2em] text-stone-500 transition-colors group-hover:text-stone-300">
                {BUSINESS.googleReviewCount} Google Reviews
            </span>
        </span>
        <span aria-hidden="true" className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
            ↗
        </span>
    </a>
);

export default GoogleRatingBadge;
