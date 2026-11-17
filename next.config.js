/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // /katalog ditangani middleware.ts (pengalihan ke core.fscomp.id/katalog + halaman pratinjau tautan untuk bot).
};

module.exports = nextConfig;
