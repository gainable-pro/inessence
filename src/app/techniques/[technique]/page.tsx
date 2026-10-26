import Link from "next/link";
import { TECHNIQUES } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SchemaOrg } from "@/components/seo/SchemaOrg";

const MEDOUCINE_URL = "https://www.medoucine.com/consultation/miramas/ines-fernandez/23273?addressId=86159&utm_source=google&utm_medium=organic&utm_campaign=gbp-partoo&utm_content=reserver-en-ligne";

interface TechniqueContent {
    title: string;
    heroSubtitle: string;
    description: string;
    image: string;
    icon: string;
    origin: string;
    process: string[];
    benefits: string[];
    indications: string[];
    quote: string;
    relatedPrestation?: { name: string; price: string; link: string };
}

const TECHNIQUES_DATA: Record<string, TechniqueContent> = {
    "phytotherapie": {
        title: "Phytothérapie",
        heroSubtitle: "La force médicinale des plantes au service de votre vitalité à Miramas",
        icon: "🌿",
        image: "/images/tech-phytotherapie.png",
        quote: "Les plantes ne soignent pas seulement un organe, elles rétablissent le dialogue harmonique de l'être tout entier.",
        description: "La phytothérapie est l'art ancestral d'utiliser les principes actifs naturels des plantes médicinales pour prévenir, soulager et rééquilibrer l'organisme en profondeur. Au cabinet Inessence à Miramas ou en téléconsultation, chaque conseil en phytothérapie s'inscrit dans une approche sur-mesure respectant votre terrain physiologique, vos traitements en cours et votre sensibilité.",
        origin: "Utilisée depuis des millénaires par les traditions herboristes européennes et méditerranéennes, la phytothérapie moderne s'appuie désormais sur des études pharmacologiques rigoureuses pour sélectionner les formes galéniques les plus biodisponibles (tisanes médicinales, extraits hydroalcooliques, suspensions intégrales de plantes fraîches ou gélules titrées).",
        process: [
            "Évaluation précise de votre vitalité et identification de vos déséquilibres (digestifs, hépatiques, nerveux ou hormonaux).",
            "Analyse des interactions médicamenteuses et contre-indications pour une sécurité totale.",
            "Sélection rigoureuse des plantes adaptées (sommités, racines, feuilles, écorces).",
            "Remise d'un plan d'hygiène vitale personnalisé avec posologie, durée de cure et conseils d'utilisation au quotidien."
        ],
        benefits: [
            "Drainage et détoxification douce des émonctoires (foie, reins, intestins, peau).",
            "Apaisement du système nerveux central et régulation de l'anxiété.",
            "Amélioration pérenne du transit intestinal et réduction des inconforts digestifs.",
            "Soutien des défenses immunitaires et revitalisation lors des changements de saison."
        ],
        indications: [
            "Troubles digestifs chroniques (ballonnements, reflux, paresse hépatique)",
            "Stress, nervosité, surmenage et troubles du sommeil",
            "Dérèglements hormonaux (syndrome prémenstruel, péri-ménopause)",
            "Fatigue persistante, manque d'entrain et convalescence"
        ],
        relatedPrestation: { name: "Bilan Vital & Programme Personnalisé", price: "80€", link: "/prestations" }
    },
    "aromatherapie": {
        title: "Aromathérapie",
        heroSubtitle: "L'essence vivante et vibrante des fleurs pour le corps et l'esprit",
        icon: "💧",
        image: "/images/tech-aromatherapie.png",
        quote: "Une seule goutte d'huile essentielle concentre la quintessence de la plante et réveille instantanément la mémoire cellulaire.",
        description: "L'aromathérapie scientifique et olfactive utilise les molécules aromatiques hautement concentrées extraites des plantes par distillation à la vapeur d'eau. Au sein de votre consultation à Miramas, l'aromathérapie agit sur le plan physiologique (antiviral, anti-inflammatoire, antispasmodique) mais également sur la sphère psycho-émotionnelle grâce au pouvoir olfactif sur le système limbique du cerveau.",
        origin: "Piliers de la médecine naturelle méditerranéenne, les huiles essentielles pures, chémotypées (HECT) et biologiques offrent une puissance thérapeutique remarquable lorsqu'elles sont maniées avec discernement et expertise.",
        process: [
            "Sélection des huiles essentielles bio et chémotypées selon votre profil individuel.",
            "Apprentissage des voies d'administration appropriées : olfaction thérapeutique, diffusion atmosphérique ou application cutanée diluée.",
            "Respect strict des précautions d'emploi (grossesse, asthme, épilepsie, enfants).",
            "Intégration d'un rituel olfactif personnalisé pour calmer les crises d'angoisse ou favoriser l'endormissement."
        ],
        benefits: [
            "Régulation émotionnelle immédiate et libération des blocages intérieurs.",
            "Action antibactérienne, antivirale et assainissante naturelle pour l'hiver.",
            "Soulagement rapide des tensions musculaires et articulaires en friction.",
            "Amélioration de la clarté mentale et de la concentration."
        ],
        indications: [
            "Anxiété aiguë, attaques de panique et charge mentale excessive",
            "Infections hivernales récurrentes (sphère ORL)",
            "Troubles circulatoires et sensations de jambes lourdes",
            "Tensions musculaires, courbatures et contractures"
        ],
        relatedPrestation: { name: "Accompagnement en Naturopathie", price: "Dès 60€", link: "/prestations" }
    },
    "gemmotherapie": {
        title: "Gemmothérapie",
        heroSubtitle: "L'énergie embryonnaire des bourgeons pour une régénération cellulaire intense",
        icon: "🌱",
        image: "/images/tech-gemmotherapie.png",
        quote: "Dans le bourgeon réside tout le potentiel de l'arbre futur : son énergie vitale, sa sève et son renouveau.",
        description: "Considérée comme la médecine des bourgeons, la gemmothérapie utilise les tissus embryonnaires végétaux en pleine croissance (bourgeons, jeunes pousses, radicelles). Macérés dans un mélange d'eau, d'alcool et de glycérine végétale, ils renferment la totalité des propriétés de la future plante adulte avec une concentration exceptionnelle en vitamines, oligo-éléments et sève active.",
        origin: "Fondée par le médecin belge Pol Henry puis développée par Max Tétau, cette approche douce et profonde convient parfaitement pour relancer l'énergie vitale sans fatiguer les organes éliminateurs.",
        process: [
            "Bilan de vitalité pour cibler les tissus et organes nécessitant un soutien régénérateur.",
            "Sélection de macérats glycérinés concentrés unitaires ou en complexes synergiques.",
            "Mise en place de cures de fond de 21 jours rythmées et adaptées aux cycles naturels.",
            "Suivi de l'évolution des marqueurs de vitalité et d'énergie."
        ],
        benefits: [
            "Régénération cellulaire profonde et action anti-vieillissement tissulaire.",
            "Détoxification douce sans effets d'épuisement organique.",
            "Renforcement durable du système immunitaire des adultes et seniors.",
            "Régulation du métabolisme lipidique et de l'équilibre acido-basique."
        ],
        indications: [
            "Fatigue chronique, baisse de tonus et récupération post-virale",
            "Douleurs ostéo-articulaires (arthrose, raideurs matinales)",
            "Problèmes de perméabilité intestinale et inflammations de bas grade",
            "Dérèglements de la circulation veineuse et rétention d'eau"
        ],
        relatedPrestation: { name: "Bilan Vital Inessence", price: "80€", link: "/prestations" }
    },
    "reflexologie-plantaire": {
        title: "Réflexologie plantaire",
        heroSubtitle: "Le miroir bienveillant de votre santé sous vos pieds à Miramas",
        icon: "🦶",
        image: "/images/reflexology_wellness_spa_1772494561223.png",
        quote: "Les pieds sont nos racines terrestres ; en prenant soin d'eux, c'est l'ensemble de notre être qui retrouve équilibre et légèreté.",
        description: "La réflexologie plantaire est une technique millénaire manuelle qui repose sur la stimulation de zones réflexes précises situées sur l'ensemble de la voûte et du dessus des pieds. Chaque zone correspond à un organe, une glande ou une fonction de notre anatomie. En exerçant des pressions rythmées et adaptées, le réflexologue relance la circulation sanguine et lymphatique, dissipe les stases énergétiques et incite le corps à retrouver son autorégulation.",
        origin: "Héritière des médecines traditionnelles chinoise et égyptienne, modernisée par Eunice Ingham en Occident, la réflexologie est plébiscitée pour sa double efficacité : détente nerveuse immédiate et action profonde sur les organes internes.",
        process: [
            "Temps d'échange et d'écoute préalable pour comprendre vos antécédents, vos douleurs et vos attentes.",
            "Installation confortable dans une ambiance tamisée propice au lâcher-prise total.",
            "Mouvements d'échauffement et de relaxation de la cheville et du pied.",
            "Travail ciblé sur les zones réflexes réflexes (digestives, vertébrales, nerveuses, lymphatiques) d'une durée de 50 minutes.",
            "Bilan post-séance et conseils d'hydratation pour optimiser l'élimination des toxines."
        ],
        benefits: [
            "Apaisement immédiat du système nerveux parasympathique et diminution du cortisol.",
            "Relance de la circulation sanguine et élimination active des toxines accumulées.",
            "Soulagement des maux de dos, migraines et tensions cervicales.",
            "Soutien de la digestion, du transit intestinal et du sommeil réparateur."
        ],
        indications: [
            "Stress chronique, tensions professionnelles et anxiété",
            "Insomnies, réveils nocturnes et fatigue au réveil",
            "Jambes lourdes, mauvaise circulation de retour",
            "Migraines, sinusites et douleurs musculaires diffuses"
        ],
        relatedPrestation: { name: "Séance Réflexologie (50 min)", price: "45€", link: "/prestations" }
    },
    "massage-ayurvedique": {
        title: "Massage Ayurvédique",
        heroSubtitle: "Rituel ancestral indien pour harmoniser le corps, l'esprit et l'énergie vitale",
        icon: "👐",
        image: "/images/tech-massage-ayurvedique.png",
        quote: "Dans la tradition ayurvédique, masser le corps à l'huile tiède nourrit les sept tissus vitaux et ancre l'âme dans la sérénité.",
        description: "Issu de l'Ayurvéda, médecine traditionnelle sacrée de l'Inde ancienne vieille de plus de 5 000 ans, le massage ayurvédique (Abhyanga) est bien plus qu'un simple soin de détente. C'est une véritable thérapie corporelle et énergétique visant à rétablir l'équilibre entre les trois doshas (Vata, Pitta, Kapha) et à fluidifier la circulation du Prana (le souffle vital) à travers les canaux subtils (nadis).",
        origin: "Pratiqué sur table avec des huiles végétales tièdes sélectionnées selon votre constitution, ce rituel de 90 minutes alterne pressions profondes, mouvements glissés enveloppants et stimulations douces des points marmas.",
        process: [
            "Court échange préliminaire pour déterminer vos déséquilibres du moment et choisir l'huile tiède adéquate.",
            "Massage complet de la tête aux pieds, alliant rythme fluide et manœuvres décontracturantes.",
            "Travail minutieux sur les articulations pour débloquer les nœuds énergétiques et libérer les toxines (ama).",
            "Temps d'intégration au calme pour ancrer la sensation de plénitude et de paix intérieure."
        ],
        benefits: [
            "Élimination des toxines accumulées dans les fascias et les tissus profonds.",
            "Amélioration remarquable de la souplesse musculaire et de la mobilité articulaire.",
            "Détente profonde du système nerveux et diminution radicale de la fatigue mentale.",
            "Nourriture intense de la peau et éclat revitalisé."
        ],
        indications: [
            "Épuisement physique et mental, burn-out ou surcharge émotionnelle",
            "Raideurs musculaires, douleurs dorsales et manque de souplesse",
            "Sommeil agité ou haché, dispersion mentale (excès de Vata)",
            "Besoin de reconnexion corporelle bienveillante et d'ancrage"
        ],
        relatedPrestation: { name: "Massage Ayurvédique (90 min)", price: "90€", link: "/prestations" }
    },
    "massage-kobido": {
        title: "Massage Kobido",
        heroSubtitle: "Rituel de jeunesse ancestral japonais pour le visage et l'éclat du teint",
        icon: "✨",
        image: "/images/tech-massage-ayurvedique.png",
        quote: "Le Kobido est l'art d'éveiller la lumière naturelle du visage en révélant sa beauté authentique sans artifice.",
        description: "Véritable rituel de beauté ancestral autrefois réservé aux impératrices japonaises et aux geishas, le massage Kobido (« ancienne voie de la beauté ») est un soin visage d'exception. Alliant technicité, rigueur et extrême délicatesse, il associe pétrissages musculaires, acupressions stimulantes, lissages drainants et percussions douces sur le visage, le cou et le décolleté.",
        origin: "Né au Japon au XVe siècle, le Kobido est reconnu aujourd'hui dans le monde entier comme l'un des liftings naturels les plus performants, relançant naturellement la synthèse de collagène et d'élastine.",
        process: [
            "Démaquillage et préparation de la peau avec une huile végétale biologique douce.",
            "Manœuvres de relaxation de la nuque, des trapèzes et du cuir chevelu pour libérer les tensions qui crispent les traits.",
            "Enchaînement de gestes experts et rythmés : pincements légers, vibrations et drainages stimulants.",
            "Travail des méridiens du visage pour réveiller l'éclat et lisser le contour des yeux et de la bouche."
        ],
        benefits: [
            "Effet liftant immédiat : traits défroissés, ovale du visage regalbé et peau repulpée.",
            "Oxygénation des cellules et relance de la microcirculation cutanée pour un teint lumineux.",
            "Atténuation visible des ridules d'expression et décongestion des cernes et poches.",
            "Apaisement profond du système nerveux par le relâchement des crispations faciales."
        ],
        indications: [
            "Teint terne, peau fatiguée ou en manque de fermeté",
            "Signes de l'âge, rides d'expression et relâchement cutané",
            "Tensions de la mâchoire (bruxisme, serrement de dents) et céphalées",
            "Envie d'un soin visage naturel, holistique et non invasif"
        ],
        relatedPrestation: { name: "Soin Kobido (45-60 min)", price: "70€ (Cure 10 séances à 560€)", link: "/prestations" }
    },
    "fleurs-de-bach": {
        title: "Fleurs de Bach",
        heroSubtitle: "Harmonie émotionnelle et sérénité intérieure par les essences florales",
        icon: "🌸",
        image: "/images/tech-fleurs-de-bach.png",
        quote: "La maladie n'est ni cruauté, ni punition, mais simplement un rappel que notre âme et notre personnalité se sont éloignées.",
        description: "Mises au point dans les années 1930 par le Dr Edward Bach, médecin et bactériologiste britannique, les 38 Fleurs de Bach sont des élixirs floraux naturels conçus pour restaurer l'harmonie émotionnelle. Elles ne ciblent pas directement les symptômes physiques, mais soutiennent l'état d'esprit et l'humeur qui influent directement sur notre santé globale.",
        origin: "Préparées selon la méthode originale de solarisation ou d'ébullition des fleurs sauvages, les essences florales du Dr Bach agissent de façon subtile mais profonde, sans aucun risque d'accoutumance ni d'effet secondaire.",
        process: [
            "Entretien d'écoute bienveillant au cabinet ou en visio pour explorer vos émotions dominantes (peurs, doutes, colères, découragement).",
            "Identification précise des fleurs correspondant à votre état émotionnel du moment.",
            "Création de votre flacon personnalisé contenant votre synergie florale sur-mesure.",
            "Conseils de prise quotidienne (4 gouttes sous la langue 4 fois par jour pendant 3 semaines)."
        ],
        benefits: [
            "Retrouver le calme et la sérénité lors des périodes de tempête émotionnelle.",
            "Dépasser les peurs, les blocages intérieurs et les angoisses diffuses.",
            "Accompagner sereinement les étapes de transition de vie (séparation, deuil, reconversion, maternité).",
            "Renforcer la confiance en soi, l'estime personnelle et la clarté de décision."
        ],
        indications: [
            "Stress émotionnel, hypersensibilité, débordement affectif",
            "Peurs inexpliquées, trac, manque de confiance en ses capacités",
            "Difficultés d'adaptation aux changements de vie",
            "Ruminations mentales incessantes et ruminations nocturnes"
        ],
        relatedPrestation: { name: "Bilan Émotionnel & Fleurs de Bach", price: "Inclus dans le Bilan Vital", link: "/prestations" }
    }
};

