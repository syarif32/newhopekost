import { pageMetadata } from "@/lib/seo";
import { SOCIAL_MEDIA } from "@/lib/constants";
import {
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
} from "@/components/ui/Icons";

export const metadata = pageMetadata("Media Sosial New Hope Kost", "Temukan kanal media sosial New Hope Kost untuk informasi hunian di Palebon dan Tlogosari Kulon, Pedurungan, Semarang.", "/sosmed");

const SOCIAL_ITEMS = [
  {
    ...SOCIAL_MEDIA.instagram,
    Icon: InstagramIcon,
    description: "Lihat foto & update terbaru seputar kost kami di Instagram.",
    // Gradasi khas Instagram
    brandBg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    brandHover: "hover:border-pink-300 hover:shadow-pink-100",
    brandText: "group-hover:text-pink-600",
  },
  {
    ...SOCIAL_MEDIA.tiktok,
    Icon: TikTokIcon,
    description: "Tonton video tur kost dan konten seru lainnya di TikTok.",
    // Hitam khas TikTok
    brandBg: "bg-black",
    brandHover: "hover:border-slate-400 hover:shadow-slate-200",
    brandText: "group-hover:text-black",
  },
  {
    ...SOCIAL_MEDIA.facebook,
    Icon: FacebookIcon,
    description: "Terhubung dengan kami dan komunitas penghuni di Facebook.",
    // Biru khas Facebook
    brandBg: "bg-[#1877F2]",
    brandHover: "hover:border-blue-300 hover:shadow-blue-100",
    brandText: "group-hover:text-[#1877F2]",
  },
];

/**
 * Halaman /sosmed. Hanya link biasa ke platform eksternal —
 * tidak ada embed, SDK, atau script pihak ketiga.
 */
export default function SosmedPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <h1 className="text-2xl font-bold text-blue-900 sm:text-3xl">
            Media Sosial
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Ikuti kami di media sosial untuk melihat lebih banyak foto,
            video, dan informasi terbaru.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SOCIAL_ITEMS.map(({ label, url, Icon, description, brandBg, brandHover, brandText }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 animate-fade-in-up ${brandHover}`}
            >
              <span className={`flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-110 ${brandBg}`}>
                <Icon className="h-7 w-7" />
              </span>
              <p className={`mt-5 text-base font-bold text-slate-800 transition-colors ${brandText}`}>
                {label}
              </p>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}