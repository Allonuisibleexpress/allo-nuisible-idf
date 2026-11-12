import CyclePunaises from '@/components/CyclePunaises'
// Page « service + département » (/deratisation/val-de-marne…), même style que les pages ville (modèle du 09/11/2026).
import DeratEco from '@/components/DeratEco'
import { Phone, Camera, Star, ShieldCheck, Clock, BadgeCheck, MapPin, ArrowRight, Check } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BandeauDevis from '@/components/BandeauDevis'
import AvisDefilants from '@/components/AvisDefilants'
import SituationsVille from '@/components/SituationsVille'
import { EtapesVille, TarifsVille, WHATSAPP, schemaPrestataire, schemaOffre } from '@/components/VilleBlocs'
import { NOTE_GOOGLE, FICHE_GOOGLE_URL } from '@/lib/avis-google'
import { DEPS, SERVICES_DEP, DEP_SLUGS, type DepSlug, type ServiceDep } from '@/lib/departements-services'
import { codePostal } from '@/lib/codes-postaux'
import { REPERES } from '@/lib/reperes-villes'
import { pageMetadata, SITE_URL } from '@/lib/seo'
import CarteDepartement from '@/components/CarteDepartement'
import { ficheParId } from '@/lib/identifier-nuisibles'
import { SAISONS_FAQ } from '@/lib/saisons-faq'
import PhotosChantiers from '@/components/PhotosChantiers'
import { MEDIAS_DERATISATION, type PhotoKey } from '@/lib/photos-chantiers'
import { VILLES_PUNAISES } from '@/lib/villes-punaises'
import { VILLES_DERATISATION } from '@/lib/villes-deratisation'
import { VILLES_SOURIS } from '@/lib/villes-souris'
import { VILLES_CAFARDS } from '@/lib/villes-cafards'
import { VILLES_FRELONS, frelonsIndexee } from '@/lib/villes-frelons'
import { VILLES_PUCES } from '@/lib/villes-puces'

const ACCENT = '#E8441A'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }
const nf = (n: number) => n.toLocaleString('fr-FR')

// Nuisibles concernés, avec photo (fiches de la page « Identifier un nuisible »)
const NUISIBLES: Record<ServiceDep, string[]> = {
  deratisation: ['rat', 'souris'], souris: ['souris', 'rat'], punaises: ['punaise-de-lit', 'puce'],
  cafards: ['blatte-germanique', 'blatte-orientale'], frelons: ['frelon-asiatique', 'frelon-europeen', 'guepe'], puces: ['puce', 'acarien'],
}
// Vraies photos de chantier (celles des pages services), par nuisible
const CHANTIERS: Record<ServiceDep, PhotoKey[]> = {
  deratisation: MEDIAS_DERATISATION.photos.slice(0, 4),
  souris: ['sourisAirbnb', 'sourisGlu', 'rongeursGlu', 'ratPiege'],
  punaises: ['vincennesMortes1', 'creteilLattes1', 'cryoFoyer', 'litCryo'],
  cafards: ['cafardsSol', 'cafardsTiroir', 'cafardsTiroir2', 'cafardsMeuble'],
  frelons: ['frelonsPerche', 'frelonsArbre', 'nidGuepes', 'toit'],
  puces: [],
}

