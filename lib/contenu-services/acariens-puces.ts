import type { BlocMethodes, GuideService } from '@/components/MethodesService'

export const METHODES_ACARIENS: BlocMethodes = {
  titre: 'Traitement des acariens : vapeur sèche, cryogénie ou acaricide ?',
  intro: 'Les acariens vivent par millions dans la literie, les canapés et les tapis, et se nourrissent des peaux mortes. Notre objectif : **réduire fortement leur population** dans les textiles où vous passez le plus de temps, puis vous aider à **garder le résultat**.',
  methodes: [
    {
      nom: 'Vapeur sèche',
      titre: 'Vapeur sèche anti-acariens : matelas, sommier et canapé traités à cœur',
      accroche: 'C’est **la méthode que nous utilisons le plus** contre les acariens. Une vapeur très chaude et peu humide traverse les couches du matelas et des assises.',
      etapes: [
        'Aspiration préalable de la surface pour retirer la poussière et les déjections.',
        '**Passage lent** de la buse sur toute la surface du matelas, recto puis verso.',
        'Traitement des **coutures, capitons et plis**, où la poussière s’accumule.',
        'Passage sur oreillers, sommier tapissier, canapé, tapis et rideaux.',
        'Aération de la pièce pour un séchage rapide.',
      ],
      pourquoi: 'La chaleur agit **en profondeur, sans produit**. La chambre est utilisable dès la fin du passage.',
      limites: 'À éviter sur le cuir, certaines matières synthétiques fragiles et les tissus qui supportent mal la chaleur.',
      ideal: 'Chambres d’enfants, literie, canapés en tissu. C’est notre formule **dès 120 €** pour une chambre.',
    },
    {
      nom: 'Cryogénie',
      titre: 'Cryogénie contre les acariens : pour les textiles qui craignent la chaleur',
      accroche: 'La **neige carbonique, très froide**, est projetée sur les textiles et les recoins. Elle ne mouille pas et ne chauffe pas.',
      etapes: [
        'Projection fine sur les surfaces textiles et dans les **recoins des meubles rembourrés**.',
        'Aspiration après le passage.',
        'Aération de la pièce.',
      ],
      pourquoi: '**Aucune humidité** ajoutée : or l’humidité favorise justement les acariens.',
      limites: 'Plus longue que la vapeur sur les grandes surfaces.',
      ideal: 'Cuir, peluches, textiles fragiles, meubles anciens.',
    },
    {
      nom: 'Acaricide',
      titre: 'Pulvérisation acaricide : quand la population est très importante',
      accroche: 'Quand plusieurs pièces sont touchées, notre technicien **Certibiocide** peut appliquer un **produit acaricide professionnel**.',
      etapes: [
        'Pulvérisation sur les textiles et les surfaces concernées, selon l’étiquette du produit.',
        'Vous quittez les pièces le temps indiqué, puis vous aérez.',
      ],
      pourquoi: 'Le produit agit **plus longtemps** que la vapeur ou le froid.',
      limites: 'Moins adapté aux personnes très sensibles : nous en discutons avec vous avant.',
      ideal: 'Grands logements, locations meublées, fortes populations.',
    },
  ],
}

