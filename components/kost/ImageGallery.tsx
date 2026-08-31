"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode, type TouchEvent } from "react";
import Image from "next/image";
import {
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/ui/Icons";

interface ImageGalleryProps {
  /** Daftar path foto. Wajib berasal dari satu kategori saja (tidak dicampur). */
  images: string[];
  /** Judul galeri, ditampilkan di header modal & dipakai untuk alt text. */
  title: string;
  /**
   * Render-prop untuk trigger pembuka modal. Menerima fungsi `open` yang
   * harus dipanggil oleh elemen trigger (biasanya lewat onClick).
   * Pola ini membuat ImageGallery generik: bisa dipakai sebagai tombol
   * "Lihat Galeri" (RoomCard) maupun sebagai card fasilitas yang bisa diklik
   * (FacilityGallery), tanpa membuat dua sistem modal berbeda.
   */
  renderTrigger: (open: () => void) => ReactNode;
}

const SWIPE_THRESHOLD_PX = 40;

/**
 * Komponen galeri + modal reusable. Satu-satunya Client Component di
 * Phase 3 karena butuh state (index aktif, buka/tutup) dan interaksi
 * browser (keyboard, touch, body scroll lock).
 *
 * Tidak memakai library modal/carousel eksternal — murni React state
 * + Tailwind.
 */
export default function ImageGallery({
  images,
  title,
  renderTrigger,
}: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalPanelRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const openModal = useCallback(() => {
    setActiveIndex(0);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Cegah body scroll saat modal terbuka.
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Fokus ke tombol close saat modal terbuka + keyboard support
  // (Escape untuk menutup, panah kiri/kanan untuk navigasi).
  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();

      // Focus trap ringan: Tab/Shift+Tab tidak boleh keluar dari modal.
      if (event.key === "Tab") {
        const panel = modalPanelRef.current;
        if (!panel) return;
        const focusable = panel.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal, showPrev, showNext]);

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > SWIPE_THRESHOLD_PX) showPrev();
    else if (deltaX < -SWIPE_THRESHOLD_PX) showNext();
    touchStartX.current = null;
  }

  if (images.length === 0) return null;

  return (
    <>
      {renderTrigger(openModal)}

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeri foto ${title}`}
          onClick={closeModal}
        >
          <div
            ref={modalPanelRef}
            className="relative flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-lg bg-white shadow-sm"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <p className="text-sm font-semibold text-slate-800">
                {title}
                <span className="ml-2 font-normal text-slate-500">
                  {activeIndex + 1}/{images.length}
                </span>
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                aria-label="Tutup galeri"
                className="rounded-md p-1.5 text-slate-600 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Foto utama */}
            <div className="relative w-full flex-1 bg-slate-100">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                <Image
                  src={images[activeIndex]}
                  alt={`${title} - foto ${activeIndex + 1} dari ${images.length}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority={false}
                />
              </div>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label="Foto sebelumnya"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-md bg-white/90 p-2 text-slate-700 shadow-sm hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Foto berikutnya"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-white/90 p-2 text-slate-700 shadow-sm hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto border-t border-slate-200 p-3">
                {images.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Lihat foto ke-${index + 1}`}
                    aria-current={index === activeIndex}
                    className={`relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-md border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      index === activeIndex
                        ? "border-blue-600"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
