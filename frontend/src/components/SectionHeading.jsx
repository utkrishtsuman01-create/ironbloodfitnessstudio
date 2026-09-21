export const SectionHeading = ({ index, eyebrow, title, className = "" }) => (
    <div className={`flex items-end justify-between gap-6 border-b border-border pb-6 ${className}`}>
        <div>
            <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">{eyebrow}</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[0.95] tracking-tight text-white mt-3">
                {title}
            </h2>
        </div>
        {index && (
            <span aria-hidden="true" className="font-display text-6xl sm:text-8xl font-black leading-none text-stroke select-none hidden sm:block">
                {index}
            </span>
        )}
    </div>
);

export default SectionHeading;
