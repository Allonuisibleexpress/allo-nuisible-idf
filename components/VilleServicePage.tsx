import { Phone, ArrowRight, MapPin, Check, BookOpen, ShieldCheck } from 'lucide-react'
import { villesVoisines, premierePhrase } from '@/lib/maillage'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/seo'

// Page « [service] à [ville] » commune aux cocons locaux (cafards, souris…).
// Même structure que /punaises-de-lit/[ville] : En bref (GEO), contexte, méthodes, guides, FAQ, E-E-A-T, maillage.

const ACCENT = '#E8441A'
const PHONE = '07 68 07 72 19'
const PHONE_HREF = 'tel:+33768077219'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

export type Ville = {
  slug: string
  nom: string
  a: string
  code: string
  departement: string
  zoneHref: string
  description: string
  contexte: string[]
  proches: string[]
  faq: { q: string; a: string }[]
}

export type VilleServiceConfig = {
  basePath: string // '/cafards'
  titre: string // « Cafards » (début du H1)
  serviceType: string
  pilier: { href: string; label: string; lien: string } // fil d'Ariane et lien vers la page service
  enBref: string[]
  cachettes: { titre: string; items: string[]; signes: string }
  methodes: { titre: string; tag: string; texte: string; href?: string }[]
  encadre: { titre: string; intro?: string; items: string[] }
  // Méthode de remplacement, présentée après les méthodes principales (ex. Ekomille pour les souris)
  alternative?: { surtitre: string; titre: string; texte: string; href: string; lien: string }
  guides: { href: string; label: string }[]
  sources: { label: string; url: string }[]
  maj: string
  certification: string
  autresTitre: string
  // Contenu éditorial détaillé (texte, tableaux, listes) affiché après le contexte local
  sections?: { titre: string; paras: string[]; table?: { head: string[]; rows: string[][] }; liste?: string[] }[]
  protocole?: { titre: string; etapes: { titre: string; texte: string }[] }
  publics?: { titre: string; cartes: { titre: string; texte: string }[] }
}

// Texte riche : **gras** et [ancre](/lien)
function inline(text: string) {
  const out: React.ReactNode[] = []
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index))
    if (m[1]) out.push(<strong key={i++} className="text-white font-bold">{m[1]}</strong>)
    else out.push(<a key={i++} href={m[3]} className="underline" style={{ color: ACCENT }}>{m[2]}</a>)
    last = re.lastIndex
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

