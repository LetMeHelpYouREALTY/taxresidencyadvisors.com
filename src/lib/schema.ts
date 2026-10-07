import type { Metadata } from "next";
import {
  CALENDLY_URL,
  EMAIL,
  GEO,
  HOURS_CLOSES,
  HOURS_OPENS,
  MAPS_DIRECTIONS_URL,
  NAP,
  PHONE_E164,
  SITE_URL,
  postalAddressJsonLd,
} from "@/lib/site";

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const PERSON_ID = `${SITE_URL}/#dr-jan-duffy`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const OG_IMAGE = `${SITE_URL}/api/og`;

const OFFICE_DAYS = [
  "https://schema.org/Monday",
  "https://schema.org/Tuesday",
  "https://schema.org/Wednesday",
  "https://schema.org/Thursday",
  "https://schema.org/Friday",
  "https://schema.org/Saturday",
  "https://schema.org/Sunday",
] as const;

export type Crumb = {
  name: string;
  path: string;
};

export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

/** Self-referencing canonical. metadataBase in the root layout resolves the path. */
export function withCanonical(path: string, metadata: Metadata): Metadata {
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: path,
    },
  };
}

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: NAP.name,
        inLanguage: "en-US",
        publisher: { "@id": BUSINESS_ID },
      },
      {
        "@type": ["RealEstateAgent", "ProfessionalService"],
        "@id": BUSINESS_ID,
        name: NAP.name,
        image: OG_IMAGE,
        url: SITE_URL,
        telephone: PHONE_E164,
        email: EMAIL,
        address: postalAddressJsonLd(),
        geo: {
          "@type": "GeoCoordinates",
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
        hasMap: MAPS_DIRECTIONS_URL,
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [...OFFICE_DAYS],
          opens: HOURS_OPENS,
          closes: HOURS_CLOSES,
        },
        areaServed: ["Las Vegas", "Henderson", "Summerlin", "California", "Nevada"],
        foundingDate: "2005-01",
        founder: { "@id": PERSON_ID },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: PHONE_E164,
          email: EMAIL,
          url: CALENDLY_URL,
          contactType: "customer service",
          areaServed: "US",
          availableLanguage: "English",
        },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Dr. Jan Duffy",
        jobTitle: "Real Estate Agent",
        telephone: PHONE_E164,
        email: EMAIL,
        url: `${SITE_URL}/about`,
        image: OG_IMAGE,
        identifier: "S.0197614.LLC",
        worksFor: [
          { "@id": BUSINESS_ID },
          {
            "@type": "Organization",
            name: "Berkshire Hathaway HomeServices Nevada Properties",
          },
        ],
        sameAs: [
          "https://www.bhhs.com/arizona-properties-california-properties-and-nevada-properties-nv301/las-vegas/dr-jan-duffy/cid-3042332",
        ],
      },
    ],
  };
}

export function homeWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: NAP.name,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
  };
}

export function pageGraph(items: Crumb[]) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  const current = trail[trail.length - 1];
  const url = absoluteUrl(current.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: current.name,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BUSINESS_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: trail.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: absoluteUrl(item.path),
        })),
      },
    ],
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function articleJsonLd(input: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}) {
  const url = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: input.headline,
    description: input.description,
    image: OG_IMAGE,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    mainEntityOfPage: url,
    url,
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Dr. Jan Duffy",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: NAP.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logos/logo.svg`,
      },
    },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

export function serviceJsonLd(input: {
  path: string;
  name: string;
  description: string;
}) {
  const url = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: input.name,
    description: input.description,
    url,
    serviceType: input.name,
    areaServed: ["Nevada", "California"],
    provider: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: NAP.name,
    },
  };
}

export function itemListJsonLd(
  items: { name: string; path: string; description?: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}
