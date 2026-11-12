// Pages « Destruction de nid de frelons et guêpes à [ville] » (/destruction-nid-frelon/[ville]).
// 15 villes autour de Saint-Maurice jusqu'à Paris 12e, choisies avec l'utilisateur le 08/11/2026.
// INDEXATION REPORTÉE : pages en noindex et absentes du sitemap tant que FRELONS_VILLES_INDEXEES vaut false
// (l'utilisateur veut qu'elles soient indexées plus tard).
// Cocon : pilier /services/guepes-frelons, guides du blog (frelon asiatique, guêpes, frelon européen, nid en hiver).
// Prix alignés sur /tarifs : 89 € (accessible), 149 € (perche), 199 € (toiture, combles, cheminée), nacelle sur devis.
// Règles CLAUDE.md : pas de chiffre inventé, pas de tiret long, pas de « naturel », « bio », « écologique », « sans danger ».

import { LOCAL_FRELONS_94 } from '@/lib/local-frelons-94'
import { ficheFrelons } from '@/lib/fiche-nuisible'
import type { Ville, VilleServiceConfig } from '@/components/VilleServicePage'
import { LOCAL_FRELONS_GC } from '@/lib/local-frelons-gc'

// Mise en ligne progressive pour Google (demandée le 08/11/2026) : 5 villes d'abord, les autres dans la semaine.
export const FRELONS_VILLES_INDEXEES: string[] = ['saint-maurice', 'nogent-sur-marne', 'vincennes', 'saint-maur-des-fosses', 'champigny-sur-marne', // 08/11
  'creteil', 'maisons-alfort', 'charenton-le-pont', 'fontenay-sous-bois', 'le-perreux-sur-marne', // 10/11
  'joinville-le-pont', 'saint-mande', 'alfortville', 'ivry-sur-seine', 'paris-12'] // 12/11 ; 30 villes 91/77/78 encore en noindex
export const frelonsIndexee = (slug: string) => FRELONS_VILLES_INDEXEES.includes(slug)

export const SOURCES_FRELONS = [
  { label: 'Muséum national d\'Histoire naturelle, le frelon asiatique', url: 'https://frelonasiatique.mnhn.fr/home' },
  { label: 'Ministère de la Transition écologique, plan national de lutte contre le frelon asiatique', url: 'https://www.ecologie.gouv.fr/sites/default/files/documents/Plan-frelon_Projet.pdf' },
  { label: 'Bruxelles Environnement, les guêpes', url: 'https://document.environnement.brussels/opac_css/elecfile/IF%20Biodiversite%20guepe%20FR' },
  { label: 'CARI, fiche frelon européen', url: 'https://www.cari.be/IMG/pdf/191_frelon.pdf' },
]

export const CONFIG_FRELONS: VilleServiceConfig = {
  basePath: '/destruction-nid-frelon',
  titre: 'Destruction de nid de frelons et guêpes',
  centre: true,
  serviceType: 'Destruction de nid de guêpes et de frelons',
  pilier: { href: '/services/guepes-frelons', label: 'Guêpes et frelons', lien: 'notre service de destruction de nids de guêpes et frelons' },
  enBref: [
    'Allo Nuisible IDF détruit les nids de guêpes, de frelons européens et de frelons asiatiques, chez les particuliers, en copropriété et chez les professionnels.',
    'Le produit est injecté directement dans le nid, à la perche télescopique si le nid est en hauteur, sans grimper dans l\'arbre.',
    'Techniciens certifiés Certibiocide, en tenue de protection intégrale, intervention 7j/7.',
    'À partir de 89 € TTC pour un nid accessible, 149 € TTC à la perche, 199 € TTC en toiture, combles ou cheminée. Nacelle sur devis.',
  ],
  cachettes: {
    titre: 'Où se cachent les nids',
    items: [
      'Sous les avant-toits et les tuiles',
      'Dans les coffres de volets roulants',
      'En haut des arbres (frelon asiatique)',
      'Dans les cheminées et les combles',
      'Dans les haies et les abris de jardin',
      'Dans le sol, la pelouse ou une rocaille (guêpes)',
    ],
    signes: 'Signes d\'un nid tout proche : des allées et venues régulières toujours au même endroit, en ligne droite, et des insectes qui entrent et sortent par le même trou.',
  },
  methodes: [
    { titre: 'Traitement à la perche', tag: 'Nid en hauteur', texte: 'Une perche télescopique injecte le produit directement dans le nid, jusqu\'à plusieurs mètres de haut, sans grimper dans l\'arbre ni sur le toit. À partir de 149 € TTC.' },
    { titre: 'Traitement direct du nid', tag: 'Nid accessible', texte: 'Pour un nid sous un auvent, dans un cabanon, une haie ou le sol, le technicien en tenue intégrale traite l\'intérieur du nid. À partir de 89 € TTC.' },
    { titre: 'Toiture, combles, cheminée', tag: 'Accès difficile', texte: 'Nid sous les tuiles, dans les combles ou dans une cheminée : intervention en hauteur avec le matériel adapté. À partir de 199 € TTC, nacelle sur devis.' },
    { titre: 'Conseils et contrôle', tag: 'Après le traitement', texte: 'Les insectes encore dehors rentrent au nid et sont touchés à leur tour. Nous vous expliquons quoi faire dans les heures qui suivent et quand retirer le nid.', href: '/blog/frelon-asiatique-tout-savoir' },
  ],
  encadre: {
    titre: 'Les erreurs qui finissent en piqûres',
    items: [
      'S\'approcher à moins de 5 mètres d\'un nid actif pour le regarder ou le photographier.',
      'Tailler la haie, élaguer l\'arbre ou tondre à côté du nid : les vibrations déclenchent l\'attaque.',
      'Asperger le nid d\'eau, de bombe insecticide ou y mettre le feu.',
      'Boucher l\'entrée d\'un nid dans un mur : les guêpes cherchent une autre sortie, parfois dans la maison.',
      'Faire traiter un arbre où l\'on ne voit aucun nid : les frelons viennent souvent juste s\'y nourrir.',
    ],
  },
  sections: [
    {
      titre: 'Octobre, novembre : la saison des nids géants',
      paras: [
        "Les nids de frelons asiatiques grossissent tout l'été et atteignent leur **taille maximale en fin de saison**. Avec les automnes doux, nous voyons encore **beaucoup de frelons actifs en octobre et en novembre**.",
        "C'est aussi le moment où **les feuilles tombent** et où des nids restés cachés tout l'été apparaissent d'un coup, **énormes**, en haut des arbres. Tant qu'il y a de l'activité à l'entrée, le nid est **dangereux** : ne vous en approchez pas. Tout savoir dans notre [guide du frelon asiatique](/blog/frelon-asiatique-tout-savoir).",
      ],
    },
    {
      titre: 'Des frelons autour de votre arbre, mais aucun nid ?',
      paras: [
        "Des frelons qui tournent autour d'un **buisson**, d'un **arbuste** ou d'un **arbre** sans que vous voyiez de nid ? Le plus souvent, **le nid n'est pas là** : ils viennent simplement **se nourrir** de nectar, de fruits mûrs ou d'insectes.",
        "Observez-les de loin : s'ils repartent toujours **dans la même direction**, le nid est ailleurs, parfois à plusieurs centaines de mètres. S'ils entrent et sortent **par le même point**, le nid est sans doute juste devant vous : éloignez-vous et appelez-nous.",
      ],
    },
    {
      titre: 'Guêpes : pourquoi elles deviennent infernales en fin d\'été',
      paras: [
        "En fin d'été, la colonie de guêpes est à son maximum et les ouvrières recherchent surtout du **sucre** : fruits, boissons, poubelles. C'est aussi l'époque où les nids sont **les plus peuplés** et se défendent **très violemment**.",
        "Un nid dans la pelouse, un coffre de volet ou sous les tuiles se traite en une intervention. Tout comprendre dans notre article [pourquoi les guêpes deviennent si agressives](/blog/guepes-tout-savoir).",
      ],
    },
    {
      titre: 'Frelon européen ou frelon asiatique ?',
      paras: [
        "Le **frelon européen** est brun-roux et jaune vif, vole même **la nuit** et niche dans les **cavités** (arbre creux, grenier, cheminée). Le **frelon asiatique** est très sombre, avec des **pattes jaunes**, et construit souvent son nid **très haut dans un arbre**.",
        "Les deux se traitent de la même façon, directement dans le nid. Voir notre guide du [frelon européen](/blog/frelon-europeen-tout-savoir).",
      ],
      table: {
        head: ['', 'Frelon européen', 'Frelon asiatique'],
        rows: [
          ['Couleur', 'Brun-roux et jaune vif', 'Très sombre, pattes jaunes'],
          ['Nid', 'Cavité : arbre creux, grenier, cheminée', 'Souvent en haut d\'un arbre'],
          ['Actif la nuit', 'Oui', 'Non'],
        ],
      },
    },
  ],
  protocole: {
    titre: 'Notre intervention, étape par étape',
    etapes: [
      { titre: 'Photo ou appel', texte: 'Envoyez-nous une photo du nid ou des insectes, prise de loin : nous identifions l\'espèce et vous donnons le prix avant de venir.' },
      { titre: 'Mise en sécurité', texte: 'Le technicien éloigne les personnes et les animaux, puis s\'équipe d\'une tenue de protection intégrale.' },
      { titre: 'Traitement du nid', texte: 'Le produit est injecté directement à l\'intérieur du nid, à la perche télescopique si besoin, de préférence quand la colonie est rentrée.' },
      { titre: 'Après le traitement', texte: 'L\'activité cesse en quelques heures. Nous vous indiquons quand le nid peut être retiré et comment éviter un nouveau nid au printemps.' },
    ],
  },
  publics: {
    titre: 'Particuliers, copropriétés, professionnels',
    cartes: [
      { titre: 'Particuliers', texte: 'Nid dans le jardin, sous le toit ou dans un volet roulant : intervention rapide, avec des enfants ou des animaux à la maison.' },
      { titre: 'Copropriétés', texte: 'Nid sur une façade, une toiture ou dans un arbre de la résidence : intervention coordonnée avec le syndic ou le gardien.' },
      { titre: 'Professionnels', texte: 'Écoles, crèches, restaurants avec terrasse, entreprises : intervention en dehors des heures d\'ouverture si besoin, attestation fournie.' },
    ],
  },
  guides: [
    { href: '/blog/frelon-asiatique-tout-savoir', label: 'Frelon asiatique : tout savoir' },
    { href: '/blog/guepes-tout-savoir', label: 'Guêpes : pourquoi elles deviennent si agressives' },
    { href: '/blog/frelon-europeen-tout-savoir', label: 'Frelon européen : dangereux ou pas ?' },
    { href: '/blog/nid-de-frelon-en-hiver', label: 'Nid de frelon en hiver : faut-il le détruire ?' },
  ],
  sources: SOURCES_FRELONS,
  maj: '2026-11-08',
  certification: 'Techniciens titulaires du Certibiocide, la certification obligatoire pour utiliser des insecticides professionnels.',
  autresTitre: 'Destruction de nids dans les villes voisines',
  local: { ...LOCAL_FRELONS_94, ...LOCAL_FRELONS_GC },
  fiche: (v, vs) => ficheFrelons(v, vs.filter((x) => frelonsIndexee(x.slug))),
  localTitre: (a, nom) => `Frelons et guêpes ${a} : ce qui est propre à ${nom}`,
}

