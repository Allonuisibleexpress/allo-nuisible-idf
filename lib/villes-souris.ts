// Pages « Souris à [ville] » (/souris/[ville]) : 9 villes du Val-de-Marne.
// Visent les recherches « souris » (maison, appartement), les pages /deratisation/[ville] restent centrées sur les rats.
// Cocon : pilier /services/deratisation (rats et souris), guides rongeurs du blog, pages communes du 94.
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
  pilier: { href: '/services/deratisation', label: 'Rats et souris', lien: 'notre traitement des rats et souris en Île-de-France' },
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

// Accroche de la description Google, propre à chaque ville (évite les descriptions identiques)
const ACCROCHES: Record<string, string> = {
  'vincennes': 'immeubles anciens, caves, gaines et doublages des murs. Pièges, colmatage, rapport au syndic.',
  'saint-mande': 'cuisines, placards et réserves, près du Bois de Vincennes. Pièges sur les passages, colmatage.',
  'saint-maurice': 'garages, caves et cuisines entre Marne et Bois de Vincennes. Pièges sans produit, colmatage.',
  'charenton-le-pont': 'restaurants, commerces, caves et gaines. Pièges connectés avec suivi et attestation.',
  'nogent-sur-marne': 'cuisines, caves et garages, entrées par tuyaux et bas de portes. Pièges, colmatage.',
  'le-perreux-sur-marne': 'maisons, garages, sous-sols et combles. Recherche des passages, pièges, colmatage.',
  'bry-sur-marne': 'souris et mulots dans les maisons avec jardin. Pièges sans produit, postes verrouillés.',
  'sucy-en-brie': 'maisons, résidences et commerces. Pièges ou postes sécurisés, fermeture des accès. Devis gratuit.',
  'santeny': 'maisons, dépendances et granges. Pièges ou postes sécurisés, fermeture des accès. Devis gratuit.',
  'maisons-alfort': 'maisons, copropriétés et commerces. Pièges ou postes sécurisés, colmatage des entrées.',
  'joinville-le-pont': 'maisons et copropriétés des bords de Marne. Pièges ou postes sécurisés, colmatage.',
  'paris-12': 'appartements, caves et commerces du 12e. Pièges discrets, postes sécurisés, colmatage. Devis gratuit.',
  'alfortville': 'immeubles et pavillons entre Seine et Marne. Pièges ou postes sécurisés, colmatage. Devis gratuit.',
  'creteil': 'résidences, pavillons et commerces. Pièges ou postes sécurisés, fermeture des accès. Devis gratuit.',
  'ivry-sur-seine': 'immeubles, commerces et logements récents. Pièges ou postes sécurisés, colmatage. Devis gratuit.',
  'saint-maur-des-fosses': 'maisons, garages et sous-sols. Pièges, postes sécurisés, colmatage. Devis gratuit.',
  'fontenay-sous-bois': 'maisons, résidences et bureaux du Val de Fontenay. Pièges, postes sécurisés. Devis gratuit.',
  'vitry-sur-seine': 'pavillons, grands ensembles, caves et locaux poubelles. Pièges, postes, colmatage. Devis gratuit.',
  'champigny-sur-marne': 'garages et sous-sols des pavillons, caves des résidences. Pièges, postes sécurisés, colmatage. Devis gratuit.',
  'villejuif': 'logements, gaines et locaux à déchets des résidences. Traitement coordonné avec le syndic. Devis gratuit.',
  'choisy-le-roi': 'caves, celliers et cuisines, du centre ancien aux bords de Seine. Pièges, colmatage. Devis gratuit.',
  'le-kremlin-bicetre': 'appartements, caves et commerces d\'une commune très dense. Pièges discrets, colmatage. Devis gratuit.',
  'thiais': 'pavillons, commerces et entrepôts. Pièges ou postes sécurisés, contrôle des câbles rongés. Devis gratuit.',
  'cachan': 'placards de cuisine, pavillons et immeubles. Pièges, postes sécurisés et conseils de stockage. Devis gratuit.',
  'villeneuve-saint-georges': 'souris domestiques et mulots, maisons et immeubles. Identification de l\'espèce, pièges, colmatage. Devis gratuit.',
  'l-hay-les-roses': 'pavillons avec jardin, composts et abris. Traitement intérieur et conseils pour le jardin. Devis gratuit.',
  'villiers-sur-marne': 'sous-sols, combles et cloisons. Pose des dispositifs puis contrôle des captures. Devis gratuit.',
  'fresnes': 'résidences et pavillons. Élimination, fermeture des accès et consignes de nettoyage. Devis gratuit.',
  'limeil-brevannes': 'maisons récentes, garages, passages de gaines. Recherche des accès, pièges, colmatage. Devis gratuit.',
  'orly': 'grands ensembles, pavillons, caves. Pièges sur les passages nocturnes, postes sécurisés. Devis gratuit.',
  'arcueil': 'bureaux, immeubles, pavillons. Pièges connectés avec alerte de capture, colmatage. Devis gratuit.',
  'villeneuve-le-roi': 'pavillons, cuisines, celliers et garages. Dispositifs dans chaque pièce touchée, colmatage. Devis gratuit.',
  'le-plessis-trevise': 'maisons avec jardin, foyers avec animaux. Pièges adaptés aux chats, colmatage. Devis gratuit.',
  'chevilly-larue': 'entrepôts, ateliers et pavillons. Postes en périphérie, suivi avec plan des postes. Devis gratuit.',
  'chennevieres-sur-marne': 'maisons des coteaux, sous-sols et jardins. Traitement, retrait des souris mortes, colmatage. Devis gratuit.',
  'gentilly': 'appartements, passages de tuyaux et plinthes. Traitement et colmatage durable. Devis gratuit.',
  'bonneuil-sur-marne': 'bureaux, locaux d\'entreprise, logements. Intervention hors heures de travail, contrat de suivi. Devis gratuit.',
  'boissy-saint-leger': 'pavillons et résidences. Postes verrouillés ou pièges plutôt que produits du commerce. Devis gratuit.',
  'valenton': 'locataires de résidences et pavillons. Traitement du logement et rapport pour le bailleur. Devis gratuit.',
}


