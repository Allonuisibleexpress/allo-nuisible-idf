// Guide local approfondi des pages dératisation (12/11/2026) pour les 12 villes déjà vues dans Google
// (Search Console : impressions sur « dératisation + ville »). Rédigé à la main, ville par ville.
// Chiffres : Insee via geo.api.gouv.fr (population, superficie, densité), inventaire SRU 2025, OpenStreetMap (gares, parcs,
// jardins partagés, restaurants, marchés), tous déjà présents dans lib/donnees-locales.ts. Aucun chiffre inventé.
// Interdits respectés : pas de tiret long, pas de « naturel », « écologique », « sans danger ».

export type GuideVille = {
  titre: string
  intro: string
  sections: { h: string; p: string[] }[]
  faq: { q: string; a: string }[]
}

export const GUIDE_DERATISATION: Record<string, GuideVille> = {
  'charenton-le-pont': {
    titre: 'Dératisation à Charenton-le-Pont : le guide complet, quartier par quartier',
    intro: 'Charenton-le-Pont tient sur **1,85 km²** et compte **28 830 habitants** (Insee), soit plus de **15 500 habitants au km²**. Cette densité, la Seine, la Marne et le bois de Vincennes tout proches expliquent pourquoi les rats et les souris y trouvent si facilement de quoi vivre. Voici ce que nous voyons sur le terrain, et comment nous traitons chaque type de bâtiment.',
    sections: [
      { h: 'Des quais de Seine au Plateau : où les rongeurs circulent à Charenton', p: [
        'Au sud, le quartier des **Carrières** et le **quai des Carrières** longent la Seine. Les surmulots (rats d’égout) remontent des berges et des réseaux vers les caves et les parkings des résidences. Plus haut, le **Plateau** et le secteur de **Valmy** sont faits d’immeubles plus anciens, avec des caves en enfilade où un rat passe d’un bâtiment à l’autre sans jamais sortir.',
        'À l’est, **Conflans** et le **parc de Conflans** dominent le confluent de la Seine et de la Marne. Au nord, les rues en bordure du **bois de Vincennes** voient surtout des souris et des mulots entrer dans les rez-de-chaussée et les pavillons à l’automne, quand le froid arrive.',
      ] },
      { h: 'Copropriétés de Charenton : pourquoi traiter tout l’immeuble', p: [
        'Charenton est d’abord une ville de copropriétés. Si un seul logement est traité alors que les caves, les gaines techniques et le local poubelles restent accessibles, les rongeurs reviennent en quelques semaines. Nous commençons donc par les **parties communes** : caves, colonnes d’évacuation, local vélos, parking.',
        'Nous remettons au syndic un **plan des postes numérotés** et un compte rendu après chaque passage. C’est ce document qui permet au conseil syndical de suivre la dératisation et de la justifier en assemblée générale.',
      ] },
      { h: 'Commerces, restaurants et centre commercial : un suivi régulier', p: [
        'OpenStreetMap recense une cinquantaine de restaurants à Charenton-le-Pont, autour de la rue de Paris, de la place Aristide-Briand et du centre commercial **Bercy 2**. Pour ces professionnels, une dératisation ponctuelle ne suffit pas : nous proposons un **contrat avec passages programmés**, un registre et une attestation, utiles en cas de contrôle sanitaire.',
        'Les réserves en sous-sol, les quais de livraison et les bacs à graisse sont les points que nous contrôlons à chaque visite.',
      ] },
      { h: 'Rats ou souris : ce qu’on trouve le plus souvent à Charenton', p: [
        'Dans les sous-sols et près des quais, c’est le **surmulot** qui domine : gros rat brun, il creuse, nage et vit près de l’eau. Dans les étages et les appartements, ce sont plutôt des **souris**, qui passent par les gaines électriques et les passages de tuyaux. Le **rat noir**, plus grimpeur, se rencontre parfois dans les combles des immeubles anciens.',
        'Bien identifier l’espèce change tout : un poste posé au mauvais endroit ou à la mauvaise hauteur ne sert à rien. C’est le premier travail de notre technicien.',
      ] },
      { h: 'Notre délai à Charenton-le-Pont', p: [
        'Notre base est à **Saint-Maurice**, la commune voisine. Charenton est donc l’une des villes où nous intervenons le plus vite, souvent dans la journée. Les passages de contrôle se font sans frais de déplacement supplémentaires.',
      ] },
    ],
    faq: [
      { q: 'Les rats de la Seine peuvent-ils entrer dans mon immeuble à Charenton ?', a: 'Oui. Les surmulots vivent le long des berges et dans les réseaux, puis remontent par les caves, les regards et les passages de canalisations. Le colmatage des accès en sous-sol est donc une étape clé à Charenton-le-Pont.' },
      { q: 'Qui paie la dératisation des caves d’une copropriété à Charenton ?', a: 'Les caves et le local poubelles sont des parties communes : la dératisation est organisée par le syndic et payée par la copropriété. Chaque copropriétaire reste responsable de son lot privatif.' },
      { q: 'Intervenez-vous dans les restaurants près de Bercy 2 ?', a: 'Oui, nous intervenons dans les commerces et restaurants de Charenton-le-Pont avec un contrat de suivi, un registre et une attestation à chaque passage.' },
    ],
  },

  'cachan': {
    titre: 'Dératisation à Cachan : le guide complet pour les maisons et les résidences',
    intro: 'Cachan compte **31 103 habitants** sur **2,79 km²** (Insee). La ville est construite à flanc de coteau, au-dessus de la vallée de la Bièvre, aujourd’hui en grande partie enterrée. Ce relief et ce sous-sol riche en réseaux font de Cachan une ville où les rongeurs se déplacent beaucoup, du bas de la vallée jusqu’aux jardins du haut.',
    sections: [
      { h: 'Le Coteau, la Prairie, la Plaine : trois façons de vivre avec les rongeurs', p: [
        'Sur le **Coteau**, les maisons ont souvent des jardins en pente, des murets et des abris. Les rats creusent des terriers au pied des murs et sous les dalles, et les souris entrent dans les sous-sols par les soupiraux. Le **jardin panoramique du Coteau** et les espaces verts voisins sont aussi des zones de passage.',
        'En bas, dans les quartiers de la **Plaine** et de la **Prairie**, l’habitat est plus dense, avec des résidences et des immeubles. Les problèmes viennent alors des caves, des locaux poubelles et des réseaux qui suivent l’ancien cours de la Bièvre.',
      ] },
      { h: 'La Bièvre enterrée : un couloir pour les surmulots', p: [
        'La Bièvre coule aujourd’hui en grande partie sous terre dans le secteur. Les collecteurs et les réseaux qui la longent forment de véritables couloirs pour les surmulots, qui ressortent par les regards, les caves et parfois les toilettes des rez-de-chaussée.',
        'Quand un rat apparaît dans une maison du bas de Cachan, nous cherchons toujours d’abord par où il est arrivé : regard mal fermé, canalisation cassée, bouche d’aération sans grille. Sans ce repérage, le traitement ne tient pas.',
      ] },
      { h: 'Pavillons et jardins : nos points de contrôle à Cachan', p: [
        'Dans les maisons, nous inspectons les composts, les abris de jardin, les tas de bois, les vides sanitaires et les garages. Les mangeoires à oiseaux et la nourriture des animaux laissée dehors attirent souvent les rats sans qu’on y pense.',
        'Avec des enfants ou des animaux, nous utilisons des **postes d’appâtage verrouillés**, ou le **piège Ekomille sans raticide**, qui capture les rongeurs sans produit.',
      ] },
      { h: 'Résidences et Cité-jardins : agir avec le bailleur', p: [
        'Dans les résidences et le quartier de la **Cité-jardins**, la dératisation des parties communes revient au bailleur ou au syndic. Nous travaillons avec eux : traitement des caves et locaux poubelles, puis des logements qui le demandent, avec un rapport à chaque passage.',
      ] },
      { h: 'Accès rapide depuis Saint-Maurice', p: [
        'Cachan est bien reliée à notre base de Saint-Maurice. Nous y intervenons 7j/7, souvent le jour même, avec un devis donné avant le déplacement.',
      ] },
    ],
    faq: [
      { q: 'Pourquoi y a-t-il des rats dans le bas de Cachan ?', a: 'Le bas de Cachan suit l’ancienne vallée de la Bièvre, aujourd’hui en grande partie enterrée. Les réseaux souterrains qui la longent sont des couloirs pour les surmulots, qui remontent par les regards et les caves.' },
      { q: 'Un rat dans mon jardin sur le Coteau à Cachan : que faire ?', a: 'Repérez les terriers au pied des murs, retirez la nourriture accessible (compost ouvert, graines, croquettes) et appelez-nous : nous posons des postes sécurisés ou un piège sans raticide, puis nous bouchons les accès vers la maison.' },
      { q: 'Faut-il prévenir le bailleur à Cachan ?', a: 'Oui, si vous êtes locataire en résidence : les caves et locaux poubelles relèvent du bailleur. Nous pouvons intervenir à sa demande et lui remettre un rapport.' },
    ],
  },

  'courbevoie': {
    titre: 'Dératisation à Courbevoie : le guide complet, de La Défense à Bécon',
    intro: 'Avec **82 902 habitants** sur **4,16 km²** (Insee), Courbevoie dépasse les **19 900 habitants au km²**, l’une des densités les plus fortes des Hauts-de-Seine. Entre les tours de La Défense, les bords de Seine et les rues de Bécon, la ville réunit tout ce qui attire les rongeurs : réseaux profonds, parkings souterrains, restaurants et immeubles reliés entre eux.',
    sections: [
      { h: 'La Défense et le Faubourg de l’Arche : un sous-sol immense', p: [
        'Le quartier d’affaires repose sur une dalle avec plusieurs niveaux de parkings, de voies et de locaux techniques. Les restaurants et commerces de la dalle produisent beaucoup de déchets, stockés en sous-sol. Pour ces sites, nous mettons en place un **plan de lutte avec postes numérotés**, un registre et des passages réguliers.',
        'Au **Faubourg de l’Arche**, les résidences récentes ont des parkings et des locaux poubelles où les surmulots s’installent vite si les portes restent ouvertes ou si les grilles sont abîmées.',
      ] },
      { h: 'Bécon-les-Bruyères et les quartiers résidentiels', p: [
        'Autour de la gare de **Bécon-les-Bruyères** et du **parc de Bécon**, les immeubles anciens et les maisons ont des caves et des jardins. Les souris entrent par les soupiraux et les passages de tuyaux, les rats par les jardins et les regards.',
        'Dans les quartiers **Franklin**, **Fallet** ou **Jean Blot**, les appels concernent surtout des copropriétés : caves, colonnes d’évacuation, locaux à vélos.',
      ] },
      { h: 'Les bords de Seine : un risque permanent pour les rez-de-chaussée', p: [
        'Courbevoie longe la Seine sur toute sa façade est. Les surmulots vivent le long des quais et remontent vers les bâtiments par les réseaux. Les rez-de-chaussée et les commerces proches du fleuve sont les premiers touchés, surtout après les périodes de crue.',
      ] },
      { h: 'Copropriétés : notre méthode à Courbevoie', p: [
        'Nous commençons par un **diagnostic des parties communes** : où sont les passages, les crottes, les traces de grignotage, les terriers. Puis nous posons des postes sécurisés, nous bouchons les accès trouvés et nous revenons contrôler. Le syndic reçoit un rapport clair, avec le plan des postes.',
        'Avec 8 jardins partagés recensés sur OpenStreetMap, Courbevoie a aussi des espaces cultivés au pied des immeubles : composts et récoltes oubliées attirent les rats, il faut les surveiller.',
      ] },
      { h: 'Restaurants et commerces de bouche', p: [
        'Pour les restaurants, boulangeries et épiceries de Courbevoie, nous proposons un contrat avec attestation à chaque passage, à présenter en cas de contrôle sanitaire.',
      ] },
    ],
    faq: [
      { q: 'Intervenez-vous dans les parkings de La Défense ?', a: 'Oui, pour les copropriétés, les gestionnaires et les commerces du quartier. Nous posons des postes numérotés et assurons un suivi avec registre.' },
      { q: 'Pourquoi des rats dans mon immeuble près de la Seine à Courbevoie ?', a: 'Les surmulots vivent le long du fleuve et dans les réseaux. Ils entrent par les caves, les regards et les passages de canalisations. Il faut traiter et boucher ces accès.' },
      { q: 'Combien coûte une dératisation d’appartement à Courbevoie ?', a: 'Dès 120 € TTC pour un appartement, rats ou souris. Le devis est gratuit et donné avant l’intervention ; copropriétés et commerces sont sur devis.' },
    ],
  },

  'colombes': {
    titre: 'Dératisation à Colombes : le guide complet, des bords de Seine aux pavillons',
    intro: 'Colombes compte **91 053 habitants** sur **7,78 km²** (Insee). La ville mélange grands ensembles, immeubles de centre-ville et beaucoup de pavillons avec jardin, au bord d’une boucle de la Seine. Les rats y vivent à la fois près du fleuve, dans les jardins et dans les réseaux.',
    sections: [
      { h: 'Île Marante, parc Pierre-Lagravère : les rongeurs des berges', p: [
        'À l’ouest, le **parc Pierre-Lagravère** et l’île Marante bordent la Seine. Les surmulots vivent le long des berges et dans la végétation, puis s’approchent des habitations proches, surtout quand l’eau monte.',
        'Le secteur du **Stade**, autour du stade Yves-du-Manoir, et la **coulée verte** forment un grand couloir vert où les rongeurs circulent facilement.',
      ] },
      { h: 'Les pavillons de Colombes : jardins, composts, sous-sols', p: [
        'Dans les quartiers pavillonnaires comme **Moslard-Agriculture**, les **Cerisiers** ou **Canibouts-Champy**, les rats creusent dans les jardins, sous les abris et près des composts. Les souris entrent dans les maisons par les sous-sols, les garages et les bas de portes.',
        'Nous inspectons tout le terrain, posons des postes verrouillés hors de portée des enfants et des animaux, puis nous bouchons les accès vers la maison.',
      ] },
      { h: 'Résidences et grands ensembles', p: [
        'Dans les résidences, les **locaux poubelles**, les **vide-ordures** et les caves sont les foyers principaux. La dératisation de ces parties communes revient au bailleur ou au syndic, et c’est par là qu’il faut commencer pour que les logements restent protégés.',
      ] },
      { h: 'Commerces et marchés', p: [
        'Le centre de Colombes concentre commerces de bouche, restaurants et marchés. Pour ces professionnels, nous proposons un suivi programmé avec registre et attestation.',
        'Les poubelles sorties le soir et les réserves en sous-sol sont les points à surveiller en priorité.',
      ] },
      { h: 'Rats ou souris : les signes à Colombes', p: [
        'Crottes, emballages rongés, bruits la nuit dans les cloisons, terriers au pied des murs, câbles de voiture abîmés : envoyez-nous une photo sur WhatsApp, nous vous disons s’il s’agit de rats ou de souris et vous donnons le prix.',
      ] },
    ],
    faq: [
      { q: 'Des rats dans mon jardin à Colombes : est-ce à cause de la Seine ?', a: 'C’est souvent le cas près des berges et des parcs comme Pierre-Lagravère. Mais un compost ouvert, des graines pour oiseaux ou des croquettes laissées dehors suffisent aussi à attirer les rats, même loin du fleuve.' },
      { q: 'Intervenez-vous dans les pavillons de Colombes ?', a: 'Oui, pavillons, appartements, résidences et commerces. Pour une maison, nous traitons le jardin, le sous-sol et les accès, avec des postes sécurisés ou un piège sans raticide.' },
      { q: 'Combien de passages pour une dératisation à Colombes ?', a: 'En général un passage de traitement puis un contrôle pour vérifier la consommation des postes et l’efficacité du colmatage. La garantie est d’un an.' },
    ],
  },

  'clichy': {
    titre: 'Dératisation à Clichy : le guide complet pour une ville très dense',
    intro: 'Clichy compte **64 410 habitants** sur seulement **3,08 km²** (Insee), soit plus de **20 900 habitants au km²**. C’est l’une des communes les plus denses de France. Immeubles serrés, commerces au rez-de-chaussée, Seine toute proche : à Clichy, un problème de rongeurs touche rarement un seul logement.',
    sections: [
      { h: 'Des immeubles reliés par les caves', p: [
        'Beaucoup d’immeubles de Clichy ont des **caves voisines**, séparées par des murs anciens, parfois percés pour les réseaux. Les rats passent d’un bâtiment à l’autre par ces ouvertures. Un traitement efficace commence donc par les caves, en lien avec le syndic.',
        'Dans les quartiers **Morel**, **Pasteur-Gesnouin** ou **Chance-Milly**, les gaines et les colonnes d’évacuation servent aussi de passage aux souris vers les étages.',
      ] },
      { h: 'Le long de la Seine et du parc des Impressionnistes', p: [
        'À l’ouest, Clichy longe la Seine. Les surmulots des berges et du **parc des Impressionnistes** s’approchent des immeubles proches. Les rez-de-chaussée et les commerces du bord de l’eau sont les plus exposés.',
      ] },
      { h: 'Commerces au rez-de-chaussée : un point sensible', p: [
        'À Clichy, de nombreux immeubles ont un commerce de bouche en bas. Ses réserves, ses poubelles et ses sous-sols attirent les rongeurs, qui montent ensuite vers les logements. Nous traitons le commerce et l’immeuble ensemble quand c’est possible.',
        'Pour les restaurants, nous proposons un contrat avec passages programmés, registre et attestation.',
      ] },
      { h: 'Notre méthode à Clichy', p: [
        'Diagnostic de l’immeuble, repérage des passages et des points d’entrée, pose de **postes verrouillés** ou de **pièges**, colmatage des trous et des gaines, contrôle après traitement. Chaque étape est expliquée au syndic ou au propriétaire, avec un rapport écrit.',
        'Dans une ville aussi dense, le colmatage est aussi important que le traitement : sans lui, de nouveaux rongeurs arrivent des immeubles voisins.',
      ] },
      { h: 'Intervention rapide', p: [
        'Nous intervenons à Clichy 7j/7, souvent le jour même. Le prix est annoncé avant le déplacement : dès 120 € TTC pour un appartement.',
      ] },
    ],
    faq: [
      { q: 'Pourquoi les rats reviennent-ils dans mon immeuble à Clichy ?', a: 'Parce que les caves et les réseaux sont reliés aux immeubles voisins. Si les accès ne sont pas bouchés, de nouveaux rongeurs arrivent. Nous traitons et colmatons les passages trouvés.' },
      { q: 'Un commerce en bas de chez moi attire-t-il les rats ?', a: 'Un commerce de bouche mal protégé peut en attirer. Le mieux est de traiter le commerce et les parties communes ensemble ; nous pouvons nous coordonner avec le syndic et le commerçant.' },
      { q: 'Quel est le prix d’une dératisation à Clichy ?', a: 'Dès 120 € TTC pour un appartement, rats ou souris, devis gratuit. Copropriétés et commerces sur devis.' },
    ],
  },

  'antony': {
    titre: 'Dératisation à Antony : le guide complet, de la Bièvre au parc de Sceaux',
    intro: 'Antony compte **64 263 habitants** sur **9,56 km²** (Insee). C’est une grande ville du sud des Hauts-de-Seine, plutôt résidentielle, avec beaucoup de maisons et de jardins, traversée par la Bièvre et bordée par le parc de Sceaux. Ici, les appels concernent autant les jardins que les caves.',
    sections: [
      { h: 'Les maisons d’Antony : jardins, composts et sous-sols', p: [
        'Dans les quartiers pavillonnaires comme **les Godets**, **Fontaine-Mouton** ou **la Fontaine**, les rats creusent dans les jardins et sous les abris, et les souris entrent par les sous-sols et les garages à l’automne. Les composts, les poulaillers et les mangeoires à oiseaux sont souvent à l’origine des visites.',
        'Nous inspectons tout le terrain et posons des **postes verrouillés**, ou le **piège Ekomille sans raticide** pour les familles qui préfèrent éviter le produit.',
      ] },
      { h: 'La Bièvre, le parc Heller et le parc de Sceaux', p: [
        'La **Bièvre** traverse Antony, en partie à l’air libre dans le **parc Heller**. Les rats y trouvent eau et abri. Au nord, le **parc de Sceaux** et ses grands espaces verts touchent la ville : les maisons voisines voient plus souvent des souris et des mulots.',
      ] },
      { h: 'Le centre et le marché d’Antony', p: [
        'Autour du centre-ville et du **marché d’Antony**, très fréquenté, les commerces de bouche, les restaurants et leurs poubelles attirent les rongeurs. Pour ces professionnels, nous proposons un suivi programmé avec registre et attestation.',
      ] },
      { h: 'Résidences et grands ensembles', p: [
        'Dans les résidences, comme au **Noyer-Doré** ou aux **Baconnets**, les caves et les locaux poubelles sont traités avec le bailleur. Nous intervenons ensuite dans les logements qui le demandent.',
        'Antony est desservie par le RER B, le RER C, Orlyval et le tram T10 : nos techniciens y circulent facilement et interviennent souvent le jour même.',
      ] },
      { h: 'Les signes qui doivent alerter', p: [
        'Terriers au pied des murs ou sous les dalles, crottes dans le garage, sacs de terreau ou de graines rongés, bruits la nuit dans les combles, câbles de voiture abîmés : une photo sur WhatsApp suffit pour un premier avis et un prix.',
      ] },
    ],
    faq: [
      { q: 'Des rats près de la Bièvre à Antony : que faire ?', a: 'Les maisons proches de la Bièvre et du parc Heller sont plus exposées. Retirez la nourriture accessible dehors, et faites poser des postes sécurisés avec colmatage des accès vers la maison.' },
      { q: 'Proposez-vous une dératisation sans raticide à Antony ?', a: 'Oui, avec le piège Ekomille, qui capture les rongeurs sans produit, ou des pièges mécaniques. Nous choisissons avec vous selon le lieu.' },
      { q: 'Intervenez-vous pour les commerces du marché d’Antony ?', a: 'Oui, avec un contrat de suivi, des postes numérotés, un registre et une attestation à chaque passage.' },
    ],
  },

  'issy-les-moulineaux': {
    titre: 'Dératisation à Issy-les-Moulineaux : le guide complet, des quais au Fort',
    intro: 'Issy-les-Moulineaux compte **67 669 habitants** sur **4,24 km²** (Insee). La ville monte des quais de Seine jusqu’au plateau du **Fort d’Issy**, avec des quartiers d’affaires récents, des immeubles anciens et des maisons sur les hauteurs. Chaque secteur a ses rongeurs et ses points sensibles.',
    sections: [
      { h: 'Bords de Seine et île Saint-Germain', p: [
        'Les surmulots vivent le long de la Seine et du **parc de l’île Saint-Germain**. Ils remontent vers les immeubles des quais et du quartier **Issy-Val-de-Seine** par les réseaux et les parkings souterrains.',
        'Dans ces résidences récentes, les locaux poubelles et les parkings sont les premiers à traiter.',
      ] },
      { h: 'Le centre et Corentin-Celton : immeubles anciens et commerces', p: [
        'Autour de la mairie et de **Corentin-Celton**, les immeubles plus anciens ont des caves et des cours où les rongeurs circulent. Les commerces de bouche au rez-de-chaussée attirent rats et souris vers les étages.',
        'Nous traitons les parties communes avec le syndic, puis les commerces et les logements touchés.',
      ] },
      { h: 'Les hauteurs : Fort d’Issy, parc Henri-Barbusse, maisons', p: [
        'Sur les hauteurs, autour du **Fort d’Issy** et du **parc Henri-Barbusse**, on trouve davantage de maisons et de jardins. Ce sont surtout des souris et des mulots qui entrent dans les sous-sols à l’automne, et des rats dans les jardins et les composts.',
      ] },
      { h: 'Bureaux et quartiers d’affaires', p: [
        'Issy accueille de nombreux sièges d’entreprises. Restaurants d’entreprise, cafétérias et locaux de stockage demandent un **plan de lutte** avec postes numérotés et passages réguliers. Nous fournissons registre et attestation.',
      ] },
      { h: 'Notre intervention à Issy-les-Moulineaux', p: [
        'Diagnostic, traitement par postes sécurisés ou pièges, colmatage des accès et contrôle : la même méthode partout, adaptée au bâtiment. Devis gratuit avant le déplacement, dès 120 € TTC pour un appartement.',
      ] },
    ],
    faq: [
      { q: 'Des rats dans le parking de ma résidence à Issy : qui doit agir ?', a: 'Le parking est une partie commune : c’est au syndic ou au bailleur d’organiser la dératisation. Nous intervenons à sa demande, avec un rapport et un plan des postes.' },
      { q: 'Les maisons sur les hauteurs d’Issy ont-elles des souris ?', a: 'Oui, surtout à l’automne. Les souris entrent par les soupiraux, les garages et les passages de tuyaux. Il faut traiter et boucher ces accès.' },
      { q: 'Faites-vous des contrats pour les entreprises à Issy-les-Moulineaux ?', a: 'Oui : postes numérotés, passages programmés, registre et attestation à chaque visite.' },
    ],
  },

  'rueil-malmaison': {
    titre: 'Dératisation à Rueil-Malmaison : le guide complet pour les maisons et les jardins',
    intro: 'Rueil-Malmaison compte **82 874 habitants** sur **14,53 km²** (Insee). C’est une grande ville verte, avec la **forêt domaniale de la Malmaison**, le parc de Bois-Préau, la Seine au nord et une majorité de quartiers résidentiels. Ici, les rongeurs viennent autant des espaces verts que des réseaux.',
    sections: [
      { h: 'Forêt de la Malmaison et quartiers en lisière', p: [
        'Au sud, la **forêt domaniale de la Malmaison** et le quartier de **Buzenval** sont bordés de maisons. À l’automne, les souris et les mulots entrent dans les sous-sols, les garages et les combles. Les lérots, plus rares, peuvent aussi s’installer dans les greniers.',
        'Nous contrôlons les combles, les sous-sols et les dépendances, et posons des dispositifs adaptés à la présence d’enfants et d’animaux.',
      ] },
      { h: 'Bords de Seine et Plaine-Gare', p: [
        'Au nord, autour de la gare RER et des **Closeaux**, la ville rejoint la Seine (bras de Marly). Les surmulots vivent le long de l’eau et remontent vers les résidences et les parkings souterrains.',
      ] },
      { h: 'Le centre-ville et ses commerces', p: [
        'Le centre de Rueil, avec ses commerces, restaurants et son marché, concentre les déchets alimentaires. Les réserves et les poubelles sont les points à suivre de près. Nous proposons un contrat avec registre et attestation pour les professionnels.',
      ] },
      { h: 'Jardins, composts et piscines : nos conseils', p: [
        'Dans les grands jardins de Rueil, les rats s’installent sous les abris, dans les tas de bois et près des composts. Les points d’eau (bassins, piscines) les attirent aussi. Retirez les graines et croquettes laissées dehors, fermez les composts et coupez la végétation contre les murs.',
        'Pour les familles qui le souhaitent, nous utilisons le **piège Ekomille sans raticide**.',
      ] },
      { h: 'Quartiers collectifs', p: [
        'Dans les résidences du **Plateau** ou de **Fouilleuse**, la dératisation commence par les caves et les locaux poubelles, avec le bailleur ou le syndic.',
      ] },
    ],
    faq: [
      { q: 'Des souris en automne près de la forêt de la Malmaison : est-ce normal ?', a: 'Oui, les maisons en lisière de forêt voient plus de souris et de mulots quand le froid arrive. Boucher les accès des sous-sols et des combles est la meilleure prévention, avec un traitement si elles sont déjà entrées.' },
      { q: 'Un rat près de ma piscine à Rueil-Malmaison : que faire ?', a: 'Les points d’eau attirent les rats. Supprimez la nourriture accessible, repérez les terriers et faites poser des postes sécurisés ou un piège sans raticide.' },
      { q: 'Intervenez-vous dans les grandes propriétés de Rueil ?', a: 'Oui, maisons avec grand terrain, résidences et commerces. Le devis tient compte de la surface à traiter et est donné avant l’intervention.' },
    ],
  },

  'maisons-alfort': {
    titre: 'Dératisation à Maisons-Alfort : le guide complet, de la Marne à Charentonneau',
    intro: 'Maisons-Alfort compte **56 799 habitants** sur **5,35 km²** (Insee), au bord de la Marne, juste à côté de notre base de Saint-Maurice. Résidences, immeubles du centre, pavillons de Charentonneau : nous connaissons bien les points faibles de chaque quartier.',
    sections: [
      { h: 'Les bords de Marne : le premier réservoir de rats', p: [
        'La **Marne** longe toute la ville à l’est. Les surmulots vivent le long des berges et dans les réseaux, puis remontent vers les maisons de **Charentonneau** et les immeubles proches. Après les crues, les appels augmentent dans ces quartiers.',
      ] },
      { h: 'Charentonneau et les pavillons', p: [
        'Dans les zones pavillonnaires, les rats creusent dans les jardins et sous les abris, et les souris entrent par les sous-sols. Nous inspectons composts, abris, vides sanitaires et garages, puis nous bouchons les accès vers la maison.',
        'Le **marché de Charentonneau** et le **marché du Centre** attirent aussi les rongeurs dans leur voisinage : les commerces proches doivent être suivis.',
      ] },
      { h: 'Résidences et logements sociaux', p: [
        'Selon l’inventaire SRU 2025, Maisons-Alfort compte **6 333 logements sociaux**, soit **25,24 %** des résidences principales. Dans ces résidences, les caves, les vide-ordures et les locaux poubelles sont les foyers les plus fréquents. La dératisation des parties communes revient au bailleur, et c’est par là qu’il faut commencer.',
      ] },
      { h: 'Restaurants et commerces', p: [
        'OpenStreetMap recense une soixantaine de restaurants et plus de quarante commerces alimentaires à Maisons-Alfort. Pour eux, nous proposons un contrat avec passages programmés, registre et attestation.',
      ] },
      { h: 'Nous sommes vos voisins', p: [
        'Notre base de Saint-Maurice touche Maisons-Alfort. Nous intervenons souvent le jour même, et les passages de contrôle se font sans difficulté.',
      ] },
    ],
    faq: [
      { q: 'Pourquoi des rats à Charentonneau, près de la Marne ?', a: 'Les surmulots vivent le long des berges et dans les réseaux. Ils remontent vers les maisons par les jardins, les regards et les sous-sols, surtout après les crues.' },
      { q: 'Je suis locataire en résidence à Maisons-Alfort : qui appeler ?', a: 'Prévenez votre bailleur : les caves et locaux poubelles relèvent de lui. Nous pouvons intervenir à sa demande, puis dans votre logement si besoin.' },
      { q: 'En combien de temps intervenez-vous à Maisons-Alfort ?', a: 'Nous sommes basés à Saint-Maurice, la ville voisine : l’intervention est souvent possible le jour même, 7j/7.' },
    ],
  },

  'asnieres-sur-seine': {
    titre: 'Dératisation à Asnières-sur-Seine : le guide complet, quai par quai',
    intro: 'Asnières-sur-Seine compte **93 941 habitants** sur **4,82 km²** (Insee), soit près de **19 500 habitants au km²**. Bordée par la Seine et son petit bras, la ville réunit immeubles anciens, résidences et quartiers de maisons. Les rongeurs y profitent du fleuve, des réseaux et des caves.',
    sections: [
      { h: 'Les quais de Seine et le petit bras', p: [
        'Asnières longe la Seine sur tout son côté ouest et sud. Les surmulots vivent le long des berges, près du **parc Robinson** et des quais, et remontent vers les immeubles par les réseaux et les caves.',
      ] },
      { h: 'Centre-ville et quartier de la Mairie', p: [
        'Autour de la mairie, de la gare et de la rue commerçante, les immeubles anciens ont des **caves reliées**. Les commerces de bouche au rez-de-chaussée attirent les rongeurs. Nous traitons les parties communes avec le syndic, puis les commerces et les logements.',
      ] },
      { h: 'Les Grésillons, les Courtilles, les Quatre-Routes', p: [
        'Au nord, dans les quartiers des **Grésillons**, des **Courtilles** et des **Quatre-Routes**, on trouve beaucoup de résidences et d’habitat collectif. Les locaux poubelles, les vide-ordures et les caves sont les points de départ des infestations.',
        'Avec 9 jardins partagés recensés sur OpenStreetMap, Asnières a aussi des espaces cultivés au pied des immeubles, à surveiller pour éviter qu’ils n’attirent les rats.',
      ] },
      { h: 'Maisons et jardins', p: [
        'Dans les secteurs de maisons, les rats creusent dans les jardins et les souris entrent par les sous-sols. Nous posons des postes verrouillés ou un piège sans raticide, puis nous bouchons les accès.',
      ] },
      { h: 'Intervention 7j/7 à Asnières', p: [
        'Métro 13, tram T1, lignes J et L : nos techniciens rejoignent Asnières facilement. Devis gratuit avant le déplacement, dès 120 € TTC pour un appartement.',
      ] },
    ],
    faq: [
      { q: 'Les rats de la Seine entrent-ils dans les immeubles d’Asnières ?', a: 'Oui, par les réseaux, les regards et les caves. Les immeubles proches des quais sont les plus exposés. Il faut traiter et boucher ces accès.' },
      { q: 'Des souris dans mon appartement aux Grésillons : que faire ?', a: 'Les souris passent par les gaines et les passages de tuyaux. Nous traitons votre logement et conseillons au bailleur de traiter les parties communes pour éviter le retour.' },
      { q: 'Quel prix pour une dératisation à Asnières-sur-Seine ?', a: 'Dès 120 € TTC pour un appartement, rats ou souris, devis gratuit. Commerces et copropriétés sur devis.' },
    ],
  },

  'paris-12': {
    titre: 'Dératisation à Paris 12e : le guide complet, de Bercy au bois de Vincennes',
    intro: 'Le 12e arrondissement compte **138 024 habitants** sur **16,37 km²** en comptant le **bois de Vincennes** (Insee). Gare de Lyon, Bercy, quais de Seine, marché d’Aligre, immeubles haussmanniens et grandes résidences : c’est un arrondissement très varié, où les rats ont de nombreux points d’appui.',
    sections: [
      { h: 'Gare de Lyon, Bercy et les quais', p: [
        'Autour de la **gare de Lyon**, de **Bercy** et du **quai de la Rapée**, les réseaux souterrains, les parkings et les commerces forment un ensemble où les surmulots circulent facilement. Les immeubles proches des quais et des voies ferrées sont les plus exposés.',
      ] },
      { h: 'Aligre, Daumesnil, Nation : les marchés et les restaurants', p: [
        'OpenStreetMap recense plus de **600 restaurants** et huit marchés dans le 12e, dont le **marché d’Aligre**, le **marché Daumesnil** et le **marché Cours de Vincennes**. Ces lieux produisent chaque jour beaucoup de déchets alimentaires. Pour les restaurants et commerces, nous mettons en place un suivi avec registre et attestation.',
        'Dans les immeubles voisins des marchés, les caves et les cours sont les premiers endroits à contrôler.',
      ] },
      { h: 'Immeubles haussmanniens et caves communicantes', p: [
        'Dans les quartiers **Quinze-Vingts**, **Bel-Air** ou **Picpus**, beaucoup d’immeubles anciens ont des caves voûtées et des réseaux anciens. Les rats passent d’un bâtiment à l’autre. Une dératisation coordonnée par le syndic, avec colmatage, est la plus efficace.',
      ] },
      { h: 'Bois de Vincennes, parc de Bercy, Coulée verte', p: [
        'Le **bois de Vincennes**, le **parc de Bercy** et la **Coulée verte René-Dumont** sont des espaces verts où les rongeurs trouvent abri. Les immeubles en bordure voient plus souvent des souris et des rats entrer par les rez-de-chaussée et les caves.',
      ] },
      { h: 'Notre délai dans le 12e', p: [
        'Notre base de Saint-Maurice est juste de l’autre côté du bois de Vincennes. Le 12e est l’un des secteurs où nous intervenons le plus vite, souvent le jour même.',
      ] },
    ],
    faq: [
      { q: 'Des rats dans la cour de mon immeuble dans le 12e : qui doit agir ?', a: 'La cour et les caves sont des parties communes : c’est au syndic d’organiser la dératisation. Nous intervenons à sa demande avec un rapport et un plan des postes.' },
      { q: 'Intervenez-vous pour les commerces du marché d’Aligre ?', a: 'Oui, pour les commerces et restaurants du 12e, avec des passages programmés, un registre et une attestation.' },
      { q: 'Combien coûte une dératisation à Paris 12e ?', a: 'Dès 120 € TTC pour un appartement, rats ou souris. Le devis est gratuit et donné avant l’intervention.' },
    ],
  },

  'paris-20': {
    titre: 'Dératisation à Paris 20e : le guide complet, de Belleville à Charonne',
    intro: 'Le 20e arrondissement compte **185 140 habitants** sur **6 km²** (Insee), soit plus de **30 800 habitants au km²**. C’est l’un des arrondissements les plus peuplés de Paris, avec des immeubles anciens, de grandes résidences, des rues en pente et de grands espaces verts comme le **Père-Lachaise** et le **parc de Belleville**.',
    sections: [
      { h: 'Belleville et Ménilmontant : immeubles anciens et cours', p: [
        'À **Belleville** et **Ménilmontant**, les immeubles anciens ont des caves, des cours et des passages où les rats circulent. Les commerces de bouche et les restaurants nombreux attirent les rongeurs vers les rez-de-chaussée.',
      ] },
      { h: 'Père-Lachaise, parc de Belleville, Charonne', p: [
        'Le **cimetière du Père-Lachaise**, le **parc de Belleville** et les espaces verts de **Charonne** abritent des rongeurs. Les immeubles voisins voient plus souvent des rats dans les cours et des souris dans les rez-de-chaussée.',
        'Avec 13 jardins partagés recensés sur OpenStreetMap, le 20e a aussi beaucoup de petits espaces cultivés : composts et récoltes doivent être protégés.',
      ] },
      { h: 'Grandes résidences et logements sociaux', p: [
        'Le 20e compte de grandes résidences, autour de **Saint-Fargeau**, de la **porte de Bagnolet** ou de la **porte de Montreuil**. Les locaux poubelles et les caves sont les points de départ. La dératisation des parties communes revient au bailleur, puis les logements sont traités si besoin.',
      ] },
      { h: 'Notre méthode dans le 20e', p: [
        'Diagnostic, repérage des passages, postes verrouillés ou pièges, colmatage des accès, contrôle. Dans un arrondissement aussi dense, le colmatage est indispensable : sans lui, les rats reviennent des immeubles voisins.',
      ] },
      { h: 'Délai et prix', p: [
        'Nous intervenons dans le 20e 7j/7, souvent le jour même. Dès 120 € TTC pour un appartement, devis gratuit avant le déplacement.',
      ] },
    ],
    faq: [
      { q: 'Des rats près du Père-Lachaise : mon immeuble est-il exposé ?', a: 'Les immeubles proches des grands espaces verts voient plus souvent des rongeurs. Il faut surveiller les caves et les cours, et boucher les accès.' },
      { q: 'Je suis locataire dans le 20e : qui paie la dératisation ?', a: 'Les parties communes relèvent du bailleur ou du syndic. Dans votre logement, cela dépend de la cause ; nous vous remettons un rapport utile pour en discuter avec le propriétaire.' },
      { q: 'Combien coûte une dératisation à Paris 20e ?', a: 'Dès 120 € TTC pour un appartement, rats ou souris, devis gratuit.' },
    ],
  },
  'chatenay-malabry': {
    titre: 'Dératisation à Châtenay-Malabry : comment se débarrasser des rats et des souris ?',
    intro: 'Châtenay-Malabry compte **35 825 habitants** sur **6,37 km²** (Insee). Entre la **Vallée-aux-Loups**, le parc de Sceaux tout proche et la forêt de Verrières au sud, c’est l’une des villes les plus vertes des Hauts-de-Seine. Ce cadre boisé explique la majorité des appels : souris et mulots dans les maisons, rats dans les jardins et les résidences.',
    sections: [
      { h: 'Pourquoi les rongeurs entrent-ils dans les maisons à Châtenay ?', p: [
        'Les quartiers en lisière de bois, autour de la **Vallée-aux-Loups** et du **parc boisé**, voient arriver souris, mulots et parfois lérots dès l’automne : ils quittent la végétation pour les sous-sols, les garages et les combles. Les maisons anciennes, avec leurs soupiraux et leurs murs en pierre, offrent de nombreux passages.',
        'Dans les jardins, les composts, les abris et les tas de bois servent d’abri aux rats. Les mangeoires à oiseaux et la nourriture des animaux laissée dehors attirent aussi les rongeurs sans qu’on y pense.',
      ] },
      { h: 'La Butte Rouge et les résidences : traiter les parties communes', p: [
        'La **cité-jardin de la Butte Rouge**, l’un des grands ensembles historiques des Hauts-de-Seine, et les résidences de la ville ont des caves et des locaux poubelles où les rongeurs s’installent. La dératisation des parties communes revient au bailleur ou au syndic : c’est par là qu’il faut commencer pour que les logements restent protégés.',
      ] },
      { h: 'Quelles méthodes utilisons-nous à Châtenay-Malabry ?', p: [
        'Postes d’appâtage verrouillés hors de portée des enfants et des animaux, pièges mécaniques, ou **piège Ekomille sans raticide** pour les familles qui préfèrent éviter le produit. Dans tous les cas, nous cherchons les points d’entrée et nous les bouchons : sans colmatage, d’autres rongeurs reviennent du bois voisin.',
      ] },
    ],
    faq: [
      { q: 'Pourquoi ai-je des souris à l’automne à Châtenay-Malabry ?', a: 'Les maisons proches des bois et des parcs voient les souris et mulots entrer quand le froid arrive. Il faut traiter et boucher les accès des sous-sols, garages et combles.' },
      { q: 'Intervenez-vous à la Butte Rouge ?', a: 'Oui, pour les bailleurs comme pour les locataires. Les parties communes sont traitées avec le bailleur, puis les logements qui le demandent.' },
    ],
  },
  'chatillon': {
    titre: 'Dératisation à Châtillon : rats ou souris, comment s’en débarrasser ?',
    intro: 'Châtillon compte **36 705 habitants** sur **2,92 km²** (Insee), soit plus de **12 500 habitants au km²**. Ville dense, au terminus de la **ligne 13** et traversée par le **tram T6**, elle mêle immeubles, résidences et quartiers pavillonnaires sur le plateau.',
    sections: [
      { h: 'Où trouve-t-on des rongeurs à Châtillon ?', p: [
        'Dans les immeubles du centre et autour de **Châtillon-Montrouge**, ce sont surtout les caves, les locaux poubelles et les parkings souterrains. Les souris montent ensuite dans les étages par les gaines.',
        'Dans les quartiers pavillonnaires comme les **Sablons** ou **Guynemer**, les rats creusent dans les jardins et les souris entrent par les sous-sols et les garages. Le **parc André-Malraux** et le **parc des Pierrettes** apportent de la verdure, mais aussi des abris pour les rongeurs.',
      ] },
      { h: 'Les chantiers déplacent-ils les rats ?', p: [
        'Oui. Les grands travaux, comme ceux qui ont accompagné l’arrivée du tram T6 et les nouveaux quartiers, dérangent les rongeurs installés dans le sol et les réseaux. Ils cherchent alors de nouveaux abris dans les immeubles et maisons voisins. C’est souvent dans ces périodes que les appels augmentent.',
      ] },
      { h: 'Notre intervention à Châtillon', p: [
        'Diagnostic des accès, postes sécurisés ou pièges, colmatage et contrôle. Pour les copropriétés, le syndic reçoit un rapport avec le plan des postes. Devis gratuit avant le déplacement, dès 120 € TTC pour un appartement.',
      ] },
    ],
    faq: [
      { q: 'Des souris dans mon appartement à Châtillon : faut-il traiter l’immeuble ?', a: 'Souvent oui, car les souris circulent par les gaines et les caves. Nous traitons votre logement et conseillons au syndic de traiter les parties communes.' },
      { q: 'Combien coûte une dératisation à Châtillon ?', a: 'Dès 120 € TTC pour un appartement, rats ou souris. Le devis est gratuit et donné avant l’intervention.' },
    ],
  },
  'clamart': {
    titre: 'Dératisation à Clamart : le guide pour les maisons, les résidences et les commerces',
    intro: 'Clamart compte **58 576 habitants** sur **8,76 km²** (Insee). La ville s’étend du centre et de la gare jusqu’au **Petit-Clamart**, avec la **forêt de Meudon** et le **bois de Verrières** à ses portes. Les rongeurs y viennent autant des espaces boisés que des réseaux urbains.',
    sections: [
      { h: 'Pourquoi des rongeurs près des bois de Clamart ?', p: [
        'Les maisons en lisière de forêt voient arriver souris, mulots et parfois lérots dès l’automne. Ils entrent par les soupiraux, les garages, les passages de tuyaux et la toiture. Les quartiers pavillonnaires du **Jardin Parisien** ou de **Percy** sont les plus concernés.',
      ] },
      { h: 'Les résidences et le centre-ville', p: [
        'Autour de la **gare de Clamart**, du centre et des grandes résidences du **Petit-Clamart**, ce sont les caves, les locaux poubelles et les parkings qui attirent les rats. Les commerces de bouche et les restaurants demandent un suivi régulier, avec registre et attestation.',
        'Avec les trams **T6** et **T10**, de nouveaux quartiers se sont construits : les chantiers déplacent les rongeurs vers les bâtiments voisins.',
      ] },
      { h: 'Que faire si vous entendez du bruit dans les combles ?', p: [
        'Petits trottinements : souvent des souris. Cavalcades et petits cris du printemps à l’automne, puis silence en hiver : plutôt un lérot, fréquent près des bois. Notre guide [rat ou souris](/blog/rat-ou-souris-comment-reconnaitre) aide à faire la différence. Dans tous les cas, nous identifions l’animal avant de traiter.',
      ] },
    ],
    faq: [
      { q: 'Les maisons près de la forêt de Meudon ont-elles plus de souris ?', a: 'Oui, surtout à l’automne. Les souris et mulots quittent les bois pour les sous-sols et les garages. Il faut traiter et boucher les accès.' },
      { q: 'Intervenez-vous au Petit-Clamart ?', a: 'Oui, dans tout Clamart : maisons, résidences, commerces. Devis gratuit avant l’intervention.' },
    ],
  },
  'gennevilliers': {
    titre: 'Dératisation à Gennevilliers : port, zones d’activités et quartiers d’habitation',
    intro: 'Gennevilliers compte **50 979 habitants** sur **11,63 km²** (Insee). La ville accueille le **port de Gennevilliers**, le plus grand port fluvial d’Île-de-France, et de vastes zones d’activités au bord de la **Seine**. Entrepôts, quais et denrées font de la dératisation un enjeu permanent pour les entreprises comme pour les habitants.',
    sections: [
      { h: 'Entreprises et entrepôts : pourquoi un plan de lutte ?', p: [
        'Dans les zones portuaires et industrielles, les rats trouvent eau, abri et nourriture. Une intervention ponctuelle ne suffit pas : nous mettons en place des **postes numérotés**, des passages programmés et un **registre** à jour, utile lors des audits et contrôles sanitaires.',
      ] },
      { h: 'Les quartiers d’habitation : Grésillons, Luth, Agnettes', p: [
        'Dans les quartiers du **Luth**, des **Agnettes** ou des **Grésillons**, les grandes résidences ont des caves, des vide-ordures et des locaux poubelles où les rongeurs s’installent. La dératisation des parties communes, organisée par le bailleur, est la première étape.',
        'Le **village Chandon** et les secteurs plus anciens ont des maisons avec jardin : rats dans les jardins, souris dans les sous-sols.',
      ] },
      { h: 'Le parc des Chanteraines et les berges', p: [
        'Le grand **parc des Chanteraines** et les berges de la Seine sont des milieux où vivent les surmulots. Les immeubles et maisons proches doivent surveiller leurs caves et leurs jardins, surtout après les crues.',
      ] },
    ],
    faq: [
      { q: 'Faites-vous des contrats pour les entreprises du port de Gennevilliers ?', a: 'Oui : postes numérotés, passages programmés, registre et attestation à chaque visite.' },
      { q: 'Je suis locataire aux Agnettes, qui doit dératiser ?', a: 'Les parties communes relèvent du bailleur. Prévenez-le ; nous pouvons intervenir à sa demande, puis dans votre logement si besoin.' },
    ],
  },
  'meudon': {
    titre: 'Dératisation à Meudon : de la forêt aux bords de Seine, nos solutions',
    intro: 'Meudon compte **46 334 habitants** sur **9,94 km²** (Insee). La **forêt domaniale de Meudon** couvre une grande partie de son territoire, de **Meudon-la-Forêt** au plateau de **Bellevue**, jusqu’au **Bas-Meudon** en bord de Seine. Chaque secteur a ses rongeurs.',
    sections: [
      { h: 'Meudon-la-Forêt et Bellevue : souris, mulots et lérots', p: [
        'Les maisons et résidences en lisière de forêt voient arriver souris, mulots et lérots à l’automne. Les lérots, qui hibernent, font du bruit dans les combles du printemps à l’automne puis se taisent l’hiver : c’est un indice précieux pour les reconnaître.',
      ] },
      { h: 'Le Bas-Meudon et les bords de Seine : les surmulots', p: [
        'Près de la **Seine**, autour de **Meudon-sur-Seine** et des anciens sites industriels, ce sont les surmulots (rats d’égout) qui dominent. Ils remontent par les réseaux, les caves et les jardins, surtout après les crues.',
      ] },
      { h: 'Le centre et Val-Fleury : immeubles et commerces', p: [
        'Dans le centre et autour de la gare de **Meudon-Val-Fleury**, les immeubles, les commerces et les restaurants demandent un traitement des caves et des réserves, avec un suivi pour les professionnels.',
        'Partout, nous cherchons les points d’entrée et nous les bouchons après traitement : c’est ce qui évite le retour des rongeurs venus de la forêt ou du fleuve.',
      ] },
    ],
    faq: [
      { q: 'Du bruit dans le grenier à Meudon, qui s’arrête en hiver : qu’est-ce que c’est ?', a: 'Souvent un lérot ou un loir, qui hibernent. Près de la forêt, c’est fréquent. Nous identifions l’animal et fermons les accès par la toiture.' },
      { q: 'Intervenez-vous au Bas-Meudon ?', a: 'Oui, dans tout Meudon, du Bas-Meudon à Meudon-la-Forêt. Devis gratuit avant l’intervention.' },
    ],
  },
  'montrouge': {
    titre: 'Dératisation à Montrouge : une ville très dense, une méthode adaptée',
    intro: 'Montrouge compte **46 324 habitants** sur seulement **2,07 km²** (Insee), soit plus de **22 300 habitants au km²** : c’est l’une des villes les plus denses de France. Immeubles serrés, commerces au rez-de-chaussée, caves reliées : ici, un rongeur ne touche presque jamais un seul logement.',
    sections: [
      { h: 'Pourquoi les rats passent-ils d’un immeuble à l’autre à Montrouge ?', p: [
        'Dans les rues autour de la **mairie** et de l’avenue de la République, beaucoup d’immeubles ont des caves voisines, séparées par des murs anciens percés pour les réseaux. Les rats et les souris circulent par ces passages. C’est pourquoi nous traitons tout le sous-sol et bouchons les communications entre caves.',
      ] },
      { h: 'Commerces, restaurants et marchés', p: [
        'Les commerces de bouche au rez-de-chaussée attirent les rongeurs, qui montent ensuite vers les logements. Pour les restaurants et boutiques, nous proposons un contrat avec passages programmés et attestation.',
      ] },
      { h: 'Jardins partagés et parcs', p: [
        'Avec 6 jardins partagés recensés sur OpenStreetMap et des parcs comme le **parc Jean-Loup-Metton**, Montrouge cultive au pied des immeubles. Composts et récoltes doivent être protégés pour ne pas attirer les rats.',
      ] },
    ],
    faq: [
      { q: 'Pourquoi les rats reviennent-ils dans mon immeuble à Montrouge ?', a: 'Parce que les caves communiquent avec les immeubles voisins. Sans colmatage, de nouveaux rongeurs arrivent. Nous traitons et bouchons les passages.' },
      { q: 'Quel est le prix d’une dératisation à Montrouge ?', a: 'Dès 120 € TTC pour un appartement, rats ou souris. Copropriétés et commerces sur devis.' },
    ],
  },
  'paris-4': {
    titre: 'Dératisation à Paris 4e : le Marais, les îles et les quais',
    intro: 'Le 4e arrondissement compte **27 332 habitants** sur **1,6 km²** (Insee). Il réunit le **Marais**, l’**île de la Cité**, l’**île Saint-Louis**, l’Hôtel de Ville et une partie de la **Bastille**. Immeubles anciens, caves voûtées, restaurants nombreux et quais de Seine : un terrain très favorable aux rats.',
    sections: [
      { h: 'Pourquoi tant de rats dans le Marais ?', p: [
        'Les immeubles anciens du Marais ont des **caves voûtées** profondes, souvent reliées entre elles et aux réseaux. Les rats y circulent sans être vus. Les restaurants, boulangeries et épiceries fines, très nombreux, produisent chaque soir des déchets alimentaires qui les attirent.',
      ] },
      { h: 'Les îles et les quais de Seine', p: [
        'Sur l’**île Saint-Louis**, l’**île de la Cité** et le long des quais, les surmulots vivent près de l’eau et remontent vers les immeubles par les caves et les réseaux. Les rez-de-chaussée et les commerces des quais sont les premiers touchés.',
      ] },
      { h: 'Copropriétés anciennes : notre méthode', p: [
        'Dans les copropriétés du 4e, nous commençons par les caves et les cours, avec le syndic. Les postes sont discrets et verrouillés, les passages bouchés au mortier ou au grillage métallique. Le syndic reçoit un rapport à chaque passage.',
      ] },
    ],
    faq: [
      { q: 'Des rats dans la cave de mon immeuble dans le Marais : qui doit agir ?', a: 'La cave est une partie commune : c’est au syndic d’organiser la dératisation. Nous intervenons à sa demande avec un rapport.' },
      { q: 'Intervenez-vous pour les restaurants du 4e ?', a: 'Oui, avec un contrat de suivi, des postes numérotés et une attestation à chaque passage.' },
    ],
  },
  'puteaux': {
    titre: 'Dératisation à Puteaux : de La Défense aux bords de Seine',
    intro: 'Puteaux compte **44 002 habitants** sur **3,19 km²** (Insee). La ville abrite une partie du quartier d’affaires de **La Défense**, l’**île de Puteaux** et de longs quais de Seine. Tours, parkings souterrains, restaurants et immeubles anciens : chaque secteur a ses rongeurs.',
    sections: [
      { h: 'La Défense : un sous-sol à surveiller', p: [
        'Sous la dalle de La Défense, les parkings, les locaux techniques et les réserves des restaurants forment un immense sous-sol. Pour les gestionnaires et commerces, nous posons des **postes numérotés** et assurons des passages réguliers avec registre.',
      ] },
      { h: 'Les bords de Seine et l’île de Puteaux', p: [
        'Le long des quais et sur l’**île de Puteaux**, les surmulots vivent près de l’eau. Les immeubles proches, autour des quartiers **Seine** et **Wilson**, voient les rats entrer par les caves et les parkings.',
      ] },
      { h: 'Le vieux Puteaux et les résidences', p: [
        'Dans le centre ancien, autour de la **République** et du **parc Lebaudy**, les immeubles ont des caves et des cours où les rongeurs circulent. Avec 7 jardins partagés recensés sur OpenStreetMap, la ville cultive aussi au pied des immeubles : composts à protéger.',
      ] },
    ],
    faq: [
      { q: 'Intervenez-vous à La Défense côté Puteaux ?', a: 'Oui, pour les copropriétés, gestionnaires et commerces, avec postes numérotés et suivi.' },
      { q: 'Combien coûte une dératisation à Puteaux ?', a: 'Dès 120 € TTC pour un appartement, rats ou souris, devis gratuit.' },
    ],
  },
}

