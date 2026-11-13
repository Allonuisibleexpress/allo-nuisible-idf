'use client'

// Secours si l'erreur touche le gabarit général (app/layout.tsx) : même logique que app/error.tsx (13/11/2026).
import { useEffect } from 'react'
import { estErreurDeChargement, rechargerUneFois } from '@/lib/rechargement'

export default function ErreurGlobale({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    if (estErreurDeChargement(error)) rechargerUneFois()
  }, [error])

  return (
    <html lang="fr">
      <body style={{ margin: 0, background: '#080808', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 16px' }}>
          <div style={{ maxWidth: 600, textAlign: 'center' }}>
            <p style={{ color: '#E8441A', fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Allo Nuisible IDF</p>
            <h1 style={{ color: '#fff', fontSize: 30, fontWeight: 900, lineHeight: 1.2 }}>La page n&apos;a pas pu s&apos;afficher</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.6 }}>
              Rechargez la page, ou appelez-nous : un technicien vous répond 7j/7.
            </p>
            <p style={{ marginTop: 24 }}>
              <a href="/" style={{ color: '#fff', fontWeight: 700, marginRight: 16 }}>Recharger le site</a>
              <a href="tel:+33768077219" style={{ background: '#E8441A', color: '#fff', fontWeight: 900, padding: '12px 22px', borderRadius: 14, textDecoration: 'none', display: 'inline-block' }}>07 68 07 72 19</a>
            </p>
          </div>
        </main>
      </body>
    </html>
  )
}
