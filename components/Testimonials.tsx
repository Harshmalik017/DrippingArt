import SectionHeading from "./ui/SectionHeading";
import TestimonialsCarousel from "./TestimonialsCarousel";
import Button from "./ui/Button";
import { testimonials } from "@/lib/site-config";

export default function Testimonials() {
  const featured = testimonials.filter((t) => t.featured);

  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          kicker="Kind words"
          title="From people who ordered a piece"
          description="A few notes from recent customers."
        />
        <div className="mt-12">
          <TestimonialsCarousel testimonials={featured} />
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/reviews" variant="secondary">
            View all reviews
          </Button>
        </div>
      </div>
    </section>
  );
}
