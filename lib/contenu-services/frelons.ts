// Page « Destruction de nid de frelons et de guêpes » (/services/guepes-frelons), contenu long du 13/11/2026.
// Demande de l'utilisateur : enrichir les pages frelons (même méthode que la cryogénie : beaucoup de contenu, titres
// avec mots-clés, vidéos de chantier détaillées).
// Faits vérifiés le 13/11/2026 : Ameli « Piqûres de guêpes, abeilles, frelons et bourdons » ; articles du blog déjà sourcés
// (MNHN, ministère de la Transition écologique, Wikipédia et CARI pour le frelon européen, INPN pour les guêpes).
// Pas cité volontairement : le classement « danger sanitaire de 2e catégorie » (2012), dont le statut actuel n'est pas clair.
// Vidéos : décrites d'après les images des fichiers et les récits du blog ; durée = durée du fichier ; date = mise en ligne (git).
import type { VideoDetaillee } from '@/components/VideosDetaillees'

type Bloc = { h: string; p: string[] }

export const FRELONS_ARTICLE: Bloc[] = [
  { h: 'Destruction de nid de frelons et de guêpes à Paris et en Île-de-France', p: [
    'Un **nid de frelons asiatiques** dans un arbre, un **nid de frelons européens** dans une cheminée, un **nid de guêpes** sous une tuile ou au plafond d’un abri : nos techniciens détruisent tous les nids d’hyménoptères, **7j/7**, à **Paris** et dans toute l’**Île-de-France**, depuis notre base de Saint-Maurice (94).',
    'Selon l’emplacement, nous intervenons à la **perche télescopique**, à l’**échelle**, sur la **toiture** ou depuis notre **camion nacelle**, toujours en **tenue de protection intégrale**. Le nid est traité au cœur par un technicien **certifié Certibiocide**. Destruction de nid **dès 89 € TTC**, devis donné avant le déplacement.',
  ] },
  { h: 'Frelon asiatique : nid primaire, nid secondaire, le cycle à connaître', p: [
    'Le **frelon asiatique** (*Vespa velutina*) a été repéré pour la première fois en Europe **en 2004, dans le Lot-et-Garonne**. Selon le Muséum national d’Histoire naturelle, quelques reines seraient arrivées dans des poteries importées de Chine. Il est classé **espèce exotique envahissante** en France.',
    '### Au printemps : le nid primaire',
    'Une **reine fondatrice**, seule, sort de l’abri où elle a passé l’hiver et construit un petit **nid primaire**, souvent à l’abri : sous un avant-toit, dans un abri de jardin, un coffre de volet roulant. C’est le moment où le nid est le plus petit et le plus facile à détruire.',
    '### En été : le nid secondaire',
    'La colonie grandit et construit un **nid secondaire**, le plus souvent **en hauteur**, à la cime des arbres. Il abrite des milliers d’ouvrières et grossit jusqu’à l’automne. On le découvre souvent à la **chute des feuilles**.',
    '### De septembre à novembre : les futures reines',
    'Le nid produit les **mâles** et les **futures reines**, qui fonderont les nids de l’année suivante. Détruire un nid encore actif à cette période évite qu’elles ne partent.',
    '### En hiver : un nid vide, jamais réutilisé',
    'La colonie meurt et le nid est **abandonné** : il ne sera pas réutilisé. Un nid sans aucune activité n’a plus besoin d’être traité. Voir notre article [nid de frelon en hiver : faut-il le détruire ?](/blog/nid-de-frelon-en-hiver).',
  ] },
  { h: 'Frelon européen : faut-il détruire son nid ?', p: [
    'Le **frelon européen** (*Vespa crabro*) est le plus grand frelon d’Europe : **20 à 25 mm** pour une ouvrière, **30 à 35 mm** pour une reine. Brun-roux et jaune, il **vole aussi la nuit** et peut entrer par une fenêtre éclairée.',
    'Les entomologistes le considèrent généralement comme une **espèce utile**, grand chasseur d’insectes. Nous détruisons son nid quand il **gêne** : près d’une porte, d’une fenêtre, d’un passage, d’une chambre ou d’un lieu fréquenté par des enfants. S’il est loin de tout passage, on peut le laisser. Tout savoir : [frelon européen](/blog/frelon-europeen-tout-savoir).',
  ] },
  { h: 'Nid de frelons dans un arbre, une cheminée ou un abri : nos techniques d’accès', p: [
    '### La perche télescopique : le nid traité à distance',
    'Pour un nid dans un arbre, une haie ou au-dessus d’une porte, le technicien injecte l’insecticide **au cœur du nid** depuis le sol, avec une perche télescopique, sans grimper. C’est ce que montre notre vidéo de l’énorme nid caché dans le feuillage d’un arbre.',
    '### La nacelle : les nids hors de portée d’une échelle',
    'Quand le nid est à la cime d’un grand arbre, une échelle n’est ni stable ni sûre. Notre **camion nacelle** offre une plateforme stable : à Champigny-sur-Marne, il nous a permis d’atteindre un nid de frelons asiatiques à environ **12 mètres**, au sommet d’un cèdre.',
    '### La toiture et la cheminée',
    'Un conduit de cheminée peu utilisé offre un abri sombre et sec. Le technicien monte sur le toit, en tenue complète, et traite le nid **par le haut du conduit**, comme à Nogent-sur-Marne. Faites ramoner avant de rallumer un feu.',
    '### L’échelle, les tuiles et les avant-toits',
    'Les guêpes aiment les cavités sous les **tuiles** et les **avant-toits**. Le technicien repère l’entrée du nid en observant les allées et venues, sécurise le pied de l’échelle, puis traite **à la source**, comme sur notre chantier en Essonne.',
    '### L’abri de jardin, le garage, le volet roulant',
    'Un abri peu ouvert, un garage, un coffre de volet roulant : autant de cachettes pour un nid de guêpes. À Gretz-Armainvilliers, un très gros nid s’était accroché au plafond d’un petit abri de jardin.',
  ] },
  { h: 'Prix d’une destruction de nid de frelons ou de guêpes', p: [
    '- **Dès 89 € TTC** : nid accessible, à hauteur d’homme ou presque.',
    '- **149 € TTC** : nid traité à la perche télescopique.',
    '- **199 € TTC** : nid en toiture, dans les combles ou dans une cheminée.',
    '- **Sur devis** : intervention avec notre camion nacelle.',
    'Le prix est confirmé **avant le déplacement**, sur description ou photo du nid. Voir aussi [tous nos tarifs](/tarifs).',
  ] },
  { h: 'Piqûre de frelon ou de guêpe : les bons réflexes', p: [
    'Ameli rappelle que les guêpes et les frelons ont un comportement plus offensif que les abeilles, et que seules les femelles piquent. Pour une piqûre sans signe de gravité, Ameli conseille de :',
    '- **retirer vos bagues** si la piqûre est à la main ;',
    '- **désinfecter** à l’eau et au savon, puis avec un antiseptique ;',
    '- appliquer de la **glace enveloppée dans un tissu** ;',
    '- prendre du **paracétamol** en cas de douleur et vérifier votre **vaccination contre le tétanos** ;',
    '- **rester au calme 30 minutes**.',
    'Contrairement à l’abeille, la guêpe et le frelon **ne laissent pas leur dard**. Appelez le **15** ou le **112** en cas de **piqûres multiples**, de piqûre dans la **bouche ou la gorge**, de **gêne respiratoire**, de gonflement du visage ou de malaise.',
  ] },
  { h: 'Pièges à frelons : pourquoi les éviter', p: [
    'Ameli déconseille les **pièges bouteille** (bouteille en plastique avec du sirop) : ils tuent de nombreux autres insectes utiles et n’ont **quasiment aucun impact** sur le nid visé. Le seul moyen d’en finir avec une colonie, c’est de **détruire le nid**.',
    'Ameli conseille aussi de rester à **5 mètres** du nid, de prévenir les membres de la maison et les voisins, et de **ne pas tenter de le détruire soi-même**.',
  ] },
  { h: 'Frelon asiatique et ruches : conseils aux apiculteurs', p: [
    'Le frelon asiatique **chasse les abeilles** en vol stationnaire devant les ruches. Pour un apiculteur, chaque nid détruit près du rucher compte : protégez l’entrée des ruches avec une **muselière** ou une grille adaptée, et faites détruire les nids repérés dans les environs. Voir notre guide [frelon asiatique : tout savoir](/blog/frelon-asiatique-tout-savoir).',
  ] },
  { h: 'Nid dans un parc, une rue ou un bâtiment public : qui prévenir ?', p: [
    'Ameli conseille de **signaler le nid à votre mairie** ou à l’organisme qui anime la lutte contre le frelon asiatique dans votre département. Pour un nid **chez vous**, dans votre jardin, votre toiture ou votre immeuble, appelez-nous : nous intervenons le jour même, 7j/7.',
  ] },
  { h: 'Destruction de nid de frelons près de chez vous', p: [
    'Nous intervenons à [Paris](/destruction-nid-frelon/paris), [dans le Val-de-Marne](/destruction-nid-frelon/val-de-marne), [dans les Hauts-de-Seine](/destruction-nid-frelon/hauts-de-seine), [en Essonne](/destruction-nid-frelon/essonne), [dans les Yvelines](/destruction-nid-frelon/yvelines) et [en Seine-et-Marne](/destruction-nid-frelon/seine-et-marne). Par exemple : [Saint-Maur-des-Fossés](/destruction-nid-frelon/saint-maur-des-fosses), [Vincennes](/destruction-nid-frelon/vincennes), [Créteil](/destruction-nid-frelon/creteil), [Champigny-sur-Marne](/destruction-nid-frelon/champigny-sur-marne), [Nogent-sur-Marne](/destruction-nid-frelon/nogent-sur-marne) et [Paris 12e](/destruction-nid-frelon/paris-12).',
  ] },
  { h: 'Nos sources', p: [
    '- Ameli, [Piqûres de guêpes, abeilles, frelons et bourdons](https://www.ameli.fr/assure/sante/urgence/morsures-griffures-piqures/piqures-guepes-abeilles-frelons-bourdons) : bons réflexes, numéros d’urgence, distance de 5 mètres, pièges bouteille, signalement à la mairie.',
    '- Muséum national d’Histoire naturelle, [le frelon asiatique](https://frelonasiatique.mnhn.fr/home) : arrivée en 2004, cycle du nid, prédation des abeilles.',
    '- Wikipédia et CARI : taille et mode de vie du frelon européen (sources détaillées dans notre article [frelon européen](/blog/frelon-europeen-tout-savoir)).',
    '- Prix, techniques et vidéos : Allo Nuisible IDF, chantiers réalisés en Île-de-France en 2026.',
  ] },
]

