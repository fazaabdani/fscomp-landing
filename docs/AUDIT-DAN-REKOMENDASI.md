# Audit Total — fscomp-landing (fscomp.id)

Tanggal audit: 2026-09-17
Cakupan: repo `fscomp-landing` (landing page fscomp.id), branch `main` (branch `redesign` diabaikan — isinya sudah tercampur kode app lain/fscomp-core, bukan basis yang valid).

Tujuan bisnis yang jadi acuan audit ini: **menjadikan fscomp.id sebagai pusat laptop second di Pekalongan dan sekitarnya**, dengan UI yang nyaman dan fitur lengkap.

---

## 1. Ringkasan kondisi saat ini

Landing page single-page (Next.js 14 App Router), tema dark/tech dengan efek partikel canvas, sudah punya:
- Hero, ticker berjalan, 4 kartu produk/layanan, section QC dengan 10 poin + stat counter, 3 testimoni, CTA penutup, footer dengan alamat & WA.
- SEO dasar: metadata, Open Graph, Twitter card, JSON-LD `ElectronicsStore`, sitemap 1 URL.
- Redirect `/katalog` → `core.fscomp.id/katalog` (katalog produk sebenarnya ada di app terpisah).

Ini fondasi yang cukup rapi secara visual, tapi masih **landing page satu produk kecil**, bukan landing page yang layak menyandang klaim "pusat laptop second se-Pekalongan". Detail temuan di bawah.

---

## 2. Bug / cacat yang perlu diperbaiki (prioritas tertinggi)

| # | Temuan | Lokasi | Dampak |
|---|---|---|---|
| B1 | **Kartu produk tidak bisa diklik.** Teks CTA ("Konsultasi", "Lihat Produk", "Servis Sekarang") di tiap card cuma `<div>` tanpa `href`/`onClick`. Terlihat seperti tombol (ada panah →, cursor pointer) tapi mati total. | [app/LandingPage.tsx:275](app/LandingPage.tsx:275), `.card` di [app/landing.module.css:390](app/landing.module.css:390) | Kehilangan klik/konversi di 4 CTA utama — ini bug UX paling serius di halaman. |
| B2 | **Tidak ada menu mobile.** `.navLinks` di-`display:none` di ≤768px tanpa pengganti (hamburger menu). User HP kehilangan akses ke anchor Produk/QC/Testimoni/Lokasi. | [app/landing.module.css:831](app/landing.module.css:831) | Mayoritas trafik toko lokal via HP — navigasi in-page hilang buat mereka. |
| B3 | **Link WhatsApp tanpa pesan pra-isi** (`https://wa.me/62816660056` polos, tanpa `?text=`). | [app/LandingPage.tsx:38](app/LandingPage.tsx:38) | Friksi lebih tinggi buat calon pembeli mulai chat; harusnya beda CTA = beda pesan (mis. dari kartu "Servis" langsung terisi "Halo, saya mau tanya servis laptop"). |
| B4 | **Canvas partikel jalan terus tanpa syarat**, termasuk saat tab tidak aktif dan di HP low-end, tanpa cek `prefers-reduced-motion`. 80 partikel dengan pengecekan jarak berpasangan tiap frame (~O(n²)). | [app/LandingPage.tsx:49-140](app/LandingPage.tsx:49) | Boros baterai/CPU di HP murah (demografi utama pembeli laptop second), berisiko lag di scroll. |
| B5 | **Elemen dekoratif tidak ditandai untuk aksesibilitas** (`<canvas>` dan cursor-glow div tidak punya `aria-hidden="true"`). | [app/LandingPage.tsx:202-203](app/LandingPage.tsx:202) | Screen reader bisa mengumumkan elemen yang tak bermakna. |

---

## 3. Kesenjangan konten & positioning (paling relevan ke tujuan "pusat laptop second se-Pekalongan")

Ini bagian paling penting karena berhubungan langsung ke goal bisnis:

1. **Klaim area terlalu sempit.** Semua copy menyebut "Wiradesa, Pekalongan" saja. Untuk klaim "dan sekitarnya", perlu sebut eksplisit wilayah layanan: Kota Pekalongan, Kedungwuni, Kajen, Buaran, Karanganyar, Wonopringgo, Doro, Batang, Comal/Pemalang (perbatasan), dll — baik di copy maupun di `areaServed` schema.org (saat ini cuma `"areaServed": "ID"` yang terlalu generik, lihat [app/layout.tsx:61](app/layout.tsx:61)).
2. **Tidak ada bukti skala/stok.** Statement "pusat" perlu didukung angka: jumlah unit ready stock, jumlah merek/tipe yang dilayani, dsb. Saat ini stat hanya "1000+ unit terjual" (historis) — bagus, tapi tidak ada info stok *saat ini*.
3. **Tidak ada preview katalog nyata di landing.** Katalog produk sungguhan ada di `core.fscomp.id/katalog`, tapi landing hanya kasih 1 link keluar tanpa cuplikan produk (foto asli, harga, spek). Untuk toko "pusat", calon pembeli ingin lihat *ada barangnya beneran* tanpa harus pindah halaman dulu.
4. **Tidak ada harga sama sekali.** "Harga Masuk Akal" itu klaim tanpa angka. Minimal tampilkan starting price ("Mulai dari Rp1,5 juta") atau rentang harga per kategori.
5. **Tidak ada FAQ** — objection-handling untuk hal yang pasti ditanya: berapa lama garansi, bisa COD, bisa cicilan/kredit tanpa kartu, retur/tukar kalau bermasalah, bisa tukar tambah laptop lama.
6. **Tidak ada info jam operasional toko** di mana pun di halaman (footer hanya alamat + WA).
7. **Tidak ada bagian "Cara Beli"/how-it-works** (mis. 1. Chat admin → 2. Pilih unit & cek kondisi → 3. Bayar/COD → 4. Garansi mulai jalan).
8. **Tidak ada tautan sosial media** (Instagram/TikTok/Facebook) — toko laptop second biasanya sangat mengandalkan IG/TikTok untuk posting stok harian; kalau FS Comp punya akun ini, harus ditaut di nav/footer + `sameAs` schema.org untuk sinyal E-E-A-T ke Google.
9. **Testimoni terlihat generic/tanpa bukti** (nama depan + inisial, tanpa foto/tautan review asli). Kalau ada review Google asli dengan rating bagus, sebaiknya tampilkan rating asli + link ke ulasan Google Maps, dan tambahkan `aggregateRating` di JSON-LD.
10. **Tidak ada konten evergreen/SEO artikel** (mis. "Tips memilih laptop second", "SSD vs HDD", "Cara cek keaslian baterai laptop"). Ini yang biasanya memenangkan pencarian jangka panjang untuk klaim "pusat"/otoritas di suatu wilayah.
11. **Tidak ada halaman/section per area layanan** — untuk SEO lokal yang kuat, biasanya efektif bikin section (atau halaman terpisah) yang eksplisit menyasar "Kota Pekalongan", "Kajen", "Batang", dst, masing-masing dengan sedikit copy unik (bukan duplikat/spam, tapi genuinely useful, misal opsi antar ke area itu).

---

## 4. UI/UX — supaya lebih "nyaman"

- **Belum ada foto produk/toko asli** — hero & kartu produk 100% ikon emoji + partikel abstrak. Untuk kategori barang fisik second (yang pembeli sangat sensitif ke "kondisi barang"), foto nyata (unit best-seller, suasana toko, proses QC) akan menaikkan kepercayaan jauh lebih besar daripada animasi.
- **Kontras teks `--dim` (putih 55% opacity) untuk body text 13–15px** berpotensi di bawah ambang WCAG AA di beberapa area (perlu dicek dengan contrast checker) — pertimbangkan naikkan ke ~65–70% opacity untuk teks deskripsi yang lebih panjang (card `p`, testimoni).
- **Tidak ada sticky mobile CTA bar** (WA + Lihat Katalog) — pattern umum e-commerce/toko lokal untuk menjaga CTA selalu terlihat saat scroll panjang di HP.
- **Section QC & grid QC item bagus**, tapi mungkin bisa ditambah foto proses QC asli agar klaim "QC ketat 10 poin" lebih kredibel (bukan cuma teks checklist).
- **Tidak ada indikator "stok terbatas/baru masuk"** untuk mendorong urgensi (opsional, hindari pola gelap/pemalsuan urgensi).
- **Font di-load via `@import` CSS** ([app/landing.module.css:1](app/landing.module.css:1)) — sebaiknya pindah ke `next/font/google` supaya self-hosted, tidak nambah round-trip request eksternal, dan mengurangi risiko CLS/FOUT.

