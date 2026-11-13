import NextImage from 'next/image'
import { Youtube } from 'lucide-react'
import { PHOTOS_CHANTIERS, type PhotoKey, type PhotoChantier } from '@/lib/photos-chantiers'
import { CHAINE_YOUTUBE, lienYoutube } from '@/lib/youtube'

const ACCENT = '#E8441A'

export type VideoChantier = { src: string; legende: string; banniere?: boolean; apercu?: number; poster?: string } // apercu : seconde affichée en vignette // banniere : logo déjà incrusté dans la vidéo // poster : image légère (public/chantiers/posters) affichée avant la lecture

// Image d'aperçu d'une vidéo de chantier (13/11/2026) : sans elle, le navigateur téléchargeait la vidéo entière
// à l'ouverture de la page (6 Mo sur certaines pages ville). Toutes les vidéos de public/chantiers ont leur image
// dans public/chantiers/posters (même nom, en .jpg) : en ajouter une pour chaque nouvelle vidéo.
export function posterVideo(v: { src: string; poster?: string }): string | undefined {
  if (v.poster) return v.poster
  const m = v.src.match(/^\/chantiers\/([^/]+)\.mp4$/)
  return m ? `/chantiers/posters/${m[1]}.jpg` : undefined
}

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
  const lienYt = { display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '6px', fontSize: '13px', fontWeight: 700, color: ACCENT, textDecoration: 'underline', textUnderlineOffset: '2px' }
  const legende = { fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '6px', lineHeight: 1.4 }
  return (
    <div>
      {titre && <p style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: ACCENT, marginBottom: '12px' }}>{titre}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(3, photos.length + videos.length)}, minmax(0, 1fr))`, gap: '10px', maxWidth: photos.length + videos.length === 1 ? '420px' : photos.length + videos.length === 2 ? '560px' : undefined, margin: '0 auto' }}>
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
              <video src={v.src} poster={posterVideo(v)} controls muted playsInline preload="none" aria-label={v.legende}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              {/* La bannière « Allo Nuisible IDF » est incrustée dans toutes les vidéos (règle absolue) */}
            </div>
            {legendes && <figcaption style={legende}>{v.legende}</figcaption>}
            {lienYoutube(v.src) && (
              <a href={lienYoutube(v.src)!} target="_blank" rel="noopener" style={lienYt}>
                <Youtube size={15} aria-hidden="true" /> Voir la vidéo sur YouTube
              </a>
            )}
          </figure>
        ))}
      </div>
      {videos.length > 0 && videos.some((v) => !lienYoutube(v.src)) && (
        <p style={{ fontSize: '13px', marginTop: '10px', textAlign: 'center' }}>
          <a href={CHAINE_YOUTUBE} target="_blank" rel="noopener" style={lienYt}>
            <Youtube size={15} aria-hidden="true" /> Toutes nos interventions en vidéo sur YouTube
          </a>
        </p>
      )}
      {lien && (
        <p style={{ fontSize: '14px', marginTop: '12px' }}>
          <a href={lien.href} style={{ color: ACCENT, fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '2px' }}>{lien.label}</a>
        </p>
      )}
    </div>
  )
}
