import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Techniques de Naturopathie à Miramas | Phytothérapie, Réflexologie & Soins",
    description: "Découvrez les techniques de naturopathie proposées par Inessence à Miramas : phytothérapie, aromathérapie, gemmothérapie, réflexologie plantaire, Kobido et fleurs de Bach.",
    alternates: {
        canonical: "https://www.inessencenaturopathe.com/techniques",
    },
};

export default function TechniquesPage() {
    const techniquesData = [
        {
            title: "Phytothérapie",
            slug: "phytotherapie",
            icon: "🌿",
            desc: "La sagesse des plantes médicinales au service de votre terrain. Infusions, extraits ou poudres, nous choisissons la forme la plus vibrante pour votre corps."
        },
        {
            title: "Aromathérapie",
            slug: "aromatherapie",
            icon: "💧",
            desc: "L'âme des plantes distillée pour une action profonde et immédiate sur vos sphères physiques et psycho-émotionnelles."
        },
        {
            title: "Gemmothérapie",
            slug: "gemmotherapie",
            icon: "🌱",
            desc: "La force embryonnaire des bourgeons pour une régénération cellulaire intense et un soutien immunitaire global."
        },
        {
            title: "Réflexologie plantaire",
            slug: "reflexologie-plantaire",
            icon: "🦶",
            desc: "Le miroir de votre corps sous vos pieds. Un massage thérapeutique de 50 minutes pour relancer l'homéostasie et évacuer les toxines."
        },
        {
            title: "Massage Ayurvédique",
            slug: "massage-ayurvedique",
            icon: "👐",
            desc: "Soin traditionnel indien aux huiles chaudes pour l'ancrage, l'harmonisation des doshas et la circulation de l'énergie vitale."
        },
        {
            title: "Massage Kobido",
            slug: "massage-kobido",
            icon: "✨",
            desc: "Rituel ancestral japonais pour le visage alliant effet liftant naturel, relance du collagène et profonde relaxation."
        },
        {
            title: "Fleurs de Bach",
            slug: "fleurs-de-bach",
            icon: "🌸",
            desc: "Des essences florales subtiles pour traverser les tempêtes émotionnelles, apaiser les peurs et retrouver votre axe central."
        }
    ];

    return (
        <div className="animate-fade-in">
            {/* Header Section */}
            <section style={{ padding: '160px 0 100px', backgroundColor: 'var(--sable-warm)', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', color: 'var(--gold-warm)', fontWeight: 600, display: 'block', marginBottom: '24px' }}>
                        Le Chœur des Éléments
                    </span>
                    <h1 className="font-serif typewriter" style={{ marginBottom: '32px' }}>
                        Mes <span className="text-sauge italic">Techniques</span> Naturelles
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.8 }}>
                        Un bouquet de méthodes holistiques pour honorer votre équilibre à Miramas <br />
                        et réveiller les capacités d&apos;autorégulation de votre corps.
                    </p>
                </div>
            </section>

            <section style={{ padding: '120px 0', backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>
                        {techniquesData.map((tech) => (
                            <Link
                                key={tech.slug}
                                href={`/techniques/${tech.slug}`}
                                style={{
                                    padding: '50px 40px',
                                    borderRadius: '32px',
                                    backgroundColor: 'var(--bg-secondary)',
                                    border: '1px solid rgba(0,0,0,0.03)',
                                    boxShadow: 'var(--shadow-soft)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}
                                className="hover-lift"
                            >
                                <div>
                                    <div style={{ fontSize: '3rem', marginBottom: '24px', filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.05))' }}>
                                        {tech.icon}
                                    </div>
                                    <h3 className="font-serif" style={{ fontSize: '1.9rem', marginBottom: '16px', color: 'var(--sauge-dark)' }}>
                                        {tech.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.02rem', fontWeight: 300, marginBottom: '24px' }}>
                                        {tech.desc}
                                    </p>
                                </div>
                                <span style={{ color: 'var(--gold-warm)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                    Découvrir la technique →
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '100px',
                        padding: '80px 60px',
                        backgroundColor: 'var(--sable-dark)',
                        borderRadius: '40px',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <p style={{ fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--text-main)', maxWidth: '850px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
                                &ldquo;La nature n&apos;est pas une destination, c&apos;est notre demeure. Chaque technique utilisée est un pont jeté entre votre quotidien et votre essence profonde.&rdquo;
                            </p>
                            <div style={{ marginTop: '30px', width: '60px', height: '2px', backgroundColor: 'var(--gold-warm)', margin: '30px auto 20px' }} />
                            <span style={{ fontSize: '0.95rem', color: 'var(--sauge-dark)', fontWeight: 600 }}>Inès Fernandez — Praticienne en Naturopathie à Miramas</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: '100px 0', textAlign: 'center', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 className="font-serif" style={{ marginBottom: '32px', fontSize: '3rem' }}>Prêt à explorer votre <span className="text-sauge italic">vitalité</span> ?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto 40px' }}>
                        Découvrez nos formules d&apos;accompagnement ou prenez directement rendez-vous au cabinet à Miramas ou en visioconférence.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <Link href="/prestations" className="btn-premium" style={{ padding: '20px 48px', fontSize: '1.1rem', borderRadius: '100px' }}>
                            VOIR LES PRESTATIONS & TARIFS
                        </Link>
                        <Link href="/contact" className="btn-outline" style={{ padding: '20px 48px', fontSize: '1.1rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center' }}>
                            CONTACTER LE CABINET
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
