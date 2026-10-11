'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Building2, ClipboardList, Search, Award } from 'lucide-react'

const points = [
  { icon: ClipboardList, text: 'Conformité HACCP & normes ERP' },
  { icon: Search, text: 'Détection canine & diagnostics avancés' },
  { icon: Award, text: 'Plans de maîtrise sanitaire personnalisés' },
  { icon: Building2, text: 'Contrats d\'entretien annuels' },
]

export default function Entreprise() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pro" ref={sectionRef} className="relative bg-[#1a1a1a] py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #E8441A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Accent shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8441A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — image placeholder */}
          <div className="order-2 lg:order-1 animate-on-scroll">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-[#2a2a2a] to-[#111] rounded-3xl overflow-hidden shadow-2xl border border-white/5 flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  {/* Building icon illustration */}
                  <div className="mx-auto">
                    <div className="w-24 h-32 bg-[#2a2a2a] rounded-t-lg mx-auto relative border border-[#333]">
                      {/* Windows */}
                      {[...Array(3)].map((_, row) => (
                        <div key={row} className="absolute flex gap-2" style={{ top: `${8 + row * 28}%`, left: '15%' }}>
                          <div className="w-5 h-5 bg-[#E8441A]/40 border border-[#E8441A]/30 rounded-sm" />
                          <div className="w-5 h-5 bg-[#E8441A]/20 border border-[#E8441A]/20 rounded-sm" />
                          <div className="w-5 h-5 bg-[#E8441A]/40 border border-[#E8441A]/30 rounded-sm" />
                        </div>
                      ))}
                      {/* Door */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-[#333] border border-[#444] rounded-t-lg" />
                    </div>
                    {/* Ground */}
                    <div className="w-32 h-2 bg-[#333] mx-auto rounded" />
                  </div>

                  {/* Inspection technician */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-[#E8441A]/20 rounded-full mx-auto flex items-center justify-center border border-[#E8441A]/30">
                        <Search className="w-5 h-5 text-[#E8441A]" />
                      </div>
                      <p className="text-gray-500 text-xs mt-1">Inspection</p>
                    </div>
                    <div className="text-[#E8441A] text-xl font-black">→</div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-[#E8441A]/20 rounded-full mx-auto flex items-center justify-center border border-[#E8441A]/30">
                        <ClipboardList className="w-5 h-5 text-[#E8441A]" />
                      </div>
                      <p className="text-gray-500 text-xs mt-1">Rapport</p>
                    </div>
                    <div className="text-[#E8441A] text-xl font-black">→</div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-[#E8441A]/20 rounded-full mx-auto flex items-center justify-center border border-[#E8441A]/30">
                        <Award className="w-5 h-5 text-[#E8441A]" />
                      </div>
                      <p className="text-gray-500 text-xs mt-1">Certifié</p>
                    </div>
                  </div>

                  <p className="text-gray-500 text-xs uppercase tracking-widest">Inspection professionnelle</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#E8441A] text-white rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-2xl font-black leading-none">HACCP</div>
                <div className="text-xs opacity-80 mt-0.5">Certifié</div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="order-1 lg:order-2 space-y-6 animate-on-scroll animate-on-scroll-delay-2">
            <div>
              <p className="text-[#E8441A] font-semibold text-sm uppercase tracking-widest mb-3">Solutions Pro</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Nuisibles en Entreprise ?
              </h2>
              <div className="w-12 h-1 bg-[#E8441A] mt-5 rounded-full" />
            </div>

            <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
              De la prévention à l&apos;intervention, notre approche sur mesure répond aux besoins des
              professionnels en Île-de-France. Expertise <strong className="text-white">HACCP</strong>, normes{' '}
              <strong className="text-white">ERP</strong>, détection canine.
            </p>

            {/* Points list */}
            <ul className="space-y-3">
              {points.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E8441A]/15 border border-[#E8441A]/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#E8441A]" />
                  </div>
                  <span className="text-gray-300 text-sm">{text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 bg-[#E8441A] hover:bg-[#d03a15] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#E8441A]/30 hover:scale-105"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
