"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import ThemeToggle from "./ThemeToggle";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "All Categories" },
  { href: "/personalised", label: "Personalised" },
  { href: "/reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink dark:bg-night shadow-[var(--clay-shadow-sm)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl leading-none text-cream">
            D<span className="text-gold-light">|</span>A
          </span>
          <span className="hidden font-body text-xs uppercase tracking-[0.2em] text-cream/60 sm:inline">
            Dripping Art
          </span>
        </Link>

        <nav className="hidden items-center gap-6 font-body text-sm text-cream/80 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-gold-light">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Button
            href={siteConfig.orderNowUrl}
            external
            variant="primary"
            className="!bg-coral !text-night hover:!bg-coral-light !shadow-[var(--clay-shadow-sm)] !px-4 !py-2 text-xs sm:!px-6 sm:!py-3 sm:text-sm"
          >
            Order Now
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="clay-interactive flex h-10 w-10 items-center justify-center rounded-full bg-cream/15 text-cream lg:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-ink dark:bg-night px-4 transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 pt-2 font-body text-sm text-cream/85">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 transition-colors hover:bg-cream/10 hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/terms-and-conditions"
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-2.5 text-cream/60 transition-colors hover:bg-cream/10 hover:text-gold-light"
          >
            Terms &amp; Conditions
          </a>
          <a
            href="/privacy-policy"
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-2.5 text-cream/60 transition-colors hover:bg-cream/10 hover:text-gold-light"
          >
            Privacy Policy
          </a>
        </nav>
      </div>
    </header>
  );
}
