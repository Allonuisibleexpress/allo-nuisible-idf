// Contenu écrit approfondi des pages nuisible + ville (demande du 10/11/2026) : travail d'observation avant
// intervention, méthodes expliquées pas à pas (avec liens vers nos vrais chantiers), signes, risques, erreurs,
// garantie, « qui doit agir et qui paie ». Une seule version rédigée de chaque texte, identique d'une ville
// à l'autre (c'est notre protocole) ; l'unicité des pages vient du contenu local. Données : lib/contenu-nuisibles/.
import NextImage from 'next/image'
import { PHOTOS_CHANTIERS, type PhotoKey, type PhotoChantier } from '@/lib/photos-chantiers'

const ACCENT = '#E8441A'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

type Variantes = string[]
export type ContenuFamille = {
  observation: { titres: Variantes; intros: Variantes; points: Variantes[]; photos?: PhotoKey[]; conclusion: Variantes }
  methodes: {
    titres: Variantes
    intros: Variantes
    items: { nom: string; titres: Variantes; paras: Variantes[]; etapes?: Variantes[]; lien?: { href: string; label: string; photo?: PhotoKey } }[]
  }
  signes?: { titres: Variantes; intros: Variantes; points: Variantes[] }
  risques: { titres: Variantes; cartes: { t: string; v: Variantes }[] }
  erreurs: { titres: Variantes; items: Variantes[] }
  garantie: { accroches: Variantes; texte: string }
  quiPaie: { titres: Variantes; intros: Variantes; cartes: { t: string; v: Variantes; court: string }[]; note: string; lien: string }
}

function g(t: string) {
  // **gras** et [texte](/lien)
  const out: React.ReactNode[] = []
  t.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).forEach((m, i) => {
    if (m.startsWith('**')) out.push(<strong key={i} className="text-white font-bold">{m.slice(2, -2)}</strong>)
    else if (m.startsWith('[')) {
      const r = m.match(/\[([^\]]+)\]\(([^)]+)\)/)!
      out.push(<a key={i} href={r[2]} className="underline font-semibold" style={{ color: ACCENT }}>{r[1]}</a>)
    } else out.push(m)
  })
  return out
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 text-center leading-tight">{children}</h2>
)

function Photo({ k, a }: { k: PhotoKey; a: string }) {
  const p = PHOTOS_CHANTIERS[k] as PhotoChantier
  return (
    <figure className="rounded-2xl overflow-hidden" style={card}>
      <div className="relative w-full h-48">
        <NextImage src={p.src} alt={`${p.alt}, intervention comparable à celles que nous menons ${a}`} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover', objectPosition: p.cadrage }} />
      </div>
      <figcaption className="p-3 text-xs text-white/65 text-center leading-relaxed">{p.legende}</figcaption>
    </figure>
  )
}

