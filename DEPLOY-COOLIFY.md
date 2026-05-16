# Deploy katalog.fscomp.id di Coolify

Paket ini sudah siap dipakai untuk Coolify memakai Dockerfile + Nginx.

## 1. Upload ke GitHub

Buka folder ini, lalu jalankan:

```bash
git init
git add .
git commit -m "Initial katalog FS Comp"
git branch -M main
git remote add origin https://github.com/USERNAME/fscomp-katalog.git
git push -u origin main
```

Ganti `USERNAME` dengan akun GitHub panjenengan.

## 2. Setting di Coolify

1. Buka Coolify.
2. New Resource.
3. Pilih GitHub Repository.
4. Pilih repo `fscomp-katalog`.
5. Build Pack: Dockerfile.
6. Port: 80.
7. Domain: `https://katalog.fscomp.id`.
8. Deploy.

## 3. DNS Cloudflare

Tambahkan:

```text
Type: A
Name: katalog
IPv4: IP VPS panjenengan
Proxy: DNS only dulu
```

Setelah HTTPS normal, proxy Cloudflare boleh dinyalakan lagi.

## 4. Cek setelah deploy

Buka:

```text
https://katalog.fscomp.id
```

Kalau data belum muncul, cek:
- Spreadsheet share sudah `Anyone with the link - Viewer`
- Tab masih bernama `LIST STOK LAPTOP SECOND`
- Kolom `SERI` dan `PROCESSOR` masih ada
- Domain sudah resolve ke IP VPS

## 5. Update data

Cukup update spreadsheet. Website akan membaca data terbaru saat dibuka/refresh.
