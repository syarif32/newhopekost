"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { HamburgerIcon, CloseIcon } from "@/components/ui/Icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const checkIsActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand & Logo */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="group flex items-center gap-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <div className="relative h-8 w-8 overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo.png" 
                alt={`Logo ${SITE_CONFIG.name}`}
                fill
                sizes="( max-width: 768px ) 100vw, ( max-width: 1200px ) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            {/* Teks Nama Kost */}
            <span className="text-lg font-bold text-blue-900">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Menu & Button Container */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <nav aria-label="Navigasi utama">
              <ul className="flex items-center gap-6">
                {NAV_LINKS.map((link) => {
                  const isActive = checkIsActive(link.href);
                  
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`rounded-md px-2 py-1 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                          isActive
                            ? "text-blue-600 font-bold"
                            : "text-slate-700 hover:text-blue-600"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <Link
              href="/kontak"
              className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Hubungi Sekarang
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 md:hidden"
          >
            <span className="sr-only">
              {isMenuOpen ? "Tutup menu" : "Buka menu"}
            </span>
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <nav
        id="mobile-menu"
        aria-label="Navigasi mobile"
        className={`border-t border-slate-200 bg-white md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-1 px-4 py-4">
          {NAV_LINKS.map((link) => {
            const isActive = checkIsActive(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          
          <li className="pt-4 pb-2">
            <Link
              href="/kontak"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-md bg-blue-600 px-3 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Hubungi Sekarang
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}