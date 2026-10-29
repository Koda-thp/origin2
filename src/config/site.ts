export const legalConfig = {
  companyName: "ORIGIN",
  commercialName: "ORIGIN — Studio Lagree",
  responsibleName: "ORIGIN STUDIO LAGREE",
  legalForm: "SAS",
  capital: "1 000 €",
  siret: "105 901 839 00016",
  headquarters: {
    address: "2 et 117 Boulevard de Cabry",
    postalCode: "83140",
    city: "Six-Fours-les-Plages",
    phone: "07 88 32 20 82",
    email: "originstudiolagree@gmail.com",
  },
  publicationDirector: "Lilas Marie Faille-Colombani",
  hosting: {
    name: "Hostinger International Ltd.",
    address: "61 Lordou Vironos Street, 6023 Larnaca, Chypre",
    url: "https://www.hostinger.fr",
  },
  design: {
    name: "Agence Grey",
    url: "https://agence-grey.fr/",
  },
  dpo: {
    email: "originstudiolagree@gmail.com",
  },
  cookies: [
    {
      name: "Session",
      purpose: "Gestion de la session utilisateur",
      duration: "Session",
    },
    {
      name: "Consentement cookies",
      purpose: "Mémorisation du choix de consentement",
      duration: "1 an",
    },
  ],
} as const;
