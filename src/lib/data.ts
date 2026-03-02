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
    { slug: "gestion-stress", title: "Gestion du stress" },
    { slug: "troubles-sommeil", title: "Troubles du sommeil" },
    { slug: "troubles-digestifs", title: "Troubles digestifs" },
    { slug: "reequilibrage-alimentaire", title: "Rééquilibrage alimentaire" },
    { slug: "fleurs-de-bach", title: "Fleurs de Bach" },
    { slug: "reflexologie-plantaire", title: "Réflexologie plantaire" }
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
