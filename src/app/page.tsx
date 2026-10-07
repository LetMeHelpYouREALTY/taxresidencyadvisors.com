import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, PHONE_E164, postalAddressJsonLd } from "@/lib/site";
import { CTA } from "@/components/CTA";
import { CalendlyPopupLink } from "@/components/CalendlyPopupLink";
import { StatBar } from "@/components/StatBar";
import { TestimonialCard } from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Dr. Jan Duffy",
  description:
    "Your client decided to move to Nevada. Dr. Jan Duffy is the Las Vegas real estate expert CPAs and tax advisors trust. 30+ years, 500+ families. Refer a client or start your relocation.",
  openGraph: {
    title: "Tax Residency Advisors",
    description: "The Las Vegas real estate expert CPAs trust for Nevada tax-residency relocations.",
    url: SITE_URL,
    siteName: "Tax Residency Advisors",
  },
};

const HOME_STATS = [
  { value: "30+", label: "Years" },
  { value: "500+", label: "Families" },
  { value: "$127M+", label: "in Sales" },
  { value: "CA + NV", label: "Markets" },
  { value: "Since 2005", label: "" },
];

const SERVICE_LINKS = [
  { href: "/services/tax-residency-planning", num: "01", title: "Tax Residency Planning" },
  { href: "/services/multi-state-advisory", num: "02", title: "Multi-State Advisory" },
  { href: "/services/family-office-consulting", num: "03", title: "Family Office RE Consulting" },
  { href: "/services/ca-to-nv-relocation", num: "04", title: "CA-to-NV Relocation" },
];

const AFFILIATIONS = [
  "Berkshire Hathaway HomeServices",
  "Nevada Association of Realtors",
  "California Association of Realtors",
  "Family Office Networks",
  "National Association of Realtors",
];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Tax Residency Advisors",
      description: "Tax residency planning and real estate investment consulting. Dr. Jan Duffy, Las Vegas real estate expert for CPA-referred relocations.",
      url: SITE_URL,
      telephone: PHONE_E164,
      address: postalAddressJsonLd(),
      areaServed: [{ "@type": "State", name: "California" }, { "@type": "State", name: "Nevada" }],
    },
    {
      "@type": "Person",
      name: "Dr. Jan Duffy",
      jobTitle: "Real Estate Agent",
      worksFor: { "@type": "Organization", name: "Berkshire Hathaway HomeServices Nevada Properties" },
      description: "Las Vegas real estate expert. 30+ years, 500+ families, $127M+ career sales. Nevada License S.0197614.LLC.",
      telephone: PHONE_E164,
      address: postalAddressJsonLd(),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      {/* Hero */}
      <section className="hero-gradient-mesh relative min-h-[85vh] flex flex-col justify-center px-4 pt-20 pb-16 sm:px-6">
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
            Your Client Decided to Move to Nevada. Now What?
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
            I&apos;m Dr. Jan Duffy — the Las Vegas real estate expert that CPAs and tax advisors trust when their clients make the tax-residency move. 30+ years. 500+ families. Every neighborhood. Every builder.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTA variant="primary" href="/for-cpas">
              CPA? Refer a Client →
            </CTA>
            <CTA variant="secondary" href="/nevada-guide">
              Moving to Nevada? Start Here →
            </CTA>
          </div>
        </div>
      </section>

      {/* Trust blocks */}
      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h2 className="font-playfair text-xl font-semibold text-[var(--accent)]">For CPAs & Tax Advisors</h2>
              <p className="mt-3 text-[var(--foreground)]/90">
                Your clients trust you with their tax strategy. Trust me with their real estate. White-glove service, confidential process, and I keep you in the loop every step.
              </p>
              <CTA variant="ghost" href="/for-cpas" className="mt-4">
                Learn About Our Referral Program
              </CTA>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h2 className="font-playfair text-xl font-semibold text-[var(--accent)]">For Clients Relocating to Nevada</h2>
              <p className="mt-3 text-[var(--foreground)]/90">
                Moving to Nevada is a big financial decision — and picking the right home in the right neighborhood matters as much as the tax savings. I&apos;ll show you every option.
              </p>
              <CTA variant="ghost" href="/nevada-guide" className="mt-4">
                Explore Nevada Communities
              </CTA>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h2 className="font-playfair text-xl font-semibold text-[var(--accent)]">For Family Offices & Investors</h2>
              <p className="mt-3 text-[var(--foreground)]/90">
                Institutional-grade real estate advisory for multi-state portfolios. Multifamily, new construction pipelines, and P3 partnerships.
              </p>
              <CalendlyPopupLink className="mt-4 inline-flex min-h-[48px] items-center justify-center gap-2 rounded px-0 py-2 font-medium text-[var(--accent)] hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]">
                Talk Strategy →
              </CalendlyPopupLink>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-t border-white/5 px-4 py-4 sm:px-6">
        <p className="mx-auto max-w-4xl text-center text-sm uppercase tracking-widest text-[var(--muted)]">
          Tax Residency Advisors — California &amp; Nevada Real Estate Strategy Since 2005
        </p>
      </section>
      <StatBar stats={HOME_STATS} />

      {/* Featured Services */}
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-playfair text-3xl font-bold text-[var(--foreground)] md:text-4xl">Our Services</h2>
          <p className="mt-2 max-w-2xl text-[var(--muted)]">
            Tax residency planning, multi-state advisory, family office consulting, and CA-to-NV relocation — all under one roof.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {SERVICE_LINKS.map(({ href, num, title }) => (
              <Link
                key={href}
                href={href}
                className="group flex rounded-lg border border-white/10 bg-white/5 p-6 transition hover:border-[var(--accent)]/30"
              >
                <span className="text-3xl font-bold text-[var(--accent)]/80">{num}</span>
                <div className="ml-4 flex-1">
                  <h3 className="font-playfair text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)]">{title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm text-[var(--muted)] group-hover:text-[var(--accent)]">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-playfair text-3xl font-bold text-[var(--foreground)]">What People Say</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <TestimonialCard
              quote="We've referred over a dozen clients to Dr. Jan for their Nevada relocations. She understands the tax timeline, gets the domicile documentation right, and our clients always close on time."
              attribution="— [Name withheld], CPA, Los Angeles"
            />
            <TestimonialCard
              quote="Dr. Jan didn't just find us a house — she understood why we were moving and made sure every detail supported our residency change. Our accountant was impressed."
              attribution="— [Name withheld], Tech Executive, relocated from San Jose to Summerlin"
            />
          </div>
        </div>
      </section>

      {/* Mini CPA banner */}
      <section className="bg-gradient-to-r from-[var(--accent)]/20 to-[var(--accent)]/10 px-4 py-12 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <p className="font-playfair text-xl font-semibold text-[var(--foreground)]">
            Are you a CPA or Tax Professional? Our referral program is built for you.
          </p>
          <CTA variant="primary" href="/for-cpas">
            Learn More →
          </CTA>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">Trusted By</h2>
          <p className="mt-2 max-w-xl text-[var(--muted)]">
            Our affiliations and partnerships reflect our commitment to professional standards and client success.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
            {AFFILIATIONS.map((name) => (
              <div
                key={name}
                className="min-w-[160px] rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-[var(--muted)]"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
