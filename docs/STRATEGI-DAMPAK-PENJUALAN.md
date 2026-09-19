# Analisis: Apa yang Perlu Ditambahkan ke fscomp.id Supaya Benar-Benar Mendongkrak Penjualan

Tanggal: 2026-09-19

Konteks: dokumen ini beda fokus dari `AUDIT-DAN-REKOMENDASI.md` (yang fokus UX/SEO/bug). Di sini murni dari sudut pandang **dampak ke penjualan & pendapatan** — dipilah mana yang benar-benar menggerakkan angka, mana yang cuma kosmetik.

Prinsip yang dipakai: fscomp.id ini toko fisik lokal (Wiradesa, Pekalongan) yang jualan barang bekas (butuh kepercayaan ekstra) via WhatsApp sebagai kanal closing utama. Jadi kerangka analisisnya pakai funnel:

**Orang ketemu situsnya (Awareness) → percaya (Trust) → lihat barangnya (Consideration) → chat WA (Conversion) → closing & repeat (Retention)**

Setiap rekomendasi di bawah saya taruh di tahap funnel mana dia kerja, dan **kenapa** itu yang menggerakkan uang — bukan cuma "biar bagus".

---

## Fakta kunci yang jadi dasar analisis ini

- Rating Google **4,8 dari 124 ulasan**. Kompetitor terdekat, **KLA Computer Pekalongan, rating 5,0 dari 1.703 ulasan** — unggul jauh di jumlah bukti sosial. Ini gap paling besar dan paling jelas antara FS Comp dan pemain besar di kota yang sama.
- FS Comp **tidak punya opsi cicilan/kredit** (dikonfirmasi langsung) — cash/transfer saja. Sementara toko sejenis lain di sekitar Pekalongan (ditemukan saat riset kemarin, mis. akun **irpkomputer_comal**) eksplisit promosi **"Bisa Kredit/Paylater"**.
- Garansi: software 3 bulan, hardware 3 minggu — sudah jelas dan lumayan bersaing, tapi belum "berbunyi" di luar FAQ.
- Terima tukar tambah, tapi cuma jadi 1 baris trust-badge — belum jadi alur/CTA sendiri.
- Aktif posting stok di Instagram (@fscomp.id) & Facebook nyaris tiap minggu ("STOK BARU MASUK", dst) — sinyal bagus bahwa mereka sebenarnya rajin update stok, tapi ini semua ENERGI PROMOSI yang nguap di sosmed dan tidak "menempel" balik ke fscomp.id (orang lihat di IG, bukan mendarat balik ke web yang bisa di-tracking/dioptimasi).
- Katalog produk sungguhan (dengan foto, harga, spek) sudah ADA di `core.fscomp.id/katalog` — tapi landing cuma nge-link keluar, tidak menampilkan cuplikan apa pun. Orang harus pindah halaman buat lihat barang beneran.
- Tidak ada satu pun alat ukur (analytics/pixel) — FS Comp saat ini **tidak tahu berapa orang yang buka fscomp.id per hari, dari mana asalnya, atau berapa yang benar-benar klik WA**. Tanpa ini, semua keputusan promosi (termasuk rekomendasi di dokumen ini) jalan buta, tidak bisa diukur mana yang beneran kerja.

---

## Tier 1 — Dampak Terbesar ke Pendapatan (prioritaskan ini duluan)

### 1. Cuplikan katalog stok nyata langsung di landing (bukan cuma link keluar)
**Funnel: Consideration → Conversion.**
Ini yang paling saya yakini sebagai pengungkit terbesar. Alasannya sederhana: **niat beli itu paling tinggi begitu orang lihat barang + harga yang cocok** — bukan begitu mereka baca copywriting "Laptop Berkualitas, Harga Masuk Akal". Sekarang antara niat itu muncul dan orang benar-benar lihat barang, ada 1 klik keluar ke domain lain (`katalog.fscomp.id`) yang bisa jadi titik orang batal/lupa. Kalau 6-8 unit "Stok Terbaru"/"Terlaris" (foto asli + harga + spek ringkas) muncul LANGSUNG di landing dengan tombol "Chat soal unit ini →" (WA dengan pesan otomatis sebut nama unitnya), jarak antara "tertarik" dan "chat admin" jadi nyaris nol.
*Kenapa ini bukan cuma kosmetik*: closing rate WA sangat dipengaruhi kualitas leads yang masuk — orang yang chat sambil nyebut unit spesifik ("HP Elitbook 9470m yang di web") jauh lebih gampang ditutup admin daripada chat generik "ada laptop apa aja".

