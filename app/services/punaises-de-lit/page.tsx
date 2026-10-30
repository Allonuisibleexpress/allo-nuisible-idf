import { pageMetadata } from '@/lib/seo'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import { VILLES_PUNAISES, GUIDES_PUNAISES } from '@/lib/villes-punaises'

const data: ServiceData = {
  badge: 'Cryogénie · Vapeur sèche · Insecticide · Résultat garanti',
  heroTitle: 'Punaises de lit',
  heroHighlight: 'Éradication totale',
  heroDescription: 'Deux approches professionnelles, choisies selon votre logement : cryogénie ou vapeur sèche, sans produit, et insecticide rémanent longue durée. Souvent, on combine les deux.',
  heroPrices: [
    { price: '250', label: 'Studio' },
    { price: '400', label: 'Appartement' },
    { price: '600', label: 'Maison' },
  ],
  trustBar: ['Certibiocide', 'Résultat garanti', 'Discrétion totale', 'Protocole ANSES', 'Garantie 1 mois'],
  benefits: [
    { icon: 'microscope', title: 'Insecticides de 4e génération', text: 'Les punaises de lit ont développé des résistances aux produits grand public. Nos biocides professionnels agissent sur le système nerveux et restent actifs plusieurs semaines après le passage.' },
    { icon: 'thermo', title: 'Cryogénie et vapeur sèche', text: 'La neige carbonique (environ −78 °C) ou la vapeur sèche à très haute température tuent les punaises et leurs œufs au contact, sans produit chimique. Idéal pour matelas, sommiers, canapés et plinthes : le logement reste utilisable juste après.' },
    { icon: 'search', title: 'Inspection complète du logement', text: 'Matelas, sommier, cadre de lit, plinthes, prises électriques, meubles proches du lit : nos techniciens inspectent chaque recoin pour ne laisser aucun foyer sans traitement.' },
    { icon: 'shield', title: 'Protocole ANSES validé', text: 'Notre protocole suit les recommandations officielles de l\'Agence nationale de sécurité sanitaire. Traitement de toutes les zones de vie, pas seulement le lit.' },
  ],
  process: [
    { title: 'Diagnostic téléphonique', text: 'Vous décrivez les symptômes (piqûres, taches, observations). Nous évaluons le niveau d\'infestation et confirmons le tarif. Devis gratuit, sans engagement.' },
    { title: 'Inspection sur place', text: 'Le technicien inspecte l\'ensemble du logement avec une lampe UV. Identification de tous les foyers et cartographie complète avant traitement.' },
    { title: 'Traitement adapté à votre logement', text: 'Cryogénie ou vapeur sèche sur la literie, les meubles et les recoins, et insecticide rémanent de 4e génération sur les surfaces infestées et adjacentes. Après un traitement insecticide, vous quittez le logement 4 à 6 h.' },
    { title: 'Suivi & garantie', text: 'Retour sous 15 jours pour contrôle. En cas de réapparition dans le délai de garantie, intervention gratuite. Vous dormez tranquille.' },
  ],
  pricing: [
    {
      label: 'Studio',
      price: '250',
      description: 'Jusqu\'à 35 m² · 1 pièce',
      features: ['1 passage complet', 'Insecticide professionnel', 'Zones à risque traitées', 'Garantie 15 jours'],
    },
    {
      label: 'Appartement',
      price: '400',
      description: 'De 35 à 80 m² · 2 à 3 pièces',
      features: ['1 passage complet', 'Toutes pièces traitées', 'Produit rémanent longue durée', 'Cryogénie ou vapeur sèche possible', 'Garantie 1 mois', 'Visite de contrôle incluse'],
      highlight: true,
    },
    {
      label: 'Maison / Grande surface',
      price: 'Sur devis',
      description: 'Plus de 80 m² ou forte infestation',
      features: ['2 passages inclus', 'Traitement thermique en option', 'Toutes pièces + mobilier', 'Garantie 1 mois étendue'],
      cta: 'Obtenir un devis gratuit',
    },
  ],
  faq: [
    { q: 'Comment savoir si j\'ai des punaises de lit ?', a: 'Les signes typiques : piqûres en ligne ou en grappe au réveil, petites taches de sang sur les draps, points noirs (excréments) sur le matelas ou le sommier, et parfois une légère odeur sucrée. Les punaises se cachent dans les coutures du matelas, le sommier, les plinthes.' },
    { q: 'Les punaises de lit arrivent-elles de l\'extérieur ?', a: 'Oui. Elles voyagent dans les bagages, vêtements, meubles d\'occasion et literies. Hôtels, transports en commun, déménagements : tout objet infesté peut introduire des punaises dans votre logement. Elles ne volent pas mais se déplacent très rapidement.' },
    { q: 'Le traitement est-il efficace en une seule intervention ?', a: 'Dans la grande majorité des cas, oui. Notre protocole combine insecticide rémanent et traitement de toutes les zones. Pour les fortes infestations, une seconde intervention peut être nécessaire, incluse dans notre garantie.' },
    { q: 'Faut-il jeter le matelas ?', a: 'Pas forcément. Un matelas peut être traité efficacement. Notre technicien évalue sur place. Si le matelas est trop endommagé ou infesté en profondeur, il vous le signalera. Dans la plupart des cas, le traitement suffit.' },
    { q: 'Proposez-vous un traitement sans insecticide ?', a: 'Oui. La cryogénie (neige carbonique, environ −78 °C) et la vapeur sèche à très haute température tuent les punaises et leurs œufs au contact, sans produit chimique. L\'insecticide rémanent, lui, continue d\'agir après le passage. Selon l\'infestation, le technicien vous propose l\'une, l\'autre ou les deux.' },
    { q: 'Faut-il quitter le logement pendant le traitement ?', a: 'Avec un traitement insecticide, oui, pendant 4 à 6 heures, animaux domestiques compris. Avec la cryogénie ou la vapeur sèche, ce n\'est pas nécessaire. Nos techniciens vous donnent toutes les instructions de préparation avant l\'intervention.' },
  ],
  avis: ['jo', 'lisa', 'lauren'],
  photos: ['cryoFoyer', 'cryoSalle', 'litCryo', 'litEnfant'],
  related: {
    villes: { title: 'Punaises de lit par ville', links: VILLES_PUNAISES.map((v) => ({ href: `/punaises-de-lit/${v.slug}`, label: `Punaises de lit ${v.a} (${v.code})` })) },
    guides: { title: 'Nos guides sur les punaises de lit', links: Object.entries(GUIDES_PUNAISES).map(([slug, label]) => ({ href: `/blog/${slug}`, label })) },
  },
  ctaTitle: 'Des punaises de lit ?\nOn intervient dès aujourd\'hui.',
}

export const metadata = pageMetadata({
  title: 'Punaises de lit : traitement professionnel en Île-de-France',
  description: 'Cryogénie, vapeur sèche ou insecticide rémanent selon votre logement, par des techniciens certifiés. Résultat garanti, 7j/7, devis gratuit.',
  path: '/services/punaises-de-lit',
})

export default function PunaisesPage() {
  return <ServicePageTemplate data={data} />
}
