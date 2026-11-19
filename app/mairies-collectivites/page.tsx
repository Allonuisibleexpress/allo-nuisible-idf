// Page « Mairies, collectivités et bailleurs » (20/11/2026, demande de l'utilisateur après l'audit face à Express,
// « essaie de ne pas trop copier »). Angle propre : les situations que rencontre une commune du Val-de-Marne, notre
// vrai chantier confié par une mairie (logement très encombré à Maisons-Alfort), ce que nous fournissons.
// Pas de chiffre inventé, pas d'engagement non confirmé (pas de délai de paiement, pas de plateforme citée).
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqBloc from '@/components/FaqBloc'
import { BoutonWhatsApp } from '@/components/LienWhatsApp'
import { Phone, ArrowRight, FileText, ShieldCheck, Clock, ClipboardList } from 'lucide-react'
import { pageMetadata, SITE_URL } from '@/lib/seo'

const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }
const gras = (t: string) => t.split(/(\*\*[^*]+\*\*)/g).map((m, k) => (m.startsWith('**') ? <strong key={k} className="text-white">{m.slice(2, -2)}</strong> : m))

export const metadata = pageMetadata({
  title: 'Mairies et collectivités : dératisation, frelons, 94',
  description: 'Dératisation, nids de frelons asiatiques, chenilles, pigeons, logements très encombrés : interventions pour les mairies, bailleurs et établissements publics d’Île-de-France.',
  path: '/mairies-collectivites',
})

const SITUATIONS = [
  { t: 'Rats sur l’espace public', h: '/services/deratisation', x: 'Square, berges, abords d’un marché ou d’une école : la commune est compétente sur le domaine public. Nous posons des **postes d’appâtage sécurisés et numérotés**, ou des pièges sans raticide près des aires de jeux, puis nous assurons le suivi avec un **registre des passages**.' },
  { t: 'Logement très encombré ou insalubre', h: '/blog/deratisation-logement-syndrome-diogene', x: 'À **Maisons-Alfort**, une mairie nous a confié un logement envahi par les déchets et par les rats. Dératisation d’abord, puis débarras, nettoyage et désinfection, en lien avec les services municipaux. Le récit complet, photos et vidéos à l’appui, est sur notre blog.' },
  { t: 'Nids de frelons asiatiques', h: '/services/guepes-frelons', x: 'Le frelon asiatique est classé **danger sanitaire de 2e catégorie** depuis 2012. Nous détruisons les nids dans les arbres des parcs, les cours d’école, les cimetières et les toitures de bâtiments publics, à la perche jusqu’à 23 m, en général sous 1 heure.' },
  { t: 'Chenilles processionnaires', h: '/services/chenilles-processionnaires', x: 'Depuis 2022, les chenilles processionnaires du pin et du chêne figurent dans le **Code de la santé publique** parmi les espèces nuisibles à la santé humaine. Retrait des nids en hiver, écopièges sur les troncs des parcs, des écoles et des résidences.' },
  { t: 'Pigeons sur les bâtiments publics', h: '/services/pigeons', x: 'Mairie, gymnase, église, préau, halle de marché : **pics, filets et nettoyage des fientes**, des barrières physiques qui ne tuent pas les oiseaux.' },
  { t: 'Punaises de lit dans un hébergement', h: '/services/punaises-de-lit', x: 'Foyer, résidence, centre d’hébergement d’urgence : traitement **chambre par chambre**, possible **sans insecticide** par cryogénie. Nous avons traité les lits à barreaux d’un établissement pour tout-petits par le froid.' },
  { t: 'Écoles, crèches, cantines', h: '/services/traitements-sans-produit-chimique', x: 'Interventions **hors présence des enfants** (mercredi, vacances, soirée), méthodes sans biocide quand elles suffisent : pièges contre les rongeurs, cryogénie et vapeur sèche contre les insectes.' },
  { t: 'Cafards dans les logements sociaux', h: '/services/cafards-blattes', x: 'Pour un bailleur, traiter un seul logement ne règle rien : les blattes circulent par les colonnes. Nous traitons **les logements touchés et leurs voisins**, avec un rapport par logement.' },
]

