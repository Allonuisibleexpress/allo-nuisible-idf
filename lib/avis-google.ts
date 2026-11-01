// Vrais avis clients, copiés mot pour mot depuis la fiche Google Maps (relevés le 30/10/2026, complétés le 01/11/2026).
// Ne jamais ajouter d'avis qui ne figure pas sur la fiche. Prénom + initiale uniquement.
export const FICHE_GOOGLE_URL = 'https://maps.google.com/?cid=11887181769674817823'
export const NOTE_GOOGLE = { note: '4,7', nombre: 50 }

export type ServiceAvis = 'punaises' | 'deratisation' | 'souris' | 'cafards'

export type CleAvis = 'jo' | 'lauren' | 'lisa' | 'lina' | 'christine' | 'gaetan' | 'pascal' | 'samy' | 'tarek' | 'said'

// ville + service : page ville où l'avis est mis en avant (la ville et le nuisible sont cités dans l'avis)
// mois : mois de publication de l'avis sur Google (septembre 2026 par défaut)
export const AVIS_GOOGLE: Record<CleAvis, { auteur: string; sujet: string; texte: string; ville?: string; service?: ServiceAvis; mois?: string }> = {
  jo: {
    auteur: 'Jo B.',
    sujet: 'Punaises de lit, Vincennes',
    ville: 'vincennes',
    service: 'punaises',
    texte: 'Intervention pour des punaises de lit à Vincennes dans le 94. Très bonne expérience du début à la fin. Le technicien a été très prévenant et professionnel, notamment concernant les risques et les précautions à prendre pour nos animaux de compagnie. Les explications étaient claires et rassurantes. Très bon accueil également de la part de la secrétaire, disponible et agréable au téléphone. Je vous recommande vivement.',
  },
  lauren: {
    auteur: 'Lauren M.',
    sujet: 'Souris',
    texte: 'Je suis vraiment ravie de leur intervention ! J’avais des souris chez moi. La personne est intervenue rapidement, avec beaucoup de gentillesse et de professionnalisme, et a pris le temps de rechercher d’où elles pouvaient venir. Depuis son passage, je n’ai plus vu une seule souris. Je recommande cette entreprise sans hésiter. Merci beaucoup pour votre efficacité.',
  },
  lisa: {
    auteur: 'Lisa O.',
    sujet: 'Intervention à domicile',
    texte: 'Merci pour votre intervention. Le technicien était très compétent et a pris le temps de bien tout m’expliquer. Très professionnel et sympathique. Je recommande.',
  },
  lina: {
    auteur: 'Lina J.',
    sujet: 'Punaises de lit',
    texte: 'Je recommande vivement cette équipe pour leur intervention contre les punaises de lit. Depuis leur passage, je n\'ai plus eu aucun problème. L\'équipe a été à l\'écoute, disponible et vraiment professionnelle du début à la fin. Un grand merci pour leur efficacité !',
  },
  christine: {
    auteur: 'Christine C.',
    sujet: 'Intervention rapide',
    texte: 'Je recommande cette société pour son intervention rapide, son efficacité, ses compétences et son honnêteté.',
  },
  gaetan: {
    auteur: 'Gaëtan V.',
    sujet: 'Cafards, bouches d\'aération',
    texte: 'Bonjour nous avons fait appel à cette société car nous avons eu des cafards venant des bouches d’aérations et je vous conseille les yeux fermés. Les 2 techniciens Yassine et Soufiane sont très professionnels ils sont même revenus à 21h car nous en avions encore un peu et c’est pas toutes les sociétés qui seraient disponibles comme eux. Un grand bravo et merci pour leur professionnalisme et leurs conseils',
  },
  pascal: {
    auteur: 'Pascal R.',
    sujet: 'Dératisation, Vincennes',
    ville: 'vincennes',
    service: 'deratisation',
    mois: 'octobre 2026',
    texte: 'Au top !!! Le technicien a effectué une dératisation chez moi en 2 passages sur la commune de Vincennes dans le 94. Rien a dire. Ponctuel rapide et sérieux. Prix très correct et garantie. Merci',
  },
  samy: {
    auteur: 'Samy K.',
    sujet: 'Souris, Saint-Maurice',
    ville: 'saint-maurice',
    service: 'souris',
    texte: 'Ils sont intervenu chez moi à Saint Maurice pour un problème de souris, entreprise sérieuse et très professionnelle. Intervention rapide, efficace et avec de bons conseils. Je recommande sans hésitation !',
  },
  tarek: {
    auteur: 'Tarekkk',
    sujet: 'Souris, Saint-Maur-des-Fossés',
    ville: 'saint-maur-des-fosses',
    service: 'souris',
    texte: 'Grosse grosse infestation de souris chez moi, ils se sont déplacés en moins d’une heure et m’ont installé un dispositif anti rongeur dans le 94 à saint maur. Voilà 10 jours qui se sont écoulés, plus aucune trace de souris, de rongeur ou de crotte.',
  },
  said: {
    auteur: 'Saïd L.',
    sujet: 'Souris dans les combles, Vincennes',
    ville: 'vincennes',
    service: 'souris',
    texte: 'Le technicien a su gérer mon problème de souris en 2 passages dans les combles. Super société je recommande si vous êtes proches de Vincennes (94)',
  },
}

// Avis à afficher sur une page nuisible + ville
export const avisVille = (service: ServiceAvis, slug: string) =>
  (Object.keys(AVIS_GOOGLE) as CleAvis[]).filter((k) => AVIS_GOOGLE[k].ville === slug && AVIS_GOOGLE[k].service === service)
