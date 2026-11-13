import { GERANT } from '@/lib/seo'
import { CHAINE_YOUTUBE } from '@/lib/youtube'
// Blocs communs aux pages service + ville (refonte du 08/11/2026) : haut de page, étapes d'intervention,
// tarifs, autres services dans la même ville. Formulations en rotation d'une ville à l'autre (similarité ≤ 0,50).
import { Phone, Camera, Star, ShieldCheck, Clock, BadgeCheck, ArrowRight, MapPin } from 'lucide-react'
import { NOTE_GOOGLE, FICHE_GOOGLE_URL } from '@/lib/avis-google'
import { REPERES } from '@/lib/reperes-villes'
import { codePostal } from '@/lib/codes-postaux'
import { PHOTOS_MAIRIES } from '@/lib/photos-mairies'
import { MAIRIES } from '@/lib/mairies'

const ACCENT = '#E8441A'
export const WHATSAPP = 'https://wa.me/33768077219?text=Bonjour%2C%20voici%20une%20photo%20du%20probl%C3%A8me%20chez%20moi%20%3A'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }
const h = (s: string) => s.split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 11)
const nf = (n: number) => n.toLocaleString('fr-FR')
const km = (n: number) => n.toLocaleString('fr-FR', { maximumFractionDigits: 1 })

// « à 1,8 km de notre base de Saint-Maurice » ou « depuis notre base, ici même »
export function phraseDistance(slug: string, nom: string) {
  const r = REPERES[slug]
  if (!r) return ''
  if (slug === 'saint-maurice') return `Notre base est à Saint-Maurice même : nous sommes vos voisins.`
  const v = [
    `Notre base de Saint-Maurice n'est qu'à ${km(r.km)} km de ${nom} à vol d'oiseau.`,
    `${nom} se trouve à ${km(r.km)} km de notre base de Saint-Maurice, à vol d'oiseau.`,
    `Depuis Saint-Maurice, où nous sommes installés, ${nom} est à ${km(r.km)} km à vol d'oiseau.`,
  ]
  return v[h(slug) % v.length]
}

export function titreGoogle(motCle: string, nom: string, slug: string, suffixes: string[]) {
  const cp = codePostal(slug)
  const base = `${motCle} ${nom}${cp ? ` (${cp})` : ''}`
  return (suffixes.map((s) => base + s).find((t) => t.length <= 60)) ?? base
}

