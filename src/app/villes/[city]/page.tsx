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
        .slice(0, 8);

    return (
        <article className="animate-fade-in" style={{ backgroundColor: 'var(--sable-warm)' }}>
            {/* HEROS SECTION PREMIUM */}
            <section style={{
                padding: '160px 0 100px',
                background: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("/images/media__1772494385825.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <nav style={{ fontSize: '0.85rem', marginBottom: '32px', letterSpacing: '2px', opacity: 0.6, textTransform: 'uppercase' }}>
                        <Link href="/" className="hover-text-sauge">ACCUEIL</Link> / <span>Naturopathe {cityName}</span>
                    </nav>
                    <h1 className="typewriter" style={{ color: 'var(--text-main)', marginBottom: '40px' }}>
                        Naturopathe à {cityName}
                    </h1>
                    <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', fontWeight: 300, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                        Retrouvez votre vitalité originelle au cœur de <strong>{cityName}</strong>. Un accompagnement holistique et bienveillant pour transformer votre santé durablement.
                    </p>
                    <div style={{ marginTop: '50px' }}>
                        <Link href="/contact" className="btn-premium" style={{ padding: '20px 50px', fontSize: '1.2rem' }}>COMMENCER MON ACCOMPAGNEMENT</Link>
                    </div>
                </div>
            </section>

            {/* SECTION 1: POURQUOI CONSULTER ? (ZIG-ZAG) */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <h2 className="typewriter" style={{ marginBottom: '40px', fontSize: '3.5rem' }}>Pourquoi voir un naturopathe à <span className="text-sauge">{cityName}</span> ?</h2>
                            <p style={{ marginBottom: '28px', fontSize: '1.1rem' }}>
                                Vous habitez à <strong>{cityName}</strong> ou dans ses environs et vous ressentez une fatigue persistante, des troubles digestifs ou un stress qui impacte votre quotidien ? La naturopathie est la solution naturelle pour remonter à la source de vos maux.
                            </p>
                            <p style={{ marginBottom: '28px', fontSize: '1.1rem' }}>
                                Contrairement à une approche symptomatique, mon rôle en tant que naturopathe est de considérer votre corps dans sa globalité. Nous ne nous contentons pas de masquer le problème, nous cherchons ensemble à comprendre pourquoi votre équilibre a été rompu.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' }}>
                                <div style={{ padding: '24px', background: 'var(--bg-secondary)', borderRadius: '20px' }}>
                                    <h4 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Approche Naturelle</h4>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Utilisation exclusive de méthodes douces : plantes, huiles essentielles, nutrition.</p>
                                </div>
                                <div style={{ padding: '24px', background: 'var(--bg-secondary)', borderRadius: '20px' }}>
                                    <h4 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Accompagnement Local</h4>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Disponible à proximité de chez vous pour un suivi régulier et humain.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
                            <img src="/images/stress_relief_zen_1772494485058.png" alt={`Naturopathie ${cityName}`} style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: VOTRE PROGRAMME PERSONNALISE (ZIG-ZAG REVERSE) */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--sable-warm)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '80px', alignItems: 'center' }}>
                        <div style={{ order: 2 }}>
                            <h2 className="typewriter" style={{ marginBottom: '40px', fontSize: '3.5rem' }}>Une démarche d'autoguérison</h2>
                            <p style={{ marginBottom: '28px', fontSize: '1.1rem' }}>
                                À <strong>{cityName}</strong>, je vous propose une immersion dans l'univers de la santé naturelle. Mon approche repose sur les 10 techniques fondamentales de la naturopathie, adaptées à votre morphologie, votre tempérament et votre rythme de vie.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                                    <span style={{ color: 'var(--accent-gold)', fontSize: '1.5rem' }}>✦</span>
                                    <span><strong>Bilan de Vitalité :</strong> Un état des lieux complet de votre force vitale et de vos blocages.</span>
                                </li>
                                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                                    <span style={{ color: 'var(--accent-gold)', fontSize: '1.5rem' }}>✦</span>
                                    <span><strong>Hygiène Alimentaire :</strong> Une nutrition vivante, riche en micro-nutriments, sans frustration.</span>
                                </li>
                                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                                    <span style={{ color: 'var(--accent-gold)', fontSize: '1.5rem' }}>✦</span>
                                    <span><strong>Gestion du Stress :</strong> Techniques de respiration et relaxation pour apaiser le mental.</span>
                                </li>
                            </ul>
                        </div>
                        <div style={{ order: 1, borderRadius: '40px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
                            <img src="/images/digestive_health_nature_1772494512630.png" alt="Bien-être naturel" style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: EXPERTISE LOCALE & FAQ */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 className="typewriter" style={{ fontSize: '3.5rem' }}>Questions fréquentes à <span className="text-gold">{cityName}</span></h2>
                    </div>

                    <div style={{ display: 'grid', gap: '30px' }}>
                        {[
                            { q: "Comment se déroule la première séance ?", a: "La première séance dure environ 1h30. C'est un moment d'échange approfondi où nous parcourons vos antécédents, votre mode de vie et vos objectifs. J'établis ensuite votre Programme d'Hygiène de Vie (PHV)." },
                            { q: "Est-ce remboursé par la mutuelle ?", a: "Bien que non prise en charge par la Sécurité Sociale, de plus en plus de mutuelles remboursent les consultations de naturopathie. Je vous invite à vous renseigner auprès de la vôtre." },
                            { q: "Où se situe le cabinet par rapport à " + cityName + " ?", a: "Je vous accueille à Miramas ou je me déplace à votre domicile à " + cityName + ". La visioconférence est également une excellente option pour un suivi optimal sans déplacement." }
                        ].map((faq, idx) => (
                            <div key={idx} style={{ padding: '40px', background: 'var(--bg-secondary)', borderRadius: '30px' }}>
                                <h4 style={{ fontSize: '1.6rem', marginBottom: '15px', color: 'var(--sauge-dark)' }}>{faq.q}</h4>
                                <p style={{ opacity: 0.9 }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTIONS VILLES ALENTOURS */}
            <section style={{ padding: '100px 0', backgroundColor: 'var(--text-main)', color: 'var(--white)' }}>
                <div className="container">
                    <h3 style={{ color: 'var(--gold-vibrant)', marginBottom: '40px', textAlign: 'center', fontSize: '2.5rem' }}>Villes desservies autour de {cityName}</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                        {nearbyCities.map(city => (
                            <Link key={city} href={`/villes/${slugify(city)}`} className="hover-text-sauge" style={{
                                padding: '12px 24px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                borderRadius: '50px',
                                fontSize: '0.9rem',
                                color: 'rgba(255,255,255,0.7)'
                            }}>
                                Naturopathe {city}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER CTA */}
            <section style={{ padding: '140px 0', textAlign: 'center', backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '4.5rem', marginBottom: '40px' }}>Vers votre nouvelle <span className="italic text-gold">Vie</span></h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 60px', fontSize: '1.2rem', opacity: 0.7 }}>
                        Ne laissez plus vos déséquilibres dicter votre quotidien. Prenez rendez-vous aujourd'hui pour une transformation naturelle à {cityName}.
                    </p>
                    <Link href="/contact" className="btn-premium" style={{ padding: '24px 60px', fontSize: '1.2rem' }}>DÉBUTER MAINTENANT</Link>
                </div>
            </section>
        </article>
    );
}
