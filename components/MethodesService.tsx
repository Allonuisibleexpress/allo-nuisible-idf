// Blocs de contenu long des pages services (demande du 09/11/2026) :
// « Nos méthodes en détail » (mode opératoire, efficacité, limites, cas idéal) et un guide à intertitres précis.
// Contenu propre à Allo Nuisible IDF, rédigé dans lib/contenu-services/.
import type { ReactNode } from 'react'

const ACCENT = '#E8441A'

export interface Methode {
  nom: string // étiquette courte (« Cryogénie »)
  titre: string // H3 sur une requête précise
  accroche: string
  etapes: string[] // comment le technicien procède
  pourquoi: string // pourquoi c'est efficace
  limites: string // limites honnêtes
  ideal: string // pour quels cas
}

export interface BlocMethodes {
  titre: string // H2
  intro: string
  methodes: Methode[]
}

export interface SectionGuide {
  titre: string // H2 sur une requête précise
  texte: string[]
  liste?: string[]
  encadre?: { titre: string; texte: string }
}

export interface GuideService {
  sections: SectionGuide[]
}

// **mot** => gras
export function enGras(t: string): ReactNode[] {
  return t.split(/(\*\*[^*]+\*\*)/g).map((m, i) =>
    m.startsWith('**') ? <strong key={i} className="text-white font-bold">{m.slice(2, -2)}</strong> : m,
  )
}

export function MethodesDetaillees({ bloc, fond = '#0a0a0a' }: { bloc: BlocMethodes; fond?: string }) {
  return (
    <section id="methodes" className="py-16 md:py-24 px-4 scroll-mt-20" style={{ background: fond }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: ACCENT }}>Nos méthodes en détail</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mt-3 mb-4 leading-tight">{bloc.titre}</h2>
          <p className="text-white/60 max-w-3xl mx-auto leading-relaxed">{enGras(bloc.intro)}</p>
        </div>
        <div className="space-y-8">
          {bloc.methodes.map((m, i) => (
            <article key={m.nom} className="rounded-3xl p-6 md:p-9" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex flex-col items-center text-center mb-6">
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white" style={{ background: ACCENT }}>
                  Méthode {i + 1} · {m.nom}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white mt-4 leading-snug max-w-3xl">{m.titre}</h3>
                <p className="text-white/65 mt-3 max-w-3xl leading-relaxed">{enGras(m.accroche)}</p>
              </div>
              <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-6">
                <div className="rounded-2xl p-5 md:p-6" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="text-sm font-black uppercase tracking-wider mb-4" style={{ color: ACCENT }}>Comment notre technicien procède</p>
                  <ol className="space-y-3">
                    {m.etapes.map((e, j) => (
                      <li key={j} className="flex gap-3 text-sm text-white/70 leading-relaxed">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: 'rgba(232,68,26,0.85)' }}>{j + 1}</span>
                        <span>{enGras(e)}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="space-y-4">
                  {[
                    { t: 'Pourquoi c’est efficace', v: m.pourquoi },
                    { t: 'Ses limites, honnêtement', v: m.limites },
                    { t: 'Idéale pour', v: m.ideal },
                  ].map(({ t, v }) => (
                    <div key={t} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <p className="text-sm font-black text-white mb-1.5">{t}</p>
                      <p className="text-sm text-white/60 leading-relaxed">{enGras(v)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GuideDetaille({ guide, fond = '#0d0d0d' }: { guide: GuideService; fond?: string }) {
  return (
    <section className="py-16 md:py-24 px-4" style={{ background: fond }}>
      <div className="max-w-4xl mx-auto space-y-14">
        {guide.sections.map((s) => (
          <div key={s.titre}>
            <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-6 leading-tight">{s.titre}</h2>
            <div className="space-y-4 text-white/65 leading-relaxed">
              {s.texte.map((p, i) => <p key={i}>{enGras(p)}</p>)}
            </div>
            {s.liste && (
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {s.liste.map((l, i) => (
                  <li key={i} className="flex gap-3 rounded-xl p-4 text-sm text-white/70 leading-relaxed" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                    <span>{enGras(l)}</span>
                  </li>
                ))}
              </ul>
            )}
            {s.encadre && (
              <div className="mt-6 rounded-2xl p-5 md:p-6" style={{ background: 'rgba(232,68,26,0.08)', border: '1px solid rgba(232,68,26,0.3)' }}>
                <p className="font-black text-white mb-1.5">{s.encadre.titre}</p>
                <p className="text-sm text-white/70 leading-relaxed">{enGras(s.encadre.texte)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
