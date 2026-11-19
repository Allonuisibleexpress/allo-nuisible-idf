// Derniers compléments des pages prix (20/11/2026).
import type { PagePrix } from './types'
type C = NonNullable<PagePrix['complements']>

export const COMPLEMENTS_H: Record<string, C> = {
  fourmis: [
    { titre: 'Notre zone d’intervention', paras: [
      'Depuis Saint-Maurice, nous traitons les fourmis dans tout le Val-de-Marne, à Paris, dans les Hauts-de-Seine et dans le reste de l’Île-de-France, au même prix partout. Les pavillons des bords de Marne, de Saint-Maur au Perreux, sont parmi les plus touchés au printemps, mais les appartements parisiens en rez-de-chaussée ne sont pas épargnés.',
    ] },
  ],
  'chenilles-processionnaires': [
    { titre: 'Notre zone d’intervention', paras: [
      'Nous intervenons contre les chenilles processionnaires dans tout le Val-de-Marne, à Paris, dans les Hauts-de-Seine, les Yvelines, l’Essonne et la Seine-et-Marne. Les secteurs boisés et les quartiers pavillonnaires plantés de pins sont les plus concernés : bords de Marne, lisières du Bois de Vincennes, parcs de l’ouest parisien, abords des forêts de Fontainebleau et de Rambouillet. Le prix est le même partout : il dépend de la hauteur des nids et du nombre d’arbres, pas de la commune.',
    ] },
  ],
  pigeons: [
    { titre: 'Notre zone d’intervention', paras: [
      'Nous posons des protections anti-pigeons à Paris, dans le Val-de-Marne, les Hauts-de-Seine et le reste de l’Île-de-France. Les arrondissements denses de Paris, avec leurs balcons et leurs corniches, et les résidences de la petite couronne sont nos interventions les plus fréquentes. Le prix de départ est le même partout : dès 150 € pour un balcon ou un rebord.',
      'Pour une façade ou une toiture, nous évaluons l’accès lors d’une visite gratuite. Selon la hauteur, nous travaillons depuis le balcon, avec une échelle, une perche ou une nacelle.',
    ] },
  ],
  puces: [
    { titre: 'Puces : le bon ordre des opérations', paras: [
      '**1. Vétérinaire** : faites traiter tous les animaux du foyer, avec un produit adapté à chacun. **2. Préparation** : passez l’aspirateur partout, lavez le couchage de l’animal et le linge qui traîne au sol, dégagez les sols. **3. Traitement du logement** : nous traitons sols, plinthes, fentes et textiles. **4. Les jours suivants** : aspirateur chaque jour pour faire éclore les derniers cocons. **5. Surveillance** : quelques puces peuvent encore apparaître une à deux semaines, puis disparaissent.',
      'Respecter cet ordre est ce qui fait réussir un traitement du premier coup, et donc ce qui évite de payer une deuxième intervention.',
    ] },
    { titre: 'Notre zone d’intervention', paras: [
      'Nous traitons les puces dans tout le Val-de-Marne, à Paris, dans les Hauts-de-Seine et le reste de l’Île-de-France, au même prix. Nos pages par ville détaillent nos interventions près de chez vous.',
    ] },
  ],
  acariens: [
    { titre: 'Pourquoi la vapeur sèche plutôt qu’un produit', paras: [
      'Contre les acariens, nous privilégions la vapeur sèche pour trois raisons. Elle agit dans la profondeur des textiles, là où vivent les acariens. Elle ne laisse aucun résidu dans la literie, ce qui compte pour une chambre d’enfant ou de personne allergique. Et elle permet de dormir dans son lit le soir même, une fois le matelas sec.',
      'Un acaricide peut compléter le traitement quand les acariens sont très nombreux ou sur certaines surfaces, toujours de façon ciblée. Le technicien vous explique le choix et vous laisse décider.',
    ] },
    { titre: 'Notre zone d’intervention', paras: [
      'Nous traitons les acariens dans tout le Val-de-Marne, à Paris, dans les Hauts-de-Seine et le reste de l’Île-de-France. Le prix de départ est le même partout : dès 120 € pour une chambre.',
    ] },
  ],
  anthrenes: [
    { titre: 'Pourquoi le prix d’un professionnel se justifie', paras: [
      'Le coût d’un traitement contre les anthrènes est souvent bien inférieur à la valeur des textiles qu’elles abîment : un tapis ancien, des pulls en cachemire, un manteau, une collection. Surtout, l’expérience du technicien permet de trouver le foyer, ce que l’on rate souvent seul parce qu’il est caché dans un endroit inattendu : un conduit, un nid sous la toiture, un carton au fond d’un placard.',
      'Sans ce foyer, les produits du commerce ne font que retarder le problème, qui revient chaque printemps.',
    ] },
    { titre: 'Notre zone d’intervention', paras: [
      'Nous traitons les anthrènes dans tout le Val-de-Marne, à Paris, dans les Hauts-de-Seine et le reste de l’Île-de-France, au même prix partout. Les appartements anciens avec parquets et tapis, et les maisons avec combles, sont les plus concernés.',
    ] },
  ],
  desinfection: [
    { titre: 'Les produits professionnels et la réglementation', paras: [
      'Les désinfectants que nous utilisons sont des produits biocides professionnels, encadrés par la réglementation européenne sur les biocides. Ils sont manipulés par des techniciens formés et certifiés, avec un équipement de protection individuelle adapté. La loi interdit de présenter un biocide comme « naturel », « non toxique » ou « sans danger » : nous respectons cette règle et vous expliquons simplement les précautions à prendre.',
      'Le choix du produit dépend de ce qu’il faut éliminer, des surfaces et de l’usage des locaux. Pour une cuisine professionnelle, par exemple, nous indiquons les surfaces à rincer avant tout contact avec les aliments.',
    ] },
    { titre: 'Notre zone d’intervention', paras: [
      'Nous intervenons dans tout le Val-de-Marne, à Paris, dans les Hauts-de-Seine et le reste de l’Île-de-France, pour les particuliers, les familles, les bailleurs, les syndics, les professionnels et les collectivités. Le prix de départ est le même partout : dès 150 € pour un studio, attestation comprise.',
    ] },
  ],
}
