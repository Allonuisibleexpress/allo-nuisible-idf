import { pageMetadata } from '@/lib/seo'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import { VILLES_PUNAISES } from '@/lib/villes-punaises'

const VIDEOS_CRYO = [
  { src: '/chantiers/cryogenie-cadre-lit-lattes-video.mp4', legende: 'L’Haÿ-les-Roses (94) : cryogénie sur un sommier, sans produit chimique', banniere: true },
  { src: '/chantiers/cryogenie-punaises-foyer-video-1.mp4', legende: 'Cryogénie dans une chambre de foyer' },
  { src: '/chantiers/cryogenie-punaises-foyer-video-2.mp4', legende: 'Traitement le long du mobilier et des plinthes' },
  { src: '/chantiers/cryogenie-punaises-foyer-video-3.mp4', legende: 'Cryogénie sur la literie, chambre suivante' },
]

const data: ServiceData = {
  badge: 'Cryogénie · Sans insecticide · Établissements sensibles · Garantie 1 an',
  devis: 'Devis gratuit cryogénie punaises de lit',
  heroTitle: 'Cryogénie',
  heroHighlight: 'Punaises de lit',
  heroDescription: 'De la neige carbonique, à environ −78 °C, projetée sur la literie, le mobilier et chaque recoin : les punaises de lit et leurs œufs sont tués au contact, sans insecticide ni produit chimique. Traitement chambre par chambre par nos techniciens, 2 passages inclus.',
  heroPrices: [
    { price: '290', label: 'Studio' },
    { price: 'Sur devis', label: 'Appartement' },
    { price: 'Sur devis', label: 'Établissement' },
  ],
  trustBar: ['Sans produit chimique', 'Œufs tués au contact', 'Chambre par chambre', '2 passages inclus', 'Garantie 1 an'],
  benefits: [
    { icon: 'thermo', title: 'Le froid extrême, au contact', text: 'La neige carbonique crée un choc thermique qui tue les adultes, les larves et les œufs là où le jet les touche. Elle se transforme en gaz sans laisser d\'eau : la literie reste presque sèche.' },
    { icon: 'health', title: 'Pour les lieux sensibles', text: 'Foyers, crèches, EHPAD, hôtels, familles avec bébé ou animaux : aucun produit n\'est déposé. C\'est la méthode que nous avons choisie pour un foyer d\'enfants handicapés, vidéos à l\'appui.' },
    { icon: 'search', title: 'Précision dans les recoins', text: 'Coutures et étiquettes du matelas, sommier, tête de lit, jonctions des meubles, plinthes : le jet va là où se cachent les punaises, dans les fentes de l\'épaisseur d\'une carte bancaire.' },
    { icon: 'shield', title: 'Sécurité maîtrisée', text: 'Le logement est libéré pendant l\'intervention puis aéré. Nos techniciens sont équipés et contrôlent l\'aération, car le CO2 ne doit pas s\'accumuler dans une pièce fermée.' },
  ],
  process: [
    { title: 'Inspection', text: 'Lampe et carte en main, le technicien repère les foyers : points noirs, mues, œufs, punaises vivantes, dans un rayon de quelques mètres autour des lits et des canapés.' },
    { title: 'Préparation', text: 'Linge et textiles en sacs fermés, lavés à 60 °C ou passés au froid ; désencombrement autour des lits ; rien n\'est déplacé d\'une pièce infestée vers une pièce saine.' },
    { title: 'Cryogénie, chambre par chambre', text: 'Passage lent de la lance au plus près des surfaces, en suivant coutures, fentes et jonctions, du lit vers l\'extérieur de la pièce. Les insectes morts sont ensuite aspirés.' },
    { title: 'Second passage et garantie', text: 'Retour 10 à 15 jours plus tard pour traiter les punaises écloses entre-temps, avant qu\'elles ne pondent. Garantie 1 an.' },
  ],
  tableau: {
    titre: 'Cryogénie, vapeur ou insecticide : quelle méthode, pour quel cas ?',
    intro: 'Le technicien choisit avec vous selon le logement et l\'infestation, et peut combiner plusieurs méthodes.',
    head: ['Méthode', 'Comment elle agit', 'Idéale pour'],
    rows: [
      ['Cryogénie', 'Neige carbonique à environ −78 °C, tue au contact, sans eau ni produit', 'Fentes, cadres de lit, mobilier, lieux sensibles, logements où l\'on veut éviter l\'humidité'],
      ['Vapeur sèche', 'Vapeur à très haute température, tue au contact', 'Matelas, canapés, rideaux et grandes surfaces textiles'],
      ['Protocole mixte', 'Cryogénie et vapeur, plus une barrière insecticide très légère, renouvelée au second passage', 'Infestations moyennes, locations courte durée, besoin d\'un effet qui dure entre les passages'],
      ['Insecticide', 'Produit professionnel appliqué par un technicien certifié Certibiocide', 'Infestations importantes, nombreuses pièces touchées'],
    ],
  },
  pricing: [
    {
      label: 'Studio',
      price: '290',
      description: 'Une pièce principale',
      features: ['2 passages inclus', 'Cryogénie sur literie et mobilier', 'Aspiration des insectes morts', 'Garantie 1 an'],
    },
    {
      label: 'Appartement ou maison',
      price: 'Sur devis',
      description: 'Plusieurs pièces touchées',
      features: ['2 passages inclus', 'Toutes les pièces touchées', 'Cryogénie et vapeur sèche', 'Conseils pour le linge', 'Garantie 1 an'],
      highlight: true,
    },
    {
      label: 'Établissement',
      price: 'Sur devis',
      description: 'Foyer, hôtel, EHPAD, crèche',
      features: ['Planning chambre par chambre', 'Compte rendu à la direction', 'Intervention discrète', 'Garantie 1 an'],
      cta: 'Demander un devis',
    },
  ],
  avis: ['jo', 'lina', 'christine'],
  chantier: {
    photos: ['cryoFoyer', 'cryoSalle', 'litCryo'],
    videos: VIDEOS_CRYO,
    titre: 'Nos chantiers de cryogénie en images',
    vignettes: 'Nos chantiers en vidéo',
    lien: { href: '/blog/cryogenie-punaises-de-lit-foyer-enfants', label: 'Lire le récit : cryogénie dans un foyer pour enfants handicapés' },
  },
  faq: [
    { q: 'La cryogénie tue-t-elle les œufs de punaises de lit ?', a: 'Oui, au contact : le choc thermique tue les œufs comme les adultes. C\'est pourquoi le jet doit atteindre chaque recoin, et pourquoi un second passage traite ceux qui auraient échappé au premier.' },
    { q: 'Pourquoi faut-il deux passages ?', a: 'La cryogénie n\'a pas d\'effet qui dure : un œuf non touché éclot en une à deux semaines. Le second passage, 10 à 15 jours plus tard, élimine ces jeunes punaises avant qu\'elles ne pondent.' },
    { q: 'Faut-il quitter le logement ?', a: 'En général, oui : nous demandons de quitter le logement pendant le traitement. On aère ensuite, et les pièces peuvent être réutilisées : aucun produit n\'est déposé.' },
    { q: 'Peut-on traiter un matelas par cryogénie ?', a: 'Oui, en insistant sur les coutures, les passepoils et les étiquettes, où se cachent les punaises. On complète souvent par la vapeur sèche et une housse anti-punaises.' },
    { q: 'La cryogénie abîme-t-elle les meubles ?', a: 'Le bois, les tissus et la plupart des matériaux supportent bien le traitement. Le technicien évite les appareils électroniques, le verre et les surfaces fragiles, sensibles au choc thermique et à la condensation.' },
    { q: 'Cryogénie ou insecticide : que choisir ?', a: 'La cryogénie convient aux lieux sensibles et aux infestations localisées. Pour une infestation importante, on passe au protocole mixte ou à l\'insecticide. Le technicien vous conseille après l\'inspection.' },
  ],
  related: {
    villes: { title: 'Punaises de lit par ville', links: VILLES_PUNAISES.map((v) => ({ href: `/punaises-de-lit/${v.slug}`, label: `Punaises de lit ${v.a} (${v.code})` })) },
    guides: { title: 'Pour aller plus loin', links: [
      { href: '/services/punaises-de-lit', label: 'Punaises de lit : toutes nos méthodes' },
      { href: '/blog/cryogenie-punaises-de-lit', label: 'Cryogénie : comment ça marche, efficacité et limites' },
      { href: '/blog/cryogenie-punaises-de-lit-sommier', label: 'Récit : cryogénie sur un sommier à L’Haÿ-les-Roses (94)' },
      { href: '/blog/cryogenie-punaises-de-lit-foyer-enfants', label: 'Récit : cryogénie dans un foyer pour enfants' },
      { href: '/blog/traiter-vetements-punaises-de-lit', label: 'Traiter ses vêtements contre les punaises de lit' },
      { href: '/blog/punaises-de-lit-traitement-insecticide-appartement', label: 'Récit : traitement insecticide en appartement' },
    ] },
  },
  ctaTitle: 'Un traitement par le froid ?\nOn intervient rapidement.',
}

export const metadata = pageMetadata({
  title: 'Cryogénie punaises de lit : traitement sans insecticide',
  description: 'Punaises de lit traitées par cryogénie (−78 °C) : œufs et adultes tués au contact, sans insecticide. 2 passages inclus dès 290 € TTC, garantie 1 an.',
  path: '/services/cryogenie-punaises-de-lit',
})

export default function CryogeniePage() {
  return <ServicePageTemplate data={data} />
}