export const GUIDE_ACARIENS: GuideService = {
  sections: [
    {
      titre: 'Acariens dans le lit : les signes qui doivent alerter',
      texte: [
        'Les acariens sont **invisibles à l’œil nu**. On les repère à leurs effets : **nez qui coule ou bouché au réveil**, éternuements en faisant le lit, yeux qui piquent, gêne respiratoire la nuit. Ces symptômes ne remplacent pas un avis médical : en cas d’allergie, parlez-en à votre médecin.',
        'Notre traitement **réduit la population** d’acariens dans vos textiles. Il ne soigne pas une allergie, mais il fait partie des mesures recommandées pour vivre mieux.',
      ],
    },
    {
      titre: 'Comment éviter le retour des acariens après le traitement',
      texte: ['Les acariens vivent dans tous les logements. Pour garder le résultat, l’Assurance maladie (ameli.fr) conseille notamment :'],
      liste: [
        'Garder une **humidité entre 40 et 60 %**',
        'Chauffer les chambres **entre 18 et 22 °C**',
        '**Aérer au moins 10 minutes** par jour',
        'Laver la literie **à 60 °C**',
        'Utiliser des **housses anti-acariens** qui entourent le matelas',
        'Passer un **aspirateur avec filtre HEPA**',
      ],
    },
    {"titre": "Matelas plein d’acariens : faut-il le jeter ?", "texte": ["Pas forcément. Un matelas en bon état peut être **traité à la vapeur sèche** et protégé ensuite par une **housse anti-acariens intégrale**. Le remplacer sans changer les habitudes (humidité, aération) ne règle rien : un matelas neuf est colonisé en quelques mois.", "Nous vous conseillons de remplacer un matelas quand il est **très ancien, déformé ou taché d’humidité**. Sinon, le traitement suffit."]},
    {"titre": "Acariens dans le canapé, les tapis et les peluches", "texte": ["Le lit n’est pas le seul refuge. Les **canapés en tissu**, les **tapis épais**, la **moquette** et les **peluches** des enfants accumulent aussi poussière et peaux mortes. Notre technicien les traite dans la même séance.", "Pour les peluches, une astuce simple : **un passage de 24 heures au congélateur** dans un sac fermé, puis un lavage, aide à réduire les acariens entre deux traitements."]},
    {"titre": "Traitement anti-acariens pour les locations et les professionnels", "texte": ["Locations meublées, chambres d’hôtes, crèches, cabinets : nous intervenons **pièce par pièce**, avec un passage rapide à la vapeur sèche qui permet de **relouer ou rouvrir le jour même**. Contrats de passage régulier possibles."], "encadre": {"titre": "Devis gratuit", "texte": "Une chambre traitée **dès 120 €**, logement complet sur devis. Appelez le 07 68 07 72 19."}},
  ],
}

export const METHODES_PUCES: BlocMethodes = {
  titre: 'Comment on se débarrasse des puces dans une maison',
  intro: 'Les puces adultes sur votre chat ou vos chevilles ne sont que la partie visible. La plupart vivent **sous forme d’œufs, de larves et de cocons** dans les sols et les textiles. Notre traitement vise **tous les stades**, en lien avec votre vétérinaire.',
  methodes: [
    {
      nom: 'Recherche de l’origine',
      titre: 'Puces sans animal : d’où viennent-elles ?',
      accroche: 'Sans chat ni chien, des puces peuvent quand même apparaître. **Trouver l’origine évite le retour.**',
      etapes: [
        'Questions sur l’historique : **ancien occupant avec animal**, emménagement récent, retour de vacances.',
        'Inspection des **caves, combles et vides sanitaires** (rongeurs, oiseaux, chats errants).',
        'Contrôle des meubles et tapis d’occasion.',
      ],
      pourquoi: 'Si la source est un nid de rongeurs ou d’oiseaux, **traiter seulement le logement ne suffit pas**.',
      limites: 'L’origine n’est pas toujours identifiable avec certitude.',
      ideal: 'Logements sans animal, emménagements, locations.',
    },
    {
      nom: 'Insecticide professionnel',
      titre: 'Traitement anti-puces de la maison : sols, fentes et textiles',
      accroche: 'Notre technicien **Certibiocide** applique un insecticide professionnel là où se développent les larves : **à l’abri de la lumière, au ras du sol**.',
      etapes: [
        'Pulvérisation des **fentes du parquet, plinthes, tapis, moquettes** et dessous des meubles.',
        'Traitement des **canapés, fauteuils** et du **couchage de l’animal**.',
        'Selon les cas, produit associant un insecticide et un **régulateur de croissance** qui empêche les larves de devenir adultes.',
        'Vous quittez le logement le temps indiqué, puis vous aérez.',
      ],
      pourquoi: 'Le produit reste actif et touche les puces **qui sortent de leur cocon** dans les jours suivants.',
      limites: 'Le **cocon protège** la puce en formation : il faut aspirer souvent pour la faire sortir et un second passage est parfois nécessaire.',
      ideal: 'Appartements et maisons, avec ou sans animal.',
    },
    {
      nom: 'Second passage',
      titre: 'Pourquoi les puces reviennent après un premier traitement',
      accroche: 'Une puce peut **attendre longtemps dans son cocon** avant de sortir. C’est la principale cause de déception après un traitement.',
      etapes: [
        'Aspiration quotidienne pendant plusieurs semaines (sac jeté dehors).',
        'Second passage si des puces sont encore vues.',
        'Garantie d’un an.',
      ],
      pourquoi: 'On élimine les **dernières puces sorties** avant qu’elles ne pondent.',
      limites: 'Sans traitement de l’animal par le vétérinaire, le cycle repart.',
      ideal: 'Toutes les infestations.',
    },
  ],
}

