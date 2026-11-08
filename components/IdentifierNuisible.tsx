'use client'

import { useEffect, useMemo, useState } from 'react'
import { Search, RotateCcw, ArrowLeft, ArrowRight, Phone, Camera, Ruler } from 'lucide-react'
import { FICHES, PIECES, DANGERS, ETAPES, ficheParId, type Fiche, type Piece } from '@/lib/identifier-nuisibles'

const ACCENT = '#E8441A'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }
const TEL = 'tel:+33768077219'
const SMS = 'https://wa.me/33768077219?text=Bonjour%2C%20voici%20une%20photo%20du%20nuisible%20trouv%C3%A9%20chez%20moi%20%3A'

/* ── Scanner animé : une ligne laser balaie la photo, le nuisible change à chaque passage ── */
const SCAN_IDS = ['punaise-de-lit', 'blatte-germanique', 'rat', 'frelon-asiatique', 'souris', 'guepe', 'poisson-argent', 'chenille-processionnaire']
const DUREE = 2600

export function Scanner() {
  const [i, setI] = useState(0)
  const [trouve, setTrouve] = useState(false)
  useEffect(() => {
    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduit) { setTrouve(true); return }
    let t1: ReturnType<typeof setTimeout>
    const cycle = () => {
      setTrouve(false)
      t1 = setTimeout(() => setTrouve(true), DUREE * 0.62)
    }
    cycle()
    const t = setInterval(() => { setI((n) => (n + 1) % SCAN_IDS.length); cycle() }, DUREE)
    return () => { clearInterval(t); clearTimeout(t1) }
  }, [])
  const f = ficheParId(SCAN_IDS[i])
  const coin = 'absolute w-7 h-7 border-[3px]'
  return (
    <div className="flex flex-col items-center mb-6" aria-hidden>
      <style>{`
        @keyframes scan-ligne { 0% { top: 4% } 50% { top: 92% } 100% { top: 4% } }
        @keyframes scan-pouls { 0%,100% { opacity: .55 } 50% { opacity: 1 } }
        @keyframes scan-apparait { from { opacity: 0; transform: scale(1.06) } to { opacity: 1; transform: scale(1) } }
        .scan-ligne { animation: scan-ligne ${DUREE}ms ease-in-out infinite }
        .scan-coin { animation: scan-pouls 1.3s ease-in-out infinite }
        .scan-img { animation: scan-apparait .45s ease-out }
        @media (prefers-reduced-motion: reduce) { .scan-ligne, .scan-coin, .scan-img { animation: none } }
      `}</style>
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 p-2.5">
        <span className={`${coin} scan-coin top-0 left-0 border-r-0 border-b-0 rounded-tl-xl`} style={{ borderColor: ACCENT }} />
        <span className={`${coin} scan-coin top-0 right-0 border-l-0 border-b-0 rounded-tr-xl`} style={{ borderColor: ACCENT }} />
        <span className={`${coin} scan-coin bottom-0 left-0 border-r-0 border-t-0 rounded-bl-xl`} style={{ borderColor: ACCENT }} />
        <span className={`${coin} scan-coin bottom-0 right-0 border-l-0 border-t-0 rounded-br-xl`} style={{ borderColor: ACCENT }} />
        <div className="relative w-full h-full rounded-xl overflow-hidden" style={{ background: '#111' }}>
          <img key={f.id} src={f.photo.src} alt="" className="scan-img w-full h-full object-cover" style={{ filter: trouve ? 'none' : 'grayscale(0.6) brightness(0.75)', transition: 'filter .4s' }} />
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '100% 6px' }} />
          <div className="scan-ligne absolute left-0 right-0 h-[3px]" style={{ background: ACCENT, boxShadow: `0 0 12px 3px ${ACCENT}, 0 0 28px 8px rgba(232,68,26,0.45)` }} />
        </div>
      </div>
      <p className="mt-3 h-6 text-sm font-black tracking-widest uppercase" style={{ color: trouve ? ACCENT : 'rgba(255,255,255,0.5)' }}>
        {trouve ? `Identifié : ${f.nom.replace(/ \(.*\)$/, '')}` : 'Analyse en cours…'}
      </p>
    </div>
  )
}

function Badge({ f }: { f: Fiche }) {
  const d = DANGERS[f.danger]
  return (
    <span className="inline-flex items-center text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
      style={{ color: d.couleur, background: d.fond, border: `1px solid ${d.couleur}55` }}>{d.label}</span>
  )
}

