// Profils des familles de pages nuisible + ville servies par components/VilleServicePage (modèle validé le 09/11/2026).
// Titre Google, haut de page, étapes, tarifs (alignés sur /tarifs) et maillage. Pas de chiffre inventé, pas de tiret long.
import type { FamilleVille } from './services-ville'

export type ProfilVille = {
  famille: FamilleVille
  motCle: string // début du titre Google
  suffixes: string[] // compléments du titre, le premier qui tient en 60 caractères est retenu
  heroTitre: string // début du H1
  prix: string // « 120 € »
  prixNum: string // « 120 »
  prixNote: string
  offre: string
  description: (a: string, cp: string) => string
  accroches: string[]
  etapesTitre: (a: string) => string
  etapes: string[][]
  tarifsTitre: (a: string) => string
  tarifsIntro: string
  tarifs: { label: string; prix: string; detail: string }[]
}

const cpTxt = (cp: string) => (cp ? ` (${cp})` : '')

export const PROFILS: Record<'souris' | 'cafards' | 'fourmis' | 'chenilles' | 'acariens' | 'frelons', ProfilVille> = {
  souris: {
    famille: 'souris', motCle: 'Souris', suffixes: [' : traitement dès 120 €', ' : traitement 7j/7', ' : traitement', ''],
    heroTitre: 'Traitement contre les souris', prix: '120 €', prixNum: '120',
    prixNote: 'Appartement, pièges ou postes sécurisés. Devis gratuit.', offre: 'appartement, souris',
    description: (a, cp) => `Souris ${a}${cpTxt(cp)} : pièges, postes sécurisés et accès rebouchés par un technicien certifié. Dès 120 € TTC, devis gratuit, garantie 1 an.`,
    accroches: [
      'Grattements la nuit, crottes dans les placards ? Nous trouvons par où elles entrent et nous bouchons chaque passage.',
      'Pièges, pièges connectés ou postes sécurisés : la méthode est choisie avec vous, enfants et animaux compris.',
      'Une souris passe par un trou de la taille d’un crayon : sans colmatage, elles reviennent. C’est notre priorité.',
      'Appartement, maison, commerce : intervention rapide, souvent le jour même, avec une garantie d’un an.',
    ],
    etapesTitre: (a) => `Comment nous chassons les souris ${a}`,
    etapes: [
      ['Appel ou photo|Une photo des crottes ou des dégâts suffit souvent : souris ou rat, nous vous le disons et vous donnons le prix.', 'Devis gratuit|Quelques questions sur le logement et vous connaissez le tarif avant notre venue.'],
      ['Recherche des entrées|Passages de tuyaux, bas de portes, gaines : le technicien repère par où les souris arrivent.', 'Diagnostic|Traces, crottes et grignotages indiquent les couloirs de passage et les nids.'],
      ['Pose des dispositifs|Pièges mécaniques ou connectés, ou postes d’appâtage verrouillés hors de portée des enfants.', 'Traitement|Les dispositifs sont placés le long des murs, là où les souris circulent vraiment.'],
      ['Colmatage et garantie|Les accès sont bouchés avec des matériaux qu’elles ne rongent pas. Garantie 1 an.', 'Suivi|Contrôle des captures, accès fermés et garantie d’un an sur le traitement.'],
    ],
    tarifsTitre: (a) => `Prix d’un traitement contre les souris ${a}`,
    tarifsIntro: 'Le devis est gratuit et le prix est fixé avant l’intervention.',
    tarifs: [
      { label: 'Appartement', prix: 'dès 120 €', detail: 'Pièges ou postes sécurisés, colmatage' },
      { label: 'Commerce, restaurant', prix: 'sur devis', detail: 'Attestation fournie' },
      { label: 'Copropriété, contrat annuel', prix: 'sur devis', detail: 'Parties communes, passages réguliers' },
    ],
  },
  cafards: {
    famille: 'cafards', motCle: 'Cafards', suffixes: [' : traitement dès 120 €', ' : traitement 7j/7', ' : traitement', ''],
    heroTitre: 'Traitement des cafards', prix: '120 €', prixNum: '120',
    prixNote: 'T1 ou T2, gel appât professionnel. Devis gratuit.', offre: 'T1 ou T2, cafards',
    description: (a, cp) => `Cafards et blattes ${a}${cpTxt(cp)} : gel appât, insecticide ou vapeur sèche par un technicien certifié. Dès 120 € TTC, devis gratuit, garantie 1 an.`,
    accroches: [
      'Cafards dans la cuisine ou la salle de bain ? Nous traitons les cachettes, pas seulement les insectes visibles.',
      'Gel appât, insecticide ciblé ou vapeur sèche : un technicien certifié choisit le traitement adapté à votre logement.',
      'Un cafard vu en plein jour signale souvent une colonie importante : mieux vaut agir vite, souvent le jour même.',
      'Logement, restaurant ou commerce : traitement en deux temps et garantie d’un an, attestation pour les pros.',
    ],
    etapesTitre: (a) => `Comment se passe le traitement des cafards ${a}`,
    etapes: [
      ['Appel ou photo|Blatte germanique ou orientale ? Une photo suffit souvent à l’identifier et à fixer le prix.', 'Devis gratuit|Vous décrivez le logement et l’infestation, nous vous annonçons le tarif tout de suite.'],
      ['Inspection|Charnières, arrière du frigo et du four, gaines, siphons : chaque cachette est repérée.', 'Repérage des foyers|Le technicien suit les traces (crottes, oothèques) jusqu’aux nids.'],
      ['Traitement ciblé|Gel appât dans les zones de passage, insecticide ou vapeur sèche selon l’infestation.', 'Élimination|Le gel est rapporté dans les cachettes et touche toute la colonie.'],
      ['Contrôle et garantie|Passage de contrôle si besoin, conseils pour éviter le retour, garantie 1 an.', 'Suivi|Nous vérifions le résultat et vous laissons des consignes simples. Garantie d’un an.'],
    ],
    tarifsTitre: (a) => `Prix d’un traitement anti-cafards ${a}`,
    tarifsIntro: 'Le devis est gratuit et le prix est fixé avant l’intervention.',
    tarifs: [
      { label: 'T1 ou T2', prix: 'dès 120 €', detail: 'Gel appât professionnel' },
      { label: 'Grand logement', prix: 'sur devis', detail: 'Ou infestation marquée' },
      { label: 'Local professionnel', prix: 'sur devis', detail: 'Restaurant, commerce, attestation fournie' },
    ],
  },
  fourmis: {
    famille: 'fourmis', motCle: 'Fourmis', suffixes: [' : traitement dès 120 €', ' : traitement 7j/7', ' : traitement', ''],
    heroTitre: 'Traitement des fourmis', prix: '120 €', prixNum: '120',
    prixNote: 'Appartement, gel appât sur les pistes. Devis gratuit.', offre: 'appartement, fourmis',
    description: (a, cp) => `Fourmis ${a}${cpTxt(cp)} : nous atteignons la reine avec un gel appât ou en traitant le nid. Dès 120 € TTC, devis gratuit, garantie 1 an.`,
    accroches: [
      'Pour s’en débarrasser, il faut atteindre la reine : c’est tout le principe de notre traitement.',
      'Fourmis en file dans la cuisine ? Un appât à action lente est rapporté au nid et touche toute la colonie.',
      'Fourmi noire, pharaon, charpentière ou Tapinoma : nous identifions l’espèce avant de traiter.',
      'Les sprays ne tuent que les ouvrières visibles. Nous traitons la colonie, avec une garantie d’un an.',
    ],
    etapesTitre: (a) => `Comment nous éliminons les fourmis ${a}`,
    etapes: [
      ['Appel ou photo|Une photo de près permet souvent de reconnaître l’espèce et de vous donner le prix.', 'Devis gratuit|Vous décrivez où passent les fourmis, nous vous annonçons le tarif.'],
      ['Identification|Le technicien reconnaît l’espèce et suit les pistes jusqu’au nid ou à son entrée.', 'Recherche du nid|Dalle, mur, jardinière, bois humide : nous cherchons d’où vient la colonie.'],
      ['Traitement de la colonie|Gel appât sur les pistes, ou traitement direct du nid quand il est accessible.', 'Atteindre la reine|L’appât est rapporté au nid par les ouvrières et touche la reine.'],
      ['Conseils et garantie|Joints, seuils et rangement de la nourriture : nous évitons le retour. Garantie 1 an.', 'Suivi|Passage de contrôle si besoin et garantie d’un an sur le traitement.'],
    ],
    tarifsTitre: (a) => `Prix d’un traitement contre les fourmis ${a}`,
    tarifsIntro: 'Le devis est gratuit et le prix est fixé avant l’intervention.',
    tarifs: [
      { label: 'Appartement', prix: 'dès 120 €', detail: 'Gel appât sur les pistes' },
      { label: 'Maison avec jardin', prix: 'sur devis', detail: 'Intérieur et extérieur' },
      { label: 'Fourmis charpentières', prix: 'sur devis', detail: 'Bois, charpente. Supercolonie : sur devis' },
    ],
  },
  chenilles: {
    famille: 'chenilles', motCle: 'Chenilles processionnaires', suffixes: [' : traitement', ''],
    heroTitre: 'Chenilles processionnaires', prix: '89 €', prixNum: '89',
    prixNote: 'Nid accessible, retrait et destruction. Devis gratuit.', offre: 'nid accessible, chenilles processionnaires',
    description: (a, cp) => `Chenilles processionnaires ${a}${cpTxt(cp)} : retrait des nids, écopièges et pièges à phéromones. Dès 89 € TTC, devis gratuit, intervention rapide.`,
    accroches: [
      'Leurs poils sont très urticants pour les enfants et les chiens : ne touchez jamais un nid ni une procession.',
      'Retrait des nids en hauteur, écopièges et pièges à phéromones : nous protégeons votre jardin sur la durée.',
      'Pins ou chênes touchés ? Nous intervenons au bon moment de l’année, avec le matériel pour travailler en hauteur.',
      'Un nid blanc et soyeux en haut d’un pin annonce les processions : c’est le moment d’agir.',
    ],
    etapesTitre: (a) => `Comment nous traitons les chenilles processionnaires ${a}`,
    etapes: [
      ['Appel ou photo|Une photo des nids ou des chenilles nous permet de vous conseiller et de fixer le prix.', 'Devis gratuit|Nombre de nids, hauteur, essence de l’arbre : vous avez le tarif avant notre venue.'],
      ['Repérage|Le technicien localise tous les nids et choisit le matériel adapté à la hauteur.', 'Inspection des arbres|Pins et chênes sont contrôlés pour ne laisser aucun nid.'],
      ['Retrait des nids|Coupe et destruction sécurisée des nids, en tenue de protection, à la perche si besoin.', 'Échenillage|Les nids sont retirés et détruits sans disperser les poils urticants.'],
      ['Prévention|Écopièges, pièges à phéromones et nichoirs à mésanges pour limiter la prochaine saison.', 'Suivi|Calendrier d’intervention et conseils pour protéger votre jardin l’an prochain.'],
    ],
    tarifsTitre: (a) => `Prix d’un traitement des chenilles processionnaires ${a}`,
    tarifsIntro: 'Le devis est gratuit et le prix dépend du nombre de nids et de leur hauteur.',
    tarifs: [
      { label: 'Nid accessible', prix: 'dès 89 €', detail: 'Retrait et destruction du nid' },
      { label: 'Nid en hauteur', prix: 'dès 149 €', detail: 'Perche télescopique' },
      { label: 'Grand arbre, nacelle', prix: 'sur devis', detail: 'Selon la hauteur et le nombre de nids' },
    ],
  },
  acariens: {
    famille: 'acariens', motCle: 'Acariens', suffixes: [' : traitement dès 120 €', ' : traitement 7j/7', ' : traitement', ''],
    heroTitre: 'Traitement anti-acariens', prix: '120 €', prixNum: '120',
    prixNote: 'Une chambre, literie à la vapeur sèche. Devis gratuit.', offre: 'une chambre, acariens',
    description: (a, cp) => `Acariens ${a}${cpTxt(cp)} : vapeur sèche, cryogénie ou acaricide sur la literie, les canapés et les tapis. Dès 120 € TTC, devis gratuit.`,
    accroches: [
      'Éternuements au réveil, nez bouché au lit ? Nous traitons la literie, les canapés et les tapis en profondeur.',
      'Vapeur sèche ou cryogénie sans produit, ou acaricide professionnel : la méthode s’adapte à votre logement.',
      'Les acariens ne piquent pas, mais ils gênent les personnes allergiques : nous réduisons fortement leur population.',
      'Chambre d’enfant, location meublée, hôtel : intervention rapide et conseils pour éviter qu’ils reviennent.',
      'Matelas ancien, moquette, peluches : là où la poussière s’accumule, les acariens prolifèrent. Nous traitons ces foyers un par un.',
    ],
    etapesTitre: (a) => `Comment se passe un traitement anti-acariens ${a}`,
    etapes: [
      ['Appel|Vous décrivez les pièces et les symptômes : nous vous conseillons et vous donnons le prix.', 'Devis gratuit|Nombre de pièces, literie, canapés, tapis : vous connaissez le tarif à l’avance.'],
      ['Inspection|Matelas, sommiers, oreillers, canapés et tapis sont examinés, ainsi que l’humidité de la pièce.', 'Diagnostic|Le technicien repère les textiles les plus touchés et les causes (humidité, aération).'],
      ['Traitement|Vapeur sèche à haute température ou cryogénie, et acaricide professionnel si besoin.', 'Traitement en profondeur|La vapeur ou le froid atteignent les acariens au cœur des textiles.'],
      ['Prévention|Humidité, aération, housses et lavage : nous vous laissons les bons gestes.', 'Conseils|Sans prévention, les acariens se réinstallent : nous vous expliquons quoi faire.', 'Après le passage|Housses anti-acariens, lavage à 60 °C et pièce bien aérée : les gestes qui prolongent le résultat.'],
    ],
    tarifsTitre: (a) => `Prix d’un traitement anti-acariens ${a}`,
    tarifsIntro: 'Le devis est gratuit et le prix est fixé avant l’intervention.',
    tarifs: [
      { label: 'Une chambre', prix: 'dès 120 €', detail: 'Matelas, sommier et oreillers à la vapeur sèche' },
      { label: 'Logement complet', prix: 'sur devis', detail: 'Literie, canapés, tapis, rideaux' },
      { label: 'Professionnels', prix: 'sur devis', detail: 'Hôtels, crèches, locations meublées' },
    ],
  },
  frelons: {
    famille: 'frelons', motCle: 'Destruction nid de frelon', suffixes: [' : 7j/7', ''],
    heroTitre: 'Destruction de nid de frelons', prix: '89 €', prixNum: '89',
    prixNote: 'Nid accessible. Perche dès 149 €, toiture dès 199 €.', offre: 'nid accessible, frelons ou guêpes',
    description: (a, cp) => `Destruction de nid de frelons ou de guêpes ${a}${cpTxt(cp)} : frelon asiatique et européen, nid en hauteur à la perche. Dès 89 € TTC, 7j/7.`,
    accroches: [
      'Ne vous approchez jamais d’un nid : la colonie peut attaquer en groupe. Nous intervenons en tenue intégrale.',
      'Nid en haut d’un arbre ou sous le toit ? Notre perche télescopique traite le nid à distance, sans grimper.',
      'Frelon asiatique, frelon européen ou guêpes : un technicien certifié détruit le nid, souvent le jour même.',
      'Va-et-vient d’insectes près d’un volet, d’une haie ou d’une toiture ? C’est souvent un nid à traiter vite.',
    ],
    etapesTitre: (a) => `Comment nous détruisons un nid de frelons ${a}`,
    etapes: [
      ['Appel ou photo|Une photo, même de loin, nous permet d’identifier l’espèce et l’accès au nid, et de fixer le prix.', 'Devis gratuit|Hauteur et emplacement du nid : vous avez le tarif avant notre venue.'],
      ['Repérage|Le technicien localise le nid et choisit la méthode : traitement direct, perche ou accès en hauteur.', 'Sécurisation|Zone tenue à distance, enfants et animaux à l’intérieur, tenue de protection intégrale.'],
      ['Destruction du nid|Le produit est injecté au cœur du nid, à la perche télescopique si besoin.', 'Traitement|Le nid est traité directement : la colonie est neutralisée en quelques heures.'],
      ['Conseils|Les insectes encore dehors rentrent au nid et sont touchés. Nous vous disons quand le retirer.', 'Après l’intervention|Consignes pour les heures qui suivent et retrait du nid si nécessaire.'],
    ],
    tarifsTitre: (a) => `Prix d’une destruction de nid de frelons ${a}`,
    tarifsIntro: 'Le prix dépend de la hauteur et de l’accès au nid. Devis gratuit, tarif fixé avant l’intervention.',
    tarifs: [
      { label: 'Nid accessible', prix: 'dès 89 €', detail: 'Jusqu’à 5 m environ : auvent, cabanon, haie' },
      { label: 'Nid en hauteur', prix: 'dès 149 €', detail: 'Perche télescopique' },
      { label: 'Nid difficile d’accès', prix: 'dès 199 €', detail: 'Toiture, combles, cheminée. Nacelle : sur devis' },
    ],
  },
}
