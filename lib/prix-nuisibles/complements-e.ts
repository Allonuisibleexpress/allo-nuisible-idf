// Sections longues des pages prix (5/5), 20/11/2026 : compléments pour atteindre 3 000 mots par page.
import type { PagePrix } from './types'
type C = NonNullable<PagePrix['complements']>

export const COMPLEMENTS_E: Record<string, C> = {
  cafards: [
    { titre: 'Les questions à poser avant de choisir une entreprise', paras: [
      'Demandez si l’espèce sera identifiée, combien de passages sont prévus, quelle méthode sera utilisée dans la cuisine, et si une garantie est écrite dans le devis. Une entreprise sérieuse répond clairement à ces quatre questions avant de se déplacer. Chez nous : identification sur photo, protocole en 2 passages, gel professionnel, garantie 1 an.',
    ] },
  ],
  fourmis: [
    { titre: 'Les questions à poser avant de choisir une entreprise', paras: [
      'Demandez quelle espèce est en cause, si le traitement vise la reine ou seulement les ouvrières, ce qui est prévu à l’extérieur pour une maison, et si une garantie est écrite. Méfiez-vous d’un intervenant qui pulvérise partout sans chercher les pistes : il traite les symptômes, pas la colonie.',
    ] },
    { titre: 'Fourmis en appartement : les cas que nous voyons le plus', paras: [
      'En appartement, les fourmis arrivent surtout au rez-de-chaussée et aux premiers étages, par les fissures des façades, les joints de fenêtres et les passages de canalisations. On les voit en file le long du plan de travail, vers l’évier, la poubelle ou les gamelles des animaux. Dans les étages élevés, il s’agit plus souvent de fourmis pharaon, qui circulent dans les gaines chauffées de l’immeuble.',
      'Le premier cas se règle en général au prix de départ, **dès 120 €**, avec un gel posé sur les pistes et dans les fissures. Le second demande souvent plusieurs passages et, parfois, un traitement coordonné avec les voisins : le prix est alors donné sur devis.',
    ] },
  ],
  'guepes-frelons': [
    { titre: 'Les questions à poser avant de choisir une entreprise', paras: [
      'Demandez le prix exact selon la hauteur avant le déplacement, la garantie en cas de reprise d’activité, et si un supplément s’applique le soir ou le week-end. Chez nous, la grille est publique (89 €, 149 €, 199 €), la garantie est de 3 mois et il n’y a aucune majoration. Un prix annoncé « à partir de » très bas, qui double une fois sur place, est un signal d’alerte.',
    ] },
    { titre: 'Les nids de frelons asiatiques en Île-de-France', paras: [
      'Le frelon asiatique s’est installé dans toute l’Île-de-France. Dans le Val-de-Marne, nous trouvons ses nids dans les grands arbres des bords de Marne, dans les haies des pavillons, sous les avant-toits et parfois dans les cheminées. À Paris, il niche aussi dans les arbres des squares et sur les balcons.',
      'Parce qu’il chasse les abeilles et les autres insectes, sa destruction est encouragée. Détruire un nid primaire au printemps, quand il est encore petit, évite qu’il donne naissance à un gros nid secondaire en été. C’est aussi le moment où l’intervention coûte le moins cher.',
    ] },
  ],
  'chenilles-processionnaires': [
    { titre: 'Les questions à poser avant de choisir une entreprise', paras: [
      'Demandez comment les nids seront retirés et détruits, quelle protection porte le technicien, et ce qui est prévu pour l’année suivante. Un intervenant qui coupe les branches et les laisse au sol, ou qui pulvérise tout le jardin pour deux nids, ne fait pas le bon travail.',
    ] },
    { titre: 'Les arbres concernés en Île-de-France', paras: [
      'La processionnaire du pin s’attaque surtout aux pins noirs et aux pins sylvestres, mais aussi aux cèdres, comme nous l’avons vu à Versailles. On la trouve dans les jardins, les parcs, les résidences et le long des routes. Ses nids sont plus nombreux sur les arbres isolés et bien exposés au soleil, en lisière ou en bordure de jardin.',
      'La processionnaire du chêne se trouve dans les massifs forestiers et les parcs plantés de chênes. Dans les deux cas, un seul arbre touché peut suffire à rendre un jardin difficile à fréquenter au moment de la procession. Repérer les nids dès l’automne permet de programmer le retrait au bon moment.',
    ] },
  ],
  pigeons: [
    { titre: 'Les questions à poser avant de choisir une entreprise', paras: [
      'Demandez quel matériel sera posé (inox, filet traité contre les UV), si le nettoyage est compris, et ce qui se passe si les pigeons contournent la protection. Une pose de qualité se voit à la tension du filet, à la continuité des pics et à la finition autour des fixations.',
    ] },
    { titre: 'Balcon, loggia, rebord : estimer votre prix en une photo', paras: [
      'Prenez une photo d’ensemble du balcon ou du rebord, puis une photo de l’endroit où vous voyez le plus de fientes. Indiquez la largeur approximative et l’étage. Avec ces informations, nous pouvons vous dire si votre situation entre dans le prix de départ, **dès 150 €**, ou s’il faut un devis.',
      'Pour une loggia, précisez si elle est ouverte d’un seul côté ou de plusieurs ; pour un rebord, combien de fenêtres sont concernées. Pour une façade ou une toiture, une visite est en général nécessaire pour évaluer l’accès et le matériel de travail en hauteur.',
    ] },
  ],
  puces: [
    { titre: 'Les questions à poser avant de choisir une entreprise', paras: [
      'Demandez si tout le logement sera traité ou seulement les pièces où vit l’animal, quelles consignes sont données après, et si une garantie est écrite. Un intervenant qui ne vous parle pas du traitement de l’animal chez le vétérinaire oublie la moitié du problème.',
    ] },
    { titre: 'Puces dans un appartement parisien : le parquet en cause', paras: [
      'Les parquets anciens des appartements parisiens et des immeubles de la petite couronne ont des fentes entre les lames où s’accumulent poussière, poils et débris. C’est l’endroit idéal pour les larves de puces, à l’abri de la lumière et de l’aspirateur. On y trouve parfois des puces des mois après le départ d’un animal.',
      'Le technicien insiste sur ces fentes, le long des plinthes et sous les meubles bas. Après le traitement, passez l’aspirateur avec un embout fin dans les rainures du parquet pendant plusieurs jours : c’est ce qui fait sortir les dernières puces.',
    ] },
    { titre: 'Ce que vous payez vraiment', paras: [
      'Le prix de départ, **dès 120 €** en appartement, comprend le diagnostic, le traitement des sols, des plinthes, des textiles et du couchage de l’animal, les consignes et la garantie d’un an. Il ne comprend pas le traitement de l’animal, qui se fait chez le vétérinaire. Pour une maison, avec garage, véranda et annexes, le prix dépend du nombre de pièces et est donné sur devis.',
    ] },
  ],
  acariens: [
    { titre: 'Les questions à poser avant de choisir une entreprise', paras: [
      'Demandez quelle méthode sera utilisée (avec ou sans produit), quelles surfaces seront traitées, et quels conseils vous seront donnés pour la suite. Méfiez-vous des promesses de « zéro acarien » : aucun traitement ne les supprime définitivement, il en réduit fortement le nombre.',
    ] },
    { titre: 'Les signes qui orientent vers les acariens', paras: [
      'Nez qui coule ou bouché le matin, éternuements au réveil, yeux qui piquent en faisant le lit, toux la nuit, gêne qui diminue en vacances loin de la maison : ces signes évoquent une sensibilité aux acariens. Seul un médecin peut confirmer une allergie, par des tests.',
      'Si votre médecin vous conseille de réduire les acariens, le traitement de la literie est une mesure concrète et rapide. Il ne remplace pas un avis médical ni un traitement prescrit.',
    ] },
    { titre: 'Ce que vous payez vraiment', paras: [
      'Le prix de départ, **dès 120 €**, comprend le traitement à la vapeur sèche du matelas, du sommier et des oreillers d’une chambre, et des conseils pour la suite. Un logement complet, avec plusieurs lits, canapés, tapis et rideaux, est chiffré sur devis selon le nombre de surfaces.',
    ] },
  ],
  anthrenes: [
    { titre: 'Les questions à poser avant de choisir une entreprise', paras: [
      'Demandez si le technicien cherchera le foyer, et pas seulement s’il traitera les pièces. Demandez aussi comment seront protégés vos tapis, vos lainages et vos objets fragiles. Un traitement sans recherche de foyer laisse revenir les larves.',
    ] },
    { titre: 'Les endroits où nous trouvons le plus souvent le foyer', paras: [
      'Dans les maisons : nids d’oiseaux sous les tuiles, dans les gouttières et les cheminées ; cadavres d’insectes accumulés dans les combles ; vieux tapis et cartons de vêtements au grenier. Dans les appartements : dessous des tapis en laine, fond des placards, dressings rarement ouverts, couvertures rangées, et parfois un nid de pigeon sur un balcon ou une corniche.',
      'Les larves se déplacent la nuit et peuvent s’éloigner du foyer, ce qui explique qu’on les trouve parfois loin de l’origine. Le technicien remonte ces traces jusqu’à la source.',
    ] },
    { titre: 'Ce que vous payez vraiment', paras: [
      'Le prix de départ, **dès 120 €**, comprend la recherche du foyer et le traitement d’une pièce. Plusieurs pièces, un dressing, des combles ou un nid d’oiseau difficile d’accès font passer le prix sur devis. Le retrait d’un nid dans une toiture peut demander un accès en hauteur.',
    ] },
  ],
  desinfection: [
    { titre: 'Les questions à poser avant de choisir une entreprise', paras: [
      'Demandez quels produits seront utilisés, quelles surfaces et quel volume d’air seront traités, combien de temps il faudra quitter les lieux, et si une attestation sera remise. Pour un logement encombré, demandez un devis détaillé poste par poste : débarras, nettoyage, désinfection.',
    ] },
    { titre: 'Désinfection d’un local professionnel', paras: [
      'Cuisines de restaurant, commerces de bouche, cabinets, locaux techniques : une désinfection peut être demandée après un incident (infestation, dégât des eaux) ou dans le cadre d’un plan d’hygiène. Nous intervenons en dehors des heures d’ouverture, pour que l’activité reprenne rapidement, et nous remettons une attestation.',
      'Pour les locaux qui reçoivent des denrées alimentaires, nous choisissons des produits adaptés et nous vous indiquons les consignes de rinçage des surfaces en contact avec les aliments.',
    ] },
    { titre: 'Désinfection et rongeurs : les risques à connaître', paras: [
      'Les déjections et l’urine de rats et de souris peuvent contenir des germes. C’est pour cela qu’on ne balaie jamais à sec des crottes de rongeurs : on humidifie, on ramasse avec des gants, on jette dans un sac fermé, puis on désinfecte. Dans une cave, un grenier ou un logement très souillé, ces opérations sont plus sûres avec un équipement de protection.',
      'Nous pouvons enchaîner dératisation et désinfection dans la même intervention, et les chiffrer dans un seul devis. C’est ce que nous avons fait à Maisons-Alfort.',
    ] },
  ],
}
