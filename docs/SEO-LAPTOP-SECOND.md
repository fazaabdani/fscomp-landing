# SEO — Target halaman 1 Google untuk "laptop second"

Tanggal: 2026-10-23
Status: **audit selesai; perubahan on-page landing sudah di-commit (`df7eb15`) dan LIVE di fscomp.id sejak 2026-10-23.** Yang tersisa: tindakan owner (bagian 4A) dan perbaikan katalog di repo `fscomp-core` (bagian 4B).

## 1. Ekspektasi yang realistis

- Keyword "laptop second" polos itu nasional — halaman 1 dikuasai Tokopedia, Shopee, OLX, dan toko besar. Tidak realistis untuk toko lokal, dan tidak ada yang bisa menjamin posisi Google.
- Yang realistis dan bernilai: **pencarian lokal** — "laptop second pekalongan", "jual laptop second pekalongan", "laptop bekas pekalongan", "laptop second wiradesa/kajen/batang". Di sini yang menentukan bukan cuma website, tapi **Google Business Profile (hasil peta)**.
- Perubahan SEO butuh waktu: indeks ulang beberapa hari, naik peringkat biasanya minggu–bulan. Posisi saat ini **belum terukur** (pencarian `site:` lewat tool saya tidak bisa diandalkan). Ukur lewat Google Search Console.

## 2. Temuan (diverifikasi 2026-10-23)

| # | Temuan | Dampak |
|---|---|---|
| T1 | **Konten yang menarik traffic (14 unit laptop, harga, spek) ada di `core.fscomp.id/katalog` + `/unit/<id>`**, bukan di `fscomp.id`. Landing `fscomp.id` cuma 1 halaman. `katalog.fscomp.id` → 302 ke `core.fscomp.id/katalog`, `fscomp.id/katalog` → 307 ke sana. | Otoritas terpecah dua subdomain; domain utama tidak punya halaman produk. |
| T2 | Halaman katalog & unit di core: server-rendered (bagus, teks terbaca crawler), ada title + meta description, ada `sitemap.xml` (17 URL) dan `robots.txt` berisi Sitemap. **Tapi: tidak ada `rel=canonical`, tidak ada JSON-LD sama sekali** (tanpa `Product`/`Offer`). Link ke unit membawa `?from=...`, `?view=compact/list` → URL duplikat tanpa canonical. | Risiko duplikasi + tidak ada rich result harga/stok. |
| T3 | Judul unit memakai nama internal, mis. `DELL LATITUDE 7410 ADA WS DILAYAR - Rp 4.500.000 - FS Comp` (huruf kapital, istilah internal "WS di layar"). Deskripsi tidak menyebut "laptop second Pekalongan". | Judul jelek di hasil Google, kata kunci lokal tidak terpakai. |
| T4 | **`https://www.fscomp.id` mengembalikan HTTP 526** (sertifikat origin tidak valid di Cloudflare). `http://fscomp.id` → 301 ke https (benar). | Pengunjung/link ke `www` error; sinyal link terbuang. Perlu diperbaiki di Cloudflare/DNS. |
| T5 | Sitemap `fscomp.id` hanya 1 URL. `robots.txt` aman untuk Googlebot (blok hanya untuk bot training AI seperti GPTBot/ClaudeBot; `Google-Extended` yang diblok tidak memengaruhi Google Search). | OK, tidak ada blokir. |
| T6 | H1 lama `Laptop Berkualitas, Harga Masuk Akal` tidak mengandung kata kunci. | **Sudah diedit** (lihat bagian 3). |
| T7 | Nomor telepon di Google Business Profile (0816-692-428, nomor pribadi owner) beda dengan website (0816-660-056). Konsistensi NAP memengaruhi peringkat peta. | Perlu diganti owner di GBP (lihat audit 9b). |
| T8 | Jumlah ulasan Google 124 vs kompetitor lokal KLA Computer 1.703 (data audit 17 Sep). | Faktor terbesar di hasil peta; solusinya operasional (minta ulasan). |
| T9 | Live site ≠ HEAD git: situs live menampilkan jam "Senin–Sabtu 09.00–17.00" dan ulasan Google asli, sedangkan commit terakhir (`9fd5de6`) masih jam lama. Ada perubahan logo/favicon/testimoni **belum di-commit** di working copy. | **Jangan deploy via `git pull` di server sebelum working copy ini di-commit**, kalau tidak perubahan itu hilang. |

