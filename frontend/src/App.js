import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Achievements from "@/pages/Achievements";
import Services from "@/pages/Services";
import Facilities from "@/pages/Facilities";
import Memberships from "@/pages/Memberships";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname]);
    return null;
};

function App() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const lenis = new Lenis({ autoRaf: true, lerp: 0.09 });
        return () => lenis.destroy();
    }, []);

    return (
        <div className="App grain">
            <BrowserRouter>
                <ScrollToTop />
                <Navbar />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/achievements" element={<Achievements />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/facilities" element={<Facilities />} />
                        <Route path="/memberships" element={<Memberships />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
                <Toaster theme="dark" position="bottom-center" toastOptions={{ style: { background: "#142B21", border: "1px solid #3A2E1A", color: "#fff", borderRadius: 0 } }} />
            </BrowserRouter>
        </div>
    );
}

export default App;
