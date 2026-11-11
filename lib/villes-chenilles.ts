// Pages « Chenilles processionnaires à [ville] » (/chenilles-processionnaires/[ville]).
// Communes du 94 les plus pavillonnaires, avec jardins, pins et bois : plateau briard et est, bords de Marne.
// Méthodes annoncées : retrait des nids, écopièges, pièges à phéromones, conseils (pas de Bacillus thuringiensis :
// produit phytosanitaire soumis au Certiphyto, non confirmé).
// Règles CLAUDE.md : pas de chiffre inventé, pas de tiret long, pas de « naturel », « bio », « écologique », « sans danger ».

import type { Ville, VilleServiceConfig } from '@/components/VilleServicePage'

export const GUIDES_CHENILLES: Record<string, string> = {
  'chenilles-processionnaires-cycle-dangers': 'Chenilles processionnaires : cycle de vie et dangers',
  'chenilles-processionnaires-traitement-prevention': 'Chenilles processionnaires : traitements et prévention',
}

export const CONFIG_CHENILLES: VilleServiceConfig = {
  basePath: '/chenilles-processionnaires',
  titre: 'Chenilles processionnaires',
  serviceType: 'Traitement des chenilles processionnaires',
  pilier: { href: '/services/chenilles-processionnaires', label: 'Chenilles processionnaires', lien: 'notre service contre les chenilles processionnaires' },
  enBref: [
    'Allo Nuisible IDF intervient contre les chenilles processionnaires du pin et du chêne chez les particuliers, en copropriété et sur les espaces verts.',
    'Méthodes : retrait et destruction des nids, écopièges sur les troncs, pièges à phéromones contre les papillons, conseils de prévention.',
    'Techniciens équipés contre les poils urticants : combinaison, gants, masque et lunettes.',
    'Calendrier : retrait des nids de la processionnaire du pin en hiver, écopièges avant la descente, phéromones en été.',
    'Devis gratuit, intervention 7j/7 en Île-de-France.',
  ],
  cachettes: {
    titre: 'Où les repérer',
    items: [
      'Nids blancs soyeux au bout des branches de pins',
      'Cèdres et pins isolés bien exposés au soleil',
      'Troncs et grosses branches de chênes',
      'Processions au pied des arbres et sur les allées',
      'Pelouses et massifs où les chenilles s\'enterrent',
      'Vieux nids, encore urticants',
    ],
    signes: 'Signes fréquents : nids en forme de cocon blanc sur les pins en hiver, chenilles en file indienne au sol à la fin de l\'hiver, aiguilles de pin rongées, démangeaisons après un passage au jardin.',
  },
  methodes: [
    { titre: 'Retrait des nids', tag: 'Échenillage', texte: 'Coupe et destruction sécurisée des nids, en hauteur si besoin. Pour la processionnaire du pin, on intervient en hiver, avant que les chenilles ne descendent.', href: '/blog/chenilles-processionnaires-traitement-prevention' },
    { titre: 'Écopièges', tag: 'Sans produit', texte: 'Colliers posés autour du tronc qui guident les chenilles descendant en procession vers un sac où elles restent piégées.' },
    { titre: 'Pièges à phéromones', tag: 'Prévention', texte: 'Posés en été, ils capturent les papillons mâles et réduisent la ponte, donc les chenilles de l\'année suivante.' },
    { titre: 'Conseils et suivi', tag: 'Sur la durée', texte: 'Calendrier d\'intervention, nichoirs à mésanges (grandes consommatrices de chenilles), choix des essences à planter.' },
  ],
  encadre: {
    titre: 'Les bons réflexes en attendant',
    items: [
      'Ne touchez ni les chenilles ni les nids, même vieux.',
      'Tenez les enfants et les animaux éloignés des arbres touchés et des processions.',
      'Ne tondez pas et ne soufflez pas les zones où les chenilles se sont enterrées.',
      'Après un contact : ne vous frottez pas, rincez à l\'eau, changez de vêtements et lavez-les.',
      'Chien ayant léché ou mordillé une chenille : vétérinaire en urgence.',
    ],
  },
  sections: [
    {
      titre: 'Processionnaire du pin ou du chêne ?',
      paras: [
        "Deux espèces sont présentes en Île-de-France. Elles ne vivent pas sur les mêmes arbres et ne se traitent pas au même moment : les reconnaître permet d'intervenir au bon moment.",
      ],
      table: {
        head: ['', 'Processionnaire du pin', 'Processionnaire du chêne'],
        rows: [
          ['Arbres', 'Pins, cèdres', 'Chênes'],
          ['Nids', 'Cocons blancs soyeux au bout des branches, visibles en hiver', 'Nids aplatis sur le tronc et les grosses branches'],
          ['Période à risque', 'Automne et hiver, puis processions à la fin de l\'hiver', 'Printemps et été'],
          ['Quand intervenir', 'Retrait des nids en hiver, écopièges avant la descente', 'Au printemps et en été, sur les nids'],
        ],
      },
    },
    {
      titre: 'Comment fonctionnent les chenilles processionnaires',
      paras: [
        "Pour la processionnaire du pin, les papillons pondent en été sur les aiguilles. Les chenilles se nourrissent ensuite pendant l'automne et l'hiver, et tissent un **nid soyeux** au soleil, au bout des branches. À la fin de l'hiver, elles descendent de l'arbre **en file indienne**, la fameuse procession, pour s'enterrer dans le sol et se transformer.",
        "C'est pendant ces périodes que le risque est le plus fort : les chenilles libèrent leurs **poils urticants** au moindre contact, et le vent les disperse autour des arbres. Pour tout comprendre du cycle, lisez notre guide [cycle de vie et dangers](/blog/chenilles-processionnaires-cycle-dangers).",
      ],
    },
    {
      titre: 'Les dangers pour les enfants et les animaux',
      paras: [
        "Les poils urticants provoquent des **démangeaisons**, des plaques rouges sur la peau, des **irritations des yeux** et parfois une gêne respiratoire. Ils restent actifs longtemps, y compris dans les vieux nids et dans le sol où les chenilles se sont enterrées.",
        "Les **chiens** sont particulièrement exposés : en reniflant ou en léchant une chenille, ils peuvent subir des lésions graves de la langue et de la gueule. C'est une urgence vétérinaire. Les chats et les chevaux peuvent aussi être touchés.",
      ],
    },
    {
      titre: 'Prévenir le retour au jardin',
      paras: [
        "Un traitement ponctuel ne suffit pas toujours : les papillons reviennent pondre chaque été. La prévention repose sur plusieurs gestes complémentaires. Tout est détaillé dans notre guide [traitements et prévention](/blog/chenilles-processionnaires-traitement-prevention).",
      ],
      liste: [
        "**Nichoirs à mésanges** : elles consomment beaucoup de chenilles.",
        "**Pièges à phéromones** chaque été pour limiter la ponte.",
        "**Écopièges** posés chaque hiver avant la descente des chenilles.",
        "**Surveillance** des pins et des chênes en automne et en hiver, pour repérer les nouveaux nids tôt.",
        "**Choix des essences** pour les nouvelles plantations, en évitant d'accumuler pins et cèdres près des zones de jeux.",
      ],
    },
  ],
  protocole: {
    titre: 'Notre intervention contre les chenilles processionnaires',
    etapes: [
      { titre: 'Diagnostic', texte: 'Identification de l\'espèce, repérage des arbres et des nids, évaluation des accès et des zones à sécuriser. Devis gratuit.' },
      { titre: 'Sécurisation', texte: 'Le technicien s\'équipe (combinaison, gants, masque, lunettes) et éloigne enfants et animaux de la zone.' },
      { titre: 'Retrait des nids', texte: 'Coupe des nids, en hauteur si besoin, et destruction sécurisée pour éviter la dispersion des poils.' },
      { titre: 'Pose des pièges', texte: 'Écopièges sur les troncs avant la descente des chenilles, pièges à phéromones en été selon la saison.' },
      { titre: 'Calendrier et conseils', texte: 'Planning d\'intervention pour l\'année suivante et conseils de prévention adaptés à votre jardin.' },
    ],
  },
  publics: {
    titre: 'Particuliers, copropriétés, collectivités',
    cartes: [
      { titre: 'Particuliers', texte: 'Jardins avec pins, cèdres ou chênes : retrait des nids, écopièges et conseils pour protéger enfants et animaux.' },
      { titre: 'Copropriétés', texte: 'Espaces verts de résidence : intervention coordonnée avec le syndic, sécurisation des zones et rapport d\'intervention.' },
      { titre: 'Établissements', texte: 'Écoles, crèches, résidences seniors, entreprises avec espaces verts : intervention planifiée et suivi saisonnier.' },
    ],
  },
  guides: Object.entries(GUIDES_CHENILLES).map(([slug, label]) => ({ href: `/blog/${slug}`, label })),
  sources: [
    { label: 'ANSES, chenilles processionnaires', url: 'https://www.anses.fr/fr/content/chenilles-processionnaires' },
  ],
  maj: '2026-10-31',
  certification: 'Techniciens formés et équipés pour intervenir en sécurité face aux poils urticants.',
  autresTitre: 'Chenilles processionnaires dans d\'autres villes',
}

