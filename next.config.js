/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/katalog',
        destination: 'https://core.fscomp.id/katalog',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
