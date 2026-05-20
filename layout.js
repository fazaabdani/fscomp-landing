import './globals.css';

export const metadata = {
  title: 'FS Comp - Laptop Second Berkualitas Pekalongan',
  description: 'FS Comp menyediakan laptop second berkualitas, rakit PC, aksesoris komputer, dan servis pendukung di Pekalongan.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
