import type { BlocMethodes, GuideService } from '@/components/MethodesService'

export const METHODES_PUNAISES: BlocMethodes = {
  titre: 'Traitement punaises de lit : nos méthodes expliquées une par une',
  intro: 'Il n’existe pas de produit miracle contre les punaises de lit. Ce qui fonctionne, c’est **une inspection minutieuse, puis la bonne combinaison** de méthodes : traitement **insecticide ou sans insecticide**, selon votre logement, l’ampleur de l’infestation et les personnes qui y vivent.',
  methodes: [
    {
      nom: 'Inspection',
      titre: 'Comment un professionnel trouve les nids de punaises de lit',
      accroche: 'On ne traite bien que ce qu’on a trouvé. **Une punaise adulte se glisse dans une fente de l’épaisseur d’une carte bancaire**, et les œufs, blanchâtres, mesurent environ un millimètre.',
      etapes: [
        'Questions sur les piqûres : **où, quand, qui est piqué**, depuis combien de temps, retour de voyage, meuble d’occasion.',
        'Inspection à la **lampe** des coutures, étiquettes et passepoils du matelas, du sommier, de la tête de lit et des lattes.',
        'Contrôle des **plinthes, prises, cadres, tables de chevet, canapés** et de tout ce qui se trouve à quelques mètres du couchage.',
        'Repérage des signes : **points noirs** (déjections), **mues** translucides, œufs, insectes vivants.',
        'Cartographie des pièces touchées pour décider des méthodes et du nombre de pièces à traiter.',
      ],
      pourquoi: 'Une punaise oubliée suffit à relancer l’infestation. L’inspection évite de traiter à l’aveugle et permet de **limiter le traitement aux zones utiles**.',
      limites: 'Au tout début d’une infestation, les signes sont rares. Les piqûres seules ne suffisent pas à confirmer : d’autres insectes piquent aussi.',
      ideal: 'Tous les chantiers, sans exception. C’est la première chose que fait notre technicien en arrivant.',
    },
    {
      nom: 'Cryogénie',
      titre: 'Cryogénie contre les punaises de lit : le froid extrême, sans insecticide',
      accroche: 'De la **neige carbonique à environ −78 °C** est projetée au plus près des cachettes. Le choc thermique tue les punaises **et leurs œufs** au contact.',
      etapes: [
        'Passage lent de la lance sur **chaque couture, fente et jonction** du lit et des meubles.',
        'Traitement du plus infesté (le couchage) vers l’extérieur de la pièce.',
        'Aspiration des insectes morts après le passage.',
        'Aération contrôlée de la pièce, le gaz carbonique ne devant pas s’accumuler.',
      ],
      pourquoi: 'La neige carbonique se transforme directement en gaz : **pas d’eau, pas de résidu**. Le lit reste presque sec et la pièce est utilisable juste après.',
      limites: 'Elle n’agit qu’**au contact** : pas d’effet qui dure après le passage, d’où l’importance du second passage.',
      ideal: 'Familles avec bébé, femmes enceintes, animaux, foyers, EHPAD, hôtels, électronique et meubles fragiles. Tout le détail sur notre page cryogénie.',
    },
    {
      nom: 'Vapeur sèche',
      titre: 'Vapeur sèche contre les punaises de lit : matelas et canapés traités en profondeur',
      accroche: 'Une vapeur **très chaude et peu chargée en eau** pénètre les textiles épais. La chaleur tue les punaises et les œufs touchés par le jet.',
      etapes: [
        'Buse large et **passage lent** sur toute la surface du matelas, du sommier et des assises.',
        'Buse fine pour les **coutures, capitons et plis**, là où se regroupent les punaises.',
        'Traitement des rideaux, des tapis et de la moquette au bord du lit.',
        'Séchage rapide grâce à la faible humidité de la vapeur.',
      ],
      pourquoi: 'Les grandes surfaces textiles sont traitées vite et à cœur, **sans produit chimique**.',
      limites: 'À éviter sur l’électronique, certains bois vernis et les matières sensibles à la chaleur. Pas d’effet après le passage.',
      ideal: 'Matelas, canapés en tissu, fauteuils, rideaux, moquettes.',
    },
    {
      nom: 'Insecticide professionnel',
      titre: 'Insecticide punaises de lit : quel produit utilise un professionnel ?',
      accroche: 'Notre technicien certifié **Certibiocide** applique un **biocide professionnel** autorisé, qui continue d’agir plusieurs semaines sur les surfaces traitées.',
      etapes: [
        'Pulvérisation ciblée des **fentes, plinthes, cadres de lit, dessous de meubles** et zones de passage.',
        'Respect des **doses** et des précautions inscrites sur l’étiquette du produit.',
        'Vous quittez le logement **4 heures en moyenne**, puis vous aérez avant de revenir.',
        'Second passage pour toucher les punaises écloses après le premier.',
      ],
      pourquoi: 'L’effet **rémanent** atteint les punaises qui sortent après le passage, y compris celles des cachettes inaccessibles.',
      limites: 'Les punaises ont développé des **résistances** à plusieurs insecticides vendus au grand public. Il faut un produit adapté et une application rigoureuse, jamais une bombe fumigène.',
      ideal: 'Infestations importantes, plusieurs pièces touchées, logements où l’on veut une barrière qui dure entre deux passages.',
    },
    {
      nom: 'Chambre froide −20 °C',
      titre: 'Vêtements et linge infestés : notre chambre froide à −20 °C',
      accroche: 'Le linge, les peluches, les chaussures et les objets qui ne passent pas en machine à 60 °C peuvent être **décontaminés par le froid** dans notre grande chambre froide.',
      etapes: [
        'Linge et objets placés dans des **sacs fermés** dès l’inspection.',
        'Séjour d’**au moins 72 heures à −20 °C**.',
        'Restitution du linge, qui ne doit pas retourner dans une pièce non traitée.',
      ],
      pourquoi: 'Le froid prolongé tue les punaises **à tous les stades**, sans laver ni abîmer les affaires fragiles.',
      limites: 'Ce n’est pas un traitement du logement : il accompagne le traitement des pièces.',
      ideal: 'Grosses quantités de vêtements, affaires d’enfants, sacs, chaussures, objets fragiles.',
    },
  ],
}

