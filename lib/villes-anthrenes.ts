// Pages « Anthrènes à [ville] » (/anthrenes/[ville]), 18/11/2026 : 15 villes du Val-de-Marne (pôle Saint-Maurice),
// 8 arrondissements de Paris, 8 villes des Hauts-de-Seine. Demande de l'utilisateur : blog et pages complètes dans le 75, le 92 et le 94.
// Faits : Wikipédia (Anthrène des tapis, Varied carpet beetle). Prix aligné sur Allo Nuisible Express (anthrène 120 à 250 €) : dès 120 €.
// « Écologique » employé seulement pour les méthodes sans biocide, toujours défini. Pas de tiret long, pas de chiffre inventé.
import type { Ville, VilleServiceConfig } from '@/components/VilleServicePage'

const WIKI_FR = 'https://fr.wikipedia.org/wiki/Anthr%C3%A8ne_des_tapis'
const WIKI_EN = 'https://en.wikipedia.org/wiki/Varied_carpet_beetle'

export const CONFIG_ANTHRENES: VilleServiceConfig = {
  basePath: '/anthrenes',
  titre: 'Anthrènes',
  serviceType: 'Traitement contre les anthrènes',
  pilier: { href: '/services/anthrenes', label: 'Anthrènes', lien: 'notre traitement contre les anthrènes' },
  centre: true,
  enBref: [
    'Allo Nuisible IDF traite les anthrènes (et les attagènes) dans les tapis, moquettes, placards, vêtements en laine, literie en plumes et canapés.',
    'Seule la larve, brune et velue, abîme les textiles : nous cherchons d’abord le foyer (tapis, dressing, nid d’oiseaux sous la toiture).',
    'Méthodes écologiques, c’est-à-dire sans aucun produit biocide (aspiration, vapeur sèche, cryogénie), ou pulvérisation insecticide ciblée quand plusieurs pièces sont touchées.',
    'À partir de 120 € TTC, devis gratuit, garantie 1 an.',
  ],
  cachettes: {
    titre: 'Où se cachent les larves d’anthrènes',
    items: [
      'Sous les tapis et au bord des moquettes en laine',
      'Le long des plinthes et dans les fentes du parquet',
      'Au fond des placards et des dressings',
      'Dans les tiroirs de pulls et de lainages',
      'Dans les couettes, oreillers et coussins en plumes',
      'Près des nids d’oiseaux, dans les combles et sous la toiture',
    ],
    signes: 'Petits coléoptères ronds et tachetés sur les rebords de fenêtre au printemps, larves velues de 4 à 5 mm, petites peaux vides (mues) sous les meubles, trous irréguliers dans la laine.',
  },
  methodes: [
    { titre: 'Recherche du foyer', tag: 'Indispensable', texte: 'Tapis jamais déplacé, dressing, poils d’animaux accumulés, insectes morts, nid d’oiseaux : sans supprimer la source, les larves reviennent.', href: '/blog/cycle-de-vie-anthrene' },
    { titre: 'Vapeur sèche', tag: 'Sans produit', texte: 'Vapeur très chaude et très peu humide, appliquée lentement sur les tapis, moquettes, canapés et plinthes. Elle agit au contact sur les larves et les œufs.', href: '/blog/vapeur-seche-punaises-de-lit' },
    { titre: 'Cryogénie', tag: 'Sans produit', texte: 'Neige carbonique à environ -78 °C sur les textiles et objets fragiles qui supportent mal la vapeur. Sèche, sans résidu.', href: '/blog/cryogenie-punaises-de-lit' },
    { titre: 'Pulvérisation ciblée', tag: 'Traitement de fond', texte: 'Insecticide professionnel appliqué par un technicien Certibiocide sur les plinthes, fentes et bords de moquette quand plusieurs pièces sont touchées.' },
  ],
  encadre: {
    titre: 'Ce que vous pouvez faire tout de suite',
    items: [
      'Aspirez les bords de tapis (des deux côtés), les plinthes et le fond des placards, puis videz l’aspirateur dehors.',
      'Lavez à 60 °C les textiles qui le supportent, ou passez-les au sèche-linge chaud.',
      'Rangez les lainages propres dans des housses ou des boîtes fermées.',
      'Ne jetez pas tout : la plupart des tapis et vêtements se traitent.',
      'Envoyez-nous une photo de l’insecte ou de la larve : nous vous disons gratuitement de quoi il s’agit.',
    ],
  },
  sections: [
    {
      titre: 'Qu’est-ce qu’un anthrène ?',
      paras: [
        "L'anthrène est un **petit coléoptère presque rond**, de **2 à 4 mm**, couvert d'écailles **blanches, brunes, jaunes ou orangées**. Les espèces les plus courantes dans les logements sont l'**anthrène bigarré** (Anthrenus verbasci) et l'**anthrène des tapis** (Anthrenus scrophulariae). L'adulte vit environ **deux semaines** et se nourrit de **pollen** sur les fleurs.",
        "C'est la **larve**, brune et **velue**, qui fait les dégâts. Elle se nourrit de **kératine** : **laine, soie, fourrure, plumes, poils, cuir**, et des insectes morts. Elle grandit de 1 mm à **4 ou 5 mm** en muant de nombreuses fois, et laisse derrière elle de petites **peaux vides**. Voir chaque stade en photo dans notre guide [cycle de vie de l'anthrène](/blog/cycle-de-vie-anthrene).",
      ],
    },
    {
      titre: 'Pourquoi les anthrènes prolifèrent',
      paras: [
        "Le cycle de l'anthrène bigarré dure **de 1 à 3 ans** selon la température (Wikipédia). Les larves **fuient la lumière**, restent près de leur nourriture et, dans un logement chauffé, **mangent toute l'année**. On découvre donc souvent les dégâts **longtemps après** l'arrivée des premiers insectes.",
        "Les adultes vivent d'abord **dehors**, notamment dans les **nids d'oiseaux** (moineaux, martinets). Ils entrent **par les fenêtres** au printemps, avec des **fleurs coupées** ou des **objets d'occasion**, et pondent leurs œufs **par lots de 30 à 60** près des fibres animales.",
      ],
    },
    {
      titre: 'Anthrène, mite ou punaise de lit : ne pas confondre',
      paras: ["Les trois sont souvent confondus. Les signes et le traitement ne sont pas les mêmes :"],
      table: {
        head: ['Insecte', 'Ce que l’on voit', 'Ce qu’il fait'],
        rows: [
          ['Anthrène (larve)', 'Larve brune et velue, 4 à 5 mm, peaux vides', 'Ronge laine, tapis, fourrure, plumes ; ne pique pas'],
          ['Mite des vêtements (larve)', 'Petite chenille blanchâtre, souvent dans un fourreau, fils de soie', 'Ronge laine et textiles. Voir [mites des vêtements](/blog/mites-vetements-origine-traitement-prevention)'],
          ['Punaise de lit', 'Insecte plat et lisse, brun-rouge, 4 à 7 mm, points noirs sur le matelas', 'Pique la nuit. Voir [punaises de lit](/services/punaises-de-lit)'],
        ],
      },
    },
    {
      titre: 'Les erreurs qui font revenir les anthrènes',
      paras: ['Quelques réflexes courants laissent les larves s’installer :'],
      liste: [
        "**Pulvériser une bombe insecticide au hasard** : elle n'atteint pas les larves cachées sous les tapis et dans les fentes.",
        "**Traiter les vêtements sans chercher le foyer** : un vieux tapis ou un nid d'oiseaux relance tout.",
        "**Ranger des lainages portés** sans les laver : les larves préfèrent les textiles tachés.",
        "**Laisser les fenêtres grandes ouvertes au printemps** dans la pièce où sont stockés les textiles, sans moustiquaire.",
      ],
    },
    {
      titre: 'Méthodes écologiques : ce que l’on entend par là',
      paras: [
        "Chez Allo Nuisible IDF, une **méthode écologique** est un traitement **sans aucun produit biocide** : uniquement la **chaleur** (vapeur sèche), le **froid** (cryogénie à la neige carbonique) et l'**action mécanique** (aspiration). Wikipédia confirme que **la chaleur et le froid sont efficaces contre les larves et les œufs** d'anthrène.",
        "Ces méthodes agissent **au contact** et ne laissent pas de protection après le passage. Elles sont donc associées à la **suppression du foyer** et à la **prévention**. Quand plusieurs pièces sont touchées, une **pulvérisation ciblée** sur les plinthes peut compléter le traitement : nous vous expliquons les options avant d'intervenir.",
      ],
    },
    {
      titre: 'Les poils de larves et la peau',
      paras: [
        "L'anthrène **ne pique pas** et ne transmet pas de maladie. Mais les **poils des larves** et leurs **mues** peuvent provoquer des **démangeaisons** et des **plaques irritées**, parfois prises pour des piqûres de punaises de lit. Wikipédia parle de **dermatite** au contact des mues. En cas de réaction, consultez un médecin.",
      ],
    },
  ],
  protocole: {
    titre: 'Notre intervention contre les anthrènes',
    etapes: [
      { titre: 'Photo et devis', texte: 'Vous nous envoyez une photo : nous confirmons qu’il s’agit d’anthrènes et vous donnons le prix. Devis gratuit.' },
      { titre: 'Recherche du foyer', texte: 'Tapis, placards, dressing, literie en plumes, combles : le technicien trouve d’où viennent les larves.' },
      { titre: 'Aspiration', texte: 'Plinthes, bords de moquette, dessous des meubles, fonds de placard et fentes du parquet : larves, œufs et mues sont retirés.' },
      { titre: 'Traitement', texte: 'Vapeur sèche ou cryogénie sur les textiles, et pulvérisation ciblée sur les plinthes si besoin.' },
      { titre: 'Prévention', texte: 'Rangement des lainages, moustiquaires, nids d’oiseaux abandonnés à faire retirer : nous vous laissons les bons gestes.' },
      { titre: 'Garantie', texte: 'Garantie 1 an et attestation d’intervention pour les professionnels.' },
    ],
  },
  publics: {
    titre: 'Particuliers, locations, professionnels',
    cartes: [
      { titre: 'Particuliers', texte: 'Tapis en laine, dressing, chambre d’enfant, literie en plumes : traitement avec ou sans insecticide.' },
      { titre: 'Locations meublées', texte: 'Tapis, couettes et canapés traités entre deux locataires, attestation si besoin.' },
      { titre: 'Professionnels', texte: 'Boutiques de vêtements, magasins de tapis, hôtels, collections : intervention planifiée et discrète.' },
    ],
  },
  guides: [
    { href: '/blog/cycle-de-vie-anthrene', label: 'Cycle de l’anthrène : chaque stade en photo' },
    { href: '/blog/anthrenes-origine-traitement', label: 'Anthrènes : origine et traitement' },
    { href: '/blog/mites-vetements-origine-traitement-prevention', label: 'Mites des vêtements : les différences' },
    { href: '/blog/vapeur-seche-punaises-de-lit', label: 'La vapeur sèche : principe et limites' },
    { href: '/blog/cryogenie-punaises-de-lit', label: 'La cryogénie : comment ça marche' },
  ],
  sources: [
    { label: 'Wikipédia, Anthrène des tapis (Anthrenus scrophulariae)', url: WIKI_FR },
    { label: 'Wikipedia (en), Varied carpet beetle (Anthrenus verbasci)', url: WIKI_EN },
  ],
  maj: '2026-11-18',
  certification: 'Techniciens titulaires du Certibiocide, la certification obligatoire pour utiliser des insecticides professionnels.',
  autresTitre: 'Anthrènes dans d’autres villes',
  sectionsParPage: 3,
  localTitre: (a, nom) => `Anthrènes ${a} : ce qui est propre à ${nom}`,
}

