export const SITE_CONFIG = {
  name: "New Hope Kost",
  description:
    "Pilihan kost di Palebon dan Tlogosari Kulon, Pedurungan, Semarang bagian timur. Lihat harga bulanan, foto, fasilitas, dan hubungi New Hope Kost.",
  url: "https://newhopekost.com", 
ogImage: "/images/depan.png", 
  locale: "id_ID",
} as const;

/**
 * Nomor WhatsApp tujuan, format internasional TANPA tanda "+" atau spasi.
 * Contoh format yang benar: "6281234567890"
 */
export const WHATSAPP_NUMBER = "62811382255";

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
    url: "https://instagram.com",
  },
  tiktok: {
    label: "TikTok",
    url: "https://tiktok.com",
  },
  facebook: {
    label: "Facebook",
    url: "https://facebook.com",
  },
} as const;

/** Menu navigasi utama (Navbar & Footer). */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Daftar Kost", href: "/kost" },
  { label: "Media Sosial", href: "/sosmed" },
  { label: "Kontak", href: "/kontak" },
] as const;
