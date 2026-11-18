// Vidéos de chantier présentées une par une (13/11/2026) : titre, contexte, ce que nous avons fait, ce que l'on voit.
// Chaque vidéo a une miniature légère (public/chantiers/posters) et ses données structurées VideoObject
// (durée et date réelles : durée du fichier, date de mise en ligne sur le site).
import { Youtube, Play, ArrowRight } from 'lucide-react'
import { enrichi } from '@/components/ArticleService'
import MediasChantier from '@/components/MediasChantier'
import VideoCarte from '@/components/VideoCarte'
import { ficheVideo } from '@/lib/videos-fiches'
import { YOUTUBE_VIDEOS, lienYoutube } from '@/lib/youtube'
import type { PhotoKey } from '@/lib/photos-chantiers'

const ACCENT = '#E8441A'
const SITE = 'https://allonuisibleidf.fr'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

export type VideoDetaillee = {
  src: string
  poster: string
  titre: string
  lieu: string
  legende: string
  texte: string[]
  voit: string[]
  lien?: { href: string; label: string }
  duree: number // secondes
  date: string // date de mise en ligne (ISO)
}

const texteBrut = (t: string) => t.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

export default function VideosDetaillees({ surtitre = 'Nos chantiers en vidéo', titre, intro, videos, photos, renvoiHaut = false }: {
  surtitre?: string
  titre: string
  intro: string
  videos: VideoDetaillee[]
  photos?: PhotoKey[]
  renvoiHaut?: boolean // les vidéos sont déjà lisibles en haut de page (VideosEnHaut) : ici, simple aperçu qui y renvoie
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': videos.map((v) => ({
      '@type': 'VideoObject',
      name: v.titre,
      description: texteBrut(v.texte.join(' ')),
      thumbnailUrl: [`${SITE}${v.poster}`],
      uploadDate: v.date,
      duration: `PT${Math.round(v.duree)}S`,
      contentUrl: `${SITE}${v.src}`,
      ...(YOUTUBE_VIDEOS[v.src] ? { embedUrl: `https://www.youtube.com/embed/${YOUTUBE_VIDEOS[v.src]}` } : {}),
      inLanguage: 'fr-FR',
      publisher: { '@id': `${SITE}/#entreprise` },
    })),
  }
  return (
    <section id="chantier-en-images" className="py-16 md:py-20 px-4 scroll-mt-20" style={{ background: '#0d0d0d' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: ACCENT }}>{surtitre}</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-4">{titre}</h2>
          <p className="text-white/70 leading-relaxed max-w-3xl mx-auto text-base md:text-lg">{enrichi(intro)}</p>
        </div>
        <div className="space-y-10">
          {videos.map((v, i) => (
            <article key={v.src} className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-8 items-start rounded-2xl p-5 md:p-7" style={card}>
              <div className="mx-auto w-full max-w-[280px]">
                {renvoiHaut ? (
                  <a href="#videos-chantier" className="group relative block rounded-[22px] overflow-hidden" style={{ aspectRatio: '9 / 16', border: '1px solid rgba(255,255,255,0.12)' }} aria-label={`Voir la vidéo : ${v.titre}`}>
                    <img src={v.poster} alt={v.legende} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                    <span className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.75) 100%)' }} />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full group-hover:scale-110 transition-transform" style={{ background: 'rgba(255,255,255,0.92)' }}>
                      <Play className="w-6 h-6 ml-0.5" style={{ color: ACCENT, fill: ACCENT }} aria-hidden="true" />
                    </span>
                    <span className="absolute bottom-3 left-0 right-0 text-center text-xs font-bold text-white">{v.lieu} · voir la vidéo en haut</span>
                  </a>
                ) : (
                  <VideoCarte src={v.src} poster={v.poster} fiche={{ ...ficheVideo(v.src, v.legende), duree: Math.round(v.duree) }} youtube={lienYoutube(v.src) ?? undefined} />
                )}
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[.12em] mb-2 text-center md:text-left" style={{ color: ACCENT }}>Vidéo {i + 1} · {v.lieu}</p>
                <h3 className="text-xl md:text-2xl font-black text-white leading-snug mb-4 text-center md:text-left">{v.titre}</h3>
                <div className="space-y-3 text-white/70 leading-relaxed">
                  {v.texte.map((t, j) => <p key={j}>{enrichi(t)}</p>)}
                </div>
                <p className="font-bold text-white mt-5 mb-2">Ce que l’on voit sur la vidéo</p>
                <ul className="space-y-1.5">
                  {v.voit.map((x) => (
                    <li key={x} className="pl-5 relative text-white/70 text-sm leading-relaxed">
                      <span className="absolute left-0 font-black" style={{ color: ACCENT }}>•</span>{enrichi(x)}
                    </li>
                  ))}
                </ul>
                {v.lien && (
                  <a href={v.lien.href} className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold underline underline-offset-2" style={{ color: ACCENT }}>
                    {v.lien.label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        {photos && photos.length > 0 && (
          <div className="mt-12">
            <MediasChantier photos={photos} titre="Les mêmes chantiers, en photos" />
          </div>
        )}
      </div>
    </section>
  )
}
