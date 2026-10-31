import { pageMetadata } from '@/lib/seo'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import { GUIDES_RONGEURS } from '@/lib/villes-deratisation'
import { VILLES_SOURIS } from '@/lib/villes-souris'

const data: ServiceData = {
  badge: 'Rats · Souris · Ragondins · Particuliers & Pros',
  heroTitle: 'Rongeurs',
  heroHighlight: 'Dératisation certifiée',
  heroDescription: 'Postes d\'appâtage sécurisés ou pièges mécaniques et connectés, selon le lieu. Identification des points d\'entrée, colmatage, attestation pour les professionnels.',
  heroPrices: [
    { price: '120', label: 'Logement' },
    { price: 'Sur devis', label: 'Professionnel' },
    { price: 'Sur devis', label: 'Copropriété' },
  ],
  trustBar: ['Certibiocide', 'Ekomille sans raticide', 'Postes sécurisés', 'Pièges connectés', 'Attestation HACCP', 'Contrats annuels', 'RC Pro incluse'],
  benefits: [
    { icon: 'pin', title: 'Inspection & cartographie complète', text: 'Identification des points d\'entrée, zones de nidification et couloirs de passage. Cartographie détaillée pour un traitement ciblé. On ne traite pas à l\'aveugle.' },
    { icon: 'lock', title: 'Postes d\'appâtage sécurisés', text: 'Boîtiers verrouillés contenant des raticides de 2e génération. Inaccessibles aux enfants et animaux. Relevés réguliers pour contrôler l\'efficacité et ajuster si nécessaire.' },
    { icon: 'zap', title: 'Sans raticide : Ekomille et pièges', text: 'Quand vous le préférez (enfants, animaux, potager) : piège multicapture Ekomille contre les rats, qui garde le rongeur dans une cuve fermée au lieu de le laisser mourir dehors, ou pièges mécaniques, de capture et connectés qui signalent chaque capture.' },
    { icon: 'building', title: 'Professionnels & copropriétés', text: 'Attestations HACCP, rapports d\'intervention et registres de suivi pour restaurants, commerces, EHPAD et syndics. Contrats de maintenance mensuelle ou trimestrielle disponibles.' },
  ],
  process: [
    { title: 'Diagnostic sur place', text: 'Inspection complète : points d\'entrée, couloirs, nids, crottes, traces. Identification précise de l\'espèce (rat brun, souris domestique, mulot) pour adapter le protocole.' },
    { title: 'Installation du dispositif', text: 'Selon le lieu : postes d\'appâtage sécurisés aux points stratégiques, ou pièges mécaniques et connectés. Les rongeurs sont prudents : la phase d\'apprivoisement dure 3 à 7 jours avant qu\'ils approchent un nouveau dispositif.' },
    { title: 'Suivi & relevés', text: 'Retour sous 1 à 2 semaines pour relever les consommations, ajuster les appâts et évaluer l\'efficacité. Plusieurs passages peuvent être nécessaires selon le niveau d\'infestation.' },
    { title: 'Sécurisation & prévention', text: 'Colmatage des points d\'entrée identifiés et conseils pour éviter les réinfestations. Fourniture de l\'attestation d\'intervention pour les professionnels.' },
  ],
  pricing: [
    {
      label: 'Particulier',
      price: '120',
      description: 'Appartement',
      features: ['Inspection complète', '1 à 2 postes sécurisés', 'Suivi inclus', 'Conseils colmatage'],
    },
    {
      label: 'Local professionnel',
      price: 'Sur devis',
      description: 'Restaurant, commerce, bureau',
      features: ['Inspection détaillée', 'Postes sécurisés adaptés', 'Attestation HACCP fournie', 'Rapport d\'intervention', 'Garantie résultat'],
      highlight: true,
    },
    {
      label: 'Copropriété',
      price: 'Sur devis',
      description: 'Parties communes, caves, parkings',
      features: ['Cartographie complète', 'Postes multiples', 'Registre de suivi', 'Contrat annuel disponible', 'Coordination syndic'],
      cta: 'Contacter pour devis',
    },
  ],
  avis: ['lauren', 'jo', 'lisa'],
  faq: [
    { q: 'Comment savoir si j\'ai des rats ou des souris ?', a: 'Crottes allongées et grandes = rats. Petites et pointues = souris. Autres signes : traces de grignotage sur les câbles, emballages ou menuiseries, bruits nocturnes dans les cloisons, traces de passages graisseuses sur les murs.' },
    { q: 'Les rongeurs sont-ils dangereux pour la santé ?', a: 'Oui. Rats et souris transmettent leptospirose, salmonellose et autres maladies via leurs déjections. Ils peuvent aussi provoquer des incendies en rongeant les câbles électriques.' },
    { q: 'Les raticides sont-ils dangereux pour mes animaux ?', a: 'Les raticides de 2e génération sont dangereux pour les animaux. C\'est pourquoi nous utilisons des postes d\'appâtage sécurisés, verrouillés et inaccessibles aux animaux domestiques et aux enfants.' },
    { q: 'Pouvez-vous intervenir sans raticide ?', a: 'Oui. Nous proposons des pièges mécaniques, de capture ou connectés, toujours associés au colmatage des accès. Le raticide en postes sécurisés reste une méthode efficace pour de nombreux cas : le technicien vous conseille selon le lieu et l\'infestation.' },
    { q: 'Combien de temps faut-il pour éliminer une infestation ?', a: 'En général 2 à 4 semaines. Les rongeurs sont néophobes (méfiants envers les nouveaux objets), ce qui demande du temps pour qu\'ils consomment les appâts. Un suivi régulier est essentiel.' },
    { q: 'Proposez-vous des contrats de maintenance ?', a: 'Oui. Contrats mensuels, trimestriels ou annuels pour les professionnels et copropriétés. Visites régulières, relevés et rapports d\'intervention fournis à chaque passage.' },
  ],
  related: {
    villes: { title: 'Souris par ville', links: VILLES_SOURIS.map((v) => ({ href: `/souris/${v.slug}`, label: `Souris ${v.a} (${v.code})` })) },
    guides: { title: 'Nos guides sur les rongeurs', links: [{ href: '/services/deratisation', label: 'Dératisation : notre méthode complète' }, ...Object.entries(GUIDES_RONGEURS).map(([slug, label]) => ({ href: `/blog/${slug}`, label }))] },
  },
  ctaTitle: 'Des rongeurs chez vous ?\nOn intervient rapidement.',
}

export const metadata = pageMetadata({
  title: 'Rats, souris, ragondins : traitement en Île-de-France',
  description: 'Rats ou souris chez vous ? Postes sécurisés ou pièges mécaniques et connectés, colmatage des accès. Particuliers et pros, 7j/7. Devis gratuit.',
  path: '/services/rongeurs',
})

export default function RongeursPage() {
  return <ServicePageTemplate data={data} />
}