## 3. Yang sudah diubah (lokal, belum commit/deploy)

- `app/layout.tsx`
  - title → `Jual Laptop Second Pekalongan Bergaransi — FS Comp`
  - meta description → memuat "laptop second Pekalongan", Wiradesa, QC, tukar tambah, jam buka.
- `app/LandingPage.tsx`
  - H1 → `Laptop Second Pekalongan, Bergaransi & Harga Masuk Akal`
  - paragraf hero memuat "Jual laptop second Pekalongan"
  - tombol katalog → `Lihat Laptop Second Ready →` (anchor text lebih deskriptif)
- `npm run build` sukses.
- Sengaja **tidak** diubah: JSON-LD (sudah memuat alamat, geo, jam buka, sameAs), `aggregateRating` (sudah dihapus di working copy; rating milik sendiri di markup toko tidak memberi rich result), klaim area layanan (butuh konfirmasi owner, lihat audit bagian 10).

## 4. Rencana berikutnya (urut dampak)

**A. Di luar kode — tindakan owner (dampak terbesar untuk pencarian lokal)**
1. Google Business Profile: ganti telepon ke 0816-660-056; pastikan kategori utama "Toko komputer"/"Toko laptop"; isi jam buka sama dengan website (Senin–Sabtu 09.00–17.00); tambah foto unit & toko; posting stok mingguan; tautkan website `https://fscomp.id`.
2. Minta ulasan Google dari pembeli (link/QR tulis ulasan).
3. Google Search Console: verifikasi `fscomp.id` dan `core.fscomp.id`, submit `sitemap.xml` keduanya, pantau kueri & posisi.
4. Perbaiki `www.fscomp.id` (526) di Cloudflare: pasang redirect `www` → `fscomp.id` dan pastikan sertifikat/SSL mode benar.

**B. Repo `D:\fscomp-core` (deploy ke server toko) — halaman katalog/unit**
1. Tambah `<link rel="canonical">` di `/katalog`, `/katalog/rakit-pc`, `/unit/<id>` (tanpa `?from=` / `?view=`).
2. JSON-LD `Product` + `Offer` (harga IDR, ketersediaan, kondisi `UsedCondition`) di halaman unit; `ItemList`/`CollectionPage` di `/katalog`.
3. Perbaiki pola judul/deskripsi unit: mis. `Jual Dell Latitude 7410 i7 Gen 10 16GB 256GB — Laptop Second Pekalongan`; deskripsi memuat "laptop second Pekalongan", lokasi stok, garansi 3 bulan software / 3 minggu hardware.
4. Pertimbangkan satukan domain: tampilkan katalog di `fscomp.id/katalog` (proxy/rewrite) dengan canonical ke `fscomp.id`, supaya otoritas terkumpul di satu domain. Ini keputusan arsitektur — butuh persetujuan owner.

**C. Konten (menengah, tidak instan)**
- Halaman/artikel yang menjawab pencarian nyata: "tips beli laptop second", "laptop second untuk kuliah/kerja", dengan internal link ke katalog. Tulis dari pengalaman toko, bukan teks generik.

## 6. Update 2026-10-27 — FS Comp tidak muncul di hasil peta "laptop second pekalongan"

**Temuan.** Screenshot hasil Google "laptop second pekalongan" (dari owner) menunjukkan panel lokal/peta berisi ZIDD.PC, Galeri Computer, MM Komputer, Abadi Berkah Computer, Bursa laptop & komputer, COD Laptop, KLA Computer, Mitra Komputer, MC Computer, IPCOMP — **FS Comp tidak ada**. Peta menampilkan pusat Kota Pekalongan; toko FS Comp di Wiradesa (±7 km di barat) jatuh di luar pusat radius itu. Hasil peta dipengaruhi jarak pencari, relevansi profil, dan prominensi (jumlah/kebaruan ulasan) — bukan hanya website. Pengecekan posisi organik lewat Google tidak bisa dilakukan dari sesi ini (Google menampilkan CAPTCHA); pantau lewat Search Console.

