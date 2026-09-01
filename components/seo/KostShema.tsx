
import { SITE_CONFIG, WHATSAPP_NUMBER } from "@/lib/constants";

interface PropertyProps {
  name: string;
  description: string;
  location: string;
  address?: string;
  price: number | string;
  images: string[];
  slug: string;
}

export default function KostSchema({ property }: { property: PropertyProps }) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Accommodation", 
    "name": property.name,
    "description": property.description,
    "url": `${SITE_CONFIG.url}/kost/${property.slug}`,
    "image": property.images.map((img) =>
      img.startsWith("http") ? img : `${SITE_CONFIG.url}${img}`
    ),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": property.address || property.location,
      "addressCountry": "ID",
    },
    "offers": {
      "@type": "Offer",
      "price": property.price,
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "url": `${SITE_CONFIG.url}/kost/${property.slug}`,
    },
    "telephone": `+${WHATSAPP_NUMBER}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}