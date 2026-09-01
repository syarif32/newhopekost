export const SITE_CONFIG = {
  name: "New Hope Kost",
  description:
    "Sewa kost eksklusif, murah, dan nyaman di Kota Semarang. Fasilitas lengkap, kamar mandi dalam, WiFi cepat, dan bebas biaya tambahan.",
  url: "https://newhopekost.com", 
  keywords: [
    "kost murah",
    "sewa kost",
    "kost eksklusif",
    "kost Semarang",
    "kost bebas",
    "USM",
    "AMNI",
    "Semarang Timur",
    "kost mahasiswa",
    "New Hope Kost",
    "info kost",
    "kost nyaman",
    "kost lengkap",
    "kost fasilitas lengkap",
    "kost strategis",
    "kost dekat kampus",
    "kost aman",
    "kost bersih",
    "kost nyaman dan murah",
    "kost nyaman dan lengkap",
    "kost nyaman dan strategis",
    "kost nyaman dan aman",
    "kost nyaman dan bersih",
    "kost nyaman dan dekat kampus",
    "kost nyaman dan dekat fasilitas umum",
    "kost nyaman dan dekat transportasi",
    "kost nyaman dan dekat pusat kota",
    "kost nyaman dan dekat tempat makan",
    "kost nyaman dan dekat tempat belanja",
    "kost nyaman dan dekat tempat hiburan",
    "kost nyaman dan dekat tempat ibadah",
    "kost nyaman dan dekat tempat olahraga",
    "kost nyaman dan dekat tempat wisata",
    "kost nyaman dan dekat tempat rekreasi",
    "kost nyaman dan dekat tempat nongkrong",
    "kost nyaman dan dekat tempat hangout",
    "kost nyaman dan dekat tempat kuliner",
    "kost nyaman dan dekat tempat belanja kebutuhan sehari-hari",
    "kost nyaman dan dekat tempat belanja fashion",
    "kost nyaman dan dekat tempat belanja elektronik",
    "kost nyaman dan dekat tempat belanja furniture",
    "kost nyaman dan dekat tempat belanja peralatan rumah tangga",
    "kost nyaman dan dekat tempat belanja perlengkapan bayi",
    "kost nyaman dan dekat tempat belanja perlengkapan anak",
    "kost nyaman dan dekat tempat belanja perlengkapan sekolah",
    "kost nyaman dan dekat tempat belanja perlengkapan kantor",
    "kost nyaman dan dekat tempat belanja perlengkapan olahraga",
  ],
  ogImage: "images/depan.png", 
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