function Photo({ f, h = 'h-44' }: { f: Fiche; h?: string }) {
  const fondBlanc = /AntWeb|microscope|Gouvernement|Clemson/.test(f.photo.credit + f.aspect)
  return (
    <figure>
      <img src={f.photo.src} alt={`${f.nom} (${f.latin}) en photo`} loading="lazy" width={480} height={320}
        className={`w-full ${h} rounded-t-2xl ${fondBlanc ? 'object-contain bg-white p-2' : 'object-cover'}`} />
      <figcaption className="px-5 pt-1.5 text-[10px] text-white/35 leading-snug text-left">
        Photo : <a href={f.photo.page} target="_blank" rel="noopener noreferrer nofollow" className="underline">{f.photo.credit}</a>, {f.photo.licence}
      </figcaption>
    </figure>
  )
}

function CarteFiche({ f }: { f: Fiche }) {
  return (
    <article id={f.id} className="rounded-2xl overflow-hidden flex flex-col scroll-mt-24" style={card}>
      <Photo f={f} />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="text-white font-black text-lg leading-tight">{f.nom}</h3>
          <Badge f={f} />
        </div>
        <p className="text-white/45 text-sm italic mb-3">{f.latin}</p>
        <p className="flex items-center gap-1.5 text-xs text-white/70 mb-3"><Ruler className="w-3.5 h-3.5" style={{ color: ACCENT }} />{f.taille}</p>
        <p className="text-white/80 text-sm leading-relaxed mb-2">{f.aspect}</p>
        <p className="text-white/60 text-sm leading-relaxed mb-3"><strong className="text-white">Indices : </strong>{f.signes}</p>
        <p className="text-sm leading-relaxed mb-4 rounded-xl px-3 py-2" style={{ background: 'rgba(232,68,26,0.08)', color: 'rgba(255,255,255,0.8)' }}>
          <strong style={{ color: ACCENT }}>Bon réflexe : </strong>{f.conseil}
        </p>
        <div className="mt-auto space-y-2">
          {f.prix && <p className="text-white font-black">Traitement {f.prix}</p>}
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {f.service && <a href={f.service.href} className="inline-flex items-center gap-1 text-sm font-bold" style={{ color: ACCENT }}>{f.service.label} <ArrowRight className="w-4 h-4" /></a>}
            {f.guide && <a href={f.guide.href} className="inline-flex items-center gap-1 text-sm font-bold text-white/75 hover:text-white">{f.guide.label} <ArrowRight className="w-4 h-4" /></a>}
          </div>
        </div>
      </div>
    </article>
  )
}

