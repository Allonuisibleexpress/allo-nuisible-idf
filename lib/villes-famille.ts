// Maillage par département (18/11/2026) : toutes les villes qui ont une page pour un même service,
// pour relier chaque page ville à toutes les autres villes du même département (94, 92, 75 en priorité).
import { VILLES_DERATISATION } from './villes-deratisation'
import { VILLES_PUNAISES } from './villes-punaises'
import { VILLES_SOURIS } from './villes-souris'
import { VILLES_CAFARDS } from './villes-cafards'
import { VILLES_FOURMIS } from './villes-fourmis'
import { VILLES_PUCES } from './villes-puces'
import { VILLES_ACARIENS } from './villes-acariens'
import { VILLES_CHENILLES } from './villes-chenilles'
import { VILLES_FRELONS, frelonsIndexee } from './villes-frelons'
import { CENTRES } from './centres-villes'
import { POLE } from './pole-saint-maurice'

type V = { slug: string; nom: string; code: string }
const simple = (l: { slug: string; nom: string; code: string }[]): V[] => l.map(({ slug, nom, code }) => ({ slug, nom, code }))

export const VILLES_PAR_SERVICE: Record<string, V[]> = {
  '/deratisation': simple(VILLES_DERATISATION as any),
  '/punaises-de-lit': simple(VILLES_PUNAISES as any),
  '/souris': simple(VILLES_SOURIS as any),
  '/cafards': simple(VILLES_CAFARDS as any),
  '/fourmis': simple(VILLES_FOURMIS as any),
  '/puces': simple(VILLES_PUCES as any),
  '/acariens': simple(VILLES_ACARIENS as any),
  '/chenilles-processionnaires': simple(VILLES_CHENILLES as any),
  '/destruction-nid-frelon': simple(VILLES_FRELONS as any).filter((v) => frelonsIndexee(v.slug)),
}

function km(a: string, b: string) {
  const p = CENTRES[a], q = CENTRES[b]
  if (!p || !q) return 999
  const R = 6371, r = Math.PI / 180
  const dLat = (q[0] - p[0]) * r, dLon = (q[1] - p[1]) * r
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(p[0] * r) * Math.cos(q[0] * r) * Math.sin(dLon / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(x))
}

/** Toutes les autres villes du même service et du même département, les plus proches d'abord. */
export function villesDuDepartement(basePath: string, slug: string, code: string): (V & { km: number })[] {
  const liste = VILLES_PAR_SERVICE[basePath] ?? []
  return liste.filter((v) => v.code === code && v.slug !== slug)
    .map((v) => ({ ...v, km: km(slug, v.slug) }))
    .sort((a, b) => a.km - b.km || a.nom.localeCompare(b.nom))
}

/** Villes du pôle Saint-Maurice qui ont une page pour ce service (hors ville courante), pour les pages d'un autre département. */
export function villesPoleService(basePath: string, slug: string): V[] {
  const liste = VILLES_PAR_SERVICE[basePath] ?? []
  return POLE.map((p) => liste.find((v) => v.slug === p.slug)).filter((v): v is V => !!v && v.slug !== slug)
}
