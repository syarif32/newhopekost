"use client";

import { usePathname } from "next/navigation";
import {
  WHATSAPP_DEFAULT_MESSAGE,
  buildWhatsAppUrl,
  getWhatsAppPropertyMessage,
} from "@/lib/constants";
import { getKostBySlug } from "@/data/kostData";
import { WhatsAppIcon } from "@/components/ui/Icons";

interface FloatingWAProps {
  /**
   * Nama properti kost. Opsional — jika tidak diberikan, komponen akan
   * mencoba mendeteksi otomatis dari URL saat ini (lihat catatan di bawah).
   * Tetap bisa dipakai secara eksplisit jika suatu saat diperlukan.
   */
  propertyName?: string;
}

/**
 * Floating WhatsApp button, tampil fixed di kanan bawah pada SETIAP halaman.
 * Dirender satu kali di app/layout.tsx agar tidak pernah duplikat.
 *
 * Client Component (perubahan dari Phase 2) karena butuh mengetahui path URL
 * saat ini lewat usePathname(), supaya bisa otomatis mengenali halaman
 * /kost/[slug] dan menyusun pesan WhatsApp dengan nama properti yang sesuai
 * — tanpa perlu setiap page.tsx meneruskan prop secara manual (yang akan
 * berisiko membuat dua FloatingWA render jika ditaruh di layout maupun page).
 */
export default function FloatingWA({ propertyName }: FloatingWAProps) {
  const pathname = usePathname();
  const resolvedPropertyName = propertyName ?? getPropertyNameFromPathname(pathname);

  const message = resolvedPropertyName
    ? getWhatsAppPropertyMessage(resolvedPropertyName)
    : WHATSAPP_DEFAULT_MESSAGE;

  const whatsappUrl = buildWhatsAppUrl(message);

  const ariaLabel = resolvedPropertyName
    ? `Hubungi kami via WhatsApp mengenai ${resolvedPropertyName}`
    : "Hubungi kami via WhatsApp";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

/**
 * Mengambil nama kost dari pathname jika berada di /kost/[slug].
 * Mengembalikan undefined untuk halaman lain (termasuk /kost tanpa slug).
 */
function getPropertyNameFromPathname(pathname: string | null): string | undefined {
  if (!pathname) return undefined;
  const match = pathname.match(/^\/kost\/([^/]+)\/?$/);
  if (!match) return undefined;
  return getKostBySlug(match[1])?.nama;
}
