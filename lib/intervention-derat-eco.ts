// Intervention type de dératisation écologique, sans biocide (12/11/2026, décrite par l'utilisateur) :
// inspection, rebouchage des accès, dispositifs sans biocide (Ekomille, plaques de glu, pièges connectés, pièges électriques,
// pièges mécaniques type tapette), suivi, fermeture des derniers accès à la fin de l'intervention.
export const DISPOSITIFS_SANS_BIOCIDE = [
  { nom: 'Piège Ekomille', texte: 'Capture multiple et continue sur le passage le plus fréquenté : le rongeur reste dans la cuve de l’appareil, il ne va pas mourir dans un mur ni à portée d’un chien.' },
  { nom: 'Pièges connectés', texte: 'Ils signalent chaque capture à distance : nous savons en temps réel où et quand les rongeurs passent, sans attendre la visite de contrôle.' },
  { nom: 'Pièges électriques', texte: 'Le rongeur entre dans une boîte fermée et est tué instantanément par une décharge : aucun produit, aucun accès pour les enfants ou les animaux.' },
  { nom: 'Pièges mécaniques type tapette', texte: 'Des tapettes professionnelles, placées dans des boîtes sécurisées le long des murs et sur les passages repérés : simples, rapides, très efficaces contre les souris.' },
  { nom: 'Plaques de glu', texte: 'Posées dans des endroits fermés et contrôlés (gaines, faux plafonds, locaux techniques), elles servent aussi à repérer les passages et à mesurer l’activité.' },
]

export const ETAPES_DERAT_ECO = [
  { titre: 'Inspection complète du lieu', texte: 'Le technicien inspecte la maison, l’appartement ou le local : crottes, traces de passage, terriers, dégâts, odeurs. Il identifie l’espèce (surmulot, rat noir ou souris) et repère tous les accès : canalisations, soupiraux, bas de portes, gaines, toiture, jardin.' },
  { titre: 'Rebouchage des accès', texte: 'Les passages secondaires sont bouchés dès le premier passage avec des matériaux que les rongeurs ne peuvent pas ronger : grillage métallique fin, laine d’acier, mortier. Les rongeurs restent canalisés sur le passage principal, là où seront posés les pièges.' },
  { titre: 'Installation des dispositifs sans biocide', texte: 'Sur les passages actifs, nous installons le dispositif adapté, sans aucun raticide : piège Ekomille, pièges connectés, pièges électriques, pièges mécaniques type tapette ou plaques de glu, toujours hors de portée des enfants et des animaux.' },
  { titre: 'Suivi des captures', texte: 'Nous contrôlons et relevons les pièges jusqu’à ce qu’il n’y ait plus d’activité. Avec les pièges connectés, les captures sont suivies à distance.' },
  { titre: 'Fermeture des derniers accès', texte: 'À la fin de l’intervention, quand plus aucun rongeur n’est capturé, nous fermons définitivement le dernier passage. Les rongeurs ne peuvent plus revenir.' },
  { titre: 'Garantie 1 an', texte: 'Si les rongeurs reviennent dans l’année, nous revenons.' },
]
