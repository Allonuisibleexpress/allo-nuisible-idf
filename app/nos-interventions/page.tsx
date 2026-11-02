import { Phone, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MediasChantier from '@/components/MediasChantier'
import { pageMetadata } from '@/lib/seo'
import { ARTICLES } from '@/app/blog/articles'

const ACCENT = '#E8441A'

export const metadata = pageMetadata({
  title: 'Nos interventions en images : photos et vidéos',
  description: 'Rats, punaises de lit, frelons, pigeons : les photos et vidéos de nos vrais chantiers en Île-de-France, avec le récit de chaque intervention.',
  path: '/nos-interventions',
})

// Rubriques affichées, dans cet ordre (catégories du blog)
const RUBRIQUES = [
  { id: 'rongeurs', categorie: 'Rongeurs', titre: 'Dératisation, rats et souris', service: '/services/deratisation' },
  { id: 'punaises-de-lit', categorie: 'Punaises de lit', titre: 'Punaises de lit', service: '/services/punaises-de-lit' },
  { id: 'guepes-frelons', categorie: 'Guêpes et frelons', titre: 'Guêpes et frelons', service: '/services/guepes-frelons' },
  { id: 'pigeons', categorie: 'Pigeons', titre: 'Pigeons', service: '/services/pigeons' },
]

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
          <section key={r.id} id={r.id} className="py-12 md:py-16 px-4 scroll-mt-20" style={{ background: i % 2 ? '#080808' : '#0d0d0d' }}>
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap items-end justify-between gap-3 mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-white">{r.titre}</h2>
                <a href={r.service} className="text-sm font-bold underline underline-offset-2" style={{ color: ACCENT }}>Notre service {r.titre.toLowerCase()}</a>
              </div>
              <div className="space-y-12">
                {r.chantiers.map((a) => (
                  <article key={a.slug} className="rounded-2xl p-5 md:p-6" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <h3 className="text-lg md:text-xl font-black text-white mb-4 leading-snug">
                      <a href={`/blog/${a.slug}`} className="hover:underline underline-offset-2">{a.title}</a>
                    </h3>
                    <MediasChantier photos={a.photos} videos={a.videos} titre="" />
                    <a href={`/blog/${a.slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold mt-4" style={{ color: ACCENT }}>
                      Lire le récit de l&apos;intervention <ArrowRight className="w-4 h-4" />
                    </a>
                  </article>
                ))}
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
