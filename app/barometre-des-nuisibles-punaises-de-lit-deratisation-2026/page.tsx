// « Baromètre des nuisibles Île-de-France 2026 : punaises de lit, dératisation » (ex-Bilan Nuisibles) (22/11/2026, demande de l'utilisateur) : page de chiffres clés sourcés, faite
// pour être citée (moteurs, IA, presse). Contenu propre à Allo Nuisible IDF : thèmes, analyse terrain, vidéos.
// Données : lib/bilan-nuisibles.ts (chaque chiffre a sa source officielle). Pas de tiret long, pas de chiffre inventé.
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqBloc from '@/components/FaqBloc'
import { BoutonWhatsApp } from '@/components/LienWhatsApp'
import { Phone, ExternalLink, Quote, ArrowRight } from 'lucide-react'
import { pageMetadata, SITE_URL, GERANT } from '@/lib/seo'
import { THEMES, TERRAIN_CHIFFRES, SOURCES_EN_PLUS, MAJ_BAROMETRE, type Source } from '@/lib/bilan-nuisibles'

const PATH = '/barometre-des-nuisibles-punaises-de-lit-deratisation-2026'
const URL_PAGE = `${SITE_URL}${PATH}`
const TITRE = 'Baromètre des nuisibles Île-de-France 2026'
const MAJ = MAJ_BAROMETRE
const PUBLIE = '2026-11-22'
const CSV = '/barometre-des-nuisibles-2026.csv'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }
const gras = (t: string) => t.split(/(\*\*[^*]+\*\*)/g).map((m, k) => (m.startsWith('**') ? <strong key={k} className="text-white">{m.slice(2, -2)}</strong> : m))

const TENDANCES = [
  { titre: 'Leptospirose : cas signalés en France', max: 886, note: '74 % des malades de 2024 ont été hospitalisés. Le rat brun est le principal réservoir de la bactérie en ville.', source: { label: 'Santé publique France, bilans 2024 et 2025', url: 'https://www.santepubliquefrance.fr/leptospirose/bulletin-national/leptospirose-en-france-en-2025-donnees-du-signalement-obligatoire' },
    barres: [{ an: '2024', v: 886, label: '886', fort: true }, { an: '2025', v: 562, label: '562', fort: false }] },
  { titre: 'Moustique tigre : Franciliens vivant dans une commune colonisée', max: 100, note: 'Fin 2025, Paris et toute la petite couronne sont colonisés, sauf quatre communes de Seine-Saint-Denis.', source: { label: 'Santé publique France Île-de-France, situation 2025', url: 'https://invs.santepubliquefrance.fr/sites/default/files/2026-05/infog_arbo_idf_20260520.pdf' },
    barres: [{ an: '2024', v: 68, label: '68 %', fort: false }, { an: '2025', v: 82, label: '82 %', fort: true }] },
]

const NB = THEMES.reduce((n, t) => n + t.chiffres.length, 0) + TERRAIN_CHIFFRES.length

const META = pageMetadata({
  title: 'Baromètre des nuisibles 2026 : punaises de lit, dératisation',
  description: 'Punaises de lit (11 % des foyers), rats à Paris (4 000 interventions par an), leptospirose, moustique tigre : les chiffres 2026, tous sourcés.',
  path: PATH,
})
export const metadata = {
  ...META,
  // 28/11/2026 : versions lisibles par les machines (IA, moteurs, journalistes) déclarées dans l'en-tête
  alternates: { ...META.alternates, types: { 'text/csv': CSV, 'application/json': '/barometre-des-nuisibles-2026.json', 'text/markdown': '/barometre-des-nuisibles-2026.md' } },
}

const toutesSources: Source[] = [...THEMES.flatMap((t) => t.chiffres.map((c) => c.source)), ...SOURCES_EN_PLUS].filter((s, i, l) => l.findIndex((x) => x.url === s.url) === i)

