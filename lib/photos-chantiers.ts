// Vraies photos d'interventions, publiées par l'entreprise sur sa fiche Google Maps (juin 2026).
// Photo et vidéos rats (logement très encombré) : publiées sur la fiche Google le 01/11/2026.
// Photos cafards : publiées par notre client Gaëtan V. avec son avis Google, utilisées avec son accord (01/11/2026).
// Ne jamais ajouter ici d'image d'illustration ni de ville non vérifiée.
export interface PhotoChantier {
  src: string
  alt: string
  legende: string
  cadrage?: string // object-position quand la photo est recadrée en vignette
}

export const PHOTOS_CHANTIERS = {
  cryoFoyer: {
    src: '/chantiers/cryogenie-punaises-foyer-enfants.jpg',
    alt: 'Technicien en combinaison traitant des punaises de lit par cryogénie dans un foyer pour enfants',
    legende: 'Cryogénie contre les punaises de lit dans un foyer pour enfants',
  },
  cryoSalle: {
    src: '/chantiers/cryogenie-punaises-salle-foyer.jpg',
    alt: 'Bouteille de neige carbonique et lance de cryogénie dans une salle de foyer',
    legende: 'Même foyer : traitement sans insecticide, pièce par pièce',
  },
  litCryo: {
    src: '/chantiers/lit-traite-cryogenie.jpg',
    alt: 'Cadre de lit en bois traité à la cryogénie contre les punaises de lit',
    legende: 'Lit traité à la cryogénie, jusque dans les lattes',
  },
  litEnfant: {
    src: '/chantiers/lit-enfant-apres-traitement-punaises.jpg',
    alt: 'Lit mezzanine d’enfant après une intervention contre les punaises de lit',
    legende: 'Lit d’enfant après intervention contre les punaises de lit',
  },
  nidGuepes: {
    src: '/chantiers/nid-de-guepes-retire-jardin.jpg',
    alt: 'Technicien en tenue de protection tenant un nid de guêpes retiré dans un jardin',
    legende: 'Nid de guêpes retiré dans un jardin',
  },
  toit: {
    src: '/chantiers/intervention-toit-cheminee.jpg',
    alt: 'Technicien intervenant sur un toit, près d’une cheminée',
    legende: 'Intervention en hauteur sur un toit',
  },
  balcon: {
    src: '/chantiers/intervention-balcon-tenue-protection.jpg',
    alt: 'Technicien en combinaison et masque de protection sur un balcon encombré',
    legende: 'Nettoyage d’un balcon en tenue de protection complète',
  },
  cafardsSol: {
    src: '/chantiers/cafards-morts-sol-cuisine.jpg',
    alt: 'Dizaines de cafards morts sur le sol d’une cuisine',
    legende: 'Cafards morts au sol de la cuisine (photo de notre client Gaëtan V., avis Google)',
  },
  cafardsTiroir: {
    src: '/chantiers/cafards-morts-tiroir-cuisine.jpg',
    alt: 'Tiroir de cuisine rempli de cafards morts et de déjections',
    legende: 'Tiroir de cuisine : cafards morts et déjections (photo de Gaëtan V.)',
  },
  cafardsTiroir2: {
    src: '/chantiers/cafards-morts-tiroir-ouvert.jpg',
    alt: 'Tiroir de cuisine ouvert avec des cafards morts au fond',
    legende: 'Autre tiroir de la même cuisine (photo de Gaëtan V.)',
  },
  cafardsMeuble: {
    src: '/chantiers/cafards-morts-pres-meuble.jpg',
    alt: 'Cafards morts au sol entre un meuble et le mur',
    legende: 'Cafards morts entre le meuble et le mur (photo de Gaëtan V.)',
  },
  ratDiogene: {
    src: '/chantiers/rat-capture-technicien.jpg',
    alt: 'Technicien en combinaison et masque à cartouches tenant un rat mort dans un logement très encombré',
    legende: 'Rat ramassé après la dératisation d’un logement très encombré',
  },
  ratPiege: {
    src: '/chantiers/rat-piege-mecanique.jpg',
    alt: 'Rat pris dans un piège mécanique posé au sol, derrière des appareils électroménagers',
    legende: 'Rat pris dans un piège mécanique, derrière l’électroménager',
  },
  ratPlaque: {
    src: '/chantiers/rat-plaque-glu.jpg',
    alt: 'Rat capturé sur une plaque de glu posée au sol, près d’un mur en pierre',
    legende: 'Rat capturé près d’un trou au niveau de la cheminée',
  },
  rongeursGlu: {
    src: '/chantiers/rongeurs-plaques-glu.jpg',
    alt: 'Trois petits rongeurs capturés sur une plaque de glu posée le long d’un mur extérieur',
    legende: 'Trois petits rongeurs capturés le long d’un mur',
    cadrage: '85% center',
  },
  frelonsPerche: {
    src: '/chantiers/frelons-nid-perche-toit.jpg',
    alt: 'Technicien en tenue de protection retirant un gros nid de frelons sous un toit avec une perche télescopique',
    legende: 'Nid de frelons sous le toit, retiré à la perche télescopique',
    cadrage: '30% center',
  },
  frelonsPorte: {
    src: '/chantiers/frelons-nid-porte.jpg',
    alt: 'Perche de traitement dirigée vers un nid de frelons logé au-dessus d’une porte en bois',
    legende: 'Nid de frelons au-dessus d’une porte, traité à distance',
  },
  frelonsArbre: {
    src: '/chantiers/frelons-arbre-echelle.jpg',
    alt: 'Grand arbre sans feuilles avec une échelle posée contre le tronc pour atteindre un nid de frelons',
    legende: 'Nid de frelons en haut d’un arbre, visible après la chute des feuilles',
  },
  balconEncombre: {
    src: '/chantiers/balcon-encombre.jpg',
    alt: 'Balcon couvert de fientes et de débris laissés par les pigeons, avant nettoyage',
    legende: 'Balcon envahi par les pigeons, avant le nettoyage',
  },
} satisfies Record<string, PhotoChantier>

export type PhotoKey = keyof typeof PHOTOS_CHANTIERS

// Chantier Diogène à Maisons-Alfort (94) : photo et vidéos publiées sur la fiche Google le 01/11/2026.
export const CHANTIER_DIOGENE = {
  ville: 'maisons-alfort',
  article: '/blog/deratisation-logement-syndrome-diogene',
  photos: ['ratDiogene'] as PhotoKey[],
  videos: [
    { src: '/chantiers/rats-diogene-video-1.mp4', legende: 'Ramassage d’un rat, placé dans un bac fermé (Maisons-Alfort, 94)' },
    { src: '/chantiers/rats-diogene-video-2.mp4', legende: 'Rats ramassés deux jours après la pose des postes (Maisons-Alfort, 94)' },
  ],
}

// Médias de dératisation affichés sur toutes les pages dératisation (miniatures en haut, galerie au milieu).
export const MEDIAS_DERATISATION = {
  photos: ['ratDiogene', 'ratPiege', 'ratPlaque', 'rongeursGlu'] as PhotoKey[],
  videos: CHANTIER_DIOGENE.videos,
}

// Médias guêpes et frelons, et pigeons (photos de la fiche Google)
export const MEDIAS_FRELONS = { photos: ['frelonsPerche', 'frelonsPorte', 'frelonsArbre', 'nidGuepes', 'toit'] as PhotoKey[] }
export const MEDIAS_PIGEONS = { photos: ['balconEncombre', 'balcon'] as PhotoKey[] }
