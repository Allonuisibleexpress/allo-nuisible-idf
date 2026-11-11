// Pages « service + département » pour l'Essonne, les Yvelines et la Seine-et-Marne (11/11/2026).
// Contenu propre à chaque combinaison. Populations et nombre de communes : geo.api.gouv.fr (Insee).
// Pas de chiffre inventé, pas de tiret long, pas de « naturel », « écologique », « sans danger ».
import type { Contenu, ServiceDep } from './departements-services'

export type DepGC = 'essonne' | 'yvelines' | 'seine-et-marne'

export const CONTENU_GC: Record<ServiceDep, Record<DepGC, Contenu>> = {
  deratisation: {
    essonne: {
      accroche: 'Bords de Seine et d’Orge, villes nouvelles sur dalle, pavillons et corps de ferme du sud : dans l’Essonne, rats et souris trouvent partout un abri.',
      paras: [
        'L’Essonne est traversée par la **Seine**, l’**Orge**, l’**Yvette** et la rivière **Essonne**. Le **surmulot** suit ces cours d’eau et les réseaux d’eaux pluviales jusqu’aux **caves**, **vides sanitaires** et **jardins**. Dans les villes nouvelles comme **Évry-Courcouronnes**, ce sont les **parkings souterrains**, les **dalles** et les **locaux poubelles** qui servent de couloirs.',
        'Au sud du département, autour des **grandes cultures**, la **souris** et le **mulot** se rapprochent des maisons à l’automne. Nous intervenons de **Massy** à **Corbeil-Essonnes**, d’**Athis-Mons** à **Sainte-Geneviève-des-Bois**, chez les particuliers, les copropriétés, les commerces et les entrepôts proches d’**Orly**.',
      ],
      points: [
        { t: 'Rats dans une résidence de l’Essonne', x: 'Parkings, caves et locaux poubelles : un traitement des parties communes avec le bailleur évite que les rats remontent dans les logements.' },
        { t: 'Souris dans un pavillon du 91', x: 'Garage, sous-sol, combles : nous trouvons l’entrée, posons pièges ou postes sécurisés, puis rebouchons.' },
        { t: 'Entrepôts et zones d’activités du 91', x: 'Plan de lutte avec postes numérotés, passages réguliers et compte rendu pour vos audits.' },
      ],
      faq: [
        { q: 'Intervenez-vous dans toute l’Essonne ?', a: 'Oui, dans les communes du département, du nord urbanisé au sud plus rural, sur devis gratuit et souvent rapidement.' },
        { q: 'Les rats viennent-ils de l’Orge ou de la Seine ?', a: 'Le surmulot vit volontiers près de l’eau et circule par les réseaux. Les logements proches des berges sont plus exposés : caves, regards et vides sanitaires sont à contrôler en priorité.' },
        { q: 'Pouvez-vous suivre un entrepôt toute l’année ?', a: 'Oui, avec un contrat de suivi : postes numérotés sur plan, passages réguliers et compte rendu à chaque visite.' },
      ],
    },
    yvelines: {
      accroche: 'Immeubles anciens de Versailles, boucles de la Seine, maisons en lisière de forêt : dans les Yvelines, chaque type d’habitat a ses rongeurs.',
      paras: [
        'Dans les Yvelines, la **dératisation** se joue autant dans les **caves voûtées** du centre de **Versailles** ou de **Saint-Germain-en-Laye** que dans les **pavillons** des boucles de la **Seine** (Sartrouville, Houilles, Poissy). Le **surmulot** suit les berges et les réseaux, la **souris** s’installe dans les cloisons et les combles.',
        'Le département compte de grandes **forêts** (Saint-Germain, Rambouillet, Marly). Les maisons en lisière voient arriver **mulots**, **souris** et parfois **lérots** à chaque automne. Nous intervenons aussi dans les grands quartiers comme le **Val Fourré** à Mantes-la-Jolie et dans les zones d’activités de **Saint-Quentin-en-Yvelines**.',
      ],
      points: [
        { t: 'Rats dans un immeuble ancien des Yvelines', x: 'Caves communicantes, cours et commerces de bouche : nous traitons et rebouchons les passages entre bâtiments.' },
        { t: 'Souris dans une maison en lisière de forêt', x: 'Garages, sous-sols, combles : piégeage et fermeture des accès avant l’hiver.' },
        { t: 'Sites industriels du 78', x: 'Postes sécurisés, suivi régulier et attestation pour les usines et entrepôts de la vallée de la Seine et de Saint-Quentin.' },
      ],
      faq: [
        { q: 'Intervenez-vous dans tout le 78 ?', a: 'Oui, de Versailles à Mantes-la-Jolie, de Sartrouville à Rambouillet, sur devis gratuit.' },
        { q: 'Un lérot dans les combles : est-ce un rat ?', a: 'Non, c’est un petit rongeur des jardins et des forêts, fréquent près des bois. Il fait beaucoup de bruit la nuit. Le traitement et la fermeture des accès sont adaptés à l’animal identifié.' },
        { q: 'Faut-il traiter les caves d’un immeuble ancien ?', a: 'Oui si les rongeurs y circulent : les caves voûtées communiquent souvent entre elles. Le syndic commande le traitement des parties communes.' },
      ],
    },
    'seine-et-marne': {
      accroche: 'Plus grand département d’Île-de-France, la Seine-et-Marne mêle villes, villes nouvelles et grandes plaines agricoles : les rongeurs y sont partout.',
      paras: [
        'La **Seine-et-Marne** couvre à elle seule près de la moitié de la superficie de l’Île-de-France. Autour de **Meaux**, de **Melun** et dans la **Brie**, les **grandes cultures** abritent souris et mulots, qui gagnent les maisons après les moissons. Les **corps de ferme**, granges et silos demandent un traitement adapté.',
        'Dans les villes nouvelles de **Marne-la-Vallée** (Champs-sur-Marne, Bussy-Saint-Georges) et de **Sénart** (Savigny-le-Temple, Combs-la-Ville), les rongeurs profitent des **parkings**, des **locaux techniques** et des **chantiers**. Le long de la **Marne** et de la **Seine**, le surmulot remonte les berges jusqu’aux jardins.',
      ],
      points: [
        { t: 'Souris et mulots après les moissons', x: 'Maisons en bordure de champs, granges, garages : piégeage et fermeture des accès dès l’automne.' },
        { t: 'Rats dans une ville nouvelle du 77', x: 'Parkings souterrains et locaux poubelles : traitement des parties communes avec le bailleur ou le syndic.' },
        { t: 'Exploitations et entrepôts de Seine-et-Marne', x: 'Plan de lutte sur mesure, postes numérotés et suivi régulier.' },
      ],
      faq: [
        { q: 'Intervenez-vous dans les communes rurales du 77 ?', a: 'Oui, sur devis gratuit. Pour les communes éloignées, nous regroupons parfois les rendez-vous pour vous proposer un créneau rapide.' },
        { q: 'Les silos et granges peuvent-ils être traités ?', a: 'Oui, avec des postes sécurisés adaptés aux lieux de stockage et un suivi régulier, en respectant les denrées.' },
        { q: 'Pourquoi plus de souris en septembre ?', a: 'Quand les champs sont moissonnés puis labourés, souris et mulots perdent abri et nourriture et se rapprochent des maisons.' },
      ],
    },
  },
  punaises: {
    essonne: {
      accroche: 'Résidences étudiantes, grands ensembles, hôtels près d’Orly : dans l’Essonne, les punaises de lit voyagent avec les bagages et les meubles.',
      paras: [
        'Les **punaises de lit** n’ont rien à voir avec la propreté : elles arrivent dans une **valise**, un **meuble d’occasion** ou un **vêtement**. Dans l’Essonne, nous intervenons dans les **grands ensembles** d’Évry-Courcouronnes ou de Corbeil-Essonnes, les **résidences étudiantes** du **plateau de Saclay** et les **hôtels** proches de l’aéroport d’**Orly**.',
        'Nous proposons trois méthodes : **insecticide professionnel**, **cryogénie** et **vapeur sèche**, avec **deux passages inclus**. Le choix dépend du logement, des occupants et de l’ampleur de l’infestation.',
      ],
      points: [
        { t: 'Punaises dans une résidence étudiante du 91', x: 'Chambres meublées, matelas fournis : traitement rapide et conseils pour ne pas les rapporter chez les parents.' },
        { t: 'Hôtels et meublés près d’Orly', x: 'Traitement chambre par chambre, entre deux séjours, avec attestation.' },
        { t: 'Punaises dans un pavillon de l’Essonne', x: 'Chambres, canapés, plinthes : traitement de toutes les pièces touchées en deux passages.' },
      ],
      faq: [
        { q: 'Intervenez-vous partout dans l’Essonne ?', a: 'Oui, dans les communes du département, avec deux passages inclus et un devis gratuit.' },
        { q: 'Une résidence étudiante peut-elle être traitée chambre par chambre ?', a: 'Oui, mais les chambres voisines doivent être inspectées : les punaises passent par les cloisons et les gaines.' },
        { q: 'Combien de temps faut-il quitter le logement ?', a: 'Après un insecticide, en moyenne 4 heures. Avec la vapeur sèche ou la cryogénie, vous pouvez rester ou revenir rapidement.' },
      ],
    },
    yvelines: {
      accroche: 'Appartements anciens de Versailles, pavillons des boucles de Seine, résidences de Saint-Quentin : les punaises de lit s’installent partout dans les Yvelines.',
      paras: [
        'Dans les Yvelines, nous traitons les **punaises de lit** dans les **appartements anciens** de Versailles et de Saint-Germain-en-Laye, aux parquets et boiseries pleins de fentes, comme dans les **résidences récentes** de **Saint-Quentin-en-Yvelines** ou les **pavillons** de Sartrouville et Houilles.',
        'Les **meubles d’occasion** (brocantes, vide-greniers, sites de revente) sont une source fréquente. Trois méthodes sont possibles, **insecticide**, **cryogénie** ou **vapeur sèche**, toujours avec **deux passages** et une garantie d’un an.',
      ],
      points: [
        { t: 'Punaises dans un appartement ancien du 78', x: 'Parquets, moulures, boiseries : les cachettes sont nombreuses, le traitement va jusque dans les fentes.' },
        { t: 'Meubles d’occasion', x: 'Un canapé ou un sommier acheté d’occasion peut en contenir : inspectez-le avant de l’installer.' },
        { t: 'Résidences de Saint-Quentin-en-Yvelines', x: 'Traitement coordonné avec le bailleur quand plusieurs logements sont touchés.' },
      ],
      faq: [
        { q: 'Intervenez-vous dans tout le 78 ?', a: 'Oui, de Versailles à Mantes-la-Jolie, de Poissy à Rambouillet, sur devis gratuit.' },
        { q: 'Le traitement abîme-t-il un parquet ancien ?', a: 'Non. La vapeur sèche et la cryogénie conviennent aux matériaux fragiles, et l’insecticide est appliqué en fine couche.' },
        { q: 'Faut-il jeter son matelas ?', a: 'Rarement. Un matelas traité puis protégé par une housse intégrale peut être conservé dans la plupart des cas.' },
      ],
    },
    'seine-et-marne': {
      accroche: 'Gares RER, parcs de loisirs, villes nouvelles et centres anciens : en Seine-et-Marne, les punaises de lit arrivent par les valises et les meubles.',
      paras: [
        'La **Seine-et-Marne** accueille de nombreux **visiteurs** autour de **Marne-la-Vallée** et de ses **hôtels**, et de nombreux voyageurs passent chaque jour par ses **gares RER**. Les **punaises de lit** voyagent ainsi avec les bagages, jusqu’aux appartements de **Meaux**, de **Melun** ou de **Chelles**.',
        'Nous intervenons avec **insecticide**, **cryogénie** ou **vapeur sèche**, **deux passages inclus**, chez les particuliers, dans les **hôtels**, les **meublés de tourisme** et les **résidences**.',
      ],
      points: [
        { t: 'Hôtels et meublés de Marne-la-Vallée', x: 'Traitement entre deux séjours, chambre par chambre, avec attestation pour l’exploitant.' },
        { t: 'Punaises dans une maison de la Brie', x: 'Toutes les chambres et pièces de vie touchées sont traitées, en deux passages.' },
        { t: 'Résidences de Sénart et de Marne-la-Vallée', x: 'Inspection des logements voisins et coordination avec le bailleur.' },
      ],
      faq: [
        { q: 'Intervenez-vous dans les communes rurales de Seine-et-Marne ?', a: 'Oui, sur devis gratuit, avec deux passages inclus comme partout.' },
        { q: 'Un hôtel peut-il rester ouvert pendant le traitement ?', a: 'Oui, seules les chambres touchées et voisines sont bloquées le temps du traitement.' },
        { q: 'Pourquoi deux passages ?', a: 'Les œufs ne sont pas tous détruits au premier passage. Le second élimine les punaises écloses entre-temps.' },
      ],
    },
  },
  frelons: {
    essonne: {
      accroche: 'Forêts de Sénart et de Dourdan, vallées de l’Orge et de l’Yvette, jardins des pavillons : l’Essonne est très exposée aux frelons asiatiques.',
      paras: [
        'Le **frelon asiatique** est installé dans toute l’Île-de-France. Dans l’Essonne, ses nids se cachent en haut des **grands arbres** des vallées (**Orge**, **Yvette**, **Essonne**) et en lisière des **forêts**. On les découvre souvent à l’automne, quand les feuilles tombent.',
        'Les **guêpes**, elles, s’installent sous les **tuiles**, dans les **coffres de volets** et les **haies** des pavillons. Nous détruisons les nids **dès 89 € TTC**, **149 € TTC** à la perche, **199 € TTC** en toiture ou combles, nacelle sur devis.',
      ],
      points: [
        { t: 'Nid de frelons dans un arbre de l’Essonne', x: 'Traitement depuis le sol à la perche télescopique, jusqu’à plusieurs mètres de haut.' },
        { t: 'Guêpes sous le toit d’un pavillon', x: 'Injection du produit directement dans le nid, sans démonter la toiture.' },
        { t: 'Apiculteurs du 91', x: 'Les frelons asiatiques chassent les abeilles devant les ruches : détruire les nids proches les protège.' },
      ],
      faq: [
        { q: 'Intervenez-vous partout dans le 91 ?', a: 'Oui, dans les communes de l’Essonne, 7j/7, souvent rapidement en saison.' },
        { q: 'Un nid découvert en novembre est-il encore actif ?', a: 'S’il y a encore des allées et venues, oui. Sans activité par temps doux, la colonie est sans doute morte et le nid ne sera pas réutilisé.' },
        { q: 'Combien coûte un nid très haut ?', a: 'À la perche, 149 € TTC. Au-delà de la portée de la perche, une nacelle est prévue sur devis.' },
      ],
    },
    yvelines: {
      accroche: 'Grandes forêts, parcs de châteaux, jardins arborés : dans les Yvelines, les frelons asiatiques trouvent de nombreux sites de nid en hauteur.',
      paras: [
        'Les Yvelines comptent parmi les départements les plus **boisés** d’Île-de-France : forêts de **Rambouillet**, de **Saint-Germain**, de **Marly**. Les **grands arbres** des forêts, des parcs et des jardins privés de **Versailles** accueillent des nids de **frelons asiatiques**, parfois à grande hauteur.',
        'Dans les **pavillons** et les **centres anciens**, ce sont surtout les **guêpes** qui posent problème : toitures, volets, murets. Destruction **dès 89 € TTC**, **149 € TTC** à la perche, **199 € TTC** en toiture, nacelle sur devis.',
      ],
      points: [
        { t: 'Nid très haut dans un grand arbre', x: 'Perche télescopique longue ou nacelle sur devis pour les nids hors de portée.' },
        { t: 'Guêpes dans une toiture ancienne', x: 'Traitement par l’entrée du nid, sans abîmer les tuiles ni les corniches.' },
        { t: 'Maisons en lisière de forêt', x: 'Contrôle des abris, des haies et des avant-toits chaque été.' },
      ],
      faq: [
        { q: 'Intervenez-vous dans tout le 78 ?', a: 'Oui, 7j/7, de Versailles à Mantes-la-Jolie et jusqu’au sud du département.' },
        { q: 'Le nid est en forêt domaniale : qui appeler ?', a: 'En forêt publique, prévenez l’ONF ou la mairie. Sur un terrain privé, c’est au propriétaire de faire détruire le nid.' },
        { q: 'Frelon asiatique ou européen ?', a: 'L’asiatique est sombre avec une bande orange et des pattes jaunes ; l’européen est plus gros, à l’abdomen jaune rayé de noir. Une photo suffit pour identifier.' },
      ],
    },
    'seine-et-marne': {
      accroche: 'Forêt de Fontainebleau, vallées de la Marne et de la Seine, grandes propriétés : en Seine-et-Marne, frelons et guêpes sont présents partout.',
      paras: [
        'La **Seine-et-Marne** est un grand département de **forêts** (Fontainebleau, Notre-Dame, Armainvilliers), de **vallées** et de **villages**. Les **frelons asiatiques** y nichent dans les grands arbres, et chassent les abeilles autour des **ruchers**.',
        'Les **guêpes** s’installent dans les **greniers**, les **toitures anciennes** et les **haies** des maisons. Nous intervenons **dès 89 € TTC**, **149 € TTC** à la perche, **199 € TTC** en toiture ou combles, nacelle sur devis.',
      ],
      points: [
        { t: 'Nid de frelons près d’un rucher', x: 'Destruction rapide pour protéger les colonies d’abeilles.' },
        { t: 'Guêpes dans un grenier de la Brie', x: 'Traitement par l’intérieur des combles, en tenue intégrale.' },
        { t: 'Grandes propriétés et corps de ferme', x: 'Recherche des nids dans les arbres, granges et dépendances.' },
      ],
      faq: [
        { q: 'Intervenez-vous dans les villages du 77 ?', a: 'Oui, sur devis gratuit, 7j/7. En saison, nous regroupons les tournées pour intervenir vite.' },
        { q: 'Faut-il retirer le nid après le traitement ?', a: 'Ce n’est pas nécessaire : il n’est jamais réutilisé. S’il gêne et qu’il est accessible, il peut être retiré quelques jours plus tard.' },
        { q: 'Peut-on détruire un nid soi-même ?', a: 'Non : bombe, eau ou feu provoquent souvent une attaque groupée. Un professionnel en tenue intégrale traite le nid à distance.' },
      ],
    },
  },
  cafards: {
    essonne: {
      accroche: 'Grands ensembles, restaurants, cuisines collectives : dans l’Essonne, les cafards remontent par les gaines et voyagent dans les cartons.',
      paras: [
        'La **blatte germanique**, petite et brun clair, est la plus fréquente dans les **appartements** et les **cuisines professionnelles** de l’Essonne. Elle circule par les **gaines techniques** et les **colonnes** des immeubles, d’Évry-Courcouronnes à Massy.',
        'La **blatte orientale**, plus grosse et noire, préfère les **caves** et **sous-sols** humides, près de la Seine et de l’Orge. Notre traitement associe **gel appât**, **insecticide** et parfois **vapeur sèche**, avec **deux passages**.',
      ],
      points: [
        { t: 'Cafards dans un immeuble du 91', x: 'Traitement des logements touchés et des parties communes avec le bailleur pour éviter la recontamination.' },
        { t: 'Restaurants et cuisines collectives', x: 'Intervention hors service, suivi régulier et attestation pour vos contrôles.' },
        { t: 'Blattes dans un sous-sol', x: 'Traitement des caves et vides sanitaires, recherche de l’humidité.' },
      ],
      faq: [
        { q: 'Intervenez-vous partout dans l’Essonne ?', a: 'Oui, dans les communes du département, deux passages inclus, devis gratuit.' },
        { q: 'Le gel suffit-il contre les cafards ?', a: 'Sur une petite infestation, souvent oui. Sur une infestation installée, il est associé à d’autres produits et à un second passage.' },
        { q: 'Les voisins doivent-ils être traités ?', a: 'Si les cafards circulent par les gaines, oui : sinon ils reviennent depuis les logements voisins.' },
      ],
    },
    yvelines: {
      accroche: 'Immeubles anciens, résidences, commerces de bouche : dans les Yvelines, les blattes s’installent dans les cuisines et les réserves.',
      paras: [
        'Dans les **immeubles anciens** de Versailles, Saint-Germain-en-Laye ou Poissy, les **blattes** circulent par les **conduits**, les **caves** et les **faux plafonds**. Dans les **résidences** de Mantes-la-Jolie, Trappes ou Sartrouville, elles passent d’un logement à l’autre par les **gaines**.',
        'Les **restaurants** et **commerces de bouche**, nombreux dans les centres-villes, demandent un traitement discret et un **suivi**. Nous utilisons **gel appât**, **insecticide** et **vapeur sèche**, avec **deux passages** et attestation.',
      ],
      points: [
        { t: 'Cafards dans une cuisine de Versailles', x: 'Traitement des meubles, de l’électroménager et des gaines, avec deux passages.' },
        { t: 'Résidences du 78', x: 'Traitement coordonné des logements touchés et des parties communes.' },
        { t: 'Commerces de bouche', x: 'Intervention hors ouverture, suivi régulier et attestation.' },
      ],
      faq: [
        { q: 'Intervenez-vous dans tout le 78 ?', a: 'Oui, sur devis gratuit, deux passages inclus.' },
        { q: 'Les cafards viennent-ils des cartons de livraison ?', a: 'Souvent : les blattes et leurs œufs voyagent dans les cartons. Videz-les dehors et jetez-les rapidement.' },
        { q: 'Faut-il vider la cuisine avant le traitement ?', a: 'Il faut dégager l’accès aux placards et à l’arrière de l’électroménager. Le technicien vous envoie la liste avant son passage.' },
      ],
    },
    'seine-et-marne': {
      accroche: 'Centres anciens, villes nouvelles, zones commerciales : en Seine-et-Marne, les cafards suivent les livraisons et les gaines des immeubles.',
      paras: [
        'Dans les **centres anciens** de Meaux et de Melun comme dans les **résidences** de Chelles, Pontault-Combault ou Savigny-le-Temple, la **blatte germanique** s’installe dans les **cuisines** et circule par les **gaines**. La **blatte orientale** préfère les **caves** humides près de la Marne et de la Seine.',
        'Les **zones commerciales** et les **restaurants** reçoivent beaucoup de **livraisons**, source fréquente de blattes. Nous traitons au **gel appât**, à l’**insecticide** ou à la **vapeur sèche**, avec **deux passages**.',
      ],
      points: [
        { t: 'Restaurants des zones commerciales', x: 'Traitement hors service, suivi et attestation pour les contrôles d’hygiène.' },
        { t: 'Cafards dans un appartement du 77', x: 'Cuisine, salle de bains, gaines : deux passages pour éliminer les blattes écloses entre-temps.' },
        { t: 'Blattes dans une cave', x: 'Traitement des sous-sols et conseils contre l’humidité.' },
      ],
      faq: [
        { q: 'Intervenez-vous dans toute la Seine-et-Marne ?', a: 'Oui, sur devis gratuit, deux passages inclus.' },
        { q: 'Combien de temps pour voir le résultat ?', a: 'Les blattes diminuent dans les jours qui suivent le premier passage. Le second élimine celles sorties des oothèques.' },
        { q: 'Blatte germanique ou orientale ?', a: 'La germanique est petite, brun clair, avec deux bandes sombres ; l’orientale est plus grosse, noire et lente. Une photo nous suffit.' },
      ],
    },
  },
  puces: {
    essonne: {
      accroche: 'Pavillons avec jardin, promenades en forêt, chats qui sortent : dans l’Essonne, les puces arrivent le plus souvent avec les animaux.',
      paras: [
        'Dans l’Essonne, beaucoup de familles vivent en **pavillon avec jardin**, avec chiens et chats. Les **forêts** (Sénart, Dourdan) et les **vallées** sont des lieux de promenade où les animaux croisent d’autres animaux porteurs de puces.',
        'Le traitement associe le **vétérinaire**, qui traite l’animal, et notre **traitement du logement**, en deux passages, dès **120 € TTC** pour un appartement.',
      ],
      points: [
        { t: 'Puces après une promenade en forêt', x: 'Contrôlez le pelage au retour, surtout à la base de la queue.' },
        { t: 'Puces dans un logement vide', x: 'Les cocons peuvent attendre des mois : traitement avant l’emménagement.' },
        { t: 'Puces sans animal', x: 'Rongeurs dans la cave, ancien occupant, chats errants : nous cherchons la source.' },
      ],
      faq: [
        { q: 'Intervenez-vous partout dans le 91 ?', a: 'Oui, sur devis gratuit, dès 120 € TTC pour un appartement.' },
        { q: 'Faut-il traiter l’animal en même temps ?', a: 'Oui, c’est indispensable : sans traitement de l’animal, les puces reviennent.' },
        { q: 'Combien de temps quitter le logement ?', a: 'En moyenne 4 heures après le traitement, puis vous aérez avant de revenir.' },
      ],
    },
    yvelines: {
      accroche: 'Forêts, parcs, maisons avec jardin : dans les Yvelines, chiens et chats rapportent les puces de leurs promenades.',
      paras: [
        'Les Yvelines sont très **boisées** : forêts de Saint-Germain, de Marly, de Rambouillet. Les **chiens** qui s’y promènent peuvent revenir avec des **puces** et des **tiques**, surtout de l’été à l’automne.',
        'Dans les **appartements anciens** de Versailles, les larves se cachent dans les **fentes du parquet**. Notre traitement, en deux passages, atteint ces zones. Dès **120 € TTC** pour un appartement.',
      ],
      points: [
        { t: 'Puces dans un parquet ancien', x: 'Le traitement va jusque dans les fentes, où vivent les larves.' },
        { t: 'Chien qui se promène en forêt', x: 'Un antiparasitaire prescrit par le vétérinaire protège l’animal toute l’année.' },
        { t: 'Location entre deux occupants', x: 'Traitement du logement vide, plus rapide et plus complet.' },
      ],
      faq: [
        { q: 'Intervenez-vous dans tout le 78 ?', a: 'Oui, sur devis gratuit, dès 120 € TTC pour un appartement.' },
        { q: 'Pourquoi voit-on encore des puces après le traitement ?', a: 'Les cocons protègent les puces en formation : elles sortent quelques jours ou semaines plus tard et sont touchées par le produit.' },
        { q: 'L’aspirateur est-il utile ?', a: 'Oui, chaque jour pendant plusieurs semaines, en jetant le sac dehors.' },
      ],
    },
    'seine-et-marne': {
      accroche: 'Maisons de campagne, fermes, chats de grange : en Seine-et-Marne, les puces circulent entre animaux, jardins et dépendances.',
      paras: [
        'En **Seine-et-Marne**, beaucoup de maisons ont un **jardin**, une **grange** ou des **dépendances**, et des animaux qui sortent. Chats de ferme, hérissons et rongeurs entretiennent des **puces** que les animaux de la maison rapportent à l’intérieur.',
        'Nous traitons la **maison** et, si besoin, les **lieux de repos de l’animal** (niche, garage, véranda), en deux passages, pendant que le vétérinaire traite l’animal. Dès **120 € TTC** pour un appartement.',
      ],
      points: [
        { t: 'Puces dans une maison avec dépendances', x: 'Garage, véranda, niche : les lieux où dort l’animal sont traités aussi.' },
        { t: 'Chats de ferme', x: 'Un traitement vétérinaire régulier de tous les animaux limite les rechutes.' },
        { t: 'Puces dans un appartement', x: 'Sols, plinthes, canapés et zones de repos de l’animal, en deux passages.' },
      ],
      faq: [
        { q: 'Intervenez-vous dans les villages du 77 ?', a: 'Oui, sur devis gratuit.' },
        { q: 'Faut-il traiter la grange ?', a: 'Si l’animal y dort ou si des chats et des rongeurs y vivent, oui : sinon elle sert de réserve à puces.' },
        { q: 'Le lavage à 60 °C est-il utile ?', a: 'Oui, il tue tous les stades : couverture de l’animal, plaids et housses de coussins.' },
      ],
    },
  },
  souris: {
    essonne: {
      accroche: 'Pavillons, résidences, maisons en bord de champs : dans l’Essonne, les souris entrent dès les premiers froids.',
      paras: [
        'Dans l’Essonne, la **souris domestique** et le **mulot** entrent dans les maisons à l’**automne**, par les **garages**, les **sous-sols** et les **passages de tuyaux**. Au sud, la proximité des **champs** renforce le phénomène après les moissons.',
        'Nous posons des **pièges** mécaniques ou connectés, ou des **postes sécurisés**, puis nous **rebouchons les accès**. Dès **120 € TTC**, devis gratuit.',
      ],
      points: [
        { t: 'Souris dans un garage', x: 'Le garage est la porte d’entrée : il est traité et fermé en priorité.' },
        { t: 'Souris dans les cloisons', x: 'Pièges sur les passages et colmatage des trous au mortier et à la laine d’acier.' },
        { t: 'Résidences du 91', x: 'Traitement des logements touchés et signalement des accès au bailleur.' },
      ],
      faq: [
        { q: 'Intervenez-vous partout dans l’Essonne ?', a: 'Oui, sur devis gratuit, dès 120 € TTC.' },
        { q: 'Pièges ou postes d’appâtage ?', a: 'Le technicien choisit selon le lieu, la présence d’enfants et d’animaux. Le colmatage des accès est indispensable dans tous les cas.' },
        { q: 'Une souris peut-elle passer par un petit trou ?', a: 'Oui, une ouverture de la taille d’un crayon lui suffit.' },
      ],
    },
    yvelines: {
      accroche: 'Maisons en lisière de forêt, immeubles anciens, pavillons des bords de Seine : dans les Yvelines, les souris cherchent la chaleur en hiver.',
      paras: [
        'Les **forêts** des Yvelines abritent souris, **mulots** et **lérots**, qui entrent dans les maisons proches à l’automne. Dans les **immeubles anciens** de Versailles ou de Saint-Germain-en-Laye, les souris circulent sous les **parquets** et dans les **faux plafonds**.',
        'Nous identifions le rongeur, posons les dispositifs adaptés et **rebouchons** les passages avec des matériaux qu’il ne ronge pas. Dès **120 € TTC**.',
      ],
      points: [
        { t: 'Souris sous un parquet ancien', x: 'Pièges sur les passages visibles et colmatage, sans démonter le parquet.' },
        { t: 'Maison en lisière de forêt', x: 'Contrôle du garage, des sous-sols et des combles avant l’hiver.' },
        { t: 'Bureaux et commerces', x: 'Pièges connectés et suivi, sans gêner l’activité.' },
      ],
      faq: [
        { q: 'Intervenez-vous dans tout le 78 ?', a: 'Oui, sur devis gratuit, dès 120 € TTC.' },
        { q: 'Souris ou lérot dans les combles ?', a: 'Le lérot est plus gros et plus bruyant, avec un masque noir autour des yeux. Une photo des crottes ou de l’animal nous aide à trancher.' },
        { q: 'La mousse expansive suffit-elle ?', a: 'Non, les souris la rongent. Il faut de la laine d’acier ou du grillage fin, scellés au mortier.' },
      ],
    },
    'seine-et-marne': {
      accroche: 'Plaines agricoles, corps de ferme, villes nouvelles : en Seine-et-Marne, souris et mulots se rapprochent des maisons après les moissons.',
      paras: [
        'Avec ses **grandes cultures**, la **Seine-et-Marne** voit souris et **mulots** migrer vers les maisons chaque automne, quand les champs sont moissonnés et labourés. Les **granges**, **garages** et **celliers** sont les premiers visités.',
        'Dans les villes nouvelles de **Marne-la-Vallée** et de **Sénart**, les souris passent par les **parkings** et les **gaines**. Pièges, postes sécurisés et **colmatage**, dès **120 € TTC**.',
      ],
      points: [
        { t: 'Souris après les moissons', x: 'Bas de portes, soupiraux, passages de tuyaux : à vérifier dès septembre.' },
        { t: 'Granges et dépendances', x: 'Traitement en même temps que la maison, sinon elles servent de réserve.' },
        { t: 'Logements récents', x: 'Passages de gaines mal rebouchés après travaux : on les repère et on les ferme.' },
      ],
      faq: [
        { q: 'Intervenez-vous dans les communes rurales du 77 ?', a: 'Oui, sur devis gratuit, dès 120 € TTC.' },
        { q: 'Mon chat ne suffit-il pas ?', a: 'Il peut en attraper, mais il ne ferme pas les accès et ne trouve pas le nid.' },
        { q: 'Faut-il traiter toute l’année ?', a: 'Non : on traite l’infestation, on ferme les accès, puis une vigilance à l’automne suffit.' },
      ],
    },
  },
}