// À quelle saison ? (connaissances courantes, sans chiffre)
const SAISONS: Record<ServiceDep, (dans: string) => { t: string; x: string }[]> = {
  deratisation: (dans) => [
    { t: 'Automne et hiver', x: `Les rats et les souris cherchent la chaleur des bâtiments ${dans} : caves, cuisines, combles.` },
    { t: 'Printemps', x: 'Période de reproduction : une petite population peut vite grossir si on attend.' },
    { t: 'Toute l’année', x: 'Travaux, chantiers et égouts déplacent les colonies : un rat peut apparaître à tout moment.' },
  ],
  souris: (dans) => [
    { t: 'Automne', x: `Dès les premiers froids, les souris entrent dans les logements ${dans} par les moindres interstices.` },
    { t: 'Hiver', x: 'Elles restent au chaud dans les cloisons et les combles : c’est là qu’on les entend gratter.' },
    { t: 'Toute l’année', x: 'En immeuble chauffé, elles peuvent rester actives en toute saison.' },
  ],
  punaises: (dans) => [
    { t: 'Après les vacances', x: `Les retours de voyage ramènent souvent des punaises de lit ${dans}, dans les valises et le linge.` },
    { t: 'Toute l’année', x: 'Dans un logement chauffé, elles se reproduisent en toute saison : il n’y a pas de période creuse.' },
    { t: 'À chaque déménagement', x: 'Cartons, meubles d’occasion et literie peuvent les transporter d’un logement à l’autre.' },
  ],
  cafards: (dans) => [
    { t: 'Été', x: `La chaleur les rend plus actifs et plus visibles ${dans}, même en journée.` },
    { t: 'Toute l’année', x: 'Dans les cuisines et les gaines chauffées, les blattes se reproduisent en continu.' },
    { t: 'Après des travaux', x: 'Un chantier dans l’immeuble peut les déloger et les faire passer chez vous.' },
  ],
  puces: (dans) => [
    { t: 'Fin d’été', x: `La chaleur accélère leur cycle : c’est souvent à ce moment que les infestations deviennent visibles ${dans}.` },
    { t: 'Retour de vacances', x: 'Des adultes attendaient dans leurs cocons et sortent à votre retour.' },
    { t: 'Toute l’année', x: 'En logement chauffé, les puces se développent en toute saison.' },
  ],
  frelons: (dans) => [
    { t: 'Printemps', x: `Une reine seule fonde un petit nid ${dans}, souvent abrité : c’est le moment le plus simple pour le détruire.` },
    { t: 'Fin d’été', x: 'La colonie est à son maximum : nids volumineux et insectes plus agressifs.' },
    { t: 'Hiver', x: 'Le nid est abandonné et ne sera pas réutilisé : il n’est généralement plus nécessaire de le détruire.' },
  ],
}

// Variantes de recherche (« traitement souris 75 », « société de dératisation Val-de-Marne »…) en intertitres
const VARIANTES: Record<ServiceDep, (nom: string, code: string, dans: string) => { t: string; x: string }[]> = {
  deratisation: (nom, code, dans) => [
    { t: `Dératiseur ${code} : un technicien certifié près de chez vous`, x: `Un dératiseur titulaire du Certibiocide intervient ${dans}, souvent le jour même, pour les rats comme pour les souris.` },
    { t: `Société de dératisation ${nom}`, x: `Une entreprise locale, basée à Saint-Maurice, avec une adresse, un SIRET et des avis Google vérifiables : pas un simple numéro de téléphone.` },
    { t: `Dératisation rats ${code} et souris ${code}`, x: 'Surmulot, rat noir ou souris domestique : l’espèce est identifiée avant de choisir les dispositifs.' },
    { t: `Entreprise de dératisation pour professionnels ${dans}`, x: 'Restaurants, commerces, copropriétés : plan de lutte, suivi régulier et attestation pour vos contrôles.' },
  ],
  punaises: (nom, code, dans) => [
    { t: `Traitement punaises de lit ${code}`, x: `Insecticide, cryogénie ou vapeur sèche : un traitement en 2 passages, ${dans}, garanti 1 an.` },
    { t: `Société anti-punaises de lit ${nom}`, x: 'Une entreprise locale certifiée Certibiocide, avec des avis Google vérifiables et un devis gratuit.' },
    { t: `Cryogénie punaises de lit ${code}`, x: 'La neige carbonique tue les punaises et leurs œufs au contact, sans insecticide : idéal avec enfants ou animaux.' },
    { t: `Désinsectisation punaises de lit ${dans}`, x: 'Logements, hôtels, foyers, locations meublées : nous traitons chaque pièce touchée.' },
  ],
  frelons: (nom, code, dans) => [
    { t: `Destruction nid de frelon asiatique ${code}`, x: `Nid haut perché ou caché dans une haie : notre perche télescopique le traite à distance, ${dans}.` },
    { t: `Nid de guêpes ${code} : destruction rapide`, x: 'Sous une tuile, dans un volet roulant ou au jardin : intervention souvent le jour même.' },
    { t: `Entreprise de destruction de nids ${nom}`, x: 'Techniciens certifiés, tenue de protection intégrale, prix annoncé avant l’intervention.' },
    { t: `Frelons ${code} : que faire en attendant ?`, x: 'Ne vous approchez pas du nid, ne le bouchez pas, gardez enfants et animaux à l’intérieur, puis appelez-nous.' },
  ],
  cafards: (nom, code, dans) => [
    { t: `Traitement cafards ${code}`, x: `Gel appât professionnel, insecticide ciblé ou vapeur sèche, ${dans}, avec une garantie d’un an.` },
    { t: `Société anti-cafards ${nom}`, x: 'Une entreprise locale, certifiée, qui traite les cachettes et pas seulement les insectes visibles.' },
    { t: `Désinsectisation blattes ${code}`, x: 'Blatte germanique en cuisine ou blatte orientale des caves : le traitement s’adapte à l’espèce.' },
    { t: `Plan de lutte anti-cafards ${code} pour les pros`, x: 'Restaurants, boulangeries, cuisines d’entreprise : passages hors service et attestation pour vos contrôles d’hygiène.' },
  ],
  puces: (nom, code, dans) => [
    { t: `Traitement puces ${code}`, x: `Insecticide professionnel sur les sols et les textiles, ${dans}, en lien avec le vétérinaire.` },
    { t: `Société anti-puces ${nom}`, x: 'Une entreprise locale certifiée Certibiocide, avec des avis vérifiables et un devis gratuit.' },
    { t: `Désinsectisation puces ${code}`, x: 'Œufs, larves et cocons vivent dans les sols : le traitement doit les atteindre, pas seulement les adultes.' },
    { t: `Puces de parquet ${dans}`, x: 'Au retour de vacances ou après un emménagement : un traitement et un second passage règlent le problème.' },
  ],
  souris: (nom, code, dans) => [
    { t: `Traitement souris ${code}`, x: `Pièges, pièges connectés ou postes sécurisés, puis colmatage des passages, ${dans}.` },
    { t: `Société anti-souris ${nom}`, x: 'Une entreprise locale certifiée Certibiocide, avec des avis vérifiables et un devis gratuit.' },
    { t: `Dératisation souris ${code}`, x: 'Une souris passe par un trou de la taille d’un crayon : nous bouchons chaque accès pour qu’elles ne reviennent pas.' },
    { t: `Dératiseur souris ${code} pour les professionnels`, x: 'Commerces, bureaux, copropriétés : postes sécurisés, suivi régulier et attestation pour vos contrôles d’hygiène.' },
  ],
}

