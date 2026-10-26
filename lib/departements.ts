// Pages locales par département d'Île-de-France (/zones/[slug]).
// Règles CLAUDE.md : pas de chiffre inventé, pas de tiret long, rien de « naturel » ou « sans danger ».

export type ServiceSlug =
  | 'deratisation' | 'rongeurs' | 'cafards-blattes' | 'punaises-de-lit'
  | 'fourmis' | 'guepes-frelons' | 'pigeons' | 'desinfection'

export type Departement = {
  slug: string
  code: string
  nom: string
  dans: string // « en Seine-et-Marne », « dans les Yvelines », « à Paris »
  title: string // 40 à 60 caractères
  description: string
  intro: string[]
  situations: { service: ServiceSlug; titre: string; texte: string }[]
  communes: string[]
}

export const SERVICES: Record<ServiceSlug, { nom: string; icon: string }> = {
  deratisation: { nom: 'Dératisation', icon: 'deratisation' },
  rongeurs: { nom: 'Rats et souris', icon: 'rongeurs' },
  'cafards-blattes': { nom: 'Cafards et blattes', icon: 'cafards-blattes' },
  'punaises-de-lit': { nom: 'Punaises de lit', icon: 'punaises-de-lit' },
  fourmis: { nom: 'Fourmis', icon: 'fourmis' },
  'guepes-frelons': { nom: 'Guêpes et frelons', icon: 'guepes-frelons' },
  pigeons: { nom: 'Pigeons', icon: 'pigeons' },
  desinfection: { nom: 'Désinfection', icon: 'desinfection' },
}

