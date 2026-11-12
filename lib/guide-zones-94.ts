// Pages zones du Val-de-Marne (/zones/val-de-marne/[commune]) : texte propre à chaque ville, tous nuisibles confondus (12/11/2026).
// Rôle de la page zone : page d'accueil de la ville, qui oriente vers les pages spécialisées (dératisation, souris, punaises…).
// Elle ne reprend aucun paragraphe de ces pages, pour éviter les doublons. Faits issus de lib/donnees-locales.ts
// (Insee, OpenStreetMap, inventaire SRU) et de lieux connus ; pas de chiffre inventé, pas de tiret long.

export const GUIDE_ZONES_94: Record<string, string[]> = {
  'alfortville': [
    'Alfortville est une presqu’île : la **Seine** d’un côté, la **Marne** de l’autre, qui se rejoignent à sa pointe nord. Cette eau omniprésente explique pourquoi les rats sont le premier motif d’appel ici, surtout dans les immeubles proches des quais et de la darse.',
    'Avec plus de 40 % de logements sociaux selon l’inventaire SRU, la ville compte beaucoup de résidences. Les punaises de lit et les cafards s’y propagent d’un logement à l’autre par les gaines et les colonnes : il faut souvent traiter plusieurs appartements en même temps.',
    'Dans le quartier **Jardin Val de Seine** et autour de l’**île au Cointre**, les espaces verts amènent au printemps des guêpes et, en été, des nids de frelons dans les arbres et sous les toits.',
  ],
  'arcueil': [
    'Arcueil est traversée par l’**aqueduc** et construite sur les coteaux de la vallée de la Bièvre. Les maisons à flanc de coteau, avec jardins en terrasses, voient arriver des souris et des rats par les murets et les sous-sols.',
    'Avec 11 jardins partagés recensés sur OpenStreetMap, la ville cultive beaucoup : composts et potagers attirent les rongeurs, tandis que les arbres fruitiers attirent guêpes et frelons en fin d’été.',
    'Dans les résidences autour de **Laplace** et de **Jean-Macé**, ce sont plutôt les punaises de lit et les blattes qui motivent les appels, avec un traitement à coordonner entre voisins.',
  ],
  'boissy-saint-leger': [
    'Boissy-Saint-Léger est bordée par la **forêt régionale de Gros Bois** et le **bois du Petit-Val**. Cette proximité de la forêt explique les visites de mulots, de souris et de lérots dans les maisons dès l’automne, et les nids de guêpes et de frelons au printemps.',
    'L’IGN recense environ 6,6 hectares de pins sur la commune : au printemps, les chenilles processionnaires y descendent des arbres en file indienne, un risque pour les enfants et les chiens.',
    'Dans les quartiers d’habitat collectif comme **les Hautes Varennes**, ce sont plutôt les cafards et les punaises de lit qui demandent des interventions coordonnées.',
  ],
  'bonneuil-sur-marne': [
    'Bonneuil-sur-Marne abrite l’un des grands **ports fluviaux** d’Île-de-France, avec ses darses et ses entrepôts. Ces zones d’activités, au bord de la **Marne**, sont des lieux où les rats s’installent vite si rien n’est fait : un plan de lutte avec postes numérotés est conseillé.',
    'Côté habitations, le **Haut Bonneuil** et le **centre ancien** mêlent pavillons et résidences. Les souris entrent dans les maisons à l’automne, et les punaises de lit se propagent dans les immeubles.',
    'Le **parc départemental du Rancy** apporte de la verdure, mais aussi, l’été, des nids de guêpes dans les haies et les abris de jardin voisins.',
  ],
  'bry-sur-marne': [
    'Bry-sur-Marne descend en coteau jusqu’à la **Marne** et à l’**île du Moulin**. Les maisons proches des berges voient surtout des rats après les crues, tandis que celles des **Coteaux** accueillent souris et mulots dans les sous-sols.',
    'Ville largement pavillonnaire, Bry a de grands jardins arborés : c’est un terrain favorable aux nids de guêpes et de frelons asiatiques, dans les haies, les arbres et sous les toitures.',
    'Dans le **centre ancien**, les maisons en pierre et leurs caves demandent un repérage précis des accès avant toute dératisation.',
  ],
  'cachan': [
    'À Cachan, la vallée de la Bièvre a modelé la ville : la **Plaine** et la **Prairie** en bas, le **Coteau** en haut. Les nuisibles changent selon l’altitude : rongeurs liés aux réseaux en bas, souris et guêpes dans les maisons à jardin du haut.',
    'La **Cité-jardins** et les résidences voient surtout des demandes pour des punaises de lit et des cafards, qui circulent entre logements par les gaines.',
    'Le **parc Raspail** et le **jardin panoramique du Coteau** offrent des arbres et des haies où les guêpes construisent leurs nids dès le printemps.',
  ],
  'champigny-sur-marne': [
    'Champigny-sur-Marne est l’une des plus grandes villes du Val-de-Marne, avec 78 072 habitants (Insee) sur plus de 11 km². On y trouve de tout : bords de **Marne**, grands ensembles comme **Bois l’Abbé** ou les **Quatre Cités**, et de nombreux quartiers pavillonnaires.',
    'Les appels les plus fréquents concernent les **punaises de lit** dans les résidences et les **rats** près de la Marne et de l’**île de Champigny**. Dans les pavillons de **Cœuilly** ou du **Tremblay**, ce sont plutôt les guêpes, les frelons et les souris.',
    'Avec 7 jardins partagés et le grand **parc du Tremblay**, la ville est aussi très verte, ce qui favorise guêpes, frelons et chenilles là où il y a des pins.',
  ],
  'charenton-le-pont': [
    'Charenton-le-Pont est l’une des villes les plus denses du département : 28 830 habitants sur 1,85 km² (Insee). Entre le **bois de Vincennes**, la **Seine** et la **Marne**, les immeubles se touchent et partagent leurs caves.',
    'Dans ces copropriétés, les nuisibles circulent d’un logement à l’autre : **punaises de lit** par les gaines et les murs mitoyens, **cafards** par les colonnes d’évacuation, **souris** et **rats** par les sous-sols. Un traitement coordonné par le syndic donne les meilleurs résultats.',
    'Les quartiers en lisière du bois, les **Franges du Bois de Vincennes**, voient plus de souris et, au printemps, des guêpes sous les balcons et les toitures.',
  ],
  'choisy-le-roi': [
    'Choisy-le-Roi est coupée en deux par la **Seine**, avec son **port** et ses quartiers des bords de l’eau. Les rats y sont un motif d’appel régulier, dans les caves et les jardins proches du fleuve.',
    'La ville compte de nombreuses résidences, comme aux **Gondoles** ou au **centre** : punaises de lit et blattes y sont fréquentes et demandent souvent un traitement de plusieurs logements.',
    'Le **parc Maurice-Thorez** et la grande plaine sportive au sud apportent des espaces verts où les guêpes et les frelons nichent à la belle saison.',
  ],
  'creteil': [
    'Créteil, préfecture du Val-de-Marne, compte 93 397 habitants (Insee). Autour du **lac de Créteil** et le long des bras de la **Marne** (Chapitre, Guyère), les rats trouvent eau et abri ; les résidences proches sont les plus exposées.',
    'Avec près de 47 % de logements sociaux selon l’inventaire SRU, Créteil compte beaucoup de grands ensembles, comme au **Palais** ou à **la Habette** : les punaises de lit et les cafards y sont les premiers motifs d’intervention.',
    'Les 20 jardins partagés recensés et les grands parcs, dont l’**île de loisirs**, favorisent aussi les guêpes et les frelons l’été. Le **vieux Créteil**, plus pavillonnaire, voit surtout des souris.',
  ],
  'fontenay-sous-bois': [
    'Fontenay-sous-Bois s’étend entre le **bois de Vincennes** et le plateau de **Val de Fontenay**. Le **Village**, avec ses maisons anciennes et ses jardins, voit surtout des souris, des guêpes et des frelons.',
    'Avec près de 35 % de logements sociaux selon l’inventaire SRU, la ville a aussi de nombreuses résidences, aux **Larris** ou à **Jean Zay**, où punaises de lit et cafards se propagent entre logements.',
    'Le quartier d’affaires de **Val de Fontenay** accueille bureaux, restaurants et commerces : pour eux, nous proposons des contrats avec passages programmés et attestation.',
  ],
  'joinville-le-pont': [
    'Joinville-le-Pont vit au bord de la **Marne**, avec le **canal de Polangis** et le **canal de Saint-Maur**. L’eau partout explique les rats dans les jardins et les caves, surtout après les crues.',
    'Les guinguettes et les restaurants des bords de Marne, comme les commerces du centre, demandent un suivi régulier contre les rongeurs et les blattes.',
    'Le quartier de **Polangis**, pavillonnaire, voit au printemps et en été des nids de guêpes et de frelons dans les jardins et sous les toitures.',
  ],
  'le-perreux-sur-marne': [
    'Le Perreux-sur-Marne est une ville de maisons et de jardins, bordée par la **Marne** et l’**île des Loups**. Les rats des berges remontent vers les jardins et les sous-sols, surtout dans le bas de la ville.',
    'Les grands jardins arborés des quartiers comme **les Parclairs** ou **les Corluis** sont propices aux nids de guêpes et de frelons asiatiques, souvent repérés tard, quand le nid est déjà gros.',
    'Les maisons anciennes ont des combles et des caves où s’installent souris et parfois lérots ; nous vérifions toujours les accès par la toiture.',
  ],
  'le-plessis-trevise': [
    'Le Plessis-Trévise est bordé par la **forêt régionale du Plessis-Saint-Antoine**. Les maisons en lisière voient arriver à l’automne souris, mulots et lérots, qui cherchent un abri pour l’hiver.',
    'La ville, très pavillonnaire, est aussi un secteur où les guêpes et les frelons construisent leurs nids dans les haies, les abris et les combles, d’avril à octobre.',
    'Les quelques pins des jardins et des parcs peuvent porter des nids de chenilles processionnaires, à surveiller dès la fin de l’hiver.',
  ],
  'limeil-brevannes': [
    'Limeil-Brévannes s’est beaucoup développée ces dernières années, avec de nouveaux quartiers comme **les Temps Durables** et l’arrivée du **Câble 1**. Les chantiers et les nouveaux espaces verts déplacent les rongeurs, qui cherchent de nouveaux abris dans les maisons voisines.',
    'Les quartiers pavillonnaires des **Varennes** ou des **Grands Champs** voient surtout des souris et des guêpes ; les résidences, des punaises de lit.',
    'Les grands parcs hospitaliers, comme celui de l’**hôpital Émile-Roux**, apportent des arbres où nichent guêpes et frelons.',
  ],
  'maisons-alfort': [
    'Maisons-Alfort longe la **Marne** et touche notre base de Saint-Maurice. Les rats des berges sont un motif d’appel fréquent à **Charentonneau**, et les souris dans tous les quartiers à l’automne.',
    'La ville compte un peu plus de 25 % de logements sociaux selon l’inventaire SRU : dans ces résidences, punaises de lit et cafards sont fréquents. Les deux marchés, du **Centre** et de **Charentonneau**, demandent un suivi des commerces alentour.',
    'Le **parc du Château Gaillard** et les jardins du quartier d’**Alfort** accueillent au printemps des nids de guêpes et, en été, des nids de frelons.',
  ],
  'mandres-les-roses': [
    'Mandres-les-Roses est un village de 4 922 habitants (Insee), au bord de l’**Yerres**, connu pour son passé horticole. Les maisons anciennes, les serres et les jardins attirent souris, rats et mulots.',
    'Les grands jardins et les vergers sont propices aux guêpes et aux frelons, avec des nids parfois installés dans les dépendances et les combles.',
    'Nous intervenons à Mandres depuis Saint-Maurice, avec un devis donné avant le déplacement.',
  ],
  'marolles-en-brie': [
    'Marolles-en-Brie est un village de 4 781 habitants (Insee), traversé par le **Réveillon**. Les maisons du **vieux village** et les jardins voient surtout des souris et des mulots à l’automne.',
    'L’IGN recense environ 3,6 hectares de pins sur la commune : les chenilles processionnaires y sont à surveiller de la fin de l’hiver au printemps.',
    'Les jardins arborés accueillent aussi des nids de guêpes et de frelons, souvent dans les haies et sous les toits.',
  ],
  'nogent-sur-marne': [
    'Nogent-sur-Marne descend en coteau jusqu’à la **Marne**. Les maisons et immeubles proches des berges et du **port** voient des rats ; ceux des **Hauts de Nogent**, plus de souris.',
    'Le centre, autour de la **place Leclerc** et de son marché, concentre commerces et restaurants : réserves et poubelles demandent un suivi contre rongeurs et blattes.',
    'Les jardins et parcs, comme le **parc Watteau**, accueillent au printemps et en été des nids de guêpes et de frelons.',
  ],
  'noiseau': [
    'Noiseau est un village de 4 628 habitants (Insee), entouré de bois et de champs. Les souris et les mulots quittent les champs après les récoltes et entrent dans les maisons dès les premiers froids.',
    'Les maisons avec grands jardins voient aussi des nids de guêpes et de frelons, dans les haies, les abris et les combles.',
    'Les lérots, qui hibernent l’hiver, peuvent faire du bruit dans les greniers du printemps à l’automne : nous vérifions les accès par la toiture.',
  ],
  'saint-mande': [
    'Saint-Mandé est l’une des villes les plus denses du Val-de-Marne : 21 071 habitants sur 0,91 km² (Insee). Collée au **bois de Vincennes** et à Paris, elle est faite d’immeubles haussmanniens et de copropriétés.',
    'Dans ces immeubles, les **punaises de lit** et les **souris** circulent par les gaines et les murs mitoyens. Les caves reliées permettent aux rats de passer d’un bâtiment à l’autre : il faut traiter l’immeuble entier.',
    'Le **marché de la Tourelle** et la quarantaine de restaurants recensés demandent un suivi des commerces, et les immeubles en bordure du bois voient plus de souris.',
  ],
  'saint-maur-des-fosses': [
    'Saint-Maur-des-Fossés tient dans une boucle de la **Marne**, avec ses bras du Chapitre et des Ravageurs. Beaucoup de maisons sont au bord de l’eau : les rats sont le premier motif d’appel, surtout après les crues.',
    'La ville est très pavillonnaire, de **la Varenne** au **Parc Saint-Maur**, avec de grands jardins : guêpes, frelons asiatiques et souris y sont fréquents.',
    'Sept marchés et plus de 160 restaurants recensés sur OpenStreetMap, d’**Adamville** au **Vieux Saint-Maur**, font aussi de la ville un secteur où les commerces demandent un suivi régulier.',
  ],
  'santeny': [
    'Santeny est un village de 3 913 habitants (Insee) en bordure de la **forêt domaniale de Notre-Dame**. Les maisons en lisière voient souris, mulots et lérots à l’automne.',
    'L’IGN recense environ 9,4 hectares de pins sur la commune, la plus forte surface du secteur : les chenilles processionnaires sont un vrai sujet au printemps, pour les enfants et les animaux.',
    'Les grandes propriétés arborées sont aussi propices aux nids de guêpes et de frelons.',
  ],
  'sucy-en-brie': [
    'Sucy-en-Brie s’étend du plateau jusqu’aux berges de la **Marne**. Les quartiers des **Berges** et du **Poil Vert** voient des rats ; le **Plateau** et les parcs, plutôt des souris et des guêpes.',
    'Les grands parcs, comme ceux de la **Garennière** et de la **Chênaie**, et les jardins arborés accueillent nids de guêpes et de frelons. L’IGN y recense environ 2,3 hectares de pins, à surveiller pour les chenilles processionnaires.',
    'Dans la **Cité Verte** et les résidences, les punaises de lit et les cafards demandent des traitements coordonnés.',
  ],
  'thiais': [
    'Thiais est connue pour le centre commercial de **Belle Épine** et la proximité du marché de Rungis. Commerces, restaurants et entrepôts y attirent les rongeurs : un suivi régulier est conseillé pour les professionnels.',
    'Les quartiers pavillonnaires, comme **les Baudemons** ou **le Martray**, voient surtout des souris à l’automne et des nids de guêpes au printemps. Les résidences, des punaises de lit.',
    'Avec l’arrivée du **métro 14** et des trams 7 et 9, la ville est très bien reliée : nous y intervenons souvent le jour même.',
  ],
  'villecresnes': [
    'Villecresnes, traversée par le **Réveillon**, est une ville de maisons et de jardins proche de la forêt de **Grosbois**. Souris, mulots et lérots entrent dans les maisons dès l’automne.',
    'Les jardins arborés et les haies sont propices aux nids de guêpes et de frelons, souvent découverts en été.',
    'Les maisons anciennes ont des combles et des caves où les rongeurs s’installent : nous repérons toujours les accès avant de traiter.',
  ],
  'villejuif': [
    'Villejuif est sur un plateau, avec l’un des grands parcs du département, le **parc des Hautes-Bruyères**. La ville est en pleine transformation avec l’arrivée de la **ligne 14** et la gare **Villejuif - Gustave Roussy**.',
    'Les chantiers et les nouveaux quartiers déplacent les rongeurs, qui cherchent de nouveaux abris dans les immeubles et maisons voisins. Les résidences voient aussi des punaises de lit et des cafards.',
    'Avec 5 jardins partagés et de grands parcs, les guêpes et les frelons sont fréquents au printemps et en été.',
  ],
  'villeneuve-le-roi': [
    'Villeneuve-le-Roi s’étend entre la **Seine** et l’aéroport d’Orly. Les quartiers du **Bord de l’Eau** et du **Val d’Ablon** voient des rats remonter du fleuve, surtout lors des crues.',
    'La ville est très pavillonnaire, avec 10 jardins partagés recensés : souris, rats dans les jardins, guêpes et frelons sont les motifs d’appel les plus fréquents.',
    'Les zones industrielles proches de la Seine accueillent entrepôts et locaux d’activités, pour lesquels nous proposons des plans de lutte avec registre.',
  ],
  'villeneuve-saint-georges': [
    'Villeneuve-Saint-Georges est au confluent de la **Seine** et de l’**Yerres**, avec l’une des plus grandes gares de triage d’Île-de-France. Les berges et les voies ferrées sont des couloirs pour les rats.',
    'Le centre ancien et les quartiers proches de l’Yerres sont exposés aux crues : après ces épisodes, les rongeurs cherchent refuge dans les caves et les maisons.',
    'Les résidences voient des punaises de lit et des cafards ; les parcs, comme **Saussaie-Pidoux**, des nids de guêpes et de frelons à la belle saison.',
  ],
  'villiers-sur-marne': [
    'Villiers-sur-Marne se transforme avec la future gare **Bry-Villiers-Champigny** de la ligne 15 et de nouveaux quartiers. Les chantiers déplacent les rongeurs vers les maisons et immeubles voisins.',
    'La ville, en grande partie pavillonnaire avec des quartiers comme **les Boutareines** ou **le Bois de Gaumont**, voit surtout des souris, des guêpes et des frelons.',
    'Le **parc du Bois Saint-Denis** et les jardins arborés accueillent des nids de guêpes au printemps et de frelons en été.',
  ],
  'vitry-sur-seine': [
    'Vitry-sur-Seine est l’une des plus grandes villes du Val-de-Marne, avec 93 963 habitants (Insee). Le long de la **Seine**, le quartier des **Ardoines** et ses zones d’activités sont des secteurs à rats.',
    'Avec plus de 43 % de logements sociaux selon l’inventaire SRU, la ville compte de nombreuses résidences où punaises de lit et cafards sont les premiers motifs d’intervention.',
    'Les 11 jardins partagés et les grands parcs, comme celui des **Lilas**, attirent rongeurs et guêpes ; les pavillons du **coteau** voient des souris à l’automne.',
  ],
}
