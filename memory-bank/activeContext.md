# Active Context

## Current state (v2 — claymorphism redesign)
The site was rebuilt from glassmorphism to **claymorphism** with full
light/dark theming, plus several new sections requested after the first
pass: a testimonials carousel, a featured-categories carousel on the
homepage with a filterable all-categories page, a Services section for
preservation-style custom work (wedding mala, bouquet, baby milestone,
memorial, corporate gifting), an FAQ accordion covering the advance-payment
policy, a Privacy Policy page, a themed scrollbar, and a consistent
"Order Now" CTA (including a floating mobile button).

Every file was re-verified with automated `grep` checks plus a real
`tsc --noEmit` and `next build` pass (see `progress.md`) before this state
was packaged — treat this repo as a known-good baseline.

## Immediate next steps
1. Client uploads real photos to `public/images` (unchanged from v1 — see
   that folder's README).
2. **Replace the sample testimonials** in `lib/site-config.ts`
   (`testimonials` array) with real customer reviews before the carousel
   is shown to the public — the four currently there are placeholder copy
   written to demonstrate the carousel UI, not real quotes.
3. Confirm which of the added categories/services the client actually
   wants to keep (extras beyond the original brief are called out in
   `productContext.md` and `progress.md`).
4. Run `npm install && npm run build` locally to reconfirm before
   deploying, especially after any further content edits.

## Decisions made and why
- **Claymorphism via CSS-variable shadows**, not per-component colour
  variables, so dark mode is "free" everywhere a `.clay*` class is used —
  only the four `--clay-shadow*` vars change under `.dark`.
- **Navbar/footer as solid `bg-ink dark:bg-night` bars**, not clay/glass,
  per the explicit request to "fill top bar and bottom bar with the theme
  color" — this also means they don't need their own dark-mode variant,
  since `ink` already reads as a dark bar in both themes.
- **Services kept separate from Categories**: Categories are shelf-style
  product types customers browse and filter by tag; Services are
  one-off, bring-your-own-item preservation work (mala, bouquet, milestone
  items) — different enough in shape (no filtering, WhatsApp-per-service
  CTA) that combining them into one filtered grid would've hidden the
  "these are custom, message first" nature of the services.
- **FAQ accordion doubles as the advance-payment disclosure** rather than
  a separate Terms page, since it's the one policy detail customers most
  need before ordering — kept close to Services/Contact rather than buried
  in Privacy Policy.

## Things to watch
- If new accent colours are needed, add them to `lib/accent-styles.ts` as
  full literal class strings (see `techContext.md`) — this rule still
  applies and now also covers dark-mode variants (`dark:bg-...` etc. must
  also be written out literally in that same map).
- Keep all new surfaces on the `.clay*` utilities / `--clay-shadow*` vars
  rather than introducing ad-hoc shadows, or dark mode will silently break
  for that one component.
- `ThemeScript` must stay a synchronous inline `<script>` in `<head>`
  (not a `useEffect`) — that's what prevents the light/dark flash on load.
