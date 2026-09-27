"use client";

import { useEffect, useState } from "react";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.2A8.2 8.2 0 1 1 9.8 4a6.6 6.6 0 0 0 10.2 10.2z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("da-theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable — theme just won't persist across visits.
    }
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      aria-pressed={isDark ?? false}
      className="clay-interactive relative flex h-10 w-10 items-center justify-center rounded-full bg-cream/15 text-cream shadow-[var(--clay-shadow-sm)] transition-transform hover:-translate-y-0.5"
    >
      <SunIcon className={`absolute h-5 w-5 transition-opacity duration-200 ${isDark ? "opacity-0" : "opacity-100"}`} />
      <MoonIcon className={`absolute h-5 w-5 transition-opacity duration-200 ${isDark ? "opacity-100" : "opacity-0"}`} />
    </button>
  );
}
