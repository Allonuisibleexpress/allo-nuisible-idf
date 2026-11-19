// Pages « prix par nuisible » (/tarifs/[nuisible], 20/11/2026). Contenu dans lib/prix-nuisibles/.
// Seuls les prix de /tarifs sont affichés (« dès X € » ou « sur devis »). Voir lib/prix-nuisibles/types.ts.
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqBloc from '@/components/FaqBloc'
import { BoutonWhatsApp } from '@/components/LienWhatsApp'
import { Phone, Check, X as Croix, ArrowRight, MapPin, BookOpen, ShieldCheck, Clock, FileText } from 'lucide-react'
import { pageMetadata, SITE_URL, GERANT } from '@/lib/seo'
import { PAGES_PRIX, getPagePrix } from '@/lib/prix-nuisibles'
import { villesFamille, type FamilleVille } from '@/lib/services-ville'
import { COMMUNES_94 } from '@/lib/communes94'

export const dynamicParams = false
export function generateStaticParams() { return PAGES_PRIX.map((p) => ({ nuisible: p.slug })) }
export function generateMetadata({ params }: { params: { nuisible: string } }) {
  const p = getPagePrix(params.nuisible)
  if (!p) return {}
  return pageMetadata({ title: p.titreSeo, description: p.description, path: `/tarifs/${p.slug}` })
}

const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }
const O = '#F0562A'
// **gras** et [lien](/adresse)
function riche(t: string) {
  return t.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((s, i) => {
    if (s.startsWith('**')) return <strong key={i} className="text-white">{s.slice(2, -2)}</strong>
    const l = s.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (l) return <a key={i} href={l[2]} className="underline underline-offset-2" style={{ color: O }}>{l[1]}</a>
    return s
  })
}
const DEPS = [['val-de-marne', 'Val-de-Marne'], ['paris', 'Paris'], ['hauts-de-seine', 'Hauts-de-Seine'], ['seine-saint-denis', 'Seine-Saint-Denis'], ['essonne', 'Essonne'], ['yvelines', 'Yvelines'], ['seine-et-marne', 'Seine-et-Marne']]

