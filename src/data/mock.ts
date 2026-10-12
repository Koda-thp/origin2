/**
 * Données fictives centralisées de la maquette ORIGIN.
 * Tout le contenu éditorial se modifie ici — jamais en dur dans le JSX.
 */

export const site = {
  name: "ORIGIN",
  baseline: "Studio Lagree",
  city: "Paris",
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
} as const;

export const nav = {
  links: [
    { label: "La fondatrice", href: "#fondatrice" },
    { label: "Le concept", href: "#concept" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Réserver", href: "#tarifs" },
};

export const hero = {
  eyebrow: "Origin — Studio Lagree · Paris",
  titleTop: "Le core",
  titleScript: "en",
  titleBottom: "feu.",
  subtitle:
    "Lagree haute intensité, bas impact. 45 minutes dans une chaleur douce pour sculpter, renforcer, transformer — sans jamais ménager ton potentiel.",
  ctaPrimary: { label: "Réserver mon tapis", href: "#tarifs" },
  ctaSecondary: { label: "Découvrir le concept", href: "#concept" },
  annotation: "45 min · 32°C · Megaformer",
  imageAlt: "Athlète en étirement sur fond rouge profond — séance ORIGIN",
};

export const founder = {
  script: "Rencontrez",
  name: "Lilas",
  title: "Fondatrice",
  titleScript: "d'",
  titleSuffix: "Origin",
  role: "Instructrice certifiée Lagree · Spécialiste core · Toujours de bonne humeur",
  bio: [
    "Après des années dans le fitness traditionnel, Lilas a vu trop de personnes intimidées ou laissées de côté. Elle a créé ORIGIN comme un lieu où la force se construit dans la douceur — et où chaque corps est le bienvenu.",
    "Sa méthode mêle la précision du Megaformer à une programmation haute en énergie : sculpter les muscles profonds, bâtir une force durable, et repartir avec le sourire.",
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

export interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  variant: "dark" | "featured" | "light";
}

export const pricing: {
  backgroundWord: string;
  titleScript: string;
  plans: Plan[];
} = {
  backgroundWord: "Choisis ton niveau",
  titleScript: "Ton niveau, ton rythme",
  plans: [
    {
      name: "Découverte",
      price: "39€",
      period: "la séance",
      features: [
        "1 séance Lagree 45 min",
        "Accès vestiaires & douches",
        "Tapis et serviette fournis",
      ],
      cta: "J'essaie",
      variant: "dark",
    },
    {
      name: "Signature",
      price: "219€",
      period: "8 séances / mois",
      features: [
        "8 séances Lagree 45 min",
        "Réservation prioritaire 7 jours",
        "Tapis et serviette fournis",
        "Suivi de progression mensuel",
      ],
      cta: "Je m'engage",
      variant: "featured",
    },
    {
      name: "Illimité",
      price: "289€",
      period: "par mois",
      features: [
        "Séances illimitées",
        "Réservation prioritaire 14 jours",
        "1 coaching privé offert / mois",
        "Accès aux events du studio",
        "Gel des vacances inclus",
      ],
      cta: "Je fonce",
      variant: "light",
    },
  ],
};

export const ticker = {
  items: ["Commence aujourd'hui", "Réserve ton tapis", "45 min à 32°C", "Ton core t'attend"],
};

export const faq = {
  titleTop: "Des questions ?",
  titleScript: "Réponses",
  imageAlt: "Gainage — détail d'une séance ORIGIN sur fond rouge",
  items: [
    {
      question: "Faut-il déjà avoir pratiqué le Lagree pour rejoindre ?",
      answer:
        "Non. Le Megaformer se règle à ton niveau et Lilas accompagne chaque nouvelle venue. La difficulté vient de toi, pas de la machine.",
    },
    {
      question: "Les cours sont-ils vraiment chauffés ?",
      answer:
        "Oui — le studio est maintenu autour de 32°C. La chaleur assouplit les muscles, amplifie l'effort et fait de chaque séance une vraie dépense.",
    },
    {
      question: "Que dois-je apporter ?",
      answer:
        "Juste ta gourde et des chaussettes de grip si tu en as. Tapis, serviette et eau fraîche sont fournis sur place.",
    },
    {
      question: "À quelle fréquence dois-je m'entraîner ?",
      answer:
        "Deux à trois séances par semaine suffisent pour voir des résultats en un mois. La constance bat l'intensité occasionnelle.",
    },
    {
      question: "Est-ce que je vais « gonfler » ?",
      answer:
        "Non. Le Lagree cible les muscles profonds en endurance de force : tu gagnes en tonus, en posture et en définition, jamais en volume.",
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
  nav: [
    { label: "La fondatrice", href: "#fondatrice" },
    { label: "Le concept", href: "#concept" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Mentions légales", href: "#mentions-legales" },
    { label: "Politique de confidentialité", href: "#politique-de-confidentialite" },
    { label: "Gestion des cookies", href: "#gestion-des-cookies" },
  ],
  credits: "Fait avec ❤️ par l'Agence Grey",
};
