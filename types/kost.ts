/**
 * Tipe data inti untuk website katalog kost.
 * Seluruh data website (data/kostData.ts) harus mengikuti tipe-tipe ini.
 */

/** Kategori penghuni yang diterima oleh sebuah properti kost. */
export type TipeKost = "Pria" | "Wanita" | "Campur";

/** Status ketersediaan sebuah tipe kamar. */
export type StatusKamar = "Tersedia" | "Penuh";

/**
 * Satu grup foto fasilitas umum (mis. "Dapur Bersama", "Balkon").
 * Dipakai untuk menampilkan galeri fasilitas per-kategori di halaman detail.
 */
export interface GaleriFasilitas {
  /** Nama fasilitas, mis. "Dapur Bersama" */
  nama: string;
  /** Kumpulan path foto untuk fasilitas ini (public/images/...) */
  foto: string[];
}

/**
 * Satu tipe kamar dalam sebuah properti kost (mis. "AC", "Non-AC").
 * AC dan Non-AC WAJIB direpresentasikan sebagai objek TipeKamar terpisah,
 * masing-masing dengan harga, status, deskripsi, fasilitas, dan galeri foto sendiri.
 */
export interface TipeKamar {
  /** Nama/identitas tipe kamar, mis. "Kamar AC", "Kamar Non-AC" */
  nama: string;
  /** Harga sewa per bulan dalam Rupiah (angka murni, format saat render) */
  harga: number;
  /** Status ketersediaan kamar ini */
  status: StatusKamar;
  /** Deskripsi singkat khusus tipe kamar ini */
  deskripsi: string;
  /** Daftar fasilitas yang tersedia di dalam kamar ini */
  fasilitasKamar: string[];
  /** Galeri foto khusus tipe kamar ini (tidak boleh tercampur tipe lain) */
  foto: string[];
}

/**
 * Representasi lengkap satu properti kost.
 */
export interface Kost {
  /** Identifier unik/stabil, dipakai internal (bukan untuk URL) */
  id: string;
  /** Slug unik untuk URL /kost/[slug] */
  slug: string;
  /** Nama properti kost */
  nama: string;
  /** Kategori penghuni yang diterima; bisa lebih dari satu (contoh: ["Pria", "Wanita"]) */
  tipeKost: TipeKost[];
  /** Deskripsi lengkap properti, ditampilkan di halaman detail */
  deskripsi: string;
  /** Alamat lengkap properti */
  alamat: string;
  /** Path gambar cover/utama properti (dipakai di card & hero) */
  coverImage: string;
  /** URL src untuk iframe Google Maps embed */
  iframeMap: string;
  /** Daftar nama fasilitas umum (ditampilkan sebagai list, tanpa foto) */
  fasilitasUmum: string[];
  /** Galeri foto fasilitas, dikelompokkan per nama fasilitas */
  galeriFasilitas: GaleriFasilitas[];
  /** Daftar tipe kamar yang tersedia di properti ini (mis. AC & Non-AC) */
  tipeKamar: TipeKamar[];
}
