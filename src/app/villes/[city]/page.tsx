import Link from "next/link";
import { CITIES, slugify } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return CITIES.map((city) => ({
        city: slugify(city),
    }));
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const cityName = CITIES.find(c => slugify(c) === citySlug);

    if (!cityName) {
        notFound();
    }

    const nearbyCities = CITIES
        .filter(c => c !== cityName)
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);

    return (
        <article className="animate-fade-in">
            <section style={{ padding: '120px 0 80px', backgroundColor: 'var(--white)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <nav style={{ fontSize: '0.8rem', marginBottom: '24px', opacity: 0.6 }}>
                        <Link href="/" className="hover:text-sauge">ACCUEIL</Link> / <span>NATUROPATHE {cityName.toUpperCase()}</span>
                    </nav>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '32px' }}>
                        Naturopathe à <span className="text-sauge">{cityName}</span> – Consultation personnalisée
                    </h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                        Vous résidez à <strong>{cityName}</strong> ? Je vous accompagne dans votre démarche de santé naturelle pour retrouver vitalité et équilibre durable.
                    </p>
                </div>
            </section>

            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '40px' }}>
                        {nearbyCities.map(city => (
                            <Link key={city} href={`/villes/${slugify(city)}`} className="hover:text-sauge" style={{ fontSize: '0.85rem', textDecoration: 'underline' }}>
                                Naturopathe {city}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </article>
    );
}
