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
            "telephone": "+33761211132",
            "priceRange": "€€",
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Thursday"],
                    "opens": "09:00",
                    "closes": "16:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Friday",
                    "opens": "09:00",
                    "closes": "19:00"
                }
            ],
            "image": "https://www.inessencenaturopathe.com/images/logo-inessence.png",
            "sameAs": [
                "https://www.medoucine.com/consultation/miramas/ines-fernandez/23273?addressId=86159&utm_source=google&utm_medium=organic&utm_campaign=gbp-partoo&utm_content=reserver-en-ligne"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Prestations de Naturopathie & Soins Inessence",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Bilan de Vitalité Naturopathique",
                            "description": "Anamnèse complète et programme d'hygiène vitale personnalisé à Miramas."
                        },
                        "price": "80",
                        "priceCurrency": "EUR"
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Drainage Lymphatique Brésilien",
                            "description": "Soin détoxifiant, drainant et sculptant d'1h15 à Miramas."
                        },
                        "price": "90",
                        "priceCurrency": "EUR"
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Massage Facial Kobido Japonais",
                            "description": "Rituel liftant ancestral japonais anti-âge naturel."
                        },
                        "price": "70",
                        "priceCurrency": "EUR"
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Réflexologie Plantaire",
                            "description": "Séance de 50 minutes avec temps d'échange pour stimuler l'autorégulation corporelle."
                        },
                        "price": "45",
                        "priceCurrency": "EUR"
                    }
                ]
            },
            "areaServed": [
                "Miramas", "Istres", "Salon-de-Provence", "Grans", "Saint-Chamas", "Fos-sur-Mer", "Lançon-Provence", "Aix-en-Provence", "Marseille", "Bouches-du-Rhône"
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
