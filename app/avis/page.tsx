// Page « Avis clients » (20/11/2026, demande de l'utilisateur après l'audit face à Express).
// Uniquement les vrais avis de la fiche Google (lib/avis-google.ts), copiés mot pour mot. Pas d'AggregateRating dans les
// données structurées : Google interdit de reprendre des avis recueillis sur un autre site.
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqBloc from '@/components/FaqBloc'
import { BoutonWhatsApp } from '@/components/LienWhatsApp'
import { ExternalLink, Phone, MapPin } from 'lucide-react'
import { pageMetadata, SITE_URL } from '@/lib/seo'
import { AVIS_GOOGLE, FICHE_GOOGLE_URL, NOTE_GOOGLE, type CleAvis } from '@/lib/avis-google'

const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

export const metadata = pageMetadata({
  title: `Avis clients : ${NOTE_GOOGLE.note}/5 sur ${NOTE_GOOGLE.nombre} avis Google`,
  description: `Les avis de nos clients sur Google : punaises de lit, souris, rats, cafards à Vincennes, Saint-Maur, Saint-Maurice. Note ${NOTE_GOOGLE.note}/5, avis reproduits mot pour mot.`,
  path: '/avis',
})

const GROUPES: { titre: string; intro: string; cles: CleAvis[]; liens: { href: string; label: string }[] }[] = [
  { titre: 'Avis sur nos traitements contre les punaises de lit', intro: 'Les punaises de lit demandent du sérieux : inspection, 2 passages, conseils de préparation. Voici ce qu’en disent nos clients.', cles: ['jo', 'lina'],
    liens: [{ href: '/services/punaises-de-lit', label: 'Notre traitement des punaises de lit' }, { href: '/punaises-de-lit/vincennes', label: 'Punaises de lit à Vincennes' }, { href: '/tarifs/punaises-de-lit', label: 'Prix d’un traitement des punaises de lit' }] },
  { titre: 'Avis sur nos interventions contre les souris et les rats', intro: 'Souris dans les combles, infestation importante, dératisation en 2 passages : la plupart de nos avis concernent les rongeurs.', cles: ['tarek', 'samy', 'said', 'lauren', 'pascal'],
    liens: [{ href: '/services/deratisation', label: 'Notre dératisation' }, { href: '/souris/saint-maur-des-fosses', label: 'Souris à Saint-Maur-des-Fossés' }, { href: '/souris/saint-maurice', label: 'Souris à Saint-Maurice' }, { href: '/deratisation/vincennes', label: 'Dératisation à Vincennes' }, { href: '/tarifs/deratisation', label: 'Prix d’une dératisation' }] },
  { titre: 'Avis sur nos traitements contre les cafards', intro: 'Ce client avait des cafards qui arrivaient par les bouches d’aération. Il a publié ses photos avec son avis, que nous reprenons avec son accord.', cles: ['gaetan'],
    liens: [{ href: '/services/cafards-blattes', label: 'Notre traitement des cafards' }, { href: '/tarifs/cafards', label: 'Prix d’un traitement des cafards' }] },
  { titre: 'Avis sur la qualité de nos interventions', intro: 'Rapidité, explications, honnêteté : ce que nos clients retiennent au-delà du nuisible.', cles: ['christine', 'lisa'],
    liens: [{ href: '/qui-sommes-nous', label: 'Qui sommes-nous' }, { href: '/auteur/houssem-hattab', label: 'Houssem Hattab, gérant' }] },
]

const CE_QUI_REVIENT = [
  { t: 'La rapidité', x: 'Plusieurs clients parlent d’une intervention rapide. L’un d’eux, à Saint-Maur-des-Fossés, écrit que nous nous sommes « déplacés en moins d’une heure ».' },
  { t: 'Les explications', x: 'Les clients citent des explications « claires et rassurantes », un technicien qui « a pris le temps de bien tout expliquer » et de « bons conseils ».' },
  { t: 'Le résultat', x: '« Plus aucune trace de souris », « je n’ai plus vu une seule souris », « plus eu aucun problème » : les avis décrivent le résultat après notre passage.' },
  { t: 'La disponibilité', x: 'Un client raconte que nos techniciens sont revenus à 21 h parce qu’il restait quelques cafards.' },
  { t: 'Les animaux et la famille', x: 'À Vincennes, une cliente souligne les précautions expliquées pour ses animaux de compagnie pendant le traitement des punaises de lit.' },
  { t: 'Le prix et la garantie', x: 'Pour une dératisation en 2 passages à Vincennes, un client parle d’un « prix très correct et garantie ».' },
]

