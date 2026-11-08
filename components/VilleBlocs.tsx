// Blocs communs aux pages service + ville (refonte du 08/11/2026) : haut de page, étapes d'intervention,
// tarifs, autres services dans la même ville. Formulations en rotation d'une ville à l'autre (similarité ≤ 0,50).
import { Phone, Camera, Star, ShieldCheck, Clock, BadgeCheck, ArrowRight, MapPin } from 'lucide-react'
import { NOTE_GOOGLE, FICHE_GOOGLE_URL } from '@/lib/avis-google'
import { REPERES } from '@/lib/reperes-villes'
import { codePostal } from '@/lib/codes-postaux'

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

export function HeroVille({ slug, nom, a, titre, accroche, prix, prixNote, fil }: {
  slug: string; nom: string; a: string; titre: string; accroche: string; prix: string; prixNote: string
  fil: { href: string; label: string }
}) {
  const cp = codePostal(slug)
  const pop = REPERES[slug]?.population
  return (
    <section className="relative pt-10 md:pt-14 pb-12 px-4 overflow-hidden" style={{ background: '#080808' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(232,68,26,0.18) 0%, transparent 65%)' }} />
      <div className="relative max-w-4xl mx-auto text-center">
        <nav className="text-xs text-white/40 mb-5" aria-label="Fil d'Ariane">
          <a href="/" className="hover:text-white/70">Accueil</a>{' / '}
          <a href={fil.href} className="hover:text-white/70">{fil.label}</a>{' / '}
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
