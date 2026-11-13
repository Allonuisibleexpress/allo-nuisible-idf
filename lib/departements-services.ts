// Pages « service + département » (/deratisation/val-de-marne, /punaises-de-lit/paris…), créées le 09/11/2026.
// Contenu propre à chaque combinaison (aucune copie d'un autre site). Pas de chiffre inventé : populations Insee
// (geo.api.gouv.fr), prix alignés sur /tarifs. Pas de tiret long, pas de « naturel », « écologique », « sans danger ».
import type { FamilleVille } from './services-ville'
import { CONTENU_GC } from './departements-services-gc'

export type DepSlug = 'paris' | 'val-de-marne' | 'hauts-de-seine' | 'essonne' | 'yvelines' | 'seine-et-marne'
export type ServiceDep = 'deratisation' | 'punaises' | 'frelons' | 'cafards' | 'souris' | 'puces'

export const DEPS: Record<DepSlug, { nom: string; code: string; dans: string; de: string; population: number; communes: string; zone: string }> = {
  paris: { nom: 'Paris', code: '75', dans: 'à Paris', de: 'de Paris', population: 2103778, communes: '20 arrondissements', zone: '/zones/paris' },
  'val-de-marne': { nom: 'Val-de-Marne', code: '94', dans: 'dans le Val-de-Marne', de: 'du Val-de-Marne', population: 1426929, communes: '47 communes', zone: '/zones/val-de-marne' },
  'hauts-de-seine': { nom: 'Hauts-de-Seine', code: '92', dans: 'dans les Hauts-de-Seine', de: 'des Hauts-de-Seine', population: 1654712, communes: '36 communes', zone: '/zones/hauts-de-seine' },
  essonne: { nom: 'Essonne', code: '91', dans: 'dans l’Essonne', de: 'de l’Essonne', population: 1338485, communes: '194 communes', zone: '/zones/essonne' },
  yvelines: { nom: 'Yvelines', code: '78', dans: 'dans les Yvelines', de: 'des Yvelines', population: 1485086, communes: '259 communes', zone: '/zones/yvelines' },
  'seine-et-marne': { nom: 'Seine-et-Marne', code: '77', dans: 'en Seine-et-Marne', de: 'de la Seine-et-Marne', population: 1468108, communes: '507 communes', zone: '/zones/seine-et-marne' },
}
export const DEP_SLUGS = Object.keys(DEPS) as DepSlug[]
export const estDep = (s: string): s is DepSlug => s in DEPS

export type Contenu = { accroche: string; paras: string[]; points: { t: string; x: string }[]; faq: { q: string; a: string }[] }

