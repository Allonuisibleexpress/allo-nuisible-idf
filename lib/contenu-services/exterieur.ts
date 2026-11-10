import type { BlocMethodes, GuideService } from '@/components/MethodesService'

// Chenilles processionnaires, pigeons, désinfection

export const METHODES_CHENILLES: BlocMethodes = {
  titre: 'Chenilles processionnaires : nos 3 méthodes selon la saison',
  intro: 'Contre les processionnaires, **le calendrier compte autant que la méthode**. Notre technicien choisit selon l’espèce (du pin ou du chêne), la hauteur des nids et le moment de l’année.',
  methodes: [
    {
      nom: 'Échenillage',
      titre: 'Retrait des nids de chenilles processionnaires du pin, en hiver',
      accroche: 'Les nids blancs et soyeux sont **coupés et détruits** avant que les chenilles ne descendent de l’arbre.',
      etapes: [
        'Technicien équipé : **combinaison, gants, masque et lunettes** contre les poils urticants.',
        'Coupe des branches portant les nids, **à la perche télescopique** quand ils sont en hauteur.',
        'Mise en sac fermé et **destruction**, sans laisser les poils se disperser.',
        'Contrôle des arbres voisins.',
      ],
      pourquoi: 'On élimine **la colonie entière d’un coup**, avant la procession.',
      limites: 'Les nids très hauts dans un grand pin demandent du matériel spécifique (devis sur mesure).',
      ideal: 'Pins et cèdres de jardins, résidences, écoles, de l’automne à la fin de l’hiver.',
    },
    {
      nom: 'Collier piège',
      titre: 'Collier écopiège : capturer les chenilles qui descendent du tronc',
      accroche: 'Un **collier posé autour du tronc** intercepte les chenilles pendant leur procession et les guide dans un sac.',
      etapes: [
        'Pose **avant la descente** des chenilles, en fin d’hiver.',
        'Collier ajusté au diamètre du tronc, sans abîmer l’écorce.',
        'Retrait et destruction du sac une fois la procession terminée.',
      ],
      pourquoi: 'Les chenilles ne s’enterrent pas au sol pour se transformer : **le cycle est coupé**.',
      limites: 'N’agit que sur l’arbre équipé et seulement pendant la descente.',
      ideal: 'Pins isolés près d’une maison, d’une aire de jeux ou d’un passage de chien.',
    },
    {
      nom: 'Pièges à phéromones',
      titre: 'Pièges à phéromones : moins de chenilles l’année suivante',
      accroche: 'En été, des pièges attirent **les papillons mâles**, qui ne peuvent plus féconder les femelles.',
      etapes: [
        'Pose au début de l’été, dans les arbres touchés.',
        'Relevé des captures et remplacement de la capsule.',
      ],
      pourquoi: 'Moins de pontes, donc **moins de nids l’hiver suivant**.',
      limites: 'Méthode de fond : elle complète le retrait des nids, elle ne le remplace pas.',
      ideal: 'Propriétés avec plusieurs pins, copropriétés, suivi sur plusieurs années.',
    },
  ],
}

