'use client'

import { useEffect, useRef } from 'react'
import { Phone, Search, Wrench, ClipboardCheck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Contact',
    desc: 'Disponibles 7j/7 et 24h/24 pour répondre à vos questions et vous orienter vers la meilleure solution.',
    color: '#E8441A',
  },
  {
    number: '02',
    icon: Search,
    title: 'Inspection',
    desc: 'Inspection complète de vos locaux, diagnostic précis de l\'infestation et devis gratuit sur place.',
    color: '#E8441A',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Traitement',
    desc: 'Traitement ciblé, efficace et respectueux de l\'environnement avec des produits homologués.',
    color: '#E8441A',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Suivi',
    desc: 'Suivi post-traitement rigoureux avec intervention rapide garantie en cas de récidive.',
    color: '#E8441A',
  },
]

export default function Methode() {
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

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-[#E8441A] font-semibold text-sm uppercase tracking-widest mb-3">Notre processus</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-tight">
            La méthode <span className="text-[#E8441A]">Allo Nuisible</span>
          </h2>
          <div className="w-16 h-1 bg-[#E8441A] mx-auto mt-5 rounded-full" />
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            const delay = i + 1
            return (
              <div
                key={step.title}
                className={`animate-on-scroll animate-on-scroll-delay-${delay} group relative`}
              >
                {/* Connector line (not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#E8441A]/40 to-transparent z-0" style={{ width: 'calc(100% - 60px)', left: '80px' }} />
                )}

                {/* Card */}
                <div className="relative bg-white border border-gray-100 hover:border-[#E8441A]/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#E8441A]/10 transition-all duration-300 group-hover:-translate-y-1">
                  {/* Top accent */}
                  <div className="h-1 bg-gradient-to-r from-[#E8441A] to-[#ff6a45]" />

                  <div className="p-6 lg:p-7">
                    {/* Step number + icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="text-5xl font-black text-[#E8441A]/10 leading-none select-none group-hover:text-[#E8441A]/20 transition-colors duration-300">
                        {step.number}
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-[#E8441A]/10 group-hover:bg-[#E8441A] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#E8441A]/30">
                        <Icon
                          className="w-6 h-6 text-[#E8441A] group-hover:text-white transition-colors duration-300"
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>

                    <h3 className="font-black text-xl text-[#1a1a1a] mb-3 group-hover:text-[#E8441A] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
