import type { Metadata } from "next";
import Link from "next/link";
import { legalConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité — ORIGIN Studio Lagree",
  description:
    "Politique de confidentialité du site ORIGIN — Studio Lagree. Informations sur la collecte des données personnelles et vos droits RGPD.",
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-24">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-bordeaux/70 transition-colors hover:text-bordeaux"
      >
        ← Retour au site
      </Link>

      <h1 className="font-display text-4xl uppercase leading-tight tracking-tight text-bordeaux md:text-5xl">
        Politique de confidentialité
      </h1>

      <p className="mt-4 text-sm text-bordeaux/60">
        Dernière mise à jour :{" "}
        {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
      </p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            1. Responsable du traitement
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Le responsable du traitement des données collectées sur ce site est{" "}
            <strong>{legalConfig.responsibleName}</strong>, dont le siège social est situé au{" "}
            {legalConfig.headquarters.address}, {legalConfig.headquarters.postalCode}{" "}
            {legalConfig.headquarters.city}. Pour toute question relative à cette politique, vous
            pouvez nous contacter à l'adresse{" "}
            <a href={`mailto:${legalConfig.dpo.email}`} className="underline hover:text-bordeaux">
              {legalConfig.dpo.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            2. Données collectées
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Dans le cadre de l'utilisation de ce site, les données suivantes peuvent être collectées
            :
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-bordeaux/80">
            <li>
              Données de formulaire : nom, prénom, adresse email, numéro de téléphone (via le
              formulaire de contact le cas échéant)
            </li>
            <li>
              Données de réservation : transmises via des plateformes tierces (Mindbody, Eversports,
              Bsport, etc.) — soumises aux politiques de confidentialité de ces plateformes
            </li>
            <li>
              Données de navigation : adresse IP, type de navigateur, pages visitées, durée de la
              visite
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            3. Finalités du traitement
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Les données personnelles sont collectées pour les finalités suivantes :
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-bordeaux/80">
            <li>Répondre aux demandes de contact et d'information</li>
            <li>Gérer les réservations de cours (via les plateformes tierces)</li>
            <li>
              Mesurer l'audience du site et en améliorer le fonctionnement (cookies analytiques,
              sous réserve de consentement)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            4. Base légale
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Les traitements de données reposent sur les bases légales suivantes :
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-bordeaux/80">
            <li>
              <strong>Consentement</strong> : pour les cookies analytiques et le dépôt de traceurs
              non essentiels
            </li>
            <li>
              <strong>Intérêt légitime</strong> : pour la mesure d'audience et l'amélioration du
              service
            </li>
            <li>
              <strong>Exécution contractuelle</strong> : pour la gestion des réservations
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            5. Durée de conservation
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Les données personnelles sont conservées pour une durée n'excédant pas celle nécessaire
            aux finalités pour lesquelles elles sont collectées, conformément à la législation en
            vigueur :
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-bordeaux/80">
            <li>Données de contact : 3 ans après le dernier contact</li>
            <li>
              Données de réservation : durée de la relation contractuelle + 5 ans (obligations
              comptables)
            </li>
            <li>Cookies : 13 mois maximum (conformément aux recommandations de la CNIL)</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            6. Vos droits (RGPD)
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
            des droits suivants :
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-bordeaux/80">
            <li>
              <strong>Droit d'accès</strong> : obtenir la confirmation que des données vous
              concernant sont traitées
            </li>
            <li>
              <strong>Droit de rectification</strong> : demander la correction de données inexactes
            </li>
            <li>
              <strong>Droit à l'effacement</strong> : demander la suppression de vos données
            </li>
            <li>
              <strong>Droit à la limitation</strong> : restreindre le traitement de vos données
            </li>
            <li>
              <strong>Droit à la portabilité</strong> : recevoir vos données dans un format
              structuré
            </li>
            <li>
              <strong>Droit d'opposition</strong> : vous opposer au traitement de vos données
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-bordeaux/80">
            Pour exercer ces droits, adressez votre demande à{" "}
            <a href={`mailto:${legalConfig.dpo.email}`} className="underline hover:text-bordeaux">
              {legalConfig.dpo.email}
            </a>
            . Vous pouvez également introduire une réclamation auprès de la CNIL (Commission
            Nationale de l'Informatique et des Libertés) sur{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-bordeaux"
            >
              www.cnil.fr
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            7. Transferts de données
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Vos données personnelles ne font l'objet d'aucun transfert en dehors de l'Union
            Européenne. Les plateformes tierces de réservation utilisées peuvent être soumises à des
            transferts internationaux, encadrés par des clauses contractuelles types approuvées par
            la Commission Européenne.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            8. Sécurité
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            {legalConfig.companyName} met en œuvre les mesures techniques et organisationnelles
            appropriées pour assurer la sécurité et la confidentialité des données personnelles et
            empêcher leur destruction, leur perte, leur altération, leur divulgation ou leur accès
            non autorisé.
          </p>
        </section>
      </div>
    </main>
  );
}
