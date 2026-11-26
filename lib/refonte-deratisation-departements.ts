// Refonte des pages « dératisation + département » (26/11/2026, demande de l'utilisateur : même style que les pages
// dératisation + ville refondues, nom et numéro du département dans les titres, maillage vers chaque ville, données
// structurées, photos et vidéos). Même format que lib/refonte-deratisation.ts, écrit à la main, chaque fait vérifié
// sur la source citée. Les photos des secteurs sont celles des pages ville (déjà vérifiées et créditées).
// Pas de tiret long, pas de chiffre inventé, jamais « naturel / non toxique / sans danger ».
import { REFONTE_DERATISATION, type RefonteDerat, type Source, type PhotoVille } from './refonte-deratisation'
import type { DepSlug } from './departements-services'
import { getVilleDeratisation } from './villes-deratisation'

// Photo d'une page ville refondue, retrouvée par son fichier (crédit et licence inclus)
const photo = (slug: string, fichier: string): PhotoVille | undefined =>
  REFONTE_DERATISATION[slug]?.quartiers.zones.map((z) => z.photo).find((p) => p?.src === `/villes/${slug}/${fichier}`)

// Lien vers une page ville avec une ancre complète (règle du site : jamais le nom seul), formulations variées pour ne
// pas répéter « dératisation » 40 fois ; « au Kremlin-Bicêtre », « au Perreux-sur-Marne » grâce à la forme de la ville.
const FORMES = ['dératisation', 'rats', 'traitement contre les rats', 'rongeurs']
let rang = 0
const l = (slug: string, _nom: string) => {
  const v = getVilleDeratisation(slug)
  const a = v?.a ?? `à ${_nom}`
  return `[${FORMES[rang++ % FORMES.length]} ${a}](/deratisation/${slug})`
}

const SPF_LEPTO: Source = { label: 'Santé publique France, Leptospirose en France en 2024 (données de la déclaration obligatoire)', url: 'https://www.santepubliquefrance.fr/leptospirose/bulletin-national/leptospirose-en-france-en-2024-donnees-de-la-declaration-obligatoire' }
const RSD_94: Source = { label: 'Ville de Fresnes, arrêté n° 2026-213 sur la lutte contre les rongeurs, visant l’article 119 du règlement sanitaire départemental du Val-de-Marne (arrêté préfectoral n° 85-115 du 26 février 1985)', url: 'https://www.fresnes94.fr/app/uploads/1/2026/07/2026-213-arrete-portant-obligation-de-lutte-contre-proliferation-rongeurs-fresnes.pdf' }
const VITRY_MAIRIE: Source = { label: 'Ville de Vitry-sur-Seine, Dératisation, désinsectisation', url: 'https://www.vitry94.fr/deratisation-desinsectisation/' }

export type RefonteDep = RefonteDerat & { reglement: string }

export const REFONTE_DERAT_DEP: Partial<Record<DepSlug, RefonteDep>> = {}

// ── Val-de-Marne (94) ──
const VDM_WIKI: Source = { label: 'Wikipédia, Val-de-Marne (confluence de la Seine et de la Marne, cours d’eau, altitude, espaces verts)', url: 'https://fr.wikipedia.org/wiki/Val-de-Marne' }
const VDM_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : département 94, communes et populations légales', url: 'https://geo.api.gouv.fr/departements/94/communes?fields=nom,population,surface' }

