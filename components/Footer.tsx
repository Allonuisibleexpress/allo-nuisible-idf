'use client'

import Image from 'next/image'
import { DEPARTEMENTS_IDF } from '@/lib/departements'
import { CHAINE_YOUTUBE, PAGE_FACEBOOK, COMPTE_INSTAGRAM, COMPTE_PINTEREST, COMPTE_TIKTOK } from '@/lib/youtube'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import FormulaireDemande from '@/components/FormulaireDemande'
import { BoutonWhatsApp } from '@/components/LienWhatsApp'

// Vrais liens (et non des boutons de défilement) : ils fonctionnent depuis toutes les pages du site.
const quickLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
  { label: 'Avis clients', href: '/avis' },
  { label: 'Mairies et collectivités', href: '/mairies-collectivites' },
  { label: 'Zones d\'intervention', href: '/zones' },
  { label: 'Contact', href: '/#contact' },
]

const services = [
  { label: 'Punaises de lit', href: '/services/punaises-de-lit' },
  { label: 'Cafards & blattes', href: '/services/cafards-blattes' },
  { label: 'Fourmis', href: '/services/fourmis' },
  { label: 'Guêpes & frelons', href: '/services/guepes-frelons' },
  { label: 'Pigeons', href: '/services/pigeons' },
  { label: 'Dératisation / Rongeurs', href: '/services/deratisation' },
  { label: 'Désinfection', href: '/services/desinfection' },
  { label: 'Chenilles processionnaires', href: '/services/chenilles-processionnaires' },
  { label: 'Acariens', href: '/services/acariens' },
  { label: 'Anthrènes', href: '/services/anthrenes' },
  { label: 'Traitements sans produit chimique', href: '/services/traitements-sans-produit-chimique' },
]


export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
    <FormulaireDemande />
    <footer className="bg-[#111] text-white">
      {/* Bandeau « devis gratuit » présent sur toutes les pages du site */}
      <div style={{ background: '#E8441A' }}>
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
          <div><p className="text-white font-black text-xl md:text-2xl uppercase tracking-wide">Devis gratuit et sans engagement</p><p className="text-white text-sm font-bold">Aucune majoration la nuit, le week-end ni les jours fériés</p></div>
          <a href="tel:+33768077219" className="inline-flex items-center gap-2 bg-white font-black px-6 py-3 rounded-full text-base md:text-lg" style={{ color: '#B8330D' }}>
            <Phone className="w-5 h-5" /> 07 68 07 72 19
          </a>
        </div>
      </div>
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
              <a href="tel:+33768077219" className="flex items-center gap-2 text-gray-400 hover:text-[#F0562A] text-sm transition-colors group">
                <Phone className="w-4 h-4 text-[#F0562A]" />
                <span className="group-hover:underline">07 68 07 72 19</span>
              </a>
              <a href="mailto:contact@allonuisibleidf.fr" className="flex items-center gap-2 text-gray-400 hover:text-[#F0562A] text-sm transition-colors group">
                <Mail className="w-4 h-4 text-[#F0562A]" />
                <span className="group-hover:underline">contact@allonuisibleidf.fr</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#F0562A] flex-shrink-0" />
                <a href="https://maps.google.com/?cid=11887181769674817823" target="_blank" rel="noopener noreferrer" className="hover:text-[#F0562A] hover:underline">6 bis Rue du Val d&apos;Osne, 94410 Saint-Maurice</a>
              </div>
            </div>
            {/* Réseaux sociaux (14/11/2026) : page Facebook, comptes Instagram, Pinterest et TikTok, chaîne YouTube et fiche Google */}
            <div className="flex items-center gap-3 pt-1">
              <a href={PAGE_FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Allo Nuisible IDF sur Facebook" title="Facebook" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-[#1877F2] transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden="true"><path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.6c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4z"/></svg>
              </a>
              <a href={COMPTE_INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Allo Nuisible IDF sur Instagram" title="Instagram" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-[#E1306C] transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none"/></svg>
              </a>
              <a href={COMPTE_PINTEREST} target="_blank" rel="noopener noreferrer" aria-label="Allo Nuisible IDF sur Pinterest" title="Pinterest" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-[#E60023] transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.9 0-2.5-1.8-4.3-4.4-4.3-3 0-4.8 2.3-4.8 4.6 0 .9.4 1.9.8 2.4.1.1.1.2.1.3l-.3 1.2c0 .2-.2.2-.4.1-1.4-.6-2.2-2.6-2.2-4.2 0-3.4 2.5-6.6 7.2-6.6 3.8 0 6.7 2.7 6.7 6.3 0 3.8-2.4 6.8-5.7 6.8-1.1 0-2.2-.6-2.5-1.3l-.7 2.6c-.2 1-.9 2.2-1.4 2.9A10 10 0 1 0 12 2z"/></svg>
              </a>
              <a href={COMPTE_TIKTOK} target="_blank" rel="noopener noreferrer" aria-label="Allo Nuisible IDF sur TikTok" title="TikTok" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-[#000] transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden="true"><path d="M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .8.1V9.1a6.4 6.4 0 1 0 5.5 6.3V8.6a8 8 0 0 0 4.4 1.3V6.5a4.4 4.4 0 0 1-4.4-4.5z"/></svg>
              </a>
              <a href={CHAINE_YOUTUBE} target="_blank" rel="noopener noreferrer" aria-label="Allo Nuisible IDF sur YouTube" title="YouTube" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-[#FF0000] transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l5.9 3-5.9 3z"/></svg>
              </a>
              <a href="https://maps.google.com/?cid=11887181769674817823" target="_blank" rel="noopener noreferrer" aria-label="Allo Nuisible IDF sur Google Maps" title="Google Maps" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-[#34A853] transition-colors">
                <MapPin className="w-[18px] h-[18px] text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Liens rapides
            </h2>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#F0562A] text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#E8441A] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Nos services</h2>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="text-gray-400 hover:text-[#F0562A] text-sm transition-colors group inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#E8441A] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Zones couvertes</h2>
            <div className="flex flex-wrap gap-2">
              {DEPARTEMENTS_IDF.map((d) => (
                <a
                  key={d.slug}
                  href={`/zones/${d.slug}`}
                  className="text-gray-400 text-xs bg-white/5 border border-white/10 hover:border-[#F0562A]/40 hover:text-[#F0562A] rounded-full px-2.5 py-1 transition-colors"
                >
                  {d.nom} ({d.code})
                </a>
              ))}
            </div>
            <a href="/zones" className="block mt-4 p-3 bg-[#E8441A]/10 border border-[#E8441A]/20 hover:bg-[#E8441A]/15 rounded-xl transition-colors">
              <p className="text-[#FF7A52] text-xs font-semibold">
                Toutes nos zones d&apos;intervention en Île-de-France
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs text-center sm:text-left">
            © 2026 Allo Nuisible IDF. Tous droits réservés
          </p>
          <div className="flex items-center gap-4">
            <a href="/mentions-legales" className="text-gray-400 hover:text-[#F0562A] text-xs transition-colors">
              Mentions légales
            </a>
            <span className="text-gray-400">·</span>
            <a href="/politique-de-confidentialite" className="text-gray-400 hover:text-[#F0562A] text-xs transition-colors">
              Politique de confidentialité
            </a>
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
    </>
  )
}
