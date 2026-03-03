import { Metadata, MetadataRoute } from 'next';
import { BLOG_POSTS, CITIES, slugify } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://inessence.vercel.app'; // Replace with actual domain if known, inessence.vercel.app seems to be the current one

    // Main pages
    const routes = [
        '',
        '/blog',
        '/consultations',
        '/contact',
        '/techniques',
        '/mentions-legales',
        '/confidentialite',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Blog posts
    const blogRoutes = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // City pages
    const cityRoutes = CITIES.map((city) => ({
        url: `${baseUrl}/villes/${slugify(city)}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...blogRoutes, ...cityRoutes];
}
