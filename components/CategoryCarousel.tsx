"use client";

import { useRef } from "react";
import { Category } from "@/lib/site-config";
import CategoryCard from "./CategoryCard";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${direction === "left" ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function CategoryCarousel({ categories }: { categories: Category[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]") as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 280) + 20;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
      >
        {categories.map((category) => (
          <div
            key={category.slug}
            data-card
            className="w-[78%] flex-none snap-start sm:w-[46%] lg:w-[31%]"
          >
            <CategoryCard category={category} />
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Scroll categories left"
          className="clay-accent clay-interactive flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-cream dark:bg-coral dark:text-night"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Scroll categories right"
          className="clay-accent clay-interactive flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-cream dark:bg-coral dark:text-night"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </div>
  );
}
