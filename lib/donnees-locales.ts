// Données locales par ville, générées automatiquement (ne pas modifier à la main).
// Sources : Insee via geo.api.gouv.fr (population, superficie, codes postaux), Île-de-France Mobilités (gares),
// OpenStreetMap (cours d'eau, espaces verts, jardins partagés), IGN BD Forêt V2 (forêts de pins).
export type DonneesLocales = {
  slug: string; nom: string; paris: boolean; population: number; surfaceKm2: number; densite: number
  cp: string[]; distParis: number; direction: string; gares: string[]; lignes: string[]
  eaux: string[]; verts: string[]; jardins: number; voisines: string[]; pinsHa: number; osm: boolean
}

export const DONNEES_LOCALES: Record<string, DonneesLocales> = {
 "saint-maur-des-fosses": {
  "slug": "saint-maur-des-fosses",
  "nom": "Saint-Maur-des-Fossés",
  "paris": false,
  "population": 76572,
  "surfaceKm2": 11.26,
  "densite": 6803,
  "cp": [
   "94100",
   "94210"
  ],
  "distParis": 12,
  "direction": "sud-est",
  "gares": [
   "La Varenne-Chennevières",
   "Le Parc de Saint-Maur",
   "Champigny",
   "Saint-Maur-Créteil"
  ],
  "lignes": [
   "RER A"
  ],
  "eaux": [
   "La Marne",
   "Bras du Chapitre",
   "Bras des Ravageurs"
  ],
  "verts": [
   "Square de l'Abbaye",
   "Parc Simone Veil",
   "Square des Lacs"
  ],
  "jardins": 0,
  "voisines": [
   "Joinville-le-Pont",
   "Champigny-sur-Marne",
   "Bonneuil-sur-Marne",
   "Créteil"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "le-vesinet": {
  "slug": "le-vesinet",
  "nom": "Le Vésinet",
  "paris": false,
  "population": 15554,
  "surfaceKm2": 5.02,
  "densite": 3098,
  "cp": [
   "78110"
  ],
  "distParis": 16.6,
  "direction": "ouest",
  "gares": [
   "Le Vésinet-Centre",
   "Le Vésinet-Le Pecq"
  ],
  "lignes": [
   "RER A"
  ],
  "eaux": [],
  "verts": [
   "Grande Pelouse",
   "Parc Princesse",
   "Parc des Ibis"
  ],
  "jardins": 0,
  "voisines": [
   "Croissy-sur-Seine",
   "Chatou",
   "Le Port-Marly",
   "Le Pecq"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "maisons-laffitte": {
  "slug": "maisons-laffitte",
  "nom": "Maisons-Laffitte",
  "paris": false,
  "population": 23093,
  "surfaceKm2": 6.93,
  "densite": 3331,
  "cp": [
   "78600"
  ],
  "distParis": 18,
  "direction": "nord-ouest",
  "gares": [
   "Maisons-Laffitte"
  ],
  "lignes": [
   "RER A",
   "TRAIN L"
  ],
  "eaux": [
   "La Seine",
   "Petit Bras de Seine"
  ],
  "verts": [
   "Parc de Maisons Laffitte",
   "l'Île",
   "Parc de Grétry"
  ],
  "jardins": 0,
  "voisines": [
   "Sartrouville",
   "La Frette-sur-Seine",
   "Le Mesnil-le-Roi",
   "Houilles"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "gif-sur-yvette": {
  "slug": "gif-sur-yvette",
  "nom": "Gif-sur-Yvette",
  "paris": false,
  "population": 22544,
  "surfaceKm2": 11.89,
  "densite": 1895,
  "cp": [
   "91190"
  ],
  "distParis": 23.5,
  "direction": "sud-ouest",
  "gares": [
   "Courcelle-sur-Yvette",
   "Gif-sur-Yvette"
  ],
  "lignes": [
   "RER B"
  ],
  "eaux": [
   "L'Yvette"
  ],
  "verts": [
   "Bois de la Guyonnerie",
   "Forêt communale de Gif-sur-Yvette",
   "Bois d'Aigrefoin"
  ],
  "jardins": 3,
  "voisines": [
   "Bures-sur-Yvette",
   "Saint-Aubin",
   "Gometz-le-Châtel",
   "Gometz-la-Ville"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "fontainebleau": {
  "slug": "fontainebleau",
  "nom": "Fontainebleau",
  "paris": false,
  "population": 15583,
  "surfaceKm2": 172.29,
  "densite": 90,
  "cp": [
   "77300"
  ],
  "distParis": 53.6,
  "direction": "sud-est",
  "gares": [
   "Thomery"
  ],
  "lignes": [
   "TRAIN R"
  ],
  "eaux": [],
  "verts": [
   "Forêt de Fontainebleau",
   "Jardin Anglais",
   "Square des Lilas"
  ],
  "jardins": 1,
  "voisines": [
   "Avon",
   "Bois-le-Roi",
   "Samois-sur-Seine",
   "Barbizon"
  ],
  "pinsHa": 4461.4,
  "osm": true
 },
 "le-perreux-sur-marne": {
  "slug": "le-perreux-sur-marne",
  "nom": "Le Perreux-sur-Marne",
  "paris": false,
  "population": 35260,
  "surfaceKm2": 3.96,
  "densite": 8904,
  "cp": [
   "94170"
  ],
  "distParis": 11.4,
  "direction": "est",
  "gares": [
   "Nogent-le-Perreux"
  ],
  "lignes": [
   "RER E"
  ],
  "eaux": [
   "La Marne"
  ],
  "verts": [
   "Île des Loups",
   "Parc du Saut du Loup",
   "Parc des Cités Unies"
  ],
  "jardins": 0,
  "voisines": [
   "Bry-sur-Marne",
   "Nogent-sur-Marne",
   "Neuilly-Plaisance",
   "Fontenay-sous-Bois"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "nogent-sur-marne": {
  "slug": "nogent-sur-marne",
  "nom": "Nogent-sur-Marne",
  "paris": false,
  "population": 32455,
  "surfaceKm2": 2.8,
  "densite": 11597,
  "cp": [
   "94130"
  ],
  "distParis": 9.8,
  "direction": "est",
  "gares": [
   "Nogent-sur-Marne"
  ],
  "lignes": [
   "RER A"
  ],
  "eaux": [
   "La Marne"
  ],
  "verts": [
   "Parc des Artistes",
   "Parc Watteau",
   "Square d'Yverdon"
  ],
  "jardins": 2,
  "voisines": [
   "Fontenay-sous-Bois",
   "Le Perreux-sur-Marne",
   "Joinville-le-Pont",
   "Bry-sur-Marne"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "bry-sur-marne": {
  "slug": "bry-sur-marne",
  "nom": "Bry-sur-Marne",
  "paris": false,
  "population": 18503,
  "surfaceKm2": 3.34,
  "densite": 5546,
  "cp": [
   "94360"
  ],
  "distParis": 12.7,
  "direction": "est",
  "gares": [
   "Bry-sur-Marne"
  ],
  "lignes": [
   "RER A"
  ],
  "eaux": [
   "La Marne"
  ],
  "verts": [
   "Parc des Coudrais",
   "Île du Moulin",
   "Square De Lattre de Tassigny"
  ],
  "jardins": 0,
  "voisines": [
   "Le Perreux-sur-Marne",
   "Villiers-sur-Marne",
   "Champigny-sur-Marne",
   "Noisy-le-Grand"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "sucy-en-brie": {
  "slug": "sucy-en-brie",
  "nom": "Sucy-en-Brie",
  "paris": false,
  "population": 27764,
  "surfaceKm2": 10.39,
  "densite": 2672,
  "cp": [
   "94370"
  ],
  "distParis": 16.6,
  "direction": "sud-est",
  "gares": [
   "Sucy-Bonneuil"
  ],
  "lignes": [
   "RER A"
  ],
  "eaux": [
   "La Marne"
  ],
  "verts": [
   "Parc de la Garennière",
   "Parc de la Chênaie",
   "Parc Montaleau"
  ],
  "jardins": 0,
  "voisines": [
   "Noiseau",
   "Ormesson-sur-Marne",
   "Boissy-Saint-Léger",
   "Chennevières-sur-Marne"
  ],
  "pinsHa": 2.3,
  "osm": true
 },
 "santeny": {
  "slug": "santeny",
  "nom": "Santeny",
  "paris": false,
  "population": 3913,
  "surfaceKm2": 10.03,
  "densite": 390,
  "cp": [
   "94440"
  ],
  "distParis": 21.1,
  "direction": "sud-est",
  "gares": [],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Forêt domaniale de Notre-Dame"
  ],
  "jardins": 0,
  "voisines": [
   "Marolles-en-Brie",
   "Servon",
   "Lésigny",
   "Villecresnes"
  ],
  "pinsHa": 9.4,
  "osm": true
 },
 "vitry-sur-seine": {
  "slug": "vitry-sur-seine",
  "nom": "Vitry-sur-Seine",
  "paris": false,
  "population": 93963,
  "surfaceKm2": 11.66,
  "densite": 8059,
  "cp": [
   "94400"
  ],
  "distParis": 7.8,
  "direction": "sud-est",
  "gares": [
   "Les Ardoines",
   "Domaine Chérioux",
   "Germaine Tailleferre",
   "Vitry-sur-Seine",
   "Camille Groult",
   "Mairie de Vitry-sur-Seine",
   "Musée MAC VAL",
   "Watteau - Rondenay",
   "Moulin Vert",
   "Beethoven - Concorde",
   "Constant Coquelin"
  ],
  "lignes": [
   "RER C",
   "TRAM 7",
   "TRAM 9"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc départemental des Lilas",
   "Parc Frédéric Joliot Curie",
   "Parc du Coteau - Marcel Rosette"
  ],
  "jardins": 11,
  "voisines": [
   "Alfortville",
   "Villejuif",
   "Ivry-sur-Seine",
   "Thiais"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "creteil": {
  "slug": "creteil",
  "nom": "Créteil",
  "paris": false,
  "population": 93397,
  "surfaceKm2": 11.42,
  "densite": 8179,
  "cp": [
   "94000"
  ],
  "distParis": 10.7,
  "direction": "sud-est",
  "gares": [
   "Créteil-Université",
   "Créteil - Pointe du Lac",
   "Pointe du Lac",
   "Créteil Pompadour",
   "Créteil–Préfecture",
   "Créteil–L’Échat"
  ],
  "lignes": [
   "CABLE 1",
   "RER D",
   "METRO 8"
  ],
  "eaux": [
   "La Marne",
   "Bras du Chapitre",
   "Bras de la Guyère"
  ],
  "verts": [
   "Île de Loisirs de Créteil",
   "Parc Dupeyroux",
   "Parc de la Brèche"
  ],
  "jardins": 20,
  "voisines": [
   "Maisons-Alfort",
   "Alfortville",
   "Bonneuil-sur-Marne",
   "Choisy-le-Roi"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "champigny-sur-marne": {
  "slug": "champigny-sur-marne",
  "nom": "Champigny-sur-Marne",
  "paris": false,
  "population": 78072,
  "surfaceKm2": 11.3,
  "densite": 6907,
  "cp": [
   "94500"
  ],
  "distParis": 13.1,
  "direction": "est",
  "gares": [
   "Les Boullereaux-Champigny"
  ],
  "lignes": [
   "RER E"
  ],
  "eaux": [
   "La Marne"
  ],
  "verts": [
   "Parc de Détente et de Loisirs du Tremblay",
   "Parc Départemental du Plateau",
   "Île de Champigny"
  ],
  "jardins": 7,
  "voisines": [
   "Villiers-sur-Marne",
   "Bry-sur-Marne",
   "Saint-Maur-des-Fossés",
   "Chennevières-sur-Marne"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "ivry-sur-seine": {
  "slug": "ivry-sur-seine",
  "nom": "Ivry-sur-Seine",
  "paris": false,
  "population": 65064,
  "surfaceKm2": 6.11,
  "densite": 10641,
  "cp": [
   "94200"
  ],
  "distParis": 5.3,
  "direction": "sud-est",
  "gares": [
   "La Briqueterie",
   "Mairie d'Ivry",
   "Châteaudun - Barbès",
   "Cimetière Parisien d'Ivry",
   "Pierre et Marie Curie",
   "Ivry-sur-Seine"
  ],
  "lignes": [
   "RER C",
   "METRO 7",
   "TRAM 9"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc départemental des Cormailles",
   "Promenade des petits bois",
   "Promenade du Fort"
  ],
  "jardins": 7,
  "voisines": [
   "Charenton-le-Pont",
   "Le Kremlin-Bicêtre",
   "Paris 13e",
   "Vitry-sur-Seine"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "maisons-alfort": {
  "slug": "maisons-alfort",
  "nom": "Maisons-Alfort",
  "paris": false,
  "population": 56799,
  "surfaceKm2": 5.35,
  "densite": 10621,
  "cp": [
   "94700"
  ],
  "distParis": 8.7,
  "direction": "sud-est",
  "gares": [
   "École Vétérinaire de Maisons-Alfort",
   "Maisons-Alfort-Les Juilliottes",
   "Maisons-Alfort-Stade",
   "Le Vert de Maisons"
  ],
  "lignes": [
   "RER D",
   "METRO 8"
  ],
  "eaux": [
   "La Marne"
  ],
  "verts": [
   "Parc du domaine de Château Gaillard",
   "Parc du Vert-de-Maisons",
   "Parc de l'Alsacienne"
  ],
  "jardins": 1,
  "voisines": [
   "Alfortville",
   "Saint-Maurice",
   "Créteil",
   "Joinville-le-Pont"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "fontenay-sous-bois": {
  "slug": "fontenay-sous-bois",
  "nom": "Fontenay-sous-Bois",
  "paris": false,
  "population": 53757,
  "surfaceKm2": 5.56,
  "densite": 9669,
  "cp": [
   "94120"
  ],
  "distParis": 9.1,
  "direction": "est",
  "gares": [
   "Fontenay-sous-Bois",
   "Val de Fontenay"
  ],
  "lignes": [
   "RER A",
   "RER E"
  ],
  "eaux": [],
  "verts": [
   "Écoparc des Carrières",
   "Parc de l'Hôtel de Ville",
   "Parc des Épivans"
  ],
  "jardins": 1,
  "voisines": [
   "Nogent-sur-Marne",
   "Montreuil",
   "Le Perreux-sur-Marne",
   "Vincennes"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "villejuif": {
  "slug": "villejuif",
  "nom": "Villejuif",
  "paris": false,
  "population": 60183,
  "surfaceKm2": 5.28,
  "densite": 11399,
  "cp": [
   "94800"
  ],
  "distParis": 6.7,
  "direction": "sud",
  "gares": [
   "Lamartine",
   "Villejuif - Louis Aragon",
   "Villejuif - Léo Lagrange",
   "Villejuif Paul Vaillant-Couturier",
   "Villejuif - Gustave Roussy​"
  ],
  "lignes": [
   "METRO 7",
   "METRO 14",
   "TRAM 7"
  ],
  "eaux": [],
  "verts": [
   "Parc Départemental des Hautes Bruyères",
   "Parc du 8 mai 1945",
   "Parc des Lilas"
  ],
  "jardins": 5,
  "voisines": [
   "Le Kremlin-Bicêtre",
   "Cachan",
   "L'Haÿ-les-Roses",
   "Arcueil"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "vincennes": {
  "slug": "vincennes",
  "nom": "Vincennes",
  "paris": false,
  "population": 48193,
  "surfaceKm2": 1.9,
  "densite": 25319,
  "cp": [
   "94300"
  ],
  "distParis": 6.5,
  "direction": "est",
  "gares": [
   "Château de Vincennes",
   "Vincennes",
   "Bérault",
   "Saint-Mandé"
  ],
  "lignes": [
   "RER A",
   "METRO 1"
  ],
  "eaux": [],
  "verts": [
   "Jardin Cœur de Ville",
   "Le Jardin du Couchant",
   "Jardin du Midi"
  ],
  "jardins": 0,
  "voisines": [
   "Saint-Mandé",
   "Montreuil",
   "Paris 12e",
   "Bagnolet"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "alfortville": {
  "slug": "alfortville",
  "nom": "Alfortville",
  "paris": false,
  "population": 45531,
  "surfaceKm2": 3.67,
  "densite": 12401,
  "cp": [
   "94140"
  ],
  "distParis": 8.2,
  "direction": "sud-est",
  "gares": [
   "Maisons-Alfort-Alfortville"
  ],
  "lignes": [
   "RER D"
  ],
  "eaux": [
   "La Seine",
   "Darse"
  ],
  "verts": [
   "Île au cointre",
   "Parc Saint-Pierre",
   "Square René Dumont"
  ],
  "jardins": 1,
  "voisines": [
   "Maisons-Alfort",
   "Vitry-sur-Seine",
   "Créteil",
   "Saint-Maurice"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "choisy-le-roi": {
  "slug": "choisy-le-roi",
  "nom": "Choisy-le-Roi",
  "paris": false,
  "population": 45946,
  "surfaceKm2": 5.42,
  "densite": 8475,
  "cp": [
   "94600"
  ],
  "distParis": 11.2,
  "direction": "sud-est",
  "gares": [
   "Verdun Hoche",
   "Rouget de Lisle",
   "Carle-Darthe",
   "Four-Peary",
   "Choisy-le-Roi"
  ],
  "lignes": [
   "RER C",
   "TRAM 9"
  ],
  "eaux": [
   "La Seine",
   "Darse"
  ],
  "verts": [
   "Parc Interdépartemental des Sports - Plaine Sud",
   "Parc Maurice Thorez",
   "Parc de la Mairie"
  ],
  "jardins": 2,
  "voisines": [
   "Thiais",
   "Orly",
   "Valenton",
   "Créteil"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "le-kremlin-bicetre": {
  "slug": "le-kremlin-bicetre",
  "nom": "Le Kremlin-Bicêtre",
  "paris": false,
  "population": 24110,
  "surfaceKm2": 1.54,
  "densite": 15647,
  "cp": [
   "94270"
  ],
  "distParis": 4.9,
  "direction": "sud",
  "gares": [
   "Le Kremlin-Bicêtre",
   "Hôpital Bicêtre​"
  ],
  "lignes": [
   "METRO 7",
   "METRO 14"
  ],
  "eaux": [],
  "verts": [
   "Parc Philippe Pinel",
   "Parc de Bicêtre",
   "Square Édith Piaf"
  ],
  "jardins": 0,
  "voisines": [
   "Gentilly",
   "Villejuif",
   "Arcueil",
   "Ivry-sur-Seine"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "charenton-le-pont": {
  "slug": "charenton-le-pont",
  "nom": "Charenton-le-Pont",
  "paris": false,
  "population": 28830,
  "surfaceKm2": 1.85,
  "densite": 15585,
  "cp": [
   "94220"
  ],
  "distParis": 5.2,
  "direction": "sud-est",
  "gares": [
   "Charenton-Écoles",
   "Liberté"
  ],
  "lignes": [
   "METRO 8"
  ],
  "eaux": [
   "La Seine",
   "La Marne"
  ],
  "verts": [
   "Parc de Conflans",
   "Square de la Marne",
   "Square Jules Noël"
  ],
  "jardins": 1,
  "voisines": [
   "Paris 12e",
   "Ivry-sur-Seine",
   "Saint-Mandé",
   "Saint-Maurice"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "saint-maurice": {
  "slug": "saint-maurice",
  "nom": "Saint-Maurice",
  "paris": false,
  "population": 14506,
  "surfaceKm2": 1.45,
  "densite": 10019,
  "cp": [
   "94410"
  ],
  "distParis": 7.8,
  "direction": "sud-est",
  "gares": [],
  "lignes": [],
  "eaux": [
   "La Marne",
   "Canal de Saint-Maur",
   "Bras de Gravelle"
  ],
  "verts": [
   "Square Denise Legrix",
   "Square du Moulin Rouge"
  ],
  "jardins": 0,
  "voisines": [
   "Maisons-Alfort",
   "Joinville-le-Pont",
   "Paris 12e",
   "Charenton-le-Pont"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "thiais": {
  "slug": "thiais",
  "nom": "Thiais",
  "paris": false,
  "population": 32918,
  "surfaceKm2": 6.42,
  "densite": 5124,
  "cp": [
   "94320"
  ],
  "distParis": 10.6,
  "direction": "sud",
  "gares": [
   "Bretagne",
   "Pont de Rungis",
   "Thiais - Orly",
   "Trois communes"
  ],
  "lignes": [
   "RER C",
   "METRO 14",
   "TRAM 7",
   "TRAM 9"
  ],
  "eaux": [],
  "verts": [
   "Parc de Cluny",
   "Parc de l'Europe",
   "Parc André Malraux"
  ],
  "jardins": 7,
  "voisines": [
   "Choisy-le-Roi",
   "Orly",
   "Chevilly-Larue",
   "Rungis"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "cachan": {
  "slug": "cachan",
  "nom": "Cachan",
  "paris": false,
  "population": 31103,
  "surfaceKm2": 2.79,
  "densite": 11159,
  "cp": [
   "94230"
  ],
  "distParis": 7,
  "direction": "sud",
  "gares": [
   "Bagneux",
   "Arcueil - Cachan"
  ],
  "lignes": [
   "RER B"
  ],
  "eaux": [],
  "verts": [
   "Promenade Esther Tyzelmann",
   "Parc Raspail",
   "Jardin panoramique du Coteau"
  ],
  "jardins": 3,
  "voisines": [
   "Arcueil",
   "Bourg-la-Reine",
   "L'Haÿ-les-Roses",
   "Bagneux"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "villeneuve-saint-georges": {
  "slug": "villeneuve-saint-georges",
  "nom": "Villeneuve-Saint-Georges",
  "paris": false,
  "population": 36221,
  "surfaceKm2": 8.07,
  "densite": 4487,
  "cp": [
   "94190"
  ],
  "distParis": 14.6,
  "direction": "sud-est",
  "gares": [
   "Villeneuve-Saint-Georges",
   "Villeneuve-Triage",
   "Villa Nova"
  ],
  "lignes": [
   "CABLE 1",
   "RER D"
  ],
  "eaux": [
   "L'Yerres",
   "La Seine"
  ],
  "verts": [
   "Parc départemental Saussaie-Pidoux",
   "Parc Beauregard",
   "Parc de la Chevrette"
  ],
  "jardins": 2,
  "voisines": [
   "Valenton",
   "Crosne",
   "Ablon-sur-Seine",
   "Villeneuve-le-Roi"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "l-hay-les-roses": {
  "slug": "l-hay-les-roses",
  "nom": "L'Haÿ-les-Roses",
  "paris": false,
  "population": 31188,
  "surfaceKm2": 3.9,
  "densite": 8006,
  "cp": [
   "94240"
  ],
  "distParis": 8.4,
  "direction": "sud",
  "gares": [
   "L’Haÿ-les-Roses​"
  ],
  "lignes": [
   "METRO 14"
  ],
  "eaux": [],
  "verts": [
   "Parc départemental de la Roseraie",
   "Parc de la Bièvre",
   "Parc La Fontaine"
  ],
  "jardins": 3,
  "voisines": [
   "Chevilly-Larue",
   "Cachan",
   "Bourg-la-Reine",
   "Villejuif"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "villiers-sur-marne": {
  "slug": "villiers-sur-marne",
  "nom": "Villiers-sur-Marne",
  "paris": false,
  "population": 33162,
  "surfaceKm2": 4.32,
  "densite": 7682,
  "cp": [
   "94350"
  ],
  "distParis": 14.8,
  "direction": "est",
  "gares": [
   "Villiers-sur-Marne - Le Plessis-Trévise"
  ],
  "lignes": [
   "RER E"
  ],
  "eaux": [],
  "verts": [
   "Mail",
   "Parc du Bois Saint-Denis",
   "Square Paul-Cézanne"
  ],
  "jardins": 0,
  "voisines": [
   "Noisy-le-Grand",
   "Bry-sur-Marne",
   "Champigny-sur-Marne",
   "Le Plessis-Trévise"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "fresnes": {
  "slug": "fresnes",
  "nom": "Fresnes",
  "paris": false,
  "population": 29528,
  "surfaceKm2": 3.55,
  "densite": 8314,
  "cp": [
   "94260"
  ],
  "distParis": 10.8,
  "direction": "sud",
  "gares": [],
  "lignes": [],
  "eaux": [
   "La Bièvre"
  ],
  "verts": [
   "Parc des Aulnes",
   "Parc des Prés de la Bièvre",
   "Parc André Villette"
  ],
  "jardins": 0,
  "voisines": [
   "Rungis",
   "Chevilly-Larue",
   "Antony",
   "L'Haÿ-les-Roses"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "limeil-brevannes": {
  "slug": "limeil-brevannes",
  "nom": "Limeil-Brévannes",
  "paris": false,
  "population": 27406,
  "surfaceKm2": 6.95,
  "densite": 3945,
  "cp": [
   "94450"
  ],
  "distParis": 15.8,
  "direction": "sud-est",
  "gares": [
   "La Végétale",
   "Limeil-Brévannes"
  ],
  "lignes": [
   "CABLE 1"
  ],
  "eaux": [],
  "verts": [
   "Parc Hôpital Émile Roux",
   "Parc Léon Bernard",
   "Parc Saint-Martin"
  ],
  "jardins": 2,
  "voisines": [
   "Boissy-Saint-Léger",
   "Valenton",
   "Bonneuil-sur-Marne",
   "Villeneuve-Saint-Georges"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "orly": {
  "slug": "orly",
  "nom": "Orly",
  "paris": false,
  "population": 24658,
  "surfaceKm2": 6.69,
  "densite": 3686,
  "cp": [
   "94310"
  ],
  "distParis": 13.1,
  "direction": "sud",
  "gares": [
   "Caroline Aigle",
   "Christophe Colomb",
   "Orly Ville",
   "Les Saules",
   "Orly - Gaston Viens",
   "Coeur d'Orly"
  ],
  "lignes": [
   "RER C",
   "TRAM 7",
   "TRAM 9"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc des Saules",
   "Parc Georges Méliès",
   "Bois grignon"
  ],
  "jardins": 1,
  "voisines": [
   "Villeneuve-le-Roi",
   "Ablon-sur-Seine",
   "Thiais",
   "Choisy-le-Roi"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "arcueil": {
  "slug": "arcueil",
  "nom": "Arcueil",
  "paris": false,
  "population": 22200,
  "surfaceKm2": 2.33,
  "densite": 9509,
  "cp": [
   "94110"
  ],
  "distParis": 5.4,
  "direction": "sud",
  "gares": [
   "Laplace"
  ],
  "lignes": [
   "RER B"
  ],
  "eaux": [],
  "verts": [
   "Parc du Coteau de Bièvre",
   "Jardin sur le toit",
   "Parc Paul Vaillant-Couturier"
  ],
  "jardins": 11,
  "voisines": [
   "Gentilly",
   "Cachan",
   "Montrouge",
   "Le Kremlin-Bicêtre"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "saint-mande": {
  "slug": "saint-mande",
  "nom": "Saint-Mandé",
  "paris": false,
  "population": 21071,
  "surfaceKm2": 0.91,
  "densite": 23283,
  "cp": [
   "94160"
  ],
  "distParis": 5.3,
  "direction": "est",
  "gares": [],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Jardin Alexandra David-Néel"
  ],
  "jardins": 0,
  "voisines": [
   "Paris 12e",
   "Vincennes",
   "Charenton-le-Pont",
   "Paris 20e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "villeneuve-le-roi": {
  "slug": "villeneuve-le-roi",
  "nom": "Villeneuve-le-Roi",
  "paris": false,
  "population": 21000,
  "surfaceKm2": 8.44,
  "densite": 2489,
  "cp": [
   "94290"
  ],
  "distParis": 14.1,
  "direction": "sud",
  "gares": [
   "Villeneuve-le-Roi"
  ],
  "lignes": [
   "RER C"
  ],
  "eaux": [
   "La Seine",
   "L'Yerres"
  ],
  "verts": [
   "Parc intercommunal des Sports du Grand Godet",
   "Ferme du Parc des Meuniers",
   "Promenade des Mariniers"
  ],
  "jardins": 10,
  "voisines": [
   "Orly",
   "Ablon-sur-Seine",
   "Athis-Mons",
   "Villeneuve-Saint-Georges"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "joinville-le-pont": {
  "slug": "joinville-le-pont",
  "nom": "Joinville-le-Pont",
  "paris": false,
  "population": 20525,
  "surfaceKm2": 2.29,
  "densite": 8982,
  "cp": [
   "94340"
  ],
  "distParis": 9.4,
  "direction": "sud-est",
  "gares": [
   "Joinville-le-Pont"
  ],
  "lignes": [
   "RER A"
  ],
  "eaux": [
   "La Marne",
   "Canal de Polangis",
   "Canal de Saint-Maur"
  ],
  "verts": [
   "Parc du Parangon",
   "La Forêt Urbaine",
   "Parc Jacques Chirac"
  ],
  "jardins": 1,
  "voisines": [
   "Saint-Maurice",
   "Nogent-sur-Marne",
   "Saint-Maur-des-Fossés",
   "Maisons-Alfort"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "le-plessis-trevise": {
  "slug": "le-plessis-trevise",
  "nom": "Le Plessis-Trévise",
  "paris": false,
  "population": 21112,
  "surfaceKm2": 4.32,
  "densite": 4888,
  "cp": [
   "94420"
  ],
  "distParis": 17.3,
  "direction": "est",
  "gares": [],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Forêt régionale du Plessis Saint-Antoine",
   "Parc Saint-Pierre",
   "Parc François Mansart"
  ],
  "jardins": 0,
  "voisines": [
   "Émerainville",
   "Chennevières-sur-Marne",
   "Villiers-sur-Marne",
   "Noisy-le-Grand"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "chevilly-larue": {
  "slug": "chevilly-larue",
  "nom": "Chevilly-Larue",
  "paris": false,
  "population": 19826,
  "surfaceKm2": 4.22,
  "densite": 4694,
  "cp": [
   "94550"
  ],
  "distParis": 9.5,
  "direction": "sud",
  "gares": [
   "Chevilly-Larue",
   "Auguste Perret"
  ],
  "lignes": [
   "METRO 14",
   "TRAM 7"
  ],
  "eaux": [],
  "verts": [
   "Parc départemental du Petit-le-Roy",
   "Square Dieuk",
   "Square Hochdorf"
  ],
  "jardins": 4,
  "voisines": [
   "L'Haÿ-les-Roses",
   "Rungis",
   "Fresnes",
   "Thiais"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "chennevieres-sur-marne": {
  "slug": "chennevieres-sur-marne",
  "nom": "Chennevières-sur-Marne",
  "paris": false,
  "population": 18710,
  "surfaceKm2": 5.22,
  "densite": 3586,
  "cp": [
   "94430"
  ],
  "distParis": 15.6,
  "direction": "sud-est",
  "gares": [],
  "lignes": [],
  "eaux": [
   "La Marne"
  ],
  "verts": [
   "Parc du Château de Retz",
   "Parc départemental de la Plaine des Bordes",
   "Colline du Bois l'Abbé"
  ],
  "jardins": 3,
  "voisines": [
   "Ormesson-sur-Marne",
   "Noiseau",
   "Le Plessis-Trévise",
   "Sucy-en-Brie"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "gentilly": {
  "slug": "gentilly",
  "nom": "Gentilly",
  "paris": false,
  "population": 19963,
  "surfaceKm2": 1.18,
  "densite": 16906,
  "cp": [
   "94250"
  ],
  "distParis": 4.6,
  "direction": "sud",
  "gares": [
   "Gentilly"
  ],
  "lignes": [
   "RER B"
  ],
  "eaux": [],
  "verts": [
   "Jardin Pablo Picasso",
   "Square Croizat",
   "Square Rue de la Paix"
  ],
  "jardins": 2,
  "voisines": [
   "Arcueil",
   "Le Kremlin-Bicêtre",
   "Montrouge",
   "Cachan"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "bonneuil-sur-marne": {
  "slug": "bonneuil-sur-marne",
  "nom": "Bonneuil-sur-Marne",
  "paris": false,
  "population": 18270,
  "surfaceKm2": 5.49,
  "densite": 3328,
  "cp": [
   "94380"
  ],
  "distParis": 13.8,
  "direction": "sud-est",
  "gares": [],
  "lignes": [],
  "eaux": [
   "La Marne",
   "Darse Sud",
   "Darse Nord"
  ],
  "verts": [
   "Parc départemental du Rancy",
   "Parc Mélinée et Missak Manouchian",
   "Parc canin Mirza"
  ],
  "jardins": 0,
  "voisines": [
   "Limeil-Brévannes",
   "Saint-Maur-des-Fossés",
   "Sucy-en-Brie",
   "Créteil"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "boissy-saint-leger": {
  "slug": "boissy-saint-leger",
  "nom": "Boissy-Saint-Léger",
  "paris": false,
  "population": 17325,
  "surfaceKm2": 8.92,
  "densite": 1943,
  "cp": [
   "94470"
  ],
  "distParis": 17.6,
  "direction": "sud-est",
  "gares": [
   "Boissy-Saint-Léger"
  ],
  "lignes": [
   "RER A"
  ],
  "eaux": [],
  "verts": [
   "Forêt régionale de Gros Bois",
   "Bois du Petit-Val",
   "Square des Hautes Varennes"
  ],
  "jardins": 3,
  "voisines": [
   "Marolles-en-Brie",
   "Limeil-Brévannes",
   "Villecresnes",
   "Sucy-en-Brie"
  ],
  "pinsHa": 6.6,
  "osm": true
 },
 "valenton": {
  "slug": "valenton",
  "nom": "Valenton",
  "paris": false,
  "population": 14406,
  "surfaceKm2": 5.31,
  "densite": 2711,
  "cp": [
   "94460"
  ],
  "distParis": 14,
  "direction": "sud-est",
  "gares": [
   "Valenton"
  ],
  "lignes": [
   "CABLE 1"
  ],
  "eaux": [],
  "verts": [
   "Parc départemental de la Plage Bleue",
   "Parc départemental du Champ Saint-Julien",
   "Parc Jacques Chirac"
  ],
  "jardins": 1,
  "voisines": [
   "Villeneuve-Saint-Georges",
   "Limeil-Brévannes",
   "Crosne",
   "Choisy-le-Roi"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-12": {
  "slug": "paris-12",
  "nom": "Paris 12e",
  "paris": true,
  "population": 138024,
  "surfaceKm2": 16.37,
  "densite": 8431,
  "cp": [
   "75012"
  ],
  "distParis": 5.4,
  "direction": "sud-est",
  "gares": [
   "Bercy",
   "Reuilly-Diderot",
   "Ledru Rollin",
   "Dugommier",
   "Gare de Lyon",
   "Porte Dorée",
   "Porte de Charenton",
   "Nation",
   "Montgallet",
   "Picpus",
   "Bastille",
   "Daumesnil",
   "Baron Le Roy",
   "Porte de Vincennes",
   "Michel Bizot",
   "Cour Saint-Émilion",
   "Montempoivre",
   "Alexandra David-Néel",
   "Quai de la Rapée",
   "Bel-Air",
   "Paris-Bercy"
  ],
  "lignes": [
   "RER A",
   "RER D",
   "METRO 1",
   "METRO 2",
   "METRO 5",
   "METRO 6",
   "METRO 8",
   "METRO 14",
   "TRAM 3a",
   "TRAIN R"
  ],
  "eaux": [
   "La Seine",
   "Canal Saint-Martin"
  ],
  "verts": [
   "Bois de Vincennes",
   "Parc Floral de Paris",
   "Parc de Bercy"
  ],
  "jardins": 7,
  "voisines": [
   "Saint-Mandé",
   "Charenton-le-Pont",
   "Vincennes",
   "Saint-Maurice"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-13": {
  "slug": "paris-13",
  "nom": "Paris 13e",
  "paris": true,
  "population": 181271,
  "surfaceKm2": 7.13,
  "densite": 25411,
  "cp": [
   "75013"
  ],
  "distParis": 2.8,
  "direction": "sud-est",
  "gares": [
   "Place d'Italie",
   "Bibliothèque François Mitterrand",
   "Poterne des Peupliers",
   "Avenue de France",
   "Porte de Choisy",
   "Porte d'Italie",
   "Campo Formio",
   "Gare d'Austerlitz",
   "Chevaleret",
   "Quai de la Gare",
   "Maison Blanche​",
   "Stade Charléty",
   "Maryse Bastié",
   "Saint-Marcel",
   "Corvisart",
   "Glacière",
   "Olympiades",
   "Paris Austerlitz",
   "Tolbiac",
   "Porte d'Ivry",
   "Nationale",
   "Les Gobelins",
   "Maison Blanche"
  ],
  "lignes": [
   "RER C",
   "METRO 5",
   "METRO 6",
   "METRO 7",
   "METRO 10",
   "METRO 14",
   "TRAM 3a",
   "TRAM 9"
  ],
  "eaux": [],
  "verts": [
   "Parc Kellermann",
   "Square René Le Gall",
   "Parc de Choisy"
  ],
  "jardins": 3,
  "voisines": [
   "Paris 5e",
   "Le Kremlin-Bicêtre",
   "Ivry-sur-Seine",
   "Gentilly"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-20": {
  "slug": "paris-20",
  "nom": "Paris 20e",
  "paris": true,
  "population": 185140,
  "surfaceKm2": 6,
  "densite": 30875,
  "cp": [
   "75020"
  ],
  "distParis": 3.6,
  "direction": "est",
  "gares": [
   "Gambetta",
   "Maraîchers",
   "Porte de Bagnolet",
   "Marie de Miribel",
   "Jourdain",
   "Porte de Vincennes",
   "Porte de Montreuil",
   "Buzenval",
   "Couronnes",
   "Ménilmontant",
   "Philippe Auguste",
   "Alexandre Dumas",
   "Télégraphe",
   "Séverine",
   "Pelleport",
   "Porte des Lilas",
   "Père Lachaise",
   "Avron",
   "Pyrénées",
   "Adrienne Bolland",
   "Saint-Fargeau"
  ],
  "lignes": [
   "METRO 1",
   "METRO 2",
   "METRO 3",
   "METRO 3bis",
   "METRO 9",
   "METRO 11",
   "TRAM 3b"
  ],
  "eaux": [],
  "verts": [
   "Square Samuel de Champlain",
   "Bois de Charonne",
   "Parc de Belleville"
  ],
  "jardins": 13,
  "voisines": [
   "Paris 11e",
   "Bagnolet",
   "Le Pré-Saint-Gervais",
   "Paris 3e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-11": {
  "slug": "paris-11",
  "nom": "Paris 11e",
  "paris": true,
  "population": 138170,
  "surfaceKm2": 3.65,
  "densite": 37873,
  "cp": [
   "75011"
  ],
  "distParis": 2.4,
  "direction": "est",
  "gares": [
   "République",
   "Oberkampf",
   "Rue des Boulets",
   "Parmentier",
   "Nation",
   "Belleville",
   "Père Lachaise",
   "Voltaire",
   "Richard Lenoir",
   "Goncourt",
   "Bastille",
   "Filles du Calvaire",
   "Charonne",
   "Bréguet-Sabin",
   "Faidherbe Chaligny",
   "Saint-Sébastien-Froissart",
   "Saint-Ambroise",
   "Rue Saint-Maur"
  ],
  "lignes": [
   "METRO 3",
   "METRO 5",
   "METRO 8",
   "METRO 9",
   "METRO 11"
  ],
  "eaux": [
   "Canal Saint-Martin"
  ],
  "verts": [
   "Square Dominique Bernard",
   "Square de la Roquette",
   "Square Maurice Gardette"
  ],
  "jardins": 5,
  "voisines": [
   "Paris 20e",
   "Paris 3e",
   "Paris 4e",
   "Paris 10e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-5": {
  "slug": "paris-5",
  "nom": "Paris 5e",
  "paris": true,
  "population": 55252,
  "surfaceKm2": 2.54,
  "densite": 21741,
  "cp": [
   "75005"
  ],
  "distParis": 0.9,
  "direction": "sud",
  "gares": [
   "Jussieu",
   "Cluny-La Sorbonne",
   "Censier-Daubenton",
   "Saint-Michel",
   "Cardinal Lemoine",
   "Maubert-Mutualité",
   "Place Monge",
   "Port Royal"
  ],
  "lignes": [
   "RER B",
   "RER C",
   "METRO 7",
   "METRO 10"
  ],
  "eaux": [
   "La Seine - Bras de la Monnaie",
   "La Seine"
  ],
  "verts": [
   "Jardin des Plantes",
   "Jardin Tino Rossi - Musée de la Sculpture en Plein Air",
   "Jardins du Val-de-Grâce"
  ],
  "jardins": 1,
  "voisines": [
   "Paris 4e",
   "Paris 6e",
   "Paris 13e",
   "Paris 3e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-4": {
  "slug": "paris-4",
  "nom": "Paris 4e",
  "paris": true,
  "population": 27332,
  "surfaceKm2": 1.6,
  "densite": 17135,
  "cp": [
   "75004"
  ],
  "distParis": 0.5,
  "direction": "est",
  "gares": [
   "Châtelet",
   "Saint-Paul",
   "Cité",
   "Bastille",
   "Hôtel de Ville",
   "Pont Marie",
   "Rambuteau",
   "Sully-Morland"
  ],
  "lignes": [
   "METRO 1",
   "METRO 4",
   "METRO 5",
   "METRO 7",
   "METRO 11"
  ],
  "eaux": [
   "La Seine",
   "La Seine - Bras Marie",
   "Canal Saint-Martin"
  ],
  "verts": [
   "Square Jean XXIII",
   "Square Louis-XIII",
   "Jardin Federico-García-Lorca"
  ],
  "jardins": 0,
  "voisines": [
   "Paris 3e",
   "Paris 5e",
   "Paris 1er",
   "Paris 2e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-3": {
  "slug": "paris-3",
  "nom": "Paris 3e",
  "paris": true,
  "population": 32179,
  "surfaceKm2": 1.17,
  "densite": 27515,
  "cp": [
   "75003"
  ],
  "distParis": 1.3,
  "direction": "nord-est",
  "gares": [
   "République",
   "Arts et Métiers",
   "Temple",
   "Chemin Vert",
   "Réaumur Sébastopol"
  ],
  "lignes": [
   "METRO 3",
   "METRO 4",
   "METRO 8",
   "METRO 9",
   "METRO 11"
  ],
  "eaux": [],
  "verts": [
   "Jardin des Archives-Nationales",
   "Square du Temple- Elie Wiesel",
   "Square Émile Chautemps"
  ],
  "jardins": 2,
  "voisines": [
   "Paris 4e",
   "Paris 2e",
   "Paris 10e",
   "Paris 11e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-14": {
  "slug": "paris-14",
  "nom": "Paris 14e",
  "paris": true,
  "population": 136455,
  "surfaceKm2": 5.61,
  "densite": 24325,
  "cp": [
   "75014"
  ],
  "distParis": 3.3,
  "direction": "sud-ouest",
  "gares": [
   "Gaîté",
   "Edgar Quinet",
   "Raspail",
   "Denfert-Rochereau",
   "Mouton-Duvernet",
   "Porte de Vanves",
   "Plaisance",
   "Cité Universitaire",
   "Saint-Jacques",
   "Alésia",
   "Porte d'Orléans",
   "Pernety",
   "Didot",
   "Montsouris",
   "Jean Moulin"
  ],
  "lignes": [
   "RER B",
   "METRO 4",
   "METRO 6",
   "METRO 13",
   "TRAM 3a"
  ],
  "eaux": [],
  "verts": [
   "Cité Universitaire - Parc Est",
   "Parc Montsouris",
   "Cité Universitaire - Parc Ouest"
  ],
  "jardins": 8,
  "voisines": [
   "Montrouge",
   "Paris 6e",
   "Gentilly",
   "Paris 15e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-6": {
  "slug": "paris-6",
  "nom": "Paris 6e",
  "paris": true,
  "population": 40389,
  "surfaceKm2": 2.15,
  "densite": 18778,
  "cp": [
   "75006"
  ],
  "distParis": 1.5,
  "direction": "ouest",
  "gares": [
   "Luxembourg",
   "Odéon",
   "Saint-Germain-des-Prés",
   "Vavin",
   "Rennes",
   "Saint-Michel",
   "Montparnasse Bienvenüe",
   "Mabillon",
   "Saint-Placide",
   "Montparnasse-Bienvenüe",
   "Sèvres-Babylone",
   "Saint-Sulpice",
   "Notre-Dame-des-Champs"
  ],
  "lignes": [
   "RER B",
   "METRO 4",
   "METRO 10",
   "METRO 12"
  ],
  "eaux": [
   "La Seine - Bras de la Monnaie"
  ],
  "verts": [
   "Jardin du Luxembourg",
   "Jardin des Grands-Explorateurs Marco Polo et Robert Cavelier-de-la-Salle",
   "Square Ozanam"
  ],
  "jardins": 0,
  "voisines": [
   "Paris 1er",
   "Paris 7e",
   "Paris 5e",
   "Paris 4e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-10": {
  "slug": "paris-10",
  "nom": "Paris 10e",
  "paris": true,
  "population": 83873,
  "surfaceKm2": 2.89,
  "densite": 29042,
  "cp": [
   "75010"
  ],
  "distParis": 2.7,
  "direction": "nord",
  "gares": [
   "Jaurès",
   "Stalingrad",
   "Jacques Bonsergent",
   "La Chapelle",
   "Gare du Nord",
   "Gare de l'Est",
   "Magenta",
   "Bonne Nouvelle",
   "Barbès-Rochechouart",
   "Louis Blanc",
   "Château d'Eau",
   "Château-Landon",
   "Strasbourg-Saint-Denis",
   "République"
  ],
  "lignes": [
   "RER B",
   "RER D",
   "RER E",
   "METRO 2",
   "METRO 4",
   "METRO 5",
   "METRO 7",
   "METRO 7bis",
   "METRO 8",
   "METRO 9",
   "TRAIN H",
   "TRAIN K",
   "TRAIN P"
  ],
  "eaux": [
   "Canal Saint-Martin"
  ],
  "verts": [
   "Jardin Villemin - Mahsa Jîna Amini",
   "Jardin de l'Hôpital Saint-Louis",
   "Square Frédérick Lemaître"
  ],
  "jardins": 5,
  "voisines": [
   "Paris 3e",
   "Paris 9e",
   "Paris 2e",
   "Paris 18e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "boulogne-billancourt": {
  "slug": "boulogne-billancourt",
  "nom": "Boulogne-Billancourt",
  "paris": false,
  "population": 119019,
  "surfaceKm2": 6.15,
  "densite": 19346,
  "cp": [
   "92100"
  ],
  "distParis": 8,
  "direction": "ouest",
  "gares": [
   "Marcel Sembat",
   "Billancourt",
   "Boulogne - Pont de Saint-Cloud",
   "Pont de Sèvres",
   "Boulogne - Jean Jaurès"
  ],
  "lignes": [
   "METRO 9",
   "METRO 10"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc de Boulogne - Edmond de Rothschild",
   "Parc départemental Gauthier-Mougin",
   "Parc de Billancourt"
  ],
  "jardins": 2,
  "voisines": [
   "Issy-les-Moulineaux",
   "Paris 16e",
   "Saint-Cloud",
   "Sèvres"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "nanterre": {
  "slug": "nanterre",
  "nom": "Nanterre",
  "paris": false,
  "population": 97783,
  "surfaceKm2": 12.22,
  "densite": 7999,
  "cp": [
   "92000"
  ],
  "distParis": 11.9,
  "direction": "nord-ouest",
  "gares": [
   "Nanterre-Université",
   "Nanterre-Préfecture",
   "Nanterre-Ville",
   "Nanterre - La Folie"
  ],
  "lignes": [
   "RER A",
   "RER E",
   "TRAIN L"
  ],
  "eaux": [
   "La Seine - Bras de Marly",
   "Chenal du Moulin Allard",
   "Chenal des Quilleraies"
  ],
  "verts": [
   "Parc du Chemin de l'île",
   "Parc André Malraux",
   "Parc des Chenevreux"
  ],
  "jardins": 10,
  "voisines": [
   "Carrières-sur-Seine",
   "Puteaux",
   "Suresnes",
   "Bezons"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "asnieres-sur-seine": {
  "slug": "asnieres-sur-seine",
  "nom": "Asnières-sur-Seine",
  "paris": false,
  "population": 93941,
  "surfaceKm2": 4.82,
  "densite": 19485,
  "cp": [
   "92600"
  ],
  "distParis": 8.3,
  "direction": "nord-ouest",
  "gares": [
   "Asnières-sur-Seine",
   "Les Courtilles",
   "Asnières Quatre Routes",
   "Gabriel Péri"
  ],
  "lignes": [
   "METRO 13",
   "TRAM 1",
   "TRAIN J",
   "TRAIN L"
  ],
  "eaux": [
   "La Seine",
   "Petit bras de la Seine"
  ],
  "verts": [
   "Parc Robinson",
   "Square du Maréchal Joffre",
   "Square Maréchal Leclerc"
  ],
  "jardins": 9,
  "voisines": [
   "Gennevilliers",
   "Clichy",
   "Bois-Colombes",
   "Levallois-Perret"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "colombes": {
  "slug": "colombes",
  "nom": "Colombes",
  "paris": false,
  "population": 91053,
  "surfaceKm2": 7.78,
  "densite": 11706,
  "cp": [
   "92700"
  ],
  "distParis": 10.7,
  "direction": "nord-ouest",
  "gares": [
   "La Garenne-Colombes",
   "Les Vallées",
   "Victor Basch",
   "Parc Pierre Lagravère",
   "Le Stade",
   "Colombes",
   "Jacqueline Auriol"
  ],
  "lignes": [
   "TRAM 2",
   "TRAIN J",
   "TRAIN L"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc Pierre-Lagravère",
   "La coulée verte",
   "Parc Communal Caillebotte"
  ],
  "jardins": 5,
  "voisines": [
   "La Garenne-Colombes",
   "Bois-Colombes",
   "Bezons",
   "Courbevoie"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "courbevoie": {
  "slug": "courbevoie",
  "nom": "Courbevoie",
  "paris": false,
  "population": 82902,
  "surfaceKm2": 4.16,
  "densite": 19926,
  "cp": [
   "92400"
  ],
  "distParis": 8.4,
  "direction": "nord-ouest",
  "gares": [
   "Faubourg de l'Arche",
   "Courbevoie",
   "Bécon-les-Bruyères"
  ],
  "lignes": [
   "TRAM 2",
   "TRAIN L"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc de Bécon",
   "Jardin des Tournelles",
   "Parc des Couronnes"
  ],
  "jardins": 8,
  "voisines": [
   "Neuilly-sur-Seine",
   "La Garenne-Colombes",
   "Bois-Colombes",
   "Puteaux"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "rueil-malmaison": {
  "slug": "rueil-malmaison",
  "nom": "Rueil-Malmaison",
  "paris": false,
  "population": 82874,
  "surfaceKm2": 14.53,
  "densite": 5704,
  "cp": [
   "92500"
  ],
  "distParis": 12.6,
  "direction": "ouest",
  "gares": [
   "Rueil-Malmaison"
  ],
  "lignes": [
   "RER A"
  ],
  "eaux": [
   "La Seine - Bras de Marly"
  ],
  "verts": [
   "Forêt domaniale de la Malmaison",
   "Parc de Bois-Préau",
   "Plaine des Closeaux"
  ],
  "jardins": 3,
  "voisines": [
   "Suresnes",
   "Garches",
   "Bougival",
   "Nanterre"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "levallois-perret": {
  "slug": "levallois-perret",
  "nom": "Levallois-Perret",
  "paris": false,
  "population": 68092,
  "surfaceKm2": 2.42,
  "densite": 28187,
  "cp": [
   "92300"
  ],
  "distParis": 6.5,
  "direction": "nord-ouest",
  "gares": [
   "Anatole France",
   "Pont de Levallois",
   "Clichy-Levallois",
   "Louise Michel"
  ],
  "lignes": [
   "METRO 3",
   "TRAIN L"
  ],
  "eaux": [
   "La Seine",
   "Petit Bras de la Seine"
  ],
  "verts": [
   "Parc de la Planchette",
   "Parc de l'Île de la Jatte",
   "Parc Alsace"
  ],
  "jardins": 6,
  "voisines": [
   "Paris 17e",
   "Clichy",
   "Neuilly-sur-Seine",
   "Courbevoie"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "issy-les-moulineaux": {
  "slug": "issy-les-moulineaux",
  "nom": "Issy-les-Moulineaux",
  "paris": false,
  "population": 67669,
  "surfaceKm2": 4.24,
  "densite": 15941,
  "cp": [
   "92130"
  ],
  "distParis": 7.1,
  "direction": "sud-ouest",
  "gares": [
   "Issy-Val-de-Seine",
   "Jacques-Henri Lartigue",
   "Corentin Celton",
   "Issy",
   "Les Moulineaux",
   "Mairie d'Issy"
  ],
  "lignes": [
   "RER C",
   "METRO 12",
   "TRAM 2"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc de l'île Saint-Germain",
   "Parc Henri Barbusse",
   "Parc Rodin"
  ],
  "jardins": 4,
  "voisines": [
   "Vanves",
   "Boulogne-Billancourt",
   "Malakoff",
   "Paris 15e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "clichy": {
  "slug": "clichy",
  "nom": "Clichy",
  "paris": false,
  "population": 64410,
  "surfaceKm2": 3.08,
  "densite": 20916,
  "cp": [
   "92110"
  ],
  "distParis": 6.6,
  "direction": "nord-ouest",
  "gares": [
   "Mairie de Clichy"
  ],
  "lignes": [
   "METRO 13"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc des Impressionnistes",
   "Parc Roger Salengro",
   "Parc Marcel Bich"
  ],
  "jardins": 2,
  "voisines": [
   "Levallois-Perret",
   "Asnières-sur-Seine",
   "Paris 17e",
   "Saint-Ouen-sur-Seine"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "antony": {
  "slug": "antony",
  "nom": "Antony",
  "paris": false,
  "population": 64263,
  "surfaceKm2": 9.56,
  "densite": 6721,
  "cp": [
   "92160"
  ],
  "distParis": 12,
  "direction": "sud",
  "gares": [
   "Antony",
   "Parc de Sceaux",
   "La Croix-de-Berny-Fresnes",
   "Fontaine-Michalon",
   "Les Baconnets",
   "La Croix de Berny",
   "Chemin d'Antony"
  ],
  "lignes": [
   "ORLYVAL",
   "RER B",
   "RER C",
   "TRAM 10"
  ],
  "eaux": [
   "La Bièvre",
   "Conduite forcée du Ru des Godets"
  ],
  "verts": [
   "Parc Heller",
   "Parc de la Noisette",
   "Bois de l'Aurore"
  ],
  "jardins": 2,
  "voisines": [
   "Fresnes",
   "Sceaux",
   "Wissous",
   "Verrières-le-Buisson"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-1": {
  "slug": "paris-1",
  "nom": "Paris 1er",
  "paris": true,
  "population": 15114,
  "surfaceKm2": 1.83,
  "densite": 8271,
  "cp": [
   "75001"
  ],
  "distParis": 1.4,
  "direction": "nord-ouest",
  "gares": [
   "Palais Royal - Musée du Louvre",
   "Châtelet",
   "Châtelet-Les Halles",
   "Pyramides",
   "Madeleine",
   "Les Halles",
   "Tuileries",
   "Pont Neuf",
   "Louvre-Rivoli"
  ],
  "lignes": [
   "RER A",
   "RER B",
   "RER D",
   "METRO 1",
   "METRO 4",
   "METRO 7",
   "METRO 8",
   "METRO 14"
  ],
  "eaux": [
   "La Seine",
   "La Seine - Bras de la Monnaie"
  ],
  "verts": [
   "Jardin des Tuileries",
   "Jardin Nelson Mandela",
   "Jardin du Palais Royal"
  ],
  "jardins": 0,
  "voisines": [
   "Paris 2e",
   "Paris 6e",
   "Paris 9e",
   "Paris 3e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-2": {
  "slug": "paris-2",
  "nom": "Paris 2e",
  "paris": true,
  "population": 19847,
  "surfaceKm2": 0.99,
  "densite": 20015,
  "cp": [
   "75002"
  ],
  "distParis": 1.8,
  "direction": "nord",
  "gares": [
   "Réaumur Sébastopol",
   "Sentier",
   "Strasbourg-Saint-Denis",
   "Bourse",
   "Quatre Septembre",
   "Étienne Marcel",
   "Richelieu-Drouot",
   "Opéra"
  ],
  "lignes": [
   "METRO 3",
   "METRO 4",
   "METRO 7",
   "METRO 8",
   "METRO 9"
  ],
  "eaux": [],
  "verts": [
   "Jardin Vivienne",
   "Square Louvois",
   "Square Jacques Bidault"
  ],
  "jardins": 0,
  "voisines": [
   "Paris 1er",
   "Paris 9e",
   "Paris 3e",
   "Paris 10e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-7": {
  "slug": "paris-7",
  "nom": "Paris 7e",
  "paris": true,
  "population": 48015,
  "surfaceKm2": 4.09,
  "densite": 11754,
  "cp": [
   "75007"
  ],
  "distParis": 2.8,
  "direction": "ouest",
  "gares": [
   "Duroc",
   "Invalides",
   "Musée d'Orsay",
   "Saint-François-Xavier",
   "Varenne",
   "Rue du Bac",
   "Pont de l'Alma",
   "Assemblée Nationale",
   "La Tour Maubourg",
   "Sèvres-Babylone",
   "École Militaire",
   "Vaneau",
   "Solférino"
  ],
  "lignes": [
   "RER C",
   "METRO 8",
   "METRO 10",
   "METRO 12",
   "METRO 13"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Jardin de l'Intendant",
   "Square Boucicaut",
   "Square Santiago du Chili"
  ],
  "jardins": 0,
  "voisines": [
   "Paris 6e",
   "Paris 15e",
   "Paris 1er",
   "Paris 8e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-8": {
  "slug": "paris-8",
  "nom": "Paris 8e",
  "paris": true,
  "population": 35317,
  "surfaceKm2": 3.88,
  "densite": 9107,
  "cp": [
   "75008"
  ],
  "distParis": 3.6,
  "direction": "nord-ouest",
  "gares": [
   "Champs-Élysées – Clemenceau",
   "Miromesnil",
   "Saint-Lazare",
   "Concorde",
   "Saint-Augustin",
   "Villiers",
   "Ternes",
   "Monceau",
   "Franklin D. Roosevelt",
   "Alma-Marceau",
   "Madeleine",
   "Courcelles",
   "George V",
   "Saint-Philippe du Roule",
   "Europe",
   "Rome",
   "Charles De Gaulle-Étoile"
  ],
  "lignes": [
   "METRO 1",
   "METRO 2",
   "METRO 3",
   "METRO 8",
   "METRO 9",
   "METRO 12",
   "METRO 13",
   "METRO 14",
   "TRAIN J",
   "TRAIN L"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc Monceau",
   "Jardins des Champs-Élysées",
   "Jardin de l’Hôtel Salomon de Rothschild"
  ],
  "jardins": 0,
  "voisines": [
   "Paris 17e",
   "Paris 9e",
   "Paris 7e",
   "Paris 1er"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-9": {
  "slug": "paris-9",
  "nom": "Paris 9e",
  "paris": true,
  "population": 57271,
  "surfaceKm2": 2.18,
  "densite": 26298,
  "cp": [
   "75009"
  ],
  "distParis": 2.8,
  "direction": "nord",
  "gares": [
   "Pigalle",
   "Grands Boulevards",
   "Poissonnière",
   "Saint-Georges",
   "Haussmann-Saint-Lazare",
   "Blanche",
   "Havre-Caumartin",
   "Cadet",
   "Anvers",
   "Notre-Dame-de-Lorette",
   "Trinité d'Estienne d'Orves",
   "Auber",
   "Chaussée d'Antin - La Fayette",
   "Richelieu-Drouot",
   "Opéra",
   "Liège",
   "Saint-Lazare",
   "Le Peletier"
  ],
  "lignes": [
   "RER A",
   "RER E",
   "METRO 2",
   "METRO 3",
   "METRO 7",
   "METRO 8",
   "METRO 9",
   "METRO 12",
   "METRO 13"
  ],
  "eaux": [],
  "verts": [
   "Square d'Anvers - Jean-Claude-Carrière",
   "Square Montholon",
   "Square d'Estienne d'Orves"
  ],
  "jardins": 0,
  "voisines": [
   "Paris 2e",
   "Paris 1er",
   "Paris 10e",
   "Paris 18e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-15": {
  "slug": "paris-15",
  "nom": "Paris 15e",
  "paris": true,
  "population": 229713,
  "surfaceKm2": 8.47,
  "densite": 27132,
  "cp": [
   "75015"
  ],
  "distParis": 4.3,
  "direction": "ouest",
  "gares": [
   "La Motte Picquet-Grenelle",
   "Montparnasse-Bienvenüe",
   "Porte de Versailles",
   "Pont du Garigliano",
   "Commerce",
   "Falguière",
   "Montparnasse",
   "Javel",
   "Desnouettes",
   "Henri Farman",
   "Suzanne Lenglen",
   "Félix Faure",
   "Champ de Mars",
   "Porte d'Issy",
   "Lourmel",
   "Bir-Hakeim",
   "Dupleix",
   "Cambronne",
   "Sèvres-Lecourbe",
   "Pasteur",
   "Javel - André Citroën",
   "Boucicaut",
   "Ségur",
   "Volontaires",
   "Convention",
   "Vaugirard",
   "Balard",
   "Georges Brassens",
   "Brancion",
   "Avenue Émile Zola",
   "Charles Michels"
  ],
  "lignes": [
   "RER C",
   "METRO 6",
   "METRO 8",
   "METRO 10",
   "METRO 12",
   "METRO 13",
   "TRAM 2",
   "TRAM 3a",
   "TRAIN N"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc Suzanne Lenglen",
   "Parc André Citroën",
   "Parc Georges Brassens"
  ],
  "jardins": 6,
  "voisines": [
   "Paris 7e",
   "Vanves",
   "Paris 14e",
   "Malakoff"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-16": {
  "slug": "paris-16",
  "nom": "Paris 16e",
  "paris": true,
  "population": 159386,
  "surfaceKm2": 16.4,
  "densite": 9720,
  "cp": [
   "75016",
   "75116"
  ],
  "distParis": 6.4,
  "direction": "ouest",
  "gares": [
   "Michel Ange-Molitor",
   "Iéna",
   "Porte de Saint-Cloud",
   "Rue de la Pompe",
   "Kléber",
   "Anna de Noailles​",
   "Michel Ange-Auteuil",
   "Ranelagh",
   "Victor Hugo",
   "Trocadéro",
   "Avenue Foch",
   "Jasmin",
   "Exelmans",
   "Mirabeau",
   "Boissière",
   "Porte Dauphine",
   "Boulainvilliers",
   "Avenue Henri Martin",
   "Église d'Auteuil",
   "Chardon Lagache",
   "Porte d'Auteuil",
   "Passy",
   "La Muette",
   "Avenue du Président Kennedy"
  ],
  "lignes": [
   "RER C",
   "METRO 2",
   "METRO 6",
   "METRO 9",
   "METRO 10",
   "TRAM 3b"
  ],
  "eaux": [
   "La Seine",
   "Petit Bras de la Seine"
  ],
  "verts": [
   "Bois de Boulogne",
   "Parc de Bagatelle",
   "Jardin du Ranelagh"
  ],
  "jardins": 3,
  "voisines": [
   "Boulogne-Billancourt",
   "Paris 15e",
   "Neuilly-sur-Seine",
   "Puteaux"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-17": {
  "slug": "paris-17",
  "nom": "Paris 17e",
  "paris": true,
  "population": 159212,
  "surfaceKm2": 5.66,
  "densite": 28124,
  "cp": [
   "75017"
  ],
  "distParis": 5,
  "direction": "nord-ouest",
  "gares": [
   "Porte de Clichy",
   "Place de Clichy",
   "Porte Maillot",
   "Argentine",
   "Brochant",
   "Épinettes - Pouchet",
   "Pont Cardinet",
   "Wagram",
   "Honoré de Balzac",
   "Pereire-Levallois",
   "Porte de Champerret​",
   "Porte d'Asnières",
   "Square Sainte-Odile​",
   "Thérèse Pierre​",
   "Pont-Cardinet",
   "Charles De Gaulle-Étoile",
   "Porte de Champerret",
   "Malesherbes",
   "Anny Flore​",
   "Neuilly Porte Maillot"
  ],
  "lignes": [
   "RER A",
   "RER C",
   "RER E",
   "METRO 1",
   "METRO 3",
   "METRO 6",
   "METRO 13",
   "METRO 14",
   "TRAM 3b",
   "TRAIN L"
  ],
  "eaux": [],
  "verts": [
   "Parc Clichy-Batignolles Martin Luther King",
   "Square des Batignolles",
   "Jardin Hans et Sophie Scholl"
  ],
  "jardins": 1,
  "voisines": [
   "Levallois-Perret",
   "Paris 8e",
   "Clichy",
   "Paris 9e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-18": {
  "slug": "paris-18",
  "nom": "Paris 18e",
  "paris": true,
  "population": 183127,
  "surfaceKm2": 5.99,
  "densite": 30565,
  "cp": [
   "75018"
  ],
  "distParis": 4.3,
  "direction": "nord",
  "gares": [
   "Porte de Saint-Ouen",
   "Simplon",
   "Jules Joffrin",
   "Colette Besson",
   "Diane Arbus",
   "Porte de Clignancourt",
   "Place de Clichy",
   "Marcadet-Poissonniers",
   "Marx Dormoy",
   "Lamarck-Caulaincourt",
   "Angélique Compoint",
   "Abbesses",
   "Porte de la Chapelle",
   "La Fourche",
   "Funiculaire Montmartre Station Haute",
   "Guy Môquet",
   "Château Rouge",
   "Porte d'Aubervilliers",
   "Funiculaire Montmartre Station Basse"
  ],
  "lignes": [
   "FUNICULAIRE MONTMARTRE",
   "METRO 2",
   "METRO 4",
   "METRO 12",
   "METRO 13",
   "TRAM 3b"
  ],
  "eaux": [],
  "verts": [
   "Les Jardins d'Éole",
   "Parc Chapelle-Charbon",
   "Square Louise Michel"
  ],
  "jardins": 4,
  "voisines": [
   "Paris 9e",
   "Paris 10e",
   "Saint-Ouen-sur-Seine",
   "Paris 2e"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "paris-19": {
  "slug": "paris-19",
  "nom": "Paris 19e",
  "paris": true,
  "population": 178691,
  "surfaceKm2": 6.78,
  "densite": 26356,
  "cp": [
   "75019"
  ],
  "distParis": 4.7,
  "direction": "nord-est",
  "gares": [
   "Laumière",
   "Stalingrad",
   "Porte de la Villette",
   "Rosa Parks",
   "Porte des Lilas",
   "Jaurès",
   "Danube",
   "Porte de Pantin",
   "Crimée",
   "Delphine Seyrig",
   "Ella Fitzgerald",
   "Canal Saint-Denis",
   "Belleville",
   "Place des Fêtes",
   "Ourcq",
   "Colonel Fabien",
   "Butte du Chapeau Rouge",
   "Pré Saint-Gervais",
   "Bolivar",
   "Buttes-Chaumont",
   "Riquet",
   "Corentin Cariou",
   "Botzaris",
   "Hôpital Robert Debré"
  ],
  "lignes": [
   "RER E",
   "METRO 2",
   "METRO 5",
   "METRO 7",
   "METRO 7bis",
   "METRO 11",
   "TRAM 3b"
  ],
  "eaux": [
   "Canal Saint-Denis",
   "Canal de l'Ourcq",
   "Canal Saint-Martin"
  ],
  "verts": [
   "Parc de la Villette",
   "Parc des Buttes-Chaumont",
   "Parc de la Butte du Chapeau Rouge"
  ],
  "jardins": 12,
  "voisines": [
   "Le Pré-Saint-Gervais",
   "Pantin",
   "Paris 10e",
   "Les Lilas"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "villecresnes": {
  "slug": "villecresnes",
  "nom": "Villecresnes",
  "paris": false,
  "population": 11647,
  "surfaceKm2": 5.62,
  "densite": 2072,
  "cp": [
   "94440"
  ],
  "distParis": 19.8,
  "direction": "sud-est",
  "gares": [],
  "lignes": [],
  "eaux": [
   "Le Réveillon"
  ],
  "verts": [
   "Parc Municipal de la Bibliothèque"
  ],
  "jardins": 1,
  "voisines": [
   "Mandres-les-Roses",
   "Marolles-en-Brie",
   "Boissy-Saint-Léger",
   "Yerres"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "mandres-les-roses": {
  "slug": "mandres-les-roses",
  "nom": "Mandres-les-Roses",
  "paris": false,
  "population": 4922,
  "surfaceKm2": 3.37,
  "densite": 1463,
  "cp": [
   "94520"
  ],
  "distParis": 21.8,
  "direction": "sud-est",
  "gares": [],
  "lignes": [],
  "eaux": [
   "L'Yerres"
  ],
  "verts": [
   "Parc Beauséjour",
   "Parc des Vinots"
  ],
  "jardins": 0,
  "voisines": [
   "Périgny",
   "Villecresnes",
   "Boussy-Saint-Antoine",
   "Épinay-sous-Sénart"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "perigny": {
  "slug": "perigny",
  "nom": "Périgny",
  "paris": false,
  "population": 2724,
  "surfaceKm2": 2.76,
  "densite": 987,
  "cp": [
   "94520"
  ],
  "distParis": 23.3,
  "direction": "sud-est",
  "gares": [],
  "lignes": [],
  "eaux": [
   "L'Yerres"
  ],
  "verts": [],
  "jardins": 0,
  "voisines": [
   "Mandres-les-Roses",
   "Varennes-Jarcy",
   "Boussy-Saint-Antoine",
   "Servon"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "marolles-en-brie": {
  "slug": "marolles-en-brie",
  "nom": "Marolles-en-Brie",
  "paris": false,
  "population": 4781,
  "surfaceKm2": 4.6,
  "densite": 1040,
  "cp": [
   "94440"
  ],
  "distParis": 19.6,
  "direction": "sud-est",
  "gares": [],
  "lignes": [],
  "eaux": [
   "Le Réveillon"
  ],
  "verts": [
   "Square Lucien Toulouse"
  ],
  "jardins": 0,
  "voisines": [
   "Santeny",
   "Boissy-Saint-Léger",
   "Villecresnes",
   "Mandres-les-Roses"
  ],
  "pinsHa": 3.6,
  "osm": true
 },
 "noiseau": {
  "slug": "noiseau",
  "nom": "Noiseau",
  "paris": false,
  "population": 4628,
  "surfaceKm2": 4.59,
  "densite": 1009,
  "cp": [
   "94880"
  ],
  "distParis": 17.4,
  "direction": "sud-est",
  "gares": [],
  "lignes": [],
  "eaux": [],
  "verts": [],
  "jardins": 0,
  "voisines": [
   "Sucy-en-Brie",
   "Ormesson-sur-Marne",
   "La Queue-en-Brie",
   "Chennevières-sur-Marne"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "la-queue-en-brie": {
  "slug": "la-queue-en-brie",
  "nom": "La Queue-en-Brie",
  "paris": false,
  "population": 12241,
  "surfaceKm2": 9.39,
  "densite": 1304,
  "cp": [
   "94510"
  ],
  "distParis": 19.2,
  "direction": "sud-est",
  "gares": [],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Parc des impressionnistes",
   "Parc de la mairie",
   "Square Jean Simon"
  ],
  "jardins": 4,
  "voisines": [
   "Noiseau",
   "Pontault-Combault",
   "Le Plessis-Trévise",
   "Chennevières-sur-Marne"
  ],
  "pinsHa": 2.6,
  "osm": true
 },
 "ormesson-sur-marne": {
  "slug": "ormesson-sur-marne",
  "nom": "Ormesson-sur-Marne",
  "paris": false,
  "population": 10977,
  "surfaceKm2": 3.43,
  "densite": 3197,
  "cp": [
   "94490"
  ],
  "distParis": 15.5,
  "direction": "sud-est",
  "gares": [],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Parc départemental du Morbras"
  ],
  "jardins": 0,
  "voisines": [
   "Chennevières-sur-Marne",
   "Noiseau",
   "Sucy-en-Brie",
   "Champigny-sur-Marne"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "saint-germain-en-laye": {
  "slug": "saint-germain-en-laye",
  "nom": "Saint-Germain-en-Laye",
  "paris": false,
  "population": 45931,
  "surfaceKm2": 53.09,
  "densite": 865,
  "cp": [
   "78100",
   "78112"
  ],
  "distParis": 19.9,
  "direction": "nord-ouest",
  "gares": [
   "Lisière Pereire",
   "Saint-Germain-en-Laye",
   "Achères-Grand-Cormier",
   "Fourqueux - Bel Air",
   "Camp des Loges"
  ],
  "lignes": [
   "RER A",
   "TRAM 13"
  ],
  "eaux": [],
  "verts": [
   "Forêt domaniale de Saint-Germain-en-Laye",
   "Domaine national de Saint-Germain-en-Laye",
   "Parc Forestier du Champs Millet"
  ],
  "jardins": 2,
  "voisines": [
   "Le Mesnil-le-Roi",
   "Montesson",
   "Maisons-Laffitte",
   "Le Pecq"
  ],
  "pinsHa": 66.8,
  "osm": true
 },
 "versailles": {
  "slug": "versailles",
  "nom": "Versailles",
  "paris": false,
  "population": 84095,
  "surfaceKm2": 26.15,
  "densite": 3216,
  "cp": [
   "78000"
  ],
  "distParis": 17.8,
  "direction": "ouest",
  "gares": [
   "Versailles-Chantiers",
   "Les Portes de Saint-Cyr",
   "Versailles Château",
   "Montreuil",
   "Versailles Rive Droite",
   "Porchefontaine",
   "Saint-Cyr"
  ],
  "lignes": [
   "RER C",
   "TRAM 13",
   "TRAIN L",
   "TRAIN N",
   "TRAIN U",
   "TRAIN V"
  ],
  "eaux": [],
  "verts": [
   "Forêt domaniale de Versailles",
   "Parc de Versailles",
   "Le jardin de Versailles"
  ],
  "jardins": 41,
  "voisines": [
   "Le Chesnay-Rocquencourt",
   "Buc",
   "Viroflay",
   "Saint-Cyr-l'École"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "neuilly-sur-seine": {
  "slug": "neuilly-sur-seine",
  "nom": "Neuilly-sur-Seine",
  "paris": false,
  "population": 59538,
  "surfaceKm2": 3.72,
  "densite": 16017,
  "cp": [
   "92200"
  ],
  "distParis": 7.2,
  "direction": "nord-ouest",
  "gares": [
   "Pont de Neuilly",
   "Les Sablons"
  ],
  "lignes": [
   "METRO 1"
  ],
  "eaux": [
   "La Seine",
   "Petit Bras de la Seine"
  ],
  "verts": [
   "Parc de la Folie Saint-James",
   "Square Daniel Rops",
   "Square Alfred Sisley"
  ],
  "jardins": 0,
  "voisines": [
   "Courbevoie",
   "Levallois-Perret",
   "Puteaux",
   "La Garenne-Colombes"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "saint-cloud": {
  "slug": "saint-cloud",
  "nom": "Saint-Cloud",
  "paris": false,
  "population": 29855,
  "surfaceKm2": 7.51,
  "densite": 3976,
  "cp": [
   "92210"
  ],
  "distParis": 10.8,
  "direction": "ouest",
  "gares": [
   "Saint-Cloud",
   "Les Coteaux",
   "Le Val d'Or",
   "Les Milons",
   "Parc de Saint-Cloud"
  ],
  "lignes": [
   "TRAM 2",
   "TRAIN L",
   "TRAIN U"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Domaine national de Saint-Cloud",
   "Jardin de l'Avre",
   "Jardin des Tourneroches"
  ],
  "jardins": 6,
  "voisines": [
   "Garches",
   "Sèvres",
   "Boulogne-Billancourt",
   "Vaucresson"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "sceaux": {
  "slug": "sceaux",
  "nom": "Sceaux",
  "paris": false,
  "population": 20884,
  "surfaceKm2": 3.6,
  "densite": 5805,
  "cp": [
   "92330"
  ],
  "distParis": 9.4,
  "direction": "sud-ouest",
  "gares": [
   "Sceaux",
   "Robinson"
  ],
  "lignes": [
   "RER B"
  ],
  "eaux": [],
  "verts": [
   "Parc de Sceaux",
   "Plaine de la Sibérie",
   "Jardin de la Ménagerie"
  ],
  "jardins": 2,
  "voisines": [
   "Bourg-la-Reine",
   "Fontenay-aux-Roses",
   "Bagneux",
   "Châtenay-Malabry"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "meudon": {
  "slug": "meudon",
  "nom": "Meudon",
  "paris": false,
  "population": 46334,
  "surfaceKm2": 9.94,
  "densite": 4660,
  "cp": [
   "92190",
   "92360"
  ],
  "distParis": 10.5,
  "direction": "sud-ouest",
  "gares": [
   "Meudon-sur-Seine",
   "Georges Millandy",
   "Bellevue",
   "Meudon-la-Forêt",
   "Meudon-Val-Fleury",
   "Meudon"
  ],
  "lignes": [
   "RER C",
   "TRAM 2",
   "TRAM 6",
   "TRAIN N"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Forêt domaniale de Meudon",
   "Parc de l'Observatoire",
   "Parc forestier du Tronchet"
  ],
  "jardins": 4,
  "voisines": [
   "Clamart",
   "Sèvres",
   "Chaville",
   "Vélizy-Villacoublay"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "ablon-sur-seine": {
  "slug": "ablon-sur-seine",
  "nom": "Ablon-sur-Seine",
  "paris": false,
  "population": 5988,
  "surfaceKm2": 1.14,
  "densite": 5245,
  "cp": [
   "94480"
  ],
  "distParis": 15.4,
  "direction": "sud",
  "gares": [
   "Ablon"
  ],
  "lignes": [
   "RER C"
  ],
  "eaux": [
   "La Seine",
   "Écluse n°9 d'Ablon"
  ],
  "verts": [
   "Parc des Sœurs",
   "Parc Dréher",
   "Parc Sully"
  ],
  "jardins": 0,
  "voisines": [
   "Villeneuve-le-Roi",
   "Orly",
   "Vigneux-sur-Seine",
   "Villeneuve-Saint-Georges"
  ],
  "pinsHa": 0,
  "osm": true
 },
 "rungis": {
  "slug": "rungis",
  "nom": "Rungis",
  "paris": false,
  "population": 5611,
  "surfaceKm2": 4.2,
  "densite": 1337,
  "cp": [
   "94150"
  ],
  "distParis": 11.5,
  "direction": "sud",
  "gares": [
   "La Fraternelle",
   "La Belle Épine",
   "Porte de Rungis",
   "Place de la Logistique",
   "Saarinen",
   "Robert Schuman",
   "Rungis-La Fraternelle"
  ],
  "lignes": [
   "RER C",
   "TRAM 7"
  ],
  "eaux": [],
  "verts": [
   "Parc du Château",
   "Square du Regard",
   "Parc de la Mairie d’Honneur"
  ],
  "jardins": 2,
  "voisines": [
   "Fresnes",
   "Chevilly-Larue",
   "Wissous",
   "Paray-Vieille-Poste"
  ],
  "pinsHa": 0,
  "osm": true
 }
}
