import Image from "next/image";
import Button from "./ui/Button";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-drip-gradient dark:opacity-40" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-rise-in [animation-delay:100ms] opacity-0">
          <p className="mb-5 font-body text-sm text-terracotta dark:text-coral">
            {siteConfig.tagline} &middot; {siteConfig.location}
          </p>
          <h1 className="font-display text-5xl leading-[1.08] text-ink text-balance dark:text-cream sm:text-6xl lg:text-7xl">
            Resin, poured
            <br />
            around the moments
            <br />
            you want to keep.
          </h1>
          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-ink/70 dark:text-night-soft">
            Dripping Art is Rashmi Tomar&apos;s one-woman studio, hand-pouring
            wall clocks, keychains, frames, wedding mala preservation and more
            &mdash; each piece mixed, coloured and cured to order in Ghaziabad.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={siteConfig.orderNowUrl} external variant="primary">
              Order Now
            </Button>
            <Button href="#services" variant="secondary">
              Explore services
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3 font-body text-sm text-ink/60 dark:text-night-soft/80">
            <span className="inline-block h-px w-10 bg-ink/25 dark:bg-cream/25" />
            by {siteConfig.owner} &nbsp;&middot;&nbsp; {siteConfig.instagramHandle}
          </div>
        </div>

        <div className="relative mx-auto h-80 w-80 animate-rise-in opacity-0 [animation-delay:300ms] sm:h-96 sm:w-96">
          <div className="absolute inset-0 rounded-full border border-terracotta/25 dark:border-coral/20" />
          <div className="absolute inset-6 rounded-full border border-gold/40 dark:border-gold/25" />

          <div className="clay-strong absolute inset-10 overflow-hidden rounded-blob">
            <Image
              src="/images/hero-section-image.jpg"
              alt="Dripping Art resin artwork on display"
              fill
              priority
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 384px, 320px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-transparent to-gold/10 dark:from-coral/5 dark:to-gold/5" />
          </div>

          <span className="absolute bottom-2 left-[38%] h-3 w-3 animate-drip rounded-full bg-terracotta/70 [animation-delay:900ms]" />
          <span className="absolute bottom-0 left-[58%] h-2.5 w-2.5 animate-drip rounded-full bg-gold/70 [animation-delay:1100ms]" />
        </div>
      </div>
    </section>
  );
}
