import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, MapPin, Medal, Trophy, Award, Dumbbell } from "lucide-react";
import Seo from "@/components/Seo";
import { Reveal, MaskedLines, Stagger, staggerItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Marquee from "@/components/Marquee";
import CtaBanner from "@/components/CtaBanner";
import ReviewCarousel from "@/components/ReviewCarousel";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";
import { BUSINESS, IMAGES, GALLERY, ACHIEVEMENTS, SPECIALIZATIONS, SERVICES, FACILITIES, EXPERIENCE_COPY, MEDAL_STYLES, telHref, waHref } from "@/data/content";

const PEAK_IDS = [4, 3, 1, 8];

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);

    return (
        <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden" data-testid="hero-section">
            <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110" aria-hidden="true">
                <img
                    src={IMAGES.bapiPodium.src}
                    alt=""
                    fetchpriority="high"
                    className="h-full w-full object-cover object-[50%_16%]"
                />
            </motion.div>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#16110A] via-[#16110A]/45 to-[#16110A]/30" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#16110A]/95 via-[#16110A]/55 to-[#16110A]/10" />
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ background: "radial-gradient(60% 55% at 72% 22%, transparent 25%, rgba(22,17,10,0.45) 100%)" }}
            />

            <motion.div
                style={{ y: textY }}
                className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-32 pt-28 sm:px-6 sm:pb-40 lg:px-8"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D9B85C]"
                    data-testid="hero-eyebrow"
                >
                    <span className="mr-3 inline-block h-2 w-2 animate-pulse-dot bg-[#C9A227]" aria-hidden="true" />
                    {BUSINESS.addressShort} · Professional Bodybuilding & Coaching
                </motion.p>

                <h1 className="mt-6 font-display font-black uppercase leading-[0.85] tracking-tight text-white" data-testid="hero-headline">
                    <MaskedLines
                        lines={["Train.", "Focus.", "Transform."]}
                        delay={0.3}
                        lineClassName="text-[17.5vw] sm:text-[11vw] lg:text-[7.2rem] xl:text-[8.2rem]"
                    />
                </h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}>
                    <p className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-[#EDE4CF]">
                        <span className="font-semibold text-white">IRONBLOOD FITNESS STUDIO ♾️</span> — a serious training ground led by{" "}
                        <span className="text-white">Bapi Das</span>, Professional Bodybuilder & Fitness Coach. Mr. Universe 2023 Gold Medalist.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-enquire-button"
                            className="glow-gold inline-flex items-center justify-center gap-3 bg-[#C9A227] px-9 py-4 font-display text-lg font-bold uppercase tracking-wider text-[#1B1409] transition-all duration-300 hover:bg-[#E3B94E]"
                        >
                            Enquire Now <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </a>
                        <a
                            href={telHref}
                            data-testid="hero-call-button"
                            className="inline-flex items-center justify-center gap-3 border border-[#F4EDDD]/40 px-9 py-4 font-display text-lg font-bold uppercase tracking-wider text-[#F4EDDD] backdrop-blur-sm transition-colors duration-300 hover:border-[#F4EDDD] hover:bg-white/10"
                        >
                            <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="relative z-10 border-t border-white/10 bg-[#16110A]/70 backdrop-blur-md"
            >
                <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 lg:grid-cols-4" data-testid="hero-stats">
                    {[
                        ["12+", "Years of Coaching"],
                        ["2×", "Junior Mr. India Gold"],
                        ["Mr. Universe", "2023 · Double Gold"],
                        ["13×", "Mr. Bengal Gold"],
                    ].map(([v, l]) => (
                        <div key={l} className="px-4 py-5 sm:px-8">
                            <dt className="sr-only">{l}</dt>
                            <dd className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">{v}</dd>
                            <dd className="mt-1 font-mono2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-stone-500">{l}</dd>
                        </div>
                    ))}
                </dl>
            </motion.div>
        </section>
    );
};

