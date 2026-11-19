// Grands dossiers locaux des pages dératisation « phares » (19/11/2026, demande de l'utilisateur : sortir en première page
// sur « dératisation Saint-Maurice », « dératisation 94 », Charenton, Ivry, Créteil ; pages aussi complètes que la page
// cryogénie). Écrits à la main pour chaque ville, à partir des données réelles (lib/donnees-locales.ts : Insee,
// OpenStreetMap, SRU) et des faits confirmés par l'entreprise. Pas de chiffre inventé, pas de tiret long.
import type { PhotoKey } from '@/lib/photos-chantiers'

export type BlocDossier =
  | { t: 'h2' | 'h3' | 'p'; x: string }
  | { t: 'ul' | 'ol'; items: string[] }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'photos'; cles: PhotoKey[] }

const PROTOCOLE = (ville: string): BlocDossier[] => [
  { t: 'h3', x: `Une dératisation ${ville}, étape par étape` },
  { t: 'ol', items: [
    `**Appel ou photo WhatsApp** : vous décrivez ce que vous avez vu (crottes, bruits, dégâts), nous vous donnons une première idée du problème et le prix de départ.`,
    `**Inspection sur place** : le technicien cherche les traces (crottes, traces grasses, rongements), identifie l'espèce (surmulot, rat noir ou souris) et repère les accès.`,
    `**Devis gratuit** : la méthode, le nombre de passages et le prix, avant toute intervention.`,
    `**Pose des dispositifs** sur les passages actifs : postes d'appâtage sécurisés, ou sans raticide (piège Ekomille, pièges mécaniques ou connectés).`,
    `**Contrôles** jusqu'à ce qu'il n'y ait plus d'activité.`,
    `**Rebouchage des accès** avec des matériaux que les rongeurs ne rongent pas (grillage fin, laine d'acier, mortier).`,
    `**Garantie 1 an** : si les rongeurs reviennent, nous revenons.`,
  ] },
]

