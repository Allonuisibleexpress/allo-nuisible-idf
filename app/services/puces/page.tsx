import { pageMetadata } from '@/lib/seo'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import { VILLES_PUCES } from '@/lib/villes-puces'

// Traitement contre les puces (créé le 09/11/2026). Prix aligné sur Allo Nuisible Express : dès 120 € TTC.
// Faits sourcés : Wikipédia (Ctenocephalides felis, Siphonaptera), cités sur /blog/puces-tout-savoir.
const data: ServiceData = {
  badge: 'Logement · Animaux · Sols et textiles',
  devis: 'Devis gratuit puces',
  heroTitle: 'Traitement contre les puces',
  heroHighlight: 'Paris, Val-de-Marne et Hauts-de-Seine',
  heroDescription: 'Piqûres aux chevilles, chat ou chien qui se gratte, puces de parquet au retour de vacances : nos techniciens certifiés traitent tout le logement, en lien avec le traitement de vos animaux chez le vétérinaire.',
  heroPrices: [
    { price: '120', label: 'Appartement' },
    { price: 'Sur devis', label: 'Maison' },
    { price: 'Sur devis', label: 'Professionnels' },
  ],
  trustBar: ['Insecticide professionnel', 'Second passage si besoin', 'Certibiocide', 'Garantie 1 an', '7j/7'],
  benefits: [
    { icon: 'spray', title: 'Traitement de tout le logement', text: 'Insecticide professionnel sur les sols, les fentes du parquet, les plinthes, les tapis, les canapés et le couchage de l’animal : là où vivent les œufs, les larves et les cocons.' },
    { icon: 'repeat', title: 'Second passage contre les cocons', text: 'Les cocons protègent les puces en formation. Un second passage touche celles qui sortent dans les semaines suivantes.' },
    { icon: 'health', title: 'En lien avec le vétérinaire', text: 'Votre vétérinaire traite l’animal, nous traitons la maison : c’est la seule façon de casser le cycle des puces.' },
    { icon: 'search', title: 'Recherche de l’origine', text: 'Sans animal ? Nous cherchons d’où viennent les puces : ancien occupant, rongeurs des caves, jardin, meuble d’occasion.' },
  ],
  process: [
    { title: 'Appel ou photo', text: 'Une photo des piqûres ou de l’insecte suffit souvent pour confirmer qu’il s’agit de puces. Devis gratuit.' },
    { title: 'Préparation', text: 'Aspiration complète (sac jeté dehors), lavage à 60 °C du couchage et des plaids, sols dégagés.' },
    { title: 'Traitement', text: 'Insecticide professionnel sur les sols, les textiles et les zones de repos de l’animal, en insistant sur les fentes et le dessous des meubles.' },
    { title: 'Second passage et suivi', text: 'Aspiration quotidienne quelques semaines, second passage si besoin. Garantie 1 an.' },
  ],
  pricing: [
    { label: 'Appartement', price: '120', description: 'Sols, textiles et couchage de l’animal', features: ['Toutes les pièces', 'Insecticide professionnel', 'Conseils de préparation', 'Garantie 1 an'] },
    { label: 'Maison', price: 'Sur devis', description: 'Toutes les pièces, garage et véranda', features: ['Traitement complet', 'Second passage si besoin', 'Recherche de l’origine', 'Garantie 1 an'], highlight: true },
    { label: 'Professionnels', price: 'Sur devis', description: 'Locations meublées, hôtels, pensions', features: ['Intervention planifiée', 'Attestation', 'Suivi', 'Contrat possible'], cta: 'Demander un devis' },
  ],
  avis: ['lisa', 'christine', 'lina'],
  faq: [
    { q: 'Comment savoir si j’ai des puces ?', a: 'Piqûres groupées aux chevilles et aux mollets, animal qui se gratte, petits grains noirs dans son pelage qui laissent une trace rouge sur un papier humide : ce sont des excréments de puces.' },
    { q: 'Combien de temps vit une puce ?', a: 'Son cycle complet dure de 12 à 174 jours selon la température et l’humidité. Un adulte peut attendre plusieurs semaines dans son cocon, et jeûner plusieurs mois si les conditions lui conviennent.' },
    { q: 'Les puces transmettent-elles des maladies ?', a: 'Elles peuvent transmettre un ténia (Dipylidium caninum) à l’animal, et plus rarement des bactéries comme celles du typhus murin ou de la maladie des griffes du chat. Ces maladies restent rares en France.' },
    { q: 'Faut-il quitter le logement pendant le traitement ?', a: 'Oui, quelques heures, le temps que le produit sèche. Le technicien vous indique quand revenir et quelles précautions prendre pour les enfants et les animaux.' },
    { q: 'Combien coûte un traitement contre les puces ?', a: 'À partir de 120 € TTC pour un appartement. Pour une maison ou un professionnel, le prix est fixé sur devis, gratuit.' },
  ],
  related: {
    villes: { title: 'Traitement des puces par ville', links: VILLES_PUCES.map((v) => ({ href: `/puces/${v.slug}`, label: `Puces ${v.a} (${v.code})` })) },
    guides: { title: 'Pour tout comprendre', links: [
      { href: '/blog/puces-tout-savoir', label: 'Puces : origine, cycle de vie et traitement' },
      { href: '/identifier-nuisible', label: 'Identifier une petite bête qui saute' },
      { href: '/blog/acariens-ou-punaises-de-lit', label: 'Piqûres : acariens, punaises ou puces ?' },
    ] },
  },
  ctaTitle: 'Des puces chez vous ?\nOn s’en occupe.',
}

export const metadata = pageMetadata({
  title: 'Traitement puces : logement traité dès 120 €, 7j/7',
  description: 'Puces dans la maison, piqûres aux chevilles, puces de parquet : traitement du logement par des techniciens Certibiocide, en lien avec le vétérinaire. Dès 120 € TTC.',
  path: '/services/puces',
})

export default function PucesPage() {
  return <ServicePageTemplate data={data} />
}
