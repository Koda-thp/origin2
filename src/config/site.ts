export const legalConfig = {
  companyName: "ORIGIN",
  commercialName: "ORIGIN — Studio Lagree",
  legalForm: "SAS",
  siret: "105 901 839 00016",
  headquarters: {
    address: "2 et 117 Boulevard de Cabry",
    postalCode: "83140",
    city: "Six-Fours-les-Plages",
    phone: "07 88 32 20 82",
    email: "contact@origin-studio.fr",
  },
  publicationDirector: "Lilas Marie Faille-Colombani",
  hosting: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
    url: "https://vercel.com",
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
