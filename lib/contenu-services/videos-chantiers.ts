// Vidéos de chantier détaillées des pages services punaises de lit et dératisation (13/11/2026).
// Décrites d'après les images des fichiers (public/chantiers) et les récits du blog ; durée = durée du fichier ;
// date = première mise en ligne du fichier sur le site (historique git). Aucun chiffre ajouté hors récits du blog.
import type { VideoDetaillee } from '@/components/VideosDetaillees'

export const PUNAISES_VIDEOS_INTRO = 'Ces vidéos ont été tournées par nos techniciens sur de **vrais chantiers de punaises de lit** à Paris et en Île-de-France : infestations, cachettes, traitement et résultat. Pour chacune, voici le contexte, ce que nous avons fait et ce que l’on voit à l’écran.'

export const PUNAISES_VIDEOS: VideoDetaillee[] = [
  {
    src: '/chantiers/punaises-de-lit-paris-16-gros-plan-video.mp4',
    poster: '/chantiers/posters/punaises-de-lit-paris-16-gros-plan-video.jpg',
    titre: 'Paris 16e : énorme infestation de punaises de lit, du matelas au sommier',
    lieu: 'Paris 16e (75)',
    legende: 'Énorme infestation de punaises de lit à Paris 16e : punaises vivantes en gros plan, puis traitement du matelas et du sommier',
    texte: [
      'Dans cet appartement du **16e arrondissement**, l’infestation était énorme : des **punaises gorgées de sang tout autour du lit**, sur le matelas et jusque dans le sommier. La vidéo les montre **en gros plan**, vivantes, en train de marcher sur le tissu.',
      'Notre technicien traite ensuite le **matelas**, ses coutures et ses bords, puis le **sommier**, où les punaises s’étaient aussi installées. Comme pour chaque intervention contre les punaises de lit, le traitement comprend **deux passages**.',
    ],
    voit: [
      'Les **punaises gorgées de sang** tout autour du lit',
      'Les punaises qui marchent sur le matelas, **en gros plan**',
      'Le traitement du **matelas**, puis du **sommier**',
    ],
    lien: { href: '/punaises-de-lit/paris-16', label: 'Punaises de lit à Paris 16e' },
    duree: 51.6,
    date: '2026-11-12T04:10:59+01:00',
  },
  {
    src: '/chantiers/punaises-creteil-lattes-video.mp4',
    poster: '/chantiers/posters/punaises-creteil-lattes-video.jpg',
    titre: 'Créteil : les punaises cachées dans les fixations des lattes du sommier',
    lieu: 'Créteil (94)',
    legende: 'Punaises de lit et traces noires dans les fixations des lattes d’un sommier, à Créteil',
    texte: [
      'Une première société était passée sans rien trouver. Notre technicien a localisé les punaises principalement dans les **sommiers**, cachées dans les **trous des lattes** et autour des **embouts en plastique**, dans deux chambres.',
      'Les petits **points noirs** autour des fixations sont leurs déjections : le signe qu’il faut traiter chaque latte, chaque vis et chaque jonction du cadre. Le logement a été traité par un **traitement chimique professionnel, en deux passages**.',
    ],
    voit: [
      'Les **embouts en plastique** qui tiennent les lattes',
      'Les **points noirs** autour des vis et des fixations',
      'Les lattes inspectées une à une',
    ],
    lien: { href: '/blog/punaises-de-lit-creteil-sommier-lattes', label: 'Lire le récit du chantier de Créteil' },
    duree: 40.5,
    date: '2026-11-03T23:54:08+01:00',
  },
  {
    src: '/chantiers/punaises-paris-12-infestation-video.mp4',
    poster: '/chantiers/posters/punaises-paris-12-infestation-video.jpg',
    titre: 'Paris 12e : le résultat du premier passage, des punaises mortes partout au sol',
    lieu: 'Paris 12e (75)',
    legende: 'Punaises de lit mortes au sol à Paris 12e, résultat du premier passage avant le deuxième',
    texte: [
      'Chez cette cliente du **12e arrondissement**, l’infestation était très importante. Au premier passage, nous avons réalisé un **traitement chimique professionnel par pulvérisation puis nébulisation**.',
      'La vidéo a été tournée à notre arrivée pour le **deuxième passage** : le carrelage est couvert de **punaises mortes**. Ce second passage traite les jeunes punaises sorties des œufs entre-temps.',
    ],
    voit: [
      'Le **carrelage** couvert de punaises mortes',
      'Les punaises mortes au pied du canapé et des meubles',
      'Un amas de punaises mortes, **en gros plan**',
    ],
    lien: { href: '/blog/punaises-de-lit-paris-12-grosse-infestation', label: 'Lire le récit du chantier de Paris 12e' },
    duree: 26.1,
    date: '2026-11-03T23:54:08+01:00',
  },
  {
    src: '/chantiers/punaises-vincennes-punaises-mortes-hd.mp4',
    poster: '/chantiers/posters/punaises-vincennes-punaises-mortes-hd.jpg',
    titre: 'Vincennes : 10 jours après notre passage, le sol couvert de punaises mortes',
    lieu: 'Vincennes (94)',
    legende: 'Punaises de lit mortes dans les angles et contre les plinthes, 10 jours après notre passage, à Vincennes',
    texte: [
      'À **Vincennes**, nous avons traité un logement victime d’une grosse infestation. La vidéo a été filmée **10 jours après notre passage** : une très grande quantité de punaises mortes au sol, **dans les angles et contre les plinthes**, et les **traces noires** qu’elles avaient laissées sur les murs.',
      'Avant le deuxième passage, nous avons conseillé d’**aspirer** les sols et les plinthes en jetant le sac dans un sac fermé, de laver le linge à **60 °C** minimum et de ne déplacer aucun meuble vers une autre pièce.',
    ],
    voit: [
      'Les punaises mortes accumulées **dans l’angle, contre la plinthe**',
      'Les **traces noires** sur le bas des murs',
      'Le lit démonté et le sol de la chambre',
    ],
    lien: { href: '/blog/punaises-de-lit-vincennes-punaises-mortes', label: 'Lire le récit du chantier de Vincennes' },
    duree: 14.8,
    date: '2026-11-08T00:55:26+01:00',
  },
  {
    src: '/chantiers/punaises-goulotte-hotel-video.mp4',
    poster: '/chantiers/posters/punaises-goulotte-hotel-video.jpg',
    titre: 'Hôtel à Paris 1er : les punaises cachées dans une goulotte électrique',
    lieu: 'Paris 1er (75)',
    legende: 'Punaises de lit, mues et déjections cachées dans une goulotte électrique, dans un hôtel de Paris 1er',
    texte: [
      'Dans cet **hôtel**, plusieurs sociétés avaient échoué, et nos deux premiers passages n’avaient pas suffi. Au **troisième passage**, notre technicien a démonté les **plinthes**, les **armoires encastrées**, puis les **goulottes électriques** au niveau des lampes : c’est là que les punaises se cachaient.',
      'On voit les punaises, leurs **mues** et leurs **déjections** le long du câble. Une fois ces cachettes traitées, l’hôtel n’a plus eu de problème.',
    ],
    voit: [
      'La **goulotte ouverte**, le long du câble électrique',
      'Les punaises, leurs mues et leurs déjections',
      'Une cachette invisible tant que la goulotte reste fermée',
    ],
    lien: { href: '/blog/punaises-de-lit-introuvables-goulotte-hotel', label: 'Lire le récit du chantier de l’hôtel' },
    duree: 8.1,
    date: '2026-11-05T21:23:03+01:00',
  },
  {
    src: '/chantiers/punaises-pulverisation-video.mp4',
    poster: '/chantiers/posters/punaises-pulverisation-video.jpg',
    titre: 'Appartement : le traitement insecticide des punaises de lit, pièce par pièce',
    lieu: 'Île-de-France',
    legende: 'Technicien en combinaison et masque pulvérisant un insecticide professionnel contre les punaises de lit dans un appartement',
    texte: [
      'Quand l’infestation touche plusieurs pièces, le **traitement insecticide** reste une solution efficace. Notre technicien, en **combinaison et masque de protection**, pulvérise un insecticide professionnel dans tout le logement : le long des plinthes, sous les meubles, autour des lits. Une **nébulisation** suit la pulvérisation.',
      'Les occupants quittent le logement et laissent le produit agir **environ quatre heures**, puis aèrent en revenant. Un **deuxième passage** suit, comme pour tous nos traitements de punaises de lit.',
    ],
    voit: [
      'Le technicien en **combinaison et masque**',
      'La pulvérisation le long des plinthes et sous les meubles',
      'Le traitement des recoins, au ras du sol',
    ],
    lien: { href: '/blog/punaises-de-lit-traitement-insecticide-appartement', label: 'Lire le récit de ce traitement' },
    duree: 10.2,
    date: '2026-11-02T22:52:02+01:00',
  },
  {
    src: '/chantiers/punaises-ivry-lit-medicalise-video.mp4',
    poster: '/chantiers/posters/punaises-ivry-lit-medicalise-video.jpg',
    titre: 'Ivry-sur-Seine : une infestation hors norme autour d’un lit médicalisé',
    lieu: 'Ivry-sur-Seine (94)',
    legende: 'Infestation de punaises de lit hors norme autour d’un lit médicalisé, chez une personne âgée, à Ivry-sur-Seine',
    texte: [
      'Chez une **dame âgée**, les punaises avaient envahi le sol, les plinthes, le fauteuil et un coussin posé près de son **lit médicalisé**. Piquée chaque nuit, elle avait dû être hospitalisée.',
      'Pour une personne aussi fragile, nous avons traité **sans insecticide**, par cryogénie et vapeur sèche, dans tout le logement, avec un second passage. La vidéo montre le logement **avant** le traitement.',
    ],
    voit: [
      'Les traces le long des plinthes et du carrelage',
      'Le **coussin** couvert de punaises, près du lit médicalisé',
      'Des punaises sur le sol, près de la fenêtre',
    ],
    lien: { href: '/blog/punaises-de-lit-ivry-sur-seine-personne-agee', label: 'Lire le récit d’Ivry-sur-Seine' },
    duree: 15.3,
    date: '2026-11-05T20:57:48+01:00',
  },
  {
    src: '/chantiers/cryogenie-cadre-lit-lattes-video.mp4',
    poster: '/chantiers/posters/cryogenie-cadre-lit-lattes-video.jpg',
    titre: 'L’Haÿ-les-Roses : la cryogénie, notre traitement sans biocide',
    lieu: 'L’Haÿ-les-Roses (94)',
    legende: 'Cryogénie sur un sommier à lattes, sans produit chimique, à L’Haÿ-les-Roses',
    texte: [
      'Pour les clients qui ne veulent **aucun produit chimique**, nous traitons par **cryogénie** : de la neige carbonique à environ **−78 °C**, projetée ici latte par latte sur un sommier relevé, puis sur le cadre métallique.',
      'Tout le détail de cette méthode, ses limites et ses prix sur notre page [traitement écologique par cryogénie](/services/cryogenie-punaises-de-lit).',
    ],
    voit: [
      'Le sommier relevé contre le mur',
      'La lance de cryogénie passée **latte par latte**',
      'Le linge mis de côté, avant le lavage à 60 °C',
    ],
    lien: { href: '/blog/cryogenie-punaises-de-lit-sommier', label: 'Lire le récit du chantier de L’Haÿ-les-Roses' },
    duree: 14.4,
    date: '2026-11-04T01:25:39+01:00',
  },
]