export default function ContenuNuisible({ data, slug, a, nom, partie }: { data: ContenuFamille; slug: string; a: string; nom: string; partie: 1 | 2 | 3 }) {
  // Une seule version rédigée de chaque texte (pas de variantes tournantes) : le protocole est le même partout
  void slug
  const c = <T,>(l: T[], _i: number) => l[0]
  const r = (t: string) => t.replaceAll('{a}', a).replaceAll('{nom}', nom).replaceAll(' ?', ' ?')

  if (partie === 1) {
    const o = data.observation
    const m = data.methodes
    return (
      <>
        {/* Observation avant intervention */}
        <section id="protocole" className="py-14 md:py-20 px-4 scroll-mt-20" style={{ background: '#0b0b0b' }}>
          <div className="max-w-5xl mx-auto">
            <H2>{r(c(o.titres, 1))}</H2>
            <p className="text-white/60 mb-8 max-w-3xl mx-auto text-center leading-relaxed">{g(r(c(o.intros, 2)))}</p>
            <ol className="grid md:grid-cols-2 gap-4">
              {o.points.map((v, i) => {
                const [t, x] = r(c(v, i + 3)).split('|')
                return (
                  <li key={i} className="flex gap-4 rounded-2xl p-5" style={card}>
                    <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-black text-white" style={{ background: ACCENT }}>{i + 1}</span>
                    <div>
                      <h3 className="font-black text-white mb-1">{t}</h3>
                      <p className="text-white/65 text-sm leading-relaxed">{g(x)}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
            {o.photos && o.photos.length > 0 && (
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {o.photos.slice(0, 3).map((k) => <Photo key={k} k={k} a={a} />)}
              </div>
            )}
            <p className="mt-8 text-center text-white/75 max-w-3xl mx-auto leading-relaxed">{g(r(c(o.conclusion, 20)))}</p>
          </div>
        </section>

        {/* Méthodes détaillées */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#101010' }}>
          <div className="max-w-5xl mx-auto">
            <H2>{r(c(m.titres, 21))}</H2>
            <p className="text-white/60 mb-10 max-w-3xl mx-auto text-center leading-relaxed">{g(r(c(m.intros, 22)))}</p>
            <div className="space-y-6">
              {m.items.map((it, i) => (
                <article key={it.nom} className="rounded-3xl p-6 md:p-8" style={card}>
                  <span className="inline-block rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white mb-3" style={{ background: ACCENT }}>{it.nom}</span>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-4 leading-snug">{r(c(it.titres, 30 + i))}</h3>
                  <div className={it.lien?.photo ? 'grid md:grid-cols-[minmax(0,1fr)_260px] gap-6' : ''}>
                    <div className="space-y-3 text-white/70 leading-relaxed">
                      {it.paras.map((v, j) => <p key={j}>{g(r(c(v, 40 + i * 7 + j)))}</p>)}
                      {it.etapes && (
                        <ul className="mt-2 space-y-2">
                          {it.etapes.map((v, j) => (
                            <li key={j} className="flex gap-2 text-sm">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                              <span>{g(r(c(v, 60 + i * 5 + j)))}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {it.lien?.photo && (
                      <a href={it.lien.href} className="block rounded-2xl overflow-hidden group" style={card}>
                        <div className="relative w-full h-44">
                          <NextImage src={PHOTOS_CHANTIERS[it.lien.photo].src} alt={PHOTOS_CHANTIERS[it.lien.photo].alt} fill sizes="260px" style={{ objectFit: 'cover', objectPosition: (PHOTOS_CHANTIERS[it.lien.photo] as PhotoChantier).cadrage }} />
                        </div>
                        <p className="p-3 text-sm font-bold text-center group-hover:underline" style={{ color: ACCENT }}>{it.lien.label} →</p>
                      </a>
                    )}
                  </div>
                  {it.lien && !it.lien.photo && (
                    <a href={it.lien.href} className="inline-block mt-4 text-sm font-bold underline" style={{ color: ACCENT }}>{it.lien.label} →</a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Signes */}
        {data.signes && (
          <section className="py-14 md:py-20 px-4" style={{ background: '#0b0b0b' }}>
            <div className="max-w-5xl mx-auto">
              <H2>{r(c(data.signes.titres, 80))}</H2>
              <p className="text-white/60 mb-8 max-w-3xl mx-auto text-center leading-relaxed">{g(r(c(data.signes.intros, 81)))}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.signes.points.map((v, i) => {
                  const [t, x] = r(c(v, 82 + i)).split('|')
                  return (
                    <div key={i} className="rounded-2xl p-5" style={card}>
                      <h3 className="font-black text-white mb-2">{t}</h3>
                      <p className="text-white/65 text-sm leading-relaxed">{g(x)}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}
      </>
    )
  }

  // Partie 2 : risques, erreurs, garantie, qui paie. Partie 3 (pages ville) : garantie et qui paie seulement
  const q = data.quiPaie
  const complet = partie === 2
  return (
    <>
      {complet && <>
      <section className="py-14 md:py-20 px-4" style={{ background: '#101010' }}>
        <div className="max-w-5xl mx-auto">
          <H2>{r(c(data.risques.titres, 100))}</H2>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {data.risques.cartes.map((k, i) => (
              <div key={k.t} className="rounded-2xl p-5" style={card}>
                <h3 className="font-black text-white mb-2">{k.t}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{g(r(c(k.v, 101 + i)))}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-4" style={{ background: '#0b0b0b' }}>
        <div className="max-w-5xl mx-auto">
          <H2>{r(c(data.erreurs.titres, 110))}</H2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {data.erreurs.items.map((v, i) => {
              const [t, x] = r(c(v, 111 + i)).split('|')
              return (
                <div key={i} className="rounded-2xl p-5" style={card}>
                  <span className="inline-flex w-8 h-8 rounded-full items-center justify-center font-black text-white mb-3" style={{ background: ACCENT }}>{i + 1}</span>
                  <h3 className="font-black text-white mb-2">{t}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{g(x)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      </>}

      <section className="py-12 md:py-16 px-4" style={{ background: '#101010' }}>
        <div className="max-w-4xl mx-auto rounded-3xl p-7 md:p-10 text-center" style={{ background: 'linear-gradient(135deg, rgba(232,68,26,0.22), rgba(232,68,26,0.06))', border: '1px solid rgba(232,68,26,0.4)' }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Prévention du retour</p>
          <p className="text-2xl md:text-3xl font-black text-white leading-snug">{g(r(c(data.garantie.accroches, 120)))}</p>
          <p className="text-white/65 mt-4 max-w-2xl mx-auto text-sm md:text-base">{g(r(data.garantie.texte))}</p>
        </div>
      </section>

      <section id="qui-paie" className="py-14 md:py-20 px-4 scroll-mt-20" style={{ background: '#0b0b0b' }}>
        <div className="max-w-5xl mx-auto">
          <H2>{r(c(q.titres, 130))}</H2>
          {complet && <p className="text-white/60 mb-8 max-w-3xl mx-auto text-center leading-relaxed">{g(r(c(q.intros, 131)))}</p>}
          <div className="grid sm:grid-cols-2 gap-4">
            {q.cartes.map((k, i) => (
              <div key={k.t} className="rounded-2xl p-6" style={card}>
                <h3 className="text-lg font-black text-white mb-2">{k.t}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{g(r(complet ? c(k.v, 132 + i) : k.court))}</p>
              </div>
            ))}
          </div>
          {!complet && <p className="text-center mt-6"><a href={q.lien} className="text-sm font-bold underline" style={{ color: ACCENT }}>Le détail, cas par cas →</a></p>}
          <p className="text-white/40 text-xs mt-5 text-center">{q.note}</p>
        </div>
      </section>
    </>
  )
}

// Petites miniatures de nos vrais chantiers, juste sous le haut de page (clic : galerie plus bas)
export function MiniaturesChantier({ photos, a, ancre = '#nos-chantiers' }: { photos: PhotoKey[]; a: string; ancre?: string }) {
  if (!photos.length) return null
  return (
    <div className="px-4 pb-6" style={{ background: '#080808' }}>
      <a href={ancre} className="max-w-3xl mx-auto flex items-center justify-center gap-2.5 flex-wrap no-underline">
        {photos.slice(0, 5).map((k) => (
          <span key={k} className="relative block w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
            <NextImage src={PHOTOS_CHANTIERS[k].src} alt={PHOTOS_CHANTIERS[k].alt} fill sizes="64px" style={{ objectFit: 'cover', objectPosition: (PHOTOS_CHANTIERS[k] as PhotoChantier).cadrage }} />
          </span>
        ))}
        <span className="text-xs md:text-sm font-bold underline underline-offset-2" style={{ color: ACCENT }}>Voir nos vrais chantiers en photos ↓</span>
      </a>
    </div>
  )
}
