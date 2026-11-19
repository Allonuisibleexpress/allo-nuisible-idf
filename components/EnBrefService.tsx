// Bloc « En bref » des pages service (19/11/2026) : questions courtes, réponses directes, faciles à citer
// par le mode IA de Google et les moteurs à réponse. Données dans lib/en-bref-services.ts.
import { EN_BREF_SERVICES } from '@/lib/en-bref-services'

export default function EnBrefService({ cle }: { cle: string }) {
  const qr = EN_BREF_SERVICES[cle]
  if (!qr) return null
  return (
    <section className="px-4 pt-8 pb-4" style={{ background: '#080808' }} aria-labelledby="en-bref">
      <div className="max-w-3xl mx-auto rounded-2xl p-6 md:p-7" style={{ background: 'rgba(232,68,26,0.07)', border: '1px solid rgba(232,68,26,0.25)' }}>
        <h2 id="en-bref" className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color: '#F0562A' }}>En bref</h2>
        <dl className="space-y-3">
          {qr.map(({ q, r }) => (
            <div key={q}>
              <dt className="font-black text-white text-sm md:text-base">{q}</dt>
              <dd className="text-white/80 text-sm md:text-base leading-relaxed">{r}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
