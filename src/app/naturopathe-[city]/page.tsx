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

    // Obtenir des villes proches pour le maillage (approximation simple)
    const nearbyCities = CITIES
        .filter(c => c !== cityName)
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);

    return (
        <article className="animate-fade-in">
            {/* City Hero */}
            <section style={{
                padding: '120px 0 80px',
                backgroundColor: 'var(--white)',
                borderBottom: '1px solid rgba(0,0,0,0.05)'
            }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <nav style={{ fontSize: '0.8rem', marginBottom: '24px', opacity: 0.6, letterSpacing: '1px' }}>
                        <Link href="/" className="hover:text-sauge">ACCUEIL</Link> / <span>NATUROPATHE {cityName.toUpperCase()}</span>
                    </nav>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '32px' }}>
                        Naturopathe à <span className="text-sauge">{cityName}</span> – Consultation personnalisée
                    </h1>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                        Vous résidez à <strong>{cityName}</strong> ou dans les environs ? Je vous accompagne dans votre démarche de santé naturelle pour retrouver vitalité et équilibre durable. Déplacez-vous au cabinet de Miramas, en consultation à domicile ou optez pour la visio-consultation.
                    </p>
                </div>
            </section>

            {/* Main Content - SEO Optimized */}
            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="seo-content" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>

                        <div>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '24px' }}>Pourquoi consulter un naturopathe à {cityName} ?</h2>
                            <p style={{ marginBottom: '16px' }}>
                                La vie quotidienne à {cityName} peut amener son lot de stress et de déséquilibres. Que vous souffriez de troubles digestifs, de fatigue chronique ou que vous souhaitiez simplement optimiser votre capital santé, la naturopathie offre des solutions concrètes et naturelles.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                                <li style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '4px', fontSize: '0.9rem' }}>Gestion du stress & Anxiété</li>
                                <li style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '4px', fontSize: '0.9rem' }}>Sommeil réparateur</li>
                                <li style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '4px', fontSize: '0.9rem' }}>Confort digestif</li>
                                <li style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '4px', fontSize: '0.9rem' }}>Rééquilibrage alimentaire</li>
                            </ul>
                        </div>

                        <div>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '24px' }}>Ma méthode d'accompagnement</h2>
                            <p>Mon approche repose sur trois piliers fondamentaux : une alimentation vivante et adaptée, la gestion des émotions et du stress, et une activité physique harmonieuse. Chaque séance à {cityName} débute par un bilan de vitalité approfondi.</p>
                        </div>

                        <div style={{ padding: '40px', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '16px' }}>Prêt à transformer votre santé ?</h3>
                            <p style={{ marginBottom: '24px', opacity: 0.8 }}>Bénéficiez d'une première approche personnalisée selon vos besoins spécifiques à {cityName}.</p>
                            <Link href="/contact" className="btn-premium">PRENDRE RENDEZ-VOUS</Link>
                        </div>

                        <div>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '24px' }}>FAQ Local - Naturopathie {cityName}</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <div>
                                    <h4 style={{ color: 'var(--accent-sauge)', marginBottom: '8px' }}>Comment se déroule une séance depuis {cityName} ?</h4>
                                    <p className="text-sm border-l-2 border-slate-200 pl-4">La première consultation dure environ 1h30. Elle peut se faire en cabinet proche de {cityName} ou directement en visioconférence pour votre confort.</p>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--accent-sauge)', marginBottom: '8px' }}>La naturopathie est-elle remboursée ?</h4>
                                    <p className="text-sm border-l-2 border-slate-200 pl-4">De nombreuses mutuelles prennent en charge tout ou partie des consultations de naturopathie effectuée à {cityName}. Renseignez-vous auprès de votre organisme.</p>
                                </div>
                            </div>
                        </div>

                        {/* Internal Linking / Maillage */}
                        <div style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                            <h4 style={{ fontSize: '0.9rem', marginBottom: '16px', letterSpacing: '1px', opacity: 0.6 }}>AUTRES VILLES D'INTERVENTION</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                {nearbyCities.map(city => (
                                    <Link
                                        key={city}
                                        href={`/naturopathe-${slugify(city)}`}
                                        className="hover:text-sauge"
                                        style={{ fontSize: '0.85rem', textDecoration: 'underline' }}
                                    >
                                        Naturopathe {city}
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </article>
    );
}
