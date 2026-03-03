import Link from "next/link";
import { PROBLEMATIQUES } from "@/lib/data";

export default function MotifsPage() {
    return (
        <div className="animate-fade-in">
            {/* Header Section */}
            <section style={{ padding: '160px 0 100px', backgroundColor: 'var(--sable-warm)', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', color: 'var(--gold-warm)', fontWeight: 600, display: 'block', marginBottom: '24px' }}>
                        Accompagnement Sur-Mesure
                    </span>
                    <h1 className="font-serif typewriter" style={{ marginBottom: '32px' }}>
                        Quand me <span className="text-sauge italic">consulter</span> ?
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', fontWeight: 300 }}>
                        Chaque déséquilibre est une invitation à ralentir et à écouter. <br />
                        Découvrez comment la naturopathie peut restaurer votre harmonie.
                    </p>
                </div>
            </section>

            <section style={{ padding: '120px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '48px' }}>
                        {PROBLEMATIQUES.map((item, idx) => (
                            <div key={idx} style={{
                                padding: '60px',
                                backgroundColor: 'var(--white)',
                                borderRadius: '32px',
                                border: '1px solid rgba(0,0,0,0.02)',
                                boxShadow: 'var(--shadow-soft)',
                                transition: 'all 0.5s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }} className="hover-lift">
                                <div>
                                    <h3 className="font-serif" style={{ fontSize: '2.2rem', marginBottom: '24px', color: 'var(--text-main)' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '40px', fontSize: '1.1rem', fontWeight: 300 }}>
                                        {item.description}
                                    </p>
                                </div>
                                <Link href={`/problematiques/${item.slug}-miramas`} className="text-gold" style={{ fontWeight: 700, letterSpacing: '2px', fontSize: '0.85rem', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    EN SAVOIR PLUS <span style={{ fontSize: '1.2rem' }}>→</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Support Section */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--text-main)', color: 'var(--white)', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="font-serif" style={{ marginBottom: '40px', color: 'var(--white)' }}>
                        Un besoin <span className="text-gold italic">particulier</span> ?
                    </h2>
                    <p style={{ marginBottom: '60px', opacity: 0.8, fontSize: '1.2rem', lineHeight: 1.8 }}>
                        Votre parcours est unique. Si vous ne trouvez pas votre situation ici, discutons-en ensemble pour définir l'accompagnement le plus juste pour vous.
                    </p>
                    <Link href="/contact" className="btn-premium" style={{ backgroundColor: 'var(--gold-warm)', color: 'var(--text-main)', padding: '24px 60px' }}>
                        PRENDRE RENDEZ-VOUS
                    </Link>
                </div>
            </section>
        </div>
    );
}
