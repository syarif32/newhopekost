
import { pageMetadata } from "@/lib/seo";
import KostCard from "@/components/kost/KostCard";
import { kostData } from "@/data/kostData";

export const metadata = pageMetadata("Daftar Kost Palebon & Tlogosari, Semarang", "Bandingkan lokasi New Hope Kost di Palebon dan Tlogosari Kulon, Pedurungan, Semarang. Lihat harga bulanan, tipe kamar AC dan Non-AC, serta fasilitas.", "/kost");

export default function KostDirectoryPage() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-2xl font-bold text-blue-900 sm:text-3xl">
            Daftar Kost di Palebon dan Tlogosari, Semarang
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Tersedia 3 pilihan lokasi kost dengan tipe kamar dan fasilitas
            yang berbeda. Bandingkan ketiganya untuk menemukan yang paling
            cocok untuk Anda.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="sr-only">Daftar Properti Kost</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kostData.map((kost) => (
              <KostCard key={kost.id} kost={kost} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
