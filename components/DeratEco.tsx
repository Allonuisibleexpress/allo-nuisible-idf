// Dératisation écologique, sans biocide : intervention type en étapes + dispositifs (12/11/2026).
// Version complète sur /services/deratisation-ecologique, version courte sur toutes les pages dératisation classiques.
import { ETAPES_DERAT_ECO, DISPOSITIFS_SANS_BIOCIDE } from '@/lib/intervention-derat-eco'
import { ArrowRight, Leaf } from 'lucide-react'
const ACCENT = '#E8441A'
const VERT = '#3fb27f'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

export default function DeratEco({ a, complet = false }: { a?: string; complet?: boolean }) {
  const ou = a ? ` ${a}` : ''
  return (
    <section id="derat-ecologique" className="py-14 md:py-20 px-4 scroll-mt-20" style={{ background: '#081009' }}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: VERT }}><Leaf className="w-4 h-4" /> Sans biocide</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
          {complet ? 'Une dératisation écologique, étape par étape' : `Dératisation écologique${ou} : possible, sans aucun biocide`}
        </h2>
        <p className="text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
          Lors d’une dératisation, il est possible de <strong className="text-white">ne pas utiliser de biocide</strong> : aucun raticide ni poison n’est déposé chez vous. C’est ce que nous appelons une <strong className="text-white">dératisation écologique</strong>. Voici comment se déroule une intervention type{ou}.
        </p>
        <ol className={`grid gap-4 text-left ${complet ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
          {(complet ? ETAPES_DERAT_ECO : ETAPES_DERAT_ECO.slice(0, 5)).map((e, i) => (
            <li key={e.titre} className="rounded-2xl p-5 relative" style={card}>
              <span className="absolute -top-3 left-5 w-8 h-8 rounded-full flex items-center justify-center font-black text-white text-sm" style={{ background: VERT }}>{i + 1}</span>
              <p className="text-white font-black mt-3 mb-2">{e.titre}</p>
              {complet && <p className="text-white/65 text-sm leading-relaxed">{e.texte}</p>}
            </li>
          ))}
        </ol>
        {complet && (
          <>
            <h3 className="text-xl md:text-2xl font-black text-white mt-14 mb-6">Nos dispositifs sans biocide</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
              {DISPOSITIFS_SANS_BIOCIDE.map((d) => (
                <div key={d.nom} className="rounded-xl p-5" style={card}>
                  <p className="font-black mb-1.5" style={{ color: VERT }}>{d.nom}</p>
                  <p className="text-white/65 text-sm leading-relaxed">{d.texte}</p>
                </div>
              ))}
            </div>
          </>
        )}
        {!complet && (
          <p className="text-white/55 text-sm mt-6">Dispositifs utilisés : piège Ekomille, pièges connectés, pièges électriques, pièges mécaniques type tapette, plaques de glu.</p>
        )}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {!complet && (
            <a href="/services/deratisation-ecologique" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white" style={{ background: 'rgba(63,178,127,0.18)', border: '1px solid rgba(63,178,127,0.5)' }}>
              Voir notre dératisation écologique <ArrowRight className="w-4 h-4" />
            </a>
          )}
          {complet && (
            <a href="/services/deratisation" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white/80" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
              Comparer avec la dératisation classique <ArrowRight className="w-4 h-4" />
            </a>
          )}
          <a href="/blog/deratisation-sans-mort-aux-rats" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold" style={{ border: '1px solid rgba(255,255,255,0.15)', color: ACCENT }}>
            Le guide : dératiser sans mort-aux-rats <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
