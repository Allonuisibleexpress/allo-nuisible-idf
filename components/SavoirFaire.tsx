'use client'

import { useEffect, useRef } from 'react'
import {
  Lightbulb,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Ban,
  CreditCard,
  Smile,
  MapPin,
} from 'lucide-react'

const items = [
  { icon: Lightbulb, label: 'Solution radicale & durable' },
  { icon: CheckCircle2, label: 'Services certifiés par l\'État' },
  { icon: ShieldCheck, label: 'Garantie sur les traitements' },
  { icon: Zap, label: 'Intervention rapide 7j/7 et 24h/24' },
  { icon: Ban, label: 'Pas de majoration WE et jours fériés' },
  { icon: CreditCard, label: 'Facilité de paiement' },
  { icon: Smile, label: 'Techniciens souriants' },
  { icon: MapPin, label: 'Déplacement dans toute l\'Île-de-France' },
]

export default function SavoirFaire() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('.animate-on-scroll')
            els.forEach((el) => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-[#E8441A] font-semibold text-sm uppercase tracking-widest mb-3">Notre expertise</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-tight">
            Le savoir <span className="text-[#E8441A]">Allo Nuisible</span>
          </h2>
          <div className="w-16 h-1 bg-[#E8441A] mx-auto mt-5 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} group flex flex-col items-center text-center gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg cursor-default`}
              >
                {/* Circular icon badge */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-2 border-[#E8441A] flex items-center justify-center group-hover:bg-[#E8441A] transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#E8441A]/20">
                    <Icon
                      className="w-8 h-8 text-[#E8441A] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border border-[#E8441A]/20 scale-125 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                </div>

                <p className="text-[#1a1a1a] font-semibold text-sm leading-snug">{item.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
