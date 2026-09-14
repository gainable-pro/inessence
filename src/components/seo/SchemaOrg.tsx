interface FAQQuestion {
    question: string;
    answer: string;
}

interface LocalBusinessData {
    city?: string;
    description?: string;
    url?: string;
}

interface FAQData {
    questions: FAQQuestion[];
}

export function SchemaOrg({ 
    type, 
    data 
}: { 
    type: 'LocalBusiness' | 'FAQPage'; 
    data: LocalBusinessData | FAQData;
}) {
    let schemaRecord: Record<string, unknown> = {};

    if (type === 'LocalBusiness') {
        const lbData = data as LocalBusinessData;
        const cityName = lbData.city || "Miramas";
        schemaRecord = {
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "name": `INESSENCE Naturopathe — ${cityName}`,
            "description": lbData.description || `Cabinet de naturopathie et bilan de vitalité à ${cityName} et en visioconférence.`,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "6 rue pierre tristani",
                "addressLocality": cityName,
                "postalCode": "13140",
                "addressRegion": "Bouches-du-Rhône",
                "addressCountry": "FR"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.5817,
                "longitude": 5.0022
            },
            "url": lbData.url || "https://www.inessencenaturopathe.com",
            "priceRange": "€€",
            "areaServed": [
                "Miramas", "Istres", "Salon-de-Provence", "Aix-en-Provence", "Marseille", "Bouches-du-Rhône"
            ]
        };
    } else if (type === 'FAQPage') {
        const faqData = data as FAQData;
        schemaRecord = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.questions.map((q) => ({
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
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaRecord) }}
        />
    );
}
