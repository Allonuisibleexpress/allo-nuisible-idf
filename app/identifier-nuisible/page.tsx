// Page « Identifier un nuisible » (/identifier-nuisible) : test interactif, comparateurs de sosies, 28 fiches photo.
// Vise « identifier un insecte », « quelle est cette bête », « reconnaître un nuisible ».
import { Phone, Camera, ShieldCheck, Search, Clock, Hand, Ruler } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Detective, Galerie, Scanner } from '@/components/IdentifierNuisible'
import { FICHES } from '@/lib/identifier-nuisibles'
import { pageMetadata, SITE_URL } from '@/lib/seo'

const ACCENT = '#E8441A'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

export const metadata = pageMetadata({
  title: 'Identifier un nuisible : test et 28 fiches photo',
  description: 'Piqûres, crottes, bête qui court ou qui vole ? Faites le test, comparez les sosies et 28 nuisibles en photo. Un technicien certifié confirme gratuitement.',
  path: '/identifier-nuisible',
})

const REFLEXES = [
  { icon: Camera, titre: 'Photographiez-la', texte: 'Une photo nette, de près, avec une pièce ou une règle à côté pour donner l’échelle.' },
  { icon: Hand, titre: 'Ne l’écrasez pas', texte: 'Piégez-la sous un verre ou sur du ruban adhésif : intacte, elle s’identifie bien mieux.' },
  { icon: Clock, titre: 'Notez où et quand', texte: 'La pièce, l’heure, la saison : une bête qui sort la nuit en cuisine n’est pas celle du lit.' },
  { icon: Ruler, titre: 'Mesurez-la', texte: 'Grain de riz, pépin de pomme, pièce de 1 € : la taille élimine la moitié des suspects.' },
]

const PIQURES = [
  ['Punaise de lit', 'Bras, dos, cou, visage', 'La nuit, découvert au réveil', 'Piqûres en ligne ou en grappe de 3 ou 4'],
  ['Puce', 'Chevilles, mollets', 'À toute heure', 'Animal qui se gratte, bête qui saute'],
  ['Moustique tigre', 'Jambes, bras', 'En journée, dehors', 'Moustique rayé noir et blanc'],
  ['Moustique commun', 'Visage, mains', 'La nuit', 'Bourdonnement aigu près de l’oreille'],
  ['Acarien', 'Aucune piqûre', 'Au lit', 'Éternuements, nez bouché, yeux qui grattent'],
]

const CROTTES = [
  ['Rat', '1 à 2 cm, en fuseau', 'Le long des murs, cave, local poubelles'],
  ['Souris', '3 à 6 mm, comme un grain de riz', 'Placards, tiroirs, derrière l’électroménager'],
  ['Blatte (cafard)', 'Comme du poivre moulu', 'Charnières, derrière le frigo, sous l’évier'],
  ['Punaise de lit', 'Petits points noirs qui tachent', 'Coutures du matelas, sommier, tête de lit'],
  ['Pigeon', 'Fientes blanches et grises', 'Balcon, rebords, jardinières'],
]

const SOSIES = [
  {
    titre: 'Punaise de lit, punaise des bois ou bébé cafard ?',
    lignes: [
      ['Punaise de lit', '5 à 7 mm, plate, brun-rouge, sans ailes', 'Dans le lit, pique la nuit', '#punaise-de-lit'],
      ['Punaise diabolique', '1,2 à 1,7 cm, en bouclier, marbrée', 'Aux fenêtres en automne, ne pique pas', '#punaise-diabolique'],
      ['Jeune blatte', 'Quelques mm, brun foncé, longues antennes', 'En cuisine, court très vite', '#blatte-germanique'],
    ],
  },
  {
    titre: 'Frelon asiatique, frelon européen ou guêpe ?',
    lignes: [
      ['Frelon asiatique', '2,5 à 3 cm, noir, un anneau orange', 'Pattes jaunes au bout, nid souvent très haut', '#frelon-asiatique'],
      ['Frelon européen', '2,5 à 3,5 cm, roux et jaune', 'Le plus gros, vole aussi la nuit', '#frelon-europeen'],
      ['Guêpe commune', '1,2 à 1,8 cm, jaune vif et noir', 'Taille très fine, attirée par le sucre', '#guepe'],
    ],
  },
  {
    titre: 'Rat ou souris ?',
    lignes: [
      ['Rat brun', '20 à 27 cm sans la queue', 'Museau arrondi, petites oreilles, crottes de 1 à 2 cm', '#rat'],
      ['Souris', '7 à 10 cm sans la queue', 'Grandes oreilles, crottes de 3 à 6 mm', '#souris'],
    ],
  },
]

