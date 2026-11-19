// Pages « Fourmis à [ville] » des Hauts-de-Seine (92) et de la Seine-Saint-Denis (93), 20/11/2026.
// Contenu rédigé ville par ville (parcs, cours d'eau, type de bâti), aucun chiffre inventé.
// Tapinoma magnum : non confirmée en Île-de-France, jamais présentée comme présente. FAQ_COMMUNE ajoutée dans lib/villes-fourmis.ts.
import type { VilleFourmis } from './villes-fourmis'

const D92 = { code: '92', departement: 'Hauts-de-Seine', zoneHref: '/zones/hauts-de-seine' }
const D93 = { code: '93', departement: 'Seine-Saint-Denis', zoneHref: '/zones/seine-saint-denis' }
const vf = (nom: string, a: string, slug: string, dep: typeof D92, contexte: string[], proches: string[], faq: { q: string; a: string }): VilleFourmis => ({
  slug, nom, a, ...dep,
  title: `Fourmis ${a} (${dep.code}) : traitement et nid`,
  description: `Fourmis ${a} : identification de l'espèce, gel appât qui atteint la reine, sans pulvérisation. Dès 120 € TTC, devis gratuit.`,
  contexte, proches, faq: [faq],
})

export const VILLES_FOURMIS_9293: VilleFourmis[] = [
  // ── Hauts-de-Seine ──
  vf('Boulogne-Billancourt', 'à Boulogne-Billancourt', 'boulogne-billancourt', D92, [
    'À Boulogne-Billancourt, les fourmis entrent surtout dans les appartements en rez-de-chaussée et les maisons avec jardin, du quartier des Princes aux bords de Seine. Elles suivent les plinthes jusqu’à la cuisine, attirées par le sucre et les miettes.',
    'Nous identifions l’espèce, suivons la piste et posons un gel appât que les ouvrières rapportent au nid, jusqu’à la reine. Pas de pulvérisation dans les pièces de vie.',
  ], ['Issy-les-Moulineaux', 'Paris 16e', 'Sèvres', 'Saint-Cloud'],
  { q: 'Des fourmis au 4e étage : d’où viennent-elles ?', a: 'Souvent d’un nid dans la façade, une jardinière ou un faux plafond. Elles montent par les gaines et les fissures. On suit la piste pour poser l’appât là où elles passent.' }),

  vf('Nanterre', 'à Nanterre', 'nanterre', D92, [
    'Nanterre compte des pavillons au pied du Mont-Valérien, de grands parcs et des résidences proches de La Défense. Les fourmis noires des jardins entrent dans les maisons au printemps ; dans les grands immeubles chauffés, on rencontre parfois la fourmi pharaon.',
    'Le traitement repose sur un gel appât professionnel, posé sur les pistes, qui atteint toute la colonie. Pour la fourmi pharaon, plusieurs passages de contrôle sont prévus.',
  ], ['Rueil-Malmaison', 'Puteaux', 'Colombes', 'Suresnes'],
  { q: 'Qu’est-ce que la fourmi pharaon ?', a: 'Une toute petite fourmi jaune pâle qui vit dans les bâtiments chauffés, à plusieurs reines. Elle se divise si on l’agresse avec un spray : il faut un appât lent et plusieurs contrôles.' }),

  vf('Asnières-sur-Seine', 'à Asnières-sur-Seine', 'asnieres-sur-seine', D92, [
    'À Asnières-sur-Seine, les pavillons et leurs jardins, nombreux près des bords de Seine, accueillent la fourmi noire, qui entre dans les cuisines par les seuils et les passages de tuyaux.',
    'Nous suivons la piste jusqu’à son point d’entrée et posons un gel appât que les ouvrières rapportent au nid. Le résultat est durable, sans pulvérisation dans la maison.',
  ], ['Clichy', 'Gennevilliers', 'Colombes', 'Levallois-Perret'],
  { q: 'Faut-il traiter le jardin pour se débarrasser des fourmis dans la maison ?', a: 'Pas forcément. L’appât posé sur la piste, à l’intérieur, est rapporté au nid même s’il est dehors. Si le nid est visible et proche de la maison, on peut aussi le traiter directement.' }),

  vf('Colombes', 'à Colombes', 'colombes', D92, [
    'Colombes compte de nombreux pavillons avec jardin, potager et terrasse. Les pucerons des rosiers et des arbres fruitiers nourrissent de grosses colonies de fourmis noires, qui finissent par entrer dans les cuisines.',
    'Le gel appât professionnel, posé sur les pistes, atteint la reine et toute la colonie. Nous vous conseillons aussi sur les accès à fermer pour éviter qu’elles reviennent.',
  ], ['La Garenne-Colombes', 'Asnières-sur-Seine', 'Bois-Colombes', 'Nanterre'],
  { q: 'Les pucerons attirent-ils les fourmis ?', a: 'Oui. Les fourmis élèvent les pucerons pour leur miellat sucré. Un jardin plein de pucerons nourrit de grosses colonies, qui cherchent ensuite d’autres sources de sucre dans la maison.' }),

  vf('Courbevoie', 'à Courbevoie', 'courbevoie', D92, [
    'À Courbevoie, les fourmis touchent les appartements en rez-de-chaussée, les terrasses et les jardinières des résidences, ainsi que les bureaux et cuisines collectives proches de La Défense.',
    'Nous traitons au gel appât posé hors de portée, sans arrêter l’activité. Les professionnels reçoivent une attestation d’intervention.',
  ], ['Puteaux', 'La Garenne-Colombes', 'Neuilly-sur-Seine', 'Asnières-sur-Seine'],
  { q: 'Des fourmis dans nos bureaux : faut-il fermer ?', a: 'Non. Le gel appât est posé en petites gouttes dans les fentes et sur les pistes, sans pulvérisation. L’activité continue normalement.' }),

  vf('Rueil-Malmaison', 'à Rueil-Malmaison', 'rueil-malmaison', D92, [
    'Rueil-Malmaison compte beaucoup de maisons avec jardin, près de la forêt de la Malmaison et des bords de Seine. On y trouve la fourmi noire, et parfois la fourmi charpentière dans les terrasses et les pergolas en bois humide.',
    'Nous identifions l’espèce : la fourmi charpentière demande de rechercher le nid dans le bois. Pour la fourmi noire, l’appât posé sur la piste suffit en général.',
  ], ['Nanterre', 'Suresnes', 'Bougival', 'La Celle-Saint-Cloud'],
  { q: 'Des grosses fourmis noires dans le bois de la terrasse : est-ce grave ?', a: 'Ce sont peut-être des fourmis charpentières. Elles creusent le bois humide sans le manger. Il faut trouver le nid et traiter la zone, et régler l’humidité qui les a attirées.' }),

  vf('Levallois-Perret', 'à Levallois-Perret', 'levallois-perret', D92, [
    'À Levallois-Perret, ville dense faite surtout d’immeubles, les fourmis entrent par les cours, les jardinières et les espaces verts au pied des résidences. Elles montent aussi par les gaines dans les étages.',
    'Le gel appât professionnel, posé sur les pistes, atteint toute la colonie sans pulvérisation. Nous intervenons en général sous 48 heures.',
  ], ['Neuilly-sur-Seine', 'Clichy', 'Paris 17e', 'Courbevoie'],
  { q: 'Pourquoi les fourmis reviennent-elles après un spray ?', a: 'Le spray ne tue que les ouvrières visibles. La reine continue de pondre et la colonie en envoie d’autres. Certaines espèces se divisent même en plusieurs nids. Seul un appât lent atteint la reine.' }),

  vf('Issy-les-Moulineaux', 'à Issy-les-Moulineaux', 'issy-les-moulineaux', D92, [
    'À Issy-les-Moulineaux, les fourmis s’installent dans les jardins et les terrasses des coteaux, et dans les jardinières et toitures végétalisées des résidences récentes, comme au Fort d’Issy.',
    'Nous suivons la piste jusqu’à son entrée et posons un gel appât que les ouvrières rapportent au nid. Pour les toitures et terrasses, nous traitons aussi les bacs touchés.',
  ], ['Boulogne-Billancourt', 'Vanves', 'Paris 15e', 'Meudon'],
  { q: 'Une toiture végétalisée peut-elle abriter des fourmis ?', a: 'Oui, la terre des bacs et des toitures végétalisées est un bon site de nid. Les fourmis descendent ensuite par les joints et les gaines dans les logements.' }),

  vf('Clichy', 'à Clichy', 'clichy', D92, [
    'À Clichy, ville dense, les fourmis touchent surtout les appartements du rez-de-chaussée, les commerces de bouche et les cuisines collectives. Elles viennent des cours, des espaces verts et des fissures des façades.',
    'Le gel appât professionnel est posé hors de portée, sur les pistes. Les professionnels reçoivent une attestation, utile en cas de contrôle sanitaire.',
  ], ['Levallois-Perret', 'Asnières-sur-Seine', 'Saint-Ouen-sur-Seine', 'Paris 17e'],
  { q: 'Des fourmis dans mon restaurant : risque-t-on un contrôle ?', a: 'La présence d’insectes est un point d’attention lors d’un contrôle sanitaire. Faites intervenir vite et gardez l’attestation : elle montre que le problème est traité.' }),

  vf('Antony', 'à Antony', 'antony', D92, [
    'Antony compte beaucoup de pavillons avec jardin, près du parc de Sceaux et de la coulée verte. Au printemps, les fourmis noires entrent dans les cuisines par les seuils, les fenêtres basses et les passages de tuyaux.',
    'Nous identifions l’espèce, suivons la piste et posons un gel appât qui atteint la reine. Le traitement se fait sans pulvérisation, même avec enfants et animaux.',
  ], ['Sceaux', 'Bourg-la-Reine', 'Châtenay-Malabry', 'Massy'],
  { q: 'Peut-on traiter les fourmis avec un chien ou un chat à la maison ?', a: 'Oui. Le gel est posé en très petites quantités dans les fentes et hors de portée. Le technicien vous indique les zones à surveiller.' }),

  vf('Neuilly-sur-Seine', 'à Neuilly-sur-Seine', 'neuilly-sur-seine', D92, [
    'À Neuilly-sur-Seine, les maisons avec jardin, les terrasses et les cours plantées accueillent des fourmis, qui entrent ensuite dans les cuisines et les offices.',
    'Nous traitons au gel appât professionnel, avec discrétion, et recherchons le nid quand il est proche de la maison. Le résultat est durable.',
  ], ['Levallois-Perret', 'Courbevoie', 'Puteaux', 'Paris 16e'],
  { q: 'Les fourmis abîment-elles les terrasses en pierre ?', a: 'Non, mais elles déplacent le sable sous les dalles, qui peuvent bouger. Traiter le nid et regarnir les joints limite le problème.' }),

  vf('Clamart', 'à Clamart', 'clamart', D92, [
    'Clamart, en bordure de la forêt de Meudon, compte beaucoup de pavillons avec jardin. Les fourmis noires y sont fréquentes au printemps, et la fourmi charpentière peut s’installer dans les bois humides.',
    'Nous identifions l’espèce, puis traitons au gel appât posé sur les pistes, ou directement dans le nid s’il est accessible.',
  ], ['Meudon', 'Châtillon', 'Issy-les-Moulineaux', 'Le Plessis-Robinson'],
  { q: 'Les fourmis volantes au printemps sont-elles un signe d’infestation ?', a: 'Ce sont des reines et des mâles qui quittent un nid pour en fonder d’autres. S’ils sortent de l’intérieur de la maison, il y a un nid dans les murs ou le sol : il faut le traiter.' }),

  vf('Gennevilliers', 'à Gennevilliers', 'gennevilliers', D92, [
    'À Gennevilliers, les fourmis touchent les logements du rez-de-chaussée, les entrepôts et les locaux d’activités proches du port. Dans les bâtiments chauffés, on rencontre parfois la fourmi pharaon.',
    'Nous traitons au gel appât sans arrêter l’activité. Pour la fourmi pharaon, plusieurs passages de contrôle sont prévus.',
  ], ['Asnières-sur-Seine', 'Villeneuve-la-Garenne', 'Colombes', 'Clichy'],
  { q: 'Des fourmis dans un entrepôt de denrées : que faire ?', a: 'Faites intervenir rapidement : les fourmis contaminent les denrées. Nous posons le gel hors des zones de stockage, sur les pistes, et remettons une attestation.' }),

  vf('Suresnes', 'à Suresnes', 'suresnes', D92, [
    'À Suresnes, les jardins en pente du mont Valérien, les murets et la cité-jardin abritent des colonies de fourmis noires, qui entrent dans les maisons et les appartements bas.',
    'Le gel appât professionnel, posé sur les pistes, atteint la reine. Nous vous conseillons aussi sur les fissures à boucher.',
  ], ['Puteaux', 'Rueil-Malmaison', 'Saint-Cloud', 'Nanterre'],
  { q: 'Des fourmis sortent d’un muret : faut-il le démolir ?', a: 'Non. Le gel posé sur la piste est rapporté au nid, dans le muret. On peut aussi traiter directement la fissure d’où elles sortent.' }),

  vf('Meudon', 'à Meudon', 'meudon', D92, [
    'Meudon, entre forêt et coteaux de la Seine, compte beaucoup de maisons avec jardin à Bellevue et au Val-Fleury. Fourmis noires et fourmis charpentières y sont fréquentes.',
    'Nous identifions l’espèce et posons un gel appât sur les pistes ; pour la fourmi charpentière, nous recherchons le nid dans le bois.',
  ], ['Clamart', 'Issy-les-Moulineaux', 'Sèvres', 'Vélizy-Villacoublay'],
  { q: 'Une maison près de la forêt a-t-elle plus de fourmis ?', a: 'Souvent oui : les lisières sont riches en colonies, et le bois mort ou humide attire la fourmi charpentière. Un traitement ciblé et quelques gestes de prévention suffisent en général.' }),

  vf('Montrouge', 'à Montrouge', 'montrouge', D92, [
    'À Montrouge, ville très dense, les fourmis entrent dans les appartements du rez-de-chaussée par les cours et les jardinières, et montent parfois dans les étages par les gaines.',
    'Le gel appât professionnel, posé sur les pistes, atteint toute la colonie, sans pulvérisation dans les pièces.',
  ], ['Malakoff', 'Paris 14e', 'Châtillon', 'Bagneux'],
  { q: 'Combien de temps pour que le gel fasse effet ?', a: 'Comptez quelques jours à deux semaines. Voir encore des fourmis au début est normal : elles rapportent l’appât au nid. Ne nettoyez pas la piste pendant ce temps.' }),

  vf('Bagneux', 'à Bagneux', 'bagneux', D92, [
    'À Bagneux, les pavillons avec jardin et les espaces verts des résidences accueillent des fourmis noires, qui entrent dans les cuisines au printemps.',
    'Nous suivons la piste et posons un gel appât que les ouvrières rapportent au nid. Pour les bailleurs, nous traitons plusieurs logements le même jour.',
  ], ['Montrouge', 'Châtillon', 'Fontenay-aux-Roses', 'Arcueil'],
  { q: 'Le bailleur doit-il traiter les fourmis dans les parties communes ?', a: 'Oui pour les parties communes et les espaces verts. Signalez le problème par écrit au gardien ou au bailleur.' }),

  vf('Puteaux', 'à Puteaux', 'puteaux', D92, [
    'À Puteaux, les fourmis touchent les appartements bas, les terrasses et les jardinières, ainsi que les cuisines collectives et bureaux proches de La Défense.',
    'Nous traitons au gel appât posé hors de portée, sans arrêter l’activité, avec attestation pour les professionnels.',
  ], ['Courbevoie', 'Suresnes', 'Nanterre', 'Neuilly-sur-Seine'],
  { q: 'Des fourmis sur ma terrasse en étage : comment est-ce possible ?', a: 'Elles nichent dans les bacs à plantes ou montent le long de la façade. Traiter les bacs et poser l’appât sur la piste règle le problème.' }),

  vf('Châtillon', 'à Châtillon', 'chatillon', D92, [
    'À Châtillon, les pavillons des hauteurs et les jardins des résidences accueillent des fourmis noires, qui entrent dans les maisons par les seuils et les passages de tuyaux.',
    'Le gel appât professionnel atteint toute la colonie. Nous intervenons en général sous 48 heures.',
  ], ['Montrouge', 'Bagneux', 'Clamart', 'Malakoff'],
  { q: 'Le vinaigre ou le citron éloignent-ils les fourmis ?', a: 'Ils masquent un temps la piste, mais ne touchent pas le nid. Les fourmis reviennent par un autre chemin. Seul un appât atteint la reine.' }),

  vf('Châtenay-Malabry', 'à Châtenay-Malabry', 'chatenay-malabry', D92, [
    'Châtenay-Malabry, entre la Vallée-aux-Loups, le parc de Sceaux et la forêt de Verrières, compte beaucoup de jardins et d’espaces verts où les fourmis prospèrent.',
    'Nous identifions l’espèce et posons un gel appât sur les pistes, ou traitons directement le nid quand il est proche de la maison.',
  ], ['Antony', 'Sceaux', 'Le Plessis-Robinson', 'Clamart'],
  { q: 'Pourquoi les fourmis entrent-elles surtout au printemps ?', a: 'Les colonies se réveillent et ont besoin de beaucoup de nourriture pour élever les larves. Les ouvrières explorent plus loin et trouvent la cuisine.' }),

  vf('Malakoff', 'à Malakoff', 'malakoff', D92, [
    'À Malakoff, les petites maisons, les cours et les anciens ateliers ont des sols et des murs où les fourmis circulent sans être vues. Elles sortent dans les cuisines par les fissures.',
    'Nous suivons la piste et posons un gel appât que les ouvrières rapportent au nid. Pas de pulvérisation dans les pièces.',
  ], ['Vanves', 'Montrouge', 'Châtillon', 'Paris 14e'],
  { q: 'Des fourmis sortent d’une fissure du carrelage : que faire ?', a: 'Ne bouchez pas tout de suite : posez d’abord l’appât au bord de la fissure, pour que les ouvrières le rapportent au nid. Une fois la colonie éteinte, rebouchez.' }),

  vf('Vanves', 'à Vanves', 'vanves', D92, [
    'À Vanves, les fourmis touchent les maisons avec jardin et les appartements du rez-de-chaussée, qu’elles atteignent par les cours, les jardinières et les seuils.',
    'Le gel appât professionnel, posé sur les pistes, atteint la reine et toute la colonie. Le traitement est discret et sans odeur.',
  ], ['Malakoff', 'Issy-les-Moulineaux', 'Paris 15e', 'Clamart'],
  { q: 'Un seul passage suffit-il ?', a: 'Souvent oui pour une colonie à une reine. Pour les espèces à plusieurs reines, un ou plusieurs passages de contrôle sont prévus.' }),

  vf('Sceaux', 'à Sceaux', 'sceaux', D92, [
    'Sceaux, autour de son grand parc, compte beaucoup de maisons avec jardin. Les fourmis noires y sont nombreuses au printemps et entrent dans les cuisines.',
    'Nous suivons la piste et posons un gel appât qui atteint la reine. Pour un établissement scolaire, l’intervention se fait hors présence des élèves.',
  ], ['Bourg-la-Reine', 'Antony', 'Fontenay-aux-Roses', 'Châtenay-Malabry'],
  { q: 'Les fourmis piquent-elles ?', a: 'Les fourmis noires des jardins mordent rarement et sans danger notable. Le problème est surtout la nuisance et la contamination des aliments.' }),

  vf('Bourg-la-Reine', 'à Bourg-la-Reine', 'bourg-la-reine', D92, [
    'À Bourg-la-Reine, les maisons avec jardin et les résidences entourées d’espaces verts accueillent des fourmis, qui entrent par les seuils et les passages de tuyaux.',
    'Le gel appât professionnel atteint toute la colonie, sans pulvérisation dans la maison.',
  ], ['Sceaux', 'Antony', 'L’Haÿ-les-Roses', 'Bagneux'],
  { q: 'Que faire en attendant le technicien ?', a: 'Rangez le sucre et les aliments dans des boîtes fermées, mais ne pulvérisez rien et n’effacez pas la piste : le technicien en a besoin pour poser l’appât au bon endroit.' }),

  vf('Fontenay-aux-Roses', 'à Fontenay-aux-Roses', 'fontenay-aux-roses', D92, [
    'Fontenay-aux-Roses, ville verte sur les coteaux, compte beaucoup de jardins, de murets et de résidences entourées de pelouses. Les fourmis y sont fréquentes du printemps à la fin de l’été.',
    'Nous identifions l’espèce et posons un gel appât sur les pistes, ou traitons directement le nid quand il est accessible.',
  ], ['Sceaux', 'Bagneux', 'Châtillon', 'Clamart'],
  { q: 'Faut-il traiter chaque année ?', a: 'Pas forcément. Une colonie éliminée ne revient pas. Mais un jardin peut être recolonisé par d’autres nids voisins : quelques gestes de prévention limitent le risque.' }),

  vf('La Garenne-Colombes', 'à La Garenne-Colombes', 'la-garenne-colombes', D92, [
    'La Garenne-Colombes, ville résidentielle, compte beaucoup de maisons avec jardin et de petits immeubles avec cour. Les fourmis noires y entrent dans les cuisines au printemps.',
    'Le gel appât professionnel, posé sur les pistes, atteint la reine. Nous intervenons en général sous 48 heures.',
  ], ['Colombes', 'Courbevoie', 'Bois-Colombes', 'Nanterre'],
  { q: 'Les fourmis peuvent-elles abîmer l’électricité ?', a: 'Certaines espèces s’installent dans les boîtiers électriques chauds. Si vous voyez des fourmis sortir d’une prise ou d’un tableau, signalez-le au technicien.' }),

  // ── Seine-Saint-Denis ──
  vf('Montreuil', 'à Montreuil', 'montreuil', D93, [
    'À Montreuil, les jardins des Murs-à-Pêches, les pavillons du haut Montreuil et les cours des anciens ateliers accueillent beaucoup de fourmis, qui entrent dans les maisons au printemps.',
    'Nous identifions l’espèce, suivons la piste et posons un gel appât qui atteint la reine, sans pulvérisation dans les pièces.',
  ], ['Bagnolet', 'Vincennes', 'Fontenay-sous-Bois', 'Paris 20e'],
  { q: 'Les murs en pierre attirent-ils les fourmis ?', a: 'Oui. Les murs anciens, chauffés par le soleil, ont des joints creusés où les colonies s’installent. Le gel posé sur la piste est rapporté jusqu’au nid.' }),

  vf('Pantin', 'à Pantin', 'pantin', D93, [
    'À Pantin, les fourmis touchent les logements du rez-de-chaussée, les jardins partagés et les résidences le long du canal de l’Ourcq, ainsi que les commerces de bouche.',
    'Le gel appât professionnel est posé sur les pistes, hors de portée. Les professionnels reçoivent une attestation.',
  ], ['Les Lilas', 'Paris 19e', 'Bobigny', 'Romainville'],
  { q: 'Un jardin partagé peut-il amener des fourmis chez moi ?', a: 'Oui, s’il est au pied de l’immeuble. Les fourmis qui y vivent cherchent du sucre dans les logements proches. On pose l’appât sur la piste, à l’intérieur.' }),

  vf('Bagnolet', 'à Bagnolet', 'bagnolet', D93, [
    'À Bagnolet, les pavillons avec jardin et les espaces verts autour des résidences, comme le parc des Guilands, abritent des colonies de fourmis qui gagnent les cuisines.',
    'Nous suivons la piste et posons un gel appât que les ouvrières rapportent au nid. Pas de pulvérisation dans le logement.',
  ], ['Montreuil', 'Les Lilas', 'Paris 20e', 'Romainville'],
  { q: 'Les fourmis peuvent-elles monter dans une tour ?', a: 'Oui, par les gaines, les fissures et les ascenseurs. On les rencontre surtout dans les étages bas, mais pas seulement.' }),

  vf('Les Lilas', 'aux Lilas', 'les-lilas', D93, [
    'Aux Lilas, les maisons de ville avec petit jardin et les cours d’immeuble accueillent des fourmis, qui entrent dans les cuisines par les seuils et les fissures.',
    'Le gel appât professionnel atteint toute la colonie. Nous intervenons en général sous 48 heures.',
  ], ['Pantin', 'Bagnolet', 'Paris 19e', 'Romainville'],
  { q: 'Les fourmis sont-elles dangereuses pour les enfants ?', a: 'Les fourmis des jardins ne sont pas dangereuses. Le traitement au gel est posé hors de portée, dans les fentes, sans pulvérisation.' }),

  vf('Bobigny', 'à Bobigny', 'bobigny', D93, [
    'À Bobigny, les fourmis touchent les logements du rez-de-chaussée des grands ensembles, les espaces verts des résidences et les locaux collectifs. Dans les bâtiments chauffés, la fourmi pharaon est parfois présente.',
    'Nous traitons au gel appât, avec plusieurs passages de contrôle pour la fourmi pharaon. Pour les bailleurs, nous traitons plusieurs logements le même jour.',
  ], ['Pantin', 'Drancy', 'Noisy-le-Sec', 'Bondy'],
  { q: 'De minuscules fourmis jaunes dans la salle de bain : qu’est-ce que c’est ?', a: 'Probablement la fourmi pharaon, qui vit dans les bâtiments chauffés. Ne pulvérisez rien : elle se divise. Un appât lent et plusieurs contrôles sont nécessaires.' }),

  vf('Aulnay-sous-Bois', 'à Aulnay-sous-Bois', 'aulnay-sous-bois', D93, [
    'Au sud d’Aulnay-sous-Bois, les quartiers pavillonnaires et leurs jardins accueillent beaucoup de fourmis noires ; au nord, elles touchent surtout les logements bas des résidences.',
    'Nous identifions l’espèce et posons un gel appât sur les pistes. Le résultat est durable, sans pulvérisation dans la maison.',
  ], ['Sevran', 'Livry-Gargan', 'Villepinte', 'Blanc-Mesnil'],
  { q: 'Combien coûte un traitement des fourmis ?', a: 'À partir de 120 € TTC en appartement. En maison, le traitement de l’extérieur et la recherche du nid sont chiffrés sur devis gratuit.' }),

  vf('Livry-Gargan', 'à Livry-Gargan', 'livry-gargan', D93, [
    'Livry-Gargan, ville surtout pavillonnaire proche de la forêt de Bondy, compte beaucoup de jardins et de potagers. Les fourmis noires y sont nombreuses et entrent dans les cuisines au printemps.',
    'Nous suivons la piste et posons un gel appât qui atteint la reine. Si le nid est proche de la maison, nous le traitons directement.',
  ], ['Aulnay-sous-Bois', 'Les Pavillons-sous-Bois', 'Clichy-sous-Bois', 'Vaujours'],
  { q: 'Des fourmis dans le potager : faut-il traiter ?', a: 'Pas forcément : dans le jardin, elles ne sont pas nuisibles. On traite quand elles entrent dans la maison ou quand une colonie est installée contre les murs.' }),

  vf('Épinay-sur-Seine', 'à Épinay-sur-Seine', 'epinay-sur-seine', D93, [
    'À Épinay-sur-Seine, les pavillons des bords de Seine et les espaces verts des résidences abritent des fourmis, qui entrent dans les logements bas par les seuils et les fissures.',
    'Le gel appât professionnel, posé sur les pistes, atteint toute la colonie. Pour les bailleurs, nous traitons plusieurs logements le même jour.',
  ], ['Saint-Denis', 'Villetaneuse', 'Pierrefitte-sur-Seine', 'Enghien-les-Bains'],
  { q: 'Les fourmis sont-elles plus nombreuses près de la Seine ?', a: 'Les sols frais et meubles des bords de Seine conviennent bien à certaines espèces. Mais c’est surtout la présence de jardins et de pucerons qui fait la différence.' }),
]

