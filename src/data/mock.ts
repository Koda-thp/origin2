/**
 * Données fictives centralisées de la maquette ORIGIN.
 * Tout le contenu éditorial se modifie ici — jamais en dur dans le JSX.
 */

export const site = {
  name: "ORIGIN",
  baseline: "Studio Lagree",
  city: "",
  description:
    "45 minutes de Lagree haute intensité, bas impact, dans une chaleur douce. Un core d'acier, un esprit affûté.",
};

export const images = {
  logo: "/images/logo.png",
  hero: "/images/hero.png",
  founderMain: "/images/founder-1.jpeg",
  founderAlt: "/images/founder-2.jpeg",
  faq: "/images/faq.png",
  cta: "/images/cta.png",
  studioMain: "/images/temporary/hero.jpg",
  studioGallery1: "/images/final/33db3502-bd98-4d49-a982-31b25f2a47c1.jpeg",
  studioGallery2: "/images/final/ba0b9f0a-6624-44c5-97f8-4e5b8496b54e.jpeg",
  studioGallery3: "/images/final/d6de2949-b7e5-4546-a916-7ce5adca5a77.jpeg",
  studioGallery4: "/images/final/dc4965ab-f806-40b2-ab10-b5ee00d72cf4.jpeg",
} as const;

export const nav = {
  links: [
    { label: "La méthode", href: "#methode" },
    { label: "Le studio", href: "#studio" },
    { label: "La fondatrice", href: "#fondatrice" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Réserver", href: "#tarifs" },
};

export const hero = {
  eyebrow: "Origin — Studio Premium Lagree",
  titleTop: "Le core",
  titleScript: "en",
  titleBottom: "feu.",
  subtitle:
    "Lagree haute intensité, bas impact. 45 minutes dans une chaleur douce pour sculpter, renforcer, transformer — sans jamais ménager ton potentiel.",
  ctaPrimary: { label: "Réserver ma séance", href: "#tarifs" },
  ctaSecondary: { label: "Découvrir la méthode", href: "#methode" },
  annotation: "45 min · 32°C · Microformer",
  imageAlt: "Athlète en étirement sur fond rouge profond — séance ORIGIN",
};

export const method = {
  titleTop: "La méthode",
  titleScript: "Lagree",
  introduction:
    "Créée en 1998 par Sebastien Lagree à Los Angeles, la méthode Lagree est un entraînement haute intensité, faible impact qui combine principes de bodybuilding et mouvements contrôlés sur machine spécifique.",
  features: [
    {
      title: "Haute intensité, faible impact",
      description:
        "Un travail musculaire intense qui sollicite jusqu'à 600 muscles simultanément, sans stress pour les articulations grâce à la résistance à ressorts.",
    },
    {
      title: "Mouvements lents et contrôlés",
      description:
        "Chaque répétition dure entre 16 et 40 secondes. Pas d'élan, pas de momentum — seulement une tension musculaire continue et précise.",
    },
    {
      title: "Time under tension",
      description:
        "Chaque série dure au minimum une minute, jusqu'à l'échec musculaire. C'est cette tension prolongée qui sculpte et renforce en profondeur.",
    },
    {
      title: "Microformer",
      description:
        "Machine spécifique avec résistance à ressorts variables. Plus de 500 exercices possibles, tous conçus pour intégrer l'ensemble du corps.",
    },
  ],
  benefits: {
    title: "Les bienfaits",
    items: [
      "Renforcement musculaire profond et durable",
      "Amélioration de l'endurance et de l'équilibre",
      "Core plus fort, posture plus stable",
      "Résultats visibles dès un mois avec 2 à 3 séances par semaine",
      "Adapté à tous les niveaux — débutants comme athlètes",
    ],
  },
  differentiation: {
    title: "Ce qui différencie le Lagree",
    text: "Contrairement aux méthodes traditionnelles, le Lagree élimine les temps de repos et maintient une tension musculaire continue. Les transitions sont rapides, le cardio s'active dès la première minute, et chaque séance pousse tes muscles au-delà de leurs limites habituelles — le tout dans un environnement contrôlé et bienveillant.",
  },
};

export const studio = {
  titleTop: "Le",
  titleScript: "studio",
  introduction:
    "Un écrin premium pensé pour ton entraînement. Chez ORIGIN, chaque détail compte : la chaleur maîtrisée à 32°C, l'intimité d'un espace conçu pour la concentration, et des équipements Microformer dernière génération.",
  ambiance: {
    title: "L'ambiance",
    text: "Lumière tamisée, musique entraînante, énergie collective. Ici, tu te déconnectes du quotidien pour te reconnecter à tes sensations. Le studio est chauffé en permanence pour amplifier chaque mouvement et chaque résultat.",
    highlights: [
      { label: "32°C", description: "Chauffe permanente" },
      { label: "Microformer", description: "Équipements premium" },
      { label: "12 places", description: "Espace intime" },
    ],
  },
  gallery: {
    title: "En images",
    images: [
      { src: "studioGallery1", alt: "Salle principale ORIGIN avec Microformers" },
      { src: "studioGallery2", alt: "Détail d'un Microformer ORIGIN" },
      { src: "studioGallery3", alt: "Ambiance lumineuse du studio ORIGIN" },
      { src: "studioGallery4", alt: "Espace d'entraînement ORIGIN" },
    ],
  },
  location: {
    title: "Nous trouver",
    address: "272 Ancien Chemin de Toulon",
    postalCode: "83110",
    city: "Sanary-sur-Mer",
    country: "France",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.8!2d5.8054!3d43.1187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9d0a0b0c0d0e0%3A0x1234567890abcdef!2s272+Ancien+Chemin+de+Toulon%2C+83110+Sanary-sur-Mer%2C+France!5e0!3m2!1sfr!2sfr!4v1234567890",
    parking: "Places de stationnement disponibles sur place",
  },
  imageMainAlt: "Intérieur du studio ORIGIN — ambiance premium et chaleureuse",
};

export const founder = {
  script: "Rencontrez",
  name: "Lilas",
  title: "Fondatrice",
  titleScript: "d'",
  titleSuffix: "Origin",
  role: "Instructrice certifiée Lagree · Spécialiste core · Toujours de bonne humeur",
  bio: [
    "Passionnée de sport, j'aime bouger, découvrir de nouvelles disciplines et me challenger au quotidien. Pour moi, le sport est bien plus qu'une activité physique : c'est une véritable source de bien-être, d'équilibre et de confiance en soi.",
    "C'est cette passion qui m'a amenée à obtenir mon diplôme de coach sportive dans un premier temps, puis à devenir coach certifiée Lagree.",
    "À travers mon studio, j'ai envie de partager cette énergie et de créer un lieu où chacun se sent bien, se dépasse et progresse à son rythme, toujours dans la bienveillance et la bonne humeur.",
  ],
  cta: { label: "Cours avec Lilas", href: "#tarifs" },
  imageMainAlt: "Lilas, fondatrice d'ORIGIN, dans le studio",
  imageAltAlt: "Portrait de Lilas, fondatrice d'ORIGIN",
};

export const concept = {
  titleTop: "Le programme",
  titleScript: "est-il",
  titleBottom: "fait pour toi ?",
  forYou: {
    title: "Origin est parfait pour toi si :",
    items: [
      "Tu es prête à t'engager pour ta force, pas pour un quick fix",
      "Tu veux des résultats visibles et durables",
      "Tu préfères la structure au hasard des workouts",
    ],
  },
  notForYou: {
    title: "Hmm, peut-être pas pour toi si…",
    items: [
      "Tu cherches des résultats du jour au lendemain",
      "Tu préfères enchaîner les séances aléatoires sans plan",
      "Tu n'es pas prête à montrer ta constance, chaque semaine",
    ],
  },
};

export interface PricingItem {
  name: string;
  price: string;
  period?: string;
}

export interface PricingCategory {
  name: string;
  variant: "dark" | "featured" | "light";
  items: PricingItem[];
}

export const pricing: {
  backgroundWord: string;
  titleScript: string;
  categories: PricingCategory[];
} = {
  backgroundWord: "Lagree obsession starts here",
  titleScript: "Nos tarifs",
  categories: [
    {
      name: "Intro",
      variant: "dark",
      items: [
        { name: "Cours d'essai", price: "20€" },
        { name: "Pack 3 cours", price: "75€", period: "1 seule fois" },
        { name: "Cours à l'unité", price: "35€" },
      ],
    },
    {
      name: "Class Packs",
      variant: "featured",
      items: [
        { name: "Pack 3 cours", price: "90€", period: "valable 1 mois" },
        { name: "Pack 5 cours", price: "150€", period: "valable 2 mois" },
        { name: "Pack 10 cours", price: "260€", period: "valable 3 mois" },
        { name: "Pack 20 cours", price: "480€", period: "valable 6 mois" },
      ],
    },
    {
      name: "Origin Club",
      variant: "light",
      items: [
        { name: "4 cours / mois", price: "85€" },
        { name: "8 cours / mois", price: "160€" },
        { name: "Accès illimité", price: "350€", period: "/ mois" },
      ],
    },
  ],
};

export const ticker = {
  items: ["Commence aujourd'hui", "Réserve ta séance", "45 min à 32°C", "Ton core t'attend"],
};

export const values = {
  titleTop: "Ce qui",
  titleScript: "nous",
  titleBottom: "anime",
  items: [
    {
      title: "Le dépassement de soi",
      description: "Repousser ses limites et découvrir son potentiel",
    },
    {
      title: "L'authenticité",
      description: "Être soi-même, sans comparaison ni compétition",
    },
    {
      title: "L'énergie collective",
      description: "Se motiver et se challenger les unes les autres",
    },
    {
      title: "La bienveillance",
      description: "Encourager sans juger, accompagner sans mettre de pression",
    },
  ],
};

export const faq = {
  titleTop: "Des questions ?",
  titleScript: "Réponses",
  imageAlt: "Gainage — détail d'une séance ORIGIN sur fond rouge",
  items: [
    {
      question: "Qu'est-ce que le Lagree exactement ?",
      answer:
        "Le Lagree est une méthode d'entraînement haute intensité, faible impact, créée en 1998 par Sebastien Lagree. Elle combine des mouvements lents et contrôlés sur machine spécifique (Microformer) avec une tension musculaire continue. Chaque série dure au minimum une minute, poussant les muscles jusqu'à l'échec. Résultat : un renforcement profond, une amélioration de l'endurance et un core d'acier.",
    },
    {
      question: "Le Lagree est-il adapté aux débutantes ?",
      answer:
        "Absolument ! Le Lagree est accessible à tous les niveaux et Lilas accompagne chaque nouvelle venue ! La difficulté vient de toi, pas de la machine.",
    },
    {
      question: "Le studio est-il facilement accessible ?",
      answer:
        "Oui ! Idéalement situé à proximité d'une sortie d'autoroute, le studio est facilement accessible en voiture. Des places de stationnement sont disponibles sur place et nous vous conseillons d'arriver quelques minutes en avance pour vous garer sereinement et profiter pleinement de votre séance.",
    },
    {
      question: "Que dois-je apporter ?",
      answer:
        "Une bouteille d'eau et vos chaussettes antidérapantes. Tout le matériel nécessaire à votre séance est disponible au studio.",
    },
    {
      question: "À quelle fréquence dois-je m'entraîner ?",
      answer:
        "Deux à trois séances par semaine suffisent pour voir des résultats en un mois. La constance bat l'intensité occasionnelle.",
    },
    {
      question: "Est-ce normal de trembler pendant une séance ?",
      answer:
        "Oui, cela peut arriver ! Les tremblements sont souvent liés à la fatigue musculaire et à l'intensité du travail. L'essentiel est de respecter vos limites.",
    },
    {
      question: "Pourquoi essayer le Lagree plutôt qu'un entraînement classique ?",
      answer:
        "Parce que le Lagree propose une expérience unique : un entraînement complet qui associe force, endurance, équilibre et concentration.",
    },
    {
      question: "Quelle tenue porter ?",
      answer:
        "Optez pour une tenue de sport confortable et près du corps. Les chaussettes antidérapantes sont obligatoires pour pratiquer en toute sécurité.",
    },
  ],
};

export const cta = {
  titleTop: "Prête à",
  titleScript: "sentir",
  titleBottom: "la chaleur ?",
  subtitle: "Core plus fort. Esprit plus affûté. Énergie plus chaude. Ton tapis t'attend.",
  button: { label: "Réserver ma première séance", href: "#tarifs" },
  imageAlt: "Étirement profond sur fond rouge — l'intensité ORIGIN",
};

export const footer = {
  wordmark: "Origin",
  tagline: "Studio Lagree — Le core en feu.",
  phone: "07 88 32 20 82",
  phoneLink: "tel:+33788322082",
  instagram: "https://www.instagram.com/origin_lagree/",
  instagramLabel: "@origin_lagree",
  address: "272 Ancien Chemin de Toulon",
  postalCode: "83110",
  city: "Sanary-sur-Mer",
  nav: [
    { label: "La méthode", href: "#methode" },
    { label: "Le studio", href: "#studio" },
    { label: "La fondatrice", href: "#fondatrice" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
    { label: "Gestion des cookies", href: "/cookies" },
  ],
  credits: "Fait avec ❤️ par l'Agence Grey",
};
