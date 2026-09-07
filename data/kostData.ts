import type { Kost } from "@/types/kost";

export const kostData: Kost[] = [
  {
    id: "kost-1",
    slug: "new-hope-kost-1",
    nama: "New Hope Kost", 
    tipeKost: ["Wanita"],
    deskripsi:
      "New Hope Kost 1 hadir sebagai hunian eksklusif yang dirancang khusus untuk kenyamanan dan keamanan mahasiswi maupun pekerja wanita di Semarang. Terletak di kawasan Palebon, kost ini menonjolkan fasilitas area komunal yang lengkap, mulai dari dapur bersama, balkon untuk bersantai, hingga area diskusi yang nyaman. Keunggulan utamanya adalah area parkir yang luas (menampung motor dan mobil) serta pengawasan CCTV 24 jam. Dengan pilihan kamar ber-AC maupun Non-AC yang sudah full-furnished, Anda dapat merasakan suasana tinggal yang tenang, aman, dan terasa seperti di rumah sendiri.",
    alamat: "Jl. Tunjung Biru III No.15, Palebon, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50246.", 
    coverImage: "/images/depan.png",
    iframeMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.11413906111!2d110.45682087499715!3d-6.995836893005313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d00575f254b%3A0x363bea38c8a84d7c!2sNew%20Hope%20Kost!5e0!3m2!1sid!2sid!4v1788170016257!5m2!1sid!2sid",
    fasilitasUmum: [
      "WiFi",
      "Air",
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
          "/images/kost-1/fasilitas/dapur.png",
        ],
      },
      {
        nama: "Balkon",
        foto: [
          "/images/kost-1/fasilitas/balkon.png",
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
      {
        nama: "Kamar Mandi Dalam",
        foto: [
          "/images/kost-1/fasilitas/toilet.png",
          
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
          "/images/kost-1/kamar/ac/k1.jpg",
          "/images/kost-1/kamar/ac/k2.jpg",
          "/images/kost-1/kamar/ac/k3.jpg",
          "/images/kost-1/kamar/ac/k4.jpg",
          "/images/kost-1/kamar/ac/k5.jpg",
          "/images/kost-1/kamar/ac/k6.jpg",
          "/images/kost-1/kamar/ac/k7.jpg",
          "/images/kost-1/kamar/ac/k8.jpg",
          "/images/kost-1/kamar/ac/k9.jpg",

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
          "/images/kost-1/kamar/non-ac/k1.jpg",
          "/images/kost-1/kamar/non-ac/k2.jpg",
          "/images/kost-1/kamar/non-ac/k3.jpg",
          "/images/kost-1/kamar/non-ac/k4.jpg",
          
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
      "Mencari hunian dengan opsi yang fleksibel? New Hope Kost 2 adalah jawabannya. Mengusung konsep kost campur (Pria & Wanita), cabang ini menawarkan ragam pilihan yang menyesuaikan kebutuhan Anda. Bagi mahasiswa yang mengutamakan budget, tersedia kamar Non-AC yang ekonomis namun tetap nyaman. Sementara bagi Anda yang membutuhkan privasi dan ruang lebih—seperti pasutri atau profesional—tersedia Tipe Kamar Gabungan eksklusif yang dilengkapi ruang tamu pribadi, dapur, Smart TV, dan AC layaknya sebuah apartemen mini. Dilengkapi dengan teras asri dan area diskusi, kost ini menawarkan keseimbangan antara kenyamanan dan harga yang terjangkau.",
    alamat: "Jl. Tunjung Biru III No.30, Palebon, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50246", 
    coverImage: "/images/kost-2/cover.png",
    iframeMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.50709672952283!2d110.45958941543499!3d-6.995906620332947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708ce845867d21%3A0xe4def94b8ed021c7!2sJl.%20Tunjung%20Biru%20III%20No.30%2C%20Palebon%2C%20Kec.%20Pedurungan%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050246!5e0!3m2!1sid!2sid!4v1788171901659!5m2!1sid!2sid",
    fasilitasUmum: ["WiFi", "Parkir", "Teras", "Air", "Listrik"],
    galeriFasilitas: [
      {
        nama: "Ruang Bersama",
        foto: [
          "/images/kost-2/fasilitas/teras.jpg",
        ],
      },
      {
        nama: "Area Parkir",
        foto: [
          "/images/kost-2/fasilitas/parkir1.jpg",
        ],
      },{
        nama: "Area Diskusi",
        foto: [
          "/images/kost-2/fasilitas/diskusi.jpg",
        ],
      },
    ],
    tipeKamar: [
      {
        nama: "Kamar Non-AC",
        harga: 600000,
        status: "Tersedia",
        deskripsi: "Kamar Non-AC dengan sirkulasi udara alami, harga lebih ekonomis. Cocok untuk mahasiswa yang ingin hemat biaya. Kamar dilengkapi dengan fasilitas dasar seperti kasur, lemari pakaian, meja belajar, dan kamar mandi dalam.",
        fasilitasKamar: ["Kasur", "Lemari Pakaian", "Meja Belajar", "Kamar Mandi Dalam", "Jendela", "Kursi Belajar"],
        foto: [
          "/images/kost-2/kamar/non-ac/kamar1.jpg",
          "/images/kost-2/kamar/non-ac/kamar2.jpg",
          "/images/kost-2/kamar/non-ac/kamar3.jpg",

        ],
      },
      {
        nama: "Kamar Gabungan",
        harga: 2000000,
        status: "Tersedia",
        deskripsi: "Dua kamar digabung menjadi satu unit, cocok untuk pasangan. Lengkap dengan Ruang Tamu dan Dapur,Kamar Mandi Dalam.",
        fasilitasKamar: ["Kasur", "Lemari Pakaian", "Meja Belajar", "Ruang Tamu", "Dapur", "Kamar Mandi Dalam", "Smart TV", "AC"],
        foto: [
          "/images/kost-2/kamar/ac/kamar.jpg",
          "/images/kost-2/kamar/ac/ruangtamu.jpg",
          "/images/kost-2/kamar/ac/dapur.jpg",
          "/images/kost-2/kamar/ac/toilet.jpg",
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
      "Berlokasi strategis di Tlogosari Kulon, New Hope Kost 3 merupakan hunian dinamis yang cocok bagi pria maupun wanita dengan berbagai pilihan budget. Cabang ini memiliki variasi kamar terlengkap; mulai dari kamar eksklusif, kamar bebas listrik, kamar mandi dalam/luar, hingga opsi lantai atas dan bawah yang bisa disesuaikan dengan kebutuhan Anda. Kehidupan bersosialisasi dan kenyamanan penghuni sangat diperhatikan dengan hadirnya fasilitas komunal yang luas, seperti 2 ruang diskusi, ruang tamu bersama, dapur, balkon, hingga area laundry. Lingkungannya yang hidup menjadikan New Hope Kost 3 pilihan sempurna bagi mahasiswa dan pekerja yang mencari hunian nyaman dengan harga yang sangat fleksibel.",
    alamat: "Jl. Udan Riris III No.33, Tlogosari Kulon, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50196", 
    coverImage: "/images/kost-3/cover.png",
    iframeMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2166443843357!2d110.46253159999999!3d-6.9837406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708cd0077eb0a1%3A0xebcb08ecf2926951!2sJl.%20Udan%20Riris%20III%20No.33%2C%20Tlogosari%20Kulon%2C%20Kec.%20Pedurungan%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050196!5e0!3m2!1sid!2sid!4v1788173247310!5m2!1sid!2sid",
    fasilitasUmum: [
      "WiFi",
      "Parkir Motor",
      "Area Jemur",
      "Balkon",
      "Area Diskusi",
      "CCTV",
      "Parkir",
      "2 Ruang Diskusi",
      "Kamar Mandi Bersama",
      "Ruang Tamu Bersama",
    ],
    galeriFasilitas: [
      {
        nama: "Teras",
        foto: [
          "/images/kost-3/fasilitas/teras.jpeg",
          
        ],
      },
      {
        nama: "Balkon",
        foto: [
          "/images/kost-3/fasilitas/balkon.jpeg",
          "/images/kost-3/fasilitas/view.jpeg",
          
        ],
      },
      {
        nama: "Area Diskusi",
        foto: [
          "/images/kost-3/fasilitas/diskusi.jpeg",
          "/images/kost-3/fasilitas/diskusi2.jpeg",
        ],
      },
      {
        nama: "Ruang Tamu Bersama",
        foto: [
          "/images/kost-3/fasilitas/rt.jpeg",
          
        ],
      },
      {
        nama: "Kamar Mandi Bersama",
        foto: [
          "/images/kost-3/fasilitas/image.png",
          "/images/kost-3/fasilitas/toilet.png",
          "/images/kost-3/fasilitas/image.png",
        ],
      },
      {
        nama: "Area Jemur",
        foto: [
          "/images/kost-3/fasilitas/jemur.png",
          
        ],
      },
    ],
    tipeKamar: [
      // {
      //   nama: "Kamar AC",
      //   harga: 600000,
      //   status: "Tersedia",
      //   deskripsi: "Kamar AC eksklusif khusus putri.",
      //   fasilitasKamar: [
      //     "AC",
      //     "Kasur",
      //     "Lemari Pakaian",
      //     "Meja Belajar",
      //     "Kamar Mandi Dalam",
      //     "Belum Termasuk Listrik"
      //   ],
      //   foto: [
      //     "/images/kost-3/kamar/ac/ac-1.webp",
      //     "/images/kost-3/kamar/ac/ac-2.webp",
      //     "/images/kost-3/kamar/ac/ac-3.webp",
      //   ],
      // },
      
      // {
      //   nama: "Kamar Mandi Dalam Non-AC",
      //   harga: 700000,
      //   status: "Tersedia",
      //   deskripsi: "Kamar Mandi Dalam Non-AC, free listrik.",
      //   fasilitasKamar: ["Kamar Mandi Dalam", "Free Listrik", "Kasur", "Lemari Pakaian"],
      //   foto: [

      //   ],
      // },
      {
        nama: "Kamar Mandi Dalam AC (Bawah)",
        harga: 1300000,
        status: "Tersedia",
        deskripsi: "Kamar Mandi Dalam ber-AC di lantai bawah, harga belum termasuk token listrik.",
        fasilitasKamar: ["Kamar Mandi Dalam", "AC", "Belum Termasuk Token Listrik", "Kasur", "Lemari Pakaian"],
        foto: [
          "/images/kost-3/kamar/ackmd/k2.jpeg",
          "/images/kost-3/kamar/ackmd/ki.jpeg",
          "/images/kost-3/kamar/ackmd/km.jpeg",
        ],
      },
      {
        nama: "Kamar Mandi Dalam AC (Atas)",
        harga: 1100000,
        status: "Tersedia",
        deskripsi: "Kamar Mandi Dalam ber-AC di lantai atas, harga belum termasuk token listrik.",
        fasilitasKamar: ["Kamar Mandi Dalam", "AC", "Belum Termasuk Token Listrik", "Kasur", "Lemari Pakaian"],
        foto: [
          "/images/kost-3/kamar/ackmda/k2.jpeg",
          "/images/kost-3/kamar/ackmda/k1.jpeg",
          "/images/kost-3/kamar/ackmda/k3.jpeg",
        ],
      },
      {
        nama: "Kamar Mandi Luar AC Lantai Atas",
        harga: 900000,
        status: "Tersedia",
        deskripsi: "Kamar ber-AC dengan kamar mandi luar, harga belum termasuk token listrik.",
        fasilitasKamar: ["Kamar Mandi Luar", "AC", "Belum Termasuk Token Listrik", "Kasur", "Lemari Pakaian"],
        foto: [
          "/images/kost-3/kamar/ackl/k1.jpeg",
          "/images/kost-3/kamar/ackl/k2.jpeg",
          "/images/kost-3/kamar/ackl/k4.jpeg",
        ],
      },
      {
        nama: "Kamar Mandi Luar AC Lantai Atas",
        harga: 900000,
        status: "Tersedia",
        deskripsi: "Kamar ber-AC dengan kamar mandi luar, harga belum termasuk token listrik.",
        fasilitasKamar: ["Kamar Mandi Luar", "AC", "Belum Termasuk Token Listrik", "Kasur", "Lemari Pakaian"],
        foto: [
          "/images/kost-3/kamar/acklbb/k2.jpeg",
          "/images/kost-3/kamar/acklbb/k1.jpeg",
          "/images/kost-3/kamar/acklbb/k3.jpeg",
        ],
      },
      {
        nama: "Kamar Mandi Luar AC (Bawah)",
        harga: 850000,
        status: "Tersedia",
        deskripsi: "Kamar ber-AC dengan kamar mandi luar di lantai bawah, harga belum termasuk token listrik.",
        fasilitasKamar: ["Kamar Mandi Luar", "AC", "Belum Termasuk Token Listrik", "Kasur", "Lemari Pakaian"],
        foto: [
          "/images/kost-3/kamar/acklb/k1.jpeg",
          "/images/kost-3/kamar/acklb/k2.jpeg",
          "/images/kost-3/kamar/acklb/k3.jpeg",
          
        ],
      },
      {
        nama: "Non-AC Kamar Mandi Dalam",
        harga:700000,
        status: "Tersedia",
        deskripsi: "Kamar Non-AC dengan harga terjangkau.",
        fasilitasKamar: ["Kasur", "Lemari Pakaian", "Meja Belajar", "Jendela","Free Listrik", "Kursi Belajar"],
        foto: [
          "/images/kost-3/kamar/non-ac/k2.jpeg",
          "/images/kost-3/kamar/non-ac/k1.jpeg",
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