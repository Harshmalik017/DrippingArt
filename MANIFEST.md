# Dripping Art — Update Package

This zip contains **only the files that changed** for this round of fixes.
Every path below is relative to your project root — copy each file into
the same path in your existing project, overwriting where a file already
exists there.

## New files (didn't exist before)
- `components/Icons.tsx` — shared icon set (Instagram, Phone, Mail, Pin, Question)
- `app/personalised/page.tsx` — new page (was the homepage Gallery section)
- `app/reviews/page.tsx` — new page: all reviews
- `app/terms-and-conditions/page.tsx` — new page

## Updated files
- `lib/site-config.ts` — testimonials expanded to 8, each with an optional `featured` flag
- `lib/accent-styles.ts` — added a solid `badge` style so category tag pills are actually visible
- `app/globals.css` — added `.clay-accent` utility (theme-filled buttons without forcing a background)
- `app/page.tsx` — removed the homepage Gallery section (now its own page)
- `components/CategoryCard.tsx` — tag pills now use the visible `badge` style
- `components/CategoryCarousel.tsx` — prev/next buttons filled with theme colour
- `components/TestimonialsCarousel.tsx` — prev/next buttons filled with theme colour
- `components/Testimonials.tsx` — homepage now shows only featured reviews + "View all reviews" button
- `components/Services.tsx` — "Ask about this" restyled as a real button chip
- `components/FAQAccordion.tsx` — leading question icon added to each FAQ row
- `components/Contact.tsx` — added a "Call Now" button (phone icon) and Instagram icon on "Follow"
- `components/Navbar.tsx` — menu simplified (Categories/Services removed, Gallery→Personalised, Reviews→its own page), Terms & Conditions added before Privacy Policy in the mobile menu
- `components/Footer.tsx` — Explore links updated to match the new menu, contact rows now have icons, an Instagram icon button added, Terms & Conditions added before Privacy Policy

## Not included (unchanged)
Everything else in the project — `Hero.tsx`, `About.tsx`, `Gallery.tsx`,
`CategoryFilterGrid.tsx`, `ui/*`, `ThemeScript.tsx`, `ThemeToggle.tsx`,
`OrderNowFAB.tsx`, `ProductImage.tsx`, `lib/products.ts`,
`tailwind.config.ts`, `app/layout.tsx`, `app/categories/page.tsx`,
`app/privacy-policy/page.tsx`, config files, etc. — is untouched. You don't
need to replace those.

## After copying the files in
```bash
npm install   # only needed if you haven't already
npm run dev
```
No new dependencies were added — this is all existing packages plus new
files/edits, so `npm install` is only needed if you're setting the project
up fresh.
