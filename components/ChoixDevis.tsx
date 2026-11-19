'use client'
// Fenêtre « Devis gratuit » (20/11/2026, demande de l'utilisateur) : au clic sur « Devis gratuit », le client choisit
// entre appeler, écrire sur WhatsApp ou remplir le formulaire. S'ouvre par l'événement « ouvrirChoixDevis » ou par
// n'importe quel lien vers « #devis ».
import { useEffect, useRef, useState } from 'react'
import { Phone, MessageCircle, FileText, X } from 'lucide-react'
import { lienWa } from '@/components/LienWhatsApp'

export const ouvrirChoixDevis = () => window.dispatchEvent(new CustomEvent('ouvrirChoixDevis'))

export default function ChoixDevis() {
  const [ouvert, setOuvert] = useState(false)
  const fermer = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const ouvrir = () => setOuvert(true)
    const clic = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href="#devis"]')
      if (a) { e.preventDefault(); setOuvert(true) }
    }
    window.addEventListener('ouvrirChoixDevis', ouvrir)
    document.addEventListener('click', clic)
    return () => { window.removeEventListener('ouvrirChoixDevis', ouvrir); document.removeEventListener('click', clic) }
  }, [])

  useEffect(() => {
    if (!ouvert) return
    fermer.current?.focus()
    const echap = (e: KeyboardEvent) => { if (e.key === 'Escape') setOuvert(false) }
    window.addEventListener('keydown', echap)
    return () => window.removeEventListener('keydown', echap)
  }, [ouvert])

  if (!ouvert) return null
  const allerFormulaire = () => {
    setOuvert(false)
    setTimeout(() => { document.getElementById('demande')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('dm-nom')?.focus({ preventScroll: true }) }, 50)
  }
  const choix = 'flex items-center gap-4 w-full rounded-2xl px-5 py-4 text-left text-white'
  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.75)' }} onClick={(e) => { if (e.target === e.currentTarget) setOuvert(false) }}>
      <div role="dialog" aria-modal="true" aria-labelledby="choix-devis-titre" className="relative w-full max-w-md rounded-3xl p-6" style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 24px 64px rgba(0,0,0,0.7)', marginBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        <button ref={fermer} type="button" onClick={() => setOuvert(false)} className="absolute top-4 right-4 text-white/70 hover:text-white" aria-label="Fermer"><X className="w-5 h-5" /></button>
        <h2 id="choix-devis-titre" className="text-xl font-black text-white mb-1">Votre devis gratuit</h2>
        <p className="text-white/65 text-sm mb-5">Choisissez comment nous contacter. Réponse en 5 minutes, 7j/7, sans majoration la nuit et le week-end.</p>
        <div className="grid gap-3">
          <a href="tel:+33768077219" className={choix} style={{ background: '#B8330D' }} onClick={() => setOuvert(false)}>
            <Phone className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
            <span><span className="block font-black">Appeler</span><span className="block text-sm text-white/85">07 68 07 72 19, un technicien répond</span></span>
          </a>
          <a href={lienWa('devis')} target="_blank" rel="noopener noreferrer" className={choix} style={{ background: '#157A40' }} onClick={() => setOuvert(false)}>
            <MessageCircle className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
            <span><span className="block font-black">Écrire sur WhatsApp</span><span className="block text-sm text-white/85">Envoyez un message et une photo</span></span>
          </a>
          <button type="button" className={choix} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)' }} onClick={allerFormulaire}>
            <FileText className="w-6 h-6 flex-shrink-0" style={{ color: '#F0562A' }} aria-hidden="true" />
            <span><span className="block font-black">Remplir le formulaire</span><span className="block text-sm text-white/75">4 lignes, nous vous rappelons</span></span>
          </button>
        </div>
      </div>
    </div>
  )
}
