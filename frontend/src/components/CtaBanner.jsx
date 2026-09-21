import { MessageCircle, Phone } from "lucide-react";
import { waHref, telHref } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export const CtaBanner = ({
    eyebrow = "START TODAY",
    title = "READY TO TRAIN UNDER A CHAMPION?",
    body = "Walk into Ironblood Fitness Studio in Bansdroni Park, Kolkata — or send an enquiry and we will take it from there.",
    testId = "cta-banner",
}) => (
    <section className="relative overflow-hidden border-y border-border bg-[#0F2A1E]">
        <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.35]"
            style={{ background: "radial-gradient(60% 120% at 85% 50%, rgba(201,162,39,0.22), transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <Reveal>
                <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">{eyebrow}</p>
                <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.92] tracking-tight text-white mt-4 max-w-4xl">
                    {title}
                </h2>
                <p className="mt-6 max-w-xl text-base sm:text-lg text-stone-400 leading-relaxed">{body}</p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`${testId}-whatsapp-button`}
                        className="inline-flex items-center justify-center gap-3 bg-[#C9A227] px-8 py-4 font-display text-lg font-bold uppercase tracking-wider text-[#1B1409] transition-colors duration-300 hover:bg-[#E3B94E]"
                    >
                        <MessageCircle className="h-5 w-5" aria-hidden="true" />
                        Enquire on WhatsApp
                    </a>
                    <a
                        href={telHref}
                        data-testid={`${testId}-call-button`}
                        className="inline-flex items-center justify-center gap-3 border border-[#C9A227]/60 px-8 py-4 font-display text-lg font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:border-[#E3B94E] hover:bg-white/5"
                    >
                        <Phone className="h-5 w-5" aria-hidden="true" />
                        Call Now
                    </a>
                </div>
            </Reveal>
        </div>
    </section>
);

export default CtaBanner;
