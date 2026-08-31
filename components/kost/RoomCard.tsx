import Image from "next/image";
import type { TipeKamar } from "@/types/kost";
import { formatPrice } from "@/lib/utils";
import ImageGallery from "@/components/kost/ImageGallery";

interface RoomCardProps {
  kamar: TipeKamar;
}

/**
 * Card untuk satu tipe kamar (mis. "Kamar AC" atau "Kamar Non-AC").
 * Server Component — interaksi galeri didelegasikan sepenuhnya ke
 * <ImageGallery>, yang merupakan Client Component.
 */
export default function RoomCard({ kamar }: RoomCardProps) {
  const isAvailable = kamar.status === "Tersedia";
  const coverPhoto = kamar.foto[0];

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full">
        {coverPhoto && (
          <Image
            src={coverPhoto}
            alt={`Foto ${kamar.nama}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover"
            loading="lazy"
          />
        )}
        <span
          className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-xs font-semibold text-white ${
            isAvailable ? "bg-emerald-700" : "bg-slate-500"
          }`}
        >
          {kamar.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-blue-900">{kamar.nama}</h3>
        <p className="mt-1 text-lg font-bold text-slate-800">
          {formatPrice(kamar.harga)}
          <span className="text-sm font-normal text-slate-500"> /bulan</span>
        </p>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {kamar.deskripsi}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {kamar.fasilitasKamar.map((fasilitas) => (
            <li
              key={fasilitas}
              className="rounded-md bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
            >
              {fasilitas}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <ImageGallery
            images={kamar.foto}
            title={kamar.nama}
            renderTrigger={(open) => (
              <button
                type="button"
                onClick={open}
                className="w-full rounded-md border border-blue-600 px-4 py-2.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Lihat Galeri
              </button>
            )}
          />
        </div>
      </div>
    </div>
  );
}
