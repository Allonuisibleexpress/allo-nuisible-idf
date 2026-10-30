'use client'

import Image from 'next/image'
import { DEPARTEMENTS_IDF } from '@/lib/departements'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

const quickLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Contact', href: '#contact' },
  { label: 'Mentions légales', href: '#' },
]

const services = [
  'Punaises de lit', 'Cafards & blattes', 'Rongeurs', 'Fourmis',
  'Guêpes & frelons', 'Pigeons', 'Dératisation', 'Désinfection',
  'Chenilles processionnaires',
]


export default function Footer() {
  const scrollTo = (href: string) => {
    if (href === '#') return
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-[#111] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Image
              src="/logo-transparent.png"
              alt="Allo Nuisible IDF"
              width={180}
              height={64}
              className="object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Chasseurs de nuisibles certifiés en Île-de-France. Interventions rapides,
              radicales et durables, disponibles 7j/7 et 24h/24.
            </p>
            <div className="space-y-2">
              <a href="tel:+33768077219" className="flex items-center gap-2 text-gray-400 hover:text-[#E8441A] text-sm transition-colors group">
                <Phone className="w-4 h-4 text-[#E8441A]" />
                <span className="group-hover:underline">07 68 07 72 19</span>
              </a>
              <a href="mailto:contact@allonuisibleidf.fr" className="flex items-center gap-2 text-gray-400 hover:text-[#E8441A] text-sm transition-colors group">
                <Mail className="w-4 h-4 text-[#E8441A]" />
                <span className="group-hover:underline">contact@allonuisibleidf.fr</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#E8441A] flex-shrink-0" />
                <span>Île-de-France</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Liens rapides
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-[#E8441A] text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#E8441A] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Nos services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-gray-400 hover:text-[#E8441A] text-sm transition-colors group inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#E8441A] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Zones couvertes</h4>
            <div className="flex flex-wrap gap-2">
              {DEPARTEMENTS_IDF.map((d) => (
                <a
                  key={d.slug}
                  href={`/zones/${d.slug}`}
                  className="text-gray-400 text-xs bg-white/5 border border-white/10 hover:border-[#E8441A]/40 hover:text-[#E8441A] rounded-full px-2.5 py-1 transition-colors"
                >
                  {d.nom} ({d.code})
                </a>
              ))}
            </div>
            <a href="/zones" className="block mt-4 p-3 bg-[#E8441A]/10 border border-[#E8441A]/20 hover:bg-[#E8441A]/15 rounded-xl transition-colors">
              <p className="text-[#E8441A] text-xs font-semibold">
                Toutes nos zones d&apos;intervention en Île-de-France
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2026 Allo Nuisible IDF. Tous droits réservés
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('#')}
              className="text-gray-500 hover:text-[#E8441A] text-xs transition-colors"
            >
              Mentions légales
            </button>
            <span className="text-gray-600">·</span>
            <button
              onClick={() => scrollTo('#')}
              className="text-gray-500 hover:text-[#E8441A] text-xs transition-colors"
            >
              Politique de confidentialité
            </button>
          </div>
          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 bg-[#E8441A] hover:bg-[#d03a15] rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#E8441A]/30"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </footer>
  )
}
