// Sections longues des pages prix (2/3) : chenilles, pigeons, puces. 20/11/2026.
import type { PagePrix } from './types'
type C = NonNullable<PagePrix['complements']>

export const COMPLEMENTS_B: Record<string, C> = {
  'chenilles-processionnaires': [
    { titre: 'Le cycle des chenilles processionnaires du pin, mois par mois', paras: [
      'En été, les papillons sortent du sol, s’accouplent et pondent sur les aiguilles de pin. Les jeunes chenilles éclosent à la fin de l’été et commencent à se nourrir. À l’automne, elles tissent leur **nid d’hiver**, une boule de soie blanche bien visible en haut des branches les plus exposées au soleil.',
      'Pendant l’hiver, elles sortent la nuit pour manger les aiguilles et rentrent au nid le jour. À la fin de l’hiver ou au début du printemps, selon la météo, elles descendent de l’arbre **en file indienne**, la fameuse procession, pour s’enterrer et se transformer. C’est à ce moment qu’elles sont le plus dangereuses pour les enfants et les chiens, parce qu’elles sont au sol.',
      'Ce calendrier explique nos conseils de prix : un retrait des nids en hiver, quand les chenilles sont regroupées, coûte moins cher et marche mieux qu’une intervention tardive, quand elles sont dispersées dans le jardin.',
    ] },
    { titre: 'La processionnaire du chêne, un autre calendrier', paras: [
      'La processionnaire du chêne vit surtout dans les forêts et les parcs : chênes du Bois de Vincennes, des forêts de l’est et du sud de l’Île-de-France. Ses chenilles apparaissent au printemps, se regroupent en plaques sur le tronc et les grosses branches, et tissent des nids collés à l’écorce.',
      'Ses poils restent urticants longtemps, y compris dans les nids vides. L’intervention se fait donc avec la même protection, mais sur le tronc plutôt qu’en bout de branche, ce qui change l’accès et le prix. Pour quelques nids bas, le tarif de départ s’applique ; pour un grand chêne ou plusieurs arbres, c’est sur devis.',
    ] },
    { titre: 'Les dangers pour la santé, et pourquoi on ne bricole pas', paras: [
      'Chaque chenille porte des milliers de poils microscopiques qui se détachent facilement et flottent dans l’air. Au contact de la peau, ils provoquent des démangeaisons et des plaques rouges ; dans les yeux, une inflammation ; inhalés, une gêne respiratoire. Les nids, même vides, en contiennent encore.',
      'Chez le chien, qui renifle ou attrape une chenille au sol, les poils peuvent provoquer une atteinte grave de la langue : c’est une urgence vétérinaire. Les chats sont aussi concernés, plus rarement.',
      'Ces risques expliquent pourquoi nous retirons les nids en combinaison, avec masque et lunettes, et pourquoi nous détruisons les nids retirés plutôt que de les jeter. Couper soi-même une branche portant un nid, sans protection, expose à ces poils.',
    ] },
    { titre: 'Écopièges et phéromones : protéger le jardin d’une année sur l’autre', paras: [
      'Le retrait des nids règle l’hiver en cours. Pour limiter l’infestation suivante, deux outils sans biocide existent. L’**écopiège** est une collerette posée autour du tronc, avant la descente : les chenilles qui descendent sont guidées dans un sac et ne se dispersent pas dans le jardin. Les **pièges à phéromones**, installés en été, capturent les papillons mâles et réduisent la ponte.',
      'Ces solutions représentent un coût supplémentaire, chiffré au devis selon le nombre d’arbres. Elles sont souvent rentables pour les jardins avec plusieurs pins ou pour les copropriétés, qui évitent ainsi de payer un retrait de nids chaque hiver. Les nichoirs à mésanges, que vous pouvez installer vous-même, complètent utilement ce dispositif.',
    ] },
    { titre: 'Chenilles dans les espaces publics et les copropriétés', paras: [
      'Écoles, crèches, parcs, résidences arborées : dans ces lieux, la présence de nids est particulièrement gênante, parce que les enfants jouent près des arbres. Nous intervenons hors présence du public, avec un balisage si nécessaire, et nous remettons un compte rendu des arbres traités.',
      'Depuis que les processionnaires figurent dans le Code de la santé publique, les maires peuvent prescrire des mesures de lutte. Pour une commune ou un syndic, nous établissons un devis global, arbre par arbre. Voir notre page [mairies et collectivités](/mairies-collectivites).',
    ] },
  ],

  pigeons: [
    { titre: 'Pourquoi les pigeons reviennent toujours au même endroit', paras: [
      'Le pigeon des villes est très fidèle à son lieu de repos et de nidification. Un balcon calme, abrité du vent, avec un rebord où se poser et un coin pour nicher, devient vite un point de retour quotidien. Tant que l’endroit reste accessible, les pigeons reviennent, même après avoir été chassés plusieurs fois.',
      'C’est pour cela que les solutions qui fonctionnent sont des **barrières physiques** : on rend l’endroit inutilisable. Les effaroucheurs, les objets brillants ou les faux rapaces marchent quelques jours, puis les pigeons s’y habituent. Le prix d’un dépigeonnage correspond donc au matériel et à la pose d’une protection durable, pas à un simple passage.',
    ] },
    { titre: 'Les fientes : un problème d’hygiène et de bâtiment', paras: [
      'Les fientes de pigeon sont acides : elles attaquent la pierre, le zinc, les peintures et les joints. Accumulées sur un balcon ou dans un grenier, elles dégradent le bâtiment et peuvent boucher les évacuations d’eau. Elles attirent aussi des insectes et des acariens, et les nids abandonnés peuvent abriter des anthrènes qui gagnent ensuite les appartements.',
      'Sèches, les fientes se transforment en poussière qu’il ne faut pas respirer. Leur retrait se fait donc avec un masque, en humidifiant avant de gratter, puis en désinfectant la surface. Pour un balcon standard, un nettoyage de la zone de pose est prévu avec la protection ; pour un grenier ou une grande surface très souillée, le nettoyage est chiffré à part.',
    ] },
    { titre: 'Pics, filet ou fil : comment nous choisissons', paras: [
      'Les **pics inox** se posent sur les surfaces étroites : appuis de fenêtre, rebords, corniches, enseignes. Ils empêchent les pigeons de se poser sans les blesser. Ils sont discrets vus de la rue et durent longtemps.',
      'Le **filet** ferme un volume : un balcon, une loggia, une cour, une courette. Bien tendu et de la bonne maille, il est presque invisible de loin. C’est la solution la plus efficace quand les pigeons nichent dans un coin du balcon.',
      'Le **fil tendu** se pose sur les garde-corps, les faîtages et les longues surfaces planes où les pics seraient trop nombreux. Le choix dépend de l’endroit précis où les pigeons se posent : c’est pourquoi nous regardons d’abord les traces de fientes, qui montrent leurs perchoirs habituels.',
    ] },
    { titre: 'Copropriété : ce qu’il faut savoir avant de poser un filet', paras: [
      'Un filet ou des pics visibles depuis la rue modifient l’aspect de la façade. Selon le règlement de copropriété, il peut être nécessaire d’en informer le syndic ou de demander une autorisation en assemblée générale. Pour un filet discret à l’intérieur d’une loggia, c’est rarement un problème ; pour une façade d’immeuble, c’est souvent la copropriété elle-même qui commande les travaux.',
      'Quand plusieurs habitants d’un même immeuble ont le même problème, une intervention groupée réduit le coût par logement et évite que les pigeons se déplacent simplement d’un balcon à l’autre.',
    ] },
    { titre: 'Pigeons et rats : un lien souvent ignoré', paras: [
      'Les graines jetées aux pigeons, sur un balcon, dans une cour ou au pied d’un immeuble, nourrissent aussi les rats et les souris. Beaucoup de problèmes de rongeurs en rez-de-chaussée commencent par un voisin qui nourrit les oiseaux. Arrêter de nourrir les pigeons fait partie de nos conseils, et c’est souvent la mesure la plus utile pour éviter de payer ensuite une dératisation.',
    ] },
  ],

  puces: [
    { titre: 'Le cycle de la puce, et pourquoi on voit si peu d’adultes', paras: [
      'Une puce adulte vit sur l’animal, s’y nourrit de sang et y pond. Les œufs tombent au sol, dans le panier, sur le tapis, entre les lattes du parquet. Ils donnent des **larves** qui fuient la lumière et se nourrissent de débris, puis des **cocons**, très résistants, dans lesquels la puce attend le bon moment pour sortir.',
      'La grande majorité d’une population de puces se trouve donc dans le logement, sous forme d’œufs, de larves et de cocons, et non sur l’animal. C’est pour cela qu’un traitement de l’animal seul ne suffit pas, et qu’un traitement du logement sans traitement de l’animal non plus : il faut les deux en même temps.',
    ] },
    { titre: 'Le piège du logement resté vide', paras: [
      'Les cocons peuvent attendre longtemps. Ils réagissent aux vibrations, à la chaleur et au dioxyde de carbone, qui signalent un hôte à proximité. Au retour de vacances, ou à l’entrée dans un logement où vivait un animal, les cocons éclosent en masse et les puces affamées sautent sur la première personne qui passe : on se fait piquer aux chevilles et aux mollets.',
      'Cette situation est fréquente à la location : un locataire arrive dans un appartement propre, sans animal, et se fait piquer dès la première semaine. Le traitement est le même, dès 120 € en appartement, et la question de qui paie se pose : si les puces étaient là avant votre arrivée, le logement n’était pas exempt d’infestation.',
    ] },
    { titre: 'Puce ou autre chose ? Bien identifier avant de payer', paras: [
      'Des piqûres groupées aux chevilles évoquent les puces. Des piqûres en ligne sur les bras, le cou ou le dos, au réveil, évoquent plutôt les punaises de lit. Des démangeaisons sans piqûres visibles peuvent venir d’acariens ou d’autres causes. Le traitement et le prix ne sont pas les mêmes, d’où l’importance du diagnostic.',
      'Pour identifier une puce, posez une feuille blanche au sol ou portez des chaussettes blanches et marchez dans la pièce : les puces y sont faciles à voir. Envoyez-nous une photo, même floue, d’un insecte ou de vos piqûres : nous vous disons si c’est bien un problème de puces avant de vous proposer un traitement.',
    ] },
    { titre: 'Après le traitement : les bons gestes', paras: [
      'Dans les jours qui suivent, passez l’aspirateur tous les jours, surtout dans les pièces où dort l’animal, sous les meubles et le long des plinthes. Les vibrations font éclore les derniers cocons, et les jeunes puces sont alors éliminées par le traitement resté actif. Videz le sac ou le bac de l’aspirateur dans un sac fermé, à l’extérieur.',
      'Lavez le couchage de l’animal à haute température et continuez le traitement antiparasitaire prescrit par le vétérinaire. Si vous voyez encore quelques puces pendant une à deux semaines, c’est normal : ce sont les dernières éclosions. Si elles persistent au-delà, appelez-nous : la garantie d’un an s’applique.',
    ] },
    { titre: 'Puces dans une maison avec jardin', paras: [
      'Dans une maison, les puces peuvent se trouver à l’intérieur, dans le garage, la véranda, la niche ou l’abri où dort l’animal. Le jardin lui-même est rarement le foyer principal, sauf dans les zones ombragées et abritées où l’animal se couche. Le devis pour une maison tient compte du nombre de pièces et des annexes à traiter.',
    ] },
  ],
}
