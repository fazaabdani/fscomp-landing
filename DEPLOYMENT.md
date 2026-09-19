# Deploy Production — fscomp.id

## Ringkasan

- **Server**: VPS 1 Hostinger (`187.77.127.250`, hostname panel `vps.fsdev.id`), akses SSH pakai key `~/.ssh/barbarluxe_vps`, user `root`.
- **Lokasi app di server**: `/opt/fscomp-family/fscomp-landing/`
  - `docker-compose.yaml` — definisi container yang jalan (network `coolify`, Traefik label untuk `fscomp.id`)
  - `.env` — env var production (tidak di git)
  - `src/` — clone git repo ini, dipakai buat build image
- **Container**: nama `s2wmuy4o6nu8dov7ox1cowti-002756567765` (nama ini peninggalan Coolify lama, jangan bingung — bukan nama acak buatan sendiri, **jangan diubah** supaya Traefik label & network alias tetap konsisten)

## ⚠️ Riwayat penting: kenapa deploy-nya manual (bukan via Coolify)

Dulu app ini (dan beberapa app lain: katalog.fscomp.id, qc.fscomp.id, arisa.fscomp.id, evolution-api, dll — semua dalam "project" Coolify bernama **"my-first-project"**) dikelola oleh instalasi **Coolify yang jalan di VPS lama (langganan Rumahweb)**. Sebelum VPS itu mati/berhenti, semua container dipindah manual ke VPS Hostinger ini — **tapi Coolify control plane-nya sendiri TIDAK ikut dipindah**, cuma mati bareng VPS lama.

Akibatnya:
- Container tetap hidup & jalan normal di VPS Hostinger (dengan label Coolify lama yang masih menempel, tapi cuma metadata, tidak fungsional lagi).
- **Tidak ada Coolify manapun yang bisa dipakai buat redeploy app ini** — dicek 19 Sep 2026: server toko (`coolify-core.fscomp.id`) punya Coolify sendiri yang masih hidup, TAPI project "my-first-project" tidak terdaftar di situ sama sekali (dicek via API, cuma ada project FScomp.id/fsstore.id/Nexabyte, server cuma "localhost"). VPS Hostinger ini sendiri juga tidak punya instalasi Coolify (cuma ada container `coolify-proxy`+`coolify-sentinel`, peninggalan/komponen pendamping doang, bukan Coolify penuh).
- **Kesimpulan: redeploy HARUS manual pakai Docker langsung** (prosedur di bawah), sampai kapan pun kecuali nanti diputuskan pasang Coolify baru atau pindah app ini ke server toko.

## Prosedur redeploy (kalau ada perubahan kode baru)

1. **Push perubahan ke GitHub** (`git push origin main`) — repo publik: `https://github.com/fazaabdani/fscomp-landing`. Catatan: **tidak ada webhook**, jadi push saja tidak otomatis deploy.
2. **Tarik kode terbaru di server & build image baru**:
   ```bash
   ssh -i ~/.ssh/barbarluxe_vps root@187.77.127.250 "cd /opt/fscomp-family/fscomp-landing/src && git pull origin main"
   ```
   Ambil commit SHA pendek buat nama tag image:
   ```bash
   ssh -i ~/.ssh/barbarluxe_vps root@187.77.127.250 "cd /opt/fscomp-family/fscomp-landing/src && git rev-parse --short HEAD"
   ```
   Build image (ganti `<SHA>` dengan hasil di atas):
   ```bash
   ssh -i ~/.ssh/barbarluxe_vps root@187.77.127.250 "cd /opt/fscomp-family/fscomp-landing/src && docker build -t fscomp-landing:<SHA> ."
   ```
3. **(Opsional tapi disarankan) Test dulu sebelum swap live** — jalankan image baru di port lokal, cek tidak error:
   ```bash
   ssh -i ~/.ssh/barbarluxe_vps root@187.77.127.250 "docker run -d --rm --name fscomp-landing-test -p 127.0.0.1:3099:3000 fscomp-landing:<SHA> && sleep 3 && curl -s -o /dev/null -w 'HTTP:%{http_code}\n' http://127.0.0.1:3099 && docker stop fscomp-landing-test"
   ```
4. **Backup `docker-compose.yaml` lama**, lalu update tag image ke yang baru:
   ```bash
   ssh -i ~/.ssh/barbarluxe_vps root@187.77.127.250 "cp /opt/fscomp-family/fscomp-landing/docker-compose.yaml /opt/fscomp-family/fscomp-landing/docker-compose.yaml.bak-\$(date +%Y%m%d-%H%M%S)"
   ssh -i ~/.ssh/barbarluxe_vps root@187.77.127.250 "sed -i 's|image: .*|image: '\"'\"'fscomp-landing:<SHA>'\"'\"'|' /opt/fscomp-family/fscomp-landing/docker-compose.yaml"
   ```
   (Atau edit manual filenya kalau sed-nya ribet dikutip — cukup ganti baris `image:` jadi `image: 'fscomp-landing:<SHA>'`.)
5. **Swap container** (ini yang bikin fscomp.id restart sebentar, downtime cuma beberapa detik):
   ```bash
   ssh -i ~/.ssh/barbarluxe_vps root@187.77.127.250 "cd /opt/fscomp-family/fscomp-landing && docker compose up -d && docker compose ps"
   ```
6. **Verifikasi dari luar**:
   ```bash
   curl -sI https://fscomp.id
   ```
   Pastikan `HTTP/1.1 200 OK`, dan cek konten yang baru berubah beneran muncul.
7. **(Opsional) Bersihkan image lama** setelah yakin versi baru stabil beberapa hari:
   ```bash
   ssh -i ~/.ssh/barbarluxe_vps root@187.77.127.250 "docker image prune -a --filter 'label!=keep'"
   ```
   (Hati-hati, ini bisa hapus image app LAIN juga yang tidak dipakai container manapun — cek dulu `docker images` sebelum prune kalau ragu.)

## Rollback cepat kalau ada masalah

```bash
ssh -i ~/.ssh/barbarluxe_vps root@187.77.127.250 "cp /opt/fscomp-family/fscomp-landing/docker-compose.yaml.bak-<timestamp> /opt/fscomp-family/fscomp-landing/docker-compose.yaml && cd /opt/fscomp-family/fscomp-landing && docker compose up -d"
```

## Riwayat deploy

| Tanggal | Commit | Catatan |
|---|---|---|
| 2026-09-19 | `8ff0a68` | Deploy manual pertama setelah ketauan Coolify lama sudah mati. Menambahkan `Dockerfile` + `output: 'standalone'` di `next.config.js` supaya build tidak lagi bergantung nixpacks/Coolify sama sekali. |
