// Pages « Puces à [ville] » (/puces/[ville]) : 40 villes (18 du 94, 12 arrondissements de Paris, 10 du 92). 24 le 09/11/2026, 16 ajoutées le 10/11/2026.
// Sources du cycle et des risques : Wikipédia (Ctenocephalides felis, Siphonaptera), Parola 2006, ESCCAP (cités sur /blog/puces-tout-savoir).
// Prix aligné sur Allo Nuisible Express : dès 120 € TTC. Pas de chiffre inventé, pas de tiret long, rien de « naturel » ou « sans danger ».
import { VILLES_SOURIS } from '@/lib/villes-souris'
import { fichePuces } from '@/lib/fiche-nuisible'
import { VILLES_DERATISATION } from '@/lib/villes-deratisation'
import { LOCAL_PUCES_IDF } from '@/lib/local-puces-idf'
import type { Ville, VilleServiceConfig } from '@/components/VilleServicePage'
import { PUCES_APPROFONDI } from './puces-approfondi'
import { LOCAL_PUCES_GC } from './local-puces-gc'

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
  local: { ...LOCAL_PUCES_IDF, ...LOCAL_PUCES_GC },
  localTitre: (a) => `Puces ${a} : piqûres, causes et solutions`,
  fiche: (v, vs) => fichePuces(v, vs, VILLES_DERATISATION.some((x) => x.slug === v.slug), VILLES_SOURIS.some((x) => x.slug === v.slug)),
  approfondi: PUCES_APPROFONDI,
}

const FAQ_COMMUNE = (a: string) => [
  { q: `Combien coûte un traitement contre les puces ${a} ?`, a: 'À partir de 120 € TTC pour un appartement. Pour une maison ou un local, le prix est fixé sur devis, gratuit, avant l’intervention.' },
  { q: 'Faut-il traiter l’animal en même temps ?', a: 'Oui, c’est indispensable. Votre vétérinaire traite l’animal, nous traitons le logement : l’un sans l’autre, les puces reviennent.' },
  { q: 'Pourquoi voit-on encore des puces après le traitement ?', a: 'Les cocons protègent les puces en formation. Elles continuent de sortir quelques jours ou semaines et sont alors touchées par le traitement. Aspirez chaque jour et respectez le second passage.' },
]

export type VillePuces = Ville & { title: string }

type Dep = '94' | '75' | '92' | '91' | '77' | '78'
const DEP: Record<Dep, { departement: string; zone: (s: string) => string }> = {
  '94': { departement: 'Val-de-Marne', zone: (s) => `/zones/val-de-marne/${s}` },
  '75': { departement: 'Paris', zone: () => '/zones/paris' },
  '92': { departement: 'Hauts-de-Seine', zone: () => '/zones/hauts-de-seine' },
  '91': { departement: 'Essonne', zone: () => '/zones/essonne' },
  '77': { departement: 'Seine-et-Marne', zone: () => '/zones/seine-et-marne' },
  '78': { departement: 'Yvelines', zone: () => '/zones/yvelines' },
}

const ville = (nom: string, a: string, slug: string, code: Dep, contexte: string[], proches: string[], faq: { q: string; a: string }, faqPlus?: { q: string; a: string }[]): VillePuces => ({
  slug, nom, a, code,
  departement: DEP[code].departement,
  zoneHref: DEP[code].zone(slug),
  title: `Puces ${nom}`,
  description: `Puces ${a} : traitement du logement par un technicien certifié, en lien avec le vétérinaire. Dès 120 € TTC, devis gratuit, garantie 1 an.`,
  contexte: [...contexte, ...(CONTEXTE_PLUS[slug] ? [CONTEXTE_PLUS[slug]] : [])], proches, faq: [faq, ...FAQ_COMMUNE(a)], faqPlus,
})

