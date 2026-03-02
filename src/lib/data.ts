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
