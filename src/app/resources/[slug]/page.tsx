import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, withCanonical } from "@/lib/schema";
import { getResourceBySlug, getAllResourceSlugs } from "@/lib/resources";
import { CalendlyPopupLink } from "@/components/CalendlyPopupLink";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllResourceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceBySlug(slug);
  if (!article) return { title: "Not Found" };
  return withCanonical(`/resources/${article.slug}`, {
    title: article.title,
    description: article.description,
    openGraph: {
      title: `${article.title} | Tax Residency Advisors`,
      description: article.description,
      url: `${SITE_URL}/resources/${article.slug}`,
    },
  });
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getResourceBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          path: `/resources/${article.slug}`,
          headline: article.title,
          description: article.description,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
        })}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <header className="mb-12">
          <h1 className="font-playfair text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">{article.description}</p>
          <p className="mt-2 text-sm text-[var(--muted)]">Last updated: {article.dateModified}</p>
        </header>
        <div className="space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">
                {section.heading}
              </h2>
              <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
        <section className="mt-16 border-t border-white/10 pt-10" aria-label="Related">
          <h2 className="font-playfair text-xl font-bold text-[var(--foreground)]">Related</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/for-cpas" className="text-[var(--accent)] hover:underline">
                For CPAs: refer a client to our Nevada real estate expert
              </Link>
            </li>
            <li>
              <Link href="/services/tax-residency-planning" className="text-[var(--accent)] hover:underline">
                Tax residency planning
              </Link>
            </li>
            <li>
              <Link href="/services/ca-to-nv-relocation" className="text-[var(--accent)] hover:underline">
                CA-to-NV relocation
              </Link>
            </li>
            <li>
              <Link href="/nevada-guide" className="text-[var(--accent)] hover:underline">
                Nevada relocation guide
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[var(--accent)] hover:underline">
                Contact Dr. Jan Duffy
              </Link>
              {" "}
              or <CalendlyPopupLink className="text-[var(--accent)] hover:underline">schedule a call</CalendlyPopupLink>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
