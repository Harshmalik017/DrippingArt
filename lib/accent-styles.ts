// Tailwind's JIT scanner needs full, literal class strings — this map keeps
// every accent's classes written out in full rather than built dynamically
// (e.g. never `bg-${accent}-500`, which Tailwind can't see at build time).
export const accentStyles = {
  coral: {
    chip: "bg-coral/25 dark:bg-coral/20",
    icon: "text-terracotta-dark dark:text-coral-light",
    ring: "ring-coral/40 dark:ring-coral/30",
    dot: "bg-coral",
    solid: "bg-coral dark:bg-coral-dark",
    // Solid, high-contrast badge — used for the small tag pills on
    // category cards, where the softer `chip` tint was too subtle to read.
    badge: "bg-terracotta text-cream dark:bg-coral dark:text-night",
  },
  gold: {
    chip: "bg-gold/25 dark:bg-gold/20",
    icon: "text-gold-dark dark:text-gold-light",
    ring: "ring-gold/40 dark:ring-gold/30",
    dot: "bg-gold",
    solid: "bg-gold dark:bg-gold-dark",
    badge: "bg-gold-dark text-cream dark:bg-gold dark:text-night",
  },
  blush: {
    chip: "bg-blush-dark/30 dark:bg-blush-dark/25",
    icon: "text-plum dark:text-blush-light",
    ring: "ring-blush-dark/40 dark:ring-blush-dark/30",
    dot: "bg-blush-dark",
    solid: "bg-blush-dark dark:bg-blush",
    badge: "bg-plum text-cream dark:bg-blush-dark dark:text-night",
  },
  plum: {
    chip: "bg-plum/20 dark:bg-plum/25",
    icon: "text-plum-dark dark:text-plum",
    ring: "ring-plum/40 dark:ring-plum/30",
    dot: "bg-plum",
    solid: "bg-plum dark:bg-plum-dark",
    badge: "bg-plum-dark text-cream dark:bg-plum dark:text-cream",
  },
  terracotta: {
    chip: "bg-terracotta/20 dark:bg-terracotta/25",
    icon: "text-terracotta-dark dark:text-terracotta",
    ring: "ring-terracotta/40 dark:ring-terracotta/30",
    dot: "bg-terracotta",
    solid: "bg-terracotta dark:bg-terracotta-dark",
    badge: "bg-terracotta-dark text-cream dark:bg-terracotta dark:text-cream",
  },
  sand: {
    chip: "bg-gold-light/35 dark:bg-gold-light/15",
    icon: "text-terracotta-dark dark:text-gold-light",
    ring: "ring-gold/30 dark:ring-gold/25",
    dot: "bg-gold-light",
    solid: "bg-gold-light dark:bg-gold-dark",
    badge: "bg-gold-dark text-cream dark:bg-gold-light dark:text-night",
  },
} as const;

export type AccentKey = keyof typeof accentStyles;