export const GUIDE_CHENILLES: GuideService = {
  sections: [
    {
      titre: 'Chenilles processionnaires et chiens : pourquoi c’est une urgence',
      texte: [
        'Un chien qui renifle ou lèche une procession peut subir une **réaction grave de la langue et de la bouche**. Si votre chien bave, se gratte la gueule ou a la langue gonflée, **contactez immédiatement un vétérinaire**. Chez l’humain, les poils provoquent démangeaisons, rougeurs et irritations des yeux.',
        'Les poils restent urticants **longtemps**, même dans un nid vide ou au sol. Ne touchez jamais un nid vous-même.',
      ],
    },
    {
      titre: 'Processionnaire du pin ou du chêne : comment les distinguer ?',
      texte: [
        'La **processionnaire du pin** fait des nids blancs, en boule, **au bout des branches** de pins et de cèdres, visibles en hiver. La **processionnaire du chêne** tisse des nids plaqués **contre le tronc ou les grosses branches** des chênes, au printemps et au début de l’été.',
      ],
      encadre: {
        titre: 'Le bon moment pour nous appeler',
        texte: 'Pour le pin, **dès que vous voyez les nids en hiver**, avant la descente des chenilles. Devis gratuit **dès 89 €** au 07 68 07 72 19.',
      },
    },
    {"titre": "Calendrier : quand traiter les chenilles processionnaires du pin ?", "texte": ["**Automne et hiver** : les nids sont bien visibles, c’est le moment de les retirer. **Fin d’hiver** : on pose les colliers pièges avant la descente en procession. **Été** : on installe les pièges à phéromones contre les papillons.", "Attendre le printemps, c’est risquer de voir les chenilles **déjà descendues au sol**, au moment où les enfants et les chiens profitent du jardin."]},
    {"titre": "Chenilles processionnaires en copropriété, école ou parc", "texte": ["Dans les résidences avec espaces verts, les écoles et les crèches, nous intervenons **en dehors des heures de passage**, avec un **balisage** de la zone et un **rapport d’intervention** pour le gestionnaire. Un suivi sur plusieurs saisons permet de réduire durablement le nombre de nids."]},
    {"titre": "Prévenir les processionnaires : les gestes qui aident", "texte": ["Aucune méthode seule ne suffit, mais plusieurs gestes réduisent les infestations d’une année sur l’autre :"], "liste": ["**Installer des nichoirs à mésanges**, qui mangent les chenilles", "**Retirer les nids chaque hiver**, sans attendre", "**Équiper les pins exposés** d’un collier piège", "**Choisir d’autres essences** que le pin pour de nouvelles plantations près des lieux de passage"]},
  ],
}

export const METHODES_PIGEONS: BlocMethodes = {
  titre: 'Dépigeonnage : quelle protection pour quel endroit ?',
  intro: 'Le but n’est pas de tuer les pigeons mais de **les empêcher de se poser et de nicher** chez vous. Notre technicien choisit la protection selon la zone, l’accès et l’aspect de votre façade.',
  methodes: [
    {
      nom: 'Pics anti-pigeons',
      titre: 'Pics anti-pigeons en inox : rebords, corniches et gouttières',
      accroche: 'Des rangées de **pics en inox** empêchent les pigeons de se poser, sans les blesser.',
      etapes: [
        '**Nettoyage** de la surface (fientes, nids abandonnés) avant toute pose.',
        'Choix de la **largeur de pics** selon la profondeur du rebord.',
        'Collage ou vissage, en couvrant **toute la largeur** pour ne laisser aucun espace libre.',
      ],
      pourquoi: 'Durable, discret vu de la rue, **sans entretien**.',
      limites: 'Peu adapté aux grandes surfaces planes comme un balcon entier.',
      ideal: 'Rebords de fenêtres, corniches, enseignes, poutres, gouttières.',
    },
    {
      nom: 'Filet',
      titre: 'Filet anti-pigeons pour balcon ou cour : une protection totale',
      accroche: 'Un **filet tendu sur mesure** ferme l’accès à une zone entière.',
      etapes: [
        'Mesure précise de l’ouverture et pose de **câbles de tension** périphériques.',
        'Filet **haute résistance** découpé aux dimensions, fixé sans plis.',
        'Accès de service prévu si besoin (porte ou fermeture).',
      ],
      pourquoi: 'Plus aucun pigeon ne peut entrer : **ni pose, ni nid**.',
      limites: 'Visible de près ; peut demander l’accord de la copropriété.',
      ideal: 'Balcons, loggias, cours intérieures, puits de lumière.',
    },
    {
      nom: 'Nettoyage des fientes',
      titre: 'Nettoyage et désinfection de fientes de pigeons',
      accroche: 'Les fientes **acides** abîment les matériaux et peuvent transmettre des maladies quand elles sèchent et se transforment en poussière.',
      etapes: [
        'Technicien **protégé** (masque, gants, combinaison).',
        'Humidification pour **éviter la poussière**, raclage et mise en sacs.',
        'Désinfection de la zone avant la pose des protections.',
      ],
      pourquoi: 'Une zone propre est **moins attirante** pour les pigeons, et la pose tient mieux.',
      limites: 'Les dégâts déjà causés aux matériaux (pierre, zinc) ne disparaissent pas.',
      ideal: 'Balcons abandonnés, combles, rebords très encrassés.',
    },
  ],
}

