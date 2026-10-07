import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyPopupLink } from "@/components/CalendlyPopupLink";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="font-playfair text-4xl font-bold text-[var(--foreground)]">Page not found</h1>
      <p className="mt-4 text-[var(--muted)]">The page you’re looking for doesn’t exist or has moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex min-h-[48px] items-center justify-center rounded bg-[var(--accent)] px-5 py-2.5 font-semibold text-[#0F1A2E] hover:opacity-90"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex min-h-[48px] items-center justify-center rounded border border-white/30 px-5 py-2.5 font-medium text-[var(--foreground)] hover:bg-white/5"
        >
          Contact
        </Link>
        <CalendlyPopupLink
          as="button"
          className="inline-flex min-h-[48px] items-center justify-center rounded border border-white/30 px-5 py-2.5 font-medium text-[var(--foreground)] hover:bg-white/5"
        >
          Schedule a call
        </CalendlyPopupLink>
      </div>
    </div>
  );
}
