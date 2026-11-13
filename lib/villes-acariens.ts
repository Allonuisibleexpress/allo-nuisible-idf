// Pages « Acariens à [ville] » (/acariens/[ville]) : 15 villes du Val-de-Marne (31/10/2026).
// Méthodes confirmées par l'utilisateur : vapeur sèche, cryogénie, pulvérisation acaricide.
// Aucune promesse médicale. Conseils de prévention repris d'ameli.fr (source citée).
// Règles : pas de chiffre inventé, pas de tiret long, pas de « naturel », « bio », « écologique », « sans danger ».

import type { Ville, VilleServiceConfig } from '@/components/VilleServicePage'
import { ficheAcariens } from '@/lib/fiche-nuisible'
import { LOCAL_ACARIENS_GC } from '@/lib/local-acariens-gc'
import { LOCAL_ACARIENS_94 } from '@/lib/local-acariens-94'
import { ACARIENS_APPROFONDI } from '@/lib/acariens-approfondi'

const AMELI = 'https://www.ameli.fr/assure/sante/themes/allergie/vivre-allergique'

export const CONFIG_ACARIENS: VilleServiceConfig = {
  basePath: '/acariens',
  fiche: (v, vs) => ficheAcariens(v, vs),
  titre: 'Acariens',
  serviceType: 'Traitement anti-acariens',
  pilier: { href: '/services/acariens', label: 'Acariens', lien: 'notre traitement anti-acariens' },
  enBref: [
    'Allo Nuisible IDF traite les acariens de la literie, des canapés, des tapis et des textiles, chez les particuliers et les professionnels.',
    'Méthodes : vapeur sèche et cryogénie, sans produit, ou pulvérisation acaricide professionnelle quand plusieurs pièces sont touchées.',
    'Le traitement réduit les acariens et leurs allergènes ; il ne remplace pas le suivi médical d\'une allergie.',
    'À partir de 120 € TTC pour une chambre, devis gratuit, garantie 1 an.',
  ],
  cachettes: {
    titre: 'Où vivent les acariens',
    items: [
      'Matelas et sommiers, surtout tapissiers',
      'Oreillers, couettes et traversins',
      'Canapés et fauteuils en tissu',
      'Tapis et moquettes',
      'Rideaux et tentures',
      'Peluches et coussins',
    ],
    signes: 'Les acariens sont invisibles à l\'œil nu. On les soupçonne surtout quand une personne allergique réagit au réveil ou au contact de la literie ; le diagnostic d\'une allergie relève d\'un médecin.',
  },
  methodes: [
    { titre: 'Vapeur sèche', tag: 'Sans produit', texte: 'Vapeur à haute température appliquée en profondeur sur la literie, les canapés et les tapis. La pièce est utilisable dès la fin du passage.', href: '/blog/vapeur-seche-punaises-de-lit' },
    { titre: 'Cryogénie', tag: 'Sans produit', texte: 'Neige carbonique très froide projetée sur les textiles et les recoins, sans humidité, pour les matières qui supportent mal la vapeur.', href: '/blog/cryogenie-punaises-de-lit' },
    { titre: 'Pulvérisation acaricide', tag: 'Traitement de fond', texte: 'Produit acaricide professionnel appliqué par un technicien Certibiocide quand la population est importante ou que plusieurs pièces sont touchées.' },
    { titre: 'Prévention', tag: 'Indispensable', texte: 'Humidité, aération, housses et entretien de la literie : sans ces gestes, les acariens se réinstallent dans tous les logements.' },
  ],
  encadre: {
    titre: 'Les conseils de l\'Assurance maladie',
    items: [
      'Gardez une humidité intérieure entre 40 et 60 % et une température entre 18 et 22 °C.',
      'Aérez chaque pièce au moins 10 minutes par jour.',
      'Lavez souvent la literie à 60 °C et aspirez régulièrement le matelas.',
      'Utilisez des housses anti-acariens qui enveloppent le matelas sur ses 6 faces.',
      'Préférez un aspirateur avec filtre HEPA et les sols durs aux moquettes.',
    ],
  },
  sections: [
    {
      titre: 'Qu\'est-ce qu\'un acarien de la poussière ?',
      paras: [
        "Les acariens de la poussière sont de minuscules animaux, invisibles à l'œil nu, qui vivent dans les textiles de la maison : **matelas, oreillers, couettes, canapés, tapis, rideaux, peluches**. Ils se nourrissent des petites peaux mortes que nous perdons chaque jour, ce qui explique leur présence dans la literie.",
        "Ils ne piquent pas et ne transmettent pas de maladie infectieuse. Le problème vient des **allergènes** qu'ils laissent dans les textiles, qui peuvent gêner les personnes allergiques.",
      ],
    },
    {
      titre: 'Pourquoi ils prolifèrent',
      paras: [
        "Les acariens aiment la **chaleur et l'humidité**. L'Assurance maladie conseille de réduire l'humidité et la température du logement pour éviter leur développement, avec un taux d'humidité idéal **entre 40 et 60 %**.",
        "Une chambre peu aérée, du linge qui sèche à l'intérieur, une infiltration d'eau ou une literie ancienne jamais lavée à haute température créent un terrain favorable.",
      ],
    },
    {
      titre: 'Ce que le traitement peut faire, et ce qu\'il ne fait pas',
      paras: [
        "Un traitement professionnel **réduit fortement la quantité d'acariens et de leurs allergènes** dans la literie et les textiles traités. C'est utile avant l'arrivée d'un bébé, pour une personne allergique, ou dans une location meublée entre deux occupants.",
        "Il ne **soigne pas une allergie** : le diagnostic et le traitement relèvent d'un médecin ou d'un allergologue. Et comme les acariens vivent dans tous les logements, le résultat ne dure que si la prévention suit.",
      ],
    },
    {
      titre: 'Les erreurs à éviter',
      paras: ["Quelques habitudes annulent l'effet d'un traitement :"],
      liste: [
        "**Sécher le linge dans la chambre** : l'humidité remonte et favorise les acariens.",
        "**Laver la literie à basse température** : l'Assurance maladie conseille 60 °C quand l'étiquette le permet.",
        "**Oublier le canapé et les tapis** : traiter seulement le lit laisse un réservoir à côté.",
        "**Ne jamais aérer en hiver** : quelques minutes par jour suffisent à renouveler l'air.",
      ],
    },
    {
      titre: 'Acariens, punaises de lit, puces ou gale : ne pas confondre',
      paras: [
        "Beaucoup de personnes nous appellent pour des « acariens » alors qu'il s'agit d'un autre problème, et inversement. Les signes ne sont pas les mêmes, et le traitement non plus.",
      ],
      table: {
        head: ['Problème', 'Ce que l\'on remarque', 'Ce qu\'il faut faire'],
        rows: [
          ['Acariens de la poussière', 'Aucune piqûre ; nez bouché, éternuements, yeux qui grattent, surtout au réveil ou en faisant le lit', 'Traiter la literie et les textiles, réduire l\'humidité, consulter un médecin en cas de symptômes'],
          ['Punaises de lit', 'Piqûres souvent en ligne sur les bras, le cou, le dos ; petites taches noires sur le matelas', 'Voir notre [traitement des punaises de lit](/services/punaises-de-lit)'],
          ['Puces', 'Piqûres groupées sur les chevilles et les mollets ; animal qui se gratte', 'Traiter l\'animal chez le vétérinaire et le logement : voir notre [traitement des puces](/services/puces)'],
          ['Gale', 'Démangeaisons intenses, surtout la nuit, chez plusieurs personnes du foyer', 'Consulter un médecin : la gale se soigne par un traitement médical'],
        ],
      },
    },
    {
      titre: 'Qui a le plus besoin d\'un traitement anti-acariens ?',
      paras: [
        "Les acariens vivent dans tous les logements, mais ils ne gênent pas tout le monde de la même façon. Le traitement est surtout utile dans ces situations :",
      ],
      liste: [
        "**Une personne allergique aux acariens** dans le foyer, avec un diagnostic posé par un médecin ou un allergologue.",
        "**L'arrivée d'un bébé** : beaucoup de parents veulent une chambre assainie, avec une literie traitée sans produit.",
        "**Un matelas ou un canapé d'occasion**, ou une literie qui a déjà servi à d'autres personnes.",
        "**Une location meublée**, un gîte ou une chambre d'hôtes, entre deux occupants.",
        "**Un logement resté humide** après un dégât des eaux, une infiltration ou une longue période fermée.",
        "**Les crèches, assistantes maternelles, résidences seniors et hôtels**, qui accueillent des publics sensibles.",
      ],
    },
    {
      titre: 'Literie : traiter, protéger ou remplacer ?',
      paras: [
        "Il n'est pas toujours nécessaire de changer son matelas. Voici comment nous vous conseillons, élément par élément :",
      ],
      table: {
        head: ['Élément', 'Notre conseil'],
        rows: [
          ['Matelas', 'Traitement en profondeur à la vapeur sèche, puis housse anti-acariens intégrale. Remplacement seulement s\'il est très ancien ou abîmé.'],
          ['Sommier tapissier', 'Traité avec le matelas : c\'est un réservoir souvent oublié.'],
          ['Oreillers et couettes', 'Lavage à 60 °C si l\'étiquette le permet, sinon traitement sur place et housses intégrales.'],
          ['Canapé en tissu', 'Vapeur sèche ou cryogénie selon le tissu, coussins compris.'],
          ['Tapis et moquettes', 'Vapeur sèche en profondeur, puis aspiration régulière avec filtre HEPA.'],
          ['Peluches', 'Lavage à 60 °C ou passage au congélateur, puis lavage. Limiter leur nombre dans le lit.'],
          ['Rideaux et tentures', 'Lavage selon l\'étiquette, ou traitement sur place sans les décrocher.'],
        ],
      },
    },
    {
      titre: 'Locataire, propriétaire, hôte : qui fait quoi ?',
      paras: [
        "Les acariens étant présents dans tous les logements, leur traitement est en général **à la charge de l'occupant**. En revanche, si l'humidité qui les fait proliférer vient d'un **défaut du logement** (infiltration, ventilation hors service, remontées d'humidité), la réparation revient au **propriétaire** : signalez-le par écrit.",
        "Pour une **location meublée** ou une **location de courte durée**, c'est à l'exploitant de fournir une literie propre. Un traitement régulier des matelas et des canapés, avec une **attestation**, est un bon argument auprès des voyageurs allergiques.",
      ],
    },
  ],
  protocole: {
    titre: 'Notre intervention contre les acariens',
    etapes: [
      { titre: 'Diagnostic', texte: 'Repérage des textiles à traiter, de l\'humidité et de l\'aération du logement. Devis gratuit avant toute intervention.' },
      { titre: 'Préparation', texte: 'Lavage du linge de lit à 60 °C si l\'étiquette le permet, accès dégagé au lit, au canapé et aux tapis.' },
      { titre: 'Traitement', texte: 'Vapeur sèche, cryogénie ou pulvérisation acaricide, pièce par pièce, selon les textiles et l\'importance du problème.' },
      { titre: 'Aération', texte: 'Après une pulvérisation, le technicien vous indique le temps d\'aération avant de réoccuper la pièce. Avec la vapeur ou la cryogénie, la pièce est utilisable tout de suite.' },
      { titre: 'Conseils', texte: 'Humidité, aération, housses anti-acariens, entretien de la literie : un plan simple pour garder le résultat.' },
      { titre: 'Garantie', texte: 'Garantie 1 an et attestation d\'intervention pour les professionnels.' },
    ],
  },
  publics: {
    titre: 'Particuliers, locations, professionnels',
    cartes: [
      { titre: 'Particuliers', texte: 'Chambre d\'enfant, arrivée d\'un bébé, personne allergique : traitement de la literie et des textiles, avec ou sans produit.' },
      { titre: 'Locations meublées', texte: 'Entre deux locataires ou voyageurs, traitement des matelas, canapés et rideaux, avec attestation si besoin.' },
      { titre: 'Professionnels', texte: 'Hôtels, crèches, résidences : intervention planifiée en dehors des heures d\'occupation, attestation et contrat possibles.' },
    ],
  },
  guides: [
    { href: '/blog/acariens-matelas', label: 'Acariens dans le matelas : 7 gestes' },
    { href: '/blog/acariens-ou-punaises-de-lit', label: 'Acariens ou punaises de lit ?' },
    { href: '/blog/acariens-humidite-maison', label: 'Acariens et humidité : le bon taux' },
    { href: '/blog/vapeur-seche-punaises-de-lit', label: 'La vapeur sèche : principe et limites' },
    { href: '/blog/cryogenie-punaises-de-lit', label: 'La cryogénie : comment ça marche' },
  ],
  sources: [
    { label: 'Assurance maladie (ameli.fr), vivre au quotidien avec une allergie', url: AMELI },
    { label: 'Règlement (UE) n° 528/2012 sur les produits biocides (EUR-Lex)', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32012R0528' },
  ],
  maj: '2026-11-11',
  certification: 'Techniciens titulaires du Certibiocide, la certification obligatoire pour utiliser des produits acaricides professionnels.',
  autresTitre: 'Acariens dans d\'autres villes',
  local: { ...LOCAL_ACARIENS_94, ...LOCAL_ACARIENS_GC },
  approfondi: ACARIENS_APPROFONDI,
  sectionsParPage: 3,
  localTitre: (a, nom) => `Acariens ${a} : ce qui est propre à ${nom}`,
}

const FAQ_COMMUNE = (a: string) => [
  { q: `Combien coûte un traitement anti-acariens ${a} ?`, a: 'À partir de 120 € TTC pour une chambre traitée à la vapeur sèche. Pour un logement complet, le prix est établi sur place, selon les pièces et les textiles. Le devis est gratuit.' },
  { q: 'Le traitement soigne-t-il une allergie ?', a: 'Non. Il réduit les acariens et leurs allergènes dans les textiles traités. Le suivi d\'une allergie se fait avec votre médecin ou un allergologue.' },
  { q: 'Faut-il quitter le logement ?', a: 'Non avec la vapeur sèche ou la cryogénie, qui n\'utilisent aucun produit. Après une pulvérisation acaricide, le technicien vous indique le temps d\'aération avant de réoccuper la pièce.' },
  { q: 'Les acariens reviennent-ils ?', a: 'Ils vivent dans tous les logements et peuvent se réinstaller. Humidité entre 40 et 60 %, aération quotidienne, housses intégrales et lavage de la literie à 60 °C, comme le conseille l\'Assurance maladie, aident à garder le résultat.' },
]

export type VilleAcariens = Ville & { title: string }

// Val-de-Marne par défaut ; Essonne, Seine-et-Marne, Yvelines via dep (11/11/2026)
type Dep = { code: string; departement: string; zoneHref: string }
const D91: Dep = { code: '91', departement: 'Essonne', zoneHref: '/zones/essonne' }
const D77: Dep = { code: '77', departement: 'Seine-et-Marne', zoneHref: '/zones/seine-et-marne' }
const D78: Dep = { code: '78', departement: 'Yvelines', zoneHref: '/zones/yvelines' }
const ville = (nom: string, a: string, slug: string, contexte: string[], proches: string[], faq: { q: string; a: string }, dep?: Dep): VilleAcariens => {
  const code = dep?.code ?? '94'
  const titres = [`Traitement anti-acariens ${a} (${code})`, `Acariens ${a} (${code}) : traitement`, `Acariens ${a}`]
  return {
    slug,
    nom,
    a,
    code,
    departement: dep?.departement ?? 'Val-de-Marne',
    zoneHref: dep?.zoneHref ?? `/zones/val-de-marne/${slug}`,
    title: titres.find((x) => x.length <= 60) ?? titres[2],
    description: `Acariens ${a} : literie, canapés et tapis traités à la vapeur sèche, en cryogénie ou à l'acaricide. Dès 120 € TTC, devis gratuit.`,
    contexte,
    proches,
    faq: [faq, ...FAQ_COMMUNE(a)],
  }
}

export const VILLES_ACARIENS: VilleAcariens[] = [
  ville('Créteil', 'à Créteil', 'creteil', [
    'À Créteil, entre le lac, les bras de la Marne et de grandes résidences, l\'humidité est un sujet dans beaucoup de logements. Or les acariens se développent justement dans les intérieurs chauds et humides.',
    'La ville accueille aussi de nombreux étudiants. Matelas fournis, chambres petites et peu aérées : un traitement de la literie à l\'entrée dans le logement permet de partir sur de bonnes bases.',
    'Du Mont-Mesly aux bords du lac, en passant par le vieux Créteil, nous adaptons le traitement au logement : studio d\'étudiant, appartement familial ou maison avec sous-sol.',
  ], ['Maisons-Alfort', 'Saint-Maur-des-Fossés', 'Alfortville', 'Bonneuil-sur-Marne'],
  { q: 'J\'emménage dans un logement étudiant meublé : faut-il traiter le matelas ?', a: 'C\'est une bonne idée si le matelas a déjà servi, surtout si vous êtes allergique. Un passage à la vapeur sèche traite le matelas et l\'oreiller sans produit, et une housse anti-acariens intégrale protège ensuite la literie.' }),
  ville('Vitry-sur-Seine', 'à Vitry-sur-Seine', 'vitry-sur-seine', [
    'Vitry-sur-Seine compte beaucoup de grands ensembles et de logements anciens, où condensation et ventilation insuffisante favorisent l\'humidité, et donc les acariens.',
    'Dans ces logements, le traitement de la literie et des canapés va de pair avec quelques réglages simples : aérer chaque jour, ne pas sécher le linge dans les chambres, vérifier que les bouches de ventilation ne sont pas bouchées.',
  ], ['Ivry-sur-Seine', 'Villejuif', 'Choisy-le-Roi', 'Alfortville'],
  { q: 'Locataire : qui paie un traitement anti-acariens ?', a: 'Les acariens sont présents dans tous les logements : le traitement est en général à la charge de l\'occupant. Si l\'humidité vient d\'un défaut du logement (infiltration, ventilation hors service), signalez-le par écrit à votre bailleur, à qui revient la réparation.' }),
  ville('Champigny-sur-Marne', 'à Champigny-sur-Marne', 'champigny-sur-marne', [
    'À Champigny-sur-Marne, beaucoup de familles vivent en pavillon, parfois avec une chambre aménagée en sous-sol ou en rez-de-jardin. Ces pièces plus fraîches et plus humides sont celles où les acariens s\'installent le plus.',
    'Nous traitons la literie et les textiles, et nous vous indiquons comment assainir la pièce : aération, déshumidificateur si besoin, et vérification des remontées d\'humidité.',
  ], ['Saint-Maur-des-Fossés', 'Le Perreux-sur-Marne', 'Villiers-sur-Marne', 'Chennevières-sur-Marne'],
  { q: 'Une chambre au sous-sol favorise-t-elle les acariens ?', a: 'Souvent, oui, car ces pièces sont plus humides. Visez une humidité entre 40 et 60 %, comme le conseille l\'Assurance maladie : un hygromètre permet de la mesurer, et un déshumidificateur aide si elle reste élevée.' }),
  ville('Saint-Maur-des-Fossés', 'à Saint-Maur-des-Fossés', 'saint-maur-des-fosses', [
    'À Saint-Maur-des-Fossés, les grandes maisons anciennes ont souvent des tapis épais, des tentures, des fauteuils en tissu et de la literie de qualité qu\'on garde longtemps. Autant de textiles où les acariens trouvent refuge.',
    'Ces pièces de valeur se traitent avec délicatesse : la cryogénie, sans humidité, convient aux matières fragiles, et la vapeur sèche aux matelas et canapés.',
  ], ['Créteil', 'Joinville-le-Pont', 'Champigny-sur-Marne', 'Bonneuil-sur-Marne'],
  { q: 'Peut-on traiter un tapis ancien ou un fauteuil fragile ?', a: 'Oui. Nous choisissons la méthode selon la matière : la cryogénie n\'apporte pas d\'humidité et convient aux textiles fragiles, la vapeur sèche aux matelas, canapés et tapis plus résistants. Un essai sur une zone discrète est fait si besoin.' }),
  ville('Ivry-sur-Seine', 'à Ivry-sur-Seine', 'ivry-sur-seine', [
    'Ivry-sur-Seine compte beaucoup de logements neufs, très bien isolés. C\'est un avantage pour le chauffage, mais si l\'air est mal renouvelé, l\'humidité s\'accumule et les acariens en profitent.',
    'Dans ces appartements, le bon fonctionnement de la ventilation compte autant que le traitement : bouches propres, entrées d\'air ouvertes, et aération quotidienne.',
    'Des nouveaux quartiers d\'Ivry Confluences aux immeubles du centre-ville et du Petit-Ivry, nous intervenons aussi bien à l\'emménagement qu\'en cas d\'allergie déclarée.',
  ], ['Vitry-sur-Seine', 'Le Kremlin-Bicêtre', 'Charenton-le-Pont', 'Villejuif'],
  { q: 'Mon logement neuf est très bien isolé : est-ce un problème pour les acariens ?', a: 'Pas en soi, à condition que l\'air soit bien renouvelé. Vérifiez que les bouches de ventilation ne sont ni bouchées ni encrassées et aérez chaque pièce au moins 10 minutes par jour, comme le conseille l\'Assurance maladie.' }),
  ville('Maisons-Alfort', 'à Maisons-Alfort', 'maisons-alfort', [
    'Maisons-Alfort, au bord de la Marne et près de sa confluence avec la Seine, connaît des épisodes de crue et de forte humidité. Après un dégât des eaux, textiles et literie restent humides, un terrain idéal pour les acariens et les moisissures.',
    'Nous intervenons sur la literie et les textiles une fois le logement asséché, et nous pouvons coupler le traitement avec une désinfection si l\'eau a touché les pièces.',
  ], ['Alfortville', 'Créteil', 'Charenton-le-Pont', 'Saint-Maurice'],
  { q: 'Après un dégât des eaux, faut-il traiter contre les acariens ?', a: 'Commencez par assécher le logement et réparer la cause. Ensuite, si la literie ou les textiles sont restés humides, un traitement anti-acariens et une désinfection limitent les acariens et les moisissures. Vérifiez si votre assurance prend en charge une partie des frais.' }),
  ville('Fontenay-sous-Bois', 'à Fontenay-sous-Bois', 'fontenay-sous-bois', [
    'À Fontenay-sous-Bois, beaucoup de familles avec enfants vivent en pavillon ou en résidence. Les chambres d\'enfants, avec leurs peluches, tapis de jeu et coussins, accumulent les textiles où vivent les acariens.',
    'Nous traitons la literie et les textiles de la chambre sans produit, à la vapeur sèche ou en cryogénie, pour que l\'enfant puisse y dormir le soir même.',
  ], ['Vincennes', 'Nogent-sur-Marne', 'Le Perreux-sur-Marne', 'Saint-Mandé'],
  { q: 'Les peluches gardent-elles les acariens ?', a: 'Oui, comme tous les textiles. Lavez-les en machine selon leur étiquette et limitez leur nombre sur le lit. Celles qui ne passent pas en machine peuvent être traitées à la vapeur sèche ou en cryogénie lors de notre passage.' }),
  ville('Villejuif', 'à Villejuif', 'villejuif', [
    'À Villejuif, appartements et pavillons accueillent de nombreuses jeunes familles. Avant l\'arrivée d\'un bébé, beaucoup de parents veulent une chambre assainie, avec une literie et des textiles traités.',
    'Pour une chambre de bébé, nous privilégions les méthodes sans produit, vapeur sèche et cryogénie, et nous vous donnons les bons réflexes : aération, humidité, housse de matelas intégrale.',
  ], ['Le Kremlin-Bicêtre', 'Vitry-sur-Seine', 'Cachan', 'L\'Haÿ-les-Roses'],
  { q: 'Faut-il traiter la chambre avant l\'arrivée d\'un bébé ?', a: 'Ce n\'est pas obligatoire, mais c\'est rassurant, surtout si un parent est allergique. Nous utilisons alors la vapeur sèche ou la cryogénie, sans produit. Lavez aussi le linge de lit neuf avant usage et aérez la chambre chaque jour.' }),
  ville('Vincennes', 'à Vincennes', 'vincennes', [
    'Les appartements anciens de Vincennes ont souvent des moquettes, de gros rideaux et des tapis sur parquet. Ces textiles épais, rarement lavés, retiennent la poussière et les acariens.',
    'Nous traitons les moquettes, tapis et rideaux à la vapeur sèche ou en cryogénie, et la literie en même temps, pour ne laisser aucun réservoir dans la pièce.',
    'Un matelas qui a suivi plusieurs déménagements, un canapé d\'occasion acheté en ligne : à Vincennes comme ailleurs, ce sont souvent eux qui font flamber les allergies, bien plus que la propreté du logement.',
    'Près du château et du Bois, beaucoup de familles vivent dans des deux ou trois pièces où la chambre des enfants sert aussi de salle de jeux : peluches, tapis d\'éveil et coussins y rejoignent la liste des textiles à traiter.',
  ], ['Saint-Mandé', 'Fontenay-sous-Bois', 'Montreuil', 'Nogent-sur-Marne'],
  { q: 'Faut-il retirer la moquette pour se débarrasser des acariens ?', a: 'L\'Assurance maladie conseille de préférer un revêtement dur lavable aux moquettes pour les personnes allergiques. Si vous gardez la moquette, aspirez-la souvent avec un filtre HEPA et faites-la traiter en même temps que la literie.' }),
  ville('Nogent-sur-Marne', 'à Nogent-sur-Marne', 'nogent-sur-marne', [
    'À Nogent-sur-Marne, entre bords de Marne et Bois de Vincennes, on trouve de nombreuses locations meublées et résidences secondaires. Literie et canapés y servent à plusieurs occupants successifs.',
    'Entre deux locations, un traitement des matelas, canapés et rideaux, avec une attestation, rassure les voyageurs et les locataires allergiques.',
  ], ['Le Perreux-sur-Marne', 'Fontenay-sous-Bois', 'Joinville-le-Pont', 'Vincennes'],
  { q: 'Location meublée : comment préparer la literie entre deux occupants ?', a: 'Lavez draps, taies et housses à 60 °C, posez des housses anti-acariens intégrales sur matelas et oreillers, et faites traiter périodiquement matelas et canapés à la vapeur sèche. Nous fournissons une attestation d\'intervention si besoin.' }),
  ville('Le Perreux-sur-Marne', 'au Perreux-sur-Marne', 'le-perreux-sur-marne', [
    'Au Perreux-sur-Marne, beaucoup de maisons avec jardin accueillent chiens et chats, qui passent du jardin au canapé et parfois au lit. Leurs poils et leurs squames nourrissent aussi les acariens.',
    'Nous traitons les canapés, paniers, tapis et la literie, et nous vous conseillons sur les bons réflexes avec un animal pour garder le résultat.',
  ], ['Nogent-sur-Marne', 'Bry-sur-Marne', 'Champigny-sur-Marne', 'Fontenay-sous-Bois'],
  { q: 'Mon chien dort sur le canapé : cela favorise-t-il les acariens ?', a: 'Les animaux apportent poils et squames qui nourrissent les acariens. Pour une personne allergique, l\'Assurance maladie conseille de leur interdire l\'accès à la chambre et de les laver régulièrement avec un gant humide. Faites traiter aussi le canapé et le panier.' }),
  ville('Charenton-le-Pont', 'à Charenton-le-Pont', 'charenton-le-pont', [
    'À Charenton-le-Pont, la plupart des habitants vivent en appartement, en copropriété. Les chambres donnent souvent sur cour, avec peu d\'aération en hiver, ce qui favorise l\'humidité.',
    'Le traitement de la literie et des canapés se complète d\'une aération régulière. Un purificateur d\'air peut aider, mais ne remplace pas le traitement des textiles, où vivent les acariens.',
  ], ['Saint-Maurice', 'Maisons-Alfort', 'Ivry-sur-Seine', 'Saint-Mandé'],
  { q: 'Un purificateur d\'air suffit-il contre les acariens ?', a: 'Non. Il peut retenir une partie des allergènes en suspension, mais les acariens vivent dans le matelas, les oreillers et les canapés. Il faut traiter ces textiles et garder une bonne aération.' }),
  ville('Saint-Mandé', 'à Saint-Mandé', 'saint-mande', [
    'Saint-Mandé compte de nombreux immeubles anciens, avec de grandes pièces, des rideaux épais, des tentures et des tapis. Ces textiles lourds, rarement lavés, sont des réservoirs à acariens.',
    'Nous traitons rideaux, tentures, tapis et literie à la vapeur sèche ou en cryogénie, sans les décrocher quand c\'est possible.',
    'Commune résidentielle collée au lac et au Bois de Vincennes, Saint-Mandé abrite aussi des maisons de retraite et des résidences seniors : pour les personnes âgées ou fragiles, nous privilégions les méthodes sans produit. Chez ces publics, nous programmons l\'intervention le matin pour que la chambre soit aérée et utilisable le soir même.',
    'Autre spécificité de Saint-Mandé : beaucoup d\'appartements donnent sur des cours fermées, peu ensoleillées. Les chambres sur cour sèchent mal, et c\'est souvent là que nous trouvons les literies les plus chargées.',
  ], ['Vincennes', 'Saint-Maurice', 'Charenton-le-Pont', 'Paris 12e'],
  { q: 'Les rideaux et tentures retiennent-ils les acariens ?', a: 'Oui, surtout s\'ils sont épais et rarement lavés. Lavez-les selon leur étiquette, ou faites-les traiter à la vapeur sèche ou en cryogénie. Pour une chambre de personne allergique, des rideaux légers et lavables sont plus faciles à entretenir.' }),
  ville('Alfortville', 'à Alfortville', 'alfortville', [
    'Alfortville, entre la Seine et la Marne, est une ville où l\'air peut être humide, surtout dans les logements bas et proches des quais. Or l\'humidité est le premier allié des acariens.',
    'Avant de traiter, nous regardons l\'humidité de la chambre : un hygromètre permet de vérifier qu\'elle reste dans la zone conseillée, et un déshumidificateur aide si elle est trop élevée.',
    'Des tours du quartier Chantereine aux maisons proches du parc Sarrazin, le traitement s\'adapte : literie seule dans un studio, ou literie, canapés et tapis dans une maison familiale.',
  ], ['Maisons-Alfort', 'Vitry-sur-Seine', 'Créteil', 'Ivry-sur-Seine'],
  { q: 'Quel taux d\'humidité viser contre les acariens ?', a: 'L\'Assurance maladie indique un taux d\'humidité idéal entre 40 et 60 %, avec une température entre 18 et 22 °C selon les pièces. Un hygromètre, peu coûteux, permet de le vérifier dans la chambre.' }),
  ville('Saint-Maurice', 'à Saint-Maurice', 'saint-maurice', [
    'Saint-Maurice est notre commune : notre siège est rue du Val d\'Osne. Entre la Marne et le Bois de Vincennes, maisons et copropriétés ont souvent des pièces exposées à l\'humidité.',
    'Nous intervenons rapidement pour traiter la literie, les canapés et les tapis, avec la méthode adaptée à chaque textile, et nous restons disponibles pour un contrôle.',
  ], ['Charenton-le-Pont', 'Maisons-Alfort', 'Joinville-le-Pont', 'Saint-Maur-des-Fossés'],
  { q: 'Pouvez-vous intervenir rapidement à Saint-Maurice ?', a: 'Oui, notre siège est au 6 bis rue du Val d\'Osne. Appelez le 07 68 07 72 19 : nous fixons un rendez-vous, souvent dans la journée ou le lendemain.' }),
  // ── Essonne, Seine-et-Marne, Yvelines (11/11/2026) ──
  ville("Évry-Courcouronnes", "à Évry-Courcouronnes", 'evry-courcouronnes', [
    "À Évry-Courcouronnes, beaucoup de logements sont des appartements de grands ensembles, bien chauffés et parfois peu ventilés. Chaleur et humidité réunies, c'est le terrain idéal des acariens dans les matelas et les canapés.",
    "La ville accueille aussi l'université d'Évry et de nombreux étudiants en logement meublé. Un traitement du matelas à l'arrivée, puis une housse intégrale, protège les personnes allergiques.",
  ], ["Ris-Orangis", "Corbeil-Essonnes", "Lisses", "Bondoufle"],
  { q: "Mon enfant tousse la nuit : les acariens peuvent-ils en être la cause ?", a: "Les acariens sont une cause fréquente d'allergie respiratoire, avec toux et nez bouché la nuit. Seul un médecin peut le confirmer. En parallèle, un traitement de la literie et de la chambre réduit fortement l'exposition." }, D91),
  ville("Corbeil-Essonnes", "à Corbeil-Essonnes", 'corbeil-essonnes', [
    "À Corbeil-Essonnes, les maisons anciennes près de la Seine et de l'Essonne sont parfois humides, avec des murs en pierre qui gardent la fraîcheur. Les acariens profitent de cette humidité dans la literie et les tapis.",
    "Nous traitons les matelas, oreillers, canapés et tapis à la vapeur sèche, et nous vous indiquons comment réduire l'humidité de la pièce.",
  ], ["Évry-Courcouronnes", "Saint-Germain-lès-Corbeil", "Villabé", "Le Coudray-Montceaux"],
  { q: "Ma maison est humide près de la rivière : que faire contre les acariens ?", a: "Aérez chaque jour, chauffez sans surchauffer (moins de 20 °C, selon Ameli) et visez une humidité entre 40 et 60 %. Un déshumidificateur aide dans les pièces les plus humides. Le traitement de la literie fait le reste." }, D91),
  ville("Massy", "à Massy", 'massy', [
    "À Massy, les appartements récents du quartier Atlantis sont très isolés et étanches. Sans aération régulière, l'humidité de la cuisine, des douches et du linge reste à l'intérieur et nourrit les acariens.",
    "Dans les pavillons, ce sont plutôt les chambres d'enfants avec moquette et peluches qui concentrent les acariens. Nous traitons literie, textiles et moquettes.",
  ], ["Palaiseau", "Antony", "Wissous", "Chilly-Mazarin"],
  { q: "Un logement bien isolé a-t-il plus d'acariens ?", a: "Il peut en avoir plus s'il est mal aéré, car l'humidité reste piégée. Vérifiez que la VMC fonctionne et ouvrez les fenêtres quelques minutes chaque jour, même en hiver." }, D91),
  ville("Savigny-sur-Orge", "à Savigny-sur-Orge", 'savigny-sur-orge', [
    "À Savigny-sur-Orge, les pavillons ont souvent une chambre au rez-de-jardin ou au sous-sol, plus fraîche et plus humide. C'est là que les acariens se développent le plus dans les matelas.",
    "Nous traitons la literie et les textiles à la vapeur sèche, et vous conseillons sur l'aération et le chauffage de ces pièces.",
  ], ["Viry-Châtillon", "Morsang-sur-Orge", "Juvisy-sur-Orge", "Épinay-sur-Orge"],
  { q: "La vapeur sèche mouille-t-elle le matelas ?", a: "Non. La vapeur sèche contient très peu d'eau et sort à haute température. Elle tue les acariens en surface et en profondeur sans détremper le matelas, qui sèche en peu de temps." }, D91),
  ville("Palaiseau", "à Palaiseau", 'palaiseau', [
    "À Palaiseau, étudiants et chercheurs du plateau de Saclay louent souvent des logements meublés. Un matelas qui a déjà servi peut contenir beaucoup d'acariens : le traiter à l'arrivée est utile pour les personnes allergiques.",
    "Dans la vallée de l'Yvette, les maisons des coteaux boisés sont parfois humides. La literie et les canapés y demandent une attention particulière.",
  ], ["Massy", "Orsay", "Igny", "Villebon-sur-Yvette"],
  { q: "Faut-il traiter un matelas de location meublée ?", a: "Si vous êtes allergique, oui. Un traitement à la vapeur sèche ou en cryogénie, puis une housse anti-acariens intégrale, vous protège sans changer le matelas." }, D91),
  ville("Athis-Mons", "à Athis-Mons", 'athis-mons', [
    "À Athis-Mons, nous traitons aussi bien des maisons du coteau, parfois anciennes et humides, que des appartements de résidences bien chauffés. Les acariens se plaisent dans les deux.",
    "Pour les hôtels et meublés de courte durée proches de l'aéroport, un traitement régulier des matelas et des canapés améliore le confort des clients allergiques.",
  ], ["Paray-Vieille-Poste", "Juvisy-sur-Orge", "Morangis", "Ablon-sur-Seine"],
  { q: "Traitez-vous les literies d'hôtel contre les acariens ?", a: "Oui. Nous traitons matelas, oreillers, têtes de lit en tissu et fauteuils, chambre par chambre, entre deux séjours. Le traitement à la vapeur sèche permet de relouer rapidement." }, D91),
  ville("Sainte-Geneviève-des-Bois", "à Sainte-Geneviève-des-Bois", 'sainte-genevieve-des-bois', [
    "À Sainte-Geneviève-des-Bois, les familles vivent souvent en pavillon, avec moquette dans les chambres et canapés en tissu au salon. Ce sont les principaux réservoirs d'acariens de la maison.",
    "Nous traitons literie, canapés, moquettes et tapis, et vous aidons à choisir des gestes simples : lavage à 60 °C, housses, aération.",
  ], ["Saint-Michel-sur-Orge", "Fleury-Mérogis", "Morsang-sur-Orge", "Villemoisson-sur-Orge"],
  { q: "Faut-il enlever la moquette contre les acariens ?", a: "Ce n'est pas obligatoire, mais un sol dur se nettoie mieux. Si vous gardez la moquette, aspirez-la souvent avec un filtre HEPA et faites-la traiter à la vapeur sèche." }, D91),
  ville("Vigneux-sur-Seine", "à Vigneux-sur-Seine", 'vigneux-sur-seine', [
    "À Vigneux-sur-Seine, la proximité de la Seine et des lacs peut rendre l'air plus humide, surtout dans les rez-de-chaussée. Les acariens y prolifèrent dans les matelas et les canapés.",
    "Dans les appartements, le séchage du linge à l'intérieur augmente encore l'humidité. Nous traitons la literie et vous conseillons sur l'aération.",
  ], ["Draveil", "Montgeron", "Athis-Mons", "Juvisy-sur-Orge"],
  { q: "Sécher le linge dans l'appartement favorise-t-il les acariens ?", a: "Oui, il fait monter l'humidité de la pièce. Si vous n'avez pas d'autre solution, séchez-le dans une pièce aérée, loin des chambres, et ouvrez la fenêtre." }, D91),
  ville("Ris-Orangis", "à Ris-Orangis", 'ris-orangis', [
    "À Ris-Orangis, les logements récents des bords de Seine sont bien isolés, ce qui demande une aération régulière. Dans les pavillons proches des bois, ce sont les chambres plus fraîches qui sont concernées.",
    "Nous traitons la literie, les canapés et les tapis à la vapeur sèche, en cryogénie ou à l'acaricide selon le cas.",
  ], ["Évry-Courcouronnes", "Grigny", "Draveil", "Bondoufle"],
  { q: "Vapeur sèche, cryogénie ou acaricide : que choisir ?", a: "La vapeur sèche et la cryogénie n'utilisent aucun insecticide et conviennent à la literie et aux textiles. L'acaricide est utile pour les grandes surfaces et les infestations importantes. Le technicien vous conseille selon votre logement." }, D91),
  ville("Viry-Châtillon", "à Viry-Châtillon", 'viry-chatillon', [
    "À Viry-Châtillon, entre les lacs, l'Orge et la Seine, l'humidité de l'air est souvent élevée. Les acariens profitent des chambres peu aérées et de la literie ancienne.",
    "Nous traitons matelas, oreillers, canapés et peluches, puis vous expliquons comment garder une humidité raisonnable dans les chambres.",
  ], ["Grigny", "Savigny-sur-Orge", "Juvisy-sur-Orge", "Morsang-sur-Orge"],
  { q: "Les peluches des enfants contiennent-elles des acariens ?", a: "Oui, beaucoup. Lavez-les à 60 °C ou placez-les 24 heures au congélateur, puis lavez-les pour éliminer les acariens morts et leurs déjections. Limitez leur nombre dans le lit." }, D91),
  ville("Meaux", "à Meaux", 'meaux', [
    "À Meaux, les maisons anciennes du centre et des bords de Marne sont parfois humides, avec des murs épais qui gardent la fraîcheur. Les acariens s'y développent dans la literie et les tapis.",
    "Dans les appartements des grands quartiers, bien chauffés, ce sont surtout les matelas et les canapés qui sont concernés. Nous traitons ces textiles et donnons des conseils d'aération.",
  ], ["Trilport", "Nanteuil-lès-Meaux", "Chauconin-Neufmontiers", "Mareuil-lès-Meaux"],
  { q: "Quelle température dans la chambre contre les acariens ?", a: "En dessous de 20 °C : Ameli conseille de ne pas surchauffer les pièces de vie et situe la température idéale entre 18 °C et 22 °C selon les pièces. Une chambre trop chauffée et peu aérée favorise les acariens. Aérez au moins 10 minutes par jour, même en hiver." }, D77),
  ville("Chelles", "à Chelles", 'chelles', [
    "À Chelles, les pavillons des bords de Marne et les maisons anciennes peuvent souffrir d'humidité, surtout au rez-de-chaussée. Les acariens y prolifèrent dans les matelas et les canapés.",
    "Nous traitons literie et textiles à la vapeur sèche, et vous indiquons comment repérer et réduire l'humidité de la maison.",
  ], ["Vaires-sur-Marne", "Gagny", "Montfermeil", "Brou-sur-Chantereine"],
  { q: "Comment savoir si mon logement est trop humide ?", a: "Un hygromètre, vendu en magasin de bricolage, indique le taux d'humidité. Au-delà de 60 % de façon durable, les acariens se développent mieux. Buée sur les vitres et odeur de renfermé sont aussi des signes." }, D77),
  ville("Melun", "à Melun", 'melun', [
    "À Melun, les immeubles anciens du centre et de l'île Saint-Étienne ont des appartements avec moquettes et tentures, qui retiennent les acariens. Les résidences plus récentes sont, elles, parfois mal ventilées.",
    "Nous traitons matelas, canapés, moquettes et rideaux, et vous conseillons pour limiter le retour des acariens.",
  ], ["Dammarie-lès-Lys", "Le Mée-sur-Seine", "Vaux-le-Pénil", "Rubelles"],
  { q: "Les rideaux contiennent-ils des acariens ?", a: "Oui, surtout les rideaux épais et les voilages qui touchent le sol. Lavez-les régulièrement à la température indiquée, ou faites-les traiter à la vapeur sèche avec le reste du logement." }, D77),
  ville("Pontault-Combault", "à Pontault-Combault", 'pontault-combault', [
    "À Pontault-Combault, les maisons en lisière des bois peuvent être plus humides, surtout en automne et en hiver. Les acariens se développent alors dans la literie et les canapés.",
    "Nous traitons la maison pièce par pièce, en commençant par les chambres, puis le salon et les tapis.",
  ], ["Roissy-en-Brie", "Émerainville", "Ozoir-la-Ferrière", "Le Plessis-Trévise"],
  { q: "Les animaux de compagnie favorisent-ils les acariens ?", a: "Leurs squames nourrissent les acariens, surtout si l'animal dort sur le canapé ou le lit. Lavez souvent son panier et ses couvertures, et faites traiter les textiles qu'il fréquente." }, D77),
  ville("Savigny-le-Temple", "à Savigny-le-Temple", 'savigny-le-temple', [
    "À Savigny-le-Temple, les maisons récentes des lotissements sont bien isolées et chauffées. Sans aération quotidienne, l'humidité reste dans les chambres et favorise les acariens.",
    "Pour les enfants allergiques, nous traitons en priorité la chambre : matelas, oreillers, peluches et tapis.",
  ], ["Cesson", "Nandy", "Vert-Saint-Denis", "Saint-Pierre-du-Perray"],
  { q: "Une housse anti-acariens est-elle utile ?", a: "Oui, une housse intégrale qui entoure tout le matelas et l'oreiller limite le contact avec les acariens. Elle complète le traitement, sans le remplacer." }, D77),
  ville("Bussy-Saint-Georges", "à Bussy-Saint-Georges", 'bussy-saint-georges', [
    "À Bussy-Saint-Georges, les logements récents sont isolés et équipés de VMC. Quand la ventilation est encrassée ou coupée, l'humidité monte et les acariens se développent.",
    "Nous traitons la literie et les textiles, et vous rappelons les gestes utiles : nettoyer les bouches de VMC, aérer, laver le linge de lit à 60 °C.",
  ], ["Bussy-Saint-Martin", "Collégien", "Montévrain", "Jossigny"],
  { q: "La VMC joue-t-elle un rôle contre les acariens ?", a: "Oui. Elle évacue l'humidité. Des bouches encrassées ou une VMC arrêtée laissent l'humidité monter. Nettoyez les bouches régulièrement et ne les bouchez jamais." }, D77),
  ville("Champs-sur-Marne", "à Champs-sur-Marne", 'champs-sur-marne', [
    "À Champs-sur-Marne, les étudiants de la Cité Descartes occupent souvent des chambres meublées dont le matelas a déjà servi. Pour les allergiques, un traitement à l'arrivée est utile.",
    "Dans les pavillons proches des bords de Marne, l'humidité peut être plus élevée au rez-de-chaussée. La literie et les canapés y sont traités en priorité.",
  ], ["Noisiel", "Torcy", "Noisy-le-Grand", "Émerainville"],
  { q: "Combien de temps dure un traitement anti-acariens ?", a: "Pour un appartement, comptez en général une à deux heures selon le nombre de matelas et de canapés. Avec la vapeur sèche, vous pouvez utiliser la literie le soir même." }, D77),
  ville("Villeparisis", "à Villeparisis", 'villeparisis', [
    "À Villeparisis, les pavillons avec sous-sol ou rez-de-jardin ont parfois des chambres plus humides. C'est là que les acariens sont les plus nombreux.",
    "Nous traitons matelas, canapés et tapis, et vous conseillons pour assainir les pièces les plus humides.",
  ], ["Mitry-Mory", "Claye-Souilly", "Vaujours", "Courtry"],
  { q: "Faut-il changer son matelas à cause des acariens ?", a: "Pas forcément. Un traitement en profondeur, puis une housse intégrale, suffit souvent. Un matelas très ancien et abîmé peut en revanche mériter d'être remplacé." }, D77),
  ville("Dammarie-lès-Lys", "à Dammarie-lès-Lys", 'dammarie-les-lys', [
    "À Dammarie-lès-Lys, la proximité de la Seine et de la forêt peut rendre certaines maisons plus humides, surtout en automne. Les acariens s'y développent dans la literie.",
    "Dans les appartements de la Plaine du Lys, bien chauffés, une aération régulière et un traitement des textiles réduisent nettement les acariens.",
  ], ["Melun", "Le Mée-sur-Seine", "Boissise-le-Roi", "Chartrettes"],
  { q: "Les acariens disparaissent-ils en hiver ?", a: "Non. Dans un logement chauffé, ils vivent toute l'année. Ils sont souvent plus nombreux à l'automne, quand on chauffe et qu'on aère moins." }, D77),
  ville("Combs-la-Ville", "à Combs-la-Ville", 'combs-la-ville', [
    "À Combs-la-Ville, les maisons proches de l'Yerres sont parfois humides, surtout au rez-de-chaussée. Les acariens profitent de cette humidité dans les matelas et les canapés.",
    "Nous traitons literie et textiles à la vapeur sèche ou en cryogénie, puis vous conseillons pour garder une humidité raisonnable.",
  ], ["Moissy-Cramayel", "Quincy-sous-Sénart", "Brie-Comte-Robert", "Lieusaint"],
  { q: "La cryogénie est-elle adaptée aux canapés ?", a: "Oui. La neige carbonique tue les acariens par le froid, sans eau ni insecticide, ce qui convient aux tissus fragiles et aux canapés. Le technicien vérifie le tissu avant de traiter." }, D77),
  ville("Versailles", "à Versailles", 'versailles', [
    "À Versailles, les appartements anciens ont souvent des tapis, des tentures, des fauteuils et des canapés en tissu, où les acariens s'accumulent au fil des années.",
    "Nous traitons ces textiles avec soin, à la vapeur sèche ou en cryogénie selon les matières, sans abîmer les tissus anciens.",
  ], ["Le Chesnay-Rocquencourt", "Viroflay", "Saint-Cyr-l'École", "Buc"],
  { q: "Pouvez-vous traiter des fauteuils anciens contre les acariens ?", a: "Oui. Pour les tissus anciens ou fragiles, la cryogénie est souvent préférable, car elle n'apporte ni chaleur ni humidité. Le technicien teste d'abord une zone discrète." }, D78),
  ville("Sartrouville", "à Sartrouville", 'sartrouville', [
    "À Sartrouville, les pavillons des bords de Seine peuvent être plus humides, et les chambres au rez-de-jardin plus fraîches. Les acariens s'y développent dans la literie.",
    "Dans les résidences du Plateau, ce sont surtout les chambres d'enfants et les canapés qui demandent un traitement.",
  ], ["Houilles", "Montesson", "Maisons-Laffitte", "Cormeilles-en-Parisis"],
  { q: "À quelle fréquence laver le linge de lit ?", a: "Chaque semaine, à 60 °C si le tissu le permet. Les couettes et oreillers se lavent plus rarement, mais régulièrement, ou se traitent à la vapeur sèche." }, D78),
  ville("Saint-Germain-en-Laye", "à Saint-Germain-en-Laye", 'saint-germain-en-laye', [
    "À Saint-Germain-en-Laye, les maisons en lisière de forêt sont parfois humides, surtout en automne. Les acariens se plaisent dans la literie et les textiles de ces maisons.",
    "Dans les appartements anciens du centre, tapis et canapés en tissu concentrent les acariens. Nous les traitons avec la literie.",
  ], ["Le Pecq", "Chambourcy", "Mareil-Marly", "Poissy"],
  { q: "Les acariens sont-ils visibles à l'œil nu ?", a: "Non, ils mesurent moins d'un demi-millimètre. On les repère par leurs effets : allergies, nez bouché, toux la nuit ou au réveil, yeux qui grattent." }, D78),
  ville("Mantes-la-Jolie", "à Mantes-la-Jolie", 'mantes-la-jolie', [
    "À Mantes-la-Jolie, dans les appartements des résidences comme dans les maisons du centre ancien, l'humidité et le chauffage favorisent les acariens dans la literie.",
    "Nous traitons matelas, oreillers et canapés, et vous indiquons les gestes simples qui limitent leur retour.",
  ], ["Mantes-la-Ville", "Buchelay", "Limay", "Magnanville"],
  { q: "Les plantes vertes favorisent-elles les acariens ?", a: "Beaucoup de plantes dans une chambre augmentent l'humidité. Mieux vaut les placer dans les pièces de vie et garder la chambre la plus sèche et aérée possible." }, D78),
  ville("Poissy", "à Poissy", 'poissy', [
    "À Poissy, les maisons proches de la Seine et les rez-de-chaussée peuvent être humides. Les acariens y sont plus nombreux dans les matelas et les canapés.",
    "Nous traitons la literie, les canapés et les tapis, en commençant par la chambre des personnes allergiques.",
  ], ["Saint-Germain-en-Laye", "Carrières-sous-Poissy", "Villennes-sur-Seine", "Orgeval"],
  { q: "L'aspirateur suffit-il contre les acariens ?", a: "Il retire une partie des acariens et de leurs déjections, surtout avec un filtre HEPA, mais pas ceux qui vivent au cœur du matelas. Le traitement en profondeur reste nécessaire." }, D78),
  ville("Conflans-Sainte-Honorine", "à Conflans-Sainte-Honorine", 'conflans-sainte-honorine', [
    "À Conflans-Sainte-Honorine, les maisons proches de la Seine et de l'Oise, comme les péniches-logements, connaissent une humidité plus élevée. Les acariens y prolifèrent dans la literie.",
    "Sur les bateaux, les matelas et banquettes sont souvent en mousse et peu aérés : un traitement à la vapeur sèche et une bonne ventilation font la différence.",
  ], ["Andrésy", "Maurecourt", "Herblay-sur-Seine", "Achères"],
  { q: "Traitez-vous la literie d'une péniche ?", a: "Oui. Nous traitons matelas, banquettes et coussins à bord, à la vapeur sèche. Une bonne ventilation de la cabine limite ensuite l'humidité." }, D78),
  ville("Trappes", "à Trappes", 'trappes', [
    "À Trappes, dans les appartements bien chauffés des résidences, les acariens se développent dans les matelas et les canapés, surtout si les pièces sont peu aérées.",
    "Nous traitons la literie et les textiles, et vous aidons à repérer les sources d'humidité (linge qui sèche, ventilation bouchée).",
  ], ["Élancourt", "Montigny-le-Bretonneux", "Plaisir", "La Verrière"],
  { q: "Les acariens viennent-ils d'un défaut du logement ?", a: "Ils sont présents dans tous les logements. Mais une humidité excessive, due à une infiltration ou une ventilation hors service, les fait proliférer. Signalez ce type de défaut à votre bailleur." }, D78),
  ville("Les Mureaux", "aux Mureaux", 'les-mureaux', [
    "Aux Mureaux, les logements proches de la Seine et les rez-de-chaussée peuvent être plus humides. La literie et les canapés y accueillent beaucoup d'acariens.",
    "Pour les familles avec enfants allergiques, nous traitons en priorité les chambres et donnons des conseils adaptés.",
  ], ["Meulan-en-Yvelines", "Ecquevilly", "Verneuil-sur-Seine", "Bouafle"],
  { q: "Le traitement est-il possible avec un bébé à la maison ?", a: "Oui. La vapeur sèche et la cryogénie n'utilisent aucun insecticide. Le lit et la chambre du bébé peuvent être traités, et utilisés une fois secs et aérés." }, D78),
  ville("Houilles", "à Houilles", 'houilles', [
    "À Houilles, les maisons en meulière ont des murs épais qui peuvent garder l'humidité, surtout au rez-de-chaussée et au sous-sol. Les acariens s'y développent dans la literie.",
    "Nous traitons matelas, canapés et tapis, et vous conseillons pour assainir les pièces les plus humides de la maison.",
  ], ["Sartrouville", "Carrières-sur-Seine", "Bezons", "Chatou"],
  { q: "Un déshumidificateur est-il utile contre les acariens ?", a: "Oui, dans une pièce qui reste au-dessus de 60 % d'humidité. Il aide à revenir entre 40 et 60 %, la fourchette conseillée par l'Assurance maladie." }, D78),
  ville("Montigny-le-Bretonneux", "à Montigny-le-Bretonneux", 'montigny-le-bretonneux', [
    "À Montigny-le-Bretonneux, les maisons de ville et les appartements sont bien isolés et chauffés. Sans aération régulière, l'humidité reste dans les chambres et les acariens prolifèrent.",
    "Nous traitons la literie et les textiles de toute la maison, et vous rappelons les gestes simples d'entretien.",
  ], ["Guyancourt", "Voisins-le-Bretonneux", "Trappes", "Élancourt"],
  { q: "Faut-il traiter toute la maison ou seulement les chambres ?", a: "Les chambres d'abord, car on y passe le plus de temps. Les canapés, fauteuils et tapis du salon sont aussi des réservoirs : on les traite si la personne allergique les utilise beaucoup." }, D78),
]

export function getVilleAcariens(slug: string) {
  return VILLES_ACARIENS.find((x) => x.slug === slug)
}
