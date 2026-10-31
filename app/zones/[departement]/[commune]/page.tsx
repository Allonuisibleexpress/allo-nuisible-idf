import { notFound } from 'next/navigation'
import { Phone, ArrowRight, MapPin, Check } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { PestIcon, type PestKey } from '@/components/PestIcons'
import { pageMetadata } from '@/lib/seo'
import { SERVICES } from '@/lib/departements'
import { COMMUNES_94, METHODES, SECTEURS, getCommune94 } from '@/lib/communes94'
import { getVilleDeratisation } from '@/lib/villes-deratisation'
import { getVillePunaises } from '@/lib/villes-punaises'
import { getVilleCafards } from '@/lib/villes-cafards'
import { getVilleSouris } from '@/lib/villes-souris'
import { getVilleChenilles } from '@/lib/villes-chenilles'
import { getVilleAcariens } from '@/lib/villes-acariens'

const ACCENT = '#E8441A'
const PHONE = '07 68 07 72 19'
const PHONE_HREF = 'tel:+33768077219'
const DEPT_SLUG = 'val-de-marne'

type Params = { departement: string; commune: string }

export const dynamicParams = false

export function generateStaticParams() {
  return COMMUNES_94.map((c) => ({ departement: DEPT_SLUG, commune: c.slug }))
}

export function generateMetadata({ params }: { params: Params }) {
  const c = params.departement === DEPT_SLUG ? getCommune94(params.commune) : undefined
  if (!c) return {}
  return pageMetadata({ title: c.title, description: c.description, path: `/zones/${DEPT_SLUG}/${c.slug}` })
}

