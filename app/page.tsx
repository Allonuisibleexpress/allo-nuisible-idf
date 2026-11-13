import { GERANT } from '@/lib/seo'
import { pageMetadata } from '@/lib/seo'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import NosNuisibles from '@/components/NosNuisibles'
import AvantApres from '@/components/AvantApres'
import PourquoiNous from '@/components/PourquoiNous'
import QuiSommesNous from '@/components/QuiSommesNous'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PhotosChantiers from '@/components/PhotosChantiers'
import AvisDefilants from '@/components/AvisDefilants'
import AccueilVilles from '@/components/AccueilVilles'
import { CHAINE_YOUTUBE } from '@/lib/youtube'

export const metadata = pageMetadata({
  title: 'Allo Nuisible IDF : punaises de lit, rats, cafards 7j/7',
  description: 'Punaises de lit, rats, cafards, frelons à Paris et en Île-de-France. Basés à Saint-Maurice, près de Maisons-Alfort et Charenton : 7j/7, devis gratuit.',
  path: '',
})

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Allo Nuisible IDF',
  url: 'https://allonuisibleidf.fr',
  logo: 'https://allonuisibleidf.fr/logo-transparent.png',
  image: 'https://allonuisibleidf.fr/opengraph-image',
  telephone: '+33768077219',
  email: 'contact@allonuisibleidf.fr',
  '@id': 'https://allonuisibleidf.fr/#entreprise',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "6 bis Rue du Val d'Osne",
    postalCode: '94410',
    addressLocality: 'Saint-Maurice',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 48.8187651, longitude: 2.4246496 },
  hasMap: 'https://maps.google.com/?cid=11887181769674817823',
  areaServed: { '@type': 'AdministrativeArea', name: 'Île-de-France' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '€€',
  sameAs: ['https://maps.google.com/?cid=11887181769674817823', CHAINE_YOUTUBE],
  employee: GERANT,
  knowsAbout: ['Dératisation', 'Désinsectisation', 'Désinfection', 'Punaises de lit', 'Cafards', 'Guêpes et frelons', 'Fourmis', 'Dépigeonnage'],
}

const FAQ_ACCUEIL = [
  { q: 'Combien coûte une dératisation ?', a: 'À partir de 120 € TTC pour un appartement, rats ou souris, avec postes sécurisés ou pièges et colmatage des accès. Commerces et copropriétés : sur devis. Le devis est gratuit.' },
  { q: 'Quel est le prix d’un traitement contre les punaises de lit ?', a: 'À partir de 290 € TTC pour un studio ou un T1, deux passages inclus, par insecticide, cryogénie ou vapeur sèche. Pour un logement plus grand, le prix est fixé après inspection.' },
  { q: 'Pouvez-vous intervenir le jour même ?', a: 'Oui, très souvent. Nous répondons 7j/7 et intervenons rapidement à Paris et dans le Val-de-Marne, depuis notre base de Saint-Maurice.' },
  { q: 'Vos traitements sont-ils garantis ?', a: 'Oui, nos interventions sont garanties 1 an : si les nuisibles reviennent, notre technicien revient sans supplément.' },
  { q: 'Vos techniciens sont-ils certifiés ?', a: 'Oui, nos techniciens sont titulaires du Certibiocide, la certification obligatoire pour utiliser des insecticides et des raticides professionnels.' },
  { q: 'Dans quelles villes intervenez-vous ?', a: 'À Paris et dans tout le Val-de-Marne : Saint-Maurice, Maisons-Alfort, Charenton-le-Pont, Créteil, Vincennes, Saint-Maur-des-Fossés, Ivry-sur-Seine et bien d’autres, ainsi que dans une partie de l’Île-de-France.' },
]
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ_ACCUEIL.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        <Hero />
        <NosNuisibles />

        {/* Bande orange */}
        <div style={{ background: '#E8441A' }}>
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
            <span className="text-white font-black text-xl">+1 500 clients</span>
            <span className="hidden sm:inline text-white/50">·</span>
            <span className="text-white/85 font-medium text-sm">satisfaits en Île-de-France</span>
            <span className="hidden sm:inline text-white/50">·</span>
            <span className="text-white font-bold text-sm">Note Google 4,8/5</span>
            <span className="hidden sm:inline text-white/50">·</span>
            <span className="text-white font-bold text-sm">7j/7 · 24h/24</span>
          </div>
        </div>

        {/* Garantie 1 an */}
        <section style={{ background: '#141414', padding: '52px 16px' }}>
          <div className="max-w-2xl mx-auto">
            <div style={{
              borderRadius: '22px', padding: '40px 36px', textAlign: 'center',
              position: 'relative', overflow: 'hidden',
              background: 'rgba(232,68,26,0.05)', border: '1.5px solid rgba(232,68,26,0.25)',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg,transparent,#E8441A,transparent)' }} />
              <p style={{ color: '#E8441A', fontSize: '10.5px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Garantie résultat
              </p>
              <div style={{ fontSize: 'clamp(56px,15vw,88px)', fontWeight: 900, color: '#E8441A', lineHeight: 0.88, marginBottom: '14px' }}>
                1 an
              </div>
              <p style={{ color: 'white', fontSize: '17px', fontWeight: 800, marginBottom: '10px', lineHeight: 1.35 }}>
                Si les nuisibles reviennent, on revient sans frais.
              </p>
              <p style={{ color: 'rgba(255,255,255,.4)', fontSize: '13px', lineHeight: 1.75, maxWidth: '420px', margin: '0 auto 24px' }}>
                Toute intervention est garantie 1 an. En cas de réapparition, notre technicien revient sans aucun supplément.
              </p>
              <a href="tel:+33768077219"
                className="inline-flex items-center gap-2 font-bold text-white px-6 py-3 rounded-full text-sm"
                style={{ background: '#E8441A', boxShadow: '0 4px 20px rgba(232,68,26,0.3)' }}>
                Appeler pour un devis gratuit
              </a>
            </div>
          </div>
        </section>

        <AccueilVilles />
        <QuiSommesNous />
        <PourquoiNous />
        <AvantApres />
        <PhotosChantiers photos={['cryoFoyer', 'litCryo', 'nidGuepes', 'toit']} />
        <AvisDefilants fond="#111" />

        {/* FAQ */}
        <section className="py-16 md:py-24 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3 text-center">Vos questions, <span style={{ color: '#E8441A' }}>nos réponses</span></h2>
            <p className="text-white/55 text-center mb-10">Prix, délais, garantie : l’essentiel avant d’appeler.</p>
            <div className="space-y-3">
              {FAQ_ACCUEIL.map((f) => (
                <details key={f.q} className="group rounded-xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <summary className="cursor-pointer font-bold text-white list-none flex justify-between gap-4">
                    {f.q}<span className="text-white/40 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-white/65 text-sm leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  )
}
