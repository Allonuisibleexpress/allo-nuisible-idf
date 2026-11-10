import type { BlocMethodes, GuideService } from '@/components/MethodesService'

export const METHODES_DERATISATION: BlocMethodes = {
  titre: 'Comment on se débarrasse des rats et des souris : nos 5 méthodes',
  intro: 'Une dératisation réussie ne repose jamais sur un seul outil. Notre technicien **combine plusieurs méthodes** selon le lieu (appartement, pavillon, cave, restaurant), l’espèce (rat brun, rat noir, souris) et vos contraintes (enfants, chien, chat, cuisine professionnelle). Voici ce que nous faisons réellement sur le terrain.',
  methodes: [
    {
      nom: 'Postes d’appâtage sécurisés',
      titre: 'Raticide en boîte sécurisée : la méthode de référence contre une colonie de rats',
      accroche: 'C’est la méthode **la plus courante et la plus efficace** sur une vraie population. Le raticide n’est jamais posé à nu : il est fixé à l’intérieur d’une **boîte verrouillée à clé**, que seul un rongeur peut atteindre.',
      etapes: [
        'Repérage des **coulées** (traces grasses le long des murs), des crottes et des trous pour savoir où les rats passent vraiment.',
        'Pose des boîtes **le long des murs, sur les trajets**, jamais au milieu d’une pièce : un rat longe toujours les parois.',
        'Appât professionnel fixé sur une tige à l’intérieur, pour qu’il ne puisse pas être emporté et caché ailleurs.',
        'Fermeture à clé, étiquetage du poste et **plan de pose** remis au client (indispensable pour un restaurant ou une copropriété).',
        'Retour pour relever la consommation, recharger les postes actifs et déplacer ceux qui ne sont pas visités.',
      ],
      pourquoi: 'Les raticides utilisés en dératisation agissent **en différé** : le rongeur ne fait pas le lien entre l’appât et son malaise, et ses congénères continuent de consommer. C’est ce qui permet de toucher toute la colonie, pas seulement les individus les plus hardis.',
      limites: 'Les rats sont **néophobes** : ils se méfient de tout objet nouveau et peuvent mettre plusieurs jours avant de toucher un poste. Il faut donc de la patience et un suivi. Un rongeur peut aussi mourir dans un endroit inaccessible (cloison, faux plafond) et provoquer une odeur temporaire.',
      ideal: 'Caves, vides sanitaires, locaux poubelles, jardins, parkings, colonies installées. C’est la base de nos contrats pour copropriétés et commerces.',
    },
    {
      nom: 'Piège Ekomille',
      titre: 'Dératisation sans mort-aux-rats : le piège multicapture Ekomille',
      accroche: 'Notre **méthode alternative** quand vous ne voulez pas de raticide. Elle reste moins courante que les postes d’appâtage, mais elle répond à une vraie demande : ne pas retrouver de rat mort dans la rue, le jardin ou une cloison.',
      etapes: [
        'Choix du **passage le plus fréquenté** : l’appareil doit être sur la route quotidienne des rongeurs.',
        'Appâts **alimentaires variés** (sans raticide) placés sur la plateforme.',
        'Le rongeur bascule dans une **cuve fermée** : il reste dans l’appareil, au lieu d’aller mourir ailleurs.',
        'Version connectée possible pour **suivre les captures** à distance et ne se déplacer qu’au bon moment.',
      ],
      pourquoi: 'L’appareil capture **plusieurs rongeurs à la suite** sans être réarmé, et rien n’est accessible aux chiens, aux chats ni aux enfants. Le cadavre ne se décompose pas dans un mur.',
      limites: 'Il doit être posé au bon endroit, sinon les captures restent faibles. Sur une très forte colonie, il est souvent complété par d’autres moyens.',
      ideal: 'Familles avec jeunes enfants ou animaux, cours d’immeubles, restaurants qui ne veulent pas de cadavres, clients qui refusent la mort-aux-rats.',
    },
    {
      nom: 'Pièges mécaniques',
      titre: 'Tapettes et pièges professionnels : la solution précise contre les souris',
      accroche: 'Pour **quelques souris** dans une cuisine ou un placard, un piège bien placé est souvent plus rapide qu’un poste d’appâtage.',
      etapes: [
        'Repérage des **crottes fraîches** et des zones grignotées (sacs de farine, câbles, isolant).',
        'Pose des pièges **perpendiculaires au mur**, la gâchette côté plinthe, là où la souris passe.',
        'Pièges placés dans des **boîtes de protection** quand il y a des enfants ou des animaux.',
        'Relevé et retrait des captures lors du passage de contrôle.',
      ],
      pourquoi: 'L’effet est **immédiat et visible** : vous savez combien de rongeurs ont été capturés, sans odeur dans les murs.',
      limites: 'Efficace sur une petite population, insuffisant seul contre une colonie de rats bien installée.',
      ideal: 'Souris en appartement, cuisines, réserves alimentaires, logements où l’on veut éviter tout produit.',
    },
    {
      nom: 'Recherche des accès et colmatage',
      titre: 'Boucher les trous de rats et de souris : l’étape qui évite le retour',
      accroche: 'Sans cette étape, **une dératisation ne dure pas** : d’autres rongeurs reprennent le même chemin. Une souris passe par une ouverture de la taille d’un crayon.',
      etapes: [
        'Inspection des **passages de tuyaux**, gaines, bas de portes, soupiraux, grilles d’aération et joints de dilatation.',
        'Colmatage avec des matériaux que les rongeurs ne rongent pas : **laine d’acier, grillage fin, mortier**, plaques métalliques.',
        'Pose de **bas de porte** et de grilles fines sur les aérations.',
        'Liste écrite des points à reprendre par le syndic ou un artisan quand il s’agit de gros œuvre.',
      ],
      pourquoi: 'On coupe la source : les rongeurs éliminés ne sont pas remplacés par ceux du réseau, de la cave voisine ou du jardin.',
      limites: 'Certains accès relèvent de travaux (canalisations cassées, fondations) qui dépassent un simple colmatage.',
      ideal: 'Tous les chantiers, et en particulier les pavillons, rez-de-chaussée, caves et commerces.',
    },
    {
      nom: 'Suivi et contrats',
      titre: 'Contrat de dératisation pour restaurant ou copropriété : comment ça marche',
      accroche: 'Pour les lieux exposés en permanence, la dératisation devient **un suivi régulier**, avec des passages programmés et un registre.',
      etapes: [
        'Audit de départ et **plan numéroté** de tous les postes.',
        'Passages programmés (mensuels, trimestriels…) avec relevé de chaque poste.',
        '**Rapport d’intervention** remis à chaque visite, utile lors d’un contrôle sanitaire.',
        'Intervention supplémentaire en cas de signalement entre deux passages.',
      ],
      pourquoi: 'On détecte une reprise d’activité **avant** qu’elle ne devienne une infestation.',
      limites: 'Le contrat ne remplace pas l’hygiène du lieu : poubelles fermées, denrées stockées hors du sol.',
      ideal: 'Restaurants, boulangeries, commerces alimentaires, hôtels, copropriétés avec caves et locaux poubelles.',
    },
  ],
}

