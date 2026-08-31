
import type { Metadata } from "next";
import { SOCIAL_MEDIA } from "@/lib/constants";
import {
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Media Sosial",
  description:
    "Ikuti media sosial kami di Instagram, TikTok, dan Facebook untuk update terbaru seputar kost.",
  alternates: {
    canonical: "/sosmed",
  },
};

const SOCIAL_ITEMS = [
  {
    ...SOCIAL_MEDIA.instagram,
    Icon: InstagramIcon,
    description: "Lihat foto & update terbaru seputar kost kami di Instagram.",
  },
  {
    ...SOCIAL_MEDIA.tiktok,
    Icon: TikTokIcon,
    description: "Tonton video tur kost dan konten seru lainnya di TikTok.",
  },
  {
    ...SOCIAL_MEDIA.facebook,
    Icon: FacebookIcon,
    description: "Terhubung dengan kami dan komunitas penghuni di Facebook.",
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
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-2xl font-bold text-blue-900 sm:text-3xl">
            Media Sosial
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Ikuti kami di media sosial untuk melihat lebih banyak foto,
            video, dan informasi terbaru.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SOCIAL_ITEMS.map(({ label, url, Icon, description }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-lg border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-4 text-base font-semibold text-blue-900">
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
