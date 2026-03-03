export const CITIES = [
    "Miramas", "Istres", "Salon-de-Provence", "Grans", "Cornillon-Confoux",
    "Fos-sur-Mer", "Port-de-Bouc", "Martigues", "Saint-Mitre-les-Remparts",
    "Berre-l’Étang", "Rognac", "Vitrolles", "Velaux", "Ventabren",
    "Lançon-Provence", "Saint-Chamas", "Eyguières", "Sénas", "Mallemort",
    "Alleins", "Aurons", "La Fare-les-Oliviers", "Coudoux", "Pélissanne",
    "Lambesc", "Charleval", "Orgon", "Plan-d’Orgon", "Cavaillon",
    "Les Pennes-Mirabeau", "Marignane", "Châteauneuf-les-Martigues",
    "Gignac-la-Nerthe", "Carry-le-Rouet", "Sausset-les-Pins",
    "Ensuès-la-Redonne", "Rognes", "Saint-Cannat", "Mouriès", "Arles"
];

export const PROBLEMATIQUES = [
    {
        slug: "gestion-stress",
        title: "Gestion du stress",
        description: "Apprenez à libérer les tensions nerveuses et à retrouver un calme intérieur durable grâce à des techniques de relaxation et d'hygiène de vie adaptées."
    },
    {
        slug: "troubles-sommeil",
        title: "Troubles du sommeil",
        description: "Retrouvez des nuits réparatrices en identifiant les causes de vos insomnies et en mettant en place des rituels naturels favorisant l'endormissement."
    },
    {
        slug: "troubles-digestifs",
        title: "Troubles digestifs",
        description: "Optimisez votre confort intestinal et votre vitalité par un réglage alimentaire ciblé et l'usage de plantes apaisantes pour votre système digestif."
    },
    {
        slug: "reequilibrage-alimentaire",
        title: "Rééquilibrage alimentaire",
        description: "Adoptez une alimentation qui vous ressemble, respectueuse de vos besoins physiologiques et de votre plaisir, pour une santé rayonnante."
    },
    {
        slug: "fleurs-de-bach",
        title: "Fleurs de Bach",
        description: "Harmonisez vos émotions et traversez les périodes de changement avec sérénité grâce à la subtilité des essences florales du Dr Bach."
    },
    {
        slug: "reflexologie-plantaire",
        title: "Réflexologie plantaire",
        description: "Relancez l'énergie de votre corps et évacuez les toxines par la stimulation des zones réflexes pour un bien-être global immédiat."
    }
];

export const TECHNIQUES = [
    { slug: "phytotherapie", title: "Phytothérapie" },
    { slug: "aromatherapie", title: "Aromathérapie" },
    { slug: "gemmotherapie", title: "Gemmothérapie" },
    { slug: "reflexologie-plantaire", title: "Réflexologie plantaire" },
    { slug: "massage-ayurvedique", title: "Massage Ayurvédique" },
    { slug: "massage-kobido", title: "Massage Kobido" },
    { slug: "fleurs-de-bach", title: "Fleurs de Bach" }
];

