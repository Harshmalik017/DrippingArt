import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClayCard from "@/components/ui/ClayCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions | Dripping Art",
  description: "The terms that apply when you order a piece from Dripping Art.",
};

const sections = [
  {
    title: "Orders & advance payment",
    body: `Custom and personalised pieces require a ${siteConfig.advancePaymentPercent}% advance payment before work begins; the remaining balance is due before the piece is shipped or handed over. Ready-made pieces are paid for in full at the time of order. Orders are confirmed only once the advance is received.`,
  },
  {
    title: "Timelines",
    body: `Most pieces take 5–10 days to complete once the design and advance payment are confirmed, since resin needs several days to cure between layers. Preservation services (wedding mala, bouquet, milestone items) may take longer depending on the piece — Rashmi will confirm a timeline with you before starting.`,
  },
  {
    title: "Preservation items you send us",
    body: `For services like wedding mala, bouquet or milestone preservation, you are responsible for safely packing and shipping the item to us. While every care is taken while handling and pouring, Dripping Art is not liable for damage that occurs in transit to us before the item is received.`,
  },
  {
    title: "Customisation & natural variation",
    body: `Resin is hand-poured, so colour, marbling and bubble patterns will vary slightly from any reference photo or previous piece — this is part of the medium, not a defect. Rashmi will confirm your colour palette with you before pouring, but exact colour matching (e.g. to a paint swatch) cannot be guaranteed.`,
  },
  {
    title: "Cancellations & refunds",
    body: `Because custom pieces are made specifically for you, the advance payment is non-refundable once production has started. If you'd like to cancel before production begins, message us as soon as possible and we'll discuss a refund or credit on a case-by-case basis.`,
  },
  {
    title: "Shipping & damage in transit",
    body: `Pieces are carefully packed and shipped pan-India. If a piece arrives damaged, contact us within 48 hours of delivery with photos so we can help resolve it — replacement or repair is handled case by case depending on the damage.`,
  },
  {
    title: "Use of photos",
    body: `Photos of finished pieces may be shared on our Instagram (@dripping_art) for portfolio purposes unless you ask us not to at the time of ordering.`,
  },
  {
    title: "Contact",
    body: `Questions about these terms can be sent to ${siteConfig.email} or ${siteConfig.phoneDisplay}.`,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-cream dark:bg-night">
      <Navbar />
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            kicker="Legal"
            title="Terms & Conditions"
            description={`Last updated: ${new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}. These terms apply whenever you order a piece from ${siteConfig.name}.`}
          />

          <div className="mt-10 space-y-5">
            {sections.map((section) => (
              <ClayCard key={section.title} className="p-6 sm:p-7">
                <h2 className="font-display text-xl text-ink dark:text-cream">{section.title}</h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/70 dark:text-night-soft">
                  {section.body}
                </p>
              </ClayCard>
            ))}
          </div>

          <p className="mt-8 font-body text-xs text-ink/45 dark:text-night-soft/70">
            This is a general terms template for a small personal business and isn&apos;t a
            substitute for legal advice — {siteConfig.owner} can update it as the business grows.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
