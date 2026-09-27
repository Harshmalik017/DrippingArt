# Progress

## v2 — Claymorphism redesign (current)
- [x] Converted every surface from glassmorphism to claymorphism
      (`.clay` / `.clay-sm` / `.clay-strong` utilities, dual soft-shadow
      system in `app/globals.css`).
- [x] Added light/dark theme: `ThemeScript` (pre-hydration class set) +
      `ThemeToggle` (sun/moon button) in the navbar, `night` colour tokens
      in `tailwind.config.ts`, `dark:` variants throughout every component.
- [x] Navbar and footer now solid theme-colour bars (`bg-ink dark:bg-night`)
      instead of floating glass pills, per the brief.
- [x] Themed scrollbar (WebKit + Firefox) matching the palette, swaps with
      theme.
- [x] "Order Now" is now the consistent primary CTA label (navbar, hero,
      contact, floating mobile FAB in `OrderNowFAB.tsx`).
- [x] Categories: homepage shows a **carousel** of top/featured categories
      (`CategoryCarousel.tsx`); a full **/categories** page
      (`app/categories/page.tsx`) lists all categories with **tag filters**
      (`CategoryFilterGrid.tsx` — Home Decor / Accessories / Gifting /
      Personalised / Bestseller / Budget Friendly).
- [x] New **Services** section (`Services.tsx`) for preservation-style
      custom work: Wedding Mala Preservation, Bridal Bouquet Preservation,
      Baby Milestone Keepsakes, Memorial Keepsakes, Corporate & Bulk
      Gifting — each links to WhatsApp with a pre-filled message.
- [x] **Testimonials carousel** (`TestimonialsCarousel.tsx` +
      `Testimonials.tsx`) — autoplay, pauses on hover, dot navigation,
      prev/next buttons.
- [x] **FAQ accordion** (`FAQAccordion.tsx` + `FAQ.tsx`), including the
      50% advance-payment policy for custom orders (also folded into the
      "how ordering works" steps in `About.tsx`).
- [x] **Privacy Policy** page (`app/privacy-policy/page.tsx`), linked from
      the footer and mobile nav.
- [x] Re-verified every file compiles: `tsc --noEmit` clean, and a full
      `next build` (all 3 routes) succeeds and statically prerenders.

## v1 — Original build
- [x] Extracted brand details from the visiting card.
- [x] Next.js 14 + TypeScript + Tailwind scaffolded.
- [x] Reusable UI primitives, Navbar, Hero, Categories, Gallery, About,
      Contact, Footer.

## Not started / left for the client or a future pass
- [ ] Real product photography (placeholders only for now).
- [ ] Real testimonials — the four shown are sample/placeholder copy
      written to demonstrate the carousel; swap them for genuine customer
      reviews in `lib/site-config.ts` (`testimonials`) before relying on
      them publicly.
- [ ] Pricing information per category/service.
- [ ] Confirm/trim the extra categories and services added beyond the
      original brief.
- [ ] A real payment link/flow for the advance payment (currently just a
      stated policy — no online payment collection is wired up).
- [ ] Analytics / SEO sitemap once a domain is live.
- [ ] Local `npm install` / `npm run build` verification (was run in the
      generating environment successfully, aside from Google Fonts needing
      normal internet access to fetch at build time — confirm again after
      any further edits).

## Known limitations
- No CMS: all copy/data is hand-edited in `lib/*.ts`.
- No contact form/backend — everything routes to WhatsApp, Instagram,
  phone or email.
- No real payment gateway — advance payments are collected manually
  (UPI/bank transfer) outside the site, as noted in the Privacy Policy.
