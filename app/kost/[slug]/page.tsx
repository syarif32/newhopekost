import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllKostSlugs, getKostBySlug } from "@/data/kostData";
import { formatPrice, getStartingPrice } from "@/lib/utils";
import {
  SITE_CONFIG,
  buildWhatsAppUrl,
  getWhatsAppPropertyMessage,
} from "@/lib/constants";
import DetailNav from "@/components/kost/DetailNav";
import FacilityGallery from "@/components/kost/FacilityGallery";
import RoomCard from "@/components/kost/RoomCard";

interface KostDetailPageProps {
  params: {
    slug: string;
  };
}

/** Static params untuk seluruh properti — men-generate 3 halaman statis. */
export function generateStaticParams() {
  return getAllKostSlugs().map((slug) => ({ slug }));
}

/** Metadata dinamis per properti: nama, deskripsi, lokasi, Open Graph. */
export function generateMetadata({
  params,
}: KostDetailPageProps): Metadata {
  const kost = getKostBySlug(params.slug);

  if (!kost) {
    return {
      title: "Kost Tidak Ditemukan",
    };
  }

  const description = `${kost.nama} di ${kost.alamat}. ${kost.deskripsi}`.slice(
    0,
    160
  );

  return {
    title: kost.nama,
    description,
    alternates: {
      canonical: `/kost/${kost.slug}`,
    },
    openGraph: {
      title: `${kost.nama} | ${SITE_CONFIG.name}`,
      description,
      images: [{ url: kost.coverImage }],
      type: "website",
    },
  };
}

/**
 * Halaman detail lengkap satu properti kost.
 * Server Component murni — seluruh interaktivitas (galeri) didelegasikan
 * ke RoomCard/FacilityGallery yang membungkus ImageGallery Client Component.
 */
export default function KostDetailPage({ params }: KostDetailPageProps) {
  const kost = getKostBySlug(params.slug);

  if (!kost) {
    notFound();
  }

  const startingPrice = getStartingPrice(kost);
  const whatsappUrl = buildWhatsAppUrl(getWhatsAppPropertyMessage(kost.nama));

  return (
    <>
      {/* Hero Properti */}
      <section className="relative flex h-72 items-end overflow-hidden sm:h-80">
        <Image
          src={kost.coverImage}
          alt={`Foto ${kost.nama}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            {kost.nama}
          </h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-100">
            <span aria-hidden="true">📍</span>
            {kost.alamat}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-white/90 px-3 py-1 text-xs font-medium text-slate-800">
              {kost.tipeKost.join(" / ")}
            </span>
            <span className="text-sm font-semibold text-white">
              Mulai dari {formatPrice(startingPrice)} / bulan
            </span>
          </div>
        </div>
      </section>

      {/* Sticky internal navigation, tepat di bawah hero */}
      <DetailNav />

      {/* Deskripsi */}
      <section id="deskripsi" className="scroll-mt-32 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-blue-900 sm:text-2xl">
            Deskripsi
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {kost.deskripsi}
          </p>

          <dl className="mt-6 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Tipe Kost
              </dt>
              <dd className="mt-1 text-sm text-slate-700">
                {kost.tipeKost.join(" / ")}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Alamat
              </dt>
              <dd className="mt-1 text-sm text-slate-700">{kost.alamat}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Fasilitas Umum + Galeri Fasilitas */}
      <section id="fasilitas" className="scroll-mt-32 bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-blue-900 sm:text-2xl">
            Fasilitas
          </h2>

          {/* Daftar fasilitas (fasilitasUmum) — teks, tanpa foto */}
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
            {kost.fasilitasUmum.map((fasilitas) => (
              <li
                key={fasilitas}
                className="flex items-center gap-1.5 text-sm text-slate-600"
              >
                <span className="text-blue-600" aria-hidden="true">
                  ✓
                </span>
                {fasilitas}
              </li>
            ))}
          </ul>

          {/* Galeri fasilitas (galeriFasilitas) — foto per fasilitas */}
          {kost.galeriFasilitas.length > 0 && (
            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Galeri Fasilitas
              </h3>
              <div className="mt-4">
                <FacilityGallery galeriFasilitas={kost.galeriFasilitas} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Tipe Kamar */}
      <section id="kamar" className="scroll-mt-32 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-blue-900 sm:text-2xl">
            Tipe Kamar
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kost.tipeKamar.map((kamar) => (
              <RoomCard key={kamar.nama} kamar={kamar} />
            ))}
          </div>
        </div>
      </section>

      {/* Lokasi */}
      <section id="lokasi" className="scroll-mt-32 bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-blue-900 sm:text-2xl">
            Lokasi
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            {kost.alamat}
          </p>

          <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 shadow-sm">
            <iframe
              src={kost.iframeMap}
              title={`Lokasi ${kost.nama}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full sm:h-96"
            />
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="bg-blue-900 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Tertarik dengan {kost.nama}?
          </h2>
          <p className="mt-2 text-sm text-blue-100 sm:text-base">
            Hubungi kami untuk menanyakan ketersediaan kamar.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 sm:text-base"
          >
            Hubungi via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
