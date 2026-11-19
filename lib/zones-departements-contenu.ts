// Pages /zones/[département] refaites le 19/11/2026 (demande de l'utilisateur : « pages trop faibles en contenu,
// étoffe-les totalement avec plein de liens vers les nuisibles »). Une section par nuisible, avec un texte local écrit
// à la main pour chaque département, puis les liens vers la page département du nuisible, les pages ville et les guides.
// Règles : pas de chiffre inventé (populations Insee via geo.api.gouv.fr), pas de tiret long, jamais « naturel »,
// « non toxique » ni « sans danger » pour un biocide, « écologique » réservé aux méthodes sans biocide et défini.
import type { FamilleVille } from './services-ville'
import type { ServiceDep } from './departements-services'

export type CleNuisible = 'rats' | 'souris' | 'punaises' | 'cafards' | 'fourmis' | 'frelons' | 'chenilles' | 'pigeons' | 'puces' | 'acariens' | 'anthrenes' | 'desinfection'

// Données communes à tous les départements (méthode, prix, liens). Le texte local est dans CONTENU_ZONES.
export const NUISIBLES_ZONES: {
  cle: CleNuisible; titre: string; nom: string; famille?: FamilleVille; dep?: ServiceDep; service: string; prix: string; garantie: string
  methode: string; guides: { href: string; label: string }[]
}[] = [
  { cle: 'rats', titre: 'Dératisation et traitement des rats', nom: 'Rats', famille: 'deratisation', dep: 'deratisation', service: '/services/deratisation', prix: 'dès 120 €', garantie: '1 an',
    methode: 'Postes d’appâtage sécurisés ou dératisation sans raticide (piège Ekomille, pièges connectés), puis rebouchage des accès.',
    guides: [{ href: '/blog/rat-mode-de-vie', label: 'Le mode de vie du rat' }, { href: '/blog/rats-dans-les-combles', label: 'Rats dans les combles' }, { href: '/blog/rat-dans-les-toilettes', label: 'Rat dans les toilettes' }, { href: '/services/deratisation-ecologique', label: 'Dératisation écologique, sans raticide' }] },
  { cle: 'souris', titre: 'Traitement contre les souris', nom: 'Souris', famille: 'souris', dep: 'souris', service: '/services/deratisation', prix: 'dès 120 €', garantie: '1 an',
    methode: 'Repérage des passages, pièges ou postes sécurisés, colmatage des trous à la laine d’acier et au mortier.',
    guides: [{ href: '/blog/souris-par-ou-entrent-elles', label: 'Par où entrent les souris' }, { href: '/blog/rat-ou-souris-comment-reconnaitre', label: 'Rat ou souris : les reconnaître' }, { href: '/blog/rat-dans-les-murs-cloisons', label: 'Bruits dans les murs' }] },
  { cle: 'punaises', titre: 'Traitement des punaises de lit', nom: 'Punaises de lit', famille: 'punaises', dep: 'punaises', service: '/services/punaises-de-lit', prix: 'dès 290 €', garantie: '1 an',
    methode: '2 passages inclus : insecticide professionnel, ou sans insecticide par cryogénie (−78 °C) ou vapeur sèche.',
    guides: [{ href: '/services/cryogenie-punaises-de-lit', label: 'Punaises de lit sans insecticide : cryogénie' }, { href: '/blog/cycle-de-vie-punaise-de-lit', label: 'Cycle de vie de la punaise' }, { href: '/blog/piqures-de-punaises-de-lit', label: 'Piqûres en photos' }, { href: '/blog/detection-canine-punaises-de-lit', label: 'Détection canine' }] },
  { cle: 'cafards', titre: 'Traitement des cafards et blattes', nom: 'Cafards', famille: 'cafards', dep: 'cafards', service: '/services/cafards-blattes', prix: 'dès 120 €', garantie: '1 an',
    methode: '2 passages : gel appât et insecticide professionnels dans les gaines et les cuisines, vapeur sèche selon les pièces.',
    guides: [{ href: '/blog/gel-anti-cafard-ne-marche-pas', label: 'Pourquoi le gel du commerce échoue' }, { href: '/blog/restaurant-plan-lutte-nuisibles', label: 'Plan de lutte en restaurant' }] },
  { cle: 'fourmis', titre: 'Traitement des fourmis', nom: 'Fourmis', famille: 'fourmis', service: '/services/fourmis', prix: 'dès 120 €', garantie: '1 an',
    methode: 'Gel appât rapporté jusqu’à la reine, traitement du nid, injection dans le bois pour les fourmis charpentières. Intervention sous 48 h.',
    guides: [{ href: '/fourmis', label: 'Les 11 espèces de fourmis' }, { href: '/blog/fourmis-tout-savoir-mode-de-vie-reproduction', label: 'Tout savoir sur les fourmis' }, { href: '/blog/tapinoma-magnum-fourmi-invasive', label: 'Tapinoma magnum' }] },
  { cle: 'frelons', titre: 'Destruction de nid de frelons et de guêpes', nom: 'Frelons et guêpes', famille: 'frelons', dep: 'frelons', service: '/services/guepes-frelons', prix: 'dès 89 €', garantie: '3 mois',
    methode: 'Destruction du nid à la perche télescopique (jusqu’à 23 m), en général sous 1 heure.',
    guides: [{ href: '/blog/frelon-asiatique-tout-savoir', label: 'Le frelon asiatique' }, { href: '/blog/guepes-tout-savoir', label: 'Tout savoir sur les guêpes' }, { href: '/blog/nid-de-frelon-en-hiver', label: 'Le nid en hiver' }] },
  { cle: 'chenilles', titre: 'Traitement des chenilles processionnaires', nom: 'Chenilles processionnaires', famille: 'chenilles', service: '/services/chenilles-processionnaires', prix: 'dès 89 €', garantie: '1 an',
    methode: 'Retrait et destruction des nids, écopièges sur les troncs, pièges à phéromones, techniciens protégés contre les poils urticants.',
    guides: [{ href: '/blog/chenilles-processionnaires-cycle-dangers', label: 'Cycle et dangers' }, { href: '/blog/chenille-processionnaire-du-pin', label: 'Processionnaire du pin' }, { href: '/blog/chenille-processionnaire-du-chene', label: 'Processionnaire du chêne' }] },
  { cle: 'pigeons', titre: 'Dépigeonnage et traitement des pigeons', nom: 'Pigeons', service: '/services/pigeons', prix: 'dès 150 €', garantie: '1 an',
    methode: 'Pics inox, filets sur mesure, nettoyage des fientes : des barrières physiques, sans tuer les oiseaux.',
    guides: [{ href: '/blog/nid-de-pigeon-balcon-enlever', label: 'Enlever un nid de pigeon' }, { href: '/blog/depigeonnage-balcon-filet-nettoyage', label: 'Balcon : filet et nettoyage' }] },
  { cle: 'puces', titre: 'Traitement des puces', nom: 'Puces', famille: 'puces', dep: 'puces', service: '/services/puces', prix: 'dès 120 €', garantie: '1 an',
    methode: 'Traitement de tout le logement (sols, plinthes, tissus), en même temps que le traitement des animaux chez le vétérinaire.',
    guides: [{ href: '/blog/puces-tout-savoir', label: 'Tout savoir sur les puces' }, { href: '/blog/cycle-de-vie-puce', label: 'Cycle de vie de la puce' }] },
  { cle: 'acariens', titre: 'Traitement des acariens', nom: 'Acariens', famille: 'acariens', service: '/services/acariens', prix: 'dès 120 €', garantie: '1 an',
    methode: 'Vapeur sèche, cryogénie ou acaricide sur matelas, sommiers, canapés, tapis et rideaux.',
    guides: [{ href: '/blog/acariens-matelas', label: 'Acariens du matelas' }, { href: '/blog/acariens-humidite-maison', label: 'Acariens et humidité' }, { href: '/blog/acariens-ou-punaises-de-lit', label: 'Acariens ou punaises ?' }] },
  { cle: 'anthrenes', titre: 'Traitement des anthrènes', nom: 'Anthrènes', famille: 'anthrenes', service: '/services/anthrenes', prix: 'dès 120 €', garantie: '1 an',
    methode: 'Recherche du foyer (tapis, laine, nid d’oiseau), puis traitement avec ou sans insecticide.',
    guides: [{ href: '/blog/anthrenes-origine-traitement', label: 'Origine et traitement' }, { href: '/blog/cycle-de-vie-anthrene', label: 'Cycle de vie de l’anthrène' }, { href: '/blog/mites-vetements-origine-traitement-prevention', label: 'Mites des vêtements' }] },
  { cle: 'desinfection', titre: 'Désinfection des logements et des locaux', nom: 'Désinfection', service: '/services/desinfection', prix: 'dès 150 €', garantie: '1 an',
    methode: 'Désinfection après infestation, sinistre ou logement très encombré, avec attestation.',
    guides: [{ href: '/blog/deratisation-logement-syndrome-diogene', label: 'Un logement très encombré à Maisons-Alfort' }] },
]

