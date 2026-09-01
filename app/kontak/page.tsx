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
    { 
      label: "WhatsApp", 
      url: whatsappUrl, 
      Icon: WhatsAppIcon,
      brandBg: "bg-[#25D366]", 
      brandText: "group-hover:text-[#25D366]",
      brandHover: "hover:border-green-300 hover:shadow-green-100",
    },
    {
      label: SOCIAL_MEDIA.instagram.label,
      url: SOCIAL_MEDIA.instagram.url,
      Icon: InstagramIcon,
      brandBg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
      brandText: "group-hover:text-pink-600",
      brandHover: "hover:border-pink-300 hover:shadow-pink-100",
    },
    {
      label: SOCIAL_MEDIA.tiktok.label,
      url: SOCIAL_MEDIA.tiktok.url,
      Icon: TikTokIcon,
      brandBg: "bg-black",
      brandText: "group-hover:text-black",
      brandHover: "hover:border-slate-400 hover:shadow-slate-200",
    },
    {
      label: SOCIAL_MEDIA.facebook.label,
      url: SOCIAL_MEDIA.facebook.url,
      Icon: FacebookIcon,
      brandBg: "bg-[#1877F2]",
      brandText: "group-hover:text-[#1877F2]",
      brandHover: "hover:border-blue-300 hover:shadow-blue-100",
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <h1 className="text-2xl font-bold text-blue-900 sm:text-3xl">
            Kontak
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Hubungi kami melalui WhatsApp atau media sosial di bawah ini.
          </p>
        </div>

        {/* WhatsApp + Media Sosial */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {contactLinks.map(({ label, url, Icon, brandBg, brandText, brandHover }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 animate-fade-in-up ${brandHover}`}
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-110 ${brandBg}`}>
                <Icon className="h-6 w-6" />
              </span>
              <span className={`text-sm font-semibold text-slate-700 transition-colors ${brandText}`}>
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* 3 Lokasi Kost */}
        <div className="mt-16 animate-fade-in-up">
          <h2 className="text-xl font-bold text-blue-900 sm:text-2xl">
            Lokasi Kost Kami
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {kostData.map((kost) => (
              <div
                key={kost.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
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