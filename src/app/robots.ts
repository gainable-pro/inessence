import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.inessencenaturopathe.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/private/'], // Add basic sensible defaults
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
