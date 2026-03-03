import Link from "next/link";
import { CITIES } from "@/lib/data";

export function Footer() {
    const topVilles = CITIES.slice(0, 8);

    return (
        <footer style={{ backgroundColor: 'var(--bg-secondary)', padding: '80px 0 40px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '60px' }}>
                    <div>
                        <div style={{ width: '80px', height: '80px', marginBottom: '24px' }}>
                            <img src="/images/logo-inessence.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '8px' }}>
                            6 rue pierre tristani, 13140 Miramas
                        </p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 300 }}>
                            Accompagnement holistique pour une santé vibrante. <br />
                            Cabinet & Visioconférence.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '20px', letterSpacing: '1px' }}>VILLES PRINCIPALES</h4>
                        <ul style={{ listStyle: 'none', fontSize: '0.85rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                            {topVilles.map(city => (
                                <li key={city}>
                                    <Link href={`/villes/${city.toLowerCase().replace(/ /g, '-')}`} className="hover-text-sauge">
                                        {city}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '20px', letterSpacing: '1px' }}>LÉGAL</h4>
                        <ul style={{ listStyle: 'none', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li><Link href="/mentions-legales" className="hover:text-sauge">Mentions Légales</Link></li>
                            <li><Link href="/confidentialite" className="hover:text-sauge">Confidentialité</Link></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '30px', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                        &copy; {new Date().getFullYear()} INESSENCE. Tous droits réservés.
                    </p>
                    <p style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', maxWidth: '600px', margin: '0 auto' }}>
                        La naturopathie ne remplace pas un avis médical. Consultez toujours votre médecin pour toute question relative à votre santé.
                    </p>
                </div>
            </div>
        </footer>
    );
}
