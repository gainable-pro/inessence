import Link from "next/link";

export default function ConsultationsPage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section style={{
                padding: '120px 0 80px',
                backgroundColor: 'var(--sable-warm)',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
                        Mes <span className="text-sauge">Consultations</span>
                    </h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                        Un accompagnement personnalisé pour retrouver votre équilibre naturel et cultiver durablement votre vitalité.
                    </p>
                </div>
            </section>

            {/* L'Approche Section */}
            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '32px' }}>Une approche de <span className="text-gold">Santé Globale</span></h2>
                            <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                                <p style={{ marginBottom: '24px' }}>
                                    La naturopathie est bien plus qu'une simple gestion des symptômes. C'est une approche holistique qui considère l'individu dans sa globalité : physique, émotionnelle et mentale.
                                </p>
                                <p style={{ marginBottom: '24px' }}>
                                    Elle se fonde sur le principe que chaque individu a en lui les ressources nécessaires pour retrouver son équilibre et sa santé (l'autoguérison). Mon rôle en tant que naturopathe est d'être votre guide et votre éducateur de santé.
                                </p>
                                <p>
                                    Ensemble, nous explorons votre mode de vie, votre alimentation et votre environnement pour identifier les causes profondes de vos déséquilibres et mettre en place des solutions naturelles et durables.
                                </p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: 'var(--sauge-light)', padding: '50px', borderRadius: '24px', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '60px', height: '60px', backgroundColor: 'var(--gold-vibrant)', borderRadius: '50%', opacity: 0.2 }} />
                            <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '24px' }}>Ce que nous cherchons :</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Comprendre l'origine de vos maux",
                                    "Renforcer votre terrain biologique",
                                    "Optimiser votre vitalité au quotidien",
                                    "Vous rendre autonome dans votre santé",
                                    "Harmoniser vos émotions"
                                ].map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <span style={{ color: 'var(--gold-warm)', fontWeight: 'bold' }}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Déroulement Section */}
            <section style={{ padding: '100px 0', backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <h2 className="font-serif" style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '60px' }}>
                        Déroulement des <span className="text-gold">Séances</span>
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                        {/* Premier Bilan */}
                        <div style={{ padding: '50px', border: '1px solid var(--sable-dark)', borderRadius: '20px' }}>
                            <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--gold-warm)' }}>Étape 1</span>
                            <h3 className="font-serif" style={{ fontSize: '2rem', margin: '16px 0 24px' }}>Le Bilan de Vitalité</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.7 }}>
                                C'est une séance d'environ 1h30 où nous faisons un tour d'horizon complet de votre santé : antécédents, digestion, sommeil, gestion du stress, alimentation...
                            </p>
                            <ul style={{ marginBottom: '32px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                <li>• Questionnaire approfondi (anamnèse)</li>
                                <li>• Analyse morphologique</li>
                                <li>• Établissement de votre Programme d'Hygiène de Vie (PHV)</li>
                            </ul>
                            <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-main)' }}>Durée : 1h30 | Tarif : 70€</div>
                        </div>

                        {/* Suivi */}
                        <div style={{ padding: '50px', border: '1px solid var(--sable-dark)', borderRadius: '20px', backgroundColor: 'var(--bg-secondary)' }}>
                            <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--gold-warm)' }}>Étape 2</span>
                            <h3 className="font-serif" style={{ fontSize: '2rem', margin: '16px 0 24px' }}>Séance de Suivi</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.7 }}>
                                Quelques semaines plus tard, nous faisons le point sur la mise en place du programme et ajustons les conseils selon vos ressentis et vos résultats.
                            </p>
                            <ul style={{ marginBottom: '32px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                <li>• Évaluation des changements</li>
                                <li>• Ajustements nutritionnels</li>
                                <li>• Techniques complémentaires (reflexologie, fleurs de Bach...)</li>
                            </ul>
                            <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-main)' }}>Durée : 1h | Tarif : 55€</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modalités Section */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--sauge-light)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Où me <span className="text-sauge">retrouver</span> ?</h2>
                    <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {[
                            { title: "En Cabinet", desc: "À Miramas (13)" },
                            { title: "À Domicile", desc: "Miramas et alentours" },
                            { title: "En Visioconférence", desc: "Où que vous soyez" }
                        ].map((mode, idx) => (
                            <div key={idx} style={{ padding: '30px 40px', backgroundColor: 'var(--white)', borderRadius: '16px', minWidth: '250px' }}>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{mode.title}</h4>
                                <p style={{ opacity: 0.7 }}>{mode.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '100px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="font-serif" style={{ fontSize: '2.8rem', marginBottom: '32px' }}>Prêt à prendre soin de <span className="italic text-gold">VOUS</span> ?</h2>
                    <Link href="/contact" className="btn-premium" style={{ padding: '20px 50px' }}>PRENDRE RENDEZ-VOUS</Link>
                </div>
            </section>
        </div>
    );
}
