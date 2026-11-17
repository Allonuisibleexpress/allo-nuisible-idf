// Textes locaux renforcés pour les 15 villes du pôle « autour de Saint-Maurice » (18/11/2026, demande de l'utilisateur :
// pages des villes à moins de 5 km travaillées à fond). Rédigés ville par ville, à partir des données réelles
// (lib/donnees-locales.ts : Insee, OpenStreetMap, inventaire SRU), de repères connus de chaque ville et de nos vrais chantiers.
// Pas de chiffre inventé, pas de tiret long. S'ajoutent aux textes existants (LOCAL_PUNAISES_94, LOCAL_DERATISATION_94...).

export const LOCAL_POLE_PUNAISES: Record<string, string[]> = {
  'saint-maurice': [
    '### Saint-Maurice, notre base',
    'C’est d’ici que partent nos techniciens. Pour une suspicion de punaises de lit à Saint-Maurice, au **Plateau**, près du **Pont** ou du côté d’**Écluse-Gravelle**, nous pouvons souvent passer dans l’heure qui suit votre appel pour une inspection. Plus tôt l’infestation est repérée, plus le traitement est simple : quelques punaises dans un sommier se traitent bien mieux qu’une chambre entière colonisée.',
    'La ville mêle **résidences collectives** (plus d’un logement sur quatre est un logement social selon l’inventaire SRU) et **maisons** vers les bords de Marne. En immeuble, nous vérifions aussi les pièces voisines et les prises, car les punaises suivent les gaines. Pour un établissement de soins ou d’accueil, nous proposons la **cryogénie**, sans aucun produit : voir [traitement écologique par cryogénie](/services/cryogenie-punaises-de-lit).',
  ],
  'maisons-alfort': [
    '### Punaises de lit à Maisons-Alfort : d’Alfort à Charentonneau',
    'Maisons-Alfort est à moins de 2 km de notre base : c’est l’une des villes où nous intervenons le plus. Les appels viennent autant du quartier d’**Alfort**, autour de l’École vétérinaire, que de **Charentonneau**, du **Vert de Maisons** ou du **centre**, avec ses immeubles anciens et ses résidences récentes.',
    'Avec quatre gares (École Vétérinaire, Les Juilliottes, Stade, Le Vert de Maisons), beaucoup d’habitants prennent chaque jour la ligne 8 ou le RER D : c’est dans les sacs et les vêtements que les punaises voyagent. Après un séjour à l’hôtel ou un meuble d’occasion, inspectez le sommier et les coutures du matelas avant les premières piqûres.',
    'Pour les familles qui ne veulent aucun produit, nous traitons par **cryogénie à −78 °C** et vapeur sèche, deux passages inclus, dès 290 €. Pour une grosse infestation, l’insecticide professionnel reste plus rapide : le technicien vous explique son choix après l’inspection.',
  ],
  'joinville-le-pont': [
    '### Punaises de lit à Joinville-le-Pont, des bords de Marne au Parangon',
    'À Joinville-le-Pont, entre **Oudinot**, **Polangis** et les **Platanes**, beaucoup de logements donnent sur la Marne et ses canaux. La gare RER A de Joinville relie la ville à Paris en quelques minutes : c’est aussi le chemin que prennent les punaises, cachées dans un sac ou une valise.',
    'Dans les maisons des bords de Marne, nous inspectons en priorité les **chambres d’amis** et les lits en bois ancien ; dans les résidences, les **plinthes** et les **prises** communes aux deux logements. Nous sommes à moins de 2 km : une inspection le jour même est presque toujours possible.',
  ],
  'paris-12': [
    '### Punaises de lit dans le 12e : de Bercy à Picpus',
    'Le 12e arrondissement est à 2,6 km de notre base, de l’autre côté du bois de Vincennes. Gare de Lyon, Bercy, Reuilly-Diderot : avec les grandes gares et près d’une centaine d’hôtels recensés par OpenStreetMap, c’est un quartier de passage, et donc un terrain favorable aux punaises de lit qui voyagent dans les bagages.',
    'Nous y avons traité une **très grosse infestation**, filmée sur place : voir [l’énorme infestation de punaises de lit à Paris 12e](/blog/punaises-de-lit-paris-12-grosse-infestation). Dans les immeubles haussmanniens de **Picpus**, de **Bel-Air** ou des **Quinze-Vingts**, les parquets et les moulures offrent beaucoup de cachettes : l’inspection se fait latte par latte et plinthe par plinthe.',
    'Hôtels, meublés de tourisme, résidences étudiantes : nous intervenons chambre par chambre, aux horaires qui vous conviennent, avec un compte rendu.',
  ],
  'alfortville': [
    '### Punaises de lit à Alfortville, entre Seine et Marne',
    'Alfortville est une presqu’île, à la rencontre de la Seine et de la Marne, avec beaucoup d’immeubles collectifs : l’inventaire SRU y compte environ quatre logements sociaux sur dix. Dans ces immeubles, une infestation non traitée chez un voisin finit souvent par passer par les **gaines** et les **colonnes** : prévenez votre bailleur dès les premiers signes.',
    'Nous intervenons de **Zola Carnot** au **Val de Seine**, en passant par **Diderot Louis Blanc**. Le traitement commence toujours par une inspection, puis la méthode adaptée : insecticide professionnel, cryogénie ou les deux, avec deux passages inclus.',
  ],
  'charenton-le-pont': [
    '### Punaises de lit à Charenton-le-Pont, aux portes de Paris',
    'Charenton touche Paris et le bois de Vincennes. Avec les stations **Charenton-Écoles** et **Liberté** sur la ligne 8, beaucoup d’habitants circulent chaque jour vers Paris : c’est l’un des chemins classiques des punaises de lit, qui voyagent dans les sacs et les vêtements, pas en sautant d’une personne à l’autre.',
    'Les immeubles anciens du centre et du **Plateau** et les résidences des **Carrières** ou de **Valmy** demandent une inspection soignée : sommier, tête de lit, plinthes, cadres et prises. Notre base est à 2,8 km : nous venons souvent le jour même, avec un devis gratuit.',
  ],
  'saint-mande': [
    '### Punaises de lit à Saint-Mandé, en lisière du bois',
    'À Saint-Mandé, entre **Saint-Michel**, **Daumesnil** et **La Pelouse**, les logements sont surtout des appartements dans des immeubles anciens, à deux pas du bois de Vincennes et du métro. Dans ces immeubles en pierre, les punaises se cachent derrière les plinthes, dans les moulures et les parquets : c’est là que commence l’inspection.',
    'Pour ceux qui veulent un traitement sans aucun produit, notamment avec un bébé ou un animal, nous proposons la **cryogénie** et la vapeur sèche, deux passages inclus. Nous sommes à 3 km : une intervention le jour même est souvent possible.',
  ],
  'vincennes': [
    '### Punaises de lit à Vincennes : notre chantier filmé',
    'Vincennes, ville dense de près de 50 000 habitants entre le château et le bois, a beaucoup d’immeubles anciens et une dizaine d’hôtels. Nous y avons traité une **grosse infestation**, avec des punaises mortes partout au sol après le traitement : voir [notre intervention à Vincennes](/blog/punaises-de-lit-vincennes-punaises-mortes) et la vidéo du chantier.',
    'Dans les quartiers **Centre Nord**, **Centre Sud**, **Est** ou **Ouest**, les punaises arrivent souvent après un voyage, un déménagement ou par un logement voisin. Le RER A (gare de Vincennes) et la ligne 1 (Château de Vincennes, Bérault) font de la ville un lieu de passage : surveillez votre literie au retour de voyage.',
    'Traitement insecticide professionnel ou cryogénie à −78 °C, deux passages inclus, dès 290 €, garantie 1 an. Détection canine possible sur devis pour une infestation difficile à localiser.',
  ],
  'nogent-sur-marne': [
    '### Punaises de lit à Nogent-sur-Marne',
    'Entre les **Hauts de Nogent**, le **Boulevard de Strasbourg** et les bords de Marne, Nogent mêle pavillons et immeubles. La gare RER E et la proximité du RER A en font une ville de navetteurs, et le port attire des visiteurs : autant d’occasions de rapporter des punaises dans un bagage.',
    'Nous inspectons d’abord les chambres, puis les canapés convertibles et les fauteuils. Pour les maisons avec plusieurs chambres, nous vérifions chacune : les punaises gagnent vite les pièces voisines où quelqu’un dort.',
  ],
  'creteil': [
    '### Punaises de lit à Créteil : le sommier à lattes',
    'À Créteil, nous avons repris un chantier où une première entreprise n’avait rien trouvé : les punaises étaient **cachées dans les lattes du sommier**. Voir [notre intervention à Créteil](/blog/punaises-de-lit-creteil-sommier-lattes). C’est tout l’enjeu d’une inspection soignée, latte par latte.',
    'Préfecture du Val-de-Marne et ville universitaire (gares Créteil-Université et Pointe du Lac sur la ligne 8), Créteil compte beaucoup de résidences et d’étudiants : près d’un logement sur deux y est social selon l’inventaire SRU. En résidence, une infestation se signale vite au bailleur pour traiter les logements voisins.',
    'Du **Palais** à **La Brèche**, de **Montaigut** au **Port**, nous venons depuis Saint-Maurice, à moins de 4 km, souvent le jour même.',
  ],
  'ivry-sur-seine': [
    '### Punaises de lit à Ivry-sur-Seine',
    'À Ivry, nous sommes intervenus chez une **personne âgée** avec une infestation très avancée, jusque dans un lit médicalisé : voir [notre intervention à Ivry-sur-Seine](/blog/punaises-de-lit-ivry-sur-seine-personne-agee). Ces situations arrivent quand personne ne remarque les piqûres : environ 30 % des personnes ne réagissent pas, selon l’ARS Île-de-France.',
    'Ville dense en bord de Seine, avec la ligne 7 (Mairie d’Ivry) et le RER C, Ivry compte une vingtaine d’hôtels et beaucoup de logements collectifs. Nous intervenons partout, du **Petit Ivry** à **Gagarine** et au **Fort**.',
  ],
  'saint-maur-des-fosses': [
    '### Punaises de lit à Saint-Maur-des-Fossés',
    'Dans la boucle de la Marne, Saint-Maur est une grande ville de **maisons** et d’immeubles, de **La Varenne** à **Adamville** et au **Vieux Saint-Maur**. Dans une maison, les punaises s’installent d’abord dans la chambre où dort la personne qui les a rapportées, puis gagnent les autres : nous inspectons donc chaque chambre.',
    'Avec quatre gares du RER A, beaucoup d’habitants voyagent chaque jour : videz vos bagages loin du lit au retour de voyage et lavez le linge à 60 °C. Nous sommes à environ 4 km, avec un devis gratuit et deux passages inclus.',
  ],
  'fontenay-sous-bois': [
    '### Punaises de lit à Fontenay-sous-Bois',
    'Du **Village** aux **Larris** et à **Bois Cadet**, Fontenay mêle quartiers pavillonnaires et grandes résidences, autour des gares RER de **Fontenay-sous-Bois** et de **Val de Fontenay**, très fréquentées. En résidence, une infestation se propage par les gaines : prévenez votre bailleur et faites inspecter les logements voisins.',
    'Insecticide professionnel ou méthode sans produit (cryogénie, vapeur sèche) : le technicien choisit après l’inspection, avec deux passages inclus et une garantie d’un an.',
  ],
  'vitry-sur-seine': [
    '### Punaises de lit à Vitry-sur-Seine',
    'Grande ville de plus de 90 000 habitants en bord de Seine, Vitry compte beaucoup de résidences : plus de quatre logements sur dix sont sociaux selon l’inventaire SRU. Nous intervenons des **Ardoines** au **Centre**, de **Dalou** à la **Ferme Sud**.',
    'En immeuble, nous traitons le logement touché et conseillons une inspection des logements voisins, car les punaises circulent par les gaines et les prises. Le RER C (Vitry-sur-Seine, Les Ardoines) et le tramway relient la ville à Paris : surveillez votre literie au retour de voyage.',
  ],
  'villejuif': [
    '### Punaises de lit à Villejuif',
    'Villejuif, ville d’hôpitaux et de recherche, compte beaucoup de soignants, d’étudiants et de résidences. Avec la ligne 7 (Louis Aragon, Léo Lagrange, Paul Vaillant-Couturier) et le tramway, les déplacements sont nombreux : un bagage ou un sac posé au mauvais endroit suffit à ramener des punaises.',
    'Nous intervenons des **Hautes Bruyères** au **Lion d’Or** et aux **Esselières**. Pour un établissement de santé ou d’accueil, la **cryogénie**, sans aucun produit, permet de traiter chambre par chambre : voir [traitement écologique par cryogénie](/services/cryogenie-punaises-de-lit).',
  ],
}

