'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Image from 'next/image'

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  // Animation d'intro au chargement
  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(5, Math.min(clientX - rect.left, rect.width - 5))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (dragging.current) updatePosition(e.clientX)
  }, [updatePosition])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    if (dragging.current) updatePosition(e.touches[0].clientX)
  }, [updatePosition])

  const startDrag = useCallback(() => {
    dragging.current = true
    setIsDragging(true)
  }, [])

  const stopDrag = useCallback(() => {
    dragging.current = false
    setIsDragging(false)
  }, [])

  return (
    <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group">
      {/* Lueur orange premium autour */}
      <div className="absolute -inset-1 bg-gradient-to-br from-[#E8441A]/20 via-transparent to-[#E8441A]/10 rounded-3xl blur-xl -z-10" />

      <div
        ref={containerRef}
        className="relative w-full h-full cursor-col-resize select-none rounded-3xl overflow-hidden"
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchMove={onTouchMove}
        onTouchEnd={stopDrag}
      >
        {/* ─── APRÈS (fond complet) ─── */}
        <div className="absolute inset-0">
          <Image
            src="/apres.jpg"
            alt="Après intervention"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Overlay léger pour premium */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent" />
          {/* Badge APRÈS */}
          <div className="absolute top-5 right-5 flex items-center gap-2 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-black px-4 py-2 rounded-full shadow-lg uppercase tracking-widest">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Après
          </div>
          {/* Label bas */}
          <div className="absolute bottom-5 right-5 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Traitement terminé
          </div>
        </div>

        {/* ─── AVANT (clipé) ─── */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src="/avant.jpg"
            alt="Avant intervention"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Overlay dramatique pour l'avant */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 via-transparent to-transparent" />
          {/* Badge AVANT */}
          <div className="absolute top-5 left-5 flex items-center gap-2 bg-red-600/90 backdrop-blur-sm text-white text-xs font-black px-4 py-2 rounded-full shadow-lg uppercase tracking-widest">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 2L8 8M8 2L2 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Avant
          </div>
          {/* Label bas */}
          <div className="absolute bottom-5 left-5 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-red-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 1L13 12H1L7 1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M7 6V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="7" cy="10.3" r=".7" fill="currentColor"/></svg>
            Infestation détectée
          </div>
        </div>

        {/* ─── Ligne diviseur ─── */}
        <div
          className="absolute top-0 bottom-0 w-px"
          style={{
            left: `${position}%`,
            transform: 'translateX(-50%)',
            background: 'linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)',
            boxShadow: '0 0 16px rgba(255,255,255,0.9)',
          }}
        />

        {/* ─── Poignée centrale ─── */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 transition-transform duration-150 ${isDragging ? 'scale-110' : 'scale-100 group-hover:scale-105'}`}
          style={{ left: `${position}%` }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          {/* Cercle extérieur glow */}
          <div className={`absolute inset-0 rounded-full bg-[#E8441A]/30 blur-md scale-150 transition-opacity ${isDragging ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`} />
          {/* Bouton */}
          <div className="relative w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing border-2 border-[#E8441A]/20">
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
              <path d="M1 7H21M1 7L5 3M1 7L5 11M21 7L17 3M21 7L17 11" stroke="#E8441A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* Ligne verticale au-dessus et en-dessous */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-7 bg-white/70" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-7 bg-white/70" />
        </div>

        {/* ─── Hint animé ─── */}
        <div className={`absolute bottom-16 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-xs px-4 py-1.5 rounded-full pointer-events-none transition-opacity duration-500 whitespace-nowrap ${isDragging ? 'opacity-0' : 'opacity-100'}`}>
          ← Glissez pour comparer →
        </div>
      </div>
    </div>
  )
}
