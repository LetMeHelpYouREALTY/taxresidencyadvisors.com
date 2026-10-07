import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { withCanonical } from "@/lib/schema";
import { CASE_STUDIES } from "@/lib/case-studies";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = withCanonical("/case-studies", {
  title: "Case Studies | Tax Residency & Nevada Real Estate",
  description:
    "How we help high-net-worth families and family offices: California executive relocations, family office portfolio optimization, tech founder residency planning, and multi-generational transitions.",
  openGraph: {
    title: "Case Studies | Tax Residency Advisors",
    url: `${SITE_URL}/case-studies`,
  },
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="hero-gradient-mesh px-4 pt-16 pb-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl font-bold text-[var(--foreground)] sm:text-5xl">Case Studies</h1>
          <p className="mt-6 text-lg text-[var(--muted)]">
            How we help high-net-worth families and family offices achieve tax-advantaged outcomes. Anonymized examples from real engagements.
          </p>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl space-y-16">
          {CASE_STUDIES.map((study) => (
            <article key={study.id} className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="font-playfair text-2xl font-bold text-[var(--accent)]">{study.title}</h2>
              <dl className="mt-8 grid gap-6 sm:grid-cols-1">
                <div>
                  <dt className="text-sm font-medium uppercase tracking-wider text-[var(--muted)]">Situation</dt>
                  <dd className="mt-2 text-[var(--foreground)]/90">{study.situation}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium uppercase tracking-wider text-[var(--muted)]">Challenge</dt>
                  <dd className="mt-2 text-[var(--foreground)]/90">{study.challenge}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium uppercase tracking-wider text-[var(--muted)]">Solution</dt>
                  <dd className="mt-2 text-[var(--foreground)]/90">{study.solution}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium uppercase tracking-wider text-[var(--muted)]">Result</dt>
                  <dd className="mt-2 text-[var(--foreground)]/90">{study.result}</dd>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <dt className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">CPA angle</dt>
                  <dd className="mt-2 text-[var(--foreground)]/90">{study.cpaAngle}</dd>
                </div>
              </dl>
              {study.serviceSlug && (
                <p className="mt-6 text-sm text-[var(--muted)]">
                  Related service: <Link href={`/services/${study.serviceSlug}`} className="text-[var(--accent)] hover:underline">View service</Link>
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[var(--foreground)]">Have a client with a similar situation?</p>
          <CTA variant="primary" href="/for-cpas" className="mt-4">
            Refer them to Dr. Jan →
          </CTA>
        </div>
      </section>
    </>
  );
}
