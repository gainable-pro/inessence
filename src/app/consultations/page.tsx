import Link from "next/link";

export default function ConsultationsPage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section style={{
                padding: '160px 0 100px',
                backgroundColor: 'var(--sable-warm)',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <span className="stagger-1" style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', color: 'var(--gold-warm)', fontWeight: 600, display: 'block', marginBottom: '24px' }}>
                        L'Art de l'Équilibre
                    </span>
                    <h1 className="font-serif stagger-2" style={{ marginBottom: '32px' }}>
                        Un voyage vers votre <span className="text-sauge italic">Essence</span>
                    </h1>
                    <p className="stagger-3" style={{ fontSize: '1.4rem', color: 'var(--text-muted)', fontWeight: 300 }}>
                        Redécouvrez la symphonie de votre corps à travers un accompagnement holistique, <br />
                        où chaque séance est une étape vers une vitalité retrouvée.
                    </p>
                </div>
            </section>

            {/* Zig-Zag Section 1: L'Approche */}
            <section style={{ padding: '120px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <h2 className="font-serif" style={{ marginBottom: '40px' }}>Une écoute <span className="text-gold">Sincère</span> et profonde</h2>
                            <div style={{ color: 'var(--text-muted)' }}>
                                <p style={{ marginBottom: '28px' }}>
                                    Ma pratique de la naturopathie ne s'arrête pas aux conseils techniques. C'est avant tout un espace de parole et d'écoute, où chaque symptôme est accueilli comme un message de votre corps.
                                </p>
                                <p style={{ marginBottom: '28px' }}>
                                    Dans la quiétude de mon cabinet à Miramas ou le confort de votre foyer, nous tissons ensemble le fil de votre bien-être. J'utilise la quintessence des plantes, le souffle de la relaxation et la sagesse de l'alimentation pour restaurer votre harmonie originelle.
                                </p>
                                <p>
                                    Mon rôle est de vous transmettre les clés de votre propre temple : votre santé.
                                </p>
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
                                <img src="/images/stress_relief_zen_1772494485058.png" alt="Sérénité et écoute" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                            <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', padding: '40px', backgroundColor: 'var(--white)', borderRadius: '24px', boxShadow: 'var(--shadow-warm)', maxWidth: '300px' }}>
                                <p className="font-serif italic" style={{ fontSize: '1.2rem', color: 'var(--sauge-dark)' }}>
                                    "La santé est l'équilibre délicat entre l'âme, le corps et la nature."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zig-Zag Section 2: Le Bilan */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div style={{ order: 2 }}>
                            <h2 className="font-serif" style={{ marginBottom: '40px' }}>La clarté du <span className="text-gold">Bilan</span> de Vitalité</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
                                Ce premier rendez-vous est une exploration minutieuse de votre terrain biologique. Plus qu'un questionnaire, c'est un dialogue intime avec votre vitalité passée, présente et future.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Anamnèse complète : comprendre votre histoire",
                                    "Étude de votre force vitale",
                                    "Élaboration de votre rituel d'hygiène de vie unique",
                                    "Conseils floraux et phytothérapeutiques sur-mesure"
                                ].map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                        <span style={{ color: 'var(--gold-vibrant)', padding: '4px', backgroundColor: 'var(--sable-dark)', borderRadius: '50%', fontSize: '0.8rem' }}>✦</span>
                                        <span style={{ fontWeight: 400 }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ order: 1 }}>
                            <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
                                <img src="/images/sleep_serenity_bedroom_1772494499526.png" alt="Bilan de vitalité" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '120px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="font-serif" style={{ marginBottom: '48px' }}>Commencez votre <span className="italic text-gold">renaissance</span></h2>
                    <Link href="/contact" className="btn-premium" style={{ padding: '24px 60px', fontSize: '1.2rem' }}>DÉBUTER MON ACCOMPAGNEMENT</Link>
                    <p style={{ marginTop: '32px', opacity: 0.6, fontSize: '0.9rem' }}>Disponible en cabinet à Miramas, à domicile ou en visioconférence.</p>
                </div>
            </section>
        </div>
    );
}
