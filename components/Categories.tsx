import { categories } from "@/lib/site-config";
import SectionHeading from "./ui/SectionHeading";
import CategoryCarousel from "./CategoryCarousel";
import Button from "./ui/Button";

export default function Categories() {
  const featured = categories.filter((category) => category.featured);

  return (
    <section id="categories" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="What we pour"
            title="Top categories"
            description="A quick look at our most-loved pieces — every one of them can be personalised."
          />
          <Button href="/categories" variant="secondary" className="shrink-0">
            View all categories
          </Button>
        </div>

        <div className="mt-12">
          <CategoryCarousel categories={featured} />
        </div>
      </div>
    </section>
  );
}
