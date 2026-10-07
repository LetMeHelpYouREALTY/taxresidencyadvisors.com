import Link from "next/link";
import { CalendlyPopupLink } from "@/components/CalendlyPopupLink";
import { EMAIL, NAP, NAP_CITY_LINE, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0F1A2E] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Tax Residency Advisors */}
          <div>
            <h4 className="font-playfair text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
              Tax Residency Advisors
            </h4>
            <p className="mt-3 text-sm text-[var(--foreground)]">
              Dr. Jan Duffy, Nevada Market Expert
            </p>
            <address className="mt-2 text-sm not-italic text-[var(--foreground)]">
              <span className="block">{NAP.streetAddress}</span>
              <span className="block">{NAP_CITY_LINE}</span>
            </address>
            <a href={PHONE_HREF} className="mt-2 block text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="block text-sm text-[var(--foreground)] hover:text-[var(--accent)]"
            >
              {EMAIL}
            </a>
          </div>

          {/* Column 2 — Our Brokerages */}
          <div>
            <h4 className="font-playfair text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
              Our Brokerages
            </h4>
            <p className="mt-3 text-sm text-[var(--foreground)]">
              NV: Dr. Jan Duffy | BHHS Nevada Properties | S.0197614.LLC
            </p>
            <p className="mt-2 text-sm text-[var(--foreground)]">
              CA: KLB Consultants | Kelly Lynn Boyle, Broker | Dr. Eugene Boyle, Agent
            </p>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="font-playfair text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  About Dr. Jan
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/for-cpas" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  For CPAs & Advisors
                </Link>
              </li>
              <li>
                <Link href="/nevada-guide" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Nevada Relocation Guide
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Markets We Serve + For Professionals */}
          <div>
            <h4 className="font-playfair text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
              Markets We Serve
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)]">
              <li>Summerlin West & The Ridges</li>
              <li>Henderson & Green Valley</li>
              <li>55+ Communities</li>
              <li>Luxury Strip High-Rises</li>
              <li>New Construction</li>
              <li>Skye Canyon & Centennial Hills</li>
            </ul>
            <h4 className="font-playfair mt-6 text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">
              For Professionals
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/for-cpas" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  CPA Referral Program
                </Link>
              </li>
              <li>
                <Link href="/for-cpas" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Tax Preparer Resources
                </Link>
              </li>
              <li>
                <Link href="/for-cpas" className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Financial Advisor Partnerships
                </Link>
              </li>
              <li>
                <CalendlyPopupLink className="text-sm text-[var(--foreground)] hover:text-[var(--accent)]">
                  Schedule a Consultation
                </CalendlyPopupLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-8 text-center text-xs text-[var(--muted)]">
          <span>© 2026 Tax Residency Advisors</span>
          <p className="max-w-2xl mx-auto leading-relaxed">
            Nevada real estate services provided by Dr. Jan Duffy, NV License S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties. California real estate services provided by KLB Consultants, Kelly Lynn Boyle, CA Licensed Broker. Each brokerage is independently owned and operated. Equal Housing Opportunity.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/privacy" className="hover:text-[var(--accent)]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--accent)]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
