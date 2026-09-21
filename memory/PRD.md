# PRD — IRONBLOOD FITNESS STUDIO ♾️ Website

## Original Problem Statement
Premium, high-end professional website for IRONBLOOD FITNESS STUDIO ♾️, a real bodybuilding/fitness studio at 50, Bansdroni Park, Ward 113, Kolkata 700070 (owner/head coach: Bapi Das — Professional Bodybuilder & Fitness Coach). Dark cinematic identity (black/charcoal/white + crimson accents), owner achievements prominent on Home, 8 routes, 14 verbatim achievements, 10 verbatim reviews in a one-at-a-time auto carousel, WhatsApp enquiry form (no backend), SEO + accessibility + performance, no invented facts/prices/results.

## Architecture
- React 19 (CRA/craco) frontend-only static site — no backend, no DB (explicit user choice)
- react-router-dom 7 (8 routes + 404), framer-motion (reveals, hero parallax, lightbox), lenis (smooth scroll), sonner (toasts), Tailwind + shadcn tokens
- Content single-sourced in `src/data/content.js` (business info, 14 achievements, 14 services, 6 specializations, 10 reviews, 11 images, facilities)
- `src/components/Seo.jsx` sets per-page title/description/canonical/OG; JSON-LD ExerciseGym schema in `public/index.html`; `robots.txt`, `sitemap.xml`, `favicon.svg` in `public/`
- 11 real client photos in `public/images/` (PIL-optimized). NOTE: CDN artifact order ≠ display order — mapping verified visually and filenames corrected by rename on 2026-09-21.
- BRAND THEME (2026-09-21 rebrand): DARK GOLD (#C9A227/#E3B94E/#D9B85C) + DEEP GREEN (#132B20/#0C1D14) + LIGHT GREEN (#8CC084, ranking tier) + CREAM/WHITE on a dark-gold base #16110A (cards #211B10, borders #3A2E1A, warm stone grays). Previous red/black theme fully replaced.
- Official logo: `public/images/logo.png` (user-supplied, black background un-multiplied to true transparency via PIL/numpy). Used in header, hero, footer. Favicon recolored gold/green.
- Homepage hero (2026-09-21): NEW owner podium photo `bapi-podium.jpg` as FULL BACKGROUND (object-[50%_16%], scale-110 parallax, dark-gold gradient overlays); old framed portrait card removed (bapi-pose.jpg still used in About + Gallery).

## User Personas
- Local fitness enthusiast in Bansdroni/Kolkata evaluating a serious gym
- Aspiring competitor looking for a proven contest-prep coach
- Existing member checking hours/location

## Core Requirements (static)
Owner credibility first; premium dark UI; real imagery only; WhatsApp-first conversion; verbatim achievements/reviews; mobile-first; no fake claims.

## Implemented (2026-09-21)
- Home: kinetic hero (masked line reveal, parallax framed owner portrait, stats strip), editorial marquee, studio intro, Bapi Das showcase, competition-record preview, 12+ years, specializations, training banner, facilities + gallery previews, membership CTA, 10-review single-item auto carousel (prev/next, 1/10, pause-on-hover), contact strip
- About (manifesto chapters, coach profile), Achievements (champion poster banner, Gold/Silver/Bronze/Ranking filters, all 14 cards, trophy-wall proof), Services (14 cards + training banner), Facilities (7 image-backed cards), Memberships (3 enquiry tiers, no prices), Gallery (category filters + keyboard-navigable lightbox), Contact (info + validated WhatsApp enquiry form), styled 404
- Sticky nav + full-screen mobile menu; sitemap/robots/favicon; JSON-LD; lazy-loaded optimized images
- Google rating 4.8 / 249 reviews VERIFIED against the official Google listing (user-shared link, crawled 2026-09-21 — name/address/phone all match) and now displayed via `GoogleRatingBadge` in the Home reviews section + `aggregateRating` JSON-LD
- 3 more stage photos added (2026-09-21): bapi-trophy-flag (home champion banner + gallery), bapi-stage-bw (About inset + achievements "On Stage" strip + gallery), bapi-stage-side (achievements strip + gallery). Gallery now 13 images
- Contact page has an embedded Google Map (lazy iframe, no API key) pinned to the studio
- All 5 second-batch images integrated additively: member-press (training banners), member-dumbbell (services hero), comp-poster (achievements champion banner), trophy-wall (owner showcase/about/proof), gym-floor-3 (facilities/free weights)

## Backlog
- P0: Add remaining user photos when uploaded (gallery + sections)
- P1: Production hosting headers (CSP/HSTS/X-Content-Type-Options) — needs server config at deploy
- P1: Re-add Google rating badge if user supplies a verified listing link
- P2: WebP/AVIF variants + responsive srcset; embedded Google Map iframe; blog/results section

## Next Tasks
1. Ingest any further photos the user uploads
2. Deploy to production + set security headers
3. Point canonical/sitemap to final custom domain