---

## 5. Teknis & SEO tambahan

- **Tidak ada `robots.ts`** — sebaiknya ditambahkan (allow all + link ke sitemap) untuk kejelasan ke crawler, walau default tanpa robots.txt pun sebenarnya masih ter-crawl.
- **Tidak ada `manifest.ts`/site.webmanifest** meski icon set sudah lengkap (svg/ico/png/apple-icon) — gampang ditambah, memberi pengalaman "Add to Home Screen" yang lebih rapi.
- **Sitemap cuma 1 URL** ([app/sitemap.ts](app/sitemap.ts)) — wajar untuk single-page saat ini, tapi kalau nanti nambah section/halaman (FAQ, blog, area layanan), harus di-update.
- **JSON-LD `ElectronicsStore` belum lengkap**: belum ada `openingHoursSpecification`, `geo` (lat/long), `sameAs` (sosmed/Maps), `aggregateRating`. Semua ini membantu rich result & local pack ranking di Google Maps/Search.
- **Tidak ada analytics apa pun** (GA4/Meta Pixel/tracking klik WA) — tanpa ini, tidak ada cara mengukur mana CTA yang benar-benar menghasilkan chat, atau retargeting ads ke pengunjung yang belum closing. Ini krusial kalau rencana ke depan mau pasang iklan Meta/Google untuk memperluas cakupan "dan sekitarnya".
- **Dockerfile ada, tapi `nixpacks.toml` juga ada** — konfirmasi metode deploy aktual di server toko/Coolify (Dockerfile vs Nixpacks) supaya tidak ada ambiguitas saat redeploy.

---

## 6. Fitur yang belum ada, relevan untuk jadi "pusat laptop second"

Diurutkan dari yang paling berdampak ke bisnis:

1. **Cuplikan katalog real-time di landing** (mis. 6–8 unit "stok terbaru"/"terlaris" dengan foto asli + harga, ambil dari data core.fscomp.id) — supaya landing tidak cuma jadi brosur tapi etalase hidup.
2. **Section "Jual / Tukar Tambah Laptop Lama Anda"** — kalau FS Comp menerima ini, ini pembeda besar untuk klaim "pusat" (bukan cuma jual, tapi juga beli/tukar).
3. **Halaman/Section FAQ** menjawab garansi, cicilan, retur, pengiriman ke luar kota.
4. **Peta cakupan area layanan** (list wilayah + estimasi ongkir/gratis antar radius tertentu).
5. **Channel update stok** (grup WA / WA Channel / Instagram) dengan CTA join, supaya calon pembeli bisa pantau stok baru tanpa harus cek web tiap hari.
6. **Konten SEO (artikel/tips)** untuk menangkap pencarian informational, memperkuat otoritas topikal di wilayah Pekalongan Raya.
7. **Tracking konversi** (klik WA, klik katalog) via GA4 event, supaya keputusan iklan/konten berbasis data.

---

## 7. Ringkasan prioritas (kalau mau dieksekusi bertahap)

**Quick wins (dampak besar, effort kecil — cocok dikerjakan duluan):**
- Perbaiki B1 (kartu produk jadi bisa diklik / diarahkan ke WA dengan pesan sesuai konteks)
- Tambah hamburger menu mobile (B2)
- WA link dengan pesan pra-isi per CTA (B3)
- Tambah jam operasional toko di footer
- Tambah `robots.ts` + `manifest.ts`
- Lengkapi JSON-LD (`geo`, `openingHoursSpecification`, `sameAs`, `areaServed` spesifik)
- Perluas keyword/copy ke wilayah sekitar Pekalongan (bukan cuma Wiradesa)

