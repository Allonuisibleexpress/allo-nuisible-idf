import NextImage from 'next/image'
import { PHOTOS_CHANTIERS, type PhotoKey } from '@/lib/photos-chantiers'

const ACCENT = '#E8441A'

// Galerie de vraies photos d'interventions (voir lib/photos-chantiers.ts).
export default function PhotosChantiers({
  photos,
  titre = 'Nos interventions en photos',
  intro = 'Photos prises par nos techniciens sur de vrais chantiers, également publiées sur notre fiche Google.',
  fond = '#111',
}: {
  photos: PhotoKey[]
  titre?: string
  intro?: string
  fond?: string
}) {
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: fond }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>Sur le terrain</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{titre}</h2>
          <p className="text-white/55 text-sm max-w-xl mx-auto">{intro}</p>
        </div>
        <div className={photos.length === 1 ? 'max-w-xs mx-auto' : `grid grid-cols-2 ${photos.length >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-3`}>
          {photos.map((cle) => {
            const p = PHOTOS_CHANTIERS[cle]
            return (
              <figure key={cle} className="relative overflow-hidden rounded-2xl group" style={{ aspectRatio: '3/4', background: '#1a1a1a' }}>
                <NextImage src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 text-white text-xs font-semibold leading-snug"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)', padding: '28px 10px 10px' }}>
                  {p.legende}
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
