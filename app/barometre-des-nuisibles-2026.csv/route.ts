// Données du Baromètre des nuisibles Île-de-France 2026 en CSV (28/11/2026) : distribution du Dataset, licence CC BY 4.0.
import { THEMES } from '@/lib/bilan-nuisibles'
export const dynamic = 'force-static'
const q = (v: string) => `"${v.replace(/\*\*/g, '').replace(/"/g, '""')}"`
export function GET() {
  const lignes = ['theme;chiffre;description;source;url_source', ...THEMES.flatMap((t) => t.chiffres.map((c) => [t.titre, c.valeur, c.texte, c.source.label, c.source.url].map(q).join(';')))]
  return new Response('﻿' + lignes.join('\r\n') + '\r\n', { headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'inline; filename="barometre-des-nuisibles-2026.csv"' } })
}
