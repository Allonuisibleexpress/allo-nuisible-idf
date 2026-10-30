import type { Metadata } from 'next'
import PageLegale from '@/components/PageLegale'

// Données issues de l'annuaire des entreprises (recherche-entreprises.api.gouv.fr), SIREN 928 763 713.
export const metadata: Metadata = {
  title: 'Mentions légales | Allo Nuisible IDF',
  description: 'Mentions légales du site allonuisibleidf.fr : éditeur, directeur de la publication, hébergeur.',
  alternates: { canonical: '/mentions-legales' },
}

export default function MentionsLegales() {
  return (
    <PageLegale titre="Mentions légales" maj="1er novembre 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le site <strong>allonuisibleidf.fr</strong> est édité par la société <strong>ALLO NUISIBLE IDF</strong>, société par
        actions simplifiée (SAS) au capital de 1 000 euros.
      </p>
      <ul>
        <li>Siège social : 6 B rue du Val d&apos;Osne, 94410 Saint-Maurice</li>
        <li>Immatriculée au RCS de Créteil sous le numéro 928 763 713</li>
        <li>SIRET : 928 763 713 00023</li>
        <li>Numéro de TVA intracommunautaire : FR04928763713</li>
        <li>Activité : désinfection, désinsectisation, dératisation (code NAF 81.29A)</li>
        <li>Téléphone : <a href="tel:+33768077219">07 68 07 72 19</a></li>
        <li>Email : <a href="mailto:contact@allonuisibleidf.fr">contact@allonuisibleidf.fr</a></li>
      </ul>

      <h2>Directeur de la publication</h2>
      <p>Houssem Hattab, en qualité de Président de la société ALLO NUISIBLE IDF.</p>

      <h2>Hébergeur</h2>
      <p>
        Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis
        (<a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>).
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus du site (textes, logo, illustrations, mise en page) est la propriété d&apos;ALLO NUISIBLE IDF,
        sauf mention contraire. Toute reproduction, totale ou partielle, sans autorisation écrite préalable est interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Les informations publiées sur le site sont fournies à titre indicatif et ne remplacent pas le diagnostic d&apos;un technicien.
        ALLO NUISIBLE IDF s&apos;efforce de les maintenir exactes et à jour, mais ne peut garantir l&apos;absence d&apos;erreur.
        Les liens vers des sites externes sont proposés pour information : ALLO NUISIBLE IDF n&apos;est pas responsable de leur contenu.
      </p>

      <h2>Données personnelles et cookies</h2>
      <p>
        Le traitement des données transmises via les formulaires est décrit dans notre{' '}
        <a href="/politique-de-confidentialite">politique de confidentialité</a>. Le site n&apos;utilise aucun cookie publicitaire
        ni outil de mesure d&apos;audience.
      </p>

    </PageLegale>
  )
}
