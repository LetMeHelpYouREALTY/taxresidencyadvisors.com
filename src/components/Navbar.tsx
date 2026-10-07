"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CalendlyPopupLink } from "@/components/CalendlyPopupLink";

const MAIN_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Dr. Jan" },
  { href: "/for-cpas", label: "For CPAs & Advisors" },
  { href: "/nevada-guide", label: "Nevada Guide" },
  { href: "/markets", label: "Markets" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resources", label: "Resources" },
  { href: "/office", label: "Office" },
  { href: "/contact", label: "Contact" },
];

const SERVICES_LINKS = [
  { href: "/services/tax-residency-planning", label: "Tax Residency Planning" },
  { href: "/services/multi-state-advisory", label: "Multi-State Advisory" },
  { href: "/services/family-office-consulting", label: "Family Office Consulting" },
  { href: "/services/ca-to-nv-relocation", label: "CA-to-NV Relocation" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#1B2A4A]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setMobileOpen(false)}>
          <img
            src="/logos/logo-light.svg"
            alt="Tax Residency Advisors"
            className="h-8 w-auto"
            width={200}
            height={32}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded px-3 py-2 text-sm text-[var(--foreground)]/90 hover:bg-white/5 hover:text-[var(--foreground)]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="rounded px-3 py-2 text-sm text-[var(--foreground)]/90 hover:bg-white/5 hover:text-[var(--foreground)]"
          >
            About Dr. Jan
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded px-3 py-2 text-sm text-[var(--foreground)]/90 hover:bg-white/5 hover:text-[var(--foreground)]"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full pt-1"
                >
                  <ul className="min-w-[220px] rounded-lg border border-white/10 bg-[#0F1A2E] py-2 shadow-xl">
                    {SERVICES_LINKS.map(({ href, label }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="block px-4 py-2 text-sm text-[var(--foreground)]/90 hover:bg-white/5 hover:text-[var(--accent)]"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {MAIN_LINKS.filter((l) => l.href !== "/" && l.href !== "/about").map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded px-3 py-2 text-sm text-[var(--foreground)]/90 hover:bg-white/5 hover:text-[var(--foreground)]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <CalendlyPopupLink
            className="inline-flex min-h-[48px] items-center justify-center rounded border-2 border-white/30 px-5 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-white/5"
          >
            Book a call
          </CalendlyPopupLink>
          <Link
            href="/for-cpas"
            className="inline-flex min-h-[48px] items-center justify-center rounded bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[#0F1A2E] hover:opacity-90"
          >
            Refer a Client
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="min-h-[48px] min-w-[48px] p-2 lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/5 bg-[#1B2A4A] lg:hidden"
          >
            <nav className="flex flex-col gap-0 px-4 py-4">
              <Link href="/" className="rounded py-3 text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="rounded py-3 text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>
                About Dr. Jan
              </Link>
              <div className="py-2">
                <span className="block py-2 text-sm uppercase tracking-wider text-[var(--muted)]">Services</span>
                {SERVICES_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block rounded py-2 pl-4 text-[var(--foreground)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <Link href="/for-cpas" className="rounded py-3 text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>
                For CPAs & Advisors
              </Link>
              <Link href="/nevada-guide" className="rounded py-3 text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>
                Nevada Guide
              </Link>
              <Link href="/markets" className="rounded py-3 text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>
                Markets
              </Link>
              <Link href="/case-studies" className="rounded py-3 text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>
                Case Studies
              </Link>
              <Link href="/resources" className="rounded py-3 text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>
                Resources
              </Link>
              <Link href="/office" className="rounded py-3 text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>
                Office
              </Link>
              <Link href="/contact" className="rounded py-3 text-[var(--foreground)]" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
              <CalendlyPopupLink
                className="rounded py-3 text-[var(--foreground)]"
              >
                Schedule a call
              </CalendlyPopupLink>
              <Link
                href="/for-cpas"
                className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded bg-[var(--accent)] px-4 py-3 font-semibold text-[#0F1A2E]"
                onClick={() => setMobileOpen(false)}
              >
                Refer a Client
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
