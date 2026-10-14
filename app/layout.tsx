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
  title: { default: SITE_CONFIG.name, template: "%s | " + SITE_CONFIG.name },
  description: SITE_CONFIG.description,
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
  robots: { index: true, follow: true },
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