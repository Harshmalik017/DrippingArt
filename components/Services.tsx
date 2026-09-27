import SectionHeading from "./ui/SectionHeading";
import { services, siteConfig } from "@/lib/site-config";
import { accentStyles } from "@/lib/accent-styles";

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
                className="clay clay-interactive group flex flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <span className={`inline-flex rounded-full px-3 py-1 font-body text-[11px] tracking-wide ${accent.chip} ${accent.icon}`}>
                    Custom
                  </span>
                  <h3 className="mt-4 font-display text-xl text-ink dark:text-cream">
                    {service.name}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink/70 dark:text-night-soft">
                    {service.description}
                  </p>
                </div>
                <span className="clay-sm mt-5 inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-2 font-body text-sm font-medium text-terracotta transition-transform group-hover:-translate-y-0.5 dark:text-coral">
                  Ask about this
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
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
