// Pages locales des 47 communes du Val-de-Marne (/zones/val-de-marne/[commune]).
// Mise en avant des méthodes sans insecticide ni poison réellement pratiquées :
// cryogénie, vapeur sèche, rongeurs sans mort-aux-rats en première intention, pièges connectés.
// Règles : pas de « écologique » générique (allégation encadrée), pas de « naturel » ni « sans danger »,
// pas de chiffre inventé, pas de tiret long.

import type { ServiceSlug } from './departements'

export type SecteurId = 'portes-paris' | 'bords-marne' | 'sud-seine' | 'plateau-est'

type Methode = { service: ServiceSlug; titre: string; texte: string; points: string[] }

export const METHODES: Record<string, Methode> = {
  punaises: {
    service: 'punaises-de-lit',
    titre: 'Punaises de lit : cryogénie et vapeur sèche',
    texte: 'Nous traitons en priorité sans insecticide. La cryogénie projette de la neige carbonique (environ −78 °C) qui tue les punaises et leurs œufs par le choc thermique. La vapeur sèche, à très haute température, pénètre les coutures de matelas, les sommiers, les canapés et les plinthes.',
    points: [
      'Aucun produit chimique pendant ces traitements',
      'Logement utilisable juste après, sans temps de séchage',
      'Insecticide seulement si la situation l\'exige, et on vous l\'explique avant',
    ],
  },
  rongeurs: {
    service: 'rongeurs',
    titre: 'Rats et souris : sans mort-aux-rats en première intention',
    texte: 'La mort-aux-rats ne règle pas la cause : tant que l\'accès reste ouvert, d\'autres rongeurs reviennent. Nous commençons par trouver par où ils entrent, puis nous bouchons ces passages et posons des pièges mécaniques.',
    points: [
      'Diagnostic des points d\'entrée (gaines, aérations, bas de portes, regards)',
      'Colmatage et pièges mécaniques ou de capture',
      'Pièges connectés qui signalent chaque capture, utiles pour les commerces et les copropriétés',
      'Appâts uniquement en dernier recours, dans des postes sécurisés',
    ],
  },
  cafards: {
    service: 'cafards-blattes',
    titre: 'Cafards : vapeur sèche et traitement ciblé',
    texte: 'Les cafards se cachent dans les joints, derrière l\'électroménager et dans les gaines. La vapeur sèche les atteint dans ces recoins sans pulvériser de produit dans la pièce. Un gel appât ciblé complète si besoin, posé uniquement dans les zones de passage.',
    points: [
      'Vapeur sèche dans les cuisines, salles de bain et joints',
      'Cryogénie possible selon les cas',
      'Protocole en 2 passages pour atteindre les éclosions',
    ],
  },
  guepes: {
    service: 'guepes-frelons',
    titre: 'Guêpes et frelons : intervention sur le nid uniquement',
    texte: 'Un nid ne se traite pas soi-même. Notre technicien agit directement et uniquement sur le nid, sans traiter le jardin autour, puis retire le nid quand il est accessible.',
    points: [
      'Intervention ciblée, rien n\'est pulvérisé au hasard',
      'Retrait du nid quand c\'est possible',
      'Conseils pour éviter une nouvelle installation',
    ],
  },
  fourmis: {
    service: 'fourmis',
    titre: 'Fourmis : on vise la colonie, pas la pièce',
    texte: 'Pulvériser sur les fourmis visibles ne sert à rien : la colonie continue. Nous repérons le nid et les passages, colmatons les entrées et posons un appât ciblé seulement là où il faut.',
    points: [
      'Repérage du nid et des chemins de passage',
      'Colmatage des entrées',
      'Appât ciblé, sans pulvérisation dans la maison',
    ],
  },
  pigeons: {
    service: 'pigeons',
    titre: 'Pigeons : protection sans nuire aux oiseaux',
    texte: 'Pics, filets et dispositifs répulsifs empêchent les pigeons de se poser et de nicher, sans les blesser.',
    points: ['Pics inox et filets sur mesure', 'Balcons, rebords, toitures, cours'],
  },
}

