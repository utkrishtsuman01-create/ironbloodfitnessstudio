import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight, MonitorSmartphone, ClipboardList, TrendingUp } from "lucide-react";
import Seo from "@/components/Seo";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ONLINE_PRICING, IMAGES, waHref, telHref } from "@/data/content";

const HIGHLIGHTS = [
    { icon: MonitorSmartphone, title: "Train From Anywhere", desc: "Structured programming delivered remotely — same discipline as the studio floor." },
    { icon: ClipboardList, title: "Diet Plans Included", desc: "Nutrition built around your training, from a coach who has done it on stage." },
    { icon: TrendingUp, title: "Progress That Is Tracked", desc: "Regular check-ins and adjustments keep your plan moving with you." },
];

const OnlineCoaching = () => (
    <>
        <Seo
            title="Online Coaching | IRONBLOOD FITNESS STUDIO ♾️ — Train with Bapi Das Anywhere"
            description="Online coaching by Bapi Das: Online Personal Training Transformation Class ₹8,888/month, Bodybuilding & Men's Physique competition preparation from ₹5,888/month, diet plans ₹888."
            path="/online-coaching"
            image="/images/bapi-stage-side.jpg"
        />
        <header className="relative overflow-hidden border-b border-border pt-40 pb-20 sm:pb-28">
            <div className="absolute inset-0" aria-hidden="true">
                <img src={IMAGES.bapiStageSide.src} alt="" className="h-full w-full object-cover object-top opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1E] via-[#0F2A1E]/80 to-[#0F2A1E]/55" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">Remote Training</p>
                <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
                    Online
                    <span className="block text-stroke">Coaching.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
                    Train under Bapi Das from anywhere — transformation coaching, competition preparation and diet plans, delivered online with
                    championship-level structure.
                </p>
            </div>
        </header>

        <section className="on-gold py-20 sm:py-24" data-testid="online-highlights-section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Stagger className="grid gap-px bg-border sm:grid-cols-3" gap={0.05}>
                    {HIGHLIGHTS.map((h) => {
                        const Icon = h.icon;
                        return (
                        <motion.div key={h.title} variants={staggerItem} className="group bg-[#E2C266] p-8 transition-colors duration-300 hover:bg-[#1B5E3A]">
                            <Icon className="h-6 w-6 text-[#173322] transition-colors group-hover:text-[#E3B94E]" aria-hidden="true" />
                            <h2 className="mt-5 font-display text-2xl font-extrabold uppercase text-white transition-colors group-hover:text-[#F4EDDD]">{h.title}</h2>
                            <p className="mt-3 text-sm leading-relaxed text-stone-500 transition-colors duration-300 group-hover:text-[#D8E2CC]">{h.desc}</p>
                        </motion.div>
                        );
                    })}
                </Stagger>
            </div>
        </section>

        <section className="on-gold border-t border-border py-20 sm:py-28" data-testid="online-pricing-section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Online Coaching — Fee Structure" title="Plans & pricing" />
                <div className="mt-14 space-y-16">
                    {ONLINE_PRICING.map((group, gi) => (
                        <div key={group.group} data-testid={`online-group-${gi + 1}`}>
                            <div className="flex flex-wrap items-center gap-4">
                                <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
                                    {group.group}
                                </h2>
                                <span className="border border-[#173322]/50 px-3 py-1 font-mono2 text-[9px] uppercase tracking-[0.25em] text-[#1B5E3A]">
                                    {group.tag}
                                </span>
                            </div>
                            <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
                                {group.plans.map((plan, pi) => (
                                    <motion.article
                                        key={plan.label}
                                        variants={staggerItem}
                                        className="flex flex-col border border-border bg-[#142B21] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:bg-[#1B5E3A]"
                                        data-testid={`online-plan-${gi + 1}-${pi + 1}`}
                                    >
                                        <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#E3B94E]">{plan.label}</p>
                                        <p className="mt-4 font-display text-5xl font-black text-white">{plan.price}</p>
                                        <p className="mt-2 text-xs text-stone-400">{group.group}</p>
                                        <a
                                            href={waHref}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-testid={`online-plan-${gi + 1}-${pi + 1}-enquire-button`}
                                            className="mt-7 inline-flex items-center justify-center gap-2 border border-[#C9A227]/60 px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#C9A227] hover:text-[#173322]"
                                        >
                                            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Enquire on WhatsApp
                                        </a>
                                    </motion.article>
                                ))}
                            </Stagger>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="border-y border-border bg-[#0F2A1E] py-20 sm:py-28" data-testid="online-cta-section">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <Reveal>
                    <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
                        Start online coaching
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone-400">
                        Tell us your goal — transformation, competition or diet — and Bapi Das will map your starting point.
                    </p>
                    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            to="/contact"
                            data-testid="online-start-button"
                            className="glow-gold inline-flex items-center justify-center gap-3 bg-[#C9A227] px-9 py-4 font-display text-lg font-bold uppercase tracking-wider text-[#173322] transition-colors duration-300 hover:bg-[#E3B94E]"
                        >
                            Start Online Coaching <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </Link>
                        <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="online-whatsapp-button"
                            className="inline-flex items-center justify-center gap-3 border border-[#C9A227]/60 px-9 py-4 font-display text-lg font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#C9A227] hover:text-[#173322]"
                        >
                            <MessageCircle className="h-5 w-5" aria-hidden="true" /> Enquire on WhatsApp
                        </a>
                        <a
                            href={telHref}
                            data-testid="online-call-button"
                            className="inline-flex items-center justify-center gap-3 border border-[#C9A227]/60 px-9 py-4 font-display text-lg font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#C9A227] hover:text-[#173322]"
                        >
                            <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    </>
);

export default OnlineCoaching;