/* ── Test « détective » ── */
export function Detective() {
  const [chemin, setChemin] = useState<string[]>(['depart'])
  const [verdict, setVerdict] = useState<string[] | null>(null)
  const etape = ETAPES[chemin[chemin.length - 1]]
  const total = verdict ? chemin.length : chemin.length + 1

  const choisir = (suite?: string, v?: string[]) => {
    if (v) setVerdict(v)
    else if (suite) setChemin([...chemin, suite])
  }
  const retour = () => {
    if (verdict) setVerdict(null)
    else if (chemin.length > 1) setChemin(chemin.slice(0, -1))
  }
  const recommencer = () => { setChemin(['depart']); setVerdict(null) }

  return (
    <div className="rounded-3xl p-5 md:p-8 text-left" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(232,68,26,0.35)' }}>
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="flex gap-1.5" aria-hidden>
          {Array.from({ length: Math.max(3, total) }).map((_, i) => (
            <span key={i} className="h-1.5 w-8 rounded-full" style={{ background: verdict || i < chemin.length ? ACCENT : 'rgba(255,255,255,0.12)' }} />
          ))}
        </div>
        {(chemin.length > 1 || verdict) && (
          <div className="flex gap-3">
            <button onClick={retour} className="inline-flex items-center gap-1 text-xs font-bold text-white/60 hover:text-white"><ArrowLeft className="w-3.5 h-3.5" />Retour</button>
            <button onClick={recommencer} className="inline-flex items-center gap-1 text-xs font-bold text-white/60 hover:text-white"><RotateCcw className="w-3.5 h-3.5" />Recommencer</button>
          </div>
        )}
      </div>

      {!verdict ? (
        <>
          <h3 className="text-xl md:text-2xl font-black text-white mb-1 text-center">{etape.question}</h3>
          {etape.aide && <p className="text-white/50 text-sm mb-5 text-center">{etape.aide}</p>}
          <div className={`grid gap-2.5 ${etape.choix.length > 4 ? 'sm:grid-cols-2' : 'sm:grid-cols-2'} mt-4`}>
            {etape.choix.map((c) => (
              <button key={c.label} onClick={() => choisir(c.suite, c.verdict)}
                className="text-left text-white font-bold text-sm md:text-base px-4 py-3.5 rounded-xl transition hover:-translate-y-0.5"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
                {c.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <p className="text-xs font-black uppercase tracking-widest mb-2 text-center" style={{ color: ACCENT }}>Notre verdict</p>
          <h3 className="text-xl md:text-2xl font-black text-white mb-5 text-center">
            {verdict.length === 1 ? 'C’est très probablement :' : 'Les suspects les plus probables :'}
          </h3>
          <div className={`grid gap-4 ${verdict.length > 1 ? 'md:grid-cols-2' : ''}`}>
            {verdict.map((id) => {
              const f = ficheParId(id)
              return (
                <div key={id} className="rounded-2xl overflow-hidden" style={card}>
                  <Photo f={f} h="h-40" />
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <p className="text-white font-black text-lg">{f.nom}</p><Badge f={f} />
                    </div>
                    <p className="text-white/70 text-sm mb-2">{f.aspect}</p>
                    <p className="text-white/85 text-sm mb-3"><strong style={{ color: ACCENT }}>Bon réflexe : </strong>{f.conseil}</p>
                    {f.prix && <p className="text-white font-black text-sm mb-2">Traitement {f.prix}</p>}
                    <a href={`#${f.id}`} className="inline-flex items-center gap-1 text-sm font-bold" style={{ color: ACCENT }}>Voir la fiche complète <ArrowRight className="w-4 h-4" /></a>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-6 rounded-2xl p-5 text-center" style={{ background: 'rgba(232,68,26,0.1)' }}>
            <p className="text-white font-bold mb-3">Un doute ? Envoyez-nous une photo, un technicien certifié vous répond gratuitement.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={SMS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-black text-white px-5 py-3 rounded-xl" style={{ background: ACCENT }}><Camera className="w-5 h-5" />Envoyer une photo sur WhatsApp</a>
              <a href={TEL} className="inline-flex items-center gap-2 font-black text-white px-5 py-3 rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.25)' }}><Phone className="w-5 h-5" />07 68 07 72 19</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ── Galerie filtrable ── */
const sansAccent = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export function Galerie() {
  const [piece, setPiece] = useState<Piece | 'tout'>('tout')
  const [q, setQ] = useState('')
  const liste = useMemo(() => {
    const t = sansAccent(q.trim())
    return FICHES.filter((f) => (piece === 'tout' || f.pieces.includes(piece)) &&
      (!t || sansAccent(`${f.nom} ${f.latin} ${f.surnoms} ${f.aspect}`).includes(t)))
  }, [piece, q])

  const chip = (actif: boolean) => actif
    ? { background: ACCENT, color: '#fff', border: `1px solid ${ACCENT}` }
    : { background: 'transparent', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.18)' }

  return (
    <div>
      <div className="max-w-xl mx-auto mb-5 relative">
        <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher : cafard, bête argentée, pinces..."
          className="w-full rounded-full pl-12 pr-4 py-3.5 text-white placeholder-white/35 outline-none focus:ring-2"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)' }} aria-label="Rechercher un nuisible" />
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button onClick={() => setPiece('tout')} className="text-sm font-bold px-4 py-2 rounded-full" style={chip(piece === 'tout')}>Tous ({FICHES.length})</button>
        {PIECES.map((p) => (
          <button key={p.id} onClick={() => setPiece(p.id)} className="text-sm font-bold px-4 py-2 rounded-full" style={chip(piece === p.id)}>
            {p.label} ({FICHES.filter((f) => f.pieces.includes(p.id)).length})
          </button>
        ))}
      </div>
      {liste.length === 0 ? (
        <p className="text-center text-white/60">Aucun résultat. Envoyez-nous une photo : nous l’identifions pour vous.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {liste.map((f) => <CarteFiche key={f.id} f={f} />)}
        </div>
      )}
    </div>
  )
}
