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
    'Devis gratuit, intervention 7j/7 dans le Val-de-Marne.',
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

export const VILLES_CHENILLES: VilleChenilles[] = [
  // Est et plateau briard
  ville('Sucy-en-Brie', 'à Sucy-en-Brie', 'sucy-en-brie', 'plateau', 'Entre son centre ancien, ses quartiers pavillonnaires et les bois qui l\'entourent, Sucy-en-Brie compte beaucoup de grands arbres, et donc de nids à surveiller chaque hiver.', ['Boissy-Saint-Léger', 'Noiseau', 'Ormesson-sur-Marne', 'Chennevières-sur-Marne']),
  ville('Boissy-Saint-Léger', 'à Boissy-Saint-Léger', 'boissy-saint-leger', 'plateau', 'À Boissy-Saint-Léger, les jardins et espaces verts proches des bois sont exposés chaque année : les papillons viennent pondre sur les pins et les chênes des propriétés voisines.', ['Sucy-en-Brie', 'Limeil-Brévannes', 'Villecresnes', 'Marolles-en-Brie']),
  ville('Limeil-Brévannes', 'à Limeil-Brévannes', 'limeil-brevannes', 'plateau', 'À Limeil-Brévannes, maisons avec jardin et résidences entourées d\'espaces verts demandent une surveillance des pins et des chênes, surtout près des aires de jeux.', ['Boissy-Saint-Léger', 'Valenton', 'Villecresnes', 'Sucy-en-Brie']),
  ville('Villecresnes', 'à Villecresnes', 'villecresnes', 'plateau', 'À Villecresnes, l\'habitat pavillonnaire et les bois proches favorisent l\'installation des chenilles dans les jardins, sur les pins comme sur les chênes.', ['Santeny', 'Mandres-les-Roses', 'Marolles-en-Brie', 'Boissy-Saint-Léger']),
  ville('Santeny', 'à Santeny', 'santeny', 'plateau', 'À Santeny, village entouré de champs et de bois, les grandes propriétés arborées sont particulièrement concernées par les deux espèces de processionnaires.', ['Villecresnes', 'Marolles-en-Brie', 'Mandres-les-Roses', 'Périgny']),
  ville('Mandres-les-Roses', 'à Mandres-les-Roses', 'mandres-les-roses', 'plateau', 'À Mandres-les-Roses, les jardins et les arbres isolés bien exposés au soleil sont les premiers choisis par la processionnaire du pin pour installer ses nids.', ['Périgny', 'Santeny', 'Villecresnes', 'Marolles-en-Brie']),
  ville('Périgny', 'à Périgny', 'perigny', 'plateau', 'À Périgny, petite commune aux grands jardins, quelques pins ou chênes touchés suffisent pour que les chenilles se retrouvent sur les pelouses à la fin de l\'hiver.', ['Mandres-les-Roses', 'Santeny', 'Villecresnes', 'Marolles-en-Brie']),
  ville('Marolles-en-Brie', 'à Marolles-en-Brie', 'marolles-en-brie', 'plateau', 'À Marolles-en-Brie, maisons avec jardin et bois voisins forment un terrain favorable : surveiller ses arbres dès l\'automne permet d\'agir avant les processions.', ['Santeny', 'Villecresnes', 'Boissy-Saint-Léger', 'Mandres-les-Roses']),
  ville('Noiseau', 'à Noiseau', 'noiseau', 'plateau', 'À Noiseau, entouré de bois et de champs, les chenilles processionnaires du chêne comme du pin peuvent toucher les jardins proches des lisières.', ['La Queue-en-Brie', 'Ormesson-sur-Marne', 'Sucy-en-Brie', 'Chennevières-sur-Marne']),
  ville('La Queue-en-Brie', 'à La Queue-en-Brie', 'la-queue-en-brie', 'plateau', 'À La Queue-en-Brie, les quartiers pavillonnaires proches des bois sont régulièrement concernés, avec des nids sur les pins des jardins et sur les chênes des lisières.', ['Noiseau', 'Le Plessis-Trévise', 'Ormesson-sur-Marne', 'Chennevières-sur-Marne']),
  ville('Ormesson-sur-Marne', 'à Ormesson-sur-Marne', 'ormesson-sur-marne', 'plateau', 'À Ormesson-sur-Marne, les jardins arborés et les espaces verts demandent une vigilance chaque hiver, quand les nids deviennent bien visibles sur les pins.', ['Chennevières-sur-Marne', 'Noiseau', 'Sucy-en-Brie', 'La Queue-en-Brie']),
  ville('Le Plessis-Trévise', 'au Plessis-Trévise', 'le-plessis-trevise', 'plateau', 'Au Plessis-Trévise, commune très pavillonnaire et boisée, de nombreux jardins comptent des pins et des chênes à surveiller chaque saison.', ['La Queue-en-Brie', 'Chennevières-sur-Marne', 'Villiers-sur-Marne', 'Noiseau']),
  ville('Villiers-sur-Marne', 'à Villiers-sur-Marne', 'villiers-sur-marne', 'plateau', 'À Villiers-sur-Marne, les quartiers pavillonnaires et les espaces verts sont exposés aux chenilles, en particulier près des pins isolés et des chênes.', ['Le Plessis-Trévise', 'Champigny-sur-Marne', 'Bry-sur-Marne', 'Chennevières-sur-Marne']),
  // Bords de Marne
  ville('Saint-Maur-des-Fossés', 'à Saint-Maur-des-Fossés', 'saint-maur-des-fosses', 'marne', 'Saint-Maur-des-Fossés, très pavillonnaire, compte un très grand nombre de jardins : pins, cèdres et chênes y sont fréquents, et les nids apparaissent chaque hiver dans plusieurs quartiers.', ['Créteil', 'Joinville-le-Pont', 'Champigny-sur-Marne', 'Chennevières-sur-Marne']),
  ville('Le Perreux-sur-Marne', 'au Perreux-sur-Marne', 'le-perreux-sur-marne', 'marne', 'Au Perreux-sur-Marne, les maisons avec jardin et les arbres d\'alignement offrent aux chenilles de nombreux pins et chênes où s\'installer.', ['Nogent-sur-Marne', 'Bry-sur-Marne', 'Champigny-sur-Marne']),
  ville('Bry-sur-Marne', 'à Bry-sur-Marne', 'bry-sur-marne', 'marne', 'À Bry-sur-Marne, commune résidentielle aux jardins arborés, les familles avec enfants et animaux sont particulièrement attentives aux processions sur les pelouses.', ['Le Perreux-sur-Marne', 'Champigny-sur-Marne', 'Villiers-sur-Marne', 'Nogent-sur-Marne']),
  ville('Chennevières-sur-Marne', 'à Chennevières-sur-Marne', 'chennevieres-sur-marne', 'marne', 'À Chennevières-sur-Marne, entre bords de Marne et quartiers pavillonnaires, les jardins arborés et les coteaux sont exposés aux deux espèces de processionnaires.', ['Ormesson-sur-Marne', 'Champigny-sur-Marne', 'Saint-Maur-des-Fossés', 'Sucy-en-Brie']),
  ville('Champigny-sur-Marne', 'à Champigny-sur-Marne', 'champigny-sur-marne', 'marne', 'À Champigny-sur-Marne, les nombreux pavillons avec jardin et les espaces verts au bord de la Marne demandent une surveillance des pins et des chênes.', ['Bry-sur-Marne', 'Chennevières-sur-Marne', 'Saint-Maur-des-Fossés', 'Villiers-sur-Marne']),
  ville('Nogent-sur-Marne', 'à Nogent-sur-Marne', 'nogent-sur-marne', 'marne', 'À Nogent-sur-Marne, entre le Bois de Vincennes et la Marne, les jardins et résidences arborés peuvent accueillir des nids, notamment sur les chênes et les pins isolés.', ['Le Perreux-sur-Marne', 'Fontenay-sous-Bois', 'Joinville-le-Pont', 'Bry-sur-Marne']),
]

export function getVilleChenilles(slug: string) {
  return VILLES_CHENILLES.find((x) => x.slug === slug)
}