export const GUIDE_PIGEONS: GuideService = {
  sections: [
    {
      titre: 'Pigeons sur le balcon : pourquoi ils reviennent toujours',
      texte: [
        'Un pigeon est **fidèle à son lieu de repos et de nidification**. Le chasser ne suffit pas : il revient le soir même. Seule une **barrière physique** (pics ou filet) règle le problème durablement.',
        'Ne nourrissez jamais les pigeons : c’est le premier facteur qui les fixe dans un quartier.',
      ],
      encadre: {
        titre: 'Devis gratuit, protection garantie',
        texte: 'Pose **dès 150 €** pour un balcon ou un rebord. Envoyez-nous une photo au 07 68 07 72 19.',
      },
    },
    {"titre": "Fientes de pigeons : quels risques pour la santé ?", "texte": ["Les fientes séchées se transforment en **poussière que l’on respire**. Elles peuvent transmettre des maladies, comme l’**ornithose**, et attirent des parasites (puces, acariens d’oiseaux) qui finissent parfois par entrer dans le logement par une fenêtre ou une bouche d’aération.", "Ne balayez jamais des fientes sèches à mains nues et sans masque : **humidifiez d’abord**, ou laissez-nous faire."]},
    {"titre": "Nid de pigeons sur le balcon : que faire ?", "texte": ["Un nid sur un balcon signifie que les pigeons ont adopté l’endroit. Retirer le nid ne suffit pas : **ils reconstruisent au même endroit**. Notre technicien nettoie la zone, puis pose la protection adaptée pour qu’aucun nouveau nid ne puisse s’installer."]},
    {"titre": "Pics, filet ou câble : comment choisir ?", "texte": ["Le choix dépend surtout de **la forme de la zone** à protéger :"], "liste": ["**Rebord étroit, corniche, enseigne** : pics en inox", "**Balcon, loggia, cour** : filet sur mesure", "**Façade ancienne ou classée** : dispositif discret, étudié au cas par cas", "**Toiture, combles** : fermeture des accès et grillage"]},
    {"titre": "Dépigeonnage en copropriété, commerce ou entrepôt", "texte": ["Pour les façades d’immeubles, les cours, les quais de chargement et les enseignes, nous établissons un **devis détaillé** après visite, avec le matériel nécessaire pour travailler en hauteur. Les installations sont **garanties contre les défauts de pose**."]},
  ],
}

