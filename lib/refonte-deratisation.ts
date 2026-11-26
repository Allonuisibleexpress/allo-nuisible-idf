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
  quiPaie?: string // page département : point « Qui paie » complet de « L’essentiel » quand le règlement diffère du 94
  reglement?: string // page département : règlement sanitaire cité dans « L’essentiel » (défaut : Val-de-Marne, article 119)
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

// ── Vincennes (23/11/2026) ──
const VINCENNES_WIKI: Source = { label: 'Wikipédia, Vincennes (quartiers, logement, métro, RER A et jardins couverts)', url: 'https://fr.wikipedia.org/wiki/Vincennes' }
const VINCENNES_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94080, Vincennes', url: 'https://geo.api.gouv.fr/communes?code=94080&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['vincennes'] = {
  maj: '2026-11-23',
  accroche: 'À Vincennes, on vit en immeuble, serrés, à deux pas du bois. Les rats et les souris passent de cave en cave : nous traitons l’immeuble, pas seulement votre appartement.',
  societe: {
    titre: 'Société de dératisation à Vincennes (94300) : 25 000 habitants au km²',
    paras: [
      'Vincennes compte **48 193 habitants** sur seulement **1,90 km²**, soit plus de **25 000 habitants au km²** : c’est une ville d’**immeubles** collés les uns aux autres, avec **93,7 % d’appartements** selon le dernier détail publié. Pour un rongeur, c’est un réseau continu de **caves**, de **cours**, de **gaines** et de **locaux à poubelles**. Une souris dans votre cuisine vient rarement de chez vous seulement.',
      'Au sud, la ville touche le **bois de Vincennes** et son **château** ; au centre, la **ligne 1** du métro et le **RER A**, dont les voies ont été couvertes entre 2004 et 2006 pour créer trois jardins. Bois, talus, jardins et commerces de bouche : les rongeurs trouvent ici à la fois abri et nourriture.',
      'Nous connaissons Vincennes : nous y avons traité un logement contre les punaises de lit, chantier filmé dans [notre vidéo des punaises mortes après traitement à Vincennes](/blog/punaises-de-lit-vincennes-punaises-mortes#video). Notre base de **Saint-Maurice** est à quelques minutes, de l’autre côté du bois.',
      'Nos autres pages pour la ville : [souris à Vincennes](/souris/vincennes), [cafards à Vincennes](/cafards/vincennes), [punaises de lit à Vincennes](/punaises-de-lit/vincennes) et [fourmis à Vincennes](/fourmis/vincennes).',
    ],
  },
  chiffres: [
    { valeur: '48 193', texte: 'habitants (population légale Insee), code postal 94300.', source: VINCENNES_INSEE },
    { valeur: '1,90 km²', texte: 'de superficie, soit plus de 25 000 habitants au km² (calcul sur les chiffres Insee).', source: VINCENNES_INSEE },
    { valeur: '93,7 %', texte: 'des logements sont des appartements (détail Insee de 2009) : caves et parties communes partagées.', source: VINCENNES_WIKI },
    { valeur: '3', texte: 'stations de la ligne 1 (Saint-Mandé, Bérault, Château de Vincennes), plus la gare du RER A.', source: VINCENNES_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Vincennes : la ville quartier par quartier',
    intro: 'Vincennes se compose de **sept quartiers** : **Saint-Louis**, **Vignerons**, **République**, **Sorano**, **Centre-ville**, **Diderot** et **Domaine du bois**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Domaine du bois, le château et les abords du bois de Vincennes',
        texte: 'Au sud et à l’est, les immeubles qui bordent le **bois de Vincennes** et le **château** sont au contact d’un grand espace vert. Les rats y vivent dans les talus et la végétation, et s’approchent des **locaux à poubelles** et des **caves** des résidences voisines. Nous traitons le pourtour des bâtiments et rebouchons les **soupiraux**.',
        photo: { src: '/villes/vincennes/donjon-chateau.jpg', alt: 'Le donjon du château de Vincennes', legende: 'Le donjon du château de Vincennes, au bord du bois : un grand espace vert au contact des immeubles.', credit: 'Pierre Camateros', licence: 'CC BY-SA 2.5', page: W + 'Donjon_du_Ch%C3%A2teau_de_Vincennes.jpg' },
      },
      {
        nom: 'Le Centre-ville, Diderot et les commerces',
        texte: 'Autour de la **mairie**, de la rue de Fontenay et du quartier **Diderot**, restaurants, boulangeries et commerces de bouche partagent souvent les mêmes **caves** et **cours intérieures**. Un rat vu dans une réserve vient presque toujours d’un sous-sol voisin. Nous intervenons **hors des heures d’ouverture**, avec postes numérotés et **attestation** pour les contrôles d’hygiène.',
        photo: { src: '/villes/vincennes/hotel-de-ville.jpg', alt: 'Façade de l’hôtel de ville de Vincennes', legende: 'L’hôtel de ville de Vincennes, en 2026 : autour, un centre-ville de commerces et d’immeubles anciens.', credit: 'Bretwa', licence: 'CC0', page: W + 'Vincennes_Town_Hall_in_France_-_2026-04-23.jpg' },
      },
      {
        nom: 'Les jardins sur le RER A : Levant, Midi et Couchant',
        texte: 'Entre 2004 et 2006, les voies du **RER A** ont été couvertes sur trois tronçons d’environ 100 mètres, où sont nés les jardins du **Levant**, du **Midi** et du **Couchant**. Massifs, bassins et talus ferroviaires au pied des immeubles : ce sont des zones de passage à surveiller pour les copropriétés riveraines.',
        photo: { src: '/villes/vincennes/jardin-du-midi-rer.jpg', alt: 'Le jardin du Midi, aménagé sur la couverture du RER A à Vincennes', legende: 'Le jardin du Midi, sur la couverture des voies du RER A : végétation et immeubles se touchent.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Jardin_Midi_-_Vincennes_(FR94)_-_2022-06-30_-_1.jpg' },
      },
      {
        nom: 'Vignerons, Saint-Louis, République et Sorano',
        texte: 'Ces quartiers résidentiels sont faits d’**immeubles anciens** et de quelques **maisons** avec petite cour. Dans le bâti ancien, souris et rats circulent par les **planchers**, les **gaines** et le pourtour des **canalisations**. Nous trouvons le passage, traitons, puis rebouchons les accès.',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Vincennes (94300) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'L’enquête dans l’immeuble', x: 'Cuisine, gaines, plinthes chez vous ; caves, local à poubelles et cour dans les parties communes : nous trouvons d’où viennent les rongeurs.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Vincennes (94300) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des souris dans la cuisine d’un appartement', x: 'Le cas le plus fréquent à Vincennes. Elles passent derrière l’électroménager et le long des tuyaux : voir [rat piégé derrière l’électroménager](/blog/rat-piege-cuisine-electromenager), [par où entrent les souris](/blog/souris-par-ou-entrent-elles) et notre page [souris à Vincennes](/souris/vincennes).' },
      { t: 'Des rats dans la cave ou le local à poubelles', x: 'Le signe d’une colonie dans les sous-sols, souvent reliés à ceux des immeubles voisins. Le traitement doit couvrir les parties communes : prévenez le syndic par écrit.' },
      { t: 'Des bruits dans les murs ou le plafond', x: 'Dans le bâti ancien, les rongeurs circulent dans les cloisons et les planchers : voir [rat dans les murs et cloisons](/blog/rat-dans-les-murs-cloisons).' },
      { t: 'Un rongeur dans un restaurant ou un commerce', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles), et [cafards à Vincennes](/cafards/vincennes), qui suivent les mêmes gaines.' },
      { t: 'Un devis anormalement cher ou un démarchage', x: 'Méfiez-vous des prix annoncés au téléphone puis multipliés sur place : voir [les arnaques à la dératisation](/blog/arnaques-deratisation-nuisibles). Chez nous, le prix est donné avant de venir.' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Vincennes',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. À Vincennes, où presque tout le monde vit en copropriété, c’est le plus souvent au **syndic** de faire traiter les **parties communes**, et à chacun de traiter son logement.',
      'Locataire, prévenez votre propriétaire **par écrit**, avec photos. Pour des rats sur la voie publique, dans un square ou un jardin, alertez la **mairie de Vincennes** ; pour le bois de Vincennes, qui appartient à Paris, la **Ville de Paris**.',
      'Nous intervenons aussi tout autour : [Saint-Mandé](/deratisation/saint-mande), [Fontenay-sous-Bois](/deratisation/fontenay-sous-bois), [Montreuil](/deratisation/montreuil), [Paris 12e](/deratisation/paris-12), [Paris 20e](/deratisation/paris-20), [Nogent-sur-Marne](/deratisation/nogent-sur-marne) et [Charenton-le-Pont](/deratisation/charenton-le-pont).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Vincennes ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Commerce, restaurant ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'J’ai des souris dans mon appartement : faut-il traiter tout l’immeuble ?', a: 'Pas toujours, mais souvent. Si les souris viennent des caves ou des gaines, nous traitons votre logement et conseillons au syndic de traiter les parties communes, sinon elles reviennent (voir [par où entrent les souris](/blog/souris-par-ou-entrent-elles)).' },
    { q: 'Le bois de Vincennes attire-t-il les rats ?', a: 'Un grand espace vert offre abri et nourriture aux rongeurs. Les immeubles en bordure du bois doivent surveiller caves, soupiraux et locaux à poubelles.' },
    { q: 'Qui paie la dératisation des caves d’une copropriété ?', a: 'Le syndicat des copropriétaires, par le syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Intervenez-vous dans les restaurants et commerces de Vincennes ?', a: 'Oui, hors des heures d’ouverture, avec postes numérotés, registre et attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    { q: 'Peut-on dératiser sans poison dans un appartement avec chat ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés, hors de portée.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Vincennes ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [VINCENNES_INSEE, VINCENNES_WIKI, RSD_94, SPF_LEPTO],
}

// ── Ablon-sur-Seine (23/11/2026) ──
const ABLON_WIKI: Source = { label: 'Wikipédia, Ablon-sur-Seine (Seine, écluse, logement, gare)', url: 'https://fr.wikipedia.org/wiki/Ablon-sur-Seine' }
const ABLON_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94001, Ablon-sur-Seine', url: 'https://geo.api.gouv.fr/communes?code=94001&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['ablon-sur-seine'] = {
  maj: '2026-11-23',
  accroche: 'Une petite ville au bord de la Seine, des pavillons avec jardin et des quais : à Ablon-sur-Seine, les rats remontent du fleuve. Nous fermons leur chemin.',
  societe: {
    titre: 'Société de dératisation à Ablon-sur-Seine (94480) : une ville au bord de la Seine',
    paras: [
      'Ablon-sur-Seine est une petite commune du Val-de-Marne : **5 988 habitants** sur **1,14 km²**, tout au sud du département. Elle est posée sur la **rive gauche de la Seine**, qui la sépare de l’Essonne, avec ses **quais**, sa **gare du RER C** et l’**écluse d’Ablon**. Le **surmulot**, le rat d’égout, vit près de l’eau et remonte des berges vers les jardins et les caves.',
      'C’est une commune **traditionnellement pavillonnaire** : en 2019, **un logement sur trois** était une maison individuelle. Jardin, abri, garage, vide sanitaire, composteur : une dératisation à Ablon, c’est souvent le traitement d’une **maison et de son terrain**, plus rarement d’un immeuble.',
      'Nous intervenons à Ablon depuis notre base de **Saint-Maurice**, 7 jours sur 7. Nos autres pages pour la ville : [punaises de lit à Ablon-sur-Seine](/punaises-de-lit/ablon-sur-seine) et [nos interventions à Ablon-sur-Seine](/zones/val-de-marne/ablon-sur-seine).',
    ],
  },
  chiffres: [
    { valeur: '5 988', texte: 'habitants (population légale Insee), code postal 94480.', source: ABLON_INSEE },
    { valeur: '1,14 km²', texte: 'de superficie : une petite ville entre la Seine, Villeneuve-le-Roi et Athis-Mons.', source: ABLON_INSEE },
    { valeur: '32,9 %', texte: 'des logements sont des maisons individuelles (2019) : jardins, garages et vide sanitaires.', source: ABLON_WIKI },
    { valeur: '1', texte: 'écluse sur la Seine, avec barrage et passerelle, à hauteur de la Saussaie des Gobelins.', source: ABLON_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Ablon-sur-Seine : la ville secteur par secteur',
    intro: 'Entre le **fleuve**, la **voie ferrée** du RER C et les quartiers de **pavillons**, voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les quais de Seine et l’écluse',
        texte: 'Le long des **quais**, jusqu’à l’**écluse** et la Saussaie des Gobelins, l’eau, les berges et la végétation offrent au rat un habitat idéal. Les maisons qui donnent sur la Seine doivent surveiller leurs **soupiraux**, leurs **regards** et le pied de leurs murs : c’est par là que les rongeurs entrent.',
        photo: { src: '/villes/ablon-sur-seine/ecluse.jpg', alt: 'La Seine et les écluses d’Ablon-sur-Seine', legende: 'La Seine et les écluses d’Ablon : les berges sont le territoire préféré du surmulot.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + '%C3%89cluses_Ablon_-_Ablon-sur-Seine_(FR94)_-_2022-06-05_-_1.jpg' },
      },
      {
        nom: 'Le vieux village et le quai Magne',
        texte: 'Face à la Seine, la **tour du chatel**, seul vestige d’un château construit en 1348, rappelle l’ancienneté du bâti. Dans les maisons anciennes, les **caves voûtées**, les **murs de pierre** et les **soupiraux** laissent passer les rongeurs : nous les repérons et les rebouchons après le traitement.',
        photo: { src: '/villes/ablon-sur-seine/tour-du-chatel-quai.jpg', alt: 'La tour du chatel d’Ablon, quai Magne, face à la Seine', legende: 'La tour du chatel, quai Magne : dans le bâti ancien, caves et soupiraux sont les portes d’entrée des rats.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Ch%C3%A2teau_Ablon_-_Ablon-sur-Seine_(FR94)_-_2022-06-05_-_2.jpg' },
      },
      {
        nom: 'La gare du RER C et les quartiers de pavillons',
        texte: 'Autour de la **gare d’Ablon** et sur le coteau, les **pavillons avec jardin** dominent. Talus ferroviaires, haies, abris et composteurs : nous traitons les **terriers**, protégeons le compost et fermons l’accès au **vide sanitaire**. Voir [rat dans le compost](/blog/rat-compost) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
        photo: { src: '/villes/ablon-sur-seine/gare-rer-c.jpg', alt: 'La gare d’Ablon sur la ligne C du RER', legende: 'La gare d’Ablon (RER C) : voies ferrées et talus servent de corridors aux rongeurs.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Gare_Ablon_-_Ablon-sur-Seine_(FR94)_-_2022-06-05_-_4.jpg' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Ablon-sur-Seine (94480) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes, des terriers ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le tour de la maison', x: 'Jardin, abri, garage, vide sanitaire, soupiraux côté Seine : nous trouvons par où les rongeurs entrent et où ils nichent.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Ablon-sur-Seine (94480) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans le jardin d’un pavillon', x: 'Trous au pied des murs, sous la terrasse ou l’abri, coulées dans l’herbe : nous traitons les galeries et fermons les accès. Voir [le mode de vie du rat](/blog/rat-mode-de-vie).' },
      { t: 'Des bruits sous le plancher ou dans les combles', x: 'Un rat dans le vide sanitaire ou sous le toit : voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire) et [rats dans les combles](/blog/rats-dans-les-combles).' },
      { t: 'Un rat qui sort des toilettes', x: 'Près de la Seine, le réseau d’assainissement est un chemin direct : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes).' },
      { t: 'Des souris dans la maison en automne', x: 'Quand il fait froid, les souris entrent par le moindre interstice : voir [par où entrent les souris](/blog/souris-par-ou-entrent-elles) et [rat ou souris : comment reconnaître](/blog/rat-ou-souris-comment-reconnaitre).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Ablon-sur-Seine',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. À Ablon, c’est donc le plus souvent au **propriétaire de la maison** de faire appel à une entreprise de dératisation ; pour une résidence, au **syndic** ou au **bailleur**.',
      'Pour des rats sur la voie publique ou sur les quais, alertez la **mairie d’Ablon-sur-Seine**. Les rats ne connaissent pas les clôtures : prévenir vos voisins aide à traiter le secteur.',
      'Nous intervenons aussi tout autour : [Villeneuve-le-Roi](/deratisation/villeneuve-le-roi), [Athis-Mons](/deratisation/athis-mons), [Orly](/deratisation/orly), [Villeneuve-Saint-Georges](/deratisation/villeneuve-saint-georges) et [Paray-Vieille-Poste](/deratisation/paray-vieille-poste).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Ablon-sur-Seine ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Maison avec jardin ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'La Seine attire-t-elle les rats à Ablon ?', a: 'Les berges et l’eau sont favorables au surmulot ([mode de vie du rat](/blog/rat-mode-de-vie)). Les maisons proches des quais doivent surveiller soupiraux, regards et jardins.' },
    { q: 'J’ai des trous dans mon jardin : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Peut-on dératiser sans poison dans un jardin avec enfants ou chien ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés.' },
    { q: 'Qui paie la dératisation d’une résidence ?', a: 'Les parties communes relèvent du syndic ou du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Mon composteur attire-t-il les rats ?', a: 'Oui, s’il est ouvert ou mal fermé. Évitez viande, poisson et restes cuisinés, et fermez-le bien (voir [rat dans le compost](/blog/rat-compost)).' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Ablon-sur-Seine ?', a: 'Oui, 7j/7, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [ABLON_INSEE, ABLON_WIKI, RSD_94, SPF_LEPTO],
}

// ── Alfortville (23/11/2026) ──
const ALFORT_WIKI: Source = { label: 'Wikipédia, Alfortville (confluent, crues, zone inondable, logement, quartiers)', url: 'https://fr.wikipedia.org/wiki/Alfortville' }
const ALFORT_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94002, Alfortville', url: 'https://geo.api.gouv.fr/communes?code=94002&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['alfortville'] = {
  maj: '2026-11-23',
  accroche: 'Alfortville est bordée par la Seine et par la Marne, et classée tout entière en zone inondable. Pour les rats, c’est un terrain idéal ; pour nous, un terrain que nous connaissons par cœur.',
  societe: {
    titre: 'Société de dératisation à Alfortville (94140) : la ville du confluent',
    paras: [
      'Alfortville compte **45 531 habitants** sur **3,67 km²**. Elle est installée au **confluent de la Seine et de la Marne** : une bande de terre de **4,5 km de long** sur **0,5 à 1 km de large**, à une altitude de seulement 27 à 37 mètres. Depuis les années 2010, **100 % de la commune** est classée en **zone inondable**. Le **surmulot**, le rat d’égout, vit justement près de l’eau, nage très bien et suit les berges et les réseaux.',
      'C’est aussi une ville d’**immeubles** : en 2020, **85,4 % des logements** étaient des appartements, dont les grands ensembles de **Chantereine** et du **Grand Ensemble**. Les **caves**, les **parkings** et les **locaux à déchets** proches de l’eau sont les premiers endroits que nous contrôlons.',
      'Notre base de **Saint-Maurice** est juste de l’autre côté de la Marne : nous sommes à Alfortville en quelques minutes, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Alfortville](/souris/alfortville), [cafards à Alfortville](/cafards/alfortville), [punaises de lit à Alfortville](/punaises-de-lit/alfortville) et [puces à Alfortville](/puces/alfortville).',
    ],
  },
  chiffres: [
    { valeur: '45 531', texte: 'habitants (population légale Insee), code postal 94140.', source: ALFORT_INSEE },
    { valeur: '100 %', texte: 'du territoire classé en zone inondable par les plans de prévention des années 2010.', source: ALFORT_WIKI },
    { valeur: '2 m', texte: 'de submersion possible en cas de crue exceptionnelle, comme en 1910, la plus forte connue.', source: ALFORT_WIKI },
    { valeur: '85,4 %', texte: 'des logements sont des appartements (2020) : caves, parkings et locaux à déchets partagés.', source: ALFORT_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Alfortville : la ville secteur par secteur',
    intro: 'Du **confluent** au nord jusqu’au **Port-à-l’Anglais** au sud, entre les **quais de Seine**, la **Marne** et la voie ferrée du **RER D**, voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Le confluent, Chinagora et les bords de Marne',
        texte: 'Au nord, là où la Marne rejoint la Seine, les berges, les pontons et les espaces verts des quais sont un refuge tout trouvé pour le rat. Les immeubles proches de **Chinagora** et des bords de Marne doivent surveiller leurs **parkings souterrains**, leurs **regards** et leurs **locaux à poubelles**.',
        photo: { src: '/villes/alfortville/chinagora-confluent.jpg', alt: 'Le complexe Chinagora au confluent de la Seine et de la Marne à Alfortville', legende: 'Chinagora, au confluent de la Seine et de la Marne, vu depuis le pont d’Ivry : l’eau borde la ville.', credit: 'Benj54', licence: 'Domaine public', page: W + 'Chinagora-alfortville.jpg' },
      },
      {
        nom: 'Les quais de Seine et l’île Saint-Pierre',
        texte: 'Le long de la Seine, les maisons et petits immeubles anciens ont souvent des **caves** et des **soupiraux** au ras du sol, et ont été inondés en 1910. Quand l’eau monte, les rats remontent avec elle vers les sous-sols. Nous contrôlons chaque ouverture, traitons, puis rebouchons et posons des grilles.',
        photo: { src: '/villes/alfortville/crue-1910-ile-saint-pierre.jpg', alt: 'Carte postale de la crue de 1910 à Alfortville, rue de Rome, île Saint-Pierre', legende: 'Rue de Rome, île Saint-Pierre, pendant la crue de 1910 : à Alfortville, l’eau n’est jamais loin des caves.', credit: 'Auteur inconnu', licence: 'Domaine public', page: W + 'Alfortville.1910.Ile_Saint-Pierre.Rue_de_Rome.jpg' },
      },
      {
        nom: 'Chantereine et le Grand Ensemble',
        texte: 'Ces deux quartiers prioritaires rassemblent près de **4 000 habitants** dans de grands immeubles, en pleine rénovation : trois tours de 18 étages de Chantereine ont été démolies en octobre 2024. Démolitions et chantiers **dérangent les colonies** de rongeurs, qui se déplacent vers les bâtiments voisins. Le traitement se fait avec le **bailleur**, sur toutes les **parties communes**.',
      },
      {
        nom: 'Le centre, les squares et la voie ferrée',
        texte: 'Autour de la **mairie**, de la Halle Carnot, des squares comme **Camélinat** et le long de la voie ferrée du **RER D** (gares Maisons-Alfort-Alfortville et Vert de Maisons), massifs, talus et commerces de bouche attirent les rongeurs. Pour un commerce, nous intervenons hors des heures d’ouverture, avec **attestation**.',
        photo: { src: '/villes/alfortville/square-camelinat.jpg', alt: 'Le square Camélinat à Alfortville', legende: 'Le square Camélinat : massifs et pergolas au pied des immeubles, des zones de passage à surveiller.', credit: 'Citoyennedu94', licence: 'CC BY-SA 4.0', page: W + 'Square_Cam%C3%A9linat_-_Alfortville_-_France.jpg' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Alfortville (94140) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le chemin de l’eau', x: 'Regards, soupiraux, caves et parkings souterrains, colonnes et vide-ordures : à Alfortville, nous suivons le chemin que l’eau et les rats empruntent.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Alfortville (94140) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans le parking ou la cave après de fortes pluies', x: 'Quand la Seine ou la Marne montent, les rats quittent les berges et les égouts pour les sous-sols. Nous traitons, puis fermons les accès pour que cela ne recommence pas.' },
      { t: 'Un rat qui sort des toilettes', x: 'Dans une ville au bord de l’eau, le réseau d’assainissement est un chemin direct : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes).' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir notre page [souris à Alfortville](/souris/alfortville) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des rongeurs après une démolition ou un chantier voisin', x: 'Quand un immeuble est démoli, la colonie cherche un nouvel abri. Prévenez votre syndic ou bailleur dès les premières traces : un traitement rapide évite l’installation.' },
      { t: 'Un rongeur dans un commerce ou un restaurant', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles), et [cafards à Alfortville](/cafards/alfortville).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Alfortville',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Les parties communes d’un immeuble d’Alfortville se traitent donc à la demande du **syndic** ou du **bailleur**.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur les quais, dans un square ou sur la voie publique, alertez la **mairie d’Alfortville**.',
      'Nous intervenons aussi tout autour : [Maisons-Alfort](/deratisation/maisons-alfort), [Vitry-sur-Seine](/deratisation/vitry-sur-seine), [Ivry-sur-Seine](/deratisation/ivry-sur-seine), [Charenton-le-Pont](/deratisation/charenton-le-pont), [Créteil](/deratisation/creteil), [Choisy-le-Roi](/deratisation/choisy-le-roi) et [Saint-Maurice](/deratisation/saint-maurice).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Alfortville ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Commerce, maison ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Pourquoi tant de rats à Alfortville ?', a: 'La ville est bordée par la Seine et la Marne, et le surmulot vit près de l’eau ([mode de vie du rat](/blog/rat-mode-de-vie)). Quand l’eau monte, il remonte vers les caves et les parkings.' },
    { q: 'Les crues font-elles venir les rats dans les immeubles ?', a: 'Oui, la montée des eaux chasse les rats des berges et des égouts vers les sous-sols. Après une crue ou de fortes pluies, surveillez caves, parkings et locaux à poubelles.' },
    { q: 'Qui paie la dératisation d’une résidence à Chantereine ou au Grand Ensemble ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Un rat est sorti de mes toilettes : que faire ?', a: 'Fermez l’abattant, mettez un poids dessus et appelez-nous (voir [rat dans les toilettes](/blog/rat-dans-les-toilettes)). Nous traitons la colonie et vous conseillons sur la pose d’un clapet anti-rongeurs par un plombier.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Alfortville ?', a: 'Oui : notre base de Saint-Maurice est voisine. Nous intervenons 7j/7, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [ALFORT_INSEE, ALFORT_WIKI, RSD_94, SPF_LEPTO],
}

// ── Arcueil (23/11/2026) ──
const ARCUEIL_WIKI: Source = { label: 'Wikipédia, Arcueil (vallée de la Bièvre, aqueducs, logement, quartiers, transports)', url: 'https://fr.wikipedia.org/wiki/Arcueil' }
const ARCUEIL_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94003, Arcueil', url: 'https://geo.api.gouv.fr/communes?code=94003&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['arcueil'] = {
  maj: '2026-11-23',
  accroche: 'Arcueil est construite dans la vallée de la Bièvre, une rivière longtemps en partie enterrée et rendue à l’air libre en 2022. Entre cités, pavillons et coteaux, nous suivons le chemin des rats.',
  societe: {
    titre: 'Société de dératisation à Arcueil (94110) : une ville dans la vallée de la Bièvre',
    paras: [
      'Arcueil compte **22 200 habitants** sur **2,33 km²**, entre l’A6 et l’ancienne RN20. La ville occupe en grande partie la **vallée de la Bièvre**, une rivière **en partie couverte à partir de 1900** et **remise à l’air libre en 2022** au parc du Coteau. Une rivière enterrée, c’est un réseau de **canalisations** et de **collecteurs** : le chemin préféré du **surmulot**, le rat d’égout.',
      'La ville est **urbanisée à plus de 90 %**, avec une forte part d’**habitat social** : environ **38 % du parc locatif** en HLM, et des résidences comme le **Chaperon-Vert** ou la **Vache-Noire**. On y trouve aussi une **cité-jardin** et des **pavillons** sur les coteaux. Pour une société de dératisation, c’est autant de parties communes à traiter que de jardins.',
      'Nous intervenons à Arcueil depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Arcueil](/souris/arcueil), [punaises de lit à Arcueil](/punaises-de-lit/arcueil) et [fourmis à Arcueil](/fourmis/arcueil).',
    ],
  },
  chiffres: [
    { valeur: '22 200', texte: 'habitants (population légale Insee), code postal 94110.', source: ARCUEIL_INSEE },
    { valeur: '1900', texte: 'la Bièvre commence à être couverte dans Arcueil ; elle est de nouveau découverte en 2022 au parc du Coteau.', source: ARCUEIL_WIKI },
    { valeur: '77,5 %', texte: 'des logements sont des appartements (2020), sur 11 030 logements.', source: ARCUEIL_WIKI },
    { valeur: '400 m', texte: 'de long pour l’aqueduc Médicis (1613-1624), qui enjambe la vallée de la Bièvre.', source: ARCUEIL_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Arcueil : la ville secteur par secteur',
    intro: 'Arcueil compte six quartiers : **Henri-Barbusse**, **Jean-Macé et la Cité-jardins**, **Joliot-Curie**, **Jules-Ferry**, **Laplace** et le **plateau Kergomard**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'La vallée de la Bièvre et le parc du Coteau',
        texte: 'Au fond de la vallée, la **Bièvre** a longtemps coulé sous la ville, dans des ouvrages enterrés. Là où elle réapparaît, au **parc du Coteau**, l’eau et la végétation attirent les rongeurs. Les immeubles et maisons du fond de vallée doivent surveiller **regards**, **caves** et **soupiraux**.',
        photo: { src: '/villes/arcueil/bievre-parc-du-coteau.jpg', alt: 'La Bièvre remise à l’air libre au parc du Coteau à Arcueil', legende: 'La Bièvre, de nouveau découverte en 2022 au parc du Coteau : eau et végétation en pleine ville.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Ruisseau_Bi%C3%A8vre_Parc_Coteau_Bi%C3%A8vre_-_Arcueil_(FR94)_-_2022-05-19_-_1.jpg' },
      },
      {
        nom: 'Le centre historique et les aqueducs',
        texte: 'Autour des **aqueducs Médicis et Belgrand** et du centre ancien, le bâti mêle maisons de maître, immeubles en brique et commerces de proximité. Les **caves anciennes**, les **cours** et les **murs de pierre** offrent abris et passages : nous les inspectons un par un.',
        photo: { src: '/villes/arcueil/aqueducs-medicis-belgrand.jpg', alt: 'Les aqueducs Médicis et Belgrand à Arcueil', legende: 'Les aqueducs Médicis et Belgrand, au-dessus de la vallée : autour, un centre ancien avec caves et cours.', credit: 'DurandMatthieu', licence: 'CC BY 2.5', page: W + 'AqueducArcueilBelMed.JPG' },
      },
      {
        nom: 'Les cités : Chaperon-Vert, Vache-Noire et les résidences',
        texte: 'Le **Chaperon-Vert**, la résidence de la **Vache-Noire** (en renouvellement urbain) et les nombreuses résidences sociales partagent **caves**, **vide-ordures** et **locaux à poubelles**. Le traitement d’un logement seul ne suffit pas : nous travaillons avec le **bailleur** sur toutes les **parties communes**.',
      },
      {
        nom: 'Laplace, la Vache-Noire et les commerces',
        texte: 'Autour de la gare **Laplace** du RER B, de l’avenue Laplace et du centre commercial de la **Vache-Noire**, ouvert en 2007, restaurants et commerces de bouche produisent des déchets toute la journée. Nous intervenons **hors des heures d’ouverture**, avec postes numérotés et **attestation**.',
        photo: { src: '/villes/arcueil/gare-rer-b-laplace.jpg', alt: 'La gare de Laplace, RER B, à Arcueil', legende: 'La gare de Laplace (RER B) : un pôle de commerces et de passage.', credit: 'ArséniureDeGallium', licence: 'CC BY-SA 2.5', page: W + 'RER_B-Laplace1.jpg' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Arcueil (94110) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Fond de vallée : regards et caves. Cités : vide-ordures, caves et local à poubelles. Pavillons des coteaux : jardin, abri et vide sanitaire.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Arcueil (94110) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans la cave ou au vide-ordures', x: 'Le signe d’une colonie dans les parties communes. Prévenez le bailleur ou le syndic par écrit : le traitement doit couvrir tout le sous-sol.' },
      { t: 'Un rat qui sort des toilettes', x: 'Dans une vallée où la rivière a longtemps été canalisée, le réseau d’assainissement est un chemin direct : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes).' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Arcueil](/souris/arcueil) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des terriers dans le jardin d’un pavillon', x: 'Sur les coteaux et à la Cité-jardins : pièges, traitement des galeries, protection du compost. Voir [rat dans le compost](/blog/rat-compost).' },
      { t: 'Un rongeur dans un commerce', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Arcueil',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Avec une forte part de logements sociaux à Arcueil, c’est souvent le **bailleur** qui organise la dératisation des parties communes.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique, dans un parc ou un square, alertez la **mairie d’Arcueil**.',
      'Nous intervenons aussi tout autour : [Cachan](/deratisation/cachan), [Gentilly](/deratisation/gentilly), [Le Kremlin-Bicêtre](/deratisation/le-kremlin-bicetre), [Villejuif](/deratisation/villejuif), [L’Haÿ-les-Roses](/deratisation/l-hay-les-roses), [Bagneux](/deratisation/bagneux), [Montrouge](/deratisation/montrouge) et [Paris 14e](/deratisation/paris-14).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Arcueil ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon, commerce ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'La Bièvre attire-t-elle les rats à Arcueil ?', a: 'L’eau, les berges et les anciens ouvrages enterrés sont favorables au surmulot ([mode de vie du rat](/blog/rat-mode-de-vie)). Les logements du fond de vallée doivent surveiller regards, caves et soupiraux.' },
    { q: 'J’habite au Chaperon-Vert : qui paie la dératisation ?', a: 'Les parties communes (caves, vide-ordures, local à poubelles) relèvent du bailleur. Signalez-lui le problème par écrit, avec photos et dates.' },
    { q: 'Qui paie la dératisation d’une copropriété ?', a: 'Les parties communes relèvent du syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Intervenez-vous dans les commerces de la Vache-Noire et de l’avenue Laplace ?', a: 'Oui, hors des heures d’ouverture, avec postes numérotés, registre et attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Arcueil ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [ARCUEIL_INSEE, ARCUEIL_WIKI, RSD_94, SPF_LEPTO],
}

// ── Boissy-Saint-Léger (23/11/2026) ──
const BOISSY_WIKI: Source = { label: 'Wikipédia, Boissy-Saint-Léger (RN19, grands ensembles, Haie Griselle)', url: 'https://fr.wikipedia.org/wiki/Boissy-Saint-L%C3%A9ger' }
const GROSBOIS_WIKI: Source = { label: 'Wikipédia, Château de Grosbois (domaine de 450 ha, centre d’entraînement, musée du trot)', url: 'https://fr.wikipedia.org/wiki/Ch%C3%A2teau_de_Grosbois' }
const BOISSY_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94004, Boissy-Saint-Léger', url: 'https://geo.api.gouv.fr/communes?code=94004&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['boissy-saint-leger'] = {
  maj: '2026-11-23',
  accroche: 'Un domaine de 450 hectares avec des écuries, une grande cité au nord de la gare, un vieux bourg et des pavillons : à Boissy-Saint-Léger, chaque secteur a ses rongeurs.',
  societe: {
    titre: 'Société de dératisation à Boissy-Saint-Léger (94470) : entre bois, écuries et cités',
    paras: [
      'Boissy-Saint-Léger compte **17 325 habitants** sur **8,92 km²**, sur la **RN19**, à 18 km de Notre-Dame de Paris. La commune abrite le **château de Grosbois** et son domaine : **450 hectares** achetés en 1962 pour y installer un **centre d’entraînement de chevaux de course**. Paddocks, écuries, fourrage et céréales : un milieu que les rats et les souris recherchent, et qui touche les quartiers voisins.',
      'La ville a beaucoup changé à partir des années 1960 : sa population a **triplé** avec la construction de **grands ensembles** au nord de la gare du **RER A**. Les cités de la **Haie Griselle** et de la **Hêtraie** comptent plus de **4 000 habitants**. Le reste de la commune est fait du **vieux bourg** et de quartiers de **pavillons** avec jardin.',
      'Nous intervenons à Boissy depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Boissy-Saint-Léger](/souris/boissy-saint-leger), [punaises de lit à Boissy-Saint-Léger](/punaises-de-lit/boissy-saint-leger), [fourmis à Boissy-Saint-Léger](/fourmis/boissy-saint-leger) et [chenilles processionnaires à Boissy-Saint-Léger](/chenilles-processionnaires/boissy-saint-leger).',
    ],
  },
  chiffres: [
    { valeur: '17 325', texte: 'habitants (population légale Insee), code postal 94470.', source: BOISSY_INSEE },
    { valeur: '450 ha', texte: 'pour le domaine de Grosbois, centre d’entraînement de chevaux de course depuis 1962.', source: GROSBOIS_WIKI },
    { valeur: '2 480', texte: 'logements à la cité de la Haie Griselle, près de 5 000 habitants, quartier prioritaire.', source: BOISSY_WIKI },
    { valeur: '× 3', texte: 'la population a triplé à partir des années 1960 avec les grands ensembles au nord de la gare.', source: BOISSY_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Boissy-Saint-Léger : la ville secteur par secteur',
    intro: 'Du **domaine de Grosbois** aux cités de la **Haie Griselle** et de la **Hêtraie**, du **vieux bourg** aux pavillons, voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Le domaine de Grosbois et les lisières',
        texte: 'Le **château de Grosbois** et son domaine de 450 hectares abritent un centre d’entraînement de chevaux de course et, depuis 2010, un **musée du trot**. Écuries, stocks de fourrage et de céréales, bois et prairies : les maisons en **lisière** voient souvent passer rats et souris, surtout à l’automne. Nous traitons les abords, les **abris de jardin** et les **garages**.',
        photo: { src: '/villes/boissy-saint-leger/chateau-de-grosbois.jpg', alt: 'Le château de Grosbois à Boissy-Saint-Léger', legende: 'Le château de Grosbois, au cœur d’un domaine de 450 hectares : écuries, fourrage et bois en bordure de la ville.', credit: 'Thesupermat', licence: 'CC BY-SA 3.0', page: W + 'Boissy-Saint-L%C3%A9ger_-_Ch%C3%A2teau_de_Grosbois_-_003.jpg' },
      },
      {
        nom: 'La Haie Griselle et la Hêtraie',
        texte: 'Au nord de la gare, ces deux cités des années 1960 rassemblent des milliers de logements autour des mêmes **caves**, **vide-ordures** et **locaux à poubelles**. Un rat vu dans un hall vient presque toujours du sous-sol. Le traitement se fait avec le **bailleur**, sur toutes les **parties communes**, puis nous rebouchons les passages vers les logements.',
        photo: { src: '/villes/boissy-saint-leger/haie-griselle-place-des-erables.jpg', alt: 'Place des Érables, cité de la Haie Griselle à Boissy-Saint-Léger', legende: 'Place des Érables, cité de la Haie Griselle : dans les grands ensembles, caves et locaux à poubelles sont partagés.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Place_%C3%89rables_-_Boissy-Saint-L%C3%A9ger_(FR94)_-_2022-05-06_-_1.jpg' },
      },
      {
        nom: 'Le vieux bourg, l’église Saint-Léger et les commerces',
        texte: 'Autour de l’**église Saint-Léger**, de la mairie et du château du **Piple**, le bourg ancien garde des maisons en pierre avec **caves** et **soupiraux**, et des commerces de proximité. Nous inspectons chaque ouverture et intervenons dans les commerces **hors des heures d’ouverture**, avec **attestation**.',
        photo: { src: '/villes/boissy-saint-leger/eglise-saint-leger.jpg', alt: 'L’église Saint-Léger de Boissy-Saint-Léger', legende: 'L’église Saint-Léger, au cœur du vieux bourg : maisons anciennes, caves et soupiraux.', credit: 'FGarg', licence: 'CC0', page: W + 'IMG_4607_(Eglise_Boissy).JPG' },
      },
      {
        nom: 'Les quartiers pavillonnaires',
        texte: 'Dans les quartiers de **pavillons**, jardins, composteurs, poulaillers et abris attirent les rongeurs. Nous traitons les **terriers**, protégeons le compost et fermons l’accès au **vide sanitaire**. Voir [rat dans le compost](/blog/rat-compost) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Boissy-Saint-Léger (94470) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes, des terriers ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Pavillon : jardin, abri, garage, vide sanitaire. Cité : caves, vide-ordures, local à poubelles. Écuries et stocks : points d’alimentation et passages.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide, près des animaux.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Boissy-Saint-Léger (94470) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans un box, une écurie ou un stock de grain', x: 'Le grain et le fourrage attirent rats et souris. Postes sécurisés hors de portée des chevaux et des chiens, pièges, stockage en bacs fermés : nous adaptons le dispositif aux animaux présents.' },
      { t: 'Des rats dans la cave ou au vide-ordures d’une cité', x: 'Le signe d’une colonie dans les parties communes. Prévenez le bailleur par écrit : le traitement doit couvrir tout le sous-sol.' },
      { t: 'Des souris dans la maison en automne', x: 'Quand les champs et les bois se refroidissent, les souris cherchent la chaleur : voir [souris à Boissy-Saint-Léger](/souris/boissy-saint-leger) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des terriers dans le jardin', x: 'Trous au pied des murs, coulées dans l’herbe : voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
      { t: 'Des rats attirés par les mangeoires et le poulailler', x: 'Graines au sol, mangeoires, compost ouvert : voir [nourrir les oiseaux attire les rats](/blog/nourrir-oiseaux-pigeons-attire-rats).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Boissy-Saint-Léger',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Un pavillon se traite à la charge de son propriétaire ; les parties communes d’une cité, à celle du **bailleur**.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique ou dans un espace vert, alertez la **mairie de Boissy-Saint-Léger**.',
      'Nous intervenons aussi tout autour : [Sucy-en-Brie](/deratisation/sucy-en-brie), [Limeil-Brévannes](/deratisation/limeil-brevannes), [Valenton](/deratisation/valenton), [Santeny](/deratisation/santeny), [Bonneuil-sur-Marne](/deratisation/bonneuil-sur-marne) et [Créteil](/deratisation/creteil).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Boissy-Saint-Léger ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon, écurie, commerce ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Pourquoi des souris dans ma maison chaque automne ?', a: 'Près des bois et des prairies, les souris cherchent la chaleur quand il fait froid. Elles passent par le moindre interstice : nous trouvons et bouchons leurs entrées ([par où entrent les souris](/blog/souris-par-ou-entrent-elles)).' },
    { q: 'Traitez-vous les écuries et les stocks de grain ?', a: 'Oui, avec des postes sécurisés hors de portée des chevaux, des chiens et des chats, des pièges et des conseils de stockage. Le dispositif est adapté aux animaux présents.' },
    { q: 'J’habite à la Haie Griselle : qui paie la dératisation ?', a: 'Les parties communes (caves, vide-ordures, local à poubelles) relèvent du bailleur. Signalez-lui le problème par écrit, avec photos et dates.' },
    { q: 'Qui paie la dératisation d’une copropriété ?', a: 'Les parties communes relèvent du syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Peut-on dératiser sans poison avec des animaux ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Boissy-Saint-Léger ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [BOISSY_INSEE, BOISSY_WIKI, GROSBOIS_WIKI, RSD_94, SPF_LEPTO],
}

// ── Bonneuil-sur-Marne (23/11/2026) ──
const BONNEUIL_WIKI: Source = { label: 'Wikipédia, Bonneuil-sur-Marne (Marne, port, quartiers, logement)', url: 'https://fr.wikipedia.org/wiki/Bonneuil-sur-Marne' }
const PORT_BONNEUIL_WIKI: Source = { label: 'Wikipédia, Port de Bonneuil-sur-Marne (2e plateforme multimodale d’Île-de-France, HAROPA)', url: 'https://fr.wikipedia.org/wiki/Port_de_Bonneuil-sur-Marne' }
const BONNEUIL_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94011, Bonneuil-sur-Marne', url: 'https://geo.api.gouv.fr/communes?code=94011&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['bonneuil-sur-marne'] = {
  maj: '2026-11-23',
  accroche: 'Un grand port fluvial, des entrepôts, des voies ferrées et des cités : à Bonneuil-sur-Marne, les rongeurs ont de quoi manger et se cacher. Nous traitons les logements comme les entreprises.',
  societe: {
    titre: 'Société de dératisation à Bonneuil-sur-Marne (94380) : la ville du port',
    paras: [
      'Bonneuil-sur-Marne compte **18 270 habitants** sur **5,49 km²**, au bord de la **Marne**. Entre la rivière et la ville s’étend le **port de Bonneuil**, **deuxième plateforme multimodale d’Île-de-France** : deux darses, des convois fluviaux, **22 km de voies ferrées** et de nombreux entrepôts. Quais, marchandises, palettes et déchets d’activité : un port est un milieu que le **surmulot** connaît bien.',
      'Côté habitat, Bonneuil est une ville d’**immeubles** : **79,5 % d’appartements** en 2018, et en 2015 le **plus fort taux de logements sociaux du Val-de-Marne** (76,9 %). La cité **Verdun-Saint-Exupéry** (la « cité jaune ») et la cité **Fabien** forment un quartier prioritaire d’environ **4 800 habitants**.',
      'Nous intervenons à Bonneuil depuis notre base de **Saint-Maurice**, de l’autre côté de la boucle de la Marne, 7 jours sur 7, pour les **particuliers** comme pour les **entreprises du port**.',
      'Nos autres pages pour la ville : [souris à Bonneuil-sur-Marne](/souris/bonneuil-sur-marne), [punaises de lit à Bonneuil-sur-Marne](/punaises-de-lit/bonneuil-sur-marne) et [fourmis à Bonneuil-sur-Marne](/fourmis/bonneuil-sur-marne).',
    ],
  },
  chiffres: [
    { valeur: '18 270', texte: 'habitants (population légale Insee), code postal 94380.', source: BONNEUIL_INSEE },
    { valeur: '2e', texte: 'plateforme multimodale d’Île-de-France : le port de Bonneuil, avec 22 km de voies ferrées.', source: PORT_BONNEUIL_WIKI },
    { valeur: '76,9 %', texte: 'de logements sociaux en 2015, le taux le plus élevé du Val-de-Marne.', source: BONNEUIL_WIKI },
    { valeur: '4 800', texte: 'habitants environ dans le quartier prioritaire des cités Verdun-Saint-Exupéry et Fabien (2020).', source: BONNEUIL_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Bonneuil-sur-Marne : la ville secteur par secteur',
    intro: 'Bonneuil compte cinq quartiers : le **Vieux-Bonneuil**, **République**, la **place des Libertés**, la cité **Verdun-Saint-Exupéry** et la cité **Fabien**, auxquels s’ajoute la zone du **port**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Le port, les darses et les entrepôts',
        texte: 'Le long de la Marne, le **port de Bonneuil** concentre entrepôts, quais, voies ferrées et zones de stockage. Les rongeurs y trouvent abri sous les palettes et nourriture dans les déchets d’activité. Pour une **entreprise**, nous posons des **postes numérotés** avec **plan de localisation**, tenons un **registre** des passages et remettons une **attestation** pour vos audits et assureurs.',
        photo: { src: '/villes/bonneuil-sur-marne/port-de-bonneuil-marne.jpg', alt: 'La Marne et l’entrée du port de Bonneuil', legende: 'La Marne et l’entrée du port de Bonneuil : quais, entrepôts et voies ferrées au bord de l’eau.', credit: 'Akiry', licence: 'CC BY-SA 4.0', page: W + 'Entree_port_de_bonneuil_(2).jpg' },
      },
      {
        nom: 'Les cités Verdun-Saint-Exupéry et Fabien',
        texte: 'Ces deux cités, dont la « **cité jaune** », regroupent un quart de la population. Les rongeurs circulent par les **caves**, les **vide-ordures** et les **locaux à poubelles**, communs à des dizaines de logements. Le traitement se fait avec le **bailleur**, sur toutes les **parties communes**, puis nous rebouchons les passages.',
        photo: { src: '/villes/bonneuil-sur-marne/cite-jaune-rue-maconnes.jpg', alt: 'Rue Maçonnes, cité jaune, à Bonneuil-sur-Marne', legende: 'Rue Maçonnes, dans la « cité jaune » : dans l’habitat collectif, caves et locaux à poubelles sont partagés.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Rue_Ma%C3%A7onnes_-_Bonneuil-sur-Marne_(FR94)_-_2022-04-15_-_1.jpg' },
      },
      {
        nom: 'Le Vieux-Bonneuil et le château du Rancy',
        texte: 'Autour du **château du Rancy**, inscrit aux monuments historiques, et de la mairie, le vieux bourg garde des maisons anciennes avec **caves** et **soupiraux**. Nous inspectons chaque ouverture, traitons, puis rebouchons.',
        photo: { src: '/villes/bonneuil-sur-marne/chateau-du-rancy.jpg', alt: 'Façade du château du Rancy à Bonneuil-sur-Marne', legende: 'Le château du Rancy, dans le Vieux-Bonneuil : autour, un bâti ancien avec caves et soupiraux.', credit: 'Racinaire', licence: 'CC BY-SA 3.0', page: W + 'Fa%C3%A7ade_du_ch%C3%A2teau_du_Rancy_%C3%A0_Bonneuil-sur-Marne.JPG' },
      },
      {
        nom: 'République, place des Libertés et les pavillons',
        texte: 'Dans ces quartiers, immeubles et **pavillons** se côtoient. Jardins, abris et composteurs attirent les rongeurs : nous traitons les **terriers** et fermons l’accès au **vide sanitaire**. Voir [rat dans le compost](/blog/rat-compost).',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Bonneuil-sur-Marne (94380) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Logement : cuisine, gaines, plinthes. Cité : caves, vide-ordures, local à poubelles. Entrepôt : quais, stockage, bennes et accès.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés et numérotés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations, contrat de suivi pour les entreprises. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Bonneuil-sur-Marne (94380) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans un entrepôt ou sur un quai', x: 'Marchandises rongées, crottes sur les palettes : postes numérotés autour du bâtiment, pièges à l’intérieur, registre et attestation. Voir notre page [dératisation pour les professionnels](/professionnels).' },
      { t: 'Des rats dans la cave ou au vide-ordures d’une cité', x: 'Le signe d’une colonie dans les parties communes. Prévenez le bailleur par écrit : le traitement doit couvrir tout le sous-sol.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Bonneuil-sur-Marne](/souris/bonneuil-sur-marne) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Un rongeur dans un restaurant ou une cantine', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
      { t: 'Des terriers dans un jardin', x: 'Trous au pied des murs, coulées dans l’herbe : voir [le mode de vie du rat](/blog/rat-mode-de-vie).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Bonneuil-sur-Marne',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Dans une ville où la grande majorité des logements sont sociaux, c’est le plus souvent le **bailleur** qui organise la dératisation des parties communes ; dans une entreprise, l’**exploitant** du site.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique ou dans un espace vert, alertez la **mairie de Bonneuil-sur-Marne**.',
      'Nous intervenons aussi tout autour : [Créteil](/deratisation/creteil), [Saint-Maur-des-Fossés](/deratisation/saint-maur-des-fosses), [Sucy-en-Brie](/deratisation/sucy-en-brie), [Limeil-Brévannes](/deratisation/limeil-brevannes), [Boissy-Saint-Léger](/deratisation/boissy-saint-leger) et [Valenton](/deratisation/valenton).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Bonneuil-sur-Marne ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Entrepôt, commerce ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Intervenez-vous dans les entreprises du port de Bonneuil ?', a: 'Oui : postes numérotés, plan de localisation, registre des passages et attestation pour vos audits, avec un contrat de suivi si besoin (voir [nos services aux professionnels](/professionnels)).' },
    { q: 'J’habite la cité jaune ou la cité Fabien : qui paie la dératisation ?', a: 'Les parties communes (caves, vide-ordures, local à poubelles) relèvent du bailleur. Signalez-lui le problème par écrit, avec photos et dates.' },
    { q: 'La Marne et le port attirent-ils les rats ?', a: 'L’eau, les quais et les zones de stockage sont favorables au surmulot ([mode de vie du rat](/blog/rat-mode-de-vie)). Les bâtiments proches doivent surveiller regards, caves et locaux à déchets.' },
    { q: 'Qui paie la dératisation d’une copropriété ?', a: 'Les parties communes relèvent du syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Bonneuil-sur-Marne ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [BONNEUIL_INSEE, BONNEUIL_WIKI, PORT_BONNEUIL_WIKI, RSD_94, SPF_LEPTO],
}

// ── Bry-sur-Marne (23/11/2026) ──
const BRY_WIKI: Source = { label: 'Wikipédia, Bry-sur-Marne (Marne, îles, coteaux, logement, INA et studios)', url: 'https://fr.wikipedia.org/wiki/Bry-sur-Marne' }
const BRY_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94015, Bry-sur-Marne', url: 'https://geo.api.gouv.fr/communes?code=94015&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['bry-sur-marne'] = {
  maj: '2026-11-23',
  accroche: 'Bordée par la Marne sur deux côtés, avec deux îles, des coteaux et un tiers de maisons : à Bry-sur-Marne, les rats viennent de la rivière vers les jardins. Nous leur fermons la porte.',
  societe: {
    titre: 'Société de dératisation à Bry-sur-Marne (94360) : des coteaux et des bords de Marne',
    paras: [
      'Bry-sur-Marne compte **18 503 habitants** sur **3,34 km²**. La **Marne** borde la ville **au nord et à l’ouest**, et **deux îles** font partie de la commune : l’**île d’Amour** et l’**île du Moulin**. Le **surmulot**, le rat d’égout, vit près de l’eau, nage très bien et remonte des berges vers les jardins, les caves et les réseaux.',
      'C’est une ville de **coteaux** et de **maisons** : l’ancien domaine seigneurial, qui couvrait les deux tiers de la commune, a été **loti dès 1859**, et en 2020 encore **35,3 % des logements** étaient des maisons individuelles. Jardins, abris, composteurs, vide sanitaires : une dératisation à Bry, c’est souvent le traitement d’une **maison et de son terrain**.',
      'Nous intervenons à Bry depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Bry-sur-Marne](/souris/bry-sur-marne), [cafards à Bry-sur-Marne](/cafards/bry-sur-marne), [punaises de lit à Bry-sur-Marne](/punaises-de-lit/bry-sur-marne) et [chenilles processionnaires à Bry-sur-Marne](/chenilles-processionnaires/bry-sur-marne).',
    ],
  },
  chiffres: [
    { valeur: '18 503', texte: 'habitants (population légale Insee), code postal 94360.', source: BRY_INSEE },
    { valeur: '2 îles', texte: 'de la Marne sur la commune : l’île d’Amour et l’île du Moulin.', source: BRY_WIKI },
    { valeur: '35,3 %', texte: 'des logements sont des maisons individuelles (2020) : jardins, garages et vide sanitaires.', source: BRY_WIKI },
    { valeur: '13 ha', texte: 'pour les studios de Bry, 8 plateaux de tournage ; l’INA y a aussi son siège.', source: BRY_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Bry-sur-Marne : la ville secteur par secteur',
    intro: 'Des **quais de Marne** aux **hauts de Bry**, du **vieux village** à la gare du **RER A**, voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les quais de Marne et les îles',
        texte: 'Le long des quais **Adrien-Mentienne** et **Louis-Ferber**, au bord de la Marne, les maisons ont souvent jardin, haies et sous-sol. L’eau et la végétation des berges attirent le rat. Nous contrôlons **soupiraux**, **regards** et pied des murs, et traitons les **terriers**.',
        photo: { src: '/villes/bry-sur-marne/quai-adrien-mentienne-marne.jpg', alt: 'Le quai Adrien-Mentienne au bord de la Marne à Bry-sur-Marne', legende: 'Le quai Adrien-Mentienne, en bord de Marne : haies, jardins et maisons à deux pas de la rivière.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Quai_Adrien_Mentienne_-_Bry-sur-Marne_(FR94)_-_2021-10-04_-_1.jpg' },
      },
      {
        nom: 'Le vieux village et la Grande Rue',
        texte: 'Autour de la **Grande Rue**, de l’église et de la **place Daguerre**, le bâti ancien garde **caves**, **cours** et commerces de proximité. Un rongeur repéré dans une boutique vient souvent d’un sous-sol voisin : nous inspectons chaque ouverture et intervenons **hors des heures d’ouverture**.',
        photo: { src: '/villes/bry-sur-marne/grande-rue.jpg', alt: 'La Grande Rue de Bry-sur-Marne', legende: 'La Grande Rue, dans le vieux Bry : maisons anciennes, caves et commerces.', credit: 'Aridd', licence: 'CC BY-SA 3.0', page: W + 'Bry-sur-Marne_grande_rue.jpg' },
      },
      {
        nom: 'Les coteaux et les lotissements',
        texte: 'Sur les **coteaux**, les lotissements nés du découpage de l’ancien domaine sont faits de **pavillons** avec jardin. Composteurs, poulaillers, abris et vide sanitaires : nous traitons les galeries et fermons les accès. Voir [rat dans le compost](/blog/rat-compost) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
        photo: { src: '/villes/bry-sur-marne/place-daguerre.jpg', alt: 'La place Daguerre et son monument à Bry-sur-Marne', legende: 'La place Daguerre : à Bry, le bâti ancien et les jardins se côtoient.', credit: 'Lecheminlu', licence: 'CC BY-SA 3.0', page: W + 'Place_Daguerre.jpg' },
      },
      {
        nom: 'Les hauts de Bry, l’INA et les studios',
        texte: 'Sur le plateau, l’**INA** et les **studios de Bry** (13 hectares, 8 plateaux) côtoient résidences et immeubles près de la gare du **RER A**. Pour un site d’activité ou une résidence : postes **numérotés**, **registre** et **attestation**, et traitement des **parties communes** avec le **syndic**.',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Bry-sur-Marne (94360) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes, des terriers ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le tour de la maison', x: 'Jardin, abri, garage, vide sanitaire, soupiraux côté Marne ; en résidence, caves, parkings et local à poubelles.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Bry-sur-Marne (94360) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des terriers dans le jardin, près de la Marne', x: 'Trous au pied des murs, sous la terrasse ou l’abri, coulées dans la pelouse : voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
      { t: 'Des bruits sous le plancher ou dans les combles', x: 'Un rat dans le vide sanitaire ou sous le toit : voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire) et [rats dans les combles](/blog/rats-dans-les-combles).' },
      { t: 'Des souris dans la maison en automne', x: 'Elles entrent par le moindre interstice quand il fait froid : voir [souris à Bry-sur-Marne](/souris/bry-sur-marne) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des rats attirés par les mangeoires ou le poulailler', x: 'Graines au sol, mangeoires, compost ouvert : voir [nourrir les oiseaux attire les rats](/blog/nourrir-oiseaux-pigeons-attire-rats).' },
      { t: 'Un rongeur dans un commerce ou un site d’activité', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles) et [nos services aux professionnels](/professionnels).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Bry-sur-Marne',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. À Bry, c’est donc le plus souvent au **propriétaire de la maison** de faire appel à une entreprise de dératisation ; pour un immeuble, au **syndic**.',
      'Pour des rats sur les quais, dans un parc ou sur la voie publique, alertez la **mairie de Bry-sur-Marne**. Les rats ne connaissent pas les clôtures : prévenir vos voisins aide à traiter le secteur.',
      'Nous intervenons aussi tout autour : [Le Perreux-sur-Marne](/deratisation/le-perreux-sur-marne), [Champigny-sur-Marne](/deratisation/champigny-sur-marne), [Villiers-sur-Marne](/deratisation/villiers-sur-marne), [Nogent-sur-Marne](/deratisation/nogent-sur-marne) et [Saint-Maur-des-Fossés](/deratisation/saint-maur-des-fosses).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Bry-sur-Marne ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Maison avec jardin, commerce ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Les bords de Marne attirent-ils les rats à Bry ?', a: 'L’eau et la végétation des berges sont favorables au surmulot ([mode de vie du rat](/blog/rat-mode-de-vie)). Les maisons des quais doivent surveiller jardins, regards et soupiraux.' },
    { q: 'J’ai des trous dans ma pelouse : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Mon compost ou mon poulailler attire-t-il les rats ?', a: 'Oui, s’ils donnent accès à la nourriture. Fermez le composteur, ramassez les graines le soir et rangez-les en bacs fermés (voir [rat dans le compost](/blog/rat-compost)).' },
    { q: 'Peut-on dératiser sans poison dans un jardin avec chien ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés.' },
    { q: 'Qui paie la dératisation d’une copropriété ?', a: 'Les parties communes relèvent du syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Bry-sur-Marne ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [BRY_INSEE, BRY_WIKI, RSD_94, SPF_LEPTO],
}

// ── Cachan (23/11/2026) ──
const CACHAN_WIKI: Source = { label: 'Wikipédia, Cachan (vallée de la Bièvre, quartiers, logement, aqueducs)', url: 'https://fr.wikipedia.org/wiki/Cachan' }
const CACHAN_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94016, Cachan', url: 'https://geo.api.gouv.fr/communes?code=94016&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['cachan'] = {
  maj: '2026-11-23',
  accroche: 'Cachan s’étend d’un coteau à l’autre de la vallée de la Bièvre : immeubles en bas, pavillons sur les pentes. Nous traitons les deux, avec la même méthode : trouver le passage, puis le fermer.',
  societe: {
    titre: 'Société de dératisation à Cachan (94230) : d’un coteau à l’autre de la Bièvre',
    paras: [
      'Cachan compte **31 103 habitants** sur **2,79 km²**. La ville occupe **toute la largeur de la vallée de la Bièvre**, d’un coteau à l’autre, entre 42 et 111 mètres d’altitude. Au fond de la vallée, la rivière a longtemps été canalisée : un réseau d’**ouvrages enterrés** et de **collecteurs** que le **surmulot**, le rat d’égout, emprunte volontiers.',
      'Sur **10 828 résidences principales**, Cachan compte **75 % de logements collectifs** et **23 % de pavillons**, avec un parc social réparti entre **onze bailleurs**. Immeubles en fond de vallée, maisons sur les coteaux et à la **Cité-Jardins** : une société de dératisation y traite aussi bien des **caves d’immeuble** que des **jardins**.',
      'Nous intervenons à Cachan depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Cachan](/souris/cachan), [punaises de lit à Cachan](/punaises-de-lit/cachan) et [fourmis à Cachan](/fourmis/cachan).',
    ],
  },
  chiffres: [
    { valeur: '31 103', texte: 'habitants (population légale Insee), code postal 94230.', source: CACHAN_INSEE },
    { valeur: '75 %', texte: 'de logements collectifs et 23 % de pavillons, sur 10 828 résidences principales.', source: CACHAN_WIKI },
    { valeur: '11', texte: 'bailleurs sociaux se partagent 3 729 logements sociaux à Cachan.', source: CACHAN_WIKI },
    { valeur: '69 m', texte: 'de dénivelé entre le fond de la vallée de la Bièvre (42 m) et le haut des coteaux (111 m).', source: CACHAN_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Cachan : la ville quartier par quartier',
    intro: 'Cachan compte sept quartiers : le **Centre-ville**, le **Coteau**, la **Cité-Jardins**, la **Plaine-la Prairie**, la **Grange Ory**, **Saint-Jean** et **les Lumières**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Le fond de vallée, la Plaine et la Prairie',
        texte: 'En bas de la ville, là où coulait la **Bièvre**, les immeubles et les rues reposent sur d’anciens ouvrages hydrauliques et des réseaux d’assainissement. Les rongeurs y circulent puis remontent par les **regards**, les **caves** et les **parkings**. Nous traitons au plus près de leur point d’entrée.',
        photo: { src: '/villes/cachan/aqueduc-de-la-vanne.jpg', alt: 'L’aqueduc de la Vanne traversant la vallée de la Bièvre à Cachan', legende: 'L’aqueduc de la Vanne traverse la vallée de la Bièvre, vu depuis le jardin panoramique : immeubles en bas, pavillons sur les coteaux.', credit: 'Ze miguel', licence: 'CC BY-SA 3.0', page: W + 'Aqueduc_de_la_Vanne.jpg' },
      },
      {
        nom: 'Le Coteau et la Cité-Jardins',
        texte: 'Sur les pentes, les **pavillons** avec jardin dominent, comme à la **Cité-Jardins**. Composteurs, abris, haies et vide sanitaires attirent les rongeurs : nous traitons les **terriers**, protégeons le compost et fermons les accès. Voir [rat dans le compost](/blog/rat-compost) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
        photo: { src: '/villes/cachan/chateau-des-arcs.jpg', alt: 'Le château des Arcs à Cachan, façade sud', legende: 'Le château des Arcs : sur les coteaux de Cachan, maisons anciennes et jardins.', credit: 'Patrbe', licence: 'CC BY-SA 4.0', page: W + 'Ch%C3%A2teau_des_Arcs_-_Cachan_-_fa%C3%A7ade_sud.jpg' },
      },
      {
        nom: 'Le Centre-ville et la gare Arcueil-Cachan',
        texte: 'Autour de la mairie et de la gare **Arcueil-Cachan** du **RER B**, commerces, restaurants et immeubles partagent **caves** et **locaux à déchets**. Pour un commerce, nous intervenons **hors des heures d’ouverture**, avec postes numérotés et **attestation**.',
        photo: { src: '/villes/cachan/gare-arcueil-cachan.jpg', alt: 'L’accès à la gare Arcueil-Cachan, rue de la Gare, à Cachan', legende: 'L’accès à la gare Arcueil-Cachan (RER B) : talus, murets et végétation au bord des voies.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Acc%C3%A8s_Gare_Arcueil_Cachan_Rue_Gare_-_Cachan_(FR94)_-_2026-10-18_-_1.jpg' },
      },
      {
        nom: 'La Grange Ory, Saint-Jean et les Lumières',
        texte: 'Ces quartiers mêlent résidences, logements sociaux et petits collectifs. Le traitement se fait avec le **bailleur** ou le **syndic**, sur les **parties communes** : caves, vide-ordures et locaux à poubelles, puis nous rebouchons les passages vers les logements.',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Cachan (94230) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Immeuble : caves, parkings, local à poubelles, gaines. Pavillon : jardin, abri, garage, vide sanitaire. Commerce : réserves et cuisine.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Cachan (94230) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans la cave ou le parking', x: 'Le signe d’une colonie dans les parties communes. Prévenez le syndic ou le bailleur par écrit : le traitement doit couvrir tout le sous-sol.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Cachan](/souris/cachan) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des terriers dans le jardin d’un pavillon', x: 'Sur les coteaux et à la Cité-Jardins : voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
      { t: 'Un rat qui sort des toilettes', x: 'En fond de vallée, le réseau d’assainissement est un chemin direct : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes).' },
      { t: 'Un rongeur dans un commerce ou une résidence étudiante', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Cachan',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. À Cachan, un pavillon se traite à la charge de son propriétaire ; les parties communes d’un immeuble, à celle du **syndic** ou du **bailleur**.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique ou dans un parc, alertez la **mairie de Cachan**.',
      'Nous intervenons aussi tout autour : [Arcueil](/deratisation/arcueil), [Villejuif](/deratisation/villejuif), [L’Haÿ-les-Roses](/deratisation/l-hay-les-roses), [Bagneux](/deratisation/bagneux), [Bourg-la-Reine](/deratisation/bourg-la-reine) et [Sceaux](/deratisation/sceaux).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Cachan ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon, commerce ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Pourquoi des rats dans le bas de Cachan ?', a: 'Le fond de la vallée de la Bièvre est parcouru par des réseaux enterrés que le surmulot emprunte ([mode de vie du rat](/blog/rat-mode-de-vie)). Il remonte ensuite par les regards, les caves et les parkings.' },
    { q: 'J’ai des trous dans mon jardin : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Qui paie la dératisation d’une résidence sociale ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Intervenez-vous dans les commerces du centre de Cachan ?', a: 'Oui, hors des heures d’ouverture, avec postes numérotés, registre et attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Cachan ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [CACHAN_INSEE, CACHAN_WIKI, RSD_94, SPF_LEPTO],
}

// ── Charenton-le-Pont (23/11/2026) ──
const CHARENTON_WIKI: Source = { label: 'Wikipédia, Charenton-le-Pont (quartiers, densité, logement, carrières, Bercy)', url: 'https://fr.wikipedia.org/wiki/Charenton-le-Pont' }
const CHARENTON_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94018, Charenton-le-Pont', url: 'https://geo.api.gouv.fr/communes?code=94018&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['charenton-le-pont'] = {
  maj: '2026-11-23',
  accroche: 'Entre le bois de Vincennes, la Seine et la Marne, sur d’anciennes carrières : à Charenton-le-Pont, presque tout le monde vit en immeuble, et les rongeurs passent par les sous-sols. Nous sommes vos voisins directs.',
  societe: {
    titre: 'Société de dératisation à Charenton-le-Pont (94220) : notre ville voisine',
    paras: [
      'Charenton-le-Pont compte **28 830 habitants** sur **1,85 km²**, soit plus de **15 000 habitants au km²**, l’une des densités les plus fortes du Val-de-Marne. En 2021, **97,8 % des logements** étaient des appartements. Pour les rats et les souris, c’est un réseau continu de **caves**, de **parkings**, de **gaines** et de **locaux à poubelles**.',
      'La ville est prise entre le **bois de Vincennes** au nord, la **Seine** et la **Marne** au sud, et traversée par l’**A4**. Son nom vient de l’extraction de la pierre : le sous-sol garde d’**anciennes carrières**, dont certaines ont encore été comblées en 2021 sous le square Jules-Noël. Eau, bois, sous-sols et grands axes : tout ce que le **surmulot** apprécie.',
      'Notre base est à **Saint-Maurice**, la commune juste à côté : nous sommes à Charenton en quelques minutes, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Charenton-le-Pont](/souris/charenton-le-pont), [cafards à Charenton-le-Pont](/cafards/charenton-le-pont), [punaises de lit à Charenton-le-Pont](/punaises-de-lit/charenton-le-pont) et [puces à Charenton-le-Pont](/puces/charenton-le-pont).',
    ],
  },
  chiffres: [
    { valeur: '28 830', texte: 'habitants (population légale Insee), code postal 94220.', source: CHARENTON_INSEE },
    { valeur: '97,8 %', texte: 'des logements sont des appartements (2021) : la quasi-totalité de la ville vit en immeuble.', source: CHARENTON_WIKI },
    { valeur: '15 349', texte: 'habitants au km², l’une des densités les plus élevées du Val-de-Marne.', source: CHARENTON_WIKI },
    { valeur: '2021', texte: 'comblement d’anciennes carrières souterraines sous le square Jules-Noël, par injection de coulis.', source: CHARENTON_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Charenton-le-Pont : la ville quartier par quartier',
    intro: 'La ville compte cinq quartiers : **Valmy**, **Bercy**, **Centre**, **Pasteur** et **Pont**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Le Pont et les bords de Marne et de Seine',
        texte: 'Au sud, le quartier du **Pont**, qui doit son nom au pont de Charenton sur la Marne, et les rues riveraines longent la **Marne** et la **Seine**. Quais, berges et réseaux d’assainissement : c’est le chemin habituel du rat d’égout. Les immeubles proches de l’eau doivent surveiller **caves**, **regards** et **locaux à poubelles**.',
        photo: { src: '/villes/charenton-le-pont/marne-passerelle.jpg', alt: 'La Marne entre Charenton-le-Pont et Alfortville, vue depuis la passerelle', legende: 'La Marne vue depuis la passerelle d’Alfortville : à droite, les immeubles de Charenton au bord de l’eau.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Marne_vue_depuis_Passerelle_Alfortville_Charenton_Pont_6.jpg' },
      },
      {
        nom: 'Le Centre et l’ancien bourg des Carrières',
        texte: 'Autour de la mairie et de l’église, le centre ancien repose sur d’**anciennes carrières**. Caves profondes, vieux murs et réseaux : un rongeur repéré dans une boutique ou un hall vient souvent d’un **sous-sol voisin**. Nous inspectons, traitons, puis rebouchons les passages.',
        photo: { src: '/villes/charenton-le-pont/comblement-carrieres.jpg', alt: 'Panneau des travaux de comblement des carrières sous le square Jules-Noël à Charenton-le-Pont', legende: 'Travaux de comblement des carrières sous le square Jules-Noël, en 2021 : à Charenton, le sous-sol est creux par endroits.', credit: 'VVVCFFrance', licence: 'CC BY-SA 4.0', page: W + 'Travaux_de_comblement_de_carri%C3%A8res_sous_l%27ancien_S%C3%A9jour_du_Roi.jpg' },
      },
      {
        nom: 'Bercy, l’A4 et le centre commercial',
        texte: 'Le quartier **Bercy**, autour du centre commercial **Bercy 2** et de l’**autoroute A4**, mêle immeubles de grande hauteur, parkings, restaurants et anciennes zones d’entrepôts. Pour un commerce ou une résidence : postes **numérotés**, **registre**, **attestation**, et traitement des **parkings souterrains**.',
        photo: { src: '/villes/charenton-le-pont/autoroute-a4.jpg', alt: 'L’autoroute A4 à Charenton-le-Pont', legende: 'L’A4 traverse Charenton : talus, ouvrages et immeubles de grande hauteur.', credit: 'FrancoisFC', licence: 'CC BY-SA 3.0', page: W + 'Charenton_A4.jpg' },
      },
      {
        nom: 'Valmy, Pasteur et la lisière du bois de Vincennes',
        texte: 'Au nord, le long de l’**avenue de Gravelle**, les immeubles et hôtels particuliers bordent le **bois de Vincennes**. Les rongeurs vivent dans le bois et s’approchent des **locaux à poubelles** et des **soupiraux** des résidences. Nous traitons le pourtour des bâtiments et fermons les accès.',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Charenton-le-Pont (94220) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'L’enquête dans l’immeuble', x: 'Cuisine, gaines et plinthes chez vous ; caves, parkings et local à poubelles dans les parties communes : nous trouvons d’où viennent les rongeurs.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Charenton-le-Pont (94220) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des souris dans la cuisine d’un appartement', x: 'Le cas le plus fréquent dans une ville d’immeubles : voir [souris à Charenton-le-Pont](/souris/charenton-le-pont), [par où entrent les souris](/blog/souris-par-ou-entrent-elles) et [rat derrière l’électroménager](/blog/rat-piege-cuisine-electromenager).' },
      { t: 'Des rats dans la cave ou le parking', x: 'Le signe d’une colonie dans les sous-sols, souvent reliés entre immeubles. Prévenez le syndic par écrit : le traitement doit couvrir les parties communes.' },
      { t: 'Un rat qui sort des toilettes', x: 'Au bord de la Seine et de la Marne, le réseau d’assainissement est un chemin direct : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes).' },
      { t: 'Un rongeur dans un restaurant ou un commerce', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles), et [cafards à Charenton-le-Pont](/cafards/charenton-le-pont).' },
      { t: 'Des bruits dans les murs ou le plafond', x: 'Dans le bâti ancien, les rongeurs circulent dans les cloisons et les planchers : voir [rat dans les murs et cloisons](/blog/rat-dans-les-murs-cloisons).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Charenton-le-Pont',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. À Charenton, où presque tout le monde vit en copropriété, c’est le plus souvent au **syndic** de faire traiter les parties communes, et à chacun son logement.',
      'Locataire, prévenez votre propriétaire **par écrit**, avec photos. Pour des rats sur la voie publique, sur les quais ou dans un square, alertez la **mairie de Charenton-le-Pont** ; pour le bois de Vincennes, la **Ville de Paris**.',
      'Nous intervenons aussi tout autour : [Saint-Maurice](/deratisation/saint-maurice), [Maisons-Alfort](/deratisation/maisons-alfort), [Alfortville](/deratisation/alfortville), [Ivry-sur-Seine](/deratisation/ivry-sur-seine), [Paris 12e](/deratisation/paris-12), [Vincennes](/deratisation/vincennes) et [Saint-Mandé](/deratisation/saint-mande).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Charenton-le-Pont ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Commerce, restaurant ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Êtes-vous vraiment à côté de Charenton ?', a: 'Oui : notre base est à Saint-Maurice, la commune voisine. Nous intervenons 7j/7, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
    { q: 'J’ai des souris dans mon appartement : faut-il traiter tout l’immeuble ?', a: 'Souvent, oui. Si elles viennent des caves ou des gaines, nous traitons votre logement et conseillons au syndic de traiter les parties communes ([par où entrent les souris](/blog/souris-par-ou-entrent-elles)).' },
    { q: 'Les anciennes carrières favorisent-elles les rats ?', a: 'Un sous-sol ancien, avec caves profondes et vieux réseaux, offre des abris aux rongeurs. Le traitement se fait au plus près des points d’entrée, puis nous rebouchons.' },
    { q: 'Qui paie la dératisation des caves d’une copropriété ?', a: 'Le syndicat des copropriétaires, par le syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Intervenez-vous dans les restaurants de Charenton et de Bercy 2 ?', a: 'Oui, hors des heures d’ouverture, avec postes numérotés, registre et attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    { q: 'Peut-on dératiser sans poison dans un appartement avec chat ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
  ],
  sources: [CHARENTON_INSEE, CHARENTON_WIKI, RSD_94, SPF_LEPTO],
}

// ── Chennevières-sur-Marne (23/11/2026) ──
const CHENNEVIERES_WIKI: Source = { label: 'Wikipédia, Chennevières-sur-Marne (coteaux, Marne et îles, quartiers, logement)', url: 'https://fr.wikipedia.org/wiki/Chennevi%C3%A8res-sur-Marne' }
const CHENNEVIERES_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94019, Chennevières-sur-Marne', url: 'https://geo.api.gouv.fr/communes?code=94019&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['chennevieres-sur-marne'] = {
  maj: '2026-11-23',
  accroche: 'Des coteaux classés au-dessus de la Marne, deux îles, des pavillons et le Bois-l’Abbé : à Chennevières-sur-Marne, les rats montent de la rivière vers les jardins. Nous les arrêtons.',
  societe: {
    titre: 'Société de dératisation à Chennevières-sur-Marne (94430) : des coteaux au-dessus de la Marne',
    paras: [
      'Chennevières-sur-Marne compte **18 710 habitants** sur **5,22 km²**. La ville **surplombe la rive gauche de la Marne**, jusqu’à 104 mètres d’altitude, et ses **coteaux sont un site classé**. **Deux îles** font partie de la commune : l’**île des Vignerons** et l’**île d’Amour**. En bas, la rivière et ses berges, terrain du **surmulot** ; en haut, le plateau qui prolonge la plaine de la Brie.',
      'C’est une ville de **propriétaires** (57,6 % des ménages) et de **pavillons** avec jardin, sur les coteaux et sur le plateau, mais aussi d’ensembles collectifs comme le **Bois-l’Abbé**, quartier prioritaire partagé avec Champigny. Une société de dératisation y traite autant des **jardins** et des **vide sanitaires** que des **caves d’immeuble**.',
      'Nous intervenons à Chennevières depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Chennevières-sur-Marne](/souris/chennevieres-sur-marne), [punaises de lit à Chennevières-sur-Marne](/punaises-de-lit/chennevieres-sur-marne), [fourmis à Chennevières-sur-Marne](/fourmis/chennevieres-sur-marne) et [chenilles processionnaires à Chennevières-sur-Marne](/chenilles-processionnaires/chennevieres-sur-marne).',
    ],
  },
  chiffres: [
    { valeur: '18 710', texte: 'habitants (population légale Insee), code postal 94430.', source: CHENNEVIERES_INSEE },
    { valeur: '104 m', texte: 'd’altitude : la ville surplombe la rive gauche de la Marne, sur des coteaux classés.', source: CHENNEVIERES_WIKI },
    { valeur: '2 îles', texte: 'de la Marne sur la commune : l’île des Vignerons et l’île d’Amour.', source: CHENNEVIERES_WIKI },
    { valeur: '57,6 %', texte: 'des ménages sont propriétaires de leur logement : beaucoup de maisons avec jardin.', source: CHENNEVIERES_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Chennevières-sur-Marne : la ville quartier par quartier',
    intro: 'La ville compte six quartiers : **Moulin-Coteaux Sud**, **Bords de Marne**, **Centre-Ville-Belvédère**, **Paris Chennevières-le Fort-Mon Idée**, **Bois-l’Abbé** et **Hauts-de-Chennevières-les Bordes**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les Bords de Marne et les îles',
        texte: 'En bas des coteaux, les maisons des **bords de Marne**, près de l’île des Vignerons et de l’île d’Amour, sont les plus exposées : l’eau, les berges et la végétation sont le territoire préféré du rat. Nous contrôlons **soupiraux**, **regards** et pied des murs, et traitons les **terriers**.',
        photo: { src: '/villes/chennevieres-sur-marne/pissarro-la-marne-a-chennevieres.jpg', alt: 'La Marne à Chennevières, tableau de Camille Pissarro (1864-1865)', legende: 'La Marne à Chennevières, peinte par Camille Pissarro vers 1864 : les berges n’ont pas cessé d’attirer la faune.', credit: 'Camille Pissarro, Galeries nationales d’Écosse', licence: 'Domaine public', page: W + 'Camille_Pissarro_-_The_Marne_at_Chennevi%C3%A8res_-_Google_Art_Project.jpg' },
      },
      {
        nom: 'Les coteaux et le centre ancien',
        texte: 'Sur les **coteaux** classés et autour de l’**église Saint-Pierre**, les maisons anciennes ont jardins en pente, murets de pierre, **caves** et **soupiraux**. Les rongeurs y circulent à couvert : nous inspectons chaque ouverture et rebouchons après le traitement.',
        photo: { src: '/villes/chennevieres-sur-marne/eglise-saint-pierre.jpg', alt: 'Chevet de l’église Saint-Pierre de Chennevières-sur-Marne', legende: 'L’église Saint-Pierre, sur les hauteurs : autour, le bâti ancien des coteaux.', credit: 'Melusane', licence: 'CC BY-SA 3.0', page: W + 'Eglise_Ss_Pierre_et_Paul_de_Chennevi%C3%A8res.jpg' },
      },
      {
        nom: 'Le Bois-l’Abbé',
        texte: 'Partagé avec Champigny, ce **quartier prioritaire** rassemble de grands immeubles autour des mêmes **caves**, **vide-ordures** et **locaux à poubelles**. Le traitement se fait avec le **bailleur**, sur toutes les **parties communes**, puis nous rebouchons les passages vers les logements.',
        photo: { src: '/villes/chennevieres-sur-marne/bois-l-abbe-villa-ile-de-france.jpg', alt: 'Villa Île-de-France, quartier du Bois-l’Abbé à Chennevières-sur-Marne', legende: 'Villa Île-de-France, au Bois-l’Abbé : dans l’habitat collectif, caves et locaux à poubelles sont partagés.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Villa_%C3%8Ele_France_-_Chennevi%C3%A8res-sur-Marne_(FR94)_-_2022-04-09_-_1.jpg' },
      },
      {
        nom: 'Les Hauts-de-Chennevières, les Bordes et le plateau',
        texte: 'Sur le plateau, vers la Brie, les **lotissements de pavillons** et la zone d’activités côtoient champs et espaces verts. Composteurs, abris, garages : à l’automne, les souris des champs cherchent la chaleur des maisons. Voir [rat dans le compost](/blog/rat-compost) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Chennevières-sur-Marne (94430) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes, des terriers ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le tour de la maison', x: 'Jardin, abri, garage, vide sanitaire, soupiraux côté Marne ; en résidence, caves, vide-ordures et local à poubelles.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Chennevières-sur-Marne (94430) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des terriers dans un jardin en pente', x: 'Trous au pied des murets, sous la terrasse ou l’abri : voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
      { t: 'Des souris dans la maison en automne', x: 'Près des champs du plateau, elles cherchent la chaleur : voir [souris à Chennevières-sur-Marne](/souris/chennevieres-sur-marne).' },
      { t: 'Des bruits sous le plancher ou dans les combles', x: 'Voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire) et [rats dans les combles](/blog/rats-dans-les-combles).' },
      { t: 'Des rats dans la cave au Bois-l’Abbé', x: 'Le signe d’une colonie dans les parties communes. Prévenez le bailleur par écrit : le traitement doit couvrir tout le sous-sol.' },
      { t: 'Des rats attirés par les mangeoires ou le poulailler', x: 'Graines au sol, mangeoires, compost ouvert : voir [nourrir les oiseaux attire les rats](/blog/nourrir-oiseaux-pigeons-attire-rats).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Chennevières-sur-Marne',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. À Chennevières, c’est donc le plus souvent au **propriétaire de la maison** de faire appel à une entreprise de dératisation ; pour une résidence, au **bailleur** ou au **syndic**.',
      'Pour des rats sur les berges, dans un parc ou sur la voie publique, alertez la **mairie de Chennevières-sur-Marne**. Les rats ne connaissent pas les clôtures : prévenir vos voisins aide à traiter le secteur.',
      'Nous intervenons aussi tout autour : [Champigny-sur-Marne](/deratisation/champigny-sur-marne), [Saint-Maur-des-Fossés](/deratisation/saint-maur-des-fosses), [Sucy-en-Brie](/deratisation/sucy-en-brie) et [Le Plessis-Trévise](/deratisation/le-plessis-trevise).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Chennevières-sur-Marne ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Maison avec jardin ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Les bords de Marne attirent-ils les rats ?', a: 'L’eau et la végétation des berges sont favorables au surmulot ([mode de vie du rat](/blog/rat-mode-de-vie)). Les maisons des bords de Marne doivent surveiller jardins, regards et soupiraux.' },
    { q: 'Pourquoi des souris chaque automne dans ma maison ?', a: 'Près des champs et des espaces verts du plateau, les souris cherchent la chaleur quand il fait froid. Nous trouvons et bouchons leurs entrées ([par où entrent les souris](/blog/souris-par-ou-entrent-elles)).' },
    { q: 'J’ai des trous dans mon jardin : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'J’habite au Bois-l’Abbé : qui paie la dératisation ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Peut-on dératiser sans poison dans un jardin avec chien ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Chennevières-sur-Marne ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [CHENNEVIERES_INSEE, CHENNEVIERES_WIKI, RSD_94, SPF_LEPTO],
}

// ── Chevilly-Larue (23/11/2026) ──
const CHEVILLY_WIKI: Source = { label: 'Wikipédia, Chevilly-Larue (secteurs, MIN de Rungis, logement, transports)', url: 'https://fr.wikipedia.org/wiki/Chevilly-Larue' }
const MIN_RUNGIS_WIKI: Source = { label: 'Wikipédia, Marché d’intérêt national de Rungis (situé sur Rungis et Chevilly-Larue)', url: 'https://fr.wikipedia.org/wiki/March%C3%A9_d%27int%C3%A9r%C3%AAt_national_de_Rungis' }
const CHEVILLY_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94021, Chevilly-Larue', url: 'https://geo.api.gouv.fr/communes?code=94021&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['chevilly-larue'] = {
  maj: '2026-11-23',
  accroche: 'La moitié nord du marché de Rungis, le plus grand marché de produits agricoles au monde, est à Chevilly-Larue. Autour, des cités, des pavillons et des commerces de bouche : un terrain que les rongeurs adorent.',
  societe: {
    titre: 'Société de dératisation à Chevilly-Larue (94550) : la ville du marché de Rungis',
    paras: [
      'Chevilly-Larue compte **19 826 habitants** sur **4,22 km²**, sur le **plateau de Longboyau**, sans aucun cours d’eau. Sa particularité : au centre de la commune se trouve **la moitié nord du marché d’intérêt national de Rungis**, partagé à parts presque égales avec Rungis. C’est le **plus grand marché de produits agricoles au monde**. Fruits, légumes, viandes, poissons, emballages : partout où l’on stocke et manipule de la nourriture, les rats et les souris cherchent à s’installer.',
      'De part et d’autre du marché, deux secteurs d’habitation : **Larue** à l’ouest, à dominante **pavillonnaire**, et **Chevilly** à l’est, avec l’ancien village, les cités des **Sorbiers** et de la **Saussaie** et le quartier de villas **Bretagne**. En 2022, **80,1 % des logements** étaient des appartements. Une société de dératisation y traite aussi bien des **entrepôts alimentaires** que des **caves** et des **jardins**.',
      'Nous intervenons à Chevilly-Larue depuis notre base de **Saint-Maurice**, 7 jours sur 7, pour les **particuliers** comme pour les **professionnels de l’alimentaire**.',
      'Nos autres pages pour la ville : [souris à Chevilly-Larue](/souris/chevilly-larue), [punaises de lit à Chevilly-Larue](/punaises-de-lit/chevilly-larue) et [fourmis à Chevilly-Larue](/fourmis/chevilly-larue).',
    ],
  },
  chiffres: [
    { valeur: '19 826', texte: 'habitants (population légale Insee), code postal 94550.', source: CHEVILLY_INSEE },
    { valeur: '1er', texte: 'marché de produits agricoles au monde : le MIN de Rungis, situé pour moitié à Chevilly-Larue.', source: MIN_RUNGIS_WIKI },
    { valeur: '80,1 %', texte: 'des logements sont des appartements (2022), sur 9 188 logements.', source: CHEVILLY_WIKI },
    { valeur: '5', texte: 'stations du tramway T7 dans la commune, et le métro 14 depuis 2024.', source: CHEVILLY_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Chevilly-Larue : la ville secteur par secteur',
    intro: 'Chevilly-Larue se découpe en **trois grands secteurs** : **Larue** à l’ouest, le **marché de Rungis** au centre et **Chevilly** à l’est. Voici ce que chacun implique pour une dératisation.',
    zones: [
      {
        nom: 'Le marché de Rungis et les entreprises alimentaires',
        texte: 'Au centre, la zone du **MIN** concentre entrepôts, quais de chargement, chambres froides et bennes de déchets alimentaires. C’est la principale concentration d’entreprises de la commune. Pour un grossiste, un transporteur ou un restaurant : **postes numérotés** autour des bâtiments, **plan de localisation**, **registre** des passages et **attestation** pour vos audits d’hygiène.',
      },
      {
        nom: 'Chevilly, le village et la RN7',
        texte: 'À l’est, autour de l’**église Sainte-Colombe**, ancien centre du village, et jusqu’à la **RN7**, maisons anciennes, commerces et immeubles se partagent **caves**, **cours** et **réseaux**. Un rongeur repéré dans une boutique vient souvent d’un sous-sol voisin.',
        photo: { src: '/villes/chevilly-larue/eglise-sainte-colombe.jpg', alt: 'L’église Sainte-Colombe de Chevilly-Larue', legende: 'L’église Sainte-Colombe, autrefois centre du village : autour, maisons anciennes et commerces.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + '%C3%89glise_Ste_Colombe_Chevilly_Larue_16.jpg' },
      },
      {
        nom: 'Les Sorbiers, la Saussaie et les résidences',
        texte: 'Construites pendant les Trente Glorieuses, notamment pour les employés des PTT, ces **cités** ont été réhabilitées ou reconstruites. Caves, vide-ordures et locaux à poubelles restent communs à de nombreux logements : le traitement se fait avec le **bailleur**, sur les **parties communes**.',
        photo: { src: '/villes/chevilly-larue/metro-14-tramway-t7.jpg', alt: 'La station Chevilly-Larue du métro 14, en correspondance avec le tramway T7', legende: 'La station Chevilly-Larue (métro 14 et tramway T7), ouverte en 2024 : un quartier en pleine transformation.', credit: 'Idris2000', licence: 'CC BY 4.0', page: W + 'Chevilly-Larue_M%C3%A9tro_14_Tramway_T7_2024_07.jpg' },
      },
      {
        nom: 'Larue, Bretagne et les pavillons',
        texte: 'À l’ouest, **Larue** et le quartier **Bretagne** sont faits de **pavillons** avec jardin. Composteurs, abris, garages : nous traitons les **terriers** et fermons l’accès au **vide sanitaire**. Voir [rat dans le compost](/blog/rat-compost) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
        photo: { src: '/villes/chevilly-larue/chapelle-des-spiritains.jpg', alt: 'La chapelle des Spiritains à Chevilly-Larue', legende: 'La chapelle des Spiritains, héritage du séminaire installé à Chevilly : la ville garde de grands jardins et des pavillons.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Chapelle_Spiritains_Chevilly_Larue_5.jpg' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Chevilly-Larue (94550) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Logement : cuisine, gaines, plinthes. Cité : caves, vide-ordures, local à poubelles. Entrepôt alimentaire : quais, stockage, bennes et points d’entrée.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés et numérotés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide, près des denrées.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations, contrat de suivi pour les professionnels. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Chevilly-Larue (94550) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rongeurs dans un entrepôt ou une chambre froide', x: 'Emballages rongés, crottes près des palettes : postes numérotés à l’extérieur, pièges à l’intérieur près des denrées, registre et attestation. Voir [nos services aux professionnels](/professionnels).' },
      { t: 'Un rongeur dans un restaurant ou une cuisine', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
      { t: 'Des rats dans la cave ou au vide-ordures d’une cité', x: 'Le signe d’une colonie dans les parties communes. Prévenez le bailleur par écrit : le traitement doit couvrir tout le sous-sol.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Chevilly-Larue](/souris/chevilly-larue) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des terriers dans le jardin d’un pavillon', x: 'À Larue et à Bretagne : voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Chevilly-Larue',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Un pavillon se traite à la charge de son propriétaire, une résidence à celle du **bailleur** ou du **syndic**, et un entrepôt à celle de l’**exploitant**.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique ou dans un parc, alertez la **mairie de Chevilly-Larue**.',
      'Nous intervenons aussi tout autour : [Rungis](/deratisation/rungis), [Thiais](/deratisation/thiais), [Fresnes](/deratisation/fresnes), [L’Haÿ-les-Roses](/deratisation/l-hay-les-roses), [Villejuif](/deratisation/villejuif) et [Vitry-sur-Seine](/deratisation/vitry-sur-seine).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Chevilly-Larue ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Entrepôt, restaurant, pavillon ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Intervenez-vous pour les entreprises du marché de Rungis ?', a: 'Oui : postes numérotés, plan de localisation, registre des passages et attestation pour vos audits, avec contrat de suivi si besoin (voir [nos services aux professionnels](/professionnels)).' },
    { q: 'Le marché de Rungis attire-t-il les rats vers les habitations ?', a: 'Les zones où l’on stocke de la nourriture attirent les rongeurs ([mode de vie du rat](/blog/rat-mode-de-vie)). Les logements proches doivent garder poubelles et caves bien fermées et signaler toute trace rapidement.' },
    { q: 'J’habite aux Sorbiers ou à la Saussaie : qui paie la dératisation ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Peut-on dératiser sans poison près des denrées alimentaires ?', a: 'Oui : pièges mécaniques et [piège Ekomille sans raticide](/services/deratisation-ecologique) à l’intérieur, appâts uniquement en postes verrouillés à l’extérieur.' },
    { q: 'J’ai des trous dans mon jardin : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Chevilly-Larue ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [CHEVILLY_INSEE, CHEVILLY_WIKI, MIN_RUNGIS_WIKI, RSD_94, SPF_LEPTO],
}

// ── Fontenay-sous-Bois (23/11/2026) ──
const FONTENAY_WIKI: Source = { label: 'Wikipédia, Fontenay-sous-Bois (sources, carrières, quartiers, logement, Val de Fontenay)', url: 'https://fr.wikipedia.org/wiki/Fontenay-sous-Bois' }
const FONTENAY_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94033, Fontenay-sous-Bois', url: 'https://geo.api.gouv.fr/communes?code=94033&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['fontenay-sous-bois'] = {
  maj: '2026-11-23',
  accroche: 'Une ville de sources, d’anciennes carrières et d’anciens marais, entre le bois de Vincennes et le Val de Fontenay : à Fontenay-sous-Bois, le sous-sol est humide et les rongeurs le savent.',
  societe: {
    titre: 'Société de dératisation à Fontenay-sous-Bois (94120) : la ville des fontaines',
    paras: [
      'Fontenay-sous-Bois compte **53 757 habitants** sur **5,56 km²**, entre 44 et 111 mètres d’altitude, à la pointe du plateau de Belleville. La ville doit son nom à ses **nombreuses sources**, nées des couches d’**argile** à flanc de coteau. Le sous-sol a aussi été creusé par des **carrières de gypse et de calcaire**, exploitées jusqu’en 1928, et le nord-est était autrefois un **marais**. Humidité, galeries, réseaux : un terrain favorable au **surmulot**.',
      'La ville est très contrastée : des **maisons** qui bordent le **bois de Vincennes**, le **grand ensemble des Larris**, véritable « ville verticale », et le **Val de Fontenay**, premier pôle tertiaire de l’Est parisien. En 2021, **75,7 % des logements** étaient des appartements et **23,5 %** des maisons. Une société de dératisation y traite autant des **caves d’immeuble** que des **jardins** et des **bureaux**.',
      'Nous intervenons à Fontenay depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Fontenay-sous-Bois](/souris/fontenay-sous-bois), [cafards à Fontenay-sous-Bois](/cafards/fontenay-sous-bois), [punaises de lit à Fontenay-sous-Bois](/punaises-de-lit/fontenay-sous-bois) et [puces à Fontenay-sous-Bois](/puces/fontenay-sous-bois).',
    ],
  },
  chiffres: [
    { valeur: '53 757', texte: 'habitants (population légale Insee), code postal 94120.', source: FONTENAY_INSEE },
    { valeur: '1928', texte: 'fin de l’exploitation des carrières de gypse et de calcaire sous la commune.', source: FONTENAY_WIKI },
    { valeur: '160 ha', texte: 'pour le pôle d’affaires du Val de Fontenay, avec bureaux et centre commercial régional.', source: FONTENAY_WIKI },
    { valeur: '75,7 %', texte: 'des logements sont des appartements et 23,5 % des maisons (2021).', source: FONTENAY_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Fontenay-sous-Bois : la ville secteur par secteur',
    intro: 'Fontenay juxtapose des quartiers très différents : **Fontenay-Bois**, le **Plateau**, le **village**, les **Rigollots**, les **Larris** et le **Val de Fontenay**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Le village, les sources et les fontaines',
        texte: 'Autour de la **mairie**, de l’église et du **marché Moreau-David**, le vieux Fontenay garde ses **fontaines**, ses caves anciennes et ses commerces de bouche. Sources, réseaux d’eau et sous-sols humides : nous contrôlons **regards**, **caves** et **soupiraux**, et intervenons dans les commerces **hors des heures d’ouverture**.',
        photo: { src: '/villes/fontenay-sous-bois/fontaine-des-rosettes.jpg', alt: 'La fontaine des Rosettes à Fontenay-sous-Bois', legende: 'La fontaine des Rosettes : Fontenay doit son nom à ses sources, et son sous-sol reste humide.', credit: 'Bruno Barral', licence: 'CC BY-SA 3.0', page: W + 'Fontaine_des_Rosettes_Fontenay.jpg' },
      },
      {
        nom: 'Le marché et les commerces de bouche',
        texte: 'Un marché, ce sont des déchets alimentaires chaque semaine, des cagettes et des bennes. Les commerces voisins doivent garder leurs **réserves** et **locaux à déchets** fermés. Pour un professionnel : postes **numérotés**, **registre** et **attestation** pour les contrôles d’hygiène.',
        photo: { src: '/villes/fontenay-sous-bois/marche-moreau-david.jpg', alt: 'Le marché Moreau-David à Fontenay-sous-Bois', legende: 'Le marché Moreau-David : autour des marchés, les déchets alimentaires attirent les rongeurs.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'March%C3%A9_Moreau_David_Fontenay_Bois_1.jpg' },
      },
      {
        nom: 'Les Larris et les grandes résidences',
        texte: 'Le **grand ensemble des Larris**, quartier prioritaire, partage **caves**, **vide-ordures** et **locaux à poubelles** entre des centaines de logements. Le traitement se fait avec le **bailleur**, sur toutes les **parties communes**, puis nous rebouchons les passages vers les appartements.',
        photo: { src: '/villes/fontenay-sous-bois/quartier-des-larris.jpg', alt: 'Vue sur le quartier des Larris à Fontenay-sous-Bois', legende: 'Le quartier des Larris vu depuis l’avenue Victor-Hugo : tours et pavillons se côtoient.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Vue_Quartier_Larris_depuis_Avenue_Victor_Hugo_Fontenay_Bois_4.jpg' },
      },
      {
        nom: 'Fontenay-Bois et la lisière du bois de Vincennes',
        texte: 'Au sud-ouest, les **maisons** et les villas qui jouxtent le **bois de Vincennes** ont jardin, cave et sous-sol. Les rongeurs du bois s’approchent des composteurs et des abris : nous traitons les **terriers** et fermons les accès. Voir [rat dans le compost](/blog/rat-compost).',
      },
      {
        nom: 'Le Val de Fontenay et les Alouettes',
        texte: 'À l’est, le **Val de Fontenay** concentre bureaux, centre commercial et gares des **RER A et E**. Pour un immeuble de bureaux ou un restaurant d’entreprise : dispositif **sécurisé**, **registre** et **attestation**. Voir [nos services aux professionnels](/professionnels).',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Fontenay-sous-Bois (94120) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Immeuble : caves, vide-ordures, local à poubelles. Maison : jardin, abri, sous-sol, vide sanitaire. Commerce ou bureaux : réserves, cuisines, locaux techniques.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Fontenay-sous-Bois (94120) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans une cave humide', x: 'Sur un sous-sol de sources et d’argile, les caves restent humides et attirent le surmulot. Nous traitons, rebouchons et conseillons sur l’aération et le rangement.' },
      { t: 'Des rats dans les parties communes aux Larris', x: 'Le signe d’une colonie au sous-sol. Prévenez le bailleur par écrit : le traitement doit couvrir tout l’immeuble.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Fontenay-sous-Bois](/souris/fontenay-sous-bois) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des terriers dans un jardin près du bois', x: 'Voir [le mode de vie du rat](/blog/rat-mode-de-vie), [la reproduction des rats](/blog/reproduction-des-rats) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).' },
      { t: 'Un rongeur dans un restaurant ou un commerce du marché', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles) et [cafards à Fontenay-sous-Bois](/cafards/fontenay-sous-bois).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Fontenay-sous-Bois',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Une maison se traite à la charge de son propriétaire, une résidence à celle du **bailleur** ou du **syndic**.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique ou dans un square, alertez la **mairie de Fontenay-sous-Bois** ; pour le bois de Vincennes, la **Ville de Paris**.',
      'Nous intervenons aussi tout autour : [Vincennes](/deratisation/vincennes), [Montreuil](/deratisation/montreuil), [Nogent-sur-Marne](/deratisation/nogent-sur-marne), [Le Perreux-sur-Marne](/deratisation/le-perreux-sur-marne), [Saint-Mandé](/deratisation/saint-mande) et [Paris 12e](/deratisation/paris-12).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Fontenay-sous-Bois ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Maison, commerce, bureaux ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Pourquoi des rats dans les caves à Fontenay ?', a: 'Le sous-sol de Fontenay est riche en sources, en argile et en anciennes carrières : les caves restent humides, ce que le surmulot apprécie ([mode de vie du rat](/blog/rat-mode-de-vie)).' },
    { q: 'J’habite aux Larris : qui paie la dératisation ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Intervenez-vous dans les bureaux du Val de Fontenay ?', a: 'Oui : dispositif sécurisé, postes numérotés, registre et attestation, avec contrat de suivi si besoin (voir [nos services aux professionnels](/professionnels)).' },
    { q: 'J’ai des trous dans mon jardin : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Fontenay-sous-Bois ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [FONTENAY_INSEE, FONTENAY_WIKI, RSD_94, SPF_LEPTO],
}

// ── Fresnes (23/11/2026) ──
const FRESNES_WIKI: Source = { label: 'Wikipédia, Fresnes (Bièvre, A6 et A86, grands ensembles, logement, centre pénitentiaire)', url: 'https://fr.wikipedia.org/wiki/Fresnes_(Val-de-Marne)' }
const FRESNES_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94034, Fresnes', url: 'https://geo.api.gouv.fr/communes?code=94034&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['fresnes'] = {
  maj: '2026-11-23',
  accroche: 'À Fresnes, la mairie a pris en 2026 un arrêté pour obliger chacun à lutter contre les rongeurs. Bièvre, autoroutes, grands ensembles et pavillons : voici comment nous vous aidons à le respecter.',
  societe: {
    titre: 'Société de dératisation à Fresnes (94260) : une ville qui a pris les rats au sérieux',
    paras: [
      'Fresnes compte **29 528 habitants** sur **3,55 km²**. En 2026, la Ville a pris l’**arrêté n° 2026-213** portant **obligation de lutte contre la prolifération des rongeurs**, qui rappelle l’article 119 du règlement sanitaire du Val-de-Marne : propriétaires, syndics, bailleurs et occupants doivent agir. Une société de dératisation vous permet d’être en règle, avec une **attestation** à la clé.',
      'La ville est traversée par la **Bièvre**, remise à l’air libre sur 200 mètres depuis 2003 dans le **parc des Prés de la Bièvre**, et par le **ru de Rungis**. Elle est aussi découpée par l’**A6** et l’**A86** : talus, ouvrages et terrains délaissés le long des voies sont autant de couloirs pour le **surmulot**.',
      'Côté habitat, Fresnes est surtout une ville d’**immeubles** : **85,4 % d’appartements** en 2019, avec de grands ensembles construits entre 1955 et 1967 (Tourvoie, Val de Bièvre, La Butte Fleurie, les Thibaudes…). Nous intervenons à Fresnes depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Fresnes](/souris/fresnes), [punaises de lit à Fresnes](/punaises-de-lit/fresnes) et [fourmis à Fresnes](/fourmis/fresnes).',
    ],
  },
  chiffres: [
    { valeur: '29 528', texte: 'habitants (population légale Insee), code postal 94260.', source: FRESNES_INSEE },
    { valeur: 'n° 2026-213', texte: 'arrêté de la Ville de Fresnes portant obligation de lutte contre la prolifération des rongeurs.', source: RSD_94 },
    { valeur: '200 m', texte: 'de Bièvre remise à l’air libre depuis 2003, dans le parc des Prés de la Bièvre.', source: FRESNES_WIKI },
    { valeur: '85,4 %', texte: 'des logements sont des appartements (2019), sur 12 004 logements.', source: FRESNES_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Fresnes : la ville secteur par secteur',
    intro: 'Les autoroutes **A6** et **A86** partagent Fresnes en plusieurs secteurs : la **plaine de Montjean** et les zones d’activités à l’est, l’**éco-quartier de la Cerisaie**, et à l’ouest les **quartiers résidentiels** nord et sud, autour du centre pénitentiaire. Voici ce que chacun implique pour une dératisation.',
    zones: [
      {
        nom: 'La Bièvre et le parc des Prés de la Bièvre',
        texte: 'Le long de la **Bièvre** et du **ru de Rungis**, l’eau, les berges et la végétation offrent au rat un refuge tout trouvé. Les immeubles et maisons proches doivent surveiller **regards**, **caves** et **soupiraux**, surtout après de fortes pluies.',
        photo: { src: '/villes/fresnes/bievre-pres-de-la-bievre.jpg', alt: 'La Bièvre dans le parc des Prés de la Bièvre à Fresnes', legende: 'La Bièvre à l’air libre dans le parc des Prés de la Bièvre : eau et berges boisées en pleine ville.', credit: 'VVVCFFrance', licence: 'CC BY-SA 4.0', page: W + 'Fresnes_Bi%C3%A8vre_dans_le_parc_des_pr%C3%A9s_de_la_Bi%C3%A8vre.jpg' },
      },
      {
        nom: 'Les grands ensembles du centre et du sud',
        texte: 'Le **Clos La Garenne**, le **Val de Bièvre**, les **Thibaudes** et les autres résidences partagent **caves**, **vide-ordures** et **locaux à poubelles** entre des centaines de logements. Le traitement se fait avec le **bailleur**, sur toutes les **parties communes**, puis nous rebouchons les passages vers les logements.',
      },
      {
        nom: 'Les autoroutes A6 et A86 et les zones d’activités',
        texte: 'Talus, bassins, délaissés et clôtures le long des **autoroutes** servent de couloirs aux rongeurs, jusqu’aux **parcs d’activités** Médicis et de la Cerisaie. Pour une entreprise : postes **numérotés**, **plan de localisation**, **registre** et **attestation**.',
        photo: { src: '/villes/fresnes/autoroute-a6.jpg', alt: 'L’autoroute A6 vue depuis un pont de Fresnes', legende: 'L’A6 vue depuis un pont de Fresnes : talus et ouvrages forment des couloirs pour les rongeurs.', credit: 'Lionel Allorge', licence: 'CC BY-SA 3.0', page: W + 'Highway_A6_France_2011_03.jpg' },
      },
      {
        nom: 'Le centre ancien, les parcs et les pavillons',
        texte: 'Autour de l’église Saint-Éloi, de la **ferme de Cottinville** (aujourd’hui écomusée) et du **parc André-Villette**, maisons anciennes et pavillons ont jardins, caves et abris. Nous traitons les **terriers** et fermons les accès. Voir [rat dans le compost](/blog/rat-compost) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
        photo: { src: '/villes/fresnes/parc-andre-villette.jpg', alt: 'Le parc André-Villette à Fresnes', legende: 'Le parc André-Villette, au centre : parcs et jardins attirent aussi les rongeurs.', credit: 'Lionel Allorge', licence: 'CC BY-SA 3.0', page: W + 'Fresnes_Parc_Andre_Villette_01.jpg' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Fresnes (94260) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Immeuble : caves, vide-ordures, local à poubelles. Maison : jardin, abri, vide sanitaire. Entreprise : quais, stockage, locaux techniques.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage, suivi et attestation', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations, attestation remise pour prouver que vous avez agi. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Fresnes (94260) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Un propriétaire qui doit se mettre en règle', x: 'Après un signalement ou un courrier de la mairie : nous traitons, rebouchons et remettons une **attestation d’intervention** qui prouve que vous avez agi, comme le demande l’arrêté.' },
      { t: 'Des rats dans la cave ou au vide-ordures', x: 'Le signe d’une colonie dans les parties communes. Prévenez le bailleur ou le syndic par écrit : le traitement doit couvrir tout le sous-sol.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Fresnes](/souris/fresnes) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des terriers dans un jardin', x: 'Voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats), qui explique pourquoi il ne faut pas attendre.' },
      { t: 'Un rongeur dans un commerce ou une entreprise', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles) et [nos services aux professionnels](/professionnels).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Fresnes',
    paras: [
      'À Fresnes, l’**arrêté municipal n° 2026-213** rappelle l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) : la lutte contre les rongeurs incombe aux **propriétaires**, **syndics**, **bailleurs**, **gestionnaires** et **occupants**. Une maison se traite à la charge de son propriétaire, les parties communes d’un immeuble à celle du **syndic** ou du **bailleur**.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique, dans un parc ou le long de la Bièvre, alertez la **mairie de Fresnes**.',
      'Nous intervenons aussi tout autour : [Antony](/deratisation/antony), [L’Haÿ-les-Roses](/deratisation/l-hay-les-roses), [Chevilly-Larue](/deratisation/chevilly-larue), [Rungis](/deratisation/rungis) et [Wissous](/deratisation/wissous).',
    ],
    contact: { label: 'Arrêté de la Ville de Fresnes n° 2026-213 portant obligation de lutte contre la prolifération des rongeurs.', lien: { href: 'https://www.fresnes94.fr/app/uploads/1/2026/07/2026-213-arrete-portant-obligation-de-lutte-contre-proliferation-rongeurs-fresnes.pdf', label: 'Lire l’arrêté (PDF)' } },
  },
  faq: [
    { q: 'Combien coûte une dératisation à Fresnes ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Maison, commerce, entreprise ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Que dit l’arrêté de Fresnes sur les rongeurs ?', a: 'L’arrêté municipal n° 2026-213 rappelle que la lutte contre les rongeurs est une obligation des propriétaires, syndics, bailleurs, gestionnaires et occupants, en application de l’article 119 du règlement sanitaire du Val-de-Marne ([nos chiffres et sources](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)).' },
    { q: 'Me remettez-vous une attestation ?', a: 'Oui, sur simple demande : une attestation d’intervention qui prouve que vous avez agi, à présenter à la mairie, à un syndic ou à un assureur.' },
    { q: 'La Bièvre attire-t-elle les rats à Fresnes ?', a: 'L’eau et les berges sont favorables au surmulot ([mode de vie du rat](/blog/rat-mode-de-vie)). Les logements proches de la Bièvre et du ru de Rungis doivent surveiller regards, caves et soupiraux.' },
    { q: 'J’habite un grand ensemble : qui paie la dératisation ?', a: 'Les parties communes (caves, vide-ordures, local à poubelles) relèvent du bailleur ou du syndic. Signalez-lui le problème par écrit, avec photos et dates.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Fresnes ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [FRESNES_INSEE, FRESNES_WIKI, RSD_94, SPF_LEPTO],
}

// ── Gentilly (23/11/2026) ──
const GENTILLY_WIKI: Source = { label: 'Wikipédia, Gentilly (Bièvre couverte, quartiers, logement, autoroutes, transports)', url: 'https://fr.wikipedia.org/wiki/Gentilly_(Val-de-Marne)' }
const GENTILLY_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94037, Gentilly', url: 'https://geo.api.gouv.fr/communes?code=94037&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['gentilly'] = {
  maj: '2026-11-23',
  accroche: 'Collée à Paris, coupée par le périphérique et l’A6, posée sur une Bièvre enterrée : à Gentilly, les rongeurs circulent sous la ville. Nous traitons là où ils passent.',
  societe: {
    titre: 'Société de dératisation à Gentilly (94250) : une ville bâtie sur la Bièvre',
    paras: [
      'Gentilly compte **19 963 habitants** sur seulement **1,18 km²**, juste au sud de Paris, entre le **boulevard périphérique** et les branches **A6A et A6B** de l’autoroute. La **Bièvre** traverse la ville, mais son cours est **couvert sur toute la commune** ; seul un tronçon de **600 mètres** a été rouvert en 2022 avec Arcueil. Une rivière enterrée, ce sont des **collecteurs** et des **canalisations** : le chemin préféré du **surmulot**.',
      'Gentilly est une ville d’**immeubles** : **90,6 % d’appartements** en 2020, avec de grandes cités comme le **Chaperon-Vert**, **Gabriel-Péri**, **Frileuse** ou **Reine-Blanche**. Seuls le **Plateau** et le **Val-de-Bièvre** gardent un caractère **pavillonnaire**. Pour une société de dératisation, ce sont avant tout des **parties communes** à traiter.',
      'Nous intervenons à Gentilly depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Gentilly](/souris/gentilly), [punaises de lit à Gentilly](/punaises-de-lit/gentilly) et [fourmis à Gentilly](/fourmis/gentilly).',
    ],
  },
  chiffres: [
    { valeur: '19 963', texte: 'habitants (population légale Insee), code postal 94250.', source: GENTILLY_INSEE },
    { valeur: '1,18 km²', texte: 'de superficie : près de 17 000 habitants au km² (calcul sur les chiffres Insee).', source: GENTILLY_INSEE },
    { valeur: '600 m', texte: 'de Bièvre rouverts en 2022 avec Arcueil ; ailleurs, la rivière reste couverte.', source: GENTILLY_WIKI },
    { valeur: '90,6 %', texte: 'des logements sont des appartements (2020), sur 9 835 logements.', source: GENTILLY_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Gentilly : la ville quartier par quartier',
    intro: 'Gentilly se partage entre le **Chaperon-Vert**, la cité **Gabriel-Péri**, le quartier **Victor-Hugo**, la cité **Frileuse**, la cité **Reine-Blanche**, le **centre-ville**, le **Plateau** et le **Val-de-Bièvre**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Le cours enterré de la Bièvre',
        texte: 'Sous les rues et les parcs, comme le **parc Picasso**, la Bièvre coule dans des ouvrages couverts. Les rongeurs y circulent et remontent par les **regards**, les **caves** et les **parkings** des immeubles voisins. Nous traitons au plus près du point d’entrée, puis nous rebouchons.',
        photo: { src: '/villes/gentilly/allee-rene-cassin-bievre.jpg', alt: 'L’allée René-Cassin, sur le cours de la Bièvre, à Gentilly', legende: 'L’allée René-Cassin suit le cours de la Bièvre, enterrée sous la ville.', credit: 'VVVCFFrance', licence: 'CC BY-SA 4.0', page: W + 'Gentilly_all%C3%A9e_Ren%C3%A9_Cassin_2.jpg' },
      },
      {
        nom: 'Les cités le long des autoroutes',
        texte: 'Le **Chaperon-Vert** (1 500 logements, partagé avec Arcueil), la cité **Gabriel-Péri** et la cité **Reine-Blanche** longent l’**A6A** et l’**A6B**. Talus, ouvrages et délaissés servent de couloirs aux rongeurs vers les **caves** et **locaux à poubelles**. Le traitement se fait avec le **bailleur**, sur toutes les **parties communes**.',
        photo: { src: '/villes/gentilly/a6a-passerelle-chaperon-vert.jpg', alt: 'L’autoroute A6a vue depuis la passerelle du Chaperon-Vert à Gentilly', legende: 'L’A6a vue depuis la passerelle du Chaperon-Vert : talus et ouvrages bordent les cités.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Autoroute_A6a_vue_depuis_Passerelle_Chaperon_Vert_-_Gentilly_(FR94)_-_2021-11-06_-_2.jpg' },
      },
      {
        nom: 'Le centre-ville, Frileuse et la gare',
        texte: 'Autour de la **mairie**, du marché de la cité **Frileuse** (les « 4 tours ») et de la gare **RER B**, commerces, restaurants et immeubles partagent **caves** et **locaux à déchets**. Nous intervenons dans les commerces **hors des heures d’ouverture**, avec **attestation**.',
        photo: { src: '/villes/gentilly/gare-rer-b-gentilly.jpg', alt: 'La gare RER B de Gentilly', legende: 'La gare de Gentilly (RER B) : voies ferrées et talus au cœur de la ville.', credit: 'ArséniureDeGallium', licence: 'CC BY-SA 2.5', page: W + 'RER_B-Gentilly1.jpg' },
      },
      {
        nom: 'Le Plateau et le Val-de-Bièvre',
        texte: 'Les deux quartiers **pavillonnaires** de la ville : le Plateau, vers Montrouge, et le Val-de-Bièvre, où se trouve aussi le siège de Sanofi. Jardins, abris et vide sanitaires : nous traitons les **terriers** et fermons les accès. Voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Gentilly (94250) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'L’enquête dans l’immeuble', x: 'Cuisine, gaines, plinthes chez vous ; caves, vide-ordures, parkings et local à poubelles dans les parties communes.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Gentilly (94250) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans la cave ou au vide-ordures', x: 'Le signe d’une colonie dans les parties communes. Prévenez le bailleur ou le syndic par écrit : le traitement doit couvrir tout le sous-sol.' },
      { t: 'Un rat qui sort des toilettes', x: 'Sur une rivière canalisée, le réseau d’assainissement est un chemin direct : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes).' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Gentilly](/souris/gentilly) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des bruits dans les murs ou le plafond', x: 'Voir [rat dans les murs et cloisons](/blog/rat-dans-les-murs-cloisons) et [rats dans les combles](/blog/rats-dans-les-combles).' },
      { t: 'Un rongeur dans un commerce', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Gentilly',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Dans les cités de Gentilly, c’est le **bailleur** qui organise la dératisation des parties communes ; dans une copropriété, le **syndic**.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique ou dans un parc, alertez la **mairie de Gentilly**.',
      'Nous intervenons aussi tout autour : [Arcueil](/deratisation/arcueil), [Le Kremlin-Bicêtre](/deratisation/le-kremlin-bicetre), [Villejuif](/deratisation/villejuif), [Montrouge](/deratisation/montrouge), [Paris 13e](/deratisation/paris-13) et [Paris 14e](/deratisation/paris-14).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Gentilly ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Commerce, pavillon ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Pourquoi des rats à Gentilly alors que la Bièvre ne se voit pas ?', a: 'La Bièvre coule sous la ville dans des ouvrages couverts, reliés aux réseaux d’assainissement. Le surmulot y circule et remonte par les regards et les caves ([mode de vie du rat](/blog/rat-mode-de-vie)).' },
    { q: 'J’habite au Chaperon-Vert ou à Reine-Blanche : qui paie la dératisation ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Un rat est sorti de mes toilettes : que faire ?', a: 'Fermez l’abattant, mettez un poids dessus et appelez-nous (voir [rat dans les toilettes](/blog/rat-dans-les-toilettes)). Nous traitons la colonie et vous conseillons sur la pose d’un clapet anti-rongeurs par un plombier.' },
    { q: 'Intervenez-vous dans les commerces de Gentilly ?', a: 'Oui, hors des heures d’ouverture, avec postes numérotés, registre et attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Gentilly ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [GENTILLY_INSEE, GENTILLY_WIKI, RSD_94, SPF_LEPTO],
}

// ── Ivry-sur-Seine (23/11/2026) ──
const IVRY_WIKI: Source = { label: 'Wikipédia, Ivry-sur-Seine (quartiers, Ivry Confluences, carrières, logement, Syctom)', url: 'https://fr.wikipedia.org/wiki/Ivry-sur-Seine' }
const IVRY_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94041, Ivry-sur-Seine', url: 'https://geo.api.gouv.fr/communes?code=94041&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['ivry-sur-seine'] = {
  maj: '2026-11-23',
  accroche: 'Quais de Seine, anciennes carrières, grands chantiers à Ivry Confluences, cités et centre brutaliste : à Ivry-sur-Seine, les rongeurs ont mille chemins. Nous connaissons la ville, nous y avons déjà travaillé.',
  societe: {
    titre: 'Société de dératisation à Ivry-sur-Seine (94200) : une ville au bord de la Seine en pleine transformation',
    paras: [
      'Ivry-sur-Seine compte **65 064 habitants** sur **6,11 km²**, entre le **boulevard périphérique** au nord et la **Seine** à l’est, jusqu’à la confluence avec la Marne. Son sous-sol a été creusé de **carrières de calcaire grossier**, exploitées jusqu’au début du XXe siècle, et ses bords de Seine ont accueilli usines, entrepôts et réseaux. Eau, sous-sol et friches : un terrain que le **surmulot** connaît bien.',
      'Depuis 2008, le grand projet **Ivry Confluences** transforme l’ancien quartier industriel d’**Ivry-Port** : démolitions, terrassements et nouveaux immeubles. Les chantiers **dérangent les colonies** de rongeurs, qui se déplacent vers les bâtiments voisins. La ville compte **87,9 % d’appartements** et **plus de 8 800 logements HLM**.',
      'Nous connaissons Ivry : nous y avons traité une personne âgée contre les **punaises de lit**, jusque dans son **lit médicalisé**, un chantier filmé : [voir l’intervention à Ivry-sur-Seine](/blog/punaises-de-lit-ivry-sur-seine-personne-agee#video). Notre base de **Saint-Maurice** est à quelques minutes, de l’autre côté de la Seine.',
      'Nos autres pages pour la ville : [souris à Ivry-sur-Seine](/souris/ivry-sur-seine), [cafards à Ivry-sur-Seine](/cafards/ivry-sur-seine), [punaises de lit à Ivry-sur-Seine](/punaises-de-lit/ivry-sur-seine) et [puces à Ivry-sur-Seine](/puces/ivry-sur-seine).',
    ],
  },
  chiffres: [
    { valeur: '65 064', texte: 'habitants (population légale Insee), code postal 94200.', source: IVRY_INSEE },
    { valeur: '87,9 %', texte: 'des logements sont des appartements, sur 31 595 logements.', source: IVRY_WIKI },
    { valeur: '8 813', texte: 'logements HLM en 2019, soit 30,6 % des résidences principales.', source: IVRY_WIKI },
    { valeur: '2008', texte: 'lancement d’Ivry Confluences, grand chantier de 15 à 20 ans sur l’ancien Ivry-Port.', source: IVRY_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Ivry-sur-Seine : la ville quartier par quartier',
    intro: 'Ivry se partage entre le **Centre-ville**, **Ivry-Port**, **Louis-Bertrand-Mirabeau-Sémard**, **Marat-Parmentier**, **Monmousseau-Vérollot** et le **Petit-Ivry**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Ivry-Port, Ivry Confluences et les quais de Seine',
        texte: 'Entre les voies ferrées et la Seine, l’ancien quartier industriel se reconstruit. Les **chantiers** et les **démolitions** délogent les rats, qui cherchent refuge dans les **caves**, **parkings** et **locaux à poubelles** voisins. Les résidences neuves comme anciennes doivent fermer leurs accès dès les premières traces.',
        photo: { src: '/villes/ivry-sur-seine/ivry-confluences.jpg', alt: 'Le quartier Ivry Confluences en chantier, en 2022', legende: 'Ivry Confluences en 2022 : chantiers et terrassements délogent les colonies de rongeurs.', credit: 'Guillaume70', licence: 'CC BY-SA 4.0', page: W + 'Ivry_Confluences_Fabien_Gambetta.jpg' },
      },
      {
        nom: 'Le Centre-ville et les immeubles de Renaudie',
        texte: 'Autour de la **mairie** et du centre commercial **Jeanne-Hachette**, les immeubles en étoile de Jean Renaudie et Renée Gailhoustet (années 1970) multiplient terrasses plantées, **parkings**, **coursives** et **locaux techniques**. Les rongeurs y trouvent abris et passages : nous traitons les **parties communes** avec le **bailleur** ou le **syndic**.',
        photo: { src: '/villes/ivry-sur-seine/centre-ville-renaudie.jpg', alt: 'La mairie d’Ivry-sur-Seine et les immeubles du centre-ville', legende: 'La mairie et le centre-ville d’Ivry : immeubles des années 1970, parkings et locaux techniques.', credit: 'H4stings', licence: 'CC BY-SA 4.0', page: W + 'Mairie_d%27Ivry_et_centre_ville.jpg' },
      },
      {
        nom: 'Le plateau et les anciennes carrières',
        texte: 'Sur le plateau, vers Villejuif et le Kremlin-Bicêtre, le sous-sol garde d’**anciennes carrières**, comme la cave-carrière Delacroix, découverte en 1983 avenue du Général-Leclerc. Maisons, petits immeubles et caves profondes : nous inspectons **soupiraux**, **regards** et **caves**, puis rebouchons après le traitement.',
      },
      {
        nom: 'Le parc des Cormailles et les espaces verts',
        texte: 'Le **parc des Cormailles** et les grands espaces verts de la ville attirent les rongeurs vers les immeubles qui les bordent, surtout près des **poubelles**. Les résidences riveraines doivent garder leurs **locaux à déchets** fermés.',
        photo: { src: '/villes/ivry-sur-seine/parc-des-cormailles.jpg', alt: 'Le parc départemental des Cormailles à Ivry-sur-Seine', legende: 'Le parc des Cormailles : les espaces verts en pleine ville attirent aussi les rongeurs.', credit: 'Pascal3012', licence: 'CC BY-SA 3.0', page: W + 'Parc_des_Cormailles1.JPG' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Ivry-sur-Seine (94200) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'L’enquête dans l’immeuble', x: 'Cuisine, gaines, plinthes chez vous ; caves, parkings, coursives et local à poubelles dans les parties communes ; chantier voisin si besoin.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Ivry-sur-Seine (94200) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats apparus après un chantier voisin', x: 'Quand un terrain est terrassé ou un bâtiment démoli, la colonie cherche un nouvel abri. Prévenez votre syndic ou bailleur dès les premières traces : un traitement rapide évite l’installation.' },
      { t: 'Des rats dans la cave ou le parking', x: 'Le signe d’une colonie dans les parties communes. Le traitement doit couvrir tout le sous-sol, puis les accès sont fermés.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Ivry-sur-Seine](/souris/ivry-sur-seine) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Un rat qui sort des toilettes', x: 'Au bord de la Seine, le réseau d’assainissement est un chemin direct : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes).' },
      { t: 'Un rongeur dans un commerce ou un restaurant', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles) et [cafards à Ivry-sur-Seine](/cafards/ivry-sur-seine).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Ivry-sur-Seine',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. À Ivry, les parties communes se traitent à la demande du **bailleur** ou du **syndic** ; un chantier relève de son **maître d’ouvrage**.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique, sur les quais ou dans un parc, alertez la **mairie d’Ivry-sur-Seine**.',
      'Nous intervenons aussi tout autour : [Vitry-sur-Seine](/deratisation/vitry-sur-seine), [Alfortville](/deratisation/alfortville), [Charenton-le-Pont](/deratisation/charenton-le-pont), [Le Kremlin-Bicêtre](/deratisation/le-kremlin-bicetre), [Villejuif](/deratisation/villejuif), [Maisons-Alfort](/deratisation/maisons-alfort) et [Paris 13e](/deratisation/paris-13).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Ivry-sur-Seine ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Commerce, résidence ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Les chantiers d’Ivry Confluences font-ils venir les rats ?', a: 'Les démolitions et terrassements délogent les colonies, qui cherchent refuge dans les bâtiments voisins. Fermez caves et locaux à poubelles, et faites traiter dès les premières traces ([mode de vie du rat](/blog/rat-mode-de-vie)).' },
    { q: 'Avez-vous déjà travaillé à Ivry-sur-Seine ?', a: 'Oui, notamment chez une personne âgée contre les punaises de lit, jusque dans son lit médicalisé : [l’intervention est filmée](/blog/punaises-de-lit-ivry-sur-seine-personne-agee#video).' },
    { q: 'Qui paie la dératisation d’une résidence HLM ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Un rat est sorti de mes toilettes : que faire ?', a: 'Fermez l’abattant, mettez un poids dessus et appelez-nous (voir [rat dans les toilettes](/blog/rat-dans-les-toilettes)). Nous traitons la colonie et vous conseillons sur la pose d’un clapet anti-rongeurs par un plombier.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Ivry-sur-Seine ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [IVRY_INSEE, IVRY_WIKI, RSD_94, SPF_LEPTO],
}

// ── Joinville-le-Pont (24/11/2026) ──
const JOINVILLE_WIKI: Source = { label: 'Wikipédia, Joinville-le-Pont (Marne, îles, canal de Saint-Maur, quartiers, logement)', url: 'https://fr.wikipedia.org/wiki/Joinville-le-Pont' }
const JOINVILLE_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94042, Joinville-le-Pont', url: 'https://geo.api.gouv.fr/communes?code=94042&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['joinville-le-pont'] = {
  maj: '2026-11-24',
  accroche: 'Une ville coupée en deux par la Marne, avec deux îles, un canal, un port de plaisance et des guinguettes : à Joinville-le-Pont, l’eau est partout, et le rat aussi. Nous sommes juste à côté, à Saint-Maurice.',
  societe: {
    titre: 'Société de dératisation à Joinville-le-Pont (94340) : une ville traversée par la Marne',
    paras: [
      'Joinville-le-Pont compte **20 525 habitants** sur **2,29 km²**. La **Marne** la traverse en son milieu et la sépare en deux : **Joinville-le-Haut** à l’ouest, **Joinville-le-Bas** à l’est. L’**île Fanac** occupe le lit de la rivière, l’**île des Saints-Pères** est bordée par le **canal de Saint-Maur**, et le **ru de Polangis**, creusé pour les rameurs, serpente dans le quartier du même nom. Berges, quais, port de plaisance et réseaux : tout ce que le **surmulot** recherche.',
      'Autrefois lieu de **guinguettes** et de maisons de week-end au bord de l’eau, Joinville compte aujourd’hui **77,5 % d’appartements** et **22,2 % de maisons** (2022). Restaurants des quais, résidences et pavillons de Polangis : une société de dératisation y traite autant les **commerces au bord de l’eau** que les **caves** et les **jardins**.',
      'Notre base est à **Saint-Maurice**, la commune voisine : nous sommes à Joinville en quelques minutes, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Joinville-le-Pont](/souris/joinville-le-pont), [cafards à Joinville-le-Pont](/cafards/joinville-le-pont), [punaises de lit à Joinville-le-Pont](/punaises-de-lit/joinville-le-pont) et [puces à Joinville-le-Pont](/puces/joinville-le-pont).',
    ],
  },
  chiffres: [
    { valeur: '20 525', texte: 'habitants (population légale Insee), code postal 94340.', source: JOINVILLE_INSEE },
    { valeur: '2 îles', texte: 'sur la commune : l’île Fanac et l’île des Saints-Pères, bordée par le canal de Saint-Maur.', source: JOINVILLE_WIKI },
    { valeur: '130', texte: 'pavillons et plusieurs restaurants des bords de Marne démolis en 1971 pour construire l’A4.', source: JOINVILLE_WIKI },
    { valeur: '77,5 %', texte: 'des logements sont des appartements et 22,2 % des maisons (2022), sur 10 047 logements.', source: JOINVILLE_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Joinville-le-Pont : la ville quartier par quartier',
    intro: 'La Marne sépare **Joinville-le-Haut** (centre, Vautier, Canadiens, résidence Espérance, quai de la Marne) de **Joinville-le-Bas** (Polangis et Palissy). Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les quais de Marne, le pont et l’île Fanac',
        texte: 'Autour du **pont de Joinville**, des quais et de l’**île Fanac**, l’eau, les berges et le **port de plaisance** offrent au rat un habitat idéal. Les immeubles et maisons des quais doivent surveiller **caves**, **soupiraux** et **regards**, surtout quand la Marne monte.',
        photo: { src: '/villes/joinville-le-pont/pont-de-joinville-marne.jpg', alt: 'Le pont de Joinville sur la Marne', legende: 'Le pont de Joinville sur la Marne : quais, berges et port de plaisance au cœur de la ville.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Pont_Joinville_-_Joinville-le-Pont_(FR94)_-_2021-02-07_-_1.jpg' },
      },
      {
        nom: 'Les guinguettes et les restaurants du bord de l’eau',
        texte: 'Les restaurants des bords de Marne, comme la célèbre guinguette **Chez Gégène**, combinent terrasses, cuisines, réserves et déchets alimentaires au plus près de la rivière. Pour un restaurateur : postes **numérotés**, **registre**, **attestation** et passages **hors service**.',
        photo: { src: '/villes/joinville-le-pont/guinguette-chez-gegene.jpg', alt: 'La guinguette Chez Gégène à Joinville-le-Pont', legende: 'Chez Gégène, guinguette des bords de Marne : un restaurant au bord de l’eau demande une protection permanente.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Restaurant_Chez_G%C3%A9g%C3%A8ne_-_Joinville-le-Pont_(FR94)_-_2021-02-07_-_2.jpg' },
      },
      {
        nom: 'Polangis, Palissy et le ru de Polangis',
        texte: 'À **Joinville-le-Bas**, le quartier de **Polangis**, traversé par son petit canal, et celui de **Palissy** comptent de nombreux **pavillons** avec jardin. Eau, haies, composteurs et abris attirent les rongeurs : nous traitons les **terriers** et fermons l’accès au **vide sanitaire**. Voir [rat dans le compost](/blog/rat-compost).',
        photo: { src: '/villes/joinville-le-pont/eglise-sainte-anne-polangis.jpg', alt: 'L’église Sainte-Anne de Polangis à Joinville-le-Pont', legende: 'L’église Sainte-Anne de Polangis : un quartier de pavillons traversé par le ru de Polangis.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + '%C3%89glise_Ste_Anne_Polangis_Joinville_Pont_1.jpg' },
      },
      {
        nom: 'Le centre, les Canadiens et la lisière du bois de Vincennes',
        texte: 'À **Joinville-le-Haut**, le centre, le quartier **Vautier** et celui des **Canadiens**, en bordure du **bois de Vincennes**, mêlent immeubles, commerces et espaces verts ; l’**A4** traverse aussi la commune. Les rongeurs du bois et des talus s’approchent des **locaux à poubelles** et des **parkings** : le traitement se fait avec le **syndic**.',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Joinville-le-Pont (94340) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le chemin de l’eau', x: 'Quais : regards, soupiraux, caves. Pavillons de Polangis : jardin, abri, vide sanitaire. Restaurants : réserves, cuisine, local à déchets.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Joinville-le-Pont (94340) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans la cave d’un immeuble des quais', x: 'Quand la Marne monte, les rats quittent les berges pour les sous-sols. Nous traitons, puis fermons soupiraux et regards pour que cela ne recommence pas.' },
      { t: 'Un rongeur dans un restaurant ou une guinguette', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles) et [cafards à Joinville-le-Pont](/cafards/joinville-le-pont).' },
      { t: 'Des terriers dans un jardin de Polangis', x: 'Voir [le mode de vie du rat](/blog/rat-mode-de-vie), [la reproduction des rats](/blog/reproduction-des-rats) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Joinville-le-Pont](/souris/joinville-le-pont) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Un rat qui sort des toilettes', x: 'Au bord de l’eau, le réseau d’assainissement est un chemin direct : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Joinville-le-Pont',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Une maison se traite à la charge de son propriétaire, les parties communes d’un immeuble à celle du **syndic** ou du **bailleur**, un restaurant à celle de l’**exploitant**.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur les quais ou la voie publique, alertez la **mairie de Joinville-le-Pont** ; pour le bois de Vincennes, la **Ville de Paris**.',
      'Nous intervenons aussi tout autour : [Saint-Maurice](/deratisation/saint-maurice), [Saint-Maur-des-Fossés](/deratisation/saint-maur-des-fosses), [Champigny-sur-Marne](/deratisation/champigny-sur-marne), [Nogent-sur-Marne](/deratisation/nogent-sur-marne), [Fontenay-sous-Bois](/deratisation/fontenay-sous-bois), [Vincennes](/deratisation/vincennes) et [Charenton-le-Pont](/deratisation/charenton-le-pont).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Joinville-le-Pont ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Maison, restaurant ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'La Marne fait-elle venir les rats à Joinville ?', a: 'Oui, les berges et l’eau sont l’habitat du surmulot ([mode de vie du rat](/blog/rat-mode-de-vie)). Quand la rivière monte, il remonte vers les caves et les parkings des quais.' },
    { q: 'Intervenez-vous dans les restaurants et guinguettes des bords de Marne ?', a: 'Oui, hors service, avec postes numérotés, registre des passages et attestation pour vos contrôles d’hygiène.' },
    { q: 'J’ai des trous dans mon jardin à Polangis : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Qui paie la dératisation d’une copropriété ?', a: 'Les parties communes relèvent du syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Peut-on dératiser sans poison près de l’eau ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Joinville-le-Pont ?', a: 'Oui : notre base de Saint-Maurice est voisine. Nous intervenons 7j/7, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [JOINVILLE_INSEE, JOINVILLE_WIKI, RSD_94, SPF_LEPTO],
}

// ── L'Haÿ-les-Roses (25/11/2026) ──
const LHAY_WIKI: Source = { label: 'Wikipédia, L’Haÿ-les-Roses (Bièvre, quartiers, quartiers prioritaires, logement)', url: 'https://fr.wikipedia.org/wiki/L%27Ha%C3%BF-les-Roses' }
const ROSERAIE_WIKI: Source = { label: 'Wikipédia, Roseraie du Val-de-Marne (1894, 3 300 variétés, 1,52 ha)', url: 'https://fr.wikipedia.org/wiki/Roseraie_du_Val-de-Marne' }
const LHAY_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94038, L’Haÿ-les-Roses', url: 'https://geo.api.gouv.fr/communes?code=94038&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['l-hay-les-roses'] = {
  maj: '2026-11-25',
  accroche: 'La ville des roses a aussi ses rats : une Bièvre en partie enterrée, des cités, des pavillons avec jardin et 40 hectares d’espaces verts. Nous traitons chaque secteur à sa manière.',
  societe: {
    titre: 'Société de dératisation à L’Haÿ-les-Roses (94240) : la ville des roses et de la Bièvre',
    paras: [
      'L’Haÿ-les-Roses, sous-préfecture du Val-de-Marne, compte **31 188 habitants** sur **3,90 km²**. Elle doit son nom à sa **roseraie**, la première roseraie moderne, fondée en 1894 par Jules Gravereaux, et compte environ **40 hectares d’espaces verts**. Elle est aussi traversée par la **Bièvre**, longtemps **enterrée** : remise au jour en 2016 sur **600 mètres** dans le parc La Fontaine, elle coule encore sous des jardins et des rues ailleurs. Ouvrages enterrés, berges et parcs : le chemin du **surmulot**.',
      'Côté habitat, la ville est mixte : **71,7 % d’appartements** et **25,6 % de maisons** en 2021, avec **cinq quartiers prioritaires** (Jardins Parisiens, Vallée-aux-Renards, Lebon-Hochart-Mermoz, les Sorbiers-Lallier…). Une société de dératisation y traite autant les **parties communes** des résidences que les **jardins** des pavillons.',
      'Nous intervenons à L’Haÿ-les-Roses depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à L’Haÿ-les-Roses](/souris/l-hay-les-roses), [punaises de lit à L’Haÿ-les-Roses](/punaises-de-lit/l-hay-les-roses) et [fourmis à L’Haÿ-les-Roses](/fourmis/l-hay-les-roses).',
    ],
  },
  chiffres: [
    { valeur: '31 188', texte: 'habitants (population légale Insee), code postal 94240.', source: LHAY_INSEE },
    { valeur: '600 m', texte: 'de Bièvre remis au jour en 2016 dans le parc La Fontaine ; ailleurs, la rivière reste enterrée.', source: LHAY_WIKI },
    { valeur: '40 ha', texte: 'd’espaces verts environ, dont la roseraie et ses 3 300 variétés de rosiers.', source: ROSERAIE_WIKI },
    { valeur: '5', texte: 'quartiers prioritaires de la ville en 2024, avec de grandes résidences collectives.', source: LHAY_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à L’Haÿ-les-Roses : la ville quartier par quartier',
    intro: 'La ville compte six quartiers : le **Centre**, le **Jardin Parisien**, **Lallier-Bicêtre**, les **Blondeaux**, le **Petit Robinson** et la **Vallée-aux-Renards**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'La vallée de la Bièvre et ses parcs',
        texte: 'Le long de l’**avenue Flouquet**, du parc La Fontaine et du parc de la Bièvre, la rivière coule tantôt à l’air libre, tantôt sous terre. Les maisons et immeubles du fond de vallée doivent surveiller **regards**, **caves** et **soupiraux** : c’est par là que remontent les rats.',
        photo: { src: '/villes/l-hay-les-roses/bievre-parc-la-fontaine.jpg', alt: 'La Bièvre remise à l’air libre le long de l’avenue Flouquet à L’Haÿ-les-Roses', legende: 'La Bièvre remise au jour dans le parc La Fontaine, le long de l’avenue Flouquet : eau et berges au pied des immeubles.', credit: 'VVVCFFrance', licence: 'CC BY-SA 4.0', page: W + 'L%27Ha%C3%BF-les-Roses_Bi%C3%A8vre_av._Flouquet_sud_3.jpg' },
      },
      {
        nom: 'Le Centre, la roseraie et les pavillons',
        texte: 'Autour du centre ancien, de l’église Saint-Léonard et de la **roseraie**, les **pavillons** avec jardin sont nombreux. Haies, massifs, composteurs et abris attirent les rongeurs : nous traitons les **terriers**, protégeons le compost et fermons l’accès au **vide sanitaire**. Voir [rat dans le compost](/blog/rat-compost).',
        photo: { src: '/villes/l-hay-les-roses/roseraie-du-val-de-marne.jpg', alt: 'Le dôme de la roseraie du Val-de-Marne à L’Haÿ-les-Roses', legende: 'Le dôme de la roseraie du Val-de-Marne : la ville compte une quarantaine d’hectares d’espaces verts.', credit: 'C. Potez-Delpuech', licence: 'CC BY-SA 3.0', page: W + 'Dome_roseraie.jpg' },
      },
      {
        nom: 'Les grandes résidences : Jardin Parisien, Lallier, Vallée-aux-Renards',
        texte: 'Les quartiers prioritaires (Jardins Parisiens, Vallée-aux-Renards, Lebon-Hochart-Mermoz, Sorbiers-Lallier) partagent **caves**, **vide-ordures** et **locaux à poubelles** entre des centaines de logements. Le traitement se fait avec le **bailleur**, sur toutes les **parties communes**, puis nous rebouchons les passages vers les logements.',
      },
      {
        nom: 'Le métro 14 et les nouveaux quartiers',
        texte: 'Autour de la station L’Haÿ-les-Roses de la **ligne 14**, le quartier se transforme. Quand il y a des **chantiers**, les terrassements délogent les colonies, qui cherchent refuge dans les **parkings** et **caves** voisins : il faut agir dès les premières traces.',
        photo: { src: '/villes/l-hay-les-roses/metro-ligne-14.jpg', alt: 'Entrée de la station L’Haÿ-les-Roses de la ligne 14', legende: 'La station L’Haÿ-les-Roses de la ligne 14 : un secteur en transformation, avec ses chantiers.', credit: 'Matgrt', licence: 'CC BY 4.0', page: W + 'Entr%C3%A9e_L%27Ha%C3%BF-les-Roses_(ligne_14).jpg' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à L’Haÿ-les-Roses (94240) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes, des terriers ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Pavillon : jardin, abri, garage, vide sanitaire. Résidence : caves, vide-ordures, local à poubelles. Fond de vallée : regards et soupiraux.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à L’Haÿ-les-Roses (94240) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des terriers dans un jardin de pavillon', x: 'Trous au pied des murs, sous la terrasse ou l’abri : voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
      { t: 'Des rats dans la cave ou au vide-ordures', x: 'Le signe d’une colonie dans les parties communes. Prévenez le bailleur ou le syndic par écrit : le traitement doit couvrir tout le sous-sol.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à L’Haÿ-les-Roses](/souris/l-hay-les-roses) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des bruits sous le plancher', x: 'Voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire) et [rats dans les combles](/blog/rats-dans-les-combles).' },
      { t: 'Des rats attirés par les mangeoires ou le compost', x: 'Graines au sol, compost ouvert : voir [nourrir les oiseaux attire les rats](/blog/nourrir-oiseaux-pigeons-attire-rats).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à L’Haÿ-les-Roses',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Un pavillon se traite à la charge de son propriétaire, une résidence à celle du **bailleur** ou du **syndic**.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique, dans un parc ou le long de la Bièvre, alertez la **mairie de L’Haÿ-les-Roses**.',
      'Nous intervenons aussi tout autour : [Chevilly-Larue](/deratisation/chevilly-larue), [Fresnes](/deratisation/fresnes), [Villejuif](/deratisation/villejuif), [Cachan](/deratisation/cachan), [Arcueil](/deratisation/arcueil), [Bourg-la-Reine](/deratisation/bourg-la-reine) et [Antony](/deratisation/antony).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à L’Haÿ-les-Roses ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'La Bièvre attire-t-elle les rats à L’Haÿ ?', a: 'Oui, à l’air libre comme sous terre, la rivière et ses ouvrages sont favorables au surmulot ([mode de vie du rat](/blog/rat-mode-de-vie)). Le fond de vallée doit surveiller regards, caves et soupiraux.' },
    { q: 'J’ai des trous dans mon jardin : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'J’habite une résidence du Jardin Parisien ou de Lallier : qui paie ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Peut-on dératiser sans poison dans un jardin avec chien ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés.' },
    { q: 'Les chantiers autour du métro 14 font-ils venir les rats ?', a: 'Les terrassements délogent les colonies, qui cherchent un nouvel abri dans les bâtiments voisins. Fermez caves et locaux à poubelles, et faites traiter dès les premières traces.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à L’Haÿ-les-Roses ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [LHAY_INSEE, LHAY_WIKI, ROSERAIE_WIKI, RSD_94, SPF_LEPTO],
}

// ── Le Kremlin-Bicêtre (25/11/2026) ──
const KB_WIKI: Source = { label: 'Wikipédia, Le Kremlin-Bicêtre (carrières, avenue de Fontainebleau, logement, transports)', url: 'https://fr.wikipedia.org/wiki/Le_Kremlin-Bic%C3%AAtre' }
const KB_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94043, Le Kremlin-Bicêtre', url: 'https://geo.api.gouv.fr/communes?code=94043&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['le-kremlin-bicetre'] = {
  maj: '2026-11-25',
  accroche: 'Collé à Paris, entre le périphérique, l’avenue de Fontainebleau et l’hôpital Bicêtre, sur d’anciennes carrières : au Kremlin-Bicêtre, presque tout le monde vit en immeuble, et les rongeurs passent par les sous-sols.',
  societe: {
    titre: 'Société de dératisation au Kremlin-Bicêtre (94270) : une ville dense aux portes de Paris',
    paras: [
      'Le Kremlin-Bicêtre compte **24 110 habitants** sur seulement **1,54 km²**, soit plus de **15 000 habitants au km²**. La ville touche Paris par le **boulevard périphérique** et l’**A6b**, et s’organise autour de l’**avenue de Fontainebleau**, ancienne grande route vers le sud, bordée d’immeubles et de commerces. Son histoire se confond avec celle de l’**hôpital de Bicêtre**, qui occupe une grande partie du territoire.',
      'Le sous-sol a été creusé de **carrières de calcaire grossier**, souterraines et à ciel ouvert, et de **carrières d’argile** dans la vallée. Aujourd’hui, **93,6 % des logements** sont des appartements (2020), dont **31,2 % de HLM**. Pour une société de dératisation, ce sont avant tout des **caves**, des **parkings** et des **locaux à poubelles** à traiter, souvent reliés d’un immeuble à l’autre.',
      'Nous intervenons au Kremlin-Bicêtre depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris au Kremlin-Bicêtre](/souris/le-kremlin-bicetre), [punaises de lit au Kremlin-Bicêtre](/punaises-de-lit/le-kremlin-bicetre), [fourmis au Kremlin-Bicêtre](/fourmis/le-kremlin-bicetre) et [puces au Kremlin-Bicêtre](/puces/le-kremlin-bicetre).',
    ],
  },
  chiffres: [
    { valeur: '24 110', texte: 'habitants (population légale Insee), code postal 94270.', source: KB_INSEE },
    { valeur: '1,54 km²', texte: 'de superficie : plus de 15 000 habitants au km² (calcul sur les chiffres Insee).', source: KB_INSEE },
    { valeur: '93,6 %', texte: 'des logements sont des appartements (2020), sur 13 170 logements.', source: KB_WIKI },
    { valeur: '31,2 %', texte: 'de logements HLM en 2020 (3 612 logements).', source: KB_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats au Kremlin-Bicêtre : la ville secteur par secteur',
    intro: 'De l’**avenue de Fontainebleau** au **périphérique**, des abords de l’**hôpital Bicêtre** aux résidences et au **parc Pinel**, voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'L’avenue de Fontainebleau et les commerces',
        texte: 'Axe principal de la ville, l’**avenue de Fontainebleau** concentre immeubles, restaurants, commerces de bouche et le centre commercial **Okabé**. Réserves, cuisines et locaux à déchets attirent rats et souris. Pour un commerce : postes **numérotés**, **registre**, **attestation** et passages **hors des heures d’ouverture**.',
        photo: { src: '/villes/le-kremlin-bicetre/avenue-de-fontainebleau.jpg', alt: 'L’avenue de Fontainebleau au Kremlin-Bicêtre', legende: 'L’avenue de Fontainebleau : immeubles, commerces et restaurants sur l’axe principal de la ville.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Avenue_Fontainebleau_-_Le_Kremlin-Bic%C3%AAtre_(FR94)_-_2021-10-24_-_1.jpg' },
      },
      {
        nom: 'Les abords de l’hôpital Bicêtre et la ligne 14',
        texte: 'Autour du grand domaine hospitalier et de la station **Hôpital Bicêtre** de la **ligne 14**, résidences, commerces et chantiers se côtoient. Les terrassements délogent les colonies : les immeubles voisins doivent fermer **caves**, **soupiraux** et **locaux à poubelles** dès les premières traces.',
        photo: { src: '/villes/le-kremlin-bicetre/station-hopital-bicetre.jpg', alt: 'La station Hôpital Bicêtre de la ligne 14 au Kremlin-Bicêtre', legende: 'La station Hôpital Bicêtre (ligne 14), ouverte en 2024 : un secteur en pleine transformation.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Station_H%C3%B4pital_Bic%C3%AAtre_M%C3%A9tro_Paris_-_Le_Kremlin-Bic%C3%AAtre_(FR94)_-_2024-06-26_-_1.jpg' },
      },
      {
        nom: 'Le centre, la mairie et les anciennes carrières',
        texte: 'Autour de la **mairie** et de son jardin, immeubles anciens et petits collectifs reposent sur un sous-sol creusé par d’**anciennes carrières**. Caves profondes et vieux réseaux offrent des abris aux rongeurs : nous inspectons **soupiraux**, **regards** et **caves**, puis rebouchons.',
        photo: { src: '/villes/le-kremlin-bicetre/mairie-et-jardin.jpg', alt: 'La mairie du Kremlin-Bicêtre et son jardin', legende: 'La mairie et son jardin : autour, un bâti ancien sur d’anciennes carrières.', credit: 'Guillaume « Frozman » Calas', licence: 'CC BY 2.5', page: W + 'Kremlin-bicetre-france-mairie-02.jpg' },
      },
      {
        nom: 'Les résidences et le long du périphérique',
        texte: 'Près du **périphérique** et de l’**A6b**, les grandes résidences et HLM partagent **caves**, **vide-ordures** et **locaux à poubelles**. Talus et ouvrages routiers servent de couloirs aux rongeurs. Le traitement se fait avec le **bailleur**, sur toutes les **parties communes**.',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats au Kremlin-Bicêtre (94270) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'L’enquête dans l’immeuble', x: 'Cuisine, gaines, plinthes chez vous ; caves, parkings, vide-ordures et local à poubelles dans les parties communes.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur au Kremlin-Bicêtre (94270) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des souris dans la cuisine d’un appartement', x: 'Le cas le plus fréquent dans une ville d’immeubles : voir [souris au Kremlin-Bicêtre](/souris/le-kremlin-bicetre), [par où entrent les souris](/blog/souris-par-ou-entrent-elles) et [rat derrière l’électroménager](/blog/rat-piege-cuisine-electromenager).' },
      { t: 'Des rats dans la cave ou le parking', x: 'Le signe d’une colonie dans les sous-sols, souvent reliés entre immeubles. Prévenez le syndic ou le bailleur par écrit : le traitement doit couvrir les parties communes.' },
      { t: 'Des rats apparus après un chantier voisin', x: 'Quand un terrain est terrassé, la colonie cherche un nouvel abri. Agissez dès les premières traces pour éviter l’installation.' },
      { t: 'Un rongeur dans un restaurant ou un commerce', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
      { t: 'Des bruits dans les murs ou le plafond', x: 'Dans le bâti ancien, les rongeurs circulent dans les cloisons : voir [rat dans les murs et cloisons](/blog/rat-dans-les-murs-cloisons).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi au Kremlin-Bicêtre',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Au Kremlin-Bicêtre, les parties communes se traitent à la demande du **syndic** ou du **bailleur**, et chacun traite son logement.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique ou dans un parc, alertez la **mairie du Kremlin-Bicêtre**.',
      'Nous intervenons aussi tout autour : [Gentilly](/deratisation/gentilly), [Arcueil](/deratisation/arcueil), [Villejuif](/deratisation/villejuif), [Ivry-sur-Seine](/deratisation/ivry-sur-seine), [Vitry-sur-Seine](/deratisation/vitry-sur-seine) et [Paris 13e](/deratisation/paris-13).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation au Kremlin-Bicêtre ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Commerce, restaurant ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'J’ai des souris dans mon appartement : faut-il traiter tout l’immeuble ?', a: 'Souvent, oui. Si elles viennent des caves ou des gaines, nous traitons votre logement et conseillons au syndic de traiter les parties communes ([par où entrent les souris](/blog/souris-par-ou-entrent-elles)).' },
    { q: 'Les anciennes carrières favorisent-elles les rats ?', a: 'Un sous-sol ancien, avec caves profondes et vieux réseaux, offre des abris aux rongeurs ([mode de vie du rat](/blog/rat-mode-de-vie)). Le traitement se fait au plus près des points d’entrée, puis nous rebouchons.' },
    { q: 'Qui paie la dératisation d’une résidence HLM ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Intervenez-vous dans les commerces de l’avenue de Fontainebleau ?', a: 'Oui, hors des heures d’ouverture, avec postes numérotés, registre et attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    { q: 'Peut-on dératiser sans poison dans un appartement avec chat ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite au Kremlin-Bicêtre ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [KB_INSEE, KB_WIKI, RSD_94, SPF_LEPTO],
}

// ── Le Perreux-sur-Marne (25/11/2026) ──
const PERREUX_WIKI: Source = { label: 'Wikipédia, Le Perreux-sur-Marne (Marne, crue de 1910, logement, Parc du Perreux, transports)', url: 'https://fr.wikipedia.org/wiki/Le_Perreux-sur-Marne' }
const PERREUX_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94058, Le Perreux-sur-Marne', url: 'https://geo.api.gouv.fr/communes?code=94058&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['le-perreux-sur-marne'] = {
  maj: '2026-11-25',
  accroche: 'Pavillons, villas et jardins le long de la Marne, sur des terrains qui furent inondés en 1910 : au Perreux-sur-Marne, les rats montent de la rivière vers les maisons. Nous les arrêtons à l’entrée.',
  societe: {
    titre: 'Société de dératisation au Perreux-sur-Marne (94170) : une ville de maisons au bord de la Marne',
    paras: [
      'Le Perreux-sur-Marne compte **35 260 habitants** sur **3,96 km²**, entre 35 et 70 mètres d’altitude. La **Marne** borde la commune **à l’est et au sud**, face à Bry-sur-Marne et Champigny. Lors de la **crue de janvier 1910**, l’eau est montée de plus de **5 mètres** au-dessus de son lit et **un quart de la commune** s’est retrouvé sous les eaux pendant plusieurs semaines. Berges, caves et sous-sols proches de l’eau : un terrain que le **surmulot**, le rat d’égout, connaît bien.',
      'Le Perreux s’est construit à la fin du XIXe siècle avec l’arrivée du chemin de fer : des Parisiens y ont bâti **pavillons et villas**, souvent sur les terrains bas et inondables du sud, près de la gare. Aujourd’hui encore, **29,1 % des logements** sont des maisons individuelles et les logements sociaux sont peu nombreux. Pour une société de dératisation, Le Perreux, c’est d’abord des **jardins**, des **caves** et des **vide sanitaires** de maisons, et des **copropriétés** gérées par un syndic.',
      'Nous intervenons au Perreux depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris au Perreux-sur-Marne](/souris/le-perreux-sur-marne), [cafards au Perreux-sur-Marne](/cafards/le-perreux-sur-marne), [punaises de lit au Perreux-sur-Marne](/punaises-de-lit/le-perreux-sur-marne) et [chenilles processionnaires au Perreux-sur-Marne](/chenilles-processionnaires/le-perreux-sur-marne).',
    ],
  },
  chiffres: [
    { valeur: '35 260', texte: 'habitants (population légale Insee), code postal 94170.', source: PERREUX_INSEE },
    { valeur: '1/4', texte: 'de la commune sous les eaux lors de la crue de janvier 1910, pendant plusieurs semaines.', source: PERREUX_WIKI },
    { valeur: '29,1 %', texte: 'des logements sont des maisons individuelles, sur 16 032 logements.', source: PERREUX_WIKI },
    { valeur: '≈ 100', texte: 'pavillons dans le lotissement du Parc du Perreux, sur l’ancien domaine du château.', source: PERREUX_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats au Perreux-sur-Marne : la ville secteur par secteur',
    intro: 'Des **bords de Marne** au **Parc du Perreux**, des **terrains bas du sud** au **centre** et aux abords de la **gare RER E**, voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les bords de Marne, du pont de Bry à la passerelle',
        texte: 'À l’est, le long de la Marne, entre le **pont de Bry** et la **passerelle de Bry**, les maisons ont souvent un jardin qui descend vers l’eau, un sous-sol et des **soupiraux**. Le surmulot remonte des berges par les jardins et les regards. Nous contrôlons chaque ouverture, traitons les **terriers** et posons des grilles.',
        photo: { src: '/villes/le-perreux-sur-marne/la-marne-pont-de-bry.jpg', alt: 'La Marne au pont de Bry, avec le repère de la crue de 1910 sur la pile', legende: 'La Marne au pont de Bry : la ligne rouge marque la hauteur de la crue de 1910 (39,07 m), bien au-dessus des jardins riverains.', credit: 'Georges Le Gars', licence: 'CC BY-SA 3.0', page: W + '4_la_Marne_au_Pont_de_Bry.JPG' },
      },
      {
        nom: 'Les terrains bas du sud, inondés en 1910',
        texte: 'Au sud, près de la Marne et de la limite avec Nogent, les quartiers bâtis sur des terrains bas ont été les plus touchés en 1910. Caves humides, vide sanitaires et réseaux y attirent les rongeurs, surtout après de fortes pluies. Nous inspectons les **sous-sols** et fermons les passages.',
        photo: { src: '/villes/le-perreux-sur-marne/crue-1910-zones-inondees.jpg', alt: 'Carte des zones du Perreux-sur-Marne inondées lors de la crue de 1910', legende: 'Les zones inondées en janvier 1910 (en vert), le long de la Marne : ce sont aussi les secteurs où les caves restent les plus humides.', credit: 'Georges Le Gars', licence: 'CC BY-SA 3.0', page: W + 'Crue_de_janvier_1910,_Le_Perreux,_zones_inond%C3%A9es.jpg' },
      },
      {
        nom: 'Le Parc du Perreux et les quartiers de villas',
        texte: 'Au cœur de la ville, le **Parc du Perreux**, lotissement d’une centaine de pavillons sur l’ancien domaine du château, et les rues de **villas** anciennes, dont plusieurs maisons Art nouveau, ont de grands jardins, des caves et des dépendances. Composteurs, abris et haies : nous traitons et fermons l’accès au **vide sanitaire**. Voir [rat dans le compost](/blog/rat-compost).',
        photo: { src: '/villes/le-perreux-sur-marne/villa-art-nouveau.jpg', alt: 'Villa Art nouveau avec jardin au Perreux-sur-Marne', legende: 'Une villa Art nouveau du Perreux : jardin, sous-sol et dépendances, autant de cachettes possibles pour les rongeurs.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Villa_Jacques_-_Le_Perreux-sur-Marne_(FR94)_-_2021-03-20_-_3.jpg' },
      },
      {
        nom: 'Le centre, la gare et les copropriétés',
        texte: 'Autour de la mairie, de l’église Saint-Jean-Baptiste et de la gare **Nogent-Le Perreux** (RER E), immeubles et commerces partagent **caves**, **cours** et **locaux à poubelles**. Le traitement des parties communes se fait avec le **syndic** ; pour un commerce, nous intervenons hors des heures d’ouverture, avec **attestation**.',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats au Perreux-sur-Marne (94170) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes, des terriers ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le tour de la maison', x: 'Jardin, abri, garage, sous-sol, vide sanitaire, soupiraux côté Marne ; en copropriété, caves et local à poubelles.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur au Perreux-sur-Marne (94170) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des terriers dans un jardin au bord de la Marne', x: 'Trous au pied des murs, sous la terrasse ou l’abri, coulées vers la rivière : nous traitons les galeries et fermons les accès. Voir [le mode de vie du rat](/blog/rat-mode-de-vie).' },
      { t: 'Des rats dans une cave humide après la pluie', x: 'Quand la Marne monte, les rats cherchent des abris plus hauts, souvent dans les caves et les sous-sols. Nous traitons, puis bouchons soupiraux et passages.' },
      { t: 'Des bruits sous le plancher ou dans les combles', x: 'Voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire) et [rats dans les combles](/blog/rats-dans-les-combles).' },
      { t: 'Des souris dans la maison en automne', x: 'Elles entrent par le moindre interstice : voir [souris au Perreux-sur-Marne](/souris/le-perreux-sur-marne) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des rats attirés par les mangeoires ou le poulailler', x: 'Graines au sol, mangeoires, compost ouvert : voir [nourrir les oiseaux attire les rats](/blog/nourrir-oiseaux-pigeons-attire-rats).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi au Perreux-sur-Marne',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Au Perreux, ville de maisons, c’est le plus souvent au **propriétaire** de faire appel à une entreprise de dératisation ; pour un immeuble, au **syndic**.',
      'Locataire, prévenez votre propriétaire **par écrit**, avec photos. Pour des rats sur les berges ou la voie publique, alertez la **mairie du Perreux-sur-Marne**. Les rats ne connaissent pas les clôtures : prévenir vos voisins aide à traiter le secteur.',
      'Nous intervenons aussi tout autour : [Nogent-sur-Marne](/deratisation/nogent-sur-marne), [Bry-sur-Marne](/deratisation/bry-sur-marne), [Champigny-sur-Marne](/deratisation/champigny-sur-marne), [Fontenay-sous-Bois](/deratisation/fontenay-sous-bois), [Villiers-sur-Marne](/deratisation/villiers-sur-marne) et [Joinville-le-Pont](/deratisation/joinville-le-pont).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation au Perreux-sur-Marne ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Maison avec jardin ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Les bords de Marne attirent-ils les rats au Perreux ?', a: 'Oui, l’eau et les berges sont le territoire du surmulot ([mode de vie du rat](/blog/rat-mode-de-vie)). Les maisons proches de la rivière doivent surveiller jardins, regards et soupiraux.' },
    { q: 'Ma cave est humide et j’entends des rats : est-ce lié ?', a: 'Souvent. Les terrains bas du Perreux, inondés en 1910, gardent des caves humides où les rats trouvent abri. Nous traitons et bouchons les passages, et vous conseillons sur l’aération et le rangement.' },
    { q: 'J’ai des trous dans ma pelouse : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Mon compost ou mes mangeoires attirent-ils les rats ?', a: 'Oui, s’ils donnent accès à la nourriture. Fermez le composteur, ramassez les graines le soir et rangez-les en bacs fermés (voir [rat dans le compost](/blog/rat-compost)).' },
    { q: 'Qui paie la dératisation d’une copropriété ?', a: 'Les parties communes relèvent du syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Peut-on dératiser sans poison dans un jardin ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, si vous avez des enfants, des animaux ou un potager.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
  ],
  sources: [PERREUX_INSEE, PERREUX_WIKI, RSD_94, SPF_LEPTO],
}

// ── Le Plessis-Trévise (25/11/2026) ──
const PLESSIS_WIKI: Source = { label: 'Wikipédia, Le Plessis-Trévise (lotissements, Bois Saint-Martin, logement, transports)', url: 'https://fr.wikipedia.org/wiki/Le_Plessis-Tr%C3%A9vise' }
const BOIS_ST_MARTIN_WIKI: Source = { label: 'Wikipédia, Bois Saint-Martin (forêt sur Noisy-le-Grand, Le Plessis-Trévise, Villiers-sur-Marne)', url: 'https://fr.wikipedia.org/wiki/Bois_Saint-Martin' }
const PLESSIS_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94059, Le Plessis-Trévise', url: 'https://geo.api.gouv.fr/communes?code=94059&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['le-plessis-trevise'] = {
  maj: '2026-11-25',
  accroche: 'Une ville née de la forêt, lotie en pavillons avec jardin, au bord du Bois Saint-Martin : au Plessis-Trévise, souris et rats viennent des bois et des jardins. Nous protégeons votre maison.',
  societe: {
    titre: 'Société de dératisation au Plessis-Trévise (94420) : une ville de lotissements au bord des bois',
    paras: [
      'Le Plessis-Trévise compte **21 112 habitants** sur **4,32 km²**, sur le plateau, entre 88 et 111 mètres d’altitude. Au milieu du XIXe siècle, le territoire était **presque entièrement boisé** et ne comptait qu’une cinquantaine d’habitants. En 1857, les héritiers de la duchesse de Trévise font **lotir le domaine** : les grandes propriétés boisées deviennent peu à peu des quartiers de **pavillons**. Une partie du **Bois Saint-Martin** se trouve encore sur la commune.',
      'Cette histoire explique la plupart des appels que nous recevons : **jardins**, haies, abris, composteurs et **vide sanitaires** de maisons, au contact des espaces boisés. En 2018, **32 % des logements** étaient des maisons individuelles, le reste des appartements. À l’automne, quand il fait froid, les **souris** des bois et des jardins cherchent la chaleur des maisons.',
      'Nous intervenons au Plessis-Trévise depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris au Plessis-Trévise](/souris/le-plessis-trevise), [punaises de lit au Plessis-Trévise](/punaises-de-lit/le-plessis-trevise), [fourmis au Plessis-Trévise](/fourmis/le-plessis-trevise) et [chenilles processionnaires au Plessis-Trévise](/chenilles-processionnaires/le-plessis-trevise).',
    ],
  },
  chiffres: [
    { valeur: '21 112', texte: 'habitants (population légale Insee), code postal 94420.', source: PLESSIS_INSEE },
    { valeur: '1857', texte: 'début du lotissement de l’ancien domaine boisé, qui comptait alors une cinquantaine d’habitants.', source: PLESSIS_WIKI },
    { valeur: '32 %', texte: 'des logements sont des maisons individuelles (2018), sur 8 442 logements.', source: PLESSIS_WIKI },
    { valeur: 'Bois', texte: 'Saint-Martin : une forêt partagée entre Le Plessis-Trévise, Villiers-sur-Marne et Noisy-le-Grand.', source: BOIS_ST_MARTIN_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats au Plessis-Trévise : la ville secteur par secteur',
    intro: 'Des **lisières du Bois Saint-Martin** aux **lotissements pavillonnaires**, du **centre** et de l’**avenue Ardouin** aux résidences, voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les lisières du Bois Saint-Martin',
        texte: 'Au nord, les maisons qui bordent le **Bois Saint-Martin** sont au contact direct d’un grand espace boisé. Mulots, souris et rats y vivent et s’approchent des **abris de jardin**, des **garages** et des **tas de bois**. Nous protégeons les points d’entrée de la maison et traitons les **terriers** du jardin.',
      },
      {
        nom: 'Les lotissements pavillonnaires',
        texte: 'La ville s’est construite par **lotissements successifs**, dès 1857 puis surtout dans les années 1970. Jardins, haies, composteurs, poulaillers et vide sanitaires : c’est là que nous intervenons le plus. Voir [rat dans le compost](/blog/rat-compost) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
        photo: { src: '/villes/le-plessis-trevise/chateau-des-tourelles.jpg', alt: 'Le château des Tourelles au Plessis-Trévise', legende: 'Le château des Tourelles, maison bourgeoise entourée de jardins : au Plessis-Trévise, les grandes propriétés ont laissé place aux pavillons.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Ch%C3%A2teau_Tourelles_-_Le_Plessis-Tr%C3%A9vise_(FR94)_-_2022-03-17_-_2.jpg' },
      },
      {
        nom: 'Le centre-ville et les résidences',
        texte: 'Le cœur de ville, aménagé à partir de 1984, rassemble **résidences**, commerces et équipements. Caves, parkings et **locaux à poubelles** partagés : le traitement des parties communes se fait avec le **syndic** ou le **bailleur**, puis nous rebouchons les passages vers les logements.',
        photo: { src: '/villes/le-plessis-trevise/centre-ville.jpg', alt: 'Le centre-ville du Plessis-Trévise et ses résidences', legende: 'Le centre-ville et ses résidences : caves, parkings et locaux à poubelles à surveiller.', credit: 'besopha', licence: 'CC BY-SA 2.0', page: W + 'Le_Plessis-Tr%C3%A9vise_-_Centre_ville.jpg' },
      },
      {
        nom: 'L’avenue Ardouin, le marché et les commerces',
        texte: 'Sur l’**avenue Ardouin**, la **place du marché** et les commerces de bouche produisent des déchets alimentaires. Pour un commerçant : postes **numérotés**, **registre**, **attestation** et passages hors des heures d’ouverture.',
        photo: { src: '/villes/le-plessis-trevise/place-du-marche-avenue-ardouin.jpg', alt: 'La place du marché, avenue Ardouin, au Plessis-Trévise', legende: 'La place du marché, avenue Ardouin : autour des marchés, les déchets alimentaires attirent les rongeurs.', credit: 'Eunostos', licence: 'CC BY-SA 4.0', page: W + 'Place_du_march%C3%A9,_avenue_Ardouin,_Le_Plessis-Tr%C3%A9vise.jpg' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats au Plessis-Trévise (94420) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes, des terriers ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le tour de la maison', x: 'Jardin, haies, abri, garage, tas de bois, vide sanitaire ; en résidence, caves, parkings et local à poubelles.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur au Plessis-Trévise (94420) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des souris dans la maison dès les premiers froids', x: 'Près des bois, elles cherchent la chaleur à l’automne et passent par le moindre interstice : voir [souris au Plessis-Trévise](/souris/le-plessis-trevise) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des terriers dans le jardin', x: 'Trous au pied des murs, sous la terrasse ou l’abri : voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
      { t: 'Des bruits dans les combles ou le vide sanitaire', x: 'Voir [rats dans les combles](/blog/rats-dans-les-combles) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire). Nous trouvons l’entrée avant de traiter.' },
      { t: 'Des rongeurs attirés par le poulailler ou les mangeoires', x: 'Graines au sol, mangeoires, compost ouvert : voir [nourrir les oiseaux attire les rats](/blog/nourrir-oiseaux-pigeons-attire-rats).' },
      { t: 'Un rongeur dans un commerce du centre', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi au Plessis-Trévise',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Au Plessis-Trévise, ville de pavillons, c’est le plus souvent au **propriétaire** de faire appel à une entreprise de dératisation ; pour une résidence, au **syndic** ou au **bailleur**.',
      'Pour des rats sur la voie publique, dans un parc ou en lisière de bois, alertez la **mairie du Plessis-Trévise**. Les rongeurs ne connaissent pas les clôtures : prévenir vos voisins aide à traiter le secteur.',
      'Nous intervenons aussi tout autour : [Villiers-sur-Marne](/deratisation/villiers-sur-marne), [Champigny-sur-Marne](/deratisation/champigny-sur-marne), [Chennevières-sur-Marne](/deratisation/chennevieres-sur-marne) et [Pontault-Combault](/deratisation/pontault-combault).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation au Plessis-Trévise ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon avec jardin ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Pourquoi des souris chaque automne dans ma maison ?', a: 'Près du Bois Saint-Martin et des jardins, les souris cherchent la chaleur quand il fait froid. Nous trouvons et bouchons leurs entrées ([par où entrent les souris](/blog/souris-par-ou-entrent-elles)).' },
    { q: 'Le Bois Saint-Martin fait-il venir les rongeurs ?', a: 'Un grand espace boisé abrite de nombreux rongeurs, qui s’approchent des maisons en lisière, surtout l’hiver. Abris, garages et tas de bois sont les premiers endroits à surveiller.' },
    { q: 'J’ai des trous dans ma pelouse : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Mon poulailler attire-t-il les rats ?', a: 'Oui, s’il donne accès aux graines. Rangez-les en bacs fermés, ramassez les restes le soir et grillagez le bas du poulailler (voir [nourrir les oiseaux attire les rats](/blog/nourrir-oiseaux-pigeons-attire-rats)).' },
    { q: 'Qui paie la dératisation d’une résidence ?', a: 'Les parties communes relèvent du syndic ou du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Peut-on dératiser sans poison dans un jardin avec enfants ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
  ],
  sources: [PLESSIS_INSEE, PLESSIS_WIKI, BOIS_ST_MARTIN_WIKI, RSD_94, SPF_LEPTO],
}

// ── Limeil-Brévannes (25/11/2026) ──
const LIMEIL_WIKI: Source = { label: 'Wikipédia, Limeil-Brévannes (forêt de la Grange, parcs, quartiers, hôpital Émile-Roux, Câble 1)', url: 'https://fr.wikipedia.org/wiki/Limeil-Br%C3%A9vannes' }
const LIMEIL_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94044, Limeil-Brévannes', url: 'https://geo.api.gouv.fr/communes?code=94044&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['limeil-brevannes'] = {
  maj: '2026-11-25',
  accroche: 'Une forêt de 110 hectares, des parcs, des quartiers neufs et des pavillons, entre le plateau de Limeil et le bas de Brévannes : à Limeil-Brévannes, les rongeurs ne manquent pas d’abris. Nous les en privons.',
  societe: {
    titre: 'Société de dératisation à Limeil-Brévannes (94450) : une ville entre forêt et quartiers neufs',
    paras: [
      'Limeil-Brévannes compte **27 406 habitants** sur **6,95 km²**. La commune est née de la réunion de deux villages : **Brévannes**, en bas de la ville, et **Limeil**, sur le plateau. Sa particularité : la **forêt de la Grange** couvre **110 hectares**, soit **18 % du territoire**. Classée forêt de protection et gérée par l’Office national des forêts, elle fait partie du massif de l’**Arc boisé**. Une forêt aussi proche des habitations, c’est un réservoir de **souris**, de **mulots** et de **rats** qui s’approchent des maisons à la mauvaise saison.',
      'La ville se transforme aussi : l’**écoquartier des Temps Durables**, le nouveau parc urbain du quartier **Saint-Martin** et, depuis 2025, le téléphérique **Câble 1** vers Créteil. Chantiers et terrassements délogent les colonies de rongeurs, qui cherchent un nouvel abri dans les bâtiments voisins. Pour une société de dératisation, Limeil-Brévannes, ce sont autant des **pavillons en lisière de bois** que des **résidences neuves** et des **parties communes**.',
      'Nous intervenons à Limeil-Brévannes depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Limeil-Brévannes](/souris/limeil-brevannes), [punaises de lit à Limeil-Brévannes](/punaises-de-lit/limeil-brevannes), [fourmis à Limeil-Brévannes](/fourmis/limeil-brevannes) et [chenilles processionnaires à Limeil-Brévannes](/chenilles-processionnaires/limeil-brevannes).',
    ],
  },
  chiffres: [
    { valeur: '27 406', texte: 'habitants (population légale Insee), code postal 94450.', source: LIMEIL_INSEE },
    { valeur: '110 ha', texte: 'pour la forêt de la Grange, soit 18 % du territoire, classée forêt de protection.', source: LIMEIL_WIKI },
    { valeur: '2,5 ha', texte: 'pour le parc Léon-Bernard, axe vert qui relie le haut et le bas de la ville depuis 2008.', source: LIMEIL_WIKI },
    { valeur: '2', texte: 'stations du téléphérique Câble 1 dans la commune : Plage Bleue et La Végétale Fontaine Saint-Martin.', source: LIMEIL_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Limeil-Brévannes : la ville secteur par secteur',
    intro: 'De la **forêt de la Grange** au **quartier Saint-Martin**, de l’**écoquartier des Temps Durables** au **parc de l’hôpital Émile-Roux**, voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'La forêt de la Grange et ses lisières',
        texte: 'Avec 110 hectares de châtaigniers, de chênes et de bouleaux, la **forêt de la Grange** abrite de nombreux petits rongeurs. Les maisons en lisière voient arriver souris et mulots dès l’automne, dans les **garages**, les **abris de jardin** et les **tas de bois**. Nous protégeons les entrées de la maison et traitons le jardin.',
        photo: { src: '/villes/limeil-brevannes/foret-de-la-grange.jpg', alt: 'Allée de la forêt de la Grange à Limeil-Brévannes', legende: 'La forêt de la Grange, 110 hectares en pleine commune : un réservoir de petits rongeurs à deux pas des maisons.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Route_Grand_Wirtemberg_-_Limeil-Br%C3%A9vannes_(FR94)_-_2022-05-06_-_1.jpg' },
      },
      {
        nom: 'Le quartier Saint-Martin et les résidences',
        texte: 'Quartier prioritaire de la ville, **Saint-Martin** rassemble des résidences autour des mêmes **caves**, **parkings** et **locaux à poubelles**. Le traitement se fait avec le **bailleur** sur toutes les **parties communes**, puis nous rebouchons les passages vers les logements.',
        photo: { src: '/villes/limeil-brevannes/quartier-saint-martin.jpg', alt: 'Rue du Docteur-Calmette dans le quartier Saint-Martin à Limeil-Brévannes', legende: 'Rue du Docteur-Calmette, quartier Saint-Martin : résidences avec caves et parkings partagés.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Rue_Docteur_Calmette_-_Limeil-Br%C3%A9vannes_(FR94)_-_2022-05-06_-_1.jpg' },
      },
      {
        nom: 'L’écoquartier des Temps Durables et les quartiers neufs',
        texte: 'Les immeubles récents ont des **parkings souterrains**, des **locaux techniques** et des espaces verts au pied des bâtiments. Pendant les chantiers, les rongeurs délogés s’y installent vite. Il faut agir dès les premières traces, avec le **syndic** de la résidence.',
        photo: { src: '/villes/limeil-brevannes/ecoquartier-temps-durables.jpg', alt: 'Allée Blaise-Cendrars dans l’écoquartier des Temps Durables à Limeil-Brévannes', legende: 'L’écoquartier des Temps Durables : résidences récentes, parkings souterrains et espaces verts.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'All%C3%A9e_Blaise_Cendrars_-_Limeil-Br%C3%A9vannes_(FR94)_-_2022-05-06_-_1.jpg' },
      },
      {
        nom: 'Brévannes, l’hôpital Émile-Roux et le Câble 1',
        texte: 'En bas de la ville, autour de l’**hôpital Émile-Roux** de l’AP-HP, installé dans l’ancien château de Brévannes et son parc arboré, et des nouvelles stations du **Câble 1**, on trouve pavillons, commerces et équipements. Parcs et talus offrent couvert aux rongeurs : les maisons voisines doivent surveiller jardins et soupiraux.',
        photo: { src: '/villes/limeil-brevannes/telepherique-cable-1.jpg', alt: 'Station du téléphérique Câble 1 à Limeil-Brévannes', legende: 'Une station du Câble 1, mis en service en 2025 : un secteur en pleine transformation.', credit: 'Matgrt', licence: 'CC BY-SA 4.0', page: W + 'C1_Limeil-Brevannes(2025).jpg' },
      },
      {
        nom: 'Le plateau de Limeil et les pavillons',
        texte: 'Sur le **plateau**, le vieux Limeil et ses quartiers de **pavillons** ont jardins, haies et composteurs. Nous traitons les **terriers** et fermons l’accès au **vide sanitaire**. Voir [rat dans le compost](/blog/rat-compost) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Limeil-Brévannes (94450) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes, des terriers ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Pavillon en lisière : garage, abri, tas de bois, vide sanitaire. Résidence : caves, parkings, local à poubelles. Chantier voisin : points d’entrée.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Limeil-Brévannes (94450) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des souris ou des mulots dans la maison à l’automne', x: 'Près de la forêt, ils cherchent la chaleur dès les premiers froids : voir [souris à Limeil-Brévannes](/souris/limeil-brevannes) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des rats dans les parkings d’une résidence neuve', x: 'Les chantiers voisins délogent les colonies. Prévenez le syndic par écrit dès les premières traces : le traitement doit couvrir tout le sous-sol.' },
      { t: 'Des rats dans la cave ou au local à poubelles', x: 'Le signe d’une colonie dans les parties communes : le bailleur ou le syndic organise le traitement, nous rebouchons ensuite les passages.' },
      { t: 'Des terriers dans le jardin', x: 'Voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
      { t: 'Des rongeurs attirés par le compost ou les mangeoires', x: 'Voir [rat dans le compost](/blog/rat-compost) et [nourrir les oiseaux attire les rats](/blog/nourrir-oiseaux-pigeons-attire-rats).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Limeil-Brévannes',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Un pavillon se traite à la charge de son propriétaire, une résidence à celle du **bailleur** ou du **syndic**, un chantier à celle de son **maître d’ouvrage**.',
      'Pour des rats sur la voie publique ou dans un parc, alertez la **mairie de Limeil-Brévannes** ; la forêt de la Grange est entretenue par l’**Office national des forêts**.',
      'Nous intervenons aussi tout autour : [Valenton](/deratisation/valenton), [Bonneuil-sur-Marne](/deratisation/bonneuil-sur-marne), [Créteil](/deratisation/creteil), [Boissy-Saint-Léger](/deratisation/boissy-saint-leger) et [Villeneuve-Saint-Georges](/deratisation/villeneuve-saint-georges).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Limeil-Brévannes ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'La forêt de la Grange fait-elle venir les rongeurs ?', a: 'Une forêt de 110 hectares abrite beaucoup de petits rongeurs, qui s’approchent des maisons en lisière à l’automne et l’hiver. Garages, abris et tas de bois sont à surveiller en priorité.' },
    { q: 'Souris ou mulot : quelle différence pour le traitement ?', a: 'Le mulot vit plutôt dehors et entre surtout à la mauvaise saison ; la souris s’installe durablement dans la maison. Dans les deux cas, nous trouvons et bouchons les entrées et posons des pièges adaptés.' },
    { q: 'J’habite une résidence neuve et je vois des rats : pourquoi ?', a: 'Les chantiers voisins délogent les colonies, qui cherchent un nouvel abri dans les parkings et locaux des immeubles récents. Signalez-le vite au syndic : un traitement rapide évite l’installation.' },
    { q: 'Qui paie la dératisation d’une résidence à Saint-Martin ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Peut-on dératiser sans poison près d’un jardin ou d’un bois ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés.' },
    { q: 'J’ai des trous dans ma pelouse : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
  ],
  sources: [LIMEIL_INSEE, LIMEIL_WIKI, RSD_94, SPF_LEPTO],
}

// ── Nogent-sur-Marne (25/11/2026) ──
const NOGENT_WIKI: Source = { label: 'Wikipédia, Nogent-sur-Marne (coteau, Marne, port de plaisance, quartiers, logement, viaduc)', url: 'https://fr.wikipedia.org/wiki/Nogent-sur-Marne' }
const NOGENT_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94052, Nogent-sur-Marne', url: 'https://geo.api.gouv.fr/communes?code=94052&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['nogent-sur-marne'] = {
  maj: '2026-11-25',
  accroche: 'Un coteau qui descend vers la Marne, un port de plaisance, des guinguettes et le bois de Vincennes à l’ouest : à Nogent-sur-Marne, les rats ont l’eau, le bois et la ville. Nous connaissons le terrain, nous y sommes déjà intervenus.',
  societe: {
    titre: 'Société de dératisation à Nogent-sur-Marne (94130) : une ville en pente vers la Marne',
    paras: [
      'Nogent-sur-Marne compte **32 455 habitants** sur **2,80 km²**. La ville est bâtie **au flanc d’un coteau** qui domine une boucle de la **Marne**, entre 36 et 99 mètres d’altitude, avec beaucoup de rues en pente. Elle touche le **bois de Vincennes** à l’ouest et la Marne au sud, où se trouve le **port de plaisance**, deuxième d’Île-de-France avec **170 emplacements**. Eau, berges, bois et réseaux qui descendent vers la rivière : un terrain que le **surmulot** connaît bien.',
      'Côté habitat, Nogent est surtout une ville d’**appartements** (84,6 % au dernier détail publié), avec des maisons sur les coteaux et en bord de Marne. Restaurants des bords de l’eau, marché, résidences : une société de dératisation y traite autant des **commerces** que des **caves** et des **jardins**.',
      'Nous connaissons Nogent : nous y avons retiré un [nid de frelons dans une cheminée](/blog/nid-frelons-cheminee-nogent-sur-marne#video), un chantier filmé. Notre base de **Saint-Maurice** est à quelques minutes, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Nogent-sur-Marne](/souris/nogent-sur-marne), [cafards à Nogent-sur-Marne](/cafards/nogent-sur-marne), [punaises de lit à Nogent-sur-Marne](/punaises-de-lit/nogent-sur-marne) et [frelons à Nogent-sur-Marne](/destruction-nid-frelon/nogent-sur-marne).',
    ],
  },
  chiffres: [
    { valeur: '32 455', texte: 'habitants (population légale Insee), code postal 94130.', source: NOGENT_INSEE },
    { valeur: '170', texte: 'emplacements au port de plaisance, le deuxième d’Île-de-France après celui de l’Arsenal à Paris.', source: NOGENT_WIKI },
    { valeur: '63 m', texte: 'de dénivelé entre les bords de Marne (36 m) et le haut de la ville (99 m), près du fort de Nogent.', source: NOGENT_WIKI },
    { valeur: '6', texte: 'quartiers : Beauté Baltard, le Bois-Porte de Nogent, Nogent Village, Plaisance, le Port sous la Lune et les Viselets.', source: NOGENT_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Nogent-sur-Marne : la ville quartier par quartier',
    intro: 'Nogent compte six quartiers : **Beauté Baltard**, **le Bois-Porte de Nogent**, **Nogent Village**, **Plaisance** (avec les Maréchaux), **le Port sous la Lune** et **les Viselets**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Le Port sous la Lune et les bords de Marne',
        texte: 'Au sud, le long de la Marne, du **port de plaisance** et des **guinguettes**, l’eau, les berges et les restaurants attirent les rats. Les immeubles et maisons des bords de l’eau doivent surveiller **caves**, **soupiraux** et **locaux à poubelles** ; les restaurants, leurs **réserves**.',
        photo: { src: '/villes/nogent-sur-marne/bords-de-marne-ile-de-beaute.jpg', alt: 'Les bords de Marne à Nogent-sur-Marne vus depuis le quartier de l’île de Beauté', legende: 'Les bords de Marne vus depuis l’île de Beauté : bateaux, berges boisées et guinguettes au bord de l’eau.', credit: 'Contributeur Wikimedia Commons', licence: 'CC BY-SA 1.0', page: W + 'Marne_Nogent.JPG' },
      },
      {
        nom: 'Beauté Baltard et le centre',
        texte: 'Autour du **pavillon Baltard**, du marché et des commerces du centre, la restauration et les commerces de bouche produisent des déchets toute la journée. Pour un professionnel : postes **numérotés**, **registre**, **attestation** et passages hors des heures d’ouverture.',
        photo: { src: '/villes/nogent-sur-marne/pavillon-baltard.jpg', alt: 'Le pavillon Baltard à Nogent-sur-Marne', legende: 'Le pavillon Baltard : autour, marché, commerces et restaurants du centre.', credit: 'Nogent94130', licence: 'CC BY-SA 3.0', page: W + 'Nogent-sur-Marne_Pavillon_Baltard_20110707.jpg' },
      },
      {
        nom: 'Nogent Village et les rues en pente',
        texte: 'Dans le vieux Nogent, autour de l’**église Saint-Saturnin**, les maisons anciennes à flanc de coteau ont des **caves**, de vieux murs et des jardins en pente. Les rongeurs y circulent à couvert : nous inspectons chaque ouverture et rebouchons après le traitement.',
        photo: { src: '/villes/nogent-sur-marne/eglise-saint-saturnin.jpg', alt: 'L’église Saint-Saturnin de Nogent-sur-Marne', legende: 'L’église Saint-Saturnin, au cœur du vieux Nogent : maisons anciennes, caves et jardins en pente.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + '%C3%89glise_Saint_Saturnin_-_Nogent-sur-Marne_(FR94)_-_2023-02-27_-_1.jpg' },
      },
      {
        nom: 'Le Bois-Porte de Nogent et le viaduc',
        texte: 'À l’ouest, en lisière du **bois de Vincennes**, et près du **viaduc** de 1854 qui franchit la vallée, immeubles et maisons côtoient espaces verts, talus ferroviaires et voies du **RER A**. Les rongeurs du bois et des talus s’approchent des **locaux à poubelles** et des jardins.',
        photo: { src: '/villes/nogent-sur-marne/viaduc-vers-1900.jpg', alt: 'Carte postale du viaduc de Nogent-sur-Marne vers 1900', legende: 'Le viaduc de Nogent vers 1900 : construit en 1854, il marque toujours le paysage de la ville.', credit: 'Carte postale ancienne, scan Claude Shoshany', licence: 'Domaine public', page: W + 'NOGENT_-_Vue_panoramique_du_Viaduc.jpg' },
      },
      {
        nom: 'Plaisance, les Maréchaux et les Viselets',
        texte: 'Au nord-est, vers le **fort de Nogent** et le point culminant de la ville, résidences et pavillons partagent caves, parkings et jardins. Le traitement des parties communes se fait avec le **syndic** ou le **bailleur**. Voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Nogent-sur-Marne (94130) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Bords de Marne : regards, soupiraux, caves. Coteau : murs, jardins en pente, vide sanitaire. Restaurant : réserves et cuisine.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Nogent-sur-Marne (94130) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Un rongeur dans un restaurant des bords de Marne', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles) et [cafards à Nogent-sur-Marne](/cafards/nogent-sur-marne).' },
      { t: 'Des rats dans la cave d’un immeuble proche de l’eau', x: 'Le signe d’une colonie dans les sous-sols. Prévenez le syndic par écrit : le traitement doit couvrir les parties communes.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Nogent-sur-Marne](/souris/nogent-sur-marne) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des terriers dans un jardin en pente', x: 'Vieux murs, haies et jardins en pente offrent des abris : voir [le mode de vie du rat](/blog/rat-mode-de-vie).' },
      { t: 'Un rat qui sort des toilettes', x: 'En bas du coteau, près de la Marne, le réseau d’assainissement est un chemin direct : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Nogent-sur-Marne',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Les parties communes d’un immeuble nogentais se traitent donc à la demande du **syndic** ; une maison ou un restaurant, à celle du propriétaire ou de l’exploitant.',
      'Locataire, prévenez votre propriétaire **par écrit**, avec photos. Pour des rats sur les quais ou la voie publique, alertez la **mairie de Nogent-sur-Marne** ; pour le bois de Vincennes, la **Ville de Paris**.',
      'Nous intervenons aussi tout autour : [Le Perreux-sur-Marne](/deratisation/le-perreux-sur-marne), [Fontenay-sous-Bois](/deratisation/fontenay-sous-bois), [Joinville-le-Pont](/deratisation/joinville-le-pont), [Champigny-sur-Marne](/deratisation/champigny-sur-marne), [Vincennes](/deratisation/vincennes), [Bry-sur-Marne](/deratisation/bry-sur-marne) et [Paris 12e](/deratisation/paris-12).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Nogent-sur-Marne ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Restaurant, maison ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Avez-vous déjà travaillé à Nogent-sur-Marne ?', a: 'Oui, notamment pour un nid de frelons dans une cheminée : [l’intervention est filmée](/blog/nid-frelons-cheminee-nogent-sur-marne#video). Notre base de Saint-Maurice est toute proche.' },
    { q: 'Le port et les bords de Marne attirent-ils les rats ?', a: 'Oui : l’eau, les berges et les restaurants sont favorables au surmulot ([mode de vie du rat](/blog/rat-mode-de-vie)). Les immeubles proches doivent surveiller caves, soupiraux et locaux à poubelles.' },
    { q: 'Intervenez-vous dans les restaurants et guinguettes ?', a: 'Oui, hors service, avec postes numérotés, registre et attestation pour vos contrôles d’hygiène : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    { q: 'Qui paie la dératisation d’une copropriété ?', a: 'Les parties communes relèvent du syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Le bois de Vincennes fait-il venir les rongeurs ?', a: 'Un grand espace boisé abrite des rongeurs, qui s’approchent des immeubles et maisons en lisière. Locaux à poubelles, caves et jardins sont à surveiller en priorité.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
  ],
  sources: [NOGENT_INSEE, NOGENT_WIKI, RSD_94, SPF_LEPTO],
}

// ── Orly (25/11/2026) ──
const ORLY_WIKI: Source = { label: 'Wikipédia, Orly (quartiers, grand ensemble, aéroport, bords de Seine, logement, transports)', url: 'https://fr.wikipedia.org/wiki/Orly' }
const ORLY_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94054, Orly', url: 'https://geo.api.gouv.fr/communes?code=94054&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['orly'] = {
  maj: '2026-11-25',
  accroche: 'Entre l’aéroport à l’ouest et la Seine à l’est, un grand ensemble, un vieux village et des quartiers pavillonnaires : à Orly, chaque secteur a ses rongeurs. Nous savons où les chercher.',
  societe: {
    titre: 'Société de dératisation à Orly (94310) : une ville entre aéroport et Seine',
    paras: [
      'Orly compte **24 658 habitants** sur **6,69 km²**. Une partie de son territoire est occupée par l’**aéroport de Paris-Orly**, à l’ouest ; à l’est, la commune touche la **Seine**, où les anciens terrains des bords de fleuve sont en renouvellement. Entre les deux : le **vieil Orly**, le **grand ensemble** et plusieurs quartiers de **pavillons**. Berges, friches, réseaux et zones d’activités : autant de terrains favorables au **surmulot**.',
      'Le **grand ensemble d’Orly** pèse lourd : la **Pierre au Prêtre** compte **1 138 logements sociaux**, les **Aviateurs** **1 564**, sans oublier les Navigateurs, les Hautes Bornes, Calmette ou les Tilleuls. En 2019, **80,4 % des logements** de la ville étaient des appartements. Pour une société de dératisation, ce sont avant tout des **caves**, des **vide-ordures** et des **locaux à poubelles** à traiter avec les bailleurs, et des **jardins** dans les quartiers pavillonnaires.',
      'Nous intervenons à Orly depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Orly](/souris/orly), [punaises de lit à Orly](/punaises-de-lit/orly) et [fourmis à Orly](/fourmis/orly).',
    ],
  },
  chiffres: [
    { valeur: '24 658', texte: 'habitants (population légale Insee), code postal 94310.', source: ORLY_INSEE },
    { valeur: '1 564', texte: 'logements sociaux aux Aviateurs, l’un des quartiers du grand ensemble d’Orly.', source: ORLY_WIKI },
    { valeur: '1 138', texte: 'logements sociaux à la Pierre au Prêtre, autre quartier du grand ensemble.', source: ORLY_WIKI },
    { valeur: '80,4 %', texte: 'des logements sont des appartements (2019), sur 9 946 logements.', source: ORLY_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Orly : la ville quartier par quartier',
    intro: 'Orly compte de nombreux quartiers : le **vieil Orly**, le **centre** autour de la place Gaston-Viens, le **grand ensemble** (Pierre au Prêtre, Aviateurs, Navigateurs, Hautes Bornes, Calmette, Tilleuls), les pavillons de **Georges-Méliès**, de la **Cité Jardin** et du **Bas Clos**, les **bords de Seine** et les zones d’activités. Voici ce que chaque secteur implique.',
    zones: [
      {
        nom: 'Le grand ensemble : Pierre au Prêtre, Aviateurs, Navigateurs',
        texte: 'À l’est et au nord-est, ces quartiers d’habitat collectif rassemblent des milliers de logements autour des mêmes **caves**, **vide-ordures** et **locaux à poubelles**, en pleine rénovation. Un traitement efficace couvre toutes les **parties communes**, en lien avec le **bailleur**, puis nous rebouchons les passages vers les logements.',
        photo: { src: '/villes/orly/vue-aerienne-grand-ensemble.jpg', alt: 'Vue aérienne des quartiers est d’Orly et du parc des sports du Grand-Godet', legende: 'Vue aérienne des quartiers est d’Orly, devant le parc des sports du Grand-Godet : le grand ensemble et ses espaces verts.', credit: 'Suaudeau', licence: 'CC BY-SA 4.0', page: W + 'Vue-aerienne-Orly-Grand-godet-Choisy-le-Roi-au-fond.jpg' },
      },
      {
        nom: 'Le vieil Orly et le centre',
        texte: 'Dans le **vieil Orly**, centre ancien de la ville, les maisons ont des **caves** et des murs anciens ; autour de la **place Gaston-Viens** et des gares du **RER C**, commerces et immeubles partagent sous-sols et locaux à déchets. Nous inspectons chaque ouverture et intervenons dans les commerces hors des heures d’ouverture.',
        photo: { src: '/villes/orly/ancienne-mairie-vieil-orly.jpg', alt: 'L’ancienne mairie dans le vieil Orly', legende: 'L’ancienne mairie, dans le vieil Orly : un centre ancien avec caves et vieux murs.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Ancienne_mairie_Orly_4.jpg' },
      },
      {
        nom: 'Le parc, Georges-Méliès, la Cité Jardin et le Bas Clos',
        texte: 'Les quartiers **pavillonnaires**, entre le centre et l’aéroport ou à l’est du centre ancien, ont jardins, abris et vide sanitaires, et le parc du **château** offre de grands espaces verts. Nous traitons les **terriers** et fermons les accès. Voir [rat dans le compost](/blog/rat-compost) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
        photo: { src: '/villes/orly/chateau-du-parc.jpg', alt: 'Le château du parc d’Orly', legende: 'Le château du parc d’Orly : parcs et jardins sont aussi des abris pour les rongeurs.', credit: 'besopha', licence: 'CC BY-SA 2.0', page: W + 'Le_ch%C3%A2teau_du_parc_d%27Orly_(94).jpg' },
      },
      {
        nom: 'Les bords de Seine et les zones d’activités',
        texte: 'À l’extrême est, les **bords de Seine** sont d’anciennes friches en renouvellement ; à l’ouest, les zones d’activités du **SENIA** et des **Chaudronniers** jouxtent l’aéroport. Entrepôts, quais de chargement et friches attirent les rongeurs : pour une entreprise, postes **numérotés**, **registre** et **attestation**. Voir [nos services aux professionnels](/professionnels).',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Orly (94310) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Grand ensemble : caves, vide-ordures, local à poubelles. Pavillon : jardin, abri, vide sanitaire. Entreprise : quais, stockage, locaux techniques.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Orly (94310) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans la cave ou au vide-ordures d’une cité', x: 'Le signe d’une colonie dans les parties communes. Prévenez le bailleur par écrit : le traitement doit couvrir tout le sous-sol, sinon les rats reviennent.' },
      { t: 'Des rats après des travaux de rénovation', x: 'Démolitions et chantiers délogent les colonies, qui cherchent refuge dans les bâtiments voisins. Agissez dès les premières traces.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Orly](/souris/orly) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des terriers dans le jardin d’un pavillon', x: 'Voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
      { t: 'Un rongeur dans un entrepôt ou un commerce', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles) et [nos services aux professionnels](/professionnels).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Orly',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Dans le grand ensemble, c’est le **bailleur** qui organise la dératisation des parties communes ; un pavillon se traite à la charge de son propriétaire ; une entreprise, à celle de l’exploitant.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique ou dans un parc, alertez la **mairie d’Orly**.',
      'Nous intervenons aussi tout autour : [Choisy-le-Roi](/deratisation/choisy-le-roi), [Thiais](/deratisation/thiais), [Villeneuve-le-Roi](/deratisation/villeneuve-le-roi), [Villeneuve-Saint-Georges](/deratisation/villeneuve-saint-georges), [Rungis](/deratisation/rungis), [Ablon-sur-Seine](/deratisation/ablon-sur-seine) et [Paray-Vieille-Poste](/deratisation/paray-vieille-poste).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Orly ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon, entreprise ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'J’habite aux Aviateurs ou à la Pierre au Prêtre : qui paie la dératisation ?', a: 'Les parties communes (caves, vide-ordures, local à poubelles) relèvent du bailleur. Signalez-lui le problème par écrit, avec photos et dates.' },
    { q: 'Les travaux de rénovation font-ils venir les rats ?', a: 'Les démolitions et chantiers délogent les colonies, qui cherchent un nouvel abri dans les immeubles voisins. Fermez caves et locaux à poubelles, et faites traiter dès les premières traces ([mode de vie du rat](/blog/rat-mode-de-vie)).' },
    { q: 'Intervenez-vous dans les entreprises proches de l’aéroport ?', a: 'Oui : postes numérotés, plan de localisation, registre des passages et attestation pour vos audits, avec contrat de suivi si besoin (voir [nos services aux professionnels](/professionnels)).' },
    { q: 'Qui paie la dératisation d’une copropriété ?', a: 'Les parties communes relèvent du syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'J’ai des trous dans mon jardin : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
  ],
  sources: [ORLY_INSEE, ORLY_WIKI, RSD_94, SPF_LEPTO],
}

// ── Rungis (25/11/2026) ──
const RUNGIS_WIKI: Source = { label: 'Wikipédia, Rungis (MIN, zone Icade, village, plaine de Montjean, logement, transports)', url: 'https://fr.wikipedia.org/wiki/Rungis' }
const RUNGIS_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94065, Rungis', url: 'https://geo.api.gouv.fr/communes?code=94065&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['rungis'] = {
  maj: '2026-11-25',
  accroche: 'Un petit village de 5 600 habitants entouré du plus grand marché de produits frais au monde, d’une zone d’affaires de 350 entreprises et de la plaine de Montjean : à Rungis, la dératisation concerne autant les pavillons que les professionnels.',
  societe: {
    titre: 'Société de dératisation à Rungis (94150) : un village au cœur d’un pôle économique',
    paras: [
      'Rungis ne compte que **5 611 habitants** sur **4,20 km²**, mais la commune est connue dans le monde entier pour son **marché d’intérêt national**, le plus grand marché de produits frais au monde, partagé avec Chevilly-Larue. Elle accueille aussi la zone d’activités **Icade** (ancien Silic) : **350 entreprises** et **12 000 emplois** sur **63 hectares**, le centre commercial **Belle Épine**, une plateforme logistique et une zone hôtelière, à deux kilomètres de l’aéroport d’Orly. Denrées, entrepôts, quais et bennes : un milieu où les rongeurs trouvent à manger toute l’année.',
      'À côté de ce pôle économique, Rungis reste un **village** : connu depuis 1124, il garde son centre ancien et une forte part de **maisons**, **41,7 % des logements** en 2018. Au sud, la **plaine de Montjean**, longtemps agricole, accueille un nouveau quartier. Une société de dératisation y traite donc des **pavillons avec jardin** autant que des **sites professionnels**.',
      'Nous intervenons à Rungis depuis notre base de **Saint-Maurice**, 7 jours sur 7, pour les particuliers comme pour les entreprises.',
      'Nos autres pages pour la ville : [punaises de lit à Rungis](/punaises-de-lit/rungis) et [nos interventions à Rungis](/zones/val-de-marne/rungis).',
    ],
  },
  chiffres: [
    { valeur: '5 611', texte: 'habitants (population légale Insee), code postal 94150.', source: RUNGIS_INSEE },
    { valeur: '350', texte: 'entreprises et 12 000 emplois sur les 63 hectares de la zone Icade, ancien Silic.', source: RUNGIS_WIKI },
    { valeur: '41,7 %', texte: 'des logements sont des maisons individuelles (2018), sur 2 503 logements.', source: RUNGIS_WIKI },
    { valeur: '1124', texte: 'première mention du village, dont la source alimentait Paris par les aqueducs d’Arcueil.', source: RUNGIS_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Rungis : la commune secteur par secteur',
    intro: 'Du **marché d’intérêt national** à la **zone Icade**, du **village** et de la **place Louis-XIII** à la **plaine de Montjean**, voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Le marché d’intérêt national et la logistique',
        texte: 'Fruits, légumes, viandes, poissons, emballages et bennes : le **MIN** et les plateformes logistiques concentrent des quantités de denrées. Pour un grossiste, un transporteur ou un restaurant d’entreprise : **postes numérotés** autour des bâtiments, **pièges** près des stocks, **plan de localisation**, **registre** et **attestation** pour vos audits d’hygiène.',
        photo: { src: '/villes/rungis/marche-interet-national.jpg', alt: 'Étalage de fruits et légumes au marché d’intérêt national de Rungis', legende: 'Le marché d’intérêt national de Rungis : des denrées en quantité, qui exigent une protection permanente contre les rongeurs.', credit: 'Nick Saltmarsh', licence: 'CC BY 2.0', page: W + 'Wholesale_display_Rungis.jpg' },
      },
      {
        nom: 'La zone Icade, Belle Épine et les hôtels',
        texte: 'Bureaux, sièges sociaux, restaurants d’entreprise, hôtels et centre commercial **Belle Épine** : chaque site a ses cuisines, ses réserves et ses locaux à déchets. Nous proposons un **contrat de suivi** avec visites régulières et rapport, adapté aux exigences des grandes entreprises. Voir [nos services aux professionnels](/professionnels).',
      },
      {
        nom: 'Le village et la place Louis-XIII',
        texte: 'Le **centre ancien** de Rungis, autour de la **place Louis-XIII** et de ses commerces, garde des maisons avec **caves** et jardins. Les rongeurs des zones voisines s’en approchent : nous inspectons les **soupiraux**, les **regards** et les abris, et intervenons dans les commerces hors des heures d’ouverture.',
        photo: { src: '/villes/rungis/place-louis-xiii-village.jpg', alt: 'La place Louis-XIII au centre de Rungis', legende: 'La place Louis-XIII, au cœur du village : commerces, terrasses et maisons anciennes.', credit: 'besopha', licence: 'CC BY-SA 2.0', page: W + 'Place_Louis_XIII_Rungis.jpg' },
      },
      {
        nom: 'Les quartiers pavillonnaires et le parc de la Colline Cacao',
        texte: 'Avec près de quatre logements sur dix en maison, Rungis compte de nombreux **jardins**, des haies et des espaces verts comme le parc de la **Colline Cacao**. Composteurs, abris, vide sanitaires : nous traitons les **terriers** et fermons les accès. Voir [rat dans le compost](/blog/rat-compost).',
        photo: { src: '/villes/rungis/parc-colline-cacao.jpg', alt: 'Le parc de la Colline Cacao à Rungis', legende: 'Le parc de la Colline Cacao : espaces verts et jardins au contact des quartiers de maisons.', credit: 'besopha', licence: 'CC BY-SA 2.0', page: W + 'Parc_Colline_Cacao_Rungis.jpg' },
      },
      {
        nom: 'La plaine de Montjean et le nouveau quartier',
        texte: 'Au sud, la **plaine de Montjean**, longtemps cultivée, accueille un nouveau quartier en construction. Champs, friches et terrassements délogent **mulots**, **souris** et **rats**, qui cherchent un abri dans les bâtiments voisins, surtout à l’automne. Il faut fermer les accès dès les premières traces.',
        photo: { src: '/villes/rungis/plaine-de-montjean.jpg', alt: 'La rigole gallo-romaine dans la plaine de Montjean, avec le nouveau quartier en construction', legende: 'La plaine de Montjean, avec la rigole gallo-romaine et le nouveau quartier en construction : les terrassements délogent les rongeurs des champs.', credit: 'Like tears in rain', licence: 'CC BY-SA 4.0', page: W + 'Rigole_gallo-romaine_dans_la_plaine_de_Montjean_(3),_Rungis.jpg' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Rungis (94150) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Pavillon : jardin, abri, garage, vide sanitaire. Entrepôt ou bureau : quais, stocks, cuisines, locaux techniques, abords extérieurs.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés et numérotés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide, près des denrées.' },
      { t: 'Rebouchage, suivi et rapport', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations, contrat de suivi pour les entreprises. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Rungis (94150) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rongeurs dans un entrepôt alimentaire ou une chambre froide', x: 'Emballages rongés, crottes près des palettes : postes à l’extérieur, pièges à l’intérieur près des denrées, registre et attestation. Voir [nos services aux professionnels](/professionnels).' },
      { t: 'Un rongeur dans un restaurant d’entreprise ou un hôtel', x: 'Postes numérotés, passages hors service, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
      { t: 'Des souris ou des mulots dans la maison à l’automne', x: 'Près des champs et des espaces verts, ils cherchent la chaleur : voir [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des terriers dans le jardin', x: 'Voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
      { t: 'Des bruits dans les combles ou le vide sanitaire', x: 'Voir [rats dans les combles](/blog/rats-dans-les-combles) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, exploitant : qui fait quoi à Rungis',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. À Rungis, une maison se traite à la charge de son propriétaire, une résidence à celle du **syndic**, et un site professionnel à celle de son **exploitant**, qui doit souvent pouvoir présenter un plan de lutte lors des contrôles.',
      'Pour des rats sur la voie publique ou dans un parc, alertez la **mairie de Rungis**.',
      'Nous intervenons aussi tout autour : [Chevilly-Larue](/deratisation/chevilly-larue), [Thiais](/deratisation/thiais), [Orly](/deratisation/orly), [Fresnes](/deratisation/fresnes), [Wissous](/deratisation/wissous) et [Paray-Vieille-Poste](/deratisation/paray-vieille-poste).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Rungis ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon, entrepôt, bureau ou restaurant : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Proposez-vous des contrats aux entreprises de Rungis ?', a: 'Oui : contrat de suivi avec visites régulières, postes numérotés, plan de localisation, registre et rapport après chaque passage (voir [nos services aux professionnels](/professionnels)).' },
    { q: 'Intervenez-vous près des denrées alimentaires ?', a: 'Oui, avec des méthodes adaptées : pièges mécaniques et [piège Ekomille sans raticide](/services/deratisation-ecologique) à l’intérieur, appâts uniquement en postes verrouillés à l’extérieur.' },
    { q: 'Le marché et la zone d’activités attirent-ils les rats vers les maisons ?', a: 'Les zones où l’on stocke de la nourriture attirent les rongeurs ([mode de vie du rat](/blog/rat-mode-de-vie)). Les maisons voisines doivent garder poubelles, compost et caves bien fermés.' },
    { q: 'Les travaux de la plaine de Montjean font-ils venir des rongeurs ?', a: 'Les terrassements délogent mulots, souris et rats des anciens champs. Fermez garages et abris, et signalez-nous les premières traces : un traitement rapide évite l’installation.' },
    { q: 'J’ai des trous dans mon jardin : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Qui paie la dératisation d’une résidence ?', a: 'Les parties communes relèvent du syndic ou du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
  ],
  sources: [RUNGIS_INSEE, RUNGIS_WIKI, MIN_RUNGIS_WIKI, RSD_94, SPF_LEPTO],
}

// ── Saint-Mandé (25/11/2026) ──
const STMANDE_WIKI: Source = { label: 'Wikipédia, Saint-Mandé (superficie, bois de Vincennes, lac, logement, transports)', url: 'https://fr.wikipedia.org/wiki/Saint-Mand%C3%A9' }
const STMANDE_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94067, Saint-Mandé', url: 'https://geo.api.gouv.fr/communes?code=94067&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['saint-mande'] = {
  maj: '2026-11-25',
  accroche: 'Une des plus petites communes d’Île-de-France, presque entièrement en appartements, collée au bois de Vincennes et au lac de Saint-Mandé : ici, les rongeurs passent du bois aux caves des immeubles. Nous fermons le passage.',
  societe: {
    titre: 'Société de dératisation à Saint-Mandé (94160) : une petite ville d’immeubles au bord du bois',
    paras: [
      'Saint-Mandé compte **21 071 habitants** sur **0,92 km²** seulement : c’est la **cinquième plus petite commune d’Île-de-France** par sa superficie, soit plus de **22 000 habitants au km²**. La ville a été amputée au XIXe siècle et a perdu le bois de Vincennes, rattaché à Paris en 1929. Il reste une ville d’**immeubles** serrés, avec **95,7 % d’appartements** en 2022, collée au **bois de Vincennes** et au **lac de Saint-Mandé**.',
      'Cette configuration explique la plupart des appels : des **souris** dans les cuisines, des **rats** dans les **caves** et les **locaux à poubelles** des immeubles qui bordent le bois, le long de la **chaussée de l’Étang**. Dans des immeubles anciens aux caves reliées entre elles, un traitement isolé ne suffit pas : il faut traiter les **parties communes** avec le **syndic**.',
      'Notre base de **Saint-Maurice** est de l’autre côté du bois : nous sommes à Saint-Mandé en quelques minutes, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Saint-Mandé](/souris/saint-mande), [cafards à Saint-Mandé](/cafards/saint-mande), [punaises de lit à Saint-Mandé](/punaises-de-lit/saint-mande) et [puces à Saint-Mandé](/puces/saint-mande).',
    ],
  },
  chiffres: [
    { valeur: '21 071', texte: 'habitants (population légale Insee), code postal 94160.', source: STMANDE_INSEE },
    { valeur: '0,92 km²', texte: 'de superficie : la cinquième plus petite commune d’Île-de-France.', source: STMANDE_WIKI },
    { valeur: '95,7 %', texte: 'des logements sont des appartements (2022), sur 11 902 logements.', source: STMANDE_WIKI },
    { valeur: '1929', texte: 'année où le bois de Vincennes, jusque-là dépendant de Saint-Mandé, est rattaché à Paris.', source: STMANDE_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Saint-Mandé : la ville secteur par secteur',
    intro: 'De la **chaussée de l’Étang** et du **lac** au centre et aux avenues proches de Paris, voici ce que chaque secteur implique pour une dératisation dans cette ville très dense.',
    zones: [
      {
        nom: 'Le lac de Saint-Mandé et la lisière du bois',
        texte: 'Le **lac de Saint-Mandé**, dans le bois de Vincennes, et les pelouses qui l’entourent attirent les rongeurs : eau, végétation et restes de pique-nique. Les immeubles en bordure du bois sont les premiers à voir arriver rats et souris, par les **soupiraux**, les **caves** et les **locaux à poubelles**.',
        photo: { src: '/villes/saint-mande/lac-de-saint-mande.jpg', alt: 'Le lac de Saint-Mandé dans le bois de Vincennes', legende: 'Le lac de Saint-Mandé, dans le bois de Vincennes : eau et végétation à deux pas des immeubles.', credit: 'stone40', licence: 'CC BY-SA 3.0', page: W + 'Lac_de_Saint-Mand%C3%A9_in_2014_(1).jpg' },
      },
      {
        nom: 'La chaussée de l’Étang et les immeubles en bordure du bois',
        texte: 'La **chaussée de l’Étang** longe le bois au niveau du lac, bordée de grands immeubles d’un côté et d’arbres de l’autre. Les rongeurs passent du bois aux sous-sols : nous traitons les **caves** et les **cours**, posons des grilles sur les soupiraux et rebouchons les passages.',
        photo: { src: '/villes/saint-mande/chaussee-de-l-etang.jpg', alt: 'La chaussée de l’Étang à Saint-Mandé, entre immeubles et bois de Vincennes', legende: 'La chaussée de l’Étang : les immeubles d’un côté, le bois de Vincennes de l’autre.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Chauss%C3%A9e_%C3%89tang_-_Saint-Mand%C3%A9_(FR94)_-_2023-03-23_-_1.jpg' },
      },
      {
        nom: 'Le centre, les commerces et la ligne 1',
        texte: 'Autour des stations **Saint-Mandé** et **Bérault** de la ligne 1, de la mairie et de l’**avenue Gambetta**, restaurants, boulangeries et commerces de bouche partagent caves et cours intérieures. Pour un commerce : postes **numérotés**, **registre**, **attestation** et passages hors des heures d’ouverture.',
        photo: { src: '/villes/saint-mande/station-metro-saint-mande.jpg', alt: 'La station de métro Saint-Mandé et les immeubles voisins', legende: 'La station Saint-Mandé (ligne 1) et ses immeubles : commerces au rez-de-chaussée, caves en dessous.', credit: 'Contributeur Wikimedia Commons', licence: 'Domaine public', page: W + 'St-mande_13.JPG' },
      },
      {
        nom: 'Les grandes institutions et les résidences',
        texte: 'La ville accueille l’**hôpital Bégin**, le siège de l’**IGN** et de **Météo-France** : de grands sites avec cuisines collectives, locaux techniques et espaces verts. Côté habitat, les copropriétés anciennes et récentes demandent un traitement des **parties communes** organisé par le **syndic**.',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Saint-Mandé (94160) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'L’enquête dans l’immeuble', x: 'Cuisine, gaines et plinthes chez vous ; caves, cour, local à poubelles et soupiraux côté bois dans les parties communes.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Saint-Mandé (94160) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des souris dans la cuisine d’un appartement', x: 'Le cas le plus fréquent : voir [souris à Saint-Mandé](/souris/saint-mande), [par où entrent les souris](/blog/souris-par-ou-entrent-elles) et [rat derrière l’électroménager](/blog/rat-piege-cuisine-electromenager).' },
      { t: 'Des rats dans la cave d’un immeuble proche du bois', x: 'Les rongeurs du bois rejoignent les sous-sols par les soupiraux. Prévenez le syndic par écrit : le traitement doit couvrir toutes les caves.' },
      { t: 'Des bruits dans les murs ou le plafond', x: 'Dans les immeubles anciens, les rongeurs circulent dans les cloisons et les planchers : voir [rat dans les murs et cloisons](/blog/rat-dans-les-murs-cloisons).' },
      { t: 'Un rongeur dans un restaurant ou un commerce', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles) et [cafards à Saint-Mandé](/cafards/saint-mande).' },
      { t: 'Un devis anormalement cher', x: 'Méfiez-vous des prix annoncés au téléphone puis multipliés sur place : voir [les arnaques à la dératisation](/blog/arnaques-deratisation-nuisibles).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Saint-Mandé',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. À Saint-Mandé, presque tout le monde vit en copropriété : c’est au **syndic** de faire traiter les parties communes, et à chacun son logement.',
      'Locataire, prévenez votre propriétaire **par écrit**, avec photos. Pour des rats sur la voie publique, alertez la **mairie de Saint-Mandé** ; pour le bois de Vincennes et le lac, la **Ville de Paris**.',
      'Nous intervenons aussi tout autour : [Vincennes](/deratisation/vincennes), [Montreuil](/deratisation/montreuil), [Fontenay-sous-Bois](/deratisation/fontenay-sous-bois), [Charenton-le-Pont](/deratisation/charenton-le-pont), [Paris 12e](/deratisation/paris-12) et [Paris 20e](/deratisation/paris-20).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Saint-Mandé ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Commerce ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Le bois de Vincennes et le lac font-ils venir les rats ?', a: 'Oui : un grand espace boisé avec un lac abrite des rongeurs, qui s’approchent des immeubles en lisière ([mode de vie du rat](/blog/rat-mode-de-vie)). Caves, soupiraux et locaux à poubelles sont à surveiller.' },
    { q: 'J’ai des souris : faut-il traiter tout l’immeuble ?', a: 'Souvent, oui. Si elles viennent des caves ou des gaines, nous traitons votre logement et conseillons au syndic de traiter les parties communes ([par où entrent les souris](/blog/souris-par-ou-entrent-elles)).' },
    { q: 'Qui paie la dératisation des caves d’une copropriété ?', a: 'Le syndicat des copropriétaires, par le syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Intervenez-vous dans les commerces de Saint-Mandé ?', a: 'Oui, hors des heures d’ouverture, avec postes numérotés, registre et attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    { q: 'Peut-on dératiser sans poison dans un appartement avec chat ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Saint-Mandé ?', a: 'Oui : notre base de Saint-Maurice est de l’autre côté du bois. Nous intervenons 7j/7, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [STMANDE_INSEE, STMANDE_WIKI, RSD_94, SPF_LEPTO],
}

// ── Saint-Maurice (25/11/2026) : la ville de notre base ──
const STMAURICE_WIKI: Source = { label: 'Wikipédia, Saint-Maurice (Val-de-Marne) (Marne, plateau de Gravelle, A4, hôpitaux, quartiers)', url: 'https://fr.wikipedia.org/wiki/Saint-Maurice_(Val-de-Marne)' }
const STMAURICE_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94069, Saint-Maurice', url: 'https://geo.api.gouv.fr/communes?code=94069&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['saint-maurice'] = {
  maj: '2026-11-25',
  accroche: 'Saint-Maurice, c’est chez nous : notre base est ici. Entre la Marne, l’A4, le plateau de Gravelle et le bois de Vincennes, nous connaissons chaque rue, et nous intervenons en quelques minutes.',
  societe: {
    titre: 'Société de dératisation à Saint-Maurice (94410) : notre ville, notre base',
    paras: [
      'Allo Nuisible IDF est **basé à Saint-Maurice**. Pour vous, cela veut dire un technicien chez vous en quelques minutes, 7 jours sur 7, souvent le jour même, **sans majoration** la nuit, le week-end ni les jours fériés, et une équipe qui connaît le terrain par cœur.',
      'La ville compte **14 506 habitants** sur **1,45 km²**. Elle s’étire le long de la **Marne** sur **plus de 3 km**, jusqu’à Charenton, avec le **chemin de halage du Moulin des Corbeaux** et le **bras de Gravelle**. Au-dessus, le **plateau de Gravelle** domine la vallée d’une trentaine de mètres et touche le **bois de Vincennes**. Entre les deux passe l’**A4**, construite en 1974-1975 sur le tracé de l’ancien **canal de Saint-Maurice**, remblayé dans les années 1950. Eau, talus, bois et sous-sols : tout ce que le **surmulot** recherche.',
      'Nos autres pages pour la ville : [souris à Saint-Maurice](/souris/saint-maurice), [cafards à Saint-Maurice](/cafards/saint-maurice), [punaises de lit à Saint-Maurice](/punaises-de-lit/saint-maurice) et [frelons à Saint-Maurice](/destruction-nid-frelon/saint-maurice).',
    ],
  },
  chiffres: [
    { valeur: '14 506', texte: 'habitants (population légale Insee), code postal 94410.', source: STMAURICE_INSEE },
    { valeur: '3 km', texte: 'de bords de Marne, avec le chemin de halage du Moulin des Corbeaux et le bras de Gravelle.', source: STMAURICE_WIKI },
    { valeur: '30 m', texte: 'de dénivelé entre la vallée et le plateau de Gravelle, en bordure du bois de Vincennes.', source: STMAURICE_WIKI },
    { valeur: '7', texte: 'quartiers : Plateau, Centre, Val d’Osne, Ancienne gendarmerie, Gravelle, Écluse et Panoramis.', source: STMAURICE_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Saint-Maurice : la ville quartier par quartier',
    intro: 'Saint-Maurice se partage entre le **Plateau**, le **Centre**, le **Val d’Osne**, l’**Ancienne gendarmerie**, **Gravelle**, l’**Écluse** et le **Panoramis**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les bords de Marne, l’Écluse et l’île aux Corbeaux',
        texte: 'Le long du **chemin du Moulin des Corbeaux**, sous les ponts de l’A4, l’eau, les berges et les talus forment un corridor idéal pour les rats. Les immeubles et maisons des **quais** et du quartier de l’**Écluse** doivent surveiller **caves**, **soupiraux** et **regards**, surtout quand la Marne monte.',
        photo: { src: '/villes/saint-maurice/chemin-du-moulin-des-corbeaux.jpg', alt: 'Le chemin du Moulin des Corbeaux le long de la Marne à Saint-Maurice, sous l’A4', legende: 'Le chemin du Moulin des Corbeaux, entre la Marne et les talus, sous le viaduc de l’A4 : un corridor pour les rongeurs.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'All%C3%A9e_Moulin_Corbeaux_-_Saint-Maurice_(FR94)_-_2020-08-24_-_4.jpg' },
      },
      {
        nom: 'Le quai de la République et le Centre',
        texte: 'Sur le **quai de la République** et dans le centre, immeubles anciens et récents bordent la rivière et l’autoroute. Caves, cours et locaux à poubelles partagés : le traitement des parties communes se fait avec le **syndic**, puis nous rebouchons les passages vers les logements.',
        photo: { src: '/villes/saint-maurice/quai-de-la-republique.jpg', alt: 'Le quai de la République à Saint-Maurice', legende: 'Le quai de la République : des immeubles à quelques mètres de la Marne et de ses berges.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Quai_R%C3%A9publique_-_Saint-Maurice_(FR94)_-_2021-01-30_-_1.jpg' },
      },
      {
        nom: 'Le Plateau, Gravelle et la lisière du bois',
        texte: 'Sur le **plateau de Gravelle**, au contact du **bois de Vincennes**, maisons, petites résidences et équipements côtoient un grand espace boisé. Souris et rats du bois s’approchent des **jardins**, des **garages** et des **locaux à poubelles**. Nous traitons et fermons les accès. Voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
        photo: { src: '/villes/saint-maurice/maison-natale-delacroix.jpg', alt: 'La maison natale d’Eugène Delacroix à Saint-Maurice', legende: 'La maison natale d’Eugène Delacroix : Saint-Maurice garde un bâti ancien avec caves et jardins.', credit: 'Parisette', licence: 'Domaine public', page: W + 'Maison_natale_Delacroix.JPG' },
      },
      {
        nom: 'Les hôpitaux et les grands sites',
        texte: 'Les **Hôpitaux de Saint-Maurice**, dont l’**hôpital Esquirol**, réunis depuis 2024 dans les Hôpitaux Paris Est Val-de-Marne, occupent un vaste domaine avec cuisines collectives, locaux techniques et espaces verts. Pour ce type de site : postes **sécurisés** et **numérotés**, **plan de localisation**, **registre** et **attestation**.',
        photo: { src: '/villes/saint-maurice/chapelle-hopital-esquirol.jpg', alt: 'La chapelle de l’hôpital Esquirol à Saint-Maurice', legende: 'La chapelle de l’hôpital Esquirol : un grand domaine hospitalier, avec ses espaces verts et ses locaux techniques.', credit: '74laprune', licence: 'CC0', page: W + 'Chapelle_hopital_St-Maurice.jpg' },
      },
      {
        nom: 'Le Panoramis, le Val d’Osne et l’Ancienne gendarmerie',
        texte: 'Au **Panoramis**, pavillons et bureaux ont laissé place à de nouveaux immeubles ; les chantiers délogent les colonies, qui cherchent refuge dans les bâtiments voisins. Au **Val d’Osne** et à l’**Ancienne gendarmerie**, résidences et maisons partagent caves, parkings et jardins.',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Saint-Maurice (94410) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Un appel, un technicien tout de suite', x: 'Nous sommes sur place : envoyez une photo, vous avez le prix, et nous venons souvent le jour même. Dès 120 € pour un appartement.' },
      { t: 'Le chemin des rongeurs', x: 'Bords de Marne : regards, soupiraux, caves. Plateau : jardin, garage, vide sanitaire. Immeuble : caves, parkings, local à poubelles.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi de proximité', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations : à Saint-Maurice, les visites de contrôle sont rapides. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Saint-Maurice (94410) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans la cave d’un immeuble des quais', x: 'Quand la Marne monte, les rats quittent les berges pour les sous-sols. Nous traitons, puis bouchons soupiraux et passages.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Saint-Maurice](/souris/saint-maurice) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des rongeurs après un chantier voisin', x: 'Les démolitions et terrassements délogent les colonies : agissez dès les premières traces, avec le syndic.' },
      { t: 'Des terriers dans un jardin du plateau', x: 'Voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
      { t: 'Un rat qui sort des toilettes', x: 'Au bord de la Marne, le réseau d’assainissement est un chemin direct : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Saint-Maurice',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Les parties communes d’un immeuble se traitent à la demande du **syndic** ou du **bailleur**, une maison à celle de son propriétaire.',
      'Locataire, prévenez votre propriétaire **par écrit**, avec photos. Pour des rats sur les berges ou la voie publique, alertez la **mairie de Saint-Maurice** ; pour le bois de Vincennes, la **Ville de Paris**.',
      'Depuis Saint-Maurice, nous intervenons aussi dans toutes les villes voisines : [Charenton-le-Pont](/deratisation/charenton-le-pont), [Joinville-le-Pont](/deratisation/joinville-le-pont), [Maisons-Alfort](/deratisation/maisons-alfort), [Saint-Maur-des-Fossés](/deratisation/saint-maur-des-fosses), [Alfortville](/deratisation/alfortville), [Vincennes](/deratisation/vincennes) et [Paris 12e](/deratisation/paris-12).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Saint-Maurice ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Maison, commerce ou copropriété : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Êtes-vous vraiment basés à Saint-Maurice ?', a: 'Oui, notre base est à Saint-Maurice. C’est pour cela que nous intervenons très vite ici et dans les villes voisines, 7j/7, sans majoration la nuit, le week-end ni les jours fériés.' },
    { q: 'La Marne et l’A4 attirent-elles les rats ?', a: 'Les berges, l’eau et les talus de l’autoroute forment un corridor pour le surmulot ([mode de vie du rat](/blog/rat-mode-de-vie)). Les immeubles des quais doivent surveiller caves, soupiraux et locaux à poubelles.' },
    { q: 'Le bois de Vincennes fait-il venir les rongeurs sur le plateau ?', a: 'Un grand espace boisé abrite des rongeurs, qui s’approchent des maisons et résidences en lisière, surtout l’hiver. Garages, abris et caves sont à surveiller.' },
    { q: 'Qui paie la dératisation d’une copropriété ?', a: 'Les parties communes relèvent du syndic. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Intervenez-vous dans les établissements de santé ?', a: 'Oui, avec des postes sécurisés et numérotés, un plan de localisation, un registre des passages et une attestation, en accord avec les services techniques.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
  ],
  sources: [STMAURICE_INSEE, STMAURICE_WIKI, RSD_94, SPF_LEPTO],
}

// ── Santeny (25/11/2026) ──
const SANTENY_WIKI: Source = { label: 'Wikipédia, Santeny (Plateau briard, forêt de Notre-Dame, Réveillon, logement)', url: 'https://fr.wikipedia.org/wiki/Santeny' }
const FORET_ND_WIKI: Source = { label: 'Wikipédia, Forêt de Notre-Dame (2 200 ha, forêt domaniale, Arc boisé)', url: 'https://fr.wikipedia.org/wiki/For%C3%AAt_de_Notre-Dame' }
const SANTENY_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94070, Santeny', url: 'https://geo.api.gouv.fr/communes?code=94070&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['santeny'] = {
  maj: '2026-11-25',
  accroche: 'Un village de la Brie, aux trois quarts en maisons, entre la forêt de Notre-Dame et la rivière du Réveillon : à Santeny, ce sont surtout les souris, les mulots et les rats des champs qui frappent à la porte à l’automne.',
  societe: {
    titre: 'Société de dératisation à Santeny (94440) : un village de maisons entre forêt et rivière',
    paras: [
      'Santeny compte **3 913 habitants** sur **10 km²**, sur le **Plateau briard**, à 22 km de Notre-Dame de Paris. C’est une commune encore très rurale : elle est **bordée au nord par la forêt de Notre-Dame**, un massif domanial de **2 200 hectares**, et **traversée par le Réveillon**, une rivière qui file vers l’Yerres. Champs, bois, berges et jardins : les petits rongeurs y sont nombreux.',
      'Le village est aussi très pavillonnaire : en 2020, **76,9 % des logements** étaient des **maisons individuelles**. Pour une société de dératisation, Santeny, ce sont donc des **maisons avec jardin**, des **garages**, des **combles** et des **vide sanitaires**, plus rarement des parties communes. Les problèmes arrivent surtout à l’**automne**, quand souris et mulots quittent les champs pour la chaleur des maisons.',
      'Nous intervenons à Santeny depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Santeny](/souris/santeny), [cafards à Santeny](/cafards/santeny), [punaises de lit à Santeny](/punaises-de-lit/santeny) et [chenilles processionnaires à Santeny](/chenilles-processionnaires/santeny).',
    ],
  },
  chiffres: [
    { valeur: '3 913', texte: 'habitants (population légale Insee), code postal 94440.', source: SANTENY_INSEE },
    { valeur: '76,9 %', texte: 'des logements sont des maisons individuelles (2020), sur 1 652 logements.', source: SANTENY_WIKI },
    { valeur: '2 200 ha', texte: 'pour la forêt de Notre-Dame, qui borde Santeny au nord.', source: FORET_ND_WIKI },
    { valeur: '1138', texte: 'première mention du bourg, qui garde la ferme des Lyons et son colombier.', source: SANTENY_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats et les souris à Santeny : le village secteur par secteur',
    intro: 'Des **lisières de la forêt de Notre-Dame** aux **bords du Réveillon**, du **centre ancien** aux **quartiers de pavillons**, voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les lisières de la forêt de Notre-Dame',
        texte: 'Au nord, la **forêt de Notre-Dame** et ses mares abritent une petite faune abondante. Les maisons en lisière voient arriver **mulots**, **souris** et parfois **rats** dans les **garages**, les **abris** et les **tas de bois**. Nous protégeons les points d’entrée de la maison et traitons le jardin.',
        photo: { src: '/villes/santeny/foret-de-notre-dame-mare.jpg', alt: 'Une mare dans la forêt de Notre-Dame, qui borde Santeny', legende: 'Une mare dans la forêt de Notre-Dame, massif de 2 200 hectares qui borde Santeny au nord.', credit: 'Thesupermat', licence: 'CC BY-SA 3.0', page: W + 'For%C3%AAt_de_Notre-Dame_-_une_mare_-_001.jpg' },
      },
      {
        nom: 'Les bords du Réveillon',
        texte: 'Le **Réveillon** traverse la commune entre murs de pierre et végétation. Les berges offrent au **surmulot** de l’eau et des abris ; les maisons riveraines doivent surveiller **soupiraux**, **regards** et pied des murs, surtout après de fortes pluies.',
        photo: { src: '/villes/santeny/riviere-reveillon.jpg', alt: 'La rivière du Réveillon sous un pont de pierre à Santeny', legende: 'Le Réveillon près de l’avenue du Général-Leclerc : berges boisées et vieux murs, des abris pour les rongeurs.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Rivi%C3%A8re_R%C3%A9veillon_pr%C3%A8s_Avenue_G%C3%A9n%C3%A9ral_Leclerc_-_Santeny_(FR94)_-_2022-05-21_-_1.jpg' },
      },
      {
        nom: 'Le centre ancien et la ferme des Lyons',
        texte: 'Au cœur du village, l’ancienne **ferme des Lyons** et son colombier rappellent le passé agricole de Santeny. Dans le bâti ancien, **granges**, **caves**, **dépendances** et murs de pierre offrent de nombreuses cachettes : nous les inspectons une à une et rebouchons après le traitement.',
        photo: { src: '/villes/santeny/ferme-des-lyons-colombier.jpg', alt: 'L’ancienne ferme des Lyons et son colombier à Santeny', legende: 'L’ancienne ferme des Lyons et son colombier, au centre du village : dépendances et murs anciens.', credit: 'Pline', licence: 'CC BY-SA 3.0', page: W + 'Dovecote_of_the_ancien_farm_builiding_des_Lyons_in_Santeny_P1080961.JPG' },
      },
      {
        nom: 'Les quartiers de pavillons et les champs',
        texte: 'Les quartiers de **maisons individuelles**, souvent en bordure de **champs**, voient les rongeurs entrer dès les premiers froids. Composteurs, poulaillers, abris et vide sanitaires : nous traitons et fermons les accès. Voir [rat dans le compost](/blog/rat-compost) et [rats dans les combles](/blog/rats-dans-les-combles).',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Santeny (94440) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes, des terriers ou des dégâts : nous identifions rat, souris ou mulot et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le tour de la maison', x: 'Garage, abri, combles, vide sanitaire, cave, jardin et composteur : nous trouvons par où les rongeurs entrent.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Santeny (94440) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des souris dans la maison à l’automne', x: 'Le cas le plus fréquent dans un village entouré de champs et de bois : voir [souris à Santeny](/souris/santeny) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des bruits dans les combles', x: 'Grattements la nuit sous le toit : voir [rats dans les combles](/blog/rats-dans-les-combles). Nous trouvons l’entrée avant de traiter.' },
      { t: 'Des rongeurs dans une grange, un garage ou un abri', x: 'Grain, croquettes, foin et objets stockés attirent les rongeurs : rangement en bacs fermés, pièges et postes sécurisés.' },
      { t: 'Des terriers dans le jardin', x: 'Voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
      { t: 'Des rats attirés par le poulailler ou les mangeoires', x: 'Voir [nourrir les oiseaux attire les rats](/blog/nourrir-oiseaux-pigeons-attire-rats) et [rat dans le compost](/blog/rat-compost).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire : qui fait quoi à Santeny',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. À Santeny, où les trois quarts des logements sont des maisons, c’est le plus souvent au **propriétaire** de faire appel à une entreprise de dératisation.',
      'Pour des rats sur la voie publique ou le long du Réveillon, alertez la **mairie de Santeny** ; la forêt de Notre-Dame est une forêt domaniale.',
      'Nous intervenons aussi tout autour : [Sucy-en-Brie](/deratisation/sucy-en-brie), [Boissy-Saint-Léger](/deratisation/boissy-saint-leger) et [Limeil-Brévannes](/deratisation/limeil-brevannes).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Santeny ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Maison avec jardin, grange ou dépendances : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Pourquoi des souris chaque automne dans ma maison ?', a: 'Entre champs et forêt, les souris et les mulots cherchent la chaleur quand il fait froid. Nous trouvons et bouchons leurs entrées ([par où entrent les souris](/blog/souris-par-ou-entrent-elles)).' },
    { q: 'Souris ou mulot : quelle différence ?', a: 'Le mulot vit surtout dehors et entre à la mauvaise saison ; la souris domestique s’installe durablement dans la maison. Dans les deux cas, nous bouchons les entrées et posons des pièges adaptés.' },
    { q: 'La forêt de Notre-Dame fait-elle venir les rongeurs ?', a: 'Un massif de 2 200 hectares abrite beaucoup de petits rongeurs, qui s’approchent des maisons en lisière. Garages, abris et tas de bois sont à surveiller.' },
    { q: 'J’ai des trous dans mon jardin : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Mon poulailler attire-t-il les rats ?', a: 'Oui, s’il donne accès aux graines. Rangez-les en bacs fermés, ramassez les restes le soir et grillagez le bas du poulailler (voir [nourrir les oiseaux attire les rats](/blog/nourrir-oiseaux-pigeons-attire-rats)).' },
    { q: 'Peut-on dératiser sans poison avec des animaux ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
  ],
  sources: [SANTENY_INSEE, SANTENY_WIKI, FORET_ND_WIKI, RSD_94, SPF_LEPTO],
}

// ── Sucy-en-Brie (25/11/2026) ──
const SUCY_WIKI: Source = { label: 'Wikipédia, Sucy-en-Brie (plateau, Morbras, bois Notre-Dame, parcs, grands ensembles, logement)', url: 'https://fr.wikipedia.org/wiki/Sucy-en-Brie' }
const SUCY_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94071, Sucy-en-Brie', url: 'https://geo.api.gouv.fr/communes?code=94071&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['sucy-en-brie'] = {
  maj: '2026-11-25',
  accroche: 'Un plateau couvert de forêt, un coteau sur la Marne, la vallée du Morbras et d’anciens marais en bas de ville : à Sucy-en-Brie, 35 % du territoire est vert, et les rongeurs en profitent. Nous protégeons maisons et résidences.',
  societe: {
    titre: 'Société de dératisation à Sucy-en-Brie (94370) : une ville verte entre forêt, Morbras et Marne',
    paras: [
      'Sucy-en-Brie compte **27 764 habitants** sur **10,39 km²**. La ville est posée à la rupture du **plateau de Brie**, à une centaine de mètres d’altitude, dont toute la partie est est couverte par le **bois Notre-Dame** (306 hectares dans Sucy). À l’ouest, un **coteau** domine la vallée de la **Marne** ; au nord, la vallée du **Morbras** creuse le plateau. En bas, vers la gare, d’**anciennes zones marécageuses** asséchées ont longtemps posé des problèmes d’inondation par fortes pluies. Au total, **35 % du territoire** est fait d’espaces verts.',
      'Côté habitat, Sucy est à mi-chemin : **51,5 % de maisons** et **48,1 % d’appartements** (2018). Les grands ensembles de la **Cité Verte**, de la **Fosse Rouge** (812 appartements, sur la rive du Morbras), des Noyers et de la Procession côtoient de nombreux quartiers **pavillonnaires**. Une société de dératisation y traite autant les **jardins en lisière de forêt** que les **caves** et **locaux à poubelles** des résidences.',
      'Nous intervenons à Sucy depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Sucy-en-Brie](/souris/sucy-en-brie), [cafards à Sucy-en-Brie](/cafards/sucy-en-brie), [punaises de lit à Sucy-en-Brie](/punaises-de-lit/sucy-en-brie) et [chenilles processionnaires à Sucy-en-Brie](/chenilles-processionnaires/sucy-en-brie).',
    ],
  },
  chiffres: [
    { valeur: '27 764', texte: 'habitants (population légale Insee), code postal 94370.', source: SUCY_INSEE },
    { valeur: '35 %', texte: 'du territoire en espaces verts, dont 306 hectares de bois Notre-Dame et un parc de 44 hectares.', source: SUCY_WIKI },
    { valeur: '51,5 %', texte: 'des logements sont des maisons individuelles et 48,1 % des appartements (2018).', source: SUCY_WIKI },
    { valeur: '812', texte: 'appartements à la Fosse Rouge, grand ensemble construit sur la rive du Morbras.', source: SUCY_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Sucy-en-Brie : la ville quartier par quartier',
    intro: 'Sucy s’organise autour du **centre-ville**, du **centre gare**, du **Fort**, des **Bruyères** dans le bois, des **Berges** sur la Marne et des grands ensembles de la vallée du **Morbras**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'La vallée du Morbras et la Fosse Rouge',
        texte: 'Au nord, le **Morbras** coule au pied de la **Fosse Rouge**, construite sur sa rive. L’eau, la végétation des berges et les grands immeubles aux **caves**, **vide-ordures** et **locaux à poubelles** partagés forment un terrain favorable. Le traitement se fait avec le **bailleur**, sur toutes les **parties communes**.',
        photo: { src: '/villes/sucy-en-brie/ruisseau-du-morbras.jpg', alt: 'Le ruisseau du Morbras près du chemin du Vallon à Sucy-en-Brie', legende: 'Le Morbras, près du chemin du Vallon : un petit cours d’eau bordé de végétation, au pied des quartiers.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Ruisseau_Morbras_pr%C3%A8s_Chemin_Vallon_-_Sucy-en-Brie_(FR94)_-_2022-05-07_-_2.jpg' },
      },
      {
        nom: 'Les grands ensembles : Cité Verte, Fosse Rouge, Noyers, Procession',
        texte: 'Construits dans les années 1960 et 1970 à la place des champs, ces ensembles rassemblent des centaines de logements autour des mêmes sous-sols. Un rat vu dans un hall vient presque toujours des **caves** : nous traitons tout le sous-sol, puis rebouchons les passages vers les logements.',
        photo: { src: '/villes/sucy-en-brie/cite-de-la-fosse-rouge.jpg', alt: 'Allée Rubens, cité de la Fosse Rouge à Sucy-en-Brie', legende: 'La cité de la Fosse Rouge, allée Rubens : un grand ensemble aux caves et locaux à poubelles partagés.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'All%C3%A9e_Rubens_-_Sucy-en-Brie_(FR94)_-_2022-05-07_-_1.jpg' },
      },
      {
        nom: 'Le bois Notre-Dame, les Bruyères et le Parc de Sucy',
        texte: 'À l’est, le quartier des **Bruyères** est situé dans le **bois Notre-Dame**, et le **Parc de Sucy** (44 hectares) le borde. Souris, mulots et rats des bois s’approchent des maisons à l’automne : garages, abris, tas de bois et **vide sanitaires** sont à protéger.',
      },
      {
        nom: 'Le centre-ville, le centre gare et les anciens marais',
        texte: 'Le **centre-ville**, autour de l’**église Saint-Martin** et des anciens parcs de châteaux, garde des maisons avec caves ; en bas, le **centre gare**, près de la gare **Sucy-Bonneuil** du RER A, est bâti sur d’anciens **marais asséchés**. Caves humides après les fortes pluies et commerces de bouche : nous inspectons et traitons.',
        photo: { src: '/villes/sucy-en-brie/eglise-saint-martin.jpg', alt: 'L’église Saint-Martin de Sucy-en-Brie', legende: 'L’église Saint-Martin, au cœur du bourg historique : maisons anciennes, caves et jardins.', credit: 'Mgiraud', licence: 'CC BY-SA 3.0', page: W + 'Sucy-en-Brie_-_%C3%89glise_Saint-Martin.jpg' },
      },
      {
        nom: 'Le Fort, les Berges et les pavillons du coteau',
        texte: 'Le quartier du **Fort**, né d’une ZAC, mêle collectifs et pavillons autour d’un centre commercial ; les **Berges** longent la Marne au pied du coteau. Jardins, haies et composteurs : nous traitons les **terriers** et fermons les accès. Voir [rat dans le compost](/blog/rat-compost).',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Sucy-en-Brie (94370) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes, des terriers ou des dégâts : nous identifions rat, souris ou mulot et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Maison en lisière : garage, abri, vide sanitaire. Résidence : caves, vide-ordures, local à poubelles. Bas de ville : caves humides et regards.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Sucy-en-Brie (94370) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des souris ou des mulots dans la maison à l’automne', x: 'Près du bois Notre-Dame, ils cherchent la chaleur dès les premiers froids : voir [souris à Sucy-en-Brie](/souris/sucy-en-brie) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des rats dans la cave ou au vide-ordures d’une cité', x: 'Le signe d’une colonie dans les parties communes. Prévenez le bailleur par écrit : le traitement doit couvrir tout le sous-sol.' },
      { t: 'Des rats dans une cave humide du bas de la ville', x: 'Sur les anciens marais, les caves restent humides après la pluie. Nous traitons, bouchons les passages et conseillons sur l’aération.' },
      { t: 'Des terriers dans le jardin', x: 'Voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
      { t: 'Des bruits dans les combles', x: 'Voir [rats dans les combles](/blog/rats-dans-les-combles) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Sucy-en-Brie',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Une maison se traite à la charge de son propriétaire, une résidence à celle du **bailleur** ou du **syndic**.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique ou dans un parc, alertez la **mairie de Sucy-en-Brie** ; le bois Notre-Dame est une forêt domaniale.',
      'Nous intervenons aussi tout autour : [Bonneuil-sur-Marne](/deratisation/bonneuil-sur-marne), [Boissy-Saint-Léger](/deratisation/boissy-saint-leger), [Chennevières-sur-Marne](/deratisation/chennevieres-sur-marne), [Saint-Maur-des-Fossés](/deratisation/saint-maur-des-fosses) et [Santeny](/deratisation/santeny).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Sucy-en-Brie ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Maison avec jardin ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Le bois Notre-Dame fait-il venir les rongeurs ?', a: 'Un grand massif boisé abrite beaucoup de petits rongeurs, qui s’approchent des maisons en lisière, surtout à l’automne. Garages, abris et tas de bois sont à surveiller.' },
    { q: 'Pourquoi des souris chaque automne ?', a: 'Avec 35 % d’espaces verts, Sucy offre de nombreux abris aux souris et mulots, qui cherchent la chaleur quand il fait froid. Nous bouchons leurs entrées ([par où entrent les souris](/blog/souris-par-ou-entrent-elles)).' },
    { q: 'J’habite à la Fosse Rouge ou à la Cité Verte : qui paie la dératisation ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Ma cave est humide en bas de la ville : est-ce un risque ?', a: 'Le bas de Sucy est bâti sur d’anciens marais : les caves humides attirent les rats. Nous traitons, bouchons les passages et vous conseillons sur l’aération ([mode de vie du rat](/blog/rat-mode-de-vie)).' },
    { q: 'J’ai des trous dans mon jardin : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
  ],
  sources: [SUCY_INSEE, SUCY_WIKI, FORET_ND_WIKI, RSD_94, SPF_LEPTO],
}

// ── Thiais (25/11/2026) ──
const THIAIS_WIKI: Source = { label: 'Wikipédia, Thiais (relief, cimetière parisien, Belle Épine, Grands Champs, logement, transports)', url: 'https://fr.wikipedia.org/wiki/Thiais' }
const THIAIS_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94073, Thiais', url: 'https://geo.api.gouv.fr/communes?code=94073&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['thiais'] = {
  maj: '2026-11-25',
  accroche: 'Un plateau commercial avec Belle Épine, un cimetière de 103 hectares, un coteau de pavillons et la vallée de la Seine : à Thiais, chaque niveau de la ville a ses rongeurs. Nous savons où chercher.',
  societe: {
    titre: 'Société de dératisation à Thiais (94320) : une ville sur trois niveaux',
    paras: [
      'Thiais compte **32 918 habitants** sur **6,43 km²** et s’étend sur **trois milieux** : le **plateau de Longboyau** à l’ouest et au nord, autrefois agricole, aujourd’hui occupé par les commerces, le **cimetière parisien** et le grand ensemble des **Grands Champs** ; le **coteau** de la vallée de la Seine, berceau du village et des quartiers pavillonnaires des années 1980 ; et la **vallée alluviale**, aux sols sablonneux, où la ville s’est étendue au XXe siècle, avec **Grignon**.',
      'La commune vit au cœur d’un grand bassin d’activités : le centre commercial **Belle Épine**, le **marché de Rungis** et l’**aéroport d’Orly** sont tout proches, et elle est traversée par l’**A86**, la **RD7** et la RD5. Côté habitat, **72,5 % des logements** sont des appartements et **24 %** des maisons. Pour une société de dératisation, Thiais, ce sont des **commerces**, des **résidences** et des **pavillons**.',
      'Nous intervenons à Thiais depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Thiais](/souris/thiais), [punaises de lit à Thiais](/punaises-de-lit/thiais) et [fourmis à Thiais](/fourmis/thiais).',
    ],
  },
  chiffres: [
    { valeur: '32 918', texte: 'habitants (population légale Insee), code postal 94320.', source: THIAIS_INSEE },
    { valeur: '103 ha', texte: 'pour le cimetière parisien de Thiais, soit environ 16 % de la commune, le deuxième de la région en superficie.', source: THIAIS_WIKI },
    { valeur: '72,5 %', texte: 'des logements sont des appartements et 24 % des maisons.', source: THIAIS_WIKI },
    { valeur: '3', texte: 'milieux : le plateau de Longboyau, le coteau de la Seine et la vallée alluviale.', source: THIAIS_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Thiais : la ville secteur par secteur',
    intro: 'Du **plateau** commercial aux **Grands Champs**, du **vieux village** sur le coteau aux pavillons de la **Vallée verte**, jusqu’à **Grignon** dans la vallée, voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Le plateau : Belle Épine, zones commerciales et cimetière',
        texte: 'Sur le **plateau**, le centre commercial **Belle Épine**, les enseignes et les restaurants produisent des déchets alimentaires en quantité. À côté, le **cimetière parisien** forme un très grand espace arboré. Pour un commerce : postes **numérotés**, **registre**, **attestation** et passages hors des heures d’ouverture.',
        photo: { src: '/villes/thiais/cimetiere-parisien.jpg', alt: 'Une allée arborée du cimetière parisien de Thiais', legende: 'Une allée du cimetière parisien de Thiais : 103 hectares d’espaces arborés sur le plateau.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Avenue_A_Cimeti%C3%A8re_Parisien_Thiais_-_Thiais_(FR94)_-_2024-08-31_-_1.jpg' },
      },
      {
        nom: 'Les Grands Champs',
        texte: 'Le grand ensemble des **Grands Champs**, en réaménagement avec l’Agence nationale pour la rénovation urbaine, rassemble des immeubles autour des mêmes **caves** et **locaux à poubelles**. Les chantiers délogent les colonies : le traitement se fait avec le **bailleur**, sur toutes les **parties communes**.',
      },
      {
        nom: 'Le vieux village et le coteau',
        texte: 'Sur le **coteau**, berceau de la paroisse, le centre ancien garde des maisons avec **caves**, des cours et sa **fontaine-lavoir**. Plus loin, les lotissements de la **Vallée verte** et de **Green Valley**, construits dans les années 1980, ont jardins et vide sanitaires. Voir [rat dans le compost](/blog/rat-compost).',
        photo: { src: '/villes/thiais/fontaine-lavoir.jpg', alt: 'La fontaine-lavoir du vieux Thiais', legende: 'La fontaine-lavoir, dans le vieux Thiais : un centre ancien avec maisons, caves et cours.', credit: 'besopha', licence: 'CC BY-SA 2.0', page: W + 'Le_lavoir_(6499516531).jpg' },
      },
      {
        nom: 'Grignon et la vallée de la Seine',
        texte: 'Dans la **vallée**, sur des sols sablonneux, les quartiers sud et est, dont **Grignon** et les cités des **Vergers de Grignon**, mêlent résidences et maisons, à proximité de la Seine et d’Orly. Caves, parkings et jardins : nous traitons au plus près des points d’entrée, puis rebouchons.',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Thiais (94320) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Commerce : réserves, cuisine, bennes. Résidence : caves, local à poubelles, parkings. Pavillon : jardin, abri, vide sanitaire.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Thiais (94320) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Un rongeur dans un restaurant ou un commerce', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles) et [nos services aux professionnels](/professionnels).' },
      { t: 'Des rats dans la cave d’une résidence', x: 'Le signe d’une colonie dans les parties communes. Prévenez le bailleur ou le syndic par écrit : le traitement doit couvrir tout le sous-sol.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Thiais](/souris/thiais) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des terriers dans le jardin d’un pavillon', x: 'Voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
      { t: 'Des rongeurs après un chantier voisin', x: 'Les travaux de réaménagement délogent les colonies : agissez dès les premières traces, avec le syndic ou le bailleur.' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Thiais',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Un pavillon se traite à la charge de son propriétaire, une résidence à celle du **bailleur** ou du **syndic**, un commerce à celle de l’**exploitant**.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique ou dans un parc, alertez la **mairie de Thiais**.',
      'Nous intervenons aussi tout autour : [Vitry-sur-Seine](/deratisation/vitry-sur-seine), [Choisy-le-Roi](/deratisation/choisy-le-roi), [Orly](/deratisation/orly), [Rungis](/deratisation/rungis), [Chevilly-Larue](/deratisation/chevilly-larue) et [Paray-Vieille-Poste](/deratisation/paray-vieille-poste).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Thiais ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Commerce, pavillon ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Intervenez-vous dans les commerces de Belle Épine et des zones commerciales ?', a: 'Oui, hors des heures d’ouverture, avec postes numérotés, registre et attestation pour vos contrôles d’hygiène, et contrat de suivi si besoin ([services aux professionnels](/professionnels)).' },
    { q: 'J’habite aux Grands Champs : qui paie la dératisation ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Les travaux de réaménagement font-ils venir les rats ?', a: 'Les démolitions et chantiers délogent les colonies, qui cherchent refuge dans les bâtiments voisins. Fermez caves et locaux à poubelles, et faites traiter dès les premières traces ([mode de vie du rat](/blog/rat-mode-de-vie)).' },
    { q: 'J’ai des trous dans mon jardin : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Thiais ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [THIAIS_INSEE, THIAIS_WIKI, RSD_94, SPF_LEPTO],
}

// ── Valenton (25/11/2026) ──
const VALENTON_WIKI: Source = { label: 'Wikipédia, Valenton (quartiers, Plage bleue, station Seine-Amont du SIAAP, transports)', url: 'https://fr.wikipedia.org/wiki/Valenton' }
const VALENTON_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94074, Valenton', url: 'https://geo.api.gouv.fr/communes?code=94074&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['valenton'] = {
  maj: '2026-11-25',
  accroche: 'Un parc de 27 hectares autour d’un plan d’eau, une grande station d’épuration, des cités, un coteau de pavillons et des quartiers neufs : à Valenton, les rats ont de l’eau et des réseaux. Nous traitons secteur par secteur.',
  societe: {
    titre: 'Société de dératisation à Valenton (94460) : une ville de parcs et de réseaux',
    paras: [
      'Valenton compte **14 406 habitants** sur **5,31 km²**, dont environ **84 hectares d’espaces verts publics**. Le plus grand est le **parc départemental de la Plage bleue** (26,88 hectares), aménagé à partir de 1987 autour d’un plan d’eau. La commune accueille aussi la **station d’épuration Seine-Amont** du SIAAP, qui traite les eaux usées de la majeure partie du Val-de-Marne : Valenton est donc traversée par un **réseau d’assainissement** important, le chemin habituel du **surmulot**, le rat d’égout.',
      'La ville mêle des quartiers d’**habitat social** (la Lutèce, les Polognes), un **coteau pavillonnaire** (le Coteau, les Tourelles), une **zone commerciale** (le Champ-Saint-Julien), une **gare de triage** et des quartiers neufs au **Val Pompadour**, desservi depuis 2025 par le téléphérique **Câble 1**. Une société de dératisation y traite autant les **parties communes** des résidences que les **jardins** et les **commerces**.',
      'Nous intervenons à Valenton depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Valenton](/souris/valenton), [punaises de lit à Valenton](/punaises-de-lit/valenton) et [fourmis à Valenton](/fourmis/valenton).',
    ],
  },
  chiffres: [
    { valeur: '14 406', texte: 'habitants (population légale Insee), code postal 94460.', source: VALENTON_INSEE },
    { valeur: '84 ha', texte: 'd’espaces verts publics sur 531 hectares, dont le parc de la Plage bleue.', source: VALENTON_WIKI },
    { valeur: '26,88 ha', texte: 'pour le parc départemental de la Plage bleue, Trophée du paysage en 1993.', source: VALENTON_WIKI },
    { valeur: '1,6 M', texte: 'équivalent-habitants pour la station d’épuration Seine-Amont, qui traite les eaux usées de la majeure partie du 94.', source: VALENTON_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Valenton : la ville quartier par quartier',
    intro: 'Valenton compte le **Fonx**, le **Centre-ville**, la **Lutèce**, le **Coteau**, les **Polognes**, les **Tourelles**, le **Champ-Saint-Julien** et le **Val Pompadour**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'La Lutèce et la Plage bleue',
        texte: 'En bordure du **parc de la Plage bleue**, le quartier de la **Lutèce** est composé majoritairement de logements sociaux. Le plan d’eau, les pelouses et les poubelles du parc attirent les rongeurs vers les **caves** et **locaux à poubelles** voisins. Le traitement des parties communes se fait avec le **bailleur**.',
        photo: { src: '/villes/valenton/parc-de-la-plage-bleue.jpg', alt: 'Le parc départemental de la Plage bleue à Valenton, avec son plan d’eau', legende: 'Le parc de la Plage bleue et son plan d’eau : 27 hectares d’espaces verts au bord des quartiers.', credit: 'Rémih', licence: 'CC BY-SA 4.0', page: W + 'Parc_d%C3%A9partemental_de_la_Plage-Bleue_08.jpg' },
      },
      {
        nom: 'Le Val Pompadour et les quartiers neufs',
        texte: 'Au nord, le **Val Pompadour** est en pleine expansion, avec plus de 600 logements nouveaux et la station **Valenton** du **Câble 1**. Les chantiers délogent les colonies, qui cherchent un abri dans les **parkings** et **locaux techniques** des immeubles récents : il faut agir dès les premières traces, avec le **syndic**.',
        photo: { src: '/villes/valenton/vue-aerienne-val-pompadour.jpg', alt: 'Vue aérienne du nord de Valenton et du Val Pompadour', legende: 'Vue aérienne du nord de Valenton : le Val Pompadour, les voies ferrées et les grands axes.', credit: 'Suaudeau', licence: 'CC BY-SA 4.0', page: W + 'Vue-aerienne-de-Valenton-nord.jpg' },
      },
      {
        nom: 'Le Centre-ville, le Fonx et le château',
        texte: 'Le **centre-ville**, avec son marché principal et ses commerces, et le **Fonx** voisin mêlent immeubles et maisons anciennes ; la ville garde aussi son **château**. Marché, commerces de bouche et caves : nous intervenons hors des heures d’ouverture et inspectons soupiraux et cours.',
        photo: { src: '/villes/valenton/chateau-de-valenton.jpg', alt: 'Le château de Valenton', legende: 'Le château de Valenton : un bâti ancien, avec caves et dépendances.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Ch%C3%A2teau_Valenton_15.jpg' },
      },
      {
        nom: 'Le Coteau, les Polognes et les Tourelles',
        texte: 'Sur le **plateau**, le **Coteau** et les **Tourelles** sont des quartiers **pavillonnaires** ; les **Polognes** comptent des logements sociaux. Jardins, composteurs, abris et vide sanitaires d’un côté, caves partagées de l’autre : nous adaptons le traitement. Voir [rat dans le compost](/blog/rat-compost).',
      },
      {
        nom: 'Le Champ-Saint-Julien, le triage et les réseaux',
        texte: 'La zone commerciale du **Champ-Saint-Julien**, avec ses moyennes surfaces et ses restaurants, la **gare de triage** et les **réseaux d’assainissement** offrent couvert et nourriture aux rongeurs. Pour une entreprise : postes **numérotés**, **registre** et **attestation**.',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Valenton (94460) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Résidence : caves, vide-ordures, local à poubelles. Pavillon : jardin, abri, vide sanitaire. Commerce : réserves, cuisine, bennes.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Valenton (94460) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans la cave ou au local à poubelles d’une cité', x: 'Le signe d’une colonie dans les parties communes. Prévenez le bailleur par écrit : le traitement doit couvrir tout le sous-sol.' },
      { t: 'Un rat qui sort des toilettes', x: 'Avec un réseau d’assainissement aussi important, l’égout est un chemin direct : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes).' },
      { t: 'Des rats dans les parkings d’une résidence neuve', x: 'Les chantiers voisins délogent les colonies : prévenez le syndic dès les premières traces.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Valenton](/souris/valenton) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des terriers dans le jardin d’un pavillon', x: 'Voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Valenton',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Une résidence sociale se traite à la demande du **bailleur**, une copropriété à celle du **syndic**, un pavillon à celle de son propriétaire.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique, alertez la **mairie de Valenton** ; le parc de la Plage bleue est un parc départemental.',
      'Nous intervenons aussi tout autour : [Villeneuve-Saint-Georges](/deratisation/villeneuve-saint-georges), [Choisy-le-Roi](/deratisation/choisy-le-roi), [Créteil](/deratisation/creteil), [Limeil-Brévannes](/deratisation/limeil-brevannes) et [Bonneuil-sur-Marne](/deratisation/bonneuil-sur-marne).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Valenton ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon, commerce ou résidence : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'La Plage bleue attire-t-elle les rats vers les immeubles ?', a: 'Un grand parc avec un plan d’eau offre abri et nourriture aux rongeurs ([mode de vie du rat](/blog/rat-mode-de-vie)). Les résidences voisines doivent garder caves et locaux à poubelles fermés.' },
    { q: 'J’habite à la Lutèce ou aux Polognes : qui paie la dératisation ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Je vis au Val Pompadour et je vois des rats : pourquoi ?', a: 'Les chantiers voisins délogent les colonies, qui cherchent un nouvel abri dans les immeubles récents. Signalez-le vite au syndic : un traitement rapide évite l’installation.' },
    { q: 'Un rat est sorti de mes toilettes : que faire ?', a: 'Fermez l’abattant, mettez un poids dessus et appelez-nous (voir [rat dans les toilettes](/blog/rat-dans-les-toilettes)). Nous traitons la colonie et vous conseillons sur la pose d’un clapet anti-rongeurs par un plombier.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Valenton ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [VALENTON_INSEE, VALENTON_WIKI, RSD_94, SPF_LEPTO],
}

// ── Villeneuve-le-Roi (25/11/2026) ──
const VLR_WIKI: Source = { label: 'Wikipédia, Villeneuve-le-Roi (coteau, Seine, aéroport, pavillons, Haut-Pays, Faisanderie)', url: 'https://fr.wikipedia.org/wiki/Villeneuve-le-Roi' }
const VLR_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94077, Villeneuve-le-Roi', url: 'https://geo.api.gouv.fr/communes?code=94077&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['villeneuve-le-roi'] = {
  maj: '2026-11-25',
  accroche: 'Une ville de pavillons qui descend du plateau de l’aéroport jusqu’à la Seine : à Villeneuve-le-Roi, les rats remontent des berges et des voies ferrées vers les jardins. Nous protégeons votre maison.',
  societe: {
    titre: 'Société de dératisation à Villeneuve-le-Roi (94290) : une ville de pavillons sur le coteau de la Seine',
    paras: [
      'Villeneuve-le-Roi compte **21 000 habitants** sur **8,44 km²**, entre l’**aéroport d’Orly** à l’ouest, sur le plateau, et la **Seine** à l’est, en contrebas. La ville **s’étire à flanc de coteau** entre les deux, de 91 à 30 mètres d’altitude, traversée par la **ligne ferroviaire Paris-Bordeaux** et le **RER C**. Berges, talus ferroviaires et réseaux qui descendent vers le fleuve : le terrain du **surmulot**.',
      'Contrairement à ses voisines Orly et Villeneuve-Saint-Georges, Villeneuve-le-Roi se caractérise par un **fort taux de pavillons**. Dès 1898, le **lotissement du parc de la Faisanderie**, sur 102 hectares, a attiré des Parisiens ; le **Haut-Pays** garde des maisons de l’ancien village agricole. Pour une société de dératisation, Villeneuve-le-Roi, ce sont surtout des **jardins**, des **garages**, des **caves** et des **vide sanitaires**.',
      'Nous intervenons à Villeneuve-le-Roi depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Villeneuve-le-Roi](/souris/villeneuve-le-roi), [punaises de lit à Villeneuve-le-Roi](/punaises-de-lit/villeneuve-le-roi) et [fourmis à Villeneuve-le-Roi](/fourmis/villeneuve-le-roi).',
    ],
  },
  chiffres: [
    { valeur: '21 000', texte: 'habitants (population légale Insee), code postal 94290.', source: VLR_INSEE },
    { valeur: '102 ha', texte: 'pour le lotissement du parc de la Faisanderie, lancé dès 1898.', source: VLR_WIKI },
    { valeur: '61 m', texte: 'de dénivelé entre le plateau de l’aéroport (91 m) et les bords de Seine (30 m).', source: VLR_WIKI },
    { valeur: '1910', texte: 'construction du kiosque Art nouveau, symbole de la ville, place Amédée-Soupault.', source: VLR_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Villeneuve-le-Roi : la ville secteur par secteur',
    intro: 'Des **bords de Seine** au **Haut-Pays**, du **centre** et de son kiosque aux lotissements de la **Faisanderie**, le long des **voies ferrées**, voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les quartiers pavillonnaires et la Faisanderie',
        texte: 'Les grands lotissements, dont celui de la **Faisanderie**, offrent des rues entières de **maisons avec jardin**. Composteurs, poulaillers, abris et vide sanitaires : c’est là que nous intervenons le plus. Voir [rat dans le compost](/blog/rat-compost) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
        photo: { src: '/villes/villeneuve-le-roi/vue-aerienne-seine-coteau.jpg', alt: 'Vue aérienne des quartiers pavillonnaires de Villeneuve-le-Roi et de la voie ferrée', legende: 'Vue aérienne de Villeneuve-le-Roi : des rues de pavillons le long de la voie ferrée Paris-Bordeaux.', credit: 'Poudou99', licence: 'CC BY 3.0', page: W + 'Vue_a%C3%A9rienne_de_Villeneuve_le_Roi_IMG_9996.JPG' },
      },
      {
        nom: 'Les bords de Seine et le bas de la ville',
        texte: 'À l’est, au pied du coteau, les maisons proches de la **Seine** et de ses berges, en cours d’aménagement, sont les plus exposées : l’eau et la végétation attirent le rat. Nous contrôlons **soupiraux**, **regards** et pied des murs, surtout après de fortes pluies.',
      },
      {
        nom: 'Le centre et le kiosque',
        texte: 'Autour de la **place Amédée-Soupault** et de son **kiosque Art nouveau** de 1910, commerces et immeubles partagent caves et locaux à déchets. Pour un commerce : postes **numérotés**, **registre** et **attestation**, avec passages hors des heures d’ouverture.',
        photo: { src: '/villes/villeneuve-le-roi/kiosque-place-amedee-soupault.jpg', alt: 'Le kiosque Art nouveau de la place Amédée-Soupault à Villeneuve-le-Roi', legende: 'Le kiosque de 1910, place Amédée-Soupault : le cœur de la ville et ses commerces.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Kiosque_Place_Am%C3%A9d%C3%A9e_Soupault_-_Villeneuve-le-Roi_(FR94)_-_2022-06-05_-_4.jpg' },
      },
      {
        nom: 'Le Haut-Pays et le vieux village',
        texte: 'Le **Haut-Pays** garde les maisons de l’ancien **village agricole** : murs de pierre, **caves**, dépendances et jardins. Les rongeurs y trouvent de nombreuses cachettes ; nous inspectons chaque ouverture et rebouchons après le traitement.',
        photo: { src: '/villes/villeneuve-le-roi/eglise-saint-pierre-saint-paul.jpg', alt: 'L’église Saint-Pierre-Saint-Paul de Villeneuve-le-Roi', legende: 'L’église Saint-Pierre-Saint-Paul : Villeneuve-le-Roi garde un bâti ancien avec caves et murs de pierre.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + '%C3%89glise_Saints_Pierre_Paul_-_Villeneuve-le-Roi_(FR94)_-_2022-06-05_-_3.jpg' },
      },
      {
        nom: 'Les voies ferrées et la lisière de l’aéroport',
        texte: 'Les **talus ferroviaires** de la ligne Paris-Bordeaux et les abords de l’**aéroport** forment des couloirs de végétation où circulent les rongeurs. Les jardins qui les bordent doivent surveiller clôtures, abris et **terriers**.',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Villeneuve-le-Roi (94290) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes, des terriers ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le tour de la maison', x: 'Jardin, abri, garage, cave, vide sanitaire, combles ; près de la Seine, soupiraux et regards.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Villeneuve-le-Roi (94290) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des terriers dans le jardin d’un pavillon', x: 'Trous au pied des murs, sous la terrasse ou l’abri : voir [le mode de vie du rat](/blog/rat-mode-de-vie) et [la reproduction des rats](/blog/reproduction-des-rats).' },
      { t: 'Des souris dans la maison à l’automne', x: 'Elles entrent par le moindre interstice : voir [souris à Villeneuve-le-Roi](/souris/villeneuve-le-roi) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des bruits sous le plancher ou dans les combles', x: 'Voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire) et [rats dans les combles](/blog/rats-dans-les-combles).' },
      { t: 'Des rats attirés par le poulailler ou les mangeoires', x: 'Voir [nourrir les oiseaux attire les rats](/blog/nourrir-oiseaux-pigeons-attire-rats).' },
      { t: 'Un rongeur dans un commerce du centre', x: 'Postes numérotés, registre, attestation : voir [le plan de lutte contre les nuisibles d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, syndic : qui fait quoi à Villeneuve-le-Roi',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Dans une ville de pavillons comme Villeneuve-le-Roi, c’est le plus souvent au **propriétaire** de faire appel à une entreprise de dératisation ; pour une résidence, au **syndic** ou au **bailleur**.',
      'Pour des rats sur la voie publique ou les berges, alertez la **mairie de Villeneuve-le-Roi**. Les rats ne connaissent pas les clôtures : prévenir vos voisins aide à traiter le secteur.',
      'Nous intervenons aussi tout autour : [Orly](/deratisation/orly), [Ablon-sur-Seine](/deratisation/ablon-sur-seine), [Villeneuve-Saint-Georges](/deratisation/villeneuve-saint-georges), [Choisy-le-Roi](/deratisation/choisy-le-roi), [Athis-Mons](/deratisation/athis-mons) et [Paray-Vieille-Poste](/deratisation/paray-vieille-poste).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Villeneuve-le-Roi ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon avec jardin : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Les bords de Seine attirent-ils les rats ?', a: 'L’eau et la végétation des berges sont favorables au surmulot ([mode de vie du rat](/blog/rat-mode-de-vie)). Les maisons du bas de la ville doivent surveiller jardins, regards et soupiraux.' },
    { q: 'J’ai des trous dans ma pelouse : rats ou taupes ?', a: 'Un terrier de rat est un trou net au pied d’un mur, d’une terrasse ou d’un abri, avec une coulée dans l’herbe. Une taupe laisse des monticules de terre. Envoyez-nous une photo.' },
    { q: 'Pourquoi des souris chaque automne dans ma maison ?', a: 'Quand il fait froid, les souris cherchent la chaleur et passent par le moindre interstice. Nous trouvons et bouchons leurs entrées ([par où entrent les souris](/blog/souris-par-ou-entrent-elles)).' },
    { q: 'Mon compost ou mon poulailler attire-t-il les rats ?', a: 'Oui, s’ils donnent accès à la nourriture. Fermez le composteur, ramassez les graines le soir et rangez-les en bacs fermés (voir [rat dans le compost](/blog/rat-compost)).' },
    { q: 'Qui paie la dératisation d’une résidence ?', a: 'Les parties communes relèvent du syndic ou du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Peut-on dératiser sans poison dans un jardin avec chien ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès. S’il faut un appât, il est placé dans des postes verrouillés.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
  ],
  sources: [VLR_INSEE, VLR_WIKI, RSD_94, SPF_LEPTO],
}

// ── Villeneuve-Saint-Georges (25/11/2026) ──
const VSG_WIKI: Source = { label: 'Wikipédia, Villeneuve-Saint-Georges (Seine et Yerres, crue de 1910, quartiers, gare de triage, logement)', url: 'https://fr.wikipedia.org/wiki/Villeneuve-Saint-Georges' }
const VSG_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94078, Villeneuve-Saint-Georges', url: 'https://geo.api.gouv.fr/communes?code=94078&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['villeneuve-saint-georges'] = {
  maj: '2026-11-25',
  accroche: 'Au confluent de la Seine et de l’Yerres, avec un centre ancien inondé sous 3,20 m d’eau en 1910, une immense gare de triage et des grands ensembles sur le plateau : à Villeneuve-Saint-Georges, les rats ont tous les terrains. Nous les traitons un par un.',
  societe: {
    titre: 'Société de dératisation à Villeneuve-Saint-Georges (94190) : une ville au confluent de la Seine et de l’Yerres',
    paras: [
      'Villeneuve-Saint-Georges compte **36 221 habitants** sur **8,07 km²**, entre 30 et 97 mètres d’altitude. Deux cours d’eau la traversent : la **Seine** et l’**Yerres**, qui s’y jette. Lors de la **crue de 1910**, l’eau est montée jusqu’à **3,20 mètres** dans le centre, à l’angle de la rue des Écoles et de l’avenue Carnot, où l’on circulait en bateau. Berges, quais et caves inondables : un terrain idéal pour le **surmulot**, le rat d’égout.',
      'La ville réunit des quartiers très différents : un **centre ancien** en revitalisation, la **gare de triage**, autrefois l’une des plus grandes d’Europe, des **grands ensembles** au Nord et sur le Plateau, et des quartiers de **pavillons**. En 2021, **68,5 % des logements** étaient des appartements et **27,8 %** des maisons. Pour une société de dératisation, ce sont autant de **caves anciennes**, de **parties communes** et de **jardins** à traiter.',
      'Nous intervenons à Villeneuve-Saint-Georges depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Villeneuve-Saint-Georges](/souris/villeneuve-saint-georges), [punaises de lit à Villeneuve-Saint-Georges](/punaises-de-lit/villeneuve-saint-georges) et [fourmis à Villeneuve-Saint-Georges](/fourmis/villeneuve-saint-georges).',
    ],
  },
  chiffres: [
    { valeur: '36 221', texte: 'habitants (population légale Insee), code postal 94190.', source: VSG_INSEE },
    { valeur: '3,20 m', texte: 'd’eau dans le centre-ville lors de la crue de 1910, à l’angle de la rue des Écoles et de l’avenue Carnot.', source: VSG_WIKI },
    { valeur: '2', texte: 'cours d’eau : la Seine et l’Yerres, qui s’y jette sur le territoire de la commune.', source: VSG_WIKI },
    { valeur: '68,5 %', texte: 'des logements sont des appartements et 27,8 % des maisons (2021), sur 13 991 logements.', source: VSG_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Villeneuve-Saint-Georges : la ville quartier par quartier',
    intro: 'Villeneuve compte sept quartiers, dont le **Centre**, **Blandin-Belleplace**, **Villeneuve-Triage**, le **Plateau-Hauts de Villeneuve**, le **Val Saint-Georges** et le **quartier Nord**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Le Centre et les quais de Seine',
        texte: 'Au sud, bordé par la **Seine**, le centre ancien concentre commerces, marché et immeubles anciens ; il bénéficie d’un programme de revitalisation des quartiers anciens dégradés. **Caves voûtées**, cours, réseaux anciens et proximité du fleuve : nous traitons les sous-sols, rebouchons les passages et contrôlons les **regards**.',
        photo: { src: '/villes/villeneuve-saint-georges/quais-de-seine.jpg', alt: 'Les quais de Seine à Villeneuve-Saint-Georges', legende: 'Les quais de Seine à Villeneuve-Saint-Georges : péniches, berges et le centre ancien sur le coteau.', credit: 'Stéphane Abélard', licence: 'CC BY-SA 4.0', page: W + 'Quais_de_Seine_%C3%A0_Villeneuve-Saint-Georges.jpg' },
      },
      {
        nom: 'Les secteurs inondables',
        texte: 'Lors de la crue de 1910, la **gare**, sa place, l’avenue Carnot et la rue de Paris ont été inondées. Ces secteurs bas gardent des **caves humides** où les rats se réfugient, surtout quand la Seine ou l’Yerres montent. Nous inspectons les sous-sols après les épisodes de pluie.',
        photo: { src: '/villes/villeneuve-saint-georges/crue-1910-place-de-la-gare.jpg', alt: 'Carte postale de la place de la gare de Villeneuve-Saint-Georges inondée en 1910', legende: 'La place de la gare inondée lors de la crue de 1910 : les secteurs bas gardent des caves humides.', credit: 'Carte postale ancienne, scan Claude_villetaneuse', licence: 'Domaine public', page: W + 'ELD_-_CRUE_DE_LA_SEINE_-_VILLENEUVE-SAINT-GEORGES_-_Place_de_la_Gare.JPG' },
      },
      {
        nom: 'Villeneuve-Triage et la gare de triage',
        texte: 'Entre la **Seine** à l’ouest et l’immense **gare de triage** à l’est, ce quartier isolé est relié par une passerelle de près de 400 mètres. Voies, friches ferroviaires et talus forment de vastes couloirs de végétation pour les rongeurs, qui s’approchent des maisons voisines.',
        photo: { src: '/villes/villeneuve-saint-georges/gare-de-triage.jpg', alt: 'Vue aérienne de la gare de triage de Villeneuve-Saint-Georges', legende: 'La gare de triage vue du ciel : voies, friches et talus sur des dizaines d’hectares.', credit: 'Vertounoir', licence: 'CC BY-SA 4.0', page: W + 'Villeneuve_saint_Georges_triage_juillet_2006.jpg' },
      },
      {
        nom: 'Le quartier Nord et le Plateau',
        texte: 'Au **Nord**, les grands ensembles des Graviers, Sellier, La Passerelle, Guynemer et Thimmonier, et sur le **Plateau**, le Bois Matar et la Cité SNCF, sont des quartiers prioritaires en réhabilitation. Caves, vide-ordures et locaux à poubelles partagés : le traitement se fait avec le **bailleur**, sur toutes les **parties communes**.',
        photo: { src: '/villes/villeneuve-saint-georges/quartier-nord.jpg', alt: 'Rue Jean-Guyonnet dans le quartier Nord de Villeneuve-Saint-Georges', legende: 'Rue Jean-Guyonnet, quartier Nord : immeubles et locaux à poubelles partagés.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Rue_Jean_Guyonnet_-_Villeneuve-Saint-Georges_(FR94)_-_2022-05-11_-_1.jpg' },
      },
      {
        nom: 'Blandin-Belleplace et le Val Saint-Georges',
        texte: 'Blandin-Belleplace, quartier surtout **pavillonnaire** à la limite de Montgeron et de Crosne, a été touché avec Triage par les **inondations de juin 2016 et de janvier 2018**. Jardins, abris et vide sanitaires humides attirent les rongeurs. Nous traitons les **terriers** et fermons les accès. Voir [rat dans le compost](/blog/rat-compost) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Villeneuve-Saint-Georges (94190) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Centre ancien : caves, cours, regards. Grand ensemble : vide-ordures, caves, local à poubelles. Pavillon : jardin, abri, vide sanitaire.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Villeneuve-Saint-Georges (94190) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans la cave d’un immeuble ancien du centre', x: 'Caves anciennes, réseaux vétustes et proximité de la Seine : nous traitons le sous-sol entier, puis rebouchons. Prévenez le syndic ou le bailleur par écrit.' },
      { t: 'Des rats après une montée des eaux', x: 'Quand la Seine ou l’Yerres montent, les rats quittent les berges pour les caves. Faites contrôler les sous-sols après les fortes pluies.' },
      { t: 'Des rats au vide-ordures d’une cité', x: 'Le signe d’une colonie dans les parties communes : le bailleur organise le traitement, nous rebouchons ensuite les passages vers les logements.' },
      { t: 'Un rat qui sort des toilettes', x: 'Près du fleuve, le réseau d’assainissement est un chemin direct : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes).' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris à Villeneuve-Saint-Georges](/souris/villeneuve-saint-georges) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Villeneuve-Saint-Georges',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Les grands ensembles se traitent à la demande du **bailleur**, les immeubles en copropriété du centre à celle du **syndic**, les pavillons à celle de leur propriétaire.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur les quais ou la voie publique, alertez la **mairie de Villeneuve-Saint-Georges**. Pour un logement insalubre, la mairie ou l’Agence régionale de santé peuvent aussi être saisies.',
      'Nous intervenons aussi tout autour : [Valenton](/deratisation/valenton), [Villeneuve-le-Roi](/deratisation/villeneuve-le-roi), [Limeil-Brévannes](/deratisation/limeil-brevannes), [Choisy-le-Roi](/deratisation/choisy-le-roi) et [Ablon-sur-Seine](/deratisation/ablon-sur-seine).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Villeneuve-Saint-Georges ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Immeuble, pavillon ou commerce : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'La Seine et l’Yerres font-elles venir les rats ?', a: 'Oui : l’eau, les berges et les caves inondables sont le territoire du surmulot ([mode de vie du rat](/blog/rat-mode-de-vie)). Les immeubles et maisons proches doivent surveiller caves, soupiraux et regards.' },
    { q: 'J’habite un immeuble ancien du centre : pourquoi des rats ?', a: 'Les caves anciennes, les réseaux vétustes et la proximité de la Seine leur offrent abri et passages. Le traitement doit couvrir tout le sous-sol, avec rebouchage des accès.' },
    { q: 'J’habite aux Graviers ou au Bois Matar : qui paie la dératisation ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Un rat est sorti de mes toilettes : que faire ?', a: 'Fermez l’abattant, mettez un poids dessus et appelez-nous (voir [rat dans les toilettes](/blog/rat-dans-les-toilettes)). Nous traitons la colonie et vous conseillons sur la pose d’un clapet anti-rongeurs par un plombier.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Villeneuve-Saint-Georges ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [VSG_INSEE, VSG_WIKI, RSD_94, SPF_LEPTO],
}

// ── Villiers-sur-Marne (26/11/2026) ──
const VSM_WIKI: Source = { label: 'Wikipédia, Villiers-sur-Marne (ru de la Lande, sous-sol de marne, quartiers, Hautes-Noues, logement, bois Saint-Martin)', url: 'https://fr.wikipedia.org/wiki/Villiers-sur-Marne' }
const VSM_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 94079, Villiers-sur-Marne', url: 'https://geo.api.gouv.fr/communes?code=94079&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['villiers-sur-marne'] = {
  maj: '2026-11-26',
  accroche: 'À Villiers-sur-Marne, la Marne ne coule pas : le ruisseau de la ville, le ru de la Lande, a été transformé en égout souterrain. Ajoutez un sol de marne qui fissure les maisons, des grands ensembles et le chantier de la ligne 15 : les rats ont de quoi faire. Nous aussi.',
  societe: {
    titre: 'Société de dératisation à Villiers-sur-Marne (94350) : une ville sur la marne, sans la Marne',
    paras: [
      'Villiers-sur-Marne compte **33 162 habitants** sur **4,32 km²**, entre 66 et 103 mètres d’altitude, sur le plateau de Brie. Surprise : la **Marne ne traverse pas** la commune, elle passe à moins de 800 mètres, à Bry-sur-Marne. Le nom vient du **sous-sol de marne bleue**, une glaise qui gonfle et se rétracte : les constructions bougent et des **fissures** apparaissent régulièrement. Pour un rongeur, chaque fissure est une porte d’entrée.',
      'Le ruisseau local, le **ru de la Lande**, a été **canalisé et transformé en égout souterrain**, sous la voie ferrée. Les égouts sont l’habitat du **surmulot** : c’est par ce réseau que les rats circulent sous la ville. En 2020, **65,7 % des logements** étaient des appartements et **32,1 %** des maisons : à Villiers, nous traitons autant de **caves d’immeubles** que de **jardins de pavillons**.',
      'Nous intervenons à Villiers-sur-Marne depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [souris à Villiers-sur-Marne](/souris/villiers-sur-marne), [punaises de lit à Villiers-sur-Marne](/punaises-de-lit/villiers-sur-marne) et [fourmis à Villiers-sur-Marne](/fourmis/villiers-sur-marne).',
    ],
  },
  chiffres: [
    { valeur: '33 162', texte: 'habitants (population légale Insee), code postal 94350.', source: VSM_INSEE },
    { valeur: '800 m', texte: 'à peine séparent Villiers de la Marne, qui ne traverse pas la commune : le nom vient de son sous-sol de marne bleue.', source: VSM_WIKI },
    { valeur: '7 000', texte: 'habitants environ aux Hautes-Noues, quartier prioritaire depuis 2015, soit près d’un quart de la ville.', source: VSM_WIKI },
    { valeur: '32,1 %', texte: 'des logements sont des maisons individuelles et 65,7 % des appartements (2020).', source: VSM_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Villiers-sur-Marne : la ville quartier par quartier',
    intro: 'Villiers compte une douzaine de quartiers, des **Hautes-Noues** au **Bois de Gaumont**, des **Boutareines** aux **Fontaines Giroux**. Beaucoup sont nés dans les années 1960 et 1970 avec la ville nouvelle de **Marne-la-Vallée**, d’autres sont des lotissements des années 1930. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les Hautes-Noues et les grands ensembles',
        texte: 'Quartier prioritaire depuis 2015, à la limite de **Noisy-le-Grand**, les Hautes-Noues réunissent près de 7 000 habitants. Caves, vide-ordures, locaux à poubelles et espaces verts entre les immeubles : le traitement se fait avec le **bailleur**, sur toutes les **parties communes**, puis nous rebouchons les passages vers les logements.',
        photo: { src: '/villes/villiers-sur-marne/hautes-noues.jpg', alt: 'Immeubles du quartier des Hautes-Noues à Villiers-sur-Marne', legende: 'Les Hautes-Noues, quartier prioritaire : immeubles, parkings et locaux à poubelles partagés.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + "Arr%C3%AAt_Bus_Ferdinand_Buisson_Boulevard_Bishop%27s_Stortford_-_Villiers-sur-Marne_(FR94)_-_2022-03-17_-_3.jpg" },
      },
      {
        nom: 'Le secteur de la gare et le chantier de la ligne 15',
        texte: 'Le **ru de la Lande** coule désormais en égout sous la voie ferrée. Autour de la gare du **RER E** et du futur pôle **Villiers - Champigny - Bry** de la ligne 15, les grands travaux de terrassement remuent le sous-sol et peuvent déloger les rongeurs vers les immeubles et pavillons voisins. Nous contrôlons caves, regards et jardins proches.',
        photo: { src: '/villes/villiers-sur-marne/chantier-ligne-15.jpg', alt: 'Chantier de la gare Villiers - Champigny - Bry de la ligne 15 à Villiers-sur-Marne', legende: 'Le chantier de la gare Villiers - Champigny - Bry de la ligne 15, en 2020.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Chantier_Station_M%C3%A9tro_Ligne_15_Bry_Villiers_Champigny_Villiers_Marne_10.jpg' },
      },
      {
        nom: 'Le bois Saint-Martin et ses pavillons',
        texte: 'Au sud-est, le **bois Saint-Martin** est partagé avec Noisy-le-Grand, Le Plessis-Trévise, Émerainville et Pontault-Combault ; la ville compte près de **14 hectares** d’espaces naturels, avec le parc du Bois-Saint-Denis. Les pavillons en lisière ont jardins, composts et abris : nous traitons les **terriers** et fermons les accès. Voir [rat dans le compost](/blog/rat-compost).',
        photo: { src: '/villes/villiers-sur-marne/avenue-bois-saint-martin.jpg', alt: 'Avenue du Bois-Saint-Martin, pavillons à Villiers-sur-Marne', legende: 'Avenue du Bois-Saint-Martin : pavillons, haies et jardins près du bois.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Avenue_Bois_Saint_Martin_-_Villiers-sur-Marne_(FR94)_-_2021-10-02_-_1.jpg' },
      },
      {
        nom: 'Les Perroquets, le Bois de Gaumont et le Centre',
        texte: 'Les lotissements des années 1930, notamment au **Bois de Gaumont**, et les ruelles pavillonnaires comme le **Cottage des Perroquets** ont des maisons anciennes, des **vide sanitaires** et des murs que la marne fait bouger. Les souris et les rats passent par les fissures : nous les repérons et les rebouchons. Voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
        photo: { src: '/villes/villiers-sur-marne/cottage-perroquets.jpg', alt: 'Ruelle pavillonnaire du Cottage des Perroquets à Villiers-sur-Marne', legende: 'Le Cottage des Perroquets : ruelle de pavillons, murets et jardins.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Cottage_Perroquets_-_Villiers-sur-Marne_(FR94)_-_2022-03-14_-_1.jpg' },
      },
      {
        nom: 'Les Boutareines, les Portes de Villiers et les zones commerciales',
        texte: 'Vers **Champigny-sur-Marne**, les Boutareines accueillent grandes enseignes et entrepôts, et les Portes de Villiers un espace commercial le long de l’**A4**. Quais de livraison, bennes et restauration : nous proposons un **contrat de suivi** aux professionnels. Voir [dératisation pour les professionnels](/professionnels).',
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Villiers-sur-Marne (94350) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Grand ensemble : vide-ordures, caves, local à poubelles. Pavillon : jardin, abri, vide sanitaire, fissures. Commerce : réserves et quais.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Fissures et passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Villiers-sur-Marne (94350) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans le jardin d’un pavillon', x: 'Terriers au pied des haies, sous l’abri ou le compost : nous traitons la colonie et fermons les accès à la maison.' },
      { t: 'Des souris par les fissures d’une maison', x: 'Le sol de marne fait bouger les murs : une fissure de quelques millimètres suffit à une souris. Voir [souris à Villiers-sur-Marne](/souris/villiers-sur-marne) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des rats au vide-ordures d’un immeuble', x: 'Le signe d’une colonie dans les parties communes : le bailleur ou le syndic organise le traitement, nous rebouchons ensuite les passages.' },
      { t: 'Un rat qui sort des toilettes', x: 'Le réseau d’égouts, dont l’ancien ru de la Lande, est leur autoroute : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes).' },
      { t: 'Des rats derrière un commerce', x: 'Bennes et réserves des zones commerciales : un contrat de suivi avec passages réguliers évite le retour des rongeurs.' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, propriétaire, bailleur : qui fait quoi à Villiers-sur-Marne',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Les grands ensembles se traitent à la demande du **bailleur**, les copropriétés à celle du **syndic**, les pavillons à celle de leur propriétaire.',
      'Locataire, signalez les rats **par écrit**, avec photos et dates. Pour des rats sur la voie publique ou dans un parc, alertez la **mairie de Villiers-sur-Marne**. Pour un logement insalubre, la mairie ou l’Agence régionale de santé peuvent aussi être saisies.',
      'Nous intervenons aussi tout autour : [Champigny-sur-Marne](/deratisation/champigny-sur-marne), [Bry-sur-Marne](/deratisation/bry-sur-marne), [Le Plessis-Trévise](/deratisation/le-plessis-trevise) et [Chennevières-sur-Marne](/deratisation/chennevieres-sur-marne).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Villiers-sur-Marne ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Immeuble, pavillon ou commerce : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Pourquoi y a-t-il des rats à Villiers alors que la Marne n’y passe pas ?', a: 'Parce que les rats vivent surtout dans les égouts, et le ruisseau de la ville, le ru de la Lande, est devenu un égout souterrain. Ajoutez jardins, composts et locaux à poubelles : ils ont abri et nourriture ([mode de vie du rat](/blog/rat-mode-de-vie)).' },
    { q: 'Les fissures de ma maison laissent-elles entrer les rongeurs ?', a: 'Oui : le sous-sol de marne fait bouger les constructions. Une souris passe par un trou de la taille d’un crayon, un rat par une ouverture à peine plus large. Le rebouchage fait partie de notre traitement.' },
    { q: 'J’habite aux Hautes-Noues : qui paie la dératisation ?', a: 'Les parties communes relèvent du bailleur. Le règlement sanitaire du Val-de-Marne ([article 119](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants.' },
    { q: 'Le chantier de la ligne 15 fait-il fuir les rats vers les maisons ?', a: 'Les grands terrassements peuvent déranger les rongeurs installés dans le sol. Si vous voyez des rats apparaître près des travaux, faites contrôler cave, jardin et regards.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Villiers-sur-Marne ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [VSM_INSEE, VSM_WIKI, RSD_94, SPF_LEPTO],
}

// ── Hauts-de-Seine (92) : sources communes (27/11/2026). Pas de texte officiel lisible donnant le numéro de l'article
// « rongeurs » du règlement sanitaire du 92 : on cite la loi de 1989 et les articles 26 et 120 rappelés par Meudon.
const LOI_89: Source = { label: 'Loi n° 89-462 du 6 juillet 1989 tendant à améliorer les rapports locatifs, article 6 (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310' }
const MEUDON_RSD92: Source = { label: 'Ville de Meudon, Animaux nuisibles et sauvages (dératisation, assainissement par GPSO, règlement sanitaire départemental des Hauts-de-Seine)', url: 'https://meudon.fr/mon-quotidien/environnement/animaux/animaux-nuisibles-et-sauvages/' }
const QUI_PAIE_92 = '**Qui paie** : dans un logement loué, le bailleur doit fournir un logement exempt de nuisibles (loi du 6 juillet 1989, **article 6**) ; en copropriété, les parties communes relèvent du **syndic** ; une maison, de son propriétaire.'
const REGLEMENT_92 = 'loi du 6 juillet 1989 et règlement sanitaire départemental des Hauts-de-Seine'

// ── Boulogne-Billancourt (27/11/2026) ──
const BB_WIKI: Source = { label: 'Wikipédia, Boulogne-Billancourt (boucle de la Seine, crues, quartiers, île Seguin, Trapèze, logement, parcs)', url: 'https://fr.wikipedia.org/wiki/Boulogne-Billancourt' }
const BB_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 92012, Boulogne-Billancourt', url: 'https://geo.api.gouv.fr/communes?code=92012&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['boulogne-billancourt'] = {
  maj: '2026-11-27',
  quiPaie: QUI_PAIE_92,
  reglement: REGLEMENT_92,
  accroche: 'Une plaine basse enserrée par la Seine, 96 % d’appartements, l’île Seguin, ancien site Renault, et le bois de Boulogne au nord : à Boulogne-Billancourt, les rats passent du fleuve aux caves d’immeubles. Nous les traitons quartier par quartier.',
  societe: {
    titre: 'Société de dératisation à Boulogne-Billancourt (92100) : la ville la plus peuplée du 92, dans une boucle de la Seine',
    paras: [
      'Boulogne-Billancourt compte **119 019 habitants** sur **6,15 km²** : c’est la commune la plus peuplée des Hauts-de-Seine, avec près de **19 300 habitants au km²**. Elle occupe une **plaine basse**, entre 28 et 40 mètres d’altitude, bordée au sud et à l’ouest par une **boucle de la Seine** et au nord par le **bois de Boulogne**. Sols de sables et d’alluvions, eau peu profonde : la ville est exposée aux **crues**, comme celle de **1910**.',
      'Les logements sont à **96,6 % des appartements** : immeubles haussmanniens, grands ensembles, immeubles récents du Trapèze. Pour une société de dératisation, ce sont surtout des **caves**, des **parkings souterrains**, des **locaux à poubelles** et des **gaines** à traiter, avec le **syndic**. Les quais, les parcs et les anciens terrains Renault offrent aux rats des passages vers les immeubles riverains.',
      'Nous intervenons à Boulogne-Billancourt depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [punaises de lit à Boulogne-Billancourt](/punaises-de-lit/boulogne-billancourt) et [fourmis à Boulogne-Billancourt](/fourmis/boulogne-billancourt).',
    ],
  },
  chiffres: [
    { valeur: '119 019', texte: 'habitants (population légale Insee) : la ville la plus peuplée des Hauts-de-Seine, code postal 92100.', source: BB_INSEE },
    { valeur: '96,6 %', texte: 'des logements sont des appartements : caves, parkings et locaux à poubelles partagés sont les premiers points à contrôler.', source: BB_WIKI },
    { valeur: '28 à 40 m', texte: 'd’altitude seulement : une plaine basse entourée par la Seine, exposée aux crues comme celle de 1910.', source: BB_WIKI },
    { valeur: '≈ 19 300', texte: 'habitants au km² (119 019 habitants sur 6,15 km²), l’une des plus fortes densités d’Île-de-France hors Paris.', source: BB_INSEE },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Boulogne-Billancourt : la ville quartier par quartier',
    intro: 'Boulogne-Billancourt compte six quartiers, de **Parchamp-Albert-Kahn** au nord à **Billancourt-Rives de Seine** au sud, en passant par les **Princes-Marmottan**, **Silly-Gallieni**, le **Centre-Ville** et **République-Point du Jour**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Billancourt, Rives de Seine et le Trapèze',
        texte: 'Au sud, sur les anciens terrains des usines Renault, l’écoquartier du **Trapèze** (74 hectares) a remplacé l’industrie par des immeubles récents, des parcs et des quais. Parkings souterrains, locaux techniques et berges : nous contrôlons les sous-sols et rebouchons les passages vers les logements.',
        photo: { src: '/villes/boulogne-billancourt/quai-de-stalingrad.jpg', alt: 'Immeubles du quai de Stalingrad au bord de la Seine à Boulogne-Billancourt', legende: 'Le quai de Stalingrad : immeubles riverains et berges de la Seine.', credit: 'GFreihalter', licence: 'CC BY-SA 4.0', page: W + 'Boulogne-Billancourt_(92)_Quai_de_Stalingrad_214.jpg' },
      },
      {
        nom: 'L’île Seguin et le Point du Jour',
        texte: 'L’**île Seguin**, ancien centre historique de Renault, est aujourd’hui en réaménagement ; le quartier **République-Point du Jour** accueille de nombreuses entreprises. Chantiers, bureaux et restaurants d’entreprise : les travaux déplacent les rongeurs, les cuisines les attirent. Voir [dératisation pour les professionnels](/professionnels).',
        photo: { src: '/departements/hauts-de-seine/ile-seguin-boulogne.jpg', alt: 'Vue aérienne de l’île Seguin et de la Seine à Boulogne-Billancourt', legende: 'L’île Seguin et la boucle de la Seine vues du ciel.', credit: 'David.Monniaux', licence: 'CC BY-SA 3.0', page: W + 'Ile_Seguin_Boulogne_Billancourt_P1190130.jpg' },
      },
      {
        nom: 'Les Princes-Marmottan et la lisière du bois',
        texte: 'Au nord, près du **bois de Boulogne** et du stade Roland-Garros : hôtels particuliers, maisons et immeubles avec jardin. Les rongeurs du bois se rapprochent des jardins et des caves à l’automne : nous traitons les **terriers** et fermons les accès. Voir [rat dans le compost](/blog/rat-compost).',
        photo: { src: '/villes/boulogne-billancourt/boulevard-d-auteuil.jpg', alt: 'Hôtel particulier et grilles boulevard d’Auteuil à Boulogne-Billancourt', legende: 'Boulevard d’Auteuil : hôtels particuliers et jardins en bordure du bois de Boulogne.', credit: 'Bledard92', licence: 'CC BY-SA 3.0', page: W + 'Boulevard_auteuil_boulogne_billancourt.JPG' },
      },
      {
        nom: 'Parchamp-Albert-Kahn et le parc Edmond-de-Rothschild',
        texte: 'Le **parc Edmond-de-Rothschild**, au nord-ouest, représente près de la moitié des espaces verts de la ville ; autour, des rues résidentielles et les jardins Albert-Kahn. Pelouses, massifs et pavillons : les rats creusent au pied des haies et des murs. Voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
        photo: { src: '/villes/boulogne-billancourt/parc-rothschild.jpg', alt: 'Le château Rothschild dans le parc Edmond-de-Rothschild à Boulogne-Billancourt', legende: 'Le château Rothschild, au cœur du parc Edmond-de-Rothschild.', credit: 'Traumrune', licence: 'CC BY-SA 3.0', page: W + 'Boulogne-parc-Rothschild_18.JPG' },
      },
      {
        nom: 'Le Centre-Ville et Silly-Gallieni',
        texte: 'Cœur historique, immeubles haussmanniens, commerces, marchés et restaurants le long de la route de la Reine : la dératisation s’y fait surtout en **copropriété**, cave par cave, et chez les **commerçants**. Voir [le plan de lutte d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).',
        photo: { src: '/villes/boulogne-billancourt/route-de-la-reine.jpg', alt: 'La route de la Reine, immeubles et commerces à Boulogne-Billancourt', legende: 'La route de la Reine : immeubles anciens et commerces en rez-de-chaussée.', credit: 'Benjism89', licence: 'CC BY-SA 3.0', page: W + 'Boulogne-Billancourt_-_Cours_de_la_Reine_-_2.JPG' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Boulogne-Billancourt (92100) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Immeuble : caves, parking, local à poubelles, gaines. Maison du nord de la ville : jardin, abri, vide sanitaire. Commerce : réserves et cuisine.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Boulogne-Billancourt (92100) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans les caves ou le parking d’un immeuble', x: 'Le cas le plus fréquent dans une ville d’appartements : nous traitons tout le sous-sol avec le syndic, puis rebouchons les passages vers les logements.' },
      { t: 'Des rats après une montée de la Seine', x: 'Dans une plaine basse entourée par le fleuve, les crues et les fortes pluies chassent les rats des berges et des réseaux vers les caves. Faites contrôler votre sous-sol après ces épisodes.' },
      { t: 'Des rongeurs dans un restaurant ou des bureaux', x: 'Postes numérotés, plan de localisation, passages hors service, registre et attestation pour vos contrôles d’hygiène.' },
      { t: 'Un rat qui sort des toilettes', x: 'Le réseau d’assainissement est leur chemin : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes). Nous traitons la colonie et conseillons la pose d’un clapet par un plombier.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [par où entrent les souris](/blog/souris-par-ou-entrent-elles) et [souris dans les Hauts-de-Seine](/souris/hauts-de-seine).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, syndic, bailleur : qui fait quoi à Boulogne-Billancourt',
    paras: [
      'Dans un logement loué, la **loi du 6 juillet 1989** (article 6) impose au **bailleur** de fournir un logement décent, exempt de nuisibles. En copropriété, les caves, parkings et locaux à poubelles relèvent du **syndic** ; une maison, de son propriétaire. Locataire, signalez les rats **par écrit**, avec photos et dates.',
      'Boulogne-Billancourt fait partie du territoire **Grand Paris Seine Ouest (GPSO)**. À Meudon, ville du même territoire, la Ville indique que le réseau d’assainissement est traité par GPSO et que la commune agit sur l’espace public. Le **règlement sanitaire départemental des Hauts-de-Seine** interdit aussi de nourrir les animaux errants, pigeons compris (articles 26 et 120) : une source de nourriture pour les rats.',
      'Nous intervenons aussi tout autour : [Issy-les-Moulineaux](/deratisation/issy-les-moulineaux), [Meudon](/deratisation/meudon) et [Paris 16e](/deratisation/paris-16). Toutes nos villes du département : [dératisation dans les Hauts-de-Seine](/deratisation/hauts-de-seine).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Boulogne-Billancourt ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Immeuble, maison ou commerce : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Pourquoi des rats dans une ville aussi urbaine que Boulogne ?', a: 'La Seine entoure la ville au sud et à l’ouest : le surmulot vit près de l’eau et circule par les égouts jusqu’aux caves d’immeubles ([mode de vie du rat](/blog/rat-mode-de-vie)). Les locaux à poubelles et les commerces de bouche le nourrissent.' },
    { q: 'J’habite en copropriété : qui paie la dératisation de la cave ?', a: 'Les caves, parkings et locaux à poubelles sont des parties communes : c’est au syndic d’organiser et de financer le traitement. Prévenez-le par écrit, avec photos.' },
    { q: 'Je suis locataire à Boulogne-Billancourt : que faire ?', a: 'Le bailleur doit fournir un logement décent, exempt de nuisibles (loi du 6 juillet 1989, article 6). Signalez le problème par écrit, avec photos et dates, et gardez une copie.' },
    { q: 'Les travaux de l’île Seguin et du Trapèze font-ils sortir les rats ?', a: 'Les grands terrassements peuvent déranger les rongeurs installés dans le sol. Si des rats apparaissent près d’un chantier, faites contrôler cave, parking et regards.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Boulogne-Billancourt ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [BB_INSEE, BB_WIKI, LOI_89, MEUDON_RSD92, SPF_LEPTO],
}

// ── Nanterre (27/11/2026) ──
const NAN_WIKI: Source = { label: 'Wikipédia, Nanterre (Seine, plaine de Nanterre, quartiers, quartiers prioritaires, Les Groues, logement, parcs)', url: 'https://fr.wikipedia.org/wiki/Nanterre' }
const NAN_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 92050, Nanterre', url: 'https://geo.api.gouv.fr/communes?code=92050&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['nanterre'] = {
  maj: '2026-11-27',
  quiPaie: QUI_PAIE_92,
  reglement: REGLEMENT_92,
  accroche: 'Une plaine qui descend du mont Valérien jusqu’à la Seine, des tours de cité, un vieux bourg, un parc alimenté par l’eau du fleuve et le grand chantier des Groues : à Nanterre, les rats ont tous les terrains. Nous les traitons un par un.',
  societe: {
    titre: 'Société de dératisation à Nanterre (92000) : la préfecture des Hauts-de-Seine, entre Seine et mont Valérien',
    paras: [
      'Nanterre compte **97 783 habitants** sur **12,2 km²**. La ville occupe la **plaine de Nanterre**, qui s’étend de la **Seine**, au nord-ouest, jusqu’au **mont Valérien** et à la colline de **La Défense**. Berges, chemin de halage, réseaux d’eaux pluviales et grands parcs : le **surmulot**, le rat d’égout, y trouve eau et passages.',
      'En 2018, **84,4 % des logements** étaient des appartements et **14,1 %** des maisons ; seuls **26,6 %** des habitants étaient propriétaires de leur logement. La ville compte **six quartiers prioritaires**, avec environ **29 000 habitants**. Pour une société de dératisation, cela veut dire beaucoup de **caves**, de **vide-ordures** et de **locaux à poubelles** à traiter avec les **bailleurs**, et des pavillons avec jardin dans le vieux Nanterre.',
      'Nous intervenons à Nanterre depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [punaises de lit à Nanterre](/punaises-de-lit/nanterre) et [fourmis à Nanterre](/fourmis/nanterre).',
    ],
  },
  chiffres: [
    { valeur: '97 783', texte: 'habitants (population légale Insee), code postal 92000.', source: NAN_INSEE },
    { valeur: '84,4 %', texte: 'des logements sont des appartements et 14,1 % des maisons ; 26,6 % des habitants sont propriétaires (2018).', source: NAN_WIKI },
    { valeur: '≈ 29 000', texte: 'habitants vivent dans les six quartiers prioritaires de la ville, presque un tiers de la population.', source: NAN_WIKI },
    { valeur: '65 ha', texte: 'pour le nouveau quartier des Groues, en chantier jusqu’en 2032 : les terrassements déplacent les rongeurs.', source: NAN_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Nanterre : la ville quartier par quartier',
    intro: 'Nanterre compte dix quartiers, du **Centre** au **Petit-Nanterre**, en passant par le **Parc**, l’**Université**, le **Chemin de l’Île** et le **Plateau-Mont-Valérien**, et un onzième en construction, **les Groues**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Le Chemin de l’Île et les bords de Seine',
        texte: 'Au nord-ouest, la Seine borde la ville. Le **parc départemental du Chemin de l’Île** a des bassins alimentés par l’eau du fleuve et donne accès au chemin de halage. Berges, roselières et cités voisines : les rats circulent entre l’eau et les caves. Nous traitons les sous-sols avec les bailleurs et rebouchons les passages.',
        photo: { src: '/villes/nanterre/parc-chemin-de-l-ile.jpg', alt: 'Bassins et passerelle de dalles au parc du Chemin de l’Île à Nanterre', legende: 'Le parc du Chemin de l’Île : bassins alimentés par l’eau de la Seine.', credit: 'Ariel Kogan', licence: 'CC BY-SA 3.0', page: W + "Parc_du_Chemin-de-l%27Ile._CC_by_Ariel_Kogan.jpg" },
      },
      {
        nom: 'Le Parc et le parc André-Malraux',
        texte: 'Le **Parc** est le plus peuplé des quartiers prioritaires, avec environ 12 000 habitants. Tours, caves et vide-ordures d’un côté, les 25 hectares du **parc André-Malraux** de l’autre : le traitement se fait avec le **bailleur**, sur toutes les **parties communes**, puis nous rebouchons les passages vers les logements.',
        photo: { src: '/villes/nanterre/tours-aillaud-parc-malraux.jpg', alt: 'Les tours Aillaud vues depuis le parc André-Malraux à Nanterre', legende: 'Les tours Aillaud vues depuis le parc André-Malraux.', credit: 'Guilhem Vellut', licence: 'CC BY 2.0', page: W + 'Tours_Aillaud_@_Parc_Andr%C3%A9_Malraux_@_La_D%C3%A9fense_@_Paris_(34799539710).jpg' },
      },
      {
        nom: 'Le Centre et le Vieux-Pont',
        texte: 'Autour du vieux bourg et du **parc des Anciennes-Mairies**, maisons anciennes, petits immeubles et commerces : caves, cours et jardins de ville. Nous cherchons les passages au pied des murs et autour des canalisations. Voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
        photo: { src: '/villes/nanterre/rue-du-vieux-pont.jpg', alt: 'La rue du Vieux-Pont, maisons et immeubles à Nanterre', legende: 'La rue du Vieux-Pont : maisons de ville, murets et petits immeubles.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Rue_Vieux_Pont_-_Nanterre_(FR92)_-_2023-09-14_-_1.jpg' },
      },
      {
        nom: 'Les Groues et le Petit-Nanterre',
        texte: 'Le nouveau quartier des **Groues**, 65 hectares détachés du Parc Nord et du Petit-Nanterre, est en chantier jusqu’en 2032, le long des voies ferrées. Les grands terrassements dérangent les rongeurs installés dans le sol, qui peuvent gagner les immeubles voisins : faites contrôler caves et regards si des rats apparaissent.',
        photo: { src: '/villes/nanterre/chantier-les-groues.jpg', alt: 'Chantier du quartier des Groues le long des voies ferrées à Nanterre', legende: 'Le chantier des Groues, le long des voies ferrées.', credit: 'CrayzC00kie', licence: 'CC0', page: W + 'Construction_Les_Groues.jpg' },
      },
      {
        nom: 'Le Plateau-Mont-Valérien et la Boule',
        texte: 'Sur les pentes du **mont Valérien**, partagé avec Suresnes et Rueil-Malmaison, et autour de la **Boule**, des quartiers de pavillons avec jardin et des résidences : les rats creusent au pied des haies et des abris, puis entrent dans les garages. Voir [rat dans le compost](/blog/rat-compost).',
        photo: { src: '/villes/nanterre/place-de-la-boule.jpg', alt: 'La place de la Boule et les maisons alentour à Nanterre', legende: 'La place de la Boule : carrefour, maisons et petits immeubles.', credit: 'Auteur inconnu', licence: 'CC0', page: W + 'Place_de_la_Boule_de_Nanterre_dans_les_ann%C3%A9es_2010.jpeg' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Nanterre (92000) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Cité : vide-ordures, caves, local à poubelles. Vieux Nanterre : caves, cours, vide sanitaire. Pavillon du Plateau : jardin, abri, garage.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Nanterre (92000) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats au vide-ordures ou dans les caves d’une cité', x: 'Le signe d’une colonie dans les parties communes : le bailleur organise le traitement de tout l’immeuble, nous rebouchons ensuite les passages vers les logements.' },
      { t: 'Des rats près d’un chantier', x: 'Les Groues, les nouvelles lignes et les immeubles en construction remuent le sol : les rongeurs se déplacent vers les caves et jardins voisins. Un contrôle rapide évite qu’ils s’installent.' },
      { t: 'Des terriers dans le jardin d’un pavillon', x: 'Sous l’abri, au pied de la haie ou près du compost : nous traitons la colonie et fermons l’accès au vide sanitaire.' },
      { t: 'Un rat qui sort des toilettes', x: 'Le réseau d’assainissement est leur chemin : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes). Nous traitons la colonie et conseillons la pose d’un clapet par un plombier.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [par où entrent les souris](/blog/souris-par-ou-entrent-elles) et [souris dans les Hauts-de-Seine](/souris/hauts-de-seine).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, bailleur, syndic : qui fait quoi à Nanterre',
    paras: [
      'À Nanterre, près des trois quarts des habitants ne sont pas propriétaires de leur logement. La **loi du 6 juillet 1989** (article 6) impose au **bailleur** de fournir un logement décent, exempt de nuisibles. Dans les cités, les caves, vide-ordures et locaux à poubelles se traitent à la demande du **bailleur** ; en copropriété, à celle du **syndic** ; une maison, à celle de son propriétaire.',
      'Les communes agissent sur l’espace public et dans leurs bâtiments. Le **règlement sanitaire départemental des Hauts-de-Seine** interdit aussi de nourrir les animaux errants, pigeons compris (articles 26 et 120, rappelés par la ville de Meudon) : une source de nourriture pour les rats. Locataire, signalez les rats **par écrit**, avec photos et dates.',
      'Nous intervenons aussi tout autour : [Rueil-Malmaison](/deratisation/rueil-malmaison), [Suresnes](/deratisation/suresnes), [Puteaux](/deratisation/puteaux), [Courbevoie](/deratisation/courbevoie), [La Garenne-Colombes](/deratisation/la-garenne-colombes) et [Colombes](/deratisation/colombes). Toutes nos villes : [dératisation dans les Hauts-de-Seine](/deratisation/hauts-de-seine).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Nanterre ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Immeuble, maison ou commerce : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'J’habite une cité à Nanterre : qui paie la dératisation ?', a: 'Les parties communes (caves, vide-ordures, locaux à poubelles) relèvent du bailleur. Dans votre logement, le bailleur doit vous fournir un logement exempt de nuisibles (loi du 6 juillet 1989, article 6). Signalez-le par écrit.' },
    { q: 'La Seine fait-elle venir les rats à Nanterre ?', a: 'Oui : le surmulot vit près de l’eau et circule par les égouts et les réseaux d’eaux pluviales ([mode de vie du rat](/blog/rat-mode-de-vie)). Les quartiers proches des berges, comme le Chemin de l’Île, doivent surveiller caves et regards.' },
    { q: 'Le chantier des Groues fait-il sortir les rats ?', a: 'Les grands terrassements peuvent déranger les rongeurs installés dans le sol. Si des rats apparaissent près du chantier, faites contrôler cave, jardin et regards.' },
    { q: 'Un rat est sorti de mes toilettes : que faire ?', a: 'Fermez l’abattant, mettez un poids dessus et appelez-nous (voir [rat dans les toilettes](/blog/rat-dans-les-toilettes)). Nous traitons la colonie et vous conseillons sur la pose d’un clapet anti-rongeurs par un plombier.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Nanterre ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [NAN_INSEE, NAN_WIKI, LOI_89, MEUDON_RSD92, SPF_LEPTO],
}

// ── Asnières-sur-Seine (27/11/2026) ──
const ASN_WIKI: Source = { label: 'Wikipédia, Asnières-sur-Seine (bras de Seine remblayés, sols humides et demi-sous-sols, crue de 1910, quartiers)', url: 'https://fr.wikipedia.org/wiki/Asni%C3%A8res-sur-Seine' }
const ASN_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 92004, Asnières-sur-Seine', url: 'https://geo.api.gouv.fr/communes?code=92004&fields=nom,code,codesPostaux,population,surface' }

REFONTE_DERATISATION['asnieres-sur-seine'] = {
  maj: '2026-11-27',
  quiPaie: QUI_PAIE_92,
  reglement: REGLEMENT_92,
  accroche: 'Des bras de Seine remblayés, des îles disparues, des immeubles posés sur un ancien fond marécageux et des rues inondées en 1910 : à Asnières-sur-Seine, le sous-sol est humide et les rats s’y plaisent. Nous les traitons quartier par quartier.',
  societe: {
    titre: 'Société de dératisation à Asnières-sur-Seine (92600) : une ville bâtie sur d’anciens bras de Seine',
    paras: [
      'Asnières-sur-Seine compte **93 941 habitants** sur **4,82 km²**, soit près de **19 500 habitants au km²**, sur la rive gauche de la **Seine**. Son territoire est plat : les anciens bras du fleuve ont été **remblayés**, faisant disparaître l’île des Ravageurs et l’île Robinson. Le sous-sol garde les **nappes humides de l’ancien fond marécageux**.',
      'Au bord de la Seine, la plupart des immeubles n’ont que des **demi-sous-sols** pris dans la couche de remblais, qui jouent le rôle de **vide sanitaire**. Humidité, réseaux et caves basses : c’est le milieu préféré du **surmulot**, le rat d’égout. Lors de la **crue de 1910**, des rues entières comme la rue Dusseau ou la rue de Normandie ont été inondées. Pour une société de dératisation, ces sous-sols sont les premiers points à contrôler.',
      'Nous intervenons à Asnières-sur-Seine depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [punaises de lit à Asnières-sur-Seine](/punaises-de-lit/asnieres-sur-seine) et [fourmis à Asnières-sur-Seine](/fourmis/asnieres-sur-seine).',
    ],
  },
  chiffres: [
    { valeur: '93 941', texte: 'habitants (population légale Insee), code postal 92600.', source: ASN_INSEE },
    { valeur: '≈ 19 500', texte: 'habitants au km² (93 941 habitants sur 4,82 km²) : immeubles serrés, caves et locaux à poubelles partagés.', source: ASN_INSEE },
    { valeur: '3 îles', texte: 'aujourd’hui disparues ou rattachées à la terre ferme : des Ravageurs, Robinson et Vailard. Les bras de Seine ont été remblayés.', source: ASN_WIKI },
    { valeur: '1910', texte: 'crue de la Seine : les rues Dusseau et de Normandie, entre autres, ont été inondées. Les sous-sols bas restent humides.', source: ASN_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Asnières-sur-Seine : la ville quartier par quartier',
    intro: 'L’Insee découpe la ville en sept grands quartiers : **Bécon-Flachat**, **Champs-Magenta**, **Alma-Philosophes**, **Mairie**, **Grésillons**, **Renoir-Métro** et **Nord**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Les bords de Seine et les anciennes îles',
        texte: 'Sur les terrains sableux et humides gagnés sur les anciens bras du fleuve, les immeubles reposent sur des **demi-sous-sols** qui servent de vide sanitaire. Lors des crues, comme en 1910, l’eau chasse les rats vers ces sous-sols. Nous traitons les vides sanitaires, posons des grilles sur les aérations et rebouchons les passages vers les logements.',
        photo: { src: '/villes/asnieres-sur-seine/crue-1910-rue-dusseau.jpg', alt: 'Carte postale de la rue Dusseau inondée à Asnières en janvier 1910', legende: 'La rue Dusseau inondée en janvier 1910 : on y circulait en barque.', credit: 'Carte postale ancienne, scan Claude_villetaneuse', licence: 'Domaine public', page: W + 'BF_193_-_ASNIERES_-_Les_inondations_de_Janvier_1910_-_Rue_Dusseau.JPG' },
      },
      {
        nom: 'La Mairie, le château et le parc Voyer-d’Argenson',
        texte: 'Autour de l’hôtel de ville, du château d’Asnières et du **parc Voyer-d’Argenson** : immeubles anciens, cours et jardins. Pelouses, massifs et caves voûtées : les rats creusent au pied des murs et passent par les soupiraux. Voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
        photo: { src: '/villes/asnieres-sur-seine/parc-voyer-d-argenson.jpg', alt: 'Statue, passerelle et massifs du parc Voyer-d’Argenson à Asnières-sur-Seine', legende: 'Le parc Voyer-d’Argenson : pelouses, massifs et passerelle.', credit: 'Parisette', licence: 'CC BY-SA 3.0', page: W + 'Square_Voyer_d%27Argenson.jpg' },
      },
      {
        nom: 'Les Grésillons et le nord de la ville',
        texte: 'Au nord, vers Gennevilliers, la **cité-jardin des Grésillons** et des quartiers d’habitat social : caves, vide-ordures et locaux à poubelles partagés. Le traitement se fait avec le **bailleur**, sur toutes les **parties communes**, puis nous rebouchons les passages vers les logements.',
        photo: { src: '/villes/asnieres-sur-seine/cite-jardin-gresillons.jpg', alt: 'Carte postale ancienne de la cité-jardin des Grésillons', legende: 'La cité-jardin des Grésillons, entre Asnières et Gennevilliers.', credit: 'Carte postale ancienne, scan Claude Shoshany', licence: 'Domaine public', page: W + 'Asni%C3%A8res_Gennevilliers_-_Cit%C3%A9_Jardin_des_Gr%C3%A9sillons_(dans_le_fond,_l%27Hopital_Beaujon).JPG' },
      },
      {
        nom: 'Alma-Philosophes et Seine Est',
        texte: 'Le cœur historique, le long du boulevard Voltaire et de l’avenue Gabriel-Péri, est en rénovation ; à l’est, l’ancien site industriel de 7 hectares de **Seine Est** devient un quartier de bureaux, de commerces et de logements. Chantiers et démolitions dérangent les rongeurs : faites contrôler caves et regards si des rats apparaissent.',
        photo: { src: '/villes/asnieres-sur-seine/boulevard-voltaire.jpg', alt: 'Le boulevard Voltaire et ses immeubles à Asnières-sur-Seine', legende: 'Le boulevard Voltaire, au cœur du quartier des Philosophes.', credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: W + 'Boulevard_Voltaire_-_Asni%C3%A8res-sur-Seine_(FR92)_-_2024-04-06_-_1.jpg' },
      },
      {
        nom: 'Bécon-Flachat et Champs-Magenta',
        texte: 'Autour de la gare de **Bécon-les-Bruyères**, rues résidentielles, immeubles et maisons de ville : la dératisation se fait surtout en **copropriété**, cave par cave, et dans les jardins. Voir [rat dans le compost](/blog/rat-compost).',
        photo: { src: '/villes/asnieres-sur-seine/gare-de-becon.jpg', alt: 'La gare de Bécon-les-Bruyères et les immeubles voisins à Asnières-sur-Seine', legende: 'La gare de Bécon-les-Bruyères : voies ferrées, talus et immeubles riverains.', credit: 'Benjism89', licence: 'CC BY-SA 3.0', page: W + 'Gare_de_B%C3%A9con-les-Bruy%C3%A8res_-_2.jpg' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Asnières-sur-Seine (92600) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Bord de Seine : demi-sous-sol, vide sanitaire, aérations. Cité : vide-ordures, caves, local à poubelles. Maison : jardin, abri, garage.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Asnières-sur-Seine (92600) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans le demi-sous-sol d’un immeuble', x: 'Près de la Seine, les demi-sous-sols humides servent de vide sanitaire et attirent les surmulots. Nous traitons tout le sous-sol avec le syndic, puis posons grilles et rebouchages.' },
      { t: 'Des rats après une montée de la Seine', x: 'Les crues et les fortes pluies chassent les rats des berges et des réseaux vers les caves. Faites contrôler votre sous-sol après ces épisodes.' },
      { t: 'Des rats au vide-ordures d’une cité', x: 'Le signe d’une colonie dans les parties communes : le bailleur organise le traitement de tout l’immeuble, nous rebouchons ensuite les passages.' },
      { t: 'Un rat qui sort des toilettes', x: 'Le réseau d’assainissement est leur chemin : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes). Nous traitons la colonie et conseillons la pose d’un clapet par un plombier.' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [par où entrent les souris](/blog/souris-par-ou-entrent-elles) et [souris dans les Hauts-de-Seine](/souris/hauts-de-seine).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, syndic, bailleur : qui fait quoi à Asnières-sur-Seine',
    paras: [
      'Dans un logement loué, la **loi du 6 juillet 1989** (article 6) impose au **bailleur** de fournir un logement décent, exempt de nuisibles. En copropriété, les caves, demi-sous-sols et locaux à poubelles relèvent du **syndic** ; dans les cités, du **bailleur** ; une maison, de son propriétaire.',
      'Les communes agissent sur l’espace public et dans leurs bâtiments. Le **règlement sanitaire départemental des Hauts-de-Seine** interdit aussi de nourrir les animaux errants, pigeons compris (articles 26 et 120, rappelés par la ville de Meudon) : une source de nourriture pour les rats. Locataire, signalez les rats **par écrit**, avec photos et dates.',
      'Nous intervenons aussi tout autour : [Gennevilliers](/deratisation/gennevilliers), [Colombes](/deratisation/colombes), [Clichy](/deratisation/clichy), [Levallois-Perret](/deratisation/levallois-perret), [Courbevoie](/deratisation/courbevoie) et [La Garenne-Colombes](/deratisation/la-garenne-colombes). Toutes nos villes : [dératisation dans les Hauts-de-Seine](/deratisation/hauts-de-seine).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Asnières-sur-Seine ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Immeuble, maison ou commerce : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Pourquoi tant de rats près de la Seine à Asnières ?', a: 'Les bords de Seine sont bâtis sur des terrains sableux et humides, d’anciens bras du fleuve remblayés. Le surmulot aime l’humidité et circule par les égouts jusqu’aux demi-sous-sols ([mode de vie du rat](/blog/rat-mode-de-vie)).' },
    { q: 'Mon immeuble n’a qu’un demi-sous-sol : peut-on le dératiser ?', a: 'Oui. Ce demi-sous-sol joue le rôle de vide sanitaire : nous y posons des postes sécurisés, contrôlons les aérations et rebouchons les passages vers les logements. Le syndic organise le traitement des parties communes.' },
    { q: 'J’habite aux Grésillons : qui paie la dératisation ?', a: 'Les parties communes (caves, vide-ordures, locaux à poubelles) relèvent du bailleur ou du syndic. Dans votre logement, le bailleur doit vous fournir un logement exempt de nuisibles (loi du 6 juillet 1989, article 6). Signalez-le par écrit.' },
    { q: 'Un rat est sorti de mes toilettes : que faire ?', a: 'Fermez l’abattant, mettez un poids dessus et appelez-nous (voir [rat dans les toilettes](/blog/rat-dans-les-toilettes)). Nous traitons la colonie et vous conseillons sur la pose d’un clapet anti-rongeurs par un plombier.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Asnières-sur-Seine ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [ASN_INSEE, ASN_WIKI, LOI_89, MEUDON_RSD92, SPF_LEPTO],
}

// ── Colombes (27/11/2026) ──
const COL_WIKI: Source = { label: 'Wikipédia, Colombes (plateau calcaire et bords de Seine inondables, carrières, quartiers, logement, crue de 1910)', url: 'https://fr.wikipedia.org/wiki/Colombes' }
const COL_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : commune 92025, Colombes', url: 'https://geo.api.gouv.fr/communes?code=92025&fields=nom,code,codesPostaux,population,surface' }
const wc = (f: string, alt: string, legende: string, credit: string, licence: string, fichier: string): PhotoVille => ({ src: `/villes/colombes/${f}`, alt, legende, credit, licence, page: W + fichier })

REFONTE_DERATISATION['colombes'] = {
  maj: '2026-11-27',
  quiPaie: QUI_PAIE_92,
  reglement: REGLEMENT_92,
  accroche: 'Au nord, des bords de Seine inondables où la digue a cédé en 1910 ; au sud, un plateau calcaire creusé d’anciennes carrières ; entre les deux, des milliers de pavillons et de grands ensembles : à Colombes, les rats ont des jardins et des caves partout. Nous les traitons quartier par quartier.',
  societe: {
    titre: 'Société de dératisation à Colombes (92700) : la première commune pavillonnaire de la petite couronne',
    paras: [
      'Colombes compte **91 053 habitants** sur **7,8 km²**, dans la **boucle nord** des Hauts-de-Seine. Son territoire réunit deux ensembles : au sud, un **plateau calcaire** ; au nord, des **bords de Seine** alluviaux, de basse altitude, situés en **zone inondable**. Entre les deux, on a exploité des **carrières** et des **sablières**, comme aux Côtes d’Auty, jusqu’au début du XXe siècle.',
      'Colombes est présentée comme la **première commune pavillonnaire de la petite couronne** : en 2018, **25,2 % des logements** étaient des maisons et **73,8 %** des appartements, et **45,8 %** des habitants étaient propriétaires. Pour une société de dératisation, cela veut dire autant de **jardins**, de **vide sanitaires** et de **garages** que de **caves d’immeubles** et de **locaux à poubelles**.',
      'Nous intervenons à Colombes depuis notre base de **Saint-Maurice**, 7 jours sur 7.',
      'Nos autres pages pour la ville : [punaises de lit à Colombes](/punaises-de-lit/colombes) et [fourmis à Colombes](/fourmis/colombes).',
    ],
  },
  chiffres: [
    { valeur: '91 053', texte: 'habitants (population légale Insee), code postal 92700.', source: COL_INSEE },
    { valeur: '25,2 %', texte: 'des logements sont des maisons individuelles (2018) : jardins, abris et vide sanitaires à surveiller.', source: COL_WIKI },
    { valeur: '1910', texte: 'rupture de la digue lors de la crue de la Seine : le nord de la commune reste en zone inondable.', source: COL_WIKI },
    { valeur: '3 quartiers', texte: 'en renouvellement urbain : les Grèves, les Fossés-Jean et Europe-Île-Marante.', source: COL_WIKI },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Colombes : la ville quartier par quartier',
    intro: 'L’Insee découpe Colombes en quatre grands quartiers : **Wiener-Centre-ville-Champarons**, **Europe-Gare du Stade-Fossés-Jean**, **les Grèves-Plateau-Moslard** et **Petit-Colombes**. Voici ce que chaque secteur implique pour une dératisation.',
    zones: [
      {
        nom: 'Le nord inondable et les bords de Seine',
        texte: 'Au nord, les terrains bas au bord de la Seine sont en **zone inondable** ; en janvier 1910, la digue a cédé. Berges, réseaux et sous-sols humides : le surmulot y circule et remonte vers les caves. Nous contrôlons sous-sols et regards, puis rebouchons les passages, en particulier après une montée des eaux.',
        photo: wc('crue-1910-digue.jpg', 'Carte postale de la rupture de la digue à Colombes en janvier 1910', 'Janvier 1910 : la digue cède et le nord de Colombes est inondé.', 'Carte postale ancienne, versée par G. Garitan', 'CC BY-SA 4.0', 'Janv_1910_Colombes_rupture_digue_1404858.jpg'),
      },
      {
        nom: 'Les Grèves, les Côtes d’Auty et les anciennes carrières',
        texte: 'Sur le coteau entre plateau et Seine, d’anciennes carrières et sablières ont laissé place à des **grands ensembles**, comme la cité des Côtes d’Auty. Caves, vide-ordures et locaux à poubelles : le traitement se fait avec le **bailleur**, sur toutes les **parties communes**.',
        photo: wc('cite-cotes-d-auty.jpg', 'Les immeubles de la cité des Côtes d’Auty à Colombes', 'La cité des Côtes d’Auty, grand ensemble bâti sur le coteau.', 'AL', 'CC BY 3.0', "Cit%C3%A9_c%C3%B4te_d%27Auty.JPG"),
      },
      {
        nom: 'Le Plateau et les quartiers pavillonnaires',
        texte: 'Au sud, sur le plateau calcaire, des rues entières de **pavillons avec jardin**. Les rats creusent sous les abris, au pied des haies et près des composts, puis entrent par le vide sanitaire ou le garage. Voir [rat dans le compost](/blog/rat-compost) et [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).',
        photo: wc('quartier-du-plateau.jpg', 'Vue sur les toits des pavillons du quartier du Plateau à Colombes', 'Le quartier du Plateau : une mer de pavillons avec jardin.', 'AL', 'CC BY 3.0', 'Colombesplateau.JPG'),
      },
      {
        nom: 'Le Centre-ville et la gare',
        texte: 'Autour de la gare, créée en 1854, l’habitat est dense : immeubles anciens, commerces et restaurants. La dératisation s’y fait surtout en **copropriété**, cave par cave, et chez les **commerçants**. Voir [le plan de lutte d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).',
        photo: wc('gare-de-colombes.jpg', 'Les voies ferrées et les immeubles près de la gare de Colombes', 'Les abords de la gare de Colombes : voies, talus et immeubles riverains.', 'Clicsouris', 'CC BY-SA 3.0', 'Gare_de_Colombes_01.jpg'),
      },
      {
        nom: 'Europe, Île-Marante et le stade Yves-du-Manoir',
        texte: 'Au nord-ouest, le quartier Europe-Île-Marante, en rénovation, et le stade olympique **Yves-du-Manoir**, en reconversion. Chantiers, grands espaces verts et résidences : les travaux dérangent les rongeurs, qui gagnent les immeubles voisins. Faites contrôler caves et regards si des rats apparaissent.',
        photo: wc('stade-yves-du-manoir.jpg', 'Les tribunes et la pelouse du stade Yves-du-Manoir à Colombes', 'Le stade olympique Yves-du-Manoir.', 'Dr.Clint.Beans', 'CC BY-SA 3.0', 'Stade_Yves_du_Manoir_Colombes6.jpg'),
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Colombes (92700) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement.' },
      { t: 'Le diagnostic', x: 'Pavillon : jardin, abri, vide sanitaire, garage. Grand ensemble : vide-ordures, caves, local à poubelles. Bord de Seine : sous-sols et regards.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Colombes (92700) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans le jardin d’un pavillon', x: 'Le cas le plus fréquent à Colombes : terriers sous l’abri, au pied de la haie ou près du compost. Nous traitons la colonie et fermons l’accès au vide sanitaire.' },
      { t: 'Des rats au vide-ordures d’un grand ensemble', x: 'Le signe d’une colonie dans les parties communes : le bailleur organise le traitement de tout l’immeuble, nous rebouchons ensuite les passages vers les logements.' },
      { t: 'Des rats dans une cave après une crue', x: 'Au nord de la ville, la montée de la Seine chasse les rats des berges vers les sous-sols : nous traitons la cave entière puis rebouchons les passages.' },
      { t: 'Un rat qui sort des toilettes', x: 'Le réseau d’assainissement est leur chemin : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes). Nous traitons la colonie et conseillons la pose d’un clapet par un plombier.' },
      { t: 'Des souris dans une maison', x: 'Elles passent par les bas de portes, les gaines et le pourtour des tuyaux : voir [par où entrent les souris](/blog/souris-par-ou-entrent-elles) et [souris dans les Hauts-de-Seine](/souris/hauts-de-seine).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, syndic, bailleur : qui fait quoi à Colombes',
    paras: [
      'Dans un logement loué, la **loi du 6 juillet 1989** (article 6) impose au **bailleur** de fournir un logement décent, exempt de nuisibles. Dans les grands ensembles, les caves, vide-ordures et locaux à poubelles se traitent à la demande du **bailleur** ; en copropriété, à celle du **syndic** ; un pavillon, à celle de son propriétaire.',
      'Les communes agissent sur l’espace public et dans leurs bâtiments. Le **règlement sanitaire départemental des Hauts-de-Seine** interdit aussi de nourrir les animaux errants, pigeons compris (articles 26 et 120, rappelés par la ville de Meudon) : une source de nourriture pour les rats. Locataire, signalez les rats **par écrit**, avec photos et dates.',
      'Nous intervenons aussi tout autour : [La Garenne-Colombes](/deratisation/la-garenne-colombes), [Nanterre](/deratisation/nanterre), [Gennevilliers](/deratisation/gennevilliers), [Asnières-sur-Seine](/deratisation/asnieres-sur-seine), [Courbevoie](/deratisation/courbevoie) et [Bezons](/deratisation/bezons). Toutes nos villes : [dératisation dans les Hauts-de-Seine](/deratisation/hauts-de-seine).',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Colombes ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris. Pavillon, immeuble ou commerce : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'J’ai des rats dans mon jardin à Colombes : que faire ?', a: 'Fermez le compost, rentrez croquettes et graines, puis faites traiter les terriers. Nous fermons aussi l’accès au vide sanitaire pour que les rats n’entrent pas dans la maison ([rat dans le compost](/blog/rat-compost)).' },
    { q: 'J’habite près de la Seine : suis-je plus exposé ?', a: 'Oui : le nord de Colombes est en zone inondable, et le surmulot vit près de l’eau ([mode de vie du rat](/blog/rat-mode-de-vie)). Après une crue ou de fortes pluies, faites contrôler caves et regards.' },
    { q: 'J’habite aux Fossés-Jean ou aux Grèves : qui paie la dératisation ?', a: 'Les parties communes (caves, vide-ordures, locaux à poubelles) relèvent du bailleur. Dans votre logement, le bailleur doit vous fournir un logement exempt de nuisibles (loi du 6 juillet 1989, article 6). Signalez-le par écrit.' },
    { q: 'Un rat est sorti de mes toilettes : que faire ?', a: 'Fermez l’abattant, mettez un poids dessus et appelez-nous (voir [rat dans les toilettes](/blog/rat-dans-les-toilettes)). Nous traitons la colonie et vous conseillons sur la pose d’un clapet anti-rongeurs par un plombier.' },
    { q: 'Peut-on dératiser sans poison ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, quand il y a des enfants ou des animaux.' },
    { q: 'Rat ou souris : comment savoir ?', a: 'Les [crottes de rat](/blog/rat-ou-souris-comment-reconnaitre) mesurent 1 à 2 cm, celles de souris quelques millimètres. Envoyez-nous une photo, nous identifions le rongeur gratuitement.' },
    { q: 'Intervenez-vous vite à Colombes ?', a: 'Oui, 7j/7 depuis notre base de Saint-Maurice, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés.' },
  ],
  sources: [COL_INSEE, COL_WIKI, LOI_89, MEUDON_RSD92, SPF_LEPTO],
}

export const refonteDerat = (slug: string) => REFONTE_DERATISATION[slug]
