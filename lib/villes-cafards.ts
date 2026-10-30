// Pages « Cafards à [ville] » (/cafards/[ville]) : 9 villes du Val-de-Marne.
// Cocon : pilier /services/cafards-blattes, guides du blog, pages communes du 94.
// Toutes les méthodes : gel appât, insecticide, vapeur sèche, cryogénie, protocole en 2 passages, prévention.
// Règles CLAUDE.md : pas de chiffre inventé, pas de tiret long, pas de « naturel », « bio », « écologique », « sans danger ».

import type { Ville, VilleServiceConfig } from '@/components/VilleServicePage'

export const GUIDES_CAFARDS: Record<string, string> = {
  'gel-anti-cafard-ne-marche-pas': 'Gel anti-cafard inefficace : 5 raisons',
  'restaurant-plan-lutte-nuisibles': 'Plan de lutte nuisibles en restaurant',
}

export const CONFIG_CAFARDS: VilleServiceConfig = {
  basePath: '/cafards',
  titre: 'Cafards',
  serviceType: 'Traitement des cafards et blattes',
  pilier: { href: '/services/cafards-blattes', label: 'Cafards et blattes', lien: 'notre traitement des cafards et blattes en Île-de-France' },
  enBref: [
    'Allo Nuisible IDF traite les cafards et blattes (blatte germanique, blatte orientale) dans les appartements, maisons, commerces et restaurants.',
    'Méthodes : gel appât professionnel, insecticide ciblé à effet rémanent, et sans produit : vapeur sèche et cryogénie.',
    'Protocole en 2 passages pour éliminer les adultes puis les jeunes éclos des oothèques.',
    'Techniciens certifiés Certibiocide, intervention possible le jour même, 7j/7.',
    'Devis gratuit, garantie 1 an, attestation pour les professionnels.',
  ],
  cachettes: {
    titre: 'Où ils se cachent',
    items: [
      'Derrière le réfrigérateur et le four',
      'Sous l\'évier et autour du lave-vaisselle',
      'Gaines techniques et colonnes d\'eau',
      'Joints de carrelage et plinthes',
      'Moteurs d\'électroménager',
      'Cartons, caves et sous-sols humides',
    ],
    signes: 'Signes fréquents : cafards qui fuient à la lumière la nuit, petites crottes noires comme du poivre moulu, oothèques brunes, odeur désagréable dans les placards.',
  },
  methodes: [
    { titre: 'Gel appât professionnel', tag: 'Traitement de fond', texte: 'Posé en petites gouttes dans les zones de passage, il est consommé par les cafards qui le ramènent dans leurs cachettes et contaminent le reste de la colonie.', href: '/blog/gel-anti-cafard-ne-marche-pas' },
    { titre: 'Insecticide professionnel', tag: 'Traitement choc', texte: 'Pulvérisation ciblée à effet rémanent sur les plinthes, les gaines et l\'arrière des meubles, pour les infestations importantes. Réservé aux techniciens certifiés Certibiocide.' },
    { titre: 'Vapeur sèche', tag: 'Sans produit', texte: 'Vapeur à très haute température, très peu humide, qui détruit les cafards et leurs œufs dans les joints, derrière l\'électroménager et dans les recoins.' },
    { titre: 'Cryogénie', tag: 'Sans produit', texte: 'Neige carbonique à environ −78 °C, sèche et précise, pour les zones où l\'on veut éviter l\'humidité et tout produit, comme près des appareils électriques.' },
  ],
  encadre: {
    titre: 'Prévenir le retour des cafards',
    items: [
      'Ne laissez ni nourriture ni vaisselle sale la nuit, fermez les poubelles.',
      'Réparez les fuites : les cafards ont besoin d\'eau.',
      'Videz et sortez vite les cartons de livraison.',
      'Bouchez les passages de tuyaux sous l\'évier et derrière l\'électroménager.',
      'N\'utilisez pas d\'aérosol en même temps que le gel : il le rend moins efficace.',
    ],
  },
  sections: [
    {
      titre: 'Quelle blatte avez-vous ?',
      paras: [
        "Le mot « cafard » regroupe plusieurs espèces de blattes. Les reconnaître n'est pas un détail : elles ne vivent pas aux mêmes endroits, et le traitement se place là où elles se cachent. En logement, deux espèces représentent l'essentiel des cas : la **blatte germanique** et la **blatte orientale**.",
      ],
      table: {
        head: ['Espèce', 'À quoi elle ressemble', 'Où on la trouve'],
        rows: [
          ['Blatte germanique', 'Petite, brun clair, deux bandes sombres sur le thorax', 'Cuisines, salles de bain, logements et commerces chauffés'],
          ['Blatte orientale', 'Plus grande, brun foncé à noir, luisante', 'Caves, sous-sols, vides sanitaires, lieux frais et humides'],
          ['Blatte américaine', 'Grande, brun rougeâtre', 'Chaufferies, réseaux, locaux chauffés (plus rare en logement)'],
          ['Blatte rayée', 'Petite, bandes claires sur les ailes', 'Pièces sèches et chaudes, meubles, appareils électriques'],
        ],
      },
    },
    {
      titre: 'Pourquoi les cafards s\'installent chez vous',
      paras: [
        "Les cafards cherchent trois choses : **la chaleur, l'eau et la nourriture**. Une cuisine leur offre les trois. Ils arrivent par les gaines et les colonnes d'eau en immeuble, par les canalisations, dans des cartons de livraison, des sacs de courses ou des appareils d'occasion.",
        "Ils sont nocturnes et passent la journée cachés dans des fentes étroites. Quand on en voit un en plein jour, c'est souvent que la colonie est déjà bien installée. Les femelles portent leurs œufs dans une **oothèque**, une petite capsule brune qui protège les œufs jusqu'à l'éclosion : c'est pour cela qu'un seul traitement ne suffit pas.",
      ],
    },
    {
      titre: 'Les risques pour votre santé et votre logement',
      paras: [
        "Les cafards circulent dans les canalisations, les poubelles et les recoins sales, puis sur les plans de travail et la nourriture. Ils peuvent ainsi **transporter des bactéries** et contaminer les aliments. Leurs déjections et leurs mues contiennent aussi des **allergènes** qui peuvent aggraver les allergies et l'asthme, notamment chez les enfants.",
        "Pour un restaurant ou un commerce alimentaire, des cafards visibles exposent à une fermeture administrative lors d'un contrôle sanitaire. Voir notre guide sur [le plan de lutte contre les nuisibles en restaurant](/blog/restaurant-plan-lutte-nuisibles).",
      ],
    },
    {
      titre: 'Pourquoi les produits du commerce échouent',
      paras: [
        "Les bombes insecticides tuent les cafards visibles, mais pas ceux cachés dans les gaines ni les œufs protégés par l'oothèque. Elles font fuir la colonie vers d'autres pièces ou chez les voisins. Utilisées en même temps qu'un gel, elles le rendent moins appétent et moins efficace.",
        "Certaines populations de blattes germaniques ont aussi appris à éviter les appâts sucrés. Un professionnel varie les produits et les formulations. Nous expliquons tout cela dans notre article [gel anti-cafard inefficace : 5 raisons](/blog/gel-anti-cafard-ne-marche-pas).",
      ],
      liste: [
        "**À éviter** : aérosols, fumigènes vendus en magasin, mélange de plusieurs produits.",
        "**À faire** : ranger la nourriture, réparer les fuites, sortir les cartons, et faire intervenir un professionnel tôt.",
      ],
    },
  ],
  protocole: {
    titre: 'Notre intervention contre les cafards',
    etapes: [
      { titre: 'Diagnostic', texte: 'Identification de l\'espèce, repérage des foyers (cuisine, salle de bain, gaines, cave) et évaluation du niveau d\'infestation. Devis gratuit avant toute intervention.' },
      { titre: 'Préparation', texte: 'Nous vous indiquons quoi faire avant notre passage : vider les placards concernés, dégager l\'arrière de l\'électroménager, ranger la nourriture.' },
      { titre: 'Premier passage', texte: 'Gel appât professionnel dans les zones de passage, insecticide ciblé si l\'infestation l\'exige, vapeur sèche ou cryogénie dans les joints et les zones sensibles.' },
      { titre: 'Entre les deux passages', texte: 'Ne nettoyez pas le gel et n\'utilisez aucun aérosol. Voir encore quelques cafards pendant quelques jours est normal : le gel agit progressivement sur la colonie.' },
      { titre: 'Deuxième passage', texte: '2 à 3 semaines plus tard, pour éliminer les jeunes cafards éclos des oothèques et compléter le traitement.' },
      { titre: 'Suivi et garantie', texte: 'Garantie 1 an, attestation d\'intervention pour les professionnels et conseils pour éviter leur retour.' },
    ],
  },
  publics: {
    titre: 'Particuliers, copropriétés, professionnels',
    cartes: [
      { titre: 'Particuliers', texte: 'Appartement ou maison, avec enfants ou animaux : gel posé hors de portée, et vapeur sèche ou cryogénie pour traiter sans produit les zones sensibles.' },
      { titre: 'Copropriétés', texte: 'Les cafards passent par les gaines et les colonnes : nous coordonnons le traitement des logements concernés et des parties communes avec le syndic.' },
      { titre: 'Professionnels', texte: 'Restaurants, commerces alimentaires, hôtels : intervention rapide, attestation pour vos contrôles sanitaires et contrats de suivi.' },
    ],
  },
  guides: Object.entries(GUIDES_CAFARDS).map(([slug, label]) => ({ href: `/blog/${slug}`, label })),
  sources: [
    { label: 'Règlement (UE) n° 528/2012 sur les produits biocides (EUR-Lex)', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32012R0528' },
  ],
  maj: '2026-10-31',
  certification: 'Techniciens titulaires du Certibiocide, la certification obligatoire pour utiliser des insecticides professionnels.',
  autresTitre: 'Cafards dans d\'autres villes',
}

const FAQ_COMMUNE = (a: string) => [
  { q: `Combien coûte un traitement contre les cafards ${a} ?`, a: 'Le prix dépend de la surface, du type de lieu (appartement, maison, commerce) et de l\'infestation. Le protocole comprend 2 passages. Le devis est gratuit et vous le connaissez avant toute intervention.' },
  { q: 'Pourquoi faut-il 2 passages ?', a: 'Les oothèques, les cocons d\'œufs des cafards, résistent aux traitements. Le deuxième passage, 2 à 3 semaines plus tard, élimine les jeunes cafards éclos entre-temps.' },
  { q: 'Faut-il quitter le logement pendant le traitement ?', a: 'Non pour le gel appât, la vapeur sèche et la cryogénie. Si une pulvérisation d\'insecticide est nécessaire, le technicien vous indique combien de temps attendre avant de réoccuper les pièces traitées.' },
  { q: 'Est-ce normal de voir encore des cafards après le premier passage ?', a: 'Oui, pendant quelques jours. Le gel agit progressivement : les cafards le consomment, le ramènent dans leurs cachettes et la colonie diminue. Ne nettoyez pas le gel et n\'utilisez pas d\'aérosol.' },
  { q: 'Les cafards peuvent-ils revenir ?', a: 'Oui, s\'ils sont réintroduits (cartons, logement voisin, livraisons). La garantie 1 an couvre le traitement, et les conseils de prévention limitent fortement le risque.' },
]

export type VilleCafards = Ville & { title: string }

const ville = (nom: string, a: string, slug: string, contexte: string[], proches: string[], faq: { q: string; a: string }): VilleCafards => ({
  slug,
  nom,
  a,
  code: '94',
  departement: 'Val-de-Marne',
  zoneHref: `/zones/val-de-marne/${slug}`,
  title: `Cafards ${a} (94), intervention 7j/7`,
  description: `Cafards et blattes ${a} : gel professionnel, insecticide, vapeur sèche ou cryogénie, 2 passages inclus. Techniciens Certibiocide, devis gratuit.`,
  contexte,
  proches,
  faq: [faq, ...FAQ_COMMUNE(a)],
})

export const VILLES_CAFARDS: VilleCafards[] = [
  ville('Vincennes', 'à Vincennes', 'vincennes', [
    'Les immeubles anciens de Vincennes, avec leurs colonnes d\'eau, gaines techniques et commerces en rez-de-chaussée, offrent aux cafards chaleur, humidité et nourriture. La blatte germanique s\'installe surtout dans les cuisines et les salles de bain.',
    'En copropriété, les cafards circulent d\'un appartement à l\'autre par les gaines : traiter un seul logement suffit rarement. Nous pouvons coordonner l\'intervention avec le syndic.',
  ], ['Saint-Mandé', 'Fontenay-sous-Bois', 'Nogent-sur-Marne', 'Charenton-le-Pont'],
  { q: 'Les cafards peuvent-ils venir de chez le voisin ?', a: 'Oui. En immeuble, ils passent par les gaines, les colonnes d\'eau et les passages de tuyaux. Si un voisin est touché, un traitement coordonné des logements concernés donne de bien meilleurs résultats.' }),

  ville('Saint-Mandé', 'à Saint-Mandé', 'saint-mande', [
    'À Saint-Mandé, l\'habitat est surtout fait d\'immeubles et d\'appartements, avec des commerces de bouche au rez-de-chaussée. Les cafards s\'installent là où il fait chaud et humide : derrière le réfrigérateur, sous l\'évier, autour du lave-vaisselle.',
    'Un traitement en 2 passages, avec gel appât professionnel, vient à bout de la colonie. Pour les familles qui souhaitent limiter les produits, nous proposons aussi la vapeur sèche et la cryogénie.',
  ], ['Vincennes', 'Charenton-le-Pont', 'Saint-Maurice', 'Fontenay-sous-Bois'],
  { q: 'Les cafards sont-ils signe d\'un logement sale ?', a: 'Non. Ils cherchent surtout chaleur, humidité et accès à l\'eau, et arrivent souvent par les gaines, les cartons ou les livraisons. Un logement très propre peut être touché.' }),

  ville('Saint-Maurice', 'à Saint-Maurice', 'saint-maurice', [
    'Entre la Marne et le Bois de Vincennes, Saint-Maurice compte résidences, appartements et maisons. Dans les immeubles, la blatte germanique colonise les cuisines. Dans les caves et les sous-sols humides, on rencontre aussi la blatte orientale.',
    'Identifier l\'espèce compte : elles ne vivent pas aux mêmes endroits et ne se traitent pas tout à fait de la même façon. Le technicien adapte le protocole après inspection.',
  ], ['Charenton-le-Pont', 'Maisons-Alfort', 'Joinville-le-Pont', 'Saint-Maur-des-Fossés'],
  { q: 'Quelle différence entre blatte germanique et blatte orientale ?', a: 'La blatte germanique, petite et brun clair, vit dans les cuisines et salles de bain chaudes. La blatte orientale, plus grande et sombre, préfère les caves, sous-sols et lieux frais et humides.' }),

  ville('Charenton-le-Pont', 'à Charenton-le-Pont', 'charenton-le-pont', [
    'Commune dense aux portes de Paris, Charenton-le-Pont réunit immeubles, bureaux, restaurants et commerces. Les cafards y profitent des colonnes d\'eau, des gaines et des réserves des commerces de bouche.',
    'Pour les restaurants et commerces alimentaires, nous fournissons une attestation d\'intervention et proposons un suivi régulier. Pour les logements, protocole en 2 passages avec gel, insecticide, vapeur sèche ou cryogénie selon la situation.',
  ], ['Saint-Maurice', 'Maisons-Alfort', 'Ivry-sur-Seine', 'Saint-Mandé'],
  { q: 'Mon restaurant a des cafards : que faire avant un contrôle ?', a: 'Faites intervenir un professionnel au plus vite et conservez l\'attestation d\'intervention. Un plan de lutte suivi dans le temps est la meilleure preuve de sérieux lors d\'un contrôle sanitaire.' }),

  ville('Nogent-sur-Marne', 'à Nogent-sur-Marne', 'nogent-sur-marne', [
    'À Nogent-sur-Marne, entre résidences, maisons et commerces, les cafards s\'installent surtout dans les cuisines d\'immeuble et les réserves de commerces. Ils arrivent souvent par les gaines, les cartons de livraison ou un logement voisin.',
    'Le protocole en 2 passages élimine adultes et jeunes éclos. Gel appât, insecticide ciblé, vapeur sèche ou cryogénie : le technicien choisit selon les pièces et vos préférences.',
  ], ['Le Perreux-sur-Marne', 'Fontenay-sous-Bois', 'Joinville-le-Pont', 'Vincennes'],
  { q: 'Les cartons de livraison peuvent-ils apporter des cafards ?', a: 'Oui, les cafards et leurs oothèques se cachent dans les plis du carton. Videz vos cartons rapidement et sortez-les du logement, surtout s\'ils ont été stockés en entrepôt ou en cave.' }),

  ville('Le Perreux-sur-Marne', 'au Perreux-sur-Marne', 'le-perreux-sur-marne', [
    'Au Perreux-sur-Marne, commune surtout pavillonnaire, les cafards s\'installent dans les cuisines, les buanderies et parfois les sous-sols humides, où l\'on trouve la blatte orientale.',
    'Dans une maison, les points d\'entrée sont les canalisations, les bouches d\'aération et les cartons stockés au sous-sol. Nous traitons et vous conseillons pour fermer ces accès.',
  ], ['Nogent-sur-Marne', 'Bry-sur-Marne', 'Champigny-sur-Marne', 'Fontenay-sous-Bois'],
  { q: 'Pourquoi des cafards au sous-sol d\'une maison ?', a: 'Les sous-sols humides et frais attirent la blatte orientale, qui remonte parfois par les canalisations. Réparer les fuites, aérer et boucher les passages de tuyaux limite leur retour.' }),

  ville('Bry-sur-Marne', 'à Bry-sur-Marne', 'bry-sur-marne', [
    'À Bry-sur-Marne, les cafards s\'installent dans les cuisines et salles de bain des maisons comme des appartements. Ils arrivent souvent avec des cartons, des appareils d\'occasion ou par les canalisations.',
    'Pour les familles avec enfants, nous proposons de traiter les zones sensibles à la vapeur sèche ou par cryogénie, sans produit, en complément du gel appât posé uniquement dans les zones de passage.',
  ], ['Le Perreux-sur-Marne', 'Champigny-sur-Marne', 'Villiers-sur-Marne', 'Nogent-sur-Marne'],
  { q: 'Peut-on traiter les cafards avec des enfants à la maison ?', a: 'Oui. La vapeur sèche et la cryogénie n\'utilisent aucun produit. Le gel appât est posé en petites gouttes, hors de portée, uniquement dans les zones de passage des cafards.' }),

  ville('Sucy-en-Brie', 'à Sucy-en-Brie', 'sucy-en-brie', [
    'Sucy-en-Brie mêle centre ancien, pavillons, résidences et commerces. Dans les maisons anciennes, caves et sous-sols humides attirent la blatte orientale. Dans les résidences, la blatte germanique colonise les cuisines.',
    'Nous identifions l\'espèce, traitons en 2 passages et vous conseillons sur l\'humidité et les accès, pour éviter qu\'elles reviennent.',
  ], ['Boissy-Saint-Léger', 'Bonneuil-sur-Marne', 'Ormesson-sur-Marne', 'Noiseau', 'Chennevières-sur-Marne'],
  { q: 'Les bombes anti-cafards du commerce suffisent-elles ?', a: 'Rarement. Elles tuent les cafards visibles, mais pas la colonie cachée ni les œufs, et peuvent rendre le gel appât moins efficace. Voir notre article sur le gel anti-cafard.' }),

  ville('Santeny', 'à Santeny', 'santeny', [
    'À Santeny, les cafards sont moins fréquents qu\'en ville, mais ils arrivent avec des cartons, des meubles ou des appareils d\'occasion, et s\'installent dans les cuisines, buanderies et sous-sols humides.',
    'Plus on intervient tôt, plus le traitement est simple. Gel appât, insecticide ciblé, vapeur sèche ou cryogénie : nous proposons toutes les méthodes, avec 2 passages.',
  ], ['Villecresnes', 'Marolles-en-Brie', 'Mandres-les-Roses', 'Périgny'],
  { q: 'Comment savoir si j\'ai des cafards ?', a: 'Insectes qui fuient à la lumière la nuit, petites crottes noires comme du poivre moulu, oothèques brunes derrière les meubles, odeur désagréable dans les placards.' }),
]

export function getVilleCafards(slug: string) {
  return VILLES_CAFARDS.find((x) => x.slug === slug)
}
