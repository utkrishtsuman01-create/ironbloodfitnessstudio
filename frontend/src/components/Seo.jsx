import { useEffect } from "react";

const SITE = process.env.REACT_APP_BACKEND_URL || "";

const upsert = (selector, attrs) => {
    let el = document.head.querySelector(selector);
    if (!el) {
        el = document.createElement(attrs.tag);
        Object.entries(attrs.static || {}).forEach(([k, v]) => el.setAttribute(k, v));
        document.head.appendChild(el);
    }
    Object.entries(attrs.set).forEach(([k, v]) => el.setAttribute(k, v));
};

export const Seo = ({ title, description, path = "/", image = "/images/bapi-pose.jpg" }) => {
    useEffect(() => {
        document.title = title;
        const url = `${SITE}${path}`;
        upsert('meta[name="description"]', { tag: "meta", static: { name: "description" }, set: { content: description } });
        upsert('link[rel="canonical"]', { tag: "link", static: { rel: "canonical" }, set: { href: url } });
        upsert('meta[property="og:title"]', { tag: "meta", static: { property: "og:title" }, set: { content: title } });
        upsert('meta[property="og:description"]', { tag: "meta", static: { property: "og:description" }, set: { content: description } });
        upsert('meta[property="og:url"]', { tag: "meta", static: { property: "og:url" }, set: { content: url } });
        upsert('meta[property="og:image"]', { tag: "meta", static: { property: "og:image" }, set: { content: `${SITE}${image}` } });
        upsert('meta[name="twitter:title"]', { tag: "meta", static: { name: "twitter:title" }, set: { content: title } });
        upsert('meta[name="twitter:description"]', { tag: "meta", static: { name: "twitter:description" }, set: { content: description } });
    }, [title, description, path, image]);
    return null;
};

export default Seo;
