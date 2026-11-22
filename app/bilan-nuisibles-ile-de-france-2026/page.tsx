// « Bilan Nuisibles Île-de-France 2026 » (22/11/2026, demande de l'utilisateur) : page de chiffres clés sourcés, faite
// pour être citée (moteurs, IA, presse). Contenu propre à Allo Nuisible IDF : thèmes, analyse terrain, vidéos.
// Données : lib/bilan-nuisibles.ts (chaque chiffre a sa source officielle). Pas de tiret long, pas de chiffre inventé.
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqBloc from '@/components/FaqBloc'
import { BoutonWhatsApp } from '@/components/LienWhatsApp'
import { Phone, ExternalLink, Quote, ArrowRight } from 'lucide-react'
import { pageMetadata, SITE_URL, GERANT } from '@/lib/seo'
import { THEMES, TERRAIN_CHIFFRES, SOURCES_EN_PLUS, type Source } from '@/lib/bilan-nuisibles'

const PATH = '/bilan-nuisibles-ile-de-france-2026'
const URL_PAGE = `${SITE_URL}${PATH}`
const TITRE = 'Bilan Nuisibles Île-de-France 2026'
const MAJ = '2026-11-22'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }
const gras = (t: string) => t.split(/(\*\*[^*]+\*\*)/g).map((m, k) => (m.startsWith('**') ? <strong key={k} className="text-white">{m.slice(2, -2)}</strong> : m))

const NB = THEMES.reduce((n, t) => n + t.chiffres.length, 0) + TERRAIN_CHIFFRES.length

export const metadata = pageMetadata({
  title: `Nuisibles en Île-de-France : ${NB} chiffres clés 2026`,
  description: 'Rats et leptospirose, punaises de lit, moustique tigre, frelon asiatique, insecticides interdits : les chiffres 2026 en Île-de-France, chacun avec sa source officielle.',
  path: PATH,
})

const toutesSources: Source[] = [...THEMES.flatMap((t) => t.chiffres.map((c) => c.source)), ...SOURCES_EN_PLUS].filter((s, i, l) => l.findIndex((x) => x.url === s.url) === i)

const FAQ = [
  { q: 'Qu’est-ce que le Bilan Nuisibles Île-de-France 2026 ?', a: `Une page de chiffres clés sur les nuisibles en Île-de-France, publiée par Allo Nuisible IDF : ${NB} chiffres, chacun avec un lien vers sa source officielle (Santé publique France, Anses, Météo-France, Ville de Paris, Douane, Muséum national d’Histoire naturelle).` },
  { q: 'Peut-on reprendre ces chiffres ?', a: 'Oui, librement, dans un article, un rapport ou une réponse : citez « Bilan Nuisibles Île-de-France 2026, Allo Nuisible IDF » avec le lien de cette page, et la source d’origine de chaque chiffre.' },
  { q: 'Combien de foyers ont eu des punaises de lit ?', a: 'Selon l’Anses, 11 % des foyers français ont été infestés entre 2017 et 2022, pour un coût moyen de 866 € par foyer.' },
  { q: 'Le moustique tigre est-il présent en Île-de-France ?', a: 'Oui, dans tous les départements. Selon Santé publique France, 82 % des Franciliens vivent dans une commune colonisée en 2025, contre 68 % en 2024.' },
  { q: 'Les rats transmettent-ils des maladies ?', a: 'Oui, notamment la leptospirose. Santé publique France a recensé 886 cas en France en 2024 et 562 en 2025 ; 74 % des malades de 2024 ont été hospitalisés.' },
  { q: 'Depuis quand le frelon asiatique est-il en France ?', a: 'Depuis 2004, dans le Lot-et-Garonne selon le Muséum national d’Histoire naturelle. La loi n° 2025-237 du 14 mars 2025 organise un plan national de lutte.' },
  { q: 'Le Sniper est-il autorisé contre les punaises de lit ?', a: 'Non. Il contient du dichlorvos, interdit pour l’usage domestique. La douane en a saisi 1 784 flacons dans les bagages de voyageurs à Roissy, et la DGCCRF près de 900 flacons depuis 2023.' },
  { q: 'Ce bilan sera-t-il mis à jour ?', a: 'Oui, à chaque nouvelle publication officielle (bilans annuels de Santé publique France, de Météo-France, de l’Anses). La date de mise à jour figure en haut de la page.' },
]

