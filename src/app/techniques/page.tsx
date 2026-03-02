import Link from "next/link";

export default function TechniquesPage() {
    const techniquesData = [
        {
            title: "Phytothérapie",
            icon: "🌿",
            desc: "La phytothérapie utilise les plantes médicinales pour traiter divers maux. Chaque plante a des propriétés spécifiques et peut être utilisée sous forme de tisanes, d'extraits liquides ou de poudres. Par exemple, la camomille peut apaiser l'anxiété, tandis que le gingembre est connu pour ses propriétés anti-inflammatoires."
        },
        {
            title: "Aromathérapie",
            icon: "💧",
            desc: "L'aromathérapie fait appel aux huiles essentielles extraites de plantes pour stimuler le bien-être physique et émotionnel. Les huiles essentielles peuvent être inhalées, appliquées sur la peau ou diffusées dans l'environnement. L'huile essentielle de lavande est souvent utilisée pour ses effets relaxants."
        },
        {
            title: "Gemmothérapie",
            icon: "🌱",
            desc: "La gemmothérapie utilise des macérats de jeunes pousses, bourgeons et racines de plantes pour agir sur la vitalité. Ces extraits sont très concentrés et peuvent aider à revitaliser le corps, à améliorer le métabolisme et à soutenir le système immunitaire."
        },
        {
            title: "Techniques vibratoires",
            icon: "✨",
            desc: "Ces techniques comprennent des méthodes comme le magnétisme, qui permet de rééquilibrer les énergies du corps, et la chromothérapie, qui utilise les couleurs pour réharmoniser les énergies. Le magnétisme agit en canalisant l’énergie pour soulager les tensions."
        },
        {
            title: "Réflexologie plantaire",
            icon: "🦶",
            desc: "Cette technique de massage des pieds repose sur l'idée que chaque zone du pied correspond à un organe ou une partie du corps. En stimulant ces zones, on peut aider à réduire le stress, améliorer la circulation et favoriser le bien-être général."
        },
        {
            title: "Massages Spécifiques",
            icon: "👐",
            desc: "Je pratique des massages comme le massage ayurvédique, qui utilise des techniques douces pour stimuler le corps et l'esprit, et le massage Kobido, massage facial japonais favorisant la détente et la jeunesse de la peau."
        },
        {
            title: "Rééquilibrage Alimentaire",
            icon: "🍎",
            desc: "Un des piliers de la naturopathie. Je guide chaque personne vers une alimentation qui prend en compte ses besoins spécifiques, ses goûts et ses intolérances, afin d’optimiser sa santé durablement."
        },
        {
            title: "Gestion du Stress",
            icon: "🧘",
            desc: "J’accompagne mes clients via des techniques de relaxation, de méditation et des activités physiques adaptées qui correspondent à leur état de santé et à leurs préférences réelles."
        },
        {
            title: "Fleurs de Bach",
            icon: "🌸",
            desc: "Ces essences florales visent à traiter les émotions, aidant ainsi à rétablir l'équilibre émotionnel. Elles sont précieuses pour gérer des états tels que l'anxiété, la tristesse ou la colère lors des périodes de transition."
        }
    ];

    return (
        <div className="animate-fade-in">
            <section style={{ padding: '120px 0 80px', backgroundColor: 'var(--sauge-light)', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
                        Mes <span className="text-sauge">Techniques</span> Naturelles
                    </h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                        Un ensemble de méthodes complémentaires au service de votre équilibre physique, mental et émotionnel.
                    </p>
                </div>
            </section>

            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '40px' }}>
                        {techniquesData.map((tech, idx) => (
                            <div key={idx} style={{
                                padding: '40px',
                                borderRadius: '24px',
                                backgroundColor: 'var(--white)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                boxShadow: 'var(--shadow-soft)'
                            }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{tech.icon}</div>
                                <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{tech.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{tech.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '80px', padding: '60px', backgroundColor: 'var(--bg-secondary)', borderRadius: '32px', textAlign: 'center' }}>
                        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--sauge-dark)', maxWidth: '800px', margin: '0 auto' }}>
                            "Il existe énormément de techniques en naturopathie, mais le choix dépendra toujours des besoins spécifiques de chaque individu. L'alimentation, la gestion du stress et l'activité physique restent les piliers majeurs."
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '100px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Besoin d'un <span className="text-gold">programme</span> sur-mesure ?</h2>
                    <Link href="/contact" className="btn-premium">DÉFINIR MON ACCOMPAGNEMENT</Link>
                </div>
            </section>
        </div>
    );
}
