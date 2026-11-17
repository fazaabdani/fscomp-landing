import { NextRequest, NextResponse } from 'next/server';

// /katalog adalah pintu masuk ke katalog di core.fscomp.id.
// - Pengunjung biasa: dialihkan (307) ke katalog, query (UTM dll.) ikut terbawa.
// - Pembuat pratinjau tautan (WhatsApp, Facebook, Telegram, dll.): dilayani halaman kecil berisi tag Open Graph
//   di alamat yang sama (tanpa pengalihan), supaya pratinjau (judul, deskripsi, gambar) muncul saat tautan dibagikan.
//   Googlebot sengaja TIDAK termasuk, supaya perilaku SEO tidak berubah.
const KATALOG = 'https://core.fscomp.id/katalog';
const PREVIEW_BOT = /WhatsApp|facebookexternalhit|Facebot|TelegramBot|Twitterbot|LinkedInBot|Slackbot|Discordbot|Pinterest|SkypeUriPreview|Viber/i;

export function middleware(req: NextRequest) {
  const ua = req.headers.get('user-agent') ?? '';
  if (PREVIEW_BOT.test(ua)) {
    return NextResponse.rewrite(new URL('/katalog-preview', req.url));
  }
  const dest = new URL(KATALOG);
  dest.search = req.nextUrl.search;
  return NextResponse.redirect(dest, 307);
}

export const config = {
  matcher: ['/katalog'],
};
