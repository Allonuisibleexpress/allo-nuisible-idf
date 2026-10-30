// Pages « Souris à [ville] » (/souris/[ville]) : 9 villes du Val-de-Marne.
// Visent les recherches « souris » (maison, appartement), les pages /deratisation/[ville] restent centrées sur les rats.
// Cocon : sœur /services/rongeurs, pilier /services/deratisation, guides rongeurs du blog, pages communes du 94.
// Règles CLAUDE.md : pas de chiffre inventé, pas de tiret long, pas de « naturel », « bio », « écologique », « sans danger ».

import type { Ville, VilleServiceConfig } from '@/components/VilleServicePage'

export const GUIDES_SOURIS: Record<string, string> = {
  'souris-par-ou-entrent-elles': 'Souris : par où entrent-elles ?',
  'rat-dans-les-murs-cloisons': 'Rongeurs dans les murs et cloisons',
  'rats-dans-les-combles': 'Rongeurs dans les combles',
  'rongeur-moteur-voiture-cables': 'Câbles de voiture rongés',
  'lerot-grenier-combles': 'Lérot ou souris : bruits la nuit',
}

export const CONFIG_SOURIS: VilleServiceConfig = {
  basePath: '/souris',
  titre: 'Souris',
  serviceType: 'Traitement contre les souris',
  pilier: { href: '/services/rongeurs', label: 'Rats et souris', lien: 'notre traitement des rats et souris en Île-de-France' },
  enBref: [
    'Allo Nuisible IDF élimine les souris (souris domestique, mulot) dans les appartements, maisons, caves, garages et commerces.',
    'Méthodes : pièges mécaniques, pièges connectés qui signalent chaque capture, postes d\'appâtage sécurisés avec rodenticide professionnel.',
    'Dans tous les cas : recherche et colmatage des points d\'entrée, sans quoi d\'autres souris reviennent.',
    'Techniciens certifiés Certibiocide, intervention possible le jour même, 7j/7.',
    'Devis gratuit, suivi et garantie 1 an, attestation pour les professionnels.',
  ],
  cachettes: {
    titre: 'Où elles se cachent',
    items: [
      'Derrière et sous l\'électroménager',
      'Placards de cuisine et réserves',
      'Doublages, cloisons creuses et faux plafonds',
      'Combles et isolant',
      'Garages, caves et sous-sols',
      'Passages de tuyaux et gaines',
    ],
    signes: 'Signes fréquents : petites crottes pointues, emballages grignotés, grattements la nuit dans les murs ou au plafond, odeur d\'urine.',
  },
  methodes: [
    { titre: 'Pièges mécaniques', tag: 'Sans produit', texte: 'Pièges professionnels placés le long des murs et sur les passages des souris. Aucun produit, adaptés aux cuisines, chambres d\'enfants et logements avec animaux.' },
    { titre: 'Pièges connectés', tag: 'Suivi à distance', texte: 'Ils signalent chaque capture : on intervient vite et l\'animal ne reste pas sur place. Idéal pour les commerces, copropriétés et lieux peu accessibles.' },
    { titre: 'Postes d\'appâtage sécurisés', tag: 'Traitement de fond', texte: 'Boîtiers verrouillés contenant un rodenticide professionnel, inaccessibles aux enfants et aux animaux. Réservés aux techniciens certifiés Certibiocide.' },
    { titre: 'Colmatage des accès', tag: 'Indispensable', texte: 'Une souris passe par une ouverture de la taille d\'un crayon. Nous bouchons les passages de tuyaux, les bas de portes et les gaines avec des matériaux qu\'elles ne rongent pas.', href: '/blog/souris-par-ou-entrent-elles' },
  ],
  encadre: {
    titre: 'Prévenir le retour des souris',
    items: [
      'Rangez la nourriture, les céréales et les croquettes dans des boîtes fermées.',
      'Ne laissez pas de miettes ni de gamelles pleines la nuit.',
      'Posez des bas de porte, surtout sur les portes de garage et de cave.',
      'Bouchez les passages de tuyaux sous l\'évier et derrière l\'électroménager.',
      'Surveillez votre logement dès l\'automne, quand les souris cherchent un abri.',
    ],
  },
  sections: [
    {
      titre: 'Souris, mulot ou rat ?',
      paras: [
        "Avant de traiter, il faut savoir à quel rongeur on a affaire : le dispositif, les emplacements et le colmatage ne sont pas les mêmes. Les traces laissées suffisent souvent à les distinguer.",
      ],
      table: {
        head: ['Rongeur', 'À quoi il ressemble', 'Indices'],
        rows: [
          ['Souris domestique', 'Petite, gris-brun, grandes oreilles, longue queue fine', 'Petites crottes pointues, emballages grignotés dans les placards, odeur d\'urine'],
          ['Mulot', 'Grands yeux et grandes oreilles, ventre clair, se déplace en sautant', 'Vit dehors, entre dans les garages et maisons à l\'automne'],
          ['Rat', 'Bien plus gros, queue épaisse', 'Crottes plus grosses en fuseau, traces grasses le long des murs : voir notre [dératisation](/services/deratisation)'],
        ],
      },
    },
    {
      titre: 'Pourquoi les souris entrent chez vous',
      paras: [
        "Les souris cherchent un abri chaud et de la nourriture. Elles entrent surtout **à l'automne**, quand les températures baissent, mais une fois installées, elles restent toute l'année. Elles se reproduisent vite : quelques souris deviennent rapidement une colonie.",
        "Elles passent par des ouvertures minuscules, **de la taille d'un crayon** : passages de tuyaux, bas de portes de garage, gaines électriques, bouches d'aération, joints dégradés. Voir notre guide [souris : par où entrent-elles ?](/blog/souris-par-ou-entrent-elles).",
      ],
    },
    {
      titre: 'Les risques pour votre santé et votre logement',
      paras: [
        "Les souris souillent la nourriture et les surfaces avec leur urine et leurs déjections. Les rongeurs peuvent transmettre la **leptospirose** par leur urine, selon Santé publique France : nettoyez les traces avec des gants.",
        "Elles rongent aussi les **câbles électriques**, avec un risque de court-circuit, ainsi que les gaines, les emballages et l'**isolant** des combles et des cloisons, qui perd ses performances. Voir [rongeurs dans les murs et cloisons](/blog/rat-dans-les-murs-cloisons) et [dans les combles](/blog/rats-dans-les-combles).",
      ],
    },
    {
      titre: 'Les erreurs à éviter',
      paras: [
        "Beaucoup d'infestations durent parce que le problème a été traité à moitié. Les erreurs les plus fréquentes :",
      ],
      liste: [
        "**Répandre du poison en vrac** : il est accessible aux enfants et aux animaux, et un chat qui mange une souris empoisonnée peut s'intoxiquer à son tour.",
        "**Boucher les trous avant d'avoir éliminé les souris** : piégées à l'intérieur, elles rongent pour sortir ailleurs, ou meurent dans une cloison.",
        "**Traiter une seule pièce** : les souris circulent dans les doublages et les gaines de toute la maison.",
        "**Oublier le colmatage** : sans lui, de nouvelles souris prennent la place des précédentes.",
      ],
    },
  ],
  protocole: {
    titre: 'Notre intervention contre les souris',
    etapes: [
      { titre: 'Diagnostic', texte: 'Repérage des traces, des passages et des points d\'entrée, identification du rongeur (souris, mulot ou rat). Devis gratuit avant toute intervention.' },
      { titre: 'Dispositif adapté', texte: 'Pièges mécaniques, pièges connectés ou postes d\'appâtage sécurisés, placés le long des murs et sur les passages, selon le lieu et la présence d\'enfants ou d\'animaux.' },
      { titre: 'Colmatage', texte: 'Fermeture des accès avec des matériaux que les souris ne rongent pas (grillage métallique fin, mortier), une fois la population éliminée.' },
      { titre: 'Suivi', texte: 'Relevé des pièges ou des postes, ajustement du dispositif si besoin. Avec les pièges connectés, nous sommes alertés à chaque capture.' },
      { titre: 'Nettoyage et conseils', texte: 'Conseils pour nettoyer et désinfecter les traces, et pour éviter le retour : stockage de la nourriture, bas de portes, surveillance à l\'automne.' },
      { titre: 'Garantie', texte: 'Garantie 1 an et attestation d\'intervention pour les professionnels.' },
    ],
  },
  publics: {
    titre: 'Particuliers, copropriétés, professionnels',
    cartes: [
      { titre: 'Particuliers', texte: 'Maison ou appartement, avec enfants ou animaux : pièges sans produit ou postes verrouillés hors de portée, et colmatage des accès.' },
      { titre: 'Copropriétés', texte: 'Caves, locaux poubelles, parkings et gaines : nous traitons les parties communes avec le syndic, pour que les souris ne remontent pas dans les logements.' },
      { titre: 'Professionnels', texte: 'Restaurants, commerces, entrepôts : pièges connectés pour un suivi précis, attestation pour vos contrôles et contrats de suivi régulier.' },
    ],
  },
  guides: Object.entries(GUIDES_SOURIS).map(([slug, label]) => ({ href: `/blog/${slug}`, label })),
  sources: [
    { label: 'Santé publique France, leptospirose', url: 'https://www.santepubliquefrance.fr/maladies-et-traumatismes/maladies-transmissibles-de-l-animal-a-l-homme/leptospirose' },
    { label: 'Règlement (UE) n° 528/2012 sur les produits biocides (EUR-Lex)', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32012R0528' },
  ],
  maj: '2026-10-31',
  certification: 'Techniciens titulaires du Certibiocide, la certification obligatoire pour utiliser des rodenticides professionnels.',
  autresTitre: 'Souris dans d\'autres villes',
}

const FAQ_COMMUNE = (a: string) => [
  { q: `Combien coûte un traitement contre les souris ${a} ?`, a: 'Le prix dépend du lieu (appartement, maison, commerce), de l\'infestation et du nombre de passages de suivi. Le devis est gratuit et vous le connaissez avant toute intervention.' },
  { q: 'Pièges ou postes d\'appâtage : que choisir ?', a: 'Les pièges mécaniques et connectés n\'utilisent aucun produit et évitent qu\'une souris meure dans une cloison. Les postes d\'appâtage sécurisés sont efficaces sur une population installée. Le technicien vous conseille selon le lieu, et le colmatage des accès reste indispensable dans tous les cas.' },
  { q: 'Faut-il quitter le logement ?', a: 'Non. Les pièges ne diffusent aucun produit, et les postes d\'appâtage sont verrouillés et inaccessibles aux enfants et aux animaux.' },
  { q: 'Combien de temps faut-il pour se débarrasser des souris ?', a: 'Cela dépend de l\'infestation et des accès à fermer. Un suivi est prévu jusqu\'à ce qu\'il n\'y ait plus de capture ni de nouvelle trace.' },
  { q: 'Une souris est morte dans un mur, que faire ?', a: 'L\'odeur permet de la localiser. On ouvre alors une petite trappe pour la retirer et désinfecter. Les pièges connectés limitent ce risque, car l\'animal est récupéré rapidement.' },
]

export type VilleSouris = Ville & { title: string }

const ville = (nom: string, a: string, slug: string, contexte: string[], proches: string[], faq: { q: string; a: string }): VilleSouris => ({
  slug,
  nom,
  a,
  code: '94',
  departement: 'Val-de-Marne',
  zoneHref: `/zones/val-de-marne/${slug}`,
  title: `Souris ${a} (94) : traitement et prévention`,
  description: `Souris ${a} : pièges mécaniques ou connectés, postes sécurisés et colmatage des accès. Techniciens Certibiocide, 7j/7, devis gratuit.`,
  contexte,
  proches,
  faq: [faq, ...FAQ_COMMUNE(a)],
})

export const VILLES_SOURIS: VilleSouris[] = [
  ville('Vincennes', 'à Vincennes', 'vincennes', [
    'Dans les immeubles anciens de Vincennes, les souris circulent par les caves, les gaines techniques et les doublages des murs. On les entend souvent avant de les voir : grattements dans une cloison, bruits au plafond la nuit.',
    'En copropriété, traiter un seul appartement ne suffit pas toujours : les caves et parties communes doivent être vérifiées. Nous travaillons avec les syndics et fournissons un rapport après intervention.',
  ], ['Saint-Mandé', 'Fontenay-sous-Bois', 'Nogent-sur-Marne', 'Charenton-le-Pont'],
  { q: 'Des souris dans un appartement en étage, c\'est possible ?', a: 'Oui. Elles montent par les gaines techniques, les colonnes et les doublages des murs, depuis les caves ou les commerces du rez-de-chaussée.' }),

  ville('Saint-Mandé', 'à Saint-Mandé', 'saint-mande', [
    'À Saint-Mandé, entre immeubles, commerces et Bois de Vincennes tout proche, les souris s\'installent dans les cuisines, les placards et les réserves. Elles cherchent surtout nourriture et chaleur.',
    'Nous privilégions des pièges placés sur leurs passages et le colmatage des accès, avec des postes d\'appâtage sécurisés si l\'infestation est installée.',
  ], ['Vincennes', 'Charenton-le-Pont', 'Saint-Maurice', 'Fontenay-sous-Bois'],
  { q: 'Comment savoir si c\'est une souris ou un rat ?', a: 'Les crottes de souris sont petites et pointues, celles de rat plus grosses et en fuseau. Les souris grignotent surtout les emballages dans les placards, les rats laissent des traces grasses le long des murs.' }),

  ville('Saint-Maurice', 'à Saint-Maurice', 'saint-maurice', [
    'Entre la Marne et le Bois de Vincennes, Saint-Maurice voit les souris passer des espaces verts aux immeubles et aux maisons, surtout à l\'automne. Garages, caves et cuisines sont les premiers touchés.',
    'Pour les familles avec enfants ou animaux, nous proposons des pièges mécaniques et connectés, sans produit, associés au colmatage des entrées.',
  ], ['Charenton-le-Pont', 'Maisons-Alfort', 'Joinville-le-Pont', 'Saint-Maur-des-Fossés'],
  { q: 'Pourquoi voit-on plus de souris à l\'automne ?', a: 'Quand les températures baissent, elles quittent les espaces verts pour chercher chaleur et nourriture dans les bâtiments. C\'est le bon moment pour vérifier les accès.' }),

  ville('Charenton-le-Pont', 'à Charenton-le-Pont', 'charenton-le-pont', [
    'Commune dense aux portes de Paris, Charenton-le-Pont réunit immeubles, bureaux, restaurants et commerces. Les souris y profitent des réserves, des caves et des gaines qui relient les étages.',
    'Pour les commerces et restaurants, les pièges connectés permettent un suivi précis des captures, avec attestation d\'intervention. Pour les logements, pièges et colmatage selon la situation.',
  ], ['Saint-Maurice', 'Maisons-Alfort', 'Ivry-sur-Seine', 'Saint-Mandé'],
  { q: 'Des souris dans mon restaurant : que faire ?', a: 'Faites intervenir un professionnel rapidement, protégez les denrées et conservez l\'attestation d\'intervention. Un suivi régulier, avec pièges connectés, permet de prouver la maîtrise du risque lors d\'un contrôle.' }),

  ville('Nogent-sur-Marne', 'à Nogent-sur-Marne', 'nogent-sur-marne', [
    'À Nogent-sur-Marne, entre résidences, maisons et commerces, les souris s\'installent dans les cuisines, les caves et les garages. Elles entrent souvent par les passages de tuyaux et les bas de portes.',
    'Le colmatage des accès est la clé : sans lui, d\'autres souris prennent la place. Nous combinons pièges ou postes sécurisés et fermeture des entrées.',
  ], ['Le Perreux-sur-Marne', 'Fontenay-sous-Bois', 'Joinville-le-Pont', 'Vincennes'],
  { q: 'Par où une souris entre-t-elle dans un logement ?', a: 'Par les passages de tuyaux, les bas de portes, les gaines électriques et les bouches d\'aération. Une ouverture de la taille d\'un crayon lui suffit.' }),

  ville('Le Perreux-sur-Marne', 'au Perreux-sur-Marne', 'le-perreux-sur-marne', [
    'Au Perreux-sur-Marne, commune surtout pavillonnaire, les souris entrent dans les maisons par les garages, les sous-sols et les passages de canalisations, surtout quand le froid arrive.',
    'Dans une maison, elles s\'installent vite dans les doublages, les combles et l\'isolant. Nous localisons leurs passages, posons pièges ou postes sécurisés et bouchons les accès.',
  ], ['Nogent-sur-Marne', 'Bry-sur-Marne', 'Champigny-sur-Marne', 'Fontenay-sous-Bois'],
  { q: 'Des souris dans les combles : faut-il changer l\'isolant ?', a: 'Pas toujours, mais un isolant souillé de déjections et d\'urine, ou creusé de galeries, perd ses performances. Le technicien vous dit ce qui peut être conservé.' }),

  ville('Bry-sur-Marne', 'à Bry-sur-Marne', 'bry-sur-marne', [
    'À Bry-sur-Marne, les maisons avec jardin attirent les souris et les mulots, qui se rapprochent des habitations à l\'automne. Garages, abris de jardin et cuisines sont les premiers visités.',
    'Avec des enfants ou des animaux, nous privilégions les pièges mécaniques et connectés, sans produit. Les postes d\'appâtage, s\'ils sont nécessaires, sont verrouillés et hors de portée.',
  ], ['Le Perreux-sur-Marne', 'Champigny-sur-Marne', 'Villiers-sur-Marne', 'Nogent-sur-Marne'],
  { q: 'Peut-on traiter les souris avec des enfants et des animaux ?', a: 'Oui. Les pièges mécaniques et connectés n\'utilisent aucun produit. Les postes d\'appâtage sont verrouillés et inaccessibles aux enfants et aux animaux.' }),

  ville('Sucy-en-Brie', 'à Sucy-en-Brie', 'sucy-en-brie', [
    'Sucy-en-Brie mêle centre ancien, pavillons et résidences, avec des bois à proximité. Les souris et les mulots entrent dans les maisons à l\'automne, par les garages, les caves et les murs anciens.',
    'Dans les maisons anciennes, joints dégradés et soupiraux leur ouvrent la porte. Nous traitons et refermons ces passages avec des matériaux qu\'elles ne rongent pas.',
  ], ['Boissy-Saint-Léger', 'Bonneuil-sur-Marne', 'Ormesson-sur-Marne', 'Noiseau', 'Chennevières-sur-Marne'],
  { q: 'Souris ou mulot : quelle différence ?', a: 'Le mulot vit surtout dehors (jardins, champs, bois) et entre dans les maisons quand il fait froid. La souris domestique s\'installe durablement à l\'intérieur. Le traitement et le colmatage sont similaires.' }),

  ville('Santeny', 'à Santeny', 'santeny', [
    'À Santeny, entourée de champs et de bois, les souris et les mulots se rapprochent des maisons après les moissons et à l\'arrivée du froid. Granges, garages et dépendances sont les premiers touchés.',
    'Dans les dépendances et lieux de stockage, les pièges connectés évitent des visites inutiles. Dans la maison, pièges ou postes sécurisés, toujours avec le colmatage des accès.',
  ], ['Villecresnes', 'Marolles-en-Brie', 'Mandres-les-Roses', 'Périgny'],
  { q: 'Pourquoi des souris après les moissons ?', a: 'Quand les champs sont fauchés, souris et mulots perdent abri et nourriture et se rapprochent des maisons et des dépendances. Vérifiez alors les bas de portes et les passages de tuyaux.' }),
]

export function getVilleSouris(slug: string) {
  return VILLES_SOURIS.find((x) => x.slug === slug)
}
