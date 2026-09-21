import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Clock, User, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { NAV_LINKS, BUSINESS, telHref } from "@/data/content";

const BrandMark = () => (
    <Link to="/" data-testid="nav-brand-link" className="flex items-center" aria-label="Ironblood Fitness Studio — home">
        <img src="/images/logo.png" alt="Ironblood Muscle and Fitness Studio" className="h-12 w-auto sm:h-14" data-testid="nav-logo" />
    </Link>
);

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, isOwner, logout } = useAuth();
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
                scrolled || open ? "border-border bg-[#0F2A1E]/95 backdrop-blur-md" : "border-transparent bg-[#123222]/70 backdrop-blur-md"
            }`}
        >
            <nav className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary">
                <BrandMark />
                <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
                    {NAV_LINKS.map((l) => (
                        <li key={l.to}>
                            <NavLink
                                to={l.to}
                                data-testid={`nav-${l.label.toLowerCase()}-link`}
                                className={({ isActive }) =>
                                    `font-display text-xs xl:text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                                        isActive ? "text-[#D9B85C]" : "text-stone-300 hover:text-white"
                                    }`
                                }
                            >
                                {l.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex items-center gap-3">
                    {user ? (
                        <>
                            {isOwner && (
                                <span
                                    className="border border-[#C9A227]/60 px-2.5 py-1 font-mono2 text-[9px] uppercase tracking-[0.25em] text-[#E3B94E]"
                                    data-testid="nav-owner-badge"
                                >
                                    Owner
                                </span>
                            )}
                            <Link
                                to="/account"
                                data-testid="nav-account-link"
                                className="inline-flex items-center gap-2 border border-[#C9A227]/60 px-5 py-3 font-display text-xs xl:text-sm font-bold uppercase tracking-[0.12em] text-[#F4EDDD] transition-colors hover:bg-[#C9A227] hover:text-[#173322]"
                            >
                                <User className="h-4 w-4" aria-hidden="true" /> Account
                            </Link>
                            <button
                                type="button"
                                onClick={logout}
                                data-testid="nav-logout-button"
                                className="inline-flex items-center gap-2 bg-[#C9A227] px-5 py-3 font-display text-xs xl:text-sm font-bold uppercase tracking-[0.12em] text-[#173322] transition-colors hover:bg-[#E3B94E]"
                            >
                                <LogOut className="h-4 w-4" aria-hidden="true" /> Log Out
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/auth"
                            data-testid="nav-join-in-button"
                            className="bg-[#C9A227] px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] text-[#1B1409] transition-colors duration-300 hover:bg-[#E3B94E]"
                        >
                            Join In
                        </Link>
                    )}
                </div>
                <button
                    type="button"
                    data-testid="nav-mobile-menu-button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-label={open ? "Close menu" : "Open menu"}
                    className="lg:hidden flex h-11 w-11 items-center justify-center border border-[#C9A227]/50 text-white transition-colors hover:border-[#C9A227]"
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
                        className="lg:hidden fixed inset-0 top-20 z-40 bg-[#0F2A1E] overflow-y-auto"
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
                                            `flex items-baseline gap-4 border-b border-stone-900 py-4 font-display text-4xl font-extrabold uppercase tracking-tight transition-colors ${
                                                isActive ? "text-[#D9B85C]" : "text-white hover:text-[#D9B85C]"
                                            }`
                                        }
                                    >
                                        <span className="font-mono2 text-xs text-stone-600">0{i + 1}</span>
                                        {l.label}
                                    </NavLink>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="px-6 pb-12 space-y-4">
                            <a
                                href={telHref}
                                data-testid="nav-mobile-call-button"
                                className="flex items-center justify-center gap-3 bg-[#C9A227] py-4 font-display text-lg font-bold uppercase tracking-wider text-[#1B1409]"
                            >
                                <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
                            </a>
                            {user ? (
                                <div className="flex gap-3">
                                    <Link
                                        to="/account"
                                        data-testid="nav-mobile-account-link"
                                        className="flex-1 border border-[#C9A227]/60 py-4 text-center font-display text-lg font-bold uppercase tracking-wider text-white"
                                    >
                                        Account
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={logout}
                                        data-testid="nav-mobile-logout-button"
                                        className="flex-1 border border-[#C9A227]/60 py-4 font-display text-lg font-bold uppercase tracking-wider text-white"
                                    >
                                        Log Out
                                    </button>
                                </div>
                            ) : (
                                <Link
                                    to="/auth"
                                    data-testid="nav-mobile-join-in-link"
                                    className="block border border-[#C9A227]/60 py-4 text-center font-display text-lg font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#C9A227] hover:text-[#173322]"
                                >
                                    Join In
                                </Link>
                            )}
                            <p className="flex items-center gap-2 font-mono2 text-xs uppercase tracking-[0.2em] text-stone-500">
                                <Clock className="h-4 w-4" aria-hidden="true" /> {BUSINESS.hoursSummary}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
