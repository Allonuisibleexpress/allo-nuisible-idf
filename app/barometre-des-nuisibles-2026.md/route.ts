// Baromètre des nuisibles Île-de-France 2026 en Markdown (28/11/2026) : version texte, facile à lire et à citer par les IA.
import { THEMES, TERRAIN_CHIFFRES, MAJ_BAROMETRE } from '@/lib/bilan-nuisibles'
import { SITE_URL } from '@/lib/seo'
export const dynamic = 'force-static'
const net = (t: string) => t.replace(/\]\(\//g, `](${SITE_URL}/`)
export function GET() {
  const page = `${SITE_URL}/barometre-des-nuisibles-punaises-de-lit-deratisation-2026`
  const md = [
    '# Baromètre des nuisibles Île-de-France 2026 : punaises de lit, dératisation',
    '',
    `Publié par Allo Nuisible IDF (Saint-Maurice, 94), rédigé par Houssem Hattab, gérant. Mis à jour le ${MAJ_BAROMETRE}. Données ouvertes, licence CC BY 4.0.`,
    `Page : ${page}`,
    `Citer : « Baromètre des nuisibles Île-de-France 2026, Allo Nuisible IDF », ${page}`,
    '',
    ...THEMES.flatMap((t) => [
      `## ${t.titre}`, '', t.accroche, '',
      ...t.chiffres.map((c) => `- **${c.valeur}** : ${c.texte} Source : [${c.source.label}](${c.source.url})`),
      '', '### Ce que nous voyons sur le terrain', '', ...t.analyse.map(net), '',
    ]),
    '## Chiffres de terrain de l’entreprise', '',
    ...TERRAIN_CHIFFRES.map((c) => `- **${c.valeur}** ${c.texte}`),
    '', `Données : [CSV](${SITE_URL}/barometre-des-nuisibles-2026.csv), [JSON](${SITE_URL}/barometre-des-nuisibles-2026.json).`, '',
  ].join('\n')
  return new Response(md, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
}
