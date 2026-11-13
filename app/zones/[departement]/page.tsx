import FaqBloc from '@/components/FaqBloc'
import { SAISONS_FAQ } from '@/lib/saisons-faq'
import { notFound } from 'next/navigation'
import { Phone, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PestIcon, type PestKey } from '@/components/PestIcons'
import { pageMetadata } from '@/lib/seo'
import { DEPARTEMENTS_IDF, SERVICES, getDepartement, type ServiceSlug } from '@/lib/departements'
import { COMMUNES_94 } from '@/lib/communes94'
import { DEPARTEMENTS_APPROFONDI } from '@/lib/departements-approfondi'
import { SERVICES_DEP, DEPS, estDep, type ServiceDep } from '@/lib/departements-services'
import { villesDuDepartement } from '@/lib/services-ville'

const ACCENT = '#E8441A'
const PHONE = '07 68 07 72 19'
const PHONE_HREF = 'tel:+33768077219'

export const dynamicParams = false

export function generateStaticParams() {
  return DEPARTEMENTS_IDF.map((d) => ({ departement: d.slug }))
}

export function generateMetadata({ params }: { params: { departement: string } }) {
  const d = getDepartement(params.departement)
  if (!d) return {}
  return pageMetadata({ title: d.title, description: d.description, path: `/zones/${d.slug}` })
}

