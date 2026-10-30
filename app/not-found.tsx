import type { Metadata } from 'next'
import { Phone, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PestIcon, type PestKey } from '@/components/PestIcons'

const ACCENT = '#E8441A'

export const metadata: Metadata = {
  title: 'Page introuvable | Allo Nuisible IDF',
  robots: { index: false },
}

const LIENS: { href: string; label: string; icon: PestKey }[] = [
  { href: '/services/punaises-de-lit', label: 'Punaises de lit', icon: 'punaises-de-lit' },
  { href: '/services/cafards-blattes', label: 'Cafards et blattes', icon: 'cafards-blattes' },
  { href: '/services/rongeurs', label: 'Rats et souris', icon: 'rongeurs' },
  { href: '/services/guepes-frelons', label: 'Guêpes et frelons', icon: 'guepes-frelons' },
  { href: '/services/fourmis', label: 'Fourmis', icon: 'fourmis' },
  { href: '/services/chenilles-processionnaires', label: 'Chenilles processionnaires', icon: 'chenilles' },
]

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative px-4 pt-16 pb-20 overflow-hidden" style={{ background: '#080808', minHeight: '70vh' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(232,68,26,0.16) 0%, transparent 65%)',
          }} />
          <div className="relative max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Erreur 404</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
              Cette page est <span style={{ color: ACCENT }}>introuvable</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-10">
              Le lien est peut-être ancien ou mal recopié. Pas d&apos;inquiétude : voici nos principaux services, ou appelez-nous directement.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {LIENS.map((l) => (
                <a key={l.href} href={l.href}
                  className="flex items-center gap-2.5 rounded-xl px-4 py-3.5 text-white/85 text-sm font-semibold transition-colors hover:bg-white/[0.07] text-left"
                  style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ color: ACCENT }}><PestIcon name={l.icon} size={22} /></span>
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="tel:+33768077219"
                className="inline-flex items-center gap-2.5 font-black text-white px-7 py-4 rounded-2xl text-sm transition-all hover:brightness-110"
                style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
                <Phone className="w-4 h-4" /> 07 68 07 72 19
              </a>
              <a href="/"
                className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-2xl text-sm transition-all hover:brightness-125"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}>
                Retour à l&apos;accueil <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
