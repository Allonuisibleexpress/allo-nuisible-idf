// Vraies photos d'interventions, publiées par l'entreprise sur sa fiche Google Maps (juin 2026).
// Photo et vidéos rats (logement très encombré) : publiées sur la fiche Google le 01/11/2026.
// Photos cafards : publiées par notre client Gaëtan V. avec son avis Google, utilisées avec son accord (01/11/2026).
// Ne jamais ajouter ici d'image d'illustration ni de ville non vérifiée.
export interface PhotoChantier {
  src: string
  alt: string
  legende: string
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
} satisfies Record<string, PhotoChantier>

export type PhotoKey = keyof typeof PHOTOS_CHANTIERS
