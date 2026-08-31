import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWA from "@/components/layout/FloatingWA";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
  },
};

/**
 * Root layout. Server Component murni (tidak ada "use client").
 * Navbar & Footer dirender SATU KALI di sini, jadi setiap page.tsx
 * tidak perlu (dan tidak boleh) merender ulang keduanya.
 * FloatingWA juga dirender satu kali di sini — lihat catatan di
 * components/layout/FloatingWA.tsx soal bagaimana ia mengenali halaman
 * /kost/[slug] secara otomatis.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-poppins text-slate-800 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  );
}
