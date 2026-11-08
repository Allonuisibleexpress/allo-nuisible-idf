'use client'
// Bandeau « Satisfaction client » : les vrais avis Google défilent en continu (pause au survol).
// Les avis sont affichés après chargement, pour ne pas répéter le même long texte dans le HTML de chaque page ville.
import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { AVIS_DEFILANTS } from '@/lib/avis-defilants'
import { NOTE_GOOGLE, FICHE_GOOGLE_URL } from '@/lib/avis-google'

const ACCENT = '#E8441A'
// Couleurs des pastilles d'initiale, comme sur Google
const COULEURS = ['#1a73e8', '#e8710a', '#188038', '#a142f4', '#d93025', '#12b5cb', '#e52592', '#5f6368']

export default function AvisDefilants({ depart = 0, fond = '#0d0d0d' }: { depart?: number; fond?: string }) {
  const [pret, setPret] = useState(false)
  useEffect(() => setPret(true), [])
  const n = AVIS_DEFILANTS.length
  const ordre = [...AVIS_DEFILANTS.slice(depart % n), ...AVIS_DEFILANTS.slice(0, depart % n)]
  const duree = n * 7

  return (
    <section className="py-14 md:py-20 overflow-hidden" style={{ background: fond }}>
      <style>{`
        @keyframes avis-defile { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .avis-piste { animation: avis-defile ${duree}s linear infinite }
        .avis-piste:hover { animation-play-state: paused }
        @media (prefers-reduced-motion: reduce) { .avis-piste { animation: none } }
      `}</style>
      <div className="text-center px-4 mb-10">
        <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: ACCENT }}>Satisfaction client</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">Ils nous ont fait confiance, <span style={{ color: ACCENT }}>ils en parlent</span></h2>
        <a href={FICHE_GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 text-sm hover:text-white">
          <span className="flex text-yellow-400">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}</span>
          <strong className="text-white">{NOTE_GOOGLE.note}/5</strong> sur {NOTE_GOOGLE.nombre} avis Google, reproduits mot pour mot
        </a>
      </div>
      <div className="relative" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)' }}>
        {pret ? (
          <div className="avis-piste flex gap-4 w-max">
            {[...ordre, ...ordre].map((a, i) => (
              <figure key={i} className="w-[300px] md:w-[340px] flex-shrink-0 rounded-2xl p-5 flex flex-col bg-white" style={{ boxShadow: '0 4px 18px rgba(0,0,0,0.35)' }}>
                <figcaption className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ background: COULEURS[i % COULEURS.length] }}>{a.auteur.charAt(0).toUpperCase()}</span>
                  <span className="min-w-0">
                    <span className="block text-[#202124] font-semibold text-sm truncate">{a.auteur}</span>
                    <span className="block text-[#70757a] text-xs truncate">{a.sujet}</span>
                  </span>
                  <span className="ml-auto text-[11px] font-bold text-[#70757a] flex-shrink-0">Avis Google</span>
                </figcaption>
                <div className="flex mb-2" style={{ color: '#FBBC04' }}>{[0, 1, 2, 3, 4].map((k) => <Star key={k} className="w-4 h-4 fill-current" />)}</div>
                <blockquote className="text-[#3c4043] text-sm leading-relaxed line-clamp-6">{a.texte}</blockquote>
              </figure>
            ))}
          </div>
        ) : (
          <div className="h-[230px]" />
        )}
      </div>
    </section>
  )
}
