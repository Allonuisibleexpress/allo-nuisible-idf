'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { X, Phone } from 'lucide-react'

const ACCENT = '#E8441A'
const PHONE_HREF = 'tel:+33768077219'

const NUISIBLES = [
  'Punaises de lit',
  'Cafards & blattes',
  'Rongeurs',
  'Fourmis',
  'Guêpes & frelons',
  'Pigeons',
  'Dératisation',
  'Désinfection',
  'Autre',
]

export default function GlobalRdvButton() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [nuisible, setNuisible] = useState('')
  const [nuisibleError, setNuisibleError] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Ne pas afficher sur la page guêpes-frelons
  const isGuepesPage = pathname === '/services/guepes-frelons'

  useEffect(() => {
    if (isGuepesPage) return
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const nearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 140
          setVisible(window.scrollY > 320 && !nearBottom)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isGuepesPage])

  function openModal() {
    const sy = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${sy}px`
    document.body.style.width = '100%'
    setModalOpen(true)
  }
  function closeModal() {
    const top = Math.abs(parseInt(document.body.style.top || '0'))
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    window.scrollTo(0, top)
    setModalOpen(false)
    setTimeout(() => {
      setNuisible('')
      setNuisibleError(false)
      setSubmitted(false)
      setLoading(false)
    }, 350)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!nuisible) { setNuisibleError(true); return }
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    fd.set('nuisible', nuisible)
    const res = await fetch('https://formspree.io/f/xvzjpwdd', {
      method: 'POST',
      body: fd,
      headers: { Accept: 'application/json' },
    })
    setLoading(false)
    if (res.ok) setSubmitted(true)
  }

  if (isGuepesPage) return null

  return (
    <>
      {/* Bouton flottant centré — Appeler maintenant */}
      <a
        href={PHONE_HREF}
        aria-label="Appeler maintenant"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '50%',
          transform: visible
            ? 'translateX(-50%) translateY(0)'
            : 'translateX(-50%) translateY(24px)',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transition: 'opacity 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1)',
          zIndex: 55,
          background: ACCENT,
          borderRadius: '9999px',
          color: '#fff',
          fontWeight: 800,
          fontSize: '0.875rem',
          padding: '0.9rem 2rem',
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        <Phone style={{ width: '1rem', height: '1rem', flexShrink: 0 }} />
        Appelez maintenant
      </a>

      {/* Modal générique */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)', zIndex: 60 }}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div
            className="relative w-full max-w-md rounded-2xl p-6 md:p-8"
            style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 24px 64px rgba(0,0,0,0.7)' }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(232,68,26,0.15)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="text-white font-bold text-lg mb-2">Demande envoyée !</p>
                <p className="text-white/50 text-sm">Nous vous rappelons dans les plus brefs délais.</p>
                <button onClick={closeModal} className="mt-6 text-sm font-semibold px-6 py-2.5 rounded-full text-white" style={{ background: ACCENT }}>Fermer</button>
              </div>
            ) : (
              <>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Rendez-vous</p>
                <h3 className="text-white font-black text-xl mb-5">Demande d&apos;intervention</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white/50 text-xs mb-1.5">Nom</label>
                      <input
                        name="nom"
                        placeholder="Dupont"
                        className="w-full rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:ring-1 focus:ring-[#E8441A]"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs mb-1.5">Téléphone *</label>
                      <input
                        name="telephone"
                        type="tel"
                        required
                        placeholder="06 12 34 56 78"
                        className="w-full rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:ring-1 focus:ring-[#E8441A]"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs mb-1.5">Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="exemple@mail.com"
                      className="w-full rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:ring-1 focus:ring-[#E8441A]"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs mb-2">Type de nuisible *</label>
                    <div className="grid grid-cols-3 gap-2">
                      {NUISIBLES.map((n) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => { setNuisible(n); setNuisibleError(false) }}
                          className="rounded-xl px-2 py-2 text-xs font-semibold transition-all duration-150"
                          style={{
                            background: nuisible === n ? ACCENT : 'rgba(255,255,255,0.06)',
                            border: nuisible === n ? `1px solid ${ACCENT}` : nuisibleError ? '1px solid rgba(232,68,26,0.5)' : '1px solid rgba(255,255,255,0.1)',
                            color: nuisible === n ? '#fff' : 'rgba(255,255,255,0.55)',
                          }}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                    {nuisibleError && <p className="text-xs mt-1.5" style={{ color: ACCENT }}>Veuillez sélectionner un nuisible.</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white/50 text-xs mb-1.5">Ville</label>
                      <input
                        name="ville"
                        placeholder="Paris, Versailles, Créteil…"
                        className="w-full rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:ring-1 focus:ring-[#E8441A]"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs mb-1.5">Situation</label>
                      <input
                        name="situation"
                        placeholder="Maison, appartement…"
                        className="w-full rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:ring-1 focus:ring-[#E8441A]"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-full font-bold text-sm uppercase tracking-wider text-white transition-all duration-200"
                    style={{ background: ACCENT, opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? 'Envoi en cours…' : 'Confirmer la demande'}
                  </button>

                  <p className="text-center text-white/30 text-xs">ou appelez directement le</p>
                  <a
                    href={PHONE_HREF}
                    className="flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm text-white transition-all duration-200 hover:opacity-80"
                    style={{ border: `1px solid rgba(232,68,26,0.4)` }}
                  >
                    <Phone size={14} style={{ color: ACCENT }} />
                    07 68 07 72 19
                  </a>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
