import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

const base =
  "clay-interactive inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm tracking-wide transition-all duration-200 font-body font-medium focus-visible:outline-2";

const variants: Record<string, string> = {
  primary:
    "bg-terracotta text-cream dark:bg-coral dark:text-night hover:brightness-110",
  secondary:
    "clay-sm bg-cream text-ink dark:bg-night-elevated dark:text-cream hover:-translate-y-0.5",
  ghost:
    "text-ink dark:text-cream underline decoration-gold/60 decoration-2 underline-offset-4 hover:text-terracotta dark:hover:text-coral shadow-none",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${
    variant === "primary" ? "shadow-[var(--clay-shadow-sm)]" : ""
  } ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
