# Virtual Store

Website landing page untuk online shop yang sederhana, elegan, dan profesional.

## Fitur

- Landing page yang menarik dan responsif
- Halaman produk dengan filter dan pencarian
- Detail produk dengan galeri dan deskripsi
- Sistem admin untuk mengelola produk
- Mendukung format mata uang Rupiah (IDR) dan Waktu Indonesia Barat (WIB)

## Teknologi yang Digunakan

- Next.js - Framework React untuk aplikasi web
- TypeScript - Superset JavaScript dengan tipe statis
- Tailwind CSS - Framework CSS untuk desain yang cepat
- Font Awesome - Ikon dan grafik vektor

## Instalasi

1. Clone repositori:
```bash
git clone https://github.com/RoseRina/Virtual-store.git
cd Virtual-store
```

2. Install dependensi:
```bash
npm install
```

3. Jalankan server pengembangan:
```bash
npm run dev
```

4. Buka browser dan akses [http://localhost:3000](http://localhost:3000)

## Penggunaan Admin Panel

1. Buka [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Login dengan kredensial berikut:
   - Username: admin
   - Password: admin123
3. Setelah login, Anda dapat:
   - Melihat dashboard
   - Mengelola produk (tambah, edit, hapus)
   - Melihat dan mengelola pesanan
   - Mengubah pengaturan toko

## Struktur Proyek

```
virtual-store/
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── admin/         # Halaman admin
│   │   ├── api/           # API Routes
│   │   ├── products/      # Halaman produk
│   │   └── page.tsx       # Halaman beranda
│   ├── components/        # Komponen React yang dapat digunakan kembali
│   ├── lib/               # Fungsi utilitas dan helpers
│   └── types/             # Definisi TypeScript
├── public/                # File statis
│   ├── images/            # Gambar dan ikon
│   └── favicon.ico        # Favicon
├── tailwind.config.ts     # Konfigurasi Tailwind CSS
└── package.json           # Dependensi dan skrip
```

## Pengembangan Lanjutan

Berikut adalah beberapa fitur yang dapat dikembangkan lebih lanjut:

1. Implementasi autentikasi yang lebih kuat
2. Integrasi dengan database seperti MongoDB atau PostgreSQL
3. Sistem keranjang belanja dan checkout
4. Integrasi pembayaran dengan gateway seperti Midtrans
5. Sistem notifikasi email untuk pesanan
6. Optimasi SEO untuk halaman produk

## Deploy

Website ini dapat di-deploy ke platform seperti Vercel:

1. Push ke GitHub
2. Hubungkan repositori dengan Vercel
3. Konfigurasi pengaturan build dan deploy

## Lisensi

[MIT](LICENSE)

## Kontak

Untuk pertanyaan atau dukungan, silakan hubungi pengembang di [email@contoh.com](mailto:email@contoh.com)