export function HeroVille({ slug, nom, a, titre, accroche, prix, prixNote, fil, maj, dep }: {
  slug: string; nom: string; a: string; titre: string; accroche: string; prix: string; prixNote: string
  fil: { href: string; label: string }
  maj?: string // date de mise à jour affichée sous le titre (signature de l'équipe technique)
  dep?: { href: string; label: string } // niveau département du fil d'Ariane
}) {
  const cp = codePostal(slug)
  const pop = REPERES[slug]?.population
  return (
    <section className="relative pt-10 md:pt-14 pb-12 px-4 overflow-hidden" style={{ background: '#080808' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(232,68,26,0.18) 0%, transparent 65%)' }} />
      <div className={`relative mx-auto ${PHOTOS_MAIRIES[slug] ? 'max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-10 lg:items-center' : 'max-w-4xl'}`}>
      <div className="text-center">
        <nav className="text-xs text-white/40 mb-5" aria-label="Fil d'Ariane">
          <a href="/" className="hover:text-white/70">Accueil</a>{' / '}
          <a href={fil.href} className="hover:text-white/70">{fil.label}</a>{' / '}
          {dep && <><a href={dep.href} className="hover:text-white/70">{dep.label}</a>{' / '}</>}
          <span className="text-white/60">{nom}</span>
        </nav>

        <a href={FICHE_GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
          <span className="flex text-yellow-400">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}</span>
          <strong className="text-white">{NOTE_GOOGLE.note}/5</strong><span className="text-white/60">sur {NOTE_GOOGLE.nombre} avis Google</span>
        </a>

        <h1 className="text-[2.1rem] sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-3 tracking-tight">
          {titre} <span style={{ color: ACCENT }}>{a}</span>
        </h1>
        {cp && <p className="text-white/45 font-bold tracking-widest mb-6">{cp}{pop ? ` · ${nf(pop)} habitants` : ''}</p>}
        {maj && (
          <p className="inline-flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-xs text-white/55 -mt-3 mb-6">
            <BadgeCheck className="w-3.5 h-3.5" style={{ color: ACCENT }} />
            <span>Rédigé par <strong className="text-white/80">Houssem Hattab</strong>, gérant d&apos;Allo Nuisible IDF, avec nos techniciens certifiés Certibiocide</span>
            <span className="text-white/30">·</span><span>Mis à jour le {maj}</span>
          </p>
        )}

        <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-7">{accroche}</p>

        <div className="flex flex-wrap justify-center items-center gap-3 mb-7">
          <span className="inline-flex items-baseline gap-2 rounded-2xl px-5 py-3" style={{ background: 'rgba(232,68,26,0.12)', border: '1.5px solid rgba(232,68,26,0.45)' }}>
            <span className="text-white/80 font-bold text-sm">À partir de</span>
            <span className="font-black text-4xl" style={{ color: ACCENT }}>{prix}</span>
            <span className="text-white/80 font-bold text-sm">TTC</span>
          </span>
          <span className="text-white/70 text-sm font-bold max-w-[13rem] text-left leading-snug">{prixNote}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a href="tel:+33768077219" className="inline-flex items-center gap-2.5 font-black text-white px-7 py-4 rounded-2xl hover:brightness-110" style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.45)' }}>
            <Phone className="w-5 h-5" /> Devis gratuit : 07 68 07 72 19
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 font-black text-white px-7 py-4 rounded-2xl hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
            <Camera className="w-5 h-5" /> Envoyer une photo sur WhatsApp
          </a>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-3xl mx-auto">
          {[
            { i: Clock, t: '7j/7, souvent le jour même' },
            { i: BadgeCheck, t: 'Techniciens Certibiocide' },
            { i: ShieldCheck, t: 'Garantie 1 an' },
            { i: MapPin, t: `Basés à ${REPERES[slug]?.km ? `${km(REPERES[slug].km)} km` : 'Saint-Maurice'}` },
          ].map(({ i: I, t }) => (
            <li key={t} className="flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs md:text-sm font-bold text-white/85" style={card}>
              <I className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />{t}
            </li>
          ))}
        </ul>
      </div>
      {PHOTOS_MAIRIES[slug] && (
        <figure className="mt-10 lg:mt-0 max-w-md mx-auto lg:max-w-none w-full">
          <div className="relative rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 20px 60px rgba(0,0,0,0.55)' }}>
            <img src={PHOTOS_MAIRIES[slug].src} alt={PHOTOS_MAIRIES[slug].lieu ? `${PHOTOS_MAIRIES[slug].lieu} : ${titre.toLowerCase()} ${a} par Allo Nuisible IDF` : `${MAIRIES[slug]?.mairie ?? `Mairie de ${nom}`}, façade`} width={760} height={900}
              className="w-full h-64 sm:h-80 lg:h-[440px] object-cover" fetchPriority="high" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-left" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.85))' }}>
              <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Nous intervenons {a}</p>
              <p className="text-white font-black text-lg leading-tight">{PHOTOS_MAIRIES[slug].lieu ?? MAIRIES[slug]?.mairie ?? `Mairie de ${nom}`}</p>
            </div>
          </div>
          <figcaption className="text-[10px] text-white/35 mt-2 text-center lg:text-right">
            Photo : <a href={PHOTOS_MAIRIES[slug].page} target="_blank" rel="noopener noreferrer nofollow" className="underline">{PHOTOS_MAIRIES[slug].credit}</a>, {PHOTOS_MAIRIES[slug].licence}
          </figcaption>
        </figure>
      )}
      </div>
    </section>
  )
}

