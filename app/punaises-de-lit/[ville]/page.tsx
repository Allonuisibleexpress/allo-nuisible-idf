import { notFound } from 'next/navigation'
import { villesVoisines, premierePhrase } from '@/lib/maillage'
import { Phone, ArrowRight, MapPin, Check, BookOpen, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { pageMetadata, SITE_URL } from '@/lib/seo'
import {
  VILLES_PUNAISES, GUIDES_PUNAISES, METHODES_PUNAISES, SOURCES_PUNAISES, MAJ_PUNAISES, getVillePunaises,
} from '@/lib/villes-punaises'

const ACCENT = '#E8441A'
const PHONE = '07 68 07 72 19'
const PHONE_HREF = 'tel:+33768077219'

export const dynamicParams = false

export function generateStaticParams() {
  return VILLES_PUNAISES.map((v) => ({ ville: v.slug }))
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  const v = getVillePunaises(params.ville)
  if (!v) return {}
  return pageMetadata({ title: v.title, description: v.description, path: `/punaises-de-lit/${v.slug}` })
}

const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

const CACHETTES = [
  'Coutures et passepoil du matelas',
  'Sommier et cadre de lit',
  'Tête de lit et table de chevet',
  'Plinthes et prises près du lit',
  'Canapé et canapé-lit',
  'Rideaux et fentes du parquet',
]

export default function PunaisesVillePage({ params }: { params: { ville: string } }) {
  const v = getVillePunaises(params.ville)
  if (!v) notFound()

  const url = `${SITE_URL}/punaises-de-lit/${v.slug}`
  const autres = villesVoisines(VILLES_PUNAISES, v)
  const maj = new Date(MAJ_PUNAISES).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

  // Résumé factuel, repris tel quel pour les moteurs et les assistants IA
  const rang = Math.max(0, VILLES_PUNAISES.findIndex((x) => x.slug === v.slug))
  const enBrefComplet = [
    `Allo Nuisible IDF traite les punaises de lit ${v.a} (${v.departement}, ${v.code}) et dans les communes proches : ${v.proches.join(', ')}.`,
    'Méthodes sans produit : cryogénie (neige carbonique à environ −78 °C) et vapeur sèche, qui tuent punaises et œufs au contact.',
    'Protocole mixte : cryogénie et vapeur, plus une barrière insecticide très légère et rémanente, renouvelée au deuxième passage.',
    'Infestation importante : traitement insecticide professionnel par un technicien certifié Certibiocide.',
    'Intervention possible le jour même, 7j/7. Devis gratuit, deuxième passage et garantie 1 an.',
  ]
  const generales = enBrefComplet.slice(1)
  const db = rang % generales.length
  const enBref = [enBrefComplet[0], ...[...generales.slice(db), ...generales.slice(0, db)].slice(0, 3)]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Traitement des punaises de lit ${v.a}`,
        serviceType: 'Traitement des punaises de lit',
        url,
        description: v.description,
        areaServed: { '@type': 'City', name: v.nom, containedInPlace: { '@type': 'AdministrativeArea', name: v.departement } },
        provider: { '@type': 'LocalBusiness', name: 'Allo Nuisible IDF', url: SITE_URL, telephone: '+33768077219' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: v.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Punaises de lit', item: `${SITE_URL}/services/punaises-de-lit` },
          { '@type': 'ListItem', position: 3, name: v.nom, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className="relative pt-10 md:pt-14 pb-14 px-4 overflow-hidden" style={{ background: '#080808' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(232,68,26,0.16) 0%, transparent 65%)',
          }} />
          <div className="relative max-w-4xl mx-auto">
            <nav className="text-xs text-white/40 mb-5 text-center" aria-label="Fil d'Ariane">
              <a href="/" className="hover:text-white/70">Accueil</a>{' / '}
              <a href="/services/punaises-de-lit" className="hover:text-white/70">Punaises de lit</a>{' / '}
              <span className="text-white/60">{v.nom}</span>
            </nav>
            <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight text-center">
              Punaises de lit{' '}
              <span style={{ color: ACCENT }}>
                {v.a.split(' ')[0]} <span className={v.nom.length <= 16 ? 'whitespace-nowrap' : undefined}>{v.a.split(' ').slice(1).join(' ')}</span>
              </span>
            </h1>

            {/* En bref */}
            <div className="rounded-2xl p-6 md:p-7 mb-8" style={{ background: 'rgba(232,68,26,0.07)', border: '1px solid rgba(232,68,26,0.25)' }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>En bref</p>
              <ul className="space-y-2">
                {enBref.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-white/85 text-sm md:text-base leading-relaxed">
                    <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: ACCENT }} />{t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={PHONE_HREF}
                className="inline-flex items-center gap-2.5 font-black text-white px-7 py-4 rounded-2xl text-sm transition-all hover:brightness-110"
                style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <a href="/tarifs"
                className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-2xl text-sm transition-all hover:brightness-125"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}>
                Devis gratuit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── CONTEXTE LOCAL ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6">Punaises de lit {v.a}</h2>
            {v.contexte.map((p) => (
              <p key={p.slice(0, 24)} className="text-white/70 leading-relaxed mb-4">{p}</p>
            ))}
            <h3 className="text-lg font-black text-white mt-8 mb-4">Où elles se cachent</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {CACHETTES.map((l) => (
                <li key={l} className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-white/80 text-sm" style={card}>
                  <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />{l}
                </li>
              ))}
            </ul>
            <p className="text-white/50 text-sm mt-4">
              Signes fréquents : piqûres groupées au réveil, petites taches noires ou de sang sur les draps, insectes bruns dans les coutures.
            </p>
          </div>
        </section>

        {/* ── TOUTES LES MÉTHODES ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Nos méthodes de traitement {v.a}</h2>
            <p className="text-white/55 mb-8 max-w-2xl">
              Avec ou sans produit : le technicien vous propose la méthode adaptée à votre logement et à l&apos;infestation, et vous explique son choix avant d&apos;intervenir.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {METHODES_PUNAISES.map((m) => (
                <a key={m.titre} href={`/blog/${m.guide}`} className="group rounded-2xl p-6 transition-colors hover:bg-white/[0.06]" style={card}>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest rounded-full px-2.5 py-1 mb-3"
                    style={{ color: ACCENT, background: 'rgba(232,68,26,0.12)' }}>{m.tag}</span>
                  <h3 className="text-xl font-black text-white mb-2">{m.titre}</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-3">{premierePhrase(m.texte)}</p>
                  <span className="text-sm font-bold inline-flex items-center gap-1.5" style={{ color: ACCENT }}>
                    En savoir plus <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              ))}
            </div>

            <div className="rounded-2xl p-6 mt-6" style={card}>
              <h3 className="text-lg font-black text-white mb-3">Ce que vous pouvez faire en attendant</h3>
              <p className="text-white/60 text-sm mb-3">Recommandé par le site du gouvernement stop-punaises.gouv.fr, pour le linge et les effets personnels :</p>
              <ul className="space-y-2">
                {[
                  'Lavage en machine à 60 °C pendant 1 heure.',
                  'Ou sèche-linge à la plus haute température pendant au moins 30 minutes.',
                  'Ou congélateur, dans un sac fermé, pendant 72 heures.',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/75">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── GUIDES DU BLOG ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">Nos guides sur les punaises de lit</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {v.guides.map((g) => (
                <a key={g} href={`/blog/${g}`} className="group rounded-xl p-5 transition-colors hover:bg-white/[0.06]" style={card}>
                  <BookOpen className="w-5 h-5 mb-3" style={{ color: ACCENT }} />
                  <p className="text-white font-bold text-sm leading-snug mb-2">{GUIDES_PUNAISES[g]}</p>
                  <span className="text-xs font-bold inline-flex items-center gap-1" style={{ color: ACCENT }}>
                    Lire le guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
            <p className="text-white/60 text-sm mt-6">
              Voir aussi notre <a href="/services/punaises-de-lit" className="underline" style={{ color: ACCENT }}>traitement des punaises de lit en Île-de-France</a>.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Questions fréquentes</h2>
            <div className="space-y-3">
              {v.faq.map((f) => (
                <details key={f.q} className="group rounded-xl px-5 py-4" style={card}>
                  <summary className="cursor-pointer font-bold text-white list-none flex justify-between gap-4">
                    {f.q}<span className="text-white/40 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-white/65 text-sm leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── E-E-A-T : auteur, certification, sources ── */}
        <section className="py-12 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto rounded-2xl p-6 md:p-7" style={card}>
            <div className="flex items-start gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
              <div>
                <p className="text-white font-bold">Rédigé par l&apos;équipe technique d&apos;Allo Nuisible IDF</p>
                <p className="text-white/55 text-sm">
                  Techniciens titulaires du Certibiocide, la certification obligatoire pour utiliser des insecticides professionnels.
                  Mis à jour le {maj}.
                </p>
              </div>
            </div>
            <p className="text-white/45 text-xs uppercase tracking-widest mb-2">Sources</p>
            <ul className="space-y-1">
              {SOURCES_PUNAISES.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-white/60 text-sm underline hover:text-white">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── APPEL FINAL + MAILLAGE ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#080808' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-6">Des punaises de lit {v.a} ?</h2>
            <a href={PHONE_HREF}
              className="inline-flex items-center gap-2.5 font-black text-white px-8 py-4 rounded-2xl transition-all hover:brightness-110"
              style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
              <Phone className="w-5 h-5" /> {PHONE}
            </a>
            <p className="text-white/45 text-sm mt-8">
              Nous intervenons aussi à {v.proches.join(', ')}.{' '}
              <a href={v.zoneHref} className="underline hover:text-white">Tous nos services {v.a}</a>
            </p>
            <div className="mt-10">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Punaises de lit dans d&apos;autres villes</p>
              <div className="flex flex-wrap justify-center gap-2">
                {autres.map((x) => (
                  <a key={x.slug} href={`/punaises-de-lit/${x.slug}`}
                    className="text-sm text-white/70 hover:text-white rounded-full px-3.5 py-1.5 transition-colors"
                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                    {x.nom}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
