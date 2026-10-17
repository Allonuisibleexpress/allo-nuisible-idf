import { pageMetadata } from '@/lib/seo'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'

const data: ServiceData = {
  badge: 'Bactéries · Virus · Champignons · Moisissures · Attestation officielle',
  heroTitle: 'Désinfection',
  heroHighlight: 'Assainissement complet',
  heroDescription: 'Désinfection professionnelle après infestation, sinistre ou contamination. Produits biocides à large spectre. Attestation officielle fournie pour vos obligations réglementaires.',
  heroPrices: [
    { price: '200', label: 'Studio' },
    { price: '350', label: 'Appartement' },
    { price: '500', label: 'Local pro' },
  ],
  trustBar: ['Produits homologués', 'Large spectre', 'Attestation officielle', 'ERP & collectivités', 'RC Pro incluse'],
  benefits: [
    { icon: 'flask', title: 'Biocides à large spectre', text: 'Nos produits désinfectants sont homologués PT2 (bactéricides, virucides, fongicides). Actifs sur bactéries, virus, levures et champignons. Conformes aux directives européennes sur les biocides.' },
    { icon: 'clipboard', title: 'Attestation officielle', text: 'Fourniture d\'une attestation d\'intervention certifiée pour vos obligations légales (ERP, restaurants, crèches, EHPAD). Document valide pour vos contrôles sanitaires et administrations.' },
    { icon: 'health', title: 'Secteurs réglementés', text: 'Expérience dans les établissements sensibles : restauration, santé, petite enfance, hôtellerie. Protocoles adaptés aux contraintes de chaque secteur et certification Certibiocide.' },
  ],
  process: [
    { title: 'Évaluation de la situation', text: 'Identification du type de contamination (post-infestation, post-sinistre, contamination bactérienne), de la surface à traiter et des contraintes spécifiques du lieu.' },
    { title: 'Préparation du local', text: 'Évacuation des personnes et animaux. Préparation du local selon le protocole (retrait des aliments, protection des surfaces sensibles). Nos techniciens vous guident étape par étape.' },
    { title: 'Traitement désinfectant', text: 'Application par pulvérisation, nébulisation ou brumisation selon la configuration. Traitement de toutes les surfaces, de l\'air ambiant et des zones difficiles d\'accès.' },
    { title: 'Ventilation & attestation', text: 'Temps de contact respecté selon le produit. Ventilation du local. Fourniture de l\'attestation d\'intervention et du rapport de désinfection.' },
  ],
  pricing: [
    {
      label: 'Logement',
      price: '200',
      description: 'Appartement jusqu\'à 50 m²',
      features: ['Traitement complet', 'Produit large spectre', 'Nébulisation si nécessaire', 'Attestation fournie'],
    },
    {
      label: 'Grand logement / Bureaux',
      price: '350',
      description: 'De 50 à 150 m²',
      features: ['Désinfection intégrale', 'Traitement air + surfaces', 'Zones difficiles incluses', 'Rapport d\'intervention', 'Attestation officielle'],
      highlight: true,
    },
    {
      label: 'Local professionnel',
      price: '500',
      description: 'Restaurant, crèche, EHPAD, hôtel',
      features: ['Protocole sectoriel adapté', 'Produits HACCP conformes', 'Attestation réglementaire', 'Disponible hors horaires', 'Urgences 24h/24'],
      cta: 'Devis urgent disponible',
    },
  ],
  testimonials: [
    { name: 'Marie-Claire F.', ville: 'Versailles', note: 5, texte: 'Désinfection après infestation de rongeurs. Très professionnel, l\'attestation a été fournie le jour même. Le logement est à nouveau sain.' },
    { name: 'Omar S.', ville: 'Paris 15e', note: 5, texte: 'Désinfection urgente de mon restaurant après un signalement. Intervention le soir même, attestation HACCP, contrôle passé sans problème. Merci !' },
    { name: 'Nathalie P.', ville: 'Boulogne-Billancourt', note: 5, texte: 'Après un dégât des eaux avec moisissures. Traitement efficace, technicien sérieux. Plus aucune odeur et les moisissures n\'ont pas repoussé.' },
  ],
  faq: [
    { q: 'Dans quels cas faut-il désinfecter un logement ?', a: 'Après une infestation de nuisibles (rongeurs, cafards), après un décès ou une situation de grande insalubrité, après une contamination bactérienne ou virale, après un dégât des eaux avec moisissures, ou dans le cadre d\'une remise en état post-sinistre.' },
    { q: 'Quelle différence entre désinfection et désinsectisation ?', a: 'La désinsectisation élimine les insectes. La désinfection traite les agents pathogènes (bactéries, virus, champignons) présents sur les surfaces et dans l\'air. Les deux peuvent être combinées.' },
    { q: 'Faut-il quitter le logement pendant la désinfection ?', a: 'Oui, pendant la durée de l\'intervention et 2 à 4 heures après selon les produits. Les animaux domestiques doivent également quitter les lieux. Nos techniciens vous donnent le délai précis de réoccupation.' },
    { q: 'L\'attestation est-elle acceptée par les administrations ?', a: 'Oui. Nos techniciens sont certifiés Certibiocide et nos attestations sont conformes aux exigences réglementaires. Elles sont acceptées par les DDPP (anciens services vétérinaires), les inspections sanitaires et les assurances.' },
    { q: 'Intervenez-vous en urgence ?', a: 'Oui. Nous proposons des interventions urgentes pour les professionnels (restaurants sur fermeture administrative, contamination virale) dans des délais très courts, y compris le soir et le week-end.' },
  ],
  ctaTitle: 'Besoin d\'une désinfection ?\nContactez-nous maintenant.',
}

export const metadata = pageMetadata({
  title: 'Désinfection professionnelle avec attestation, Île-de-France',
  description: 'Désinfection après infestation, sinistre ou contamination : bactéries, virus, moisissures. Attestation officielle fournie. Devis gratuit.',
  path: '/services/desinfection',
})

export default function DesinfectionPage() {
  return <ServicePageTemplate data={data} />
}
