import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { CalendlyPopupLink } from "@/components/CalendlyPopupLink";

export const metadata: Metadata = {
  title: "The Complete Guide to Relocating from California to Nevada (2026)",
  description:
    "Everything your clients need to know about moving to Nevada: domicile, neighborhoods, new construction, timeline, and working with a CPA and real estate agent. By Dr. Jan Duffy.",
  openGraph: {
    title: "California to Nevada Relocation Guide (2026) | Tax Residency Advisors",
    url: `${SITE_URL}/nevada-guide`,
  },
};

const NEVADA_GUIDE_UPDATED = "2026-02-09";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Complete Guide to Relocating from California to Nevada (2026)",
  author: { "@type": "Person", name: "Dr. Jan Duffy" },
  description: "Everything your clients need to know about relocating from California to Nevada — domicile, neighborhoods, new construction, and timeline.",
  url: `${SITE_URL}/nevada-guide`,
  datePublished: "2026-01-01",
  dateModified: NEVADA_GUIDE_UPDATED,
};

export default function NevadaGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <header className="mb-16">
          <h1 className="font-playfair text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
            The Complete Guide to Relocating from California to Nevada (2026)
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)]">
            Everything your clients need to know — from a real estate expert who&apos;s guided 500+ families through the move.
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">Last updated: {NEVADA_GUIDE_UPDATED}</p>
        </header>

        <section id="why-nevada" className="mb-16">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">1. Why Nevada?</h2>
          <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">
            Nevada has no state income tax. No inheritance tax. No estate tax. For high earners leaving California, that can mean six or seven figures in annual savings. The state is business-friendly, and Las Vegas and Henderson offer a lower cost of living than most of coastal California while still providing world-class amenities, strong healthcare, and a growing job market.
          </p>
          <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">
            Relocators aren&apos;t just saving on taxes — they&apos;re often buying more home for less. California equity routinely converts to 30–50% more square footage or a better neighborhood in Nevada. Summerlin, Henderson, and the 55+ communities (Sun City, Del Webb, Heritage at Stonebridge) are built for exactly this kind of migration. I&apos;ve seen it for 30+ years.
          </p>
        </section>

        <section id="domicile" className="mb-16">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">2. Establishing Nevada Domicile</h2>
          <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">
            The California Franchise Tax Board (FTB) looks at where you live, where you work, where your family is, where you vote, and where you hold your driver&apos;s license and primary residence. A Nevada home purchase is one of the strongest pieces of evidence — but it has to be a true primary residence, not a vacation property. Closing date matters: many clients need to close by December 31 to support their first full tax year as Nevada residents.
          </p>
          <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">
            Documentation checklist: Nevada driver&apos;s license or ID, Nevada voter registration, Nevada primary residence (deed, mortgage, or lease), utility bills, bank and financial statements showing Nevada address, and a consistent timeline that matches your CPA&apos;s filing strategy. I work with CPAs on this every day — the real estate piece has to align with the tax piece. <Link href="/services/tax-residency-planning" className="text-[var(--accent)] hover:underline">Tax residency planning</Link> is what we do.
          </p>
        </section>

        <section id="neighborhoods" className="mb-16">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">3. Las Vegas Neighborhoods for Relocators</h2>
          <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">
            <strong>Summerlin</strong> is the gold standard for families and executives: master-planned, top schools, Red Rock Canyon at your back door. Summerlin West and The Ridges run from roughly $800K into the millions. Summerlin South has more entry points. <strong>Henderson</strong> and Green Valley offer similar quality with a slightly different vibe — more suburban, still excellent schools and amenities. <strong>Skye Canyon</strong> and <strong>Centennial Hills</strong> are popular for buyers who want newer construction and a bit more space.
          </p>
          <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">
            For 55+ buyers, <strong>Sun City Summerlin</strong>, <strong>Del Webb</strong> communities, and <strong>Heritage at Stonebridge</strong> are the go-tos. For luxury high-rise living, the Strip corridor has condos and penthouses with resort amenities. Every neighborhood has different tradeoffs — schools, commute to the airport or downtown, HOA fees, resale trajectory. I match clients to the right community based on lifestyle and budget. <Link href="/services/ca-to-nv-relocation" className="text-[var(--accent)] hover:underline">CA-to-NV relocation</Link> is where we put this into practice.
          </p>
        </section>

        <section id="new-construction" className="mb-16">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">4. New Construction Options</h2>
          <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">
            Century Communities, KB Home, Lennar, Pulte, and Toll Brothers all have active communities across the valley. New construction can mean move-in ready inventory or building from the ground up with a lot selection. Builder incentives (rate buydowns, closing cost credits) change by community and month — I track them so your client doesn&apos;t leave money on the table. Prices typically start in the $300s and go well into the millions for Toll Brothers and custom builds in The Ridges.
          </p>
          <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">
            Timeline matters: if your client needs to close by year-end, we look at quick-delivery inventory or resale. If they have 6–12 months, we can look at build-to-order. I have builder relationships that get my clients on priority lists and early access to new phases. <Link href="/contact" className="text-[var(--accent)] hover:underline">Talk to Dr. Jan</Link> when you&apos;re ready to explore.
          </p>
        </section>

        <section id="timeline" className="mb-16">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">5. The Timeline: How Long Does It Take?</h2>
          <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">
            From first search to closing, plan on 30–90 days for resale and 4–12 months for new construction, depending on the builder and lot. After closing, your client establishes domicile (license, voter registration, etc.) and their CPA files accordingly. The key is working backward from the tax-year deadline: if they need to be Nevada residents for the full 2026 tax year, they need to close and establish domicile in 2026. I&apos;ve never missed a year-end deadline for a CPA-referred client — we build in backup properties and stay on top of every contingency.
          </p>
        </section>

        <section id="cpa-and-agent" className="mb-16">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">6. Working with Your CPA and Real Estate Agent Together</h2>
          <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">
            The best outcomes happen when the CPA and the real estate agent are aligned. Your CPA sets the tax strategy and the timeline; I execute the real estate side and make sure the purchase supports the domicile narrative. I don&apos;t give tax advice — that&apos;s your CPA&apos;s lane. I do provide status updates so your CPA stays in the loop, and I coordinate on any documentation the client needs for their return or an audit. <Link href="/for-cpas" className="text-[var(--accent)] hover:underline">Have your CPA contact us</Link> — our referral program is built for this.
          </p>
        </section>

        <section id="mistakes" className="mb-16">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">7. Common Mistakes to Avoid</h2>
          <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">
            Keeping California ties too strong: a second home in Nevada while the primary remains in CA is a red flag for the FTB. The Nevada property should be the primary residence. Not documenting intent: voter registration, license, and bills should all point to Nevada. Buying the wrong type of property: a small condo that looks like a vacation pad can be harder to defend than a family-sized home that clearly functions as a primary residence. And waiting until the last minute — year-end rushes happen, but they&apos;re riskier. Start the search early so your client has options and time to close.
          </p>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">8. FAQ</h2>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="font-medium text-[var(--foreground)]">When should I start looking if I need to close by December 31?</dt>
              <dd className="mt-2 text-[var(--foreground)]/90">Ideally 60–90 days before your target close date. That gives time for search, negotiation, inspection, and any lender or title delays.</dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--foreground)]">Do I need to sell my California home first?</dt>
              <dd className="mt-2 text-[var(--foreground)]/90">Not necessarily. Many clients buy in Nevada first and sell in California after. We can coordinate with a CA agent (including our KLB team) for a simultaneous or sequential close.</dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--foreground)]">What if I'm referred by my CPA?</dt>
              <dd className="mt-2 text-[var(--foreground)]/90">Even better. I work with CPA-referred clients every day. I'll keep your CPA in the loop and make sure the real estate timeline supports your tax strategy.</dd>
            </div>
          </dl>
        </section>

        <section className="mb-16" aria-label="Related">
          <h2 className="font-playfair text-xl font-bold text-[var(--foreground)]">Related</h2>
          <ul className="mt-4 space-y-2">
            <li><Link href="/markets" className="text-[var(--accent)] hover:underline">Summerlin, Henderson, 55+, high-rises, and new construction</Link></li>
            <li><Link href="/office" className="text-[var(--accent)] hover:underline">Henderson office on Green Valley Parkway</Link></li>
            <li><Link href="/for-cpas" className="text-[var(--accent)] hover:underline">For CPAs: refer a client to our Nevada real estate expert</Link></li>
            <li><Link href="/services/tax-residency-planning" className="text-[var(--accent)] hover:underline">Tax residency planning</Link></li>
            <li><Link href="/contact" className="text-[var(--accent)] hover:underline">Contact Dr. Jan Duffy</Link> or <CalendlyPopupLink className="text-[var(--accent)] hover:underline">schedule a call</CalendlyPopupLink></li>
          </ul>
        </section>

        <footer className="border-t border-white/10 pt-12">
          <p className="text-[var(--foreground)]">Ready to start? <Link href="/contact" className="text-[var(--accent)] hover:underline">Talk to Dr. Jan</Link> or <CalendlyPopupLink className="text-[var(--accent)] hover:underline">schedule a call</CalendlyPopupLink>.</p>
          <p className="mt-2 text-[var(--foreground)]">Are you a CPA? <Link href="/for-cpas" className="text-[var(--accent)] hover:underline">Have your CPA contact us</Link>.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services/tax-residency-planning" className="text-sm text-[var(--accent)] hover:underline">Tax Residency Planning</Link>
            <Link href="/services/multi-state-advisory" className="text-sm text-[var(--accent)] hover:underline">Multi-State Advisory</Link>
            <Link href="/services/family-office-consulting" className="text-sm text-[var(--accent)] hover:underline">Family Office Consulting</Link>
            <Link href="/services/ca-to-nv-relocation" className="text-sm text-[var(--accent)] hover:underline">CA-to-NV Relocation</Link>
          </div>
        </footer>
      </article>
    </>
  );
}
