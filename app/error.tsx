'use client'

// Page de secours en cas d'erreur dans le navigateur (13/11/2026).
// Avant, une erreur affichait seulement « Application error: a client-side exception has occurred », et Google a
// enregistré ce texte comme titre de /services/deratisation.
// Cas le plus fréquent : juste après une mise en ligne, un visiteur (ou Google) a la page de la version précédente,
// dont les fichiers JavaScript n'existent plus. On recharge alors la page une seule fois pour obtenir la nouvelle version.
import { useEffect } from 'react'
import { estErreurDeChargement, rechargerUneFois } from '@/lib/rechargement'

const ACCENT = '#E8441A'

export default function Erreur({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    if (estErreurDeChargement(error)) rechargerUneFois()
  }, [error])

  return (
    <main style={{ background: '#080808', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 16px' }}>
      <div style={{ maxWidth: 640, textAlign: 'center' }}>
        <p style={{ color: ACCENT, fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Allo Nuisible IDF</p>
        <h1 style={{ color: '#fff', fontSize: 34, fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
          La page n&apos;a pas pu s&apos;afficher <span style={{ color: ACCENT }}>complètement</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.6, marginBottom: 28 }}>
          Rechargez la page, ou appelez-nous directement : un technicien vous répond 7j/7.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          <button onClick={() => reset()} className="rounded-2xl" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontWeight: 700, padding: '14px 26px', cursor: 'pointer' }}>
            Recharger la page
          </button>
          <a href="tel:+33768077219" className="rounded-2xl" style={{ background: ACCENT, color: '#fff', fontWeight: 900, padding: '14px 26px', textDecoration: 'none' }}>
            07 68 07 72 19
          </a>
        </div>
        <p style={{ marginTop: 28, fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
          <a href="/services/punaises-de-lit" style={{ color: '#fff', textDecoration: 'underline' }}>Punaises de lit</a>
          {' · '}<a href="/services/deratisation" style={{ color: '#fff', textDecoration: 'underline' }}>Dératisation</a>
          {' · '}<a href="/services/cryogenie-punaises-de-lit" style={{ color: '#fff', textDecoration: 'underline' }}>Cryogénie</a>
          {' · '}<a href="/" style={{ color: '#fff', textDecoration: 'underline' }}>Accueil</a>
        </p>
      </div>
    </main>
  )
}
