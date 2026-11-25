// Enrichissement des pages dératisation refondues (25/11/2026, demande de l'utilisateur après l'audit concurrents :
// plus de mots que Express, plus de sous-titres, plus de mots-clés différents sans répétition, contenu clair et citable
// par les assistants IA, vraies photos de chantier en priorité). Quatre parties : l'essentiel en 7 points, les signes
// de présence, dératiser soi-même ou appeler un dératiseur, la méthode selon le lieu. Deux formulations alternées
// selon la ville pour éviter le texte identique ; données locales (distance, quartiers, code postal) injectées.
// Photos : vraies photos de chantier (bannière Allo Nuisible IDF) en rotation, photos libres seulement à défaut.
// Pas de tiret long, pas de chiffre inventé, jamais « naturel / non toxique / sans danger ».
import { Check, X as Croix, ListChecks } from 'lucide-react'
import { enrichi } from '@/components/ArticleService'
import type { RefonteDerat } from '@/lib/refonte-deratisation'
import { PHOTOS_CHANTIERS, mini, type PhotoKey } from '@/lib/photos-chantiers'
import { REPERES } from '@/lib/reperes-villes'
import { NOTE_GOOGLE, FICHE_GOOGLE_URL } from '@/lib/avis-google'

const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }
const surtitre = (t: string) => <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: '#F0562A' }}>{t}</p>
const h = (s: string) => s.split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 11)
const IPM = { credit: 'NY State IPM Program, Cornell University', licence: 'CC BY 2.0', base: 'https://commons.wikimedia.org/wiki/File:' }

// de / le : pages département (26/11/2026), « habitants du Val-de-Marne », « pour le Val-de-Marne »
type Ctx = { r: RefonteDerat; slug: string; nom: string; a: string; cp: string; de?: string; le?: string }
type Img = { src: string; alt: string; legende: string; credit?: string; licence?: string; page?: string }

const reel = (k: PhotoKey): Img => { const p = PHOTOS_CHANTIERS[k]; return { src: mini(p.src), alt: p.alt, legende: p.legende } }
const pick = <T,>(slug: string, sel: string, l: T[]) => l[h(slug + sel) % l.length]

function Figure({ img }: { img: Img }) {
  return (
    <figure className="m-0 rounded-xl overflow-hidden mb-4" style={{ background: '#111' }}>
      <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover" style={{ aspectRatio: '4 / 3' }} />
      <figcaption className="px-3 py-2 text-[11px] text-white/60 text-left">
        {img.legende}{' '}
        {img.credit ? <>Photo : {img.credit}, <a href={img.page} target="_blank" rel="noopener noreferrer nofollow" className="underline">{img.licence}</a></> : <>Photo : Allo Nuisible IDF, chantier réel</>}
      </figcaption>
    </figure>
  )
}

