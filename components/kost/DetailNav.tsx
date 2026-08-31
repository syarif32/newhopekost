const DETAIL_SECTIONS = [
  { id: "deskripsi", label: "Deskripsi" },
  { id: "fasilitas", label: "Fasilitas" },
  { id: "kamar", label: "Kamar" },
  { id: "lokasi", label: "Lokasi" },
] as const;

/**
 * Sticky internal navigation untuk halaman /kost/[slug].
 * Server Component — hanya anchor link native (#deskripsi, dst), tidak ada
 * state, tidak membuat route baru.
 *
 * `top-16` disengaja disamakan dengan tinggi Navbar global (h-16) supaya
 * nav ini menempel tepat di bawah Navbar saat sama-sama sticky.
 */
export default function DetailNav() {
  return (
    <nav
      aria-label="Navigasi bagian properti"
      className="sticky top-16 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul
          className="flex gap-6 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {DETAIL_SECTIONS.map((section) => (
            <li key={section.id} className="flex-shrink-0">
              <a
                href={`#${section.id}`}
                className="inline-block whitespace-nowrap rounded-md px-1 py-1 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
