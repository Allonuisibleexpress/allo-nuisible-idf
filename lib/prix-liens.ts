// Lien vers la page prix du nuisible (/tarifs/[nuisible]) depuis une adresse ou un mot-clé (20/11/2026 : « relie-les
// entre elles, plein de liens partout »).
export const PRIX_LABELS: Record<string, string> = {
  'punaises-de-lit': 'punaises de lit', deratisation: 'dératisation', cafards: 'cafards', fourmis: 'fourmis', 'guepes-frelons': 'nid de guêpes ou de frelons',
  'chenilles-processionnaires': 'chenilles processionnaires', pigeons: 'dépigeonnage', puces: 'puces', acariens: 'acariens', anthrenes: 'anthrènes', desinfection: 'désinfection',
}
const REGLES: [RegExp, string][] = [
  [/punaise|cryog/i, 'punaises-de-lit'], [/derat|dérat|rongeur|souris|\brats?\b/i, 'deratisation'], [/cafard|blatte/i, 'cafards'], [/fourmi/i, 'fourmis'],
  [/frelon|guepe|guêpe/i, 'guepes-frelons'], [/chenille/i, 'chenilles-processionnaires'], [/pigeon/i, 'pigeons'], [/puce/i, 'puces'],
  [/acarien/i, 'acariens'], [/anthr[eè]ne|mite/i, 'anthrenes'], [/desinfect|désinfect|diog[eè]ne/i, 'desinfection'],
]
export function prixSlug(texte?: string | null): string | null {
  if (!texte) return null
  for (const [re, s] of REGLES) if (re.test(texte)) return s
  return null
}
export const prixHref = (texte?: string | null) => { const s = prixSlug(texte); return s ? `/tarifs/${s}` : null }
export const prixLabel = (texte?: string | null) => { const s = prixSlug(texte); return s ? `Prix ${PRIX_LABELS[s]} : le détail` : null }
