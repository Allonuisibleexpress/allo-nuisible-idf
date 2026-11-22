// « Bilan Nuisibles Île-de-France 2026 » (22/11/2026, demande de l'utilisateur) : chiffres clés sourcés, à citer.
// Chaque chiffre a été vérifié sur la source indiquée (pages officielles lues le 22/11/2026) ; rien n'est estimé ni
// inventé. Les chiffres « terrain » sont ceux d'Allo Nuisible IDF, confirmés par le gérant.
export type Source = { label: string; url: string }
export type Chiffre = { valeur: string; texte: string; source: Source }
export type Theme = { id: string; titre: string; accroche: string; chiffres: Chiffre[]; analyse: string[]; liens: { href: string; label: string }[] }

const SPF_LEPTO_2024: Source = { label: 'Santé publique France, Leptospirose en France en 2024 (publié le 6 février 2026)', url: 'https://www.santepubliquefrance.fr/leptospirose/bulletin-national/leptospirose-en-france-en-2024-donnees-de-la-declaration-obligatoire' }
const SPF_LEPTO_2025: Source = { label: 'Santé publique France, Leptospirose en France en 2025 (publié le 30 juillet 2026)', url: 'https://www.santepubliquefrance.fr/leptospirose/bulletin-national/leptospirose-en-france-en-2025-donnees-du-signalement-obligatoire' }
const PARIS_RATS: Source = { label: 'Ville de Paris, Comment Paris lutte contre les rats (mis à jour le 16 octobre 2026)', url: 'https://www.paris.fr/pages/les-rats-a-paris-le-saviez-vous-6418' }
const SPF_IDF_ARBO: Source = { label: 'Santé publique France Île-de-France, Le moustique tigre : situation sanitaire en 2025 (mai 2026)', url: 'https://invs.santepubliquefrance.fr/sites/default/files/2026-05/infog_arbo_idf_20260520.pdf' }
const SPF_ARBO_2025: Source = { label: 'Santé publique France, Chikungunya, dengue, Zika et West Nile : surveillance renforcée 2025', url: 'https://www.santepubliquefrance.fr/maladies-a-transmission-vectorielle/chikungunya/chikungunya-dengue-zika-et-west-nile-donnees-de-la-surveillance-renforcee-en-france-hexagonale-2025' }
const ANSES_PUNAISES: Source = { label: 'Anses, Punaises de lit : des conséquences sur le budget et la qualité de vie des Français (juillet 2023)', url: 'https://www.anses.fr/fr/content/punaises-de-lit-des-consequences-sur-le-budget-et-la-qualite-de-vie-des-francais' }
const AN_PUNAISES: Source = { label: 'Assemblée nationale, question écrite n° 12397 (chiffres de l’Anses)', url: 'https://questions.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE12397.pdf' }
const DOUANE_SNIPER: Source = { label: 'Douane et DGCCRF, Recrudescence des saisies de Sniper (2 octobre 2024)', url: 'https://www.douane.gouv.fr/actualites/recrudescence-des-saisies-de-sniper-la-douane-et-la-dgccrf-alertent-les-consommateurs' }
const MNHN_FRELON: Source = { label: 'Muséum national d’Histoire naturelle, Le frelon asiatique (frelonasiatique.mnhn.fr)', url: 'https://frelonasiatique.mnhn.fr/home' }
const LOI_FRELON: Source = { label: 'Loi n° 2025-237 du 14 mars 2025 visant à endiguer la prolifération du frelon asiatique (AIDA, Ineris)', url: 'https://aida.ineris.fr/reglementation/loi-ndeg-2025-237-140325-visant-a-endiguer-proliferation-frelon-asiatique-a' }
const MF_2025: Source = { label: 'Météo-France, Bilan climatique 2025', url: 'https://meteofrance.fr/sites/meteofrance.fr/files/files/editorial/bilan_climatique_2025-V3.4-web.pdf' }
const CERTIBIOCIDE: Source = { label: 'Arrêté du 9 octobre 2013 relatif à l’exercice de l’activité d’utilisateur professionnel de produits biocides (AIDA, Ineris)', url: 'https://aida.ineris.fr/reglementation/arrete-091013-relatif-conditions-dexercice-lactivite-dutilisateur-professionnel' }
const TERRAIN: Source = { label: 'Allo Nuisible IDF, données de l’entreprise (Saint-Maurice, 94)', url: 'https://allonuisibleidf.fr/qui-sommes-nous' }

