import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

import { SITE_URL, CALENDLY_URL, EMAIL, PHONE_E164, openingHoursJsonLd, postalAddressJsonLd } from "@/lib/site";
import { CalendlyBadge } from "@/components/CalendlyBadge";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tax Residency Advisors | CA-to-NV Real Estate & Tax Residency Planning",
    template: "%s | Tax Residency Advisors",
  },
  description:
    "Expert tax residency real estate services for high-net-worth families relocating from California to Nevada. CPA referral program, domicile strategy, and luxury home placement by Dr. Jan Duffy.",
  keywords:
    "tax residency planning, Nevada tax residency, California to Nevada relocation, family office real estate, multi-state tax advisory, Las Vegas real estate consulting",
  openGraph: {
    title: "Tax Residency Advisors",
    description:
      "CA-to-NV real estate and tax residency planning. Trusted by CPAs since 2005.",
    url: SITE_URL,
    siteName: "Tax Residency Advisors",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Residency Advisors",
    description:
      "CA-to-NV real estate and tax residency planning. Trusted by CPAs since 2005.",
    images: [`${SITE_URL}/api/og`],
  },
  icons: {
    icon: "/icons/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tax Residency Advisors",
  alternateName: "TRA",
  description:
    "Tax residency real estate planning for CA-to-NV relocations",
  url: SITE_URL,
  telephone: PHONE_E164,
  email: EMAIL,
  address: postalAddressJsonLd(),
  areaServed: ["California", "Nevada"],
  foundingDate: "2005-01",
  serviceType: [
    "Tax Residency Real Estate Planning",
    "CA-to-NV Relocation",
    "Family Office Real Estate Consulting",
    "Multi-State Real Estate Advisory",
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tax Residency Advisors",
  alternateName: "TRA",
  description: "Tax residency planning and Las Vegas real estate. Berkshire Hathaway HomeServices Nevada Properties.",
  url: SITE_URL,
  telephone: PHONE_E164,
  email: EMAIL,
  address: postalAddressJsonLd(),
  openingHoursSpecification: openingHoursJsonLd(),
  areaServed: ["Las Vegas", "Henderson", "Summerlin", "California", "Nevada"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_E164,
    email: EMAIL,
    url: CALENDLY_URL,
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
        <CalendlyBadge />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ET0Y55X1RC"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ET0Y55X1RC');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
