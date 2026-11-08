// Pages « Destruction de nid de frelons et guêpes à [ville] » (/destruction-nid-frelon/[ville]).
// 15 villes autour de Saint-Maurice jusqu'à Paris 12e, choisies avec l'utilisateur le 08/11/2026.
// INDEXATION REPORTÉE : pages en noindex et absentes du sitemap tant que FRELONS_VILLES_INDEXEES vaut false
// (l'utilisateur veut qu'elles soient indexées plus tard).
// Cocon : pilier /services/guepes-frelons, guides du blog (frelon asiatique, guêpes, frelon européen, nid en hiver).
// Prix alignés sur /tarifs : 89 € (accessible), 149 € (perche), 199 € (toiture, combles, cheminée), nacelle sur devis.
// Règles CLAUDE.md : pas de chiffre inventé, pas de tiret long, pas de « naturel », « bio », « écologique », « sans danger ».

import type { Ville, VilleServiceConfig } from '@/components/VilleServicePage'

export const FRELONS_VILLES_INDEXEES = false

export const SOURCES_FRELONS = [
  { label: 'Muséum national d\'Histoire naturelle, le frelon asiatique', url: 'https://frelonasiatique.mnhn.fr/home' },
  { label: 'Ministère de la Transition écologique, plan national de lutte contre le frelon asiatique', url: 'https://www.ecologie.gouv.fr/sites/default/files/documents/Plan-frelon_Projet.pdf' },
  { label: 'Bruxelles Environnement, les guêpes', url: 'https://document.environnement.brussels/opac_css/elecfile/IF%20Biodiversite%20guepe%20FR' },
  { label: 'CARI, fiche frelon européen', url: 'https://www.cari.be/IMG/pdf/191_frelon.pdf' },
]

