'use client'
// Carte vidéo de chantier (19/11/2026), sur le modèle d'Allo Nuisible Express : cadre arrondi, image d'aperçu,
// gros bouton lecture, étiquettes « nuisible » et « Intervention réelle », titre et petite description en dessous.
// La vidéo ne se charge qu'au clic (aucun téléchargement à l'ouverture de la page).
import { useState } from 'react'
import { Play, Youtube, MapPin, ArrowRight } from 'lucide-react'
import type { FicheVideo } from '@/lib/videos-fiches'

const THEMES: Record<FicheVideo['theme'], { bord: string; badge: string; texte: string; halo: string }> = {
  froid: { bord: 'rgba(124,198,255,0.45)', badge: 'rgba(124,198,255,0.18)', texte: '#bfe3ff', halo: 'rgba(124,198,255,0.12)' },
  feu: { bord: 'rgba(232,68,26,0.45)', badge: 'rgba(232,68,26,0.2)', texte: '#ffc2ad', halo: 'rgba(232,68,26,0.10)' },
  rat: { bord: 'rgba(255,255,255,0.22)', badge: 'rgba(255,255,255,0.14)', texte: '#e8e8e8', halo: 'rgba(255,255,255,0.05)' },
  frelon: { bord: 'rgba(245,180,40,0.45)', badge: 'rgba(245,180,40,0.18)', texte: '#ffd98a', halo: 'rgba(245,180,40,0.10)' },
  vert: { bord: 'rgba(63,178,127,0.45)', badge: 'rgba(63,178,127,0.18)', texte: '#a8e6c8', halo: 'rgba(63,178,127,0.10)' },
}

export default function VideoCarte({ src, poster, fiche, youtube, pageActuelle, grand = false, mention, natif = false }: { src: string; poster?: string; fiche: FicheVideo; youtube?: string; pageActuelle?: string; grand?: boolean; mention?: string; natif?: boolean /* lecteur vidéo présent dès le chargement (page dont la vidéo est le sujet principal, pour Google) */ }) {
  const lien = fiche.lien && fiche.lien.href.split('#')[0] !== pageActuelle ? fiche.lien : undefined
  const [lecture, setLecture] = useState(natif)
  const t = THEMES[fiche.theme]
  return (
    <article className={`flex flex-col rounded-[22px] overflow-hidden text-left h-full w-full mx-auto ${grand ? 'max-w-[460px]' : 'max-w-[360px]'}`}
      style={{ background: `linear-gradient(180deg, ${t.halo}, rgba(255,255,255,0.02) 40%), #0e0e0e`, border: `1px solid ${t.bord}`, boxShadow: '0 18px 40px rgba(0,0,0,0.45)' }}>
      <div className="relative w-full" style={{ aspectRatio: '9 / 16', background: '#111' }}>
        {lecture ? (
          <video src={src} poster={poster} controls autoPlay={!natif} preload={natif ? 'none' : undefined} playsInline className="absolute inset-0 w-full h-full object-cover" aria-label={fiche.titre} />
        ) : (
          <button type="button" onClick={() => setLecture(true)} className="group absolute inset-0 w-full h-full">
            <span className="sr-only">Lire la vidéo : {fiche.titre}</span>
            {poster && <img src={poster} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />}
            <span className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.65) 100%)' }} />
            <span aria-hidden="true" className="absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider backdrop-blur-sm"
              style={{ background: t.badge, color: t.texte, border: `1px solid ${t.bord}` }}>{fiche.badge}</span>
            <span aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[72px] h-[72px] rounded-full transition-transform group-hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.92)', boxShadow: '0 0 0 8px rgba(255,255,255,0.18), 0 10px 30px rgba(0,0,0,0.5)' }}>
              <Play className="w-8 h-8 ml-1" style={{ color: '#F0562A', fill: '#E8441A' }} aria-hidden="true" />
            </span>
            <span aria-hidden="true" className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold text-white backdrop-blur-sm" style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#3FB27F' }} /> Intervention réelle
            </span>
            {fiche.duree > 0 && (
              <span aria-hidden="true" className="absolute bottom-3 right-3 rounded-full px-2.5 py-1 text-[11px] font-bold text-white" style={{ background: 'rgba(0,0,0,0.55)' }}>
                {fiche.duree >= 60 ? `${Math.floor(fiche.duree / 60)} min ${String(fiche.duree % 60).padStart(2, '0')}` : `${fiche.duree} s`}
              </span>
            )}
          </button>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: t.texte }}>
          <MapPin className="w-3.5 h-3.5" aria-hidden="true" /> {fiche.lieu}
        </p>
        {mention && (
          <p className="text-xs font-bold rounded-lg px-3 py-2 mb-3" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.12)' }}>{mention}</p>
        )}
        <h3 className="text-white font-black text-lg leading-snug mb-2">{fiche.titre}</h3>
        {fiche.description && <p className="text-white/70 text-sm leading-relaxed">{fiche.description}</p>}
        {lien && (
          <a href={lien.href} className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white transition-colors hover:brightness-110"
            style={{ background: 'rgba(232,68,26,0.16)', border: '1px solid rgba(232,68,26,0.45)' }}>
            {lien.label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        )}
        {youtube && (
          <a href={youtube} target="_blank" rel="noopener" className="mt-auto pt-3 inline-flex items-center gap-1.5 text-xs font-bold underline underline-offset-2" style={{ color: '#F0562A' }}>
            <Youtube className="w-3.5 h-3.5" aria-hidden="true" /> Voir sur YouTube
          </a>
        )}
      </div>
    </article>
  )
}