/* ── 1. L'essentiel en 7 points ── */
export function RefonteEssentiel({ r, slug, nom, a, cp }: Ctx) {
  const km = REPERES[slug]?.km
  const zones = r.quartiers.zones.slice(0, 3).map((z) => z.nom.replace(/\s*\(.*\)$/, '')).join(' ; ')
  const k = h(slug) % 2
  const points = [
    `**Prix** : à partir de **120 € TTC** pour un appartement ${a} (${cp}), rats ou souris. Devis gratuit, donné avant l’intervention.`,
    km !== undefined && km > 0
      ? `**Délai** : notre base de Saint-Maurice est à **${km.toLocaleString('fr-FR')} km** de ${nom}. Nous intervenons **7j/7**, souvent le jour même, **sans majoration** la nuit, le week-end ou les jours fériés.`
      : `**Délai** : nous sommes basés à Saint-Maurice et intervenons **7j/7**, souvent le jour même, **sans majoration** la nuit, le week-end ou les jours fériés.`,
    k ? '**Méthode** : diagnostic des entrées, postes d’appâtage **verrouillés** ou pièges, **rebouchage** des passages, puis visites de contrôle jusqu’à l’arrêt des consommations.'
      : '**Méthode** : on cherche d’abord par où passent les rongeurs, on pose des postes **sécurisés** ou des pièges, on **bouche** les accès et on revient contrôler.',
    '**Sans biocide si besoin** : pièges mécaniques et piège multicapture **Ekomille**, pour les foyers avec enfants, animaux ou potager. Voir la [dératisation écologique](/services/deratisation-ecologique).',
    `**Secteurs à surveiller ${a}** : ${zones}.`,
    `**Qui paie** : propriétaires, syndics, bailleurs et occupants doivent lutter contre les rongeurs (${r.reglement ?? 'règlement sanitaire du Val-de-Marne, **article 119**'}).`,
    `**Garantie et confiance** : garantie **1 an**, techniciens certifiés **Certibiocide**, note Google **${NOTE_GOOGLE.note}/5** ([lire les avis de nos clients](${FICHE_GOOGLE_URL})).`,
  ]
  return (
    <section className="py-12 md:py-16 px-4" style={{ background: '#0b0b0b' }}>
      <div className="max-w-4xl mx-auto text-center">
        {surtitre('À retenir')}
        <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-8">L’essentiel pour se débarrasser des rats {a} : 7 points clés</h2>
        <ol className="space-y-3 text-left list-none p-0 m-0">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl p-4" style={card}>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full font-black text-white text-sm flex-shrink-0" style={{ background: '#B8330D' }}>{i + 1}</span>
              <span className="text-white/80 leading-relaxed">{enrichi(p)}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ── 2. Les signes de présence ── */
export function RefonteSignes({ slug, a }: Ctx) {
  const k = h(slug + 's') % 2
  const trou = pick(slug, 'trou', ['trouRat1', 'trouRat2', 'trouRat3'] as PhotoKey[])
  const signes: { t: string; x: [string, string]; img?: Img }[] = [
    { t: 'Des crottes noires de 1 à 2 cm', x: [
      'Les crottes de rat ressemblent à de gros grains de riz noirs, souvent regroupées le long des murs, derrière les meubles ou sur les étagères. Fraîches, elles sont brillantes et molles ; anciennes, ternes et sèches. Elles indiquent les trajets et l’ancienneté de la présence.',
      'C’est le signe le plus fréquent. Celles du rat mesurent 1 à 2 cm, en forme de fuseau ; celles de la souris quelques millimètres. Leur nombre et leur aspect, frais ou sec, nous disent depuis combien de temps les rongeurs sont là.',
    ], img: reel('diogeneCrottes') },
    { t: 'Des trous au ras des murs et des plinthes', x: [
      'Un rat agrandit le moindre jour autour d’un tuyau ou d’une plinthe, et une souris passe par un trou de la taille d’un stylo. Les bords rongés et les débris au sol trahissent un passage actif.',
      'Le rat creuse ou ronge pour circuler entre deux pièces ou deux logements : angle de mur, bas de cloison, passage de canalisation. Ces trous sont ce que nous rebouchons en fin d’intervention.',
    ], img: reel(trou) },
    { t: 'Des terriers dans le jardin ou au pied des murs', x: [
      'Dehors, le surmulot creuse des galeries au pied des murs, sous les dalles, les abris ou les haies, souvent reliées par des coulées dans l’herbe.',
      'Un trou net dans la terre, sans monticule comme chez la taupe, avec un sentier tassé qui y mène : c’est un terrier de rat. On les trouve sous les terrasses, les abris de jardin et le long des clôtures.',
    ], img: { src: '/identifier/terrier-de-rat.jpg', alt: 'Entrée d’un terrier de rat au pied d’un arbre', legende: 'Entrée de terrier de rat au pied d’un arbre, avec la terre tassée du passage.', credit: IPM.credit, licence: IPM.licence, page: IPM.base + 'Norway_Rat_Burrow_(10069496005).jpg' } },
    { t: 'Des bruits de grattement la nuit', x: [
      'Grattements dans les cloisons, le faux plafond ou sous le plancher, surtout le soir et la nuit : les rongeurs sont surtout actifs dans l’obscurité.',
      'Des courses ou des grattements entendus quand la maison est calme signalent souvent des rongeurs dans les doublages, les combles ou le vide sanitaire.',
    ] },
    { t: 'Des traces grasses et une odeur d’ammoniaque', x: [
      'À force de longer les mêmes murs, le rat laisse des traînées sombres et grasses sur les plinthes et autour des passages. Une forte odeur d’urine signale une présence installée.',
      'Traînées noirâtres le long des murs, odeur âcre dans une cave ou un placard : ce sont les marques d’un passage répété, souvent depuis plusieurs semaines.',
    ] },
    { t: 'Des emballages, câbles et isolants rongés', x: [
      'Sacs de croquettes percés, fils électriques dénudés, isolant arraché : les incisives du rat poussent en continu et il ronge tout ce qu’il trouve. Les câbles rongés présentent un vrai risque.',
      'Un paquet de céréales ouvert par le bas, une gaine de câble entamée, des miettes d’isolant au sol : il est temps de faire venir un dératiseur.',
    ] },
  ]
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
      <div className="max-w-5xl mx-auto text-center">
        {surtitre('Savoir reconnaître')}
        <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">Rats ou souris {a} : les 6 signes qui ne trompent pas</h2>
        <p className="text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">{enrichi('Repérer tôt la présence de rongeurs permet un traitement plus court. Voici ce que nous cherchons en premier lors du diagnostic. Un doute ? Envoyez une photo, nous identifions gratuitement : voir aussi [rat ou souris : comment reconnaître](/blog/rat-ou-souris-comment-reconnaitre).')}</p>
        <div className="grid md:grid-cols-2 gap-5 text-left">
          {signes.map((s) => (
            <article key={s.t} className="rounded-2xl p-5 md:p-6" style={card}>
              {s.img && <Figure img={s.img} />}
              <h3 className="text-white font-black text-lg mb-2">{s.t}</h3>
              <p className="text-white/75 leading-relaxed text-sm md:text-base">{s.x[k]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 3. Dératiser soi-même ou appeler un dératiseur ── */
export function RefonteSoiMeme({ slug, a, nom, de }: Ctx) {
  const k = h(slug + 'd') % 2
  const lignes: [string, string, string][] = [
    ['Trouver d’où viennent les rongeurs', 'Difficile sans expérience', 'Diagnostic complet des entrées et des nids'],
    ['Produits utilisables', 'Appâts du commerce, souvent posés à nu', 'Postes verrouillés, pièges professionnels, Ekomille'],
    ['Sécurité des enfants et des animaux', 'Risque d’intoxication accidentelle', 'Appâts hors de portée, plan des postes'],
    ['Rebouchage des accès', 'Rarement fait', 'Passages bouchés, grilles posées'],
    ['Suivi', 'Aucun', 'Visites de contrôle jusqu’à l’arrêt des consommations'],
    ['Garantie et attestation', 'Aucune', 'Garantie 1 an, attestation pour syndic ou assureur'],
  ]
  const intro = k
    ? `Peut-on dératiser soi-même ${a} ? Pour une souris isolée, oui. Contre des rats installés dans une cave, un jardin ou un immeuble, les essais en solitaire font surtout perdre du temps pendant que la colonie grandit.`
    : `Beaucoup d’habitants ${de ?? `de ${nom}`} essaient d’abord de dératiser seuls. Ça peut suffire pour une souris de passage ; face à des rats, le recours à un dératiseur professionnel évite que l’infestation s’étende aux voisins.`
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: '#080808' }}>
      <div className="max-w-5xl mx-auto text-center">
        {surtitre('Faire le bon choix')}
        <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">Dératiser soi-même ou faire appel à un dératiseur {a} ?</h2>
        <p className="text-white/75 max-w-3xl mx-auto leading-relaxed mb-8">{intro}</p>
        <div className="overflow-x-auto rounded-2xl mb-10" style={card}>
          <table className="w-full text-left text-sm md:text-base">
            <caption className="sr-only">Comparatif : dératiser soi-même ou appeler un dératiseur professionnel</caption>
            <thead><tr className="text-white"><th scope="col" className="p-4 font-black">Critère</th><th scope="col" className="p-4 font-black">Seul</th><th scope="col" className="p-4 font-black" style={{ color: '#F0562A' }}>Avec un dératiseur</th></tr></thead>
            <tbody>
              {lignes.map(([c, s, p]) => (
                <tr key={c} className="border-t border-white/10 align-top">
                  <th scope="row" className="p-4 text-white font-bold">{c}</th>
                  <td className="p-4 text-white/65"><span className="inline-flex items-start gap-2"><Croix className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/40" aria-hidden="true" />{s}</span></td>
                  <td className="p-4 text-white/85"><span className="inline-flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#F0562A' }} aria-hidden="true" />{p}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid md:grid-cols-2 gap-5 text-left">
          <div className="rounded-2xl p-6" style={card}>
            <Figure img={{ src: '/identifier/rebouchage-acces-rongeurs.jpg', alt: 'Passages de câbles rebouchés avec de la laine métallique contre les rongeurs', legende: 'Rebouchage d’un passage de câbles avec de la laine métallique : le geste qui empêche le retour.', credit: IPM.credit, licence: IPM.licence, page: IPM.base + 'Rodent_Exclusion_(10069529336).jpg' }} />
            <h3 className="text-white font-black text-lg mb-2">Ce que vous pouvez faire vous-même</h3>
            <ul className="space-y-2 text-white/75 text-sm leading-relaxed list-none p-0 m-0">
              {['Ranger la nourriture et les croquettes dans des boîtes fermées', 'Fermer les poubelles et sortir les sacs le jour même', 'Boucher les petits jours autour des tuyaux avec de la laine métallique', 'Débarrasser caves et garages pour supprimer les cachettes', 'Noter où vous voyez des traces : c’est précieux pour le diagnostic'].map((x) => (
                <li key={x} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#F0562A' }} aria-hidden="true" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-6" style={card}>
            <Figure img={reel(pick(slug, 'piege', ['ratPiege', 'ratPlaque', 'rongeursGlu'] as PhotoKey[]))} />
            <h3 className="text-white font-black text-lg mb-2">Quand appeler un dératiseur sans attendre</h3>
            <p className="text-white/75 text-sm leading-relaxed">{enrichi(k
              ? 'Rat vu en plein jour, crottes dans plusieurs pièces, bruits chaque nuit, terriers dans le jardin, rongeur dans un commerce ou une cuisine : ce sont des signes de colonie. Plus on attend, plus le traitement est long. Voir aussi [les arnaques à éviter](/blog/arnaques-deratisation-nuisibles) pour bien choisir.'
              : 'Dès que les traces se multiplient, qu’un rat se montre de jour ou que vous gérez un commerce, faites intervenir un professionnel : une femelle peut avoir 3 à 5 portées par an (Ville de Paris). Comparez les devis et méfiez-vous des [prix qui changent sur place](/blog/arnaques-deratisation-nuisibles).')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── 4. La méthode selon le lieu ── */
export function RefonteLieux({ r, slug, a, nom, le }: Ctx) {
  const k = h(slug + 'l') % 2
  const lieux: { t: string; x: [string, string]; img?: Img }[] = [
    { t: `Rats ou souris dans un appartement ${a}`, x: [
      'Nous cherchons le passage, souvent autour des tuyaux de cuisine, derrière l’électroménager ou dans les gaines. Pièges et postes verrouillés sont posés aux points de passage, puis les jours sont bouchés. Voir [par où entrent les souris](/blog/souris-par-ou-entrent-elles).',
      'Dans un logement, la priorité est de couper le passage : pourtour des canalisations, plinthes, gaines techniques. Le dispositif reste discret et sécurisé, vous continuez à vivre normalement chez vous.',
    ], img: reel(pick(slug, 'appart', ['sourisAirbnb', 'ratPiege'] as PhotoKey[])) },
    { t: 'Maison, jardin et vide sanitaire', x: [
      'Terriers, abri de jardin, composteur, garage, vide sanitaire : nous traitons les galeries, protégeons le compost et posons des grilles sur les aérations. Voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
      'En pavillon, les rats viennent souvent du jardin. Nous fermons l’accès au vide sanitaire, traitons les terriers et vous conseillons sur le compost et les mangeoires ([rat dans le compost](/blog/rat-compost)).',
    ] },
    { t: 'Rats dans une cave ou un parking', x: [
      'Sous-sols, caves et parkings sont le repaire préféré du surmulot. Postes numérotés le long des murs, contrôle des regards et des vide-ordures, rebouchage des passages vers les logements.',
      'Un rat dans un parking ou une cave signale une colonie dans les sous-sols. Le traitement couvre l’ensemble des parties communes, pas un seul box.',
    ] },
    { t: 'Copropriété, syndic et bailleur', x: [
      `Pour un immeuble, nous proposons un traitement des parties communes avec plan des postes, passages réguliers et rapport remis au syndic ou au bailleur, en application ${r.reglement ? 'du règlement sanitaire départemental' : 'de l’article 119 du règlement sanitaire'}.`,
      'Le syndic ou le bailleur organise le traitement des parties communes. Nous fournissons un plan de pose, un registre des passages et une attestation, et pouvons assurer un contrat de suivi.',
    ] },
    { t: 'Restaurant, commerce de bouche et cuisine collective', x: [
      'Postes numérotés, plan de localisation, registre et attestation pour les contrôles d’hygiène, interventions hors des heures d’ouverture. Voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).',
      'Une cuisine professionnelle exige un dispositif tracé : plan des postes, passages planifiés, attestation. Nous intervenons avant ou après le service pour ne pas gêner l’activité.',
    ] },
    { t: 'Entrepôt, bureaux et locaux d’activité', x: [
      'Quais, palettes, réserves, locaux techniques : contrat de suivi avec visites régulières et rapport, adapté aux audits et aux assureurs. Voir [nos services aux professionnels](/professionnels).',
      'Pour un local d’activité, un contrat annuel évite les mauvaises surprises : postes extérieurs, pièges intérieurs près des stocks, rapport après chaque visite ([services aux professionnels](/professionnels)).',
    ] },
    { t: `Désinfection après le passage des rats ${a}`, x: [
      'Crottes, urine et nids laissent des souillures : après le traitement, nous pouvons désinfecter caves, greniers ou logements, dès 150 €. Voir [désinfection](/services/desinfection).',
      'Quand une pièce a été très fréquentée par les rongeurs, une désinfection est conseillée avant de la réutiliser. Elle est proposée dès 150 € : voir [notre service de désinfection](/services/desinfection).',
    ], img: reel('diogeneNettoyage') },
  ]
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
      <div className="max-w-5xl mx-auto text-center">
        {surtitre('Chaque lieu sa méthode')}
        <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">Appartement, maison, cave ou restaurant : notre traitement anti-rongeurs {a}</h2>
        <p className="text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">{k ? `On ne traite pas une cave d’immeuble comme un pavillon avec jardin. Voici comment nous adaptons notre intervention ${a}, selon votre situation.` : `Le bon dispositif dépend du lieu, des personnes présentes et des animaux. Voici nos réponses, cas par cas, pour ${le ?? nom}.`}</p>
        <div className="grid md:grid-cols-2 gap-5 text-left">
          {lieux.map((l) => (
            <article key={l.t} className="rounded-2xl p-5 md:p-6" style={card}>
              {l.img && <Figure img={l.img} />}
              <h3 className="flex items-start gap-2 text-white font-black text-lg mb-2"><ListChecks className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#F0562A' }} aria-hidden="true" />{l.t}</h3>
              <p className="text-white/75 leading-relaxed text-sm md:text-base">{enrichi(l.x[k])}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
