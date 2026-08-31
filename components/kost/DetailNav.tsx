"use client";

import { useState, useEffect } from "react";

const DETAIL_SECTIONS = [
  { id: "deskripsi", label: "Deskripsi" },
  { id: "fasilitas", label: "Fasilitas" },
  { id: "kamar", label: "Kamar" },
  { id: "lokasi", label: "Lokasi" },
] as const;

/**
 * Sticky internal navigation untuk halaman /kost/[slug].
 * Menggunakan IntersectionObserver untuk otomatis mengaktifkan 
 * menu berdasarkan bagian yang sedang di-scroll.
 */
export default function DetailNav() {
  const [activeSection, setActiveSection] = useState<string>("deskripsi");

  useEffect(() => {
    // Membuat pendeteksi posisi elemen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Zona deteksi disesuaikan dengan tinggi kedua navbar yang melayang (-150px)
      { rootMargin: "-150px 0px -60% 0px" } 
    );

    // Daftarkan semua section ke dalam observer
    DETAIL_SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Bersihkan observer saat komponen dilepas (unmount)
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Navigasi bagian properti"
      className="sticky top-16 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex gap-6 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {DETAIL_SECTIONS.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <li key={section.id} className="flex-shrink-0">
                <a
                  href={`#${section.id}`}
                  className={`inline-block whitespace-nowrap px-1 py-1 text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isActive
                      ? "border-b-2 border-blue-600 font-bold text-blue-600"
                      : "border-b-2 border-transparent font-medium text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}