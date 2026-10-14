import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export function pageMetadata(title: string, description: string, path: string, image: string = SITE_CONFIG.ogImage): Metadata {
  const fullTitle = title.includes(SITE_CONFIG.name) ? title : title + " | " + SITE_CONFIG.name;
  return {
    title: { absolute: fullTitle }, description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle, description, url: path, siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale, type: "website", images: [{ url: image, alt: title }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
