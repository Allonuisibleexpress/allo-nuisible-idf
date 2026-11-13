// Page « Cryogénie des punaises de lit » (/services/cryogenie-punaises-de-lit), contenu long du 13/11/2026.
// Demande de l'utilisateur : titre « traitement punaises de lit écologique, sans biocide, cryogénie », un maximum de termes,
// beaucoup de contenu, les vidéos de chantier détaillées.
// Règles : « écologique » toujours défini (= sans biocide, jamais « sans impact ») ; pas de chiffre inventé ; pas de tiret long ;
// jamais « naturel », « non toxique », « sans danger ».
// Sources vérifiées le 13/11/2026 : ANSES « Les punaises de lit en 13 questions » ; stop-punaises.gouv.fr (page Information).
// Vidéos : décrites d'après les images des fichiers (public/chantiers) et les récits du blog ; durée = durée du fichier,
// date = première mise en ligne du fichier sur le site (historique git).
import type { VideoDetaillee } from '@/components/VideosDetaillees'

type Bloc = { h: string; p: string[] }

// ── Partie 1 : avant les vidéos ──────────────────────────────────────────────
export const CRYO_PARTIE_1: Bloc[] = [
  { h: 'Cryogénie des punaises de lit : le traitement écologique par le froid à −78 °C', p: [
    'La **cryogénie des punaises de lit** est un **traitement par le froid**. Notre technicien projette de la **neige carbonique**, à environ **−78 °C**, sur toutes les cachettes des punaises : coutures du matelas, sommier, lattes, cadre de lit, meubles, plinthes. Au contact, ce froid extrême provoque un **choc thermique** qui tue les **punaises adultes**, les **larves** et les **œufs**.',
    'C’est un **traitement anti punaises de lit écologique**, c’est-à-dire **sans biocide** : aucun insecticide ni produit chimique n’est pulvérisé, rien ne reste sur vos meubles, votre literie ou vos sols. Chez Allo Nuisible IDF, c’est notre méthode de référence pour **éliminer les punaises de lit sans produit**, notre **traitement écologique** de référence, à **Paris** et dans toute l’**Île-de-France**, **dès 290 € TTC, deux passages inclus**, avec une **garantie d’un an**.',
  ] },
  { h: 'Traitement punaises de lit écologique : ce que veut dire « écologique » ici', p: [
    'Sur cette page, **écologique veut dire sans biocide** : ni insecticide, ni répulsif, ni aucun autre produit biocide n’est utilisé chez vous. La cryogénie remplit cette condition, puisqu’elle n’agit que par le **froid**.',
    'Nous n’employons pas ce mot pour dire que la méthode n’a aucun impact : elle utilise du **dioxyde de carbone** en bouteille et du matériel. Nous l’employons pour une seule raison, précise et vérifiable : **aucun biocide** n’est déposé dans votre logement. Notre traitement écologique des punaises de lit associe la **cryogénie**, la **vapeur sèche** et notre **chambre froide à −20 °C** : tout est expliqué ci-dessous. Pour les autres nuisibles, voir [tous nos traitements sans produit chimique](/services/traitements-sans-produit-chimique).',
  ] },
  { h: 'Traitement écologique des punaises de lit, sans produit chimique : cryogénie, vapeur sèche, chambre froide', p: [
    'Notre **traitement des punaises de lit sans produit chimique** repose sur la **température**, et non sur un insecticide. Chaque outil a son rôle :',
    '- **La cryogénie**, le cœur du traitement : la neige carbonique à environ −78 °C atteint les fentes, le sommier, les lattes, les meubles, les plinthes et le contour des prises.',
    '- **La vapeur sèche** : une vapeur à très haute température pour les grandes surfaces textiles, comme le matelas, le canapé, les fauteuils, les rideaux ou une tête de lit capitonnée.',
    '- **Notre chambre froide à −20 °C**, pendant au moins 72 heures : pour les objets et textiles qui ne se lavent pas, comme les chaussures, les sacs, les livres ou les peluches.',
    '- **Le lavage à plus de 60 °C** : pour les draps, le linge de lit et les vêtements.',
    'C’est la solution recherchée par les familles avec un **bébé**, une **femme enceinte**, des **personnes âgées** ou des **animaux**, par les **crèches**, les **écoles**, les **foyers**, les **hôtels** et les **EHPAD**, et par toutes les personnes qui ne veulent simplement **aucun produit** chez elles.',
  ] },
  { h: 'Neige carbonique : d’où vient le froid à −78 °C ?', p: [
    'La **neige carbonique** est du **dioxyde de carbone (CO2) à l’état solide**. Notre appareil part de CO2 liquide, stocké sous pression dans une bouteille. À la sortie de la lance, ce liquide se détend brutalement et se transforme en fines particules de neige très froide. À la pression de l’air, la neige carbonique se maintient autour de **−78 °C**.',
    'Elle a une particularité : elle se **sublime**, c’est-à-dire qu’elle passe directement de l’état solide à l’état de gaz, **sans fondre**. Résultat : **rien ne mouille**, ni le matelas, ni le sommier, ni le parquet. Le gaz se dissipe à l’aération et il ne reste **aucun résidu** sur les surfaces. Le nuage blanc que vous voyez sur nos vidéos, c’est cette neige qui retombe puis disparaît.',
  ] },
  { h: 'Pourquoi le froid extrême tue les punaises de lit et leurs œufs, sans insecticide', p: [
    'Une punaise de lit ne craint pas un froid modéré. Ouvrir les fenêtres en hiver ou laisser une chambre sans chauffage ne la tue pas : la température ne descend ni assez bas, ni assez longtemps. Ce qui la tue, c’est un froid **intense et brutal**. Au contact de la neige carbonique, l’eau contenue dans l’insecte gèle en un instant et ses tissus sont détruits.',
    'Les **œufs** sont le vrai défi de tout traitement : minuscules, collés dans les fentes, les coutures et les jonctions, ils sont difficiles à atteindre. Le froid les tue **comme les adultes**, à une condition : que le jet les **touche**. C’est pour cela que notre technicien passe lentement, au plus près des surfaces, fente par fente, et qu’un **second passage** est toujours prévu.',
    'Autre atout : le froid n’est pas une substance. Les punaises ne peuvent pas y devenir **résistantes**. Or l’**ANSES** explique la hausse des infestations par l’essor des voyages et par une **résistance croissante des punaises aux insecticides**.',
  ] },
  { h: 'Cryogénie ou cryogénisation : la même méthode écologique', p: [
    '**Cryogénie**, **cryogénisation**, **traitement cryogénique**, **traitement à la neige carbonique** ou **traitement thermique par le froid** : ces mots désignent tous la même méthode contre les punaises de lit. Dans le métier, on entend surtout « cryogénisation » ; nous disons plus volontiers « cryogénie ».',
    'Attention en revanche à la **congélation** : mettre des vêtements au congélateur est une autre technique, utile pour les petits objets mais impossible pour un lit ou une pièce (voir plus bas). Ce qui fait l’efficacité d’une cryogénie, ce n’est pas le mot, c’est le **protocole** : inspection, traitement minutieux, deux passages et garantie.',
  ] },
]

