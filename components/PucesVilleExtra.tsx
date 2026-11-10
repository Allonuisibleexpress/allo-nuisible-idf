// Contenu supplémentaire des pages « Puces à [ville] » (10/11/2026) : signes, espèces en photos, cycle en images,
// risques, comparatif, erreurs à éviter, « qui doit agir et qui paie », accroche garantie.
// Chaque texte existe en plusieurs versions choisies selon la ville, et cite la ville, pour des pages uniques.
// Photos : Wikimedia Commons, licences libres, crédit sous chaque image. Pas de tiret long, pas de chiffre inventé.

const ACCENT = '#E8441A'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

type Photo = { src: string; alt: string; legende: string; credit: string; licence: string; page: string }

const PHOTOS: Record<string, Photo> = {
  chat: { src: '/puces/puce-du-chat.jpg', alt: 'Puce du chat adulte, brun foncé, aplatie sur les côtés', legende: 'Puce du chat (Ctenocephalides felis)', credit: 'Erturac', licence: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Flea.JPG' },
  chien: { src: '/puces/puce-du-chien.jpg', alt: 'Puce du chien adulte vue de profil, aux longues pattes arrière', legende: 'Puce du chien (Ctenocephalides canis)', credit: 'Fedaro', licence: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Dog_flea.jpg' },
  homme: { src: '/puces/puce-de-l-homme.jpg', alt: 'Puce de l’homme vue au microscope, couleur dorée', legende: 'Puce de l’homme (Pulex irritans)', credit: 'David Linstead', licence: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:Pulex_irritans_human_flea.jpg' },
  rat: { src: '/puces/puce-du-rat.jpg', alt: 'Puce du rat vue au microscope avec une échelle de 0,5 mm', legende: 'Puce du rat (Xenopsylla cheopis), échelle 0,5 mm', credit: 'Daniel J. Drew, Yale Peabody Museum', licence: 'CC0', page: 'https://commons.wikimedia.org/wiki/File:Xenopsylla_cheopis_(YPM_IZ_099363).jpeg' },
  cycle: { src: '/puces/cycle-puce.jpg', alt: 'Gravure ancienne du cycle de la puce : adulte, cocon, larve et œuf grossis', legende: 'Les 4 stades : adulte, cocon, larve et œuf (gravure grossie)', credit: 'Wellcome Collection', licence: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:Common_flea_(Pulex_species);_adult,_pupa,_larva_and_egg._Eng_Wellcome_V0022512.jpg' },
  oeuf: { src: '/puces/oeuf-puce.jpg', alt: 'Œuf de puce du chat au microscope', legende: 'Un œuf de puce : environ 0,5 mm, il ne colle pas et tombe au sol', credit: 'Daniel J. Drew, Yale Peabody Museum', licence: 'CC0', page: 'https://commons.wikimedia.org/wiki/File:Ctenocephalides_felis_(YPM_IZ_099582)_003.jpeg' },
  larve: { src: '/puces/larve-puce.jpg', alt: 'Larve de puce blanche et allongée, sans pattes', legende: 'La larve : blanche, sans pattes, elle fuit la lumière', credit: 'Daniel J. Drew, Yale Peabody Museum', licence: 'CC0', page: 'https://commons.wikimedia.org/wiki/File:Ctenocephalides_felis_(YPM_IZ_099582)_004.jpeg' },
  larve2: { src: '/puces/larve-puce-2.jpg', alt: 'Larve de puce au microscope, le tube digestif sombre', legende: 'Larve nourrie : la bande sombre, ce sont les déjections de puces adultes qu’elle a mangées', credit: 'Alan R Walker', licence: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Ctenocephalides-flea-larva-2.jpg' },
  piqures: { src: '/puces/piqures-puces.jpg', alt: 'Piqûres de puces : petits boutons rouges groupés sur la peau', legende: 'Piqûres de puces : petits boutons rouges groupés qui démangent', credit: 'Wikimedia Commons', licence: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Flea_bites.jpg' },
  veto: { src: '/puces/veterinaire-chien.jpg', alt: 'Vétérinaire examinant un petit chien', legende: 'Le vétérinaire traite l’animal, nous traitons le logement', credit: 'Shixart1985', licence: 'CC BY 2.0', page: 'https://commons.wikimedia.org/wiki/File:Close-up_of_a_veterinarian_examining_a_maltese_dog.jpg' },
  panier: { src: '/puces/chat-panier.jpg', alt: 'Chat endormi dans son couchage', legende: 'Le couchage de l’animal : le premier endroit à laver et à traiter', credit: 'JW2009', licence: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:A_cat_sleeping_in_a_cat_bed.jpg' },
}

function Figure({ p, a, entier = false }: { p: Photo; a: string; entier?: boolean }) {
  return (
    <figure className="rounded-2xl overflow-hidden" style={card}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={p.src} alt={`${p.alt} (illustration, puces ${a})`} loading="lazy" className={`w-full h-48 md:h-56 ${entier ? 'object-contain bg-[#f2efe9] p-2' : 'object-cover bg-white/5'}`} />
      <figcaption className="p-3 text-xs text-white/65 leading-relaxed text-center">
        <span className="block text-white/85 font-semibold">{p.legende}</span>
        <a href={p.page} target="_blank" rel="noopener nofollow" className="underline text-white/40">Photo : {p.credit}, {p.licence}</a>
      </figcaption>
    </figure>
  )
}

// **gras**
function g(t: string) {
  return t.split(/(\*\*[^*]+\*\*)/g).map((m, i) => (m.startsWith('**') ? <strong key={i} className="text-white font-bold">{m.slice(2, -2)}</strong> : m))
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 text-center leading-tight">{children}</h2>
)

export function hashVille(slug: string) {
  return slug.split('').reduce((h, ch) => (h * 37 + ch.charCodeAt(0)) >>> 0, 11)
}
// Mélange fort (les adresses proches comme paris-12 et paris-14 doivent donner des choix différents)
export function melange(x: number) {
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b) >>> 0
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b) >>> 0
  return (x ^ (x >>> 16)) >>> 0
}
const choix = <T,>(l: T[], h: number, i: number) => l[melange((h ^ Math.imul(i + 1, 0x9e3779b1)) >>> 0) % l.length]
const remplir = (t: string, a: string, nom: string) => t.replaceAll('{a}', a).replaceAll('{nom}', nom)

// ── Bloc 1 : signes, espèces, cycle en images, risques, comparatif ──
const SIGNES = [
  ['Piqûres aux chevilles et aux mollets|Les puces sautent depuis le sol : les piqûres se concentrent sur **le bas des jambes**, en petits groupes, souvent après être passé près du panier ou du canapé.', 'Des boutons groupés sur le bas des jambes|Si vous êtes piqué {a} surtout **aux chevilles**, en grappes de trois ou quatre boutons très irritants, la puce est le premier suspect.', 'Démangeaisons au ras des chaussettes|Les piqûres de puces apparaissent **là où la peau est proche du sol** : chevilles, mollets, parfois l’arrière des genoux chez les enfants.'],
  ['Un animal qui se gratte sans arrêt|Grattage, mordillements, **perte de poils à la base de la queue** : chez le chat ou le chien, ce sont les signes classiques. Certains animaux font même une **allergie** aux piqûres.', 'Votre chien ou votre chat se mordille|Un animal qui se mordille le dos ou la queue, qui se secoue souvent ou dort mal mérite un contrôle : **les puces sont la première cause** de grattage chez les animaux de compagnie.', 'Le comportement de l’animal change|Il se gratte la nuit, se lèche sans cesse, évite son panier : **ces changements trahissent souvent les puces**, avant même que vous ne les voyiez.'],
  ['Le test du papier humide|Passez un peigne fin dans le pelage, puis posez les petits grains noirs récupérés sur un **papier blanc humide**. S’ils laissent une **trace rouge**, ce sont des déjections de puces, faites de sang digéré.', 'Des grains noirs qui rougissent|Les petits points noirs dans le pelage ou sur le couchage sont souvent des **excréments de puces**. Sur un papier mouillé, ils se dissolvent en **auréole rouge** : la preuve est faite.', 'Le geste qui confirme tout|Un **peigne à dents serrées**, un **papier humide** : si les grains noirs deviennent rouges, vous avez des puces. Ce test simple évite de confondre avec de la terre.'],
  ['Des points noirs qui sautent|Sur un tapis clair ou un drap, vous voyez de **minuscules points noirs** qui disparaissent d’un bond : une puce peut sauter très loin par rapport à sa taille.', 'L’insecte qui disparaît d’un bond|Une puce adulte mesure **quelques millimètres**, elle est brun foncé, aplatie sur les côtés, et **saute** dès qu’on approche. Une punaise de lit, elle, marche et ne saute pas.', 'Le test des chaussettes blanches|Marchez quelques minutes en **chaussettes blanches** sur le tapis ou le parquet suspect {a} : les puces affamées sautent dessus et deviennent faciles à voir.'],
]

const ESPECES: { cle: string; titre: string; textes: string[] }[] = [
  { cle: 'chat', titre: 'La puce du chat, la plus fréquente', textes: ['C’est **de loin l’espèce la plus courante** dans les logements, sur les chats comme sur les chiens. Elle pique aussi l’homme quand elle a faim, surtout dans une maison où l’animal est absent.', 'Malgré son nom, la puce du chat vit aussi **sur les chiens**. C’est elle qu’on retrouve dans la grande majorité des infestations de logements {a}.', 'Si votre chat ou votre chien a des puces {a}, il y a toutes les chances que ce soit **la puce du chat** : elle domine largement dans les maisons et les appartements, et pique volontiers l’homme.'] },
  { cle: 'chien', titre: 'La puce du chien', textes: ['Très proche de la puce du chat, elle est **moins fréquente** dans les logements. Le traitement du logement est le même : il vise les œufs, les larves et les cocons au sol.', 'Elle se distingue de la puce du chat par **la forme de la tête**, visible seulement à la loupe. Pour vous, la conduite à tenir est identique : vétérinaire et traitement du logement.', 'Moins répandue que sa cousine, la **puce du chien** se rencontre surtout chez les chiens qui vivent dehors ou fréquentent les chenils. Le protocole {a} ne change pas.'] },
  { cle: 'homme', titre: 'La puce de l’homme', textes: ['Devenue **rare** dans les logements modernes, elle peut encore se rencontrer dans des lieux où vivent des animaux d’élevage ou dans des bâtiments anciens peu entretenus.', 'Aujourd’hui **peu courante** en ville, elle peut piquer l’homme et de nombreux animaux. Son traitement suit les mêmes principes : sols, textiles, recherche de l’origine.', 'Longtemps répandue dans les habitations, la **puce de l’homme** est devenue exceptionnelle {a}. Quand on la trouve, l’origine est souvent un animal de ferme ou un local ancien.'] },
  { cle: 'rat', titre: 'La puce du rat', textes: ['Elle vit sur les **rongeurs** et peut piquer l’homme quand un nid se trouve dans une cave, un vide sanitaire ou un faux plafond. Dans ce cas, il faut **traiter les rongeurs en même temps** que les puces.', 'Quand il n’y a aucun animal à la maison mais que les piqûres continuent, pensez aux **rongeurs** : leurs puces descendent dans le logement. Une dératisation est alors indispensable.', 'Pas de chien, pas de chat, mais des piqûres {a} ? **Les rongeurs** sont la piste à vérifier : leurs puces quittent un nid abandonné et cherchent un nouvel hôte, parfois vous.'] },
]

const RISQUES = [
  ['Pour vous, les piqûres provoquent surtout des **démangeaisons** parfois très fortes, et des **lésions de grattage** qui peuvent s’infecter chez les enfants. En cas de réaction importante, consultez votre médecin.', 'Les enfants qui jouent au sol {a} sont souvent **les premiers piqués**. Coupez-leur les ongles courts pour limiter le grattage, et demandez conseil à votre pharmacien si les boutons s’enflamment.', 'Chez l’homme, la piqûre de puce est surtout **très irritante**. Gratter abîme la peau et peut entraîner une surinfection : désinfectez et parlez-en à votre pharmacien ou à votre médecin si besoin.'],
  ['Pour votre animal, les puces peuvent transmettre un **ver intestinal, le ténia** (Dipylidium), qu’il avale en se léchant. Beaucoup d’animaux développent aussi une **allergie aux piqûres** qui provoque plaies et perte de poils.', 'Chez le chat et le chien, une infestation peut entraîner une **allergie cutanée**, des plaies, et la transmission du **ténia** lorsqu’ils avalent une puce en se toilettant. Un très jeune animal très infesté peut même devenir **anémié**.', 'Votre compagnon est **la première victime** : démangeaisons permanentes, poils arrachés, parfois **vers intestinaux** transmis par les puces avalées. Le vétérinaire est votre allié, en parallèle de notre traitement {a}.'],
  ['Pour le logement, une infestation non traitée **s’étend pièce après pièce**, suit l’animal partout où il dort, et peut rendre une location ou une chambre inutilisable le temps du traitement.', 'Pour votre logement {a}, attendre coûte cher : chaque semaine, de nouveaux œufs tombent au sol. **Plus on traite tôt, plus le traitement est simple** et rapide.', 'Une infestation de puces {a} ne reste jamais dans une seule pièce : elle **suit l’animal** du salon à la chambre, puis à la voiture. Intervenir vite, c’est traiter **moins de surface**.'],
]

export function PucesBloc1({ slug, a, nom }: { slug: string; a: string; nom: string }) {
  const h = hashVille(slug)
  const ordre = [0, 1, 2, 3].map((i) => melange(h + i * 101) % 2)
  const galerie = [['cycle', 'oeuf', 'larve', 'larve2'], ['oeuf', 'larve2', 'cycle', 'larve'], ['larve', 'cycle', 'larve2', 'oeuf']][melange(h + 7) % 3]
  return (
    <>
      {/* Signes */}
      <section className="py-14 md:py-20 px-4" style={{ background: '#0b0b0b' }}>
        <div className="max-w-5xl mx-auto">
          <H2>Puces {a} : les 4 signes qui ne trompent pas</H2>
          <p className="text-white/60 mb-8 max-w-3xl mx-auto text-center leading-relaxed">{g(remplir(choix(['Avant d’appeler, quelques vérifications simples permettent de savoir si vous avez bien affaire à des **puces** {a}, et non à des punaises de lit ou des acariens.', 'Beaucoup de personnes {a} pensent d’abord à des moustiques ou à des punaises de lit. Voici **comment reconnaître les puces** en quelques minutes.', 'Les puces se trahissent toujours par les mêmes indices. Si vous en cochez deux ou plus, il est temps d’agir **{a}**.'], h, 1), a, nom))}</p>
          <div className="grid md:grid-cols-[minmax(0,1fr)_280px] gap-6 items-start">
            <div className="grid sm:grid-cols-2 gap-4">
              {SIGNES.map((variantes, i) => {
                const [t, x] = remplir(choix(variantes, h, i + 2), a, nom).split('|')
                return (
                  <div key={i} className="rounded-2xl p-5" style={card}>
                    <h3 className="font-black text-white mb-2">{t}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{g(x)}</p>
                  </div>
                )
              })}
            </div>
            <Figure p={PHOTOS.piqures} a={a} />
          </div>
        </div>
      </section>

      {/* Espèces */}
      <section className="py-14 md:py-20 px-4" style={{ background: '#101010' }}>
        <div className="max-w-6xl mx-auto">
          <H2>Puce du chat, du chien, de l’homme ou du rat : laquelle est chez vous {a} ?</H2>
          <p className="text-white/60 mb-8 max-w-3xl mx-auto text-center leading-relaxed">{g(remplir(choix(['Il existe de nombreuses espèces de puces, mais **quatre** seulement concernent vraiment les logements. Savoir laquelle est en cause aide à **trouver l’origine** de l’infestation {a}.', 'L’espèce compte surtout pour **trouver la source** : un chat, un chien, des rongeurs dans la cave ? Voici les puces que nos techniciens rencontrent dans les logements d’Île-de-France.'], h, 3), a, nom))}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ESPECES.map((e, i) => (
              <div key={e.cle} className="rounded-2xl overflow-hidden flex flex-col" style={card}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PHOTOS[e.cle].src} alt={`${PHOTOS[e.cle].alt}`} loading="lazy" className="w-full h-44 object-contain bg-[#f2efe9] p-2" />
                <div className="p-5 flex-1">
                  <h3 className="font-black text-white mb-2">{e.titre}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{g(remplir(e.textes[ordre[i]], a, nom))}</p>
                  <a href={PHOTOS[e.cle].page} target="_blank" rel="noopener nofollow" className="block mt-3 text-[11px] underline text-white/35">Photo : {PHOTOS[e.cle].credit}, {PHOTOS[e.cle].licence}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cycle en images */}
      <section className="py-14 md:py-20 px-4" style={{ background: '#0b0b0b' }}>
        <div className="max-w-6xl mx-auto">
          <H2>Le cycle de la puce en images : ce qui se cache dans vos sols</H2>
          <p className="text-white/60 mb-8 max-w-3xl mx-auto text-center leading-relaxed">{g(remplir(choix(['Ce que vous voyez sauter n’est que **la partie visible**. Voici les stades que notre technicien cible {a}, et que vous ne voyez presque jamais.', 'Œuf, larve, cocon, adulte : **chaque stade a sa cachette**. C’est pourquoi un traitement {a} doit viser les sols et les textiles, pas seulement l’animal.', 'Pour comprendre pourquoi un simple spray ne suffit pas, il faut **voir les stades cachés** de la puce. Les voici, grossis au microscope.'], h, 4), a, nom))}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galerie.map((k) => <Figure key={k} p={PHOTOS[k]} a={a} entier />)}
          </div>
        </div>
      </section>

      {/* Risques + comparatif */}
      <section className="py-14 md:py-20 px-4" style={{ background: '#101010' }}>
        <div className="max-w-4xl mx-auto">
          <H2>Les puces sont-elles dangereuses ? Ce qu’il faut savoir {a}</H2>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {['Pour vous et vos enfants', 'Pour votre chat ou votre chien', 'Pour votre logement'].map((t, i) => (
              <div key={t} className="rounded-2xl p-5" style={card}>
                <h3 className="font-black text-white mb-2">{t}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{g(remplir(choix(RISQUES[i], h, i + 6), a, nom))}</p>
              </div>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white mt-14 mb-5 text-center">{melange(h + 43) % 2 ? `Puce, punaise de lit ou acarien ${a} : comment ne pas se tromper ?` : `Piqûres ${a} : puce, punaise de lit ou acarien ?`}</h3>
          <div className="overflow-x-auto rounded-2xl" style={card}>
            <table className="w-full text-sm min-w-[520px]">
              <thead><tr>{['', 'Puce', 'Punaise de lit', 'Acarien'].map((x) => <th key={x} className="text-left font-bold px-4 py-3" style={{ color: ACCENT }}>{x}</th>)}</tr></thead>
              <tbody className="text-white/70">
                {(melange(h + 41) % 2 === 0 ? [
                  ['Taille', 'Quelques millimètres', 'Environ la taille d’un pépin de pomme', 'Microscopique'],
                  ['Comment elle se déplace', 'Elle saute', 'Elle marche, ne saute pas', 'Invisible'],
                  ['Zone piquée', 'Bas des jambes', 'Haut du corps', 'Pas de piqûre'],
                  ['Signe typique', 'Animal qui se gratte', 'Taches noires sur le matelas', 'Nez bouché au réveil'],
                  ['Prix chez nous', 'Dès 120 €', 'Dès 290 €, 2 passages', 'Dès 120 €'],
                ] : [
                  ['Visible à l’œil nu', 'Oui, point noir qui saute', 'Oui, insecte plat brun qui marche', 'Non'],
                  ['Où sont les piqûres', 'Chevilles, mollets', 'Bras, épaules, cou', 'Pas de piqûre'],
                  ['Quand', 'À toute heure', 'Surtout la nuit', 'Allergie, nez qui coule'],
                  ['Lien avec un animal', 'Très souvent', 'Aucun', 'Aucun'],
                  ['Notre traitement', 'Sols et textiles, dès 120 €', '2 passages, dès 290 €', 'Literie, dès 120 €'],
                ]).map((r) => <tr key={r[0]} className="border-t border-white/5">{r.map((c, j) => <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-semibold text-white' : ''}`}>{c}</td>)}</tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

// ── Bloc 2 : erreurs, qui paie, accroche garantie ──
const ERREURS = [
  ['Traiter seulement l’animal|Le vétérinaire règle le problème **sur l’animal**, mais les œufs, larves et cocons restent dans le logement. Les puces remontent sur lui dès qu’elles sortent.', 'Croire que le collier suffit|Un antiparasitaire protège l’animal, **pas la maison** : des centaines d’œufs attendent déjà dans les sols.', 'Soigner le chien, oublier la maison|Le traitement vétérinaire **protège l’animal** mais ne touche ni les œufs ni les cocons répandus {a} dans le logement.'],
  ['Utiliser un diffuseur fumigène|Les « bombes » du commerce **n’atteignent pas les cocons** cachés dans les fentes, et donnent l’illusion d’avoir traité.', 'Multiplier les sprays du commerce|Les produits grand public, mal dosés et mal appliqués, **n’atteignent pas les larves** au fond des fibres.', 'Faire confiance aux « bombes »|Un fumigène remplit l’air mais **ne descend pas dans les fentes** où dorment les cocons : les puces ressortent quelques jours après.'],
  ['Laver les sols juste après le traitement|Une serpillière passée dans les jours qui suivent **retire le produit** avant qu’il n’ait agi sur les puces qui sortent des cocons.', 'Arrêter l’aspirateur trop tôt|L’aspiration fait **sortir les puces de leur cocon** : sans elle, elles restent à l’abri et réapparaissent plus tard.', 'Passer la serpillière trop vite|Laver à grande eau juste après notre passage {a} **efface le produit** : attendez le délai indiqué par le technicien.'],
  ['Déplacer le couchage de l’animal|Changer le panier de pièce, c’est **emporter des œufs** dans une pièce jusqu’ici saine.', 'Oublier la voiture et le garage|Si l’animal y passe du temps, **ce sont des foyers** : sans traitement, ils relancent l’infestation.', 'Changer le panier de place|Déplacer le couchage pendant le traitement **disperse les œufs** dans une nouvelle pièce : laissez-le où il est.'],
  ['Attendre que ça passe|Les puces **ne partent pas seules** : chaque femelle pond tous les jours. L’infestation grossit tant qu’on ne traite pas.', 'Penser que c’est une question de propreté|Les puces arrivent avec un animal ou un ancien occupant, **même dans un logement impeccable**. Il n’y a aucune honte à appeler.', 'Espérer que l’hiver règle tout|Dans un logement chauffé {a}, **les puces ne connaissent pas l’hiver** : l’infestation continue tant qu’on ne la traite pas.'],
]

const PAIE = [
  { t: 'Vous êtes locataire', v: ['Depuis la loi ELAN de 2018, le bailleur doit louer un logement **exempt de toute infestation d’espèces nuisibles et parasites** (loi du 6 juillet 1989, article 6). Si les puces étaient là **à votre arrivée** {a}, prévenez-le par écrit, avec photos : le traitement est en principe à sa charge.', 'Si les puces apparaissent **dès l’emménagement** {a}, c’est en général que l’ancien occupant avait un animal : signalez-le **par écrit** au propriétaire ou à l’agence. Si elles viennent de **votre propre animal**, le traitement est plutôt à votre charge.', 'Locataire {a} et piqué dès les premières nuits ? Gardez des **preuves** (photos des piqûres, des insectes, date d’entrée) et écrivez au bailleur : un logement doit être loué **sans infestation**. Si les puces viennent de votre animal arrivé ensuite, le traitement vous revient.'] },
  { t: 'Vous êtes propriétaire bailleur', v: ['Vous devez remettre un logement **sans infestation**. Entre deux locataires, un **traitement du logement vide** est simple, rapide et évite un litige. Nous remettons une **attestation d’intervention**.', 'Un locataire vous signale des puces {a} ? Faites intervenir rapidement un professionnel : notre **attestation** prouve que le logement a été traité, utile en cas de désaccord.', 'Pour un bailleur {a}, faire traiter **avant l’état des lieux d’entrée** est la meilleure assurance. Si un locataire signale des puces, agissez vite et conservez **l’attestation** que nous vous remettons.'] },
  { t: 'Vous êtes en copropriété', v: ['Si les puces viennent des **parties communes** (rongeurs dans les caves, chats errants dans la cour), c’est au **syndic** d’organiser le traitement. Chaque copropriétaire traite ensuite son propre logement si besoin.', 'Plusieurs voisins piqués {a} ? Prévenez le **syndic ou le conseil syndical** : une cause commune (rongeurs, local poubelles) se traite à l’échelle de l’immeuble.', 'Dans un immeuble {a}, les puces qui viennent d’une **cave, d’un local vélo ou d’une cour** relèvent de la copropriété : le syndic commande le traitement des parties communes, chacun traite ensuite chez soi.'] },
  { t: 'Location courte durée, hôtel, gîte', v: ['L’**exploitant** est responsable de la chambre qu’il loue. Un traitement entre deux séjours, avec **attestation**, protège vos clients et votre réputation.', 'Pour un hôte ou un hôtelier {a}, une plainte pour piqûres doit être prise au sérieux : nous intervenons **rapidement**, entre deux réservations, et remettons une attestation.', 'Gîte, chambre d’hôtes ou meublé de tourisme {a} : c’est à **l’exploitant** de faire traiter. Bloquez la chambre le temps du traitement, puis gardez l’attestation pour répondre à un client.'] },
]

export function PucesBloc2({ slug, a, nom }: { slug: string; a: string; nom: string }) {
  const h = hashVille(slug)
  const accroche = remplir(choix([
    'Les puces reviennent ? **Nous aussi, gratuitement**, pendant un an.',
    'Une seule promesse {a} : si les puces reviennent dans l’année, **on revient sans frais**.',
    'Garantie 1 an : **si les puces réapparaissent, notre technicien repasse**, sans rien vous facturer.',
  ], h, 8), a, nom)
  return (
    <>
      {/* Accroche garantie + photos prévention */}
      <section className="py-12 md:py-16 px-4" style={{ background: '#0b0b0b' }}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl p-7 md:p-10 text-center" style={{ background: 'linear-gradient(135deg, rgba(232,68,26,0.22), rgba(232,68,26,0.06))', border: '1px solid rgba(232,68,26,0.4)' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Prévention du retour</p>
            <p className="text-2xl md:text-3xl font-black text-white leading-snug max-w-3xl mx-auto">{g(accroche)}</p>
            <p className="text-white/65 mt-4 max-w-2xl mx-auto text-sm md:text-base">{g(remplir('Notre traitement des puces {a} est **garanti un an**. En échange, suivez nos conseils : vétérinaire, aspiration quotidienne, lavage à 60 °C.', a, nom))}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <Figure p={PHOTOS.veto} a={a} />
            <Figure p={PHOTOS.panier} a={a} />
          </div>
        </div>
      </section>

      {/* Erreurs */}
      <section className="py-14 md:py-20 px-4" style={{ background: '#101010' }}>
        <div className="max-w-5xl mx-auto">
          <H2>Les 5 erreurs qui font durer une infestation de puces {a}</H2>
          <p className="text-white/60 mb-8 max-w-3xl mx-auto text-center leading-relaxed">{g(remplir(choix(['Beaucoup de familles {a} nous appellent après des semaines d’essais. Ces erreurs, très courantes, **font perdre du temps** et laissent l’infestation grossir.', 'Voici ce que nos techniciens constatent le plus souvent **avant** leur arrivée. Évitez ces pièges et le traitement sera **plus rapide et plus durable**.'], h, 9), a, nom))}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ERREURS.map((variantes, i) => {
              const [t, x] = choix(variantes, h, i + 10).split('|')
              return (
                <div key={i} className="rounded-2xl p-5" style={card}>
                  <span className="inline-flex w-8 h-8 rounded-full items-center justify-center font-black text-white mb-3" style={{ background: ACCENT }}>{i + 1}</span>
                  <h3 className="font-black text-white mb-2">{t}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{g(x)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Qui doit agir et qui paie */}
      <section id="qui-paie" className="py-14 md:py-20 px-4 scroll-mt-20" style={{ background: '#0b0b0b' }}>
        <div className="max-w-5xl mx-auto">
          <H2>Puces {a} : qui doit agir et qui paie le traitement ?</H2>
          <p className="text-white/60 mb-8 max-w-3xl mx-auto text-center leading-relaxed">{g(remplir(choix(['Locataire, propriétaire, syndic : la question revient souvent {a}. Voici les **règles générales**, à adapter à votre bail et à votre situation.', 'Avant de payer, il est utile de savoir **qui est responsable**. En résumé, tout dépend de l’**origine des puces** et de **votre statut**.'], h, 11), a, nom))}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {PAIE.map((p, i) => (
              <div key={p.t} className="rounded-2xl p-6" style={card}>
                <h3 className="text-lg font-black text-white mb-2">{p.t}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{g(remplir(choix(p.v, h, i + 12), a, nom))}</p>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-xs mt-5 text-center">Informations générales, qui ne remplacent pas un conseil juridique. Source : loi n° 89-462 du 6 juillet 1989, article 6, sur Légifrance.</p>
        </div>
      </section>
    </>
  )
}
