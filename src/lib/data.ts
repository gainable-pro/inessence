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

export const BLOG_POSTS = [
    {
        slug: "maux-de-tete-naturopathie",
        title: "Soulager les maux de tête naturellement",
        symptom: "Maux de tête & Migraines",
        intro: "Les maux de tête peuvent avoir de multiples origines : stress, fatigue oculaire, troubles digestifs ou tensions musculaires. La naturopathie cherche à identifier la cause profonde pour un soulagement durable.",
        sections: [
            {
                title: "Pourquoi consulter en naturopathie ?",
                content: "Plutôt que de simplement masquer la douleur, nous explorons votre hygiène de vie, votre alimentation et votre gestion émotionnelle pour comprendre l'origine des tensions.",
                img: "media__1772494485058.png"
            },
            {
                title: "Comment la naturopathie agit-elle ?",
                content: "Grâce à la phytothérapie (plantes apaisantes), l'aromathérapie et la réflexologie, nous relançons les capacités d'autorégulation de votre corps pour espacer et diminuer les crises.",
                img: "media__1772494385825.png"
            }
        ],
        conclusion: "Ne laissez plus les maux de tête gâcher votre quotidien. Un accompagnement personnalisé peut faire toute la différence."
    },
    {
        slug: "troubles-digestifs-naturopathie",
        title: "Retrouver un confort digestif durable",
        symptom: "Ballonnements, Digestion lente",
        intro: "Le système digestif est notre 'deuxième cerveau'. Des troubles à ce niveau impactent votre énergie, votre moral et votre immunité générale.",
        sections: [
            {
                title: "L'approche naturopathique",
                content: "Nous travaillons sur le rééquilibrage alimentaire, l'usage de plantes carminatives et la gestion du stress, souvent lié aux désordres intestinaux.",
                img: "digestive_health_nature_1772494512630.png"
            },
            {
                title: "Quand s'inquiéter ?",
                content: "Dès que l'inconfort devient quotidien ou impacte votre vie sociale. La naturopathie offre des outils concrets pour restaurer votre barrière intestinale.",
                img: "nutrition_balance_bowl_1772494534045.png"
            }
        ],
        conclusion: "Une digestion sereine est la clé d'une vitalité rayonnante. Commençons ce travail ensemble."
    },
    {
        slug: "anxiete-stress-naturopathie",
        title: "Gérer l'anxiété et le stress par la nature",
        symptom: "Stress chronique, Anxiété, Épuisement",
        intro: "Le stress chronique épuise nos réserves minérales et fatigue notre système nerveux. Apprendre à le réguler est essentiel pour préserver sa santé.",
        sections: [
            {
                title: "Les outils du naturopathe",
                content: "Gemmothérapie, Fleurs de Bach et techniques de respiration sont au cœur de l'accompagnement pour apaiser le mental et nourrir les surrénales.",
                img: "stress_relief_zen_1772494485058.png"
            },
            {
                title: "Pourquoi faire appel à nous ?",
                content: "Pour sortir du cycle de l'épuisement. Mon rôle est de vous donner les clés pour redevenir acteur de votre sérénité au quotidien.",
                img: "media__1772512342001.png"
            }
        ],
        conclusion: "Le calme intérieur n'est pas un luxe, c'est une nécessité vitale. Retrouvons-le ensemble."
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
