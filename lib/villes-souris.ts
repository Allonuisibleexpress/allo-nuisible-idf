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
  alternative: {
    surtitre: 'Méthode alternative',
    titre: 'Le piège multicapture Ekomille',
    texte: 'La méthode la plus courante reste les postes d\'appâtage sécurisés avec raticide. Si vous préférez éviter tout raticide, nous pouvons poser un piège Ekomille sur le passage le plus fréquenté, avec des appâts alimentaires. La souris tombe dans une cuve fermée et y reste, au lieu de mourir dans une cloison ou un meuble.',
    href: '/blog/deratisation-sans-mort-aux-rats',
    lien: 'Comment fonctionne le piège Ekomille',
  },
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

// Val-de-Marne par défaut ; Paris passe { code: '75', departement: 'Paris', zoneHref: '/zones/paris' }
type Dep = { code: string; departement: string; zoneHref: string }
const ville = (nom: string, a: string, slug: string, contexte: string[], proches: string[], faq: { q: string; a: string }, dep?: Dep): VilleSouris => ({
  slug,
  nom,
  a,
  code: dep?.code ?? '94',
  departement: dep?.departement ?? 'Val-de-Marne',
  zoneHref: dep?.zoneHref ?? `/zones/val-de-marne/${slug}`,
  title: `Souris ${a} (${dep?.code ?? '94'}) : traitement et prévention`,
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

  ville('Maisons-Alfort', 'à Maisons-Alfort', 'maisons-alfort', [
    'À Maisons-Alfort, entre la Marne, la Seine et de nombreux pavillons avec jardin, les souris entrent dans les maisons à l\'automne par les garages, les soupiraux et les passages de canalisations. Dans les immeubles, elles montent par les gaines depuis les caves.',
    'La méthode la plus courante reste les postes d\'appâtage sécurisés, verrouillés et hors de portée. Nous posons aussi des pièges mécaniques selon le lieu, et nous bouchons toujours les accès.',
    'Dans les maisons avec jardin, rangez les sacs de terreau, de graines pour oiseaux et de croquettes dans des boîtes fermées : ce sont des réserves de nourriture idéales pour les souris du garage.',
  ], ['Saint-Maurice', 'Alfortville', 'Charenton-le-Pont', 'Créteil'],
  { q: 'Des souris dans le garage, faut-il traiter la maison ?', a: 'Souvent oui : le garage est la porte d\'entrée, et les souris gagnent vite la cuisine ou les combles. Le technicien traite le garage, vérifie la maison et bouche le passage entre les deux.' }),

  ville('Joinville-le-Pont', 'à Joinville-le-Pont', 'joinville-le-pont', [
    'À Joinville-le-Pont, entre les bords de Marne et le Bois de Vincennes, les souris passent facilement des espaces verts aux résidences et aux maisons, surtout quand le froid arrive. Caves, locaux poubelles et cuisines sont les premiers touchés.',
    'En résidence, les parties communes doivent être traitées en même temps que les appartements. Postes d\'appâtage sécurisés, la méthode la plus courante, ou pièges, avec colmatage des accès.',
    'Les locaux à vélos et poussettes des résidences, peu fréquentés la nuit, servent souvent de refuge aux souris : gardez-les dégagés et signalez au gestionnaire toute trace de crottes.',
  ], ['Saint-Maurice', 'Saint-Maur-des-Fossés', 'Nogent-sur-Marne', 'Champigny-sur-Marne'],
  { q: 'Pourquoi des souris près des bords de Marne ?', a: 'Les berges et les espaces verts leur offrent abri et nourriture. Quand il fait froid, elles se rapprochent des bâtiments les plus proches. Près de l\'eau, on rencontre aussi le rat brun : le technicien identifie le rongeur avant de traiter.' }),

  ville('Paris 12e', 'à Paris 12e', 'paris-12', [
    'Dans le 12e arrondissement, les souris circulent par les caves, les gaines et les faux plafonds des immeubles anciens, et profitent des nombreux commerces de bouche autour d\'Aligre, de Bercy et de la gare de Lyon.',
    'Pour les restaurants et commerces, nous posons des postes sécurisés ou des pièges connectés avec suivi des captures et attestation. En appartement, postes ou pièges selon la situation, et colmatage des passages.',
    'Autour des marchés et des commerces de bouche, les souris profitent des déchets alimentaires : dans votre immeuble, les poubelles bien fermées et le local à ordures propre sont la première protection.',
  ], ['Saint-Mandé', 'Charenton-le-Pont', 'Vincennes', 'Paris 11e'],
  { q: 'Une souris dans un appartement parisien, d\'où vient-elle ?', a: 'Le plus souvent des caves ou d\'un commerce du rez-de-chaussée : elle monte par les gaines techniques, les colonnes et les doublages. Boucher les passages autour des tuyaux, sous l\'évier et derrière la cuisine est indispensable.' }, { code: '75', departement: 'Paris', zoneHref: '/zones/paris' }),

  ville('Alfortville', 'à Alfortville', 'alfortville', [
    'À Alfortville, commune dense entre la Seine et la Marne, les souris passent d\'un appartement à l\'autre par les gaines techniques, les faux plafonds et les caves des immeubles.',
    'Un traitement efficace associe les logements touchés et les parties communes. La méthode la plus courante reste les postes d\'appâtage sécurisés ; si vous ne souhaitez pas de raticide, le piège Ekomille est une méthode alternative.',
    'En appartement, les souris se glissent derrière les plinthes et sous l\'évier par les passages de tuyaux. Un simple tour avec une lampe derrière la cuisine et les placards bas suffit souvent à trouver leur entrée.',
  ], ['Maisons-Alfort', 'Ivry-sur-Seine', 'Vitry-sur-Seine', 'Créteil'],
  { q: 'J\'entends des grattements dans le plafond, est-ce une souris ?', a: 'Très souvent. Les souris se déplacent la nuit dans les faux plafonds et les doublages. Des crottes petites et pointues dans les placards ou derrière l\'électroménager confirment leur présence.' }),

  ville('Créteil', 'à Créteil', 'creteil', [
    'À Créteil, entre le lac, les parcs, les grands ensembles et les quartiers pavillonnaires, les souris s\'installent dans les caves et locaux poubelles des résidences comme dans les garages et cuisines des maisons.',
    'Nous intervenons chez les particuliers, pour les bailleurs et dans les commerces : postes d\'appâtage sécurisés, la méthode la plus courante, pièges mécaniques ou connectés selon le lieu, et fermeture des accès.',
    'Près du lac et des parcs, les souris des espaces verts se rapprochent des immeubles à l\'automne : les rez-de-chaussée et les caves sont alors les premiers concernés.',
  ], ['Maisons-Alfort', 'Alfortville', 'Saint-Maur-des-Fossés', 'Bonneuil-sur-Marne'],
  { q: 'Les souris sont-elles dangereuses pour la santé ?', a: 'Elles peuvent souiller les aliments et les surfaces par leurs déjections et leur urine. Jetez les denrées entamées, nettoyez avec des gants et faites traiter rapidement, car une souris se reproduit très vite.' }),

  ville('Ivry-sur-Seine', 'à Ivry-sur-Seine', 'ivry-sur-seine', [
    'À Ivry-sur-Seine, entre entrepôts, commerces, résidences récentes et immeubles anciens, les souris trouvent facilement nourriture et abri. Les réserves, les locaux techniques et les caves sont les plus exposés.',
    'Pour les professionnels, les pièges connectés signalent chaque capture et évitent des visites inutiles, avec attestation d\'intervention. En logement, postes d\'appâtage sécurisés ou pièges, toujours avec colmatage.',
    'Dans les commerces et réserves, stockez les marchandises sur des étagères à distance du mur et du sol : cela facilite l\'inspection et prive les souris de cachettes.',
  ], ['Vitry-sur-Seine', 'Alfortville', 'Charenton-le-Pont', 'Le Kremlin-Bicêtre'],
  { q: 'Qu\'est-ce qu\'un piège connecté ?', a: 'C\'est un piège qui envoie une alerte à chaque capture. Il permet d\'intervenir rapidement, de suivre l\'évolution de l\'infestation et de garder une trace pour un contrôle sanitaire, sans multiplier les passages.' }),

  ville('Saint-Maur-des-Fossés', 'à Saint-Maur-des-Fossés', 'saint-maur-des-fosses', [
    'À Saint-Maur-des-Fossés, commune surtout pavillonnaire dans la boucle de la Marne, les souris entrent dans les maisons à l\'automne par les garages, les sous-sols, les soupiraux et les passages de câbles.',
    'Dans une maison, elles s\'installent vite dans les combles et les doublages. Nous repérons leurs passages, posons des postes d\'appâtage sécurisés ou des pièges, et refermons les ouvertures avec des matériaux qu\'elles ne rongent pas.',
    'Les vieux murs de meulière, fréquents dans les maisons de la boucle, ont souvent des joints dégradés : ce sont autant de passages pour les souris, à reboucher après le traitement.',
  ], ['Saint-Maurice', 'Joinville-le-Pont', 'Créteil', 'Champigny-sur-Marne'],
  { q: 'Quels matériaux pour boucher un trou de souris ?', a: 'De la laine d\'acier ou une grille métallique, scellée au mortier ou au mastic. La mousse expansive seule ne suffit pas : les souris la rongent facilement.' }),

  ville('Fontenay-sous-Bois', 'à Fontenay-sous-Bois', 'fontenay-sous-bois', [
    'À Fontenay-sous-Bois, en bordure du Bois de Vincennes, les souris passent des espaces boisés aux maisons et aux immeubles dès les premiers froids. Les bureaux et restaurants d\'entreprise du Val de Fontenay sont aussi concernés.',
    'Pour les bureaux, nous intervenons en dehors des heures de travail avec des pièges connectés et un suivi des captures. Chez les particuliers, postes sécurisés ou pièges, et colmatage des accès.',
    'Dans les maisons proches du bois, les abris de jardin et les tas de bois de chauffage contre la façade servent de relais aux souris : éloignez-les de quelques mètres de la maison.',
  ], ['Vincennes', 'Nogent-sur-Marne', 'Montreuil', 'Saint-Mandé'],
  { q: 'Des souris dans des bureaux, que faire ?', a: 'Ne laissez pas de nourriture dans les tiroirs et les espaces de pause, et prévenez le gestionnaire du bâtiment. Le traitement porte sur les zones de passage, les faux plafonds et les gaines, avec un suivi jusqu\'à disparition des traces.' }),

  ville('Vitry-sur-Seine', 'à Vitry-sur-Seine', 'vitry-sur-seine', [
    'À Vitry-sur-Seine, entre pavillons avec jardin, grands ensembles et zones d\'activité, les souris s\'installent aussi bien dans les garages et cuisines des maisons que dans les caves et locaux poubelles des immeubles.',
    'Postes d\'appâtage sécurisés, la méthode la plus courante, pièges mécaniques ou connectés selon le lieu : le traitement s\'accompagne toujours du colmatage des entrées. En méthode alternative, sans raticide, le piège Ekomille.',
    'Dans les pavillons, une mangeoire à oiseaux ou un compost près de la maison attire souvent les souris : placez-les au fond du jardin et ramassez les graines tombées.',
  ], ['Ivry-sur-Seine', 'Alfortville', 'Choisy-le-Roi', 'Villejuif'],
  { q: 'Combien de souris y a-t-il quand on en voit une ?', a: 'Souvent plusieurs : les souris vivent en groupe et sortent surtout la nuit. Voir une souris en journée indique en général qu\'elles sont déjà bien installées. Mieux vaut faire traiter sans attendre.' }),
]

export function getVilleSouris(slug: string) {
  return VILLES_SOURIS.find((x) => x.slug === slug)
}
