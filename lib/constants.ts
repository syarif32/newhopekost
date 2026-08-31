/**
 * Satu sumber kebenaran untuk data bisnis yang bersifat GLOBAL
 * (bukan spesifik per-properti kost).
 *
 * GANTI SEMUA NILAI PLACEHOLDER DI BAWAH INI dengan data asli sebelum deploy.
 * Data properti kost (nama, alamat, harga, dst.) ada di data/kostData.ts,
 * bukan di sini.
 */

/** Info umum situs, dipakai untuk Metadata API (title, description, OG). */
export const SITE_CONFIG = {
  name: "GANTI_NAMA_BRAND_KOST", // contoh: "Kost Nyaman Group"
  description:
    "GANTI_DESKRIPSI_SITUS — deskripsi singkat brand kost untuk SEO & OG.",
  // Ganti dengan domain asli setelah deploy ke Vercel / custom domain.
  url: "https://GANTI-DOMAIN.vercel.app",
} as const;

/**
 * Nomor WhatsApp tujuan, format internasional TANPA tanda "+" atau spasi.
 * Contoh format yang benar: "6281234567890"
 */
export const WHATSAPP_NUMBER = "62GANTI_NOMOR_WHATSAPP";

/**
 * Pesan default yang dikirim melalui tombol WhatsApp umum
 * (Navbar, Footer, halaman umum selain detail kost).
 */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Halo, saya ingin bertanya mengenai kost.";

/**
 * Generator pesan WhatsApp khusus untuk halaman detail properti (/kost/[slug]).
 * Dipakai oleh FloatingWA saat menerima prop propertyName.
 */
export function getWhatsAppPropertyMessage(propertyName: string): string {
  return `Halo, saya tertarik dengan ${propertyName}. Saya ingin menanyakan ketersediaan kamar.`;
}

/**
 * Membentuk URL wa.me lengkap dari nomor + pesan.
 * Tidak menggunakan WhatsApp Business API, hanya link wa.me biasa.
 */
export function buildWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/** Link media sosial resmi. Hanya link biasa — tanpa embed/SDK pihak ketiga. */
export const SOCIAL_MEDIA = {
  instagram: {
    label: "Instagram",
    url: "https://instagram.com/GANTI_USERNAME_INSTAGRAM",
  },
  tiktok: {
    label: "TikTok",
    url: "https://tiktok.com/@GANTI_USERNAME_TIKTOK",
  },
  facebook: {
    label: "Facebook",
    url: "https://facebook.com/GANTI_USERNAME_FACEBOOK",
  },
} as const;

/** Menu navigasi utama (Navbar & Footer). */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Daftar Kost", href: "/kost" },
  { label: "Media Sosial", href: "/sosmed" },
  { label: "Kontak", href: "/kontak" },
] as const;