export const METHODES_DESINFECTION: BlocMethodes = {
  titre: 'Désinfection professionnelle : pulvérisation, nébulisation ou essuyage ?',
  intro: 'Désinfecter, ce n’est pas nettoyer. Le nettoyage retire les salissures, la désinfection **détruit les micro-organismes** restants. Notre technicien utilise des **désinfectants biocides** et choisit la technique selon le lieu.',
  methodes: [
    {
      nom: 'Nettoyage préalable',
      titre: 'Pourquoi on nettoie toujours avant de désinfecter',
      accroche: 'Un désinfectant agit mal sur une surface sale : la saleté **protège les bactéries**.',
      etapes: [
        'Retrait des déchets, déjections et salissures visibles.',
        'Nettoyage des surfaces avec un détergent adapté.',
        'Rinçage si nécessaire avant le désinfectant.',
      ],
      pourquoi: 'Le désinfectant **atteint directement** les surfaces à traiter.',
      limites: 'Un logement très encombré demande un débarras préalable.',
      ideal: 'Après rongeurs, après fientes de pigeons, logements insalubres.',
    },
    {
      nom: 'Pulvérisation',
      titre: 'Pulvérisation de désinfectant : surfaces et zones touchées',
      accroche: 'Le produit est appliqué **directement sur les surfaces**, en respectant le **temps de contact** indiqué par le fabricant.',
      etapes: [
        'Application sur sols, murs, plans de travail, poignées et zones contaminées.',
        'Respect du **temps de contact** pour que le produit agisse.',
        'Rinçage des surfaces en contact avec les aliments si l’étiquette l’exige.',
      ],
      pourquoi: 'Action ciblée, **dose maîtrisée** sur chaque surface.',
      limites: 'N’atteint pas les recoins inaccessibles ni l’air de la pièce.',
      ideal: 'Cuisines, sanitaires, caves, locaux poubelles.',
    },
    {
      nom: 'Nébulisation',
      titre: 'Nébulisation : désinfecter toute une pièce, jusque dans les recoins',
      accroche: 'Un appareil diffuse le désinfectant en **très fines gouttelettes** qui restent en suspension et se déposent partout.',
      etapes: [
        'Pièce **vidée de ses occupants** et des animaux, aliments retirés.',
        'Diffusion pendant la durée prévue, pièce fermée.',
        'Temps d’attente puis **ventilation** avant le retour.',
      ],
      pourquoi: 'Toutes les surfaces sont touchées, **même celles qu’on ne voit pas**.',
      limites: 'Ne remplace pas le nettoyage : elle vient après.',
      ideal: 'Grandes surfaces, locaux professionnels, après un sinistre ou une infestation.',
    },
  ],
}

export const GUIDE_DESINFECTION: GuideService = {
  sections: [
    {
      titre: 'Désinfection après des rats, des souris ou des pigeons',
      texte: [
        'Les **urines et déjections de rongeurs** et les **fientes de pigeons** peuvent transmettre des maladies. Après une dératisation ou un dépigeonnage, la désinfection des zones souillées (caves, combles, placards, balcons) **termine le travail**.',
        'Nous remettons une **attestation d’intervention**, utile pour un propriétaire, un syndic ou un établissement recevant du public.',
      ],
      encadre: {
        titre: 'Devis gratuit',
        texte: 'Désinfection d’un logement **dès 150 €**, locaux professionnels sur devis. Appelez le 07 68 07 72 19.',
      },
    },
    {"titre": "Désinfection d’un logement très encombré ou insalubre", "texte": ["Après un **débarras**, un **décès non découvert**, ou dans un logement où les déchets se sont accumulés, la désinfection est indispensable avant toute remise en état. Nous intervenons souvent **après une dératisation ou un traitement contre les cafards** dans ces logements.", "Notre technicien travaille **protégé**, traite chaque pièce et vous remet une attestation. Vous pouvez lire le récit d’un de nos chantiers dans un logement très encombré à Maisons-Alfort sur notre blog."]},
    {"titre": "Désinfection pour restaurants, crèches et établissements de santé", "texte": ["Ces établissements ont des **exigences d’hygiène renforcées**. Nous intervenons en dehors des heures d’ouverture, avec des produits adaptés aux surfaces en contact avec les aliments ou les enfants, en respectant les **temps de contact et de rinçage** indiqués par le fabricant. Une **attestation** est remise pour votre registre."]},
    {"titre": "Combien de temps attendre après une désinfection ?", "texte": ["Cela dépend de la technique. Après une **pulvérisation ciblée**, on peut souvent revenir après aération. Après une **nébulisation**, il faut respecter le **temps d’attente** et bien ventiler la pièce avant le retour des occupants. Le technicien vous donne **l’horaire précis** de retour à la fin de l’intervention."]},
  ],
}
