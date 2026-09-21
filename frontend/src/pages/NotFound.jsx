import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

const NotFound = () => (
    <>
        <Seo title="Page Not Found | IRONBLOOD FITNESS STUDIO ♾️" description="The page you are looking for does not exist." path="/404" />
        <section className="on-gold flex min-h-[80vh] flex-col items-center justify-center px-4 pt-20 text-center" data-testid="not-found-section">
            <p className="font-display text-[10rem] font-black leading-none text-stroke-gold sm:text-[16rem]" aria-hidden="true">
                404
            </p>
            <h1 className="mt-2 font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">Wrong rack. This page doesn't exist.</h1>
            <p className="mt-4 max-w-md text-sm text-stone-500">Head back to the floor — everything you need is one click away.</p>
            <Link
                to="/"
                data-testid="not-found-home-link"
                className="mt-10 bg-[#173322] px-8 py-4 font-display text-base font-bold uppercase tracking-wider text-[#F4EDDD] transition-colors hover:bg-[#1B5E3A]"
            >
                Back to Home
            </Link>
        </section>
    </>
);

export default NotFound;
