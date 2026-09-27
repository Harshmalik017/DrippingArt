import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import ClayCard from "@/components/ui/ClayCard";
import { testimonials } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reviews | Dripping Art",
  description: "Read what customers say about their personalised resin art pieces from Dripping Art.",
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-cream dark:bg-night">
      <Navbar />
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            kicker="Kind words"
            title="Reviews"
            description={`${testimonials.length} notes from customers who ordered a piece.`}
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <ClayCard key={testimonial.name} className="flex h-full flex-col p-6">
                <svg viewBox="0 0 32 24" className="h-6 w-8 text-terracotta/30 dark:text-coral/25" fill="currentColor">
                  <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 4.8C9.6 6.4 7.2 9.2 6.8 13.6H12.8V24H0ZM17.2 24V14.4C17.2 6.4 22 1.2 30 0l1.6 4.8c-4.8 1.6-7.2 4.4-7.6 8.8H30V24H17.2Z" />
                </svg>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-ink/80 dark:text-cream/85">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-ink/10 pt-4 dark:border-cream/10">
                  <p className="font-body text-sm font-medium text-ink dark:text-cream">{testimonial.name}</p>
                  <p className="font-body text-xs text-ink/55 dark:text-night-soft/70">
                    {testimonial.location} &middot; {testimonial.piece}
                  </p>
                </div>
              </ClayCard>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