export const LOCAL_POLE_DERATISATION: Record<string, string[]> = {
  'saint-maurice': [
    '### Saint-Maurice : la Marne, le canal et notre base',
    'Saint-Maurice est bordée par la **Marne**, le **canal de Saint-Maur** et le **bras de Gravelle** : des berges où le surmulot, ou rat d’égout, trouve eau et abri. Les maisons du bas de la ville et les caves des résidences du **Plateau** reçoivent sa visite, surtout quand l’eau monte ou quand il fait froid.',
    'Notre base est ici : pour des bruits la nuit, des crottes dans un placard ou un rat aperçu dans le jardin, nous venons très vite, souvent dans l’heure. Inspection, rebouchage des accès, puis pièges ou postes d’appâtage sécurisés, avec ou sans raticide selon votre choix.',
  ],
  'maisons-alfort': [
    '### Rats à Maisons-Alfort : notre chantier Diogène',
    'Nous avons traité à Maisons-Alfort un **logement en syndrome de Diogène** envahi par une trentaine de rats, filmé avant et après : voir [notre intervention à Maisons-Alfort](/blog/deratisation-logement-syndrome-diogene). Ce type de chantier demande de dératiser **avant** de vider le logement, sinon les rats se dispersent chez les voisins.',
    'Entre la **Marne**, **Charentonneau** et le **Vert de Maisons**, la ville compte une soixantaine de restaurants et plusieurs marchés : autant de sources de nourriture pour les rongeurs. Pour un commerce, nous posons un plan de lutte avec registre et attestation.',
  ],
  'joinville-le-pont': [
    '### Rats à Joinville-le-Pont : berges et canaux',
    'Avec la **Marne**, le **canal de Polangis** et le **canal de Saint-Maur**, Joinville a beaucoup de berges, terrain favori du surmulot. Les maisons qui bordent l’eau et leurs jardins sont les plus exposées, surtout en hiver et lors des crues.',
    'Au **Parangon** et dans les parcs, composteurs ouverts et restes de pique-nique attirent les rats vers les habitations voisines. Nous rebouchons les accès des maisons (soupiraux, passages de tuyaux, bas de portes) et posons les pièges sur les trajets.',
  ],
  'paris-12': [
    '### Rats dans le 12e arrondissement',
    'Le 12e cumule ce qui attire les rats : la **Seine** et le **canal Saint-Martin**, le **bois de Vincennes**, et plus de 600 restaurants et cafés recensés par OpenStreetMap, sans compter les marchés d’**Aligre**, de **Daumesnil** ou de **Bercy**. Les caves, les locaux poubelles et les cours d’immeubles anciens sont les premiers touchés.',
    'Pour un restaurant ou un commerce, nous posons un plan de lutte avec passages programmés, registre et attestation. Pour une copropriété, nous traitons les parties communes avec le syndic, puis les logements qui en ont besoin.',
  ],
  'alfortville': [
    '### Rats à Alfortville, entre Seine et Marne',
    'À la confluence de la Seine et de la Marne, avec sa **darse** et ses quais, Alfortville offre au surmulot de longues berges. Les immeubles collectifs, nombreux dans la ville, connaissent surtout les rats dans les **caves** et les **locaux poubelles** : c’est au syndic ou au bailleur de faire traiter ces parties communes.',
    'Nous intervenons de **Zola Carnot** au **Val de Seine**, avec des pièges ou des postes d’appâtage sécurisés hors de portée des enfants et des animaux, et le rebouchage des passages.',
  ],
  'charenton-le-pont': [
    '### Rats à Charenton-le-Pont : la confluence et le bois',
    'Charenton est à la rencontre de la **Seine** et de la **Marne**, en lisière du **bois de Vincennes** : berges d’un côté, espaces boisés de l’autre. Le **parc de Conflans** et les squares accueillent aussi des rongeurs, qui visitent les caves et les jardins voisins.',
    'Avec une cinquantaine de restaurants et cafés, la ville a aussi besoin de plans de lutte pour les professionnels. Pour un particulier, nous commençons par l’inspection, puis le rebouchage des accès et la pose des pièges.',
  ],
  'saint-mande': [
    '### Rats et souris à Saint-Mandé',
    'Saint-Mandé touche le **bois de Vincennes** et le **lac de Saint-Mandé** : les rongeurs du bois s’aventurent dans les caves et les jardins des immeubles voisins. Dans les appartements anciens, c’est surtout la **souris** qui monte par les gaines jusqu’aux cuisines.',
    'Avec une quarantaine de restaurants et le marché de la Tourelle, la nourriture ne manque pas. Nous rebouchons les passages et posons des pièges sécurisés, sans raticide si vous le souhaitez.',
  ],
  'vincennes': [
    '### Rats et souris à Vincennes',
    'Entre le **bois** et le **château**, Vincennes compte plus d’une centaine de restaurants et cafés et trois marchés (place Carnot, rue de Fontenay, place Diderot) : de quoi nourrir les rongeurs. Les immeubles anciens ont des caves et des cours où les rats circulent la nuit, et des gaines par lesquelles les souris montent jusqu’aux cuisines.',
    'Nous traitons les logements, les commerces (plan de lutte, registre, attestation) et les parties communes avec le syndic. Dératisation dès 120 €, garantie 1 an, avec ou sans raticide.',
  ],
  'nogent-sur-marne': [
    '### Rats à Nogent-sur-Marne : port et bords de Marne',
    'Le **port de Nogent** et les bords de **Marne** sont des zones où le surmulot circule beaucoup, surtout quand l’eau monte. Les maisons des **Hauts de Nogent** et les pavillons proches des berges connaissent aussi les rats dans les jardins, les abris et les vides sanitaires.',
    'Nous rebouchons les accès (soupiraux, aérations, passages de tuyaux) et posons les pièges sur les trajets, contrôlés à chaque passage jusqu’à la disparition des signes.',
  ],
  'creteil': [
    '### Rats à Créteil : le lac et la Marne',
    'Créteil a le **lac** et son **île de loisirs**, la **Marne** et ses bras (bras du Chapitre, bras de la Guyère) : beaucoup d’eau, donc beaucoup de surmulots sur les berges. Les résidences, très nombreuses (près d’un logement sur deux est social selon l’inventaire SRU), connaissent surtout les rats dans les caves et les locaux poubelles.',
    'Pour les parties communes, c’est au bailleur ou au syndic de faire traiter ; pour votre logement, nous intervenons sur devis gratuit, avec ou sans raticide.',
  ],
  'ivry-sur-seine': [
    '### Rats à Ivry-sur-Seine',
    'En bord de **Seine**, avec une ville dense et environ 150 restaurants et cafés recensés par OpenStreetMap, Ivry offre aux rongeurs eau et nourriture. Les rats occupent les caves et les locaux poubelles des grands ensembles, les souris montent par les gaines jusqu’aux appartements.',
    'Nous intervenons du **Petit Ivry** au **Fort** et à **Gagarine**, chez les particuliers, dans les commerces et pour les bailleurs, avec le rebouchage des accès à chaque fois.',
  ],
  'saint-maur-des-fosses': [
    '### Rats et souris à Saint-Maur-des-Fossés',
    'Dans la boucle de la **Marne**, avec ses bras (Chapitre, Ravageurs) et ses nombreux jardins, Saint-Maur est un terrain idéal pour le surmulot. Nous y avons aussi traité des **souris dans un appartement loué sur Airbnb**, entre deux séjours : voir [notre intervention à Saint-Maur](/blog/souris-airbnb-saint-maur-des-fosses).',
    'Avec sept marchés et plus de 160 restaurants, de **La Varenne** au **Vieux Saint-Maur**, les commerces ont besoin de plans de lutte réguliers. Pour les maisons, nous traitons aussi les vides sanitaires, les combles et les abris de jardin.',
  ],
  'fontenay-sous-bois': [
    '### Rats à Fontenay-sous-Bois',
    'Fontenay touche le **bois de Vincennes** et compte des espaces verts comme l’**écoparc des Carrières** : les rongeurs du bois et des parcs visitent les jardins et les caves voisines. Les grandes résidences connaissent surtout les rats dans les locaux poubelles.',
    'Nous intervenons du **Village** aux **Larris** et à **Bois Cadet**, avec inspection, rebouchage des accès et pièges sécurisés, souvent le jour même.',
  ],
  'vitry-sur-seine': [
    '### Rats à Vitry-sur-Seine',
    'Grande ville en bord de **Seine**, avec ses parcs (parc des Lilas, parc Joliot-Curie) et ses zones d’activité, Vitry offre beaucoup d’abris aux rongeurs. Les nombreuses résidences connaissent les rats dans les caves et les locaux poubelles, et les maisons dans les jardins et les vides sanitaires.',
    'Nous intervenons des **Ardoines** au **Centre** et à la **Ferme Sud**, pour les particuliers, les commerces et les bailleurs, avec ou sans raticide.',
  ],
  'villejuif': [
    '### Rats et souris à Villejuif',
    'Villejuif a de grands parcs, comme le **parc départemental des Hautes Bruyères**, et beaucoup de logements collectifs : les rats y occupent les caves et les locaux poubelles, les souris montent par les gaines. Établissements de santé et résidences ont besoin de plans de lutte réguliers.',
    'Nous intervenons des **Hautes Bruyères** au **Lion d’Or** et aux **Esselières**, avec inspection, rebouchage des accès et pièges sécurisés, devis gratuit.',
  ],
}
