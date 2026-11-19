// Grand dossier local des pages phares (19/11/2026) : sections, tableaux et photos de chantier, centré.
import NextImage from 'next/image'
import { enrichi } from '@/components/ArticleService'
import { Filigrane } from '@/components/MediasChantier'
import { PHOTOS_CHANTIERS } from '@/lib/photos-chantiers'
import type { BlocDossier } from '@/lib/dossiers-deratisation'

const ACCENT = '#E8441A'

export default function DossierLocal({ blocs, surtitre }: { blocs: BlocDossier[]; surtitre: string }) {
  if (!blocs?.length) return null
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: '#0b0b0b' }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-6 text-center" style={{ color: '#F0562A' }}>{surtitre}</p>
        {blocs.map((b, i) => {
          if (b.t === 'h2') return <h2 key={i} className="text-2xl md:text-3xl font-black text-white text-center mt-12 first:mt-0 mb-5 leading-tight">{b.x}</h2>
          if (b.t === 'h3') return <h3 key={i} className="text-lg md:text-xl font-black text-white text-center mt-8 mb-3">{b.x}</h3>
          if (b.t === 'p') return <p key={i} className="text-white/75 leading-relaxed mb-4 text-center">{enrichi(b.x)}</p>
          if (b.t === 'ul' || b.t === 'ol') {
            const L = b.t === 'ol' ? 'ol' : 'ul'
            return (
              <L key={i} className="space-y-2 mb-6 max-w-3xl mx-auto">
                {b.items.map((x, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/75 leading-relaxed">
                    <span className="font-black flex-shrink-0" style={{ color: '#F0562A' }}>{b.t === 'ol' ? `${j + 1}.` : '•'}</span><span>{enrichi(x)}</span>
                  </li>
                ))}
              </L>
            )
          }
          if (b.t === 'table') return (
            <div key={i} className="overflow-x-auto rounded-2xl my-6" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <table className="w-full text-sm min-w-[520px]">
                <thead><tr>{b.head.map((h, j) => <th key={j} scope="col" className="text-left font-bold px-4 py-3" style={{ color: '#F0562A', background: 'rgba(232,68,26,0.08)' }}>{h}</th>)}</tr></thead>
                <tbody>{b.rows.map((r, j) => (
                  <tr key={j} className="border-t border-white/10">
                    {r.map((c, k) => k === 0
                      ? <th key={k} scope="row" className="text-left px-4 py-3 align-top text-white font-bold">{enrichi(c)}</th>
                      : <td key={k} className="px-4 py-3 align-top text-white/70">{enrichi(c)}</td>)}
                  </tr>
                ))}</tbody>
              </table>
            </div>
          )
          if (b.t === 'photos') return (
            <div key={i} className="grid grid-cols-2 gap-3 my-8 max-w-2xl mx-auto">
              {b.cles.map((cle) => {
                const p = PHOTOS_CHANTIERS[cle]
                return (
                  <figure key={cle} className="m-0">
                    <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '3 / 4', background: '#1a1a1a' }}>
                      <NextImage src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 330px" style={{ objectFit: 'cover' }} />
                      <Filigrane />
                    </div>
                    <figcaption className="text-xs text-white/60 mt-2 text-center leading-snug">{p.legende}</figcaption>
                  </figure>
                )
              })}
            </div>
          )
          return null
        })}
      </div>
    </section>
  )
}
