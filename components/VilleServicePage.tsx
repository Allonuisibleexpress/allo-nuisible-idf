import { Phone, ArrowRight, MapPin, Check, BookOpen, ShieldCheck } from 'lucide-react'
import { villesVoisines, premierePhrase } from '@/lib/maillage'
import Navbar from '@/components/Navbar'
import { avecPrix, premierPrix, EtiquettePrix } from '@/components/PrixGros'
import BandeauDevis from '@/components/BandeauDevis'
import Footer from '@/components/Footer'
import ContexteLocal from '@/components/ContexteLocal'
import { PucesBloc1, PucesBloc2, melange } from '@/components/PucesVilleExtra'
import ContactMairie from '@/components/ContactMairie'
import type { ServiceLocal } from '@/components/ContexteLocal'
import AvisGoogle from '@/components/AvisGoogle'
import { avisVille } from '@/lib/avis-google'
import { VILLES_DERATISATION } from '@/lib/villes-deratisation'
import { SITE_URL, pageMetadata } from '@/lib/seo'
import { HeroVille, EtapesVille, TarifsVille, AutresServicesVille, titreGoogle, phraseDistance, schemaPrestataire, schemaOffre } from '@/components/VilleBlocs'
import AvisDefilants from '@/components/AvisDefilants'
import GalerieChantiersVille, { photosChantierVille } from '@/components/GalerieChantiersVille'
import { MiniaturesChantier } from '@/components/ContenuNuisible'
import MediasChantier from '@/components/MediasChantier'
import { CHANTIERS_VILLE } from '@/lib/photos-chantiers'
import SituationsVille from '@/components/SituationsVille'
import LocalVille from '@/components/LocalVille'
import { autresServicesVille } from '@/lib/services-ville'
import { codePostal } from '@/lib/codes-postaux'
import { PROFILS } from '@/lib/profils-ville'
import { saisonVille } from '@/lib/saisons-faq'

// Page « [service] à [ville] » commune aux cocons locaux (cafards, souris…).
// Même structure que /punaises-de-lit/[ville] : En bref (GEO), contexte, méthodes, guides, FAQ, E-E-A-T, maillage.

const ACCENT = '#E8441A'
const PHONE = '07 68 07 72 19'
const PHONE_HREF = 'tel:+33768077219'
// Prix de départ affichés en gros (alignés sur /tarifs)
const PRIX_DEPART: Partial<Record<ServiceLocal, string>> = { puces: '120 €', cafards: '120 €', souris: '120 €', fourmis: '120 €', acariens: '120 €', chenilles: '89 €', frelons: '89 €' }
// Mot-clé du bandeau « devis gratuit » selon le service
const MOT_DEVIS: Record<ServiceLocal, string> = { puces: 'traitement des puces', frelons: 'destruction de nid de frelons', fourmis: 'traitement des fourmis', cafards: 'traitement des cafards', souris: 'traitement contre les souris', chenilles: 'chenilles processionnaires', acariens: 'traitement des acariens', punaises: 'punaises de lit', deratisation: 'dératisation', commune: 'nuisibles' }
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }
// Angle du texte local (components/ContexteLocal) selon la page service de la famille
const serviceLocal = (href: string): ServiceLocal =>
  href.includes('puces') ? 'puces' : href.includes('fourmis') ? 'fourmis' : href.includes('guepes-frelons') ? 'frelons' : href.includes('cafards') ? 'cafards' : href.includes('rongeurs') || href.includes('deratisation') ? 'souris' : href.includes('chenilles') ? 'chenilles' : 'acariens'

export type Ville = {
  slug: string
  nom: string
  a: string
  code: string
  departement: string
  zoneHref: string
  description: string
  contexte: string[]
  proches: string[]
  faq: { q: string; a: string }[]
  // Questions supplémentaires propres à la ville
  faqPlus?: { q: string; a: string }[]
}

