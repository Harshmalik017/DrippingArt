import SectionHeading from "./ui/SectionHeading";
import ClayCard from "./ui/ClayCard";
import Button from "./ui/Button";
import { PhoneIcon, InstagramIcon } from "./Icons";
import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-20 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-drip-gradient opacity-60 dark:opacity-25" />
      <div className="relative mx-auto max-w-6xl">
        <ClayCard strong className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              kicker="Get in touch"
              title="Let's design your next piece"
              description="Message on WhatsApp for the fastest reply, or reach out over Instagram and email."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={siteConfig.orderNowUrl} external variant="primary">
                Order Now
              </Button>
              <Button href={`tel:+91${siteConfig.phone}`} variant="secondary">
                <PhoneIcon className="h-4 w-4" />
                Call Now
              </Button>
              <Button href={siteConfig.instagramUrl} external variant="secondary">
                <InstagramIcon className="h-4 w-4" />
                Follow {siteConfig.instagramHandle}
              </Button>
            </div>
          </div>

          <dl className="space-y-5 font-body text-sm">
            <div className="flex items-start justify-between gap-4 border-b border-ink/10 pb-4 dark:border-cream/10">
              <dt className="text-ink/50 dark:text-night-soft/80">Phone</dt>
              <dd>
                <a href={`tel:+91${siteConfig.phone}`} className="text-ink hover:text-terracotta dark:text-cream dark:hover:text-coral">
                  {siteConfig.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4 border-b border-ink/10 pb-4 dark:border-cream/10">
              <dt className="text-ink/50 dark:text-night-soft/80">Email</dt>
              <dd>
                <a href={`mailto:${siteConfig.email}`} className="text-ink hover:text-terracotta dark:text-cream dark:hover:text-coral">
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4 border-b border-ink/10 pb-4 dark:border-cream/10">
              <dt className="text-ink/50 dark:text-night-soft/80">Instagram</dt>
              <dd>
                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-terracotta dark:text-cream dark:hover:text-coral">
                  {siteConfig.instagramHandle}
                </a>
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-ink/50 dark:text-night-soft/80">Studio</dt>
              <dd className="text-right text-ink dark:text-cream">{siteConfig.location}</dd>
            </div>
          </dl>
        </ClayCard>
      </div>
    </section>
  );
}