export const CONFIG_FRELONS: VilleServiceConfig = {
  basePath: '/destruction-nid-frelon',
  titre: 'Destruction de nid de frelons et guêpes',
  centre: true,
  serviceType: 'Destruction de nid de guêpes et de frelons',
  pilier: { href: '/services/guepes-frelons', label: 'Guêpes et frelons', lien: 'notre service de destruction de nids de guêpes et frelons' },
  enBref: [
    'Allo Nuisible IDF détruit les nids de guêpes, de frelons européens et de frelons asiatiques, chez les particuliers, en copropriété et chez les professionnels.',
    'Le produit est injecté directement dans le nid, à la perche télescopique si le nid est en hauteur, sans grimper dans l\'arbre.',
    'Techniciens certifiés Certibiocide, en tenue de protection intégrale, intervention 7j/7.',
    'À partir de 89 € TTC pour un nid accessible, 149 € TTC à la perche, 199 € TTC en toiture, combles ou cheminée. Nacelle sur devis.',
  ],
  cachettes: {
    titre: 'Où se cachent les nids',
    items: [
      'Sous les avant-toits et les tuiles',
      'Dans les coffres de volets roulants',
      'En haut des arbres (frelon asiatique)',
      'Dans les cheminées et les combles',
      'Dans les haies et les abris de jardin',
      'Dans le sol, la pelouse ou une rocaille (guêpes)',
    ],
    signes: 'Signes d\'un nid tout proche : des allées et venues régulières toujours au même endroit, en ligne droite, et des insectes qui entrent et sortent par le même trou.',
  },
  methodes: [
    { titre: 'Traitement à la perche', tag: 'Nid en hauteur', texte: 'Une perche télescopique injecte le produit directement dans le nid, jusqu\'à plusieurs mètres de haut, sans grimper dans l\'arbre ni sur le toit. À partir de 149 € TTC.' },
    { titre: 'Traitement direct du nid', tag: 'Nid accessible', texte: 'Pour un nid sous un auvent, dans un cabanon, une haie ou le sol, le technicien en tenue intégrale traite l\'intérieur du nid. À partir de 89 € TTC.' },
    { titre: 'Toiture, combles, cheminée', tag: 'Accès difficile', texte: 'Nid sous les tuiles, dans les combles ou dans une cheminée : intervention en hauteur avec le matériel adapté. À partir de 199 € TTC, nacelle sur devis.' },
    { titre: 'Conseils et contrôle', tag: 'Après le traitement', texte: 'Les insectes encore dehors rentrent au nid et sont touchés à leur tour. Nous vous expliquons quoi faire dans les heures qui suivent et quand retirer le nid.', href: '/blog/frelon-asiatique-tout-savoir' },
  ],
  encadre: {
    titre: 'Les erreurs qui finissent en piqûres',
    items: [
      'S\'approcher à moins de 5 mètres d\'un nid actif pour le regarder ou le photographier.',
      'Tailler la haie, élaguer l\'arbre ou tondre à côté du nid : les vibrations déclenchent l\'attaque.',
      'Asperger le nid d\'eau, de bombe insecticide ou y mettre le feu.',
      'Boucher l\'entrée d\'un nid dans un mur : les guêpes cherchent une autre sortie, parfois dans la maison.',
      'Faire traiter un arbre où l\'on ne voit aucun nid : les frelons viennent souvent juste s\'y nourrir.',
    ],
  },
  sections: [
    {
      titre: 'Octobre, novembre : la saison des nids géants',
      paras: [
        "Les nids de frelons asiatiques grossissent tout l'été et atteignent leur **taille maximale en fin de saison**. Avec les automnes doux, nous voyons encore **beaucoup de frelons actifs en octobre et en novembre**.",
        "C'est aussi le moment où **les feuilles tombent** et où des nids restés cachés tout l'été apparaissent d'un coup, **énormes**, en haut des arbres. Tant qu'il y a de l'activité à l'entrée, le nid est **dangereux** : ne vous en approchez pas. Tout savoir dans notre [guide du frelon asiatique](/blog/frelon-asiatique-tout-savoir).",
      ],
    },
    {
      titre: 'Des frelons autour de votre arbre, mais aucun nid ?',
      paras: [
        "Des frelons qui tournent autour d'un **buisson**, d'un **arbuste** ou d'un **arbre** sans que vous voyiez de nid ? Le plus souvent, **le nid n'est pas là** : ils viennent simplement **se nourrir** de nectar, de fruits mûrs ou d'insectes.",
        "Observez-les de loin : s'ils repartent toujours **dans la même direction**, le nid est ailleurs, parfois à plusieurs centaines de mètres. S'ils entrent et sortent **par le même point**, le nid est sans doute juste devant vous : éloignez-vous et appelez-nous.",
      ],
    },
    {
      titre: 'Guêpes : pourquoi elles deviennent infernales en fin d\'été',
      paras: [
        "En fin d'été, la colonie de guêpes est à son maximum et les ouvrières recherchent surtout du **sucre** : fruits, boissons, poubelles. C'est aussi l'époque où les nids sont **les plus peuplés** et se défendent **très violemment**.",
        "Un nid dans la pelouse, un coffre de volet ou sous les tuiles se traite en une intervention. Tout comprendre dans notre article [pourquoi les guêpes deviennent si agressives](/blog/guepes-tout-savoir).",
      ],
    },
    {
      titre: 'Frelon européen ou frelon asiatique ?',
      paras: [
        "Le **frelon européen** est brun-roux et jaune vif, vole même **la nuit** et niche dans les **cavités** (arbre creux, grenier, cheminée). Le **frelon asiatique** est très sombre, avec des **pattes jaunes**, et construit souvent son nid **très haut dans un arbre**.",
        "Les deux se traitent de la même façon, directement dans le nid. Voir notre guide du [frelon européen](/blog/frelon-europeen-tout-savoir).",
      ],
      table: {
        head: ['', 'Frelon européen', 'Frelon asiatique'],
        rows: [
          ['Couleur', 'Brun-roux et jaune vif', 'Très sombre, pattes jaunes'],
          ['Nid', 'Cavité : arbre creux, grenier, cheminée', 'Souvent en haut d\'un arbre'],
          ['Actif la nuit', 'Oui', 'Non'],
        ],
      },
    },
  ],
  protocole: {
    titre: 'Notre intervention, étape par étape',
    etapes: [
      { titre: 'Photo ou appel', texte: 'Envoyez-nous une photo du nid ou des insectes, prise de loin : nous identifions l\'espèce et vous donnons le prix avant de venir.' },
      { titre: 'Mise en sécurité', texte: 'Le technicien éloigne les personnes et les animaux, puis s\'équipe d\'une tenue de protection intégrale.' },
      { titre: 'Traitement du nid', texte: 'Le produit est injecté directement à l\'intérieur du nid, à la perche télescopique si besoin, de préférence quand la colonie est rentrée.' },
      { titre: 'Après le traitement', texte: 'L\'activité cesse en quelques heures. Nous vous indiquons quand le nid peut être retiré et comment éviter un nouveau nid au printemps.' },
    ],
  },
  publics: {
    titre: 'Particuliers, copropriétés, professionnels',
    cartes: [
      { titre: 'Particuliers', texte: 'Nid dans le jardin, sous le toit ou dans un volet roulant : intervention rapide, avec des enfants ou des animaux à la maison.' },
      { titre: 'Copropriétés', texte: 'Nid sur une façade, une toiture ou dans un arbre de la résidence : intervention coordonnée avec le syndic ou le gardien.' },
      { titre: 'Professionnels', texte: 'Écoles, crèches, restaurants avec terrasse, entreprises : intervention en dehors des heures d\'ouverture si besoin, attestation fournie.' },
    ],
  },
  guides: [
    { href: '/blog/frelon-asiatique-tout-savoir', label: 'Frelon asiatique : tout savoir' },
    { href: '/blog/guepes-tout-savoir', label: 'Guêpes : pourquoi elles deviennent si agressives' },
    { href: '/blog/frelon-europeen-tout-savoir', label: 'Frelon européen : dangereux ou pas ?' },
    { href: '/blog/nid-de-frelon-en-hiver', label: 'Nid de frelon en hiver : faut-il le détruire ?' },
  ],
  sources: SOURCES_FRELONS,
  maj: '2026-11-08',
  certification: 'Techniciens titulaires du Certibiocide, la certification obligatoire pour utiliser des insecticides professionnels.',
  autresTitre: 'Destruction de nids dans les villes voisines',
}

