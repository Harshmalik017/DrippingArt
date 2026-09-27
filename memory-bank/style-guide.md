# Style Guide — Claymorphism (v2)

The site moved from glassmorphism to **claymorphism**: soft, puffy, matte
surfaces that share the page's background hue and separate themselves with
a dual soft-shadow (a light source top-left, a shadow bottom-right) instead
of transparency/blur. It now also supports light and dark themes.

## Claymorphism system (`app/globals.css`)
- `--clay-shadow`, `--clay-shadow-sm`, `--clay-shadow-lg`, `--clay-shadow-inset`
  are CSS custom properties, redefined once under `.dark`. Every clay
  surface reads these vars, so the whole site re-themes by toggling one
  class on `<html>` — no per-component shadow logic needed.
- `.clay` / `.clay-sm` / `.clay-strong` — surface utilities (background +
  radius + shadow). Use `.clay-strong` for the one or two "hero" cards per
  page (contact card, hero blob, testimonial card); `.clay` for regular
  cards; `.clay-sm` for small round icon/arrow buttons.
- `.clay-interactive` + `.clay-pressed` — the tactile press effect: shadow
  flips to `--clay-shadow-inset` and the element nudges down 1px on
  `:active`, or permanently for a "selected" state (e.g. an active filter
  pill uses `clay-pressed` with a solid fill).

## Colour tokens (`tailwind.config.ts`)
Same brand palette as v1 (cream/blush/coral/terracotta/gold/plum/ink),
**plus** a `night` group for dark mode:
| Token | Hex | Use |
|---|---|---|
| `night` | #1D1613 | Page background in dark mode |
| `night-surface` | #2A211B | Card surfaces in dark mode |
| `night-elevated` | #362A22 | "Strong" cards in dark mode |
| `night-soft` | #C9B8A8 | Muted/secondary text in dark mode |

Dark mode is `darkMode: "class"` — a `dark` class on `<html>` switches
every `dark:` variant at once. `components/ThemeScript.tsx` sets that class
before hydration (reading `localStorage['da-theme']`, falling back to the
OS preference) so there's no flash of the wrong theme.
`components/ThemeToggle.tsx` is the sun/moon button in the navbar that
flips it and persists the choice.

## Top and bottom bars
Per the brief, the navbar and footer are **solid theme colour**, not
glass/clay: both use `bg-ink dark:bg-night` with cream text. Because `ink`
is already a dark brown, this bar reads the same "always-dark bookend" way
in both themes — it doesn't need its own light/dark variants and always
gives strong contrast against the light clay content areas.

## Scrollbar
Themed via `--scrollbar-track` / `--scrollbar-thumb` CSS vars in
`globals.css` (WebKit `::-webkit-scrollbar-*` + `scrollbar-color` for
Firefox), redefined under `.dark` — light mode: terracotta thumb on cream
track; dark mode: gold thumb on a dark track.

## Typography, motifs, motion
Unchanged from v1: Playfair Display (`font-display`) for headings, Jost
(`font-body`) for UI/body text; the "ring" motif behind the hero blob; one
orchestrated `animate-rise-in` + `animate-drip` reveal on load, not
fade-in-on-scroll everywhere; motion respects `prefers-reduced-motion`.

## What to avoid
- Don't reintroduce blur/transparency (`backdrop-filter`) anywhere — that
  was the old system. Every surface should be an opaque clay card.
- Don't hand-roll a new shadow value per component — always use the four
  `--clay-shadow*` vars so dark mode stays automatic.
- Don't add a new accent colour without adding it to
  `lib/accent-styles.ts` as full literal Tailwind class strings (see
  `techContext.md` — Tailwind's JIT scanner can't see dynamically built
  class names like `` `bg-${accent}-500` ``).
