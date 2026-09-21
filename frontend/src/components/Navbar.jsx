import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Clock } from "lucide-react";
import { NAV_LINKS, BUSINESS, telHref } from "@/data/content";

const BrandMark = () => (
    <Link to="/" data-testid="nav-brand-link" className="flex items-center gap-3 group" aria-label="Ironblood Fitness Studio — home">
        <span className="flex h-10 w-10 items-center justify-center border border-[#D61C24] font-display text-lg font-black tracking-wider text-white transition-colors group-hover:bg-[#D61C24]">
            IB
        </span>
        <span className="leading-none">
            <span className="block font-display text-xl font-black uppercase tracking-wide text-white">
                Ironblood <span className="text-[#FF2A32]">♾️</span>
            </span>
            <span className="block font-mono2 text-[9px] uppercase tracking-[0.35em] text-zinc-500 mt-1">Fitness Studio</span>
        </span>
    </Link>
);

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => setOpen(false), [location.pathname]);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
        <header
            className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
                scrolled || open ? "border-border bg-[#0A0A0B]/90 backdrop-blur-md" : "border-transparent bg-[#0A0A0B]/60 backdrop-blur-md"
            }`}
        >
            <nav className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary">
                <BrandMark />
                <ul className="hidden lg:flex items-center gap-7">
                    {NAV_LINKS.map((l) => (
                        <li key={l.to}>
                            <NavLink
                                to={l.to}
                                data-testid={`nav-${l.label.toLowerCase()}-link`}
                                className={({ isActive }) =>
                                    `font-display text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-200 ${
                                        isActive ? "text-[#FF4A52]" : "text-zinc-300 hover:text-white"
                                    }`
                                }
                            >
                                {l.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:block">
                    <Link
                        to="/contact"
                        data-testid="nav-join-now-button"
                        className="bg-[#D61C24] px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#FF2A32]"
                    >
                        Join Now
                    </Link>
                </div>
                <button
                    type="button"
                    data-testid="nav-mobile-menu-button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-label={open ? "Close menu" : "Open menu"}
                    className="lg:hidden flex h-11 w-11 items-center justify-center border border-zinc-700 text-white transition-colors hover:border-[#D61C24]"
                >
                    {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
                </button>
            </nav>

        </header>

        <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="lg:hidden fixed inset-0 top-20 z-40 bg-[#0A0A0B] overflow-y-auto"
                        data-testid="nav-mobile-menu"
                    >
                        <ul className="px-6 pt-8 pb-6 space-y-1">
                            {NAV_LINKS.map((l, i) => (
                                <motion.li
                                    key={l.to}
                                    initial={{ opacity: 0, x: -18 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
                                >
                                    <NavLink
                                        to={l.to}
                                        data-testid={`nav-mobile-${l.label.toLowerCase()}-link`}
                                        className={({ isActive }) =>
                                            `flex items-baseline gap-4 border-b border-zinc-900 py-4 font-display text-4xl font-extrabold uppercase tracking-tight transition-colors ${
                                                isActive ? "text-[#FF4A52]" : "text-white hover:text-[#FF4A52]"
                                            }`
                                        }
                                    >
                                        <span className="font-mono2 text-xs text-zinc-600">0{i + 1}</span>
                                        {l.label}
                                    </NavLink>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="px-6 pb-12 space-y-4">
                            <a
                                href={telHref}
                                data-testid="nav-mobile-call-button"
                                className="flex items-center justify-center gap-3 bg-[#D61C24] py-4 font-display text-lg font-bold uppercase tracking-wider text-white"
                            >
                                <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
                            </a>
                            <p className="flex items-center gap-2 font-mono2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                                <Clock className="h-4 w-4" aria-hidden="true" /> {BUSINESS.hoursDays} · {BUSINESS.hoursTime}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
