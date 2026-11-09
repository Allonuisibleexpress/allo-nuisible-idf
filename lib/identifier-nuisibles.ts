// Page « Identifier un nuisible » (/identifier-nuisible) : fiches, test interactif et comparateurs.
// Photos : Wikimedia Commons, licences libres, auteur et licence affichés sous chaque photo.
// Prix « à partir de » alignés sur /tarifs. Aucun chiffre inventé : tailles et signes issus de la littérature courante.

export type Piece = 'chambre' | 'cuisine' | 'humide' | 'textiles' | 'dehors' | 'murs'
export type Danger = 'inoffensif' | 'genant' | 'traiter' | 'urgent'

export type Fiche = {
  id: string
  nom: string
  latin: string
  surnoms: string
  taille: string
  pieces: Piece[]
  danger: Danger
  aspect: string
  signes: string
  conseil: string
  prix?: string
  service?: { href: string; label: string }
  guide?: { href: string; label: string }
  photo: { src: string; credit: string; licence: string; page: string }
}

export const PIECES: { id: Piece; label: string }[] = [
  { id: 'chambre', label: 'Chambre et lit' },
  { id: 'cuisine', label: 'Cuisine et placards' },
  { id: 'humide', label: 'Salle de bain et cave' },
  { id: 'textiles', label: 'Vêtements et tapis' },
  { id: 'murs', label: 'Murs, plafond, combles' },
  { id: 'dehors', label: 'Jardin, balcon, façade' },
]

export const DANGERS: Record<Danger, { label: string; couleur: string; fond: string }> = {
  inoffensif: { label: 'Inoffensif', couleur: '#4ade80', fond: 'rgba(74,222,128,0.12)' },
  genant: { label: 'Gênant', couleur: '#facc15', fond: 'rgba(250,204,21,0.12)' },
  traiter: { label: 'À traiter', couleur: '#fb923c', fond: 'rgba(251,146,60,0.14)' },
  urgent: { label: 'Agir vite', couleur: '#ef4444', fond: 'rgba(239,68,68,0.14)' },
}

const W = 'https://commons.wikimedia.org/wiki/File:'

