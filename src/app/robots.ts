import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.inessence-naturopathie.fr'; // Assuming a typical domain, we'll use this as fallback if env var is missing

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/private/'], // Add basic sensible defaults
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
