import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import KostCard from "@/components/kost/KostCard";
import { kostData } from "@/data/kostData";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Bandingkan 3 lokasi kost dengan tipe kamar dan fasilitas berbeda, lalu hubungi kami langsung via WhatsApp.",
  alternates: {
    canonical: "/",
  },
};

const USP_ITEMS = [
  {
    title: "3 Lokasi Strategis",
    description:
      "Pilih lokasi kost yang paling dekat dengan kampus, kantor, atau aktivitas harian Anda.",
  },
  {
    title: "Pilihan Kamar Fleksibel",
    description:
      "Tersedia tipe kamar AC dan Non-AC di setiap properti, sesuai kebutuhan dan budget.",
  },
  {
    title: "Hubungi Pemilik dengan Mudah",
    description:
      "Tanyakan ketersediaan kamar kapan saja langsung melalui WhatsApp.",
  },
];

/**
 * Homepage. Server Component. Foto hero diambil dari coverImage properti
 * pertama pada data/kostData.ts — bukan gambar baru yang dikarang.
 */
export default function HomePage() {
  const heroKost = kostData[0];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden sm:min-h-[560px]">
        {heroKost && (
          <Image
            src={heroKost.coverImage}
            alt="Suasana kost"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Temukan Kost Nyaman di Lokasi Strategis
          </h1>
          <p className="mt-4 text-base text-slate-100 sm:text-lg">
            Bandingkan 3 pilihan lokasi kost dan temukan yang paling sesuai
            dengan kebutuhan dan aktivitas Anda.
          </p>
          <Link
            href="/kost"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 sm:text-base"
          >
            Lihat Daftar Kost
          </Link>
        </div>
      </section>

      {/* USP */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {USP_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <p className="text-lg font-semibold text-blue-900">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview 3 Kost */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-blue-900 sm:text-3xl">
              Pilihan Kost Kami
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Tiga lokasi kost yang bisa Anda bandingkan langsung sebelum
              memutuskan.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kostData.map((kost) => (
              <KostCard key={kost.id} kost={kost} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Siap Menemukan Kost yang Tepat?
          </h2>
          <p className="mt-3 text-sm text-blue-100 sm:text-base">
            Jelajahi seluruh pilihan lokasi, tipe kamar, dan fasilitas kami.
          </p>
          <Link
            href="/kost"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 sm:text-base"
          >
            Lihat Semua Kost
          </Link>
        </div>
      </section>
    </>
  );
}