// Tableau affiché juste après la section « sans produit chimique »
export const CRYO_OUTILS = {
  titre: 'Traitement écologique : que traiter avec quoi ? Cryogénie, vapeur sèche, chambre froide',
  intro: 'Les quatre outils de notre traitement écologique des punaises de lit, sans biocide.',
  head: ['Méthode', 'Température', 'Idéale pour'],
  rows: [
    ['Cryogénie', 'Environ −78 °C', 'Sommier, lattes, fentes, cadres de lit, plinthes, meubles, contour des prises et recoins'],
    ['Vapeur sèche', 'Très haute température', 'Matelas, canapés, fauteuils, rideaux, têtes de lit capitonnées'],
    ['Chambre froide', '−20 °C, au moins 72 heures', 'Objets et textiles qui ne se lavent pas : chaussures, sacs, livres, peluches'],
    ['Lavage', 'Plus de 60 °C', 'Draps, linge de lit, vêtements'],
  ],
}

// ── Vidéos de chantier détaillées ────────────────────────────────────────────
export const CRYO_VIDEOS_INTRO = 'Ces vidéos ont été tournées par nos techniciens sur de **vrais chantiers de traitement écologique par cryogénie**, sans biocide, en Île-de-France. Pour chacune, voici le contexte, ce que nous avons fait et ce que l’on voit à l’écran. La bannière « Allo Nuisible IDF » est incrustée dans toutes nos vidéos.'