const FAQ_COMMUNE = (a: string) => [
  { q: `Combien coûte un traitement contre les anthrènes ${a} ?`, a: 'À partir de 120 € TTC. Le prix dépend du nombre de pièces, des textiles à traiter et de la méthode (avec ou sans insecticide). Le devis est gratuit.' },
  { q: 'Les anthrènes piquent-ils ?', a: 'Non. Ni l’adulte ni la larve ne piquent. Les poils et les mues des larves peuvent en revanche irriter la peau. Des piqûres alignées au réveil font plutôt penser aux punaises de lit.' },
  { q: 'Faut-il jeter mes tapis et mes vêtements ?', a: 'Rarement. La plupart se traitent par aspiration, lavage à 60 °C, vapeur sèche ou cryogénie. On ne jette que les pièces très abîmées ou impossibles à traiter.' },
  { q: 'Pourquoi des anthrènes sur mes fenêtres ?', a: 'Les adultes vont vers la lumière pour sortir butiner. En voir à l’intérieur au printemps signifie souvent que des larves se sont développées dans le logement pendant l’année.' },
]

export type VilleAnthrenes = Ville & { title: string }
type Dep = { code: string; departement: string; zoneHref: (slug: string) => string }
const D94: Dep = { code: '94', departement: 'Val-de-Marne', zoneHref: (s) => `/zones/val-de-marne/${s}` }
const D75: Dep = { code: '75', departement: 'Paris', zoneHref: () => '/zones/paris' }
const D92: Dep = { code: '92', departement: 'Hauts-de-Seine', zoneHref: () => '/zones/hauts-de-seine' }

