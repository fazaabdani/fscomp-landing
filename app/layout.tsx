import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FS Comp — Laptop Second Berkualitas, Wiradesa Pekalongan',
  description: 'FS Comp menyediakan laptop second pilihan dengan QC ketat, rakit PC custom, aksesoris, dan servis profesional di Wiradesa, Pekalongan.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