export const CRYO_VIDEOS: VideoDetaillee[] = [
  {
    src: '/chantiers/cryogenie-punaises-etablissement-enfants-champigny-sur-marne.mp4',
    poster: '/chantiers/posters/cryogenie-punaises-etablissement-enfants-champigny-sur-marne.jpg',
    titre: 'Champigny-sur-Marne : traitement écologique des lits à barreaux d’un établissement pour tout-petits',
    lieu: 'Champigny-sur-Marne (94)',
    legende: 'Cryogénie des punaises de lit sur des lits à barreaux, dans un établissement accueillant des enfants en bas âge, à Champigny-sur-Marne',
    texte: [
      'Un **établissement scolaire de Champigny-sur-Marne**, qui accueille des **enfants en bas âge**, avait des **punaises de lit** dans ses couchages. Des tout-petits y dorment chaque jour : la direction ne voulait **aucun produit chimique**. Nous avons choisi la **cryogénie**.',
      'Les **lits à barreaux en bois** sont posés debout, sur une protection, pour que le technicien atteigne chaque face. La lance projette la neige carbonique **barreau par barreau**, puis sur les montants, les angles et les assemblages, là où les punaises se glissent. Le nuage blanc au sol, c’est le CO2 qui retombe et se transforme en gaz : il ne mouille ni le bois ni le parquet.',
    ],
    voit: [
      'Le technicien en tenue de protection, capuche et gants, lance de cryogénie en main',
      'Les **lits à barreaux** traités un par un, sur toutes leurs faces',
      'Le nuage de **neige carbonique** qui retombe au sol puis se dissipe',
    ],
    lien: { href: '/punaises-de-lit/champigny-sur-marne', label: 'Punaises de lit à Champigny-sur-Marne' },
    duree: 22.4,
    date: '2026-11-12T03:18:47+01:00',
  },
  {
    src: '/chantiers/cryogenie-cadre-lit-lattes-video.mp4',
    poster: '/chantiers/posters/cryogenie-cadre-lit-lattes-video.jpg',
    titre: 'L’Haÿ-les-Roses : le sommier à lattes traité par cryogénie, sans biocide, latte par latte',
    lieu: 'L’Haÿ-les-Roses (94)',
    legende: 'Cryogénie sur un sommier à lattes et son cadre métallique, sans produit chimique, à L’Haÿ-les-Roses',
    texte: [
      'Chez ce particulier de **L’Haÿ-les-Roses**, les punaises de lit s’étaient installées dans le **sommier à lattes** : des dizaines de fixations, de vis et de jonctions, juste sous la personne qu’elles piquent. Le sommier est **relevé contre le mur** pour dégager les deux faces.',
      'Notre technicien passe la lance **lentement, latte par latte**, en insistant sur les extrémités et les fixations, puis sur le **cadre métallique** et ses angles. Le linge et les vêtements sont **mis de côté dans des cartons**, avant d’être lavés à 60 °C. Exceptionnellement, le client a regardé le traitement : il a pu voir où se cachaient les punaises.',
    ],
    voit: [
      'Le technicien, gants et lance en main, au pied du sommier relevé',
      'Les **lattes** traitées une à une, puis le **cadre de lit métallique**',
      'Le linge mis de côté dans des cartons, pour être **lavé à 60 °C**',
    ],
    lien: { href: '/blog/cryogenie-punaises-de-lit-sommier', label: 'Lire le récit complet du chantier' },
    duree: 14.4,
    date: '2026-11-04T01:25:39+01:00',
  },
  {
    src: '/chantiers/cryogenie-punaises-foyer-video-1.mp4',
    poster: '/chantiers/posters/cryogenie-punaises-foyer-video-1.jpg',
    titre: 'Foyer pour enfants handicapés, chambre 213 : un traitement écologique, sans produit chimique',
    lieu: 'Foyer pour enfants, Île-de-France',
    legende: 'Cryogénie des punaises de lit dans une chambre d’un foyer pour enfants handicapés',
    texte: [
      'Un **foyer qui accueille des enfants handicapés** nous a appelés en urgence. Sa demande était claire : **aucun produit chimique, aucun biocide**. Nous avons traité par cryogénie, **chambre par chambre**, avec l’équipe de l’établissement.',
      'Dans la **chambre 213**, le technicien porte une **combinaison intégrale et des surchaussures**. Le **sommier à lattes** est relevé contre le placard : le jet suit chaque latte, puis le **cadre du lit** et ses jonctions, au plus près des surfaces.',
    ],
    voit: [
      'Le technicien en **combinaison blanche** et surchaussures',
      'Le sommier relevé, la lance au plus près des lattes et du cadre',
      'Le jet de neige carbonique dirigé dans les fentes',
    ],
    lien: { href: '/blog/cryogenie-punaises-de-lit-foyer-enfants', label: 'Lire le récit du foyer' },
    duree: 12.1,
    date: '2026-11-02T22:52:02+01:00',
  },
  {
    src: '/chantiers/cryogenie-punaises-foyer-video-2.mp4',
    poster: '/chantiers/posters/cryogenie-punaises-foyer-video-2.jpg',
    titre: 'Chambre 211 : le plan de l’étage et les plinthes, pour ne rien oublier',
    lieu: 'Foyer pour enfants, Île-de-France',
    legende: 'Cryogénie d’un cadre de lit et des plinthes, avec le plan de l’étage, dans un foyer pour enfants',
    texte: [
      'Dans un établissement, la méthode compte autant que le froid. Nous travaillons avec le **plan de l’étage** : les chambres touchées et leurs voisines y sont **repérées en couleur et annotées** au fil de l’inspection, aile par aile. C’est ce plan qui fixe l’ordre de passage.',
      'Dans la **chambre 211**, après le **cadre de lit à lattes**, traité au ras du sol, la caméra descend jusqu’à la **jonction entre le mur et le sol** : on y voit des traces sombres et des débris. C’est le genre d’indice qui montre qu’il faut traiter les **plinthes**, et pas seulement le lit.',
    ],
    voit: [
      'Le **cadre de lit en bois** traité au ras du sol',
      'Le **plan de l’étage**, avec les chambres repérées et annotées',
      'Des traces le long de la **plinthe**, traitées à leur tour',
    ],
    lien: { href: '/blog/cryogenie-punaises-de-lit-foyer-enfants', label: 'Lire le récit du foyer' },
    duree: 12.7,
    date: '2026-11-02T22:52:02+01:00',
  },
  {
    src: '/chantiers/cryogenie-punaises-foyer-video-3.mp4',
    poster: '/chantiers/posters/cryogenie-punaises-foyer-video-3.jpg',
    titre: 'Chambre 321 : les points noirs sur la couture du matelas',
    lieu: 'Foyer pour enfants, Île-de-France',
    legende: 'Gros plan sur la couture d’un matelas infesté de punaises de lit, avant la cryogénie',
    texte: [
      'Les punaises de lit laissent de **petits points noirs**, leurs déjections, le long des **coutures et des passepoils** du matelas. Dans la **chambre 321**, la caméra s’arrête sur la couture d’un matelas, entre le tissu et le cadre en bois du lit : on y voit ces points noirs.',
      'C’est exactement là que la cryogénie doit insister : la **couture sur toute sa longueur**, l’**étiquette**, les **coins** du matelas, puis le **cadre du lit** et le mur derrière la tête de lit.',
    ],
    voit: [
      'La **couture du matelas** en gros plan, avec des points noirs',
      'L’étiquette et le passepoil, cachettes classiques des punaises',
      'Le cadre du lit et le mur, contrôlés à leur tour',
    ],
    lien: { href: '/blog/cycle-de-vie-punaise-de-lit', label: 'Reconnaître les punaises de lit à chaque stade' },
    duree: 9.8,
    date: '2026-11-02T22:52:02+01:00',
  },
  {
    src: '/chantiers/punaises-ivry-lit-medicalise-video.mp4',
    poster: '/chantiers/posters/punaises-ivry-lit-medicalise-video.jpg',
    titre: 'Ivry-sur-Seine : énorme infestation chez une dame âgée, traitement écologique sans insecticide',
    lieu: 'Ivry-sur-Seine (94)',
    legende: 'Énorme infestation de punaises de lit autour d’un lit médicalisé à Ivry-sur-Seine, avant le traitement par cryogénie et vapeur sèche',
    texte: [
      'Appelés en urgence chez une **dame âgée** à **Ivry-sur-Seine**, nous avons trouvé des punaises **sur le sol, le long des plinthes, autour du fauteuil**, et un coussin posé près de son **lit médicalisé** qui en était couvert. Piquée nuit après nuit, elle avait dû être hospitalisée.',
      'Pour une personne aussi fragile, il fallait éviter tout produit chimique : nous avons traité **sans insecticide**, par **cryogénie et vapeur sèche**, dans tout le logement, avec un **second passage** 10 à 15 jours plus tard. La vidéo montre l’état du logement **avant le traitement**.',
    ],
    voit: [
      'Des traces sombres le long des plinthes et du carrelage',
      'Le **coussin** près du lit médicalisé, couvert de punaises',
      'Des punaises sur le sol, près de la fenêtre',
    ],
    lien: { href: '/blog/punaises-de-lit-ivry-sur-seine-personne-agee', label: 'Lire le récit d’Ivry-sur-Seine' },
    duree: 15.3,
    date: '2026-11-05T20:57:48+01:00',
  },
]

