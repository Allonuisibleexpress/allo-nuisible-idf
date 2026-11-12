// Maillage des pages nuisible + ville (12/11/2026) :
// 1. lien vers la page département du même nuisible (et vers la page zone du département) ;
// 2. 6 articles du blog sur le même nuisible, en rotation d'une ville à l'autre pour que chaque article reçoive des liens.
import { ARTICLES } from '@/app/blog/articles'
import { ArrowRight, BookOpen } from 'lucide-react'

const ACCENT = '#E8441A'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

const DEPS: Record<string, { slug: string; dans: string }> = {
  '75': { slug: 'paris', dans: 'à Paris' },
  '94': { slug: 'val-de-marne', dans: 'dans le Val-de-Marne' },
  '92': { slug: 'hauts-de-seine', dans: 'dans les Hauts-de-Seine' },
  '91': { slug: 'essonne', dans: 'en Essonne' },
  '78': { slug: 'yvelines', dans: 'dans les Yvelines' },
  '77': { slug: 'seine-et-marne', dans: 'en Seine-et-Marne' },
  '93': { slug: 'seine-saint-denis', dans: 'en Seine-Saint-Denis' },
  '95': { slug: 'val-d-oise', dans: 'dans le Val-d’Oise' },
}
// Familles qui ont une page par département (lib/departements-services.ts)
const BASES_DEP = ['/deratisation', '/punaises-de-lit', '/destruction-nid-frelon', '/cafards', '/puces', '/souris']
const DEP_PAGES = ['75', '94', '92', '91', '78', '77']

// Articles du blog proposés sur une page ville : uniquement ceux qui parlent du même nuisible
export const THEME_BLOG: Record<string, string[]> = {
  '/deratisation': ['Rongeurs'], '/souris': ['Rongeurs'], '/punaises-de-lit': ['Punaises de lit'], '/cafards': ['Cafards'],
  '/fourmis': ['Fourmis'], '/puces': ['Puces'], '/acariens': ['Acariens'], '/chenilles-processionnaires': ['Chenilles processionnaires'],
  '/destruction-nid-frelon': ['Guêpes et frelons'],
}

function h(s: string) { let x = 0; for (const c of s) x = (x * 31 + c.charCodeAt(0)) >>> 0; return x }

export default function MaillageVille({ basePath, mot, code, slug, a, depLien = true }: {
  basePath: string; mot: string; code: string; slug: string; a: string; depLien?: boolean
}) {
  const dep = DEPS[code]
  const pageDep = dep && depLien && BASES_DEP.includes(basePath) && DEP_PAGES.includes(code) ? `${basePath}/${dep.slug}` : null
  const theme = THEME_BLOG[basePath]
  const articles = ARTICLES.filter((x) => (theme ?? []).includes(x.category)).sort((x, y) => x.slug.localeCompare(y.slug))
  const n = Math.min(6, articles.length)
  const d = articles.length ? h(slug) % articles.length : 0
  const choix = [...articles.slice(d), ...articles.slice(0, d)].slice(0, n)
  if (!dep && !choix.length) return null
  return (
    <section className="py-14 md:py-16 px-4" style={{ background: '#0a0a0a' }}>
      <div className="max-w-4xl mx-auto text-center">
        {dep && (
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-black text-white mb-4">{mot} {dep.dans} : toutes nos villes</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {pageDep && (
                <a href={pageDep} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white" style={{ background: 'rgba(232,68,26,0.15)', border: '1px solid rgba(232,68,26,0.4)' }}>
                  {mot} {dep.dans} <ArrowRight className="w-4 h-4" />
                </a>
              )}
              <a href={`/zones/${dep.slug}`} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white/80" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                Tous nos services {dep.dans} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
        {choix.length > 0 && (
          <>
            <h2 className="text-xl md:text-2xl font-black text-white mb-2">{mot} : nos articles pour aller plus loin</h2>
            <p className="text-white/50 text-sm mb-6">Conseils et retours de terrain de nos techniciens, utiles {a} comme partout en Île-de-France.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
              {choix.map((x) => (
                <a key={x.slug} href={`/blog/${x.slug}`} className="group rounded-xl p-4 hover:bg-white/[0.06]" style={card}>
                  <BookOpen className="w-4 h-4 mb-2" style={{ color: ACCENT }} />
                  <span className="block text-white font-bold text-sm leading-snug mb-1">{x.seoTitle}</span>
                  <span className="text-xs font-bold inline-flex items-center gap-1" style={{ color: ACCENT }}>Lire l’article <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" /></span>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
