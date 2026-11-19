// Sections longues des pages prix (1/3) : dératisation, cafards, fourmis, guêpes et frelons. 20/11/2026.
import type { PagePrix } from './types'
type C = NonNullable<PagePrix['complements']>

export const COMPLEMENTS_A: Record<string, C> = {
  deratisation: [
    { titre: 'Pourquoi une dératisation d’appartement démarre à 120 €', paras: [
      'Le prix de départ correspond à la situation la plus courante en Île-de-France : quelques souris ou un rat dans un appartement, avec un ou deux points d’entrée identifiables. Il comprend le déplacement du technicien depuis Saint-Maurice, l’inspection, les dispositifs posés sur les passages, les conseils et la garantie d’un an. Nous préférons afficher ce prix clairement plutôt que d’annoncer un tarif d’appel très bas qui grimpe une fois sur place.',
      'Dès que la situation sort de ce cadre (maison avec jardin, cave reliée aux réseaux, commerce, plusieurs logements), nous passons sur devis. Ce n’est pas une façon de cacher le prix : c’est que le travail varie trop d’un lieu à l’autre pour un tarif unique. Le devis reste gratuit, et le prix est toujours écrit avant le début de l’intervention.',
    ] },
    { titre: 'Les signes qui permettent d’estimer le prix au téléphone', paras: [
      'Quelques questions suffisent souvent à situer votre cas : où voyez-vous des crottes, et de quelle taille ? Entendez-vous des bruits la nuit, et où ? Y a-t-il des emballages rongés, des câbles abîmés, une odeur ? Le logement a-t-il une cave, un jardin, un vide sanitaire ? Les voisins ont-ils le même problème ? Avec ces réponses, et éventuellement une photo, nous pouvons vous dire si votre situation entre dans le prix de départ ou s’il faut un devis.',
      'Les crottes de souris sont petites, de la taille d’un grain de riz, et dispersées. Celles du rat sont nettement plus grosses et souvent regroupées. Des traces grasses le long des murs, au bas des portes ou autour des tuyaux indiquent des passages répétés. Toutes ces informations aident le technicien à préparer son intervention, et donc à ne facturer que ce qui est nécessaire.',
    ] },
  ],

  cafards: [
    { titre: 'Pourquoi les cafards coûtent plus cher quand on attend', paras: [
      'La blatte germanique, l’espèce que l’on trouve le plus souvent dans les cuisines d’Île-de-France, se reproduit vite : chaque femelle transporte une oothèque contenant de nombreux œufs, et les jeunes deviennent adultes en quelques semaines quand il fait chaud. Une infestation qui tient dans un coin de cuisine au départ peut gagner la salle de bains et les gaines en un ou deux mois.',
      'Concrètement, la différence de prix entre un traitement pris tôt et un traitement tardif tient au nombre de cachettes à traiter et au temps passé. Dans un T2 où les cafards restent derrière le four et l’évier, le traitement entre dans le prix de départ. Quand on les voit en plein jour dans plusieurs pièces, il faut plus de produit, plus de temps et souvent un suivi plus rapproché.',
      'C’est aussi pour cela que nous déconseillons les essais successifs avec des produits du commerce : chaque mois perdu laisse le temps à plusieurs générations de se développer.',
    ] },
    { titre: 'Où se cachent les cafards dans un logement', paras: [
      'Les blattes cherchent trois choses : la chaleur, l’humidité et des fentes étroites. Dans une cuisine, elles se cachent derrière le réfrigérateur, sous le lave-vaisselle, dans le moteur de certains appareils, derrière les plinthes, dans les charnières des placards et sous l’évier, autour des tuyaux. Dans une salle de bains, elles se logent derrière la baignoire, sous le lavabo et dans les gaines techniques.',
      'Le technicien vérifie chacune de ces zones avant de poser le gel. C’est ce travail d’inspection, plus que le gel lui-même, qui fait le prix d’un traitement professionnel. Un gel posé au mauvais endroit reste intact ; un gel posé au bon endroit, en petites gouttes, est consommé en quelques jours.',
      'Pour vous aider, avant notre passage, videz le dessous de l’évier et les placards bas, et dégagez l’arrière des appareils si c’est possible sans risque. Cela rend l’inspection plus rapide et plus complète.',
    ] },
    { titre: 'Les blattes en immeuble : traiter seul ou avec les voisins', paras: [
      'Dans les immeubles anciens de Paris comme dans les résidences du Val-de-Marne, les cafards circulent d’un logement à l’autre par les colonnes d’eau, les gaines électriques, les vide-ordures et les bouches de ventilation. Traiter un seul appartement quand les voisins sont infestés donne un résultat temporaire : les blattes reviennent par les mêmes passages.',
      'Quand nous constatons que l’infestation vient de l’immeuble, nous vous le disons et nous vous proposons de prévenir le syndic ou le bailleur. Un traitement coordonné, logement par logement et dans les parties communes, coûte globalement moins cher que des traitements isolés qui se répètent. Nous pouvons établir un devis pour chaque logement ou un devis global.',
    ] },
  ],

  fourmis: [
    { titre: 'Les espèces de fourmis et leur effet sur le prix', paras: [
      'La **fourmi noire des jardins** est la plus fréquente : elle entre au printemps par les seuils et les terrasses, attirée par le sucre. Le traitement est en général simple et entre dans le prix de départ en appartement. La **fourmi pharaon**, petite et jaune pâle, vit dans les bâtiments chauffés ; ses colonies comptent plusieurs reines et plusieurs nids, ce qui demande souvent plusieurs passages.',
      'La **fourmi charpentière** est grande et sombre ; elle creuse des galeries dans le bois humide et laisse de la sciure au pied des poutres ou des cadres de fenêtres. Son traitement passe par une recherche dans le bois et une injection, d’où un devis. Les espèces invasives forment des supercolonies très étendues, qui demandent un traitement de toute la zone.',
      'Identifier l’espèce dès le départ évite deux erreurs coûteuses : traiter une fourmi pharaon comme une fourmi des jardins (et échouer), ou traiter une fourmi charpentière comme des termites (et payer un traitement inutile). Une photo nette suffit souvent.',
    ] },
    { titre: 'Le printemps, la saison des fourmis', paras: [
      'Les fourmis sont actives dès que les températures remontent. En Île-de-France, les appels pour des fourmis se multiplient au printemps et en été, quand les colonies cherchent de la nourriture pour élever les jeunes. Les fourmis ailées que l’on voit sortir d’un coup, par une journée chaude et orageuse, sont des reproducteurs qui quittent la colonie pour en fonder de nouvelles.',
      'C’est aussi la meilleure période pour traiter : les ouvrières sont nombreuses et rapportent vite le gel au nid. Le prix ne change pas selon la saison, mais l’efficacité est maximale quand les fourmis sont actives. En hiver, les fourmis que l’on voit à l’intérieur viennent souvent d’un nid situé dans le bâtiment lui-même, ce qui demande une recherche plus poussée.',
    ] },
    { titre: 'Les fourmis dans une maison avec jardin', paras: [
      'Dans les pavillons du Val-de-Marne, du Perreux à Sucy-en-Brie, les fourmis viennent presque toujours du jardin : nid sous une dalle de terrasse, au pied d’un mur exposé au soleil, dans une jardinière. Elles entrent par la baie vitrée, les fissures des seuils, les passages de câbles. Le traitement porte alors sur l’intérieur, où l’on voit les pistes, et sur l’extérieur, où se trouve la colonie.',
      'Le devis pour une maison tient compte de la surface à inspecter dehors et du nombre de nids trouvés. Nous vous conseillons aussi sur les gestes qui évitent le retour : ne pas laisser de fruits tombés près de la maison, éloigner les gamelles des animaux, reboucher les fissures des seuils.',
    ] },
    { titre: 'Les fourmis et les commerces de bouche', paras: [
      'Dans une boulangerie, une épicerie ou un restaurant, des fourmis visibles peuvent poser problème lors d’un contrôle d’hygiène. Le traitement se fait hors des heures d’ouverture, avec des appâts placés hors des zones de préparation, et une attestation est remise à l’exploitant. Ces interventions sont sur devis, selon la surface et les zones à traiter.',
    ] },
  ],

  'guepes-frelons': [
    { titre: 'Guêpe, frelon européen ou frelon asiatique : les reconnaître', paras: [
      'La **guêpe** est petite, jaune et noire, et construit des nids gris en papier mâché, souvent cachés : dans un abri de jardin, sous une tuile, dans une haie, dans un mur creux ou dans le sol. Le **frelon européen** est plus grand, brun et jaune ; il niche souvent dans les arbres creux, les greniers et les cheminées.',
      'Le **frelon asiatique** est sombre, avec une large bande orange sur l’abdomen et des pattes jaunes. Il construit au printemps un nid primaire, petit et bas, puis en été un nid secondaire, souvent très haut dans les arbres, qui peut devenir volumineux. C’est ce nid secondaire, haut placé, qui explique que beaucoup de nids de frelons asiatiques relèvent de notre tarif à la perche.',
      'Une photo prise de loin, sans s’approcher du nid, nous permet de reconnaître l’espèce et d’estimer la hauteur. Vous avez alors le prix exact avant notre déplacement.',
    ] },
    { titre: 'Le bon moment pour détruire un nid', paras: [
      'Au **printemps**, les nids sont petits : un nid primaire de frelon asiatique ou un jeune nid de guêpes se détruit vite, souvent au tarif de départ. En **été** et au début de l’**automne**, les colonies sont à leur maximum, les nids sont plus gros et parfois plus hauts, et les insectes plus défensifs : c’est la période où nous recevons le plus d’appels.',
      'En **hiver**, la colonie meurt, seules les futures reines quittent le nid pour hiverner ailleurs. Un nid vide en hiver n’est pas dangereux et n’est pas réutilisé l’année suivante : inutile de payer pour le détruire. Nous vous le disons franchement si vous nous appelez pour un nid abandonné.',
    ] },
    { titre: 'Nids dans les toitures, cheminées et coffres de volets', paras: [
      'Les nids cachés sont les plus délicats. Sous une tuile, dans un coffre de volet roulant, dans une cheminée ou un faux plafond, on ne voit souvent qu’un va-et-vient d’insectes par une petite ouverture. Le technicien injecte le produit par cette ouverture, ce qui suffit en général à détruire la colonie sans ouvrir la toiture.',
      'Ces interventions relèvent de notre tarif d’accès difficile, à **199 €**. Nous l’avons fait pour un nid de frelons dans une cheminée à Nogent-sur-Marne et pour un nid de guêpes sous une tuile dans l’Essonne. Si l’accès impose d’ouvrir la toiture, nous vous le disons avant et vous orientons vers un couvreur.',
    ] },
    { titre: 'Allergies, enfants, animaux : quand faut-il appeler vite', paras: [
      'Appelez sans attendre si le nid se trouve près d’une porte d’entrée, d’une fenêtre de chambre, d’une aire de jeux, d’une terrasse utilisée ou d’un passage fréquent, ou si une personne de la maison est allergique aux piqûres. Dans ces cas, nous intervenons en général sous une heure.',
      'En attendant, éloignez les enfants et les animaux, fermez les fenêtres proches, ne tondez pas la pelouse près d’un nid dans le sol et n’essayez pas de boucher l’entrée du nid : les insectes chercheraient une autre sortie, parfois vers l’intérieur de la maison.',
    ] },
  ],
}
