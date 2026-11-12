// Pages « Dératisation à [ville] » (/deratisation/[ville]) : 5 villes cibles.
// Cocon sémantique : pilier /services/deratisation (rats et souris), guides du blog rongeurs.
// GEO : bloc « En bref » factuel + FAQ balisée. E-E-A-T : auteur, certification, date, sources vérifiées.
// Règles CLAUDE.md : pas de chiffre inventé, pas de tiret long, pas de « naturel » ni « sans danger ».

export const MAJ_DERATISATION = '2026-11-12'

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
  'rats-dans-les-combles': 'Rats dans les combles : signes et traitement',
  'rat-dans-les-murs-cloisons': 'Rat dans les murs ou les cloisons',
  'rat-vide-sanitaire': 'Rat dans le vide sanitaire',
  'restaurant-plan-lutte-nuisibles': 'Plan de lutte nuisibles en restaurant',
  'deratisation-sans-mort-aux-rats': 'Dératisation sans mort-aux-rats : méthodes alternatives',
  'rat-mode-de-vie': 'Le rat : mode de vie et comportement',
  'reproduction-des-rats': 'Reproduction des rats',
  'nourrir-oiseaux-pigeons-attire-rats': 'Nourrir les oiseaux attire les rats',
  'rat-compost': 'Rats dans le compost',
  'trou-dans-le-jardin': 'Trou dans le jardin : rat, campagnol ou taupe ?',
  'guide-des-rongeurs': 'Le guide des rongeurs : tout savoir sur 15 animaux',
  'rat-ou-souris-comment-reconnaitre': 'Rat ou souris : comment reconnaître le rongeur',
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
    description: 'Rats à Saint-Maur-des-Fossés : postes sécurisés, pièges connectés, colmatage. Techniciens Certibiocide, jour même possible.',
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
    description: 'Rats au Perreux-sur-Marne : maisons, jardins, bords de Marne. Postes sécurisés, pièges connectés, colmatage. Certibiocide.',
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
    description: 'Rats à Nogent-sur-Marne : maisons, copropriétés, commerces. Postes sécurisés, pièges connectés, colmatage. Certibiocide, devis gratuit.',
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
    description: 'Rats à Bry-sur-Marne : maisons, jardins, sous-sols. Postes sécurisés, pièges mécaniques et connectés, colmatage. Certibiocide.',
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
    description: 'Rats à Sucy-en-Brie : maisons, résidences, commerces. Postes sécurisés, pièges mécaniques et connectés, colmatage. Certibiocide.',
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
    description: 'Rats à Santeny : maisons, dépendances, granges. Postes sécurisés, pièges mécaniques et connectés, colmatage. Certibiocide, devis gratuit.',
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
  // ── Lot 3 : Val-de-Marne, les communes les plus peuplées + Saint-Maurice (siège) ──
  {
    slug: 'vitry-sur-seine',
    nom: 'Vitry-sur-Seine',
    a: 'à Vitry-sur-Seine',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/vitry-sur-seine',
    title: 'Dératisation à Vitry-sur-Seine (94), intervention 7j/7',
    description: 'Rats à Vitry-sur-Seine : caves, locaux poubelles, entrepôts, pavillons. Postes sécurisés, pièges connectés. Certibiocide.',
    contexte: [
      'Vitry-sur-Seine mêle grands ensembles, quartiers pavillonnaires et zones d\'activités le long de la Seine, comme les Ardoines. Ces trois milieux n\'attirent pas les rongeurs de la même façon : caves et vide-ordures dans les résidences, jardins et sous-sols dans les pavillons, quais et entrepôts côté fleuve.',
      'Dans les grandes résidences, les rats circulent d\'une cage d\'escalier à l\'autre par les caves et les gaines. Un traitement utile couvre tout le bâtiment, avec un suivi des postes, et pas seulement l\'appartement qui a donné l\'alerte.',
    ],
    lieux: ['Caves et couloirs de caves', 'Locaux vide-ordures et poubelles', 'Entrepôts et quais de la zone des Ardoines', 'Sous-sols et jardins des pavillons'],
    proches: ['Ivry-sur-Seine', 'Villejuif', 'Choisy-le-Roi', 'Thiais', 'Alfortville'],
    guides: ['rat-dans-les-toilettes', 'rat-vide-sanitaire', 'restaurant-plan-lutte-nuisibles'],
    faq: [
      { q: 'Un vide-ordures peut-il attirer les rats dans un immeuble ?', a: 'Oui. Une trappe qui ferme mal ou un local mal nettoyé offre nourriture et abri. Les rats remontent alors par la colonne et les gaines. Le traitement porte sur le local, la colonne et les caves, avec le nettoyage et la réparation de la trappe.' },
      ...FAQ_COMMUNE('à Vitry-sur-Seine'),
    ],
  },
  {
    slug: 'creteil',
    nom: 'Créteil',
    a: 'à Créteil',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/creteil',
    title: 'Dératisation à Créteil (94), intervention le jour même',
    description: 'Rats à Créteil : résidences, pavillons, commerces, bords de Marne. Postes sécurisés, pièges connectés, colmatage. Certibiocide.',
    contexte: [
      'Préfecture du Val-de-Marne, Créteil réunit des quartiers très différents : le vieux Créteil et ses maisons en bord de Marne, les résidences du Mont-Mesly ou des Bleuets, les abords du lac et le grand pôle commercial du centre. Partout où l\'eau et les déchets se rencontrent, les surmulots trouvent de quoi s\'installer.',
      'Autour des commerces et de la restauration, la question n\'est pas seulement de supprimer les rongeurs mais de pouvoir le prouver : nous posons des dispositifs suivis et remettons un rapport après chaque passage.',
    ],
    lieux: ['Abords du lac et bras de la Marne', 'Caves et parkings de résidences', 'Réserves et locaux déchets des commerces', 'Jardins et sous-sols du vieux Créteil'],
    proches: ['Maisons-Alfort', 'Saint-Maur-des-Fossés', 'Bonneuil-sur-Marne', 'Alfortville', 'Choisy-le-Roi'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rat-dans-les-toilettes', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Y a-t-il plus de rats près du lac de Créteil ?', a: 'Les abords des plans d\'eau sont favorables aux surmulots : eau, berges et restes de nourriture laissés par les promeneurs. Les immeubles et maisons proches doivent surtout surveiller les caves, les locaux poubelles et les regards.' },
      ...FAQ_COMMUNE('à Créteil'),
    ],
  },
  {
    slug: 'champigny-sur-marne',
    nom: 'Champigny-sur-Marne',
    a: 'à Champigny-sur-Marne',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/champigny-sur-marne',
    title: 'Dératisation à Champigny-sur-Marne (94), 7j/7',
    description: 'Rats et souris à Champigny-sur-Marne : pavillons, jardins, résidences. Postes sécurisés, pièges mécaniques et connectés, colmatage.',
    contexte: [
      'Champigny-sur-Marne s\'étire des bords de Marne jusqu\'au plateau, avec une large part de pavillons et de jardins, et de grandes résidences comme au Bois-l\'Abbé. Dans les jardins, les rats creusent des terriers au pied des haies, sous les abris et près des composts.',
      'Un terrier au jardin n\'est souvent que la partie visible : les rats cherchent ensuite à entrer dans le sous-sol ou le garage. Nous traitons le terrier et vérifions en même temps les accès à la maison.',
    ],
    lieux: ['Terriers au pied des haies et des murets', 'Composts et poulaillers', 'Garages et sous-sols', 'Caves de résidences'],
    proches: ['Saint-Maur-des-Fossés', 'Le Perreux-sur-Marne', 'Bry-sur-Marne', 'Villiers-sur-Marne', 'Chennevières-sur-Marne'],
    guides: ['rat-vide-sanitaire', 'souris-par-ou-entrent-elles', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Comment reconnaître un terrier de rat dans le jardin ?', a: 'Un trou d\'environ 6 à 8 cm de diamètre, aux bords lisses, souvent au pied d\'une haie, d\'un mur ou sous une dalle, avec de la terre fraîche devant et parfois un chemin tassé dans l\'herbe. Un trou rebouché qui réapparaît le lendemain confirme une activité.' },
      ...FAQ_COMMUNE('à Champigny-sur-Marne'),
    ],
  },
  {
    slug: 'ivry-sur-seine',
    nom: 'Ivry-sur-Seine',
    a: 'à Ivry-sur-Seine',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/ivry-sur-seine',
    title: 'Dératisation à Ivry-sur-Seine (94), intervention 7j/7',
    description: 'Rats à Ivry-sur-Seine : immeubles, chantiers, commerces, bords de Seine. Postes sécurisés, pièges connectés. Certibiocide.',
    contexte: [
      'Aux portes de Paris, Ivry-sur-Seine se transforme vite : anciennes emprises industrielles reconverties, nouveaux immeubles, grands chantiers comme Ivry-Confluences. Les travaux de terrassement et de réseaux dérangent les colonies de rats, qui se déplacent vers les bâtiments voisins.',
      'Dans les immeubles anciens du centre, ce sont plutôt les caves, les cours et les canalisations en fonte qui laissent passer les rongeurs. Nous identifions d\'abord le chemin emprunté avant de choisir le dispositif.',
    ],
    lieux: ['Immeubles proches des chantiers', 'Caves et cours d\'immeubles anciens', 'Locaux poubelles', 'Quais et bords de Seine'],
    proches: ['Vitry-sur-Seine', 'Le Kremlin-Bicêtre', 'Villejuif', 'Charenton-le-Pont', 'Alfortville'],
    guides: ['rat-dans-les-murs-cloisons', 'rat-dans-les-toilettes', 'restaurant-plan-lutte-nuisibles'],
    faq: [
      { q: 'Pourquoi voit-on plus de rats près d\'un chantier ?', a: 'Les terrassements et les travaux sur les réseaux détruisent les terriers et les galeries. Les rats se déplacent alors vers les bâtiments voisins à la recherche d\'un nouvel abri. Il vaut mieux protéger les caves et les locaux poubelles dès le début des travaux.' },
      ...FAQ_COMMUNE('à Ivry-sur-Seine'),
    ],
  },
  {
    slug: 'maisons-alfort',
    nom: 'Maisons-Alfort',
    a: 'à Maisons-Alfort',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/maisons-alfort',
    title: 'Dératisation à Maisons-Alfort (94), intervention 7j/7',
    description: 'Rats à Maisons-Alfort : maisons, copropriétés, commerces, bords de Marne. Postes sécurisés, pièges connectés. Certibiocide.',
    contexte: [
      'Maisons-Alfort est bordée par la Marne et proche de sa confluence avec la Seine. Les quartiers pavillonnaires comme Charentonneau ou Alfort côtoient des copropriétés et des rues commerçantes. Lors des fortes pluies et des crues, les rats quittent les réseaux et les berges et remontent vers les sous-sols.',
      'Les caves inondables et les regards mal fermés sont des points d\'entrée fréquents. Un clapet anti-retour sur les évacuations et le colmatage des passages complètent le traitement.',
    ],
    lieux: ['Sous-sols et caves inondables', 'Regards et évacuations', 'Jardins de Charentonneau et d\'Alfort', 'Commerces et réserves'],
    proches: ['Alfortville', 'Créteil', 'Charenton-le-Pont', 'Saint-Maurice', 'Saint-Maur-des-Fossés'],
    guides: ['rat-dans-les-toilettes', 'rat-vide-sanitaire', 'souris-par-ou-entrent-elles'],
    faq: [
      { q: 'Les crues de la Marne font-elles venir les rats ?', a: 'Quand le niveau monte, les rats quittent les berges et les réseaux inondés pour des zones sèches : sous-sols, garages, caves. C\'est souvent après un épisode de pluie ou de crue qu\'apparaissent les premiers signes dans les maisons.' },
      ...FAQ_COMMUNE('à Maisons-Alfort'),
    ],
  },
  {
    slug: 'fontenay-sous-bois',
    nom: 'Fontenay-sous-Bois',
    a: 'à Fontenay-sous-Bois',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/fontenay-sous-bois',
    title: 'Dératisation à Fontenay-sous-Bois (94), 7j/7',
    description: 'Rats à Fontenay-sous-Bois : maisons, résidences, bureaux du Val de Fontenay. Postes sécurisés, pièges connectés. Certibiocide.',
    contexte: [
      'Fontenay-sous-Bois touche le Bois de Vincennes et s\'étage entre ville haute et ville basse, avec des pavillons, des résidences et le quartier d\'affaires du Val de Fontenay. Le bois est un réservoir de rongeurs qui se rapprochent des habitations à l\'automne.',
      'Pour les bureaux et les entreprises, nous proposons des pièges connectés qui signalent chaque capture : le suivi se fait sans gêner l\'activité et chaque passage donne lieu à un rapport.',
    ],
    lieux: ['Jardins en lisière du Bois de Vincennes', 'Caves et parkings de résidences', 'Bureaux, cuisines d\'entreprise et locaux techniques', 'Sous-sols des pavillons'],
    proches: ['Vincennes', 'Nogent-sur-Marne', 'Le Perreux-sur-Marne', 'Saint-Mandé'],
    guides: ['souris-par-ou-entrent-elles', 'rat-dans-les-murs-cloisons', 'restaurant-plan-lutte-nuisibles'],
    faq: [
      { q: 'Une entreprise doit-elle faire dératiser ses locaux ?', a: 'Les établissements qui manipulent des denrées alimentaires doivent maîtriser les nuisibles dans le cadre de leur plan de maîtrise sanitaire. Pour des bureaux, ce n\'est pas une obligation générale, mais l\'employeur doit assurer des locaux salubres : en cas de rongeurs, une intervention s\'impose.' },
      ...FAQ_COMMUNE('à Fontenay-sous-Bois'),
    ],
  },
  {
    slug: 'villejuif',
    nom: 'Villejuif',
    a: 'à Villejuif',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/villejuif',
    title: 'Dératisation à Villejuif (94), intervention le jour même',
    description: 'Rats et souris à Villejuif : immeubles, pavillons, abords des chantiers du métro. Postes sécurisés, pièges connectés. Certibiocide.',
    contexte: [
      'Sur son plateau, Villejuif a connu de grands chantiers, notamment autour de la gare Villejuif-Institut Gustave-Roussy du Grand Paris Express. Ces travaux souterrains ont déplacé des rongeurs vers les immeubles et les pavillons des alentours.',
      'Les pavillons du plateau laissent souvent entrer les souris par les passages de tuyaux et les portes de garage. Dans les immeubles, ce sont les caves et les locaux poubelles qu\'il faut traiter en priorité.',
    ],
    lieux: ['Abords des chantiers et nouvelles constructions', 'Caves et locaux poubelles', 'Garages et passages de tuyaux des pavillons', 'Commerces de bouche'],
    proches: ['Le Kremlin-Bicêtre', 'Vitry-sur-Seine', 'Cachan', 'L\'Haÿ-les-Roses', 'Chevilly-Larue'],
    guides: ['souris-par-ou-entrent-elles', 'rat-dans-les-murs-cloisons', 'rat-dans-les-toilettes'],
    faq: [
      { q: 'J\'entends grignoter dans les murs : rat ou souris ?', a: 'Des grattements légers et rapides, la nuit, font plutôt penser à des souris. Des bruits plus lourds, des déjections de plus d\'un centimètre et des traces grasses le long des plinthes orientent vers un rat. Le technicien confirme sur place avant de traiter.' },
      ...FAQ_COMMUNE('à Villejuif'),
    ],
  },
  {
    slug: 'vincennes',
    nom: 'Vincennes',
    a: 'à Vincennes',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/vincennes',
    title: 'Dératisation à Vincennes (94), intervention le jour même',
    description: 'Rats à Vincennes : immeubles anciens, cours, restaurants, caves. Postes sécurisés, pièges connectés, colmatage. Certibiocide.',
    contexte: [
      'Vincennes est une ville dense d\'immeubles anciens, de cours intérieures et de commerces, accolée au Bois de Vincennes. Les rats du bois et des réseaux trouvent dans les caves voûtées, les cours et les locaux poubelles des abris faciles d\'accès.',
      'Dans un immeuble ancien, les passages sont nombreux : soupiraux, joints de caves dégradés, anciennes descentes en fonte. Nous traitons les parties communes en lien avec le syndic et bouchons les accès identifiés.',
    ],
    lieux: ['Caves voûtées et soupiraux', 'Cours intérieures et locaux poubelles', 'Cuisines et réserves de restaurants', 'Rez-de-chaussée sur cour'],
    proches: ['Saint-Mandé', 'Fontenay-sous-Bois', 'Montreuil', 'Nogent-sur-Marne'],
    guides: ['rat-dans-les-toilettes', 'restaurant-plan-lutte-nuisibles', 'rat-dans-les-murs-cloisons'],
    faq: [
      { q: 'Des rats dans la cour de l\'immeuble : qui doit agir ?', a: 'La cour, les caves et le local poubelles sont des parties communes : c\'est au syndic de faire intervenir un professionnel. Signalez-lui le problème par écrit. Si les rats entrent aussi chez vous, nous pouvons traiter votre logement en même temps.' },
      ...FAQ_COMMUNE('à Vincennes'),
    ],
  },
  {
    slug: 'alfortville',
    nom: 'Alfortville',
    a: 'à Alfortville',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/alfortville',
    title: 'Dératisation à Alfortville (94), intervention 7j/7',
    description: 'Rats à Alfortville : immeubles, pavillons, quais de Seine et de Marne. Postes sécurisés, pièges connectés. Certibiocide.',
    contexte: [
      'Alfortville occupe la pointe entre la Seine et la Marne, à leur confluence. Avec de l\'eau sur deux côtés, les quais et les réseaux d\'eaux usées hébergent des surmulots qui remontent vers les immeubles et les pavillons des rues proches.',
      'Les rez-de-chaussée et les sous-sols proches des quais sont les plus exposés. Nous combinons postes d\'appâtage sécurisés dans les parties communes et colmatage des passages autour des canalisations.',
    ],
    lieux: ['Quais de Seine et de Marne', 'Sous-sols et rez-de-chaussée proches des berges', 'Locaux poubelles de résidences', 'Jardins et garages des pavillons'],
    proches: ['Maisons-Alfort', 'Vitry-sur-Seine', 'Créteil', 'Ivry-sur-Seine', 'Charenton-le-Pont'],
    guides: ['rat-dans-les-toilettes', 'rat-vide-sanitaire', 'souris-par-ou-entrent-elles'],
    faq: [
      { q: 'Un rat peut-il vraiment remonter par les toilettes ?', a: 'Oui, c\'est rare mais possible : le surmulot nage et remonte les canalisations. Les logements bas proches des réseaux sont les plus concernés. Un clapet anti-retour sur l\'évacuation et le traitement des réseaux de l\'immeuble règlent le problème.' },
      ...FAQ_COMMUNE('à Alfortville'),
    ],
  },
  {
    slug: 'choisy-le-roi',
    nom: 'Choisy-le-Roi',
    a: 'à Choisy-le-Roi',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/choisy-le-roi',
    title: 'Dératisation à Choisy-le-Roi (94), intervention 7j/7',
    description: 'Rats et souris à Choisy-le-Roi : résidences, pavillons, commerces, bords de Seine. Postes sécurisés, pièges connectés. Certibiocide.',
    contexte: [
      'Traversée par la Seine, Choisy-le-Roi associe un centre-ville commerçant autour de la gare, des résidences et des quartiers pavillonnaires. Les berges et les réseaux sont les principales sources de surmulots, qui gagnent ensuite les caves et les locaux à déchets.',
      'Pour les commerces du centre, un suivi régulier avec pièges connectés évite les mauvaises surprises lors d\'un contrôle. Pour les particuliers, un ou deux passages suffisent le plus souvent, avec le colmatage des accès.',
    ],
    lieux: ['Bords de Seine et jardins proches', 'Caves et parkings de résidences', 'Commerces autour de la gare', 'Locaux à déchets'],
    proches: ['Thiais', 'Vitry-sur-Seine', 'Orly', 'Créteil', 'Villeneuve-le-Roi'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rat-dans-les-toilettes', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Combien de passages faut-il pour une dératisation ?', a: 'Pour un logement, on compte en général un passage de traitement et un passage de contrôle quelques semaines plus tard. Une copropriété ou un commerce demande souvent un suivi régulier dans le temps. Le nombre de passages est indiqué dans le devis.' },
      ...FAQ_COMMUNE('à Choisy-le-Roi'),
    ],
  },
  {
    slug: 'le-kremlin-bicetre',
    nom: 'Le Kremlin-Bicêtre',
    a: 'au Kremlin-Bicêtre',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/le-kremlin-bicetre',
    title: 'Dératisation au Kremlin-Bicêtre (94), 7j/7',
    description: 'Rats et souris au Kremlin-Bicêtre : immeubles, restaurants, commerces de l\'avenue de Fontainebleau. Postes sécurisés, pièges connectés.',
    contexte: [
      'Collé à la porte d\'Italie, Le Kremlin-Bicêtre est l\'une des communes les plus denses du département, avec beaucoup d\'immeubles, de commerces et de restaurants, notamment le long de l\'avenue de Fontainebleau. Les rongeurs y vivent surtout dans les réseaux, les caves et les locaux à déchets.',
      'Dans une rue commerçante, un seul établissement mal protégé suffit à entretenir une population pour tout l\'îlot. Nous travaillons avec les commerçants et les syndics pour traiter les points sensibles en même temps.',
    ],
    lieux: ['Cuisines et réserves de restaurants', 'Caves et sous-sols d\'immeubles', 'Locaux à déchets et cours', 'Parkings souterrains'],
    proches: ['Villejuif', 'Ivry-sur-Seine', 'Gentilly', 'Arcueil'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rat-dans-les-murs-cloisons', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Que risque un restaurant en cas de rongeurs ?', a: 'Lors d\'un contrôle sanitaire, des traces de rongeurs peuvent entraîner une mise en demeure, voire une fermeture administrative. Un plan de lutte avec passages réguliers et rapports écrits permet de montrer que le risque est maîtrisé.' },
      ...FAQ_COMMUNE('au Kremlin-Bicêtre'),
    ],
  },
  {
    slug: 'charenton-le-pont',
    nom: 'Charenton-le-Pont',
    a: 'à Charenton-le-Pont',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/charenton-le-pont',
    title: 'Dératisation à Charenton-le-Pont (94), 7j/7',
    description: 'Rats à Charenton-le-Pont : copropriétés, caves, commerces, bords de Seine. Postes sécurisés, pièges connectés. Certibiocide.',
    contexte: [
      'Entre le Bois de Vincennes, la Seine et la Marne, Charenton-le-Pont est une ville d\'immeubles et de copropriétés, avec le quartier de Bercy à l\'ouest. Les caves, les parkings et les locaux poubelles sont les endroits où l\'on trouve le plus souvent des rongeurs.',
      'Nous sommes voisins : notre siège est à Saint-Maurice, juste à côté. Nous intervenons rapidement dans les copropriétés et remettons au syndic un rapport détaillé après chaque passage.',
    ],
    lieux: ['Caves et parkings de copropriétés', 'Locaux poubelles', 'Quais et bords de Seine', 'Commerces et réserves'],
    proches: ['Saint-Maurice', 'Maisons-Alfort', 'Ivry-sur-Seine', 'Saint-Mandé', 'Alfortville'],
    guides: ['rat-dans-les-toilettes', 'rongeur-moteur-voiture-cables', 'rat-dans-les-murs-cloisons'],
    faq: [
      { q: 'Faut-il traiter tout le parking si un seul box a des rats ?', a: 'Oui, en général. Les rats circulent dans tout le parking et passent d\'un box à l\'autre. Le traitement se fait dans les parties communes, à la demande du syndic, et le propriétaire du box concerné doit retirer ce qui peut servir de nourriture ou de nid.' },
      ...FAQ_COMMUNE('à Charenton-le-Pont'),
    ],
  },
  {
    slug: 'saint-maurice',
    nom: 'Saint-Maurice',
    a: 'à Saint-Maurice',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/saint-maurice',
    title: 'Dératisation à Saint-Maurice (94), intervention 7j/7',
    description: 'Rats à Saint-Maurice, où se trouve notre siège : maisons, copropriétés, bords de Marne. Postes sécurisés, pièges connectés.',
    contexte: [
      'Saint-Maurice est notre commune : le siège d\'Allo Nuisible IDF est rue du Val d\'Osne. Coincée entre le Bois de Vincennes et la Marne, la ville est exposée des deux côtés : rongeurs du bois en lisière, surmulots des berges et des réseaux côté rivière.',
      'Les maisons de Gravelle et les copropriétés en pente vers la Marne ont souvent des sous-sols et des caves où les rats s\'installent en hiver. Nous les connaissons bien et pouvons venir très vite.',
    ],
    lieux: ['Sous-sols et caves en pente vers la Marne', 'Jardins en lisière du Bois de Vincennes', 'Parkings de copropriétés', 'Regards et évacuations'],
    proches: ['Charenton-le-Pont', 'Maisons-Alfort', 'Joinville-le-Pont', 'Saint-Maur-des-Fossés'],
    guides: ['rat-vide-sanitaire', 'souris-par-ou-entrent-elles', 'rat-dans-les-toilettes'],
    faq: [
      { q: 'Où se trouve Allo Nuisible IDF ?', a: 'Notre siège est au 6 bis rue du Val d\'Osne, à Saint-Maurice. Nos techniciens se déplacent à domicile : il n\'y a pas d\'accueil du public, appelez le 07 68 07 72 19 pour fixer une intervention.' },
      ...FAQ_COMMUNE('à Saint-Maurice'),
    ],
  },
  {
    slug: 'thiais',
    nom: 'Thiais',
    a: 'à Thiais',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/thiais',
    title: 'Dératisation à Thiais (94), intervention le jour même',
    description: 'Rats et souris à Thiais : pavillons, commerces, entrepôts et zones d\'activités. Postes sécurisés, pièges connectés. Certibiocide.',
    contexte: [
      'Thiais associe des quartiers pavillonnaires et de grandes zones commerciales et logistiques, avec le centre commercial Belle Épine et la proximité du marché de Rungis. Les zones de stockage et de déchets alimentaires attirent les rongeurs, qui se dispersent ensuite vers les habitations.',
      'Pour les commerces et les entrepôts, nous installons un réseau de postes numérotés avec un plan et un suivi daté. Pour les pavillons, nous traitons et bouchons les accès au garage et au sous-sol.',
    ],
    lieux: ['Entrepôts et quais de chargement', 'Locaux déchets des commerces', 'Garages et sous-sols des pavillons', 'Haies et abris de jardin'],
    proches: ['Choisy-le-Roi', 'Orly', 'Rungis', 'Chevilly-Larue', 'Vitry-sur-Seine'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rongeur-moteur-voiture-cables', 'souris-par-ou-entrent-elles'],
    faq: [
      { q: 'Comment se passe une dératisation dans un entrepôt ?', a: 'Nous posons des postes d\'appâtage sécurisés et numérotés le long des murs et autour du bâtiment, reportés sur un plan. Chaque passage est consigné : consommation des appâts, captures, actions correctives. Ces documents servent lors des audits et des contrôles.' },
      ...FAQ_COMMUNE('à Thiais'),
    ],
  },
  {
    slug: 'cachan',
    nom: 'Cachan',
    a: 'à Cachan',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/cachan',
    title: 'Dératisation à Cachan (94), intervention le jour même',
    description: 'Rats et souris à Cachan : pavillons, résidences, vallée de la Bièvre. Postes sécurisés, pièges mécaniques et connectés. Certibiocide.',
    contexte: [
      'Cachan est construite sur les pentes de la vallée de la Bièvre, une rivière aujourd\'hui en grande partie couverte, et traversée par l\'aqueduc de la Vanne. Les pavillons et leurs jardins dominent, avec des résidences étudiantes et des immeubles autour du centre.',
      'Sur les terrains en pente, les sous-sols et les caves sont souvent humides et proches des réseaux : c\'est là que les rats s\'installent en premier. Les souris, elles, entrent par les passages de tuyaux et les bas de portes.',
    ],
    lieux: ['Sous-sols et caves humides', 'Jardins en pente et abris', 'Résidences et locaux poubelles', 'Passages de tuyaux et gaines'],
    proches: ['Arcueil', 'L\'Haÿ-les-Roses', 'Villejuif', 'Bagneux', 'Bourg-la-Reine'],
    guides: ['souris-par-ou-entrent-elles', 'rat-vide-sanitaire', 'rat-dans-les-murs-cloisons'],
    faq: [
      { q: 'Les souris reviennent chaque hiver : que faire ?', a: 'Si elles reviennent, c\'est qu\'un accès est resté ouvert. Après le traitement, nous repérons et bouchons les passages (laine d\'acier, mastic, grilles fines). C\'est cette étape qui évite le retour l\'hiver suivant.' },
      ...FAQ_COMMUNE('à Cachan'),
    ],
  },
  // ── Lot 4 : les 17 communes moyennes restantes du Val-de-Marne ──
  {
    slug: 'villeneuve-saint-georges',
    nom: 'Villeneuve-Saint-Georges',
    a: 'à Villeneuve-Saint-Georges',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/villeneuve-saint-georges',
    title: 'Dératisation à Villeneuve-Saint-Georges (94), 7j/7',
    description: 'Rats et souris à Villeneuve-Saint-Georges : maisons, immeubles, bords de Seine et de l\'Yerres. Postes sécurisés, pièges connectés.',
    contexte: [
      'Villeneuve-Saint-Georges est située au confluent de la Seine et de l\'Yerres, avec un centre ancien, des quartiers pavillonnaires sur les coteaux et de grandes emprises ferroviaires. Les berges et les réseaux offrent aux surmulots de l\'eau et des abris toute l\'année.',
      'Lors des crues de l\'Yerres ou de la Seine, les rats quittent les zones inondées et remontent vers les caves et les sous-sols. Après un épisode de montée des eaux, il faut vérifier les regards, les soupiraux et les évacuations.',
    ],
    lieux: ['Caves et sous-sols des quartiers bas', 'Berges de l\'Yerres et de la Seine', 'Caves et murs du centre ancien', 'Jardins des coteaux et abris'],
    proches: ['Valenton', 'Villeneuve-le-Roi', 'Limeil-Brévannes', 'Crosne', 'Choisy-le-Roi'],
    guides: ['rat-vide-sanitaire', 'rat-dans-les-toilettes', 'souris-par-ou-entrent-elles'],
    faq: [
      { q: 'Que faire après une inondation de cave si l\'on voit des rats ?', a: 'Ne touchez pas les déjections ni l\'eau stagnante à mains nues : les rats peuvent transmettre la leptospirose. Faites sécher et nettoyer la cave, puis faites traiter et boucher les passages (soupiraux, regards, canalisations) pour que les rats ne s\'y réinstallent pas.' },
      ...FAQ_COMMUNE('à Villeneuve-Saint-Georges'),
    ],
  },
  {
    slug: 'l-hay-les-roses',
    nom: 'L\'Haÿ-les-Roses',
    a: 'à L\'Haÿ-les-Roses',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/l-hay-les-roses',
    title: 'Dératisation à L\'Haÿ-les-Roses (94), 7j/7',
    description: 'Rats et souris à L\'Haÿ-les-Roses : pavillons, jardins, résidences. Postes sécurisés, pièges mécaniques et connectés, colmatage.',
    contexte: [
      'Connue pour sa roseraie, L\'Haÿ-les-Roses est une ville largement pavillonnaire, avec beaucoup de jardins, et des résidences autour de Lallier et du centre. Les souris y entrent surtout à l\'automne, les rats circulent dans les jardins et les réseaux.',
      'Dans un pavillon, le garage, le sous-sol et les passages de tuyaux sont les accès les plus fréquents. Nous traitons et bouchons ces passages en une seule intervention.',
    ],
    lieux: ['Garages et sous-sols des pavillons', 'Jardins, composts et abris', 'Caves et locaux poubelles des résidences', 'Passages de tuyaux et gaines'],
    proches: ['Chevilly-Larue', 'Fresnes', 'Villejuif', 'Cachan', 'Thiais'],
    guides: ['souris-par-ou-entrent-elles', 'rongeur-moteur-voiture-cables', 'rats-dans-les-combles'],
    faq: [
      { q: 'Un compost attire-t-il les rats ?', a: 'Oui, s\'il reçoit des restes de viande, de poisson, de produits laitiers ou de pain, ou s\'il est ouvert au sol. Un composteur fermé, posé sur un grillage fin, et uniquement des déchets végétaux limitent fortement le risque.' },
      ...FAQ_COMMUNE('à L\'Haÿ-les-Roses'),
    ],
  },
  {
    slug: 'villiers-sur-marne',
    nom: 'Villiers-sur-Marne',
    a: 'à Villiers-sur-Marne',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/villiers-sur-marne',
    title: 'Dératisation à Villiers-sur-Marne (94), 7j/7',
    description: 'Rats et souris à Villiers-sur-Marne : pavillons, résidences, abords des chantiers. Postes sécurisés, pièges connectés, colmatage.',
    contexte: [
      'Villiers-sur-Marne associe de nombreux pavillons, des quartiers de résidences et des espaces boisés en limite de commune. Les grands chantiers de transport autour de la future gare Bry-Villiers-Champigny ont remué les sols et déplacé une partie des rongeurs.',
      'Quand des rats apparaissent soudainement dans un quartier calme, la cause est souvent extérieure : chantier, démolition, réseau ouvert. Nous traitons votre maison et vous aidons à fermer les accès pour qu\'elle ne serve pas de refuge.',
    ],
    lieux: ['Pavillons proches des chantiers', 'Garages et sous-sols', 'Jardins en lisière des bois', 'Caves de résidences'],
    proches: ['Champigny-sur-Marne', 'Bry-sur-Marne', 'Le Plessis-Trévise', 'Chennevières-sur-Marne'],
    guides: ['rat-dans-les-murs-cloisons', 'souris-par-ou-entrent-elles', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Des rats sont apparus depuis le début d\'un chantier voisin : est-ce lié ?', a: 'C\'est fréquent. Les terrassements détruisent les terriers et les galeries, et les rats cherchent un nouvel abri à proximité. Bouchez les accès de votre maison et signalez le problème au maître d\'ouvrage du chantier, qui doit aussi gérer les nuisibles.' },
      ...FAQ_COMMUNE('à Villiers-sur-Marne'),
    ],
  },
  {
    slug: 'fresnes',
    nom: 'Fresnes',
    a: 'à Fresnes',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/fresnes',
    title: 'Dératisation à Fresnes (94), intervention le jour même',
    description: 'Rats et souris à Fresnes : pavillons, résidences, commerces. Postes sécurisés, pièges mécaniques et connectés, colmatage. Certibiocide.',
    contexte: [
      'Fresnes est une ville résidentielle du sud du département, entre quartiers pavillonnaires, grandes résidences et axes autoroutiers. Les talus et les espaces verts en bord de voies abritent des rongeurs qui gagnent ensuite les jardins et les sous-sols.',
      'En résidence, les rats s\'installent dans les locaux poubelles et les caves, puis circulent par les gaines techniques. Le traitement couvre les parties communes, en lien avec le bailleur ou le syndic.',
    ],
    lieux: ['Locaux poubelles et caves de résidences', 'Jardins en bordure des voies', 'Garages et sous-sols', 'Gaines techniques'],
    proches: ['L\'Haÿ-les-Roses', 'Chevilly-Larue', 'Rungis', 'Antony', 'Wissous'],
    guides: ['rat-dans-les-toilettes', 'souris-par-ou-entrent-elles', 'rat-dans-les-murs-cloisons'],
    faq: [
      { q: 'Locataire en résidence : qui contacter en cas de rats ?', a: 'Prévenez d\'abord votre bailleur ou le gardien par écrit : les parties communes sont à leur charge, et le logement doit être exempt de nuisibles. Si les rats sont dans votre logement, le bailleur doit organiser le traitement, sauf si l\'infestation vient d\'un défaut d\'entretien de votre part.' },
      ...FAQ_COMMUNE('à Fresnes'),
    ],
  },
  {
    slug: 'limeil-brevannes',
    nom: 'Limeil-Brévannes',
    a: 'à Limeil-Brévannes',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/limeil-brevannes',
    title: 'Dératisation à Limeil-Brévannes (94), 7j/7',
    description: 'Rats et souris à Limeil-Brévannes : maisons, nouveaux quartiers, jardins. Postes sécurisés, pièges mécaniques et connectés. Certibiocide.',
    contexte: [
      'Limeil-Brévannes s\'est beaucoup construite ces dernières années, avec de nouveaux quartiers à côté des pavillons plus anciens et d\'espaces encore agricoles ou naturels. Les rongeurs des champs et des friches se rapprochent des habitations à l\'automne.',
      'Dans les constructions récentes, les souris passent par les gaines électriques, les passages de tuyaux et les vides techniques mal rebouchés. Dans les maisons plus anciennes, ce sont plutôt les sous-sols et les garages.',
    ],
    lieux: ['Gaines et vides techniques des constructions récentes', 'Garages et sous-sols', 'Jardins en limite des champs', 'Abris et tas de bois'],
    proches: ['Valenton', 'Boissy-Saint-Léger', 'Villeneuve-Saint-Georges', 'Sucy-en-Brie', 'Créteil'],
    guides: ['souris-par-ou-entrent-elles', 'rat-dans-les-murs-cloisons', 'lerot-grenier-combles'],
    faq: [
      { q: 'Une maison neuve peut-elle avoir des souris ?', a: 'Oui. Les gaines, les passages de câbles et de tuyaux et les jonctions de cloisons sont parfois mal rebouchés à la construction. Une souris passe par un trou de la taille d\'un crayon. Si la maison est sous garantie, signalez les défauts d\'étanchéité au constructeur.' },
      ...FAQ_COMMUNE('à Limeil-Brévannes'),
    ],
  },
  {
    slug: 'orly',
    nom: 'Orly',
    a: 'à Orly',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/orly',
    title: 'Dératisation à Orly (94), intervention le jour même',
    description: 'Rats et souris à Orly : résidences, pavillons, commerces, bords de Seine. Postes sécurisés, pièges connectés, colmatage. Certibiocide.',
    contexte: [
      'Orly s\'étend des bords de Seine jusqu\'au plateau, à côté de l\'aéroport. La ville réunit grandes résidences, quartiers pavillonnaires et activités liées à l\'aéroport et au marché de Rungis voisin. Les zones de stockage et de déchets attirent les rongeurs.',
      'Dans les grandes résidences, le traitement est efficace s\'il est mené à l\'échelle du bâtiment : caves, vide-ordures, locaux poubelles et logements signalés en même temps.',
    ],
    lieux: ['Caves et vide-ordures des résidences', 'Bords de Seine', 'Entrepôts et locaux d\'activité', 'Jardins des pavillons'],
    proches: ['Choisy-le-Roi', 'Thiais', 'Villeneuve-le-Roi', 'Rungis', 'Paray-Vieille-Poste'],
    guides: ['rat-dans-les-toilettes', 'restaurant-plan-lutte-nuisibles', 'rat-vide-sanitaire'],
    faq: [
      { q: 'Pourquoi traiter tout l\'immeuble et pas seulement mon appartement ?', a: 'Les rats et les souris circulent entre les logements par les caves, les gaines et les colonnes. Traiter un seul appartement les déplace chez le voisin, et ils reviennent. Un traitement coordonné avec le bailleur règle le problème durablement.' },
      ...FAQ_COMMUNE('à Orly'),
    ],
  },
  {
    slug: 'arcueil',
    nom: 'Arcueil',
    a: 'à Arcueil',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/arcueil',
    title: 'Dératisation à Arcueil (94), intervention le jour même',
    description: 'Rats et souris à Arcueil : immeubles, pavillons, vallée de la Bièvre. Postes sécurisés, pièges mécaniques et connectés. Certibiocide.',
    contexte: [
      'Arcueil est installée dans la vallée de la Bièvre, une rivière aujourd\'hui couverte, et traversée par l\'aqueduc. Ville dense aux portes de Paris, elle mêle immeubles, petites maisons sur les pentes et activités. Les réseaux souterrains et les caves humides sont les lieux préférés des surmulots.',
      'Sur les terrains en pente, l\'eau s\'accumule en bas des parcelles et dans les sous-sols : c\'est là que les rats s\'installent. Le traitement s\'accompagne du colmatage des soupiraux et des regards.',
    ],
    lieux: ['Caves et sous-sols humides', 'Regards et réseaux', 'Cours et locaux poubelles', 'Jardins en pente'],
    proches: ['Cachan', 'Gentilly', 'Le Kremlin-Bicêtre', 'Villejuif', 'Bagneux'],
    guides: ['rat-vide-sanitaire', 'rat-dans-les-toilettes', 'rat-dans-les-murs-cloisons'],
    faq: [
      { q: 'Comment savoir si les rats viennent des égouts ?', a: 'Des traces humides et grasses près des regards, des déjections au pied des canalisations, ou un rat qui apparaît dans les toilettes ou une évacuation sont des signes typiques. Un clapet anti-retour et le colmatage autour des canalisations bloquent cette voie.' },
      ...FAQ_COMMUNE('à Arcueil'),
    ],
  },
  {
    slug: 'saint-mande',
    nom: 'Saint-Mandé',
    a: 'à Saint-Mandé',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/saint-mande',
    title: 'Dératisation à Saint-Mandé (94), intervention le jour même',
    description: 'Rats à Saint-Mandé : immeubles anciens, caves, commerces, abords du Bois de Vincennes. Postes sécurisés, pièges connectés.',
    contexte: [
      'Petite ville très dense collée à Paris, Saint-Mandé est bordée par le Bois de Vincennes et le lac de Saint-Mandé. Ses immeubles anciens, avec caves et cours, côtoient de nombreux commerces de bouche. Le bois et les réseaux fournissent un flux régulier de rongeurs.',
      'Dans ces immeubles, le problème se règle à l\'échelle de la copropriété : caves, cours et locaux poubelles. Nous intervenons à la demande du syndic et remettons un rapport après chaque passage.',
    ],
    lieux: ['Caves d\'immeubles anciens', 'Cours et locaux poubelles', 'Commerces de bouche et réserves', 'Rez-de-chaussée côté Bois'],
    proches: ['Vincennes', 'Saint-Maurice', 'Charenton-le-Pont', 'Fontenay-sous-Bois'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rat-dans-les-murs-cloisons', 'rat-dans-les-toilettes'],
    faq: [
      { q: 'Le Bois de Vincennes amène-t-il des rats dans les immeubles voisins ?', a: 'Le bois abrite des rongeurs, mais ce sont surtout les déchets et les caves mal fermées qui les attirent dans les immeubles. Des poubelles fermées, des soupiraux grillagés et des caves rangées réduisent fortement les entrées.' },
      ...FAQ_COMMUNE('à Saint-Mandé'),
    ],
  },
  {
    slug: 'villeneuve-le-roi',
    nom: 'Villeneuve-le-Roi',
    a: 'à Villeneuve-le-Roi',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/villeneuve-le-roi',
    title: 'Dératisation à Villeneuve-le-Roi (94), 7j/7',
    description: 'Rats et souris à Villeneuve-le-Roi : pavillons, jardins, bords de Seine. Postes sécurisés, pièges mécaniques et connectés. Certibiocide.',
    contexte: [
      'Villeneuve-le-Roi est une commune très pavillonnaire, entre la Seine et le plateau proche de l\'aéroport d\'Orly. Les jardins, les sous-sols et la proximité du fleuve offrent aux rats et aux souris de nombreux abris.',
      'Les quartiers proches de la Seine sont exposés lors des crues : les rongeurs remontent alors vers les maisons. Sur le plateau, ce sont plutôt les souris qui entrent à l\'automne par les garages et les passages de tuyaux.',
    ],
    lieux: ['Sous-sols des maisons proches de la Seine', 'Garages et passages de tuyaux', 'Jardins, composts et abris', 'Regards et évacuations'],
    proches: ['Orly', 'Ablon-sur-Seine', 'Villeneuve-Saint-Georges', 'Choisy-le-Roi'],
    guides: ['souris-par-ou-entrent-elles', 'rat-vide-sanitaire', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Rats dans le garage : faut-il craindre pour la voiture ?', a: 'Oui, les rongeurs aiment la chaleur du moteur et peuvent ronger les câbles et les durites. Ne laissez pas de nourriture (croquettes, graines) dans le garage, bouchez le bas de la porte et faites traiter si vous voyez des traces.' },
      ...FAQ_COMMUNE('à Villeneuve-le-Roi'),
    ],
  },
  {
    slug: 'joinville-le-pont',
    nom: 'Joinville-le-Pont',
    a: 'à Joinville-le-Pont',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/joinville-le-pont',
    title: 'Dératisation à Joinville-le-Pont (94), 7j/7',
    description: 'Rats à Joinville-le-Pont : bords de Marne, maisons, copropriétés, restaurants. Postes sécurisés, pièges connectés. Certibiocide.',
    contexte: [
      'Joinville-le-Pont est traversée par la Marne, avec ses îles, ses quais et ses établissements en bord de rivière, et touche le Bois de Vincennes. Entre l\'eau, le bois et les restaurants, les surmulots y trouvent tout ce qu\'il leur faut.',
      'Les maisons et les copropriétés proches des quais doivent surveiller les sous-sols et les locaux poubelles. Pour les restaurants en bord de Marne, un suivi régulier avec pièges connectés évite les mauvaises surprises.',
    ],
    lieux: ['Quais et bords de Marne', 'Restaurants et terrasses en bord de rivière', 'Sous-sols et caves', 'Locaux poubelles'],
    proches: ['Saint-Maurice', 'Saint-Maur-des-Fossés', 'Champigny-sur-Marne', 'Nogent-sur-Marne'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rat-dans-les-toilettes', 'rat-vide-sanitaire'],
    faq: [
      { q: 'Les rats nagent-ils vraiment ?', a: 'Oui, le surmulot est un bon nageur. Il vit souvent le long des berges et circule dans les réseaux d\'eaux usées, ce qui explique sa présence près de la Marne et dans les sous-sols des maisons proches.' },
      ...FAQ_COMMUNE('à Joinville-le-Pont'),
    ],
  },
  {
    slug: 'le-plessis-trevise',
    nom: 'Le Plessis-Trévise',
    a: 'au Plessis-Trévise',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/le-plessis-trevise',
    title: 'Dératisation au Plessis-Trévise (94), 7j/7',
    description: 'Rats et souris au Plessis-Trévise : pavillons, grands jardins, lisières boisées. Postes sécurisés, pièges mécaniques et connectés.',
    contexte: [
      'Le Plessis-Trévise est une ville verte et résidentielle, faite surtout de pavillons avec de grands jardins arborés, à proximité de bois. Ce cadre plaît aussi aux rongeurs, en particulier à l\'automne quand ils cherchent un abri chaud.',
      'Dans les grandes maisons, les rats et les souris utilisent les combles, les sous-sols et les abris de jardin. Un traitement efficace couvre la maison et ses dépendances, avec le colmatage des accès.',
    ],
    lieux: ['Combles et isolation', 'Sous-sols et garages', 'Abris de jardin et tas de bois', 'Haies et lisières boisées'],
    proches: ['Villiers-sur-Marne', 'Chennevières-sur-Marne', 'La Queue-en-Brie', 'Pontault-Combault'],
    guides: ['lerot-grenier-combles', 'rats-dans-les-combles', 'souris-par-ou-entrent-elles'],
    faq: [
      { q: 'Bruits la nuit dans les combles : rat, souris ou lérot ?', a: 'Les souris font des bruits légers et rapides, les rats des bruits plus lourds. Près des bois, des courses bruyantes en automne peuvent venir d\'un lérot, un petit rongeur protégé par d\'autres règles. Le technicien identifie l\'animal avant de choisir la méthode.' },
      ...FAQ_COMMUNE('au Plessis-Trévise'),
    ],
  },
  {
    slug: 'chevilly-larue',
    nom: 'Chevilly-Larue',
    a: 'à Chevilly-Larue',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/chevilly-larue',
    title: 'Dératisation à Chevilly-Larue (94), 7j/7',
    description: 'Rats et souris à Chevilly-Larue : pavillons, résidences, entrepôts et activités. Postes sécurisés, pièges connectés. Certibiocide.',
    contexte: [
      'Chevilly-Larue jouxte le marché international de Rungis, dont une partie est sur son territoire, et accueille de nombreuses activités logistiques. Les flux de denrées et de déchets attirent les rongeurs, qui se dispersent ensuite vers les quartiers d\'habitation.',
      'Côté habitations, le centre ancien, les pavillons et les résidences proches de l\'A86 reçoivent surtout des souris à l\'automne et des rats le long des talus. Un rongeur repéré dans une cuisine vient rarement de loin : il a trouvé une entrée, souvent derrière l\'électroménager ou sous l\'évier.',
    ],
    lieux: ['Cuisines : derrière le four et le réfrigérateur', 'Talus et abords de l\'A86', 'Ateliers et petites entreprises', 'Caves de résidences'],
    proches: ['Rungis', 'L\'Haÿ-les-Roses', 'Thiais', 'Villejuif', 'Fresnes'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rongeur-moteur-voiture-cables', 'souris-par-ou-entrent-elles'],
    faq: [
      { q: 'Une entreprise alimentaire doit-elle avoir un plan de lutte contre les rongeurs ?', a: 'Oui. Les exploitants du secteur alimentaire doivent maîtriser les nuisibles dans le cadre de leur plan de maîtrise sanitaire. Un plan de lutte écrit, avec postes numérotés et comptes rendus de passage, permet de le démontrer lors d\'un contrôle.' },
      ...FAQ_COMMUNE('à Chevilly-Larue'),
    ],
  },
  {
    slug: 'chennevieres-sur-marne',
    nom: 'Chennevières-sur-Marne',
    a: 'à Chennevières-sur-Marne',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/chennevieres-sur-marne',
    title: 'Dératisation à Chennevières-sur-Marne (94), 7j/7',
    description: 'Rats et souris à Chennevières-sur-Marne : pavillons, jardins en coteau, résidences. Postes sécurisés, pièges mécaniques et connectés.',
    contexte: [
      'Chennevières-sur-Marne domine la Marne depuis son coteau, avec des pavillons et des jardins en pente, et des résidences sur le plateau. En bas du coteau, les sous-sols et les jardins proches de la rivière sont les plus exposés aux surmulots.',
      'Les murs de soutènement, les escaliers de jardin et les abris adossés à la pente offrent beaucoup de cachettes. Nous repérons les terriers et les passages avant de choisir le dispositif.',
    ],
    lieux: ['Murs de soutènement et talus', 'Sous-sols des maisons en pente', 'Abris et tas de bois', 'Caves de résidences'],
    proches: ['Champigny-sur-Marne', 'Ormesson-sur-Marne', 'Sucy-en-Brie', 'Saint-Maur-des-Fossés', 'Le Plessis-Trévise'],
    guides: ['rat-vide-sanitaire', 'souris-par-ou-entrent-elles', 'lerot-grenier-combles'],
    faq: [
      { q: 'Peut-on boucher soi-même un terrier de rat ?', a: 'Reboucher un terrier actif sans traitement ne sert à rien : les rats en creusent un autre à côté, parfois vers la maison. Il faut d\'abord traiter, vérifier qu\'il n\'y a plus d\'activité, puis combler le terrier et protéger les accès au bâtiment.' },
      ...FAQ_COMMUNE('à Chennevières-sur-Marne'),
    ],
  },
  {
    slug: 'gentilly',
    nom: 'Gentilly',
    a: 'à Gentilly',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/gentilly',
    title: 'Dératisation à Gentilly (94), intervention le jour même',
    description: 'Rats et souris à Gentilly : immeubles, commerces, caves, vallée de la Bièvre. Postes sécurisés, pièges connectés, colmatage. Certibiocide.',
    contexte: [
      'Gentilly est une petite ville dense collée au périphérique parisien, dans la vallée de la Bièvre. Immeubles, résidences, bureaux et commerces s\'y côtoient. Les réseaux souterrains, les parkings et les locaux poubelles sont les principaux lieux de vie des rats.',
      'Près des grands axes, les rongeurs circulent le long des talus et des réseaux techniques. Nous traitons les points sensibles du bâtiment et bouchons les passages vers les logements.',
    ],
    lieux: ['Parkings souterrains', 'Locaux poubelles et caves', 'Réseaux et regards', 'Commerces et réserves'],
    proches: ['Arcueil', 'Le Kremlin-Bicêtre', 'Villejuif', 'Cachan'],
    guides: ['rongeur-moteur-voiture-cables', 'rat-dans-les-toilettes', 'restaurant-plan-lutte-nuisibles'],
    faq: [
      { q: 'Des rats dans le parking souterrain : est-ce grave ?', a: 'Oui, ils peuvent abîmer les câbles des voitures et remonter vers les logements par les gaines et les escaliers. Le traitement se fait dans tout le parking, à la demande du syndic ou du bailleur, avec des postes sécurisés et un suivi.' },
      ...FAQ_COMMUNE('à Gentilly'),
    ],
  },
  {
    slug: 'bonneuil-sur-marne',
    nom: 'Bonneuil-sur-Marne',
    a: 'à Bonneuil-sur-Marne',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/bonneuil-sur-marne',
    title: 'Dératisation à Bonneuil-sur-Marne (94), 7j/7',
    description: 'Rats et souris à Bonneuil-sur-Marne : port, entrepôts, zones d\'activités, logements. Postes sécurisés, pièges connectés. Certibiocide.',
    contexte: [
      'Bonneuil-sur-Marne accueille un grand port fluvial et de vastes zones d\'activités, à côté de quartiers d\'habitation. Quais, entrepôts, stockages et bord de Marne forment un milieu très favorable aux surmulots.',
      'Pour les entreprises du port et des zones d\'activités, nous mettons en place un réseau de postes autour des bâtiments, avec un plan et un rapport à chaque passage. Pour les logements, nous traitons et colmatons les accès.',
    ],
    lieux: ['Quais et entrepôts du port', 'Zones de stockage et déchets', 'Bords de Marne', 'Caves et locaux poubelles des résidences'],
    proches: ['Créteil', 'Saint-Maur-des-Fossés', 'Sucy-en-Brie', 'Limeil-Brévannes'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rat-dans-les-murs-cloisons', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Comment protéger un entrepôt des rongeurs ?', a: 'En combinant trois choses : des postes d\'appâtage sécurisés autour et à l\'intérieur du bâtiment, des portes et quais qui ferment bien (brosses, joints), et des stocks surélevés et éloignés des murs. Un suivi régulier permet de réagir dès les premières traces.' },
      ...FAQ_COMMUNE('à Bonneuil-sur-Marne'),
    ],
  },
  {
    slug: 'boissy-saint-leger',
    nom: 'Boissy-Saint-Léger',
    a: 'à Boissy-Saint-Léger',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/boissy-saint-leger',
    title: 'Dératisation à Boissy-Saint-Léger (94), 7j/7',
    description: 'Rats et souris à Boissy-Saint-Léger : maisons, résidences, lisières de forêt. Postes sécurisés, pièges mécaniques et connectés.',
    contexte: [
      'Boissy-Saint-Léger est entourée d\'espaces boisés, dont la forêt Notre-Dame et le domaine de Grosbois. Pavillons et résidences en lisière voient arriver souris, rats et parfois lérots quand le froid s\'installe.',
      'Les maisons proches des bois doivent surveiller les combles, les sous-sols et les abris de jardin. Nous adaptons la méthode : pièges mécaniques ou connectés si vous avez des animaux, postes d\'appâtage verrouillés sinon.',
    ],
    lieux: ['Combles et greniers', 'Sous-sols et garages', 'Jardins en lisière de forêt', 'Caves et locaux poubelles des résidences'],
    proches: ['Sucy-en-Brie', 'Limeil-Brévannes', 'Villecresnes', 'Marolles-en-Brie', 'Valenton'],
    guides: ['lerot-grenier-combles', 'souris-par-ou-entrent-elles', 'rats-dans-les-combles'],
    faq: [
      { q: 'J\'ai un chien et un chat : la dératisation est-elle possible ?', a: 'Oui. Les postes d\'appâtage sont verrouillés et inaccessibles aux animaux, et vous pouvez aussi choisir des pièges mécaniques ou connectés, sans raticide. Signalez vos animaux au technicien pour qu\'il place les dispositifs en conséquence.' },
      ...FAQ_COMMUNE('à Boissy-Saint-Léger'),
    ],
  },
  {
    slug: 'valenton',
    nom: 'Valenton',
    a: 'à Valenton',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/valenton',
    title: 'Dératisation à Valenton (94), intervention le jour même',
    description: 'Rats et souris à Valenton : pavillons, résidences, zones d\'activités. Postes sécurisés, pièges mécaniques et connectés. Certibiocide.',
    contexte: [
      'Valenton associe des quartiers pavillonnaires, des résidences, de grandes zones d\'activités et une importante station de traitement des eaux usées. Les réseaux d\'assainissement et les espaces ouverts sont favorables aux surmulots.',
      'Les maisons proches des zones d\'activités ou des espaces en friche voient parfois arriver des rats d\'un coup. Nous traitons, puis fermons les accès au sous-sol, au garage et autour des canalisations.',
    ],
    lieux: ['Sous-sols et garages', 'Jardins proches des friches', 'Locaux poubelles des résidences', 'Regards et canalisations'],
    proches: ['Villeneuve-Saint-Georges', 'Limeil-Brévannes', 'Créteil', 'Bonneuil-sur-Marne', 'Choisy-le-Roi'],
    guides: ['rat-dans-les-toilettes', 'rat-vide-sanitaire', 'souris-par-ou-entrent-elles'],
    faq: [
      { q: 'Comment empêcher un rat de remonter par les canalisations ?', a: 'Le plus efficace est un clapet anti-retour sur l\'évacuation principale, posé par un plombier. Il laisse sortir les eaux usées mais bloque le passage des rats. Il se combine avec le traitement des réseaux et le colmatage autour des tuyaux.' },
      ...FAQ_COMMUNE('à Valenton'),
    ],
  },
  // ── Lot 5 : Paris (arrondissements les plus proches du siège) et Hauts-de-Seine (villes les plus peuplées), 01/11/2026 ──
  {
    slug: 'paris-12',
    nom: 'Paris 12e',
    a: 'à Paris 12e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 12e (75), intervention 7j/7',
    description: 'Rats à Paris 12e : Bercy, gare de Lyon, Daumesnil, caves et cours d\'immeubles. Postes verrouillés, colmatage, garantie 1 an. Devis gratuit.',
    contexte: [
      'Le 12e arrondissement touche le Bois de Vincennes et réunit des quartiers très différents : la gare de Lyon, Bercy et ses anciens entrepôts, le marché d\'Aligre, la Coulée verte. Entre espaces verts, réseaux, commerces de bouche et immeubles anciens, les surmulots trouvent tout ce qu\'il leur faut.',
      'C\'est l\'arrondissement voisin de notre siège à Saint-Maurice : nous y intervenons très vite, en appartement comme en copropriété ou en commerce.',
    ],
    lieux: ['Caves d\'immeubles haussmanniens', 'Cours et locaux poubelles', 'Commerces de bouche et marchés', 'Abords du Bois de Vincennes'],
    proches: ['Paris 11e', 'Paris 20e', 'Paris 13e', 'Charenton-le-Pont', 'Saint-Mandé'],
    guides: ['rat-dans-les-toilettes', 'restaurant-plan-lutte-nuisibles', 'rat-dans-les-murs-cloisons'],
    faq: [
      { q: 'Un marché alimentaire attire-t-il les rats dans les immeubles voisins ?', a: 'Oui, les déchets alimentaires d\'un marché sont une source de nourriture régulière. Les immeubles proches doivent surtout protéger leurs caves et locaux poubelles : portes qui ferment, soupiraux grillagés, poubelles fermées.' },
      ...FAQ_COMMUNE('à Paris 12e'),
    ],
  },
  {
    slug: 'paris-13',
    nom: 'Paris 13e',
    a: 'à Paris 13e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 13e (75), intervention 7j/7',
    description: 'Dératisation à Paris 13e : grands ensembles sur dalle, parkings, locaux à déchets, commerces. Postes verrouillés, suivi. Devis gratuit.',
    contexte: [
      'Le 13e mêle les grandes tours des Olympiades, le nouveau quartier Paris Rive Gauche au bord de la Seine, les petites maisons de la Butte-aux-Cailles et de nombreux restaurants. Dalles, parkings souterrains et locaux techniques forment un réseau où les rats circulent à l\'abri.',
      'Dans les grands ensembles sur dalle, un rongeur repéré à un étage vient souvent des parkings ou des locaux à déchets du niveau inférieur : c\'est là que nous commençons.',
    ],
    lieux: ['Parkings souterrains et dalles', 'Locaux à déchets des tours', 'Cuisines et réserves de restaurants', 'Quais de Seine'],
    proches: ['Paris 12e', 'Paris 5e', 'Paris 14e', 'Ivry-sur-Seine', 'Le Kremlin-Bicêtre'],
    guides: ['rongeur-moteur-voiture-cables', 'restaurant-plan-lutte-nuisibles', 'rat-dans-les-murs-cloisons'],
    faq: [
      { q: 'Des rats dans le parking d\'une tour : par où commencer ?', a: 'Par les niveaux bas : parkings, locaux à déchets, gaines techniques. Le traitement se fait avec le syndic ou le bailleur, avec des postes sécurisés répartis sur les niveaux et un suivi, puis la fermeture des passages vers les étages.' },
      ...FAQ_COMMUNE('à Paris 13e'),
    ],
  },
  {
    slug: 'paris-20',
    nom: 'Paris 20e',
    a: 'à Paris 20e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 20e (75), intervention 7j/7',
    description: 'Rats à Paris 20e : Belleville, Ménilmontant, Charonne, caves anciennes et cours. Traitement des parties communes avec le syndic. Devis gratuit.',
    contexte: [
      'Le 20e, de Belleville à Ménilmontant en passant par Charonne, compte beaucoup d\'immeubles anciens, de petites cours, le parc de Belleville et le cimetière du Père-Lachaise. Les espaces verts et les caves anciennes offrent de nombreux abris aux rongeurs.',
      'Dans les vieux immeubles, les caves communiquent souvent entre elles et avec les réseaux : traiter un seul logement ne suffit pas, il faut agir sur les parties communes avec le syndic.',
    ],
    lieux: ['Caves anciennes et communicantes', 'Petites cours et jardinets', 'Locaux poubelles', 'Abords des parcs'],
    proches: ['Paris 11e', 'Paris 19e', 'Paris 12e', 'Montreuil', 'Bagnolet'],
    guides: ['rat-dans-les-murs-cloisons', 'rat-dans-les-toilettes', 'souris-par-ou-entrent-elles'],
    faq: [
      { q: 'Des rats dans un square ou sur la voie publique : qui contacter ?', a: 'Sur l\'espace public, c\'est la Ville de Paris qui intervient : signalez-le, par exemple avec l\'application DansMaRue. Dans votre immeuble ou votre commerce, c\'est au syndic ou à l\'exploitant de faire traiter.' },
      ...FAQ_COMMUNE('à Paris 20e'),
    ],
  },
  {
    slug: 'paris-11',
    nom: 'Paris 11e',
    a: 'à Paris 11e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 11e (75), intervention 7j/7',
    description: 'Rats et souris à Paris 11e : bars, restaurants, cours et locaux poubelles partagés. Traitement avec commerçants et syndics. Devis gratuit.',
    contexte: [
      'Le 11e est l\'un des arrondissements les plus denses de Paris, avec des bars et des restaurants très nombreux, des passages et des cours d\'artisans autour du faubourg Saint-Antoine. Les locaux à déchets des commerces et des immeubles y sont les premiers lieux de vie des rats.',
      'Dans ces rues, un rat repéré dans une cour vient souvent d\'un local poubelles commun ou d\'une arrière-cuisine voisine : le traitement est efficace quand commerçants et syndics agissent ensemble.',
    ],
    lieux: ['Locaux poubelles d\'immeubles', 'Arrière-cuisines de bars et restaurants', 'Passages et cours d\'artisans', 'Caves et sous-sols'],
    proches: ['Paris 12e', 'Paris 20e', 'Paris 3e', 'Paris 4e', 'Paris 10e'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rat-dans-les-toilettes', 'rat-dans-les-murs-cloisons'],
    faq: [
      { q: 'Des rats dans le local poubelles de mon immeuble : que faire ?', a: 'Prévenez le syndic par écrit : le local est une partie commune. En attendant, gardez les bacs fermés et la porte du local close. Nous traitons le local et les caves, et nous indiquons les réparations utiles (porte, siphons, soupiraux).' },
      ...FAQ_COMMUNE('à Paris 11e'),
    ],
  },
  {
    slug: 'paris-5',
    nom: 'Paris 5e',
    a: 'à Paris 5e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 5e (75), intervention 7j/7',
    description: 'Rats à Paris 5e : Quartier latin, caves communicantes, restaurants, abords du Jardin des Plantes. Postes verrouillés, colmatage. Devis gratuit.',
    contexte: [
      'Au cœur du Quartier latin, le 5e réunit immeubles anciens, rues commerçantes comme la rue Mouffetard, le Jardin des Plantes et les quais de Seine. Les caves voûtées et les vieux réseaux de ces immeubles offrent beaucoup de passages aux rongeurs.',
      'Dans les immeubles anciens, les caves communiquent parfois entre elles. Un rat installé chez le voisin peut passer chez vous par un mur de cave dégradé ou une ancienne canalisation.',
    ],
    lieux: ['Caves voûtées et communicantes', 'Commerces de la rue Mouffetard et alentours', 'Cours intérieures', 'Quais de Seine'],
    proches: ['Paris 6e', 'Paris 13e', 'Paris 4e', 'Paris 14e'],
    guides: ['rat-dans-les-murs-cloisons', 'restaurant-plan-lutte-nuisibles', 'rat-dans-les-toilettes'],
    faq: [
      { q: 'Les rats peuvent-ils passer d\'un immeuble à l\'autre par les caves ?', a: 'Oui, dans les immeubles anciens, les caves sont parfois reliées ou séparées par des murs dégradés. C\'est pourquoi nous inspectons toute la cave et colmatons les passages, et pourquoi il est utile de prévenir les immeubles voisins.' },
      ...FAQ_COMMUNE('à Paris 5e'),
    ],
  },
  {
    slug: 'paris-4',
    nom: 'Paris 4e',
    a: 'à Paris 4e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 4e (75), intervention 7j/7',
    description: 'Dératisation à Paris 4e : Marais, île Saint-Louis, quais, bâti ancien. Colmatage sans abîmer les murs, postes verrouillés. Devis gratuit.',
    contexte: [
      'Le 4e, avec le Marais, l\'île Saint-Louis et une partie de l\'île de la Cité, compte parmi les immeubles les plus anciens de Paris, souvent avec caves voûtées, cours pavées et vieilles canalisations. La Seine et les réseaux tout proches alimentent la population de surmulots.',
      'Dans ce bâti ancien et parfois protégé, le colmatage se fait avec des matériaux adaptés (mortier, grilles métalliques discrètes) pour fermer les accès sans abîmer les murs.',
    ],
    lieux: ['Caves voûtées', 'Cours pavées et soupiraux', 'Restaurants et commerces du Marais', 'Quais et bords de Seine'],
    proches: ['Paris 3e', 'Paris 5e', 'Paris 11e', 'Paris 12e', 'Paris 1er'],
    guides: ['rat-dans-les-murs-cloisons', 'rat-dans-les-toilettes', 'restaurant-plan-lutte-nuisibles'],
    faq: [
      { q: 'Dans un immeuble ancien, peut-on boucher les accès sans abîmer le bâti ?', a: 'Oui. Nous utilisons du mortier, de la laine d\'acier et des grilles métalliques fines, posés de façon discrète. Pour un immeuble protégé, le syndic vérifie si des travaux en façade demandent une autorisation.' },
      ...FAQ_COMMUNE('à Paris 4e'),
    ],
  },
  {
    slug: 'paris-3',
    nom: 'Paris 3e',
    a: 'à Paris 3e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 3e (75), intervention 7j/7',
    description: 'Rats et souris à Paris 3e : Marais, boutiques, restaurants, caves anciennes. Pièges en réserve hors de la vue, postes verrouillés. Devis gratuit.',
    contexte: [
      'Le 3e, le Haut-Marais, est fait de rues étroites, de cours pavées, de boutiques, de galeries et d\'ateliers, autour du marché des Enfants-Rouges. Réserves de commerces et caves anciennes y sont les points sensibles.',
      'Pour une boutique ou un restaurant, l\'enjeu est de traiter sans abîmer le stock ni gêner la clientèle : pièges et postes sont placés en réserve, hors de la vue, avec un suivi régulier.',
    ],
    lieux: ['Réserves de boutiques et galeries', 'Cuisines de restaurants', 'Cours pavées et caves', 'Locaux à déchets'],
    proches: ['Paris 4e', 'Paris 11e', 'Paris 10e', 'Paris 2e'],
    guides: ['restaurant-plan-lutte-nuisibles', 'souris-par-ou-entrent-elles', 'rat-dans-les-murs-cloisons'],
    faq: [
      { q: 'Commerce : comment protéger ma réserve des rongeurs ?', a: 'Stockez la marchandise sur des étagères, à distance des murs, fermez les cartons, et faites boucher les passages autour des tuyaux et sous les portes. Un suivi avec pièges connectés permet de savoir tout de suite si un rongeur entre.' },
      ...FAQ_COMMUNE('à Paris 3e'),
    ],
  },
  {
    slug: 'paris-14',
    nom: 'Paris 14e',
    a: 'à Paris 14e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 14e (75), intervention 7j/7',
    description: 'Rats et souris à Paris 14e : maisons de ville, villas, soupiraux et sous-sols. Postes verrouillés, colmatage des accès. Devis gratuit.',
    contexte: [
      'Le 14e, de Montparnasse au parc Montsouris, associe immeubles, villas et petites maisons, la Cité universitaire et de nombreux commerces. Les jardins des villas et les abords des parcs voient passer rats et souris.',
      'Dans les maisons de ville et les villas, les rongeurs entrent par les soupiraux, les sous-sols et les passages de tuyaux. Le traitement va de pair avec le colmatage de ces accès.',
    ],
    lieux: ['Villas et maisons de ville', 'Soupiraux et sous-sols', 'Abords du parc Montsouris', 'Commerces et réserves'],
    proches: ['Paris 13e', 'Paris 6e', 'Paris 15e', 'Montrouge', 'Malakoff'],
    guides: ['souris-par-ou-entrent-elles', 'rat-dans-les-murs-cloisons', 'rat-vide-sanitaire'],
    faq: [
      { q: 'Faut-il prévenir les voisins quand on fait dératiser ?', a: 'C\'est conseillé. Les rongeurs circulent d\'un logement ou d\'une maison à l\'autre : si les voisins ne traitent pas, ils peuvent revenir. En copropriété, le syndic peut organiser un traitement coordonné.' },
      ...FAQ_COMMUNE('à Paris 14e'),
    ],
  },
  {
    slug: 'paris-6',
    nom: 'Paris 6e',
    a: 'à Paris 6e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 6e (75), intervention 7j/7',
    description: 'Souris et rats à Paris 6e : librairies, galeries, restaurants de Saint-Germain. Pièges discrets qui protègent le stock, colmatage. Devis gratuit.',
    contexte: [
      'Le 6e, de Saint-Germain-des-Prés au jardin du Luxembourg, réunit immeubles anciens, restaurants, librairies, galeries et boutiques. Ces commerces, avec leurs réserves et caves, sont les plus exposés aux souris et aux rats.',
      'Dans une librairie ou une boutique, nous privilégions des dispositifs discrets et sans risque pour la marchandise : pièges mécaniques ou connectés en réserve, et colmatage des passages.',
    ],
    lieux: ['Réserves de librairies et boutiques', 'Caves d\'immeubles anciens', 'Cuisines de restaurants', 'Cours intérieures'],
    proches: ['Paris 5e', 'Paris 7e', 'Paris 14e', 'Paris 15e'],
    guides: ['souris-par-ou-entrent-elles', 'restaurant-plan-lutte-nuisibles', 'rat-dans-les-murs-cloisons'],
    faq: [
      { q: 'Rongeurs dans une boutique : comment traiter sans abîmer le stock ?', a: 'Avec des pièges mécaniques ou connectés placés en réserve, le long des murs, sans produit au contact de la marchandise. Les passages sont ensuite bouchés. Un compte rendu est remis pour vos assurances ou contrôles.' },
      ...FAQ_COMMUNE('à Paris 6e'),
    ],
  },
  {
    slug: 'paris-10',
    nom: 'Paris 10e',
    a: 'à Paris 10e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 10e (75), intervention 7j/7',
    description: 'Rats à Paris 10e : canal Saint-Martin, gares du Nord et de l\'Est, caves et cours. Postes verrouillés, colmatage, garantie 1 an. Devis gratuit.',
    contexte: [
      'Le 10e est traversé par le canal Saint-Martin et accueille la gare du Nord et la gare de l\'Est, avec de très nombreux restaurants et commerces. L\'eau du canal, les réseaux et les déchets alimentaires sont favorables aux surmulots.',
      'Les immeubles proches du canal et des gares doivent surtout surveiller les caves, les cours et les locaux à déchets, d\'où les rats remontent vers les logements.',
    ],
    lieux: ['Bords du canal Saint-Martin', 'Caves et cours d\'immeubles', 'Restaurants et commerces', 'Locaux à déchets'],
    proches: ['Paris 11e', 'Paris 3e', 'Paris 19e', 'Paris 9e', 'Paris 18e'],
    guides: ['rat-dans-les-toilettes', 'restaurant-plan-lutte-nuisibles', 'rat-dans-les-murs-cloisons'],
    faq: [
      { q: 'Les rats du canal Saint-Martin remontent-ils dans les immeubles ?', a: 'Ils peuvent circuler entre les berges, les réseaux et les caves voisines. Les immeubles proches doivent garder les soupiraux grillagés, les portes de cave fermées et les poubelles closes, et faire traiter dès les premiers signes.' },
      ...FAQ_COMMUNE('à Paris 10e'),
    ],
  },
  {
    slug: 'boulogne-billancourt',
    nom: 'Boulogne-Billancourt',
    a: 'à Boulogne-Billancourt',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Boulogne-Billancourt (92), intervention 7j/7',
    description: 'Dératisation à Boulogne-Billancourt : parkings souterrains de résidences, locaux à déchets. Postes verrouillés, colmatage, garantie 1 an. Devis gratuit.',
    contexte: [
      'Boulogne-Billancourt, entre la Seine et le Bois de Boulogne, est la plus grande ville des Hauts-de-Seine. Les anciens terrains industriels ont laissé place à de nouveaux quartiers, avec beaucoup de parkings souterrains et de locaux techniques.',
      'Même dans une résidence récente, les rats peuvent s\'installer dans les parkings, les locaux à déchets et les gaines. Nous traitons ces parties communes avec le syndic et fermons les passages vers les logements.',
      'Pour un restaurant ou un commerce de bouche, nous mettons en place un plan de lutte avec un plan des postes, des passages réguliers et un compte rendu daté à chaque visite : ce sont les documents que demandent les services d\'hygiène lors d\'un contrôle.',
    ],
    lieux: ['Parkings souterrains de résidences', 'Locaux à déchets', 'Bords de Seine', 'Jardins proches du Bois de Boulogne'],
    proches: ['Issy-les-Moulineaux', 'Saint-Cloud', 'Sèvres', 'Paris 16e'],
    guides: ['rongeur-moteur-voiture-cables', 'rat-dans-les-murs-cloisons', 'souris-par-ou-entrent-elles'],
    faq: [
      { q: 'Une résidence neuve peut-elle avoir des rats ?', a: 'Oui. Les rats n\'ont pas besoin d\'un bâtiment ancien : un parking, un local à déchets mal fermé ou une gaine non rebouchée leur suffit. Le traitement se fait dans les parties communes, avec le syndic.' },
      ...FAQ_COMMUNE('à Boulogne-Billancourt'),
    ],
  },
  {
    slug: 'nanterre',
    nom: 'Nanterre',
    a: 'à Nanterre',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Nanterre (92), intervention 7j/7',
    description: 'Dératisation à Nanterre : sous-sols et garages des pavillons. Postes sécurisés, pièges, suivi jusqu\'au résultat. Devis gratuit.',
    contexte: [
      'Préfecture des Hauts-de-Seine, Nanterre réunit des quartiers pavillonnaires, de grands ensembles, l\'université, le parc André-Malraux et des bords de Seine. Les grands chantiers de la ville ont aussi déplacé une partie des rongeurs.',
      'Selon le quartier, le problème change : jardins et sous-sols dans les pavillons, caves et locaux poubelles dans les résidences, réserves dans les commerces. Le dispositif est adapté à chaque cas.',
    ],
    lieux: ['Sous-sols et garages des pavillons', 'Caves et locaux poubelles de résidences', 'Abords des parcs', 'Commerces et réserves'],
    proches: ['Rueil-Malmaison', 'Colombes', 'Puteaux', 'Suresnes'],
    guides: ['souris-par-ou-entrent-elles', 'rat-dans-les-toilettes', 'rat-vide-sanitaire'],
    faq: [
      { q: 'Combien de temps faut-il pour se débarrasser des rats ?', a: 'Cela dépend de l\'importance de la colonie et des accès à fermer. Les rats se méfient des objets nouveaux : le traitement met parfois quelques jours à démarrer. Un suivi est prévu jusqu\'à ce qu\'il n\'y ait plus d\'activité.' },
      ...FAQ_COMMUNE('à Nanterre'),
    ],
  },
  {
    slug: 'asnieres-sur-seine',
    nom: 'Asnières-sur-Seine',
    a: 'à Asnières-sur-Seine',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Asnières-sur-Seine (92), intervention 7j/7',
    description: 'Dératisation à Asnières-sur-Seine : bords de Seine, caves et sous-sols, jardins des pavillons. Techniciens Certibiocide, colmatage des accès. Devis gratuit.',
    contexte: [
      'Asnières-sur-Seine s\'étend le long de la Seine, avec des immeubles, des résidences et des quartiers pavillonnaires. Les berges et les réseaux d\'eaux usées hébergent des surmulots qui gagnent les caves et les jardins.',
      'Les maisons et immeubles proches du fleuve sont les plus exposés, surtout après de fortes pluies, quand les rats quittent les réseaux saturés.',
      'Dans un pavillon, la visite commence par l\'extérieur : regards d\'eaux pluviales, soupiraux, grilles de ventilation du vide sanitaire. Un seul passage ouvert suffit à expliquer des bruits sous le plancher, et c\'est lui que nous fermons en priorité après le traitement.',
    ],
    lieux: ['Bords de Seine', 'Caves et sous-sols', 'Jardins des pavillons', 'Regards et évacuations'],
    proches: ['Gennevilliers', 'Colombes', 'Clichy', 'Bois-Colombes', 'Courbevoie'],
    guides: ['rat-dans-les-toilettes', 'rat-vide-sanitaire', 'souris-par-ou-entrent-elles'],
    faq: [
      { q: 'Pourquoi voit-on plus de rats après un orage ?', a: 'Les fortes pluies saturent les réseaux d\'eaux usées, et les rats en sortent pour chercher un endroit sec : caves, sous-sols, jardins. Un clapet anti-retour et des regards bien fermés limitent leur remontée.' },
      ...FAQ_COMMUNE('à Asnières-sur-Seine'),
    ],
  },
  {
    slug: 'colombes',
    nom: 'Colombes',
    a: 'à Colombes',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Colombes (92), intervention 7j/7',
    description: 'Dératisation à Colombes : composts et potagers, poulaillers et abris de jardin, garages et sous-sols. Intervention 7j/7, postes verrouillés, garantie 1 an.',
    contexte: [
      'Colombes est une ville en grande partie pavillonnaire, avec beaucoup de jardins, de potagers et de jardins familiaux. Composts, poulaillers et abris de jardin y attirent régulièrement les rats.',
      'Au jardin, supprimer la nourriture accessible (graines au sol, compost ouvert) est aussi important que le traitement lui-même. Nous vous conseillons sur place.',
    ],
    lieux: ['Composts et potagers', 'Poulaillers et abris de jardin', 'Garages et sous-sols', 'Haies et terriers'],
    proches: ['Asnières-sur-Seine', 'Bois-Colombes', 'La Garenne-Colombes', 'Nanterre', 'Gennevilliers'],
    guides: ['souris-par-ou-entrent-elles', 'rongeur-moteur-voiture-cables', 'rat-vide-sanitaire'],
    faq: [
      { q: 'Un poulailler attire-t-il les rats ?', a: 'Oui : le grain répandu et les mangeoires accessibles sont une nourriture facile. Ramassez le grain chaque soir, utilisez une mangeoire fermée et grillagez le bas du poulailler. Nous traitons ensuite sans risque pour les poules.' },
      ...FAQ_COMMUNE('à Colombes'),
    ],
  },
  {
    slug: 'courbevoie',
    nom: 'Courbevoie',
    a: 'à Courbevoie',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Courbevoie (92), intervention 7j/7',
    description: 'Dératisation à Courbevoie : faux planchers et faux plafonds de bureaux. Postes verrouillés, colmatage, garantie 1 an. Devis gratuit.',
    contexte: [
      'Courbevoie accueille une grande partie du quartier d\'affaires de La Défense, avec ses tours, ses parkings et ses restaurants d\'entreprise, et des quartiers résidentiels au bord de la Seine.',
      'Dans les bureaux, souris et rats passent par les faux planchers, les faux plafonds et les gaines. Nous intervenons en dehors des heures d\'activité, avec des pièges connectés qui évitent de gêner les équipes.',
      'En immeuble de bureaux, les souris se déplacent dans les faux plafonds et les faux planchers, le long des câbles. Nous intervenons en dehors des heures de travail, avec des pièges et des postes placés hors de vue des salariés, et un suivi par contrat si besoin.',
    ],
    lieux: ['Faux planchers et faux plafonds de bureaux', 'Restaurants d\'entreprise', 'Parkings souterrains', 'Bords de Seine'],
    proches: ['Puteaux', 'La Garenne-Colombes', 'Neuilly-sur-Seine', 'Asnières-sur-Seine'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rat-dans-les-murs-cloisons', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Des souris dans nos bureaux : comment traiter sans gêner l\'activité ?', a: 'Nous intervenons le soir ou le week-end, avec des pièges connectés placés dans les faux planchers et les locaux techniques. Ils signalent chaque capture, sans passage quotidien. Un rapport est remis au gestionnaire.' },
      ...FAQ_COMMUNE('à Courbevoie'),
    ],
  },
  {
    slug: 'rueil-malmaison',
    nom: 'Rueil-Malmaison',
    a: 'à Rueil-Malmaison',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Rueil-Malmaison (92), intervention 7j/7',
    description: 'Dératisation à Rueil-Malmaison : garages et sous-sols, combles et isolation. Postes sécurisés, pièges, suivi jusqu\'au résultat. Devis gratuit.',
    contexte: [
      'Rueil-Malmaison associe de grands quartiers pavillonnaires, des bords de Seine et la forêt de la Malmaison sur les hauteurs. Rats et souris des espaces boisés se rapprochent des maisons quand le froid arrive.',
      'Dans les maisons en lisière, le sous-sol, le garage et les combles sont les premières cibles. Nous traitons et bouchons ces accès avant l\'hiver.',
    ],
    lieux: ['Garages et sous-sols', 'Combles et isolation', 'Jardins en lisière de forêt', 'Bords de Seine'],
    proches: ['Nanterre', 'Suresnes', 'Bougival', 'Garches', 'Chatou'],
    guides: ['souris-par-ou-entrent-elles', 'lerot-grenier-combles', 'rats-dans-les-combles'],
    faq: [
      { q: 'Pourquoi y a-t-il plus de souris à l\'automne près de la forêt ?', a: 'Quand les températures baissent, souris et mulots quittent les bois et les champs pour un abri chaud. Les maisons en lisière sont les premières concernées : c\'est le bon moment pour vérifier et boucher les accès.' },
      ...FAQ_COMMUNE('à Rueil-Malmaison'),
    ],
  },
  {
    slug: 'levallois-perret',
    nom: 'Levallois-Perret',
    a: 'à Levallois-Perret',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Levallois-Perret (92), intervention 7j/7',
    description: 'Dératisation à Levallois-Perret : gaines techniques et vides entre étages. Techniciens Certibiocide, colmatage des accès. Devis gratuit.',
    contexte: [
      'Levallois-Perret, l\'une des villes les plus denses de France, est faite d\'immeubles récents et anciens, de commerces et de parkings, avec l\'île de la Jatte sur la Seine. Les rongeurs y vivent surtout dans les réseaux, les parkings et les gaines.',
      'Dans les immeubles récents, ils circulent par les gaines techniques et les vides entre étages. Nous repérons ces passages et les fermons après le traitement.',
      'Dans les immeubles récents, les rongeurs empruntent les gaines techniques d\'un étage à l\'autre. Nous traitons au point d\'arrivée, dans le logement, puis remontons la gaine jusqu\'au local technique ou au parking pour placer les postes là où ils circulent vraiment.',
    ],
    lieux: ['Gaines techniques et vides entre étages', 'Parkings souterrains', 'Commerces et réserves', 'Bords de Seine'],
    proches: ['Clichy', 'Neuilly-sur-Seine', 'Paris 17e', 'Courbevoie'],
    guides: ['rat-dans-les-murs-cloisons', 'rongeur-moteur-voiture-cables', 'souris-par-ou-entrent-elles'],
    faq: [
      { q: 'Des souris d\'un appartement à l\'autre : par où passent-elles ?', a: 'Par les gaines techniques, les passages de tuyaux et les vides derrière les doublages. Nous bouchons ces passages dans votre logement et, si besoin, conseillons au syndic un traitement des parties communes.' },
      ...FAQ_COMMUNE('à Levallois-Perret'),
    ],
  },
  {
    slug: 'issy-les-moulineaux',
    nom: 'Issy-les-Moulineaux',
    a: 'à Issy-les-Moulineaux',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Issy-les-Moulineaux (92), intervention 7j/7',
    description: 'Dératisation à Issy-les-Moulineaux : locaux techniques de bureaux, restaurants et cafétérias. Intervention 7j/7, postes verrouillés, garantie 1 an.',
    contexte: [
      'Issy-les-Moulineaux mêle bords de Seine, grands sièges d\'entreprises, nouveaux quartiers comme celui du fort et coteaux résidentiels. Bureaux, restaurants et résidences ont chacun leurs points sensibles.',
      'Pour les entreprises, un contrat de suivi avec visites régulières et rapports permet de garder des locaux sans rongeurs et de le prouver en cas de contrôle ou d\'audit.',
    ],
    lieux: ['Locaux techniques de bureaux', 'Restaurants et cafétérias', 'Parkings de résidences', 'Jardins des coteaux'],
    proches: ['Boulogne-Billancourt', 'Vanves', 'Meudon', 'Clamart', 'Paris 15e'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rongeur-moteur-voiture-cables', 'souris-par-ou-entrent-elles'],
    faq: [
      { q: 'Proposez-vous des contrats annuels pour les entreprises ?', a: 'Oui : visites programmées, postes ou pièges numérotés sur plan, rapport après chaque passage et intervention en cas d\'alerte. Le rythme est adapté à l\'activité, du bureau au restaurant d\'entreprise.' },
      ...FAQ_COMMUNE('à Issy-les-Moulineaux'),
    ],
  },
  {
    slug: 'clichy',
    nom: 'Clichy',
    a: 'à Clichy',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Clichy (92), intervention 7j/7',
    description: 'Dératisation à Clichy : rez-de-chaussée commerciaux, caves d\'immeubles, locaux à déchets. Postes verrouillés, colmatage, garantie 1 an. Devis gratuit.',
    contexte: [
      'Clichy, très dense et commerçante, s\'étend le long de la Seine aux portes de Paris. Immeubles anciens, commerces de bouche et réseaux en font un terrain favorable aux surmulots.',
      'Les rez-de-chaussée commerciaux et les caves d\'immeubles sont les premiers touchés. Un traitement coordonné entre commerçants et syndic évite que les rats ne passent d\'un local à l\'autre.',
    ],
    lieux: ['Rez-de-chaussée commerciaux', 'Caves d\'immeubles', 'Locaux à déchets', 'Bords de Seine'],
    proches: ['Levallois-Perret', 'Asnières-sur-Seine', 'Saint-Ouen-sur-Seine', 'Paris 17e'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rat-dans-les-toilettes', 'rat-dans-les-murs-cloisons'],
    faq: [
      { q: 'Le rat vient du commerce d\'en bas : qui doit agir ?', a: 'Le commerçant doit traiter son local, et le syndic les parties communes (caves, cours, locaux poubelles). Le plus efficace est un traitement coordonné. Signalez le problème par écrit au syndic et au commerçant.' },
      ...FAQ_COMMUNE('à Clichy'),
    ],
  },
  {
    slug: 'antony',
    nom: 'Antony',
    a: 'à Antony',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Antony (92), intervention 7j/7',
    description: 'Dératisation à Antony : abris de jardin et tas de bois, garages et sous-sols. Postes sécurisés, pièges, suivi jusqu\'au résultat. Devis gratuit.',
    contexte: [
      'Antony, au sud du département, est une ville verte, très pavillonnaire, proche du parc de Sceaux. Jardins, abris, tas de bois et garages offrent de nombreux abris aux rongeurs.',
      'Dans les maisons, les rats s\'installent volontiers dans les abris de jardin et les garages avant d\'entrer dans le sous-sol. Nous traitons le jardin et la maison, et fermons les accès.',
    ],
    lieux: ['Abris de jardin et tas de bois', 'Garages et sous-sols', 'Composts et potagers', 'Résidences et locaux poubelles'],
    proches: ['Sceaux', 'Châtenay-Malabry', 'Bourg-la-Reine', 'Fresnes', 'Massy'],
    guides: ['souris-par-ou-entrent-elles', 'rongeur-moteur-voiture-cables', 'rat-vide-sanitaire'],
    faq: [
      { q: 'Un abri de jardin peut-il servir de nid aux rats ?', a: 'Oui, surtout s\'il est encombré, rarement ouvert et posé à même le sol. Rangez-le, stockez graines et croquettes dans des boîtes fermées et grillagez le dessous. Nous traitons ensuite les terriers proches.' },
      ...FAQ_COMMUNE('à Antony'),
    ],
  },
  {
    slug: 'neuilly-sur-seine',
    nom: 'Neuilly-sur-Seine',
    a: 'à Neuilly-sur-Seine',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Neuilly-sur-Seine (92), intervention 7j/7',
    description: 'Dératisation à Neuilly-sur-Seine : caves des immeubles haussmanniens. Techniciens Certibiocide, colmatage des accès. Devis gratuit.',
    contexte: [
      'Neuilly-sur-Seine, entre la Seine et le Bois de Boulogne, est faite d\'immeubles haussmanniens, de résidences et d\'hôtels particuliers avec jardin. Les rats y trouvent des caves anciennes, des cours intérieures et, côté bois et berges, des espaces verts où creuser leurs terriers.',
      'Dans les immeubles de standing, la discrétion compte : nous intervenons dans les caves et les parties communes en accord avec le syndic ou le gardien, avec des postes verrouillés et un suivi jusqu\'à disparition des traces.',
    ],
    lieux: ['Caves des immeubles haussmanniens', 'Jardins des hôtels particuliers', 'Berges de l\'île de la Jatte', 'Abords du Bois de Boulogne'],
    proches: ['Levallois-Perret', 'Courbevoie', 'Puteaux', 'Paris 16e'],
    guides: ['rat-dans-les-murs-cloisons', 'rats-dans-les-combles', 'deratisation-sans-mort-aux-rats'],
    faq: [
      { q: 'Des rats dans un immeuble haussmannien, d\'où viennent-ils ?', a: 'Le plus souvent des caves et des réseaux d\'égout, par des regards ou des maçonneries anciennes mal jointes. Ils remontent ensuite par les vides et les gaines. Le traitement porte sur les caves et les parties communes, avec le colmatage des passages.' },
      ...FAQ_COMMUNE('à Neuilly-sur-Seine'),
    ],
  },
  {
    slug: 'clamart',
    nom: 'Clamart',
    a: 'à Clamart',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Clamart (92), intervention 7j/7',
    description: 'Dératisation à Clamart : pavillons en lisière de forêt, composts et abris de jardin. Intervention 7j/7, postes verrouillés, garantie 1 an.',
    contexte: [
      'Clamart s\'étend de la plaine, plus urbaine, jusqu\'au Haut-Clamart en lisière de la forêt domaniale de Meudon. Les nombreux pavillons avec jardin, au contact du bois, voient arriver rats et souris dès que le froid s\'installe.',
      'Autour des maisons, nous posons les postes d\'appâtage sécurisés le long des passages repérés, loin des enfants et des animaux, et nous fermons les accès au sous-sol, au garage et aux combles.',
    ],
    lieux: ['Pavillons en lisière de forêt', 'Composts et abris de jardin', 'Sous-sols et garages', 'Résidences de la plaine de Clamart'],
    proches: ['Meudon', 'Issy-les-Moulineaux', 'Châtillon', 'Le Plessis-Robinson'],
    guides: ['trou-dans-le-jardin', 'rat-compost', 'lerot-grenier-combles'],
    faq: [
      { q: 'Habiter près de la forêt attire-t-il les rongeurs ?', a: 'Oui. Rats, souris et parfois lérots vivent en lisière de bois et se rapprochent des maisons à l\'automne. Garder le jardin dégagé, fermer le compost et boucher les ouvertures du sous-sol limite fortement les entrées.' },
      ...FAQ_COMMUNE('à Clamart'),
    ],
  },
  {
    slug: 'gennevilliers',
    nom: 'Gennevilliers',
    a: 'à Gennevilliers',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Gennevilliers (92), intervention 7j/7',
    description: 'Dératisation à Gennevilliers : entrepôts et quais du port. Postes verrouillés, colmatage, garantie 1 an. Devis gratuit.',
    contexte: [
      'Gennevilliers abrite le port de Gennevilliers, l\'un des principaux ports fluviaux d\'Île-de-France, avec ses entrepôts et ses zones d\'activité, mais aussi de grands ensembles, des pavillons et les bords de Seine. Marchandises, quais et réseaux d\'eaux pluviales offrent aux rats nourriture et passages.',
      'Pour les entrepôts et entreprises, nous mettons en place des postes sécurisés et des pièges connectés avec suivi des captures et attestation. Dans les résidences, nous traitons caves, locaux poubelles et vide-ordures avec le bailleur.',
    ],
    lieux: ['Entrepôts et quais du port', 'Locaux poubelles des grands ensembles', 'Bords de Seine', 'Commerces alimentaires'],
    proches: ['Villeneuve-la-Garenne', 'Asnières-sur-Seine', 'Colombes', 'Clichy'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rat-mode-de-vie', 'reproduction-des-rats'],
    faq: [
      { q: 'Une entreprise doit-elle avoir un plan de lutte contre les rongeurs ?', a: 'Dès qu\'il y a des denrées ou un établissement recevant du public, c\'est fortement recommandé, et souvent exigé par les clients ou les contrôles sanitaires. Un plan de lutte comprend des postes numérotés, des passages réguliers et un registre de suivi.' },
      ...FAQ_COMMUNE('à Gennevilliers'),
    ],
  },
  {
    slug: 'suresnes',
    nom: 'Suresnes',
    a: 'à Suresnes',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Suresnes (92), intervention 7j/7',
    description: 'Dératisation à Suresnes : bords de Seine, coteaux et talus du Mont-Valérien. Postes sécurisés, pièges, suivi jusqu\'au résultat. Devis gratuit.',
    contexte: [
      'Suresnes descend des pentes du Mont-Valérien jusqu\'aux bords de Seine. On y trouve la cité-jardin, des pavillons sur les coteaux, des immeubles plus récents près du fleuve et des commerces dans le centre. Les rats circulent des berges vers les caves, et des jardins vers les maisons.',
      'Sur les coteaux, les murets et talus abritent souvent des terriers. Nous traitons les zones de passage et fermons les accès aux sous-sols, avec des postes d\'appâtage verrouillés.',
    ],
    lieux: ['Bords de Seine', 'Coteaux et talus du Mont-Valérien', 'Caves de la cité-jardin', 'Commerces du centre-ville'],
    proches: ['Puteaux', 'Rueil-Malmaison', 'Saint-Cloud', 'Nanterre'],
    guides: ['trou-dans-le-jardin', 'rat-vide-sanitaire', 'rat-dans-les-toilettes'],
    faq: [
      { q: 'Un trou au pied d\'un muret, est-ce un terrier de rat ?', a: 'Souvent, si l\'entrée fait 6 à 9 cm, avec de la terre tassée et des passages bien marqués autour. Les campagnols et les taupes laissent d\'autres traces. Le technicien confirme avant de traiter.' },
      ...FAQ_COMMUNE('à Suresnes'),
    ],
  },
  {
    slug: 'meudon',
    nom: 'Meudon',
    a: 'à Meudon',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Meudon (92), intervention 7j/7',
    description: 'Dératisation à Meudon : maisons des coteaux, lisière de la forêt de Meudon. Techniciens Certibiocide, colmatage des accès. Devis gratuit.',
    contexte: [
      'Meudon s\'étend des bords de Seine, au Bas-Meudon, jusqu\'à Meudon-la-Forêt, en passant par les coteaux, l\'Observatoire et une grande partie de la forêt de Meudon. Entre maisons avec jardin, résidences et bois, rats et souris trouvent abri toute l\'année.',
      'Dans les maisons des coteaux, les rongeurs entrent par les soupiraux, les vides sanitaires et les garages. Nous localisons les passages, posons des postes sécurisés et refermons les ouvertures.',
    ],
    lieux: ['Maisons des coteaux', 'Lisière de la forêt de Meudon', 'Résidences de Meudon-la-Forêt', 'Bords de Seine du Bas-Meudon'],
    proches: ['Clamart', 'Issy-les-Moulineaux', 'Sèvres', 'Vélizy-Villacoublay'],
    guides: ['rat-vide-sanitaire', 'lerot-grenier-combles', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Des bruits dans les combles la nuit : rat ou lérot ?', a: 'Près des bois, le lérot est fréquent : il niche dans les combles et fait beaucoup de bruit au printemps et en été. Le rat laisse des crottes plus grosses et des traces grasses. L\'identification change le traitement, le technicien la fait avant d\'intervenir.' },
      ...FAQ_COMMUNE('à Meudon'),
    ],
  },
  {
    slug: 'montrouge',
    nom: 'Montrouge',
    a: 'à Montrouge',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Montrouge (92), intervention 7j/7',
    description: 'Dératisation à Montrouge : caves et cours d\'immeubles, locaux poubelles. Intervention 7j/7, postes verrouillés, garantie 1 an.',
    contexte: [
      'Limitrophe du 14e arrondissement, Montrouge est l\'une des villes les plus denses de France : immeubles anciens, petites cours, nombreux commerces et restaurants. Les rats circulent par les caves, les égouts et les cours, et s\'installent près des locaux poubelles.',
      'En copropriété, nous traitons les caves et parties communes avec le syndic. Pour les restaurants et commerces, postes sécurisés et suivi régulier avec attestation d\'intervention.',
      'Dans les petits commerces, une souris dans la réserve se règle souvent avec des pièges mécaniques placés le long des murs, sans produit au contact des marchandises, et en bouchant le passage derrière les comptoirs et les meubles réfrigérés.',
    ],
    lieux: ['Caves et cours d\'immeubles', 'Locaux poubelles', 'Restaurants et commerces de bouche', 'Rez-de-chaussée sur rue'],
    proches: ['Malakoff', 'Châtillon', 'Bagneux', 'Paris 14e'],
    guides: ['rat-dans-les-toilettes', 'restaurant-plan-lutte-nuisibles', 'rat-dans-les-murs-cloisons'],
    faq: [
      { q: 'Un rat peut-il vraiment remonter dans les toilettes ?', a: 'Oui, depuis les égouts, par les canalisations, même dans un immeuble. C\'est rare mais possible, surtout au rez-de-chaussée et dans les étages bas. Un clapet anti-retour est la protection la plus durable.' },
      ...FAQ_COMMUNE('à Montrouge'),
    ],
  },
  {
    slug: 'bagneux',
    nom: 'Bagneux',
    a: 'à Bagneux',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Bagneux (92), intervention 7j/7',
    description: 'Dératisation à Bagneux : caves des grands ensembles, abords des chantiers. Postes verrouillés, colmatage, garantie 1 an. Devis gratuit.',
    contexte: [
      'Bagneux mêle grands ensembles, quartiers pavillonnaires et nouveaux quartiers construits autour du métro 4. Les grands chantiers déplacent souvent les rongeurs, qui cherchent alors refuge dans les caves et les jardins voisins.',
      'Nous intervenons pour les particuliers, les bailleurs et les syndics : postes d\'appâtage sécurisés dans les caves et locaux poubelles, pièges selon le lieu, et colmatage des passages vers les logements.',
      'Dans les grands ensembles, une dératisation efficace se coordonne avec le bailleur : traitement des caves, des locaux à déchets et des vides sanitaires de toute la résidence, et pas seulement du logement qui a signalé le problème.',
    ],
    lieux: ['Caves des grands ensembles', 'Abords des chantiers', 'Jardins pavillonnaires', 'Locaux poubelles des résidences'],
    proches: ['Montrouge', 'Châtillon', 'Fontenay-aux-Roses', 'Cachan'],
    guides: ['reproduction-des-rats', 'rat-vide-sanitaire', 'souris-par-ou-entrent-elles'],
    faq: [
      { q: 'Pourquoi voit-on plus de rats près des chantiers ?', a: 'Les travaux détruisent les terriers et coupent les réseaux où vivent les rats, qui se déplacent alors vers les bâtiments voisins. Après un grand chantier, il est utile de vérifier caves, vides sanitaires et regards.' },
      ...FAQ_COMMUNE('à Bagneux'),
    ],
  },
  {
    slug: 'puteaux',
    nom: 'Puteaux',
    a: 'à Puteaux',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Puteaux (92), intervention 7j/7',
    description: 'Dératisation à Puteaux : parkings et locaux techniques, restaurants et commerces. Postes sécurisés, pièges, suivi jusqu\'au résultat. Devis gratuit.',
    contexte: [
      'Puteaux réunit une partie du quartier d\'affaires de La Défense, des immeubles d\'habitation denses, l\'île de Puteaux et les bords de Seine. Restaurants d\'entreprise, commerces, parkings et locaux techniques offrent aux rongeurs nourriture et cachettes.',
      'Pour les bureaux, restaurants et parkings, nous posons des postes sécurisés et des pièges connectés avec suivi des captures, en dehors des heures d\'ouverture si besoin. En résidence, traitement des caves et locaux poubelles avec le syndic.',
      'En copropriété, le traitement est commandé par le syndic : nous établissons le devis pour les parties communes, prévenons les résidents par affichage, puis contrôlons les postes jusqu\'à ce qu\'il n\'y ait plus aucune consommation.',
    ],
    lieux: ['Parkings et locaux techniques', 'Restaurants et commerces', 'Berges et île de Puteaux', 'Caves des résidences'],
    proches: ['Courbevoie', 'Suresnes', 'Neuilly-sur-Seine', 'Nanterre'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rongeur-moteur-voiture-cables', 'rat-mode-de-vie'],
    faq: [
      { q: 'Des câbles de voiture rongés dans un parking : que faire ?', a: 'Prévenez le syndic ou le gestionnaire du parking : les rats et les souris s\'y installent volontiers. Le traitement porte sur tout le parking, avec des postes sécurisés et le repérage des accès depuis les réseaux.' },
      ...FAQ_COMMUNE('à Puteaux'),
    ],
  },
  {
    slug: 'chatillon',
    nom: 'Châtillon',
    a: 'à Châtillon',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Châtillon (92), intervention 7j/7',
    description: 'Dératisation à Châtillon : pavillons avec jardin, caves des résidences, commerces du centre. Techniciens Certibiocide, colmatage des accès. Devis gratuit.',
    contexte: [
      'Châtillon, sur les hauteurs au sud de Paris, alterne quartiers pavillonnaires, résidences et centre commerçant, avec le terminus du métro 13. Dans les maisons, les rongeurs arrivent par les jardins et les sous-sols ; dans les immeubles, par les caves.',
      'Nous adaptons le traitement au lieu : postes d\'appâtage sécurisés, la méthode la plus courante, pièges mécaniques ou connectés, et toujours le colmatage des ouvertures.',
    ],
    lieux: ['Pavillons avec jardin', 'Caves des résidences', 'Commerces du centre', 'Abords des espaces verts'],
    proches: ['Montrouge', 'Bagneux', 'Clamart', 'Malakoff'],
    guides: ['souris-par-ou-entrent-elles', 'rat-compost', 'rats-dans-les-combles'],
    faq: [
      { q: 'Combien de temps dure une dératisation ?', a: 'Le premier passage met en place le traitement, puis des visites de contrôle suivent jusqu\'à ce qu\'il n\'y ait plus de consommation ni de nouvelle trace. Selon l\'infestation, cela prend quelques semaines.' },
      ...FAQ_COMMUNE('à Châtillon'),
    ],
  },
  {
    slug: 'chatenay-malabry',
    nom: 'Châtenay-Malabry',
    a: 'à Châtenay-Malabry',
    code: '92',
    departement: 'Hauts-de-Seine',
    zoneHref: '/zones/hauts-de-seine',
    title: 'Dératisation à Châtenay-Malabry (92), intervention 7j/7',
    description: 'Dératisation à Châtenay-Malabry : jardins proches des bois, cité-jardin de la Butte-Rouge. Intervention 7j/7, postes verrouillés, garantie 1 an.',
    contexte: [
      'Châtenay-Malabry est très verte : la Vallée-aux-Loups, la proximité du parc de Sceaux et de la forêt de Verrières, la cité-jardin de la Butte-Rouge et de nombreux pavillons. Ces espaces attirent rats, souris et lérots, qui se rapprochent des habitations à l\'automne.',
      'Nous traitons les jardins, sous-sols et parties communes des résidences avec des postes sécurisés et verrouillés. En méthode alternative, sans raticide, le piège Ekomille peut être installé sur le passage le plus fréquenté.',
    ],
    lieux: ['Jardins proches des bois', 'Cité-jardin de la Butte-Rouge', 'Composts et abris de jardin', 'Sous-sols des pavillons'],
    proches: ['Sceaux', 'Le Plessis-Robinson', 'Antony', 'Fontenay-aux-Roses'],
    guides: ['deratisation-sans-mort-aux-rats', 'trou-dans-le-jardin', 'lerot-grenier-combles'],
    faq: [
      { q: 'Peut-on dératiser sans mort-aux-rats ?', a: 'Oui, avec des pièges mécaniques ou le piège multicapture Ekomille, en méthode alternative. La méthode la plus courante reste les postes d\'appâtage sécurisés avec raticide, plus efficaces sur une population installée. Le technicien vous conseille selon la situation.' },
      ...FAQ_COMMUNE('à Châtenay-Malabry'),
    ],
  },
  {
    slug: 'paris-1',
    nom: 'Paris 1er',
    a: 'à Paris 1er',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 1er (75), intervention 7j/7',
    description: 'Rats et souris à Paris 1er : restaurants des Halles, hôtels, réserves de boutiques. Postes verrouillés, pièges discrets, colmatage. Devis gratuit.',
    contexte: [
      'Le 1er, des Halles au Palais-Royal en passant par le Louvre et les Tuileries, concentre restaurants, hôtels, boutiques et grands jardins. Les rats circulent entre les jardins, les quais et les réseaux souterrains, puis entrent dans les cuisines et les réserves par les gaines et les sous-sols.',
      'Pour un restaurant ou un hôtel, nous intervenons en dehors du service, avec des postes verrouillés en zone technique et des pièges en cuisine. Un compte rendu est remis après chaque passage pour votre registre d\'hygiène.',
    ],
    lieux: ['Cuisines et réserves de restaurants', 'Sous-sols des hôtels', 'Locaux poubelles des immeubles', 'Abords des jardins et des quais'],
    proches: ['Paris 2e', 'Paris 4e', 'Paris 8e', 'Paris 9e', 'Paris 6e'],
    guides: ['restaurant-plan-lutte-nuisibles', 'rat-dans-les-murs-cloisons', 'rat-mode-de-vie'],
    faq: [
      { q: 'Rats dans un restaurant : que risque-t-on lors d\'un contrôle ?', a: 'Les services d\'hygiène peuvent constater la présence de rongeurs ou de leurs traces et exiger des mesures, jusqu\'à une fermeture administrative dans les cas graves. Un plan de lutte suivi par un professionnel, avec des comptes rendus datés, permet de montrer que le problème est traité.' },
      ...FAQ_COMMUNE('à Paris 1er'),
    ],
  },
  {
    slug: 'paris-2',
    nom: 'Paris 2e',
    a: 'à Paris 2e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 2e (75), intervention 7j/7',
    description: 'Souris et rats à Paris 2e : ateliers du Sentier, bureaux, passages couverts, rue Montorgueil. Pièges discrets, postes sécurisés. Devis gratuit.',
    contexte: [
      'Le 2e, du Sentier à la Bourse en passant par la rue Montorgueil et les passages couverts, mêle ateliers, stocks de tissus et de vêtements, bureaux et restaurants. Les souris s\'installent dans les faux plafonds, les gaines techniques et les réserves où les cartons s\'accumulent.',
      'Dans un atelier ou un bureau, la priorité est de protéger le stock et le matériel : pièges mécaniques ou connectés le long des murs, sans produit au contact de la marchandise, puis fermeture des passages autour des gaines et des plinthes.',
    ],
    lieux: ['Stocks de tissus et de cartons', 'Faux plafonds et gaines techniques', 'Cuisines de la rue Montorgueil', 'Boutiques des passages couverts'],
    proches: ['Paris 1er', 'Paris 3e', 'Paris 9e', 'Paris 10e'],
    guides: ['souris-par-ou-entrent-elles', 'rat-dans-les-murs-cloisons', 'restaurant-plan-lutte-nuisibles'],
    faq: [
      { q: 'Souris dans un bureau ou un atelier : faut-il fermer pendant le traitement ?', a: 'Non. Les pièges et les postes sont posés hors des zones de passage, souvent en fin de journée, et ne demandent pas de quitter les lieux. Le technicien repère aussi les câbles rongés à signaler à votre électricien.' },
      ...FAQ_COMMUNE('à Paris 2e'),
    ],
  },
  {
    slug: 'paris-7',
    nom: 'Paris 7e',
    a: 'à Paris 7e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 7e (75), intervention 7j/7',
    description: 'Rats à Paris 7e : caves d\'immeubles, jardins privés, quais, abords du Champ-de-Mars. Postes verrouillés, intervention discrète. Devis gratuit.',
    contexte: [
      'Le 7e, du Champ-de-Mars aux Invalides et du Gros-Caillou à Saint-Thomas-d\'Aquin, compte de grands immeubles, des hôtels particuliers avec jardin, des ministères et les berges de la Seine. Les rats des jardins et des quais trouvent refuge dans les caves et les cours intérieures.',
      'Dans un immeuble de standing ou un hôtel particulier, nous travaillons avec le gardien ou le syndic : postes verrouillés dans les caves et les cours, recherche des passages vers les réseaux, puis visites de contrôle jusqu\'à disparition des traces.',
    ],
    lieux: ['Caves des grands immeubles', 'Jardins des hôtels particuliers', 'Cours intérieures et locaux poubelles', 'Commerces de bouche de la rue Cler'],
    proches: ['Paris 6e', 'Paris 15e', 'Paris 8e', 'Paris 16e'],
    guides: ['rat-dans-les-murs-cloisons', 'rat-dans-les-toilettes', 'nourrir-oiseaux-pigeons-attire-rats'],
    faq: [
      { q: 'Le jardin de notre immeuble a des terriers : comment les traiter ?', a: 'Les terriers au pied des murs ou sous les massifs sont typiques du surmulot. Nous posons des postes sécurisés à proximité, puis rebouchons les terriers une fois l\'activité arrêtée. Supprimer les sources de nourriture (graines pour oiseaux, sacs mal fermés) évite leur retour.' },
      ...FAQ_COMMUNE('à Paris 7e'),
    ],
  },
  {
    slug: 'paris-8',
    nom: 'Paris 8e',
    a: 'à Paris 8e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 8e (75), intervention 7j/7',
    description: 'Dératisation à Paris 8e : bureaux, sièges sociaux, hôtels et restaurants des Champs-Élysées. Contrat de suivi, attestation. Devis gratuit.',
    contexte: [
      'Le 8e, des Champs-Élysées au parc Monceau en passant par la Madeleine et Saint-Lazare, est surtout un quartier de bureaux, de sièges sociaux, d\'hôtels et de restaurants. Les souris profitent des faux plafonds et des cuisines d\'entreprise, les rats des parkings souterrains et des locaux à déchets.',
      'Pour les entreprises et les hôtels, nous proposons un contrat de suivi avec des passages réguliers, un plan des postes et une attestation à chaque visite. Les interventions se font hors des heures d\'ouverture pour ne pas gêner l\'activité.',
    ],
    lieux: ['Faux plafonds de bureaux', 'Cuisines d\'entreprise et de restaurants', 'Parkings souterrains', 'Locaux à déchets des hôtels'],
    proches: ['Paris 17e', 'Paris 16e', 'Paris 9e', 'Paris 1er'],
    guides: ['restaurant-plan-lutte-nuisibles', 'souris-par-ou-entrent-elles', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Proposez-vous un contrat d\'entretien pour des bureaux ?', a: 'Oui. Le contrat prévoit des visites régulières, le contrôle et le réapprovisionnement des postes, un rapport après chaque passage et une intervention rapide en cas de nouvelle trace. C\'est ce que demandent souvent les gestionnaires d\'immeubles et les assureurs.' },
      ...FAQ_COMMUNE('à Paris 8e'),
    ],
  },
  {
    slug: 'paris-9',
    nom: 'Paris 9e',
    a: 'à Paris 9e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 9e (75), intervention 7j/7',
    description: 'Souris et rats à Paris 9e : immeubles haussmanniens, grands magasins, restaurants, Pigalle. Pièges, postes sécurisés, colmatage. Devis gratuit.',
    contexte: [
      'Le 9e, de l\'Opéra et des grands magasins jusqu\'à la rue des Martyrs et Pigalle, associe immeubles haussmanniens, commerces, théâtres et restaurants. Dans ces immeubles, les souris passent d\'un appartement à l\'autre par les gaines, les colonnes d\'eau et les anciens conduits de cheminée.',
      'Traiter un seul appartement suffit rarement : nous cherchons le point d\'entrée, posons des pièges ou des postes dans le logement et, si besoin, dans les caves et les parties communes avec l\'accord du syndic.',
    ],
    lieux: ['Gaines et colonnes d\'eau', 'Anciens conduits de cheminée', 'Caves des immeubles haussmanniens', 'Réserves de commerces et de théâtres'],
    proches: ['Paris 2e', 'Paris 8e', 'Paris 10e', 'Paris 18e', 'Paris 17e'],
    guides: ['souris-par-ou-entrent-elles', 'rat-dans-les-murs-cloisons', 'rats-dans-les-combles'],
    faq: [
      { q: 'Pourquoi des souris reviennent-elles chaque hiver dans mon appartement ?', a: 'Avec le froid, les souris cherchent la chaleur des logements et passent par les gaines et les colonnes communes. Tant que ces passages restent ouverts, elles reviennent. Le colmatage autour des tuyaux et sous les éviers est aussi important que les pièges.' },
      ...FAQ_COMMUNE('à Paris 9e'),
    ],
  },
  {
    slug: 'paris-15',
    nom: 'Paris 15e',
    a: 'à Paris 15e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 15e (75), intervention 7j/7',
    description: 'Dératisation à Paris 15e : appartements, résidences, caves, marchés, Beaugrenelle, Vaugirard. Postes verrouillés, colmatage. Devis gratuit.',
    contexte: [
      'Le 15e, de Vaugirard à Grenelle et de Javel à la porte de Versailles, est l\'arrondissement le plus peuplé de Paris, surtout résidentiel : grandes résidences, tours du Front de Seine, marchés et parcs comme André-Citroën ou Georges-Brassens. Les rongeurs passent des espaces verts et des berges vers les caves et les locaux poubelles.',
      'En résidence, une dératisation efficace se fait à l\'échelle de l\'immeuble : postes dans les caves, les parkings et les locaux à déchets, conseils au gardien sur le stockage des poubelles, et suivi jusqu\'à disparition des traces.',
    ],
    lieux: ['Caves et parkings de résidences', 'Locaux poubelles', 'Abords des marchés couverts et de plein air', 'Appartements en rez-de-chaussée'],
    proches: ['Paris 7e', 'Paris 14e', 'Paris 16e', 'Issy-les-Moulineaux', 'Vanves'],
    guides: ['rat-dans-les-toilettes', 'souris-par-ou-entrent-elles', 'rat-mode-de-vie'],
    faq: [
      { q: 'Des rats dans le local poubelles : qui doit payer la dératisation ?', a: 'Les parties communes relèvent de la copropriété ou du bailleur : c\'est au syndic de faire traiter. Si les rongeurs sont aussi dans votre logement, signalez-le au syndic pour que le traitement couvre l\'immeuble entier, sinon ils reviennent.' },
      ...FAQ_COMMUNE('à Paris 15e'),
    ],
  },
  {
    slug: 'paris-16',
    nom: 'Paris 16e',
    a: 'à Paris 16e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 16e (75), intervention 7j/7',
    description: 'Rats et souris à Paris 16e : maisons avec jardin, villas, caves, abords du bois de Boulogne. Postes verrouillés, Ekomille. Devis gratuit.',
    contexte: [
      'Le 16e, de Passy à Auteuil et du Trocadéro à la porte Dauphine, compte des immeubles anciens mais aussi des villas, des maisons avec jardin et le bois de Boulogne tout proche. Rats et souris vivent dans les espaces verts et se rapprochent des sous-sols, des garages et des cuisines à l\'automne.',
      'Dans une maison avec jardin, nous traitons l\'extérieur et l\'intérieur : postes sécurisés et verrouillés le long des murs, contrôle des soupiraux et des grilles. En méthode alternative, sans raticide, le piège Ekomille peut être installé sur le passage le plus fréquenté.',
    ],
    lieux: ['Jardins et villas d\'Auteuil', 'Sous-sols et garages', 'Abords du bois de Boulogne', 'Caves d\'immeubles anciens à Passy'],
    proches: ['Paris 17e', 'Paris 8e', 'Paris 15e', 'Boulogne-Billancourt', 'Neuilly-sur-Seine'],
    guides: ['deratisation-sans-mort-aux-rats', 'trou-dans-le-jardin', 'rongeur-moteur-voiture-cables'],
    faq: [
      { q: 'Le piège Ekomille convient-il à une maison avec jardin ?', a: 'Il peut l\'être, en méthode alternative, sur un passage de rats repéré près d\'un mur ou d\'une entrée de sous-sol. Pour une population déjà installée, la méthode la plus courante reste les postes d\'appâtage sécurisés avec raticide. Le technicien vous conseille sur place.' },
      ...FAQ_COMMUNE('à Paris 16e'),
    ],
  },
  {
    slug: 'paris-17',
    nom: 'Paris 17e',
    a: 'à Paris 17e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 17e (75), intervention 7j/7',
    description: 'Souris et rats à Paris 17e : Batignolles, Ternes, rue de Lévis, résidences neuves et anciennes. Pièges, postes sécurisés. Devis gratuit.',
    contexte: [
      'Le 17e, des Ternes aux Batignolles et des Épinettes à la plaine Monceau, réunit immeubles haussmanniens, quartiers récents autour du parc Clichy-Batignolles et rues commerçantes comme la rue de Lévis. Les souris s\'installent dans les cuisines et les gaines, les rats dans les caves, les parkings et les abords des parcs.',
      'Les immeubles récents ne sont pas épargnés : les rongeurs passent par les gaines techniques et les parkings. Nous traitons le logement et, avec le syndic, les parties communes, puis fermons les passages trouvés.',
    ],
    lieux: ['Gaines techniques des immeubles récents', 'Parkings souterrains', 'Commerces de bouche de la rue de Lévis', 'Caves des immeubles anciens'],
    proches: ['Paris 8e', 'Paris 18e', 'Paris 16e', 'Clichy', 'Levallois-Perret'],
    guides: ['souris-par-ou-entrent-elles', 'rongeur-moteur-voiture-cables', 'rat-dans-les-murs-cloisons'],
    faq: [
      { q: 'Des souris dans un immeuble neuf, est-ce normal ?', a: 'Oui, cela arrive. Les gaines, les passages de câbles et les parkings mal fermés laissent passer les souris dès les premières années. Le traitement est le même qu\'ailleurs, avec un soin particulier pour le colmatage des réservations techniques.' },
      ...FAQ_COMMUNE('à Paris 17e'),
    ],
  },
  {
    slug: 'paris-18',
    nom: 'Paris 18e',
    a: 'à Paris 18e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 18e (75), intervention 7j/7',
    description: 'Dératisation à Paris 18e : Montmartre, Barbès, Goutte d\'Or, La Chapelle. Caves, cours, commerces, marchés. Postes verrouillés. Devis gratuit.',
    contexte: [
      'Le 18e, de la butte Montmartre à Barbès, la Goutte d\'Or et La Chapelle, mêle immeubles anciens, cours intérieures, marchés, commerces alimentaires et restaurants. Les rats profitent des caves communicantes, des locaux à déchets et des abords des marchés.',
      'Dans les vieux immeubles de la butte et de la Goutte d\'Or, le traitement doit couvrir les caves et la cour avec le syndic, sinon les rongeurs passent chez le voisin et reviennent. Nous posons des postes verrouillés, bouchons les passages et revenons contrôler.',
    ],
    lieux: ['Caves communicantes', 'Cours intérieures', 'Abords des marchés', 'Réserves des commerces alimentaires'],
    proches: ['Paris 17e', 'Paris 19e', 'Paris 9e', 'Saint-Ouen-sur-Seine', 'Saint-Denis'],
    guides: ['rat-dans-les-murs-cloisons', 'rat-dans-les-toilettes', 'reproduction-des-rats'],
    faq: [
      { q: 'Des rats dans la cour de l\'immeuble : peut-on traiter sans le syndic ?', a: 'La cour et les caves sont des parties communes : c\'est au syndic de commander le traitement. Vous pouvez faire traiter votre logement de votre côté, mais pour un résultat durable, il faut agir sur tout l\'immeuble. Nous pouvons fournir un devis à transmettre au syndic.' },
      ...FAQ_COMMUNE('à Paris 18e'),
    ],
  },
  {
    slug: 'paris-19',
    nom: 'Paris 19e',
    a: 'à Paris 19e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Dératisation à Paris 19e (75), intervention 7j/7',
    description: 'Rats à Paris 19e : bassin de la Villette, canal de l\'Ourcq, Buttes-Chaumont, résidences. Postes verrouillés, colmatage, suivi. Devis gratuit.',
    contexte: [
      'Le 19e, du bassin de la Villette aux Buttes-Chaumont et de Belleville à la porte de Pantin, est traversé par le canal de l\'Ourcq et compte de grands parcs et de nombreuses résidences. Les surmulots vivent le long de l\'eau et dans les espaces verts, puis gagnent les caves, les parkings et les locaux poubelles.',
      'En résidence, nous traitons à l\'échelle de l\'immeuble avec le bailleur ou le syndic : postes verrouillés en sous-sol et autour des bâtiments, recherche des terriers dans les espaces verts, conseils sur la gestion des déchets.',
    ],
    lieux: ['Abords du canal et du bassin', 'Caves et parkings de résidences', 'Locaux poubelles', 'Espaces verts au pied des immeubles'],
    proches: ['Paris 10e', 'Paris 18e', 'Paris 20e', 'Pantin', 'Aubervilliers'],
    guides: ['rat-mode-de-vie', 'reproduction-des-rats', 'nourrir-oiseaux-pigeons-attire-rats'],
    faq: [
      { q: 'Pourquoi y a-t-il plus de rats près du canal ?', a: 'Le canal et ses berges offrent de l\'eau, des abris dans les maçonneries et de la nourriture laissée par les passants. Les surmulots s\'y installent puis rejoignent les immeubles voisins par les réseaux et les espaces verts. Le traitement vise les bâtiments, la voie publique relevant de la Ville de Paris.' },
      ...FAQ_COMMUNE('à Paris 19e'),
    ],
  },
  // ── Essonne, Seine-et-Marne, Yvelines : 10 plus grandes villes de chaque département (10/11/2026) ──
  {
      "slug": "versailles",
      "nom": "Versailles",
      "a": "à Versailles",
      "code": "78",
      "departement": "Yvelines",
      "zoneHref": "/zones/yvelines",
      "title": "Dératisation à Versailles (78), intervention 7j/7",
      "description": "Rats et souris à Versailles : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Versailles, c'est le château et son parc, mais aussi des quartiers anciens comme Notre-Dame et Saint-Louis, avec leurs immeubles en pierre, leurs caves voûtées et leurs cours intérieures. Le marché Notre-Dame et les nombreux commerces de bouche attirent les rongeurs dans le centre.",
          "Dans les maisons de Porchefontaine, Montreuil ou Clagny, les rats et les souris passent souvent par les jardins, les sous-sols et les passages de canalisations. Nous adaptons le dispositif à chaque bâtiment, de la cave d'immeuble au pavillon."
      ],
      "lieux": [
          "Caves voûtées des immeubles anciens",
          "Cours intérieures et locaux poubelles",
          "Réserves des commerces de bouche",
          "Sous-sols et jardins des pavillons"
      ],
      "proches": [
          "Le Chesnay-Rocquencourt",
          "Viroflay",
          "Saint-Cyr-l’École",
          "Buc"
      ],
      "guides": [
          "rat-dans-les-murs-cloisons",
          "restaurant-plan-lutte-nuisibles",
          "souris-par-ou-entrent-elles"
      ],
      "faq": [
        {"q": "Les caves anciennes de Versailles attirent-elles les rats ?", "a": "Oui. Les caves voûtées en pierre ont souvent des fissures et des passages de canalisations anciens, par lesquels les rongeurs circulent d'un immeuble à l'autre. Une dératisation coordonnée par le syndic, avec colmatage, est la plus efficace."},
        ...FAQ_COMMUNE("à Versailles"),
      ]
    },
  {
      "slug": "sartrouville",
      "nom": "Sartrouville",
      "a": "à Sartrouville",
      "code": "78",
      "departement": "Yvelines",
      "zoneHref": "/zones/yvelines",
      "title": "Dératisation à Sartrouville (78), intervention 7j/7",
      "description": "Rats et souris à Sartrouville : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Sartrouville, dans une boucle de la Seine, mêle grands ensembles, quartiers pavillonnaires et berges. Les rats bruns vivent le long du fleuve et dans les jardins, et gagnent les sous-sols et les garages à l'arrivée du froid.",
          "Dans les résidences, les locaux poubelles et les parkings souterrains sont les premiers points à traiter. Dans les pavillons, nous inspectons les abris de jardin, les composts et les vides sanitaires."
      ],
      "lieux": [
          "Berges de la Seine et jardins",
          "Locaux poubelles des résidences",
          "Parkings souterrains",
          "Vides sanitaires des pavillons"
      ],
      "proches": [
          "Houilles",
          "Montesson",
          "Maisons-Laffitte",
          "Cormeilles-en-Parisis"
      ],
      "guides": [
          "rat-compost",
          "rat-vide-sanitaire",
          "souris-par-ou-entrent-elles"
      ],
      "faq": [
        {"q": "Les crues de la Seine font-elles sortir les rats à Sartrouville ?", "a": "Oui, quand le fleuve monte, les rats quittent leurs terriers des berges et cherchent refuge dans les caves et les jardins proches. C'est souvent après ces épisodes que l'on nous appelle."},
        ...FAQ_COMMUNE("à Sartrouville"),
      ]
    },
  {
      "slug": "saint-germain-en-laye",
      "nom": "Saint-Germain-en-Laye",
      "a": "à Saint-Germain-en-Laye",
      "code": "78",
      "departement": "Yvelines",
      "zoneHref": "/zones/yvelines",
      "title": "Dératisation à Saint-Germain-en-Laye (78), intervention 7j/7",
      "description": "Rats et souris à Saint-Germain-en-Laye : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Saint-Germain-en-Laye, avec son château, sa terrasse et sa forêt, compte un centre ancien dense en commerces et en restaurants, et de grandes maisons entourées de jardins. La forêt toute proche abrite aussi des rongeurs qui s'approchent des habitations à l'automne.",
          "Dans le centre, les réserves des commerces et les caves d'immeubles sont les zones sensibles. Dans les quartiers résidentiels, ce sont les sous-sols, les garages et les dépendances."
      ],
      "lieux": [
          "Réserves des commerces du centre",
          "Caves d’immeubles anciens",
          "Sous-sols et garages",
          "Dépendances en lisière de forêt"
      ],
      "proches": [
          "Le Pecq",
          "Chambourcy",
          "Mareil-Marly",
          "Poissy"
      ],
      "guides": [
          "restaurant-plan-lutte-nuisibles",
          "rongeur-moteur-voiture-cables",
          "lerot-grenier-combles"
      ],
      "faq": [
        {"q": "La forêt de Saint-Germain amène-t-elle des rongeurs dans les maisons ?", "a": "Les maisons en lisière de forêt voient plus souvent des souris, des mulots et parfois des lérots entrer à l'automne. Boucher les accès des sous-sols et des combles est la meilleure prévention."},
        ...FAQ_COMMUNE("à Saint-Germain-en-Laye"),
      ]
    },
  {
      "slug": "mantes-la-jolie",
      "nom": "Mantes-la-Jolie",
      "a": "à Mantes-la-Jolie",
      "code": "78",
      "departement": "Yvelines",
      "zoneHref": "/zones/yvelines",
      "title": "Dératisation à Mantes-la-Jolie (78), intervention 7j/7",
      "description": "Rats et souris à Mantes-la-Jolie : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Mantes-la-Jolie, au bord de la Seine, réunit un centre ancien autour de la collégiale et de grands quartiers d'habitat collectif comme le Val Fourré. Les rats y trouvent nourriture et abri dans les locaux poubelles, les caves et les espaces verts.",
          "Nous intervenons pour les particuliers, les commerces et les bailleurs. Dans les grands ensembles, la dératisation des parties communes est souvent la première étape avant de traiter les logements."
      ],
      "lieux": [
          "Locaux poubelles et vide-ordures",
          "Caves des grands ensembles",
          "Berges de la Seine",
          "Réserves des commerces du centre"
      ],
      "proches": [
          "Mantes-la-Ville",
          "Buchelay",
          "Limay",
          "Magnanville"
      ],
      "guides": [
          "rat-dans-les-toilettes",
          "reproduction-des-rats",
          "deratisation-sans-mort-aux-rats"
      ],
      "faq": [
        {"q": "Qui doit dératiser les caves d'une résidence à Mantes-la-Jolie ?", "a": "Les caves et locaux poubelles sont des parties communes : c'est au bailleur ou au syndic d'organiser la dératisation. Chaque logement touché est ensuite traité si besoin."},
        ...FAQ_COMMUNE("à Mantes-la-Jolie"),
      ]
    },
  {
      "slug": "poissy",
      "nom": "Poissy",
      "a": "à Poissy",
      "code": "78",
      "departement": "Yvelines",
      "zoneHref": "/zones/yvelines",
      "title": "Dératisation à Poissy (78), intervention 7j/7",
      "description": "Rats et souris à Poissy : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Poissy s'étend le long de la Seine, entre son centre historique autour de la collégiale, ses quartiers résidentiels et ses grandes zones d'activités. Les berges et les jardins sont des lieux de vie pour les rats bruns.",
          "Dans les pavillons proches de la Seine, les rats entrent souvent par les sous-sols et les garages. Pour les entreprises et commerces, nous proposons un suivi régulier avec registre."
      ],
      "lieux": [
          "Berges de la Seine",
          "Sous-sols et garages des pavillons",
          "Zones d’activités et entrepôts",
          "Caves du centre historique"
      ],
      "proches": [
          "Saint-Germain-en-Laye",
          "Carrières-sous-Poissy",
          "Villennes-sur-Seine",
          "Orgeval"
      ],
      "guides": [
          "rat-vide-sanitaire",
          "restaurant-plan-lutte-nuisibles",
          "trou-dans-le-jardin"
      ],
      "faq": [
        {"q": "Les entrepôts de Poissy peuvent-ils avoir un contrat de dératisation ?", "a": "Oui. Nous mettons en place des postes numérotés, des passages programmés et un rapport à chaque visite, utile lors des audits et des contrôles."},
        ...FAQ_COMMUNE("à Poissy"),
      ]
    },
  {
      "slug": "conflans-sainte-honorine",
      "nom": "Conflans-Sainte-Honorine",
      "a": "à Conflans-Sainte-Honorine",
      "code": "78",
      "departement": "Yvelines",
      "zoneHref": "/zones/yvelines",
      "title": "Dératisation à Conflans-Sainte-Honorine (78), intervention 7j/7",
      "description": "Rats et souris à Conflans-Sainte-Honorine : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Conflans-Sainte-Honorine, capitale de la batellerie, est installée au confluent de la Seine et de l'Oise. Les quais, les péniches et les jardins des bords de l'eau sont des lieux où les rats trouvent eau et abri.",
          "Les maisons du coteau et du centre ancien ont souvent des caves et des sous-sols par lesquels les rongeurs s'introduisent. Nous repérons les passages avant de poser le dispositif."
      ],
      "lieux": [
          "Quais et berges de la Seine et de l’Oise",
          "Caves du centre ancien",
          "Jardins en coteau",
          "Garages et sous-sols"
      ],
      "proches": [
          "Andrésy",
          "Maurecourt",
          "Herblay-sur-Seine",
          "Achères"
      ],
      "guides": [
          "rat-compost",
          "rat-dans-les-murs-cloisons",
          "trou-dans-le-jardin"
      ],
      "faq": [
        {"q": "Habiter près des quais à Conflans augmente-t-il le risque de rats ?", "a": "Les berges sont un milieu naturellement favorable au rat brun. Les maisons proches doivent surveiller les signes de passage et fermer soigneusement les accès aux caves."},
        ...FAQ_COMMUNE("à Conflans-Sainte-Honorine"),
      ]
    },
  {
      "slug": "trappes",
      "nom": "Trappes",
      "a": "à Trappes",
      "code": "78",
      "departement": "Yvelines",
      "zoneHref": "/zones/yvelines",
      "title": "Dératisation à Trappes (78), intervention 7j/7",
      "description": "Rats et souris à Trappes : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Trappes, au cœur de Saint-Quentin-en-Yvelines, compte de nombreux logements collectifs, des zones d'activités et de grandes emprises ferroviaires. Les rongeurs circulent entre les voies, les locaux techniques et les espaces verts.",
          "Dans les résidences, nous traitons en priorité les locaux poubelles, les caves et les parkings, en lien avec les bailleurs. Les commerces et entreprises peuvent bénéficier d'un suivi régulier."
      ],
      "lieux": [
          "Locaux poubelles et parkings",
          "Caves des résidences",
          "Abords des voies ferrées",
          "Zones d’activités"
      ],
      "proches": [
          "Élancourt",
          "Montigny-le-Bretonneux",
          "Plaisir",
          "La Verrière"
      ],
      "guides": [
          "rat-dans-les-toilettes",
          "reproduction-des-rats",
          "souris-par-ou-entrent-elles"
      ],
      "faq": [
        {"q": "Les voies ferrées de Trappes favorisent-elles les rats ?", "a": "Les talus et emprises ferroviaires offrent des abris tranquilles aux rongeurs, qui se déplacent ensuite vers les logements et les commerces voisins. Fermer les accès des bâtiments proches est essentiel."},
        ...FAQ_COMMUNE("à Trappes"),
      ]
    },
  {
      "slug": "les-mureaux",
      "nom": "Les Mureaux",
      "a": "aux Mureaux",
      "code": "78",
      "departement": "Yvelines",
      "zoneHref": "/zones/yvelines",
      "title": "Dératisation aux Mureaux (78), intervention 7j/7",
      "description": "Rats et souris aux Mureaux : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Les Mureaux, sur la rive gauche de la Seine, mêlent quartiers d'habitat collectif, pavillons et grandes zones industrielles. Les berges et les espaces verts abritent des rats bruns qui gagnent les bâtiments voisins.",
          "Nous intervenons pour les familles, les bailleurs et les entreprises : postes sécurisés, recherche des accès et colmatage, avec un suivi adapté à chaque lieu."
      ],
      "lieux": [
          "Berges de la Seine",
          "Locaux poubelles des résidences",
          "Zones industrielles",
          "Jardins des pavillons"
      ],
      "proches": [
          "Meulan-en-Yvelines",
          "Ecquevilly",
          "Verneuil-sur-Seine",
          "Bouafle"
      ],
      "guides": [
          "rat-compost",
          "rat-vide-sanitaire",
          "deratisation-sans-mort-aux-rats"
      ],
      "faq": [
        {"q": "Comment savoir si les rats viennent des berges aux Mureaux ?", "a": "Les terriers au pied des haies, les coulées dans l'herbe vers la maison et les crottes près des abris de jardin sont des indices. Le technicien identifie le chemin et traite à la source."},
        ...FAQ_COMMUNE("aux Mureaux"),
      ]
    },
  {
      "slug": "houilles",
      "nom": "Houilles",
      "a": "à Houilles",
      "code": "78",
      "departement": "Yvelines",
      "zoneHref": "/zones/yvelines",
      "title": "Dératisation à Houilles (78), intervention 7j/7",
      "description": "Rats et souris à Houilles : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Houilles est une ville surtout pavillonnaire, avec de nombreux jardins et des rues résidentielles proches de la gare. Les rats et les souris y entrent souvent par les vides sanitaires, les garages et les passages de tuyaux.",
          "Dans le centre, les commerces et les petits immeubles ont des caves et des réserves à surveiller. Nous traitons et colmatons les accès pour que les rongeurs ne reviennent pas."
      ],
      "lieux": [
          "Vides sanitaires des pavillons",
          "Garages et abris de jardin",
          "Caves des petits immeubles",
          "Réserves des commerces"
      ],
      "proches": [
          "Sartrouville",
          "Carrières-sur-Seine",
          "Bezons",
          "Chatou"
      ],
      "guides": [
          "rat-vide-sanitaire",
          "souris-par-ou-entrent-elles",
          "rongeur-moteur-voiture-cables"
      ],
      "faq": [
        {"q": "Pourquoi les souris entrent-elles dans les pavillons de Houilles en hiver ?", "a": "Elles cherchent la chaleur et la nourriture des maisons. Elles passent par des fentes de quelques millimètres : bas de portes, aérations, passages de tuyaux."},
        ...FAQ_COMMUNE("à Houilles"),
      ]
    },
  {
      "slug": "montigny-le-bretonneux",
      "nom": "Montigny-le-Bretonneux",
      "a": "à Montigny-le-Bretonneux",
      "code": "78",
      "departement": "Yvelines",
      "zoneHref": "/zones/yvelines",
      "title": "Dératisation à Montigny-le-Bretonneux (78), intervention 7j/7",
      "description": "Rats et souris à Montigny-le-Bretonneux : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Montigny-le-Bretonneux, cœur de Saint-Quentin-en-Yvelines, compte des quartiers résidentiels récents, des immeubles de bureaux, un grand centre commercial et des espaces verts autour des bassins. Les rongeurs profitent des espaces verts et des locaux techniques.",
          "Les résidences avec parkings souterrains et locaux poubelles sont les points d'entrée les plus fréquents. Pour les bureaux et commerces, nous proposons un suivi avec rapport."
      ],
      "lieux": [
          "Parkings souterrains",
          "Locaux poubelles",
          "Espaces verts et bassins",
          "Réserves des commerces"
      ],
      "proches": [
          "Guyancourt",
          "Voisins-le-Bretonneux",
          "Trappes",
          "Élancourt"
      ],
      "guides": [
          "restaurant-plan-lutte-nuisibles",
          "souris-par-ou-entrent-elles",
          "rat-dans-les-toilettes"
      ],
      "faq": [
        {"q": "Un immeuble récent peut-il avoir des rats à Montigny ?", "a": "Oui : les rongeurs passent par les parkings, les locaux techniques et les gaines, même dans un bâtiment neuf. Le colmatage des passages autour des réseaux est déterminant."},
        ...FAQ_COMMUNE("à Montigny-le-Bretonneux"),
      ]
    },
  {
      "slug": "evry-courcouronnes",
      "nom": "Évry-Courcouronnes",
      "a": "à Évry-Courcouronnes",
      "code": "91",
      "departement": "Essonne",
      "zoneHref": "/zones/essonne",
      "title": "Dératisation à Évry-Courcouronnes (91), intervention 7j/7",
      "description": "Rats et souris à Évry-Courcouronnes : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Évry-Courcouronnes, préfecture de l'Essonne, réunit des quartiers de grands ensembles, des pavillons, une université et de nombreux commerces autour de l'Agora. Les rongeurs s'installent dans les locaux poubelles, les parkings et les espaces verts.",
          "Le long de la Seine et dans les parcs, les rats bruns trouvent eau et abri. Dans les résidences, nous traitons en priorité les parties communes, en lien avec les bailleurs et les syndics."
      ],
      "lieux": [
          "Locaux poubelles et parkings",
          "Espaces verts et bords de Seine",
          "Caves des résidences",
          "Réserves des commerces"
      ],
      "proches": [
          "Ris-Orangis",
          "Corbeil-Essonnes",
          "Lisses",
          "Bondoufle"
      ],
      "guides": [
          "rat-dans-les-toilettes",
          "reproduction-des-rats",
          "restaurant-plan-lutte-nuisibles"
      ],
      "faq": [
        {"q": "Qui contacter pour des rats dans une résidence à Évry-Courcouronnes ?", "a": "Prévenez votre bailleur ou votre syndic : la dératisation des caves, parkings et locaux poubelles relève des parties communes. Nous intervenons ensuite dans les logements touchés."},
        ...FAQ_COMMUNE("à Évry-Courcouronnes"),
      ]
    },
  {
      "slug": "corbeil-essonnes",
      "nom": "Corbeil-Essonnes",
      "a": "à Corbeil-Essonnes",
      "code": "91",
      "departement": "Essonne",
      "zoneHref": "/zones/essonne",
      "title": "Dératisation à Corbeil-Essonnes (91), intervention 7j/7",
      "description": "Rats et souris à Corbeil-Essonnes : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Corbeil-Essonnes est née au confluent de la Seine et de l'Essonne. Les quais, les anciens bâtiments industriels comme les Grands Moulins et le centre ancien offrent aux rats des berges et des caves où s'abriter.",
          "Dans les quartiers pavillonnaires, les rongeurs passent par les jardins et les sous-sols. Nous repérons les accès, posons des postes sécurisés et colmatons."
      ],
      "lieux": [
          "Quais de la Seine et de l’Essonne",
          "Caves du centre ancien",
          "Jardins et sous-sols",
          "Locaux poubelles des résidences"
      ],
      "proches": [
          "Évry-Courcouronnes",
          "Saint-Germain-lès-Corbeil",
          "Villabé",
          "Le Coudray-Montceaux"
      ],
      "guides": [
          "rat-dans-les-murs-cloisons",
          "rat-compost",
          "trou-dans-le-jardin"
      ],
      "faq": [
        {"q": "Les rivières de Corbeil-Essonnes attirent-elles les rats ?", "a": "Oui, la Seine et l'Essonne offrent eau et terriers aux rats bruns. Les maisons proches des berges doivent surveiller leurs sous-sols et fermer les passages."},
        ...FAQ_COMMUNE("à Corbeil-Essonnes"),
      ]
    },
  {
      "slug": "massy",
      "nom": "Massy",
      "a": "à Massy",
      "code": "91",
      "departement": "Essonne",
      "zoneHref": "/zones/essonne",
      "title": "Dératisation à Massy (91), intervention 7j/7",
      "description": "Rats et souris à Massy : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Massy, grand pôle de gares avec le TGV et le RER, compte des quartiers d'affaires récents comme Atlantis, des grands ensembles et des zones pavillonnaires. Les rongeurs circulent entre les chantiers, les parkings et les locaux techniques.",
          "Dans les pavillons, les souris et les rats entrent par les vides sanitaires et les garages. Pour les immeubles et bureaux, nous traitons les parties communes avec un suivi régulier."
      ],
      "lieux": [
          "Parkings et locaux techniques",
          "Chantiers et terrains en travaux",
          "Vides sanitaires des pavillons",
          "Locaux poubelles"
      ],
      "proches": [
          "Palaiseau",
          "Antony",
          "Wissous",
          "Chilly-Mazarin"
      ],
      "guides": [
          "rat-vide-sanitaire",
          "souris-par-ou-entrent-elles",
          "rongeur-moteur-voiture-cables"
      ],
      "faq": [
        {"q": "Les chantiers de Massy font-ils fuir les rats vers les maisons ?", "a": "Les travaux dérangent les colonies installées dans le sol et les réseaux, qui cherchent de nouveaux abris dans les bâtiments voisins. Une intervention rapide évite qu'elles s'installent."},
        ...FAQ_COMMUNE("à Massy"),
      ]
    },
  {
      "slug": "savigny-sur-orge",
      "nom": "Savigny-sur-Orge",
      "a": "à Savigny-sur-Orge",
      "code": "91",
      "departement": "Essonne",
      "zoneHref": "/zones/essonne",
      "title": "Dératisation à Savigny-sur-Orge (91), intervention 7j/7",
      "description": "Rats et souris à Savigny-sur-Orge : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Savigny-sur-Orge, dans la vallée de l'Orge, est une ville largement pavillonnaire, avec de nombreux jardins et des berges boisées. Les rats bruns vivent le long de la rivière et s'approchent des maisons, surtout à l'automne.",
          "Nous inspectons les jardins, les abris, les composts et les sous-sols, puis nous traitons et fermons les accès pour une protection durable."
      ],
      "lieux": [
          "Berges de l’Orge",
          "Jardins et composts",
          "Sous-sols et garages",
          "Abris de jardin"
      ],
      "proches": [
          "Viry-Châtillon",
          "Morsang-sur-Orge",
          "Juvisy-sur-Orge",
          "Épinay-sur-Orge"
      ],
      "guides": [
          "rat-compost",
          "trou-dans-le-jardin",
          "nourrir-oiseaux-pigeons-attire-rats"
      ],
      "faq": [
        {"q": "Un compost attire-t-il les rats à Savigny-sur-Orge ?", "a": "Un compost ouvert ou mal entretenu est une source de nourriture et de chaleur. Un composteur fermé, sans restes de viande ni de pain, limite fortement le risque."},
        ...FAQ_COMMUNE("à Savigny-sur-Orge"),
      ]
    },
  {
      "slug": "palaiseau",
      "nom": "Palaiseau",
      "a": "à Palaiseau",
      "code": "91",
      "departement": "Essonne",
      "zoneHref": "/zones/essonne",
      "title": "Dératisation à Palaiseau (91), intervention 7j/7",
      "description": "Rats et souris à Palaiseau : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Palaiseau s'étend du centre ancien, avec ses maisons en pierre, jusqu'au plateau de Saclay et ses grands établissements d'enseignement et de recherche. Les quartiers pavillonnaires et boisés sont exposés aux rongeurs des jardins et des bois.",
          "Dans les maisons anciennes, les caves et les murs en pierre offrent de nombreux passages. Nous les repérons avant de poser un dispositif adapté."
      ],
      "lieux": [
          "Caves des maisons anciennes",
          "Jardins et lisières de bois",
          "Sous-sols et garages",
          "Résidences étudiantes et locaux techniques"
      ],
      "proches": [
          "Massy",
          "Orsay",
          "Igny",
          "Villebon-sur-Yvette"
      ],
      "guides": [
          "rat-dans-les-murs-cloisons",
          "lerot-grenier-combles",
          "souris-par-ou-entrent-elles"
      ],
      "faq": [
        {"q": "Les maisons en pierre de Palaiseau sont-elles plus exposées aux rongeurs ?", "a": "Les murs anciens ont souvent des joints abîmés et des cavités par lesquels souris et rats circulent. Le colmatage au mortier ou à la laine d'acier est alors indispensable."},
        ...FAQ_COMMUNE("à Palaiseau"),
      ]
    },
  {
      "slug": "athis-mons",
      "nom": "Athis-Mons",
      "a": "à Athis-Mons",
      "code": "91",
      "departement": "Essonne",
      "zoneHref": "/zones/essonne",
      "title": "Dératisation à Athis-Mons (91), intervention 7j/7",
      "description": "Rats et souris à Athis-Mons : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Athis-Mons, entre la Seine et le plateau d'Orly, compte des quartiers pavillonnaires en coteau, des résidences et des zones d'activités proches de l'aéroport. Les rongeurs passent des espaces verts et des berges aux habitations.",
          "Dans les pavillons, nous traitons les jardins, les sous-sols et les garages. Pour les entreprises de la zone aéroportuaire, nous proposons un suivi régulier."
      ],
      "lieux": [
          "Coteaux et jardins",
          "Berges de la Seine",
          "Zones d’activités",
          "Sous-sols des pavillons"
      ],
      "proches": [
          "Paray-Vieille-Poste",
          "Juvisy-sur-Orge",
          "Morangis",
          "Ablon-sur-Seine"
      ],
      "guides": [
          "trou-dans-le-jardin",
          "rat-vide-sanitaire",
          "restaurant-plan-lutte-nuisibles"
      ],
      "faq": [
        {"q": "Faut-il traiter le jardin contre les rats à Athis-Mons ?", "a": "Si des terriers sont actifs, oui : des postes sécurisés au jardin, hors de portée des animaux, réduisent la population avant qu'elle n'entre dans la maison."},
        ...FAQ_COMMUNE("à Athis-Mons"),
      ]
    },
  {
      "slug": "sainte-genevieve-des-bois",
      "nom": "Sainte-Geneviève-des-Bois",
      "a": "à Sainte-Geneviève-des-Bois",
      "code": "91",
      "departement": "Essonne",
      "zoneHref": "/zones/essonne",
      "title": "Dératisation à Sainte-Geneviève-des-Bois (91), intervention 7j/7",
      "description": "Rats et souris à Sainte-Geneviève-des-Bois : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Sainte-Geneviève-des-Bois est une ville verte et largement pavillonnaire, entourée de bois et de parcs. Les souris et les rats des espaces verts gagnent les maisons à l'arrivée du froid.",
          "Nous inspectons les sous-sols, les garages, les combles et les abris de jardin, et nous adaptons le dispositif à la présence d'enfants et d'animaux."
      ],
      "lieux": [
          "Lisières de bois et parcs",
          "Sous-sols et garages",
          "Combles et isolation",
          "Abris de jardin"
      ],
      "proches": [
          "Saint-Michel-sur-Orge",
          "Fleury-Mérogis",
          "Morsang-sur-Orge",
          "Villemoisson-sur-Orge"
      ],
      "guides": [
          "lerot-grenier-combles",
          "souris-par-ou-entrent-elles",
          "rongeur-moteur-voiture-cables"
      ],
      "faq": [
        {"q": "Des bruits dans les combles à Sainte-Geneviève-des-Bois : rats, souris ou lérot ?", "a": "Les trois sont possibles près des bois. Les crottes, l'heure des bruits et les dégâts permettent au technicien d'identifier l'animal et de choisir la bonne méthode."},
        ...FAQ_COMMUNE("à Sainte-Geneviève-des-Bois"),
      ]
    },
  {
      "slug": "vigneux-sur-seine",
      "nom": "Vigneux-sur-Seine",
      "a": "à Vigneux-sur-Seine",
      "code": "91",
      "departement": "Essonne",
      "zoneHref": "/zones/essonne",
      "title": "Dératisation à Vigneux-sur-Seine (91), intervention 7j/7",
      "description": "Rats et souris à Vigneux-sur-Seine : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Vigneux-sur-Seine, entre la Seine, ses lacs et la forêt de Sénart, compte des quartiers d'habitat collectif et des zones pavillonnaires. L'eau et les espaces boisés offrent aux rongeurs de nombreux abris.",
          "Dans les résidences, les caves et locaux poubelles sont traités avec les bailleurs. Dans les maisons, nous inspectons les jardins et les sous-sols."
      ],
      "lieux": [
          "Bords de Seine et des lacs",
          "Caves et locaux poubelles",
          "Lisière de la forêt de Sénart",
          "Jardins et sous-sols"
      ],
      "proches": [
          "Draveil",
          "Montgeron",
          "Athis-Mons",
          "Juvisy-sur-Orge"
      ],
      "guides": [
          "rat-compost",
          "rat-dans-les-toilettes",
          "reproduction-des-rats"
      ],
      "faq": [
        {"q": "Les lacs de Vigneux attirent-ils les rats ?", "a": "Les plans d'eau et leurs berges sont des milieux favorables au rat brun. Les habitations proches doivent fermer les accès aux caves et éviter de laisser de la nourriture dehors."},
        ...FAQ_COMMUNE("à Vigneux-sur-Seine"),
      ]
    },
  {
      "slug": "ris-orangis",
      "nom": "Ris-Orangis",
      "a": "à Ris-Orangis",
      "code": "91",
      "departement": "Essonne",
      "zoneHref": "/zones/essonne",
      "title": "Dératisation à Ris-Orangis (91), intervention 7j/7",
      "description": "Rats et souris à Ris-Orangis : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Ris-Orangis, au bord de la Seine, mêle grands ensembles, quartiers pavillonnaires et parcs. Les rats bruns des berges et des espaces verts trouvent refuge dans les caves et les locaux poubelles.",
          "Nous intervenons pour les particuliers et les bailleurs : traitement des parties communes, puis des logements, et colmatage des accès."
      ],
      "lieux": [
          "Berges de la Seine",
          "Caves et locaux poubelles",
          "Parcs et espaces verts",
          "Sous-sols des pavillons"
      ],
      "proches": [
          "Évry-Courcouronnes",
          "Grigny",
          "Draveil",
          "Bondoufle"
      ],
      "guides": [
          "rat-dans-les-toilettes",
          "rat-vide-sanitaire",
          "deratisation-sans-mort-aux-rats"
      ],
      "faq": [
        {"q": "Peut-on dératiser sans raticide à Ris-Orangis ?", "a": "Oui, en méthode alternative, avec le piège multicapture Ekomille posé sur le passage des rongeurs. La méthode la plus courante reste les postes d'appâtage sécurisés."},
        ...FAQ_COMMUNE("à Ris-Orangis"),
      ]
    },
  {
      "slug": "viry-chatillon",
      "nom": "Viry-Châtillon",
      "a": "à Viry-Châtillon",
      "code": "91",
      "departement": "Essonne",
      "zoneHref": "/zones/essonne",
      "title": "Dératisation à Viry-Châtillon (91), intervention 7j/7",
      "description": "Rats et souris à Viry-Châtillon : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Viry-Châtillon, entre la Seine, l'Orge et ses étangs, compte des quartiers pavillonnaires, des résidences et des espaces verts. L'eau omniprésente favorise la présence de rats bruns.",
          "Dans les pavillons proches des berges, nous traitons les jardins et les sous-sols. Dans les résidences, nous intervenons sur les caves et locaux poubelles."
      ],
      "lieux": [
          "Berges de la Seine et de l’Orge",
          "Bords des étangs",
          "Caves des résidences",
          "Jardins et sous-sols"
      ],
      "proches": [
          "Grigny",
          "Savigny-sur-Orge",
          "Juvisy-sur-Orge",
          "Morsang-sur-Orge"
      ],
      "guides": [
          "trou-dans-le-jardin",
          "rat-compost",
          "rat-vide-sanitaire"
      ],
      "faq": [
        {"q": "Des trous dans le jardin à Viry-Châtillon : rat ou taupe ?", "a": "Un trou net de quelques centimètres avec une coulée vers une haie ou un abri est souvent celui d'un rat. Une taupe laisse plutôt des monticules de terre. Le technicien fait la différence sur place."},
        ...FAQ_COMMUNE("à Viry-Châtillon"),
      ]
    },
  {
      "slug": "meaux",
      "nom": "Meaux",
      "a": "à Meaux",
      "code": "77",
      "departement": "Seine-et-Marne",
      "zoneHref": "/zones/seine-et-marne",
      "title": "Dératisation à Meaux (77), intervention 7j/7",
      "description": "Rats et souris à Meaux : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Meaux, au bord de la Marne, réunit un centre historique autour de la cathédrale et de la cité épiscopale, des quartiers d'habitat collectif comme Beauval et Pierre-Collinet, et des zones pavillonnaires. Les berges et les caves anciennes attirent les rongeurs.",
          "Dans le centre, les commerces et restaurants demandent un suivi régulier. Dans les résidences, nous traitons les parties communes avec les bailleurs."
      ],
      "lieux": [
          "Berges de la Marne",
          "Caves du centre historique",
          "Locaux poubelles des résidences",
          "Réserves des commerces"
      ],
      "proches": [
          "Trilport",
          "Nanteuil-lès-Meaux",
          "Chauconin-Neufmontiers",
          "Mareuil-lès-Meaux"
      ],
      "guides": [
          "restaurant-plan-lutte-nuisibles",
          "rat-dans-les-murs-cloisons",
          "reproduction-des-rats"
      ],
      "faq": [
        {"q": "Intervenez-vous jusqu'à Meaux ?", "a": "Oui, nous intervenons en Seine-et-Marne, notamment à Meaux. Le délai dépend du planning du jour : appelez le 07 68 07 72 19 pour connaître la disponibilité."},
        ...FAQ_COMMUNE("à Meaux"),
      ]
    },
  {
      "slug": "chelles",
      "nom": "Chelles",
      "a": "à Chelles",
      "code": "77",
      "departement": "Seine-et-Marne",
      "zoneHref": "/zones/seine-et-marne",
      "title": "Dératisation à Chelles (77), intervention 7j/7",
      "description": "Rats et souris à Chelles : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Chelles, entre la Marne et la montagne de Chelles, est une grande ville pavillonnaire avec des quartiers de résidences. Les rats bruns des berges et des jardins s'approchent des maisons, surtout à l'automne.",
          "Nous inspectons les sous-sols, les garages et les jardins, puis nous posons un dispositif sécurisé et colmatons les accès."
      ],
      "lieux": [
          "Berges de la Marne",
          "Jardins et composts",
          "Sous-sols et garages",
          "Locaux poubelles des résidences"
      ],
      "proches": [
          "Vaires-sur-Marne",
          "Gagny",
          "Montfermeil",
          "Brou-sur-Chantereine"
      ],
      "guides": [
          "rat-compost",
          "rat-vide-sanitaire",
          "souris-par-ou-entrent-elles"
      ],
      "faq": [
        {"q": "Les rats de la Marne remontent-ils jusqu'aux maisons de Chelles ?", "a": "Oui, surtout quand l'eau monte ou quand le froid arrive. Les maisons proches des berges doivent surveiller leurs sous-sols et fermer les passages."},
        ...FAQ_COMMUNE("à Chelles"),
      ]
    },
  {
      "slug": "melun",
      "nom": "Melun",
      "a": "à Melun",
      "code": "77",
      "departement": "Seine-et-Marne",
      "zoneHref": "/zones/seine-et-marne",
      "title": "Dératisation à Melun (77), intervention 7j/7",
      "description": "Rats et souris à Melun : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Melun, préfecture de la Seine-et-Marne, s'est construite autour de l'île Saint-Étienne, sur la Seine. Le centre ancien, ses caves et ses commerces, ainsi que les berges, sont des zones où les rats s'installent.",
          "Dans les quartiers résidentiels, nous traitons les sous-sols, les jardins et les locaux poubelles, avec un colmatage adapté à chaque bâtiment."
      ],
      "lieux": [
          "Quais de la Seine",
          "Caves du centre ancien",
          "Réserves des commerces",
          "Locaux poubelles"
      ],
      "proches": [
          "Dammarie-les-Lys",
          "Le Mée-sur-Seine",
          "Vaux-le-Pénil",
          "Rubelles"
      ],
      "guides": [
          "rat-dans-les-murs-cloisons",
          "restaurant-plan-lutte-nuisibles",
          "rat-dans-les-toilettes"
      ],
      "faq": [
        {"q": "Les commerces du centre de Melun ont-ils des obligations contre les rats ?", "a": "Les établissements alimentaires doivent maîtriser les nuisibles. Nous mettons en place un plan de lutte avec postes numérotés et rapport à chaque passage."},
        ...FAQ_COMMUNE("à Melun"),
      ]
    },
  {
      "slug": "pontault-combault",
      "nom": "Pontault-Combault",
      "a": "à Pontault-Combault",
      "code": "77",
      "departement": "Seine-et-Marne",
      "zoneHref": "/zones/seine-et-marne",
      "title": "Dératisation à Pontault-Combault (77), intervention 7j/7",
      "description": "Rats et souris à Pontault-Combault : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Pontault-Combault est une ville surtout pavillonnaire, avec de nombreux jardins, des zones commerciales et des espaces boisés. Les souris et les rats y entrent par les garages, les vides sanitaires et les passages de tuyaux.",
          "Dans les zones commerciales, nous proposons un suivi régulier. Chez les particuliers, nous traitons et colmatons pour une protection durable."
      ],
      "lieux": [
          "Vides sanitaires",
          "Garages et abris de jardin",
          "Zones commerciales",
          "Lisières boisées"
      ],
      "proches": [
          "Roissy-en-Brie",
          "Émerainville",
          "Ozoir-la-Ferrière",
          "Le Plessis-Trévise"
      ],
      "guides": [
          "rat-vide-sanitaire",
          "rongeur-moteur-voiture-cables",
          "souris-par-ou-entrent-elles"
      ],
      "faq": [
        {"q": "Des câbles de voiture rongés à Pontault-Combault : est-ce un rat ?", "a": "Rats, souris et fouines peuvent ronger les câbles d'un moteur. Les traces et le lieu de stationnement aident à identifier l'animal ; pour les rongeurs, nous traitons le garage et ses abords."},
        ...FAQ_COMMUNE("à Pontault-Combault"),
      ]
    },
  {
      "slug": "savigny-le-temple",
      "nom": "Savigny-le-Temple",
      "a": "à Savigny-le-Temple",
      "code": "77",
      "departement": "Seine-et-Marne",
      "zoneHref": "/zones/seine-et-marne",
      "title": "Dératisation à Savigny-le-Temple (77), intervention 7j/7",
      "description": "Rats et souris à Savigny-le-Temple : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Savigny-le-Temple, ville de Sénart, compte des quartiers récents, des pavillons et des espaces boisés. Les rongeurs des bois et des champs voisins s'approchent des habitations à l'automne.",
          "Nous traitons les maisons, les résidences et les locaux d'activités, en repérant d'abord les accès : garages, aérations, passages de réseaux."
      ],
      "lieux": [
          "Lisières boisées",
          "Garages et sous-sols",
          "Locaux poubelles",
          "Aérations et passages de réseaux"
      ],
      "proches": [
          "Cesson",
          "Nandy",
          "Vert-Saint-Denis",
          "Saint-Pierre-du-Perray"
      ],
      "guides": [
          "souris-par-ou-entrent-elles",
          "lerot-grenier-combles",
          "trou-dans-le-jardin"
      ],
      "faq": [
        {"q": "Pourquoi plus de souris à Savigny-le-Temple à l'automne ?", "a": "Les champs et les bois voisins se vident après les récoltes et avec le froid : les souris cherchent un abri chauffé. C'est le moment de vérifier les bas de portes et les aérations."},
        ...FAQ_COMMUNE("à Savigny-le-Temple"),
      ]
    },
  {
      "slug": "bussy-saint-georges",
      "nom": "Bussy-Saint-Georges",
      "a": "à Bussy-Saint-Georges",
      "code": "77",
      "departement": "Seine-et-Marne",
      "zoneHref": "/zones/seine-et-marne",
      "title": "Dératisation à Bussy-Saint-Georges (77), intervention 7j/7",
      "description": "Rats et souris à Bussy-Saint-Georges : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Bussy-Saint-Georges, ville de Marne-la-Vallée, compte de nombreux quartiers récents, des résidences avec parkings souterrains et des espaces verts. Même dans le neuf, les rongeurs passent par les locaux techniques et les réseaux.",
          "Nous intervenons pour les particuliers, les copropriétés et les commerces, avec un traitement des parties communes et un colmatage des passages."
      ],
      "lieux": [
          "Parkings souterrains",
          "Locaux techniques et poubelles",
          "Espaces verts",
          "Garages des maisons"
      ],
      "proches": [
          "Bussy-Saint-Martin",
          "Collégien",
          "Montévrain",
          "Jossigny"
      ],
      "guides": [
          "rat-dans-les-toilettes",
          "souris-par-ou-entrent-elles",
          "restaurant-plan-lutte-nuisibles"
      ],
      "faq": [
        {"q": "Un logement neuf à Bussy-Saint-Georges peut-il avoir des rongeurs ?", "a": "Oui. Les rongeurs utilisent les gaines, les parkings et les passages de réseaux, même dans les bâtiments récents. Le colmatage autour des tuyaux est souvent la clé."},
        ...FAQ_COMMUNE("à Bussy-Saint-Georges"),
      ]
    },
  {
      "slug": "champs-sur-marne",
      "nom": "Champs-sur-Marne",
      "a": "à Champs-sur-Marne",
      "code": "77",
      "departement": "Seine-et-Marne",
      "zoneHref": "/zones/seine-et-marne",
      "title": "Dératisation à Champs-sur-Marne (77), intervention 7j/7",
      "description": "Rats et souris à Champs-sur-Marne : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Champs-sur-Marne, avec son château, son parc et la cité Descartes, mêle pavillons, résidences étudiantes et bords de Marne. Les rongeurs des berges et du parc s'approchent des bâtiments.",
          "Nous traitons les maisons, les résidences et les locaux, avec une attention particulière aux caves, aux parkings et aux jardins."
      ],
      "lieux": [
          "Bords de Marne",
          "Résidences et parkings",
          "Jardins des pavillons",
          "Locaux techniques"
      ],
      "proches": [
          "Noisiel",
          "Torcy",
          "Noisy-le-Grand",
          "Émerainville"
      ],
      "guides": [
          "rat-compost",
          "rat-vide-sanitaire",
          "souris-par-ou-entrent-elles"
      ],
      "faq": [
        {"q": "Intervenez-vous dans les résidences étudiantes de Champs-sur-Marne ?", "a": "Oui, pour les gestionnaires comme pour les étudiants. Le traitement des parties communes et des cuisines partagées est souvent prioritaire."},
        ...FAQ_COMMUNE("à Champs-sur-Marne"),
      ]
    },
  {
      "slug": "villeparisis",
      "nom": "Villeparisis",
      "a": "à Villeparisis",
      "code": "77",
      "departement": "Seine-et-Marne",
      "zoneHref": "/zones/seine-et-marne",
      "title": "Dératisation à Villeparisis (77), intervention 7j/7",
      "description": "Rats et souris à Villeparisis : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Villeparisis, traversée par le canal de l'Ourcq, est une ville pavillonnaire avec de nombreux jardins. Les berges du canal sont un milieu favorable aux rats bruns, qui gagnent les maisons voisines.",
          "Nous inspectons les jardins, les composts, les sous-sols et les garages, puis nous traitons et fermons les accès."
      ],
      "lieux": [
          "Berges du canal de l’Ourcq",
          "Jardins et composts",
          "Sous-sols et garages",
          "Abris de jardin"
      ],
      "proches": [
          "Mitry-Mory",
          "Claye-Souilly",
          "Vaujours",
          "Courtry"
      ],
      "guides": [
          "rat-compost",
          "trou-dans-le-jardin",
          "nourrir-oiseaux-pigeons-attire-rats"
      ],
      "faq": [
        {"q": "Le canal de l'Ourcq attire-t-il les rats à Villeparisis ?", "a": "Oui, ses berges offrent eau et terriers. Les maisons proches doivent éviter de laisser de la nourriture dehors et surveiller les abris de jardin."},
        ...FAQ_COMMUNE("à Villeparisis"),
      ]
    },
  {
      "slug": "dammarie-les-lys",
      "nom": "Dammarie-lès-Lys",
      "a": "à Dammarie-lès-Lys",
      "code": "77",
      "departement": "Seine-et-Marne",
      "zoneHref": "/zones/seine-et-marne",
      "title": "Dératisation à Dammarie-lès-Lys (77), intervention 7j/7",
      "description": "Rats et souris à Dammarie-lès-Lys : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Dammarie-lès-Lys, sur les bords de Seine face à Melun, compte des quartiers d'habitat collectif, des pavillons et des zones d'activités. Les berges et les espaces verts abritent des rats bruns.",
          "Dans les résidences, nous traitons les caves et les locaux poubelles avec les bailleurs ; dans les maisons, les jardins et les sous-sols."
      ],
      "lieux": [
          "Berges de la Seine",
          "Caves et locaux poubelles",
          "Zones d’activités",
          "Jardins des pavillons"
      ],
      "proches": [
          "Melun",
          "Le Mée-sur-Seine",
          "Boissise-le-Roi",
          "Chartrettes"
      ],
      "guides": [
          "rat-dans-les-toilettes",
          "reproduction-des-rats",
          "rat-vide-sanitaire"
      ],
      "faq": [
        {"q": "Des rats dans les caves à Dammarie-lès-Lys : qui doit agir ?", "a": "Les caves sont des parties communes : c'est au bailleur ou au syndic d'organiser la dératisation. Nous intervenons rapidement sur demande."},
        ...FAQ_COMMUNE("à Dammarie-lès-Lys"),
      ]
    },
  {
      "slug": "combs-la-ville",
      "nom": "Combs-la-Ville",
      "a": "à Combs-la-Ville",
      "code": "77",
      "departement": "Seine-et-Marne",
      "zoneHref": "/zones/seine-et-marne",
      "title": "Dératisation à Combs-la-Ville (77), intervention 7j/7",
      "description": "Rats et souris à Combs-la-Ville : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Combs-la-Ville, dans la vallée de l'Yerres, est une ville largement pavillonnaire avec des berges boisées et des parcs. Les rats et les souris des bords de rivière s'approchent des maisons.",
          "Nous inspectons les jardins, les sous-sols et les garages, et posons un dispositif adapté à la présence d'enfants et d'animaux."
      ],
      "lieux": [
          "Berges de l’Yerres",
          "Jardins et parcs",
          "Sous-sols et garages",
          "Abris de jardin"
      ],
      "proches": [
          "Moissy-Cramayel",
          "Quincy-sous-Sénart",
          "Brie-Comte-Robert",
          "Lieusaint"
      ],
      "guides": [
          "trou-dans-le-jardin",
          "rat-compost",
          "deratisation-sans-mort-aux-rats"
      ],
      "faq": [
        {"q": "Avec un chien, peut-on dératiser le jardin à Combs-la-Ville ?", "a": "Oui. Les postes sont verrouillés et inaccessibles aux animaux ; en alternative, nous pouvons utiliser le piège Ekomille, sans raticide."},
        ...FAQ_COMMUNE("à Combs-la-Ville"),
      ]
    },
  // ── Villes où seul un concurrent avait une page (93, 92, 94, 91, 95, 78), 12/11/2026 ──
  {
      "slug": "montreuil",
      "nom": "Montreuil",
      "a": "à Montreuil",
      "code": "93",
      "departement": "Seine-Saint-Denis",
      "zoneHref": "/zones/seine-saint-denis",
      "title": "Dératisation à Montreuil (93), rats et souris",
      "description": "Rats et souris à Montreuil : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Montreuil, aux portes de Paris, est l'une des plus grandes villes de Seine-Saint-Denis. Le Bas-Montreuil mêle immeubles anciens, anciens ateliers et cours intérieures ; le Haut-Montreuil, plus vert, compte de nombreux pavillons, des cités et les anciens murs à pêches. Les rongeurs trouvent partout de quoi s'abriter.",
          "Dans les immeubles, nous traitons les caves et les locaux poubelles en lien avec le syndic ou le bailleur. Dans les pavillons, nous inspectons les jardins, les composts, les sous-sols et les garages, puis nous bouchons les accès."
      ],
      "lieux": [
          "Caves et cours du Bas-Montreuil",
          "Jardins et murs à pêches du Haut-Montreuil",
          "Locaux poubelles des résidences",
          "Réserves des commerces et marchés"
      ],
      "proches": [
          "Bagnolet",
          "Vincennes",
          "Fontenay-sous-Bois",
          "Romainville"
      ],
      "guides": [
          "rat-compost",
          "rat-dans-les-murs-cloisons",
          "restaurant-plan-lutte-nuisibles"
      ],
      "faq": [
        {"q": "Les murs à pêches et les jardins du Haut-Montreuil attirent-ils les rats ?", "a": "Les jardins, composts et vergers offrent nourriture et abri aux rongeurs. Les maisons voisines doivent fermer leurs composts, ranger la nourriture des animaux et boucher les accès aux sous-sols."},
        ...FAQ_COMMUNE("à Montreuil"),
      ]
    },
  {
      "slug": "pantin",
      "nom": "Pantin",
      "a": "à Pantin",
      "code": "93",
      "departement": "Seine-Saint-Denis",
      "zoneHref": "/zones/seine-saint-denis",
      "title": "Dératisation à Pantin (93), rats et souris",
      "description": "Rats et souris à Pantin : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Pantin, entre Paris et Bobigny, est traversée par le canal de l'Ourcq. Anciens sites industriels transformés en bureaux et en logements, immeubles de faubourg, résidences et pavillons : la ville a beaucoup changé, mais l'eau du canal et les réseaux restent des couloirs pour les rats.",
          "Nous traitons les caves, les parkings et les locaux poubelles des résidences, ainsi que les commerces et restaurants, avec un rapport après chaque passage."
      ],
      "lieux": [
          "Berges du canal de l’Ourcq",
          "Caves et parkings des résidences",
          "Locaux poubelles",
          "Réserves des commerces"
      ],
      "proches": [
          "Le Pré-Saint-Gervais",
          "Bobigny",
          "Aubervilliers",
          "Les Lilas"
      ],
      "guides": [
          "rat-dans-les-toilettes",
          "rat-vide-sanitaire",
          "restaurant-plan-lutte-nuisibles"
      ],
      "faq": [
        {"q": "Le canal de l'Ourcq amène-t-il des rats à Pantin ?", "a": "Les berges du canal sont un milieu favorable aux surmulots. Les immeubles proches doivent surveiller leurs caves et parkings, et fermer les accès par les réseaux."},
        ...FAQ_COMMUNE("à Pantin"),
      ]
    },
  {
      "slug": "bagnolet",
      "nom": "Bagnolet",
      "a": "à Bagnolet",
      "code": "93",
      "departement": "Seine-Saint-Denis",
      "zoneHref": "/zones/seine-saint-denis",
      "title": "Dératisation à Bagnolet (93), rats et souris",
      "description": "Rats et souris à Bagnolet : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Bagnolet, à la porte de Paris, réunit des quartiers d'habitat collectif, des immeubles plus anciens et de nombreux pavillons sur ses hauteurs. Les grands axes, les centres commerciaux et les résidences offrent aux rongeurs nourriture et abri.",
          "Nous commençons toujours par les parties communes dans les résidences, puis les logements touchés. Dans les maisons, nous contrôlons jardins, sous-sols et garages."
      ],
      "lieux": [
          "Locaux poubelles et vide-ordures",
          "Caves des résidences",
          "Jardins des pavillons",
          "Abords des centres commerciaux"
      ],
      "proches": [
          "Montreuil",
          "Les Lilas",
          "Romainville",
          "Paris 20e"
      ],
      "guides": [
          "souris-par-ou-entrent-elles",
          "rat-dans-les-murs-cloisons",
          "reproduction-des-rats"
      ],
      "faq": [
        {"q": "Qui doit dératiser une résidence à Bagnolet ?", "a": "Les caves et les locaux poubelles sont des parties communes : c'est au bailleur ou au syndic d'organiser la dératisation. Les logements sont traités ensuite si besoin."},
        ...FAQ_COMMUNE("à Bagnolet"),
      ]
    },
  {
      "slug": "les-lilas",
      "nom": "Les Lilas",
      "a": "aux Lilas",
      "code": "93",
      "departement": "Seine-Saint-Denis",
      "zoneHref": "/zones/seine-saint-denis",
      "title": "Dératisation aux Lilas (93), rats et souris",
      "description": "Rats et souris aux Lilas : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Les Lilas est une petite ville dense, collée au 19e et au 20e arrondissement, avec des immeubles, des résidences et de nombreuses maisons de ville. Les caves, les cours et les jardins sont les endroits où l'on trouve des rongeurs.",
          "Dans une ville aussi resserrée, les rongeurs passent facilement d'un bâtiment à l'autre : nous cherchons toujours le point d'entrée avant de traiter."
      ],
      "lieux": [
          "Caves des immeubles",
          "Cours intérieures",
          "Jardins des maisons de ville",
          "Réserves des commerces"
      ],
      "proches": [
          "Bagnolet",
          "Romainville",
          "Le Pré-Saint-Gervais",
          "Paris 20e"
      ],
      "guides": [
          "souris-par-ou-entrent-elles",
          "rats-dans-les-combles",
          "rat-dans-les-murs-cloisons"
      ],
      "faq": [
        {"q": "Des souris dans une maison de ville aux Lilas : par où entrent-elles ?", "a": "Le plus souvent par les sous-sols, les soupiraux, les passages de tuyaux et les bas de portes. Nous traitons et bouchons ces accès."},
        ...FAQ_COMMUNE("aux Lilas"),
      ]
    },
  {
      "slug": "bobigny",
      "nom": "Bobigny",
      "a": "à Bobigny",
      "code": "93",
      "departement": "Seine-Saint-Denis",
      "zoneHref": "/zones/seine-saint-denis",
      "title": "Dératisation à Bobigny (93), rats et souris",
      "description": "Rats et souris à Bobigny : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Bobigny, préfecture de la Seine-Saint-Denis, est une ville de grands ensembles, d'équipements publics et de quartiers pavillonnaires, traversée par le canal de l'Ourcq. Les rongeurs y trouvent abri dans les caves, les locaux poubelles et le long du canal.",
          "Nous intervenons pour les particuliers, les bailleurs, les commerces et les établissements, avec un rapport à chaque passage."
      ],
      "lieux": [
          "Berges du canal de l’Ourcq",
          "Caves et locaux poubelles des cités",
          "Jardins des pavillons",
          "Abords des marchés et commerces"
      ],
      "proches": [
          "Pantin",
          "Drancy",
          "Noisy-le-Sec",
          "Romainville"
      ],
      "guides": [
          "rat-dans-les-toilettes",
          "reproduction-des-rats",
          "rat-vide-sanitaire"
      ],
      "faq": [
        {"q": "Les grands ensembles de Bobigny ont-ils plus de rats ?", "a": "Les locaux poubelles et vide-ordures des grandes résidences concentrent la nourriture, ce qui attire les rats. Une dératisation régulière des parties communes, organisée par le bailleur, est la base de la prévention."},
        ...FAQ_COMMUNE("à Bobigny"),
      ]
    },
  {
      "slug": "aulnay-sous-bois",
      "nom": "Aulnay-sous-Bois",
      "a": "à Aulnay-sous-Bois",
      "code": "93",
      "departement": "Seine-Saint-Denis",
      "zoneHref": "/zones/seine-saint-denis",
      "title": "Dératisation à Aulnay-sous-Bois (93), rats et souris",
      "description": "Rats et souris à Aulnay-sous-Bois : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Aulnay-sous-Bois est une grande ville de Seine-Saint-Denis, avec au sud de nombreux quartiers pavillonnaires et au nord de grands ensembles. Les jardins, les parcs et les résidences offrent aux rats et aux souris de nombreux abris.",
          "Dans les maisons, nous inspectons les jardins, les sous-sols et les garages. Dans les résidences, nous traitons les parties communes avec le bailleur."
      ],
      "lieux": [
          "Jardins et abris des pavillons",
          "Sous-sols et garages",
          "Locaux poubelles des résidences",
          "Abords des parcs"
      ],
      "proches": [
          "Sevran",
          "Villepinte",
          "Le Blanc-Mesnil",
          "Bondy"
      ],
      "guides": [
          "trou-dans-le-jardin",
          "rat-compost",
          "rongeur-moteur-voiture-cables"
      ],
      "faq": [
        {"q": "Des rats dans mon jardin à Aulnay-sous-Bois : que faire ?", "a": "Retirez la nourriture accessible (compost ouvert, graines, croquettes), repérez les terriers au pied des murs et faites poser des postes sécurisés. Nous bouchons ensuite les accès vers la maison."},
        ...FAQ_COMMUNE("à Aulnay-sous-Bois"),
      ]
    },
  {
      "slug": "livry-gargan",
      "nom": "Livry-Gargan",
      "a": "à Livry-Gargan",
      "code": "93",
      "departement": "Seine-Saint-Denis",
      "zoneHref": "/zones/seine-saint-denis",
      "title": "Dératisation à Livry-Gargan (93), rats et souris",
      "description": "Rats et souris à Livry-Gargan : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Livry-Gargan est une ville très pavillonnaire de l'est de la Seine-Saint-Denis, avec de grands jardins et des espaces boisés à proximité. Les rats et les souris y vivent surtout dans les jardins, les sous-sols et les garages.",
          "Nous adaptons le dispositif à chaque maison, avec des postes verrouillés ou un piège sans raticide pour les familles avec enfants et animaux."
      ],
      "lieux": [
          "Jardins et composts",
          "Sous-sols et garages",
          "Abris de jardin et tas de bois",
          "Bords du lac et des parcs"
      ],
      "proches": [
          "Sevran",
          "Clichy-sous-Bois",
          "Les Pavillons-sous-Bois",
          "Vaujours"
      ],
      "guides": [
          "trou-dans-le-jardin",
          "lerot-grenier-combles",
          "rat-compost"
      ],
      "faq": [
        {"q": "Peut-on dératiser un jardin à Livry-Gargan sans raticide ?", "a": "Oui, avec le piège Ekomille ou des pièges mécaniques. Nous choisissons la méthode avec vous selon la présence d'enfants et d'animaux."},
        ...FAQ_COMMUNE("à Livry-Gargan"),
      ]
    },
  {
      "slug": "epinay-sur-seine",
      "nom": "Épinay-sur-Seine",
      "a": "à Épinay-sur-Seine",
      "code": "93",
      "departement": "Seine-Saint-Denis",
      "zoneHref": "/zones/seine-saint-denis",
      "title": "Dératisation à Épinay-sur-Seine (93), rats et souris",
      "description": "Rats et souris à Épinay-sur-Seine : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Épinay-sur-Seine s'étend le long de la Seine, avec des quartiers d'habitat collectif comme Orgemont, un centre-ville rénové et des pavillons. Les berges et les résidences sont les lieux où les rats sont le plus présents.",
          "Nous traitons les caves, les parkings et les locaux poubelles des résidences avec les bailleurs, et les maisons proches des berges."
      ],
      "lieux": [
          "Berges de la Seine",
          "Caves et parkings des résidences",
          "Locaux poubelles",
          "Jardins des pavillons"
      ],
      "proches": [
          "Saint-Denis",
          "Villetaneuse",
          "Deuil-la-Barre",
          "Enghien-les-Bains"
      ],
      "guides": [
          "rat-dans-les-toilettes",
          "rat-vide-sanitaire",
          "reproduction-des-rats"
      ],
      "faq": [
        {"q": "Les crues de la Seine font-elles sortir les rats à Épinay ?", "a": "Oui, quand le fleuve monte, les rats quittent leurs terriers des berges et cherchent refuge dans les caves et les jardins proches. C'est souvent après ces épisodes que l'on nous appelle."},
        ...FAQ_COMMUNE("à Épinay-sur-Seine"),
      ]
    },
  {
      "slug": "malakoff",
      "nom": "Malakoff",
      "a": "à Malakoff",
      "code": "92",
      "departement": "Hauts-de-Seine",
      "zoneHref": "/zones/hauts-de-seine",
      "title": "Dératisation à Malakoff (92), rats et souris",
      "description": "Rats et souris à Malakoff : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Malakoff, collée au 14e arrondissement, est une petite ville dense, faite d'immeubles, d'anciens ateliers et de maisons avec jardin. Les caves, les cours et les jardins sont les lieux où l'on trouve des rongeurs.",
          "Nous traitons les parties communes avec le syndic, et les maisons en inspectant le jardin, le sous-sol et les accès."
      ],
      "lieux": [
          "Caves des immeubles",
          "Cours et anciens ateliers",
          "Jardins des maisons",
          "Réserves des commerces"
      ],
      "proches": [
          "Vanves",
          "Montrouge",
          "Châtillon",
          "Clamart"
      ],
      "guides": [
          "souris-par-ou-entrent-elles",
          "rat-dans-les-murs-cloisons",
          "rat-compost"
      ],
      "faq": [
        {"q": "Des rats dans la cour de mon immeuble à Malakoff : qui doit agir ?", "a": "La cour et les caves sont des parties communes : c'est au syndic d'organiser la dératisation. Nous intervenons à sa demande avec un rapport."},
        ...FAQ_COMMUNE("à Malakoff"),
      ]
    },
  {
      "slug": "vanves",
      "nom": "Vanves",
      "a": "à Vanves",
      "code": "92",
      "departement": "Hauts-de-Seine",
      "zoneHref": "/zones/hauts-de-seine",
      "title": "Dératisation à Vanves (92), rats et souris",
      "description": "Rats et souris à Vanves : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Vanves, entre Paris 15e, Issy-les-Moulineaux et Malakoff, est une petite ville dense, avec des immeubles, des résidences et des maisons sur les hauteurs. Les caves et les jardins sont les principaux points de passage des rongeurs.",
          "Nous commençons par repérer les accès, puis nous traitons et bouchons les passages trouvés."
      ],
      "lieux": [
          "Caves des immeubles",
          "Locaux poubelles",
          "Jardins des maisons",
          "Abords des parcs"
      ],
      "proches": [
          "Issy-les-Moulineaux",
          "Malakoff",
          "Clamart",
          "Paris 15e"
      ],
      "guides": [
          "souris-par-ou-entrent-elles",
          "rats-dans-les-combles",
          "rat-dans-les-toilettes"
      ],
      "faq": [
        {"q": "Des souris dans mon appartement à Vanves : faut-il traiter tout l'immeuble ?", "a": "Souvent oui : les souris circulent par les gaines et les caves. Nous traitons votre logement et conseillons au syndic de traiter les parties communes pour éviter le retour."},
        ...FAQ_COMMUNE("à Vanves"),
      ]
    },
  {
      "slug": "sceaux",
      "nom": "Sceaux",
      "a": "à Sceaux",
      "code": "92",
      "departement": "Hauts-de-Seine",
      "zoneHref": "/zones/hauts-de-seine",
      "title": "Dératisation à Sceaux (92), rats et souris",
      "description": "Rats et souris à Sceaux : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Sceaux est une ville résidentielle du sud des Hauts-de-Seine, connue pour son grand parc et son château. Les maisons avec jardin, les résidences et le centre commerçant sont les lieux où l'on rencontre des rongeurs.",
          "Les maisons proches du parc voient surtout des souris et des mulots à l'automne ; dans le centre, ce sont les commerces et les caves qui demandent un suivi."
      ],
      "lieux": [
          "Jardins des maisons",
          "Sous-sols et garages",
          "Commerces de la rue Houdan",
          "Abords du parc"
      ],
      "proches": [
          "Antony",
          "Bourg-la-Reine",
          "Fontenay-aux-Roses",
          "Châtenay-Malabry"
      ],
      "guides": [
          "lerot-grenier-combles",
          "trou-dans-le-jardin",
          "souris-par-ou-entrent-elles"
      ],
      "faq": [
        {"q": "Le parc de Sceaux amène-t-il des rongeurs dans les maisons ?", "a": "Les maisons en bordure du parc voient plus souvent des souris, des mulots et parfois des lérots entrer à l'automne. Boucher les accès des sous-sols et des combles est la meilleure prévention."},
        ...FAQ_COMMUNE("à Sceaux"),
      ]
    },
  {
      "slug": "bourg-la-reine",
      "nom": "Bourg-la-Reine",
      "a": "à Bourg-la-Reine",
      "code": "92",
      "departement": "Hauts-de-Seine",
      "zoneHref": "/zones/hauts-de-seine",
      "title": "Dératisation à Bourg-la-Reine (92), rats et souris",
      "description": "Rats et souris à Bourg-la-Reine : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Bourg-la-Reine, entre Sceaux, Antony et Cachan, est une ville résidentielle traversée par la RN 20, avec des immeubles le long des grands axes et de nombreuses maisons avec jardin. Les rongeurs fréquentent les jardins comme les caves.",
          "Nous inspectons les jardins, les sous-sols et les parties communes, puis nous posons un dispositif adapté et bouchons les accès."
      ],
      "lieux": [
          "Jardins et composts",
          "Sous-sols des maisons",
          "Caves des immeubles",
          "Commerces le long de la RN 20"
      ],
      "proches": [
          "Sceaux",
          "Antony",
          "Cachan",
          "L'Haÿ-les-Roses"
      ],
      "guides": [
          "rat-compost",
          "souris-par-ou-entrent-elles",
          "rat-vide-sanitaire"
      ],
      "faq": [
        {"q": "Un rat dans le jardin à Bourg-la-Reine : faut-il s'inquiéter ?", "a": "Un rat aperçu signale souvent un terrier à proximité. Retirez la nourriture accessible et faites poser des postes sécurisés avant qu'il n'entre dans la maison."},
        ...FAQ_COMMUNE("à Bourg-la-Reine"),
      ]
    },
  {
      "slug": "fontenay-aux-roses",
      "nom": "Fontenay-aux-Roses",
      "a": "à Fontenay-aux-Roses",
      "code": "92",
      "departement": "Hauts-de-Seine",
      "zoneHref": "/zones/hauts-de-seine",
      "title": "Dératisation à Fontenay-aux-Roses (92), rats et souris",
      "description": "Rats et souris à Fontenay-aux-Roses : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Fontenay-aux-Roses est une ville résidentielle des Hauts-de-Seine, sur un plateau, avec des résidences, des immeubles et de nombreuses maisons avec jardin. La Coulée verte et les parcs y offrent abri aux rongeurs.",
          "Nous traitons les maisons, les résidences et les commerces, avec des postes sécurisés ou un piège sans raticide."
      ],
      "lieux": [
          "Jardins des maisons",
          "Bords de la Coulée verte",
          "Caves des résidences",
          "Commerces du centre"
      ],
      "proches": [
          "Sceaux",
          "Châtillon",
          "Clamart",
          "Bagneux"
      ],
      "guides": [
          "trou-dans-le-jardin",
          "rat-compost",
          "lerot-grenier-combles"
      ],
      "faq": [
        {"q": "La Coulée verte attire-t-elle les rats à Fontenay-aux-Roses ?", "a": "Les espaces verts linéaires comme la Coulée verte servent de couloir aux rongeurs. Les maisons et résidences voisines doivent surveiller leurs jardins et leurs sous-sols."},
        ...FAQ_COMMUNE("à Fontenay-aux-Roses"),
      ]
    },
  {
      "slug": "la-garenne-colombes",
      "nom": "La Garenne-Colombes",
      "a": "à La Garenne-Colombes",
      "code": "92",
      "departement": "Hauts-de-Seine",
      "zoneHref": "/zones/hauts-de-seine",
      "title": "Dératisation à La Garenne-Colombes (92), rats et souris",
      "description": "Rats et souris à La Garenne-Colombes : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "La Garenne-Colombes, toute proche de La Défense, est une ville résidentielle avec beaucoup de pavillons, des immeubles et un centre commerçant. Les jardins, les caves et les commerces sont les lieux où l'on trouve des rongeurs.",
          "Nous inspectons jardins, sous-sols et parties communes, puis nous posons un dispositif adapté et bouchons les accès."
      ],
      "lieux": [
          "Jardins des pavillons",
          "Sous-sols et garages",
          "Caves des immeubles",
          "Commerces du centre"
      ],
      "proches": [
          "Colombes",
          "Bois-Colombes",
          "Courbevoie",
          "Nanterre"
      ],
      "guides": [
          "souris-par-ou-entrent-elles",
          "rongeur-moteur-voiture-cables",
          "rat-compost"
      ],
      "faq": [
        {"q": "Des câbles de voiture rongés à La Garenne-Colombes : est-ce un rat ?", "a": "Souvent un rat ou une souris, parfois une fouine. Une photo des dégâts et des traces nous permet de vous répondre et de proposer le bon traitement."},
        ...FAQ_COMMUNE("à La Garenne-Colombes"),
      ]
    },
  {
      "slug": "ablon-sur-seine",
      "nom": "Ablon-sur-Seine",
      "a": "à Ablon-sur-Seine",
      "code": "94",
      "departement": "Val-de-Marne",
      "zoneHref": "/zones/val-de-marne",
      "title": "Dératisation à Ablon-sur-Seine (94), rats et souris",
      "description": "Rats et souris à Ablon-sur-Seine : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Ablon-sur-Seine est une petite commune du Val-de-Marne au bord de la Seine, faite surtout de maisons avec jardin. Les berges du fleuve et les jardins sont les lieux où vivent les rats.",
          "Nous inspectons les jardins, les sous-sols et les garages, et posons un dispositif adapté à la présence d'enfants et d'animaux."
      ],
      "lieux": [
          "Berges de la Seine",
          "Jardins et composts",
          "Sous-sols et garages",
          "Abris de jardin"
      ],
      "proches": [
          "Villeneuve-le-Roi",
          "Athis-Mons",
          "Vigneux-sur-Seine",
          "Orly"
      ],
      "guides": [
          "trou-dans-le-jardin",
          "rat-compost",
          "rat-vide-sanitaire"
      ],
      "faq": [
        {"q": "Les crues de la Seine amènent-elles des rats à Ablon ?", "a": "Oui, quand le fleuve monte, les rats des berges cherchent refuge dans les jardins, les sous-sols et les garages proches. Nous intervenons rapidement après ces épisodes."},
        ...FAQ_COMMUNE("à Ablon-sur-Seine"),
      ]
    },
  {
      "slug": "rungis",
      "nom": "Rungis",
      "a": "à Rungis",
      "code": "94",
      "departement": "Val-de-Marne",
      "zoneHref": "/zones/val-de-marne",
      "title": "Dératisation à Rungis (94), rats et souris",
      "description": "Rats et souris à Rungis : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Rungis est connue pour son marché international, le plus grand marché de produits frais au monde, et pour ses zones d'activités. La commune elle-même compte aussi des quartiers résidentiels avec maisons et jardins.",
          "Pour les entreprises alimentaires et les entrepôts, nous mettons en place des plans de lutte avec postes numérotés et registre. Pour les particuliers, nous traitons maisons et jardins."
      ],
      "lieux": [
          "Entrepôts et quais de chargement",
          "Zones d’activités",
          "Jardins des maisons",
          "Locaux poubelles"
      ],
      "proches": [
          "Chevilly-Larue",
          "Thiais",
          "Wissous",
          "Fresnes"
      ],
      "guides": [
          "restaurant-plan-lutte-nuisibles",
          "rat-dans-les-murs-cloisons",
          "trou-dans-le-jardin"
      ],
      "faq": [
        {"q": "Faites-vous des contrats de dératisation pour les entreprises de Rungis ?", "a": "Oui. Nous posons des postes numérotés, assurons des passages programmés et remettons un rapport à chaque visite, utile pour les audits et contrôles sanitaires."},
        ...FAQ_COMMUNE("à Rungis"),
      ]
    },
  {
      "slug": "paray-vieille-poste",
      "nom": "Paray-Vieille-Poste",
      "a": "à Paray-Vieille-Poste",
      "code": "91",
      "departement": "Essonne",
      "zoneHref": "/zones/essonne",
      "title": "Dératisation à Paray-Vieille-Poste (91), rats et souris",
      "description": "Rats et souris à Paray-Vieille-Poste : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Paray-Vieille-Poste, au nord de l'Essonne, touche l'aéroport d'Orly. La commune est surtout faite de pavillons avec jardin, à côté de grandes zones d'activités.",
          "Nous traitons les maisons, les jardins et les entreprises, avec des postes sécurisés ou un piège sans raticide."
      ],
      "lieux": [
          "Jardins des pavillons",
          "Sous-sols et garages",
          "Zones d’activités",
          "Abris de jardin"
      ],
      "proches": [
          "Athis-Mons",
          "Orly",
          "Wissous",
          "Morangis"
      ],
      "guides": [
          "trou-dans-le-jardin",
          "rat-compost",
          "rongeur-moteur-voiture-cables"
      ],
      "faq": [
        {"q": "Des souris dans le garage à Paray-Vieille-Poste : que faire ?", "a": "Rangez les aliments et graines dans des bacs fermés et faites traiter le garage. Nous posons des postes sécurisés et bouchons les accès depuis le jardin."},
        ...FAQ_COMMUNE("à Paray-Vieille-Poste"),
      ]
    },
  {
      "slug": "wissous",
      "nom": "Wissous",
      "a": "à Wissous",
      "code": "91",
      "departement": "Essonne",
      "zoneHref": "/zones/essonne",
      "title": "Dératisation à Wissous (91), rats et souris",
      "description": "Rats et souris à Wissous : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Wissous, au nord de l'Essonne, garde un centre de village avec des maisons anciennes, entouré de quartiers pavillonnaires, de champs et de zones d'activités. Les rongeurs viennent des champs et des jardins.",
          "Nous traitons maisons, jardins et entreprises, et bouchons les accès vers les habitations."
      ],
      "lieux": [
          "Maisons anciennes du centre",
          "Jardins et potagers",
          "Bordures des champs",
          "Zones d’activités"
      ],
      "proches": [
          "Antony",
          "Massy",
          "Chilly-Mazarin",
          "Paray-Vieille-Poste"
      ],
      "guides": [
          "lerot-grenier-combles",
          "trou-dans-le-jardin",
          "rat-compost"
      ],
      "faq": [
        {"q": "Les champs autour de Wissous amènent-ils des souris ?", "a": "Oui, après les récoltes et à l'arrivée du froid, souris et mulots quittent les champs et s'approchent des maisons. Boucher les accès des sous-sols et des combles est la meilleure prévention."},
        ...FAQ_COMMUNE("à Wissous"),
      ]
    },
  {
      "slug": "bezons",
      "nom": "Bezons",
      "a": "à Bezons",
      "code": "95",
      "departement": "Val-d'Oise",
      "zoneHref": "/zones/val-d-oise",
      "title": "Dératisation à Bezons (95), rats et souris",
      "description": "Rats et souris à Bezons : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Bezons, dans le Val-d'Oise, est installée au bord de la Seine, face à Colombes et Nanterre. Résidences, immeubles et pavillons se partagent la ville, et les berges sont un lieu de vie pour les rats.",
          "Nous traitons les parties communes avec les bailleurs et syndics, et les maisons proches des berges."
      ],
      "lieux": [
          "Berges de la Seine",
          "Caves et locaux poubelles",
          "Jardins des pavillons",
          "Commerces du centre"
      ],
      "proches": [
          "Argenteuil",
          "Houilles",
          "Colombes",
          "Carrières-sur-Seine"
      ],
      "guides": [
          "rat-dans-les-toilettes",
          "rat-compost",
          "reproduction-des-rats"
      ],
      "faq": [
        {"q": "Les rats de la Seine entrent-ils dans les maisons à Bezons ?", "a": "Les maisons proches des berges sont plus exposées, surtout après les crues. Il faut surveiller les sous-sols et les jardins et boucher les accès."},
        ...FAQ_COMMUNE("à Bezons"),
      ]
    },
  {
      "slug": "goussainville",
      "nom": "Goussainville",
      "a": "à Goussainville",
      "code": "95",
      "departement": "Val-d'Oise",
      "zoneHref": "/zones/val-d-oise",
      "title": "Dératisation à Goussainville (95), rats et souris",
      "description": "Rats et souris à Goussainville : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Goussainville, dans l'est du Val-d'Oise, est proche de l'aéroport de Roissy-Charles-de-Gaulle. La ville compte de nombreux pavillons, des résidences et, au nord, le Vieux-Pays. Les champs voisins et les jardins abritent des rongeurs.",
          "Nous intervenons pour les particuliers, les bailleurs et les entreprises, avec des postes sécurisés et un colmatage des accès."
      ],
      "lieux": [
          "Jardins des pavillons",
          "Maisons anciennes du Vieux-Pays",
          "Caves et locaux poubelles",
          "Bordures des champs"
      ],
      "proches": [
          "Louvres",
          "Roissy-en-France",
          "Gonesse",
          "Le Thillay"
      ],
      "guides": [
          "trou-dans-le-jardin",
          "lerot-grenier-combles",
          "rat-compost"
      ],
      "faq": [
        {"q": "Les champs autour de Goussainville amènent-ils des rongeurs ?", "a": "Oui, souris et mulots quittent les champs après les récoltes et à l'automne pour s'approcher des maisons. Il faut boucher les accès des sous-sols et des combles."},
        ...FAQ_COMMUNE("à Goussainville"),
      ]
    },
  {
      "slug": "pontoise",
      "nom": "Pontoise",
      "a": "à Pontoise",
      "code": "95",
      "departement": "Val-d'Oise",
      "zoneHref": "/zones/val-d-oise",
      "title": "Dératisation à Pontoise (95), rats et souris",
      "description": "Rats et souris à Pontoise : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Pontoise, ville historique au bord de l'Oise, a un centre ancien perché, avec des maisons et immeubles en pierre, des caves profondes et des ruelles. Les berges de l'Oise et les jardins abritent aussi des rats.",
          "Dans le centre ancien, le repérage des accès par les caves est l'étape essentielle. Dans les maisons, nous traitons jardins et sous-sols."
      ],
      "lieux": [
          "Caves du centre ancien",
          "Berges de l’Oise",
          "Jardins des maisons",
          "Commerces et restaurants"
      ],
      "proches": [
          "Cergy",
          "Saint-Ouen-l’Aumône",
          "Osny",
          "Éragny"
      ],
      "guides": [
          "rat-dans-les-murs-cloisons",
          "rat-vide-sanitaire",
          "restaurant-plan-lutte-nuisibles"
      ],
      "faq": [
        {"q": "Les caves anciennes de Pontoise attirent-elles les rats ?", "a": "Oui. Les caves en pierre ont souvent des fissures et des passages anciens par lesquels les rongeurs circulent d'un bâtiment à l'autre. Une dératisation avec colmatage est la plus efficace."},
        ...FAQ_COMMUNE("à Pontoise"),
      ]
    },
  {
      "slug": "elancourt",
      "nom": "Élancourt",
      "a": "à Élancourt",
      "code": "78",
      "departement": "Yvelines",
      "zoneHref": "/zones/yvelines",
      "title": "Dératisation à Élancourt (78), rats et souris",
      "description": "Rats et souris à Élancourt : postes sécurisés, pièges, recherche et colmatage des accès. Techniciens Certibiocide, devis gratuit, garantie 1 an.",
      "contexte": [
          "Élancourt, dans l'agglomération de Saint-Quentin-en-Yvelines, réunit un vieux village, des quartiers pavillonnaires, des résidences et de grands espaces verts, dont la colline d'Élancourt. Les rongeurs y vivent dans les jardins et les espaces boisés.",
          "Nous traitons maisons, résidences et entreprises, avec des postes sécurisés ou un piège sans raticide."
      ],
      "lieux": [
          "Jardins des pavillons",
          "Abords des espaces verts et bois",
          "Caves et locaux poubelles des résidences",
          "Zones d’activités"
      ],
      "proches": [
          "Maurepas",
          "Trappes",
          "Plaisir",
          "La Verrière"
      ],
      "guides": [
          "trou-dans-le-jardin",
          "lerot-grenier-combles",
          "rat-compost"
      ],
      "faq": [
        {"q": "Les espaces verts d'Élancourt amènent-ils des souris dans les maisons ?", "a": "Les maisons proches des bois et de la colline voient plus souvent des souris et des mulots à l'automne. Boucher les accès des sous-sols et des combles est la meilleure prévention."},
        ...FAQ_COMMUNE("à Élancourt"),
      ]
    }
]

export function getVilleDeratisation(slug: string) {
  return VILLES_DERATISATION.find((v) => v.slug === slug)
}
