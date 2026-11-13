'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { NOTE_GOOGLE, FICHE_GOOGLE_URL } from '@/lib/avis-google'
import { SAISONS_FAQ } from '@/lib/saisons-faq'
import { CHAINE_YOUTUBE } from '@/lib/youtube'
import {
  Phone, ShieldCheck, Clock, Star, ChevronDown, ArrowRight, CheckCircle, X,
  FlaskConical, Repeat, Store, Building2, MapPin, Lock, Zap, Microscope,
  Search, ClipboardList, Home, UtensilsCrossed, Grid3x3, HeartPulse, Wind,
  SprayCan, Bug, Thermometer, type LucideIcon,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PhotosChantiers from '@/components/PhotosChantiers'
import MediasChantier, { type VideoChantier } from '@/components/MediasChantier'
import VignettesChantier from '@/components/VignettesChantier'
import type { PhotoKey } from '@/lib/photos-chantiers'
import AvisGoogle from '@/components/AvisGoogle'
import { MethodesDetaillees, GuideDetaille, type BlocMethodes, type GuideService } from '@/components/MethodesService'
import ContenuNuisible, { type ContenuFamille } from '@/components/ContenuNuisible'
import type { CleAvis } from '@/lib/avis-google'

/** Icônes de bénéfices — clés sémantiques mappées vers Lucide (fallback emoji). */
const BENEFIT_ICONS: Record<string, LucideIcon> = {
  flask: FlaskConical, repeat: Repeat, store: Store, building: Building2,
  pin: MapPin, lock: Lock, zap: Zap, microscope: Microscope, search: Search,
  shield: ShieldCheck, clipboard: ClipboardList, home: Home, food: UtensilsCrossed,
  net: Grid3x3, health: HeartPulse, wind: Wind, spray: SprayCan, bug: Bug,
  thermo: Thermometer, clock: Clock,
}

const PHONE = '07 68 07 72 19'
const PHONE_HREF = 'tel:+33768077219'
const ACCENT = '#E8441A'
const WA = 'https://wa.me/33768077219'

export interface PricingTier {
  label: string
  price: string
  unit?: string
  description: string
  features: string[]
  highlight?: boolean
  cta?: string
}

export interface ServiceData {
  badge: string
  heroTitle: string
  heroHighlight: string
  heroDescription: string
  heroPrices?: Array<{ price: string; label: string }>
  trustBar: string[]
  benefits: Array<{ icon: string; title: string; text: string }>
  process: Array<{ title: string; text: string }>
  pricing: PricingTier[]
  // Ordre des vrais avis Google (lib/avis-google.ts), le plus proche du service en premier
  avis?: CleAvis[]
  faq: Array<{ q: string; a: string }>
  ctaTitle: string
  metaTitle?: string
  // Vraies photos de chantier à afficher (clés de lib/photos-chantiers.ts)
  photos?: PhotoKey[]
  // Vrai chantier en vidéos (remplace la galerie photos)
  chantier?: { photos?: PhotoKey[]; videos?: VideoChantier[]; titre: string; vignettes?: string; lien?: { href: string; label: string } }
  // Mot-clé du badge « devis gratuit » sous le titre (ex. « Devis gratuit punaises de lit »)
  devis?: string
  // Bandeau d'urgence sous le titre (ex. punaises de lit)
  urgence?: { titre: string; texte: string }
  // Tableau comparatif affiché après le déroulé (ex. cryogénie, vapeur, insecticide)
  tableau?: { titre: string; intro?: string; head: string[]; rows: string[][] }
  // Méthodes détaillées et guide long (contenu propre, lib/contenu-services/)
  methodes?: BlocMethodes
  // Protocole complet (observation, méthodes, signes, risques, erreurs, garantie, qui paie), 10/11/2026
  contenu?: ContenuFamille
  // Bloc libre affiché après le déroulé de l'intervention (ex. infographie du cycle des punaises, 11/11/2026)
  apresProcess?: React.ReactNode
  // Sous-titres H2 propres à la page (13/11/2026) ; sans ce champ, les titres habituels restent affichés
  titres?: { benefits?: string; process?: string; pricing?: string; faq?: string }
  // Vidéos déjà présentées en détail dans le contenu (VideosDetaillees) : pas de galerie en bas de page
  galerieDansContenu?: boolean
  guide?: GuideService
  // Maillage du cocon sémantique : pages villes et guides du blog liés à ce service
  related?: {
    villes?: { title: string; links: Array<{ href: string; label: string }> }
    guides?: { title: string; links: Array<{ href: string; label: string }> }
    souris?: { title: string; links: Array<{ href: string; label: string }> }
    // Blocs ajoutés par lib/maillage-services.ts (départements, articles, autres services)
    extra?: Array<{ title: string; links: Array<{ href: string; label: string }> }>
  }
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        background: open ? 'rgba(232,68,26,0.06)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${open ? 'rgba(232,68,26,0.25)' : 'rgba(255,255,255,0.08)'}`,
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-bold text-white text-sm pr-4 leading-snug">{q}</span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{ background: open ? ACCENT : 'rgba(255,255,255,0.08)' }}
        >
          <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
          {a}
        </div>
      )}
    </div>
  )
}

