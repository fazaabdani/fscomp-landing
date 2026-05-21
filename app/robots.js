export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://fscomp.id/sitemap.xml',
    host: 'https://fscomp.id',
  };
}
