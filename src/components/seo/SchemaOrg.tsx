export function SchemaOrg({ type, data }: { type: 'LocalBusiness' | 'FAQPage' | 'Practitioner', data: any }) {
    let schema: any = {};

    if (type === 'LocalBusiness') {
        schema = {
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "name": "INESSENCE Naturopathie",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": data.city || "Miramas",
                "addressRegion": "Provence-Alpes-Côte d'Azur",
                "addressCountry": "FR"
            },
            "url": "https://inessence.fr",
            "telephone": "+33000000000",
            "priceRange": "$$",
            "image": "https://inessence.fr/logo.png"
        };
    }

    if (type === 'FAQPage') {
        schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": data.questions.map((q: any) => ({
                "@type": "Question",
                "name": q.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": q.answer
                }
            }))
        };
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
