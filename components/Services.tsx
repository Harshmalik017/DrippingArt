import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import { services, siteConfig } from "@/lib/site-config";
import { accentStyles } from "@/lib/accent-styles";

const serviceImages: Record<string, { src: string; alt: string }> = {
  "wedding-mala-preservation": {
    src: "/images/wedding-mala-preservation.jpg",
    alt: "Wedding mala preservation resin keepsake",
  },
  "bridal-bouquet-preservation": {
    src: "/images/bridal-bouquet-preservation.jpg",
    alt: "Bridal bouquet preservation resin keepsake",
  },
  "baby-milestone-keepsakes": {
    src: "/images/baby-milestone-keepsakes.jpg",
    alt: "Baby milestone keepsake resin piece",
  },
  "memorial-keepsakes": {
    src: "/images/memorial-keepsakes.jpg",
    alt: "Memorial keepsake resin piece",
  },
  "corporate-bulk-gifting": {
    src: "/images/corporate-bulk-gifting.jpg",
    alt: "Corporate and bulk gifting resin pieces",
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-cream-deep/60 px-4 py-20 dark:bg-night-surface/60 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Beyond the shelf"
          title="Preservation & custom services"
          description="Have something you'd rather keep than pack away? These are made-to-order, built around what you bring us."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const accent = accentStyles[service.accent];
            const message = encodeURIComponent(
              `Hi Rashmi! I'd like to ask about ${service.name}.`
            );
            return (
              <a
                key={service.slug}
                href={`https://wa.me/91${siteConfig.phone}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="clay clay-interactive group flex flex-col overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={serviceImages[service.slug].src}
                    alt={serviceImages[service.slug].alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/30 via-transparent to-transparent dark:from-night/45" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-ink dark:text-cream">
                    {service.name}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink/70 dark:text-night-soft">
                    {service.description}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <span className="clay-sm inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-2 font-body text-sm font-medium text-terracotta transition-transform group-hover:-translate-y-0.5 dark:text-coral">
                    Ask about this
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </a>
            );
          })}

          <div className="relative flex flex-col justify-center overflow-hidden rounded-clay bg-coral px-6 py-7 text-night shadow-[var(--clay-shadow-lg)] ring-1 ring-white/20 dark:bg-coral-dark dark:text-night">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_55%)]" />
            <p className="relative font-display text-lg text-night">
              Have a different keepsake in mind?
            </p>
            <p className="relative mt-2 font-body text-sm text-night/80">
              If it can be set in resin, it&apos;s worth asking &mdash; message Rashmi
              directly to talk through it.
            </p>
          </div>
        </div>

        <p className="mt-8 font-body text-sm text-ink/55 dark:text-night-soft/80">
          Note: custom and preservation pieces need a {siteConfig.advancePaymentPercent}% advance
          to begin production — see the FAQ below for how ordering works.
        </p>
      </div>
    </section>
  );
}