export type ContenuZone = {
  frequents: string // nuisibles les plus fréquents, pour « En bref »
  delai: string // délai d'intervention, pour « En bref »
  population?: string // population Insee, si connue
  textes: Record<CleNuisible, string>
  chantiers?: { href: string; t: string }[]
  faq: { q: string; a: string }[]
}

export const CONTENU_ZONES: Record<string, ContenuZone> = {
  paris: {
    frequents: 'punaises de lit, cafards, souris, rats et pigeons',
    delai: 'Souvent le jour même : notre base de Saint-Maurice est aux portes du 12e arrondissement.',
    population: '2 103 778 habitants (Insee)',
    textes: {
      rats: 'À Paris, le surmulot vit dans les **égouts**, le long de la **Seine** et des **canaux** (Saint-Martin, Ourcq), et dans les **jardins publics**. Il remonte dans les **caves**, les **cours** et les **locaux poubelles** des immeubles. Dans une copropriété, nous traitons les parties communes avec le syndic pour couper les passages.',
      souris: 'Les **immeubles anciens** parisiens sont pleins de vides : planchers, doublages, gaines, faux plafonds. Les souris y passent d’un appartement à l’autre et grattent la nuit dans les cloisons. Nous bouchons les trous autour des tuyaux, des plinthes et des compteurs.',
      punaises: 'Hôtels, **locations meublées**, **chambres de bonne**, métro, gares : Paris est l’endroit où les punaises de lit voyagent le plus. Une infestation commence souvent par une valise ou un meuble d’occasion, puis gagne l’appartement voisin par les **parquets** et les **prises**.',
      cafards: 'Les blattes germaniques s’installent dans les **cuisines**, derrière l’électroménager, et circulent par les **colonnes d’eau** et les **gaines** des immeubles. Les **restaurants** et commerces de bouche en rez-de-chaussée sont souvent le point de départ.',
      fourmis: 'Dans les **appartements en rez-de-chaussée** et les **cours intérieures**, les fourmis entrent par les fissures des dallages et les joints de fenêtres, attirées par le sucre et les miettes. Il faut atteindre la reine, sinon la colonne revient.',
      frelons: 'À Paris aussi, le **frelon asiatique** construit ses nids dans les **arbres des squares**, sous les **balcons**, dans les **jardinières** ou sous les **toits en zinc**. Les nids en hauteur sont détruits à la perche, sans échafaudage.',
      chenilles: 'Les **pins** et les **chênes** des bois de **Vincennes** et de **Boulogne**, des parcs et de certains jardins privés accueillent des nids de chenilles processionnaires. Les poils urticants concernent les enfants et les chiens qui fréquentent ces espaces.',
      pigeons: 'Rebords de fenêtres, **balcons haussmanniens**, cours, verrières : les pigeons parisiens nichent partout où ils peuvent se poser. Pics et filets règlent le problème durablement, avec un nettoyage des fientes.',
      puces: 'Les puces arrivent avec un **chien** ou un **chat**, ou restent dans les **parquets anciens** après le départ d’un locataire qui avait des animaux. Elles piquent surtout les chevilles au retour de vacances, quand l’appartement est resté vide.',
      acariens: 'Appartements petits et peu aérés, **chambres sous les toits**, literie ancienne : les acariens prolifèrent dans la chaleur et l’humidité. Le traitement vise le matelas, le sommier, les tapis et les rideaux.',
      anthrenes: 'Les **tapis**, **moquettes** et **lainages** des appartements anciens attirent les anthrènes, souvent venus d’un **nid de pigeon** ou de moineau sous le toit. On reconnaît leurs petites larves velues sous les meubles.',
      desinfection: 'Logement **très encombré**, appartement après un **décès** ou un **dégât des eaux**, local professionnel : nous désinfectons et remettons une **attestation**, utile pour le bailleur, le syndic ou l’assurance.',
    },
    chantiers: [
      { href: '/blog/punaises-de-lit-paris-12-grosse-infestation', t: 'Grosse infestation de punaises de lit à Paris 12e, traitée en 2 passages' },
      { href: '/punaises-de-lit/paris-16', t: 'Chantier punaises de lit à Paris 16e, en vidéo' },
      { href: '/punaises-de-lit/paris-1', t: 'Chantier punaises de lit à Paris 1er, en vidéo' },
    ],
    faq: [
      { q: 'Intervenez-vous dans tous les arrondissements de Paris ?', a: 'Oui, dans les 20 arrondissements, 7j/7. Les plus proches de notre base de Saint-Maurice (12e, 11e, 20e, 13e) sont souvent servis le jour même.' },
      { q: 'Des punaises de lit dans un hôtel ou un Airbnb à Paris : que faire ?', a: 'Isolez les bagages dans des sacs fermés, lavez le linge à 60 °C et faites inspecter le logement. Pour les hôtels et locations, nous intervenons chambre par chambre, discrètement.' },
      { q: 'Qui paie la dératisation dans un immeuble parisien ?', a: 'Dans les parties communes, c’est la copropriété (le syndic). Dans votre logement, c’est vous, ou le propriétaire si l’infestation existait à votre arrivée.' },
    ],
  },

  'val-de-marne': {
    frequents: 'rats, souris, punaises de lit, cafards et nids de frelons',
    delai: 'Très souvent le jour même : notre base est à Saint-Maurice, au cœur du département.',
    population: '1 426 929 habitants (Insee)',
    textes: {
      rats: 'Le Val-de-Marne est traversé par la **Marne** et la **Seine**, avec le **canal de Saint-Maur** et le **Bois de Vincennes** à sa porte. Le surmulot remonte des berges et des réseaux vers les **caves**, les **jardins** et les **vides sanitaires** de Saint-Maur, Joinville, Maisons-Alfort ou Créteil.',
      souris: 'Dans les **grands ensembles** de Créteil, Vitry ou Champigny comme dans les **pavillons** du Perreux ou de Sucy, la souris passe par les gaines, les garages et les sous-sols. À l’automne, celles des jardins cherchent l’abri des maisons.',
      punaises: 'C’est notre premier sujet dans le 94 : nous avons traité des punaises de lit cachées dans les **lattes d’un sommier** à Créteil, une infestation hors norme chez une **personne âgée** à Ivry, un appartement à Vincennes. Méthode avec ou sans insecticide, 2 passages.',
      cafards: 'Les **résidences** des bailleurs, les **immeubles anciens** de Vincennes ou Charenton et les **commerces de bouche** sont les plus touchés. Les blattes passent par les colonnes : il faut souvent traiter plusieurs logements en même temps.',
      fourmis: 'Les **pavillons avec jardin**, nombreux au Perreux, à Saint-Maur ou à Sucy, voient entrer les fourmis par les terrasses et les seuils au printemps. Nous traitons la colonie jusqu’à la reine, sous 48 h.',
      frelons: 'Nous avons détruit un nid de frelons asiatiques **à 12 mètres, à la nacelle**, à Champigny, et un nid **dans une cheminée** à Nogent. Arbres des bords de Marne, haies, toitures : le frelon est présent partout dans le 94.',
      chenilles: 'Les **pins** des jardins, des parcs départementaux et des bords de Marne, et les **chênes** du Bois de Vincennes et des forêts du sud-est (Notre-Dame, La Grange) accueillent les chenilles processionnaires.',
      pigeons: 'Balcons des **résidences**, rebords des **immeubles anciens**, toits des **pavillons** : les pigeons nichent partout. Pics, filets et nettoyage, posés depuis notre base toute proche.',
      puces: 'Chiens et chats des **pavillons**, appartements reloués après un locataire avec animaux : les puces sont fréquentes au retour des beaux jours. Le logement entier est traité, l’animal chez le vétérinaire.',
      acariens: 'Les logements proches de la **Marne** et des **bras d’eau** sont parfois humides, ce qui favorise les acariens dans la literie. Nous traitons à la vapeur sèche ou par cryogénie, sans produit si vous le souhaitez.',
      anthrenes: 'Tapis, moquettes et vêtements en laine : les anthrènes arrivent souvent d’un **nid d’oiseau** sous le toit d’un pavillon. Nous trouvons le foyer avant de traiter.',
      desinfection: 'Nous sommes intervenus dans un **logement très encombré** à Maisons-Alfort, infesté de rats : dératisation, puis désinfection. Pour les bailleurs du 94, nous remettons une attestation.',
    },
    chantiers: [
      { href: '/blog/punaises-de-lit-creteil-sommier-lattes', t: 'Créteil : punaises cachées dans les lattes du sommier' },
      { href: '/blog/punaises-de-lit-ivry-sur-seine-personne-agee', t: 'Ivry-sur-Seine : infestation chez une personne âgée' },
      { href: '/blog/punaises-de-lit-vincennes-punaises-mortes', t: 'Vincennes : punaises mortes 10 jours après le traitement' },
      { href: '/blog/deratisation-logement-syndrome-diogene', t: 'Maisons-Alfort : dératisation d’un logement très encombré' },
      { href: '/blog/nid-frelons-asiatiques-12-metres-nacelle-champigny-sur-marne', t: 'Champigny-sur-Marne : nid de frelons à 12 m, à la nacelle' },
      { href: '/blog/nid-frelons-cheminee-nogent-sur-marne', t: 'Nogent-sur-Marne : nid de frelons dans une cheminée' },
      { href: '/blog/souris-airbnb-saint-maur-des-fosses', t: 'Saint-Maur-des-Fossés : souris dans un Airbnb' },
    ],
    faq: [
      { q: 'Où êtes-vous situés dans le Val-de-Marne ?', a: 'Au 6 bis rue du Val d’Osne, à Saint-Maurice (94410). Nous sommes à quelques minutes de Charenton, Maisons-Alfort, Joinville, Saint-Maur et Créteil.' },
      { q: 'Traitez-vous les 47 communes du Val-de-Marne ?', a: 'Oui, toutes les communes du département, avec une page dédiée pour chacune. Le prix est le même partout dans le 94.' },
      { q: 'Proposez-vous des traitements sans insecticide dans le 94 ?', a: 'Oui : cryogénie et vapeur sèche contre les punaises de lit, dératisation sans raticide par pièges (dont le piège Ekomille). Écologique veut dire ici : aucun biocide déposé chez vous.' },
    ],
  },

  'hauts-de-seine': {
    frequents: 'punaises de lit, souris, rats, cafards et frelons',
    delai: 'Souvent le jour même ou le lendemain, selon la commune.',
    population: '1 654 712 habitants (Insee)',
    textes: {
      rats: 'Les **parkings souterrains**, les **sous-sols de bureaux** de La Défense et les **quais de Seine** de Boulogne, Issy ou Gennevilliers sont des couloirs pour le surmulot. Nous posons des postes sécurisés numérotés, avec un suivi pour les gestionnaires d’immeubles.',
      souris: 'Dans les **immeubles haussmanniens** de Neuilly, Levallois ou Courbevoie, les souris circulent par les planchers et les gaines. Dans les **pavillons** d’Antony, Rueil ou Clamart, elles entrent par les garages et les soupiraux.',
      punaises: 'Forte densité, **déplacements professionnels**, **hôtels d’affaires** autour de La Défense, appartements meublés : les punaises de lit se propagent vite dans le 92. Le traitement est possible sans insecticide, par cryogénie.',
      cafards: 'Les **restaurants d’entreprise**, les **cuisines collectives** et les **résidences** de Nanterre, Colombes ou Gennevilliers sont les plus exposés. Un plan de lutte avec attestation protège les professionnels lors des contrôles.',
      fourmis: 'Les **terrasses**, **jardins** et **rez-de-jardin** des résidences récentes voient arriver les fourmis au printemps, parfois jusque dans les cuisines. Nous éliminons la colonie à la source.',
      frelons: 'Les **parcs de Saint-Cloud, de Sceaux et la forêt de Meudon**, mais aussi les jardins privés, accueillent chaque été des nids de frelons asiatiques et de guêpes, parfois très hauts dans les arbres.',
      chenilles: 'Les **pins** des parcs et des résidences, les **chênes** de Meudon, de Fausses-Reposes et de la Malmaison : les chenilles processionnaires sont un sujet récurrent pour les copropriétés arborées du 92.',
      pigeons: 'Façades, **balcons**, **corniches** et **toitures-terrasses** de bureaux : nous posons pics et filets, y compris en hauteur, avec nettoyage des fientes.',
      puces: 'Animaux de compagnie, **appartements reloués**, parquets anciens : nous traitons tout le logement, et vous conseillons pour l’animal chez le vétérinaire.',
      acariens: 'Literie, canapés et moquettes des appartements peu ventilés : vapeur sèche ou cryogénie, avec des conseils sur l’aération et l’humidité.',
      anthrenes: 'Les **moquettes de bureaux** et les **tapis** des appartements anciens sont des cachettes idéales pour les larves d’anthrènes. Nous cherchons le foyer avant de traiter.',
      desinfection: 'Bureaux, **locaux professionnels**, logements après un sinistre : désinfection avec attestation, en dehors des heures d’activité si nécessaire.',
    },
    faq: [
      { q: 'Intervenez-vous à La Défense et dans les bureaux du 92 ?', a: 'Oui, en dehors des heures d’activité, avec une attestation pour l’entreprise ou le gestionnaire de l’immeuble.' },
      { q: 'Dans quelles villes des Hauts-de-Seine intervenez-vous ?', a: 'Dans les 36 communes : Boulogne-Billancourt, Nanterre, Colombes, Courbevoie, Rueil-Malmaison, Issy-les-Moulineaux, Levallois-Perret, Antony, Clamart et toutes les autres.' },
      { q: 'Un nid de frelons dans un grand arbre de ma copropriété : pouvez-vous l’atteindre ?', a: 'Notre perche télescopique va jusqu’à 23 m. Au-delà, nous étudions une intervention en hauteur sur devis.' },
    ],
  },

  'seine-saint-denis': {
    frequents: 'cafards, punaises de lit, rats et souris',
    delai: 'Souvent le jour même ou le lendemain.',
    population: '1 704 316 habitants (Insee)',
    textes: {
      rats: 'Le **canal de l’Ourcq**, le **canal Saint-Denis** et la **Seine** traversent le département. Le surmulot y trouve eau et abri, puis gagne les **caves**, les **locaux poubelles** et les **entrepôts** d’Aubervilliers, Pantin ou Saint-Denis.',
      souris: 'Dans les **grands ensembles** comme dans les **pavillons** de Montreuil, Bondy ou Aulnay, les souris passent par les sous-sols et les gaines. Un traitement coordonné avec le bailleur donne de bien meilleurs résultats.',
      punaises: 'Logements collectifs, **hôtels**, **foyers** et **résidences** : les punaises de lit se transmettent par les cloisons et les objets. Nous coordonnons le traitement des logements voisins, avec ou sans insecticide.',
      cafards: 'En Seine-Saint-Denis, les blattes germaniques circulent souvent par les **colonnes** et les **vide-ordures** des immeubles. Traiter un seul logement ne suffit pas, d’où nos interventions coordonnées.',
      fourmis: 'Les **pavillons** et **jardins ouvriers** de l’est du département voient arriver les fourmis au printemps. Nous traitons la colonie entière, reine comprise.',
      frelons: 'Le **parc Georges-Valbon**, la **forêt de Bondy** et les jardins privés accueillent des nids de frelons asiatiques et de guêpes chaque année.',
      chenilles: 'Pins et chênes des **parcs départementaux** et des résidences arborées : nous retirons les nids et posons des écopièges.',
      pigeons: 'Balcons de résidences, **toitures d’entrepôts**, gares et façades : pics, filets et nettoyage des fientes.',
      puces: 'Animaux de compagnie, logements reloués : nous traitons tout le logement, l’animal étant traité en parallèle chez le vétérinaire.',
      acariens: 'Literie, canapés et textiles, surtout dans les logements peu aérés ou humides : vapeur sèche ou cryogénie, avec conseils d’aération.',
      anthrenes: 'Tapis, laine et nids d’oiseaux sous les toits : nous cherchons le foyer des larves avant tout traitement.',
      desinfection: 'Logements **très encombrés**, **insalubres** ou après un sinistre : désinfection avec attestation pour le bailleur ou la mairie.',
    },
    faq: [
      { q: 'Mon bailleur doit-il payer le traitement des cafards ou des punaises ?', a: 'Le logement doit être remis exempt de toute infestation à votre entrée. En cours de bail, prévenez votre bailleur par écrit : dans un immeuble, un traitement coordonné est souvent à sa charge pour les parties communes.' },
      { q: 'Traitez-vous plusieurs logements d’un même immeuble ?', a: 'Oui, c’est même conseillé contre les cafards et les punaises de lit. Nous établissons un devis et un rapport pour le bailleur ou le syndic.' },
      { q: 'Intervenez-vous pour les entrepôts et commerces ?', a: 'Oui, avec un plan de lutte contre les rongeurs, des passages réguliers et des attestations pour les contrôles d’hygiène.' },
    ],
  },

  essonne: {
    frequents: 'rats, souris, guêpes et frelons, punaises de lit et chenilles',
    delai: 'Dans les meilleurs délais : nous regroupons les rendez-vous pour proposer un créneau rapide.',
    population: '1 338 485 habitants (Insee)',
    textes: {
      rats: 'La **Seine**, l’**Orge**, l’**Yvette** et la rivière **Essonne** offrent au surmulot des berges et des réseaux. Il gagne les **caves** et les **jardins** de Juvisy, Athis-Mons, Savigny ou Corbeil-Essonnes.',
      souris: 'Les **pavillons** et les villages du sud, près des **champs**, voient arriver souris et mulots à l’automne, après les moissons. Nous bouchons les entrées par les garages et les vides sanitaires.',
      punaises: 'Résidences étudiantes du **plateau de Saclay**, hôtels près d’**Orly**, grands ensembles d’Évry ou de Grigny : les punaises de lit voyagent avec les bagages. 2 passages, avec ou sans insecticide.',
      cafards: 'Dans les **grands ensembles** et les **résidences**, les blattes passent par les gaines. Les **restaurants** et **cuisines collectives** ont intérêt à un suivi régulier.',
      fourmis: 'Jardins, terrasses et maisons de plain-pied : les fourmis entrent par les seuils et les fissures. Nous traitons la colonie sous 48 h.',
      frelons: 'Nous sommes intervenus pour un **nid de guêpes sous une tuile** dans l’Essonne. Forêts de **Sénart** et de **Dourdan**, vallées boisées : les nids de frelons asiatiques sont fréquents en été.',
      chenilles: 'Les **pins** des jardins et les **chênes** des forêts de l’Essonne abritent des chenilles processionnaires, surtout en lisière des massifs boisés.',
      pigeons: 'Toitures de pavillons, balcons de résidences et bâtiments agricoles : pics, filets et nettoyage.',
      puces: 'Chiens, chats, maisons avec jardin : les puces s’installent dans les sols et les tissus. Le logement entier est traité.',
      acariens: 'Maisons proches des **rivières**, sous-sols humides : les acariens prolifèrent dans la literie. Vapeur sèche ou cryogénie.',
      anthrenes: 'Greniers, combles et nids d’oiseaux des pavillons : c’est souvent de là que viennent les anthrènes qui abîment tapis et vêtements.',
      desinfection: 'Logements, locaux et bâtiments agricoles après une infestation de rongeurs ou un sinistre : désinfection avec attestation.',
    },
    chantiers: [
      { href: '/blog/nid-guepes-sous-tuile-essonne', t: 'Essonne : nid de guêpes caché sous une tuile' },
    ],
    faq: [
      { q: 'Intervenez-vous dans le sud de l’Essonne ?', a: 'Oui, jusqu’à Étampes et Dourdan. Pour les communes éloignées, nous regroupons les rendez-vous afin de proposer un créneau rapide, au même prix que dans le reste du département.' },
      { q: 'Des souris arrivent chaque automne dans ma maison près des champs : que faire ?', a: 'Il faut traiter les souris présentes puis boucher les entrées (garage, vide sanitaire, passages de tuyaux). Nous faisons les deux, avec une garantie d’un an.' },
      { q: 'Traitez-vous les résidences étudiantes de Saclay ?', a: 'Oui, contre les punaises de lit notamment, chambre par chambre, avec un rapport pour le gestionnaire.' },
    ],
  },

  yvelines: {
    frequents: 'chenilles processionnaires, guêpes et frelons, rats, souris et punaises de lit',
    delai: 'Dans les meilleurs délais, en regroupant les rendez-vous par secteur.',
    population: '1 485 086 habitants (Insee)',
    textes: {
      rats: 'Les **boucles de la Seine** (Poissy, Conflans, Sartrouville, Mantes) et les **caves voûtées** des centres anciens de Versailles ou Saint-Germain sont les terrains du surmulot. Nous rebouchons les accès avec des matériaux adaptés au bâti ancien.',
      souris: 'Sous les **planchers** des immeubles anciens et dans les **maisons en lisière de forêt** (Marly, Rambouillet, Saint-Germain), souris et mulots s’invitent dès l’automne.',
      punaises: 'Appartements anciens aux **parquets** et **boiseries**, hôtels de Versailles, résidences de Saint-Quentin-en-Yvelines : la cryogénie et la vapeur sèche respectent les matériaux fragiles.',
      cafards: 'Dans les **résidences** de Mantes-la-Jolie, Trappes ou Les Mureaux, les blattes circulent par les gaines. Nous coordonnons le traitement avec les bailleurs.',
      fourmis: 'Les **jardins** et les **maisons** des Yvelines, souvent proches des bois, voient arriver les fourmis au printemps. Traitement de la colonie jusqu’à la reine.',
      frelons: 'Département parmi les plus **boisés** d’Île-de-France : forêts de **Rambouillet**, de **Marly** et de **Saint-Germain**. Les nids de frelons asiatiques et de guêpes y sont fréquents, souvent très hauts.',
      chenilles: 'À **Versailles**, nous avons décroché à la perche des nids de chenilles processionnaires **jusqu’au sommet des cèdres**. Pins et chênes des parcs et des forêts en abritent chaque hiver.',
      pigeons: 'Façades anciennes, corniches et toits des centres historiques : pics et filets discrets, posés sans abîmer la pierre.',
      puces: 'Maisons avec jardin et animaux : les puces s’installent dans les tapis et les parquets. Traitement du logement entier.',
      acariens: 'Maisons anciennes et parfois humides : vapeur sèche ou cryogénie sur la literie, les tapis et les rideaux.',
      anthrenes: 'Tapis anciens, laines et **greniers** des maisons de caractère : nous trouvons le foyer avant de traiter, avec ou sans insecticide.',
      desinfection: 'Logements, locaux et sites d’activité de la vallée de la Seine : désinfection avec attestation.',
    },
    chantiers: [
      { href: '/chenilles-processionnaires/versailles', t: 'Versailles : nids de chenilles décrochés à la perche, en vidéo' },
    ],
    faq: [
      { q: 'Intervenez-vous dans les bâtiments anciens et classés des Yvelines ?', a: 'Oui, avec des méthodes qui respectent les matériaux : vapeur sèche et cryogénie pour les parquets et tissus, colmatage discret au mortier contre les rongeurs.' },
      { q: 'Quand traiter les chenilles processionnaires dans les Yvelines ?', a: 'Le retrait des nids se fait en hiver, avant la descente des chenilles au printemps. Les écopièges se posent sur les troncs avant cette descente.' },
      { q: 'Intervenez-vous dans tout le département ?', a: 'Oui, de Versailles à Mantes-la-Jolie et Rambouillet, au même prix partout.' },
    ],
  },

  'seine-et-marne': {
    frequents: 'guêpes et frelons, rats, souris, chenilles et punaises de lit',
    delai: 'Dans les meilleurs délais, en regroupant les rendez-vous par secteur.',
    population: '1 468 108 habitants (Insee)',
    textes: {
      rats: 'Le long de la **Marne** (Meaux, Lagny, Chelles) et de la **Seine** (Melun, Montereau), le surmulot vit dans les berges. Dans la **Brie**, les **granges** et **bâtiments agricoles** attirent aussi les rongeurs.',
      souris: 'Après les **moissons**, les souris et mulots des grandes cultures cherchent l’abri des maisons. Nous traitons et bouchons les entrées par les garages, caves et vides sanitaires.',
      punaises: 'Hôtels du **Val d’Europe**, villes nouvelles de **Marne-la-Vallée** et de **Sénart**, résidences : les punaises de lit circulent avec les voyageurs. 2 passages, avec ou sans insecticide.',
      cafards: 'Résidences des villes nouvelles, **restaurants** et **cuisines collectives** : traitement en 2 passages, coordonné avec le bailleur si plusieurs logements sont touchés.',
      fourmis: 'Maisons avec jardin, terrasses, vérandas : les fourmis arrivent au printemps. Nous traitons la colonie entière.',
      frelons: 'Nous avons détruit un **nid de guêpes à Gretz-Armainvilliers**. Forêt de **Fontainebleau**, forêts de **Crécy** et d’**Armainvilliers**, granges et greniers : guêpes et frelons asiatiques sont très présents en été.',
      chenilles: 'Les **pins** de la forêt de **Fontainebleau** et les **chênes** des massifs boisés de la Brie abritent des chenilles processionnaires, jusque dans les jardins voisins.',
      pigeons: 'Corps de ferme, toits de **pavillons**, clochers et façades : pics, filets et nettoyage des fientes.',
      puces: 'Maisons avec animaux et jardins : nous traitons tout le logement, en lien avec le vétérinaire pour l’animal.',
      acariens: 'Maisons anciennes, longères, sous-sols humides : vapeur sèche ou cryogénie sur la literie.',
      anthrenes: 'Greniers, nids d’oiseaux et vieux tapis des maisons de campagne : c’est là que naissent souvent les anthrènes.',
      desinfection: 'Logements, locaux et **exploitations agricoles** après des rongeurs ou un sinistre : désinfection avec attestation.',
    },
    chantiers: [
      { href: '/blog/nid-guepes-gretz-armainvilliers', t: 'Gretz-Armainvilliers : destruction d’un nid de guêpes' },
    ],
    faq: [
      { q: 'Intervenez-vous dans toute la Seine-et-Marne ?', a: 'Oui, de Marne-la-Vallée à Fontainebleau, Meaux, Melun et Provins. Pour les communes éloignées, nous regroupons les rendez-vous, au même prix partout.' },
      { q: 'Traitez-vous les bâtiments agricoles ?', a: 'Oui : dératisation des granges et hangars, destruction de nids de guêpes et de frelons, dépigeonnage et désinfection.' },
      { q: 'Combien coûte un nid de guêpes en Seine-et-Marne ?', a: 'Dès 89 € TTC, puis 149 € ou 199 € selon la hauteur et l’accès. Garantie 3 mois.' },
    ],
  },

  'val-d-oise': {
    frequents: 'rats, souris, cafards, punaises de lit et frelons',
    delai: 'Dans les meilleurs délais, en regroupant les rendez-vous par secteur.',
    population: '1 281 653 habitants (Insee)',
    textes: {
      rats: 'Les bords de **Seine** (Argenteuil, Bezons) et de l’**Oise** (Cergy, Pontoise, L’Isle-Adam) abritent le surmulot, qui gagne les caves et les jardins voisins.',
      souris: 'Les **pavillons** du sud du département et les villages du **Vexin**, près des champs, reçoivent souris et mulots dès l’automne.',
      punaises: 'Les **hôtels** autour de **Roissy**, les résidences de Sarcelles, Garges ou Cergy et les logements meublés sont exposés aux punaises de lit. 2 passages, avec ou sans insecticide.',
      cafards: 'Dans les **grands ensembles** et les **restaurants**, les blattes passent par les gaines et les cuisines. Traitement coordonné quand plusieurs logements sont touchés.',
      fourmis: 'Maisons et jardins du Val-d’Oise : les fourmis entrent au printemps par les seuils et les terrasses. Nous éliminons la colonie.',
      frelons: 'Forêts de **Montmorency** et de **L’Isle-Adam**, jardins et haies : les nids de frelons asiatiques et de guêpes sont fréquents en été.',
      chenilles: 'Pins des jardins et chênes des forêts du département : nous retirons les nids et posons des écopièges sur les troncs.',
      pigeons: 'Balcons, toitures et entrepôts : pics, filets et nettoyage des fientes.',
      puces: 'Animaux de compagnie et logements reloués : nous traitons tout le logement.',
      acariens: 'Literie et textiles : vapeur sèche ou cryogénie, avec conseils contre l’humidité.',
      anthrenes: 'Tapis, laine et nids d’oiseaux sous les toits : nous cherchons le foyer des larves avant de traiter.',
      desinfection: 'Hôtels, entrepôts près de Roissy, logements après sinistre : désinfection avec attestation.',
    },
    faq: [
      { q: 'Intervenez-vous près de Roissy, dans les hôtels ?', a: 'Oui, contre les punaises de lit et les rongeurs, chambre par chambre, avec attestation pour l’établissement.' },
      { q: 'Intervenez-vous dans le Vexin ?', a: 'Oui, en regroupant les rendez-vous pour proposer un créneau rapide, au même prix que dans le reste du département.' },
      { q: 'Combien coûte une dératisation dans le Val-d’Oise ?', a: 'Dès 120 € TTC pour un appartement, rats ou souris, garantie 1 an. Maison, commerce ou entrepôt : sur devis gratuit.' },
    ],
  },
}