const StudioIntro = () => (
    <section className="py-24 sm:py-32" data-testid="studio-intro-section">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal>
                <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">Chapter 01 — The Studio</p>
                <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Built for strength.
                    <span className="block text-stroke-gold">Driven by discipline.</span>
                </h2>
                <p className="mt-7 max-w-lg text-base leading-relaxed text-stone-400 sm:text-lg">
                    Ironblood Fitness Studio is a serious bodybuilding and performance studio in Bansdroni Park, Kolkata. No gimmicks, no
                    shortcuts — structured training, strict form, and an environment built by a competitive bodybuilder for people who want to
                    train properly.
                </p>
                <ul className="mt-8 space-y-3">
                    {["Serious bodybuilding culture", "Professional coaching on the floor", "Open 7 days · 6:00 AM – 11:00 PM"].map((t) => (
                        <li key={t} className="flex items-center gap-3 text-sm text-stone-300">
                            <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]" aria-hidden="true" /> {t}
                        </li>
                    ))}
                </ul>
                <Link
                    to="/about"
                    data-testid="studio-intro-about-link"
                    className="mt-9 inline-flex items-center gap-3 font-display text-base font-bold uppercase tracking-wider text-white transition-colors hover:text-[#D9B85C]"
                >
                    About the studio <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
            </Reveal>
            <Reveal delay={0.12}>
                <div className="relative">
                    <div aria-hidden="true" className="absolute -inset-3 border border-[#C9A227]/30" />
                    <img
                        src={IMAGES.gymFloor2.src}
                        alt={IMAGES.gymFloor2.alt}
                        loading="lazy"
                        className="relative aspect-[4/3] w-full border border-border object-cover"
                    />
                    <p className="mt-3 font-mono2 text-[10px] uppercase tracking-[0.25em] text-stone-600">Ironblood training floor — Bansdroni Park</p>
                </div>
            </Reveal>
        </div>
    </section>
);