**Fakta dari katalog live `core.fscomp.id/katalog` (27 Okt 2026)** yang belum ada di landing sebelum hari ini: stok juga ada di **Kajen** (27 unit Wiradesa, 2 Kajen), ambil di toko Wiradesa/Kajen, bisa dikirim COD/ekspedisi luar kota, merek Dell/HP/Lenovo, Core i3/i5/i7, RAM 6–16 GB, Windows 10/11, filter harga ≤Rp3 jt / Rp3–5 jt / >Rp5 jt. "Ribuan laptop terjual sejak Agustus 2020".

**Diubah di landing (branch `seo/laptop-second-konten`, `app/LandingPage.tsx`, belum di-commit/deploy):**
- FAQ 4 → 9 pertanyaan, memuat variasi kata kunci yang dicari orang: lokasi & jam buka (menyebut Kota Pekalongan, Kedungwuni, Kajen, Batang), QC "laptop bekas", merek & spek, kisaran harga, kirim luar kota.
- **Semua jawaban FAQ kini ada di HTML** (disembunyikan dengan atribut `hidden`, bukan dihapus dari DOM). Sebelumnya jawaban yang tertutup tidak ada di HTML sehingga tidak terbaca crawler — dicek di `.next/server/app/index.html`: 9 jawaban, 8 hidden.
- H2 memuat kata kunci ("Laptop second bergaransi, rakit PC & servis dalam satu toko", "Dipercaya pembeli laptop second di Pekalongan", "Pertanyaan seputar beli laptop second di FS Comp"); sinonim "laptop bekas" di hero; kartu Laptop Second menyebut merek & spek.
- `npm run build` sukses.
- Sengaja tidak dibuat: markup FAQPage (Google sudah membatasi rich result FAQ untuk situs biasa), halaman per-kota (risiko doorway page, area antar belum dikonfirmasi owner).
- ⚠️ Konfirmasi owner: klaim "stok juga tersedia di Kajen" diambil dari katalog sendiri, alamat Kajen belum ada di mana pun.

**Yang masih terbuka (urut dampak untuk hasil peta/lokal):**
1. **Google Business Profile** — kategori utama & tambahan (mis. "Toko laptop", "Toko komputer", "Toko barang bekas"), deskripsi memuat "laptop second Pekalongan", telepon 0816-660-056, jam Senin–Sabtu 09.00–17.00, daftar Produk (unit unggulan + harga + foto), posting stok mingguan, area layanan (Kota Pekalongan, Kedungwuni, Kajen, Batang), link website `https://fscomp.id`. Minta ulasan dari tiap pembeli (146 laptop terjual dalam 3 bulan terakhir = potensi ulasan baru yang besar).
2. **Katalog di `fscomp-core`** (bagian 4B): canonical, JSON-LD Product/Offer, judul unit yang ramah pencarian — di situlah halaman yang bisa muncul untuk pencarian model spesifik.
3. **`www.fscomp.id` masih HTTP 526** (dicek 27 Okt): pasang Redirect Rule `www.fscomp.id/*` → `https://fscomp.id/$1` (301) di Cloudflare.
4. Search Console: verifikasi `fscomp.id` + `core.fscomp.id`, submit sitemap, minta indeks ulang `https://fscomp.id/` setelah deploy.

## 5. Cara deploy (jika perubahan lokal disetujui)

1. Commit working copy (termasuk logo/testimoni yang sudah live) lalu `git push origin main`.
2. Ikuti [`DEPLOYMENT.md`](../DEPLOYMENT.md) (build image manual di VPS 1; tidak ada webhook/Coolify).
3. Setelah live: `curl -s https://fscomp.id | grep -o '<title>[^<]*'` untuk cek, lalu di Search Console minta pengindeksan ulang URL `https://fscomp.id/`.