// ── Partie 2 : après les vidéos ──────────────────────────────────────────────
export const CRYO_PARTIE_2: Bloc[] = [
  { h: 'Reconnaître les punaises de lit avant un traitement écologique', p: [
    'Avant toute cryogénie, il faut être sûr qu’il s’agit bien de **punaises de lit**. Les signes typiques :',
    '- **Des piqûres groupées ou alignées** au réveil, sur les bras, les jambes ou le cou.',
    '- **De petits points noirs** (déjections) sur le matelas, le sommier ou les draps, comme sur notre vidéo de la chambre 321.',
    '- **Des mues brunes**, l’enveloppe que la larve laisse à chaque stade.',
    '- **Des insectes plats et bruns** de 5 à 7 mm à l’âge adulte, cachés dans les coutures, les fentes et les jonctions.',
    'Notre infographie du [cycle de vie de la punaise de lit](/blog/cycle-de-vie-punaise-de-lit) montre les 7 stades, de l’œuf d’environ 1 mm à l’adulte. Un doute ? Notre page [identifier un nuisible](/identifier-nuisible) vous aide, ou envoyez-nous une photo.',
  ] },
  { h: 'Comment se déroule le traitement écologique par cryogénie chez vous', p: [
    '### 1. Le diagnostic et le devis gratuit',
    'Vous nous décrivez la situation par téléphone ou sur WhatsApp, photos à l’appui : piqûres au réveil, points noirs sur le matelas, insectes. Nous confirmons qu’il s’agit bien de punaises de lit et vous donnons le **prix avant de nous déplacer**.',
    '### 2. L’inspection, pièce par pièce',
    'Lampe et carte rigide en main, le technicien cherche les foyers : coutures et étiquettes du matelas, sommier, tête de lit, tables de chevet, plinthes, prises, cadres. Il repère les pièces touchées et leurs voisines, pour ne laisser **aucune zone de repli**.',
    '### 3. La protection de ce qui craint le froid',
    'Les appareils électroniques, les écrans et le verre sont **écartés ou protégés** : un choc de froid et la condensation peuvent les abîmer. Les occupants et les animaux quittent la pièce.',
    '### 4. La cryogénie, du lit vers le reste de la pièce',
    'Le technicien commence par le **lit**, là où les punaises sont les plus nombreuses : matelas (coutures, passepoils, étiquette, poignées), sommier, lattes, cadre et tête de lit. Il élargit ensuite aux **meubles proches**, aux **plinthes**, autour des **prises** et aux encadrements. Le geste est lent : un passage trop rapide ne refroidit pas assez la surface.',
    '### 5. Aspiration et aération',
    'Les insectes morts sont **aspirés**, et le sac de l’aspirateur est aussitôt fermé dans un sac plastique, comme le recommande le site officiel stop-punaises.gouv.fr. Les fenêtres sont ouvertes : le CO2 se dissipe et vous pouvez réutiliser la pièce une fois aérée.',
    '### 6. Le second passage, 10 à 15 jours plus tard',
    'La cryogénie n’a pas d’effet qui dure : un œuf caché que le jet n’a pas touché peut éclore. Le **second passage**, compris dans le prix, élimine ces jeunes punaises avant qu’elles ne pondent à leur tour.',
    '### 7. La garantie 1 an',
    'Si les punaises de lit reviennent dans l’année, **nous revenons**.',
  ] },
  { h: 'Matelas, sommier, canapé : ce que le traitement écologique peut traiter', p: [
    '### Le matelas',
    'La cryogénie traite le matelas **sans le mouiller** : coutures, passepoils, étiquette, poignées, coins, puis la face cachée une fois le matelas relevé. Une **housse anti-punaises** posée après le traitement enferme les éventuelles survivantes.',
    '### Le sommier et le cadre de lit',
    'C’est souvent la **première cachette** : lattes, fixations, vis, assemblages, tête de lit. Sur nos vidéos de L’Haÿ-les-Roses et du foyer pour enfants, on voit le sommier relevé et traité latte par latte.',
    '### Le canapé, les fauteuils et les rideaux',
    'La cryogénie traite les coutures, le dessous et la structure. Pour les grandes surfaces de tissu épais, nous la complétons souvent par la **vapeur sèche**.',
    '### Les meubles, les plinthes et le parquet',
    'Tables de chevet, commodes, cadres, plinthes, lames de parquet, contour des prises et des interrupteurs : là où une carte bancaire peut se glisser, une punaise peut se cacher.',
    '### Les vêtements, peluches et petits objets',
    'Ils ne se traitent pas à la lance. Le site officiel stop-punaises.gouv.fr recommande de **laver à plus de 60 °C**, de passer **au moins 30 minutes au sèche-linge** au cycle le plus chaud, ou de **congeler 72 heures**. Ce qui ne supporte ni l’eau ni la chaleur peut passer dans notre **chambre froide à −20 °C**. Voir [traiter ses vêtements contre les punaises de lit](/blog/traiter-vetements-punaises-de-lit).',
    '### Ce que l’on ne traite pas au froid',
    'Les **appareils électroniques** (ordinateurs, téléphones, téléviseurs), les **écrans**, le **verre** et certaines surfaces fragiles craignent le choc thermique et la condensation : ils sont écartés et inspectés à part.',
  ] },
  { h: 'Faut-il jeter son matelas avant un traitement écologique ?', p: [
    '**Non, dans la grande majorité des cas.** Un matelas infesté **se traite** : la cryogénie atteint les coutures et les passepoils, la vapeur sèche complète sur le tissu. Le jeter coûte cher et peut **répandre les punaises** dans l’escalier, l’ascenseur ou les parties communes pendant le transport.',
    'Si vous devez vraiment vous en séparer (matelas très abîmé, infestation massive), emballez-le entièrement dans un film plastique avant de le sortir, et rendez-le inutilisable pour que personne ne le récupère.',
  ] },
  { h: 'Préparer son logement avant le traitement écologique : la liste complète', p: [
    'Une bonne préparation fait gagner du temps et rend le traitement plus efficace. L’**ANSES** rappelle qu’avant tout traitement, il faut **nettoyer, aspirer et ranger** la pièce infestée. Voici ce que nous vous demandons :',
    '- **Le linge de lit et les vêtements** : en sacs fermés, puis lavés à plus de 60 °C. Gardez-les fermés jusqu’au second passage.',
    '- **Le sol autour des lits** : dégagé, sans cartons, sacs ni piles de vêtements.',
    '- **Les tables de chevet et les tiroirs** proches du lit : vidés, le contenu en sacs fermés.',
    '- **Les lits et le canapé** : décollés du mur si possible, pour accéder aux plinthes.',
    '- **L’électronique et les objets fragiles** : rangés à l’écart.',
    '- **Rien ne quitte une pièce infestée** pour une pièce saine : vous déplaceriez les punaises.',
    '- **Pas de bombe insecticide** avant notre passage : elle disperse les punaises. Le site stop-punaises.gouv.fr rappelle que les insecticides courants sont inefficaces contre les punaises de lit.',
    '- **Les animaux** (chiens, chats, oiseaux, rongeurs) : hors de la pièce pendant le traitement.',
    '- **Aspirez** sols, plinthes et matelas la veille, et jetez le sac dans un sac plastique fermé.',
  ] },
  { h: 'Pendant et après la cryogénie : quand pouvez-vous revenir ?', p: [
    'Pendant le traitement, les occupants et les animaux **quittent la pièce**, et le plus souvent le logement : le CO2 ne doit pas s’accumuler dans une pièce fermée et occupée. Une fois la pièce **aérée**, vous pouvez revenir : il n’y a **aucun délai d’attente lié à un produit**, et vous dormez chez vous le soir même.',
    '- **Gardez le linge propre en sacs fermés** jusqu’au second passage.',
    '- **Aspirez chaque jour** autour du lit et jetez le sac dehors.',
    '- **Dormez dans votre lit**, sans changer de chambre : les punaises vous suivraient.',
    '- **Signalez-nous toute nouvelle piqûre** avant le second passage.',
    'Quelques piqûres peuvent encore apparaître entre les deux passages : ce sont souvent de jeunes punaises sorties d’œufs que le froid n’avait pas atteints. C’est précisément le rôle du **second passage**.',
  ] },
  { h: 'La cryogénie est-elle dangereuse ? Nos précautions', p: [
    '### Le CO2 dans une pièce fermée',
    'Le **dioxyde de carbone** est le principal point de vigilance : en forte concentration dans une pièce fermée, il devient dangereux à respirer. C’est pour cela que la pièce est **libérée** pendant le traitement, que le technicien **surveille l’aération** et que les fenêtres sont ouvertes à la fin.',
    '### Le froid au contact de la peau',
    'À −78 °C, la neige carbonique peut provoquer une **brûlure par le froid**. Le technicien travaille **ganté**, en tenue adaptée, et personne d’autre ne manipule la lance ni ne touche la neige.',
    '### Bébé, enfant, femme enceinte, personne âgée',
    'Aucun produit n’est déposé : c’est pour cela que les familles avec un **nourrisson**, les **femmes enceintes**, les **personnes âgées** ou **asthmatiques** nous demandent la cryogénie. Ils quittent simplement la pièce pendant le traitement et reviennent après l’aération. Nous l’avons choisie pour un établissement de tout-petits à Champigny-sur-Marne et pour une dame âgée à Ivry-sur-Seine.',
    '### Chiens, chats et autres animaux',
    'Les animaux quittent la pièce pendant le traitement et reviennent après l’aération. Aucun produit ne reste sur le sol ni sur leur couchage. Si votre animal a des puces, voir notre page [traitement des puces](/services/puces).',
  ] },
  { h: 'Un traitement écologique est-il efficace ? Les limites de la cryogénie, sans détour', p: [
    '**Oui**, la cryogénie tue les punaises de lit et leurs œufs **au contact**. Mais comme toute méthode, elle a des limites, et nous préférons vous les dire avant :',
    '- **Pas d’effet qui dure** : une fois le froid dissipé, rien ne protège la pièce. Une punaise cachée hors d’atteinte survit, d’où le second passage.',
    '- **Le jet doit tout atteindre** : une pièce très encombrée ralentit le travail et laisse des cachettes. La préparation est indispensable.',
    '- **Une infestation très importante** (nombreuses pièces, plusieurs logements) demande parfois de combiner la cryogénie avec la vapeur sèche, voire un insecticide ciblé : c’est notre **protocole mixte**.',
    '- **Le temps** : une cryogénie demande plus de minutie qu’une pulvérisation. C’est ce soin qui fait son efficacité.',
    'Notre engagement : après l’inspection, nous vous disons **honnêtement** si le traitement écologique seul suffit dans votre cas.',
  ] },
  { h: 'Cryogénie ou vapeur sèche : quel traitement écologique choisir contre les punaises de lit ?', p: [
    '### La cryogénie : la précision, sans humidité',
    'Idéale pour les fentes, les cadres de lit, les lattes, le mobilier, le contour des prises, et partout où l’on ne veut pas d’humidité.',
    '### La vapeur sèche : la chaleur pour les grands textiles',
    'Plus rapide sur un canapé en tissu, un matelas épais, des rideaux ou une tête de lit capitonnée. Elle tue au contact par la chaleur. Voir [vapeur sèche contre les punaises de lit](/blog/vapeur-seche-punaises-de-lit).',
    '### Les deux ensemble',
    'Sur beaucoup de chantiers, nous **combinons les deux**, et le traitement reste **écologique** : le froid pour le mobilier et les fentes, la vapeur pour les grandes surfaces textiles. C’est ce que nous avons fait à Ivry-sur-Seine.',
  ] },
  { h: 'Quel est le traitement le plus efficace contre les punaises de lit ?', p: [
    'Il n’existe pas de solution miracle. Selon une enquête Ipsos pour l’**ANSES**, **11 % des foyers français** ont été infestés par des punaises de lit entre 2017 et 2022. L’ANSES recommande une **lutte intégrée** : des actions mécaniques (ranger, nettoyer, aspirer), des actions par la chaleur (lavage à 60 °C, appareils à vapeur) ou par le froid, et de **privilégier les méthodes non chimiques**.',
    'Le traitement le plus efficace est donc celui qui combine une **inspection minutieuse**, la bonne méthode pour chaque support et **deux passages**. La cryogénie en est souvent la pièce maîtresse quand vous ne voulez aucun produit. Pour une infestation installée dans tout un logement, voir [toutes nos méthodes contre les punaises de lit](/services/punaises-de-lit) et notre article sur [le traitement insecticide](/blog/insecticide-punaises-de-lit).',
  ] },
  { h: 'Bombe de froid, congélateur, hiver : tuer les punaises de lit soi-même par le froid ?', p: [
    '### Les aérosols « froid » vendus en ligne',
    'Ils refroidissent une petite surface, le temps de la pulvérisation : ils peuvent tuer une punaise touchée directement, mais ils ne traitent ni un sommier, ni un matelas, ni une pièce. Ils ne remplacent pas une cryogénie professionnelle.',
    '### Le congélateur, pour les petits objets',
    'Vêtements, chaussures, peluches, livres : en sacs fermés, **72 heures au congélateur** (recommandation de stop-punaises.gouv.fr). L’ANSES précise que la congélation convient aux **vêtements et petits objets**, pas à une pièce entière.',
    '### Ouvrir les fenêtres en hiver',
    'Une chambre sans chauffage ne descend ni assez bas, ni assez longtemps : cela ne tue pas les punaises de lit. Voir notre article [le froid tue-t-il les punaises de lit ?](/blog/cryogenie-punaises-de-lit).',
  ] },
  { h: 'Qu’est-ce qui fait mourir les punaises de lit ?', p: [
    '- **Le froid extrême**, au contact : la cryogénie à −78 °C.',
    '- **La chaleur**, au contact : la vapeur sèche, le lavage à plus de 60 °C, le sèche-linge au moins 30 minutes au cycle le plus chaud.',
    '- **La congélation**, pour les petits objets : 72 heures au congélateur.',
    '- **L’aspiration**, qui retire les punaises visibles, à condition de jeter aussitôt le sac dans un sac fermé.',
    '- **Les insecticides professionnels**, appliqués par un technicien certifié Certibiocide, quand l’infestation l’exige.',
    'La [terre de diatomée](/blog/terre-de-diatomee-punaises-de-lit) agit lentement et ne suffit pas seule contre une infestation installée.',
  ] },
  { h: 'Prix du traitement écologique des punaises de lit en Île-de-France', p: [
    'Notre **traitement écologique des punaises de lit** par cryogénie commence **à partir de 290 € TTC** pour un studio, **deux passages inclus**, avec une **garantie d’un an**. Pour un appartement plus grand, une maison ou un établissement, le prix est donné **sur devis gratuit**, avant toute intervention. Voir aussi [tous nos tarifs](/tarifs).',
    '### Ce qui fait varier le prix',
    '- Le **nombre de pièces** touchées et de **lits** à traiter.',
    '- L’**encombrement** des pièces : plus il y a d’objets, plus le traitement est long.',
    '- Le besoin de **combiner** avec la vapeur sèche ou un protocole mixte.',
    '- Pour un établissement : le **nombre de chambres** et le planning demandé.',
    '### Ce qui est compris',
    '- L’inspection et le diagnostic.',
    '- La cryogénie sur la literie, le mobilier et les plinthes.',
    '- L’aspiration des insectes morts.',
    '- Le **second passage**, 10 à 15 jours plus tard.',
    '- La **garantie 1 an** et nos conseils pour le linge.',
  ] },
  { h: 'Combien de temps dure une cryogénie ? Combien de passages ?', p: [
    'Comptez en général **plusieurs heures pour un appartement**, selon le nombre de pièces, de lits et de meubles. Une chambre bien préparée se traite bien plus vite qu’une pièce encombrée. Le traitement comprend **deux passages**, à **10 à 15 jours d’intervalle**.',
    'Pourquoi cet intervalle ? Il laisse aux œufs non atteints le temps d’éclore, et permet de traiter les jeunes punaises **avant qu’elles ne deviennent adultes et ne pondent**. Voir notre infographie du [cycle de vie de la punaise de lit](/blog/cycle-de-vie-punaise-de-lit).',
  ] },
  { h: 'Traitement écologique des punaises de lit en hôtel, crèche, foyer et EHPAD', p: [
    'Dans un établissement, le traitement écologique par cryogénie a deux atouts : **aucun biocide** là où dorment des enfants, des résidents ou des clients, et des chambres **réutilisables dès l’aération**, sans délai lié à un insecticide.',
    '- **Diagnostic** des chambres touchées et des chambres voisines, plan de l’étage à l’appui.',
    '- **Planning chambre par chambre**, organisé avec la direction pour limiter la gêne.',
    '- **Compte rendu** remis après chaque passage.',
    '- **Second passage** et **garantie 1 an**.',
    'C’est ainsi que nous avons traité un **établissement de tout-petits à Champigny-sur-Marne** et un **foyer pour enfants handicapés** (vidéos ci-dessus). Voir notre page [professionnels](/professionnels), et nos récits sur les [locations courte durée](/blog/punaises-de-lit-airbnb-location-courte-duree) et sur [un hôtel de Paris 1er](/blog/punaises-de-lit-introuvables-goulotte-hotel).',
  ] },
  { h: 'Traitement écologique des punaises de lit à Paris et en Île-de-France', p: [
    'Depuis notre base de **Saint-Maurice (94)**, nous réalisons le **traitement écologique des punaises de lit** **7j/7** à **Paris** et dans toute l’Île-de-France : [punaises de lit à Paris](/punaises-de-lit/paris), [dans le Val-de-Marne](/punaises-de-lit/val-de-marne), [dans les Hauts-de-Seine](/punaises-de-lit/hauts-de-seine), [en Essonne](/punaises-de-lit/essonne), [dans les Yvelines](/punaises-de-lit/yvelines) et [en Seine-et-Marne](/punaises-de-lit/seine-et-marne).',
    'Nos chantiers de cryogénie filmés : [Champigny-sur-Marne](/punaises-de-lit/champigny-sur-marne), [L’Haÿ-les-Roses](/punaises-de-lit/l-hay-les-roses) et [Ivry-sur-Seine](/punaises-de-lit/ivry-sur-seine). Nous traitons aussi par cryogénie à [Paris 12e](/punaises-de-lit/paris-12), [Paris 16e](/punaises-de-lit/paris-16), [Vincennes](/punaises-de-lit/vincennes), [Créteil](/punaises-de-lit/creteil), [Saint-Maur-des-Fossés](/punaises-de-lit/saint-maur-des-fosses) et dans toutes nos villes (liste complète plus bas).',
  ] },
  { h: 'Pourquoi nous confier votre traitement écologique', p: [
    '- **Une entreprise d’Île-de-France**, basée à Saint-Maurice et dirigée par son gérant, Houssem Hattab.',
    '- **Des techniciens certifiés Certibiocide**, formés à toutes les méthodes : cryogénie, vapeur sèche et insecticide. Nous choisissons la méthode selon votre cas.',
    '- **De vrais chantiers de traitement écologique filmés** : Champigny-sur-Marne, L’Haÿ-les-Roses, Ivry-sur-Seine et un foyer pour enfants.',
    '- **Plus de 1 500 clients** accompagnés.',
    '- **Un prix annoncé avant de venir**, deux passages inclus, garantie 1 an.',
  ] },
  { h: 'Nos sources', p: [
    '- ANSES, [Les punaises de lit en 13 questions](https://www.anses.fr/fr/content/les-punaises-de-lit-en-13-questions) : hausse des infestations liée aux voyages et à la résistance aux insecticides, lutte intégrée, méthodes non chimiques à privilégier, congélation adaptée aux vêtements et petits objets, 11 % des foyers infestés entre 2017 et 2022 (enquête Ipsos pour l’ANSES).',
    '- Site officiel [stop-punaises.gouv.fr](https://stop-punaises.gouv.fr/information) : lavage à plus de 60 °C, sèche-linge au moins 30 minutes, congélation 72 heures, sac d’aspirateur fermé, inefficacité des insecticides courants.',
    '- Température de la neige carbonique : environ −78 °C à la pression de l’air, température à laquelle le dioxyde de carbone solide se sublime.',
    '- Prix, protocole et vidéos : Allo Nuisible IDF, chantiers réalisés en Île-de-France en 2026.',
  ] },
]

