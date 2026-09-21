import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { useAuth } from "@/context/AuthContext";

const formatDetail = (d) => {
    if (d == null) return "Something went wrong. Please try again.";
    if (typeof d === "string") return d;
    if (Array.isArray(d)) return d.map((e) => (e && typeof e.msg === "string" ? e.msg : JSON.stringify(e))).filter(Boolean).join(" ");
    if (d && typeof d.msg === "string") return d.msg;
    return String(d);
};

const inputCls =
    "w-full border border-stone-700 bg-[#0C1D14] px-4 py-3.5 text-sm text-white placeholder:text-stone-600 focus:border-[#C9A227] focus:outline-none";
const labelCls = "mb-2 block font-mono2 text-[11px] uppercase tracking-[0.25em] text-stone-400";
const PHONE_RE = /^[6-9]\d{9}$/;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const normalizePhone = (raw) => {
    const digits = (raw || "").replace(/\D/g, "");
    if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
    if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
    return digits;
};

export const GoogleButton = ({ testId }) => (
    <button
        type="button"
        data-testid={testId}
        onClick={() => {
            // REMINDER: DO NOT HARDCODE THE URL, OR ADD ANY FALLBACKS OR REDIRECT URLS, THIS BREAKS THE AUTH
            const redirectUrl = window.location.origin + "/";
            window.location.href = `https://auth.emergentagent.com/?redirect=${encodeURIComponent(redirectUrl)}`;
        }}
        className="flex w-full items-center justify-center gap-3 border border-[#C9A227]/60 py-3.5 font-display text-base font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#C9A227] hover:text-[#173322]"
    >
        <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.3-2.2H12v4.1h6.5c-.1 1.1-.8 2.7-2.4 3.8l-.02.15 3.5 2.7.24.02c2.2-2 3.5-5 3.5-8.6z" />
            <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.8-2.9c-1 .7-2.4 1.2-4.1 1.2-3.1 0-5.8-2.1-6.8-5l-.14.01-3.7 2.9-.05.14C3.2 21.3 7.3 24 12 24z" />
            <path fill="#FBBC05" d="M5.2 14.4c-.2-.7-.4-1.5-.4-2.4s.2-1.7.5-2.4l-.01-.16-3.8-2.9-.12.06C.5 8.3 0 10.1 0 12s.5 3.7 1.3 5.5l3.9-3.1z" />
            <path fill="#EA4335" d="M12 4.6c2.2 0 3.7 1 4.6 1.8l3.3-3.2C17.9 1.2 15.2 0 12 0 7.3 0 3.2 2.7 1.3 6.6l3.9 3c1-2.9 3.7-5 6.8-5z" />
        </svg>
        Continue with Google
    </button>
);

