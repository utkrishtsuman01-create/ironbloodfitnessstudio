export const HoursBlock = ({ tone = "onGold", className = "", testId = "hours-block" }) => {
    const head = tone === "onGold" ? "text-[#1B5E3A]" : "text-[#E3B94E]";
    const text = tone === "onGold" ? "text-[#37422F]" : "text-stone-300";
    const closed = tone === "onGold" ? "text-[#8A5A17]" : "text-[#C9A227]";
    return (
        <div className={className} data-testid={testId}>
            <p className={`font-mono2 text-[11px] uppercase tracking-[0.25em] ${head}`}>Opening Hours</p>
            <p className={`mt-3 font-display text-lg font-bold uppercase tracking-wide ${text}`}>Monday – Saturday</p>
            <p className={`mt-1 text-sm ${text}`}>Morning: 6:30 AM – 12:00 PM</p>
            <p className={`text-sm ${text}`}>Evening: 4:00 PM – 10:45 PM</p>
            <p className={`mt-2 font-display text-lg font-bold uppercase tracking-wide ${closed}`}>Sunday — Closed</p>
        </div>
    );
};

export default HoursBlock;
