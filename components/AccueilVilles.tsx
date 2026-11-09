// Accueil : « Nos interventions près de chez vous ». Liens vers les pages nuisible + ville des villes les plus proches
// de Saint-Maurice : la page d'accueil, la plus forte du site, transmet son autorité aux pages locales.
import { MapPin, ArrowRight } from 'lucide-react'
import { VILLES_PUNAISES } from '@/lib/villes-punaises'
import { VILLES_DERATISATION } from '@/lib/villes-deratisation'
import { VILLES_SOURIS } from '@/lib/villes-souris'
import { VILLES_CAFARDS } from '@/lib/villes-cafards'
import { VILLES_FOURMIS } from '@/lib/villes-fourmis'
import { REPERES } from '@/lib/reperes-villes'
import { codePostal } from '@/lib/codes-postaux'

const ACCENT = '#E8441A'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

const FAMILLES = [
  { base: '/punaises-de-lit', label: 'Punaises de lit', slugs: VILLES_PUNAISES.map((v) => v.slug) },
  { base: '/deratisation', label: 'Dératisation', slugs: VILLES_DERATISATION.map((v) => v.slug) },
  { base: '/souris', label: 'Souris', slugs: VILLES_SOURIS.map((v) => v.slug) },
  { base: '/cafards', label: 'Cafards', slugs: VILLES_CAFARDS.map((v) => v.slug) },
  { base: '/fourmis', label: 'Fourmis', slugs: VILLES_FOURMIS.map((v) => v.slug) },
]

export default function AccueilVilles({ nombre = 12 }: { nombre?: number }) {
  const noms = new Map<string, string>()
  ;[...VILLES_PUNAISES, ...VILLES_DERATISATION].forEach((v) => noms.set(v.slug, v.nom))
  const villes = Array.from(noms.keys())
    .filter((s) => VILLES_PUNAISES.some((v) => v.slug === s) && VILLES_DERATISATION.some((v) => v.slug === s))
    .sort((a, b) => (REPERES[a]?.km ?? 99) - (REPERES[b]?.km ?? 99))
    .slice(0, nombre)

  return (
    <section className="py-16 md:py-24 px-4" style={{ background: '#0b0b0b' }}>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: ACCENT }}>Près de chez vous</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
          Dératisation et punaises de lit <span style={{ color: ACCENT }}>dans votre ville</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto mb-10">
          Basés à <strong className="text-white">Saint-Maurice (94)</strong>, nous intervenons chaque jour à Paris et dans tout le Val-de-Marne. Choisissez votre ville et votre nuisible.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {villes.map((s) => (
            <div key={s} className="rounded-2xl p-5" style={card}>
              <p className="flex items-center gap-2 text-white font-black text-lg mb-1">
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />{noms.get(s)}
                <span className="text-white/40 text-sm font-bold">{codePostal(s)}</span>
              </p>
              <p className="text-white/45 text-xs mb-3">{s === 'saint-maurice' ? 'Notre base' : `À ${REPERES[s]?.km.toLocaleString('fr-FR')} km de notre base`}</p>
              <div className="flex flex-wrap gap-1.5">
                {FAMILLES.filter((f) => f.slugs.includes(s)).map((f) => (
                  <a key={f.base} href={`${f.base}/${s}`} className="text-xs font-bold text-white/85 hover:text-white rounded-full px-3 py-1.5 hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.14)' }}>
                    {f.label} <span className="sr-only">à {noms.get(s)}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <a href="/zones/val-de-marne" className="inline-flex items-center gap-2 font-bold mt-8" style={{ color: ACCENT }}>
          Toutes nos villes d’intervention <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
