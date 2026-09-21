import { Instagram, Facebook, Youtube } from "lucide-react";

const ICONS = { instagram: Instagram, facebook: Facebook, youtube: Youtube };
const LABELS = { instagram: "Instagram", facebook: "Facebook", youtube: "YouTube" };

export const SocialIcons = ({ links, tone = "onGreen", testId = "social", className = "" }) => {
    const styles =
        tone === "onGold"
            ? "border-[#173322]/50 text-[#173322] hover:bg-[#173322] hover:text-[#F4EDDD]"
            : "border-[#C9A227]/50 text-[#E3B94E] hover:bg-[#C9A227] hover:text-[#173322]";
    return (
        <div className={`flex flex-wrap gap-3 ${className}`}>
            {Object.entries(links).map(([key, url]) => {
                const Icon = ICONS[key];
                if (!Icon) return null;
                return (
                    <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${LABELS[key]} (opens in a new tab)`}
                        data-testid={`${testId}-${key}-link`}
                        className={`flex h-11 w-11 items-center justify-center border transition-colors duration-300 ${styles}`}
                    >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                );
            })}
        </div>
    );
};

export default SocialIcons;
