import type { Kost } from "@/types/kost";
export const kostData: Kost[] = [
  {
    id: "kost-1",
    slug: "new-hope-kost-1",
    nama: "New Hope Kost", 
    tipeKost: ["Wanita"],
    deskripsi:
      "Deskripsi lengkap properti Kost Mawar. Jelaskan lokasi, keunggulan, suasana lingkungan, dan target penghuni (mis. dekat kampus/kantor, lingkungan tenang, akses mudah ke transportasi umum).",
    alamat: "Jl. Tunjung Biru III No.15, Palebon, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50246.", 
    coverImage: "/images/depan.png",
    iframeMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.11413906111!2d110.45682087499715!3d-6.995836893005313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d00575f254b%3A0x363bea38c8a84d7c!2sNew%20Hope%20Kost!5e0!3m2!1sid!2sid!4v1788170016257!5m2!1sid!2sid",
    fasilitasUmum: [
      "Free WiFi",
      "Free Air",
      "Area Parkir Luas Motor & Mobil",
      "Dapur Bersama",
      "Balkon",
      "Area Diskusi",
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
        nama: "Area Diskusi",
        foto: [
          "/images/kost-1/fasilitas/diskusi.jpg",
          "/images/kost-1/fasilitas/diskusi.jpg",
        ],
      },
      {
        nama: "Area Parkir",
        foto: [
          "/images/kost-1/fasilitas/parkir1.jpg",
          "/images/kost-1/fasilitas/parkir2.jpg",
          "/images/kost-1/fasilitas/parkir3.jpg", 
          
        ],
      },
    ],
    tipeKamar: [
      {
        nama: "Kamar AC",
        harga: 1000000,
        status: "Tersedia",
        deskripsi:
          "Kamar dengan AC, cocok untuk kenyamanan maksimal sepanjang hari.",
        fasilitasKamar: [
          "AC",
          "Kasur",
          "Lemari Pakaian",
          "Meja Belajar",
          "Kamar Mandi Dalam",
          "Kursi Belajar",
          "Tirai Jendela",
          "Jendela Menghadap Luar",

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
        harga: 700000,
        status: "Tersedia",
        deskripsi:
          "Kamar tanpa AC dengan sirkulasi udara alami, harga lebih ekonomis.",
        fasilitasKamar: ["Kasur", "Lemari Pakaian", "Meja Belajar", "Jendela", "Kursi Belajar", "Jendela dengan Tirai"],
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
    slug: "new-hope-kost-2",
    nama: "New Hope Kost 2", 
    tipeKost: ["Pria", "Wanita"],
    deskripsi:
      "Deskripsi lengkap properti Kost Melati. Jelaskan lokasi, keunggulan, suasana lingkungan, dan target penghuni.",
    alamat: "Jl. Tunjung Biru III No.30, Palebon, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50246", 
    coverImage: "/images/kost-2/cover.png",
    iframeMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.50709672952283!2d110.45958941543499!3d-6.995906620332947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708ce845867d21%3A0xe4def94b8ed021c7!2sJl.%20Tunjung%20Biru%20III%20No.30%2C%20Palebon%2C%20Kec.%20Pedurungan%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050246!5e0!3m2!1sid!2sid!4v1788171901659!5m2!1sid!2sid",
    fasilitasUmum: ["WiFi", "Parkir", "Teras", "Wifi", "Listrik"],
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
        nama: "Kamar Non-AC",
        harga: 600000,
        status: "Tersedia",
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
    slug: "new-hope-kost-3",
    nama: "New Hope Kost 3",
    tipeKost: ["Pria", "Wanita"],
    deskripsi:
      "Deskripsi lengkap properti Kost Anggrek. Jelaskan lokasi, keunggulan, suasana lingkungan, dan target penghuni.",
    alamat: "Jl. Udan Riris III No.33, Tlogosari Kulon, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50196", 
    coverImage: "/images/kost-3/cover.png",
    iframeMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2166443843357!2d110.46253159999999!3d-6.9837406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708cd0077eb0a1%3A0xebcb08ecf2926951!2sJl.%20Udan%20Riris%20III%20No.33%2C%20Tlogosari%20Kulon%2C%20Kec.%20Pedurungan%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050196!5e0!3m2!1sid!2sid!4v1788173247310!5m2!1sid!2sid",
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
        harga: 600000,
        status: "Tersedia",
        deskripsi: "Kamar AC eksklusif khusus putri.",
        fasilitasKamar: [
          "AC",
          "Kasur",
          "Lemari Pakaian",
          "Meja Belajar",
          "Kamar Mandi Dalam",
          "Belum Termasuk Listrik"
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
        deskripsi: "Kamar Non-AC dengan harga terjangkau.",
        fasilitasKamar: ["Kasur", "Lemari Pakaian", "Meja Belajar", "Jendela","Free Listrik"],
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
