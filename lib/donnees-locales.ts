// Données locales par ville, générées automatiquement (ne pas modifier à la main).
// Sources : Insee via geo.api.gouv.fr (population, superficie, codes postaux), Île-de-France Mobilités (gares),
// OpenStreetMap (cours d'eau, espaces verts, jardins partagés), IGN BD Forêt V2 (forêts de pins).
export type DonneesLocales = {
  slug: string; nom: string; paris: boolean; population: number; surfaceKm2: number; densite: number
  cp: string[]; distParis: number; direction: string; gares: string[]; lignes: string[]
  eaux: string[]; verts: string[]; jardins: number; voisines: string[]; pinsHa: number; osm: boolean
  quartiers: string[] // noms de quartiers Insee (IRIS), via data.iledefrance.fr
  // Villes autour de Saint-Maurice : inventaire SRU 2025 (ministère du Logement) et commerces recensés sur OpenStreetMap
  sru?: { lls: number; taux: string } | null
  poi?: { resto: number; hotels: number; marches: string[]; commercesAlim: number }
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
  "osm": true,
  "quartiers": [
   "Adamville",
   "La Varenne",
   "Le Parc Saint-Maur",
   "Le Vieux Saint-Maur",
   "La Pie",
   "Les Mûriers"
  ],
  "sru": {
   "lls": 4121,
   "taux": "11,50%"
  },
  "poi": {
   "resto": 161,
   "hotels": 6,
   "marches": [
    "Marché Diderot",
    "Marché d'Adamville",
    "Marché des Mûriers",
    "Marché de La Varenne",
    "Marché du Vieux-Saint-Maur",
    "Marché des Marronniers",
    "Marché de Champignol"
   ],
   "commercesAlim": 68
  }
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
  "osm": true,
  "quartiers": [
   "Merlettes",
   "Lac Inférieur",
   "Ibis"
  ]
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
  "osm": true,
  "quartiers": [
   "Le Tir",
   "Napoléon",
   "Saint-Nicolas",
   "Charlemagne",
   "Les Côtes",
   "Marine"
  ]
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
  "osm": true,
  "quartiers": [
   "Chevry Neuveries",
   "Damiette Belleville",
   "Coudraies-Hacquinière-Abbaye",
   "Chevry Plaine",
   "Moulon-Vatonne-Centre",
   "Coupières Mérantaise"
  ]
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
  "osm": true,
  "quartiers": []
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
  "osm": true,
  "quartiers": [
   "Les Parclairs",
   "L'Orage",
   "Les Corluis",
   "Iris",
   "Le Thillard",
   "La Prairie de Nogent"
  ]
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
  "osm": true,
  "quartiers": [
   "Les Hauts de Nogent",
   "La Sous-Préfecture",
   "Boulevard de Strasbourg",
   "Place Leclerc",
   "Les Maréchaux",
   "Dagobert et Marie Curie"
  ],
  "sru": {
   "lls": 2812,
   "taux": "17,93%"
  },
  "poi": {
   "resto": 48,
   "hotels": 4,
   "marches": [
    "Marché Leclerc"
   ],
   "commercesAlim": 25
  }
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
  "osm": true,
  "quartiers": [
   "La Garenne",
   "Pépinière",
   "Ferber Leclerc",
   "Carnot",
   "Les Coteaux",
   "Centre Ancien"
  ]
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
  "osm": true,
  "quartiers": [
   "Le Plateau-Parc",
   "Berges-Noyers-Poil Vert",
   "Le Centre",
   "La Fosse Rouge",
   "La Cité Verte",
   "Gare Varennes Zone Industrielle"
  ]
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
  "osm": true,
  "quartiers": []
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
  "osm": true,
  "quartiers": [
   "Auber",
   "Rabelais Commune de Paris",
   "Dalou",
   "La Petite Saussaie Commune de Paris",
   "Ferme Sud",
   "Balzac"
  ],
  "sru": {
   "lls": 15888,
   "taux": "43,59%"
  },
  "poi": {
   "resto": 77,
   "hotels": 4,
   "marches": [
    "Marché du Centre"
   ],
   "commercesAlim": 46
  }
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
  "osm": true,
  "quartiers": [
   "Palais-Grand Pavois",
   "La Brèche",
   "Montaigut Université",
   "Port-Source",
   "La Habette",
   "La Croix des Mèches"
  ],
  "sru": {
   "lls": 16773,
   "taux": "46,96%"
  },
  "poi": {
   "resto": 108,
   "hotels": 6,
   "marches": [
    "Marché Créteil village"
   ],
   "commercesAlim": 55
  }
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
  "osm": true,
  "quartiers": [
   "Quatre Cités",
   "Bois l'Abbé",
   "Cœuilly",
   "Tremblay",
   "Plant",
   "Mordacs"
  ]
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
  "osm": true,
  "quartiers": [
   "Cité Pierre et Marie Curie",
   "Fort",
   "Petit Ivry Sud",
   "Gagarine",
   "Monmousseau",
   "Ivry Port Nord"
  ],
  "sru": {
   "lls": 12535,
   "taux": "44,15%"
  },
  "poi": {
   "resto": 150,
   "hotels": 19,
   "marches": [],
   "commercesAlim": 48
  }
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
  "osm": true,
  "quartiers": [
   "Centre Vert de Maison",
   "Alfort",
   "Charentonneau",
   "Planètes"
  ],
  "sru": {
   "lls": 6333,
   "taux": "25,24%"
  },
  "poi": {
   "resto": 62,
   "hotels": 6,
   "marches": [
    "Marché du Centre",
    "Marché de Charentonneau"
   ],
   "commercesAlim": 45
  }
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
  "osm": true,
  "quartiers": [
   "Le Village",
   "Les Larris",
   "Bois Cadet",
   "Roublot",
   "Parapluies",
   "Jean Zay"
  ],
  "sru": {
   "lls": 7903,
   "taux": "34,93%"
  },
  "poi": {
   "resto": 78,
   "hotels": 3,
   "marches": [
    "Marché Moreau David"
   ],
   "commercesAlim": 34
  }
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
  "osm": true,
  "quartiers": [
   "Hautes Bruyères",
   "Lion d'Or",
   "Esselières",
   "Guipons",
   "République",
   "Lebon"
  ]
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
  "osm": true,
  "quartiers": ["Centre Nord", "Centre Sud", "Est", "Ouest"],
  "sru": {
   "lls": 3233,
   "taux": "13,17%"
  },
  "poi": {
   "resto": 128,
   "hotels": 10,
   "marches": [
    "Marché de la Place Carnot",
    "Marché de la Rue de Fontenay",
    "Marché de la place Diderot"
   ],
   "commercesAlim": 47
  }
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
  "osm": true,
  "quartiers": [
   "Zola Carnot",
   "Marché Guesde",
   "Jardin Val de Seine",
   "Carnot Petit Pont Alouettes",
   "Diderot Louis Blanc",
   "Tony Garnier Soladier"
  ],
  "sru": {
   "lls": 8408,
   "taux": "40,49%"
  },
  "poi": {
   "resto": 46,
   "hotels": 5,
   "marches": [
    "Marché"
   ],
   "commercesAlim": 31
  }
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
  "osm": true,
  "quartiers": [
   "Gondoles Sud I",
   "Port",
   "Parc Maurice-Thorez",
   "Centre II",
   "Parc Prairie II",
   "Centre I"
  ]
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
  "osm": true,
  "quartiers": [
   "Les Closeaux-Les Martinets",
   "Les Coquettes",
   "Les Plantes",
   "Barnufles",
   "Hauts Fossés-Esselières-Sorières",
   "Les Périchets"
  ]
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
  "osm": true,
  "quartiers": [
   "Carrières",
   "Valmy",
   "Gabrielle Leclerc",
   "Plateau",
   "Franges du Bois de Vincennes",
   "Conflans"
  ],
  "sru": {
   "lls": 3692,
   "taux": "25,83%"
  },
  "poi": {
   "resto": 52,
   "hotels": 3,
   "marches": [],
   "commercesAlim": 23
  }
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
  "osm": true,
  "quartiers": [
   "Plateau",
   "Pont",
   "Écluse-Gravelle-Panoramis",
   "Centre et Bras de Marne"
  ],
  "sru": {
   "lls": 1572,
   "taux": "25,55%"
  },
  "poi": {
   "resto": 11,
   "hotels": 2,
   "marches": [
    "Marché Émile Bertrand"
   ],
   "commercesAlim": 5
  }
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
  "osm": true,
  "quartiers": [
   "Les Baudemons",
   "La Prévoté",
   "La Belle Épine",
   "Le Martray",
   "Les Néfliers",
   "Le Fossé Bazin"
  ]
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
  "osm": true,
  "quartiers": [
   "La Plaine",
   "Grange-Ory Lumières",
   "Coteau",
   "Prairie",
   "Pont Royal",
   "Cité Jardins"
  ]
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
  "osm": true,
  "quartiers": [
   "Robert Schumann",
   "Sellier",
   "Bernard de Palissy",
   "Victor Hugo",
   "Gare Triage SNCF",
   "Secteur Valenton"
  ]
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
  "osm": true,
  "quartiers": [
   "Petit Robinson",
   "Jardin Parisien",
   "Les Blondeaux",
   "Lallier P. Hochart",
   "La Vallée aux Renards"
  ]
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
  "osm": true,
  "quartiers": [
   "Le Bois de Gaumont",
   "Les Boutareines",
   "Les Stades",
   "Les Luats",
   "Les Perroquets",
   "Les Portes de Villiers"
  ]
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
  "osm": true,
  "quartiers": [
   "Domaine Pénitentiaire",
   "Fosse aux Loups",
   "Fleurs-Pasteur",
   "Peupleraie",
   "Bergonie-Frères Lumière",
   "Vallée aux Renards"
  ]
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
  "osm": true,
  "quartiers": [
   "Les Candies",
   "Les Orchidées",
   "Les Neufs Saulets",
   "Les Varennes",
   "Les Grands Champs",
   "Saint-Martin"
  ]
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
  "osm": true,
  "quartiers": [
   "Nouvelet-Les Saules",
   "Parc de la Cloche",
   "Carrières-Sentiers",
   "Gazier Navigateurs",
   "Pierre au Prêtre",
   "Vieil Orly-Centre Ville"
  ]
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
  "osm": true,
  "quartiers": [
   "Joliot-Curie",
   "Laplace",
   "Jean-Macé",
   "Jules Ferry",
   "Barbusse"
  ]
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
  "osm": true,
  "quartiers": [
   "Saint-Michel",
   "Daumesnil",
   "La Pelouse",
   "Charles de Gaulle",
   "Saint-Louis",
   "Libération"
  ],
  "sru": {
   "lls": 1423,
   "taux": "14,00%"
  },
  "poi": {
   "resto": 41,
   "hotels": 2,
   "marches": [
    "Marché de la Tourelle"
   ],
   "commercesAlim": 23
  }
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
  "osm": true,
  "quartiers": [
   "Val d'Ablon et Zone Industrielle",
   "La Grusie",
   "Faisanderie Bas et Gare",
   "Haut Pays",
   "Faisanderie Haut",
   "Bord de l'Eau et Zone Industrielle"
  ]
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
  "osm": true,
  "quartiers": [
   "Oudinot",
   "Moutier",
   "Môquet",
   "Péri",
   "Platanes",
   "Vautier"
  ],
  "sru": {
   "lls": 2216,
   "taux": "25,04%"
  },
  "poi": {
   "resto": 19,
   "hotels": 1,
   "marches": [],
   "commercesAlim": 11
  }
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
  "osm": true,
  "quartiers": [
   "Saint-Antoine",
   "Saint-Pierre-Kiffer",
   "Le Val Roger-Parc de la Lande",
   "Marbeau-Cœuilly",
   "Saint-Martin",
   "Le Centre"
  ]
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
  "osm": true,
  "quartiers": [
   "Larue",
   "Bretagne",
   "Sorbiers",
   "La Guinet",
   "Saussaie"
  ]
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
  "osm": true,
  "quartiers": [
   "Le Moulin",
   "Bois l'Abbé 2 Plaine des Bordes",
   "Hauts de Chennevières Pince-Vent",
   "Bois l'Abbé",
   "Le Fort-La Maillarde",
   "Coteaux"
  ]
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
  "osm": true,
  "quartiers": [
   "Plateau",
   "Reine Blanche",
   "Chaperon Vert",
   "Victor Hugo"
  ]
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
  "osm": true,
  "quartiers": [
   "Saint-Exupéry",
   "République",
   "Centre Ancien",
   "Haut Bonneuil",
   "Fosse aux Moines",
   "Salvador Allende"
  ]
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
  "osm": true,
  "quartiers": [
   "Savreau",
   "Les Hautes Varennes",
   "Le Centre",
   "Bois Clary",
   "Rostand",
   "Prévert"
  ]
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
  "osm": true,
  "quartiers": [
   "Val Pompadour-L'Étang étendu",
   "Lutèce-Bergerie",
   "Vignes-Coteau",
   "Pologne-Saint-Martin"
  ]
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
  "osm": true,
  "quartiers": [
   "Picpus",
   "Bel-Air",
   "Quinze-Vingts",
   "Bercy"
  ],
  "sru": null,
  "poi": {
   "resto": 626,
   "hotels": 95,
   "marches": [
    "Marché Ledru-Rollin",
    "Marché Daumesnil",
    "Marché Bercy",
    "Marché Porte-Dorée",
    "Marché Saint-Éloi",
    "Marché Cours de Vincennes",
    "Marché d'Aligre",
    "Marché Beauvau"
   ],
   "commercesAlim": 136
  }
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
  "osm": true,
  "quartiers": [
   "Maison Blanche",
   "Croulebarbe",
   "Salpêtrière"
  ]
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
  "osm": true,
  "quartiers": [
   "Charonne",
   "Saint-Fargeau",
   "Père Lachaise",
   "Belleville"
  ]
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
  "osm": true,
  "quartiers": [
   "Roquette",
   "Folie Méricourt",
   "Saint-Ambroise",
   "Sainte-Marguerite"
  ]
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
  "osm": true,
  "quartiers": [
   "Val de Grâce",
   "Jardin des Plantes",
   "Saint-Victor",
   "Sorbonne"
  ]
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
  "osm": true,
  "quartiers": [
   "Arsenal",
   "Saint-Gervais",
   "Saint-Merri",
   "Notre-Dame"
  ]
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
  "osm": true,
  "quartiers": [
   "Arts et Métiers",
   "Les Archives",
   "Sainte-Avoye",
   "Enfants Rouges"
  ]
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
  "osm": true,
  "quartiers": [
   "Plaisance",
   "Petit Montrouge",
   "Montparnasse",
   "Parc de Montsouris"
  ]
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
  "osm": true,
  "quartiers": [
   "Notre-Dame des Champs",
   "Odéon",
   "Monnaie",
   "Saint-Germain des Prés"
  ]
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
  "osm": true,
  "quartiers": [
   "Hôpital Saint-Louis",
   "Porte Saint-Martin",
   "Saint-Vincent de Paul",
   "Porte Saint-Denis"
  ]
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
  "osm": true,
  "quartiers": [
   "Les Princes Marmottan",
   "République Point du Jour",
   "Jean-Baptiste Clément",
   "Mail Maréchal Juin",
   "Trapèze",
   "Route de la Reine"
  ]
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
  "osm": true,
  "quartiers": [
   "Zilina Henri Martin",
   "Damades La Source",
   "Hôtel de Ville",
   "Komarov",
   "Haut Plateau",
   "Demoiselles d'Avignon"
  ]
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
  "osm": true,
  "quartiers": [
   "III",
   "Grésillons I",
   "Magenta II",
   "Mairie IV",
   "Mairie I",
   "Renoir III"
  ]
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
  "osm": true,
  "quartiers": [
   "Henri Barbusse Sud",
   "Moslard-Agriculture",
   "Stade Berthelot",
   "Jeanne d'Arc-Salle des Fêtes",
   "Cerisiers",
   "Canibouts-Champy"
  ]
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
  "osm": true,
  "quartiers": [
   "Franklin",
   "Jean Blot",
   "Fallet",
   "Montagne",
   "Visien",
   "Schweitzer"
  ]
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
  "osm": true,
  "quartiers": [
   "Plateau",
   "Plaine-Gare",
   "Buzenval",
   "Fouilleuse",
   "Closeaux",
   "Martinets"
  ]
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
  "osm": true,
  "quartiers": [
   "Eiffel",
   "Trézel",
   "Villiers-Danton",
   "Villiers-L. Michel",
   "Wilson-Rivay",
   "Henri Barbusse"
  ]
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
  "osm": true,
  "quartiers": [
   "Colombiers",
   "Fort Gardes Mobiles",
   "Verdi",
   "Palais des Congrès Mail Menand",
   "Parc Henri Barbusse",
   "Les Varennes Foucher Lepelletier"
  ]
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
  "osm": true,
  "quartiers": [
   "SNCF",
   "Teinturiers",
   "Morel",
   "Chance-Milly",
   "Palloy-Paymal",
   "Pasteur-Gesnouin"
  ]
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
  "osm": true,
  "quartiers": [
   "Les Godets",
   "Guillebaud",
   "Fontaine Mouton",
   "La Fontaine",
   "Zone d'Activités",
   "Chemin de Fer"
  ]
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
  "osm": true,
  "quartiers": [
   "Les Halles",
   "Saint-Germain l'Auxerrois",
   "Palais Royal",
   "Place Vendôme"
  ]
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
  "osm": true,
  "quartiers": [
   "Bonne Nouvelle",
   "Mail",
   "Vivienne"
  ]
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
  "osm": true,
  "quartiers": [
   "Gros Caillou",
   "Saint-Thomas d'Aquin",
   "École Militaire",
   "Invalides"
  ]
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
  "osm": true,
  "quartiers": [
   "Europe",
   "Faubourg du Roule",
   "Champs Élysées"
  ]
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
  "osm": true,
  "quartiers": [
   "Saint-Georges",
   "Rochechouart",
   "Faubourg Montmartre"
  ]
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
  "osm": true,
  "quartiers": [
   "Saint-Lambert",
   "Javel",
   "Grenelle",
   "Necker"
  ]
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
  "osm": true,
  "quartiers": [
   "Auteuil",
   "Muette",
   "Porte Dauphine",
   "Chaillot"
  ]
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
  "osm": true,
  "quartiers": [
   "Épinettes",
   "Batignolles",
   "Plaine Monceau",
   "Ternes"
  ]
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
  "osm": true,
  "quartiers": [
   "Grandes Carrières",
   "Clignancourt",
   "Goutte d'Or",
   "Chapelle"
  ]
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
  "osm": true,
  "quartiers": [
   "Amérique",
   "Villette",
   "Combat",
   "Pont de Flandre"
  ]
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
  "osm": true,
  "quartiers": [
   "Le Réveillon",
   "Grosbois",
   "Les Sablons",
   "La Gare"
  ]
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
  "osm": true,
  "quartiers": []
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
  "osm": true,
  "quartiers": []
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
  "osm": true,
  "quartiers": [
   "Vieux Village-Murs du Parc",
   "La Butte du Berger"
  ]
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
  "osm": true,
  "quartiers": []
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
  "osm": true,
  "quartiers": [
   "Les Marnières",
   "Bois des Friches",
   "L'Hermitage",
   "Village Pierre Lais",
   "Les Bordes Hôtel de Ville"
  ]
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
  "osm": true,
  "quartiers": []
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
  "osm": true,
  "quartiers": [
   "Iris"
  ]
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
  "osm": true,
  "quartiers": [
   "Chantiers",
   "Notre-Dame",
   "Montreuil",
   "Clagny",
   "Jussieu",
   "Saint-Louis"
  ]
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
  "osm": true,
  "quartiers": [
   "Parc de Neuilly",
   "Plaine des Sablons",
   "Saint-James Madrid",
   "Charles Laffitte",
   "Saint-James"
  ]
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
  "osm": true,
  "quartiers": [
   "Montretout",
   "Val d'Or",
   "Coteaux",
   "Pasteur",
   "Fouilleuse"
  ]
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
  "osm": true,
  "quartiers": [
   "Blagis",
   "Robinson",
   "Chéneaux Sablons",
   "Musiciens-Roosevelt",
   "Vieux Sceaux-Curie",
   "Desgranges-Fontenay"
  ]
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
  "osm": true,
  "quartiers": [
   "Meudon la Forêt",
   "Le Centre",
   "Val Fleury",
   "Bas Meudon",
   "Bellevue",
   "Forêt Domaniale"
  ]
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
  "osm": true,
  "quartiers": []
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
  "osm": true,
  "quartiers": [
   "Les Antes",
   "Rungis Ville"
  ]
 },
 "clamart": {
  "slug": "clamart",
  "nom": "Clamart",
  "paris": false,
  "population": 58576,
  "surfaceKm2": 8.76,
  "densite": 6687,
  "cp": [
   "92140"
  ],
  "distParis": 9.6,
  "direction": "sud-ouest",
  "gares": [
   "Clamart",
   "Hôpital Béclère",
   "Georges Pompidou",
   "Soleil Levant",
   "Mail de la Plaine",
   "Pavé Blanc",
   "Jardin Parisien"
  ],
  "lignes": [
   "TRAM 6",
   "TRAM 10",
   "TRAIN N"
  ],
  "eaux": [],
  "verts": [
   "Bois de Verrières",
   "Parc de la Maison Blanche",
   "Parc Beauséjour"
  ],
  "jardins": 1,
  "voisines": [
   "Le Plessis-Robinson",
   "Meudon",
   "Fontenay-aux-Roses",
   "Châtillon"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Petit Clamart",
   "La Gare",
   "Percy",
   "Jardin Parisien"
  ]
 },
 "gennevilliers": {
  "slug": "gennevilliers",
  "nom": "Gennevilliers",
  "paris": false,
  "population": 50979,
  "surfaceKm2": 11.63,
  "densite": 4384,
  "cp": [
   "92230"
  ],
  "distParis": 9.9,
  "direction": "nord-ouest",
  "gares": [
   "Le Luth",
   "Les Grésillons",
   "Timbaud",
   "Les Agnettes",
   "Les Courtilles",
   "Gennevilliers",
   "Le Village",
   "Parc des Chanteraines"
  ],
  "lignes": [
   "RER C",
   "METRO 13",
   "TRAM 1"
  ],
  "eaux": [
   "La Seine",
   "Petit bras de la Seine",
   "Chenal d'Entrée Ouest"
  ],
  "verts": [
   "Parc des Chanteraines",
   "Parc des Sévines",
   "Parc des Sports"
  ],
  "jardins": 5,
  "voisines": [
   "Asnières-sur-Seine",
   "Bois-Colombes",
   "Villeneuve-la-Garenne",
   "L'Île-Saint-Denis"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Grésillons",
   "Fossé de l'Aumône",
   "Village Chandon",
   "Luth",
   "Agnettes"
  ]
 },
 "suresnes": {
  "slug": "suresnes",
  "nom": "Suresnes",
  "paris": false,
  "population": 48956,
  "surfaceKm2": 3.8,
  "densite": 12895,
  "cp": [
   "92150"
  ],
  "distParis": 9.8,
  "direction": "ouest",
  "gares": [
   "Suresnes-Mont-Valérien",
   "Belvédère",
   "Suresnes-Longchamp"
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
   "Parc du Mont-Valérien",
   "Parc du Château",
   "Square Léon Bourgeois"
  ],
  "jardins": 2,
  "voisines": [
   "Puteaux",
   "Rueil-Malmaison",
   "Nanterre",
   "Saint-Cloud"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Cité Jardins",
   "Plateau Ouest",
   "Carnot Gambetta",
   "Plateau Nord",
   "République",
   "Bas de Suresnes"
  ]
 },
 "montrouge": {
  "slug": "montrouge",
  "nom": "Montrouge",
  "paris": false,
  "population": 46324,
  "surfaceKm2": 2.07,
  "densite": 22372,
  "cp": [
   "92120"
  ],
  "distParis": 4.8,
  "direction": "sud-ouest",
  "gares": [
   "Mairie de Montrouge"
  ],
  "lignes": [
   "METRO 4"
  ],
  "eaux": [],
  "verts": [
   "Parc Jean-Loup Metton",
   "Parc Renaudel",
   "Mini-Forêt Miyawaki"
  ],
  "jardins": 6,
  "voisines": [
   "Paris 14e",
   "Malakoff",
   "Arcueil",
   "Gentilly"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Châtillon-Montrouge",
   "Dispensaire",
   "Stade",
   "Jean Jaurès",
   "Jules Ferry",
   "Piscine"
  ]
 },
 "bagneux": {
  "slug": "bagneux",
  "nom": "Bagneux",
  "paris": false,
  "population": 44572,
  "surfaceKm2": 4.18,
  "densite": 10653,
  "cp": [
   "92220"
  ],
  "distParis": 6.8,
  "direction": "sud-ouest",
  "gares": [
   "Barbara",
   "Bagneux - Lucie Aubrac"
  ],
  "lignes": [
   "METRO 4"
  ],
  "eaux": [],
  "verts": [
   "Parc François Mitterrand",
   "Parc Richelieu",
   "Parc Gabriel Cosson"
  ],
  "jardins": 2,
  "voisines": [
   "Châtillon",
   "Cachan",
   "Fontenay-aux-Roses",
   "Arcueil"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "puteaux": {
  "slug": "puteaux",
  "nom": "Puteaux",
  "paris": false,
  "population": 44002,
  "surfaceKm2": 3.19,
  "densite": 13794,
  "cp": [
   "92800"
  ],
  "distParis": 8.8,
  "direction": "ouest",
  "gares": [
   "Puteaux",
   "La Défense",
   "Esplanade de la Défense"
  ],
  "lignes": [
   "RER A",
   "RER E",
   "METRO 1",
   "TRAM 2",
   "TRAIN L",
   "TRAIN U"
  ],
  "eaux": [
   "La Seine",
   "Petit Bras de la Seine"
  ],
  "verts": [
   "Parc Lebaudy",
   "Jardin de la rose des vents",
   "Parc Offenbach"
  ],
  "jardins": 7,
  "voisines": [
   "Suresnes",
   "Neuilly-sur-Seine",
   "Courbevoie",
   "La Garenne-Colombes"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Wallace",
   "Seine",
   "Wilson",
   "République",
   "Bergère Nord",
   "Agora"
  ]
 },
 "chatillon": {
  "slug": "chatillon",
  "nom": "Châtillon",
  "paris": false,
  "population": 36705,
  "surfaceKm2": 2.92,
  "densite": 12554,
  "cp": [
   "92320"
  ],
  "distParis": 7.1,
  "direction": "sud-ouest",
  "gares": [
   "Division Leclerc",
   "Parc André Malraux",
   "Centre de Châtillon",
   "Châtillon-Montrouge",
   "Vauban"
  ],
  "lignes": [
   "METRO 13",
   "TRAM 6"
  ],
  "eaux": [],
  "verts": [
   "Parc André Malraux",
   "Parc Henri Matisse",
   "Parc des Pierrettes"
  ],
  "jardins": 0,
  "voisines": [
   "Fontenay-aux-Roses",
   "Malakoff",
   "Bagneux",
   "Vanves"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Sablons",
   "Stade",
   "Parc",
   "Guynemer",
   "Ponceau",
   "Gatinot"
  ]
 },
 "chatenay-malabry": {
  "slug": "chatenay-malabry",
  "nom": "Châtenay-Malabry",
  "paris": false,
  "population": 35825,
  "surfaceKm2": 6.37,
  "densite": 5628,
  "cp": [
   "92290"
  ],
  "distParis": 11.4,
  "direction": "sud-ouest",
  "gares": [
   "Malabry",
   "Cité-Jardin",
   "Petit-Châtenay",
   "Les Peintres",
   "LaVallée",
   "Vallée aux Loups",
   "Théâtre La Piscine"
  ],
  "lignes": [
   "TRAM 10"
  ],
  "eaux": [],
  "verts": [
   "Parc Boisé du Parc de la Vallée-aux-Loups",
   "Parc de la Roseraie",
   "Parc Boisé"
  ],
  "jardins": 0,
  "voisines": [
   "Le Plessis-Robinson",
   "Verrières-le-Buisson",
   "Sceaux",
   "Clamart"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Butte Rouge",
   "Division Leclerc",
   "Aulnay",
   "Faulotte",
   "Malabry",
   "Voltaire"
  ]
 },

 "evry-courcouronnes": {
  "slug": "evry-courcouronnes",
  "nom": "Évry-Courcouronnes",
  "paris": false,
  "population": 66919,
  "surfaceKm2": 13.09,
  "densite": 5112,
  "cp": [
   "91000",
   "91080"
  ],
  "distParis": 26,
  "direction": "sud",
  "gares": [
   "Le Bras de Fer",
   "Évry - Courcouronnes",
   "Évry Val de Seine",
   "Traité de Rome",
   "Bois Briard",
   "Évry-Courcouronnes T12"
  ],
  "lignes": [
   "RER D"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc des Coquibus",
   "Parc Henri Fabre",
   "Parc des Loges",
   "La pinède",
   "Parc du Rondeau"
  ],
  "jardins": 0,
  "voisines": [
   "Ris-Orangis",
   "Corbeil-Essonnes",
   "Lisses",
   "Bondoufle"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Courcouronnes",
   "Droits de l'Homme",
   "Le Canal",
   "Les Epinettes",
   "Les Grands Coquibus",
   "Champtier du Coq"
  ]
 },
 "corbeil-essonnes": {
  "slug": "corbeil-essonnes",
  "nom": "Corbeil-Essonnes",
  "paris": false,
  "population": 54471,
  "surfaceKm2": 11.02,
  "densite": 4943,
  "cp": [
   "91100"
  ],
  "distParis": 30,
  "direction": "sud",
  "gares": [
   "Corbeil-Essonnes",
   "Moulin Galant",
   "Essonnes Robinson"
  ],
  "lignes": [
   "RER D"
  ],
  "eaux": [
   "L'Essonne",
   "La Seine"
  ],
  "verts": [
   "Parc Aimé Césaire",
   "Square Dalimier",
   "Parc Chantemerle",
   "Square Aristide Briand",
   "Square Saint-Léonard"
  ],
  "jardins": 0,
  "voisines": [
   "Évry-Courcouronnes",
   "Saint-Germain-lès-Corbeil",
   "Villabé",
   "Le Coudray-Montceaux"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "massy": {
  "slug": "massy",
  "nom": "Massy",
  "paris": false,
  "population": 51729,
  "surfaceKm2": 9.4,
  "densite": 5503,
  "cp": [
   "91300"
  ],
  "distParis": 15.7,
  "direction": "sud-ouest",
  "gares": [
   "Massy-Verrières",
   "Massy-TGV",
   "Massy-Palaiseau",
   "Massy-Europe"
  ],
  "lignes": [
   "RER B",
   "RER C"
  ],
  "eaux": [
   "La Bièvre",
   "Rû des Gains"
  ],
  "verts": [
   "Centre de Loisirs Mermoz",
   "Parc Urbain Georges Brassens",
   "Parc Saint-Marc",
   "Parc Ampère",
   "Parc Guyot"
  ],
  "jardins": 0,
  "voisines": [
   "Palaiseau",
   "Antony",
   "Wissous",
   "Chilly-Mazarin"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Les Champarts",
   "Vilmorin",
   "Les Peupliers",
   "Atlantis",
   "Villaine",
   "Les Graviers"
  ]
 },
 "savigny-sur-orge": {
  "slug": "savigny-sur-orge",
  "nom": "Savigny-sur-Orge",
  "paris": false,
  "population": 37601,
  "surfaceKm2": 6.97,
  "densite": 5395,
  "cp": [
   "91600"
  ],
  "distParis": 19.1,
  "direction": "sud",
  "gares": [
   "Savigny-sur-Orge"
  ],
  "lignes": [
   "RER C"
  ],
  "eaux": [
   "L'Orge",
   "L'Yvette"
  ],
  "verts": [
   "Parc du pré aux bœufs",
   "Square Capitaine Jean D’Hers",
   "Parc de Champagne",
   "Square Albert 1er",
   "Parc"
  ],
  "jardins": 0,
  "voisines": [
   "Viry-Châtillon",
   "Morsang-sur-Orge",
   "Juvisy-sur-Orge",
   "Épinay-sur-Orge"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "palaiseau": {
  "slug": "palaiseau",
  "nom": "Palaiseau",
  "paris": false,
  "population": 37471,
  "surfaceKm2": 11.66,
  "densite": 3214,
  "cp": [
   "91120"
  ],
  "distParis": 18.1,
  "direction": "sud-ouest",
  "gares": [
   "Palaiseau",
   "Palaiseau - Villebon",
   "Lozère"
  ],
  "lignes": [
   "RER B"
  ],
  "eaux": [
   "L'Yvette"
  ],
  "verts": [
   "Parc Pierre et Marie Curie",
   "Square public des Prés",
   "Parc Jean-Pierre Chabrol",
   "Square des Champs Frétauts",
   "Square de la rue de Paris"
  ],
  "jardins": 0,
  "voisines": [
   "Massy",
   "Orsay",
   "Igny",
   "Villebon-sur-Yvette"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Lozère",
   "La Troche",
   "Rocher de Lozère",
   "Les Joncherettes",
   "La Vauve - École Polytechnique"
  ]
 },
 "athis-mons": {
  "slug": "athis-mons",
  "nom": "Athis-Mons",
  "paris": false,
  "population": 36613,
  "surfaceKm2": 8.61,
  "densite": 4252,
  "cp": [
   "91200"
  ],
  "distParis": 16.6,
  "direction": "sud",
  "gares": [
   "Athis-Mons"
  ],
  "lignes": [
   "RER C"
  ],
  "eaux": [
   "L'Orge",
   "La Seine"
  ],
  "verts": [
   "Parc d'Ozonville",
   "Parc de la résidence Saint-Jean-Baptiste de la Salle",
   "Square de l'Aunette",
   "Square Joséphine Baker",
   "Square Ariane"
  ],
  "jardins": 5,
  "voisines": [
   "Paray-Vieille-Poste",
   "Juvisy-sur-Orge",
   "Morangis",
   "Ablon-sur-Seine"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "sainte-genevieve-des-bois": {
  "slug": "sainte-genevieve-des-bois",
  "nom": "Sainte-Geneviève-des-Bois",
  "paris": false,
  "population": 35438,
  "surfaceKm2": 9.38,
  "densite": 3778,
  "cp": [
   "91700"
  ],
  "distParis": 23.8,
  "direction": "sud",
  "gares": [
   "Sainte-Geneviève-des-Bois"
  ],
  "lignes": [
   "RER C"
  ],
  "eaux": [
   "L'Orge",
   "La Boële"
  ],
  "verts": [
   "Jardin Public",
   "Parc Penafiel",
   "Parc Pierre",
   "Parc des Mares Yvon",
   "Parc naturel du Perray"
  ],
  "jardins": 0,
  "voisines": [
   "Saint-Michel-sur-Orge",
   "Fleury-Mérogis",
   "Morsang-sur-Orge",
   "Villemoisson-sur-Orge"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "vigneux-sur-seine": {
  "slug": "vigneux-sur-seine",
  "nom": "Vigneux-sur-Seine",
  "paris": false,
  "population": 31466,
  "surfaceKm2": 8.97,
  "densite": 3508,
  "cp": [
   "91270"
  ],
  "distParis": 18,
  "direction": "sud",
  "gares": [
   "Vigneux-sur-Seine"
  ],
  "lignes": [
   "RER D"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc du Gros Buisson",
   "Parc des Rives de l'Oly",
   "Base de loisirs du Port-aux-Cerises"
  ],
  "jardins": 0,
  "voisines": [
   "Draveil",
   "Montgeron",
   "Athis-Mons",
   "Juvisy-sur-Orge"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "ris-orangis": {
  "slug": "ris-orangis",
  "nom": "Ris-Orangis",
  "paris": false,
  "population": 31189,
  "surfaceKm2": 8.36,
  "densite": 3731,
  "cp": [
   "91130"
  ],
  "distParis": 23.8,
  "direction": "sud",
  "gares": [
   "Ris-Orangis",
   "Orangis - Bois de l'Épine",
   "Grand Bourg",
   "Bois de Saint-Eutrope"
  ],
  "lignes": [
   "RER D"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc de Trousseau",
   "Parc de la Theuillerie",
   "Parc de la Cité des Oiseaux",
   "Parc Fromont",
   "Lac des Docks de Ris"
  ],
  "jardins": 0,
  "voisines": [
   "Évry-Courcouronnes",
   "Grigny",
   "Draveil",
   "Bondoufle"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Le Moulin A Vent",
   "Les Alcools",
   "Les Hameaux de la Roche",
   "Ris Ideal"
  ]
 },
 "viry-chatillon": {
  "slug": "viry-chatillon",
  "nom": "Viry-Châtillon",
  "paris": false,
  "population": 30838,
  "surfaceKm2": 6.12,
  "densite": 5039,
  "cp": [
   "91170"
  ],
  "distParis": 21.2,
  "direction": "sud",
  "gares": [
   "Viry-Châtillon",
   "Côteaux de l'Orge",
   "Amédée Gordini"
  ],
  "lignes": [
   "RER C",
   "RER D"
  ],
  "eaux": [
   "Bras de l'Orge",
   "L'Orge",
   "La Seine"
  ],
  "verts": [
   "Parc du pré aux bœufs",
   "Parc du PiedeFer",
   "Parc André Leblanc",
   "Square Ibrahim Diarra",
   "Parc Duparchy"
  ],
  "jardins": 4,
  "voisines": [
   "Grigny",
   "Savigny-sur-Orge",
   "Juvisy-sur-Orge",
   "Morsang-sur-Orge"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "meaux": {
  "slug": "meaux",
  "nom": "Meaux",
  "paris": false,
  "population": 56905,
  "surfaceKm2": 15.37,
  "densite": 3702,
  "cp": [
   "77100"
  ],
  "distParis": 41.8,
  "direction": "est",
  "gares": [
   "Meaux"
  ],
  "lignes": [
   "TRAIN P"
  ],
  "eaux": [
   "Canal Cornillon",
   "Canal de Chalifert",
   "La Marne"
  ],
  "verts": [
   "Square Georges Brassens",
   "Parc Chenonceau",
   "Jardin Bossuet",
   "Jardin des Trinitaires",
   "Parc du Pâtis"
  ],
  "jardins": 0,
  "voisines": [
   "Trilport",
   "Nanteuil-lès-Meaux",
   "Chauconin-Neufmontiers",
   "Mareuil-lès-Meaux"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "chelles": {
  "slug": "chelles",
  "nom": "Chelles",
  "paris": false,
  "population": 54620,
  "surfaceKm2": 16,
  "densite": 3414,
  "cp": [
   "77500"
  ],
  "distParis": 18.1,
  "direction": "est",
  "gares": [
   "Chelles Gournay"
  ],
  "lignes": [
   "RER E",
   "TRAIN P"
  ],
  "eaux": [
   "La Marne",
   "Bras des Ablettes",
   "Canal de Chelles"
  ],
  "verts": [
   "Parc Jean-Pierre Jousseaume",
   "Base de loisirs de l'Île de Vaires",
   "Square Armand Lanoux",
   "Square (rond-point - rue de Fresnes)"
  ],
  "jardins": 1,
  "voisines": [
   "Vaires-sur-Marne",
   "Gagny",
   "Montfermeil",
   "Brou-sur-Chantereine"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Alsace-Lorraine",
   "Les Abbesses",
   "Résistance",
   "Belle-Île",
   "Les Bords de Marne",
   "Victor Hugo",
   "Pasteur",
   "Périchelles"
  ]
 },
 "melun": {
  "slug": "melun",
  "nom": "Melun",
  "paris": false,
  "population": 45995,
  "surfaceKm2": 8,
  "densite": 5749,
  "cp": [
   "77000"
  ],
  "distParis": 41.4,
  "direction": "sud-est",
  "gares": [
   "Melun"
  ],
  "lignes": [
   "RER D",
   "TRAIN R"
  ],
  "eaux": [
   "L'Almont",
   "La Seine",
   "Ru de Rubelles"
  ],
  "verts": [
   "Parc de la Mairie",
   "Parc de Breuil",
   "Le Parc aux Conifères",
   "Jardin du Palais",
   "Parc de Crema"
  ],
  "jardins": 0,
  "voisines": [
   "Dammarie-lès-Lys",
   "Le Mée-sur-Seine",
   "Vaux-le-Pénil",
   "Rubelles"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Montaigu",
   "Mézereaux",
   "Quartier de l'Almont"
  ]
 },
 "pontault-combault": {
  "slug": "pontault-combault",
  "nom": "Pontault-Combault",
  "paris": false,
  "population": 39096,
  "surfaceKm2": 13.57,
  "densite": 2881,
  "cp": [
   "77340"
  ],
  "distParis": 20.8,
  "direction": "est",
  "gares": [
   "Émerainville - Pontault-Combault"
  ],
  "lignes": [
   "RER E"
  ],
  "eaux": [],
  "verts": [
   "Les Jardins d'Aimé",
   "Parc de l’Hôtel de Ville"
  ],
  "jardins": 0,
  "voisines": [
   "Roissy-en-Brie",
   "Émerainville",
   "Ozoir-la-Ferrière",
   "Le Plessis-Trévise"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "savigny-le-temple": {
  "slug": "savigny-le-temple",
  "nom": "Savigny-le-Temple",
  "paris": false,
  "population": 31148,
  "surfaceKm2": 12.02,
  "densite": 2591,
  "cp": [
   "77176"
  ],
  "distParis": 34.4,
  "direction": "sud-est",
  "gares": [
   "Savigny-le-Temple - Nandy"
  ],
  "lignes": [
   "RER D"
  ],
  "eaux": [],
  "verts": [
   "Parc des Tourailles"
  ],
  "jardins": 0,
  "voisines": [
   "Cesson",
   "Nandy",
   "Vert-Saint-Denis",
   "Saint-Pierre-du-Perray"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "bussy-saint-georges": {
  "slug": "bussy-saint-georges",
  "nom": "Bussy-Saint-Georges",
  "paris": false,
  "population": 27498,
  "surfaceKm2": 15.28,
  "densite": 1800,
  "cp": [
   "77600"
  ],
  "distParis": 26.3,
  "direction": "est",
  "gares": [
   "Bussy-Saint-Georges"
  ],
  "lignes": [
   "RER A"
  ],
  "eaux": [
   "Ru de la Butte de Vaux",
   "Ru de la Brosse",
   "La Gondoire"
  ],
  "verts": [
   "Parc du Génitoy",
   "Jardins du Partage et des Savoirs",
   "Parc culturel de Rentilly - Michel Chartier"
  ],
  "jardins": 0,
  "voisines": [
   "Bussy-Saint-Martin",
   "Collégien",
   "Montévrain",
   "Jossigny"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "champs-sur-marne": {
  "slug": "champs-sur-marne",
  "nom": "Champs-sur-Marne",
  "paris": false,
  "population": 27451,
  "surfaceKm2": 7.68,
  "densite": 3574,
  "cp": [
   "77420"
  ],
  "distParis": 17.7,
  "direction": "est",
  "gares": [
   "Noisy - Champs"
  ],
  "lignes": [
   "RER A"
  ],
  "eaux": [
   "Bras Saint-Gervais",
   "La Marne"
  ],
  "verts": [
   "La demi-lune",
   "La coulée verte",
   "Parc de Noisiel",
   "Square des Bouleaux"
  ],
  "jardins": 1,
  "voisines": [
   "Noisiel",
   "Torcy",
   "Noisy-le-Grand",
   "Émerainville"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Cité Descartes",
   "Centre Ville",
   "Les Deux Parcs",
   "Pablo Picasso"
  ]
 },
 "villeparisis": {
  "slug": "villeparisis",
  "nom": "Villeparisis",
  "paris": false,
  "population": 26946,
  "surfaceKm2": 8.34,
  "densite": 3231,
  "cp": [
   "77270"
  ],
  "distParis": 21.6,
  "direction": "nord-est",
  "gares": [
   "Villeparisis - Mitry-le-Neuf"
  ],
  "lignes": [
   "RER B"
  ],
  "eaux": [
   "Canal de l'Ourcq"
  ],
  "verts": [
   "Parc Honoré de Balzac",
   "Parc François Mitterrand"
  ],
  "jardins": 0,
  "voisines": [
   "Mitry-Mory",
   "Claye-Souilly",
   "Vaujours",
   "Courtry"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "dammarie-les-lys": {
  "slug": "dammarie-les-lys",
  "nom": "Dammarie-les-Lys",
  "paris": false,
  "population": 23559,
  "surfaceKm2": 10.25,
  "densite": 2298,
  "cp": [
   "77190"
  ],
  "distParis": 42.8,
  "direction": "sud-est",
  "gares": [
   "Vosves"
  ],
  "lignes": [
   "TRAIN R"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc de l'Abbaye du Lys",
   "Parc de Farcy",
   "Parc du Château Soubiran",
   "Parc de Bel Ombre",
   "Parc du Château Gaillard"
  ],
  "jardins": 0,
  "voisines": [
   "Melun",
   "Le Mée-sur-Seine",
   "Boissise-le-Roi",
   "Chartrettes"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "combs-la-ville": {
  "slug": "combs-la-ville",
  "nom": "Combs-la-Ville",
  "paris": false,
  "population": 23350,
  "surfaceKm2": 14.52,
  "densite": 1608,
  "cp": [
   "77380"
  ],
  "distParis": 27.3,
  "direction": "sud-est",
  "gares": [
   "Combs-la-Ville - Quincy"
  ],
  "lignes": [
   "RER D"
  ],
  "eaux": [
   "L'Yerres"
  ],
  "verts": [
   "Parc de l'Abreuvoir",
   "Parc Municipal Arthur Chaussy",
   "Parc Jacques Chirac",
   "Parc Central",
   "La Clavellière"
  ],
  "jardins": 0,
  "voisines": [
   "Moissy-Cramayel",
   "Quincy-sous-Sénart",
   "Brie-Comte-Robert",
   "Lieusaint"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "sartrouville": {
  "slug": "sartrouville",
  "nom": "Sartrouville",
  "paris": false,
  "population": 52763,
  "surfaceKm2": 8.47,
  "densite": 6229,
  "cp": [
   "78500"
  ],
  "distParis": 15.8,
  "direction": "nord-ouest",
  "gares": [
   "Sartrouville"
  ],
  "lignes": [
   "RER A",
   "TRAIN L"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc Youri Gagarine",
   "Parc du Dispensaire",
   "Square Dijou",
   "Parc du 18 juin 1940",
   "Parc Guériot"
  ],
  "jardins": 2,
  "voisines": [
   "Houilles",
   "Montesson",
   "Maisons-Laffitte",
   "Cormeilles-en-Parisis"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Le Plateau",
   "Les Dix Arpents",
   "La Plaine",
   "Les Richebourgs",
   "La Croix Blanche",
   "La Vaudoire",
   "L'Union",
   "Le Fresnay Vieux-Pays"
  ]
 },
 "mantes-la-jolie": {
  "slug": "mantes-la-jolie",
  "nom": "Mantes-la-Jolie",
  "paris": false,
  "population": 43526,
  "surfaceKm2": 9.43,
  "densite": 4616,
  "cp": [
   "78200"
  ],
  "distParis": 50.7,
  "direction": "ouest",
  "gares": [
   "Mantes-la-Jolie"
  ],
  "lignes": [
   "TRAIN J",
   "TRAIN N"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Square Brieussel Bourgeois",
   "Square Gabrielle d'Estrées",
   "Parc du château",
   "Esplanade Vaucouleurs",
   "Bois de la Butte Verte"
  ],
  "jardins": 0,
  "voisines": [
   "Mantes-la-Ville",
   "Buchelay",
   "Limay",
   "Magnanville"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Les Martraits",
   "Le Val Fourré",
   "Gassicourt",
   "Vieux-Mantes",
   "Les Cordeliers",
   "Centre-ville",
   "Les Physiciens",
   "Les Écrivains"
  ]
 },
 "poissy": {
  "slug": "poissy",
  "nom": "Poissy",
  "paris": false,
  "population": 40983,
  "surfaceKm2": 12.88,
  "densite": 3182,
  "cp": [
   "78300"
  ],
  "distParis": 25.1,
  "direction": "ouest",
  "gares": [
   "Poissy"
  ],
  "lignes": [
   "RER A",
   "TRAIN J"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Square des frères Rose",
   "Parc Meissonier",
   "Square Léon-Deliance",
   "Square André-Diez",
   "Parc forestier de la Charmille"
  ],
  "jardins": 0,
  "voisines": [
   "Saint-Germain-en-Laye",
   "Carrières-sous-Poissy",
   "Villennes-sur-Seine",
   "Orgeval"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Poncy",
   "Les Sablons",
   "La Bruyère",
   "Saint-Exupéry",
   "La Coudraie",
   "L'Abbaye",
   "Noailles"
  ]
 },
 "conflans-sainte-honorine": {
  "slug": "conflans-sainte-honorine",
  "nom": "Conflans-Sainte-Honorine",
  "paris": false,
  "population": 36958,
  "surfaceKm2": 9.88,
  "densite": 3741,
  "cp": [
   "78700"
  ],
  "distParis": 24.5,
  "direction": "nord-ouest",
  "gares": [
   "Conflans-Fin-d'Oise",
   "Conflans-Sainte-Honorine"
  ],
  "lignes": [
   "RER A",
   "TRAIN J",
   "TRAIN L"
  ],
  "eaux": [
   "L'Oise",
   "La Seine"
  ],
  "verts": [
   "Parc du Prieuré",
   "Square de Ramsgate",
   "Parc du Cèdre",
   "Square Maurice-Chaval"
  ],
  "jardins": 0,
  "voisines": [
   "Andrésy",
   "Maurecourt",
   "Herblay-sur-Seine",
   "Achères"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Les Champs Dufour",
   "Le Colas",
   "Le Court Goujon",
   "Cité Paul Brard",
   "Cité Bleue",
   "Cité Escale",
   "Plateau du Moulin"
  ]
 },
 "trappes": {
  "slug": "trappes",
  "nom": "Trappes",
  "paris": false,
  "population": 34689,
  "surfaceKm2": 13.69,
  "densite": 2534,
  "cp": [
   "78190"
  ],
  "distParis": 27.6,
  "direction": "ouest",
  "gares": [
   "Trappes"
  ],
  "lignes": [
   "TRAIN N",
   "TRAIN U"
  ],
  "eaux": [],
  "verts": [
   "Parc de la Plaine de Neauphle",
   "Parc du cèdre",
   "Parc des Bateleurs",
   "Île de loisirs de Saint-Quentin-en-Yvelines",
   "Square Léo Lagrange"
  ],
  "jardins": 1,
  "voisines": [
   "Élancourt",
   "Montigny-le-Bretonneux",
   "Plaisir",
   "La Verrière"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "les-mureaux": {
  "slug": "les-mureaux",
  "nom": "Les Mureaux",
  "paris": false,
  "population": 34632,
  "surfaceKm2": 12.37,
  "densite": 2800,
  "cp": [
   "78130"
  ],
  "distParis": 35.4,
  "direction": "nord-ouest",
  "gares": [
   "Les Mureaux"
  ],
  "lignes": [
   "TRAIN J"
  ],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc des Marroniers",
   "Parc de l'Oseraie",
   "Parc de Becheville",
   "Parc du Moulin de Sautour",
   "Base de loisirs du Val-de-Seine"
  ],
  "jardins": 0,
  "voisines": [
   "Meulan-en-Yvelines",
   "Ecquevilly",
   "Verneuil-sur-Seine",
   "Bouafle"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Apremont",
   "La Vigne Blanche",
   "Les Bougimonts",
   "Les Musiciens",
   "Comtesse",
   "Les Marcheurs"
  ]
 },
 "houilles": {
  "slug": "houilles",
  "nom": "Houilles",
  "paris": false,
  "population": 33983,
  "surfaceKm2": 4.48,
  "densite": 7585,
  "cp": [
   "78800"
  ],
  "distParis": 14.4,
  "direction": "nord-ouest",
  "gares": [
   "Houilles Carrières-sur-Seine"
  ],
  "lignes": [
   "RER A",
   "TRAIN L"
  ],
  "eaux": [],
  "verts": [
   "Parc Charles de Gaulle",
   "Parc Victorien Chausse",
   "Square Saint-Nicolas",
   "Sanisette Chien"
  ],
  "jardins": 0,
  "voisines": [
   "Sartrouville",
   "Carrières-sur-Seine",
   "Bezons",
   "Chatou"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "montigny-le-bretonneux": {
  "slug": "montigny-le-bretonneux",
  "nom": "Montigny-le-Bretonneux",
  "paris": false,
  "population": 32465,
  "surfaceKm2": 10.7,
  "densite": 3034,
  "cp": [
   "78180"
  ],
  "distParis": 25.5,
  "direction": "ouest",
  "gares": [
   "Saint-Quentin-en-Yvelines"
  ],
  "lignes": [
   "RER C",
   "TRAIN N",
   "TRAIN U"
  ],
  "eaux": [],
  "verts": [
   "Square de la Culotte",
   "Parc public Érasme",
   "Parc des Sources de la Bièvre",
   "Square Carnac",
   "Île de loisirs de Saint-Quentin-en-Yvelines"
  ],
  "jardins": 0,
  "voisines": [
   "Guyancourt",
   "Voisins-le-Bretonneux",
   "Trappes",
   "Élancourt"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "montreuil": {
  "slug": "montreuil",
  "nom": "Montreuil",
  "paris": false,
  "population": 111934,
  "surfaceKm2": 8.91,
  "densite": 12563,
  "cp": [
   "93100"
  ],
  "distParis": 7.1,
  "direction": "est",
  "gares": [
   "Croix de Chavaux",
   "Mairie de Montreuil",
   "Robespierre",
   "La Dhuys",
   "Montreuil - Hôpital"
  ],
  "lignes": [
   "METRO 9"
  ],
  "eaux": [
   "Aqueduc de la Dhuis"
  ],
  "verts": [
   "Place de la République",
   "Square Denise Buisson",
   "Square Hilaire Hega Penda",
   "Terrain d'aventures",
   "Square du Demi Cercle",
   "Square Léopold Patriarche"
  ],
  "jardins": 4,
  "voisines": [
   "Bagnolet",
   "Vincennes",
   "Fontenay-sous-Bois",
   "Romainville"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Croix de Chavaux",
   "Les Sept Chemins",
   "La Boissière",
   "Les Ruffins"
  ]
 },
 "pantin": {
  "slug": "pantin",
  "nom": "Pantin",
  "paris": false,
  "population": 61929,
  "surfaceKm2": 5,
  "densite": 12386,
  "cp": [
   "93500"
  ],
  "distParis": 6.4,
  "direction": "nord-est",
  "gares": [
   "Aubervilliers - Pantin - Quatre Chemins",
   "Pantin",
   "Bobigny - Pantin - Raymond Queneau",
   "Hoche",
   "Église de Pantin"
  ],
  "lignes": [
   "METRO 7"
  ],
  "eaux": [
   "Canal de l'Ourcq"
  ],
  "verts": [
   "Place Salvador Allende",
   "Parc Diderot",
   "Espaces Verts des Courtillères",
   "Square Montgolfier",
   "Parc de la Manufacture des tabacs",
   "Square de l’Église"
  ],
  "jardins": 0,
  "voisines": [
   "Le Pré-Saint-Gervais",
   "Bobigny",
   "Aubervilliers",
   "Les Lilas"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Cité des Auteurs",
   "Mairie - Hoche",
   "Église",
   "Petit Pantin - Les Limites",
   "Quatre Chemins",
   "Les Courtillères"
  ]
 },
 "bagnolet": {
  "slug": "bagnolet",
  "nom": "Bagnolet",
  "paris": false,
  "population": 43086,
  "surfaceKm2": 2.57,
  "densite": 16765,
  "cp": [
   "93170"
  ],
  "distParis": 5.5,
  "direction": "est",
  "gares": [
   "Gallieni"
  ],
  "lignes": [],
  "eaux": [
   "Aqueduc de la Dhuis"
  ],
  "verts": [
   "Parc Josette et Maurice Audin",
   "Jardin des Buttes",
   "Square Jules Ferry",
   "Square Schnarbach",
   "Square du 19 Mars 1962",
   "Square du 8 mai 1945"
  ],
  "jardins": 1,
  "voisines": [
   "Montreuil",
   "Les Lilas",
   "Romainville",
   "Paris 20e"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "les-lilas": {
  "slug": "les-lilas",
  "nom": "Les Lilas",
  "paris": false,
  "population": 23843,
  "surfaceKm2": 1.26,
  "densite": 18923,
  "cp": [
   "93260"
  ],
  "distParis": 5.8,
  "direction": "nord-est",
  "gares": [
   "Serge Gainsbourg",
   "Mairie des Lilas"
  ],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Parc municipal Lucie-Aubrac",
   "Square Georges Valbon",
   "Square Georges Gay",
   "Jardin Marcel Joseph-François",
   "Parc Simone Veil",
   "Base de loisirs de la Corniche des Forts"
  ],
  "jardins": 0,
  "voisines": [
   "Bagnolet",
   "Romainville",
   "Le Pré-Saint-Gervais",
   "Paris 20e"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Cité des Sentes"
  ]
 },
 "bobigny": {
  "slug": "bobigny",
  "nom": "Bobigny",
  "paris": false,
  "population": 56927,
  "surfaceKm2": 6.78,
  "densite": 8396,
  "cp": [
   "93000"
  ],
  "distParis": 8.7,
  "direction": "nord-est",
  "gares": [
   "Bobigny - Pablo Picasso"
  ],
  "lignes": [],
  "eaux": [
   "Canal de l'Ourcq"
  ],
  "verts": [
   "Parc de la Bergère",
   "Mail Jean Rostand",
   "Mail François Mitterrand (parc PVC)",
   "Square Boughera El Ouafi",
   "Parvis de l'Abbé Pierre",
   "Jardin du Carré Rouge"
  ],
  "jardins": 3,
  "voisines": [
   "Pantin",
   "Drancy",
   "Noisy-le-Sec",
   "Romainville"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "La Folie",
   "Pont de Pierre",
   "Cité de l'Abreuvoir",
   "Cité de l'Amitié",
   "Cité Henri Barbusse",
   "Cité des Castors",
   "Cité de Normandie",
   "Cité Paul Vaillant-Couturier"
  ]
 },
 "aulnay-sous-bois": {
  "slug": "aulnay-sous-bois",
  "nom": "Aulnay-sous-Bois",
  "paris": false,
  "population": 87599,
  "surfaceKm2": 16.15,
  "densite": 5424,
  "cp": [
   "93600"
  ],
  "distParis": 14.2,
  "direction": "nord-est",
  "gares": [
   "Aulnay-sous-Bois"
  ],
  "lignes": [],
  "eaux": [
   "Canal de l'Ourcq"
  ],
  "verts": [
   "Parc Robert Ballanger",
   "Parc Gainville",
   "Roseraie Municipale Honoré Daumier",
   "Parc Dumont",
   "Parc Faure",
   "Parc Émile Zola"
  ],
  "jardins": 4,
  "voisines": [
   "Sevran",
   "Villepinte",
   "Le Blanc-Mesnil",
   "Bondy"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "livry-gargan": {
  "slug": "livry-gargan",
  "nom": "Livry-Gargan",
  "paris": false,
  "population": 47228,
  "surfaceKm2": 7.37,
  "densite": 6408,
  "cp": [
   "93190"
  ],
  "distParis": 15,
  "direction": "nord-est",
  "gares": [
   "République - Marx Dormoy",
   "Lycée Henri Sellier",
   "L'Abbaye"
  ],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Parc Lefèvre",
   "Parc de la Mairie",
   "Parc Georges-Pompidou",
   "Parc Vincent-Auriol",
   "Square de la mairie",
   "Square Bayard"
  ],
  "jardins": 0,
  "voisines": [
   "Sevran",
   "Clichy-sous-Bois",
   "Les Pavillons-sous-Bois",
   "Vaujours"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Cité Pierre Mendès France"
  ]
 },
 "epinay-sur-seine": {
  "slug": "epinay-sur-seine",
  "nom": "Épinay-sur-Seine",
  "paris": false,
  "population": 52833,
  "surfaceKm2": 4.58,
  "densite": 11536,
  "cp": [
   "93800"
  ],
  "distParis": 11.2,
  "direction": "nord",
  "gares": [
   "Épinay - Villetaneuse",
   "Épinay-sur-Seine"
  ],
  "lignes": [],
  "eaux": [
   "La Seine"
  ],
  "verts": [
   "Parc des Saules",
   "Parc des Béatus",
   "Parc de l'Hôtel de Ville (parc Gouraud)",
   "Le Jardin des Presles",
   "Parc Pierre Lihou",
   "Square Blumenthal"
  ],
  "jardins": 0,
  "voisines": [
   "Saint-Denis",
   "Villetaneuse",
   "Deuil-la-Barre",
   "Enghien-les-Bains"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Orgemont",
   "Cygne d'Enghien"
  ]
 },
 "malakoff": {
  "slug": "malakoff",
  "nom": "Malakoff",
  "paris": false,
  "population": 30557,
  "surfaceKm2": 2.07,
  "densite": 14762,
  "cp": [
   "92240"
  ],
  "distParis": 6.1,
  "direction": "sud-ouest",
  "gares": [
   "Malakoff - Rue Étienne Dolet",
   "Malakoff - Plateau de Vanves"
  ],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Nouvelle Place Dépinoy",
   "Jardin du Centenaire de Malakoff",
   "Square Fabienne Chauvière",
   "Parc Léon Salagnac",
   "Square Normandie-Niémen",
   "Square de Verdun"
  ],
  "jardins": 0,
  "voisines": [
   "Vanves",
   "Montrouge",
   "Châtillon",
   "Clamart"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Cité des Nouzeaux",
   "Cité des Poètes"
  ]
 },
 "vanves": {
  "slug": "vanves",
  "nom": "Vanves",
  "paris": false,
  "population": 28622,
  "surfaceKm2": 1.56,
  "densite": 18347,
  "cp": [
   "92170"
  ],
  "distParis": 6.2,
  "direction": "sud-ouest",
  "gares": [
   "Vanves Malakoff"
  ],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Square Étienne Jarousse",
   "Parc Frédéric Pic",
   "Square du 11 Novembre 1918",
   "Square Louis Vicat",
   "Square de l'Insurrection",
   "Place du 8 Mai 1945"
  ],
  "jardins": 1,
  "voisines": [
   "Issy-les-Moulineaux",
   "Malakoff",
   "Clamart",
   "Paris 15e"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "bourg-la-reine": {
  "slug": "bourg-la-reine",
  "nom": "Bourg-la-Reine",
  "paris": false,
  "population": 21019,
  "surfaceKm2": 1.86,
  "densite": 11301,
  "cp": [
   "92340"
  ],
  "distParis": 8.9,
  "direction": "sud",
  "gares": [
   "Bourg-la-Reine"
  ],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Square André Meunier",
   "Parc de la Bièvre",
   "Square Theuriet",
   "Parc Thieulin"
  ],
  "jardins": 0,
  "voisines": [
   "Sceaux",
   "Antony",
   "Cachan",
   "L'Haÿ-les-Roses"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Les Castors de la Bièvre"
  ]
 },
 "fontenay-aux-roses": {
  "slug": "fontenay-aux-roses",
  "nom": "Fontenay-aux-Roses",
  "paris": false,
  "population": 24070,
  "surfaceKm2": 2.53,
  "densite": 9514,
  "cp": [
   "92260"
  ],
  "distParis": 8.8,
  "direction": "sud-ouest",
  "gares": [
   "Fontenay-aux-Roses"
  ],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Square Elstree-Borehamwood",
   "Square Georges Pompidou",
   "Square des Anciens Combattants",
   "Parc Sainte-Barbe",
   "Square Jean Jaurès",
   "Parc Laboissière"
  ],
  "jardins": 1,
  "voisines": [
   "Sceaux",
   "Châtillon",
   "Clamart",
   "Bagneux"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "la-garenne-colombes": {
  "slug": "la-garenne-colombes",
  "nom": "La Garenne-Colombes",
  "paris": false,
  "population": 30197,
  "surfaceKm2": 1.78,
  "densite": 16965,
  "cp": [
   "92250"
  ],
  "distParis": 9.7,
  "direction": "nord-ouest",
  "gares": [],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Square Guy Môquet",
   "Parc Wangen im Allgäu",
   "Parc Victor Roy",
   "Jardin de Yoqneam",
   "Square Jean Boiselle",
   "Jardin La Sablière"
  ],
  "jardins": 0,
  "voisines": [
   "Colombes",
   "Bois-Colombes",
   "Courbevoie",
   "Nanterre"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Les Champs-Philippe"
  ]
 },
 "paray-vieille-poste": {
  "slug": "paray-vieille-poste",
  "nom": "Paray-Vieille-Poste",
  "paris": false,
  "population": 8202,
  "surfaceKm2": 6.04,
  "densite": 1358,
  "cp": [
   "91550",
   "94390"
  ],
  "distParis": 14.8,
  "direction": "sud",
  "gares": [
   "Orly 4",
   "Orly 1, 2, 3",
   "Aéroport d'Orly"
  ],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Parc Gaston-Jankiewicz"
  ],
  "jardins": 0,
  "voisines": [
   "Athis-Mons",
   "Orly",
   "Wissous",
   "Morangis"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "wissous": {
  "slug": "wissous",
  "nom": "Wissous",
  "paris": false,
  "population": 7151,
  "surfaceKm2": 9.14,
  "densite": 782,
  "cp": [
   "91320"
  ],
  "distParis": 14.1,
  "direction": "sud",
  "gares": [],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Domaine Les Étangs - Espace Arthur Clark",
   "Domaine de Montjean",
   "Parc du château Gaillard",
   "Espace Marcel Dassault",
   "Square Kléber"
  ],
  "jardins": 0,
  "voisines": [
   "Antony",
   "Massy",
   "Chilly-Mazarin",
   "Paray-Vieille-Poste"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Orly Les Avernaises",
   "Le Colombier",
   "Parc du Haut de Wissous 2",
   "Résidence La Marina",
   "Lotissement Clos la Valline",
   "Quartier Saint-Eloi",
   "Le Hameau de Montjean"
  ]
 },
 "bezons": {
  "slug": "bezons",
  "nom": "Bezons",
  "paris": false,
  "population": 36434,
  "surfaceKm2": 4.19,
  "densite": 8695,
  "cp": [
   "95870"
  ],
  "distParis": 12.6,
  "direction": "nord-ouest",
  "gares": [],
  "lignes": [],
  "eaux": [
   "La Seine - Bras de Marly",
   "La Seine"
  ],
  "verts": [
   "Parc Sacco et Vanzetti",
   "Parc Albert Bettencourt",
   "Parc Nelson Mandela",
   "Parc Marcel Langlois",
   "Square Julián Grimau",
   "Square de la République"
  ],
  "jardins": 2,
  "voisines": [
   "Argenteuil",
   "Houilles",
   "Colombes",
   "Carrières-sur-Seine"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "goussainville": {
  "slug": "goussainville",
  "nom": "Goussainville",
  "paris": false,
  "population": 31301,
  "surfaceKm2": 11.42,
  "densite": 2741,
  "cp": [
   "95190"
  ],
  "distParis": 20.7,
  "direction": "nord-est",
  "gares": [
   "Les Noues",
   "Goussainville"
  ],
  "lignes": [],
  "eaux": [
   "Le Croult"
  ],
  "verts": [
   "Parc Urbain des Grandes Bornes",
   "Parc Vieux Village",
   "Parc Olympe de Gouges",
   "Parc Auguste Delaune",
   "Parc des Blatreux"
  ],
  "jardins": 0,
  "voisines": [
   "Louvres",
   "Roissy-en-France",
   "Gonesse",
   "Le Thillay"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": []
 },
 "pontoise": {
  "slug": "pontoise",
  "nom": "Pontoise",
  "paris": false,
  "population": 31970,
  "surfaceKm2": 7.16,
  "densite": 4465,
  "cp": [
   "95000",
   "95300"
  ],
  "distParis": 28.2,
  "direction": "nord-ouest",
  "gares": [
   "Pontoise"
  ],
  "lignes": [],
  "eaux": [
   "L'Oise",
   "La Viosne",
   "Bras de l'Oise",
   "La Liesse"
  ],
  "verts": [
   "Parc du Musée Pissarro",
   "Jardin de la Ville",
   "Parc du Château de Marcouville",
   "Parc des Larris",
   "Le Jardin des Lavandières",
   "Terrasse basse du Dôme"
  ],
  "jardins": 0,
  "voisines": [
   "Cergy",
   "Saint-Ouen-l’Aumône",
   "Osny",
   "Éragny"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "Les Larris Verts",
   "Les Larris Mauves",
   "Les Larris Orange",
   "Les Larris Pourpres",
   "Les Bocages Orange",
   "Les Bocages Marines",
   "Les Maradas Bruns",
   "Les Maradas Mauves"
  ]
 },
 "elancourt": {
  "slug": "elancourt",
  "nom": "Élancourt",
  "paris": false,
  "population": 26365,
  "surfaceKm2": 9.24,
  "densite": 2853,
  "cp": [
   "78990"
  ],
  "distParis": 30,
  "direction": "ouest",
  "gares": [],
  "lignes": [],
  "eaux": [],
  "verts": [
   "Aire de Jeu du Gandouget",
   "Parc des Coudrays",
   "Stade Guy Boniface",
   "Place de l'Amitié entre Peuples",
   "Parc de l'Homme Couché"
  ],
  "jardins": 0,
  "voisines": [
   "Maurepas",
   "Trappes",
   "Plaisir",
   "La Verrière"
  ],
  "pinsHa": 0,
  "osm": true,
  "quartiers": [
   "La Clef de Saint-Pierre",
   "Résidence du Parc",
   "Résidence de la Ville-Dieu"
  ]
 },
}
