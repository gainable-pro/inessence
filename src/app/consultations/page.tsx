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
                    <h1 className="font-serif stagger-2 typewriter" style={{ marginBottom: '32px' }}>
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
                                    Ma pratique ne se limite pas à de simples conseils techniques. Elle s&rsquo;inscrit dans une approche globale et holistique, où l&rsquo;écoute et la parole occupent une place essentielle. Chaque symptôme est accueilli comme un signal du corps, une invitation à comprendre les déséquilibres et à en rechercher l&rsquo;origine. Que ce soit pour petits et grands, en cas de pathologies dégénératives, dans une démarche de prévention, pour les enfants HPI, le TDAH ou les périodes de burn-out, ou seulement vous faire du bien, je vous accompagne avec bienveillance vers un mieux-être global, en soutenant les capacités naturelles d&rsquo;équilibre et de régénération du corps.
                                </p>
                                <p style={{ marginBottom: '28px' }}>
                                    Dans un cadre apaisant, au sein de mon cabinet à Miramas ou dans le confort de votre foyer, je vous propose un accompagnement personnalisé, alliant naturopathie, soins énergétiques et massage bien-être. Cette synergie de techniques permet de soutenir les capacités naturelles d&rsquo;autorégulation du corps et de relancer son potentiel d&rsquo;auto-guérison.
                                </p>
                                <p style={{ marginBottom: '28px' }}>
                                    À travers l&rsquo;utilisation des plantes, des techniques de relaxation, du toucher thérapeutique, d&rsquo;une alimentation adaptée et tellement de choses encore! Nous travaillons ensemble à rétablir l&rsquo;équilibre sur les plans physique, émotionnel et énergétique.
                                </p>
                                <p>
                                    Mon rôle est de vous guider, de vous transmettre des outils concrets et de vous accompagner vers une meilleure compréhension de votre corps, afin que vous deveniez acteur de votre santé et retrouviez un bien-être durable.
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
