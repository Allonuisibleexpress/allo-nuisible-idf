'use client'

import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import { IconShieldCheck } from '@/components/PestIcons'

const ACCENT = '#E8441A'

export default function AvantApres() {
  return (
    <section id="resultats" className="py-16 md:py-24 px-4 sm:px-6" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* ─── Colonne texte ─── */}
        <div className="reveal-left order-2 lg:order-1">
          <p className="text-xs font-black uppercase tracking-[.18em] mb-4" style={{ color: ACCENT }}>
            Résultats réels
          </p>
          <h2 className="font-black text-white leading-[1.05]" style={{ fontSize: 'clamp(1.9rem,4.4vw,3rem)' }}>
            La différence,<br />
            <span style={{ color: ACCENT }}>en un glissement.</span>
          </h2>
          <p className="mt-5 text-white/45 leading-relaxed" style={{ fontSize: '1.03rem', maxWidth: '30rem' }}>
            Nos interventions parlent d&apos;elles-mêmes. Glissez le curseur pour découvrir un
            chantier réel&nbsp;: avant l&apos;intervention, puis après le passage de nos techniciens
            certifiés.
          </p>

          {/* Points clés */}
          <div className="mt-8 flex flex-col gap-3">
            {[
              'Diagnostic précis puis traitement ciblé',
              'Résultat visible dès la première intervention',
              'Garanti 1 an, sinon on revient sans frais',
            ].map((t) => (
              <div key={t} className="flex items-center gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg"
                  style={{ background: 'rgba(232,68,26,0.1)', border: '1px solid rgba(232,68,26,0.2)', color: ACCENT }}>
                  <IconShieldCheck size={16} />
                </span>
                <span className="text-white/70 text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-9 flex gap-8">
            <div>
              <div className="font-black text-white" style={{ fontSize: '2rem', lineHeight: 1 }}>+1 500</div>
              <div className="text-white/35 text-xs font-semibold mt-1.5 uppercase tracking-wider">Interventions</div>
            </div>
            <div className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <div>
              <div className="font-black" style={{ fontSize: '2rem', lineHeight: 1, color: ACCENT }}>4,7<span className="text-white/40 text-lg">/5</span></div>
              <div className="text-white/35 text-xs font-semibold mt-1.5 uppercase tracking-wider">Note Google</div>
            </div>
          </div>
        </div>

        {/* ─── Colonne slider ─── */}
        <div className="reveal-right order-1 lg:order-2 max-w-md w-full mx-auto lg:max-w-none">
          <BeforeAfterSlider />
        </div>

      </div>
    </section>
  )
}
