'use client'

import { useState, useEffect } from 'react'
import { Phone, ShieldCheck, ArrowRight } from 'lucide-react'

const ACCENT = '#E8441A'
const PHONE = '07 68 07 72 19'
const PHONE_HREF = 'tel:+33768077219'
const WA = 'https://wa.me/33768077219'

export default function Hero() {
  // Valeur stable au SSR (évite le mismatch d'hydratation), variée après montage
  const [techCount, setTechCount] = useState(2)
  const [parallax, setParallax] = useState(0)

  useEffect(() => {
    setTechCount([2, 2, 2, 3][Math.floor(Math.random() * 4)])
  }, [])

  // Parallax doux de l'image de fond
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setParallax(window.scrollY * 0.16)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="accueil"
      className="relative flex flex-col justify-center items-center overflow-hidden px-5 sm:px-10 lg:px-16 pt-12 pb-16 md:pt-16 md:pb-20"
      style={{ background: '#0d0d0d', minHeight: '100svh' }}
    >
      {/* ── Vraie image en fond, parallax (étendue ±15% pour éviter le gap) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-15%', bottom: '-15%', left: 0, right: 0,
          backgroundImage: 'url(/hero-fourmis.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 32%',
          opacity: 0.5,
          transform: `translateY(${parallax}px)`,
          willChange: 'transform',
        }}
      />
      {/* Voile dégradé — lisibilité + fondu vers le bas */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(13,13,13,0.62) 0%, rgba(13,13,13,0.42) 42%, rgba(13,13,13,0.97) 100%)',
      }} />
      {/* Halo orange central subtil */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 55% 45% at 50% 40%, rgba(232,68,26,0.16) 0%, transparent 70%)',
      }} />
      {/* Grille fine décorative */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      {/* ── CONTENU ── */}
      <div className="relative w-full max-w-4xl mx-auto text-center">

        {/* Badge live */}
        <div className="hero-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-7" style={{
          background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.28)',
          backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
        }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ boxShadow: '0 0 8px rgba(74,222,128,0.9)' }} />
          <span className="text-green-400 text-xs font-black tracking-widest uppercase">
            {techCount} techniciens disponibles · 7j/7
          </span>
        </div>

        {/* H1 */}
        <h1 className="hero-2 font-black text-white tracking-tight mb-6" style={{ fontSize: 'clamp(3.2rem, 9vw, 6.75rem)', lineHeight: 0.9 }}>
          Nuisibles<br />
          <span style={{ color: ACCENT }}>éliminés.</span>
        </h1>

        <p className="hero-3 text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
          Guêpes, punaises, rongeurs, cafards — nos techniciens{' '}
          <strong className="text-white font-bold">certifiés Certibiocide</strong>{' '}
          interviennent le jour même, partout en Île-de-France.{' '}
          <strong style={{ color: ACCENT }}>Résultat garanti 1 mois.</strong>
        </p>

        {/* ── Bouton "lava" — numéro ── */}
        <div className="hero-4 mb-9">
          <a
            href={PHONE_HREF}
            style={{
              position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              gap: '16px', padding: 'clamp(18px,2.6vw,28px) clamp(34px,5.5vw,68px)', borderRadius: '20px',
              background: 'linear-gradient(105deg, #FF5A1A 0%, #E8441A 45%, #C00000 100%)',
              color: '#1a0500', fontWeight: 900, fontSize: 'clamp(1.6rem, 4.6vw, 2.85rem)',
              letterSpacing: '-0.02em', lineHeight: 1, textDecoration: 'none', overflow: 'hidden',
              boxShadow: '0 8px 60px rgba(232,68,26,0.65), inset 0 1px 0 rgba(255,255,255,0.2)',
            }}
          >
            <span aria-hidden="true" style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,90,10,0.45)', filter: 'blur(60px)', left: '-80px', top: '50%', transform: 'translateY(-50%)', animation: 'blobA 9s ease-in-out infinite', pointerEvents: 'none' }} />
            <span aria-hidden="true" style={{ position: 'absolute', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(160,0,0,0.55)', filter: 'blur(55px)', right: '-70px', top: '50%', transform: 'translateY(-50%)', animation: 'blobB 12s ease-in-out infinite', pointerEvents: 'none' }} />
            <Phone style={{ width: '0.72em', height: '0.72em', flexShrink: 0, position: 'relative', zIndex: 1 }} />
            <span style={{ position: 'relative', zIndex: 1 }}>{PHONE}</span>
          </a>
          <p className="text-white/40 text-xs tracking-widest uppercase mt-4">
            Appel gratuit · Réponse sous 5 min · 7j/7
          </p>
        </div>

        {/* ── Barre de confiance — verre ── */}
        <div className="hero-5 inline-flex flex-wrap items-center justify-center overflow-hidden rounded-2xl mb-6" style={{
          background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.14)',
        }}>
          <div className="flex items-center gap-2.5 px-5 py-3.5">
            <span className="font-black text-base" style={{ background: 'linear-gradient(90deg,#4285F4,#EA4335,#FBBC05,#34A853)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>G</span>
            <span className="tracking-tight text-sm" style={{ color: '#facc15' }}>★★★★★</span>
            <span className="text-white font-bold text-sm">5,0</span>
            <span className="text-white/40 text-sm hidden sm:inline">· 47 avis</span>
          </div>
          <div className="w-px self-stretch bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2 px-5 py-3.5">
            <ShieldCheck className="w-4 h-4" style={{ color: ACCENT }} />
            <span className="text-white/80 text-sm font-medium">Certibiocide</span>
          </div>
          <div className="w-px self-stretch bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2 px-5 py-3.5">
            <ShieldCheck className="w-4 h-4" style={{ color: ACCENT }} />
            <span className="text-white/80 text-sm font-medium">Garantie 1 mois</span>
          </div>
        </div>

        {/* ── CTAs secondaires ── */}
        <div className="hero-5 flex flex-wrap items-center justify-center gap-3">
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-bold text-white px-6 py-3.5 rounded-xl text-sm transition-all hover:brightness-110"
            style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}>
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L0 24l6.335-1.502A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.803 9.803 0 01-5.002-1.368l-.36-.214-3.735.885.944-3.619-.235-.372A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            WhatsApp
          </a>
          <a href="/tarifs"
            className="inline-flex items-center gap-2 font-bold px-6 py-3.5 rounded-xl text-sm transition-all hover:brightness-125"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', color: 'rgba(255,255,255,0.85)' }}>
            Voir les tarifs <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
