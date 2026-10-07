import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { CalendlyPopupLink } from "@/components/CalendlyPopupLink";
import { getAllMarketSlugs, getMarketBySlug } from "@/lib/markets";
import { faqJsonLd, serviceJsonLd, withCanonical } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

type MarketPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllMarketSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: MarketPageProps): Promise<Metadata> {
  const { slug } = await params;
  const market = getMarketBySlug(slug);
  if (!market) return { title: "Market" };
  return withCanonical(`/markets/${market.slug}`, {
    title: market.h1,
    description: market.description,
    openGraph: {
      title: `${market.name} | Tax Residency Advisors`,
      description: market.description,
      url: `${SITE_URL}/markets/${market.slug}`,
    },
  });
}

export default async function MarketPage({ params }: MarketPageProps) {
  const { slug } = await params;
  const market = getMarketBySlug(slug);
  if (!market) notFound();

  const path = `/markets/${market.slug}`;

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          path,
          name: market.name,
          description: market.description,
        })}
      />
      <JsonLd data={faqJsonLd(market.faqs)} />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Markets", path: "/markets" },
            { name: market.name, path },
          ]}
        />
        <header>
          <h1 className="font-playfair text-4xl font-bold text-[var(--foreground)] sm:text-5xl">{market.h1}</h1>
        </header>
        <div className="mt-8 space-y-4">
          {market.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-[var(--foreground)]/90 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        {market.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">{section.heading}</h2>
            <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">{section.body}</p>
          </section>
        ))}
        <section className="mt-12">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">Questions I get on this market</h2>
          <dl className="mt-6 space-y-6">
            {market.faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="font-medium text-[var(--foreground)]">{faq.q}</dt>
                <dd className="mt-2 text-[var(--foreground)]/90">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="mt-12 border-t border-white/10 pt-8">
          <h2 className="font-playfair text-xl font-bold text-[var(--foreground)]">Next step</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/for-cpas" className="text-[var(--accent)] hover:underline">
                Refer a client to Dr. Jan Duffy
              </Link>
            </li>
            <li>
              <Link href="/services/ca-to-nv-relocation" className="text-[var(--accent)] hover:underline">
                CA-to-NV relocation
              </Link>
            </li>
            <li>
              <Link href="/office" className="text-[var(--accent)] hover:underline">
                Henderson office, 901 N Green Valley Pkwy #200d
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[var(--accent)] hover:underline">
                Contact
              </Link>{" "}
              or{" "}
              <CalendlyPopupLink className="text-[var(--accent)] hover:underline">schedule a call</CalendlyPopupLink>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
