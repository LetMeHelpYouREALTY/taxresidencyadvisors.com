import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd, withCanonical } from "@/lib/schema";
import { CTA } from "@/components/CTA";
import { CalendlyPopupLink } from "@/components/CalendlyPopupLink";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service" };
  return withCanonical(`/services/${slug}`, {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Tax Residency Advisors`,
      url: `${SITE_URL}/services/${slug}`,
    },
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          path: `/services/${service.slug}`,
          name: service.title,
          description: service.shortDescription,
        })}
      />

      <section className="hero-gradient-mesh px-4 pt-16 pb-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <span className="text-sm uppercase tracking-widest text-[var(--accent)]">{service.num}</span>
          <h1 className="mt-2 font-playfair text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)]">{service.shortDescription}</p>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-invert max-w-none">
            {service.longDescription.map((para, i) => (
              <p key={i} className="text-[var(--foreground)]/90 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">Who This Is For</h2>
          <ul className="mt-6 list-inside list-disc space-y-2 text-[var(--foreground)]/90">
            {service.whoIsFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {service.relatedCaseStudy && (
            <p className="mt-6 text-[var(--muted)]">
              Related: <Link href="/case-studies" className="text-[var(--accent)] hover:underline">{service.relatedCaseStudy}</Link>
            </p>
          )}
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-wrap gap-4">
          <CalendlyPopupLink
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded bg-[var(--accent)] px-5 py-2.5 font-medium text-[#0F1A2E] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          >
            Schedule a Consultation
          </CalendlyPopupLink>
          <CTA variant="secondary" href="/for-cpas">
            Have your CPA refer you
          </CTA>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-[var(--muted)]">
          Are you a CPA? <Link href="/for-cpas" className="text-[var(--accent)] hover:underline">Learn about our referral program →</Link>
        </p>
      </section>
    </>
  );
}