const FOURNI = [
  { i: FileText, t: 'Devis détaillé', x: 'Poste par poste : nombre de passages, méthode, produits envisagés, délais.' },
  { i: ClipboardList, t: 'Rapport d’intervention', x: 'Zones traitées, produits utilisés, observations, recommandations, photos si besoin.' },
  { i: ShieldCheck, t: 'Attestation', x: 'Pour vos dossiers, un contrôle sanitaire ou un échange avec un propriétaire.' },
  { i: Clock, t: '7j/7, sans majoration', x: 'Y compris le soir et le week-end, au même prix, quand le site doit être vide.' },
]

const DEROULE = [
  'Vous nous signalez la situation : téléphone, e-mail ou photo sur WhatsApp.',
  'Visite de repérage si nécessaire, gratuite, avec un agent de la collectivité.',
  'Devis détaillé, adapté à vos règles d’achat.',
  'Intervention à la date convenue, hors présence du public si besoin.',
  'Rapport, attestation, et passages de contrôle prévus au devis.',
  'Garantie 1 an (3 mois pour les nids de guêpes et de frelons).',
]

const FAQ = [
  { q: 'Qui doit traiter les rats sur la voie publique ?', a: 'Sur le domaine public, c’est la commune, au titre des pouvoirs de police du maire et du règlement sanitaire départemental. Dans une propriété privée, c’est le propriétaire ou l’occupant.' },
  { q: 'Pouvez-vous intervenir dans une école ou une crèche ?', a: 'Oui, en dehors de la présence des enfants, avec des méthodes sans biocide quand elles suffisent (pièges, cryogénie, vapeur sèche), et des postes sécurisés inaccessibles aux enfants sinon.' },
  { q: 'Intervenez-vous pour un logement très encombré signalé par la mairie ?', a: 'Oui. Nous l’avons fait à Maisons-Alfort : dératisation, débarras, nettoyage et désinfection, en lien avec les services de la ville.' },
  { q: 'Un nid de frelons asiatiques dans un parc : en combien de temps ?', a: 'En général sous 1 heure à proximité de Saint-Maurice, 7j/7. La perche atteint 23 m ; au-delà, une intervention en hauteur est étudiée sur devis.' },
  { q: 'Fournissez-vous un rapport et une attestation ?', a: 'Oui, après chaque intervention : zones traitées, méthode, produits, recommandations. L’attestation peut être jointe à vos dossiers.' },
  { q: 'Travaillez-vous avec les bailleurs sociaux ?', a: 'Oui, notamment contre les cafards et les punaises de lit, avec un traitement coordonné des logements touchés et de leurs voisins.' },
  { q: 'Le prix est-il plus élevé le soir ou le week-end ?', a: 'Non, aucune majoration la nuit, le week-end ni les jours fériés.' },
]