const FAQ = [
  { q: 'Qu’est-ce que le Baromètre des nuisibles Île-de-France 2026 ?', a: `Un baromètre des nuisibles en Île-de-France, centré sur les punaises de lit et la dératisation, publié par Allo Nuisible IDF : ${NB} chiffres, chacun avec un lien vers sa source officielle (Santé publique France, Anses, Météo-France, Ville de Paris, Douane, Muséum national d’Histoire naturelle).` },
  { q: 'Peut-on reprendre ces chiffres ?', a: 'Oui, librement, dans un article, un rapport ou une réponse : citez « Baromètre des nuisibles Île-de-France 2026, Allo Nuisible IDF » avec le lien de cette page, et la source d’origine de chaque chiffre.' },
  { q: 'Combien de foyers ont eu des punaises de lit ?', a: 'Selon l’Anses, 11 % des foyers français ont été infestés entre 2017 et 2022, pour un coût moyen de 866 € par foyer.' },
  { q: 'Combien coûte une infestation de punaises de lit ?', a: 'Selon l’Anses, 866 € par an en moyenne par ménage infesté, et 230 millions d’euros par an pour l’ensemble des ménages français. Pour les bailleurs sociaux interrogés, une intervention coûtait en moyenne 1 052 € en 2021.' },
  { q: 'Qui est le plus exposé aux punaises de lit ?', a: 'D’après l’Anses : les locataires, les personnes vivant en appartement ou en logement partagé, les foyers avec enfants, les jeunes et les actifs. Un faible revenu ne serait pas lié à un risque plus élevé, mais l’infestation peut durer plus longtemps faute de moyens.' },
  { q: 'Pourquoi faut-il deux passages contre les punaises de lit ?', a: 'Les œufs, collés et protégés par leur coque, éclosent en 7 à 15 jours et résistent à la plupart des produits. Le second passage élimine les jeunes punaises sorties entre-temps.' },
  { q: 'Le moustique tigre est-il présent en Île-de-France ?', a: 'Oui, dans tous les départements. Selon Santé publique France, 82 % des Franciliens vivent dans une commune colonisée en 2025, contre 68 % en 2024.' },
  { q: 'Les rats transmettent-ils des maladies ?', a: 'Oui, notamment la leptospirose. Santé publique France a recensé 886 cas en France en 2024 et 562 en 2025 ; 74 % des malades de 2024 ont été hospitalisés.' },
  { q: 'Depuis quand le frelon asiatique est-il en France ?', a: 'Depuis 2004, dans le Lot-et-Garonne selon le Muséum national d’Histoire naturelle. La loi n° 2025-237 du 14 mars 2025 organise un plan national de lutte.' },
  { q: 'Le Sniper est-il autorisé contre les punaises de lit ?', a: 'Non. Il contient du dichlorvos, interdit pour l’usage domestique. La douane en a saisi 1 784 flacons dans les bagages de voyageurs à Roissy, et la DGCCRF près de 900 flacons depuis 2023.' },
  { q: 'Que fait la Ville de Paris contre les rats ?', a: 'Environ 4 000 interventions par an sur le domaine public, 6 300 poubelles fermées « Cybel », 1 400 abri-bacs dans 250 jardins et, depuis juin 2025, l’expérimentation « Rats 360° » sur des sites tests. Les cours, caves et parties communes restent à la charge des propriétaires et des syndics.' },
  { q: 'Y a-t-il plus de rats à cause du réchauffement ?', a: 'Une étude publiée en 2025 dans Science Advances, citée par la Ville de Paris, relie la hausse des températures urbaines à l’augmentation des populations de rats dans 11 grandes métropoles, dont Amsterdam, New York et Toronto.' },
  { q: 'Qui paie le traitement contre les nuisibles dans un logement loué ?', a: 'Le propriétaire doit remettre un logement décent, exempt de toute infestation d’espèces nuisibles et parasites (loi du 6 juillet 1989, article 6). En copropriété, les parties communes relèvent du syndic. En cours de bail, tout dépend de l’origine : signalez-le par écrit.' },
  { q: 'Quel numéro appeler pour des punaises de lit ?', a: 'L’État indique le service Info logement indigne, au 0806 706 806, et la plateforme stop-punaises.gouv.fr, lancée avec le plan national de mars 2021. Pour un traitement, contactez un professionnel certifié Certibiocide.' },
  { q: 'Les chenilles processionnaires sont-elles réglementées ?', a: 'Oui. Selon l’ARS Île-de-France, les chenilles processionnaires du pin et du chêne sont réglementées par le code de la santé publique, et le maire fait appliquer l’article R. 1338-8 sur sa commune.' },
  { q: 'Peut-on télécharger les données du baromètre ?', a: 'Oui : toutes les données sont disponibles en fichier CSV (tableur), avec la valeur, sa description et sa source, sous licence CC BY 4.0.' },
  { q: 'Ce baromètre sera-t-il mis à jour ?', a: 'Oui, à chaque nouvelle publication officielle (bilans annuels de Santé publique France, de Météo-France, de l’Anses). La date de mise à jour figure en haut de la page.' },
]