// Val-de-Marne par défaut ; Paris passe { code: '75', departement: 'Paris', zoneHref: '/zones/paris' }
type Dep = { code: string; departement: string; zoneHref: string }
const ville = (nom: string, a: string, slug: string, contexte: string[], proches: string[], faq: { q: string; a: string }, dep?: Dep): VilleSouris => ({
  slug,
  nom,
  a,
  code: dep?.code ?? '94',
  departement: dep?.departement ?? 'Val-de-Marne',
  zoneHref: dep?.zoneHref ?? `/zones/val-de-marne/${slug}`,
  // Titre raccourci pour les noms de ville longs (60 caractères au plus)
  title: `Souris ${a} (${dep?.code ?? '94'}) : traitement et prévention`.length > 60 ? `Souris ${a} (${dep?.code ?? '94'}) : traitement` : `Souris ${a} (${dep?.code ?? '94'}) : traitement et prévention`,
  description: ACCROCHES[slug] ? `Souris ${a} : ${ACCROCHES[slug]}` : `Souris ${a} : pièges mécaniques ou connectés, postes sécurisés et colmatage des accès. Techniciens Certibiocide, 7j/7, devis gratuit.`,
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
    'Dans les corps de ferme et les granges, le foin, les graines et les sacs d\'aliments pour animaux nourrissent les souris tout l\'hiver : nous traitons ces dépendances en même temps que la maison, sinon elles servent de réserve.',
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
  ville('Champigny-sur-Marne', 'à Champigny-sur-Marne', 'champigny-sur-marne', [
    'À Champigny-sur-Marne, beaucoup de souris arrivent par les garages et les sous-sols des pavillons, nombreux dans la commune, mais aussi par les caves des grandes résidences. Le premier signe est souvent un sac de croquettes ou de graines percé.',
    'Nous commençons par chercher le passage : bas de porte de garage, fourreaux de câbles, grilles d\'aération. Ensuite, pièges mécaniques ou connectés sur ce couloir, postes sécurisés si la colonie est installée, et colmatage.',
    'Rangez les sacs d\'aliments pour animaux dans des bacs fermés : c\'est la première source de nourriture des souris dans un garage.',
  ], ['Saint-Maur-des-Fossés', 'Villiers-sur-Marne', 'Chennevières-sur-Marne', 'Joinville-le-Pont'],
  { q: 'Des souris dans le garage : ma voiture risque-t-elle quelque chose ?', a: 'Oui, les souris peuvent ronger les câbles et faire leur nid sous le capot, surtout quand la voiture roule peu. Un traitement du garage et la fermeture des accès protègent aussi le véhicule.' }),

  ville('Villejuif', 'à Villejuif', 'villejuif', [
    'À Villejuif, les souris se plaisent dans les immeubles et les résidences, où elles passent d\'un logement à l\'autre par les gaines et les vide-ordures. Un voisin qui en voit, et bientôt tout l\'escalier est concerné.',
    'En résidence, le traitement le plus efficace combine le logement touché et les parties communes : locaux à déchets, caves, gaines. Nous travaillons avec le bailleur ou le syndic et laissons un compte rendu.',
    'Signalez rapidement au gardien ou au syndic : plus le traitement couvre l\'immeuble tôt, moins il dure.',
  ], ['Le Kremlin-Bicêtre', 'Vitry-sur-Seine', 'Cachan', 'Chevilly-Larue'],
  { q: 'Souris dans une résidence : qui doit payer le traitement ?', a: 'Les parties communes relèvent du bailleur ou de la copropriété. Pour le logement, cela dépend du bail et de l\'origine du problème. Nous pouvons établir un devis à transmettre au syndic ou au bailleur.' }),

  ville('Choisy-le-Roi', 'à Choisy-le-Roi', 'choisy-le-roi', [
    'À Choisy-le-Roi, entre le centre ancien, les résidences et les maisons proches de la Seine, les souris s\'installent surtout dans les caves, les celliers et les cuisines.',
    'Le diagnostic distingue souris et rats, car le traitement n\'est pas le même : pour les souris, pièges posés tous les quelques mètres le long des murs, car elles explorent peu loin de leur nid, puis colmatage.',
    'Une cave encombrée de cartons offre un abri idéal : désencombrer facilite le traitement et le repérage des passages.',
  ], ['Vitry-sur-Seine', 'Orly', 'Thiais', 'Villeneuve-le-Roi'],
  { q: 'Une cave humide attire-t-elle les souris ?', a: 'L\'humidité compte moins que l\'abri et la nourriture. Une cave encombrée, avec des denrées ou des cartons, attire bien plus les souris qu\'une cave rangée, même humide.' }),

  ville('Le Kremlin-Bicêtre', 'au Kremlin-Bicêtre', 'le-kremlin-bicetre', [
    'Le Kremlin-Bicêtre, petite commune très dense aux portes de Paris, compte surtout des immeubles : les souris y circulent entre caves, commerces de rez-de-chaussée et appartements.',
    'En appartement, nous plaçons des pièges discrets derrière l\'électroménager et sous l\'évier, puis bouchons les passages autour des tuyaux. Si les souris viennent du commerce en dessous, nous le signalons au syndic.',
    'Les répulsifs à ultrasons vendus en magasin ne remplacent pas un traitement : nous ne les recommandons pas seuls.',
  ], ['Villejuif', 'Gentilly', 'Arcueil', 'Ivry-sur-Seine'],
  { q: 'Les répulsifs à ultrasons sont-ils efficaces contre les souris ?', a: 'Leur efficacité n\'est pas démontrée de façon fiable, et les souris peuvent s\'y habituer. Ils ne règlent pas la cause : il faut supprimer les accès et la nourriture, et piéger.' }),

  ville('Thiais', 'à Thiais', 'thiais', [
    'À Thiais, les souris visitent aussi bien les pavillons que les commerces et les entrepôts proches des grandes zones commerciales. Dans une maison, elles s\'installent souvent dans les doublages et derrière la cuisine équipée.',
    'Nous repérons les traces, posons pièges ou postes sécurisés sur les passages et vérifions les câbles : une souris qui ronge une gaine électrique crée un vrai risque.',
    'Si une prise ou un appareil ne fonctionne plus et que vous trouvez des crottes à côté, faites vérifier l\'installation électrique.',
  ], ['Choisy-le-Roi', 'Orly', 'Chevilly-Larue', 'Vitry-sur-Seine'],
  { q: 'Les souris abîment-elles l\'installation électrique ?', a: 'Oui, elles rongent les gaines et les câbles pour user leurs incisives. Cela peut provoquer des pannes, voire un départ de feu. Il faut traiter vite et faire contrôler les câbles touchés.' }),

  ville('Cachan', 'à Cachan', 'cachan', [
    'À Cachan, commune de pavillons et d\'immeubles, les souris s\'invitent d\'abord dans les placards de cuisine : sachets de céréales, pâtes, farine sont leurs cibles préférées.',
    'Le traitement associe pièges sur les passages, postes sécurisés si besoin et colmatage. Le nettoyage des placards et le stockage en boîtes fermées complètent l\'intervention.',
    'Jetez les aliments entamés par les souris et nettoyez les étagères : les déjections et l\'urine souillent ce qu\'elles touchent.',
  ], ['Arcueil', 'L\'Haÿ-les-Roses', 'Villejuif', 'Fresnes'],
  { q: 'Faut-il jeter les aliments touchés par des souris ?', a: 'Oui, tout aliment entamé ou souillé de déjections doit être jeté. Lavez ensuite les étagères et rangez les denrées dans des boîtes hermétiques.' }),

  ville('Villeneuve-Saint-Georges', 'à Villeneuve-Saint-Georges', 'villeneuve-saint-georges', [
    'À Villeneuve-Saint-Georges, au confluent de la Seine et de l\'Yerres, on rencontre la souris domestique dans les maisons et les immeubles, mais aussi des mulots qui viennent des jardins et des berges.',
    'Identifier l\'espèce change la méthode : le mulot vient de l\'extérieur et se gère surtout en fermant les accès, la souris domestique vit dans le bâti et demande des pièges sur ses passages.',
    'Un mulot a de grandes oreilles, de grands yeux et une longue queue ; la souris domestique est plus grise et plus petite.',
  ], ['Valenton', 'Villeneuve-le-Roi', 'Limeil-Brévannes', 'Choisy-le-Roi'],
  { q: 'Mulot ou souris domestique : comment faire la différence ?', a: 'Le mulot a de grandes oreilles, de gros yeux, une longue queue et saute ; il vit surtout dehors. La souris domestique est plus petite, plus grise, et vit dans les bâtiments.' }),

  ville('L\'Haÿ-les-Roses', 'à L\'Haÿ-les-Roses', 'l-hay-les-roses', [
    'À L\'Haÿ-les-Roses, commune verte et pavillonnaire, les souris passent du jardin à la maison quand le froid arrive : abris de jardin, composts et tas de bois leur servent d\'étape.',
    'Nous traitons l\'intérieur avec des pièges ou des postes sécurisés, et conseillons sur l\'extérieur : éloigner le bois de chauffage des murs, fermer le compost, ranger les graines.',
    'Un tas de bois collé contre la façade est un véritable escalier vers la maison : laissez un espace.',
  ], ['Cachan', 'Fresnes', 'Chevilly-Larue', 'Villejuif'],
  { q: 'Le jardin attire-t-il les souris vers la maison ?', a: 'Oui : composts ouverts, graines pour oiseaux et tas de bois contre les murs leur offrent nourriture et abri tout près de la maison. Quelques rangements réduisent beaucoup le risque.' }),

  ville('Villiers-sur-Marne', 'à Villiers-sur-Marne', 'villiers-sur-marne', [
    'À Villiers-sur-Marne, entre pavillons et résidences, les souris s\'installent dans les sous-sols, les combles et les doublages. On les entend gratter la nuit dans les cloisons.',
    'Un traitement contre les souris demande en général quelques semaines : premier passage pour poser les dispositifs, puis contrôle pour relever les captures et ajuster.',
    'Notez où et quand vous entendez les bruits : cela aide le technicien à trouver plus vite les passages.',
  ], ['Champigny-sur-Marne', 'Le Plessis-Trévise', 'Bry-sur-Marne', 'Chennevières-sur-Marne'],
  { q: 'Combien de temps dure un traitement contre les souris ?', a: 'En général quelques semaines, avec un contrôle après la pose. La durée dépend de l\'infestation et de la fermeture des accès.' }),

  ville('Fresnes', 'à Fresnes', 'fresnes', [
    'À Fresnes, les souris se retrouvent dans les résidences comme dans les pavillons. Leur présence n\'est pas qu\'une gêne : déjections et urine souillent les surfaces et les aliments.',
    'Nous éliminons les souris par pièges ou postes sécurisés, fermons les accès et donnons les consignes de nettoyage : gants, produit ménager désinfectant, pas d\'aspirateur sur des déjections sèches.',
    'Avant de nettoyer des déjections, humidifiez-les pour éviter de soulever des poussières.',
  ], ['L\'Haÿ-les-Roses', 'Cachan', 'Chevilly-Larue', 'Thiais'],
  { q: 'Les souris transmettent-elles des maladies ?', a: 'Elles peuvent contaminer les aliments et les surfaces par leurs déjections et leur urine. D\'où l\'importance de jeter les denrées touchées et de nettoyer avec des gants.' }),

  ville('Limeil-Brévannes', 'à Limeil-Brévannes', 'limeil-brevannes', [
    'À Limeil-Brévannes, les quartiers récents ne sont pas épargnés : les souris entrent dans les maisons neuves par les réservations de gaines, les passages de tuyaux et les garages.',
    'Dans une construction récente, nous vérifions les fourreaux électriques, le tour des canalisations et les joints des portes de garage, puis posons les pièges sur les passages repérés.',
    'Un joint de porte de garage abîmé ou une réservation non rebouchée suffisent : contrôlez-les à l\'automne.',
  ], ['Valenton', 'Boissy-Saint-Léger', 'Villeneuve-Saint-Georges', 'Bonneuil-sur-Marne'],
  { q: 'Une maison neuve peut-elle avoir des souris ?', a: 'Oui. Les passages de gaines et de tuyaux sont parfois mal rebouchés après les travaux, et les souris en profitent dès les premiers froids.' }),

  ville('Orly', 'à Orly', 'orly', [
    'À Orly, entre grands ensembles, pavillons et bords de Seine, les souris sont surtout actives la nuit : bruits dans les plafonds, grignotage dans les placards au petit matin.',
    'Nous plaçons les pièges là où elles circulent la nuit, le long des murs et derrière les meubles, avec des postes sécurisés dans les caves et locaux techniques si besoin.',
    'Ne laissez pas de vaisselle sale ni de restes de repas la nuit : c\'est à ce moment qu\'elles cherchent à manger.',
  ], ['Choisy-le-Roi', 'Villeneuve-le-Roi', 'Thiais', 'Vitry-sur-Seine'],
  { q: 'Pourquoi entend-on les souris surtout la nuit ?', a: 'Elles sont surtout actives la nuit, quand la maison est calme. C\'est à ce moment qu\'elles circulent dans les cloisons et cherchent de la nourriture.' }),

  ville('Arcueil', 'à Arcueil', 'arcueil', [
    'À Arcueil, entre immeubles, bureaux et pavillons, les pièges connectés sont utiles quand le lieu est souvent vide : bureaux, logements loués, résidences secondaires.',
    'Un piège connecté envoie une alerte à chaque capture : on sait tout de suite si les souris sont encore là, sans attendre la visite de contrôle. Nous le combinons avec le colmatage.',
    'Pour un bureau, un suivi régulier évite qu\'une souris ne revienne pendant les congés.',
  ], ['Cachan', 'Gentilly', 'Le Kremlin-Bicêtre', 'Villejuif'],
  { q: 'Comment fonctionnent les pièges connectés ?', a: 'Le piège capture la souris et envoie une alerte. On suit les captures à distance et on intervient au bon moment, ce qui est pratique pour les bureaux et les logements souvent vides.' }),

  ville('Villeneuve-le-Roi', 'à Villeneuve-le-Roi', 'villeneuve-le-roi', [
    'À Villeneuve-le-Roi, commune surtout pavillonnaire au bord de la Seine, les souris occupent souvent plusieurs pièces à la fois : cuisine, cellier, garage.',
    'Nous posons des dispositifs dans chaque pièce où il y a des traces, et non un seul piège au hasard : une souris explore peu loin de son nid, il faut aller sur ses passages.',
    'Plusieurs pièges bien placés valent mieux qu\'un seul mal placé.',
  ], ['Orly', 'Ablon-sur-Seine', 'Choisy-le-Roi', 'Villeneuve-Saint-Georges'],
  { q: 'Faut-il un piège par pièce ?', a: 'Il faut des dispositifs partout où il y a des traces. Les souris se déplacent peu loin de leur nid : un piège à l\'autre bout de la maison ne servira à rien.' }),

  ville('Le Plessis-Trévise', 'au Plessis-Trévise', 'le-plessis-trevise', [
    'Au Plessis-Trévise, commune pavillonnaire et boisée, les souris viennent des jardins et des espaces verts. Beaucoup de foyers ont un chat, mais il ne suffit pas toujours.',
    'Le chat fait fuir ou attrape quelques souris, sans régler l\'accès ni le nid. Nous traitons avec des pièges adaptés aux animaux de compagnie et fermons les passages.',
    'Si vous avez un chat, signalez-le : nous choisissons des dispositifs inaccessibles pour lui.',
  ], ['Villiers-sur-Marne', 'Chennevières-sur-Marne', 'Champigny-sur-Marne', 'Sucy-en-Brie'],
  { q: 'Mon chat ne suffit-il pas contre les souris ?', a: 'Il peut en attraper, mais il ne bouche pas les accès et ne trouve pas le nid. Pour une infestation installée, un traitement et un colmatage restent nécessaires.' }),

  ville('Chevilly-Larue', 'à Chevilly-Larue', 'chevilly-larue', [
    'À Chevilly-Larue, entre pavillons et zones d\'activité, les souris touchent aussi les locaux professionnels : entrepôts, ateliers, réserves de marchandises.',
    'En entrepôt, nous installons des postes sécurisés en périphérie, des pièges près des zones de stockage, et un suivi régulier avec plan des postes et comptes rendus.',
    'Stockez les marchandises sur palettes, à distance des murs : les passages restent visibles et faciles à contrôler.',
  ], ['Thiais', 'Fresnes', 'L\'Haÿ-les-Roses', 'Villejuif'],
  { q: 'Des souris dans un entrepôt : comment protéger la marchandise ?', a: 'Postes sécurisés en périphérie, pièges près des stocks, palettes éloignées des murs et suivi régulier. Un plan des postes et des comptes rendus sont remis à chaque passage.' }),

  ville('Chennevières-sur-Marne', 'à Chennevières-sur-Marne', 'chennevieres-sur-marne', [
    'À Chennevières-sur-Marne, sur les coteaux de la Marne, les maisons avec sous-sol et jardin voient arriver les souris dès les premiers froids.',
    'Après le traitement, il faut parfois retirer des souris mortes : nous expliquons comment le faire sans risque, avec des gants et un sac fermé, et comment nettoyer.',
    'Une odeur persistante peut venir d\'une souris morte dans une cloison : signalez-la au technicien.',
  ], ['Champigny-sur-Marne', 'Le Plessis-Trévise', 'Sucy-en-Brie', 'Ormesson-sur-Marne'],
  { q: 'Que faire d\'une souris morte ?', a: 'Portez des gants, placez-la dans un sac fermé et jetez-le avec les ordures ménagères. Nettoyez ensuite l\'endroit avec un produit ménager désinfectant.' }),

  ville('Gentilly', 'à Gentilly', 'gentilly', [
    'À Gentilly, commune dense aux portes de Paris, les souris passent par les trous autour des tuyaux, sous les éviers et derrière les plinthes. Beaucoup d\'habitants essaient de boucher eux-mêmes.',
    'Pour boucher durablement, on utilise de la laine d\'acier tassée puis un mastic ou un mortier : la mousse expansive seule est rongée. Nous colmatons les passages trouvés après le traitement.',
    'La mousse expansive seule ne suffit pas : les souris la rongent en quelques nuits.',
  ], ['Arcueil', 'Le Kremlin-Bicêtre', 'Cachan', 'Ivry-sur-Seine'],
  { q: 'Peut-on boucher les trous soi-même ?', a: 'Oui pour les petits passages : laine d\'acier tassée puis mastic ou mortier. Évitez la mousse expansive seule, que les souris rongent. Le technicien repère les accès que vous n\'avez pas vus.' }),

  ville('Bonneuil-sur-Marne', 'à Bonneuil-sur-Marne', 'bonneuil-sur-marne', [
    'À Bonneuil-sur-Marne, autour du port et des zones d\'activité, les souris touchent aussi les bureaux et les locaux d\'entreprise, en plus des logements.',
    'Dans des bureaux, nous intervenons en dehors des heures de travail, avec des dispositifs placés hors de vue des salariés, et proposons un contrat de suivi si besoin.',
    'Ne laissez pas de nourriture dans les tiroirs des bureaux : c\'est souvent là que les souris trouvent à manger.',
  ], ['Créteil', 'Saint-Maur-des-Fossés', 'Sucy-en-Brie', 'Valenton'],
  { q: 'Pouvez-vous intervenir en dehors des heures de bureau ?', a: 'Oui, tôt le matin, le soir ou le week-end, pour ne pas gêner l\'activité. Les dispositifs sont discrets et placés hors de vue.' }),

  ville('Boissy-Saint-Léger', 'à Boissy-Saint-Léger', 'boissy-saint-leger', [
    'À Boissy-Saint-Léger, entre pavillons, résidences et espaces boisés, beaucoup de particuliers essaient d\'abord la mort-aux-rats achetée en magasin, souvent sans résultat durable.',
    'Les produits vendus au grand public sont limités et mal placés : les souris en consomment peu, et ils peuvent être atteints par un enfant ou un animal. Nous utilisons des postes verrouillés ou des pièges, avec colmatage.',
    'Si vous avez déjà posé des produits, dites-le au technicien : il les retire et adapte le traitement.',
  ], ['Sucy-en-Brie', 'Limeil-Brévannes', 'Valenton', 'Santeny'],
  { q: 'La mort-aux-rats du commerce marche-t-elle contre les souris ?', a: 'Rarement de façon durable : produits limités, appâts mal placés, accès laissés ouverts. Un traitement professionnel combine dispositifs sécurisés sur les passages et colmatage.' }),

  ville('Valenton', 'à Valenton', 'valenton', [
    'À Valenton, la plupart des demandes viennent de locataires de résidences ou de pavillons qui découvrent des crottes dans la cuisine et ne savent pas à qui s\'adresser.',
    'Nous intervenons dans le logement et, si les souris viennent des parties communes, nous fournissons un rapport à transmettre au bailleur ou au syndic pour traiter l\'immeuble.',
    'Prévenez votre propriétaire ou votre syndic dès les premières traces : le traitement des parties communes leur revient.',
  ], ['Villeneuve-Saint-Georges', 'Limeil-Brévannes', 'Créteil', 'Bonneuil-sur-Marne'],
  { q: 'Locataire : faut-il prévenir le propriétaire ?', a: 'Oui, dès les premières traces. Selon l\'origine, le traitement peut lui revenir, et les parties communes relèvent du bailleur ou du syndic. Nous fournissons un rapport utile pour ces démarches.' }),
]

export function getVilleSouris(slug: string) {
  return VILLES_SOURIS.find((x) => x.slug === slug)
}