export default function MairiesPage() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', name: 'Lutte contre les nuisibles pour les collectivités', provider: { '@id': `${SITE_URL}/#entreprise` }, areaServed: { '@type': 'AdministrativeArea', name: 'Île-de-France' }, audience: { '@type': 'Audience', audienceType: 'Mairies, collectivités, bailleurs sociaux, établissements publics' } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Mairies et collectivités', item: `${SITE_URL}/mairies-collectivites` }] },
  ] }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: '#080808' }}>
        <section className="pt-10 md:pt-14 pb-10 px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#F0562A' }}>Mairies · Collectivités · Bailleurs · Établissements publics</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5 max-w-4xl mx-auto">Nuisibles sur votre commune : <span style={{ color: '#F0562A' }}>une entreprise du 94 à vos côtés</span></h1>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-6">Rats dans un square, frelons asiatiques dans une cour d’école, logement très encombré signalé par un voisin : nous intervenons pour les services municipaux, les bailleurs et les établissements publics, depuis notre base de <strong className="text-white">Saint-Maurice (94)</strong>.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+33768077219" className="inline-flex items-center gap-2 font-black text-white px-6 py-3.5 rounded-xl text-sm" style={{ background: '#B8330D' }}><Phone className="w-4 h-4" aria-hidden="true" />07 68 07 72 19</a>
            <a href="mailto:contact@allonuisibleidf.fr" className="inline-flex items-center gap-2 font-bold text-white px-6 py-3.5 rounded-xl text-sm" style={card}>contact@allonuisibleidf.fr</a>
            <BoutonWhatsApp sujet="collectivité" />
          </div>
        </section>

        <section className="px-4 py-12" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">Les situations que nous traitons <span style={{ color: '#F0562A' }}>pour les collectivités</span></h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {SITUATIONS.map((s) => (
                <li key={s.t} className="rounded-2xl p-5 flex flex-col gap-2" style={card}>
                  <h3 className="font-black text-white">{s.t}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{gras(s.x)}</p>
                  <a href={s.h} className="text-sm font-bold inline-flex items-center gap-1 mt-auto" style={{ color: '#F0562A' }}>En savoir plus <ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">Ce que nous vous remettons</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FOURNI.map(({ i: I, t, x }) => (
                <li key={t} className="rounded-2xl p-5" style={card}><I className="w-5 h-5 mb-2" style={{ color: '#F0562A' }} aria-hidden="true" /><h3 className="font-black text-white mb-1">{t}</h3><p className="text-white/70 text-sm leading-relaxed">{x}</p></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-12" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">Comment se passe une intervention pour une collectivité</h2>
            <ol className="grid gap-3">
              {DEROULE.map((d, i) => <li key={d} className="flex gap-3 rounded-xl px-4 py-3 text-white/80 text-sm" style={card}><span className="font-black" style={{ color: '#F0562A' }}>{i + 1}.</span>{d}</li>)}
            </ol>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Le cadre : qui fait quoi</h2>
            <p className="text-white/70 leading-relaxed mb-4">Sur le <strong className="text-white">domaine public</strong> (voirie, parcs, bâtiments communaux), la lutte contre les rongeurs et les nuisibles relève de la commune, qui s’appuie sur les pouvoirs de police du maire et sur le <strong className="text-white">règlement sanitaire départemental</strong>. Dans une <strong className="text-white">propriété privée</strong>, c’est au propriétaire ou à l’occupant d’agir ; la mairie peut l’y inviter, ou intervenir quand la salubrité est en jeu.</p>
            <p className="text-white/70 leading-relaxed">Pour un <strong className="text-white">logement loué</strong>, la loi ELAN de 2018 a ajouté aux critères du logement décent l’absence d’infestation d’espèces nuisibles et parasites. Pour une <strong className="text-white">copropriété</strong>, les parties communes relèvent du syndic. Nous pouvons travailler avec chacun de ces interlocuteurs, et coordonner un traitement quand plusieurs sont concernés.</p>
          </div>
        </section>

        <section className="px-4 py-12" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Communes où nous intervenons le plus vite</h2>
            <p className="text-white/70 mb-6">Depuis Saint-Maurice : Charenton-le-Pont, Maisons-Alfort, Joinville-le-Pont, Saint-Maur-des-Fossés, Créteil, Alfortville, Vincennes, Saint-Mandé, Nogent-sur-Marne, Ivry-sur-Seine, et dans tout le Val-de-Marne et l’est parisien.</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[['/zones/val-de-marne', 'Val-de-Marne'], ['/zones/paris', 'Paris'], ['/zones/hauts-de-seine', 'Hauts-de-Seine'], ['/zones/seine-saint-denis', 'Seine-Saint-Denis'], ['/zones/essonne', 'Essonne'], ['/professionnels', 'Professionnels et entreprises']].map(([h, l]) => (
                <a key={h} href={h} className="text-sm text-white/80 hover:text-white rounded-full px-4 py-2" style={card}>{l}</a>
              ))}
            </div>
          </div>
        </section>

        <FaqBloc titre="Questions des collectivités" items={FAQ} page="/mairies-collectivites" />
      </main>
      <Footer />
    </>
  )
}
