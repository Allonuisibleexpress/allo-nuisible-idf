// Baromètre des nuisibles Île-de-France 2026 en JSON (28/11/2026) : données ouvertes CC BY 4.0, pour les IA et les outils.
import { THEMES, TERRAIN_CHIFFRES, MAJ_BAROMETRE } from '@/lib/bilan-nuisibles'
import { SITE_URL } from '@/lib/seo'
export const dynamic = 'force-static'
const net = (t: string) => t.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
export function GET() {
  const page = `${SITE_URL}/barometre-des-nuisibles-punaises-de-lit-deratisation-2026`
  const data = {
    titre: 'Baromètre des nuisibles Île-de-France 2026', editeur: 'Allo Nuisible IDF', auteur: 'Houssem Hattab, gérant', page, mis_a_jour: MAJ_BAROMETRE, licence: 'CC BY 4.0',
    citer_ainsi: `« Baromètre des nuisibles Île-de-France 2026, Allo Nuisible IDF », ${page}`,
    themes: THEMES.map((t) => ({ id: t.id, titre: t.titre, resume: t.accroche, analyse_terrain: t.analyse.map(net),
      chiffres: t.chiffres.map((c, k) => ({ id: `${t.id}-${k + 1}`, url: `${page}#${t.id}-${k + 1}`, valeur: c.valeur, description: c.texte, source: c.source.label, url_source: c.source.url })) })),
    chiffres_terrain_entreprise: TERRAIN_CHIFFRES.map((c) => ({ valeur: c.valeur, description: c.texte })),
  }
  return new Response(JSON.stringify(data, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } })
}
