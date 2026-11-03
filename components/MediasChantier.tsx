import NextImage from 'next/image'
import { PHOTOS_CHANTIERS, type PhotoKey, type PhotoChantier } from '@/lib/photos-chantiers'

const ACCENT = '#E8441A'

export type VideoChantier = { src: string; legende: string; banniere?: boolean } // banniere : logo déjà incrusté dans la vidéo

// Petit logo de l'entreprise en bas à droite des photos et vidéos
export function Filigrane({ bas = 8 }: { bas?: number }) {
  return (
    <span aria-hidden="true" style={{ position: 'absolute', right: '8px', bottom: `${bas}px`, pointerEvents: 'none', fontSize: '10px', fontWeight: 800, color: 'rgba(255,255,255,0.85)', background: 'rgba(0,0,0,0.45)', padding: '2px 6px', borderRadius: '6px', textShadow: '0 1px 2px rgba(0,0,0,0.6)', whiteSpace: 'nowrap' }}>
      Allo Nuisible <span style={{ color: ACCENT }}>IDF</span>
    </span>
  )
}

// Miniatures d'un vrai chantier (photos + vidéos), avec le filigrane de l'entreprise sur les vidéos.
export default function MediasChantier({
  photos = [],
  videos = [],
  titre = 'Le chantier en images',
  lien,
  legendes = true,
}: {
  photos?: PhotoKey[]
  videos?: VideoChantier[]
  titre?: string
  lien?: { href: string; label: string }
  legendes?: boolean // false sur les pages ville : évite de répéter le même texte sur des dizaines de pages
}) {
  const tuile = { position: 'relative' as const, aspectRatio: '3/4', borderRadius: '12px', overflow: 'hidden', background: '#1a1a1a' }
  const legende = { fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '6px', lineHeight: 1.4 }
  return (
    <div>
      {titre && <p style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: ACCENT, marginBottom: '12px' }}>{titre}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(3, photos.length + videos.length)}, minmax(0, 1fr))`, gap: '10px', maxWidth: photos.length + videos.length === 1 ? '320px' : photos.length + videos.length === 2 ? '560px' : undefined }}>
        {photos.map((cle) => {
          const p = PHOTOS_CHANTIERS[cle]
          return (
            <figure key={cle} style={{ margin: 0 }}>
              <a href={p.src} target="_blank" rel="noopener" style={{ display: 'block', ...tuile }}>
                <NextImage src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 33vw, 250px" style={{ objectFit: 'cover', objectPosition: (PHOTOS_CHANTIERS[cle] as PhotoChantier).cadrage }} />
                <Filigrane />
              </a>
              {legendes && <figcaption style={legende}>{p.legende}</figcaption>}
            </figure>
          )
        })}
        {videos.map((v) => (
          <figure key={v.src} style={{ margin: 0 }}>
            <div style={tuile}>
              <video src={`${v.src}#t=0.5`} controls muted playsInline preload="metadata" aria-label={v.legende}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              {/* La bannière « Allo Nuisible IDF » est incrustée dans toutes les vidéos (règle absolue) */}
            </div>
            {legendes && <figcaption style={legende}>{v.legende}</figcaption>}
          </figure>
        ))}
      </div>
      {lien && (
        <p style={{ fontSize: '14px', marginTop: '12px' }}>
          <a href={lien.href} style={{ color: ACCENT, fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '2px' }}>{lien.label}</a>
        </p>
      )}
    </div>
  )
}
