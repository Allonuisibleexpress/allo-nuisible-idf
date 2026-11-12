// Affiche des blocs de liens (titre + liste), même style que le maillage des pages services.
import { ArrowRight } from 'lucide-react'
const ACCENT = '#E8441A'
export default function BlocsMaillage({ blocs }: { blocs: { title: string; links: { href: string; label: string }[] }[] }) {
  if (!blocs.length) return null
  return (
    <section className="py-16 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {blocs.map((b) => (
          <div key={b.title}>
            <h2 className="text-xl md:text-2xl font-black text-white mb-5">{b.title}</h2>
            <ul className="space-y-2">
              {b.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-white/80 hover:text-white text-sm font-semibold transition-colors hover:bg-white/[0.06]" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    {l.label}<ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
