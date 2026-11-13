// Contenu long d'une page service (12/11/2026) : sous-titres et paragraphes, avec **gras** et [liens](/url).
// « ### » en début de paragraphe = sous-titre H3 ; « - » = puce (13/11/2026).
const ACCENT = '#E8441A'
export function enrichi(t: string) {
  return t.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((m, i) => {
    if (m.startsWith('**')) return <strong key={i} className="text-white font-bold">{m.slice(2, -2)}</strong>
    const l = m.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (l) return l[2].startsWith('http')
      ? <a key={i} href={l[2]} target="_blank" rel="noopener" className="font-bold underline" style={{ color: ACCENT }}>{l[1]}</a>
      : <a key={i} href={l[2]} className="font-bold underline" style={{ color: ACCENT }}>{l[1]}</a>
    return m
  })
}
export default function ArticleService({ blocs }: { blocs: { h: string; p: string[] }[] }) {
  return (
    <section className="py-16 md:py-20 px-4" style={{ background: '#0a0a0a' }}>
      <div className="max-w-3xl mx-auto space-y-12">
        {blocs.map((b) => (
          <div key={b.h}>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-5 text-center leading-tight">{b.h}</h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-base md:text-lg">
              {b.p.map((p, i) => p.startsWith('### ')
                ? <h3 key={i} className="text-xl md:text-2xl font-black text-white pt-4 text-center leading-snug">{p.slice(4)}</h3>
                : p.startsWith('- ')
                ? <p key={i} className="pl-5 relative"><span className="absolute left-0 font-black" style={{ color: ACCENT }}>•</span>{enrichi(p.slice(2))}</p>
                : <p key={i}>{enrichi(p)}</p>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
