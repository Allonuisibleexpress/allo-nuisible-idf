// FAQ principale (/faq) : toutes les questions fréquentes du site, avec données structurées FAQPage.
import { Phone, Camera, HelpCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FaqBloc from '@/components/FaqBloc'
import { WHATSAPP } from '@/components/VilleBlocs'
import { FAQ_GENERALE, NB_QUESTIONS } from '@/lib/faq-generale'
import { pageMetadata, SITE_URL } from '@/lib/seo'

const ACCENT = '#E8441A'

export const metadata = pageMetadata({
  title: `FAQ nuisibles : ${NB_QUESTIONS} réponses de nos techniciens`,
  description: 'Prix, garantie, méthodes (insecticide, vapeur sèche, cryogénie), rats, punaises de lit, cafards, frelons : les réponses de nos techniciens certifiés.',
  path: '/faq',
})

export default function FaqPage() {
  const tout = FAQ_GENERALE.flatMap((r) => r.items)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'FAQPage', mainEntity: tout.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE_URL}/faq` },
      ] },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: '#080808' }}>
        <section className="pt-10 md:pt-14 pb-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs text-white/45 mb-5"><a href="/" className="hover:text-white">Accueil</a> / FAQ</p>
            <p className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full mb-5" style={{ color: ACCENT, background: 'rgba(232,68,26,0.1)', border: '1px solid rgba(232,68,26,0.35)' }}>
              <HelpCircle className="w-3.5 h-3.5" />Questions fréquentes
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] mb-5 tracking-tight">
              Nuisibles : <span style={{ color: ACCENT }}>{NB_QUESTIONS} réponses de nos techniciens</span>
            </h1>
            <p className="text-lg text-white/65 max-w-2xl mx-auto mb-8 leading-relaxed">
              Prix, garantie, méthodes de traitement, rats, punaises de lit, cafards, frelons, saisons : tout ce qu’on nous demande au téléphone, expliqué simplement.
            </p>
            <nav className="flex flex-wrap justify-center gap-2" aria-label="Rubriques de la FAQ">
              {FAQ_GENERALE.map((r) => (
                <a key={r.id} href={`#${r.id}`} className="text-sm font-bold text-white px-4 py-2 rounded-full hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.18)' }}>{r.titre}</a>
              ))}
            </nav>
          </div>
        </section>

        {FAQ_GENERALE.map((r, i) => (
          <div key={r.id} id={r.id} className="scroll-mt-20">
            <FaqBloc titre={r.titre} items={r.items} fond={i % 2 ? '#0d0d0d' : '#111'} schema={false} />
          </div>
        ))}

        <section className="py-14 px-4 text-center" style={{ background: '#080808' }}>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Vous ne trouvez pas votre réponse ?</h2>
          <p className="text-white/65 mb-6">Appelez-nous ou envoyez une photo : un technicien vous répond gratuitement, 7j/7.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+33768077219" className="inline-flex items-center gap-2.5 font-black text-white px-8 py-4 rounded-2xl hover:brightness-110" style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
              <Phone className="w-5 h-5" /> 07 68 07 72 19
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 font-black text-white px-8 py-4 rounded-2xl hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
              <Camera className="w-5 h-5" /> Envoyer une photo sur WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
