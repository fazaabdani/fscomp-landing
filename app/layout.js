import './globals.css';

const siteUrl = 'https://fscomp.id';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ComputerStore',
  name: 'FS Comp',
  alternateName: 'FSCOMP',
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  image: `${siteUrl}/icon.svg`,
  description:
    'FS Comp adalah pusat laptop second berkualitas, rakit PC, aksesoris komputer, dan servis laptop/PC di Wiradesa, Pekalongan.',
  telephone: '+62816660056',
  priceRange: 'Rp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Wiradesa No.1 RT22/RW05',
    addressLocality: 'Wiradesa',
    addressRegion: 'Pekalongan',
    addressCountry: 'ID',
  },
  areaServed: ['Wiradesa', 'Pekalongan', 'Batang', 'Pemalang', 'Indonesia'],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'Laptop second berkualitas',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Rakit PC custom',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Servis laptop dan komputer',
      },
    },
  ],
  sameAs: ['https://katalog.fscomp.id'],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'FS Comp - Pusat Laptop Second Berkualitas Pekalongan',
    template: '%s | FS Comp Pekalongan',
  },
  description:
    'FS Comp adalah pusat laptop second berkualitas di Pekalongan. Tersedia laptop second bergaransi, rakit PC custom, aksesoris komputer, dan servis laptop/PC di Wiradesa.',
  keywords: [
    'pusat laptop Pekalongan',
    'pusat laptop second Pekalongan',
    'toko laptop second Pekalongan',
    'laptop second Wiradesa',
    'jual laptop second Pekalongan',
    'rakit PC Pekalongan',
    'servis laptop Pekalongan',
    'FS Comp',
    'FSCOMP',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FS Comp - Pusat Laptop Second Berkualitas Pekalongan',
    description:
      'Pusat laptop second berkualitas, rakit PC custom, aksesoris komputer, dan servis laptop/PC di Wiradesa, Pekalongan.',
    url: siteUrl,
    siteName: 'FS Comp',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'FS Comp - Pusat Laptop Second Berkualitas Pekalongan',
    description:
      'Laptop second berkualitas, rakit PC, aksesoris komputer, dan servis laptop/PC di Pekalongan.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
