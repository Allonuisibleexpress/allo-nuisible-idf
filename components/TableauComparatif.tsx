// Tableau comparatif placé au fil d'un contenu long (13/11/2026), même rendu que le tableau des pages services.
const ACCENT = '#E8441A'

export default function TableauComparatif({ titre, intro, head, rows }: { titre: string; intro?: string; head: string[]; rows: string[][] }) {
  return (
    <section className="py-14 md:py-16 px-4" style={{ background: '#0d0d0d' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3 text-center leading-tight">{titre}</h2>
        {intro && <p className="text-white/60 mb-6 text-center">{intro}</p>}
        <div className="overflow-x-auto rounded-2xl" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <table className="w-full text-sm">
            <thead>
              <tr>{head.map((h, j) => <th key={h || j} scope="col" className="text-left font-bold px-4 py-3" style={{ color: '#F0562A' }}>{h || <span className="sr-only">Critère</span>}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]} className="border-t border-white/10">
                  {r.map((cell, j) => j === 0 ? <th key={j} scope="row" className="px-4 py-3 align-top text-left text-white font-bold">{cell}</th> : <td key={j} className="px-4 py-3 align-top text-white/70">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
