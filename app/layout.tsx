import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://fscomp.id'),
  title: 'FS Comp — Laptop Second Berkualitas, Wiradesa Pekalongan',
  description: 'FS Comp menyediakan laptop second pilihan dengan QC ketat, rakit PC custom, aksesoris, dan servis profesional di Wiradesa, Pekalongan.',
  keywords: [
    'laptop second pekalongan',
    'jual laptop second wiradesa',
    'rakit pc custom pekalongan',
    'servis laptop pekalongan',
    'toko laptop second terpercaya',
    'FS Comp',
  ],
  alternates: {
    canonical: 'https://fscomp.id/',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'FS Comp — Laptop Second Berkualitas, Wiradesa Pekalongan',
    description: 'Laptop second pilihan dengan QC ketat, rakit PC custom, aksesoris, dan servis profesional untuk kebutuhan kerja, sekolah, dan bisnis Anda.',
    url: 'https://fscomp.id/',
    siteName: 'FS Comp',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'FS Comp — Laptop Second Berkualitas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FS Comp — Laptop Second Berkualitas, Wiradesa Pekalongan',
    description: 'Laptop second pilihan dengan QC ketat, rakit PC custom, aksesoris, dan servis profesional.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ElectronicsStore',
  name: 'FS Comp',
  image: 'https://fscomp.id/og-image.png',
  url: 'https://fscomp.id/',
  telephone: '+62816660056',
  priceRange: 'Rp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jalan Raya Wiradesa No.1 RT22, RW.05, Ds. Wiradesa',
    addressLocality: 'Kec. Wiradesa, Kabupaten Pekalongan',
    addressRegion: 'Jawa Tengah',
    postalCode: '51152',
    addressCountry: 'ID',
  },
  areaServed: 'ID',
  description: 'FS Comp menyediakan laptop second pilihan dengan QC ketat, rakit PC custom, aksesoris, dan servis profesional di Wiradesa, Pekalongan.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
