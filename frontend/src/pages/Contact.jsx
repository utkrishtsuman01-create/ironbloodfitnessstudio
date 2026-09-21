import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import Seo from "@/components/Seo";
import { Reveal } from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { BUSINESS, SOCIALS, telHref, waHref } from "@/data/content";
import SocialIcons from "@/components/SocialIcons";

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
        icon: Mail,
        label: "Email",
        lines: [BUSINESS.email],
        href: `mailto:${BUSINESS.email}`,
        testId: "contact-email",
    },
    {
        icon: Clock,
        label: "Hours",
        lines: ["Monday – Saturday", "Morning: 6:30 AM – 12:00 PM", "Evening: 4:00 PM – 10:45 PM", "Sunday: Closed"],
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
        <header className="on-gold border-b border-border pt-40 pb-16 sm:pb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">Contact</p>
                <h1 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
                    Start the
                    <span className="block text-stroke">conversation.</span>
                </h1>
            </div>
        </header>

        <section className="on-gold py-20 sm:py-28" data-testid="contact-main-section">
            <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div>
                    <Reveal>
                        <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">{BUSINESS.name}</h2>
                        <div className="mt-10 space-y-8">
                            {INFO.map((item) => {
                                const Icon = item.icon;
                                const inner = (
                                    <>
                                        <Icon className="mt-1 h-5 w-5 shrink-0 text-[#D9B85C]" aria-hidden="true" />
                                        <div>
                                            <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-stone-500">{item.label}</p>
                                            {item.lines.map((l) => (
                                                <p key={l} className="mt-1 text-base text-stone-200">
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
                                className="inline-flex flex-1 items-center justify-center gap-3 bg-[#173322] px-6 py-4 font-display text-base font-bold uppercase tracking-wider text-[#F4EDDD] transition-colors hover:bg-[#1B5E3A]"
                            >
                                <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
                            </a>
                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="contact-whatsapp-button"
                                className="inline-flex flex-1 items-center justify-center gap-3 border border-[#173322] px-6 py-4 font-display text-base font-bold uppercase tracking-wider text-[#173322] transition-colors hover:bg-[#173322] hover:text-[#F4EDDD]"
                            >
                                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                            </a>
                            <a
                                href={BUSINESS.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="contact-directions-button"
                                className="inline-flex flex-1 items-center justify-center gap-3 border border-[#173322] px-6 py-4 font-display text-base font-bold uppercase tracking-wider text-[#173322] transition-colors hover:bg-[#173322] hover:text-[#F4EDDD]"
                            >
                                <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
                            </a>
                        </div>
                        <div className="mt-10 border-t border-[#173322]/30 pt-6">
                            <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-stone-500">Follow Ironblood Fitness Studio</p>
                            <SocialIcons links={SOCIALS.gym} tone="onGold" testId="contact-gym-social" className="mt-3" />
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.1}>
                    <div className="border border-border bg-[#123222] p-7 sm:p-10" data-testid="contact-enquiry-panel">
                        <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">Send an enquiry</h2>
                        <p className="mt-3 text-sm leading-relaxed text-stone-500">
                            Fill this in and we will open WhatsApp with your message ready to send to the studio.
                        </p>
                        <div className="mt-8">
                            <EnquiryForm testId="enquiry" />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>

        <section className="on-gold border-t border-border pb-24 sm:pb-32 pt-16 sm:pt-20" data-testid="contact-map-section">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                        <div>
                            <p className="font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#D9B85C]">Find the studio</p>
                            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
                                Bansdroni Park, Kolkata
                            </h2>
                        </div>
                        <a
                            href={BUSINESS.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="contact-map-directions-button"
                            className="inline-flex items-center gap-2 border border-[#C9A227]/60 px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-[#1B1409] transition-colors hover:border-[#C9A227] hover:bg-[#C9A227]"
                        >
                            <MapPin className="h-4 w-4" aria-hidden="true" /> Open in Google Maps
                        </a>
                    </div>
                    <div className="mt-8 border border-border" data-testid="contact-map-frame">
                        <iframe
                            src={BUSINESS.mapsEmbedUrl}
                            title="Map showing the location of Ironblood Fitness Studio, 50 Bansdroni Park, Kolkata 700070"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                            className="h-[380px] w-full grayscale-[35%] contrast-[1.05] sm:h-[460px]"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    </>
);

export default Contact;