const OwnerShowcase = () => (
    <section className="border-y border-border bg-[#132B20] py-24 sm:py-32" data-testid="owner-showcase-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading index="02" eyebrow="Chapter 02 — The Coach" title="Bapi Das" />
            <div className="mt-14 grid gap-12 lg:grid-cols-12">
                <Reveal className="lg:col-span-5">
                    <div className="relative">
                        <img
                            src={IMAGES.bapiCollage.src}
                            alt={IMAGES.bapiCollage.alt}
                            loading="lazy"
                            className="w-full border border-border object-cover"
                        />
                        <div className="absolute -bottom-6 -right-3 hidden w-44 border border-[#C9A227]/40 bg-[#16110A] p-1.5 sm:block">
                            <img src={IMAGES.trophyWall.src} alt={IMAGES.trophyWall.alt} loading="lazy" className="w-full object-cover" />
                        </div>
                    </div>
                </Reveal>
                <div className="lg:col-span-7">
                    <Reveal delay={0.08}>
                        <p className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-[#D9B85C]">{BUSINESS.ownerTitle}</p>
                        <h3 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
                            A competitor first. <span className="text-stone-500">A coach always.</span>
                        </h3>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-400">
                            {EXPERIENCE_COPY} When you train at Ironblood, your programming comes from a coach who has stood on the Mr. Universe,
                            Mr. World and Mr. Asia stage — and won.
                        </p>
                    </Reveal>
                    <Stagger className="mt-9 grid gap-3 sm:grid-cols-2" gap={0.06}>
                        {[
                            [Trophy, "Mr. Universe 2023", "Bodybuilding & Classic — Double Gold"],
                            [Medal, "Mr. World 2018 · Delhi", "Bodybuilding & Classic Physique — Double Gold"],
                            [Award, "2× Junior Mr. India", "Gold — 2016 & 2017 · IBBF"],
                            [Dumbbell, "13× Mr. Bengal Gold", "Across various associations"],
                        ].map(([Icon, t, s]) => (
                            <motion.div
                                key={t}
                                variants={staggerItem}
                                className="flex items-start gap-4 border border-border bg-[#211B10] p-5 transition-colors duration-300 hover:border-[#C9A227]/50"
                            >
                                <Icon className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                                <div>
                                    <p className="font-display text-lg font-bold uppercase tracking-wide text-white">{t}</p>
                                    <p className="mt-1 text-xs text-stone-500">{s}</p>
                                </div>
                            </motion.div>
                        ))}
                    </Stagger>
                    <Reveal delay={0.15} className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link
                            to="/contact"
                            data-testid="owner-train-button"
                            className="inline-flex items-center justify-center gap-3 bg-[#C9A227] px-8 py-4 font-display text-lg font-bold uppercase tracking-wider text-[#1B1409] transition-colors duration-300 hover:bg-[#E3B94E]"
                        >
                            Train with Bapi Das
                        </Link>
                        <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="owner-whatsapp-button"
                            className="inline-flex items-center justify-center gap-3 border border-stone-600 px-8 py-4 font-display text-lg font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:border-white hover:bg-white/5"
                        >
                            <MessageCircle className="h-5 w-5" aria-hidden="true" /> Enquire on WhatsApp
                        </a>
                    </Reveal>
                </div>
            </div>
        </div>
    </section>
);

const AchievementPreview = () => {
    const peaks = PEAK_IDS.map((id) => ACHIEVEMENTS.find((a) => a.id === id));
    return (
        <section className="py-24 sm:py-32" data-testid="achievement-preview-section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading index="03" eyebrow="Chapter 03 — Proven on Stage" title="Competition Record" />
                <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {peaks.map((a) => (
                        <motion.article
                            key={a.id}
                            variants={staggerItem}
                            className="group border border-border bg-[#211B10] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50"
                            data-testid={`peak-achievement-${a.id}`}
                        >
                            <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-stone-600">{a.year || "Career"}</p>
                            <h3 className="mt-3 font-display text-2xl font-extrabold uppercase leading-tight text-white">{a.title}</h3>
                            <ul className="mt-4 space-y-2">
                                {a.results.map((r) => (
                                    <li key={r.label} className={`flex items-center gap-2 text-xs font-semibold ${MEDAL_STYLES[r.tier].text}`}>
                                        <span className="h-1.5 w-1.5 rotate-45" style={{ background: MEDAL_STYLES[r.tier].dot }} aria-hidden="true" />
                                        {r.label}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 border-t border-stone-900 pt-3 text-xs text-stone-600">{a.location}</p>
                        </motion.article>
                    ))}
                </Stagger>
                <Reveal className="mt-12">
                    <figure className="group relative overflow-hidden border border-border" data-testid="champion-stage-banner">
                        <img
                            src={IMAGES.bapiTrophyFlag.src}
                            alt={IMAGES.bapiTrophyFlag.alt}
                            loading="lazy"
                            className="max-h-[540px] w-full object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" aria-hidden="true" />
                        <figcaption className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-3 p-6 sm:p-8">
                            <span>
                                <span className="block font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">Championship stage</span>
                                <span className="mt-2 block font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
                                    The work, made visible
                                </span>
                            </span>
                            <span className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-stone-400">Trophy · Medal · Flag</span>
                        </figcaption>
                    </figure>
                </Reveal>
                <Reveal className="mt-12">
                    <Link
                        to="/achievements"
                        data-testid="achievement-preview-all-link"
                        className="inline-flex items-center gap-3 border border-stone-600 px-8 py-4 font-display text-base font-bold uppercase tracking-wider text-[#1B1409] transition-colors duration-300 hover:border-[#C9A227] hover:bg-[#C9A227]"
                    >
                        View all 14 achievements <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};

const Experience = () => (
    <section className="relative overflow-hidden border-y border-border bg-[#132B20] py-24 sm:py-32" data-testid="experience-section">
        <span aria-hidden="true" className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[26rem] font-black leading-none text-white/[0.03]">
            12
        </span>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
                <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">Chapter 04 — Experience</p>
                <h2 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl">
                    12+ Years
                    <span className="block text-2xl font-bold text-stone-500 sm:text-4xl">of training experience</span>
                </h2>
                <blockquote className="mt-10 max-w-3xl border-l-2 border-[#C9A227] pl-6 text-lg leading-relaxed text-stone-300 sm:text-xl">
                    “{EXPERIENCE_COPY}”
                </blockquote>
            </Reveal>
        </div>
    </section>
);

const Specializations = () => (
    <section className="py-24 sm:py-32" data-testid="specializations-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading index="05" eyebrow="Chapter 05 — Specializations" title="How We Train" />
            <Stagger className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                {SPECIALIZATIONS.map((s, i) => (
                    <motion.div
                        key={s.title}
                        variants={staggerItem}
                        className="group bg-[#16110A] p-8 transition-colors duration-300 hover:bg-[#211B10]"
                        data-testid={`specialization-${i + 1}`}
                    >
                        <p className="font-mono2 text-xs text-[#D9B85C]">0{i + 1}</p>
                        <h3 className="mt-4 font-display text-2xl font-extrabold uppercase leading-tight text-white transition-colors group-hover:text-[#D9B85C]">
                            {s.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-stone-500">{s.desc}</p>
                    </motion.div>
                ))}
            </Stagger>
        </div>
    </section>
);

const TrainingBanner = () => (
    <section className="relative overflow-hidden border-y border-border" data-testid="training-banner-section">
        <div className="absolute inset-0" aria-hidden="true">
            <img src={IMAGES.memberPress.src} alt="" loading="lazy" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-[#16110A]/82" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#16110A] via-transparent to-[#16110A]/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <Reveal>
                <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">Chapter 06 — Training</p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
                    Every rep coached. <span className="text-stroke">Every session earned.</span>
                </h2>
            </Reveal>
            <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4" gap={0.05}>
                {SERVICES.slice(0, 8).map((s) => (
                    <motion.p
                        key={s.title}
                        variants={staggerItem}
                        className="border border-white/15 bg-[#16110A]/70 px-4 py-4 font-display text-sm font-bold uppercase tracking-wide text-stone-200 backdrop-blur-sm"
                    >
                        {s.title}
                    </motion.p>
                ))}
            </Stagger>
            <Reveal className="mt-10">
                <Link
                    to="/services"
                    data-testid="training-banner-services-link"
                    className="inline-flex items-center gap-3 bg-white px-8 py-4 font-display text-base font-bold uppercase tracking-wider text-black transition-colors duration-300 hover:bg-[#C9A227] hover:text-[#1B1409]"
                >
                    All 14 training services <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
            </Reveal>
        </div>
    </section>
);

const FacilitiesPreview = () => (
    <section className="py-24 sm:py-32" data-testid="facilities-preview-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading index="07" eyebrow="Chapter 07 — The Floor" title="Facilities" />
            <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
                {["gymFloor1", "gymFloor3", "gymFloor2"].map((key) => (
                    <motion.figure key={key} variants={staggerItem} className="group relative overflow-hidden border border-border">
                        <img
                            src={IMAGES[key].src}
                            alt={IMAGES[key].alt}
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" aria-hidden="true" />
                    </motion.figure>
                ))}
            </Stagger>
            <Reveal className="mt-10">
                <Link
                    to="/facilities"
                    data-testid="facilities-preview-link"
                    className="inline-flex items-center gap-3 font-display text-base font-bold uppercase tracking-wider text-white transition-colors hover:text-[#D9B85C]"
                >
                    Explore the studio <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
            </Reveal>
        </div>
    </section>
);

const GalleryPreview = () => (
    <section className="border-t border-border py-24 sm:py-32" data-testid="gallery-preview-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
                <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">Inside Ironblood</h2>
                <Link
                    to="/gallery"
                    data-testid="gallery-preview-link"
                    className="hidden items-center gap-2 font-display text-base font-bold uppercase tracking-wider text-[#D9B85C] sm:inline-flex"
                >
                    Full gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
            </div>
            <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" gap={0.05}>
                {GALLERY.slice(0, 5).map((img, i) => (
                    <motion.div key={img.src} variants={staggerItem} className={i === 0 ? "col-span-2 row-span-2" : ""}>
                        <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="h-full w-full border border-border object-cover transition-opacity duration-300 hover:opacity-85"
                            style={{ aspectRatio: i === 0 ? "1/1" : "1/1" }}
                        />
                    </motion.div>
                ))}
            </Stagger>
            <Link
                to="/gallery"
                data-testid="gallery-preview-link-mobile"
                className="mt-8 inline-flex items-center gap-2 font-display text-base font-bold uppercase tracking-wider text-[#D9B85C] sm:hidden"
            >
                Full gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
        </div>
    </section>
);

const Reviews = () => (
    <section className="border-t border-border bg-[#132B20] py-24 sm:py-32" data-testid="reviews-section">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">Chapter 09 — Members</p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
                <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
                    What our members say
                </h2>
                <GoogleRatingBadge testId="reviews-google-rating-badge" />
            </div>
            <div className="mt-12">
                <ReviewCarousel />
            </div>
        </div>
    </section>
);

const ContactStrip = () => (
    <section className="py-24 sm:py-32" data-testid="contact-strip-section">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal>
                <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">Chapter 10 — Find Us</p>
                <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
                    Bansdroni Park, <span className="text-stroke-gold">Kolkata</span>
                </h2>
                <address className="mt-7 not-italic text-base leading-relaxed text-stone-400">
                    {BUSINESS.addressLines[0]}
                    <br />
                    {BUSINESS.addressLines[1]}
                </address>
                <p className="mt-4 font-mono2 text-xs uppercase tracking-[0.2em] text-stone-500">
                    {BUSINESS.hoursDays} · {BUSINESS.hoursTime}
                </p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col justify-center gap-4">
                <a
                    href={BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-strip-directions-button"
                    className="inline-flex items-center justify-center gap-3 bg-[#C9A227] px-8 py-5 font-display text-lg font-bold uppercase tracking-wider text-[#1B1409] transition-colors hover:bg-[#E3B94E]"
                >
                    <MapPin className="h-5 w-5" aria-hidden="true" /> Get Directions
                </a>
                <Link
                    to="/contact"
                    data-testid="contact-strip-contact-link"
                    className="inline-flex items-center justify-center gap-3 border border-stone-600 px-8 py-5 font-display text-lg font-bold uppercase tracking-wider text-white transition-colors hover:border-white"
                >
                    Contact the studio
                </Link>
            </Reveal>
        </div>
    </section>
);

const Home = () => (
    <>
        <Seo
            title="IRONBLOOD FITNESS STUDIO ♾️ | Bapi Das — Professional Bodybuilder & Fitness Coach, Kolkata"
            description="Premium bodybuilding and fitness coaching studio in Bansdroni Park, Kolkata. Train under Bapi Das — Mr. Universe 2023 Gold Medalist with 12+ years of coaching experience. Open 7 days, 6 AM – 11 PM."
            path="/"
        />
        <Hero />
        <Marquee />
        <StudioIntro />
        <OwnerShowcase />
        <AchievementPreview />
        <Experience />
        <Specializations />
        <TrainingBanner />
        <FacilitiesPreview />
        <GalleryPreview />
        <CtaBanner
            testId="membership-cta-banner"
            eyebrow="Chapter 08 — Membership"
            title="Your strongest chapter starts here"
            body="Contact us for current membership plans and pricing. No pressure, no fake offers — a straight conversation about your goals."
        />
        <Reviews />
        <ContactStrip />
    </>
);

export default Home;
