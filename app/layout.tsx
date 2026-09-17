import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://fscomp.id'),
  title: 'FS Comp — Pusat Laptop Second Pekalongan & Sekitarnya',
  description: 'FS Comp adalah pusat laptop second di Pekalongan dan sekitarnya: QC ketat, bergaransi, rating 4.8 (124 ulasan Google), rakit PC custom, aksesoris, dan servis profesional.',
  keywords: [
    'laptop second pekalongan',
    'pusat laptop second pekalongan',
    'jual laptop second wiradesa',
    'jual laptop second kota pekalongan',
    'jual laptop second kajen',
    'jual laptop second kedungwuni',
    'jual laptop second batang',
    'rakit pc custom pekalongan',
    'servis laptop pekalongan',
    'toko laptop second terpercaya',
    'toko komputer wiradesa',
    'FS Comp',
  ],
  alternates: {
    canonical: 'https://fscomp.id/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '48x48' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'FS Comp — Pusat Laptop Second Pekalongan & Sekitarnya',
    description: 'Laptop second pilihan dengan QC ketat, bergaransi, rating 4.8 (124 ulasan Google), rakit PC custom, aksesoris, dan servis profesional.',
    url: 'https://fscomp.id/',
    siteName: 'FS Comp',
    type: 'website',
    locale: 'id_ID',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'FS Comp — Pusat Laptop Second Pekalongan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FS Comp — Pusat Laptop Second Pekalongan & Sekitarnya',
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.9113613,
    longitude: 109.6091907,
  },
  hasMap: 'https://share.google/Qfp4ZeCcdg3FFfJZp',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '09:00',
      closes: '16:30',
    },
  ],
  sameAs: ['https://www.instagram.com/fscomp.id/'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '124',
  },
  areaServed: [
    { '@type': 'Place', name: 'Kabupaten Pekalongan' },
    { '@type': 'Place', name: 'Kota Pekalongan' },
    { '@type': 'Place', name: 'Kabupaten Batang' },
  ],
  description: 'FS Comp menyediakan laptop second pilihan dengan QC ketat, rakit PC custom, aksesoris, dan servis profesional di Pekalongan dan sekitarnya.',
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
