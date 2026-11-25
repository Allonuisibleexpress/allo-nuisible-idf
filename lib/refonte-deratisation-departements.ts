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