// Famille « saisons » d'une page service, d'après son adresse
const FAMILLE_SAISON: Record<string, keyof typeof SAISONS_FAQ> = {
  'punaises-de-lit': 'punaises', 'cryogenie-punaises-de-lit': 'punaises', deratisation: 'deratisation', 'cafards-blattes': 'cafards',
  fourmis: 'fourmis', 'guepes-frelons': 'frelons', 'chenilles-processionnaires': 'chenilles', acariens: 'acariens', puces: 'puces',
}

// Données structurées complètes d'une page service (entreprise, note, service, offre, étapes, FAQ, fil d'Ariane)
export function schemaService(data: Pick<ServiceData, 'heroTitle' | 'heroHighlight' | 'heroDescription' | 'badge' | 'metaTitle' | 'process'> & { pricing: { price: string }[] }, chemin: string, faq: { q: string; a: string }[]) {
  const url = `https://allonuisibleidf.fr${chemin}`
  const nom = `${data.heroTitle} ${data.heroHighlight}`.replace(/\s+/g, ' ').trim()
  const prix = data.pricing.map((t) => parseFloat(t.price.replace(',', '.'))).filter((n) => !isNaN(n))
  const entreprise = {
    '@type': 'LocalBusiness', '@id': 'https://allonuisibleidf.fr/#entreprise', name: 'Allo Nuisible IDF', url: 'https://allonuisibleidf.fr',
    telephone: '+33768077219', email: 'contact@allonuisibleidf.fr', priceRange: '€€', image: 'https://allonuisibleidf.fr/opengraph-image',
    address: { '@type': 'PostalAddress', streetAddress: '6 bis rue du Val d’Osne', postalCode: '94410', addressLocality: 'Saint-Maurice', addressRegion: 'Île-de-France', addressCountry: 'FR' },
    geo: { '@type': 'GeoCoordinates', latitude: 48.8187651, longitude: 2.4246496 },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: NOTE_GOOGLE.note.replace(',', '.'), reviewCount: NOTE_GOOGLE.nombre, bestRating: 5 },
    sameAs: [FICHE_GOOGLE_URL, CHAINE_YOUTUBE],
  }
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${url}#page`, url, name: data.metaTitle ?? nom, inLanguage: 'fr-FR', about: { '@id': `${url}#service` }, isPartOf: { '@type': 'WebSite', name: 'Allo Nuisible IDF', url: 'https://allonuisibleidf.fr' } },
      entreprise,
      {
        '@type': 'Service', '@id': `${url}#service`, name: nom, serviceType: data.badge || nom, url, description: data.heroDescription,
        provider: { '@id': 'https://allonuisibleidf.fr/#entreprise' },
        areaServed: [{ '@type': 'City', name: 'Paris' }, { '@type': 'AdministrativeArea', name: 'Val-de-Marne' }, { '@type': 'AdministrativeArea', name: 'Hauts-de-Seine' }, { '@type': 'AdministrativeArea', name: 'Île-de-France' }],
        ...(prix.length ? { offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: Math.min(...prix), offerCount: data.pricing.length, availability: 'https://schema.org/InStock' } } : {}),
      },
      { '@type': 'HowTo', name: `Comment se déroule notre intervention : ${nom}`, step: data.process.map((p, i) => ({ '@type': 'HowToStep', position: i + 1, name: p.title, text: p.text })) },
      { '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://allonuisibleidf.fr' },
        { '@type': 'ListItem', position: 2, name: data.badge || nom, item: url },
      ] },
    ],
  }
}

