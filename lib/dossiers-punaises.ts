// Grands dossiers locaux des pages punaises de lit « phares » (19/11/2026, demande de l'utilisateur : pages aussi complètes
// que la page cryogénie, première page sur les punaises de lit autour de Saint-Maurice). Écrits à la main pour chaque
// ville, à partir des données réelles (Insee, SRU) déjà publiées sur le site, de nos vrais chantiers et des faits
// confirmés par l'entreprise. Pas de chiffre inventé, pas de tiret long, jamais « naturel » ni « sans danger » pour un
// biocide ; « écologique » réservé aux méthodes sans insecticide, toujours défini.
import type { BlocDossier } from '@/lib/dossiers-deratisation'

const PROTOCOLE = (ville: string): BlocDossier[] => [
  { t: 'h3', x: `Un traitement des punaises de lit ${ville}, étape par étape` },
  { t: 'ol', items: [
    `**Appel ou photo WhatsApp** : une photo d'un insecte, de taches sur le matelas ou de piqûres nous permet souvent de confirmer qu'il s'agit bien de punaises de lit, gratuitement.`,
    `**Inspection** : le technicien contrôle le lit, le sommier, les coutures du matelas, les plinthes, les prises, les meubles et les pièces voisines pour mesurer l'étendue de l'infestation.`,
    `**Devis gratuit** : la méthode (insecticide, cryogénie, vapeur sèche ou protocole mixte), le nombre de pièces et le prix, avant toute intervention.`,
    `**Préparation** : nous vous remettons une fiche claire (linge à laver à 60 °C, sacs fermés, meubles à écarter des murs).`,
    `**Premier passage** : traitement de toutes les cachettes, pièce par pièce.`,
    `**Deuxième passage**, inclus dans le prix : il élimine les punaises sorties des œufs après le premier traitement.`,
    `**Garantie 1 an** : si les punaises reviennent, nous revenons.`,
  ] },
]

const METHODES: BlocDossier = { t: 'table', head: ['Méthode', 'Comment elle agit', 'Quand la choisir'], rows: [
  ['Insecticide professionnel', 'Pulvérisation dans les cachettes puis nébulisation, effet rémanent', 'Infestation importante, logement entier'],
  ['Cryogénie (−78 °C)', 'Neige carbonique : punaises et œufs meurent au contact, sans insecticide', 'Enfants, animaux, literie, établissements sensibles'],
  ['Vapeur sèche', 'Chaleur très élevée appliquée lentement sur le matelas, le sommier, les tissus', 'Infestation limitée, textiles'],
  ['Protocole mixte', 'Cryogénie ou vapeur, puis barrière insecticide très légère', 'Compromis entre efficacité durable et produit réduit'],
] }

const PRIX = (ville: string): BlocDossier[] => [
  { t: 'h2', x: `Combien coûte un traitement des punaises de lit ${ville} ?` },
  { t: 'table', head: ['Logement', 'Prix', 'Ce qui est inclus'], rows: [
    ['Studio ou T1', 'Dès 290 € TTC', '2 passages, inspection, fiche de préparation, garantie 1 an'],
    ['T2, T3 et plus, maison', 'Sur devis', 'Selon le nombre de pièces touchées et la méthode'],
    ['Hôtel, résidence, foyer, copropriété', 'Sur devis', 'Plan d’intervention, attestations'],
    ['Détection canine', 'Sur devis', 'Recherche des foyers avant ou après traitement'],
  ] },
  { t: 'p', x: "Le prix est donné **avant** l'intervention, dans un devis gratuit. Le deuxième passage est **toujours inclus** : c'est lui qui élimine les punaises nées des œufs après le premier traitement. Voir tous nos [tarifs](/tarifs)." },
]

