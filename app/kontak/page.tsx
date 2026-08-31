
import type { Metadata } from "next";
import { kostData } from "@/data/kostData";
import {
  SOCIAL_MEDIA,
  WHATSAPP_DEFAULT_MESSAGE,
  buildWhatsAppUrl,
} from "@/lib/constants";
import {
  WhatsAppIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi kami melalui WhatsApp atau media sosial, dan lihat lokasi ketiga kost kami di Google Maps.",
  alternates: {
    canonical: "/kontak",
  },
};

/**
 * Halaman /kontak. Tidak ada contact form karena situs ini tanpa backend —
 * seluruh kontak mengarah ke WhatsApp/media sosial, dan lokasi ditampilkan
 * lewat iframe Google Maps (bukan Google Maps JavaScript API).
 */
export default function KontakPage() {
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE);

  const contactLinks = [
    { label: "WhatsApp", url: whatsappUrl, Icon: WhatsAppIcon },
    {
      label: SOCIAL_MEDIA.instagram.label,
      url: SOCIAL_MEDIA.instagram.url,
      Icon: InstagramIcon,
    },
    {
      label: SOCIAL_MEDIA.tiktok.label,
      url: SOCIAL_MEDIA.tiktok.url,
      Icon: TikTokIcon,
    },
    {
      label: SOCIAL_MEDIA.facebook.label,
      url: SOCIAL_MEDIA.facebook.url,
      Icon: FacebookIcon,
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-2xl font-bold text-blue-900 sm:text-3xl">
            Kontak
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Hubungi kami melalui WhatsApp atau media sosial di bawah ini.
          </p>
        </div>

        {/* WhatsApp + Media Sosial */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {contactLinks.map(({ label, url, Icon }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-5 text-center shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Icon className="h-6 w-6 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* 3 Lokasi Kost */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-blue-900 sm:text-2xl">
            Lokasi Kost Kami
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {kostData.map((kost) => (
              <div
                key={kost.id}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <div className="p-4">
                  <p className="text-base font-semibold text-blue-900">
                    {kost.nama}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{kost.alamat}</p>
                </div>
                <iframe
                  src={kost.iframeMap}
                  title={`Lokasi ${kost.nama}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
