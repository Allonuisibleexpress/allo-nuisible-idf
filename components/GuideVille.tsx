// Guide local approfondi d'une page nuisible + ville (12/11/2026), rédigé à la main (lib/guide-deratisation-villes.ts).
import type { GuideVille as G } from '@/lib/guide-deratisation-villes'
import { texteRiche } from '@/lib/liens-contextuels'
const ACCENT = '#E8441A'


export default function GuideVille({ guide, nom, plus = [], slug }: { guide?: G; nom: string; plus?: { h: string; p: string[] }[]; slug?: string }) {
  if (!guide) return null
  const ctx = { slug, base: '/deratisation', deja: new Set<string>() }
  return (
    <section id="guide-local" className="py-14 md:py-20 px-4 scroll-mt-20" style={{ background: '#0a0a0a' }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-3 text-center" style={{ color: ACCENT }}>Le guide {nom}</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6 text-center leading-tight">{guide.titre}</h2>
        <p className="text-white/75 leading-relaxed text-base md:text-lg mb-10 text-center">{texteRiche(guide.intro, ctx, 'intro')}</p>
        <div className="space-y-10">
          {[...guide.sections, ...plus].map((s) => (
            <div key={s.h}>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4 text-center">{s.h}</h3>
              <div className="space-y-4 text-white/70 leading-relaxed text-base md:text-lg">
                {s.p.map((p, i) => <p key={i}>{texteRiche(p, ctx, `${s.h}-${i}`)}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
