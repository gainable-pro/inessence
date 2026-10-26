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
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '6px' }}>
                            6 rue pierre tristani, 13140 Miramas
                        </p>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '12px' }}>
                            <p style={{ fontWeight: 600, color: 'var(--sauge-dark)', margin: '0 0 2px' }}>Horaires du cabinet :</p>
                            <p style={{ margin: 0 }}>Lun, Mar & Jeu : 9h–16h</p>
                            <p style={{ margin: 0 }}>Vendredi : 9h–19h</p>
                            <p style={{ margin: '2px 0 0', fontStyle: 'italic', opacity: 0.8 }}>Fermé mer, sam, dim & fériés</p>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 300, marginBottom: '14px' }}>
                            Cabinet & Visioconférence.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <a href="tel:+33761211132" style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--gold-warm)', textDecoration: 'none' }}>
                                📞 07 61 21 11 32
                            </a>
                            <a 
                                href="https://www.medoucine.com/consultation/miramas/ines-fernandez/23273?addressId=86159&utm_source=google&utm_medium=organic&utm_campaign=gbp-partoo&utm_content=reserver-en-ligne" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ fontSize: '0.85rem', color: 'var(--sauge-dark)', fontWeight: 600, textDecoration: 'underline' }}
                            >
                                📅 Réserver sur Médoucine
                            </a>
                        </div>
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
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '20px', letterSpacing: '1px' }}>EXPLORER</h4>
                        <ul style={{ listStyle: 'none', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li><Link href="/prestations" className="hover-text-sauge">Prestations & Tarifs</Link></li>
                            <li><Link href="/problematiques" className="hover-text-sauge">Motifs de Consultation</Link></li>
                            <li><Link href="/techniques" className="hover-text-sauge">Techniques Naturelles</Link></li>
                            <li><Link href="/blog" className="hover-text-sauge">Le Blog Naturo</Link></li>
                            <li><Link href="/articles" className="hover-text-sauge">Articles & Dossiers</Link></li>
                            <li><Link href="/mentions-legales" className="hover-text-sauge" style={{ opacity: 0.7 }}>Mentions Légales</Link></li>
                            <li><Link href="/confidentialite" className="hover-text-sauge" style={{ opacity: 0.7 }}>Confidentialité</Link></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '30px', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                        &copy; {new Date().getFullYear()} INESSENCE. Tous droits réservés. | Partenaire : <a href="https://www.gainable.fr" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Gainable.fr</a>
                    </p>
                    <p style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', maxWidth: '600px', margin: '0 auto' }}>
                        La naturopathie ne remplace pas un avis médical. Consultez toujours votre médecin pour toute question relative à votre santé.
                    </p>
                </div>
            </div>
        </footer>
    );
}
