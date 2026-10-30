'use client'

import { Phone, CheckCircle, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PestIcon, type PestKey } from '@/components/PestIcons'

const PHONE = '07 68 07 72 19'
const PHONE_HREF = 'tel:+33768077219'
const ACCENT = '#E8441A'
const WA = 'https://wa.me/33768077219'

// Prix « à partir de », alignés sur la grille publique d'Allo Nuisible Express (consultée le 30/10/2026).
// price = montant de départ en euros ; null = « Sur devis » (cas complexes).
const services: { name: string; icon: string; href: string; tiers: { label: string; price: string | null; unit?: string; details: string; highlight?: boolean }[] }[] = [
  {
    name: 'Guêpes & Frelons',
    icon: 'guepes-frelons',
    href: '/services/guepes-frelons',
    tiers: [
      { label: 'Nid accessible', price: '89', details: 'Jusqu\'à 5 m environ : auvent, cabanon, haie' },
      { label: 'Nid en hauteur', price: '149', details: 'Perche télescopique', highlight: true },
      { label: 'Nid difficile d\'accès', price: '199', details: 'Toiture, combles, cheminée. Nacelle : sur devis' },
    ],
  },
  {
    name: 'Punaises de lit',
    icon: 'punaises-de-lit',
    href: '/services/punaises-de-lit',
    tiers: [
      { label: 'Studio ou T1', price: '290', details: '2 passages inclus, jusqu\'à 30 m² environ' },
      { label: 'T2 ou T3', price: '390', details: '2 passages inclus. Insecticide, cryogénie ou vapeur sèche', highlight: true },
      { label: 'T4, maison ou forte infestation', price: null, details: '2 passages inclus, prix après inspection' },
    ],
  },
  {
    name: 'Cafards & Blattes',
    icon: 'cafards-blattes',
    href: '/services/cafards-blattes',
    tiers: [
      { label: 'T1 ou T2', price: '120', details: 'Gel appât professionnel' },
      { label: 'Grand logement', price: '150', details: 'Ou infestation marquée', highlight: true },
      { label: 'Local professionnel', price: '200', details: 'Restaurant, commerce, attestation fournie' },
    ],
  },
  {
    name: 'Rongeurs',
    icon: 'rongeurs',
    href: '/services/rongeurs',
    tiers: [
      { label: 'Appartement', price: '120', details: 'Rats ou souris, recherche des accès' },
      { label: 'Maison', price: '180', details: 'Combles, cave, garage, jardin', highlight: true },
      { label: 'Local commercial', price: '250', details: 'Attestation fournie' },
    ],
  },
  {
    name: 'Dératisation',
    icon: 'deratisation',
    href: '/services/deratisation',
    tiers: [
      { label: 'Particulier', price: '120', details: 'Postes d\'appâtage sécurisés ou pièges' },
      { label: 'Commerce, restaurant', price: '250', details: 'Attestation fournie', highlight: true },
      { label: 'Copropriété, contrat annuel', price: null, details: 'Parties communes, passages réguliers' },
    ],
  },
  {
    name: 'Fourmis',
    icon: 'fourmis',
    href: '/services/fourmis',
    tiers: [
      { label: 'Appartement', price: '120', details: 'Gel appât sur les pistes' },
      { label: 'Maison avec jardin', price: '150', details: 'Intérieur et extérieur', highlight: true },
      { label: 'Fourmis charpentières', price: '250', details: 'Bois, charpente. Supercolonie : sur devis' },
    ],
  },
  {
    name: 'Pigeons',
    icon: 'pigeons',
    href: '/services/pigeons',
    tiers: [
      { label: 'Balcon standard', price: '150', details: 'Environ 6 m²' },
      { label: 'Pics anti-pigeons inox', price: '25', unit: ' / mètre', details: 'Rebords, corniches', highlight: true },
      { label: 'Façade, toiture', price: null, details: 'Étude technique, nacelle si besoin' },
    ],
  },
  {
    name: 'Désinfection',
    icon: 'desinfection',
    href: '/services/desinfection',
    tiers: [
      { label: 'Studio ou T1', price: '150', details: 'Attestation fournie' },
      { label: 'T2 ou T3', price: '200', details: 'Air et surfaces', highlight: true },
      { label: 'Maison, local professionnel', price: null, details: 'Selon la surface et la contamination' },
    ],
  },
  {
    name: 'Chenilles processionnaires',
    icon: 'chenilles',
    href: '/services/chenilles-processionnaires',
    tiers: [
      { label: 'Nid accessible', price: '89', details: 'Retrait et destruction du nid' },
      { label: 'Nid en hauteur', price: '149', details: 'Perche télescopique', highlight: true },
      { label: 'Grand arbre, nacelle', price: null, details: 'Selon la hauteur et le nombre de nids' },
    ],
  },
]

const guarantees = [
  'Devis gratuit confirmé avant intervention',
  'Tarif annoncé = tarif final, sans surprise',
  'RC Pro incluse sur toutes les interventions',
  'Garantie 1 an',
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
              <span className="text-xs font-black tracking-widest uppercase" style={{ color: ACCENT }}>Prix TTC · Devis gratuit · Sans engagement</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
              Nos <span style={{ color: ACCENT }}>tarifs</span>
            </h1>
            <p className="text-lg text-white/55 mb-8 leading-relaxed max-w-xl mx-auto">
              Prix de départ TTC pour chaque nuisible. Le prix exact est confirmé par un devis gratuit avant toute intervention, sans frais cachés.
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
                  {tiers.map(({ label, price, unit, details, highlight }) => (
                    <div key={label} className="p-5 relative"
                      style={{ background: highlight ? 'rgba(232,68,26,0.05)' : 'transparent' }}>
                      {highlight && (
                        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg,transparent,${ACCENT},transparent)` }} />
                      )}
                      <p className="text-white/50 text-xs font-semibold mb-1.5 uppercase tracking-wide">{label}</p>
                      <p className="font-black mb-1.5" style={{ fontSize: '1.75rem', color: highlight ? ACCENT : '#fff', lineHeight: 1 }}>
                        {price ? (<><span className="text-white/45 text-sm font-semibold">dès </span>{price} €<span className="text-base">{unit}</span></>) : <span className="text-2xl">Sur devis</span>}
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
              Prix TTC indicatifs « à partir de ». Le prix final dépend de la surface, du niveau d'infestation et de l'accès : il est toujours confirmé par un devis écrit et gratuit avant l'intervention. Paiement possible par CB, virement ou espèces.
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
