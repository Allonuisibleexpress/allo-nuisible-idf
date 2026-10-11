'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Award, Users, Clock } from 'lucide-react'
import BeforeAfterSlider from './BeforeAfterSlider'

const stats = [
  { icon: Award, target: 5, suffix: '+', label: 'ans d\'expérience', duration: 1200 },
  { icon: Users, target: 1500, suffix: '+', label: 'clients satisfaits', duration: 2000 },
  { icon: Clock, target: null, suffix: '24/7', label: 'disponibilité', duration: 0 },
]

function useCountUp(target: number | null, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!triggered || target === null) return
    const startTime = performance.now()
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [triggered, target, duration])

  return count
}

function StatCard({
  icon: Icon,
  target,
  suffix,
  label,
  duration,
  triggered,
}: {
  icon: React.ElementType
  target: number | null
  suffix: string
  label: string
  duration: number
  triggered: boolean
}) {
  const count = useCountUp(target, duration, triggered)

  return (
    <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
      <Icon className="w-5 h-5 text-[#E8441A] mx-auto mb-2" />
      <div className="text-2xl font-black text-[#1a1a1a] tabular-nums">
        {target === null ? suffix : `${count}${suffix}`}
      </div>
      <div className="text-xs text-gray-500 mt-0.5 leading-tight">{label}</div>
    </div>
  )
}

export default function QuiSommesNous() {
  const sectionRef = useRef<HTMLElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => el.classList.add('visible'))
            setTriggered(true)
          }
        })
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="apropos" ref={sectionRef} className="bg-white py-20 lg:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div className="space-y-6 animate-on-scroll">
            <div>
              <p className="text-[#E8441A] font-semibold text-sm uppercase tracking-widest mb-3">Notre histoire</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-tight">
                Qui sommes-nous ?
              </h2>
              <div className="w-12 h-1 bg-[#E8441A] mt-5 rounded-full" />
            </div>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              <span className="font-bold text-[#1a1a1a]">Allo Nuisible IDF</span> incarne l&apos;excellence dans
              la lutte contre les nuisibles. Nos experts, certifiés et agréés par l&apos;État, mettent leur
              savoir-faire au service de la protection de votre cadre de vie en Île-de-France.
            </p>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Disponibles <strong>24h/24 et 7j/7</strong>, nous intervenons avec rigueur, discrétion et
              efficacité pour vous garantir des <strong>résultats durables</strong>. Chaque intervention est
              pensée sur mesure, en privilégiant des solutions performantes, respectueuses de votre
              environnement et conformes aux normes les plus exigeantes.
            </p>

            {/* Stats avec compteur animé */}
            <div className="grid grid-cols-3 gap-4 py-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} triggered={triggered} />
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 bg-[#E8441A] hover:bg-[#d03a15] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#E8441A]/30 hover:scale-105"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Right — Before/After slider */}
          <div className="animate-on-scroll animate-on-scroll-delay-2">
            <div className="relative">
              <BeforeAfterSlider />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#E8441A]/10 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#E8441A]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1a1a1a]">Certifié CERTIBIOCIDE</div>
                    <div className="text-xs text-gray-500">Agrément État Français</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#E8441A]/10 rounded-full" />
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#E8441A]/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
