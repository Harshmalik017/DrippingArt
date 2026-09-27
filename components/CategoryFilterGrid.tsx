"use client";

import { useMemo, useState } from "react";
import { Category } from "@/lib/site-config";
import CategoryCard from "./CategoryCard";

export default function CategoryFilterGrid({
  categories,
  tags,
}: {
  categories: Category[];
  tags: string[];
}) {
  const [selected, setSelected] = useState<string[]>([]);

  const filtered = useMemo(() => {
    if (selected.length === 0) return categories;
    return categories.filter((category) =>
      selected.every((tag) => category.tags.includes(tag))
    );
  }, [categories, selected]);

  function toggleTag(tag: string) {
    setSelected((current) =>
      current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag]
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={() => setSelected([])}
          className={`clay-interactive rounded-full px-4 py-2 font-body text-sm transition-colors ${
            selected.length === 0
              ? "clay-pressed bg-terracotta text-cream"
              : "clay-sm text-ink dark:text-cream"
          }`}
        >
          All
        </button>
        {tags.map((tag) => {
          const active = selected.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              aria-pressed={active}
              className={`clay-interactive rounded-full px-4 py-2 font-body text-sm transition-colors ${
                active ? "clay-pressed bg-terracotta text-cream" : "clay-sm text-ink dark:text-cream"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <p className="mt-4 font-body text-sm text-ink/50 dark:text-night-soft/70">
        Showing {filtered.length} of {categories.length} categories
        {selected.length > 0 ? ` · filtered by ${selected.join(", ")}` : ""}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      ) : (
        <div className="clay mt-6 p-10 text-center font-body text-ink/60 dark:text-night-soft">
          No categories match that combination of filters yet — try clearing one.
        </div>
      )}
    </div>
  );
}