export type VilleServiceConfig = {
  basePath: string // '/cafards'
  titre: string // « Cafards » (début du H1)
  serviceType: string
  pilier: { href: string; label: string; lien: string } // fil d'Ariane et lien vers la page service
  enBref: string[]
  cachettes: { titre: string; items: string[]; signes: string }
  methodes: { titre: string; tag: string; texte: string; href?: string }[]
  encadre: { titre: string; intro?: string; items: string[] }
  // Méthode alternative, présentée après les méthodes principales (ex. Ekomille pour les souris)
  alternative?: { surtitre: string; titre: string; texte: string; href: string; lien: string }
  guides: { href: string; label: string }[]
  sources: { label: string; url: string }[]
  maj: string
  certification: string
  autresTitre: string
  // Contenu éditorial détaillé (texte, tableaux, listes) affiché après le contexte local
  sectionsParPage?: number // nombre de sections affichées par page (1 par défaut), 11/11/2026
  sections?: { titre: string; paras: string[]; table?: { head: string[]; rows: string[][] }; liste?: string[] }[]
  protocole?: { titre: string; etapes: { titre: string; texte: string }[] }
  publics?: { titre: string; cartes: { titre: string; texte: string }[] }
  // Contenu approfondi en rotation (protocole détaillé, cycle, prévention de la récidive, FAQ élargie), 10/11/2026
  approfondi?: {
    protocoleTitre: (a: string) => string
    protocoleIntro: string[]
    etapes: string[][] // pour chaque étape, plusieurs variantes « Titre|texte »
    cycleTitre: (a: string) => string
    cycle: string[][] // paragraphes, plusieurs variantes chacun
    recidiveTitre: (a: string) => string
    recidiveIntro: string[]
    recidive: string[] // conseils, 6 affichés par page en rotation
    faqPool: { q: string; a: string }[] // 4 questions par page en rotation
  }
  // Contenu local rédigé à la main, propre à chaque ville (bloc « Spécial ville », comme les pages dératisation), 11/11/2026
  local?: Record<string, string[]>
  localTitre?: (a: string, nom: string) => string
  centre?: boolean // page entièrement centrée (règle de l'utilisateur pour les nouvelles pages)
}

// Titre et description Google d'une page nuisible + ville (modèle du 09/11/2026)
export function metaVille(v: Ville, c: VilleServiceConfig) {
  const p = PROFILS[serviceLocal(c.pilier.href) as keyof typeof PROFILS]
  const title = titreGoogle(p.motCle, v.nom, v.slug, p.suffixes)
  return pageMetadata({ title, description: p.description(v.a, codePostal(v.slug)), path: `${c.basePath}/${v.slug}` })
}

// Texte riche : **gras** et [ancre](/lien)
function inline(text: string) {
  const out: React.ReactNode[] = []
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index))
    if (m[1]) out.push(<strong key={i++} className="text-white font-bold">{m[1]}</strong>)
    else out.push(<a key={i++} href={m[3]} className="underline" style={{ color: ACCENT }}>{m[2]}</a>)
    last = re.lastIndex
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

