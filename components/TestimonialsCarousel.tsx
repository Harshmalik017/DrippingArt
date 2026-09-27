"use client";

import { useEffect, useState } from "react";
import { Testimonial } from "@/lib/site-config";
import TestimonialAvatar from "./TestimonialAvatar";

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused, testimonials.length]);

  function go(i: number) {
    setIndex(((i % testimonials.length) + testimonials.length) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="clay-strong relative overflow-hidden p-8 sm:p-10">
        <svg
          viewBox="0 0 32 24"
          className="h-8 w-10 text-terracotta/30 dark:text-coral/25"
          fill="currentColor"
        >
          <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 4.8C9.6 6.4 7.2 9.2 6.8 13.6H12.8V24H0ZM17.2 24V14.4C17.2 6.4 22 1.2 30 0l1.6 4.8c-4.8 1.6-7.2 4.4-7.6 8.8H30V24H17.2Z" />
        </svg>

        <div className="mt-5 flex items-center gap-4">
          <TestimonialAvatar
            name={current.name}
            imageSrc={current.image}
            imageAlt={current.imageAlt}
            className="h-14 w-14 sm:h-16 sm:w-16"
          />
          <div>
            <p className="font-body text-sm font-medium text-ink dark:text-cream">{current.name}</p>
            <p className="font-body text-xs text-ink/55 dark:text-night-soft/70">
              {current.location} &middot; {current.piece}
            </p>
          </div>
        </div>

        <p key={index} className="animate-fade-in mt-5 font-display text-xl leading-relaxed text-ink dark:text-cream sm:text-2xl">
          &ldquo;{current.quote}&rdquo;
        </p>

        <div className="mt-6 flex items-center justify-end">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="clay-accent clay-interactive flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-cream dark:bg-coral dark:text-night"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="clay-accent clay-interactive flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-cream dark:bg-coral dark:text-night"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {testimonials.map((testimonial, i) => (
          <button
            key={testimonial.name}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show testimonial from ${testimonial.name}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-terracotta dark:bg-coral" : "w-2.5 bg-ink/20 dark:bg-cream/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