const FAQ_COMMUNE = (a: string) => [
  { q: `Combien coûte la destruction d'un nid de frelons ${a} ?`, a: 'À partir de 89 € TTC pour un nid accessible (jusqu\'à 5 m environ), 149 € TTC pour un nid en hauteur traité à la perche, 199 € TTC en toiture, combles ou cheminée. Nacelle sur devis. Le prix vous est donné avant l\'intervention.' },
  { q: 'Peut-on détruire soi-même un nid de guêpes ou de frelons ?', a: 'Non. Bombe insecticide, eau ou feu provoquent souvent une attaque groupée, et les piqûres multiples peuvent être graves. Un professionnel en tenue intégrale traite l\'intérieur du nid à distance.' },
  { q: 'Faut-il détruire un nid en hiver ?', a: 'En général non : en hiver, la colonie est morte et le nid n\'est jamais réutilisé. Un nid encore actif en novembre, avec des allées et venues, doit en revanche être traité. Voir notre article sur le nid de frelon en hiver.' },
  { q: 'Des frelons tournent autour de mon arbre sans nid visible : que faire ?', a: 'Le plus souvent, ils viennent se nourrir (nectar, fruits mûrs, insectes) et le nid est ailleurs. Observez de loin dans quelle direction ils repartent, et envoyez-nous une photo en cas de doute.' },
]

export type VilleFrelons = Ville & { title: string }

const v = (
  slug: string, nom: string, a: string, zone: string, title: string, description: string,
  contexte: string[], proches: string[], faq: { q: string; a: string },
): VilleFrelons => ({
  slug, nom, a, code: slug === 'paris-12' ? '75' : '94', departement: slug === 'paris-12' ? 'Paris' : 'Val-de-Marne',
  zoneHref: zone, title, description, contexte, proches, faq: [faq, ...FAQ_COMMUNE(a)],
})

