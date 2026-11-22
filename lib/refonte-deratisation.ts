// Refonte des pages dératisation + ville (22/11/2026, demande de l'utilisateur : « je suis très mal placé », refonte
// page par page, contenu original, plein de photos, sous-titres « société de dératisation », « intervention de
// dératisation », « dératiseur »). Une entrée par ville, écrite à la main, chaque fait vérifié sur la source citée.
// Quand une ville a une entrée ici, la page affiche ce dossier et n'affiche plus les blocs communs répétés d'une
// ville à l'autre (voir app/deratisation/[ville]/page.tsx). Pas de tiret long, pas de chiffre inventé.

export type Source = { label: string; url: string }
export type PhotoVille = { src: string; alt: string; legende: string; credit: string; licence: string; page: string }

export type RefonteDerat = {
  maj: string // date de la refonte (ISO)
  accroche: string // sous le titre du haut de page
  societe: { titre: string; paras: string[] } // sous-titre « Société de dératisation à … »
  chiffres: { valeur: string; texte: string; source: Source }[]
  quartiers: { titre: string; intro: string; zones: { nom: string; texte: string; photo?: PhotoVille }[] }
  intervention: { titre: string; etapes: { t: string; x: string }[] }
  dératiseur: { titre: string; cas: { t: string; x: string }[] }
  mairie: { titre: string; paras: string[]; contact?: { label: string; tel?: string; lien?: { href: string; label: string } } }
  faq: { q: string; a: string }[]
  sources: Source[]
}

const W = 'https://commons.wikimedia.org/wiki/File:'

const VITRY_MAIRIE: Source = { label: 'Ville de Vitry-sur-Seine, Dératisation, désinsectisation (modifié le 12 juillet 2025)', url: 'https://www.vitry94.fr/deratisation-desinsectisation/' }
const VITRY_WIKI: Source = { label: 'Wikipédia, Vitry-sur-Seine (quartiers, Seine, logement, espaces verts, transports)', url: 'https://fr.wikipedia.org/wiki/Vitry-sur-Seine' }
const VITRY_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94081, Vitry-sur-Seine', url: 'https://geo.api.gouv.fr/communes?code=94081&fields=nom,code,codesPostaux,population,surface' }
const SPF_LEPTO: Source = { label: 'Santé publique France, Leptospirose en France en 2024', url: 'https://www.santepubliquefrance.fr/leptospirose/bulletin-national/leptospirose-en-france-en-2024-donnees-de-la-declaration-obligatoire' }

