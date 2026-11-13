import NextImage from 'next/image'
import { PHOTOS_CHANTIERS, mini, type PhotoKey, type PhotoChantier } from '@/lib/photos-chantiers'
import type { VideoChantier } from '@/components/MediasChantier'

const ACCENT = '#E8441A'

// Petites vignettes d'un vrai chantier, en haut de page : un clic descend vers la galerie en grand (ancre).
export default function VignettesChantier({
  photos = [],
  videos = [],
  ancre = '#chantier-en-images',
  centre = false,
  texte = 'Voir le chantier en images',
}: {
  photos?: PhotoKey[]
  videos?: VideoChantier[]
  ancre?: string
  centre?: boolean
  texte?: string
}) {
  const tuile = { position: 'relative' as const, display: 'block', width: '72px', height: '96px', borderRadius: '10px', overflow: 'hidden', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.15)', flexShrink: 0 }
  return (
    <a href={ancre} style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: centre ? 'center' : 'flex-start', textDecoration: 'none', flexWrap: 'wrap' }}>
      {photos.map((cle) => (
        <span key={cle} style={tuile}>
          <NextImage src={mini(PHOTOS_CHANTIERS[cle].src)} alt={PHOTOS_CHANTIERS[cle].alt} fill sizes="72px" style={{ objectFit: 'cover', objectPosition: (PHOTOS_CHANTIERS[cle] as PhotoChantier).cadrage }} />
        </span>
      ))}
      {videos.map((v) => (
        <span key={v.src} style={tuile}>
          {v.poster
            ? <img src={v.poster} alt={v.legende} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            : <video src={`${v.src}#t=${v.apercu ?? 0.5}`} muted playsInline preload="metadata" aria-label={v.legende}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
          <span aria-hidden="true" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '11px', paddingLeft: '2px' }}>▶</span>
          </span>
        </span>
      ))}
      <span style={{ fontSize: '13px', fontWeight: 700, color: ACCENT, textDecoration: 'underline', textUnderlineOffset: '2px' }}>{texte} ↓</span>
    </a>
  )
}
