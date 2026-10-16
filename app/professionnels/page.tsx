'use client'

import {
  Phone, CheckCircle, ArrowRight, ShieldCheck, FileText, Star,
  UtensilsCrossed, BedDouble, ShoppingCart, Building2, Baby, HeartPulse, Building, HardHat,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const PHONE = '07 68 07 72 19'
const PHONE_HREF = 'tel:+33768077219'
const ACCENT = '#E8441A'
const WA = 'https://wa.me/33768077219'

const sectors = [
  { icon: UtensilsCrossed, name: 'Restaurants & traiteurs', text: 'Conformité HACCP, attestations pour DDPP, interventions hors horaires d\'ouverture.' },
  { icon: BedDouble, name: 'Hôtels & résidences', text: 'Discrétion absolue, interventions nocturnes, traitement chambre par chambre.' },
  { icon: ShoppingCart, name: 'Grande distribution', text: 'Protocoles adaptés aux entrepôts, réserves et surfaces de vente. Traitement nocturne.' },
  { icon: Building2, name: 'Bureaux & open spaces', text: 'Intervention weekend et soirs pour zéro perturbation de votre activité.' },
  { icon: Baby, name: 'Crèches & établissements scolaires', text: 'Produits adaptés aux jeunes enfants, protocoles de sécurité renforcés.' },
  { icon: HeartPulse, name: 'EHPAD & santé', text: 'Désinfection à spectre large, traçabilité complète, attestations réglementaires.' },
  { icon: Building, name: 'Syndics & copropriétés', text: 'Traitement parties communes, caves, parkings. Contrats pluriannuels avec registres de suivi.' },
  { icon: HardHat, name: 'Chantiers & industrie', text: 'Dératisation de chantiers, usines, entrepôts. Intervention sur grande surface.' },
]

const advantages = [
  { icon: FileText, title: 'Attestation HACCP officielle', text: 'Fourniture systématique d\'une attestation d\'intervention certifiée, valable pour vos contrôles sanitaires DDPP et administrations.' },
  { icon: ShieldCheck, title: 'Certibiocide & RC Pro', text: 'Techniciens certifiés Certibiocide (Ministère de l\'Agriculture). RC professionnelle couvrant tous nos chantiers.' },
  { icon: Star, title: 'Rapport de suivi détaillé', text: 'Rapport complet après chaque passage : zones traitées, produits utilisés, consommations relevées, recommandations préventives.' },
]

const contracts = [
  {
    label: 'Ponctuel',
    price: 'Sur devis',
    description: 'Intervention unique sur signalement ou obligation réglementaire',
    features: ['Intervention rapide', 'Attestation fournie', 'Rapport d\'intervention', 'Garantie résultat'],
  },
  {
    label: 'Trimestriel',
    price: 'Sur devis',
    description: '4 visites par an, idéal pour restaurants et commerces alimentaires',
    features: ['4 passages/an', 'Relevés de postes', 'Rapport trimestriel', 'Registre de suivi', 'Attestations incluses'],
    highlight: true,
  },
  {
    label: 'Mensuel',
    price: 'Sur devis',
    description: '12 visites par an, pour les établissements à fort risque',
    features: ['12 passages/an', 'Relevés mensuels', 'Rapport mensuel', 'Accès prioritaire urgences', 'Registre complet fourni'],
  },
]

export default function ProfessionnelsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <section className="relative pt-8 md:pt-12 pb-20 px-4 overflow-hidden" style={{ background: '#080808' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 80% 55% at 50% -10%, rgba(232,68,26,0.15) 0%, transparent 65%)',
          }} />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style={{ background: 'rgba(232,68,26,0.12)', border: '1px solid rgba(232,68,26,0.25)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-black tracking-widest uppercase" style={{ color: ACCENT }}>HACCP · ERP · Certibiocide · Contrats maintenance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-5 tracking-tight">
              Solutions professionnelles<br /><span style={{ color: ACCENT }}>conformes & certifiées</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Restaurants, hôtels, syndics, crèches, EHPAD : interventions certifiées avec attestations officielles, contrats de maintenance et registres de suivi. Conformité garantie.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2.5 font-black text-white px-7 py-4 rounded-2xl text-sm" style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
                <Phone className="w-4 h-4" />Devis professionnel : {PHONE}
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 font-bold text-white px-7 py-4 rounded-2xl text-sm" style={{ background: '#25D366' }}>
                WhatsApp pro
              </a>
            </div>
            <p className="text-white/30 text-xs">Intervention possible le soir et le week-end · Urgences gérées sous 2h</p>
          </div>
        </section>

        {/* TRUST BAR */}
        <div style={{ background: ACCENT }}>
          <div className="max-w-5xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {['Certibiocide', 'HACCP conforme', 'RC Pro', 'Attestations officielles', 'Registres de suivi', 'Contrats annuels'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white text-sm font-bold">
                <CheckCircle className="w-4 h-4 flex-shrink-0 opacity-90" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* SECTEURS */}
        <section className="py-16 md:py-24 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: ACCENT }}>Nos secteurs</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">Nous intervenons dans tous les secteurs</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sectors.map(({ icon: Icon, name, text }) => (
                <div key={name} className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105"
                    style={{ background: 'rgba(232,68,26,0.1)', border: '1px solid rgba(232,68,26,0.2)', color: ACCENT }}>
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <p className="font-black text-white text-sm mb-2">{name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8125rem', lineHeight: 1.65 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AVANTAGES PRO */}
        <section className="py-16 md:py-24 px-4" style={{ background: '#111' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: ACCENT }}>Notre engagement</p>
              <h2 className="text-2xl md:text-3xl font-black text-white">Ce que vous obtenez à chaque intervention</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {advantages.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl p-7 relative" style={{ background: 'rgba(232,68,26,0.05)', border: '1px solid rgba(232,68,26,0.2)' }}>
                  <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(232,68,26,0.6),transparent)' }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(232,68,26,0.12)' }}>
                    <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                  </div>
                  <p className="font-black text-white mb-2.5">{title}</p>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', lineHeight: 1.7 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTRATS */}
        <section className="py-16 md:py-24 px-4" style={{ background: '#080808' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: ACCENT }}>Contrats de maintenance</p>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Protégez votre établissement toute l&apos;année</h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9375rem' }}>Tous les contrats incluent attestations, rapports et registres de suivi</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {contracts.map((c) => (
                <div key={c.label}
                  className="rounded-2xl p-7 relative flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: c.highlight ? 'rgba(232,68,26,0.08)' : 'rgba(255,255,255,0.04)',
                    border: c.highlight ? '1px solid rgba(232,68,26,0.35)' : '1px solid rgba(255,255,255,0.08)',
                  }}>
                  {c.highlight && (
                    <>
                      <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${ACCENT},transparent)` }} />
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-black text-white uppercase tracking-wider" style={{ background: ACCENT }}>
                        Le + populaire
                      </div>
                    </>
                  )}
                  <p className="font-black text-white text-sm mb-1 uppercase tracking-wider">{c.label}</p>
                  <p className="text-3xl font-black mb-1" style={{ color: c.highlight ? ACCENT : '#fff' }}>{c.price}</p>
                  <p className="text-white/40 text-xs mb-5 leading-relaxed">{c.description}</p>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={PHONE_HREF} className="block text-center font-black py-3.5 rounded-xl text-sm transition-all hover:opacity-90"
                    style={{ background: c.highlight ? ACCENT : 'rgba(255,255,255,0.08)', color: '#fff', border: c.highlight ? 'none' : '1px solid rgba(255,255,255,0.15)' }}>
                    Demander un devis
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ RAPIDE */}
        <section className="py-16 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: ACCENT }}>Questions fréquentes</p>
              <h2 className="text-2xl font-black text-white">Professionnels : vos questions</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: 'L\'attestation que vous fournissez est-elle acceptée par les DDPP ?', a: 'Oui. Nos techniciens sont certifiés Certibiocide (habilitation délivrée par le Ministère de l\'Agriculture). Nos attestations sont conformes aux exigences réglementaires et acceptées par les DDPP, inspections sanitaires et assurances.' },
                { q: 'Intervenez-vous hors des horaires d\'ouverture ?', a: 'Oui, c\'est même notre mode de fonctionnement préféré pour les professionnels. Interventions le soir, tôt le matin ou le week-end pour ne pas perturber votre activité ni votre clientèle.' },
                { q: 'Peut-on établir un contrat de maintenance ?', a: 'Oui. Nous proposons des contrats mensuels, trimestriels ou annuels avec planification des visites, relevés réguliers, rapports et registre de suivi. Tarif dégressif selon la fréquence.' },
                { q: 'Quels types d\'établissements servez-vous ?', a: 'Restaurants, hôtels, crèches, EHPAD, commerces alimentaires, supermarchés, entrepôts, bureaux, copropriétés, syndics de gestion, hôpitaux et cliniques. Chaque secteur a un protocole adapté.' },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <p className="font-black text-white text-sm mb-2">{q}</p>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', lineHeight: 1.7 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 px-4 overflow-hidden" style={{ background: ACCENT }}>
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
              Parlons de vos besoins<br />professionnels
            </h2>
            <p className="text-white/75 mb-10">Devis gratuit · Intervention rapide · Attestation officielle · Île-de-France</p>
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
