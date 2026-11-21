// Sélecteur « Vous souhaitez une intervention dans votre secteur ? » des pages service (22/11/2026, demande de
// l'utilisateur) : le client choisit son département puis sa ville (ordre alphabétique) et arrive sur la page locale.
// Calculé côté serveur : seuls les noms et les liens sont envoyés au navigateur.
import { VILLES_PUNAISES } from '@/lib/villes-punaises'
import { VILLES_DERATISATION } from '@/lib/villes-deratisation'
import { VILLES_CAFARDS } from '@/lib/villes-cafards'
import { VILLES_PUCES } from '@/lib/villes-puces'
import { VILLES_FOURMIS } from '@/lib/villes-fourmis'
import { VILLES_ACARIENS } from '@/lib/villes-acariens'
import { VILLES_ANTHRENES } from '@/lib/villes-anthrenes'
import { VILLES_CHENILLES } from '@/lib/villes-chenilles'
import { VILLES_FRELONS, frelonsIndexee } from '@/lib/villes-frelons'
import { VILLES_SOURIS } from '@/lib/villes-souris'

export type SecteurVille = { nom: string; href: string }
export type SecteurDep = { code: string; nom: string; pageDep?: { href: string; label: string }; villes: SecteurVille[] }
export type Secteur = { service: string; deps: SecteurDep[] }

type V = { slug: string; nom: string; code: string }

// Départements, du plus proche de notre base de Saint-Maurice au plus éloigné
const DEPS: { code: string; nom: string; slug: string }[] = [
  { code: '94', nom: 'Val-de-Marne', slug: 'val-de-marne' },
  { code: '75', nom: 'Paris', slug: 'paris' },
  { code: '92', nom: 'Hauts-de-Seine', slug: 'hauts-de-seine' },
  { code: '93', nom: 'Seine-Saint-Denis', slug: 'seine-saint-denis' },
  { code: '91', nom: 'Essonne', slug: 'essonne' },
  { code: '78', nom: 'Yvelines', slug: 'yvelines' },
  { code: '77', nom: 'Seine-et-Marne', slug: 'seine-et-marne' },
]

// Service → pages ville ; depBase = pages « service + département » quand elles existent
const SERVICES: Record<string, { service: string; base: string; villes: V[]; depBase?: string }> = {
  '/services/punaises-de-lit': { service: 'Punaises de lit', base: '/punaises-de-lit', villes: VILLES_PUNAISES, depBase: '/punaises-de-lit' },
  '/services/cryogenie-punaises-de-lit': { service: 'Punaises de lit', base: '/punaises-de-lit', villes: VILLES_PUNAISES, depBase: '/punaises-de-lit' },
  '/services/deratisation': { service: 'Dératisation', base: '/deratisation', villes: VILLES_DERATISATION, depBase: '/deratisation' },
  '/services/deratisation-ecologique': { service: 'Dératisation', base: '/deratisation', villes: VILLES_DERATISATION, depBase: '/deratisation' },
  '/services/cafards-blattes': { service: 'Cafards', base: '/cafards', villes: VILLES_CAFARDS, depBase: '/cafards' },
  '/services/puces': { service: 'Puces', base: '/puces', villes: VILLES_PUCES, depBase: '/puces' },
  '/services/fourmis': { service: 'Fourmis', base: '/fourmis', villes: VILLES_FOURMIS },
  '/services/acariens': { service: 'Acariens', base: '/acariens', villes: VILLES_ACARIENS },
  '/services/anthrenes': { service: 'Anthrènes', base: '/anthrenes', villes: VILLES_ANTHRENES },
  '/services/chenilles-processionnaires': { service: 'Chenilles processionnaires', base: '/chenilles-processionnaires', villes: VILLES_CHENILLES },
  '/services/guepes-frelons': { service: 'Nid de frelons', base: '/destruction-nid-frelon', villes: VILLES_FRELONS.filter((v) => frelonsIndexee(v.slug)), depBase: '/destruction-nid-frelon' },
  '/souris': { service: 'Souris', base: '/souris', villes: VILLES_SOURIS, depBase: '/souris' },
}

// Ordre alphabétique français (« Paris 2e » avant « Paris 10e »)
const alpha = (a: SecteurVille, b: SecteurVille) => a.nom.localeCompare(b.nom, 'fr', { numeric: true, sensitivity: 'base' })

export function secteurService(path: string): Secteur | undefined {
  const s = SERVICES[path]
  if (s) {
    const deps = DEPS.map((d) => {
      const vus = new Set<string>()
      const villes = s.villes
        .filter((v) => v.code === d.code && !vus.has(v.slug) && vus.add(v.slug))
        .map((v) => ({ nom: v.nom, href: `${s.base}/${v.slug}` }))
        .sort(alpha)
      return {
        code: d.code, nom: d.nom, villes,
        pageDep: s.depBase ? { href: `${s.depBase}/${d.slug}`, label: `${s.service} : tout le département ${d.nom === 'Paris' ? 'de Paris' : `(${d.code})`}` } : undefined,
      }
    }).filter((d) => d.villes.length || d.pageDep)
    return { service: s.service, deps }
  }
  // Services sans pages ville (pigeons, désinfection…) : le client choisit son département
  return {
    service: '',
    deps: DEPS.map((d) => ({ code: d.code, nom: d.nom, villes: [], pageDep: { href: `/zones/${d.slug}`, label: `Nos interventions : ${d.nom} (${d.code})` } })),
  }
}