const FAQ = [
  { q: 'Où lire tous les avis sur Allo Nuisible IDF ?', a: `Sur notre fiche Google, qui compte ${NOTE_GOOGLE.nombre} avis pour une note de ${NOTE_GOOGLE.note}/5. Cette page reprend mot pour mot une sélection de ces avis, classés par nuisible.` },
  { q: 'Les avis de cette page sont-ils vrais ?', a: 'Oui. Ils sont copiés mot pour mot depuis notre fiche Google, avec le prénom et l’initiale du client. Nous n’en écrivons aucun et nous n’en modifions aucun.' },
  { q: 'Comment laisser un avis après une intervention ?', a: 'Ouvrez notre fiche Google, appuyez sur « Avis » puis « Écrire un avis ». Indiquez si possible le nuisible traité et votre ville : cela aide les personnes qui ont le même problème que vous.' },
  { q: 'Que faites-vous si un client n’est pas satisfait ?', a: 'Nous le rappelons pour comprendre ce qui n’a pas fonctionné. Si les nuisibles reviennent pendant la garantie (1 an, 3 mois pour les nids de guêpes et de frelons), nous revenons sans supplément.' },
  { q: 'Pourquoi tant d’avis parlent-ils de souris ?', a: 'Parce que les souris et les rats sont la demande la plus fréquente autour de notre base de Saint-Maurice : Vincennes, Saint-Maur-des-Fossés, Saint-Maurice, Maisons-Alfort.' },
  { q: 'Peut-on voir des photos de vos chantiers ?', a: 'Oui, sur notre page « Nos interventions en images » et dans les récits de chantier du blog, avec photos et vidéos prises par nos techniciens.' },
]

export default function AvisPage() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${SITE_URL}/avis`, url: `${SITE_URL}/avis`, name: 'Avis clients', about: { '@id': `${SITE_URL}/#entreprise` } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Avis clients', item: `${SITE_URL}/avis` }] },
  ] }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: '#080808' }}>
        <section className="pt-10 md:pt-14 pb-10 px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#F0562A' }}>Avis clients vérifiables sur Google</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5 max-w-3xl mx-auto">
            Nos avis clients : <span style={{ color: '#F0562A' }}>{NOTE_GOOGLE.note}/5</span> sur {NOTE_GOOGLE.nombre} avis Google
          </h1>
          <p className="text-yellow-400 text-2xl mb-3" aria-hidden="true">★★★★★</p>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-6">Punaises de lit à Vincennes, souris à Saint-Maur-des-Fossés et à Saint-Maurice, cafards par les bouches d’aération : voici ce que nos clients ont écrit sur Google, <strong className="text-white">mot pour mot</strong>.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={FICHE_GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-black text-white px-6 py-3.5 rounded-xl text-sm" style={{ background: '#B8330D' }}>
              Lire les {NOTE_GOOGLE.nombre} avis sur Google <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="tel:+33768077219" className="inline-flex items-center gap-2 font-bold text-white px-6 py-3.5 rounded-xl text-sm" style={card}><Phone className="w-4 h-4" aria-hidden="true" />07 68 07 72 19</a>
            <BoutonWhatsApp sujet="devis" />
          </div>
        </section>

        <section className="px-4 py-12" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">Ce qui revient le plus dans <span style={{ color: '#F0562A' }}>nos avis</span></h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CE_QUI_REVIENT.map((c) => (
                <li key={c.t} className="rounded-2xl p-5" style={card}>
                  <h3 className="font-black text-white mb-1">{c.t}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{c.x}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {GROUPES.map((g, i) => (
          <section key={g.titre} className="px-4 py-12" style={{ background: i % 2 ? '#0d0d0d' : '#0a0a0a' }}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3 text-center">{g.titre}</h2>
              <p className="text-white/65 text-center mb-8 max-w-2xl mx-auto">{g.intro}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {g.cles.map((k) => {
                  const a = AVIS_GOOGLE[k]
                  return (
                    <figure key={k} className="rounded-2xl p-5 flex flex-col gap-3" style={card}>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-yellow-400" aria-label="5 étoiles sur 5">★★★★★</span>
                        <span className="text-xs text-white/60">{a.mois ?? 'septembre 2026'}</span>
                      </div>
                      <blockquote className="text-white/85 text-sm leading-relaxed">« {a.texte} »</blockquote>
                      <figcaption className="text-sm"><strong className="text-white">{a.auteur}</strong> <span className="text-white/60">· {a.sujet}</span></figcaption>
                    </figure>
                  )
                })}
              </div>
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-6 text-sm">
                {g.liens.map((l) => <li key={l.href}><a href={l.href} className="underline underline-offset-2" style={{ color: '#F0562A' }}>{l.label}</a></li>)}
              </ul>
            </div>
          </section>
        ))}

        <section className="px-4 py-12" style={{ background: '#080808' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Vous êtes client ? <span style={{ color: '#F0562A' }}>Laissez votre avis</span></h2>
            <ol className="text-left grid gap-3 mb-6">
              {['Ouvrez notre fiche Google (bouton ci-dessous).', 'Appuyez sur « Avis », puis « Écrire un avis ».', 'Indiquez le nuisible et votre ville, par exemple « souris à Créteil » : votre avis aidera les voisins qui ont le même problème.', 'Ajoutez une photo si vous en avez une.'].map((t, i) => (
                <li key={t} className="flex gap-3 rounded-xl px-4 py-3 text-white/80 text-sm" style={card}><span className="font-black" style={{ color: '#F0562A' }}>{i + 1}.</span>{t}</li>
              ))}
            </ol>
            <a href={FICHE_GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-black text-white px-6 py-3.5 rounded-xl text-sm" style={{ background: '#B8330D' }}>
              Écrire un avis sur Google <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
            <p className="text-white/60 text-sm mt-6 flex items-center justify-center gap-1.5"><MapPin className="w-4 h-4" aria-hidden="true" />Allo Nuisible IDF, 6 bis rue du Val d’Osne, 94410 Saint-Maurice</p>
          </div>
        </section>

        <FaqBloc titre="Questions sur nos avis" items={FAQ} page="/avis" />
      </main>
      <Footer />
    </>
  )
}
