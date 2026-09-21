import { BUSINESS } from "@/data/content";

const ITEMS = [
    "JUNIOR MR. INDIA GOLD — 2016",
    "JUNIOR MR. INDIA GOLD — 2017",
    "MR. WORLD DOUBLE GOLD — 2018",
    "MR. UNIVERSE DOUBLE GOLD — 2023",
    "MR. ASIA SILVER — 2019",
    "13× MR. BENGAL GOLD",
    "12+ YEARS OF COACHING",
    "IRONBLOOD FITNESS STUDIO ♾️",
];

export const Marquee = ({ dark = false }) => (
    <div
        className={`marquee-paused overflow-hidden border-y border-border py-4 sm:py-5 ${dark ? "bg-[#2A2010]" : "bg-[#241B0C]"}`}
        aria-label={`Career highlights of ${BUSINESS.owner}`}
    >
        <div className="animate-marquee flex w-max whitespace-nowrap">
            {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
                    {ITEMS.map((item, i) => (
                        <span key={i} className="flex items-center">
                            <span className="font-display text-lg sm:text-2xl font-bold uppercase tracking-wide text-stone-500 px-6">
                                {item}
                            </span>
                            <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]" />
                        </span>
                    ))}
                </div>
            ))}
        </div>
    </div>
);

export default Marquee;
