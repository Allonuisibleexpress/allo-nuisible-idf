'use client'

import { useEffect, useRef } from 'react'
import { Award, Leaf, Tag, Clock, ShieldCheck, ThumbsUp } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Équipe certifiée & expérimentée',
    desc: 'Tous nos techniciens sont titulaires du Certibiocide, habilitation officielle délivrée par l\'État. Plus de 10 ans d\'expérience sur le terrain.',
  },
  {
    icon: Leaf,
    title: 'Interventions éco-responsables',
    desc: 'Nous privilégions les méthodes mécaniques et biologiques. Nos produits biocides sont sélectionnés pour minimiser l\'impact environnemental.',
  },
  {
    icon: Tag,
    title: 'Tarifs transparents sans surprise',
    desc: 'Devis gratuit et détaillé avant toute intervention. Pas de coûts cachés, pas de majoration le week-end ou les jours fériés.',
  },
  {
    icon: Clock,
    title: 'Disponibilité totale 7j/7 24h/24',
    desc: 'Les nuisibles n\'ont pas d\'horaires. Nous non plus. Notre équipe est mobilisable à toute heure pour les urgences.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantie de résultat',
    desc: 'Nous garantissons l\'efficacité de nos traitements. En cas de récidive dans les délais contractuels, nous revenons sans frais supplémentaires.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction client 5 étoiles',
    desc: 'Noté 5/5 sur Google par plus de 47 clients. Professionnalisme, ponctualité et efficacité : c\'est notre réputation.',
  },
]

export default function PourquoiNous() {
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
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-[#1a1a1a] py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8441A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8441A]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-[#E8441A] font-semibold text-sm uppercase tracking-widest mb-3">Nos engagements</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Pourquoi faire appel à{' '}
            <span className="text-[#E8441A]">Allo Nuisible IDF</span> ?
          </h2>
          <div className="w-16 h-1 bg-[#E8441A] mx-auto mt-5 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            const delay = (i % 6) + 1
            return (
              <div
                key={reason.title}
                className={`animate-on-scroll animate-on-scroll-delay-${delay} group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#E8441A]/40 rounded-2xl p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#E8441A]/10`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#E8441A]/15 group-hover:bg-[#E8441A] border border-[#E8441A]/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#E8441A]/30">
                  <Icon
                    className="w-5 h-5 text-[#E8441A] group-hover:text-white transition-colors duration-300"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="font-black text-white text-base mb-2 group-hover:text-[#E8441A] transition-colors duration-200">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
