# Dripping Art — Website

A Next.js + Tailwind CSS (claymorphism design, light/dark mode) website for
**Dripping Art**, Rashmi Tomar's personalised resin art studio (Sanjay
Nagar, Ghaziabad).

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's on the site

- **Home** (`/`) — hero, top-categories carousel, preservation/custom
  Services (wedding mala, bouquet, baby milestone, memorial, corporate
  gifting), gallery, About, testimonials carousel, FAQ (incl. the advance
  payment policy), contact, and a floating "Order Now" button on mobile.
- **All Categories** (`/categories`) — every category with tag filters.
- **Privacy Policy** (`/privacy-policy`).
- **Light/dark mode** — toggle in the navbar; persists via `localStorage`
  and respects the visitor's system preference on first visit.

## Add your product photos

Drop images into `public/images/` — see `public/images/README.md` for the
exact filenames the gallery expects, or edit `lib/products.ts`. Until then,
each gallery tile shows a soft "Photo coming soon" placeholder.

## Add real testimonials

The four testimonials shown are sample/placeholder copy written to
demonstrate the carousel. Replace them with real customer reviews in
`lib/site-config.ts` (the `testimonials` array) before relying on them
publicly.

## Edit brand details, categories, services, FAQs

Everything client-specific — phone, email, Instagram, address, WhatsApp
links, categories (with filter tags), services, testimonials, FAQs, and
the advance-payment percentage — lives in `lib/site-config.ts`.

## Project docs

See the `memory-bank/` folder for the full project brief, brand/style
guide (claymorphism system + dark mode), technical notes and current
progress — useful context for anyone (human or AI) picking this project
back up.

## Build for production

```bash
npm run build
npm run start
```
