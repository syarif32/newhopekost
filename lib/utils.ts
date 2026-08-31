import type { Kost } from "@/types/kost";

/**
 * Formatter harga standar untuk seluruh situs.
 * Contoh: formatPrice(850000) -> "Rp850.000"
 */
const rupiahFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number): string {
  return rupiahFormatter.format(amount).replace(/\s/g, "");
}

/**
 * Mengambil harga terendah dari seluruh tipeKamar sebuah properti.
 * Dipakai di Property Card (/kost) untuk menampilkan "Mulai dari".
 */
export function getStartingPrice(kost: Kost): number {
  return Math.min(...kost.tipeKamar.map((kamar) => kamar.harga));
}

/**
 * Menggabungkan class Tailwind secara aman, mengabaikan nilai falsy.
 * Utility ringan pengganti library `clsx` agar tidak menambah dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
