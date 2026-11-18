// Section « nos chantiers en vidéo » placée tout en haut des pages, juste sous « En bref » (19/11/2026, demande de
// l'utilisateur, sur le modèle d'Express). Cartes encadrées avec une petite description ; données VideoObject.
import VideoCarte from '@/components/VideoCarte'
import { posterVideo, type VideoChantier } from '@/components/MediasChantier'
import { ficheVideo } from '@/lib/videos-fiches'
import { lienYoutube, YOUTUBE_VIDEOS, CHAINE_YOUTUBE } from '@/lib/youtube'

const SITE = 'https://allonuisibleidf.fr'

export default function VideosEnHaut({ videos, titre = 'Nos chantiers en vidéo', intro, fond = '#080808', lien, sansFond = false, pageActuelle, grand = false }: {
  videos: (VideoChantier | { src: string; legende?: string; poster?: string })[]
  titre?: string
  intro?: string
  fond?: string
  lien?: { href: string; label: string }
  sansFond?: boolean
  pageActuelle?: string // pas de lien vers la page où l'on se trouve déjà
  grand?: boolean // vidéo plus grande (articles du blog)
}) {
  if (!videos.length) return null
  const n = videos.length
  const grille = n === 1 ? (grand ? 'max-w-[460px]' : 'max-w-[360px]') : n === 2 ? 'max-w-[720px] sm:grid-cols-2' : 'max-w-5xl sm:grid-cols-2 lg:grid-cols-3'
  const schema = {
    '@context': 'https://schema.org',
    '@graph': videos.map((v) => {
      const f = ficheVideo(v.src, (v as VideoChantier).legende)
      const p = posterVideo(v as VideoChantier)
      return {
        '@type': 'VideoObject', name: `${f.titre} (${f.lieu})`, description: f.description || f.titre,
        thumbnailUrl: p ? [`${SITE}${p}`] : undefined, contentUrl: `${SITE}${v.src}`,
        ...(f.duree ? { duration: `PT${f.duree}S` } : {}),
        ...(YOUTUBE_VIDEOS[v.src] ? { embedUrl: `https://www.youtube.com/embed/${YOUTUBE_VIDEOS[v.src]}` } : {}),
        inLanguage: 'fr-FR', publisher: { '@id': `${SITE}/#entreprise` },
      }
    }),
  }
  const contenu = (
    <div className="max-w-5xl mx-auto text-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-xs font-black uppercase tracking-[.15em] mb-2" style={{ color: '#E8441A' }}>Vraies interventions, filmées par nos techniciens</p>
      {titre && <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">{titre}</h2>}
      {intro && <p className="text-white/65 max-w-2xl mx-auto mb-2 leading-relaxed">{intro}</p>}
      <div className={`grid gap-5 mx-auto mt-7 ${grille}`}>
        {videos.map((v) => (
          <VideoCarte key={v.src} src={v.src} poster={posterVideo(v as VideoChantier)} fiche={ficheVideo(v.src, (v as VideoChantier).legende)} youtube={lienYoutube(v.src) ?? undefined} pageActuelle={pageActuelle} grand={grand && n === 1} />
        ))}
      </div>
      <p className="mt-6 text-sm">
        {lien && !videos.every((v) => ficheVideo(v.src).lien) && <a href={lien.href} className="font-bold underline underline-offset-4 mr-4" style={{ color: '#E8441A' }}>{lien.label}</a>}
        <a href={CHAINE_YOUTUBE} target="_blank" rel="noopener" className="font-bold underline underline-offset-4 text-white/70 hover:text-white">Toutes nos interventions sur YouTube</a>
      </p>
    </div>
  )
  if (sansFond) return <div id="videos-chantier" className="scroll-mt-24 my-10">{contenu}</div>
  return <section id="videos-chantier" className="px-4 py-12 md:py-14 scroll-mt-24" style={{ background: fond }}>{contenu}</section>
}
