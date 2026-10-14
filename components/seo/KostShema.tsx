import type { Kost } from "@/types/kost";
import { SITE_CONFIG, WHATSAPP_NUMBER } from "@/lib/constants";
import { serializeJsonLd } from "@/lib/seo";
import { formatPrice, getStartingPrice } from "@/lib/utils";

export default function KostSchema({ kost }: { kost: Kost }) {
  const url = SITE_CONFIG.url + "/kost/" + kost.slug;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness", "@id": url + "#kost",
        name: kost.nama, description: kost.deskripsi, url,
        image: [new URL(kost.coverImage, SITE_CONFIG.url).href],
        telephone: "+" + WHATSAPP_NUMBER,
        address: {
          "@type": "PostalAddress", streetAddress: kost.alamat,
          addressLocality: "Semarang", addressRegion: "Jawa Tengah", addressCountry: "ID",
        },
        priceRange: "Mulai " + formatPrice(getStartingPrice(kost)) + " per bulan",
        amenityFeature: kost.fasilitasUmum.map(name => ({
          "@type": "LocationFeatureSpecification", name, value: true,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_CONFIG.url },
          { "@type": "ListItem", position: 2, name: "Daftar Kost", item: SITE_CONFIG.url + "/kost" },
          { "@type": "ListItem", position: 3, name: kost.nama, item: url },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />;
}
