import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { withCanonical } from "@/lib/schema";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = withCanonical("/services", {
  title: "Services | Tax Residency & Real Estate Consulting",
  description:
    "Tax residency planning, multi-state advisory, family office RE consulting, and CA-to-NV relocation. Tax Residency Advisors and Dr. Jan Duffy serve CPAs, family offices, and relocating families.",
  openGraph: {
    title: "Services | Tax Residency Advisors",
    url: `${SITE_URL}/services`,
  },
});

export default function ServicesPage() {
  return (
    <>
      <section className="hero-gradient-mesh px-4 pt-16 pb-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl font-bold text-[var(--foreground)] sm:text-5xl">Our Services</h1>
          <p className="mt-6 text-lg text-[var(--muted)]">
            From tax residency planning to family office consulting — we bring tax strategy, real estate expertise, and institutional advisory under one roof.
          </p>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-lg border border-white/10 bg-white/5 p-8 transition hover:border-[var(--accent)]/30"
              >
                <span className="text-4xl font-bold text-[var(--accent)]/80">{service.num}</span>
                <h2 className="mt-4 font-playfair text-2xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)]">
                  {service.title}
                </h2>
                <p className="mt-4 flex-1 text-[var(--foreground)]/90">{service.shortDescription}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm text-[var(--accent)] group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[var(--muted)]">
            Are you a CPA? <Link href="/for-cpas" className="text-[var(--accent)] hover:underline">Learn about our referral program</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