const VILLES: Record<ServiceDep, { slug: string; nom: string }[]> = {
  punaises: VILLES_PUNAISES, deratisation: VILLES_DERATISATION, souris: VILLES_SOURIS, cafards: VILLES_CAFARDS,
  frelons: VILLES_FRELONS.filter((v) => frelonsIndexee(v.slug)), puces: VILLES_PUCES,
}
const villesDuDep = (s: ServiceDep, d: DepSlug) =>
  VILLES[s].filter((v) => codePostal(v.slug).startsWith(DEPS[d].code)).sort((a, b) => (REPERES[a.slug]?.km ?? 99) - (REPERES[b.slug]?.km ?? 99))

export function titreDep(s: ServiceDep, d: DepSlug) {
  const c = SERVICES_DEP[s], dep = DEPS[d]
  const base = `${c.motCle} ${dep.nom} (${dep.code})`
  return c.suffixes.map((x) => base + x).find((t) => t.length <= 60) ?? base
}
export function metaDep(s: ServiceDep, d: DepSlug) {
  const c = SERVICES_DEP[s], dep = DEPS[d]
  return pageMetadata({ title: titreDep(s, d), description: c.description(dep.dans, dep.code), path: `${c.base}/${d}` })
}

export default function DepartementServicePage({ s, d }: { s: ServiceDep; d: DepSlug }) {
  const c = SERVICES_DEP[s], dep = DEPS[d], ct = c.contenu[d]
  const villes = villesDuDep(s, d)
  const url = `${SITE_URL}${c.base}/${d}`
  const autresDeps = DEP_SLUGS.filter((x) => x !== d)
  const autresServices = (Object.keys(SERVICES_DEP) as ServiceDep[]).filter((x) => x !== s)
  const faq = [
    ...ct.faq,
    ...SAISONS_FAQ[c.famille],
    { q: `Combien coûte ${s === 'frelons' ? 'la destruction d’un nid' : `un traitement ${c.label.toLowerCase()}`} ${dep.dans} ?`, a: `À partir de ${c.prix} TTC, ${c.prixNote.replace(' Devis gratuit.', '').toLowerCase()} Le devis est gratuit et le prix est fixé avant l’intervention.` },
    { q: `Vos techniciens sont-ils certifiés ${dep.dans} ?`, a: 'Oui, nos techniciens sont titulaires du Certibiocide, la certification obligatoire pour utiliser des produits biocides professionnels.' },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service', name: `${c.h1} ${dep.dans}`, serviceType: c.label, url, description: c.description(dep.dans, dep.code),
        areaServed: { '@type': 'AdministrativeArea', name: dep.nom, identifier: dep.code },
        provider: schemaPrestataire(), offers: schemaOffre(c.prixNum, c.prixNote),
      },
      { '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: c.label, item: `${SITE_URL}${s === 'punaises' ? '/services/punaises-de-lit' : s === 'puces' ? '/services/puces' : s === 'deratisation' || s === 'souris' ? '/services/deratisation' : s === 'cafards' ? '/services/cafards-blattes' : '/services/guepes-frelons'}` },
          { '@type': 'ListItem', position: 3, name: dep.nom, item: url },
        ],
      },
    ],
  }
  const inline = (t: string) => t.split(/\*\*(.+?)\*\*/g).map((p, i) => (i % 2 ? <strong key={i} className="text-white">{p}</strong> : p))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className="relative pt-10 md:pt-14 pb-12 px-4 overflow-hidden" style={{ background: '#080808' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(232,68,26,0.18) 0%, transparent 65%)' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <nav className="text-xs text-white/40 mb-5" aria-label="Fil d'Ariane">
              <a href="/" className="hover:text-white/70">Accueil</a>{' / '}<span className="text-white/60">{c.label} {dep.nom}</span>
            </nav>
            <a href={FICHE_GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <span className="flex text-yellow-400">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}</span>
              <strong className="text-white">{NOTE_GOOGLE.note}/5</strong><span className="text-white/60">sur {NOTE_GOOGLE.nombre} avis Google</span>
            </a>
            <h1 className="text-[2.1rem] sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-3 tracking-tight">
              {c.h1} <span style={{ color: ACCENT }}>{dep.dans}</span>
            </h1>
            <p className="text-white/45 font-bold tracking-widest mb-6">{dep.code} · {dep.communes} · {nf(dep.population)} habitants</p>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-7">{ct.accroche} {d === 'val-de-marne' ? 'Notre base est à Saint-Maurice, au cœur du département.' : 'Notre base est à Saint-Maurice (94), tout près.'}</p>
            <div className="flex flex-wrap justify-center items-center gap-3 mb-7">
              <span className="inline-flex items-baseline gap-2 rounded-2xl px-5 py-3" style={{ background: 'rgba(232,68,26,0.12)', border: '1.5px solid rgba(232,68,26,0.45)' }}>
                <span className="text-white/80 font-bold text-sm">À partir de</span>
                <span className="font-black text-4xl" style={{ color: ACCENT }}>{c.prix}</span>
                <span className="text-white/80 font-bold text-sm">TTC</span>
              </span>
              <span className="text-white/70 text-sm font-bold max-w-[13rem] text-left leading-snug">{c.prixNote}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <a href="tel:+33768077219" className="inline-flex items-center gap-2.5 font-black text-white px-7 py-4 rounded-2xl hover:brightness-110" style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.45)' }}>
                <Phone className="w-5 h-5" /> Devis gratuit : 07 68 07 72 19
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 font-black text-white px-7 py-4 rounded-2xl hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
                <Camera className="w-5 h-5" /> Envoyer une photo sur WhatsApp
              </a>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-3xl mx-auto">
              {[{ i: Clock, t: '7j/7, souvent le jour même' }, { i: BadgeCheck, t: 'Techniciens Certibiocide' }, { i: ShieldCheck, t: 'Garantie 1 an' }, { i: MapPin, t: `Tout le ${dep.code}` }].map(({ i: I, t }) => (
                <li key={t} className="flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs md:text-sm font-bold text-white/85" style={card}>
                  <I className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />{t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <BandeauDevis slug={d + s} mot={c.label.toLowerCase()} a={dep.dans} prix={c.prix} />

        {/* ── CONTEXTE DÉPARTEMENT ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6">{c.label} {dep.dans} : <span style={{ color: ACCENT }}>ce qu’il faut savoir</span></h2>
            {ct.paras.map((p) => <p key={p.slice(0, 30)} className="text-white/70 leading-relaxed mb-4">{inline(p)}</p>)}
            <div className="grid md:grid-cols-3 gap-4 mt-10 text-left">
              {ct.points.map((p) => (
                <div key={p.t} className="rounded-2xl p-6" style={card}>
                  <h3 className="text-lg font-black text-white mb-2">{p.t}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{p.x}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NUISIBLES CONCERNÉS ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#0b0b0b' }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">Les nuisibles que nous traitons {dep.dans}</h2>
            <p className="text-white/55 mb-10">Les reconnaître, c’est déjà choisir le bon traitement.</p>
            <div className={`grid gap-4 text-left ${NUISIBLES[s].length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
              {NUISIBLES[s].map((id) => {
                const f = ficheParId(id)
                return (
                  <figure key={id} className="rounded-2xl overflow-hidden" style={card}>
                    <img src={f.photo.src} alt={`${f.nom} (${f.latin}), nuisible traité ${dep.dans}`} loading="lazy" width={480} height={320} className="w-full h-52 object-cover" />
                    <figcaption className="p-5">
                      <h3 className="text-white font-black text-lg">{f.nom} {dep.dans}</h3>
                      <p className="text-white/45 text-sm italic mb-2">{f.latin} · {f.taille}</p>
                      <p className="text-white/70 text-sm leading-relaxed mb-2">{f.aspect}</p>
                      <p className="text-white/60 text-sm leading-relaxed"><strong className="text-white">Indices : </strong>{f.signes}</p>
                      <p className="text-[10px] text-white/35 mt-3">Photo : <a href={f.photo.page} target="_blank" rel="noopener noreferrer nofollow" className="underline">{f.photo.credit}</a>, {f.photo.licence}</p>
                    </figcaption>
                  </figure>
                )
              })}
            </div>
            <a href="/identifier-nuisible" className="inline-flex items-center gap-1 text-sm font-bold mt-6" style={{ color: ACCENT }}>Identifier un autre nuisible <ArrowRight className="w-4 h-4" /></a>
          </div>
        </section>

        {CHANTIERS[s].length > 0 && <PhotosChantiers photos={CHANTIERS[s]} titre={`Nos chantiers ${s === 'frelons' ? 'de destruction de nids' : `de ${c.label.toLowerCase()}`} en photos`} intro={`Photos prises par nos techniciens lors de vraies interventions, en Île-de-France.`} fond="#0d0d0d" />}

        {/* ── SAISONS ── */}
        <section className="py-14 md:py-16 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-10">{c.label} {dep.dans} : <span style={{ color: ACCENT }}>à quelle saison ?</span></h2>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              {SAISONS[s](dep.dans).map((x) => (
                <div key={x.t} className="rounded-2xl p-6" style={card}>
                  <h3 className="text-white font-black mb-2">{x.t}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{x.x}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VARIANTES DE RECHERCHE ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#0a0a0a' }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-10">{c.label} {dep.code} : <span style={{ color: ACCENT }}>une entreprise locale à votre service</span></h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {VARIANTES[s](dep.nom, dep.code, dep.dans).map((v) => (
                <div key={v.t} className="rounded-2xl p-6" style={card}>
                  <h3 className="text-lg font-black text-white mb-2">{v.t}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{v.x}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VILLES ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#0b0b0b' }}>
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">{c.label} {dep.dans} : <span style={{ color: ACCENT }}>{villes.length > 0 ? 'trouvez votre ville' : 'notre zone d’intervention'}</span></h2>
              <p className="text-white/55 mb-8">{villes.length > 0 ? `${villes.length} ${d === 'paris' ? 'arrondissements' : 'villes'} avec une page dédiée, du plus proche au plus éloigné de notre base de Saint-Maurice. Cliquez sur la carte ou sur la liste.` : `Nous intervenons dans ${d === 'paris' ? 'tous les arrondissements' : 'toutes les communes'} ${dep.de}, sur devis gratuit.`}</p>
              <div className="mb-10">
                <CarteDepartement dep={d} base={c.base} avecPage={villes.map((v) => v.slug)} titre={`Carte : ${c.label.toLowerCase()} ${dep.dans}`} legende={villes.length > 0 ? 'Ville avec une page dédiée (cliquable)' : 'Toutes les communes sont desservies'} zone={villes.length === 0} />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-left">
                {villes.map((v) => (
                  <a key={v.slug} href={`${c.base}/${v.slug}`} className="group rounded-xl px-4 py-3 hover:bg-white/[0.06]" style={card}>
                    <span className="block text-white font-bold text-sm">{c.label} {v.nom}</span>
                    <span className="block text-white/45 text-xs">{codePostal(v.slug)} · {REPERES[v.slug]?.km ? `${REPERES[v.slug].km.toLocaleString('fr-FR')} km` : 'notre base'}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

        <SituationsVille famille={c.famille} slug={`dep-${d}`} a={dep.dans} />

        {s === 'punaises' && <CyclePunaises a={dep.dans} titre={`Punaises de lit ${dep.dans} : les 7 stades à reconnaître`} />}
        <EtapesVille slug={d + s} a={dep.dans} titre={`${s === 'frelons' ? 'Destruction de nid' : c.label} ${dep.dans} : comment nous intervenons`} etapes={c.etapes} />
        {s === 'deratisation' && <DeratEco a={dep.dans} />}

        <TarifsVille titre={`Prix ${s === 'frelons' ? 'd’une destruction de nid de frelons' : `${c.label.toLowerCase()}`} ${dep.code} : tarifs ${dep.dans}`} intro="Le devis est gratuit et le prix est fixé avant l’intervention, le même dans tout le département." lignes={c.tarifs} note="Prix TTC. Garantie 1 an sur nos traitements." />

        <AvisDefilants depart={(d.length + s.length) * 3} />

        {/* ── POURQUOI NOUS ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-10">Société {c.label.toLowerCase()} {dep.code} : pourquoi choisir Allo Nuisible IDF {dep.dans} ?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {[
                ['Une entreprise locale', `Basés à Saint-Maurice (94), nous connaissons ${d === 'val-de-marne' ? 'chaque commune du département' : `${dep.nom} et ses quartiers`}.`],
                ['Techniciens certifiés', 'Tous titulaires du Certibiocide, la certification obligatoire pour les produits professionnels.'],
                ['Prix clair', `Devis gratuit et prix fixé avant l’intervention, dès ${c.prix} TTC.`],
                ['Garantie 1 an', 'Si les nuisibles reviennent, notre technicien revient.'],
              ].map(([t, x]) => (
                <div key={t} className="rounded-2xl p-5" style={card}>
                  <Check className="w-5 h-5 mb-2" style={{ color: ACCENT }} />
                  <h3 className="text-white font-black mb-1">{t}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{x}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">Vos questions : {c.label.toLowerCase()} {dep.dans}</h2>
            <div className="space-y-3">
              {faq.map((f) => (
                <details key={f.q} className="group rounded-xl px-5 py-4" style={card}>
                  <summary className="cursor-pointer font-bold text-white list-none flex justify-between gap-4">{f.q}<span className="text-white/40 group-open:rotate-45 transition-transform">+</span></summary>
                  <p className="text-white/65 text-sm leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAILLAGE ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#080808' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-6">{c.label} {dep.dans} ? Appelez-nous</h2>
            <a href="tel:+33768077219" className="inline-flex items-center gap-2.5 font-black text-white px-8 py-4 rounded-2xl hover:brightness-110" style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
              <Phone className="w-5 h-5" /> 07 68 07 72 19
            </a>
            <div className="grid sm:grid-cols-2 gap-6 mt-12 text-left">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">{c.label} dans les autres départements</p>
                <div className="flex flex-wrap gap-2">
                  {autresDeps.map((x) => <a key={x} href={`${c.base}/${x}`} className="text-sm text-white/75 hover:text-white rounded-full px-3.5 py-1.5" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>{c.label} {DEPS[x].nom}</a>)}
                </div>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Nos autres services {dep.dans}</p>
                <div className="flex flex-wrap gap-2">
                  {autresServices.map((x) => <a key={x} href={`${SERVICES_DEP[x].base}/${d}`} className="text-sm text-white/75 hover:text-white rounded-full px-3.5 py-1.5" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>{SERVICES_DEP[x].label} {dep.nom}</a>)}
                </div>
              </div>
            </div>
            <a href={dep.zone} className="inline-flex items-center gap-1 text-sm font-bold mt-8" style={{ color: ACCENT }}>Tous nos services {dep.dans} <ArrowRight className="w-4 h-4" /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