**Menengah (butuh aset/keputusan bisnis dulu):**
- FAQ section
- Section "Cara Beli" / how-it-works
- Foto produk & toko asli menggantikan/menambah ilustrasi abstrak
- Sticky mobile CTA bar
- GA4 / pixel tracking

**Besar (butuh integrasi data/API dari core.fscomp.id):**
- Cuplikan katalog live di landing
- Section tukar tambah
- Konten blog/artikel SEO
- Halaman area layanan terpisah untuk local SEO

---

## 8. Data bisnis asli yang berhasil dikonfirmasi (dari Google Business Profile & Instagram resmi)

Supaya tidak asal klaim, sebelum eksekusi saya cek langsung profil Google Business "FS Comp" dan akun Instagram resminya. Hasil (per 2026-09-17):

- **Rating Google: 4,8 dari 124 ulasan** — dipakai sebagai stat baru di section QC (sebelumnya statnya generik "5⭐ Rating Pelanggan" tanpa sumber, sekarang jadi angka asli + link ke ulasan).
- **Jam operasional:** Senin–Rabu & Sabtu 09.00–17.00, Jumat 09.00–16.30, Minggu tutup.
- **Koordinat toko:** -6.9113613, 109.6091907 (dipakai untuk `geo` di JSON-LD).
- **Instagram resmi: @fscomp.id** (instagram.com/fscomp.id) — aktif posting stok, sudah ditaut di footer & `sameAs` schema.
- Caption Instagram/Facebook mereka sendiri sudah memakai tagline **"PUSAT LAPTOP SECOND PEKALONGAN – FS COMP"** — jadi positioning yang diminta di percakapan ini sebenarnya sudah jadi branding aktif mereka, bukan klaim baru yang mengada-ada.
- Ditemukan sebutan **"FS Media Comp"** sebagai nama resmi di beberapa Facebook page — kemungkinan nama badan usaha vs nama dagang "FS Comp". Tidak diubah di kode, hanya dicatat.
- **Perbedaan nomor telepon:** situs pakai WA `0816-660-056`, tapi nomor yang tercatat di Google Business Profile adalah `0816-692-428`. Saya TIDAK mengubah nomor WA di kode karena tidak tahu mana yang benar-benar aktif untuk chat — mohon dikonfirmasi, kalau nomor Google Business itu salah/sudah tidak dipakai sebaiknya diperbarui di Google Business Profile juga.
- Kompetitor sekitar cukup ramai: **KLA Computer Pekalongan** rating 5,0 dengan 1.703 ulasan (jauh di atas 124 ulasan FS Comp) — relevan sebagai tolok ukur kalau target positioning "pusat" mau dikejar serius, terutama dari sisi jumlah ulasan Google.
- Ada juga bisnis bernama **"FS.ID Pekalongan"** di Jl. Diponegoro Kajen — mirip nama tapi lokasi beda, kemungkinan bukan cabang FS Comp yang sama; perlu dikonfirmasi supaya tidak keliru klaim sebagai lokasi sendiri.

## 9. Perubahan yang sudah dieksekusi (2026-09-17)

Bagian "quick win" dari audit di atas sudah diimplementasikan di branch `main`, sudah `npm run build` sukses dan dicek manual di browser (desktop & mobile viewport):

