import { pageMetadata } from '@/lib/seo'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import { VILLES_ACARIENS } from '@/lib/villes-acariens'

// Traitement anti-acariens : vapeur sèche, cryogénie, pulvérisation acaricide (méthodes confirmées par l'utilisateur le 31/10/2026).
// Aucune promesse médicale : on réduit les acariens et leurs allergènes, on ne soigne pas une allergie.
// Conseils de prévention repris d'ameli.fr (humidité 40 à 60 %, literie à 60 °C, housses intégrales, aspirateur HEPA).
const data: ServiceData = {
  badge: 'Literie · Canapés · Tapis · Textiles',
  heroTitle: 'Traitement anti-acariens',
  heroHighlight: 'Literie et textiles assainis',
  heroDescription: 'Vapeur sèche, cryogénie ou pulvérisation acaricide sur les matelas, sommiers, oreillers, canapés, tapis et rideaux, par des techniciens certifiés Certibiocide.',
  heroPrices: [
    { price: '120', label: 'Une chambre' },
    { price: 'Sur devis', label: 'Logement complet' },
    { price: 'Sur devis', label: 'Professionnels' },
  ],
  trustBar: ['Vapeur sèche', 'Cryogénie', 'Pulvérisation acaricide', 'Certibiocide', 'Garantie 1 an'],
  benefits: [
    { icon: 'thermo', title: 'Vapeur sèche', text: 'Vapeur à haute température appliquée en profondeur sur le matelas, le sommier, les oreillers, les canapés et les tapis. Aucun produit : la chambre est utilisable dès le passage terminé.' },
    { icon: 'wind', title: 'Cryogénie', text: 'Projection de neige carbonique, très froide, sur les textiles et les recoins. Sans produit et sans humidité, elle convient aux matières qui supportent mal la vapeur.' },
    { icon: 'spray', title: 'Pulvérisation acaricide', text: 'Produit acaricide professionnel pulvérisé sur les textiles et les surfaces quand la population est importante ou que plusieurs pièces sont touchées. Appliqué par un technicien Certibiocide.' },
    { icon: 'clipboard', title: 'Conseils pour durer', text: 'Les acariens vivent dans tous les logements : sans prévention, ils reviennent. Nous vous laissons un plan simple (humidité, aération, literie, housses) pour garder le résultat.' },
  ],
  process: [
    { title: 'Diagnostic', text: 'Repérage des zones à traiter (literie, canapés, tapis, moquettes, rideaux, peluches), de l\'humidité et de l\'aération du logement. Devis gratuit.' },
    { title: 'Préparation', text: 'Nous vous indiquons quoi faire avant notre passage : laver le linge de lit à 60 °C si l\'étiquette le permet, dégager l\'accès au lit et aux textiles à traiter.' },
    { title: 'Traitement', text: 'Vapeur sèche, cryogénie ou pulvérisation acaricide selon les textiles, l\'importance du problème et vos préférences, pièce par pièce.' },
    { title: 'Conseils et suivi', text: 'Aération, taux d\'humidité, housses anti-acariens, entretien de la literie : nous vous expliquons comment éviter que la population ne se reforme.' },
  ],
  pricing: [
    { label: 'Une chambre', price: '120', description: 'Matelas, sommier, oreillers, à la vapeur sèche', features: ['Diagnostic', 'Vapeur sèche en profondeur', 'Conseils de prévention', 'Garantie 1 an'] },
    { label: 'Logement complet', price: 'Sur devis', description: 'Literie, canapés, tapis, rideaux', features: ['Toutes les pièces', 'Vapeur, cryogénie ou acaricide', 'Plan de prévention', 'Garantie 1 an'], highlight: true },
    { label: 'Professionnels', price: 'Sur devis', description: 'Hôtels, crèches, locations meublées', features: ['Intervention planifiée', 'Literie et textiles', 'Attestation d\'intervention', 'Contrat possible'], cta: 'Demander un devis' },
  ],
  avis: ['lisa', 'jo', 'lauren'],
  faq: [
    { q: 'Comment savoir si j\'ai des acariens ?', a: 'Les acariens de la poussière sont invisibles à l\'œil nu et présents dans presque tous les logements. On les soupçonne surtout quand une personne allergique réagit au réveil ou au contact de la literie et des textiles. Le diagnostic d\'une allergie relève d\'un médecin.' },
    { q: 'Le traitement soigne-t-il une allergie aux acariens ?', a: 'Non. Il réduit la quantité d\'acariens et de leurs allergènes dans la literie et les textiles. Le suivi d\'une allergie se fait avec votre médecin ou un allergologue.' },
    { q: 'Quelle méthode choisir ?', a: 'La vapeur sèche et la cryogénie n\'utilisent aucun produit et conviennent à la plupart des textiles. La pulvérisation acaricide est proposée quand la population est importante ou que plusieurs pièces sont concernées. Le technicien vous conseille après le diagnostic.' },
    { q: 'Les acariens reviennent-ils après le traitement ?', a: 'Ils vivent dans tous les logements et peuvent se réinstaller. Pour garder le résultat, l\'Assurance maladie conseille une humidité intérieure entre 40 et 60 %, une aération quotidienne, des housses anti-acariens intégrales et un lavage fréquent de la literie à 60 °C.' },
    { q: 'Combien coûte un traitement anti-acariens ?', a: 'À partir de 120 € TTC pour une chambre traitée à la vapeur sèche. Pour un logement complet ou un professionnel, le prix est établi sur place, selon les pièces et les textiles à traiter. Le devis est gratuit.' },
  ],
  related: {
    villes: { title: 'Traitement des acariens par ville', links: VILLES_ACARIENS.map((v) => ({ href: `/acariens/${v.slug}`, label: `Acariens ${v.a} (${v.code})` })) },
    guides: { title: 'Nos méthodes en détail', links: [
      { href: '/blog/vapeur-seche-punaises-de-lit', label: 'La vapeur sèche : principe et limites' },
      { href: '/blog/cryogenie-punaises-de-lit', label: 'La cryogénie : comment ça marche' },
    ] },
  },
  ctaTitle: 'Des acariens dans la literie ?\nOn s\'en occupe.',
}

export const metadata = pageMetadata({
  title: 'Traitement anti-acariens en Île-de-France, dès 120 €',
  description: 'Acariens dans la literie, le canapé ou les tapis : vapeur sèche, cryogénie ou acaricide par des techniciens Certibiocide. Dès 120 € TTC, devis gratuit.',
  path: '/services/acariens',
})

export default function AcariensPage() {
  return <ServicePageTemplate data={data} />
}
