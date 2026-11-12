// Maillage des pages services (12/11/2026) : pages département du nuisible, tous les articles du blog sur le sujet,
// et les autres services. Calculé côté serveur et passé au modèle (seuls les liens sont envoyés au navigateur).
import { ARTICLES } from '@/app/blog/articles'

type Bloc = { title: string; links: Array<{ href: string; label: string }> }

const SERVICES: { path: string; base?: string; nom: string; themes: string[] }[] = [
  { path: '/services/deratisation', base: '/deratisation', nom: 'Dératisation', themes: ['Rongeurs'] },
  { path: '/services/punaises-de-lit', base: '/punaises-de-lit', nom: 'Punaises de lit', themes: ['Punaises de lit'] },
  { path: '/services/cryogenie-punaises-de-lit', base: '/punaises-de-lit', nom: 'Punaises de lit', themes: ['Punaises de lit'] },
  { path: '/services/punaises-de-lit-ecologique', base: '/punaises-de-lit', nom: 'Punaises de lit', themes: ['Punaises de lit'] },
  { path: '/services/deratisation-ecologique', base: '/deratisation', nom: 'Dératisation', themes: ['Rongeurs'] },
  { path: '/services/cafards-blattes', base: '/cafards', nom: 'Cafards', themes: ['Cafards', 'Insectes'] },
  { path: '/services/puces', base: '/puces', nom: 'Puces', themes: ['Puces', 'Insectes'] },
  { path: '/services/fourmis', nom: 'Fourmis', themes: ['Fourmis', 'Insectes'] },
  { path: '/services/acariens', nom: 'Acariens', themes: ['Acariens', 'Insectes'] },
  { path: '/services/chenilles-processionnaires', nom: 'Chenilles processionnaires', themes: ['Chenilles processionnaires'] },
  { path: '/services/guepes-frelons', base: '/destruction-nid-frelon', nom: 'Nid de frelons', themes: ['Guêpes et frelons'] },
  { path: '/services/pigeons', nom: 'Pigeons', themes: ['Pigeons'] },
  { path: '/services/desinfection', nom: 'Désinfection', themes: ['Conseils', 'Professionnels'] },
]
const DEPS: [string, string][] = [['paris', 'Paris'], ['val-de-marne', 'Val-de-Marne (94)'], ['hauts-de-seine', 'Hauts-de-Seine (92)'], ['essonne', 'Essonne (91)'], ['yvelines', 'Yvelines (78)'], ['seine-et-marne', 'Seine-et-Marne (77)']]
const LABELS: Record<string, string> = {
  '/services/deratisation': 'Dératisation rats et souris', '/services/punaises-de-lit': 'Punaises de lit', '/services/cryogenie-punaises-de-lit': 'Cryogénie punaises de lit', '/services/punaises-de-lit-ecologique': 'Punaises de lit : traitement écologique', '/services/deratisation-ecologique': 'Dératisation écologique sans raticide',
  '/services/cafards-blattes': 'Cafards et blattes', '/services/puces': 'Puces', '/services/fourmis': 'Fourmis', '/services/acariens': 'Acariens',
  '/services/chenilles-processionnaires': 'Chenilles processionnaires', '/services/guepes-frelons': 'Guêpes et frelons', '/services/pigeons': 'Pigeons', '/services/desinfection': 'Désinfection',
}

export function maillageService(path: string): Bloc[] {
  const s = SERVICES.find((x) => x.path === path)
  if (!s) return []
  const blocs: Bloc[] = []
  if (s.base) blocs.push({ title: `${s.nom} par département`, links: DEPS.map(([d, n]) => ({ href: `${s.base}/${d}`, label: `${s.nom} : ${n}` })) })
  const articles = ARTICLES.filter((a) => s.themes.includes(a.category)).sort((a, b) => b.date.localeCompare(a.date))
  if (articles.length) blocs.push({ title: `Tous nos articles : ${s.nom.toLowerCase()}`, links: articles.map((a) => ({ href: `/blog/${a.slug}`, label: a.seoTitle })) })
  blocs.push({ title: 'Nos autres services', links: Object.entries(LABELS).filter(([p]) => p !== path).map(([p, l]) => ({ href: p, label: l })) })
  return blocs
}