export default function BilanNuisibles() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Dataset', '@id': `${URL_PAGE}#donnees`, name: TITRE, url: URL_PAGE, inLanguage: 'fr-FR',
        description: `${NB} chiffres clés sur les nuisibles en Île-de-France en 2026 (punaises de lit, rats et leptospirose, lutte contre les rats à Paris, droits des locataires, chenilles processionnaires, moustique tigre, frelon asiatique, climat), chacun avec sa source officielle.`,
        creator: { '@id': `${SITE_URL}/#entreprise` }, publisher: { '@id': `${SITE_URL}/#entreprise` }, author: GERANT,
        dateModified: MAJ, datePublished: PUBLIE, isAccessibleForFree: true,
        distribution: [{ '@type': 'DataDownload', encodingFormat: 'text/csv', contentUrl: `${SITE_URL}${CSV}` }, { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${SITE_URL}/barometre-des-nuisibles-2026.json` }, { '@type': 'DataDownload', encodingFormat: 'text/markdown', contentUrl: `${SITE_URL}/barometre-des-nuisibles-2026.md` }],
        variableMeasured: THEMES.map((t) => t.titre), license: 'https://creativecommons.org/licenses/by/4.0/',
        spatialCoverage: { '@type': 'Place', name: 'Île-de-France' }, temporalCoverage: '2023/2026',
        keywords: ['punaises de lit', 'punaises de lit Île-de-France', 'coût punaises de lit', 'nuisibles', 'Île-de-France', 'rats', 'rats Paris', 'leptospirose', 'moustique tigre', 'frelon asiatique', 'chenilles processionnaires', 'dératisation', 'dératisation Paris', 'statistiques nuisibles'],
        citation: toutesSources.map((s) => ({ '@type': 'CreativeWork', name: s.label, url: s.url })),
        creditText: `${TITRE}, Allo Nuisible IDF`,
      },
      {
        '@type': 'Article', headline: `${TITRE} : punaises de lit, dératisation, les chiffres clés sourcés`, url: URL_PAGE, inLanguage: 'fr-FR', dateModified: MAJ, datePublished: PUBLIE,
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
            <p className="text-xs font-black uppercase tracking-[.18em] mb-4" style={{ color: '#F0562A' }}>Chiffres clés sourcés · mis à jour le 28 novembre 2026</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-5">
              <span className="block">Baromètre des nuisibles</span>
              <span className="block" style={{ color: '#F0562A' }}>Punaises de lit, dératisation</span>
              <span className="block text-2xl sm:text-3xl mt-3 text-white/85">Île-de-France 2026</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              <strong className="text-white">{NB} chiffres</strong> pour comprendre les <strong className="text-white">punaises de lit</strong> (ampleur, coût, profils touchés, cycle, traitements), la <strong className="text-white">dératisation</strong> (rats, leptospirose, lutte contre les rats à Paris), les <strong className="text-white">droits des locataires</strong>, puis les chenilles processionnaires, le moustique tigre et le frelon asiatique en Île-de-France. <strong className="text-white">Chaque chiffre renvoie à sa source officielle.</strong>
            </p>
          </div>
        </section>

        {/* En bref */}
        <section id="en-bref" className="px-4 pb-10">
          <div className="max-w-3xl mx-auto rounded-2xl p-6 md:p-8" style={{ background: 'rgba(232,68,26,0.08)', border: '1px solid rgba(232,68,26,0.3)' }}>
            <h2 className="text-xs font-black uppercase tracking-[.15em] mb-4 text-center" style={{ color: '#F0562A' }}>En bref</h2>
            <ul className="space-y-2.5 text-white/85 leading-relaxed list-none p-0 m-0 text-left">
              <li>• <strong className="text-white">11 %</strong> des ménages français ont eu des punaises de lit entre 2017 et 2022 ; <strong className="text-white">866 €</strong> dépensés en moyenne par ménage infesté (Anses).</li>
              <li>• <strong className="text-white">56 812</strong> consultations médicales par an pour des punaises de lit, et <strong className="text-white">83,5 M€</strong> de coût sanitaire en 2019 (Anses).</li>
              <li>• Les punaises <strong className="text-white">résistent de plus en plus aux insecticides</strong> ; <strong className="text-white">1 784</strong> flacons de « Sniper », produit interdit, saisis dans les bagages à Roissy.</li>
              <li>• <strong className="text-white">82 %</strong> des Franciliens vivent dans une commune colonisée par le moustique tigre en 2025 (68 % en 2024).</li>
              <li>• <strong className="text-white">886</strong> cas de leptospirose, maladie transmise par les rats, en France en 2024 ; <strong className="text-white">74 %</strong> des malades hospitalisés (Santé publique France).</li>
              <li>• À Paris : <strong className="text-white">≈ 4 000</strong> interventions par an contre les rongeurs et <strong className="text-white">6 300</strong> poubelles fermées anti-rats (Ville de Paris).</li>
              <li>• Logement loué : le bailleur doit fournir un logement <strong className="text-white">exempt de toute infestation</strong> de nuisibles (loi du 6 juillet 1989, article 6).</li>
            </ul>
          </div>
        </section>

        {/* Tendances */}
        <section id="tendances" className="px-4 pb-14">
          <div className="max-w-4xl mx-auto text-center">
            <h2 data-sommaire="Tendances" className="text-2xl md:text-3xl font-black text-white mb-2">Deux tendances à suivre</h2>
            <p className="text-white/65 mb-8">Évolution d’une année sur l’autre, d’après les bilans de Santé publique France.</p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {TENDANCES.map((g) => (
                <figure key={g.titre} className="rounded-2xl p-6 m-0" style={card}>
                  <figcaption className="text-white font-black mb-5">{g.titre}</figcaption>
                  <div className="space-y-3">
                    {g.barres.map((b) => (
                      <div key={b.an} className="flex items-center gap-3" title={`${b.an} : ${b.label}`}>
                        <span className="w-12 text-sm text-white/70 tabular-nums">{b.an}</span>
                        <div className="flex-1 h-7 rounded-md" style={{ background: 'rgba(255,255,255,0.05)' }}>
                          <div className="h-7 rounded-r-md" style={{ width: `${(b.v / g.max) * 100}%`, background: b.fort ? '#F0562A' : 'rgba(240,86,42,0.45)' }} />
                        </div>
                        <span className="w-14 text-right font-black text-white tabular-nums">{b.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed">{g.note}</p>
                  <p className="mt-3 text-xs text-white/60">Source : <a href={g.source.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{g.source.label}</a></p>
                </figure>
              ))}
            </div>
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
                {t.chiffres.map((c, k) => (
                  <figure key={c.valeur + c.texte.slice(0, 12)} id={`${t.id}-${k + 1}`} className="rounded-2xl p-5 flex flex-col scroll-mt-24" style={card}>
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

        {/* Tableau récapitulatif */}
        <section id="tableau" className="py-14 md:py-16 px-4 scroll-mt-24" style={{ background: '#080808' }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 data-sommaire="Tableau récapitulatif" className="text-3xl md:text-4xl font-black text-white mb-3">Tous les chiffres en un tableau</h2>
            <p className="text-white/65 max-w-2xl mx-auto mb-8">Les {NB - TERRAIN_CHIFFRES.length} chiffres officiels du baromètre, thème par thème. Données ouvertes (CC BY 4.0) : <a href={CSV} className="font-bold underline underline-offset-4" style={{ color: '#F0562A' }} download>CSV</a>, <a href="/barometre-des-nuisibles-2026.json" className="font-bold underline underline-offset-4" style={{ color: '#F0562A' }}>JSON</a>, <a href="/barometre-des-nuisibles-2026.md" className="font-bold underline underline-offset-4" style={{ color: '#F0562A' }}>texte (Markdown)</a>.</p>
            <div className="overflow-x-auto rounded-2xl text-left" style={card}>
              <table className="w-full text-sm">
                <caption className="sr-only">Baromètre des nuisibles Île-de-France 2026 : chiffres et sources</caption>
                <thead>
                  <tr className="text-white" style={{ background: 'rgba(232,68,26,0.12)' }}>
                    <th scope="col" className="p-3 font-black">Thème</th>
                    <th scope="col" className="p-3 font-black">Chiffre</th>
                    <th scope="col" className="p-3 font-black">Ce qu’il mesure</th>
                    <th scope="col" className="p-3 font-black">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {THEMES.flatMap((t) => t.chiffres.map((c) => (
                    <tr key={t.id + c.valeur + c.texte.slice(0, 10)} className="align-top" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                      <td className="p-3 text-white/60 whitespace-nowrap">{t.titre}</td>
                      <th scope="row" className="p-3 font-black whitespace-nowrap" style={{ color: '#F0562A' }}>{c.valeur}</th>
                      <td className="p-3 text-white/80 min-w-[16rem]">{c.texte}</td>
                      <td className="p-3 text-white/60 min-w-[12rem]"><a href={c.source.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{c.source.label.split(',')[0]}</a></td>
                    </tr>
                  )))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Méthode */}
        <section id="methode" className="py-14 px-4 scroll-mt-24" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 data-sommaire="Méthode" className="text-2xl md:text-3xl font-black text-white mb-5">Notre méthode</h2>
            <div className="space-y-4 text-white/75 leading-relaxed text-left">
              <p>{gras('**Sources officielles uniquement** : chaque chiffre a été relevé sur la publication d’un organisme public (Santé publique France, Anses, ARS Île-de-France, Ville de Paris, Météo-France, Douane, Muséum national d’Histoire naturelle) ou sur un texte de loi. Aucun chiffre n’est estimé ni extrapolé, et aucun ne provient d’une autre entreprise du secteur.')}</p>
              <p>{gras('**Vérification** : chaque valeur a été relue sur la source, dont le lien figure sous le chiffre. Quand une source distingue la France entière et l’Île-de-France, nous le précisons.')}</p>
              <p>{gras('**Nos chiffres de terrain** (clients, délais) sont ceux d’Allo Nuisible IDF, présentés à part pour ne pas les mélanger aux données publiques.')}</p>
              <p>{gras(`**Mises à jour** : publié le 22 novembre 2026, mis à jour le 28 novembre 2026, puis à chaque nouveau bilan officiel. Rédaction : Houssem Hattab, gérant d’Allo Nuisible IDF, entreprise certifiée Certibiocide basée à Saint-Maurice (94).`)}</p>
            </div>
          </div>
        </section>

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
            <h2 data-sommaire="Comment citer" className="text-2xl md:text-3xl font-black text-white mb-4">Comment citer ce baromètre</h2>
            <p className="text-white/75 leading-relaxed mb-5">Journalistes, étudiants, collectivités, outils d’intelligence artificielle : ces chiffres sont libres de réutilisation. Merci de citer :</p>
            <p className="rounded-xl px-5 py-4 text-white font-bold mb-4" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.12)' }}>
              « Baromètre des nuisibles Île-de-France 2026, Allo Nuisible IDF », {URL_PAGE}
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

        <FaqBloc titre="Baromètre des nuisibles 2026 : vos questions" items={FAQ} page={PATH} />
      </main>
      <Footer />
    </>
  )
}
