'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'

/* Pages de service disponibles */
const servicePages: Record<string, string> = {
  'Punaises de lit':  '/services/punaises-de-lit',
  'Cafards & blattes': '/services/cafards-blattes',
  'Fourmis':           '/services/fourmis',
  'Guêpes & frelons':  '/services/guepes-frelons',
  'Pigeons':           '/services/pigeons',
  'Dératisation':      '/services/deratisation',
  'Désinfection':      '/services/desinfection',
  'Chenilles processionnaires': '/services/chenilles-processionnaires',
  'Acariens':          '/services/acariens',
}

const services = [
  'Punaises de lit',
  'Cafards & blattes',
  'Fourmis',
  'Guêpes & frelons',
  'Pigeons',
  'Dératisation',
  'Désinfection',
  'Chenilles processionnaires',
]

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Nos Services', href: '#services', dropdown: true },
  { label: 'Tarifs', href: '/tarifs', external: true },
  { label: 'Blog', href: '/blog', external: true },
  { label: 'Professionnels', href: '/professionnels', external: true },
  { label: 'À Propos', href: '#apropos' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      const y = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${y}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      const top = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      if (top) window.scrollTo(0, -parseInt(top))
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    setDropdownOpen(false)
    setMobileDropdownOpen(false)
    if (pathname === '/') {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/' + href
    }
  }

  const goToService = (service: string) => {
    setMenuOpen(false)
    setDropdownOpen(false)
    setMobileDropdownOpen(false)
    const page = servicePages[service]
    if (page) {
      window.location.href = page
    } else {
      scrollTo('#services')
    }
  }

  return (
    <>
    <div style={{ height: 65 }} aria-hidden="true" />
    <nav
      className={scrolled ? 'nav-scrolled' : ''}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: '#111',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-2.5 lg:py-3" style={{ position: 'relative' }}>

          {/* Logo */}
          <button
            onClick={() => pathname === '/' ? scrollTo('#accueil') : (window.location.href = '/')}
            className="flex items-center flex-shrink-0"
            aria-label="Allo Nuisible - Accueil"
          >
            <Image
              src="/logo-transparent.png"
              alt="Allo Nuisible IDF"
              width={130}
              height={44}
              className="object-contain"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) =>
              link.dropdown ? (
                /* Wrapper div gère tout le hover — évite le bug du gap de 4px */
                <div
                  key={link.label}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-white/90 hover:text-[#E8441A] font-medium text-sm px-3 py-2 rounded transition-colors duration-200"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-0 bg-[#222] border border-[#333] rounded-xl shadow-2xl py-2 min-w-[220px] z-50">
                      {services.map((service) => (
                        <button
                          key={service}
                          onClick={() => goToService(service)}
                          className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#E8441A] transition-colors duration-150"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E8441A] flex-shrink-0" />
                          {service}
                          {servicePages[service] && (
                            <span className="ml-auto text-[10px] text-[#E8441A] font-semibold uppercase tracking-wider">Voir</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/90 hover:text-[#E8441A] font-medium text-sm px-3 py-2 rounded transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-white/90 hover:text-[#E8441A] font-medium text-sm px-3 py-2 rounded transition-colors duration-200"
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+33768077219"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E8441A]" />
              <span className="font-semibold">07 68 07 72 19</span>
            </a>
            <button
              onClick={() => {
                if (pathname === '/services/guepes-frelons') {
                  window.dispatchEvent(new CustomEvent('openRdvModal'))
                } else {
                  scrollTo('#contact')
                }
              }}
              className="bg-[#E8441A] hover:bg-[#d03a15] text-white font-bold text-sm px-5 py-2.5 rounded-full uppercase tracking-wider transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#E8441A]/30"
            >
              PRENDRE RENDEZ-VOUS
            </button>
          </div>

          {/* Mobile — téléphone + hamburger */}
          <div className="lg:hidden flex items-center gap-1">
            <a
              href="tel:+33768077219"
              aria-label="Appeler"
              className="flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" style={{ color: '#E8441A' }} />
            </a>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MENU MOBILE ── */}
      {menuOpen && (
        <div
          className="lg:hidden"
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 200, background: '#0a0a0a',
            display: 'flex', flexDirection: 'column',
            overflowY: 'auto', overscrollBehavior: 'contain',
          }}
        >
          {/* En-tête */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            flexShrink: 0,
          }}>
            <Image src="/logo-transparent.png" alt="Allo Nuisible IDF" width={110} height={36} className="object-contain" priority />
            <button onClick={() => setMenuOpen(false)} style={{
              width: 36, height: 36, borderRadius: 8,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}>
              <X style={{ width: 16, height: 16 }} />
            </button>
          </div>

          {/* Liens nav */}
          <div style={{ flex: 1, padding: '8px 0' }}>
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <button onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '15px 20px', background: 'none', border: 'none', cursor: 'pointer',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      color: mobileDropdownOpen ? '#E8441A' : 'rgba(255,255,255,0.85)',
                      fontSize: '0.9375rem', fontWeight: 600, textAlign: 'left',
                    }}>
                      {link.label}
                      <ChevronDown style={{
                        width: 16, height: 16, color: '#E8441A', flexShrink: 0,
                        transform: mobileDropdownOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s',
                      }} />
                    </button>
                    {mobileDropdownOpen && (
                      <div style={{
                        padding: '8px 20px 12px',
                        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8,
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        {services.map((service) => (
                          <button key={service} onClick={() => goToService(service)} style={{
                            padding: '10px 12px', borderRadius: 8,
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.07)',
                            color: 'rgba(255,255,255,0.6)', fontSize: '0.8125rem',
                            fontWeight: 500, textAlign: 'left', cursor: 'pointer',
                          }}>
                            {service}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : link.external ? (
                  <a href={link.href} onClick={() => setMenuOpen(false)} style={{
                    display: 'block', padding: '15px 20px', textDecoration: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem', fontWeight: 600,
                  }}>
                    {link.label}
                  </a>
                ) : (
                  <button onClick={() => scrollTo(link.href)} style={{
                    width: '100%', display: 'block', padding: '15px 20px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem',
                    fontWeight: 600, textAlign: 'left',
                  }}>
                    {link.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Bas — appel direct */}
          <div style={{
            padding: '20px', flexShrink: 0,
            borderTop: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <a href="tel:+33768077219" onClick={() => setMenuOpen(false)} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              padding: '14px', borderRadius: 12, textDecoration: 'none',
              background: '#E8441A', color: '#fff', fontWeight: 800, fontSize: '1rem',
              boxShadow: '0 4px 20px rgba(232,68,26,0.35)',
            }}>
              <Phone style={{ width: 18, height: 18 }} />
              07 68 07 72 19
            </a>
            <a href="https://wa.me/33768077219" target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '13px', borderRadius: 12, textDecoration: 'none',
                background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)',
                color: '#25D366', fontWeight: 600, fontSize: '0.9375rem',
              }}>
              WhatsApp
            </a>
            <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '10px', textAlign: 'center', marginTop: 4 }}>
              Devis gratuit · Réponse sous 5 min · 7j/7
            </p>
          </div>
        </div>
      )}
    </nav>
    </>
  )
}