// ── FAQ (données structurées FAQPage) ────────────────────────────────────────
export const CRYO_FAQ: { q: string; a: string }[] = [
  { q: 'Est-ce que le froid tue les punaises de lit ?', a: 'Oui, si le froid est assez intense ou assez long. La neige carbonique à environ −78 °C les tue au contact, œufs compris. Au congélateur, il faut 72 heures pour les vêtements et les petits objets. Une chambre sans chauffage en hiver, en revanche, ne suffit pas.' },
  { q: 'Comment fonctionne le traitement par cryogénisation contre les punaises de lit ?', a: 'Le technicien projette de la neige carbonique (CO2 à environ −78 °C) sur toutes les cachettes : matelas, sommier, meubles, plinthes. Le choc thermique tue les punaises et leurs œufs au contact, puis la neige se transforme en gaz, sans eau ni résidu. Un second passage suit 10 à 15 jours plus tard.' },
  { q: 'Existe-t-il un traitement écologique contre les punaises de lit ?', a: 'Oui. Chez nous, écologique veut dire sans biocide : la cryogénie (froid à environ −78 °C) et la vapeur sèche tuent les punaises et leurs œufs au contact, et notre chambre froide à −20 °C traite les objets. Aucun insecticide ni produit chimique n’est déposé. Nous ne prétendons pas pour autant que la méthode n’a aucun impact : elle utilise du CO2 et du matériel.' },
  { q: 'Un traitement sans produit chimique est-il aussi efficace qu’un insecticide ?', a: 'Oui pour les infestations localisées et moyennes, avec deux passages et une bonne préparation du linge. Pour une infestation très importante, nous vous dirons honnêtement si un traitement classique ou un protocole mixte est préférable.' },
  { q: 'À quoi sert votre chambre froide à −20 °C ?', a: 'À traiter les objets et textiles qui ne se lavent pas et ne supportent pas la chaleur : chaussures, sacs, livres, peluches. Ils y restent au moins 72 heures.' },
  { q: 'La cryogénie tue-t-elle les œufs de punaises de lit ?', a: 'Oui, au contact : le choc thermique tue les œufs comme les adultes. C’est pourquoi le jet doit atteindre chaque recoin, et pourquoi un second passage traite ceux qui auraient échappé au premier.' },
  { q: 'Combien coûte une cryogénie des punaises de lit ?', a: 'À partir de 290 € TTC pour un studio, deux passages inclus et garantie 1 an. Pour un appartement plus grand, une maison ou un établissement, le prix est donné sur devis gratuit, avant l’intervention.' },
  { q: 'Combien de passages faut-il ?', a: 'Deux, à 10 à 15 jours d’intervalle, tous deux compris dans le prix. La cryogénie n’a pas d’effet qui dure : le second passage élimine les jeunes punaises sorties des œufs non atteints, avant qu’elles ne pondent.' },
  { q: 'Combien de temps dure une cryogénie ?', a: 'Plusieurs heures pour un appartement en général, selon le nombre de pièces, de lits et l’encombrement. Une chambre bien préparée se traite beaucoup plus vite.' },
  { q: 'Faut-il quitter le logement pendant la cryogénie ?', a: 'Oui, pendant le traitement : le CO2 ne doit pas s’accumuler dans une pièce occupée. Vous revenez dès que la pièce est aérée, sans délai d’attente lié à un produit.' },
  { q: 'Peut-on dormir dans la chambre le soir même ?', a: 'Oui, une fois la pièce aérée. Dormez dans votre lit habituel, sans changer de chambre, jusqu’au second passage.' },
  { q: 'Faut-il jeter son matelas ?', a: 'Non, dans la grande majorité des cas : il se traite par cryogénie et vapeur sèche. Le jeter risque de répandre les punaises pendant le transport.' },
  { q: 'La cryogénie abîme-t-elle les meubles ou le matelas ?', a: 'Le bois, le métal, les tissus et la plupart des matériaux supportent bien le traitement, et rien n’est mouillé. Le technicien écarte l’électronique, les écrans, le verre et les surfaces fragiles, sensibles au choc thermique et à la condensation.' },
  { q: 'Peut-on faire une cryogénie avec un bébé ou une femme enceinte à la maison ?', a: 'Oui. Aucun produit n’est déposé : c’est pour cela que les familles avec un nourrisson ou une femme enceinte la choisissent. Les occupants quittent la pièce pendant le traitement et reviennent après l’aération.' },
  { q: 'Et avec un chien ou un chat ?', a: 'Les animaux quittent la pièce pendant le traitement et reviennent après l’aération. Aucun produit ne reste sur le sol ni sur leur couchage.' },
  { q: 'Cryogénie ou vapeur sèche : que choisir ?', a: 'La cryogénie pour les fentes, le mobilier et ce qui ne doit pas être mouillé ; la vapeur sèche pour les grandes surfaces textiles. Nous combinons souvent les deux.' },
  { q: 'Cryogénie ou insecticide : que choisir ?', a: 'La cryogénie convient aux lieux sensibles et aux infestations localisées à moyennes. Pour une infestation très importante, on passe au protocole mixte ou à l’insecticide. Le technicien vous conseille après l’inspection.' },
  { q: 'Quel est le traitement le plus efficace contre les punaises de lit ?', a: 'Il n’y a pas de méthode miracle. L’ANSES recommande de combiner rangement, aspiration, chaleur ou froid, et de privilégier les méthodes non chimiques. Une inspection minutieuse, la bonne méthode pour chaque support et deux passages font la différence.' },
  { q: 'Les bombes de froid vendues en ligne sont-elles efficaces ?', a: 'Elles peuvent tuer une punaise touchée directement, mais elles ne traitent ni un lit ni une pièce. Elles ne remplacent pas une cryogénie professionnelle.' },
  { q: 'J’ai encore des piqûres après le premier passage : est-ce normal ?', a: 'Quelques piqûres peuvent apparaître entre les deux passages : ce sont souvent de jeunes punaises sorties d’œufs non atteints. Signalez-les-nous : le second passage est fait pour cela.' },
  { q: 'La cryogénie est-elle dangereuse ?', a: 'Le point de vigilance est le CO2, qui ne doit pas s’accumuler dans une pièce fermée et occupée : la pièce est libérée pendant le traitement puis aérée. La neige carbonique ne doit pas toucher la peau : seul le technicien, ganté, manipule la lance.' },
  { q: 'Intervenez-vous à Paris et en Île-de-France ?', a: 'Oui, 7j/7, à Paris et dans tous les départements d’Île-de-France, depuis notre base de Saint-Maurice (94).' },
]
