import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FS Comp — Pusat Laptop Second Pekalongan',
    short_name: 'FS Comp',
    description: 'Pusat laptop second berkualitas, rakit PC custom, aksesoris, dan servis profesional di Pekalongan dan sekitarnya.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050b18',
    theme_color: '#050b18',
    icons: [
      { src: '/icon.png', sizes: '48x48', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '192x192', type: 'image/png' },
    ],
  };
}