type Secteur = 'plateau' | 'marne'

const INTRO: Record<Secteur, (a: string) => string> = {
  plateau: (a) => `${a.charAt(0).toUpperCase()}${a.slice(1)}, dans l'est du Val-de-Marne, l'habitat est surtout pavillonnaire, avec de grands jardins, des haies et des bois à proximité. Pins, cèdres et chênes y sont nombreux, et les chenilles processionnaires s'y installent facilement.`,
  marne: (a) => `${a.charAt(0).toUpperCase()}${a.slice(1)}, près des bords de Marne, beaucoup de maisons ont un jardin arboré. Un seul pin ou un seul chêne touché suffit pour que les chenilles se retrouvent sur la pelouse, près des enfants et des animaux.`,
}

const FAQ_SECTEUR: Record<Secteur, { q: string; a: string }> = {
  plateau: { q: 'Les bois voisins peuvent-ils contaminer mon jardin ?', a: 'Oui. Les papillons volent et viennent pondre sur les pins et les chênes des jardins proches. Surveiller vos arbres chaque automne et poser des pièges à phéromones en été limite fortement le risque.' },
  marne: { q: 'Un seul pin dans mon jardin peut-il poser problème ?', a: 'Oui. Un pin isolé et bien exposé au soleil est souvent choisi par la processionnaire du pin. Repérer les nids dès l\'automne permet de les retirer avant la descente des chenilles.' },
}

const FAQ_COMMUNE = (a: string) => [
  { q: `Combien coûte une intervention ${a} ?`, a: 'Le prix dépend du nombre d\'arbres et de nids, de leur hauteur et de l\'accès. Le devis est gratuit et vous le connaissez avant toute intervention.' },
  { q: 'Quand faut-il appeler ?', a: 'Dès que vous voyez des nids sur vos pins en automne ou en hiver, ou sur vos chênes au printemps. Plus on intervient tôt, plus on évite les processions et la dispersion des poils.' },
  { q: 'Mon chien a touché une chenille, que faire ?', a: 'Rincez sa gueule à l\'eau sans frotter et consultez un vétérinaire en urgence : les lésions peuvent être graves.' },
]

export type VilleChenilles = Ville & { title: string }

const ville = (nom: string, a: string, slug: string, secteur: Secteur, local: string, proches: string[]): VilleChenilles => {
  const titres = [
    `Chenilles processionnaires ${a} (94)`,
    `Chenilles processionnaires ${a}`,
  ]
  return {
    slug,
    nom,
    a,
    code: '94',
    departement: 'Val-de-Marne',
    zoneHref: `/zones/val-de-marne/${slug}`,
    title: titres.find((t) => t.length <= 60) ?? titres[1],
    description: `Chenilles processionnaires ${a} : retrait des nids, écopièges et pièges à phéromones sur pins et chênes. Techniciens équipés, devis gratuit.`,
    contexte: [INTRO[secteur](a), local],
    proches,
    faq: [FAQ_SECTEUR[secteur], ...FAQ_COMMUNE(a)],
  }
}

const DEPTS = {
  '78': { departement: 'Yvelines', zoneHref: '/zones/yvelines' },
  '91': { departement: 'Essonne', zoneHref: '/zones/essonne' },
  '77': { departement: 'Seine-et-Marne', zoneHref: '/zones/seine-et-marne' },
  '92': { departement: 'Hauts-de-Seine', zoneHref: '/zones/hauts-de-seine' },
  '94': { departement: 'Val-de-Marne', zoneHref: '' },
} as const

const villeLocale = (nom: string, a: string, slug: string, code: keyof typeof DEPTS, contexte: string[], proches: string[], faq: { q: string; a: string }): VilleChenilles => {
  const d = DEPTS[code]
  const titres = [`Chenilles processionnaires ${a} (${code})`, `Chenilles processionnaires ${a}`]
  return {
    slug,
    nom,
    a,
    code,
    departement: d.departement,
    zoneHref: d.zoneHref || `/zones/val-de-marne/${slug}`,
    title: titres.find((x) => x.length <= 60) ?? titres[1],
    description: `Chenilles processionnaires ${a} : retrait des nids, écopièges et pièges à phéromones sur pins et chênes. Techniciens équipés, devis gratuit.`,
    contexte,
    proches,
    faq: [faq, ...FAQ_COMMUNE(a)],
  }
}

