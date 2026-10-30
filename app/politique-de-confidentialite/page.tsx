import type { Metadata } from 'next'
import PageLegale from '@/components/PageLegale'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Allo Nuisible IDF',
  description: 'Comment Allo Nuisible IDF collecte et protège vos données personnelles, et comment exercer vos droits.',
  alternates: { canonical: '/politique-de-confidentialite' },
}

export default function PolitiqueConfidentialite() {
  return (
    <PageLegale titre="Politique de confidentialité" maj="1er novembre 2026">
      <h2>Responsable du traitement</h2>
      <p>
        <strong>ALLO NUISIBLE IDF</strong>, SAS, 6 B rue du Val d&apos;Osne, 94410 Saint-Maurice, SIREN 928 763 713.
        Contact : <a href="mailto:contact@allonuisibleidf.fr">contact@allonuisibleidf.fr</a>.
      </p>

      <h2>Données collectées</h2>
      <p>Nous collectons uniquement les données que vous nous transmettez :</p>
      <ul>
        <li>via les <strong>formulaires de demande de devis et de rendez-vous</strong> : nom, prénom, téléphone, email, ville, type de nuisible et description de la situation ;</li>
        <li>lorsque vous nous contactez par <strong>téléphone, WhatsApp ou email</strong> ;</li>
        <li>lors d&apos;une <strong>intervention</strong> : adresse d&apos;intervention et informations nécessaires au devis, à la facture et à l&apos;attestation.</li>
      </ul>

      <h2>Pourquoi nous utilisons vos données</h2>
      <ul>
        <li>Répondre à votre demande et établir un devis (mesures précontractuelles prises à votre demande).</li>
        <li>Organiser et réaliser l&apos;intervention, assurer le suivi et la garantie (exécution du contrat).</li>
        <li>Respecter nos obligations légales, notamment comptables et fiscales (factures, attestations).</li>
      </ul>
      <p>Vos données ne sont jamais vendues ni utilisées à des fins publicitaires.</p>

      <h2>Destinataires</h2>
      <p>
        Vos données sont accessibles uniquement aux personnes d&apos;ALLO NUISIBLE IDF qui traitent votre demande. Nous faisons appel
        à des prestataires techniques : <strong>Formspree</strong> (acheminement des formulaires du site), <strong>Vercel</strong>{' '}
        (hébergement du site) et <strong>Hostinger</strong> (messagerie). Formspree et Vercel sont établis aux États-Unis : des données
        peuvent donc être transférées hors de l&apos;Union européenne, dans le cadre des garanties prévues par le RGPD.
      </p>

      <h2>Durée de conservation</h2>
      <ul>
        <li>Demandes de devis sans suite : 3 ans à compter du dernier contact.</li>
        <li>Clients : pendant toute la relation, puis 3 ans pour le suivi.</li>
        <li>Factures et pièces comptables : 10 ans, conformément au Code de commerce.</li>
      </ul>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité
        de vos données. Pour les exercer, écrivez à{' '}
        <a href="mailto:contact@allonuisibleidf.fr">contact@allonuisibleidf.fr</a>. Nous vous répondons dans un délai d&apos;un mois.
      </p>
      <p>
        Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL
        (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
      </p>

      <h2>Cookies</h2>
      <p>Le site n&apos;utilise aucun cookie publicitaire ni outil de mesure d&apos;audience. Aucun bandeau de consentement n&apos;est donc nécessaire.</p>
    </PageLegale>
  )
}