const FAQ = [
  { q: 'Comment identifier un insecte trouvé chez moi ?', a: 'Notez sa taille, sa forme, sa couleur, la pièce et l’heure où vous l’avez vu, puis faites notre test ou comparez-le aux fiches photo. Pour une réponse sûre, envoyez-nous une photo sur WhatsApp au 07 68 07 72 19 : un technicien certifié vous répond gratuitement.' },
  { q: 'Comment savoir si ce sont des punaises de lit ?', a: 'Cherchez des piqûres groupées ou en ligne au réveil, des petits points noirs dans les coutures du matelas, des traces de sang sur les draps et des mues vides. La bête adulte mesure 5 à 7 mm, elle est plate et brun-rouge. Au moindre doute, envoyez une photo.' },
  { q: 'Quelle petite bête argentée vit dans ma salle de bain ?', a: 'C’est presque toujours un poisson d’argent : gris argenté, en forme de goutte, avec trois filaments au bout du corps. Il est inoffensif mais signale un excès d’humidité.' },
  { q: 'Comment reconnaître un frelon asiatique ?', a: 'Il est noir avec un seul anneau orangé sur l’abdomen et le bout des pattes jaune. Le frelon européen, lui, est roux et jaune et plus gros. Dans les deux cas, ne vous approchez pas du nid.' },
  { q: 'L’identification est-elle vraiment gratuite ?', a: 'Oui. Envoyez une photo nette, si possible avec une pièce à côté pour l’échelle : un technicien vous dit de quoi il s’agit et si un traitement est utile. Sans engagement.' },
]

