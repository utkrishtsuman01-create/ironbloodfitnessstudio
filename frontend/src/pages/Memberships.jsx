import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { waHref, IMAGES, GYM_PRICING } from "@/data/content";

const EnquireBtn = ({ testId, featured = false }) => (
    <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={testId}
        className={`mt-6 inline-flex items-center justify-center gap-2 px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
            featured
                ? "bg-[#C9A227] text-[#173322] hover:bg-[#E3B94E]"
                : "border border-[#C9A227]/60 text-white hover:bg-[#C9A227] hover:text-[#173322]"
        }`}
    >
        <MessageCircle className="h-4 w-4" aria-hidden="true" /> Enquire on WhatsApp
    </a>
);

const Memberships = () => (
    <>
        <Seo
            title="Memberships & Fees | IRONBLOOD FITNESS STUDIO ♾️ Kolkata"
            description="Ironblood Fitness Studio fee structure: admission ₹2,000, monthly ₹888, 3 months ₹3,888, 6 months ₹4,888, 12 months ₹8,888. Personal training and diet plans available."
            path="/memberships"
            image="/images/gym-community.jpg"
        />
        <header className="relative overflow-hidden border-b border-border pt-40 pb-20 sm:pb-28">
            <div className="absolute inset-0" aria-hidden="true">
                <img src={IMAGES.gymCommunity.src} alt="" className="h-full w-full object-cover object-top opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1E] via-[#0F2A1E]/80 to-[#0F2A1E]/55" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">Memberships</p>
                <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
                    Join the
                    <span className="block text-stroke">bloodline.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
                    Transparent fee structure. Straight answers, no fake offers.
                </p>
            </div>
        </header>

        <section className="on-gold py-24 sm:py-32" data-testid="membership-plans-section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading index="01" eyebrow="Fee Structure" title="Gym Membership" />
                <Reveal
                    className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-[#173322] bg-[#E2C266] p-6 sm:p-8"
                >
                    <div data-testid="admission-card">
                        <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#1B5E3A]">One-Time</p>
                        <h3 className="mt-1 font-display text-2xl font-extrabold uppercase text-white">Admission</h3>
                    </div>
                    <p className="font-display text-4xl font-black text-[#173322] sm:text-5xl">{GYM_PRICING.admission.price}</p>
                </Reveal>
                <Stagger className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
                    {GYM_PRICING.membership.map((plan, i) => (
                        <motion.article
                            key={plan.label}
                            variants={staggerItem}
                            className="flex flex-col border border-border bg-[#142B21] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:bg-[#1B5E3A]"
                            data-testid={`gym-plan-${i + 1}`}
                        >
                            <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#E3B94E]">{plan.label}</p>
                            <p className="mt-4 font-display text-5xl font-black text-white">{plan.price}</p>
                            <p className="mt-2 flex-1 text-xs text-stone-400">Full access to all training zones</p>
                            <EnquireBtn testId={`gym-plan-${i + 1}-enquire-button`} />
                        </motion.article>
                    ))}
                </Stagger>

                <SectionHeading index="02" eyebrow="1:1 Coaching" title="Personal Training" className="mt-24" />
                <Stagger className="mt-10 grid gap-5 md:grid-cols-2" gap={0.06}>
                    {GYM_PRICING.personalTraining.map((plan, i) => (
                        <motion.article
                            key={plan.label}
                            variants={staggerItem}
                            className={`flex flex-col border p-8 transition-all duration-300 hover:-translate-y-1 sm:p-10 ${
                                plan.featured
                                    ? "glow-gold border-[#C9A227] bg-[#142B21] hover:bg-[#1B5E3A]"
                                    : "border-border bg-[#142B21] hover:border-[#D4AF37]/60 hover:bg-[#1B5E3A]"
                            }`}
                            data-testid={`pt-plan-${i + 1}`}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#E3B94E]">{plan.duration}</p>
                                {plan.featured && (
                                    <span className="bg-[#C9A227] px-3 py-1 font-mono2 text-[9px] uppercase tracking-[0.25em] text-[#173322]">
                                        Most Enquired
                                    </span>
                                )}
                            </div>
                            <h3 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-white">{plan.label}</h3>
                            <p className="mt-4 font-display text-5xl font-black text-white">{plan.price}</p>
                            {plan.includes.length > 0 && (
                                <ul className="mt-6 flex-1 space-y-3 border-t border-stone-800 pt-6">
                                    {plan.includes.map((inc) => (
                                        <li key={inc} className="flex items-center gap-3 text-sm text-stone-300">
                                            <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A227]" aria-hidden="true" /> {inc}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <EnquireBtn testId={`pt-plan-${i + 1}-enquire-button`} featured={plan.featured} />
                        </motion.article>
                    ))}
                </Stagger>

                <SectionHeading index="03" eyebrow="Nutrition" title="Diet Plan" className="mt-24" />
                <Reveal
                    className="mt-10 flex flex-col items-start justify-between gap-6 border border-border bg-[#142B21] p-8 transition-colors duration-300 hover:border-[#D4AF37]/60 sm:flex-row sm:items-center sm:p-10"
                >
                    <div data-testid="diet-plan-card">
                        <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#E3B94E]">Standalone</p>
                        <h3 className="mt-2 font-display text-3xl font-extrabold uppercase text-white">{GYM_PRICING.diet.label}</h3>
                        <p className="mt-2 text-sm text-stone-400">A complete diet plan built around your goal.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 sm:items-end">
                        <p className="font-display text-5xl font-black text-white">{GYM_PRICING.diet.price}</p>
                        <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="diet-plan-enquire-button"
                            className="inline-flex items-center justify-center gap-2 bg-[#C9A227] px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-[#173322] transition-colors hover:bg-[#E3B94E]"
                        >
                            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Enquire on WhatsApp
                        </a>
                    </div>
                </Reveal>

                <Reveal className="mt-20 border border-border bg-[#0F2A1E] p-8 text-center sm:p-12" >
                    <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">Ready to start? Lock your plan today.</h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-stone-400">
                        Train from home instead? Online coaching starts at ₹5,888/month with competition preparation and diet plans.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="membership-whatsapp-button"
                            className="inline-flex items-center justify-center gap-3 bg-[#C9A227] px-8 py-4 font-display text-lg font-bold uppercase tracking-wider text-[#173322] transition-colors hover:bg-[#E3B94E]"
                        >
                            <MessageCircle className="h-5 w-5" aria-hidden="true" /> Chat on WhatsApp
                        </a>
                        <Link
                            to="/online-coaching"
                            data-testid="membership-online-link"
                            className="inline-flex items-center justify-center gap-3 border border-[#C9A227]/60 px-8 py-4 font-display text-lg font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#C9A227] hover:text-[#173322]"
                        >
                            View Online Coaching <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    </>
);

export default Memberships;