export const SERVICES_DEP: Record<ServiceDep, {
  famille: FamilleVille; base: string; label: string; motCle: string; h1: string; prix: string; prixNum: string; prixNote: string
  suffixes: string[]; description: (dans: string, code: string) => string
  etapes: string[][]; tarifs: { label: string; prix: string; detail: string }[]
  contenu: Record<DepSlug, Contenu>
}> = {
  deratisation: {
    famille: 'deratisation', base: '/deratisation', label: 'Dératisation', motCle: 'Dératisation', h1: 'Dératisation des rats et souris', prix: '120 €', prixNum: '120',
    prixNote: 'Appartement, rats ou souris. Devis gratuit.', suffixes: [' : rats et souris dès 120 €, 7j/7', ' : rats et souris dès 120 €', ' : rats, souris dès 120 €', ' dès 120 €'],
    description: (dans, code) => `Dératisation ${dans} (${code}) : rats et souris, postes sécurisés ou pièges, accès bouchés. Technicien certifié, dès 120 € TTC, devis gratuit, 7j/7.`,
    etapes: [
      ['Appel ou photo|Une photo des crottes ou des dégâts suffit souvent à savoir s’il s’agit de rats ou de souris. Vous avez le prix tout de suite.', 'Devis gratuit|Vous décrivez le lieu, nous vous annonçons le tarif avant de nous déplacer.'],
      ['Diagnostic|Le technicien identifie l’espèce (surmulot, rat noir, souris), les couloirs de passage et les points d’entrée.', 'Recherche des accès|Gaines, passages de tuyaux, bas de portes, grilles : chaque entrée possible est repérée.'],
      ['Traitement|Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou piège Ekomille sans raticide.', 'Pose des dispositifs|Placés sur les passages, hors de portée des enfants et des animaux.'],
      ['Colmatage et garantie|Les accès sont rebouchés, les postes contrôlés. Garantie 1 an, attestation pour les professionnels.', 'Suivi|Contrôle des dispositifs, accès fermés, garantie d’un an.'],
    ],
    tarifs: [
      { label: 'Appartement', prix: 'dès 120 €', detail: 'Rats ou souris, postes sécurisés ou pièges' },
      { label: 'Commerce, restaurant', prix: 'sur devis', detail: 'Attestation fournie' },
      { label: 'Copropriété, contrat annuel', prix: 'sur devis', detail: 'Parties communes, passages réguliers' },
    ],
    contenu: {
      ...CONTENU_GC.deratisation, // Essonne, Yvelines, Seine-et-Marne (11/11/2026)
      paris: {
        accroche: 'Caves, cours d’immeuble, locaux poubelles, restaurants : à Paris, les rats et les souris trouvent partout de quoi se nourrir et se cacher.',
        paras: [
          'À Paris, la **dératisation** ne se limite pas à un logement. Les rongeurs circulent par le **réseau d’égouts**, les **caves voûtées** des immeubles anciens, les **gaines techniques** et les **locaux poubelles**. Un rat aperçu dans une cour signale souvent un passage partagé par tout l’immeuble.',
          'Le **surmulot** (rat brun) vit au niveau du sol et des sous-sols, tandis que la **souris** s’installe dans les cloisons, les faux plafonds et les cuisines. Dans les immeubles haussmanniens comme dans les constructions récentes, nous intervenons **dans les 20 arrondissements**, chez les particuliers, les syndics et les commerces de bouche.',
        ],
        points: [
          { t: 'Dératisation en copropriété à Paris', x: 'Caves, local poubelles, parties communes : un plan de lutte à l’échelle de l’immeuble évite que le problème passe d’un logement à l’autre.' },
          { t: 'Rats dans un restaurant parisien', x: 'Postes sécurisés, suivi régulier et attestation pour vos contrôles d’hygiène, avec des passages hors service.' },
          { t: 'Souris dans un appartement à Paris', x: 'Pièges et colmatage des passages de tuyaux : la solution la plus efficace en appartement, sans risque pour la famille.' },
        ],
        faq: [
          { q: 'Qui paie la dératisation dans un immeuble à Paris ?', a: 'Les parties communes (caves, cours, local poubelles) relèvent du syndic de copropriété. Dans un logement loué, le propriétaire doit fournir un logement exempt de nuisibles (loi du 6 juillet 1989, article 6).' },
          { q: 'Intervenez-vous dans tous les arrondissements de Paris ?', a: 'Oui, du 1er au 20e arrondissement, souvent le jour même, 7j/7.' },
          { q: 'Que faire si les rats viennent de la rue ?', a: 'Sur l’espace public, la Ville de Paris est compétente. Chez vous, nous bloquons les accès depuis la rue et les caves pour qu’ils n’entrent plus.' },
        ],
      },
      'val-de-marne': {
        accroche: 'Bords de Marne et de Seine, pavillons avec jardin, grands ensembles : dans le Val-de-Marne, rats et souris s’adaptent à tous les types d’habitat.',
        paras: [
          'Le Val-de-Marne est traversé par la **Marne** et la **Seine**. Le **surmulot** aime l’humidité des berges et circule par les réseaux d’eaux pluviales jusqu’aux **caves**, **vides sanitaires** et **jardins**. Dans les zones pavillonnaires, on le retrouve aussi près des **composteurs**, des **abris de jardin** et des mangeoires d’oiseaux.',
          'Basés à **Saint-Maurice**, au cœur du département, nous intervenons rapidement dans les **47 communes du Val-de-Marne**, de Vincennes à Villeneuve-Saint-Georges, chez les particuliers, les copropriétés, les commerces et les restaurants.',
        ],
        points: [
          { t: 'Rats dans un jardin du Val-de-Marne', x: 'Terriers au pied d’un mur ou sous un abri : nous traitons les galeries et protégeons enfants et animaux.' },
          { t: 'Dératisation de pavillon dans le 94', x: 'Vide sanitaire, garage, combles : on cherche chaque entrée avant de traiter, puis on rebouche.' },
          { t: 'Rongeurs dans un commerce du Val-de-Marne', x: 'Plan de lutte, suivi des postes et attestation pour vos contrôles d’hygiène.' },
        ],
        faq: [
          { q: 'Intervenez-vous partout dans le Val-de-Marne ?', a: 'Oui, dans les 47 communes du département. Notre base de Saint-Maurice permet d’intervenir souvent le jour même.' },
          { q: 'Les rats viennent-ils de la Marne ?', a: 'Le surmulot vit volontiers près de l’eau et circule par les réseaux d’eaux pluviales. Les logements proches des berges sont plus exposés : contrôler les caves et les regards est essentiel.' },
          { q: 'Que faire des rats au compost ?', a: 'Un compost mal fermé attire les rongeurs. Nous traitons la colonie et vous conseillons sur la façon de le protéger.' },
        ],
      },
      'hauts-de-seine': {
        accroche: 'Boucles de la Seine, quartiers d’affaires, maisons de l’ouest parisien : dans les Hauts-de-Seine, les rongeurs profitent des sous-sols et des jardins.',
        paras: [
          'Dans les Hauts-de-Seine, la **dératisation** concerne autant les **immeubles résidentiels** que les **bureaux**, les **parkings souterrains** et les **maisons avec jardin**. Les rongeurs utilisent les **sous-sols**, les **gaines** et les **réseaux** pour passer d’un bâtiment à l’autre, notamment le long de la **Seine**.',
          'Nos techniciens interviennent de **Boulogne-Billancourt** à **Asnières-sur-Seine**, de **Nanterre** à **Montrouge**, avec la même méthode : diagnostic, dispositifs adaptés et **colmatage des accès** pour éviter le retour des rats et des souris.',
        ],
        points: [
          { t: 'Rats dans un parking souterrain des Hauts-de-Seine', x: 'Les sous-sols sont des couloirs de passage : postes sécurisés et suivi régulier pour la copropriété.' },
          { t: 'Souris dans des bureaux dans le 92', x: 'Faux plafonds, gaines et cuisines d’entreprise : intervention discrète, en dehors des heures de travail si besoin.' },
          { t: 'Rongeurs dans une maison du 92', x: 'Jardin, cave, combles : nous repérons les entrées et posons les dispositifs au bon endroit.' },
        ],
        faq: [
          { q: 'Intervenez-vous dans tout le 92 ?', a: 'Oui, dans les communes des Hauts-de-Seine, du nord au sud du département, 7j/7.' },
          { q: 'Pouvez-vous intervenir dans des bureaux ?', a: 'Oui, avec une intervention discrète, en dehors des heures d’activité si besoin, et une attestation pour l’entreprise.' },
          { q: 'Combien de passages faut-il ?', a: 'Cela dépend de l’infestation. Le technicien vous l’indique après le diagnostic ; le contrôle des dispositifs fait partie du suivi.' },
        ],
      },
    },
  },
  punaises: {
    famille: 'punaises', base: '/punaises-de-lit', label: 'Punaises de lit', motCle: 'Punaises de lit', h1: 'Traitement punaises de lit', prix: '290 €', prixNum: '290',
    prixNote: 'Studio ou T1, 2 passages inclus. Devis gratuit.', suffixes: [' : traitement dès 290 €, 7j/7', ' : traitement dès 290 €', ' : dès 290 €, 7j/7', ' : traitement 7j/7', ' : traitement', ''],
    description: (dans, code) => `Punaises de lit ${dans} (${code}) : insecticide, cryogénie ou vapeur sèche. 2 passages dès 290 € TTC, devis gratuit, garantie 1 an, 7j/7.`,
    etapes: [
      ['Appel ou photo|Une photo de l’insecte ou des piqûres : nous confirmons qu’il s’agit de punaises et vous donnons le prix.', 'Devis gratuit|Quelques questions sur votre logement : vous connaissez le tarif avant tout déplacement.'],
      ['Inspection|Matelas, sommier, tête de lit, plinthes et canapé sont contrôlés pour repérer tous les foyers.', 'Recherche des foyers|Coutures, cadre de lit, prises, fentes du parquet : chaque cachette est vérifiée.'],
      ['Premier traitement|Cryogénie, vapeur sèche, protocole mixte ou insecticide : on vise les punaises et leurs œufs.', 'Traitement ciblé|Froid, vapeur ou insecticide professionnel sur chaque zone touchée.'],
      ['Deuxième passage|Nous revenons traiter les éventuelles éclosions. Garantie 1 an.', 'Contrôle et garantie|Second passage inclus, puis la garantie d’un an vous couvre.'],
    ],
    tarifs: [
      { label: 'Studio ou T1', prix: 'dès 290 €', detail: '2 passages, inspection de toutes les pièces' },
      { label: 'T2 ou T3', prix: 'sur devis', detail: 'Insecticide, cryogénie ou vapeur sèche' },
      { label: 'T4, maison ou forte infestation', prix: 'sur devis', detail: 'Prix confirmé après inspection' },
    ],
    contenu: {
      ...CONTENU_GC.punaises, // Essonne, Yvelines, Seine-et-Marne (11/11/2026)
      paris: {
        accroche: 'Hôtels, locations meublées, transports, immeubles anciens : Paris est l’un des endroits où les punaises de lit voyagent le plus facilement.',
        paras: [
          'À Paris, les **punaises de lit** arrivent par les **valises**, les **locations courte durée**, les **meubles d’occasion** et les **transports en commun**. Dans les immeubles anciens, elles peuvent aussi passer d’un appartement à l’autre par les **gaines**, les **plinthes** et les **fentes des parquets**.',
          'Nous traitons les **appartements**, les **hôtels**, les **Airbnb** et les **résidences** dans les **20 arrondissements**, avec ou sans insecticide : **cryogénie**, **vapeur sèche**, protocole mixte ou **insecticide professionnel**. Deux passages sont toujours inclus.',
        ],
        points: [
          { t: 'Punaises de lit dans un Airbnb à Paris', x: 'Traitement rapide entre deux séjours pour relouer sereinement, avec des consignes claires pour la suite.', },
          { t: 'Punaises de lit dans un hôtel parisien', x: 'Traitement chambre par chambre, par cryogénie si besoin, pour limiter la gêne des clients.' },
          { t: 'Punaises après un voyage, à Paris', x: 'Valise, linge, literie : les bons gestes au retour et une inspection pour éviter l’infestation.' },
        ],
        faq: [
          { q: 'Intervenez-vous dans tous les arrondissements de Paris ?', a: 'Oui, du 1er au 20e arrondissement, souvent le jour même, 7j/7.' },
          { q: 'Mon propriétaire doit-il payer le traitement ?', a: 'Le logement loué doit être exempt de toute infestation d’espèces nuisibles et parasites (loi du 6 juillet 1989, article 6). Prévenez votre propriétaire par écrit.' },
          { q: 'Traitez-vous sans insecticide à Paris ?', a: 'Oui : cryogénie et vapeur sèche tuent les punaises et leurs œufs au contact, sans produit. Le technicien vous conseille selon l’infestation.' },
        ],
      },
      'val-de-marne': {
        accroche: 'Appartements, pavillons, foyers et résidences : dans le Val-de-Marne, nous traitons les punaises de lit depuis notre base de Saint-Maurice.',
        paras: [
          'Dans le Val-de-Marne, les **punaises de lit** touchent aussi bien les **grands ensembles** que les **pavillons**, les **foyers**, les **résidences étudiantes** et les **locations meublées**. Elles se cachent dans les **coutures du matelas**, le **sommier**, la **tête de lit** et le **canapé**, et se propagent vite si l’on attend.',
          'Basés à **Saint-Maurice**, nous intervenons dans **tout le 94** : Maisons-Alfort, Créteil, Vincennes, Saint-Maur-des-Fossés, Ivry-sur-Seine, Vitry-sur-Seine et toutes les autres communes, avec ou sans insecticide et **deux passages inclus**.',
        ],
        points: [
          { t: 'Punaises de lit dans un foyer du Val-de-Marne', x: 'Traitement par cryogénie, chambre par chambre, sans produit pour les résidents.' },
          { t: 'Punaises dans un pavillon du 94', x: 'Inspection de toutes les chambres et du salon, traitement adapté et second passage inclus.' },
          { t: 'Location meublée dans le Val-de-Marne', x: 'Intervention rapide entre deux locataires et consignes pour éviter une nouvelle infestation.' },
        ],
        faq: [
          { q: 'Intervenez-vous partout dans le Val-de-Marne ?', a: 'Oui, dans les 47 communes du département, souvent le jour même grâce à notre base de Saint-Maurice.' },
          { q: 'Combien coûte un traitement punaises de lit dans le 94 ?', a: 'À partir de 290 € TTC pour un studio ou un T1, deux passages inclus. Pour un logement plus grand, le prix est fixé après inspection.' },
          { q: 'Faut-il quitter le logement ?', a: 'Avec la cryogénie ou la vapeur sèche, non : le logement reste utilisable. Avec un insecticide, une absence de quelques heures est demandée.' },
        ],
      },
      'hauts-de-seine': {
        accroche: 'Appartements, maisons, hôtels d’affaires : dans les Hauts-de-Seine, nous traitons les punaises de lit avec ou sans insecticide.',
        paras: [
          'Dans les Hauts-de-Seine, les **punaises de lit** voyagent avec les **déplacements professionnels**, les **séjours à l’hôtel** et les **déménagements**. Elles s’installent dans les **chambres**, mais aussi dans les **canapés** et parfois les **bureaux**, dans les fauteuils et les salles de repos.',
          'Nos techniciens interviennent dans les **communes du 92** avec les mêmes méthodes qu’à Paris et dans le Val-de-Marne : **cryogénie**, **vapeur sèche**, protocole mixte ou **insecticide professionnel**, avec **deux passages inclus** et une **garantie d’un an**.',
        ],
        points: [
          { t: 'Punaises de lit dans un hôtel des Hauts-de-Seine', x: 'Traitement discret, chambre par chambre, pour continuer à accueillir les clients.' },
          { t: 'Punaises de lit au bureau, dans le 92', x: 'Fauteuils, canapés de repos, vestiaires : intervention en dehors des heures d’activité.' },
          { t: 'Punaises après un déménagement dans le 92', x: 'Cartons et meubles peuvent les transporter : inspection et traitement avant de tout installer.' },
        ],
        faq: [
          { q: 'Intervenez-vous dans tout le 92 ?', a: 'Oui, dans les communes des Hauts-de-Seine, 7j/7.' },
          { q: 'Peut-on avoir des punaises de lit au bureau ?', a: 'Oui : elles voyagent dans les sacs et les manteaux. Nous intervenons en dehors des heures d’activité, à la cryogénie ou à la vapeur sèche.' },
          { q: 'Le traitement est-il garanti ?', a: 'Oui, deux passages sont inclus et le traitement est garanti 1 an.' },
        ],
      },
    },
  },
  frelons: {
    famille: 'frelons', base: '/destruction-nid-frelon', label: 'Nid de frelons', motCle: 'Destruction nid de frelon', h1: 'Destruction de nid de frelons', prix: '89 €', prixNum: '89',
    prixNote: 'Nid accessible. Perche dès 149 €, toiture dès 199 €.', suffixes: [' : dès 89 €, 7j/7', ' : dès 89 €', ' : 7j/7', ''],
    description: (dans, code) => `Destruction de nid de frelons ou de guêpes ${dans} (${code}) : frelon asiatique et européen, nid en hauteur à la perche. Dès 89 € TTC, 7j/7.`,
    etapes: [
      ['Appel ou photo|Une photo, même de loin, permet d’identifier l’espèce et l’accès au nid, et de fixer le prix.', 'Devis gratuit|Hauteur et emplacement du nid : vous avez le tarif avant notre venue.'],
      ['Repérage|Le technicien localise le nid et choisit la méthode : traitement direct, perche ou accès en hauteur.', 'Sécurisation|Zone tenue à distance, enfants et animaux à l’intérieur, tenue de protection intégrale.'],
      ['Destruction du nid|Le produit est injecté au cœur du nid, à la perche télescopique si besoin.', 'Traitement|Le nid est traité directement : la colonie est neutralisée en quelques heures.'],
      ['Conseils|Les insectes encore dehors rentrent au nid et sont touchés. Nous vous disons quand le retirer.', 'Après l’intervention|Consignes pour les heures qui suivent et retrait du nid si nécessaire.'],
    ],
    tarifs: [
      { label: 'Nid accessible', prix: 'dès 89 €', detail: 'Jusqu’à 5 m environ : auvent, cabanon, haie' },
      { label: 'Nid en hauteur', prix: 'dès 149 €', detail: 'Perche télescopique' },
      { label: 'Nid difficile d’accès', prix: 'dès 199 €', detail: 'Toiture, combles, cheminée. Nacelle : sur devis' },
    ],
    contenu: {
      ...CONTENU_GC.frelons, // Essonne, Yvelines, Seine-et-Marne (11/11/2026)
      paris: {
        accroche: 'Arbres d’alignement, cours intérieures, balcons, toits : à Paris aussi, les frelons et les guêpes installent leurs nids.',
        paras: [
          'On pense rarement aux **frelons à Paris**, et pourtant les nids sont fréquents dans les **arbres des cours et des squares**, sous les **rebords de toit**, dans les **coffres de volets** et derrière les **jardinières de balcon**. Le **frelon asiatique** construit souvent son nid très haut dans les arbres, caché par le feuillage.',
          'Nous intervenons dans les **20 arrondissements** avec une **perche télescopique** qui traite le nid à distance, sans monter dans l’arbre ni sur le toit, et en **tenue de protection intégrale**.',
        ],
        points: [
          { t: 'Nid de frelons dans une cour à Paris', x: 'Arbre de cour ou de square : traitement à la perche, sans échafaudage.' },
          { t: 'Nid de guêpes sur un balcon parisien', x: 'Jardinière, store, rebord : traitement rapide pour retrouver votre balcon.' },
          { t: 'Nid dans un coffre de volet à Paris', x: 'N’actionnez plus le volet : nous traitons le nid en toute sécurité.' },
        ],
        faq: [
          { q: 'Y a-t-il des frelons asiatiques à Paris ?', a: 'Oui, le frelon asiatique est présent en Île-de-France, y compris en ville, dans les arbres et sous les toits.' },
          { q: 'Qui détruit un nid dans un arbre de la rue ?', a: 'Sur l’espace public, prévenez la mairie d’arrondissement. Dans une cour privée ou sur votre balcon, nous intervenons sur devis.' },
          { q: 'Intervenez-vous le jour même à Paris ?', a: 'Très souvent, 7j/7, selon la hauteur et l’accès au nid.' },
        ],
      },
      'val-de-marne': {
        accroche: 'Jardins, haies, bords de Marne et toitures de pavillons : le Val-de-Marne est l’un des départements où nous détruisons le plus de nids.',
        paras: [
          'Avec ses **zones pavillonnaires**, ses **jardins** et ses **bords de Marne et de Seine**, le Val-de-Marne offre aux **frelons** et aux **guêpes** de nombreux abris : **haies**, **arbres**, **abris de jardin**, **sous-toitures**, **cheminées** et **coffres de volets**.',
          'Basés à **Saint-Maurice**, nous intervenons rapidement dans **tout le 94**, avec une **perche télescopique** pour les nids en hauteur et le matériel adapté pour les **toitures**, les **combles** et les **cheminées**.',
        ],
        points: [
          { t: 'Nid de frelons asiatiques dans un arbre du 94', x: 'Souvent très haut : notre perche télescopique le traite sans grimper.' },
          { t: 'Nid de guêpes sous une tuile dans le Val-de-Marne', x: 'Va-et-vient sous la toiture : traitement en hauteur, dès 199 € TTC.' },
          { t: 'Nid dans une haie du Val-de-Marne', x: 'Ne taillez pas la haie : la colonie peut attaquer. Nous traitons d’abord le nid.' },
        ],
        faq: [
          { q: 'Intervenez-vous dans tout le Val-de-Marne ?', a: 'Oui, dans les 47 communes, souvent le jour même grâce à notre base de Saint-Maurice.' },
          { q: 'Ma mairie aide-t-elle à détruire les nids ?', a: 'Certaines communes participent aux frais de destruction des nids de frelons asiatiques : renseignez-vous auprès de votre mairie.' },
          { q: 'Faut-il retirer le nid après le traitement ?', a: 'Pas toujours. Le technicien vous indique quoi faire selon l’emplacement du nid.' },
        ],
      },
      'hauts-de-seine': {
        accroche: 'Parcs, forêts proches, jardins et toitures : dans les Hauts-de-Seine, les nids de frelons sont fréquents de la fin du printemps à l’automne.',
        paras: [
          'Les **Hauts-de-Seine** comptent de nombreux **parcs**, des **jardins privés** et des **zones boisées** à proximité, où les **frelons** et les **guêpes** trouvent de quoi construire leurs nids : **arbres**, **haies**, **sous-toitures**, **combles** et **cheminées**.',
          'Nos techniciens interviennent dans les **communes du 92**, avec la **perche télescopique** pour les nids en hauteur et une **tenue de protection intégrale**, de jour comme en soirée.',
        ],
        points: [
          { t: 'Nid de frelons dans un jardin des Hauts-de-Seine', x: 'Arbre ou haie : traitement à distance, enfants et animaux à l’abri.' },
          { t: 'Nid dans les combles dans le 92', x: 'Bourdonnement sous le toit : n’y entrez pas, nous traitons le nid en sécurité.' },
          { t: 'Frelons européens la nuit, dans le 92', x: 'Ils sont attirés par la lumière : fermez les fenêtres éclairées et appelez-nous.' },
        ],
        faq: [
          { q: 'Intervenez-vous dans tout le 92 ?', a: 'Oui, dans les communes des Hauts-de-Seine, 7j/7.' },
          { q: 'Quelle différence entre frelon asiatique et européen ?', a: 'L’asiatique est noir avec un anneau orangé et des pattes jaunes ; l’européen est roux et jaune, plus gros. Les deux nids se traitent de la même façon.' },
          { q: 'Combien coûte la destruction d’un nid ?', a: 'Dès 89 € TTC pour un nid accessible, 149 € à la perche, 199 € en toiture ou dans les combles.' },
        ],
      },
    },
  },
  cafards: {
    famille: 'cafards', base: '/cafards', label: 'Cafards', motCle: 'Cafards', h1: 'Traitement des cafards', prix: '120 €', prixNum: '120',
    prixNote: 'T1 ou T2, gel appât professionnel. Devis gratuit.', suffixes: [' : traitement dès 120 €, 7j/7', ' : traitement dès 120 €', ' : dès 120 €, 7j/7', ' : traitement 7j/7', ' : traitement', ''],
    description: (dans, code) => `Cafards et blattes ${dans} (${code}) : gel appât, insecticide ou vapeur sèche par un technicien certifié. Dès 120 € TTC, devis gratuit, garantie 1 an.`,
    etapes: [
      ['Appel ou photo|Blatte germanique ou orientale ? Une photo suffit souvent à l’identifier et à fixer le prix.', 'Devis gratuit|Vous décrivez le logement, nous vous annonçons le tarif tout de suite.'],
      ['Inspection|Charnières, arrière du frigo et du four, gaines, siphons : chaque cachette est repérée.', 'Repérage des foyers|Le technicien suit les traces jusqu’aux nids.'],
      ['Traitement ciblé|Gel appât dans les zones de passage, insecticide ou vapeur sèche selon l’infestation.', 'Élimination|Le gel est rapporté dans les cachettes et touche toute la colonie.'],
      ['Contrôle et garantie|Passage de contrôle si besoin, conseils, garantie 1 an.', 'Suivi|Nous vérifions le résultat et vous laissons des consignes simples.'],
    ],
    tarifs: [
      { label: 'T1 ou T2', prix: 'dès 120 €', detail: 'Gel appât professionnel' },
      { label: 'Grand logement', prix: 'sur devis', detail: 'Ou infestation marquée' },
      { label: 'Local professionnel', prix: 'sur devis', detail: 'Restaurant, commerce, attestation fournie' },
    ],
    contenu: {
      ...CONTENU_GC.cafards, // Essonne, Yvelines, Seine-et-Marne (11/11/2026)
      paris: {
        accroche: 'Cuisines, colonnes d’eau, gaines techniques et commerces de bouche : à Paris, les cafards passent facilement d’un logement à l’autre.',
        paras: [
          'Dans les immeubles parisiens, les **cafards** et les **blattes** circulent par les **colonnes d’eau**, les **gaines techniques** et les **bouches d’aération**. Une infestation dans un restaurant ou un appartement voisin peut gagner tout l’immeuble si elle n’est pas traitée.',
          'Nous traitons les **appartements**, les **restaurants**, les **boulangeries** et les **commerces** dans les **20 arrondissements**, avec un **gel appât professionnel**, un **insecticide ciblé** ou la **vapeur sèche**.',
        ],
        points: [
          { t: 'Cafards dans un restaurant à Paris', x: 'Traitement hors service, suivi et attestation pour vos contrôles d’hygiène.' },
          { t: 'Blattes dans la cuisine, à Paris', x: 'Derrière le frigo, le four et sous l’évier : on traite les cachettes, pas seulement les insectes visibles.' },
          { t: 'Cafards venus des voisins, à Paris', x: 'En immeuble, un traitement coordonné avec le syndic donne les meilleurs résultats.' },
        ],
        faq: [
          { q: 'Intervenez-vous dans tous les arrondissements de Paris ?', a: 'Oui, du 1er au 20e, 7j/7.' },
          { q: 'Les cafards reviennent de chez le voisin, que faire ?', a: 'Prévenez le syndic : un traitement des parties communes et des logements touchés évite les allers-retours.' },
          { q: 'Combien coûte un traitement anti-cafards à Paris ?', a: 'Dès 120 € TTC pour un T1 ou un T2, sur devis pour un grand logement ou un local professionnel.' },
        ],
      },
      'val-de-marne': {
        accroche: 'Grands ensembles, pavillons, commerces : dans le Val-de-Marne, nous éliminons cafards et blattes depuis notre base de Saint-Maurice.',
        paras: [
          'Dans le Val-de-Marne, les **blattes germaniques** s’installent surtout dans les **cuisines** et les **salles de bain** des appartements, tandis que les **blattes orientales** remontent des **caves**, des **vide-ordures** et des **canalisations**, en particulier au rez-de-chaussée.',
          'Nous intervenons dans **tout le 94**, chez les particuliers, les **bailleurs**, les **copropriétés** et les **restaurants**, avec un traitement adapté et des conseils pour éviter le retour des cafards.',
        ],
        points: [
          { t: 'Cafards dans un HLM du Val-de-Marne', x: 'Traitement du logement et conseils pour coordonner avec le bailleur.' },
          { t: 'Blattes dans un restaurant du 94', x: 'Plan de lutte, passages réguliers et attestation pour l’hygiène.' },
          { t: 'Gros cafards noirs au rez-de-chaussée, dans le 94', x: 'Blattes orientales venues des caves : on traite aussi les points d’entrée.' },
        ],
        faq: [
          { q: 'Intervenez-vous partout dans le Val-de-Marne ?', a: 'Oui, dans les 47 communes, souvent le jour même.' },
          { q: 'Faut-il quitter le logement pendant le traitement ?', a: 'Avec le gel appât, non. Avec un insecticide, une courte absence peut être demandée.' },
          { q: 'Le traitement est-il garanti ?', a: 'Oui, nos traitements sont garantis 1 an.' },
        ],
      },
      'hauts-de-seine': {
        accroche: 'Immeubles résidentiels, restaurants, cuisines d’entreprise : dans les Hauts-de-Seine, nous traitons cafards et blattes en toute discrétion.',
        paras: [
          'Dans les Hauts-de-Seine, les **cafards** se rencontrent dans les **appartements**, mais aussi dans les **restaurants**, les **cantines** et les **cuisines d’entreprise**, où chaleur et nourriture leur conviennent parfaitement.',
          'Nos techniciens interviennent dans les **communes du 92** avec un **gel appât professionnel**, un **insecticide ciblé** ou la **vapeur sèche**, et une **attestation** pour les professionnels.',
        ],
        points: [
          { t: 'Cafards dans une cuisine d’entreprise du 92', x: 'Intervention en dehors des heures de service, attestation fournie.' },
          { t: 'Blattes dans un appartement des Hauts-de-Seine', x: 'Gel appât dans les zones de passage et conseils pour éviter le retour.' },
          { t: 'Cafards dans un restaurant du 92', x: 'Suivi régulier et plan de lutte pour vos contrôles d’hygiène.' },
        ],
        faq: [
          { q: 'Intervenez-vous dans tout le 92 ?', a: 'Oui, dans les communes des Hauts-de-Seine, 7j/7.' },
          { q: 'Pouvez-vous intervenir la nuit dans un restaurant ?', a: 'Nous adaptons les horaires à votre activité pour ne pas gêner le service.' },
          { q: 'Combien de passages faut-il ?', a: 'Souvent deux, selon l’infestation : le technicien vous l’indique après l’inspection.' },
        ],
      },
    },
  },
  puces: {
    famille: 'puces', base: '/puces', label: 'Puces', motCle: 'Puces', h1: 'Traitement contre les puces', prix: '120 €', prixNum: '120',
    prixNote: 'Appartement, sols et textiles traités. Devis gratuit.', suffixes: [' : traitement dès 120 €, 7j/7', ' : traitement dès 120 €', ' : dès 120 €, 7j/7', ' : traitement 7j/7', ' : traitement', ''],
    description: (dans, code) => `Puces ${dans} (${code}) : traitement du logement par un technicien certifié, en lien avec le vétérinaire. Dès 120 € TTC, devis gratuit, garantie 1 an.`,
    etapes: [
      ['Appel ou photo|Une photo des piqûres ou de l’insecte confirme qu’il s’agit de puces et fixe le prix.', 'Devis gratuit|Quelques questions sur le logement et vos animaux : vous avez le tarif tout de suite.'],
      ['Préparation|Aspiration complète, lavage à 60 °C du couchage et des plaids, sols dégagés.', 'Avant le passage|Nous vous envoyons la liste simple des gestes à faire.'],
      ['Traitement du logement|Insecticide professionnel sur les sols, les fentes, les textiles et les zones de repos de l’animal.', 'Traitement|Plinthes, dessous des meubles et couchage de l’animal en priorité.'],
      ['Second passage et garantie|Les puces qui sortent des cocons sont touchées. Garantie 1 an.', 'Suivi|Aspiration quotidienne quelques semaines, second passage si besoin.'],
    ],
    tarifs: [
      { label: 'Appartement', prix: 'dès 120 €', detail: 'Sols, textiles et couchage de l’animal' },
      { label: 'Maison, grand logement', prix: 'sur devis', detail: 'Toutes les pièces, garage et véranda' },
      { label: 'Local professionnel, location meublée', prix: 'sur devis', detail: 'Intervention planifiée, attestation' },
    ],
    contenu: {
      ...CONTENU_GC.puces, // Essonne, Yvelines, Seine-et-Marne (11/11/2026)
      paris: {
        accroche: 'Parquets anciens, tapis, chiens en promenade dans les parcs : à Paris, les puces s’installent vite dans les appartements.',
        paras: [
          'À Paris, les **puces** arrivent surtout avec les **chiens et les chats**, lors des **déménagements** ou depuis les **caves** où vivent des rongeurs. Les œufs tombent sur les sols et les **larves** se cachent dans les **fentes des parquets anciens**, les **tapis** et sous les meubles.',
          'Nous traitons les appartements des **20 arrondissements**, en lien avec le traitement vétérinaire de vos animaux, avec un **second passage** si besoin pour les puces qui sortent des cocons.',
        ],
        points: [
          { t: 'Puces dans un parquet ancien à Paris', x: 'Les larves s’enfoncent dans les fentes : le traitement y est appliqué avec soin.' },
          { t: 'Puces après un emménagement à Paris', x: 'Les cocons laissés par l’ancien occupant éclosent à votre arrivée.' },
          { t: 'Puces sans animal, à Paris', x: 'Rongeurs des caves, meuble d’occasion : nous cherchons l’origine.' },
        ],
        faq: [
          { q: 'Intervenez-vous dans tous les arrondissements ?', a: 'Oui, du 1er au 20e, 7j/7.' },
          { q: 'Le propriétaire doit-il payer ?', a: 'Le logement loué doit être exempt de toute infestation d’espèces nuisibles et parasites (loi du 6 juillet 1989, article 6). Prévenez-le par écrit.' },
          { q: 'Faut-il traiter l’animal aussi ?', a: 'Oui, chez le vétérinaire, en même temps que le logement : sinon les puces reviennent.' },
        ],
      },
      'val-de-marne': {
        accroche: 'Maisons avec jardin, bords de Marne, bois de Vincennes : dans le Val-de-Marne, nos animaux ramènent facilement des puces.',
        paras: [
          'Dans le Val-de-Marne, beaucoup de familles vivent en **pavillon avec jardin** ou promènent leur chien au **bois de Vincennes** et sur les **bords de Marne**. Hérissons, chats du voisinage et rongeurs déposent des puces que votre animal ramène à l’intérieur.',
          'Basés à **Saint-Maurice**, nous intervenons dans tout le 94 : traitement du logement, du **garage** et des zones de repos de l’animal, en lien avec le vétérinaire.',
        ],
        points: [
          { t: 'Puces dans un pavillon du Val-de-Marne', x: 'Toutes les pièces, le garage et la véranda sont traités.' },
          { t: 'Puces au retour de vacances dans le 94', x: 'Maison restée fermée : les puces sortent des cocons à votre retour.' },
          { t: 'Puces venues du jardin, dans le 94', x: 'Faune et chats errants : on limite leur accès et on traite la maison.' },
        ],
        faq: [
          { q: 'Intervenez-vous partout dans le Val-de-Marne ?', a: 'Oui, dans les 47 communes, souvent le jour même.' },
          { q: 'Faut-il traiter le jardin ?', a: 'Le plus important est la maison et l’animal. Au jardin, limitez l’accès des animaux errants.' },
          { q: 'Le traitement est-il garanti ?', a: 'Oui, garanti 1 an.' },
        ],
      },
      'hauts-de-seine': {
        accroche: 'Bois de Boulogne, bords de Seine, grands appartements : dans les Hauts-de-Seine, les puces arrivent souvent avec nos animaux.',
        paras: [
          'Dans les Hauts-de-Seine, les promenades au **bois de Boulogne**, dans les **parcs** et le long de la **Seine** exposent les chiens aux puces. Dans les grands appartements, **tapis épais** et **parquets** offrent ensuite de nombreuses cachettes.',
          'Nos techniciens interviennent dans les **communes du 92**, avec un traitement complet du logement et un **second passage** si nécessaire.',
        ],
        points: [
          { t: 'Puces dans un grand appartement du 92', x: 'Tapis, parquets et canapés : traitement adapté aux matières.' },
          { t: 'Puces du chien dans les Hauts-de-Seine', x: 'Vétérinaire pour l’animal, technicien pour la maison.' },
          { t: 'Puces dans une location meublée du 92', x: 'Intervention entre deux locataires, attestation fournie.' },
        ],
        faq: [
          { q: 'Intervenez-vous dans tout le 92 ?', a: 'Oui, dans les communes des Hauts-de-Seine, 7j/7.' },
          { q: 'Le traitement abîme-t-il les tapis ?', a: 'Non, le produit est appliqué en fine couche. Le technicien signale toute matière fragile.' },
          { q: 'Combien de passages faut-il ?', a: 'Souvent un traitement et un second passage, selon l’infestation.' },
        ],
      },
    },
  },
  souris: {
    famille: 'souris', base: '/souris', label: 'Souris', motCle: 'Souris', h1: 'Traitement contre les souris', prix: '120 €', prixNum: '120',
    prixNote: 'Appartement, pièges ou postes sécurisés. Devis gratuit.', suffixes: [' : traitement dès 120 €, 7j/7', ' : traitement dès 120 €', ' : dès 120 €, 7j/7', ' : traitement 7j/7', ' : traitement', ''],
    description: (dans, code) => `Souris ${dans} (${code}) : pièges, postes sécurisés et accès rebouchés par un technicien certifié. Dès 120 € TTC, devis gratuit, garantie 1 an.`,
    etapes: [
      ['Appel ou photo|Une photo des crottes ou des dégâts suffit souvent : souris ou rat, nous vous le disons et vous donnons le prix.', 'Devis gratuit|Quelques questions sur le logement et vous connaissez le tarif.'],
      ['Recherche des entrées|Passages de tuyaux, bas de portes, gaines : le technicien repère par où elles arrivent.', 'Diagnostic|Traces, crottes et grignotages indiquent les passages et les nids.'],
      ['Pose des dispositifs|Pièges mécaniques ou connectés, ou postes verrouillés hors de portée des enfants.', 'Traitement|Les dispositifs sont placés le long des murs, là où elles circulent.'],
      ['Colmatage et garantie|Les accès sont bouchés avec des matériaux qu’elles ne rongent pas. Garantie 1 an.', 'Suivi|Contrôle des captures, accès fermés, garantie d’un an.'],
    ],
    tarifs: [
      { label: 'Appartement', prix: 'dès 120 €', detail: 'Pièges ou postes sécurisés, colmatage' },
      { label: 'Commerce, restaurant', prix: 'sur devis', detail: 'Attestation fournie' },
      { label: 'Copropriété, contrat annuel', prix: 'sur devis', detail: 'Parties communes, passages réguliers' },
    ],
    contenu: {
      ...CONTENU_GC.souris, // Essonne, Yvelines, Seine-et-Marne (11/11/2026)
      paris: {
        accroche: 'Cloisons, faux plafonds, cuisines : à Paris, les souris passent d’un appartement à l’autre par les moindres interstices.',
        paras: [
          'À Paris, les **souris** profitent des **cloisons creuses**, des **planchers anciens**, des **faux plafonds** et des **passages de tuyaux** pour circuler entre les logements. On les entend gratter la nuit, on trouve leurs crottes dans les placards et derrière l’électroménager.',
          'Nous intervenons dans les **20 arrondissements** : pose de **pièges** ou de **postes sécurisés**, puis **colmatage** des passages avec des matériaux qu’elles ne rongent pas.',
        ],
        points: [
          { t: 'Souris dans les murs à Paris', x: 'Cloisons creuses et doublages : on repère leurs sorties et on bouche les passages.' },
          { t: 'Souris dans une cuisine parisienne', x: 'Emballages grignotés, crottes dans les placards : traitement sans risque pour la famille.' },
          { t: 'Souris dans un commerce à Paris', x: 'Postes sécurisés, suivi et attestation pour vos contrôles.' },
        ],
        faq: [
          { q: 'Intervenez-vous dans tous les arrondissements de Paris ?', a: 'Oui, du 1er au 20e, 7j/7.' },
          { q: 'Pourquoi les souris reviennent-elles ?', a: 'Parce que les passages restent ouverts. Sans colmatage, d’autres souris arrivent des logements voisins.' },
          { q: 'Combien coûte un traitement contre les souris à Paris ?', a: 'Dès 120 € TTC pour un appartement, sur devis pour un commerce ou une copropriété.' },
        ],
      },
      'val-de-marne': {
        accroche: 'Pavillons, caves, combles et appartements : dans le Val-de-Marne, les souris s’installent surtout à l’arrivée du froid.',
        paras: [
          'Dans le Val-de-Marne, les **souris** entrent dans les **pavillons** par les **soupiraux**, les **garages** et les **passages de câbles**, et dans les **immeubles** par les **caves** et les **gaines**. À l’automne, elles cherchent la chaleur des logements.',
          'Depuis **Saint-Maurice**, nous intervenons dans **tout le 94** avec des **pièges**, des **postes sécurisés** ou des **pièges connectés**, et nous rebouchons chaque accès.',
        ],
        points: [
          { t: 'Souris dans les combles d’un pavillon du 94', x: 'Petites courses au-dessus des chambres : traitement des combles et des accès.' },
          { t: 'Souris dans une cave du Val-de-Marne', x: 'Postes sécurisés et fermeture des passages vers les logements.' },
          { t: 'Souris dans un appartement du 94', x: 'Pièges et colmatage, sans risque pour les enfants et les animaux.' },
        ],
        faq: [
          { q: 'Intervenez-vous partout dans le Val-de-Marne ?', a: 'Oui, dans les 47 communes, souvent le jour même.' },
          { q: 'Souris ou rat : comment savoir ?', a: 'Crottes de 3 à 6 mm pour la souris, de 1 à 2 cm pour le rat. Une photo nous permet de vous le dire.' },
          { q: 'Le traitement est-il garanti ?', a: 'Oui, garanti 1 an.' },
        ],
      },
      'hauts-de-seine': {
        accroche: 'Maisons, bureaux et immeubles : dans les Hauts-de-Seine, nous chassons les souris avec pièges et colmatage.',
        paras: [
          'Dans les Hauts-de-Seine, les **souris** se rencontrent dans les **maisons**, les **appartements** et les **bureaux** : elles circulent dans les **faux plafonds**, les **gaines** et les **cloisons**, et s’attaquent aux **câbles** et aux **réserves alimentaires**.',
          'Nos techniciens interviennent dans les **communes du 92** : diagnostic, pièges ou postes sécurisés, et **colmatage** pour qu’elles ne reviennent pas.',
        ],
        points: [
          { t: 'Souris dans des bureaux du 92', x: 'Faux plafonds et cuisines d’entreprise : intervention discrète.' },
          { t: 'Souris dans une maison des Hauts-de-Seine', x: 'Cave, garage, combles : on trouve les entrées avant de traiter.' },
          { t: 'Câbles rongés dans le 92', x: 'Les souris s’attaquent aux gaines électriques : un traitement rapide limite les dégâts.' },
        ],
        faq: [
          { q: 'Intervenez-vous dans tout le 92 ?', a: 'Oui, dans les communes des Hauts-de-Seine, 7j/7.' },
          { q: 'Utilisez-vous du poison ?', a: 'Selon le lieu : pièges mécaniques ou connectés, ou postes sécurisés et verrouillés. La méthode est choisie avec vous.' },
          { q: 'Combien coûte le traitement ?', a: 'Dès 120 € TTC pour un appartement, sur devis pour une maison ou des bureaux.' },
        ],
      },
    },
  },
}

// Fil d'Ariane hiérarchique (13/11/2026) : Accueil › Service › Département › Ville.
// Uniquement pour les familles qui ont une page par département et les 6 départements concernés.
const BASES_AVEC_DEP = ['/deratisation', '/punaises-de-lit', '/destruction-nid-frelon', '/cafards', '/puces', '/souris']
const CODE_VERS_DEP: Record<string, DepSlug> = { '75': 'paris', '94': 'val-de-marne', '92': 'hauts-de-seine', '91': 'essonne', '78': 'yvelines', '77': 'seine-et-marne' }
export function filDepartement(base: string, code: string): { href: string; label: string } | undefined {
  const d = CODE_VERS_DEP[code]
  if (!d || !BASES_AVEC_DEP.includes(base) || !(d in DEPS)) return undefined
  return { href: `${base}/${d}`, label: DEPS[d].nom }
}