export const DOSSIERS_PUNAISES: Record<string, BlocDossier[]> = {
  'saint-maurice': [
    { t: 'h2', x: "Punaises de lit à Saint-Maurice : une entreprise installée dans votre ville" },
    { t: 'p', x: "Notre base est **à Saint-Maurice**, au **6 bis rue du Val d'Osne**. Pour des piqûres au réveil dans un appartement du **Plateau**, des taches noires sur un matelas près du **Pont** ou un doute après un voyage à **Écluse-Gravelle**, nos techniciens partent d'ici : pas de long trajet, et un deuxième passage facile à caler dans votre agenda." },
    { t: 'p', x: "Saint-Maurice compte **14 506 habitants** (Insee) sur une très petite surface, avec plus de **10 000 habitants au km²** et plus d'un logement sur quatre en **logement social** selon l'inventaire SRU. Dans une ville aussi dense, les punaises de lit passent facilement d'un logement à l'autre par les **gaines**, les **plinthes** et les **parties communes**. Agir vite évite que le problème gagne tout l'immeuble." },
    { t: 'h2', x: "Comment les punaises arrivent dans un logement de Saint-Maurice" },
    { t: 'ul', items: [
      "**Au retour d'un voyage** : dans les valises, après un hôtel ou une location.",
      "**Par un meuble ou un matelas d'occasion**, récupéré ou acheté en ligne.",
      "**Par les transports** : RER A à Joinville-le-Pont, métro 8 à Charenton-Écoles, bus. Voir [punaises dans les transports](/blog/punaises-de-lit-transports-en-commun).",
      "**Depuis un logement voisin**, par les gaines techniques, les prises et les plinthes.",
    ] },
    { t: 'p', x: "Les punaises de lit ne sont **pas liées à la propreté** : un logement impeccable peut être touché. Voir [comment attrape-t-on des punaises de lit](/blog/comment-attrape-t-on-des-punaises-de-lit)." },
    { t: 'photos', cles: ['creteilLattes1', 'vincennesMortes1'] },
    { t: 'h2', x: "Les reconnaître avant d'appeler" },
    { t: 'table', head: ['Signe', 'Ce que vous voyez'], rows: [
      ['Piqûres', 'Boutons groupés ou en ligne sur les bras, le cou, le dos, au réveil'],
      ['Taches noires', 'Petits points d’excréments sur les coutures du matelas, le sommier, les plinthes'],
      ['Taches de sang', 'Petites traces rouges sur les draps'],
      ['Mues et œufs', 'Peaux claires et petits œufs blancs dans les recoins du lit'],
      ['Insectes', 'Bêtes brun-rouge, plates, de la taille d’un pépin de pomme'],
    ] },
    { t: 'p', x: "Pour comparer avec vos boutons : [piqûres de punaises de lit en photos](/blog/piqures-de-punaises-de-lit). Pour comprendre pourquoi deux passages sont nécessaires : [cycle de vie de la punaise de lit](/blog/cycle-de-vie-punaise-de-lit)." },
    { t: 'h2', x: "Nos méthodes de traitement à Saint-Maurice" },
    METHODES,
    { t: 'p', x: "Avec un bébé, des enfants, un animal, ou si vous ne voulez pas d'insecticide, la **cryogénie** est une méthode écologique au sens où elle n'utilise **aucun insecticide** : seulement de la neige carbonique à environ −78 °C. Voir [la cryogénie expliquée en détail](/services/cryogenie-punaises-de-lit)." },
    { t: 'photos', cles: ['litCryo', 'cryoFoyer'] },
    ...PRIX('à Saint-Maurice'),
    ...PROTOCOLE('à Saint-Maurice'),
    { t: 'h2', x: "Locataire, propriétaire, copropriété : qui fait quoi ?" },
    { t: 'p', x: "Depuis la loi ELAN, un logement loué doit être **exempt de toute infestation** de punaises de lit à l'entrée du locataire. En cours de bail, prévenez votre **propriétaire par écrit** dès les premiers signes. En copropriété, si plusieurs logements sont touchés, un traitement coordonné avec le **syndic** ou le **bailleur** est la meilleure solution : nous établissons les devis et les attestations." },
    { t: 'h2', x: "Saint-Maurice et les villes voisines" },
    { t: 'p', x: "Depuis notre base, nous traitons aussi les punaises de lit à [Charenton-le-Pont](/punaises-de-lit/charenton-le-pont), [Maisons-Alfort](/punaises-de-lit/maisons-alfort), [Joinville-le-Pont](/punaises-de-lit/joinville-le-pont), [Saint-Maur-des-Fossés](/punaises-de-lit/saint-maur-des-fosses), [Créteil](/punaises-de-lit/creteil), [Alfortville](/punaises-de-lit/alfortville), [Vincennes](/punaises-de-lit/vincennes) et dans le [12e arrondissement](/punaises-de-lit/paris-12). Tout le département : [punaises de lit dans le Val-de-Marne](/punaises-de-lit/val-de-marne)." },
  ],

  'charenton-le-pont': [
    { t: 'h2', x: "Punaises de lit à Charenton-le-Pont : nous sommes à moins de 3 km" },
    { t: 'p', x: "Charenton-le-Pont touche Saint-Maurice, où se trouve notre base. Pour un immeuble ancien de **Valmy**, une résidence des **Carrières** ou un appartement près de **Bercy**, nous pouvons en général venir rapidement inspecter et proposer un devis." },
    { t: 'p', x: "Avec **28 830 habitants** (Insee) et plus de **15 000 habitants au km²**, Charenton est l'une des villes les plus denses du Val-de-Marne. Beaucoup d'immeubles anciens, beaucoup d'allers-retours vers Paris par le **métro 8** : deux raisons pour lesquelles les punaises de lit y circulent facilement d'un logement à l'autre." },
    { t: 'h2', x: "Immeubles anciens : pourquoi il faut regarder chez les voisins" },
    { t: 'p', x: "Dans les immeubles haussmanniens et d'après-guerre de Charenton, les punaises passent par les **gaines techniques**, les **prises électriques**, les **plinthes** et les fentes des **parquets**. Si vous êtes piqué alors que votre lit semble propre, ou si le problème revient après un traitement, il faut souvent **inspecter les logements voisins**. Nous coordonnons ces interventions avec le **syndic** quand c'est nécessaire." },
    { t: 'photos', cles: ['vincennesMortes1', 'creteilLattes2'] },
    { t: 'h2', x: "Nos chantiers les plus proches de Charenton" },
    { t: 'p', x: "À **Paris 12e**, juste de l'autre côté du Bois, nous avons traité une grosse infestation en deux passages : [le récit du chantier](/blog/punaises-de-lit-paris-12-grosse-infestation). À **Ivry-sur-Seine**, voisine directe, une dame âgée vivait avec une infestation hors norme autour de son lit médicalisé : [le récit](/blog/punaises-de-lit-ivry-sur-seine-personne-agee). À **Vincennes**, dix jours après notre passage, le sol était couvert de punaises mortes : [le récit](/blog/punaises-de-lit-vincennes-punaises-mortes)." },
    { t: 'h2', x: "Les méthodes que nous utilisons à Charenton" },
    METHODES,
    { t: 'p', x: "Sans insecticide si vous le souhaitez : [cryogénie contre les punaises de lit](/services/cryogenie-punaises-de-lit). Pour savoir quoi faire de vos vêtements et de votre linge : [traiter ses vêtements](/blog/traiter-vetements-punaises-de-lit)." },
    ...PRIX('à Charenton-le-Pont'),
    ...PROTOCOLE('à Charenton-le-Pont'),
    { t: 'p', x: "Nous intervenons aussi à [Saint-Maurice](/punaises-de-lit/saint-maurice), [Paris 12e](/punaises-de-lit/paris-12), [Saint-Mandé](/punaises-de-lit/saint-mande), [Maisons-Alfort](/punaises-de-lit/maisons-alfort), [Alfortville](/punaises-de-lit/alfortville) et [Ivry-sur-Seine](/punaises-de-lit/ivry-sur-seine)." },
  ],

  'ivry-sur-seine': [
    { t: 'h2', x: "Punaises de lit à Ivry-sur-Seine : un chantier qui nous a marqués" },
    { t: 'p', x: "Ivry-sur-Seine compte **65 064 habitants** (Insee) et mêle grandes résidences, immeubles anciens du **Petit Ivry**, lofts d'**Ivry-Port** et quartiers en chantier. Nous y intervenons régulièrement depuis notre base de Saint-Maurice, à 4,1 km." },
    { t: 'p', x: "C'est à Ivry que nous avons filmé l'une de nos interventions les plus impressionnantes : chez une **dame âgée**, des punaises en très grand nombre sur le sol, le fauteuil et le coussin, autour d'un **lit médicalisé**. Le traitement a été fait **sans produit chimique**. Voir [le récit complet](/blog/punaises-de-lit-ivry-sur-seine-personne-agee)." },
    { t: 'h2', x: "Personnes âgées, isolées, dépendantes : ne pas attendre" },
    { t: 'p', x: "Une personne âgée ou isolée ne voit pas toujours les piqûres, ou n'ose pas en parler. Une infestation peut alors devenir très importante. Si vous aidez un parent ou un voisin, vérifiez les **coutures du matelas**, le **fauteuil** où il passe ses journées et le **sol autour du lit**. En cas de doute, une simple photo par WhatsApp suffit pour que nous vous disions s'il s'agit de punaises de lit." },
    { t: 'h2', x: "Grandes résidences d'Ivry : un traitement coordonné" },
    { t: 'table', head: ['Quartier', 'Ce que nous rencontrons'], rows: [
      ['Gagarine, Monmousseau', 'Résidences : passages par les gaines, plusieurs logements touchés'],
      ['Petit Ivry', 'Immeubles anciens : parquets, plinthes, prises'],
      ['Ivry-Port', 'Lofts et logements récents, souvent après un voyage ou un meuble d’occasion'],
      ['Centre-ville', 'Appartements et chambres de location'],
    ] },
    { t: 'p', x: "Dans les résidences, nous travaillons avec les **bailleurs** et les **syndics** pour traiter tous les logements touchés en même temps : traiter un seul appartement quand le voisin est infesté donne rarement un bon résultat." },
    { t: 'photos', cles: ['vincennesMortes2', 'litEnfant'] },
    { t: 'h2', x: "Nos méthodes à Ivry-sur-Seine" },
    METHODES,
    { t: 'p', x: "Voir aussi [punaises de lit sans insecticide](/blog/punaises-de-lit-sans-insecticide) et [le traitement insecticide en appartement](/blog/punaises-de-lit-traitement-insecticide-appartement)." },
    ...PRIX('à Ivry-sur-Seine'),
    ...PROTOCOLE('à Ivry-sur-Seine'),
    { t: 'p', x: "Nous intervenons aussi à [Vitry-sur-Seine](/punaises-de-lit/vitry-sur-seine), [Alfortville](/punaises-de-lit/alfortville), [Charenton-le-Pont](/punaises-de-lit/charenton-le-pont), [Villejuif](/punaises-de-lit/villejuif), [Le Kremlin-Bicêtre](/punaises-de-lit/le-kremlin-bicetre) et [Paris 13e](/punaises-de-lit/paris-13)." },
  ],

  creteil: [
    { t: 'h2', x: "Punaises de lit à Créteil : cachées là où personne ne regardait" },
    { t: 'p', x: "Préfecture du Val-de-Marne, Créteil compte **93 397 habitants** (Insee), avec de grands ensembles, les pavillons du **Vieux Créteil**, une **université**, des **hôpitaux** et un grand centre commercial. Beaucoup de passage, beaucoup d'étudiants et de locataires : un terrain favorable aux punaises de lit." },
    { t: 'p', x: "À Créteil, une famille nous a appelés après le passage d'une **première société qui n'avait rien trouvé**. Notre technicien a **démonté les lattes du sommier** : les punaises et leurs traces étaient cachées dans les **trous de fixation**. Voir [le récit complet du chantier](/blog/punaises-de-lit-creteil-sommier-lattes)." },
    { t: 'photos', cles: ['creteilLattes1', 'creteilLattes2'] },
    { t: 'h2', x: "Pourquoi un traitement échoue, et comment l'éviter" },
    { t: 'ul', items: [
      "**Des cachettes oubliées** : lattes, cadre de lit, prises, goulottes, plinthes. Voir [la cachette secrète d'un hôtel](/blog/punaises-de-lit-introuvables-goulotte-hotel).",
      "**Un seul passage** : les œufs éclosent après le traitement. Nos deux passages sont toujours inclus.",
      "**Une mauvaise préparation** : linge non lavé, sacs ouverts, affaires déplacées d'une pièce à l'autre.",
      "**Des produits du commerce** : bombes et fumigènes font fuir les punaises vers d'autres pièces.",
      "**Un voisin infesté** : il faut parfois traiter plusieurs logements.",
    ] },
    { t: 'h2', x: "Étudiants et locataires à Créteil" },
    { t: 'p', x: "Si vous êtes locataire, prévenez votre **propriétaire ou votre bailleur par écrit** dès les premiers signes. Ne jetez pas votre matelas dans la précipitation : il peut souvent être traité, et le jeter sans l'emballer répand les punaises dans l'escalier. Mettez votre linge dans des **sacs fermés** et lavez-le à **60 °C**." },
    { t: 'h2', x: "Nos méthodes à Créteil" },
    METHODES,
    { t: 'p', x: "Sans insecticide : [cryogénie](/services/cryogenie-punaises-de-lit) ou [vapeur sèche](/blog/vapeur-seche-punaises-de-lit). Pour trouver les foyers avant ou après traitement : [détection canine](/blog/detection-canine-punaises-de-lit), sur devis." },
    ...PRIX('à Créteil'),
    ...PROTOCOLE('à Créteil'),
    { t: 'p', x: "Créteil est à 3,8 km de notre base de Saint-Maurice. Nous intervenons aussi à [Maisons-Alfort](/punaises-de-lit/maisons-alfort), [Saint-Maur-des-Fossés](/punaises-de-lit/saint-maur-des-fosses), [Bonneuil-sur-Marne](/punaises-de-lit/bonneuil-sur-marne), [Alfortville](/punaises-de-lit/alfortville) et [Choisy-le-Roi](/punaises-de-lit/choisy-le-roi)." },
  ],

  'val-de-marne': [
    { t: 'h2', x: "Punaises de lit 94 : une entreprise du Val-de-Marne, basée à Saint-Maurice" },
    { t: 'p', x: "Allo Nuisible IDF est installée **à Saint-Maurice (94410)**. Nous traitons les punaises de lit dans tout le Val-de-Marne, 7j/7, chez les particuliers, dans les copropriétés, les hôtels, les résidences et les établissements accueillant des enfants. Plus de **1 500 clients** nous ont déjà fait confiance." },
    { t: 'h2', x: "Nos vrais chantiers de punaises de lit dans le 94" },
    { t: 'table', head: ['Ville', 'Ce que nous avons trouvé', 'Le récit'], rows: [
      ['Créteil', 'Punaises cachées dans les trous des lattes du sommier', '[Lire](/blog/punaises-de-lit-creteil-sommier-lattes)'],
      ['Ivry-sur-Seine', 'Infestation hors norme autour d’un lit médicalisé', '[Lire](/blog/punaises-de-lit-ivry-sur-seine-personne-agee)'],
      ['Vincennes', 'Sol couvert de punaises mortes 10 jours après', '[Lire](/blog/punaises-de-lit-vincennes-punaises-mortes)'],
      ['L’Haÿ-les-Roses', 'Sommier traité par cryogénie, latte par latte', '[Lire](/blog/cryogenie-punaises-de-lit-sommier)'],
      ['Champigny-sur-Marne', 'Lits à barreaux d’un établissement pour tout-petits, par le froid', '[Voir](/punaises-de-lit/champigny-sur-marne)'],
    ] },
    { t: 'photos', cles: ['creteilLattes1', 'vincennesMortes1'] },
    { t: 'h2', x: "Nos villes les plus proches, intervention la plus rapide" },
    { t: 'p', x: "Autour de Saint-Maurice : [Charenton-le-Pont](/punaises-de-lit/charenton-le-pont), [Maisons-Alfort](/punaises-de-lit/maisons-alfort), [Joinville-le-Pont](/punaises-de-lit/joinville-le-pont), [Alfortville](/punaises-de-lit/alfortville), [Saint-Mandé](/punaises-de-lit/saint-mande), [Vincennes](/punaises-de-lit/vincennes), [Nogent-sur-Marne](/punaises-de-lit/nogent-sur-marne), [Créteil](/punaises-de-lit/creteil), [Ivry-sur-Seine](/punaises-de-lit/ivry-sur-seine), [Saint-Maur-des-Fossés](/punaises-de-lit/saint-maur-des-fosses), [Fontenay-sous-Bois](/punaises-de-lit/fontenay-sous-bois) et [Vitry-sur-Seine](/punaises-de-lit/vitry-sur-seine). Et bien sûr [Saint-Maurice](/punaises-de-lit/saint-maurice), notre base." },
    { t: 'h2', x: "Nos méthodes dans le Val-de-Marne" },
    METHODES,
    { t: 'p', x: "Pour les familles avec enfants, les crèches, les foyers et les écoles, la **cryogénie** permet de traiter sans aucun insecticide : c'est en ce sens qu'elle est écologique. Voir [la cryogénie expliquée en détail](/services/cryogenie-punaises-de-lit)." },
    { t: 'photos', cles: ['cryoFoyer', 'litCryo'] },
    { t: 'h2', x: "Particuliers, copropriétés, hôtels, établissements" },
    { t: 'ul', items: [
      "**Particuliers** : appartement ou maison, 2 passages inclus, dès 290 € TTC.",
      "**Copropriétés et bailleurs** : inspection des logements voisins, traitement coordonné, attestations.",
      "**Hôtels, résidences, locations courte durée** : interventions discrètes, chambre par chambre. Voir [Airbnb et location courte durée](/blog/punaises-de-lit-airbnb-location-courte-duree).",
      "**Crèches, écoles, foyers** : traitement sans insecticide possible, hors présence du public.",
    ] },
    ...PRIX('dans le Val-de-Marne'),
    ...PROTOCOLE('dans le Val-de-Marne'),
  ],
}