// Contenu local détaillé (bloc LocalVille), rédigé ville par ville.
export const LOCAL_FOURMIS_9293: Record<string, string[]> = {
  'boulogne-billancourt': [
    'Le long du **parc de Billancourt** et des berges de Seine, les résidences récentes ont des jardins en pied d’immeuble et des terrasses plantées : les fourmis y nichent et gagnent les appartements bas.',
    'Dans le **quartier des Princes** et autour du bois de Boulogne, les maisons ont des jardins où la fourmi noire est très présente au printemps.',
  ],
  'nanterre': [
    'Dans les résidences étudiantes proches de l’**université**, les cuisines partagées et les poubelles d’étage attirent les fourmis : un rangement strict des denrées complète le traitement.',
    'Le **parc André-Malraux** et les grands espaces verts de Nanterre sont riches en colonies de fourmis. Les résidences qui les bordent voient arriver les ouvrières par les rez-de-chaussée.',
    'Dans les pavillons du **Mont-Valérien** et du Petit-Nanterre, les jardins et les murets abritent la fourmi noire.',
  ],
  'asnieres-sur-seine': [
    'Les **bords de Seine** et les jardins des pavillons de la Comète ou des Courtilles abritent beaucoup de colonies de fourmis noires.',
    'Dans les immeubles anciens du centre, les fourmis montent depuis les cours plantées par les fissures et les gaines.',
  ],
  'colombes': [
    'Dans le quartier **des Vallées** et autour de la gare du Stade, les immeubles des années 1930 ont des cours pavées dont les joints abritent des colonies.',
    'Autour du **parc Pierre-Lagravère** et dans les quartiers pavillonnaires, les jardins avec potager et rosiers nourrissent de grosses colonies grâce aux pucerons.',
    'Les maisons avec **sous-sol** sont souvent touchées par des fourmis qui remontent le long des canalisations.',
  ],
  'courbevoie': [
    'Autour du **parc de Bécon** et des jardins des résidences, les fourmis nichent dans les pelouses et les massifs, puis entrent dans les logements du rez-de-chaussée.',
    'Les **dalles et jardinières** du quartier de La Défense offrent aussi des sites de nid, au plus près des bureaux et commerces.',
  ],
  'rueil-malmaison': [
    'Près de la **forêt de la Malmaison** et du parc du château, les jardins sont riches en fourmis, dont la fourmi charpentière dans le bois mort ou humide.',
    'Dans les maisons du **Mont-Valérien** et de Buzenval, les terrasses en bois et les pergolas sont à surveiller.',
  ],
  'levallois-perret': [
    'Le **parc de la Planchette** et les cours plantées des immeubles sont les principaux sites de nid à Levallois-Perret.',
    'Sur l’**île de la Jatte**, les jardins des maisons et des résidences accueillent des colonies de fourmis noires qui entrent par les seuils.',
  ],
  'issy-les-moulineaux': [
    'Sur l’**île Saint-Germain**, le parc et les jardins familiaux sont riches en colonies, qui gagnent les résidences voisines au printemps.',
    'Dans les **bureaux et sièges d’entreprises** du bord de Seine, les fourmis gagnent les tisaneries et les cuisines d’entreprise. Nous traitons le soir, au gel, sans gêner les équipes, et remettons une attestation au gestionnaire.',
    'Les **jardins en terrasses des coteaux** et le parc Henri-Barbusse abritent beaucoup de fourmis noires.',
    'Dans l’**écoquartier du Fort d’Issy**, les toitures végétalisées et les jardinières sont des sites de nid à surveiller.',
  ],
  'clichy': [
    'Le **parc Roger-Salengro** et les cours des immeubles sont les principaux sites de nid à Clichy.',
    'Les **commerces de bouche** du centre sont parfois touchés : un traitement rapide, avec attestation, évite les problèmes lors d’un contrôle.',
  ],
  'antony': [
    'La **coulée verte** et le parc de Sceaux tout proche abritent beaucoup de colonies, qui gagnent les jardins des pavillons voisins.',
    'Dans les quartiers pavillonnaires comme **Fontaine-Michalon** ou le centre, les terrasses dallées accumulent la chaleur et attirent les fourmis.',
  ],
  'neuilly-sur-seine': [
    'Le **bois de Boulogne** voisin et les jardins des maisons abritent des colonies de fourmis qui gagnent les terrasses et les cuisines.',
    'Sur l’**île de la Jatte**, les jardins au bord de l’eau sont aussi concernés.',
  ],
  'clamart': [
    'La **forêt de Meudon et de Clamart** borde de nombreux jardins : les fourmis y sont nombreuses, notamment la fourmi charpentière dans le bois mort.',
    'Dans les pavillons du **Petit-Clamart**, les terrasses et murets abritent la fourmi noire.',
  ],
  'gennevilliers': [
    'Le **parc des Chanteraines** et les espaces verts des résidences abritent beaucoup de colonies de fourmis.',
    'Les **entrepôts et locaux d’activités** proches du port sont surveillés de près quand ils stockent des denrées.',
  ],
  'suresnes': [
    'Les **jardins en pente** du mont Valérien, avec leurs murets de pierre, sont un habitat idéal pour la fourmi noire.',
    'La **cité-jardin** compte de nombreux petits jardins où les colonies s’installent contre les maisons.',
  ],
  'meudon': [
    'La **forêt domaniale de Meudon** et les jardins de Bellevue abritent beaucoup de colonies, dont la fourmi charpentière dans les bois humides.',
    'À **Meudon-la-Forêt**, les espaces verts des résidences sont la principale source de fourmis dans les logements bas.',
  ],
  'montrouge': [
    'Les **toitures-terrasses** et balcons fleuris des immeubles de Montrouge abritent parfois des nids en hauteur : les fourmis descendent alors par les façades jusqu’aux cuisines.',
    'Les **squares** et les cours plantées sont les principaux sites de nid dans cette ville très dense.',
    'Les **appartements du rez-de-chaussée** sur cour sont les plus souvent touchés au printemps.',
  ],
  'bagneux': [
    'Dans les **pavillons en meulière** du vieux Bagneux, les fourmis noires installent leurs nids sous les marches d’entrée et le long des soubassements, puis entrent par les seuils de porte au premier soleil de mars ou d’avril.',
    'Les **jardins partagés et squares** des quartiers rénovés sont des sites de nid à proximité immédiate des logements neufs.',
    'Le **parc Robespierre** et les espaces verts des résidences abritent des colonies qui gagnent les logements bas.',
    'Dans les **pavillons** du centre, les jardins et potagers nourrissent les fourmis grâce aux pucerons.',
  ],
  'puteaux': [
    'Le **parc de l’île de Puteaux** et les jardins des résidences abritent beaucoup de fourmis noires.',
    'Les **terrasses et jardinières** des tours sont aussi des sites de nid, parfois en étage.',
  ],
  'chatillon': [
    'Les **jardins des pavillons** des hauteurs abritent des colonies de fourmis noires.',
    'Les résidences récentes le long du **tramway** ont des espaces verts en pied d’immeuble qui attirent les fourmis vers les logements bas.',
  ],
  'chatenay-malabry': [
    'La **Vallée-aux-Loups** et la forêt de Verrières bordent de nombreux jardins où les fourmis sont très présentes.',
    'La **Butte-Rouge** compte beaucoup d’espaces verts entre les bâtiments, d’où les fourmis gagnent les logements du rez-de-chaussée.',
  ],
  'malakoff': [
    'Les **petits jardins et cours** des maisons et des anciens ateliers abritent des colonies de fourmis noires.',
    'Les **squares** et les espaces verts des résidences sont aussi des sites de nid, d’où les fourmis gagnent les logements voisins.',
  ],
  'vanves': [
    'Le **parc Frédéric-Pic** et les jardins des maisons sont les principaux sites de nid à Vanves.',
    'Les appartements du **rez-de-chaussée sur cour** sont souvent les premiers touchés au printemps.',
  ],
  'sceaux': [
    'Le **parc de Sceaux**, très grand, abrite d’innombrables colonies : les jardins voisins sont souvent touchés.',
    'Les **maisons anciennes** du centre ont des murets et des terrasses où les fourmis s’installent.',
  ],
  'bourg-la-reine': [
    'Les **jardins des maisons** et la proximité du parc de Sceaux font de Bourg-la-Reine une ville où les fourmis noires sont fréquentes.',
    'Les **terrasses dallées** accumulent la chaleur et attirent les colonies contre les maisons.',
  ],
  'fontenay-aux-roses': [
    'La **coulée verte** et les nombreux jardins des coteaux abritent beaucoup de colonies de fourmis noires.',
    'Les **résidences entourées de pelouses** voient les fourmis entrer dans les logements bas.',
  ],
  'la-garenne-colombes': [
    'Près du **marché de La Garenne** et des commerces du centre, les boulangeries et épiceries voient parfois des pistes de fourmis vers les réserves : un traitement discret au gel, avec attestation, règle le problème.',
    'Les **jardins des maisons** et les cours d’immeuble sont les principaux sites de nid à La Garenne-Colombes.',
    'Les **potagers et rosiers** attirent les pucerons, qui nourrissent de grosses colonies de fourmis.',
  ],
  'montreuil': [
    'Les **Murs-à-Pêches**, anciens murs à espaliers, offrent aux fourmis des joints de pierre chauffés au soleil : un habitat idéal.',
    'Le **parc Montreau** et les jardins du haut Montreuil abritent aussi beaucoup de colonies.',
  ],
  'pantin': [
    'Le **parc de la Villette** voisin et les berges du canal de l’Ourcq abritent beaucoup de colonies de fourmis.',
    'Les **jardins partagés** et les espaces verts des résidences sont des sites de nid au plus près des logements.',
  ],
  'bagnolet': [
    'Dans le **centre ancien** de Bagnolet, autour de l’église Saint-Leu, les petites maisons de faubourg ont des cours fermées où les fourmis creusent sous les pavés et ressortent dans les cuisines en rez-de-chaussée.',
    'Près de l’**échangeur** et des tours des Mercuriales, les espaces verts en talus abritent des colonies qui gagnent les bureaux et les logements bas.',
    'Le **parc départemental des Guilands** abrite des colonies qui gagnent les résidences voisines.',
    'Les **pavillons** du centre et leurs jardins sont touchés surtout au printemps.',
  ],
  'les-lilas': [
    'Le **parc Lucie-Aubrac** et les petits jardins des maisons sont les principaux sites de nid aux Lilas.',
    'Les **cours d’immeuble** plantées attirent les fourmis vers les logements du rez-de-chaussée.',
  ],
  'bobigny': [
    'Le **parc de la Bergère** et les espaces verts des grands ensembles abritent beaucoup de colonies.',
    'Les **bâtiments chauffés**, comme les locaux collectifs, peuvent abriter la fourmi pharaon.',
  ],
  'aulnay-sous-bois': [
    'Les **commerces du centre commercial** et des zones d’activités demandent un traitement hors des heures d’ouverture, ce que nous faisons sans majoration.',
    'Autour du **vieux pays** et de la gare, les maisons anciennes ont des murs en meulière aux joints creusés : les fourmis y circulent à l’abri et ressortent dans les cuisines par les plinthes.',
    'Le **parc du Sausset**, l’un des grands parcs du département, et le parc Ballanger abritent beaucoup de colonies de fourmis.',
    'Les **pavillons du sud** de la ville ont des jardins et potagers où les fourmis sont très présentes.',
  ],
  'livry-gargan': [
    'La **forêt de Bondy** et le parc de la Poudrerie tout proche abritent beaucoup de colonies.',
    'Les **jardins pavillonnaires** et les potagers attirent les fourmis vers les maisons.',
  ],
  'epinay-sur-seine': [
    'Les **berges de Seine** et les parcs de la ville abritent des colonies de fourmis.',
    'Les **espaces verts des résidences** d’Orgemont et de la Source voient les fourmis gagner les logements bas.',
  ],
}