// Un paragraphe de plus, propre à chaque ville (10/11/2026)
const CONTEXTE_PLUS: Record<string, string> = {
  'saint-maurice': 'Autre situation fréquente à Saint-Maurice : les **résidences proches des établissements de soins** et des grands parcs accueillent beaucoup de visiteurs et d’animaux. Une seule puce qui descend d’un chien dans un hall suffit parfois à lancer une infestation dans un appartement voisin.',
  'maisons-alfort': 'Maisons-Alfort a une particularité : la ville accueille **l’École nationale vétérinaire d’Alfort**, et beaucoup d’habitants y font soigner leurs animaux. C’est une bonne habitude : le traitement de l’animal par un vétérinaire est **la moitié du travail** contre les puces.',
  'charenton-le-pont': 'À Charenton, les **petites surfaces** se traitent vite, mais demandent de la rigueur : dans un deux-pièces, le panier de l’animal est souvent à deux pas du lit. Nous traitons alors la **chambre en priorité**, avec ses plinthes et le dessous du sommier.',
  'vincennes': 'Beaucoup de Vincennois nous appellent en pensant à des **punaises de lit**, avant de découvrir qu’il s’agit de puces : les piqûres ne sont pas au même endroit. Les puces piquent **le bas des jambes**, les punaises plutôt les bras et le cou.',
  'saint-maur-des-fosses': 'Dans les **grandes maisons saint-mauriennes**, les puces s’installent parfois dans des pièces peu fréquentées : buanderie, chambre d’amis, sous-sol où dort le chien l’hiver. L’inspection de ces pièces évite qu’un foyer oublié ne relance tout.',
  'creteil': 'Près du **lac de Créteil** et des espaces verts, les chiens se promènent beaucoup. Pensez à vérifier leur pelage au retour, surtout **à la base de la queue**, la zone préférée des puces.',
  'ivry-sur-seine': 'Dans les **ateliers et lofts** reconvertis d’Ivry, les grandes surfaces au sol en béton ou en parquet brut offrent aux larves de nombreuses fissures. Le technicien adapte le traitement à ces sols particuliers.',
  'vitry-sur-seine': 'Le **parc des Lilas** et les jardins partagés de Vitry sont très fréquentés par les chiens et par les chats du quartier. En été, c’est un lieu d’échange de puces entre animaux : un antiparasitaire régulier est la meilleure protection.',
  'fontenay-sous-bois': 'À Fontenay-sous-Bois, les maisons avec **sous-sol** sont nombreuses. Un chat qui y dort l’hiver peut y laisser des milliers d’œufs, qui deviennent des puces dès que la maison est chauffée.',
  'nogent-sur-marne': 'Les **résidences secondaires** et les logements fermés longtemps, nombreux en bord de Marne, sont typiques des infestations « surprise » : personne n’a rien vu, puis toute la famille est piquée le soir même du retour.',
  'paris-12': 'Dans le 12e, les **appartements haussmanniens** avec moquettes anciennes ou tapis épais sont des refuges idéaux pour les larves. Nous insistons sur les bords des tapis, où la poussière s’accumule.',
  'paris-11': 'Les **colocations** sont nombreuses dans le 11e : quand un colocataire arrive avec son animal, les puces peuvent toucher tout l’appartement. Le traitement porte alors sur toutes les pièces communes.',
  'paris-15': 'Dans le 15e, beaucoup de familles partent en **vacances d’été** avec le chien et confient le chat. Au retour, les puces en cocon sortent toutes en même temps : c’est le moment où nous recevons le plus d’appels.',
  'paris-17': 'Les **nouveaux immeubles des Batignolles** n’échappent pas aux puces : un logement neuf n’est pas protégé, puisque ce sont les animaux qui les apportent, pas le bâtiment.',
  'paris-18': 'Sur la **butte Montmartre**, les maisons anciennes à étages et les ateliers d’artistes ont des planchers en bois très fendus : un terrain parfait pour les larves, qui demandent un traitement minutieux.',
  'paris-20': 'Dans le 20e, les **jardins partagés** et les cours d’immeubles attirent les chats du quartier. Les puces qu’ils perdent peuvent remonter sur votre animal, puis entrer chez vous.',
  'paris-13': 'Dans les **tours du quartier asiatique** et des Olympiades, les logements sont souvent bien chauffés et isolés : le cycle des puces y est rapide, et une petite infestation grossit vite si l’on attend.',
  'paris-19': 'Près du **bassin de la Villette**, de nombreux habitants ont des chiens de grande taille. Plus l’animal est grand, plus il disperse d’œufs dans le logement : son couchage doit être lavé souvent.',
  'boulogne-billancourt': 'Dans les **maisons des années 1930** de Boulogne, les parquets en chêne à lames fines et les escaliers en bois cachent de nombreuses fentes : le technicien y applique le produit avec précision.',
  'issy-les-moulineaux': 'Les **bureaux et espaces de coworking** d’Issy qui acceptent les chiens peuvent aussi être touchés. Nous intervenons en dehors des heures de travail, avec une attestation pour le gestionnaire.',
  'levallois-perret': 'À Levallois, les **parkings souterrains** et les caves partagées peuvent abriter des rongeurs, et donc leurs puces. Quand plusieurs voisins se plaignent, nous cherchons cette cause commune.',
  'neuilly-sur-seine': 'Les **personnels de maison** et gardiens d’immeubles sont souvent les premiers à remarquer les piqûres. Un signalement rapide permet de traiter avant que toutes les pièces soient touchées.',
  'courbevoie': 'À Courbevoie, les **locations de courte durée** proches de La Défense voient passer beaucoup de voyageurs, parfois avec leur animal. Un traitement entre deux séjours évite les avis négatifs et les remboursements.',
  'asnieres-sur-seine': 'Asnières abrite le célèbre **cimetière des chiens**, symbole d’un lien ancien entre la ville et les animaux de compagnie. Aujourd’hui encore, beaucoup de foyers en ont un, et les puces y sont un souci fréquent.',
}

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
  // ── Nouvelles villes du 10/11/2026 ──
  ville('Champigny-sur-Marne', 'à Champigny-sur-Marne', 'champigny-sur-marne', '94', [
    'Champigny-sur-Marne est l’une des plus grandes villes du Val-de-Marne, avec de **nombreux pavillons et jardins** le long de la Marne. Chats du voisinage, hérissons et rongeurs y circulent : votre animal peut y ramasser des puces à chaque sortie.',
    'Dans une maison campinoise, les puces s’installent souvent **là où l’animal passe l’hiver** : garage, buanderie, sous-sol, véranda. Notre technicien traite ces pièces en plus des pièces de vie.',
    'Dans les **grands ensembles** comme dans les résidences récentes, les puces arrivent aussi avec les **déménagements** : un logement occupé auparavant par un animal peut cacher des cocons dans les sols.',
  ], ['Saint-Maur-des-Fossés', 'Chennevières-sur-Marne', 'Le Perreux-sur-Marne', 'Villiers-sur-Marne'],
  { q: 'Mon chat sort dans le jardin : comment éviter qu’il ramène des puces ?', a: 'Un antiparasitaire prescrit par le vétérinaire, renouvelé toute l’année, est la meilleure protection. Vérifiez aussi son pelage à la base de la queue et lavez régulièrement son couchage.' },
  [{ q: 'Faut-il traiter le garage où dort mon chien ?', a: 'Oui : si l’animal y dort, des œufs et des larves s’y trouvent. Le technicien traite le sol du garage et le couchage avec le reste de la maison.' }]),
  ville('Joinville-le-Pont', 'à Joinville-le-Pont', 'joinville-le-pont', '94', [
    'Joinville-le-Pont, entre la **Marne** et le **bois de Vincennes**, est une ville de promeneurs et de chiens. Les bords de Marne, les guinguettes et les sentiers du bois sont autant d’occasions pour une puce de monter sur votre animal.',
    'Les **petites maisons** et les immeubles bas de Joinville ont souvent des **parquets anciens** : c’est dans leurs fentes que les larves se cachent et se transforment en cocons.',
    'Notre base de Saint-Maurice est à quelques minutes : nous intervenons à Joinville **très rapidement**, souvent le jour même.',
  ], ['Saint-Maurice', 'Saint-Maur-des-Fossés', 'Nogent-sur-Marne', 'Champigny-sur-Marne'],
  { q: 'Pouvez-vous venir le jour même à Joinville-le-Pont ?', a: 'Très souvent, oui : notre base est à Saint-Maurice, juste à côté. Appelez le 07 68 07 72 19 pour connaître la disponibilité du jour.' },
  [{ q: 'Pourquoi je suis piqué et pas mon conjoint ?', a: 'C’est fréquent : les puces piquent plus volontiers certaines personnes, et toutes les peaux ne réagissent pas de la même façon. Une seule personne piquée suffit à confirmer l’infestation.' }]),
  ville('Alfortville', 'à Alfortville', 'alfortville', '94', [
    'Alfortville, posée entre la **Seine** et la **Marne**, est une ville dense d’**appartements** et de petites maisons. Les puces y arrivent surtout avec les chiens et les chats, mais aussi par les **caves d’immeubles** où vivent parfois des rongeurs.',
    'Dans un appartement, le cycle des puces est rapide : le **chauffage** et l’humidité accélèrent la transformation des larves. Plus on attend, plus il y a de cocons à traiter.',
    'Nous intervenons dans tous les quartiers, du nord de la ville aux bords de Seine, et coordonnons avec le bailleur quand plusieurs logements sont touchés.',
  ], ['Maisons-Alfort', 'Vitry-sur-Seine', 'Créteil', 'Choisy-le-Roi'],
  { q: 'Mes voisins ont aussi des puces : est-ce lié ?', a: 'C’est possible si la cause est commune, par exemple des rongeurs dans les caves. Prévenez le bailleur ou le syndic : un traitement coordonné évite les allers-retours.' },
  [{ q: 'Les puces peuvent-elles passer d’un appartement à l’autre ?', a: 'Rarement seules, mais un animal, un visiteur ou des rongeurs peuvent les transporter. Le traitement de votre logement vous protège ; la recherche de la cause protège l’immeuble.' }]),
  ville('Villejuif', 'à Villejuif', 'villejuif', '94', [
    'Villejuif compte de grands **parcs départementaux** et de nombreux quartiers résidentiels. Les chiens s’y promènent beaucoup, et les puces font souvent le trajet jusqu’à l’appartement avec eux.',
    'Avec les **nouveaux quartiers** construits autour des gares, beaucoup d’habitants emménagent. Si l’ancien occupant avait un animal, des cocons peuvent attendre dans les sols : les premières piqûres arrivent alors quelques jours après l’emménagement.',
    'Nous traitons le logement, recherchons l’origine des puces et vous expliquons comment éviter leur retour.',
  ], ['Vitry-sur-Seine', 'Le Kremlin-Bicêtre', 'Cachan', 'L’Haÿ-les-Roses'],
  { q: 'Je viens d’emménager à Villejuif et je suis piqué : que faire ?', a: 'Prévenez votre propriétaire par écrit, avec des photos. Un logement loué doit être exempt d’infestation de nuisibles (loi du 6 juillet 1989). Un traitement du logement règle le problème.' },
  [{ q: 'Les puces peuvent-elles venir des cartons de déménagement ?', a: 'C’est possible si les cartons ont été stockés dans une cave avec des rongeurs ou dans un logement infesté. Ouvrez-les plutôt dans une pièce sans tapis et aspirez ensuite.' }]),
  ville('Le Perreux-sur-Marne', 'au Perreux-sur-Marne', 'le-perreux-sur-marne', '94', [
    'Le Perreux-sur-Marne est une ville de **maisons et de jardins**, sur les bords de Marne. Chats et chiens y vivent souvent entre intérieur et extérieur, et les puces suivent le même chemin.',
    'Dans les **maisons de caractère** perreuxiennes, les parquets anciens, les escaliers en bois et les tapis épais offrent aux larves d’innombrables cachettes. Le traitement doit être précis, pièce par pièce.',
    'Au retour de vacances, une maison restée fermée peut révéler une infestation spectaculaire : ce sont les puces qui attendaient dans leur cocon.',
  ], ['Nogent-sur-Marne', 'Bry-sur-Marne', 'Champigny-sur-Marne', 'Neuilly-Plaisance'],
  { q: 'Peut-on traiter une maison entière au Perreux ?', a: 'Oui : toutes les pièces fréquentées par l’animal, mais aussi le garage, la véranda et le sous-sol si besoin. Le prix est fixé sur devis gratuit après quelques questions.' },
  [{ q: 'Mon escalier en bois peut-il abriter des puces ?', a: 'Oui, les jointures des marches et les bords de la moquette d’escalier sont des cachettes fréquentes pour les larves. Le technicien les traite avec soin.' }]),
  ville('Choisy-le-Roi', 'à Choisy-le-Roi', 'choisy-le-roi', '94', [
    'Choisy-le-Roi, sur les bords de **Seine**, mêle grandes résidences et quartiers pavillonnaires. Les puces y apparaissent souvent à la **fin de l’été**, quand les animaux rentrent davantage dans la maison.',
    'Dans les maisons avec jardin, les **chats errants** et les rongeurs peuvent laisser des puces près des portes et des abris. Votre animal les ramène ensuite à l’intérieur.',
    'Nous traitons le logement et vous laissons un plan simple pour les semaines suivantes : aspiration, lavage, antiparasitaire.',
  ], ['Vitry-sur-Seine', 'Thiais', 'Orly', 'Alfortville'],
  { q: 'Pourquoi les puces apparaissent-elles à la fin de l’été ?', a: 'La chaleur et l’humidité de l’été accélèrent le cycle : les œufs pondus en juillet et en août donnent des adultes quelques semaines plus tard. L’infestation devient alors visible.' },
  [{ q: 'Mon chat a des puces mais pas moi : faut-il traiter ?', a: 'Oui, car les œufs tombent dans le logement. Si l’on attend, les larves deviennent adultes et finissent par piquer aussi les occupants.' }]),
  ville('Le Kremlin-Bicêtre', 'au Kremlin-Bicêtre', 'le-kremlin-bicetre', '94', [
    'Le Kremlin-Bicêtre, aux portes de Paris, est une petite ville **très dense**, faite surtout d’appartements. Les puces s’y installent dans les **fentes du parquet**, les tapis et autour du couchage des animaux.',
    'La présence de nombreux **étudiants** et de logements meublés entraîne beaucoup de déménagements : un locataire peut hériter des puces de l’occupant précédent sans le savoir.',
    'Nous intervenons rapidement et traitons même les **petits logements** avec un protocole complet.',
  ], ['Gentilly', 'Villejuif', 'Ivry-sur-Seine', 'Paris 13e'],
  { q: 'Un studio peut-il être traité rapidement ?', a: 'Oui, un studio se traite vite, à condition que le sol soit dégagé et aspiré avant le passage. Le prix commence à 120 € TTC.' },
  [{ q: 'Je loue un meublé : qui doit payer le traitement ?', a: 'Si les puces étaient là à votre arrivée, prévenez immédiatement le propriétaire par écrit. Nous remettons une attestation d’intervention utile pour votre démarche.' }]),
  ville('Saint-Mandé', 'à Saint-Mandé', 'saint-mande', '94', [
    'Saint-Mandé est collée au **bois de Vincennes** : les promenades de chiens y sont quotidiennes, et le bois abrite une faune qui porte ses propres puces.',
    'Les **immeubles anciens** et les appartements familiaux saint-mandéens ont souvent de beaux parquets à lames : leurs fentes sont la cachette préférée des larves et des cocons.',
    'Notre base de Saint-Maurice est toute proche : intervention rapide, souvent dans la journée.',
  ], ['Vincennes', 'Paris 12e', 'Saint-Maurice', 'Montreuil'],
  { q: 'Mon chien a-t-il attrapé ses puces au bois de Vincennes ?', a: 'C’est possible : les puces passent facilement d’un animal à l’autre et la faune du bois en porte aussi. Un antiparasitaire régulier, prescrit par le vétérinaire, protège votre chien toute l’année.' },
  [{ q: 'Peut-on traiter un parquet ancien sans l’abîmer ?', a: 'Oui, le produit est appliqué en fine couche et ne mouille pas le bois. Le technicien vous signale toute finition fragile avant de commencer.' }]),
  ville('Paris 5e', 'à Paris 5e', 'paris-5', '75', [
    'Dans le **5e arrondissement**, autour du **Jardin des Plantes** et du **Quartier latin**, les immeubles anciens aux parquets usés offrent aux puces de nombreuses cachettes.',
    'Avec ses nombreux **étudiants** et ses chambres de service, l’arrondissement connaît beaucoup de changements de locataires : les cocons laissés par l’animal d’un ancien occupant peuvent éclore à votre arrivée.',
    'Nous intervenons dans tout l’arrondissement, y compris dans les **chambres sous les toits**, et adaptons le traitement aux petites surfaces.',
  ], ['Paris 13e', 'Paris 6e', 'Paris 4e', 'Paris 14e'],
  { q: 'Peut-on traiter une chambre de bonne contre les puces ?', a: 'Oui, même une petite surface est traitée avec un protocole complet : sol, plinthes, lit et textiles. Le prix commence à 120 € TTC.' },
  [{ q: 'Les puces peuvent-elles venir des greniers ou des toits ?', a: 'Oui, si des oiseaux ou des rongeurs y nichent. Dans les derniers étages, nous vérifions cette piste quand il n’y a pas d’animal dans le logement.' }]),
  ville('Paris 10e', 'à Paris 10e', 'paris-10', '75', [
    'Le **10e arrondissement**, entre le **canal Saint-Martin** et les grandes gares, est un quartier très vivant où chiens et promeneurs se croisent sans cesse. Une puce peut changer d’hôte en un instant.',
    'Les **immeubles anciens** et les appartements traversants du 10e ont souvent des parquets fatigués, avec des fentes larges : les larves y trouvent tout ce qu’il leur faut.',
    'Nous intervenons dans tout l’arrondissement et coordonnons avec le gardien ou le syndic si les parties communes sont concernées.',
  ], ['Paris 9e', 'Paris 11e', 'Paris 18e', 'Paris 19e'],
  { q: 'Les puces peuvent-elles venir des parties communes ?', a: 'C’est possible si un animal y dort ou si des rongeurs vivent dans les caves. Dans ce cas, nous recommandons un traitement coordonné avec le syndic.' },
  [{ q: 'Je travaille toute la journée : pouvez-vous intervenir tôt ou tard ?', a: 'Oui, nous intervenons 7j/7 et adaptons l’horaire. Il faut simplement prévoir de quitter le logement le temps indiqué après le traitement.' }]),
  ville('Paris 14e', 'à Paris 14e', 'paris-14', '75', [
    'Le **14e arrondissement**, avec le **parc Montsouris** et ses villas et maisons de ville, compte beaucoup de familles avec animaux. Les puces y sont un souci fréquent, surtout à la fin de l’été.',
    'Dans les **maisons et ateliers** du 14e, les planchers en bois et les tapis épais accueillent larves et cocons. Le technicien traite chaque niveau, de la cave au dernier étage si besoin.',
    'Nous intervenons rapidement dans tout l’arrondissement, avec un second passage si les puces continuent de sortir des cocons.',
  ], ['Paris 15e', 'Paris 13e', 'Paris 6e', 'Montrouge'],
  { q: 'Les puces peuvent-elles venir du parc Montsouris ?', a: 'Les parcs fréquentés par de nombreux chiens et par des animaux sauvages favorisent le passage de puces d’un animal à l’autre. Un antiparasitaire régulier protège votre chien.' },
  [{ q: 'Faut-il traiter la cave de ma maison de ville ?', a: 'Si votre animal y descend ou si des rongeurs y vivent, oui. Le technicien vous le dit pendant l’inspection.' }]),
  ville('Paris 16e', 'à Paris 16e', 'paris-16', '75', [
    'Le **16e arrondissement**, entre le **bois de Boulogne** et la Seine, compte de grands appartements avec **tapis précieux**, moquettes et parquets anciens : autant de refuges pour les larves de puces.',
    'Les promenades au bois sont quotidiennes pour beaucoup de chiens de l’arrondissement. Une puce qui monte au retour peut pondre de nombreux œufs dans le logement dès les jours suivants.',
    'Nous intervenons avec discrétion, adaptons le traitement aux matières délicates et vous remettons une **attestation** si besoin.',
  ], ['Paris 17e', 'Paris 15e', 'Boulogne-Billancourt', 'Neuilly-sur-Seine'],
  { q: 'Le traitement est-il adapté aux tapis anciens ?', a: 'Oui, le produit est appliqué en fine couche. Pour les pièces fragiles ou de valeur, le technicien vous propose la meilleure approche avant de commencer.' },
  [{ q: 'Pouvez-vous intervenir de façon discrète ?', a: 'Oui : horaires adaptés à votre emploi du temps, intervention organisée avec votre gardien ou votre personnel de maison, et attestation remise si besoin.' }]),
  ville('Clichy', 'à Clichy', 'clichy', '92', [
    'Clichy, aux portes du **17e arrondissement**, est une ville dense d’appartements et d’anciens ateliers. Les puces s’y installent surtout là où vivent les animaux, mais aussi dans les logements qui changent souvent d’occupants.',
    'Les **parcs** et les bords de Seine sont très fréquentés par les chiens : une puce peut y passer d’un animal à l’autre en quelques secondes.',
    'Nous intervenons rapidement et traitons tout le logement, avec un second passage si besoin.',
  ], ['Levallois-Perret', 'Asnières-sur-Seine', 'Paris 17e', 'Saint-Ouen'],
  { q: 'Combien coûte un traitement contre les puces à Clichy ?', a: 'À partir de 120 € TTC pour un appartement. Pour une maison ou un local, le prix est fixé sur devis gratuit avant l’intervention.' },
  [{ q: 'Que faire en attendant le technicien ?', a: 'Aspirez tout le logement, jetez le sac dehors, lavez à 60 °C le couchage de l’animal et les plaids, et prenez rendez-vous chez le vétérinaire.' }]),
  ville('Rueil-Malmaison', 'à Rueil-Malmaison', 'rueil-malmaison', '92', [
    'Rueil-Malmaison est une ville verte, avec le **parc de Bois-Préau**, la **forêt de la Malmaison** et de nombreux **pavillons avec jardin**. Chats et chiens y vivent dehors une partie de la journée, et ramènent parfois des puces.',
    'Dans les maisons, les puces se cachent souvent dans des endroits inattendus : **niche**, **abri de jardin**, **voiture**, **véranda**. Le technicien inspecte tous les lieux de repos de l’animal.',
    'Hérissons, renards et rongeurs du voisinage portent aussi des puces : nous vous conseillons pour limiter leur accès autour de la maison.',
  ], ['Nanterre', 'Suresnes', 'Garches', 'Bougival'],
  { q: 'Les hérissons du jardin peuvent-ils donner des puces à mon chien ?', a: 'Les hérissons portent leurs propres puces, qui peuvent passer occasionnellement sur un chien ou un chat. Un antiparasitaire régulier protège votre animal.' },
  [{ q: 'Faut-il traiter la voiture ?', a: 'Si votre chien y voyage souvent, oui : les œufs tombent sur les sièges et les tapis. Aspirez soigneusement et demandez conseil au technicien.' }]),
  ville('Colombes', 'à Colombes', 'colombes', '92', [
    'Colombes mêle **quartiers pavillonnaires** et grands immeubles, avec beaucoup de familles et d’animaux de compagnie. Les puces y sont fréquentes, surtout entre la fin de l’été et l’automne.',
    'Dans les pavillons, les chats qui sortent ramènent des puces du jardin et du voisinage. Dans les appartements, elles arrivent avec les chiens ou au moment d’un **emménagement**.',
    'Nous traitons le logement, recherchons la cause et vous expliquons comment éviter la récidive.',
  ], ['Asnières-sur-Seine', 'Bois-Colombes', 'La Garenne-Colombes', 'Courbevoie'],
  { q: 'Pourquoi les puces reviennent-elles chaque automne ?', a: 'Souvent parce que l’animal n’est pas protégé toute l’année, ou parce que des cocons restés dans la maison éclosent quand le chauffage reprend. Un antiparasitaire continu et un traitement complet du logement règlent le problème.' },
  [{ q: 'Les puces survivent-elles au froid ?', a: 'Dehors, le froid les ralentit. Dans un logement chauffé, elles continuent leur cycle tout l’hiver.' }]),
  ville('Montrouge', 'à Montrouge', 'montrouge', '92', [
    'Montrouge, aux portes du **14e arrondissement**, est l’une des villes les plus denses de France. En appartement, les puces se cachent dans les **fentes du parquet**, les **tapis** et autour du couchage de l’animal.',
    'Avec ses nombreux **jeunes couples** et familles qui emménagent, Montrouge connaît beaucoup de déménagements : des cocons laissés par l’animal d’un ancien occupant peuvent éclore à votre arrivée.',
    'Nous intervenons rapidement depuis notre base du Val-de-Marne et adaptons le traitement à chaque logement.',
  ], ['Paris 14e', 'Malakoff', 'Châtillon', 'Bagneux'],
  { q: 'Combien de temps après le traitement peut-on revenir chez soi ?', a: 'Après le temps d’absence indiqué par le technicien, puis une bonne aération. Il vous donne l’heure précise à la fin de l’intervention.' },
  [{ q: 'Mon bébé rampe au sol : est-ce compatible avec le traitement ?', a: 'Oui, avec des précautions : respectez le temps d’absence et l’aération, et suivez les consignes du technicien sur les zones à éviter les premiers jours.' }]),
  // ── Essonne, Seine-et-Marne, Yvelines (11/11/2026) ──
  ville("Évry-Courcouronnes", "à Évry-Courcouronnes", 'evry-courcouronnes', '91', [
    "À Évry-Courcouronnes, la plupart des infestations de puces partent d'un chien ou d'un chat de la maison, parfois d'un animal adopté récemment. Dans les grandes résidences, elles peuvent aussi venir des caves, où vivent rongeurs et chats errants.",
    "Nous traitons le logement entier, sols, plinthes, canapés et dessous des lits, pendant que votre vétérinaire traite l'animal. Un second passage élimine les puces sorties des cocons entre-temps.",
  ], ["Ris-Orangis", "Corbeil-Essonnes", "Lisses", "Bondoufle"],
  { q: "Je viens d'adopter un chat et j'ai des puces : est-ce lié ?", a: "Très souvent, oui. Un animal adopté ou recueilli peut arriver avec des puces. Faites-le traiter par le vétérinaire dès les premiers jours, et si vous êtes piqué, faites traiter le logement avant que les œufs n'éclosent partout." }),
  ville("Corbeil-Essonnes", "à Corbeil-Essonnes", 'corbeil-essonnes', '91', [
    "À Corbeil-Essonnes, les maisons anciennes aux planchers en bois et aux tomettes disjointes offrent aux larves de puces des fentes où se cacher. Le traitement doit atteindre ces interstices, pas seulement les surfaces.",
    "Dans les logements remis en location après une longue vacance, les puces affamées sautent sur les premiers occupants : un traitement avant l'emménagement évite les mauvaises surprises.",
  ], ["Évry-Courcouronnes", "Saint-Germain-lès-Corbeil", "Villabé", "Le Coudray-Montceaux"],
  { q: "Je suis piqué en entrant dans un logement vide : pourquoi ?", a: "Les puces peuvent attendre plusieurs mois dans leur cocon. Les vibrations des pas les réveillent, et elles sautent sur la première personne qui passe. Un traitement du logement vide règle le problème." }),
  ville("Massy", "à Massy", 'massy', '91', [
    "À Massy, les pavillons avec jardin voient souvent les chiens et chats rapporter des puces de l'extérieur, en particulier en fin d'été et à l'automne, quand elles sont les plus nombreuses.",
    "En appartement, l'infestation se concentre là où dort l'animal : panier, canapé, tapis. Nous traitons ces zones en priorité, puis tout le logement.",
  ], ["Palaiseau", "Antony", "Wissous", "Chilly-Mazarin"],
  { q: "Pourquoi plus de puces à l'automne ?", a: "Les puces se multiplient pendant les mois chauds et atteignent leur maximum en fin d'été. Dans les logements chauffés, elles continuent de se développer tout l'hiver. C'est souvent à l'automne qu'on remarque les premières piqûres." }),
  ville("Savigny-sur-Orge", "à Savigny-sur-Orge", 'savigny-sur-orge', '91', [
    "À Savigny-sur-Orge, ville de pavillons et de jardins, les puces arrivent souvent par un chat qui sort, ou par des hérissons et des rongeurs qui passent dans le jardin.",
    "Le traitement couvre la maison et, si besoin, les lieux où dort l'animal dehors : niche, abri de jardin, véranda.",
  ], ["Viry-Châtillon", "Morsang-sur-Orge", "Juvisy-sur-Orge", "Épinay-sur-Orge"],
  { q: "Faut-il traiter le jardin contre les puces ?", a: "En général non : le soleil et la pluie limitent les puces dehors. On traite les lieux abrités où dort l'animal (niche, abri, véranda). Le jardin se traite seulement en cas de forte infestation à l'ombre." }),
  ville("Palaiseau", "à Palaiseau", 'palaiseau', '91', [
    "À Palaiseau, les logements étudiants et les colocations changent souvent d'occupants. Un animal qui a vécu dans le logement avant vous peut avoir laissé des œufs et des cocons dans la moquette.",
    "Dans les maisons de la vallée de l'Yvette, les chats qui chassent dans les jardins et les bois rapportent régulièrement des puces à la maison.",
  ], ["Massy", "Orsay", "Igny", "Villebon-sur-Yvette"],
  { q: "Des puces dans un logement étudiant sans animal : comment est-ce possible ?", a: "L'ancien occupant avait peut-être un animal. Les cocons peuvent rester des mois dans une moquette ou un canapé. Prévenez le propriétaire ou le gestionnaire : un traitement du logement est nécessaire." }),
  ville("Athis-Mons", "à Athis-Mons", 'athis-mons', '91', [
    "À Athis-Mons, nous traitons aussi bien des pavillons du coteau que des appartements de résidences. Dans les deux cas, le point de départ est presque toujours un animal de la maison.",
    "Pour les chambres d'hôtel et les locations proches de l'aéroport, un traitement rapide entre deux séjours, avec attestation, protège les clients suivants.",
  ], ["Paray-Vieille-Poste", "Juvisy-sur-Orge", "Morangis", "Ablon-sur-Seine"],
  { q: "Un client se plaint de piqûres dans ma location : que faire ?", a: "Bloquez la chambre et faites-la inspecter. Puces ou punaises de lit ne se traitent pas de la même façon. Nous identifions l'insecte, traitons entre deux séjours et remettons une attestation." }),
  ville("Sainte-Geneviève-des-Bois", "à Sainte-Geneviève-des-Bois", 'sainte-genevieve-des-bois', '91', [
    "À Sainte-Geneviève-des-Bois, les nombreux chats des pavillons circulent de jardin en jardin. Un seul chat infesté peut apporter des puces dans plusieurs maisons voisines.",
    "Les puces s'installent surtout là où l'animal se repose : coussin de fenêtre, canapé, panier. Le traitement cible ces zones et toutes les pièces où il circule.",
  ], ["Saint-Michel-sur-Orge", "Fleury-Mérogis", "Morsang-sur-Orge", "Villemoisson-sur-Orge"],
  { q: "Mon chat est traité mais j'ai encore des puces : pourquoi ?", a: "Le traitement du chat tue les puces adultes qui montent sur lui, mais les œufs, larves et cocons restent dans la maison. Il faut aussi traiter le logement, sinon de nouvelles puces sortent pendant des semaines." }),
  ville("Vigneux-sur-Seine", "à Vigneux-sur-Seine", 'vigneux-sur-seine', '91', [
    "À Vigneux-sur-Seine, dans les résidences, des puces peuvent venir des caves et des locaux où passent rongeurs et chats errants. Plusieurs voisins piqués en même temps doivent faire penser à une cause commune.",
    "Dans les pavillons, la source est le plus souvent un animal de la maison. Le traitement associe vétérinaire, traitement du logement et aspiration quotidienne.",
  ], ["Draveil", "Montgeron", "Athis-Mons", "Juvisy-sur-Orge"],
  { q: "Plusieurs voisins sont piqués : faut-il prévenir le bailleur ?", a: "Oui. Si plusieurs logements sont touchés, la cause est peut-être dans les parties communes (rongeurs, chats dans les caves). Le bailleur doit la faire traiter ; chaque logement est ensuite traité." }),
  ville("Ris-Orangis", "à Ris-Orangis", 'ris-orangis', '91', [
    "À Ris-Orangis, les chiens qui se promènent dans les bois de Saint-Eutrope et de l'Épine peuvent rapporter des puces, comme des tiques. Un contrôle du pelage au retour de promenade est une bonne habitude.",
    "À la maison, les puces pondent sur l'animal, et les œufs tombent partout où il passe. C'est pourquoi le traitement couvre tout le logement, pas seulement son panier.",
  ], ["Évry-Courcouronnes", "Grigny", "Draveil", "Bondoufle"],
  { q: "Comment vérifier si mon chien a des puces ?", a: "Passez un peigne fin dans le pelage, surtout à la base de la queue, et tapotez-le sur un papier blanc mouillé. Des points noirs qui deviennent rouges sont des déjections de puces." }),
  ville("Viry-Châtillon", "à Viry-Châtillon", 'viry-chatillon', '91', [
    "À Viry-Châtillon, les maisons avec jardin près des lacs et de l'Orge voient passer chats, hérissons et rongeurs, qui sèment des puces autour des terrasses et des abris.",
    "Quand un animal de la maison les rapporte à l'intérieur, elles se multiplient vite dans les tapis et les canapés. Le traitement en deux passages règle l'ensemble du cycle.",
  ], ["Grigny", "Savigny-sur-Orge", "Juvisy-sur-Orge", "Morsang-sur-Orge"],
  { q: "Pourquoi faut-il deux passages ?", a: "Le produit ne traverse pas les cocons. Les puces qui en sortent après le premier passage sont touchées par le produit restant, puis le second passage termine le travail. C'est ce qui évite les rechutes." }),
  ville("Meaux", "à Meaux", 'meaux', '77', [
    "À Meaux, nous intervenons dans les appartements du centre comme dans les pavillons des quartiers périphériques. Les puces arrivent le plus souvent avec un chat ou un chien de la maison.",
    "Dans les maisons de bourg et les fermes des environs, les chats de grange et les rongeurs entretiennent parfois des puces dans les dépendances : elles doivent être traitées avec la maison.",
  ], ["Trilport", "Nanteuil-lès-Meaux", "Chauconin-Neufmontiers", "Mareuil-lès-Meaux"],
  { q: "Les puces de chat piquent-elles les humains ?", a: "Oui. La puce du chat, la plus courante, pique aussi le chien et l'homme, surtout aux chevilles et aux jambes. Elle ne vit pas sur l'homme, mais elle le pique quand l'animal n'est pas là." }),
  ville("Chelles", "à Chelles", 'chelles', '77', [
    "À Chelles, les pavillons des bords de Marne et leurs jardins voient passer chats et hérissons. Les chiens et chats de la maison ramènent les puces à l'intérieur, où elles se multiplient.",
    "Les maisons anciennes, avec parquets et tapis, gardent bien les larves dans les fentes. Nous traitons ces zones avec soin, et l'aspiration quotidienne fait le reste.",
  ], ["Vaires-sur-Marne", "Gagny", "Montfermeil", "Brou-sur-Chantereine"],
  { q: "L'aspirateur suffit-il contre les puces ?", a: "Il est très utile, car il ramasse œufs et larves et ses vibrations font sortir les puces des cocons. Mais seul, il ne suffit pas. Videz le sac dehors après chaque passage." }),
  ville("Melun", "à Melun", 'melun', '77', [
    "À Melun, les immeubles anciens du centre ont des parquets et des moquettes où les puces se cachent. Les résidences plus récentes connaissent parfois des puces venues des caves.",
    "Nous traitons le logement en deux passages et vous expliquons comment préparer l'intervention : sols dégagés, linge de l'animal lavé à 60 °C, aspiration.",
  ], ["Dammarie-lès-Lys", "Le Mée-sur-Seine", "Vaux-le-Pénil", "Rubelles"],
  { q: "Comment préparer mon logement avant le traitement ?", a: "Dégagez les sols, lavez à 60 °C le linge de l'animal et les plaids, passez l'aspirateur partout, y compris sous les meubles. Le technicien vous donne la liste complète à la prise de rendez-vous." }),
  ville("Pontault-Combault", "à Pontault-Combault", 'pontault-combault', '77', [
    "À Pontault-Combault, les maisons en lisière des bois accueillent des chiens qui se promènent en forêt et des chats qui chassent. Ils rapportent régulièrement des puces, surtout de l'été à l'automne.",
    "Le traitement couvre la maison et les lieux de repos de l'animal (niche, garage, véranda). Votre vétérinaire traite l'animal en même temps.",
  ], ["Roissy-en-Brie", "Émerainville", "Ozoir-la-Ferrière", "Le Plessis-Trévise"],
  { q: "Les puces vivent-elles dans la voiture ?", a: "Oui, si le chien y voyage souvent. Les œufs tombent sur les sièges et les tapis. Aspirez soigneusement la voiture et lavez la couverture du chien en même temps que le traitement de la maison." }),
  ville("Savigny-le-Temple", "à Savigny-le-Temple", 'savigny-le-temple', '77', [
    "À Savigny-le-Temple, les familles avec chiens et chats sont nombreuses dans les lotissements. Une infestation de puces commence souvent dans la chambre d'un enfant où dort le chat.",
    "Nous traitons toutes les pièces où l'animal circule, avec un produit adapté aux logements habités, et vous indiquons le temps d'absence nécessaire.",
  ], ["Cesson", "Nandy", "Vert-Saint-Denis", "Saint-Pierre-du-Perray"],
  { q: "Combien de temps faut-il quitter le logement ?", a: "En moyenne 4 heures, le temps que le produit sèche. Le technicien vous confirme la durée le jour du traitement. Les animaux et les enfants reviennent une fois les sols secs et la pièce aérée." }),
  ville("Bussy-Saint-Georges", "à Bussy-Saint-Georges", 'bussy-saint-georges', '77', [
    "À Bussy-Saint-Georges, les appartements récents ont souvent du parquet stratifié et peu de moquette, ce qui facilite le traitement. Les puces se cachent alors dans les canapés, les tapis et les plinthes.",
    "Les chiens qui se promènent dans les parcs et les bois voisins sont la principale source. Le traitement de l'animal par le vétérinaire est indispensable.",
  ], ["Bussy-Saint-Martin", "Collégien", "Montévrain", "Jossigny"],
  { q: "Les puces vivent-elles dans un parquet stratifié ?", a: "Moins que dans une moquette, mais les larves se glissent dans les joints et sous les plinthes. Le traitement vise ces zones, et l'aspiration des joints est importante." }),
  ville("Champs-sur-Marne", "à Champs-sur-Marne", 'champs-sur-marne', '77', [
    "À Champs-sur-Marne, les étudiants de la Cité Descartes changent souvent de logement. Les puces laissées par l'animal d'un ancien locataire peuvent attendre dans une moquette et piquer les nouveaux occupants.",
    "Dans les pavillons proches du parc et des bords de Marne, les chats qui sortent rapportent les puces. Le traitement associe vétérinaire et traitement du logement.",
  ], ["Noisiel", "Torcy", "Noisy-le-Grand", "Émerainville"],
  { q: "Qui paie le traitement des puces à l'entrée dans un logement ?", a: "Si l'infestation existait avant votre arrivée, c'est au bailleur de remettre un logement sans nuisibles. Signalez-le par écrit dès les premières piqûres. Nous pouvons établir un devis à lui transmettre." }),
  ville("Villeparisis", "à Villeparisis", 'villeparisis', '77', [
    "À Villeparisis, les pavillons avec jardin et les chats qui circulent de maison en maison expliquent la plupart des infestations. Les hérissons et les rongeurs des jardins entretiennent aussi des puces dehors.",
    "À l'intérieur, nous traitons sols, canapés et lieux de repos de l'animal en deux passages, avec garantie d'un an.",
  ], ["Mitry-Mory", "Claye-Souilly", "Vaujours", "Courtry"],
  { q: "Les hérissons transmettent-ils des puces ?", a: "Ils ont leurs propres puces, qui piquent peu les animaux domestiques. Mais un jardin fréquenté par des animaux sauvages entretient souvent des puces de chat. Le vétérinaire protège votre animal toute l'année." }),
  ville("Dammarie-lès-Lys", "à Dammarie-lès-Lys", 'dammarie-les-lys', '77', [
    "À Dammarie-lès-Lys, les chiens qui se promènent en forêt et au bord de la Seine rapportent puces et tiques. Les maisons avec jardin sont les plus touchées en fin d'été.",
    "Dans les résidences, des puces venant des caves ou d'un logement voisin peuvent toucher plusieurs appartements. Le bailleur doit alors coordonner le traitement.",
  ], ["Melun", "Le Mée-sur-Seine", "Boissise-le-Roi", "Chartrettes"],
  { q: "Les puces transmettent-elles des maladies à mon animal ?", a: "Elles peuvent lui transmettre un ver intestinal, le ténia, et provoquer une allergie aux piqûres. Votre vétérinaire vous conseille un traitement adapté, en même temps que le traitement du logement." }),
  ville("Combs-la-Ville", "à Combs-la-Ville", 'combs-la-ville', '77', [
    "À Combs-la-Ville, les maisons de la vallée de l'Yerres ont souvent un jardin et un animal. Les puces se développent surtout dans les pièces chauffées où l'animal dort.",
    "Nous intervenons en deux passages, et vous indiquons les gestes qui accélèrent le résultat : aspiration chaque jour, linge lavé à 60 °C, traitement vétérinaire.",
  ], ["Moissy-Cramayel", "Quincy-sous-Sénart", "Brie-Comte-Robert", "Lieusaint"],
  { q: "Le lavage à 60 °C tue-t-il les puces ?", a: "Oui, il tue tous les stades : œufs, larves, cocons et adultes. Lavez à 60 °C la couverture de l'animal, les plaids et les housses de coussins avant le traitement." }),
  ville("Versailles", "à Versailles", 'versailles', '78', [
    "À Versailles, les appartements anciens ont des parquets à larges lames et des tapis épais, où les larves de puces se cachent dans les fentes. Le traitement doit aller jusque dans ces interstices.",
    "Dans les maisons des quartiers résidentiels, les chats et chiens qui sortent au jardin sont la principale source. Le vétérinaire et notre traitement agissent ensemble.",
  ], ["Le Chesnay-Rocquencourt", "Viroflay", "Saint-Cyr-l'École", "Buc"],
  { q: "Le traitement abîme-t-il les parquets anciens ?", a: "Non. Le produit est pulvérisé en fine couche et sèche rapidement, sans tacher. Pour les parquets cirés ou fragiles, le technicien adapte la méthode et vous prévient avant." }),
  ville("Sartrouville", "à Sartrouville", 'sartrouville', '78', [
    "À Sartrouville, dans les pavillons avec jardin, les chats qui sortent ramènent des puces, surtout de l'été à l'automne. Dans les résidences du Plateau, les caves sont une autre source possible.",
    "Nous traitons tout le logement en deux passages, en lien avec votre vétérinaire, avec une garantie d'un an.",
  ], ["Houilles", "Montesson", "Maisons-Laffitte", "Cormeilles-en-Parisis"],
  { q: "Les puces peuvent-elles venir de la cave ?", a: "Oui, si des rongeurs ou des chats errants y vivent. Les puces montent ensuite dans les logements. Il faut traiter la cave, éliminer les rongeurs, puis traiter les logements touchés." }),
  ville("Saint-Germain-en-Laye", "à Saint-Germain-en-Laye", 'saint-germain-en-laye', '78', [
    "À Saint-Germain-en-Laye, les chiens qui se promènent en forêt reviennent avec des puces et des tiques. Les maisons en lisière sont les plus exposées, de juin à octobre.",
    "Dans les appartements du centre, les puces s'installent dans les tapis et les canapés où dort l'animal. Nous traitons l'ensemble du logement.",
  ], ["Le Pecq", "Chambourcy", "Mareil-Marly", "Poissy"],
  { q: "Faut-il traiter l'animal toute l'année ?", a: "C'est conseillé, car les logements chauffés permettent aux puces de se développer même en hiver. Votre vétérinaire vous indique le produit et le rythme adaptés." }),
  ville("Mantes-la-Jolie", "à Mantes-la-Jolie", 'mantes-la-jolie', '78', [
    "À Mantes-la-Jolie, dans les résidences du Val Fourré comme dans le centre ancien, les puces viennent le plus souvent d'un animal de la maison, parfois des caves où passent rongeurs et chats.",
    "Pour les locataires, nous remettons une attestation d'intervention, utile pour les échanges avec le bailleur.",
  ], ["Mantes-la-Ville", "Buchelay", "Limay", "Magnanville"],
  { q: "Les puces peuvent-elles venir d'un logement voisin ?", a: "Oui, si un animal infesté vit à côté ou si les puces circulent par un palier commun. Si vous n'avez pas d'animal, cherchez une cause commune avec le bailleur." }),
  ville("Poissy", "à Poissy", 'poissy', '78', [
    "À Poissy, nous traitons aussi bien les maisons des quartiers résidentiels que les appartements du centre. Les chats et chiens de la maison sont presque toujours à l'origine des puces.",
    "Le traitement vise les zones de repos de l'animal et tout le logement, en deux passages. Votre vétérinaire traite l'animal en même temps.",
  ], ["Saint-Germain-en-Laye", "Carrières-sous-Poissy", "Villennes-sur-Seine", "Orgeval"],
  { q: "Où se cachent les puces dans la maison ?", a: "Les adultes vivent sur l'animal. Les œufs tombent partout où il passe, et les larves se cachent à l'abri de la lumière : sous les meubles, dans les tapis, les fentes de parquet et les canapés." }),
  ville("Conflans-Sainte-Honorine", "à Conflans-Sainte-Honorine", 'conflans-sainte-honorine', '78', [
    "À Conflans-Sainte-Honorine, les maisons du coteau ont souvent un jardin et un animal qui sort. Les puces s'y développent surtout l'été, puis toute l'année dans la maison chauffée.",
    "Sur les péniches-logements, un chien ou un chat peut aussi apporter des puces. Nous traitons les bateaux comme une maison, pièce par pièce.",
  ], ["Andrésy", "Maurecourt", "Herblay-sur-Seine", "Achères"],
  { q: "Traitez-vous les péniches contre les puces ?", a: "Oui. Le traitement se fait pièce par pièce, comme dans une maison, avec une attention aux recoins et aux tapis. Le temps d'absence est le même." }),
  ville("Trappes", "à Trappes", 'trappes', '78', [
    "À Trappes, dans les résidences comme dans les pavillons, une infestation de puces commence le plus souvent avec un chat ou un chien de la maison.",
    "Si plusieurs logements sont piqués sans animal, une cause dans les caves ou les parties communes est probable : le bailleur doit être prévenu.",
  ], ["Élancourt", "Montigny-le-Bretonneux", "Plaisir", "La Verrière"],
  { q: "Je n'ai pas d'animal et j'ai des puces : est-ce possible ?", a: "Oui : ancien animal du logement, rongeurs dans les caves, chats errants près des fenêtres. Le technicien recherche la source pour éviter que les puces reviennent." }),
  ville("Les Mureaux", "aux Mureaux", 'les-mureaux', '78', [
    "Aux Mureaux, les pavillons des bords de Seine et du parc de Bécheville voient leurs chats et chiens rapporter des puces du jardin. Dans les résidences, les caves sont une autre source.",
    "Nous traitons le logement en deux passages et vous accompagnons avec des conseils clairs pour éviter le retour.",
  ], ["Meulan-en-Yvelines", "Ecquevilly", "Verneuil-sur-Seine", "Bouafle"],
  { q: "Les puces reviennent-elles après le traitement ?", a: "Pas si l'animal est traité et les consignes suivies. Si elles réapparaissent dans l'année, notre garantie s'applique : nous repassons sans frais." }),
  ville("Houilles", "à Houilles", 'houilles', '78', [
    "À Houilles, les maisons en meulière avec jardin accueillent beaucoup de chats, qui circulent de cour en cour. Les puces passent ainsi d'une maison à l'autre.",
    "Dans ces maisons anciennes, les planchers et les escaliers en bois gardent les larves dans leurs fentes. Le traitement atteint ces zones, en deux passages.",
  ], ["Sartrouville", "Carrières-sur-Seine", "Bezons", "Chatou"],
  { q: "Faut-il traiter l'escalier et les marches en bois ?", a: "Oui, si l'animal y passe ou y dort. Les larves se cachent dans les fentes et sous les nez de marche. Le technicien les inclut dans le traitement." }),
  ville("Montigny-le-Bretonneux", "à Montigny-le-Bretonneux", 'montigny-le-bretonneux', '78', [
    "À Montigny-le-Bretonneux, les familles avec animaux sont nombreuses dans les maisons de ville. Une infestation de puces se repère souvent aux piqûres sur les chevilles des enfants.",
    "Nous traitons toutes les pièces fréquentées par l'animal, et vous indiquons le temps d'absence et les gestes à suivre après le passage.",
  ], ["Guyancourt", "Voisins-le-Bretonneux", "Trappes", "Élancourt"],
  { q: "Les piqûres sur les chevilles sont-elles des puces ?", a: "Très souvent. Les puces sautent depuis le sol et piquent le bas des jambes, souvent en petites séries. Les punaises de lit piquent plutôt les bras, le cou et le dos pendant la nuit." }),
]

export function getVillePuces(slug: string) {
  return VILLES_PUCES.find((x) => x.slug === slug)
}
