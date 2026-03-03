import Link from "next/link";
import { PROBLEMATIQUES, slugify } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return PROBLEMATIQUES.map((prob) => ({
        problem: `${prob.slug}-miramas`,
    }));
}

export default async function ProblemPage({ params }: { params: Promise<{ problem: string }> }) {
    const { problem: fullSlug } = await params;
    const slug = fullSlug.replace('-miramas', '');
    const prob = PROBLEMATIQUES.find(p => p.slug === slug);

    if (!prob) {
        notFound();
    }

    // Map images and rich content based on slug
    const contentMap: Record<string, { image: string, quote: string, detail1: string, detail2: string }> = {
        "gestion-stress": {
            image: "stress_relief_zen_1772494485058.png",
            quote: "Le calme n'est pas l'absence de tempête, c'est la paix à l'intérieur de celle-ci.",
            detail1: "Le stress chronique est le mal silencieux qui épuise vos réserves minérales et nerveuses. Mon approche vise à identifier vos sources de tension pour restaurer votre système parasympathique.",
            detail2: "À travers la phytothérapie nervine, les exercices de cohérence cardiaque et le rééquilibrage du magnésium, nous redonnons à votre système nerveux sa souplesse originelle."
        },
        "troubles-sommeil": {
            image: "sleep_serenity_bedroom_1772494499526.png",
            quote: "Le sommeil est la chaîne d'or qui lie la santé et nos corps.",
            detail1: "Vos insomnies ou réveils nocturnes sont des signaux d'un cycle circadien perturbé ou d'une surcharge hépatique. Nous plongeons dans l'intimité de vos nuits pour en restaurer la profondeur.",
            detail2: "Nous agissons sur la mélatonine naturelle, l'obscurité numérique et les plantes sédatives douces pour que chaque nuit soit une véritable régénération."
        },
        "troubles-digestifs": {
            image: "digestive_health_nature_1772494512630.png",
            quote: "Que ton aliment soit ta seule médecine.",
            detail1: "Le ventre est votre deuxième cerveau. Ballonnements et inconforts digestifs sont souvent les reflets d'une dysbiose ou d'une inflammation que nous allons apaiser avec douceur.",
            detail2: "Ensemble, nous restaurons votre barrière intestinale et optimisons votre feu digestif pour une assimilation parfaite de la vie et des nutriments."
        },
        "reequilibrage-alimentaire": {
            image: "nutrition_balance_bowl_1772494534045.png",
            quote: "Manger est un besoin, savoir manger est un art.",
            detail1: "Oubliez les régimes restrictifs. Le rééquilibrage alimentaire est une redécouverte du plaisir de nourrir son corps selon son tempérament hippocratique unique.",
            detail2: "Nous élaborons une stratégie nutritionnelle vibrante, riche en micro-nutriments, qui soutient votre énergie sans jamais sacrifier la gourmandise."
        },
        "fleurs-de-bach": {
            image: "fleurs_de_bach_botanical_1772494547152.png",
            quote: "Les fleurs nous soignent par leur simple présence.",
            detail1: "Les essences florales du Dr Bach agissent comme des catalyseurs émotionnels. Elles ne suppriment pas l'émotion, elles la transforment en sa vertu positive correspondante.",
            detail2: "Lors d'un entretien dédié, nous créons votre élixir personnalisé pour traverser les deuils, les peurs ou les doutes avec une nouvelle clarté intérieure."
        },
        "reflexologie-plantaire": {
            image: "reflexology_wellness_spa_1772494561223.png",
            quote: "Le pied est le miroir de l'âme et du corps.",
            detail1: "Chaque pression sur vos pieds résonne dans votre corps tout entier. La réflexologie plantaire permet de libérer les blocages énergétiques et de relancer vos capacités d'élimination.",
            detail2: "C'est un soin profondément relaxant qui travaille sur vos fascias et vos méridiens pour une sensation de légèreté immédiate et durable."
        }
    };

    const currentContent = contentMap[slug as keyof typeof contentMap] || contentMap["gestion-stress"];

    return (
        <article className="animate-fade-in">
            {/* Elegant Header */}
            <section style={{ padding: '160px 0 80px', backgroundColor: 'var(--sable-warm)' }}>
                <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                    <nav style={{ fontSize: '0.85rem', marginBottom: '32px', letterSpacing: '2px', opacity: 0.5, textTransform: 'uppercase' }}>
                        <Link href="/" className="hover-text-sauge">ACCUEIL</Link> / <Link href="/problematiques" className="hover-text-sauge">MOTIFS</Link> / <span>{prob.title}</span>
                    </nav>
                    <h1 className="font-serif typewriter" style={{ marginBottom: '32px' }}>
                        {prob.title} à <span className="text-sauge italic">Miramas</span>
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', fontWeight: 300, maxWidth: '700px', margin: '0 auto' }}>
                        Retrouvez votre harmonie naturelle grâce à un accompagnement personnalisé et bienveillant.
                    </p>
                </div>
            </section>

            {/* Zig-Zag Section 1 */}
            <section style={{ padding: '120px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <h2 className="font-serif typewriter" style={{ marginBottom: '40px' }}>Comprendre et <span className="text-gold">Transformer</span></h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '28px' }}>
                                {currentContent.detail1}
                            </p>
                            <p style={{ color: 'var(--text-muted)' }}>
                                {currentContent.detail2}
                            </p>
                        </div>
                        <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)', position: 'relative' }}>
                            <img src={`/images/${currentContent.image}`} alt={prob.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                            <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', backgroundColor: 'rgba(255,255,255,0.9)', padding: '20px', borderRadius: '16px', backdropFilter: 'blur(5px)' }}>
                                <p className="font-serif italic" style={{ fontSize: '1rem', color: 'var(--sauge-dark)', margin: 0 }}>
                                    "{currentContent.quote}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Path to Balance Section */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
                        <div style={{ position: 'relative', order: 2 }}>
                            <h2 className="font-serif typewriter" style={{ marginBottom: '40px' }}>Le chemin vers la <span className="text-gold">Sérénité</span></h2>
                            <p style={{ marginBottom: '32px', color: 'var(--text-muted)' }}>
                                Chaque individu est une entité unique. Mon approche ne se limite pas à traiter un symptôme, mais à cultiver votre terrain pour que la santé fleurisse d'elle-même.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                {[
                                    { t: "Écoute Active", d: "Un espace sans jugement pour déposer vos mots." },
                                    { t: "Fleurs de Bach", d: "Pour harmoniser vos émotions profondes." },
                                    { t: "Phytothérapie", d: "La puissance des plantes à votre service." },
                                    { t: "Nutrition", d: "Une assiette vibrante et régénérante." }
                                ].map((item, idx) => (
                                    <div key={idx} style={{ padding: '24px', backgroundColor: 'var(--white)', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.03)' }}>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--sauge-dark)' }}>{item.t}</h4>
                                        <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ order: 1 }}>
                            <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
                                <img src="/images/fleurs_de_bach_botanical_1772494547152.png" alt="Sérénité" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '140px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="font-serif typewriter" style={{ marginBottom: '40px' }}>Reprenez le pouvoir sur votre <span className="italic text-gold">BIEN-ÊTRE</span></h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 56px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                        Je vous accompagne à Miramas ou en ligne pour construire ensemble votre nouvelle hygiène de vie.
                    </p>
                    <Link href="/contact" className="btn-premium" style={{ padding: '24px 64px', fontSize: '1.2rem' }}>DÉBUTER MA DEMANDE</Link>
                </div>
            </section>
        </article>
    );
}