export default function DepartementPage({ params }: { params: { departement: string } }) {
  const d = getDepartement(params.departement)
  if (!d) notFound()

  const autres = DEPARTEMENTS_IDF.filter((x) => x.slug !== d.slug)
  const approfondi = DEPARTEMENTS_APPROFONDI[d.slug] ?? []
  const pagesDep = estDep(d.slug) ? (Object.keys(SERVICES_DEP) as ServiceDep[]).map((s) => ({ href: `${SERVICES_DEP[s].base}/${d.slug}`, label: `${SERVICES_DEP[s].label} ${DEPS[d.slug as keyof typeof DEPS].dans}` })) : []
  const villesPages = d.slug === 'val-de-marne' ? [] : villesDuDepartement(d.code)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://allonuisibleidf.fr' },{ '@type': 'ListItem', position: 2, name: 'Zones d’intervention', item: 'https://allonuisibleidf.fr/zones' },{ '@type': 'ListItem', position: 3, name: d.nom, item: `https://allonuisibleidf.fr/zones/${d.slug}` }] }) }} />
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className="relative pt-10 md:pt-14 pb-16 px-4 overflow-hidden" style={{ background: '#080808' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(232,68,26,0.16) 0%, transparent 65%)',
          }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: ACCENT }}>
              Département {d.code} · Certibiocide · 7j/7
            </p>
            <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              Lutte <span className="whitespace-nowrap">anti-nuisibles</span><br />
              <span style={{ color: ACCENT }}>
                {d.dans.slice(0, -d.nom.length)}<span className="whitespace-nowrap">{d.nom}</span>{' '}
                <span className="whitespace-nowrap">({d.code})</span>
              </span>
            </h1>
            {d.intro.map((p) => (
              <p key={p.slice(0, 20)} className="text-lg text-white/65 max-w-2xl mx-auto mb-4 leading-relaxed">{p}</p>
            ))}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 mb-4">
              <a href={PHONE_HREF}
                className="inline-flex items-center gap-2.5 font-black text-white px-7 py-4 rounded-2xl text-sm transition-all hover:brightness-110"
                style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
              <a href="/tarifs"
                className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-2xl text-sm transition-all hover:brightness-125"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}>
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-white/60 text-xs tracking-wide">
              Intervention possible le jour même {d.dans} · Devis gratuit · Garantie jusqu’à 1 an
            </p>
          </div>
        </section>

        {/* ── SITUATIONS FRÉQUENTES ── */}
        <section className="py-16 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">
              Les situations que l&apos;on rencontre {d.dans}
            </h2>
            <p className="text-white/55 mb-10 max-w-2xl">
              Chaque logement est différent. Voici les demandes qui reviennent souvent, et comment nous les traitons.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {d.situations.map((s) => (
                <a key={s.titre} href={`/services/${s.service === 'rongeurs' ? 'deratisation' : s.service}`}
                  className="group rounded-2xl p-6 transition-colors hover:bg-white/[0.06]"
                  style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'rgba(232,68,26,0.12)', color: ACCENT }}>
                      <PestIcon name={SERVICES[s.service].icon as PestKey} size={26} />
                    </span>
                    <h3 className="text-lg font-black text-white">{s.titre}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-3">{s.texte}</p>
                  <span className="text-sm font-bold inline-flex items-center gap-1.5" style={{ color: ACCENT }}>
                    {SERVICES[s.service].nom} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMENT ÇA SE PASSE ── */}
        <section className="py-16 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Comment ça se passe {d.dans}</h2>
            <ol className="space-y-5">
              {[
                ['Vous nous appelez', `Expliquez-nous la situation au ${PHONE}. On vous pose quelques questions pour identifier le nuisible.`],
                ['Devis gratuit', 'Vous connaissez le prix avant toute intervention, sans engagement.'],
                ['Intervention', `Un technicien certifié Certibiocide peut intervenir le jour même ${d.dans}.`],
                ['Garantie jusqu’à 1 an', 'Si les nuisibles reviennent dans l\'année, on revient (3 mois pour un nid de guêpes ou de frelons).'],
              ].map(([t, txt], i) => (
                <li key={t} className="flex gap-4">
                  <span className="w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center font-black text-white" style={{ background: ACCENT }}>{i + 1}</span>
                  <div>
                    <p className="font-bold text-white">{t}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{txt}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── TOUS LES SERVICES ── */}
        <section className="py-16 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Tous nos services {d.dans}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {(Object.keys(SERVICES) as ServiceSlug[]).filter((x) => x !== 'rongeurs').map((slug) => (
                <a key={slug} href={`/services/${slug}`}
                  className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-white/85 text-sm font-semibold transition-colors hover:bg-white/[0.07]"
                  style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ color: ACCENT }}><PestIcon name={SERVICES[slug].icon as PestKey} size={22} /></span>
                  {SERVICES[slug].nom}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTENU DÉTAILLÉ (11/11/2026) ── */}
        {approfondi.map((sec, i) => (
          <section key={sec.titre} className="py-14 md:py-20 px-4" style={{ background: i % 2 ? '#0d0d0d' : '#0a0a0a' }}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-6">{sec.titre}</h2>
              {sec.paras.map((p) => (
                <p key={p.slice(0, 30)} className="text-white/70 leading-relaxed mb-4">
                  {p.split(/(\*\*[^*]+\*\*)/g).map((m, k) => (m.startsWith('**') ? <strong key={k} className="text-white">{m.slice(2, -2)}</strong> : m))}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* ── PAGES NUISIBLE + DÉPARTEMENT ── */}
        {pagesDep.length > 0 && (
          <section className="py-14 md:py-16 px-4" style={{ background: '#0d0d0d' }}>
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Nos pages par nuisible {d.dans}</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {pagesDep.map((x) => (
                  <a key={x.href} href={x.href} className="flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-white/85 text-sm font-semibold transition-colors hover:bg-white/[0.07]"
                    style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    {x.label} <ArrowRight className="w-4 h-4" style={{ color: ACCENT }} />
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── VILLES AVEC DES PAGES DÉDIÉES ── */}
        {villesPages.length > 0 && (
          <section className="py-14 md:py-20 px-4" style={{ background: '#0a0a0a' }}>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3 text-center">{d.slug === 'paris' ? 'Nos pages par arrondissement' : `Nos pages par ville ${d.dans}`}</h2>
              <p className="text-white/55 mb-8 text-center">{villesPages.length} {d.slug === 'paris' ? 'arrondissements' : 'villes'} avec des pages dédiées, nuisible par nuisible.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {villesPages.map((v) => (
                  <div key={v.slug} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <p className="text-white font-black mb-2 flex items-center gap-1.5"><MapPin className="w-4 h-4" style={{ color: ACCENT }} />{v.nom}</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {v.pages.map((x) => (
                        <li key={x.href}><a href={x.href} className="inline-block text-xs text-white/70 hover:text-white rounded-full px-2.5 py-1" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>{x.label}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── COMMUNES ── */}
        <section className="py-16 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Communes où nous intervenons {d.dans}
            </h2>
            {d.slug === 'val-de-marne' ? (
              <>
                <p className="text-white/55 mb-8">Les 47 communes du département, chacune avec sa page.</p>
                <ul className="flex flex-wrap gap-2">
                  {COMMUNES_94.map((c) => (
                    <li key={c.slug}>
                      <a href={`/zones/val-de-marne/${c.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm text-white/75 hover:text-white rounded-full px-3.5 py-1.5 transition-colors"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <MapPin className="w-3.5 h-3.5" style={{ color: ACCENT }} />{c.nom}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <p className="text-white/55 mb-8">Et dans toutes les autres communes du département.</p>
                <ul className="flex flex-wrap gap-2">
                  {d.communes.map((c) => (
                    <li key={c} className="inline-flex items-center gap-1.5 text-sm text-white/75 rounded-full px-3.5 py-1.5"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <MapPin className="w-3.5 h-3.5" style={{ color: ACCENT }} />{c}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>

        {/* ── APPEL FINAL + AUTRES DÉPARTEMENTS ── */}
        <section className="py-16 md:py-20 px-4" style={{ background: '#080808' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4">Un nuisible chez vous {d.dans} ?</h2>
            <p className="text-white/60 mb-8 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" style={{ color: ACCENT }} /> Devis gratuit, intervention 7j/7
            </p>
            <a href={PHONE_HREF}
              className="inline-flex items-center gap-2.5 font-black text-white px-8 py-4 rounded-2xl transition-all hover:brightness-110"
              style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
              <Phone className="w-5 h-5" /> {PHONE}
            </a>
            <div className="mt-14">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-4">Nous intervenons aussi</p>
              <div className="flex flex-wrap justify-center gap-2">
                {autres.map((x) => (
                  <a key={x.slug} href={`/zones/${x.slug}`}
                    className="text-sm text-white/70 hover:text-white rounded-full px-3.5 py-1.5 transition-colors"
                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                    {x.nom} ({x.code})
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <FaqBloc titre={`Vos questions sur nos interventions ${d.dans}`} items={[
          { q: `Intervenez-vous ${d.dans} ?`, a: `Oui. Depuis notre base de Saint-Maurice (94), nos techniciens interviennent ${d.dans}, 7j/7, ${['paris', 'val-de-marne', 'hauts-de-seine', 'seine-saint-denis'].includes(d.slug) ? 'souvent le jour même' : 'dans les meilleurs délais'}.` },
          { q: `Quels nuisibles traitez-vous ${d.dans} ?`, a: 'Rats et souris, punaises de lit, cafards, fourmis, guêpes et frelons, pigeons, chenilles processionnaires, acariens, ainsi que la désinfection des logements et des locaux.' },
          { q: `Combien coûte une intervention ${d.dans} ?`, a: 'À partir de 89 € TTC pour un nid de guêpes ou de frelons, 120 € pour une dératisation, des cafards ou des fourmis, 290 € pour les punaises de lit (2 passages inclus). Le devis est gratuit.' },
          { q: 'Le devis est-il gratuit et sans engagement ?', a: 'Oui. Vous connaissez le prix avant l’intervention, par téléphone ou après une photo envoyée sur WhatsApp.' },
          { q: 'Vos techniciens sont-ils certifiés ?', a: 'Oui, ils sont titulaires du Certibiocide, la certification obligatoire pour utiliser des produits biocides professionnels.' },
          { q: `Des rats sur la voie publique ${d.dans} : qui contacter ?`, a: 'Sur l’espace public, c’est la mairie qui est compétente. Chez vous, dans votre jardin ou votre immeuble, nous intervenons sur devis.' },
          SAISONS_FAQ.deratisation[d.slug.length % 3],
        ]} />
      </main>
      <Footer />
    </>
  )
}