const FAQ_COMMUNE = (a: string) => [
  { q: `Combien coûte la destruction d'un nid de frelons ${a} ?`, a: 'À partir de 89 € TTC pour un nid accessible (jusqu\'à 5 m environ), 149 € TTC pour un nid en hauteur traité à la perche, 199 € TTC en toiture, combles ou cheminée. Nacelle sur devis. Le prix vous est donné avant l\'intervention.' },
  { q: 'Peut-on détruire soi-même un nid de guêpes ou de frelons ?', a: 'Non. Bombe insecticide, eau ou feu provoquent souvent une attaque groupée, et les piqûres multiples peuvent être graves. Un professionnel en tenue intégrale traite l\'intérieur du nid à distance.' },
  { q: 'Faut-il détruire un nid en hiver ?', a: 'En général non : en hiver, la colonie est morte et le nid n\'est jamais réutilisé. Un nid encore actif en novembre, avec des allées et venues, doit en revanche être traité. Voir notre article sur le nid de frelon en hiver.' },
  { q: 'Des frelons tournent autour de mon arbre sans nid visible : que faire ?', a: 'Le plus souvent, ils viennent se nourrir (nectar, fruits mûrs, insectes) et le nid est ailleurs. Observez de loin dans quelle direction ils repartent, et envoyez-nous une photo en cas de doute.' },
]

export type VilleFrelons = Ville & { title: string }

const v = (
  slug: string, nom: string, a: string, zone: string, title: string, description: string,
  contexte: string[], proches: string[], faq: { q: string; a: string },
): VilleFrelons => ({
  slug, nom, a, code: slug === 'paris-12' ? '75' : '94', departement: slug === 'paris-12' ? 'Paris' : 'Val-de-Marne',
  zoneHref: zone, title, description, contexte, proches, faq: [faq, ...FAQ_COMMUNE(a)],
})

// Essonne, Seine-et-Marne, Yvelines (11/11/2026)
type Dep = { code: string; departement: string; zoneHref: string }
const D91: Dep = { code: '91', departement: 'Essonne', zoneHref: '/zones/essonne' }
const D77: Dep = { code: '77', departement: 'Seine-et-Marne', zoneHref: '/zones/seine-et-marne' }
const D78: Dep = { code: '78', departement: 'Yvelines', zoneHref: '/zones/yvelines' }
const vg = (slug: string, nom: string, a: string, dep: Dep, description: string, contexte: string[], proches: string[], faq: { q: string; a: string }): VilleFrelons => ({
  slug, nom, a, ...dep,
  title: `Nid de frelons ou guêpes ${a} (${dep.code})`,
  description, contexte, proches, faq: [faq, ...FAQ_COMMUNE(a)],
})