REFONTE_DERAT_DEP['val-de-marne'] = {
  maj: '2026-11-26',
  reglement: 'règlement sanitaire du Val-de-Marne, **article 119**',
  accroche: 'Seine, Marne, Bièvre, Réveillon et Morbras, grands ensembles, pavillons et marché de Rungis : le Val-de-Marne offre aux rats tous les terrains. Nous y sommes chez nous, à Saint-Maurice, et nous avons écrit une page complète pour chacune de nos 40 villes.',
  societe: {
    titre: 'Société de dératisation dans le Val-de-Marne (94) : un département au confluent de la Seine et de la Marne',
    paras: [
      'Le Val-de-Marne compte **1 426 929 habitants** dans **47 communes**, sur **245 km²**. C’est une plaine alluviale où la **Seine** et la **Marne** se rejoignent, entre **Charenton-le-Pont** et **Alfortville**. Trois autres cours d’eau le traversent : la **Bièvre**, le **Réveillon** et le **Morbras**. Berges, caves inondables et réseaux d’assainissement : c’est le domaine du **surmulot**, le rat d’égout.',
      'Le département passe d’environ **30 mètres** d’altitude au bord de Paris à **126 mètres** sur le plateau de Villejuif. Entre les deux, il réunit des **immeubles anciens** aux portes de Paris, des **grands ensembles**, des quartiers de **pavillons avec jardin**, des **forêts** au sud-est et de grands sites d’activité comme le **marché de Rungis** et l’**aéroport d’Orly**. Chaque terrain demande sa méthode de dératisation.',
      'Notre base est à **Saint-Maurice**, au cœur du département : nos dératiseurs interviennent **7 jours sur 7** dans tout le 94, souvent le jour même, **sans majoration** la nuit, le week-end ni les jours fériés.',
      'Nos autres pages pour le département : [souris dans le Val-de-Marne](/souris/val-de-marne), [punaises de lit dans le Val-de-Marne](/punaises-de-lit/val-de-marne), [cafards dans le Val-de-Marne](/cafards/val-de-marne) et [tous nos services dans le Val-de-Marne](/zones/val-de-marne).',
    ],
  },
  chiffres: [
    { valeur: '1 426 929', texte: 'habitants dans les 47 communes du Val-de-Marne (populations légales Insee).', source: VDM_INSEE },
    { valeur: '5', texte: 'cours d’eau : la Seine et la Marne, qui se rejoignent entre Charenton-le-Pont et Alfortville, puis la Bièvre, le Réveillon et le Morbras.', source: VDM_WIKI },
    { valeur: '2 600 ha', texte: 'd’espaces verts et naturels, soit environ 22 m² par habitant : parcs, bois et jardins où les rats creusent leurs terriers.', source: VDM_WIKI },
    { valeur: '886', texte: 'cas de leptospirose signalés en France en 2024, une maladie transmise surtout par l’urine des rats ; 74 % des malades ont été hospitalisés.', source: SPF_LEPTO },
  ],
  quartiers: {
    titre: 'Où se cachent les rats dans le Val-de-Marne (94) : le département secteur par secteur',
    intro: 'Nous avons découpé le département en six grands secteurs, selon ce qui attire les rongeurs. Pour chaque ville, une page complète détaille ses quartiers, ses risques et notre méthode : cliquez sur le nom de votre commune.',
    zones: [
      {
        nom: 'Le confluent et les bords de Seine',
        texte: `La Seine reçoit la Marne entre Charenton-le-Pont et Alfortville, puis longe Ivry, Vitry, Choisy et les communes du sud. Lors de la crue de 1910, l’eau a envahi les quartiers bas : ces secteurs gardent des **caves humides** et des réseaux où le surmulot se réfugie. Nos pages : ${l('alfortville', 'Alfortville')}, ${l('ivry-sur-seine', 'Ivry-sur-Seine')}, ${l('vitry-sur-seine', 'Vitry-sur-Seine')}, ${l('choisy-le-roi', 'Choisy-le-Roi')}, ${l('ablon-sur-seine', 'Ablon-sur-Seine')}, ${l('villeneuve-le-roi', 'Villeneuve-le-Roi')} et ${l('villeneuve-saint-georges', 'Villeneuve-Saint-Georges')}.`,
        photo: photo('alfortville', 'chinagora-confluent.jpg'),
      },
      {
        nom: 'Les boucles de la Marne',
        texte: `Berges, îles, quais et jardins en pente vers l’eau : le long de la Marne, les rats circulent entre la rivière, les réseaux d’eaux pluviales et les **vide sanitaires** des maisons. Nos pages : ${l('saint-maurice', 'Saint-Maurice')}, ${l('maisons-alfort', 'Maisons-Alfort')}, ${l('charenton-le-pont', 'Charenton-le-Pont')}, ${l('joinville-le-pont', 'Joinville-le-Pont')}, ${l('saint-maur-des-fosses', 'Saint-Maur-des-Fossés')}, ${l('creteil', 'Créteil')}, ${l('bonneuil-sur-marne', 'Bonneuil-sur-Marne')}, ${l('champigny-sur-marne', 'Champigny-sur-Marne')}, ${l('nogent-sur-marne', 'Nogent-sur-Marne')}, ${l('le-perreux-sur-marne', 'Le Perreux-sur-Marne')}, ${l('bry-sur-marne', 'Bry-sur-Marne')} et ${l('chennevieres-sur-marne', 'Chennevières-sur-Marne')}.`,
        photo: photo('saint-maur-des-fosses', 'pont-de-saint-maur.jpg'),
      },
      {
        nom: 'Les portes de Paris et le bois de Vincennes',
        texte: `Immeubles anciens serrés, **caves voûtées**, cours, commerces de bouche et lisière du bois de Vincennes : ici, la dératisation se fait surtout en **copropriété**, avec le syndic. Nos pages : ${l('vincennes', 'Vincennes')}, ${l('saint-mande', 'Saint-Mandé')}, ${l('fontenay-sous-bois', 'Fontenay-sous-Bois')}, ${l('le-kremlin-bicetre', 'Le Kremlin-Bicêtre')} et ${l('gentilly', 'Gentilly')}.`,
        photo: photo('saint-mande', 'lac-de-saint-mande.jpg'),
      },
      {
        nom: 'La vallée de la Bièvre et le plateau de Villejuif',
        texte: `La Bièvre a longtemps coulé en souterrain ; elle est remise à l’air libre par endroits, à Arcueil ou à L’Haÿ-les-Roses. Autour, un plateau dense, des autoroutes A6, des hôpitaux et les chantiers de la ligne 14. Nos pages : ${l('arcueil', 'Arcueil')}, ${l('cachan', 'Cachan')}, ${l('l-hay-les-roses', 'L’Haÿ-les-Roses')}, ${l('fresnes', 'Fresnes')}, ${l('villejuif', 'Villejuif')} et ${l('chevilly-larue', 'Chevilly-Larue')}.`,
        photo: photo('arcueil', 'bievre-parc-du-coteau.jpg'),
      },
      {
        nom: 'Orly, Rungis et le pôle alimentaire',
        texte: `Le **marché d’intérêt national de Rungis**, les entrepôts, l’aéroport d’Orly et les zones d’activité concentrent denrées, quais de livraison et bennes. Pour les professionnels, nous proposons un **plan de lutte** avec postes numérotés et attestation. Nos pages : ${l('rungis', 'Rungis')}, ${l('thiais', 'Thiais')} et ${l('orly', 'Orly')}. Voir aussi [dératisation pour les professionnels](/professionnels).`,
        photo: photo('rungis', 'marche-interet-national.jpg'),
      },
      {
        nom: 'Le plateau briard, ses forêts et ses ruisseaux',
        texte: `Au sud-est, le Réveillon et le Morbras, les forêts de Notre-Dame et de la Grange, les lotissements et les fermes anciennes : les rats vivent dehors, près des **composts**, des **abris** et des **lisières**, puis entrent dans les maisons à l’automne. Nos pages : ${l('sucy-en-brie', 'Sucy-en-Brie')}, ${l('boissy-saint-leger', 'Boissy-Saint-Léger')}, ${l('santeny', 'Santeny')}, ${l('limeil-brevannes', 'Limeil-Brévannes')}, ${l('valenton', 'Valenton')}, ${l('le-plessis-trevise', 'Le Plessis-Trévise')} et ${l('villiers-sur-marne', 'Villiers-sur-Marne')}.`,
        photo: photo('sucy-en-brie', 'ruisseau-du-morbras.jpg'),
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats dans le Val-de-Marne (94) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement, partout dans le 94.' },
      { t: 'Le diagnostic', x: 'Bords de Seine ou de Marne : caves, regards, soupiraux. Grand ensemble : vide-ordures, caves, locaux à poubelles. Pavillon : jardin, abri, vide sanitaire.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur dans le Val-de-Marne (94) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans les caves près de la Seine ou de la Marne', x: 'Après de fortes pluies ou une montée des eaux, les rats quittent les berges et les réseaux pour les sous-sols. Nous traitons la cave entière puis rebouchons les passages. Exemple filmé : [notre chantier de Maisons-Alfort](/blog/deratisation-logement-syndrome-diogene).' },
      { t: 'Des rats au vide-ordures d’une cité', x: 'Le signe d’une colonie dans les parties communes : le bailleur organise le traitement de tout l’immeuble, nous rebouchons ensuite les passages vers les logements.' },
      { t: 'Des terriers dans le jardin d’un pavillon', x: 'Sous l’abri, au pied de la haie ou près du compost : nous traitons la colonie et fermons l’accès au vide sanitaire. Voir [rat dans le compost](/blog/rat-compost).' },
      { t: 'Des souris dans un appartement ancien', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris dans le Val-de-Marne](/souris/val-de-marne) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des rongeurs dans un restaurant ou un entrepôt', x: 'Commerces de bouche, marchés et zones d’activité : contrat de suivi, postes numérotés, registre et attestation pour vos contrôles d’hygiène.' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, mairie, bailleur : qui fait quoi dans le Val-de-Marne (94)',
    paras: [
      'Dans le Val-de-Marne, l’**article 119** du **règlement sanitaire départemental** (arrêté préfectoral du 26 février 1985) impose aux **propriétaires**, **syndics**, **bailleurs** et **occupants** d’empêcher l’installation des rongeurs. Les parties communes se traitent à la demande du **syndic** ou du **bailleur**, les maisons à celle de leur propriétaire.',
      'Les **communes** s’occupent de l’espace public et de leurs bâtiments ; certaines ont un service municipal d’hygiène qui organise des campagnes, comme Vitry-sur-Seine. Elles ne traitent pas votre logement ou votre jardin : c’est le rôle d’une entreprise de dératisation. Locataire, signalez les rats **par écrit** à votre bailleur, avec photos et dates.',
      `Toutes nos pages ville du 94 sont listées plus haut. Les plus proches de notre base : ${l('saint-maurice', 'Saint-Maurice')}, ${l('maisons-alfort', 'Maisons-Alfort')}, ${l('charenton-le-pont', 'Charenton-le-Pont')}, ${l('joinville-le-pont', 'Joinville-le-Pont')} et ${l('creteil', 'Créteil')}.`,
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation dans le Val-de-Marne (94) ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris, au même prix dans les 47 communes. Maison, immeuble ou commerce : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Intervenez-vous dans toutes les communes du 94 ?', a: 'Oui, dans les 47 communes du Val-de-Marne, depuis notre base de Saint-Maurice, souvent le jour même. Nous avons une page détaillée pour 40 d’entre elles, de [Vincennes](/deratisation/vincennes) à [Villeneuve-Saint-Georges](/deratisation/villeneuve-saint-georges).' },
    { q: 'Pourquoi y a-t-il autant de rats près de la Seine et de la Marne ?', a: 'Le surmulot vit près de l’eau et circule par les égouts et les réseaux d’eaux pluviales. Les caves inondables et les berges lui offrent abri et passages ([mode de vie du rat](/blog/rat-mode-de-vie)).' },
    { q: 'Qui doit payer la dératisation dans le Val-de-Marne ?', a: 'Le règlement sanitaire du Val-de-Marne (article 119) fait de la lutte contre les rongeurs une obligation des propriétaires, syndics, bailleurs et occupants. Les parties communes relèvent du syndic ou du bailleur ([nos chiffres sourcés](/barometre-des-nuisibles-punaises-de-lit-deratisation-2026)).' },
    { q: 'La mairie peut-elle dératiser chez moi gratuitement ?', a: 'En général non : les communes traitent l’espace public, les égouts et leurs bâtiments. Chez vous, dans votre cave ou votre jardin, il faut faire appel à une entreprise de dératisation.' },
    { q: 'Faut-il faire contrôler sa cave après une crue ou de fortes pluies ?', a: 'Oui, surtout près de la Seine et de la Marne : la montée des eaux chasse les rats des berges et des réseaux vers les sous-sols. Un contrôle rapide évite qu’une colonie s’installe.' },
    { q: 'Les grands chantiers du 94 font-ils sortir les rats ?', a: 'Les terrassements, comme ceux des lignes 14 et 15, peuvent déranger les rongeurs installés dans le sol. Si des rats apparaissent près d’un chantier, faites contrôler cave, jardin et regards.' },
    { q: 'Proposez-vous une dératisation sans poison dans le Val-de-Marne ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, pour les foyers avec enfants ou animaux, les écoles et les crèches.' },
  ],
  sources: [VDM_INSEE, VDM_WIKI, RSD_94, VITRY_MAIRIE, SPF_LEPTO],
}

// ── Hauts-de-Seine (92) ──
const HDS_WIKI: Source = { label: 'Wikipédia, Hauts-de-Seine (boucles de la Seine, communes riveraines, relief, carrières du sud, vallée de la Bièvre)', url: 'https://fr.wikipedia.org/wiki/Hauts-de-Seine' }
const HDS_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : département 92, communes, populations légales et surfaces', url: 'https://geo.api.gouv.fr/departements/92/communes?fields=nom,population,surface' }
const LOI_1989: Source = { label: 'Loi n° 89-462 du 6 juillet 1989 tendant à améliorer les rapports locatifs, article 6 (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310' }
const MEUDON: Source = { label: 'Ville de Meudon, Animaux nuisibles et sauvages (dératisation, règlement sanitaire départemental des Hauts-de-Seine)', url: 'https://meudon.fr/mon-quotidien/environnement/animaux/animaux-nuisibles-et-sauvages/' }

REFONTE_DERAT_DEP['hauts-de-seine'] = {
  maj: '2026-11-26',
  reglement: 'loi du 6 juillet 1989 et règlement sanitaire départemental des Hauts-de-Seine',
  quiPaie: '**Qui paie** : dans un logement loué, le bailleur doit fournir un logement exempt de nuisibles (loi du 6 juillet 1989, **article 6**) ; en copropriété, les parties communes relèvent du **syndic**.',
  accroche: 'La Seine en deux grandes boucles, le port de Gennevilliers, les tours de La Défense, les anciennes carrières du sud et les grands parcs : dans les Hauts-de-Seine, chaque secteur a ses rats. Nous avons une page détaillée pour 26 villes du département.',
  societe: {
    titre: 'Société de dératisation dans les Hauts-de-Seine (92) : un département dessiné par les boucles de la Seine',
    paras: [
      'Les Hauts-de-Seine comptent **1 654 712 habitants** dans **36 communes**, sur environ **176 km²** : près de **9 400 habitants au km²**, le département le plus dense d’Île-de-France après Paris. La **Seine** y décrit deux boucles très marquées et borde **17 des 36 communes**, franchie par **36 ponts**. Quais, berges, réseaux d’assainissement et caves d’immeubles : le **surmulot** y trouve eau, abri et nourriture.',
      'Au nord s’étendent des **plaines alluviales**, avec le port de Gennevilliers ; au centre, une falaise de Sèvres à Asnières, dont le **mont Valérien** (162 m) ; au sud, un **plateau calcaire** qui culmine à 180 m vers Vaucresson et d’où l’on a extrait pendant des siècles la pierre de Paris, à Châtillon, Bagneux ou Clamart : il en reste de **nombreux souterrains**. Immeubles anciens, tours de bureaux, pavillons et parcs : chaque terrain demande sa méthode de dératisation.',
      'Nos dératiseurs partent de **Saint-Maurice (94)** et interviennent **7 jours sur 7** dans tout le 92, souvent le jour même, **sans majoration** la nuit, le week-end ni les jours fériés.',
      'Nos autres pages pour le département : [souris dans les Hauts-de-Seine](/souris/hauts-de-seine), [punaises de lit dans les Hauts-de-Seine](/punaises-de-lit/hauts-de-seine), [cafards dans les Hauts-de-Seine](/cafards/hauts-de-seine) et [tous nos services dans les Hauts-de-Seine](/zones/hauts-de-seine).',
    ],
  },
  chiffres: [
    { valeur: '1 654 712', texte: 'habitants dans les 36 communes des Hauts-de-Seine (populations légales Insee).', source: HDS_INSEE },
    { valeur: '≈ 9 400', texte: 'habitants au km² (1 654 712 habitants sur environ 176 km²) : beaucoup d’immeubles, de caves et de locaux à poubelles partagés.', source: HDS_INSEE },
    { valeur: '17 sur 36', texte: 'communes du département sont bordées par la Seine, franchie par 36 ponts.', source: HDS_WIKI },
    { valeur: '886', texte: 'cas de leptospirose signalés en France en 2024, une maladie transmise surtout par l’urine des rats ; 74 % des malades ont été hospitalisés.', source: SPF_LEPTO },
  ],
  quartiers: {
    titre: 'Où se cachent les rats dans les Hauts-de-Seine (92) : le département secteur par secteur',
    intro: 'Nous avons découpé le département en cinq secteurs, du port de Gennevilliers à la vallée de la Bièvre. Pour chaque ville, une page complète détaille ses quartiers, ses risques et notre méthode : cliquez sur le nom de votre commune.',
    zones: [
      {
        nom: 'La boucle nord et le port de Gennevilliers',
        texte: `Au nord, des plaines alluviales au bord de la Seine, le port de Gennevilliers, ses entrepôts et ses voies ferrées, puis des villes très denses jusqu’aux portes de Paris. Quais, zones d’activité et caves d’immeubles : les rats y trouvent nourriture et passages. Nos pages : ${l('gennevilliers', 'Gennevilliers')}, ${l('asnieres-sur-seine', 'Asnières-sur-Seine')}, ${l('colombes', 'Colombes')}, ${l('la-garenne-colombes', 'La Garenne-Colombes')}, ${l('clichy', 'Clichy')} et ${l('levallois-perret', 'Levallois-Perret')}.`,
        photo: { src: '/departements/hauts-de-seine/port-de-gennevilliers.jpg', alt: 'Vue aérienne du port de Gennevilliers et de la Seine', legende: 'Le port de Gennevilliers et la boucle de la Seine vus du ciel.', credit: 'Milliped', licence: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Aerial_photograph_of_the_Port_de_Gennevilliers,_9_NOV_2018_-_1.jpg' },
      },
      {
        nom: 'Neuilly, La Défense et le mont Valérien',
        texte: `Quais de Seine, immeubles de bureaux, restaurants et galeries commerciales autour de La Défense, puis les coteaux de Suresnes et de Rueil au pied du mont Valérien. Ici, la dératisation concerne autant les **professionnels** que les copropriétés. Nos pages : ${l('neuilly-sur-seine', 'Neuilly-sur-Seine')}, ${l('courbevoie', 'Courbevoie')}, ${l('puteaux', 'Puteaux')}, ${l('nanterre', 'Nanterre')}, ${l('suresnes', 'Suresnes')} et ${l('rueil-malmaison', 'Rueil-Malmaison')}. Voir aussi [dératisation pour les professionnels](/professionnels).`,
        photo: { src: '/departements/hauts-de-seine/quais-de-seine-courbevoie.jpg', alt: 'Les quais de Seine à Courbevoie, avec les tours de La Défense au loin', legende: 'Les quais de Seine à Courbevoie, près de l’île de la Jatte : berges et immeubles riverains.', credit: 'Clicsouris', licence: 'CC BY-SA 2.5', page: 'https://commons.wikimedia.org/wiki/File:Courbevoie_-_Quais_de_Seine_-_panoramique_01.jpg' },
      },
      {
        nom: 'Boulogne, Issy et Meudon, entre Seine et coteaux',
        texte: `La Seine contourne l’île Seguin, entre Boulogne-Billancourt, Issy-les-Moulineaux et les coteaux boisés de Meudon. Immeubles récents, anciens sites industriels, jardins en pente et lisières de forêt : nous traitons caves, parkings et jardins. Nos pages : ${l('boulogne-billancourt', 'Boulogne-Billancourt')}, ${l('issy-les-moulineaux', 'Issy-les-Moulineaux')} et ${l('meudon', 'Meudon')}.`,
        photo: { src: '/departements/hauts-de-seine/ile-seguin-boulogne.jpg', alt: 'Vue aérienne de l’île Seguin et de la Seine à Boulogne-Billancourt', legende: 'L’île Seguin et la Seine entre Boulogne-Billancourt et Meudon, vues du ciel.', credit: 'David.Monniaux', licence: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Ile_Seguin_Boulogne_Billancourt_P1190130.jpg' },
      },
      {
        nom: 'Le sud des portes de Paris et les anciennes carrières',
        texte: `De Montrouge à Clamart, des villes denses bâties sur le plateau calcaire, où l’on a extrait la pierre pendant des siècles : caves profondes, sous-sols anciens et immeubles serrés. La dératisation s’y fait surtout en **copropriété**, cave par cave. Nos pages : ${l('montrouge', 'Montrouge')}, ${l('malakoff', 'Malakoff')}, ${l('vanves', 'Vanves')}, ${l('chatillon', 'Châtillon')}, ${l('bagneux', 'Bagneux')} et ${l('clamart', 'Clamart')}.`,
        photo: { src: '/departements/hauts-de-seine/carriere-chatillon.jpg', alt: 'Treuil de l’ancienne carrière Auboin à Châtillon', legende: 'Le treuil de l’ancienne carrière Auboin à Châtillon, témoin des carrières de pierre du sud du département.', credit: 'Myrabella', licence: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Chatillon_treuil_carriere_Auboin.jpg' },
      },
      {
        nom: 'La vallée de la Bièvre et le parc de Sceaux',
        texte: `Le plateau calcaire est entaillé à l’est par la vallée de la Bièvre. Grands parcs, pavillons avec jardin et résidences : les rats vivent dehors, près des **composts** et des **abris**, puis entrent dans les maisons à l’automne. Nos pages : ${l('sceaux', 'Sceaux')}, ${l('bourg-la-reine', 'Bourg-la-Reine')}, ${l('fontenay-aux-roses', 'Fontenay-aux-Roses')}, ${l('antony', 'Antony')} et ${l('chatenay-malabry', 'Châtenay-Malabry')}.`,
        photo: { src: '/departements/hauts-de-seine/parc-de-sceaux.jpg', alt: 'Le Grand Canal du parc de Sceaux', legende: 'Le Grand Canal du parc de Sceaux : pelouses, plans d’eau et lisières boisées.', credit: 'Guilhem Vellut', licence: 'CC BY 2.0', page: 'https://commons.wikimedia.org/wiki/File:Grand_Canal_@_Parc_de_Sceaux_@_Ile-de-France_@_Paris_(28776136496).jpg' },
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats dans les Hauts-de-Seine (92) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement, partout dans le 92.' },
      { t: 'Le diagnostic', x: 'Immeuble ancien : caves, cours, gaines. Bureaux ou commerce : réserves, locaux techniques, bennes. Pavillon : jardin, abri, vide sanitaire.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur dans les Hauts-de-Seine (92) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans les caves d’un immeuble', x: 'Le cas le plus fréquent dans un département aussi dense : nous traitons tout le sous-sol, puis rebouchons les passages vers les logements. Prévenez le syndic par écrit.' },
      { t: 'Des rongeurs dans des bureaux ou un restaurant', x: 'Restaurants d’entreprise, commerces de bouche, galeries commerciales : contrat de suivi, postes numérotés, registre et attestation pour vos contrôles d’hygiène.' },
      { t: 'Des terriers dans le jardin d’un pavillon', x: 'Sous l’abri, au pied de la haie ou près du compost : nous traitons la colonie et fermons l’accès au vide sanitaire. Voir [rat dans le compost](/blog/rat-compost).' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris dans les Hauts-de-Seine](/souris/hauts-de-seine) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Un rat qui sort des toilettes', x: 'Le réseau d’assainissement est leur chemin : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes). Nous traitons la colonie et conseillons la pose d’un clapet par un plombier.' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, mairie, bailleur : qui fait quoi dans les Hauts-de-Seine (92)',
    paras: [
      'Dans un logement loué, la **loi du 6 juillet 1989** (article 6) impose au **bailleur** de fournir un logement décent, exempt de nuisibles. En copropriété, les caves, cours et locaux à poubelles relèvent du **syndic** ; une maison, de son propriétaire. Locataire, signalez les rats **par écrit**, avec photos et dates.',
      'Les **communes** agissent sur l’espace public et leurs bâtiments. À Meudon par exemple, la Ville traite les espaces verts et les bâtiments publics, coordonne des opérations dans certains logements sociaux, et le réseau d’assainissement est traité par l’intercommunalité (GPSO). Le **règlement sanitaire départemental des Hauts-de-Seine** interdit aussi de nourrir les animaux errants, pigeons compris (articles 26 et 120), une source de nourriture pour les rats.',
      `Chez vous, dans votre cave ou votre jardin, c’est une entreprise de dératisation qui intervient. Nos pages les plus consultées du 92 : ${l('boulogne-billancourt', 'Boulogne-Billancourt')}, ${l('nanterre', 'Nanterre')}, ${l('montrouge', 'Montrouge')} et ${l('issy-les-moulineaux', 'Issy-les-Moulineaux')}.`,
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation dans les Hauts-de-Seine (92) ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris, au même prix dans les 36 communes. Maison, immeuble, bureaux ou commerce : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Intervenez-vous dans toutes les communes du 92 ?', a: 'Oui, dans les 36 communes des Hauts-de-Seine, souvent le jour même, depuis notre base de Saint-Maurice. Nous avons une page détaillée pour 26 d’entre elles, de [Gennevilliers](/deratisation/gennevilliers) à [Antony](/deratisation/antony).' },
    { q: 'Pourquoi y a-t-il des rats près de la Seine dans le 92 ?', a: 'La Seine borde 17 des 36 communes du département. Le surmulot vit près de l’eau et circule par les égouts et les réseaux d’eaux pluviales jusqu’aux caves ([mode de vie du rat](/blog/rat-mode-de-vie)).' },
    { q: 'Je suis locataire dans les Hauts-de-Seine : qui paie la dératisation ?', a: 'Le bailleur doit fournir un logement décent, exempt de nuisibles (loi du 6 juillet 1989, article 6). En copropriété, les parties communes relèvent du syndic. Signalez le problème par écrit, avec photos.' },
    { q: 'Nourrir les pigeons ou les chats errants attire-t-il les rats ?', a: 'Oui : les restes de nourriture laissés dehors nourrissent aussi les rats. Le règlement sanitaire départemental des Hauts-de-Seine interdit de nourrir les animaux errants (articles 26 et 120, rappelés par la ville de Meudon).' },
    { q: 'La mairie peut-elle dératiser chez moi ?', a: 'En général non : les communes traitent l’espace public et leurs bâtiments, et l’assainissement relève souvent de l’intercommunalité. Chez vous, il faut faire appel à une entreprise de dératisation.' },
    { q: 'Intervenez-vous dans les bureaux et les restaurants du 92 ?', a: 'Oui : plan de lutte, postes numérotés, passages réguliers hors des heures d’ouverture, registre et attestation pour vos contrôles d’hygiène. Voir [nos services aux professionnels](/professionnels).' },
    { q: 'Proposez-vous une dératisation sans poison dans les Hauts-de-Seine ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, pour les foyers avec enfants ou animaux, les écoles et les crèches.' },
  ],
  sources: [HDS_INSEE, LOI_1989, MEUDON, SPF_LEPTO, HDS_WIKI],
}

// ── Paris (75) ──
const PARIS_RATS: Source = { label: 'Ville de Paris, Comment Paris lutte contre les rats (SMASH, plan de lutte intégrée, Rats 360°, chiffres 2024-2026)', url: 'https://www.paris.fr/pages/les-rats-a-paris-le-saviez-vous-6418' }
const RSD_PARIS: Source = { label: 'Arrêté du 20 novembre 1979 portant règlement sanitaire du département de Paris, article 119 « Rongeurs » (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006364004/' }
const PARIS_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : Paris (75056), population légale et surface', url: 'https://geo.api.gouv.fr/departements/75/communes?fields=nom,population,surface' }
const p = (f: string, alt: string, legende: string, credit: string, licence: string, fichier: string): PhotoVille => ({ src: `/departements/paris/${f}`, alt, legende, credit, licence, page: 'https://commons.wikimedia.org/wiki/File:' + fichier })

REFONTE_DERAT_DEP.paris = {
  maj: '2026-11-26',
  reglement: 'règlement sanitaire de Paris, **article 119**',
  quiPaie: '**Qui paie** : dans les cours, caves, jardins et bâtiments privés, ce sont les **propriétaires** (règlement sanitaire de Paris, **article 119**) ; dans un logement loué, le bailleur doit fournir un logement exempt de nuisibles (loi du 6 juillet 1989).',
  accroche: 'Caves voûtées, cours d’immeuble, quais de Seine, canal Saint-Martin et jardins publics : à Paris, la Ville traite l’espace public, mais chez vous, c’est au propriétaire d’agir. Nous intervenons dans les 20 arrondissements, avec une page détaillée pour chacun.',
  societe: {
    titre: 'Société de dératisation à Paris (75) : 20 arrondissements, 2 millions d’habitants et autant de caves',
    paras: [
      'Paris compte **2 103 778 habitants** sur environ **105 km²**, soit près de **20 000 habitants au km²**, la plus forte densité de France. Immeubles anciens à **caves voûtées**, cours intérieures, **locaux à poubelles**, commerces de bouche et réseau d’**égouts** : le **rat brun**, ou surmulot, y trouve tout ce qu’il lui faut. Selon la Ville de Paris, il aime les lieux humides, les égouts, les caves et les espaces verts.',
      'La **Ville de Paris** mène un plan de lutte intégrée depuis **2017** et réalise environ **4 000 interventions par an** sur le domaine public, par son Service municipal d’actions de salubrité et d’hygiène (**SMASH**). Mais dans les jardins, cours, caves et bâtiments privés, la Ville rappelle qu’il **incombe aux propriétaires** de mettre en place les mesures de lutte. C’est là qu’intervient une entreprise de dératisation.',
      'Nos dératiseurs partent de **Saint-Maurice (94)**, aux portes du 12e, et interviennent **7 jours sur 7** dans tout Paris, souvent le jour même, **sans majoration** la nuit, le week-end ni les jours fériés.',
      'Nos autres pages pour Paris : [souris à Paris](/souris/paris), [punaises de lit à Paris](/punaises-de-lit/paris), [cafards à Paris](/cafards/paris) et [tous nos services à Paris](/zones/paris).',
    ],
  },
  chiffres: [
    { valeur: '≈ 4 000', texte: 'interventions par an de la Ville de Paris pour limiter les rongeurs sur le domaine public, dans le cadre d’un plan de lutte intégrée lancé en 2017.', source: PARIS_RATS },
    { valeur: '≈ 20 000', texte: 'habitants au km² : 2 103 778 Parisiens sur environ 105 km², avec autant de caves, cours et locaux à poubelles partagés.', source: PARIS_INSEE },
    { valeur: '3 à 5', texte: 'portées par an pour une femelle rat brun, qui peut se reproduire dès 8 semaines : une colonie grossit vite si on attend.', source: PARIS_RATS },
    { valeur: '6 300', texte: 'poubelles Cybel, qui empêchent les animaux d’atteindre le sac, installées par la Ville dans les rues (chiffre 2026).', source: PARIS_RATS },
  ],
  quartiers: {
    titre: 'Où se cachent les rats à Paris (75) : la capitale secteur par secteur',
    intro: 'Nous avons regroupé les 20 arrondissements en six secteurs. Pour chacun, une page complète détaille les quartiers, les risques et notre méthode : cliquez sur votre arrondissement.',
    zones: [
      {
        nom: 'Paris Centre, du Louvre au Marais',
        texte: `Immeubles anciens, caves voûtées, restaurants serrés et forte fréquentation : le cœur de Paris concentre nourriture et cachettes. Le square de la Tour-Saint-Jacques a été l’un des sites pilotes de l’opération « Rats 360° » de la Ville en 2025. Nos pages : ${l('paris-1', 'Paris 1er')}, ${l('paris-2', 'Paris 2e')}, ${l('paris-3', 'Paris 3e')} et ${l('paris-4', 'Paris 4e')}.`,
        photo: p('square-tour-saint-jacques.jpg', 'Le square de la Tour-Saint-Jacques à Paris', 'Le square de la Tour-Saint-Jacques, site pilote de l’opération « Rats 360° » de la Ville de Paris en 2025.', 'LPLT', 'CC BY-SA 3.0', 'Square_de_la_Tour-Saint-jacques.JPG'),
      },
      {
        nom: 'La rive gauche et les quais de Seine',
        texte: `Du Quartier latin aux Invalides, quais bas, immeubles haussmanniens et cours anciennes : les rats circulent entre les berges, les égouts et les caves. Nous traitons les sous-sols d’immeuble avec le syndic. Nos pages : ${l('paris-5', 'Paris 5e')}, ${l('paris-6', 'Paris 6e')} et ${l('paris-7', 'Paris 7e')}.`,
        photo: p('quais-de-seine.jpg', 'Les quais de Seine et le pont de la Tournelle à Paris', 'La Seine au pont de la Tournelle : quais bas et immeubles anciens au bord de l’eau.', 'Schezar', 'CC BY 2.0', "Paris_75004_Quai_d%27Orl%C3%A9ans_-_Pont_de_la_Tournelle_20140409.jpg"),
      },
      {
        nom: 'L’ouest : grands boulevards, Monceau et le 16e',
        texte: `Immeubles bourgeois, hôtels particuliers, restaurants et grands parcs comme Monceau : copropriétés, cuisines professionnelles et jardins privés. Nos pages : ${l('paris-8', 'Paris 8e')}, ${l('paris-9', 'Paris 9e')}, ${l('paris-16', 'Paris 16e')} et ${l('paris-17', 'Paris 17e')}.`,
        photo: p('parc-monceau.jpg', 'Les pelouses et les arbres du parc Monceau à Paris', 'Le parc Monceau (8e) : pelouses et massifs, au milieu des immeubles.', 'DiscoA340', 'CC BY-SA 4.0', 'Landscape_Panorama_of_the_Parc_Monceau_2.jpg'),
      },
      {
        nom: 'Le canal Saint-Martin et l’est parisien',
        texte: `Quais du canal, cafés, marchés, cours d’artisans et, au sud-est, le bois de Vincennes près de notre base : la place Madeleine-Braun, au bord du canal, a été un site pilote de « Rats 360° ». Nos pages : ${l('paris-10', 'Paris 10e')}, ${l('paris-11', 'Paris 11e')}, ${l('paris-12', 'Paris 12e')} et ${l('paris-20', 'Paris 20e')}.`,
        photo: p('canal-saint-martin.jpg', 'Le canal Saint-Martin vu du quai de Valmy à Paris', 'Le canal Saint-Martin (10e), autour duquel la Ville a mené l’opération « Rats 360° » en 2025.', 'DimiTalen', 'CC0', 'Canal_Saint-Martin_from_Quay_de_Valmy,_Paris,_2016.jpg'),
      },
      {
        nom: 'Le nord : Montmartre, la Villette et les Buttes-Chaumont',
        texte: `Grands ensembles, immeubles anciens, parcs et marchés : le jardin Hérold, dans le quartier Danube (19e), a fait partie des sites pilotes de la Ville. Nous intervenons en copropriété, chez les bailleurs et dans les commerces. Nos pages : ${l('paris-18', 'Paris 18e')} et ${l('paris-19', 'Paris 19e')}.`,
        photo: p('buttes-chaumont.jpg', 'Le parc des Buttes-Chaumont à Paris', 'Le parc des Buttes-Chaumont (19e) : pins, lac et coteaux boisés.', 'FreCha', 'CC BY-SA 4.0', 'Parc_des_Buttes-Chaumont.jpg'),
      },
      {
        nom: 'Le sud : 13e, 14e et 15e',
        texte: `Tours, cités, immeubles anciens et grands squares : le square du Docteur-Calmette, quartier Périchaux-Brançion (15e), a été un site pilote de « Rats 360° ». Caves, locaux à poubelles et jardins de résidence sont nos points de contrôle. Nos pages : ${l('paris-13', 'Paris 13e')}, ${l('paris-14', 'Paris 14e')} et ${l('paris-15', 'Paris 15e')}.`,
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats à Paris (75) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement, dans tout Paris.' },
      { t: 'Le diagnostic', x: 'Immeuble ancien : caves voûtées, cour, local à poubelles, gaines. Restaurant : réserves, cuisine, sous-sol. Rez-de-chaussée : passages de tuyaux et soupiraux.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées sur les soupiraux, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur à Paris (75) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans la cave ou la cour d’un immeuble', x: 'Le cas parisien par excellence : nous traitons tout le sous-sol avec le syndic, puis rebouchons soupiraux et passages. La Ville rappelle que ces espaces privés relèvent des propriétaires.' },
      { t: 'Des rongeurs dans un restaurant ou un commerce de bouche', x: 'Postes numérotés, plan de localisation, passages hors service, registre et attestation pour vos contrôles d’hygiène. Voir [le plan de lutte d’un restaurant](/blog/restaurant-plan-lutte-nuisibles).' },
      { t: 'Des souris dans un appartement haussmannien', x: 'Elles passent par les gaines, les planchers et le pourtour des tuyaux : voir [souris à Paris](/souris/paris) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Un rat qui sort des toilettes', x: 'Le réseau d’égouts est leur chemin : voir [rat dans les toilettes](/blog/rat-dans-les-toilettes). Nous traitons la colonie et conseillons la pose d’un clapet par un plombier.' },
      { t: 'Des rats dans le jardin d’une résidence', x: 'Terriers au pied des massifs, près des bacs ou des composts : nous traitons la colonie et conseillons des contenants fermés, comme le fait la Ville dans ses jardins.' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, Ville de Paris, syndic : qui fait quoi à Paris (75)',
    paras: [
      'L’**article 119** du **règlement sanitaire de Paris** (arrêté du 20 novembre 1979) demande aux **propriétaires** de prendre les mesures pour éviter l’introduction des rongeurs, et aux propriétaires et occupants de vérifier régulièrement leurs locaux. La Ville de Paris le rappelle : dans les jardins, cours, caves et bâtiments privés, la lutte **incombe aux propriétaires**. En copropriété, c’est le **syndic** qui organise le traitement des parties communes.',
      'La **Ville de Paris** agit sur l’espace public par son service SMASH, mène des actions dans les égouts et se coordonne avec les bailleurs sociaux. Un rat dans la rue ou un square se signale avec l’application **DansMaRue**. La Ville sanctionne aussi le jet de nourriture dans les rues et les espaces verts : **124 verbalisations** en 2024.',
      'Locataire, signalez les rats **par écrit** à votre bailleur, avec photos et dates : il doit vous fournir un logement exempt de nuisibles (loi du 6 juillet 1989, article 6). Les arrondissements les plus proches de notre base : ' + l('paris-12', 'Paris 12e') + ', ' + l('paris-11', 'Paris 11e') + ' et ' + l('paris-20', 'Paris 20e') + '.',
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation à Paris (75) ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris, au même prix dans les 20 arrondissements. Immeuble, cave ou restaurant : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Intervenez-vous dans tous les arrondissements de Paris ?', a: 'Oui, du 1er au 20e, souvent le jour même, depuis notre base de Saint-Maurice, aux portes du 12e. Chaque arrondissement a sa page, par exemple [dératisation à Paris 12e](/deratisation/paris-12) ou [dératisation à Paris 18e](/deratisation/paris-18).' },
    { q: 'La Ville de Paris dératise-t-elle les immeubles privés ?', a: 'Non : elle traite l’espace public (environ 4 000 interventions par an) et les égouts. Dans les cours, caves, jardins et bâtiments privés, la Ville rappelle que la lutte incombe aux propriétaires.' },
    { q: 'Qui doit payer la dératisation d’un immeuble parisien ?', a: 'Les parties communes relèvent du syndic de copropriété, en application de l’article 119 du règlement sanitaire de Paris. Dans un logement loué, le bailleur doit fournir un logement exempt de nuisibles (loi du 6 juillet 1989).' },
    { q: 'Comment signaler un rat dans la rue à Paris ?', a: 'Avec l’application DansMaRue de la Ville de Paris, qui géolocalise le signalement. Les services municipaux le prennent en charge sur l’espace public.' },
    { q: 'Les rats sont-ils plus visibles l’été à Paris ?', a: 'Oui, selon la Ville de Paris : la chaleur accélère leur reproduction, et quand les sols s’assèchent, ils remontent davantage en surface pour chercher de l’eau ([la reproduction des rats](/blog/reproduction-des-rats)).' },
    { q: 'Les rats peuvent-ils transmettre des maladies ?', a: 'Les contacts directs sont rares, mais la leptospirose se transmet par l’urine des animaux infectés : 886 cas ont été signalés en France en 2024 (Santé publique France). Ne touchez jamais un rat ni un piège à mains nues.' },
    { q: 'Proposez-vous une dératisation sans poison à Paris ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, pour les foyers avec enfants ou animaux, les crèches et les commerces.' },
  ],
  sources: [PARIS_RATS, RSD_PARIS, PARIS_INSEE, LOI_1989, SPF_LEPTO],
}

// ── Seine-Saint-Denis (93) ──
const SSD_WIKI: Source = { label: 'Wikipédia, Seine-Saint-Denis (Seine, Marne, canaux de l’Ourcq, Saint-Denis et de Chelles, espaces verts, parcs départementaux)', url: 'https://fr.wikipedia.org/wiki/Seine-Saint-Denis' }
const SSD_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : département 93, communes, populations légales et surfaces', url: 'https://geo.api.gouv.fr/departements/93/communes?fields=nom,population,surface' }
const q = (f: string, alt: string, legende: string, credit: string, licence: string, fichier: string): PhotoVille => ({ src: `/departements/seine-saint-denis/${f}`, alt, legende, credit, licence, page: 'https://commons.wikimedia.org/wiki/File:' + fichier })

REFONTE_DERAT_DEP['seine-saint-denis'] = {
  maj: '2026-11-26',
  reglement: 'loi du 6 juillet 1989 et règlement sanitaire départemental de la Seine-Saint-Denis',
  quiPaie: '**Qui paie** : dans un logement loué, le bailleur doit fournir un logement exempt de nuisibles (loi du 6 juillet 1989, **article 6**) ; en copropriété, les parties communes relèvent du **syndic**, et dans les cités, du **bailleur**.',
  accroche: 'Trois canaux, la Seine au nord, la Marne au sud-est, des grands ensembles, des pavillons et de grands parcs : en Seine-Saint-Denis, les rats ont de l’eau et des cachettes partout. Nous intervenons dans les 39 communes, avec une page détaillée pour 8 d’entre elles.',
  societe: {
    titre: 'Société de dératisation en Seine-Saint-Denis (93) : un département traversé par trois canaux',
    paras: [
      'La Seine-Saint-Denis compte **1 704 316 habitants** dans **39 communes**, sur **236 km²** : environ **7 200 habitants au km²**. La **Seine** la borde au nord-ouest, la **Marne** traverse son extrémité sud-est, et trois canaux l’irriguent : le **canal de l’Ourcq**, le **canal Saint-Denis** et le **canal de Chelles**. Berges, quais, réseaux d’assainissement et bassins de rétention des eaux de pluie : le **surmulot**, le rat d’égout, y trouve de l’eau et des passages.',
      'Le département associe des **grands ensembles**, des quartiers de **pavillons avec jardin**, des zones d’activité et de grands parcs départementaux, comme le parc **Georges-Valbon** ou le parc du **Sausset**. Les espaces verts y sont passés d’environ **1 m² à 11 m² par habitant** entre 1980 et 2020. Caves, locaux à poubelles, jardins et lisières : chaque terrain demande sa méthode de dératisation.',
      'Nos dératiseurs partent de **Saint-Maurice (94)** et interviennent **7 jours sur 7** dans tout le 93, souvent le jour même, **sans majoration** la nuit, le week-end ni les jours fériés.',
      'Nos autres pages pour le département : [souris en Seine-Saint-Denis](/souris/seine-saint-denis), [punaises de lit en Seine-Saint-Denis](/punaises-de-lit/seine-saint-denis), [cafards en Seine-Saint-Denis](/cafards/seine-saint-denis) et [tous nos services en Seine-Saint-Denis](/zones/seine-saint-denis).',
    ],
  },
  chiffres: [
    { valeur: '1 704 316', texte: 'habitants dans les 39 communes de la Seine-Saint-Denis (populations légales Insee), soit environ 7 200 au km².', source: SSD_INSEE },
    { valeur: '3 canaux', texte: 'traversent le département : l’Ourcq, Saint-Denis et Chelles, en plus de la Seine au nord-ouest et de la Marne au sud-est.', source: SSD_WIKI },
    { valeur: '11 m²', texte: 'd’espaces verts par habitant en 2020, contre environ 1 m² en 1980 : parcs, coulées vertes et jardins où les rats creusent leurs terriers.', source: SSD_WIKI },
    { valeur: '886', texte: 'cas de leptospirose signalés en France en 2024, une maladie transmise surtout par l’urine des rats ; 74 % des malades ont été hospitalisés.', source: SPF_LEPTO },
  ],
  quartiers: {
    titre: 'Où se cachent les rats en Seine-Saint-Denis (93) : le département secteur par secteur',
    intro: 'Nous avons regroupé nos villes du département en quatre secteurs. Pour chacune, une page complète détaille ses quartiers, ses risques et notre méthode : cliquez sur le nom de votre commune.',
    zones: [
      {
        nom: 'Le canal de l’Ourcq, de Pantin à Bobigny',
        texte: `Aux portes de Paris, le canal de l’Ourcq longe d’anciens sites industriels, des immeubles récents et des quartiers denses. Quais, chantiers et locaux à poubelles : les rats circulent entre l’eau, les réseaux et les sous-sols. Nos pages : ${l('pantin', 'Pantin')} et ${l('bobigny', 'Bobigny')}.`,
        photo: q('canal-ourcq-pantin.jpg', 'Le canal de l’Ourcq à Pantin, avec les Grands Moulins au fond', 'Le canal de l’Ourcq à Pantin, avec au fond la silhouette des Grands Moulins.', 'Claude Shoshany', 'CC BY 2.5', "Canal_de_l%27Ourcq_%C3%A0_Pantin.JPG"),
      },
      {
        nom: 'Les coteaux de l’est parisien : Montreuil, Bagnolet et Les Lilas',
        texte: `Immeubles anciens, pavillons, jardins en terrasse et parcs comme Jean-Moulin–Les Guilands, partagé entre Bagnolet et Montreuil, ou les Beaumonts : ici, nous traitons autant les caves d’immeuble que les jardins. Nos pages : ${l('montreuil', 'Montreuil')}, ${l('bagnolet', 'Bagnolet')} et ${l('les-lilas', 'Les Lilas')}.`,
        photo: q('parc-des-beaumonts-montreuil.jpg', 'Le parc des Beaumonts à Montreuil', 'Le parc des Beaumonts à Montreuil : pelouses, bosquets et immeubles en lisière.', 'Damien Boilley', 'CC BY 2.0', 'Montreuil_parc_des_Beaumonts_1.jpg'),
      },
      {
        nom: 'Le nord, la Seine et le parc Georges-Valbon',
        texte: `Au nord-ouest, la Seine borde le département à hauteur de la boucle de Gennevilliers, le long d’Épinay-sur-Seine. Plus à l’est s’étend le parc Georges-Valbon, l’ancien parc départemental de La Courneuve. Grands ensembles, berges et zones d’activité : nous intervenons avec les bailleurs, les syndics et les professionnels. Notre page : ${l('epinay-sur-seine', 'Épinay-sur-Seine')}.`,
        photo: q('parc-georges-valbon.jpg', 'Les pelouses du parc Georges-Valbon, ex-parc de La Courneuve', 'Le parc Georges-Valbon, ancien parc départemental de La Courneuve.', 'Claude Villetaneuse', 'CC BY-SA 3.0', 'Parc_de_la_Courneuve_-_01.JPG'),
      },
      {
        nom: 'L’est pavillonnaire, le Sausset et la forêt de Bondy',
        texte: `Vers l’est, les quartiers de pavillons, le canal de l’Ourcq à Aulnay-sous-Bois, le parc du Sausset, partagé entre Aulnay-sous-Bois et Villepinte, et la forêt de Bondy : les rats vivent dehors, près des **composts**, des **abris** et des **lisières**, puis entrent dans les maisons à l’automne. Nos pages : ${l('aulnay-sous-bois', 'Aulnay-sous-Bois')} et ${l('livry-gargan', 'Livry-Gargan')}.`,
        photo: q('parc-du-sausset.jpg', 'Vue du parc départemental du Sausset', 'Le parc départemental du Sausset, entre Aulnay-sous-Bois et Villepinte.', 'Suaudeau', 'Domaine public', 'ParcDuSausset.jpg'),
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats en Seine-Saint-Denis (93) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement, partout dans le 93.' },
      { t: 'Le diagnostic', x: 'Grand ensemble : vide-ordures, caves, local à poubelles. Immeuble ancien : caves, cour, gaines. Pavillon : jardin, abri, vide sanitaire.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur en Seine-Saint-Denis (93) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats au vide-ordures ou dans les caves d’une cité', x: 'Le signe d’une colonie dans les parties communes : le bailleur organise le traitement de tout l’immeuble, nous rebouchons ensuite les passages vers les logements.' },
      { t: 'Des terriers dans le jardin d’un pavillon', x: 'Sous l’abri, au pied de la haie ou près du compost : nous traitons la colonie et fermons l’accès au vide sanitaire. Voir [rat dans le compost](/blog/rat-compost).' },
      { t: 'Des rats près d’un canal ou d’une berge', x: 'Les logements proches de l’eau sont plus exposés : nous contrôlons caves, soupiraux et regards, puis rebouchons les passages ([mode de vie du rat](/blog/rat-mode-de-vie)).' },
      { t: 'Des souris dans un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris en Seine-Saint-Denis](/souris/seine-saint-denis) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des rongeurs dans un commerce ou un entrepôt', x: 'Commerces de bouche, marchés et zones d’activité : contrat de suivi, postes numérotés, registre et attestation pour vos contrôles d’hygiène. Voir [nos services aux professionnels](/professionnels).' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, mairie, bailleur : qui fait quoi en Seine-Saint-Denis (93)',
    paras: [
      'Dans un logement loué, la **loi du 6 juillet 1989** (article 6) impose au **bailleur** de fournir un logement décent, exempt de nuisibles. Dans les cités, les caves, vide-ordures et locaux à poubelles se traitent à la demande du **bailleur** ; en copropriété, à celle du **syndic** ; une maison, à celle de son propriétaire.',
      'Les **communes** agissent sur l’espace public et dans leurs bâtiments. Chez vous, dans votre cave ou votre jardin, c’est une entreprise de dératisation qui intervient. Locataire, signalez les rats **par écrit** à votre bailleur, avec photos et dates, et gardez une copie.',
      `Nos villes du 93 les plus proches de notre base de Saint-Maurice : ${l('montreuil', 'Montreuil')}, ${l('bagnolet', 'Bagnolet')} et ${l('les-lilas', 'Les Lilas')}.`,
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation en Seine-Saint-Denis (93) ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris, au même prix dans les 39 communes. Maison, immeuble ou commerce : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Intervenez-vous dans toutes les communes du 93 ?', a: 'Oui, dans les 39 communes de la Seine-Saint-Denis, souvent le jour même, depuis notre base de Saint-Maurice. Nous avons une page détaillée pour 8 d’entre elles, dont [Montreuil](/deratisation/montreuil) et [Aulnay-sous-Bois](/deratisation/aulnay-sous-bois).' },
    { q: 'Pourquoi des rats près des canaux de la Seine-Saint-Denis ?', a: 'Le surmulot vit près de l’eau et circule par les égouts et les réseaux d’eaux pluviales. Les canaux de l’Ourcq, Saint-Denis et de Chelles, la Seine et la Marne lui offrent berges et passages jusqu’aux caves.' },
    { q: 'J’habite une cité : qui paie la dératisation ?', a: 'Les parties communes (caves, vide-ordures, locaux à poubelles) relèvent du bailleur. Dans votre logement, le bailleur doit vous fournir un logement exempt de nuisibles (loi du 6 juillet 1989, article 6). Signalez-le par écrit.' },
    { q: 'La mairie peut-elle dératiser chez moi ?', a: 'En général non : les communes traitent l’espace public et leurs bâtiments. Chez vous, dans votre cave ou votre jardin, il faut faire appel à une entreprise de dératisation.' },
    { q: 'Les grands parcs du 93 attirent-ils les rats vers les maisons ?', a: 'Les parcs, coulées vertes et lisières offrent des terriers aux rongeurs, qui se rapprochent des maisons voisines à l’automne. Fermez composts et abris, et faites contrôler le vide sanitaire.' },
    { q: 'Intervenez-vous dans les commerces et les entrepôts du 93 ?', a: 'Oui : plan de lutte, postes numérotés, passages réguliers hors des heures d’ouverture, registre et attestation pour vos contrôles d’hygiène. Voir [nos services aux professionnels](/professionnels).' },
    { q: 'Proposez-vous une dératisation sans poison en Seine-Saint-Denis ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, pour les foyers avec enfants ou animaux, les écoles et les crèches.' },
  ],
  sources: [SSD_INSEE, LOI_1989, SPF_LEPTO, SSD_WIKI],
}

// ── Essonne (91) ──
const ESS_WIKI: Source = { label: 'Wikipédia, Essonne (département) : Seine, Orge, Essonne, Yvette, relief et plateau de Saclay', url: 'https://fr.wikipedia.org/wiki/Essonne_(d%C3%A9partement)' }
const ESS_INSEE: Source = { label: 'Découpage administratif (Insee), geo.api.gouv.fr : département 91, communes, populations légales et surfaces', url: 'https://geo.api.gouv.fr/departements/91/communes?fields=nom,population,surface' }
const e = (f: string, alt: string, legende: string, fichier: string): PhotoVille => ({ src: `/departements/essonne/${f}`, alt, legende, credit: 'Chabe01', licence: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:' + fichier })

REFONTE_DERAT_DEP.essonne = {
  maj: '2026-11-27',
  reglement: 'loi du 6 juillet 1989 et règlement sanitaire départemental de l’Essonne',
  quiPaie: '**Qui paie** : dans un logement loué, le bailleur doit fournir un logement exempt de nuisibles (loi du 6 juillet 1989, **article 6**) ; en copropriété, les parties communes relèvent du **syndic** ; une maison, de son propriétaire.',
  accroche: 'La Seine, l’Orge, l’Essonne et l’Yvette, des pavillons avec jardin, des grands ensembles et les abords de l’aéroport d’Orly : dans l’Essonne, les rats suivent l’eau. Nous intervenons dans tout le département, avec une page détaillée pour 13 villes.',
  societe: {
    titre: 'Société de dératisation dans l’Essonne (91) : un département de rivières, de la Seine à l’Yvette',
    paras: [
      'L’Essonne compte **1 338 485 habitants** dans **194 communes**, sur environ **1 804 km²**. Au nord, des villes denses le long de la **Seine** et de l’**Orge** ; au nord-ouest, la vallée de l’**Yvette** et le plateau de **Saclay** ; au sud, le grand plateau de la **Beauce**. Le relief descend de 178 mètres à l’ouest jusqu’à **31 mètres** au bord de la Seine, à Vigneux-sur-Seine.',
      'La **Seine** traverse le nord-est du département sur **24 kilomètres**. L’**Orge** s’y jette à **Viry-Châtillon** et **Athis-Mons**, l’**Essonne** à **Corbeil-Essonnes**. Berges, réseaux d’eaux pluviales, caves et **jardins de pavillons** : le **surmulot** circule le long de ces cours d’eau et s’installe près des maisons. Chaque secteur demande sa méthode de dératisation.',
      'Nos dératiseurs partent de **Saint-Maurice (94)** et interviennent **7 jours sur 7** dans l’Essonne, souvent le jour même, **sans majoration** la nuit, le week-end ni les jours fériés.',
      'Nos autres pages pour le département : [souris dans l’Essonne](/souris/essonne), [punaises de lit dans l’Essonne](/punaises-de-lit/essonne), [cafards dans l’Essonne](/cafards/essonne) et [tous nos services dans l’Essonne](/zones/essonne).',
    ],
  },
  chiffres: [
    { valeur: '1 338 485', texte: 'habitants dans les 194 communes de l’Essonne (populations légales Insee).', source: ESS_INSEE },
    { valeur: '24 km', texte: 'de Seine traversent le nord-est du département, du Coudray-Montceaux à Vigneux-sur-Seine.', source: ESS_WIKI },
    { valeur: '41 km', texte: 'd’Orge dans l’Essonne, de Dourdan jusqu’à la Seine, où elle se jette à Viry-Châtillon et Athis-Mons.', source: ESS_WIKI },
    { valeur: '886', texte: 'cas de leptospirose signalés en France en 2024, une maladie transmise surtout par l’urine des rats ; 74 % des malades ont été hospitalisés.', source: SPF_LEPTO },
  ],
  quartiers: {
    titre: 'Où se cachent les rats dans l’Essonne (91) : le département secteur par secteur',
    intro: 'Nous avons regroupé nos 13 villes du département en quatre secteurs, du bord de la Seine au plateau de Saclay. Pour chacune, une page complète détaille ses quartiers, ses risques et notre méthode : cliquez sur le nom de votre commune.',
    zones: [
      {
        nom: 'La vallée de l’Orge, jusqu’à la Seine',
        texte: `L’Orge traverse des quartiers de pavillons et de résidences avant de rejoindre la Seine à Viry-Châtillon et Athis-Mons. Berges, jardins en bord de rivière et réseaux d’eaux pluviales : les rats vivent près de l’eau et gagnent les vide sanitaires et les garages. Nos pages : ${l('athis-mons', 'Athis-Mons')}, ${l('viry-chatillon', 'Viry-Châtillon')}, ${l('savigny-sur-orge', 'Savigny-sur-Orge')} et ${l('sainte-genevieve-des-bois', 'Sainte-Geneviève-des-Bois')}.`,
        photo: e('orge-viry-chatillon.jpg', 'L’Orge canalisée entre les pavillons à Viry-Châtillon', 'L’Orge à Viry-Châtillon, entre les pavillons et leurs jardins.', 'Rivi%C3%A8re_Orge_-_Viry-Ch%C3%A2tillon_(FR91)_-_2024-04-20_-_1.jpg'),
      },
      {
        nom: 'Les bords de Seine, de Corbeil à Vigneux',
        texte: `De Corbeil-Essonnes, où l’Essonne rejoint la Seine, jusqu’à Vigneux-sur-Seine, point le plus bas du département, le fleuve longe des grands ensembles, des quartiers pavillonnaires et des zones d’activité. Caves, locaux à poubelles et berges : nous traitons les sous-sols et les jardins. Nos pages : ${l('corbeil-essonnes', 'Corbeil-Essonnes')}, ${l('evry-courcouronnes', 'Évry-Courcouronnes')}, ${l('ris-orangis', 'Ris-Orangis')} et ${l('vigneux-sur-seine', 'Vigneux-sur-Seine')}.`,
        photo: e('seine-ris-orangis.jpg', 'La Seine et ses berges boisées à Ris-Orangis', 'La Seine à Ris-Orangis : berges boisées et quais.', 'Fleuve_Seine_-_Ris-Orangis_(FR91)_-_2023-10-21_-_1.jpg'),
      },
      {
        nom: 'Les abords de l’aéroport d’Orly',
        texte: `Au nord, l’aéroport d’Orly s’étend à cheval sur l’Essonne et le Val-de-Marne. Autour : entrepôts, zones d’activité, hôtels et quartiers de pavillons. Pour les professionnels, nous proposons un **plan de lutte** avec postes numérotés et attestation. Nos pages : ${l('paray-vieille-poste', 'Paray-Vieille-Poste')} et ${l('wissous', 'Wissous')}. Voir aussi [dératisation pour les professionnels](/professionnels).`,
      },
      {
        nom: 'Massy, Palaiseau et la vallée de l’Yvette',
        texte: `Au nord-ouest, plateaux et vallées encaissées se succèdent : le plateau de Saclay, la vallée de l’Yvette, les quartiers d’affaires et les grands ensembles de Massy. Jardins en pente, cours d’eau et sous-sols : nous adaptons le traitement à chaque terrain. Nos pages : ${l('massy', 'Massy')}, ${l('palaiseau', 'Palaiseau')} et ${l('gif-sur-yvette', 'Gif-sur-Yvette')}.`,
        photo: e('yvette-gif-sur-yvette.jpg', 'L’Yvette entre les arbres et une maison à Gif-sur-Yvette', 'L’Yvette à Gif-sur-Yvette : rivière, berges boisées et maisons riveraines.', 'Rivi%C3%A8re_Yvette_-_Gif-sur-Yvette_(FR91)_-_2026-01-17_-_1.jpg'),
      },
    ],
  },
  intervention: {
    titre: 'Intervention contre les rats dans l’Essonne (91) : notre dératisation, pas à pas',
    etapes: [
      { t: 'Une photo, un prix', x: 'Envoyez une photo des crottes ou des dégâts : nous identifions rat ou souris et donnons le prix avant de venir. Dès 120 € pour un appartement, partout dans le 91.' },
      { t: 'Le diagnostic', x: 'Pavillon : jardin, abri, vide sanitaire, garage. Immeuble : caves, local à poubelles, gaines. Entrepôt ou commerce : quais, réserves, bennes.' },
      { t: 'Le dispositif adapté', x: 'Postes d’appâtage verrouillés, pièges mécaniques ou connectés, ou [dératisation écologique](/services/deratisation-ecologique) avec le piège Ekomille, sans raticide.' },
      { t: 'Rebouchage et suivi', x: 'Passages rebouchés, grilles posées, postes contrôlés jusqu’à l’arrêt des consommations. Garantie 1 an. Voir les [prix d’une dératisation](/tarifs/deratisation).' },
    ],
  },
  dératiseur: {
    titre: 'Dératiseur dans l’Essonne (91) : les cas que nous rencontrons le plus',
    cas: [
      { t: 'Des rats dans le jardin d’un pavillon', x: 'Le cas le plus fréquent dans l’Essonne : terriers sous l’abri, au pied de la haie ou près du compost. Nous traitons la colonie et fermons l’accès au vide sanitaire. Voir [rat dans le compost](/blog/rat-compost).' },
      { t: 'Des rats près de l’Orge ou de la Seine', x: 'Les maisons proches de l’eau sont plus exposées, surtout après de fortes pluies : nous contrôlons caves, soupiraux et regards, puis rebouchons les passages ([mode de vie du rat](/blog/rat-mode-de-vie)).' },
      { t: 'Des rongeurs dans un vide sanitaire', x: 'Bruits sous le plancher, odeur, isolant arraché : nous traitons le vide sanitaire et posons des grilles sur les aérations. Voir [rat dans le vide sanitaire](/blog/rat-vide-sanitaire).' },
      { t: 'Des souris dans une maison ou un appartement', x: 'Elles passent par les gaines et le pourtour des tuyaux : voir [souris dans l’Essonne](/souris/essonne) et [par où entrent les souris](/blog/souris-par-ou-entrent-elles).' },
      { t: 'Des rongeurs dans un entrepôt ou un restaurant', x: 'Zones d’activité, commerces de bouche et logistique : contrat de suivi, postes numérotés, registre et attestation pour vos contrôles d’hygiène.' },
    ],
  },
  mairie: {
    titre: 'Entreprise de dératisation, mairie, bailleur : qui fait quoi dans l’Essonne (91)',
    paras: [
      'Dans un logement loué, la **loi du 6 juillet 1989** (article 6) impose au **bailleur** de fournir un logement décent, exempt de nuisibles. En copropriété, les caves et locaux à poubelles relèvent du **syndic** ; dans les résidences sociales, du **bailleur** ; une maison, de son propriétaire.',
      'Les **communes** agissent sur l’espace public et dans leurs bâtiments. Chez vous, dans votre cave ou votre jardin, c’est une entreprise de dératisation qui intervient. Locataire, signalez les rats **par écrit** à votre bailleur, avec photos et dates, et gardez une copie.',
      `Nos villes de l’Essonne les plus proches de notre base de Saint-Maurice : ${l('athis-mons', 'Athis-Mons')}, ${l('paray-vieille-poste', 'Paray-Vieille-Poste')} et ${l('vigneux-sur-seine', 'Vigneux-sur-Seine')}.`,
    ],
  },
  faq: [
    { q: 'Combien coûte une dératisation dans l’Essonne (91) ?', a: '[À partir de 120 € TTC](/tarifs/deratisation) pour un appartement, rats ou souris, au même prix dans tout le département. Maison, immeuble ou commerce : prix sur devis gratuit, donné avant l’intervention. Garantie 1 an.' },
    { q: 'Intervenez-vous dans toute l’Essonne ?', a: 'Oui, depuis notre base de Saint-Maurice, souvent le jour même au nord du département. Nous avons une page détaillée pour 13 villes, dont [Massy](/deratisation/massy) et [Évry-Courcouronnes](/deratisation/evry-courcouronnes).' },
    { q: 'Pourquoi des rats près de l’Orge et de la Seine ?', a: 'Le surmulot vit près de l’eau et circule par les égouts et les réseaux d’eaux pluviales. Les berges de l’Orge, de la Seine et de l’Yvette lui offrent abri et passages jusqu’aux jardins et aux caves.' },
    { q: 'J’ai des rats dans mon jardin : que faire ?', a: 'Fermez le compost, rentrez les croquettes et les graines, puis faites traiter les terriers. Nous fermons aussi l’accès au vide sanitaire pour que les rats n’entrent pas dans la maison ([rat dans le compost](/blog/rat-compost)).' },
    { q: 'Je suis locataire dans l’Essonne : qui paie la dératisation ?', a: 'Le bailleur doit fournir un logement décent, exempt de nuisibles (loi du 6 juillet 1989, article 6). En copropriété, les parties communes relèvent du syndic. Signalez le problème par écrit, avec photos.' },
    { q: 'La mairie peut-elle dératiser chez moi ?', a: 'En général non : les communes traitent l’espace public et leurs bâtiments. Chez vous, dans votre cave ou votre jardin, il faut faire appel à une entreprise de dératisation.' },
    { q: 'Intervenez-vous dans les entrepôts et les commerces de l’Essonne ?', a: 'Oui : plan de lutte, postes numérotés, passages réguliers hors des heures d’ouverture, registre et attestation pour vos contrôles d’hygiène. Voir [nos services aux professionnels](/professionnels).' },
    { q: 'Proposez-vous une dératisation sans poison dans l’Essonne ?', a: 'Oui : pièges mécaniques, [piège Ekomille sans raticide](/services/deratisation-ecologique) et rebouchage des accès, pour les foyers avec enfants ou animaux, les écoles et les crèches.' },
  ],
  sources: [ESS_INSEE, LOI_1989, SPF_LEPTO, ESS_WIKI],
}

export const refonteDeratDep = (d: string) => REFONTE_DERAT_DEP[d as DepSlug]

// Phrase d'accroche d'une ville refondue (partie après « : » du titre « Société de dératisation à X (CP) : … »),
// affichée sous son lien dans la liste des villes de la page département.
export const accrocheVilleDerat = (slug: string) => {
  const t = REFONTE_DERATISATION[slug]?.societe.titre
  const i = t?.indexOf(' : ') ?? -1
  if (!t || i < 0) return undefined
  const x = t.slice(i + 3)
  return x.charAt(0).toUpperCase() + x.slice(1)
}
