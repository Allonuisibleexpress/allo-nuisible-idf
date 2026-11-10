import type { BlocMethodes, GuideService } from '@/components/MethodesService'

export const METHODES_CAFARDS: BlocMethodes = {
  titre: 'Comment éliminer les cafards pour de bon : nos 4 méthodes',
  intro: 'Les blattes vivent cachées : pour une que vous voyez, beaucoup d’autres restent dans les fentes, les moteurs et les gaines. Notre technicien **attaque la colonie là où elle vit**, puis revient pour détruire la génération suivante.',
  methodes: [
    {
      nom: 'Gel appât',
      titre: 'Gel anti-cafards professionnel : l’effet domino sur toute la colonie',
      accroche: 'C’est **notre arme principale** contre la blatte germanique, la plus fréquente dans les cuisines d’Île-de-France. Le gel attire les cafards, qui le consomment et **le rapportent au nid**.',
      etapes: [
        'Repérage des **zones chaudes et humides** : derrière le réfrigérateur, sous l’évier, autour du four et du lave-vaisselle.',
        'Dépôt de **petites gouttes de gel** dans les charnières, fentes de meubles, passages de tuyaux et gaines.',
        'Placement **hors de portée** des enfants et des animaux, jamais sur les plans de travail.',
        'Contrôle de la consommation au second passage et rechargement si besoin.',
      ],
      pourquoi: 'Les blattes mangent les déjections et les cadavres de leurs congénères. Un cafard qui a consommé le gel **contamine les autres** dans le nid, y compris ceux qui ne sortent pas.',
      limites: 'Le gel ne marche bien que si la nourriture concurrente disparaît : **miettes, graisse et poubelles ouvertes** réduisent son effet.',
      ideal: 'Cuisines, salles de bains, studios, cuisines de restaurant.',
    },
    {
      nom: 'Pulvérisation ciblée',
      titre: 'Insecticide contre les blattes : traiter les fentes, pas tout le logement',
      accroche: 'En complément du gel, notre technicien **Certibiocide** applique un **insecticide professionnel** dans les zones de passage et de refuge.',
      etapes: [
        'Pulvérisation **dans les fentes**, derrière les plinthes, sous les meubles bas et autour des canalisations.',
        'Aucun produit sur les surfaces en contact avec les aliments.',
        'Aération du logement selon les consignes de l’étiquette.',
      ],
      pourquoi: 'Le produit reste actif dans les refuges et touche les blattes qui y passent **dans les jours qui suivent**.',
      limites: 'Mal utilisé (bombe fumigène, pulvérisation en plein milieu de pièce), un insecticide **disperse les cafards** vers les logements voisins.',
      ideal: 'Infestations importantes, blattes orientales dans les caves et rez-de-chaussée, locaux professionnels.',
    },
    {
      nom: 'Vapeur sèche et cryogénie',
      titre: 'Cafards sans insecticide : vapeur sèche et cryogénie dans les recoins',
      accroche: 'Dans certains endroits, on préfère **ne rien déposer** : joints de carrelage, meubles de cuisine, recoins proches des aliments.',
      etapes: [
        '**Vapeur sèche** dans les joints, les rails de tiroirs et les dessous d’éviers.',
        '**Cryogénie** dans les fentes étroites et autour de certains appareils.',
        'Aspiration des insectes morts et des **oothèques** (capsules d’œufs) décrochées.',
      ],
      pourquoi: 'Effet **immédiat au contact**, sans résidu, là où l’on cuisine.',
      limites: 'Aucun effet après le passage : ces méthodes accompagnent le gel, elles ne le remplacent pas.',
      ideal: 'Cuisines de particuliers, restaurants, crèches, logements avec jeunes enfants.',
    },
    {
      nom: 'Second passage',
      titre: 'Pourquoi un 2e passage est indispensable contre les cafards',
      accroche: 'Les œufs de blattes sont protégés dans une **capsule rigide, l’oothèque**, que peu de produits traversent.',
      etapes: [
        'Retour **2 à 3 semaines** après le premier passage.',
        'Traitement des jeunes blattes **sorties des oothèques** depuis.',
        'Contrôle des zones et ajustement du gel.',
      ],
      pourquoi: 'On élimine la nouvelle génération **avant qu’elle ne ponde à son tour**.',
      limites: 'Si le logement voisin est infesté, des blattes peuvent revenir par les gaines : un traitement de l’immeuble peut être nécessaire.',
      ideal: 'Toutes les infestations : c’est inclus dans notre protocole.',
    },
  ],
}

export const GUIDE_CAFARDS: GuideService = {
  sections: [
    {
      titre: 'Blatte germanique ou blatte orientale : quel cafard avez-vous ?',
      texte: [
        'La **blatte germanique** est petite (environ 1,5 cm), brun clair, avec **deux bandes sombres** derrière la tête. Elle vit dans les cuisines et se reproduit très vite. La **blatte orientale** est plus grosse, **noire et luisante**, lente, et préfère les caves, les vide-ordures et les rez-de-chaussée humides.',
        'Le traitement n’est pas tout à fait le même : envoyez-nous une photo, nous identifions l’espèce **gratuitement**.',
      ],
    },
    {
      titre: 'Cafards dans un immeuble : pourquoi ils reviennent chez vous',
      texte: [
        'Dans les immeubles parisiens et de petite couronne, les blattes circulent par les **gaines techniques, les colonnes d’eau et les vide-ordures**. Traiter un seul appartement peut suffire si l’infestation vient de chez vous, mais si elle vient du voisinage, elle revient.',
        'Nous proposons alors un **traitement coordonné avec le syndic** : parties communes, locaux poubelles et logements concernés.',
      ],
    },
    {
      titre: 'Les 5 erreurs qui aggravent une infestation de cafards',
      texte: ['Beaucoup de clients nous appellent après avoir aggravé la situation sans le vouloir :'],
      liste: [
        '**La bombe fumigène** : elle fait fuir les blattes dans les murs et chez les voisins',
        '**Mélanger plusieurs produits** : le gel devient moins attractif',
        '**Laisser la vaisselle sale la nuit** : c’est un festin pour les blattes',
        '**Arrêter après le premier passage** : les oothèques éclosent ensuite',
        '**Ignorer les cartons** : ils transportent œufs et adultes',
      ],
      encadre: {
        titre: 'Restaurants et commerces alimentaires',
        texte: 'Nous intervenons **en dehors du service** et remettons une **attestation d’intervention** pour vos contrôles. Contrats de suivi possibles. Devis gratuit au 07 68 07 72 19.',
      },
    },
    {"titre": "Cafards dans la salle de bain ou près des canalisations", "texte": ["Les blattes ont besoin d’**eau** autant que de nourriture. Une fuite sous un lavabo, un joint de baignoire abîmé ou un siphon peu utilisé suffisent à les attirer. Notre technicien traite ces zones et vous signale les **fuites et joints à reprendre** : sans humidité, les cafards s’installent beaucoup moins."]},
    {"titre": "Combien de temps pour se débarrasser des cafards ?", "texte": ["Vous voyez en général **beaucoup moins de blattes dans les jours qui suivent** le premier passage. Le résultat complet arrive après le **second passage, 2 à 3 semaines plus tard**, une fois la génération suivante éliminée. Notre traitement est **garanti un an**."]},
  ],
}
