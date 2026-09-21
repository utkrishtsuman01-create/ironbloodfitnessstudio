import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import Seo from "@/components/Seo";
import { useAuth } from "@/context/AuthContext";

const Account = () => {
    const { user, isOwner, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user === false) navigate("/auth", { replace: true, state: { from: "/account" } });
    }, [user, navigate]);

    if (!user) {
        return (
            <div className="flex min-h-screen items-center justify-center" data-testid="account-loading">
                <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-stone-500">Loading…</p>
            </div>
        );
    }

    const doLogout = async () => {
        await logout();
        toast.success("Logged out.");
        navigate("/");
    };

    return (
        <>
            <Seo title="My Account | IRONBLOOD FITNESS STUDIO ♾️" description="Your Ironblood Fitness Studio account." path="/account" />
            <section className="on-gold flex min-h-screen items-center justify-center px-4 pb-20 pt-32" data-testid="account-page">
                <div className="w-full max-w-md border border-[#C9A227]/40 bg-[#123222] p-8 sm:p-10">
                    <div className="flex items-center gap-4">
                        {user.picture ? (
                            <img src={user.picture} alt="" className="h-14 w-14 rounded-full border border-[#C9A227]/50 object-cover" referrerPolicy="no-referrer" />
                        ) : (
                            <span className="flex h-14 w-14 items-center justify-center border border-[#C9A227]/50 font-display text-2xl font-black text-[#E3B94E]">
                                {user.name?.charAt(0)?.toUpperCase() || "M"}
                            </span>
                        )}
                        <div>
                            <h1 className="font-display text-2xl font-extrabold uppercase text-white" data-testid="account-name">
                                {user.name}
                            </h1>
                            {isOwner && (
                                <p className="mt-1 inline-flex items-center gap-1.5 font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#E3B94E]" data-testid="account-owner-badge">
                                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Owner account
                                </p>
                            )}
                        </div>
                    </div>

                    <dl className="mt-8 space-y-4 border-t border-stone-800 pt-6">
                        {user.phone && !user.phone.startsWith("google:") && (
                            <div className="flex justify-between gap-4">
                                <dt className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-stone-500">Phone</dt>
                                <dd className="text-sm text-stone-200" data-testid="account-phone">{user.phone}</dd>
                            </div>
                        )}
                        {user.email && (
                            <div className="flex justify-between gap-4">
                                <dt className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-stone-500">Email</dt>
                                <dd className="text-sm text-stone-200" data-testid="account-email">{user.email}</dd>
                            </div>
                        )}
                        <div className="flex justify-between gap-4">
                            <dt className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-stone-500">Access</dt>
                            <dd className="text-sm text-stone-200">{isOwner ? "Owner — gallery & achievements management" : "Member"}</dd>
                        </div>
                    </dl>

                    <button
                        type="button"
                        onClick={doLogout}
                        data-testid="account-logout-button"
                        className="mt-8 flex w-full items-center justify-center gap-3 bg-[#C9A227] py-4 font-display text-lg font-bold uppercase tracking-wider text-[#173322] transition-colors hover:bg-[#E3B94E]"
                    >
                        <LogOut className="h-5 w-5" aria-hidden="true" /> Log Out
                    </button>
                    <p className="mt-5 text-center">
                        <Link to="/" data-testid="account-home-link" className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-stone-500 transition-colors hover:text-white">
                            Back to home
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Account;
