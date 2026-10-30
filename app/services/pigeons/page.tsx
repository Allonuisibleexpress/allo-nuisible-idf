import { pageMetadata } from '@/lib/seo'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'

const data: ServiceData = {
  badge: 'Pics · Filets · Dispositifs électriques · Sans nuire aux oiseaux',
  heroTitle: 'Pigeons envahissants',
  heroHighlight: 'Protection permanente',
  heroDescription: 'Pics inox, filets sur mesure, dispositifs répulsifs : on sécurise vos toits, rebords, balcons et façades durablement. Intervention en hauteur sécurisée.',
  heroPrices: [
    { price: '150', label: 'Balcon, rebord' },
    { price: 'Sur devis', label: 'Terrasse' },
    { price: 'Sur devis', label: 'Façade' },
  ],
  trustBar: ['Intervention en hauteur', 'Pics inox longue durée', 'Filets sur mesure', 'Sans nuire aux oiseaux', 'Discret et esthétique'],
  benefits: [
    { icon: 'pin', title: 'Pics anti-pose inox', text: 'Fixation sur rebords, corniches, gouttières et toitures. Acier inoxydable galvanisé, résistant aux UV et aux intempéries. Solution la plus utilisée et la plus durable en milieu urbain.' },
    { icon: 'net', title: 'Filets de protection sur mesure', text: 'Filets en polypropylène haute résistance découpés aux dimensions exactes de votre balcon, cour intérieure ou façade. Empêche totalement l\'accès des pigeons aux zones protégées.' },
    { icon: 'zap', title: 'Dispositif électrique discret', text: 'Câble électrifié à basse tension sur les zones de pose préférentielles. Indolore et invisible, idéal pour les bâtiments classés, monuments historiques ou façades Haussmanniennes.' },
  ],
  process: [
    { title: 'Visite d\'évaluation', text: 'Inspection des zones infestées, identification des postes de repos et de nidification. Évaluation de la meilleure solution technique selon votre bâtiment et vos contraintes esthétiques.' },
    { title: 'Devis détaillé', text: 'Présentation des solutions adaptées avec tarif précis avant toute intervention. Pas de mauvaise surprise : tout est confirmé par écrit avant le démarrage des travaux.' },
    { title: 'Installation professionnelle', text: 'Nos techniciens interviennent avec les équipements de sécurité requis pour le travail en hauteur (harnais, nacelle si nécessaire). Installation propre, rapide et discrète.' },
    { title: 'Garantie & suivi', text: 'Nos installations sont garanties contre les défauts de pose. En cas de contournement par les pigeons, nous revenons pour ajuster et compléter la protection.' },
  ],
  pricing: [
    {
      label: 'Rebord / Corniche',
      price: '150',
      description: 'Pics anti-pigeons inox, pose comprise',
      features: ['Pics inox galvanisé', 'Pose professionnelle', 'Résistant 10+ ans', 'Nettoyage des fientes inclus'],
    },
    {
      label: 'Balcon / Terrasse',
      price: 'Sur devis',
      description: 'Filet sur mesure',
      features: ['Filet sur mesure', 'Fixation discrète', 'Ouverture zippée possible', 'Garantie pose 2 ans', 'Esthétique préservée'],
      highlight: true,
    },
    {
      label: 'Façade / Toiture',
      price: 'Sur devis',
      description: 'Grande surface ou accès difficile',
      features: ['Étude technique complète', 'Nacelle si nécessaire', 'Solution sur mesure', 'Garantie étendue', 'Coordination syndic/copro'],
      cta: 'Demander une étude',
    },
  ],
  faq: [
    { q: 'Les pics anti-pigeons font-ils mal aux oiseaux ?', a: 'Non. Les pics empêchent physiquement les pigeons de se poser sans les blesser. Ils ne constituent pas de piège et n\'infligent aucune douleur. C\'est une méthode 100% humaine et légale.' },
    { q: 'Les fientes de pigeons sont-elles dangereuses ?', a: 'Oui. Les fientes de pigeon peuvent transmettre la salmonellose, la psittacose et des champignons pathogènes (Cryptococcus, Histoplasma). Elles sont aussi très corrosives pour les façades, toitures et véhicules.' },
    { q: 'Faut-il une autorisation pour installer un filet ?', a: 'En copropriété, une autorisation du syndic et du conseil syndical est généralement nécessaire. Nous pouvons vous fournir un dossier technique pour faciliter cette démarche.' },
    { q: 'Les dispositifs résistent-ils aux intempéries ?', a: 'Oui. Nos pics sont en acier inoxydable galvanisé résistant aux UV, à la pluie et au gel. Les filets sont en polypropylène traité anti-UV avec une durée de vie de 10 à 15 ans.' },
    { q: 'Combien de temps dure la pose ?', a: 'De 2 heures à une journée complète selon la surface à protéger. Nos équipes interviennent en hauteur avec les équipements de sécurité requis. Aucune nuisance pour les occupants.' },
  ],
  ctaTitle: 'Des pigeons envahissants ?\nOn protège votre bien.',
}

export const metadata = pageMetadata({
  title: 'Dépigeonnage : pics, filets et répulsifs en Île-de-France',
  description: 'Pics inox, filets sur mesure et dispositifs répulsifs pour protéger toits, rebords, balcons et façades, sans nuire aux oiseaux. Devis gratuit.',
  path: '/services/pigeons',
})

export default function PigeonsPage() {
  return <ServicePageTemplate data={data} />
}
