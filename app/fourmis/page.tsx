// Page « Les types de fourmis » (/fourmis) : reconnaître l'espèce, une reine ou plusieurs, le bon traitement.
// Vise les recherches « types de fourmis », « espèces de fourmis », « reconnaître une fourmi ».
// La page /services/fourmis reste la page « traitement des fourmis » (un mot-clé = une page).
// Sources : FREDON, Futura-Sciences, OFEV (Suisse), canton de Genève, Espace pour la vie (Montréal).
import { Phone, ArrowRight, MapPin, Crown, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { IconFourmi } from '@/components/PestIcons'
import { pageMetadata, SITE_URL } from '@/lib/seo'
import { VILLES_FOURMIS, SOURCES_FOURMIS } from '@/lib/villes-fourmis'

const ACCENT = '#E8441A'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

export const metadata = pageMetadata({
  title: 'Types de fourmis : 11 espèces à reconnaître en IDF',
  description: 'Fourmi noire, pharaon, charpentière, Tapinoma, fourmis rouges : reconnaître l\'espèce, savoir si la colonie a une ou plusieurs reines, et la traiter.',
  path: '/fourmis',
})

type Espece = {
  nom: string
  latin: string
  aspect: string
  ou: string
  reines: string
  plusieurs: boolean
  traitement: string
  note?: string
  lien?: { href: string; label: string }
}

// Photos : Wikimedia Commons, licences libres, auteur et licence affichés sous chaque photo
const PHOTOS: Record<string, { src: string; credit: string; licence: string; page: string; legende?: string }> = {
  "Lasius niger": { src: '/fourmis/lasius-niger.jpg', credit: "Katja Schulz from Washington, D. C., USA", licence: "CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:Black_Garden_Ant_tending_Citrus_Mealybug_(16063538972).jpg" },
  "Lasius emarginatus": { src: '/fourmis/lasius-emarginatus.jpg', credit: "Hectonichus", licence: "CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Formicidae_-_Lasius_emarginatus.JPG" },
  "Lasius brunneus": { src: '/fourmis/lasius-brunneus.jpg', credit: "April Nobile", licence: "CC BY 4.0", page: "https://commons.wikimedia.org/wiki/File:Lasius_brunneus_casent0172717_profile_1.jpg" },
  "Camponotus": { src: '/fourmis/camponotus-ligniperda.jpg', credit: "April Nobile", licence: "CC BY 4.0", page: "https://commons.wikimedia.org/wiki/File:Camponotus_ligniperda_casent0173649_profile_1.jpg", legende: 'Camponotus ligniperda, une fourmi charpentière' },
  "Monomorium pharaonis": { src: '/fourmis/monomorium-pharaonis.jpg', credit: "April Nobile", licence: "CC BY 4.0", page: "https://commons.wikimedia.org/wiki/File:Monomorium_pharaonis_casent0173986_profile_1.jpg" },
  "Myrmica": { src: '/fourmis/myrmica-rubra.jpg', credit: "AntWeb.org", licence: "CC BY 4.0", page: "https://commons.wikimedia.org/wiki/File:Myrmica_rubra_casent0010684_profile_1.jpg", legende: 'Myrmica rubra' },
  "Tetramorium": { src: '/fourmis/tetramorium-caespitum.jpg', credit: "AntWeb.org", licence: "CC BY 4.0", page: "https://commons.wikimedia.org/wiki/File:Tetramorium_caespitum_casent0010669_profile_1.jpg", legende: 'Tetramorium caespitum' },
  "Lasius flavus": { src: '/fourmis/lasius-flavus.jpg', credit: "AJC1 from UK", licence: "CC BY-SA 2.0", page: "https://commons.wikimedia.org/wiki/File:Angry_Ant_(Explored)_(31456859231).jpg" },
  "Formica rufa (groupe)": { src: '/fourmis/formica-rufa.jpg', credit: "Richard Bartz, Munich Makro Freak", licence: "CC BY-SA 2.5", page: "https://commons.wikimedia.org/wiki/File:A_Formica_rufa_sideview.jpg" },
  "Tapinoma magnum": { src: '/fourmis/tapinoma-magnum.jpg', credit: "Estella Ortega", licence: "CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Tapinoma-nigerrimum-side.jpg", legende: 'Tapinoma du groupe nigerrimum, très proche de T. magnum' },
  "Lasius neglectus": { src: '/fourmis/lasius-neglectus.jpg', credit: "April Nobile", licence: "CC BY 4.0", page: "https://commons.wikimedia.org/wiki/File:Lasius_neglectus_casent0173143_profile_1.jpg" },
}

const MAISON: Espece[] = [
  {
    nom: 'Fourmi noire des jardins', latin: 'Lasius niger',
    aspect: 'Petite, noire à brun foncé. La plus répandue.',
    ou: 'Niche dehors : pelouses, sous les dalles, au pied des murs. Entre au printemps et en été pour chercher du sucre, et élève des pucerons sur les plantes.',
    reines: 'Une seule reine en général', plusieurs: false,
    traitement: 'Gel appât sur les pistes, rapporté à la reine par les ouvrières.',
  },
  {
    nom: 'Fourmi des maisons', latin: 'Lasius emarginatus',
    aspect: 'Petite, bicolore : thorax rougeâtre, tête et abdomen sombres.',
    ou: 'Niche dans les murs, la maçonnerie et les fissures. Entre dans les logements au printemps à la recherche de nourriture.',
    reines: 'Une seule reine en général', plusieurs: false,
    traitement: 'Gel appât, et recherche du nid dans le mur quand la piste y mène.',
  },
  {
    nom: 'Fourmi brune', latin: 'Lasius brunneus',
    aspect: 'Petite, brune, discrète.',
    ou: 'Niche dans le bois : vieux arbres, poutres, boiseries. Peut entrer dans les maisons depuis une charpente ou un arbre proche.',
    reines: 'Une seule reine en général', plusieurs: false,
    traitement: 'Traitement du nid dans le bois et appât sur les pistes.',
  },
  {
    nom: 'Fourmi charpentière', latin: 'Camponotus',
    aspect: 'Grande, noire ou bicolore, bien plus grosse que la fourmi des jardins.',
    ou: 'Creuse le bois humide ou abîmé pour y nicher : poutres, fenêtres, terrasses. Elle ne mange pas le bois, mais rejette une sciure fine.',
    reines: 'Une seule reine en général', plusieurs: false,
    traitement: 'Injection dans les galeries du bois, puis réparation du bois humide.',
  },
  {
    nom: 'Fourmi pharaon', latin: 'Monomorium pharaonis',
    aspect: 'Minuscule, jaune pâle.',
    ou: 'Vit à l\'intérieur des bâtiments chauffés, toute l\'année : derrière les plinthes, dans les prises, les cloisons. Peut transporter des bactéries, un problème en milieu de soins.',
    reines: 'De nombreuses reines', plusieurs: true,
    traitement: 'Appât adapté uniquement. Jamais de spray : la colonie se divise et se disperse.',
  },
]

const JARDIN: Espece[] = [
  {
    nom: 'Fourmis rouges', latin: 'Myrmica',
    aspect: 'Petites, rousses. Elles piquent, et la piqûre brûle quelques minutes.',
    ou: 'Pelouses humides, sous les pierres, les bordures et les pots.',
    reines: 'Souvent plusieurs reines', plusieurs: true,
    traitement: 'Traitement direct du nid quand elles nichent près de la maison ou d\'une aire de jeux.',
  },
  {
    nom: 'Fourmi des pavés', latin: 'Tetramorium',
    aspect: 'Petite, brun-noir.',
    ou: 'Sous les pavés, les trottoirs et les dalles : on la repère aux petits tas de sable entre les joints.',
    reines: 'Colonie installée sous les dalles', plusieurs: false,
    traitement: 'Appât aux joints, sans soulever les dalles, puis rejointoiement.',
  },
  {
    nom: 'Fourmi jaune', latin: 'Lasius flavus',
    aspect: 'Petite, jaune.',
    ou: 'Vit presque entièrement sous terre et forme des monticules dans les pelouses. Entre rarement dans les maisons.',
    reines: 'Colonie souterraine', plusieurs: false,
    traitement: 'En général aucun : on ne traite que si les monticules posent un vrai problème.',
  },
  {
    nom: 'Fourmi rousse des bois', latin: 'Formica rufa (groupe)',
    aspect: 'Grande, rousse et noire. Construit des dômes d\'aiguilles de pin et de brindilles.',
    ou: 'En forêt et en lisière, jamais dans les logements.',
    reines: 'Colonies parfois très grandes', plusieurs: true,
    traitement: 'On ne la détruit pas : elle est utile à la forêt, et protégée dans certains pays voisins.',
  },
]

const ENVAHISSANTES: Espece[] = [
  {
    nom: 'Fourmi Tapinoma', latin: 'Tapinoma magnum',
    aspect: 'Petite, noire et brillante. Dégage une odeur forte quand on l\'écrase.',
    ou: 'Arrivée en France dans les années 2000, elle se diffuse notamment par les plantes en pot. Elle forme des supercolonies qui peuvent couvrir plus de 20 hectares et envahit maisons, jardins et installations électriques.',
    reines: 'Très nombreuses reines (supercolonies)', plusieurs: true,
    traitement: 'Appâts adaptés, plusieurs passages et action avec les voisins : un traitement isolé ne suffit pas.',
    lien: { href: '/blog/tapinoma-magnum-fourmi-invasive', label: 'Tout savoir sur Tapinoma magnum' },
  },
  {
    nom: 'Fourmi des jardins envahissante', latin: 'Lasius neglectus',
    aspect: 'Ressemble à la fourmi noire des jardins, en plus clair.',
    ou: 'Espèce envahissante surveillée en France, qui forme elle aussi des supercolonies dans les parcs et jardins.',
    reines: 'Très nombreuses reines (supercolonies)', plusieurs: true,
    traitement: 'Comme pour Tapinoma : appâts, passages répétés, action coordonnée.',
  },
]

function Carte({ e }: { e: Espece }) {
  return (
    <div className="rounded-2xl p-6 flex flex-col overflow-hidden" style={card}>
      {PHOTOS[e.latin] && (
        <figure className="-mx-6 -mt-6 mb-4">
          <img src={PHOTOS[e.latin].src} alt={`${e.nom} (${e.latin}) en photo`} loading="lazy" width={520} height={390}
            className={`w-full h-44 rounded-t-2xl ${/April Nobile|AntWeb/.test(PHOTOS[e.latin].credit) ? 'object-contain bg-white p-2' : 'object-cover'}`} />
          <figcaption className="px-6 pt-1.5 text-[10px] text-white/35 leading-snug">
            {PHOTOS[e.latin].legende ? `${PHOTOS[e.latin].legende}. ` : ''}Photo : <a href={PHOTOS[e.latin].page} target="_blank" rel="noopener noreferrer nofollow" className="underline">{PHOTOS[e.latin].credit}</a>, {PHOTOS[e.latin].licence}
          </figcaption>
        </figure>
      )}
      <div className="flex items-start gap-3 mb-3">
        <span style={{ color: ACCENT }}><IconFourmi className="w-7 h-7 flex-shrink-0" /></span>
        <div>
          <h3 className="text-white font-black text-lg leading-tight">{e.nom}</h3>
          <p className="text-white/45 text-sm italic">{e.latin}</p>
        </div>
      </div>
      <p className="text-white/80 text-sm leading-relaxed mb-2">{e.aspect}</p>
      <p className="text-white/60 text-sm leading-relaxed mb-4">{e.ou}</p>
      <p className="inline-flex items-center gap-1.5 self-start text-xs font-bold px-3 py-1.5 rounded-full mb-3"
        style={e.plusieurs ? { background: 'rgba(232,68,26,0.15)', color: ACCENT, border: '1px solid rgba(232,68,26,0.45)' } : { background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.75)' }}>
        <Crown className="w-3.5 h-3.5" />{e.reines}
      </p>
      <p className="text-white/70 text-sm leading-relaxed"><strong className="text-white">Traitement : </strong>{e.traitement}</p>
      {e.lien && (
        <a href={e.lien.href} className="inline-flex items-center gap-1 text-sm font-bold mt-3" style={{ color: ACCENT }}>
          {e.lien.label} <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </div>
  )
}

function Groupe({ id, titre, intro, especes, fond }: { id: string; titre: string; intro: string; especes: Espece[]; fond: string }) {
  return (
    <section id={id} className="py-14 md:py-20 px-4 scroll-mt-20" style={{ background: fond }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{titre}</h2>
        <p className="text-white/65 leading-relaxed mb-8 max-w-3xl">{intro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {especes.map((e) => <Carte key={e.latin} e={e} />)}
        </div>
      </div>
    </section>
  )
}

const FAQ = [
  { q: 'Comment savoir quelle fourmi j\'ai chez moi ?', a: 'Regardez la taille, la couleur et l\'endroit : petite et noire en cuisine au printemps, c\'est souvent la fourmi noire des jardins ; minuscule et jaune pâle toute l\'année en appartement, la fourmi pharaon ; grande et noire près du bois, une fourmi charpentière. Envoyez-nous une photo, nous vous aidons à l\'identifier.' },
  { q: 'Pourquoi faut-il tuer la reine ?', a: 'Parce que c\'est elle qui pond. Les fourmis que vous voyez sont des ouvrières : la colonie les remplace tant que la reine vit. Un appât à action lente est rapporté au nid par les ouvrières et atteint la reine.' },
  { q: 'Que faire quand il y a plusieurs reines ?', a: 'Chez la fourmi pharaon, la fourmi Tapinoma ou les fourmis rouges, la colonie a de nombreuses reines et peut se diviser. Il faut un appât adapté, ne jamais pulvériser, et prévoir des passages de contrôle.' },
  { q: 'Combien de temps vit une reine des fourmis ?', a: 'De 5 à 20 ans selon les espèces, environ 20 ans chez la fourmi noire des jardins, contre 1 à 2 ans pour une ouvrière. C\'est pour cela qu\'une colonie revient chaque année tant que la reine n\'est pas atteinte.' },
  { q: 'Les fourmis volantes sont-elles une espèce à part ?', a: 'Non. Ce sont les futures reines et les mâles d\'une colonie, qui sortent quelques jours par an pour s\'accoupler. Si elles apparaissent à l\'intérieur, le nid est tout proche.' },
]

export default function FourmisTypesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Fourmis', item: `${SITE_URL}/services/fourmis` },
          { '@type': 'ListItem', position: 3, name: 'Types de fourmis', item: `${SITE_URL}/fourmis` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: '#080808' }}>
        {/* ── HERO ── */}
        <section className="pt-10 md:pt-14 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs text-white/45 mb-5">
              <a href="/" className="hover:text-white">Accueil</a> / <a href="/services/fourmis" className="hover:text-white">Fourmis</a> / Types de fourmis
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-[1.05] mb-5 tracking-tight">
              Les types de fourmis <span style={{ color: ACCENT }}>en Île-de-France</span>
            </h1>
            <p className="text-lg text-white/65 max-w-2xl mx-auto mb-8 leading-relaxed">
              Fourmi noire des jardins, fourmi pharaon, fourmi charpentière, fourmis rouges, fourmis envahissantes : reconnaître l&apos;espèce, c&apos;est savoir comment l&apos;éliminer.
            </p>
            <nav className="flex flex-wrap justify-center gap-2" aria-label="Rubriques">
              {[['#maison', 'Dans la maison'], ['#jardin', 'Au jardin'], ['#envahissantes', 'Espèces envahissantes'], ['#villes', 'Par ville']].map(([h, l]) => (
                <a key={h} href={h} className="text-sm font-bold text-white px-4 py-2 rounded-full hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.18)' }}>{l}</a>
              ))}
            </nav>
          </div>
        </section>

        {/* ── LA REINE ── */}
        <section className="pb-14 px-4">
          <div className="max-w-4xl mx-auto rounded-3xl p-7 md:p-10" style={{ background: 'rgba(232,68,26,0.08)', border: '1px solid rgba(232,68,26,0.35)' }}>
            <p className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}><Crown className="w-4 h-4" />La règle d&apos;or</p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Pour se débarrasser des fourmis, il faut tuer la reine</h2>
            <p className="text-white/75 leading-relaxed mb-3">
              Les fourmis que vous voyez sont des <strong className="text-white">ouvrières</strong>. La <strong className="text-white">reine</strong> reste cachée dans le nid et pond pendant des années : tant qu&apos;elle vit, la colonie remplace les ouvrières tuées. C&apos;est pour cela que les sprays, le vinaigre ou la craie ne règlent jamais le problème.
            </p>
            <p className="text-white/75 leading-relaxed">
              La bonne méthode est un <strong className="text-white">appât à action lente</strong> : les ouvrières le rapportent au nid et le partagent avec la reine. Chez les espèces à <strong className="text-white">plusieurs reines</strong> (repérées en orange ci-dessous), il faut les atteindre toutes, sans jamais pulvériser, souvent en plusieurs passages.
            </p>
          </div>
        </section>

        <Groupe id="maison" fond="#0d0d0d" titre="Les fourmis qui entrent dans la maison" especes={MAISON}
          intro="Voici les espèces que nous traitons le plus souvent dans les appartements et les maisons d'Île-de-France. La couleur, la taille et l'endroit où elles circulent suffisent souvent à les reconnaître." />
        <Groupe id="jardin" fond="#080808" titre="Les fourmis du jardin" especes={JARDIN}
          intro="Au jardin, la plupart des fourmis sont utiles : elles aèrent le sol et mangent d'autres insectes. On n'intervient que lorsqu'une colonie entre dans la maison, niche contre les murs ou pique près d'une aire de jeux." />
        <Groupe id="envahissantes" fond="#0d0d0d" titre="Les fourmis envahissantes à surveiller" especes={ENVAHISSANTES}
          intro="Venues d'autres régions, ces espèces forment des supercolonies avec un très grand nombre de reines. Elles progressent en France, souvent avec le commerce de plantes en pot. Au moindre doute, faites identifier l'espèce avant de traiter." />

        {/* ── TABLEAU ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">Une reine ou plusieurs : le traitement change</h2>
            <div className="overflow-x-auto rounded-2xl" style={card}>
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="text-white">
                    <th className="p-4 font-bold">Espèce</th><th className="p-4 font-bold">Reines</th><th className="p-4 font-bold">Ce qu&apos;il faut faire</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  {[...MAISON, ...JARDIN, ...ENVAHISSANTES].filter((e) => !e.latin.startsWith('Formica')).map((e) => (
                    <tr key={e.latin} style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                      <td className="p-4 text-white font-bold">{e.nom}</td>
                      <td className="p-4" style={e.plusieurs ? { color: ACCENT } : undefined}>{e.reines}</td>
                      <td className="p-4">{e.traitement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-white/60 text-sm mt-6">
              Pour tout comprendre (mode de vie, reproduction, origine), lisez notre guide <a href="/blog/fourmis-tout-savoir-mode-de-vie-reproduction" className="underline" style={{ color: ACCENT }}>tout savoir sur les fourmis</a>. Voir aussi notre <a href="/services/fourmis" className="underline" style={{ color: ACCENT }}>traitement des fourmis en Île-de-France</a>, dès 120 € TTC, garantie 1 an.
            </p>
          </div>
        </section>

        {/* ── VILLES ── */}
        <section id="villes" className="py-14 md:py-20 px-4 scroll-mt-20" style={{ background: '#080808' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Traitement des fourmis près de chez vous</h2>
            <p className="text-white/65 mb-8">Nos techniciens interviennent dans tout le Val-de-Marne et à Paris, le jour même quand c&apos;est possible.</p>
            <div className="flex flex-wrap gap-2">
              {VILLES_FOURMIS.map((v) => (
                <a key={v.slug} href={`/fourmis/${v.slug}`} className="inline-flex items-center gap-1.5 text-sm text-white/80 px-3 py-2 rounded-full hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  <MapPin className="w-3.5 h-3.5" style={{ color: ACCENT }} />Fourmis {v.a}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 md:py-20 px-4" style={{ background: '#111' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Questions fréquentes</h2>
            <div className="space-y-3">
              {FAQ.map((f) => (
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

        {/* ── SOURCES ── */}
        <section className="py-12 px-4" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto rounded-2xl p-6 md:p-7" style={card}>
            <div className="flex items-start gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 flex-shrink-0" style={{ color: ACCENT }} />
              <div>
                <p className="text-white font-bold">Rédigé par Houssem Hattab, gérant d&apos;Allo Nuisible IDF, et notre équipe technique</p>
                <p className="text-white/55 text-sm">Techniciens titulaires du Certibiocide. Mis à jour le 6 novembre 2026.</p>
              </div>
            </div>
            <p className="text-white/45 text-xs uppercase tracking-widest mb-2">Sources</p>
            <ul className="space-y-1">
              {SOURCES_FOURMIS.map((s) => (
                <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-white/60 text-sm underline hover:text-white">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 px-4 text-center" style={{ background: '#080808' }}>
          <p className="text-white/70 mb-5">Une invasion de fourmis ? Envoyez-nous une photo, nous identifions l&apos;espèce et intervenons 7j/7.</p>
          <a href="tel:+33768077219" className="inline-flex items-center gap-2.5 font-black text-white px-8 py-4 rounded-2xl hover:brightness-110"
            style={{ background: ACCENT, boxShadow: '0 6px 28px rgba(232,68,26,0.4)' }}>
            <Phone className="w-5 h-5" /> 07 68 07 72 19
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
