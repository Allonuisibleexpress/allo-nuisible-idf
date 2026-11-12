// Dératisation : travail d'observation avant intervention décrit par l'entreprise le 10/11/2026
// (recherche des accès, crottes, trous, galeries, traces d'urine, odeurs, dégâts). Ekomille = méthode alternative.
import type { ContenuFamille } from '@/components/ContenuNuisible'

export const CONTENU_DERATISATION: ContenuFamille = {
  observation: {
    titres: [
      'Dératisation {a} : un vrai travail d’enquête avant d’intervenir',
      'Avant de poser le moindre piège {a}, notre technicien observe',
      'Rats {a} : comment notre technicien lit les traces avant de traiter',
    ],
    intros: [
      'Une dératisation réussie, c’est **d’abord de l’observation**. Avant d’intervenir chez vous {a}, le technicien cherche **par où les rongeurs entrent, où ils passent, où ils nichent**. C’est ce repérage qui fait la différence.',
      'Poser des appâts au hasard ne sert à rien. Chez vous {a}, notre technicien commence par **lire les traces** laissées par les rongeurs : crottes, trous, galeries, urine, odeurs, dégâts. **Devis gratuit.**',
      'Un rat ne se montre presque jamais. Pour le battre, il faut **comprendre ses habitudes**. Voici le travail d’observation que mène notre technicien {a}, avant toute intervention.',
    ],
    points: [
      ['Recherche des accès|Bas de portes, **passages de tuyaux**, soupiraux, grilles d’aération, fissures, joints de dilatation : le technicien cherche **chaque entrée possible**. Une souris passe par un trou de la taille d’un crayon.', 'Les points d’entrée|Le technicien inspecte **tout ce qui donne sur l’extérieur** ou sur les parties communes : canalisations, gaines, soupiraux, portes de caves. Sans boucher ces accès, d’autres rongeurs reviennent.'],
      ['Repérage des crottes|Leur **taille et leur forme** disent tout : grosses et arrondies pour le **rat brun**, plus fines et pointues pour le **rat noir**, petites comme des grains de riz pour la **souris**. Fraîches et brillantes, elles signalent une **activité récente**.', 'Les crottes, premier indice|Le technicien les cherche le long des murs, derrière l’électroménager, dans les placards. Leur nombre et leur fraîcheur indiquent **l’espèce et l’importance** de la population.'],
      ['Repérage des trous et des galeries|Trous dans les **cloisons**, au ras des **plinthes**, sous les **dalles** ; au jardin, **terriers et galeries** sous les abris et les terrasses. Le technicien repère ceux qui sont **actifs**.', 'Trous, terriers et galeries|À l’intérieur, des **trous rongés** dans les murs et les plinthes ; dehors, des **galeries** creusées sous les dalles, le compost ou l’abri de jardin. Chaque trou actif est noté.'],
      ['Traces d’urine et coulées|Les rats laissent des **traces d’urine** et des **coulées grasses**, des marques sombres le long des murs à force de passer toujours au même endroit. Elles dessinent leur **trajet quotidien**.', 'Les chemins des rongeurs|Le long des murs, des **traînées noires et grasses** (les coulées) et des **traces d’urine** montrent où les rats passent chaque nuit. C’est là que le dispositif sera posé.'],
      ['Odeurs|Une **odeur forte et âcre**, proche de l’ammoniaque, dans une cave, un placard ou un faux plafond, trahit souvent un nid ou une forte présence.', 'L’odeur qui ne trompe pas|Une **odeur d’urine tenace** dans un local fermé est un indice précieux : elle guide le technicien vers le **nid**.'],
      ['Dégâts causés par les rongeurs|**Câbles rongés**, isolant arraché, **emballages percés**, bois grignoté, sacs de croquettes ouverts : les dégâts montrent où les rongeurs se nourrissent et à quel point ils sont installés.', 'Les dégâts|Gaines électriques mordillées, laine de verre dispersée, **aliments entamés**, portes grignotées : chaque dégât est un indice sur **le passage et l’alimentation** des rongeurs.'],
    ],
    photos: ['trouRat1', 'trouRat2', 'trouRat3'],
    conclusion: [
      'C’est **tout un travail d’observation**. Une fois les accès, les passages et les nids repérés, le technicien sait **exactement où intervenir** chez vous {a}, et avec quelle méthode.',
      'Grâce à ce repérage, le dispositif est posé **sur les trajets réels** des rongeurs {a}, et non au hasard. C’est ce qui rend la dératisation **rapide et durable**.',
      'Observation, puis action : ce n’est qu’après avoir **compris le comportement** des rongeurs {a} que le technicien choisit et pose son dispositif.',
    ],
  },
  methodes: {
    titres: [
      'Postes sécurisés, Ekomille, pièges, colmatage : nos méthodes de dératisation {a}',
      'Comment nous éliminons les rats {a}, méthode par méthode',
      'Dératisation {a} : les méthodes que notre technicien met en place',
    ],
    intros: [
      'Selon ce qu’il a observé, le technicien **combine plusieurs méthodes**. La plus courante reste le poste d’appâtage sécurisé ; si vous ne voulez pas de mort-aux-rats, nous proposons une **méthode alternative**.',
      'Il n’y a pas de dératisation efficace sans **méthode adaptée au lieu** : appartement, pavillon, cave, restaurant. Voici ce que fait notre technicien {a}.',
      'Rat brun, rat noir ou souris, cave ou cuisine : chaque situation a sa réponse. Voici nos méthodes, **expliquées simplement**.',
    ],
    items: [
      {
        nom: 'Postes d’appâtage sécurisés',
        titres: ['Le poste d’appâtage sécurisé : la méthode la plus courante', 'Raticide en boîte fermée à clé {a} : comment ça marche'],
        paras: [
          ['Le raticide n’est **jamais posé à nu** : il est fixé dans une **boîte verrouillée**, que seul un rongeur peut atteindre. Les postes sont placés **sur les trajets repérés**, le long des murs.', 'Le technicien installe des **boîtes d’appâtage fermées à clé**, hors de portée des enfants et des animaux, exactement **là où passent les rats** d’après son observation.'],
          ['L’appât agit **en différé** : le rat ne fait pas le lien avec le poste, et ses congénères continuent de consommer. C’est ce qui permet d’éliminer **toute la colonie**.', 'Comme le produit agit **après plusieurs heures**, les rats ne se méfient pas : toute la colonie finit par consommer. Le technicien revient pour **relever et recharger** les postes.'],
        ],
        lien: { href: '/blog/deratisation-logement-syndrome-diogene', label: 'Voir un chantier de dératisation', photo: 'ratDiogene' },
      },
      {
        nom: 'Méthode alternative : Ekomille',
        titres: ['Sans mort-aux-rats : le piège multicapture Ekomille', 'Vous ne voulez pas de raticide {a} ? Le piège Ekomille'],
        paras: [
          ['Si vous ne voulez pas de mort-aux-rats, nous posons un **piège multicapture Ekomille** sur le **passage le plus fréquenté**, avec des **appâts alimentaires**. Le rongeur tombe dans une **cuve fermée** et y reste.', 'En **méthode alternative**, le piège Ekomille capture plusieurs rongeurs à la suite, **sans raticide**. Il est posé sur le trajet le plus emprunté, repéré pendant l’observation.'],
          ['Le rat ne va pas mourir dans la rue ou dans une cloison, **hors de portée des chiens et des enfants**. Une version connectée permet de suivre les captures.', 'Avantage : pas de cadavre dans un mur, pas de produit accessible aux animaux. La version connectée **signale les captures** à distance.'],
        ],
        lien: { href: '/services/deratisation-ecologique', label: 'Dératisation écologique, sans raticide' },
      },
      {
        nom: 'Pièges mécaniques',
        titres: ['Pièges mécaniques : précis et immédiats', 'Pièges professionnels {a} : quand les utiliser'],
        paras: [
          ['Placés **perpendiculairement au mur**, sur les coulées, dans des **boîtes de protection** si besoin, les pièges donnent un **résultat visible** et évitent les odeurs dans les murs.', 'Pour quelques rongeurs dans une cuisine ou derrière l’électroménager, le piège est souvent **le plus rapide**. Le technicien le pose exactement sur le passage.'],
        ],
        lien: { href: '/blog/rat-piege-cuisine-electromenager', label: 'Un rat piégé derrière l’électroménager', photo: 'ratPiege' },
      },
      {
        nom: 'Colmatage des accès',
        titres: ['Boucher les accès : l’étape qui empêche le retour', 'Colmatage {a} : fermer la porte aux rongeurs'],
        paras: [
          ['Les accès repérés sont fermés avec des matériaux que les rongeurs **ne rongent pas** : **laine d’acier, grillage fin, mortier**, plaques métalliques, bas de portes.', 'Sans colmatage, d’autres rongeurs prennent la place. Le technicien bouche les trous avec de la **laine d’acier**, du **grillage** ou du **mortier**, et pose des **bas de portes**.'],
          ['Quand un accès relève de **travaux** (canalisation cassée, fondation), il vous le signale par écrit pour votre syndic ou un artisan.', 'Les réparations lourdes sont listées clairement, pour que le **syndic** ou un artisan s’en charge.'],
        ],
      },
    ],
  },
  signes: {
    titres: ['Rats ou souris {a} : les signes qui ne trompent pas', 'Comment savoir si vous avez des rats {a}'],
    intros: ['Les rongeurs sortent surtout la nuit. Mais ils laissent **toujours des indices**. Voici les plus fréquents.', 'Si vous reconnaissez un de ces signes {a}, il est temps d’appeler : une colonie grandit vite.'],
    points: [
      ['Bruits de grattement la nuit|Dans les **cloisons**, les **combles** ou le **faux plafond**, surtout le soir et la nuit.', 'Grattements nocturnes|Des **bruits de course ou de grignotage** au-dessus de votre tête ou dans les murs.'],
      ['Crottes fraîches|Brillantes et humides quand elles sont récentes, le long des murs et dans les placards.', 'Déjections dans les placards|Des crottes près de la nourriture, **derrière le four** ou sous l’évier.'],
      ['Emballages percés|Sacs de farine, croquettes, céréales **grignotés** et éparpillés.', 'Nourriture entamée|Des **aliments rongés** ou des miettes qui disparaissent.'],
      ['Odeur d’urine|Une **odeur âcre** et persistante dans une pièce fermée.', 'Odeur forte|Une odeur proche de l’**ammoniaque** dans une cave ou un placard.'],
      ['Traces grasses|Des **marques sombres** le long des plinthes, toujours au même endroit.', 'Coulées|Des **traînées noires** sur les murs et les seuils, à hauteur de rongeur.'],
      ['Animal agité|Votre chien ou votre chat **fixe un mur** ou gratte au même endroit.', 'Comportement de l’animal|Un animal qui **renifle avec insistance** une cloison ou un placard.'],
    ],
  },
  risques: {
    titres: ['Rats {a} : pourquoi il faut agir vite', 'Les dangers des rats et des souris {a}'],
    cartes: [
      { t: 'Pour votre santé', v: ['Les rongeurs peuvent transmettre des maladies, dont la **leptospirose**, par leur **urine** et leurs déjections. Ils souillent aussi les aliments.', 'Urine et crottes contaminent les surfaces et la nourriture : la **leptospirose** fait partie des maladies que les rats peuvent transmettre.'] },
      { t: 'Pour votre logement', v: ['Ils **rongent les câbles électriques**, ce qui peut provoquer des pannes, voire un **départ de feu**, et abîment isolants, tuyaux et boiseries.', 'Câbles dénudés, isolant détruit, portes grignotées : les dégâts peuvent coûter cher, et un câble rongé est un **risque d’incendie**.'] },
      { t: 'Pour la suite', v: ['Une femelle peut avoir **plusieurs portées par an** : la population augmente vite si l’on attend.', 'Plus on attend {a}, plus la colonie s’agrandit et plus le traitement est long. **Intervenir tôt simplifie tout.**'] },
    ],
  },
  erreurs: {
    titres: ['Dératisation {a} : les erreurs qui font revenir les rats', 'Les 6 erreurs à éviter face aux rats {a}'],
    items: [
      ['Poser du raticide à nu|**Dangereux** pour les enfants et les animaux, et souvent ignoré par des rats méfiants.', 'Éparpiller de la mort-aux-rats|Sans poste sécurisé, le produit est **accessible à tous** et mal consommé.'],
      ['Arrêter trop tôt|Les bruits cessent, mais **la colonie n’est pas éliminée** : il faut aller jusqu’au bout du suivi.', 'Croire que c’est fini|Un calme de quelques jours ne veut pas dire que **tous les rongeurs** sont partis.'],
      ['Oublier les accès|Sans colmatage, **d’autres rongeurs** reprennent le même chemin.', 'Ne pas boucher les trous|Les trous restés ouverts sont **une invitation** pour la colonie voisine.'],
      ['Laisser de la nourriture|Poubelles ouvertes, croquettes, graines des oiseaux : les rats **préfèrent ce repas** à l’appât.', 'Nourrir les oiseaux au sol|Les graines tombées **attirent les rats** au jardin.'],
      ['Changer le dispositif tous les jours|Les rats sont **néophobes** : il faut leur laisser le temps de s’habituer.', 'Déplacer les pièges sans arrêt|Un rat se méfie de **tout objet nouveau** : la patience paie.'],
      ['Faire appel à un faux professionnel|Prix cassé au téléphone, facture gonflée sur place : méfiez-vous des **arnaques**.', 'Choisir le premier venu|Vérifiez le **Certibiocide** et demandez un **devis écrit** avant l’intervention.'],
    ],
  },
  garantie: {
    accroches: ['Les rats reviennent ? **Nous revenons, sans frais**, pendant un an.', 'Dératisation **garantie un an** : si les rongeurs réapparaissent, notre technicien repasse gratuitement.', 'Notre engagement {a} : **si les rats reviennent, on revient**, sans rien vous facturer pendant un an.'],
    texte: 'Notre dératisation {a} est **garantie un an**. Pour mettre toutes les chances de votre côté : poubelles fermées, accès bouchés, aucune nourriture laissée dehors.',
  },
  quiPaie: {
    titres: ['Rats {a} : qui doit agir et qui paie la dératisation ?', 'Locataire, propriétaire, syndic, mairie : qui paie les rats {a} ?'],
    intros: ['Les rats circulent entre les logements, les caves et la rue : savoir **qui doit agir** évite de perdre du temps. Voici les règles générales {a}.', 'Tout dépend de **l’origine des rongeurs** et de **votre statut**. Voici ce qu’il faut savoir avant de payer.'],
    cartes: [
      { t: 'Vous êtes locataire', v: ['Le logement doit être loué **exempt de toute infestation d’espèces nuisibles et parasites** (loi du 6 juillet 1989, article 6). Si les rongeurs viennent du bâtiment, prévenez le bailleur **par écrit**.', 'Rats dès l’emménagement ou venant des caves {a} ? Écrivez au propriétaire ou au syndic, **photos à l’appui** : c’est en principe à eux d’agir.'], court: 'Rongeurs venus **du bâtiment** : prévenez le bailleur par écrit.' },
      { t: 'Vous êtes propriétaire', v: ['Propriétaire occupant, la dératisation de votre logement est **à votre charge**. Bailleur, vous devez remettre un logement sans infestation : notre **attestation** le prouve.', 'Pour un propriétaire {a}, agir vite limite les dégâts sur les câbles et l’isolant. Nous remettons une **attestation d’intervention**.'], court: 'Votre logement est **à votre charge** ; bailleur, remettez-le sans infestation.' },
      { t: 'Vous êtes en copropriété', v: ['Caves, local poubelles, parkings, cours : la dératisation des **parties communes** est à la charge de la **copropriété**, organisée par le **syndic**.', 'Si les rats viennent des parties communes {a}, c’est au **syndic** de commander la dératisation. Chaque copropriétaire traite ensuite chez lui si besoin.'], court: '**Caves, poubelles, parkings** : c’est au syndic d’agir.' },
      { t: 'Rats sur la voie publique', v: ['Si les rats viennent de la **rue, d’un parc ou des égouts**, signalez-le à votre **mairie** {a} : la lutte sur l’espace public relève de la commune.', 'Rats dans la rue ou un jardin public {a} ? Le **service d’hygiène de la mairie** est l’interlocuteur. Pour votre propriété, nous intervenons.'], court: 'Rats **dans la rue** : signalez-les au service d’hygiène de la **mairie**.' },
    ],
    lien: '/services/deratisation#qui-paie',
    note: 'Informations générales, qui ne remplacent pas un conseil juridique. Source : loi n° 89-462 du 6 juillet 1989, article 6 (Légifrance).',
  },
}