export default function VilleServicePage({ v, villes, c }: { v: Ville; villes: Ville[]; c: VilleServiceConfig }) {
  const url = `${SITE_URL}${c.basePath}/${v.slug}`
  const autres = villesVoisines(villes, v)
  // Une seule section détaillée par ville, différente d'une ville à l'autre (le guide complet est sur la page service) :
  // évite que toutes les pages villes répètent le même texte.
  const rang = Math.max(0, villes.findIndex((x) => x.slug === v.slug))
  const sections = c.sections ? [c.sections[rang % c.sections.length]] : undefined
  // Encadré de conseils et cartes « publics » en alternance d'une ville à l'autre
  const avecEncadre = rang % 2 === 0
  // FAQ : la question propre à la ville, puis 2 questions générales en rotation
  const generales = v.faq.slice(1)
  const d = rang % Math.max(1, generales.length)
  const faq = [v.faq[0], ...[...generales.slice(d), ...generales.slice(0, d)].slice(0, 2)]
  const db = rang % Math.max(1, c.enBref.length)
  const enBref = [`Intervention ${v.a} (${v.departement}, ${v.code}) et dans les communes voisines : ${v.proches.slice(0, 4).join(', ')}.`, ...[...c.enBref.slice(db), ...c.enBref.slice(0, db)].slice(0, 3)]
  const maj = new Date(c.maj).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${c.serviceType} ${v.a}`,
        serviceType: c.serviceType,
        url,
        description: v.description,
        areaServed: { '@type': 'City', name: v.nom, containedInPlace: { '@type': 'AdministrativeArea', name: v.departement } },
        provider: { '@type': 'LocalBusiness', name: 'Allo Nuisible IDF', url: SITE_URL, telephone: '+33768077219' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: c.pilier.label, item: `${SITE_URL}${c.pilier.href}` },
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
              <a href={c.pilier.href} className="hover:text-white/70">{c.pilier.label}</a>{' / '}
              <span className="text-white/60">{v.nom}</span>
            </nav>
            <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight text-center">
              {c.titre}{' '}
              <span style={{ color: ACCENT }}>
                {v.a.split(' ')[0]} <span className={v.nom.length <= 16 ? 'whitespace-nowrap' : undefined}>{v.a.split(' ').slice(1).join(' ')}</span>
              </span>
            </h1>

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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6">{c.titre} {v.a}</h2>
            {v.contexte.map((p) => (
              <p key={p.slice(0, 24)} className="text-white/70 leading-relaxed mb-4">{p}</p>
            ))}
            <h3 className="text-lg font-black text-white mt-8 mb-4">{c.cachettes.titre}</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {c.cachettes.items.map((l) => (
                <li key={l} className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-white/80 text-sm" style={card}>
                  <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />{l}
                </li>
              ))}
            </ul>
            <p className="text-white/50 text-sm mt-4">{c.cachettes.signes}</p>
          </div>
        </section>

        {/* ── CONTENU DÉTAILLÉ ── */}
        {sections && (
          <section className="py-14 md:py-20 px-4" style={{ background: '#0a0a0a' }}>
            <div className="max-w-4xl mx-auto space-y-12">
              {sections.map((s) => (
                <div key={s.titre}>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-5">{s.titre}</h2>
                  {s.paras.map((p) => (
                    <p key={p.slice(0, 30)} className="text-white/70 leading-relaxed mb-4">{inline(p)}</p>
                  ))}
                  {s.table && (
                    <div className="overflow-x-auto rounded-2xl mt-2" style={card}>
                      <table className="w-full text-sm">
                        <thead>
                          <tr>{s.table.head.map((h) => <th key={h} className="text-left font-bold px-4 py-3" style={{ color: ACCENT }}>{h}</th>)}</tr>
                        </thead>
                        <tbody>
                          {s.table.rows.map((r) => (
                            <tr key={r[0]} className="border-t border-white/10">
                              {r.map((cell, j) => <td key={j} className={`px-4 py-3 align-top ${j === 0 ? 'text-white font-bold' : 'text-white/70'}`}>{inline(cell)}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {s.liste && (
                    <ul className="space-y-2 mt-2">
                      {s.liste.map((t) => (
                        <li key={t.slice(0, 30)} className="flex items-start gap-2.5 text-white/75 leading-relaxed">
                          <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: ACCENT }} /><span>{inline(t)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <p className="text-white/55 text-sm">
                Espèces, causes, risques et erreurs à éviter : tout est détaillé sur{' '}
                <a href={c.pilier.href} className="underline" style={{ color: ACCENT }}>{c.pilier.lien}</a>.
              </p>
            </div>
          </section>
        )}

        {/* ── MÉTHODES ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Nos méthodes de traitement {v.a}</h2>
            <p className="text-white/55 mb-8 max-w-2xl">
              Avec ou sans produit : le technicien vous propose la méthode adaptée à votre logement et à l&apos;infestation, et vous explique son choix avant d&apos;intervenir.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {c.methodes.map((m) => {
                const contenu = (
                  <>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-widest rounded-full px-2.5 py-1 mb-3"
                      style={{ color: ACCENT, background: 'rgba(232,68,26,0.12)' }}>{m.tag}</span>
                    <h3 className="text-xl font-black text-white mb-2">{m.titre}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{premierePhrase(m.texte)}</p>
                  </>
                )
                return m.href ? (
                  <a key={m.titre} href={m.href} className="rounded-2xl p-6 transition-colors hover:bg-white/[0.06]" style={card}>{contenu}</a>
                ) : (
                  <div key={m.titre} className="rounded-2xl p-6" style={card}>{contenu}</div>
                )
              })}
            </div>
            {avecEncadre && (
            <div className="rounded-2xl p-6 mt-6" style={card}>
              <h3 className="text-lg font-black text-white mb-3">{c.encadre.titre}</h3>
              {c.encadre.intro && <p className="text-white/60 text-sm mb-3">{c.encadre.intro}</p>}
              <ul className="space-y-2">
                {c.encadre.items.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/75">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />{t}
                  </li>
                ))}
              </ul>
            </div>
            )}
            {c.alternative && (
              <div className="rounded-2xl p-6 mt-6" style={{ background: 'rgba(232,68,26,0.08)', border: '1px solid rgba(232,68,26,0.35)' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>{c.alternative.surtitre}</p>
                <p className="text-lg font-black text-white mb-2">{c.alternative.titre}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-3">{c.alternative.texte}</p>
                <a href={c.alternative.href} className="text-sm font-bold underline" style={{ color: ACCENT }}>{c.alternative.lien}</a>
              </div>
            )}
          </div>
        </section>

        {/* ── DÉROULÉ DE L'INTERVENTION + PUBLICS ── */}
        {(c.protocole || c.publics) && (
          <section className="py-14 md:py-20 px-4" style={{ background: '#080808' }}>
            <div className="max-w-4xl mx-auto space-y-14">
              {c.protocole && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-8">{c.protocole.titre} {v.a}</h2>
                  <ol className="space-y-5">
                    {c.protocole.etapes.map((e, i) => (
                      <li key={e.titre} className="flex gap-4">
                        <span className="w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center font-black text-white" style={{ background: ACCENT }}>{i + 1}</span>
                        <div>
                          <p className="font-bold text-white">{e.titre}</p>
                          <p className="text-white/60 text-sm leading-relaxed">{inline(e.texte)}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {c.publics && !avecEncadre && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-6">{c.publics.titre}</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {c.publics.cartes.map((p) => (
                      <div key={p.titre} className="rounded-2xl p-6" style={card}>
                        <h3 className="text-lg font-black text-white mb-2">{p.titre}</h3>
                        <p className="text-white/65 text-sm leading-relaxed">{inline(p.texte)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── GUIDES ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">Nos guides</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {c.guides.map((g) => (
                <a key={g.href} href={g.href} className="group rounded-xl p-5 transition-colors hover:bg-white/[0.06]" style={card}>
                  <BookOpen className="w-5 h-5 mb-3" style={{ color: ACCENT }} />
                  <p className="text-white font-bold text-sm leading-snug mb-2">{g.label}</p>
                  <span className="text-xs font-bold inline-flex items-center gap-1" style={{ color: ACCENT }}>
                    Lire <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
            <p className="text-white/60 text-sm mt-6">
              Voir aussi <a href={c.pilier.href} className="underline" style={{ color: ACCENT }}>{c.pilier.lien}</a>.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Questions fréquentes</h2>
            <div className="space-y-3">
              {faq.map((f) => (
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

        {/* ── E-E-A-T ── */}
        <section className="py-12 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto rounded-2xl p-6 md:p-7" style={card}>
            <div className="flex items-start gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
              <div>
                <p className="text-white font-bold">Rédigé par l&apos;équipe technique d&apos;Allo Nuisible IDF</p>
                <p className="text-white/55 text-sm">{c.certification} Mis à jour le {maj}.</p>
              </div>
            </div>
            <p className="text-white/45 text-xs uppercase tracking-widest mb-2">Sources</p>
            <ul className="space-y-1">
              {c.sources.map((s) => (
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
            <h2 className="text-2xl md:text-4xl font-black text-white mb-6">{c.titre} {v.a} ?</h2>
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
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">{c.autresTitre}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {autres.map((x) => (
                  <a key={x.slug} href={`${c.basePath}/${x.slug}`}
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
