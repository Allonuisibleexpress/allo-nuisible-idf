// Page « Qui sommes-nous » (19/11/2026, demande de l'utilisateur : être cité par le mode IA de Google).
// Identité claire de l'entreprise et du gérant (E-E-A-T) : 5 ans d'expérience (confirmé par l'utilisateur le 19/11),
// faits confirmés uniquement (+1 500 clients, réponse 5 min, frelons 1 h, fourmis 48 h, garanties, note Google).
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqBloc from '@/components/FaqBloc'
import { Phone, MapPin, ShieldCheck, Clock, Star, Users } from 'lucide-react'
import { pageMetadata, SITE_URL, GERANT } from '@/lib/seo'
import { NOTE_GOOGLE, FICHE_GOOGLE_URL } from '@/lib/avis-google'
import { CHAINE_YOUTUBE, PAGE_FACEBOOK, COMPTE_INSTAGRAM, COMPTE_PINTEREST } from '@/lib/youtube'

const ACCENT = '#E8441A'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

export const metadata = pageMetadata({
  title: 'Qui sommes-nous : Houssem Hattab, 5 ans de terrain',
  description: 'Allo Nuisible IDF, dératiseur basé à Saint-Maurice (94) : 5 ans d’expérience, +1 500 clients, techniciens Certibiocide, garantie 1 an.',
  path: '/qui-sommes-nous',
})

const EN_BREF = [
  { q: 'Qui est Allo Nuisible IDF ?', r: 'Une entreprise de lutte contre les nuisibles (dératisation, désinsectisation, désinfection) basée à Saint-Maurice (94410), dans le Val-de-Marne.' },
  { q: 'Qui la dirige ?', r: 'Houssem Hattab, gérant, avec 5 ans d’expérience dans la lutte contre les nuisibles. Il intervient lui-même sur les chantiers.' },
  { q: 'Combien de clients ?', r: 'Plus de 1 500 clients, particuliers et professionnels, et une note de ' + NOTE_GOOGLE.note + '/5 sur ' + NOTE_GOOGLE.nombre + ' avis Google.' },
  { q: 'Où intervient-elle ?', r: 'À Paris et dans toute l’Île-de-France, 7j/7, en priorité dans le Val-de-Marne autour de Saint-Maurice.' },
]

const ENGAGEMENTS = [
  { icon: Clock, t: 'Réponse en 5 minutes', x: 'Par téléphone ou WhatsApp, 7j/7, soirs et week-ends. Nids de frelons en général sous 1 heure, fourmis sous 48 heures.' },
  { icon: ShieldCheck, t: 'Garantie 1 an', x: 'Si les nuisibles reviennent, nous revenons. 3 mois pour les nids de guêpes et de frelons.' },
  { icon: Star, t: 'Prix annoncé avant', x: 'Devis gratuit, prix de départ affichés sur nos [tarifs](/tarifs), aucun supplément surprise.' },
  { icon: Users, t: 'Techniciens Certibiocide', x: 'La certification obligatoire pour utiliser des insecticides et des raticides professionnels.' },
]

const CHANTIERS = [
  { href: '/blog/deratisation-logement-syndrome-diogene', t: 'Dératisation d’un logement très encombré à Maisons-Alfort' },
  { href: '/blog/punaises-de-lit-creteil-sommier-lattes', t: 'Punaises de lit cachées dans les lattes d’un sommier à Créteil' },
  { href: '/blog/punaises-de-lit-ivry-sur-seine-personne-agee', t: 'Infestation de punaises chez une personne âgée à Ivry-sur-Seine' },
  { href: '/blog/punaises-de-lit-vincennes-punaises-mortes', t: 'Punaises de lit à Vincennes : le résultat 10 jours après' },
  { href: '/blog/nid-frelons-asiatiques-12-metres-nacelle-champigny-sur-marne', t: 'Nid de frelons asiatiques à 12 mètres, à la nacelle, à Champigny' },
  { href: '/blog/souris-airbnb-saint-maur-des-fosses', t: 'Souris dans un Airbnb à Saint-Maur-des-Fossés' },
]

