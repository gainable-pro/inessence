import { MetadataRoute } from 'next';
import { BLOG_POSTS, CITIES, PROBLEMATIQUES, TECHNIQUES, slugify } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.inessencenaturopathe.com';
    const now = new Date();

    // Pages principales prioritaires
    const coreRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/prestations`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/consultations`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/problematiques`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/techniques`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/articles`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/mentions-legales`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/confidentialite`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // Pages Problématiques de santé ciblées Miramas
    const problemRoutes: MetadataRoute.Sitemap = PROBLEMATIQUES.map((prob) => ({
        url: `${baseUrl}/problematiques/${prob.slug}-miramas`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // Pages Techniques approfondies
    const techniqueRoutes: MetadataRoute.Sitemap = TECHNIQUES.map((tech) => ({
        url: `${baseUrl}/techniques/${tech.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // Articles de Blog informatifs
    const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // Pages Villes locales (Miramas et villes clés du pourtour de l'Étang de Berre en priorité haute)
    const priorityCities = ['Miramas', 'Istres', 'Salon-de-Provence', 'Grans', 'Saint-Chamas', 'Fos-sur-Mer', 'Lançon-Provence', 'Cornillon-Confoux'];

    const cityRoutes: MetadataRoute.Sitemap = CITIES.map((city) => {
        const isPriority = priorityCities.includes(city);
        return {
            url: `${baseUrl}/villes/${slugify(city)}`,
            lastModified: now,
            changeFrequency: isPriority ? 'weekly' : 'monthly',
            priority: city === 'Miramas' ? 0.9 : (isPriority ? 0.8 : 0.6),
        };
    });

    return [
        ...coreRoutes,
        ...problemRoutes,
        ...techniqueRoutes,
        ...blogRoutes,
        ...cityRoutes,
    ];
}
