// Questions supplémentaires et sections longues des pages prix (4/4), 20/11/2026 : objectif 3 000 mots par page.
import type { PagePrix } from './types'
type C = NonNullable<PagePrix['complements']>
type F = { q: string; a: string }[]

export const FAQ_PLUS: Record<string, F> = {
  cafards: [
    { q: 'Comment savoir si j’ai des cafards ou des blattes ?', a: 'C’est le même insecte : « cafard » est le nom courant, « blatte » le nom scientifique. En cuisine, il s’agit le plus souvent de la blatte germanique, petite et brun clair.' },
    { q: 'Les cafards peuvent-ils venir d’un appareil d’occasion ?', a: 'Oui. Un réfrigérateur, un micro-ondes ou des cartons venant d’un logement infesté peuvent transporter des blattes ou des oothèques. Inspectez-les avant de les installer.' },
    { q: 'Faut-il vider toute la cuisine avant votre passage ?', a: 'Non. Videz le dessous de l’évier et les placards bas, et rangez la nourriture dans des boîtes fermées. Le technicien vous dit le reste.' },
    { q: 'Combien de temps avant de ne plus voir de cafards ?', a: 'Avec le gel, les cafards disparaissent progressivement en quelques jours à quelques semaines. Le second passage traite les dernières éclosions.' },
  ],
  fourmis: [
    { q: 'Les fourmis ailées sont-elles des termites ?', a: 'Pas forcément. Les fourmis ailées ont une taille fine et des antennes coudées ; les termites ailés ont un corps plus droit. Une photo permet de faire la différence.' },
    { q: 'Faut-il traiter le jardin pour des fourmis dans la maison ?', a: 'Souvent oui, car la colonie se trouve dehors. En appartement, le traitement des pistes intérieures suffit en général.' },
    { q: 'Le traitement abîme-t-il la terrasse ou les plantes ?', a: 'Non, le gel est posé en petites quantités dans les fissures et sur les pistes, pas pulvérisé sur les plantes.' },
    { q: 'Les fourmis peuvent-elles revenir l’année suivante ?', a: 'Une nouvelle colonie peut s’installer. Reboucher les fissures et ne pas laisser de nourriture accessible limite ce risque. Pendant la garantie d’un an, nous revenons.' },
    { q: 'Que faire en attendant votre passage ?', a: 'Essuyez les pistes avec de l’eau savonneuse dans la cuisine, rangez le sucre et les fruits, et ne pulvérisez rien sur les pistes : le gel marchera mieux.' },
    { q: 'Intervenez-vous pour des fourmis dans un restaurant ?', a: 'Oui, hors des heures d’ouverture, avec des appâts hors des zones de préparation et une attestation.' },
  ],
  'guepes-frelons': [
    { q: 'Peut-on rester dans la maison pendant l’intervention ?', a: 'Oui, en restant à l’intérieur, fenêtres fermées du côté du nid. Le technicien sécurise la zone.' },
    { q: 'Le produit est-il dangereux pour mon chien ou mon chat ?', a: 'Le produit est injecté dans le nid, pas répandu dans le jardin. Gardez les animaux à l’intérieur pendant l’intervention et quelques heures après.' },
    { q: 'Que faire si je suis piqué ?', a: 'Retirez-vous du nid, refroidissez la piqûre. En cas de gonflement important, de malaise ou de difficulté à respirer, appelez le 15 immédiatement.' },
    { q: 'Détruisez-vous les nids d’abeilles ?', a: 'Non. Les abeilles sont protégées : pour un essaim, contactez un apiculteur. Nous vous aidons à faire la différence sur photo.' },
    { q: 'Un nid dans le sol, est-ce possible ?', a: 'Oui, certaines guêpes nichent dans le sol, dans d’anciens terriers. On les repère au va-et-vient près d’un trou. Le prix est celui d’un nid accessible.' },
  ],
  'chenilles-processionnaires': [
    { q: 'Faut-il couper l’arbre ?', a: 'Non, dans la grande majorité des cas. Le retrait des nids et les écopièges suffisent à protéger le jardin.' },
    { q: 'Les nids vides sont-ils dangereux ?', a: 'Oui, ils contiennent encore des poils urticants. Ne les touchez pas sans protection.' },
    { q: 'Mon enfant a touché une chenille : que faire ?', a: 'Ne frottez pas, rincez abondamment à l’eau, changez les vêtements. En cas de réaction des yeux ou de gêne respiratoire, consultez un médecin.' },
    { q: 'Les pièges à phéromones suffisent-ils seuls ?', a: 'Non, ils réduisent la ponte de l’année suivante mais ne retirent pas les nids existants. Ils complètent le retrait des nids.' },
    { q: 'Intervenez-vous dans les copropriétés et les écoles ?', a: 'Oui, hors présence du public, avec un devis arbre par arbre.' },
    { q: 'La garantie couvre-t-elle les nouveaux nids l’hiver suivant ?', a: 'La garantie porte sur les arbres traités. Les écopièges et les phéromones limitent la réinfestation des années suivantes.' },
  ],
  pigeons: [
    { q: 'Combien de temps dure un filet anti-pigeons ?', a: 'Un filet de qualité, bien posé, dure plusieurs années. Les pics inox ne s’usent quasiment pas.' },
    { q: 'Peut-on retirer un nid de pigeon avec des œufs ?', a: 'C’est encadré : mieux vaut attendre ou nous demander conseil. Le plus simple est de protéger le balcon avant la ponte.' },
    { q: 'Les pigeons transmettent-ils des maladies ?', a: 'Leurs fientes peuvent porter des germes. Il faut les retirer avec un masque, en humidifiant, puis désinfecter.' },
    { q: 'Le filet empêche-t-il d’utiliser le balcon ?', a: 'Non, il ferme l’ouverture vers l’extérieur, vous profitez toujours du balcon. Un accès peut être prévu pour l’entretien.' },
    { q: 'Les pics sont-ils visibles de la rue ?', a: 'Très peu : ils sont fins, en inox, et posés sur les rebords.' },
    { q: 'Que faire si le voisin nourrit les pigeons ?', a: 'Parlez-en au syndic : nourrir les pigeons est souvent interdit par le règlement sanitaire ou le règlement de copropriété, car cela attire aussi les rats.' },
    { q: 'Intervenez-vous sur les bâtiments publics ?', a: 'Oui : mairies, écoles, gymnases, halles. Voir notre page mairies et collectivités.' },
  ],
  puces: [
    { q: 'Le traitement contre les puces sent-il fort ?', a: 'Une légère odeur peut rester quelques heures. Aérez la pièce au retour, selon les consignes du technicien ; elle disparaît rapidement.' },
    { q: 'Mon chat ne sort jamais : comment a-t-il des puces ?', a: 'Les puces peuvent entrer sur vos chaussures, venir d’un autre animal en visite, ou d’œufs restés dans le logement. Un chat d’intérieur peut donc en avoir.' },
    { q: 'Les puces de chat piquent-elles les humains ?', a: 'Oui. Elles préfèrent l’animal, mais piquent les humains, surtout aux chevilles, quand elles sont nombreuses ou affamées.' },
    { q: 'Faut-il jeter le panier de l’animal ?', a: 'Pas forcément : lavez-le à haute température s’il le supporte. Sinon, il peut être traité ou remplacé.' },
    { q: 'Les puces vivent-elles dans les lits ?', a: 'Elles peuvent s’y trouver si l’animal y dort. Lavez les draps à 60 °C et traitez la chambre.' },
    { q: 'Le traitement est-il compatible avec un bébé ?', a: 'Le technicien adapte les consignes : le bébé et les animaux quittent les lieux pendant le traitement et le temps indiqué, puis on aère.' },
    { q: 'Combien de temps les puces survivent-elles sans animal ?', a: 'Les adultes peu de temps, mais les cocons peuvent attendre longtemps qu’un hôte passe. C’est pourquoi un logement vide peut rester infesté.' },
    { q: 'Intervenez-vous dans les locations meublées ?', a: 'Oui, entre deux occupants, avec une attestation pour le propriétaire.' },
    { q: 'Les puces peuvent-elles venir du jardin ?', a: 'Rarement directement. Elles viennent le plus souvent de l’animal ou d’un ancien occupant. Les annexes où dort l’animal sont à traiter.' },
  ],
  acariens: [
    { q: 'Le traitement est-il utile si je n’ai pas d’allergie ?', a: 'Il améliore l’hygiène de la literie, mais il est surtout conseillé aux personnes sensibles ou allergiques, sur avis médical.' },
    { q: 'Peut-on traiter un canapé en cuir ?', a: 'Le cuir supporte mal la vapeur. Le technicien adapte la méthode, ou se concentre sur les coussins et les textiles.' },
    { q: 'Faut-il quitter le logement pendant le traitement ?', a: 'Avec la vapeur sèche, ce n’est pas nécessaire : il suffit de laisser le technicien travailler dans la chambre et d’aérer ensuite.' },
    { q: 'Le traitement supprime-t-il tous les acariens ?', a: 'Il en élimine une grande partie, mais les acariens font partie de toute maison habitée. Les bons gestes (aération, lavage, humidité basse) limitent leur retour.' },
    { q: 'Combien de temps faut-il pour que le matelas sèche ?', a: 'La vapeur sèche est peu humide : le matelas sèche rapidement. Aérez la pièce après le passage.' },
    { q: 'Faut-il acheter des housses anti-acariens ?', a: 'Elles peuvent aider les personnes allergiques, sur conseil d’un médecin. Elles complètent le traitement.' },
    { q: 'Traitez-vous les peluches des enfants ?', a: 'Oui, si elles supportent la vapeur. Vous pouvez aussi les passer au congélateur dans un sac fermé, puis les laver.' },
    { q: 'Un purificateur d’air suffit-il ?', a: 'Non, les acariens vivent dans les textiles, pas dans l’air. Le purificateur peut réduire les allergènes en suspension, mais ne traite pas la literie.' },
    { q: 'Tous les combien faut-il refaire un traitement ?', a: 'Cela dépend de l’humidité du logement et des allergies. Beaucoup de familles le refont selon les besoins, en complément des gestes du quotidien.' },
    { q: 'Les acariens donnent-ils des boutons ?', a: 'Ils ne piquent pas. Des boutons en ligne évoquent plutôt les punaises de lit ; envoyez-nous une photo.' },
  ],
  anthrenes: [
    { q: 'Les anthrènes sont-elles dangereuses pour la santé ?', a: 'Elles ne piquent pas et ne transmettent pas de maladie, mais les poils des larves peuvent irriter la peau de certaines personnes.' },
    { q: 'Combien de temps dure une infestation sans traitement ?', a: 'Tant que le foyer reste en place, les larves se développent et de nouveaux adultes apparaissent chaque printemps.' },
    { q: 'Le congélateur tue-t-il les larves ?', a: 'Oui, un passage prolongé au congélateur, dans un sac bien fermé, est une méthode douce pour les lainages et les petits objets.' },
    { q: 'Comment reconnaître une larve d’anthrène ?', a: 'Elle est petite, brune, allongée et couverte de poils, avec une touffe à l’arrière. On trouve aussi ses mues vides.' },
    { q: 'Les anthrènes peuvent-elles être dans le lit ?', a: 'Oui, dans les couvertures en laine ou les oreillers en plumes. Leurs poils peuvent irriter la peau et être confondus avec des piqûres.' },
    { q: 'Les anthrènes mangent-elles le coton ?', a: 'Rarement : elles préfèrent les fibres animales (laine, soie, cuir, plumes). Un tissu mixte peut être touché.' },
    { q: 'Faut-il jeter les vêtements troués ?', a: 'Pas toujours : lavez ou congelez ceux que vous gardez avant de les ranger dans des housses fermées.' },
    { q: 'Un nid d’oiseau peut-il vraiment causer l’infestation ?', a: 'Oui, c’est l’une des origines les plus fréquentes : les larves s’y nourrissent de plumes et de débris, puis gagnent les pièces.' },
    { q: 'Les anthrènes reviennent-elles chaque printemps ?', a: 'Si le foyer n’a pas été trouvé, oui. D’où l’importance de la recherche et de la prévention.' },
    { q: 'Le traitement abîme-t-il les tapis ?', a: 'Non, nous adaptons la méthode aux matières : vapeur sur ce qui la supporte, froid ou traitement ciblé pour le reste.' },
    { q: 'Intervenez-vous pour un musée ou une collection ?', a: 'Oui, sur devis, avec des méthodes douces adaptées aux objets.' },
  ],
  desinfection: [
    { q: 'Quelle différence entre nettoyage et désinfection ?', a: 'Le nettoyage retire la saleté ; la désinfection élimine les germes sur des surfaces déjà propres. Les deux se suivent.' },
    { q: 'Combien de temps dure une désinfection ?', a: 'Pour un studio, le temps est court ; pour un logement encombré, le débarras et le nettoyage prennent l’essentiel du temps. Le devis l’indique.' },
    { q: 'Désinfectez-vous après un décès ?', a: 'Oui, avec discrétion, en coordination avec la famille ou le bailleur. Le prix est sur devis après visite.' },
    { q: 'Désinfectez-vous après un dégât des eaux ?', a: 'Oui, une fois l’eau évacuée et les matériaux humides retirés, pour limiter les moisissures. L’assurance peut demander l’attestation.' },
    { q: 'Désinfectez-vous les véhicules ou les caves ?', a: 'Les caves et locaux techniques, oui. Pour un véhicule, demandez-nous : cela dépend de la situation.' },
    { q: 'Puis-je rester pendant la désinfection ?', a: 'Non, les occupants et les animaux quittent les lieux pendant l’intervention et le temps indiqué, puis on aère.' },
    { q: 'Intervenez-vous à la demande d’une mairie ou d’un bailleur ?', a: 'Oui, nous l’avons fait à Maisons-Alfort, avec rapport et attestation.' },
    { q: 'La désinfection élimine-t-elle aussi les nuisibles ?', a: 'Non, ce sont deux traitements différents : il faut d’abord traiter les rongeurs ou les insectes, puis désinfecter.' },
  ],
}

