// Cryogénie des punaises de lit : page refaite le 13/11/2026 (demande de l'utilisateur : « le top du top », un maximum de termes,
// titre principal « traitement punaises de lit écologique, sans biocide, cryogénie », vidéos de chantier détaillées).
// « Écologique » = sans biocide, défini sur la page (lib/contenu-services/cryogenie.ts). Contenu et sources : même fichier.
// 13/11/2026 : l'ancienne page /services/punaises-de-lit-ecologique est fusionnée ici (redirection permanente dans next.config.mjs).
import { pageMetadata } from '@/lib/seo'
import { maillageService } from '@/lib/maillage-services'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import ArticleService from '@/components/ArticleService'
import VideosDetaillees from '@/components/VideosDetaillees'
import TableauComparatif from '@/components/TableauComparatif'
import { VILLES_PUNAISES } from '@/lib/villes-punaises'
import { CRYO_PARTIE_1, CRYO_PARTIE_2, CRYO_VIDEOS, CRYO_VIDEOS_INTRO, CRYO_FAQ, CRYO_OUTILS } from '@/lib/contenu-services/cryogenie'

const COMPARATIF = {
  titre: 'Traitement écologique ou insecticide : le comparatif',
  intro: 'Le technicien choisit avec vous selon le logement et l’infestation, et peut combiner plusieurs méthodes.',
  head: ['Méthode', 'Comment elle agit', 'Idéale pour'],
  rows: [
    ['Cryogénie', 'Neige carbonique à environ −78 °C, tue au contact, sans eau ni produit', 'Fentes, cadres de lit, lattes, mobilier, lieux sensibles, logements où l’on veut éviter l’humidité'],
    ['Vapeur sèche', 'Vapeur à très haute température, tue au contact', 'Matelas, canapés, rideaux et grandes surfaces textiles'],
    ['Protocole mixte', 'Cryogénie et vapeur, plus une barrière insecticide très légère, renouvelée au second passage', 'Infestations moyennes, locations courte durée, besoin d’un effet qui dure entre les passages'],
    ['Insecticide', 'Produit professionnel appliqué par un technicien certifié Certibiocide', 'Infestations importantes, nombreuses pièces touchées'],
  ],
}

// Le comparatif s'affiche juste avant « Quel est le traitement le plus efficace »
const COUPE = CRYO_PARTIE_2.findIndex((b) => b.h.startsWith('Quel est le traitement'))
// Le tableau des outils suit la section « Traitement écologique des punaises de lit, sans produit chimique »
const COUPE_1 = CRYO_PARTIE_1.findIndex((b) => b.h.startsWith('Traitement écologique des punaises de lit, sans produit chimique')) + 1

