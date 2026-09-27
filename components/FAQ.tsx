import SectionHeading from "./ui/SectionHeading";
import FAQAccordion from "./FAQAccordion";
import { faqs } from "@/lib/site-config";

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream-deep/60 px-4 py-20 dark:bg-night-surface/60 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          align="center"
          kicker="Good to know"
          title="Ordering, custom work & FAQs"
          description="How advance payment, timelines and shipping work for custom pieces."
        />
        <div className="mt-10">
          <FAQAccordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
