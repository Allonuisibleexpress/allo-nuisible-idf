// Pages « Puces à [ville] » (/puces/[ville]) : 24 villes (10 du 94, 8 arrondissements de Paris, 6 du 92), 09/11/2026.
// Sources du cycle et des risques : Wikipédia (Ctenocephalides felis, Siphonaptera), Parola 2006, ESCCAP (cités sur /blog/puces-tout-savoir).
// Prix aligné sur Allo Nuisible Express : dès 120 € TTC. Pas de chiffre inventé, pas de tiret long, rien de « naturel » ou « sans danger ».
import type { Ville, VilleServiceConfig } from '@/components/VilleServicePage'

export const CONFIG_PUCES: VilleServiceConfig = {
  basePath: '/puces',
  titre: 'Puces',
  serviceType: 'Traitement contre les puces',
  pilier: { href: '/services/puces', label: 'Puces', lien: 'notre traitement contre les puces' },
  enBref: [
    'Allo Nuisible IDF traite les puces dans les logements, en lien avec le traitement de vos animaux chez le vétérinaire.',
    'Traitement insecticide professionnel des sols, des textiles et du couchage de l’animal, avec un second passage si besoin pour les puces qui sortent des cocons.',
    'Sur les chiens et les chats, plus de 90 % des puces sont des puces du chat : c’est aussi elle qui pique l’homme.',
    'À partir de 120 € TTC pour un appartement, devis gratuit, garantie 1 an.',
  ],
  cachettes: {
    titre: 'Où se cachent les puces',
    items: [
      'Le panier, le coussin ou la niche de l’animal',
      'Les fentes du parquet et les plinthes',
      'Les tapis et les moquettes',
      'Les canapés et les fauteuils en tissu',
      'Le dessous des lits et des meubles',
      'Le garage, la voiture et les abris de jardin',
    ],
    signes: 'Piqûres groupées aux chevilles et aux mollets, animal qui se gratte, petits grains noirs dans son pelage qui laissent une trace rouge sur un papier humide.',
  },
  methodes: [
    { titre: 'Insecticide professionnel', tag: 'Traitement de fond', texte: 'Appliqué par un technicien Certibiocide sur les sols, les textiles et les zones où l’animal se couche, en insistant sur les fentes et le dessous des meubles.', href: '/blog/puces-tout-savoir' },
    { titre: 'Second passage', tag: 'Contre les cocons', texte: 'Les cocons protègent les puces en formation : un second passage touche celles qui sortent dans les semaines suivantes.' },
    { titre: 'Préparation du logement', tag: 'Avant le traitement', texte: 'Aspiration complète, sac jeté dehors, lavage à 60 °C du couchage et des plaids : le traitement est bien plus efficace sur des sols dégagés.' },
    { titre: 'Traitement de l’animal', tag: 'Indispensable', texte: 'Votre vétérinaire prescrit un antiparasitaire adapté à l’espèce et au poids : sans lui, les puces reviennent.', href: '/blog/puces-tout-savoir' },
  ],
  encadre: {
    titre: 'Ce que vous pouvez faire tout de suite',
    items: [
      'Passez l’aspirateur partout, puis jetez le sac ou videz le bac dehors.',
      'Lavez à 60 °C le couchage de l’animal, les plaids et les housses.',
      'Prenez rendez-vous chez le vétérinaire pour traiter tous vos animaux.',
      'Continuez à aspirer chaque jour pendant quelques semaines après le traitement.',
    ],
  },
  guides: [
    { href: '/blog/puces-tout-savoir', label: 'Puces : origine, cycle et traitement' },
    { href: '/identifier-nuisible', label: 'Identifier une petite bête qui saute' },
    { href: '/blog/acariens-ou-punaises-de-lit', label: 'Acariens, punaises ou puces ?' },
  ],
  sources: [
    { label: 'Wikipédia, Ctenocephalides felis (puce du chat)', url: 'https://fr.wikipedia.org/wiki/Ctenocephalides_felis' },
    { label: 'Wikipédia, Siphonaptera (puces)', url: 'https://fr.wikipedia.org/wiki/Siphonaptera' },
  ],
  maj: '2026-11-09',
  certification: 'Techniciens titulaires du Certibiocide, la certification obligatoire pour utiliser des insecticides professionnels.',
  autresTitre: 'Puces dans d’autres villes',
}

