// Vraies photos d'interventions, publiées par l'entreprise sur sa fiche Google Maps (juin 2026).
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
} satisfies Record<string, PhotoChantier>

export type PhotoKey = keyof typeof PHOTOS_CHANTIERS
