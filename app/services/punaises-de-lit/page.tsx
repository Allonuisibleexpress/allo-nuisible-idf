import { pageMetadata } from '@/lib/seo'
import { maillageService } from '@/lib/maillage-services'
import { METHODES_PUNAISES, GUIDE_PUNAISES } from '@/lib/contenu-services/punaises'
import { CONTENU_PUNAISES } from '@/lib/contenu-nuisibles/punaises'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import CyclePunaises from '@/components/CyclePunaises'
import VideosDetaillees from '@/components/VideosDetaillees'
import { PUNAISES_VIDEOS, PUNAISES_VIDEOS_INTRO } from '@/lib/contenu-services/videos-chantiers'
import { VILLES_PUNAISES, GUIDES_PUNAISES } from '@/lib/villes-punaises'

const data: ServiceData = {
  badge: 'Urgence 7j/7 · Cryogénie · Vapeur sèche · Insecticide',
  devis: 'Devis gratuit punaises de lit',
  heroTitle: 'Traitement punaises de lit',
  heroHighlight: 'Paris et Île-de-France, dès 290 €',
  heroDescription: 'Deux approches professionnelles, choisies selon votre logement : cryogénie ou vapeur sèche, sans produit, et insecticide rémanent longue durée. Souvent, on combine les deux.',
  urgence: {
    titre: 'Urgence punaises de lit : intervention possible le jour même, 7j/7',
    texte: 'Appelez-nous dès les premières piqûres : selon les disponibilités, un technicien passe dans la journée, week-end compris, partout en Île-de-France.',
  },
  heroPrices: [
    { price: '290', label: 'Studio' },
    { price: 'Sur devis', label: 'T2 ou T3' },
    { price: 'Sur devis', label: 'Maison' },
  ],
  trustBar: ['Certibiocide', 'Résultat garanti', 'Devis gratuit', '2 passages inclus', 'Garantie 1 an'],
  benefits: [
    { icon: 'microscope', title: 'Insecticides professionnels', text: 'Les punaises de lit ont développé des résistances aux produits grand public. Nos biocides professionnels agissent sur le système nerveux et restent actifs plusieurs semaines après le passage.' },
    { icon: 'thermo', title: 'Cryogénie et vapeur sèche', text: 'La neige carbonique (environ −78 °C) ou la vapeur sèche à très haute température tuent les punaises et leurs œufs au contact, sans produit chimique. Idéal pour matelas, sommiers, canapés et plinthes : le logement reste utilisable juste après.' },
    { icon: 'search', title: 'Inspection complète du logement', text: 'Matelas, sommier, cadre de lit, plinthes, prises électriques, meubles proches du lit : nos techniciens inspectent chaque recoin pour ne laisser aucun foyer sans traitement.' },
    { icon: 'shield', title: 'Protocole complet, toutes les pièces', text: 'Notre protocole s\'appuie sur les recommandations officielles (ANSES, ministère de la Santé). Traitement de toutes les zones de vie, pas seulement le lit.' },
  ],
  process: [
    { title: 'Diagnostic téléphonique', text: 'Vous décrivez les symptômes (piqûres, taches, observations). Nous évaluons le niveau d\'infestation et confirmons le tarif. Devis gratuit, sans engagement.' },
    { title: 'Inspection sur place', text: 'Le technicien inspecte l\'ensemble du logement avec une lampe UV. Identification de tous les foyers et cartographie complète avant traitement.' },
    { title: 'Traitement adapté à votre logement', text: 'Cryogénie ou vapeur sèche sur la literie, les meubles et les recoins, et insecticide rémanent de 4e génération sur les surfaces infestées et adjacentes. Après un traitement insecticide, vous quittez le logement 4 heures en moyenne.' },
    { title: 'Suivi & garantie', text: 'Retour sous 15 jours pour contrôle. En cas de réapparition dans le délai de garantie, intervention gratuite. Vous dormez tranquille.' },
  ],
  apresProcess: (
    <>
      <CyclePunaises />
      <VideosDetaillees
        titre="Nos chantiers de punaises de lit en vidéo : ce que nous avons fait"
        intro={PUNAISES_VIDEOS_INTRO}
        videos={PUNAISES_VIDEOS}
        photos={['creteilLattes1', 'cryoFoyer', 'litEnfant']}
      />
    </>
  ),
  methodes: METHODES_PUNAISES,
  guide: GUIDE_PUNAISES,
  contenu: CONTENU_PUNAISES,
  pricing: [
    {
      label: 'Studio',
      price: '290',
      description: 'Une pièce principale',
      features: ['2 passages inclus', 'Insecticide professionnel', 'Zones à risque traitées', 'Garantie 1 an'],
    },
    {
      label: 'T2 ou T3',
      price: 'Sur devis',
      description: 'Appartement de 2 à 3 pièces',
      features: ['2 passages inclus', 'Toutes pièces traitées', 'Produit rémanent longue durée', 'Cryogénie ou vapeur sèche possible', 'Garantie 1 an'],
      highlight: true,
    },
    {
      label: 'Maison / Grande surface',
      price: 'Sur devis',
      description: 'T4, maison ou forte infestation',
      features: ['2 passages inclus', 'Traitement thermique en option', 'Toutes pièces + mobilier', 'Garantie 1 an'],
      cta: 'Obtenir un devis gratuit',
    },
  ],
  faq: [
    { q: 'Comment savoir si j\'ai des punaises de lit ?', a: 'Les signes typiques : piqûres en ligne ou en grappe au réveil, petites taches de sang sur les draps, points noirs (excréments) sur le matelas ou le sommier, et parfois une légère odeur sucrée. Les punaises se cachent dans les coutures du matelas, le sommier, les plinthes.' },
    { q: 'Les punaises de lit arrivent-elles de l\'extérieur ?', a: 'Oui. Elles voyagent dans les bagages, vêtements, meubles d\'occasion et literies. Hôtels, transports en commun, déménagements : tout objet infesté peut introduire des punaises dans votre logement. Elles ne volent pas mais se déplacent très rapidement.' },
    { q: 'Le traitement est-il efficace en une seule intervention ?', a: 'Non, et c’est pour cela que nos deux passages sont toujours inclus dans le prix. Le premier élimine les punaises présentes ; le second, 10 à 15 jours plus tard, élimine les jeunes punaises sorties des œufs entre-temps, avant qu’elles ne pondent. C’est ce second passage qui rend le traitement durable, avec une garantie d’un an.' },
    { q: 'Faut-il jeter le matelas ?', a: 'Pas forcément. Un matelas peut être traité efficacement. Notre technicien évalue sur place. Si le matelas est trop endommagé ou infesté en profondeur, il vous le signalera. Dans la plupart des cas, le traitement suffit.' },
    { q: 'Proposez-vous la détection canine des punaises de lit ?', a: 'Oui, sur devis, à Paris et dans toute l’Île-de-France. Un chien dressé repère les punaises à l’odeur, même cachées : utile quand l’infestation débute, avant un traitement pour localiser les foyers ou après pour vérifier le résultat. Chaque signalement se confirme à l’œil. Voir notre guide sur la détection canine.' },
    { q: 'Proposez-vous un traitement sans insecticide ?', a: 'Oui. La cryogénie (neige carbonique, environ −78 °C) et la vapeur sèche à très haute température tuent les punaises et leurs œufs au contact, sans produit chimique. L\'insecticide rémanent, lui, continue d\'agir après le passage. Selon l\'infestation, le technicien vous propose l\'une, l\'autre ou les deux.' },
    { q: 'Faut-il quitter le logement pendant le traitement ?', a: 'Avec un traitement insecticide, oui, pendant 4 heures en moyenne, animaux domestiques compris. Avec la cryogénie ou la vapeur sèche, ce n\'est pas nécessaire. Nos techniciens vous donnent toutes les instructions de préparation avant l\'intervention.' },
  ],
  avis: ['jo', 'lina', 'christine'],
  photos: ['cryoFoyer', 'cryoSalle', 'litCryo', 'litEnfant'],
  chantier: {
    photos: ['creteilLattes1', 'cryoFoyer'],
    videos: PUNAISES_VIDEOS.slice(0, 5).map((v) => ({ src: v.src, legende: v.legende, banniere: true, poster: v.poster })),
    titre: 'Nos chantiers de punaises de lit en images',
    vignettes: 'Nos chantiers en vidéo',
  },
  galerieDansContenu: true,
  related: {
    extra: maillageService('/services/punaises-de-lit'),
    villes: { title: 'Punaises de lit par ville', links: VILLES_PUNAISES.map((v) => ({ href: `/punaises-de-lit/${v.slug}`, label: `Punaises de lit ${v.a} (${v.code})` })) },
    guides: { title: 'Nos guides sur les punaises de lit', links: [{ href: '/services/cryogenie-punaises-de-lit', label: 'Traitement écologique par cryogénie, sans biocide, en vidéos' }, { href: '/blog/punaises-de-lit-creteil-sommier-lattes', label: 'Chantier à Créteil : punaises dans les sommiers' }, { href: '/blog/punaises-de-lit-paris-12-grosse-infestation', label: 'Chantier à Paris 12e : résultat du premier passage' }, { href: '/blog/cryogenie-punaises-de-lit-sommier', label: 'Chantier à L’Haÿ-les-Roses : cryogénie sur un sommier' }, ...Object.entries(GUIDES_PUNAISES).map(([slug, label]) => ({ href: `/blog/${slug}`, label }))] },
  },
  ctaTitle: 'Des punaises de lit ?\nOn intervient dès aujourd\'hui.',
}

export const metadata = pageMetadata({
  title: 'Punaises de lit : traitement dès 290 €, 2 passages inclus',
  description: 'Cryogénie, vapeur sèche ou insecticide rémanent selon votre logement, par des techniciens certifiés. Résultat garanti, 7j/7, devis gratuit.',
  path: '/services/punaises-de-lit',
})

export default function PunaisesPage() {
  return <ServicePageTemplate data={data} />
}