export const GUIDE_PUCES: GuideService = {
  sections: [
    {
      titre: 'Piqûres de puces aux chevilles : comment les reconnaître ?',
      texte: [
        'Les puces sautent depuis le sol : les piqûres se trouvent surtout **sur les chevilles et le bas des jambes**, en petits groupes, et **démangent fortement**. Vous voyez parfois de **petits points noirs qui sautent** sur un tapis ou des chaussettes blanches.',
        'Astuce : marchez quelques minutes en **chaussettes blanches** dans la pièce suspecte. Si des points noirs s’y accrochent, ce sont probablement des puces.',
      ],
    },
    {
      titre: 'Puces au retour de vacances : pourquoi elles sortent toutes en même temps',
      texte: [
        'Pendant votre absence, les puces en formation **attendent dans leurs cocons**. À votre retour, la **chaleur, les vibrations et le gaz carbonique** que vous respirez les font sortir en masse. C’est pour cela qu’un logement semble soudain envahi.',
      ],
      encadre: {
        titre: 'Avant notre passage',
        texte: '**Aspirez tout le logement** (sac jeté dehors, fermé), **lavez à 60 °C** le couchage de l’animal et les plaids, et prenez rendez-vous chez le vétérinaire. Devis gratuit au 07 68 07 72 19.',
      },
    },
    {"titre": "Puces de chat ou de chien dans la maison : le duo vétérinaire et technicien", "texte": ["Traiter l’animal sans traiter la maison, ou l’inverse, **ne marche presque jamais**. Les puces adultes vivent sur l’animal, mais leurs œufs tombent partout où il se couche : panier, canapé, tapis, voiture.", "Le bon ordre : **le vétérinaire traite l’animal** (et les autres animaux du foyer), **nous traitons le logement le même jour ou juste après**. Pendant quelques semaines, l’animal continue de « collecter » les dernières puces qui sortent, et le produit dans la maison élimine les larves."]},
    {"titre": "Puces dans un logement neuf ou une location : qui paie ?", "texte": ["Quand les puces apparaissent **juste après un emménagement**, elles viennent souvent de l’ancien occupant et de son animal. Signalez-le **rapidement et par écrit** à votre propriétaire ou à votre agence, avec des photos des piqûres et des insectes. Nous remettons une **attestation d’intervention** que vous pourrez joindre à votre demande."]},
    {"titre": "Les erreurs qui font durer une infestation de puces", "texte": ["Ces réflexes sont très fréquents et retardent le résultat :"], "liste": ["**Arrêter d’aspirer** après le traitement : l’aspiration fait sortir les puces des cocons", "**Laver les sols à grande eau** juste après le passage : vous retirez le produit", "**Traiter un seul animal** quand il y en a plusieurs", "**Utiliser un fumigène** du commerce : il n’atteint pas les cocons"]},
  ],
}
