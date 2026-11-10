// Contenu local rédigé à la main pour une ville et un nuisible (10/11/2026) : ce qui est propre à cette ville.
const ACCENT = '#E8441A'

function g(t: string) {
  return t.split(/(\*\*[^*]+\*\*)/g).map((m, i) => (m.startsWith('**') ? <strong key={i} className="text-white font-bold">{m.slice(2, -2)}</strong> : m))
}

export default function LocalVille({ titre, nom, paras }: { titre: string; nom: string; paras?: string[] }) {
  if (!paras || !paras.length) return null
  return (
    <section className="py-12 md:py-16 px-4" style={{ background: '#0d0d0d' }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-3 text-center" style={{ color: ACCENT }}>Spécial {nom}</p>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-6 text-center leading-tight">{titre}</h2>
        <div className="space-y-4 text-white/70 leading-relaxed text-base md:text-lg">
          {paras.map((p, i) => <p key={i}>{g(p)}</p>)}
        </div>
      </div>
    </section>
  )
}