// Sections complémentaires (12/11/2026) : prévention adaptée au bâti de la ville et situations typiques rencontrées.
// Les situations décrivent des cas fréquents, pas des clients identifiés.
export const GUIDE_PLUS: Record<string, { h: string; p: string[] }[]> = {
  'charenton-le-pont': [
    { h: 'Prévenir le retour des rats dans un immeuble de Charenton', p: [
      'Dans une ville aussi dense, la prévention passe par les parties communes. Les portes de caves doivent fermer jusqu’en bas, avec un bas de porte en bon état. Les grilles des soupiraux et des bouches d’aération doivent être complètes. Les passages de canalisations qui traversent les murs de caves se rebouchent au mortier ou avec un grillage métallique fin, que les rongeurs ne peuvent pas ronger.',
      'Le local poubelles est le point le plus sensible : bacs fermés, sol lavé, aucun sac posé par terre. Dans les résidences proches des quais, il faut aussi vérifier régulièrement les regards et les siphons de sol des parkings.',
    ] },
    { h: 'Situations que nous rencontrons souvent à Charenton-le-Pont', p: [
      'Une **odeur forte dans une cave** et des crottes le long des murs : souvent un surmulot qui circule entre plusieurs caves. Nous traitons l’ensemble du sous-sol et bouchons les passages entre caves.',
      'Des **souris dans une cuisine** au deuxième ou troisième étage : elles montent presque toujours par les gaines techniques. Nous traitons le logement, puis la gaine et les parties communes pour couper le chemin.',
      'Un **commerce** qui voit des traces dans sa réserve : nous posons des postes numérotés, vérifions les livraisons et les bacs à graisse, et mettons en place un suivi avec attestation.',
    ] },
  ],
  'cachan': [
    { h: 'Prévenir les rongeurs dans une maison du Coteau', p: [
      'Sur un terrain en pente, l’eau de pluie et la terre creusent facilement le pied des murs, et les rats y installent leurs terriers. Surveillez les dalles qui se soulèvent, les trous au bas des murets et les abris posés à même le sol.',
      'Fermez les composts, rangez les sacs de graines et de croquettes dans des bacs hermétiques, et ramassez les fruits tombés. Côté maison, posez des grilles sur les soupiraux et bouchez les passages de tuyaux. Ces gestes simples réduisent nettement les visites.',
    ] },
    { h: 'Situations que nous rencontrons souvent à Cachan', p: [
      'Un **rat qui sort des toilettes** dans une maison du bas de la ville : il remonte du réseau. Nous vérifions le branchement, conseillons un clapet anti-retour et traitons les abords.',
      'Des **terriers dans un jardin** du Coteau, près d’un compost : nous posons des postes verrouillés le long des murs et rebouchons les galeries après traitement.',
      'Des **souris dans une résidence** : nous traitons les caves et les gaines avec le bailleur, puis les logements concernés.',
    ] },
  ],
  'courbevoie': [
    { h: 'Prévenir les rongeurs dans une tour ou une grande résidence', p: [
      'Dans les grands immeubles, les vide-ordures et les locaux poubelles des sous-sols concentrent la nourriture. Il faut les nettoyer souvent, garder les portes fermées et vérifier les joints des trappes. Les parkings doivent avoir des grilles de sol complètes et des portes qui ferment bien.',
      'Dans les logements, bouchez les passages autour des tuyaux sous l’évier et derrière l’électroménager : c’est par là que les souris arrivent depuis les gaines.',
    ] },
    { h: 'Situations que nous rencontrons souvent à Courbevoie', p: [
      'Des **traces dans un parking souterrain** : postes numérotés à chaque niveau, contrôle des regards et rapport au syndic.',
      'Un **restaurant** qui voit des souris en réserve : traitement, colmatage, puis contrat avec passages réguliers et attestation.',
      'Un **pavillon à Bécon** avec un rat dans le jardin : postes sécurisés le long des murs, rebouchage des terriers et des accès au sous-sol.',
    ] },
  ],
  'colombes': [
    { h: 'Prévenir les rats dans un pavillon de Colombes', p: [
      'Les jardins de Colombes sont souvent bordés de clôtures et de haies où les rats circulent sans être vus. Gardez le pied des clôtures dégagé, rangez le bois sur un support surélevé et fermez les composts. Ne laissez pas la nourriture des animaux dehors la nuit.',
      'Côté maison, contrôlez les soupiraux, les portes de garage et les passages de canalisations. Un trou de la taille d’un pouce suffit à une souris pour entrer.',
    ] },
    { h: 'Situations que nous rencontrons souvent à Colombes', p: [
      'Des **bruits dans les combles** d’une maison : souvent des souris, parfois un rat noir. Nous traitons les combles et cherchons le point d’entrée en toiture ou en façade.',
      'Des **rats près d’un local poubelles** de résidence : traitement des parties communes avec le bailleur et conseils d’entretien.',
      'Des **câbles de voiture rongés** dans un garage : traitement du garage et colmatage des accès depuis le jardin.',
    ] },
  ],
  'clichy': [
    { h: 'Prévenir les rongeurs dans un immeuble de Clichy', p: [
      'Dans les immeubles serrés de Clichy, tout se joue au sous-sol. Faites vérifier les murs de caves mitoyens, les passages de réseaux et les soupiraux. Les portes de caves doivent rester fermées et les caves dégagées : le carton et le bois entassés servent de nid.',
      'Dans les logements, rebouchez les espaces autour des tuyaux et des gaines, surtout en cuisine. Ne laissez pas de nourriture accessible la nuit.',
    ] },
    { h: 'Situations que nous rencontrons souvent à Clichy', p: [
      'Des **rats dans les caves** d’un immeuble ancien : traitement de tout le sous-sol, colmatage des passages vers les immeubles voisins et rapport au syndic.',
      'Des **souris dans plusieurs appartements** d’une même colonne : traitement des logements et de la gaine technique en même temps.',
      'Un **commerce de bouche** au rez-de-chaussée : postes en réserve, contrôle des poubelles et suivi régulier avec attestation.',
    ] },
  ],
  'antony': [
    { h: 'Prévenir les rongeurs dans une maison d’Antony', p: [
      'Les grandes parcelles d’Antony offrent de nombreux abris : tas de bois, abris de jardin, haies épaisses. Rangez le bois sur un support, dégagez le pied des murs et fermez les composts. Les poulaillers et les mangeoires attirent beaucoup les rats : ramassez les graines tombées chaque soir.',
      'Pour la maison, posez des grilles fines sur les soupiraux, vérifiez les portes de garage et bouchez les passages de tuyaux. Avant l’hiver, contrôlez les combles.',
    ] },
    { h: 'Situations que nous rencontrons souvent à Antony', p: [
      'Des **terriers sous une terrasse** : postes sécurisés et rebouchage des galeries après traitement.',
      'Des **souris dans le garage** et des emballages rongés : traitement et colmatage de la porte et des passages.',
      'Un **commerce près du marché** : postes numérotés en réserve et passages programmés avec attestation.',
    ] },
  ],
  'issy-les-moulineaux': [
    { h: 'Prévenir les rongeurs à Issy-les-Moulineaux', p: [
      'Dans les résidences récentes des quais, la prévention passe par l’entretien des locaux poubelles et des parkings : bacs fermés, sol propre, portes qui ferment. Dans les immeubles anciens du centre, il faut surtout contrôler les caves, les soupiraux et les passages de réseaux.',
      'Sur les hauteurs, dans les maisons, rangez le bois, fermez les composts et posez des grilles sur les ouvertures des sous-sols avant l’automne.',
    ] },
    { h: 'Situations que nous rencontrons souvent à Issy-les-Moulineaux', p: [
      'Des **traces dans un parking** de résidence près de la Seine : postes numérotés, contrôle des regards et rapport au syndic.',
      'Des **souris dans une cafétéria d’entreprise** : traitement, colmatage et suivi programmé avec registre.',
      'Des **bruits dans les combles** d’une maison près du Fort : traitement des combles et recherche de l’accès.',
    ] },
  ],
  'rueil-malmaison': [
    { h: 'Prévenir les rongeurs dans une maison de Rueil-Malmaison', p: [
      'Dans les quartiers boisés, le froid pousse souris et mulots vers les maisons dès l’automne. Avant cette période, contrôlez les soupiraux, les portes de garage, les passages de tuyaux et les entrées de toiture. Élaguez les branches qui touchent la toiture : elles servent de pont aux rongeurs grimpeurs.',
      'Au jardin, fermez les composts, rangez les graines et croquettes, et dégagez le pied des murs et des abris.',
    ] },
    { h: 'Situations que nous rencontrons souvent à Rueil-Malmaison', p: [
      'Des **bruits la nuit dans le grenier** d’une maison près de la forêt : souris, mulots ou lérot. Nous identifions l’animal avant de choisir le traitement.',
      'Un **rat près du bassin** ou de la piscine : postes sécurisés et rebouchage des terriers.',
      'Des **souris dans un commerce** du centre : traitement, colmatage et suivi avec attestation.',
    ] },
  ],
  'maisons-alfort': [
    { h: 'Prévenir les rats près de la Marne', p: [
      'Les maisons proches des berges doivent surveiller leurs sous-sols et leurs jardins, surtout après les crues. Posez des grilles fines sur les soupiraux, vérifiez les regards et les canalisations, et faites installer un clapet anti-retour si un rat est déjà remonté par les toilettes.',
      'Au jardin, gardez les composts fermés et ne laissez pas de nourriture accessible la nuit.',
    ] },
    { h: 'Situations que nous rencontrons souvent à Maisons-Alfort', p: [
      'Des **rats dans un jardin de Charentonneau** après une crue : postes sécurisés, rebouchage des terriers et des accès au sous-sol.',
      'Des **souris dans une résidence** : traitement des caves et gaines avec le bailleur, puis des logements.',
      'Un **restaurant** près d’un marché : postes numérotés et suivi programmé avec attestation.',
    ] },
  ],
  'asnieres-sur-seine': [
    { h: 'Prévenir les rongeurs à Asnières-sur-Seine', p: [
      'Dans les immeubles anciens du centre, faites contrôler les caves, les murs mitoyens et les passages de réseaux. Dans les résidences, les locaux poubelles et les vide-ordures doivent être nettoyés souvent et fermés.',
      'Près des quais, les rez-de-chaussée et les sous-sols doivent avoir des grilles complètes et des portes qui ferment jusqu’en bas.',
    ] },
    { h: 'Situations que nous rencontrons souvent à Asnières-sur-Seine', p: [
      'Des **rats dans les caves** d’un immeuble près de la gare : traitement du sous-sol, colmatage et rapport au syndic.',
      'Des **souris dans une cuisine** aux Courtilles : traitement du logement et conseil au bailleur pour les parties communes.',
      'Des **traces près d’un jardin partagé** : postes sécurisés et conseils pour protéger composts et récoltes.',
    ] },
  ],
  'paris-12': [
    { h: 'Prévenir les rongeurs dans un immeuble du 12e', p: [
      'Les immeubles anciens du 12e ont souvent des caves voûtées et des réseaux anciens. Faites vérifier les passages de canalisations, les soupiraux et les portes de caves, et désencombrez les caves : cartons et vieux meubles servent d’abri.',
      'Dans les cours, les poubelles doivent rester fermées et les sacs ne jamais être posés au sol. Près des marchés, nettoyez rapidement les abords après le passage des commerçants.',
    ] },
    { h: 'Situations que nous rencontrons souvent dans le 12e', p: [
      'Des **rats dans une cour** d’immeuble près d’un marché : traitement des caves et de la cour, colmatage et rapport au syndic.',
      'Des **souris dans un appartement** haussmannien : traitement du logement et des gaines, recherche des passages derrière les plinthes et l’électroménager.',
      'Un **restaurant** près de la gare de Lyon : postes numérotés en réserve et suivi avec attestation.',
    ] },
  ],
  'paris-20': [
    { h: 'Prévenir les rongeurs dans un immeuble du 20e', p: [
      'Dans les rues en pente de Belleville et Ménilmontant, les immeubles anciens ont des caves à différents niveaux, parfois humides. Faites contrôler les murs, les soupiraux et les passages de réseaux, et désencombrez les caves.',
      'Dans les résidences, le local poubelles est le point clé : bacs fermés, nettoyage régulier, portes qui ferment. Dans les logements, bouchez les passages autour des tuyaux.',
    ] },
    { h: 'Situations que nous rencontrons souvent dans le 20e', p: [
      'Des **rats dans une cour** près d’un espace vert : traitement des caves et de la cour, colmatage et suivi.',
      'Des **souris dans plusieurs logements** d’une résidence : traitement coordonné avec le bailleur.',
      'Un **restaurant** à Belleville : postes en réserve, contrôle des poubelles et passages programmés avec attestation.',
    ] },
  ],
}
