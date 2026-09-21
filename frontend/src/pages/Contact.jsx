import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import Seo from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { BUSINESS, telHref, waHref } from "@/data/content";

const INFO = [
    {
        icon: MapPin,
        label: "Address",
        lines: BUSINESS.addressLines,
        testId: "contact-address",
    },
    {
        icon: Phone,
        label: "Phone",
        lines: [BUSINESS.phoneDisplay],
        href: telHref,
        testId: "contact-phone",
    },
    {
        icon: Clock,
        label: "Hours",
        lines: [BUSINESS.hoursDays, BUSINESS.hoursTime],
        testId: "contact-hours",
    },
];

const Contact = () => (
    <>
        <Seo
            title="Contact | IRONBLOOD FITNESS STUDIO ♾️ Bansdroni Park, Kolkata"
            description="Contact Ironblood Fitness Studio — 50, Bansdroni Park, Kolkata 700070. Call +91 82820 72600, WhatsApp or get directions. Open Monday–Sunday, 6 AM – 11 PM."
            path="/contact"
        />
        <header className="border-b border-border pt-40 pb-16 sm:pb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#FF4A52]">Contact</p>
                <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
                    Start the
                    <span className="block text-stroke">conversation.</span>
                </h1>
            </div>
        </header>

        <section className="py-20 sm:py-28" data-testid="contact-main-section">
            <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div>
                    <Reveal>
                        <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">{BUSINESS.name}</h2>
                        <div className="mt-10 space-y-8">
                            {INFO.map((item) => {
                                const Icon = item.icon;
                                const inner = (
                                    <>
                                        <Icon className="mt-1 h-5 w-5 shrink-0 text-[#FF4A52]" aria-hidden="true" />
                                        <div>
                                            <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-zinc-500">{item.label}</p>
                                            {item.lines.map((l) => (
                                                <p key={l} className="mt-1 text-base text-zinc-200">
                                                    {l}
                                                </p>
                                            ))}
                                        </div>
                                    </>
                                );
                                return item.href ? (
                                    <a key={item.label} href={item.href} data-testid={item.testId} className="flex gap-4 transition-colors hover:text-white">
                                        {inner}
                                    </a>
                                ) : (
                                    <div key={item.label} data-testid={item.testId} className="flex gap-4">
                                        {inner}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={telHref}
                                data-testid="contact-call-button"
                                className="inline-flex flex-1 items-center justify-center gap-3 bg-[#D61C24] px-6 py-4 font-display text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#FF2A32]"
                            >
                                <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
                            </a>
                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="contact-whatsapp-button"
                                className="inline-flex flex-1 items-center justify-center gap-3 border border-zinc-600 px-6 py-4 font-display text-base font-bold uppercase tracking-wider text-white transition-colors hover:border-white"
                            >
                                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                            </a>
                            <a
                                href={BUSINESS.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="contact-directions-button"
                                className="inline-flex flex-1 items-center justify-center gap-3 border border-zinc-600 px-6 py-4 font-display text-base font-bold uppercase tracking-wider text-white transition-colors hover:border-white"
                            >
                                <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
                            </a>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.1}>
                    <div className="border border-border bg-[#0E0E10] p-7 sm:p-10" data-testid="contact-enquiry-panel">
                        <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">Send an enquiry</h2>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                            Fill this in and we will open WhatsApp with your message ready to send to the studio.
                        </p>
                        <div className="mt-8">
                            <EnquiryForm testId="enquiry" />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    </>
);

export default Contact;
