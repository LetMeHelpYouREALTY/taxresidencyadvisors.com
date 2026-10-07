import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { CalendlyPopupLink } from "@/components/CalendlyPopupLink";
import { faqJsonLd, withCanonical } from "@/lib/schema";
import { MARKETS } from "@/lib/markets";
import {
  EMAIL,
  HOURS_DISPLAY,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  MAPS_REVIEWS_URL,
  NAP,
  NAP_CITY_LINE,
  NAP_SINGLE_LINE,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_URL,
} from "@/lib/site";

const OFFICE_FAQS = [
  {
    q: "Where is the Tax Residency Advisors office?",
    a: "901 N Green Valley Pkwy #200d, Henderson, NV 89074. The suite is 200d on North Green Valley Parkway.",
  },
  {
    q: "What are the office hours?",
    a: "Monday through Sunday, 8:00 am to 8:00 pm.",
  },
  {
    q: "How do I reach Dr. Jan Duffy?",
    a: "Call 702-222-1964, email info@taxresidencyadvisors.com, or book a time on the contact page. Nevada license S.0197614.LLC.",
  },
];

export const metadata: Metadata = withCanonical("/office", {
  title: "Henderson Office | 901 N Green Valley Pkwy #200d",
  description:
    "Tax Residency Advisors office: 901 N Green Valley Pkwy #200d, Henderson, NV 89074. Monday–Sunday, 8:00 am to 8:00 pm. Call Dr. Jan Duffy at 702-222-1964.",
  openGraph: {
    title: "Henderson Office | Tax Residency Advisors",
    description: `Visit ${NAP_SINGLE_LINE}. Hours: ${HOURS_DISPLAY}.`,
    url: `${SITE_URL}/office`,
  },
});

export default function OfficePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(OFFICE_FAQS)} />
      <section className="hero-gradient-mesh px-4 pt-16 pb-12 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={[{ name: "Henderson Office", path: "/office" }]} />
          <h1 className="font-playfair text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
            Henderson Office on Green Valley Parkway
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)]">
            I meet CPA-referred clients at {NAP_SINGLE_LINE}. Hours are {HOURS_DISPLAY}.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-[48px] items-center rounded bg-[var(--accent)] px-5 py-2.5 font-medium text-[#0F1A2E] hover:opacity-90"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center rounded border border-white/30 px-5 py-2.5 font-medium text-[var(--foreground)] hover:bg-white/5"
            >
              Directions
            </a>
            <a
              href={MAPS_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center rounded border border-white/30 px-5 py-2.5 font-medium text-[var(--foreground)] hover:bg-white/5"
            >
              View Google Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">Name, address, and phone</h2>
            <address className="mt-4 text-[var(--foreground)] not-italic">
              <span className="block font-medium">{NAP.name}</span>
              <span className="mt-2 block">Dr. Jan Duffy</span>
              <span className="block">Berkshire Hathaway HomeServices Nevada Properties</span>
              <span className="block">NV License S.0197614.LLC</span>
              <span className="mt-2 block">{NAP.streetAddress}</span>
              <span className="block">{NAP_CITY_LINE}</span>
            </address>
            <p className="mt-4 text-[var(--foreground)]">Hours: {HOURS_DISPLAY}</p>
            <p className="mt-2">
              <a href={PHONE_HREF} className="text-[var(--accent)] hover:underline">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${EMAIL}`} className="text-[var(--accent)] hover:underline">
                {EMAIL}
              </a>
            </p>
            <p className="mt-6 text-[var(--foreground)]/90">
              The suite is 200d. The building is on North Green Valley Parkway, along the 215 corridor in Henderson.
            </p>
            <p className="mt-4 text-[var(--foreground)]/90">
              CPAs: use the{" "}
              <Link href="/for-cpas" className="text-[var(--accent)] hover:underline">
                referral page
              </Link>{" "}
              or{" "}
              <CalendlyPopupLink className="text-[var(--accent)] hover:underline">
                schedule a call
              </CalendlyPopupLink>
              . Clients can also use the{" "}
              <Link href="/contact" className="text-[var(--accent)] hover:underline">
                contact form
              </Link>
              .
            </p>
          </div>
          <iframe
            title={`Map of ${NAP.name}, ${NAP_SINGLE_LINE}`}
            src={MAPS_EMBED_URL}
            className="h-80 w-full rounded-lg border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">What I handle from this office</h2>
          <ul className="mt-6 space-y-3">
            <li>
              <Link href="/services/tax-residency-planning" className="text-[var(--accent)] hover:underline">
                Tax residency planning
              </Link>
            </li>
            <li>
              <Link href="/services/ca-to-nv-relocation" className="text-[var(--accent)] hover:underline">
                California-to-Nevada relocation
              </Link>
            </li>
            <li>
              <Link href="/services/multi-state-advisory" className="text-[var(--accent)] hover:underline">
                Multi-state advisory
              </Link>
            </li>
            <li>
              <Link href="/services/family-office-consulting" className="text-[var(--accent)] hover:underline">
                Family office real estate consulting
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">Markets I cover from Henderson</h2>
          <ul className="mt-6 space-y-3">
            {MARKETS.map((market) => (
              <li key={market.slug}>
                <Link href={`/markets/${market.slug}`} className="text-[var(--accent)] hover:underline">
                  {market.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">Office questions</h2>
          <dl className="mt-8 space-y-6">
            {OFFICE_FAQS.map((faq) => (
              <div key={faq.q}>
                <dt className="font-medium text-[var(--foreground)]">{faq.q}</dt>
                <dd className="mt-2 text-[var(--foreground)]/90">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
