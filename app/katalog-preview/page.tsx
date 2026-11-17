import type { Metadata } from 'next';

const TITLE = 'Katalog Laptop Second Pekalongan, Harga & Spek Ready — FS Comp';
const DESCRIPTION =
  'Daftar laptop second ready di Pekalongan (toko Wiradesa & Kajen): lengkap spek, harga, dan foto. Setiap unit lolos QC ketat, garansi software 3 bulan, hardware 3 minggu.';

// Halaman ini hanya dilayani ke pembuat pratinjau tautan lewat middleware (rewrite dari /katalog).
// Jangan diindeks; kanonik tetap katalog di core.fscomp.id.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://core.fscomp.id/katalog' },
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://fscomp.id/katalog',
    siteName: 'FS Comp',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og-katalog.jpg', width: 1200, height: 630, alt: 'Katalog Laptop Second FS Comp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-katalog.jpg'],
  },
};

export default function KatalogPreview() {
  return (
    <main style={{ padding: 32, fontFamily: 'sans-serif' }}>
      <h1>Katalog Laptop Second FS Comp</h1>
      <p>{DESCRIPTION}</p>
      <p>
        <a href="https://core.fscomp.id/katalog">Buka katalog</a>
      </p>
    </main>
  );
}