export async function generateStaticParams() {
    return TECHNIQUES.map((tech) => ({
        technique: tech.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ technique: string }> }): Promise<Metadata> {
    const { technique: slug } = await params;
    const data = TECHNIQUES_DATA[slug];
    if (!data) return { title: 'Technique non trouvée' };

    const title = `${data.title} à Miramas | Approche Naturelle & Bien-Être | Inessence`;
    const description = `Découvrez la technique de ${data.title.toLowerCase()} au cabinet Inessence à Miramas et alentours (Istres, Salon-de-Provence). ${data.heroSubtitle}. Prenez rendez-vous en ligne.`;
    const canonicalUrl = `https://www.inessencenaturopathe.com/techniques/${slug}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            type: "article",
        },
        alternates: {
            canonical: canonicalUrl,
        },
    };
}

export default async function TechniquePage({ params }: { params: Promise<{ technique: string }> }) {
    const { technique: slug } = await params;
    const content = TECHNIQUES_DATA[slug];

    if (!content) {
        notFound();
    }

    const otherTechniques = TECHNIQUES.filter(t => t.slug !== slug);

    return (
        <article className="animate-fade-in">
            <SchemaOrg 
                type="LocalBusiness" 
                data={{ 
                    city: "Miramas", 
                    description: `Praticienne en ${content.title} et naturopathie à Miramas. Soins personnalisés au cabinet et en visioconférence.` 
                }} 
            />

            {/* HERO SECTION */}
            <section style={{
                padding: '160px 0 100px',
                backgroundColor: 'var(--sable-warm)',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <nav style={{ fontSize: '0.85rem', marginBottom: '24px', letterSpacing: '2px', opacity: 0.7, textTransform: 'uppercase' }}>
                        <Link href="/" className="hover-text-sauge">ACCUEIL</Link> / <Link href="/techniques" className="hover-text-sauge">TECHNIQUES</Link> / <span style={{ color: 'var(--gold-warm)', fontWeight: 600 }}>{content.title}</span>
                    </nav>
                    <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}>{content.icon}</span>
                    <h1 className="font-serif typewriter" style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 6vw, 4.2rem)' }}>
                        {content.title} à <span className="text-sauge italic">Miramas</span>
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.7, maxWidth: '780px', margin: '0 auto 36px' }}>
                        {content.heroSubtitle}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        <a 
                            href={MEDOUCINE_URL} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-premium"
                            style={{ padding: '16px 36px', borderRadius: '100px', fontSize: '1rem' }}
                        >
                            📅 Réserver cette séance en ligne →
                        </a>
                        <Link 
                            href="/prestations" 
                            className="btn-outline"
                            style={{ padding: '16px 36px', borderRadius: '100px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center' }}
                        >
                            Voir les tarifs & forfaits
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 1: PRESENTATION & ORIGINE */}
            <section style={{ padding: '100px 0', backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
                        <div>
                            <span style={{ fontSize: '0.85rem', color: 'var(--gold-warm)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                                Approche & Philosophie
                            </span>
                            <h2 className="font-serif" style={{ fontSize: '2.6rem', color: 'var(--sauge-dark)', marginBottom: '24px' }}>
                                Qu'est-ce que la {content.title.toLowerCase()} ?
                            </h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '20px' }}>
                                {content.description}
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                                {content.origin}
                            </p>
                        </div>
                        <div style={{ backgroundColor: 'var(--sable-warm)', padding: '40px', borderRadius: '32px', border: '1px solid rgba(212, 175, 55, 0.25)' }}>
                            <p className="font-serif italic" style={{ fontSize: '1.35rem', color: 'var(--sauge-dark)', lineHeight: 1.7, marginBottom: '20px' }}>
                                &ldquo;{content.quote}&rdquo;
                            </p>
                            <span style={{ fontSize: '0.9rem', color: 'var(--gold-warm)', fontWeight: 600 }}>— Inès Fernandez, Cabinet Inessence Miramas</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: DEROULEMENT D'UNE SEANCE */}
            <section style={{ padding: '100px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--gold-warm)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
                            Prise en charge
                        </span>
                        <h2 className="font-serif" style={{ fontSize: '2.8rem', marginTop: '10px' }}>
                            Déroulement de votre séance au cabinet
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        {content.process.map((step, idx) => (
                            <div key={idx} style={{
                                backgroundColor: 'var(--white)',
                                padding: '36px',
                                borderRadius: '24px',
                                border: '1px solid rgba(0,0,0,0.03)',
                                boxShadow: 'var(--shadow-soft)'
                            }}>
                                <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--gold-warm)', display: 'block', marginBottom: '14px' }}>
                                    0{idx + 1}
                                </span>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.02rem', margin: 0 }}>
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: BIENFAITS ET INDICATIONS */}
            <section style={{ padding: '100px 0', backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px' }}>
                        
                        {/* BIENFAITS */}
                        <div style={{ padding: '40px', backgroundColor: 'var(--sable-warm)', borderRadius: '32px' }}>
                            <h3 className="font-serif" style={{ fontSize: '2rem', color: 'var(--sauge-dark)', marginBottom: '24px' }}>
                                ✨ Les Bienfaits Reconnus
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {content.benefits.map((b, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '1.02rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                                        <span style={{ color: 'var(--gold-warm)', fontWeight: 700 }}>✓</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* INDICATIONS */}
                        <div style={{ padding: '40px', backgroundColor: 'var(--bg-secondary)', borderRadius: '32px' }}>
                            <h3 className="font-serif" style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '24px' }}>
                                🎯 Pour Quels Besoins ?
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {content.indications.map((ind, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                        <span style={{ color: 'var(--sauge-dark)', fontWeight: 700 }}>✦</span>
                                        <span>{ind}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* LIEN PRESTATION DIRECTE */}
                    {content.relatedPrestation && (
                        <div style={{
                            marginTop: '60px',
                            padding: '30px 40px',
                            backgroundColor: 'var(--white)',
                            borderRadius: '24px',
                            border: '2px solid var(--gold-warm)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '20px'
                        }}>
                            <div>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Prestation associée au cabinet</span>
                                <h4 className="font-serif" style={{ fontSize: '1.6rem', color: 'var(--text-main)', margin: '4px 0' }}>{content.relatedPrestation.name}</h4>
                                <span style={{ fontSize: '1.2rem', color: 'var(--gold-warm)', fontWeight: 700 }}>Tarif : {content.relatedPrestation.price}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                                <a 
                                    href={MEDOUCINE_URL} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn-premium"
                                    style={{ padding: '12px 28px', borderRadius: '100px', fontSize: '0.95rem' }}
                                >
                                    Réserver sur Médoucine →
                                </a>
                                <Link 
                                    href={content.relatedPrestation.link}
                                    className="btn-outline"
                                    style={{ padding: '12px 28px', borderRadius: '100px', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center' }}
                                >
                                    Voir tous les tarifs
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* SECTION 4: AUTRES TECHNIQUES */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--sable-warm)' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <h3 className="font-serif" style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '40px' }}>
                        Découvrir d'autres approches Inessence
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
                        {otherTechniques.map((item) => (
                            <Link 
                                key={item.slug} 
                                href={`/techniques/${item.slug}`} 
                                className="hover-text-sauge" 
                                style={{
                                    padding: '12px 24px',
                                    backgroundColor: 'var(--white)',
                                    borderRadius: '50px',
                                    fontSize: '0.95rem',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    fontWeight: 500,
                                    color: 'var(--text-main)'
                                }}
                            >
                                {item.title} →
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION FINAL */}
            <section style={{ padding: '100px 0', textAlign: 'center', backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="font-serif" style={{ fontSize: '3rem', marginBottom: '24px' }}>
                        Retrouvez votre équilibre à <span className="text-gold italic">Miramas</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.8 }}>
                        Prenez rendez-vous dès aujourd'hui au cabinet ou en visioconférence pour un accompagnement naturel et bienveillant.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <a 
                            href={MEDOUCINE_URL} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-premium"
                            style={{ padding: '18px 44px', fontSize: '1.1rem', borderRadius: '100px' }}
                        >
                            PRENDRE RENDEZ-VOUS EN LIGNE →
                        </a>
                        <Link 
                            href="/contact" 
                            className="btn-outline"
                            style={{ padding: '18px 44px', fontSize: '1.1rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center' }}
                        >
                            CONTACTER LE CABINET
                        </Link>
                    </div>
                </div>
            </section>
        </article>
    );
}