export const GUIDE_DERATISATION: GuideService = {
  sections: [
    {
      titre: 'Rat ou souris dans la maison : comment savoir à qui vous avez affaire ?',
      texte: [
        'Le traitement n’est pas le même, il faut donc d’abord **identifier le rongeur**. Le meilleur indice reste les crottes : celles du **rat brun** sont grosses et arrondies aux bouts, celles de la **souris** petites et pointues, comme des grains de riz foncés.',
        'Le lieu compte aussi. Le **rat brun** (surmulot) vit plutôt en bas : caves, égouts, rez-de-chaussée, jardins. Le **rat noir** grimpe et s’installe dans les combles. La **souris** se glisse partout, jusque dans les étages, les cloisons et les faux plafonds.',
      ],
      liste: [
        '**Bruits de grattement la nuit** dans les murs ou au plafond',
        '**Traces grasses** le long des plinthes (les coulées)',
        '**Emballages percés**, câbles ou isolant rongés',
        '**Odeur d’urine** forte dans un placard ou une cave',
      ],
    },
    {
      titre: 'Dératisation d’une cave ou d’un local poubelle en copropriété',
      texte: [
        'Les caves et locaux poubelles sont la **porte d’entrée numéro un** des rats dans les immeubles d’Île-de-France. Nous intervenons à la demande du syndic ou du conseil syndical, avec une coordination simple : accès aux clés, affichage pour prévenir les résidents, postes numérotés.',
        'À la fin, le syndic reçoit **un rapport et un plan de pose**. Si des travaux sont nécessaires (soupirail cassé, canalisation fendue), nous les listons clairement.',
      ],
    },
    {
      titre: 'Rats dans le jardin ou sous la terrasse d’un pavillon',
      texte: [
        'Dans un jardin, les rats creusent des **terriers** sous les dalles, les abris de jardin et les composts. Nous traitons les terriers actifs, posons des postes sécurisés **hors de portée des animaux** et vous indiquons ce qui les attire : graines tombées des mangeoires, compost ouvert, croquettes laissées dehors.',
        'Le pavillon lui-même est inspecté : un rat qui vit dehors finit souvent par trouver **un accès au vide sanitaire ou au garage**.',
      ],
    },
    {
      titre: 'Les erreurs qui font revenir les rats',
      texte: ['Nous voyons souvent les mêmes situations chez les clients qui ont essayé seuls avant de nous appeler.'],
      liste: [
        '**Poser du raticide à nu** : dangereux pour les animaux et souvent ignoré par les rats méfiants',
        '**Arrêter trop tôt** dès que les bruits cessent, alors que la colonie n’est pas éliminée',
        '**Oublier de boucher** les entrées : d’autres rongeurs arrivent par le même chemin',
        '**Laisser une source de nourriture** : poubelles ouvertes, croquettes, graines',
      ],
      encadre: {
        titre: 'Notre conseil',
        texte: 'Ne tardez pas : une souris femelle peut avoir plusieurs portées par an. **Plus on intervient tôt, plus le traitement est court.** Appelez-nous au 07 68 07 72 19 pour un devis gratuit.',
      },
    },
  ],
}
