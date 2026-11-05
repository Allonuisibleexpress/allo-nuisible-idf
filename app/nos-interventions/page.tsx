import { Phone, ArrowRight, MapPin } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MediasChantier from '@/components/MediasChantier'
import { pageMetadata } from '@/lib/seo'
import { ARTICLES } from '@/app/blog/articles'

const ACCENT = '#E8441A'

export const metadata = pageMetadata({
  title: 'Nos interventions en images : photos et vidéos',
  description: 'Nos vrais chantiers en photos et vidéos : punaises de lit à Créteil et Paris 12e, rats à Maisons-Alfort, souris à Saint-Maur, guêpes en Seine-et-Marne.',
  path: '/nos-interventions',
})

// Rubriques affichées, dans cet ordre (catégories du blog)
const RUBRIQUES = [
  { id: 'rongeurs', categorie: 'Rongeurs', titre: 'Dératisation, rats et souris', service: '/services/deratisation' },
  { id: 'punaises-de-lit', categorie: 'Punaises de lit', titre: 'Punaises de lit', service: '/services/punaises-de-lit' },
  { id: 'guepes-frelons', categorie: 'Guêpes et frelons', titre: 'Guêpes et frelons', service: '/services/guepes-frelons' },
  { id: 'pigeons', categorie: 'Pigeons', titre: 'Pigeons', service: '/services/pigeons' },
]

// Accroches plus parlantes quand la fin du titre est trop générale (« notre intervention », « en vidéo »)
const ACCROCHES: Record<string, string> = {
  'souris-airbnb-saint-maur-des-fosses': 'Des voyageurs se plaignaient d’odeurs : problème réglé dès le premier passage',
  'enorme-nid-frelons-asiatiques-arbre': 'Un nid géant caché dans le feuillage, détruit à distance',
  'nid-guepes-sous-tuile-essonne': 'Une intervention en hauteur, directement sur la toiture',
  'punaises-de-lit-traitement-insecticide-appartement': 'Pulvérisation puis nébulisation, filmées sur place',
  'deratisation-logement-syndrome-diogene': 'Une trentaine de rats ramassés avant de pouvoir nettoyer',
  'punaises-de-lit-ivry-sur-seine-personne-agee': 'Une dame âgée hospitalisée : traitement sans produit chimique',
  'punaises-de-lit-introuvables-goulotte-hotel': 'Introuvables pour plusieurs sociétés : les punaises étaient dans les goulottes',
}

// Lieu réel de chaque chantier, avec lien vers la page locale (référencement local).
// Ville précise seulement quand elle est connue ; sinon le secteur réel (94 et 92).
const LIEUX: Record<string, { nom: string; href: string }> = {
  'deratisation-logement-syndrome-diogene': { nom: 'Maisons-Alfort (94)', href: '/deratisation/maisons-alfort' },
  'souris-airbnb-saint-maur-des-fosses': { nom: 'Saint-Maur-des-Fossés (94)', href: '/souris/saint-maur-des-fosses' },
  'punaises-de-lit-creteil-sommier-lattes': { nom: 'Créteil (94)', href: '/punaises-de-lit/creteil' },
  'punaises-de-lit-paris-12-grosse-infestation': { nom: 'Paris 12e (75)', href: '/punaises-de-lit/paris-12' },
  'nid-guepes-gretz-armainvilliers': { nom: 'Gretz-Armainvilliers (77)', href: '/zones/seine-et-marne' },
  'nid-guepes-sous-tuile-essonne': { nom: 'Essonne (91)', href: '/zones/essonne' },
  'nid-frelons-cheminee-nogent-sur-marne': { nom: 'Nogent-sur-Marne (94)', href: '/zones/val-de-marne/nogent-sur-marne' },
  'cryogenie-punaises-de-lit-sommier': { nom: 'L’Haÿ-les-Roses (94)', href: '/punaises-de-lit/l-hay-les-roses' },
  'punaises-de-lit-ivry-sur-seine-personne-agee': { nom: 'Ivry-sur-Seine (94)', href: '/punaises-de-lit/ivry-sur-seine' },
  'punaises-de-lit-introuvables-goulotte-hotel': { nom: 'Hôtel, Paris 1er (75)', href: '/punaises-de-lit/paris-1' },
}
const SECTEUR = { nom: 'Val-de-Marne et Hauts-de-Seine', href: '/zones/val-de-marne' }