export default function VilleServicePage({ v, villes, c }: { v: Ville; villes: Ville[]; c: VilleServiceConfig }) {
  const url = `${SITE_URL}${c.basePath}/${v.slug}`
  const autres = villesVoisines(villes, v)
  // Une seule section détaillée par ville, différente d'une ville à l'autre (le guide complet est sur la page service) :
  // évite que toutes les pages villes répètent le même texte.
  const rang = Math.max(0, villes.findIndex((x) => x.slug === v.slug))
  const nbSections = Math.min(c.sectionsParPage ?? 1, c.sections?.length ?? 0)
  const sections = c.sections ? Array.from({ length: nbSections }, (_, i) => c.sections![(rang + i * 3) % c.sections!.length]).filter((x, i, l) => l.indexOf(x) === i) : undefined
  // Encadré de conseils et cartes « publics » en alternance d'une ville à l'autre
  const avecEncadre = rang % 2 === 0
  // Blocs communs en rotation : chaque page n'en montre qu'une partie, différente de ses voisines
  const tourne = <T,>(l: T[], k: number) => [...l.slice(k % Math.max(1, l.length)), ...l.slice(0, k % Math.max(1, l.length))]
  const methodes = tourne(c.methodes, rang).slice(0, Math.min(2, c.methodes.length))
  const cachettes = tourne(c.cachettes.items, rang).slice(0, Math.min(3, c.cachettes.items.length))
  const introMethodes = [
    'Avec ou sans produit : le technicien vous propose la méthode adaptée à votre logement et à l\'infestation, et vous explique son choix avant d\'intervenir.',
    'Le choix dépend du lieu, de l\'ampleur de l\'infestation et de la présence d\'enfants ou d\'animaux.',
    'Deux exemples de dispositifs que nous utilisons, toujours associés à la fermeture des accès.',
  ][rang % 3]
  const sl = serviceLocal(c.pilier.href)
  const profil = PROFILS[sl as keyof typeof PROFILS]
  const avisLocaux = sl === 'souris' || sl === 'cafards' ? avisVille(sl, v.slug) : []
  // FAQ : la question propre à la ville, puis 2 questions générales en rotation
  const generales = v.faq.slice(1)
  const d = rang % Math.max(1, generales.length)
  const profilFaq = PROFILS[serviceLocal(c.pilier.href) as keyof typeof PROFILS]
  // Variante déterministe selon la ville (k) et la position (i)
  const hv = v.slug.split('').reduce((h, ch) => (h * 33 + ch.charCodeAt(0)) >>> 0, 7)
  const pick = <T,>(l: T[], i: number) => l[melange((hv ^ Math.imul(i + 3, 0x9e3779b1)) >>> 0) % l.length]
  const ap = c.approfondi
  const poolFaq = ap ? tourne(ap.faqPool, melange(hv + 17) % ap.faqPool.length).slice(0, 4) : []
  const faq = [v.faq[0], ...(v.faqPlus ?? []), ...[...generales.slice(d), ...generales.slice(0, d)].slice(0, 2), ...poolFaq, saisonVille(profilFaq.famille, v.slug)]
  const db = rang % Math.max(1, c.enBref.length)
  const enBref = [`Intervention ${v.a} (${v.departement}, ${v.code}) et dans les communes voisines : ${v.proches.slice(0, 4).join(', ')}.`, ...[...c.enBref.slice(db), ...c.enBref.slice(0, db)].slice(0, 3)]
  const maj = new Date(c.maj).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${c.serviceType} ${v.a}`,
        serviceType: c.serviceType,
        url,
        description: v.description,
        areaServed: { '@type': 'City', name: v.nom, postalCode: codePostal(v.slug) || undefined, containedInPlace: { '@type': 'AdministrativeArea', name: v.departement } },
        provider: schemaPrestataire(),
        offers: schemaOffre(profil.prixNum, profil.offre),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: c.pilier.label, item: `${SITE_URL}${c.pilier.href}` },
          { '@type': 'ListItem', position: 3, name: v.nom, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className={c.centre ? 'recit-centre' : undefined}>
        <HeroVille slug={v.slug} nom={v.nom} a={v.a} titre={profil.heroTitre}
          fil={{ href: c.pilier.href, label: c.pilier.label }}
          prix={profil.prix} prixNote={profil.prixNote}
          accroche={`${phraseDistance(v.slug, v.nom)} ${profil.accroches[rang % profil.accroches.length]}`} />
        {CHANTIERS_VILLE[sl]?.[v.slug] ? (
          <MiniaturesChantier a={v.a} ancre="#chantier-en-images" photos={CHANTIERS_VILLE[sl][v.slug].photos} />
        ) : (
          <MiniaturesChantier a={v.a} photos={photosChantierVille(profil.famille, v.slug, [], 5)} />
        )}
        {CHANTIERS_VILLE[sl]?.[v.slug] && (
          <section id="chantier-en-images" className="py-14 md:py-20 px-4 scroll-mt-20" style={{ background: '#0d0d0d' }}>
            <div className="max-w-5xl mx-auto">
              <MediasChantier photos={CHANTIERS_VILLE[sl][v.slug].photos} videos={CHANTIERS_VILLE[sl][v.slug].videos} titre={CHANTIERS_VILLE[sl][v.slug].titre} lien={CHANTIERS_VILLE[sl][v.slug].lien} />
            </div>
          </section>
        )}

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

        <BandeauDevis slug={v.slug} mot={MOT_DEVIS[sl]} a={v.a} prix={premierPrix(c.enBref) ?? PRIX_DEPART[sl] ?? null} />

        {/* ── CONTEXTE LOCAL ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6">{c.titre} {v.a} : <span style={{ color: ACCENT }}>ce que nous constatons</span></h2>
            {v.contexte.map((p) => (
              <p key={p.slice(0, 24)} className="text-white/70 leading-relaxed mb-4">{inline(p)}</p>
            ))}
            <h3 className="text-lg md:text-xl font-black text-white mt-10 mb-4">{c.cachettes.titre} {v.a}</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-left">
              {cachettes.map((l) => (
                <li key={l} className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-white/80 text-sm" style={card}>
                  <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />{l}
                </li>
              ))}
            </ul>
            {rang % 2 === 1 && <p className="text-white/50 text-sm mt-4">{c.cachettes.signes}</p>}
          </div>
        </section>

        <ContexteLocal slug={v.slug} service={serviceLocal(c.pilier.href)} a={v.a} />
        <LocalVille nom={v.nom} titre={c.localTitre ? c.localTitre(v.a, v.nom) : `${c.titre} ${v.a} : ce qui est propre à ${v.nom}`} paras={c.local?.[v.slug]} />
        {sl === 'puces' && <PucesBloc1 slug={v.slug} a={v.a} nom={v.nom} />}

        {/* Rats aussi ? page dératisation de la même ville */}
        {serviceLocal(c.pilier.href) === 'souris' && VILLES_DERATISATION.some((x) => x.slug === v.slug) && (
          <p className="max-w-4xl mx-auto px-4 -mt-6 mb-10 text-sm text-white/60 text-center">
            Des rats plutôt que des souris ? Voir notre page <a href={`/deratisation/${v.slug}`} className="underline" style={{ color: ACCENT }}>dératisation {v.a}</a>.
          </p>
        )}

        {/* Avis Google d'un client de cette ville pour ce nuisible, s'il y en a un */}
        <SituationsVille famille={profil.famille} slug={v.slug} a={v.a} />

        <EtapesVille slug={v.slug} a={v.a} titre={profil.etapesTitre(v.a)} etapes={profil.etapes} />

        <TarifsVille titre={profil.tarifsTitre(v.a)} intro={profil.tarifsIntro} lignes={profil.tarifs}
          note="Prix TTC. Garantie 1 an sur nos traitements, devis gratuit." />

        {avisLocaux.length > 0 && <AvisGoogle ordre={avisLocaux} />}
        <AvisDefilants depart={rang + 3} />
        <GalerieChantiersVille famille={profil.famille} slug={v.slug} a={v.a} />

        {/* ── CONTENU DÉTAILLÉ ── */}
        {sections && (
          <section className="py-14 md:py-20 px-4" style={{ background: '#0a0a0a' }}>
            <div className="max-w-4xl mx-auto space-y-12">
              {sections.map((s) => (
                <div key={s.titre}>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-5 text-center">{s.titre}</h2>
                  {s.paras.map((p) => (
                    <p key={p.slice(0, 30)} className="text-white/70 leading-relaxed mb-4 text-center">{inline(p)}</p>
                  ))}
                  {s.table && (
                    <div className="overflow-x-auto rounded-2xl mt-2" style={card}>
                      <table className="w-full text-sm">
                        <thead>
                          <tr>{s.table.head.map((h) => <th key={h} className="text-left font-bold px-4 py-3" style={{ color: ACCENT }}>{h}</th>)}</tr>
                        </thead>
                        <tbody>
                          {s.table.rows.map((r) => (
                            <tr key={r[0]} className="border-t border-white/10">
                              {r.map((cell, j) => <td key={j} className={`px-4 py-3 align-top ${j === 0 ? 'text-white font-bold' : 'text-white/70'}`}>{inline(cell)}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {s.liste && (
                    <ul className="space-y-2 mt-2">
                      {s.liste.map((t) => (
                        <li key={t.slice(0, 30)} className="flex items-start gap-2.5 text-white/75 leading-relaxed">
                          <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: ACCENT }} /><span>{inline(t)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {rang % 2 === 0 && <p className="text-white/55 text-sm text-center">
                Espèces, causes, risques et erreurs à éviter : tout est détaillé sur{' '}
                <a href={c.pilier.href} className="underline" style={{ color: ACCENT }}>{c.pilier.lien}</a>.
              </p>}
            </div>
          </section>
        )}

        {/* ── MÉTHODES ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 text-center">Nos méthodes {v.a} : <span style={{ color: ACCENT }}>avec ou sans produit</span></h2>
            <p className="text-white/55 mb-8 max-w-2xl mx-auto text-center">{introMethodes}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {methodes.map((m) => {
                const contenu = (
                  <>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-widest rounded-full px-2.5 py-1 mb-3"
                      style={{ color: ACCENT, background: 'rgba(232,68,26,0.12)' }}>{m.tag}</span>
                    <h3 className="text-xl font-black text-white mb-2">{m.titre}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{premierePhrase(m.texte)}</p>
                  </>
                )
                return m.href ? (
                  <a key={m.titre} href={m.href} className="rounded-2xl p-6 transition-colors hover:bg-white/[0.06]" style={card}>{contenu}</a>
                ) : (
                  <div key={m.titre} className="rounded-2xl p-6" style={card}>{contenu}</div>
                )
              })}
            </div>
            {avecEncadre && (
            <div className="rounded-2xl p-6 mt-6" style={card}>
              <h3 className="text-lg font-black text-white mb-3 text-center">{c.encadre.titre}</h3>
              {c.encadre.intro && <p className="text-white/60 text-sm mb-3">{c.encadre.intro}</p>}
              <ul className="space-y-2">
                {c.encadre.items.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/75">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />{t}
                  </li>
                ))}
              </ul>
            </div>
            )}
            {c.alternative && !avecEncadre && (
              <div className="rounded-2xl p-6 mt-6" style={{ background: 'rgba(232,68,26,0.08)', border: '1px solid rgba(232,68,26,0.35)' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>{c.alternative.surtitre}</p>
                <p className="text-lg font-black text-white mb-2">{c.alternative.titre}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-3">{c.alternative.texte}</p>
                <a href={c.alternative.href} className="text-sm font-bold underline" style={{ color: ACCENT }}>{c.alternative.lien}</a>
              </div>
            )}
          </div>
        </section>

        {/* ── DÉROULÉ DE L'INTERVENTION + PUBLICS ── */}
        {c.publics && !avecEncadre && (
          <section className="py-14 md:py-20 px-4" style={{ background: '#080808' }}>
            <div className="max-w-4xl mx-auto space-y-14">
              {/* Déroulé et publics en alternance d'une ville à l'autre (les méthodes restent sur toutes les pages) */}
              {c.publics && !avecEncadre && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-6 text-center">{c.publics.titre}</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {c.publics.cartes.map((p) => (
                      <div key={p.titre} className="rounded-2xl p-6" style={card}>
                        <h3 className="text-lg font-black text-white mb-2">{p.titre}</h3>
                        <p className="text-white/65 text-sm leading-relaxed">{inline(p.texte)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── CONTENU APPROFONDI ── */}
        {ap && (
          <>
            <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 text-center leading-tight">{ap.protocoleTitre(v.a)}</h2>
                <p className="text-white/60 mb-8 max-w-3xl mx-auto text-center leading-relaxed">{inline(pick(ap.protocoleIntro, 1))}</p>
                <ol className="space-y-4">
                  {ap.etapes.map((variantes, i) => {
                    const [t, x] = pick(variantes, i + 2).replaceAll('{a}', v.a).split('|')
                    return (
                      <li key={i} className="flex gap-4 rounded-2xl p-5" style={card}>
                        <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-black text-white" style={{ background: ACCENT }}>{i + 1}</span>
                        <div>
                          <h3 className="font-black text-white mb-1">{t}</h3>
                          <p className="text-white/65 text-sm leading-relaxed">{inline(x)}</p>
                        </div>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </section>
            <section className="py-14 md:py-20 px-4" style={{ background: '#111' }}>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-6 text-center leading-tight">{ap.cycleTitre(v.a)}</h2>
                <div className="space-y-4 text-white/65 leading-relaxed">
                  {ap.cycle.map((variantes, i) => <p key={i}>{inline(pick(variantes, i + 9).replaceAll('{a}', v.a))}</p>)}
                </div>
              </div>
            </section>
            <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 text-center leading-tight">{ap.recidiveTitre(v.a)}</h2>
                <p className="text-white/60 mb-8 max-w-3xl mx-auto text-center leading-relaxed">{inline(pick(ap.recidiveIntro, 4))}</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {tourne(ap.recidive, melange(hv + 29) % ap.recidive.length).slice(0, 6).map((t) => (
                    <li key={t} className="flex items-start gap-3 rounded-xl p-4 text-sm text-white/75 leading-relaxed" style={card}>
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} /><span>{inline(t)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </>
        )}

        {sl === 'puces' && <PucesBloc2 slug={v.slug} a={v.a} nom={v.nom} />}

        {/* ── GUIDES ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 text-center">Nos guides pour tout comprendre</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {c.guides.map((g) => (
                <a key={g.href} href={g.href} className="group rounded-xl p-5 transition-colors hover:bg-white/[0.06]" style={card}>
                  <BookOpen className="w-5 h-5 mb-3" style={{ color: ACCENT }} />
                  <p className="text-white font-bold text-sm leading-snug mb-2">{g.label}</p>
                  <span className="text-xs font-bold inline-flex items-center gap-1" style={{ color: ACCENT }}>
                    Lire <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
            <p className="text-white/60 text-sm mt-6 text-center">
              Voir aussi <a href={c.pilier.href} className="underline" style={{ color: ACCENT }}>{c.pilier.lien}</a>.
            </p>
          </div>
        </section>

        <ContactMairie slug={v.slug} service={serviceLocal(c.pilier.href)} a={v.a} />

        {/* ── FAQ ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">Vos questions : {c.titre.toLowerCase()} {v.a}</h2>
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

        {/* ── E-E-A-T ── */}
        <section className="py-12 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto rounded-2xl p-6 md:p-7" style={card}>
            <div className="flex items-start gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
              <div>
                <p className="text-white font-bold">Rédigé par l&apos;équipe technique d&apos;Allo Nuisible IDF</p>
                <p className="text-white/55 text-sm">{c.certification} Mis à jour le {maj}.</p>
              </div>
            </div>
            <p className="text-white/45 text-xs uppercase tracking-widest mb-2">Sources</p>
            <ul className="space-y-1">
              {c.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-white/60 text-sm underline hover:text-white">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <AutresServicesVille nom={v.nom} a={v.a} liens={autresServicesVille(v.slug, profil.famille)} />

        {/* ── APPEL FINAL + MAILLAGE ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#080808' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-6">{c.titre} {v.a} ?</h2>
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
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">{c.autresTitre}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {autres.map((x) => (
                  <a key={x.slug} href={`${c.basePath}/${x.slug}`}
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
