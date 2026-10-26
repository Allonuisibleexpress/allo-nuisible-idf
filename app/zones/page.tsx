import { Phone, ArrowRight, MapPin } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { pageMetadata } from '@/lib/seo'
import { DEPARTEMENTS_IDF } from '@/lib/departements'

const ACCENT = '#E8441A'

export const metadata = pageMetadata({
  title: 'Zones d\'intervention : les 8 départements d\'Île-de-France',
  description: 'Paris, Seine-et-Marne, Yvelines, Essonne, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Val-d\'Oise : nos techniciens interviennent 7j/7.',
  path: '/zones',
})

export default function ZonesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-10 md:pt-14 pb-16 px-4" style={{ background: '#080808' }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-5 text-center" style={{ color: ACCENT }}>Zones d&apos;intervention</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] mb-5 tracking-tight text-center">
              Partout en <span style={{ color: ACCENT }} className="whitespace-nowrap">Île-de-France</span>
            </h1>
            <p className="text-lg text-white/65 max-w-2xl mx-auto mb-12 leading-relaxed text-center">
              Nos techniciens certifiés Certibiocide interviennent dans les 8 départements franciliens, 7j/7.
              Choisissez votre département pour voir les communes couvertes et les situations les plus courantes.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {DEPARTEMENTS_IDF.map((d) => (
                <a key={d.slug} href={`/zones/${d.slug}`}
                  className="group rounded-2xl p-6 transition-colors hover:bg-white/[0.06]"
                  style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-black text-white">{d.nom} <span style={{ color: ACCENT }}>({d.code})</span></h2>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-white/55 text-sm flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                    {d.communes.slice(0, 5).join(', ')}…
                  </p>
                </a>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="tel:+33768077219"
                className="inline-flex items-center gap-2.5 font-black text-white px-8 py-4 rounded-2xl transition-all hover:brightness-110"
                style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
                <Phone className="w-5 h-5" /> 07 68 07 72 19
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
