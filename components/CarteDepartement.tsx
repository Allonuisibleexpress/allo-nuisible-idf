// Carte SVG d'un département (contours officiels geo.api.gouv.fr) : communes avec une page en orange et cliquables,
// les autres en gris, notre base de Saint-Maurice repérée. Aucune image externe, rendu net sur tous les écrans.
import { CARTES } from '@/lib/cartes-departements'

const ACCENT = '#E8441A'

export default function CarteDepartement({ dep, base, avecPage, titre, legende, zone = false }: {
  dep: string; base: string; avecPage: string[]; titre: string; legende: string; zone?: boolean
}) {
  const carte = CARTES[dep]
  if (!carte) return null
  const sm = carte.communes.find((c) => c.slug === 'saint-maurice')
  return (
    <figure className="max-w-2xl mx-auto">
      <svg viewBox={`-6 -6 ${carte.w + 12} ${carte.h + 12}`} className="w-full h-auto" role="img" aria-label={titre}>
        <title>{titre}</title>
        {carte.communes.map((c) => {
          const actif = avecPage.includes(c.slug)
          const forme = (
            <path d={c.d} fill={actif || zone ? ACCENT : 'rgba(255,255,255,0.08)'} fillOpacity={actif ? 0.85 : zone ? 0.4 : 1}
              stroke="#0b0b0b" strokeWidth={1.2} className={actif ? 'transition-opacity hover:opacity-70' : undefined}>
              <title>{actif ? `${c.nom} : voir la page` : c.nom}</title>
            </path>
          )
          return actif ? <a key={c.slug} href={`${base}/${c.slug}`} aria-label={c.nom}>{forme}</a> : <g key={c.slug}>{forme}</g>
        })}
        {sm && (
          <g pointerEvents="none">
            <circle cx={sm.cx} cy={sm.cy} r={9} fill="#fff" stroke={ACCENT} strokeWidth={3} />
            <text x={sm.cx + 13} y={sm.cy + 5} fill="#fff" fontSize={15} fontWeight={800} style={{ paintOrder: 'stroke' }} stroke="#000" strokeWidth={3}>Notre base</text>
          </g>
        )}
      </svg>
      <figcaption className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-white/55 mt-3">
        <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm" style={{ background: ACCENT }} />{legende}</span>
        {!zone && <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm" style={{ background: 'rgba(255,255,255,0.15)' }} />Nous intervenons aussi, sur devis</span>}
        <span>Contours : geo.api.gouv.fr (Etalab)</span>
      </figcaption>
    </figure>
  )
}
