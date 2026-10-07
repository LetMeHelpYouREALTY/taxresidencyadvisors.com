import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/schema";

export const metadata: Metadata = withCanonical("/privacy", {
  title: "Privacy Policy",
  description: "Privacy policy for taxresidencyadvisors.com and Tax Residency Advisors.",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-playfair text-4xl font-bold text-[var(--foreground)]">Privacy Policy</h1>
      <p className="mt-4 text-[var(--muted)]">Last updated: 2026</p>
      <div className="prose prose-invert mt-8 max-w-none text-[var(--foreground)]/90">
        <p>
          Tax Residency Advisors and taxresidencyadvisors.com respect your privacy. Information you provide through our contact and referral forms (name, email, phone, firm name, and message content) is used only to respond to your inquiry or process your referral. We do not sell or share your information with third parties for marketing purposes.
        </p>
        <p className="mt-4">
          We may retain your communication for our records and to fulfill the purpose of your request. If you have questions about how we handle your data, contact us at{" "}
          <a href="mailto:info@taxresidencyadvisors.com" className="text-[var(--accent)] hover:underline">info@taxresidencyadvisors.com</a>.
        </p>
      </div>
      <p className="mt-12">
        <Link href="/" className="text-[var(--accent)] hover:underline">← Back to home</Link>
      </p>
    </div>
  );
}
