/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Semua gambar berasal dari public/images (local static assets),
    // tidak ada remote image / CMS / external backend.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
