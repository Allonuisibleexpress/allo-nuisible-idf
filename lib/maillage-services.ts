// Maillage des pages services (12/11/2026) : pages département du nuisible, tous les articles du blog sur le sujet,
// et les autres services. Calculé côté serveur et passé au modèle (seuls les liens sont envoyés au navigateur).
import { ARTICLES } from '@/app/blog/articles'

type Bloc = { title: string; links: Array<{ href: string; label: string }> }

const SERVICES: { path: string; base?: string; nom: string; themes: string[] }[] = [
  { path: '/services/deratisation', base: '/deratisation', nom: 'Dératisation', themes: ['Rongeurs'] },
  { path: '/services/punaises-de-lit', base: '/punaises-de-lit', nom: 'Punaises de lit', themes: ['Punaises de lit'] },
  { path: '/services/cryogenie-punaises-de-lit', base: '/punaises-de-lit', nom: 'Punaises de lit', themes: ['Punaises de lit'] },
  { path: '/services/deratisation-ecologique', base: '/deratisation', nom: 'Dératisation', themes: ['Rongeurs'] },
  { path: '/services/cafards-blattes', base: '/cafards', nom: 'Cafards', themes: ['Cafards'] },
  { path: '/services/puces', base: '/puces', nom: 'Puces', themes: ['Puces'] },
  { path: '/services/fourmis', nom: 'Fourmis', themes: ['Fourmis'] },
  { path: '/services/acariens', nom: 'Acariens', themes: ['Acariens'] },
  { path: '/services/chenilles-processionnaires', nom: 'Chenilles processionnaires', themes: ['Chenilles processionnaires'] },
  { path: '/services/guepes-frelons', base: '/destruction-nid-frelon', nom: 'Nid de frelons', themes: ['Guêpes et frelons'] },
  { path: '/services/pigeons', nom: 'Pigeons', themes: ['Pigeons'] },
  { path: '/services/desinfection', nom: 'Désinfection', themes: ['Conseils', 'Professionnels'] },
]
const DEPS: [string, string][] = [['paris', 'Paris'], ['val-de-marne', 'Val-de-Marne (94)'], ['hauts-de-seine', 'Hauts-de-Seine (92)'], ['essonne', 'Essonne (91)'], ['yvelines', 'Yvelines (78)'], ['seine-et-marne', 'Seine-et-Marne (77)']]
const LABELS: Record<string, string> = {
  '/services/deratisation': 'Dératisation rats et souris', '/services/punaises-de-lit': 'Punaises de lit', '/services/cryogenie-punaises-de-lit': 'Punaises de lit : traitement écologique par cryogénie', '/services/deratisation-ecologique': 'Dératisation écologique sans raticide',
  '/services/cafards-blattes': 'Cafards et blattes', '/services/puces': 'Puces', '/services/fourmis': 'Fourmis', '/services/acariens': 'Acariens',
  '/services/chenilles-processionnaires': 'Chenilles processionnaires', '/services/guepes-frelons': 'Guêpes et frelons', '/services/pigeons': 'Pigeons', '/services/desinfection': 'Désinfection',
}

// Liens ciblés vers des sujets voisins (13/11/2026) : seulement quand le rapport est direct pour le lecteur
const VOISINS: Record<string, Bloc> = {
  '/services/punaises-de-lit': { title: 'Ne pas confondre avec la punaise de lit', links: [
    { href: '/blog/punaises-des-bois-maison', label: 'Punaises des bois dans la maison : comment s’en débarrasser' },
    { href: '/blog/punaise-colza-invasion-idf-2026', label: 'Punaise de colza : l’invasion estivale en Île-de-France' } ] },
  '/services/acariens': { title: 'Les autres nuisibles des textiles', links: [
    { href: '/blog/mites-vetements-origine-traitement-prevention', label: 'Mites des vêtements : d’où viennent-elles, comment en finir' },
    { href: '/blog/anthrenes-origine-traitement', label: 'Anthrènes : larves dans les tapis, comment s’en débarrasser' } ] },
  '/services/cafards-blattes': { title: 'Dans la cuisine, pensez aussi aux mites', links: [
    { href: '/blog/mites-alimentaires-cuisine', label: 'Mites alimentaires dans la cuisine : d’où viennent-elles ?' } ] },
  '/services/deratisation': { title: 'Avant de choisir une entreprise', links: [
    { href: '/blog/arnaques-deratisation-nuisibles', label: 'Arnaque dératisation : les 8 pièges à éviter' } ] },
}

export function maillageService(path: string): Bloc[] {
  const s = SERVICES.find((x) => x.path === path)
  if (!s) return []
  const blocs: Bloc[] = []
  if (s.base) blocs.push({ title: `${s.nom} par département`, links: DEPS.map(([d, n]) => ({ href: `${s.base}/${d}`, label: `${s.nom} : ${n}` })) })
  const articles = ARTICLES.filter((a) => s.themes.includes(a.category)).sort((a, b) => b.date.localeCompare(a.date))
  if (articles.length) blocs.push({ title: `Tous nos articles : ${s.nom.toLowerCase()}`, links: articles.map((a) => ({ href: `/blog/${a.slug}`, label: a.seoTitle })) })
  if (VOISINS[path]) blocs.push(VOISINS[path])
  return blocs
}