export interface BlogPost {
    slug: string;
    title: string;
    h1: string;
    metaTitle: string;
    metaDesc: string;
    symptom: string;
    intro: string;
    understanding: {
        title: string;
        content: string;
    };
    whyConsult: {
        title: string;
        content: string;
    };
    solutions: string[];
    process: {
        title: string;
        content: string;
    };
    cta: string;
    img: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "migraine-naturopathe-miramas",
        title: "Migraines",
        h1: "Migraines : solution naturelle avec votre naturopathe à Miramas",
        metaTitle: "Migraine Naturopathe Miramas | Soulagement Naturel",
        metaDesc: "Souffrez-vous de migraines ? Découvrez l'approche naturelle de votre naturopathe à Miramas pour identifier les déclencheurs et retrouver votre sérénité.",
        symptom: "Migraines & Maux de tête",
        img: "tech-phytotherapie.png",
        intro: "Les migraines ne sont pas une fatalité. À Miramas, Istres ou Salon-de-Provence, je vous accompagne pour comprendre l'origine de vos crises et agir durablement.",
        understanding: {
            title: "Comprendre les migraines",
            content: "Le mal de tête chronique peut avoir des origines multiples : stress oxydatif, déséquilibres alimentaires (tyramine, gluten), fluctuations hormonales ou manque de sommeil. Identifier vos déclencheurs personnels est la première étape vers la libération."
        },
        whyConsult: {
            title: "Pourquoi consulter un naturopathe à Miramas pour vos migraines ?",
            content: "L'approche naturopathique ne se contente pas de masquer la douleur. Elle explore votre terrain global. En travaillant sur l'inflammation, le statut en magnésium et l'équilibre nerveux, nous cherchons à réduire la fréquence et l'intensité des crises de manière naturelle."
        },
        solutions: [
            "Apport ciblé en Magnésium et Vitamine B2",
            "Gestion du stress par la cohérence cardiaque",
            "Rééquilibrage hépatique et digestif",
            "Utilisation des huiles essentielles (Menthe poivrée, Lavande)"
        ],
        process: {
            title: "Déroulement d’une consultation au cabinet Inessence à Miramas",
            content: "Nous réalisons un bilan d'hygiène de vie complet de 1h30. J'analyse vos habitudes, votre alimentation et vos émotions pour construire votre Plan d'Hygiène Vitale personnalisé."
        },
        cta: "Prendre rendez-vous avec votre naturopathe à Miramas"
    },
    {
        slug: "troubles-digestifs-naturopathe-miramas",
        title: "Troubles Digestifs",
        h1: "Troubles digestifs : retrouver un confort intestinal naturellement à Miramas",
        metaTitle: "Troubles Digestifs Naturopathe Miramas | Confort Intestinal",
        metaDesc: "Ballonnements, SII, reflux ? Votre naturopathe à Miramas vous aide à réguler votre digestion par l'alimentation et la micronutrition. Prenez RDV.",
        symptom: "Digestion & Microbiote",
        img: "tech-nutrition.png",
        intro: "Ballonnements, gaz, reflux ou transit irrégulier ? Votre système digestif est le pilier de votre santé. Retrouvez légèreté et vitalité au cabinet Inessence.",
        understanding: {
            title: "Comprendre les troubles digestifs",
            content: "Qu'il s'agisse du Syndrome de l'Intestin Irritable (SII), de reflux gastriques ou de lenteur digestive, ces maux sont souvent le signe d'un microbiote déséquilibré ou d'une inflammation de la muqueuse intestinale."
        },
        whyConsult: {
            title: "Pourquoi consulter un naturopathe à Miramas pour votre digestion ?",
            content: "Parce que chaque intestin est unique. À travers un réglage alimentaire personnalisé et l'étude des intolérances possibles, nous restaurons vos fonctions digestives sans frustrations inutiles."
        },
        solutions: [
            "Rééquilibrage alimentaire progressif",
            "Soutien enzymatique et probiotiques ciblés",
            "Plantes carminatives et antispasmodiques",
            "Massage du ventre et gestion émotionnelle"
        ],
        process: {
            title: "Votre accompagnement digestif au cabinet Inessence",
            content: "Après un questionnaire approfondi, nous mettons en place des étapes claires pour assainir, réparer et ré-ensemencer votre système digestif."
        },
        cta: "Prendre rendez-vous pour un bilan digestif à Miramas"
    },
    {
        slug: "gestion-stress-naturopathie-miramas",
        title: "Stress & Anxiété",
        h1: "Stress et anxiété : accompagnement naturel à Miramas",
        metaTitle: "Stress et Anxiété Naturopathe Miramas | Sérénité Naturelle",
        metaDesc: "Gérez votre stress et votre anxiété à Miramas avec la naturopathie. Techniques de relaxation et plantes adaptogènes pour retrouver le calme.",
        symptom: "Stress, Sommeil, Émotions",
        img: "tech-stress.png",
        intro: "Charge mentale, fatigue nerveuse, troubles du sommeil... Le stress chronique impacte votre corps tout entier. Apprenez à réguler votre système nerveux naturellement.",
        understanding: {
            title: "Comprendre l'impact du stress",
            content: "Le cortisol et l'adrénaline, sécrétés en excès, épuisent vos réserves minérales et perturbent votre sommeil. L'anxiété n'est pas qu'une question de volonté, c'est aussi un état physiologique à soutenir."
        },
        whyConsult: {
            title: "Pourquoi consulter un naturopathe à Miramas pour l'anxiété ?",
            content: "Pour bénéficier d'outils naturels concrets : plantes adaptogènes, Fleurs de Bach pour l'équilibre émotionnel, et conseils en respiration pour apaiser le mental instantanément."
        },
        solutions: [
            "Plantes adaptogènes (Rhodiola, Ashwagandha)",
            "Techniques de respiration et relaxation",
            "Équilibrage de la sérotonine et mélatonine",
            "Hygiène de vie anti-burnout"
        ],
        process: {
            title: "Retrouver le calme au cabinet Inessence",
            content: "Une consultation dédiée à la libération des tensions professionnelles et personnelles, pour repartir avec une trousse à outils anti-stress efficace."
        },
        cta: "Prendre rendez-vous pour gérer votre stress à Miramas"
    },
    {
        slug: "fatigue-chronique-miramas",
        title: "Fatigue Chronique",
        h1: "Fatigue persistante : retrouver votre énergie naturellement à Miramas",
        metaTitle: "Fatigue Chronique Naturopathe Miramas | Vitalité Retrouvée",
        metaDesc: "Épuisé ? Votre naturopathe à Miramas analyse les causes de votre fatigue (carences, stress, sommeil) pour relancer votre énergie vitale.",
        symptom: "Épuisement, Baisse de tonus",
        img: "tech-gemmotherapie.png",
        intro: "Le réveil est difficile ? Vous manquez d'élan vital ? La fatigue chronique est un signal d'alarme de votre organisme qui mérite une attention particulière.",
        understanding: {
            title: "Comprendre la fatigue persistante",
            content: "Elle peut provenir de carences micronutritionnelles (fer, magnésium, iode), d'un épuisement des glandes surrénales, ou d'un sommeil non récupérateur."
        },
        whyConsult: {
            title: "Pourquoi consulter un naturopathe à Miramas pour votre tonus ?",
            content: "Nous irons chercher la cause réelle de cet épuisement pour relancer vos moteurs internes par une nutrition dense et un soutien glandulaire naturel."
        },
        solutions: [
            "Bilan nutritionnel et correction des carences",
            "Soutien des glandes surrénales par la phytothérapie",
            "Optimisation du cycle du sommeil",
            "Revitalisation par les super-aliments"
        ],
        process: {
            title: "Votre cure de revitalisation à Miramas",
            content: "Un plan d'action en plusieurs étapes pour sortir du brouillard mental et retrouver une énergie stable tout au long de la journée."
        },
        cta: "Prendre rendez-vous pour retrouver votre énergie"
    },
    {
        slug: "troubles-hormonaux-miramas",
        title: "Troubles Hormonaux",
        h1: "Troubles hormonaux : équilibre naturel avec votre naturopathe à Miramas",
        metaTitle: "Troubles Hormonaux Naturopathe Miramas | Équilibre Femmes",
        metaDesc: "SPM, ménopause, thyroïde ? Découvrez l'accompagnement naturopathique à Miramas pour un équilibre hormonal doux et naturel.",
        symptom: "SPM, Ménopause, Thyroïde",
        img: "tech-aromatherapie.png",
        intro: "Les hormones régissent notre bien-être. De la puberté à la ménopause, l'équilibre hormonal est fragile mais peut être soutenu naturellement.",
        understanding: {
            title: "Comprendre les déséquilibres hormonaux",
            content: "Qu'il s'agisse de Syndrome Prémenstruel (SPM), de bouffées de chaleur liées à la ménopause ou de fatigue thyroïdienne, le corps a besoin de nutriments spécifiques pour réguler ces messagers chimiques."
        },
        whyConsult: {
            title: "Pourquoi consulter un naturopathe à Miramas pour vos hormones ?",
            content: "Pour une approche globale qui intègre le foie (responsable du recyclage des hormones), l'intestin et la gestion du stress, souvent négligée dans l'équilibre endocrinien."
        },
        solutions: [
            "Soutien hépatique pour le métabolisme hormonal",
            "Apport en acides gras essentiels (Oméga-3, GLA)",
            "Plantes à action hormonale-like (Gattilier, Alchémille)",
            "Alimentation hypotoxique et anti-inflammatoire"
        ],
        process: {
            title: "Concilier féminité et sérénité au cabinet Inessence",
            content: "Un accompagnement bienveillant pour mieux vivre chaque cycle de votre vie de femme, avec des solutions adaptées à chaque étape."
        },
        cta: "Prendre rendez-vous pour un bilan hormonal"
    },
    {
        slug: "douleurs-articulaires-miramas",
        title: "Douleurs Articulaires",
        h1: "Douleurs articulaires et inflammations : approche naturelle à Miramas",
        metaTitle: "Douleurs Articulaires Naturopathe Miramas | Anti-Inflammatoire",
        metaDesc: "Arthrose, arthrite, inflammations ? Réduisez vos douleurs articulaires à Miramas par une approche naturopathique et anti-inflammatoire.",
        symptom: "Inflammation, Rhumatismes",
        img: "tech-vibratoire.png",
        intro: "L'inflammation chronique est le terreau des douleurs articulaires. À Miramas, nous travaillons sur le terrain acide pour retrouver souplesse et mobilité.",
        understanding: {
            title: "Comprendre les douleurs articulaires",
            content: "L'usure des cartilages ou l'inflammation des tissus environnants sont souvent aggravées par une alimentation trop acidifiante, un manque d'hydratation ou un déséquilibre acido-basique."
        },
        whyConsult: {
            title: "Pourquoi consulter un naturopathe à Miramas pour vos articulations ?",
            content: "Pour mettre en place une véritable stratégie anti-inflammatoire globale, incluant le réglage alimentaire et l'usage de compléments protecteurs des tissus."
        },
        solutions: [
            "Alimentation de type méditerranéen / anti-inflammatoire",
            "Soutien du cartilage (Silice, Curcuma, Boswellia)",
            "Drainage des acides par la phytothérapie",
            "Rééquilibrage acido-basique"
        ],
        process: {
            title: "Retrouver la mobilité au cabinet Inessence",
            content: "Nous ciblons les sources d'inflammation pour soulager vos articulations et préserver votre capital mouvement sur le long terme."
        },
        cta: "Prendre rendez-vous pour soulager vos articulations"
    },
    {
        slug: "immunite-naturopathie-miramas",
        title: "Immunité",
        h1: "Renforcer son immunité naturellement à Miramas",
        metaTitle: "Renforcer Immunité Naturopathe Miramas | Prévention Hiver",
        metaDesc: "Rhumes fréquents ? Fatigue ? Apprenez à booster vos défenses immunitaires naturellement à Miramas avec les conseils de votre naturopathe.",
        symptom: "Défense naturelle, Prévention",
        img: "fleurs_de_bach_botanical_1772494547152.png",
        intro: "Votre système immunitaire est votre bouclier. À l'approche de l'hiver ou après une période de fatigue, il est essentiel de le renforcer pour éviter les infections à répétition.",
        understanding: {
            title: "Comprendre le système immunitaire",
            content: "70% de nos défenses se situent dans nos intestins. Une immunité forte dépend donc d'une bonne santé digestive, d'un statut en vitamine D optimal et d'un bon niveau d'énergie vital."
        },
        whyConsult: {
            title: "Pourquoi consulter un naturopathe à Miramas pour votre immunité ?",
            content: "Pour anticiper et ne plus subir les vagues saisonnières. Nous préparons votre terrain par la micronutrition et les huiles essentielles adaptées à votre profil."
        },
        solutions: [
            "Optimisation de la flore intestinale (probiotiques)",
            "Soutien par l'Echinacée, le Ravintsara ou la Propolis",
            "Correction du statut en Vitamine D et Zinc",
            "Hygiène de vie favorisant la résistance"
        ],
        process: {
            title: "Préparez votre vitalité au cabinet Inessence",
            content: "Un plan de prévention saisonnier pour vous et votre famille, afin de rester en pleine forme toute l'année."
        },
        cta: "Prendre rendez-vous pour booster votre immunité"
    },
    {
        slug: "surpoids-reequilibrage-alimentaire-miramas",
        title: "Perte de Poids",
        h1: "Rééquilibrage alimentaire et perte de poids naturelle à Miramas",
        metaTitle: "Perte de Poids Naturopathe Miramas | Rééquilibrage Alimentaire",
        metaDesc: "Perdez du poids durablement à Miramas. Pas de régime restrictif, mais un rééquilibrage alimentaire et hormonal avec votre naturopathe.",
        symptom: "Perte de poids, Nutrition",
        img: "tech-nutrition.png",
        intro: "Le poids est souvent le reflet de notre équilibre intérieur. Au cabinet Inessence à Miramas, nous visons une silhouette santé sans privation, par un réglage durable.",
        understanding: {
            title: "Comprendre le surpoids",
            content: "Il ne s'agit pas uniquement de calories. L'inflammation, le stress, le sommeil, les hormones (insuline, cortisol) et l'équilibre intestinal jouent un rôle majeur dans le stockage des graisses."
        },
        whyConsult: {
            title: "Pourquoi consulter un naturopathe à Miramas pour votre poids ?",
            content: "Pour sortir du cycle des régimes yoyo. L'approche est holistique : nous agissons sur le comportement alimentaire, la satiété et le métabolisme pour des résultats pérennes."
        },
        solutions: [
            "Réglage alimentaire personnalisé (Index Glycémique)",
            "Gestion des compulsions par la micronutrition",
            "Soutien thyroïdien et hépatique",
            "Relance du métabolisme par l'activité adaptée"
        ],
        process: {
            title: "Votre transformation au cabinet Inessence",
            content: "Un accompagnement pas à pas, motivant et structuré, pour faire de votre alimentation votre meilleure alliée santé."
        },
        cta: "Prendre rendez-vous pour votre rééquilibrage"
    }
];

export function slugify(text: string) {
    return text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
}
