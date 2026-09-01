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
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — Sewa Kost Nyaman & Murah`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  
  description: SITE_CONFIG.description,
  
  keywords: [
   "kost murah",
    "sewa kost",
    "kost eksklusif",
    "kost Semarang",
    "kost bebas",
    "USM",
    "AMNI",
    "Semarang Timur",
    "kost mahasiswa",
    "New Hope Kost",
    "info kost",
    "kost nyaman",
    "kost lengkap",
    "kost fasilitas lengkap",
    "kost strategis",
    "kost dekat kampus",
    "kost aman",
    "kost bersih",
    "kost nyaman dan murah",
    "kost nyaman dan lengkap",
    "kost nyaman dan strategis",
    "kost nyaman dan aman",
    "kost nyaman dan bersih",
    "kost nyaman dan dekat kampus",
    "kost nyaman dan dekat fasilitas umum",
    "kost nyaman dan dekat transportasi",
    "kost nyaman dan dekat pusat kota",
    "kost nyaman dan dekat tempat makan",
    "kost nyaman dan dekat tempat belanja",
    "kost nyaman dan dekat tempat hiburan",
    "kost nyaman dan dekat tempat ibadah",
    "kost nyaman dan dekat tempat olahraga",
    "kost nyaman dan dekat tempat wisata",
    "kost nyaman dan dekat tempat rekreasi",
    "kost nyaman dan dekat tempat nongkrong",
    "kost nyaman dan dekat tempat hangout",
    "kost nyaman dan dekat tempat kuliner",
    "kost nyaman dan dekat tempat belanja kebutuhan sehari-hari",
    "kost nyaman dan dekat tempat belanja fashion",
    "kost nyaman dan dekat tempat belanja elektronik",
    "kost nyaman dan dekat tempat belanja furniture",
    "kost nyaman dan dekat tempat belanja peralatan rumah tangga",
    "kost nyaman dan dekat tempat belanja perlengkapan bayi",
    "kost nyaman dan dekat tempat belanja perlengkapan anak",
    "kost nyaman dan dekat tempat belanja perlengkapan sekolah",
    "kost nyaman dan dekat tempat belanja perlengkapan kantor",
    "kost nyaman dan dekat tempat belanja perlengkapan olahraga",
  ],
  
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    title: `${SITE_CONFIG.name} — Sewa Kost Nyaman & Murah`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — Sewa Kost Nyaman & Murah`,
    description: SITE_CONFIG.description,
    images: ["/og-image.jpg"],
  },


  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-poppins text-slate-800 antialiased">
        <Navbar />
    
        <main className="flex-1 overflow-x-clip">{children}</main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  );
}