import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, MailIcon, InstagramIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-ink dark:bg-night px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <span className="font-display text-2xl text-cream">
              D<span className="text-gold-light">|</span>A
            </span>
            <p className="mt-2 max-w-xs font-body text-sm text-cream/60">
              {siteConfig.tagline}, hand-poured by {siteConfig.owner} in {siteConfig.location}.
            </p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dripping Art on Instagram"
              className="clay-interactive mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 hover:text-gold-light"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 font-body text-sm text-cream/70 sm:flex sm:gap-14">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.15em] text-cream/40">Explore</p>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-gold-light">Home</a></li>
                <li><a href="/categories" className="hover:text-gold-light">All Categories</a></li>
                <li><a href="/personalised" className="hover:text-gold-light">Personalised</a></li>
                <li><a href="/reviews" className="hover:text-gold-light">Reviews</a></li>
                <li><a href="/#contact" className="hover:text-gold-light">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.15em] text-cream/40">Contact</p>
              <ul className="space-y-2">
                <li>
                  <a href={`tel:+91${siteConfig.phone}`} className="inline-flex items-center gap-1.5 hover:text-gold-light">
                    <PhoneIcon className="h-3.5 w-3.5" />
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 hover:text-gold-light">
                    <MailIcon className="h-3.5 w-3.5" />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold-light">
                    <InstagramIcon className="h-3.5 w-3.5" />
                    {siteConfig.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-3 border-t border-cream/10 pt-6 font-body text-xs text-cream/45 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms-and-conditions" className="hover:text-gold-light">
              Terms &amp; Conditions
            </Link>
            <span className="text-cream/20">|</span>
            <Link href="/privacy-policy" className="hover:text-gold-light">
              Privacy Policy
            </Link>
          </div>
        </div>
        <p className="mt-3 text-center font-body text-xs text-cream/45">
          © 2026 Developer Details (Harsh Maik). All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
