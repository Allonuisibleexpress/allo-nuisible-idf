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
