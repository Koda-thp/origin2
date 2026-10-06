---
description: "Voie 1 : Création de Maquette SPA & Exploration Graphique (Focus DA, 21st.dev & Anticipation CMS)"
globs: "src/app/**/*.tsx,src/components/**/*.tsx,src/app/globals.css,src/data/**/*.ts"
alwaysApply: false
---
# Directives Voie 1 : Maquette SPA & Direction Artistique (Mode Créatif)

## 1. Objectif Unique
Produire un prototype interactif, ultra-léché visuellement ("Wow factor") et fidèle à la Direction Artistique (DA) pour validation rapide par le client. La priorité est l'impact esthétique, la fluidité des micro-interactions et le calibrage mobile, tout en préparant le terrain pour l'intégration de Sanity CMS et des éléments légaux obligatoires.

## 2. Bibliothèques et Composants Visuels
- **Composants d'interface :** Exploitez les bibliothèques modernes : [21st.dev](https://21st.dev/), Aceternity UI, Magic UI et Shadcn UI.
- **Gestion des dépendances :** Utilisez en priorité les packages déjà installés dans le projet. N'installez aucune dépendance externe lourde sans validation explicite.
- **Animations & Performance :**
  - Utilisez Framer Motion, Tailwind Animate ou Canvas pour les interactions douces et effets de scroll.
  - **Garde-fou mobile :** Désactivez ou allégez systématiquement les animations lourdes (Canvas 3D, particules complexes) sur mobile (`hidden md:block` ou via media queries) pour préserver la fluidité et les scores Core Web Vitals.
- **Iconographie :** Utilisez Lucide React ou des SVGs inline optimisés.

## 3. Règles d'Architecture Front & Données Simulées (Mocks)
- **Périmètre strict de `'use client'` :**
  - La directive `'use client'` est autorisée **exclusivement** sur les composants de présentation interactifs ou animés dans `src/components/`.
  - Les fichiers de routage (`src/app/page.tsx` et `src/app/layout.tsx`) doivent impérativement **rester des Server Components** (sans `'use client'`) afin de préserver l'injection ultérieure des métadonnées SEO.
- **Isolation des Données Simulées (Mock Data) :**
  - **Interdiction formelle** d'écrire des textes ou listes complexes en dur au cœur du JSX.
  - Toutes les données simulées (tarifs, plannings, avis, cours) doivent être centralisées dans des constantes en tête de composant ou dans `src/data/mock.ts`.
  - Structurez ces mocks sous forme d'objets ou tableaux reflétant les futurs schémas Sanity CMS (ex: `title`, `slug`, `image`, `description`, `price`).

## 4. Exigences Minimales Incompressibles & Mock du Footer
- **Design System naissant :** Centralisez la palette de couleurs et les polices dans `src/app/globals.css` sous la directive `@theme` (Tailwind v4).
- **Responsive Prioritaire :** Le rendu doit être irréprochable sur mobile (390px - priorité d'usage pour les studios), tablette (768px) et desktop (1440px+).
- **Découpage modulaire :** Chaque bloc fonctionnel (Hero, Navigation, Services/Cours, Tarifs, Contact, Footer) doit résider dans son propre fichier sous `src/components/sections/`.
- **Intégrations tierces :** Prévoyez des conteneurs neutres et stables pour les futurs widgets de réservation tiers (Mindbody, Eversports, Bsport, etc.).
- **Anticipation Visuelle du Footer (Obligatoire dès la maquette) :**
  - Intégrer visuellement la signature d'agence : `Fait avec ❤️ par l'` avec lien stylisé vers `https://agence-grey.fr/` (label : `Agence Grey`).
  - Intégrer les liens de bas de page prêts à recevoir les futures routes légales :
    - `Mentions légales` (`href="#"` ou `/mentions-legales`)
    - `Politique de confidentialité` (`href="#"` ou `/politique-de-confidentialite`)
    - `Gestion des cookies` (`href="#"` ou `/cookies`)
  - Prévoir un conteneur stylisé pour la future bannière pop-up de cookies en bas d'écran.