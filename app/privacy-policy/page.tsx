import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClayCard from "@/components/ui/ClayCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | Dripping Art",
  description: "How Dripping Art collects, uses and protects your information.",
};

const sections = [
  {
    title: "What we collect",
    body: `When you message us on WhatsApp, Instagram or email, or fill in details for a custom order, we may collect your name, phone number, email address, shipping address and any photos or items you share with us for a custom or preservation piece (such as a wedding mala or bouquet).`,
  },
  {
    title: "How we use it",
    body: `Your information is used only to discuss, create, package and ship your order, to respond to enquiries, and to occasionally share updates about Dripping Art if you've asked to hear from us. We do not sell or rent your personal information to third parties.`,
  },
  {
    title: "Photos & keepsakes",
    body: `Photos of finished pieces may be shared on our Instagram (@dripping_art) for portfolio purposes. Let us know at the time of ordering if you'd prefer your piece not be shared publicly, and we'll leave it out.`,
  },
  {
    title: "Payments",
    body: `Advance and balance payments for custom orders are currently collected directly (e.g. UPI/bank transfer) rather than through this website — this site does not process or store card details.`,
  },
  {
    title: "Cookies & analytics",
    body: `This website may use basic, privacy-respecting analytics to understand how visitors use the site (such as which pages are viewed). No personal data from these analytics is sold or shared.`,
  },
  {
    title: "Your choices",
    body: `You can ask us to delete your contact details or order history at any time by messaging us on WhatsApp or emailing ${siteConfig.email}. We'll action requests as soon as we reasonably can.`,
  },
  {
    title: "Contact",
    body: `Questions about this policy or your data can be sent to ${siteConfig.email} or ${siteConfig.phoneDisplay}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream dark:bg-night">
      <Navbar />
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            kicker="Legal"
            title="Privacy Policy"
            description={`Last updated: ${new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}. This policy covers how ${siteConfig.name} handles information shared with us by customers.`}
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
            This is a general policy template for a small personal business and isn&apos;t a
            substitute for legal advice — {siteConfig.owner} can update it as the business grows.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
