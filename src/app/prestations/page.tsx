import Link from "next/link";

export default function PrestationsPage() {
    return (
        <div className="animate-fade-in">
            {/* HERO SECTION */}
            <section style={{ padding: '160px 0 100px', backgroundColor: 'var(--sable-dark)', textAlign: 'center' }}>
                <div className="container">
                    <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', color: 'var(--gold-warm)', fontWeight: 600, display: 'block', marginBottom: '24px' }}>
                        D&eacute;couvrir mes approches
                    </span>
                    <h1 className="font-serif typewriter" style={{ marginBottom: '32px' }}>
                        Prestations et <span className="text-gold italic">Tarifs</span>
                    </h1>
                    <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.3rem', color: 'var(--text-muted)', fontWeight: 300 }}>
                        Un accompagnement sur-mesure pour r&eacute;pondre &agrave; vos besoins physiques, &eacute;motionnels et &eacute;nerg&eacute;tiques.
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
                                title="Bilan vital - anamn&egrave;se compl&egrave;te" 
                                price="80&euro;" 
                                duration="1h30 &agrave; 2h"
                                desc={[
                                    "Le bilan vital est un v&eacute;ritable temps pour vous, une parenth&egrave;se d&eacute;di&eacute;e &agrave; la compr&eacute;hension de votre corps et de vos besoins. Lors de cette premi&egrave;re s&eacute;ance, nous prenons le temps d&rsquo;explorer en profondeur votre mode de vie, votre alimentation, votre &eacute;nergie, votre sommeil et votre &eacute;tat &eacute;motionnel.",
                                    "Cet &eacute;change me permet d&rsquo;identifier les d&eacute;s&eacute;quilibres et de remonter &agrave; l&rsquo;origine de vos troubles, afin de vous proposer des conseils personnalis&eacute;s et adapt&eacute;s &agrave; votre quotidien.",
                                    "&Agrave; l&rsquo;issue du bilan, vous repartez avec des cl&eacute;s concr&egrave;tes pour mieux comprendre votre corps, retrouver votre &eacute;quilibre et avancer vers un mieux-&ecirc;tre durable, &agrave; votre rythme."
                                ]}
                            />
                            <ServiceCard 
                                title="Suivi seul" 
                                price="60&euro;" 
                                desc={[
                                    "La s&eacute;ance de suivi est un moment privil&eacute;gi&eacute; pour faire le point sur votre &eacute;volution et ajuster votre accompagnement en fonction de vos besoins du moment.",
                                    "Elle permet d&rsquo;observer les changements d&eacute;j&agrave; mis en place, de lever d&rsquo;&eacute;ventuels blocages et d&rsquo;affiner les conseils pour continuer &agrave; avancer en douceur vers votre &eacute;quilibre.",
                                    "Chaque suivi est personnalis&eacute; et s&rsquo;adapte &agrave; votre rythme, &agrave; vos ressentis et &agrave; vos objectifs. C&rsquo;est un espace d&rsquo;&eacute;change, de soutien et d&rsquo;ajustement, pour vous aider &agrave; ancrer durablement les nouvelles habitudes et renforcer les capacit&eacute;s naturelles de votre corps."
                                ]}
                            />
                            <ServiceCard 
                                title="Suivi conseill&eacute; et r&eacute;ajustement (3 s&eacute;ances)" 
                                price="160&euro;" 
                                desc={[
                                    "Le suivi en 3 s&eacute;ances permet d&rsquo;inscrire votre d&eacute;marche dans la dur&eacute;e et d&rsquo;accompagner en profondeur les changements mis en place.",
                                    "Ce format offre un cadre rassurant pour avancer &eacute;tape par &eacute;tape, observer les &eacute;volutions, ajuster les conseils et soutenir votre progression en fonction de vos besoins.",
                                    "Au fil des s&eacute;ances, nous consolidons les bases de votre hygi&egrave;ne de vie, levons les &eacute;ventuels freins et renfor&ccedil;ons les capacit&eacute;s d&rsquo;adaptation et d&rsquo;autor&eacute;gulation de votre organisme. Un accompagnement id&eacute;al pour ancrer durablement de nouvelles habitudes et retrouver un &eacute;quilibre global, en douceur et &agrave; votre rythme."
                                ]}
                            />
                            <ServiceCard 
                                title="Forfait accompagnement complet" 
                                subtitle="(1 bilan vital + 1 suivi + 1 massage d&apos;1h au choix)"
                                price="190&euro;" 
                                desc={[
                                    "Cet accompagnement complet a &eacute;t&eacute; pens&eacute; pour vous offrir une prise en charge globale, alliant compr&eacute;hension, suivi et d&eacute;tente.",
                                    "Il comprend un bilan vital approfondi pour faire le point sur votre &eacute;tat g&eacute;n&eacute;ral, une s&eacute;ance de suivi pour ajuster et ancrer les conseils dans votre quotidien, ainsi qu&rsquo;un massage bien-&ecirc;tre d&rsquo;une heure, au choix, pour favoriser la d&eacute;tente, le l&acirc;cher-prise et la circulation des &eacute;nergies.",
                                    "Cette formule permet d&rsquo;agir &agrave; la fois sur le plan physique, &eacute;motionnel et &eacute;nerg&eacute;tique, afin de soutenir en profondeur l&rsquo;&eacute;quilibre de votre organisme. Un accompagnement id&eacute;al pour prendre soin de vous dans votre globalit&eacute; et vous offrir un v&eacute;ritable temps de reconnexion &agrave; votre corps."
                                ]}
                                isPremium={true}
                            />
                        </div>
                    </div>

                    {/* CATEGORY 2: SOINS BIEN-ÊTRE */}
                    <div style={{ marginBottom: '100px' }}>
                        <h2 className="font-serif" style={{ fontSize: '3rem', color: 'var(--sauge-dark)', borderBottom: '2px solid var(--gold-warm)', paddingBottom: '20px', marginBottom: '40px' }}>Soins Bien-&Ecirc;tre</h2>
                        
                        <div style={{ display: 'grid', gap: '30px' }}>
                            <ServiceCard 
                                title="R&eacute;flexologie plantaire" 
                                price="45&euro;" 
                                duration="30 minutes"
                                forfait={[{name: "Forfait 3 s&eacute;ances", price: "125&euro;"}, {name: "Forfait 5 s&eacute;ances", price: "210&euro;"}]}
                                desc={[
                                    "La r&eacute;flexologie plantaire est une technique douce qui consiste &agrave; stimuler des zones r&eacute;flexes situ&eacute;es sur les pieds, en lien avec les diff&eacute;rents organes et syst&egrave;mes du corps. &Agrave; travers des pressions cibl&eacute;es, cette pratique permet de relancer la circulation &eacute;nerg&eacute;tique, de favoriser l&rsquo;&eacute;limination des tensions et de soutenir les fonctions naturelles de l&rsquo;organisme.",
                                    "Elle procure une profonde d&eacute;tente, aide &agrave; r&eacute;&eacute;quilibrer le syst&egrave;me nerveux et accompagne le corps dans ses capacit&eacute;s d&rsquo;autor&eacute;gulation. Un v&eacute;ritable moment de l&acirc;cher-prise, pour apaiser le corps et l&rsquo;esprit tout en agissant en profondeur sur votre &eacute;quilibre global.",
                                    "**Forfait 3 s&eacute;ances :** Permet d&rsquo;accompagner le corps en profondeur et dans la dur&eacute;e de mani&egrave;re progressive, favorisant un r&eacute;&eacute;quilibrage global, une meilleure circulation &eacute;nerg&eacute;tique et un rel&acirc;chement durable des tensions.",
                                    "**Forfait 5 s&eacute;ances :** Permet un travail encore plus en profondeur, id&eacute;al pour accompagner durablement les d&eacute;s&eacute;quilibres install&eacute;s. Le corps int&egrave;gre progressivement les bienfaits : rel&acirc;chement, am&eacute;lioration de la circulation, r&eacute;&eacute;quilibrage &eacute;nerg&eacute;tique et apaisement du syst&egrave;me nerveux."
                                ]}
                            />
                            <ServiceCard 
                                title="Soin &eacute;nerg&eacute;tique" 
                                price="50&euro;" 
                                duration="30 minutes"
                                forfait={[{name: "Forfait 3 s&eacute;ances", price: "130&euro;"}]}
                                desc={[
                                    "Les soins &eacute;nerg&eacute;tiques visent &agrave; r&eacute;&eacute;quilibrer la circulation de l&rsquo;&eacute;nergie dans le corps, en agissant sur les plans physique, &eacute;motionnel et subtil. &Agrave; travers une approche douce et intuitive, ils permettent de lib&eacute;rer les blocages, d&rsquo;apaiser les tensions et de relancer la vitalit&eacute. Le corps retrouve ainsi une meilleure harmonie, favorisant un profond &eacute;tat de d&eacute;tente et de recentrage.",
                                    "Ces soins accompagnent &eacute;galement les p&eacute;riodes de fatigue, de stress, de surcharge &eacute;motionnelle ou de transition de vie, en soutenant les capacit&eacute;s naturelles d&rsquo;&eacute;quilibre et de r&eacute;g&eacute;n&eacute;ration.",
                                    "**Forfait 3 s&eacute;ances :** Espac&eacute;es d&rsquo;une &agrave; deux semaines, permettent un travail progressif et en profondeur. Cet accompagnement favorise une lib&eacute;ration en douceur des blocages, l&rsquo;&eacute;nergie circule plus librement et un mieux-&ecirc;tre global s&rsquo;installe durablement."
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
                                price="50&euro;" 
                                duration="45 min - 60 min"
                                forfait={[{name: "Forfait 5 s&eacute;ances", price: "210&euro;"}]}
                                desc={[
                                    "Le massage drainant lymphatique est une technique douce et rythm&eacute;e qui vise &agrave; stimuler la circulation de la lymphe et &agrave; favoriser l&rsquo;&eacute;limination des toxines. Par des mouvements lents et pr&eacute;cis, il aide &agrave; d&eacute;congestionner les tissus, &agrave; r&eacute;duire les sensations de jambes lourdes, les gonflements et &agrave; soutenir le syst&egrave;me immunitaire.",
                                    "Ce soin est &eacute;galement particuli&egrave;rement appr&eacute;ci&eacute; pour ses bienfaits esth&eacute;tiques : il contribue &agrave; am&eacute;liorer l&rsquo;aspect de la peau, &agrave; att&eacute;nuer la r&eacute;tention d&rsquo;eau et &agrave; lisser l&rsquo;aspect de la cellulite.",
                                    "**Forfait 5 s&eacute;ances :** Espac&eacute;es de 3 jours maximum, ce rythme rapproch&eacute; est essentiel pour relancer le syst&egrave;me d&rsquo;&eacute;limination en continu. Les tissus se d&eacute;congestionnent, la r&eacute;tention d&rsquo;eau diminue, la silhouette s&rsquo;affine et la peau gagne en tonicit&eacute;."
                                ]}
                            />
                            <ServiceCard 
                                title="Massage Kobido (japonais)" 
                                price="70&euro;" 
                                duration="45 min - 60 min"
                                forfait={[{name: "Forfait 5 s&eacute;ances", price: "280&euro;"}, {name: "Forfait 10 s&eacute;ances", price: "560&euro;"}]}
                                desc={[
                                    "V&eacute;ritable rituel ancestral japonais, le Kobido est un massage du visage alliant technicit&eacute; et douceur, reconnu pour ses effets liftants naturels. &Agrave; travers des gestes pr&eacute;cis, rythm&eacute;s et profonds, il stimule la circulation sanguine et lymphatique, tonifie les muscles du visage et relance la production de collag&egrave;ne.",
                                    "Ce soin permet de lisser les traits, redonner de l&rsquo;&eacute;clat au teint et pr&eacute;venir les signes du vieillissement, tout en procurant une profonde d&eacute;tente. Il lib&egrave;re &eacute;galement les tensions accumul&eacute;es au niveau du visage et du syst&egrave;me nerveux.",
                                    "**Forfait 5 s&eacute;ances :** Id&eacute;alement espac&eacute;es d&rsquo;une semaine, permet d&rsquo;obtenir des r&eacute;sultats visibles et durables sur la qualit&eacute; de la peau. Les traits sont plus liss&eacute;s, le teint plus &eacute;clatant.",
                                    "**Forfait 10 s&eacute;ances :** Une v&eacute;ritable cure r&eacute;g&eacute;n&eacute;rante. Cette r&eacute;gularit&eacute; stimule intens&eacute;ment la production de collag&egrave;ne. Les rides s&rsquo;estompent, la peau gagne en fermet&eacute; et en luminosit&eacute;. Id&eacute;al pour un accompagnement anti-&acirc;ge naturel."
                                ]}
                            />
                             <ServiceCard 
                                title="Massage Ayurv&eacute;dique" 
                                price="90&euro;" 
                                duration="90 minutes"
                                desc={[
                                    "Issu de l&rsquo;Ayurv&eacute;da, m&eacute;decine traditionnelle indienne mill&eacute;naire, le massage ayurv&eacute;dique s&rsquo;inscrit dans une approche globale visant &agrave; r&eacute;tablir l&rsquo;&eacute;quilibre entre le corps, l&rsquo;esprit et l&rsquo;&eacute;nergie vitale (prana).",
                                    "R&eacute;alis&eacute; avec des huiles chaudes et des mouvements enveloppants, rythm&eacute;s et parfois dynamiques, ce soin agit &agrave; la fois sur les tissus, la circulation et le syst&egrave;me nerveux. Il favorise l&rsquo;&eacute;limination des toxines, relance la vitalit&eacute;, am&eacute;liore la souplesse du corps et apaise durablement le mental.",
                                    "Un soin profond&eacute;ment r&eacute;g&eacute;n&eacute;rant, id&eacute;al pour retrouver &eacute;quilibre, &eacute;nergie et s&eacute;r&eacute;nit&eacute;, en favorisant une reconnexion &agrave; soi selon votre constitution unique (doshas)."
                                ]}
                            />
                             <ServiceCard 
                                title="Massage Lomi-Lomi" 
                                price="70&euro;" 
                                duration="60 minutes"
                                desc={[
                                    "Issu de la tradition ancestrale hawa&iuml;enne, le massage Lomi-Lomi est bien plus qu&rsquo;un simple soin du corps : c&rsquo;est un v&eacute;ritable rituel de gu&eacute;rison, profond&eacute;ment ancr&eacute; dans la philosophie du Aloha, qui invite &agrave; l&rsquo;harmonie, &agrave; l&rsquo;amour et &agrave; la fluidit&eacute;.",
                                    "R&eacute;alis&eacute; avec les avant-bras, dans des mouvements longs, fluides et enveloppants rappelant le va-et-vient des vagues, le Lomi-Lomi agit en profondeur sur les tensions musculaires, la circulation et le syst&egrave;me nerveux.",
                                    "Il favorise un l&acirc;cher-prise intense, aide &agrave; lib&eacute;rer les m&eacute;moires &eacute;motionnelles et permet au corps de retrouver son &eacute;quilibre naturel. Une v&eacute;ritable renaissance int&eacute;rieure."
                                ]}
                            />
                             <ServiceCard 
                                title="Massage Pr&eacute;natal" 
                                price="45&euro;" 
                                duration="30 &agrave; 45 minutes"
                                desc={[
                                    "Le massage pr&eacute;natal est un soin sp&eacute;cialement con&ccedil;u pour accompagner la femme tout au long de sa grossesse, en douceur et en s&eacute;curit&eacute;.",
                                    "Durant cette p&eacute;riode de grands changements, ce massage permet de soulager les tensions musculaires (dos, jambes, bassin), tout en am&eacute;liorant la circulation et r&eacute;duisant les sensations de jambes lourdes.",
                                    "Gr&acirc;ce &agrave; des gestes enveloppants et adapt&eacute;s, il favorise la d&eacute;tente profonde, apaise le syst&egrave;me nerveux. Un accompagnement pr&eacute;cieux pour vivre sa grossesse plus sereinement et un v&eacute;ritable moment de connexion &agrave; soi et &agrave; son b&eacute;b&eacute;."
                                ]}
                            />
                        </div>
                    </div>

                    {/* DISLAIMERS / NOTES IMPORTANTES */}
                    <div style={{ marginTop: '100px', backgroundColor: 'var(--sable-warm)', padding: '60px', borderRadius: '40px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                        <h3 className="font-serif" style={{ fontSize: '2rem', marginBottom: '24px', color: 'var(--text-main)', textAlign: 'center' }}>Le bien-&ecirc;tre accessible &agrave; tous</h3>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
                            Certaines mutuelles proposent une <strong>prise en charge partielle ou totale</strong> des consultations en naturopathie, ainsi que de certaines s&eacute;ances de r&eacute;flexologie. Une facture pourra vous &ecirc;tre remise afin de faciliter vos d&eacute;marches aupr&egrave;s de votre organisme compl&eacute;mentaire.
                        </p>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
                            Dans une volont&eacute; de rendre le bien-&ecirc;tre accessible &agrave; tous, des tarifs adapt&eacute;s peuvent &eacute;galement &ecirc;tre propos&eacute;s aux &eacute;tudiants et aux personnes b&eacute;n&eacute;ficiant du RSA. Prendre soin de son hygi&egrave;ne de vie et de sa sant&eacute; devrait &ecirc;tre &agrave; la port&eacute;e de chacun.
                        </p>
                        <p style={{ fontSize: '1.2rem', color: 'var(--gold-vibrant)', fontWeight: 600, textAlign: 'center', marginTop: '30px' }}>
                            Les forfaits peuvent &ecirc;tre pay&eacute;s en plusieurs fois.
                        </p>
                        
                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                            <Link href="/contact" className="btn-premium" style={{ display: 'inline-flex', padding: '20px 50px' }}>R&Eacute;SERVER MA S&Eacute;ANCE</Link>
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
                    {duration && <p style={{ fontSize: '0.9rem', color: 'var(--sauge-dark)', margin: '8px 0 0', fontWeight: 600, letterSpacing: '1px' }}>DUR&Eacute;E : {duration.toUpperCase()}</p>}
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
                                <strong key={i} style={{ color: 'var(--text-main)' }}>{part.slice(2, -2).replace(/'/g, '&apos;').replace(/’/g, '&rsquo;')}</strong> : 
                                part.replace(/'/g, '&apos;').replace(/’/g, '&rsquo;')
                            )}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}
