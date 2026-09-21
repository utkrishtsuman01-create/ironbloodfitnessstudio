import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Seo from "@/components/Seo";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { BUSINESS, FACILITIES, IMAGES } from "@/data/content";

const Facilities = () => (
    <>
        <Seo
            title="Facilities | IRONBLOOD FITNESS STUDIO ♾️ Bansdroni Park, Kolkata"
            description="Inside Ironblood Fitness Studio: plate-loaded strength machines, full free-weights area, cardio equipment, benches and cable stations, functional training space — open 7 days, 6 AM to 11 PM."
            path="/facilities"
            image="/images/gym-floor-1.jpg"
        />
        <header className="relative overflow-hidden border-b border-border pt-40 pb-20 sm:pb-28">
            <div className="absolute inset-0" aria-hidden="true">
                <img src={IMAGES.gymFloor1.src} alt="" className="h-full w-full object-cover object-center opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/75 to-[#0A0A0B]/50" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#FF4A52]">Facilities</p>
                <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
                    The floor
                    <span className="block text-stroke">does the talking.</span>
                </h1>
                <p className="mt-6 flex items-center gap-2 font-mono2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                    <Clock className="h-4 w-4 text-[#FF4A52]" aria-hidden="true" /> {BUSINESS.hoursDays} · {BUSINESS.hoursTime}
                </p>
            </div>
        </header>

        <section className="py-24 sm:py-32" data-testid="facilities-grid-section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Inside the Studio" title="What you train with" />
                <Stagger className="mt-14 grid gap-5 md:grid-cols-2" gap={0.05}>
                    {FACILITIES.map((f, i) => {
                        const img = IMAGES[f.image];
                        return (
                            <motion.article
                                key={f.title}
                                variants={staggerItem}
                                className="group relative overflow-hidden border border-border"
                                data-testid={`facility-card-${i + 1}`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" aria-hidden="true" />
                                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                                    <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#FF4A52]">0{i + 1}</p>
                                    <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">{f.title}</h2>
                                    <p className="mt-2 max-w-md text-sm text-zinc-300">{f.desc}</p>
                                </div>
                            </motion.article>
                        );
                    })}
                </Stagger>
            </div>
        </section>

        <section className="border-t border-border bg-[#0E0E10] py-24 sm:py-32" data-testid="facilities-atmosphere-section">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <Reveal>
                    <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
                        Built to keep you <span className="text-stroke-red">locked in.</span>
                    </h2>
                    <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400">
                        LED-lit training zones, a competition-grade atmosphere and a trophy shelf that reminds you why you showed up. The studio
                        is maintained daily and laid out for focused, uninterrupted sessions.
                    </p>
                    <ul className="mt-8 space-y-3">
                        {["Strength, cardio and functional zones", "Trophy & achievement display", "Open every day of the week"].map((t) => (
                            <li key={t} className="flex items-center gap-3 text-sm text-zinc-300">
                                <span className="h-1.5 w-1.5 rotate-45 bg-[#D61C24]" aria-hidden="true" /> {t}
                            </li>
                        ))}
                    </ul>
                </Reveal>
                <Reveal delay={0.12}>
                    <img
                        src={IMAGES.gymFloor3.src}
                        alt={IMAGES.gymFloor3.alt}
                        loading="lazy"
                        className="w-full border border-border object-cover"
                    />
                </Reveal>
            </div>
        </section>

        <CtaBanner testId="facilities-cta-banner" eyebrow="SEE IT YOURSELF" title="Walk the floor before you decide" body="Drop in during opening hours or message us on WhatsApp to plan your visit." />
    </>
);

export default Facilities;