const ville = (nom: string, a: string, slug: string, dep: Dep, contexte: string[], proches: string[], faq: { q: string; a: string }): VilleAnthrenes => {
  const titres = [`Anthrènes ${a} (${dep.code}) : traitement dès 120 €`, `Anthrènes ${a} (${dep.code}) : traitement`, `Anthrènes ${a}`]
  return {
    slug, nom, a, code: dep.code, departement: dep.departement, zoneHref: dep.zoneHref(slug),
    title: titres.find((x) => x.length <= 60) ?? titres[2],
    description: `Anthrènes ${a} : larves velues dans les tapis, placards et lainages. Foyer trouvé, traitement avec ou sans insecticide. Dès 120 € TTC.`,
    contexte, proches, faq: [faq, ...FAQ_COMMUNE(a)],
  }
}

export const VILLES_ANTHRENES: VilleAnthrenes[] = [
  // ── Val-de-Marne : pôle Saint-Maurice ──
  ville('Saint-Maurice', 'à Saint-Maurice', 'saint-maurice', D94, [
    "Saint-Maurice est notre base : entre le Bois de Vincennes et la Marne, la ville abrite beaucoup d'oiseaux, et les nids sous les toitures sont une source classique d'anthrènes.",
    "Dans les résidences du plateau comme dans les maisons des bords de Marne, nous cherchons d'abord le foyer : tapis, dressing ou nid dans les combles.",
    "Comme nous partons de Saint-Maurice, nous pouvons passer voir une larve ou un insecte douteux rapidement, et revenir facilement pour le contrôle quelques semaines après le traitement. Les habitants du quartier Gravelle, près du Bois, nous signalent souvent des adultes sur les fenêtres dès le mois de mai.",
  ], ['Charenton-le-Pont', 'Maisons-Alfort', 'Joinville-le-Pont', 'Saint-Maur-des-Fossés'],
  { q: 'Intervenez-vous rapidement à Saint-Maurice ?', a: 'Oui, c’est là que se trouve notre base. Envoyez une photo de l’insecte ou de la larve : nous vous répondons et fixons un rendez-vous rapidement.' }),
  ville('Maisons-Alfort', 'à Maisons-Alfort', 'maisons-alfort', D94, [
    "À Maisons-Alfort, les pavillons de Charentonneau et des Juilliottes ont souvent des combles et des greniers où s'accumulent nids d'oiseaux et insectes morts : un terrain idéal pour les larves d'anthrènes.",
    "En appartement, près de l'École vétérinaire ou d'Alfort, ce sont plutôt les tapis en laine et les dressings que nous traitons.",
  ], ['Alfortville', 'Saint-Maurice', 'Créteil', 'Charenton-le-Pont'],
  { q: 'Des larves dans le grenier de mon pavillon : est-ce grave ?', a: 'C’est souvent le signe d’un ancien nid d’oiseaux ou d’insectes morts accumulés. Il faut retirer la source, aspirer et traiter, sinon les larves descendent vers les chambres et les placards.' }),
  ville('Joinville-le-Pont', 'à Joinville-le-Pont', 'joinville-le-pont', D94, [
    "À Joinville-le-Pont, entre la Marne, le Bois de Vincennes et les îles, les oiseaux sont partout. Les anthrènes adultes butinent dans les jardins au printemps et entrent par les fenêtres ouvertes.",
    "Dans les maisons des bords de Marne, nous vérifions les combles, les volets roulants et les tapis anciens.",
  ], ['Saint-Maurice', 'Saint-Maur-des-Fossés', 'Champigny-sur-Marne', 'Nogent-sur-Marne'],
  { q: 'Une moustiquaire suffit-elle contre les anthrènes ?', a: 'Elle limite l’entrée des adultes au printemps, ce qui est utile. Mais si des larves sont déjà installées dans un tapis ou un placard, il faut aussi les traiter.' }),
  ville('Alfortville', 'à Alfortville', 'alfortville', D94, [
    "À Alfortville, entre la Seine et la Marne, la plupart des logements sont des appartements. Les anthrènes s'y installent surtout dans les tapis, les placards et sous les lits.",
    "Nous trouvons souvent le foyer dans un tapis jamais déplacé ou une boîte de vêtements oubliée en haut d'un placard.",
  ], ['Maisons-Alfort', 'Vitry-sur-Seine', 'Ivry-sur-Seine', 'Créteil'],
  { q: 'Comment savoir si ce sont des anthrènes ou des mites ?', a: 'La larve d’anthrène est brune et velue, sans fourreau. La larve de mite est blanchâtre, souvent dans un petit fourreau, et laisse des fils de soie. Envoyez-nous une photo en cas de doute.' }),
  ville('Charenton-le-Pont', 'à Charenton-le-Pont', 'charenton-le-pont', D94, [
    "À Charenton-le-Pont, les immeubles anciens du centre et de Bercy-Charenton abritent beaucoup de parquets, de tapis et de dressings : les cachettes préférées des larves d'anthrènes.",
    "Le Bois de Vincennes tout proche attire de nombreux oiseaux ; les adultes, qui butinent au printemps, entrent ensuite par les fenêtres.",
  ], ['Saint-Maurice', 'Paris 12e', 'Maisons-Alfort', 'Ivry-sur-Seine'],
  { q: 'Traitez-vous les parquets anciens ?', a: 'Oui. Nous aspirons les fentes du parquet et les plinthes, puis traitons à la vapeur sèche ou, si besoin, par pulvérisation ciblée sur les plinthes, sans abîmer le bois.' }),
  ville('Saint-Mandé', 'à Saint-Mandé', 'saint-mande', D94, [
    "À Saint-Mandé, les appartements bourgeois en lisière du Bois de Vincennes ont souvent des tapis anciens, des tentures et des dressings bien remplis : de quoi nourrir les larves d'anthrènes pendant des mois.",
    "Nous traitons ces textiles avec soin, à la cryogénie quand la matière supporte mal la vapeur.",
  ], ['Vincennes', 'Paris 12e', 'Charenton-le-Pont', 'Fontenay-sous-Bois'],
  { q: 'Pouvez-vous traiter un tapis ancien ou précieux ?', a: 'Oui. Pour un tapis fragile, la cryogénie est souvent préférable : elle agit par le froid, sans eau ni produit. Le technicien teste d’abord une zone discrète.' }),
  ville('Vincennes', 'à Vincennes', 'vincennes', D94, [
    "À Vincennes, entre le Bois et le château, les immeubles anciens ont des combles, des corniches et des toitures où nichent les oiseaux. Les anthrènes y trouvent plumes et insectes morts.",
    "Dans les appartements, nous trouvons le foyer dans les tapis en laine, les placards de lainages et parfois les couettes en plumes.",
  ], ['Saint-Mandé', 'Fontenay-sous-Bois', 'Montreuil', 'Saint-Maurice'],
  { q: 'Des larves velues dans mon lit à Vincennes : anthrènes ou punaises ?', a: 'Une larve velue et allongée est une larve d’anthrène, souvent attirée par une couette ou des oreillers en plumes. La punaise de lit est plate, lisse et pique la nuit. Voir aussi notre page punaises de lit à Vincennes.' }),
  ville('Nogent-sur-Marne', 'à Nogent-sur-Marne', 'nogent-sur-marne', D94, [
    "À Nogent-sur-Marne, les maisons et les villas des coteaux de la Marne ont des combles et des jardins fleuris : les anthrènes adultes butinent au printemps, puis pondent à l'intérieur.",
    "Nous vérifions les combles, les tapis et les dressings, et vous conseillons pour les nids d'oiseaux sous la toiture.",
  ], ['Le Perreux-sur-Marne', 'Fontenay-sous-Bois', 'Joinville-le-Pont', 'Vincennes'],
  { q: 'Faut-il retirer un nid d’oiseaux sous ma toiture ?', a: 'Un nid abandonné peut nourrir des larves d’anthrènes pendant longtemps. Il se retire hors période de nidification, car les oiseaux et leurs nids occupés sont protégés.' }),
  ville('Créteil', 'à Créteil', 'creteil', D94, [
    "À Créteil, des grands ensembles du Mont-Mesly aux pavillons du Vieux Créteil, nous traitons les anthrènes aussi bien en appartement qu'en maison.",
    "Autour du lac et de la Marne, les oiseaux sont nombreux : en maison, les combles et les nids sous la toiture sont souvent le point de départ.",
  ], ['Maisons-Alfort', 'Saint-Maur-des-Fossés', 'Bonneuil-sur-Marne', 'Alfortville'],
  { q: 'Les anthrènes passent-ils d’un appartement à l’autre ?', a: 'Les larves se déplacent peu, mais les adultes volent. Dans un immeuble, une source commune (nid d’oiseaux en toiture, local encombré) peut toucher plusieurs logements : prévenez votre syndic ou bailleur.' }),
  ville('Ivry-sur-Seine', 'à Ivry-sur-Seine', 'ivry-sur-seine', D94, [
    "À Ivry-sur-Seine, entre les immeubles du centre, Ivry-Port et les anciens ateliers transformés en lofts, les anthrènes s'installent dans les tapis, les canapés et les placards.",
    "Dans les lofts, les grandes surfaces de parquet et les tapis épais sont à vérifier en priorité.",
  ], ['Vitry-sur-Seine', 'Paris 13e', 'Charenton-le-Pont', 'Alfortville'],
  { q: 'Un tapis acheté d’occasion peut-il apporter des anthrènes ?', a: 'Oui, c’est une porte d’entrée classique. Inspectez les tapis et lainages d’occasion avant de les installer, et faites-les laver ou traiter au moindre doute.' }),
  ville('Saint-Maur-des-Fossés', 'à Saint-Maur-des-Fossés', 'saint-maur-des-fosses', D94, [
    "À Saint-Maur-des-Fossés, dans la boucle de la Marne, les grandes maisons de La Varenne, d'Adamville ou du Parc ont combles, greniers et jardins fleuris : tout ce qu'aiment les anthrènes.",
    "Nous cherchons le foyer jusque sous la toiture, puis traitons tapis, dressings et literie.",
  ], ['Joinville-le-Pont', 'Créteil', 'Champigny-sur-Marne', 'Saint-Maurice'],
  { q: 'Pourquoi des anthrènes dans une maison bien entretenue ?', a: 'Ils viennent souvent de l’extérieur : nid d’oiseaux sous la toiture, fleurs du jardin, fenêtres ouvertes au printemps. La propreté limite leur installation, mais n’empêche pas leur arrivée.' }),
  ville('Fontenay-sous-Bois', 'à Fontenay-sous-Bois', 'fontenay-sous-bois', D94, [
    "À Fontenay-sous-Bois, entre le Bois de Vincennes et les pavillons du haut de la ville, les oiseaux et les jardins fleuris favorisent l'arrivée des anthrènes adultes au printemps.",
    "Nous traitons les tapis, placards et literie, et vérifions les combles des maisons.",
  ], ['Vincennes', 'Nogent-sur-Marne', 'Montreuil', 'Saint-Mandé'],
  { q: 'Les fleurs coupées peuvent-elles apporter des anthrènes ?', a: 'Oui. Les adultes se nourrissent de pollen, surtout sur les fleurs blanches. Secouez les bouquets cueillis au jardin avant de les rentrer.' }),
  ville('Vitry-sur-Seine', 'à Vitry-sur-Seine', 'vitry-sur-seine', D94, [
    "À Vitry-sur-Seine, des grandes résidences aux pavillons, nous intervenons contre les anthrènes dans les chambres, les placards et sous les tapis.",
    "En maison, les combles et les nids d'oiseaux sont à vérifier ; en appartement, le foyer est le plus souvent un tapis ou un dressing.",
    "Près des parcs des Lilas et du Coteau, les jardins fleuris attirent les adultes au printemps : une moustiquaire sur la fenêtre de la chambre où sont rangés les lainages évite bien des surprises l'année suivante.",
  ], ['Ivry-sur-Seine', 'Alfortville', 'Villejuif', 'Choisy-le-Roi'],
  { q: 'Combien de temps dure une intervention ?', a: 'En général une à deux heures pour un appartement, selon le nombre de pièces et de textiles. Le technicien commence par chercher le foyer.' }),
  ville('Villejuif', 'à Villejuif', 'villejuif', D94, [
    "À Villejuif, dans les immeubles comme dans les pavillons, les anthrènes se cachent dans les tapis, les dressings et la literie en plumes.",
    "Nous intervenons depuis Saint-Maurice, à quelques kilomètres, et cherchons toujours la source avant de traiter.",
  ], ['Vitry-sur-Seine', 'Le Kremlin-Bicêtre', 'Cachan', 'Ivry-sur-Seine'],
  { q: 'Peut-on traiter sans insecticide à Villejuif ?', a: 'Oui. Aspiration, vapeur sèche et cryogénie n’utilisent aucun produit biocide. Elles conviennent bien aux textiles et aux chambres d’enfants.' }),
  ville('Champigny-sur-Marne', 'à Champigny-sur-Marne', 'champigny-sur-marne', D94, [
    "À Champigny-sur-Marne, les nombreux pavillons avec combles et jardins sont exposés aux anthrènes : nids d'oiseaux sous les toitures, adultes qui butinent au printemps.",
    "Dans les appartements des Mordacs ou du Bois l'Abbé, nous traitons surtout tapis et placards.",
  ], ['Saint-Maur-des-Fossés', 'Joinville-le-Pont', 'Chennevières-sur-Marne', 'Villiers-sur-Marne'],
  { q: 'Les anthrènes reviennent-ils chaque printemps ?', a: 'Les adultes sortent chaque année au printemps. S’il n’y a plus de larves ni de source dans la maison, ils ne s’y installent pas durablement. D’où l’importance de supprimer le foyer.' }),
  // ── Paris ──
  ville('Paris 12e', 'à Paris 12e', 'paris-12', D75, [
    "Dans le 12e arrondissement, entre le Bois de Vincennes, la Coulée verte et les immeubles haussmanniens de Daumesnil ou de Bercy, nous traitons souvent les anthrènes dans les parquets, tapis et dressings.",
    "Les combles et corniches des immeubles anciens abritent des nids d'oiseaux : une source à vérifier quand plusieurs logements sont touchés.",
  ], ['Saint-Mandé', 'Charenton-le-Pont', 'Paris 11e', 'Paris 20e'],
  { q: 'Plusieurs voisins de mon immeuble ont des anthrènes : que faire ?', a: 'Une source commune est probable, souvent un nid d’oiseaux en toiture ou dans une gaine. Prévenez le syndic : la source se traite dans les parties communes, puis chaque logement touché.' }),
  ville('Paris 11e', 'à Paris 11e', 'paris-11', D75, [
    "Dans le 11e arrondissement, les appartements anciens, souvent petits, concentrent tapis, vêtements et literie : une infestation d'anthrènes peut vite toucher tout le logement.",
    "Nous cherchons le foyer (tapis, placard, dessous de lit) et traitons pièce par pièce.",
    "Autour d'Oberkampf, de la Roquette ou de Voltaire, beaucoup de logements meublés changent souvent d'occupants : un tapis ou une couette en plumes laissés par un ancien locataire peuvent héberger des larves depuis des mois sans que personne ne les remarque.",
  ], ['Paris 12e', 'Paris 20e', 'Paris 3e', 'Paris 10e'],
  { q: 'Les anthrènes mangent-ils le coton ?', a: 'Ils préfèrent les fibres animales : laine, soie, fourrure, plumes, cuir. Un coton taché ou mélangé à de la laine peut toutefois être abîmé.' }),
  ville('Paris 15e', 'à Paris 15e', 'paris-15', D75, [
    "Dans le 15e arrondissement, le plus peuplé de Paris, nous traitons les anthrènes dans les appartements familiaux : chambres d'enfants, dressings, tapis du salon.",
    "Les rebords de fenêtre donnant sur les cours et les squares sont souvent l'endroit où l'on remarque les premiers adultes au printemps.",
  ], ['Paris 16e', 'Paris 14e', 'Paris 7e', 'Issy-les-Moulineaux'],
  { q: 'Le traitement est-il possible dans une chambre d’enfant ?', a: 'Oui. Aspiration, vapeur sèche et cryogénie n’utilisent aucun produit biocide. La chambre est utilisable dès la fin du passage.' }),
  ville('Paris 16e', 'à Paris 16e', 'paris-16', D75, [
    "Dans le 16e arrondissement, les grands appartements accueillent souvent des tapis anciens, des fourrures, des tentures et des collections : exactement ce que recherchent les larves d'anthrènes.",
    "Nous traitons ces pièces avec soin, à la cryogénie pour les matières fragiles, après avoir trouvé le foyer.",
  ], ['Paris 15e', 'Paris 17e', 'Boulogne-Billancourt', 'Neuilly-sur-Seine'],
  { q: 'Pouvez-vous traiter une fourrure ou un manteau ?', a: 'Oui, selon la matière : la cryogénie agit par le froid, sans eau ni produit. Pour une pièce de valeur, le technicien teste d’abord une zone discrète.' }),
  ville('Paris 17e', 'à Paris 17e', 'paris-17', D75, [
    "Dans le 17e arrondissement, des immeubles haussmanniens des Ternes aux résidences des Batignolles, les anthrènes s'installent dans les parquets, les tapis et les dressings.",
    "Les nids d'oiseaux dans les combles et sur les corniches sont une source fréquente dans les immeubles anciens.",
  ], ['Paris 16e', 'Paris 8e', 'Levallois-Perret', 'Neuilly-sur-Seine'],
  { q: 'Pourquoi des larves d’anthrènes en hiver ?', a: 'Dans un appartement chauffé, les larves mangent toute l’année. Seuls les adultes sont saisonniers (printemps, début d’été). Des larves en hiver signifient que l’infestation est installée.' }),
  ville('Paris 20e', 'à Paris 20e', 'paris-20', D75, [
    "Dans le 20e arrondissement, entre Belleville, Ménilmontant et les abords du Père-Lachaise, les oiseaux sont nombreux et les immeubles anciens offrent combles et corniches.",
    "Nous traitons les anthrènes dans les appartements comme dans les petites maisons des villas, en commençant par chercher la source.",
  ], ['Paris 11e', 'Paris 19e', 'Montreuil', 'Paris 12e'],
  { q: 'Comment éviter le retour des anthrènes ?', a: 'Aspirez régulièrement sous les meubles et le long des plinthes, rangez les lainages propres dans des housses fermées, posez des moustiquaires au printemps et faites retirer les nids d’oiseaux abandonnés.' }),
  ville('Paris 7e', 'à Paris 7e', 'paris-7', D75, [
    "Dans le 7e arrondissement, les appartements anciens et les hôtels particuliers abritent tapis, tentures, sièges rembourrés et collections, que les larves d'anthrènes abîment discrètement.",
    "Nous intervenons avec discrétion, en traitant les pièces fragiles à la cryogénie.",
  ], ['Paris 15e', 'Paris 6e', 'Paris 16e', 'Paris 8e'],
  { q: 'Intervenez-vous pour des collections ou objets anciens ?', a: 'Oui. Les anthrènes sont un ravageur connu des musées et collections. Nous adaptons la méthode à chaque objet, souvent à la cryogénie, sans produit.' }),
  ville('Paris 5e', 'à Paris 5e', 'paris-5', D75, [
    "Dans le 5e arrondissement, autour du Jardin des Plantes et du Quartier latin, les appartements anciens regorgent de livres, tapis et textiles en laine.",
    "Les larves d'anthrènes s'y cachent sous les tapis, dans les placards et le long des plinthes : nous les cherchons pièce par pièce.",
  ], ['Paris 6e', 'Paris 13e', 'Paris 14e', 'Paris 4e'],
  { q: 'Les anthrènes s’attaquent-ils aux livres ?', a: 'Leurs larves se nourrissent de kératine (laine, plumes, poils, cuir) et d’insectes morts. Les reliures en cuir anciennes peuvent être touchées ; le papier seul les intéresse peu.' }),
  // ── Hauts-de-Seine ──
  ville('Boulogne-Billancourt', 'à Boulogne-Billancourt', 'boulogne-billancourt', D92, [
    "À Boulogne-Billancourt, des immeubles anciens du nord aux maisons des Princes et du Parchamp, nous traitons les anthrènes dans les tapis, dressings et combles.",
    "La proximité du Bois de Boulogne et de la Seine attire de nombreux oiseaux : les nids sous les toitures sont une source fréquente.",
  ], ['Issy-les-Moulineaux', 'Paris 16e', 'Saint-Cloud', 'Sèvres'],
  { q: 'Intervenez-vous dans les Hauts-de-Seine ?', a: 'Oui, à Boulogne-Billancourt et dans les villes voisines. Envoyez une photo de l’insecte : nous vous répondons et fixons un rendez-vous.' }),
  ville('Issy-les-Moulineaux', 'à Issy-les-Moulineaux', 'issy-les-moulineaux', D92, [
    "À Issy-les-Moulineaux, entre les résidences récentes des bords de Seine et les maisons des coteaux, les anthrènes s'installent dans les tapis, les placards et la literie en plumes.",
    "Nous cherchons d'abord la source, puis traitons avec ou sans insecticide selon les pièces.",
  ], ['Boulogne-Billancourt', 'Paris 15e', 'Vanves', 'Meudon'],
  { q: 'Mes pulls sont troués mais je ne vois aucun insecte : est-ce possible ?', a: 'Oui. Les larves fuient la lumière et se cachent au fond des placards. Cherchez de petites peaux vides velues : c’est souvent le premier signe visible.' }),
  ville('Neuilly-sur-Seine', 'à Neuilly-sur-Seine', 'neuilly-sur-seine', D92, [
    "À Neuilly-sur-Seine, les grands appartements et les maisons accueillent tapis anciens, fourrures, tentures et dressings bien fournis : un garde-manger pour les larves d'anthrènes.",
    "Nous intervenons avec discrétion et traitons les pièces fragiles à la cryogénie.",
  ], ['Levallois-Perret', 'Paris 17e', 'Paris 16e', 'Courbevoie'],
  { q: 'La cryogénie abîme-t-elle les tissus ?', a: 'Non dans la grande majorité des cas : la neige carbonique agit par le froid, sans eau ni produit. Pour une pièce de valeur, le technicien teste d’abord une zone discrète.' }),
  ville('Levallois-Perret', 'à Levallois-Perret', 'levallois-perret', D92, [
    "À Levallois-Perret, ville très dense, la plupart des logements sont des appartements. Les anthrènes s'y installent sous les tapis, dans les placards et au bord des moquettes.",
    "Nous trouvons souvent le foyer dans un dressing ou sous un lit où s'accumulent poussière et poils d'animaux.",
  ], ['Neuilly-sur-Seine', 'Clichy', 'Paris 17e', 'Courbevoie'],
  { q: 'Les poils de mon chat attirent-ils les anthrènes ?', a: 'Oui, les poils accumulés contiennent de la kératine dont se nourrissent les larves. Aspirez régulièrement les endroits où l’animal dort, sous les meubles et le long des plinthes.' }),
  ville('Courbevoie', 'à Courbevoie', 'courbevoie', D92, [
    "À Courbevoie, des tours de La Défense aux immeubles du Faubourg de l'Arche et aux maisons de Bécon, nous traitons les anthrènes en appartement comme en maison.",
    "En maison, les combles et les nids d'oiseaux sont à vérifier ; en appartement, tapis et dressings.",
  ], ['La Garenne-Colombes', 'Puteaux', 'Levallois-Perret', 'Neuilly-sur-Seine'],
  { q: 'Les anthrènes montent-ils dans les étages élevés ?', a: 'Les adultes volent et peuvent entrer par une fenêtre à n’importe quel étage, surtout au printemps. Ils pondent ensuite près des tapis et des lainages.' }),
  ville('Montrouge', 'à Montrouge', 'montrouge', D92, [
    "À Montrouge, ville très dense aux portes de Paris, les anthrènes s'installent dans les appartements : tapis, placards, literie en plumes.",
    "Nous cherchons le foyer pièce par pièce et vous conseillons pour éviter le retour des adultes au printemps.",
    "Dans les petits immeubles anciens proches de la mairie et du Beffroi, les combles accessibles par une trappe sont un endroit à contrôler : un vieux nid ou des cartons de vêtements oubliés y suffisent à entretenir une colonie.",
  ], ['Paris 14e', 'Malakoff', 'Bagneux', 'Châtillon'],
  { q: 'Une couette en plumes peut-elle abriter des anthrènes ?', a: 'Oui, les plumes contiennent de la kératine. Une couette touchée se lave à chaud si l’étiquette le permet, ou se traite par cryogénie.' }),
  ville('Rueil-Malmaison', 'à Rueil-Malmaison', 'rueil-malmaison', D92, [
    "À Rueil-Malmaison, les nombreuses maisons avec jardins et combles, près de la Seine et de la Malmaison, sont exposées aux anthrènes : adultes qui butinent, nids d'oiseaux sous la toiture.",
    "Nous vérifions les combles, puis traitons les tapis, dressings et literie.",
  ], ['Nanterre', 'Suresnes', 'Chatou', 'Bougival'],
  { q: 'Les anthrènes viennent-ils du jardin ?', a: 'Les adultes vivent dehors et se nourrissent du pollen des fleurs. Ils entrent par les fenêtres au printemps pour pondre. Les moustiquaires et l’inspection des fleurs coupées limitent leur arrivée.' }),
  ville('Clamart', 'à Clamart', 'clamart', D92, [
    "À Clamart, en lisière de la forêt de Meudon, les pavillons et leurs combles accueillent souvent des nids d'oiseaux, point de départ classique des anthrènes.",
    "En appartement, nous traitons surtout tapis, placards et literie en plumes.",
  ], ['Meudon', 'Issy-les-Moulineaux', 'Châtillon', 'Le Plessis-Robinson'],
  { q: 'Quand faut-il traiter les anthrènes ?', a: 'Dès que vous voyez des larves velues, des mues ou des trous dans la laine. L’hiver est un bon moment : les larves sont regroupées près de leur nourriture et l’on évite la sortie des adultes au printemps.' }),
]

export function getVilleAnthrenes(slug: string) {
  return VILLES_ANTHRENES.find((x) => x.slug === slug)
}
