import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/lib/services";
import { getAllResourceSlugs, getResourceBySlug } from "@/lib/resources";
import { getAllMarketSlugs } from "@/lib/markets";
import { CONTENT_UPDATED, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = getAllServiceSlugs();
  const serviceUrls = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const resourceSlugs = getAllResourceSlugs();
  const resourceUrls = resourceSlugs.map((slug) => {
    const article = getResourceBySlug(slug);
    return {
      url: `${SITE_URL}/resources/${slug}`,
      lastModified: article ? new Date(article.dateModified) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    };
  });

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/for-cpas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...serviceUrls,
    { url: `${SITE_URL}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/nevada-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    ...resourceUrls,
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/office`, lastModified: new Date(CONTENT_UPDATED), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/markets`, lastModified: new Date(CONTENT_UPDATED), changeFrequency: "monthly", priority: 0.85 },
    ...getAllMarketSlugs().map((slug) => ({
      url: `${SITE_URL}/markets/${slug}`,
      lastModified: new Date(CONTENT_UPDATED),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
