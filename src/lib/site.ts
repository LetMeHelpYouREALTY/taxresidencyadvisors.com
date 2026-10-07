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
 * Office NAP. Street line is the exact string supplied for the Google Business Profile.
 * Hours are omitted until confirmed against that profile.
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
