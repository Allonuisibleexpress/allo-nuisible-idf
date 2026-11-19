// Sections longues des pages prix (3/3) : acariens, anthrènes, désinfection. 20/11/2026.
import type { PagePrix } from './types'
type C = NonNullable<PagePrix['complements']>

export const COMPLEMENTS_C: Record<string, C> = {
  acariens: [
    { titre: 'Ce que sont vraiment les acariens de la poussière', paras: [
      'Les acariens de la poussière sont de minuscules animaux, invisibles à l’œil nu, de la famille des araignées. Ils ne piquent pas et ne transmettent pas de maladie. Ils vivent par milliers dans les matelas, les oreillers, les couettes, les canapés, les tapis et les peluches, où ils se nourrissent des petites peaux mortes que nous perdons chaque jour.',
      'Le problème vient de leurs **déjections** et des débris de leur corps, qui se mêlent à la poussière. Chez les personnes sensibles, ils peuvent provoquer ou aggraver une rhinite, une conjonctivite, de l’eczéma ou de l’asthme. Si un médecin ou un allergologue vous a parlé d’allergie aux acariens, réduire leur nombre dans la chambre est l’une des premières mesures conseillées.',
    ] },
    { titre: 'Pourquoi la chambre est la pièce à traiter en premier', paras: [
      'Nous passons environ un tiers de notre vie au lit. La chaleur du corps, l’humidité de la respiration et de la transpiration, et les peaux mortes font du matelas et de l’oreiller l’endroit le plus favorable aux acariens dans tout le logement. C’est pourquoi notre prix de départ, **dès 120 €**, porte sur une chambre : matelas, sommier et oreillers.',
      'Si la personne allergique dort dans une chambre, c’est par elle qu’il faut commencer. Les canapés, les tapis et les rideaux du salon viennent ensuite, surtout si l’on y passe beaucoup de temps ou si les enfants jouent par terre. Un logement complet est chiffré sur devis selon le nombre de couchages et de textiles.',
    ] },
    { titre: 'La vapeur sèche : comment elle agit', paras: [
      'La vapeur sèche est une vapeur très chaude et peu humide, appliquée lentement sur les surfaces. La chaleur tue les acariens et dénature une partie des allergènes, sans détremper le matelas : il sèche rapidement. Elle n’utilise **aucun produit**, ce qui en fait une méthode adaptée aux chambres d’enfants et aux personnes sensibles. C’est en ce sens qu’on peut la dire écologique : aucun biocide n’est déposé chez vous.',
      'Son efficacité dépend du temps d’application sur chaque surface : c’est ce qui fait la différence entre un passage rapide avec un appareil grand public et un traitement professionnel. Le technicien traite les deux faces du matelas quand c’est possible, les coutures, le sommier et les oreillers.',
    ] },
    { titre: 'Humidité et aération : éviter que les acariens reviennent', paras: [
      'Les acariens se développent surtout quand l’humidité de l’air est élevée. Un logement mal ventilé, des vitres embuées le matin, du linge qui sèche dans la chambre, des traces de moisissure dans les angles : autant de signes d’un air trop humide, qui permet aux acariens de se réinstaller vite après un traitement.',
      'Aérer la chambre tous les jours, même en hiver, quelques minutes fenêtre grande ouverte ; ne pas surchauffer ; vérifier que les bouches de ventilation ne sont pas bouchées ; faire sécher le linge ailleurs que dans la chambre. Si l’humidité vient du bâtiment (infiltration, ventilation en panne), c’est au propriétaire d’y remédier.',
      'Laver les draps chaque semaine à 60 °C, la couette et les oreillers régulièrement, et préférer un sol facile à nettoyer à une moquette épaisse dans la chambre complètent ces mesures. Notre article [acariens et humidité](/blog/acariens-humidite-maison) détaille ces gestes.',
    ] },
    { titre: 'Acariens, punaises de lit ou autre chose ?', paras: [
      'Beaucoup de personnes nous appellent pour des « acariens » alors qu’elles ont des piqûres. Or les acariens de la poussière ne piquent pas. Des boutons en ligne ou en groupe au réveil, sur les bras, le cou ou le dos, font plutôt penser aux punaises de lit ; des piqûres aux chevilles, aux puces.',
      'Bien identifier le problème évite de payer le mauvais traitement : un traitement anti-acariens ne règle pas des punaises de lit, et l’inverse non plus. Une photo de vos boutons, de taches sur le matelas ou d’un insecte nous permet de vous orienter gratuitement.',
    ] },
    { titre: 'Pour les professionnels : hôtels, crèches, locations meublées', paras: [
      'Dans les hôtels, les locations meublées et les crèches, la literie et les textiles sont utilisés par de nombreuses personnes. Un traitement à la vapeur sèche entre deux occupants, ou périodiquement, améliore le confort des clients et des enfants, sans produit. Ces interventions sont sur devis, selon le nombre de lits et la fréquence souhaitée.',
    ] },
  ],

  anthrenes: [
    { titre: 'L’anthrène, un insecte qu’on voit sur la fenêtre', paras: [
      'L’anthrène adulte est un petit coléoptère rond, de quelques millimètres, tacheté de blanc, de jaune et de brun. Au printemps et en été, on le voit souvent sur les rebords de fenêtres : il cherche à sortir pour aller se nourrir du pollen des fleurs. Lui ne fait aucun dégât.',
      'Ce sont ses **larves** qui posent problème. Petites, brunes, couvertes de poils, elles vivent cachées et se nourrissent de matières animales : laine, soie, cuir, plumes, fourrure, poils, insectes morts. Elles trouent les pulls, les tapis, les couvertures, et peuvent abîmer des collections d’insectes ou d’objets naturalisés dans les musées. Voir [le cycle de vie de l’anthrène](/blog/cycle-de-vie-anthrene).',
    ] },
    { titre: 'Trouver le foyer : là où se joue le prix', paras: [
      'Le traitement des anthrènes est d’abord une enquête. Les femelles pondent là où les larves trouveront à manger : un **nid d’oiseau** abandonné sous le toit ou dans une cheminée, un vieux tapis en laine sous un meuble, un carton de vêtements oublié au fond d’un placard, des insectes morts accumulés dans un faux plafond ou derrière une plinthe.',
      'Tant que ce foyer reste en place, les larves reviennent, même après un traitement des pièces. C’est pourquoi le temps de recherche compte autant que le traitement lui-même, et pourquoi un foyer dans les combles ou sous la toiture fait passer le prix sur devis. Dans une seule pièce, avec un foyer visible, le tarif de départ s’applique.',
    ] },
    { titre: 'Anthrènes et mites : les distinguer', paras: [
      'Les mites des vêtements et les anthrènes font le même type de dégâts sur la laine, mais ne se ressemblent pas. La mite adulte est un petit papillon beige qui fuit la lumière ; sa larve, blanche et lisse, tisse parfois de petits fourreaux. La larve d’anthrène, elle, est brune et velue, et laisse des mues vides derrière elle.',
      'Les mites alimentaires, enfin, sont un tout autre problème : elles vivent dans les placards de cuisine, dans la farine, les céréales ou les fruits secs. Une photo nous permet de vous dire de quoi il s’agit. Voir [mites des vêtements](/blog/mites-vetements-origine-traitement-prevention) et [mites alimentaires](/blog/mites-alimentaires-cuisine).',
    ] },
    { titre: 'Avec ou sans insecticide : protéger les objets fragiles', paras: [
      'Pour les plinthes, les fentes du parquet et les recoins où vivent les larves, un insecticide ciblé, appliqué par un technicien certifié, donne de bons résultats. Pour les textiles et les objets de valeur, nous préférons les méthodes sans produit : vapeur sèche sur les tapis et les tissus qui la supportent, froid pour les objets fragiles.',
      'Les vêtements touchés peuvent souvent être sauvés : lavage à haute température quand la fibre le permet, ou passage au congélateur dans un sac fermé pour les lainages délicats. Le technicien vous indique ce qui peut être traité et ce qui doit être jeté.',
    ] },
    { titre: 'Les gestes qui évitent le retour des anthrènes', paras: [
      'Aspirer régulièrement sous les meubles, le long des plinthes et sous les tapis, là où s’accumulent poils et poussières. Ranger les lainages propres dans des housses fermées. Aérer et secouer les vêtements stockés longtemps. Retirer les nids d’oiseaux des toitures et des cheminées, ou les faire retirer.',
      'Au printemps, poser une moustiquaire sur les fenêtres limite l’entrée des adultes qui viennent pondre. Et si vous voyez plusieurs petits insectes ronds sur une fenêtre, c’est le moment de chercher le foyer, avant que les larves ne s’étendent à d’autres pièces.',
    ] },
    { titre: 'Pour les professionnels : boutiques, hôtels, collections', paras: [
      'Les boutiques de vêtements, les hôtels avec moquettes, les magasins de tapis et les collections (musées, naturalistes, particuliers) sont particulièrement exposés. Nous proposons une inspection, un traitement adapté aux objets à protéger et des conseils de surveillance. Ces interventions sont sur devis.',
    ] },
  ],

  desinfection: [
    { titre: 'Dans quels cas faut-il une désinfection ?', paras: [
      'Une désinfection professionnelle se justifie quand le nettoyage habituel ne suffit plus à rendre un lieu sain. C’est le cas après une infestation importante de rongeurs, dont les déjections et l’urine peuvent porter des germes ; après un dégât des eaux qui a laissé des moisissures ; dans un logement très encombré ou insalubre ; après un décès découvert tardivement ; ou dans un local professionnel soumis à des obligations d’hygiène.',
      'Dans tous ces cas, il s’agit d’abord de retirer ce qui est souillé, puis de nettoyer, et seulement ensuite de désinfecter les surfaces et l’air. Une désinfection appliquée sur des déchets ou de la saleté n’a pas d’effet durable : c’est pourquoi le prix dépend tant de l’état des lieux.',
    ] },
    { titre: 'Le logement très encombré : un chantier en plusieurs étapes', paras: [
      'À Maisons-Alfort, une mairie nous a confié un logement envahi par les déchets et par les rats. Le chantier s’est fait dans l’ordre : **dératisation** d’abord, pour ne pas disperser les rongeurs ; puis **débarras** et évacuation ; puis **nettoyage** ; puis **désinfection** des surfaces. Le récit complet, photos et vidéos à l’appui, est sur notre blog.',
      'Ce type de situation, parfois appelée syndrome de Diogène, demande de la discrétion vis-à-vis de l’occupant et du voisinage, et une coordination avec la famille, le bailleur ou les services de la ville. Le prix est toujours sur devis, après une visite, parce que le volume à évacuer et l’état des lieux varient énormément.',
    ] },
    { titre: 'Ce que contient l’attestation de désinfection', paras: [
      'Après l’intervention, nous remettons une attestation qui indique l’adresse, la date, la nature de l’intervention, les zones traitées et les produits utilisés. Ce document est souvent demandé par un bailleur avant la relocation, par une assurance après un sinistre, par une mairie dans le cadre d’une procédure d’insalubrité, ou par un professionnel lors d’un contrôle d’hygiène.',
      'Demandez toujours ce document : une désinfection sans attestation ne vous sera d’aucune aide si l’on vous demande de prouver que le logement ou le local a été traité.',
    ] },
    { titre: 'Les produits utilisés, et les précautions', paras: [
      'La désinfection se fait avec des **produits biocides professionnels**, appliqués par pulvérisation sur les surfaces ou par nébulisation dans l’air, par un technicien équipé et certifié. Ce sont des produits actifs, qui demandent des précautions : les occupants et les animaux doivent quitter les lieux pendant l’intervention et pendant le temps indiqué par le technicien, puis aérer avant de revenir.',
      'Nous ne qualifions jamais un biocide de « naturel » ni de « sans danger » : la réglementation l’interdit, et c’est une question d’honnêteté. Le technicien vous explique les consignes adaptées au produit utilisé.',
    ] },
    { titre: 'Désinfection après une infestation de nuisibles', paras: [
      'Après une dératisation, les zones où vivaient les rongeurs (caves, faux plafonds, arrière des meubles de cuisine) peuvent être souillées de crottes et d’urine. Il ne faut pas les balayer à sec, ce qui met en suspension des poussières contaminées : on humidifie, on ramasse avec des gants, puis on désinfecte.',
      'Pour une petite zone, nos conseils suffisent souvent. Pour une cave ou un local très souillé, une désinfection professionnelle est plus sûre. Elle peut être réalisée dans la foulée de la dératisation, et chiffrée dans le même devis.',
    ] },
    { titre: 'Pour les professionnels et les collectivités', paras: [
      'Restaurants, commerces de bouche, locaux techniques, logements sociaux, bâtiments publics : nous intervenons en dehors des heures d’activité, avec attestation. Pour les bailleurs et les communes, nous coordonnons dératisation, débarras, nettoyage et désinfection quand plusieurs étapes sont nécessaires. Voir [mairies et collectivités](/mairies-collectivites) et [professionnels](/professionnels).',
    ] },
  ],
}
