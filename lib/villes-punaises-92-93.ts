// Pages « Punaises de lit à [ville] » des Hauts-de-Seine (92) et de la Seine-Saint-Denis (93), 20/11/2026.
// Contenu rédigé ville par ville : faits généraux vérifiables (quartiers, équipements, type de bâti), aucun chiffre inventé.
// FAQ_COMMUNE ajoutée dans lib/villes-punaises.ts.
import type { VillePunaises } from './villes-punaises'

type G = VillePunaises['guides']
const D92 = { code: '92', departement: 'Hauts-de-Seine', zoneHref: '/zones/hauts-de-seine' }
const D93 = { code: '93', departement: 'Seine-Saint-Denis', zoneHref: '/zones/seine-saint-denis' }
const AIRBNB = 'punaises-de-lit-airbnb-location-courte-duree'
const CRYO = 'cryogenie-punaises-de-lit'
const SANS = 'punaises-de-lit-sans-insecticide'
const PIQ = 'piqures-de-punaises-de-lit'
const VAP = 'vapeur-seche-punaises-de-lit'
const INSECT = 'insecticide-punaises-de-lit'
const SNIPER = 'insecticide-interdit-sniper-1000-danger'
const DIAT = 'terre-de-diatomee-punaises-de-lit'

const vp = (nom: string, a: string, slug: string, dep: typeof D92, contexte: string[], proches: string[], guides: G, faq: { q: string; a: string }): VillePunaises => ({
  slug, nom, a, ...dep,
  title: `Punaises de lit ${a} (${dep.code}) : cryogénie, vapeur`,
  description: `Punaises de lit ${a} : cryogénie, vapeur sèche ou insecticide professionnel. 2 passages inclus, dès 290 € TTC, garantie 1 an, devis gratuit.`,
  contexte, proches, guides, faq: [faq],
})

