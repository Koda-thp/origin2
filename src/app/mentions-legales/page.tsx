import type { Metadata } from "next";
import Link from "next/link";
import { legalConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales — ORIGIN Studio Lagree",
  description: "Mentions légales du site ORIGIN — Studio Lagree.",
  robots: { index: true, follow: true },
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-24">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-bordeaux/70 transition-colors hover:text-bordeaux"
      >
        ← Retour au site
      </Link>

      <h1 className="font-display text-4xl uppercase leading-tight tracking-tight text-bordeaux md:text-5xl">
        Mentions légales
      </h1>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            Éditeur du site
          </h2>
          <div className="space-y-2 text-sm leading-relaxed text-bordeaux/80">
            <p>
              <strong>Raison sociale :</strong> {legalConfig.companyName}
            </p>
            <p>
              <strong>Nom commercial :</strong> {legalConfig.commercialName}
            </p>
            <p>
              <strong>Forme juridique :</strong> {legalConfig.legalForm}
            </p>
            <p>
              <strong>Capital social :</strong> {legalConfig.capital}
            </p>
            <p>
              <strong>SIRET :</strong> {legalConfig.siret}
            </p>
            <p>
              <strong>Siège social :</strong> {legalConfig.headquarters.address},{" "}
              {legalConfig.headquarters.postalCode} {legalConfig.headquarters.city}
            </p>
            <p>
              <strong>Téléphone :</strong> {legalConfig.headquarters.phone}
            </p>
            <p>
              <strong>Email :</strong> {legalConfig.headquarters.email}
            </p>
            <p>
              <strong>Directeur de la publication :</strong> {legalConfig.publicationDirector}
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            Hébergement
          </h2>
          <div className="space-y-2 text-sm leading-relaxed text-bordeaux/80">
            <p>
              <strong>Hébergeur :</strong> {legalConfig.hosting.name}
            </p>
            <p>
              <strong>Adresse :</strong> {legalConfig.hosting.address}
            </p>
            <p>
              <strong>Site :</strong>{" "}
              <a
                href={legalConfig.hosting.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-bordeaux"
              >
                {legalConfig.hosting.url}
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            Conception & Réalisation
          </h2>
          <div className="text-sm leading-relaxed text-bordeaux/80">
            <p>
              Conception et réalisation par{" "}
              <a
                href={legalConfig.design.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-bordeaux"
              >
                {legalConfig.design.name}
              </a>
              .
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            Propriété intellectuelle
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            L'ensemble du contenu de ce site (textes, images, photographies, graphismes, logo,
            icônes, etc.) est la propriété exclusive de {legalConfig.companyName}, sauf mention
            contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou
            publication de ces différents éléments est strictement interdite sans l'accord exprès de{" "}
            {legalConfig.companyName}.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            Limitation de responsabilité
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            {legalConfig.companyName} ne pourra être tenue responsable des dommages directs ou
            indirects causés au matériel de l'utilisateur lors de l'accès au site.{" "}
            {legalConfig.companyName} décline toute responsabilité quant à l'utilisation qui
            pourrait être faite des informations et contenus présents sur ce site.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            Droit applicable
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Les présentes mentions légales sont régies par le droit français. En cas de litige, les
            tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
    </main>
  );
}
