import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { motion } from "framer-motion";
import { BUSINESS, IMAGES, SPECIALIZATIONS, EXPERIENCE_COPY } from "@/data/content";

const CHAPTERS = [
    {
        n: "01",
        t: "A studio built by a competitor",
        b: "Ironblood Fitness Studio is a serious bodybuilding and performance studio in Bansdroni Park, Kolkata. The culture here is set by competitive bodybuilding — discipline, consistency and respect for the work.",
    },
    {
        n: "02",
        t: "Training philosophy",
        b: "Form before weight. Consistency before intensity. Nutrition as part of training, not an afterthought. Every program is built around the individual — their body, their schedule, their goal.",
    },
    {
        n: "03",
        t: "A professional environment",
        b: "A well-maintained floor, proper equipment and coaches who pay attention. Members train with focus — motivating without being intimidating, whether you are a beginner or preparing for the stage.",
    },
];

const About = () => (
    <>
        <Seo
            title="About | IRONBLOOD FITNESS STUDIO ♾️ — Bapi Das, Kolkata"
            description="About Ironblood Fitness Studio, Bansdroni Park, Kolkata — led by Bapi Das, Professional Bodybuilder & Fitness Coach with 12+ years of experience in coaching, bodybuilding and transformation."
            path="/about"
            image="/images/trophy-wall.jpg"
        />
        <header className="relative overflow-hidden border-b border-border pt-40 pb-20 sm:pb-28">
            <div className="absolute inset-0" aria-hidden="true">
                <img src={IMAGES.trophyWall.src} alt="" className="h-full w-full object-cover opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1E] via-[#0F2A1E]/70 to-[#0F2A1E]/50" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">About Ironblood</p>
                <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
                    Iron in the blood.
                    <span className="block text-stroke">Discipline in the work.</span>
                </h1>
            </div>
        </header>

        <section className="on-gold py-24 sm:py-32" data-testid="about-manifesto-section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="The Studio Manifesto" title="What we stand for" />
                <Stagger className="mt-14 grid gap-px bg-border lg:grid-cols-3">
                    {CHAPTERS.map((c) => (
                        <motion.article key={c.n} variants={staggerItem} className="bg-[#E2C266] p-8 sm:p-10" data-testid={`about-chapter-${c.n}`}>
                            <p className="font-display text-6xl font-black text-stroke-gold">{c.n}</p>
                            <h2 className="mt-5 font-display text-2xl font-extrabold uppercase leading-tight text-white">{c.t}</h2>
                            <p className="mt-4 text-sm leading-relaxed text-stone-400">{c.b}</p>
                        </motion.article>
                    ))}
                </Stagger>
            </div>
        </section>

        <section className="border-y border-border bg-[#123222] py-24 sm:py-32" data-testid="about-coach-section">
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <Reveal>
                    <div className="relative">
                        <div aria-hidden="true" className="absolute -inset-3 border border-[#C9A227]/30" />
                        <img src={IMAGES.bapiPose.src} alt={IMAGES.bapiPose.alt} loading="lazy" className="relative w-full border border-border object-cover" />
                        <div className="absolute -bottom-6 -right-3 hidden w-40 border border-[#C9A227]/40 bg-[#D9B44A] p-1.5 sm:block">
                            <img src={IMAGES.bapiStageBw.src} alt={IMAGES.bapiStageBw.alt} loading="lazy" className="w-full object-cover" />
                        </div>
                    </div>
                </Reveal>
                <div>
                    <Reveal>
                        <p className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-[#D9B85C]">{BUSINESS.ownerTitle}</p>
                        <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
                            {BUSINESS.owner}
                        </h2>
                        <blockquote className="mt-8 border-l-2 border-[#C9A227] pl-6 text-base leading-relaxed text-stone-300 sm:text-lg">
                            “{EXPERIENCE_COPY}”
                        </blockquote>
                        <p className="mt-6 text-base leading-relaxed text-stone-400">
                            His competitive record spans Mr. Universe, Mr. World, Mr. Asia and Mr. India stages — experience that shapes every
                            program written inside Ironblood Fitness Studio.
                        </p>
                    </Reveal>
                    <Stagger className="mt-8 space-y-3" gap={0.05}>
                        {[
                            "Mr. Universe 2023 — Double Gold, Pattaya",
                            "Mr. World 2018 — Double Gold, Delhi",
                            "2× Junior Mr. India — Gold, IBBF",
                            "13× Mr. Bengal — Gold",
                        ].map((t) => (
                            <motion.p key={t} variants={staggerItem} className="flex items-center gap-3 text-sm text-stone-300">
                                <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37]" aria-hidden="true" /> {t}
                            </motion.p>
                        ))}
                    </Stagger>
                    <Reveal delay={0.12} className="mt-10">
                        <Link
                            to="/achievements"
                            data-testid="about-achievements-link"
                            className="inline-flex items-center gap-3 bg-[#C9A227] px-8 py-4 font-display text-base font-bold uppercase tracking-wider text-[#1B1409] transition-colors hover:bg-[#E3B94E]"
                        >
                            Full competition record <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>

        <section className="on-gold py-24 sm:py-32" data-testid="about-specializations-section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Coaching Scope" title="Specializations" />
                <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {SPECIALIZATIONS.map((s) => (
                        <motion.div key={s.title} variants={staggerItem} className="border border-border bg-[#142B21] p-7 transition-colors hover:border-[#C9A227]/50">
                            <h3 className="font-display text-xl font-extrabold uppercase text-white">{s.title}</h3>
                            <p className="mt-3 text-sm text-stone-500">{s.desc}</p>
                        </motion.div>
                    ))}
                </Stagger>
            </div>
        </section>

        <CtaBanner testId="about-cta-banner" title="Train where champions train" body="Visit the studio in Bansdroni Park or send an enquiry — the first conversation costs nothing." />
    </>
);

export default About;
