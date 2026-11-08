// Met les prix en gros et en orange dans un texte (demande de l'utilisateur, 08/11/2026 : prix trop petits).
// Repère « à partir de 89 € TTC », « dès 290 € TTC », « 149 € TTC »…
const ACCENT = '#E8441A'
const RE = /((?:[àÀ] partir de |[dD]ès )?\d[\d\s]*\s?€(?:\s?TTC)?)/g

export function avecPrix(text: string) {
  const parts = text.split(RE)
  return parts.map((p, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-black whitespace-nowrap" style={{ color: ACCENT, fontSize: '1.35em', lineHeight: 1.2 }}>{p}</strong>
    ) : (
      p
    ),
  )
}

// Premier prix trouvé dans une liste de phrases (pour l'étiquette en tête d'encadré)
export function premierPrix(textes: string[]) {
  for (const t of textes) {
    const m = t.match(/(?:[àÀ] partir de |[dD]ès )(\d[\d\s]*\s?€)/)
    if (m) return m[1].trim()
  }
  return null
}

export function EtiquettePrix({ prix }: { prix: string | null }) {
  if (!prix) return null
  return (
    <p className="mb-4">
      <span className="inline-flex items-baseline gap-2 rounded-2xl px-5 py-3" style={{ background: 'rgba(232,68,26,0.12)', border: '1.5px solid rgba(232,68,26,0.4)' }}>
        <span className="text-white/80 font-bold text-sm md:text-base">À partir de</span>
        <span className="font-black text-3xl md:text-4xl" style={{ color: ACCENT }}>{prix}</span>
        <span className="text-white/80 font-bold text-sm md:text-base">TTC</span>
      </span>
      <span className="inline-block align-middle ml-2 mt-2 font-black uppercase tracking-wide text-sm md:text-base px-4 py-2 rounded-full" style={{ background: ACCENT, color: '#fff' }}>Devis gratuit</span>
    </p>
  )
}
