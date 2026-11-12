// Liens contextuels (13/11/2026) : quand un texte mentionne un nuisible, la mention renvoie vers la page de ce nuisible
// dans la même ville si elle existe, sinon vers la page service. Un seul lien par nuisible et par bloc de texte ;
// le nuisible de la page elle-même n'est jamais lié. Gère aussi **gras** et [texte](/lien) écrits à la main.
import { pagesVille } from './services-ville'

const ACCENT = '#E8441A'
const L = 'A-Za-zÀ-ÖØ-öø-ÿœŒ'

type Regle = { cle: string; base: string; service: string; motif: string }
const REGLES: Regle[] = [
  { cle: 'punaises', base: '/punaises-de-lit', service: '/services/punaises-de-lit', motif: 'punaises? de lit' },
  { cle: 'chenilles', base: '/chenilles-processionnaires', service: '/services/chenilles-processionnaires', motif: 'chenilles? processionnaires?' },
  { cle: 'cafards', base: '/cafards', service: '/services/cafards-blattes', motif: 'cafards?|blattes?' },
  { cle: 'souris', base: '/souris', service: '/services/deratisation', motif: 'souris' },
  { cle: 'rats', base: '/deratisation', service: '/services/deratisation', motif: 'dératisation|rats?|surmulots?|rongeurs?' },
  { cle: 'fourmis', base: '/fourmis', service: '/services/fourmis', motif: 'fourmis?' },
  { cle: 'puces', base: '/puces', service: '/services/puces', motif: 'puces?' },
  { cle: 'acariens', base: '/acariens', service: '/services/acariens', motif: 'acariens?' },
  { cle: 'frelons', base: '/destruction-nid-frelon', service: '/services/guepes-frelons', motif: 'frelons?|guêpes?' },
  { cle: 'pigeons', base: '', service: '/services/pigeons', motif: 'pigeons?' },
]
const RE = new RegExp(`(?<![${L}])(${REGLES.map((r) => `(${r.motif})`).join('|')})(?![${L}])`, 'gi')

export type ContexteLiens = { slug?: string; base?: string; deja?: Set<string>; hrefs?: Set<string> }

function hrefPour(r: Regle, ctx: ContexteLiens) {
  if (ctx.slug && r.base) {
    // La page souris est préférée pour « souris » ; à défaut, la page dératisation de la ville
    const pages = pagesVille(ctx.slug).map((p) => p.href)
    if (pages.includes(`${r.base}/${ctx.slug}`)) return `${r.base}/${ctx.slug}`
    if (r.cle === 'souris' && pages.includes(`/deratisation/${ctx.slug}`)) return `/deratisation/${ctx.slug}`
  }
  return r.service
}

function lierMentions(t: string, ctx: ContexteLiens, k: string): React.ReactNode[] {
  const out: React.ReactNode[] = []
  let dernier = 0
  RE.lastIndex = 0
  let m: RegExpExecArray | null
  while ((m = RE.exec(t))) {
    const i = REGLES.findIndex((_, j) => m![j + 2] !== undefined)
    const r = REGLES[i]
    if (!r) continue
    const exclus = (r.base !== '' && ctx.base === r.base) || (r.cle === 'souris' && ctx.base === '/souris')
    if (exclus || ctx.deja?.has(r.cle)) continue
    const href = hrefPour(r, ctx)
    if (ctx.base && href === `${ctx.base}/${ctx.slug}`) continue
    if (ctx.hrefs?.has(href)) continue
    ctx.deja?.add(r.cle)
    ctx.hrefs?.add(href)
    if (m.index > dernier) out.push(t.slice(dernier, m.index))
    out.push(<a key={`${k}-${m.index}`} href={href} className="font-bold underline" style={{ color: ACCENT }}>{m[0]}</a>)
    dernier = m.index + m[0].length
  }
  if (dernier < t.length) out.push(t.slice(dernier))
  return out
}

export function texteRiche(t: string, ctx: ContexteLiens = {}, cle = 't'): React.ReactNode[] {
  if (!ctx.hrefs) ctx.hrefs = new Set<string>()
  // Les liens écrits à la main dans ce paragraphe passent avant les liens automatiques du même nuisible
  for (const m of Array.from(t.matchAll(/\[[^\]]+\]\(([^)]+)\)/g))) {
    const r = REGLES.find((x) => (x.base && m[1].startsWith(x.base + '/')) || m[1] === x.service)
    if (r) ctx.deja?.add(r.cle)
  }
  return t.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).flatMap((seg, i) => {
    if (!seg) return []
    if (seg.startsWith('**')) return [<strong key={`${cle}-b${i}`} className="text-white font-bold">{lierMentions(seg.slice(2, -2), ctx, `${cle}-b${i}`)}</strong>]
    const l = seg.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (l) {
      // Un lien écrit à la main compte comme déjà lié pour son nuisible
      // Un même lien n'apparaît qu'une fois par bloc : les suivants restent en texte
      if (ctx.hrefs!.has(l[2])) return [l[1]]
      ctx.hrefs!.add(l[2])
      return [<a key={`${cle}-l${i}`} href={l[2]} className="font-bold underline" style={{ color: ACCENT }}>{l[1]}</a>]
    }
    return lierMentions(seg, ctx, `${cle}-p${i}`)
  })
}
