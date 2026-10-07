import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { withCanonical } from "@/lib/schema";
import { RESOURCES } from "@/lib/resources";

export const metadata: Metadata = withCanonical("/resources", {
  title: "Resources",
  description:
    "Guides and checklists for CPAs and clients: Nevada domicile checklist, year-end relocation timeline, and tax-residency real estate planning. By Dr. Jan Duffy, Tax Residency Advisors.",
  openGraph: {
    title: "Resources | Tax Residency Advisors",
    description: "Nevada domicile and relocation guides for CPAs and clients. Tax Residency Advisors.",
    url: `${SITE_URL}/resources`,
  },
});

export default function ResourcesPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <header className="mb-12">
        <h1 className="font-playfair text-4xl font-bold text-[var(--foreground)] sm:text-5xl">Resources</h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Guides and checklists for CPAs and clients on Nevada domicile, year-end relocation, and tax-residency real estate. By Dr. Jan Duffy.
        </p>
      </header>
      <ul className="space-y-8">
        {RESOURCES.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/resources/${article.slug}`}
              className="block rounded-lg border border-white/10 bg-white/5 p-6 transition hover:border-[var(--accent)]/30"
            >
              <h2 className="font-playfair text-xl font-semibold text-[var(--foreground)] hover:text-[var(--accent)]">
                {article.title}
              </h2>
              <p className="mt-2 text-[var(--foreground)]/90">{article.description}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">Last updated: {article.dateModified}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
