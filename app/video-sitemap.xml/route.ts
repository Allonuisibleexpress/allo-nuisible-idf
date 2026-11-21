// Plan de site vidéo (21/11/2026) : chaque vidéo d'intervention, sa miniature et la page dont elle est le sujet
// principal (récit filmé du blog, ancre #video). Aide Google à afficher les miniatures vidéo dans ses résultats.
import { ARTICLES } from '@/app/blog/articles'
import { titreVideo } from '@/lib/titres-video'
import { ficheVideo } from '@/lib/videos-fiches'
import { VIDEOS_DATES } from '@/lib/videos-dates'
import { YOUTUBE_VIDEOS } from '@/lib/youtube'
import { posterVideo } from '@/components/MediasChantier'

const SITE = 'https://allonuisibleidf.fr'
const x = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export const dynamic = 'force-static'

export function GET() {
  const urls = ARTICLES.filter((a) => a.videos?.length && titreVideo(a.slug)).map((a) => {
    const videos = a.videos!.map((v) => {
      const f = ficheVideo(v.src, v.legende)
      const p = posterVideo(v)
      const yt = YOUTUBE_VIDEOS[v.src]
      return `    <video:video>
      <video:thumbnail_loc>${SITE}${p}</video:thumbnail_loc>
      <video:title>${x(`${f.titre}, ${f.lieu}`)}</video:title>
      <video:description>${x(f.description || v.legende)}</video:description>
      <video:content_loc>${SITE}${v.src}</video:content_loc>${yt ? `\n      <video:player_loc>https://www.youtube.com/embed/${yt}</video:player_loc>` : ''}${f.duree ? `\n      <video:duration>${Math.max(1, Math.round(f.duree))}</video:duration>` : ''}${VIDEOS_DATES[v.src] ? `\n      <video:publication_date>${VIDEOS_DATES[v.src]}T09:00:00+01:00</video:publication_date>` : ''}
      <video:family_friendly>yes</video:family_friendly>
    </video:video>`
    })
    return `  <url>\n    <loc>${SITE}/blog/${a.slug}</loc>\n${videos.join('\n')}\n  </url>`
  })
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls.join('\n')}
</urlset>
`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
