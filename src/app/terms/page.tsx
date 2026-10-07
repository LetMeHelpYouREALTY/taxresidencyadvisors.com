import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/schema";

export const metadata: Metadata = withCanonical("/terms", {
  title: "Terms of Use",
  description: "Terms of use for taxresidencyadvisors.com.",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-playfair text-4xl font-bold text-[var(--foreground)]">Terms of Use</h1>
      <p className="mt-4 text-[var(--muted)]">Last updated: 2026</p>
      <div className="prose prose-invert mt-8 max-w-none text-[var(--foreground)]/90">
        <p>
          By using taxresidencyadvisors.com, you agree to use this site for lawful purposes only. The content on this site is for general information and does not constitute legal, tax, or financial advice. For advice specific to your situation, consult a qualified professional.
        </p>
        <p className="mt-4">
          KLB Consultants and Dr. Jan Duffy are affiliated with Berkshire Hathaway HomeServices Nevada Properties. Real estate services are subject to applicable licensing and regulations. All property data and descriptions are subject to errors and changes.
        </p>
      </div>
      <p className="mt-12">
        <Link href="/" className="text-[var(--accent)] hover:underline">← Back to home</Link>
      </p>
    </div>
  );
}