export const VILLES_PUNAISES_9293: VillePunaises[] = [
  // ── Hauts-de-Seine ──
  vp('Boulogne-Billancourt', 'à Boulogne-Billancourt', 'boulogne-billancourt', D92, [
    'Plus grande ville des Hauts-de-Seine, Boulogne-Billancourt mêle immeubles des années 1930, résidences récentes du Trapèze et grands appartements près du bois de Boulogne. Les punaises de lit y arrivent surtout avec les voyages, les déménagements et les meubles achetés d’occasion.',
    'Nous traitons à la cryogénie, à la vapeur sèche ou à l’insecticide professionnel, en 2 passages, avec une inspection minutieuse du lit, des plinthes et des meubles avant toute intervention.',
  ], ['Issy-les-Moulineaux', 'Paris 16e', 'Sèvres', 'Saint-Cloud'], [CRYO, PIQ, SANS],
  { q: 'J’ai rapporté des punaises de lit d’un voyage : que faire en rentrant à Boulogne ?', a: 'Défaites la valise dans la baignoire ou sur un sol clair, lavez tout le linge à 60 °C et passez la valise à l’aspirateur. Si des piqûres apparaissent dans les jours qui suivent, faites inspecter le lit sans attendre.' }),

  vp('Nanterre', 'à Nanterre', 'nanterre', D92, [
    'Préfecture des Hauts-de-Seine, Nanterre compte une grande université avec ses résidences étudiantes, des grands ensembles, des pavillons au Mont-Valérien et des tours proches de La Défense. Les punaises de lit circulent d’un logement à l’autre avec les déménagements fréquents.',
    'Le traitement se fait en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel selon l’infestation. Pour les résidences et les bailleurs, nous traitons plusieurs logements le même jour.',
  ], ['Rueil-Malmaison', 'Puteaux', 'Colombes', 'Suresnes'], [PIQ, INSECT, SANS],
  { q: 'Je suis étudiant en résidence à Nanterre : qui doit payer le traitement ?', a: 'Signalez les punaises par écrit au gestionnaire de la résidence, avec des photos. Il doit faire traiter le logement, et souvent les chambres voisines. Ne jetez pas votre matelas sans son accord.' }),

  vp('Asnières-sur-Seine', 'à Asnières-sur-Seine', 'asnieres-sur-seine', D92, [
    'À Asnières-sur-Seine, immeubles anciens du centre, résidences des bords de Seine et pavillons se côtoient. Les punaises de lit y arrivent avec les valises, les meubles d’occasion et les visites de proches, puis s’installent dans les chambres.',
    'Nous inspectons le lit couture par couture, les lattes, les plinthes et les prises, puis traitons à la cryogénie, à la vapeur sèche ou à l’insecticide, en 2 passages.',
  ], ['Clichy', 'Gennevilliers', 'Colombes', 'Levallois-Perret'], [PIQ, CRYO, SNIPER],
  { q: 'Un canapé d’occasion peut-il apporter des punaises de lit ?', a: 'Oui, c’est même une cause fréquente. Inspectez les coutures, le dessous et les fixations avant de le faire entrer chez vous. En cas de doute, une cryogénie du canapé évite d’infester le logement.' }),

  vp('Colombes', 'à Colombes', 'colombes', D92, [
    'Colombes mêle quartiers pavillonnaires, petits immeubles et grands ensembles comme les Fossés-Jean. Les punaises de lit y circulent avec les meubles, les vêtements et les visites, et passent parfois d’un appartement à l’autre par les murs.',
    'Le traitement se fait en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Dans une maison, nous traitons toutes les chambres touchées et le salon si le canapé est concerné.',
  ], ['La Garenne-Colombes', 'Asnières-sur-Seine', 'Bois-Colombes', 'Nanterre'], [PIQ, SANS, DIAT],
  { q: 'Les punaises de lit peuvent-elles passer d’une chambre à l’autre dans une maison ?', a: 'Oui, en se déplaçant le long des plinthes et avec les textiles. C’est pourquoi le technicien inspecte toutes les chambres, même celles où personne n’est piqué, avant de chiffrer le traitement.' }),

  vp('Courbevoie', 'à Courbevoie', 'courbevoie', D92, [
    'Courbevoie accueille une partie de La Défense, avec ses tours de bureaux, ses hôtels d’affaires et ses résidences. Les voyageurs professionnels et les locations meublées font circuler les punaises de lit, qui s’installent ensuite dans les logements.',
    'Nous traitons appartements, chambres d’hôtel et meublés à la cryogénie ou à la vapeur sèche, sans produit, ou à l’insecticide professionnel, en 2 passages et avec attestation pour les professionnels.',
  ], ['Puteaux', 'La Garenne-Colombes', 'Neuilly-sur-Seine', 'Asnières-sur-Seine'], [AIRBNB, CRYO, PIQ],
  { q: 'Je loue un meublé près de La Défense : comment traiter entre deux séjours ?', a: 'La cryogénie et la vapeur sèche permettent de traiter sans produit et de relouer rapidement. Nous remettons une attestation d’intervention, utile en cas de litige avec un client.' }),

  vp('Rueil-Malmaison', 'à Rueil-Malmaison', 'rueil-malmaison', D92, [
    'Rueil-Malmaison, ville étendue entre la Seine et la forêt de la Malmaison, compte beaucoup de maisons, des résidences récentes et des immeubles en centre-ville. Les punaises de lit y arrivent avec les voyages, les enfants qui reviennent de séjours et les meubles d’occasion.',
    'Dans une maison, le traitement peut concerner plusieurs chambres : nous inspectons tout le logement, puis traitons en 2 passages à la cryogénie, à la vapeur sèche ou à l’insecticide.',
  ], ['Nanterre', 'Suresnes', 'Bougival', 'La Celle-Saint-Cloud'], [PIQ, SANS, VAP],
  { q: 'Mon enfant revient de colonie avec des piqûres : faut-il s’inquiéter ?', a: 'Pas forcément, mais vérifiez. Lavez tout le linge à 60 °C, inspectez le sac et le matelas de l’enfant. Si vous trouvez des taches noires ou des petites punaises, faites intervenir rapidement : plus c’est tôt, plus c’est simple.' }),

  vp('Levallois-Perret', 'à Levallois-Perret', 'levallois-perret', D92, [
    'Levallois-Perret est l’une des communes les plus denses de France, avec des immeubles serrés, des bureaux et beaucoup de petits logements. Les punaises de lit peuvent passer d’un appartement à l’autre par les gaines et les plinthes.',
    'Nous traitons en 2 passages à la cryogénie, à la vapeur sèche ou à l’insecticide professionnel. En copropriété, nous conseillons d’inspecter aussi les logements voisins quand l’infestation est ancienne.',
  ], ['Neuilly-sur-Seine', 'Clichy', 'Paris 17e', 'Courbevoie'], [PIQ, CRYO, INSECT],
  { q: 'Les punaises de lit peuvent-elles venir de chez le voisin ?', a: 'Oui, surtout dans les immeubles anciens et denses : elles passent le long des tuyaux, des gaines et des plinthes. Si votre voisin est touché, un traitement coordonné évite de vous réinfester.' }),

  vp('Issy-les-Moulineaux', 'à Issy-les-Moulineaux', 'issy-les-moulineaux', D92, [
    'Issy-les-Moulineaux réunit sièges d’entreprises, résidences récentes des bords de Seine, écoquartier du Fort d’Issy et vieux centre. Les voyages d’affaires et les déménagements fréquents font circuler les punaises de lit.',
    'Le traitement se fait en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Pour les logements récents et bien isolés, la cryogénie est souvent la solution la plus simple.',
  ], ['Boulogne-Billancourt', 'Vanves', 'Paris 15e', 'Meudon'], [CRYO, PIQ, SANS],
  { q: 'Un logement neuf peut-il avoir des punaises de lit ?', a: 'Oui. Elles ne viennent pas du bâtiment mais de ce qu’on y apporte : valises, meubles, cartons de déménagement. L’âge du logement ne protège pas.' }),

  vp('Clichy', 'à Clichy', 'clichy', D92, [
    'Commune dense aux portes de Paris, Clichy compte des immeubles anciens, des résidences récentes et l’hôpital Beaujon. Les punaises de lit y arrivent avec les voyages, les meubles et les visites, et circulent entre logements dans les immeubles serrés.',
    'Nous traitons à la cryogénie, à la vapeur sèche ou à l’insecticide professionnel, en 2 passages, après une inspection du lit, du canapé, des plinthes et des prises.',
  ], ['Levallois-Perret', 'Asnières-sur-Seine', 'Saint-Ouen-sur-Seine', 'Paris 17e'], [PIQ, SNIPER, CRYO],
  { q: 'Peut-on utiliser des bombes insecticides du commerce en attendant ?', a: 'Non. Elles dispersent les punaises vers d’autres pièces et les rendent plus difficiles à traiter. Certains produits vendus sur internet sont même interdits et dangereux. Attendez notre passage et ne déplacez pas le linge de lit.' }),

  vp('Antony', 'à Antony', 'antony', D92, [
    'Au sud des Hauts-de-Seine, Antony compte des quartiers pavillonnaires, des résidences et une grande résidence universitaire. Les étudiants qui arrivent de partout et les meubles qui changent de main font circuler les punaises de lit.',
    'Nous traitons chambres, studios et maisons en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Pour un studio, le prix de départ s’applique.',
  ], ['Sceaux', 'Bourg-la-Reine', 'Châtenay-Malabry', 'Massy'], [PIQ, SANS, DIAT],
  { q: 'Je récupère un matelas d’un autre étudiant : quels risques ?', a: 'Un matelas d’occasion peut porter des punaises ou des œufs dans les coutures. Inspectez-le à la lampe avant de l’installer, et refusez-le s’il présente des petites taches noires.' }),

  vp('Neuilly-sur-Seine', 'à Neuilly-sur-Seine', 'neuilly-sur-seine', D92, [
    'À Neuilly-sur-Seine, les grands appartements, les maisons et les hôtels particuliers accueillent souvent des voyageurs et du personnel de maison. Les punaises de lit arrivent avec les bagages et se cachent dans les têtes de lit, les boiseries et les tapis.',
    'Nous intervenons avec discrétion, à la cryogénie ou à la vapeur sèche, sans produit, ou à l’insecticide professionnel, en 2 passages. Le devis tient compte de la surface et du nombre de chambres.',
  ], ['Levallois-Perret', 'Courbevoie', 'Puteaux', 'Paris 16e'], [CRYO, VAP, AIRBNB],
  { q: 'Peut-on traiter sans abîmer des meubles anciens ou des tissus fragiles ?', a: 'Oui. La cryogénie est sèche et ne laisse aucun résidu : elle convient aux bois, tissus et objets délicats. Le technicien adapte la méthode à chaque meuble.' }),

  vp('Clamart', 'à Clamart', 'clamart', D92, [
    'Clamart, en bordure de forêt, compte des pavillons, des résidences et des quartiers en renouvellement autour de la gare et du Panorama. Les punaises de lit y arrivent avec les voyages, les déménagements et les meubles d’occasion.',
    'Le traitement se fait en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Dans une maison, nous inspectons toutes les chambres avant de chiffrer.',
  ], ['Meudon', 'Châtillon', 'Issy-les-Moulineaux', 'Le Plessis-Robinson'], [PIQ, CRYO, SANS],
  { q: 'Combien de temps dure un traitement dans une maison ?', a: 'Le premier passage dure en général de deux à quatre heures selon le nombre de chambres et la méthode. Le second, quelques semaines plus tard, est plus court.' }),

  vp('Gennevilliers', 'à Gennevilliers', 'gennevilliers', D92, [
    'Gennevilliers, avec son port fluvial et ses zones d’activités, compte de grands ensembles, des résidences et des foyers. Les punaises de lit circulent d’un logement à l’autre avec les meubles, les vêtements et les déménagements.',
    'Nous traitons en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Pour les bailleurs et les foyers, nous traitons plusieurs logements le même jour, avec un rapport écrit.',
  ], ['Asnières-sur-Seine', 'Villeneuve-la-Garenne', 'Colombes', 'Clichy'], [INSECT, PIQ, SNIPER],
  { q: 'Mon bailleur doit-il traiter les punaises de lit ?', a: 'Le logement doit être exempt de nuisibles. Signalez les punaises par écrit, avec photos. Quand plusieurs logements sont touchés, le bailleur organise en général un traitement coordonné.' }),

  vp('Suresnes', 'à Suresnes', 'suresnes', D92, [
    'Suresnes, sur les pentes du mont Valérien, compte la cité-jardin, des immeubles anciens du centre et des maisons. Les punaises de lit y arrivent avec les voyages, les meubles et les visites, et se cachent dans les chambres.',
    'Nous traitons à la cryogénie, à la vapeur sèche ou à l’insecticide professionnel, en 2 passages, après inspection du lit, des plinthes et des meubles proches.',
  ], ['Puteaux', 'Rueil-Malmaison', 'Saint-Cloud', 'Nanterre'], [PIQ, SANS, VAP],
  { q: 'Faut-il jeter son matelas ?', a: 'Presque jamais. Un matelas se traite très bien à la vapeur sèche ou à la cryogénie. Le jeter sans traiter la chambre ne règle rien et risque d’infester les voisins pendant le transport.' }),

  vp('Meudon', 'à Meudon', 'meudon', D92, [
    'Meudon s’étend des coteaux de Bellevue et du Val-Fleury jusqu’aux grands ensembles de Meudon-la-Forêt. Pavillons, résidences et appartements peuvent être touchés par les punaises de lit, rapportées de voyage ou avec des meubles.',
    'Le traitement se fait en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Nous adaptons la méthode à la taille du logement et au niveau d’infestation.',
  ], ['Clamart', 'Issy-les-Moulineaux', 'Sèvres', 'Vélizy-Villacoublay'], [CRYO, PIQ, DIAT],
  { q: 'La terre de diatomée suffit-elle contre les punaises de lit ?', a: 'Non. Elle peut compléter un traitement, mais agit lentement et ne touche pas les œufs. Utilisée seule, elle laisse souvent l’infestation se développer.' }),

  vp('Montrouge', 'à Montrouge', 'montrouge', D92, [
    'Montrouge, collée au 14e arrondissement de Paris, est une ville très dense, faite d’immeubles et de petits logements. Les punaises de lit passent d’un appartement à l’autre par les murs et les gaines, et arrivent avec les déménagements.',
    'Nous traitons en 2 passages à la cryogénie, à la vapeur sèche ou à l’insecticide professionnel. En copropriété, nous conseillons de prévenir le syndic si plusieurs logements sont touchés.',
  ], ['Malakoff', 'Paris 14e', 'Châtillon', 'Bagneux'], [PIQ, CRYO, INSECT],
  { q: 'Je déménage : comment ne pas emporter les punaises de lit ?', a: 'Faites traiter avant le départ. Lavez le linge à 60 °C et transportez-le dans des sacs fermés. Les meubles traités peuvent ensuite partir sans risque.' }),

  vp('Bagneux', 'à Bagneux', 'bagneux', D92, [
    'Bagneux, transformée par l’arrivée de la ligne 4 et le renouvellement de ses quartiers, compte grands ensembles, résidences neuves et pavillons. Les punaises de lit y circulent avec les déménagements et les meubles qui changent de main.',
    'Le traitement se fait en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Pour les bailleurs, nous traitons plusieurs logements le même jour.',
  ], ['Montrouge', 'Châtillon', 'Fontenay-aux-Roses', 'Arcueil'], [PIQ, SANS, SNIPER],
  { q: 'Comment reconnaître des piqûres de punaises de lit ?', a: 'Elles sont souvent groupées ou alignées, sur les bras, le cou ou les jambes, et apparaissent au réveil. Vérifiez aussi les coutures du matelas : petites taches noires, mues, œufs blancs.' }),

  vp('Puteaux', 'à Puteaux', 'puteaux', D92, [
    'Puteaux accueille une grande partie de La Défense, avec ses tours, ses hôtels et ses résidences. Les voyageurs d’affaires et les locations meublées y font circuler les punaises de lit, qui gagnent ensuite les appartements.',
    'Nous traitons appartements, chambres d’hôtel et meublés en 2 passages, à la cryogénie, à la vapeur sèche ou à l’insecticide professionnel, avec attestation pour les professionnels.',
  ], ['Courbevoie', 'Suresnes', 'Nanterre', 'Neuilly-sur-Seine'], [AIRBNB, CRYO, VAP],
  { q: 'Un hôtel peut-il traiter une chambre sans la bloquer longtemps ?', a: 'Oui. La cryogénie et la vapeur sèche ne laissent pas de produit : la chambre peut être relouée rapidement après le traitement. Le second passage se cale sur le planning.' }),

  vp('Châtillon', 'à Châtillon', 'chatillon', D92, [
    'Châtillon, desservie par le tramway et la ligne 13, mêle pavillons, petits immeubles et résidences récentes. Les punaises de lit y arrivent avec les voyages, les meubles d’occasion et les déménagements.',
    'Nous traitons en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel, après une inspection complète de la chambre et des pièces voisines.',
  ], ['Montrouge', 'Bagneux', 'Clamart', 'Malakoff'], [PIQ, CRYO, SANS],
  { q: 'Faut-il quitter le logement pendant le traitement ?', a: 'Non avec la cryogénie ou la vapeur sèche. Avec l’insecticide, il faut attendre en moyenne 4 heures avant de revenir, en aérant bien.' }),

  vp('Châtenay-Malabry', 'à Châtenay-Malabry', 'chatenay-malabry', D92, [
    'Châtenay-Malabry compte la cité-jardin de la Butte-Rouge, des résidences, des pavillons et la Vallée-aux-Loups. Les punaises de lit y circulent avec les meubles, les vêtements et les déménagements.',
    'Le traitement se fait en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Dans la cité-jardin, les petits logements se traitent souvent en une matinée.',
  ], ['Antony', 'Sceaux', 'Le Plessis-Robinson', 'Clamart'], [PIQ, SANS, INSECT],
  { q: 'Les punaises de lit sont-elles liées à un manque d’hygiène ?', a: 'Non. Elles se nourrissent de sang et voyagent dans les bagages et les meubles. Un logement très propre peut être infesté.' }),

  vp('Malakoff', 'à Malakoff', 'malakoff', D92, [
    'Malakoff, petite ville dense en bordure du 14e arrondissement, mêle petits immeubles, maisons, anciens ateliers et logements sociaux. Les punaises de lit y passent d’un logement à l’autre et arrivent avec les meubles et les voyages.',
    'Nous traitons en 2 passages, à la cryogénie, à la vapeur sèche ou à l’insecticide professionnel. Dans les anciens ateliers transformés, les planchers et les boiseries demandent une inspection attentive.',
  ], ['Vanves', 'Montrouge', 'Châtillon', 'Paris 14e'], [PIQ, CRYO, VAP],
  { q: 'Les punaises de lit se cachent-elles dans les parquets ?', a: 'Oui, dans les fentes entre les lames et sous les plinthes. Le technicien traite ces zones à la vapeur sèche ou à l’insecticide, selon la méthode choisie.' }),

  vp('Vanves', 'à Vanves', 'vanves', D92, [
    'Vanves, toute proche du parc des expositions de la porte de Versailles, compte des immeubles, des maisons et des hôtels qui accueillent les visiteurs des salons. Les punaises de lit arrivent avec ces voyageurs et gagnent ensuite les logements.',
    'Nous traitons appartements et chambres d’hôtel en 2 passages, à la cryogénie, à la vapeur sèche ou à l’insecticide professionnel, avec attestation pour les professionnels.',
  ], ['Malakoff', 'Issy-les-Moulineaux', 'Paris 15e', 'Clamart'], [AIRBNB, PIQ, CRYO],
  { q: 'Je reçois souvent des invités : comment éviter les punaises de lit ?', a: 'Proposez un porte-bagages ou une surface dure pour poser les valises, loin du lit. Lavez les draps à 60 °C après chaque séjour et vérifiez de temps en temps les coutures du matelas d’appoint.' }),

  vp('Sceaux', 'à Sceaux', 'sceaux', D92, [
    'Sceaux, autour de son grand parc et du lycée Lakanal, compte maisons, résidences et un internat accueillant des élèves de toute la France. Les punaises de lit y arrivent avec les valises et les retours de vacances.',
    'Le traitement se fait en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Pour les établissements, nous intervenons pendant les vacances scolaires et remettons une attestation.',
  ], ['Bourg-la-Reine', 'Antony', 'Fontenay-aux-Roses', 'Châtenay-Malabry'], [PIQ, SANS, CRYO],
  { q: 'Un internat peut-il être traité sans fermer ?', a: 'Oui. Nous traitons les chambres concernées et les chambres voisines, en dehors des heures de présence, souvent pendant un week-end ou les vacances.' }),

  vp('Bourg-la-Reine', 'à Bourg-la-Reine', 'bourg-la-reine', D92, [
    'Bourg-la-Reine, traversée par le RER B, compte des maisons, des résidences et des immeubles le long de l’avenue du Général-Leclerc. Les punaises de lit y arrivent avec les voyages en train, les valises et les meubles.',
    'Nous traitons en 2 passages à la cryogénie, à la vapeur sèche ou à l’insecticide professionnel, après inspection du lit, du canapé et des plinthes.',
  ], ['Sceaux', 'Antony', 'L’Haÿ-les-Roses', 'Bagneux'], [PIQ, VAP, SANS],
  { q: 'La vapeur sèche suffit-elle contre les punaises de lit ?', a: 'Pour une infestation limitée, oui, en 2 passages. Pour une infestation importante, on la combine souvent à un insecticide professionnel ciblé. Le technicien vous conseille après inspection.' }),

  vp('Fontenay-aux-Roses', 'à Fontenay-aux-Roses', 'fontenay-aux-roses', D92, [
    'Fontenay-aux-Roses, ville résidentielle sur les coteaux, mêle maisons, résidences et immeubles des années 1960 et 1970. Les punaises de lit y arrivent avec les déménagements, les meubles et les voyages.',
    'Le traitement se fait en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Dans les résidences, nous conseillons d’inspecter aussi les logements voisins.',
  ], ['Sceaux', 'Bagneux', 'Châtillon', 'Clamart'], [PIQ, CRYO, INSECT],
  { q: 'Combien de temps les punaises de lit survivent-elles sans se nourrir ?', a: 'Plusieurs mois selon la température. C’est pourquoi un logement vide ne se désinfeste pas tout seul, et pourquoi le second passage est indispensable.' }),

  vp('La Garenne-Colombes', 'à La Garenne-Colombes', 'la-garenne-colombes', D92, [
    'La Garenne-Colombes, ville résidentielle proche de La Défense, compte des maisons, des petits immeubles et des résidences récentes. Les punaises de lit y arrivent avec les voyages d’affaires, les valises et les meubles.',
    'Nous traitons en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Pour les familles avec enfants, la cryogénie permet de traiter sans produit.',
  ], ['Colombes', 'Courbevoie', 'Bois-Colombes', 'Nanterre'], [CRYO, PIQ, SANS],
  { q: 'Peut-on traiter une chambre d’enfant sans produit ?', a: 'Oui, à la cryogénie ou à la vapeur sèche. Le lit, le matelas et les jouets en tissu sont traités sans insecticide, et l’enfant peut dormir dans sa chambre le soir même.' }),

  // ── Seine-Saint-Denis ──
  vp('Montreuil', 'à Montreuil', 'montreuil', D93, [
    'Montreuil, grande ville aux portes de l’est parisien, mêle immeubles du Bas-Montreuil, ateliers transformés, pavillons des Murs-à-Pêches et grands ensembles. Les meubles chinés aux puces et les déménagements y font circuler les punaises de lit.',
    'Nous traitons en 2 passages à la cryogénie, à la vapeur sèche ou à l’insecticide professionnel. Pour les ateliers et lofts, les planchers et les boiseries demandent une inspection minutieuse.',
  ], ['Bagnolet', 'Vincennes', 'Fontenay-sous-Bois', 'Paris 20e'], [PIQ, CRYO, SNIPER],
  { q: 'J’ai acheté un meuble aux puces : comment vérifier ?', a: 'Inspectez les coins, les fentes, le dessous et les fixations à la lampe. Cherchez des petites taches noires, des mues ou des œufs blancs. En cas de doute, faites-le traiter avant de l’installer.' }),

  vp('Pantin', 'à Pantin', 'pantin', D93, [
    'Pantin, le long du canal de l’Ourcq, mêle anciens bâtiments industriels transformés, résidences récentes, immeubles anciens des Quatre-Chemins et cités. Les punaises de lit y arrivent avec les déménagements, les meubles et les voyages.',
    'Le traitement se fait en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Pour les bailleurs, nous traitons plusieurs logements d’une même cage d’escalier.',
  ], ['Les Lilas', 'Paris 19e', 'Bobigny', 'Romainville'], [PIQ, SANS, INSECT],
  { q: 'Les punaises de lit passent-elles d’un appartement à l’autre ?', a: 'Oui, par les gaines, les passages de tuyaux et les plinthes. Si plusieurs logements sont touchés, un traitement coordonné avec le bailleur ou le syndic est le plus efficace.' }),

  vp('Bagnolet', 'à Bagnolet', 'bagnolet', D93, [
    'Bagnolet, entre la porte de Bagnolet et le parc des Guilands, compte des tours, des grands ensembles et des pavillons. Les punaises de lit y circulent avec les meubles, les voyages et les échanges entre voisins.',
    'Nous traitons en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Dans les tours, nous inspectons aussi les logements voisins quand c’est possible.',
  ], ['Montreuil', 'Les Lilas', 'Paris 20e', 'Romainville'], [PIQ, CRYO, DIAT],
  { q: 'Que faire du linge en attendant le traitement ?', a: 'Laissez-le dans la chambre, sans le déplacer dans d’autres pièces. Le technicien vous dira quoi laver à 60 °C et comment le stocker dans des sacs fermés jusqu’au traitement.' }),

  vp('Les Lilas', 'aux Lilas', 'les-lilas', D93, [
    'Les Lilas, petite ville dense sur les hauteurs à la limite du 19e et du 20e arrondissement, compte des immeubles, des pavillons et des résidences. Les punaises de lit y arrivent avec les meubles, les voyages et les déménagements.',
    'Le traitement se fait en 2 passages à la cryogénie, à la vapeur sèche ou à l’insecticide professionnel, après inspection de la chambre et des pièces voisines.',
  ], ['Pantin', 'Bagnolet', 'Paris 19e', 'Romainville'], [PIQ, SANS, VAP],
  { q: 'Les punaises de lit transmettent-elles des maladies ?', a: 'Aucune transmission de maladie à l’homme n’a été démontrée. Mais les piqûres démangent et le manque de sommeil pèse lourdement : il ne faut pas attendre pour traiter.' }),

  vp('Bobigny', 'à Bobigny', 'bobigny', D93, [
    'Préfecture de la Seine-Saint-Denis, Bobigny compte grands ensembles, résidences, l’hôpital Avicenne et des foyers. Les punaises de lit y circulent avec les meubles, les vêtements et les déménagements.',
    'Nous traitons en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Pour les bailleurs et les foyers, nous traitons plusieurs logements le même jour, avec un rapport.',
  ], ['Pantin', 'Drancy', 'Noisy-le-Sec', 'Bondy'], [INSECT, PIQ, SNIPER],
  { q: 'Qui paie le traitement dans un logement social ?', a: 'Signalez les punaises par écrit au bailleur, avec des photos. Il organise souvent le traitement, surtout si plusieurs logements sont touchés. Renseignez-vous auprès de l’ADIL de la Seine-Saint-Denis.' }),

  vp('Aulnay-sous-Bois', 'à Aulnay-sous-Bois', 'aulnay-sous-bois', D93, [
    'Aulnay-sous-Bois mêle grands ensembles au nord et quartiers pavillonnaires au sud, avec un grand centre commercial et des zones d’activités. Les punaises de lit y arrivent avec les meubles, les voyages et les échanges entre logements.',
    'Le traitement se fait en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Dans une maison, nous inspectons toutes les chambres avant de chiffrer.',
  ], ['Sevran', 'Livry-Gargan', 'Villepinte', 'Blanc-Mesnil'], [PIQ, CRYO, SANS],
  { q: 'Un seul passage peut-il suffire ?', a: 'Rarement. Les œufs résistent à la plupart des traitements. Le second passage, quelques semaines plus tard, élimine les punaises écloses entre-temps : il est inclus dans notre prix.' }),

  vp('Livry-Gargan', 'à Livry-Gargan', 'livry-gargan', D93, [
    'Livry-Gargan, ville surtout pavillonnaire traversée par le canal de l’Ourcq et proche de la forêt de Bondy, compte aussi des résidences. Les punaises de lit y arrivent avec les voyages, les meubles d’occasion et les visites.',
    'Nous traitons en 2 passages à la cryogénie, à la vapeur sèche ou à l’insecticide professionnel. Dans une maison, nous traitons chaque chambre touchée et le salon si besoin.',
  ], ['Aulnay-sous-Bois', 'Les Pavillons-sous-Bois', 'Clichy-sous-Bois', 'Vaujours'], [PIQ, VAP, DIAT],
  { q: 'Les punaises de lit peuvent-elles se cacher dans un canapé ?', a: 'Oui, dans les coutures, sous les coussins et dans la structure. Le canapé est inspecté et traité en même temps que les chambres.' }),

  vp('Épinay-sur-Seine', 'à Épinay-sur-Seine', 'epinay-sur-seine', D93, [
    'Épinay-sur-Seine, au bord de la Seine, compte des grands ensembles comme Orgemont, des résidences et des pavillons. Les punaises de lit y circulent avec les meubles, les vêtements et les déménagements.',
    'Le traitement se fait en 2 passages, avec cryogénie, vapeur sèche ou insecticide professionnel. Pour les bailleurs, nous traitons plusieurs logements d’une même cage d’escalier.',
  ], ['Saint-Denis', 'Villetaneuse', 'Pierrefitte-sur-Seine', 'Enghien-les-Bains'], [PIQ, INSECT, SANS],
  { q: 'Combien de temps faut-il pour se débarrasser des punaises de lit ?', a: 'Comptez quelques semaines : le premier passage élimine la plupart des punaises, le second achève le traitement. La garantie d’un an couvre ensuite le logement.' }),
]

