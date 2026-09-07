import Link from "next/link";
import Image from "next/image";
import type { Kost } from "@/types/kost";
import { formatPrice, getStartingPrice } from "@/lib/utils";

interface KostCardProps {
  kost: Kost;
}

const MAX_FEATURED_FACILITIES = 4;

export default function KostCard({ kost }: KostCardProps) {
  const startingPrice = getStartingPrice(kost);
  
  // LOGIKA BARU: Merangkum tipe kamar menjadi "AC" atau "Non-AC"
  const roomCategories = new Set<string>();
  kost.tipeKamar.forEach((kamar) => {
    const nameLower = kamar.nama.toLowerCase();
    if (nameLower.includes("non-ac") || nameLower.includes("non ac")) {
      roomCategories.add("Non-AC");
    } else if (nameLower.includes("ac")) {
      roomCategories.add("AC");
    } else {
      roomCategories.add(kamar.nama.replace(/^Kamar\s+/i, ""));
    }
  });
  const roomTypeNames = Array.from(roomCategories).join(" • ");

  const featuredFacilities = kost.fasilitasUmum.slice(
    0,
    MAX_FEATURED_FACILITIES
  );

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={kost.coverImage}
          alt={`Foto ${kost.nama}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-blue-900">{kost.nama}</h3>
        <p className="mt-1 flex items-start gap-1.5 text-sm text-slate-600">
          <span aria-hidden="true"></span>
          <span>{kost.alamat}</span>
        </p>

        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Mulai dari
          </p>
          <p className="text-xl font-bold text-slate-800">
            {formatPrice(startingPrice)}
            <span className="text-sm font-normal text-slate-500"> / bulan</span>
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Tipe Kost
            </p>
            {/* tipeKost bisa berisi lebih dari satu nilai, mis. ["Pria", "Wanita"] */}
            <p className="mt-1 text-sm text-slate-700">
              {kost.tipeKost.join(" / ")}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Tipe Kamar
            </p>
            {/* Ditambahkan class line-clamp-2 agar teks super panjang otomatis dipotong rapi */}
            <p className="mt-1 text-sm text-slate-700 line-clamp-2">{roomTypeNames}</p>
          </div>
        </div>

        <div className="mt-4 mb-5">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Fasilitas
          </p>
          <ul className="mt-1.5 space-y-1">
            {featuredFacilities.map((fasilitas) => (
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
        </div>

        <Link
          href={`/kost/${kost.slug}`}
          className="mt-auto inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:shadow active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}