export const SECTEURS: Record<SecteurId, { nom: string; intro: (c: string) => string[]; ordre: (keyof typeof METHODES)[] }> = {
  'portes-paris': {
    nom: 'Portes de Paris',
    intro: (c) => [
      `${c} fait partie des communes du Val-de-Marne proches de Paris : immeubles, copropriétés, commerces en rez-de-chaussée. Les nuisibles y passent facilement d'un logement à l'autre par les caves, les gaines et les parties communes.`,
      'En appartement occupé, avec des enfants ou des animaux, beaucoup de familles préfèrent éviter les insecticides. C\'est pour cela que nous traitons d\'abord par le froid ou la vapeur.',
    ],
    ordre: ['punaises', 'cafards', 'rongeurs', 'pigeons'],
  },
  'bords-marne': {
    nom: 'Bords de Marne',
    intro: (c) => [
      `À ${c}, entre berges, pavillons et immeubles, on rencontre à la fois les nuisibles des jardins et ceux des logements collectifs. Les rongeurs, en particulier, remontent volontiers vers les maisons et les sous-sols.`,
      'Plutôt que de multiplier les appâts empoisonnés près des jardins et des animaux domestiques, nous fermons les accès et piégeons de façon mécanique.',
    ],
    ordre: ['rongeurs', 'guepes', 'punaises', 'fourmis'],
  },
  'sud-seine': {
    nom: 'Sud du département et bords de Seine',
    intro: (c) => [
      `${c} se situe dans le sud du Val-de-Marne, où se mêlent résidences, pavillons, commerces et zones d'activité. Particuliers et professionnels n'ont pas les mêmes besoins, et le traitement s'adapte.`,
      'Pour les commerces, restaurants et entrepôts, les pièges connectés permettent un suivi des captures sans multiplier les passages. Pour les logements, nous privilégions la vapeur sèche et la cryogénie.',
    ],
    ordre: ['rongeurs', 'cafards', 'punaises', 'guepes'],
  },
  'plateau-est': {
    nom: 'Est du département et plateau briard',
    intro: (c) => [
      `À ${c}, l'habitat est surtout pavillonnaire, avec jardins, dépendances et espaces verts à proximité. Les rongeurs cherchent un abri dès les premiers froids, et les guêpes s'installent sous les toits et dans les haies.`,
      'Près des jardins, des potagers et des animaux, nous évitons le poison : colmatage des accès, pièges mécaniques et intervention ciblée sur les nids.',
    ],
    ordre: ['rongeurs', 'guepes', 'fourmis', 'punaises'],
  },
}

const LISTE: [string, SecteurId][] = [
  ['Ablon-sur-Seine', 'sud-seine'], ['Alfortville', 'bords-marne'], ['Arcueil', 'portes-paris'],
  ['Boissy-Saint-Léger', 'plateau-est'], ['Bonneuil-sur-Marne', 'bords-marne'], ['Bry-sur-Marne', 'bords-marne'],
  ['Cachan', 'portes-paris'], ['Champigny-sur-Marne', 'bords-marne'], ['Charenton-le-Pont', 'portes-paris'],
  ['Chennevières-sur-Marne', 'bords-marne'], ['Chevilly-Larue', 'sud-seine'], ['Choisy-le-Roi', 'sud-seine'],
  ['Créteil', 'bords-marne'], ['Fontenay-sous-Bois', 'portes-paris'], ['Fresnes', 'sud-seine'],
  ['Gentilly', 'portes-paris'], ["L'Haÿ-les-Roses", 'sud-seine'], ['Ivry-sur-Seine', 'portes-paris'],
  ['Joinville-le-Pont', 'bords-marne'], ['Le Kremlin-Bicêtre', 'portes-paris'], ['Limeil-Brévannes', 'plateau-est'],
  ['Maisons-Alfort', 'bords-marne'], ['Mandres-les-Roses', 'plateau-est'], ['Marolles-en-Brie', 'plateau-est'],
  ['Nogent-sur-Marne', 'bords-marne'], ['Noiseau', 'plateau-est'], ['Orly', 'sud-seine'],
  ['Ormesson-sur-Marne', 'plateau-est'], ['Périgny', 'plateau-est'], ['Le Perreux-sur-Marne', 'bords-marne'],
  ['Le Plessis-Trévise', 'plateau-est'], ['La Queue-en-Brie', 'plateau-est'], ['Rungis', 'sud-seine'],
  ['Saint-Mandé', 'portes-paris'], ['Saint-Maur-des-Fossés', 'bords-marne'], ['Saint-Maurice', 'portes-paris'],
  ['Santeny', 'plateau-est'], ['Sucy-en-Brie', 'plateau-est'], ['Thiais', 'sud-seine'],
  ['Valenton', 'sud-seine'], ['Villecresnes', 'plateau-est'], ['Villejuif', 'portes-paris'],
  ['Villeneuve-le-Roi', 'sud-seine'], ['Villeneuve-Saint-Georges', 'sud-seine'], ['Villiers-sur-Marne', 'plateau-est'],
  ['Vincennes', 'portes-paris'], ['Vitry-sur-Seine', 'sud-seine'],
]

export function slugify(nom: string) {
  return nom
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/['’\s]+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-')
}

// « à Créteil », « au Perreux-sur-Marne », « à La Queue-en-Brie »
function aCommune(nom: string) {
  return nom.startsWith('Le ') ? `au ${nom.slice(3)}` : `à ${nom}`
}

function titre(nom: string) {
  const a = aCommune(nom)
  const variantes = [
    `Anti-nuisibles ${a} (94), méthodes sans poison`,
    `Anti-nuisibles ${a} (94), sans poison`,
    `Nuisibles ${a} (94), sans poison`,
  ]
  return variantes.find((t) => t.length <= 60) ?? variantes[variantes.length - 1]
}

export type Commune = {
  nom: string
  slug: string
  a: string
  secteur: SecteurId
  title: string
  description: string
}

export const COMMUNES_94: Commune[] = LISTE.map(([nom, secteur]) => ({
  nom,
  slug: slugify(nom),
  a: aCommune(nom),
  secteur,
  title: titre(nom),
  description: `Punaises de lit par cryogénie ou vapeur sèche, rats et souris sans mort-aux-rats ${aCommune(nom)}. Techniciens Certibiocide, 7j/7, devis gratuit.`,
}))

export function getCommune94(slug: string) {
  return COMMUNES_94.find((c) => c.slug === slug)
}
