// Pages « Punaises de lit à [ville] » (/punaises-de-lit/[ville]) : 5 villes du Val-de-Marne.
// Cocon : pilier /services/punaises-de-lit, guides du blog punaises, pages communes du 94.
// Toutes les méthodes : cryogénie, vapeur sèche, protocole mixte (barrière très légère), insecticide, gestes maison.
// Règles CLAUDE.md : pas de chiffre inventé, pas de tiret long, pas de « naturel », « bio », « écologique », « sans danger ».

export const MAJ_PUNAISES = '2026-10-31'

export const SOURCES_PUNAISES = [
  { label: 'Stop Punaises, site du gouvernement', url: 'https://stop-punaises.gouv.fr/' },
  { label: 'Règlement (UE) n° 528/2012 sur les produits biocides (EUR-Lex)', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32012R0528' },
]

export const GUIDES_PUNAISES: Record<string, string> = {
  'punaises-de-lit-sans-insecticide': 'Punaises de lit sans insecticide : les méthodes',
  'cryogenie-punaises-de-lit': 'Cryogénie : principe et limites',
  'vapeur-seche-punaises-de-lit': 'Vapeur sèche : efficacité et limites',
  'insecticide-punaises-de-lit': 'Insecticide : le traitement choc',
  'punaises-de-lit-airbnb-location-courte-duree': 'Airbnb : traiter en urgence et relouer vite',
  'terre-de-diatomee-punaises-de-lit': 'Terre de diatomée : efficace ou piège ?',
}

// Toutes les méthodes proposées, communes aux 5 villes
export const METHODES_PUNAISES = [
  {
    titre: 'Cryogénie',
    tag: 'Sans insecticide',
    texte: 'Neige carbonique à environ −78 °C : le choc thermique tue les punaises et leurs œufs au contact. Sèche, sans résidu ni odeur, idéale pour les fentes, cadres de lit et plinthes.',
    guide: 'cryogenie-punaises-de-lit',
  },
  {
    titre: 'Vapeur sèche',
    tag: 'Sans insecticide',
    texte: 'Vapeur à très haute température et très peu humide, appliquée au contact : efficace sur les matelas, canapés, rideaux et moquettes. Le logement reste utilisable juste après.',
    guide: 'vapeur-seche-punaises-de-lit',
  },
  {
    titre: 'Protocole mixte',
    tag: 'Froid, vapeur et barrière légère',
    texte: 'Cryogénie et vapeur sur la literie et les textiles, plus une barrière insecticide très légère, sans odeur perceptible, sur les zones de passage. Elle garde une action rémanente et est renouvelée au deuxième passage.',
    guide: 'punaises-de-lit-airbnb-location-courte-duree',
  },
  {
    titre: 'Insecticide professionnel',
    tag: 'Traitement choc',
    texte: 'Pour les infestations importantes : insecticide rémanent sur les zones infestées et voisines, par un technicien Certibiocide. Absence de 4 heures en moyenne, puis passage de contrôle.',
    guide: 'insecticide-punaises-de-lit',
  },
]

export type VillePunaises = {
  slug: string
  nom: string
  a: string
  code: string
  departement: string
  zoneHref: string
  title: string
  description: string
  contexte: string[]
  proches: string[]
  guides: (keyof typeof GUIDES_PUNAISES)[]
  faq: { q: string; a: string }[]
}

const FAQ_COMMUNE = (a: string) => [
  { q: `Combien coûte un traitement des punaises de lit ${a} ?`, a: 'Le prix dépend de la surface, du nombre de pièces touchées et de la méthode choisie (cryogénie, vapeur sèche, protocole mixte ou insecticide). Le devis est gratuit et vous le connaissez avant toute intervention.' },
  { q: 'Quelle méthode choisir ?', a: 'Pour une infestation limitée, la cryogénie et la vapeur sèche permettent de traiter sans produit. Le protocole mixte ajoute une barrière très légère qui continue d\'agir. Pour une infestation importante, l\'insecticide professionnel reste le traitement le plus radical. Le technicien vous conseille après inspection.' },
]

export const VILLES_PUNAISES: VillePunaises[] = [
  {
    slug: 'le-perreux-sur-marne',
    nom: 'Le Perreux-sur-Marne',
    a: 'au Perreux-sur-Marne',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/le-perreux-sur-marne',
    title: 'Punaises de lit au Perreux-sur-Marne (94), intervention 7j/7',
    description: 'Punaises de lit au Perreux-sur-Marne : cryogénie, vapeur sèche, protocole mixte ou insecticide. Techniciens Certibiocide, jour même possible.',
    contexte: [
      'Au Perreux-sur-Marne, les punaises de lit ne viennent pas des bords de Marne : elles arrivent dans les valises au retour de vacances, avec un meuble ou un matelas d\'occasion, ou après un séjour à l\'hôtel. Maisons et appartements sont touchés de la même façon.',
      'Dans une maison avec plusieurs chambres, elles passent vite d\'une pièce à l\'autre. Plus on intervient tôt, plus le traitement est simple, et plus on peut privilégier la cryogénie et la vapeur sèche.',
    ],
    proches: ['Nogent-sur-Marne', 'Bry-sur-Marne', 'Champigny-sur-Marne', 'Fontenay-sous-Bois'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'insecticide-punaises-de-lit'],
    faq: [
      { q: 'Comment les punaises de lit arrivent-elles dans une maison ?', a: 'Le plus souvent dans les bagages au retour d\'un voyage, avec un meuble, un matelas ou des vêtements d\'occasion. Elles ne sont pas liées à la propreté du logement.' },
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
    title: 'Punaises de lit à Nogent-sur-Marne (94), intervention 7j/7',
    description: 'Punaises de lit à Nogent-sur-Marne : appartements, locations meublées, maisons. Cryogénie, vapeur sèche, protocole mixte ou insecticide. Certibiocide.',
    contexte: [
      'Entre le Bois de Vincennes et la Marne, Nogent-sur-Marne compte de nombreux appartements, résidences et locations meublées. En immeuble, les punaises de lit peuvent passer d\'un logement à l\'autre par les gaines et les cloisons : un signalement chez un voisin mérite une inspection.',
      'Pour les locations de courte durée, nous proposons une intervention rapide par cryogénie et vapeur sèche, avec une barrière très légère, pour relouer au plus vite.',
    ],
    proches: ['Le Perreux-sur-Marne', 'Fontenay-sous-Bois', 'Joinville-le-Pont', 'Vincennes'],
    guides: ['punaises-de-lit-airbnb-location-courte-duree', 'vapeur-seche-punaises-de-lit', 'punaises-de-lit-sans-insecticide'],
    faq: [
      { q: 'Mon voisin a des punaises de lit : dois-je m\'inquiéter ?', a: 'En immeuble, elles peuvent passer par les gaines, les cloisons et les parties communes. Surveillez les signes (piqûres au réveil, petites taches noires sur le matelas) et faites inspecter votre logement au moindre doute.' },
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
    title: 'Punaises de lit à Bry-sur-Marne (94), intervention 7j/7',
    description: 'Punaises de lit à Bry-sur-Marne : maisons et appartements. Cryogénie, vapeur sèche, protocole mixte ou insecticide. Techniciens Certibiocide, devis gratuit.',
    contexte: [
      'À Bry-sur-Marne, commune résidentielle et familiale, les punaises de lit arrivent surtout avec les voyages, les meubles chinés et les séjours d\'enfants en colonie ou chez des proches. Un sac posé sur un lit suffit à en ramener.',
      'Dans les chambres d\'enfants, beaucoup de parents préfèrent un traitement sans produit : la cryogénie et la vapeur sèche traitent la literie et les jouets en tissu sans laisser de résidu.',
      'Dans une maison, les punaises ne restent pas dans une seule pièce : elles voyagent avec le linge, les valises et les enfants qui changent de chambre. Nous traitons chaque pièce où quelqu\'un dort, chambre d\'amis comprise.',
    ],
    proches: ['Le Perreux-sur-Marne', 'Champigny-sur-Marne', 'Villiers-sur-Marne', 'Nogent-sur-Marne'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Peut-on traiter une chambre d\'enfant sans produit ?', a: 'Oui. La cryogénie et la vapeur sèche n\'utilisent aucun produit et ne laissent ni résidu ni odeur. La chambre peut être utilisée juste après l\'intervention.' },
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
    title: 'Punaises de lit à Sucy-en-Brie (94), intervention 7j/7',
    description: 'Punaises de lit à Sucy-en-Brie : maisons, résidences, appartements. Cryogénie, vapeur sèche, protocole mixte ou insecticide. Techniciens Certibiocide.',
    contexte: [
      'Sucy-en-Brie mêle centre ancien, quartiers pavillonnaires et résidences. Les punaises de lit s\'y installent comme partout : au retour d\'un voyage, avec un meuble d\'occasion ou par un logement voisin en résidence.',
      'Dans les maisons anciennes, elles se cachent aussi dans les parquets, les fissures et derrière les plinthes. Quand l\'infestation a gagné la structure, le traitement insecticide professionnel reste la solution la plus radicale.',
    ],
    proches: ['Boissy-Saint-Léger', 'Bonneuil-sur-Marne', 'Ormesson-sur-Marne', 'Noiseau', 'Chennevières-sur-Marne'],
    guides: ['insecticide-punaises-de-lit', 'punaises-de-lit-sans-insecticide', 'terre-de-diatomee-punaises-de-lit'],
    faq: [
      { q: 'Les punaises de lit peuvent-elles se cacher dans le parquet ?', a: 'Oui, dans les fentes du parquet, derrière les plinthes et dans les fissures des murs. Ces zones demandent un traitement précis : cryogénie, ou insecticide professionnel en cas d\'infestation importante.' },
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
    title: 'Punaises de lit à Santeny (94), intervention 7j/7',
    description: 'Punaises de lit à Santeny : maisons, chambres, mobilier. Cryogénie, vapeur sèche, protocole mixte ou insecticide. Techniciens Certibiocide, devis gratuit.',
    contexte: [
      'On pense souvent que les punaises de lit ne touchent que les grandes villes. À Santeny comme ailleurs, elles arrivent dans les bagages, avec un meuble de brocante ou après un séjour à l\'hôtel. La campagne ne protège pas.',
      'Dans une grande maison, l\'enjeu est de traiter toutes les chambres concernées et le mobilier avant qu\'elles ne se répandent. Nous proposons toutes les méthodes, avec ou sans produit.',
    ],
    proches: ['Villecresnes', 'Marolles-en-Brie', 'Mandres-les-Roses', 'Périgny'],
    guides: ['punaises-de-lit-sans-insecticide', 'vapeur-seche-punaises-de-lit', 'insecticide-punaises-de-lit'],
    faq: [
      { q: 'Un meuble de brocante peut-il ramener des punaises de lit ?', a: 'Oui, surtout les lits, sommiers, fauteuils et tables de chevet. Inspectez les fentes et les coutures avant de le rentrer, et traitez-le à la vapeur sèche en cas de doute.' },
      ...FAQ_COMMUNE('à Santeny'),
    ],
  },

  // ── Portes de Paris ──
  {
    slug: 'vincennes',
    nom: 'Vincennes',
    a: 'à Vincennes',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/vincennes',
    title: 'Punaises de lit à Vincennes (94), intervention 7j/7',
    description: 'Punaises de lit à Vincennes : appartements, copropriétés, locations meublées. Cryogénie, vapeur sèche, protocole mixte ou insecticide. Certibiocide.',
    contexte: [
      'Aux portes de Paris, Vincennes compte surtout des immeubles anciens et des appartements, avec beaucoup de passages : voyageurs, étudiants, locations meublées. Les punaises de lit y arrivent par les bagages, puis peuvent gagner les logements voisins par les gaines et les parties communes.',
      'En appartement occupé, beaucoup de familles préfèrent un traitement sans produit. La cryogénie et la vapeur sèche permettent de rester chez soi, et le protocole mixte ajoute une barrière très légère qui continue d\'agir.',
    ],
    proches: ['Saint-Mandé', 'Fontenay-sous-Bois', 'Nogent-sur-Marne', 'Charenton-le-Pont'],
    guides: ['punaises-de-lit-sans-insecticide', 'punaises-de-lit-airbnb-location-courte-duree', 'cryogenie-punaises-de-lit'],
    faq: [
      { q: 'Faut-il prévenir le syndic en cas de punaises de lit ?', a: 'C\'est conseillé en copropriété : les punaises peuvent passer d\'un logement à l\'autre. Prévenir le syndic permet d\'organiser une inspection des logements voisins et d\'éviter une réinfestation.' },
      ...FAQ_COMMUNE('à Vincennes'),
    ],
  },
  {
    slug: 'saint-mande',
    nom: 'Saint-Mandé',
    a: 'à Saint-Mandé',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/saint-mande',
    title: 'Punaises de lit à Saint-Mandé (94), intervention 7j/7',
    description: 'Punaises de lit à Saint-Mandé : appartements et résidences. Cryogénie, vapeur sèche, protocole mixte ou insecticide. Techniciens Certibiocide, devis gratuit.',
    contexte: [
      'Petite commune résidentielle entre Paris et le Bois de Vincennes, Saint-Mandé est surtout composée d\'immeubles et d\'appartements. Les punaises de lit y arrivent après un voyage, un séjour à l\'hôtel ou avec un meuble d\'occasion.',
      'Un traitement rapide limite le risque de propagation aux logements voisins. Selon l\'infestation, nous proposons la cryogénie et la vapeur sèche, le protocole mixte avec barrière très légère, ou l\'insecticide professionnel.',
    ],
    proches: ['Vincennes', 'Charenton-le-Pont', 'Saint-Maurice', 'Fontenay-sous-Bois'],
    guides: ['punaises-de-lit-sans-insecticide', 'vapeur-seche-punaises-de-lit', 'insecticide-punaises-de-lit'],
    faq: [
      { q: 'Quels sont les premiers signes de punaises de lit ?', a: 'Des piqûres groupées ou en ligne au réveil, de petites taches noires ou de sang sur les draps et le matelas, et parfois des insectes bruns de la taille d\'un pépin de pomme dans les coutures.' },
      ...FAQ_COMMUNE('à Saint-Mandé'),
    ],
  },
  {
    slug: 'saint-maurice',
    nom: 'Saint-Maurice',
    a: 'à Saint-Maurice',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/saint-maurice',
    title: 'Punaises de lit à Saint-Maurice (94), intervention 7j/7',
    description: 'Punaises de lit à Saint-Maurice : appartements, résidences, maisons. Cryogénie, vapeur sèche, protocole mixte ou insecticide. Techniciens Certibiocide.',
    contexte: [
      'Entre la Marne et le Bois de Vincennes, Saint-Maurice associe résidences, appartements et maisons. Comme dans toutes les communes proches de Paris, les punaises de lit voyagent avec les bagages et les meubles, et circulent d\'un logement à l\'autre en immeuble.',
      'Nous adaptons la méthode au logement : cryogénie et vapeur sèche pour traiter sans produit, protocole mixte pour une protection qui dure, ou insecticide professionnel pour les infestations installées.',
    ],
    proches: ['Charenton-le-Pont', 'Maisons-Alfort', 'Joinville-le-Pont', 'Saint-Maur-des-Fossés'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'insecticide-punaises-de-lit'],
    faq: [
      { q: 'Les bombes anti-punaises du commerce suffisent-elles ?', a: 'Non. Selon le site du gouvernement stop-punaises.gouv.fr, les insecticides courants sont inefficaces, et les aérosols dispersent les punaises vers d\'autres pièces. Un traitement professionnel est nécessaire.' },
      ...FAQ_COMMUNE('à Saint-Maurice'),
    ],
  },
  {
    slug: 'charenton-le-pont',
    nom: 'Charenton-le-Pont',
    a: 'à Charenton-le-Pont',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/charenton-le-pont',
    title: 'Punaises de lit à Charenton-le-Pont (94), intervention 7j/7',
    description: 'Punaises de lit à Charenton-le-Pont : appartements, copropriétés, locations meublées. Cryogénie, vapeur sèche, protocole mixte ou insecticide.',
    contexte: [
      'Aux portes de Paris, au confluent de la Seine et de la Marne, Charenton-le-Pont est une commune dense, faite d\'immeubles et d\'appartements. Les allers-retours quotidiens, les voyages et les locations meublées multiplient les occasions de ramener des punaises de lit.',
      'Pour les propriétaires de locations courte durée, nous intervenons en urgence avec un protocole pensé pour relouer vite : cryogénie, vapeur sèche et barrière très légère renouvelée au deuxième passage.',
    ],
    proches: ['Saint-Maurice', 'Maisons-Alfort', 'Ivry-sur-Seine', 'Saint-Mandé'],
    guides: ['punaises-de-lit-airbnb-location-courte-duree', 'punaises-de-lit-sans-insecticide', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Je loue mon appartement en courte durée : combien de temps sera-t-il bloqué ?', a: 'Le moins possible. La cryogénie et la vapeur sèche ne demandent aucune attente, et la barrière très légère ne demande qu\'un court temps de séchage indiqué par le technicien. Le deuxième passage se cale entre deux séjours.' },
      ...FAQ_COMMUNE('à Charenton-le-Pont'),
    ],
  },
  // ── 15 communes du 94 (01/11/2026) : cryogénie et vapeur sèche mises en avant ──
  {
    slug: 'creteil',
    nom: 'Créteil',
    a: 'à Créteil',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/creteil',
    title: 'Punaises de lit à Créteil (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Créteil : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Créteil, ville universitaire, les déménagements, colocations et résidences étudiantes sont nombreux. Les punaises de lit voyagent dans les cartons, les valises et les matelas qui passent d\'un logement à l\'autre.',
      'Dans un studio ou une chambre, une infestation repérée tôt se traite très bien sans insecticide : la cryogénie et la vapeur sèche tuent punaises et œufs au contact, et la chambre est utilisable le soir même.',
    ],
    proches: ['Maisons-Alfort', 'Saint-Maur-des-Fossés', 'Alfortville', 'Bonneuil-sur-Marne'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Je déménage : comment éviter d\'emporter des punaises de lit ?', a: 'Inspectez le lit, le canapé et les cartons avant de partir, lavez le linge à 60 °C et transportez-le dans des sacs fermés. En cas de doute, faites traiter l\'ancien logement avant le départ, à la cryogénie ou à la vapeur sèche.' },
      ...FAQ_COMMUNE('à Créteil'),
    ],
  },
  {
    slug: 'vitry-sur-seine',
    nom: 'Vitry-sur-Seine',
    a: 'à Vitry-sur-Seine',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/vitry-sur-seine',
    title: 'Punaises de lit à Vitry-sur-Seine (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Vitry-sur-Seine : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Vitry-sur-Seine, beaucoup d\'habitants vivent en immeuble. Les punaises de lit passent d\'un appartement à l\'autre par les gaines, les plinthes et les passages de câbles : quand un logement est touché, les voisins doivent être vérifiés.',
      'Nous proposons aussi la cryogénie et la vapeur sèche, sans insecticide, qui permettent aux familles de rester chez elles. Pour une infestation installée dans plusieurs pièces, un traitement insecticide professionnel peut compléter.',
    ],
    proches: ['Ivry-sur-Seine', 'Villejuif', 'Choisy-le-Roi', 'Alfortville'],
    guides: ['punaises-de-lit-sans-insecticide', 'insecticide-punaises-de-lit', 'cryogenie-punaises-de-lit'],
    faq: [
      { q: 'Locataire : le bailleur doit-il payer le traitement ?', a: 'Depuis la loi ELAN de 2018, l\'absence d\'espèces nuisibles et parasites fait partie des critères du logement décent. Prévenez votre bailleur par écrit dès les premiers signes ; la prise en charge dépend notamment de l\'origine de l\'infestation.' },
      ...FAQ_COMMUNE('à Vitry-sur-Seine'),
    ],
  },
  {
    slug: 'champigny-sur-marne',
    nom: 'Champigny-sur-Marne',
    a: 'à Champigny-sur-Marne',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/champigny-sur-marne',
    title: 'Punaises de lit à Champigny-sur-Marne : cryogénie, vapeur',
    description: 'Punaises de lit à Champigny-sur-Marne : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Champigny-sur-Marne, beaucoup de familles vivent en pavillon, avec plusieurs chambres d\'enfants. Les punaises de lit y arrivent souvent au retour de vacances ou de colonie, cachées dans les sacs et les valises.',
      'Pour une chambre d\'enfant, nous proposons la cryogénie et la vapeur sèche, sans insecticide : aucun insecticide n\'est appliqué sur le lit, les peluches ou le linge, et l\'enfant peut y dormir le soir même.',
    ],
    proches: ['Saint-Maur-des-Fossés', 'Le Perreux-sur-Marne', 'Villiers-sur-Marne', 'Chennevières-sur-Marne'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Peut-on traiter une chambre d\'enfant sans insecticide ?', a: 'Oui. La cryogénie et la vapeur sèche tuent les punaises et leurs œufs au contact, sans produit. Le lit, les peluches et les textiles sont traités, et la chambre est utilisable juste après. Un second passage contrôle le résultat.' },
      ...FAQ_COMMUNE('à Champigny-sur-Marne'),
    ],
  },
  {
    slug: 'saint-maur-des-fosses',
    nom: 'Saint-Maur-des-Fossés',
    a: 'à Saint-Maur-des-Fossés',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/saint-maur-des-fosses',
    title: 'Punaises de lit à Saint-Maur-des-Fossés : cryogénie, vapeur',
    description: 'Punaises de lit à Saint-Maur-des-Fossés : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Saint-Maur-des-Fossés, les grandes maisons ont souvent des meubles anciens, des têtes de lit en bois, des fauteuils et des tapis, parfois achetés en brocante. Les punaises de lit se cachent dans les fentes du bois et les coutures des tissus.',
      'La cryogénie, sèche et sans résidu, convient très bien aux meubles anciens et aux tissus délicats ; la vapeur sèche traite les matelas, canapés et rideaux. Aucun insecticide n\'est nécessaire pour une infestation repérée tôt.',
    ],
    proches: ['Créteil', 'Joinville-le-Pont', 'Champigny-sur-Marne', 'Bonneuil-sur-Marne'],
    guides: ['cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit', 'terre-de-diatomee-punaises-de-lit'],
    faq: [
      { q: 'Un meuble chiné peut-il apporter des punaises de lit ?', a: 'Oui, surtout les lits, sommiers, fauteuils et commodes en bois. Inspectez les fentes et les coutures avant de le rentrer chez vous. En cas de doute, un passage à la cryogénie traite le meuble sans l\'abîmer.' },
      ...FAQ_COMMUNE('à Saint-Maur-des-Fossés'),
    ],
  },
  {
    slug: 'ivry-sur-seine',
    nom: 'Ivry-sur-Seine',
    a: 'à Ivry-sur-Seine',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/ivry-sur-seine',
    title: 'Punaises de lit à Ivry-sur-Seine (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Ivry-sur-Seine : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Ivry-sur-Seine attire beaucoup de jeunes actifs et de colocataires, qui s\'équipent souvent d\'occasion : matelas, sommiers, canapés achetés en ligne. C\'est l\'une des premières causes d\'arrivée des punaises de lit dans un logement.',
      'Pour un appartement, nous traitons à la cryogénie et à la vapeur sèche, sans insecticide, avec deux passages inclus pour atteindre les punaises issues des œufs.',
    ],
    proches: ['Vitry-sur-Seine', 'Le Kremlin-Bicêtre', 'Charenton-le-Pont', 'Villejuif'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Matelas ou canapé d\'occasion : comment vérifier qu\'il n\'a pas de punaises ?', a: 'Avant de l\'acheter, inspectez les coutures, les angles et le dessous avec une lampe : cherchez de petites taches noires, des mues ou des insectes bruns. En cas de doute, ne le rentrez pas chez vous sans traitement.' },
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
    title: 'Punaises de lit à Maisons-Alfort (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Maisons-Alfort : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Maisons-Alfort, beaucoup de foyers vivent avec un chien ou un chat. Les familles cherchent alors un traitement contre les punaises de lit qui n\'expose pas leurs animaux à un produit.',
      'La cryogénie et la vapeur sèche répondent à cette attente : aucun insecticide n\'est appliqué, et les animaux retrouvent la pièce dès la fin de l\'intervention. Pendant le passage, ils sont simplement tenus à l\'écart.',
    ],
    proches: ['Alfortville', 'Créteil', 'Charenton-le-Pont', 'Saint-Maurice'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Mon chien ou mon chat peut-il rester pendant le traitement ?', a: 'Pendant la cryogénie ou la vapeur, gardez-le dans une autre pièce, le temps de l\'intervention. Aucun produit n\'est appliqué : il peut revenir dès la fin. Les punaises de lit ne vivent pas sur les animaux comme les puces.' },
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
    title: 'Punaises de lit à Fontenay-sous-Bois : cryogénie, vapeur',
    description: 'Punaises de lit à Fontenay-sous-Bois : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Fontenay-sous-Bois accueille des quartiers résidentiels et le quartier d\'affaires du Val de Fontenay. Les punaises de lit ne touchent pas que les chambres : on en trouve aussi dans des bureaux, des salles de repos ou des vestiaires.',
      'Pour un logement comme pour des locaux professionnels, la cryogénie et la vapeur sèche permettent de traiter sans insecticide et sans arrêter l\'activité, avec une intervention discrète.',
    ],
    proches: ['Vincennes', 'Nogent-sur-Marne', 'Le Perreux-sur-Marne', 'Saint-Mandé'],
    guides: ['punaises-de-lit-sans-insecticide', 'vapeur-seche-punaises-de-lit', 'cryogenie-punaises-de-lit'],
    faq: [
      { q: 'Peut-on avoir des punaises de lit au bureau ?', a: 'Oui : elles voyagent dans les sacs et les manteaux et peuvent s\'installer dans les fauteuils, canapés de repos ou vestiaires. Nous intervenons en dehors des heures d\'activité, à la cryogénie ou à la vapeur sèche.' },
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
    title: 'Punaises de lit à Villejuif (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Villejuif : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Villejuif, de nombreuses jeunes familles cherchent un traitement contre les punaises de lit compatible avec une grossesse ou l\'arrivée d\'un bébé. C\'est exactement le cas où l\'on évite l\'insecticide.',
      'La cryogénie et la vapeur sèche traitent le lit, le berceau, les textiles et les plinthes sans aucun produit. Le logement est utilisable juste après, sans odeur.',
      'Pour les personnes qui travaillent en horaires décalés, nous intervenons tôt le matin ou en soirée, selon les disponibilités, afin de ne pas bloquer votre journée de repos.',
    ],
    proches: ['Le Kremlin-Bicêtre', 'Vitry-sur-Seine', 'Cachan', 'L\'Haÿ-les-Roses'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Enceinte ou avec un bébé : quel traitement choisir ?', a: 'Nous recommandons la cryogénie et la vapeur sèche, qui n\'appliquent aucun produit. Le logement reste utilisable juste après. Pour toute question de santé liée aux piqûres, parlez-en à votre médecin ou à votre sage-femme.' },
      ...FAQ_COMMUNE('à Villejuif'),
    ],
  },
  {
    slug: 'alfortville',
    nom: 'Alfortville',
    a: 'à Alfortville',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/alfortville',
    title: 'Punaises de lit à Alfortville (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Alfortville : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Alfortville, bien desservie par le RER, beaucoup d\'habitants voyagent pour le travail ou les vacances. Les punaises de lit reviennent souvent dans une valise, après une nuit à l\'hôtel ou en location.',
      'Une infestation détectée dès les premières piqûres se traite sans insecticide, à la cryogénie et à la vapeur sèche, avec un second passage de contrôle.',
    ],
    proches: ['Maisons-Alfort', 'Vitry-sur-Seine', 'Créteil', 'Ivry-sur-Seine'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'punaises-de-lit-airbnb-location-courte-duree'],
    faq: [
      { q: 'Au retour de voyage, que faire de sa valise ?', a: 'Défaites-la hors de la chambre, de préférence dans la salle de bain, lavez le linge à 60 °C et inspectez les coutures de la valise. Si vous avez été piqué en voyage, surveillez votre lit les semaines suivantes.' },
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
    title: 'Punaises de lit à Choisy-le-Roi (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Choisy-le-Roi : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Choisy-le-Roi, proche de l\'aéroport d\'Orly, on trouve des hôtels, des meublés et des locations de courte durée, où les voyageurs se succèdent. Ce sont des lieux exposés aux punaises de lit.',
      'Pour les loueurs et les hôteliers, la cryogénie et la vapeur sèche permettent de traiter une chambre et de la relouer vite, sans odeur ni temps d\'absence.',
    ],
    proches: ['Thiais', 'Vitry-sur-Seine', 'Orly', 'Villeneuve-le-Roi'],
    guides: ['punaises-de-lit-airbnb-location-courte-duree', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Hôtel ou meublé de tourisme : pouvez-vous intervenir discrètement ?', a: 'Oui : véhicule banalisé, intervention en dehors des arrivées, traitement à la cryogénie et à la vapeur sèche pour remettre la chambre en location rapidement. Une attestation est remise pour vos clients ou votre assurance.' },
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
    title: 'Punaises de lit au Kremlin-Bicêtre (94) : cryogénie, vapeur',
    description: 'Punaises de lit au Kremlin-Bicêtre : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Au Kremlin-Bicêtre, ville très dense, beaucoup d\'habitants vivent dans de petits appartements et des colocations. Dans un studio, les punaises de lit se concentrent autour du lit et du canapé, à quelques mètres l\'un de l\'autre.',
      'Ce type de logement se traite très bien à la cryogénie et à la vapeur sèche, sans insecticide, en une intervention de quelques heures, et deux passages sont inclus.',
    ],
    proches: ['Villejuif', 'Ivry-sur-Seine', 'Gentilly', 'Arcueil'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Faut-il jeter le matelas ?', a: 'Pas en général. La vapeur sèche traite le matelas en profondeur, et une housse anti-punaises posée après le traitement l\'isole. Jeter le matelas sans traiter le reste du logement ne règle rien.' },
      ...FAQ_COMMUNE('au Kremlin-Bicêtre'),
    ],
  },
  {
    slug: 'cachan',
    nom: 'Cachan',
    a: 'à Cachan',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/cachan',
    title: 'Punaises de lit à Cachan (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Cachan : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Cachan, ville étudiante, les résidences et les logements partagés accueillent de nombreux occupants successifs. Une chambre touchée peut contaminer les chambres voisines si elle n\'est pas traitée rapidement.',
      'Nous intervenons chambre par chambre à la cryogénie et à la vapeur sèche, sans insecticide, et nous conseillons au gestionnaire de vérifier les chambres mitoyennes.',
    ],
    proches: ['Arcueil', 'L\'Haÿ-les-Roses', 'Villejuif', 'Bagneux'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Peut-on traiter une seule chambre dans une résidence ?', a: 'Oui, si l\'infestation est limitée. Mais les chambres voisines doivent être inspectées, car les punaises passent par les plinthes et les gaines. Le gestionnaire peut organiser une inspection coordonnée.' },
      ...FAQ_COMMUNE('à Cachan'),
    ],
  },
  {
    slug: 'l-hay-les-roses',
    nom: 'L\'Haÿ-les-Roses',
    a: 'à L\'Haÿ-les-Roses',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/l-hay-les-roses',
    title: 'Punaises de lit à L\'Haÿ-les-Roses (94) : cryogénie, vapeur',
    description: 'Punaises de lit à L\'Haÿ-les-Roses : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À L\'Haÿ-les-Roses, ville familiale et pavillonnaire, les punaises de lit s\'installent souvent dans le canapé du salon autant que dans les lits, surtout quand on s\'y endort le soir.',
      'La vapeur sèche traite canapés, fauteuils et matelas en profondeur, et la cryogénie les cadres de lit et les plinthes, sans insecticide. Le salon et les chambres restent utilisables.',
    ],
    proches: ['Chevilly-Larue', 'Fresnes', 'Villejuif', 'Cachan', 'Thiais'],
    guides: ['vapeur-seche-punaises-de-lit', 'punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit'],
    faq: [
      { q: 'Le canapé est touché : faut-il le jeter ?', a: 'Rarement. La vapeur sèche pénètre dans les coussins, les coutures et l\'assise, et la cryogénie traite la structure. Un canapé jeté sans protection peut aussi contaminer l\'escalier et les voisins.' },
      ...FAQ_COMMUNE('à L\'Haÿ-les-Roses'),
    ],
  },
  {
    slug: 'thiais',
    nom: 'Thiais',
    a: 'à Thiais',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/thiais',
    title: 'Punaises de lit à Thiais (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Thiais : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Thiais, entre quartiers pavillonnaires, résidences et grands centres commerciaux, les punaises de lit arrivent surtout par les voyages, les achats d\'occasion et les visites.',
      'Avec la cryogénie et la vapeur sèche, il n\'est pas nécessaire de quitter son logement : on peut dormir dans la chambre traitée le soir même.',
      'Beaucoup d\'infestations commencent par un meuble ou un matelas d\'occasion. Avant de le rapporter chez vous, inspectez les coutures, les jointures et le dessous avec une lampe : des points noirs ou des mues doivent vous alerter.',
      'Si vous travaillez dans un commerce, un entrepôt ou un centre commercial, sachez que les punaises ne vivent pas sur les personnes : elles se déplacent avec les sacs, les vêtements posés et les meubles. Le traitement se concentre donc sur le logement, là où elles se nourrissent la nuit.',
    ],
    proches: ['Choisy-le-Roi', 'Orly', 'Rungis', 'Chevilly-Larue', 'Vitry-sur-Seine'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Quand peut-on dormir dans la chambre après le traitement ?', a: 'Avec la cryogénie et la vapeur sèche, le soir même : aucun produit n\'est appliqué. Avec un insecticide, il faut quitter le logement quelques heures. Dans tous les cas, un second passage contrôle le résultat.' },
      ...FAQ_COMMUNE('à Thiais'),
    ],
  },
  {
    slug: 'joinville-le-pont',
    nom: 'Joinville-le-Pont',
    a: 'à Joinville-le-Pont',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/joinville-le-pont',
    title: 'Punaises de lit à Joinville-le-Pont (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Joinville-le-Pont : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Joinville-le-Pont, entre bords de Marne et Bois de Vincennes, maisons, appartements et locations accueillent familles et voyageurs. Les punaises de lit peuvent toucher n\'importe quel logement, même parfaitement tenu.',
      'Nous traitons à la cryogénie et à la vapeur sèche, sans insecticide, avec discrétion : véhicule banalisé et intervention à l\'heure qui vous convient.',
    ],
    proches: ['Saint-Maurice', 'Saint-Maur-des-Fossés', 'Champigny-sur-Marne', 'Nogent-sur-Marne'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Les punaises de lit sont-elles un signe de manque d\'hygiène ?', a: 'Non. Elles se nourrissent de sang, pas de saleté, et arrivent dans des bagages, des meubles ou des vêtements. Un logement très propre peut être touché. Il n\'y a aucune honte à faire intervenir un professionnel.' },
      ...FAQ_COMMUNE('à Joinville-le-Pont'),
    ],
  },
  // ── Paris, 10 arrondissements les plus proches du siège (01/11/2026) ──
  {
    slug: 'paris-12',
    nom: 'Paris 12e',
    a: 'à Paris 12e',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Punaises de lit à Paris 12e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 12e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le 12e, avec la gare de Lyon, voit passer chaque jour un très grand nombre de voyageurs, et les punaises de lit voyagent avec eux, dans les valises et les sacs. Hôtels, locations et appartements du quartier peuvent être touchés.',
      'C\'est l\'arrondissement voisin de notre siège à Saint-Maurice : nous intervenons très vite, avec un traitement insecticide ou à la cryogénie et à la vapeur sèche, sans insecticide, avec deux passages inclus.',
    ],
    proches: ['Paris 11e', 'Paris 20e', 'Paris 13e', 'Charenton-le-Pont', 'Saint-Mandé'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Pouvez-vous intervenir rapidement dans le 12e ?', a: 'Oui, notre siège est à Saint-Maurice, juste à côté. Appelez le 07 68 07 72 19 : une intervention le jour même est souvent possible, à la cryogénie ou à la vapeur sèche.' },
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
    title: 'Punaises de lit à Paris 13e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 13e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le 13e compte de grandes tours, des résidences étudiantes et de nombreux logements familiaux. Dans un immeuble de grande hauteur, les punaises de lit peuvent passer d\'un appartement à l\'autre par les gaines et les plinthes.',
      'Nous traitons l\'appartement touché à la cryogénie et à la vapeur sèche, sans produit, et nous conseillons de faire inspecter les logements voisins pour éviter un retour.',
      'Dans les grandes résidences et les résidences étudiantes, une infestation se règle avec le gestionnaire : traitement des logements touchés, contrôle des logements voisins et information des occupants.',
    ],
    proches: ['Paris 12e', 'Paris 5e', 'Paris 14e', 'Ivry-sur-Seine', 'Le Kremlin-Bicêtre'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Dans une tour, faut-il traiter les appartements voisins ?', a: 'Il faut au moins les inspecter : les punaises passent par les gaines, les plinthes et les passages de câbles. Prévenez votre bailleur ou syndic, qui peut organiser une vérification des logements mitoyens.' },
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
    title: 'Punaises de lit à Paris 20e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 20e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Dans le 20e, de Belleville à Charonne, beaucoup de familles vivent dans des immeubles anciens, avec parquets, moulures et plinthes en bois où les punaises de lit se glissent facilement.',
      'La cryogénie, sèche et sans résidu, atteint les fentes du bois et des plinthes, et la vapeur sèche traite matelas et canapés. Le logement reste habitable pendant tout le traitement.',
    ],
    proches: ['Paris 11e', 'Paris 19e', 'Paris 12e', 'Montreuil', 'Bagnolet'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Combien de temps dure l\'intervention ?', a: 'En général quelques heures pour un appartement, selon le nombre de pièces et de meubles à traiter. Un second passage, inclus, a lieu environ deux semaines plus tard pour atteindre les punaises issues des œufs.' },
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
    title: 'Punaises de lit à Paris 11e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 11e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le 11e, très animé, compte beaucoup de jeunes actifs et de colocations, avec des allers-retours fréquents, des invités et des achats d\'occasion. Autant d\'occasions pour les punaises de lit d\'entrer.',
      'Avec la cryogénie et la vapeur sèche, il n\'y a pas besoin de quitter l\'appartement pendant des heures ni de vider les placards : aucun produit n\'est appliqué.',
      'En colocation, les punaises passent vite d\'une chambre à l\'autre. Toutes les chambres doivent être traitées le même jour, et chaque colocataire prépare son linge : sinon, elles reviennent par la chambre oubliée.',
    ],
    proches: ['Paris 12e', 'Paris 20e', 'Paris 3e', 'Paris 4e', 'Paris 10e'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Peut-on rester dans l\'appartement pendant le traitement ?', a: 'Avec la cryogénie ou la vapeur sèche, oui, en vous tenant à l\'écart de la pièce traitée pendant le passage. Avec un insecticide, il faut quitter le logement quelques heures.' },
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
    title: 'Punaises de lit à Paris 5e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 5e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Dans le 5e, Quartier latin, beaucoup d\'étudiants vivent dans de petites surfaces, chambres de bonne et studios. Dans une pièce de quelques mètres carrés, lit, bureau et vêtements sont tout proches, et une infestation s\'étend vite.',
      'Ces petits logements se traitent très bien à la cryogénie et à la vapeur sèche, sans insecticide et sans odeur, en une intervention.',
    ],
    proches: ['Paris 6e', 'Paris 13e', 'Paris 4e', 'Paris 14e'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Chambre de bonne ou studio : comment éviter que ça s\'étende ?', a: 'Lavez le linge à 60 °C, rangez les vêtements propres dans des sacs fermés, ne déplacez pas le matelas dans l\'escalier et faites traiter vite. Dans une petite surface, une intervention précoce suffit souvent.' },
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
    title: 'Punaises de lit à Paris 4e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 4e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le 4e, avec le Marais et l\'île Saint-Louis, compte beaucoup de locations meublées pour touristes. Les voyageurs se succèdent, et un seul séjour suffit à apporter des punaises de lit.',
      'Pour les propriétaires, la cryogénie et la vapeur sèche permettent de traiter et de relouer vite, sans odeur, avec une attestation d\'intervention à présenter si besoin.',
      'Lits anciens à cadre sculpté, boiseries, meubles de famille : dans les logements anciens du Marais et des îles, nous privilégions la cryogénie, sans humidité, pour protéger les bois anciens.',
    ],
    proches: ['Paris 3e', 'Paris 5e', 'Paris 11e', 'Paris 12e', 'Paris 1er'],
    guides: ['punaises-de-lit-airbnb-location-courte-duree', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Location meublée : fournissez-vous une attestation ?', a: 'Oui, une attestation d\'intervention est remise après le traitement. Elle peut servir face à un voyageur, une plateforme de location ou une assurance.' },
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
    title: 'Punaises de lit à Paris 3e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 3e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le Haut-Marais, dans le 3e, mêle appartements anciens, hôtels de charme et galeries. Les punaises de lit ne se cachent pas que dans le lit : cadres, tableaux, têtes de lit et moulures leur offrent de nombreuses fentes.',
      'La cryogénie, sans humidité ni résidu, permet de traiter ces objets et boiseries délicats sans les abîmer ; la vapeur sèche s\'occupe des textiles.',
    ],
    proches: ['Paris 4e', 'Paris 11e', 'Paris 10e', 'Paris 2e'],
    guides: ['cryogenie-punaises-de-lit', 'punaises-de-lit-sans-insecticide', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Les punaises peuvent-elles se cacher derrière les cadres et tableaux ?', a: 'Oui, surtout près du lit : derrière les cadres, dans les fentes des moulures et des boiseries. La cryogénie traite ces recoins sans abîmer les objets ni les murs.' },
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
    title: 'Punaises de lit à Paris 14e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 14e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le 14e accueille la Cité internationale universitaire et de nombreux logements familiaux. Les étudiants et les familles cherchent souvent un traitement efficace sans produit, et un moyen de s\'assurer qu\'il a fonctionné.',
      'Nous traitons à la cryogénie et à la vapeur sèche, puis nous revenons environ deux semaines plus tard pour un second passage inclus, qui contrôle et complète le résultat.',
    ],
    proches: ['Paris 13e', 'Paris 6e', 'Paris 15e', 'Montrouge', 'Malakoff'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Comment savoir si le traitement a marché ?', a: 'Plus de nouvelles piqûres, plus de taches fraîches sur le matelas : ce sont les premiers signes. Le second passage, inclus, permet au technicien de contrôler les zones à risque et de traiter les dernières punaises issues des œufs.' },
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
    title: 'Punaises de lit à Paris 6e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 6e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Dans le 6e, les appartements anciens ont souvent de beaux parquets, des moulures et des meubles de famille. Les punaises de lit se glissent entre les lames de parquet et dans les assemblages des meubles.',
      'La cryogénie traite les joints de parquet et les meubles en bois sans humidité ni produit, et la vapeur sèche la literie et les tissus.',
      'Les chambres de bonne et les petits logements étudiants sont souvent meublés de lits en bois et de bibliothèques : autant de fentes à traiter, une par une, à la lance de cryogénie ou à la vapeur.',
    ],
    proches: ['Paris 5e', 'Paris 7e', 'Paris 14e', 'Paris 15e'],
    guides: ['cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit', 'terre-de-diatomee-punaises-de-lit'],
    faq: [
      { q: 'Les punaises peuvent-elles vivre dans un parquet ancien ?', a: 'Oui, dans les joints entre les lames, surtout près du lit. La cryogénie atteint ces interstices sans abîmer le bois. La terre de diatomée en voile fin peut compléter, mais jamais remplacer un traitement.' },
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
    title: 'Punaises de lit à Paris 10e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 10e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le 10e, avec la gare du Nord et la gare de l\'Est, est un lieu de passage pour les voyageurs de toute l\'Europe, et compte de nombreux hôtels. Les punaises de lit y arrivent dans les bagages.',
      'Pour un hôtel comme pour un appartement, la cryogénie et la vapeur sèche permettent de traiter sans insecticide et de réutiliser la chambre rapidement.',
    ],
    proches: ['Paris 11e', 'Paris 3e', 'Paris 19e', 'Paris 9e', 'Paris 18e'],
    guides: ['punaises-de-lit-sans-insecticide', 'punaises-de-lit-airbnb-location-courte-duree', 'cryogenie-punaises-de-lit'],
    faq: [
      { q: 'Après une nuit à l\'hôtel, comment vérifier qu\'on n\'a rien ramené ?', a: 'Inspectez votre valise avant de la rentrer dans la chambre, lavez le linge à 60 °C et surveillez votre lit les semaines suivantes. Des piqûres alignées au réveil doivent vous alerter.' },
      ...FAQ_COMMUNE('à Paris 10e'),
    ],
  },
  // ── Paris, 10 derniers arrondissements (01/11/2026) ──
  {
    slug: 'paris-1',
    nom: 'Paris 1er',
    a: 'à Paris 1er',
    code: '75',
    departement: 'Paris',
    zoneHref: '/zones/paris',
    title: 'Punaises de lit à Paris 1er : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 1er : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le 1er arrondissement, du Louvre aux Halles, compte peu d\'habitants mais beaucoup d\'hôtels, de résidences de tourisme et de visiteurs. Les punaises de lit y arrivent avec les bagages, y compris dans les établissements les plus haut de gamme.',
      'Pour un hôtel ou un appartement, nous traitons par cryogénie et vapeur sèche, sans insecticide et sans odeur, ou par traitement insecticide si l\'infestation est importante.',
    ],
    proches: ['Paris 2e', 'Paris 4e', 'Paris 8e', 'Paris 9e'],
    guides: ['punaises-de-lit-airbnb-location-courte-duree', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Un hôtel haut de gamme peut-il avoir des punaises de lit ?', a: 'Oui. Les punaises voyagent dans les valises, quel que soit le standing. Ce n\'est pas une question d\'hygiène : c\'est la rapidité de la détection et du traitement qui compte. Nous intervenons discrètement.' },
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
    title: 'Punaises de lit à Paris 2e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 2e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le 2e, du Sentier à la Bourse, mêle bureaux, espaces de coworking, passages couverts, hôtels et logements anciens. Les punaises de lit peuvent s\'installer dans un canapé de salle de pause comme dans une chambre.',
      'Nous intervenons le soir ou le week-end pour ne pas gêner l\'activité, avec la cryogénie et la vapeur sèche, sans insecticide, ou un traitement insecticide si besoin.',
      'Petits studios et logements loués à la nuitée : nous intervenons entre deux locations et conseillons une housse anti-punaises sur le matelas, qui facilite les contrôles suivants.',
    ],
    proches: ['Paris 1er', 'Paris 3e', 'Paris 9e', 'Paris 10e'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Pouvez-vous intervenir le soir ou le week-end ?', a: 'Oui, nous intervenons 7j/7, y compris en soirée, pour les bureaux, commerces et locations. Le créneau est fixé avec vous lors du devis.' },
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
    title: 'Punaises de lit à Paris 7e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 7e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Dans le 7e, les appartements ont souvent des tissus précieux, des rideaux épais, des tapis et des meubles de style. Les punaises de lit se cachent dans les coutures, les passementeries et les assemblages du bois.',
      'La cryogénie, sèche et sans résidu, convient aux tissus délicats et aux meubles anciens ; la vapeur sèche traite matelas et canapés. Le tout sans insecticide, ou avec un traitement insecticide si l\'infestation l\'exige.',
      'Dans les appartements haussmanniens, les parquets anciens aux lames disjointes et les moulures offrent des cachettes. La cryogénie, sèche, permet de traiter les jointures du parquet sans abîmer le bois.',
    ],
    proches: ['Paris 6e', 'Paris 15e', 'Paris 8e', 'Paris 16e'],
    guides: ['cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit', 'punaises-de-lit-sans-insecticide'],
    faq: [
      { q: 'Peut-on traiter des tissus précieux ou des meubles de style ?', a: 'Oui. La cryogénie n\'apporte ni humidité ni produit et ne laisse aucun résidu : elle convient à la soie, aux tapisseries et aux meubles anciens. Un essai sur une zone discrète est fait si besoin.' },
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
    title: 'Punaises de lit à Paris 8e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 8e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le 8e réunit des hôtels de prestige, des bureaux, des boutiques et des appartements de standing. Dans ces lieux, la discrétion compte autant que l\'efficacité.',
      'Véhicule banalisé, technicien en tenue discrète, intervention à l\'heure choisie : nous traitons par cryogénie et vapeur sèche, sans insecticide, ou par traitement insecticide, avec une attestation remise à la fin.',
      'Résidences d\'affaires et appartements meublés loués à la semaine voient passer beaucoup de voyageurs. Une inspection entre deux locataires permet de repérer les punaises avant qu\'elles ne s\'installent.',
    ],
    proches: ['Paris 17e', 'Paris 16e', 'Paris 9e', 'Paris 1er', 'Paris 7e'],
    guides: ['punaises-de-lit-airbnb-location-courte-duree', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Votre intervention peut-elle rester discrète ?', a: 'Oui : véhicule banalisé, aucun logo sur le matériel, tenue discrète et horaire adapté. Pour un hôtel, nous intervenons en dehors des arrivées et départs des clients.' },
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
    title: 'Punaises de lit à Paris 9e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 9e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le 9e, des grands magasins à Pigalle, compte des théâtres, des salles de spectacle, des hôtels et beaucoup de logements anciens. Les fauteuils en tissu et les canapés sont des refuges appréciés des punaises de lit.',
      'La vapeur sèche traite en profondeur les fauteuils, banquettes et canapés, sans insecticide. Un traitement insecticide complète si l\'infestation est importante.',
      'Le 9e compte de nombreux hôtels et meublés touristiques : les punaises y arrivent dans les bagages des voyageurs. Nous traitons chambre par chambre, en dehors des heures d\'arrivée, pour que l\'établissement continue de fonctionner.',
    ],
    proches: ['Paris 2e', 'Paris 10e', 'Paris 18e', 'Paris 8e'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Peut-on traiter des fauteuils de salle de spectacle ?', a: 'Oui. La vapeur sèche pénètre dans les assises et les coutures, et la cryogénie traite les structures et les fentes. L\'intervention se fait en dehors des représentations.' },
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
    title: 'Punaises de lit à Paris 15e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 15e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le 15e est l\'arrondissement le plus peuplé de Paris, avec beaucoup de familles. Les enfants peuvent rapporter des punaises de lit dans leur sac après une sortie, une colonie ou un séjour chez des amis.',
      'Pour les chambres d\'enfants, nous proposons la cryogénie et la vapeur sèche, sans insecticide : l\'enfant peut dormir dans sa chambre le soir même. Un traitement insecticide reste possible pour une forte infestation.',
    ],
    proches: ['Paris 14e', 'Paris 7e', 'Paris 16e', 'Issy-les-Moulineaux', 'Vanves'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'L\'école signale des punaises de lit : que faire à la maison ?', a: 'Inspectez le cartable et les vêtements de l\'enfant, lavez le linge à 60 °C et surveillez son lit quelques semaines. Si des piqûres ou des traces apparaissent, faites traiter rapidement.' },
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
    title: 'Punaises de lit à Paris 16e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 16e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Dans le 16e, les grands appartements ont souvent des chambres de service sous les toits. Quand des punaises de lit apparaissent, il faut vérifier l\'appartement principal et les chambres annexes, car les affaires circulent entre les deux.',
      'Nous traitons l\'ensemble par cryogénie et vapeur sèche, sans insecticide, ou par traitement insecticide selon l\'infestation, avec deux passages inclus.',
      'Dans les grands appartements, n\'oubliez pas la chambre de service, la buanderie et la lingerie : le linge y transite et les punaises avec. Nous traitons l\'ensemble des pièces concernées en une seule intervention.',
    ],
    proches: ['Paris 8e', 'Paris 17e', 'Paris 15e', 'Boulogne-Billancourt', 'Neuilly-sur-Seine'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Faut-il traiter aussi la chambre de service ?', a: 'Si des personnes ou des affaires passent de l\'une à l\'autre, oui, au moins une inspection. Les punaises voyagent dans les sacs, les vêtements et le linge.' },
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
    title: 'Punaises de lit à Paris 17e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 17e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le 17e, des Batignolles au quartier des Ternes, accueille de nombreuses familles et de nouveaux quartiers, ainsi que des hôtels autour du Palais des Congrès. Au retour d\'un déplacement, il est fréquent de rapporter des punaises dans ses vêtements.',
      'Inutile de jeter vos affaires : le linge se traite au lavage, et le logement par cryogénie et vapeur sèche, sans insecticide, ou par traitement insecticide si nécessaire.',
      'Dans les chambres d\'enfants, les lits superposés et les lits mezzanine multiplient les cachettes : lattes, échelles, jonctions. Chaque niveau du lit est traité, ainsi que les peluches et le linge.',
    ],
    proches: ['Paris 8e', 'Paris 16e', 'Paris 18e', 'Levallois-Perret', 'Clichy'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Faut-il jeter ses vêtements ?', a: 'Non. Lavez-les à 60 °C, ou passez-les au sèche-linge à haute température, puis rangez-les dans des sacs fermés jusqu\'à la fin du traitement. Les vêtements fragiles peuvent être traités à la vapeur sèche.' },
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
    title: 'Punaises de lit à Paris 18e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 18e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le 18e, de Montmartre à la Goutte d\'Or, compte beaucoup d\'immeubles anciens, de petits logements et de locations touristiques. Dans un vieil immeuble, les punaises de lit passent d\'un appartement à l\'autre par les plinthes, les gaines et les fissures.',
      'Nous traitons le logement par cryogénie et vapeur sèche, sans insecticide, ou par traitement insecticide, et nous conseillons de prévenir les voisins pour une inspection.',
      'Dans les petits immeubles anciens de la butte et de la Goutte d\'Or, les punaises passent d\'un appartement à l\'autre par les plinthes et les gaines. Prévenez vos voisins et le syndic : traiter un seul logement ne suffit pas toujours.',
    ],
    proches: ['Paris 17e', 'Paris 9e', 'Paris 19e', 'Paris 10e', 'Saint-Ouen-sur-Seine'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Les punaises de lit passent-elles d\'un appartement à l\'autre ?', a: 'Oui, par les plinthes, les gaines, les fissures et les passages de câbles, surtout dans les immeubles anciens. Prévenez vos voisins et votre syndic : une inspection des logements mitoyens évite un retour.' },
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
    title: 'Punaises de lit à Paris 19e : cryogénie, vapeur sèche',
    description: 'Punaises de lit à Paris 19e : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Le 19e, autour des Buttes-Chaumont et du bassin de la Villette, compte de grands ensembles et de nombreuses familles. Dans un immeuble, le gardien et le bailleur sont des relais précieux pour repérer et traiter une infestation.',
      'Nous traitons par cryogénie et vapeur sèche, sans insecticide, ou par traitement insecticide, et nous pouvons intervenir sur plusieurs logements à la demande du bailleur.',
    ],
    proches: ['Paris 20e', 'Paris 10e', 'Paris 18e', 'Pantin', 'Le Pré-Saint-Gervais'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Faut-il prévenir le gardien ou le bailleur ?', a: 'Oui. Ils peuvent organiser l\'inspection des logements voisins et un traitement coordonné. Prévenez votre bailleur par écrit : l\'absence de nuisibles fait partie des critères du logement décent.' },
      ...FAQ_COMMUNE('à Paris 19e'),
    ],
  },
  {
    slug: 'ablon-sur-seine',
    nom: 'Ablon-sur-Seine',
    a: 'à Ablon-sur-Seine',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/ablon-sur-seine',
    title: 'Punaises de lit à Ablon-sur-Seine (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Ablon-sur-Seine : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Ablon-sur-Seine, petite commune de maisons et de petits immeubles au bord de la Seine, les punaises de lit arrivent surtout avec un meuble d\'occasion, un matelas récupéré ou au retour d\'un séjour. Elles se fixent d\'abord près du lit, puis gagnent les autres chambres.',
      'Pour une infestation prise tôt, la cryogénie et la vapeur sèche suffisent souvent, sans insecticide. Si elle est installée depuis des semaines, nous combinons avec un traitement insecticide, toujours en deux passages.',
    ],
    proches: ['Villeneuve-le-Roi', 'Orly', 'Villeneuve-Saint-Georges', 'Vigneux-sur-Seine'],
    guides: ['terre-de-diatomee-punaises-de-lit', 'insecticide-punaises-de-lit', 'punaises-de-lit-sans-insecticide'],
    faq: [
      { q: 'Les punaises de lit peuvent-elles venir d\'une maison voisine ?', a: 'C\'est rare entre deux maisons séparées. Elles arrivent presque toujours par des affaires transportées : bagages, meubles, vêtements. Entre deux logements mitoyens ou dans un petit immeuble, en revanche, elles peuvent passer par les murs et les gaines.' },
      ...FAQ_COMMUNE('à Ablon-sur-Seine'),
    ],
  },
  {
    slug: 'arcueil',
    nom: 'Arcueil',
    a: 'à Arcueil',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/arcueil',
    title: 'Punaises de lit à Arcueil (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Arcueil : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Arcueil, beaucoup d\'appartements changent régulièrement d\'occupants, et les déménagements font voyager les punaises de lit avec les cartons, les sommiers et les canapés. Un logement qui vient d\'être emménagé mérite une inspection au moindre bouton suspect.',
      'Nous traitons le lit, le sommier et les plinthes à la cryogénie, les textiles à la vapeur sèche, et nous ajoutons un insecticide professionnel quand l\'infestation est étendue.',
    ],
    proches: ['Gentilly', 'Cachan', 'Le Kremlin-Bicêtre', 'Montrouge'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Faut-il vider toute la chambre avant le traitement ?', a: 'Non, mais il faut dégager l\'accès aux murs, aux plinthes et au lit, et mettre le linge à laver à 60 °C dans des sacs fermés. Nous vous envoyons la liste précise des préparations avant le passage.' },
      ...FAQ_COMMUNE('à Arcueil'),
    ],
  },
  {
    slug: 'boissy-saint-leger',
    nom: 'Boissy-Saint-Léger',
    a: 'à Boissy-Saint-Léger',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/boissy-saint-leger',
    title: 'Punaises de lit à Boissy-Saint-Léger (94) : traitement',
    description: 'Punaises de lit à Boissy-Saint-Léger : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Boissy-Saint-Léger, terminus du RER A, les punaises de lit voyagent avec les sacs et les vêtements autant qu\'avec les valises. Une fois dans le logement, elles se cachent dans les coutures du matelas, les jonctions du sommier et derrière la tête de lit.',
      'Selon l\'infestation, nous traitons sans insecticide, par cryogénie et vapeur sèche, ou avec un insecticide rémanent. Dans les deux cas, un second passage est prévu pour éliminer les punaises sorties des œufs.',
    ],
    proches: ['Marolles-en-Brie', 'Limeil-Brévannes', 'Sucy-en-Brie', 'Villecresnes'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Combien de temps faut-il quitter le logement ?', a: 'Avec la cryogénie et la vapeur sèche, vous pouvez rester ou revenir juste après. Avec un insecticide, comptez 4 heures en moyenne d\'absence, puis une bonne aération avant de réoccuper les pièces.' },
      ...FAQ_COMMUNE('à Boissy-Saint-Léger'),
    ],
  },
  {
    slug: 'bonneuil-sur-marne',
    nom: 'Bonneuil-sur-Marne',
    a: 'à Bonneuil-sur-Marne',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/bonneuil-sur-marne',
    title: 'Punaises de lit à Bonneuil-sur-Marne (94) : traitement',
    description: 'Punaises de lit à Bonneuil-sur-Marne : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Bonneuil-sur-Marne, les résidences et les grands ensembles côtoient les maisons. En immeuble, une infestation qui démarre dans un appartement peut passer chez les voisins par les gaines et les plinthes : mieux vaut prévenir le gardien ou le bailleur rapidement.',
      'Nous traitons chaque logement concerné par cryogénie, vapeur sèche ou insecticide professionnel, avec deux passages, et nous pouvons coordonner l\'intervention sur plusieurs appartements.',
    ],
    proches: ['Créteil', 'Saint-Maur-des-Fossés', 'Sucy-en-Brie', 'Limeil-Brévannes'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Les punaises de lit peuvent-elles survivre dans un logement vide ?', a: 'Oui, plusieurs mois sans se nourrir, surtout quand il fait frais. Partir quelques semaines ou laisser le logement vide ne suffit donc pas : il faut un traitement.' },
      ...FAQ_COMMUNE('à Bonneuil-sur-Marne'),
    ],
  },
  {
    slug: 'chennevieres-sur-marne',
    nom: 'Chennevières-sur-Marne',
    a: 'à Chennevières-sur-Marne',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/chennevieres-sur-marne',
    title: 'Punaises de lit à Chennevières-sur-Marne (94) : traitement',
    description: 'Punaises de lit à Chennevières-sur-Marne : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Chennevières-sur-Marne, entre pavillons et résidences, les punaises de lit s\'installent d\'abord dans la chambre principale, puis suivent le linge et les occupants dans les autres pièces. Les piqûres alignées au réveil sont souvent le premier signe.',
      'La cryogénie traite les cadres de lit et les plinthes, la vapeur sèche les matelas et canapés, sans insecticide. Pour une infestation forte, l\'insecticide professionnel prend le relais.',
    ],
    proches: ['Ormesson-sur-Marne', 'Le Plessis-Trévise', 'Sucy-en-Brie', 'Noiseau'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Peut-on dormir dans la chambre le soir même ?', a: 'Après un traitement par cryogénie et vapeur sèche, oui. Après un insecticide, attendez la fin du délai indiqué par le technicien (en général quelques heures) et aérez la pièce.' },
      ...FAQ_COMMUNE('à Chennevières-sur-Marne'),
    ],
  },
  {
    slug: 'chevilly-larue',
    nom: 'Chevilly-Larue',
    a: 'à Chevilly-Larue',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/chevilly-larue',
    title: 'Punaises de lit à Chevilly-Larue (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Chevilly-Larue : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Chevilly-Larue, desservie par le métro 14 et le tram 7, beaucoup d\'habitants circulent chaque jour vers Paris et l\'aéroport d\'Orly. Les punaises de lit ne vivent pas dans les rames, mais elles peuvent s\'accrocher à un sac ou un manteau et finir dans la chambre.',
      'Nous traitons par cryogénie et vapeur sèche, sans insecticide, ou par insecticide professionnel selon l\'importance de l\'infestation, en deux passages.',
    ],
    proches: ['L\'Haÿ-les-Roses', 'Thiais', 'Rungis', 'Fresnes'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Peut-on attraper des punaises de lit dans les transports ?', a: 'C\'est possible mais rare : elles vivent près des lieux où l\'on dort. Le risque principal reste les bagages, les hôtels, les meubles d\'occasion et les logements déjà infestés.' },
      ...FAQ_COMMUNE('à Chevilly-Larue'),
    ],
  },
  {
    slug: 'fresnes',
    nom: 'Fresnes',
    a: 'à Fresnes',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/fresnes',
    title: 'Punaises de lit à Fresnes (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Fresnes : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Fresnes, maisons, résidences et logements familiaux accueillent souvent des enfants qui changent de chambre ou dorment chez des proches. Les punaises de lit profitent de ces déplacements pour s\'étendre à plusieurs lits.',
      'Nous inspectons toutes les pièces où l\'on dort, puis nous traitons par cryogénie et vapeur sèche, sans insecticide, ou avec un insecticide professionnel si nécessaire.',
    ],
    proches: ['Antony', 'Rungis', 'Chevilly-Larue', 'L\'Haÿ-les-Roses'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Comment préparer le logement avant votre passage ?', a: 'Lavez le linge de lit et les vêtements à 60 °C, rangez-les dans des sacs fermés, dégagez les abords du lit et des plinthes, et passez l\'aspirateur en jetant le sac aussitôt. Ne déplacez pas les meubles d\'une pièce à l\'autre.' },
      ...FAQ_COMMUNE('à Fresnes'),
    ],
  },
  {
    slug: 'gentilly',
    nom: 'Gentilly',
    a: 'à Gentilly',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/gentilly',
    title: 'Punaises de lit à Gentilly (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Gentilly : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Gentilly, aux portes de Paris, les colocations et les petits logements sont nombreux. Une seule chambre touchée suffit pour que les punaises de lit gagnent les autres pièces, par les affaires partagées et le canapé du salon.',
      'Nous traitons la chambre infestée et inspectons les pièces voisines : cryogénie et vapeur sèche, sans insecticide, ou insecticide professionnel quand l\'infestation est avancée.',
    ],
    proches: ['Le Kremlin-Bicêtre', 'Arcueil', 'Montrouge', 'Paris 13e'],
    guides: ['vapeur-seche-punaises-de-lit', 'punaises-de-lit-airbnb-location-courte-duree', 'terre-de-diatomee-punaises-de-lit'],
    faq: [
      { q: 'En colocation, peut-on traiter une seule chambre ?', a: 'Si l\'infestation est limitée, oui, mais les autres chambres et le salon doivent être inspectés. Le plus sûr est de traiter le logement en une seule fois.' },
      ...FAQ_COMMUNE('à Gentilly'),
    ],
  },
  {
    slug: 'la-queue-en-brie',
    nom: 'La Queue-en-Brie',
    a: 'à La Queue-en-Brie',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/la-queue-en-brie',
    title: 'Punaises de lit à La Queue-en-Brie (94) : cryogénie, vapeur',
    description: 'Punaises de lit à La Queue-en-Brie : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À La Queue-en-Brie, commune pavillonnaire aux portes de la Seine-et-Marne, les punaises de lit arrivent avec les meubles chinés, les matelas d\'occasion ou les valises. Elles restent dans la maison, autour des lits et des canapés.',
      'Nous traitons chambre par chambre à la cryogénie et à la vapeur sèche, sans insecticide, ou avec un insecticide professionnel pour les infestations installées.',
    ],
    proches: ['Noiseau', 'Le Plessis-Trévise', 'Chennevières-sur-Marne', 'Pontault-Combault'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Les punaises de lit vivent-elles dans le jardin ?', a: 'Non. Elles vivent à l\'intérieur, près des personnes dont elles se nourrissent. Inutile de traiter le jardin : c\'est le logement, et surtout les zones de sommeil, qu\'il faut traiter.' },
      ...FAQ_COMMUNE('à La Queue-en-Brie'),
    ],
  },
  {
    slug: 'le-plessis-trevise',
    nom: 'Le Plessis-Trévise',
    a: 'au Plessis-Trévise',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/le-plessis-trevise',
    title: 'Punaises de lit au Plessis-Trévise (94) : cryogénie, vapeur',
    description: 'Punaises de lit au Plessis-Trévise : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'Au Plessis-Trévise, la plupart des logements sont des maisons avec plusieurs chambres. Les punaises de lit partent souvent d\'une chambre d\'amis ou d\'un canapé convertible, puis gagnent le reste de la maison.',
      'La cryogénie et la vapeur sèche traitent les lits, les canapés et les plinthes sans insecticide. Pour une infestation étendue, nous ajoutons un insecticide professionnel.',
    ],
    proches: ['Villiers-sur-Marne', 'Chennevières-sur-Marne', 'La Queue-en-Brie', 'Noisy-le-Grand'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Faut-il traiter toute la maison ou seulement la chambre ?', a: 'Toutes les pièces où quelqu\'un dort ou se repose doivent être inspectées. Nous traitons les pièces où nous trouvons des traces, et nous vous disons clairement lesquelles avant de commencer.' },
      ...FAQ_COMMUNE('au Plessis-Trévise'),
    ],
  },
  {
    slug: 'limeil-brevannes',
    nom: 'Limeil-Brévannes',
    a: 'à Limeil-Brévannes',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/limeil-brevannes',
    title: 'Punaises de lit à Limeil-Brévannes (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Limeil-Brévannes : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Limeil-Brévannes, ville qui s\'est beaucoup agrandie avec de nouveaux quartiers, les emménagements sont fréquents. Cartons, sommiers et canapés déplacés d\'un logement à l\'autre transportent parfois des punaises de lit.',
      'Nous traitons par cryogénie et vapeur sèche, sans insecticide, ou par insecticide professionnel selon l\'infestation, avec deux passages.',
    ],
    proches: ['Valenton', 'Boissy-Saint-Léger', 'Bonneuil-sur-Marne', 'Villeneuve-Saint-Georges'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'À quoi ressemblent les piqûres de punaises de lit ?', a: 'Ce sont souvent des boutons rouges qui démangent, regroupés ou alignés par trois ou quatre, sur les zones découvertes la nuit (bras, cou, jambes). Certaines personnes ne réagissent pas du tout : cherchez aussi les petites taches noires sur le matelas.' },
      ...FAQ_COMMUNE('à Limeil-Brévannes'),
    ],
  },
  {
    slug: 'mandres-les-roses',
    nom: 'Mandres-les-Roses',
    a: 'à Mandres-les-Roses',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/mandres-les-roses',
    title: 'Punaises de lit à Mandres-les-Roses (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Mandres-les-Roses : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Mandres-les-Roses, dans les maisons de cette commune du plateau Briard, les punaises de lit arrivent surtout avec les voyages et les meubles d\'occasion. Elles restent discrètes plusieurs semaines avant que l\'on remarque les piqûres.',
      'Nous traitons par cryogénie et vapeur sèche, sans insecticide, ou avec un insecticide professionnel si l\'infestation est installée, en deux passages.',
    ],
    proches: ['Périgny', 'Villecresnes', 'Marolles-en-Brie', 'Santeny'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Mes animaux peuvent-ils rester pendant le traitement ?', a: 'Avec la cryogénie et la vapeur sèche, oui, à l\'écart de la zone traitée. Avec un insecticide, les animaux doivent sortir le temps du traitement, et les aquariums doivent être couverts et leur pompe arrêtée.' },
      ...FAQ_COMMUNE('à Mandres-les-Roses'),
    ],
  },
  {
    slug: 'marolles-en-brie',
    nom: 'Marolles-en-Brie',
    a: 'à Marolles-en-Brie',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/marolles-en-brie',
    title: 'Punaises de lit à Marolles-en-Brie (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Marolles-en-Brie : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Marolles-en-Brie, les punaises de lit ne viennent pas de l\'extérieur : elles sont rapportées dans les bagages, après un séjour ou l\'achat d\'un meuble. Une chambre peu utilisée peut rester infestée longtemps sans que l\'on s\'en aperçoive.',
      'Nous inspectons toute la maison, puis nous traitons par cryogénie et vapeur sèche, sans insecticide, ou par insecticide professionnel.',
    ],
    proches: ['Santeny', 'Boissy-Saint-Léger', 'Villecresnes', 'Mandres-les-Roses'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Une chambre inoccupée peut-elle être infestée ?', a: 'Oui. Les punaises survivent plusieurs mois sans se nourrir et ressortent dès qu\'une personne dort dans la pièce. Signalez au technicien toutes les chambres, même celles qui servent peu.' },
      ...FAQ_COMMUNE('à Marolles-en-Brie'),
    ],
  },
  {
    slug: 'noiseau',
    nom: 'Noiseau',
    a: 'à Noiseau',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/noiseau',
    title: 'Punaises de lit à Noiseau (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Noiseau : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Noiseau, petite commune résidentielle, une infestation de punaises de lit commence souvent après un voyage ou l\'arrivée d\'un meuble d\'occasion. Repérée tôt, elle se traite plus vite et plus simplement.',
      'La cryogénie et la vapeur sèche traitent sans insecticide. Si l\'infestation est forte, l\'insecticide professionnel est utilisé, avec un second passage de contrôle.',
    ],
    proches: ['Ormesson-sur-Marne', 'Sucy-en-Brie', 'La Queue-en-Brie', 'Chennevières-sur-Marne'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Comment savoir si le traitement a fonctionné ?', a: 'Les piqûres diminuent puis disparaissent dans les semaines qui suivent. Le second passage sert à vérifier et à traiter les dernières éclosions. Si vous voyez encore des traces fraîches après, la garantie s\'applique.' },
      ...FAQ_COMMUNE('à Noiseau'),
    ],
  },
  {
    slug: 'orly',
    nom: 'Orly',
    a: 'à Orly',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/orly',
    title: 'Punaises de lit à Orly (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Orly : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Orly, avec l\'aéroport et ses hôtels tout proches, beaucoup d\'habitants voyagent ou travaillent dans l\'hôtellerie. Les punaises de lit se glissent dans les valises et les vêtements, puis s\'installent à la maison.',
      'Nous traitons les logements, mais aussi les chambres d\'hôtel, par cryogénie et vapeur sèche, sans insecticide, ou par insecticide professionnel, en deux passages.',
    ],
    proches: ['Villeneuve-le-Roi', 'Thiais', 'Choisy-le-Roi', 'Ablon-sur-Seine'],
    guides: ['punaises-de-lit-airbnb-location-courte-duree', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Au retour de voyage, comment éviter d\'en ramener ?', a: 'Ouvrez la valise dans la salle de bain ou sur un sol carrelé, jamais sur le lit. Lavez tous les vêtements à 60 °C ou passez-les au sèche-linge chaud, et inspectez les coutures de la valise.' },
      ...FAQ_COMMUNE('à Orly'),
    ],
  },
  {
    slug: 'ormesson-sur-marne',
    nom: 'Ormesson-sur-Marne',
    a: 'à Ormesson-sur-Marne',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/ormesson-sur-marne',
    title: 'Punaises de lit à Ormesson-sur-Marne (94) : traitement',
    description: 'Punaises de lit à Ormesson-sur-Marne : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Ormesson-sur-Marne, commune de maisons, les punaises de lit se cachent dans le cadre du lit, la tête de lit, les tables de nuit et les plinthes, rarement loin de l\'endroit où l\'on dort.',
      'Nous traitons ces cachettes par cryogénie et vapeur sèche, sans insecticide, ou avec un insecticide professionnel quand elles sont nombreuses.',
    ],
    proches: ['Chennevières-sur-Marne', 'Sucy-en-Brie', 'Noiseau', 'Champigny-sur-Marne'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Les punaises de lit transmettent-elles des maladies ?', a: 'Aucune transmission de maladie à l\'homme n\'a été démontrée. Mais les piqûres provoquent des démangeaisons, parfois des réactions cutanées, et l\'infestation pèse sur le sommeil et le moral : il faut traiter vite.' },
      ...FAQ_COMMUNE('à Ormesson-sur-Marne'),
    ],
  },
  {
    slug: 'perigny',
    nom: 'Périgny',
    a: 'à Périgny',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/perigny',
    title: 'Punaises de lit à Périgny (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Périgny : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Périgny, commune rurale du bout du Val-de-Marne, nous intervenons comme partout ailleurs dans le 94 : les punaises de lit n\'ont rien à voir avec la propreté de la maison, elles voyagent avec les affaires.',
      'Nous traitons par cryogénie et vapeur sèche, sans insecticide, ou par insecticide professionnel, toujours en deux passages et avec la garantie.',
    ],
    proches: ['Mandres-les-Roses', 'Villecresnes', 'Boussy-Saint-Antoine', 'Servon'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Pourquoi faut-il deux passages ?', a: 'Aucune méthode ne détruit à coup sûr tous les œufs en une fois. Le second passage, quelques semaines après, élimine les punaises nées entre-temps, avant qu\'elles ne pondent à leur tour.' },
      ...FAQ_COMMUNE('à Périgny'),
    ],
  },
  {
    slug: 'rungis',
    nom: 'Rungis',
    a: 'à Rungis',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/rungis',
    title: 'Punaises de lit à Rungis (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Rungis : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Rungis, avec le marché international, les zones d\'activité et les hôtels, nous intervenons autant chez les particuliers que chez les professionnels. Un hôtel ou une résidence doit traiter vite pour ne pas fermer de chambres trop longtemps.',
      'La cryogénie et la vapeur sèche permettent de remettre une chambre en service rapidement, sans insecticide. L\'insecticide professionnel est réservé aux infestations importantes.',
    ],
    proches: ['Chevilly-Larue', 'Fresnes', 'Thiais', 'Wissous'],
    guides: ['punaises-de-lit-airbnb-location-courte-duree', 'vapeur-seche-punaises-de-lit', 'insecticide-punaises-de-lit'],
    faq: [
      { q: 'Intervenez-vous dans les hôtels et les entreprises ?', a: 'Oui. Nous intervenons dans les hôtels, résidences et locaux professionnels, avec discrétion et des horaires adaptés, et nous fournissons les justificatifs d\'intervention.' },
      ...FAQ_COMMUNE('à Rungis'),
    ],
  },
  {
    slug: 'valenton',
    nom: 'Valenton',
    a: 'à Valenton',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/valenton',
    title: 'Punaises de lit à Valenton (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Valenton : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Valenton, une bonne partie des logements sont en immeuble. Quand un appartement est infesté, les punaises de lit peuvent gagner les logements voisins : le locataire doit prévenir son bailleur par écrit.',
      'Nous traitons par cryogénie et vapeur sèche, sans insecticide, ou par insecticide professionnel, et nous pouvons intervenir sur plusieurs logements à la demande du bailleur.',
    ],
    proches: ['Villeneuve-Saint-Georges', 'Limeil-Brévannes', 'Choisy-le-Roi', 'Créteil'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Je suis locataire : qui doit payer le traitement ?', a: 'Le logement loué doit être exempt de toute infestation de nuisibles (loi du 6 juillet 1989, article 6). Prévenez votre propriétaire par écrit. La prise en charge dépend ensuite de la situation, et votre mairie peut vous orienter en cas de désaccord.' },
      ...FAQ_COMMUNE('à Valenton'),
    ],
  },
  {
    slug: 'villecresnes',
    nom: 'Villecresnes',
    a: 'à Villecresnes',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/villecresnes',
    title: 'Punaises de lit à Villecresnes (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Villecresnes : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Villecresnes, dans les maisons comme dans les résidences, les punaises de lit ne se limitent pas au lit : on les trouve aussi derrière les cadres, dans les prises, sous les plinthes et dans les fauteuils.',
      'La cryogénie atteint ces fentes sans insecticide, la vapeur sèche traite les textiles, et l\'insecticide professionnel complète si l\'infestation est forte.',
    ],
    proches: ['Mandres-les-Roses', 'Marolles-en-Brie', 'Boissy-Saint-Léger', 'Yerres'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Où se cachent les punaises de lit en dehors du lit ?', a: 'Derrière les cadres et les têtes de lit, dans les plinthes, les prises, les rideaux, les fauteuils et les canapés, et parfois dans les goulottes électriques. Elles restent en général à quelques mètres de l\'endroit où l\'on dort.' },
      ...FAQ_COMMUNE('à Villecresnes'),
    ],
  },
  {
    slug: 'villeneuve-le-roi',
    nom: 'Villeneuve-le-Roi',
    a: 'à Villeneuve-le-Roi',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/villeneuve-le-roi',
    title: 'Punaises de lit à Villeneuve-le-Roi (94) : cryogénie, vapeur',
    description: 'Punaises de lit à Villeneuve-le-Roi : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Villeneuve-le-Roi, beaucoup de familles tentent d\'abord les insecticides du commerce. Mal utilisés, ils dispersent les punaises de lit dans les autres pièces sans régler le problème.',
      'Nous traitons par cryogénie et vapeur sèche, sans insecticide, ou par insecticide professionnel appliqué par un technicien Certibiocide, en deux passages.',
    ],
    proches: ['Orly', 'Ablon-sur-Seine', 'Villeneuve-Saint-Georges', 'Athis-Mons'],
    guides: ['insecticide-punaises-de-lit', 'terre-de-diatomee-punaises-de-lit', 'cryogenie-punaises-de-lit'],
    faq: [
      { q: 'Un insecticide acheté en magasin suffit-il ?', a: 'Rarement. Les punaises de lit résistent souvent aux produits grand public, et une application mal ciblée les fait fuir vers d\'autres pièces. Mieux vaut ne rien pulvériser avant le passage du technicien.' },
      ...FAQ_COMMUNE('à Villeneuve-le-Roi'),
    ],
  },
  {
    slug: 'villeneuve-saint-georges',
    nom: 'Villeneuve-Saint-Georges',
    a: 'à Villeneuve-Saint-Georges',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/villeneuve-saint-georges',
    title: 'Punaises de lit à Villeneuve-Saint-Georges (94) : traitement',
    description: 'Punaises de lit à Villeneuve-Saint-Georges : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Villeneuve-Saint-Georges, beaucoup d\'immeubles anciens et de logements partagés favorisent le passage des punaises de lit d\'un appartement à l\'autre, par les plinthes, les fissures et les gaines.',
      'Nous traitons par cryogénie et vapeur sèche, sans insecticide, ou par insecticide professionnel, et nous conseillons de faire inspecter les logements voisins.',
    ],
    proches: ['Valenton', 'Crosne', 'Villeneuve-le-Roi', 'Ablon-sur-Seine'],
    guides: ['punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit'],
    faq: [
      { q: 'Pouvez-vous intervenir le soir ou le week-end ?', a: 'Oui, nous intervenons 7 jours sur 7. Appelez-nous : nous fixons le créneau qui vous convient, avec une intervention le jour même quand c\'est possible.' },
      ...FAQ_COMMUNE('à Villeneuve-Saint-Georges'),
    ],
  },
  {
    slug: 'villiers-sur-marne',
    nom: 'Villiers-sur-Marne',
    a: 'à Villiers-sur-Marne',
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: '/zones/val-de-marne/villiers-sur-marne',
    title: 'Punaises de lit à Villiers-sur-Marne (94) : traitement',
    description: 'Punaises de lit à Villiers-sur-Marne : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC.',
    contexte: [
      'À Villiers-sur-Marne, entre la gare du RER E et les quartiers pavillonnaires, nous traitons aussi bien des appartements que des maisons. Plus l\'infestation est ancienne, plus les punaises de lit se sont dispersées dans le logement.',
      'Pour une infestation récente, la cryogénie et la vapeur sèche suffisent, sans insecticide. Pour une infestation installée, l\'insecticide professionnel reste le plus efficace.',
    ],
    proches: ['Champigny-sur-Marne', 'Bry-sur-Marne', 'Le Plessis-Trévise', 'Noisy-le-Grand'],
    guides: ['insecticide-punaises-de-lit', 'cryogenie-punaises-de-lit', 'punaises-de-lit-sans-insecticide'],
    faq: [
      { q: 'Les punaises de lit résistent-elles aux insecticides ?', a: 'Oui, de nombreuses populations résistent à certains insecticides. C\'est pourquoi nous combinons les méthodes (froid, vapeur, insecticide professionnel) et prévoyons toujours deux passages.' },
      ...FAQ_COMMUNE('à Villiers-sur-Marne'),
    ],
  },
  // ── Essonne, Seine-et-Marne, Yvelines : 10 plus grandes villes de chaque département (11/11/2026) ──
  {
      "slug": "versailles",
      "nom": "Versailles",
      "a": "à Versailles",
      "code": "78",
      "departement": "Yvelines",
      "zoneHref": "/zones/yvelines",
      "title": "Punaises de lit à Versailles (78) : cryogénie, vapeur",
      "description": "Punaises de lit à Versailles : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Versailles accueille chaque jour des visiteurs du monde entier, et de nombreux hôtels et locations meublées autour du château. Les punaises de lit voyagent dans les valises et s'installent dans les chambres, puis dans les logements des habitants.",
          "Dans les appartements anciens des quartiers Notre-Dame et Saint-Louis, les parquets et les boiseries offrent beaucoup de cachettes : le traitement doit être minutieux, couture par couture et latte par latte."
      ],
      "proches": [
          "Le Chesnay-Rocquencourt",
          "Viroflay",
          "Saint-Cyr-l’École",
          "Buc"
      ],
      "guides": [
          "punaises-de-lit-airbnb-location-courte-duree",
          "cryogenie-punaises-de-lit",
          "punaises-de-lit-sans-insecticide"
      ],
      "faq": [
        {"q": "Les hôtels de Versailles peuvent-ils traiter une chambre rapidement ?", "a": "Oui. Avec la cryogénie, la chambre est traitée sans produit et peut être relouée rapidement. Nous remettons une attestation d'intervention."},
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
      "title": "Punaises de lit à Sartrouville (78) : cryogénie, vapeur",
      "description": "Punaises de lit à Sartrouville : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Sartrouville compte de grandes résidences et de nombreux pavillons, avec beaucoup de navetteurs qui prennent le RER A chaque jour. Les punaises de lit voyagent dans les sacs et les vêtements avant de s'installer près des lits.",
          "Dans les résidences, une infestation peut passer d'un logement à l'autre par les gaines et les plinthes : prévenir rapidement le bailleur permet de traiter les logements voisins en même temps."
      ],
      "proches": [
          "Houilles",
          "Montesson",
          "Maisons-Laffitte",
          "Cormeilles-en-Parisis"
      ],
      "guides": [
          "punaises-de-lit-sans-insecticide",
          "insecticide-punaises-de-lit",
          "cryogenie-punaises-de-lit"
      ],
      "faq": [
        {"q": "Faut-il prévenir les voisins en cas de punaises de lit à Sartrouville ?", "a": "C'est conseillé en immeuble : les punaises circulent par les gaines et les cloisons. Un traitement coordonné évite les réinfestations."},
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
      "title": "Punaises de lit à Saint-Germain-en-Laye (78) : cryogénie, vapeur",
      "description": "Punaises de lit à Saint-Germain-en-Laye : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Saint-Germain-en-Laye attire touristes, étudiants et familles, avec de nombreuses locations meublées dans le centre historique. Les grands appartements anciens, aux parquets et aux boiseries anciennes, offrent beaucoup de cachettes aux punaises.",
          "Pour les meubles anciens et les matières délicates, la cryogénie et la vapeur sèche permettent de traiter en profondeur sans abîmer le bois ni les tissus."
      ],
      "proches": [
          "Le Pecq",
          "Chambourcy",
          "Mareil-Marly",
          "Poissy"
      ],
      "guides": [
          "cryogenie-punaises-de-lit",
          "vapeur-seche-punaises-de-lit",
          "punaises-de-lit-airbnb-location-courte-duree"
      ],
      "faq": [
        {"q": "Peut-on traiter un lit ancien contre les punaises sans l'abîmer ?", "a": "Oui. La cryogénie ne mouille pas et n'utilise aucun produit : elle atteint les assemblages et les fentes du bois sans l'endommager."},
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
      "title": "Punaises de lit à Mantes-la-Jolie (78) : cryogénie, vapeur",
      "description": "Punaises de lit à Mantes-la-Jolie : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Mantes-la-Jolie compte de grands quartiers d'habitat collectif, comme le Val Fourré, où une infestation peut gagner plusieurs logements d'un même immeuble. Les familles nombreuses ont souvent beaucoup de lits à inspecter.",
          "Nous travaillons avec les familles comme avec les bailleurs, et remettons une attestation d'intervention utile pour les démarches entre locataire et propriétaire."
      ],
      "proches": [
          "Mantes-la-Ville",
          "Buchelay",
          "Limay",
          "Magnanville"
      ],
      "guides": [
          "insecticide-punaises-de-lit",
          "punaises-de-lit-sans-insecticide",
          "terre-de-diatomee-punaises-de-lit"
      ],
      "faq": [
        {"q": "Mon bailleur doit-il payer le traitement à Mantes-la-Jolie ?", "a": "Si les punaises étaient là à votre arrivée, le logement n'était pas décent : prévenez-le par écrit. Notre attestation vous aide dans vos démarches."},
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
      "title": "Punaises de lit à Poissy (78) : cryogénie, vapeur",
      "description": "Punaises de lit à Poissy : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Poissy accueille de nombreux salariés et intérimaires, parfois logés en foyer ou en meublé, ainsi que des familles dans les quartiers résidentiels. Les logements partagés sont particulièrement exposés aux punaises.",
          "Dans les foyers et résidences, nous traitons chambre par chambre avec une organisation qui permet de continuer à loger les occupants."
      ],
      "proches": [
          "Saint-Germain-en-Laye",
          "Carrières-sous-Poissy",
          "Villennes-sur-Seine",
          "Orgeval"
      ],
      "guides": [
          "punaises-de-lit-airbnb-location-courte-duree",
          "insecticide-punaises-de-lit",
          "cryogenie-punaises-de-lit"
      ],
      "faq": [
        {"q": "Un foyer de travailleurs à Poissy peut-il être traité sans fermer ?", "a": "Oui, en organisant le traitement chambre par chambre. La cryogénie permet de remettre une chambre en service rapidement."},
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
      "title": "Punaises de lit à Conflans-Sainte-Honorine (78) : cryogénie, vapeur",
      "description": "Punaises de lit à Conflans-Sainte-Honorine : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "À Conflans-Sainte-Honorine, beaucoup de familles vivent en pavillon ou en petit immeuble, et les punaises arrivent le plus souvent avec un voyage, un séjour à l'hôtel ou un meuble d'occasion.",
          "Dans une maison, toutes les chambres où quelqu'un a dormi depuis le début des piqûres doivent être inspectées, y compris le canapé du salon."
      ],
      "proches": [
          "Andrésy",
          "Maurecourt",
          "Herblay-sur-Seine",
          "Achères"
      ],
      "guides": [
          "punaises-de-lit-sans-insecticide",
          "vapeur-seche-punaises-de-lit",
          "terre-de-diatomee-punaises-de-lit"
      ],
      "faq": [
        {"q": "J'ai acheté un lit d'occasion à Conflans et je suis piqué : que faire ?", "a": "Ne déplacez pas le lit et appelez-nous : les meubles d'occasion sont une source fréquente de punaises. Le technicien inspecte le lit et la chambre."},
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
      "title": "Punaises de lit à Trappes (78) : cryogénie, vapeur",
      "description": "Punaises de lit à Trappes : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Trappes compte beaucoup de logements collectifs où vivent des familles nombreuses. Quand une infestation démarre dans un logement, elle peut vite toucher les voisins par les gaines et les cloisons.",
          "Nous traitons avec les familles et les bailleurs, et nous laissons une fiche de préparation simple pour que le traitement soit efficace dès le premier passage."
      ],
      "proches": [
          "Élancourt",
          "Montigny-le-Bretonneux",
          "Plaisir",
          "La Verrière"
      ],
      "guides": [
          "insecticide-punaises-de-lit",
          "punaises-de-lit-sans-insecticide",
          "cryogenie-punaises-de-lit"
      ],
      "faq": [
        {"q": "Combien de lits faut-il traiter dans une famille nombreuse ?", "a": "Tous les lits des pièces touchées, et souvent ceux des pièces voisines. Le technicien les inspecte un par un, matelas d'appoint compris."},
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
      "title": "Punaises de lit aux Mureaux (78) : cryogénie, vapeur",
      "description": "Punaises de lit aux Mureaux : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Aux Mureaux, beaucoup de familles vivent en résidence, et les punaises de lit passent facilement d'un logement à l'autre si personne ne prévient. Les lits superposés et les matelas d'appoint sont des cachettes fréquentes.",
          "Nous proposons le traitement insecticide comme les méthodes sans insecticide, selon le logement et la présence de jeunes enfants."
      ],
      "proches": [
          "Meulan-en-Yvelines",
          "Ecquevilly",
          "Verneuil-sur-Seine",
          "Bouafle"
      ],
      "guides": [
          "punaises-de-lit-sans-insecticide",
          "cryogenie-punaises-de-lit",
          "insecticide-punaises-de-lit"
      ],
      "faq": [
        {"q": "Peut-on traiter une chambre d'enfant sans insecticide aux Mureaux ?", "a": "Oui, avec la cryogénie et la vapeur sèche : aucun produit n'est déposé et la chambre est utilisable le soir même."},
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
      "title": "Punaises de lit à Houilles (78) : cryogénie, vapeur",
      "description": "Punaises de lit à Houilles : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Houilles est une ville de pavillons et de petits immeubles, avec beaucoup de navetteurs qui partent chaque jour vers Paris et La Défense. Les punaises de lit voyagent dans les sacs, les valises et les vêtements.",
          "Dans les pavillons, une infestation commence souvent dans une seule chambre : agir vite évite qu'elle gagne le reste de la maison."
      ],
      "proches": [
          "Sartrouville",
          "Carrières-sur-Seine",
          "Bezons",
          "Chatou"
      ],
      "guides": [
          "vapeur-seche-punaises-de-lit",
          "punaises-de-lit-sans-insecticide",
          "punaises-de-lit-airbnb-location-courte-duree"
      ],
      "faq": [
        {"q": "Je prends les transports tous les jours à Houilles : comment éviter les punaises ?", "a": "Posez votre sac loin du lit en rentrant, lavez à 60 °C les vêtements portés lors d'un voyage, et inspectez votre valise après un séjour à l'hôtel."},
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
      "title": "Punaises de lit à Montigny-le-Bretonneux (78) : cryogénie, vapeur",
      "description": "Punaises de lit à Montigny-le-Bretonneux : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Montigny-le-Bretonneux accueille de nombreux salariés en déplacement, des hôtels d'affaires et des résidences récentes. Les voyages professionnels sont une source fréquente de punaises dans les logements.",
          "Pour les hôtels et résidences de services, nous intervenons rapidement, avec une attestation d'intervention pour le registre."
      ],
      "proches": [
          "Guyancourt",
          "Voisins-le-Bretonneux",
          "Trappes",
          "Élancourt"
      ],
      "guides": [
          "punaises-de-lit-airbnb-location-courte-duree",
          "cryogenie-punaises-de-lit",
          "vapeur-seche-punaises-de-lit"
      ],
      "faq": [
        {"q": "Un hôtel d'affaires à Montigny peut-il être traité discrètement ?", "a": "Oui : intervention aux heures creuses, chambre par chambre, avec la cryogénie pour relouer vite, et attestation remise à la direction."},
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
      "title": "Punaises de lit à Évry-Courcouronnes (91) : cryogénie, vapeur",
      "description": "Punaises de lit à Évry-Courcouronnes : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Évry-Courcouronnes accueille une université, de nombreux étudiants, des résidences et des grands ensembles. Les déménagements fréquents et les meubles qui circulent favorisent les punaises de lit.",
          "Dans les résidences étudiantes et les colocations, toutes les chambres doivent être inspectées, même si un seul occupant est piqué."
      ],
      "proches": [
          "Ris-Orangis",
          "Corbeil-Essonnes",
          "Lisses",
          "Bondoufle"
      ],
      "guides": [
          "punaises-de-lit-sans-insecticide",
          "punaises-de-lit-airbnb-location-courte-duree",
          "cryogenie-punaises-de-lit"
      ],
      "faq": [
        {"q": "Une résidence étudiante à Évry peut-elle être traitée chambre par chambre ?", "a": "Oui. Nous organisons l'intervention avec le gestionnaire, chambre par chambre, avec une attestation pour chaque logement traité."},
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
      "title": "Punaises de lit à Corbeil-Essonnes (91) : cryogénie, vapeur",
      "description": "Punaises de lit à Corbeil-Essonnes : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Corbeil-Essonnes compte un centre ancien aux immeubles anciens, et de grands quartiers d'habitat collectif. Les parquets fendus et les papiers peints décollés sont des cachettes classiques.",
          "Le technicien vérifie les plinthes, les prises et le papier peint autour des lits avant de choisir la méthode adaptée."
      ],
      "proches": [
          "Évry-Courcouronnes",
          "Saint-Germain-lès-Corbeil",
          "Villabé",
          "Le Coudray-Montceaux"
      ],
      "guides": [
          "insecticide-punaises-de-lit",
          "vapeur-seche-punaises-de-lit",
          "punaises-de-lit-sans-insecticide"
      ],
      "faq": [
        {"q": "Les punaises peuvent-elles se cacher derrière le papier peint ?", "a": "Oui, surtout quand il est décollé près du lit. Le technicien vérifie ces zones et les traite avec le reste de la chambre."},
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
      "title": "Punaises de lit à Massy (91) : cryogénie, vapeur",
      "description": "Punaises de lit à Massy : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Massy est un grand nœud de gares, avec le TGV et le RER : beaucoup de voyageurs y passent, et les hôtels du quartier Atlantis accueillent une clientèle d'affaires. Les punaises voyagent avec les bagages.",
          "Dans les appartements neufs comme dans les pavillons, une infestation commence souvent après un voyage : agir vite simplifie le traitement."
      ],
      "proches": [
          "Palaiseau",
          "Antony",
          "Wissous",
          "Chilly-Mazarin"
      ],
      "guides": [
          "punaises-de-lit-airbnb-location-courte-duree",
          "cryogenie-punaises-de-lit",
          "insecticide-punaises-de-lit"
      ],
      "faq": [
        {"q": "Peut-on avoir des punaises dans un logement neuf à Massy ?", "a": "Oui : elles arrivent avec les occupants, leurs bagages et leurs meubles, pas avec le bâtiment. Un logement neuf n'est pas protégé."},
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
      "title": "Punaises de lit à Savigny-sur-Orge (91) : cryogénie, vapeur",
      "description": "Punaises de lit à Savigny-sur-Orge : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Savigny-sur-Orge est une ville de pavillons, où les punaises arrivent le plus souvent avec un voyage, une visite ou un meuble d'occasion. Elles s'installent d'abord dans la chambre de celui qui a rapporté le bagage.",
          "Nous inspectons toute la maison pour savoir jusqu'où elles sont allées, puis nous traitons pièce par pièce."
      ],
      "proches": [
          "Viry-Châtillon",
          "Morsang-sur-Orge",
          "Juvisy-sur-Orge",
          "Épinay-sur-Orge"
      ],
      "guides": [
          "punaises-de-lit-sans-insecticide",
          "vapeur-seche-punaises-de-lit",
          "terre-de-diatomee-punaises-de-lit"
      ],
      "faq": [
        {"q": "La terre de diatomée suffit-elle contre les punaises ?", "a": "Non, seule elle ne règle pas une infestation installée et ne tue pas les œufs cachés. Elle peut au mieux compléter un traitement professionnel."},
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
      "title": "Punaises de lit à Palaiseau (91) : cryogénie, vapeur",
      "description": "Punaises de lit à Palaiseau : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Palaiseau accueille de grands établissements d'enseignement et de recherche, avec de nombreux étudiants et chercheurs logés en résidence ou en colocation. Les chambres changent souvent d'occupant.",
          "Dans les maisons anciennes du centre, les parquets et les boiseries demandent un traitement minutieux au ras du sol."
      ],
      "proches": [
          "Massy",
          "Orsay",
          "Igny",
          "Villebon-sur-Yvette"
      ],
      "guides": [
          "cryogenie-punaises-de-lit",
          "punaises-de-lit-sans-insecticide",
          "punaises-de-lit-airbnb-location-courte-duree"
      ],
      "faq": [
        {"q": "Je suis étudiant à Palaiseau et je suis piqué la nuit : que faire ?", "a": "Prévenez le gestionnaire de votre résidence, ne changez pas de chambre et ne jetez pas le matelas. Une inspection confirme s'il s'agit de punaises."},
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
      "title": "Punaises de lit à Athis-Mons (91) : cryogénie, vapeur",
      "description": "Punaises de lit à Athis-Mons : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Athis-Mons, voisine de l'aéroport d'Orly, accueille de nombreux personnels navigants et voyageurs, et des hôtels proches des pistes. Les punaises de lit circulent avec les bagages.",
          "Dans les pavillons et résidences, nous traitons la chambre touchée et vérifions les pièces voisines, pour stopper l'infestation dès le départ."
      ],
      "proches": [
          "Paray-Vieille-Poste",
          "Juvisy-sur-Orge",
          "Morangis",
          "Ablon-sur-Seine"
      ],
      "guides": [
          "punaises-de-lit-airbnb-location-courte-duree",
          "vapeur-seche-punaises-de-lit",
          "punaises-de-lit-sans-insecticide"
      ],
      "faq": [
        {"q": "Je voyage souvent depuis Orly : comment ne pas ramener de punaises ?", "a": "Utilisez une housse de valise, ne posez pas vos bagages sur le lit de l'hôtel, et lavez vos vêtements à 60 °C au retour."},
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
      "title": "Punaises de lit à Sainte-Geneviève-des-Bois (91) : cryogénie, vapeur",
      "description": "Punaises de lit à Sainte-Geneviève-des-Bois : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Sainte-Geneviève-des-Bois est une ville surtout pavillonnaire, où les familles découvrent souvent les punaises après des vacances ou la visite de proches.",
          "Les chambres d'amis peu utilisées sont des foyers fréquents : les punaises peuvent y attendre longtemps avant d'être découvertes."
      ],
      "proches": [
          "Saint-Michel-sur-Orge",
          "Fleury-Mérogis",
          "Morsang-sur-Orge",
          "Villemoisson-sur-Orge"
      ],
      "guides": [
          "vapeur-seche-punaises-de-lit",
          "punaises-de-lit-sans-insecticide",
          "cryogenie-punaises-de-lit"
      ],
      "faq": [
        {"q": "Les punaises peuvent-elles survivre dans une chambre inoccupée ?", "a": "Oui, elles peuvent jeûner longtemps. Une chambre d'amis inoccupée doit être inspectée avec le reste de la maison."},
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
      "title": "Punaises de lit à Vigneux-sur-Seine (91) : cryogénie, vapeur",
      "description": "Punaises de lit à Vigneux-sur-Seine : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Vigneux-sur-Seine compte de grandes résidences et des quartiers pavillonnaires. Dans les immeubles, une infestation peut se propager d'un étage à l'autre si elle n'est pas traitée rapidement.",
          "Nous coordonnons le traitement avec les bailleurs quand plusieurs logements sont touchés, et nous laissons une fiche de préparation claire aux familles."
      ],
      "proches": [
          "Draveil",
          "Montgeron",
          "Athis-Mons",
          "Juvisy-sur-Orge"
      ],
      "guides": [
          "insecticide-punaises-de-lit",
          "punaises-de-lit-sans-insecticide",
          "cryogenie-punaises-de-lit"
      ],
      "faq": [
        {"q": "Plusieurs voisins ont des punaises à Vigneux : que faire ?", "a": "Prévenez le bailleur ou le syndic : un traitement coordonné des logements touchés évite que les punaises circulent d'un appartement à l'autre."},
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
      "title": "Punaises de lit à Ris-Orangis (91) : cryogénie, vapeur",
      "description": "Punaises de lit à Ris-Orangis : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Ris-Orangis compte des résidences, des pavillons et quelques foyers, où les chambres changent souvent d'occupant. Les punaises de lit passent alors d'un résident à l'autre.",
          "Pour les gestionnaires de foyers, nous intervenons chambre par chambre avec une attestation pour le registre."
      ],
      "proches": [
          "Évry-Courcouronnes",
          "Grigny",
          "Draveil",
          "Bondoufle"
      ],
      "guides": [
          "punaises-de-lit-airbnb-location-courte-duree",
          "cryogenie-punaises-de-lit",
          "insecticide-punaises-de-lit"
      ],
      "faq": [
        {"q": "Un gestionnaire de foyer à Ris-Orangis peut-il avoir un suivi ?", "a": "Oui, avec des inspections régulières et un traitement rapide des chambres signalées, pour éviter que l'infestation s'étende."},
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
      "title": "Punaises de lit à Viry-Châtillon (91) : cryogénie, vapeur",
      "description": "Punaises de lit à Viry-Châtillon : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Viry-Châtillon mêle pavillons et résidences. Les familles nous appellent souvent après un retour de vacances, quand les piqûres apparaissent dans plusieurs chambres.",
          "Au retour de voyage, défaire la valise dans la salle de bain et laver le linge à 60 °C limite beaucoup le risque."
      ],
      "proches": [
          "Grigny",
          "Savigny-sur-Orge",
          "Juvisy-sur-Orge",
          "Morsang-sur-Orge"
      ],
      "guides": [
          "vapeur-seche-punaises-de-lit",
          "punaises-de-lit-sans-insecticide",
          "punaises-de-lit-airbnb-location-courte-duree"
      ],
      "faq": [
        {"q": "Pourquoi des punaises juste après les vacances à Viry-Châtillon ?", "a": "Elles voyagent dans les valises depuis un hôtel ou une location. Au retour, elles s'installent près du lit et pondent rapidement."},
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
      "title": "Punaises de lit à Meaux (77) : cryogénie, vapeur",
      "description": "Punaises de lit à Meaux : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Meaux, grande ville de Seine-et-Marne, compte un centre ancien, des hôtels et de grands quartiers d'habitat collectif. Les punaises de lit y circulent avec les voyageurs et les déménagements.",
          "Dans les immeubles anciens du centre, les parquets et les plinthes sont des cachettes fréquentes, traitées avec soin au ras du sol."
      ],
      "proches": [
          "Trilport",
          "Nanteuil-lès-Meaux",
          "Chauconin-Neufmontiers",
          "Mareuil-lès-Meaux"
      ],
      "guides": [
          "insecticide-punaises-de-lit",
          "cryogenie-punaises-de-lit",
          "punaises-de-lit-sans-insecticide"
      ],
      "faq": [
        {"q": "Intervenez-vous pour les punaises de lit à Meaux ?", "a": "Oui, en Seine-et-Marne aussi. Appelez le 07 68 07 72 19 pour connaître la disponibilité ; le devis est gratuit."},
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
      "title": "Punaises de lit à Chelles (77) : cryogénie, vapeur",
      "description": "Punaises de lit à Chelles : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Chelles est une grande ville pavillonnaire avec des résidences, proche de Paris par le RER E. Les navetteurs et les familles qui voyagent rapportent parfois des punaises dans leurs bagages.",
          "Dans une maison, le traitement couvre la chambre touchée, les pièces voisines et le canapé si quelqu'un y a dormi."
      ],
      "proches": [
          "Vaires-sur-Marne",
          "Gagny",
          "Montfermeil",
          "Brou-sur-Chantereine"
      ],
      "guides": [
          "punaises-de-lit-sans-insecticide",
          "vapeur-seche-punaises-de-lit",
          "cryogenie-punaises-de-lit"
      ],
      "faq": [
        {"q": "Faut-il traiter le canapé contre les punaises ?", "a": "Oui si quelqu'un y a dormi ou s'y repose souvent : les punaises suivent les personnes. La vapeur sèche traite les canapés en tissu en profondeur."},
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
      "title": "Punaises de lit à Melun (77) : cryogénie, vapeur",
      "description": "Punaises de lit à Melun : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Melun, préfecture, accueille de nombreux services publics, des hôtels et des logements loués meublés. Les punaises de lit voyagent avec les déplacements professionnels et les changements de locataires.",
          "Pour les propriétaires de meublés, un traitement entre deux locations, avec attestation, protège en cas de litige."
      ],
      "proches": [
          "Dammarie-lès-Lys",
          "Le Mée-sur-Seine",
          "Vaux-le-Pénil",
          "Rubelles"
      ],
      "guides": [
          "punaises-de-lit-airbnb-location-courte-duree",
          "insecticide-punaises-de-lit",
          "cryogenie-punaises-de-lit"
      ],
      "faq": [
        {"q": "Je loue un meublé à Melun : comment éviter les punaises entre deux locataires ?", "a": "Faites inspecter le logement à chaque départ, et traitez rapidement en cas de doute. Notre attestation vous protège en cas de réclamation."},
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
      "title": "Punaises de lit à Pontault-Combault (77) : cryogénie, vapeur",
      "description": "Punaises de lit à Pontault-Combault : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Pontault-Combault est une ville de pavillons et de résidences, où les punaises arrivent souvent avec un meuble d'occasion ou un retour de voyage.",
          "Nous inspectons le lit, le sommier latte par latte, les plinthes et le canapé, puis nous choisissons la méthode avec vous."
      ],
      "proches": [
          "Roissy-en-Brie",
          "Émerainville",
          "Ozoir-la-Ferrière",
          "Le Plessis-Trévise"
      ],
      "guides": [
          "punaises-de-lit-sans-insecticide",
          "vapeur-seche-punaises-de-lit",
          "terre-de-diatomee-punaises-de-lit"
      ],
      "faq": [
        {"q": "Les lattes du sommier peuvent-elles cacher des punaises ?", "a": "Oui, surtout dans les trous où elles s'emboîtent. Le technicien les démonte et les inspecte une par une."},
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
      "title": "Punaises de lit à Savigny-le-Temple (77) : cryogénie, vapeur",
      "description": "Punaises de lit à Savigny-le-Temple : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Savigny-le-Temple, ville récente de Sénart, accueille beaucoup de jeunes familles. Les punaises y arrivent avec les déménagements, les meubles d'occasion et les voyages.",
          "Pour les chambres d'enfants, la cryogénie et la vapeur sèche permettent de traiter sans produit, avec un insecticide limité aux sols si nécessaire."
      ],
      "proches": [
          "Cesson",
          "Nandy",
          "Vert-Saint-Denis",
          "Saint-Pierre-du-Perray"
      ],
      "guides": [
          "cryogenie-punaises-de-lit",
          "punaises-de-lit-sans-insecticide",
          "vapeur-seche-punaises-de-lit"
      ],
      "faq": [
        {"q": "Peut-on traiter les punaises avec un bébé à la maison ?", "a": "Oui. La cryogénie et la vapeur sèche ne déposent aucun produit ; le technicien adapte le protocole à la présence d'un bébé."},
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
      "title": "Punaises de lit à Bussy-Saint-Georges (77) : cryogénie, vapeur",
      "description": "Punaises de lit à Bussy-Saint-Georges : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Bussy-Saint-Georges, proche des parcs de loisirs de Marne-la-Vallée et de nombreux hôtels, accueille beaucoup de voyageurs. Les punaises de lit circulent entre les hôtels et les logements.",
          "Dans les logements neufs, elles arrivent avec les occupants et leurs bagages : un bâtiment récent n'est pas protégé."
      ],
      "proches": [
          "Bussy-Saint-Martin",
          "Collégien",
          "Montévrain",
          "Jossigny"
      ],
      "guides": [
          "punaises-de-lit-airbnb-location-courte-duree",
          "cryogenie-punaises-de-lit",
          "punaises-de-lit-sans-insecticide"
      ],
      "faq": [
        {"q": "Les hôtels autour de Marne-la-Vallée sont-ils exposés aux punaises ?", "a": "Oui, comme tous les lieux qui accueillent beaucoup de voyageurs. Une intervention rapide et discrète, chambre par chambre, limite les dégâts."},
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
      "title": "Punaises de lit à Champs-sur-Marne (77) : cryogénie, vapeur",
      "description": "Punaises de lit à Champs-sur-Marne : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Champs-sur-Marne accueille la cité Descartes et ses nombreux étudiants, logés en résidence ou en colocation. Les matelas et les lits passent d'un occupant à l'autre, et les punaises suivent.",
          "Dans les pavillons, les infestations démarrent le plus souvent après un voyage ou l'achat d'un meuble d'occasion."
      ],
      "proches": [
          "Noisiel",
          "Torcy",
          "Noisy-le-Grand",
          "Émerainville"
      ],
      "guides": [
          "punaises-de-lit-sans-insecticide",
          "terre-de-diatomee-punaises-de-lit",
          "cryogenie-punaises-de-lit"
      ],
      "faq": [
        {"q": "Je suis étudiant à Champs-sur-Marne : qui paie le traitement ?", "a": "Dans une résidence, prévenez le gestionnaire. En location classique, si les punaises étaient là à votre arrivée, c'est en principe au bailleur."},
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
      "title": "Punaises de lit à Villeparisis (77) : cryogénie, vapeur",
      "description": "Punaises de lit à Villeparisis : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Villeparisis est une ville surtout pavillonnaire, desservie par le RER B. Les familles découvrent souvent les punaises après des vacances ou la visite de proches venus avec leurs bagages.",
          "Nous traitons la maison pièce par pièce et planifions le second passage dès la première intervention."
      ],
      "proches": [
          "Mitry-Mory",
          "Claye-Souilly",
          "Vaujours",
          "Courtry"
      ],
      "guides": [
          "vapeur-seche-punaises-de-lit",
          "punaises-de-lit-sans-insecticide",
          "punaises-de-lit-airbnb-location-courte-duree"
      ],
      "faq": [
        {"q": "Combien de temps entre les deux passages ?", "a": "En général 10 à 15 jours, le temps que les œufs éclosent. Le second passage élimine ces jeunes punaises avant qu'elles ne pondent."},
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
      "title": "Punaises de lit à Dammarie-lès-Lys (77) : cryogénie, vapeur",
      "description": "Punaises de lit à Dammarie-lès-Lys : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Dammarie-lès-Lys compte des résidences et des pavillons, et les punaises de lit peuvent passer d'un logement à l'autre dans les immeubles. Les familles nombreuses ont souvent plusieurs chambres touchées.",
          "Nous laissons une fiche de préparation simple : linge en sacs fermés, lavage à 60 °C, aucun déplacement de meubles entre les pièces."
      ],
      "proches": [
          "Melun",
          "Le Mée-sur-Seine",
          "Boissise-le-Roi",
          "Chartrettes"
      ],
      "guides": [
          "insecticide-punaises-de-lit",
          "punaises-de-lit-sans-insecticide",
          "cryogenie-punaises-de-lit"
      ],
      "faq": [
        {"q": "Faut-il jeter le matelas en cas de punaises ?", "a": "Non, la plupart du temps il peut être traité. Le jeter dans l'escalier risque même de disperser les punaises dans l'immeuble."},
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
      "title": "Punaises de lit à Combs-la-Ville (77) : cryogénie, vapeur",
      "description": "Punaises de lit à Combs-la-Ville : traitement insecticide ou cryogénie et vapeur sans insecticide. 2 passages inclus, dès 290 € TTC, garantie 1 an.",
      "contexte": [
          "Combs-la-Ville est une ville de pavillons, où les punaises arrivent généralement avec un bagage ou un meuble d'occasion. Elles s'installent d'abord dans une chambre avant de gagner les autres pièces.",
          "Une inspection complète de la maison, chambre par chambre, évite d'oublier un foyer."
      ],
      "proches": [
          "Moissy-Cramayel",
          "Quincy-sous-Sénart",
          "Brie-Comte-Robert",
          "Lieusaint"
      ],
      "guides": [
          "punaises-de-lit-sans-insecticide",
          "cryogenie-punaises-de-lit",
          "vapeur-seche-punaises-de-lit"
      ],
      "faq": [
        {"q": "Comment savoir si les punaises ont gagné d'autres chambres ?", "a": "Le technicien inspecte chaque lit et chaque canapé, à la recherche de points noirs, de mues et d'œufs. C'est cette carte qui décide du traitement."},
        ...FAQ_COMMUNE("à Combs-la-Ville"),
      ]
    },
]

export function getVillePunaises(slug: string) {
  return VILLES_PUNAISES.find((v) => v.slug === slug)
}