### 2. Opsi cicilan/paylater (Kredivo/Akulaku/Home Credit)
**Funnel: Consideration → Conversion (buka segmen pembeli baru).**
Ini **bukan** perubahan website, tapi ini kemungkinan pengungkit pendapatan TERBESAR dari semua yang ada di dokumen ini, jadi wajib disebut. Laptop second untuk pelajar/mahasiswa/UMKM itu pasar yang sangat sensitif cicilan — kompetitor sekitar sudah menawarkannya. Setiap kali calon pembeli budget pas-pasan chat lalu mundur karena "belum ada uang cash segitu", itu penjualan hilang yang sebenarnya bisa closing kalau ada opsi cicilan. Begitu ada kerja sama cicilan, situs web tinggal menambah 1 badge "Bisa Cicilan" + section singkat cara kerjanya — dampaknya jauh lebih besar daripada perubahan UI apa pun.
*Catatan*: ini keputusan bisnis (biaya admin/bunga platform, proses verifikasi), bukan sesuatu yang saya putuskan sendiri — tapi saya sarankan dipertimbangkan serius karena datanya cukup jelas mendukung.

### 3. Google review funnel aktif (kejar gap 124 vs 1.703)
**Funnel: Trust (yang menentukan orang klik ke web ini sama sekali dari hasil pencarian Google/Maps).**
Local pack Google Maps sangat dipengaruhi jumlah + kebaruan ulasan. 1.703 vs 124 itu gap besar yang langsung mempengaruhi siapa yang muncul duluan saat orang search "toko laptop second pekalongan" — dan itu murni soal siapa yang MUNCUL DULU dapat klik duluan.
Aksinya dua bagian:
- **Di web**: setelah closing/servis selesai, follow-up WA otomatis (template pesan) minta review dengan link langsung ke halaman tulis ulasan Google (`https://search.google.com/local/writereview?placeid=...` — perlu ambil Place ID FS Comp dulu). Bisa juga taruh CTA "Kasih Ulasan" di halaman FAQ/footer.
- **Di luar web**: ini proses operasional toko (minta ulasan ke pembeli langsung), bukan sesuatu yang bisa saya kerjakan dari sisi kode, tapi web bisa memfasilitasi dengan bikin link/QR code review yang gampang dipakai admin toko.

### 4. Tracking (Meta Pixel + Google Analytics/Ads conversion tag)
**Funnel: mengukur SEMUA hal di atas.**
Tanpa ini, FS Comp tidak bisa tahu: dari 100 orang yang buka fscomp.id, berapa yang klik WA? Campaign IG mana yang benar-benar mendatangkan pembeli, bukan cuma like? Kalau nanti mau pasang iklan (poin 5), tanpa pixel, iklan itu tidak bisa dioptimasi/retargeting sama sekali — duit iklan lebih boros.
Ini teknis, murah, cepat dipasang (tag GA4 + Meta Pixel + event "klik WhatsApp"), dan jadi fondasi semua keputusan growth ke depan.

---

## Tier 2 — Dampak Menengah (kerjakan setelah Tier 1)

### 5. Iklan berbayar terarah (Meta/Google Ads) dengan landing yang sudah dioptimasi
Situs sebagus apa pun tidak mendatangkan pembeli kalau tidak ada yang lihat. FS Comp sudah rajin organik di IG/FB, tapi jangkauan organik terbatas ke follower yang sudah ada. Iklan bisa spesifik menyasar pencarian/minat "laptop second" di radius Pekalongan-Batang-Kajen — begitu Tier 1 (terutama pixel & cuplikan katalog) sudah siap, iklan jadi jauh lebih efisien karena bisa retargeting orang yang sempat mampir tapi belum chat.

### 6. Section "Jual/Tukar Tambah Laptop Lama Anda" jadi alur sendiri (bukan cuma badge)
Sudah dikonfirmasi FS Comp menerimanya. Ini bukan cuma soal closing penjualan baru — ini **sumber stok murah** (beli dari masyarakat lebih murah daripada dari distributor) DAN cara dapat pembeli baru datang ke toko (orang yang awalnya cuma mau jual laptop lama, seringkali keluar beli upgrade). Section sendiri dengan form/CTA singkat ("Foto laptop lama Anda, kirim WA, dapat estimasi harga") menjadikan ini kanal akuisisi ganda, bukan cuma 1 baris trust badge yang gampang kelewat.

