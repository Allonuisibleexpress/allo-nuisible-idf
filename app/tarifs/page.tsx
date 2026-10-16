'use client'

import { Phone, CheckCircle, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PestIcon, type PestKey } from '@/components/PestIcons'

const PHONE = '07 68 07 72 19'
const PHONE_HREF = 'tel:+33768077219'
const ACCENT = '#E8441A'
const WA = 'https://wa.me/33768077219'

const services = [
  {
    name: 'Guêpes & Frelons',
    icon: 'guepes-frelons',
    href: '/services/guepes-frelons',
    tiers: [
      { label: 'Nid accessible', price: '89', details: 'Sous un auvent, cabanon, hauteur < 3m' },
      { label: 'Nid en hauteur', price: '149', details: 'Perche télescopique, hauteur 3 à 10m', highlight: true },
      { label: 'Nid encastré / Nacelle', price: '250+', details: 'Intérieur mur, toiture, hauteur > 10m' },
    ],
  },
  {
    name: 'Punaises de lit',
    icon: 'punaises-de-lit',
    href: '/services/punaises-de-lit',
    tiers: [
      { label: 'Studio jusqu\'à 35 m²', price: '250', details: '1 passage, garantie 15 jours' },
      { label: 'Appartement jusqu\'à 80 m²', price: '400', details: '1 passage, garantie 1 mois', highlight: true },
      { label: 'Maison ou forte infestation', price: 'Sur devis', details: '2 passages + traitement thermique' },
    ],
  },
  {
    name: 'Cafards & Blattes',
    icon: 'cafards-blattes',
    href: '/services/cafards-blattes',
    tiers: [
      { label: 'Appartement', price: '180', details: '2 passages inclus, gel professionnel' },
      { label: 'Maison / Grand logement', price: '280', details: '2 passages + pulvérisation rémanente', highlight: true },
      { label: 'Local professionnel', price: '350', details: '2 passages + attestation HACCP' },
    ],
  },
  {
    name: 'Rongeurs',
    icon: 'rongeurs',
    href: '/services/rongeurs',
    tiers: [
      { label: 'Particulier', price: '150', details: 'Postes sécurisés + suivi 2 semaines' },
      { label: 'Professionnel', price: '280', details: 'Postes + attestation HACCP', highlight: true },
      { label: 'Copropriété', price: '500+', details: 'Parties communes + contrat annuel dispo' },
    ],
  },
  {
    name: 'Fourmis',
    icon: 'fourmis',
    href: '/services/fourmis',
    tiers: [
      { label: 'Studio / F1', price: '120', details: 'Gel appât, 1 passage' },
      { label: 'Appartement', price: '180', details: 'Gel + barrière rémanente', highlight: true },
      { label: 'Maison', price: '280', details: '2 passages, intérieur + extérieur' },
    ],
  },
  {
    name: 'Pigeons',
    icon: 'pigeons',
    href: '/services/pigeons',
    tiers: [
      { label: 'Rebord / Corniche (5 ml)', price: '200', details: 'Pics inox galvanisé posés' },
      { label: 'Balcon / Terrasse (20 m²)', price: '400', details: 'Filet sur mesure + fixation', highlight: true },
      { label: 'Façade / Toiture', price: 'Sur devis', details: 'Étude technique + nacelle si besoin' },
    ],
  },
  {
    name: 'Dératisation',
    icon: 'deratisation',
    href: '/services/deratisation',
    tiers: [
      { label: 'Particulier', price: '150', details: 'Logement jusqu\'à 150 m²' },
      { label: 'Professionnel (ERP)', price: '280', details: 'Attestation HACCP incluse', highlight: true },
      { label: 'Copropriété', price: '500+', details: 'Parties communes + registre suivi' },
    ],
  },
  {
    name: 'Désinfection',
    icon: 'desinfection',
    href: '/services/desinfection',
    tiers: [
      { label: 'Logement jusqu\'à 50 m²', price: '200', details: 'Attestation fournie' },
      { label: 'Appartement / Bureaux', price: '350', details: 'Air + surfaces + rapport', highlight: true },
      { label: 'Local professionnel', price: '500+', details: 'Protocole HACCP + urgences 24h' },
    ],
  },
]

