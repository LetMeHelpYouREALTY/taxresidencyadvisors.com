import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, CALENDLY_URL, PHONE_E164, postalAddressJsonLd } from "@/lib/site";
import { CalendlyPopupLink } from "@/components/CalendlyPopupLink";
import { CTA } from "@/components/CTA";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ForCPAsReferralForm } from "@/components/ForCPAsReferralForm";

export const metadata: Metadata = {
  title: "For CPAs & Tax Advisors | Refer Your Clients to Dr. Jan Duffy",
  description:
    "When your client establishes Nevada residency, you need a real estate expert who understands tax timelines and domicile documentation. Refer your client to Dr. Jan Duffy — 30+ years, 500+ families.",
  openGraph: {
    title: "For CPAs & Tax Advisors | Tax Residency Advisors",
    description: "A real estate partner your clients and your reputation deserve. Refer a client today.",
    url: `${SITE_URL}/for-cpas`,
  },
};

const forCPAsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tax Residency Advisors",
  description: "Real estate partner for CPAs and tax professionals referring clients for Nevada tax-residency relocations.",
  url: `${SITE_URL}/for-cpas`,
  audience: {
    "@type": "Audience",
    name: "CPAs and Tax Professionals",
  },
  telephone: PHONE_E164,
  address: postalAddressJsonLd(),
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to be involved in the real estate transaction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. Once you refer your client, I handle everything. But I'm happy to coordinate with you on domicile documentation, closing timelines, or anything else that supports the tax strategy.",
      },
    },
    {
      "@type": "Question",
      name: "What markets do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All of Las Vegas and Henderson — Summerlin, The Ridges, Red Rock Country Club, Skye Canyon, Centennial Hills, 55+ communities (Sun City, Del Webb, Heritage at Stonebridge), luxury Strip high-rises, and all new construction from Century Communities, KB Home, Lennar, Pulte, and Toll Brothers. If they're moving to Nevada, I've got it covered.",
      },
    },
    {
      "@type": "Question",
      name: "What about selling their California property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I partner with top-tier California agents (including our own KLB team with Kelly Lynn Boyle, CA Licensed Broker) to handle the CA disposition. Your client gets coordinated buy/sell service across both states.",
      },
    },
    {
      "@type": "Question",
      name: "My client needs to close before December 31st. Can you guarantee that?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I can't guarantee anything in real estate — but I can tell you that I've never missed a year-end deadline on a CPA-referred relocation. I build in backup options, I stay on top of every timeline, and I communicate proactively.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a formal referral agreement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I keep it simple. A referral is a referral — you send your client my way, I take excellent care of them. If you'd like something in writing for your records, I'm happy to provide a professional referral acknowledgment.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know my client is being taken care of?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I'll send you a status update when I first connect with your client, when we identify target properties, when we go under contract, and when we close. If you want more frequent updates, just say the word.",
      },
    },
  ],
};

const FAQ = [
  {
    q: "Do I need to be involved in the real estate transaction?",
    a: "Not at all. Once you refer your client, I handle everything. But I'm happy to coordinate with you on domicile documentation, closing timelines, or anything else that supports the tax strategy.",
  },
  {
    q: "What markets do you cover?",
    a: "All of Las Vegas and Henderson — Summerlin, The Ridges, Red Rock Country Club, Skye Canyon, Centennial Hills, 55+ communities (Sun City, Del Webb, Heritage at Stonebridge), luxury Strip high-rises, and all new construction from Century Communities, KB Home, Lennar, Pulte, and Toll Brothers. If they're moving to Nevada, I've got it covered.",
  },
  {
    q: "What about selling their California property?",
    a: "I partner with top-tier California agents (including our own KLB team with Kelly Lynn Boyle, CA Licensed Broker) to handle the CA disposition. Your client gets coordinated buy/sell service across both states.",
  },
  {
    q: "My client needs to close before December 31st. Can you guarantee that?",
    a: "I can't guarantee anything in real estate — but I can tell you that I've never missed a year-end deadline on a CPA-referred relocation. I build in backup options, I stay on top of every timeline, and I communicate proactively.",
  },
  {
    q: "Is there a formal referral agreement?",
    a: "I keep it simple. A referral is a referral — you send your client my way, I take excellent care of them. If you'd like something in writing for your records, I'm happy to provide a professional referral acknowledgment.",
  },
  {
    q: "How do I know my client is being taken care of?",
    a: "I'll send you a status update when I first connect with your client, when we identify target properties, when we go under contract, and when we close. If you want more frequent updates, just say the word.",
  },
];

