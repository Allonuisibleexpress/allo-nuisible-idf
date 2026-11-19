import type { PagePrix } from './types'

export const PRIX_PIGEONS: PagePrix = {
  slug: 'pigeons',
  nom: 'dépigeonnage',
  titreSeo: 'Prix dépigeonnage balcon, façade : dès 150 € (2026)',
  description: 'Combien coûte un dépigeonnage en Île-de-France ? Balcon ou rebord dès 150 € TTC pose comprise, terrasse et façade sur devis, pics et filets, sans majoration.',
  h1: 'Prix d’un dépigeonnage : balcon, terrasse, façade',
  prixDes: '150 €',
  garantie: '1 an',
  service: '/services/pigeons',
  intro: [
    'Un dépigeonnage coûte **dès 150 € TTC** chez Allo Nuisible IDF pour un balcon ou un rebord, pose comprise. Pour une terrasse, des corniches, une façade ou une toiture, le prix est donné **sur devis gratuit**, après avoir vu la surface à protéger.',
    'Le dépigeonnage ne consiste pas à tuer les pigeons, ce qui est encadré et rarement utile : il s’agit de poser des **barrières physiques** qui les empêchent de se poser et de nicher. Le prix dépend donc surtout de la **surface à protéger**, du **matériel** (pics, filet, fil tendu) et de l’**accès**.',
    'Cette page explique ce qui est compris, ce qui fait varier le prix et les solutions les plus durables pour un appartement parisien comme pour une façade d’immeuble.',
  ],
  enBref: [
    { q: 'Combien coûte un dépigeonnage ?', r: 'Dès 150 € TTC pour un balcon ou un rebord, pose comprise. Terrasse, façade, toiture : sur devis.' },
    { q: 'Les pigeons sont-ils tués ?', r: 'Non : pics, filets et fils tendus les empêchent de se poser, sans les blesser.' },
    { q: 'Le nettoyage des fientes est-il compris ?', r: 'Un nettoyage de la zone avant la pose est prévu ; un grand nettoyage est chiffré au devis.' },
    { q: 'Est-ce plus cher le week-end ?', r: 'Non, aucune majoration.' },
  ],
  grille: [
    { situation: 'Balcon, rebord de fenêtre', prix: 'dès 150 €', inclus: 'Pics ou filet anti-pigeons, pose comprise' },
    { situation: 'Terrasse, corniches', prix: 'sur devis', inclus: 'Filet ou pics sur mesure' },
    { situation: 'Façade, toiture', prix: 'sur devis', inclus: 'Étude technique, nacelle si besoin' },
    { situation: 'Retrait de nid et nettoyage', prix: 'sur devis', inclus: 'Nid, fientes, désinfection de la zone' },
  ],
  inclus: [
    'L’**étude** de l’endroit où les pigeons se posent et nichent.',
    'Le **matériel** : pics inox, filet ou fil tendu selon la surface.',
    'La **pose** par nos techniciens.',
    'Un **nettoyage** de la zone de pose.',
    'Les **conseils** pour ne pas attirer les pigeons (nourriture, eau).',
  ],
  nonInclus: [
    'La **nacelle** pour une façade haute : sur devis.',
    'Le **grand nettoyage** d’un balcon ou d’un grenier couvert de fientes : sur devis.',
    'L’**autorisation de copropriété** pour un filet visible en façade : à demander au syndic si nécessaire.',
  ],
  facteurs: [
    { t: '1. La surface à protéger', x: 'Un rebord de fenêtre, un balcon entier, une terrasse ou une façade : le prix suit la longueur de pics ou la surface de filet.' },
    { t: '2. Le matériel', x: 'Les **pics inox** conviennent aux rebords et aux corniches. Le **filet** ferme un balcon ou une cour. Le **fil tendu** protège les garde-corps. Chacun a son coût et son rendu.' },
    { t: '3. L’accès', x: 'Un balcon se traite depuis l’appartement. Une corniche au 5e étage ou une toiture demande une nacelle ou un travail en hauteur.' },
    { t: '4. Le nid et les fientes', x: 'Un nid installé et une couche de fientes à retirer ajoutent du temps. Les fientes sont corrosives et peuvent porter des germes : leur retrait se fait avec protection. Voir [enlever un nid de pigeon](/blog/nid-de-pigeon-balcon-enlever).' },
  ],
  methodes: {
    titre: 'Pics, filets, fils : les solutions et leur prix',
    intro: 'Toutes nos solutions sont des barrières physiques : elles ne blessent pas les oiseaux et ne demandent aucun produit.',
    lignes: [
      { methode: 'Pics inox', quand: 'Rebords, appuis de fenêtre, corniches', prix: 'dès 150 €' },
      { methode: 'Filet anti-pigeons', quand: 'Balcon, loggia, cour, terrasse', prix: 'dès 150 €' },
      { methode: 'Fil tendu', quand: 'Garde-corps, faîtages', prix: 'sur devis' },
      { methode: 'Façade et toiture', quand: 'Grandes surfaces, nacelle', prix: 'sur devis' },
    ],
    apres: [
      'Voir notre [balcon protégé par filet et nettoyé](/blog/depigeonnage-balcon-filet-nettoyage), photos à l’appui.',
      'Nourrir les pigeons attire aussi les rats : voir [nourrir les oiseaux attire les rats](/blog/nourrir-oiseaux-pigeons-attire-rats).',
    ],
  },
  exemples: [
    { t: 'Balcon envahi à Paris', x: 'Fientes, nid dans un coin, pigeons tous les matins. Nettoyage et filet : **dès 150 €** pour un balcon standard.' },
    { t: 'Rebords d’un appartement', x: 'Pics inox sur trois appuis de fenêtre : **dès 150 €**.' },
    { t: 'Corniches d’un immeuble', x: 'Pics sur la façade, nacelle : **sur devis**, avec le syndic.' },
    { t: 'Toit d’un pavillon', x: 'Pigeons sous les tuiles et dans la gouttière : **sur devis**.' },
  ],
  soiMeme: [
    'Les répulsifs visuels (CD, faux rapaces) marchent quelques jours : les pigeons s’y habituent vite.',
    'Retirer un nid avec des œufs ou des petits est encadré : mieux vaut agir avant la nidification, ou nous appeler.',
    'Ce qui aide : ne pas nourrir les pigeons, retirer les points d’eau et les graines, nettoyer régulièrement le balcon.',
  ],
  economiser: [
    { t: 'Agir avant le nid', x: 'Un balcon sans nid se protège plus vite et à moindre coût.' },
    { t: 'Protéger seulement où ils se posent', x: 'Pas besoin de tout couvrir : nous ciblons les zones utilisées.' },
    { t: 'Grouper avec les voisins', x: 'Plusieurs balcons d’un même immeuble le même jour : un seul déplacement.' },
  ],
  quiPaie: [
    'Un balcon privatif est à la charge du **propriétaire** ou de l’**occupant**. Les façades, corniches et toitures relèvent de la **copropriété**. Sur les bâtiments publics, c’est la **commune**.',
  ],
  deroule: [
    { t: 'Photo', x: 'Une photo du balcon ou du rebord suffit souvent pour le prix.' },
    { t: 'Devis', x: 'Matériel, surface et prix confirmés avant la pose.' },
    { t: 'Nettoyage et pose', x: 'Nettoyage de la zone, pose des pics ou du filet.' },
    { t: 'Garantie', x: 'Si les pigeons contournent la protection, nous revenons ajuster.' },
  ],
  pieges: [
    'Méfiez-vous des poses « au mètre » sans visite, qui oublient la zone réellement utilisée par les pigeons : la protection ne sert alors à rien.',
  ],
  faq: [
    { q: 'Quel est le prix d’un filet anti-pigeons pour un balcon ?', a: 'Dès 150 € TTC, pose comprise, pour un balcon standard. Une terrasse est sur devis.' },
    { q: 'Les pics blessent-ils les pigeons ?', a: 'Non, ils les empêchent seulement de se poser.' },
    { q: 'Faut-il l’accord de la copropriété ?', a: 'Pour un filet visible en façade, le règlement de copropriété peut l’exiger : renseignez-vous auprès du syndic.' },
    { q: 'Est-ce plus cher le week-end ?', a: 'Non, aucune majoration.' },
  ],
  guides: [
    { href: '/blog/nid-de-pigeon-balcon-enlever', label: 'Enlever un nid de pigeon' },
    { href: '/blog/depigeonnage-balcon-filet-nettoyage', label: 'Balcon : filet et nettoyage' },
  ],
}
