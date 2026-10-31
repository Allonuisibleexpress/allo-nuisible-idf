// Pages locales des 47 communes du Val-de-Marne (/zones/val-de-marne/[commune]).
// Traitements chimiques professionnels et méthodes sans produit présentés au même niveau.
// Méthodes sans produit réellement pratiquées : cryogénie, vapeur sèche, pièges mécaniques et connectés.
// Règles : pas de « écologique » générique (allégation encadrée), pas de « naturel » ni « sans danger »,
// pas de chiffre inventé, pas de tiret long.

import type { ServiceSlug } from './departements'

export type SecteurId = 'portes-paris' | 'bords-marne' | 'sud-seine' | 'plateau-est'

type Methode = { service: ServiceSlug; titre: string; texte: string; points: string[] }

export const METHODES: Record<string, Methode> = {
  punaises: {
    service: 'punaises-de-lit',
    titre: 'Punaises de lit : insecticide, cryogénie ou vapeur sèche',
    texte: 'Deux approches professionnelles, souvent combinées. L\'insecticide rémanent traite les surfaces infestées et continue d\'agir après le passage. La cryogénie (neige carbonique, environ −78 °C) et la vapeur sèche à très haute température tuent les punaises et leurs œufs au contact, sans produit, sur les matelas, sommiers, canapés et plinthes.',
    points: [
      'Insecticide rémanent professionnel sur les zones infestées',
      'Cryogénie et vapeur sèche sur la literie et le mobilier',
      'Sans produit : logement utilisable juste après',
      'Le technicien choisit avec vous selon l\'infestation',
    ],
  },
  rongeurs: {
    service: 'rongeurs',
    titre: 'Rats et souris : piège Ekomille, postes d\'appâtage ou pièges connectés',
    texte: 'Selon le lieu, nous posons des postes d\'appâtage sécurisés avec raticide professionnel, ou des pièges mécaniques et connectés. Dans tous les cas, nous trouvons par où les rongeurs entrent et nous bouchons ces passages, sinon d\'autres reviennent.',
    points: [
      'Sans mort-aux-rats si vous le souhaitez : piège multicapture Ekomille',
      'Postes d\'appâtage sécurisés et verrouillés',
      'Pièges mécaniques ou de capture',
      'Pièges connectés qui signalent chaque capture (commerces, copropriétés)',
      'Diagnostic et colmatage des points d\'entrée',
    ],
  },
  cafards: {
    service: 'cafards-blattes',
    titre: 'Cafards : gel, insecticide et vapeur sèche',
    texte: 'Les cafards se cachent dans les joints, derrière l\'électroménager et dans les gaines. Le gel appât professionnel atteint toute la colonie, l\'insecticide traite les surfaces, et la vapeur sèche ou la cryogénie détruisent les cafards dans les recoins sans produit.',
    points: [
      'Gel appât et insecticide professionnels',
      'Vapeur sèche ou cryogénie dans les joints et recoins',
      'Protocole en 2 passages pour atteindre les éclosions',
    ],
  },
  guepes: {
    service: 'guepes-frelons',
    titre: 'Guêpes et frelons : destruction du nid',
    texte: 'Un nid ne se traite pas soi-même. Notre technicien équipé traite directement le nid avec un insecticide professionnel, sans pulvériser le jardin autour, puis retire le nid quand il est accessible.',
    points: [
      'Traitement ciblé sur le nid',
      'Retrait du nid quand c\'est possible',
      'Conseils pour éviter une nouvelle installation',
    ],
  },
  fourmis: {
    service: 'fourmis',
    titre: 'Fourmis : on vise la colonie',
    texte: 'Pulvériser sur les fourmis visibles ne suffit pas : la colonie continue. Nous repérons le nid et les passages, posons un gel appât ou un insecticide adapté à l\'espèce, et colmatons les entrées.',
    points: [
      'Repérage du nid et des chemins de passage',
      'Gel appât ou insecticide professionnel selon l\'espèce',
      'Colmatage des entrées',
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
      'En appartement occupé, avec des enfants ou des animaux, certaines familles préfèrent un traitement sans produit. Nous proposons donc, à côté des traitements chimiques professionnels, la cryogénie et la vapeur sèche.',
    ],
    ordre: ['punaises', 'cafards', 'rongeurs', 'pigeons'],
  },
  'bords-marne': {
    nom: 'Bords de Marne',
    intro: (c) => [
      `À ${c}, entre berges, pavillons et immeubles, on rencontre à la fois les nuisibles des jardins et ceux des logements collectifs. Les rongeurs, en particulier, remontent volontiers vers les maisons et les sous-sols.`,
      'Selon le lieu, nous posons des postes d\'appâtage sécurisés ou des pièges mécaniques, et nous fermons toujours les accès pour éviter leur retour.',
    ],
    ordre: ['rongeurs', 'guepes', 'punaises', 'fourmis'],
  },
  'sud-seine': {
    nom: 'Sud du département et bords de Seine',
    intro: (c) => [
      `${c} se situe dans le sud du Val-de-Marne, où se mêlent résidences, pavillons, commerces et zones d'activité. Particuliers et professionnels n'ont pas les mêmes besoins, et le traitement s'adapte.`,
      'Pour les commerces, restaurants et entrepôts, nous proposons postes d\'appâtage sécurisés et pièges connectés, qui permettent un suivi des captures. Pour les logements, traitement chimique, vapeur sèche ou cryogénie selon la situation.',
    ],
    ordre: ['rongeurs', 'cafards', 'punaises', 'guepes'],
  },
  'plateau-est': {
    nom: 'Est du département et plateau briard',
    intro: (c) => [
      `À ${c}, l'habitat est surtout pavillonnaire, avec jardins, dépendances et espaces verts à proximité. Les rongeurs cherchent un abri dès les premiers froids, et les guêpes s'installent sous les toits et dans les haies.`,
      'Près des jardins, des potagers et des animaux, vous avez le choix : postes d\'appâtage sécurisés ou pièges mécaniques, toujours avec le colmatage des accès.',
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
    `Anti-nuisibles ${a} (94), intervention le jour même`,
    `Anti-nuisibles ${a} (94), intervention 7j/7`,
    `Anti-nuisibles ${a} (94), 7j/7`,
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
  description: `Rats, punaises de lit, cafards ${aCommune(nom)} : traitement chimique ou sans produit (cryogénie, vapeur sèche). Certibiocide, 7j/7.`,
}))

export function getCommune94(slug: string) {
  return COMMUNES_94.find((c) => c.slug === slug)
}