export const VILLES_FRELONS: VilleFrelons[] = [
  v('saint-maurice', 'Saint-Maurice', 'à Saint-Maurice', '/zones/val-de-marne/saint-maurice',
    'Destruction nid de frelons à Saint-Maurice (94) : dès 89 €',
    'Nid de frelons ou de guêpes à Saint-Maurice : intervention rapide depuis notre siège, traitement à la perche. Dès 89 € TTC.',
    [
      'Notre siège est à Saint-Maurice, rue du Val d\'Osne : pour un nid de guêpes ou de frelons dans la commune, nos techniciens sont sur place très vite, entre le Bois de Vincennes et les bords de Marne.',
      'Les arbres du Bois et des bords de Marne accueillent des nids de frelons asiatiques, souvent repérés à l\'automne quand les feuilles tombent. Dans les résidences, ce sont plutôt les guêpes qui s\'installent dans les coffres de volets et sous les toitures.',
      "Les hôpitaux, les écoles et les résidences de la commune ont souvent des espaces verts arborés : en cas de nid près d'un lieu fréquenté par des enfants ou des patients, nous intervenons en priorité, en dehors des heures de passage si besoin.",
    ],
    ['Charenton-le-Pont', 'Maisons-Alfort', 'Joinville-le-Pont', 'Saint-Maur-des-Fossés'],
    { q: 'Vous êtes à Saint-Maurice : pouvez-vous venir le jour même ?', a: 'Souvent, oui : notre siège est dans la commune, rue du Val d\'Osne. Appelez-nous ou envoyez une photo du nid, nous vous donnons le prix et un créneau.' }),
  v('charenton-le-pont', 'Charenton-le-Pont', 'à Charenton-le-Pont', '/zones/val-de-marne/charenton-le-pont',
    'Nid de guêpes ou frelons à Charenton-le-Pont : destruction',
    'Charenton-le-Pont : nid de guêpes sous un balcon, dans un volet roulant, nid de frelons dans un arbre. Destruction dès 89 € TTC.',
    [
      'À Charenton-le-Pont, ville d\'immeubles au confluent de la Seine et de la Marne, les nids de guêpes se logent souvent sous les balcons, dans les coffres de volets roulants et sous les toitures.',
      'Les frelons asiatiques, eux, choisissent les grands arbres des squares, des cours et des quais. Si le nid touche la façade ou une partie commune, nous intervenons en lien avec le syndic.',
    ],
    ['Saint-Maurice', 'Maisons-Alfort', 'Ivry-sur-Seine', 'Saint-Mandé'],
    { q: 'Un nid de guêpes dans mon volet roulant : que faire ?', a: 'Ne remontez pas et ne baissez pas le volet, et ne bouchez pas les ouvertures. Fermez la fenêtre et appelez-nous : le produit est injecté directement dans le coffre, là où se trouve le nid.' }),
  v('maisons-alfort', 'Maisons-Alfort', 'à Maisons-Alfort', '/zones/val-de-marne/maisons-alfort',
    'Détruire un nid de frelons à Maisons-Alfort (94) : 7j/7',
    'Maisons-Alfort : nid de frelons asiatiques dans un arbre, nid de guêpes sous le toit d\'un pavillon. Destruction à la perche dès 149 € TTC.',
    [
      'À Maisons-Alfort, entre les quartiers de pavillons et les bords de Marne, nous détruisons chaque année des nids de guêpes sous les tuiles, dans les abris de jardin et les haies.',
      'Les frelons asiatiques nichent volontiers en haut des arbres des jardins et des berges. Nous traitons ces nids depuis le sol, avec une perche télescopique, sans grimper dans l\'arbre.',
      "C'est aussi à Maisons-Alfort que nous sommes intervenus dans un logement Diogène envahi par les rats : nous connaissons bien la ville, de Charentonneau au Vert-de-Maisons, et ses nombreux jardins où les guêpes s'installent l'été.",
    ],
    ['Saint-Maurice', 'Alfortville', 'Charenton-le-Pont', 'Créteil'],
    { q: 'Le nid est en haut d\'un arbre : comment faites-vous ?', a: 'Nous utilisons une perche télescopique qui injecte le produit directement dans le nid, depuis le sol, jusqu\'à plusieurs mètres de haut. À partir de 149 € TTC.' }),
  v('joinville-le-pont', 'Joinville-le-Pont', 'à Joinville-le-Pont', '/zones/val-de-marne/joinville-le-pont',
    'Nid de frelons à Joinville-le-Pont (94) : destruction rapide',
    'Joinville-le-Pont : nids de frelons asiatiques dans les arbres des bords de Marne, nids de guêpes dans les jardins. Dès 89 € TTC.',
    [
      'À Joinville-le-Pont, les arbres des bords de Marne et de l\'Île Fanac offrent aux frelons asiatiques des emplacements en hauteur pour leurs nids, souvent découverts à l\'automne.',
      'Dans les jardins des maisons, ce sont plutôt les guêpes qui s\'installent sous les avant-toits, dans les cabanons et les haies. Attention en taillant : les vibrations déclenchent les attaques.',
    ],
    ['Saint-Maurice', 'Saint-Maur-des-Fossés', 'Nogent-sur-Marne', 'Champigny-sur-Marne'],
    { q: 'Je dois tailler ma haie mais il y a des guêpes : que faire ?', a: 'Repoussez la taille et observez la haie de loin : si les guêpes entrent et sortent toujours au même endroit, il y a un nid. Faites-le traiter avant de tailler.' }),
  v('saint-maur-des-fosses', 'Saint-Maur-des-Fossés', 'à Saint-Maur-des-Fossés', '/zones/val-de-marne/saint-maur-des-fosses',
    'Nid de guêpes à Saint-Maur-des-Fossés : destruction dès 89 €',
    'Saint-Maur-des-Fossés : jardins arborés, nids de guêpes sous les toits, frelons asiatiques dans les arbres. Destruction 7j/7, dès 89 € TTC.',
    [
      'Saint-Maur-des-Fossés, dans la boucle de la Marne, compte de nombreuses maisons avec jardin : c\'est là que nous traitons le plus de nids de guêpes, sous les tuiles, dans les haies et parfois dans la pelouse.',
      'Les grands arbres des jardins et des bords de Marne attirent aussi les frelons asiatiques. Un nid repéré en fin de saison peut encore être très actif : ne vous en approchez pas.',
      "De La Varenne au Parc Saint-Maur et à Adamville, chaque quartier a ses grands jardins : un nid de frelons peut s'y développer tout l'été en haut d'un cèdre ou d'un chêne sans que personne ne le remarque, jusqu'à l'automne.",
    ],
    ['Saint-Maurice', 'Joinville-le-Pont', 'Créteil', 'Champigny-sur-Marne'],
    { q: 'Des guêpes sortent d\'un trou dans ma pelouse : est-ce dangereux ?', a: 'Oui, surtout pour la tondeuse et les enfants qui jouent : c\'est sans doute un nid souterrain. Balisez la zone, ne tondez pas autour et faites-le traiter. À partir de 89 € TTC.' }),
  v('vincennes', 'Vincennes', 'à Vincennes', '/zones/val-de-marne/vincennes',
    'Destruction nid de frelons à Vincennes (94) : dès 89 €',
    'Vincennes : nids de frelons asiatiques près du Bois, nids de guêpes sous les toits et balcons. Destruction rapide, dès 89 € TTC.',
    [
      'À Vincennes, la proximité du Bois de Vincennes et ses grands arbres attire les frelons asiatiques, qui nichent souvent en hauteur et passent inaperçus jusqu\'à la chute des feuilles.',
      'En centre-ville, entre immeubles et petites maisons, les guêpes s\'installent sous les toitures, les balcons et dans les coffres de volets. Nous intervenons avec une perche quand le nid est en hauteur.',
    ],
    ['Saint-Mandé', 'Fontenay-sous-Bois', 'Nogent-sur-Marne', 'Charenton-le-Pont'],
    { q: 'Un nid de frelons dans un arbre près du Bois : qui doit le détruire ?', a: 'Si l\'arbre est sur votre terrain ou dans votre copropriété, c\'est au propriétaire ou au syndic de le faire traiter. S\'il est sur l\'espace public, signalez-le à la mairie.' }),
  v('saint-mande', 'Saint-Mandé', 'à Saint-Mandé', '/zones/val-de-marne/saint-mande',
    'Nid de guêpes ou frelons à Saint-Mandé : intervention 7j/7',
    'Saint-Mandé, à la lisière du Bois de Vincennes : destruction de nids de guêpes et de frelons, même en hauteur. Dès 89 € TTC.',
    [
      'À Saint-Mandé, à la lisière du Bois de Vincennes et près du lac, les frelons trouvent de quoi chasser et de grands arbres pour leurs nids.',
      'Dans les immeubles et les cours, les guêpes nichent plutôt sous les rebords de fenêtres, dans les coffres de volets et sous les toitures. Un va-et-vient toujours au même endroit trahit le nid.',
      "Comme beaucoup d'immeubles anciens, ceux de Saint-Mandé ont des corniches, des toitures en zinc et des conduits de cheminée où guêpes et frelons européens aiment s'abriter. Ces nids difficiles d'accès se traitent à partir de 199 € TTC.",
    ],
    ['Vincennes', 'Charenton-le-Pont', 'Saint-Maurice', 'Fontenay-sous-Bois'],
    { q: 'Comment savoir s\'il y a un nid près de ma fenêtre ?', a: 'Observez de loin pendant quelques minutes : si des guêpes ou des frelons entrent et sortent toujours par le même point (rebord, volet, toiture), le nid est là. Ne vous approchez pas et appelez-nous.' }),
  v('nogent-sur-marne', 'Nogent-sur-Marne', 'à Nogent-sur-Marne', '/zones/val-de-marne/nogent-sur-marne',
    'Nid de frelons à Nogent-sur-Marne : destruction en hauteur',
    'Nogent-sur-Marne : nid de frelons dans une cheminée, sous un toit ou dans un arbre. Intervention en hauteur dès 199 € TTC.',
    [
      'À Nogent-sur-Marne, nous sommes intervenus sur une toiture pour détruire un nid de frelons installé dans une cheminée : un emplacement abrité que les frelons apprécient. Voir [l\'intervention en vidéo](/blog/nid-frelons-cheminee-nogent-sur-marne).',
      'Entre les maisons des coteaux et les bords de Marne, les nids se trouvent aussi sous les tuiles, dans les combles et en haut des arbres des jardins.',
    ],
    ['Le Perreux-sur-Marne', 'Fontenay-sous-Bois', 'Joinville-le-Pont', 'Vincennes'],
    { q: 'Des frelons sortent de ma cheminée : que faire ?', a: 'N\'allumez pas de feu et ne bouchez pas le conduit : les frelons pourraient sortir dans la maison. Fermez la trappe ou l\'insert et appelez-nous : le nid est traité depuis la toiture. À partir de 199 € TTC.' }),
  v('le-perreux-sur-marne', 'Le Perreux-sur-Marne', 'au Perreux-sur-Marne', '/zones/val-de-marne/le-perreux-sur-marne',
    'Détruire un nid de guêpes au Perreux-sur-Marne : dès 89 €',
    'Le Perreux-sur-Marne : nids de guêpes dans les jardins et sous les toits, frelons asiatiques dans les arbres. Destruction 7j/7.',
    [
      'Au Perreux-sur-Marne, ville de pavillons et de jardins le long de la Marne, les guêpes s\'installent sous les avant-toits, dans les abris de jardin et les haies dès le printemps.',
      'En fin de saison, les nids de frelons asiatiques se découvrent dans les grands arbres des jardins et des berges, quand les feuilles tombent.',
    ],
    ['Nogent-sur-Marne', 'Bry-sur-Marne', 'Champigny-sur-Marne', 'Fontenay-sous-Bois'],
    { q: 'Un petit nid sous mon avant-toit au printemps : faut-il attendre ?', a: 'Non, c\'est le meilleur moment : au printemps, le nid ne contient encore que la reine et quelques ouvrières. Il se traite facilement, avant de devenir un gros nid en été.' }),
  v('fontenay-sous-bois', 'Fontenay-sous-Bois', 'à Fontenay-sous-Bois', '/zones/val-de-marne/fontenay-sous-bois',
    'Nid de frelons à Fontenay-sous-Bois : destruction rapide',
    'Fontenay-sous-Bois : nids de frelons près du Bois de Vincennes, nids de guêpes dans les pavillons et résidences. Dès 89 € TTC.',
    [
      'À Fontenay-sous-Bois, en bordure du Bois de Vincennes, les frelons asiatiques nichent dans les grands arbres et se repèrent surtout à l\'automne.',
      'Dans les quartiers de pavillons, les guêpes choisissent les avant-toits, les cabanons et les haies, et dans les résidences, les coffres de volets roulants.',
    ],
    ['Vincennes', 'Nogent-sur-Marne', 'Montreuil', 'Saint-Mandé'],
    { q: 'Le nid est dans l\'arbre de mon voisin : que faire ?', a: 'Prévenez votre voisin : c\'est au propriétaire du terrain de le faire traiter. Nous pouvons intervenir à sa demande, et traiter depuis votre jardin si c\'est plus accessible, avec son accord.' }),
  v('creteil', 'Créteil', 'à Créteil', '/zones/val-de-marne/creteil',
    'Destruction nid de frelons à Créteil (94) : 7j/7, dès 89 €',
    'Créteil : nids de frelons asiatiques dans les arbres des parcs et résidences, nids de guêpes sous les toits. Dès 89 € TTC.',
    [
      'À Créteil, entre le lac, les parcs et les résidences arborées, les frelons asiatiques trouvent de grands arbres pour nicher en hauteur.',
      'Dans les quartiers de maisons comme dans les grands ensembles, les guêpes s\'installent sous les toitures, dans les coffres de volets et dans les haies. Pour une résidence, nous intervenons avec le gardien ou le syndic.',
    ],
    ['Maisons-Alfort', 'Alfortville', 'Saint-Maur-des-Fossés', 'Bonneuil-sur-Marne'],
    { q: 'Un nid dans un arbre de ma résidence : qui appeler ?', a: 'Prévenez le gardien ou le syndic : l\'arbre fait partie des parties communes. Nous intervenons à leur demande et fournissons une attestation d\'intervention.' }),
  v('alfortville', 'Alfortville', 'à Alfortville', '/zones/val-de-marne/alfortville',
    'Nid de guêpes ou de frelons à Alfortville : destruction 7j/7',
    'Alfortville, entre Seine et Marne : nids de guêpes sur les façades et balcons, frelons dans les arbres des quais. Dès 89 € TTC.',
    [
      'À Alfortville, entre la Seine et la Marne, les arbres des quais et des parcs accueillent des nids de frelons asiatiques, souvent visibles à l\'automne.',
      'Dans les immeubles, les guêpes nichent sous les balcons, dans les coffres de volets et sous les toitures. Ne bouchez jamais l\'entrée d\'un nid dans un mur : les guêpes chercheraient une autre sortie.',
    ],
    ['Maisons-Alfort', 'Ivry-sur-Seine', 'Vitry-sur-Seine', 'Créteil'],
    { q: 'Des guêpes entrent dans un trou de la façade : puis-je le boucher ?', a: 'Non, surtout pas : les guêpes chercheraient une autre sortie, parfois à l\'intérieur du logement. Faites d\'abord traiter le nid, puis rebouchez quelques jours plus tard.' }),
  v('champigny-sur-marne', 'Champigny-sur-Marne', 'à Champigny-sur-Marne', '/zones/val-de-marne/champigny-sur-marne',
    'Détruire un nid de frelons à Champigny-sur-Marne : dès 89 €',
    'Champigny-sur-Marne : nids de frelons asiatiques dans les arbres, nids de guêpes dans les pavillons. Destruction à la perche, 7j/7.',
    [
      'À Champigny-sur-Marne, les grands arbres du parc du Tremblay, des bords de Marne et des jardins offrent aux frelons asiatiques de nombreux emplacements pour leurs nids.',
      'Dans les nombreux pavillons de la ville, les guêpes nichent sous les tuiles, dans les cabanons et parfois dans le sol. Nous traitons aussi les nids difficiles d\'accès, en toiture ou dans les combles.',
    ],
    ['Saint-Maur-des-Fossés', 'Villiers-sur-Marne', 'Chennevières-sur-Marne', 'Joinville-le-Pont'],
    { q: 'Des guêpes dans mes combles : est-ce grave ?', a: 'Un nid dans les combles peut devenir très gros et les guêpes peuvent entrer dans la maison par les plafonds ou les gaines. Ne montez pas les déranger : nous traitons ce type de nid à partir de 199 € TTC.' }),
  v('ivry-sur-seine', 'Ivry-sur-Seine', 'à Ivry-sur-Seine', '/zones/val-de-marne/ivry-sur-seine',
    'Nid de frelons à Ivry-sur-Seine (94) : destruction rapide',
    'Ivry-sur-Seine : nids de guêpes sur les façades et balcons, frelons asiatiques dans les arbres. Intervention 7j/7, dès 89 € TTC.',
    [
      'À Ivry-sur-Seine, entre les bords de Seine, les parcs et les quartiers d\'immeubles, nous traitons des nids de frelons asiatiques en haut des arbres comme des nids de guêpes sur les façades.',
      'Dans les cours et les petites maisons, les guêpes s\'installent dans les coffres de volets, sous les toits et dans les abris. Un nid près d\'une fenêtre se traite sans entrer dans le logement voisin.',
    ],
    ['Vitry-sur-Seine', 'Alfortville', 'Charenton-le-Pont', 'Le Kremlin-Bicêtre'],
    { q: 'Des guêpes entrent dans mon appartement par la fenêtre : y a-t-il un nid ?', a: 'Si elles arrivent toujours du même côté, un nid est probablement proche : sous le rebord, dans le volet ou sous la toiture. Fermez la fenêtre et envoyez-nous une photo prise de loin.' }),
  v('paris-12', 'Paris 12e', 'à Paris 12e', '/zones/paris',
    'Destruction nid de guêpes et frelons à Paris 12e : 7j/7',
    'Paris 12e : nids de frelons près du Bois de Vincennes et de la Coulée verte, nids de guêpes sur balcons et toits. Dès 89 € TTC.',
    [
      'Dans le 12e arrondissement, le Bois de Vincennes, la Coulée verte René-Dumont et les jardins offrent aux frelons asiatiques de grands arbres pour leurs nids.',
      'Sur les immeubles, ce sont surtout les guêpes qui posent problème : sous les balcons, dans les coffres de volets, sous les toitures en zinc. Pour un nid en façade, nous intervenons avec l\'accord du syndic.',
      "Du quartier de Bercy à la Porte Dorée, en passant par Picpus et le quartier d'Aligre, nous intervenons dans tout l'arrondissement : nid dans une cour intérieure, sur une terrasse en étage ou dans un arbre d'une résidence.",
    ],
    ['Saint-Mandé', 'Charenton-le-Pont', 'Vincennes', 'Paris 11e'],
    { q: 'Un nid de guêpes sur mon balcon à Paris : que faire ?', a: 'Fermez la porte-fenêtre, n\'utilisez pas le balcon et ne tentez rien vous-même. Envoyez-nous une photo prise de loin : le nid est traité directement, souvent en quelques minutes.' }),
]

export const getVilleFrelons = (slug: string) => VILLES_FRELONS.find((x) => x.slug === slug)
