import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllKostSlugs } from "@/data/kostData";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllKostSlugs();
  const kostUrls: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${SITE_CONFIG.url}/kost/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_CONFIG.url}/kost`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_CONFIG.url}/sosmed`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${SITE_CONFIG.url}/kontak`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  return [...staticUrls, ...kostUrls];
}