import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Page volontairement discrète (08/11/2026) : sert uniquement de « lien retour » demandé par certains annuaires
// (ex. Deratiseurs.NosAvis.com) pour activer le lien vers notre site. Aucun lien depuis le menu ou le pied de page,
// absente du sitemap, non indexée par Google.
export const metadata: Metadata = {
  title: 'Retrouvez Allo Nuisible IDF',
  description: 'Les sites où retrouver Allo Nuisible IDF.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/retrouvez-nous' },
}

const LIENS = [
  { href: 'https://maps.google.com/?cid=11887181769674817823', label: 'Google Maps : notre fiche et nos avis' },
  { href: 'https://www.youtube.com/@allonuisibleidf', label: 'YouTube : nos interventions en vidéo' },
  { href: 'https://deratiseurs.nosavis.com/', label: 'Deratiseurs.NosAvis.com : annuaire des dératiseurs' },
]

export default function RetrouvezNous() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] px-4 py-20 text-center" style={{ background: '#0a0a0a' }}>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Retrouvez Allo Nuisible IDF</h1>
        <p className="text-white/60 mb-10">Notre entreprise est aussi présente sur ces sites.</p>
        <ul className="space-y-4">
          {LIENS.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noopener" className="underline underline-offset-4 font-bold" style={{ color: '#E8441A' }}>{l.label}</a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}
