// Pages « Cafards à [ville] » (/cafards/[ville]) : 9 villes du Val-de-Marne.
// Cocon : pilier /services/cafards-blattes, guides du blog, pages communes du 94.
// Toutes les méthodes : gel appât, insecticide, vapeur sèche, cryogénie, protocole en 2 passages, prévention.
// Règles CLAUDE.md : pas de chiffre inventé, pas de tiret long, pas de « naturel », « bio », « écologique », « sans danger ».

import type { Ville, VilleServiceConfig } from '@/components/VilleServicePage'
import { ficheCafards } from '@/lib/fiche-nuisible'

export const GUIDES_CAFARDS: Record<string, string> = {
  'gel-anti-cafard-ne-marche-pas': 'Gel anti-cafard inefficace : 5 raisons',
  'restaurant-plan-lutte-nuisibles': 'Plan de lutte nuisibles en restaurant',
}

export const CONFIG_CAFARDS: VilleServiceConfig = {
  basePath: '/cafards',
  fiche: (v, vs) => ficheCafards(v, vs),
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

// Val-de-Marne par défaut ; Paris passe { code: '75', departement: 'Paris', zoneHref: '/zones/paris' }
type Dep = { code: string; departement: string; zoneHref: string }
const ville = (nom: string, a: string, slug: string, contexte: string[], proches: string[], faq: { q: string; a: string }, dep?: Dep): VilleCafards => ({
  slug,
  nom,
  a,
  code: dep?.code ?? '94',
  departement: dep?.departement ?? 'Val-de-Marne',
  zoneHref: dep?.zoneHref ?? `/zones/val-de-marne/${slug}`,
  title: `Cafards ${a} (${dep?.code ?? '94'}), intervention 7j/7`,
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

  ville('Maisons-Alfort', 'à Maisons-Alfort', 'maisons-alfort', [
    'Entre la Marne et la Seine, Maisons-Alfort mêle quartiers pavillonnaires, comme Charentonneau, et grands ensembles. Dans les immeubles, la blatte germanique colonise les cuisines ; dans les pavillons anciens, la blatte orientale préfère les caves et les sous-sols humides.',
    'Le traitement commence par l\'identification de l\'espèce. Gel appât professionnel dans les zones de passage, insecticide ciblé et vapeur sèche dans les recoins, en 2 passages pour atteindre les jeunes éclos entre-temps.',
    'Dans les pavillons des bords de Marne, pensez aux regards et aux siphons de sol du sous-sol : un siphon sec laisse passer les blattes depuis les canalisations. Remplir d\'eau les siphons peu utilisés est un geste simple et utile.',
  ], ['Saint-Maurice', 'Alfortville', 'Charenton-le-Pont', 'Créteil'],
  { q: 'Des cafards dans une maison avec sous-sol, est-ce fréquent ?', a: 'Oui, surtout la blatte orientale, qui aime les sous-sols frais et humides et remonte par les canalisations. Réparer les fuites, aérer et boucher les passages de tuyaux complète le traitement.' }),

  ville('Joinville-le-Pont', 'à Joinville-le-Pont', 'joinville-le-pont', [
    'À Joinville-le-Pont, au bord de la Marne, résidences récentes, petits immeubles et maisons se côtoient près des berges. Les cafards s\'installent dans les cuisines, les locaux poubelles et les gaines des résidences, et arrivent souvent avec des cartons ou un logement voisin.',
    'Dans une résidence, un traitement coordonné avec le syndic donne les meilleurs résultats. Pour un appartement isolé, gel appât, insecticide ciblé ou vapeur sèche, toujours en 2 passages.',
    'Les résidences récentes ne sont pas épargnées : les cafards voyagent dans les cartons de déménagement. Après une installation, déballez vite et sortez les cartons, plutôt que de les garder dans un placard ou à la cave.',
  ], ['Saint-Maurice', 'Saint-Maur-des-Fossés', 'Nogent-sur-Marne', 'Champigny-sur-Marne'],
  { q: 'Faut-il prévenir le syndic si j\'ai des cafards ?', a: 'C\'est conseillé. Les cafards passent par les gaines et les colonnes d\'eau : si plusieurs appartements sont touchés, un traitement des logements concernés et des parties communes évite qu\'ils reviennent.' }),

  ville('Paris 12e', 'à Paris 12e', 'paris-12', [
    'Dans le 12e arrondissement, des immeubles haussmanniens de Daumesnil aux résidences de Bercy, les cafards profitent des colonnes d\'eau, des vide-ordures et des commerces de bouche, nombreux autour du marché d\'Aligre et de la gare de Lyon.',
    'Restaurants, boulangeries et épiceries reçoivent une attestation d\'intervention et peuvent souscrire un suivi régulier. En appartement, protocole en 2 passages avec gel appât, insecticide ciblé, vapeur sèche ou cryogénie.',
    'Dans les immeubles haussmanniens, les anciennes cuisines donnent souvent sur une courette et un escalier de service : vérifiez les passages de tuyaux sous l\'évier et derrière les meubles hauts, les blattes y circulent d\'un étage à l\'autre.',
  ], ['Saint-Mandé', 'Charenton-le-Pont', 'Vincennes', 'Paris 11e'],
  { q: 'Mon immeuble a un vide-ordures, est-ce un risque ?', a: 'Oui, les vide-ordures et locaux poubelles offrent chaleur et nourriture aux cafards, qui remontent ensuite par les gaines. Un traitement du local et des appartements touchés, puis un nettoyage régulier du conduit, limitent le problème.' }, { code: '75', departement: 'Paris', zoneHref: '/zones/paris' }),

  ville('Alfortville', 'à Alfortville', 'alfortville', [
    'Alfortville, à la confluence de la Seine et de la Marne, est une commune dense, faite surtout d\'immeubles et de résidences. Les blattes germaniques passent d\'un logement à l\'autre par les gaines techniques, les colonnes d\'eau et les passages de canalisations.',
    'Dans les grands immeubles, nous pouvons traiter plusieurs appartements le même jour pour éviter que les cafards se déplacent chez le voisin. Gel appât, insecticide et vapeur sèche, en 2 passages.',
    'Dans les tours et grands immeubles, signaler vite la présence de cafards au gardien ou au bailleur permet de traiter les colonnes avant que toute la cage d\'escalier soit touchée.',
  ], ['Maisons-Alfort', 'Ivry-sur-Seine', 'Vitry-sur-Seine', 'Créteil'],
  { q: 'Pourquoi les cafards reviennent-ils après un traitement fait soi-même ?', a: 'Les bombes du commerce tuent les cafards visibles mais pas les oothèques, ni la colonie cachée dans les gaines. Elles dispersent même les insectes vers d\'autres pièces. Le gel professionnel, en 2 passages, atteint toute la colonie.' }),

  ville('Créteil', 'à Créteil', 'creteil', [
    'Préfecture du Val-de-Marne, Créteil réunit grands ensembles, résidences autour du lac, pavillons, hôpitaux, université et centre commercial. Dans les immeubles, les cafards circulent par les gaines et les vide-ordures ; dans les commerces, ils s\'installent dans les réserves.',
    'Particuliers, bailleurs et professionnels n\'ont pas les mêmes besoins : traitement d\'un appartement en 2 passages, intervention sur plusieurs logements d\'une résidence, ou suivi régulier avec attestation pour un commerce.',
    'Dans les résidences avec vide-ordures, le conduit et le local en bas d\'immeuble sont souvent le point de départ. Fermer les sacs, ne rien jeter en vrac et signaler un local sale au gestionnaire limite fortement les blattes.',
  ], ['Maisons-Alfort', 'Alfortville', 'Saint-Maur-des-Fossés', 'Bonneuil-sur-Marne'],
  { q: 'Le bailleur doit-il payer le traitement contre les cafards ?', a: 'Le logement doit être remis au locataire exempt de nuisibles. Si les cafards apparaissent en cours de bail, prévenez votre bailleur par écrit : quand l\'infestation touche plusieurs logements, le traitement est souvent organisé à l\'échelle de l\'immeuble. Renseignez-vous auprès de l\'ADIL du Val-de-Marne.' }),

  ville('Ivry-sur-Seine', 'à Ivry-sur-Seine', 'ivry-sur-seine', [
    'Ancienne ville industrielle au bord de la Seine, Ivry-sur-Seine mêle immeubles, résidences récentes, entrepôts et commerces. Les cafards y arrivent par les livraisons, les cartons stockés et les gaines des immeubles.',
    'Pour les entrepôts, restaurants et commerces alimentaires, nous mettons en place un suivi avec attestation. En logement, gel appât et insecticide ciblé, complétés par la vapeur sèche dans les recoins de la cuisine.',
    'Dans les lofts et logements aménagés dans d\'anciens locaux d\'activité, les gaines et les faux plafonds sont nombreux : le technicien les inspecte avec une lampe et un miroir pour repérer les colonies cachées.',
  ], ['Vitry-sur-Seine', 'Alfortville', 'Charenton-le-Pont', 'Le Kremlin-Bicêtre'],
  { q: 'Des cafards dans un entrepôt ou une réserve, que faire ?', a: 'Inspectez les cartons à la réception, stockez les marchandises surélevées et loin des murs, et faites poser un gel appât professionnel dans les zones chaudes (moteurs, compresseurs). Un suivi régulier détecte tôt une nouvelle colonie.' }),

  ville('Saint-Maur-des-Fossés', 'à Saint-Maur-des-Fossés', 'saint-maur-des-fosses', [
    'Dans la boucle de la Marne, Saint-Maur-des-Fossés est surtout pavillonnaire, avec des quartiers comme La Varenne, Le Parc ou Adamville, et des résidences près des gares. Dans les maisons, les cafards s\'installent dans les cuisines, les buanderies et les sous-sols humides.',
    'En maison, nous traitons les pièces touchées et vérifions les points d\'entrée : canalisations, bouches d\'aération, cartons stockés au sous-sol. Gel appât, insecticide ciblé ou vapeur sèche, en 2 passages.',
    'Les vérandas, buanderies et cuisines d\'été des maisons saint-mauriennes restent chaudes et humides : ce sont des refuges classiques pour les blattes, à inspecter en même temps que la cuisine principale.',
  ], ['Saint-Maurice', 'Joinville-le-Pont', 'Créteil', 'Champigny-sur-Marne'],
  { q: 'Un cafard isolé dans la maison, faut-il s\'inquiéter ?', a: 'Un cafard vu en journée signale souvent une colonie déjà installée, car ils sortent surtout la nuit. Vérifiez derrière le réfrigérateur, sous l\'évier et autour du lave-vaisselle : petites crottes noires et oothèques brunes confirment l\'infestation.' }),

  ville('Fontenay-sous-Bois', 'à Fontenay-sous-Bois', 'fontenay-sous-bois', [
    'En bordure du Bois de Vincennes, Fontenay-sous-Bois réunit immeubles, quartiers pavillonnaires et le pôle de bureaux du Val de Fontenay. Les cafards s\'installent dans les cuisines d\'appartement, les restaurants d\'entreprise et les locaux techniques.',
    'Pour les bureaux et restaurants, nous intervenons en dehors des heures d\'ouverture, avec attestation. Chez les particuliers, protocole en 2 passages, avec gel appât, insecticide ciblé, vapeur sèche ou cryogénie.',
    'Dans les cuisines collectives et les espaces de pause, les cafards se cachent dans les moteurs des réfrigérateurs, des distributeurs et des machines à café, où il fait chaud en permanence.',
  ], ['Vincennes', 'Nogent-sur-Marne', 'Montreuil', 'Saint-Mandé'],
  { q: 'Peut-on traiter des bureaux sans fermer ?', a: 'Oui. Le gel appât et la vapeur sèche peuvent être appliqués en dehors des heures de travail, sans gêner l\'activité. Si une pulvérisation est nécessaire, le technicien indique le temps d\'aération avant le retour des équipes.' }),

  ville('Vitry-sur-Seine', 'à Vitry-sur-Seine', 'vitry-sur-seine', [
    'Grande commune au bord de la Seine, Vitry-sur-Seine mêle grands ensembles, pavillons, zones d\'activité et commerces. Les cafards circulent dans les immeubles par les gaines et les vide-ordures, et s\'installent dans les réserves des commerces.',
    'Que ce soit un appartement, une résidence entière ou un local professionnel, le traitement se fait en 2 passages : gel appât professionnel, insecticide ciblé et vapeur sèche, selon les pièces et l\'infestation.',
    'Dans les grands ensembles, une intervention groupée sur plusieurs appartements d\'une même cage d\'escalier, organisée avec le bailleur, évite que les cafards fassent la navette entre voisins.',
  ], ['Ivry-sur-Seine', 'Alfortville', 'Choisy-le-Roi', 'Villejuif'],
  { q: 'Combien de temps pour se débarrasser des cafards ?', a: 'Il faut compter quelques semaines : le premier passage réduit fortement la colonie, le second, 2 à 3 semaines plus tard, élimine les jeunes éclos des oothèques. La garantie 1 an couvre le traitement.' }),
  // ── Essonne, Seine-et-Marne, Yvelines (11/11/2026) ──
  ville("Versailles", "à Versailles", 'versailles', [
    "À Versailles, les immeubles anciens du centre, avec leurs colonnes d'eau et leurs gaines, abritent souvent la blatte germanique dans les cuisines. Les restaurants et commerces de bouche autour du marché Notre-Dame sont aussi concernés.",
    "Nous traitons au gel professionnel dans les charnières, les fentes et derrière l'électroménager, avec un second passage pour les jeunes blattes sorties des oothèques.",
    'Dans les quartiers de Montreuil, Porchefontaine et Saint-Louis, beaucoup d’appartements anciens ont des cuisines étroites avec des placards en bois : leurs fentes et leurs charnières sont les cachettes préférées de la blatte germanique.',
  ], ["Le Chesnay-Rocquencourt", "Viroflay", "Saint-Cyr-l’École", "Buc"],
  { q: "Les restaurants de Versailles peuvent-ils avoir un contrat contre les cafards ?", a: "Oui : passages programmés, gel et contrôle des zones sensibles, rapport remis à chaque visite pour vos contrôles sanitaires." },
  { code: '78', departement: 'Yvelines', zoneHref: '/zones/yvelines' }),
  ville("Sartrouville", "à Sartrouville", 'sartrouville', [
    "Les grandes résidences de Sartrouville ont des vide-ordures, des locaux poubelles et des gaines communes où les cafards circulent d'un logement à l'autre.",
    "Quand plusieurs logements sont touchés, un traitement coordonné avec le bailleur est le seul moyen d'en venir à bout durablement.",
  ], ["Houilles", "Montesson", "Maisons-Laffitte", "Cormeilles-en-Parisis"],
  { q: "Pourquoi les cafards reviennent-ils dans mon immeuble à Sartrouville ?", a: "Ils circulent par les gaines et les vide-ordures. Si les voisins ne sont pas traités, ils reviennent : un traitement coordonné est nécessaire." },
  { code: '78', departement: 'Yvelines', zoneHref: '/zones/yvelines' }),
  ville("Saint-Germain-en-Laye", "à Saint-Germain-en-Laye", 'saint-germain-en-laye', [
    "Le centre de Saint-Germain-en-Laye compte de nombreux restaurants, boulangeries et épiceries dans des immeubles anciens : leurs cuisines et réserves sont des lieux où les blattes s'installent.",
    "Dans les appartements, la blatte germanique se cache derrière le réfrigérateur, sous l'évier et dans les charnières des placards. Le gel est appliqué exactement à ces endroits.",
  ], ["Le Pecq", "Chambourcy", "Mareil-Marly", "Poissy"],
  { q: "Le traitement des cafards est-il discret pour un commerce à Saint-Germain ?", a: "Oui : intervention en dehors des heures d'ouverture, gel invisible dans les fentes, et attestation pour vos contrôles." },
  { code: '78', departement: 'Yvelines', zoneHref: '/zones/yvelines' }),
  ville("Mantes-la-Jolie", "à Mantes-la-Jolie", 'mantes-la-jolie', [
    "Dans les tours du Val Fourré et des quartiers d'habitat collectif, les cafards se déplacent par les gaines et les vide-ordures. Une infestation peut toucher toute une colonne de logements.",
    "Nous travaillons avec les bailleurs pour traiter les logements concernés en même temps, avec un second passage indispensable contre les oothèques.",
  ], ["Mantes-la-Ville", "Buchelay", "Limay", "Magnanville"],
  { q: "Mon bailleur à Mantes doit-il traiter les cafards ?", a: "Si l'infestation vient de l'immeuble (gaines, vide-ordures), c'est au bailleur d'organiser un traitement coordonné. Prévenez-le par écrit." },
  { code: '78', departement: 'Yvelines', zoneHref: '/zones/yvelines' }),
  ville("Poissy", "à Poissy", 'poissy', [
    "Poissy compte des restaurants, des cantines d'entreprise et de nombreux logements collectifs. Les cuisines collectives et les réserves sont des lieux sensibles où les blattes se développent vite.",
    "Pour les professionnels, nous proposons un suivi régulier avec attestation ; pour les particuliers, un traitement en deux passages.",
  ], ["Saint-Germain-en-Laye", "Carrières-sous-Poissy", "Villennes-sur-Seine", "Orgeval"],
  { q: "Une cantine d'entreprise à Poissy peut-elle être traitée sans fermer ?", a: "Oui, en intervenant en dehors des services : le gel est déposé dans les fentes, hors des surfaces de préparation." },
  { code: '78', departement: 'Yvelines', zoneHref: '/zones/yvelines' }),
  ville("Conflans-Sainte-Honorine", "à Conflans-Sainte-Honorine", 'conflans-sainte-honorine', [
    "À Conflans-Sainte-Honorine, les immeubles anciens du centre et les résidences plus récentes peuvent abriter des blattes dans les cuisines et les salles de bains.",
    "Les commerces de bouche du centre et des quais demandent une vigilance particulière : nous intervenons en dehors des heures d'ouverture.",
  ], ["Andrésy", "Maurecourt", "Herblay-sur-Seine", "Achères"],
  { q: "Des cafards dans la salle de bain à Conflans : pourquoi ?", a: "Les blattes ont besoin d'eau : une fuite, un siphon peu utilisé ou un joint abîmé les attirent. Nous traitons et vous indiquons les fuites à reprendre." },
  { code: '78', departement: 'Yvelines', zoneHref: '/zones/yvelines' }),
  ville("Trappes", "à Trappes", 'trappes', [
    "Trappes compte beaucoup de logements collectifs avec vide-ordures et locaux poubelles : les cafards y trouvent chaleur et nourriture, puis remontent par les gaines.",
    "Nous traitons les logements touchés en coordination avec les bailleurs, et laissons une fiche de conseils pour éviter la réinfestation.",
  ], ["Élancourt", "Montigny-le-Bretonneux", "Plaisir", "La Verrière"],
  { q: "Comment éviter que les cafards reviennent à Trappes ?", a: "Ne laissez pas de vaisselle sale la nuit, fermez les poubelles, rebouchez les passages autour des tuyaux et respectez le second passage." },
  { code: '78', departement: 'Yvelines', zoneHref: '/zones/yvelines' }),
  ville("Les Mureaux", "aux Mureaux", 'les-mureaux', [
    "Aux Mureaux, les grandes résidences et leurs gaines communes facilitent la circulation des cafards entre logements. La blatte germanique s'installe surtout dans les cuisines.",
    "Nous traitons au gel, avec un insecticide ciblé dans les fentes si nécessaire, et un second passage deux à trois semaines plus tard.",
  ], ["Meulan-en-Yvelines", "Ecquevilly", "Verneuil-sur-Seine", "Bouafle"],
  { q: "Combien de passages faut-il contre les cafards aux Mureaux ?", a: "Deux passages, à deux ou trois semaines d'intervalle : le second élimine les jeunes blattes sorties des oothèques." },
  { code: '78', departement: 'Yvelines', zoneHref: '/zones/yvelines' }),
  ville("Houilles", "à Houilles", 'houilles', [
    "À Houilles, les cafards touchent surtout les petits immeubles et les commerces du centre, autour de la gare et de la rue Gambetta.",
    "Dans les pavillons, la blatte orientale, plus grosse et noire, peut remonter par les caves et les canalisations : le traitement vise alors le sous-sol.",
  ], ["Sartrouville", "Carrières-sur-Seine", "Bezons", "Chatou"],
  { q: "Des gros cafards noirs dans ma cave à Houilles : qu'est-ce que c'est ?", a: "Probablement la blatte orientale, qui aime l'humidité des caves et des canalisations. Le traitement vise le sous-sol et les passages vers la maison." },
  { code: '78', departement: 'Yvelines', zoneHref: '/zones/yvelines' }),
  ville("Montigny-le-Bretonneux", "à Montigny-le-Bretonneux", 'montigny-le-bretonneux', [
    "Montigny-le-Bretonneux compte de nombreux restaurants, des cantines d'entreprise et des résidences récentes. Les blattes s'installent dans les cuisines et les locaux techniques chauffés.",
    "Pour les professionnels, un suivi régulier avec attestation ; pour les particuliers, un traitement complet en deux passages.",
  ], ["Guyancourt", "Voisins-le-Bretonneux", "Trappes", "Élancourt"],
  { q: "Un logement neuf à Montigny peut-il avoir des cafards ?", a: "Oui : ils arrivent avec les cartons, les appareils d'occasion ou par les gaines depuis un logement voisin." },
  { code: '78', departement: 'Yvelines', zoneHref: '/zones/yvelines' }),
  ville("Évry-Courcouronnes", "à Évry-Courcouronnes", 'evry-courcouronnes', [
    "Évry-Courcouronnes compte de grands ensembles, des résidences étudiantes et de nombreux commerces autour de l'Agora. Les cafards y circulent par les gaines et les locaux poubelles.",
    "Nous traitons les logements, les cuisines partagées des résidences et les commerces, avec un second passage systématique.",
  ], ["Ris-Orangis", "Corbeil-Essonnes", "Lisses", "Bondoufle"],
  { q: "Une résidence étudiante d'Évry peut-elle être traitée contre les cafards ?", a: "Oui, chambre par chambre et dans les cuisines partagées, en lien avec le gestionnaire, avec attestation." },
  { code: '91', departement: 'Essonne', zoneHref: '/zones/essonne' }),
  ville("Corbeil-Essonnes", "à Corbeil-Essonnes", 'corbeil-essonnes', [
    "Corbeil-Essonnes compte des immeubles anciens dans le centre et de grandes résidences aux Tarterêts et à Montconseil. Les cafards s'y installent dans les cuisines et remontent par les gaines.",
    "Nous intervenons pour les familles et les bailleurs, avec un traitement au gel et un second passage contre les oothèques.",
  ], ["Évry-Courcouronnes", "Saint-Germain-lès-Corbeil", "Villabé", "Le Coudray-Montceaux"],
  { q: "Les bombes anti-cafards marchent-elles ?", a: "Non, elles font fuir les blattes dans les murs et chez les voisins sans détruire les oothèques. Un gel professionnel est bien plus efficace." },
  { code: '91', departement: 'Essonne', zoneHref: '/zones/essonne' }),
  ville("Massy", "à Massy", 'massy', [
    "Massy compte des grands ensembles, des quartiers récents et de nombreux restaurants autour des gares. Les cafards s'installent dans les cuisines et les locaux techniques.",
    "Pour les restaurants et hôtels, nous proposons un plan de lutte avec passages réguliers ; pour les particuliers, deux passages.",
  ], ["Palaiseau", "Antony", "Wissous", "Chilly-Mazarin"],
  { q: "Un restaurant de Massy a-t-il besoin d'un contrat contre les cafards ?", a: "C'est fortement conseillé : un suivi régulier avec rapport démontre la maîtrise des nuisibles lors des contrôles sanitaires." },
  { code: '91', departement: 'Essonne', zoneHref: '/zones/essonne' }),
  ville("Savigny-sur-Orge", "à Savigny-sur-Orge", 'savigny-sur-orge', [
    "À Savigny-sur-Orge, les cafards touchent surtout les petits immeubles et les commerces de bouche du centre, mais aussi des pavillons où ils arrivent avec des cartons ou des appareils d'occasion.",
    "Le gel est déposé derrière l'électroménager, sous l'évier et dans les charnières, là où la blatte germanique se cache.",
  ], ["Viry-Châtillon", "Morsang-sur-Orge", "Juvisy-sur-Orge", "Épinay-sur-Orge"],
  { q: "Un frigo d'occasion peut-il amener des cafards ?", a: "Oui, les blattes et leurs oothèques se cachent dans les moteurs et les joints des appareils. Inspectez-les avant de les installer." },
  { code: '91', departement: 'Essonne', zoneHref: '/zones/essonne' }),
  ville("Palaiseau", "à Palaiseau", 'palaiseau', [
    "Palaiseau compte des résidences étudiantes sur le plateau, des cuisines partagées et des commerces dans le centre ancien. Ces lieux sont exposés à la blatte germanique.",
    "Nous intervenons pour les gestionnaires de résidences comme pour les particuliers, avec deux passages et des conseils d'hygiène simples.",
  ], ["Massy", "Orsay", "Igny", "Villebon-sur-Yvette"],
  { q: "Des cafards dans une cuisine partagée à Palaiseau : que faire ?", a: "Prévenez le gestionnaire : toute la cuisine doit être traitée, avec les chambres voisines si besoin. Ne laissez aucune nourriture à l'air libre." },
  { code: '91', departement: 'Essonne', zoneHref: '/zones/essonne' }),
  ville("Athis-Mons", "à Athis-Mons", 'athis-mons', [
    "Athis-Mons compte des résidences, des pavillons et de nombreuses entreprises de restauration liées à la zone aéroportuaire. Les cuisines professionnelles demandent un suivi régulier.",
    "Chez les particuliers, nous traitons la cuisine et la salle de bain, avec un second passage deux à trois semaines plus tard.",
  ], ["Paray-Vieille-Poste", "Juvisy-sur-Orge", "Morangis", "Ablon-sur-Seine"],
  { q: "Une cuisine professionnelle près d'Orly peut-elle être suivie toute l'année ?", a: "Oui, avec des passages programmés, un plan des zones traitées et un rapport à chaque visite." },
  { code: '91', departement: 'Essonne', zoneHref: '/zones/essonne' }),
  ville("Sainte-Geneviève-des-Bois", "à Sainte-Geneviève-des-Bois", 'sainte-genevieve-des-bois', [
    "À Sainte-Geneviève-des-Bois, les cafards touchent surtout les résidences et les commerces autour du centre commercial, mais aussi des pavillons après un déménagement.",
    "Nous traitons au gel professionnel, avec un insecticide ciblé si nécessaire, et un second passage pour les jeunes blattes.",
  ], ["Saint-Michel-sur-Orge", "Fleury-Mérogis", "Morsang-sur-Orge", "Villemoisson-sur-Orge"],
  { q: "Les cartons de déménagement peuvent-ils transporter des cafards ?", a: "Oui, les blattes et leurs oothèques s'y cachent. Déballez vite et jetez les cartons dehors après un déménagement." },
  { code: '91', departement: 'Essonne', zoneHref: '/zones/essonne' }),
  ville("Vigneux-sur-Seine", "à Vigneux-sur-Seine", 'vigneux-sur-seine', [
    "Dans le quartier de la Croix-Blanche et les grandes résidences de Vigneux-sur-Seine, les cafards circulent d'un logement à l'autre par les gaines et les vide-ordures.",
    "Un traitement coordonné avec le bailleur, logement par logement, est la clé pour éviter qu'ils reviennent.",
  ], ["Draveil", "Montgeron", "Athis-Mons", "Juvisy-sur-Orge"],
  { q: "Les vide-ordures attirent-ils les cafards à Vigneux ?", a: "Oui, ils offrent chaleur et nourriture. Le local et les gaines doivent être traités avec les logements." },
  { code: '91', departement: 'Essonne', zoneHref: '/zones/essonne' }),
  ville("Ris-Orangis", "à Ris-Orangis", 'ris-orangis', [
    "Ris-Orangis compte des résidences, des foyers et des commerces où les blattes s'installent dans les cuisines collectives et les locaux poubelles.",
    "Nous intervenons pour les familles, les bailleurs et les gestionnaires de foyers, avec deux passages et une attestation.",
  ], ["Évry-Courcouronnes", "Grigny", "Draveil", "Bondoufle"],
  { q: "Un foyer à Ris-Orangis peut-il être traité contre les cafards ?", a: "Oui, cuisines collectives, locaux poubelles et chambres concernées, en lien avec le gestionnaire, avec attestation." },
  { code: '91', departement: 'Essonne', zoneHref: '/zones/essonne' }),
  ville("Viry-Châtillon", "à Viry-Châtillon", 'viry-chatillon', [
    "Viry-Châtillon mêle résidences et pavillons. Dans les immeubles, les cafards remontent par les colonnes d'eau ; dans les maisons, ils arrivent souvent avec des appareils ou des cartons.",
    "Nous traitons la cuisine, la salle de bain et les gaines, avec un second passage indispensable.",
  ], ["Grigny", "Savigny-sur-Orge", "Juvisy-sur-Orge", "Morsang-sur-Orge"],
  { q: "Pourquoi voit-on encore des cafards après le premier passage ?", a: "Les jeunes sortent des oothèques après le traitement. Le second passage, deux à trois semaines plus tard, les élimine." },
  { code: '91', departement: 'Essonne', zoneHref: '/zones/essonne' }),
  ville("Meaux", "à Meaux", 'meaux', [
    "Meaux compte de grands quartiers d'habitat collectif, comme Beauval et Pierre-Collinet, et un centre commerçant avec restaurants et commerces de bouche. Les cafards y sont fréquents.",
    "Nous intervenons en Seine-et-Marne pour les familles, les bailleurs et les professionnels, avec deux passages et attestation.",
    'Les commerces du marché couvert et les restaurants de la cité épiscopale reçoivent beaucoup de livraisons : cartons et cagettes sont des cachettes fréquentes pour les blattes, à évacuer rapidement.',
  ], ["Trilport", "Nanteuil-lès-Meaux", "Chauconin-Neufmontiers", "Mareuil-lès-Meaux"],
  { q: "Intervenez-vous à Meaux pour les cafards ?", a: "Oui. Appelez le 07 68 07 72 19 : devis gratuit, deux passages inclus dans le traitement." },
  { code: '77', departement: 'Seine-et-Marne', zoneHref: '/zones/seine-et-marne' }),
  ville("Chelles", "à Chelles", 'chelles', [
    "Chelles compte des résidences et des commerces autour de la gare et du centre, où les blattes s'installent dans les cuisines et les réserves.",
    "Dans les pavillons, la blatte orientale peut remonter par les caves humides : le traitement vise alors le sous-sol.",
  ], ["Vaires-sur-Marne", "Gagny", "Montfermeil", "Brou-sur-Chantereine"],
  { q: "Blatte germanique ou orientale à Chelles : comment savoir ?", a: "La germanique est petite, brun clair, avec deux bandes sombres ; l'orientale est plus grosse, noire et lente. Une photo nous suffit pour identifier." },
  { code: '77', departement: 'Seine-et-Marne', zoneHref: '/zones/seine-et-marne' }),
  ville("Melun", "à Melun", 'melun', [
    "Melun compte des immeubles anciens dans le centre, de grandes résidences à l'Almont et aux Mézereaux, et de nombreux restaurants. Les cafards y sont un souci fréquent.",
    "Nous traitons au gel, avec un insecticide ciblé si besoin, et proposons un suivi régulier aux professionnels.",
  ], ["Dammarie-lès-Lys", "Le Mée-sur-Seine", "Vaux-le-Pénil", "Rubelles"],
  { q: "Les restaurants de Melun doivent-ils prouver qu'ils maîtrisent les nuisibles ?", a: "Les établissements alimentaires doivent maîtriser les nuisibles. Notre rapport d'intervention vous aide lors des contrôles." },
  { code: '77', departement: 'Seine-et-Marne', zoneHref: '/zones/seine-et-marne' }),
  ville("Pontault-Combault", "à Pontault-Combault", 'pontault-combault', [
    "À Pontault-Combault, les cafards touchent surtout les résidences et les commerces des zones commerciales, mais aussi des pavillons après l'achat d'appareils d'occasion.",
    "Le gel est appliqué dans les fentes et derrière l'électroménager ; un second passage élimine les jeunes blattes.",
  ], ["Roissy-en-Brie", "Émerainville", "Ozoir-la-Ferrière", "Le Plessis-Trévise"],
  { q: "Un lave-vaisselle d'occasion peut-il cacher des cafards ?", a: "Oui, les blattes aiment la chaleur des moteurs. Inspectez l'appareil avant de l'installer et appelez-nous au moindre doute." },
  { code: '77', departement: 'Seine-et-Marne', zoneHref: '/zones/seine-et-marne' }),
  ville("Savigny-le-Temple", "à Savigny-le-Temple", 'savigny-le-temple', [
    "Savigny-le-Temple compte des résidences récentes et des commerces où les blattes arrivent souvent avec des livraisons, des cartons ou des appareils.",
    "Nous traitons au gel professionnel et revenons deux à trois semaines plus tard pour détruire la génération suivante.",
  ], ["Cesson", "Nandy", "Vert-Saint-Denis", "Saint-Pierre-du-Perray"],
  { q: "Les cafards peuvent-ils venir avec les livraisons ?", a: "Oui, les cartons et emballages stockés dans des entrepôts peuvent transporter des blattes ou leurs oothèques." },
  { code: '77', departement: 'Seine-et-Marne', zoneHref: '/zones/seine-et-marne' }),
  ville("Bussy-Saint-Georges", "à Bussy-Saint-Georges", 'bussy-saint-georges', [
    "Bussy-Saint-Georges compte de nombreux restaurants, des hôtels et des résidences récentes. Les cuisines professionnelles et les locaux techniques sont les lieux les plus exposés.",
    "Pour les professionnels, un suivi régulier ; pour les particuliers, un traitement complet en deux passages.",
  ], ["Bussy-Saint-Martin", "Collégien", "Montévrain", "Jossigny"],
  { q: "Un hôtel de Bussy peut-il avoir un suivi contre les cafards ?", a: "Oui, avec passages programmés, traitement des cuisines et des locaux techniques, et rapport à chaque visite." },
  { code: '77', departement: 'Seine-et-Marne', zoneHref: '/zones/seine-et-marne' }),
  ville("Champs-sur-Marne", "à Champs-sur-Marne", 'champs-sur-marne', [
    "Champs-sur-Marne compte des résidences étudiantes avec cuisines partagées sur la cité Descartes, et des pavillons. Les cuisines partagées sont des lieux à surveiller.",
    "Nous intervenons pour les gestionnaires de résidences et les particuliers, avec deux passages et des conseils d'hygiène.",
  ], ["Noisiel", "Torcy", "Noisy-le-Grand", "Émerainville"],
  { q: "Comment éviter les cafards dans une cuisine partagée ?", a: "Rangez la nourriture dans des boîtes fermées, ne laissez pas de vaisselle sale la nuit et sortez les poubelles chaque soir." },
  { code: '77', departement: 'Seine-et-Marne', zoneHref: '/zones/seine-et-marne' }),
  ville("Villeparisis", "à Villeparisis", 'villeparisis', [
    "À Villeparisis, ville surtout pavillonnaire, les cafards arrivent souvent avec des cartons, des appareils d'occasion ou depuis un commerce voisin.",
    "Nous traitons la cuisine, la salle de bain et les passages de canalisations, avec un second passage.",
  ], ["Mitry-Mory", "Claye-Souilly", "Vaujours", "Courtry"],
  { q: "Une maison peut-elle avoir des cafards à Villeparisis ?", a: "Oui, même sans voisins proches : ils arrivent avec des objets ou par les canalisations. Le traitement est le même qu'en appartement." },
  { code: '77', departement: 'Seine-et-Marne', zoneHref: '/zones/seine-et-marne' }),
  ville("Dammarie-lès-Lys", "à Dammarie-lès-Lys", 'dammarie-les-lys', [
    "Dammarie-lès-Lys compte des résidences, notamment à la Plaine du Lys, où les cafards circulent par les gaines et les vide-ordures.",
    "Nous travaillons avec les familles et les bailleurs, avec un traitement coordonné quand plusieurs logements sont touchés.",
  ], ["Melun", "Le Mée-sur-Seine", "Boissise-le-Roi", "Chartrettes"],
  { q: "Faut-il prévenir les voisins en cas de cafards à Dammarie ?", a: "Oui, en immeuble : les blattes circulent entre logements. Un traitement coordonné évite qu'elles reviennent." },
  { code: '77', departement: 'Seine-et-Marne', zoneHref: '/zones/seine-et-marne' }),
  ville("Combs-la-Ville", "à Combs-la-Ville", 'combs-la-ville', [
    "À Combs-la-Ville, les cafards touchent surtout les résidences et les commerces du centre, mais aussi des maisons après un déménagement.",
    "Nous traitons au gel professionnel, avec un second passage deux à trois semaines plus tard.",
  ], ["Moissy-Cramayel", "Quincy-sous-Sénart", "Brie-Comte-Robert", "Lieusaint"],
  { q: "Combien coûte un traitement des cafards à Combs-la-Ville ?", a: "À partir de 120 € TTC pour un petit logement, deux passages inclus. Le devis est gratuit." },
  { code: '77', departement: 'Seine-et-Marne', zoneHref: '/zones/seine-et-marne' }),
]

export function getVilleCafards(slug: string) {
  return VILLES_CAFARDS.find((x) => x.slug === slug)
}