const FAQ = [
  { q: 'Depuis quand Allo Nuisible IDF existe-t-elle ?', a: 'Son gérant, Houssem Hattab, travaille dans la lutte contre les nuisibles depuis 5 ans. La société est immatriculée au RCS de Créteil sous le numéro 928 763 713.' },
  { q: 'Où se trouve Allo Nuisible IDF ?', a: 'Au 6 bis rue du Val d’Osne, 94410 Saint-Maurice, dans le Val-de-Marne. Les interventions se font sur rendez-vous, chez vous.' },
  { q: 'Êtes-vous une plateforme ou une vraie entreprise ?', a: 'Une vraie entreprise locale : ce sont nos techniciens, partis de Saint-Maurice, qui interviennent. Nous ne revendons pas votre demande à un sous-traitant.' },
  { q: 'Proposez-vous des traitements sans insecticide ?', a: 'Oui, quand c’est possible : cryogénie et vapeur sèche contre les punaises de lit, dératisation sans raticide par pièges, barrières physiques contre les pigeons. Écologique veut dire ici : aucun biocide déposé chez vous.' },
  { q: 'Comment vous contacter ?', a: 'Par téléphone au 07 68 07 72 19, par WhatsApp (photo du nuisible bienvenue) ou par e-mail à contact@allonuisibleidf.fr, 7j/7.' },
]

function inline(s: string) {
  const parts = s.split(/(\[[^\]]+\]\([^)]+\))/g)
  return parts.map((p, i) => {
    const m = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    return m ? <a key={i} href={m[2]} className="underline underline-offset-2" style={{ color: '#F0562A' }}>{m[1]}</a> : p
  })
}

