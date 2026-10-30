// Vrais avis clients, copiés mot pour mot depuis la fiche Google Maps (relevés le 30/10/2026).
// Ne jamais ajouter d'avis qui ne figure pas sur la fiche. Prénom + initiale uniquement.
export const FICHE_GOOGLE_URL = 'https://maps.google.com/?cid=11887181769674817823'
export const NOTE_GOOGLE = { note: '4,7', nombre: 49 }

export type CleAvis = 'jo' | 'lauren' | 'lisa'

export const AVIS_GOOGLE: Record<CleAvis, { auteur: string; sujet: string; texte: string }> = {
  jo: {
    auteur: 'Jo B.',
    sujet: 'Punaises de lit, Vincennes',
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
}