export const FRELONS_VIDEOS_INTRO = 'Ces vidéos ont été tournées par nos techniciens sur de **vrais chantiers de destruction de nids** de frelons et de guêpes en Île-de-France. Pour chacune, voici le contexte, ce que nous avons fait et ce que l’on voit à l’écran.'

export const FRELONS_VIDEOS: VideoDetaillee[] = [
  {
    src: '/chantiers/frelons-nacelle-champigny-sur-marne.mp4',
    poster: '/chantiers/posters/frelons-nacelle-champigny-sur-marne.jpg',
    titre: 'Champigny-sur-Marne : nid de frelons asiatiques à 12 mètres, détruit depuis la nacelle',
    lieu: 'Champigny-sur-Marne (94)',
    legende: 'Destruction d’un nid de frelons asiatiques au sommet d’un cèdre, depuis un camion nacelle, à Champigny-sur-Marne',
    texte: [
      'Dans le quartier de **la Fourchette**, à l’entrée de Joinville-le-Pont, un énorme **nid de frelons asiatiques** s’était installé à environ **12 mètres de haut**, au sommet d’un grand **cèdre**. Trop haut pour une échelle : nous sommes venus avec notre **camion nacelle**.',
      'Le technicien, en **tenue de protection intégrale**, monte jusqu’à hauteur du nid et injecte l’insecticide **au cœur du nid** à la perche télescopique. Il contrôle l’activité avant de redescendre ; si elle persiste au-delà de 48 heures, nous revenons.',
    ],
    voit: [
      'La **nacelle** qui monte le long du tronc jusqu’à la cime',
      'Le technicien en tenue de protection dans le panier',
      'La **perche** dirigée vers le nid, au sommet de l’arbre',
    ],
    lien: { href: '/blog/nid-frelons-asiatiques-12-metres-nacelle-champigny-sur-marne', label: 'Lire le récit complet de l’intervention' },
    duree: 4.0,
    date: '2026-11-10T22:37:31+01:00',
  },
  {
    src: '/chantiers/frelons-cheminee-nogent-sur-marne-video.mp4',
    poster: '/chantiers/posters/frelons-cheminee-nogent-sur-marne-video.jpg',
    titre: 'Nogent-sur-Marne : nid de frelons dans une cheminée, traité depuis le toit',
    lieu: 'Nogent-sur-Marne (94)',
    legende: 'Traitement d’un nid de frelons dans le conduit d’une cheminée, depuis la toiture, à Nogent-sur-Marne',
    texte: [
      'Des frelons avaient fait leur nid dans le **conduit d’une cheminée** peu utilisée : un abri sombre, sec et protégé, avec une ouverture en hauteur. Le nid grandissait à l’intérieur, invisible depuis la maison.',
      'Notre technicien est monté sur la **toiture** en **combinaison, voile et gants**, jusqu’à la souche de la cheminée, et a traité le nid **directement par le haut du conduit**. Conseil donné au client : faire **ramoner** avant de rallumer un feu, et poser un **chapeau ou une grille** pour éviter un nouveau nid.',
    ],
    voit: [
      'Le technicien sur le **toit en ardoise**, en tenue complète avec voile',
      'La lance dirigée vers la **souche de la cheminée**',
      'Le conduit traité par le haut, sans passer par la maison',
    ],
    lien: { href: '/blog/nid-frelons-cheminee-nogent-sur-marne', label: 'Lire le récit du chantier de Nogent' },
    duree: 25.2,
    date: '2026-11-04T00:55:21+01:00',
  },
  {
    src: '/chantiers/frelons-asiatiques-nid-video.mp4',
    poster: '/chantiers/posters/frelons-asiatiques-nid-video.jpg',
    titre: 'Énorme nid de frelons asiatiques caché dans le feuillage d’un arbre',
    lieu: 'Île-de-France',
    legende: 'Énorme nid de frelons asiatiques dans le feuillage d’un arbre, détruit à la perche télescopique',
    texte: [
      'Une cliente avait repéré des **allées et venues de frelons** au-dessus de son jardin. Le nid, énorme, était **caché dans le feuillage** d’un arbre, presque invisible depuis le sol.',
      'Nos **deux techniciens**, en tenue de protection, l’ont détruit **à distance**, avec une **perche télescopique**, sans grimper dans l’arbre. Ils ont contrôlé l’activité autour de l’arbre avant de partir.',
    ],
    voit: [
      'Le **nid brun**, à moitié caché par les feuilles',
      'Le nid filmé depuis le pied de l’arbre, entre les branches',
      'La **perche télescopique** dressée le long de la façade',
    ],
    lien: { href: '/blog/enorme-nid-frelons-asiatiques-arbre', label: 'Lire le récit de cette intervention' },
    duree: 23.8,
    date: '2026-11-02T22:52:02+01:00',
  },
  {
    src: '/chantiers/guepes-gretz-armainvilliers-nid-video.mp4',
    poster: '/chantiers/posters/guepes-gretz-armainvilliers-nid-video.jpg',
    titre: 'Gretz-Armainvilliers : énorme nid de guêpes au plafond d’un abri de jardin',
    lieu: 'Gretz-Armainvilliers (77)',
    legende: 'Gros nid de guêpes accroché au plafond d’un abri de jardin à Gretz-Armainvilliers, avant l’intervention',
    texte: [
      'Un client de **Gretz-Armainvilliers** avait un **gros nid de guêpes** accroché au **plafond de son petit abri de jardin**, au-dessus des étagères et des cartons.',
      'Notre technicien, en **tenue de protection**, a sécurisé la zone, traité le nid **à la source** pour éliminer toute la colonie, puis contrôlé l’activité avant de partir. La vidéo montre le nid **avant l’intervention**.',
    ],
    voit: [
      'Le nid en **papier mâché**, accroché au plafond',
      'L’abri encombré de cartons et d’étagères, juste en dessous',
      'La porte et l’ampoule, tout près du nid',
    ],
    lien: { href: '/blog/nid-guepes-gretz-armainvilliers', label: 'Lire le récit du chantier de Gretz-Armainvilliers' },
    duree: 6.9,
    date: '2026-11-03T23:54:08+01:00',
  },
  {
    src: '/chantiers/guepes-tuile-essonne-video.mp4',
    poster: '/chantiers/posters/guepes-tuile-essonne-video.jpg',
    titre: 'Essonne : nid de guêpes sous une tuile, intervention à l’échelle',
    lieu: 'Essonne (91)',
    legende: 'Technicien en tenue de protection montant à l’échelle pour traiter un nid de guêpes sous une tuile, en Essonne',
    texte: [
      'Un nid de **guêpes communes** s’était logé **sous une tuile**, en toiture : l’un des emplacements les plus fréquents et les plus délicats.',
      'Le technicien repère l’entrée du nid en observant les **allées et venues** des guêpes, met l’**échelle** en place et sécurise la zone au sol, puis monte en **tenue de protection** pour traiter le nid **à la source**, directement dans l’entrée sous la tuile.',
    ],
    voit: [
      'L’**échelle** déployée contre la façade',
      'Le technicien en tenue de protection qui monte jusqu’au bord du toit',
      'Le matériel posé au pied de l’échelle, dans la zone sécurisée',
    ],
    lien: { href: '/blog/nid-guepes-sous-tuile-essonne', label: 'Lire le récit du chantier en Essonne' },
    duree: 4.6,
    date: '2026-11-02T22:52:02+01:00',
  },
]

export const FRELONS_FAQ_PLUS: { q: string; a: string }[] = [
  { q: 'Combien coûte la destruction d’un nid de frelons ?', a: 'Dès 89 € TTC pour un nid accessible, 149 € à la perche télescopique, 199 € en toiture, dans les combles ou dans une cheminée, et sur devis avec notre camion nacelle. Le prix est confirmé avant le déplacement.' },
  { q: 'Les pièges à frelons sont-ils efficaces ?', a: 'Ameli déconseille les pièges bouteille : ils tuent de nombreux autres insectes et n’ont quasiment aucun impact sur le nid visé. Seule la destruction du nid règle le problème.' },
  { q: 'Faut-il détruire un nid de frelons européens ?', a: 'Seulement s’il gêne : près d’une porte, d’une fenêtre, d’un passage ou d’un lieu fréquenté par des enfants. Le frelon européen est considéré comme une espèce utile ; loin de tout passage, on peut laisser son nid.' },
  { q: 'Un nid de frelons asiatiques à 12 mètres, c’est possible à détruire ?', a: 'Oui. Quand le nid est hors de portée d’une échelle, nous venons avec notre camion nacelle, comme à Champigny-sur-Marne pour un nid au sommet d’un cèdre. Intervention sur devis.' },
]
