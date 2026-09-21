import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { BUSINESS, NAV_LINKS, SOCIALS, telHref, waHref } from "@/data/content";
import SocialIcons from "@/components/SocialIcons";

export const Footer = () => (
    <footer className="border-t border-border bg-[#0C1D14]" data-testid="site-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <img
                        src="/images/logo.png"
                        alt="Ironblood Muscle and Fitness Studio"
                        className="h-20 w-auto sm:h-24"
                        data-testid="footer-logo"
                    />
                    <p className="mt-6 font-display text-lg font-bold uppercase tracking-wider text-white">{BUSINESS.owner}</p>
                    <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#D9B85C] mt-1">{BUSINESS.ownerTitle}</p>
                    <div className="mt-6 space-y-4">
                        <div>
                            <p className="font-mono2 text-[9px] uppercase tracking-[0.25em] text-stone-500">Follow the studio</p>
                            <SocialIcons links={SOCIALS.gym} tone="onGreen" testId="footer-gym-social" className="mt-2" />
                        </div>
                        <div>
                            <p className="font-mono2 text-[9px] uppercase tracking-[0.25em] text-stone-500">Follow Bapi Das</p>
                            <SocialIcons links={SOCIALS.owner} tone="onGreen" testId="footer-owner-social" className="mt-2" />
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href={telHref}
                            data-testid="footer-call-button"
                            className="inline-flex items-center gap-2 bg-[#C9A227] px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-[#1B1409] transition-colors hover:bg-[#E3B94E]"
                        >
                            <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
                        </a>
                        <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-whatsapp-button"
                            className="inline-flex items-center gap-2 border border-[#C9A227]/60 px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-[#E3B94E]"
                        >
                            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                        </a>
                        <a
                            href={BUSINESS.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-directions-button"
                            className="inline-flex items-center gap-2 border border-[#C9A227]/60 px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-[#E3B94E]"
                        >
                            <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    <h3 className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-stone-500">Explore</h3>
                    <ul className="mt-5 space-y-3">
                        {NAV_LINKS.map((l) => (
                            <li key={l.to}>
                                <Link
                                    to={l.to}
                                    data-testid={`footer-${l.label.toLowerCase()}-link`}
                                    className="font-display text-base font-semibold uppercase tracking-wider text-stone-300 transition-colors hover:text-[#D9B85C]"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-4 space-y-6">
                    <div>
                        <h3 className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-stone-500">Visit</h3>
                        <address className="mt-4 not-italic text-sm leading-relaxed text-stone-300">
                            {BUSINESS.addressLines[0]}
                            <br />
                            {BUSINESS.addressLines[1]}
                        </address>
                    </div>
                    <div>
                        <h3 className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-stone-500">Call</h3>
                        <a href={telHref} data-testid="footer-phone-link" className="mt-3 block font-display text-2xl font-bold text-white hover:text-[#D9B85C] transition-colors">
                            {BUSINESS.phoneDisplay}
                        </a>
                    </div>
                    <div>
                        <h3 className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-stone-500">Email</h3>
                        <a
                            href={`mailto:${BUSINESS.email}`}
                            data-testid="footer-email-link"
                            className="mt-3 flex items-center gap-2 break-all text-sm text-stone-300 transition-colors hover:text-[#E3B94E]"
                        >
                            <Mail className="h-4 w-4 shrink-0 text-[#E3B94E]" aria-hidden="true" />
                            {BUSINESS.email}
                        </a>
                    </div>
                    <div>
                        <h3 className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-stone-500">Hours</h3>
                        <p className="mt-3 flex items-center gap-2 text-sm text-stone-300">
                            <Clock className="h-4 w-4 text-[#D9B85C]" aria-hidden="true" />
                            Mon – Sat · 6:30 AM – 12:00 PM · 4:00 PM – 10:45 PM
                        </p>
                        <p className="mt-1.5 pl-6 font-mono2 text-[10px] uppercase tracking-[0.2em] text-stone-500">Sunday — Closed</p>
                    </div>
                </div>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-900 pt-8">
                <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-stone-600">
                    © {new Date().getFullYear()} Ironblood Fitness Studio · Kolkata
                </p>
                <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-stone-600">Train. Focus. Transform.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
