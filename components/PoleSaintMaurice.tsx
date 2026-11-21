import { parNom } from '@/lib/tri-villes'
// Bloc de maillage « Autour de Saint-Maurice » (18/11/2026) : sur toutes les pages des villes du pôle (moins de 5 km de la base,
// plus Villejuif), relie les autres services de la même ville et le même service dans les villes voisines, avec la distance.
import { POLE, FAMILLES, lienPole, type Famille } from '@/lib/pole-saint-maurice'

const ACCENT = '#E8441A'
const km = (n: number) => String(n).replace('.', ',')

export default function PoleSaintMaurice({ slug, famille }: { slug: string; famille: Famille }) {
  const ici = POLE.find((v) => v.slug === slug)
  if (!ici) return null
  const autresServices = ici.pages.filter((f) => f !== famille)
  const voisines = POLE.filter((v) => v.slug !== slug && v.pages.includes(famille))
    .sort((a, b) => Math.abs(a.km - ici.km) - Math.abs(b.km - ici.km))
  const quoi = famille === 'zones' ? 'Nos services' : FAMILLES[famille]
  return (
    <section className="py-14 px-4" style={{ background: '#0b0b0b', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F0562A' }}>Notre secteur</p>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Allo Nuisible IDF autour de Saint-Maurice</h2>
        <p className="text-white/65 max-w-2xl mx-auto mb-8">
          {ici.km === 0
            ? 'Saint-Maurice est notre base : nos techniciens partent d’ici vers toutes les villes voisines.'
            : `${ici.nom} est à ${km(ici.km)} km de notre base de Saint-Maurice, à vol d’oiseau.`}{' '}
          Tous nos services {ici.km === 0 ? 'à Saint-Maurice' : `à ${ici.nom}`} et dans les villes les plus proches :
        </p>
        {autresServices.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-black text-white mb-3">{ici.km === 0 ? 'À Saint-Maurice' : `À ${ici.nom}`}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {autresServices.map((f) => (
                <a key={f} href={lienPole(f, ici.slug)} className="rounded-full px-4 py-2 text-sm font-semibold text-white/85 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  {FAMILLES[f]}{f === 'zones' ? '' : ` à ${ici.nom}`}
                </a>
              ))}
            </div>
          </div>
        )}
        {voisines.length > 0 && (
          <div>
            <h3 className="text-lg font-black text-white mb-3">{quoi} dans les villes voisines</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {parNom(voisines).map((v) => (
                <a key={v.slug} href={lienPole(famille, v.slug)} className="rounded-full px-4 py-2 text-sm font-semibold hover:text-white transition-colors"
                  style={{ background: 'rgba(232,68,26,0.08)', border: '1px solid rgba(232,68,26,0.3)', color: '#f3c2b3' }}>
                  {famille === 'zones' ? v.nom : `${FAMILLES[famille]} à ${v.nom}`}{v.km > 0 ? ` (${km(v.km)} km)` : ''}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
