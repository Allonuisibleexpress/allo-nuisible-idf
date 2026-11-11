import FaqBloc from '@/components/FaqBloc'
import { Phone, ArrowRight, MapPin } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { pageMetadata } from '@/lib/seo'
import { DEPARTEMENTS_IDF } from '@/lib/departements'
import { premierePhrase } from '@/lib/maillage'
import { SERVICES_DEP, DEPS, DEP_SLUGS, type ServiceDep } from '@/lib/departements-services'
import { villesDuDepartement } from '@/lib/services-ville'

const ACCENT = '#E8441A'

export const metadata = pageMetadata({
  title: 'Zones d\'intervention : les 8 départements d\'Île-de-France',
  description: 'Paris, Seine-et-Marne, Yvelines, Essonne, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Val-d\'Oise : nos techniciens interviennent 7j/7.',
  path: '/zones',
})

export default function ZonesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://allonuisibleidf.fr' },{ '@type': 'ListItem', position: 2, name: 'Zones d’intervention', item: 'https://allonuisibleidf.fr/zones' }] }) }} />
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
                  <p className="text-white/65 text-sm leading-relaxed mb-3">{premierePhrase(d.intro[0])}</p>
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
        {/* ── PAGES PAR NUISIBLE ET PAR DÉPARTEMENT (11/11/2026) ── */}
        <section className="py-16 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Votre nuisible, <span style={{ color: ACCENT }}>votre département</span></h2>
            <p className="text-white/65 max-w-3xl mx-auto mb-4 leading-relaxed">
              Rats, punaises de lit, cafards, frelons : les nuisibles ne sont pas les mêmes dans un immeuble ancien de Paris, une résidence de ville nouvelle ou une maison en bordure de champs.
              Chaque département a donc ses pages, avec les situations les plus fréquentes, nos méthodes et nos prix.
            </p>
            <p className="text-white/50 max-w-3xl mx-auto mb-10 text-sm">
              Le devis est gratuit et nos prix de départ sont les mêmes partout en Île-de-France. Basés à Saint-Maurice, nous intervenons 7j/7.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {DEP_SLUGS.map((dep) => (
                <div key={dep} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-white font-black mb-1">{DEPS[dep].nom} <span style={{ color: ACCENT }}>({DEPS[dep].code})</span></p>
                  <p className="text-white/45 text-xs mb-3">{villesDuDepartement(DEPS[dep].code).length} {dep === 'paris' ? 'arrondissements' : 'villes'} avec des pages dédiées</p>
                  <ul className="space-y-1.5">
                    {(Object.keys(SERVICES_DEP) as ServiceDep[]).map((sv) => (
                      <li key={sv}><a href={`${SERVICES_DEP[sv].base}/${dep}`} className="text-sm text-white/75 hover:text-white inline-flex items-center gap-1.5">
                        <ArrowRight className="w-3.5 h-3.5" style={{ color: ACCENT }} />{SERVICES_DEP[sv].label} {DEPS[dep].dans}
                      </a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <FaqBloc titre="Nos zones d’intervention : vos questions" items={[
          { q: 'Où êtes-vous basés ?', a: 'À Saint-Maurice (94410), 6 bis rue du Val d’Osne. Nous intervenons à Paris, dans le Val-de-Marne, les Hauts-de-Seine, l’Essonne, les Yvelines, la Seine-et-Marne et le reste de l’Île-de-France.' },
          { q: 'Intervenez-vous en dehors du Val-de-Marne ?', a: 'Oui, à Paris, dans les Hauts-de-Seine et dans les autres départements d’Île-de-France, selon nos disponibilités.' },
          { q: 'Vos prix changent-ils selon la ville ?', a: 'Nos prix de départ sont les mêmes partout en Île-de-France. Le devis est gratuit et fixé avant l’intervention.' },
          { q: 'Intervenez-vous le week-end ?', a: 'Oui, 7j/7, y compris le week-end et les jours fériés.' },
        ]} />
      </main>
      <Footer />
    </>
  )
}
