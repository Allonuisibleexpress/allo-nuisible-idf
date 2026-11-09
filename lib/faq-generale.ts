// FAQ principale du site (/faq), créée le 09/11/2026. Contenu propre, sans chiffre inventé.
// Prix alignés sur /tarifs. Pas de tiret long, pas de « naturel », « écologique », « sans danger ».
import { SAISONS_FAQ } from './saisons-faq'

export type Rubrique = { id: string; titre: string; items: { q: string; a: string }[] }

export const FAQ_GENERALE: Rubrique[] = [
  {
    id: 'entreprise', titre: 'Allo Nuisible IDF, qui sommes-nous ?',
    items: [
      { q: 'Où êtes-vous basés ?', a: 'Au 6 bis rue du Val d’Osne, 94410 Saint-Maurice, dans le Val-de-Marne. Nous intervenons à Paris, dans le Val-de-Marne, les Hauts-de-Seine et le reste de l’Île-de-France.' },
      { q: 'Quels nuisibles traitez-vous ?', a: 'Rats et souris, punaises de lit, cafards et blattes, fourmis, guêpes et frelons, pigeons, chenilles processionnaires, acariens, puces, ainsi que la désinfection de logements et de locaux.' },
      { q: 'Intervenez-vous 7j/7 ?', a: 'Oui, 7 jours sur 7, y compris le week-end et les jours fériés, souvent le jour même.' },
      { q: 'Vos techniciens sont-ils certifiés ?', a: 'Oui, ils sont titulaires du Certibiocide, la certification obligatoire pour utiliser des produits biocides professionnels (insecticides, raticides).' },
      { q: 'Comment vérifier que votre entreprise existe vraiment ?', a: 'Notre société ALLO NUISIBLE IDF est immatriculée (SIRET 928 763 713 00023) et vérifiable sur annuaire-entreprises.data.gouv.fr. Nos avis clients sont publiés sur notre fiche Google.' },
    ],
  },
  {
    id: 'prix', titre: 'Prix, devis et garantie',
    items: [
      { q: 'Le devis est-il gratuit ?', a: 'Oui, gratuit et sans engagement. Vous connaissez le prix avant l’intervention, par téléphone ou après une photo envoyée sur WhatsApp.' },
      { q: 'Combien coûte une dératisation ?', a: 'À partir de 120 € TTC pour un appartement. Commerces, restaurants et copropriétés : sur devis.' },
      { q: 'Combien coûte un traitement contre les punaises de lit ?', a: 'À partir de 290 € TTC pour un studio ou un T1, deux passages inclus. Pour un logement plus grand, le prix est fixé après inspection.' },
      { q: 'Combien coûte la destruction d’un nid de guêpes ou de frelons ?', a: 'À partir de 89 € TTC pour un nid accessible, 149 € pour un nid en hauteur à la perche, 199 € en toiture, combles ou cheminée.' },
      { q: 'Combien coûte un traitement contre les cafards, les fourmis ou les acariens ?', a: 'À partir de 120 € TTC. Le prix final dépend de la surface et de l’infestation.' },
      { q: 'Vos traitements sont-ils garantis ?', a: 'Oui, nos interventions sont garanties 1 an : si les nuisibles reviennent, notre technicien revient.' },
      { q: 'Qui paie le traitement dans un logement loué ?', a: 'Le logement loué doit être exempt de toute infestation d’espèces nuisibles et parasites (loi du 6 juillet 1989, article 6). Prévenez votre propriétaire par écrit dès les premiers signes.' },
    ],
  },
  {
    id: 'methodes', titre: 'Nos méthodes : comment ça marche ?',
    items: [
      { q: 'Comment fonctionne un traitement chimique (insecticide professionnel) ?', a: 'Le technicien applique un insecticide professionnel ciblé sur les zones infestées et les zones de passage : plinthes, fentes, cadres de lit, gaines. Le produit tue au contact et garde une action rémanente, c’est-à-dire qu’il continue d’agir pendant un certain temps sur les insectes qui passent. C’est le traitement le plus radical pour une infestation importante. Une absence de quelques heures est demandée, le temps que le produit sèche.' },
      { q: 'Comment fonctionne la vapeur sèche ?', a: 'Un appareil produit une vapeur à très haute température et très peu humide, appliquée au contact, lentement, sur les matelas, canapés, rideaux, moquettes et recoins. La chaleur tue instantanément les insectes et leurs œufs touchés. Aucun produit n’est laissé, le logement est utilisable juste après. La vapeur n’a pas d’effet rémanent : un second passage traite les éclosions.' },
      { q: 'Comment fonctionne la cryogénie ?', a: 'Le technicien projette de la neige carbonique (CO2 solide) à environ −78 °C. Le choc thermique tue au contact les punaises de lit et leurs œufs. La cryogénie est sèche, sans résidu ni odeur, et précise : idéale pour les fentes, les cadres de lit, les plinthes et le mobilier. Comme la vapeur, elle n’a pas d’effet rémanent : le second passage est indispensable.' },
      { q: 'Qu’est-ce que le protocole mixte ?', a: 'Il combine la cryogénie et la vapeur sèche sur la literie et les textiles avec une barrière insecticide très légère, appliquée sur les zones de passage. Elle continue d’agir après le passage et est renouvelée au second passage.' },
      { q: 'Quelle méthode choisir contre les punaises de lit ?', a: 'Pour une infestation limitée, ou avec enfants en bas âge et animaux, la cryogénie et la vapeur sèche permettent de traiter sans produit. Pour une infestation importante, l’insecticide professionnel est le plus radical. Le technicien vous conseille après l’inspection.' },
      { q: 'Comment fonctionne le gel appât contre les cafards et les fourmis ?', a: 'Le gel est déposé en petites gouttes sur les zones de passage. Les insectes le consomment et le rapportent dans leurs cachettes ou au nid, où il touche le reste de la colonie, y compris la reine chez les fourmis.' },
      { q: 'Comment se passe une dératisation ?', a: 'Diagnostic de l’espèce et des points d’entrée, pose de postes d’appâtage sécurisés et verrouillés ou de pièges (mécaniques, connectés, piège Ekomille sans raticide), puis colmatage des accès pour que les rongeurs ne reviennent pas.' },
    ],
  },
  {
    id: 'rongeurs', titre: 'Rats et souris',
    items: [
      { q: 'Comment savoir si j’ai des rats ou des souris ?', a: 'Les crottes de rat mesurent 1 à 2 cm, celles de souris 3 à 6 mm. Une photo nous permet de vous le dire.' },
      { q: 'Par où entrent les souris ?', a: 'Par des ouvertures minuscules : passages de tuyaux, bas de portes, gaines électriques. Un trou de la taille d’un crayon leur suffit.' },
      { q: 'Peut-on dératiser sans mort-aux-rats ?', a: 'Oui, avec des pièges mécaniques ou connectés, ou le piège multicapture Ekomille, toujours associés au colmatage des accès.' },
    ],
  },
  {
    id: 'punaises', titre: 'Punaises de lit',
    items: [
      { q: 'Comment reconnaître des punaises de lit ?', a: 'Piqûres groupées ou en ligne au réveil, petits points noirs dans les coutures du matelas, traces de sang sur les draps. L’adulte mesure 5 à 7 mm, plat et brun-rouge.' },
      { q: 'Faut-il jeter son matelas ?', a: 'En général non : un matelas se traite. Ne le déplacez pas dans une autre pièce avant le traitement, vous étendriez l’infestation.' },
      { q: 'Comment traiter ses vêtements ?', a: 'Lavage à 60 °C, sèche-linge à haute température ou passage au congélateur dans un sac fermé.' },
    ],
  },
  {
    id: 'insectes', titre: 'Cafards, fourmis, puces et acariens',
    items: [
      { q: 'Pourquoi les fourmis reviennent-elles après un spray ?', a: 'Le spray ne tue que les ouvrières visibles. La reine continue de pondre dans le nid. Il faut un appât à action lente qui l’atteint.' },
      { q: 'Les cafards viennent-ils des voisins ?', a: 'En immeuble, souvent : ils passent par les gaines et les bouches d’aération. Un traitement coordonné avec le syndic donne les meilleurs résultats.' },
      { q: 'J’ai des puces mais pas d’animal, pourquoi ?', a: 'Elles peuvent venir d’un ancien occupant avec un animal, de rongeurs ou du jardin. Les cocons peuvent attendre des semaines dans le logement.' },
      { q: 'Les acariens piquent-ils ?', a: 'Non. S’il y a des boutons, cherchez plutôt les punaises de lit ou les puces. Les acariens provoquent surtout des allergies.' },
    ],
  },
  {
    id: 'volants', titre: 'Guêpes, frelons, pigeons et chenilles',
    items: [
      { q: 'Comment reconnaître un frelon asiatique ?', a: 'Il est noir avec un seul anneau orangé sur l’abdomen et le bout des pattes jaune. Le frelon européen est roux et jaune, plus gros.' },
      { q: 'Peut-on boucher l’entrée d’un nid de guêpes ?', a: 'Non : les guêpes chercheraient une autre sortie, parfois vers l’intérieur du logement. Faites traiter le nid.' },
      { q: 'Comment éloigner les pigeons d’un balcon ?', a: 'Avec des pics, un filet ou des répulsifs posés par un professionnel, et en ne les nourrissant jamais.' },
      { q: 'Les chenilles processionnaires sont-elles dangereuses ?', a: 'Leurs poils sont très urticants pour l’homme et surtout pour les chiens. Ne touchez jamais un nid ni une procession.' },
    ],
  },
  {
    id: 'saisons', titre: 'Les nuisibles selon les saisons',
    items: [
      SAISONS_FAQ.deratisation[0], SAISONS_FAQ.souris[0], SAISONS_FAQ.punaises[0], SAISONS_FAQ.cafards[0],
      SAISONS_FAQ.fourmis[0], SAISONS_FAQ.frelons[0], SAISONS_FAQ.chenilles[0], SAISONS_FAQ.acariens[0],
    ],
  },
  {
    id: 'pros', titre: 'Professionnels et copropriétés',
    items: [
      { q: 'Fournissez-vous une attestation ?', a: 'Oui, une attestation d’intervention est remise aux professionnels, utile pour vos contrôles d’hygiène.' },
      { q: 'Proposez-vous des contrats annuels ?', a: 'Oui, pour les restaurants, commerces, copropriétés et bailleurs, sur devis.' },
      { q: 'Intervenez-vous en dehors des heures d’ouverture ?', a: 'Oui, nous adaptons les horaires à votre activité.' },
    ],
  },
]

export const NB_QUESTIONS = FAQ_GENERALE.reduce((n, r) => n + r.items.length, 0)
