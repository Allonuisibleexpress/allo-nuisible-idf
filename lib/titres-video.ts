// Récits d'intervention filmés (21/11/2026, demande de l'utilisateur) : la vidéo devient le sujet principal de la page,
// pour que Google affiche la miniature vidéo dans ses résultats. Titre « Vidéo : … » affiché sur deux lignes,
// titre Google (40 à 60 caractères) et vidéo en grand tout en haut de l'article (ancre #video).
export const TITRES_VIDEO: Record<string, { lignes: string[]; seo: string }> = {
  'deratisation-logement-syndrome-diogene': { lignes: ['Vidéo : intervention syndrome de Diogène', 'et dératisation à Maisons-Alfort (94)'], seo: 'Vidéo : syndrome de Diogène et rats à Maisons-Alfort' },
  'punaises-de-lit-creteil-sommier-lattes': { lignes: ['Vidéo : punaises de lit cachées', 'dans un sommier à Créteil (94)'], seo: 'Vidéo : punaises de lit dans un sommier à Créteil' },
  'punaises-de-lit-paris-12-grosse-infestation': { lignes: ['Vidéo : grosse infestation', 'de punaises de lit à Paris 12e'], seo: 'Vidéo : grosse infestation de punaises à Paris 12e' },
  'punaises-de-lit-vincennes-punaises-mortes': { lignes: ['Vidéo : punaises de lit mortes', '10 jours après notre traitement à Vincennes'], seo: 'Vidéo : punaises de lit mortes à Vincennes (94)' },
  'punaises-de-lit-introuvables-goulotte-hotel': { lignes: ['Vidéo : punaises de lit cachées', 'dans un hôtel à Paris 1er'], seo: 'Vidéo : punaises de lit dans un hôtel à Paris 1er' },
  'punaises-de-lit-traitement-insecticide-appartement': { lignes: ['Vidéo : traitement insecticide', 'des punaises de lit en appartement'], seo: 'Vidéo : traitement insecticide des punaises de lit' },
  'punaises-de-lit-ivry-sur-seine-personne-agee': { lignes: ['Vidéo : punaises de lit chez', 'une dame âgée à Ivry-sur-Seine (94)'], seo: 'Vidéo : punaises de lit chez une dame âgée à Ivry' },
  'cryogenie-punaises-de-lit-sommier': { lignes: ['Vidéo : cryogénie contre les punaises', 'de lit à L’Haÿ-les-Roses (94)'], seo: 'Vidéo : cryogénie punaises de lit à L’Haÿ-les-Roses' },
  'cryogenie-punaises-de-lit-foyer-enfants': { lignes: ['Vidéo : cryogénie contre les punaises', 'de lit dans un foyer pour enfants'], seo: 'Vidéo : cryogénie punaises de lit dans un foyer' },
  'nid-frelons-asiatiques-12-metres-nacelle-champigny-sur-marne': { lignes: ['Vidéo : nid de frelons asiatiques à 12 m', 'en nacelle à Champigny-sur-Marne (94)'], seo: 'Vidéo : nid de frelons à 12 m en nacelle, Champigny' },
  'nid-frelons-cheminee-nogent-sur-marne': { lignes: ['Vidéo : nid de frelons', 'dans une cheminée à Nogent-sur-Marne'], seo: 'Vidéo : nid de frelons dans une cheminée à Nogent' },
  'enorme-nid-frelons-asiatiques-arbre': { lignes: ['Vidéo : énorme nid', 'de frelons asiatiques dans un arbre'], seo: 'Vidéo : énorme nid de frelons asiatiques en arbre' },
  'nid-guepes-gretz-armainvilliers': { lignes: ['Vidéo : gros nid de guêpes', 'dans un abri à Gretz-Armainvilliers (77)'], seo: 'Vidéo : nid de guêpes dans un abri à Gretz (77)' },
  'nid-guepes-sous-tuile-essonne': { lignes: ['Vidéo : nid de guêpes', 'sous une tuile en Essonne (91)'], seo: 'Vidéo : nid de guêpes sous une tuile en Essonne' },
}

export const titreVideo = (slug: string) => TITRES_VIDEO[slug]
