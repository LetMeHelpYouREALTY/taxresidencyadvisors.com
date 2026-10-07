import type { Metadata } from "next";
import Link from "next/link";
import {
  SITE_URL,
  EMAIL,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  MAPS_REVIEWS_URL,
  HOURS_DISPLAY,
  NAP,
  NAP_CITY_LINE,
  NAP_SINGLE_LINE,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";
import { withCanonical } from "@/lib/schema";
import { ContactPageForm } from "@/components/ContactPageForm";
import { CalendlyPopupLink } from "@/components/CalendlyPopupLink";
import { CalendlyInlineWidget } from "@/components/CalendlyInlineWidget";

export const metadata: Metadata = withCanonical("/contact", {
  title: "Contact",
  description:
    `Schedule a consultation with Dr. Jan Duffy at ${NAP_SINGLE_LINE}. CPAs and tax professionals: refer a client. Call ${PHONE_DISPLAY}.`,
  openGraph: {
    title: "Contact | Tax Residency Advisors",
    url: `${SITE_URL}/contact`,
  },
});

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient-mesh px-4 pt-16 pb-12 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl font-bold text-[var(--foreground)] sm:text-5xl">Contact</h1>
          <p className="mt-6 text-lg text-[var(--muted)]">
            Schedule a call with Dr. Jan below, or refer a client and we&apos;ll respond within 24 hours.
          </p>
          <CalendlyPopupLink
            className="mt-4 inline-block rounded bg-[var(--accent)] px-5 py-2.5 font-medium text-[#0F1A2E] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          >
            Schedule a call with Dr. Jan
          </CalendlyPopupLink>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-playfair text-2xl font-semibold text-[var(--foreground)]">Book a time</h2>
          <p className="mt-2 text-[var(--muted)]">Choose a slot that works for you. Or send a message or call below.</p>
          <div className="mt-6">
            <CalendlyInlineWidget />
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-playfair text-xl font-semibold text-[var(--foreground)]">Or send a message</h2>
            <ContactPageForm />
          </div>
          <aside className="mt-12 lg:mt-0">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h2 className="font-playfair text-lg font-semibold text-[var(--foreground)]">Dr. Jan Duffy</h2>
              <p className="mt-1 text-sm text-[var(--accent)]">Las Vegas Real Estate Expert</p>
              <p className="mt-4 text-sm text-[var(--foreground)]">Berkshire Hathaway HomeServices Nevada Properties</p>
              <p className="text-sm text-[var(--muted)]">NV License: S.0197614.LLC</p>
              <address className="mt-4 text-sm not-italic text-[var(--foreground)]">
                <span className="block">{NAP.name}</span>
                <span className="block">{NAP.streetAddress}</span>
                <span className="block">{NAP_CITY_LINE}</span>
              </address>
              <p className="mt-4 text-sm text-[var(--foreground)]">Hours: {HOURS_DISPLAY}</p>
              <a href={PHONE_HREF} className="mt-4 block text-[var(--foreground)] hover:text-[var(--accent)]">Call {PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`} className="block text-[var(--foreground)] hover:text-[var(--accent)]">{EMAIL}</a>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a href={MAPS_DIRECTIONS_URL} className="text-[var(--accent)] hover:underline" target="_blank" rel="noopener noreferrer">Directions</a>
                <a href={MAPS_REVIEWS_URL} className="text-[var(--accent)] hover:underline" target="_blank" rel="noopener noreferrer">View Google Reviews</a>
              </div>
              <iframe
                title={`Map of ${NAP.name}, ${NAP_SINGLE_LINE}`}
                src={MAPS_EMBED_URL}
                className="mt-6 h-64 w-full rounded-lg border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="mt-6 text-sm text-[var(--muted)]">
                <Link href="/office" className="text-[var(--accent)] hover:underline">Full Henderson office page</Link>
                {" "}· Serving Las Vegas, Henderson, Summerlin, and surrounding areas
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