export default function ServicePageTemplate({ data }: { data: ServiceData }) {
  const chemin = usePathname() ?? ''
  const famille = FAMILLE_SAISON[chemin.split('/').pop() ?? '']
  const faq = [...data.faq, ...(famille ? SAISONS_FAQ[famille].filter((f) => !data.faq.some((x) => x.q === f.q)) : [])]
  const [floatVisible, setFloatVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const nearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 140
          setFloatVisible(window.scrollY > 400 && !nearBottom)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService(data, chemin, faq)) }} />
      {/* Bouton flottant */}
      <a
        href={PHONE_HREF}
        aria-label="Appeler maintenant"
        style={{
          position: 'fixed', bottom: '1.5rem', left: '50%',
          transform: floatVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(24px)',
          opacity: floatVisible ? 1 : 0,
          pointerEvents: floatVisible ? 'auto' : 'none',
          transition: 'opacity 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1)',
          zIndex: 55, display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
          background: ACCENT, color: '#fff', fontWeight: 800, fontSize: '0.875rem',
          padding: '0.9rem 2rem', borderRadius: '9999px', whiteSpace: 'nowrap',
          boxShadow: '0 8px 32px rgba(232,68,26,0.45), 0 2px 8px rgba(0,0,0,0.3)',
          textDecoration: 'none',
        }}
      >
        <Phone style={{ width: '1rem', height: '1rem', flexShrink: 0 }} />
        Appelez maintenant
      </a>

      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative pt-8 md:pt-12 pb-20 px-4 overflow-hidden" style={{ background: '#080808' }}>
          {/* Gradient de fond */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(232,68,26,0.18) 0%, transparent 65%)',
          }} />
          {/* Grille décorative */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />

          <div className="relative max-w-5xl mx-auto">
            <div className="text-center mb-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style={{
                background: 'rgba(232,68,26,0.12)', border: '1px solid rgba(232,68,26,0.25)',
                backdropFilter: 'blur(10px)',
              }}>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: ACCENT }}>{data.badge}</span>
              </div>

              {/* Titre */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-5 tracking-tight">
                {data.heroTitle}{' '}<br />
                <span style={{ color: ACCENT }}>{data.heroHighlight}</span>
              </h1>
              {data.urgence && (
                <div className="max-w-2xl mx-auto mb-6 rounded-2xl px-5 py-4 flex items-start gap-3 text-left"
                  style={{ background: 'rgba(232,68,26,0.14)', border: '1px solid rgba(232,68,26,0.5)' }}>
                  <Clock className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                  <div>
                    <p className="font-black text-white text-base md:text-lg leading-snug">{data.urgence.titre}</p>
                    <p className="text-white/70 text-sm mt-1">{data.urgence.texte}</p>
                  </div>
                </div>
              )}
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                {data.heroDescription}
              </p>
              {data.chantier && (
                <div className="-mt-4 mb-8">
                  <VignettesChantier photos={data.chantier.photos} videos={data.chantier.videos} centre texte={data.chantier.vignettes ?? 'Un de nos chantiers en images'} />
                </div>
              )}

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
                <a href={PHONE_HREF}
                  className="inline-flex items-center gap-2.5 font-black text-white px-7 py-4 rounded-2xl text-sm transition-all hover:brightness-110 hover:scale-[1.02]"
                  style={{ background: ACCENT, boxShadow: `0 6px 28px rgba(232,68,26,0.4)` }}
                >
                  <Phone className="w-4 h-4" />
                  {PHONE}
                </a>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-bold text-white px-7 py-4 rounded-2xl text-sm transition-all hover:brightness-110"
                  style={{ background: '#25D366', boxShadow: '0 6px 28px rgba(37,211,102,0.3)' }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L0 24l6.335-1.502A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.803 9.803 0 01-5.002-1.368l-.36-.214-3.735.885.944-3.619-.235-.372A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                  </svg>
                  WhatsApp
                </a>
                <a href="/tarifs"
                  className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-2xl text-sm transition-all hover:brightness-125"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
                >
                  Voir les tarifs <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <p className="mb-2">
                <span className="inline-block font-black uppercase tracking-wide text-base md:text-lg px-5 py-2 rounded-full" style={{ background: ACCENT, color: '#fff' }}>
                  {data.devis || 'Devis gratuit'}
                </span>
              </p>
              <p className="text-white/60 text-sm tracking-wide">
                Sans engagement · Réponse en 5 min · 7j/7 soirs et week-ends · Île-de-France
              </p>
            </div>

            {/* Prix glassmorphisme */}
            {data.heroPrices && (
              <div className="flex gap-3 justify-center max-w-lg mx-auto">
                {data.heroPrices.map(({ price, label }) => (
                  <div key={label} className="flex-1 rounded-2xl px-4 py-5 text-center relative"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}>
                    <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${ACCENT},transparent)` }} />
                    {/^\d+$/.test(price) ? (
                      <>
                        <p className="text-white/60 text-[11px] font-semibold mb-1">à partir de</p>
                        <p className="text-3xl font-black text-white leading-none mb-1">{price} €</p>
                      </>
                    ) : (
                      <p className="text-3xl font-black text-white leading-none mb-1">Sur devis</p>
                    )}
                    <p className="text-white/60 text-[11px]">{label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <div style={{ background: ACCENT }}>
          <div className="max-w-5xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {data.trustBar.map((item) => (
              <div key={item} className="flex items-center gap-2 text-white text-sm font-bold">
                <CheckCircle className="w-4 h-4 flex-shrink-0 opacity-90" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ── BENEFITS ── */}
        <section className="py-16 md:py-24 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: ACCENT }}>Pourquoi nous choisir</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">{data.titres?.benefits ?? 'Ce qui nous distingue'}</h2>
            </div>
            <div className={`grid ${data.benefits.length === 4 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-5`}>
              {data.benefits.map(({ icon, title, text }) => {
                const BIcon = BENEFIT_ICONS[icon]
                return (
                  <div key={title} className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                      style={{ background: 'rgba(232,68,26,0.1)', border: '1px solid rgba(232,68,26,0.2)', color: ACCENT }}>
                      {BIcon ? <BIcon className="w-6 h-6" strokeWidth={2} /> : <span className="text-2xl">{icon}</span>}
                    </div>
                    <p className="font-black text-white text-base mb-2.5">{title}</p>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.7 }}>{text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-16 md:py-24 px-4" style={{ background: '#111' }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: ACCENT }}>Déroulé</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">{data.titres?.process ?? 'Comment ça se passe ?'}</h2>
            </div>
            <div className="space-y-0">
              {data.process.map(({ title, text }, i) => (
                <div key={i} className="flex gap-6 pb-10 relative">
                  {i < data.process.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, rgba(232,68,26,0.4), transparent)' }} />
                  )}
                  <div className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-black text-white text-sm z-10 shadow-lg"
                    style={{ background: ACCENT, boxShadow: `0 0 0 4px rgba(232,68,26,0.15)` }}>
                    {i + 1}
                  </div>
                  <div className="pt-2">
                    <p className="font-black text-white mb-2">{title}</p>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.7 }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TABLEAU COMPARATIF ── */}
        {data.apresProcess}
        {data.contenu && <ContenuNuisible data={data.contenu} slug="ile-de-france" a="en Île-de-France" nom="Île-de-France" partie={1} />}
        {data.methodes && !data.contenu && <MethodesDetaillees bloc={data.methodes} />}

        {data.tableau && (
          <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{data.tableau.titre}</h2>
              {data.tableau.intro && <p className="text-white/60 mb-6">{data.tableau.intro}</p>}
              <div className="overflow-x-auto rounded-2xl" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr>{data.tableau.head.map((h) => <th key={h} className="text-left font-bold px-4 py-3" style={{ color: ACCENT }}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {data.tableau.rows.map((r) => (
                      <tr key={r[0]} className="border-t border-white/10">
                        {r.map((cell, j) => <td key={j} className={`px-4 py-3 align-top ${j === 0 ? 'text-white font-bold' : 'text-white/70'}`}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* ── PRICING ── */}
        {data.guide && <GuideDetaille guide={data.guide} />}
        {data.contenu && <ContenuNuisible data={data.contenu} slug="ile-de-france" a="en Île-de-France" nom="Île-de-France" partie={2} />}

        <section className="py-16 md:py-24 px-4" style={{ background: '#080808' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: ACCENT }}>Devis gratuit</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">{data.titres?.pricing ?? 'Devis sur mesure, sans surprise'}</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem' }}>Devis gratuit confirmé avant intervention · RC Pro incluse</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {data.pricing.map((tier) => (
                <div key={tier.label}
                  className={`rounded-2xl p-7 relative flex flex-col transition-all duration-300 hover:-translate-y-1 ${tier.highlight ? 'ring-2' : ''}`}
                  style={{
                    background: tier.highlight ? 'rgba(232,68,26,0.08)' : 'rgba(255,255,255,0.04)',
                    border: tier.highlight ? `1px solid rgba(232,68,26,0.35)` : '1px solid rgba(255,255,255,0.08)',
                  }}>
                  {tier.highlight && (
                    <>
                      <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${ACCENT},transparent)` }} />
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-black text-white uppercase tracking-wider"
                        style={{ background: ACCENT }}>
                        Formule type
                      </div>
                    </>
                  )}
                  <p className="font-black text-white text-sm mb-1 uppercase tracking-wider">{tier.label}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    {/^\d+$/.test(tier.price) ? (
                      <>
                        <span className="text-white/60 text-sm font-semibold">à partir de</span>
                        <span className="text-4xl font-black" style={{ color: tier.highlight ? ACCENT : '#fff' }}>{tier.price} €</span>
                        {tier.unit && <span className="text-white/60 text-sm">{tier.unit}</span>}
                      </>
                    ) : (
                      <span className="text-4xl font-black" style={{ color: tier.highlight ? ACCENT : '#fff' }}>Sur devis</span>
                    )}
                  </div>
                  <p className="text-white/60 text-xs mb-5 leading-relaxed">{tier.description}</p>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={PHONE_HREF}
                    className="block text-center font-black py-3.5 rounded-xl text-sm transition-all hover:opacity-90"
                    style={{
                      background: tier.highlight ? ACCENT : 'rgba(255,255,255,0.08)',
                      color: '#fff',
                      border: tier.highlight ? 'none' : '1px solid rgba(255,255,255,0.15)',
                    }}>
                    {tier.cta || 'Obtenir un devis gratuit'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VRAIS AVIS GOOGLE ── */}
        <AvisGoogle ordre={data.avis} />

        {data.photos && !data.chantier && <PhotosChantiers photos={data.photos} fond="#0d0d0d" />}
        {data.chantier && !data.galerieDansContenu && (
          <section id="chantier-en-images" className="py-14 md:py-20 px-4 scroll-mt-20" style={{ background: '#0d0d0d' }}>
            <div className="max-w-3xl mx-auto">
              <MediasChantier photos={data.chantier.photos} videos={data.chantier.videos} titre={data.chantier.titre} lien={data.chantier.lien} />
            </div>
          </section>
        )}

        {/* ── MAILLAGE : VILLES ET GUIDES ── */}
        {data.related && (
          <section className="py-16 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
              {[data.related.villes, data.related.guides, data.related.souris, ...(data.related.extra ?? [])].filter(Boolean).map((bloc) => (
                <div key={bloc!.title}>
                  <h2 className="text-xl md:text-2xl font-black text-white mb-5">{bloc!.title}</h2>
                  <ul className="space-y-2">
                    {bloc!.links.map((l) => (
                      <li key={l.href}>
                        <a href={l.href}
                          className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-white/80 hover:text-white text-sm font-semibold transition-colors hover:bg-white/[0.06]"
                          style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                          {l.label}<ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        <section className="py-16 md:py-24 px-4" style={{ background: '#111' }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: ACCENT }}>FAQ</p>
              <h2 className="text-2xl md:text-3xl font-black text-white">{data.titres?.faq ?? 'Questions fréquentes'}</h2>
            </div>
            <div className="space-y-3">
              {faq.map(({ q, a }) => <FaqItem key={q} q={q} a={a} />)}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="relative py-20 px-4 overflow-hidden" style={{ background: ACCENT }}>
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <span className="text-white/80 text-xs font-black uppercase tracking-widest">Disponible maintenant · 7j/7</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
              {data.ctaTitle}
            </h2>
            <p className="text-white/75 text-base mb-10">
              Intervention en Île-de-France · Devis gratuit · Résultat garanti
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={PHONE_HREF}
                className="inline-flex items-center gap-2.5 bg-white font-black px-9 py-4 rounded-2xl hover:bg-gray-50 transition-all hover:scale-105 text-sm"
                style={{ color: ACCENT, boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
                <Phone className="w-4 h-4" />{PHONE}
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-bold px-9 py-4 rounded-2xl border-2 border-white/80 text-white hover:bg-white/10 transition-all text-sm">
                WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-white/60 text-xs mt-6">RC Pro · Certibiocide · Garantie 1 an</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