export default function IdentifierNuisiblePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Identifier un nuisible', item: `${SITE_URL}/identifier-nuisible` },
        ],
      },
      { '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: '#080808' }}>
        {/* ── HERO ── */}
        <section className="pt-10 md:pt-14 pb-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs text-white/60 mb-5"><a href="/" className="hover:text-white">Accueil</a> / Identifier un nuisible</p>
            <Scanner />
            <p className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full mb-5" style={{ color: ACCENT, background: 'rgba(232,68,26,0.1)', border: '1px solid rgba(232,68,26,0.35)' }}>
              <Search className="w-3.5 h-3.5" />Identification gratuite
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] mb-5 tracking-tight">
              Quelle est cette bête ? <span style={{ color: ACCENT }}>Identifiez votre nuisible en 30 secondes</span>
            </h1>
            <p className="text-lg text-white/65 max-w-2xl mx-auto mb-7 leading-relaxed">
              Des <strong className="text-white">piqûres au réveil</strong>, des <strong className="text-white">crottes dans le placard</strong>, une <strong className="text-white">bête qui file sous l’évier</strong> ? Menez l’enquête avec notre test, démasquez les sosies et comparez <strong className="text-white">{FICHES.length} nuisibles en photo</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#test" className="inline-flex items-center gap-2 font-black text-white px-7 py-4 rounded-2xl hover:brightness-110" style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
                <Search className="w-5 h-5" />Faire le test
              </a>
              <a href="https://wa.me/33768077219?text=Bonjour%2C%20voici%20une%20photo%20du%20nuisible%20trouv%C3%A9%20chez%20moi%20%3A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-black text-white px-7 py-4 rounded-2xl hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
                <Camera className="w-5 h-5" />Envoyer une photo sur WhatsApp
              </a>
            </div>
            <p className="text-white/60 text-sm mt-4">Gratuit, sans engagement, réponse d’un technicien certifié Certibiocide.</p>
          </div>
        </section>

        {/* ── TEST ── */}
        <section id="test" className="py-12 md:py-16 px-4 scroll-mt-20" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Le test du détective : <span style={{ color: ACCENT }}>2 ou 3 questions, un verdict</span></h2>
            <p className="text-white/60 mb-8">Partez de ce que vous avez constaté. Pas besoin d’avoir vu la bête.</p>
            <Detective />
          </div>
        </section>

        {/* ── RÉFLEXES ── */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Avant tout : <span style={{ color: ACCENT }}>les 4 réflexes</span> pour une identification sûre</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {REFLEXES.map((r) => (
                <div key={r.titre} className="rounded-2xl p-5" style={card}>
                  <r.icon className="w-7 h-7 mx-auto mb-3" style={{ color: ACCENT }} />
                  <p className="text-white font-black mb-1">{r.titre}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{r.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PIQÛRES ET CROTTES ── */}
        <section className="py-12 md:py-16 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3 text-center">Qui vous a piqué ? <span style={{ color: ACCENT }}>Le tableau qui tranche</span></h2>
            <p className="text-white/60 text-center mb-6">L’endroit et l’heure des piqûres trahissent presque toujours le coupable.</p>
            <div className="overflow-x-auto rounded-2xl mb-12" style={card}>
              <table className="w-full text-sm text-left">
                <thead><tr className="text-white"><th className="p-4">Coupable</th><th className="p-4">Où sur le corps</th><th className="p-4">Quand</th><th className="p-4">L’indice décisif</th></tr></thead>
                <tbody className="text-white/70">
                  {PIQURES.map((l) => (
                    <tr key={l[0]} style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                      <td className="p-4 text-white font-bold">{l[0]}</td><td className="p-4">{l[1]}</td><td className="p-4">{l[2]}</td><td className="p-4">{l[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-white mb-3 text-center">Des crottes ? <span style={{ color: ACCENT }}>Voici qui est passé</span></h2>
            <p className="text-white/60 text-center mb-6">Ne les touchez jamais à mains nues : utilisez des gants.</p>
            <div className="overflow-x-auto rounded-2xl" style={card}>
              <table className="w-full text-sm text-left">
                <thead><tr className="text-white"><th className="p-4">Visiteur</th><th className="p-4">À quoi elles ressemblent</th><th className="p-4">Où on les trouve</th></tr></thead>
                <tbody className="text-white/70">
                  {CROTTES.map((l) => (
                    <tr key={l[0]} style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                      <td className="p-4 text-white font-bold">{l[0]}</td><td className="p-4">{l[1]}</td><td className="p-4">{l[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── SOSIES ── */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3 text-center">Les sosies <span style={{ color: ACCENT }}>qui trompent tout le monde</span></h2>
            <p className="text-white/60 text-center mb-8">Ces confusions sont les plus fréquentes au téléphone. Elles changent tout au traitement.</p>
            <div className="space-y-8">
              {SOSIES.map((s) => (
                <div key={s.titre}>
                  <h3 className="text-lg md:text-xl font-black text-white mb-3 text-center">{s.titre}</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {s.lignes.map((l) => (
                      <a key={l[0]} href={l[3]} className="rounded-2xl p-5 block hover:-translate-y-0.5 transition text-center" style={card}>
                        <p className="text-white font-black mb-1">{l[0]}</p>
                        <p className="text-sm mb-1" style={{ color: ACCENT }}>{l[1]}</p>
                        <p className="text-white/60 text-sm">{l[2]}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALERIE ── */}
        <section id="fiches" className="py-12 md:py-16 px-4 scroll-mt-20" style={{ background: '#0d0d0d' }}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Les {FICHES.length} nuisibles <span style={{ color: ACCENT }}>les plus courants en Île-de-France</span>, en photo</h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">Filtrez par pièce ou tapez ce que vous avez vu. Chaque fiche indique la taille, les indices, le niveau d’urgence et le bon réflexe.</p>
            <Galerie />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">Questions fréquentes</h2>
            <div className="space-y-3">
              {FAQ.map((f) => (
                <details key={f.q} className="group rounded-xl px-5 py-4" style={card}>
                  <summary className="cursor-pointer font-bold text-white list-none flex justify-between gap-4">{f.q}<span className="text-white/60 group-open:rotate-45 transition-transform">+</span></summary>
                  <p className="text-white/65 text-sm leading-relaxed mt-3">{f.a}</p>
                </details>
              ))}
            </div>
            <div className="flex items-start gap-3 mt-8 rounded-2xl p-5" style={card}>
              <ShieldCheck className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
              <p className="text-white/60 text-sm">Rédigé par Houssem Hattab, gérant d’Allo Nuisible IDF, et nos techniciens titulaires du Certibiocide. Photos : Wikimedia Commons, auteurs et licences indiqués sous chaque photo.</p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-14 px-4 text-center" style={{ background: '#0d0d0d' }}>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Toujours un doute ? <span style={{ color: ACCENT }}>On l’identifie pour vous</span></h2>
          <p className="text-white/65 mb-6">Envoyez une photo ou appelez : réponse gratuite d’un technicien, devis gratuit si un traitement est nécessaire, 7j/7.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/33768077219?text=Bonjour%2C%20voici%20une%20photo%20du%20nuisible%20trouv%C3%A9%20chez%20moi%20%3A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 font-black text-white px-8 py-4 rounded-2xl hover:brightness-110" style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
              <Camera className="w-5 h-5" />Envoyer une photo sur WhatsApp
            </a>
            <a href="tel:+33768077219" className="inline-flex items-center gap-2.5 font-black text-white px-8 py-4 rounded-2xl hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
              <Phone className="w-5 h-5" />07 68 07 72 19
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