export const DERAT_VIDEOS_INTRO = 'Ces vidéos ont été tournées par nos techniciens sur un **vrai chantier de dératisation** à Maisons-Alfort (94) : un logement envahi par les déchets et par les rats, confié par une mairie. Pour chacune, voici ce que nous avons fait et ce que l’on voit à l’écran.'

export const DERAT_VIDEOS: VideoDetaillee[] = [
  {
    src: '/chantiers/diogene-avant-apres-maisons-alfort.mp4',
    poster: '/chantiers/posters/diogene-avant-apres-maisons-alfort.jpg',
    titre: 'Maisons-Alfort : un logement Diogène dératisé, débarrassé et nettoyé',
    lieu: 'Maisons-Alfort (94)',
    legende: 'Avant, pendant et après : dératisation, débarras et nettoyage d’un logement touché par le syndrome de Diogène à Maisons-Alfort',
    texte: [
      'Une **mairie** nous a confié un logement de **Maisons-Alfort** touché par le **syndrome de Diogène**, envahi par les déchets et par les rats. Avant tout nettoyage, il fallait **dératiser** : vider un logement infesté sans traiter d’abord disperse les rats dans l’immeuble et expose les équipes.',
      'La vidéo suit tout le chantier : **avant** (des déchets jusqu’à mi-hauteur, le garage envahi), **pendant** (les sacs remplis pièce par pièce, chaque étagère raclée) et **après** (la maison débarrassée, les sols nettoyés).',
    ],
    voit: [
      'Le logement et le garage **envahis de déchets**',
      'Les sacs remplis **pièce par pièce**, les étagères raclées',
      'La maison **débarrassée** et les sols nettoyés',
    ],
    lien: { href: '/blog/deratisation-logement-syndrome-diogene', label: 'Lire le récit complet du chantier' },
    duree: 92.5,
    date: '2026-11-10T22:37:31+01:00',
  },
  {
    src: '/chantiers/rats-diogene-video-1.mp4',
    poster: '/chantiers/posters/rats-diogene-video-1.jpg',
    titre: 'Le ramassage des rats, en combinaison et masque à cartouches',
    lieu: 'Maisons-Alfort (94)',
    legende: 'Techniciens en combinaison et masque à cartouches ramassant un rat dans un logement encombré, à Maisons-Alfort',
    texte: [
      'Nous avons posé un important dispositif de **postes d’appâtage sécurisés**. Deux jours plus tard, les rats étaient très affaiblis : nos techniciens, en **combinaison intégrale** et **masque à cartouches**, les ont ramassés un par un.',
      'Chaque rat est placé dans un **bac fermé**, pour éviter tout contact et toute contamination. Les rats peuvent transmettre la leptospirose par leur urine : la protection des équipes n’est pas un détail.',
    ],
    voit: [
      'Les techniciens en **combinaison et masque à cartouches**',
      'Un rat ramassé avec des **gants épais**',
      'Le logement encombré où circulaient les rats',
    ],
    lien: { href: '/blog/deratisation-logement-syndrome-diogene', label: 'Lire le récit du chantier' },
    duree: 11.6,
    date: '2026-11-02T00:22:12+01:00',
  },
  {
    src: '/chantiers/rats-diogene-video-2.mp4',
    poster: '/chantiers/posters/rats-diogene-video-2.jpg',
    titre: 'Deux jours après la pose des postes : une trentaine de rats ramassés',
    lieu: 'Maisons-Alfort (94)',
    legende: 'Rats ramassés à la pince et placés dans un bac fermé, deux jours après la pose des postes, à Maisons-Alfort',
    texte: [
      'Deux jours après la pose des postes, nous avons ramassé **une trentaine de rats** dans ce logement. Ils sont saisis à la **pince**, avec des gants, puis déposés dans un **bac transparent** qui se ferme.',
      'Le **suivi des postes** a continué jusqu’à la disparition des traces ; le débarras, le nettoyage et la désinfection ont pu commencer ensuite.',
    ],
    voit: [
      'Les rats ramassés **à la pince**',
      'Le **bac transparent** qui les reçoit',
      'Les deux techniciens équipés, dans la pièce encombrée',
    ],
    lien: { href: '/blog/deratisation-logement-syndrome-diogene', label: 'Lire le récit du chantier' },
    duree: 18.5,
    date: '2026-11-02T00:22:12+01:00',
  },
  {
    src: '/chantiers/rats-trous-cloison-video.mp4',
    poster: '/chantiers/posters/rats-trous-cloison-video.jpg',
    titre: 'Retour sur le chantier : les trous laissés par les rats dans les cloisons',
    lieu: 'Maisons-Alfort (94)',
    legende: 'Trous laissés par les rats au pied des cloisons, avant rebouchage, à Maisons-Alfort',
    texte: [
      'Une fois le logement vidé, on découvre les **passages des rats** : des **trous au pied des cloisons**, du plâtre arraché, des angles rongés. C’est par là qu’ils circulaient d’une pièce à l’autre.',
      'Ces trous doivent être **rebouchés** avec des matériaux que les rats ne peuvent pas ronger : **grillage métallique fin**, **laine d’acier**, **mortier**. Sans colmatage, d’autres rongeurs reviennent, quel que soit le traitement.',
    ],
    voit: [
      'Le **trou au pied du mur**, au ras du carrelage',
      'Le plâtre arraché dans l’angle d’une cloison',
      'Les murs abîmés, **avant rebouchage**',
    ],
    lien: { href: '/blog/deratisation-logement-syndrome-diogene', label: 'Lire le récit du chantier' },
    duree: 35.2,
    date: '2026-11-02T23:36:16+01:00',
  },
]
