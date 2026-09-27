"use client";

import { useState } from "react";
import { FAQ } from "@/lib/site-config";
import { QuestionIcon } from "./Icons";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 flex-none transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.question} className="clay overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center gap-3 px-5 py-4 text-left font-body text-sm font-medium text-ink dark:text-cream sm:px-6 sm:py-5 sm:text-base"
            >
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-terracotta/15 text-terracotta dark:bg-coral/20 dark:text-coral">
                <QuestionIcon className="h-4 w-4" />
              </span>
              <span className="flex-1">{faq.question}</span>
              <ChevronIcon open={open} />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                open ? "max-h-60" : "max-h-0"
              }`}
            >
              <p className="px-5 pb-5 pl-16 font-body text-sm leading-relaxed text-ink/70 dark:text-night-soft sm:px-6 sm:pl-16">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