export default function ForCPAsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(forCPAsJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }} />

      {/* Hero */}
      <section className="hero-gradient-mesh px-4 pt-16 pb-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl">
            A Real Estate Partner Your Clients (and Your Reputation) Deserve
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)]">
            When your client decides to establish Nevada residency, you need a real estate expert who understands tax timelines, domicile documentation, and confidential service. That&apos;s what I do.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#referral-form"
              className="inline-flex min-h-[48px] items-center justify-center rounded bg-[var(--accent)] px-5 py-2.5 font-semibold text-[#0F1A2E] hover:opacity-90"
            >
              Refer a Client Now
            </a>
            <CTA variant="secondary" href="#">
              Download Our CPA Partnership Guide
            </CTA>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">The Problem You&apos;re Solving For Your Client</h2>
          <p className="mt-4 text-[var(--foreground)]/90">
            Your client is leaving California (or another high-tax state) for Nevada. The tax strategy is solid. But now they need to:
          </p>
          <ul className="mt-6 list-inside list-disc space-y-2 text-[var(--foreground)]/90">
            <li>Buy a home in Nevada that supports their domicile claim</li>
            <li>Close before the tax year deadline</li>
            <li>Get documentation that withstands an FTB audit</li>
            <li>Potentially sell their California property</li>
            <li>Navigate a real estate market they don&apos;t know</li>
          </ul>
          <p className="mt-6 text-[var(--foreground)]/90">
            You can&apos;t do all of that AND manage their tax return. You need a real estate partner on the ground in Nevada who gets it.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-white/5 bg-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">How Our Referral Program Works</h2>
          <ol className="mt-10 space-y-8">
            {[
              { step: "You Refer", body: "Send us your client's name and timeline. That's it. Call, email, schedule a call, or use the form below. Takes 60 seconds." },
              { step: "We Connect", body: "I personally call your client within 24 hours. I introduce myself, learn their needs, and explain the Nevada market — tailored to their situation and your tax strategy." },
              { step: "We Execute", body: "I handle the entire real estate transaction: property search, neighborhood matching, negotiation, inspections, closing. I coordinate with you on any domicile documentation needs." },
              { step: "You Stay Informed", body: "You get status updates at key milestones. Your client stays your client. I never cross the line into tax advice — that's your lane." },
              { step: "Everyone Wins", body: "Your client is in their new Nevada home on time. Their domicile documentation is clean. You look like a hero. And I've earned the right to your next referral." },
            ].map(({ step, body }, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-[#0F1A2E]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-playfair font-semibold text-[var(--foreground)]">{step}</h3>
                  <p className="mt-1 text-[var(--foreground)]/90">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What makes this different */}
      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">What Makes This Different</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {[
              { title: "I Understand FTB Audits", body: "I've worked with enough CPA-referred clients to know what the California Franchise Tax Board looks for when they challenge a residency change. The home purchase is a critical piece of evidence — I make sure it's bulletproof." },
              { title: "Tax-Year Deadline Awareness", body: "Your client needs to close by December 31st? I work backward from that date. Every property search, every negotiation, every inspection is scheduled to hit YOUR timeline, not mine." },
              { title: "Confidential, Professional Process", body: "Many of your clients are high-net-worth, high-profile, or going through sensitive transitions (divorce, pre-IPO, retirement). I've handled them all with discretion for 30+ years." },
              { title: "Zero Cost to You or Your Firm", body: "There is no fee, no contract, and no obligation. I earn my commission from the real estate transaction. Your referral costs you nothing — and earns your client everything." },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <h3 className="font-playfair font-semibold text-[var(--accent)]">{title}</h3>
                <p className="mt-3 text-[var(--foreground)]/90">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">What CPAs Say</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <TestimonialCard
              quote="I've been referring clients to Dr. Jan for 5 years. She's the only agent I trust with high-net-worth relocations because she actually understands why the timing matters."
              attribution="— CPA, Southern California (name withheld for privacy)"
            />
            <TestimonialCard
              quote="My client closed in Summerlin 3 weeks before year-end. Dr. Jan had backup properties ready in case the first deal fell through. That kind of preparation is rare."
              attribution="— Enrolled Agent, San Francisco Bay Area"
            />
            <TestimonialCard
              quote="What I appreciate most is that Dr. Jan never tries to give tax advice. She stays in her lane, does exceptional work, and makes me look good to my clients."
              attribution="— Tax Attorney, Los Angeles"
            />
          </div>
        </div>
      </section>

      {/* What I need from you */}
      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">What I need from you</h2>
          <p className="mt-4 text-[var(--foreground)]/90">
            To get started, I only need a few details. The rest we handle together.
          </p>
          <ul className="mt-6 list-inside list-disc space-y-2 text-[var(--foreground)]/90">
            <li>Client name and best contact (email or phone)</li>
            <li>Target timeline (e.g. close by December 31st for tax year)</li>
            <li>Any domicile or CPA constraints I should know (e.g. primary residence requirement, filing strategy)</li>
          </ul>
          <p className="mt-4 text-[var(--foreground)]/90">
            You can send this via the form below,{" "}
            <CalendlyPopupLink className="text-[var(--accent)] hover:underline">
              schedule a call
            </CalendlyPopupLink>
            , or call/email me directly. I&apos;ll follow up with your client within 24 hours.
          </p>
        </div>
      </section>

      {/* Referral form */}
      <section id="referral-form" className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">Refer a Client</h2>
          <p className="mt-2 text-[var(--muted)]">Confidential. I&apos;ll personally follow up within 24 hours.</p>
          <p className="mt-2 text-sm text-[var(--foreground)]/90">
            Prefer to talk first?{" "}
            <CalendlyPopupLink className="text-[var(--accent)] hover:underline">
              Schedule a call with Dr. Jan
            </CalendlyPopupLink>
          </p>
          <div className="mt-10">
            <ForCPAsReferralForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-playfair text-2xl font-bold text-[var(--foreground)]">FAQ for CPAs</h2>
          <dl className="mt-10 space-y-4">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="group rounded-lg border border-white/10 bg-white/5">
                <summary className="cursor-pointer list-none px-4 py-4 font-medium text-[var(--foreground)] [&::-webkit-details-marker]:hidden">
                  {q}
                </summary>
                <p className="border-t border-white/10 px-4 py-4 text-[var(--foreground)]/90">{a}</p>
              </details>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[var(--muted)]">Questions? <Link href="/contact" className="text-[var(--accent)] hover:underline">Contact us</Link> or <CalendlyPopupLink className="text-[var(--accent)] hover:underline">schedule a call</CalendlyPopupLink>.</p>
        </div>
      </section>
    </>
  );
}
