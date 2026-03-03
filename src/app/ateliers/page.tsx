import Link from "next/link";

export default function AteliersPage() {
    const ateliers = [
        {
            title: "Initiation à la Méditation",
            desc: "Apprenez les bases de la pleine conscience pour apaiser votre mental au quotidien. Un moment privilégié pour se reconnecter à l'instant présent.",
            duration: "1h30"
        },
        {
            title: "Gestion du Stress & Relaxation",
            desc: "Des outils concrets et des techniques de respiration pour libérer les tensions nerveuses et musculaires accumulées.",
            duration: "2h00"
        },
        {
            title: "Découverte des Fleurs de Bach",
            desc: "Apprenez à utiliser les essences florales pour mieux gérer vos émotions et celles de votre entourage. Repartez avec votre flacon personnalisé.",
            duration: "2h30"
        },
        {
            title: "Ateliers Énergétiques",
            desc: "Découverte du magnétisme et de l'auto-équilibrage énergétique pour renforcer sa vitalité et protection énergétique.",
            duration: "3h00"
        }
    ];

    return (
        <div className="animate-fade-in">
            <section style={{ padding: '160px 0 100px', backgroundColor: 'var(--sable-dark)', textAlign: 'center' }}>
                <div className="container">
                    <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', color: 'var(--gold-warm)', fontWeight: 600, display: 'block', marginBottom: '24px' }}>Transmission & Partage</span>
                    <h1 className="font-serif" style={{ marginBottom: '32px' }}>
                        Les <span className="text-golditalic">Ateliers</span> Collectifs
                    </h1>
                    <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.3rem', color: 'var(--text-muted)', fontWeight: 300 }}>
                        L'apprentissage par le collectif est un puissant levier de changement. <br />
                        Rejoignez une parenthèse de bien-être et de transmission à Miramas.
                    </p>
                </div>
            </section>

            <section style={{ padding: '120px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '56px' }}>
                        {ateliers.map((item, idx) => (
                            <div key={idx} style={{
                                padding: '60px',
                                backgroundColor: 'var(--white)',
                                borderRadius: '40px',
                                boxShadow: 'var(--shadow-soft)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                border: '1px solid rgba(0,0,0,0.02)',
                                transition: 'transform 0.4s ease'
                            }} className="hover-lift">
                                <div>
                                    <h3 className="font-serif" style={{ fontSize: '2.2rem', marginBottom: '28px', color: 'var(--text-main)' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '32px', fontSize: '1.1rem' }}>
                                        {item.desc}
                                    </p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--sable-dark)', paddingTop: '28px' }}>
                                    <span style={{ fontWeight: 600, color: 'var(--sauge-dark)', letterSpacing: '1px' }}>DURÉE : {item.duration}</span>
                                    <Link href="/contact" style={{ color: 'var(--gold-warm)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>S'inscrire →</Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '120px', backgroundColor: 'var(--sauge-light)', padding: '100px 80px', borderRadius: '48px', textAlign: 'center' }}>
                        <img src="/images/nutrition_balance_bowl_1772494534045.png" alt="Ateliers de groupe" style={{ width: '120px', marginBottom: '40px', borderRadius: '50%', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                        <h2 className="font-serif" style={{ marginBottom: '24px' }}>Un moment de <span className="text-sauge italics">Communion</span></h2>
                        <p style={{ maxWidth: '650px', margin: '0 auto 48px', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            Nos ateliers sont conçus pour vous offrir des outils concrets. Que ce soit pour organiser un événement privé ou rejoindre une session publique à Miramas, chaque rencontre est unique.
                        </p>
                        <Link href="/contact" className="btn-premium" style={{ padding: '20px 50px' }}>CONNAÎTRE LES DATES</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
