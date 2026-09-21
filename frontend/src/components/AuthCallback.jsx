import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

const AuthCallback = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { googleSession } = useAuth();
    const processed = useRef(false);

    useEffect(() => {
        if (processed.current) return;
        processed.current = true;
        const match = location.hash.match(/session_id=([^&]+)/);
        const sessionId = match?.[1];
        if (!sessionId) {
            navigate("/auth", { replace: true });
            return;
        }
        (async () => {
            try {
                await googleSession(sessionId);
                toast.success("Signed in with Google.");
                navigate("/", { replace: true });
            } catch {
                toast.error("Google sign-in failed. Please try again.");
                navigate("/auth", { replace: true });
            }
        })();
    }, [location.hash, googleSession, navigate]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#D9B44A]" data-testid="auth-callback">
            <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#173322]">Signing you in…</p>
        </div>
    );
};

export default AuthCallback;
