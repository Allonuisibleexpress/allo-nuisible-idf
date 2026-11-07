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
  sourisAirbnb: {
    src: '/chantiers/souris-airbnb-carrelage.jpg',
    alt: 'Souris sur le carrelage d’un logement loué en courte durée',
    legende: 'Souris repérée sur le carrelage du logement (Saint-Maur-des-Fossés, 94)',
  },
  frelonsAsiatiques: {
    src: '/chantiers/frelons-asiatiques-nid-arbre.jpg',
    alt: 'Gros nid de frelons asiatiques caché dans le feuillage d’un arbre',
    legende: 'Le nid de frelons asiatiques, caché dans le feuillage',
  },
  sourisGlu: {
    src: '/chantiers/souris-glu-gite.jpg',
    alt: 'Souris capturée sur une plaque de glu posée sur un plancher en bois',
    legende: 'Souris capturée sur plaque, posée sept à huit jours plus tôt',
  },
  frelonsEcoleTech: {
    src: '/chantiers/frelons-nuit-ecole.jpg',
    alt: 'Technicien en tenue de protection, accroupi devant une haie avec un pulvérisateur',
    legende: 'Intervention en fin de journée, derrière une école',
    cadrage: '0% center',
  },
  frelonsEcoleNid: {
    src: '/chantiers/frelons-nuit-ecole.jpg',
    alt: 'Nid de frelons caché dans une haie, traité à la lance',
    legende: 'Le nid, caché au cœur de la haie',
    cadrage: '100% center',
  },
  frelonsBuissonTech: {
    src: '/chantiers/frelons-nid-buisson.jpg',
    alt: 'Technicien en combinaison traitant un buisson avec un pulvérisateur',
    legende: 'Traitement du nid dans le buisson',
    cadrage: '0% center',
  },
  creteilLattes1: {
    src: '/chantiers/punaises-creteil-lattes-1.jpg',
    alt: 'Punaises de lit et déjections autour de la fixation d’une latte de sommier',
    legende: 'Punaises et traces autour de la fixation d’une latte (Créteil, 94)',
  },
  creteilLattes2: {
    src: '/chantiers/punaises-creteil-lattes-2.jpg',
    alt: 'Points noirs de punaises de lit dans le trou de fixation des lattes d’un sommier',
    legende: 'Le trou de fixation des lattes, cachette des punaises (Créteil, 94)',
  },
  trouRat1: {
    src: '/chantiers/rats-trou-mur-1.jpg',
    alt: 'Trou de rat au ras du sol, dans l’angle d’un mur tapissé, avant rebouchage',
    legende: 'Trou de rat dans l’angle d’un mur, au ras du sol (Maisons-Alfort, 94)',
  },
  trouRat2: {
    src: '/chantiers/rats-trou-mur-2.jpg',
    alt: 'Trou de rat au bas d’un mur, à côté d’un radiateur, avec traces de passage',
    legende: 'Trou au bas du mur, à côté du radiateur (Maisons-Alfort, 94)',
  },
  trouRat3: {
    src: '/chantiers/rats-trou-mur-3.jpg',
    alt: 'Trou de rat creusé dans l’angle d’un mur, au-dessus de la plinthe, avec débris au sol',
    legende: 'Trou creusé dans l’angle, au-dessus de la plinthe (Maisons-Alfort, 94)',
  },
} satisfies Record<string, PhotoChantier>

export type PhotoKey = keyof typeof PHOTOS_CHANTIERS

// Chantier Diogène à Maisons-Alfort (94) : photo et vidéos publiées sur la fiche Google le 01/11/2026.
export const CHANTIER_DIOGENE = {
  ville: 'maisons-alfort',
  article: '/blog/deratisation-logement-syndrome-diogene',
  photos: ['ratDiogene', 'trouRat1', 'trouRat3'] as PhotoKey[],
  videos: [
    { src: '/chantiers/rats-diogene-video-1.mp4', legende: 'Ramassage d’un rat, placé dans un bac fermé (Maisons-Alfort, 94)' },
    { src: '/chantiers/rats-diogene-video-2.mp4', legende: 'Rats ramassés deux jours après la pose des postes (Maisons-Alfort, 94)' },
    { src: '/chantiers/rats-trous-cloison-video.mp4', legende: 'Retour sur le chantier : les trous laissés par les rats, avant rebouchage (Maisons-Alfort, 94)' },
  ],
}

