// Échelle des crottes (12/11/2026) : tailles proportionnelles, comparées à une pièce de 1 € (23,25 mm de diamètre).
// Tailles : Cornell, Université du Kentucky, NCAT (souris, rats), Natagora (fouine), fiche lérot ; valeurs moyennes des fourchettes.
const ACCENT = '#E8441A'

// Forme : « pointue » (grain effilé), « gelule » (bouts arrondis), « torsade » (fouine)
const ROWS: { nom: string; taille: string; mm: number; ep: number; forme: 'pointue' | 'gelule' | 'torsade' }[] = [
  { nom: 'Souris', taille: '3 à 6 mm', mm: 5, ep: 1.8, forme: 'pointue' },
  { nom: 'Lérot', taille: 'env. 6 à 8 mm', mm: 7, ep: 2.4, forme: 'pointue' },
  { nom: 'Rat noir', taille: '6 à 12 mm', mm: 10, ep: 3, forme: 'pointue' },
  { nom: 'Surmulot', taille: 'env. 2 cm', mm: 19, ep: 6, forme: 'gelule' },
  { nom: 'Fouine', taille: '8 à 10 cm', mm: 90, ep: 10, forme: 'torsade' },
]

function Crotte({ x, y, mm, ep, forme }: { x: number; y: number; mm: number; ep: number; forme: string }) {
  const c = '#7a5232'
  if (forme === 'gelule') return <rect x={x} y={y - ep / 2} width={mm} height={ep} rx={ep / 2} fill={c} />
  if (forme === 'pointue') return <path d={`M${x},${y} Q${x + mm * 0.25},${y - ep / 2} ${x + mm / 2},${y - ep / 2} Q${x + mm * 0.85},${y - ep / 2} ${x + mm},${y} Q${x + mm * 0.85},${y + ep / 2} ${x + mm / 2},${y + ep / 2} Q${x + mm * 0.25},${y + ep / 2} ${x},${y} Z`} fill={c} />
  // torsade : 4 segments arrondis légèrement décalés, extrémité effilée
  const seg = mm / 4
  return (
    <g fill={c}>
      {[0, 1, 2].map((i) => <rect key={i} x={x + i * seg} y={y - ep / 2 + (i % 2 ? 1 : -1) * 0.8} width={seg + 2} height={ep} rx={ep / 2} />)}
      <path d={`M${x + 3 * seg},${y - ep / 2 + 0.8} L${x + mm},${y} L${x + 3 * seg},${y + ep / 2 + 0.8} Z`} />
    </g>
  )
}

export default function EchelleCrottes() {
  const X = 44, H = 26 + ROWS.length * 17
  return (
    <figure style={{ margin: '8px 0 28px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '16px', padding: '18px 14px' }}>
      <svg viewBox={`0 0 140 ${H}`} width="100%" role="img" aria-label="Tailles comparées des crottes : souris 3 à 6 mm, lérot 6 à 8 mm, rat noir 6 à 12 mm, surmulot environ 2 cm, fouine 8 à 10 cm, à côté d'une pièce de 1 euro de 23,25 mm">
        {/* Pièce de 1 € pour l'échelle */}
        <circle cx={X + 11.6} cy={12} r={11.6} fill="#c9a24a" />
        <circle cx={X + 11.6} cy={12} r={8.4} fill="#cfd3d6" />
        <text x={X + 11.6} y={13.6} textAnchor="middle" fontSize="5" fontWeight="800" fill="#333">1 €</text>
        <text x={X + 27} y={11} fontSize="3.6" fill="rgba(255,255,255,0.75)">Pièce de 1 € : 23,25 mm</text>
        <text x={X + 27} y={15.5} fontSize="3" fill="rgba(255,255,255,0.45)">toutes les formes sont à la même échelle</text>
        {ROWS.map((r, i) => {
          const y = 34 + i * 17
          return (
            <g key={r.nom}>
              <text x={0} y={y - 1} fontSize="4.2" fontWeight="800" fill="#fff">{r.nom}</text>
              <text x={0} y={y + 4.2} fontSize="3.4" fill={ACCENT}>{r.taille}</text>
              <Crotte x={X} y={y} mm={r.mm} ep={r.ep} forme={r.forme} />
            </g>
          )
        })}
      </svg>
      <figcaption style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginTop: '8px' }}>
        Posez une pièce de 1 € à côté des crottes trouvées et comparez. Formes simplifiées, tailles moyennes des fourchettes publiées.
      </figcaption>
    </figure>
  )
}
