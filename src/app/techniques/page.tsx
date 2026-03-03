import Link from "next/link";

export default function TechniquesPage() {
    const techniquesData = [
        {
            title: "Phytothérapie",
            icon: "🌿",
            desc: "La sagesse des plantes médicinales au service de votre terrain. Infusions, extraits ou poudres, nous choisissons la forme la plus vibrante pour votre corps."
        },
        {
            title: "Aromathérapie",
            icon: "💧",
            desc: "L'âme des plantes distillée pour une action profonde et immédiate sur vos sphères physiques et psycho-émotionnelles."
        },
        {
            title: "Gemmothérapie",
            icon: "🌱",
            desc: "La force embryonnaire des bourgeons pour une régénération cellulaire intense et un soutien immunitaire global."
        },
        {
            title: "Techniques vibratoires",
            icon: "✨",
            desc: "Réharmonisation de vos champs énergétiques à travers le magnétisme et la chromothérapie pour une paix intérieure retrouvée."
        },
        {
            title: "Réflexologie plantaire",
            icon: "🦶",
            desc: "Le miroir de votre corps sous vos pieds. Un massage thérapeutique pour relancer l'homéostasie et évacuer les toxines."
        },
        {
            title: "Massages de Bien-être",
            icon: "👐",
            desc: "Soin Ayurvédique pour l'ancrage ou rituel Kobido pour la lumière du visage. Chaque toucher est une méditation."
        },
        {
            title: "Rééquilibrage Alimentaire",
            icon: "🍎",
            desc: "L'art de se nourrir avec conscience et plaisir. Une assiette médicinale adaptée à votre tempérament unique."
        },
        {
            title: "Gestion du Stress",
            icon: "🧘",
            desc: "Retrouvez le chemin du calme intérieur grâce à la sophrologie, la respiration et la présence à soi."
        },
        {
            title: "Fleurs de Bach",
            icon: "🌸",
            desc: "Des essences florales subtiles pour traverser les tempêtes émotionnelles et retrouver votre axe central."
        }
    ];

    return (
        <div className="animate-fade-in">
            {/* Header Section */}
            <section style={{ padding: '160px 0 100px', backgroundColor: 'var(--bg-secondary)', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', color: 'var(-- gold-warm)', fontWeight: 600, display: 'block', marginBottom: '24px' }}>
                        Le Chœur des Éléments
                    </span>
                    <h1 className="font-serif" style={{ marginBottom: '32px' }}>
                        Mes <span className="text-sauge italic">Techniques</span> Sacrées
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', fontWeight: 300 }}>
                        Un bouquet de méthodes naturelles pour honorer votre temple intérieur <br />
                        et réveiller vos capacités d'autoguérison.
                    </p>
                </div>
            </section>

            <section style={{ padding: '120px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                        {techniquesData.map((tech, idx) => (
                            <div key={idx} style={{
                                padding: '50px',
                                borderRadius: '32px',
                                backgroundColor: 'var(--white)',
                                border: '1px solid rgba(0,0,0,0.01)',
                                boxShadow: 'var(--shadow-soft)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                            }} className="hover-lift">
                                <div style={{ fontSize: '3rem', marginBottom: '32px', filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.05))' }}>{tech.icon}</div>
                                <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--sauge-dark)' }}>{tech.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem', fontWeight: 300 }}>{tech.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '120px',
                        padding: '100px 80px',
                        backgroundColor: 'var(--sable-dark)',
                        borderRadius: '48px',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <p style={{ fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--text-main)', maxWidth: '900px', margin: '0 auto', lineHeight: 1.6, fontWeight: 300 }}>
                                "La nature n'est pas une destination, c'est notre demeure. Chaque technique utilisée est un pont jeté entre votre quotidien et votre essence profonde."
                            </p>
                            <div style={{ marginTop: '40px', width: '60px', height: '2px', backgroundColor: 'var(--gold-warm)', margin: '40px auto' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '120px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="font-serif" style={{ marginBottom: '48px' }}>Prêt à explorer votre <span className="text-sauge italic">potentiel</span> ?</h2>
                    <Link href="/contact" className="btn-premium" style={{ padding: '24px 60px', fontSize: '1.2rem' }}>DÉFINIR MON ACCOMPAGNEMENT</Link>
                </div>
            </section>
        </div>
    );
}
