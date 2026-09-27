# Project Brief — Dripping Art Website

## What this is
A marketing website for **Dripping Art**, a personalised resin art business
run by **Rashmi Tomar** out of Sanjay Nagar, Ghaziabad. The site introduces
the brand, showcases product categories and recent pieces, and drives
enquiries to WhatsApp/Instagram/email — there is no e-commerce checkout.

## Source of truth
Brand details were extracted from the business's physical visiting card
(two photos, provided 2026-09-25):

- **Business name:** Dripping Art (logo mark: circular ring around "D|A")
- **Owner:** Rashmi Tomar
- **Tagline:** Personalised Resin Art Pieces
- **Phone:** 9910450181
- **Email:** rashmiit25@gmail.com
- **Instagram:** @dripping_art
- **Location:** Sanjay Nagar, Ghaziabad
- **Card visual style:** cream background, coral/blush/pink watercolour
  washes with gold glitter flecks, elegant serif logotype, thin circular
  ring motif, a small terracotta "drip" under the logo.

Product lines confirmed by the client (beyond what's on the card): wall
clocks, keychains, photo frames — with room to add more categories later
(nameplates, coasters, jewellery trays were added as reasonable extras and
are easy to edit or remove).

## Goals
1. Look distinctly like *this* brand's card — not a generic craft-store
   template — via the coral/blush/gold/terracotta palette and serif logotype.
2. **Claymorphism** design system (v2): soft, puffy, matte clay surfaces
   with a light/dark theme toggle, rather than the original glassmorphism.
3. Use reusable components so new categories/services/testimonials are a
   data change, not a rebuild.
4. Make it trivial for the client to drop in real product photos and
   real testimonials later.
5. Every primary CTA is a consistent "Order Now" leading to WhatsApp (plus
   Instagram/phone/email) — no dead-end buttons.
6. Cover the full scope the client actually does: shelf categories
   (clocks, keychains, frames...) *and* custom preservation services
   (wedding mala, bouquet, baby milestone, memorial, corporate gifting),
   each ordered differently and presented differently.
7. State the advance-payment policy for custom orders clearly and
   consistently (About steps, Services note, FAQ).

## Non-goals (for this pass)
- No shopping cart / online payments — Rashmi takes custom orders and
  advance payments manually (UPI/bank transfer); the site states the
  policy but doesn't collect payment itself.
- No CMS — content lives in `lib/*.ts`.
- No blog.

See `style-guide.md`, `techContext.md`, `activeContext.md` and
`progress.md` for the v2 claymorphism/dark-mode implementation details.