export const GUIDE_PUNAISES: GuideService = {
  sections: [
    {
      titre: 'Piqûres de punaises de lit : comment les reconnaître ?',
      texte: [
        'Les piqûres apparaissent surtout sur les **zones découvertes pendant le sommeil** : bras, épaules, cou, jambes. Elles sont souvent **alignées par trois ou quatre**, ou regroupées. Certaines personnes réagissent fortement, d’autres pas du tout : dans un couple, un seul peut être piqué.',
        'Les piqûres ne prouvent pas à elles seules qu’il s’agit de punaises. **Cherchez les points noirs** sur les coutures du matelas et les **petites taches de sang** sur les draps. En cas de doute, envoyez-nous une photo.',
      ],
    },
    {
      titre: 'Préparer son logement avant un traitement contre les punaises de lit',
      texte: ['Une bonne préparation fait la moitié du résultat. Voici ce que nous demandons avant notre passage :'],
      liste: [
        '**Laver à 60 °C** draps, housses et vêtements, puis les garder en sacs fermés',
        '**Désencombrer** autour des lits et sous les meubles',
        '**Aspirer** sols, plinthes et matelas, puis jeter le sac dehors, fermé',
        '**Ne rien déplacer** d’une pièce infestée vers une pièce saine',
        '**Ne pas jeter le matelas** avant notre avis : il peut souvent être traité',
        '**Ne pas pulvériser d’insecticide** du commerce : il disperse les punaises',
      ],
    },
    {
      titre: 'Pourquoi deux passages pour les punaises de lit ?',
      texte: [
        'Les œufs sont collés dans les fentes et protégés. Même bien traités, certains peuvent éclore après le premier passage. Le **second passage, 10 à 15 jours plus tard**, élimine ces jeunes punaises **avant qu’elles ne deviennent adultes et ne pondent**.',
        'C’est pour cela que notre tarif de **290 € inclut les deux passages**, avec une **garantie d’un an**.',
      ],
    },
    {
      titre: 'Punaises de lit en hôtel, location meublée ou foyer',
      texte: [
        'Pour les professionnels, chaque nuit compte. Nous organisons le traitement **chambre par chambre**, en dehors des heures d’arrivée si besoin, avec une **attestation** remise après l’intervention. La cryogénie permet de **remettre la chambre en location très vite**, puisqu’aucun produit n’y est déposé.',
      ],
      encadre: {
        titre: 'Ne laissez pas traîner',
        texte: 'Une infestation de punaises de lit **ne disparaît jamais seule**. Plus on traite tôt, moins il y a de pièces touchées. Appelez le 07 68 07 72 19 : devis gratuit et intervention 7j/7.',
      },
    },
  ],
}

