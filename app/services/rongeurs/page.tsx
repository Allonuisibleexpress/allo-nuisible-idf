import { pageMetadata } from '@/lib/seo'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'

const data: ServiceData = {
  badge: 'Rats · Souris · Ragondins · Particuliers & Pros',
  heroTitle: 'Rongeurs',
  heroHighlight: 'Dératisation certifiée',
  heroDescription: 'Postes d\'appâtage sécurisés, identification des points d\'entrée, colmatage. Attestation fournie pour les professionnels. Contrats de maintenance disponibles.',
  heroPrices: [
    { price: '150', label: 'Logement' },
    { price: '280', label: 'Professionnel' },
    { price: '400', label: 'Copropriété' },
  ],
  trustBar: ['Certibiocide', 'Postes sécurisés', 'Attestation HACCP', 'Contrats annuels', 'RC Pro incluse'],
  benefits: [
    { icon: 'pin', title: 'Inspection & cartographie complète', text: 'Identification des points d\'entrée, zones de nidification et couloirs de passage. Cartographie détaillée pour un traitement ciblé. On ne traite pas à l\'aveugle.' },
    { icon: 'lock', title: 'Postes d\'appâtage sécurisés', text: 'Boîtiers verrouillés contenant des raticides de 2e génération. Inaccessibles aux enfants et animaux. Relevés réguliers pour contrôler l\'efficacité et ajuster si nécessaire.' },
    { icon: 'building', title: 'Professionnels & copropriétés', text: 'Attestations HACCP, rapports d\'intervention et registres de suivi pour restaurants, commerces, EHPAD et syndics. Contrats de maintenance mensuelle ou trimestrielle disponibles.' },
  ],
  process: [
    { title: 'Diagnostic sur place', text: 'Inspection complète : points d\'entrée, couloirs, nids, crottes, traces. Identification précise de l\'espèce (rat brun, souris domestique, mulot) pour adapter le protocole.' },
    { title: 'Installation des postes', text: 'Mise en place de postes d\'appâtage sécurisés aux points stratégiques. Les rongeurs sont prudents : la phase d\'apprivoisement dure 3 à 7 jours avant qu\'ils consomment les appâts.' },
    { title: 'Suivi & relevés', text: 'Retour sous 1 à 2 semaines pour relever les consommations, ajuster les appâts et évaluer l\'efficacité. Plusieurs passages peuvent être nécessaires selon le niveau d\'infestation.' },
    { title: 'Sécurisation & prévention', text: 'Colmatage des points d\'entrée identifiés et conseils pour éviter les réinfestations. Fourniture de l\'attestation d\'intervention pour les professionnels.' },
  ],
  pricing: [
    {
      label: 'Particulier',
      price: '150',
      description: 'Logement jusqu\'à 100 m²',
      features: ['Inspection complète', '1 à 2 postes sécurisés', 'Suivi inclus', 'Conseils colmatage'],
    },
    {
      label: 'Local professionnel',
      price: '280',
      description: 'Restaurant, commerce, bureau',
      features: ['Inspection détaillée', 'Postes sécurisés adaptés', 'Attestation HACCP fournie', 'Rapport d\'intervention', 'Garantie résultat'],
      highlight: true,
    },
    {
      label: 'Copropriété',
      price: '400',
      description: 'Parties communes, caves, parkings',
      features: ['Cartographie complète', 'Postes multiples', 'Registre de suivi', 'Contrat annuel disponible', 'Coordination syndic'],
      cta: 'Contacter pour devis',
    },
  ],
  testimonials: [
    { name: 'François B.', ville: 'Maisons-Laffitte', note: 5, texte: 'Des rats dans le garage. Inspection très sérieuse, le technicien a trouvé le point d\'entrée que je n\'avais pas vu. Problème réglé en 2 semaines.' },
    { name: 'Nadia C.', ville: 'Enghien-les-Bains', note: 5, texte: 'Souris dans la cuisine d\'un restaurant. Intervention rapide, attestation fournie pour notre prochain contrôle sanitaire. Très professionnel.' },
    { name: 'Thomas R.', ville: 'Nogent-sur-Marne', note: 5, texte: 'Contrat annuel pour notre copropriété. Les relevés sont réguliers et les rapports complets. Syndic et copropriétaires satisfaits.' },
  ],
  faq: [
    { q: 'Comment savoir si j\'ai des rats ou des souris ?', a: 'Crottes allongées et grandes = rats. Petites et pointues = souris. Autres signes : traces de grignotage sur les câbles, emballages ou menuiseries, bruits nocturnes dans les cloisons, traces de passages graisseuses sur les murs.' },
    { q: 'Les rongeurs sont-ils dangereux pour la santé ?', a: 'Oui. Rats et souris transmettent leptospirose, salmonellose et autres maladies via leurs déjections. Ils peuvent aussi provoquer des incendies en rongeant les câbles électriques.' },
    { q: 'Les raticides sont-ils dangereux pour mes animaux ?', a: 'Les raticides de 2e génération sont dangereux pour les animaux. C\'est pourquoi nous utilisons des postes d\'appâtage sécurisés, verrouillés et inaccessibles aux animaux domestiques et aux enfants.' },
    { q: 'Combien de temps faut-il pour éliminer une infestation ?', a: 'En général 2 à 4 semaines. Les rongeurs sont néophobes (méfiants envers les nouveaux objets), ce qui demande du temps pour qu\'ils consomment les appâts. Un suivi régulier est essentiel.' },
    { q: 'Proposez-vous des contrats de maintenance ?', a: 'Oui. Contrats mensuels, trimestriels ou annuels pour les professionnels et copropriétés. Visites régulières, relevés et rapports d\'intervention fournis à chaque passage.' },
  ],
  ctaTitle: 'Des rongeurs chez vous ?\nOn intervient rapidement.',
}

export const metadata = pageMetadata({
  title: 'Rats, souris, ragondins : traitement en Île-de-France',
  description: 'Rats ou souris chez vous ? Identification des points d\'entrée, postes sécurisés et colmatage. Particuliers et professionnels, 7j/7. Devis gratuit.',
  path: '/services/rongeurs',
})

export default function RongeursPage() {
  return <ServicePageTemplate data={data} />
}
