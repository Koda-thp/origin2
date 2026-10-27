import type { Metadata } from "next";
import Link from "next/link";
import { legalConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Gestion des cookies — ORIGIN Studio Lagree",
  description:
    "Politique de gestion des cookies du site ORIGIN — Studio Lagree. Détail des traceurs utilisés et gestion du consentement.",
  robots: { index: true, follow: true },
};

export default function Cookies() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-24">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-bordeaux/70 transition-colors hover:text-bordeaux"
      >
        ← Retour au site
      </Link>

      <h1 className="font-display text-4xl uppercase leading-tight tracking-tight text-bordeaux md:text-5xl">
        Gestion des cookies
      </h1>

      <p className="mt-4 text-sm text-bordeaux/60">
        Dernière mise à jour :{" "}
        {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
      </p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            1. Qu'est-ce qu'un cookie ?
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette,
            smartphone) lors de la visite d'un site web. Il permet au site de mémoriser des
            informations relatives à votre navigation (pages consultées, date et heure de
            consultation, etc.).
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            2. Cookies utilisés sur ce site
          </h2>

          <h3 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-bordeaux">
            Cookies strictement nécessaires
          </h3>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être
            désactivés. Ils ne nécessitent pas votre consentement.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-bordeaux/15">
            <table className="w-full text-sm">
              <thead className="bg-tan">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-bordeaux">
                    Nom
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-bordeaux">
                    Finalité
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-bordeaux">
                    Durée
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bordeaux/10">
                {legalConfig.cookies.map((cookie) => (
                  <tr key={cookie.name}>
                    <td className="px-4 py-3 text-bordeaux/90">{cookie.name}</td>
                    <td className="px-4 py-3 text-bordeaux/80">{cookie.purpose}</td>
                    <td className="px-4 py-3 text-bordeaux/80">{cookie.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-bordeaux">
            Cookies analytiques (soumis au consentement)
          </h3>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Ces cookies permettent de mesurer l'audience du site et d'en analyser les performances.
            Ils ne sont déposés qu'avec votre accord explicite.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-bordeaux/80">
            Actuellement, ce site n'utilise aucun cookie analytique tiers. Si un outil d'analyse
            d'audience est mis en place à l'avenir (par exemple, un outil respectueux de la vie
            privée comme Plausible ou Fathom), cette page sera mise à jour en conséquence.
          </p>

          <h3 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-bordeaux">
            Widgets tiers
          </h3>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Le site peut intégrer des widgets de réservation tiers (Bsport, Mindbody, Eversports,
            etc.). Ces widgets peuvent déposer des cookies propres à leurs plateformes. Nous vous
            invitons à consulter les politiques de confidentialité de ces services pour en savoir
            plus sur leur utilisation des cookies.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            3. Gestion de vos préférences
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Vous pouvez à tout moment gérer vos préférences en matière de cookies :
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-bordeaux/80">
            <li>
              Via la bannière de consentement affichée lors de votre première visite sur le site
            </li>
            <li>
              Via les paramètres de votre navigateur (reportez-vous à la documentation de votre
              navigateur)
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-bordeaux/80">
            Le refus des cookies non essentiels n'empêche pas l'utilisation du site.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            4. Durée de validité du consentement
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Conformément aux recommandations de la CNIL, votre consentement (ou refus) en matière de
            cookies est conservé pour une durée maximale de 6 mois, à l'issue de laquelle la
            bannière de consentement vous sera à nouveau présentée.
          </p>
        </section>

        <section>
          <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-bordeaux">
            5. Contact
          </h2>
          <p className="text-sm leading-relaxed text-bordeaux/80">
            Pour toute question relative à cette politique de cookies, vous pouvez nous contacter à
            l'adresse{" "}
            <a href={`mailto:${legalConfig.dpo.email}`} className="underline hover:text-bordeaux">
              {legalConfig.dpo.email}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