- **[B1]** Kartu produk sekarang `<a>` yang benar-benar bisa diklik — 3 kartu WA-nya prefilled pesan sesuai konteks (Laptop Second, Rakit PC, Servis), kartu Aksesoris mengarah ke katalog.
- **[B2]** Tambah hamburger menu mobile (nav links + tombol WA muncul di panel slide-in saat ≤768px). Sekaligus fix bug lanjutan: panel sempat "nyangkut" muncul di layar desktop kalau state lagi terbuka — sudah dipatch dengan `display:none` paksa di atas breakpoint mobile.
- **[B3]** Semua CTA WA sekarang pakai pesan pra-isi berbeda per konteks (helper `waLink()`), bukan link polos tanpa teks.
- **[B4]** Partikel canvas: dikurangi jadi 30 titik di layar <768px (dari 80), berhenti total saat tab disembunyikan (`visibilitychange`), dan dimatikan sepenuhnya kalau browser minta `prefers-reduced-motion: reduce`.
- **[B5]** Elemen dekoratif (`canvas`, cursor glow, badge dot, card shine, cta glow, ikon kartu) ditandai `aria-hidden="true"`. Tambah skip-link "Langsung ke konten" untuk keyboard/screen reader.
- Stat rating diganti dari placeholder "5⭐" jadi **"4.8★ Rating Google (124 Ulasan)"** asli, bisa diklik ke halaman ulasan Google Maps.
- Footer: tambah jam operasional asli + link Instagram resmi.
- `app/robots.ts` dan `app/manifest.ts` ditambahkan (sebelumnya tidak ada).
- `app/layout.tsx`: metadata title/description/OG/Twitter diperbarui ke positioning "Pusat Laptop Second Pekalongan & Sekitarnya"; keywords diperluas ke Kota Pekalongan/Kajen/Kedungwuni/Batang; JSON-LD ditambah `geo`, `openingHoursSpecification` (data asli), `sameAs` (Instagram), `aggregateRating` (4.8/124, data asli), dan `areaServed` diperluas dari `"ID"` generik jadi Kabupaten Pekalongan/Kota Pekalongan/Kabupaten Batang.

## 9b. Jawaban dari kamu (2026-09-17) & tindak lanjutnya

- **Nomor WA yang dipakai publik: `0816-660-056` (nomor toko, sengaja dibuat gampang diingat).** `0816-692-428` adalah nomor pribadi owner — bukan untuk dipajang publik. Kode tetap/dikembalikan ke `0816-660-056` di `WA_NUMBER` ([app/LandingPage.tsx](../app/LandingPage.tsx)), footer, dan `telephone` JSON-LD ([app/layout.tsx](../app/layout.tsx)).
- **Catatan penting:** Google Business Profile "FS Comp" saat ini menampilkan nomor pribadi (`0816-692-428`), bukan nomor toko. Ini sebaiknya diperbaiki langsung di Google Business Profile (ganti ke `0816-660-056`) — selain soal privasi nomor pribadi, konsistensi nomor telepon di semua kanal (website, Google Business, sosmed) juga berpengaruh ke local SEO (dikenal sebagai konsistensi NAP: Name-Address-Phone).
- **Tukar tambah: ya, diterima**, khusus unit yang benar-benar normal dan lolos QC FS Comp. Ditambahkan sebagai trust-item baru di hero ("🔁 Terima Tukar Tambah") dan sebagai jawaban FAQ.
- **Cicilan: tidak ada**, cash/transfer saja — dicantumkan apa adanya di FAQ supaya ekspektasi calon pembeli jelas dari awal (tidak menjanjikan kredit yang tidak tersedia).
- **Garansi: software 3 bulan, hardware 3 minggu** — dicantumkan persis dengan pembagian ini di FAQ, bukan digeneralisir jadi satu angka saja.
- Ditambahkan **section FAQ baru** (accordion, 4 pertanyaan di atas) + link nav "FAQ", diletakkan sebelum CTA penutup. Build sukses, sudah dicek manual (accordion buka/tutup jalan, item pertama default terbuka).

## 10. Yang masih saya butuh dari kamu untuk lanjut ke tahap berikutnya

Sudah terjawab: nomor WA, garansi, tukar tambah, cicilan (lihat bagian 9b). Sisa yang masih butuh keputusan/fakta bisnis:

1. Wilayah pengiriman/antar: area mana saja, gratis ongkir sampai radius berapa? (perlu ini sebelum klaim area layanan diperluas lebih spesifik dari sekadar "Pekalongan & sekitarnya")
2. Apakah "FS.ID Pekalongan" (Kajen) dan "FS Comp Kajen" yang disebut di beberapa post itu cabang FS Comp yang sama, reseller, atau bisnis lain?
3. Ada foto produk/toko asli yang boleh dipakai di landing (mengganti ilustrasi ikon abstrak)?
4. Facebook & TikTok resmi — boleh minta link persisnya untuk ditaut di footer & schema (`sameAs`)?

Setelah ini terjawab, saya lanjut ke bagian "menengah" (cara beli, sticky mobile CTA, foto asli) dan "besar" (cuplikan katalog live, tracking, konten SEO) dari daftar prioritas di atas.