export function EtapesVille({ slug, a, titre, etapes }: { slug: string; a: string; titre: string; etapes: string[][] }) {
  const k = h(slug)
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">{titre}</h2>
        <p className="text-white/55 mb-10">De votre appel à la garantie, voici comment nous intervenons {a}.</p>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {etapes.map((variantes, i) => {
            const [t, x] = variantes[(k >>> (i * 3)) % variantes.length].split('|')
            return (
              <li key={i} className="rounded-2xl p-5 relative" style={card}>
                <span className="absolute -top-3 left-5 w-8 h-8 rounded-full flex items-center justify-center font-black text-white text-sm" style={{ background: ACCENT }}>{i + 1}</span>
                <p className="text-white font-black mt-3 mb-2">{t}</p>
                <p className="text-white/65 text-sm leading-relaxed">{x}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export function TarifsVille({ titre, intro, lignes, note }: { titre: string; intro: string; lignes: { label: string; prix: string; detail: string }[]; note: string }) {
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: '#080808' }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">{titre}</h2>
        <p className="text-white/60 mb-8">{intro}</p>
        <div className="rounded-2xl overflow-hidden text-left" style={card}>
          {lignes.map((l, i) => (
            <div key={l.label} className="flex items-center justify-between gap-4 p-5" style={i ? { borderTop: '1px solid rgba(255,255,255,0.08)' } : undefined}>
              <div>
                <p className="text-white font-black">{l.label}</p>
                <p className="text-white/55 text-sm">{l.detail}</p>
              </div>
              <p className="font-black text-xl md:text-2xl whitespace-nowrap" style={{ color: ACCENT }}>{l.prix}</p>
            </div>
          ))}
        </div>
        <p className="text-white/55 text-sm mt-5">{note}</p>
      </div>
    </section>
  )
}

export function AutresServicesVille({ nom, a, liens }: { nom: string; a: string; liens: { href: string; label: string; prix: string }[] }) {
  if (!liens.length) return null
  return (
    <section className="py-14 md:py-16 px-4" style={{ background: '#111' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Nos autres interventions {a}</h2>
        <p className="text-white/55 mb-8">Un autre nuisible à {nom} ? Le même technicien s&apos;en occupe, avec le même devis gratuit.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {liens.map((l) => (
            <a key={l.href} href={l.href} className="group flex items-center justify-between gap-3 rounded-xl px-5 py-4 text-left hover:bg-white/[0.06]" style={card}>
              <span>
                <span className="block text-white font-bold">{l.label} {a}</span>
                <span className="block text-sm" style={{ color: ACCENT }}>{l.prix} TTC</span>
              </span>
              <ArrowRight className="w-4 h-4 text-white/50 group-hover:translate-x-0.5 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// Données structurées : l'entreprise (adresse réelle) et l'offre « à partir de » pour une page service + ville
export function schemaPrestataire() {
  return {
    '@type': 'LocalBusiness',
    '@id': 'https://allonuisibleidf.fr/#entreprise',
    name: 'Allo Nuisible IDF',
    url: 'https://allonuisibleidf.fr',
    telephone: '+33768077219',
    priceRange: '€€',
    image: 'https://allonuisibleidf.fr/opengraph-image',
    address: { '@type': 'PostalAddress', streetAddress: '6 bis rue du Val d’Osne', postalCode: '94410', addressLocality: 'Saint-Maurice', addressRegion: 'Île-de-France', addressCountry: 'FR' },
    // Vraie note de la fiche Google (lib/avis-google.ts)
    aggregateRating: { '@type': 'AggregateRating', ratingValue: NOTE_GOOGLE.note.replace(',', '.'), reviewCount: NOTE_GOOGLE.nombre, bestRating: 5 },
    // Mêmes informations que le schéma de l'accueil (12/11/2026) : position, horaires, zone, chaîne YouTube
    geo: { '@type': 'GeoCoordinates', latitude: 48.8187651, longitude: 2.4246496 },
    hasMap: FICHE_GOOGLE_URL,
    areaServed: { '@type': 'AdministrativeArea', name: 'Île-de-France' },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
    knowsAbout: ['Dératisation', 'Désinsectisation', 'Désinfection', 'Punaises de lit', 'Cafards', 'Guêpes et frelons', 'Fourmis', 'Dépigeonnage'],
    sameAs: [FICHE_GOOGLE_URL, CHAINE_YOUTUBE],
    employee: GERANT,
  }
}
export function schemaOffre(prix: string, libelle: string) {
  return { '@type': 'Offer', priceCurrency: 'EUR', price: prix, description: `À partir de ${prix} € TTC, ${libelle}`, availability: 'https://schema.org/InStock' }
}
