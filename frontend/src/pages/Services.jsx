import { motion } from "framer-motion";
import { Dumbbell, Flame, Activity, Move, Weight, Apple, User, Layers, Salad, HeartPulse, Zap, Bike, Users, Trophy } from "lucide-react";
import Seo from "@/components/Seo";
import { Reveal, Stagger, staggerItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { SERVICES, IMAGES } from "@/data/content";

const ICONS = [Trophy, Flame, Activity, Move, Weight, Salad, User, Dumbbell, Apple, HeartPulse, Zap, Bike, Users, Layers];

const Services = () => (
    <>
        <Seo
            title="Services & Training | IRONBLOOD FITNESS STUDIO ♾️ Kolkata"
            description="14 training services at Ironblood Fitness Studio, Kolkata: transformation & competition preparation, strength training, weight management, personal training, nutrition consulting, CrossFit, aerobics and more."
            path="/services"
            image="/images/member-press.jpg"
        />
        <header className="relative overflow-hidden border-b border-border pt-40 pb-20 sm:pb-28">
            <div className="absolute inset-0" aria-hidden="true">
                <img src={IMAGES.memberDumbbell.src} alt="" className="h-full w-full object-cover object-center opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A1E] via-[#0F2A1E]/75 to-[#0F2A1E]/50" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">Services</p>
                <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
                    14 ways we
                    <span className="block text-stroke">build you up.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-400 sm:text-lg">
                    Structured, coached and honest — every service below is delivered on the Ironblood floor. No guaranteed-result promises, just
                    professional work.
                </p>
            </div>
        </header>

        <section className="on-gold py-24 sm:py-32" data-testid="services-grid-section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="Confirmed Training Services" title="The full list" />
                <Stagger className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3" gap={0.04}>
                    {SERVICES.map((s, i) => {
                        const Icon = ICONS[i % ICONS.length];
                        return (
                            <motion.article
                                key={s.title}
                                variants={staggerItem}
                                className="group bg-[#E2C266] p-8 transition-colors duration-300 hover:bg-[#1B5E3A]"
                                data-testid={`service-card-${i + 1}`}
                            >
                                <div className="flex items-start justify-between">
                                    <Icon className="h-6 w-6 text-[#C9A227] transition-colors group-hover:text-[#E3B94E]" aria-hidden="true" />
                                    <span className="font-mono2 text-[9px] uppercase tracking-[0.25em] text-stone-600 transition-colors duration-300 group-hover:text-[#A7C4A0]">{s.tag}</span>
                                </div>
                                <h2 className="mt-6 font-display text-2xl font-extrabold uppercase leading-tight text-white transition-colors group-hover:text-[#F4EDDD]">{s.title}</h2>
                                <p className="mt-4 font-mono2 text-[10px] uppercase tracking-[0.2em] text-stone-600 transition-colors duration-300 group-hover:text-[#A7C4A0]">0{i + 1} / 14</p>
                            </motion.article>
                        );
                    })}
                </Stagger>
            </div>
        </section>

        <section className="relative overflow-hidden border-y border-border" data-testid="services-training-banner">
            <div className="absolute inset-0" aria-hidden="true">
                <img src={IMAGES.memberPress.src} alt="" loading="lazy" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-[#0F2A1E]/80" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <Reveal>
                    <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">On the floor</p>
                    <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.95] text-white sm:text-5xl">
                        Coached sessions, not guesswork
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-300">
                        Real training at Ironblood — members working under supervision with proper form, progression and attention.
                    </p>
                </Reveal>
            </div>
        </section>

        <CtaBanner testId="services-cta-banner" eyebrow="NOT SURE WHERE TO START?" title="Ask the coach directly" body="Tell us your goal on WhatsApp and we will point you to the right training path." />
    </>
);

export default Services;
