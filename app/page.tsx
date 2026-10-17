import { pageMetadata } from '@/lib/seo'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import NosNuisibles from '@/components/NosNuisibles'
import AvantApres from '@/components/AvantApres'
import PourquoiNous from '@/components/PourquoiNous'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata = pageMetadata({
  title: 'Lutte contre les nuisibles 7j/7 en Île-de-France',
  description: 'Rats, cafards, punaises de lit, guêpes : techniciens certifiés Certibiocide, intervention le jour même en Île-de-France, 7j/7. Devis gratuit.',
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
  email: 'allonuisibleidf@gmail.com',
  areaServed: { '@type': 'AdministrativeArea', name: 'Île-de-France' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  knowsAbout: ['Dératisation', 'Désinsectisation', 'Désinfection', 'Punaises de lit', 'Cafards', 'Guêpes et frelons', 'Fourmis', 'Dépigeonnage'],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
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
            <span className="text-white font-bold text-sm">Note Google 5/5</span>
            <span className="hidden sm:inline text-white/50">·</span>
            <span className="text-white font-bold text-sm">7j/7 · 24h/24</span>
          </div>
        </div>

        {/* Garantie 1 mois */}
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
                1 mois
              </div>
              <p style={{ color: 'white', fontSize: '17px', fontWeight: 800, marginBottom: '10px', lineHeight: 1.35 }}>
                Si les nuisibles reviennent, on revient sans frais.
              </p>
              <p style={{ color: 'rgba(255,255,255,.4)', fontSize: '13px', lineHeight: 1.75, maxWidth: '420px', margin: '0 auto 24px' }}>
                Toute intervention est garantie 1 mois. En cas de réapparition, notre technicien revient sans aucun supplément.
              </p>
              <a href="tel:+33768077219"
                className="inline-flex items-center gap-2 font-bold text-white px-6 py-3 rounded-full text-sm"
                style={{ background: '#E8441A', boxShadow: '0 4px 20px rgba(232,68,26,0.3)' }}>
                Appeler pour un devis gratuit
              </a>
            </div>
          </div>
        </section>

        <PourquoiNous />
        <AvantApres />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