// Médias de dératisation affichés sur toutes les pages dératisation (miniatures en haut, galerie au milieu).
export const MEDIAS_DERATISATION = {
  photos: ['ratDiogene', 'trouRat1', 'ratPiege', 'ratPlaque', 'rongeursGlu'] as PhotoKey[],
  videos: CHANTIER_DIOGENE.videos,
}

// Médias guêpes et frelons, et pigeons (photos de la fiche Google)
export const MEDIAS_FRELONS = {
  photos: ['frelonsPerche', 'frelonsPorte', 'frelonsArbre', 'nidGuepes', 'toit'] as PhotoKey[],
  videos: [
    { src: '/chantiers/frelons-cheminee-nogent-sur-marne-video.mp4', legende: 'Nid de frelons dans une cheminée, sur la toiture (Nogent-sur-Marne, 94)', banniere: true },
    { src: '/chantiers/guepes-gretz-armainvilliers-nid-video.mp4', legende: 'Nid de guêpes dans un abri de jardin (Gretz-Armainvilliers, 77)', banniere: true },
  ],
}
export const MEDIAS_PIGEONS = { photos: ['balconEncombre', 'balcon'] as PhotoKey[] }

// Vrais chantiers de punaises de lit, affichés sur la page de la ville où ils ont eu lieu (03/11/2026)
export const CHANTIERS_PUNAISES_VILLE: Record<string, { titre: string; photos?: PhotoKey[]; video: { src: string; legende: string; banniere: boolean; apercu?: number }; article: string }> = {
  creteil: {
    titre: 'Notre chantier à Créteil : punaises localisées dans les sommiers',
    photos: ['creteilLattes1'],
    video: { src: '/chantiers/punaises-creteil-lattes-video.mp4', legende: 'Punaises dans les trous des lattes du sommier (Créteil, 94)', banniere: true },
    article: '/blog/punaises-de-lit-creteil-sommier-lattes',
  },
  'l-hay-les-roses': {
    titre: 'Notre chantier à L’Haÿ-les-Roses : cryogénie sur un sommier',
    video: { src: '/chantiers/cryogenie-cadre-lit-lattes-video.mp4', legende: 'Cryogénie sur un sommier, sans produit chimique (L’Haÿ-les-Roses, 94)', banniere: true },
    article: '/blog/cryogenie-punaises-de-lit-sommier',
  },
  'ivry-sur-seine': {
    titre: 'Notre chantier à Ivry-sur-Seine : énorme infestation chez une personne âgée',
    video: { src: '/chantiers/punaises-ivry-lit-medicalise-video.mp4', legende: 'Énorme infestation de punaises de lit autour d’un lit médicalisé (Ivry-sur-Seine, 94)', banniere: true, apercu: 12.5 },
    article: '/blog/punaises-de-lit-ivry-sur-seine-personne-agee',
  },
  'paris-1': {
    titre: 'Notre chantier à Paris 1er : les punaises cachées dans les goulottes d’un hôtel',
    video: { src: '/chantiers/punaises-goulotte-hotel-video.mp4', legende: 'Punaises de lit cachées dans une goulotte électrique, dans un hôtel (Paris 1er)', banniere: true, apercu: 4 },
    article: '/blog/punaises-de-lit-introuvables-goulotte-hotel',
  },
  vincennes: {
    titre: 'Notre chantier à Vincennes : grosse infestation, le résultat 10 jours après',
    video: { src: '/chantiers/punaises-vincennes-punaises-mortes-video.mp4', legende: '10 jours après notre passage : le sol couvert de punaises de lit mortes (Vincennes, 94)', banniere: true, apercu: 8.5 },
    article: '/blog/punaises-de-lit-vincennes-punaises-mortes',
  },
  'paris-12': {
    titre: 'Notre chantier à Paris 12e : le résultat du premier passage',
    video: { src: '/chantiers/punaises-paris-12-infestation-video.mp4', legende: 'Punaises mortes au sol : résultat du premier passage, avant le deuxième (Paris 12e)', banniere: true },
    article: '/blog/punaises-de-lit-paris-12-grosse-infestation',
  },
}