### 7. Sinyal stok real-time / urgensi jujur
Karena mereka memang rutin update stok (bukti dari posting IG rutin "STOK BARU MASUK"), menampilkan angka riil ("30+ unit ready saat ini", atau highlight "3 unit baru masuk minggu ini") mendorong keputusan lebih cepat — asal datanya beneran real, bukan angka statis yang dipalsukan (itu baru jadi dark pattern kalau tidak update).

### 8. Konten SEO lokal (artikel + halaman area layanan)
Payoff lebih lambat (butuh bulan, bukan minggu) tapi ini yang membangun keunggulan jangka panjang lawan kompetitor besar — traffic organik gratis yang terus mengalir tanpa biaya iklan berkelanjutan.

---

## Tier 3 — Baik untuk dimiliki, tapi dampak langsung ke penjualan kecil

- Sticky mobile CTA bar, foto produk asli menggantikan ilustrasi (bagus untuk kepercayaan, tapi levelnya "polish", bukan pengungkit)
- Halaman blog evergreen tanpa strategi distribusi (percuma nulis artikel bagus kalau tidak ada yang mempromosikan supaya terindeks & dibaca)
- PWA/"Add to Home Screen" — nice-to-have, hampir tidak ada bukti ini mempengaruhi keputusan beli untuk kategori ini

---

## Ringkasan prioritas eksekusi

| Prioritas | Item | Butuh apa | Bisa saya kerjakan sekarang? |
|---|---|---|---|
| 1 | Cuplikan katalog live di landing | Akses data/API dari `core.fscomp.id` (perlu dicek endpointnya) | Bisa, setelah tahu cara ambil datanya |
| 2 | Opsi cicilan/paylater | Keputusan bisnis + daftar ke provider (Kredivo/Akulaku) | Tidak — ini keputusan & kerja sama bisnis, bukan kode |
| 3 | Google review funnel | Place ID FS Comp + template pesan follow-up | Bisa, cepat |
| 4 | ✅ Pixel/Analytics (GA4 + Meta Pixel) | ID GA4/Pixel dari akun Google/Meta Business FS Comp | **Selesai 2026-09-19** |
| 5 | Iklan berbayar | Budget + akun Ads (di luar scope kode) | Tidak — saya bisa bantu siapkan landing-nya saja |
| 6 | ✅ Section tukar tambah mandiri | Tidak ada blocker | **Selesai 2026-09-19** |
| 7 | Indikator stok real | Perlu data stok yang gampang diupdate (manual atau dari sistem Core) | Bisa versi manual dulu |

**Rekomendasi urutan kerja**: mulai dari yang saya bisa kerjakan tanpa nunggu keputusan bisnis dulu — **poin 3 (review funnel), 4 (tracking), 6 (section tukar tambah)** — sambil kamu pertimbangkan poin 2 (cicilan) dan siapkan akses ke poin 1 (data katalog) & akun Ads.

### Update 2026-09-19: Tracking sudah terpasang

- **GA4 Measurement ID**: `G-NME96NZF9K` (property "FS COMP", stream `fscomp.id`)
- **Meta Pixel ID**: `1026284083787634`
- Dipasang di [`app/layout.tsx`](../app/layout.tsx) (base tag GA4 + Meta Pixel, load `afterInteractive` biar tidak menghambat render halaman).
- Event kustom **`whatsapp_click`** (GA4) + **`Contact`** (Meta Pixel) dipasang di SEMUA tombol WhatsApp di halaman, dengan label beda per lokasi (`nav`, `hero`, `mobile_menu`, `cta_bottom`, `footer_phone`, `tukar_tambah`, dan nama produk untuk kartu produk) — lihat fungsi `trackWaClick()` di [`app/LandingPage.tsx`](../app/LandingPage.tsx). Ini yang menjawab pertanyaan "CTA mana yang paling sering diklik" dari GA4/Meta Ads Manager nanti.
- Verifikasi: `window.gtag`/`window.fbq` terkonfirmasi jalan, `dataLayer` terisi config call yang benar, dan event `whatsapp_click` terkonfirmasi terkirim saat tombol WA disimulasikan diklik.
- **Belum bisa diverifikasi data live masuk ke dashboard GA4/Meta** (butuh traffic asli setelah deploy — GA4 biasanya perlu sampai 48 jam untuk laporan standar muncul, walau Realtime report harusnya langsung kelihatan begitu ada pengunjung asli).
