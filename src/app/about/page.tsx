import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, NAP_SINGLE_LINE, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { CalendlyPopupLink } from "@/components/CalendlyPopupLink";
import { withCanonical } from "@/lib/schema";

export const metadata: Metadata = withCanonical("/about", {
  title: "About Dr. Jan Duffy | Las Vegas Real Estate Expert",
  description:
    "Meet Dr. Jan Duffy — Ph.D., 30+ years Las Vegas market expertise, $127M+ career sales, 500+ families. The real estate expert CPAs trust for Nevada tax-residency relocations.",
  openGraph: {
    title: "About Dr. Jan Duffy | Tax Residency Advisors",
    url: `${SITE_URL}/about`,
  },
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient-mesh px-4 pt-16 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <img
            src="/images/about-green-valley.jpg"
            alt="North Green Valley Parkway in Henderson at dusk, near the Tax Residency Advisors office"
            width={1152}
            height={864}
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
          <div>
            <h1 className="font-playfair text-4xl font-bold text-[var(--foreground)] sm:text-5xl">Meet Dr. Jan Duffy</h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Las Vegas Real Estate Expert | Ph.D. | 30+ Years | 500+ Families
            </p>
          </div>
        </div>
      </section>

      {/* Why TRA / Experience */}
      <section className="border-t border-white/5 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">Why TRA</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-[var(--foreground)]/90">
            <li><strong>30+ years</strong> in the Las Vegas market — every neighborhood, every builder.</li>
            <li><strong>500+ families</strong> guided through CA-to-NV relocations and tax-residency moves.</li>
            <li><strong>$127M+</strong> in career sales; Berkshire Hathaway HomeServices Nevada Properties.</li>
          </ul>
          <p className="mt-4 text-[var(--foreground)]/90">
            CPAs and tax advisors refer clients to our <Link href="/for-cpas" className="text-[var(--accent)] hover:underline">CPA referral program</Link> for white-glove Nevada real estate and domicile support.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-[var(--foreground)]/90 leading-relaxed">
              I&apos;ve been selling real estate in Las Vegas for over 30 years. Not from behind a desk at some corporate office — on the ground, in the neighborhoods, at every open house and every closing table.
            </p>
            <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">
              I hold a Ph.D. in Market Research and Consumer Behavior, which is a fancy way of saying I understand why people make the decisions they do — especially the big ones, like where to live and how much to spend. That research background is why CPAs and tax advisors trust me: I get the WHY behind the move, not just the house.
            </p>
            <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">
              When your client calls me, they&apos;re getting someone who knows every subdivision in Summerlin, every builder&apos;s incentive program, every 55+ community in the valley, and every condo tower on the Strip. I&apos;ve closed $127 million in career sales across 500+ families. I know what the comps say, what the market&apos;s doing this week, and which neighborhoods are about to get a lot more expensive.
            </p>
            <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed">
              I work with Berkshire Hathaway HomeServices Nevada Properties — the most trusted name in real estate. And I work by referral, which means your reputation is my reputation. I treat every referred client like family.
            </p>
          </div>
          <p className="mt-8 font-playfair text-lg text-[var(--accent)]">— Dr. Jan Duffy</p>
          <p className="text-sm text-[var(--muted)]">NV License S.0197614.LLC</p>
          <p className="mt-1 text-sm text-[var(--foreground)]">{NAP_SINGLE_LINE}</p>
          <a href={PHONE_HREF} className="mt-1 block text-sm text-[var(--foreground)] hover:text-[var(--accent)]">{PHONE_DISPLAY}</a>
          <span className="mt-1 block text-sm text-[var(--foreground)]/90">or <CalendlyPopupLink className="text-[var(--accent)] hover:underline">schedule a call</CalendlyPopupLink></span>
        </div>
      </section>

      {/* Why CPAs Choose Dr. Jan */}
      <section className="border-t border-white/5 bg-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">Why CPAs Choose Dr. Jan</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-[var(--background)] p-6">
              <h3 className="font-playfair font-semibold text-[var(--accent)]">I Understand the Tax Timeline</h3>
              <p className="mt-3 text-[var(--foreground)]/90">
                I know your client needs to establish domicile by a specific date. I work backward from that deadline to make sure we close on time, every time. No surprises, no delays.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-[var(--background)] p-6">
              <h3 className="font-playfair font-semibold text-[var(--accent)]">I Protect Your Client Relationship</h3>
              <p className="mt-3 text-[var(--foreground)]/90">
                You referred them to me — that means you trust me with YOUR reputation. I keep you informed, I never overstep, and I make sure your client comes back to you even happier.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-[var(--background)] p-6">
              <h3 className="font-playfair font-semibold text-[var(--accent)]">I Know Every Neighborhood</h3>
              <p className="mt-3 text-[var(--foreground)]/90">
                135+ hyperlocal Las Vegas neighborhoods. I don&apos;t show your client 3 random listings — I match them to the right community based on lifestyle, commute, schools, amenities, and long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="border-t border-white/5 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-10 gap-y-4 text-center text-sm text-[var(--muted)]">
          <span>Ph.D., Market Research & Consumer Behavior</span>
          <span>Nevada Licensed Agent S.0197614.LLC</span>
          <span>Berkshire Hathaway HomeServices Nevada Properties</span>
          <span>30+ Years Las Vegas Market Expertise</span>
          <span>$127M+ Career Sales Volume</span>
          <span>500+ Families Served</span>
        </div>
      </section>

      {/* KLB team */}
      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">KLB Consultants Team</h2>
          <p className="mt-2 text-[var(--muted)]">
            Dr. Jan is supported by the KLB Consultants team for institutional and multi-state advisory:
          </p>
          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-white/10 p-6">
              <h3 className="font-playfair font-semibold text-[var(--foreground)]">Kelly Lynn Boyle</h3>
              <p className="text-sm text-[var(--accent)]">President, CA Licensed Broker</p>
              <p className="mt-2 text-sm text-[var(--foreground)]/90">Family office consulting, institutional RE investment. Est. 2005.</p>
            </div>
            <div className="rounded-lg border border-white/10 p-6">
              <h3 className="font-playfair font-semibold text-[var(--foreground)]">Dr. Gene Boyle</h3>
              <p className="text-sm text-[var(--accent)]">Managing Director</p>
              <p className="mt-2 text-sm text-[var(--foreground)]/90">CA-based. RE investment strategy, multi-state portfolio optimization.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[var(--muted)]">Ready to talk?</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <CalendlyPopupLink
              className="inline-flex min-h-[48px] items-center justify-center rounded bg-[var(--accent)] px-6 py-2.5 font-semibold text-[#0F1A2E] hover:opacity-90"
            >
              Schedule a call with Dr. Jan
            </CalendlyPopupLink>
            <Link href="/for-cpas" className="inline-flex min-h-[48px] items-center justify-center rounded border-2 border-white/30 px-6 py-2.5 font-medium text-[var(--foreground)] hover:bg-white/5">
              Refer a Client →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
