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
    tag: 'Sans produit',
    texte: 'Neige carbonique à environ −78 °C : le choc thermique tue les punaises et leurs œufs au contact. Sèche, sans résidu ni odeur, idéale pour les fentes, cadres de lit et plinthes.',
    guide: 'cryogenie-punaises-de-lit',
  },
  {
    titre: 'Vapeur sèche',
    tag: 'Sans produit',
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
    texte: 'Pour les infestations importantes : insecticide rémanent sur les zones infestées et voisines, par un technicien Certibiocide. Absence de 4 à 6 heures, puis passage de contrôle.',
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
]

export function getVillePunaises(slug: string) {
  return VILLES_PUNAISES.find((v) => v.slug === slug)
}
