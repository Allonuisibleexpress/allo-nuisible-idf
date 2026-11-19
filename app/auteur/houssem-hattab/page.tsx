// Page auteur (20/11/2026, demande de l'utilisateur après l'audit face à Express) : Houssem Hattab, gérant, auteur des
// articles du blog. Faits confirmés uniquement (5 ans d'expérience, intervient lui-même, base de Saint-Maurice).
// Données structurées ProfilePage + Person ; la liste des articles est lue dans app/blog/articles.ts.
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqBloc from '@/components/FaqBloc'
import { BoutonWhatsApp } from '@/components/LienWhatsApp'
import { Phone, ArrowRight } from 'lucide-react'
import { pageMetadata, SITE_URL, GERANT } from '@/lib/seo'
import { ARTICLES } from '@/app/blog/articles'

const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

export const metadata = pageMetadata({
  title: 'Houssem Hattab : auteur et gérant, 5 ans de terrain',
  description: 'Houssem Hattab, gérant d’Allo Nuisible IDF à Saint-Maurice (94) : 5 ans de lutte contre les nuisibles, auteur des guides et récits de chantier du blog.',
  path: '/auteur/houssem-hattab',
})

const SPECIALITES = [
  { href: '/services/deratisation', t: 'Dératisation', x: 'Rats et souris en cave, en immeuble, en maison, dans des logements très encombrés. Postes sécurisés ou pièges sans raticide, puis rebouchage des accès.' },
  { href: '/services/punaises-de-lit', t: 'Punaises de lit', x: 'Inspection du lit, du sommier et des plinthes, traitement en 2 passages, avec insecticide ou par le froid.' },
  { href: '/services/cryogenie-punaises-de-lit', t: 'Cryogénie', x: 'Neige carbonique à −78 °C pour traiter sans insecticide : familles avec bébé, foyers, crèches.' },
  { href: '/services/guepes-frelons', t: 'Nids de guêpes et de frelons', x: 'Destruction à la perche jusqu’à 23 m, nids de frelons asiatiques dans les arbres, les haies et les cheminées.' },
  { href: '/services/cafards-blattes', t: 'Cafards', x: 'Gel appât et insecticide dans les gaines et les cuisines, 2 passages pour éliminer les oothèques.' },
  { href: '/services/desinfection', t: 'Désinfection', x: 'Logements très encombrés et sinistrés, avec attestation pour le bailleur ou la mairie.' },
]

const PRINCIPES = [
  { t: 'Identifier avant de traiter', x: 'Un traitement commence par le bon nom du nuisible. Une photo envoyée sur WhatsApp suffit souvent : souris ou rat, punaise de lit ou punaise des bois, guêpe ou frelon asiatique.' },
  { t: 'Chercher la source', x: 'Tuer les nuisibles visibles ne suffit pas. Il faut trouver par où ils entrent, où ils se cachent et pourquoi ils reviennent : un trou derrière l’évier, une gaine, une latte de sommier.' },
  { t: 'Proposer la méthode sans insecticide quand elle suffit', x: 'Cryogénie, vapeur sèche, pièges, rebouchage : quand ces méthodes suffisent, elles sont proposées. Quand il faut un produit, il est appliqué de façon ciblée, par un technicien certifié Certibiocide.' },
  { t: 'Annoncer le prix avant', x: 'Le devis est gratuit, le prix est donné avant l’intervention, sans majoration la nuit, le week-end ni les jours fériés.' },
  { t: 'Revenir si besoin', x: 'Garantie 1 an (3 mois pour les nids de guêpes et de frelons) : si les nuisibles reviennent, l’équipe revient.' },
]

const FAQ = [
  { q: 'Qui est Houssem Hattab ?', a: 'Le gérant d’Allo Nuisible IDF, entreprise de lutte contre les nuisibles installée à Saint-Maurice (94). Il travaille dans ce métier depuis 5 ans et intervient lui-même sur les chantiers.' },
  { q: 'Qui écrit les articles du blog ?', a: 'Houssem Hattab, avec l’équipe technique, à partir des interventions réelles et de sources officielles citées en bas de chaque article.' },
  { q: 'Les récits de chantier sont-ils réels ?', a: 'Oui : chaque récit correspond à une intervention de l’entreprise, illustrée par les photos et vidéos prises sur place, avec la bannière Allo Nuisible IDF.' },
  { q: 'Peut-on lui poser une question sur un nuisible ?', a: 'Oui, par téléphone au 07 68 07 72 19 ou en envoyant une photo sur WhatsApp. La réponse arrive en général en quelques minutes.' },
  { q: 'Où intervient-il ?', a: 'Depuis Saint-Maurice, dans tout le Val-de-Marne, à Paris et dans le reste de l’Île-de-France, 7j/7.' },
]

