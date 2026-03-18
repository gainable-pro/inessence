import Link from "next/link";

export default function PrestationsPage() {
    return (
        <div className="animate-fade-in">
            {/* HERO SECTION */}
            <section style={{ padding: '160px 0 100px', backgroundColor: 'var(--sable-dark)', textAlign: 'center' }}>
                <div className="container">
                    <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', color: 'var(--gold-warm)', fontWeight: 600, display: 'block', marginBottom: '24px' }}>
                        Découvrir mes approches
                    </span>
                    <h1 className="font-serif typewriter" style={{ marginBottom: '32px' }}>
                        Prestations et <span className="text-gold italic">Tarifs</span>
                    </h1>
                    <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.3rem', color: 'var(--text-muted)', fontWeight: 300 }}>
                        Un accompagnement sur-mesure pour répondre à vos besoins physiques, émotionnels et énergétiques.
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    
                    {/* CATEGORY 1: NATUROPATHIE */}
                    <div style={{ marginBottom: '100px' }}>
                        <h2 className="font-serif" style={{ fontSize: '3rem', color: 'var(--sauge-dark)', borderBottom: '2px solid var(--gold-warm)', paddingBottom: '20px', marginBottom: '40px' }}>Accompagnement en Naturopathie</h2>
                        
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
                        <h2 className="font-serif" style={{ fontSize: '3rem', color: 'var(--sauge-dark)', borderBottom: '2px solid var(--gold-warm)', paddingBottom: '20px', marginBottom: '40px' }}>Soins Bien-Être</h2>
                        
                        <div style={{ display: 'grid', gap: '30px' }}>
                            <ServiceCard 
                                title="Réflexologie plantaire" 
                                price="45€" 
                                duration="30 minutes"
                                desc={[
                                    "La réflexologie plantaire est une technique douce qui consiste à stimuler des zones réflexes situées sur les pieds, en lien avec les différents organes et systèmes du corps.",
                                    "À travers des pressions ciblées, cette pratique permet de relancer la circulation énergétique, de favoriser l’élimination des tensions et de soutenir les fonctions naturelles de l’organisme.",
                                    "Elle procure une profonde détente, aide à rééquilibrer le système nerveux et accompagne le corps dans ses capacités d’autorégulation.",
                                    "Un véritable moment de lâcher-prise, pour apaiser le corps et l’esprit tout en agissant en profondeur sur votre équilibre global."
                                ]}
                            />
                            <ServiceCard 
                                title="Forfait 3 séances Réflexologie" 
                                price="125€" 
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

                    {/* CATEGORY 3: MASSAGES */}
                    <div style={{ marginBottom: '80px' }}>
                        <h2 className="font-serif" style={{ fontSize: '3rem', color: 'var(--sauge-dark)', borderBottom: '2px solid var(--gold-warm)', paddingBottom: '20px', marginBottom: '40px' }}>Massages</h2>
                        
                        <div style={{ display: 'grid', gap: '30px' }}>
                            <ServiceCard 
                                title="Massage Lymphatique" 
                                price="50€" 
                                duration="45 à 60 minutes"
                                desc={[
                                    "Le massage drainant lymphatique est une technique douce et rythmée qui vise à stimuler la circulation de la lymphe et à favoriser l’élimination des toxines.",
                                    "Par des mouvements lents et précis, il aide à décongestionner les tissus, à réduire les sensations de jambes lourdes, les gonflements et à soutenir le système immunitaire.",
                                    "Ce soin est également particulièrement apprécié pour ses bienfaits esthétiques : il contribue à améliorer l’aspect de la peau, à atténuer la rétention d’eau et à lisser l’aspect de la cellulite.",
                                    "Il procure une profonde sensation de légèreté et de détente, tout en relançant les fonctions d’élimination du corps.",
                                    "Un soin complet pour purifier l’organisme, affiner la silhouette et retrouver un bien-être global."
                                ]}
                            />
                            <ServiceCard 
                                title="Forfait 5 séances Lymphatique" 
                                price="210€"
                                subtitle="Espacées de 3 jours maximum" 
                                desc={[
                                    "Le forfait 5 séances, espacées de 3 jours maximum, permet de stimuler efficacement et durablement la circulation lymphatique.",
                                    "Ce rythme rapproché est essentiel pour relancer le système d’élimination du corps de manière continue, éviter que la lymphe ne stagne à nouveau et potentialiser les effets du drainage. Chaque séance vient renforcer les bienfaits de la précédente, permettant un travail progressif et en profondeur.",
                                    "Au fil des séances, les tissus se décongestionnent, la rétention d’eau diminue, la silhouette s’affine et la peau gagne en tonicité.",
                                    "Ce protocole est idéal pour obtenir des résultats visibles et durables, tout en soutenant les capacités naturelles de détoxification de l’organisme."
                                ]}
                            />
                            <ServiceCard 
                                title="Le Kobido (japonais)" 
                                price="70€" 
                                duration="45 à 60 minutes"
                                desc={[
                                    "Véritable rituel ancestral japonais, le Kobido est un massage du visage alliant technicité et douceur, reconnu pour ses effets liftants naturels.",
                                    "À travers des gestes précis, rythmés et profonds, il stimule la circulation sanguine et lymphatique, tonifie les muscles du visage et relance la production de collagène.",
                                    "Ce soin permet de lisser les traits, redonner de l’éclat au teint et prévenir les signes du vieillissement, tout en procurant une profonde détente.",
                                    "Au-delà de ses bienfaits esthétiques, le Kobido agit également sur l’équilibre global en libérant les tensions accumulées au niveau du visage et du système nerveux.",
                                    "Un véritable moment de lâcher-prise et de régénération, pour révéler l'éclat naturel de votre peau."
                                ]}
                            />
                            <ServiceCard 
                                title="Forfait 5 séances Kobido" 
                                price="280€" 
                                subtitle="Idéalement espacées d'une semaine"
                                desc={[
                                    "Le forfait 5 séances, idéalement espacées d’une semaine, permet d’obtenir des résultats visibles et durables sur la qualité de la peau et la tonicité du visage.",
                                    "Ce rythme régulier stimule progressivement les muscles du visage, relance la circulation et soutient la production naturelle de collagène. Chaque séance vient renforcer les effets de la précédente, permettant un véritable travail en profondeur.",
                                    "Au fil des séances, les traits sont plus lissés, le teint plus éclatant et la peau visiblement plus ferme.",
                                    "Ce protocole est particulièrement recommandé pour installer un effet liftant naturel et prolonger les bienfaits du Kobido dans le temps."
                                ]}
                            />
                            <ServiceCard 
                                title="Forfait 10 séances Kobido" 
                                price="560€" 
                                subtitle="Pour des résultats profonds et durables"
                                desc={[
                                    "Le forfait 10 séances est une véritable cure régénérante, pensée pour des résultats profonds, visibles et durables.",
                                    "À raison d’une séance par semaine, ce protocole permet de travailler en continu sur la tonicité des muscles du visage, la qualité de la peau et l’éclat du teint. Cette régularité est essentielle pour stimuler intensément la production de collagène et ancrer les effets liftants naturels du Kobido.",
                                    "Au fil des séances, les traits se redessinent, les rides et ridules s’estompent, la peau gagne en fermeté et en luminosité. Le visage retrouve progressivement son éclat, comme revitalisé de l’intérieur.",
                                    "Ce forfait est idéal pour celles et ceux qui souhaitent un véritable accompagnement anti-âge naturel, avec des résultats visibles séance après séance, et une peau durablement plus tonique et éclatante."
                                ]}
                            />
                             <ServiceCard 
                                title="L'Ayurvédique" 
                                price="90€" 
                                duration="90 minutes"
                                desc={[
                                    "Issu de l'Ayurvéda, médecine traditionnelle indienne millénaire, le massage ayurvédique s'inscrit dans une approche globale visant à rétablir l'équilibre entre le corps, l'esprit et l'énergie vitale, appelée prana.",
                                    "Selon cette tradition, chaque individu possède une constitution unique (doshas), et le déséquilibre de ces énergies peut être à l'origine de tensions physiques, de fatigue ou de troubles émotionnels. Le massage ayurvédique vient ainsi réharmoniser ces énergies en profondeur.",
                                    "Réalisé avec des huiles chaudes et des mouvements enveloppants, rythmés et parfois dynamiques, ce soin agit à la fois sur les tissus, la circulation et le système nerveux. Il favorise l'élimination des toxines (ama), relance la vitalité, améliore la souplesse du corps et apaise durablement le mental.",
                                    "Au-delà de ses bienfaits physiques, il permet un véritable recentrage, une reconnexion à soi et une harmonisation globale de l'être.",
                                    "Un soin profondément régénérant, idéal pour retrouver équilibre, énergie et sérénité."
                                ]}
                            />
                             <ServiceCard 
                                title="Le Lomi-Lomi" 
                                price="70€" 
                                duration="60 à 75 minutes"
                                desc={[
                                    "Le massage Lomi-Lomi est un soin rituel venu d'Hawaï, imprégné de la philosophie locale Huna. Ses mouvements fluides, amples et rythmés, donnés principalement avec les avant-bras, rappellent le doux va-et-vient des vagues, plongeant le corps dans une profonde et enveloppante relaxation.",
                                    "Plus qu'un simple massage, le Lomi-Lomi agit puissamment sur les plans physique et subtil. Il libère avec douceur les nœuds musculaires, dissipe les tensions émotionnelles enfouies et relance harmonieusement la circulation de l'énergie.",
                                    "Ce soin procure une sensation d'unité, de recentrage et de profonde détente, comme une véritable renaissance intérieure.",
                                    "Un voyage sensoriel unique, pour se reconnecter à soi, relâcher ce qui n'a plus lieu d'être et retrouver une harmonie globale."
                                ]}
                            />
                             <ServiceCard 
                                title="Le Prénatal" 
                                price="45€" 
                                duration="30 à 45 minutes"
                                desc={[
                                    "Le massage prénatal est un soin spécialement conçu pour accompagner la femme tout au long de sa grossesse, en douceur et en sécurité.",
                                    "Durant cette période de grands changements physiques et émotionnels, ce massage permet de soulager les tensions musculaires, notamment au niveau du dos, des jambes et du bassin, tout en améliorant la circulation et en réduisant les sensations de jambes lourdes.",
                                    "Grâce à des gestes enveloppants et adaptés, il favorise la détente profonde, apaise le système nerveux et aide à mieux vivre les inconforts liés à la grossesse.",
                                    "Au-delà des bienfaits physiques, ce soin offre un véritable moment de connexion à soi et à son bébé, dans un cocon de douceur et de bienveillance.",
                                    "Un accompagnement précieux pour vivre sa grossesse plus sereinement et en harmonie avec son corps."
                                ]}
                            />
                        </div>
                    </div>

                    {/* DISLAIMERS / NOTES IMPORTANTES */}
                    <div style={{ marginTop: '100px', backgroundColor: 'var(--sable-warm)', padding: '60px', borderRadius: '40px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                        <h3 className="font-serif" style={{ fontSize: '2rem', marginBottom: '24px', color: 'var(--text-main)', textAlign: 'center' }}>Le bien-être accessible à tous</h3>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
                            Certaines mutuelles proposent une <strong>prise en charge partielle ou totale</strong> des consultations en naturopathie, ainsi que de certaines séances de réflexologie. Une facture pourra vous être remise afin de faciliter vos démarches auprès de votre organisme complémentaire.
                        </p>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
                            Dans une volonté de rendre le bien-être accessible à tous, des tarifs adaptés peuvent également être proposés aux étudiants et aux personnes bénéficiant du RSA. Prendre soin de son hygiène de vie et de sa santé devrait être à la portée de chacun.
                        </p>
                        <p style={{ fontSize: '1.2rem', color: 'var(--gold-vibrant)', fontWeight: 600, textAlign: 'center', marginTop: '30px' }}>
                            Les forfaits peuvent être payés en plusieurs fois.
                        </p>
                        
                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                            <Link href="/contact" className="btn-premium" style={{ display: 'inline-flex', padding: '20px 50px' }}>RÉSERVER MA SÉANCE</Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

// Composant interne pour l'affichage uniforme des prestations
function ServiceCard({ title, subtitle, price, duration, desc, forfait, isPremium = false }: any) {
    return (
        <div style={{
            backgroundColor: isPremium ? 'var(--white)' : 'var(--bg-secondary)',
            padding: '40px',
            borderRadius: '24px',
            border: isPremium ? '2px solid var(--gold-warm)' : '1px solid rgba(0,0,0,0.03)',
            boxShadow: isPremium ? '0 15px 40px rgba(212, 175, 55, 0.15)' : 'none',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '24px' }}>
                <div>
                    <h3 className="font-serif" style={{ fontSize: '1.8rem', color: isPremium ? 'var(--gold-warm)' : 'var(--text-main)', margin: '0 0 8px' }}>{title}</h3>
                    {subtitle && <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>{subtitle}</p>}
                    {duration && <p style={{ fontSize: '0.9rem', color: 'var(--sauge-dark)', margin: '8px 0 0', fontWeight: 600, letterSpacing: '1px' }}>DURÉE : {duration.toUpperCase()}</p>}
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: 300, color: 'var(--text-main)', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    {price}
                    {forfait && (
                        <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-muted)', textAlign: 'right', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {forfait.map((f: any, i: number) => (
                                <span key={i} style={{ backgroundColor: 'var(--sable-warm)', padding: '6px 12px', borderRadius: '8px' }}>{f.name} : {f.price}</span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {desc.map((para: string, idx: number) => {
                    const parts = para.split(/(\*\*.*?\*\*)/g);
                    return (
                        <p key={idx} style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem', margin: 0 }}>
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
    );
}
