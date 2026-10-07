import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { MARKETS } from "@/lib/markets";
import { itemListJsonLd, withCanonical } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = withCanonical("/markets", {
  title: "Las Vegas and Henderson Markets | Dr. Jan Duffy",
  description:
    "Summerlin, Henderson, Green Valley, 55+ communities, Strip high-rises, new construction, Skye Canyon, and Centennial Hills. Dr. Jan Duffy, 702-222-1964.",
  openGraph: {
    title: "Markets | Tax Residency Advisors",
    description: "Where I place CPA-referred clients who are establishing a Nevada primary residence.",
    url: `${SITE_URL}/markets`,
  },
});

export default function MarketsPage() {
  return (
    <>
      <JsonLd
        data={itemListJsonLd(
          MARKETS.map((market) => ({
            name: market.name,
            path: `/markets/${market.slug}`,
            description: market.description,
          })),
        )}
      />
      <section className="hero-gradient-mesh px-4 pt-16 pb-16 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={[{ name: "Markets", path: "/markets" }]} />
          <h1 className="font-playfair text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
            Markets I Place Clients In
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)]">
            I cover these six areas for CPA-referred moves into a Nevada primary residence. My office is in Henderson.
          </p>
        </div>
      </section>
      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {MARKETS.map((market) => (
            <Link
              key={market.slug}
              href={`/markets/${market.slug}`}
              className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-[var(--accent)]/30"
            >
              <h2 className="font-playfair text-2xl font-semibold text-[var(--foreground)]">{market.name}</h2>
              <p className="mt-3 text-[var(--foreground)]/90">{market.paragraphs[0]}</p>
              <span className="mt-4 inline-block text-sm text-[var(--accent)]">View this market</span>
            </Link>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-[var(--foreground)]/90">
          CPAs can{" "}
          <Link href="/for-cpas" className="text-[var(--accent)] hover:underline">
            refer a client
          </Link>{" "}
          from any of these markets. The{" "}
          <Link href="/nevada-guide" className="text-[var(--accent)] hover:underline">
            Nevada relocation guide
          </Link>{" "}
          covers domicile steps. The{" "}
          <Link href="/office" className="text-[var(--accent)] hover:underline">
            Henderson office
          </Link>{" "}
          is at 901 N Green Valley Pkwy #200d.
        </p>
      </section>
    </>
  );
}
