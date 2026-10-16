'use client'

import { ArrowRight } from 'lucide-react'
import { PestIcon, type PestKey } from '@/components/PestIcons'

const ACCENT = '#E8441A'

const nuisibles: {
  icon: PestKey
  name: string
  desc: string
  href: string
  urgency: string | null
}[] = [
  {
    icon: 'punaises-de-lit',
    name: 'Punaises de lit',
    desc: 'Éradication totale · Insecticide professionnel · Garantie 1 mois',
    href: '/services/punaises-de-lit',
    urgency: 'Urgent',
  },
  {
    icon: 'cafards-blattes',
    name: 'Cafards & blattes',
    desc: '2 passages inclus · Gel HACCP · Oothèques éliminées',
    href: '/services/cafards-blattes',
    urgency: null,
  },
  {
    icon: 'rongeurs',
    name: 'Rongeurs',
    desc: 'Postes sécurisés · Attestation HACCP · Contrats annuels',
    href: '/services/rongeurs',
    urgency: null,
  },
  {
    icon: 'fourmis',
    name: 'Fourmis',
    desc: 'Gel "effet domino" · Reine éliminée · Résultat sous 48h',
    href: '/services/fourmis',
    urgency: null,
  },
  {
    icon: 'guepes-frelons',
    name: 'Guêpes & frelons',
    desc: 'Intervention sous 1h · Combinaison intégrale · Perche télescopique',
    href: '/services/guepes-frelons',
    urgency: 'Urgent',
  },
  {
    icon: 'pigeons',
    name: 'Pigeons',
    desc: 'Pics inox · Filets sur mesure · Dispositifs électriques',
    href: '/services/pigeons',
    urgency: null,
  },
  {
    icon: 'deratisation',
    name: 'Dératisation',
    desc: 'Certibiocide · ERP & copropriétés · Registres de suivi',
    href: '/services/deratisation',
    urgency: null,
  },
  {
    icon: 'desinfection',
    name: 'Désinfection',
    desc: 'Large spectre · Attestation officielle · Post-sinistre',
    href: '/services/desinfection',
    urgency: null,
  },
]

export default function NosNuisibles() {
  return (
    <section id="services" style={{ background: '#0d0d0d' }} className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: ACCENT }}>
            Nos interventions
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="font-black text-white leading-tight"
              style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)' }}
            >
              À la traque<br className="hidden sm:block" /> des indésirables
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem', maxWidth: '22rem' }}>
              Chaque nuisible a son protocole. Nos techniciens certifiés interviennent le jour même.
            </p>
          </div>
          {/* Ligne orange */}
          <div className="w-12 h-1 rounded-full mt-5" style={{ background: ACCENT }} />
        </div>

        {/* Grille — 2 cols mobile / 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {nuisibles.map(({ icon, name, desc, href, urgency }) => (
            <a
              key={name}
              href={href}
              className="group relative rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                textDecoration: 'none',
              }}
            >
              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                background: 'rgba(232,68,26,0.04)',
                border: '1px solid rgba(232,68,26,0.25)',
                borderRadius: 'inherit',
              }} />

              {/* Urgency badge */}
              {urgency && (
                <span
                  className="absolute top-3 right-3 text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded"
                  style={{ background: 'rgba(232,68,26,0.18)', color: ACCENT }}
                >
                  {urgency}
                </span>
              )}

              {/* Icône SVG sur-mesure */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                style={{
                  background: 'rgba(232,68,26,0.09)',
                  border: '1px solid rgba(232,68,26,0.18)',
                  color: ACCENT,
                }}
              >
                <PestIcon name={icon} size={26} />
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="font-black text-white text-sm leading-tight mb-1.5 group-hover:text-[#E8441A] transition-colors duration-200">
                  {name}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', lineHeight: 1.5 }}>
                  {desc}
                </p>
              </div>

              {/* Lien */}
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                <span className="text-[11px] font-bold" style={{ color: ACCENT }}>Voir la page</span>
                <ArrowRight className="w-3 h-3" style={{ color: ACCENT }} />
              </div>
            </a>
          ))}
        </div>

        {/* CTA bas */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl px-6 py-5" style={{
          background: 'rgba(232,68,26,0.05)',
          border: '1px solid rgba(232,68,26,0.15)',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
            Vous ne savez pas quel service choisir ? Appelez, on identifie et on intervient.
          </p>
          <a
            href="tel:+33768077219"
            className="shrink-0 inline-flex items-center gap-2 font-bold text-white px-5 py-3 rounded-xl text-sm transition-all hover:brightness-110"
            style={{ background: ACCENT, whiteSpace: 'nowrap' }}
          >
            Appeler maintenant
          </a>
        </div>

      </div>
    </section>
  )
}
