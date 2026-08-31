import Link from "next/link";
import {
  NAV_LINKS,
  SITE_CONFIG,
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

/**
 * Footer global. Server Component murni — tidak ada interaksi/state,
 * seluruh data diambil dari lib/constants.ts (satu sumber kebenaran).
 */
export default function Footer() {
  const whatsappUrl = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE);
  const currentYear = new Date().getFullYear();

  const linkClass =
    "text-sm text-slate-600 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md";

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-semibold text-blue-900">
              {SITE_CONFIG.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Navigasi */}
          <nav aria-label="Navigasi footer">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800">
              Hubungi Kami
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Media Sosial */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-800">
              Media Sosial
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={SOCIAL_MEDIA.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <InstagramIcon className="h-4 w-4" />
                  {SOCIAL_MEDIA.instagram.label}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_MEDIA.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <TikTokIcon className="h-4 w-4" />
                  {SOCIAL_MEDIA.tiktok.label}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_MEDIA.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <FacebookIcon className="h-4 w-4" />
                  {SOCIAL_MEDIA.facebook.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} {SITE_CONFIG.name}. Seluruh hak cipta
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
