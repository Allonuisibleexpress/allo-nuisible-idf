// Pages « Dératisation à [ville] » (/deratisation/[ville]) : 5 villes cibles.
// Cocon sémantique : pilier /services/deratisation, sœur /services/rongeurs, guides du blog rongeurs.
// GEO : bloc « En bref » factuel + FAQ balisée. E-E-A-T : auteur, certification, date, sources vérifiées.
// Règles CLAUDE.md : pas de chiffre inventé, pas de tiret long, pas de « naturel » ni « sans danger ».

export const MAJ_DERATISATION = '2026-10-30'

export const SOURCES_DERATISATION = [
  { label: 'Santé publique France, leptospirose', url: 'https://www.santepubliquefrance.fr/maladies-et-traumatismes/maladies-transmissibles-de-l-animal-a-l-homme/leptospirose' },
  { label: 'Règlement (UE) n° 528/2012 sur les produits biocides (EUR-Lex)', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32012R0528' },
]

// Guides du blog reliés au cocon dératisation
export const GUIDES_RONGEURS: Record<string, string> = {
  'rat-dans-les-toilettes': 'Rat dans les toilettes : comment il remonte',
  'souris-par-ou-entrent-elles': 'Souris : par où entrent-elles ?',
  'rongeur-moteur-voiture-cables': 'Câbles de voiture rongés : rat, souris ou fouine ?',
  'lerot-grenier-combles': 'Lérot dans le grenier : bruits la nuit',
  'restaurant-plan-lutte-nuisibles': 'Plan de lutte nuisibles en restaurant',
}

export type VilleDeratisation = {
  slug: string
  nom: string
  a: string // « à Saint-Maur-des-Fossés », « au Vésinet »
  code: string
  departement: string
  zoneHref: string
  title: string
  description: string
  contexte: string[]
  lieux: string[] // où chercher les rongeurs dans cette ville
  proches: string[]
  guides: (keyof typeof GUIDES_RONGEURS)[]
  faq: { q: string; a: string }[]
}

const FAQ_COMMUNE = (a: string) => [
  { q: `Combien coûte une dératisation ${a} ?`, a: 'Le prix dépend du type de lieu (maison, appartement, commerce, copropriété), de l\'infestation et du nombre de passages. Le devis est gratuit et vous le connaissez avant toute intervention.' },
  { q: 'Faut-il quitter le logement pendant la dératisation ?', a: 'Non, dans la plupart des cas. Les postes d\'appâtage sont verrouillés et inaccessibles aux enfants et aux animaux, et les pièges mécaniques ou connectés ne diffusent aucun produit.' },
]

export const VILLES_DERATISATION: VilleDeratisation[] = [
  {
    slug: 'saint-maur-des-fosses',
    nom: 'Saint-Maur-des-Fossés',
    a: 'à Saint-Maur-des-Fossés',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/saint-maur-des-fosses',
    title: 'Dératisation à Saint-Maur-des-Fossés (94), intervention 7j/7',
    description: 'Rats et souris à Saint-Maur-des-Fossés : postes sécurisés, pièges connectés, colmatage. Techniciens Certibiocide, jour même possible.',
    contexte: [
      'Saint-Maur-des-Fossés est bordée par la Marne et majoritairement pavillonnaire, de La Varenne à Adamville en passant par Le Parc et Champignol. Les surmulots vivent le long des berges et dans les réseaux, puis remontent vers les jardins, les sous-sols et les garages.',
      'Dans une maison, une infestation commence souvent par un détail : une grille d\'aération abîmée, un regard mal fermé, un compost ouvert. C\'est ce point d\'entrée que nous cherchons en premier.',
    ],
    lieux: ['Sous-sols et caves', 'Garages et abris de jardin', 'Composts et poulaillers', 'Vides sanitaires et regards'],
    proches: ['Créteil', 'Joinville-le-Pont', 'Champigny-sur-Marne', 'Bonneuil-sur-Marne', 'Chennevières-sur-Marne'],
    guides: ['rat-dans-les-toilettes', 'rongeur-moteur-voiture-cables', 'souris-par-ou-entrent-elles'],
    faq: [
      { q: 'Pourquoi y a-t-il des rats près des bords de Marne ?', a: 'Les berges offrent de l\'eau, des abris et de la nourriture. Les surmulots s\'y installent et circulent par les réseaux d\'eaux usées vers les maisons voisines, surtout après de fortes pluies ou des travaux.' },
      ...FAQ_COMMUNE('à Saint-Maur-des-Fossés'),
    ],
  },
  {
    slug: 'le-vesinet',
    nom: 'Le Vésinet',
    a: 'au Vésinet',
    code: '78',
    departement: 'Yvelines',
    zoneHref: '/zones/yvelines',
    title: 'Dératisation au Vésinet (78), intervention 7j/7',
    description: 'Rats et souris au Vésinet : postes sécurisés, pièges mécaniques et connectés, colmatage des accès. Techniciens Certibiocide, devis gratuit.',
    contexte: [
      'Le Vésinet est une ville-parc, avec ses lacs, ses rivières et ses grandes propriétés arborées. Ce cadre attire aussi les rongeurs : berges, massifs denses, dépendances et abris de jardin leur offrent des cachettes toute l\'année.',
      'Dans les grandes maisons, les rats et les souris passent par les sous-sols, les combles et les passages de canalisations. Un traitement efficace couvre la maison et le jardin, pas seulement la pièce où l\'on a vu l\'animal.',
    ],
    lieux: ['Berges des lacs et rivières', 'Dépendances et abris de jardin', 'Sous-sols et chaufferies', 'Combles et faux plafonds'],
    proches: ['Chatou', 'Croissy-sur-Seine', 'Le Pecq', 'Montesson'],
    guides: ['souris-par-ou-entrent-elles', 'lerot-grenier-combles', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Les plans d\'eau du Vésinet attirent-ils les rats ?', a: 'Les berges sont des zones favorables aux surmulots, qui y trouvent eau et abris. Les propriétés proches doivent surveiller les signes de passage : terriers au pied des haies, traces le long des murs, déjections près des abris de jardin.' },
      ...FAQ_COMMUNE('au Vésinet'),
    ],
  },
  {
    slug: 'maisons-laffitte',
    nom: 'Maisons-Laffitte',
    a: 'à Maisons-Laffitte',
    code: '78',
    departement: 'Yvelines',
    zoneHref: '/zones/yvelines',
    title: 'Dératisation à Maisons-Laffitte (78), intervention 7j/7',
    description: 'Rats et souris à Maisons-Laffitte : maisons, écuries, commerces. Postes sécurisés, pièges connectés, colmatage. Certibiocide, devis gratuit.',
    contexte: [
      'Entre la Seine, le parc et ses écuries de chevaux de course, Maisons-Laffitte réunit tout ce que recherchent les rongeurs : de l\'eau, des abris et de la nourriture, en particulier le grain et le fourrage stockés dans les écuries.',
      'Pour les écuries et les professionnels, nous mettons en place un suivi régulier, avec des pièges connectés qui signalent chaque capture. Pour les maisons, nous traitons et bouchons les accès.',
    ],
    lieux: ['Écuries, sellerie et stockage du fourrage', 'Sous-sols et caves', 'Abris et dépendances', 'Bords de Seine et jardins'],
    proches: ['Sartrouville', 'Le Mesnil-le-Roi', 'Saint-Germain-en-Laye'],
    guides: ['souris-par-ou-entrent-elles', 'restaurant-plan-lutte-nuisibles', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Comment protéger une écurie des rats et des souris ?', a: 'En stockant le grain dans des contenants fermés, en limitant les restes de nourriture et en installant un dispositif suivi dans le temps : postes d\'appâtage sécurisés hors de portée des chevaux, ou pièges connectés qui signalent les captures.' },
      ...FAQ_COMMUNE('à Maisons-Laffitte'),
    ],
  },
  {
    slug: 'gif-sur-yvette',
    nom: 'Gif-sur-Yvette',
    a: 'à Gif-sur-Yvette',
    code: '91',
    departement: 'Essonne',
    zoneHref: '/zones/essonne',
    title: 'Dératisation à Gif-sur-Yvette (91), intervention 7j/7',
    description: 'Rats et souris à Gif-sur-Yvette : maisons, résidences, bâtiments pros. Postes sécurisés, pièges connectés, colmatage. Certibiocide.',
    contexte: [
      'Gif-sur-Yvette s\'étend de la vallée de l\'Yvette jusqu\'au plateau de Saclay, avec beaucoup de maisons entourées de jardins et de bois. À l\'automne, souris et rats cherchent un abri au chaud et entrent par le moindre passage.',
      'Résidences, maisons et bâtiments professionnels n\'appellent pas le même dispositif : nous adaptons le choix entre postes d\'appâtage sécurisés et pièges mécaniques ou connectés.',
    ],
    lieux: ['Passages de tuyaux et gaines', 'Garages et sous-sols', 'Combles et isolation', 'Abris de jardin et tas de bois'],
    proches: ['Bures-sur-Yvette', 'Orsay', 'Saint-Rémy-lès-Chevreuse', 'Saclay'],
    guides: ['souris-par-ou-entrent-elles', 'lerot-grenier-combles', 'rat-dans-les-toilettes'],
    faq: [
      { q: 'Pourquoi les souris entrent-elles dans les maisons à l\'automne ?', a: 'Quand les températures baissent, elles cherchent un abri chaud et de la nourriture. Une souris passe par un trou de la taille d\'un crayon : les passages de tuyaux et les bas de portes de garage sont les entrées les plus fréquentes.' },
      ...FAQ_COMMUNE('à Gif-sur-Yvette'),
    ],
  },
  {
    slug: 'fontainebleau',
    nom: 'Fontainebleau',
    a: 'à Fontainebleau',
    code: '77',
    departement: 'Seine-et-Marne',
    zoneHref: '/zones/seine-et-marne',
    title: 'Dératisation à Fontainebleau (77), intervention 7j/7',
    description: 'Rats et souris à Fontainebleau : maisons anciennes, commerces, copropriétés. Postes sécurisés, pièges connectés. Certibiocide, devis gratuit.',
    contexte: [
      'Entourée par sa forêt, Fontainebleau compte de nombreuses maisons anciennes avec caves voûtées, murs de pierre et jardins. Ces bâtiments offrent beaucoup de passages aux rongeurs : joints dégradés, soupiraux, anciennes canalisations.',
      'En centre-ville, restaurants et commerces doivent aussi pouvoir justifier d\'un plan de lutte contre les nuisibles. Nous fournissons les attestations et proposons un suivi régulier.',
    ],
    lieux: ['Caves voûtées et soupiraux', 'Murs de pierre et joints', 'Cours et locaux poubelles', 'Arrière-cuisines de commerces'],
    proches: ['Avon', 'Bois-le-Roi', 'Samois-sur-Seine'],
    guides: ['restaurant-plan-lutte-nuisibles', 'souris-par-ou-entrent-elles', 'rat-dans-les-toilettes'],
    faq: [
      { q: 'Les caves anciennes favorisent-elles les rats ?', a: 'Oui. Les joints dégradés, les soupiraux sans grille et les anciennes canalisations créent des accès faciles. Le colmatage de ces passages est indispensable, quelle que soit la méthode de traitement choisie.' },
      ...FAQ_COMMUNE('à Fontainebleau'),
    ],
  },

  // ── Lot 2 : Val-de-Marne ──
  {
    slug: 'le-perreux-sur-marne',
    nom: 'Le Perreux-sur-Marne',
    a: 'au Perreux-sur-Marne',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/le-perreux-sur-marne',
    title: 'Dératisation au Perreux-sur-Marne (94), intervention 7j/7',
    description: 'Rats et souris au Perreux-sur-Marne : maisons, jardins, bords de Marne. Postes sécurisés, pièges connectés, colmatage. Certibiocide.',
    contexte: [
      'Le Perreux-sur-Marne est une commune résidentielle en bord de Marne, où dominent les maisons avec jardin. Les surmulots vivent le long des berges et dans les réseaux d\'eaux usées, puis cherchent un abri dans les sous-sols, les garages et les cabanons.',
      'Dans une maison, un seul passage suffit : grille d\'aération descellée, porte de garage mal ajustée, regard ouvert. Nous commençons toujours par trouver cet accès avant de choisir le dispositif.',
    ],
    lieux: ['Sous-sols et garages', 'Cabanons et abris de jardin', 'Composts et massifs denses', 'Regards et grilles d\'aération'],
    proches: ['Nogent-sur-Marne', 'Bry-sur-Marne', 'Champigny-sur-Marne', 'Fontenay-sous-Bois'],
    guides: ['rat-dans-les-toilettes', 'souris-par-ou-entrent-elles', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Les rats des bords de Marne peuvent-ils entrer dans une maison ?', a: 'Oui. Ils circulent par les berges et les réseaux d\'eaux usées, puis entrent par les sous-sols, les garages ou les canalisations. Un clapet anti-retour et le colmatage des accès limitent fortement ce risque.' },
      ...FAQ_COMMUNE('au Perreux-sur-Marne'),
    ],
  },
  {
    slug: 'nogent-sur-marne',
    nom: 'Nogent-sur-Marne',
    a: 'à Nogent-sur-Marne',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/nogent-sur-marne',
    title: 'Dératisation à Nogent-sur-Marne (94), intervention 7j/7',
    description: 'Rats et souris à Nogent-sur-Marne : maisons, copropriétés, commerces. Postes sécurisés, pièges connectés, colmatage. Certibiocide, devis gratuit.',
    contexte: [
      'Entre le Bois de Vincennes et la Marne, Nogent-sur-Marne mêle maisons, résidences et commerces. Les rongeurs profitent de ces deux milieux : espaces verts d\'un côté, caves, locaux poubelles et réseaux de l\'autre.',
      'En copropriété, traiter un seul logement ne suffit pas : caves, parkings et parties communes doivent être inclus. Nous travaillons avec les syndics et fournissons un rapport après chaque passage.',
    ],
    lieux: ['Caves et parkings de résidence', 'Locaux poubelles', 'Jardins proches du Bois de Vincennes', 'Arrière-boutiques et réserves'],
    proches: ['Le Perreux-sur-Marne', 'Fontenay-sous-Bois', 'Joinville-le-Pont', 'Vincennes'],
    guides: ['rat-dans-les-toilettes', 'rongeur-moteur-voiture-cables', 'restaurant-plan-lutte-nuisibles'],
    faq: [
      { q: 'Qui paie la dératisation dans une copropriété ?', a: 'Les parties communes (caves, parkings, locaux poubelles, réseaux) relèvent du syndicat des copropriétaires, via le syndic. Si les rongeurs viennent d\'un lot privé, c\'est au propriétaire concerné de faire traiter.' },
      ...FAQ_COMMUNE('à Nogent-sur-Marne'),
    ],
  },
  {
    slug: 'bry-sur-marne',
    nom: 'Bry-sur-Marne',
    a: 'à Bry-sur-Marne',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/bry-sur-marne',
    title: 'Dératisation à Bry-sur-Marne (94), intervention 7j/7',
    description: 'Rats et souris à Bry-sur-Marne : maisons, jardins, sous-sols. Postes sécurisés, pièges mécaniques et connectés, colmatage. Certibiocide.',
    contexte: [
      'Bry-sur-Marne est une petite commune résidentielle en bord de Marne, avec beaucoup de maisons et de jardins. Les rongeurs y trouvent eau, abris et nourriture, en particulier près des berges et des potagers.',
      'Près des jardins, des potagers et des animaux domestiques, vous avez le choix entre postes d\'appâtage verrouillés et pièges mécaniques ou connectés, toujours avec le colmatage des accès.',
    ],
    lieux: ['Potagers et composts', 'Sous-sols et vides sanitaires', 'Abris de jardin et tas de bois', 'Bords de Marne et jardins en pente'],
    proches: ['Le Perreux-sur-Marne', 'Champigny-sur-Marne', 'Villiers-sur-Marne', 'Nogent-sur-Marne'],
    guides: ['souris-par-ou-entrent-elles', 'lerot-grenier-combles', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Peut-on dératiser près d\'un potager ou avec des animaux ?', a: 'Oui. Les postes d\'appâtage sont verrouillés et inaccessibles aux enfants et aux animaux. Si vous préférez éviter tout raticide près du potager, nous posons des pièges mécaniques ou connectés.' },
      ...FAQ_COMMUNE('à Bry-sur-Marne'),
    ],
  },
  {
    slug: 'sucy-en-brie',
    nom: 'Sucy-en-Brie',
    a: 'à Sucy-en-Brie',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/sucy-en-brie',
    title: 'Dératisation à Sucy-en-Brie (94), intervention 7j/7',
    description: 'Rats et souris à Sucy-en-Brie : maisons, résidences, commerces. Postes sécurisés, pièges mécaniques et connectés, colmatage. Certibiocide.',
    contexte: [
      'Sucy-en-Brie associe un centre ancien, de nombreux quartiers pavillonnaires et des bois à proximité. À l\'arrivée du froid, rats et souris quittent les espaces verts pour les garages, les sous-sols et les combles.',
      'Les maisons anciennes du centre ont souvent des caves et des murs de pierre qui offrent des passages. Les pavillons plus récents, eux, laissent entrer les rongeurs par les gaines et les passages de tuyaux.',
    ],
    lieux: ['Caves et murs anciens', 'Garages et sous-sols', 'Combles et isolation', 'Passages de tuyaux et gaines'],
    proches: ['Boissy-Saint-Léger', 'Bonneuil-sur-Marne', 'Ormesson-sur-Marne', 'Noiseau', 'Chennevières-sur-Marne'],
    guides: ['souris-par-ou-entrent-elles', 'lerot-grenier-combles', 'rat-dans-les-toilettes'],
    faq: [
      { q: 'Rat ou souris : comment faire la différence ?', a: 'Les déjections de rat sont plus grosses et allongées, celles de souris petites et pointues. Les rats laissent aussi des traces grasses le long des murs et creusent parfois des terriers au jardin. Le technicien identifie l\'espèce avant de traiter.' },
      ...FAQ_COMMUNE('à Sucy-en-Brie'),
    ],
  },
  {
    slug: 'santeny',
    nom: 'Santeny',
    a: 'à Santeny',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/santeny',
    title: 'Dératisation à Santeny (94), intervention 7j/7',
    description: 'Rats et souris à Santeny : maisons, dépendances, granges. Postes sécurisés, pièges mécaniques et connectés, colmatage. Certibiocide, devis gratuit.',
    contexte: [
      'Santeny est un village du plateau briard, entouré de champs et de bois, avec de grandes maisons, des dépendances et parfois des chevaux. Après les moissons et à l\'arrivée du froid, les rongeurs des champs se rapprochent des habitations.',
      'Granges, écuries et abris de stockage demandent un suivi dans le temps : les pièges connectés signalent chaque capture, et les postes d\'appâtage sécurisés restent hors de portée des animaux.',
    ],
    lieux: ['Granges et dépendances', 'Écuries et stockage du grain', 'Garages et sous-sols', 'Haies et lisières des champs'],
    proches: ['Villecresnes', 'Marolles-en-Brie', 'Mandres-les-Roses', 'Périgny'],
    guides: ['souris-par-ou-entrent-elles', 'lerot-grenier-combles', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Pourquoi les rongeurs arrivent-ils après les moissons ?', a: 'Quand les champs sont fauchés, les rongeurs perdent abri et nourriture et se rapprochent des maisons, des granges et des dépendances. C\'est le bon moment pour vérifier les accès et installer un dispositif.' },
      ...FAQ_COMMUNE('à Santeny'),
    ],
  },
]

export function getVilleDeratisation(slug: string) {
  return VILLES_DERATISATION.find((v) => v.slug === slug)
}