export const REFONTE_DERATISATION: Record<string, RefonteDerat> = {
  'vitry-sur-seine': {
    maj: '2026-11-22',
    accroche: 'De la Seine au plateau, des grandes résidences aux pavillons : nous trouvons par où passent les rats, nous traitons et nous rebouchons les accès.',
    societe: {
      titre: 'Société de dératisation à Vitry-sur-Seine : une ville entre Seine, cités et pavillons',
      paras: [
        'Avec **93 963 habitants** sur **11,67 km²**, Vitry-sur-Seine est l’une des villes les plus peuplées du Val-de-Marne. Elle est bordée à l’est par la **Seine sur 3,8 km**, et son paysage passe en quelques rues d’une **grande résidence** à un **quartier de pavillons**, puis à une **zone d’activités**. Pour une société de dératisation, ce mélange change tout : les rats n’arrivent pas par le même chemin dans une tour, un pavillon ou un entrepôt.',
        '**Plus de 40 %** des logements de la ville sont des HLM et **près de 60 %** ont été construits entre **1949 et 1974**. Dans ces immeubles, les rongeurs circulent par les **caves**, les **colonnes de vide-ordures** et les **gaines techniques**. Dans le parc privé, qui compte une forte part de **maisons individuelles**, ils s’installent plutôt dans les **jardins**, les **vides sanitaires** et les **garages**.',
        'Notre base est à **Saint-Maurice**, à environ **5 km** à vol d’oiseau : nous intervenons à Vitry 7 jours sur 7, souvent le jour même, sans majoration la nuit ni le week-end, comme dans les villes voisines : [Ivry-sur-Seine](/deratisation/ivry-sur-seine), [Villejuif](/deratisation/villejuif), [Choisy-le-Roi](/deratisation/choisy-le-roi), [Thiais](/deratisation/thiais) et [Alfortville](/deratisation/alfortville).',
      ],
    },
    chiffres: [
      { valeur: '93 963', texte: 'habitants (population légale Insee), code postal 94400.', source: VITRY_INSEE },
      { valeur: '3,8 km', texte: 'de berges de Seine, sur toute la limite est de la commune.', source: VITRY_WIKI },
      { valeur: '+ 40 %', texte: 'de logements sociaux (HLM) ; près de 60 % des logements datent de 1949 à 1974.', source: VITRY_WIKI },
      { valeur: '2', texte: 'campagnes de dératisation par an dans les bâtiments communaux, au printemps et à l’automne.', source: VITRY_MAIRIE },
    ],
    quartiers: {
      titre: 'Où se cachent les rats à Vitry : la ville quartier par quartier',
      intro: 'Vitry est découpée en **onze quartiers** : Centre-ville, Clos-Langlois, Commune-de-Paris, Vitry Sud-Ardoines, Paul-Froment-8-mai-1945, Port-à-l’Anglais, Gare-Jean-Jaurès, Fort, Coteau-Malassis, Plateau et Moulin-Vert. Voici ce que chaque type de secteur implique pour une dératisation.',
      zones: [
        {
          nom: 'Port-à-l’Anglais et les bords de Seine',
          texte: 'Le **surmulot**, le rat d’égout, nage et suit les berges, les réseaux d’eaux pluviales et les égouts. Les immeubles et maisons proches des quais, autour du **pont suspendu du Port-à-l’Anglais** et du barrage éclusé, sont les premiers exposés : il faut contrôler les **regards**, les **caves** et les **soupiraux**, et vérifier que les grilles d’évacuation sont en bon état.',
          photo: { src: '/villes/vitry-sur-seine/pont-port-a-l-anglais.jpg', alt: 'Pont suspendu du Port-à-l’Anglais sur la Seine, à Vitry-sur-Seine', legende: 'Le pont suspendu du Port-à-l’Anglais : sur 3,8 km, la Seine longe Vitry. Les berges et les réseaux d’eau sont les autoroutes du surmulot.', credit: 'Pline', licence: 'CC BY-SA 3.0', page: W + 'Suspension_bridge_near_Paris_P1050243.JPG' },
        },
        {
          nom: 'Vitry Sud-Ardoines et les zones d’activités',
          texte: 'Autour de la **gare des Ardoines** (RER C), entrepôts, ateliers et quais de livraison offrent abri et nourriture : palettes stockées au sol, déchets en attente, portes de quai mal jointives. Pour un professionnel, nous posons des **postes numérotés**, tenons un **registre des passages** et remettons une **attestation** utile lors des contrôles.',
        },
        {
          nom: 'Les grandes résidences et les cités',
          texte: 'Dans les immeubles des années 1950 à 1970, un rat vu dans un hall vient presque toujours des **caves** ou du **local vide-ordures**. Traiter un seul appartement ne règle rien : le traitement utile couvre les **parties communes** et les logements touchés, en lien avec le **bailleur** ou le **syndic**, avec un suivi des postes. Les mêmes colonnes font circuler les [cafards à Vitry-sur-Seine](/cafards/vitry-sur-seine).',
          photo: { src: '/villes/vitry-sur-seine/habitations-bon-marche.jpg', alt: 'Habitations à bon marché Désiré Granet, cité des Combattants, à Vitry-sur-Seine', legende: 'Les Habitations à bon marché Désiré Granet, cité des Combattants : dans l’habitat collectif ancien, caves et gaines relient les logements entre eux.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Habitations_Bon_March%C3%A9_D%C3%A9sir%C3%A9_Granet_-_Vitry-sur-Seine_(FR94)_-_2021-03-11_-_3.jpg' },
        },
        {
          nom: 'Le Plateau, le Coteau et les pavillons',
          texte: 'Sur le plateau, autour du **parc départemental des Lilas** (100 hectares), et dans les secteurs pavillonnaires, les rats creusent des **terriers au pied des murs**, s’installent sous les **abris de jardin** et profitent des **composteurs** et des graines tombées des mangeoires. Vitry compte aussi environ **5 000 jardins privatifs** : chacun peut devenir un garde-manger si les déchets restent accessibles.',
        },
        {
          nom: 'Le centre-ville et ses commerces',
          texte: 'Autour de la mairie, du **MAC VAL** et du tracé du **tram T9**, les commerces de bouche et les restaurants concentrent la nourriture. Une souris ou un rat dans une réserve est un vrai problème d’hygiène : nous intervenons **hors des heures d’ouverture** et laissons un plan de prévention simple à l’équipe.',
          photo: { src: '/villes/vitry-sur-seine/mac-val.jpg', alt: 'Le MAC VAL, musée d’art contemporain du Val-de-Marne, en centre-ville de Vitry-sur-Seine', legende: 'Le MAC VAL, en centre-ville : autour des places et des commerces, réserves et locaux poubelles sont les points à surveiller.', credit: 'Didier B (Sam67fr)', licence: 'CC BY 2.5', page: W + 'Vitry_-_Musee_d%27art_contemporain_00.jpg' },
        },
      ],
    },
    intervention: {
      titre: 'Intervention de dératisation à Vitry-sur-Seine : comment se passe notre passage',
      etapes: [
        { t: 'Vous nous appelez ou envoyez une photo', x: 'Une photo des crottes, d’un trou ou d’un emballage rongé suffit souvent pour savoir s’il s’agit de rats ou de souris. Vous avez le prix avant notre déplacement.' },
        { t: 'Le technicien cherche les entrées', x: 'Cave, vide sanitaire, garage, gaines, bas de portes, regards : à Vitry, nous regardons aussi le chemin depuis la rue ou le jardin, car les rongeurs viennent souvent de l’extérieur.' },
        { t: 'Le traitement adapté au lieu', x: 'Postes d’appâtage sécurisés et fermés à clé, pièges mécaniques, ou piège Ekomille sans raticide quand il y a des enfants, des animaux ou un jardin potager : c’est notre [dératisation écologique](/services/deratisation-ecologique).' },
        { t: 'Le rebouchage et le suivi', x: 'Sans colmatage, d’autres rats reviennent. Nous rebouchons les passages trouvés, contrôlons les postes et vous laissons une garantie d’un an. Les [prix d’une dératisation](/tarifs/deratisation) sont détaillés ici.' },
      ],
    },
    dératiseur: {
      titre: 'Dératiseur à Vitry-sur-Seine : les situations que nous traitons le plus',
      cas: [
        { t: 'Un rat dans le hall ou la cave de la résidence', x: 'C’est le signe d’une colonie dans les parties communes. Prévenez par écrit le bailleur ou le syndic : le traitement doit couvrir caves, local poubelles et vide-ordures.' },
        { t: 'Des terriers dans le jardin du pavillon', x: 'Trous au pied d’un mur ou sous une dalle, coulées dans la pelouse : le surmulot creuse. Nous traitons le terrier et protégeons le composteur. Voir aussi [les rats dans le vide sanitaire](/blog/rat-vide-sanitaire).' },
        { t: 'Des grattements dans les cloisons la nuit', x: 'Souvent des souris, parfois des rats qui montent par les gaines. Nous trouvons le passage avant de traiter, pour ne pas laisser un rongeur mourir dans un mur. Uniquement des souris ? Voir notre page [souris à Vitry-sur-Seine](/souris/vitry-sur-seine), et [comment distinguer un rat d’une souris](/blog/rat-ou-souris-comment-reconnaitre).' },
        { t: 'Un rongeur dans la réserve d’un commerce', x: 'Postes sécurisés, pièges, colmatage des arrivées de tuyaux et attestation pour vos contrôles d’hygiène. Notre guide : [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
        { t: 'Un rat qui remonte par les toilettes', x: 'Rare mais réel près des réseaux d’égout : nous traitons le point d’entrée et vous conseillons sur le clapet anti-retour. Tout est expliqué dans [rat dans les toilettes : que faire](/blog/rat-dans-les-toilettes).' },
      ],
    },
    mairie: {
      titre: 'Mairie, égouts, bailleurs : qui dératise quoi à Vitry',
      paras: [
        'La ville de Vitry organise **deux campagnes de dératisation par an** dans l’ensemble des **bâtiments communaux** : celle du **printemps** et celle de l’**automne**, conseillée. Elle intervient aussi de façon curative dans les **parcs et espaces verts** dès qu’une présence de rongeurs lui est signalée.',
        'Les **réseaux d’assainissement** ne sont pas traités par la ville : l’établissement public territorial **Grand-Orly Seine Bièvre** dératise ses réseaux **deux fois par an**, et le **Conseil départemental du Val-de-Marne** une fois par an.',
        'Pour les logements, commerces et terrains privés, la dératisation est une **obligation** du règlement sanitaire départemental : elle revient aux **propriétaires de pavillons**, aux **syndics et gérants d’immeubles**, aux **commerçants** et aux propriétaires de **terrains non bâtis**. La ville leur demande de traiter aux **mêmes périodes** que ses campagnes. C’est là que nous intervenons.',
      ],
      contact: { label: 'Rats sur un bâtiment public ou dans un parc : signalez-les à la ville (secteur Hygiène et Santé) ou sur la plateforme Vitry Ma Rue.', tel: '01 46 82 84 04', lien: { href: 'https://www.vitry94.fr/deratisation-desinsectisation/', label: 'La page officielle de la ville' } },
    },
    faq: [
      { q: 'Combien coûte une dératisation à Vitry-sur-Seine ?', a: 'À partir de 120 € TTC pour un appartement, rats ou souris. Pour une maison, un commerce ou une copropriété, le prix est fixé sur devis gratuit, avant l’intervention. Garantie 1 an.' },
      { q: 'La mairie de Vitry dératise-t-elle chez les particuliers ?', a: 'Non. La ville traite ses bâtiments communaux (deux campagnes par an) et intervient dans les parcs et espaces verts sur signalement. Dans un logement, un commerce ou un terrain privé, la dératisation revient au propriétaire, au syndic ou à l’occupant.' },
      { q: 'Qui dératise les égouts à Vitry-sur-Seine ?', a: 'L’établissement public territorial Grand-Orly Seine Bièvre traite ses réseaux deux fois par an, et le Conseil départemental du Val-de-Marne une fois par an, selon la ville de Vitry.' },
      { q: 'À quelle période faire dératiser à Vitry ?', a: 'La ville demande aux propriétaires privés de traiter aux mêmes périodes que ses campagnes : au printemps et à l’automne. En cas d’infestation, n’attendez pas : un rat vu en plein jour signale souvent une colonie installée.' },
      { q: 'Je suis locataire en HLM à Vitry : qui appeler ?', a: 'Pour les caves, halls, locaux poubelles et vide-ordures, prévenez par écrit votre bailleur, avec photos : les parties communes relèvent de lui. Dans le logement, demandez-lui comment il organise le traitement.' },
      { q: 'Les rats viennent-ils de la Seine ?', a: 'Le surmulot vit volontiers près de l’eau et circule par les berges et les réseaux. Les logements proches des quais, autour du Port-à-l’Anglais, sont plus exposés : regards, caves et soupiraux sont à contrôler en priorité.' },
      { q: 'Peut-on dératiser sans poison dans un pavillon avec jardin ?', a: 'Oui : pièges mécaniques, piège multicapture Ekomille sans raticide et colmatage des accès. C’est la solution que nous proposons quand il y a des enfants, des animaux ou un potager.' },
      { q: 'Intervenez-vous vite à Vitry-sur-Seine ?', a: 'Oui. Notre base de Saint-Maurice est à environ 5 km : nous intervenons 7j/7, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
    ],
    sources: [VITRY_MAIRIE, VITRY_WIKI, VITRY_INSEE, SPF_LEPTO],
  },
}

// ── Champigny-sur-Marne (22/11/2026) ──
const CHAMPIGNY_WIKI: Source = { label: 'Wikipédia, Champigny-sur-Marne (quartiers, Marne, logement, parcs, transports)', url: 'https://fr.wikipedia.org/wiki/Champigny-sur-Marne' }
const CHAMPIGNY_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94017, Champigny-sur-Marne', url: 'https://geo.api.gouv.fr/communes?code=94017&fields=nom,code,codesPostaux,population,surface' }
const RSD_94: Source = { label: 'Ville de Fresnes, arrêté n° 2026-213 sur la lutte contre les rongeurs, visant l’article 119 du règlement sanitaire départemental du Val-de-Marne (arrêté préfectoral n° 85-115 du 26 février 1985)', url: 'https://www.fresnes94.fr/app/uploads/1/2026/07/2026-213-arrete-portant-obligation-de-lutte-contre-proliferation-rongeurs-fresnes.pdf' }

REFONTE_DERATISATION['champigny-sur-marne'] = {
  maj: '2026-11-22',
  accroche: 'Bords de Marne, grands ensembles du Bois-l’Abbé, pavillons du Plateau et de Coeuilly : à Champigny, les rats ne passent pas par les mêmes chemins. Nous trouvons les leurs.',
  societe: {
    titre: 'Société de dératisation à Champigny-sur-Marne : une ville prise entre deux bras de Marne',
    paras: [
      'Champigny-sur-Marne compte **78 072 habitants** sur **11,30 km²**. Sa particularité : la ville est **bordée des deux côtés par la Marne**, avec **quatre îles classées réserves naturelles régionales**. L’eau, les berges et les réseaux qui y descendent sont l’habitat préféré du **surmulot**, le rat d’égout, qui nage très bien et remonte vers les jardins et les caves.',
      'Le reste de la ville est très contrasté : **37 % de logements sociaux**, de grands ensembles comme au **Bois-l’Abbé** ou aux **Mordacs**, mais aussi **près d’un logement sur trois en maison individuelle**. Pour une société de dératisation, c’est deux métiers : traiter les **parties communes** d’une résidence avec le bailleur, ou chercher un **terrier sous un abri de jardin**.',
      'Nous connaissons bien Champigny : nous y avons détruit un [nid de frelons asiatiques à 12 mètres en nacelle](/blog/nid-frelons-asiatiques-12-metres-nacelle-champigny-sur-marne#video) et traité les lits d’un [établissement de tout-petits contre les punaises de lit, par le froid](/punaises-de-lit/champigny-sur-marne). Notre base de **Saint-Maurice** est à quelques minutes.',
    ],
  },
  chiffres: [
    { valeur: '78 072', texte: 'habitants (population légale Insee), code postal 94500.', source: CHAMPIGNY_INSEE },
    { valeur: '4 îles', texte: 'de la Marne classées réserves naturelles régionales depuis 1999 : la ville est bordée par la Marne des deux côtés.', source: CHAMPIGNY_WIKI },
    { valeur: '37 %', texte: 'de logements sociaux (11 241 logements en 2018) ; 30,9 % des logements sont des maisons individuelles.', source: CHAMPIGNY_WIKI },
    { valeur: '73 ha', texte: 'pour le parc départemental du Tremblay, sur l’ancien champ de courses ; 19 ha pour le parc départemental du Plateau.', source: CHAMPIGNY_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Champigny : la ville quartier par quartier',
    intro: 'Champigny compte **huit conseils de quartier** : Tremblay-Polangis-Plant, Maroc, Centre-Ville-Coteaux, Quatre-Cités-Simonettes, Plateau-VDO, Coeuilly-Village Parisien, les Mordacs et le Bois-l’Abbé. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les bords de Marne : Tremblay, Polangis, le Plant',
        texte: 'Le long de la rivière et autour du **parc du Tremblay**, le surmulot trouve l’eau, les berges et la nourriture laissée par les promeneurs. Les **maisons proches des quais** sont les plus exposées : nous contrôlons les **regards d’eaux pluviales**, les **soupiraux** et les **vides sanitaires**, puis nous rebouchons les passages au ras du sol.',
        photo: { src: '/villes/champigny-sur-marne/pont-de-champigny.jpg', alt: 'Le pont de Champigny au-dessus de la Marne', legende: 'Le pont de Champigny : la Marne borde la ville des deux côtés. Berges et réseaux d’eau sont le domaine du surmulot.', credit: 'Lecheminlu', licence: 'Domaine public', page: W + 'Pont_de_Champigny.jpg' },
      },
      {
        nom: 'Le Maroc et les anciens marécages',
        texte: 'Le nom du quartier viendrait des **marécages** que travaillaient autrefois les **maraîchers**. Sur ces terrains bas et humides, les rongeurs creusent facilement : nous cherchons les **terriers au pied des murs** et des clôtures, et nous vérifions que l’eau des gouttières ne crée pas de zones boueuses où ils s’installent.',
      },
      {
        nom: 'Le Bois-l’Abbé, les Mordacs et les grandes résidences',
        texte: 'Dans les tours et les barres, un rat vu dans un hall vient presque toujours des **caves**, des **parkings** ou du **local à déchets**. Le bon traitement couvre les **parties communes** et les logements touchés, en lien avec le **bailleur** ou le **syndic** : postes sécurisés numérotés, contrôle régulier et rebouchage des gaines.',
        photo: { src: '/villes/champigny-sur-marne/tour-rodin-bois-l-abbe.jpg', alt: 'La tour Rodin et les immeubles du quartier du Bois-l’Abbé à Champigny-sur-Marne', legende: 'La tour Rodin, au Bois-l’Abbé : dans l’habitat collectif, caves, parkings et locaux à déchets relient tous les logements.', credit: 'Siciliathisma', licence: 'CC BY-SA 4.0', page: W + 'Tour_Rodin.png' },
      },
      {
        nom: 'Le Plateau, Coeuilly et les pavillons',
        texte: 'Sur le plateau, autour du **parc départemental du Plateau**, et dans les rues pavillonnaires de **Coeuilly** et du **Village Parisien**, les rats et les souris visent les **abris de jardin**, les **composteurs**, les **poulaillers** et les **garages**. Quand il y a des enfants, des animaux ou un potager, nous privilégions les **pièges sans raticide**.',
      },
      {
        nom: 'Le centre-ville et les Coteaux',
        texte: 'Autour de l’**église Saint-Saturnin**, de la mairie et des rues commerçantes, les **réserves** et les **locaux poubelles** des commerces de bouche attirent rats et souris. Nous intervenons **hors des heures d’ouverture** et remettons une **attestation** pour les contrôles d’hygiène.',
        photo: { src: '/villes/champigny-sur-marne/eglise-saint-saturnin.jpg', alt: 'L’église Saint-Saturnin, au centre-ville de Champigny-sur-Marne', legende: 'L’église Saint-Saturnin, au centre-ville : réserves et locaux poubelles des commerces sont les points à surveiller.', credit: 'Gabriel y Galan', licence: 'CC BY-SA 3.0', page: W + 'Champigny-sur-Marne_(94)_%C3%89glise_Saint-Saturnin.jpg' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention de dératisation à Champigny-sur-Marne : notre méthode, sans surprise',
    etapes: [
      { t: 'Photo et prix avant de venir', x: 'Envoyez une photo des crottes, d’un trou ou d’un sac rongé : nous identifions le rongeur et vous donnons le prix. Devis gratuit, dès 120 € pour un appartement.' },
      { t: 'Recherche des entrées', x: 'Près de la Marne, nous commençons par les regards et le vide sanitaire ; en résidence, par les caves et le local à déchets ; en pavillon, par le jardin et le garage.' },
      { t: 'Traitement adapté', x: 'Postes d’appâtage sécurisés et verrouillés, pièges mécaniques, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et garantie', x: 'Les passages trouvés sont rebouchés, les postes contrôlés. Garantie 1 an. Le détail des [prix d’une dératisation](/tarifs/deratisation) est ici.' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Champigny-sur-Marne : les cas que nous rencontrons',
    cas: [
      { t: 'Des rats sur la berge, au fond du jardin', x: 'Un jardin qui descend vers la Marne reçoit la visite des surmulots. Nous traitons les terriers et protégeons le composteur, puis nous fermons les passages vers la maison. Voir aussi [les rats dans le vide sanitaire](/blog/rat-vide-sanitaire).' },
      { t: 'Un rat dans la cave de la résidence', x: 'Prévenez par écrit le bailleur ou le syndic : les caves et le local à déchets relèvent des parties communes. Le traitement doit couvrir tout le bâtiment.' },
      { t: 'Des bruits dans le plafond ou les cloisons', x: 'Souvent des souris, qui passent par des trous de la taille d’un stylo. Notre page [souris à Champigny-sur-Marne](/souris/champigny-sur-marne) explique comment nous les trouvons sans casser les murs.' },
      { t: 'Un rongeur dans la réserve d’un commerce', x: 'Postes numérotés, registre des passages et attestation : voir notre guide [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
      { t: 'Un rat qui remonte par les toilettes', x: 'Près des réseaux d’égout, cela arrive : nous traitons le point d’entrée et conseillons un clapet anti-retour. Tout est expliqué dans [rat dans les toilettes : que faire](/blog/rat-dans-les-toilettes).' },
    ],
  },
  mairie: {
    titre: 'Propriétaire, syndic, locataire : qui doit dératiser à Champigny',
    paras: [
      'Dans le Val-de-Marne, le **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) consacre son **article 119** à la lutte contre les rongeurs. Il revient aux **propriétaires**, **syndics**, **bailleurs**, **gestionnaires** et **occupants** d’empêcher l’installation des rats dans leurs propriétés. À Champigny comme ailleurs, la dératisation d’un pavillon, d’un immeuble ou d’un commerce est donc à leur charge, pas à celle de la mairie.',
      'Locataire, vous signalez le problème **par écrit** au propriétaire ou au bailleur, avec photos. Pour des rats sur la voie publique, dans un parc ou un bâtiment communal, c’est la **mairie** qu’il faut prévenir.',
      'Nous intervenons aussi dans les villes voisines : [Saint-Maur-des-Fossés](/deratisation/saint-maur-des-fosses), [Joinville-le-Pont](/deratisation/joinville-le-pont), [Chennevières-sur-Marne](/deratisation/chennevieres-sur-marne), [Villiers-sur-Marne](/deratisation/villiers-sur-marne) et [Bry-sur-Marne](/deratisation/bry-sur-marne).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Champigny-sur-Marne ?', a: 'À partir de 120 € TTC pour un appartement, rats ou souris. Maison, commerce ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Les rats viennent-ils de la Marne ?', a: 'Le surmulot vit volontiers près de l’eau et circule par les berges et les réseaux. Champigny étant bordée par la Marne des deux côtés, les maisons proches des quais sont plus exposées : regards, soupiraux et vide sanitaire sont à contrôler en premier.' },
    { q: 'Qui doit payer la dératisation d’un immeuble à Champigny ?', a: 'Les parties communes (caves, parkings, local à déchets) relèvent du propriétaire ou du syndic. Le règlement sanitaire du Val-de-Marne (article 119) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Je suis locataire au Bois-l’Abbé ou aux Mordacs : que faire ?', a: 'Signalez les rats par écrit à votre bailleur, avec des photos et la date. Il organise le traitement des parties communes. Gardez une copie de votre courrier.' },
    { q: 'Peut-on dératiser sans poison dans un pavillon ?', a: 'Oui : pièges mécaniques, piège multicapture Ekomille sans raticide et rebouchage des accès. Nous le proposons quand il y a des enfants, des animaux ou un potager.' },
    { q: 'Mon poulailler ou mon composteur attire-t-il les rats ?', a: 'Oui, s’ils donnent accès à la nourriture. Stockez les graines dans des bacs fermés, ramassez les restes le soir et fermez le composteur : le traitement tient beaucoup mieux.' },
    { q: 'Traitez-vous les commerces et restaurants de Champigny ?', a: 'Oui, hors des heures d’ouverture, avec postes numérotés, suivi et attestation pour vos contrôles d’hygiène.' },
    { q: 'Intervenez-vous vite à Champigny-sur-Marne ?', a: 'Oui, 7j/7, souvent le jour même, depuis notre base de Saint-Maurice, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [CHAMPIGNY_INSEE, CHAMPIGNY_WIKI, RSD_94, SPF_LEPTO],
}

export const refonteDerat = (slug: string) => REFONTE_DERATISATION[slug]
