import type { Metadata } from 'next';

const TITLE = 'Katalog PC, Monitor & Komponen Pekalongan — FS Comp';
const DESCRIPTION =
  'PC set lengkap dengan monitor, PC rakitan, monitor, komponen, dan aksesoris dari FS Comp. Bisa beli satu set atau satuan, kondisi second maupun baru tertera jelas di tiap barang.';

// Hanya dilayani ke pembuat pratinjau tautan lewat middleware (rewrite dari /pc). Jangan diindeks;
// kanonik tetap katalog PC di core.fscomp.id.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://core.fscomp.id/katalog/pc' },
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://fscomp.id/pc',
    siteName: 'FS Comp',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og-pc.jpg', width: 1200, height: 630, alt: 'Katalog PC dan monitor FS Comp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-pc.jpg'],
  },
};

export default function PcPreview() {
  return (
    <main style={{ padding: 32, fontFamily: 'sans-serif' }}>
      <h1>Katalog PC dan Monitor FS Comp</h1>
      <p>{DESCRIPTION}</p>
      <p>
        <a href="https://core.fscomp.id/katalog/pc">Buka katalog PC</a>
      </p>
    </main>
  );
}
