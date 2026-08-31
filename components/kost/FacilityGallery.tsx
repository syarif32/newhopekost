import Image from "next/image";
import type { GaleriFasilitas } from "@/types/kost";
import ImageGallery from "@/components/kost/ImageGallery";

interface FacilityGalleryProps {
  galeriFasilitas: GaleriFasilitas[];
}

/**
 * Menampilkan preview per-fasilitas (galeriFasilitas). Setiap card memakai
 * <ImageGallery> miliknya sendiri — galeri fasilitas tetap terpisah dari
 * galeri kamar karena masing-masing hanya menerima `foto[]` kategorinya
 * sendiri, tidak pernah dicampur.
 */
export default function FacilityGallery({
  galeriFasilitas,
}: FacilityGalleryProps) {
  if (galeriFasilitas.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {galeriFasilitas.map((fasilitas) => (
        <ImageGallery
          key={fasilitas.nama}
          images={fasilitas.foto}
          title={fasilitas.nama}
          renderTrigger={(open) => (
            <button
              type="button"
              onClick={open}
              aria-label={`Lihat galeri foto ${fasilitas.nama}`}
              className="group block w-full overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <div className="relative aspect-[4/3] w-full">
                {fasilitas.foto[0] && (
                  <Image
                    src={fasilitas.foto[0]}
                    alt={`Foto ${fasilitas.nama}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                )}
              </div>
              <p className="px-3 py-2 text-sm font-medium text-slate-700">
                {fasilitas.nama}
              </p>
            </button>
          )}
        />
      ))}
    </div>
  );
}
