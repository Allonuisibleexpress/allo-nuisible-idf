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
      titre: 'Société de dératisation à Vitry-sur-Seine (94400) : une ville entre Seine, cités et pavillons',
      paras: [
        'Avec **93 963 habitants** sur **11,67 km²**, Vitry-sur-Seine est l’une des villes les plus peuplées du Val-de-Marne. Elle est bordée à l’est par la **Seine sur 3,8 km**, et son paysage passe en quelques rues d’une **grande résidence** à un **quartier de pavillons**, puis à une **zone d’activités**. Pour une société de dératisation, ce mélange change tout : les rats n’arrivent pas par le même chemin dans une tour, un pavillon ou un entrepôt.',
        '**Plus de 40 %** des logements de la ville sont des HLM et **près de 60 %** ont été construits entre **1949 et 1974**. Dans ces immeubles, les rongeurs circulent par les **caves**, les **colonnes de vide-ordures** et les **gaines techniques**. Dans le parc privé, qui compte une forte part de **maisons individuelles**, ils s’installent plutôt dans les **jardins**, les **vides sanitaires** et les **garages**.',
        'Notre base est à **Saint-Maurice**, à environ **5 km** à vol d’oiseau : nous intervenons à Vitry 7 jours sur 7, souvent le jour même, sans majoration la nuit ni le week-end, comme dans les villes voisines : [Ivry-sur-Seine](/deratisation/ivry-sur-seine), [Villejuif](/deratisation/villejuif), [Choisy-le-Roi](/deratisation/choisy-le-roi), [Thiais](/deratisation/thiais) et [Alfortville](/deratisation/alfortville).',
        'Nos autres pages pour la ville : [punaises de lit à Vitry-sur-Seine](/punaises-de-lit/vitry-sur-seine), [souris à Vitry-sur-Seine](/souris/vitry-sur-seine), [cafards à Vitry-sur-Seine](/cafards/vitry-sur-seine) et [fourmis à Vitry-sur-Seine](/fourmis/vitry-sur-seine).',
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
      titre: 'Intervention contre les rats à Vitry-sur-Seine (94400) : notre dératisation, étape par étape',
      etapes: [
        { t: 'Vous nous appelez ou envoyez une photo', x: 'Une photo des crottes, d’un trou ou d’un emballage rongé suffit souvent pour savoir s’il s’agit de rats ou de souris. Vous avez le prix avant notre déplacement.' },
        { t: 'Le technicien cherche les entrées', x: 'Cave, vide sanitaire, garage, gaines, bas de portes, regards : à Vitry, nous regardons aussi le chemin depuis la rue ou le jardin, car les rongeurs viennent souvent de l’extérieur.' },
        { t: 'Le traitement adapté au lieu', x: 'Postes d’appâtage sécurisés et fermés à clé, pièges mécaniques, ou piège Ekomille sans raticide quand il y a des enfants, des animaux ou un jardin potager : c’est notre [dératisation écologique](/services/deratisation-ecologique).' },
        { t: 'Le rebouchage et le suivi', x: 'Sans colmatage, d’autres rats reviennent. Nous rebouchons les passages trouvés, contrôlons les postes et vous laissons une garantie d’un an. Les [prix d’une dératisation](/tarifs/deratisation) sont détaillés ici.' },
      ],
    },
    dératiseur: {
      titre: 'Dératiseur à Vitry-sur-Seine (94400) : les situations que nous traitons le plus',
      cas: [
        { t: 'Un rat dans le hall ou la cave de la résidence', x: 'C’est le signe d’une colonie dans les parties communes. Prévenez par écrit le bailleur ou le syndic : le traitement doit couvrir caves, local poubelles et vide-ordures.' },
        { t: 'Des terriers dans le jardin du pavillon', x: 'Trous au pied d’un mur ou sous une dalle, coulées dans la pelouse : le surmulot creuse. Nous traitons le terrier et protégeons le composteur. Voir aussi [les rats dans le vide sanitaire](/blog/rat-vide-sanitaire).' },
        { t: 'Des grattements dans les cloisons la nuit', x: 'Souvent des souris, parfois des rats qui montent par les gaines. Nous trouvons le passage avant de traiter, pour ne pas laisser un rongeur mourir dans un mur. Uniquement des souris ? Voir notre page [souris à Vitry-sur-Seine](/souris/vitry-sur-seine), et [comment distinguer un rat d’une souris](/blog/rat-ou-souris-comment-reconnaitre).' },
        { t: 'Un rongeur dans la réserve d’un commerce', x: 'Postes sécurisés, pièges, colmatage des arrivées de tuyaux et attestation pour vos contrôles d’hygiène. Notre guide : [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
        { t: 'Un rat qui remonte par les toilettes', x: 'Rare mais réel près des réseaux d’égout : nous traitons le point d’entrée et vous conseillons sur le clapet anti-retour. Tout est expliqué dans [rat dans les toilettes : que faire](/blog/rat-dans-les-toilettes).' },
      ],
    },
    mairie: {
      titre: 'Entreprise de dératisation, mairie, bailleur : qui fait quoi à Vitry-sur-Seine',
      paras: [
        'La ville de Vitry organise **deux campagnes de dératisation par an** dans l’ensemble des **bâtiments communaux** : celle du **printemps** et celle de l’**automne**, conseillée. Elle intervient aussi de façon curative dans les **parcs et espaces verts** dès qu’une présence de rongeurs lui est signalée.',
        'Les **réseaux d’assainissement** ne sont pas traités par la ville : l’établissement public territorial **Grand-Orly Seine Bièvre** dératise ses réseaux **deux fois par an**, et le **Conseil départemental du Val-de-Marne** une fois par an.',
        'Pour les logements, commerces et terrains privés, la dératisation est une **obligation** du règlement sanitaire départemental : elle revient aux **propriétaires de pavillons**, aux **syndics et gérants d’immeubles**, aux **commerçants** et aux propriétaires de **terrains non bâtis**. La ville leur demande de traiter aux **mêmes périodes** que ses campagnes. C’est là que nous intervenons.',
      ],
      contact: { label: 'Rats sur un bâtiment public ou dans un parc : signalez-les à la ville (secteur Hygiène et Santé) ou sur la plateforme Vitry Ma Rue.', tel: '01 46 82 84 04', lien: { href: 'https://www.vitry94.fr/deratisation-desinsectisation/', label: 'La page officielle de la ville' } },
    },
    faq: [
      { q: 'Combien coûte une dératisation à Vitry-sur-Seine ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pour une maison, un commerce ou une copropriété, le prix est fixé sur devis gratuit, avant l’intervention. Garantie 1 an.' },
      { q: 'La mairie de Vitry dératise-t-elle chez les particuliers ?', a: 'Non. La ville traite ses bâtiments communaux (deux campagnes par an) et intervient dans les parcs et espaces verts sur signalement. Dans un logement, un commerce ou un terrain privé, la dératisation revient au propriétaire, au syndic ou à l’occupant.' },
      { q: 'Qui dératise les égouts à Vitry-sur-Seine ?', a: 'L’établissement public territorial Grand-Orly Seine Bièvre traite ses réseaux deux fois par an, et le Conseil départemental du Val-de-Marne une fois par an, selon la ville de Vitry.' },
      { q: 'À quelle période faire dératiser à Vitry ?', a: 'La ville demande aux propriétaires privés de traiter aux mêmes périodes que ses campagnes : au printemps et à l’automne. En cas d’infestation, n’attendez pas : un [rat vu en plein jour](/blog/rat-mode-de-vie) signale souvent une colonie installée.' },
      { q: 'Je suis locataire en HLM à Vitry : qui appeler ?', a: 'Pour les caves, halls, locaux poubelles et vide-ordures, prévenez par écrit votre bailleur, avec photos : les parties communes relèvent de lui. Dans le logement, demandez-lui comment il organise le traitement.' },
      { q: 'Les rats viennent-ils de la Seine ?', a: 'Le [surmulot](/blog/rat-mode-de-vie) vit volontiers près de l’eau et circule par les berges et les réseaux. Les logements proches des quais, autour du Port-à-l’Anglais, sont plus exposés : regards, caves et soupiraux sont à contrôler en priorité.' },
      { q: 'Peut-on dératiser sans poison dans un pavillon avec jardin ?', a: 'Oui : pièges mécaniques, [piège multicapture Ekomille sans raticide](/services/deratisation-ecologique) et colmatage des accès. C’est la solution que nous proposons quand il y a des enfants, des animaux ou un potager.' },
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
    titre: 'Société de dératisation à Champigny-sur-Marne (94500) : une ville prise entre deux bras de Marne',
    paras: [
      'Champigny-sur-Marne compte **78 072 habitants** sur **11,30 km²**. Sa particularité : la ville est **bordée des deux côtés par la Marne**, avec **quatre îles classées réserves naturelles régionales**. L’eau, les berges et les réseaux qui y descendent sont l’habitat préféré du **surmulot**, le rat d’égout, qui nage très bien et remonte vers les jardins et les caves.',
      'Le reste de la ville est très contrasté : **37 % de logements sociaux**, de grands ensembles comme au **Bois-l’Abbé** ou aux **Mordacs**, mais aussi **près d’un logement sur trois en maison individuelle**. Pour une société de dératisation, c’est deux métiers : traiter les **parties communes** d’une résidence avec le bailleur, ou chercher un **terrier sous un abri de jardin**.',
      'Nous connaissons bien Champigny : nous y avons détruit un [nid de frelons asiatiques à 12 mètres en nacelle](/blog/nid-frelons-asiatiques-12-metres-nacelle-champigny-sur-marne#video) et traité les lits d’un [établissement de tout-petits contre les punaises de lit, par le froid](/punaises-de-lit/champigny-sur-marne). Notre base de **Saint-Maurice** est à quelques minutes.',
      'Nos autres pages pour la ville : [punaises de lit à Champigny-sur-Marne](/punaises-de-lit/champigny-sur-marne), [souris à Champigny-sur-Marne](/souris/champigny-sur-marne) et [fourmis à Champigny-sur-Marne](/fourmis/champigny-sur-marne).',
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
    titre: 'Intervention contre les rats à Champigny-sur-Marne (94500) : notre dératisation, sans surprise',
    etapes: [
      { t: 'Photo et prix avant de venir', x: 'Envoyez une photo des crottes, d’un trou ou d’un sac rongé : nous identifions le rongeur et vous donnons le prix. Devis gratuit, dès 120 € pour un appartement.' },
      { t: 'Recherche des entrées', x: 'Près de la Marne, nous commençons par les regards et le vide sanitaire ; en résidence, par les caves et le local à déchets ; en pavillon, par le jardin et le garage.' },
      { t: 'Traitement adapté', x: 'Postes d’appâtage sécurisés et verrouillés, pièges mécaniques, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et garantie', x: 'Les passages trouvés sont rebouchés, les postes contrôlés. Garantie 1 an. Le détail des [prix d’une dératisation](/tarifs/deratisation) est ici.' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Champigny-sur-Marne (94500) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats sur la berge, au fond du jardin', x: 'Un jardin qui descend vers la Marne reçoit la visite des surmulots. Nous traitons les terriers et protégeons le composteur, puis nous fermons les passages vers la maison. Voir aussi [les rats dans le vide sanitaire](/blog/rat-vide-sanitaire).' },
      { t: 'Un rat dans la cave de la résidence', x: 'Prévenez par écrit le bailleur ou le syndic : les caves et le local à déchets relèvent des parties communes. Le traitement doit couvrir tout le bâtiment.' },
      { t: 'Des bruits dans le plafond ou les cloisons', x: 'Souvent des souris, qui passent par des trous de la taille d’un stylo. Notre page [souris à Champigny-sur-Marne](/souris/champigny-sur-marne) explique comment nous les trouvons sans casser les murs.' },
      { t: 'Un rongeur dans la réserve d’un commerce', x: 'Postes numérotés, registre des passages et attestation : voir notre guide [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
      { t: 'Un rat qui remonte par les toilettes', x: 'Près des réseaux d’égout, cela arrive : nous traitons le point d’entrée et conseillons un clapet anti-retour. Tout est expliqué dans [rat dans les toilettes : que faire](/blog/rat-dans-les-toilettes).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Champigny-sur-Marne',
    paras: [
      'Dans le Val-de-Marne, le **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) consacre son **article 119** à la lutte contre les rongeurs. Il revient aux **propriétaires**, **syndics**, **bailleurs**, **gestionnaires** et **occupants** d’empêcher l’installation des rats dans leurs propriétés. À Champigny comme ailleurs, la dératisation d’un pavillon, d’un immeuble ou d’un commerce est donc à leur charge, pas à celle de la mairie.',
      'Locataire, vous signalez le problème **par écrit** au propriétaire ou au bailleur, avec photos. Pour des rats sur la voie publique, dans un parc ou un bâtiment communal, c’est la **mairie** qu’il faut prévenir.',
      'Nous intervenons aussi dans les villes voisines : [Saint-Maur-des-Fossés](/deratisation/saint-maur-des-fosses), [Joinville-le-Pont](/deratisation/joinville-le-pont), [Chennevières-sur-Marne](/deratisation/chennevieres-sur-marne), [Villiers-sur-Marne](/deratisation/villiers-sur-marne) et [Bry-sur-Marne](/deratisation/bry-sur-marne).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Champigny-sur-Marne ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Maison, commerce ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Les rats viennent-ils de la Marne ?', a: 'Le [surmulot](/blog/rat-mode-de-vie) vit volontiers près de l’eau et circule par les berges et les réseaux. Champigny étant bordée par la Marne des deux côtés, les maisons proches des quais sont plus exposées : regards, soupiraux et vide sanitaire sont à contrôler en premier.' },
    { q: 'Qui doit payer la dératisation d’un immeuble à Champigny ?', a: 'Les parties communes (caves, parkings, local à déchets) relèvent du propriétaire ou du syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Je suis locataire au Bois-l’Abbé ou aux Mordacs : que faire ?', a: 'Signalez les rats par écrit à votre bailleur, avec des photos et la date. Il organise le traitement des parties communes. Gardez une copie de votre courrier.' },
    { q: 'Peut-on dératiser sans poison dans un pavillon ?', a: 'Oui : pièges mécaniques, [piège multicapture Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. Nous le proposons quand il y a des enfants, des animaux ou un potager.' },
    { q: 'Mon poulailler ou mon composteur attire-t-il les rats ?', a: 'Oui, s’ils donnent accès à la nourriture. Stockez les graines dans des bacs fermés, ramassez les restes le soir et [fermez le composteur](/blog/rat-compost) : le traitement tient beaucoup mieux.' },
    { q: 'Traitez-vous les commerces et restaurants de Champigny ?', a: 'Oui, hors des heures d’ouverture, avec postes numérotés, suivi et attestation pour vos contrôles d’hygiène : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    { q: 'Intervenez-vous vite à Champigny-sur-Marne ?', a: 'Oui, 7j/7, souvent le jour même, depuis notre base de Saint-Maurice, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [CHAMPIGNY_INSEE, CHAMPIGNY_WIKI, RSD_94, SPF_LEPTO],
}

// ── Créteil (22/11/2026) ──
const CRETEIL_WIKI: Source = { label: 'Wikipédia, Créteil (quartiers, lac, Marne, espaces verts, transports, commerces)', url: 'https://fr.wikipedia.org/wiki/Cr%C3%A9teil' }
const CRETEIL_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94028, Créteil', url: 'https://geo.api.gouv.fr/communes?code=94028&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['creteil'] = {
  maj: '2026-11-22',
  accroche: 'Lac, bords de Marne, Mont-Mesly, centre commercial et hôpital : à Créteil, chaque quartier a ses rongeurs. Nous trouvons d’où ils viennent avant de traiter.',
  societe: {
    titre: 'Société de dératisation à Créteil (94000) : la préfecture entre lac et Marne',
    paras: [
      'Préfecture du Val-de-Marne, Créteil compte **93 397 habitants** sur **11,42 km²**. Sa géographie explique une bonne partie des appels que nous recevons : un **lac artificiel d’une quarantaine d’hectares** au sud-ouest, des **bords de Marne** aménagés en promenade, et environ **180 hectares d’espaces verts**. L’eau et la végétation attirent le **surmulot**, qui vit près des berges et circule dans les réseaux.',
      'La ville s’est aussi beaucoup construite à partir de **1955**, avec le quartier du **Mont-Mesly**, puis le « Nouveau Créteil » autour de la préfecture. Résultat : beaucoup d’**habitat collectif**, avec ses **caves**, ses **parkings** et ses **locaux à déchets**, à côté du **vieux village** et de ses maisons.',
      'Notre base est à **Saint-Maurice**, juste au nord : nous sommes à Créteil en quelques minutes, 7 jours sur 7. Nous y sommes déjà intervenus, par exemple pour des [punaises cachées dans les lattes d’un sommier](/blog/punaises-de-lit-creteil-sommier-lattes#video), un chantier filmé.',
      'Nos autres pages pour la ville : [souris à Créteil](/souris/creteil), [cafards à Créteil](/cafards/creteil), [punaises de lit à Créteil](/punaises-de-lit/creteil) et [fourmis à Créteil](/fourmis/creteil).',
    ],
  },
  chiffres: [
    { valeur: '93 397', texte: 'habitants (population légale Insee), code postal 94000.', source: CRETEIL_INSEE },
    { valeur: '≈ 40 ha', texte: 'pour le lac de Créteil, plan d’eau artificiel au sud-ouest de la ville.', source: CRETEIL_WIKI },
    { valeur: '180 ha', texte: 'd’espaces verts : île de loisirs, parc Dupeyroux, jardin de la Côte-d’Or, parc de la Brèche.', source: CRETEIL_WIKI },
    { valeur: '25 M', texte: 'de visiteurs par an à Créteil Soleil, centre commercial de 124 100 m² ouvert en 1974.', source: CRETEIL_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Créteil : la ville secteur par secteur',
    intro: 'Créteil est découpée en **vingt quartiers**, des **Bords de Marne** au **Front de Lac**, de l’**Échat** au **Mont-Mesly**. Voici ce que chaque grand secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Le lac, le Front de Lac et la Pointe du Lac',
        texte: 'Autour du **lac** et de l’**île de loisirs**, l’eau, les pelouses et les restes de pique-nique attirent les rongeurs. Les résidences du **Front de Lac** et les immeubles proches de la **Pointe du Lac** (terminus de la ligne 8) doivent surveiller leurs **locaux à déchets** et leurs **parkings souterrains**, où un rat trouve abri et nourriture.',
        photo: { src: '/villes/creteil/lac-ile-de-loisirs.jpg', alt: 'Prairie de l’île de loisirs du lac de Créteil', legende: 'La prairie de l’île de loisirs, au bord du lac : eau, pelouses et poubelles de promenade attirent les rongeurs.', credit: 'Sebfun', licence: 'CC BY-SA 3.0', page: W + 'Cr%C3%A9teil_parc_du_lac.jpg' },
      },
      {
        nom: 'Les Bords de Marne et le vieux Créteil',
        texte: 'Le long de la **Marne**, qui a connu de nombreuses crues, les maisons anciennes ont souvent des **caves voûtées**, des **soupiraux** et des **regards** au ras du sol. Le surmulot remonte par là. Nous contrôlons chaque ouverture et rebouchons les passages, en plus du traitement.',
        photo: { src: '/villes/creteil/colombier-vieux-creteil.jpg', alt: 'Le colombier de Créteil', legende: 'Le colombier de Créteil : dans le bâti ancien, caves et soupiraux sont les premières portes d’entrée des rats.', credit: 'Poulpy', licence: 'CC BY-SA 3.0', page: W + 'Colombier,_Cr%C3%A9teil_-_01.jpg' },
      },
      {
        nom: 'Le Mont-Mesly et les grands ensembles',
        texte: 'Construit à partir de 1955 sur la colline du **Mont-Mesly**, point culminant de la ville, ce secteur compte de nombreux immeubles collectifs. Un rat aperçu dans un hall vient presque toujours des **caves**, des **gaines** ou du **local à déchets** : le traitement doit couvrir les **parties communes**, en lien avec le **bailleur** ou le **syndic**.',
        photo: { src: '/villes/creteil/mont-mesly-place-abbaye.jpg', alt: 'La place de l’Abbaye, au Mont-Mesly, à Créteil', legende: 'La place de l’Abbaye, au Mont-Mesly : dans l’habitat collectif, caves et gaines relient tous les logements.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Place_Abbaye_-_Cr%C3%A9teil_(FR94)_-_2021-03-26_-_2.jpg' },
      },
      {
        nom: 'Préfecture, Créteil Soleil et les zones commerciales',
        texte: 'Autour de la **préfecture** et de **Créteil Soleil**, la restauration et les commerces de bouche produisent beaucoup de déchets alimentaires. Pour un professionnel, nous posons des **postes numérotés**, tenons un **registre** et remettons une **attestation** pour les contrôles d’hygiène, avec des passages **hors des heures d’ouverture**.',
      },
      {
        nom: 'L’Échat, l’université et l’hôpital',
        texte: 'Autour du **CHU Henri-Mondor** et de l’**université Paris-Est Créteil**, qui accueille plus de **25 000 étudiants**, les **résidences étudiantes**, les cuisines collectives et les locaux techniques demandent un suivi régulier : un dispositif **sécurisé**, fermé à clé, et un plan de prévention simple pour les équipes.',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Créteil (94000) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et vous donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'La recherche des entrées', x: 'Près du lac et de la Marne, regards et soupiraux ; en résidence, caves, gaines et local à déchets ; en maison, jardin, garage et vide sanitaire.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage sécurisés et verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Le rebouchage et le suivi', x: 'Les passages sont rebouchés, les postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Créteil (94000) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Un rat dans le parking ou le local à déchets', x: 'C’est le signe d’une colonie dans les parties communes. Prévenez le syndic ou le bailleur par écrit : le traitement doit couvrir tout le sous-sol, pas un seul box.' },
      { t: 'Des souris dans la cuisine d’un appartement', x: 'Elles passent par les gaines et les arrivées d’eau. Notre page [souris à Créteil](/souris/creteil) détaille comment nous trouvons leur passage. Pour faire la différence, voir [rat ou souris : comment reconnaître](/blog/rat-ou-souris-comment-reconnaitre).' },
      { t: 'Des terriers dans le jardin d’une maison', x: 'Trous au pied des murs, coulées dans l’herbe : nous traitons les terriers, protégeons le composteur et fermons l’accès au vide sanitaire. Voir aussi [rats dans le vide sanitaire](/blog/rat-vide-sanitaire).' },
      { t: 'Un rongeur dans un restaurant ou un commerce', x: 'Postes numérotés, suivi et attestation : notre guide [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles) explique ce que vérifient les contrôles.' },
      { t: 'Les blattes qui suivent les mêmes gaines', x: 'Dans les grandes résidences, les cafards empruntent les mêmes colonnes que les souris : voir notre page [cafards à Créteil](/cafards/creteil).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Créteil',
    paras: [
      'Dans le Val-de-Marne, le **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) consacre son **article 119** à la lutte contre les rongeurs : il revient aux **propriétaires**, **syndics**, **bailleurs**, **gestionnaires** et **occupants** d’empêcher l’installation des rats dans leurs propriétés. La dératisation d’une maison, d’un immeuble ou d’un commerce de Créteil est donc à leur charge.',
      'Locataire, prévenez votre propriétaire ou votre bailleur **par écrit**, avec des photos. Pour des rats sur la voie publique ou dans un parc, c’est la **mairie de Créteil** qu’il faut alerter.',
      'Nous intervenons aussi tout autour : [Maisons-Alfort](/deratisation/maisons-alfort), [Saint-Maur-des-Fossés](/deratisation/saint-maur-des-fosses), [Bonneuil-sur-Marne](/deratisation/bonneuil-sur-marne), [Choisy-le-Roi](/deratisation/choisy-le-roi), [Alfortville](/deratisation/alfortville) et [Limeil-Brévannes](/deratisation/limeil-brevannes).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Créteil ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Maison, commerce ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Y a-t-il plus de rats près du lac de Créteil ?', a: 'Les plans d’eau et les berges sont favorables au surmulot : eau, abri et restes de nourriture. Les résidences proches du lac et de la Marne doivent surveiller leurs locaux à déchets, parkings et regards.' },
    { q: 'Qui paie la dératisation d’une résidence au Mont-Mesly ?', a: 'Les parties communes (caves, parkings, local à déchets) relèvent du bailleur ou du syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Intervenez-vous dans les commerces de Créteil Soleil et du centre ?', a: 'Oui, hors des heures d’ouverture, avec postes numérotés, registre des passages et attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    { q: 'Je suis étudiant en résidence à Créteil : que faire ?', a: 'Signalez les rats ou souris au gestionnaire de la résidence, par écrit et avec photos. Il organise le traitement des parties communes et des logements touchés.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Regardez les crottes : celles du [rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de la souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Peut-on dératiser sans poison à Créteil ?', a: 'Oui : pièges mécaniques, [piège multicapture Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants, des animaux ou un jardin potager.' },
    { q: 'Intervenez-vous vite à Créteil ?', a: 'Oui. Notre base de Saint-Maurice est voisine : nous intervenons 7j/7, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [CRETEIL_INSEE, CRETEIL_WIKI, RSD_94, SPF_LEPTO],
}

// ── Villejuif (22/11/2026) ──
const VILLEJUIF_WIKI: Source = { label: 'Wikipédia, Villejuif (relief, logement, hôpitaux, parcs, transports)', url: 'https://fr.wikipedia.org/wiki/Villejuif' }
const VILLEJUIF_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94076, Villejuif', url: 'https://geo.api.gouv.fr/communes?code=94076&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['villejuif'] = {
  maj: '2026-11-22',
  accroche: 'Sur le plateau de Villejuif, pas de rivière : les rats arrivent par les égouts, les caves des grands ensembles et les jardins. Nous trouvons leur chemin avant de traiter.',
  societe: {
    titre: 'Société de dératisation à Villejuif (94800) : une ville sur le plateau',
    paras: [
      'Villejuif compte **60 183 habitants** sur **5,28 km²**, au nord-ouest du Val-de-Marne. La ville est posée sur le **plateau de Longboyau**, entre les vallées de la Seine et de la Bièvre, et **aucun cours d’eau ne la traverse**. Ici, le rat ne vient donc pas des berges : il remonte par le **réseau d’égouts**, les **regards** et les **canalisations**, puis s’installe là où il trouve à manger.',
      'C’est aussi une ville d’**immeubles** : en 2022, **81,2 % des logements** étaient des appartements, avec de grands ensembles comme les **Lozaits**, **Robert-Lebon** ou **Alexandre-Dumas**. Un rongeur repéré dans un hall vient presque toujours des **sous-sols communs**. À côté, le **Bas-Villejuif**, sur les coteaux, garde des **pavillons** avec jardin, cave et vide sanitaire.',
      'Notre base est à **Saint-Maurice** : nous intervenons à Villejuif 7 jours sur 7. Nos autres pages pour la ville : [punaises de lit à Villejuif](/punaises-de-lit/villejuif), [souris à Villejuif](/souris/villejuif), [fourmis à Villejuif](/fourmis/villejuif) et [puces à Villejuif](/puces/villejuif).',
    ],
  },
  chiffres: [
    { valeur: '60 183', texte: 'habitants (population légale Insee), code postal 94800.', source: VILLEJUIF_INSEE },
    { valeur: '81,2 %', texte: 'des logements sont des appartements (2022) : caves, gaines et locaux à déchets partagés.', source: VILLEJUIF_WIKI },
    { valeur: '120 m', texte: 'd’altitude au parc des Hautes-Bruyères, point le plus haut du Val-de-Marne.', source: VILLEJUIF_WIKI },
    { valeur: '10 %', texte: 'du territoire occupé par trois centres hospitaliers : Paul-Guiraud, Paul-Brousse et Gustave-Roussy.', source: VILLEJUIF_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Villejuif : la ville secteur par secteur',
    intro: 'Du **Haut-Villejuif**, sur le plateau, au **Bas-Villejuif**, sur les coteaux, des grands ensembles aux hôpitaux : voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les grands ensembles : Lozaits, Robert-Lebon, Alexandre-Dumas',
        texte: 'Ces cités de **logements sociaux** concentrent beaucoup de foyers autour des mêmes **caves**, **vide-ordures** et **locaux à poubelles**. Le traitement d’un seul appartement ne sert à rien si la colonie vit au sous-sol : nous travaillons avec le **bailleur** sur l’ensemble des **parties communes**, puis nous rebouchons les passages vers les logements.',
        photo: { src: '/villes/villejuif/coulee-verte-robert-lebon.jpg', alt: 'La coulée verte au pied de la cité Robert-Lebon à Villejuif', legende: 'La coulée verte au niveau de la cité Robert-Lebon : végétation au pied des immeubles et locaux communs à surveiller.', credit: 'besopha', licence: 'CC BY-SA 2.0', page: W + 'Villejuif_coulee_verte_a_Robert-Lebon.jpg' },
      },
      {
        nom: 'Le parc des Hautes-Bruyères et les jardins familiaux',
        texte: 'Le plus grand parc de la ville (plus de **14 hectares**) a été aménagé sur une ancienne **carrière de sablons** et compte **85 parcelles de jardins familiaux**. Potagers, **composteurs** et cabanes de jardin attirent les rongeurs. Pour un jardin, nous privilégions les **pièges** et le **rebouchage**, sans laisser d’appât accessible : voir [rat dans le compost](/blog/rat-compost).',
        photo: { src: '/villes/villejuif/parc-hautes-bruyeres.jpg', alt: 'Le parc départemental des Hautes-Bruyères à Villejuif', legende: 'Le parc départemental des Hautes-Bruyères, point le plus haut du Val-de-Marne.', credit: 'besopha', licence: 'CC BY-SA 2.0', page: W + 'Villejuif_parc_des_Hautes-Bruyeres.jpg' },
      },
      {
        nom: 'Monsivry et les hôpitaux',
        texte: 'Au nord-ouest, le quartier de **Monsivry** accueille les hôpitaux **Paul-Guiraud** et **Paul-Brousse**, et l’institut **Gustave-Roussy** est desservi par la **ligne 14** depuis janvier 2025. Cuisines collectives, internats, laboratoires : ces sites exigent des postes **sécurisés et verrouillés**, un **plan de localisation** et un **registre** des passages, que nous fournissons.',
        photo: { src: '/villes/villejuif/hopital-paul-brousse.jpg', alt: 'Entrée principale de l’hôpital Paul-Brousse à Villejuif', legende: 'L’hôpital Paul-Brousse, ouvert en 1913 : un site hospitalier demande un dispositif sécurisé et tracé.', credit: 'besopha', licence: 'CC BY-SA 2.0', page: W + 'Hopital_Paul-Brousse_Villejuif.jpg' },
      },
      {
        nom: 'La RD7, Louis-Aragon et les commerces',
        texte: 'Le long de la **RD7** (ancienne RN7), autour des stations **Louis-Aragon** (métro 7 et tramway T7) et **Paul-Vaillant-Couturier**, restaurants et commerces de bouche produisent des déchets toute la journée. Nous intervenons **hors des heures d’ouverture**, avec postes numérotés et **attestation** pour les contrôles d’hygiène.',
        photo: { src: '/villes/villejuif/rd7-louis-aragon.jpg', alt: 'La RD7 vue depuis la station Louis-Aragon à Villejuif', legende: 'La RD7 vue depuis la station Louis-Aragon : un axe de commerces et de restaurants.', credit: 'besopha', licence: 'CC BY-SA 2.0', page: W + 'Villejuif_RD7_Aragon.jpg' },
      },
      {
        nom: 'Le Bas-Villejuif et les pavillons',
        texte: 'Sur les **coteaux**, à l’est et à l’ouest, les maisons ont souvent un **sous-sol**, une **cave** ou un **vide sanitaire**. Un bruit de grattement dans un plafond ou une cloison, et c’est souvent un rat qui circule dans le bâti : voir [rat dans les murs et cloisons](/blog/rat-dans-les-murs-cloisons).',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Villejuif (94800) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le chemin des rongeurs', x: 'Regards, siphons et canalisations, caves et vide-ordures en immeuble, vide sanitaire et jardin en pavillon : nous trouvons par où ils passent.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Villejuif (94800) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Un rat qui sort des toilettes', x: 'Sur une commune sans rivière, l’égout est la première voie d’entrée. Un rat peut remonter par la cuvette : nous traitons la colonie et vous conseillons sur la pose d’un **clapet anti-rongeurs** par un plombier. Voir [rat dans les toilettes](/blog/rat-dans-les-toilettes).' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines techniques et le pourtour des tuyaux. Notre page [souris à Villejuif](/souris/villejuif) explique comment nous trouvons leur passage, et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des rats dans la cave ou le local à poubelles', x: 'Le signe d’une colonie dans les parties communes. Prévenez le bailleur ou le syndic par écrit : le traitement doit couvrir tout le sous-sol.' },
      { t: 'Des terriers dans un jardin ou un potager', x: 'Trous au pied des murs, coulées dans l’herbe, composteur visité : pièges, protection du compost et fermeture du vide sanitaire. Pour faire la différence, voir [rat ou souris : comment reconnaître](/blog/rat-ou-souris-comment-reconnaitre).' },
      { t: 'Un rongeur dans une cuisine professionnelle', x: 'Restaurant, cantine ou internat : postes numérotés, registre et attestation. Voir notre guide [plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles), et notre page [cafards et blattes](/services/cafards-blattes), qui suivent souvent les mêmes gaines.' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Villejuif',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Avec près d’un tiers de **logements sociaux** à Villejuif, c’est souvent le **bailleur** qui organise et paie la dératisation des parties communes.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique ou dans un square, alertez la **mairie de Villejuif**.',
      'Nous intervenons aussi tout autour : [Le Kremlin-Bicêtre](/deratisation/le-kremlin-bicetre), [Vitry-sur-Seine](/deratisation/vitry-sur-seine), [Cachan](/deratisation/cachan), [L’Haÿ-les-Roses](/deratisation/l-hay-les-roses), [Chevilly-Larue](/deratisation/chevilly-larue), [Arcueil](/deratisation/arcueil) et [Gentilly](/deratisation/gentilly).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Villejuif ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon, commerce ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Pourquoi des rats à Villejuif alors qu’il n’y a pas de rivière ?', a: 'Le rat d’égout (surmulot) vit dans le réseau d’assainissement. Il remonte par les regards, les canalisations et parfois les toilettes, puis s’installe près de la nourriture : poubelles, caves, composteurs.' },
    { q: 'J’habite une cité HLM : qui paie la dératisation ?', a: 'Les parties communes (caves, vide-ordures, local à poubelles) relèvent du bailleur. Signalez-lui le problème par écrit avec photos.' },
    { q: 'Un rat est sorti de mes toilettes : que faire ?', a: 'Fermez l’abattant, mettez un poids dessus et appelez-nous (voir [rat dans les toilettes](/blog/rat-dans-les-toilettes)). Nous traitons la colonie et vous conseillons sur la pose d’un clapet anti-rongeurs, par un plombier, pour éviter que cela recommence.' },
    { q: 'Intervenez-vous dans les hôpitaux et établissements de santé ?', a: 'Oui, avec des postes sécurisés et verrouillés, un plan de localisation, un registre des passages et une attestation, en accord avec les services techniques.' },
    { q: 'Rats dans mon jardin familial : peut-on éviter le poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique), protection du composteur et rebouchage des terriers. C’est la solution que nous recommandons près d’un potager.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Villejuif ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [VILLEJUIF_INSEE, VILLEJUIF_WIKI, RSD_94, SPF_LEPTO],
}

// ── Choisy-le-Roi (22/11/2026) ──
const CHOISY_WIKI: Source = { label: 'Wikipédia, Choisy-le-Roi (Seine, tours de la dalle, logement, transports, parcs)', url: 'https://fr.wikipedia.org/wiki/Choisy-le-Roi' }
const CHOISY_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94022, Choisy-le-Roi', url: 'https://geo.api.gouv.fr/communes?code=94022&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['choisy-le-roi'] = {
  maj: '2026-11-22',
  accroche: 'Une ville coupée en deux par la Seine, des tours de 80 mètres sur la dalle, des pavillons et des quais : à Choisy-le-Roi, nous adaptons la dératisation à chaque rive.',
  societe: {
    titre: 'Société de dératisation à Choisy-le-Roi (94600) : une ville sur les deux rives',
    paras: [
      'Choisy-le-Roi compte **45 946 habitants** sur **5,42 km²**. C’est, avec Paris, **la seule commune de la petite couronne qui s’étend des deux côtés de la Seine**. Le fleuve, ses **quais** et ses **berges** offrent au **surmulot** de l’eau et des abris, et le réseau d’égouts relie les deux rives.',
      'La ville a aussi un centre très vertical : sur la « **dalle** », trois tours de **88, 81 et 68 mètres**, et **huit autres immeubles de plus de 50 mètres**. Dans un immeuble de grande hauteur, un rongeur circule par les **gaines techniques**, les **vide-ordures** et les **colonnes** : il faut traiter à la source, au sous-sol, pas seulement à l’étage où on le voit.',
      'Notre base est à **Saint-Maurice**, de l’autre côté de Créteil : nous intervenons à Choisy-le-Roi 7 jours sur 7. Nos autres pages pour la ville : [souris à Choisy-le-Roi](/souris/choisy-le-roi) et [punaises de lit à Choisy-le-Roi](/punaises-de-lit/choisy-le-roi).',
    ],
  },
  chiffres: [
    { valeur: '45 946', texte: 'habitants (population légale Insee), code postal 94600.', source: CHOISY_INSEE },
    { valeur: '2 rives', texte: 'la seule commune de la petite couronne, avec Paris, à s’étendre de part et d’autre de la Seine.', source: CHOISY_WIKI },
    { valeur: '88 m', texte: 'pour la tour de l’Église, la plus haute des trois tours de la dalle ; huit autres immeubles dépassent 50 m.', source: CHOISY_WIKI },
    { valeur: '4', texte: 'stations du tramway T9 sur la commune depuis avril 2021, en plus de la gare du RER C.', source: CHOISY_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Choisy-le-Roi : la ville secteur par secteur',
    intro: 'Des **quais de Seine** au **quartier des Gondoles**, de la **dalle** et ses tours au quartier **Barbusse**, voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les quais de Seine et les Gondoles',
        texte: 'Le long du **quai des Gondoles** et du parc des Gondoles, la Seine, la végétation des berges et les poubelles de promenade attirent les rats. Les maisons et résidences proches doivent surveiller leurs **soupiraux**, **regards** et **caves**, premières portes d’entrée depuis le fleuve.',
        photo: { src: '/villes/choisy-le-roi/quai-des-gondoles.jpg', alt: 'Le quai des Gondoles au bord de la Seine à Choisy-le-Roi', legende: 'Le quai des Gondoles : berges végétalisées et eau toute proche, un milieu favorable au surmulot.', credit: '1quidam', licence: 'CC BY-SA 3.0', page: W + 'Quai_des_Gondoles_de_Choisy-le-Roi.JPG' },
      },
      {
        nom: 'La dalle, la gare et le centre',
        texte: 'Autour de la **gare du RER C** et de la dalle, commerces, restauration rapide et immeubles de grande hauteur se partagent les mêmes **sous-sols**, **parkings** et **locaux à déchets**. Nous posons des postes numérotés au sous-sol, contrôlons les **vide-ordures** et remettons une **attestation** aux commerçants et aux syndics.',
        photo: { src: '/villes/choisy-le-roi/gare-rer-c.jpg', alt: 'La gare RER C de Choisy-le-Roi', legende: 'La gare de Choisy-le-Roi (RER C), au cœur du centre : commerces et immeubles autour des mêmes sous-sols.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Gare_Choisy_Roi_1.jpg' },
      },
      {
        nom: 'Le quartier Barbusse et les résidences',
        texte: 'Le quartier **Barbusse**, quartier prioritaire de la politique de la ville, compte de nombreux immeubles collectifs. Le traitement doit couvrir les **parties communes** : caves, local à poubelles, espaces verts au pied des bâtiments. Nous travaillons avec le **bailleur** pour que la dératisation tienne dans le temps.',
        photo: { src: '/villes/choisy-le-roi/square-salvador-allende-barbusse.jpg', alt: 'Le square Salvador-Allende dans le quartier Barbusse à Choisy-le-Roi', legende: 'Le square Salvador-Allende, quartier Barbusse : massifs et pieds d’immeubles sont des zones à surveiller.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Square_Salvador_Allende_-_Choisy-le-Roi_(FR94)_-_2022-04-07_-_1.jpg' },
      },
      {
        nom: 'Les pavillons et le parc interdépartemental des sports',
        texte: 'Vers Thiais et Orly, les zones pavillonnaires ont des **jardins**, des **abris** et des **vide sanitaires**. Près du **parc interdépartemental des sports**, des parcs de la Mairie et Maurice-Thorez, les rongeurs trouvent couvert et nourriture. Pour un jardin, nous privilégions les **pièges** et le **rebouchage** : voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Choisy-le-Roi (94600) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le point d’entrée', x: 'Près de la Seine, regards et soupiraux ; dans les tours, sous-sols, gaines et vide-ordures ; en pavillon, jardin, garage et vide sanitaire.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Choisy-le-Roi (94600) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Un rat dans une tour, à un étage élevé', x: 'Il n’est pas arrivé par la fenêtre : il monte par les **gaines** et les **vide-ordures**. Nous traitons le sous-sol et le local à déchets, puis rebouchons les passages autour des colonnes.' },
      { t: 'Des rats près des quais et des berges', x: 'Maison ou résidence proche de la Seine : contrôle des soupiraux et des regards, traitement des terriers, conseils sur les poubelles. Voir [le mode de vie du rat](/blog/rat-mode-de-vie).' },
      { t: 'Des souris dans la cuisine', x: 'Elles passent par le pourtour des tuyaux et les gaines. Notre page [souris à Choisy-le-Roi](/souris/choisy-le-roi) détaille notre méthode, et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Un rongeur dans un commerce du centre', x: 'Restauration rapide, boulangerie, supérette : postes numérotés, registre, attestation. Voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles) et notre page [cafards et blattes](/services/cafards-blattes).' },
      { t: 'Des rats sous la terrasse d’un pavillon', x: 'Terriers sous une dalle ou un abri de jardin : pièges, traitement des galeries et fermeture des accès. Pour faire la différence, voir [rat ou souris : comment reconnaître](/blog/rat-ou-souris-comment-reconnaitre).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Choisy-le-Roi',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Dans une tour ou une copropriété de Choisy-le-Roi, la dératisation des parties communes est donc organisée par le **syndic** ou le **bailleur**.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur les quais, dans un parc ou sur la voie publique, alertez la **mairie de Choisy-le-Roi**.',
      'Nous intervenons aussi tout autour : [Orly](/deratisation/orly), [Thiais](/deratisation/thiais), [Vitry-sur-Seine](/deratisation/vitry-sur-seine), [Créteil](/deratisation/creteil), [Alfortville](/deratisation/alfortville), [Valenton](/deratisation/valenton) et [Villeneuve-Saint-Georges](/deratisation/villeneuve-saint-georges).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Choisy-le-Roi ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon, commerce ou immeuble : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Comment un rat peut-il arriver dans un appartement en hauteur ?', a: 'Par les gaines techniques, les vide-ordures et les colonnes d’évacuation (voir aussi [rats dans les combles](/blog/rats-dans-les-combles)). Le traitement se fait au sous-sol et dans le local à déchets, puis les passages sont rebouchés.' },
    { q: 'La Seine attire-t-elle les rats à Choisy-le-Roi ?', a: 'Les berges et l’eau sont favorables au surmulot (voir [le mode de vie du rat](/blog/rat-mode-de-vie)). Les logements proches des quais doivent surveiller soupiraux, regards et caves, et garder leurs poubelles fermées.' },
    { q: 'Qui paie la dératisation d’une tour ou d’une résidence ?', a: 'Les parties communes relèvent du syndic ou du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Intervenez-vous dans les commerces du centre-ville ?', a: 'Oui, hors des heures d’ouverture, avec postes numérotés, registre des passages et attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    { q: 'Peut-on dératiser sans poison dans un jardin ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, si vous avez des enfants, des animaux ou un potager.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Choisy-le-Roi ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [CHOISY_INSEE, CHOISY_WIKI, RSD_94, SPF_LEPTO],
}

// ── Maisons-Alfort (22/11/2026) ──
const MA_WIKI: Source = { label: 'Wikipédia, Maisons-Alfort (quartiers, Marne, crue de 1910, école vétérinaire, transports)', url: 'https://fr.wikipedia.org/wiki/Maisons-Alfort' }
const MA_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94046, Maisons-Alfort', url: 'https://geo.api.gouv.fr/communes?code=94046&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['maisons-alfort'] = {
  maj: '2026-11-22',
  accroche: 'Nous avons dératisé un logement envahi à Maisons-Alfort, et nous l’avons filmé. Bords de Marne, pavillons de Charentonneau, immeubles du centre : nous connaissons le terrain.',
  societe: {
    titre: 'Société de dératisation à Maisons-Alfort (94700) : un chantier que nous avons filmé',
    paras: [
      'À Maisons-Alfort, nous ne parlons pas en théorie : nous y avons mené une **dératisation dans un logement touché par le syndrome de Diogène**, avec ramassage des rats en tenue de protection, pose de postes et suivi. Le chantier est en vidéo : [voir l’intervention à Maisons-Alfort](/blog/deratisation-logement-syndrome-diogene#video). Les trous laissés par les rats dans les cloisons, les postes deux jours après : tout y est.',
      'La ville compte **56 799 habitants** sur **5,35 km²**. Elle est bordée au nord par la **Marne** et à l’ouest par la voie ferrée qui la sépare d’Alfortville. L’ancienne **RN19** la coupe en deux : à l’est, des **quartiers pavillonnaires** et les **bords de Marne** ; à l’ouest, le centre, l’**École vétérinaire**, le **Fort de Charenton** et la mairie.',
      'Notre base de **Saint-Maurice** est juste de l’autre côté de la Marne : nous sommes à Maisons-Alfort en quelques minutes, 7 jours sur 7. Nos autres pages pour la ville : [souris à Maisons-Alfort](/souris/maisons-alfort), [cafards à Maisons-Alfort](/cafards/maisons-alfort) et [punaises de lit à Maisons-Alfort](/punaises-de-lit/maisons-alfort).',
    ],
  },
  chiffres: [
    { valeur: '56 799', texte: 'habitants (population légale Insee), code postal 94700.', source: MA_INSEE },
    { valeur: '1910', texte: 'année de la grande crue : une partie de Maisons-Alfort, le long de la voie ferrée, fut inondée.', source: MA_WIKI },
    { valeur: '12 ha', texte: 'pour l’École nationale vétérinaire d’Alfort, fondée en 1765, au cœur du quartier d’Alfort.', source: MA_WIKI },
    { valeur: '886', texte: 'cas de leptospirose en France en 2024, maladie transmise surtout par l’urine des rats.', source: SPF_LEPTO },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Maisons-Alfort : la ville quartier par quartier',
    intro: 'Maisons-Alfort se partage entre **Charentonneau**, **les Planètes**, **les Juilliottes**, **Hector-Berlioz**, **Liberté-Vert-de-Maisons**, **le centre** et **Alfort**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Charentonneau, les Planètes et les bords de Marne',
        texte: 'Au nord-est, entre la Marne et Créteil, ces quartiers résidentiels sont faits de **pavillons** avec jardin, souvent construits sur d’anciens domaines lotis. L’eau toute proche, l’**île de Charentonneau** et la végétation des berges favorisent le **surmulot**. Terriers au pied des murs, rats dans le **garage** ou le **vide sanitaire** : nous traitons et rebouchons les accès.',
        photo: { src: '/villes/maisons-alfort/moulin-brule-ile-charentonneau.jpg', alt: 'Le parc du Moulin Brûlé sur l’île de Charentonneau à Maisons-Alfort', legende: 'Le parc du Moulin Brûlé, sur l’île de Charentonneau : la Marne et la végétation des berges sont à deux pas des pavillons.', credit: 'thesupermat', licence: 'CC BY-SA 3.0', page: W + 'Maisons-Alfort_France_Le_parc_du_Moulin_Br%C3%BBl%C3%A9_sur_l%27Ile_de_Charentonneau.jpg' },
      },
      {
        nom: 'Les Juilliottes et Hector-Berlioz',
        texte: 'Aux **Juilliottes**, les anciennes **champignonnières** et **carrières** ont été comblées au début des années 1970 pour construire logements, bureaux et un petit centre commercial. Dans ces ensembles, les rongeurs empruntent les **parkings souterrains**, les **gaines** et les **locaux à déchets** : le traitement se fait avec le **syndic** sur les parties communes.',
        photo: { src: '/villes/maisons-alfort/orangerie-charentonneau.jpg', alt: 'Vestiges de l’orangerie du château de Charentonneau devant un immeuble à Maisons-Alfort', legende: 'Les vestiges de l’orangerie de Charentonneau, au pied des immeubles : à Maisons-Alfort, pavillons et collectifs se côtoient.', credit: 'Thesupermat', licence: 'CC BY-SA 3.0', page: W + 'Ch%C3%A2teau_de_Charentonneau_-_Vestiges_de_l%27orangeraie.JPG' },
      },
      {
        nom: 'Le centre, Alfort et l’École vétérinaire',
        texte: 'Le **Vieux Maisons**, ancien quartier industriel, et **Alfort**, autour de l’**École vétérinaire** et de la station de **métro 8**, concentrent commerces, restaurants et immeubles anciens. **Caves** reliées entre elles, **cours intérieures**, **local à poubelles** : un rat trouvé dans un commerce vient souvent des sous-sols voisins.',
      },
      {
        nom: 'Liberté-Vert-de-Maisons et la voie ferrée',
        texte: 'À l’ouest, ce quartier d’anciens **maraîchers**, loti après la Première Guerre mondiale, longe la **voie ferrée** (RER D) et le **parc** créé en 2005 sur une ancienne imprimerie. Talus, friches et jardins offrent des abris : nous contrôlons les clôtures, les **abris de jardin** et les **regards**.',
        photo: { src: '/villes/maisons-alfort/rer-metro-pont-marne.jpg', alt: 'Les ponts du RER D et de la ligne 8 au-dessus de la Marne à Maisons-Alfort', legende: 'Le RER D et la ligne 8 enjambent la Marne : rivière, talus et voies ferrées forment des corridors pour les rongeurs.', credit: 'R-0-m-a-ii-n', licence: 'CC BY-SA 3.0', page: W + 'RER-M%C3%A9tro-Maisons-Alfort.png' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Maisons-Alfort (94700) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic sur place', x: 'Bords de Marne : regards, soupiraux, terriers. Immeubles : caves, parkings, gaines. Logement encombré : évaluation de l’ampleur, comme sur [notre chantier Diogène](/blog/deratisation-logement-syndrome-diogene#video).' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Maisons-Alfort (94700) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Un logement encombré envahi par les rats', x: 'C’est le chantier que nous avons filmé à Maisons-Alfort : ramassage en tenue de protection, postes sécurisés, suivi, puis rebouchage des trous dans les cloisons. Nous travaillons avec discrétion, en lien avec la famille, le bailleur ou le tuteur.' },
      { t: 'Des rats dans le jardin d’un pavillon près de la Marne', x: 'Terriers, coulées, composteur visité : pièges, traitement des galeries, protection du compost. Voir [rat dans le compost](/blog/rat-compost) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).' },
      { t: 'Des bruits dans les cloisons ou les combles', x: 'Un rat peut circuler dans le bâti ancien : voir [rat dans les murs et cloisons](/blog/rat-dans-les-murs-cloisons) et [rats dans les combles](/blog/rats-dans-les-combles). Nous trouvons le point d’entrée avant de traiter.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux. Voir notre page [souris à Maisons-Alfort](/souris/maisons-alfort) et [rat ou souris : comment reconnaître](/blog/rat-ou-souris-comment-reconnaitre).' },
      { t: 'Un rongeur dans un commerce du centre', x: 'Postes numérotés, registre, attestation pour les contrôles : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Maisons-Alfort',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Un pavillon se traite à la charge de son propriétaire ; les parties communes d’un immeuble, à celle de la copropriété ou du bailleur.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique, en bord de Marne ou dans un square, alertez la **mairie de Maisons-Alfort**. Pour un logement insalubre ou très encombré, la mairie ou l’Agence régionale de santé peuvent aussi être saisies.',
      'Nous intervenons aussi tout autour : [Alfortville](/deratisation/alfortville), [Créteil](/deratisation/creteil), [Saint-Maur-des-Fossés](/deratisation/saint-maur-des-fosses), [Charenton-le-Pont](/deratisation/charenton-le-pont), [Saint-Maurice](/deratisation/saint-maurice) et [Vitry-sur-Seine](/deratisation/vitry-sur-seine).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Maisons-Alfort ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon, commerce, immeuble ou logement encombré : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Avez-vous déjà dératisé à Maisons-Alfort ?', a: 'Oui. Nous y avons notamment traité un logement touché par le syndrome de Diogène et envahi par les rats. [L’intervention est filmée](/blog/deratisation-logement-syndrome-diogene#video) et visible sur notre blog.' },
    { q: 'Les bords de Marne attirent-ils les rats ?', a: 'L’eau et la végétation des berges sont favorables au surmulot. Les pavillons de Charentonneau et des Planètes doivent surveiller terriers, regards, garages et vide sanitaires.' },
    { q: 'Que faire face à un logement encombré envahi par les rats ?', a: 'Ne pas déblayer seul : les rats et leurs déjections présentent un risque sanitaire, dont la [leptospirose](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026). Nous intervenons en tenue de protection, avec dératisation, ramassage et suivi, en lien avec la famille ou le bailleur.' },
    { q: 'Qui paie la dératisation d’une copropriété ?', a: 'Les parties communes relèvent du syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Peut-on dératiser sans poison dans un jardin ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, si vous avez des enfants, des animaux ou un potager.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Maisons-Alfort ?', a: 'Oui : notre base de Saint-Maurice est voisine. Nous intervenons 7j/7, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [MA_INSEE, MA_WIKI, RSD_94, SPF_LEPTO],
}

// ── Saint-Maur-des-Fossés (23/11/2026) ──
const SM_WIKI: Source = { label: 'Wikipédia, Saint-Maur-des-Fossés (boucle de la Marne, quartiers, crues, logement, transports)', url: 'https://fr.wikipedia.org/wiki/Saint-Maur-des-Foss%C3%A9s' }
const SM_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94068, Saint-Maur-des-Fossés', url: 'https://geo.api.gouv.fr/communes?code=94068&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['saint-maur-des-fosses'] = {
  maj: '2026-11-23',
  accroche: 'Une presqu’île entourée par la Marne, un tiers de maisons avec jardin, des caves inondées en 1910 : à Saint-Maur et à La Varenne, les rats viennent de la rivière. Nous les arrêtons à l’entrée.',
  societe: {
    titre: 'Société de dératisation à Saint-Maur-des-Fossés (94100) : une presqu’île dans la boucle de la Marne',
    paras: [
      'Saint-Maur-des-Fossés compte **76 572 habitants** sur **11,26 km²**, avec deux codes postaux : **94100** pour Saint-Maur et **94210** pour **La Varenne-Saint-Hilaire**. La ville est une **presqu’île** entourée par la **dernière boucle de la Marne** : presque partout, la rivière n’est jamais loin. Or le **surmulot**, le rat d’égout, vit près de l’eau, nage très bien et remonte des berges vers les **jardins**, les **caves** et les **réseaux**.',
      'C’est aussi une ville de **maisons** : en 2021, **33,7 % des logements** étaient des maisons individuelles, une part élevée pour la petite couronne. Jardins, abris, composteurs, poulaillers, vide sanitaires : pour une société de dératisation, Saint-Maur, c’est d’abord le traitement d’un **pavillon** et de son terrain.',
      'Nous connaissons la ville : nous y avons traité des [souris dans un logement loué sur Airbnb](/blog/souris-airbnb-saint-maur-des-fosses), après des remarques de voyageurs. Notre base de **Saint-Maurice** est voisine : nous sommes à Saint-Maur en quelques minutes, 7 jours sur 7. Nos autres pages pour la ville : [souris à Saint-Maur-des-Fossés](/souris/saint-maur-des-fosses), [cafards à Saint-Maur-des-Fossés](/cafards/saint-maur-des-fosses) et [punaises de lit à Saint-Maur-des-Fossés](/punaises-de-lit/saint-maur-des-fosses).',
    ],
  },
  chiffres: [
    { valeur: '76 572', texte: 'habitants (population légale Insee), codes postaux 94100 et 94210 (La Varenne).', source: SM_INSEE },
    { valeur: '33,7 %', texte: 'des logements sont des maisons individuelles (2021) : jardins, caves et vide sanitaires à protéger.', source: SM_WIKI },
    { valeur: '+ 2 m', texte: 'd’eau dans les rues lors de la crue de 1910, la plus forte que la ville ait connue.', source: SM_WIKI },
    { valeur: '8', texte: 'quartiers, ou « villages », de la presqu’île : du Vieux Saint-Maur à La Varenne.', source: SM_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Saint-Maur-des-Fossés : la presqu’île quartier par quartier',
    intro: 'Saint-Maur se partage en **huit quartiers** : **le Vieux Saint-Maur**, **Saint-Maur-Créteil**, **le Parc**, **Adamville**, **Champignol**, **La Varenne**, **les Mûriers** et **La Pie**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les bords de Marne et le chemin de halage',
        texte: 'Tout autour de la presqu’île, les maisons qui donnent sur la **Marne** et le **chemin de halage** sont les plus exposées. Le rat remonte des berges par les **jardins**, les **regards** et les **soupiraux**, surtout quand l’eau monte. Nous contrôlons chaque ouverture, traitons les **terriers** et posons des grilles là où il le faut.',
        photo: { src: '/villes/saint-maur-des-fosses/pont-de-saint-maur.jpg', alt: 'Le pont de Saint-Maur au-dessus de la Marne', legende: 'Le pont de Saint-Maur, vu du côté de Joinville : berges boisées et eau, l’habitat préféré du surmulot.', credit: 'Lecheminlu', licence: 'FAL', page: W + 'Pont_St-Maur.jpg' },
      },
      {
        nom: 'La Varenne-Saint-Hilaire et les Mûriers (94210)',
        texte: 'À l’est de la boucle, **La Varenne** et **les Mûriers** sont des quartiers de grandes **maisons avec jardin**, près de la **place du Marché** et de la gare RER. Composteurs, abris de jardin, potagers, piscines et leurs locaux techniques : nous privilégions les **pièges** et le **rebouchage**, avec des postes **verrouillés** si besoin. Voir [rat dans le compost](/blog/rat-compost).',
      },
      {
        nom: 'Saint-Maur-Créteil, la Pie et le barrage',
        texte: 'Au sud, face à Créteil, le quartier **Saint-Maur-Créteil** compte davantage d’**immeubles**, dont le quartier prioritaire « **Rives de la Marne** », et la Marne y est aménagée avec le **barrage** et sa passerelle. Caves, parkings et locaux à déchets d’immeubles proches de l’eau : le traitement se fait avec le **syndic** ou le **bailleur**.',
        photo: { src: '/villes/saint-maur-des-fosses/marne-passerelle-barrage.jpg', alt: 'La Marne et la passerelle du barrage de Créteil, face à Saint-Maur', legende: 'La Marne et la passerelle du barrage de Créteil : immeubles et berges aménagées au sud de la presqu’île.', credit: 'Akiry', licence: 'CC BY-SA 4.0', page: W + 'Barrage_de_cr%C3%A9teil_-_mars_2015_(4).jpg' },
      },
      {
        nom: 'Adamville, le Parc et le Vieux Saint-Maur',
        texte: 'Autour de la **place d’Adamville**, de la mairie et du cinéma **Le Lido**, comme près de l’**abbaye** du Vieux Saint-Maur et de la gare du **Parc de Saint-Maur**, commerces, restaurants et maisons anciennes partagent **caves**, **cours** et **réseaux**. Un rongeur repéré dans une boutique vient souvent d’un sous-sol voisin.',
        photo: { src: '/villes/saint-maur-des-fosses/adamville-cinema-lido.jpg', alt: 'Le cinéma Le Lido, place d’Adamville, à Saint-Maur-des-Fossés', legende: 'Le cinéma Le Lido, à Adamville : un quartier de commerces et de restaurants où nous intervenons hors des heures d’ouverture.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Cin%C3%A9ma_Lido_-_Saint-Maur-des-Foss%C3%A9s_(FR94)_-_2021-02-23_-_2.jpg' },
      },
      {
        nom: 'Champignol et les abords du RER A',
        texte: 'Vers Champigny, **Champignol** s’organise autour de la gare **Saint-Maur-Champigny** du RER A. Maisons, petits immeubles et **talus ferroviaires** : nous vérifions les **vide sanitaires**, les clôtures et les **regards**, chemins habituels des rats entre les voies et les jardins.',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Saint-Maur-des-Fossés (94100) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes, des terriers ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le tour du terrain', x: 'Bords de Marne : berges, regards, soupiraux. Pavillon : jardin, abri, composteur, garage, vide sanitaire. Immeuble : caves, parkings et local à déchets.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide, près des enfants, des chiens et des potagers.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Saint-Maur-des-Fossés et La Varenne (94210) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des terriers dans le jardin, près de la Marne', x: 'Trous au pied des murs, sous la terrasse ou l’abri, coulées dans la pelouse : nous traitons les galeries et fermons les accès. Voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats), qui explique pourquoi il ne faut pas attendre.' },
      { t: 'Des rats dans le vide sanitaire ou le garage', x: 'Bruits sous le plancher, isolant arraché, odeur : voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire). Nous traitons, puis posons des grilles sur les aérations.' },
      { t: 'Des souris dans une location ou un appartement', x: 'Comme dans [le logement Airbnb que nous avons traité à Saint-Maur](/blog/souris-airbnb-saint-maur-des-fosses) : pièges adaptés à un logement occupé, rebouchage, résultat rapide. Voir aussi [souris à Saint-Maur-des-Fossés](/souris/saint-maur-des-fosses).' },
      { t: 'Les rats attirés par le poulailler, les oiseaux ou le compost', x: 'Graines au sol, mangeoires, compost ouvert : voir [nourrir les oiseaux attire les rats](/blog/nourrir-oiseaux-pigeons-attire-rats) et [rat dans le compost](/blog/rat-compost).' },
      { t: 'Un rongeur dans un commerce d’Adamville ou de La Varenne', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Saint-Maur-des-Fossés',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. À Saint-Maur, où les maisons sont nombreuses, c’est donc le plus souvent le **propriétaire du pavillon** qui fait appel à une entreprise de dératisation ; pour un immeuble, le **syndic**.',
      'Locataire, prévenez votre propriétaire **par écrit**, avec photos. Pour des rats sur la voie publique, en bord de Marne ou dans un square, alertez la **mairie de Saint-Maur-des-Fossés**. Les rats ne connaissent pas les clôtures : prévenir vos voisins aide à traiter le secteur.',
      'Nous intervenons aussi tout autour : [Joinville-le-Pont](/deratisation/joinville-le-pont), [Saint-Maurice](/deratisation/saint-maurice), [Maisons-Alfort](/deratisation/maisons-alfort), [Créteil](/deratisation/creteil), [Bonneuil-sur-Marne](/deratisation/bonneuil-sur-marne), [Sucy-en-Brie](/deratisation/sucy-en-brie), [Chennevières-sur-Marne](/deratisation/chennevieres-sur-marne) et [Champigny-sur-Marne](/deratisation/champigny-sur-marne).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Saint-Maur-des-Fossés ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon avec jardin, commerce ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Intervenez-vous aussi à La Varenne-Saint-Hilaire (94210) ?', a: 'Oui, La Varenne fait partie de Saint-Maur-des-Fossés : même équipe, mêmes prix, mêmes délais, 7j/7.' },
    { q: 'Pourquoi tant de rats près de la Marne ?', a: 'Le surmulot vit près de l’eau, nage très bien et se déplace le long des berges. Les maisons au bord de la Marne doivent surveiller jardins, regards et soupiraux (voir [le mode de vie du rat](/blog/rat-mode-de-vie)).' },
    { q: 'J’ai des trous dans ma pelouse : rats ou taupes ?', a: 'Un terrier de rat est un trou net, souvent au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo, nous vous répondons gratuitement.' },
    { q: 'Mon compost ou mon poulailler attire-t-il les rats ?', a: 'Oui, s’ils donnent accès à la nourriture. Fermez le composteur, ramassez les graines le soir et rangez-les en bacs fermés (voir [rat dans le compost](/blog/rat-compost)).' },
    { q: 'Peut-on dératiser sans poison dans un jardin avec chien ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés.' },
    { q: 'Qui paie la dératisation d’une copropriété ?', a: 'Les parties communes relèvent du syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Intervenez-vous vite à Saint-Maur-des-Fossés ?', a: 'Oui : notre base de Saint-Maurice est voisine. Nous intervenons 7j/7, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [SM_INSEE, SM_WIKI, RSD_94, SPF_LEPTO],
}

export const refonteDerat = (slug: string) => REFONTE_DERATISATION[slug]
