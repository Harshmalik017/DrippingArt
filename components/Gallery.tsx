import SectionHeading from "./ui/SectionHeading";
import ProductImage from "./ProductImage";
import { featuredProducts } from "@/lib/products";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream-deep/60 px-4 py-20 dark:bg-night-surface/60 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Recent pours"
          title="A few pieces from the studio"
          description="Add your own photos to public/images — this grid picks them up automatically and shows a placeholder until then."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              className="clay clay-interactive group relative aspect-square overflow-hidden"
            >
              <ProductImage src={product.image} alt={product.name} accent={product.accent} />
              <div className="absolute inset-x-0 bottom-0 bg-ink/80 p-3 sm:p-4">
                <p className="font-body text-[11px] uppercase tracking-[0.15em] text-cream/70">
                  {product.category}
                </p>
                <p className="font-display text-base text-cream sm:text-lg">{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