export const FICHES: Fiche[] = [
  {
    id: 'punaise-de-lit', nom: 'Punaise de lit', latin: 'Cimex lectularius',
    surnoms: 'petite bête plate dans le lit, bête rousse du matelas',
    taille: '5 à 7 mm adulte, comme un pépin de pomme', pieces: ['chambre'], danger: 'urgent',
    aspect: 'Ovale, très plate, brun-rouge. Pas d’ailes : elle ne vole pas et ne saute pas. Les jeunes sont plus petits et presque translucides.',
    signes: 'Piqûres groupées ou en ligne au réveil, petits points noirs dans les coutures du matelas, traces de sang sur les draps, mues vides.',
    conseil: 'Ne déplacez pas votre matelas dans une autre pièce : vous étendriez l’infestation.',
    prix: 'dès 290 € TTC, 2 passages inclus',
    service: { href: '/services/punaises-de-lit', label: 'Traitement punaises de lit' },
    guide: { href: '/blog/comment-attrape-t-on-des-punaises-de-lit', label: 'Comment on les attrape' },
    photo: { src: '/identifier/cimex.jpg', credit: 'CDC, Dr. Gary Alpert (Harvard University)', licence: 'Domaine public', page: 'https://commons.wikimedia.org/wiki/File:Adult_bed_bug,_Cimex_lectularius.jpg' },
  },
  {
    id: 'blatte-germanique', nom: 'Blatte germanique (cafard)', latin: 'Blattella germanica',
    surnoms: 'cafard de cuisine, petite blatte blonde',
    taille: '1,1 à 1,6 cm', pieces: ['cuisine', 'humide'], danger: 'traiter',
    aspect: 'Brun clair, avec deux bandes sombres bien nettes derrière la tête. Court très vite et fuit la lumière.',
    signes: 'Sortie la nuit près de l’évier, du frigo ou du four, crottes comme du poivre moulu, odeur de moisi, petites capsules d’œufs brunes.',
    conseil: 'Une blatte vue le jour signifie souvent une population déjà importante.',
    prix: 'dès 120 € TTC',
    service: { href: '/services/cafards-blattes', label: 'Traitement cafards et blattes' },
    guide: { href: '/blog/gel-anti-cafard-ne-marche-pas', label: 'Pourquoi le gel ne suffit pas' },
    photo: { src: '/identifier/blattella.jpg', credit: 'Clemson University, USDA Cooperative Extension', licence: 'CC BY 3.0 US', page: 'https://commons.wikimedia.org/wiki/File:Blattella_germanica_1236168.jpg' },
  },
  {
    id: 'blatte-orientale', nom: 'Blatte orientale', latin: 'Blatta orientalis',
    surnoms: 'gros cafard noir, cafard des caves',
    taille: '2 à 2,5 cm', pieces: ['humide', 'cuisine'], danger: 'traiter',
    aspect: 'Noire ou brun très foncé, luisante, plus lente que la blatte germanique. Elle ne vole pas.',
    signes: 'Remonte des caves, des vide-ordures et des canalisations, surtout au rez-de-chaussée et dans les lieux humides.',
    conseil: 'Vérifiez les siphons et les passages de tuyaux : c’est souvent par là qu’elle entre.',
    prix: 'dès 120 € TTC',
    service: { href: '/services/cafards-blattes', label: 'Traitement cafards et blattes' },
    photo: { src: '/identifier/blatta.jpg', credit: 'Alvesgaspar', licence: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Cockroach_May_2007-1.jpg' },
  },
  {
    id: 'rat', nom: 'Rat brun (surmulot)', latin: 'Rattus norvegicus',
    surnoms: 'rat d’égout, gros rat gris',
    taille: '20 à 27 cm sans la queue', pieces: ['murs', 'dehors', 'cuisine'], danger: 'urgent',
    aspect: 'Gris-brun, museau arrondi, petites oreilles, queue épaisse un peu plus courte que le corps.',
    signes: 'Crottes de 1 à 2 cm en forme de fuseau, trous au pied des murs, terriers au jardin, câbles rongés, traces grasses le long des murs.',
    conseil: 'Ne touchez ni les crottes ni l’urine à mains nues : le rat peut transmettre la leptospirose.',
    prix: 'dès 120 € TTC',
    service: { href: '/services/deratisation', label: 'Dératisation professionnelle' },
    guide: { href: '/blog/rat-mode-de-vie', label: 'Comment vit le rat' },
    photo: { src: '/identifier/rattus.jpg', credit: 'Charles J. Sharp', licence: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Brown_rat_(Rattus_norvegicus)_Drenthe_2.jpg' },
  },
  {
    id: 'souris', nom: 'Souris domestique', latin: 'Mus musculus',
    surnoms: 'petite souris grise',
    taille: '7 à 10 cm sans la queue', pieces: ['cuisine', 'murs'], danger: 'traiter',
    aspect: 'Gris-brun, grandes oreilles rondes, queue aussi longue que le corps.',
    signes: 'Crottes de 3 à 6 mm comme un grain de riz, emballages grignotés, grattements dans les murs ou le faux plafond la nuit.',
    conseil: 'Une souris passe par un trou de la taille d’un crayon : bouchez les passages autour des tuyaux.',
    prix: 'dès 120 € TTC',
    service: { href: '/services/deratisation', label: 'Dératisation professionnelle' },
    guide: { href: '/blog/souris-par-ou-entrent-elles', label: 'Par où entrent les souris' },
    photo: { src: '/identifier/mus.jpg', credit: 'Ahunt', licence: 'CC0', page: 'https://commons.wikimedia.org/wiki/File:House_mouse_(Mus_musculus)_2732.jpg' },
  },
  {
    id: 'pigeon', nom: 'Pigeon biset', latin: 'Columba livia',
    surnoms: 'pigeon des villes',
    taille: '30 à 35 cm', pieces: ['dehors'], danger: 'genant',
    aspect: 'Gris-bleu, deux barres noires sur les ailes, reflets verts et violets au cou.',
    signes: 'Fientes acides sur le balcon et les rebords, nid dans une jardinière ou derrière un climatiseur, roucoulements dès l’aube.',
    conseil: 'Ne les nourrissez pas : un point de nourrissage fixe une colonie et attire aussi les rats.',
    prix: 'dès 150 € TTC',
    service: { href: '/services/pigeons', label: 'Dépigeonnage' },
    guide: { href: '/blog/nid-de-pigeon-balcon-enlever', label: 'Nid de pigeon sur le balcon' },
    photo: { src: '/identifier/columba.jpg', credit: 'Luc Viatour', licence: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Columba_livia_Luc_Viatour.jpg' },
  },
  {
    id: 'chenille-processionnaire', nom: 'Chenille processionnaire du pin', latin: 'Thaumetopoea pityocampa',
    surnoms: 'chenilles en file indienne',
    taille: '3 à 4 cm', pieces: ['dehors'], danger: 'urgent',
    aspect: 'Chenilles poilues brun-orangé qui se déplacent en longue file au sol, tête contre queue.',
    signes: 'Nids blancs et soyeux en haut des pins en hiver, processions au sol à la fin de l’hiver et au printemps.',
    conseil: 'Leurs poils sont très urticants : tenez les enfants et les chiens à distance, ne les touchez jamais.',
    prix: 'dès 89 € TTC',
    service: { href: '/services/chenilles-processionnaires', label: 'Traitement des chenilles' },
    guide: { href: '/blog/chenille-processionnaire-du-pin', label: 'La processionnaire du pin' },
    photo: { src: '/identifier/thaumetopoea.jpg', credit: 'Tuscia', licence: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Thaumetopoea_Pityocampa_-_Procession.jpg' },
  },
  {
    id: 'acarien', nom: 'Acarien de la poussière', latin: 'Dermatophagoides pteronyssinus',
    surnoms: 'acarien du matelas',
    taille: '0,2 à 0,4 mm, invisible à l’œil nu', pieces: ['chambre', 'textiles'], danger: 'genant',
    aspect: 'Invisible sans microscope (photo au microscope électronique). Il ne pique pas.',
    signes: 'Éternuements et nez bouché au réveil, yeux qui grattent, asthme qui empire au lit. Aucune piqûre, aucune bête visible.',
    conseil: 'Aérez chaque jour et visez une humidité basse : les acariens adorent l’air humide.',
    prix: 'dès 120 € TTC',
    service: { href: '/services/acariens', label: 'Traitement des acariens' },
    guide: { href: '/blog/acariens-ou-punaises-de-lit', label: 'Acariens ou punaises de lit ?' },
    photo: { src: '/identifier/dermatophagoides.jpg', credit: 'Gouvernement des États-Unis', licence: 'Domaine public', page: 'https://commons.wikimedia.org/wiki/File:House_Dust_Mite.jpg' },
  },
  {
    id: 'puce', nom: 'Puce du chat', latin: 'Ctenocephalides felis',
    surnoms: 'petite bête noire qui saute, puce de parquet',
    taille: '1 à 3 mm', pieces: ['chambre', 'textiles'], danger: 'traiter',
    aspect: 'Brun-noir, aplatie sur les côtés, elle saute très haut et disparaît d’un bond.',
    signes: 'Piqûres groupées aux chevilles et aux mollets, animal qui se gratte, petits grains noirs dans son pelage ou son panier.',
    conseil: 'Traitez l’animal chez le vétérinaire en même temps que le logement, sinon les puces reviennent.',
    prix: 'dès 120 € TTC',
    service: { href: '/services/puces', label: 'Traitement des puces' },
    guide: { href: '/blog/puces-tout-savoir', label: 'Tout savoir sur les puces' },
    photo: { src: '/identifier/ctenocephalides.jpg', credit: 'Erturac', licence: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Flea.JPG' },
  },
  {
    id: 'mite-vetements', nom: 'Mite des vêtements', latin: 'Tineola bisselliella',
    surnoms: 'mite de placard, petit papillon doré',
    taille: '6 à 9 mm', pieces: ['textiles'], danger: 'genant',
    aspect: 'Petit papillon beige doré qui fuit la lumière. Ce sont ses larves, blanches, qui font les dégâts.',
    signes: 'Trous dans la laine, le cachemire ou la soie, petits fourreaux soyeux dans les plis, vêtements rongés au fond du placard.',
    conseil: 'Lavez à chaud ou passez au congélateur les vêtements touchés avant de les ranger.',
    guide: { href: '/blog/mites-vetements-origine-traitement-prevention', label: 'Se débarrasser des mites' },
    photo: { src: '/identifier/tineola.jpg', credit: 'Olaf Leillinger', licence: 'CC BY-SA 2.5', page: 'https://commons.wikimedia.org/wiki/File:Tineola.bisselliella.7218.jpg' },
  },
  {
    id: 'mite-alimentaire', nom: 'Mite alimentaire (pyrale indienne)', latin: 'Plodia interpunctella',
    surnoms: 'papillon de cuisine, mite de la farine',
    taille: '8 à 10 mm', pieces: ['cuisine'], danger: 'genant',
    aspect: 'Petit papillon aux ailes bicolores : base claire, bout cuivré. Il vole le soir dans la cuisine.',
    signes: 'Fils soyeux et petits vers dans la farine, les céréales, le riz ou les fruits secs.',
    conseil: 'Jetez les paquets touchés et rangez le reste dans des bocaux fermés.',
    guide: { href: '/blog/mites-alimentaires-cuisine', label: 'Mites alimentaires en cuisine' },
    photo: { src: '/identifier/plodia.jpg', credit: 'Uhw', licence: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:Dead_Plodia_interpunctella_(most_likely)_(3533).jpg' },
  },
  {
    id: 'poisson-argent', nom: 'Poisson d’argent', latin: 'Lepisma saccharinum',
    surnoms: 'lépisme, petite bête argentée',
    taille: '1 à 1,2 cm', pieces: ['humide'], danger: 'inoffensif',
    aspect: 'Gris argenté, en forme de goutte, avec trois filaments au bout du corps. Se faufile très vite.',
    signes: 'Sort la nuit dans la salle de bain, la cuisine ou près des papiers, là où il fait humide.',
    conseil: 'Il ne pique pas et ne transmet rien : c’est surtout le signe d’un excès d’humidité.',
    photo: { src: '/identifier/lepisma.jpg', credit: 'Jean and Fred Hort', licence: 'CC BY 2.0', page: 'https://commons.wikimedia.org/wiki/File:Lepisma_saccharinum_camouflaged.jpg' },
  },
  {
    id: 'scutigere', nom: 'Scutigère', latin: 'Scutigera coleoptrata',
    surnoms: 'mille-pattes rapide, araignée à cent pattes',
    taille: '2 à 3 cm de corps, beaucoup plus avec les pattes', pieces: ['humide', 'murs'], danger: 'inoffensif',
    aspect: '15 paires de très longues pattes, corps gris-jaune rayé. Extrêmement rapide.',
    signes: 'Aperçue la nuit sur les murs de la salle de bain ou de la cave.',
    conseil: 'Elle impressionne mais elle chasse les cafards, les mites et les poissons d’argent.',
    photo: { src: '/identifier/scutigera.jpg', credit: 'Syrio', licence: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Scutigera_coleoptrata_Piazzo.jpg' },
  },
  {
    id: 'anthrene', nom: 'Anthrène des tapis', latin: 'Anthrenus verbasci',
    surnoms: 'petit scarabée tacheté, ver poilu des tapis',
    taille: '2 à 4 mm adulte', pieces: ['textiles', 'chambre'], danger: 'genant',
    aspect: 'Adulte rond et tacheté. Sa larve, brune et très poilue, est celle qui abîme les textiles.',
    signes: 'Tapis, moquettes et lainages troués, petites mues poilues le long des plinthes, adultes aux fenêtres au printemps.',
    conseil: 'Aspirez à fond sous les meubles et le long des plinthes : c’est là que vivent les larves.',
    guide: { href: '/blog/anthrenes-origine-traitement', label: 'Tout savoir sur les anthrènes' },
    photo: { src: '/identifier/anthrenus.jpg', credit: 'Didier Descouens', licence: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Anthrenus_verbasci_MHNT_Fronton_Side_view.jpg' },
  },
  {
    id: 'charancon', nom: 'Charançon du riz', latin: 'Sitophilus oryzae',
    surnoms: 'petite bête noire dans le riz ou les pâtes',
    taille: '2 à 3 mm', pieces: ['cuisine'], danger: 'genant',
    aspect: 'Brun foncé, avec un museau allongé en forme de trompe.',
    signes: 'Petits insectes et grains percés dans le riz, les pâtes, la semoule ou les céréales.',
    conseil: 'Jetez les paquets touchés, nettoyez le placard et passez les denrées neuves quelques jours au congélateur.',
    photo: { src: '/identifier/sitophilus.jpg', credit: 'Manaaki Whenua, Landcare Research', licence: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:Sitophilus_oryzae_lateral.jpg' },
  },
  {
    id: 'moustique-tigre', nom: 'Moustique tigre', latin: 'Aedes albopictus',
    surnoms: 'moustique rayé noir et blanc',
    taille: 'environ 5 mm', pieces: ['dehors', 'chambre'], danger: 'genant',
    aspect: 'Noir rayé de blanc, avec une fine ligne blanche au milieu du dos. Il pique surtout le jour.',
    signes: 'Piqûres en journée sur les jambes, sur le balcon ou au jardin. Il pond dans la moindre eau stagnante.',
    conseil: 'Videz chaque semaine les soucoupes, arrosoirs et récipients d’eau : c’est le geste le plus efficace.',
    photo: { src: '/identifier/aedes.jpg', credit: 'James Gathany, CDC', licence: 'Domaine public', page: 'https://commons.wikimedia.org/wiki/File:Aedes_Albopictus.jpg' },
  },
  {
    id: 'perce-oreille', nom: 'Perce-oreille', latin: 'Forficula auricularia',
    surnoms: 'forficule, bête à pinces',
    taille: '1 à 1,5 cm', pieces: ['dehors', 'humide'], danger: 'inoffensif',
    aspect: 'Brun, allongé, avec deux pinces au bout du corps.',
    signes: 'Caché dans les fleurs, les fruits, les volets ou le linge étendu dehors.',
    conseil: 'Il ne perce pas les oreilles et ne transmet rien : il suffit de le remettre dehors.',
    photo: { src: '/identifier/forficula.jpg', credit: 'Luis Miguel Bugallo Sánchez', licence: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Forficula_Auricularia_en_Bastavales,_Galiza_090818_002.jpg' },
  },
  {
    id: 'cloporte', nom: 'Cloporte', latin: 'Porcellio scaber',
    surnoms: 'petite bête grise à carapace',
    taille: '1 à 1,5 cm', pieces: ['humide', 'dehors'], danger: 'inoffensif',
    aspect: 'Gris, bombé, couvert de plaques. C’est un petit crustacé terrestre, pas un insecte.',
    signes: 'Sous les pots, dans la cave, les vides sanitaires ou près des murs humides.',
    conseil: 'Sa présence à l’intérieur signale de l’humidité : c’est elle qu’il faut régler.',
    photo: { src: '/identifier/porcellio.jpg', credit: 'Michel Langeveld', licence: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Porcellio_scaber_174410346.jpg' },
  },
  {
    id: 'gendarme', nom: 'Gendarme', latin: 'Pyrrhocoris apterus',
    surnoms: 'punaise rouge et noire, soldat',
    taille: '1 cm environ', pieces: ['dehors'], danger: 'inoffensif',
    aspect: 'Rouge vif avec des taches noires, souvent en groupes serrés.',
    signes: 'Au pied des tilleuls et des murets ensoleillés, dès le printemps.',
    conseil: 'Il ne pique pas et n’entre presque jamais dans les maisons : aucun traitement nécessaire.',
    photo: { src: '/identifier/pyrrhocoris.jpg', credit: 'Diego Delso', licence: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Zapatero_(Pyrrhocoris_apterus),_Hartelholz,_M%C3%BAnich,_Alemania,_2020-06-28,_DD_362-382_FS.jpg' },
  },
  {
    id: 'xylocope', nom: 'Xylocope (abeille charpentière)', latin: 'Xylocopa violacea',
    surnoms: 'gros bourdon noir, abeille noire',
    taille: '2 à 3 cm', pieces: ['dehors'], danger: 'inoffensif',
    aspect: 'Grosse abeille toute noire aux ailes bleu-violet. Vol lourd et bruyant.',
    signes: 'Visite les fleurs du jardin, creuse parfois de petits trous ronds dans le bois mort.',
    conseil: 'Elle est pacifique et utile à la pollinisation : on la laisse tranquille.',
    photo: { src: '/identifier/xylocopa.jpg', credit: 'Krigore', licence: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Violet_carpenter_bee_%E2%80%93_Xylocopa_violacea_%E2%80%93_zadrzechnia_fioletowa_%E2%80%93.jpg' },
  },
  {
    id: 'tegenaire', nom: 'Tégénaire (araignée des maisons)', latin: 'Eratigena atrica',
    surnoms: 'grosse araignée brune',
    taille: 'jusqu’à 7 à 10 cm pattes comprises', pieces: ['murs', 'humide'], danger: 'inoffensif',
    aspect: 'Brune, longues pattes velues. Les mâles se promènent dans les maisons à la fin de l’été.',
    signes: 'Toile en nappe dans un coin de cave, de garage ou de grenier.',
    conseil: 'Impressionnante mais inoffensive pour l’homme : elle mange mouches, moustiques et autres insectes.',
    photo: { src: '/identifier/eratigena.jpg', credit: 'Mike Pennington', licence: 'CC BY-SA 2.0', page: 'https://commons.wikimedia.org/wiki/File:Giant_House_Spider_(Eratigena_atrica_agg.),_Beauchief,_Sheffield_-_geograph.org.uk_-_7201428.jpg' },
  },
  {
    id: 'tique', nom: 'Tique', latin: 'Ixodes ricinus',
    surnoms: 'tique du chien',
    taille: '1 à 3 mm à jeun, jusqu’à 1 cm gorgée', pieces: ['dehors'], danger: 'urgent',
    aspect: 'Ovale, brun-rouge à noir, 8 pattes. Gonfle et devient grise une fois gorgée de sang.',
    signes: 'Petite bête accrochée à la peau après une balade dans l’herbe haute ou en forêt, ou sur le chien.',
    conseil: 'Retirez-la vite avec un tire-tique, sans l’écraser. Une plaque rouge qui s’étend dans les jours suivants : consultez un médecin.',
    photo: { src: '/identifier/ixodes.jpg', credit: 'Richard Bartz', licence: 'CC BY-SA 2.5', page: 'https://commons.wikimedia.org/wiki/File:Ixodus_ricinus_5x.jpg' },
  },
  {
    id: 'fourmi-noire', nom: 'Fourmi noire des jardins', latin: 'Lasius niger',
    surnoms: 'petite fourmi noire',
    taille: '3 à 5 mm', pieces: ['cuisine', 'dehors'], danger: 'traiter',
    aspect: 'Petite, noire à brun foncé. La fourmi la plus répandue.',
    signes: 'Longues pistes vers le sucre au printemps et en été, venues du jardin ou d’une fissure.',
    conseil: 'Ne pulvérisez pas : il faut atteindre la reine avec un appât à action lente.',
    prix: 'dès 120 € TTC',
    service: { href: '/services/fourmis', label: 'Traitement des fourmis' },
    guide: { href: '/fourmis', label: 'Les 11 types de fourmis' },
    photo: { src: '/fourmis/lasius-niger.jpg', credit: 'Katja Schulz', licence: 'CC BY 2.0', page: W + 'Black_Garden_Ant_tending_Citrus_Mealybug_(16063538972).jpg' },
  },
  {
    id: 'fourmi-pharaon', nom: 'Fourmi pharaon', latin: 'Monomorium pharaonis',
    surnoms: 'minuscule fourmi jaune',
    taille: 'environ 2 mm', pieces: ['cuisine', 'humide', 'murs'], danger: 'traiter',
    aspect: 'Minuscule, jaune pâle, presque transparente.',
    signes: 'Présente toute l’année dans les immeubles chauffés : prises, plinthes, salle de bain.',
    conseil: 'Surtout pas de spray : la colonie, qui a de nombreuses reines, se divise et s’étend.',
    prix: 'dès 120 € TTC',
    service: { href: '/services/fourmis', label: 'Traitement des fourmis' },
    guide: { href: '/fourmis', label: 'Les 11 types de fourmis' },
    photo: { src: '/fourmis/monomorium-pharaonis.jpg', credit: 'April Nobile, AntWeb', licence: 'CC BY 4.0', page: W + 'Monomorium_pharaonis_casent0173986_profile_1.jpg' },
  },
  {
    id: 'frelon-asiatique', nom: 'Frelon asiatique', latin: 'Vespa velutina',
    surnoms: 'frelon à pattes jaunes',
    taille: '2,5 à 3 cm', pieces: ['dehors', 'murs'], danger: 'urgent',
    aspect: 'Thorax noir, abdomen sombre avec un seul anneau orangé, bout des pattes jaune.',
    signes: 'Nid sphérique en papier, souvent très haut dans un arbre, parfois sous un toit ou dans une haie.',
    conseil: 'Ne vous approchez jamais d’un nid : la colonie peut attaquer en groupe.',
    prix: 'dès 89 € TTC',
    service: { href: '/services/guepes-frelons', label: 'Destruction de nid de frelons' },
    guide: { href: '/blog/frelon-asiatique-tout-savoir', label: 'Tout savoir sur le frelon asiatique' },
    photo: { src: '/frelons/vespa-velutina.jpg', credit: 'Charles J. Sharp', licence: 'CC BY-SA 4.0', page: W + 'Asian_hornet_(Vespa_velutina).jpg' },
  },
  {
    id: 'frelon-europeen', nom: 'Frelon européen', latin: 'Vespa crabro',
    surnoms: 'gros frelon roux',
    taille: '2,5 à 3,5 cm', pieces: ['dehors', 'murs'], danger: 'urgent',
    aspect: 'Tête et thorax brun-roux, abdomen jaune rayé de brun. Bien plus gros qu’une guêpe.',
    signes: 'Nid caché dans un arbre creux, un grenier, un coffre de volet ou un mur. Vole aussi la nuit, attiré par la lumière.',
    conseil: 'Bourdonnement grave derrière un volet ? N’ouvrez pas : appelez un professionnel.',
    prix: 'dès 89 € TTC',
    service: { href: '/services/guepes-frelons', label: 'Destruction de nid de frelons' },
    guide: { href: '/blog/frelon-europeen-tout-savoir', label: 'Tout savoir sur le frelon européen' },
    photo: { src: '/frelons/vespa-crabro.jpg', credit: 'Didier Descouens', licence: 'CC BY-SA 4.0', page: W + 'Frelon_europeen.jpg' },
  },
  {
    id: 'guepe', nom: 'Guêpe commune', latin: 'Vespula vulgaris',
    surnoms: 'guêpe jaune et noire',
    taille: '1,2 à 1,8 cm', pieces: ['dehors', 'murs'], danger: 'traiter',
    aspect: 'Lisse, jaune vif rayé de noir, taille très fine entre le thorax et l’abdomen.',
    signes: 'Va-et-vient régulier vers un trou dans le sol, un mur, une toiture ou un coffre de volet.',
    conseil: 'Ne bouchez jamais l’entrée d’un nid : les guêpes chercheraient une autre sortie, parfois vers l’intérieur.',
    prix: 'dès 89 € TTC',
    service: { href: '/services/guepes-frelons', label: 'Destruction de nid de guêpes' },
    guide: { href: '/blog/guepes-tout-savoir', label: 'Tout savoir sur les guêpes' },
    photo: { src: '/guepes/vespula-vulgaris.jpg', credit: 'Magne Flåten', licence: 'CC BY-SA 3.0', page: W + 'Vespula_vulgaris-m.jpg' },
  },
  {
    id: 'punaise-diabolique', nom: 'Punaise diabolique', latin: 'Halyomorpha halys',
    surnoms: 'punaise des bois, punaise marbrée',
    taille: '1,2 à 1,7 cm', pieces: ['dehors', 'chambre'], danger: 'genant',
    aspect: 'Large, en forme de bouclier, marbrée de brun, antennes avec des bandes claires.',
    signes: 'Arrive en nombre aux fenêtres en automne pour passer l’hiver au chaud. Odeur forte si on l’écrase.',
    conseil: 'Elle ne pique pas et ne se nourrit pas de sang : rien à voir avec la punaise de lit.',
    guide: { href: '/blog/punaises-des-bois-maison', label: 'Punaises des bois dans la maison' },
    photo: { src: '/punaises-bois/halyomorpha-halys.jpg', credit: 'Hectonichus', licence: 'CC BY-SA 4.0', page: W + 'Pentatomidae_-_Halyomorpha_halys-001.JPG' },
  },
]

// ── Test « détective » : chaque réponse mène à une question ou à un verdict ──
export type Choix = { label: string; suite?: string; verdict?: string[] }
export type Etape = { id: string; question: string; aide?: string; choix: Choix[] }

export const ETAPES: Record<string, Etape> = {
  depart: {
    id: 'depart', question: 'Qu’est-ce qui vous a mis la puce à l’oreille ?', aide: 'Choisissez l’indice le plus fort.',
    choix: [
      { label: 'Des piqûres ou des boutons', suite: 'piqures' },
      { label: 'Une bête qui court ou qui rampe', suite: 'ou-rampe' },
      { label: 'Une bête qui vole', suite: 'vole' },
      { label: 'Des crottes ou des traces', suite: 'crottes' },
      { label: 'Des bruits dans les murs ou le plafond', suite: 'bruits' },
      { label: 'Des dégâts : trous, aliments abîmés', suite: 'degats' },
    ],
  },
  piqures: {
    id: 'piqures', question: 'Où et quand sont apparues les piqûres ?',
    choix: [
      { label: 'Au réveil, en ligne ou en grappe sur les bras, le dos, le cou', verdict: ['punaise-de-lit'] },
      { label: 'Aux chevilles et aux mollets, souvent avec un animal à la maison', verdict: ['puce'] },
      { label: 'En journée, dehors ou sur le balcon', verdict: ['moustique-tigre'] },
      { label: 'Une petite bête encore accrochée à la peau', verdict: ['tique'] },
      { label: 'Pas de piqûre, mais j’éternue et j’ai le nez bouché au lit', verdict: ['acarien'] },
    ],
  },
  'ou-rampe': {
    id: 'ou-rampe', question: 'Où l’avez-vous vue ?',
    choix: [
      { label: 'Dans la cuisine', suite: 'cuisine' },
      { label: 'Dans la chambre ou sur le lit', suite: 'chambre' },
      { label: 'Salle de bain, cave, endroit humide', suite: 'humide' },
      { label: 'Dehors, sur la façade ou le balcon', suite: 'dehors' },
    ],
  },
  cuisine: {
    id: 'cuisine', question: 'À quoi ressemble-t-elle ?',
    choix: [
      { label: 'Brun clair, 1 à 1,5 cm, elle file à toute vitesse', verdict: ['blatte-germanique'] },
      { label: 'Noire et luisante, 2 cm, plutôt lente', verdict: ['blatte-orientale'] },
      { label: 'Minuscule, elles avancent en file', verdict: ['fourmi-noire', 'fourmi-pharaon'] },
      { label: 'Toute petite, dans le riz ou les pâtes', verdict: ['charancon'] },
    ],
  },
  chambre: {
    id: 'chambre', question: 'À quoi ressemble-t-elle ?',
    choix: [
      { label: 'Plate, brun-rouge, de la taille d’un pépin de pomme', verdict: ['punaise-de-lit'] },
      { label: 'Minuscule et noire, elle saute', verdict: ['puce'] },
      { label: 'Large en forme de bouclier, marbrée, près de la fenêtre', verdict: ['punaise-diabolique'] },
      { label: 'Une grosse araignée brune', verdict: ['tegenaire'] },
    ],
  },
  humide: {
    id: 'humide', question: 'À quoi ressemble-t-elle ?',
    choix: [
      { label: 'Argentée, en forme de goutte, avec des filaments', verdict: ['poisson-argent'] },
      { label: 'Plein de très longues pattes, ultra rapide', verdict: ['scutigere'] },
      { label: 'Grise, bombée, avec une carapace', verdict: ['cloporte'] },
      { label: 'Noire et luisante, comme un gros cafard', verdict: ['blatte-orientale'] },
    ],
  },
  dehors: {
    id: 'dehors', question: 'À quoi ressemble-t-elle ?',
    choix: [
      { label: 'Des chenilles poilues en file indienne', verdict: ['chenille-processionnaire'] },
      { label: 'Rouge et noire, en groupe', verdict: ['gendarme'] },
      { label: 'Avec des pinces au bout du corps', verdict: ['perce-oreille'] },
      { label: 'Un gros rongeur gris le long des murs', verdict: ['rat'] },
    ],
  },
  vole: {
    id: 'vole', question: 'Qu’est-ce qui vole ?',
    choix: [
      { label: 'Gros insecte rayé, jaune, orange ou noir', suite: 'rayes' },
      { label: 'Un petit papillon', suite: 'papillon' },
      { label: 'Un moustique rayé noir et blanc', verdict: ['moustique-tigre'] },
      { label: 'Des pigeons sur le balcon', verdict: ['pigeon'] },
    ],
  },
  rayes: {
    id: 'rayes', question: 'Regardez bien ses couleurs :',
    choix: [
      { label: 'Noir, un seul anneau orange, pattes jaunes', verdict: ['frelon-asiatique'] },
      { label: 'Gros, roux et jaune', verdict: ['frelon-europeen'] },
      { label: 'Jaune vif et noir, taille très fine', verdict: ['guepe'] },
      { label: 'Tout noir, ailes bleu-violet', verdict: ['xylocope'] },
    ],
  },
  papillon: {
    id: 'papillon', question: 'Où l’avez-vous vu ?',
    choix: [
      { label: 'Dans l’armoire, près des vêtements', verdict: ['mite-vetements'] },
      { label: 'Dans la cuisine, près des placards à provisions', verdict: ['mite-alimentaire'] },
    ],
  },
  crottes: {
    id: 'crottes', question: 'À quoi ressemblent-elles ?',
    choix: [
      { label: 'Allongées, 1 à 2 cm', verdict: ['rat'] },
      { label: 'Comme des grains de riz noirs, 3 à 6 mm', verdict: ['souris'] },
      { label: 'Comme du poivre moulu, près du frigo ou de l’évier', verdict: ['blatte-germanique'] },
      { label: 'Petits points noirs sur le matelas', verdict: ['punaise-de-lit'] },
      { label: 'Fientes blanches sur le balcon', verdict: ['pigeon'] },
    ],
  },
  bruits: {
    id: 'bruits', question: 'Quel genre de bruit ?',
    choix: [
      { label: 'Grattements et petites courses la nuit', verdict: ['souris', 'rat'] },
      { label: 'Bourdonnement grave derrière un volet ou sous le toit', verdict: ['frelon-europeen', 'frelon-asiatique', 'guepe'] },
    ],
  },
  degats: {
    id: 'degats', question: 'Qu’est-ce qui est abîmé ?',
    choix: [
      { label: 'Pulls en laine, cachemire, soie', verdict: ['mite-vetements', 'anthrene'] },
      { label: 'Tapis, moquette, avec des petites mues poilues', verdict: ['anthrene'] },
      { label: 'Farine ou céréales pleines de fils', verdict: ['mite-alimentaire'] },
      { label: 'Riz ou pâtes avec de petits insectes', verdict: ['charancon'] },
      { label: 'Câbles, emballages ou isolant rongés', verdict: ['souris', 'rat'] },
    ],
  },
}

export const ficheParId = (id: string) => FICHES.find((f) => f.id === id)!
