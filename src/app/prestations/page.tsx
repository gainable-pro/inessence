import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prestations & Tarifs Naturopathie, Massages et Soins à Miramas | Inessence",
    description: "Consultez les prestations et tarifs d'Inessence à Miramas : bilan de vitalité, drainage lymphatique brésilien, Kobido, massages bien-être et soins énergétiques.",
    alternates: {
        canonical: "/prestations",
    },
};

const MEDOUCINE_URL = "https://www.medoucine.com/consultation/miramas/ines-fernandez/23273?addressId=86159&utm_source=google&utm_medium=organic&utm_campaign=gbp-partoo&utm_content=reserver-en-ligne";

export default function PrestationsPage() {
    return (
        <div className="animate-fade-in">
            {/* HERO SECTION */}
            <section style={{ padding: '160px 0 90px', backgroundColor: 'var(--sable-dark)', textAlign: 'center' }}>
                <div className="container">
                    <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', color: 'var(--gold-warm)', fontWeight: 600, display: 'block', marginBottom: '24px' }}>
                        Découvrir mes approches
                    </span>
                    <h1 className="font-serif typewriter" style={{ marginBottom: '32px' }}>
                        Prestations et <span className="text-gold italic">Tarifs</span>
                    </h1>
                    <p style={{ maxWidth: '750px', margin: '0 auto 36px', fontSize: '1.3rem', color: 'var(--text-muted)', fontWeight: 300 }}>
                        Un accompagnement sur-mesure pour répondre à vos besoins physiques, émotionnels et énergétiques.
                    </p>
                    <div>
                        <a
                            href={MEDOUCINE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-premium"
                            style={{
                                padding: '16px 36px',
                                borderRadius: '100px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '1rem',
                                boxShadow: '0 10px 25px rgba(93, 117, 96, 0.25)'
                            }}
                        >
                            <span>📅 Réserver une séance en ligne (Médoucine)</span>
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section style={{ padding: '100px 0', backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    
                    {/* CATEGORY 1: NATUROPATHIE */}
                    <div style={{ marginBottom: '100px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '2px solid var(--gold-warm)', paddingBottom: '16px', marginBottom: '40px', flexWrap: 'wrap', gap: '12px' }}>
                            <h2 className="font-serif" style={{ fontSize: '3rem', color: 'var(--sauge-dark)', margin: 0 }}>Accompagnement en Naturopathie</h2>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Cabinet à Miramas & Visioconférence</span>
                        </div>
                        
                        <div style={{ display: 'grid', gap: '30px' }}>
                            <ServiceCard 
                                title="Bilan vital - anamnèse complète" 
                                price="80€" 
                                duration="1h30 à 2h"
                                desc={[
                                    "Le bilan vital est un véritable temps pour vous, une parenthèse dédiée à la compréhension de votre corps et de vos besoins. Lors de cette première séance, nous prenons le temps d’explorer en profondeur votre mode de vie, votre alimentation, votre énergie, votre sommeil et votre état émotionnel.",
                                    "Cet échange me permet d’identifier les déséquilibres et remonter à l’origine de vos troubles, afin de vous proposer des conseils personnalisés et adaptés à votre quotidien.",
                                    "À l’issue du bilan, vous repartez avec des clés concrètes pour mieux comprendre votre corps, retrouver votre équilibre et avancer vers un mieux-être durable, à votre rythme."
                                ]}
                            />
                            <ServiceCard 
                                title="Suivi seul" 
                                price="60€" 
                                desc={[
                                    "La séance de suivi est un moment privilégié pour faire le point sur votre évolution et ajuster votre accompagnement en fonction de vos besoins du moment.",
                                    "Elle permet d’observer les changements déjà mis en place, de lever d’éventuels blocages et d’affiner les conseils pour continuer à avancer en douceur vers votre équilibre.",
                                    "Chaque suivi est personnalisé et s’adapte à votre rythme, à vos ressentis et à vos objectifs. C’est un espace d’échange, de soutien et d’ajustement, pour vous aider à ancrer durablement les nouvelles habitudes et renforcer les capacités naturelles de votre corps."
                                ]}
                            />
                            <ServiceCard 
                                title="Suivi conseillé et réajustement (3 séances)" 
                                price="160€" 
                                desc={[
                                    "Le suivi en 3 séances permet d’inscrire votre démarche dans la durée et d’accompagner en profondeur les changements mis en place.",
                                    "Ce format offre un cadre rassurant pour avancer étape par étape, observer les évolutions, ajuster les conseils et soutenir votre progression en fonction de vos besoins.",
                                    "Au fil des séances, nous consolidons les bases de votre hygiène de vie, levons les éventuels freins et renforçons les capacités d’adaptation et d’autorégulation de votre organisme. Un accompagnement idéal pour ancrer durablement de nouvelles habitudes et retrouver un équilibre global, en douceur et à votre rythme."
                                ]}
                            />
                            <ServiceCard 
                                title="Forfait accompagnement complet" 
                                subtitle="(1 bilan vital + 1 suivi + 1 massage d'1h au choix)"
                                price="190€" 
                                desc={[
                                    "Cet accompagnement complet a été pensé pour vous offrir une prise en charge globale, alliant compréhension, suivi et détente.",
                                    "Il comprend un bilan vital approfondi pour faire le point sur votre état général, une séance de suivi pour ajuster et ancrer les conseils dans votre quotidien, ainsi qu’un massage bien-être d’une heure, au choix, pour favoriser la détente, le lâcher-prise et la circulation des énergies.",
                                    "Cette formule permet d’agir à la fois sur le plan physique, émotionnel et énergétique, afin de soutenir en profondeur l’équilibre de votre organisme. Un accompagnement idéal pour prendre soin de vous dans votre globalité et vous offrir un véritable temps de reconnexion à votre corps."
                                ]}
                                isPremium={true}
                            />
                        </div>
                    </div>

                    {/* CATEGORY 2: SOINS BIEN-ÊTRE */}
                    <div style={{ marginBottom: '100px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '2px solid var(--gold-warm)', paddingBottom: '16px', marginBottom: '40px', flexWrap: 'wrap', gap: '12px' }}>
                            <h2 className="font-serif" style={{ fontSize: '3rem', color: 'var(--sauge-dark)', margin: 0 }}>Soins Bien-Être</h2>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Équilibre & Harmonisation</span>
                        </div>
                        
                        <div style={{ display: 'grid', gap: '30px' }}>
                            <ServiceCard 
                                title="Réflexologie plantaire" 
                                price="45€" 
                                duration="50 minutes"
                                subtitle="Comprenant un temps d’échange avant la pratique"
                                desc={[
                                    "La réflexologie plantaire est une technique douce qui consiste à stimuler des zones réflexes situées sur les pieds, en lien direct avec les différents organes et systèmes du corps.",
                                    "La séance dure 50 minutes et comprend un temps d’échange préalable afin d'identifier vos ressentis et vos attentes avant d'entamer la pratique.",
                                    "À travers des pressions ciblées, elle relance la circulation énergétique, dénoue les tensions nerveuses, soutient l'élimination des toxines et favorise l’autorégulation naturelle de l'organisme.",
                                    "Un véritable moment de lâcher-prise pour apaiser le corps et l’esprit tout en agissant en profondeur sur votre équilibre global."
                                ]}
                            />
                            <ServiceCard 
                                title="Forfait 3 séances Réflexologie" 
                                price="125€" 
                                subtitle="Séances de 50 minutes avec temps d’échange"
                                desc={[
                                    "Le forfait 3 séances en réflexologie plantaire permet d’accompagner le corps en profondeur et dans la durée.",
                                    "En répétant les séances, le travail se fait de manière progressive, favorisant un rééquilibrage global, une meilleure circulation énergétique et un relâchement durable des tensions.",
                                    "Ce format est idéal pour soutenir les fonctions de l’organisme, ancrer les bienfaits et permettre au corps de retrouver son équilibre naturel, en douceur.",
                                    "Un accompagnement recommandé pour prolonger les effets de la réflexologie et s’inscrire dans une véritable démarche de mieux-être."
                                ]}
                            />
                            <ServiceCard 
                                title="Forfait 5 séances Réflexologie" 
                                price="210€" 
                                subtitle="Séances de 50 minutes avec temps d’échange"
                                desc={[
                                    "Le forfait 5 séances permet un travail encore plus en profondeur, idéal pour accompagner durablement les déséquilibres installés ou soutenir l’organisme sur le long terme.",
                                    "Grâce à la régularité des séances, le corps intègre progressivement les bienfaits de la réflexologie : relâchement des tensions, amélioration de la circulation, rééquilibrage énergétique et apaisement du système nerveux.",
                                    "Ce format favorise une véritable transformation, en laissant au corps le temps nécessaire pour retrouver son harmonie naturelle et renforcer ses capacités d’autorégulation.",
                                    "Un accompagnement complet pour s’inscrire dans une démarche globale et durable de bien-être."
                                ]}
                            />
                            <ServiceCard 
                                title="Soin énergétique" 
                                price="50€" 
                                duration="30 minutes"
                                desc={[
                                    "Les soins énergétiques visent à rééquilibrer la circulation de l’énergie dans le corps, en agissant sur les plans physique, émotionnel et subtil.",
                                    "À travers une approche douce et intuitive, ils permettent de libérer les blocages, d’apaiser les tensions et de relancer la vitalité. Le corps retrouve ainsi une meilleure harmonie, favorisant un profond état de détente et de recentrage.",
                                    "Ces soins accompagnent également les périodes de fatigue, de stress, de surcharge émotionnelle ou de transition de vie, en soutenant les capacités naturelles d’équilibre et de régénération.",
                                    "Un véritable moment pour vous reconnecter à vous-même, retrouver votre énergie et rétablir une circulation fluide et apaisée."
                                ]}
                            />
                            <ServiceCard 
                                title="Forfait 3 séances Énergétique" 
                                price="130€" 
                                subtitle="Espacées d'une à deux semaines"
                                desc={[
                                    "Le forfait 3 séances, espacées d’une à deux semaines, permet un travail progressif et en profondeur sur les plans énergétique, émotionnel et physique.",
                                    "Cet accompagnement favorise une libération en douceur des blocages, tout en laissant au corps le temps d’intégrer chaque séance et de réajuster son équilibre naturel.",
                                    "Au fil des rendez-vous, l’énergie circule plus librement, les tensions s’apaisent et un mieux-être global s’installe durablement.",
                                    "Un rythme idéal pour accompagner les transformations en respectant le temps et les besoins de votre corps."
                                ]}
                            />
                        </div>
                    </div>

                    {/* CATEGORY 3: MASSAGES & CORPS */}
                    <div style={{ marginBottom: '80px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '2px solid var(--gold-warm)', paddingBottom: '16px', marginBottom: '40px', flexWrap: 'wrap', gap: '12px' }}>
                            <h2 className="font-serif" style={{ fontSize: '3rem', color: 'var(--sauge-dark)', margin: 0 }}>Massages & Soins Corps</h2>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Détente, Drainage & Sculpt</span>
                        </div>
                        
                        <div style={{ display: 'grid', gap: '30px' }}>
                            {/* DRAINAGE LYMPHATIQUE BRÉSILIEN */}
                            <ServiceCard 
                                title="Drainage lymphatique brésilien" 
                                price="90€" 
                                duration="1h15"
                                desc={[
                                    "Le drainage lymphatique brésilien est une méthode manuelle dynamique et rythmée, alliant pompages doux et manœuvres fermes et ciblées sur l’ensemble du corps.",
                                    "D'une durée complète de 1h15, ce soin réactive puissamment la circulation lymphatique, décongestionne les tissus, réduit les sensations de gonflement et stimule l'élimination naturelle des toxines.",
                                    "Particulièrement réputé pour son action drainante et sculptante, il affine visiblement la silhouette, améliore le grain de peau et procure une sensation incomparable de légèreté immédiate dès la première séance."
                                ]}
                                isPremium={true}
                            />
                            <ServiceCard 
                                title="Cure 6 séances Drainage lymphatique brésilien" 
                                price="450€"
                                subtitle="Soit 75€ la séance (durée 1h15 par séance)" 
                                desc={[
                                    "La cure de 6 séances à 450 € (au lieu de 540 € à l’unité) est le protocole idéal pour amorcer un travail en profondeur et pérenniser les effets du drainage.",
                                    "Chaque séance en cure dure également 1 h 15, garantissant la même qualité d'attention et d'efficacité à chaque rendez-vous.",
                                    "Le rythme des rendez-vous est défini ensemble selon vos besoins et vos objectifs, pour relancer de façon continue le système lymphatique et consolider le dégonflement et le raffermissement cutané."
                                ]}
                            />
                            <ServiceCard 
                                title="Cure 10 séances Drainage lymphatique brésilien" 
                                price="600€"
                                subtitle="Soit 60€ la séance (durée 1h15 par séance)" 
                                desc={[
                                    "La cure de 10 séances est une véritable démarche de régénération corporelle et de détoxification globale en profondeur.",
                                    "Chaque séance de la cure dure 1 h 15, assurant un drainage complet et méticuleux du corps à chaque passage.",
                                    "Le rythme des rendez-vous est fixé sur-mesure ensemble selon votre profil. Ce protocole complet permet d'ancrer durablement la légèreté des membres, d'affiner la silhouette, d'atténuer la cellulite aqueuse et de revitaliser profondément l'organisme."
                                ]}
                            />

                            {/* DRAINAGE DES JAMBES (NOUVEAU) */}
                            <ServiceCard 
                                title="Drainage lymphatique des jambes" 
                                price="45€" 
                                duration="45 minutes"
                                desc={[
                                    "Un soin spécifiquement ciblé sur les membres inférieurs pour soulager instantanément les sensations de jambes lourdes, engourdies ou sujettes à la rétention d’eau.",
                                    "Pendant 45 minutes, des mouvements précis et stimulants réactivent le retour veineux et lymphatique, désengorgent les chevilles et les mollets et apportent une sensation de fraîcheur et de légèreté durable.",
                                    "Idéal en cas de piétinement prolongé, de voyage, de chaleur ou de fatigue circulatoire."
                                ]}
                            />

                            {/* LE KOBIDO */}
                            <ServiceCard 
                                title="Le Kobido (japonais)" 
                                price="70€" 
                                duration="45 à 60 minutes"
                                desc={[
                                    "Véritable rituel ancestral japonais, le Kobido est un massage du visage alliant technicité et douceur, reconnu pour ses effets liftants naturels.",
                                    "À travers des gestes précis, rythmés et profonds, il stimule la circulation sanguine et lymphatique, tonifie les muscles du visage et relance la production de collagène.",
                                    "Ce soin permet de lisser les traits, redonner de l’éclat au teint et prévenir les signes du vieillissement, tout en procurant une profonde détente.",
                                    "Au-delà de ses bienfaits esthétiques, le Kobido agit également sur l’équilibre global en libérant les tensions accumulées au niveau du visage et du système nerveux."
                                ]}
                            />
                            <ServiceCard 
                                title="Forfait 5 séances Kobido" 
                                price="280€" 
                                subtitle="Idéalement espacées d'une semaine"
                                desc={[
                                    "Le forfait 5 séances, idéalement espacées d’une semaine, permet d’obtenir des résultats visibles et durables sur la qualité de la peau et la tonicité du visage.",
                                    "Ce rythme régulier stimule progressivement les muscles du visage, relance la circulation et soutient la production naturelle de collagène. Chaque séance vient renforcer les effets de la précédente.",
                                    "Au fil des séances, les traits sont plus lissés, le teint plus éclatant et la peau visiblement plus ferme."
                                ]}
                            />
                            <ServiceCard 
                                title="Forfait 10 séances Kobido" 
                                price="560€" 
                                subtitle="Pour des résultats profonds et durables (soit 56€ la séance)"
                                desc={[
                                    "Le forfait 10 séances à 560 € est une véritable cure anti-âge naturelle pensée pour des résultats profonds, visibles et durables.",
                                    "À raison d’une séance par semaine, ce protocole permet de travailler en continu sur la tonicité des muscles du visage, la qualité du derme et l’éclat du teint, tout en stimulant intensément la production d'élastine et de collagène.",
                                    "Les traits se redessinent, les ridules s'estompent et le visage retrouve une vitalité et une jeunesse rayonnantes."
                                ]}
                            />

                            {/* MASSAGE DU DOS (NOUVEAU) */}
                            <ServiceCard 
                                title="Massage du dos" 
                                price="30€" 
                                duration="30 minutes"
                                desc={[
                                    "Un massage ciblé et concentré d'une demi-heure pour dénouer les tensions accumulées sur le haut et le bas du dos, les épaules, les trapèzes et la nuque.",
                                    "Par des pressions enveloppantes et des étirements doux, il libère les nœuds musculaires souvent liés au stress quotidien, au port de charges ou au travail sur écran.",
                                    "Une pause express et salvatrice pour retrouver une liberté de mouvement et relâcher instantanément la pression."
                                ]}
                            />

                            {/* MASSAGE LOMI-LOMI */}
                            <ServiceCard 
                                title="Le Lomi-Lomi" 
                                price="70€" 
                                duration="1 heure"
                                desc={[
                                    "Le massage Lomi-Lomi est un soin rituel venu d'Hawaï, imprégné de la philosophie locale Huna. Ses mouvements fluides, amples et rythmés, donnés principalement avec les avant-bras, rappellent le doux va-et-vient des vagues océaniques.",
                                    "D'une durée d'une heure complète, ce massage agit puissamment sur les plans physique et subtil. Il dénoue les blocages musculaires, apaise les tensions émotionnelles et harmonise la circulation de l'énergie vitale.",
                                    "Un voyage sensoriel enveloppant pour se reconnecter à son corps et retrouver une paix intérieure profonde."
                                ]}
                            />

                            {/* MASSAGE AYURVÉDIQUE */}
                            <ServiceCard 
                                title="L'Ayurvédique" 
                                price="90€" 
                                duration="90 minutes"
                                desc={[
                                    "Issu de l'Ayurvéda, médecine traditionnelle indienne millénaire, le massage ayurvédique s'inscrit dans une approche globale visant à rétablir l'équilibre entre le corps, l'esprit et l'énergie vitale (prana).",
                                    "Réalisé avec des huiles chaudes et des mouvements enveloppants, rythmés et dynamiques, ce soin agit à la fois sur les tissus musculaires, la circulation sanguine et le système nerveux.",
                                    "Il favorise l'élimination des toxines (ama), relance la vitalité, améliore la souplesse du corps et apaise durablement le mental.",
                                    "Un soin profondément régénérant d'1h30, idéal pour retrouver un ancrage solide et une grande sérénité."
                                ]}
                            />

                            {/* LE PRÉNATAL — 30 MINUTES */}
                            <ServiceCard 
                                title="Le Prénatal — 30 minutes" 
                                price="45€" 
                                duration="30 minutes"
                                desc={[
                                    "Le massage prénatal en format de 30 minutes est un soin doux et sécurisant spécialement adapté pour accompagner la femme enceinte au cours de sa grossesse.",
                                    "Il offre un soulagement ciblé et rapide sur les zones les plus sollicitées (lombaires, nuque, trapèzes ou jambes), tout en procurant un réconfort immédiat.",
                                    "Un moment cocooning bienvenu pour relâcher les tensions physiques en toute sérénité."
                                ]}
                            />

                            {/* LE PRÉNATAL — 1 HEURE (NOUVEAU) */}
                            <ServiceCard 
                                title="Le Prénatal — 1 heure" 
                                price="70€" 
                                duration="1 heure"
                                subtitle="En complément de la formule de 30 minutes"
                                desc={[
                                    "La formule complète d'une heure permet un accompagnement global et profondément enveloppant de la future maman.",
                                    "Ce soin complet détend l'ensemble du corps, apaise les douleurs dorsales et pelviennes, allège les jambes lourdes et calme le système nerveux.",
                                    "Au-delà des bienfaits physiques indéniables, ce massage crée un espace privilégié de douceur, d'écoute et de tendre connexion avec votre bébé dans un cocon bienveillant."
                                ]}
                                isPremium={true}
                            />
                        </div>
                    </div>

                    {/* DISLAIMERS / HORAIRES & INFOS PRATIQUES */}
                    <div style={{ marginTop: '80px', backgroundColor: 'var(--sable-warm)', padding: '50px 40px', borderRadius: '32px', border: '1px solid rgba(212, 175, 55, 0.25)' }}>
                        <h3 className="font-serif" style={{ fontSize: '2.4rem', marginBottom: '24px', color: 'var(--text-main)', textAlign: 'center' }}>
                            Horaires & Informations Pratiques
                        </h3>

                        {/* HORAIRES CABINET */}
                        <div style={{ 
                            maxWidth: '700px', 
                            margin: '0 auto 36px', 
                            background: 'var(--white)', 
                            padding: '30px', 
                            borderRadius: '20px', 
                            boxShadow: 'var(--shadow-soft)',
                            border: '1px solid rgba(0,0,0,0.04)'
                        }}>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--sauge-dark)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span>🕒</span> Horaires du cabinet (Miramas)
                            </h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', fontSize: '1rem', color: 'var(--text-main)' }}>
                                <div>
                                    <strong>Lundi, mardi & jeudi :</strong> <br />
                                    <span style={{ color: 'var(--text-muted)' }}>9h00 – 16h00</span>
                                </div>
                                <div>
                                    <strong>Vendredi :</strong> <br />
                                    <span style={{ color: 'var(--text-muted)' }}>9h00 – 19h00</span>
                                </div>
                                <div style={{ gridColumn: '1 / -1', marginTop: '6px', paddingTop: '12px', borderTop: '1px dashed #eee', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    ❌ Fermé le mercredi, le samedi, le dimanche et les jours fériés.
                                </div>
                            </div>
                        </div>

                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '16px' }}>
                            Certaines mutuelles proposent une <strong>prise en charge partielle ou totale</strong> des consultations en naturopathie, ainsi que de certaines séances de réflexologie. Une facture pourra vous être remise afin de faciliter vos démarches auprès de votre organisme complémentaire.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
                            Dans une volonté de rendre le bien-être accessible à tous, des tarifs adaptés peuvent également être proposés aux étudiants et aux personnes bénéficiant du RSA. Prendre soin de son hygiène de vie et de sa santé devrait être à la portée de chacun.
                        </p>
                        <p style={{ fontSize: '1.15rem', color: 'var(--gold-vibrant)', fontWeight: 600, textAlign: 'center', marginTop: '24px' }}>
                            ✨ Les forfaits et cures peuvent être réglés en plusieurs fois.
                        </p>
                        
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '36px' }}>
                            <a 
                                href={MEDOUCINE_URL} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn-premium" 
                                style={{ padding: '18px 42px', fontSize: '1.05rem', borderRadius: '100px' }}
                            >
                                RÉSERVER EN LIGNE SUR MÉDOUCINE →
                            </a>
                            <Link 
                                href="/contact" 
                                className="btn-outline" 
                                style={{ padding: '18px 42px', fontSize: '1.05rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center' }}
                            >
                                CONTACTER LE CABINET
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

// Composant interne pour l'affichage uniforme des prestations avec bouton direct de réservation
function ServiceCard({ 
    title, 
    subtitle, 
    price, 
    duration, 
    desc, 
    forfait, 
    isPremium = false,
    bookingUrl = MEDOUCINE_URL
}: {
    title: string;
    subtitle?: string;
    price: string;
    duration?: string;
    desc: string[];
    forfait?: { name: string; price: string }[];
    isPremium?: boolean;
    bookingUrl?: string;
}) {
    return (
        <a 
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Réserver ${title} en ligne sur Médoucine`}
            className="service-card-item"
            style={{
                backgroundColor: isPremium ? 'var(--white)' : 'var(--bg-secondary)',
                padding: '36px 36px 30px',
                borderRadius: '24px',
                border: isPremium ? '2px solid var(--gold-warm)' : '1px solid rgba(0,0,0,0.05)',
                boxShadow: isPremium ? '0 15px 40px rgba(212, 175, 55, 0.15)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px',
                textDecoration: 'none',
                color: 'inherit'
            }}
        >
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ flex: '1 1 300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                            <h3 className="font-serif" style={{ fontSize: '1.85rem', color: isPremium ? 'var(--gold-warm)' : 'var(--text-main)', margin: '0 0 6px' }}>
                                {title}
                            </h3>
                            <span style={{ fontSize: '0.75rem', backgroundColor: 'var(--sable-dark)', color: 'var(--sauge-dark)', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>
                                Réservable ↗
                            </span>
                        </div>
                        {subtitle && <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>{subtitle}</p>}
                        {duration && <p style={{ fontSize: '0.85rem', color: 'var(--sauge-dark)', margin: '8px 0 0', fontWeight: 600, letterSpacing: '1px' }}>⏱ DURÉE : {duration.toUpperCase()}</p>}
                    </div>
                    <div style={{ fontSize: '2.3rem', fontWeight: 300, color: 'var(--text-main)', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: '100px' }}>
                        <span>{price}</span>
                        {forfait && (
                            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)', textAlign: 'right', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                {forfait.map((f: { name: string; price: string }, i: number) => (
                                    <span key={i} style={{ backgroundColor: 'var(--sable-warm)', padding: '6px 12px', borderRadius: '8px' }}>{f.name} : {f.price}</span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {desc.map((para: string, idx: number) => {
                        const parts = para.split(/(\*\*.*?\*\*)/g);
                        return (
                            <p key={idx} style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.02rem', margin: 0 }}>
                                {parts.map((part, i) => 
                                    part.startsWith('**') && part.endsWith('**') ? 
                                    <strong key={i} style={{ color: 'var(--text-main)' }}>{part.slice(2, -2)}</strong> : 
                                    part
                                )}
                            </p>
                        );
                    })}
                </div>
            </div>

            {/* BOUTON DE RÉSERVATION SUR CHAQUE PRESTATION */}
            <div style={{ 
                paddingTop: '20px', 
                borderTop: '1px solid rgba(0,0,0,0.06)', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                flexWrap: 'wrap', 
                gap: '14px' 
            }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span>🌿</span> Cliquez n&apos;importe où pour réserver
                </span>
                <span 
                    className="btn-premium card-book-btn"
                    style={{
                        padding: '12px 26px',
                        fontSize: '0.9rem',
                        borderRadius: '100px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    <span>Réserver ce soin</span>
                    <span style={{ fontSize: '1.1rem' }}>→</span>
                </span>
            </div>
        </a>
    );
}