export const METHODES_CRYOGENIE: BlocMethodes = {
  titre: 'Comment se passe un traitement par cryogénie, étape par étape',
  intro: 'La cryogénie est **notre traitement sans insecticide** contre les punaises de lit. Voici exactement ce que fait notre technicien chez vous, du premier coup d’œil au contrôle final.',
  methodes: [
    {
      nom: 'Le principe',
      titre: 'Neige carbonique à −78 °C : pourquoi le froid tue les œufs de punaises',
      accroche: 'Le gaz carbonique est projeté sous forme de **neige très froide**. Au contact, il provoque un **choc thermique brutal** que ni l’adulte, ni la larve, ni l’œuf ne supporte.',
      etapes: [
        'La neige atteint **environ −78 °C** à la sortie de la lance.',
        'L’eau contenue dans l’insecte **gèle instantanément** et détruit ses cellules.',
        'La neige se transforme directement en gaz : **aucune goutte d’eau** sur le matelas.',
        'Aucun produit ne reste sur les surfaces après le passage.',
      ],
      pourquoi: 'Le froid n’est pas un produit : **les punaises ne peuvent pas y devenir résistantes**, contrairement à certains insecticides.',
      limites: 'Le jet doit toucher l’insecte ou l’œuf. Une cachette oubliée n’est pas traitée, d’où l’inspection et le second passage.',
      ideal: 'Toutes les infestations faibles à moyennes, et les lieux où l’on ne veut aucun produit.',
    },
    {
      nom: 'Le passage chez vous',
      titre: 'Déroulé d’une séance de cryogénie dans une chambre',
      accroche: 'Le technicien travaille **lentement et méthodiquement**, centimètre par centimètre. C’est la précision qui fait l’efficacité.',
      etapes: [
        '**Matelas** : coutures, étiquette, poignées, passepoils, puis retournement.',
        '**Sommier et cadre de lit** : lattes, assemblages, vis, tête de lit.',
        '**Meubles proches** : tables de chevet, commode, cadres, prises et interrupteurs.',
        '**Plinthes et parquet** autour du lit, puis le reste de la pièce.',
        '**Aspiration** des insectes morts et aération.',
      ],
      pourquoi: 'On traite d’abord là où les punaises sont les plus nombreuses, puis on élargit pour ne laisser aucune zone de repli.',
      limites: 'Une pièce très encombrée ralentit fortement le travail : le désencombrement est indispensable.',
      ideal: 'Chambres, studios, chambres d’hôtel, dortoirs de foyers.',
    },
    {
      nom: 'La sécurité',
      titre: 'La cryogénie est-elle risquée pour les occupants ?',
      accroche: 'Le seul point de vigilance est le **gaz carbonique**, qui ne doit pas s’accumuler dans une pièce fermée. Notre technicien le maîtrise à chaque intervention.',
      etapes: [
        'Les occupants et les animaux **quittent la pièce** pendant le traitement.',
        'Le technicien est équipé et **surveille l’aération** en continu.',
        'Fenêtres ouvertes à la fin, puis retour possible **dès que la pièce est aérée**.',
      ],
      pourquoi: 'Aucun résidu n’est déposé : **pas de délai de plusieurs heures** comme après un insecticide.',
      limites: 'Le jet très froid peut marquer certains matériaux fragiles : le technicien adapte la distance.',
      ideal: 'Bébés, enfants, personnes âgées, asthmatiques, animaux, hôtels et établissements de santé.',
    },
  ],
}

export const GUIDE_CRYOGENIE: GuideService = {
  sections: [
    {
      titre: 'Cryogénie ou vapeur sèche : quelle différence contre les punaises ?',
      texte: [
        'Les deux tuent **au contact, sans insecticide**, mais par des moyens opposés : le **froid extrême** pour la cryogénie, la **chaleur** pour la vapeur sèche.',
        'La cryogénie est la plus **précise** : elle va dans les fentes, les meubles, les prises et autour de l’électronique, et ne mouille rien. La vapeur sèche est plus rapide sur les **grandes surfaces textiles** comme un canapé en tissu. Sur beaucoup de chantiers, notre technicien **combine les deux**.',
      ],
    },
    {
      titre: 'Combien de temps dure un traitement par cryogénie ?',
      texte: [
        'Comptez en général **plusieurs heures pour un appartement**, selon le nombre de pièces, de lits et de meubles. Une chambre bien désencombrée se traite beaucoup plus vite qu’une pièce chargée.',
        'Le traitement comprend **deux passages**, à **10 à 15 jours d’intervalle**, inclus dans notre tarif **dès 290 €**, avec une garantie d’un an.',
      ],
    },
    {
      titre: 'Après la cryogénie : les bons réflexes',
      texte: ['Vous pouvez dormir chez vous le soir même. Pour mettre toutes les chances de votre côté :'],
      liste: [
        '**Gardez le linge propre en sacs fermés** jusqu’au second passage',
        '**Aspirez chaque jour** autour du lit et jetez le sac dehors',
        '**Ne changez pas de chambre** : vous déplaceriez les punaises',
        '**Signalez-nous** toute nouvelle piqûre avant le second passage',
      ],
      encadre: {
        titre: 'Un vrai chantier, en vidéo',
        texte: 'Nous avons choisi la cryogénie pour **un foyer d’enfants handicapés**, où aucun produit ne devait être déposé. Les vidéos de l’intervention sont sur cette page.',
      },
    },
  ],
}
