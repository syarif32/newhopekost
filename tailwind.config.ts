import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet "Modern Corporate Real Estate".
        // Sengaja memakai token semantik di atas warna Tailwind bawaan
        // (slate/blue) supaya konsisten dipakai di seluruh komponen.
        brand: {
          primary: "#2563eb", // blue-600
          primaryHover: "#1d4ed8", // blue-700
          dark: "#1e3a8a", // blue-900
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      maxWidth: {
        container: "80rem", // setara max-w-7xl, dipakai via className langsung
      },
    },
  },
  plugins: [],
};

export default config;