export default function CommunePage({ params }: { params: Params }) {
  const c = params.departement === DEPT_SLUG ? getCommune94(params.commune) : undefined
  if (!c) notFound()

  const secteur = SECTEURS[c.secteur]
  // 6 communes du même secteur au plus, en rotation, pour ne pas répéter la même liste sur chaque page
  const memeSecteur = COMMUNES_94.filter((x) => x.secteur === c.secteur && x.slug !== c.slug)
  const decalage = Math.max(0, COMMUNES_94.findIndex((x) => x.slug === c.slug)) % Math.max(1, memeSecteur.length)
  const voisines = [...memeSecteur.slice(decalage), ...memeSecteur.slice(0, decalage)].slice(0, 6)
  const autres = Object.keys(METHODES).filter((k) => !secteur.ordre.includes(k))
  const villeDerat = getVilleDeratisation(c.slug)
  const villePunaises = getVillePunaises(c.slug)
  const villeCafards = getVilleCafards(c.slug)
  const villeSouris = getVilleSouris(c.slug)
  const villeChenilles = getVilleChenilles(c.slug)
  const villeAcariens = getVilleAcariens(c.slug)
  // Paragraphe propre à la commune, repris de sa page service la plus détaillée
  const local = (villeDerat ?? villeChenilles ?? villePunaises)?.contexte[0]

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
            <nav className="text-xs text-white/40 mb-5" aria-label="Fil d'Ariane">
              <a href="/zones" className="hover:text-white/70">Zones</a>{' / '}
              <a href={`/zones/${DEPT_SLUG}`} className="hover:text-white/70">Val-de-Marne (94)</a>{' / '}
              <span className="text-white/60">{c.nom}</span>
            </nav>
            <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              Nuisibles {c.a.split(' ')[0]}{' '}
              <span style={{ color: ACCENT }} className={c.nom.length <= 18 ? 'whitespace-nowrap' : undefined}>{c.a.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mx-auto mb-4 leading-relaxed">
              Traitements professionnels chimiques ou sans produit (cryogénie, vapeur sèche, pièges connectés), selon votre situation.
            </p>
            {secteur.intro(c.nom).map((p) => (
              <p key={p.slice(0, 24)} className="text-base text-white/55 max-w-2xl mx-auto mb-3 leading-relaxed">{p}</p>
            ))}
            {local && <p className="text-base text-white/55 max-w-2xl mx-auto mb-3 leading-relaxed">{local}</p>}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 mb-4">
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
            <p className="text-white/40 text-xs tracking-wide">
              Intervention possible le jour même {c.a} · Certibiocide · Garantie 1 an
            </p>
          </div>
        </section>

        {/* ── MÉTHODES PRIORITAIRES DU SECTEUR ── */}
        <section className="py-16 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">
              Nos méthodes {c.a}
            </h2>
            <p className="text-white/55 mb-10 max-w-2xl">
              Pour chaque nuisible, nous proposons deux familles de solutions : un traitement chimique professionnel
              et une méthode sans produit. Le technicien vous conseille l&apos;une, l&apos;autre ou les deux selon le
              logement et l&apos;infestation, et vous explique son choix avant d&apos;intervenir.
            </p>
            <div className="space-y-4">
              {secteur.ordre.map((k) => {
                const m = METHODES[k]
                return (
                  <article key={k} className="rounded-2xl p-6 md:p-7"
                    style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(232,68,26,0.12)', color: ACCENT }}>
                        <PestIcon name={SERVICES[m.service].icon as PestKey} size={26} />
                      </span>
                      <h3 className="text-lg md:text-xl font-black text-white">{m.titre}</h3>
                    </div>
                    <p className="text-white/65 text-sm md:text-base leading-relaxed mb-4">{m.texte}</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                      {m.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-white/75">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />{pt}
                        </li>
                      ))}
                    </ul>
                    <a href={`/services/${m.service}`} className="text-sm font-bold inline-flex items-center gap-1.5" style={{ color: ACCENT }}>
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </a>
                  </article>
                )
              })}
            </div>
            <p className="text-white/45 text-sm mt-8">
              Nous intervenons aussi {c.a} pour :{' '}
              {autres.map((k, i) => (
                <span key={k}>
                  <a href={`/services/${METHODES[k].service}`} className="underline hover:text-white">{SERVICES[METHODES[k].service].nom.toLowerCase()}</a>
                  {i < autres.length - 1 ? ', ' : '.'}
                </span>
              ))}
            </p>
            {villeDerat && (
              <a href={`/deratisation/${villeDerat.slug}`} className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold" style={{ color: ACCENT }}>
                Tout savoir sur la dératisation {villeDerat.a} <ArrowRight className="w-4 h-4" />
              </a>
            )}
            {villePunaises && (
              <a href={`/punaises-de-lit/${villePunaises.slug}`} className="flex items-center gap-1.5 mt-3 text-sm font-bold" style={{ color: ACCENT }}>
                Tout savoir sur les punaises de lit {villePunaises.a} <ArrowRight className="w-4 h-4" />
              </a>
            )}
            {villeCafards && (
              <a href={`/cafards/${villeCafards.slug}`} className="flex items-center gap-1.5 mt-3 text-sm font-bold" style={{ color: ACCENT }}>
                Tout savoir sur les cafards {villeCafards.a} <ArrowRight className="w-4 h-4" />
              </a>
            )}
            {villeSouris && (
              <a href={`/souris/${villeSouris.slug}`} className="flex items-center gap-1.5 mt-3 text-sm font-bold" style={{ color: ACCENT }}>
                Tout savoir sur les souris {villeSouris.a} <ArrowRight className="w-4 h-4" />
              </a>
            )}
            {villeChenilles && (
              <a href={`/chenilles-processionnaires/${villeChenilles.slug}`} className="flex items-center gap-1.5 mt-3 text-sm font-bold" style={{ color: ACCENT }}>
                Tout savoir sur les chenilles processionnaires {villeChenilles.a} <ArrowRight className="w-4 h-4" />
              </a>
            )}
            {villeAcariens && (
              <a href={`/acariens/${villeAcariens.slug}`} className="flex items-center gap-1.5 mt-3 text-sm font-bold" style={{ color: ACCENT }}>
                Traitement anti-acariens {villeAcariens.a} <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </section>

        {/* ── DÉROULÉ ── */}
        <section className="py-16 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Comment ça se passe</h2>
            <ol className="space-y-5">
              {[
                ['Vous nous appelez', `Décrivez la situation au ${PHONE}. On identifie le nuisible avec vous.`],
                ['Devis gratuit', 'Vous connaissez la méthode proposée et le prix avant toute intervention.'],
                ['Intervention', `Un technicien certifié Certibiocide peut intervenir le jour même ${c.a}.`],
                ['Garantie 1 an', 'Si les nuisibles reviennent dans l\'année, on revient.'],
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

        {/* ── COMMUNES DU MÊME SECTEUR ── */}
        <section className="py-16 md:py-20 px-4" style={{ background: '#080808' }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Un nuisible chez vous {c.a} ?</h2>
            <a href={PHONE_HREF}
              className="inline-flex items-center gap-2.5 font-black text-white px-8 py-4 rounded-2xl transition-all hover:brightness-110"
              style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
              <Phone className="w-5 h-5" /> {PHONE}
            </a>
            <div className="mt-14">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
                Nous intervenons aussi dans le secteur {secteur.nom}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {voisines.map((v) => (
                  <a key={v.slug} href={`/zones/${DEPT_SLUG}/${v.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white rounded-full px-3.5 py-1.5 transition-colors"
                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                    <MapPin className="w-3.5 h-3.5" style={{ color: ACCENT }} />{v.nom}
                  </a>
                ))}
              </div>
              <a href={`/zones/${DEPT_SLUG}`} className="inline-block mt-6 text-sm font-bold" style={{ color: ACCENT }}>
                Toutes les communes du Val-de-Marne
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
