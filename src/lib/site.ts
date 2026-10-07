/** Primary site URL — use www as canonical (Vercel). */
export const SITE_URL = "https://www.taxresidencyadvisors.com";

/** Calendly scheduling — badge and inline widget use this appointment URL. */
export const CALENDLY_URL = "https://calendly.com/drjanduffy/appointment";

/** Client-facing phone. Matches the Google Business Profile CTA line. */
export const PHONE_DISPLAY = "702-222-1964";
export const PHONE_E164 = "+1-702-222-1964";
export const PHONE_HREF = "tel:+17022221964";
export const EMAIL = "info@taxresidencyadvisors.com";

/**
 * Office NAP. Street line and hours match the Google Business Profile.
 * One daily range was given, with no closed days, so hours apply Monday–Sunday.
 */
export const NAP = {
  name: "Tax Residency Advisors",
  streetAddress: "901 N Green Valley Pkwy #200d",
  addressLocality: "Henderson",
  addressRegion: "NV",
  postalCode: "89074",
  addressCountry: "US",
} as const;

export const NAP_CITY_LINE = `${NAP.addressLocality}, ${NAP.addressRegion} ${NAP.postalCode}`;
export const NAP_SINGLE_LINE = `${NAP.streetAddress}, ${NAP_CITY_LINE}`;

/** Building pin for 901 N Green Valley Pkwy, Henderson. OpenStreetMap, 2026-10-07. */
export const GEO = {
  latitude: 36.0275285,
  longitude: -115.085995,
} as const;

/** Last content change used as sitemap lastmod. Not "now" on every request. */
export const CONTENT_UPDATED = "2026-10-07";

/** Visible hours string, matching the confirmed office range. */
export const HOURS_DISPLAY = "Monday–Sunday, 8:00 am to 8:00 pm";
export const HOURS_OPENS = "08:00";
export const HOURS_CLOSES = "20:00";

const OFFICE_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

const MAPS_QUERY = encodeURIComponent(NAP_SINGLE_LINE);

export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=16&output=embed`;
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
export const MAPS_REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${NAP.name} ${NAP_SINGLE_LINE}`)}`;

export function postalAddressJsonLd() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: NAP.streetAddress,
    addressLocality: NAP.addressLocality,
    addressRegion: NAP.addressRegion,
    postalCode: NAP.postalCode,
    addressCountry: NAP.addressCountry,
  };
}

export function openingHoursJsonLd() {
  return {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: [...OFFICE_DAYS],
    opens: HOURS_OPENS,
    closes: HOURS_CLOSES,
  };
}