export const COMPLEMENTS_D: Record<string, C> = {
  pigeons: [
    { titre: 'Dépigeonnage à Paris et en petite couronne : les situations typiques', paras: [
      'Dans les immeubles haussmanniens, les pigeons nichent sur les balcons filants, dans les angles des corniches et derrière les jardinières. Dans les résidences récentes, ce sont les loggias et les balcons des derniers étages qui sont visés, souvent abrités du vent. Dans les pavillons, ils se logent sous les tuiles, dans les gouttières et sur les rebords des lucarnes.',
      'Chaque situation appelle une protection différente : pics sur les rebords et les corniches, filet pour les loggias et les balcons fermés, grillage ou peignes sous les tuiles. Le prix de départ, **dès 150 €**, correspond à un balcon ou à un rebord standard ; une façade, une toiture ou une cour sont chiffrées sur devis après avoir vu les lieux.',
    ] },
    { titre: 'Pourquoi un dépigeonnage mal posé ne sert à rien', paras: [
      'Les pigeons sont patients et ingénieux. Un filet mal tendu, avec un jour de quelques centimètres en haut ou sur le côté, leur suffit pour entrer. Des pics posés seulement sur la moitié d’un rebord les poussent à se poser sur l’autre moitié. Une protection posée là où ils ne se posent pas ne sert à rien.',
      'Notre technicien commence donc par repérer les perchoirs réels, grâce aux traces de fientes et aux plumes, puis pose une protection continue. Si les pigeons trouvent malgré tout un passage, nous revenons ajuster.',
    ] },
  ],
  puces: [
    { titre: 'Puces et animaux de compagnie : travailler avec le vétérinaire', paras: [
      'Le traitement de l’animal relève du vétérinaire, qui choisit un antiparasitaire adapté à l’espèce, au poids et à l’âge. Il est important de ne jamais utiliser sur un chat un produit destiné au chien : certains sont dangereux pour les chats.',
      'De notre côté, nous traitons le logement le même jour ou dans les jours qui suivent le traitement de l’animal. Ainsi, les puces qui sortent des cocons ne trouvent plus d’hôte et meurent, et l’animal ne ramène pas de nouvelles puces dans un logement propre. Si vous avez plusieurs animaux, tous doivent être traités en même temps.',
    ] },
  ],
  acariens: [
    { titre: 'Le matelas : garder, traiter ou remplacer ?', paras: [
      'Un matelas en bon état peut être traité à la vapeur sèche et gardé. Un matelas très ancien, affaissé, taché ou qui a pris l’humidité concentre beaucoup d’acariens et d’allergènes dans sa profondeur : même traité, il peut rester une source d’allergie. Dans ce cas, le technicien vous le dit franchement.',
      'Si vous remplacez votre matelas, faites traiter le sommier et les oreillers en même temps, et protégez le nouveau matelas avec une alèse lavable. Le traitement de la chambre entière reste au prix de départ, **dès 120 €**.',
    ] },
  ],
  anthrenes: [
    { titre: 'Anthrènes et punaises de lit : ne pas confondre', paras: [
      'Les poils des larves d’anthrène peuvent provoquer de petites plaques qui démangent, que l’on confond parfois avec des piqûres de punaises de lit. Les deux problèmes n’ont pourtant rien à voir : les punaises piquent la nuit et laissent des traces noires sur le matelas, les anthrènes ne piquent pas et laissent des mues velues et des trous dans la laine.',
      'Un traitement des punaises de lit coûte dès 290 €, un traitement des anthrènes dès 120 € : se tromper de diagnostic, c’est payer le mauvais traitement. Envoyez-nous une photo avant toute intervention.',
    ] },
  ],
  desinfection: [
    { titre: 'Le prix d’une désinfection, poste par poste', paras: [
      'Pour un studio dont l’état ne demande qu’une désinfection des surfaces, le prix démarre à **150 €**, attestation comprise. Au-delà, le devis détaille chaque poste : la surface à désinfecter, le besoin de traiter l’air en plus des surfaces, le nettoyage préalable, le débarras et l’évacuation des déchets, et l’éventuel traitement des nuisibles.',
      'Cette décomposition vous permet de savoir exactement ce que vous payez, et de choisir ce que vous faites vous-même (par exemple le tri et une partie du débarras) pour réduire la facture.',
    ] },
  ],
}
