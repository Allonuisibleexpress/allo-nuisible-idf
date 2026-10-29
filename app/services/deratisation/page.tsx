import { pageMetadata } from '@/lib/seo'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'

const data: ServiceData = {
  badge: 'Certibiocide · HACCP · Particuliers & ERP · Contrats annuels',
  heroTitle: 'Dératisation',
  heroHighlight: 'Intervention certifiée',
  heroDescription: 'Élimination des rongeurs par des techniciens Certibiocide. Postes d\'appâtage sécurisés ou pièges connectés, attestations pour professionnels, contrats de maintenance.',
  heroPrices: [
    { price: '150', label: 'Particulier' },
    { price: '280', label: 'Professionnel' },
    { price: '500', label: 'Copropriété' },
  ],
  trustBar: ['Certibiocide', 'Attestation HACCP', 'Postes sécurisés', 'Contrats maintenance', 'RC Pro incluse'],
  benefits: [
    { icon: 'home', title: 'Particuliers : intervention rapide', text: 'Inspection du logement, identification des points d\'entrée, installation de postes d\'appâtage sécurisés. Intervention le jour même pour les urgences, discrète et efficace.' },
    { icon: 'food', title: 'Professionnels & ERP conformes', text: 'Intervention conforme aux normes HACCP. Fourniture des attestations et rapports d\'intervention obligatoires pour restaurants, hôtels, commerces alimentaires et ERP.' },
    { icon: 'building', title: 'Copropriétés & parties communes', text: 'Traitement des caves, locaux poubelles, parkings et parties communes. Intervention en lien avec le syndic. Contrats pluriannuels avec visites régulières et registre de suivi.' },
  ],
  process: [
    { title: 'Inspection & cartographie', text: 'Inspection complète des locaux : points d\'entrée, couloirs, zones de nidification et d\'alimentation. Cartographie précise pour un traitement ciblé et efficace.' },
    { title: 'Installation du dispositif', text: 'Pose de boîtiers d\'appâtage sécurisés contenant des raticides homologués, ou de pièges mécaniques et connectés selon le lieu. Positionnement stratégique le long des murs et dans les zones de passage.' },
    { title: 'Suivi & relevés réguliers', text: 'Retour sous 1 à 2 semaines pour relever les consommations, recharger les appâts et évaluer l\'efficacité. Ajustement du dispositif si nécessaire.' },
    { title: 'Colmatage & attestation', text: 'Identification et colmatage des points d\'entrée. Fourniture de l\'attestation d\'intervention et du rapport de suivi. Conseils préventifs pour éviter les réinfestations.' },
  ],
  pricing: [
    {
      label: 'Particulier',
      price: '150',
      description: 'Logement jusqu\'à 150 m²',
      features: ['Inspection complète', 'Postes sécurisés', 'Suivi 2 semaines', 'Conseils préventifs'],
    },
    {
      label: 'Professionnel',
      price: '280',
      description: 'Restaurant, commerce, bureau',
      features: ['Inspection HACCP', 'Postes certifiés', 'Attestation officielle', 'Rapport d\'intervention', 'Garantie résultat'],
      highlight: true,
    },
    {
      label: 'Copropriété',
      price: '500',
      description: 'Parties communes et caves',
      features: ['Audit complet', 'Postes multiples', 'Registre de suivi', 'Contrat annuel dispo', 'Coordination syndic'],
      cta: 'Demander un devis',
    },
  ],
  testimonials: [
    { name: 'Pierre V.', ville: 'Rueil-Malmaison', note: 5, texte: 'Rats dans la cave de copropriété. Le syndic a fait appel à Allo Nuisible IDF, intervention rapide et sérieuse. Les postes sont relevés tous les mois, problème éradiqué.' },
    { name: 'Samia K.', ville: 'Créteil', note: 5, texte: 'Restaurant avec des souris signalées par un client. Intervention en urgence le soir même, attestation HACCP fournie. Contrôle sanitaire passé sans problème.' },
    { name: 'Henri M.', ville: 'Maisons-Laffitte', note: 5, texte: 'Rats brun dans le jardin et la remise. Technicien très compétent, a trouvé 3 points d\'entrée que je n\'avais pas vus. Résultat en 3 semaines.' },
  ],
  faq: [
    { q: 'Quelle différence entre dératisation et simple piégeage ?', a: 'Un piège posé seul, sans diagnostic, ne règle pas la source. Une dératisation professionnelle combine identification des points d\'entrée, colmatage et un dispositif adapté au lieu : appâts raticides en postes sécurisés, pièges mécaniques ou pièges connectés. Objectif : éliminer la population entière et empêcher le retour.' },
    { q: 'La dératisation est-elle obligatoire pour les restaurants ?', a: 'Les établissements recevant du public (restaurants, hôtels, commerces alimentaires) ont une obligation légale de lutte antiparasitaire. Nous fournissons les attestations HACCP et rapports requis pour vos contrôles sanitaires.' },
    { q: 'Combien de temps faut-il pour éliminer une infestation de rats ?', a: 'En général 2 à 4 semaines. Les rats sont méfiants (néophobes) et mettent du temps à consommer les nouveaux appâts. Un suivi régulier est indispensable pour ajuster le dispositif.' },
    { q: 'Puis-je rester chez moi pendant la dératisation ?', a: 'Oui, dans la plupart des cas. Les postes d\'appâtage sont sécurisés et verrouillés. Nous vous informons de toutes les précautions à prendre, notamment si vous avez des animaux domestiques.' },
    { q: 'Proposez-vous des contrats de dératisation annuels ?', a: 'Oui. Nous proposons des contrats mensuels, trimestriels ou annuels pour les professionnels et les copropriétés, avec visites programmées, relevés et rapports d\'intervention fournis à chaque passage.' },
  ],
  ctaTitle: 'Besoin d\'une dératisation ?\nOn intervient rapidement.',
}

export const metadata = pageMetadata({
  title: 'Dératisation en Île-de-France, intervention le jour même',
  description: 'Dératisation par des techniciens Certibiocide : postes d\'appâtage sécurisés ou pièges connectés, attestation pour les pros. Devis gratuit.',
  path: '/services/deratisation',
})

export default function DeratisationPage() {
  return <ServicePageTemplate data={data} />
}