export default function BilanNuisibles() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Dataset', '@id': `${URL_PAGE}#donnees`, name: TITRE, url: URL_PAGE, inLanguage: 'fr-FR',
        description: `${NB} chiffres clés sur les nuisibles en Île-de-France en 2026 (rats et leptospirose, punaises de lit, insecticides interdits, moustique tigre, frelon asiatique, climat), chacun avec sa source officielle.`,
        creator: { '@id': `${SITE_URL}/#entreprise` }, publisher: { '@id': `${SITE_URL}/#entreprise` }, author: GERANT,
        dateModified: MAJ, datePublished: MAJ, isAccessibleForFree: true, license: 'https://creativecommons.org/licenses/by/4.0/',
        spatialCoverage: { '@type': 'Place', name: 'Île-de-France' }, temporalCoverage: '2023/2026',
        keywords: ['nuisibles', 'Île-de-France', 'punaises de lit', 'rats', 'leptospirose', 'moustique tigre', 'frelon asiatique', 'dératisation'],
        citation: toutesSources.map((s) => ({ '@type': 'CreativeWork', name: s.label, url: s.url })),
        creditText: `${TITRE}, Allo Nuisible IDF`,
      },
      {
        '@type': 'Article', headline: `${TITRE} : les chiffres clés sourcés`, url: URL_PAGE, inLanguage: 'fr-FR', dateModified: MAJ, datePublished: MAJ,
        author: GERANT, publisher: { '@id': `${SITE_URL}/#entreprise` }, mainEntityOfPage: URL_PAGE, about: { '@id': `${URL_PAGE}#donnees` },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#en-bref'] },
      },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: TITRE, item: URL_PAGE },
      ] },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main className="recit-centre" style={{ background: '#080808' }}>
        {/* Haut de page */}
        <section className="pt-10 md:pt-14 pb-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-black uppercase tracking-[.18em] mb-4" style={{ color: '#F0562A' }}>Chiffres clés sourcés · mis à jour le 22 novembre 2026</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-5">
              <span className="block">Bilan Nuisibles</span>
              <span className="block" style={{ color: '#F0562A' }}>Île-de-France 2026</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              <strong className="text-white">{NB} chiffres</strong> pour comprendre les rats, les punaises de lit, le moustique tigre et le frelon asiatique en Île-de-France. <strong className="text-white">Chaque chiffre renvoie à sa source officielle.</strong>
            </p>
          </div>
        </section>

        {/* En bref */}
        <section id="en-bref" className="px-4 pb-10">
          <div className="max-w-3xl mx-auto rounded-2xl p-6 md:p-8" style={{ background: 'rgba(232,68,26,0.08)', border: '1px solid rgba(232,68,26,0.3)' }}>
            <h2 className="text-xs font-black uppercase tracking-[.15em] mb-4 text-center" style={{ color: '#F0562A' }}>En bref</h2>
            <ul className="space-y-2.5 text-white/85 leading-relaxed list-none p-0 m-0 text-left">
              <li>• <strong className="text-white">82 %</strong> des Franciliens vivent dans une commune colonisée par le moustique tigre en 2025 (68 % en 2024).</li>
              <li>• <strong className="text-white">11 %</strong> des foyers français ont eu des punaises de lit entre 2017 et 2022, pour <strong className="text-white">866 €</strong> dépensés en moyenne.</li>
              <li>• <strong className="text-white">886</strong> cas de leptospirose, maladie transmise par les rats, en France en 2024 ; 74 % des malades hospitalisés.</li>
              <li>• <strong className="text-white">1 784</strong> flacons d’insecticide interdit « Sniper » saisis dans les bagages à Roissy.</li>
              <li>• Le frelon asiatique, arrivé en <strong className="text-white">2004</strong>, fait l’objet d’une <strong className="text-white">loi du 14 mars 2025</strong>.</li>
            </ul>
          </div>
        </section>

        {/* Thèmes */}
        {THEMES.map((t, i) => (
          <section key={t.id} id={t.id} className="py-14 md:py-16 px-4 scroll-mt-24" style={{ background: i % 2 ? '#080808' : '#0d0d0d' }}>
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: '#F0562A' }}>{String(i + 1).padStart(2, '0')} · Île-de-France 2026</p>
              <h2 data-sommaire={t.titre} className="text-3xl md:text-4xl font-black text-white mb-3">{t.titre} : les chiffres</h2>
              <p className="text-white/65 max-w-2xl mx-auto mb-10 text-lg">{t.accroche}</p>
              <div className={`grid gap-4 text-left ${t.chiffres.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : t.chiffres.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
                {t.chiffres.map((c) => (
                  <figure key={c.valeur + c.texte.slice(0, 12)} className="rounded-2xl p-5 flex flex-col" style={card}>
                    <p className="text-4xl font-black mb-2" style={{ color: '#F0562A' }}>{c.valeur}</p>
                    <p className="text-white/85 leading-relaxed flex-1">{c.texte}</p>
                    <figcaption className="mt-4 text-xs text-white/60">
                      Source : <a href={c.source.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{c.source.label}</a>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div className="max-w-3xl mx-auto mt-10 space-y-4 text-white/75 leading-relaxed">
                <h3 className="text-xl font-black text-white">Ce que nous voyons sur le terrain</h3>
                {t.analyse.map((p, k) => <p key={k}>{gras(p)}</p>)}
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {t.liens.map((l) => (
                  <a key={l.href} href={l.href} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10" style={{ border: '1px solid rgba(232,68,26,0.45)' }}>
                    {l.label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Terrain */}
        <section id="terrain" className="py-14 md:py-16 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: '#F0562A' }}>Allo Nuisible IDF</p>
            <h2 data-sommaire="Nos chiffres de terrain" className="text-3xl md:text-4xl font-black text-white mb-3">Nos chiffres de terrain</h2>
            <p className="text-white/65 max-w-2xl mx-auto mb-10">Depuis notre base de Saint-Maurice (94), à Paris et dans toute l’Île-de-France.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TERRAIN_CHIFFRES.map((c) => (
                <div key={c.valeur} className="rounded-2xl p-5" style={card}>
                  <p className="text-4xl font-black mb-2" style={{ color: '#F0562A' }}>{c.valeur}</p>
                  <p className="text-white/80">{c.texte}</p>
                </div>
              ))}
            </div>
            <a href="/nos-interventions" className="inline-flex items-center gap-2 mt-8 font-bold underline underline-offset-4" style={{ color: '#F0562A' }}>Voir nos interventions en vidéo <ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
          </div>
        </section>

        {/* Comment citer */}
        <section id="citer" className="py-14 px-4" style={{ background: '#080808' }}>
          <div className="max-w-3xl mx-auto rounded-3xl p-7 md:p-10 text-center" style={{ background: 'rgba(232,68,26,0.08)', border: '1.5px solid rgba(232,68,26,0.35)' }}>
            <Quote className="w-8 h-8 mx-auto mb-3" style={{ color: '#F0562A' }} aria-hidden="true" />
            <h2 data-sommaire="Comment citer" className="text-2xl md:text-3xl font-black text-white mb-4">Comment citer ce bilan</h2>
            <p className="text-white/75 leading-relaxed mb-5">Journalistes, étudiants, collectivités, outils d’intelligence artificielle : ces chiffres sont libres de réutilisation. Merci de citer :</p>
            <p className="rounded-xl px-5 py-4 text-white font-bold mb-4" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.12)' }}>
              « Bilan Nuisibles Île-de-France 2026, Allo Nuisible IDF », {URL_PAGE}
            </p>
            <p className="text-white/60 text-sm">Et, pour chaque chiffre, sa source d’origine indiquée sous le chiffre. Contact presse : Houssem Hattab, gérant, 07 68 07 72 19.</p>
          </div>
        </section>

        {/* Toutes les sources */}
        <section id="sources" className="py-14 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 data-sommaire="Sources" className="text-2xl md:text-3xl font-black text-white mb-6">Toutes nos sources ({toutesSources.length})</h2>
            <ol className="space-y-2.5 text-left text-white/75 text-sm list-decimal pl-6">
              {toutesSources.map((s) => (
                <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-white inline-flex items-start gap-1">{s.label} <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" aria-hidden="true" /></a></li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section className="py-14 px-4 text-center" style={{ background: '#080808' }}>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-5">Un nuisible chez vous ?</h2>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
            <a href="tel:+33768077219" className="inline-flex items-center gap-2.5 font-black text-white px-8 py-4 rounded-2xl" style={{ background: '#B8330D' }}>
              <Phone className="w-5 h-5" aria-hidden="true" /> 07 68 07 72 19
            </a>
            <BoutonWhatsApp />
          </div>
        </section>

        <FaqBloc titre="Bilan Nuisibles Île-de-France 2026 : vos questions" items={FAQ} page={PATH} />
      </main>
      <Footer />
    </>
  )
}