export const DOSSIERS_DERATISATION: Record<string, BlocDossier[]> = {
  'saint-maurice': [
    { t: 'h2', x: "Dératiseur à Saint-Maurice : une entreprise installée dans votre ville" },
    { t: 'p', x: "Allo Nuisible IDF n'est pas une plateforme qui envoie un sous-traitant depuis l'autre bout de l'Île-de-France : **notre base est à Saint-Maurice**, au **6 bis rue du Val d'Osne**. C'est d'ici que partent nos techniciens chaque matin. Pour un rat dans une cave du **Plateau**, une souris dans une cuisine près du **Pont**, des bruits dans un plafond à **Écluse-Gravelle** ou des terriers au bord du **canal de Saint-Maur**, nous pouvons souvent intervenir le jour même." },
    { t: 'p', x: "Être sur place change trois choses : la **rapidité** (pas de long trajet avant l'intervention), le **suivi** (les visites de contrôle se font facilement, sans attendre une semaine) et la **connaissance du terrain** : nous savons où passent les rongeurs dans une ville coincée entre la **Marne**, le **Bois de Vincennes** et l'autoroute." },
    { t: 'h2', x: "Rats et souris à Saint-Maurice : quartier par quartier" },
    { t: 'table', head: ['Quartier', 'Ce que nous rencontrons le plus', 'Points à vérifier'], rows: [
      ['Le Plateau', 'Souris et rats en immeuble collectif', 'Caves, locaux poubelles, gaines, vide-ordures'],
      ['Le Pont', 'Rats venant des berges et des réseaux', 'Rez-de-chaussée, cours, passages de canalisations'],
      ['Écluse-Gravelle-Panoramis', 'Rats et souris près de l’eau et du Bois', 'Jardins, sous-sols, soupiraux'],
      ['Centre et bras de Marne', 'Surmulots des berges, souris en maison', 'Vides sanitaires, garages, composts'],
    ] },
    { t: 'p', x: "Saint-Maurice compte **14 506 habitants** (Insee) sur une petite surface : plus de **10 000 habitants au km²**. Plus d'un logement sur quatre est un **logement social** selon l'inventaire SRU. Cette densité, avec la **Marne**, le **canal de Saint-Maur** et le **bras de Gravelle**, explique que les rongeurs y trouvent facilement eau, abri et nourriture." },
    { t: 'photos', cles: ['trouRat1', 'ratPiege'] },
    { t: 'h2', x: "Les situations qui nous font intervenir à Saint-Maurice" },
    { t: 'h3', x: "Rats des berges et des canalisations" },
    { t: 'p', x: "Le **surmulot**, rat des égouts, vit le long de la Marne et du canal. Il remonte par les **réseaux d'eaux usées**, les **regards** et les **canalisations** vers les caves et les rez-de-chaussée. Après de fortes pluies, quand les réseaux montent, les signalements augmentent. Il peut même remonter par les toilettes : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes)." },
    { t: 'h3', x: "Souris dans les immeubles du Plateau" },
    { t: 'p', x: "Dans les résidences, les souris circulent par les **gaines techniques**, les **colonnes d'eau** et les **faux plafonds** d'un logement à l'autre. Traiter un seul appartement ne suffit pas toujours : un traitement des **parties communes** coordonné avec le bailleur ou le syndic donne de bien meilleurs résultats." },
    { t: 'h3', x: "Rongeurs au jardin près du Bois de Vincennes" },
    { t: 'p', x: "Les maisons proches du Bois et de la Marne reçoivent à l'automne des **mulots**, des **souris** et parfois des **rats** venus des jardins. Un **compost ouvert**, des **graines sous une mangeoire** ou un **tas de bois** contre la maison suffisent à les attirer. Voir [un trou dans le jardin](/blog/trou-dans-le-jardin)." },
    { t: 'h3', x: "Commerces et restaurants" },
    { t: 'p', x: "Autour du **marché Émile Bertrand** et des commerces de bouche, un suivi régulier avec attestation est la meilleure protection. Nous intervenons en dehors des heures d'ouverture. Voir [professionnels](/professionnels)." },
    { t: 'photos', cles: ['ratPlaque', 'rongeursGlu'] },
    { t: 'h2', x: "Dératisation sans raticide à Saint-Maurice" },
    { t: 'p', x: "Avec des enfants, un chien ou un chat, ou un jardin fréquenté par la faune des bords de Marne, beaucoup de familles de Saint-Maurice ne veulent **aucun poison**. Nous proposons une **dératisation sans raticide** : piège multicapture **Ekomille**, pièges mécaniques, électriques ou connectés, puis **rebouchage des accès**. C'est une méthode alternative : la plus courante reste les postes d'appâtage sécurisés avec raticide, que nous proposons aussi. Voir [dératisation écologique](/services/deratisation-ecologique)." },
    { t: 'h2', x: "Combien coûte une dératisation à Saint-Maurice ?" },
    { t: 'table', head: ['Situation', 'Prix', 'Ce qui est inclus'], rows: [
      ['Appartement, rats ou souris', 'Dès 120 € TTC', 'Inspection, dispositifs sécurisés, conseils, garantie 1 an'],
      ['Maison avec jardin, cave ou vide sanitaire', 'Sur devis', 'Inspection complète, dispositifs, contrôles, rebouchage'],
      ['Commerce, restaurant, copropriété', 'Sur devis', 'Plan de suivi, attestations, passages réguliers'],
      ['Dératisation sans raticide', 'Sur devis', 'Ekomille ou pièges, suivi des captures, rebouchage'],
    ] },
    { t: 'p', x: "Le prix est toujours donné **avant** l'intervention, dans un devis gratuit. Pas de frais de déplacement surprise : nous sommes déjà à Saint-Maurice." },
    ...PROTOCOLE('à Saint-Maurice'),
    { t: 'photos', cles: ['diogeneCrottes', 'ratDiogene'] },
    { t: 'h2', x: "Saint-Maurice et les villes voisines" },
    { t: 'p', x: "Depuis notre base, nous intervenons aussi en dératisation à [Charenton-le-Pont](/deratisation/charenton-le-pont), [Maisons-Alfort](/deratisation/maisons-alfort), [Joinville-le-Pont](/deratisation/joinville-le-pont), [Saint-Maur-des-Fossés](/deratisation/saint-maur-des-fosses), [Créteil](/deratisation/creteil), [Alfortville](/deratisation/alfortville), [Vincennes](/deratisation/vincennes) et dans le [12e arrondissement de Paris](/deratisation/paris-12). Toutes nos villes : [dératisation dans le Val-de-Marne](/deratisation/val-de-marne)." },
  ],

  'charenton-le-pont': [
    { t: 'h2', x: "Dératisation à Charenton-le-Pont : nous sommes à moins de 3 km" },
    { t: 'p', x: "Charenton-le-Pont touche Saint-Maurice, où se trouve notre base. Nos techniciens y interviennent très souvent, et rapidement : pour un rat dans une cave de **Valmy**, des souris dans un immeuble des **Carrières**, un commerce près de **Bercy** ou une maison des **franges du Bois de Vincennes**, nous pouvons en général passer le jour même." },
    { t: 'p', x: "Avec **28 830 habitants** (Insee) et plus de **15 000 habitants au km²**, Charenton est l'une des villes les plus denses du Val-de-Marne. Elle est bordée par la **Seine** et la **Marne**, qui se rejoignent à sa pointe, et par le **Bois de Vincennes** : trois réservoirs de rongeurs autour d'une ville très construite." },
    { t: 'h2', x: "Où circulent les rats et les souris à Charenton" },
    { t: 'table', head: ['Secteur', 'Ce que nous rencontrons', 'Points sensibles'], rows: [
      ['Quais et confluence', 'Surmulots des berges', 'Caves, rez-de-chaussée, regards'],
      ['Valmy, Carrières, Plateau', 'Souris et rats en copropriété ancienne', 'Gaines, colonnes d’eau, locaux poubelles'],
      ['Bercy et commerces', 'Rongeurs attirés par la nourriture', 'Réserves, cuisines, zones de livraison'],
      ['Franges du Bois', 'Souris et mulots à l’automne', 'Jardins, soupiraux, bas de portes'],
    ] },
    { t: 'photos', cles: ['trouRat2', 'ratPiege'] },
    { t: 'h2', x: "Copropriétés de Charenton : traiter tout l'immeuble" },
    { t: 'p', x: "Dans les immeubles anciens de Charenton, les rongeurs passent d'un étage à l'autre par les **gaines**, les **colonnes d'eau** et les **doublages**. Si plusieurs voisins entendent des bruits ou trouvent des crottes, le plus efficace est un **traitement coordonné** : parties communes (caves, locaux poubelles, cour) d'abord, puis les logements touchés. Nous établissons les devis pour les **syndics** et les **bailleurs**, avec attestation." },
    { t: 'h2', x: "Restaurants et commerces : un suivi régulier" },
    { t: 'p', x: "Les commerces de bouche de Charenton, et ceux qui gravitent autour de **Bercy**, ont intérêt à un **plan de lutte** avec passages réguliers et attestations, utile lors d'un contrôle d'hygiène. Nous intervenons tôt le matin ou entre deux services. Voir [plan de lutte en restaurant](/blog/restaurant-plan-lutte-nuisibles)." },
    { t: 'h2', x: "Prix d'une dératisation à Charenton-le-Pont" },
    { t: 'table', head: ['Situation', 'Prix'], rows: [
      ['Appartement, rats ou souris', 'Dès 120 € TTC'],
      ['Maison, cave, local', 'Sur devis'],
      ['Copropriété, commerce, restaurant', 'Sur devis'],
      ['Sans raticide (Ekomille, pièges)', 'Sur devis'],
    ] },
    { t: 'p', x: "Garantie 1 an, devis gratuit avant l'intervention. Sans poison si vous le souhaitez : [dératisation sans raticide](/services/deratisation-ecologique)." },
    ...PROTOCOLE('à Charenton-le-Pont'),
    { t: 'p', x: "Nous intervenons aussi à [Saint-Maurice](/deratisation/saint-maurice), [Paris 12e](/deratisation/paris-12), [Saint-Mandé](/deratisation/saint-mande), [Maisons-Alfort](/deratisation/maisons-alfort) et [Ivry-sur-Seine](/deratisation/ivry-sur-seine)." },
  ],

  'ivry-sur-seine': [
    { t: 'h2', x: "Dératisation à Ivry-sur-Seine : d'Ivry-Port au Fort" },
    { t: 'p', x: "Ivry-sur-Seine compte **65 064 habitants** (Insee) et mêle grands ensembles, immeubles anciens, anciens entrepôts transformés en logements et zones d'activité le long de la **Seine**. Nous y intervenons régulièrement, depuis notre base de Saint-Maurice à 4,1 km : caves et locaux poubelles des résidences, cuisines, commerces, chantiers." },
    { t: 'h2', x: "Ce qui attire les rongeurs à Ivry" },
    { t: 'ul', items: [
      "**La Seine et les réseaux** : le surmulot suit les canalisations depuis les berges.",
      "**Les chantiers** : les travaux déplacent les colonies, qui se réfugient dans les immeubles voisins.",
      "**Les grandes résidences** : vide-ordures, caves et gaines relient les logements entre eux.",
      "**Les commerces et entreprises** d'Ivry-Port : réserves, cartons, zones de livraison.",
    ] },
    { t: 'table', head: ['Quartier', 'Ce que nous rencontrons'], rows: [
      ['Gagarine, Monmousseau', 'Souris et rats en résidence, caves et vide-ordures'],
      ['Petit Ivry', 'Souris en immeuble, rats dans les cours'],
      ['Ivry-Port', 'Rongeurs dans les locaux d’activité et les lofts'],
      ['Le Fort', 'Rongeurs venus des espaces verts et des chantiers'],
    ] },
    { t: 'photos', cles: ['trouRat3', 'ratPlaque'] },
    { t: 'h2', x: "Bailleurs et copropriétés à Ivry : agir ensemble" },
    { t: 'p', x: "Dans les grands ensembles, une dératisation isolée dans un seul logement donne des résultats décevants. Nous travaillons avec les **bailleurs** et les **syndics** pour traiter les **parties communes** (caves, locaux poubelles, vide-ordures), puis les logements touchés, avec un **calendrier de contrôles** et des **attestations**. Voir aussi [rats dans les murs et cloisons](/blog/rat-dans-les-murs-cloisons)." },
    { t: 'h2', x: "Prix d'une dératisation à Ivry-sur-Seine" },
    { t: 'table', head: ['Situation', 'Prix'], rows: [
      ['Appartement, rats ou souris', 'Dès 120 € TTC'],
      ['Résidence, copropriété', 'Sur devis'],
      ['Local d’activité, commerce', 'Sur devis'],
    ] },
    ...PROTOCOLE('à Ivry-sur-Seine'),
    { t: 'p', x: "Nous intervenons aussi à [Vitry-sur-Seine](/deratisation/vitry-sur-seine), [Alfortville](/deratisation/alfortville), [Charenton-le-Pont](/deratisation/charenton-le-pont), [Villejuif](/deratisation/villejuif) et [Paris 13e](/deratisation/paris-13). Voir aussi [souris à Ivry](/souris/ivry-sur-seine)." },
  ],

  creteil: [
    { t: 'h2', x: "Dératisation à Créteil : du lac au Vieux Créteil" },
    { t: 'p', x: "Préfecture du Val-de-Marne, Créteil compte **93 397 habitants** (Insee). La ville associe de **grands ensembles** (Palais, La Habette, Montaigut), un centre ancien de **pavillons** (le Vieux Créteil), un **lac**, une **île de loisirs**, des bras de la **Marne** et de grands équipements : université, hôpitaux, centre commercial. Autant de milieux différents, autant de façons de traiter les rongeurs." },
    { t: 'h2', x: "Rats et souris à Créteil : les secteurs que nous connaissons" },
    { t: 'table', head: ['Secteur', 'Ce que nous rencontrons', 'Méthode adaptée'], rows: [
      ['Grands ensembles', 'Souris et rats dans les caves et vide-ordures', 'Traitement coordonné avec le bailleur'],
      ['Vieux Créteil, pavillons', 'Rats au jardin, souris en sous-sol', 'Pièges ou postes, rebouchage des accès'],
      ['Lac, bras de la Marne', 'Surmulots des berges', 'Postes sécurisés ou Ekomille, suivi'],
      ['Commerces et restaurants', 'Rongeurs des réserves', 'Contrat de suivi avec attestations'],
    ] },
    { t: 'photos', cles: ['ratPiege', 'trouRat1'] },
    { t: 'h2', x: "Étudiants et locataires : les bons réflexes" },
    { t: 'p', x: "Avec l'université, beaucoup de Cristoliens sont locataires de petits logements. Si vous voyez des crottes ou entendez des bruits, **prévenez votre propriétaire ou votre bailleur par écrit**, rangez la nourriture dans des boîtes fermées et ne laissez pas de poubelle ouverte la nuit. Un logement doit être remis **exempt de toute infestation** à l'entrée du locataire." },
    { t: 'h2', x: "Dératisation sans poison à Créteil" },
    { t: 'p', x: "Pour les familles avec enfants ou animaux, et pour les maisons proches des espaces naturels, nous proposons une **dératisation sans raticide** : piège Ekomille, pièges mécaniques ou connectés, puis rebouchage. Voir [dératisation écologique](/services/deratisation-ecologique)." },
    { t: 'h2', x: "Prix d'une dératisation à Créteil" },
    { t: 'table', head: ['Situation', 'Prix'], rows: [
      ['Appartement, rats ou souris', 'Dès 120 € TTC'],
      ['Maison, sous-sol, jardin', 'Sur devis'],
      ['Résidence, commerce', 'Sur devis'],
    ] },
    ...PROTOCOLE('à Créteil'),
    { t: 'p', x: "Créteil est à 3,8 km de notre base de Saint-Maurice. Nous intervenons aussi à [Maisons-Alfort](/deratisation/maisons-alfort), [Saint-Maur-des-Fossés](/deratisation/saint-maur-des-fosses), [Bonneuil-sur-Marne](/deratisation/bonneuil-sur-marne) et [Alfortville](/deratisation/alfortville)." },
  ],
  'val-de-marne': [
    { t: 'h2', x: "Dératisation 94 : une entreprise du Val-de-Marne, basée à Saint-Maurice" },
    { t: 'p', x: "Allo Nuisible IDF est installée **à Saint-Maurice (94410)**, au cœur du Val-de-Marne. Nos techniciens connaissent le département ville par ville : les **berges de la Marne et de la Seine**, les **grands ensembles**, les **zones pavillonnaires**, les **marchés** et les **commerces de bouche**, les **chantiers du Grand Paris Express**. Pour une dératisation dans le 94, nous intervenons 7j/7, souvent le jour même autour de notre base." },
    { t: 'h2', x: "Rats et souris dans le Val-de-Marne : ce qui change d'une ville à l'autre" },
    { t: 'table', head: ['Type de secteur', 'Exemples de villes', 'Ce que nous rencontrons'], rows: [
      ['Bords de Marne', 'Saint-Maurice, Joinville-le-Pont, Saint-Maur-des-Fossés, Nogent-sur-Marne', 'Surmulots des berges, rats dans les caves et jardins'],
      ['Bords de Seine', 'Ivry-sur-Seine, Vitry-sur-Seine, Alfortville, Choisy-le-Roi', 'Rats des réseaux, rongeurs déplacés par les chantiers'],
      ['Villes très denses', 'Vincennes, Saint-Mandé, Charenton-le-Pont', 'Souris et rats en copropriété ancienne'],
      ['Grands ensembles', 'Créteil, Champigny-sur-Marne, Vitry-sur-Seine', 'Caves, vide-ordures, locaux poubelles'],
      ['Pavillonnaire', 'Sucy-en-Brie, Le Perreux-sur-Marne, Villiers-sur-Marne', 'Rats au jardin, souris en sous-sol, composts'],
    ] },
    { t: 'photos', cles: ['ratPiege', 'trouRat2'] },
    { t: 'h2', x: "Nos villes les plus proches, intervention la plus rapide" },
    { t: 'p', x: "Autour de Saint-Maurice, à moins de 5 km : [Maisons-Alfort](/deratisation/maisons-alfort), [Joinville-le-Pont](/deratisation/joinville-le-pont), [Alfortville](/deratisation/alfortville), [Charenton-le-Pont](/deratisation/charenton-le-pont), [Saint-Mandé](/deratisation/saint-mande), [Vincennes](/deratisation/vincennes), [Nogent-sur-Marne](/deratisation/nogent-sur-marne), [Créteil](/deratisation/creteil), [Ivry-sur-Seine](/deratisation/ivry-sur-seine), [Saint-Maur-des-Fossés](/deratisation/saint-maur-des-fosses), [Fontenay-sous-Bois](/deratisation/fontenay-sous-bois) et [Vitry-sur-Seine](/deratisation/vitry-sur-seine). Et bien sûr [Saint-Maurice](/deratisation/saint-maurice), notre base." },
    { t: 'h2', x: "Particuliers, copropriétés, bailleurs, professionnels" },
    { t: 'ul', items: [
      "**Particuliers** : appartement ou maison, rats ou souris, avec ou sans raticide, dès 120 € TTC.",
      "**Copropriétés et syndics** : caves, locaux poubelles, cours, parkings, avec attestation et calendrier de contrôles.",
      "**Bailleurs sociaux** : traitement des parties communes et des logements touchés, coordonné.",
      "**Restaurants et commerces** : plan de lutte, passages réguliers, attestations pour les contrôles d'hygiène.",
      "**Écoles, crèches, établissements** : dératisation sans raticide possible, interventions hors présence du public.",
    ] },
    { t: 'h2', x: "Dératisation écologique dans le 94" },
    { t: 'p', x: "Sans raticide ni poison : piège multicapture **Ekomille**, pièges mécaniques, électriques ou connectés, puis **rebouchage des accès**. Une méthode alternative, choisie par les familles avec enfants ou animaux et les établissements accueillant du public. Voir [dératisation écologique](/services/deratisation-ecologique)." },
    { t: 'h2', x: "Prix d'une dératisation dans le Val-de-Marne" },
    { t: 'table', head: ['Situation', 'Prix'], rows: [
      ['Appartement, rats ou souris', 'Dès 120 € TTC'],
      ['Maison, jardin, cave, vide sanitaire', 'Sur devis'],
      ['Copropriété, bailleur, commerce', 'Sur devis'],
      ['Sans raticide', 'Sur devis'],
    ] },
    { t: 'p', x: "Les prix sont les mêmes dans tout le département, garantie 1 an, devis gratuit avant l'intervention." },
    ...PROTOCOLE('dans le Val-de-Marne'),
    { t: 'photos', cles: ['diogeneCrottes', 'ratPlaque'] },
  ],

}
