import Link from "next/link";
import { CITIES, slugify } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SchemaOrg } from "@/components/seo/SchemaOrg";

const MEDOUCINE_URL = "https://www.medoucine.com/consultation/miramas/ines-fernandez/23273?addressId=86159&utm_source=google&utm_medium=organic&utm_campaign=gbp-partoo&utm_content=reserver-en-ligne";

export async function generateStaticParams() {
    return CITIES.map((city) => ({
        city: slugify(city),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city: citySlug } = await params;
    const cityName = CITIES.find(c => slugify(c) === citySlug);
    if (!cityName) return { title: 'Ville non trouvée' };

    const title = `Naturopathe à ${cityName} | Drainage, Kobido & Bilan Vitalité | Inessence`;
    const description = `Consultation de naturopathie pour les habitants de ${cityName} et environs : bilan de vitalité, drainage lymphatique brésilien, réflexologie et Kobido. Cabinet à Miramas & Visio.`;
    const canonicalUrl = `https://www.inessencenaturopathe.com/villes/${citySlug}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: canonicalUrl,
        },
        alternates: {
            canonical: canonicalUrl,
        },
    };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const cityName = CITIES.find(c => slugify(c) === citySlug);

    if (!cityName) {
        notFound();
    }

    // Sélection déterministe et stable des villes voisines pour un crawl pérenne de Google
    const cityIndex = CITIES.findIndex(c => c === cityName);
    const nearbyCities = CITIES
        .filter(c => c !== cityName)
        .slice(cityIndex % 10, (cityIndex % 10) + 8);

    const isMiramas = cityName.toLowerCase() === "miramas";

    const faqItems = [
        { 
            question: `Comment se déroule la première consultation pour les résidents de ${cityName} ?`, 
            answer: `La première séance dure entre 1h30 et 2h. C'est un bilan vital approfondi où nous analysons en détail votre mode de vie, votre alimentation, votre sommeil et votre état émotionnel. Je vous remets ensuite votre Programme d'Hygiène Vitale personnalisé.` 
        },
        { 
            question: `Comment accéder au cabinet Inessence depuis ${cityName} ?`, 
            answer: isMiramas 
                ? "Le cabinet Inessence est situé au 6 rue Pierre Tristani, 13140 Miramas. Des places de stationnement sont disponibles à proximité immédiate pour vous accueillir en toute tranquillité."
                : `Le cabinet est idéalement situé à Miramas (6 rue Pierre Tristani), facilement accessible depuis ${cityName} en voiture ou transports. Pour les personnes ne pouvant pas se déplacer, les consultations de naturopathie sont également assurées à distance par visioconférence (Zoom ou WhatsApp).` 
        },
        { 
            question: "Les consultations de naturopathie sont-elles remboursées ?", 
            answer: "Bien que non prises en charge par la Sécurité Sociale, un nombre croissant de mutuelles remboursent les séances de naturopathie et de réflexologie plantaire sur présentation de facture. Renseignez-vous auprès de votre complémentaire santé." 
        },
        { 
            question: `Quels soins corporels proposez-vous aux habitants de ${cityName} ?`, 
            answer: "En complément du bilan naturopathique, je pratique au cabinet le drainage lymphatique brésilien (séance 1h15 et cures), le rituel liftant ancestral Kobido, le massage Ayurvédique, le Lomi-Lomi, le massage prénatal ainsi que la réflexologie plantaire de 50 minutes." 
        }
    ];

    return (
        <article className="animate-fade-in" style={{ backgroundColor: 'var(--sable-warm)' }}>
            <SchemaOrg 
                type="LocalBusiness" 
                data={{ 
                    city: cityName, 
                    description: `Cabinet de naturopathie et soins bien-être pour les résidents de ${cityName} : bilan vital, drainage brésilien, Kobido et réflexologie.` 
                }} 
            />
            <SchemaOrg type="FAQPage" data={{ questions: faqItems }} />

            {/* HERO SECTION PREMIUM */}
            <section style={{
                padding: '160px 0 100px',
                background: 'linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url("/images/media__1772494385825.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <nav style={{ fontSize: '0.85rem', marginBottom: '28px', letterSpacing: '2px', opacity: 0.7, textTransform: 'uppercase' }}>
                        <Link href="/" className="hover-text-sauge">ACCUEIL</Link> / <span>Naturopathe {cityName}</span>
                    </nav>
                    <span style={{ fontSize: '0.9rem', color: 'var(--gold-warm)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
                        Cabinet de Santé Naturelle & Soins Corporels
                    </span>
                    <h1 className="typewriter" style={{ color: 'var(--text-main)', marginBottom: '32px' }}>
                        Naturopathe à {cityName}
                    </h1>
                    <p style={{ fontSize: '1.35rem', color: 'var(--text-muted)', fontWeight: 300, maxWidth: '820px', margin: '0 auto 36px', lineHeight: 1.7 }}>
                        Retrouvez votre vitalité originelle à proximité de <strong>{cityName}</strong>. Bilan de vitalité, drainage lymphatique brésilien, réflexologie plantaire et massage Kobido au cabinet de Miramas ou en visioconférence.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        <a 
                            href={MEDOUCINE_URL} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-premium" 
                            style={{ padding: '18px 40px', fontSize: '1.05rem', borderRadius: '100px' }}
                        >
                            📅 PRENDRE RENDEZ-VOUS EN LIGNE →
                        </a>
                        <Link 
                            href="/prestations" 
                            className="btn-outline" 
                            style={{ padding: '18px 40px', fontSize: '1.05rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center' }}
                        >
                            VOIR LES PRESTATIONS & TARIFS
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 1: POURQUOI CONSULTER ? (ZIG-ZAG) */}
            <section style={{ padding: '110px 0', backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '70px', alignItems: 'center' }}>
                        <div>
                            <span style={{ fontSize: '0.85rem', color: 'var(--gold-warm)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                                Approche Globale & Personnalisée
                            </span>
                            <h2 className="typewriter" style={{ marginBottom: '32px', fontSize: '2.8rem' }}>
                                Pourquoi consulter un naturopathe près de <span className="text-sauge">{cityName}</span> ?
                            </h2>
                            <p style={{ marginBottom: '20px', fontSize: '1.08rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                                Vous habitez à <strong>{cityName}</strong> ou dans les communes avoisinantes et vous faites face à une fatigue persistante, des troubles du sommeil, des dérèglements digestifs ou un stress chronique ?
                            </p>
                            <p style={{ marginBottom: '24px', fontSize: '1.08rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                                La naturopathie ne cherche pas simplement à faire taire un symptôme passager : elle remonte à la cause profonde de vos déséquilibres pour relancer les capacités naturelles d&apos;autoguérison et de régénération de votre corps.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
                                <div style={{ padding: '24px', background: 'var(--bg-secondary)', borderRadius: '20px' }}>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--sauge-dark)' }}>🌱 Solutions Douces</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Plantes médicinales, huiles essentielles, alimentation vivante et micronutrition.</p>
                                </div>
                                <div style={{ padding: '24px', background: 'var(--bg-secondary)', borderRadius: '20px' }}>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--sauge-dark)' }}>📍 Proximité Immédiate</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Cabinet calme à Miramas, stationnement aisé ou consultation à distance.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
                            <img src="/images/stress_relief_zen_1772494485058.png" alt={`Naturopathie ${cityName}`} style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: SOINS CORPORELS SIGNATURE */}
            <section style={{ padding: '100px 0', backgroundColor: 'var(--sable-warm)' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--gold-warm)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
                            Au Cabinet de Miramas
                        </span>
                        <h2 className="font-serif" style={{ fontSize: '2.8rem', marginTop: '10px' }}>
                            Des Soins Holistiques pour les Habitants de {cityName}
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        <div style={{ backgroundColor: 'var(--white)', padding: '36px', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.03)' }}>
                            <h4 style={{ fontSize: '1.4rem', color: 'var(--sauge-dark)', marginBottom: '10px' }}>Drainage Brésilien</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                                Séance complète d&apos;1h15 (90€) ou cures de 6 et 10 séances pour dégonfler, drainer la rétention d&apos;eau et sculpter les contours.
                            </p>
                            <Link href="/prestations" style={{ fontSize: '0.85rem', color: 'var(--gold-warm)', fontWeight: 700 }}>DÉCOUVRIR LE DRAINAGE →</Link>
                        </div>
                        <div style={{ backgroundColor: 'var(--white)', padding: '36px', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.03)' }}>
                            <h4 style={{ fontSize: '1.4rem', color: 'var(--sauge-dark)', marginBottom: '10px' }}>Massage Kobido</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                                Rituel impérial japonais du visage (70€, forfait 10 séances à 560€) pour un effet liftant naturel et un coup d&apos;éclat anti-âge immédiat.
                            </p>
                            <Link href="/prestations" style={{ fontSize: '0.85rem', color: 'var(--gold-warm)', fontWeight: 700 }}>DÉCOUVRIR LE KOBIDO →</Link>
                        </div>
                        <div style={{ backgroundColor: 'var(--white)', padding: '36px', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.03)' }}>
                            <h4 style={{ fontSize: '1.4rem', color: 'var(--sauge-dark)', marginBottom: '10px' }}>Réflexologie Plantaire</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                                Séance de 50 minutes (45€) avec temps d&apos;échange pour dénouer les tensions, stimuler les organes et apaiser le système nerveux.
                            </p>
                            <Link href="/prestations" style={{ fontSize: '0.85rem', color: 'var(--gold-warm)', fontWeight: 700 }}>DÉCOUVRIR LA RÉFLEXOLOGIE →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: EXPERTISE LOCALE & FAQ */}
            <section style={{ padding: '110px 0', backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--gold-warm)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
                            Tout savoir
                        </span>
                        <h2 className="typewriter" style={{ fontSize: '3rem', marginTop: '10px' }}>
                            Questions fréquentes à <span className="text-gold">{cityName}</span>
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gap: '24px' }}>
                        {faqItems.map((faq, idx) => (
                            <div key={idx} style={{ padding: '36px', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.03)' }}>
                                <h4 style={{ fontSize: '1.35rem', marginBottom: '12px', color: 'var(--sauge-dark)' }}>{faq.question}</h4>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.02rem', margin: 0 }}>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTIONS VILLES ALENTOURS */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--text-main)', color: 'var(--white)' }}>
                <div className="container">
                    <h3 style={{ color: 'var(--gold-vibrant)', marginBottom: '32px', textAlign: 'center', fontSize: '2rem' }}>
                        Consultations également disponibles autour de {cityName}
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                        {nearbyCities.map(city => (
                            <Link key={city} href={`/villes/${slugify(city)}`} className="hover-text-sauge" style={{
                                padding: '10px 22px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                borderRadius: '50px',
                                fontSize: '0.88rem',
                                color: 'rgba(255,255,255,0.8)'
                            }}>
                                Naturopathe {city}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER CTA */}
            <section style={{ padding: '120px 0', textAlign: 'center', backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
                        Vers votre nouvel <span className="italic text-gold">Équilibre</span>
                    </h2>
                    <p style={{ margin: '0 auto 40px', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                        Ne laissez plus la fatigue ou le stress perturber votre bien-être. Réservez votre créneau dès aujourd&apos;hui au cabinet à Miramas ou en visioconférence depuis {cityName}.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        <a 
                            href={MEDOUCINE_URL} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-premium" 
                            style={{ padding: '20px 48px', fontSize: '1.1rem', borderRadius: '100px' }}
                        >
                            📅 RÉSERVER EN LIGNE SUR MÉDOUCINE →
                        </a>
                        <Link href="/contact" className="btn-outline" style={{ padding: '20px 48px', fontSize: '1.1rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center' }}>
                            CONTACTER LE CABINET
                        </Link>
                    </div>
                </div>
            </section>
        </article>
    );
}
