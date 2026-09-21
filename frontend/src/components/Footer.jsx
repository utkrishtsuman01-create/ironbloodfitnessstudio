import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { BUSINESS, NAV_LINKS, telHref, waHref } from "@/data/content";

export const Footer = () => (
    <footer className="border-t border-border bg-[#080809]" data-testid="site-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <p className="font-display text-3xl sm:text-4xl font-black uppercase leading-none text-white">
                        Ironblood <span className="text-[#FF2A32]">♾️</span>
                        <span className="block text-zinc-500 text-xl mt-1 tracking-wide">Fitness Studio</span>
                    </p>
                    <p className="mt-6 font-display text-lg font-bold uppercase tracking-wider text-white">{BUSINESS.owner}</p>
                    <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#FF4A52] mt-1">{BUSINESS.ownerTitle}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href={telHref}
                            data-testid="footer-call-button"
                            className="inline-flex items-center gap-2 bg-[#D61C24] px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#FF2A32]"
                        >
                            <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
                        </a>
                        <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-whatsapp-button"
                            className="inline-flex items-center gap-2 border border-zinc-600 px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-white"
                        >
                            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                        </a>
                        <a
                            href={BUSINESS.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-directions-button"
                            className="inline-flex items-center gap-2 border border-zinc-600 px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-white"
                        >
                            <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-3">
                    <h3 className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-zinc-500">Explore</h3>
                    <ul className="mt-5 space-y-3">
                        {NAV_LINKS.map((l) => (
                            <li key={l.to}>
                                <Link
                                    to={l.to}
                                    data-testid={`footer-${l.label.toLowerCase()}-link`}
                                    className="font-display text-base font-semibold uppercase tracking-wider text-zinc-300 transition-colors hover:text-[#FF4A52]"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-4 space-y-6">
                    <div>
                        <h3 className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-zinc-500">Visit</h3>
                        <address className="mt-4 not-italic text-sm leading-relaxed text-zinc-300">
                            {BUSINESS.addressLines[0]}
                            <br />
                            {BUSINESS.addressLines[1]}
                        </address>
                    </div>
                    <div>
                        <h3 className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-zinc-500">Call</h3>
                        <a href={telHref} data-testid="footer-phone-link" className="mt-3 block font-display text-2xl font-bold text-white hover:text-[#FF4A52] transition-colors">
                            {BUSINESS.phoneDisplay}
                        </a>
                    </div>
                    <div>
                        <h3 className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-zinc-500">Hours</h3>
                        <p className="mt-3 flex items-center gap-2 text-sm text-zinc-300">
                            <Clock className="h-4 w-4 text-[#FF4A52]" aria-hidden="true" />
                            {BUSINESS.hoursDays} · {BUSINESS.hoursTime}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-zinc-900 pt-8">
                <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-zinc-600">
                    © {new Date().getFullYear()} Ironblood Fitness Studio · Kolkata
                </p>
                <p className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-zinc-600">Train. Focus. Transform.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
