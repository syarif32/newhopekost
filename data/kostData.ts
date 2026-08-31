import type { Kost } from "@/types/kost";

/**
 * SUMBER DATA TUNGGAL untuk seluruh properti kost di website ini.
 *
 * Seluruh data di bawah (nama, alamat, harga, iframeMap, foto) adalah
 * PLACEHOLDER dan HARUS DIGANTI dengan data asli sebelum website di-deploy:
 *   - alamat        -> alamat lengkap properti sebenarnya
 *   - iframeMap      -> src iframe Google Maps Embed properti sebenarnya
 *   - coverImage/foto -> path foto asli di public/images/kost-x/...
 *
 * Nomor WhatsApp & link media sosial diatur secara global di lib/constants.ts,
 * bukan di file ini.
 *
 * Cara mendapatkan iframeMap:
 * 1. Buka Google Maps -> cari lokasi -> Share -> Embed a map -> Copy HTML
 * 2. Ambil hanya nilai atribut src="..." dari <iframe> tersebut
 */

export const kostData: Kost[] = [
  {
    id: "kost-1",
    slug: "kost-mawar",
    nama: "Kost Mawar", // GANTI: nama properti asli
    tipeKost: ["Pria", "Wanita"],
    deskripsi:
      "GANTI_DESKRIPSI: Deskripsi lengkap properti Kost Mawar. Jelaskan lokasi, keunggulan, suasana lingkungan, dan target penghuni (mis. dekat kampus/kantor, lingkungan tenang, akses mudah ke transportasi umum).",
    alamat: "GANTI_ALAMAT_LENGKAP, Tembalang, Semarang", // GANTI: alamat lengkap asli
    coverImage: "/images/kost-1/cover.webp",
    iframeMap: "GANTI_SRC_IFRAME_GOOGLE_MAPS_KOST_1",
    fasilitasUmum: [
      "WiFi",
      "Parkir Motor & Mobil",
      "Dapur Bersama",
      "Balkon",
      "CCTV",
    ],
    galeriFasilitas: [
      {
        nama: "Dapur Bersama",
        foto: [
          "/images/kost-1/fasilitas/dapur-1.webp",
          "/images/kost-1/fasilitas/dapur-2.webp",
        ],
      },
      {
        nama: "Balkon",
        foto: [
          "/images/kost-1/fasilitas/balkon-1.webp",
          "/images/kost-1/fasilitas/balkon-2.webp",
        ],
      },
      {
        nama: "Area Parkir",
        foto: [
          "/images/kost-1/fasilitas/parkir-1.webp",
          "/images/kost-1/fasilitas/parkir-2.webp",
        ],
      },
    ],
    tipeKamar: [
      {
        nama: "Kamar AC",
        harga: 950000,
        status: "Tersedia",
        deskripsi:
          "GANTI_DESKRIPSI: Kamar dengan AC, cocok untuk kenyamanan maksimal sepanjang hari.",
        fasilitasKamar: [
          "AC",
          "Kasur",
          "Lemari Pakaian",
          "Meja Belajar",
          "Kamar Mandi Dalam",
        ],
        foto: [
          "/images/kost-1/kamar/ac/ac-1.webp",
          "/images/kost-1/kamar/ac/ac-2.webp",
          "/images/kost-1/kamar/ac/ac-3.webp",
          "/images/kost-1/kamar/ac/ac-4.webp",
        ],
      },
      {
        nama: "Kamar Non-AC",
        harga: 850000,
        status: "Tersedia",
        deskripsi:
          "GANTI_DESKRIPSI: Kamar tanpa AC dengan sirkulasi udara alami, harga lebih ekonomis.",
        fasilitasKamar: ["Kasur", "Lemari Pakaian", "Meja Belajar", "Jendela"],
        foto: [
          "/images/kost-1/kamar/non-ac/non-ac-1.webp",
          "/images/kost-1/kamar/non-ac/non-ac-2.webp",
          "/images/kost-1/kamar/non-ac/non-ac-3.webp",
        ],
      },
    ],
  },
  {
    id: "kost-2",
    slug: "kost-melati",
    nama: "Kost Melati", // GANTI: nama properti asli
    tipeKost: ["Campur"],
    deskripsi:
      "GANTI_DESKRIPSI: Deskripsi lengkap properti Kost Melati. Jelaskan lokasi, keunggulan, suasana lingkungan, dan target penghuni.",
    alamat: "GANTI_ALAMAT_LENGKAP, Semarang", // GANTI: alamat lengkap asli
    coverImage: "/images/kost-2/cover.webp",
    iframeMap: "GANTI_SRC_IFRAME_GOOGLE_MAPS_KOST_2",
    fasilitasUmum: ["WiFi", "Parkir", "Ruang Bersama", "Dispenser", "CCTV"],
    galeriFasilitas: [
      {
        nama: "Ruang Bersama",
        foto: [
          "/images/kost-2/fasilitas/ruang-bersama-1.webp",
          "/images/kost-2/fasilitas/ruang-bersama-2.webp",
        ],
      },
      {
        nama: "Area Parkir",
        foto: [
          "/images/kost-2/fasilitas/parkir-1.webp",
          "/images/kost-2/fasilitas/parkir-2.webp",
        ],
      },
    ],
    tipeKamar: [
      {
        nama: "Kamar AC",
        harga: 1100000,
        status: "Tersedia",
        deskripsi: "GANTI_DESKRIPSI: Kamar AC dengan fasilitas lebih lengkap.",
        fasilitasKamar: [
          "AC",
          "Kasur",
          "Lemari Pakaian",
          "Meja Belajar",
          "Kamar Mandi Dalam",
          "TV",
        ],
        foto: [
          "/images/kost-2/kamar/ac/ac-1.webp",
          "/images/kost-2/kamar/ac/ac-2.webp",
          "/images/kost-2/kamar/ac/ac-3.webp",
        ],
      },
      {
        nama: "Kamar Non-AC",
        harga: 900000,
        status: "Penuh",
        deskripsi: "GANTI_DESKRIPSI: Kamar Non-AC, saat ini penuh.",
        fasilitasKamar: ["Kasur", "Lemari Pakaian", "Meja Belajar"],
        foto: [
          "/images/kost-2/kamar/non-ac/non-ac-1.webp",
          "/images/kost-2/kamar/non-ac/non-ac-2.webp",
        ],
      },
    ],
  },
  {
    id: "kost-3",
    slug: "kost-anggrek",
    nama: "Kost Anggrek", // GANTI: nama properti asli
    tipeKost: ["Wanita"],
    deskripsi:
      "GANTI_DESKRIPSI: Deskripsi lengkap properti Kost Anggrek. Jelaskan lokasi, keunggulan, suasana lingkungan, dan target penghuni.",
    alamat: "GANTI_ALAMAT_LENGKAP, Semarang", // GANTI: alamat lengkap asli
    coverImage: "/images/kost-3/cover.webp",
    iframeMap: "GANTI_SRC_IFRAME_GOOGLE_MAPS_KOST_3",
    fasilitasUmum: [
      "WiFi",
      "Parkir Motor",
      "Dapur Bersama",
      "Laundry",
      "CCTV",
      "Security 24 Jam",
    ],
    galeriFasilitas: [
      {
        nama: "Dapur Bersama",
        foto: [
          "/images/kost-3/fasilitas/dapur-1.webp",
          "/images/kost-3/fasilitas/dapur-2.webp",
        ],
      },
      {
        nama: "Laundry",
        foto: [
          "/images/kost-3/fasilitas/laundry-1.webp",
          "/images/kost-3/fasilitas/laundry-2.webp",
        ],
      },
    ],
    tipeKamar: [
      {
        nama: "Kamar AC",
        harga: 1000000,
        status: "Tersedia",
        deskripsi: "GANTI_DESKRIPSI: Kamar AC eksklusif khusus putri.",
        fasilitasKamar: [
          "AC",
          "Kasur",
          "Lemari Pakaian",
          "Meja Belajar",
          "Kamar Mandi Dalam",
        ],
        foto: [
          "/images/kost-3/kamar/ac/ac-1.webp",
          "/images/kost-3/kamar/ac/ac-2.webp",
          "/images/kost-3/kamar/ac/ac-3.webp",
        ],
      },
      {
        nama: "Kamar Non-AC",
        harga: 800000,
        status: "Tersedia",
        deskripsi: "GANTI_DESKRIPSI: Kamar Non-AC dengan harga terjangkau.",
        fasilitasKamar: ["Kasur", "Lemari Pakaian", "Meja Belajar", "Jendela"],
        foto: [
          "/images/kost-3/kamar/non-ac/non-ac-1.webp",
          "/images/kost-3/kamar/non-ac/non-ac-2.webp",
        ],
      },
    ],
  },
];

/**
 * Helper untuk mengambil satu properti berdasarkan slug.
 * Dipakai oleh /kost/[slug]/page.tsx bersama notFound().
 */
export function getKostBySlug(slug: string): Kost | undefined {
  return kostData.find((kost) => kost.slug === slug);
}

/**
 * Helper untuk generateStaticParams() — daftar seluruh slug yang valid.
 */
export function getAllKostSlugs(): string[] {
  return kostData.map((kost) => kost.slug);
}
