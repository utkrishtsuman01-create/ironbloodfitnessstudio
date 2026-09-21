import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Seo from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { ACHIEVEMENTS, MEDAL_STYLES, IMAGES } from "@/data/content";

const FILTERS = [
    { key: "all", label: "All" },
    { key: "gold", label: "Gold" },
    { key: "silver", label: "Silver" },
    { key: "bronze", label: "Bronze" },
    { key: "ranking", label: "Rankings" },
];

const Achievements = () => {
    const [filter, setFilter] = useState("all");
    const list = useMemo(
        () => (filter === "all" ? ACHIEVEMENTS : ACHIEVEMENTS.filter((a) => a.results.some((r) => r.tier === filter))),
        [filter]
    );

    return (
        <>
            <Seo
                title="Achievements | Bapi Das — Mr. Universe 2023, Mr. World 2018 | IRONBLOOD FITNESS STUDIO"
                description="The complete competitive record of Bapi Das: Mr. Universe 2023 Double Gold, Mr. World 2018 Double Gold, 2× Junior Mr. India Gold, 13× Mr. Bengal Gold and more — all 14 achievements."
                path="/achievements"
                image="/images/bapi-collage.jpg"
            />
            <header className="border-b border-border pt-40 pb-16 sm:pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#FF4A52]">The Record</p>
                    <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
                        14 achievements.
                        <span className="block text-stroke">One standard.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                        Every title, medal and ranking from the competitive career of Bapi Das — presented exactly as earned.
                    </p>
                </div>
            </header>

            <section className="border-b border-border" data-testid="champion-banner-section">
                <Reveal>
                    <img
                        src={IMAGES.compPoster.src}
                        alt={IMAGES.compPoster.alt}
                        loading="lazy"
                        className="w-full object-cover object-center max-h-[520px]"
                    />
                </Reveal>
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                    <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-zinc-600">On stage — trophy presentation</p>
                    <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#FF4A52]">Ironblood Muscle & Fitness Studio</p>
                </div>
            </section>

            <section className="border-b border-border bg-[#0E0E10] py-16 sm:py-20" data-testid="on-stage-section">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between gap-6">
                        <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">On stage</h2>
                        <p className="hidden font-mono2 text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:block">Contest condition · Championship lights</p>
                    </div>
                    <div className="mt-10 grid gap-5 sm:grid-cols-2">
                        {[IMAGES.bapiStageBw, IMAGES.bapiStageSide].map((img) => (
                            <Reveal key={img.src}>
                                <figure className="group relative overflow-hidden border border-border">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        loading="lazy"
                                        className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" aria-hidden="true" />
                                </figure>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 sm:py-28" data-testid="achievements-list-section">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter achievements by medal">
                        {FILTERS.map((f) => (
                            <button
                                key={f.key}
                                type="button"
                                onClick={() => setFilter(f.key)}
                                data-testid={`achievement-filter-${f.key}-button`}
                                aria-pressed={filter === f.key}
                                className={`border px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                                    filter === f.key
                                        ? "border-[#D61C24] bg-[#D61C24] text-white"
                                        : "border-zinc-700 text-zinc-400 hover:border-zinc-400 hover:text-white"
                                }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence mode="popLayout">
                            {list.map((a) => {
                                const topTier = a.results[0].tier;
                                const style = MEDAL_STYLES[topTier];
                                return (
                                    <motion.article
                                        layout
                                        key={a.id}
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.97 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className={`group flex flex-col border bg-[#121214] p-7 transition-all duration-300 hover:-translate-y-1 ${
                                            topTier === "gold" ? "border-[#D4AF37]/30 hover:border-[#D4AF37]/60" : "border-border hover:border-zinc-500"
                                        }`}
                                        data-testid={`achievement-card-${a.id}`}
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                                                {a.year || "Career"} {a.org ? `· ${a.org}` : ""}
                                            </p>
                                            <span className={`border px-2 py-0.5 font-mono2 text-[9px] uppercase tracking-[0.2em] ${style.ring} ${style.text}`}>
                                                {style.label}
                                            </span>
                                        </div>
                                        <h2 className="mt-4 font-display text-2xl font-extrabold uppercase leading-tight text-white">{a.title}</h2>
                                        <ul className="mt-5 flex-1 space-y-2">
                                            {a.results.map((r) => (
                                                <li key={r.label} className={`flex items-center gap-2.5 text-sm font-semibold ${MEDAL_STYLES[r.tier].text}`}>
                                                    <span className="h-1.5 w-1.5 rotate-45" style={{ background: MEDAL_STYLES[r.tier].dot }} aria-hidden="true" />
                                                    {r.label}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-6 border-t border-zinc-900 pt-4 text-xs uppercase tracking-[0.15em] text-zinc-600">{a.location}</p>
                                    </motion.article>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>

                    <Reveal className="mt-16">
                        <div className="flex flex-col items-start gap-6 border border-border bg-[#0E0E10] p-8 sm:flex-row sm:items-center">
                            <img
                                src={IMAGES.trophyWall.src}
                                alt={IMAGES.trophyWall.alt}
                                loading="lazy"
                                className="w-full border border-border object-cover sm:w-64"
                            />
                            <div>
                                <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">The wall of proof</h2>
                                <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
                                    Trophies, medals and certificates from these championships are displayed inside the studio — visit and see
                                    the record in person.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <CtaBanner testId="achievements-cta-banner" eyebrow="LEARN FROM A CHAMPION" title="Train under a proven competitor" />
        </>
    );
};

export default Achievements;