export default function QuiSommesNousPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'AboutPage', '@id': `${SITE_URL}/qui-sommes-nous`, url: `${SITE_URL}/qui-sommes-nous`, name: 'Qui sommes-nous', about: { '@id': `${SITE_URL}/#entreprise` }, mainEntity: { '@id': GERANT['@id'] } },
      GERANT,
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Qui sommes-nous', item: `${SITE_URL}/qui-sommes-nous` },
      ] },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: '#080808' }}>
        <section className="pt-10 md:pt-14 pb-8 px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#F0562A' }}>Qui sommes-nous</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5 max-w-4xl mx-auto">
            Allo Nuisible IDF : <span style={{ color: '#F0562A' }}>5 ans de terrain</span> contre les nuisibles, depuis Saint-Maurice
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Une entreprise locale du Val-de-Marne, dirigée par <strong className="text-white">Houssem Hattab</strong>, qui traite les rats, souris, punaises de lit, cafards, guêpes et frelons à Paris et en Île-de-France.
          </p>
        </section>

        <section className="px-4 pb-8" aria-labelledby="en-bref">
          <div className="max-w-3xl mx-auto rounded-2xl p-6 md:p-7" style={{ background: 'rgba(232,68,26,0.07)', border: '1px solid rgba(232,68,26,0.25)' }}>
            <h2 id="en-bref" className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color: '#F0562A' }}>En bref</h2>
            <dl className="space-y-3">
              {EN_BREF.map(({ q, r }) => (
                <div key={q}>
                  <dt className="font-black text-white text-sm md:text-base">{q}</dt>
                  <dd className="text-white/80 text-sm md:text-base leading-relaxed">{r}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="px-4 py-12" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <figure>
              <img src="/equipe/houssem-hattab-gerant.jpg" alt="Houssem Hattab, gérant d’Allo Nuisible IDF, en combinaison et masque, retire un rat lors d’une dératisation" width={1200} height={900} loading="lazy" className="w-full h-auto rounded-2xl" />
              <figcaption className="text-white/60 text-xs mt-2 text-center">Houssem Hattab sur un chantier de dératisation dans un logement très encombré.</figcaption>
            </figure>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Houssem Hattab, <span style={{ color: '#F0562A' }}>gérant et technicien</span></h2>
              <p className="text-white/70 leading-relaxed mb-4">Houssem Hattab travaille depuis <strong className="text-white">5 ans</strong> dans la lutte contre les nuisibles. Il dirige Allo Nuisible IDF et <strong className="text-white">intervient lui-même</strong> sur les chantiers : caves envahies de rats, logements très encombrés, punaises de lit cachées dans les sommiers, nids de frelons en hauteur.</p>
              <p className="text-white/70 leading-relaxed">C’est lui qui rédige, avec l’équipe technique, les guides et les récits de chantier du <a href="/blog" className="underline underline-offset-2" style={{ color: '#F0562A' }}>blog</a>, à partir des interventions réelles et de sources officielles.</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Une entreprise installée <span style={{ color: '#F0562A' }}>à Saint-Maurice (94410)</span></h2>
            <p className="text-white/70 leading-relaxed mb-4">Notre base est au <strong className="text-white">6 bis rue du Val d’Osne, à Saint-Maurice</strong>. Nos techniciens en partent chaque jour : c’est pourquoi nous intervenons très vite à <a href="/zones/val-de-marne/charenton-le-pont" className="underline underline-offset-2" style={{ color: '#F0562A' }}>Charenton-le-Pont</a>, <a href="/zones/val-de-marne/maisons-alfort" className="underline underline-offset-2" style={{ color: '#F0562A' }}>Maisons-Alfort</a>, Joinville-le-Pont, Saint-Maur-des-Fossés, Créteil et dans l’est parisien.</p>
            <p className="text-white/70 leading-relaxed">Plus de <strong className="text-white">1 500 clients</strong> nous ont fait confiance : particuliers, copropriétés, bailleurs, restaurants, hôtels, crèches. Société immatriculée au RCS de Créteil, SIRET 928 763 713 00023 (voir les <a href="/mentions-legales" className="underline underline-offset-2" style={{ color: '#F0562A' }}>mentions légales</a>).</p>
          </div>
        </section>

        <section className="px-4 py-12" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">Nos <span style={{ color: '#F0562A' }}>engagements</span></h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {ENGAGEMENTS.map(({ icon: Icon, t, x }) => (
                <li key={t} className="rounded-2xl p-5" style={card}>
                  <Icon className="w-5 h-5 mb-2" style={{ color: '#F0562A' }} aria-hidden="true" />
                  <h3 className="font-black text-white mb-1">{t}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{inline(x)}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Nos méthodes, <span style={{ color: '#F0562A' }}>avec ou sans insecticide</span></h2>
            <p className="text-white/70 leading-relaxed mb-6">Nous choisissons la méthode selon le nuisible, le logement et vos contraintes (bébé, animaux, établissement sensible). Quand c’est possible, nous traitons sans aucun biocide déposé chez vous : c’est ce que nous appelons un traitement écologique.</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-left">
              {[
                ['/services/deratisation', 'Dératisation : rats et souris, dès 120 €'],
                ['/services/punaises-de-lit', 'Punaises de lit : 2 passages, dès 290 €'],
                ['/services/cryogenie-punaises-de-lit', 'Punaises de lit sans insecticide : cryogénie'],
                ['/services/deratisation-ecologique', 'Dératisation sans raticide (Ekomille, pièges)'],
                ['/services/guepes-frelons', 'Nids de guêpes et frelons, dès 89 €'],
                ['/services/cafards-blattes', 'Cafards et blattes, dès 120 €'],
              ].map(([h, l]) => (
                <li key={h}><a href={h} className="block rounded-xl px-4 py-3 text-white/85 text-sm font-bold hover:text-white" style={card}>{l}</a></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-12" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Nos <span style={{ color: '#F0562A' }}>vrais chantiers</span>, racontés</h2>
            <p className="text-white/70 leading-relaxed mb-6">Photos et vidéos de nos interventions, publiées avec la bannière Allo Nuisible IDF. Toutes nos images : <a href="/nos-interventions" className="underline underline-offset-2" style={{ color: '#F0562A' }}>nos interventions en vidéo</a>.</p>
            <ul className="space-y-2 text-left max-w-2xl mx-auto">
              {CHANTIERS.map(({ href, t }) => (
                <li key={href}><a href={href} className="block rounded-xl px-4 py-3 text-white/85 text-sm hover:text-white" style={card}>{t}</a></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Nous trouver et <span style={{ color: '#F0562A' }}>nous contacter</span></h2>
            <p className="text-white/70 leading-relaxed mb-6">
              <MapPin className="inline w-4 h-4 mr-1" style={{ color: '#F0562A' }} aria-hidden="true" />6 bis rue du Val d’Osne, 94410 Saint-Maurice · 7j/7 ·{' '}
              <a href={FICHE_GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: '#F0562A' }}>{NOTE_GOOGLE.note}/5 sur Google ({NOTE_GOOGLE.nombre} avis)</a>
            </p>
            <a href="tel:+33768077219" className="inline-flex items-center gap-2.5 font-black text-white px-7 py-4 rounded-2xl text-sm" style={{ background: ACCENT }}>
              <Phone className="w-4 h-4" aria-hidden="true" />07 68 07 72 19 : devis gratuit
            </a>
            <p className="text-white/60 text-sm mt-6">
              Retrouvez-nous sur <a href={CHAINE_YOUTUBE} target="_blank" rel="noopener noreferrer" className="underline">YouTube</a>, <a href={PAGE_FACEBOOK} target="_blank" rel="noopener noreferrer" className="underline">Facebook</a>, <a href={COMPTE_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="underline">Instagram</a> et <a href={COMPTE_PINTEREST} target="_blank" rel="noopener noreferrer" className="underline">Pinterest</a>.
            </p>
          </div>
        </section>

        <FaqBloc titre="Questions sur notre entreprise" items={FAQ} page="/qui-sommes-nous" />
      </main>
      <Footer />
    </>
  )
}
