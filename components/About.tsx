import SectionHeading from "./ui/SectionHeading";
import ClayCard from "./ui/ClayCard";
import { siteConfig } from "@/lib/site-config";

const steps = [
  {
    step: "01",
    title: "Share your idea",
    text: "Send a photo, a colour scheme or just a vibe over WhatsApp or Instagram.",
  },
  {
    step: "02",
    title: "Pick your palette",
    text: "Rashmi mixes a few pigment and gold-leaf combinations for you to choose from.",
  },
  {
    step: "03",
    title: "Pay a deposit",
    text: `A ${siteConfig.advancePaymentPercent}% advance confirms the order and starts production; the rest is due before delivery.`,
  },
  {
    step: "04",
    title: "Cure & deliver",
    text: "Each piece cures for several days before it's packed and shipped to you.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <ClayCard strong className="relative overflow-hidden p-8 sm:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-coral/20 blur-2xl" />
          <p className="font-display text-2xl leading-snug text-ink dark:text-cream sm:text-3xl">
            &ldquo;Every pour is a little different &mdash; that&apos;s the part
            I love most about resin.&rdquo;
          </p>
          <p className="mt-6 font-body text-sm uppercase tracking-[0.2em] text-terracotta dark:text-coral">
            Rashmi Tomar
          </p>
          <p className="font-body text-sm text-ink/60 dark:text-night-soft">Founder, Dripping Art</p>
        </ClayCard>

        <div>
          <SectionHeading
            kicker="The artist"
            title="A studio of one, pouring by hand in Ghaziabad"
            description="Rashmi Tomar started Dripping Art to turn resin into keepsakes people actually use — on their walls, their keys, their desks. Every order is mixed, coloured and finished by her, start to finish."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {steps.map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="font-display text-2xl text-gold-dark dark:text-gold-light">{item.step}</span>
                <div>
                  <h3 className="font-display text-lg text-ink dark:text-cream">{item.title}</h3>
                  <p className="mt-1 font-body text-sm text-ink/65 dark:text-night-soft">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
