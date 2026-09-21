import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import { waHref, IMAGES } from "@/data/content";

const PLANS = [
    {
        n: "01",
        title: "General Training Membership",
        desc: "Full access to the training floor — strength, cardio and functional zones — during all opening hours.",
        points: ["All equipment zones", "7-day access, 6 AM – 11 PM", "Floor trainer support"],
    },
    {
        n: "02",
        title: "Personal Coaching",
        desc: "One-on-one programming and coached sessions built around your body, schedule and goal.",
        points: ["Customized workout design", "Form correction every session", "Nutrition guidance"],
        featured: true,
    },
    {
        n: "03",
        title: "Competition Preparation",
        desc: "Stage-focused preparation under Bapi Das for bodybuilding and physique competitors.",
        points: ["Contest-prep programming", "Posing & stage readiness", "Diet & peak-week structure"],
    },
];

const Memberships = () => (
    <>
        <Seo
            title="Memberships | IRONBLOOD FITNESS STUDIO ♾️ Kolkata"
            description="Membership enquiry for Ironblood Fitness Studio, Bansdroni Park, Kolkata. Contact us for current membership plans and pricing — call or chat on WhatsApp."
            path="/memberships"
            image="/images/gym-community.jpg"
        />
        <header className="relative overflow-hidden border-b border-border pt-40 pb-20 sm:pb-28">
            <div className="absolute inset-0" aria-hidden="true">
                <img src={IMAGES.gymCommunity.src} alt="" className="h-full w-full object-cover object-top opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1E] via-[#0F2A1E]/75 to-[#0F2A1E]/50" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">Memberships</p>
                <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
                    Join the
                    <span className="block text-stroke">bloodline.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-400 sm:text-lg">
                    Contact us for current membership plans and pricing. Straight answers, no fake offers.
                </p>
            </div>
        </header>

        <section className="on-gold py-24 sm:py-32" data-testid="membership-plans-section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Stagger className="grid gap-5 lg:grid-cols-3" gap={0.08}>
                    {PLANS.map((p) => (
                        <motion.article
                            key={p.n}
                            variants={staggerItem}
                            className={`flex flex-col border p-8 sm:p-10 ${
                                p.featured ? "glow-gold border-[#C9A227] bg-[#142B21]" : "border-border bg-[#123222]"
                            }`}
                            data-testid={`membership-plan-${p.n}`}
                        >
                            <div className="flex items-center justify-between">
                                <p className="font-display text-5xl font-black text-stroke">{p.n}</p>
                                {p.featured && (
                                    <span className="bg-[#C9A227] px-3 py-1 font-mono2 text-[9px] uppercase tracking-[0.25em] text-[#1B1409]">
                                        Most Enquired
                                    </span>
                                )}
                            </div>
                            <h2 className="mt-6 font-display text-3xl font-extrabold uppercase leading-tight text-white">{p.title}</h2>
                            <p className="mt-4 text-sm leading-relaxed text-stone-400">{p.desc}</p>
                            <ul className="mt-6 flex-1 space-y-3 border-t border-stone-800 pt-6">
                                {p.points.map((pt) => (
                                    <li key={pt} className="flex items-center gap-3 text-sm text-stone-300">
                                        <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]" aria-hidden="true" /> {pt}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 font-mono2 text-[10px] uppercase tracking-[0.2em] text-stone-600">
                                Pricing shared on enquiry
                            </p>
                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid={`membership-plan-${p.n}-enquire-button`}
                                className={`mt-6 inline-flex items-center justify-center gap-3 px-6 py-4 font-display text-base font-bold uppercase tracking-wider transition-colors duration-300 ${
                                    p.featured
                                        ? "bg-[#C9A227] text-[#1B1409] hover:bg-[#E3B94E]"
                                        : "border border-[#C9A227]/60 text-white hover:border-[#E3B94E] hover:bg-white/5"
                                }`}
                            >
                                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Enquire for membership
                            </a>
                        </motion.article>
                    ))}
                </Stagger>

                <Reveal className="mt-16 border border-border bg-[#123222] p-8 text-center sm:p-12">
                    <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">Contact us for current membership plans and pricing.</h2>
                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="membership-whatsapp-button"
                            className="inline-flex items-center justify-center gap-3 bg-[#C9A227] px-8 py-4 font-display text-lg font-bold uppercase tracking-wider text-[#1B1409] transition-colors hover:bg-[#E3B94E]"
                        >
                            <MessageCircle className="h-5 w-5" aria-hidden="true" /> Chat on WhatsApp
                        </a>
                        <Link
                            to="/contact"
                            data-testid="membership-contact-link"
                            className="inline-flex items-center justify-center gap-3 border border-[#C9A227]/60 px-8 py-4 font-display text-lg font-bold uppercase tracking-wider text-white transition-colors hover:border-[#E3B94E]"
                        >
                            Send an enquiry <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    </>
);

export default Memberships;
