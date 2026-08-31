"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { HamburgerIcon, CloseIcon } from "@/components/ui/Icons";

/**
 * Navbar global.
 *
 * Client Component HANYA karena butuh state buka/tutup menu mobile
 * (hamburger). Data link diambil dari NAV_LINKS (lib/constants.ts),
 * bukan di-hardcode di sini.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-md text-lg font-semibold text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Navigasi utama" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md px-1 py-1 text-sm font-medium text-slate-700 transition-colors hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

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
        <ul className="space-y-1 px-4 py-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
