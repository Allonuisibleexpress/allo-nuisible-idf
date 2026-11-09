import { notFound } from 'next/navigation'
import DepartementServicePage, { metaDep } from '@/components/DepartementServicePage'
import { DEP_SLUGS, estDep } from '@/lib/departements-services'
import { villesVoisines, premierePhrase } from '@/lib/maillage'
import { Phone, ArrowRight, MapPin, Check, BookOpen, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { avecPrix } from '@/components/PrixGros'
import { HeroVille, EtapesVille, TarifsVille, AutresServicesVille, titreGoogle, phraseDistance, schemaPrestataire, schemaOffre } from '@/components/VilleBlocs'
import { autresServicesVille } from '@/lib/services-ville'
import { codePostal } from '@/lib/codes-postaux'
import { saisonVille } from '@/lib/saisons-faq'
import BandeauDevis from '@/components/BandeauDevis'
import Footer from '@/components/Footer'
import { pageMetadata, SITE_URL } from '@/lib/seo'
import ContexteLocal from '@/components/ContexteLocal'
import ContactMairie from '@/components/ContactMairie'
import AvisGoogle from '@/components/AvisGoogle'
import AvisDefilants from '@/components/AvisDefilants'
import GalerieChantiersVille from '@/components/GalerieChantiersVille'
import SituationsVille from '@/components/SituationsVille'
import { avisVille } from '@/lib/avis-google'
import MediasChantier from '@/components/MediasChantier'
import { CHANTIERS_PUNAISES_VILLE } from '@/lib/photos-chantiers'
import {
  VILLES_PUNAISES, GUIDES_PUNAISES, METHODES_PUNAISES, SOURCES_PUNAISES, MAJ_PUNAISES, getVillePunaises,
} from '@/lib/villes-punaises'

const ACCENT = '#E8441A'
const PHONE = '07 68 07 72 19'
const PHONE_HREF = 'tel:+33768077219'

export const dynamicParams = false

export function generateStaticParams() {
  return [...VILLES_PUNAISES.map((v) => ({ ville: v.slug })), ...DEP_SLUGS.map((d) => ({ ville: d }))]
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  if (estDep(params.ville)) return metaDep('punaises', params.ville)
  const v = getVillePunaises(params.ville)
  if (!v) return {}
  const cp = codePostal(v.slug)
  const title = titreGoogle('Punaises de lit', v.nom, v.slug, [' : traitement dès 290 €', ' : traitement 7j/7', ' : traitement', ''])
  const description = `Punaises de lit ${v.a}${cp ? ` (${cp})` : ''} : insecticide, cryogénie ou vapeur sèche. 2 passages dès 290 € TTC, devis gratuit, garantie 1 an, 7j/7.`
  return pageMetadata({ title, description, path: `/punaises-de-lit/${v.slug}` })
}

const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

// Phrase d'accroche du haut de page, en rotation d'une ville à l'autre
const ACCROCHES = [
  'Un technicien certifié vient chez vous 7j/7, avec ou sans insecticide, et revient pour un deuxième passage.',
  'Inspection complète, traitement adapté à votre logement et deuxième passage inclus : on règle le problème pour de bon.',
  'Cryogénie, vapeur sèche ou insecticide professionnel : nous choisissons avec vous la méthode la plus efficace.',
  'Piqûres au réveil, taches sur les draps ? Nous intervenons vite, souvent le jour même, avec une garantie d’un an.',
  'Logement, location saisonnière ou hôtel : nous traitons chaque pièce touchée et vous laissons des consignes simples pour la suite.',
]

const ETAPES = [
  ['Appel ou photo|Vous nous appelez ou envoyez une photo sur WhatsApp : nous confirmons qu’il s’agit bien de punaises et vous donnons le prix.', 'Devis gratuit|Quelques questions sur votre logement suffisent : vous connaissez le tarif avant tout déplacement.', 'Premier contact|Un appel, une photo : nous identifions l’insecte et vous annonçons le prix, sans engagement.'],
  ['Inspection|Le technicien vérifie le matelas, le sommier, la tête de lit, les plinthes et le canapé pour repérer tous les foyers.', 'Recherche des foyers|Coutures, cadre de lit, prises, fentes du parquet : chaque cachette est contrôlée avant de traiter.', 'Diagnostic sur place|Nous mesurons l’ampleur de l’infestation pièce par pièce et vous expliquons la méthode retenue.'],
  ['Premier traitement|Cryogénie, vapeur sèche, protocole mixte ou insecticide : le traitement vise les punaises et leurs œufs.', 'Traitement ciblé|Le froid, la vapeur ou l’insecticide professionnel sont appliqués sur chaque zone touchée.', 'Élimination|Nous traitons literie, mobilier et zones de passage, avec des consignes claires pour la suite.'],
  ['Deuxième passage|Nous revenons traiter les éventuelles éclosions. Votre traitement est garanti 1 an.', 'Contrôle et garantie|Un second passage est inclus pour finir le travail, puis la garantie d’un an vous couvre.', 'Suivi|Deuxième passage inclus, conseils pour éviter une nouvelle infestation et garantie 1 an.'],
]

const CACHETTES = [
  'Coutures et passepoil du matelas',
  'Sommier et cadre de lit',
  'Tête de lit et table de chevet',
  'Plinthes et prises près du lit',
  'Canapé et canapé-lit',
  'Rideaux et fentes du parquet',
]

export default function PunaisesVillePage({ params }: { params: { ville: string } }) {
  if (estDep(params.ville)) return <DepartementServicePage s="punaises" d={params.ville} />
  const v = getVillePunaises(params.ville)
  if (!v) notFound()
  const avisLocaux = avisVille('punaises', v.slug)

  const url = `${SITE_URL}/punaises-de-lit/${v.slug}`
  const autres = villesVoisines(VILLES_PUNAISES, v)
  const maj = new Date(MAJ_PUNAISES).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

  // Résumé factuel, repris tel quel pour les moteurs et les assistants IA
  const rang = Math.max(0, VILLES_PUNAISES.findIndex((x) => x.slug === v.slug))
  const enBrefComplet = [
    v.code === '75'
      ? `Allo Nuisible IDF traite les punaises de lit ${v.a}, par traitement insecticide ou sans insecticide (cryogénie et vapeur sèche), et dans les arrondissements voisins : ${v.proches.join(', ')}.`
      : `Allo Nuisible IDF traite les punaises de lit ${v.a} (${v.departement}, ${v.code}), par traitement insecticide ou sans insecticide (cryogénie et vapeur sèche), et dans les communes proches : ${v.proches.join(', ')}.`,
    'Sans insecticide : cryogénie (neige carbonique à environ −78 °C) et vapeur sèche, qui tuent punaises et œufs au contact.',
    'Protocole mixte : cryogénie et vapeur, plus une barrière insecticide très légère et rémanente, renouvelée au deuxième passage.',
    'Infestation importante : traitement insecticide professionnel par un technicien certifié Certibiocide.',
    'Intervention possible le jour même, 7j/7. Devis gratuit, deuxième passage et garantie 1 an.',
  ]
  const generales = enBrefComplet.slice(1)
  const db = rang % generales.length
  // Encadré « en attendant » et questions générales en alternance d'une ville à l'autre
  const avecEncadre = rang % 2 === 0
  const generalesFaq = v.faq.filter((f) => !v.faq.slice(0, v.faq.length - 2).includes(f))
  const faq = [...v.faq.slice(0, v.faq.length - 2), generalesFaq[rang % generalesFaq.length], saisonVille('punaises', v.slug)]
  const enBref = [enBrefComplet[0], ...[...generales.slice(db), ...generales.slice(0, db)].slice(0, 3)]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Traitement des punaises de lit ${v.a}`,
        serviceType: 'Traitement des punaises de lit',
        url,
        description: v.description,
        areaServed: { '@type': 'City', name: v.nom, postalCode: codePostal(v.slug) || undefined, containedInPlace: { '@type': 'AdministrativeArea', name: v.departement } },
        provider: schemaPrestataire(),
        offers: schemaOffre('290', 'studio ou T1, 2 passages inclus'),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Punaises de lit', item: `${SITE_URL}/services/punaises-de-lit` },
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
        <HeroVille slug={v.slug} nom={v.nom} a={v.a} titre="Traitement punaises de lit"
          fil={{ href: '/services/punaises-de-lit', label: 'Punaises de lit' }}
          prix="290 €" prixNote="Studio ou T1, 2 passages inclus. Devis gratuit."
          accroche={`${phraseDistance(v.slug, v.nom)} ${ACCROCHES[rang % ACCROCHES.length]}`} />

        {/* En bref */}
        <section className="px-4 pb-4" style={{ background: '#080808' }}>
          <div className="max-w-3xl mx-auto rounded-2xl p-6 md:p-7" style={{ background: 'rgba(232,68,26,0.07)', border: '1px solid rgba(232,68,26,0.25)' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-center" style={{ color: ACCENT }}>En bref</p>
            <ul className="space-y-2">
              {enBref.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-white/85 text-sm md:text-base leading-relaxed">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: ACCENT }} /><span>{avecPrix(t)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <BandeauDevis slug={v.slug} mot="punaises de lit" a={v.a} prix="290 €" />

        {/* ── CONTEXTE LOCAL ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6 text-center">Punaises de lit {v.a} : <span style={{ color: ACCENT }}>ce que nous voyons sur le terrain</span></h2>
            {v.contexte.map((p) => (
              <p key={p.slice(0, 24)} className="text-white/70 leading-relaxed mb-4 text-center">{p}</p>
            ))}
            <h3 className="text-lg md:text-xl font-black text-white mt-10 mb-4 text-center">Leurs 6 cachettes préférées</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {CACHETTES.map((l) => (
                <li key={l} className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-white/80 text-sm" style={card}>
                  <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />{l}
                </li>
              ))}
            </ul>
            <p className="text-white/50 text-sm mt-4 text-center">
              Signes fréquents : piqûres groupées au réveil, petites taches noires ou de sang sur les draps, insectes bruns dans les coutures.
            </p>
          </div>
        </section>

        <ContexteLocal slug={v.slug} service="punaises" a={v.a} />

        <SituationsVille famille="punaises" slug={v.slug} a={v.a} />

        <EtapesVille slug={v.slug} a={v.a} titre={`Comment se passe le traitement ${v.a}`} etapes={ETAPES} />

        <TarifsVille titre={`Prix d’un traitement punaises de lit ${v.a}`}
          intro="Deux passages toujours inclus, quelle que soit la méthode. Le devis est gratuit et le prix est fixé avant l’intervention."
          lignes={[
            { label: 'Studio ou T1', prix: 'dès 290 €', detail: '2 passages, inspection de toutes les pièces' },
            { label: 'T2 ou T3', prix: 'sur devis', detail: 'Insecticide, cryogénie ou vapeur sèche' },
            { label: 'T4, maison ou forte infestation', prix: 'sur devis', detail: 'Prix confirmé après inspection' },
          ]}
          note="Prix TTC. Garantie 1 an sur nos traitements." />

        {/* Avis Google d'un client de cette ville, s'il y en a un */}
        {avisLocaux.length > 0 && <AvisGoogle ordre={avisLocaux} />}
        <AvisDefilants depart={rang} />
        <GalerieChantiersVille famille="punaises" slug={v.slug} a={v.a} exclure={CHANTIERS_PUNAISES_VILLE[v.slug]?.photos ?? []} />

        {/* Vrai chantier dans cette ville, en vidéo */}
        {CHANTIERS_PUNAISES_VILLE[v.slug] && (
          <section id="chantier-en-images" className="py-14 md:py-20 px-4 scroll-mt-20" style={{ background: '#0d0d0d' }}>
            <div className="max-w-3xl mx-auto">
              <MediasChantier photos={CHANTIERS_PUNAISES_VILLE[v.slug].photos} videos={[CHANTIERS_PUNAISES_VILLE[v.slug].video]} titre={CHANTIERS_PUNAISES_VILLE[v.slug].titre}
                lien={{ href: CHANTIERS_PUNAISES_VILLE[v.slug].article, label: 'Lire le récit de l’intervention' }} />
            </div>
          </section>
        )}

        {/* ── TOUTES LES MÉTHODES ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 text-center">Avec ou sans insecticide : <span style={{ color: ACCENT }}>nos méthodes {v.a}</span></h2>
            <p className="text-white/55 mb-8 max-w-2xl mx-auto text-center">
              Traitement insecticide professionnel ou sans insecticide, avec la cryogénie et la vapeur sèche : le technicien vous propose la méthode adaptée à votre logement et vous explique son choix avant d&apos;intervenir.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[...METHODES_PUNAISES.slice(rang % METHODES_PUNAISES.length), ...METHODES_PUNAISES.slice(0, rang % METHODES_PUNAISES.length)].slice(0, 3).map((m) => (
                <a key={m.titre} href={`/blog/${m.guide}`} className="group rounded-2xl p-6 transition-colors hover:bg-white/[0.06]" style={card}>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest rounded-full px-2.5 py-1 mb-3"
                    style={{ color: ACCENT, background: 'rgba(232,68,26,0.12)' }}>{m.tag}</span>
                  <h3 className="text-xl font-black text-white mb-2">{m.titre}</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-3">{premierePhrase(m.texte)}</p>
                  <span className="text-sm font-bold inline-flex items-center gap-1.5" style={{ color: ACCENT }}>
                    En savoir plus <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              ))}
            </div>

            {/* Cryogénie : 5 formulations en rotation d'une ville à l'autre, lien vers la page dédiée */}
            <p className="text-white/70 leading-relaxed mt-6 text-center">
              {[
                <>Vous préférez un traitement sans produit chimique ? La cryogénie, de la neige carbonique à environ −78 °C, tue les punaises et leurs œufs au contact. Voir notre <a href="/services/cryogenie-punaises-de-lit" className="underline" style={{ color: ACCENT }}>traitement des punaises de lit par cryogénie</a>, avec les vidéos de nos chantiers.</>,
                <>Enfants en bas âge, animaux, personne fragile : {v.a}, nous pouvons traiter votre logement par cryogénie, sans insecticide. Découvrez <a href="/services/cryogenie-punaises-de-lit" className="underline" style={{ color: ACCENT }}>comment se déroule un traitement par cryogénie</a>.</>,
                <>Sèche et précise, la cryogénie est notre méthode de choix pour les fentes, les cadres de lit et le mobilier : elle ne laisse aucun produit derrière elle. Tout savoir sur <a href="/services/cryogenie-punaises-de-lit" className="underline" style={{ color: ACCENT }}>notre traitement par cryogénie</a>.</>,
                <>Hôtels, foyers, résidences : {v.a}, nous traitons chambre par chambre par cryogénie pour limiter la gêne des occupants. Voir notre page <a href="/services/cryogenie-punaises-de-lit" className="underline" style={{ color: ACCENT }}>cryogénie et punaises de lit</a>.</>,
                <>Le froid comme arme : la neige carbonique tue au contact, puis un second passage traite les éclosions. Notre page <a href="/services/cryogenie-punaises-de-lit" className="underline" style={{ color: ACCENT }}>cryogénie</a> détaille la méthode, les prix et nos chantiers en vidéo.</>,
              ][rang % 5]}
            </p>

            {avecEncadre && (
            <div className="rounded-2xl p-6 mt-6" style={card}>
              <h3 className="text-lg font-black text-white mb-3 text-center">En attendant le technicien : 3 gestes utiles</h3>
              <p className="text-white/60 text-sm mb-3">Recommandé par le site du gouvernement stop-punaises.gouv.fr, pour le linge et les effets personnels :</p>
              <ul className="space-y-2">
                {[
                  'Lavage en machine à 60 °C pendant 1 heure.',
                  'Ou sèche-linge à la plus haute température pendant au moins 30 minutes.',
                  'Ou congélateur, dans un sac fermé, pendant 72 heures.',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/75">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />{t}
                  </li>
                ))}
              </ul>
            </div>
            )}
          </div>
        </section>

        {/* ── GUIDES DU BLOG ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 text-center">Nos guides pour tout comprendre</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {v.guides.map((g) => (
                <a key={g} href={`/blog/${g}`} className="group rounded-xl p-5 transition-colors hover:bg-white/[0.06]" style={card}>
                  <BookOpen className="w-5 h-5 mb-3" style={{ color: ACCENT }} />
                  <p className="text-white font-bold text-sm leading-snug mb-2">{GUIDES_PUNAISES[g]}</p>
                  <span className="text-xs font-bold inline-flex items-center gap-1" style={{ color: ACCENT }}>
                    Lire le guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
            <p className="text-white/60 text-sm mt-6 text-center">
              Voir aussi notre <a href="/services/punaises-de-lit" className="underline" style={{ color: ACCENT }}>traitement des punaises de lit en Île-de-France</a>.
            </p>
          </div>
        </section>

        <ContactMairie slug={v.slug} service="punaises" a={v.a} />

        {/* ── FAQ ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">Vos questions sur les punaises de lit {v.a}</h2>
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

        {/* ── E-E-A-T : auteur, certification, sources ── */}
        <section className="py-12 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto rounded-2xl p-6 md:p-7" style={card}>
            <div className="flex items-start gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
              <div>
                <p className="text-white font-bold">Rédigé par l&apos;équipe technique d&apos;Allo Nuisible IDF</p>
                <p className="text-white/55 text-sm">
                  Techniciens titulaires du Certibiocide, la certification obligatoire pour utiliser des insecticides professionnels.
                  Mis à jour le {maj}.
                </p>
              </div>
            </div>
            <p className="text-white/45 text-xs uppercase tracking-widest mb-2">Sources</p>
            <ul className="space-y-1">
              {SOURCES_PUNAISES.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-white/60 text-sm underline hover:text-white">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <AutresServicesVille nom={v.nom} a={v.a} liens={autresServicesVille(v.slug, 'punaises')} />

        {/* ── APPEL FINAL + MAILLAGE ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#080808' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-6">Des punaises de lit {v.a} ?</h2>
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
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Punaises de lit dans d&apos;autres villes</p>
              <div className="flex flex-wrap justify-center gap-2">
                {autres.map((x) => (
                  <a key={x.slug} href={`/punaises-de-lit/${x.slug}`}
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