// Contenu local détaillé (bloc LocalVille), rédigé ville par ville.
export const LOCAL_PUNAISES_9293: Record<string, string[]> = {
  'boulogne-billancourt': [
    'Le quartier du **Trapèze** et les abords de l’**île Seguin** comptent beaucoup de résidences récentes où les jeunes ménages s’installent avec des meubles achetés en ligne ou d’occasion. C’est une porte d’entrée fréquente des punaises de lit.',
    'Dans les immeubles des années 1930 du centre et du quartier **Silly-Gallieni**, les parquets et les plinthes anciennes offrent beaucoup de cachettes : l’inspection se fait latte par latte avant de traiter.',
  ],
  'nanterre': [
    'Autour de l’**université Paris Nanterre**, les résidences étudiantes changent d’occupants chaque année. Les matelas et meubles laissés par les anciens locataires transportent parfois des punaises de lit d’une chambre à l’autre.',
    'Dans les tours du quartier **Pablo-Picasso** et des grands ensembles, les punaises peuvent passer par les gaines. Nous inspectons les logements voisins quand le bailleur l’accepte.',
  ],
  'asnieres-sur-seine': [
    'Asnières-sur-Seine compte de nombreux **immeubles anciens** près de la gare et du centre, avec des parquets et des boiseries où les punaises de lit se cachent facilement.',
    'Les **pavillons** des quartiers des Courtilles ou de la Comète ont souvent une chambre d’amis peu utilisée : les punaises peuvent s’y développer sans être vues, après la visite d’un proche.',
  ],
  'colombes': [
    'Autour du **stade Yves-du-Manoir** et dans les quartiers pavillonnaires, beaucoup de maisons comptent plusieurs chambres et un sous-sol aménagé : une infestation peut toucher plusieurs pièces avant d’être repérée.',
    'Dans les grands ensembles des **Fossés-Jean** et du Petit-Colombes, les échanges de meubles entre voisins sont fréquents. Inspecter un meuble avant de le faire entrer reste le meilleur réflexe.',
  ],
  'courbevoie': [
    'Les **hôtels d’affaires** et résidences hôtelières proches de **La Défense** accueillent chaque jour des voyageurs du monde entier. Nous les accompagnons avec des contrôles et des traitements rapides entre deux clients.',
    'Dans les tours d’habitation du quartier **Faubourg de l’Arche** et du centre, les punaises de lit peuvent passer d’un logement à l’autre par les gaines techniques.',
  ],
  'rueil-malmaison': [
    'Rueil-Malmaison compte beaucoup de **maisons familiales** avec plusieurs chambres. Une infestation partie de la chambre d’un adolescent ou d’une chambre d’amis peut gagner les autres pièces en quelques mois.',
    'Dans le quartier **Rueil-sur-Seine** et autour du centre, les résidences récentes sont surtout touchées après un déménagement ou un voyage.',
  ],
  'levallois-perret': [
    'Les rues en damier de **Levallois-Perret** sont bordées d’immeubles serrés, avec beaucoup de studios et de deux-pièces loués à des actifs qui voyagent. Les punaises de lit circulent facilement entre ces petits logements.',
    'Autour du **parc de la Planchette** et de l’île de la Jatte, les grands appartements familiaux sont aussi concernés : les enfants reviennent de séjours ou de colonies avec des sacs à inspecter.',
  ],
  'issy-les-moulineaux': [
    'L’écoquartier du **Fort d’Issy** et les résidences des bords de Seine accueillent beaucoup de nouveaux arrivants. Les cartons de déménagement et les meubles neufs livrés à plat sont rarement en cause ; les meubles d’occasion, souvent.',
    'Dans le **vieux centre**, les immeubles anciens ont des plinthes et des parquets où les punaises se cachent : la vapeur sèche y est particulièrement utile.',
  ],
  'clichy': [
    'Près de l’**hôpital Beaujon** et du centre, beaucoup de petits logements sont loués à des personnes qui travaillent en horaires décalés. Les punaises de lit se développent vite quand le lit est occupé jour et nuit.',
    'Les immeubles anciens du **quartier Bac d’Asnières** ont des gaines communes : une infestation chez un voisin est un signe à prendre au sérieux.',
  ],
  'antony': [
    'La **résidence universitaire** d’Antony accueille des étudiants venus de toute la France et de l’étranger. Les valises et les meubles qui passent d’un occupant à l’autre sont la première cause d’arrivée des punaises de lit.',
    'Dans les **quartiers pavillonnaires** autour du parc de Sceaux et de la gare, les maisons ont souvent une chambre d’amis peu utilisée, où une infestation peut passer inaperçue plusieurs semaines.',
  ],
  'neuilly-sur-seine': [
    'À Neuilly-sur-Seine, les grands appartements ont souvent des **têtes de lit capitonnées**, des boiseries et des tapis épais : autant de cachettes qui demandent une inspection soigneuse.',
    'Sur l’**île de la Jatte** et dans les maisons du quartier Saint-James, le personnel de maison et les invités de passage peuvent apporter des punaises : un contrôle régulier des chambres d’amis est utile.',
  ],
  'clamart': [
    'Autour de la **gare de Clamart** et du quartier du **Panorama**, de nombreux logements neufs ont été livrés ces dernières années : les nouveaux arrivants apportent parfois des punaises avec leurs meubles.',
    'Dans les **pavillons** proches de la forêt, l’infestation se limite souvent à une chambre, si l’on agit vite.',
  ],
  'gennevilliers': [
    'Les **foyers** et grands ensembles de Gennevilliers comptent beaucoup de logements collectifs où les punaises de lit circulent facilement. Un traitement coordonné de plusieurs chambres est souvent nécessaire.',
    'Près du **port** et des zones d’activités, les salariés en déplacement logent parfois en résidence hôtelière : un contrôle des chambres évite de rapporter des punaises à la maison.',
  ],
  'suresnes': [
    'La **cité-jardin** de Suresnes compte de nombreux petits logements anciens, avec des parquets et des plinthes en bois où les punaises de lit se cachent.',
    'Autour de l’**hôpital Foch**, les soignants et familles de patients logent parfois en meublé : un contrôle du lit à l’arrivée est un bon réflexe.',
  ],
  'meudon': [
    'À **Meudon-la-Forêt**, les grands ensembles et les résidences comptent beaucoup de logements reliés par les mêmes gaines : une infestation peut s’étendre d’un appartement à l’autre.',
    'Sur les coteaux de **Bellevue** et du Val-Fleury, les maisons anciennes ont des parquets et des boiseries qui demandent une inspection minutieuse.',
  ],
  'montrouge': [
    'Montrouge compte beaucoup de **petits logements** loués à des étudiants et à de jeunes actifs, avec des déménagements fréquents : c’est la première porte d’entrée des punaises de lit.',
    'Autour du **beffroi** et de l’avenue de la République, les immeubles anciens ont des gaines communes par où les punaises passent d’un logement à l’autre.',
  ],
  'bagneux': [
    'Les nouveaux immeubles autour de la **gare de Bagneux Lucie-Aubrac** sont livrés avec des logements vides : c’est le bon moment pour inspecter le lit et le canapé dès l’emménagement, avant que des punaises venues d’un ancien logement ne se multiplient.',
    'Avec l’arrivée de la **ligne 4** et le renouvellement des quartiers, Bagneux accueille beaucoup de nouveaux habitants. Les déménagements et les meubles d’occasion font circuler les punaises de lit.',
    'Dans les grands ensembles de la **Pierre-Plate** et des Tertres, les punaises peuvent passer d’un logement à l’autre : un traitement coordonné avec le bailleur est le plus efficace.',
  ],
  'puteaux': [
    'Puteaux accueille une grande partie des **tours de La Défense** et de nombreux hôtels. Les voyageurs d’affaires y apportent parfois des punaises de lit, qui gagnent ensuite les logements voisins.',
    'Sur l’**île de Puteaux** et dans le vieux Puteaux, les immeubles anciens ont des parquets où les punaises se cachent facilement.',
  ],
  'chatillon': [
    'Le long du **tramway T6** et autour de la place de la Libération, les résidences récentes accueillent beaucoup de jeunes ménages : un meuble d’occasion suffit à faire entrer des punaises de lit.',
    'Dans les **pavillons** des hauteurs de Châtillon, l’infestation reste souvent limitée à une chambre si l’on agit tôt.',
  ],
  'chatenay-malabry': [
    'La **cité-jardin de la Butte-Rouge** compte de nombreux petits logements anciens, souvent très meublés : l’inspection doit être minutieuse, meuble par meuble.',
    'Autour de la **Vallée-aux-Loups** et des quartiers pavillonnaires, les maisons sont surtout touchées après un voyage ou la visite d’un proche.',
  ],
  'malakoff': [
    'Malakoff compte beaucoup d’**anciens ateliers** et de maisons transformées en logements, avec des planchers en bois et des recoins où les punaises de lit se cachent.',
    'Près du **métro Malakoff-Plateau de Vanves**, les petits immeubles accueillent étudiants et jeunes actifs : les déménagements fréquents font circuler les punaises.',
  ],
  'vanves': [
    'Vanves est voisine du **parc des expositions de la porte de Versailles** : pendant les grands salons, hôtels et meublés accueillent beaucoup de visiteurs, et les punaises de lit voyagent avec les bagages.',
    'Le **lycée Michelet** et son internat, ainsi que les petits immeubles du centre, font aussi circuler valises et sacs : un contrôle après chaque retour de séjour est utile.',
  ],
  'sceaux': [
    'Autour du **lycée Lakanal** et de son internat, les élèves arrivent de toute la France avec leurs valises. Un contrôle des chambres en début d’année limite le risque.',
    'Les **maisons** proches du parc de Sceaux ont souvent une chambre d’amis : c’est là que les punaises s’installent après la visite d’un proche.',
  ],
  'bourg-la-reine': [
    'Bourg-la-Reine est un **nœud du RER B**, avec beaucoup d’habitants qui voyagent chaque jour. Les punaises de lit se transportent dans les sacs et les vêtements, puis s’installent dans les chambres.',
    'Dans les **maisons** du centre et des quartiers résidentiels, l’infestation reste souvent limitée à une pièce si l’on agit dès les premières piqûres.',
  ],
  'fontenay-aux-roses': [
    'Près du **centre-ville** et de la rue Boucicaut, les petites copropriétés ont des caves et des greniers partagés où l’on stocke parfois des meubles et des matelas : une source de réinfestation à vérifier si les punaises reviennent.',
    'Fontenay-aux-Roses compte des **résidences des années 1960 et 1970** avec des gaines communes : une infestation chez un voisin peut gagner votre logement.',
    'Dans les **maisons** des coteaux, les punaises arrivent surtout avec les voyages, les meubles d’occasion et les visites de proches.',
  ],
  'la-garenne-colombes': [
    'La Garenne-Colombes accueille beaucoup d’**actifs travaillant à La Défense**, qui voyagent régulièrement. Les punaises de lit rapportées d’hôtel sont une cause fréquente d’infestation.',
    'Les **maisons** et petits immeubles du centre ont souvent des parquets anciens : la vapeur sèche permet de traiter les fentes sans produit.',
  ],
  'montreuil': [
    'Le **marché aux puces de Montreuil** et les nombreuses ventes entre particuliers font circuler meubles et textiles : un meuble chiné doit toujours être inspecté avant d’entrer dans le logement.',
    'Dans le **Bas-Montreuil**, les anciens ateliers transformés en lofts ont de grands planchers en bois et des recoins : la vapeur sèche et l’inspection minutieuse sont indispensables.',
  ],
  'pantin': [
    'Le long du **canal de l’Ourcq**, les anciens bâtiments industriels transformés en logements et les résidences récentes accueillent beaucoup de nouveaux habitants : les déménagements font circuler les punaises de lit.',
    'Dans le quartier des **Quatre-Chemins**, les immeubles anciens et denses ont des gaines communes : un traitement coordonné entre voisins est souvent nécessaire.',
  ],
  'bagnolet': [
    'Près de la **porte de Bagnolet** et de la gare routière, beaucoup de voyageurs passent chaque jour : les punaises de lit voyagent dans les bagages et les vêtements.',
    'Dans les **tours** et grands ensembles, les punaises passent d’un logement à l’autre par les gaines : prévenir le bailleur permet un traitement coordonné.',
  ],
  'les-lilas': [
    'Les Lilas est une ville **très dense**, avec beaucoup de petits immeubles où les logements se touchent : une infestation chez un voisin peut vite gagner votre appartement.',
    'Autour du **théâtre du Garde-Chasse** et du centre, les maisons de ville ont des escaliers et des parquets en bois qui demandent une inspection attentive.',
  ],
  'bobigny': [
    'Bobigny compte de nombreux **grands ensembles** et des foyers, où les punaises de lit circulent d’un logement à l’autre. Nous travaillons avec les bailleurs pour traiter plusieurs logements le même jour.',
    'Autour de l’**hôpital Avicenne**, les familles de patients logent parfois en meublé ou en hôtel : un contrôle du lit à l’arrivée est un bon réflexe.',
  ],
  'aulnay-sous-bois': [
    'Au nord d’Aulnay-sous-Bois, les **grands ensembles** comptent beaucoup de logements reliés par les gaines : un traitement coordonné avec le bailleur évite les réinfestations.',
    'Au sud, les **quartiers pavillonnaires** sont surtout touchés après un voyage ou l’achat d’un meuble d’occasion : l’infestation y reste souvent limitée à une ou deux chambres.',
  ],
  'livry-gargan': [
    'Livry-Gargan est surtout **pavillonnaire** : les maisons ont plusieurs chambres et parfois un sous-sol aménagé, où une infestation peut s’installer sans être vue.',
    'Le long du **canal de l’Ourcq** et près de la forêt de Bondy, les résidences récentes sont surtout touchées après un déménagement.',
  ],
  'epinay-sur-seine': [
    'Épinay-sur-Seine compte des **grands ensembles**, notamment à **Orgemont** et à la Source, où les punaises de lit passent d’un logement à l’autre par les gaines.',
    'Dans les **pavillons** des bords de Seine, les punaises arrivent surtout avec les meubles et les voyages : agir dès les premières piqûres limite le traitement à une chambre.',
  ],
}
