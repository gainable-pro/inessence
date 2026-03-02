import Link from "next/link";

export default function AteliersPage() {
    const ateliers = [
        {
            title: "Initiation à la Méditation",
            desc: "Apprenez les bases de la pleine conscience pour apaiser votre mental au quotidien. Un moment privilégié pour se reconnecter à l'instant présent.",
            duration: "1h30",
            price: "25€"
        },
        {
            title: "Gestion du Stress & Relaxation",
            desc: "Des outils concrets et des techniques de respiration pour libérer les tensions nerveuses et musculaires accumulées.",
            duration: "2h00",
            price: "35€"
        },
        {
            title: "Découverte des Fleurs de Bach",
            desc: "Apprenez à utiliser les essences florales pour mieux gérer vos émotions et celles de votre entourage. Repartez avec votre flacon personnalisé.",
            duration: "2h30",
            price: "45€"
        },
        {
            title: "Ateliers Énergétiques",
            desc: "Découverte du magnétisme et de l'auto-équilibrage énergétique pour renforcer sa vitalité et protection énergétique.",
            duration: "3h00",
            price: "60€"
        }
    ];

    return (
        <div className="animate-fade-in">
            <section style={{ padding: '120px 0 80px', backgroundColor: 'var(--sable-dark)', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
                        Les <span className="text-gold">Ateliers</span> Collectifs
                    </h1>
                    <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                        Partagez un moment de bien-être et de transmission dans une ambiance bienveillante à Miramas. L'apprentissage par le collectif est un puissant levier de changement.
                    </p>
                </div>
            </section>

            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
                        {ateliers.map((item, idx) => (
                            <div key={idx} style={{
                                padding: '60px',
                                backgroundColor: 'var(--white)',
                                borderRadius: '32px',
                                boxShadow: 'var(--shadow-soft)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                border: '1px solid rgba(0,0,0,0.02)'
                            }}>
                                <div>
                                    <h3 className="font-serif" style={{ fontSize: '2rem', marginBottom: '24px', color: 'var(--text-main)' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '32px' }}>
                                        {item.desc}
                                    </p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--sable-dark)', paddingTop: '24px' }}>
                                    <span style={{ fontWeight: 600, color: 'var(--sauge-dark)' }}>{item.duration}</span>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--gold-warm)' }}>{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '100px', backgroundColor: 'var(--sauge-light)', padding: '80px', borderRadius: '40px', textAlign: 'center' }}>
                        <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Prochains Ateliers à <span className="text-sauge">Miramas</span></h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: 'var(--text-muted)' }}>
                            Les ateliers ont lieu régulièrement. Pour connaître les dates exactes ou organiser un atelier privé entre amis ou collègues, contactez-moi.
                        </p>
                        <Link href="/contact" className="btn-premium">DEMANDER LE CALENDRIER</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
