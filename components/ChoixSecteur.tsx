'use client'
// « Vous souhaitez une intervention dans votre secteur ? » (22/11/2026) : 1. le département, 2. la ville (ordre
// alphabétique), qui mène à la page locale. Toutes les listes sont dans le HTML (Google suit tous les liens) ;
// seul le département choisi est affiché.
import { useState } from 'react'
import { MapPin, ArrowRight } from 'lucide-react'
import type { Secteur } from '@/lib/secteurs'

export default function ChoixSecteur({ secteur }: { secteur: Secteur }) {
  const [actif, setActif] = useState(secteur.deps[0]?.code)
  if (!secteur.deps.length) return null
  const quoi = secteur.service ? secteur.service.toLowerCase() : 'nuisibles'
  return (
    <section id="votre-secteur" aria-labelledby="votre-secteur-titre" className="px-4 py-12 md:py-14 scroll-mt-24"
      style={{ background: 'linear-gradient(180deg, rgba(232,68,26,0.10), rgba(232,68,26,0.03))', borderTop: '1px solid rgba(232,68,26,0.35)', borderBottom: '1px solid rgba(232,68,26,0.35)' }}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs font-black uppercase tracking-[.18em] mb-3" style={{ color: '#F0562A' }}>Intervention près de chez vous</p>
        <h2 id="votre-secteur-titre" className="text-3xl md:text-4xl font-black text-white leading-tight mb-3">
          Vous souhaitez une intervention <span style={{ color: '#F0562A' }}>dans votre secteur ?</span>
        </h2>
        <p className="text-white/75 text-base md:text-lg mb-8">
          <strong className="text-white">1.</strong> Choisissez votre département, <strong className="text-white">2.</strong> cliquez sur votre ville{secteur.service ? ` : vous arrivez sur notre page ${quoi} de votre commune` : ''}.
        </p>

        {/* 1. Département */}
        <div role="tablist" aria-label="Votre département" className="flex flex-wrap justify-center gap-2.5 mb-8">
          {secteur.deps.map((d) => (
            <button key={d.code} type="button" role="tab" aria-selected={actif === d.code} aria-controls={`secteur-${d.code}`} onClick={() => setActif(d.code)}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm md:text-base font-black transition-colors"
              style={actif === d.code
                ? { background: '#B8330D', color: '#fff', border: '1px solid #E8441A' }
                : { background: 'rgba(255,255,255,0.04)', color: '#fff', border: '1px solid rgba(255,255,255,0.18)' }}>
              <MapPin className="w-4 h-4" aria-hidden="true" />
              {d.nom} <span className="opacity-70">({d.code})</span>
            </button>
          ))}
        </div>

        {/* 2. Ville : toutes les listes restent dans la page, une seule est visible */}
        {secteur.deps.map((d) => (
          <div key={d.code} id={`secteur-${d.code}`} role="tabpanel" hidden={actif !== d.code}>
            {d.villes.length > 0 && (
              <>
                <p className="text-sm font-bold text-white/70 mb-4">{d.villes.length} {d.code === '75' ? 'arrondissements, dans l’ordre' : `${d.villes.length > 1 ? 'communes' : 'commune'} : ${d.nom}, par ordre alphabétique`}</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 list-none p-0 m-0 text-left">
                  {d.villes.map((v) => (
                    <li key={v.href}>
                      <a href={v.href} title={secteur.service ? `${secteur.service} ${v.nom.startsWith('Paris') ? '' : 'à '}${v.nom}`.replace('  ', ' ') : v.nom} className="flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}>
                        <span>{v.nom}{secteur.service && <span className="sr-only"> : {secteur.service.toLowerCase()}</span>}</span>
                        <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: '#F0562A' }} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {d.pageDep && (
              <a href={d.pageDep.href} className="inline-flex items-center gap-2 mt-6 font-black text-white px-7 py-3.5 rounded-full transition-all hover:brightness-110"
                style={{ background: '#B8330D', boxShadow: '0 6px 24px rgba(232,68,26,0.35)' }}>
                {d.villes.length ? `Votre ville n’est pas dans la liste ? ${d.pageDep.label}` : d.pageDep.label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
