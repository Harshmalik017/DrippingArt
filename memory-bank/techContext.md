# Tech Context

## Stack
- **Next.js 14** (App Router, `app/` directory), TypeScript.
- **Tailwind CSS 3**, `darkMode: "class"`. Custom tokens in
  `tailwind.config.ts`; claymorphism shadow variables and dark-mode
  overrides in `app/globals.css`.
- No external UI kit — all components hand-built and reusable
  (`components/ui/*`).
- No backend/database. All content is static, edited directly in
  `lib/*.ts`.

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production build
```

## Pages
- `/` — homepage: Navbar, Hero, Categories (carousel), Services, Gallery,
  About, Testimonials, FAQ, Contact, Footer, floating Order Now button.
- `/categories` — all categories with tag filters.
- `/privacy-policy` — static privacy policy.

## Where things live
- `app/layout.tsx` — fonts, metadata/SEO, mounts `<ThemeScript />` in
  `<head>` so the dark/light class is set before hydration.
- `app/globals.css` — Tailwind layers, the `--clay-shadow*` custom
  properties (light values in `:root`, dark values in `.dark`), `.clay` /
  `.clay-sm` / `.clay-strong` / `.clay-interactive` / `.clay-pressed`
  utilities, and the themed scrollbar rules.
- `components/` — one file per page section, plus:
  - `components/ui/` — generic primitives: `Button`, `ClayCard`,
    `SectionHeading`.
  - `components/ThemeScript.tsx` / `ThemeToggle.tsx` — dark mode wiring.
  - `components/CategoryCard.tsx` / `CategoryCarousel.tsx` /
    `CategoryFilterGrid.tsx` — shared by the homepage carousel and the
    `/categories` page so category markup only exists once.
  - `components/TestimonialsCarousel.tsx`, `FAQAccordion.tsx` — the two
    interactive client components driving those sections.
  - `components/OrderNowFAB.tsx` — floating mobile "Order Now" button,
    appears after scrolling past the hero.
- `lib/site-config.ts` — brand facts, `categories` (with `tags` +
  `featured`), `allCategoryTags`, `services`, `testimonials`, `faqs`.
  **Edit here first** for any content change.
- `lib/products.ts` — the gallery's product list (image paths under
  `/public/images`).
- `lib/accent-styles.ts` — the only place accent colours map to full
  Tailwind class strings, **including their `dark:` variants** — dynamic
  class names like `` `bg-${accent}-500` `` are avoided on purpose because
  Tailwind's JIT scanner can't see them.
- `public/images/` — where the client drops real product photography.

## Dark mode implementation
1. `components/ThemeScript.tsx` renders an inline `<script>` (not a React
   effect) that runs before paint: reads `localStorage['da-theme']`,
   falls back to `prefers-color-scheme`, and adds the `dark` class to
   `<html>` if needed. This is what prevents a flash of the wrong theme.
2. `components/ThemeToggle.tsx` is a client component (`"use client"`)
   that toggles that class and writes the choice back to
   `localStorage['da-theme']`.
3. Every component that needs to look different in dark mode uses
   Tailwind's `dark:` variant directly (e.g. `bg-cream dark:bg-night`,
   `text-ink dark:text-cream`) — colours are **not** driven by CSS
   variables, only the four `--clay-shadow*` values are, which is what
   makes every `.clay*` surface re-theme automatically.
4. `app/layout.tsx` has `suppressHydrationWarning` on `<html>` and
   `<body>` because the inline script can add the `dark` class before
   React hydrates, which would otherwise trigger a (harmless) mismatch
   warning.

## Notable implementation details
- `components/ProductImage.tsx` is a client component that swaps a missing
  photo for a "Photo coming soon" placeholder via `onError`.
- `CategoryCarousel.tsx` and `TestimonialsCarousel.tsx` are plain
  scroll-snap / interval-based carousels — no carousel library dependency.
- WhatsApp links: `siteConfig.orderNowUrl` (generic "Order Now" CTA) and a
  per-service `wa.me` link built inline in `Services.tsx` with the
  service name in the pre-filled message.
- Fonts are loaded with `next/font/google` (Playfair Display + Jost),
  self-hosted at build time — this requires normal internet access to
  `fonts.googleapis.com`/`fonts.gstatic.com` during `npm run build`
  (it was blocked in the sandbox that generated this project, which is
  why layout.tsx was temporarily swapped out to verify the rest of the
  build — the shipped `layout.tsx` has the real font imports).

## Known follow-ups
- Real product photos and real testimonials still need to replace
  placeholders (see `progress.md`).
- No automated tests configured; run `npm run lint` and `npm run build`
  locally before deploying.
- Consider `next-sitemap` or a manual `sitemap.xml` once there's a real
  domain.