const FAQ_COMMUNE = (a: string) => [
  { q: `Combien coûte un traitement contre les puces ${a} ?`, a: 'À partir de 120 € TTC pour un appartement. Pour une maison ou un local, le prix est fixé sur devis, gratuit, avant l’intervention.' },
  { q: 'Faut-il traiter l’animal en même temps ?', a: 'Oui, c’est indispensable. Votre vétérinaire traite l’animal, nous traitons le logement : l’un sans l’autre, les puces reviennent.' },
  { q: 'Pourquoi voit-on encore des puces après le traitement ?', a: 'Les cocons protègent les puces en formation. Elles continuent de sortir quelques jours ou semaines et sont alors touchées par le traitement. Aspirez chaque jour et respectez le second passage.' },
]

export type VillePuces = Ville & { title: string }

type Dep = '94' | '75' | '92'
const DEP: Record<Dep, { departement: string; zone: (s: string) => string }> = {
  '94': { departement: 'Val-de-Marne', zone: (s) => `/zones/val-de-marne/${s}` },
  '75': { departement: 'Paris', zone: () => '/zones/paris' },
  '92': { departement: 'Hauts-de-Seine', zone: () => '/zones/hauts-de-seine' },
}

const ville = (nom: string, a: string, slug: string, code: Dep, contexte: string[], proches: string[], faq: { q: string; a: string }): VillePuces => ({
  slug, nom, a, code,
  departement: DEP[code].departement,
  zoneHref: DEP[code].zone(slug),
  title: `Puces ${nom}`,
  description: `Puces ${a} : traitement du logement par un technicien certifié, en lien avec le vétérinaire. Dès 120 € TTC, devis gratuit, garantie 1 an.`,
  contexte, proches, faq: [faq, ...FAQ_COMMUNE(a)],
})

