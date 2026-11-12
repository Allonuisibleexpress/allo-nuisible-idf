import { texteRiche } from '@/lib/liens-contextuels'
// Contenu local rédigé à la main pour une ville et un nuisible (10/11/2026) : ce qui est propre à cette ville.
const ACCENT = '#E8441A'


export default function LocalVille({ titre, nom, paras, slug, base }: { titre: string; nom: string; paras?: string[]; slug?: string; base?: string }) {
  if (!paras || !paras.length) return null
  const ctx = { slug, base, deja: new Set<string>() }
  return (
    <section className="py-12 md:py-16 px-4" style={{ background: '#0d0d0d' }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-3 text-center" style={{ color: ACCENT }}>Spécial {nom}</p>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-6 text-center leading-tight">{titre}</h2>
        <div className="space-y-4 text-white/70 leading-relaxed text-base md:text-lg">
          {paras.map((p, i) => p.startsWith('### ')
            ? <h3 key={i} className="text-xl md:text-2xl font-black text-white pt-4 text-center leading-snug">{p.slice(4)}</h3>
            : <p key={i}>{texteRiche(p, ctx, `l${i}`)}</p>)}
        </div>
      </div>
    </section>
  )
}