const data: ServiceData = {
  badge: 'Traitement écologique (sans biocide) · Cryogénie · Vapeur sèche · Chambre froide · Garantie 1 an',
  devis: 'Devis gratuit traitement écologique des punaises de lit',
  heroTitle: 'Traitement punaises de lit écologique',
  heroHighlight: 'Sans biocide, par cryogénie à −78 °C',
  heroDescription: 'Écologique, c’est-à-dire sans biocide : la cryogénie (ou cryogénisation) tue les punaises de lit et leurs œufs par le froid. De la neige carbonique à environ −78 °C est projetée sur la literie, le mobilier et chaque recoin, sans insecticide ni résidu, complétée si besoin par la vapeur sèche et notre chambre froide à −20 °C. À Paris et en Île-de-France, 2 passages inclus dès 290 €, garantie 1 an. Nos chantiers en vidéo sur cette page.',
  heroPrices: [
    { price: '290', label: 'Studio' },
    { price: 'Sur devis', label: 'Appartement' },
    { price: 'Sur devis', label: 'Établissement' },
  ],
  trustBar: ['Traitement écologique', 'Sans biocide ni insecticide', '−78 °C au contact', 'Œufs compris', '2 passages inclus', 'Garantie 1 an'],
  titres: {
    benefits: 'Pourquoi choisir un traitement écologique par cryogénie ?',
    process: 'Traitement écologique des punaises de lit : le déroulé en 5 étapes',
    pricing: 'Nos formules de traitement écologique, devis gratuit',
    faq: 'Cryogénie et traitement écologique des punaises de lit : vos questions',
  },
  benefits: [
    { icon: 'thermo', title: '−78 °C : œufs et adultes tués au contact', text: 'La neige carbonique crée un choc thermique qui tue les punaises adultes, les larves et les œufs là où le jet les touche.' },
    { icon: 'health', title: 'Écologique : aucun biocide chez vous', text: 'Ni insecticide, ni résidu : le traitement écologique choisi avec un bébé, une femme enceinte, une personne âgée ou des animaux, et dans les établissements.' },
    { icon: 'search', title: 'Jusque dans les moindres fentes', text: 'Coutures et étiquettes du matelas, lattes, tête de lit, jonctions des meubles, plinthes : le jet va là où se cachent les punaises.' },
    { icon: 'wind', title: 'Rien n’est mouillé', text: 'La neige carbonique passe directement à l’état de gaz : le matelas, le sommier et le parquet restent secs. La vapeur sèche et la chambre froide complètent le traitement.' },
    { icon: 'shield', title: 'Sécurité maîtrisée', text: 'La pièce est libérée pendant le traitement puis aérée : le CO2 ne doit pas s’accumuler dans une pièce occupée.' },
    { icon: 'repeat', title: '2 passages, garantie 1 an', text: 'Le second passage, 10 à 15 jours plus tard, traite les punaises écloses entre-temps. Si elles reviennent dans l’année, nous revenons.' },
  ],
  process: [
    { title: 'Diagnostic et devis gratuit', text: 'Vous nous décrivez la situation, photos à l’appui : nous confirmons qu’il s’agit de punaises de lit et donnons le prix avant de venir.' },
    { title: 'Préparation', text: 'Linge en sacs fermés, lavé à plus de 60 °C ; sol dégagé autour des lits ; électronique à l’écart ; rien ne passe d’une pièce infestée à une pièce saine.' },
    { title: 'Cryogénie, du lit vers la pièce', text: 'Passage lent de la lance au plus près des surfaces : matelas, sommier, lattes, cadre, meubles proches, plinthes.' },
    { title: 'Aspiration et aération', text: 'Les insectes morts sont aspirés, la pièce est aérée : vous pouvez revenir, sans délai lié à un produit.' },
    { title: 'Second passage et garantie', text: 'Retour 10 à 15 jours plus tard pour les punaises écloses entre-temps, avant qu’elles ne pondent. Garantie 1 an.' },
  ],
  apresProcess: (
    <>
      <ArticleService blocs={CRYO_PARTIE_1.slice(0, COUPE_1)} />
      <TableauComparatif {...CRYO_OUTILS} />
      <ArticleService blocs={CRYO_PARTIE_1.slice(COUPE_1)} />
      <VideosDetaillees
        titre="Nos chantiers de traitement écologique en vidéo : la cryogénie sur le terrain"
        intro={CRYO_VIDEOS_INTRO}
        videos={CRYO_VIDEOS}
        photos={['cryoFoyer', 'cryoSalle', 'litCryo']}
      />
      <ArticleService blocs={CRYO_PARTIE_2.slice(0, COUPE)} />
      <TableauComparatif {...COMPARATIF} />
      <ArticleService blocs={CRYO_PARTIE_2.slice(COUPE)} />
    </>
  ),
  pricing: [
    {
      label: 'Studio',
      price: '290',
      description: 'Une pièce principale',
      features: ['2 passages inclus', 'Cryogénie sur literie et mobilier', 'Aspiration des insectes morts', 'Écologique : sans biocide', 'Garantie 1 an'],
    },
    {
      label: 'Appartement ou maison',
      price: 'Sur devis',
      description: 'Plusieurs pièces touchées',
      features: ['2 passages inclus', 'Toutes les pièces touchées', 'Cryogénie et vapeur sèche', 'Chambre froide pour les objets', 'Conseils pour le linge', 'Garantie 1 an'],
      highlight: true,
    },
    {
      label: 'Établissement',
      price: 'Sur devis',
      description: 'Foyer, hôtel, EHPAD, crèche, école',
      features: ['Planning chambre par chambre', 'Plan de l’étage et compte rendu', 'Aucun biocide', 'Garantie 1 an'],
      cta: 'Demander un devis',
    },
  ],
  avis: ['jo', 'lina', 'christine'],
  chantier: {
    photos: ['cryoFoyer', 'cryoSalle', 'litCryo'],
    videos: CRYO_VIDEOS.map((v) => ({ src: v.src, legende: v.legende, banniere: true, poster: v.poster })),
    titre: 'Nos chantiers de traitement écologique en images',
    vignettes: 'Nos 6 chantiers de traitement écologique en vidéo',
  },
  galerieDansContenu: true,
  faq: CRYO_FAQ,
  related: {
    extra: maillageService('/services/cryogenie-punaises-de-lit'),
    villes: { title: 'Traitement écologique des punaises de lit : nos villes', links: VILLES_PUNAISES.map((v) => ({ href: `/punaises-de-lit/${v.slug}`, label: `Punaises de lit ${v.a} (${v.code})` })) },
    guides: { title: 'Pour aller plus loin', links: [
      { href: '/services/traitements-sans-produit-chimique', label: 'Tous nos traitements sans produit chimique' },
      { href: '/services/punaises-de-lit', label: 'Punaises de lit : toutes nos méthodes' },
      { href: '/blog/cryogenie-punaises-de-lit', label: 'Le froid tue-t-il les punaises de lit ?' },
      { href: '/blog/cryogenie-punaises-de-lit-sommier', label: 'Récit : cryogénie sur un sommier à L’Haÿ-les-Roses (94)' },
      { href: '/blog/cryogenie-punaises-de-lit-foyer-enfants', label: 'Récit : cryogénie dans un foyer pour enfants' },
      { href: '/blog/punaises-de-lit-ivry-sur-seine-personne-agee', label: 'Récit : énorme infestation chez une dame âgée à Ivry-sur-Seine' },
      { href: '/blog/vapeur-seche-punaises-de-lit', label: 'Vapeur sèche contre les punaises de lit' },
      { href: '/blog/traiter-vetements-punaises-de-lit', label: 'Traiter ses vêtements contre les punaises de lit' },
      { href: '/blog/cycle-de-vie-punaise-de-lit', label: 'Cycle de vie de la punaise de lit en images' },
    ] },
  },
  ctaTitle: 'Un traitement écologique, sans biocide ?\nOn traite vos punaises de lit par le froid.',
}

export const metadata = pageMetadata({
  title: 'Traitement punaises de lit écologique : cryogénie dès 290 €',
  description: 'Traitement écologique des punaises de lit, sans biocide ni produit chimique : cryogénie à −78 °C, œufs tués au contact. Paris et IDF, 2 passages dès 290 €, garantie 1 an.',
  path: '/services/cryogenie-punaises-de-lit',
})

export default function CryogeniePage() {
  return <ServicePageTemplate data={data} />
}
