import { NextRequest, NextResponse } from 'next/server';

// /katalog (laptop) dan /pc (PC, monitor, komponen) adalah pintu masuk ke katalog di core.fscomp.id.
// - Pengunjung biasa: dialihkan (307) ke katalog tujuan, query (UTM dll.) ikut terbawa.
// - Pembuat pratinjau tautan (WhatsApp, Facebook, Telegram, dll.): dilayani halaman kecil berisi tag Open Graph
//   di alamat yang sama (tanpa pengalihan), supaya pratinjau (judul, deskripsi, gambar) muncul saat tautan dibagikan.
//   Googlebot sengaja TIDAK termasuk, supaya perilaku SEO tidak berubah.
const TARGET: Record<string, { to: string; preview: string }> = {
  '/katalog': { to: 'https://core.fscomp.id/katalog', preview: '/katalog-preview' },
  '/pc': { to: 'https://core.fscomp.id/katalog/pc', preview: '/pc-preview' },
};
const PREVIEW_BOT = /WhatsApp|facebookexternalhit|Facebot|TelegramBot|Twitterbot|LinkedInBot|Slackbot|Discordbot|Pinterest|SkypeUriPreview|Viber/i;

export function middleware(req: NextRequest) {
  const entry = TARGET[req.nextUrl.pathname];
  if (!entry) return NextResponse.next();
  const ua = req.headers.get('user-agent') ?? '';
  if (PREVIEW_BOT.test(ua)) {
    return NextResponse.rewrite(new URL(entry.preview, req.url));
  }
  const dest = new URL(entry.to);
  dest.search = req.nextUrl.search;
  return NextResponse.redirect(dest, 307);
}

export const config = {
  matcher: ['/katalog', '/pc'],
};