const Auth = () => {
    const [mode, setMode] = useState("login");
    const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirm: "" });
    const [error, setError] = useState("");
    const [busy, setBusy] = useState(false);
    const { login, signup } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";

    const set = (key) => (e) => {
        setForm((f) => ({ ...f, [key]: e.target.value }));
        setError("");
    };

    const submit = async (e) => {
        e.preventDefault();
        const phone = normalizePhone(form.phone);
        if (!PHONE_RE.test(phone)) return setError("Please enter a valid 10-digit Indian mobile number.");
        if (!form.password) return setError("Please enter your password.");
        if (mode === "signup") {
            if (form.name.trim().length < 2) return setError("Please enter your full name.");
            if (!EMAIL_RE.test(form.email.trim())) return setError("Please enter a valid email address.");
            if (form.password.length < 8) return setError("Password must be at least 8 characters.");
            if (form.password !== form.confirm) return setError("Passwords do not match.");
        }
        setBusy(true);
        try {
            if (mode === "login") {
                await login(phone, form.password);
                toast.success("Welcome back.");
            } else {
                await signup({
                    name: form.name.trim(),
                    email: form.email.trim(),
                    phone,
                    password: form.password,
                    confirm_password: form.confirm,
                });
                toast.success("Account created. Welcome to Ironblood.");
            }
            navigate(from, { replace: true });
        } catch (err) {
            setError(formatDetail(err.response?.data?.detail));
        } finally {
            setBusy(false);
        }
    };

    return (
        <>
            <Seo title="Join In | IRONBLOOD FITNESS STUDIO ♾️" description="Log in or create your Ironblood Fitness Studio account." path="/auth" />
            <section className="on-gold flex min-h-screen items-center justify-center px-4 pb-20 pt-32" data-testid="auth-page">
                <div className="w-full max-w-md">
                    <div className="mb-8 text-center">
                        <img src="/images/logo.png" alt="Ironblood Muscle and Fitness Studio" className="mx-auto h-20 w-auto" />
                        <h1 className="mt-6 font-display text-4xl font-black uppercase tracking-tight text-white">
                            {mode === "login" ? "Welcome back" : "Join Ironblood"}
                        </h1>
                        <p className="mt-2 text-sm text-stone-500">
                            {mode === "login" ? "Log in with your phone number and password." : "Create your account in under a minute."}
                        </p>
                    </div>

                    <div className="border border-[#C9A227]/40 bg-[#123222] p-7 sm:p-9">
                        <div className="grid grid-cols-2 border border-stone-700" role="tablist" aria-label="Authentication mode">
                            {["login", "signup"].map((m) => (
                                <button
                                    key={m}
                                    type="button"
                                    role="tab"
                                    aria-selected={mode === m}
                                    onClick={() => {
                                        setMode(m);
                                        setError("");
                                    }}
                                    data-testid={`auth-tab-${m}`}
                                    className={`py-3 font-display text-base font-bold uppercase tracking-wider transition-colors ${
                                        mode === m ? "bg-[#C9A227] text-[#173322]" : "text-stone-400 hover:text-white"
                                    }`}
                                >
                                    {m === "login" ? "Log In" : "Sign Up"}
                                </button>
                            ))}
                        </div>

                        <form onSubmit={submit} noValidate className="mt-7 space-y-5" data-testid="auth-form">
                            {mode === "signup" && (
                                <div>
                                    <label htmlFor="auth-name" className={labelCls}>Full Name</label>
                                    <input id="auth-name" data-testid="auth-name-input" type="text" autoComplete="name" value={form.name} onChange={set("name")} placeholder="Your full name" className={inputCls} />
                                </div>
                            )}
                            {mode === "signup" && (
                                <div>
                                    <label htmlFor="auth-email" className={labelCls}>Email Address</label>
                                    <input id="auth-email" data-testid="auth-email-input" type="email" autoComplete="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className={inputCls} />
                                </div>
                            )}
                            <div>
                                <label htmlFor="auth-phone" className={labelCls}>Phone Number</label>
                                <input id="auth-phone" data-testid="auth-phone-input" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} placeholder="10-digit mobile number" className={inputCls} />
                            </div>
                            <div>
                                <label htmlFor="auth-password" className={labelCls}>Password</label>
                                <input id="auth-password" data-testid="auth-password-input" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"} value={form.password} onChange={set("password")} placeholder={mode === "login" ? "Your password" : "Minimum 8 characters"} className={inputCls} />
                            </div>
                            {mode === "signup" && (
                                <div>
                                    <label htmlFor="auth-confirm" className={labelCls}>Confirm Password</label>
                                    <input id="auth-confirm" data-testid="auth-confirm-input" type="password" autoComplete="new-password" value={form.confirm} onChange={set("confirm")} placeholder="Repeat your password" className={inputCls} />
                                </div>
                            )}

                            {error && (
                                <p className="border border-[#C9A227]/50 bg-[#0C1D14] px-4 py-3 text-sm text-[#E3B94E]" role="alert" data-testid="auth-error">
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={busy}
                                data-testid="auth-submit-button"
                                className="w-full bg-[#C9A227] py-4 font-display text-lg font-bold uppercase tracking-wider text-[#173322] transition-colors hover:bg-[#E3B94E] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {busy ? "Please wait…" : mode === "login" ? "Log In" : "Create Account"}
                            </button>
                        </form>

                        <div className="my-6 flex items-center gap-4" aria-hidden="true">
                            <span className="h-px flex-1 bg-stone-700" />
                            <span className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-stone-500">or</span>
                            <span className="h-px flex-1 bg-stone-700" />
                        </div>

                        <GoogleButton testId="auth-google-button" />
                    </div>

                    <p className="mt-6 text-center">
                        <Link to="/" data-testid="auth-back-home-link" className="inline-flex items-center gap-2 font-mono2 text-[11px] uppercase tracking-[0.25em] text-stone-500 transition-colors hover:text-[#173322]">
                            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Back to home
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Auth;
