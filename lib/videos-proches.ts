// Vidéos du chantier le plus proche (19/11/2026, demande de l'utilisateur) : sur une page ville sans vidéo tournée
// dans la ville, on montre les vidéos des chantiers les plus proches du même nuisible, en indiquant clairement
// où l'intervention a eu lieu et à quelle distance. Le client reste sur la page de sa ville.
import { CENTRES, km } from './centres-villes'
import { CHANTIERS_PUNAISES_VILLE } from './photos-chantiers'

export type VideoProche = { src: string; legende: string; apercu?: number; banniere: boolean; ville: string; distance: number }

const fmt = (d: number) => (d < 10 ? d.toFixed(1).replace('.', ',') : String(Math.round(d)))

const NOMS: Record<string, string> = {
  creteil: 'Créteil', 'l-hay-les-roses': 'L’Haÿ-les-Roses', 'ivry-sur-seine': 'Ivry-sur-Seine', 'paris-1': 'Paris 1er',
  vincennes: 'Vincennes', 'champigny-sur-marne': 'Champigny-sur-Marne', 'paris-16': 'Paris 16e', 'paris-12': 'Paris 12e', 'maisons-alfort': 'Maisons-Alfort',
}

// « de Saint-Maurice », « du Perreux-sur-Marne », « d’Alfortville », « des Lilas »
export function deVille(nom: string) {
  if (/^Le /.test(nom)) return 'du ' + nom.slice(3)
  if (/^Les /.test(nom)) return 'des ' + nom.slice(4)
  if (/^[AEIOUYÉÈÊÂÎÔHaeiouyéèh]/.test(nom)) return 'd’' + nom
  return 'de ' + nom
}

export function mentionDistance(v: { ville: string; distance: number }, nom: string) {
  return `Chantier réalisé à ${NOMS[v.ville] ?? v.ville}, à ${fmt(v.distance)} km ${deVille(nom)}`
}

// Dératisation : le chantier filmé est celui de Maisons-Alfort (logement Diogène)
export function distanceDe(slug: string, chantier: string): number | null {
  const a = CENTRES[slug], b = CENTRES[chantier]
  return a && b ? km(a, b) : null
}

export function videosProchesPunaises(slug: string, n = 2): VideoProche[] {
  const c = CENTRES[slug]
  if (!c) return []
  return Object.entries(CHANTIERS_PUNAISES_VILLE)
    .filter(([s]) => s !== slug && CENTRES[s])
    .map(([s, ch]) => ({ ...ch.video, ville: s, distance: km(c, CENTRES[s]) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, n)
}
