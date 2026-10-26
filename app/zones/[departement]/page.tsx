import { notFound } from 'next/navigation'
import { Phone, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PestIcon, type PestKey } from '@/components/PestIcons'
import { pageMetadata } from '@/lib/seo'
import { DEPARTEMENTS_IDF, SERVICES, getDepartement, type ServiceSlug } from '@/lib/departements'

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

  return (
    <>
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
            <p className="text-white/40 text-xs tracking-wide">
              Intervention possible le jour même {d.dans} · Devis gratuit · Garantie 1 mois
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
                <a key={s.titre} href={`/services/${s.service}`}
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
                ['Garantie 1 mois', 'Si les nuisibles reviennent dans le mois, on revient.'],
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
              {(Object.keys(SERVICES) as ServiceSlug[]).map((slug) => (
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

        {/* ── COMMUNES ── */}
        <section className="py-16 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Communes où nous intervenons {d.dans}
            </h2>
            <p className="text-white/55 mb-8">Et dans toutes les autres communes du département.</p>
            <ul className="flex flex-wrap gap-2">
              {d.communes.map((c) => (
                <li key={c} className="inline-flex items-center gap-1.5 text-sm text-white/75 rounded-full px-3.5 py-1.5"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <MapPin className="w-3.5 h-3.5" style={{ color: ACCENT }} />{c}
                </li>
              ))}
            </ul>
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
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Nous intervenons aussi</p>
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
      </main>
      <Footer />
    </>
  )
}