export default function AuteurPage() {
  const parCategorie = ARTICLES.reduce<Record<string, typeof ARTICLES>>((acc, a) => { (acc[a.category] ||= []).push(a); return acc }, {})
  const categories = Object.keys(parCategorie).sort((a, b) => parCategorie[b].length - parCategorie[a].length)
  const recits = ARTICLES.filter((a) => /intervention|chantier|nacelle|diogene|cheminee|sommier|personne-agee|punaises-mortes|grosse-infestation|airbnb-saint-maur|gretz|tuile|foyer/.test(a.slug))
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'ProfilePage', '@id': `${SITE_URL}/auteur/houssem-hattab`, url: `${SITE_URL}/auteur/houssem-hattab`, name: 'Houssem Hattab', mainEntity: { '@id': GERANT['@id'] } },
    { ...GERANT, url: `${SITE_URL}/auteur/houssem-hattab` },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` }, { '@type': 'ListItem', position: 3, name: 'Houssem Hattab', item: `${SITE_URL}/auteur/houssem-hattab` }] },
  ] }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: '#080808' }}>
        <section className="pt-10 md:pt-14 pb-10 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <figure>
              <img src="/equipe/houssem-hattab-gerant.jpg" alt="Houssem Hattab en tenue de protection lors d’une dératisation" width={1200} height={900} className="w-full h-auto rounded-2xl" />
              <figcaption className="text-white/60 text-xs mt-2 text-center">Sur un chantier de dératisation dans un logement très encombré.</figcaption>
            </figure>
            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F0562A' }}>Auteur · Gérant · Technicien</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">Houssem Hattab, <span style={{ color: '#F0562A' }}>5 ans de terrain</span> contre les nuisibles</h1>
              <p className="text-white/75 leading-relaxed mb-4">Gérant d’<a href="/qui-sommes-nous" className="underline underline-offset-2" style={{ color: '#F0562A' }}>Allo Nuisible IDF</a>, à Saint-Maurice (94). Il intervient lui-même sur les chantiers et écrit les {ARTICLES.length} guides et récits du <a href="/blog" className="underline underline-offset-2" style={{ color: '#F0562A' }}>blog</a>, à partir de ce qu’il voit chez les clients.</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="tel:+33768077219" className="inline-flex items-center gap-2 font-black text-white px-5 py-3 rounded-xl text-sm" style={{ background: '#B8330D' }}><Phone className="w-4 h-4" aria-hidden="true" />07 68 07 72 19</a>
                <BoutonWhatsApp sujet="question à Houssem Hattab" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Son métier au quotidien</h2>
            <p className="text-white/70 leading-relaxed mb-4">Une journée type commence souvent par un appel ou une photo sur WhatsApp : des crottes dans une cuisine à Charenton, des piqûres au réveil à Vincennes, un nid sous une toiture à Nogent. Houssem Hattab identifie le nuisible, annonce le prix, puis part avec l’équipe depuis Saint-Maurice.</p>
            <p className="text-white/70 leading-relaxed">Sur place, l’essentiel du travail est une recherche : où les rats passent, dans quelle latte les punaises pondent, par quelle gaine les cafards arrivent. C’est cette recherche, plus que le produit, qui fait qu’un traitement tient dans le temps. C’est aussi ce qu’il raconte dans les récits de chantier, photos et vidéos à l’appui.</p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">Ses <span style={{ color: '#F0562A' }}>spécialités</span></h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SPECIALITES.map((s) => (
                <li key={s.href}><a href={s.href} className="block h-full rounded-2xl p-5 hover:bg-white/[0.06]" style={card}>
                  <h3 className="font-black text-white mb-1 flex items-center gap-1.5">{s.t}<ArrowRight className="w-4 h-4" style={{ color: '#F0562A' }} aria-hidden="true" /></h3>
                  <p className="text-white/70 text-sm leading-relaxed">{s.x}</p>
                </a></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-12" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">Sa façon de travailler</h2>
            <ul className="grid gap-3">
              {PRINCIPES.map((p) => (
                <li key={p.t} className="rounded-2xl p-5" style={card}><h3 className="font-black text-white mb-1">{p.t}</h3><p className="text-white/70 text-sm leading-relaxed">{p.x}</p></li>
              ))}
            </ul>
          </div>
        </section>

        {recits.length > 0 && (
          <section className="px-4 py-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3 text-center">Ses récits de chantier</h2>
              <p className="text-white/65 text-center mb-6">Des interventions réelles, racontées étape par étape, avec photos et vidéos.</p>
              <ul className="grid gap-2">
                {recits.map((a) => <li key={a.slug}><a href={`/blog/${a.slug}`} className="flex justify-between gap-3 rounded-xl px-4 py-3 text-white/85 text-sm hover:text-white" style={card}><span>{a.title}</span><ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: '#F0562A' }} aria-hidden="true" /></a></li>)}
              </ul>
            </div>
          </section>
        )}

        <section className="px-4 py-12" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3 text-center">Tous ses articles ({ARTICLES.length})</h2>
            <p className="text-white/65 text-center mb-8">Classés par sujet. Les sources officielles sont citées en bas de chaque article.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {categories.map((c) => (
                <div key={c} className="rounded-2xl p-5" style={card}>
                  <h3 className="font-black text-white mb-3">{c} <span className="text-white/60 font-normal">({parCategorie[c].length})</span></h3>
                  <ul className="grid gap-1.5 text-sm">
                    {parCategorie[c].map((a) => <li key={a.slug}><a href={`/blog/${a.slug}`} className="text-white/75 hover:text-white underline underline-offset-2 decoration-white/20">{a.title}</a></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqBloc titre="Questions sur l’auteur" items={FAQ} page="/auteur/houssem-hattab" />
      </main>
      <Footer />
    </>
  )
}
