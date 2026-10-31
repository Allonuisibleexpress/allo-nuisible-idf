// Pages « Acariens à [ville] » (/acariens/[ville]) : 15 villes du Val-de-Marne (31/10/2026).
// Méthodes confirmées par l'utilisateur : vapeur sèche, cryogénie, pulvérisation acaricide.
// Aucune promesse médicale. Conseils de prévention repris d'ameli.fr (source citée).
// Règles : pas de chiffre inventé, pas de tiret long, pas de « naturel », « bio », « écologique », « sans danger ».

import type { Ville, VilleServiceConfig } from '@/components/VilleServicePage'

const AMELI = 'https://www.ameli.fr/assure/sante/themes/allergie/vivre-allergique'

export const CONFIG_ACARIENS: VilleServiceConfig = {
  basePath: '/acariens',
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
  maj: '2026-10-31',
  certification: 'Techniciens titulaires du Certibiocide, la certification obligatoire pour utiliser des produits acaricides professionnels.',
  autresTitre: 'Acariens dans d\'autres villes',
}

const FAQ_COMMUNE = (a: string) => [
  { q: `Combien coûte un traitement anti-acariens ${a} ?`, a: 'À partir de 120 € TTC pour une chambre traitée à la vapeur sèche. Pour un logement complet, le prix est établi sur place, selon les pièces et les textiles. Le devis est gratuit.' },
  { q: 'Le traitement soigne-t-il une allergie ?', a: 'Non. Il réduit les acariens et leurs allergènes dans les textiles traités. Le suivi d\'une allergie se fait avec votre médecin ou un allergologue.' },
  { q: 'Faut-il quitter le logement ?', a: 'Non avec la vapeur sèche ou la cryogénie, qui n\'utilisent aucun produit. Après une pulvérisation acaricide, le technicien vous indique le temps d\'aération avant de réoccuper la pièce.' },
  { q: 'Les acariens reviennent-ils ?', a: 'Ils vivent dans tous les logements et peuvent se réinstaller. Humidité entre 40 et 60 %, aération quotidienne, housses intégrales et lavage de la literie à 60 °C, comme le conseille l\'Assurance maladie, aident à garder le résultat.' },
]

export type VilleAcariens = Ville & { title: string }

const ville = (nom: string, a: string, slug: string, contexte: [string, string], proches: string[], faq: { q: string; a: string }): VilleAcariens => {
  const titres = [`Traitement anti-acariens ${a} (94)`, `Acariens ${a} (94) : traitement`, `Acariens ${a}`]
  return {
    slug,
    nom,
    a,
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: `/zones/val-de-marne/${slug}`,
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
  ], ['Vincennes', 'Saint-Maurice', 'Charenton-le-Pont', 'Paris 12e'],
  { q: 'Les rideaux et tentures retiennent-ils les acariens ?', a: 'Oui, surtout s\'ils sont épais et rarement lavés. Lavez-les selon leur étiquette, ou faites-les traiter à la vapeur sèche ou en cryogénie. Pour une chambre de personne allergique, des rideaux légers et lavables sont plus faciles à entretenir.' }),
  ville('Alfortville', 'à Alfortville', 'alfortville', [
    'Alfortville, entre la Seine et la Marne, est une ville où l\'air peut être humide, surtout dans les logements bas et proches des quais. Or l\'humidité est le premier allié des acariens.',
    'Avant de traiter, nous regardons l\'humidité de la chambre : un hygromètre permet de vérifier qu\'elle reste dans la zone conseillée, et un déshumidificateur aide si elle est trop élevée.',
  ], ['Maisons-Alfort', 'Vitry-sur-Seine', 'Créteil', 'Ivry-sur-Seine'],
  { q: 'Quel taux d\'humidité viser contre les acariens ?', a: 'L\'Assurance maladie indique un taux d\'humidité idéal entre 40 et 60 %, avec une température entre 18 et 22 °C selon les pièces. Un hygromètre, peu coûteux, permet de le vérifier dans la chambre.' }),
  ville('Saint-Maurice', 'à Saint-Maurice', 'saint-maurice', [
    'Saint-Maurice est notre commune : notre siège est rue du Val d\'Osne. Entre la Marne et le Bois de Vincennes, maisons et copropriétés ont souvent des pièces exposées à l\'humidité.',
    'Nous intervenons rapidement pour traiter la literie, les canapés et les tapis, avec la méthode adaptée à chaque textile, et nous restons disponibles pour un contrôle.',
  ], ['Charenton-le-Pont', 'Maisons-Alfort', 'Joinville-le-Pont', 'Saint-Maur-des-Fossés'],
  { q: 'Pouvez-vous intervenir rapidement à Saint-Maurice ?', a: 'Oui, notre siège est au 6 bis rue du Val d\'Osne. Appelez le 07 68 07 72 19 : nous fixons un rendez-vous, souvent dans la journée ou le lendemain.' }),
]

export function getVilleAcariens(slug: string) {
  return VILLES_ACARIENS.find((x) => x.slug === slug)
}