const guarantees = [
  'Devis gratuit confirmé avant intervention',
  'Tarif annoncé = tarif final, sans surprise',
  'RC Pro incluse sur toutes les interventions',
  'Garantie résultat 1 mois minimum',
  'Re-intervention gratuite si réapparition',
  'Intervention 7j/7 soirs et week-ends',
]

export default function TarifsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <section className="relative pt-8 md:pt-12 pb-16 px-4 overflow-hidden" style={{ background: '#080808' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(232,68,26,0.15) 0%, transparent 65%)',
          }} />
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style={{ background: 'rgba(232,68,26,0.12)', border: '1px solid rgba(232,68,26,0.25)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-black tracking-widest uppercase" style={{ color: ACCENT }}>Sur devis · Sans engagement · Devis gratuit</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
              Devis <span style={{ color: ACCENT }}>gratuit</span>
            </h1>
            <p className="text-lg text-white/55 mb-8 leading-relaxed max-w-xl mx-auto">
              Le tarif est confirmé avant chaque intervention. Pas de mauvaise surprise, pas de frais cachés. Appelez pour un devis gratuit en 5 minutes.
            </p>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2.5 font-black text-white px-8 py-4 rounded-2xl text-sm" style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
              <Phone className="w-4 h-4" />Devis gratuit : {PHONE}
            </a>
          </div>
        </section>

        {/* GARANTIES */}
        <div style={{ background: ACCENT }}>
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {guarantees.map((g) => (
              <div key={g} className="flex items-center gap-1.5 text-white text-xs font-bold">
                <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                {g}
              </div>
            ))}
          </div>
        </div>

        {/* GRILLE TARIFS */}
        <section className="py-16 md:py-24 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-6xl mx-auto space-y-8">
            {services.map(({ name, icon, href, tiers }) => (
              <div key={name} className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
                {/* Header service */}
                <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0" style={{ background: 'rgba(232,68,26,0.09)', border: '1px solid rgba(232,68,26,0.18)', color: ACCENT }}>
                      <PestIcon name={icon as PestKey} size={22} />
                    </span>
                    <h2 className="font-black text-white text-base">{name}</h2>
                  </div>
                  <a href={href} className="flex items-center gap-1.5 text-xs font-bold transition-all hover:opacity-80" style={{ color: ACCENT }}>
                    Voir la page <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                {/* Tiers */}
                <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  {tiers.map(({ label, price, details, highlight }) => (
                    <div key={label} className="p-5 relative"
                      style={{ background: highlight ? 'rgba(232,68,26,0.05)' : 'transparent' }}>
                      {highlight && (
                        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg,transparent,${ACCENT},transparent)` }} />
                      )}
                      <p className="text-white/50 text-xs font-semibold mb-1.5 uppercase tracking-wide">{label}</p>
                      <p className="font-black mb-1.5" style={{ fontSize: '1.75rem', color: highlight ? ACCENT : '#fff', lineHeight: 1 }}>
                        <span className="text-2xl">Sur devis</span>
                      </p>
                      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', lineHeight: 1.5 }}>{details}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note bas */}
          <div className="max-w-3xl mx-auto mt-10 rounded-2xl px-6 py-5 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Tous nos devis sont gratuits et confirmés avant intervention. Le tarif est adapté à chaque situation (surface, type de nuisible, accessibilité). Paiement possible par CB, virement ou espèces.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 px-4 overflow-hidden" style={{ background: ACCENT }}>
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">Devis gratuit en 5 minutes</h2>
            <p className="text-white/75 text-base mb-10">Tarif confirmé avant intervention · 7j/7 soirs et week-ends · Île-de-France</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2.5 bg-white font-black px-9 py-4 rounded-2xl hover:scale-105 transition-all text-sm" style={{ color: ACCENT }}>
                <Phone className="w-4 h-4" />{PHONE}
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 font-bold px-9 py-4 rounded-2xl border-2 border-white/80 text-white hover:bg-white/10 transition-all text-sm">
                WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
