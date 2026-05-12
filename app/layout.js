import './globals.css';

export const metadata = {
  title: 'FS Comp - Laptop Second Berkualitas Pekalongan',
  description: 'FS Comp menyediakan laptop second berkualitas, rakit PC, aksesoris komputer, dan servis pendukung di Pekalongan.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
