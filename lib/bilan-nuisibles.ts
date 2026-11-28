// « Baromètre des nuisibles Île-de-France 2026 : punaises de lit, dératisation » (ex-Bilan Nuisibles) (22/11/2026, demande de l'utilisateur) : chiffres clés sourcés, à citer.
// Chaque chiffre a été vérifié sur la source indiquée (pages officielles lues le 22/11/2026) ; rien n'est estimé ni
// inventé. Les chiffres « terrain » sont ceux d'Allo Nuisible IDF, confirmés par le gérant.
export type Source = { label: string; url: string }
export type Chiffre = { valeur: string; texte: string; source: Source }
export type Theme = { id: string; titre: string; accroche: string; chiffres: Chiffre[]; analyse: string[]; liens: { href: string; label: string }[] }

const SPF_LEPTO_2024: Source = { label: 'Santé publique France, Leptospirose en France en 2024 (publié le 6 février 2026)', url: 'https://www.santepubliquefrance.fr/leptospirose/bulletin-national/leptospirose-en-france-en-2024-donnees-de-la-declaration-obligatoire' }
const SPF_LEPTO_2025: Source = { label: 'Santé publique France, Leptospirose en France en 2025 (publié le 30 juillet 2026)', url: 'https://www.santepubliquefrance.fr/leptospirose/bulletin-national/leptospirose-en-france-en-2025-donnees-du-signalement-obligatoire' }
const STOP_PUNAISES_TEL: Source = { label: 'Gouvernement, stop-punaises.gouv.fr (plan national de mars 2021, service Info logement indigne)', url: 'https://stop-punaises.gouv.fr/' }
const ARS_ESPECES: Source = { label: 'ARS Île-de-France, Espèces nuisibles et parasites (espèces à enjeux pour la santé humaine)', url: 'https://www.iledefrance.ars.sante.fr/especes-nuisibles-et-parasites' }
const ARS_CHENILLES: Source = { label: 'ARS Île-de-France, Chenilles urticantes (rôle du maire, article R. 1338-8 du code de la santé publique)', url: 'https://www.iledefrance.ars.sante.fr/chenilles-urticantes' }
const LOI_89_ART6: Source = { label: 'Loi n° 89-462 du 6 juillet 1989, article 6 : logement décent, exempt de toute infestation d’espèces nuisibles et parasites (Légifrance)', url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310' }
const PARIS_RATS: Source = { label: 'Ville de Paris, Comment Paris lutte contre les rats (mis à jour le 16 octobre 2026)', url: 'https://www.paris.fr/pages/les-rats-a-paris-le-saviez-vous-6418' }
const SPF_IDF_ARBO: Source = { label: 'Santé publique France Île-de-France, Le moustique tigre : situation sanitaire en 2025 (mai 2026)', url: 'https://invs.santepubliquefrance.fr/sites/default/files/2026-05/infog_arbo_idf_20260520.pdf' }
const SPF_ARBO_2025: Source = { label: 'Santé publique France, Chikungunya, dengue, Zika et West Nile : surveillance renforcée 2025', url: 'https://www.santepubliquefrance.fr/maladies-a-transmission-vectorielle/chikungunya/chikungunya-dengue-zika-et-west-nile-donnees-de-la-surveillance-renforcee-en-france-hexagonale-2025' }
const ANSES_PUNAISES: Source = { label: 'Anses, Punaises de lit : des conséquences sur le budget et la qualité de vie des Français (juillet 2023)', url: 'https://www.anses.fr/fr/content/punaises-de-lit-des-consequences-sur-le-budget-et-la-qualite-de-vie-des-francais' }
const AN_PUNAISES: Source = { label: 'Assemblée nationale, question écrite n° 12397 (chiffres de l’Anses)', url: 'https://questions.assemblee-nationale.fr/dyn/16/questions/QANR5L16QE12397.pdf' }
const ANSES_AVIS: Source = { label: 'Anses, avis du 3 juillet 2023 sur les punaises de lit, saisine 2021-SA-0147 (Maisons-Alfort)', url: 'https://www.vie-publique.fr/files/rapports/fichiers_joints/290435_AVIS.pdf' }
const ANSES_RAPPORT: Source = { label: 'Anses, rapport d’expertise collective « Les punaises de lit : impacts, prévention et lutte » (2023)', url: 'https://www.vie-publique.fr/rapport/290435-anses-punaises-de-lit-impacts-prevention-et-lutte-expertise-collective' }
const EPA: Source = { label: 'EPA (agence américaine de l’environnement), Bed bugs : appearance and life cycle', url: 'https://www.epa.gov/bedbugs/bed-bugs-appearance-and-life-cycle' }
const KENTUCKY: Source = { label: 'Université du Kentucky, Bed bugs (fiche ENTFACT-636)', url: 'https://entomology.mgcafe.uky.edu/ef636' }
const WIKI_PUNAISE: Source = { label: 'Wikipédia, Punaise de lit (d’après P. Delaunay 2015 et Reinhardt & Siva-Jothy 2007)', url: 'https://fr.wikipedia.org/wiki/Punaise_de_lit' }
const STOP_PUNAISES: Source = { label: 'Gouvernement, stop-punaises.gouv.fr', url: 'https://stop-punaises.gouv.fr/' }
const DOUANE_SNIPER: Source = { label: 'Douane et DGCCRF, Recrudescence des saisies de Sniper (2 octobre 2024)', url: 'https://www.douane.gouv.fr/actualites/recrudescence-des-saisies-de-sniper-la-douane-et-la-dgccrf-alertent-les-consommateurs' }
const MNHN_FRELON: Source = { label: 'Muséum national d’Histoire naturelle, Le frelon asiatique (frelonasiatique.mnhn.fr)', url: 'https://frelonasiatique.mnhn.fr/home' }
const LOI_FRELON: Source = { label: 'Loi n° 2025-237 du 14 mars 2025 visant à endiguer la prolifération du frelon asiatique (AIDA, Ineris)', url: 'https://aida.ineris.fr/reglementation/loi-ndeg-2025-237-140325-visant-a-endiguer-proliferation-frelon-asiatique-a' }
const MF_2025: Source = { label: 'Météo-France, Bilan climatique 2025', url: 'https://meteofrance.fr/sites/meteofrance.fr/files/files/editorial/bilan_climatique_2025-V3.4-web.pdf' }
const CERTIBIOCIDE: Source = { label: 'Arrêté du 9 octobre 2013 relatif à l’exercice de l’activité d’utilisateur professionnel de produits biocides (AIDA, Ineris)', url: 'https://aida.ineris.fr/reglementation/arrete-091013-relatif-conditions-dexercice-lactivite-dutilisateur-professionnel' }
const TERRAIN: Source = { label: 'Allo Nuisible IDF, données de l’entreprise (Saint-Maurice, 94)', url: 'https://allonuisibleidf.fr/qui-sommes-nous' }

export const THEMES: Theme[] = [
  {
    id: 'punaises-ampleur',
    titre: 'Punaises de lit : l’ampleur',
    accroche: 'Plus d’un foyer sur dix touché en cinq ans : les punaises de lit sont devenues un sujet de santé publique.',
    chiffres: [
      { valeur: '11 %', texte: 'des ménages français auraient été infestés par des punaises de lit entre 2017 et 2022 (enquête en population générale menée pour l’Anses).', source: ANSES_AVIS },
      { valeur: '56 812', texte: 'consultations médicales par an ont pour motif principal les punaises de lit en France (étude Blanchon et al. 2020, reprise par l’Anses).', source: ANSES_AVIS },
      { valeur: '83,5 M€', texte: 'de coût sanitaire en France pour la seule année 2019 : consultations, arrêts de travail, sommeil et santé mentale dégradés.', source: ANSES_AVIS },
    ],
    analyse: [
      'L’Anses, dont le siège est à **Maisons-Alfort (94)**, à quelques minutes de notre base, conclut que ces infestations sont « à considérer comme un **sujet de santé publique** », au-delà de la simple salubrité.',
      'À Paris et en petite couronne, nous intervenons dans des **studios**, des **logements étudiants**, des **hôtels**, des **foyers** et des **logements sociaux**. Le point commun : des punaises arrivées dans une valise, un meuble d’occasion ou par un logement voisin.',
    ],
    liens: [{ href: '/services/punaises-de-lit', label: 'Notre traitement des punaises de lit' }, { href: '/punaises-de-lit/paris', label: 'Punaises de lit à Paris' }, { href: '/punaises-de-lit/val-de-marne', label: 'Punaises de lit dans le Val-de-Marne' }],
  },
  {
    id: 'punaises-cout',
    titre: 'Punaises de lit : ce que ça coûte',
    accroche: 'Le coût réel d’une infestation, pour les ménages comme pour les bailleurs sociaux.',
    chiffres: [
      { valeur: '866 €', texte: 'dépensés en moyenne par an par ménage infesté, d’abord en nettoyage et en traitements.', source: ANSES_AVIS },
      { valeur: '230 M€', texte: 'par an en moyenne pour les ménages français, soit près de 1,4 milliard d’euros sur 2017-2022.', source: ANSES_AVIS },
      { valeur: '1 052 €', texte: 'coût moyen d’une intervention pour les bailleurs sociaux interrogés en 2021 (médiane : 357 €).', source: ANSES_AVIS },
      { valeur: '74 509 €', texte: 'dépensés en moyenne par bailleur social interrogé en 2021 contre les punaises de lit (57 537 € en 2020).', source: ANSES_AVIS },
    ],
    analyse: [
      'Le coût grimpe surtout quand le premier traitement échoue : bombes du commerce, affaires déplacées d’une pièce à l’autre, matelas jetés trop vite. Un traitement professionnel **en deux passages**, garanti, évite de payer deux fois.',
      'Chez nous, un traitement commence **dès 290 € TTC pour un studio ou un T1**, deux passages et garantie 1 an compris, avec un **devis gratuit** donné avant l’intervention.',
    ],
    liens: [{ href: '/tarifs/punaises-de-lit', label: 'Prix d’un traitement des punaises de lit' }, { href: '/blog/arnaques-deratisation-nuisibles', label: 'Les arnaques à éviter' }],
  },
  {
    id: 'punaises-qui',
    titre: 'Punaises de lit : qui est touché',
    accroche: 'Les punaises de lit ne sont pas une question d’hygiène ni de revenus : ce sont les déplacements et le type de logement qui comptent.',
    chiffres: [
      { valeur: 'Locataires', texte: 'Être locataire, vivre en appartement ou en logement partagé fait partie des facteurs de risque identifiés.', source: ANSES_AVIS },
      { valeur: 'Familles', texte: 'Le nombre d’enfants mineurs dans le foyer, le jeune âge et l’âge actif sont associés à un risque plus élevé.', source: ANSES_AVIS },
      { valeur: 'Revenus', texte: 'Un faible revenu ne serait pas lié à un risque plus élevé d’infestation, mais l’infestation peut durer plus longtemps dans les foyers modestes, faute de moyens pour la traiter.', source: ANSES_AVIS },
    ],
    analyse: [
      'Les punaises **se nourrissent de sang, pas de saleté** : on les trouve dans des logements impeccables comme dans des hôtels haut de gamme. Elles voyagent dans les **valises**, les **meubles d’occasion** et passent d’un appartement à l’autre par les **gaines** et les **plinthes**.',
      'Quand plusieurs logements d’un immeuble sont touchés, un traitement isolé tient mal : il faut prévenir le **bailleur** ou le **syndic** par écrit et traiter les logements voisins.',
    ],
    liens: [{ href: '/blog/comment-attrape-t-on-des-punaises-de-lit', label: 'Comment attrape-t-on des punaises de lit ?' }, { href: '/professionnels', label: 'Bailleurs, hôtels, foyers' }],
  },
  {
    id: 'punaises-cycle',
    titre: 'Punaises de lit : le cycle en chiffres',
    accroche: 'Comprendre le cycle, c’est comprendre pourquoi il faut deux passages.',
    chiffres: [
      { valeur: '1 mm', texte: 'la taille d’un œuf, collé dans les coutures, les lattes et les fentes ; il éclot en 7 à 15 jours.', source: EPA },
      { valeur: '5 mues', texte: 'avant l’âge adulte ; chaque stade dure 3 à 15 jours et laisse une petite peau vide et translucide.', source: WIKI_PUNAISE },
      { valeur: '200 à 500', texte: 'œufs pondus par une femelle au cours de sa vie ; l’adulte mesure 5 à 7 mm.', source: WIKI_PUNAISE },
      { valeur: '≈ 1 mois', texte: 'pour devenir adulte entre 21 et 27 °C avec des repas de sang réguliers : plusieurs générations par an dans un logement chauffé.', source: KENTUCKY },
    ],
    analyse: [
      'Les adultes peuvent survivre **plusieurs mois sans repas de sang** : partir quelques semaines ne débarrasse pas le logement. Les **œufs**, protégés par leur coque, résistent à la plupart des produits : c’est pourquoi un second passage, **10 à 15 jours après le premier**, élimine les jeunes punaises sorties entre-temps.',
      'Notre article illustré détaille les **7 stades**, de l’œuf à l’adulte, avec une photo de chacun.',
    ],
    liens: [{ href: '/blog/cycle-de-vie-punaise-de-lit', label: 'Le cycle de la punaise de lit en photos' }, { href: '/blog/piqures-de-punaises-de-lit', label: 'Reconnaître les piqûres' }],
  },
  {
    id: 'punaises-traitement',
    titre: 'Punaises de lit : traitements et produits interdits',
    accroche: 'Les punaises résistent de plus en plus aux insecticides, et certains se tournent vers des produits interdits.',
    chiffres: [
      { valeur: 'Résistance', texte: 'L’Anses relève une résistance croissante des punaises aux insecticides et recommande de privilégier la lutte intégrée, qui combine méthodes physiques et produits.', source: ANSES_AVIS },
      { valeur: '1 784', texte: 'flacons de « Sniper 1000 » (197,3 litres) saisis par la douane dans les bagages de voyageurs à Roissy, lors de 22 contrôles.', source: DOUANE_SNIPER },
      { valeur: '≈ 900', texte: 'flacons de Sniper ou Shooter saisis par la DGCCRF dans les commerces et sur internet depuis 2023.', source: DOUANE_SNIPER },
    ],
    analyse: [
      'Le Sniper et le Shooter contiennent du **dichlorvos**, interdit pour l’usage domestique : les autorités les disent responsables d’intoxications graves, parfois mortelles. Ils ne règlent pas une infestation.',
      'Nous combinons les méthodes selon le logement : **cryogénie à −78 °C** et **vapeur sèche** sur la literie et les meubles, sans produit, et **insecticide professionnel** appliqué par un technicien **Certibiocide** quand l’infestation est installée. Nos **12 interventions filmées** (Paris 1er, 12e et 16e, Créteil, Vincennes, Ivry-sur-Seine, Champigny-sur-Marne, L’Haÿ-les-Roses…) montrent chaque méthode.',
    ],
    liens: [{ href: '/services/cryogenie-punaises-de-lit', label: 'La cryogénie, sans insecticide' }, { href: '/nos-interventions', label: 'Nos interventions en vidéo' }, { href: '/blog/insecticide-interdit-sniper-1000-danger', label: 'Sniper 1000 : pourquoi c’est dangereux' }],
  },
  {
    id: 'rats',
    titre: 'Dératisation : rats et leptospirose',
    accroche: 'Le rat n’est pas qu’une nuisance : il transmet la leptospirose, une maladie à signalement obligatoire depuis 2023.',
    chiffres: [
      { valeur: '886', texte: 'cas de leptospirose signalés en France en 2024, dont 441 en France hexagonale et Corse.', source: SPF_LEPTO_2024 },
      { valeur: '74 %', texte: 'des malades de 2024 ont été hospitalisés (653 personnes) ; 13 sont décédés.', source: SPF_LEPTO_2024 },
      { valeur: '562', texte: 'cas signalés en 2025, dont 274 en hexagone et Corse (0,4 cas pour 100 000 habitants).', source: SPF_LEPTO_2025 },
      { valeur: '8 semaines', texte: 'l’âge auquel une femelle surmulot peut se reproduire ; elle a ensuite 3 à 5 portées par an.', source: PARIS_RATS },
      { valeur: '10 %', texte: 'de son poids (environ 300 g) : ce que mange un rat brun chaque jour, d’où l’importance de couper l’accès aux déchets.', source: PARIS_RATS },
    ],
    analyse: [
      'Le rat brun (surmulot) est le principal réservoir de la leptospirose en ville : la bactérie passe dans l’eau et les sols souillés par son urine. Santé publique France rappelle que les cas signalés sous-estiment vraisemblablement le nombre réel.',
      'Sur le terrain, nous voyons surtout les rats dans les **caves**, les **locaux poubelles** et les **logements très encombrés**. Notre chantier de Maisons-Alfort, filmé, montre pourquoi il faut **dératiser avant de vider** un logement.',
    ],
    liens: [{ href: '/services/deratisation', label: 'Notre dératisation' }, { href: '/tarifs/deratisation', label: 'Prix d’une dératisation' }, { href: '/services/deratisation-ecologique', label: 'Dératisation sans raticide' }, { href: '/blog/deratisation-logement-syndrome-diogene#video', label: 'Vidéo : syndrome de Diogène et rats à Maisons-Alfort' }],
  },
  {
    id: 'rats-paris',
    titre: 'Rats à Paris : ce que fait la Ville',
    accroche: 'Un plan de lutte depuis 2017, des milliers de poubelles fermées et une expérimentation « Rats 360° » lancée en 2025.',
    chiffres: [
      { valeur: '≈ 4 000', texte: 'interventions par an du service municipal d’hygiène (SMASH) pour limiter les rongeurs sur le domaine public, dans le cadre d’un plan adopté dès 2017.', source: PARIS_RATS },
      { valeur: '6 300', texte: 'poubelles « Cybel », qui empêchent les animaux d’atteindre le sac, installées dans Paris (chiffres 2026).', source: PARIS_RATS },
      { valeur: '1 400', texte: 'abri-bacs dans 250 jardins parisiens, plus 850 bacs roulants sur 221 sites, à la place des sacs poubelles ouverts.', source: PARIS_RATS },
      { valeur: '124', texte: 'verbalisations à Paris en 2024 pour de la nourriture jetée dans les rues et les espaces verts.', source: PARIS_RATS },
      { valeur: 'Juin 2025', texte: 'lancement de l’expérimentation « Rats 360° » sur plusieurs sites tests aux situations contrastées (végétation dense, distributions alimentaires, forte fréquentation).', source: PARIS_RATS },
      { valeur: '11', texte: 'grandes métropoles (dont Amsterdam, New York, Toronto) où une étude publiée en 2025 dans Science Advances relie la hausse des températures urbaines à celle des populations de rats.', source: PARIS_RATS },
    ],
    analyse: [
      'La Ville traite la **voie publique**, les **jardins** et les **égouts**. Les **cours**, **caves**, **jardins privés** et **parties communes** restent à la charge des **propriétaires** et des **syndics** (règlement sanitaire de Paris, **article 119**) : un rat vu dans votre immeuble se traite avec votre syndic ou un professionnel.',
      'Sur la voie publique, signalez les rats dans l’application **DansMaRue**. Chez vous, nous posons des postes sécurisés, bouchons les accès et revenons contrôler. Voir la [dératisation à Paris](/deratisation/paris), arrondissement par arrondissement.',
    ],
    liens: [{ href: '/deratisation/paris', label: 'Dératisation à Paris' }, { href: '/deratisation/paris-16', label: 'Dératisation Paris 16e' }, { href: '/deratisation/paris-19', label: 'Dératisation Paris 19e' }, { href: '/blog/reproduction-des-rats', label: 'La reproduction des rats' }],
  },
  {
    id: 'droits',
    titre: 'Locataires et propriétaires : qui paie ?',
    accroche: 'La loi impose un logement sans nuisibles, et l’État a mis en place une plateforme et un numéro d’information.',
    chiffres: [
      { valeur: 'Article 6', texte: 'de la loi du 6 juillet 1989 : le bailleur doit remettre un logement décent, exempt de toute infestation d’espèces nuisibles et parasites.', source: LOI_89_ART6 },
      { valeur: 'Mars 2021', texte: 'lancement du plan national de lutte contre les punaises de lit et de la plateforme publique stop-punaises.gouv.fr.', source: STOP_PUNAISES_TEL },
      { valeur: '0806 706 806', texte: 'numéro du service Info logement indigne, indiqué par l’État pour les questions de punaises de lit et de logement.', source: STOP_PUNAISES_TEL },
    ],
    analyse: [
      'En pratique : à l’entrée dans les lieux, une infestation est à la charge du **propriétaire**. En copropriété, les **parties communes** (caves, locaux à poubelles, gaines) relèvent du **syndic**. En cours de bail, tout dépend de l’origine : signalez le problème **par écrit**, avec photos et dates.',
      'Nous remettons une **attestation d’intervention** détaillée, utile entre locataire, bailleur et syndic. Voir aussi [les arnaques à éviter](/blog/arnaques-deratisation-nuisibles).',
    ],
    liens: [{ href: '/professionnels', label: 'Bailleurs, syndics, hôtels' }, { href: '/tarifs', label: 'Nos prix' }, { href: '/faq', label: 'Toutes les questions' }],
  },
  {
    id: 'chenilles',
    titre: 'Chenilles processionnaires',
    accroche: 'Les seules chenilles réglementées par le code de la santé publique, avec le maire en première ligne.',
    chiffres: [
      { valeur: 'Pin et chêne', texte: 'les chenilles processionnaires du pin et du chêne sont des espèces réglementées par le code de la santé publique, comme l’ambroisie.', source: ARS_ESPECES },
      { valeur: 'R. 1338-8', texte: 'article du code de la santé publique que le maire fait appliquer sur sa commune, dont il est juridiquement responsable.', source: ARS_CHENILLES },
    ],
    analyse: [
      'Selon l’ARS, la **chenille processionnaire du pin** est l’un des principaux problèmes signalés par les habitants. Ces espèces peuvent provoquer des **réactions cutanées** et des **troubles respiratoires** : n’approchez pas les nids et ne touchez pas les processions.',
      'Chez un particulier, le traitement du pin reste à la charge du **propriétaire**. Nous intervenons par **écopiège**, **échenillage** et retrait des nids, selon la saison.',
    ],
    liens: [{ href: '/services/chenilles-processionnaires', label: 'Traitement des chenilles processionnaires' }],
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

export const SOURCES_EN_PLUS: Source[] = [ANSES_RAPPORT, ANSES_PUNAISES, AN_PUNAISES, STOP_PUNAISES, CERTIBIOCIDE]
export const MAJ_BAROMETRE = '2026-11-28'
