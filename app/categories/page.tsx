import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryFilterGrid from "@/components/CategoryFilterGrid";
import { categories, allCategoryTags } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "All Categories | Dripping Art",
  description:
    "Browse every resin art category from Dripping Art — wall clocks, keychains, photo frames, nameplates, coasters and jewellery trays — and filter by what you need.",
};

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-cream dark:bg-night">
      <Navbar />
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="Browse"
            title="All categories"
            description="Filter by what you're looking for — every piece here can still be personalised in colour, size and detail."
          />
          <div className="mt-10">
            <CategoryFilterGrid categories={categories} tags={allCategoryTags} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
