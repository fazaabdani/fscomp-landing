import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const GA_MEASUREMENT_ID = 'G-NME96NZF9K';
const META_PIXEL_ID = '1026284083787634';

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

        {/* Google Analytics (GA4) */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