export const VILLES_PUCES: VillePuces[] = [
  // ── Val-de-Marne ──
  ville('Saint-Maurice', 'à Saint-Maurice', 'saint-maurice', '94', [
    'Saint-Maurice, entre le **bois de Vincennes** et les **bords de Marne**, compte beaucoup de promeneurs avec leur chien. Au retour d’une balade, une puce peut monter sur l’animal et pondre ensuite dans le logement.',
    'Notre base est ici, au 6 bis rue du Val d’Osne : nous intervenons à Saint-Maurice très rapidement, souvent dans la journée.',
  ], ['Charenton-le-Pont', 'Maisons-Alfort', 'Joinville-le-Pont', 'Saint-Maur-des-Fossés'],
  { q: 'Mon chien a attrapé des puces au bois de Vincennes, que faire ?', a: 'Traitez-le chez le vétérinaire, lavez son couchage à 60 °C et aspirez là où il dort. Si vous voyez des puces dans la maison ou avez des piqûres, un traitement du logement s’impose.' }),
  ville('Maisons-Alfort', 'à Maisons-Alfort', 'maisons-alfort', '94', [
    'À Maisons-Alfort, beaucoup de foyers vivent avec un **chien** ou un **chat**. C’est le premier moyen par lequel les puces entrent dans un logement : l’animal les ramène, les œufs tombent sur son couchage et sur les sols.',
    'Nous traitons le logement pendant que votre vétérinaire traite l’animal, pour casser le cycle des puces en une fois.',
  ], ['Alfortville', 'Créteil', 'Charenton-le-Pont', 'Saint-Maurice'],
  { q: 'Mon chat ne sort jamais : peut-il avoir des puces ?', a: 'Oui : les puces peuvent arriver avec un autre animal, un visiteur, des rongeurs ou un ancien occupant. Un chat d’intérieur se protège aussi avec un antiparasitaire prescrit par le vétérinaire.' }),
  ville('Charenton-le-Pont', 'à Charenton-le-Pont', 'charenton-le-pont', '94', [
    'Charenton-le-Pont est une ville dense, surtout faite d’**appartements**. Les puces s’y installent dans les **fentes du parquet**, les **moquettes** et autour du panier de l’animal, et passent parfois d’un logement à l’autre avec les déménagements.',
    'Avant d’emménager, il est utile de savoir si l’ancien occupant avait un animal : des cocons peuvent attendre dans les parquets.',
  ], ['Saint-Maurice', 'Maisons-Alfort', 'Paris 12e', 'Ivry-sur-Seine'],
  { q: 'J’emménage et je me fais piquer aux chevilles : est-ce des puces ?', a: 'C’est très probable si l’ancien occupant avait un animal : les cocons restés dans le parquet éclosent à votre arrivée. Un traitement du logement règle le problème.' }),
  ville('Vincennes', 'à Vincennes', 'vincennes', '94', [
    'À Vincennes, le **bois** tout proche attire chaque jour chiens et promeneurs. Les puces de la faune et des autres animaux peuvent passer sur votre chien, puis s’installer dans votre appartement.',
    'Dans les immeubles anciens vincennois, les **parquets à lattes** offrent de nombreuses fentes où larves et cocons se cachent : le traitement doit y porter en priorité.',
  ], ['Saint-Mandé', 'Fontenay-sous-Bois', 'Montreuil', 'Saint-Maurice'],
  { q: 'Pourquoi les puces aiment-elles les vieux parquets ?', a: 'Les larves fuient la lumière et s’enfoncent dans les fentes, où elles se nourrissent de poussière et des excréments des adultes. C’est là que le traitement doit être appliqué avec soin.' }),
  ville('Saint-Maur-des-Fossés', 'à Saint-Maur-des-Fossés', 'saint-maur-des-fosses', '94', [
    'Saint-Maur-des-Fossés compte beaucoup de **maisons avec jardin** le long de la Marne. Hérissons, chats du voisinage et rongeurs peuvent y déposer des puces, que votre animal ramène ensuite à l’intérieur.',
    'Dans une maison, nous traitons les pièces de vie, mais aussi le **garage**, la **véranda** et les endroits où l’animal se repose.',
  ], ['Créteil', 'Joinville-le-Pont', 'Champigny-sur-Marne', 'Saint-Maurice'],
  { q: 'Faut-il traiter le jardin contre les puces ?', a: 'Le plus important est la maison et l’animal. Au jardin, limitez l’accès des animaux errants et gardez propres les endroits où votre animal se couche dehors.' }),
  ville('Créteil', 'à Créteil', 'creteil', '94', [
    'À Créteil, entre grands ensembles, résidences et pavillons, les puces arrivent le plus souvent avec un **animal de compagnie** ou lors d’un **emménagement** dans un logement occupé auparavant par un animal.',
    'Dans les immeubles, des **rongeurs** dans les caves peuvent aussi apporter leurs puces : il faut alors traiter la cause, avec une dératisation si besoin.',
  ], ['Maisons-Alfort', 'Saint-Maur-des-Fossés', 'Alfortville', 'Bonneuil-sur-Marne'],
  { q: 'Des rats dans la cave peuvent-ils donner des puces ?', a: 'Oui, les rongeurs ont leurs propres puces, qui peuvent piquer l’homme. Dans ce cas, il faut traiter les rongeurs en même temps que les puces.' }),
  ville('Ivry-sur-Seine', 'à Ivry-sur-Seine', 'ivry-sur-seine', '94', [
    'Ivry-sur-Seine mêle **logements neufs** et **immeubles anciens**. Dans les appartements bien chauffés, le cycle des puces s’accélère : une petite infestation peut grossir en quelques semaines.',
    'Nous intervenons dans tous les quartiers, et nous vous expliquons comment préparer le logement pour un traitement efficace dès le premier passage.',
  ], ['Vitry-sur-Seine', 'Le Kremlin-Bicêtre', 'Charenton-le-Pont', 'Villejuif'],
  { q: 'Le chauffage favorise-t-il les puces ?', a: 'Oui : plus il fait chaud et humide, plus le cycle des puces est rapide. C’est pourquoi les infestations se développent vite en appartement chauffé.' }),
  ville('Vitry-sur-Seine', 'à Vitry-sur-Seine', 'vitry-sur-seine', '94', [
    'À Vitry-sur-Seine, de nombreuses familles vivent avec des animaux, en appartement comme en maison. Les puces s’installent d’abord là où l’animal dort : **panier**, **canapé**, **lit**.',
    'Pour un résultat durable, nous traitons toutes les pièces fréquentées par l’animal, pas seulement celle où l’on voit les puces.',
  ], ['Ivry-sur-Seine', 'Villejuif', 'Choisy-le-Roi', 'Alfortville'],
  { q: 'Mon chien dort sur le canapé : faut-il le traiter ?', a: 'Oui, les œufs tombent partout où l’animal se couche. Le canapé, ses coussins et le sol autour sont traités avec le reste du logement.' }),
  ville('Fontenay-sous-Bois', 'à Fontenay-sous-Bois', 'fontenay-sous-bois', '94', [
    'Fontenay-sous-Bois, en bordure du **bois de Vincennes**, offre de nombreux espaces de promenade pour les chiens. C’est souvent au retour de balade que les premières puces apparaissent à la maison.',
    'Pavillons et immeubles : nous adaptons le traitement au logement, du garage à la chambre où dort l’animal.',
  ], ['Vincennes', 'Nogent-sur-Marne', 'Le Perreux-sur-Marne', 'Montreuil'],
  { q: 'Comment savoir si mon chien a des puces ?', a: 'Il se gratte, et vous trouvez dans son pelage de petits grains noirs. Posés sur un papier humide, ils laissent une trace rouge : ce sont des excréments de puces.' }),
  ville('Nogent-sur-Marne', 'à Nogent-sur-Marne', 'nogent-sur-marne', '94', [
    'À Nogent-sur-Marne, les **maisons** et **résidences** des bords de Marne accueillent beaucoup d’animaux de compagnie. Au retour des vacances, une maison restée fermée peut révéler des puces qui attendaient dans leurs cocons.',
    'Nous traitons le logement et vous expliquons pourquoi continuer à aspirer chaque jour aide à éliminer les dernières puces.',
  ], ['Le Perreux-sur-Marne', 'Fontenay-sous-Bois', 'Joinville-le-Pont', 'Champigny-sur-Marne'],
  { q: 'Pourquoi des puces au retour de vacances ?', a: 'Des puces adultes attendaient dans leurs cocons. La chaleur, les vibrations des pas et le gaz carbonique que vous expirez déclenchent leur sortie, toutes en même temps.' }),
  // ── Paris ──
  ville('Paris 12e', 'à Paris 12e', 'paris-12', '75', [
    'Dans le **12e arrondissement**, entre le **bois de Vincennes**, la **Coulée verte** et les nombreux immeubles anciens, les chiens sont partout. Les puces arrivent avec eux et s’installent dans les parquets et les tapis.',
    'Nous intervenons dans tout l’arrondissement, de Bercy à la Porte Dorée, souvent le jour même depuis notre base voisine de Saint-Maurice.',
  ], ['Paris 11e', 'Paris 20e', 'Paris 13e', 'Charenton-le-Pont'],
  { q: 'Intervenez-vous rapidement dans le 12e ?', a: 'Oui, notre base de Saint-Maurice est voisine du 12e : nous intervenons souvent dans la journée, 7j/7.' }),
  ville('Paris 11e', 'à Paris 11e', 'paris-11', '75', [
    'Le **11e arrondissement** est l’un des plus denses de Paris. En appartement, les puces se cachent dans les **fentes des parquets anciens**, les **tapis** et le couchage des animaux.',
    'Avec les nombreux **déménagements** et les locations, il arrive qu’on hérite des puces de l’occupant précédent : un traitement à l’emménagement règle le problème.',
  ], ['Paris 12e', 'Paris 20e', 'Paris 10e', 'Paris 3e'],
  { q: 'Le propriétaire doit-il payer si les puces étaient là avant mon arrivée ?', a: 'Le logement loué doit être exempt de toute infestation d’espèces nuisibles et parasites (loi du 6 juillet 1989, article 6). Prévenez-le par écrit dès votre arrivée.' }),
  ville('Paris 15e', 'à Paris 15e', 'paris-15', '75', [
    'Le **15e arrondissement**, très résidentiel, compte beaucoup de familles avec chiens et chats. Les puces y apparaissent souvent à la **fin de l’été**, quand les animaux rentrent davantage.',
    'Nous traitons les appartements comme les maisons de ville, avec un second passage si besoin.',
  ], ['Paris 14e', 'Paris 7e', 'Paris 16e', 'Issy-les-Moulineaux'],
  { q: 'Pourquoi plus de puces à la fin de l’été ?', a: 'La chaleur et l’humidité accélèrent leur cycle. Les œufs pondus pendant l’été donnent des adultes en quelques semaines, et l’infestation devient visible.' }),
  ville('Paris 17e', 'à Paris 17e', 'paris-17', '75', [
    'Dans le **17e arrondissement**, autour du **parc Clichy-Batignolles** et des squares, les promenades de chiens sont quotidiennes. Les puces passent facilement d’un animal à l’autre.',
    'Une puce peut changer d’hôte en une heure à peine : un simple contact au square suffit pour qu’elle arrive à la maison.',
  ], ['Paris 18e', 'Paris 8e', 'Paris 16e', 'Levallois-Perret'],
  { q: 'Les puces passent-elles d’un chien à l’autre ?', a: 'Oui, très facilement, lors des jeux ou des contacts. C’est pourquoi un antiparasitaire régulier, prescrit par le vétérinaire, est la meilleure protection.' }),
  ville('Paris 18e', 'à Paris 18e', 'paris-18', '75', [
    'Dans le **18e arrondissement**, de Montmartre à la Goutte-d’Or, les immeubles anciens et les **caves** peuvent abriter des rongeurs, dont les puces piquent aussi l’homme.',
    'Quand il n’y a pas d’animal à la maison, nous cherchons l’origine des puces : rongeurs, ancien occupant ou animaux de passage.',
  ], ['Paris 17e', 'Paris 19e', 'Paris 9e', 'Paris 10e'],
  { q: 'J’ai des puces mais pas d’animal : d’où viennent-elles ?', a: 'D’un ancien occupant avec un animal, de rongeurs des caves ou d’un meuble d’occasion. Les cocons peuvent attendre des semaines dans le logement.' }),
  ville('Paris 20e', 'à Paris 20e', 'paris-20', '75', [
    'Dans le **20e arrondissement**, entre **Belleville** et le **Père-Lachaise**, cohabitent immeubles anciens et grands ensembles. Les puces s’installent surtout là où vivent les animaux.',
    'Nous intervenons dans tout l’arrondissement et coordonnons, si besoin, avec le bailleur quand plusieurs logements sont touchés.',
  ], ['Paris 11e', 'Paris 19e', 'Paris 12e', 'Montreuil'],
  { q: 'Plusieurs logements de mon immeuble ont des puces, que faire ?', a: 'Prévenez le bailleur ou le syndic : un traitement coordonné, et la recherche d’une cause commune (rongeurs, parties communes), évitent les allers-retours.' }),
  ville('Paris 13e', 'à Paris 13e', 'paris-13', '75', [
    'Dans le **13e arrondissement**, les grandes tours et les résidences récentes côtoient la Butte-aux-Cailles. En appartement chauffé, les puces se développent vite si on attend.',
    'Nous intervenons rapidement et vous laissons des consignes simples pour la préparation et les semaines qui suivent.',
  ], ['Paris 12e', 'Paris 14e', 'Paris 5e', 'Ivry-sur-Seine'],
  { q: 'Combien de temps faut-il pour se débarrasser des puces ?', a: 'Le traitement agit tout de suite sur les adultes. Il faut ensuite quelques semaines pour que toutes les puces sortent des cocons et soient touchées : aspirez chaque jour pendant cette période.' }),
  ville('Paris 19e', 'à Paris 19e', 'paris-19', '75', [
    'Le **19e arrondissement**, avec les **Buttes-Chaumont**, la **Villette** et les bords du **canal de l’Ourcq**, est un lieu de promenade très fréquenté par les chiens.',
    'Au retour d’une sortie, une seule puce suffit à lancer une infestation : traitez votre animal toute l’année et faites traiter le logement dès les premiers signes.',
  ], ['Paris 18e', 'Paris 20e', 'Paris 10e', 'Pantin'],
  { q: 'Faut-il traiter son chien toute l’année ?', a: 'Oui, c’est ce que recommandent les vétérinaires : les puces restent actives en logement chauffé, même en hiver.' }),
  // ── Hauts-de-Seine ──
  ville('Boulogne-Billancourt', 'à Boulogne-Billancourt', 'boulogne-billancourt', '92', [
    'À Boulogne-Billancourt, entre le **bois de Boulogne** et les **bords de Seine**, les promenades de chiens sont nombreuses. Les puces reviennent souvent avec eux à la maison.',
    'Appartements et maisons : nous traitons le logement en lien avec le traitement vétérinaire de vos animaux.',
  ], ['Issy-les-Moulineaux', 'Paris 16e', 'Sèvres', 'Saint-Cloud'],
  { q: 'Peut-on traiter le logement avec un bébé à la maison ?', a: 'Oui, avec des précautions : le technicien vous indique le temps à attendre avant de réoccuper les pièces traitées, et les zones à éviter pour l’enfant.' }),
  ville('Issy-les-Moulineaux', 'à Issy-les-Moulineaux', 'issy-les-moulineaux', '92', [
    'Issy-les-Moulineaux compte de nombreux **logements récents** et familles avec animaux. Dans les appartements bien chauffés, les puces se multiplient vite après une première apparition.',
    'Nous intervenons rapidement et prévoyons un second passage si nécessaire pour les puces qui sortent des cocons.',
  ], ['Boulogne-Billancourt', 'Vanves', 'Paris 15e', 'Meudon'],
  { q: 'Un second passage est-il toujours nécessaire ?', a: 'Souvent, oui : les cocons protègent les puces en formation. Le technicien vous indique s’il faut un second passage selon l’infestation.' }),
  ville('Levallois-Perret', 'à Levallois-Perret', 'levallois-perret', '92', [
    'Levallois-Perret est l’une des villes les plus denses de France. En appartement, les puces se cachent dans les **tapis**, les **canapés** et autour du couchage de l’animal.',
    'Nous traitons tout le logement, et vous conseillons sur la préparation : aspiration, lavage à 60 °C, sols dégagés.',
  ], ['Neuilly-sur-Seine', 'Clichy', 'Paris 17e', 'Courbevoie'],
  { q: 'Comment préparer mon appartement avant le traitement ?', a: 'Aspirez soigneusement sols, tapis et canapés, jetez le sac dehors, lavez à 60 °C le couchage de l’animal et les plaids, et dégagez les sols.' }),
  ville('Neuilly-sur-Seine', 'à Neuilly-sur-Seine', 'neuilly-sur-seine', '92', [
    'À Neuilly-sur-Seine, le **bois de Boulogne** voisin et les grands appartements avec **tapis épais** et **parquets anciens** offrent aux puces de nombreuses cachettes.',
    'Nous adaptons le traitement aux matières précieuses et vous expliquons comment protéger tapis et textiles.',
  ], ['Levallois-Perret', 'Courbevoie', 'Puteaux', 'Paris 17e'],
  { q: 'Le traitement abîme-t-il les tapis ou les parquets ?', a: 'Non, le produit est appliqué en fine couche sur les surfaces. Le technicien vous signale toute matière fragile avant de commencer.' }),
  ville('Courbevoie', 'à Courbevoie', 'courbevoie', '92', [
    'Courbevoie mêle **tours de La Défense**, résidences et quartiers pavillonnaires. Les puces y arrivent surtout avec les animaux de compagnie et lors des déménagements.',
    'Nous intervenons en appartement comme en maison, avec un traitement des sols, des textiles et des zones de repos de l’animal.',
  ], ['Puteaux', 'Neuilly-sur-Seine', 'Asnières-sur-Seine', 'La Garenne-Colombes'],
  { q: 'Les puces peuvent-elles venir avec un meuble d’occasion ?', a: 'Oui, un tapis, un canapé ou un panier qui a hébergé un animal peut contenir des cocons. Inspectez et aspirez tout meuble textile avant de l’installer.' }),
  ville('Asnières-sur-Seine', 'à Asnières-sur-Seine', 'asnieres-sur-seine', '92', [
    'Asnières-sur-Seine, au bord de la Seine, compte beaucoup de **maisons avec jardin** et d’appartements familiaux. Chats et chiens y ramènent facilement des puces de l’extérieur.',
    'Nous traitons le logement et vous conseillons pour éviter le retour : antiparasitaire régulier, lavage du couchage, aspiration.',
  ], ['Courbevoie', 'Gennevilliers', 'Clichy', 'Colombes'],
  { q: 'Mon chat a des puces : faut-il traiter toute la maison ?', a: 'Oui, les œufs tombent partout où il se couche. Traiter seulement le chat laisse des milliers d’œufs, de larves et de cocons dans la maison.' }),
]

export function getVillePuces(slug: string) {
  return VILLES_PUCES.find((x) => x.slug === slug)
}