export const VILLES_FRELONS: VilleFrelons[] = [
  v('saint-maurice', 'Saint-Maurice', 'à Saint-Maurice', '/zones/val-de-marne/saint-maurice',
    'Destruction nid de frelons à Saint-Maurice (94) : dès 89 €',
    'Nid de frelons ou de guêpes à Saint-Maurice : intervention rapide depuis notre siège, traitement à la perche. Dès 89 € TTC.',
    [
      'Notre siège est à Saint-Maurice, rue du Val d\'Osne : pour un nid de guêpes ou de frelons dans la commune, nos techniciens sont sur place très vite, entre le Bois de Vincennes et les bords de Marne.',
      'Les arbres du Bois et des bords de Marne accueillent des nids de frelons asiatiques, souvent repérés à l\'automne quand les feuilles tombent. Dans les résidences, ce sont plutôt les guêpes qui s\'installent dans les coffres de volets et sous les toitures.',
      "Les hôpitaux, les écoles et les résidences de la commune ont souvent des espaces verts arborés : en cas de nid près d'un lieu fréquenté par des enfants ou des patients, nous intervenons en priorité, en dehors des heures de passage si besoin.",
    ],
    ['Charenton-le-Pont', 'Maisons-Alfort', 'Joinville-le-Pont', 'Saint-Maur-des-Fossés'],
    { q: 'Vous êtes à Saint-Maurice : pouvez-vous venir le jour même ?', a: 'Souvent, oui : notre siège est dans la commune, rue du Val d\'Osne. Appelez-nous ou envoyez une photo du nid, nous vous donnons le prix et un créneau.' }),
  v('charenton-le-pont', 'Charenton-le-Pont', 'à Charenton-le-Pont', '/zones/val-de-marne/charenton-le-pont',
    'Nid de guêpes ou frelons à Charenton-le-Pont : destruction',
    'Charenton-le-Pont : nid de guêpes sous un balcon, dans un volet roulant, nid de frelons dans un arbre. Destruction dès 89 € TTC.',
    [
      'À Charenton-le-Pont, ville d\'immeubles au confluent de la Seine et de la Marne, les nids de guêpes se logent souvent sous les balcons, dans les coffres de volets roulants et sous les toitures.',
      'Les frelons asiatiques, eux, choisissent les grands arbres des squares, des cours et des quais. Si le nid touche la façade ou une partie commune, nous intervenons en lien avec le syndic.',
    ],
    ['Saint-Maurice', 'Maisons-Alfort', 'Ivry-sur-Seine', 'Saint-Mandé'],
    { q: 'Un nid de guêpes dans mon volet roulant : que faire ?', a: 'Ne remontez pas et ne baissez pas le volet, et ne bouchez pas les ouvertures. Fermez la fenêtre et appelez-nous : le produit est injecté directement dans le coffre, là où se trouve le nid.' }),
  v('maisons-alfort', 'Maisons-Alfort', 'à Maisons-Alfort', '/zones/val-de-marne/maisons-alfort',
    'Détruire un nid de frelons à Maisons-Alfort (94) : 7j/7',
    'Maisons-Alfort : nid de frelons asiatiques dans un arbre, nid de guêpes sous le toit d\'un pavillon. Destruction à la perche dès 149 € TTC.',
    [
      'À Maisons-Alfort, entre les quartiers de pavillons et les bords de Marne, nous détruisons chaque année des nids de guêpes sous les tuiles, dans les abris de jardin et les haies.',
      'Les frelons asiatiques nichent volontiers en haut des arbres des jardins et des berges. Nous traitons ces nids depuis le sol, avec une perche télescopique, sans grimper dans l\'arbre.',
      "C'est aussi à Maisons-Alfort que nous sommes intervenus dans un logement Diogène envahi par les rats : nous connaissons bien la ville, de Charentonneau au Vert-de-Maisons, et ses nombreux jardins où les guêpes s'installent l'été.",
    ],
    ['Saint-Maurice', 'Alfortville', 'Charenton-le-Pont', 'Créteil'],
    { q: 'Le nid est en haut d\'un arbre : comment faites-vous ?', a: 'Nous utilisons une perche télescopique qui injecte le produit directement dans le nid, depuis le sol, jusqu\'à plusieurs mètres de haut. À partir de 149 € TTC.' }),
  v('joinville-le-pont', 'Joinville-le-Pont', 'à Joinville-le-Pont', '/zones/val-de-marne/joinville-le-pont',
    'Nid de frelons à Joinville-le-Pont (94) : destruction rapide',
    'Joinville-le-Pont : nids de frelons asiatiques dans les arbres des bords de Marne, nids de guêpes dans les jardins. Dès 89 € TTC.',
    [
      'À Joinville-le-Pont, les arbres des bords de Marne et de l\'Île Fanac offrent aux frelons asiatiques des emplacements en hauteur pour leurs nids, souvent découverts à l\'automne.',
      'Dans les jardins des maisons, ce sont plutôt les guêpes qui s\'installent sous les avant-toits, dans les cabanons et les haies. Attention en taillant : les vibrations déclenchent les attaques.',
    ],
    ['Saint-Maurice', 'Saint-Maur-des-Fossés', 'Nogent-sur-Marne', 'Champigny-sur-Marne'],
    { q: 'Je dois tailler ma haie mais il y a des guêpes : que faire ?', a: 'Repoussez la taille et observez la haie de loin : si les guêpes entrent et sortent toujours au même endroit, il y a un nid. Faites-le traiter avant de tailler.' }),
  v('saint-maur-des-fosses', 'Saint-Maur-des-Fossés', 'à Saint-Maur-des-Fossés', '/zones/val-de-marne/saint-maur-des-fosses',
    'Nid de guêpes à Saint-Maur-des-Fossés : destruction dès 89 €',
    'Saint-Maur-des-Fossés : jardins arborés, nids de guêpes sous les toits, frelons asiatiques dans les arbres. Destruction 7j/7, dès 89 € TTC.',
    [
      'Saint-Maur-des-Fossés, dans la boucle de la Marne, compte de nombreuses maisons avec jardin : c\'est là que nous traitons le plus de nids de guêpes, sous les tuiles, dans les haies et parfois dans la pelouse.',
      'Les grands arbres des jardins et des bords de Marne attirent aussi les frelons asiatiques. Un nid repéré en fin de saison peut encore être très actif : ne vous en approchez pas.',
      "De La Varenne au Parc Saint-Maur et à Adamville, chaque quartier a ses grands jardins : un nid de frelons peut s'y développer tout l'été en haut d'un cèdre ou d'un chêne sans que personne ne le remarque, jusqu'à l'automne.",
    ],
    ['Saint-Maurice', 'Joinville-le-Pont', 'Créteil', 'Champigny-sur-Marne'],
    { q: 'Des guêpes sortent d\'un trou dans ma pelouse : est-ce dangereux ?', a: 'Oui, surtout pour la tondeuse et les enfants qui jouent : c\'est sans doute un nid souterrain. Balisez la zone, ne tondez pas autour et faites-le traiter. À partir de 89 € TTC.' }),
  v('vincennes', 'Vincennes', 'à Vincennes', '/zones/val-de-marne/vincennes',
    'Destruction nid de frelons à Vincennes (94) : dès 89 €',
    'Vincennes : nids de frelons asiatiques près du Bois, nids de guêpes sous les toits et balcons. Destruction rapide, dès 89 € TTC.',
    [
      'À Vincennes, la proximité du Bois de Vincennes et ses grands arbres attire les frelons asiatiques, qui nichent souvent en hauteur et passent inaperçus jusqu\'à la chute des feuilles.',
      'En centre-ville, entre immeubles et petites maisons, les guêpes s\'installent sous les toitures, les balcons et dans les coffres de volets. Nous intervenons avec une perche quand le nid est en hauteur.',
    ],
    ['Saint-Mandé', 'Fontenay-sous-Bois', 'Nogent-sur-Marne', 'Charenton-le-Pont'],
    { q: 'Un nid de frelons dans un arbre près du Bois : qui doit le détruire ?', a: 'Si l\'arbre est sur votre terrain ou dans votre copropriété, c\'est au propriétaire ou au syndic de le faire traiter. S\'il est sur l\'espace public, signalez-le à la mairie.' }),
  v('saint-mande', 'Saint-Mandé', 'à Saint-Mandé', '/zones/val-de-marne/saint-mande',
    'Nid de guêpes ou frelons à Saint-Mandé : intervention 7j/7',
    'Saint-Mandé, à la lisière du Bois de Vincennes : destruction de nids de guêpes et de frelons, même en hauteur. Dès 89 € TTC.',
    [
      'À Saint-Mandé, à la lisière du Bois de Vincennes et près du lac, les frelons trouvent de quoi chasser et de grands arbres pour leurs nids.',
      'Dans les immeubles et les cours, les guêpes nichent plutôt sous les rebords de fenêtres, dans les coffres de volets et sous les toitures. Un va-et-vient toujours au même endroit trahit le nid.',
      "Comme beaucoup d'immeubles anciens, ceux de Saint-Mandé ont des corniches, des toitures en zinc et des conduits de cheminée où guêpes et frelons européens aiment s'abriter. Ces nids difficiles d'accès se traitent à partir de 199 € TTC.",
    ],
    ['Vincennes', 'Charenton-le-Pont', 'Saint-Maurice', 'Fontenay-sous-Bois'],
    { q: 'Comment savoir s\'il y a un nid près de ma fenêtre ?', a: 'Observez de loin pendant quelques minutes : si des guêpes ou des frelons entrent et sortent toujours par le même point (rebord, volet, toiture), le nid est là. Ne vous approchez pas et appelez-nous.' }),
  v('nogent-sur-marne', 'Nogent-sur-Marne', 'à Nogent-sur-Marne', '/zones/val-de-marne/nogent-sur-marne',
    'Nid de frelons à Nogent-sur-Marne : destruction en hauteur',
    'Nogent-sur-Marne : nid de frelons dans une cheminée, sous un toit ou dans un arbre. Intervention en hauteur dès 199 € TTC.',
    [
      'À Nogent-sur-Marne, nous sommes intervenus sur une toiture pour détruire un nid de frelons installé dans une cheminée : un emplacement abrité que les frelons apprécient. Voir [l\'intervention en vidéo](/blog/nid-frelons-cheminee-nogent-sur-marne).',
      'Entre les maisons des coteaux et les bords de Marne, les nids se trouvent aussi sous les tuiles, dans les combles et en haut des arbres des jardins.',
    ],
    ['Le Perreux-sur-Marne', 'Fontenay-sous-Bois', 'Joinville-le-Pont', 'Vincennes'],
    { q: 'Des frelons sortent de ma cheminée : que faire ?', a: 'N\'allumez pas de feu et ne bouchez pas le conduit : les frelons pourraient sortir dans la maison. Fermez la trappe ou l\'insert et appelez-nous : le nid est traité depuis la toiture. À partir de 199 € TTC.' }),
  v('le-perreux-sur-marne', 'Le Perreux-sur-Marne', 'au Perreux-sur-Marne', '/zones/val-de-marne/le-perreux-sur-marne',
    'Détruire un nid de guêpes au Perreux-sur-Marne : dès 89 €',
    'Le Perreux-sur-Marne : nids de guêpes dans les jardins et sous les toits, frelons asiatiques dans les arbres. Destruction 7j/7.',
    [
      'Au Perreux-sur-Marne, ville de pavillons et de jardins le long de la Marne, les guêpes s\'installent sous les avant-toits, dans les abris de jardin et les haies dès le printemps.',
      'En fin de saison, les nids de frelons asiatiques se découvrent dans les grands arbres des jardins et des berges, quand les feuilles tombent.',
    ],
    ['Nogent-sur-Marne', 'Bry-sur-Marne', 'Champigny-sur-Marne', 'Fontenay-sous-Bois'],
    { q: 'Un petit nid sous mon avant-toit au printemps : faut-il attendre ?', a: 'Non, c\'est le meilleur moment : au printemps, le nid ne contient encore que la reine et quelques ouvrières. Il se traite facilement, avant de devenir un gros nid en été.' }),
  v('fontenay-sous-bois', 'Fontenay-sous-Bois', 'à Fontenay-sous-Bois', '/zones/val-de-marne/fontenay-sous-bois',
    'Nid de frelons à Fontenay-sous-Bois : destruction rapide',
    'Fontenay-sous-Bois : nids de frelons près du Bois de Vincennes, nids de guêpes dans les pavillons et résidences. Dès 89 € TTC.',
    [
      'À Fontenay-sous-Bois, en bordure du Bois de Vincennes, les frelons asiatiques nichent dans les grands arbres et se repèrent surtout à l\'automne.',
      'Dans les quartiers de pavillons, les guêpes choisissent les avant-toits, les cabanons et les haies, et dans les résidences, les coffres de volets roulants.',
    ],
    ['Vincennes', 'Nogent-sur-Marne', 'Montreuil', 'Saint-Mandé'],
    { q: 'Le nid est dans l\'arbre de mon voisin : que faire ?', a: 'Prévenez votre voisin : c\'est au propriétaire du terrain de le faire traiter. Nous pouvons intervenir à sa demande, et traiter depuis votre jardin si c\'est plus accessible, avec son accord.' }),
  v('creteil', 'Créteil', 'à Créteil', '/zones/val-de-marne/creteil',
    'Destruction nid de frelons à Créteil (94) : 7j/7, dès 89 €',
    'Créteil : nids de frelons asiatiques dans les arbres des parcs et résidences, nids de guêpes sous les toits. Dès 89 € TTC.',
    [
      'À Créteil, entre le lac, les parcs et les résidences arborées, les frelons asiatiques trouvent de grands arbres pour nicher en hauteur.',
      'Dans les quartiers de maisons comme dans les grands ensembles, les guêpes s\'installent sous les toitures, dans les coffres de volets et dans les haies. Pour une résidence, nous intervenons avec le gardien ou le syndic.',
    ],
    ['Maisons-Alfort', 'Alfortville', 'Saint-Maur-des-Fossés', 'Bonneuil-sur-Marne'],
    { q: 'Un nid dans un arbre de ma résidence : qui appeler ?', a: 'Prévenez le gardien ou le syndic : l\'arbre fait partie des parties communes. Nous intervenons à leur demande et fournissons une attestation d\'intervention.' }),
  v('alfortville', 'Alfortville', 'à Alfortville', '/zones/val-de-marne/alfortville',
    'Nid de guêpes ou de frelons à Alfortville : destruction 7j/7',
    'Alfortville, entre Seine et Marne : nids de guêpes sur les façades et balcons, frelons dans les arbres des quais. Dès 89 € TTC.',
    [
      'À Alfortville, entre la Seine et la Marne, les arbres des quais et des parcs accueillent des nids de frelons asiatiques, souvent visibles à l\'automne.',
      'Dans les immeubles, les guêpes nichent sous les balcons, dans les coffres de volets et sous les toitures. Ne bouchez jamais l\'entrée d\'un nid dans un mur : les guêpes chercheraient une autre sortie.',
    ],
    ['Maisons-Alfort', 'Ivry-sur-Seine', 'Vitry-sur-Seine', 'Créteil'],
    { q: 'Des guêpes entrent dans un trou de la façade : puis-je le boucher ?', a: 'Non, surtout pas : les guêpes chercheraient une autre sortie, parfois à l\'intérieur du logement. Faites d\'abord traiter le nid, puis rebouchez quelques jours plus tard.' }),
  v('champigny-sur-marne', 'Champigny-sur-Marne', 'à Champigny-sur-Marne', '/zones/val-de-marne/champigny-sur-marne',
    'Détruire un nid de frelons à Champigny-sur-Marne : dès 89 €',
    'Champigny-sur-Marne : nids de frelons asiatiques dans les arbres, nids de guêpes dans les pavillons. Destruction à la perche, 7j/7.',
    [
      'À Champigny-sur-Marne, les grands arbres du parc du Tremblay, des bords de Marne et des jardins offrent aux frelons asiatiques de nombreux emplacements pour leurs nids.',
      'Dans les nombreux pavillons de la ville, les guêpes nichent sous les tuiles, dans les cabanons et parfois dans le sol. Nous traitons aussi les nids difficiles d\'accès, en toiture ou dans les combles.',
    ],
    ['Saint-Maur-des-Fossés', 'Villiers-sur-Marne', 'Chennevières-sur-Marne', 'Joinville-le-Pont'],
    { q: 'Des guêpes dans mes combles : est-ce grave ?', a: 'Un nid dans les combles peut devenir très gros et les guêpes peuvent entrer dans la maison par les plafonds ou les gaines. Ne montez pas les déranger : nous traitons ce type de nid à partir de 199 € TTC.' }),
  v('ivry-sur-seine', 'Ivry-sur-Seine', 'à Ivry-sur-Seine', '/zones/val-de-marne/ivry-sur-seine',
    'Nid de frelons à Ivry-sur-Seine (94) : destruction rapide',
    'Ivry-sur-Seine : nids de guêpes sur les façades et balcons, frelons asiatiques dans les arbres. Intervention 7j/7, dès 89 € TTC.',
    [
      'À Ivry-sur-Seine, entre les bords de Seine, les parcs et les quartiers d\'immeubles, nous traitons des nids de frelons asiatiques en haut des arbres comme des nids de guêpes sur les façades.',
      'Dans les cours et les petites maisons, les guêpes s\'installent dans les coffres de volets, sous les toits et dans les abris. Un nid près d\'une fenêtre se traite sans entrer dans le logement voisin.',
    ],
    ['Vitry-sur-Seine', 'Alfortville', 'Charenton-le-Pont', 'Le Kremlin-Bicêtre'],
    { q: 'Des guêpes entrent dans mon appartement par la fenêtre : y a-t-il un nid ?', a: 'Si elles arrivent toujours du même côté, un nid est probablement proche : sous le rebord, dans le volet ou sous la toiture. Fermez la fenêtre et envoyez-nous une photo prise de loin.' }),
  v('paris-12', 'Paris 12e', 'à Paris 12e', '/zones/paris',
    'Destruction nid de guêpes et frelons à Paris 12e : 7j/7',
    'Paris 12e : nids de frelons près du Bois de Vincennes et de la Coulée verte, nids de guêpes sur balcons et toits. Dès 89 € TTC.',
    [
      'Dans le 12e arrondissement, le Bois de Vincennes, la Coulée verte René-Dumont et les jardins offrent aux frelons asiatiques de grands arbres pour leurs nids.',
      'Sur les immeubles, ce sont surtout les guêpes qui posent problème : sous les balcons, dans les coffres de volets, sous les toitures en zinc. Pour un nid en façade, nous intervenons avec l\'accord du syndic.',
      "Du quartier de Bercy à la Porte Dorée, en passant par Picpus et le quartier d'Aligre, nous intervenons dans tout l'arrondissement : nid dans une cour intérieure, sur une terrasse en étage ou dans un arbre d'une résidence.",
    ],
    ['Saint-Mandé', 'Charenton-le-Pont', 'Vincennes', 'Paris 11e'],
    { q: 'Un nid de guêpes sur mon balcon à Paris : que faire ?', a: 'Fermez la porte-fenêtre, n\'utilisez pas le balcon et ne tentez rien vous-même. Envoyez-nous une photo prise de loin : le nid est traité directement, souvent en quelques minutes.' }),
  // ── Essonne, Seine-et-Marne, Yvelines (11/11/2026) ──
  vg('evry-courcouronnes', 'Évry-Courcouronnes', 'à Évry-Courcouronnes', D91,
    'Évry-Courcouronnes : nids de frelons asiatiques dans les arbres des parcs, nids de guêpes sous les toits. Destruction dès 89 € TTC.',
    [
      "À Évry-Courcouronnes, les grands parcs (Coquibus, Loges, Henri-Fabre) et les alignements d'arbres des avenues accueillent des nids de frelons asiatiques, souvent découverts à l'automne quand les feuilles tombent.",
      "Dans les résidences et les pavillons de Courcouronnes, les guêpes s'installent dans les coffres de volets roulants, sous les tuiles et dans les haies. Pour un nid en façade d'immeuble, nous intervenons avec l'accord du bailleur.",
    ],
    ['Ris-Orangis', 'Corbeil-Essonnes', 'Lisses', 'Bondoufle'],
    { q: "Un nid de frelons dans un arbre de ma résidence : qui doit le faire détruire ?", a: "Sur les espaces verts d'une résidence, c'est au bailleur ou au syndic de commander l'intervention. Prévenez-le rapidement, avec une photo prise de loin. Nous pouvons établir le devis à son attention." }),
  vg('corbeil-essonnes', 'Corbeil-Essonnes', 'à Corbeil-Essonnes', D91,
    'Corbeil-Essonnes : nids de guêpes dans les vieux murs et toitures, frelons asiatiques en bord de Seine. Destruction dès 89 € TTC.',
    [
      "À Corbeil-Essonnes, les vieux murs en pierre, les toitures anciennes et les greniers offrent aux guêpes des cavités où bâtir leurs nids. Elles entrent souvent par un trou de mortier ou une tuile déplacée.",
      "Les arbres des bords de Seine et de l'Essonne attirent les frelons asiatiques, qui chassent aussi autour des ruches et des jardins. Un nid en hauteur se traite à la perche depuis le sol.",
    ],
    ['Évry-Courcouronnes', 'Saint-Germain-lès-Corbeil', 'Villabé', 'Le Coudray-Montceaux'],
    { q: "Des guêpes entrent dans un trou du mur : faut-il le boucher ?", a: "Surtout pas tant que le nid est actif : les guêpes chercheraient une autre sortie, parfois vers l'intérieur. On traite d'abord le nid par l'ouverture, puis on rebouche quelques jours plus tard." }),
  vg('massy', 'Massy', 'à Massy', D91,
    'Massy : nids de frelons asiatiques dans les arbres, nids de guêpes dans les volets et toitures des pavillons. Dès 89 € TTC.',
    [
      "À Massy, les pavillons de Villaine, des Graviers ou de Vilmorin ont des jardins arborés où les frelons asiatiques installent leurs nids en hauteur. Les guêpes, elles, préfèrent les coffres de volets et les avant-toits.",
      "Le long de la Bièvre et dans les parcs, les grands arbres peuvent cacher des nids jusqu'à la chute des feuilles. Nous intervenons à la perche ou, pour les nids très hauts, avec une nacelle sur devis.",
    ],
    ['Palaiseau', 'Antony', 'Wissous', 'Chilly-Mazarin'],
    { q: "Le nid est dans un arbre de mon voisin : que faire ?", a: "Prévenez-le : c'est au propriétaire de l'arbre de faire intervenir. S'il est d'accord, nous intervenons depuis son terrain ou le vôtre si le nid est accessible. Le prix est le même." }),
  vg('savigny-sur-orge', 'Savigny-sur-Orge', 'à Savigny-sur-Orge', D91,
    'Savigny-sur-Orge : nids de guêpes dans les jardins, abris et toitures, frelons asiatiques au bord de l’Orge. Dès 89 € TTC.',
    [
      "À Savigny-sur-Orge, ville de pavillons avec jardin, les guêpes s'installent sous les tuiles, dans les abris de jardin, les haies et parfois dans la pelouse. Une tonte ou une taille peut déclencher une attaque.",
      "Les arbres des bords de l'Orge et du parc du Pré aux Bœufs accueillent des nids de frelons asiatiques. Nous les traitons à la perche, sans grimper dans l'arbre.",
    ],
    ['Viry-Châtillon', 'Morsang-sur-Orge', 'Juvisy-sur-Orge', 'Épinay-sur-Orge'],
    { q: "Des guêpes dans l'abri de jardin : peut-on y entrer ?", a: "Évitez de rester à l'intérieur et ne déplacez rien près du nid. Fermez l'abri si possible et appelez-nous : le nid est traité rapidement, souvent en une seule intervention." }),
  vg('palaiseau', 'Palaiseau', 'à Palaiseau', D91,
    'Palaiseau : nids de frelons dans les arbres des coteaux de l’Yvette, nids de guêpes sous les toits. Dès 89 € TTC, 7j/7.',
    [
      "À Palaiseau, les coteaux boisés de la vallée de l'Yvette et les jardins de Lozère accueillent des nids de frelons asiatiques, souvent très hauts dans les arbres.",
      "Sur le plateau de Saclay, les bâtiments récents et les campus ont des avant-toits, des bardages et des faux plafonds où les guêpes peuvent s'installer. Nous intervenons en dehors des heures de cours si besoin.",
    ],
    ['Massy', 'Orsay', 'Igny', 'Villebon-sur-Yvette'],
    { q: "Un nid de guêpes derrière un bardage bois : comment le traiter ?", a: "Le produit est injecté par l'ouverture qu'utilisent les guêpes, sans démonter le bardage. Il atteint le nid et la colonie meurt en quelques heures." }),
  vg('athis-mons', 'Athis-Mons', 'à Athis-Mons', D91,
    'Athis-Mons : nids de guêpes et frelons dans les jardins du coteau, toitures et entrepôts. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Athis-Mons, les jardins du coteau au-dessus de la Seine et les arbres des parcs accueillent des nids de frelons asiatiques. Les guêpes s'installent plutôt sous les toitures et dans les volets roulants.",
      "Pour les entreprises et les entrepôts proches de l'aéroport, un nid sous un auvent ou près d'un quai de chargement est traité rapidement, pour la sécurité des salariés.",
    ],
    ['Paray-Vieille-Poste', 'Juvisy-sur-Orge', 'Morangis', 'Ablon-sur-Seine'],
    { q: "Un nid de guêpes sur notre site d'entreprise : intervenez-vous vite ?", a: "Oui, souvent le jour même. Nous balisons la zone, traitons le nid et remettons une attestation. Pour les sites qui en ont souvent, un passage de contrôle au printemps peut être prévu." }),
  vg('sainte-genevieve-des-bois', 'Sainte-Geneviève-des-Bois', 'à Sainte-Geneviève-des-Bois', D91,
    'Sainte-Geneviève-des-Bois : nids de guêpes dans les pavillons, frelons asiatiques dans les arbres. Destruction dès 89 € TTC.',
    [
      "À Sainte-Geneviève-des-Bois, les nombreux pavillons avec jardin sont très exposés aux guêpes : nids sous les tuiles, dans les haies, les cabanons et parfois dans le sol.",
      "Les grands arbres du parc du donjon et des bords de l'Orge accueillent des nids de frelons asiatiques. Ils chassent dans les jardins voisins, autour des fruitiers et des treilles.",
    ],
    ['Saint-Michel-sur-Orge', 'Fleury-Mérogis', 'Morsang-sur-Orge', 'Villemoisson-sur-Orge'],
    { q: "Des frelons autour de mes fruits : y a-t-il un nid chez moi ?", a: "Pas forcément : les frelons viennent se nourrir de fruits mûrs et d'insectes, parfois depuis un nid éloigné. Observez de loin dans quelle direction ils repartent. En cas de doute, envoyez-nous une photo." }),
  vg('vigneux-sur-seine', 'Vigneux-sur-Seine', 'à Vigneux-sur-Seine', D91,
    'Vigneux-sur-Seine : nids de frelons près des lacs et de la Seine, guêpes dans les volets. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Vigneux-sur-Seine, les arbres autour des lacs et du Port-aux-Cerises sont propices aux nids de frelons asiatiques, que l'on découvre souvent à l'automne.",
      "Dans les résidences et les pavillons, les guêpes s'installent dans les coffres de volets roulants, sous les balcons et sous les toitures. Nous intervenons sans entrer chez les voisins.",
    ],
    ['Draveil', 'Montgeron', 'Athis-Mons', 'Juvisy-sur-Orge'],
    { q: "Un nid de guêpes sous mon balcon : est-ce à moi de payer ?", a: "Si le nid est sur votre balcon privatif, oui en général. S'il est sur la façade ou une partie commune, c'est au syndic ou au bailleur. Prévenez-le, nous pouvons établir le devis pour lui." }),
  vg('ris-orangis', 'Ris-Orangis', 'à Ris-Orangis', D91,
    'Ris-Orangis : nids de frelons dans les bois et parcs, nids de guêpes dans les pavillons. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Ris-Orangis, les bois de Saint-Eutrope et de l'Épine et les parcs de la ville abritent des nids de frelons asiatiques, parfois en lisière des jardins.",
      "Dans les pavillons et les nouveaux logements des bords de Seine, les guêpes s'installent sous les toits, dans les volets et les haies. Nous intervenons rapidement, 7j/7.",
    ],
    ['Évry-Courcouronnes', 'Grigny', 'Draveil', 'Bondoufle'],
    { q: "Le nid est dans un bois public : qui appeler ?", a: "Si le nid est sur un terrain public, prévenez la mairie, qui gère ses espaces verts. Si le nid est en lisière et touche votre jardin, nous pouvons intervenir depuis votre terrain si l'accès le permet." }),
  vg('viry-chatillon', 'Viry-Châtillon', 'à Viry-Châtillon', D91,
    'Viry-Châtillon : nids de frelons près des lacs et de l’Orge, guêpes sous les toits des pavillons. Dès 89 € TTC, 7j/7.',
    [
      "À Viry-Châtillon, les arbres des bords des lacs, de l'Orge et de la Seine sont des sites recherchés par les frelons asiatiques. Leurs nids sont souvent repérés une fois les arbres dénudés.",
      "Sur les coteaux, les maisons avec jardin voient les guêpes s'installer sous les avant-toits, dans les murets et les cabanons. Nous traitons à la perche ou directement au nid.",
    ],
    ['Grigny', 'Savigny-sur-Orge', 'Juvisy-sur-Orge', 'Morsang-sur-Orge'],
    { q: "Je vois un nid de frelons maintenant que les feuilles sont tombées : faut-il le détruire ?", a: "Si des frelons entrent et sortent encore, oui : le nid est actif. Si aucun frelon n'est visible par temps doux, la colonie est sans doute morte et le nid ne sera pas réutilisé." }),
  vg('meaux', 'Meaux', 'à Meaux', D77,
    'Meaux : nids de guêpes dans les toitures du centre, frelons asiatiques au bord de la Marne. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Meaux, les toitures anciennes du centre et les greniers offrent aux guêpes des cavités pour leurs nids. Les maisons des quartiers périphériques ont plutôt des nids dans les haies et les cabanons.",
      "Les arbres des bords de Marne et des canaux accueillent des nids de frelons asiatiques. Autour de Meaux, les apiculteurs les surveillent de près car ils chassent les abeilles.",
    ],
    ['Trilport', 'Nanteuil-lès-Meaux', 'Chauconin-Neufmontiers', 'Mareuil-lès-Meaux'],
    { q: "Les frelons asiatiques attaquent-ils mes ruches ?", a: "Oui, ils chassent les abeilles devant les ruches, surtout en fin d'été. Détruire les nids proches protège vos colonies. Signalez aussi les nids repérés à votre groupement apicole." }),
  vg('chelles', 'Chelles', 'à Chelles', D77,
    'Chelles : nids de frelons dans les arbres des bords de Marne, guêpes dans les pavillons. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Chelles, les arbres des bords de Marne, du parc du fort et des jardins accueillent des nids de frelons asiatiques. On les repère souvent en automne, quand les feuilles tombent.",
      "Dans les pavillons et les maisons anciennes, les guêpes s'installent sous les tuiles, dans les greniers et les coffres de volets. Nous intervenons rapidement, souvent le jour même.",
    ],
    ['Vaires-sur-Marne', 'Gagny', 'Montfermeil', 'Brou-sur-Chantereine'],
    { q: "Un nid de guêpes dans le grenier : est-ce dangereux ?", a: "Oui si vous y montez : un nid dérangé dans un espace fermé provoque une attaque rapide. N'y entrez pas et appelez-nous. Le traitement en combles est à partir de 199 € TTC." }),
  vg('melun', 'Melun', 'à Melun', D77,
    'Melun : nids de guêpes sous les toits du centre, frelons asiatiques en bord de Seine. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Melun, les immeubles anciens du centre et de l'île Saint-Étienne ont des toitures et des corniches où les guêpes bâtissent leurs nids. Les cours intérieures accueillent aussi des nids dans les arbres.",
      "Les bords de Seine et les parcs de la ville abritent des frelons asiatiques. Pour un nid en hauteur sur une façade, nous intervenons à la perche ou en nacelle sur devis.",
    ],
    ['Dammarie-lès-Lys', 'Le Mée-sur-Seine', 'Vaux-le-Pénil', 'Rubelles'],
    { q: "Un nid sous une corniche d'immeuble : comment l'atteindre ?", a: "Le plus souvent à la perche télescopique, depuis la rue ou la cour, jusqu'à plusieurs mètres. Pour les nids très hauts, une nacelle est prévue sur devis, avec l'accord du syndic." }),
  vg('pontault-combault', 'Pontault-Combault', 'à Pontault-Combault', D77,
    'Pontault-Combault : nids de frelons en lisière des bois, nids de guêpes dans les pavillons. Destruction dès 89 € TTC.',
    [
      "À Pontault-Combault, les pavillons en lisière des bois Notre-Dame et de Pontault sont très exposés aux frelons asiatiques, qui nichent dans les grands arbres.",
      "Dans les jardins, les guêpes s'installent dans les haies, les cabanons et parfois dans le sol. La tonte ou la taille peuvent les déranger : observez avant d'intervenir.",
    ],
    ['Roissy-en-Brie', 'Émerainville', 'Ozoir-la-Ferrière', 'Le Plessis-Trévise'],
    { q: "Un nid de guêpes dans le sol : comment le repérer ?", a: "Les guêpes entrent et sortent toujours par le même petit trou dans la pelouse ou au pied d'une haie. Balisez la zone et ne tondez pas autour : nous traitons le nid directement." }),
  vg('savigny-le-temple', 'Savigny-le-Temple', 'à Savigny-le-Temple', D77,
    'Savigny-le-Temple : nids de guêpes dans les volets et toitures, frelons dans les arbres. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Savigny-le-Temple, les maisons des lotissements ont des coffres de volets roulants, des avant-toits et des abris de jardin où les guêpes s'installent chaque été.",
      "Les arbres du parc des Tourailles et des coulées vertes accueillent des nids de frelons asiatiques. Nous les traitons à la perche, depuis le sol.",
    ],
    ['Cesson', 'Nandy', 'Vert-Saint-Denis', 'Saint-Pierre-du-Perray'],
    { q: "Des guêpes dans mon volet roulant : puis-je le baisser ?", a: "Non, ne touchez pas au volet : vous risquez d'écraser le nid et de provoquer une attaque. Fermez la fenêtre et appelez-nous. Le produit est injecté directement dans le coffre." }),
  vg('bussy-saint-georges', 'Bussy-Saint-Georges', 'à Bussy-Saint-Georges', D77,
    'Bussy-Saint-Georges : nids de guêpes dans les logements récents, frelons dans les parcs. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Bussy-Saint-Georges, les logements récents ont des coffres de volets, des bardages et des toitures-terrasses où les guêpes peuvent s'installer.",
      "Les parcs du Génitoy et de Rentilly et la promenade de la Brosse ont de grands arbres où les frelons asiatiques bâtissent leurs nids en hauteur.",
    ],
    ['Bussy-Saint-Martin', 'Collégien', 'Montévrain', 'Jossigny'],
    { q: "Un nid de guêpes sur une toiture-terrasse : intervenez-vous ?", a: "Oui. Si l'accès est sécurisé, nous traitons le nid directement. Sinon, nous intervenons à la perche depuis un point sûr. Le prix vous est donné avant l'intervention." }),
  vg('champs-sur-marne', 'Champs-sur-Marne', 'à Champs-sur-Marne', D77,
    'Champs-sur-Marne : nids de frelons dans les arbres du parc et des bords de Marne, guêpes. Destruction dès 89 € TTC.',
    [
      "À Champs-sur-Marne, les grands arbres du parc du château et des bords de Marne accueillent des nids de frelons asiatiques, parfois très hauts.",
      "Dans les pavillons et sur les bâtiments de la Cité Descartes, les guêpes s'installent sous les toits et dans les volets. Nous intervenons en dehors des heures de cours si besoin.",
    ],
    ['Noisiel', 'Torcy', 'Noisy-le-Grand', 'Émerainville'],
    { q: "Un nid de frelons près d'une école : intervenez-vous en priorité ?", a: "Oui. Pour un nid près d'une école, d'une crèche ou d'un lieu fréquenté, nous intervenons au plus vite, si possible hors des heures de présence des enfants." }),
  vg('villeparisis', 'Villeparisis', 'à Villeparisis', D77,
    'Villeparisis : nids de guêpes dans les pavillons, frelons le long du canal de l’Ourcq. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Villeparisis, les pavillons avec jardin sont très exposés aux guêpes, qui nichent sous les tuiles, dans les cabanons et dans les haies.",
      "Les arbres le long du canal de l'Ourcq et dans les parcs accueillent des nids de frelons asiatiques. Nous les traitons à la perche ou en nacelle sur devis.",
    ],
    ['Mitry-Mory', 'Claye-Souilly', 'Vaujours', 'Courtry'],
    { q: "Peut-on détruire un nid de guêpes avec une bombe du commerce ?", a: "C'est déconseillé : le produit n'atteint souvent pas le cœur du nid et provoque une attaque. Un professionnel en tenue intégrale traite le nid à distance, sans risque pour vous." }),
  vg('dammarie-les-lys', 'Dammarie-lès-Lys', 'à Dammarie-lès-Lys', D77,
    'Dammarie-lès-Lys : nids de frelons près de la forêt et de la Seine, guêpes sous les toits. Destruction dès 89 € TTC.',
    [
      "À Dammarie-lès-Lys, la proximité de la forêt de Fontainebleau, de la Seine et du parc de l'abbaye du Lys offre aux frelons asiatiques de nombreux arbres pour leurs nids.",
      "Dans les pavillons et les résidences, les guêpes s'installent sous les toits, dans les volets et les haies. Nous intervenons 7j/7, souvent le jour même.",
    ],
    ['Melun', 'Le Mée-sur-Seine', 'Boissise-le-Roi', 'Chartrettes'],
    { q: "Frelon asiatique ou frelon européen : comment les distinguer ?", a: "Le frelon asiatique est sombre, avec une bande orange sur l'abdomen et des pattes jaunes. Le frelon européen est plus gros, avec un abdomen jaune rayé de noir. Une photo nous suffit pour identifier." }),
  vg('combs-la-ville', 'Combs-la-Ville', 'à Combs-la-Ville', D77,
    'Combs-la-Ville : nids de frelons dans la vallée de l’Yerres, guêpes dans les pavillons. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Combs-la-Ville, la vallée boisée de l'Yerres et les grands arbres des parcs accueillent des nids de frelons asiatiques, souvent repérés en automne.",
      "Dans les pavillons, les guêpes s'installent sous les tuiles, dans les coffres de volets et les abris de jardin. Nous traitons le nid sans abîmer la toiture.",
    ],
    ['Moissy-Cramayel', 'Quincy-sous-Sénart', 'Brie-Comte-Robert', 'Lieusaint'],
    { q: "Faut-il retirer le nid après le traitement ?", a: "Ce n'est pas nécessaire : une fois la colonie morte, le nid n'est jamais réutilisé. S'il est accessible et gênant, il peut être retiré quelques jours après le traitement." }),
  vg('versailles', 'Versailles', 'à Versailles', D78,
    'Versailles : nids de frelons dans les grands arbres, nids de guêpes sous les toits anciens. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Versailles, les grands arbres des jardins privés, des avenues et des abords du parc accueillent des nids de frelons asiatiques, parfois très hauts.",
      "Dans les immeubles anciens et les hôtels particuliers, les guêpes s'installent sous les toitures, dans les corniches et les volets. Nous intervenons avec l'accord du syndic pour les parties communes.",
    ],
    ['Le Chesnay-Rocquencourt', 'Viroflay', "Saint-Cyr-l'École", 'Buc'],
    { q: "Un nid très haut dans un grand arbre : est-ce possible de le détruire ?", a: "Oui. Jusqu'à plusieurs mètres, la perche télescopique suffit (dès 149 € TTC). Pour les nids très hauts, nous intervenons en nacelle, sur devis." }),
  vg('sartrouville', 'Sartrouville', 'à Sartrouville', D78,
    'Sartrouville : nids de guêpes dans les pavillons, frelons asiatiques en bord de Seine. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Sartrouville, les pavillons avec jardin de la boucle de Seine voient chaque été des nids de guêpes sous les tuiles, dans les haies et les abris.",
      "Les arbres des berges et des parcs accueillent des nids de frelons asiatiques. Nous les traitons à la perche, sans grimper dans l'arbre.",
    ],
    ['Houilles', 'Montesson', 'Maisons-Laffitte', 'Cormeilles-en-Parisis'],
    { q: "Combien de temps dure l'intervention sur un nid ?", a: "En général moins d'une heure sur place. Le produit agit en quelques heures : les dernières guêpes qui rentrent au nid sont touchées à leur tour." }),
  vg('saint-germain-en-laye', 'Saint-Germain-en-Laye', 'à Saint-Germain-en-Laye', D78,
    'Saint-Germain-en-Laye : nids de frelons en lisière de forêt, guêpes sous les toits. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Saint-Germain-en-Laye, la grande forêt domaniale et les jardins arborés offrent aux frelons asiatiques de nombreux sites de nid, surtout dans les maisons en lisière.",
      "Dans le centre historique, les guêpes s'installent sous les toitures anciennes et dans les volets. Nous intervenons rapidement, 7j/7.",
    ],
    ['Le Pecq', 'Chambourcy', 'Mareil-Marly', 'Poissy'],
    { q: "Un nid de frelons en lisière de forêt : la commune intervient-elle ?", a: "Sur un terrain privé, c'est au propriétaire de faire détruire le nid. En forêt domaniale, prévenez l'ONF ou la mairie. Si le nid touche votre jardin, nous intervenons depuis votre terrain." }),
  vg('mantes-la-jolie', 'Mantes-la-Jolie', 'à Mantes-la-Jolie', D78,
    'Mantes-la-Jolie : nids de guêpes sur les façades et balcons, frelons en bord de Seine. Destruction dès 89 € TTC.',
    [
      "À Mantes-la-Jolie, les arbres des bords de Seine, de l'île aux Dames et des parcs accueillent des nids de frelons asiatiques, souvent repérés à l'automne.",
      "Dans les résidences et le centre ancien, les guêpes s'installent sous les balcons, dans les volets et sous les toitures. Pour un nid en façade, nous intervenons avec le bailleur.",
    ],
    ['Mantes-la-Ville', 'Buchelay', 'Limay', 'Magnanville'],
    { q: "Un nid de guêpes près de ma fenêtre au 5e étage : que faire ?", a: "Gardez la fenêtre fermée et prévenez le bailleur, car le nid est sur la façade. Nous intervenons à la perche ou depuis votre fenêtre selon la position du nid." }),
  vg('poissy', 'Poissy', 'à Poissy', D78,
    'Poissy : nids de frelons dans les arbres, guêpes dans les pavillons et sites d’entreprise. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Poissy, les jardins des quartiers résidentiels et les arbres des bords de Seine accueillent des nids de frelons asiatiques et de guêpes chaque année.",
      "Pour les entreprises et les sites industriels, un nid près d'une entrée ou d'un parking est traité rapidement, avec balisage et attestation.",
    ],
    ['Saint-Germain-en-Laye', 'Carrières-sous-Poissy', 'Villennes-sur-Seine', 'Orgeval'],
    { q: "Un nid de frelons sur un site d'entreprise : qui doit intervenir ?", a: "L'employeur doit protéger ses salariés : il fait détruire le nid par un professionnel. Nous intervenons rapidement, balisons la zone et remettons une attestation." }),
  vg('conflans-sainte-honorine', 'Conflans-Sainte-Honorine', 'à Conflans-Sainte-Honorine', D78,
    'Conflans-Sainte-Honorine : nids de frelons sur le coteau et les quais, guêpes dans les murets. Dès 89 € TTC, 7j/7.',
    [
      "À Conflans-Sainte-Honorine, les arbres du coteau et des quais de Seine et d'Oise accueillent des nids de frelons asiatiques, visibles à l'automne.",
      "Dans les jardins en terrasses, les guêpes s'installent dans les murets de pierre, sous les toits et dans les abris. Nous traitons le nid par son entrée, sans démolir.",
    ],
    ['Andrésy', 'Maurecourt', 'Herblay-sur-Seine', 'Achères'],
    { q: "Des guêpes près de ma péniche : intervenez-vous sur les quais ?", a: "Oui. Nous traitons les nids sur les bateaux, les quais ou dans les arbres voisins, avec le matériel adapté. Le prix est le même que pour une maison." }),
  vg('trappes', 'Trappes', 'à Trappes', D78,
    'Trappes : nids de guêpes dans les volets et toitures, frelons dans les arbres des parcs. Destruction dès 89 € TTC, 7j/7.',
    [
      "À Trappes, les arbres des parcs et des abords de l'île de loisirs de Saint-Quentin-en-Yvelines accueillent des nids de frelons asiatiques.",
      "Dans les résidences et les pavillons, les guêpes s'installent dans les coffres de volets, sous les balcons et sous les toitures. Nous intervenons avec le bailleur pour les façades.",
    ],
    ['Élancourt', 'Montigny-le-Bretonneux', 'Plaisir', 'La Verrière'],
    { q: "Une piqûre de guêpe : quand faut-il s'inquiéter ?", a: "Appelez le 15 en cas de piqûres multiples, de piqûre dans la bouche ou la gorge, ou de malaise, gonflement du visage ou gêne respiratoire. Sinon, retirez le dard s'il y en a un et refroidissez la zone." }),
  vg('les-mureaux', 'Les Mureaux', 'aux Mureaux', D78,
    'Les Mureaux : nids de frelons au parc de Bécheville et en bord de Seine, guêpes. Destruction dès 89 € TTC, 7j/7.',
    [
      "Aux Mureaux, les grands arbres du parc de Bécheville et des bords de Seine accueillent des nids de frelons asiatiques.",
      "Dans les pavillons et les résidences, les guêpes s'installent sous les tuiles, dans les volets et les haies. Nous intervenons rapidement, souvent le jour même.",
    ],
    ['Meulan-en-Yvelines', 'Ecquevilly', 'Verneuil-sur-Seine', 'Bouafle'],
    { q: "Pourquoi les guêpes sont-elles agressives en fin d'été ?", a: "En fin de saison, la colonie est à son maximum et les ouvrières cherchent du sucre. Elles sont plus nombreuses autour des tables et des poubelles, et défendent vivement leur nid." }),
  vg('houilles', 'Houilles', 'à Houilles', D78,
    'Houilles : nids de guêpes dans les maisons en meulière et jardins, frelons dans les arbres. Dès 89 € TTC, 7j/7.',
    [
      "À Houilles, les maisons en meulière ont des toitures, des murs et des jardins où les guêpes s'installent chaque été, sous les tuiles, dans les joints et les cabanons.",
      "Les arbres des parcs et des jardins accueillent des nids de frelons asiatiques. Nous les traitons à la perche, depuis le sol.",
    ],
    ['Sartrouville', 'Carrières-sur-Seine', 'Bezons', 'Chatou'],
    { q: "Des guêpes sortent d'un joint de mur en meulière : que faire ?", a: "Ne bouchez pas le trou : les guêpes chercheraient une autre sortie, parfois vers l'intérieur. Nous injectons le produit par l'ouverture, puis vous pourrez reboucher quelques jours plus tard." }),
  vg('montigny-le-bretonneux', 'Montigny-le-Bretonneux', 'à Montigny-le-Bretonneux', D78,
    'Montigny-le-Bretonneux : nids de guêpes dans les maisons, frelons dans les arbres des parcs. Dès 89 € TTC, 7j/7.',
    [
      "À Montigny-le-Bretonneux, les maisons de ville ont des avant-toits, des volets roulants et de petits jardins où les guêpes s'installent chaque été.",
      "Les arbres des coulées vertes et des abords des bassins accueillent des nids de frelons asiatiques. Pour les copropriétés, nous intervenons avec le syndic.",
    ],
    ['Guyancourt', 'Voisins-le-Bretonneux', 'Trappes', 'Élancourt'],
    { q: "Un nid de guêpes dans une maison mitoyenne : faut-il prévenir le voisin ?", a: "Oui, surtout si le nid est sous une toiture commune ou dans un mur mitoyen. Le traitement se fait depuis l'entrée du nid, chez vous ou chez lui selon l'accès." }),
]

export const getVilleFrelons = (slug: string) => VILLES_FRELONS.find((x) => x.slug === slug)