export const VILLES_CHENILLES: VilleChenilles[] = [
  // Est et plateau briard
  ville('Sucy-en-Brie', 'à Sucy-en-Brie', 'sucy-en-brie', 'plateau', 'Entre son centre ancien, ses quartiers pavillonnaires et les bois qui l\'entourent, Sucy-en-Brie compte beaucoup de grands arbres, et donc de nids à surveiller chaque hiver. Les promeneurs du bois de la Grange et du Morbras doivent aussi garder les chiens à distance des processions au printemps. Dans le centre ancien, les vieux jardins clos cachent parfois des pins centenaires dont les nids ne se voient que depuis la rue.', ['Boissy-Saint-Léger', 'Noiseau', 'Ormesson-sur-Marne', 'Chennevières-sur-Marne']),
  ville('Boissy-Saint-Léger', 'à Boissy-Saint-Léger', 'boissy-saint-leger', 'plateau', 'À Boissy-Saint-Léger, les jardins et espaces verts proches des bois sont exposés chaque année : les papillons viennent pondre sur les pins et les chênes des propriétés voisines.', ['Sucy-en-Brie', 'Limeil-Brévannes', 'Villecresnes', 'Marolles-en-Brie']),
  ville('Limeil-Brévannes', 'à Limeil-Brévannes', 'limeil-brevannes', 'plateau', 'À Limeil-Brévannes, maisons avec jardin et résidences entourées d\'espaces verts demandent une surveillance des pins et des chênes, surtout près des aires de jeux. Les écoles et crèches de la commune sont prioritaires : un nid repéré près d\'une cour de récréation doit être retiré sans attendre.', ['Boissy-Saint-Léger', 'Valenton', 'Villecresnes', 'Sucy-en-Brie']),
  ville('Villecresnes', 'à Villecresnes', 'villecresnes', 'plateau', 'À Villecresnes, l\'habitat pavillonnaire et les bois proches favorisent l\'installation des chenilles dans les jardins, sur les pins comme sur les chênes.', ['Santeny', 'Mandres-les-Roses', 'Marolles-en-Brie', 'Boissy-Saint-Léger']),
  ville('Santeny', 'à Santeny', 'santeny', 'plateau', 'À Santeny, village entouré de champs et de bois, les grandes propriétés arborées sont particulièrement concernées par les deux espèces de processionnaires.', ['Villecresnes', 'Marolles-en-Brie', 'Mandres-les-Roses', 'Périgny']),
  ville('Mandres-les-Roses', 'à Mandres-les-Roses', 'mandres-les-roses', 'plateau', 'À Mandres-les-Roses, les jardins et les arbres isolés bien exposés au soleil sont les premiers choisis par la processionnaire du pin pour installer ses nids.', ['Périgny', 'Santeny', 'Villecresnes', 'Marolles-en-Brie']),
  ville('Périgny', 'à Périgny', 'perigny', 'plateau', 'À Périgny, petite commune aux grands jardins, quelques pins ou chênes touchés suffisent pour que les chenilles se retrouvent sur les pelouses à la fin de l\'hiver.', ['Mandres-les-Roses', 'Santeny', 'Villecresnes', 'Marolles-en-Brie']),
  ville('Marolles-en-Brie', 'à Marolles-en-Brie', 'marolles-en-brie', 'plateau', 'À Marolles-en-Brie, maisons avec jardin et bois voisins forment un terrain favorable : surveiller ses arbres dès l\'automne permet d\'agir avant les processions.', ['Santeny', 'Villecresnes', 'Boissy-Saint-Léger', 'Mandres-les-Roses']),
  ville('Noiseau', 'à Noiseau', 'noiseau', 'plateau', 'À Noiseau, entouré de bois et de champs, les chenilles processionnaires du chêne comme du pin peuvent toucher les jardins proches des lisières.', ['La Queue-en-Brie', 'Ormesson-sur-Marne', 'Sucy-en-Brie', 'Chennevières-sur-Marne']),
  ville('La Queue-en-Brie', 'à La Queue-en-Brie', 'la-queue-en-brie', 'plateau', 'À La Queue-en-Brie, les quartiers pavillonnaires proches des bois sont régulièrement concernés, avec des nids sur les pins des jardins et sur les chênes des lisières.', ['Noiseau', 'Le Plessis-Trévise', 'Ormesson-sur-Marne', 'Chennevières-sur-Marne']),
  ville('Ormesson-sur-Marne', 'à Ormesson-sur-Marne', 'ormesson-sur-marne', 'plateau', 'À Ormesson-sur-Marne, les jardins arborés et les espaces verts demandent une vigilance chaque hiver, quand les nids deviennent bien visibles sur les pins. Sur les coteaux qui dominent la Marne, les grands parcs de propriétés anciennes comptent souvent des chênes, à surveiller dès le mois de mai.', ['Chennevières-sur-Marne', 'Noiseau', 'Sucy-en-Brie', 'La Queue-en-Brie']),
  ville('Le Plessis-Trévise', 'au Plessis-Trévise', 'le-plessis-trevise', 'plateau', 'Au Plessis-Trévise, commune très pavillonnaire et boisée, de nombreux jardins comptent des pins et des chênes à surveiller chaque saison.', ['La Queue-en-Brie', 'Chennevières-sur-Marne', 'Villiers-sur-Marne', 'Noiseau']),
  ville('Villiers-sur-Marne', 'à Villiers-sur-Marne', 'villiers-sur-marne', 'plateau', 'À Villiers-sur-Marne, les quartiers pavillonnaires et les espaces verts sont exposés aux chenilles, en particulier près des pins isolés et des chênes. Avec l\'arrivée du Grand Paris Express, de nouveaux chantiers et aménagements paysagers voient le jour : les arbres nouvellement plantés méritent aussi d\'être surveillés. Près du bois Saint-Martin, à la limite de la commune, les promeneurs croisent parfois des processions au printemps.', ['Le Plessis-Trévise', 'Champigny-sur-Marne', 'Bry-sur-Marne', 'Chennevières-sur-Marne']),
  // Bords de Marne
  ville('Saint-Maur-des-Fossés', 'à Saint-Maur-des-Fossés', 'saint-maur-des-fosses', 'marne', 'Saint-Maur-des-Fossés, très pavillonnaire, compte un très grand nombre de jardins : pins, cèdres et chênes y sont fréquents, et les nids apparaissent chaque hiver dans plusieurs quartiers.', ['Créteil', 'Joinville-le-Pont', 'Champigny-sur-Marne', 'Chennevières-sur-Marne']),
  ville('Le Perreux-sur-Marne', 'au Perreux-sur-Marne', 'le-perreux-sur-marne', 'marne', 'Au Perreux-sur-Marne, les maisons avec jardin et les arbres d\'alignement offrent aux chenilles de nombreux pins et chênes où s\'installer.', ['Nogent-sur-Marne', 'Bry-sur-Marne', 'Champigny-sur-Marne']),
  ville('Bry-sur-Marne', 'à Bry-sur-Marne', 'bry-sur-marne', 'marne', 'À Bry-sur-Marne, commune résidentielle aux jardins arborés, les familles avec enfants et animaux sont particulièrement attentives aux processions sur les pelouses.', ['Le Perreux-sur-Marne', 'Champigny-sur-Marne', 'Villiers-sur-Marne', 'Nogent-sur-Marne']),
  ville('Chennevières-sur-Marne', 'à Chennevières-sur-Marne', 'chennevieres-sur-marne', 'marne', 'À Chennevières-sur-Marne, entre bords de Marne et quartiers pavillonnaires, les jardins arborés et les coteaux sont exposés aux deux espèces de processionnaires.', ['Ormesson-sur-Marne', 'Champigny-sur-Marne', 'Saint-Maur-des-Fossés', 'Sucy-en-Brie']),
  ville('Champigny-sur-Marne', 'à Champigny-sur-Marne', 'champigny-sur-marne', 'marne', 'À Champigny-sur-Marne, les nombreux pavillons avec jardin et les espaces verts au bord de la Marne demandent une surveillance des pins et des chênes.', ['Bry-sur-Marne', 'Chennevières-sur-Marne', 'Saint-Maur-des-Fossés', 'Villiers-sur-Marne']),
  ville('Nogent-sur-Marne', 'à Nogent-sur-Marne', 'nogent-sur-marne', 'marne', 'À Nogent-sur-Marne, entre le Bois de Vincennes et la Marne, les jardins et résidences arborés peuvent accueillir des nids, notamment sur les chênes et les pins isolés.', ['Le Perreux-sur-Marne', 'Fontenay-sous-Bois', 'Joinville-le-Pont', 'Bry-sur-Marne']),

  // Ouest parisien et Bois de Vincennes (31/10/2026) : communes aisées et très arborées
  villeLocale('Saint-Germain-en-Laye', 'à Saint-Germain-en-Laye', 'saint-germain-en-laye', '78', [
    'Saint-Germain-en-Laye est bordée par sa grande forêt domaniale, et la carte forestière de l\'IGN (BD Forêt) y recense environ 67 hectares de forêt de pin sylvestre : c\'est l\'une des communes de l\'ouest parisien les plus exposées à la processionnaire du pin. Les chênes, très nombreux dans la forêt, accueillent aussi la processionnaire du chêne.',
    'Les propriétés en lisière, les villas aux grands jardins et les résidences arborées reçoivent chaque année des papillons venus de la forêt. Les nids apparaissent en hiver au bout des branches des pins, puis les chenilles descendent en procession vers les pelouses et les allées.',
  ], ['Le Pecq', 'Maisons-Laffitte', 'Le Vésinet', 'Mareil-Marly', 'Chambourcy'],
  { q: 'La forêt de Saint-Germain fait-elle venir les chenilles dans mon jardin ?', a: 'Oui. Les papillons sortent en été et volent vers les pins et les chênes bien exposés des jardins proches pour pondre. Les maisons en lisière doivent inspecter leurs arbres chaque automne, et poser des écopièges avant la descente des chenilles.' }),
  villeLocale('Versailles', 'à Versailles', 'versailles', '78', [
    'À Versailles, les grandes avenues plantées, les jardins des quartiers de Montreuil, Clagny-Glatigny ou Porchefontaine et les résidences entourées d\'espaces verts offrent de nombreux pins, cèdres et chênes où les processionnaires s\'installent.',
    'Nous intervenons chez les particuliers, en copropriété et pour les établissements (écoles, résidences seniors, entreprises). Les arbres des voies publiques et du domaine national relèvent de leurs gestionnaires : en cas de nids sur un arbre de rue, prévenez la mairie.',
  ], ['Le Chesnay-Rocquencourt', 'Viroflay', 'Buc', 'Saint-Cyr-l\'École', 'Jouy-en-Josas'],
  { q: 'Un nid est sur un arbre de la rue devant chez moi : qui doit intervenir ?', a: 'Pour un arbre de voirie ou d\'un espace public, c\'est le gestionnaire (mairie, département ou domaine) qui intervient : signalez-le. Pour un arbre de votre jardin ou de votre copropriété, c\'est au propriétaire ou au syndic de faire traiter.' }),
  villeLocale('Le Vésinet', 'au Vésinet', 'le-vesinet', '78', [
    'Ville-parc dessinée autour de pelouses, de lacs et de grandes propriétés, Le Vésinet compte une densité d\'arbres remarquable, avec beaucoup de pins et de cèdres dans les jardins. C\'est un terrain idéal pour la processionnaire du pin.',
    'Sur les grandes pelouses et les allées, les processions de fin d\'hiver passent souvent par les zones de jeux et de promenade. Les familles avec enfants et chiens ont intérêt à faire retirer les nids dès qu\'ils sont visibles, en hiver.',
  ], ['Chatou', 'Croissy-sur-Seine', 'Le Pecq', 'Montesson'],
  { q: 'Les chenilles sont-elles dangereuses pour mon chien ?', a: 'Oui, très. Un chien qui lèche ou mord une chenille peut avoir une langue gravement abîmée. Rincez sa gueule à l\'eau sans frotter et allez chez le vétérinaire en urgence. Au jardin, gardez-le loin des pieds de pins de février à avril.' }),
  villeLocale('Maisons-Laffitte', 'à Maisons-Laffitte', 'maisons-laffitte', '78', [
    'À Maisons-Laffitte, le parc, ses avenues bordées d\'arbres et la forêt de Saint-Germain toute proche forment un grand ensemble boisé. Pins et chênes y accueillent les deux espèces de processionnaires.',
    'La ville est aussi la cité du cheval, avec ses écuries et ses pistes d\'entraînement. Les poils urticants des chenilles irritent la peau, les yeux et la bouche des animaux : autour des écuries et des paddocks, les nids doivent être repérés et retirés tôt.',
  ], ['Le Mesnil-le-Roi', 'Sartrouville', 'Saint-Germain-en-Laye', 'Le Pecq'],
  { q: 'Les chenilles processionnaires sont-elles dangereuses pour les chevaux ?', a: 'Oui. Leurs poils urticants peuvent provoquer des réactions sur la peau, les yeux et la bouche des chevaux, notamment s\'ils broutent près d\'une procession ou d\'un nid tombé. Retirez les nids proches des paddocks et appelez le vétérinaire en cas de réaction.' }),
  villeLocale('Neuilly-sur-Seine', 'à Neuilly-sur-Seine', 'neuilly-sur-seine', '92', [
    'Neuilly-sur-Seine touche le Bois de Boulogne, et ses hôtels particuliers, villas et résidences ont souvent des jardins arborés. Pins et cèdres y sont fréquents : un seul arbre bien exposé peut suffire à la processionnaire du pin.',
    'En copropriété, les nids se trouvent souvent dans les jardins intérieurs, au-dessus des allées ou près des aires de jeux. Nous intervenons discrètement, avec un compte rendu pour le syndic.',
  ], ['Levallois-Perret', 'Courbevoie', 'Puteaux', 'Boulogne-Billancourt', 'Paris 16e'],
  { q: 'Il y a des nids dans le jardin de ma copropriété : qui doit agir ?', a: 'Le jardin commun relève du syndicat des copropriétaires : prévenez le syndic, qui fait intervenir un professionnel. Si l\'arbre est sur une partie privative, c\'est au copropriétaire concerné de le faire traiter.' }),
  villeLocale('Saint-Cloud', 'à Saint-Cloud', 'saint-cloud', '92', [
    'Saint-Cloud s\'étage sur ses coteaux face à la Seine, entre le grand parc du domaine national et des quartiers de villas comme Montretout. Les jardins en pente, riches en grands arbres, accueillent pins et chênes.',
    'Avec le parc tout proche, les papillons de la processionnaire du chêne trouvent facilement de quoi pondre au printemps. Sur les chênes, les nids sont aplatis contre le tronc et les grosses branches : ils se voient moins que ceux du pin, mais sont tout aussi urticants.',
  ], ['Sèvres', 'Garches', 'Suresnes', 'Boulogne-Billancourt', 'Ville-d\'Avray'],
  { q: 'Comment reconnaître la processionnaire du chêne ?', a: 'Ses nids sont plaqués contre le tronc ou les grosses branches des chênes, au printemps et en été, et non en boule au bout des branches comme sur les pins. Les chenilles se déplacent en groupe sur le tronc. Ne vous approchez pas : leurs poils sont très urticants.' }),
  villeLocale('Sceaux', 'à Sceaux', 'sceaux', '92', [
    'Sceaux est une ville verte, autour de son grand parc départemental, avec beaucoup de maisons et de jardins arborés. Les cèdres et les pins des propriétés privées sont les premiers choisis par la processionnaire du pin.',
    'Les écoles, crèches et résidences de la ville demandent une attention particulière à la fin de l\'hiver, quand les chenilles descendent : une procession qui traverse une cour ou un jardin d\'enfants doit être signalée et traitée rapidement.',
  ], ['Bourg-la-Reine', 'Fontenay-aux-Roses', 'Châtenay-Malabry', 'Antony', 'Le Plessis-Robinson'],
  { q: 'Une école ou une crèche peut-elle vous faire intervenir ?', a: 'Oui. Nous intervenons pour les établissements recevant des enfants, en dehors des heures de présence si besoin, avec retrait des nids et pose d\'écopièges. Un compte rendu est remis au gestionnaire.' }),
  villeLocale('Rueil-Malmaison', 'à Rueil-Malmaison', 'rueil-malmaison', '92', [
    'Rueil-Malmaison associe de grands quartiers pavillonnaires, le parc du Bois-Préau et la forêt domaniale de la Malmaison sur les hauteurs de Buzenval. Pins et chênes sont nombreux dans les jardins proches des bois.',
    'Les maisons en lisière de forêt voient arriver les papillons chaque été. Inspecter ses pins à l\'automne et poser des écopièges sur les troncs avant la fin de l\'hiver évite que les chenilles ne descendent sur la pelouse.',
  ], ['Nanterre', 'Suresnes', 'Bougival', 'Garches', 'Chatou'],
  { q: 'Quand poser un écopiège sur mon pin ?', a: 'Avant la descente des chenilles, donc en hiver, idéalement dès que les nids sont repérés. L\'écopiège entoure le tronc et capture les chenilles quand elles descendent pour s\'enterrer, à la fin de l\'hiver ou au début du printemps selon la météo.' }),
  villeLocale('Meudon', 'à Meudon', 'meudon', '92', [
    'Meudon est l\'une des villes les plus boisées des Hauts-de-Seine, avec sa grande forêt domaniale, majoritairement plantée de chênes. De Bellevue à Meudon-la-Forêt, de nombreux jardins touchent la forêt.',
    'La processionnaire du chêne y est la plus à craindre, au printemps et en été. Les pins et cèdres des jardins peuvent aussi porter des nids de la processionnaire du pin en hiver. Sur les sentiers et aux abords des maisons, mieux vaut ne jamais toucher un nid tombé : il reste urticant.',
  ], ['Issy-les-Moulineaux', 'Sèvres', 'Clamart', 'Chaville', 'Vélizy-Villacoublay'],
  { q: 'Un vieux nid tombé au sol est-il encore dangereux ?', a: 'Oui. Les poils urticants restent actifs longtemps dans les nids, même vides. Ne le ramassez pas à mains nues et ne le balayez pas : cela disperse les poils. Faites-le retirer par un professionnel équipé.' }),
  villeLocale('Vincennes', 'à Vincennes', 'vincennes', '94', [
    'Vincennes est une ville dense, mais collée au Bois de Vincennes, avec des jardins de copropriété, des cours plantées et des squares. Pins et chênes du bois et des jardins proches peuvent accueillir des nids.',
    'En ville, le risque concerne surtout les cours d\'immeubles, les squares et les jardins d\'écoles, où enfants et chiens passent tous les jours. Un seul nid sur un arbre de cour suffit à disperser des poils urticants sur les allées.',
  ], ['Saint-Mandé', 'Fontenay-sous-Bois', 'Montreuil', 'Nogent-sur-Marne'],
  { q: 'Peut-on avoir des chenilles processionnaires en ville ?', a: 'Oui, dès qu\'il y a des pins ou des chênes : cours d\'immeubles, squares, jardins de copropriété. La proximité du Bois de Vincennes augmente le risque. Nous intervenons même dans les petits espaces, avec retrait des nids et écopièges.' }),
  villeLocale('Saint-Mandé', 'à Saint-Mandé', 'saint-mande', '94', [
    'Saint-Mandé, petite ville résidentielle aux portes de Paris, borde le Bois de Vincennes et le lac de Saint-Mandé. Les résidences arborées et les jardins proches du bois sont les plus concernés par les processionnaires.',
    'Les arbres du bois et des espaces publics relèvent de leurs gestionnaires. Dans les jardins privés et de copropriété, nous retirons les nids et posons des écopièges, en prévenant le syndic si besoin.',
  ], ['Vincennes', 'Saint-Maurice', 'Charenton-le-Pont', 'Paris 12e'],
  { q: 'Que faire si je vois une procession sur un trottoir près du Bois ?', a: 'Ne la touchez pas, éloignez enfants et chiens, et signalez-la à la mairie si elle est sur l\'espace public. Si les chenilles viennent d\'un arbre de votre résidence, faites retirer les nids et poser un écopiège sur le tronc.' }),
  // ── Essonne, Seine-et-Marne, Yvelines (11/11/2026) ──
  villeLocale("Évry-Courcouronnes", "à Évry-Courcouronnes", 'evry-courcouronnes', '91', [
    "Évry-Courcouronnes compte de nombreux espaces verts, parcs urbains et résidences entourées de pelouses plantées de pins et de cèdres. Ces arbres d'ornement, souvent bien exposés, attirent les papillons de la processionnaire du pin qui y pondent en été.",
    "Dans les résidences et les copropriétés, nous intervenons à la demande du bailleur ou du syndic, avec balisage de la zone et retrait des nids en hauteur. Les écoles et les crèches font l'objet d'une attention particulière.",
  ], ["Ris-Orangis", "Corbeil-Essonnes", "Lisses", "Bondoufle"],
  { q: "Qui doit retirer les nids dans le parc d'une résidence à Évry ?", a: "Sur un terrain privé, c'est au propriétaire ou à la copropriété, par le syndic. Pour un arbre de l'espace public, signalez-le à la mairie." }),
  villeLocale("Corbeil-Essonnes", "à Corbeil-Essonnes", 'corbeil-essonnes', '91', [
    "Corbeil-Essonnes mêle quartiers pavillonnaires, coteaux boisés le long de la Seine et de l'Essonne, et grands parcs. Pins et chênes y sont fréquents dans les jardins et sur les talus.",
    "Au printemps, les processions au sol inquiètent surtout les familles avec enfants et chiens. Nous retirons les nids en hiver et posons des colliers pièges avant la descente des chenilles.",
  ], ["Évry-Courcouronnes", "Saint-Germain-lès-Corbeil", "Villabé", "Le Coudray-Montceaux"],
  { q: "Quand poser un collier piège à Corbeil-Essonnes ?", a: "Avant la descente des chenilles du pin, en fin d'hiver. Le collier intercepte les processions sur le tronc et les guide dans un sac." }),
  villeLocale("Massy", "à Massy", 'massy', '91', [
    "Massy compte des quartiers pavillonnaires plantés et de grands parcs, avec des pins noirs et des cèdres d'ornement dans de nombreux jardins. Ce sont les arbres préférés de la processionnaire du pin.",
    "Dans les résidences récentes du quartier Atlantis comme dans les jardins plus anciens, nous intervenons à la perche télescopique, sans abîmer l'arbre.",
  ], ["Palaiseau", "Antony", "Wissous", "Chilly-Mazarin"],
  { q: "Peut-on traiter un pin sans le couper à Massy ?", a: "Oui. Les nids sont coupés au bout des branches, à la perche, sans abattre l'arbre. Un collier piège protège ensuite le tronc." }),
  villeLocale("Savigny-sur-Orge", "à Savigny-sur-Orge", 'savigny-sur-orge', '91', [
    "Savigny-sur-Orge, ville très verte de la vallée de l'Orge, compte beaucoup de jardins avec pins, cèdres et chênes, ainsi que des berges boisées. Les processionnaires du pin et du chêne y sont toutes deux présentes.",
    "Les nids blancs des pins se repèrent en hiver ; ceux du chêne, plaqués contre le tronc, apparaissent au printemps. Nous adaptons le calendrier à chaque espèce.",
  ], ["Viry-Châtillon", "Morsang-sur-Orge", "Juvisy-sur-Orge", "Épinay-sur-Orge"],
  { q: "Comment distinguer la processionnaire du pin et celle du chêne à Savigny ?", a: "Celle du pin fait des nids blancs en boule au bout des branches, visibles en hiver. Celle du chêne tisse des nids plaqués contre le tronc, au printemps." }),
  villeLocale("Palaiseau", "à Palaiseau", 'palaiseau', '91', [
    "Palaiseau, entre la vallée de l'Yvette et le plateau de Saclay, est entourée de bois et de grands espaces verts. Les chênes y sont nombreux, et les pins d'ornement fréquents dans les jardins des quartiers pavillonnaires.",
    "Sur le plateau, les campus et résidences étudiantes ont de grands espaces plantés : nous intervenons pour les gestionnaires avec balisage et rapport.",
  ], ["Massy", "Orsay", "Igny", "Villebon-sur-Yvette"],
  { q: "Les chênes de Palaiseau sont-ils concernés par la processionnaire ?", a: "Oui, la processionnaire du chêne existe en Île-de-France. Ses nids, contre le tronc, sont plus discrets : signalez tout nid soyeux avec des poils au printemps." }),
  villeLocale("Athis-Mons", "à Athis-Mons", 'athis-mons', '91', [
    "Athis-Mons s'étage de la Seine jusqu'au plateau, avec des jardins en coteau, des parcs et des talus boisés. Pins et cèdres plantés dans les propriétés sont les premiers touchés.",
    "Nous retirons les nids en hiver, avant la descente des chenilles, et posons des pièges à phéromones l'été pour réduire les nids de l'année suivante.",
  ], ["Paray-Vieille-Poste", "Juvisy-sur-Orge", "Morangis", "Ablon-sur-Seine"],
  { q: "Les pièges à phéromones suffisent-ils à Athis-Mons ?", a: "Non, seuls ils ne suffisent pas : ils réduisent les pontes, mais il faut aussi retirer les nids existants en hiver." }),
  villeLocale("Sainte-Geneviève-des-Bois", "à Sainte-Geneviève-des-Bois", 'sainte-genevieve-des-bois', '91', [
    "Sainte-Geneviève-des-Bois porte bien son nom : bois, parcs et grands jardins entourent les quartiers pavillonnaires. Pins et chênes y sont nombreux, et les processionnaires reviennent chaque année si rien n'est fait.",
    "Les propriétés en lisière de bois reçoivent les papillons venus des espaces boisés : un suivi sur plusieurs saisons est la meilleure stratégie.",
  ], ["Saint-Michel-sur-Orge", "Fleury-Mérogis", "Morsang-sur-Orge", "Villemoisson-sur-Orge"],
  { q: "Pourquoi les chenilles reviennent-elles chaque année à Sainte-Geneviève ?", a: "Les papillons des bois voisins pondent dans les jardins chaque été. Retirer les nids, poser des pièges et des nichoirs à mésanges réduit les infestations d'une année sur l'autre." }),
  villeLocale("Vigneux-sur-Seine", "à Vigneux-sur-Seine", 'vigneux-sur-seine', '91', [
    "Vigneux-sur-Seine borde la forêt de Sénart, massif boisé où pins et chênes sont présents. Les jardins proches de la forêt reçoivent les papillons chaque été.",
    "Autour des lacs et dans les quartiers pavillonnaires, nous intervenons chez les particuliers comme dans les résidences, avec retrait des nids et colliers pièges.",
  ], ["Draveil", "Montgeron", "Athis-Mons", "Juvisy-sur-Orge"],
  { q: "La forêt de Sénart fait-elle venir les chenilles à Vigneux ?", a: "Les papillons volent vers les arbres bien exposés des jardins proches pour pondre. Les maisons en lisière doivent surveiller leurs pins et leurs chênes chaque hiver." }),
  villeLocale("Ris-Orangis", "à Ris-Orangis", 'ris-orangis', '91', [
    "Ris-Orangis compte des parcs, des bois et des quartiers pavillonnaires plantés de pins et de cèdres. Les résidences entourées d'espaces verts sont aussi concernées.",
    "Nous intervenons dans les jardins, les copropriétés et les établissements scolaires, en dehors des heures de passage, avec balisage de la zone.",
  ], ["Évry-Courcouronnes", "Grigny", "Draveil", "Bondoufle"],
  { q: "Une école de Ris-Orangis peut-elle faire retirer des nids rapidement ?", a: "Oui, nous intervenons en priorité près des écoles et des crèches, en dehors des heures de classe, avec un rapport pour l'établissement." }),
  villeLocale("Viry-Châtillon", "à Viry-Châtillon", 'viry-chatillon', '91', [
    "Viry-Châtillon, entre ses lacs, l'Orge et la Seine, compte de nombreux jardins arborés et des berges plantées. Les pins d'ornement des pavillons y sont régulièrement colonisés.",
    "Les promenades autour des lacs sont fréquentées par les familles et les chiens : un nid repéré près d'un chemin doit être signalé rapidement.",
  ], ["Grigny", "Savigny-sur-Orge", "Juvisy-sur-Orge", "Morsang-sur-Orge"],
  { q: "J'ai vu une procession près des lacs de Viry : que faire ?", a: "Éloignez enfants et chiens, ne touchez pas les chenilles et signalez-le à la mairie si c'est sur l'espace public. Pour votre jardin, appelez-nous." }),
  villeLocale("Meaux", "à Meaux", 'meaux', '77', [
    "Meaux, entourée de bois et de terres agricoles, compte des quartiers pavillonnaires et des parcs plantés de pins et de chênes. Les processionnaires y sont présentes, surtout dans les jardins exposés au sud.",
    "Nous intervenons en Seine-et-Marne pour les particuliers, les copropriétés et les établissements, avec perche télescopique et tenue de protection.",
  ], ["Trilport", "Nanteuil-lès-Meaux", "Chauconin-Neufmontiers", "Mareuil-lès-Meaux"],
  { q: "Intervenez-vous jusqu'à Meaux pour les chenilles ?", a: "Oui. Appelez le 07 68 07 72 19 avec une photo des nids : nous vous donnons un prix et une date d'intervention." }),
  villeLocale("Chelles", "à Chelles", 'chelles', '77', [
    "Chelles s'étend jusqu'à la montagne de Chelles, colline boisée, et compte beaucoup de pavillons avec jardin. Pins et chênes y sont nombreux.",
    "Les chiens qui se promènent sur les chemins boisés sont particulièrement exposés : les poils urticants peuvent provoquer de graves lésions de la langue.",
  ], ["Vaires-sur-Marne", "Gagny", "Montfermeil", "Brou-sur-Chantereine"],
  { q: "Mon chien a reniflé une chenille à Chelles : que faire ?", a: "Rincez sa gueule à l'eau sans frotter et consultez un vétérinaire en urgence. Les poils peuvent provoquer une nécrose de la langue." }),
  villeLocale("Melun", "à Melun", 'melun', '77', [
    "Melun, aux portes de la forêt de Fontainebleau, connue pour ses pins, compte de nombreux jardins et parcs plantés. Les papillons de la processionnaire y trouvent facilement des arbres où pondre.",
    "Nous intervenons chez les particuliers, en copropriété et pour les établissements publics, avec un calendrier adapté : retrait en hiver, pièges en été.",
  ], ["Dammarie-lès-Lys", "Le Mée-sur-Seine", "Vaux-le-Pénil", "Rubelles"],
  { q: "La forêt de Fontainebleau favorise-t-elle les chenilles à Melun ?", a: "Les grands massifs de pins sont favorables à la processionnaire du pin, dont les papillons rejoignent les jardins voisins. Une surveillance chaque hiver est recommandée." }),
  villeLocale("Pontault-Combault", "à Pontault-Combault", 'pontault-combault', '77', [
    "Pontault-Combault compte de grands quartiers pavillonnaires et des bois à proximité. Les pins et cèdres d'ornement de nombreux jardins attirent la processionnaire.",
    "Nous retirons les nids à la perche, sans élagage inutile, et posons des colliers pièges sur les pins isolés proches des passages.",
  ], ["Roissy-en-Brie", "Émerainville", "Ozoir-la-Ferrière", "Le Plessis-Trévise"],
  { q: "Faut-il couper mon pin pour me débarrasser des chenilles ?", a: "Non. Le retrait des nids chaque hiver, un collier piège et des pièges à phéromones suffisent dans la plupart des cas." }),
  villeLocale("Savigny-le-Temple", "à Savigny-le-Temple", 'savigny-le-temple', '77', [
    "Savigny-le-Temple, ville de Sénart, est bordée de bois et compte des quartiers récents plantés d'arbres d'ornement. Les jeunes pins des résidences sont parfois colonisés dès leurs premières années.",
    "Nous intervenons pour les particuliers, les copropriétés et les gestionnaires d'espaces verts, avec rapport d'intervention.",
    'Au printemps, les familles qui se promènent vers les bois de Sénart avec leurs enfants et leurs chiens doivent rester vigilantes : une procession au sol se reconnaît à la file de chenilles qui avancent les unes derrière les autres.',
  ], ["Cesson", "Nandy", "Vert-Saint-Denis", "Saint-Pierre-du-Perray"],
  { q: "Un jeune pin peut-il déjà avoir des nids ?", a: "Oui, les processionnaires colonisent aussi les arbres jeunes et bien exposés. Les nids se repèrent facilement en hiver, au bout des branches." }),
  villeLocale("Bussy-Saint-Georges", "à Bussy-Saint-Georges", 'bussy-saint-georges', '77', [
    "Bussy-Saint-Georges compte de nombreux espaces verts, des alignements d'arbres et des jardins récents. Pins et chênes plantés dans les quartiers neufs peuvent accueillir la processionnaire.",
    "Nous intervenons pour les copropriétés et les particuliers, avec balisage de la zone pendant le retrait des nids.",
  ], ["Bussy-Saint-Martin", "Collégien", "Montévrain", "Jossigny"],
  { q: "Une copropriété de Bussy peut-elle avoir un suivi annuel ?", a: "Oui : retrait des nids en hiver, pose de pièges en été et rapport au syndic à chaque passage." }),
  villeLocale("Champs-sur-Marne", "à Champs-sur-Marne", 'champs-sur-marne', '77', [
    "Champs-sur-Marne compte le grand parc du château, des bords de Marne boisés et des quartiers pavillonnaires. Pins, cèdres et chênes y sont nombreux.",
    "Sur la cité Descartes, les espaces verts des établissements et des résidences étudiantes sont aussi concernés : nous intervenons pour les gestionnaires.",
  ], ["Noisiel", "Torcy", "Noisy-le-Grand", "Émerainville"],
  { q: "Les étudiants de la cité Descartes sont-ils exposés aux chenilles ?", a: "Les espaces verts plantés de pins peuvent l'être au printemps. Signalez tout nid au gestionnaire du site, qui peut faire intervenir un professionnel." }),
  villeLocale("Villeparisis", "à Villeparisis", 'villeparisis', '77', [
    "Villeparisis, ville pavillonnaire, compte beaucoup de jardins arborés et des bois en périphérie. Les pins d'ornement y sont régulièrement colonisés.",
    "Nous intervenons en hiver pour retirer les nids, et posons des colliers pièges sur les pins proches des terrasses et des aires de jeux.",
  ], ["Mitry-Mory", "Claye-Souilly", "Vaujours", "Courtry"],
  { q: "À quelle période appeler pour des nids à Villeparisis ?", a: "Dès que vous voyez les nids blancs, en automne ou en hiver, avant que les chenilles ne descendent au printemps." }),
  villeLocale("Dammarie-lès-Lys", "à Dammarie-lès-Lys", 'dammarie-les-lys', '77', [
    "Dammarie-lès-Lys s'ouvre vers la forêt de Fontainebleau et compte de grands parcs, comme celui de l'abbaye du Lys. Les pins y sont nombreux.",
    "Les maisons proches des bois doivent inspecter leurs pins chaque hiver : un retrait précoce évite les processions au printemps.",
  ], ["Melun", "Le Mée-sur-Seine", "Boissise-le-Roi", "Chartrettes"],
  { q: "Les maisons proches de la forêt à Dammarie sont-elles plus exposées ?", a: "Oui, les papillons venus des massifs de pins pondent dans les jardins proches. Un contrôle chaque hiver est conseillé." }),
  villeLocale("Combs-la-Ville", "à Combs-la-Ville", 'combs-la-ville', '77', [
    "Combs-la-Ville, dans la vallée de l'Yerres et proche de la forêt de Sénart, compte beaucoup de jardins boisés. Pins et chênes y accueillent les deux processionnaires.",
    "Nous intervenons chez les particuliers et dans les résidences, et conseillons l'installation de nichoirs à mésanges, prédatrices des chenilles.",
  ], ["Moissy-Cramayel", "Quincy-sous-Sénart", "Brie-Comte-Robert", "Lieusaint"],
  { q: "Les nichoirs à mésanges sont-ils utiles contre les chenilles ?", a: "Oui, les mésanges mangent des chenilles. Ils complètent le retrait des nids et les pièges, sans les remplacer." }),
  villeLocale("Sartrouville", "à Sartrouville", 'sartrouville', '78', [
    "Sartrouville compte des quartiers pavillonnaires et des parcs où pins et cèdres sont plantés. La forêt de Saint-Germain, de l'autre côté de la Seine, est une source de papillons.",
    "Nous intervenons chez les particuliers, en copropriété et dans les établissements scolaires, avec balisage et tenue de protection.",
  ], ["Houilles", "Montesson", "Maisons-Laffitte", "Cormeilles-en-Parisis"],
  { q: "Mon voisin a des nids dans son pin à Sartrouville : que faire ?", a: "Prévenez-le : les papillons pondront aussi chez vous l'été suivant. Un traitement des deux jardins est le plus efficace." }),
  villeLocale("Mantes-la-Jolie", "à Mantes-la-Jolie", 'mantes-la-jolie', '78', [
    "Mantes-la-Jolie compte des parcs, des berges de Seine arborées et des quartiers pavillonnaires sur les coteaux. Pins et chênes y sont présents.",
    "Nous intervenons pour les particuliers, les bailleurs et les établissements, avec retrait des nids et pose de pièges selon la saison.",
  ], ["Mantes-la-Ville", "Buchelay", "Limay", "Magnanville"],
  { q: "Les bailleurs de Mantes doivent-ils traiter les chenilles ?", a: "Sur les espaces verts des résidences, oui : c'est au bailleur de faire retirer les nids, pour la sécurité des habitants." }),
  villeLocale("Poissy", "à Poissy", 'poissy', '78', [
    "Poissy, voisine de la forêt de Saint-Germain, compte des quartiers pavillonnaires et de grands jardins. Les papillons venus de la forêt pondent dans les pins bien exposés.",
    "Nous retirons les nids en hiver, posons des colliers pièges et des pièges à phéromones, et proposons un suivi sur plusieurs saisons.",
  ], ["Saint-Germain-en-Laye", "Carrières-sous-Poissy", "Villennes-sur-Seine", "Orgeval"],
  { q: "La forêt de Saint-Germain amène-t-elle des chenilles à Poissy ?", a: "Oui, les papillons rejoignent les jardins voisins pour pondre. Les maisons proches doivent surveiller leurs pins chaque hiver." }),
  villeLocale("Conflans-Sainte-Honorine", "à Conflans-Sainte-Honorine", 'conflans-sainte-honorine', '78', [
    "Conflans-Sainte-Honorine compte des coteaux boisés au-dessus de la Seine et de l'Oise, et de nombreux jardins plantés. Pins et chênes y accueillent les processionnaires.",
    "Les propriétés en pente rendent parfois l'accès aux nids difficile : la perche télescopique permet de les atteindre en sécurité.",
  ], ["Andrésy", "Maurecourt", "Herblay-sur-Seine", "Achères"],
  { q: "Un pin en pente à Conflans peut-il être traité ?", a: "Oui, à la perche télescopique, depuis un point stable. Pour les arbres très hauts, nous établissons un devis sur mesure." }),
  villeLocale("Trappes", "à Trappes", 'trappes', '78', [
    "Trappes compte des parcs, des espaces verts de résidences et des quartiers pavillonnaires. Les pins d'ornement des résidences sont régulièrement colonisés par la processionnaire.",
    "Nous intervenons pour les bailleurs, les écoles et les particuliers, avec balisage et retrait des nids en hiver.",
  ], ["Élancourt", "Montigny-le-Bretonneux", "Plaisir", "La Verrière"],
  { q: "Les espaces verts des résidences de Trappes sont-ils concernés ?", a: "Oui, les pins plantés autour des immeubles peuvent porter des nids. Le bailleur doit les faire retirer pour la sécurité des familles." }),
  villeLocale("Les Mureaux", "aux Mureaux", 'les-mureaux', '78', [
    "Les Mureaux comptent des parcs, comme celui de Becheville, des berges arborées et des quartiers pavillonnaires. Pins et chênes y sont présents.",
    "Nous intervenons chez les particuliers et pour les gestionnaires d'espaces verts, avec retrait des nids et pose de pièges selon la saison.",
  ], ["Meulan-en-Yvelines", "Ecquevilly", "Verneuil-sur-Seine", "Bouafle"],
  { q: "Les nids vides sont-ils encore dangereux aux Mureaux ?", a: "Oui, les poils urticants restent actifs longtemps dans les nids et au sol. Ne les touchez jamais, même vides." }),
  villeLocale("Houilles", "à Houilles", 'houilles', '78', [
    "Houilles, ville pavillonnaire, compte beaucoup de jardins avec des pins et des cèdres plantés il y a des décennies. Ces grands arbres sont souvent colonisés par la processionnaire du pin.",
    "Nous retirons les nids à la perche, sans abîmer l'arbre, et posons des colliers pièges avant la descente des chenilles.",
  ], ["Sartrouville", "Carrières-sur-Seine", "Bezons", "Chatou"],
  { q: "Un grand cèdre de jardin à Houilles peut-il avoir des processionnaires ?", a: "Oui, la processionnaire du pin colonise aussi les cèdres. Les nids se repèrent en hiver au bout des branches." }),
  villeLocale("Montigny-le-Bretonneux", "à Montigny-le-Bretonneux", 'montigny-le-bretonneux', '78', [
    "Montigny-le-Bretonneux compte de nombreux espaces verts, des bassins plantés et des quartiers résidentiels arborés. Les pins des résidences et des parcs peuvent accueillir la processionnaire.",
    "Nous intervenons pour les copropriétés, les entreprises et les particuliers, avec rapport d'intervention et suivi saisonnier.",
  ], ["Guyancourt", "Voisins-le-Bretonneux", "Trappes", "Élancourt"],
  { q: "Une entreprise de Montigny peut-elle faire traiter ses espaces verts ?", a: "Oui, avec retrait des nids en hiver, pièges en été et rapport à chaque passage, utile pour la sécurité des salariés." }),
]

export function getVilleChenilles(slug: string) {
  return VILLES_CHENILLES.find((x) => x.slug === slug)
}
