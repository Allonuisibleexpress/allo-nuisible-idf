// Bloc FAQ réutilisable avec ses données structurées FAQPage (toutes les pages du site doivent avoir une FAQ, 09/11/2026).
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

export default function FaqBloc({ titre, intro, items, fond = '#111', schema = true }: {
  titre: string; intro?: string; items: { q: string; a: string }[]; fond?: string; schema?: boolean
}) {
  if (!items.length) return null
  const jsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: fond }}>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 text-center">{titre}</h2>
        {intro && <p className="text-white/55 text-center mb-8">{intro}</p>}
        <div className={`space-y-3 ${intro ? '' : 'mt-8'}`}>
          {items.map((f) => (
            <details key={f.q} className="group rounded-xl px-5 py-4" style={card}>
              <summary className="cursor-pointer font-bold text-white list-none flex justify-between gap-4">
                {f.q}<span className="text-white/60 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-white/65 text-sm leading-relaxed mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
