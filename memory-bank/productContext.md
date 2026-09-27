# Product Context

## Who this is for
Individual buyers browsing on a phone, usually arriving from an Instagram
bio link or a WhatsApp-shared link, deciding whether to message Rashmi
about a custom piece. Not a B2B or wholesale audience (though Corporate &
Bulk Gifting is now one of the listed services for event/office orders).

## Core user journey
1. Land on hero → understand this is hand-poured, personalised resin art.
   Toggle light/dark if they prefer.
2. Scan **top categories** (carousel) → see the breadth of what's possible,
   or tap through to **all categories** and filter by tag (Home Decor,
   Gifting, Personalised, Accessories, Bestseller, Budget Friendly).
3. Scroll to **Services** → realise Dripping Art also does preservation
   work (wedding mala, bouquet, baby milestone, memorial, bulk/corporate) —
   each service links straight to a pre-filled WhatsApp message.
4. Skim the **gallery** → build trust via real (or soon-to-be-real) photos.
5. Read **About** → trust the person (solo maker), and see the 4-step
   process, including the advance-payment step.
6. Read a couple of **testimonials** → social proof.
7. Check the **FAQ** → advance payment, timelines, shipping, how to order
   — answers the practical questions before they message.
8. Hit **Order Now** (navbar, hero, contact, or the floating mobile
   button) → WhatsApp is the primary conversion path.

## Brand voice
Warm, personal, craft-forward. First-person references to Rashmi by name.
Avoid corporate/SaaS language. Copy should read like a skilled friend
describing her own work, not ad copy.

## Categories (current — `lib/site-config.ts` → `categories`)
Wall Clocks, Keychains, Photo Frames, Nameplates (all `featured: true`,
shown in the homepage carousel), plus Coasters and Jewellery Trays (all
categories, featured or not, appear on `/categories`). Each has `tags`
used by the filter UI.

## Services (current — `lib/site-config.ts` → `services`)
Wedding Mala Preservation, Bridal Bouquet Preservation, Baby Milestone
Keepsakes, Memorial Keepsakes, Corporate & Bulk Gifting. These are
one-off, bring-your-own-item pieces — distinct from the shelf categories
above — so they're a separate section with a direct "ask about this"
WhatsApp link per service rather than a filterable grid.

## Ordering policy
Custom/personalised pieces require a **50% advance** to start production
(`siteConfig.advancePaymentPercent`), balance due before delivery. This is
stated in the About process steps, the Services section footnote, and the
FAQ — kept consistent by referencing the same config value everywhere
rather than hardcoding "50%" in multiple places.

## Open questions for the client
- Real pricing / starting-price ranges per category or service.
- Shipping / delivery radius or pan-India shipping claims (FAQ currently
  says pan-India with a WhatsApp pincode check).
- Real testimonials to replace the four sample ones.
- Whether Nameplates/Coasters/Jewellery Trays and the five Services are
  all actually offered as described, or need trimming/renaming.
- Whether advance payment is really 50% (currently a placeholder policy
  — confirm the real number/terms with Rashmi).
