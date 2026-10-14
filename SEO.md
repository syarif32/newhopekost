# SEO New Hope Kost

## Konfigurasi dan publikasi

- Domain canonical berada di lib/constants.ts: https://newhopekost.com. Pastikan ini domain produksi yang benar sebelum deploy. Ubah satu nilai tersebut jika domain berbeda.
- Arahkan versi HTTP/www/domain alternatif ke domain utama dengan redirect permanen di hosting.
- Deploy perubahan ini; pastikan halaman publik dapat diakses tanpa login dan mengembalikan HTTP 200.
- Jangan blokir aset /_next/ atau gambar: Google perlu merender halaman.

## Google Search Console

Google Search Console digunakan untuk pengindeksan dan pemantauan pencarian. Google Cloud Console bukan penggantinya.

1. Buka https://search.google.com/search-console dan tambahkan properti Domain. Verifikasi memakai TXT DNS yang diberikan Google.
2. Alternatif: properti URL-prefix dengan metode HTML tag. Salin hanya nilai content ke GOOGLE_SITE_VERIFICATION di environment hosting, kemudian build/deploy ulang. Untuk lokal, salin .env.example ke .env.local. Verifikasi DNS tidak membutuhkan variabel ini.
3. Kirim https://newhopekost.com/sitemap.xml melalui menu Sitemaps.
4. Periksa beranda dan halaman setiap kost dengan URL Inspection; uji URL aktif lalu minta pengindeksan.
5. Pantau Page indexing, Performance (kueri dan halaman), serta Core Web Vitals. Pengiriman sitemap bukan jaminan indeks atau peringkat.

## Validasi setelah deploy

- Buka /robots.txt dan /sitemap.xml; pastikan semua URL memakai domain utama.
- Uji halaman detail di https://search.google.com/test/rich-results dan https://validator.schema.org/.
- Uji pengalaman mobile di https://pagespeed.web.dev/; tindak lanjuti LCP, INP, dan CLS berdasarkan hasil nyata.
- Periksa title, description, canonical, og:image, dan JSON-LD lewat sumber HTML halaman.
- Sitemap sengaja tidak memakai tanggal saat build sebagai lastModified. Tambahkan tanggal hanya jika mencerminkan perubahan konten yang sebenarnya.

## Konten dan SEO lokal

Alamat data saat ini ada di Palebon dan Tlogosari Kulon, Kecamatan Pedurungan. Konten menyebut Semarang bagian timur tanpa mengklaim alamat di Kecamatan Semarang Timur. Jangan menambahkan jarak/waktu ke kampus, ulasan, atau fasilitas yang belum diverifikasi.

Perbarui harga, ketersediaan, biaya listrik, foto, alamat, dan nomor kontak sesuai kondisi nyata. Tautan media sosial di lib/constants.ts masih menuju beranda platform; ganti dengan profil resmi sebelum mempromosikannya. Schema tidak memakai tautan placeholder tersebut.

Jika bisnis memenuhi pedoman Google Business Profile, kelola profil dengan nama, alamat, dan kontak yang konsisten serta foto aktual dan ulasan asli. Jangan membuat profil duplikat atau ulasan buatan. Tidak ada perubahan kode yang dapat menjamin posisi pertama.

## Referensi

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://support.google.com/webmasters/answer/9008080
- https://support.google.com/business/answer/7091
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