export default function PagePrixNuisible({ params }: { params: { nuisible: string } }) {
  const p = getPagePrix(params.nuisible)
  if (!p) notFound()
  const villes = p.famille ? villesFamille(p.famille as FamilleVille, 30) : []
  const autres = PAGES_PRIX.filter((x) => x.slug !== p.slug)
  const url = `${SITE_URL}/tarifs/${p.slug}`
  const prixNum = parseFloat(p.prixDes)
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${url}#page`, url, name: p.titreSeo, inLanguage: 'fr-FR', author: { '@id': GERANT['@id'] }, about: { '@id': `${url}#service` } },
    { '@type': 'Service', '@id': `${url}#service`, name: p.h1, provider: { '@id': `${SITE_URL}/#entreprise` }, areaServed: { '@type': 'AdministrativeArea', name: 'Île-de-France' },
      offers: { '@type': 'Offer', priceCurrency: 'EUR', price: prixNum, priceSpecification: { '@type': 'PriceSpecification', minPrice: prixNum, priceCurrency: 'EUR', valueAddedTaxIncluded: true }, availability: 'https://schema.org/InStock' } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Tarifs', item: `${SITE_URL}/tarifs` }, { '@type': 'ListItem', position: 3, name: `Prix ${p.nom}`, item: url }] },
  ] }
  const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="text-2xl md:text-3xl font-black text-white mb-5 text-center">{children}</h2>
  const Para = ({ t }: { t: string }) => <p className="text-white/75 leading-relaxed mb-4">{riche(t)}</p>

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: '#080808' }}>
        {/* Haut de page */}
        <section className="pt-8 md:pt-12 pb-10 px-4 text-center">
          <nav aria-label="Fil d’Ariane" className="text-xs text-white/60 mb-5"><a href="/" className="hover:text-white">Accueil</a> › <a href="/tarifs" className="hover:text-white">Tarifs</a> › <span className="text-white/80">Prix {p.nom}</span></nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5 max-w-4xl mx-auto">{p.h1}</h1>
          <p className="mb-5"><span className="text-white/70 font-bold mr-2">À partir de</span><span className="font-black text-5xl md:text-6xl align-middle" style={{ color: O }}>{p.prixDes}</span><span className="text-white/80 font-bold ml-2">TTC</span></p>
          <ul className="flex flex-wrap justify-center gap-2 mb-7 text-sm">
            {[`Devis gratuit avant intervention`, 'Aucune majoration nuit, week-end et jours fériés', `Garantie ${p.garantie}`, 'Techniciens Certibiocide'].map((b) => (
              <li key={b} className="rounded-full px-3.5 py-1.5 text-white/85" style={card}>{b}</li>
            ))}
          </ul>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#devis" className="inline-flex items-center gap-2 font-black text-white px-6 py-3.5 rounded-xl text-sm" style={{ background: '#B8330D' }}>Mon devis gratuit <ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
            <a href="tel:+33768077219" className="inline-flex items-center gap-2 font-bold text-white px-6 py-3.5 rounded-xl text-sm" style={card}><Phone className="w-4 h-4" aria-hidden="true" />07 68 07 72 19</a>
            <BoutonWhatsApp sujet={`prix ${p.nom}`} />
          </div>
        </section>

        {/* En bref */}
        <section className="px-4 pb-10" aria-labelledby="en-bref-prix">
          <div className="max-w-3xl mx-auto rounded-2xl p-6 md:p-7" style={{ background: 'rgba(232,68,26,0.07)', border: '1px solid rgba(232,68,26,0.25)' }}>
            <h2 id="en-bref-prix" className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color: O }}>En bref</h2>
            <dl className="space-y-3">
              {p.enBref.map(({ q, r }) => (<div key={q}><dt className="font-black text-white">{q}</dt><dd className="text-white/80 leading-relaxed">{r}</dd></div>))}
            </dl>
          </div>
        </section>

        {/* Introduction */}
        <section className="px-4 pb-12">
          <div className="max-w-3xl mx-auto">{p.intro.map((t) => <Para key={t.slice(0, 30)} t={t} />)}</div>
        </section>

        {/* Grille */}
        <section className="px-4 py-14" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto">
            <H2>Grille de prix : {p.nom}</H2>
            <div className="overflow-x-auto rounded-2xl" style={card}>
              <table className="w-full text-sm text-left">
                <caption className="sr-only">Prix d’un traitement : {p.nom}, selon la situation</caption>
                <thead><tr className="text-white" style={{ background: 'rgba(232,68,26,0.12)' }}><th scope="col" className="px-4 py-3 font-black">Situation</th><th scope="col" className="px-4 py-3 font-black">Prix TTC</th><th scope="col" className="px-4 py-3 font-black">Ce qui est compris</th></tr></thead>
                <tbody>
                  {p.grille.map((g) => (
                    <tr key={g.situation} className="border-t border-white/10 text-white/80"><th scope="row" className="px-4 py-3 font-bold text-white">{g.situation}</th><td className="px-4 py-3 font-black whitespace-nowrap" style={{ color: O }}>{g.prix}</td><td className="px-4 py-3">{g.inclus}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-white/60 text-sm mt-4 text-center">Prix TTC, identiques de jour comme de nuit, en semaine comme le week-end et les jours fériés. Le prix exact est confirmé dans le devis gratuit, avant l’intervention.</p>
          </div>
        </section>

        {/* Inclus / non inclus */}
        <section className="px-4 py-14">
          <div className="max-w-5xl mx-auto">
            <H2>Ce que comprend le prix, et ce qu’il ne comprend pas</H2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl p-5" style={card}><h3 className="font-black text-white mb-3">Compris dans le prix</h3><ul className="grid gap-2">{p.inclus.map((t) => <li key={t} className="flex gap-2 text-white/80 text-sm leading-relaxed"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#3DDC84' }} aria-hidden="true" /><span>{riche(t)}</span></li>)}</ul></div>
              <div className="rounded-2xl p-5" style={card}><h3 className="font-black text-white mb-3">Pas compris, ou sur devis</h3><ul className="grid gap-2">{p.nonInclus.map((t) => <li key={t} className="flex gap-2 text-white/80 text-sm leading-relaxed"><Croix className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: O }} aria-hidden="true" /><span>{riche(t)}</span></li>)}</ul></div>
            </div>
          </div>
        </section>

        {/* Facteurs */}
        <section className="px-4 py-14" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto">
            <H2>Ce qui fait varier le prix : {p.nom}</H2>
            <div className="grid gap-4">
              {p.facteurs.map((f) => <div key={f.t} className="rounded-2xl p-5" style={card}><h3 className="font-black text-white mb-2">{f.t}</h3><p className="text-white/75 text-sm leading-relaxed">{riche(f.x)}</p></div>)}
            </div>
          </div>
        </section>

        {/* Méthodes */}
        <section className="px-4 py-14">
          <div className="max-w-4xl mx-auto">
            <H2>{p.methodes.titre}</H2>
            <div className="max-w-3xl mx-auto"><Para t={p.methodes.intro} /></div>
            <div className="overflow-x-auto rounded-2xl mb-6" style={card}>
              <table className="w-full text-sm text-left">
                <caption className="sr-only">Méthodes et prix</caption>
                <thead><tr className="text-white" style={{ background: 'rgba(232,68,26,0.12)' }}><th scope="col" className="px-4 py-3 font-black">Méthode</th><th scope="col" className="px-4 py-3 font-black">Quand la choisir</th><th scope="col" className="px-4 py-3 font-black">Prix</th></tr></thead>
                <tbody>{p.methodes.lignes.map((l) => <tr key={l.methode} className="border-t border-white/10 text-white/80"><th scope="row" className="px-4 py-3 font-bold text-white">{l.methode}</th><td className="px-4 py-3">{l.quand}</td><td className="px-4 py-3 whitespace-nowrap">{l.prix}</td></tr>)}</tbody>
              </table>
            </div>
            <div className="max-w-3xl mx-auto">{p.methodes.apres.map((t) => <Para key={t.slice(0, 30)} t={t} />)}</div>
          </div>
        </section>

        {/* Exemples */}
        <section className="px-4 py-14" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto">
            <H2>Exemples de situations et de prix</H2>
            <div className="grid md:grid-cols-2 gap-4">
              {p.exemples.map((e) => <div key={e.t} className="rounded-2xl p-5" style={card}><h3 className="font-black text-white mb-2">{e.t}</h3><p className="text-white/75 text-sm leading-relaxed">{riche(e.x)}</p></div>)}
            </div>
          </div>
        </section>

        {/* Soi-même */}
        <section className="px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <H2>Faire soi-même ou appeler un professionnel ?</H2>
            {p.soiMeme.map((t) => <Para key={t.slice(0, 30)} t={t} />)}
          </div>
        </section>

        {/* Économiser */}
        <section className="px-4 py-14" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto">
            <H2>Comment payer moins cher, sans rater le traitement</H2>
            <div className="grid md:grid-cols-2 gap-4">
              {p.economiser.map((e) => <div key={e.t} className="rounded-2xl p-5" style={card}><h3 className="font-black text-white mb-2">{e.t}</h3><p className="text-white/75 text-sm leading-relaxed">{riche(e.x)}</p></div>)}
            </div>
          </div>
        </section>

        {/* Qui paie */}
        <section className="px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <H2>Qui paie : locataire, propriétaire, copropriété ?</H2>
            {p.quiPaie.map((t) => <Para key={t.slice(0, 30)} t={t} />)}
          </div>
        </section>

        {/* Déroulé */}
        <section className="px-4 py-14" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto">
            <H2>Du devis à la garantie : ce que vous payez, étape par étape</H2>
            <ol className="grid gap-3">
              {p.deroule.map((d, i) => <li key={d.t} className="rounded-2xl p-5 flex gap-4" style={card}><span className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center font-black text-white" style={{ background: '#B8330D' }}>{i + 1}</span><div><h3 className="font-black text-white mb-1">{d.t}</h3><p className="text-white/75 text-sm leading-relaxed">{riche(d.x)}</p></div></li>)}
            </ol>
          </div>
        </section>

        {/* Sections longues propres au nuisible */}
        {(p.complements ?? []).map((c, i) => (
          <section key={c.titre} className="px-4 py-14" style={{ background: i % 2 ? '#0d0d0d' : '#080808' }}>
            <div className="max-w-3xl mx-auto"><H2>{c.titre}</H2>{c.paras.map((t) => <Para key={t.slice(0, 30)} t={t} />)}</div>
          </section>
        ))}

        {/* Pièges */}
        <section className="px-4 py-14">
          <div className="max-w-3xl mx-auto">
            <H2>Les pièges à éviter sur le prix</H2>
            {p.pieges.map((t) => <Para key={t.slice(0, 30)} t={t} />)}
            <Para t={`Avant de signer, vérifiez toujours le nom de l’entreprise, son adresse et son numéro SIRET, et demandez un devis écrit. Pour reconnaître les pratiques abusives, lisez notre article sur [les arnaques à la dératisation et aux nuisibles](/blog/arnaques-deratisation-nuisibles).`} />
          </div>
        </section>

        {/* Nos engagements prix */}
        <section className="px-4 py-14" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto">
            <H2>Nos engagements sur le prix</H2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { i: FileText, t: 'Prix annoncé avant', x: 'Par téléphone ou sur photo, puis confirmé dans le devis gratuit. Vous décidez ensuite.' },
                { i: Clock, t: 'Aucune majoration', x: 'Même prix la nuit, le week-end et les jours fériés. Un nuisible n’attend pas le lundi.' },
                { i: ShieldCheck, t: `Garantie ${p.garantie}`, x: 'Si le problème revient pendant la garantie, nous revenons sans supplément.' },
                { i: MapPin, t: 'Une entreprise locale', x: 'Basée à Saint-Maurice (94), pas une plateforme qui revend votre demande.' },
              ].map(({ i: I, t, x }) => <li key={t} className="rounded-2xl p-5" style={card}><I className="w-5 h-5 mb-2" style={{ color: O }} aria-hidden="true" /><h3 className="font-black text-white mb-1">{t}</h3><p className="text-white/70 text-sm leading-relaxed">{x}</p></li>)}
            </ul>
          </div>
        </section>

        {/* Prix par ville */}
        {villes.length === 0 && !p.depBase && (
          <section className="px-4 py-14">
            <div className="max-w-5xl mx-auto text-center">
              <H2>Prix {p.nom} dans votre ville</H2>
              <p className="text-white/65 mb-6">Le prix est le même dans toute l’Île-de-France. Nos pages par département et par commune présentent nos interventions près de chez vous.</p>
              <ul className="flex flex-wrap justify-center gap-2 mb-5">
                {[...DEPS, ['val-d-oise', 'Val-d’Oise']].map(([s, n]) => <li key={s}><a href={`/zones/${s}`} className="inline-block text-sm font-bold text-white/85 hover:text-white rounded-full px-4 py-2" style={card}>{n}</a></li>)}
              </ul>
              <ul className="flex flex-wrap justify-center gap-1.5">
                {COMMUNES_94.map((c) => <li key={c.slug}><a href={`/zones/val-de-marne/${c.slug}`} className="inline-flex items-center gap-1 text-xs text-white/75 hover:text-white rounded-full px-3 py-1.5" style={{ border: '1px solid rgba(255,255,255,0.14)' }}><MapPin className="w-3 h-3" style={{ color: O }} aria-hidden="true" />{c.nom}</a></li>)}
              </ul>
            </div>
          </section>
        )}
        {(villes.length > 0 || p.depBase) && (
          <section className="px-4 py-14">
            <div className="max-w-5xl mx-auto text-center">
              <H2>Prix {p.nom} dans votre ville</H2>
              <p className="text-white/65 mb-6">Le prix est le même dans toute l’Île-de-France. Chaque page ville détaille le contexte local et nos interventions sur place.</p>
              {p.depBase && (
                <ul className="flex flex-wrap justify-center gap-2 mb-5">
                  {DEPS.map(([s, n]) => <li key={s}><a href={`${p.depBase}/${s}`} className="inline-block text-sm font-bold text-white/85 hover:text-white rounded-full px-4 py-2" style={card}>{n}</a></li>)}
                </ul>
              )}
              <ul className="flex flex-wrap justify-center gap-1.5">
                {villes.map((v) => <li key={v.href}><a href={v.href} className="inline-flex items-center gap-1 text-xs text-white/75 hover:text-white rounded-full px-3 py-1.5" style={{ border: '1px solid rgba(255,255,255,0.14)' }}><MapPin className="w-3 h-3" style={{ color: O }} aria-hidden="true" />{v.nom}</a></li>)}
              </ul>
            </div>
          </section>
        )}

        <FaqBloc titre={`Questions sur le prix : ${p.nom}`} items={p.faq} page={`/tarifs/${p.slug}`} fond="#0d0d0d" />

        {/* Guides et autres prix */}
        <section className="px-4 py-14">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-5" style={card}>
              <h2 className="font-black text-white text-lg mb-3">Pour aller plus loin</h2>
              <ul className="grid gap-2 text-sm">
                <li><a href={p.service} className="inline-flex items-center gap-1.5 underline underline-offset-2 text-white/85 hover:text-white"><ArrowRight className="w-3.5 h-3.5" style={{ color: O }} aria-hidden="true" />Notre service : {p.nom}</a></li>
                {p.guides.map((g) => <li key={g.href}><a href={g.href} className="inline-flex items-center gap-1.5 underline underline-offset-2 text-white/85 hover:text-white"><BookOpen className="w-3.5 h-3.5" style={{ color: O }} aria-hidden="true" />{g.label}</a></li>)}
              </ul>
            </div>
            <div className="rounded-2xl p-5" style={card}>
              <h2 className="font-black text-white text-lg mb-3">Les prix des autres nuisibles</h2>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {autres.map((a) => <li key={a.slug}><a href={`/tarifs/${a.slug}`} className="underline underline-offset-2 text-white/85 hover:text-white">Prix {a.nom} : dès {a.prixDes}</a></li>)}
                <li><a href="/tarifs" className="underline underline-offset-2 font-bold" style={{ color: O }}>Tous nos tarifs</a></li>
              </ul>
            </div>
          </div>
          <p className="text-center text-white/60 text-sm mt-8">Page rédigée par <a href="/auteur/houssem-hattab" className="underline">Houssem Hattab</a>, gérant d’Allo Nuisible IDF. Prix en vigueur au 20 novembre 2026.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
