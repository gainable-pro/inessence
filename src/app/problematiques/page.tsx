import Link from "next/link";
import { PROBLEMATIQUES } from "@/lib/data";

export default function MotifsPage() {
    return (
        <div className="animate-fade-in">
            <section style={{ padding: '120px 0 80px', backgroundColor: 'var(--bg-secondary)', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
                        Motifs de <span className="text-gold">Consultation</span>
                    </h1>
                    <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                        Découvrez comment la naturopathie peut vous accompagner dans la gestion de vos problématiques quotidiennes pour retrouver un bien-être durable.
                    </p>
                </div>
            </section>

            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
                        {PROBLEMATIQUES.map((item, idx) => (
                            <div key={idx} style={{
                                padding: '48px',
                                backgroundColor: 'var(--white)',
                                borderRadius: '24px',
                                border: '1px solid var(--sable-dark)',
                                boxShadow: 'var(--shadow-soft)',
                                transition: 'transform 0.3s ease'
                            }} className="hover:shadow-md">
                                <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--sauge-dark)' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '32px' }}>
                                    {item.description}
                                </p>
                                <Link href={`/problematiques/${item.slug}`} className="text-gold font-bold tracking-widest hover:text-sauge transition-colors">
                                    DÉCOUVRIR MON APPROCHE →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '100px 0', backgroundColor: 'var(--text-main)', color: 'var(--white)', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '32px', color: 'var(--white)' }}>Vous ne trouvez pas votre <span className="text-gold">problématique</span> ?</h2>
                    <p style={{ maxWidth: '650px', margin: '0 auto 48px', opacity: 0.8, fontSize: '1.1rem' }}>
                        Chaque individu est unique. Contactez-moi pour discuter de vos besoins spécifiques et voir comment un accompagnement personnalisé peut vous aider.
                    </p>
                    <Link href="/contact" className="btn-premium" style={{ backgroundColor: 'var(--gold-warm)', color: 'var(--text-main)' }}>ME CONTACTER</Link>
                </div>
            </section>
        </div>
    );
}