export const DEPARTEMENTS_IDF: Departement[] = [
  {
    slug: 'paris',
    code: '75',
    nom: 'Paris',
    dans: 'à Paris',
    title: 'Anti-nuisibles à Paris, intervention le jour même',
    description: 'Punaises de lit, cafards, rats et souris à Paris : techniciens certifiés Certibiocide dans les 20 arrondissements, 7j/7. Devis gratuit.',
    intro: [
      'Immeubles anciens, caves, cours intérieures, restaurants au rez-de-chaussée : à Paris, les nuisibles circulent facilement d\'un logement à l\'autre. Un problème chez un voisin peut devenir le vôtre en quelques semaines.',
      'Nos techniciens interviennent dans les 20 arrondissements, chez les particuliers comme chez les commerçants et les syndics, avec un protocole adapté aux appartements et aux parties communes.',
    ],
    situations: [
      { service: 'punaises-de-lit', titre: 'Punaises de lit en appartement', texte: 'Valises, meubles d\'occasion, logements meublés : les punaises voyagent facilement. Plus on intervient tôt, plus le traitement est simple.' },
      { service: 'cafards-blattes', titre: 'Cafards dans les cuisines', texte: 'Gaines techniques, colonnes d\'eau et commerces de bouche leur offrent chaleur et nourriture. Le traitement se fait en 2 passages.' },
      { service: 'rongeurs', titre: 'Rats et souris dans les caves', texte: 'Caves, locaux poubelles et cours d\'immeuble sont leurs points d\'entrée habituels. On identifie le passage et on le traite.' },
      { service: 'pigeons', titre: 'Pigeons sur balcons et rebords', texte: 'Fientes, nids, bruit : pics, filets ou répulsifs pour protéger durablement balcons et façades, sans nuire aux oiseaux.' },
    ],
    communes: ['Paris 1er', 'Paris 2e', 'Paris 3e', 'Paris 4e', 'Paris 5e', 'Paris 6e', 'Paris 7e', 'Paris 8e', 'Paris 9e', 'Paris 10e', 'Paris 11e', 'Paris 12e', 'Paris 13e', 'Paris 14e', 'Paris 15e', 'Paris 16e', 'Paris 17e', 'Paris 18e', 'Paris 19e', 'Paris 20e'],
  },
  {
    slug: 'seine-et-marne',
    code: '77',
    nom: 'Seine-et-Marne',
    dans: 'en Seine-et-Marne',
    title: 'Anti-nuisibles en Seine-et-Marne (77), 7j/7',
    description: 'Guêpes, frelons, rats et fourmis en Seine-et-Marne : techniciens certifiés, de Meaux à Melun et Fontainebleau, 7j/7. Devis gratuit.',
    intro: [
      'Plus grand département d\'Île-de-France, la Seine-et-Marne mêle villes nouvelles, zones pavillonnaires, fermes et grandes forêts. Jardins, combles et dépendances y attirent des nuisibles qu\'on voit moins en plein Paris.',
      'Nos techniciens interviennent dans tout le département, du secteur de Marne-la-Vallée à celui de Sénart, jusqu\'à Provins, Coulommiers et Fontainebleau.',
    ],
    situations: [
      { service: 'guepes-frelons', titre: 'Nids de guêpes et de frelons', texte: 'Haies, cabanons, avant-toits et combles : les nids s\'installent vite dans les jardins. Ne vous en approchez pas, on s\'en occupe.' },
      { service: 'rongeurs', titre: 'Rats et souris en pavillon', texte: 'Garages, sous-sols et dépendances sont des abris idéaux, surtout à l\'arrivée du froid. On repère les entrées et on les traite.' },
      { service: 'fourmis', titre: 'Fourmis dans la maison', texte: 'Terrasses et jardins favorisent les colonies qui finissent par entrer dans la cuisine. On cible le nid, pas seulement les ouvrières visibles.' },
    ],
    communes: ['Melun', 'Meaux', 'Chelles', 'Pontault-Combault', 'Savigny-le-Temple', 'Bussy-Saint-Georges', 'Champs-sur-Marne', 'Torcy', 'Lagny-sur-Marne', 'Villeparisis', 'Dammarie-les-Lys', 'Fontainebleau', 'Provins', 'Coulommiers'],
  },
  {
    slug: 'yvelines',
    code: '78',
    nom: 'Yvelines',
    dans: 'dans les Yvelines',
    title: 'Anti-nuisibles dans les Yvelines (78), 7j/7',
    description: 'Guêpes, frelons, rats, souris et fourmis dans les Yvelines : techniciens certifiés, de Versailles à Mantes-la-Jolie, 7j/7. Devis gratuit.',
    intro: [
      'Entre maisons avec jardin, bords de Seine et grandes forêts, les Yvelines offrent aux nuisibles de nombreux abris : combles, haies, abris de jardin, sous-sols.',
      'Nos techniciens interviennent dans tout le département, de Versailles et Saint-Germain-en-Laye jusqu\'à Mantes-la-Jolie et Rambouillet.',
    ],
    situations: [
      { service: 'guepes-frelons', titre: 'Guêpes et frelons au jardin', texte: 'Un nid sous un toit ou dans une haie peut vite devenir dangereux. Un technicien équipé peut intervenir le jour même.' },
      { service: 'rongeurs', titre: 'Rongeurs dans les combles et sous-sols', texte: 'Bruits de grattement la nuit, traces dans le garage : on identifie l\'animal et ses points d\'entrée avant de traiter.' },
      { service: 'fourmis', titre: 'Fourmis au printemps et en été', texte: 'Elles entrent par les terrasses et les seuils. Le traitement vise la colonie entière pour éviter qu\'elles reviennent.' },
    ],
    communes: ['Versailles', 'Saint-Germain-en-Laye', 'Poissy', 'Mantes-la-Jolie', 'Sartrouville', 'Montigny-le-Bretonneux', 'Plaisir', 'Houilles', 'Chatou', 'Le Chesnay-Rocquencourt', 'Maisons-Laffitte', 'Conflans-Sainte-Honorine', 'Les Mureaux', 'Rambouillet'],
  },
  {
    slug: 'essonne',
    code: '91',
    nom: 'Essonne',
    dans: 'en Essonne',
    title: 'Anti-nuisibles en Essonne (91), intervention 7j/7',
    description: 'Rats, souris, guêpes et punaises de lit en Essonne : techniciens certifiés, d\'Évry à Massy et Étampes, 7j/7. Devis gratuit.',
    intro: [
      'L\'Essonne passe des villes denses du nord, comme Massy ou Évry-Courcouronnes, aux villages et zones agricoles du sud. Les nuisibles changent avec le type de logement : immeubles d\'un côté, pavillons et jardins de l\'autre.',
      'Nos techniciens interviennent dans tout le département, de Palaiseau et Athis-Mons jusqu\'à Étampes.',
    ],
    situations: [
      { service: 'rongeurs', titre: 'Rats et souris', texte: 'Pavillons, garages, locaux poubelles de résidence : on traite la présence et on bouche les accès pour éviter le retour.' },
      { service: 'guepes-frelons', titre: 'Nids de guêpes et frelons', texte: 'Avant-toits, volets roulants, arbres du jardin : n\'intervenez jamais seul, un technicien équipé s\'en charge.' },
      { service: 'punaises-de-lit', titre: 'Punaises de lit en résidence', texte: 'Appartements, résidences étudiantes, logements meublés : un traitement professionnel évite qu\'elles se propagent aux voisins.' },
    ],
    communes: ['Évry-Courcouronnes', 'Corbeil-Essonnes', 'Massy', 'Palaiseau', 'Savigny-sur-Orge', 'Sainte-Geneviève-des-Bois', 'Viry-Châtillon', 'Athis-Mons', 'Draveil', 'Yerres', 'Brétigny-sur-Orge', 'Ris-Orangis', 'Longjumeau', 'Étampes'],
  },
  {
    slug: 'hauts-de-seine',
    code: '92',
    nom: 'Hauts-de-Seine',
    dans: 'dans les Hauts-de-Seine',
    title: 'Anti-nuisibles dans les Hauts-de-Seine (92), 7j/7',
    description: 'Punaises de lit, cafards, rats et pigeons dans les Hauts-de-Seine : techniciens certifiés, de Boulogne à Nanterre, 7j/7. Devis gratuit.',
    intro: [
      'Immeubles, résidences, bureaux et commerces : dans les Hauts-de-Seine, les nuisibles passent facilement d\'un logement à l\'autre par les gaines, les caves et les parties communes.',
      'Nos techniciens interviennent chez les particuliers, les syndics et les professionnels, de Boulogne-Billancourt à Nanterre et Antony.',
    ],
    situations: [
      { service: 'punaises-de-lit', titre: 'Punaises de lit', texte: 'Un séjour à l\'hôtel, un meuble d\'occasion, et elles s\'installent. Un protocole professionnel règle le problème sans le déplacer chez le voisin.' },
      { service: 'cafards-blattes', titre: 'Cafards en immeuble', texte: 'Ils circulent par les colonnes et les gaines. Pour un résultat durable, il faut souvent traiter plusieurs logements ou les parties communes.' },
      { service: 'rongeurs', titre: 'Rats et souris', texte: 'Locaux poubelles, parkings, caves : attestation fournie aux syndics et aux professionnels après intervention.' },
      { service: 'pigeons', titre: 'Pigeons en façade', texte: 'Pics, filets et répulsifs pour protéger rebords, balcons et toitures, sans nuire aux oiseaux.' },
    ],
    communes: ['Nanterre', 'Boulogne-Billancourt', 'Colombes', 'Courbevoie', 'Asnières-sur-Seine', 'Rueil-Malmaison', 'Issy-les-Moulineaux', 'Levallois-Perret', 'Neuilly-sur-Seine', 'Antony', 'Clichy', 'Clamart', 'Montrouge', 'Meudon', 'Suresnes', 'Puteaux'],
  },
  {
    slug: 'seine-saint-denis',
    code: '93',
    nom: 'Seine-Saint-Denis',
    dans: 'en Seine-Saint-Denis',
    title: 'Anti-nuisibles en Seine-Saint-Denis (93), 7j/7',
    description: 'Cafards, punaises de lit, rats et souris en Seine-Saint-Denis : techniciens certifiés, de Saint-Denis à Montreuil, 7j/7. Devis gratuit.',
    intro: [
      'En Seine-Saint-Denis, logements collectifs, pavillons et commerces se côtoient. Dans les immeubles, un traitement isolé suffit rarement : les nuisibles passent d\'un appartement à l\'autre.',
      'Nos techniciens interviennent chez les particuliers, les bailleurs, les syndics et les commerçants, de Saint-Denis à Montreuil et Noisy-le-Grand.',
    ],
    situations: [
      { service: 'cafards-blattes', titre: 'Cafards et blattes', texte: 'Protocole en 2 passages pour éliminer les adultes et les cocons d\'œufs. On peut coordonner le traitement avec le syndic ou le bailleur.' },
      { service: 'punaises-de-lit', titre: 'Punaises de lit', texte: 'Démangeaisons au réveil, petites taches sur le matelas : appelez vite, un traitement précoce est plus simple et plus efficace.' },
      { service: 'rongeurs', titre: 'Rats et souris', texte: 'Caves, cours, locaux poubelles et pavillons : identification des points d\'entrée, postes sécurisés et colmatage.' },
    ],
    communes: ['Bobigny', 'Saint-Denis', 'Montreuil', 'Aubervilliers', 'Aulnay-sous-Bois', 'Drancy', 'Noisy-le-Grand', 'Pantin', 'Bondy', 'Épinay-sur-Seine', 'Sevran', 'Le Blanc-Mesnil', 'Saint-Ouen-sur-Seine', 'Rosny-sous-Bois', 'Livry-Gargan'],
  },
  {
    slug: 'val-de-marne',
    code: '94',
    nom: 'Val-de-Marne',
    dans: 'dans le Val-de-Marne',
    title: 'Anti-nuisibles dans le Val-de-Marne (94), 7j/7',
    description: 'Rats, cafards, guêpes et punaises de lit dans le Val-de-Marne : techniciens certifiés, de Créteil à Vincennes, 7j/7. Devis gratuit.',
    intro: [
      'Entre bords de Marne et de Seine, quartiers pavillonnaires et immeubles, le Val-de-Marne connaît à la fois les nuisibles des jardins et ceux des logements collectifs.',
      'Nos techniciens interviennent dans tout le département, de Créteil et Vitry-sur-Seine jusqu\'à Vincennes et Nogent-sur-Marne.',
    ],
    situations: [
      { service: 'rongeurs', titre: 'Rats près des berges et en pavillon', texte: 'Jardins, abris, sous-sols : on repère les terriers et les passages, puis on traite et on sécurise.' },
      { service: 'guepes-frelons', titre: 'Guêpes et frelons', texte: 'Nids dans les haies, les toitures ou les volets roulants : un technicien équipé peut intervenir le jour même.' },
      { service: 'cafards-blattes', titre: 'Cafards en appartement', texte: 'Cuisines et salles de bain sont les premières touchées. Traitement en 2 passages pour un résultat durable.' },
    ],
    communes: ['Créteil', 'Vitry-sur-Seine', 'Saint-Maur-des-Fossés', 'Champigny-sur-Marne', 'Ivry-sur-Seine', 'Maisons-Alfort', 'Villejuif', 'Fontenay-sous-Bois', 'Vincennes', 'Alfortville', 'Choisy-le-Roi', 'Le Perreux-sur-Marne', 'Nogent-sur-Marne', 'Charenton-le-Pont', 'Thiais'],
  },
  {
    slug: 'val-d-oise',
    code: '95',
    nom: 'Val-d\'Oise',
    dans: 'dans le Val-d\'Oise',
    title: 'Anti-nuisibles dans le Val-d\'Oise (95), 7j/7',
    description: 'Guêpes, frelons, rats et punaises de lit dans le Val-d\'Oise : techniciens certifiés, de Cergy à Argenteuil, 7j/7. Devis gratuit.',
    intro: [
      'Le Val-d\'Oise passe des villes du sud, comme Argenteuil ou Sarcelles, aux villages du Vexin et aux forêts. Maisons, jardins et immeubles n\'attirent pas les mêmes nuisibles, et le traitement s\'adapte.',
      'Nos techniciens interviennent dans tout le département, de Cergy et Pontoise jusqu\'à Enghien-les-Bains et Montmorency.',
    ],
    situations: [
      { service: 'guepes-frelons', titre: 'Guêpes et frelons asiatiques', texte: 'Arbres, haies, abris de jardin : ne tentez rien vous-même, un technicien équipé neutralise le nid en sécurité.' },
      { service: 'rongeurs', titre: 'Rats et souris', texte: 'Pavillons, garages et résidences : identification des accès, postes sécurisés et conseils pour éviter le retour.' },
      { service: 'punaises-de-lit', titre: 'Punaises de lit', texte: 'Un traitement professionnel, avec des consignes simples à suivre, pour retrouver des nuits tranquilles.' },
    ],
    communes: ['Cergy', 'Pontoise', 'Argenteuil', 'Sarcelles', 'Garges-lès-Gonesse', 'Franconville', 'Goussainville', 'Bezons', 'Ermont', 'Gonesse', 'Taverny', 'Herblay-sur-Seine', 'Saint-Ouen-l\'Aumône', 'Montmorency', 'Enghien-les-Bains'],
  },
]

export function getDepartement(slug: string) {
  return DEPARTEMENTS_IDF.find((d) => d.slug === slug)
}
