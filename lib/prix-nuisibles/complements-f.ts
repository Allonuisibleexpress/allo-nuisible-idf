// Sections longues des pages prix (6/6), 20/11/2026 : derniers compléments pour atteindre 3 000 mots par page.
import type { PagePrix } from './types'
type C = NonNullable<PagePrix['complements']>

export const COMPLEMENTS_F: Record<string, C> = {
  cafards: [
    { titre: 'Après le traitement : ce qu’il faut faire, et ne pas faire', paras: [
      'Ne lavez pas les petites gouttes de gel posées dans les fentes, et n’utilisez pas de bombe insecticide pendant les semaines qui suivent : vous rendriez le gel moins attractif. Gardez la cuisine propre et sèche la nuit, sortez les poubelles, ne laissez pas de gamelle pleine. Signalez-nous toute activité qui persiste après le second passage : la garantie d’un an s’applique.',
    ] },
  ],
  fourmis: [
    { titre: 'Ce que vous payez vraiment', paras: [
      'Le prix de départ, **dès 120 €** en appartement, comprend l’identification de l’espèce, le suivi des pistes, la pose du gel appât professionnel dans les fissures et sur les passages, les conseils et la garantie d’un an. En maison, le traitement de l’extérieur et la recherche du nid font passer le prix sur devis, tout comme les fourmis charpentières, dont le traitement demande une recherche dans le bois.',
      'Nous ne facturons pas de supplément pour une intervention rapide : nous intervenons en général sous 48 heures, au même prix, y compris le week-end.',
    ] },
  ],
  'guepes-frelons': [
    { titre: 'Ce que vous payez vraiment', paras: [
      'Chaque niveau de prix comprend le déplacement, l’identification, la sécurisation de la zone, la destruction du nid et la garantie de 3 mois. La différence entre 89 €, 149 € et 199 € tient uniquement à la hauteur et à l’accès : plus le nid est haut ou caché, plus l’intervention demande de matériel et de temps.',
    ] },
  ],
  'chenilles-processionnaires': [
    { titre: 'Ce que vous payez vraiment', paras: [
      'Le prix de départ, **dès 89 €**, comprend le déplacement, l’équipement de protection, le retrait et la destruction d’un nid accessible, les conseils et la garantie. Le tarif à **149 €** correspond à un nid en hauteur retiré à la perche. Plusieurs arbres, des nids très hauts, une nacelle ou la pose d’écopièges sont chiffrés au devis.',
      'Le prix ne dépend ni du jour ni de l’heure : aucune majoration le week-end ni les jours fériés, ce qui permet d’intervenir dans un jardin public ou une cour d’école quand les lieux sont vides.',
    ] },
  ],
  pigeons: [
    { titre: 'Ce que vous payez vraiment', paras: [
      'Le prix de départ, **dès 150 €**, comprend l’étude des perchoirs, le matériel (pics inox ou filet), la pose et un nettoyage de la zone, pour un balcon ou un rebord standard. Une terrasse, des corniches, une façade ou une toiture, un grand nettoyage de fientes ou un travail en hauteur sont chiffrés sur devis.',
      'Le matériel posé reste en place des années : il s’agit d’un investissement durable, pas d’un passage à répéter. C’est ce qui distingue un dépigeonnage par barrières physiques des solutions temporaires.',
    ] },
    { titre: 'Les dégâts que coûtent les pigeons quand on attend', paras: [
      'Laisser des pigeons s’installer a aussi un coût. Les fientes abîment les garde-corps, les rebords en zinc, la pierre et les peintures ; les nids bouchent les gouttières et les descentes d’eau, ce qui peut provoquer des infiltrations. Un balcon impraticable perd son usage, et le nettoyage devient plus long à chaque saison.',
      'Les nids abandonnés attirent par ailleurs des insectes, dont les anthrènes, qui peuvent ensuite gagner les appartements et abîmer les lainages. Protéger un balcon tôt coûte moins cher que réparer les dégâts plus tard.',
    ] },
  ],
  puces: [
    { titre: 'Les situations où les puces coûtent le plus cher', paras: [
      'Une infestation de puces devient plus coûteuse quand elle s’étend à toute une maison, quand plusieurs animaux vivent dans le logement sans traitement régulier, ou quand des produits du commerce ont été utilisés sans succès pendant des semaines. Dans ces cas, le nombre de pièces à traiter augmente et le devis aussi.',
      'À l’inverse, une infestation prise tôt, dans un appartement où l’animal est traité le même jour, reste dans le prix de départ. C’est pourquoi nous conseillons d’appeler dès les premières piqûres aux chevilles, ou dès que votre animal se gratte plus que d’habitude.',
    ] },
    { titre: 'Prévenir le retour des puces', paras: [
      'Gardez votre animal sous traitement antiparasitaire régulier, selon les conseils de votre vétérinaire, surtout au printemps et en été. Lavez régulièrement son couchage. Passez l’aspirateur souvent dans les pièces où il se repose, sous les meubles et dans les fentes du parquet.',
      'Si vous emménagez dans un logement où vivaient des animaux, observez vos chevilles les premiers jours : quelques piqûres groupées sont un signe à ne pas négliger. Plus le traitement est rapide, plus il est simple.',
    ] },
  ],
  acariens: [
    { titre: 'Une routine simple pour une chambre saine', paras: [
      '**Chaque jour** : ouvrir grand la fenêtre de la chambre quelques minutes, ne pas refaire le lit tout de suite le matin pour laisser l’humidité s’évaporer. **Chaque semaine** : laver les draps et les taies à 60 °C, passer l’aspirateur, de préférence avec un filtre adapté, sur le sol et le matelas. **Chaque mois ou chaque saison** : laver la couette et les oreillers selon leur étiquette, aérer les tapis.',
      'Gardez la chambre plutôt fraîche, autour de 18 à 19 °C, et évitez d’y faire sécher du linge. Limitez les peluches et les tissus qui prennent la poussière dans la chambre d’un enfant allergique, ou lavez-les régulièrement.',
    ] },
    { titre: 'Acariens et logement humide en Île-de-France', paras: [
      'Les logements anciens mal ventilés, les rez-de-chaussée, les appartements proches de la Marne ou de la Seine et les logements suroccupés sont plus souvent humides. Les acariens y trouvent des conditions idéales et se réinstallent vite après un traitement si rien ne change.',
      'Dans ces cas, le traitement de la literie doit s’accompagner d’une action sur l’humidité : ventilation qui fonctionne, chauffage régulier, déshumidificateur si besoin. Si l’humidité vient d’un défaut du bâtiment, signalez-le par écrit au propriétaire ou au syndic.',
    ] },
  ],
  anthrenes: [
    { titre: 'Les situations où les anthrènes coûtent le plus cher', paras: [
      'Une infestation d’anthrènes devient coûteuse quand elle n’est pas repérée à temps : les larves se multiplient pendant des mois dans un tapis ou un placard, abîment des vêtements de valeur, et se répandent dans plusieurs pièces. Le traitement porte alors sur tout le logement, et les dégâts sur les textiles ne se réparent pas.',
      'À l’inverse, repérer les petits insectes ronds sur les fenêtres au printemps et faire chercher le foyer tout de suite permet souvent de rester dans le prix de départ, sur une seule pièce.',
    ] },
    { titre: 'Calendrier : quand surveiller les anthrènes', paras: [
      '**Au printemps**, les adultes sortent et se dirigent vers la lumière : c’est le moment où on les voit sur les fenêtres. **En été**, les femelles pondent près des sources de nourriture des larves. **De l’automne au printemps suivant**, les larves se développent, cachées, et font l’essentiel des dégâts.',
      'Inspecter les placards, les tapis et les rangements de lainages à l’automne permet de repérer les larves avant qu’elles ne s’installent. Un passage d’aspirateur sous les meubles à ce moment-là est l’un des gestes les plus utiles.',
    ] },
    { titre: 'Musées, collections et objets anciens', paras: [
      'Les anthrènes sont redoutées dans les musées et les collections parce qu’elles s’attaquent aux insectes naturalisés, aux plumes, aux fourrures et aux textiles anciens. Chez un particulier, un vieux tapis de famille, une collection de papillons ou un manteau en fourrure peuvent être touchés.',
      'Pour ces objets, nous évitons les produits et privilégions les méthodes douces, comme le froid en sac hermétique. Le devis tient compte du nombre et de la fragilité des objets.',
    ] },
  ],
  desinfection: [
    { titre: 'Les étapes d’une désinfection réussie', paras: [
      '**Évaluer** : le technicien regarde l’état des lieux, la surface et la cause de la contamination. **Préparer** : débarras et nettoyage si nécessaire, pour que les surfaces soient accessibles et propres. **Désinfecter** : pulvérisation sur les surfaces, nébulisation dans l’air quand c’est utile. **Laisser agir et aérer** : les occupants reviennent après le délai indiqué. **Attester** : remise de l’attestation.',
      'Sauter une étape, par exemple désinfecter sans avoir débarrassé, donne un résultat médiocre. Le devis reprend ces étapes pour que vous sachiez ce qui est fait et ce que vous payez.',
    ] },
    { titre: 'Bailleurs et propriétaires : avant une relocation', paras: [
      'Après le départ d’un locataire dans un logement très sale, après une infestation de punaises de lit ou de rongeurs, ou après un long abandon, une désinfection avant relocation protège le futur occupant et le propriétaire. Depuis la loi ELAN, un logement loué doit être exempt d’infestation d’espèces nuisibles : l’attestation de traitement et de désinfection est un document utile à conserver.',
      'Nous intervenons logement vide, rapidement, pour limiter la vacance locative, et nous coordonnons si besoin traitement des nuisibles et désinfection.',
    ] },
    { titre: 'Discrétion et respect des personnes', paras: [
      'Les situations qui demandent une désinfection sont souvent difficiles : décès, maladie, isolement, logement très encombré. Nos techniciens interviennent avec discrétion, véhicule et tenue adaptés, et en respectant les affaires et les souhaits de la famille ou de l’occupant.',
      'Quand la situation le permet, nous expliquons à la personne ce que nous faisons et pourquoi. Dans le cas d’un logement très encombré, la priorité est de rendre le lieu sain et sûr, sans jugement.',
    ] },
  ],
}