// Vrais chantiers : les récits du blog qui ont des photos ou des vidéos d'intervention
const CHANTIERS = ARTICLES.filter((a) => a.videos || a.mediasEnHaut)

export default function NosInterventionsPage() {
  const rubriques = RUBRIQUES.map((r) => ({ ...r, chantiers: CHANTIERS.filter((a) => a.category === r.categorie) })).filter((r) => r.chantiers.length)
  return (
    <>
      <Navbar />
      <main style={{ background: '#080808' }}>
        <section className="pt-10 md:pt-14 pb-10 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: ACCENT }}>Sur le terrain</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] mb-5 tracking-tight">
              Nos interventions <span style={{ color: ACCENT }}>en images</span>
            </h1>
            <p className="text-lg text-white/65 max-w-2xl mx-auto mb-8 leading-relaxed">
              Photos et vidéos prises par nos techniciens sur de vrais chantiers, en Île-de-France. Sous chaque intervention, le récit complet de ce que nous avons fait.
            </p>
            {/* Rubriques */}
            <nav className="flex flex-wrap justify-center gap-2" aria-label="Rubriques">
              {rubriques.map((r) => (
                <a key={r.id} href={`#${r.id}`} className="text-sm font-bold text-white px-4 py-2 rounded-full transition-colors hover:bg-white/10"
                  style={{ border: '1px solid rgba(255,255,255,0.18)' }}>
                  {r.titre} <span className="text-white/45">({r.chantiers.length})</span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {rubriques.map((r, i) => (
          <section key={r.id} id={r.id} className="py-14 md:py-20 px-4 scroll-mt-20" style={{ background: i % 2 ? '#080808' : '#0d0d0d' }}>
            <div className="max-w-5xl mx-auto">
              {/* En-tête de rubrique, centré */}
              <div className="text-center mb-10">
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>Nos chantiers</p>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{r.titre}</h2>
                <a href={r.service} className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-full transition-colors hover:bg-white/10"
                  style={{ color: ACCENT, border: '1px solid rgba(232,68,26,0.4)' }}>
                  Découvrir notre service <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="space-y-10">
                {r.chantiers.map((a) => {
                  // « Titre : accroche » devient un vrai titre et une phrase d'accroche
                  const [titre, ...reste] = a.title.split(' : ')
                  const accroche = ACCROCHES[a.slug] ?? reste.join(' : ')
                  return (
                    <article key={a.slug} className="rounded-3xl p-6 md:p-10" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="text-center max-w-2xl mx-auto mb-8">
                        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                          <a href={(LIEUX[a.slug] ?? SECTEUR).href} className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full text-white transition-colors hover:bg-white/10"
                            style={{ background: 'rgba(232,68,26,0.15)', border: '1px solid rgba(232,68,26,0.45)' }}>
                            <MapPin className="w-3.5 h-3.5" style={{ color: ACCENT }} />{(LIEUX[a.slug] ?? SECTEUR).nom}
                          </a>
                          <span className="text-[11px] font-bold tracking-widest uppercase text-white/45">
                            {r.titre} · {new Date(a.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-black text-white leading-tight mb-3">
                          <a href={`/blog/${a.slug}`} className="hover:underline underline-offset-4">{titre}</a>
                        </h3>
                        {accroche && (
                          <p className="text-base md:text-lg font-bold leading-snug mb-4" style={{ color: ACCENT }}>
                            {accroche.charAt(0).toUpperCase() + accroche.slice(1)}
                          </p>
                        )}
                        <p className="text-white/70 leading-relaxed">{a.tldr}</p>
                      </div>
                      <MediasChantier photos={a.photos} videos={a.videos} titre="" />
                      <div className="text-center mt-8">
                        <a href={`/blog/${a.slug}`} className="inline-flex items-center gap-2 font-bold text-white px-6 py-3 rounded-full transition-all hover:brightness-110"
                          style={{ background: ACCENT }}>
                          Lire le récit complet <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>
        ))}

        <section className="py-14 px-4 text-center" style={{ background: '#0d0d0d' }}>
          <p className="text-white/70 mb-5">Un problème de nuisibles ? Nos techniciens interviennent 7j/7 en Île-de-France.</p>
          <a href="tel:+33768077219"
            className="inline-flex items-center gap-2.5 font-black text-white px-8 py-4 rounded-2xl transition-all hover:brightness-110"
            style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
            <Phone className="w-5 h-5" /> 07 68 07 72 19
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
