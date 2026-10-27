## description: "Voie 2 : Industrialisation MPA, Sanity CMS, Conformité Légale & Sanctuarisation Front-End"
globs: "src/app/**/\*.tsx,src/components/**/*.tsx,src/lib//*.ts,src/env.ts,src/sanity//\*.ts"
alwaysApply: false

# Directives Voie 2 : Industrialisation MPA, Sanity CMS & Conformité (Mode Ingénierie)

## 1. Règle d'Or : Sanctuarisation du Design Front-End

La Direction Artistique a été validée en Voie 1. Le design est **VERROUILLÉ**.

* **Conservation du Layout et des Styles :** Ne modifiez sous aucun prétexte la structure CSS (classes Tailwind), les balises sémantiques ou la hiérarchie du layout dans `src/components/`.

* **Passage en Props et Raccordement Dynamique :**

  * Les composants d'interface deviennent de purs composants de présentation (Dumb Components).

  * La modification du JSX dans `src/components/` est autorisée **exclusivement** pour :

    1. Remplacer les données fictives par des variables typées via une interface dédiée (`interface ComponentProps`).

    2. Remplacer les blocs de répétition manuelle par des itérations `.map()` basées sur les données injectées.

  * Aucun appel direct à Sanity, requête GROQ ou logique métier ne doit être écrit dans `src/components/`.

## 2. Découpage MPA & Intégration Sanity CMS

* **Orchestration des routes (`src/app/`) :**

  * Découpez l'application en pages réelles (MPA) avec leurs métadonnées SEO dédiées (`generateMetadata`, balises OpenGraph, canonicals, schema.org local business).

  * Toutes les pages (`page.tsx`) et layouts (`layout.tsx`) sont des React Server Components (RSC) asynchrones.

* **Récupération des Données (Data Fetching) :**

  * Centralisez toutes les requêtes GROQ et les fonctions clientes Sanity dans `src/sanity/lib/queries.ts` ou `src/sanity/lib/fetch.ts`.

  * Exécutez les requêtes de données côté serveur dans les Server Components de `src/app/`, puis transmettez les résultats typés aux composants de `src/components/sections/`.

  * Configurez la revalidation des données (tags de cache Next.js ou webhooks Sanity pour revalidation à la demande).

## 3. Conformité Légale, RGPD & Signature Agence (Obligatoire)

Toutes les pages légales doivent exister, être indexables (sauf mention contraire) et accessibles depuis le Footer, **même pour un site initialement conçu en page unique (SPA)** :

### A. Signature Agence dans le Footer

* Insérer obligatoirement dans la partie basse du composant Footer la mention textuelle exacte :
  `Fait avec ❤️ par l'` suivi d'un lien hypertexte vers le site de l'agence.

* **Format du lien :** `<a href="https://agence-grey.fr/" target="_blank" rel="noopener noreferrer">Agence Grey</a>`.

### B. Pages Légales Dédiées (Routes autonomes dans `src/app/`)

1. **Mentions Légales (`/mentions-legales`) :**

   * Données obligatoires à intégrer (via Sanity ou configuration typée `siteConfig`) :

     * Raison sociale et Nom commercial du client

     * Numéro de SIRET / RCS

     * Adresse du siège social et coordonnées exactes (téléphone, email)

     * Directeur / Responsable de la publication

     * Hébergement (ex: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723)

     * Conception & Réalisation : **Agence Grey** (avec lien vers `https://agence-grey.fr/`)

2. **Politique de Confidentialité (`/politique-de-confidentialite`) :**

   * Explication claire de la collecte des données (formulaires de contact, données de réservation tierces).

   * Droits des utilisateurs (accès, rectification, suppression RGPD) et contact du responsable du traitement.

3. **Gestion des Cookies (`/cookies` ou `/gestion-des-cookies`) :**

   * Détail des traceurs utilisés (audience, widgets tiers, session).

### C. Gestion du Consentement (Bannière / Pop-up Cookies)

* Mettre en place un composant de consentement RGPD persistant (`src/components/ui/cookie-banner.tsx` ou modal) :

  * Choix clair et équilibré : bouton d'acceptation ("Accepter") et de refus ("Refuser" ou "Continuer sans accepter").

  * Mémorisation du choix utilisateur dans le stockage local (`localStorage`) ou via un cookie dédié pour ne pas réafficher le pop-up à chaque rafraîchissement.

  * Bloquer l'exécution de tout script tiers ou tag analytique tant que l'accord explicite n'a pas été donné.

  * Lien direct vers la page `/politique-de-confidentialite` ou `/cookies` au sein de la bannière.

## 4. Typage Strict & Robustesse Runtime

* **Tolérance Zéro `any` :** Aucun type `any` ou `unknown` forcé n'est accepté. Utilisez les types générés par Sanity TypeGen ou écrivez des schémas précis.

* **Validation Runtime avec Zod :**

  * Chaque réponse issue de Sanity ou d'un formulaire externe doit être validée via un schéma Zod avant injection dans l'UI pour prévenir les ruptures dues aux champs optionnels CMS.

  * Les variables d'environnement (Project ID Sanity, Dataset, tokens API) sont strictement consommées via `src/env.ts` (T3 Env).

* **Vérification Statique :** Chaque étape doit passer avec succès `tsc --noEmit` et `biome check`.

## 5. Protocole d'Exécution

1. **Planification :** Listez les routes à générer (y compris `/mentions-legales`, `/politique-de-confidentialite`, `/cookies`), les schémas de documents Sanity requis et les interfaces de props associées.

2. **Schémas CMS & Requêtes :** Configurez les schémas Sanity (`src/sanity/schemaTypes/`) et rédigez les requêtes GROQ typées associées.

3. **Raccordement Progressif & Conformité :**

   * Remplacez les mocks de Voie 1 par les props alimentées par les Server Components.

   * Intégrez la bannière de cookies et complétez le footer avec la signature Agence Grey et les liens légaux.

4. **Vérification du Build :** Validez systématiquement la compilation de production (`pnpm build`) pour confirmer l'absence d'erreurs de routes, de types ou d'hydratation Next.js/Vercel.

5. **Validation Git :** Rédigez un commit conventionnel conforme (`feat:`, `fix:`, `refactor:`) passant les hooks de vérification (Lefthook).