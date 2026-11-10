import { notFound } from 'next/navigation'
import LocalVille from '@/components/LocalVille'
import { LOCAL_DERATISATION_94 } from '@/lib/local-deratisation-94'
import { LOCAL_DERATISATION_75_92 } from '@/lib/local-deratisation-75-92'
import ContenuNuisible, { MiniaturesChantier } from '@/components/ContenuNuisible'
import ProtocoleCondense, { PROTOCOLE_DERATISATION } from '@/components/ProtocoleCondense'
import { CONTENU_DERATISATION } from '@/lib/contenu-nuisibles/deratisation'
import DepartementServicePage, { metaDep } from '@/components/DepartementServicePage'
import { DEP_SLUGS, estDep } from '@/lib/departements-services'
import { villesVoisines } from '@/lib/maillage'
import { Phone, ArrowRight, MapPin, Check, BookOpen, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { avecPrix } from '@/components/PrixGros'
import { HeroVille, TarifsVille, AutresServicesVille, titreGoogle, phraseDistance, schemaPrestataire, schemaOffre } from '@/components/VilleBlocs'
import AvisDefilants from '@/components/AvisDefilants'
import GalerieChantiersVille, { photosChantierVille } from '@/components/GalerieChantiersVille'
import SituationsVille from '@/components/SituationsVille'
import { autresServicesVille } from '@/lib/services-ville'
import { codePostal } from '@/lib/codes-postaux'
import { saisonVille } from '@/lib/saisons-faq'
import BandeauDevis from '@/components/BandeauDevis'
import Footer from '@/components/Footer'
import { pageMetadata, SITE_URL } from '@/lib/seo'
import ContexteLocal from '@/components/ContexteLocal'
import ContactMairie from '@/components/ContactMairie'
import AvisGoogle from '@/components/AvisGoogle'
import { avisVille } from '@/lib/avis-google'
import MediasChantier from '@/components/MediasChantier'
import VignettesChantier from '@/components/VignettesChantier'
import { CHANTIER_DIOGENE } from '@/lib/photos-chantiers'
import { VILLES_SOURIS } from '@/lib/villes-souris'
import {
  VILLES_DERATISATION, GUIDES_RONGEURS, SOURCES_DERATISATION, MAJ_DERATISATION, getVilleDeratisation,
} from '@/lib/villes-deratisation'

const ACCENT = '#E8441A'
const PHONE = '07 68 07 72 19'
const PHONE_HREF = 'tel:+33768077219'

export const dynamicParams = false

export function generateStaticParams() {
  return [...VILLES_DERATISATION.map((v) => ({ ville: v.slug })), ...DEP_SLUGS.map((d) => ({ ville: d }))]
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  if (estDep(params.ville)) return metaDep('deratisation', params.ville)
  const v = getVilleDeratisation(params.ville)
  if (!v) return {}
  const cp = codePostal(v.slug)
  const title = titreGoogle('Dératisation', v.nom, v.slug, [' : intervention 7j/7', ' : rats et souris', ' : dès 120 €', ''])
  const description = `Dératisation ${v.a}${cp ? ` (${cp})` : ''} : rats et souris, postes sécurisés ou pièges, accès rebouchés. Dès 120 € TTC, devis gratuit, garantie 1 an, 7j/7.`
  return pageMetadata({ title, description, path: `/deratisation/${v.slug}` })
}

const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

// Accroche du haut de page, en rotation d'une ville à l'autre
const ACCROCHES = [
  'Rats ou souris : un technicien certifié trouve par où ils entrent, pose les bons dispositifs et rebouche les accès.',
  'Bruits la nuit, crottes, emballages rongés ? Nous intervenons vite, souvent le jour même, avec une garantie d’un an.',
  'Postes sécurisés, pièges ou piège Ekomille sans raticide : la méthode est choisie avec vous selon le lieu.',
  'Appartement, maison, commerce ou copropriété : diagnostic, traitement et colmatage, avec attestation pour les pros.',
  'Le plus important n’est pas seulement d’éliminer les rongeurs, mais de les empêcher de revenir : c’est notre méthode.',
]

const ETAPES = [
  ['Appel ou photo|Une photo des crottes ou des dégâts suffit souvent pour savoir s’il s’agit de rats ou de souris. Vous avez le prix tout de suite.', 'Devis gratuit|Vous décrivez la situation, nous vous annonçons le tarif avant de nous déplacer.', 'Premier contact|Un appel ou un message WhatsApp : nous identifions le rongeur et fixons le prix, sans engagement.'],
  ['Diagnostic|Le technicien identifie l’espèce (surmulot, rat noir, souris), les couloirs de passage et les points d’entrée.', 'Recherche des accès|Gaines, passages de tuyaux, bas de portes, grilles : chaque entrée possible est repérée.', 'Inspection|Caves, cuisine, combles et extérieurs sont contrôlés pour localiser les nids et les passages.'],
  ['Dispositif adapté|Postes d’appâtage sécurisés et verrouillés, pièges mécaniques ou connectés, ou piège Ekomille sans raticide.', 'Traitement|Les dispositifs sont placés sur les passages, hors de portée des enfants et des animaux.', 'Pose des postes|Raticide professionnel en postes fermés à clé, ou pièges selon le lieu et vos préférences.'],
  ['Colmatage et garantie|Les accès trouvés sont rebouchés, les postes contrôlés. Garantie 1 an, attestation pour les professionnels.', 'Suivi|Contrôle des dispositifs, accès fermés pour éviter le retour des rongeurs, garantie 1 an.', 'Fermeture des accès|Sans colmatage, d’autres rongeurs reviennent : nous bouchons les passages et vous garantissons 1 an.'],
]

export default function DeratisationVillePage({ params }: { params: { ville: string } }) {
  if (estDep(params.ville)) return <DepartementServicePage s="deratisation" d={params.ville} />
  const v = getVilleDeratisation(params.ville)
  if (!v) notFound()

  const url = `${SITE_URL}/deratisation/${v.slug}`
  const autres = villesVoisines(VILLES_DERATISATION, v)
  const maj = new Date(MAJ_DERATISATION).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

  // Résumé factuel, repris tel quel pour les moteurs et les assistants IA
  const rang = Math.max(0, VILLES_DERATISATION.findIndex((x) => x.slug === v.slug))
  const faq = [...v.faq, saisonVille('deratisation', v.slug)]
  const enBref = [
    v.code === '75'
      ? `Allo Nuisible IDF réalise la dératisation ${v.a} et dans les arrondissements voisins.`
      : `Allo Nuisible IDF réalise la dératisation ${v.a} (${v.departement}, ${v.code}) et dans les communes proches.`,
    `Points à contrôler en priorité ${v.a} : ${v.lieux.map((l) => l.charAt(0).toLowerCase() + l.slice(1)).join(', ')}.`,
    'Rongeurs traités : surmulot (rat d\'égout), rat noir, souris domestique.',
    'Méthodes : postes d\'appâtage sécurisés avec raticide professionnel, pièges mécaniques ou connectés, colmatage des points d\'entrée.',
    'Techniciens certifiés Certibiocide, intervention possible le jour même, 7j/7.',
    'Devis gratuit avant intervention, garantie 1 an, attestation fournie aux professionnels.',
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Dératisation ${v.a}`,
        serviceType: 'Dératisation',
        url,
        description: v.description,
        areaServed: { '@type': 'City', name: v.nom, postalCode: codePostal(v.slug) || undefined, containedInPlace: { '@type': 'AdministrativeArea', name: v.departement } },
        provider: schemaPrestataire(),
        offers: schemaOffre('120', 'appartement, rats ou souris'),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Dératisation', item: `${SITE_URL}/services/deratisation` },
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
        <HeroVille slug={v.slug} nom={v.nom} a={v.a} titre="Dératisation"
          fil={{ href: '/services/deratisation', label: 'Dératisation' }}
          prix="120 €" prixNote="Appartement, rats ou souris. Devis gratuit."
          accroche={`${phraseDistance(v.slug, v.nom)} ${ACCROCHES[rang % ACCROCHES.length]}`} />
        <MiniaturesChantier a={v.a} photos={photosChantierVille('deratisation', v.slug, v.slug === CHANTIER_DIOGENE.ville ? CHANTIER_DIOGENE.photos : [], 5)} />

        {/* En bref */}
        <section className="px-4 pb-4" style={{ background: '#080808' }}>
          <div className="max-w-3xl mx-auto">
            {v.slug === CHANTIER_DIOGENE.ville && (
              <div className="mb-8">
                <VignettesChantier photos={CHANTIER_DIOGENE.photos} videos={CHANTIER_DIOGENE.videos} centre texte={`Notre dernier chantier ${v.a}`} />
              </div>
            )}
            <div className="rounded-2xl p-6 md:p-7" style={{ background: 'rgba(232,68,26,0.07)', border: '1px solid rgba(232,68,26,0.25)' }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3 text-center" style={{ color: ACCENT }}>En bref</p>
              <ul className="space-y-2">
                {enBref.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-white/85 text-sm md:text-base leading-relaxed">
                    <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: ACCENT }} /><span>{avecPrix(t)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <BandeauDevis slug={v.slug} mot="dératisation" a={v.a} prix="120 €" />

        {/* ── CONTEXTE LOCAL ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6 text-center">Rats et souris {v.a} : <span style={{ color: ACCENT }}>ce que nous constatons</span></h2>
            {v.contexte.map((p) => (
              <p key={p.slice(0, 24)} className="text-white/70 leading-relaxed mb-4 text-center">{p}</p>
            ))}
            <h3 className="text-lg md:text-xl font-black text-white mt-10 mb-4 text-center">Où chercher les signes de passage {v.a}</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {v.lieux.map((l) => (
                <li key={l} className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-white/80 text-sm" style={card}>
                  <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />{l}
                </li>
              ))}
            </ul>
            <p className="text-white/50 text-sm mt-4 text-center">
              Indices fréquents : déjections, traces de grignotage, bruits la nuit dans les cloisons, terriers au pied des murs.
            </p>
          </div>
        </section>

        <ContexteLocal slug={v.slug} service="deratisation" a={v.a} />
        <LocalVille nom={v.nom} titre={`Rats et souris ${v.a} : ce qui est propre à ${v.nom}`} paras={LOCAL_DERATISATION_94[v.slug] ?? LOCAL_DERATISATION_75_92[v.slug]} />

        {/* Page souris de la même ville : chaque page garde son sujet */}
        {VILLES_SOURIS.some((x) => x.slug === v.slug) && (
          <p className="max-w-4xl mx-auto px-4 -mt-6 mb-10 text-sm text-white/60 text-center">
            Uniquement des souris ? Voir notre page <a href={`/souris/${v.slug}`} className="underline" style={{ color: ACCENT }}>souris {v.a}</a>.
          </p>
        )}

        {/* Avis Google d'un client de cette ville, s'il y en a un */}
        <SituationsVille famille="deratisation" slug={v.slug} a={v.a} />

        <ProtocoleCondense p={PROTOCOLE_DERATISATION} a={v.a} />


        <TarifsVille titre={`Prix d’une dératisation ${v.a}`}
          intro="Le devis est gratuit et le prix est fixé avant l’intervention. Rats ou souris, le tarif dépend du lieu et de l’ampleur."
          lignes={[
            { label: 'Appartement', prix: 'dès 120 €', detail: 'Rats ou souris, postes sécurisés ou pièges' },
            { label: 'Commerce, restaurant', prix: 'sur devis', detail: 'Attestation fournie' },
            { label: 'Copropriété, contrat annuel', prix: 'sur devis', detail: 'Parties communes, passages réguliers' },
          ]}
          note="Prix TTC. Garantie 1 an sur nos traitements." />

        {avisVille('deratisation', v.slug).length > 0 && <AvisGoogle ordre={avisVille('deratisation', v.slug)} />}
        <AvisDefilants depart={rang + 7} />
        <GalerieChantiersVille famille="deratisation" slug={v.slug} a={v.a} exclure={v.slug === CHANTIER_DIOGENE.ville ? CHANTIER_DIOGENE.photos : []} />

        {/* Vrai chantier dans cette ville, en photo et vidéos */}
        {v.slug === CHANTIER_DIOGENE.ville && (
          <section id="chantier-en-images" className="py-14 md:py-20 px-4 scroll-mt-20" style={{ background: '#0d0d0d' }}>
            <div className="max-w-3xl mx-auto">
              <MediasChantier photos={CHANTIER_DIOGENE.photos} videos={CHANTIER_DIOGENE.videos}
                titre={`Notre dernier chantier ${v.a} : logement très encombré`}
                lien={{ href: CHANTIER_DIOGENE.article, label: 'Lire le récit complet de l’intervention' }} />
            </div>
          </section>
        )}

        {/* ── GUIDES DU BLOG ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 text-center">Nos guides pour tout comprendre sur les rats</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {v.guides.map((g) => (
                <a key={g} href={`/blog/${g}`} className="group rounded-xl p-5 transition-colors hover:bg-white/[0.06]" style={card}>
                  <BookOpen className="w-5 h-5 mb-3" style={{ color: ACCENT }} />
                  <p className="text-white font-bold text-sm leading-snug mb-2">{GUIDES_RONGEURS[g]}</p>
                  <span className="text-xs font-bold inline-flex items-center gap-1" style={{ color: ACCENT }}>
                    Lire le guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <ContenuNuisible data={CONTENU_DERATISATION} slug={v.slug} a={v.a} nom={v.nom} partie={3} />

        <ContactMairie slug={v.slug} service="deratisation" a={v.a} />

        {/* ── FAQ ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">Vos questions sur la dératisation {v.a}</h2>
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
                  Techniciens titulaires du Certibiocide, la certification obligatoire pour utiliser des raticides professionnels.
                  Mis à jour le {maj}.
                </p>
              </div>
            </div>
            <p className="text-white/45 text-xs uppercase tracking-widest mb-2">Sources</p>
            <ul className="space-y-1">
              {SOURCES_DERATISATION.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-white/60 text-sm underline hover:text-white">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <AutresServicesVille nom={v.nom} a={v.a} liens={autresServicesVille(v.slug, 'deratisation')} />

        {/* ── APPEL FINAL + MAILLAGE ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#080808' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-6">Des rats ou des souris {v.a} ?</h2>
            <a href={PHONE_HREF}
              className="inline-flex items-center gap-2.5 font-black text-white px-8 py-4 rounded-2xl transition-all hover:brightness-110"
              style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
              <Phone className="w-5 h-5" /> {PHONE}
            </a>
            <p className="text-white/45 text-sm mt-8">
              Nous intervenons aussi à {v.proches.join(', ')}.{' '}
              <a href={v.zoneHref} className="underline hover:text-white">Voir la zone {v.departement}</a>
            </p>
            <div className="mt-10">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Dératisation dans d&apos;autres villes</p>
              <div className="flex flex-wrap justify-center gap-2">
                {autres.map((x) => (
                  <a key={x.slug} href={`/deratisation/${x.slug}`}
                    className="text-sm text-white/70 hover:text-white rounded-full px-3.5 py-1.5 transition-colors"
                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                    {x.nom} ({x.code})
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
