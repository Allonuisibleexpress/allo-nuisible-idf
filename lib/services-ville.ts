// Maillage local : pour une ville, la liste de nos autres pages service + ville.
// Renforce l'autorité locale (« Allo Nuisible IDF, expert des nuisibles à Maisons-Alfort ») et la navigation.
import { VILLES_PUNAISES } from './villes-punaises'
import { VILLES_DERATISATION } from './villes-deratisation'
import { VILLES_SOURIS } from './villes-souris'
import { VILLES_CAFARDS } from './villes-cafards'
import { VILLES_FOURMIS } from './villes-fourmis'
import { VILLES_ACARIENS } from './villes-acariens'
import { VILLES_CHENILLES } from './villes-chenilles'
import { VILLES_FRELONS, frelonsIndexee } from './villes-frelons'
import { VILLES_PUCES } from './villes-puces'

export type FamilleVille = 'punaises' | 'deratisation' | 'souris' | 'cafards' | 'fourmis' | 'acariens' | 'chenilles' | 'frelons' | 'puces'

const FAMILLES: { id: FamilleVille; base: string; label: string; prix: string; slugs: string[] }[] = [
  { id: 'punaises', base: '/punaises-de-lit', label: 'Punaises de lit', prix: 'dès 290 €', slugs: VILLES_PUNAISES.map((v) => v.slug) },
  { id: 'deratisation', base: '/deratisation', label: 'Dératisation rats et souris', prix: 'dès 120 €', slugs: VILLES_DERATISATION.map((v) => v.slug) },
  { id: 'souris', base: '/souris', label: 'Souris', prix: 'dès 120 €', slugs: VILLES_SOURIS.map((v) => v.slug) },
  { id: 'cafards', base: '/cafards', label: 'Cafards et blattes', prix: 'dès 120 €', slugs: VILLES_CAFARDS.map((v) => v.slug) },
  { id: 'fourmis', base: '/fourmis', label: 'Fourmis', prix: 'dès 120 €', slugs: VILLES_FOURMIS.map((v) => v.slug) },
  { id: 'puces', base: '/puces', label: 'Puces', prix: 'dès 120 €', slugs: VILLES_PUCES.map((v) => v.slug) },
  { id: 'acariens', base: '/acariens', label: 'Acariens', prix: 'dès 120 €', slugs: VILLES_ACARIENS.map((v) => v.slug) },
  { id: 'chenilles', base: '/chenilles-processionnaires', label: 'Chenilles processionnaires', prix: 'dès 89 €', slugs: VILLES_CHENILLES.map((v) => v.slug) },
  { id: 'frelons', base: '/destruction-nid-frelon', label: 'Nid de frelons ou de guêpes', prix: 'dès 89 €', slugs: VILLES_FRELONS.filter((v) => frelonsIndexee(v.slug)).map((v) => v.slug) },
]

// Autres services disponibles dans la même ville (la famille de la page courante est exclue)
export function autresServicesVille(slug: string, sauf: FamilleVille) {
  return FAMILLES.filter((f) => f.id !== sauf && f.slugs.includes(slug)).map((f) => ({ href: `${f.base}/${slug}`, label: f.label, prix: f.prix }))
}

// Toutes les pages nuisible + ville d'une ville (pages /zones, 11/11/2026)
export function pagesVille(slug: string) {
  return FAMILLES.filter((f) => f.slugs.includes(slug)).map((f) => ({ href: `${f.base}/${slug}`, label: f.label }))
}

// Villes d'un département ayant au moins une page nuisible + ville, triées par nom
export function villesDuDepartement(code: string) {
  const toutes = [...VILLES_DERATISATION, ...VILLES_PUNAISES, ...VILLES_SOURIS, ...VILLES_CAFARDS, ...VILLES_FOURMIS, ...VILLES_PUCES, ...VILLES_ACARIENS, ...VILLES_CHENILLES]
  const vues = new Map<string, string>()
  for (const v of toutes) if (v.code === code && !vues.has(v.slug)) vues.set(v.slug, v.nom)
  return Array.from(vues.entries()).map(([slug, nom]) => ({ slug, nom, pages: pagesVille(slug) })).sort((a, b) => a.nom.localeCompare(b.nom, 'fr', { numeric: true }))
}