export const THEMES: Theme[] = [
  {
    id: 'rats',
    titre: 'Rats et leptospirose',
    accroche: 'Le rat n’est pas qu’une nuisance : il transmet la leptospirose, une maladie à signalement obligatoire depuis 2023.',
    chiffres: [
      { valeur: '886', texte: 'cas de leptospirose signalés en France en 2024, dont 441 en France hexagonale et Corse.', source: SPF_LEPTO_2024 },
      { valeur: '74 %', texte: 'des malades de 2024 ont été hospitalisés (653 personnes) ; 13 sont décédés.', source: SPF_LEPTO_2024 },
      { valeur: '562', texte: 'cas signalés en 2025, dont 274 en hexagone et Corse (0,4 cas pour 100 000 habitants).', source: SPF_LEPTO_2025 },
      { valeur: '≈ 4 000', texte: 'interventions par an de la Ville de Paris pour limiter les rongeurs sur le domaine public, dans le cadre d’un plan de lutte intégrée adopté dès 2017.', source: PARIS_RATS },
    ],
    analyse: [
      'Le rat brun (surmulot) est le principal réservoir de la leptospirose en ville : la bactérie passe dans l’eau et les sols souillés par son urine. Santé publique France rappelle que les cas signalés sous-estiment vraisemblablement le nombre réel.',
      'Sur le terrain, nous voyons surtout les rats dans les **caves**, les **locaux poubelles** et les **logements très encombrés**. Notre chantier de Maisons-Alfort, filmé, montre pourquoi il faut **dératiser avant de vider** un logement.',
    ],
    liens: [{ href: '/services/deratisation', label: 'Notre dératisation' }, { href: '/blog/deratisation-logement-syndrome-diogene#video', label: 'Vidéo : syndrome de Diogène et rats à Maisons-Alfort' }],
  },
  {
    id: 'punaises',
    titre: 'Punaises de lit',
    accroche: 'Le seul nuisible dont l’Anses a chiffré le coût pour les ménages français.',
    chiffres: [
      { valeur: '11 %', texte: 'des foyers français ont été infestés par des punaises de lit entre 2017 et 2022 (enquête Ipsos pour l’Anses).', source: ANSES_PUNAISES },
      { valeur: '866 €', texte: 'dépensés en moyenne par foyer infesté pour s’en débarrasser.', source: ANSES_PUNAISES },
      { valeur: '230 M€', texte: 'par an en moyenne : le coût de la lutte pour les ménages français sur 2017-2022 (environ 1,4 milliard d’euros au total).', source: AN_PUNAISES },
    ],
    analyse: [
      'Ce coût s’explique en grande partie par les **traitements ratés** : produits du commerce, bombes, déménagement des affaires d’une pièce à l’autre. Un traitement professionnel en **deux passages** évite de payer deux fois.',
      'Pour les foyers qui refusent tout insecticide (bébé, personne âgée, animaux), la **cryogénie à −78 °C** traite la literie et les meubles sans produit. Nos vidéos à Ivry-sur-Seine, Champigny-sur-Marne et L’Haÿ-les-Roses le montrent.',
    ],
    liens: [{ href: '/services/punaises-de-lit', label: 'Notre traitement des punaises de lit' }, { href: '/services/cryogenie-punaises-de-lit', label: 'La cryogénie, sans insecticide' }],
  },
  {
    id: 'insecticides-interdits',
    titre: 'Insecticides interdits',
    accroche: 'Face aux punaises de lit, certains achètent des produits interdits en France, avec de vrais risques.',
    chiffres: [
      { valeur: '1 784', texte: 'flacons de « Sniper 1000 » (197,3 litres) saisis par la douane dans les bagages de voyageurs à Roissy, lors de 22 contrôles.', source: DOUANE_SNIPER },
      { valeur: '≈ 900', texte: 'flacons de Sniper ou Shooter saisis par la DGCCRF dans les commerces et sur internet depuis 2023.', source: DOUANE_SNIPER },
    ],
    analyse: [
      'Ces produits contiennent du **dichlorvos**, interdit pour l’usage domestique. Les autorités les disent responsables d’intoxications graves, parfois mortelles. Ils ne règlent pas une infestation et peuvent rendre un logement dangereux.',
      'En France, seul un professionnel titulaire du **Certibiocide** peut utiliser les insecticides et raticides réservés aux professionnels (arrêté du 9 octobre 2013).',
    ],
    liens: [{ href: '/blog/insecticide-interdit-sniper-1000-danger', label: 'Sniper 1000 : pourquoi c’est dangereux' }, { href: '/blog/arnaques-deratisation-nuisibles', label: 'Les arnaques à éviter' }],
  },
  {
    id: 'moustique-tigre',
    titre: 'Moustique tigre',
    accroche: 'En 2025, le moustique tigre est installé dans tous les départements d’Île-de-France.',
    chiffres: [
      { valeur: '82 %', texte: 'des Franciliens vivent dans une commune colonisée par le moustique tigre en 2025, contre 68 % en 2024.', source: SPF_IDF_ARBO },
      { valeur: '469', texte: 'cas importés de dengue (257), chikungunya (211) et Zika (1) signalés en Île-de-France entre mai et novembre 2025.', source: SPF_IDF_ARBO },
      { valeur: '81', texte: 'départements métropolitains colonisés par le moustique tigre début 2025, sur 96.', source: SPF_ARBO_2025 },
    ],
    analyse: [
      'Fin 2025, Paris et toute la petite couronne sont colonisés, sauf quatre communes de Seine-Saint-Denis. Le moustique tigre pond dans **les petites eaux stagnantes** : soucoupes, gouttières, seaux, pneus.',
      'Le geste le plus efficace reste de **vider l’eau stagnante** chaque semaine. Signalez sa présence sur le portail officiel de signalement du moustique tigre.',
    ],
    liens: [{ href: '/identifier-nuisible', label: 'Identifier un nuisible' }, { href: '/zones', label: 'Nos zones d’intervention' }],
  },
  {
    id: 'frelons',
    titre: 'Frelon asiatique',
    accroche: 'Arrivé en 2004, le frelon asiatique a désormais sa propre loi.',
    chiffres: [
      { valeur: '2004', texte: 'première observation en France, dans le Lot-et-Garonne, probablement arrivé avec des poteries importées de Chine.', source: MNHN_FRELON },
      { valeur: '14 mars 2025', texte: 'loi n° 2025-237 visant à endiguer sa prolifération : un plan national de lutte, décliné en plans départementaux.', source: LOI_FRELON },
    ],
    analyse: [
      'Le frelon asiatique construit souvent ses nids **très haut**, dans les arbres, où ils restent invisibles jusqu’à la chute des feuilles. En Île-de-France, nous en trouvons dans les grands arbres des jardins, sous les toits et dans les haies.',
      'Ne jamais détruire un nid soi-même : nous intervenons à la **perche jusqu’à 23 m**, à la nacelle pour les cas extrêmes, comme à **Champigny-sur-Marne** sur un nid à 12 mètres.',
    ],
    liens: [{ href: '/services/guepes-frelons', label: 'Destruction de nids' }, { href: '/blog/nid-frelons-asiatiques-12-metres-nacelle-champigny-sur-marne#video', label: 'Vidéo : nid à 12 m en nacelle' }],
  },
  {
    id: 'climat',
    titre: 'Chaleur et nuisibles',
    accroche: 'Des années plus chaudes allongent la saison des insectes.',
    chiffres: [
      { valeur: '4e', texte: 'année la plus chaude jamais mesurée en France : 2025, avec 14,0 °C de moyenne (+ 1,0 °C par rapport à la normale 1991-2020).', source: MF_2025 },
      { valeur: '3e', texte: 'été le plus chaud depuis 1900 : l’été 2025 (+ 1,9 °C), derrière 2003 et 2022.', source: MF_2025 },
    ],
    analyse: [
      'La chaleur accélère le développement des insectes. Pour l’anthrène, une étude citée par Wikipédia mesure une nymphose de **89 jours à 10 °C**, contre **9 jours à 25 °C**. Dans un logement chauffé, punaises de lit, cafards et anthrènes se développent toute l’année.',
      'Les étés chauds et secs favorisent aussi les **guêpes** et les **frelons**, et poussent les **fourmis** à entrer dans les maisons pour chercher de l’eau.',
    ],
    liens: [{ href: '/services/anthrenes', label: 'Anthrènes' }, { href: '/services/fourmis', label: 'Fourmis' }],
  },
]

// Chiffres de terrain d'Allo Nuisible IDF (confirmés par le gérant)
export const TERRAIN_CHIFFRES: Chiffre[] = [
  { valeur: '+ 1 500', texte: 'clients accompagnés en Île-de-France.', source: TERRAIN },
  { valeur: '5 min', texte: 'pour vous répondre, 7 jours sur 7.', source: TERRAIN },
  { valeur: '1 h', texte: 'en général pour intervenir sur un nid de frelons.', source: TERRAIN },
  { valeur: '23 m', texte: 'de portée pour notre perche télescopique.', source: TERRAIN },
]

export const SOURCES_EN_PLUS: Source[] = [CERTIBIOCIDE, { label: 'Stop punaises, site du gouvernement', url: 'https://stop-punaises.gouv.fr/' }]
