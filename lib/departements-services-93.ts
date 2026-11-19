// Pages « service + département » pour la Seine-Saint-Denis (/deratisation/seine-saint-denis…), 20/11/2026.
// Contenu propre à chaque service. Population et nombre de communes : geo.api.gouv.fr (Insee).
// Pas de chiffre inventé, pas de tiret long, pas de « naturel », « écologique », « sans danger ».
import type { Contenu, ServiceDep } from './departements-services'

export const CONTENU_93: Record<ServiceDep, Contenu> = {
  deratisation: {
    accroche: 'Canal de l’Ourcq, bords de Seine, grands ensembles et zones d’activités : en Seine-Saint-Denis, rats et souris trouvent eau, abris et nourriture.',
    paras: [
      'La Seine-Saint-Denis est traversée par le **canal de l’Ourcq**, le **canal Saint-Denis** et longée par la **Seine**. Le **surmulot** circule par les berges, les réseaux d’eaux pluviales et les égouts jusqu’aux **caves**, **parkings** et **locaux poubelles** des immeubles.',
      'Nous intervenons de **Montreuil** à **Aulnay-sous-Bois**, de **Pantin** à **Épinay-sur-Seine**, chez les particuliers, les bailleurs, les copropriétés, les commerces et les entrepôts, avec la même méthode : diagnostic, dispositifs adaptés et **colmatage des accès**.',
    ],
    points: [
      { t: 'Rats dans les caves d’une résidence du 93', x: 'Caves, vide-ordures et locaux poubelles : postes sécurisés, suivi et rapport pour le bailleur ou le syndic.' },
      { t: 'Rongeurs dans un entrepôt de Seine-Saint-Denis', x: 'Plan de lutte, postes numérotés et attestation pour vos clients et vos contrôles.' },
      { t: 'Souris dans un pavillon du 93', x: 'Vide sanitaire, garage, combles : nous trouvons chaque entrée avant de traiter, puis nous rebouchons.' },
    ],
    faq: [
      { q: 'Intervenez-vous partout en Seine-Saint-Denis ?', a: 'Oui, dans toutes les communes du département, 7j/7, sans majoration la nuit, le week-end ni les jours fériés.' },
      { q: 'Les rats viennent-ils du canal de l’Ourcq ?', a: 'Le surmulot vit volontiers près de l’eau et circule par les réseaux. Les immeubles proches des canaux et de la Seine sont plus exposés : contrôler caves et regards est essentiel.' },
      { q: 'Combien coûte une dératisation dans le 93 ?', a: 'Dès 120 € TTC pour un appartement. Maison, local professionnel ou résidence : devis gratuit après diagnostic.' },
    ],
  },
  punaises: {
    accroche: 'Grands ensembles, foyers, pavillons et meubles qui changent de main : en Seine-Saint-Denis, les punaises de lit circulent vite d’un logement à l’autre.',
    paras: [
      'Les punaises de lit voyagent dans les **valises**, les **meubles d’occasion** et les **vêtements**. Dans les **grands ensembles** et les **foyers** de Seine-Saint-Denis, elles passent aussi d’un logement à l’autre par les **gaines** et les **plinthes** : un traitement coordonné avec le bailleur donne les meilleurs résultats.',
      'Nous traitons en **2 passages** à la **cryogénie**, à la **vapeur sèche** ou à l’**insecticide professionnel**, à **Montreuil**, **Pantin**, **Bagnolet**, **Bobigny**, **Aulnay-sous-Bois** et dans tout le département.',
    ],
    points: [
      { t: 'Punaises de lit dans un logement social du 93', x: 'Signalement au bailleur, traitement coordonné de plusieurs logements, rapport écrit.' },
      { t: 'Punaises après l’achat d’un meuble d’occasion', x: 'Inspection du meuble et de la chambre, traitement sans produit possible à la cryogénie.' },
      { t: 'Foyer ou résidence en Seine-Saint-Denis', x: 'Plusieurs chambres traitées le même jour, avec un planning pour le second passage.' },
    ],
    faq: [
      { q: 'Intervenez-vous dans tout le 93 ?', a: 'Oui, dans toutes les communes de Seine-Saint-Denis, 7j/7, au même prix partout.' },
      { q: 'Qui paie le traitement dans un logement social ?', a: 'Signalez les punaises par écrit au bailleur, avec photos. Il organise souvent le traitement, surtout quand plusieurs logements sont touchés. L’ADIL du département peut vous renseigner.' },
      { q: 'Combien coûte un traitement des punaises de lit ?', a: 'Dès 290 € TTC pour un studio ou un T1, 2 passages et garantie 1 an compris. Devis gratuit.' },
    ],
  },
  frelons: {
    accroche: 'Parcs départementaux, forêts et jardins pavillonnaires : en Seine-Saint-Denis, les nids de frelons asiatiques se cachent dans les arbres et sous les toits.',
    paras: [
      'Le département compte de grands espaces verts, comme le **parc de la Courneuve Georges-Valbon**, le **parc du Sausset** ou la **forêt de Bondy**, et de nombreux **quartiers pavillonnaires**. Le **frelon asiatique** y construit ses nids en hauteur, dans les arbres, les haies et sous les toitures.',
      'Nous détruisons les nids avec une **perche télescopique jusqu’à 23 m**, sans nacelle dans la plupart des cas. Les nids de **guêpes** dans les murs, les volets ou le sol sont traités de la même façon.',
    ],
    points: [
      { t: 'Nid de frelons dans un arbre du 93', x: 'Destruction à la perche depuis le sol, retrait du nid quand c’est possible.' },
      { t: 'Guêpes sous une toiture de pavillon', x: 'Traitement de l’entrée du nid, sans démonter la toiture.' },
      { t: 'Nid dans une cour d’école ou une résidence', x: 'Intervention rapide, sécurisation de la zone, attestation pour l’établissement ou le syndic.' },
    ],
    faq: [
      { q: 'Intervenez-vous vite en Seine-Saint-Denis ?', a: 'Oui, en général dans l’heure pour un nid de frelons, 7j/7, sans majoration la nuit ni le week-end.' },
      { q: 'Combien coûte la destruction d’un nid ?', a: '89 €, 149 € ou 199 € TTC selon la hauteur et l’accès. Garantie 3 mois.' },
      { q: 'Faut-il une nacelle pour un nid en haut d’un arbre ?', a: 'Rarement : notre perche atteint 23 m. La nacelle n’est nécessaire que pour quelques cas très hauts ou inaccessibles.' },
    ],
  },
  cafards: {
    accroche: 'Tours avec vide-ordures, commerces de bouche et entrepôts : en Seine-Saint-Denis, les cafards circulent par les gaines et les marchandises.',
    paras: [
      'Dans les **grands ensembles**, les blattes germaniques passent d’un logement à l’autre par les **vide-ordures**, les **colonnes d’eau** et les **gaines techniques**. Dans les **commerces** et les **entrepôts**, elles arrivent avec les cartons et les livraisons.',
      'Nous traitons en **2 passages** avec **gel appât professionnel**, **insecticide ciblé**, **vapeur sèche** ou **cryogénie**, à **Montreuil**, **Pantin**, **Bobigny**, **Aulnay-sous-Bois**, **Les Lilas** et dans tout le département.',
    ],
    points: [
      { t: 'Cafards dans une tour du 93', x: 'Traitement des logements touchés, des gaines et du local vide-ordures, en lien avec le bailleur.' },
      { t: 'Blattes dans un restaurant de Seine-Saint-Denis', x: 'Intervention hors service, attestation pour les contrôles d’hygiène, suivi régulier.' },
      { t: 'Cafards dans un entrepôt', x: 'Traitement des zones de stockage et des quais, sans arrêter l’activité.' },
    ],
    faq: [
      { q: 'Intervenez-vous dans tout le 93 ?', a: 'Oui, dans toutes les communes de Seine-Saint-Denis, 7j/7.' },
      { q: 'Pourquoi faut-il 2 passages ?', a: 'Les oothèques, cocons d’œufs des cafards, résistent aux traitements. Le second passage élimine les jeunes éclos entre-temps.' },
      { q: 'Combien coûte un traitement contre les cafards ?', a: 'Dès 120 € TTC pour un petit logement, 2 passages compris. Devis gratuit.' },
    ],
  },
  puces: {
    accroche: 'Chats, chiens, parquets anciens et logements qui changent d’occupants : en Seine-Saint-Denis, les puces s’installent vite dans les tapis et les fentes.',
    paras: [
      'Les puces viennent presque toujours d’un **animal**, chez vous ou chez l’ancien occupant. Les larves se cachent dans les **tapis**, les **canapés** et les **fentes des parquets**, et les cocons peuvent éclore des semaines après un déménagement.',
      'Nous traitons le logement le jour où votre animal est traité par le **vétérinaire** : sols, plinthes, fentes et textiles, avec les conseils pour les jours suivants. Partout en Seine-Saint-Denis.',
    ],
    points: [
      { t: 'Puces après un emménagement dans le 93', x: 'Les cocons éclosent avec les vibrations : un traitement du logement règle le problème.' },
      { t: 'Puces avec un chat ou un chien', x: 'Traitement coordonné avec le vétérinaire, conseils d’aspiration et de lavage.' },
      { t: 'Puces dans un pavillon avec jardin', x: 'Traitement des pièces de vie et des couchages, conseils pour le jardin.' },
    ],
    faq: [
      { q: 'Intervenez-vous dans tout le 93 ?', a: 'Oui, dans toutes les communes de Seine-Saint-Denis, au même prix.' },
      { q: 'Faut-il traiter l’animal en même temps ?', a: 'Oui, c’est indispensable : sinon il réinfeste le logement. Le vétérinaire traite l’animal, nous traitons la maison.' },
      { q: 'Combien coûte un traitement contre les puces ?', a: 'Dès 120 € TTC pour un appartement. Devis gratuit, garantie 1 an.' },
    ],
  },
  souris: {
    accroche: 'Caves, pavillons anciens, commerces et entrepôts : en Seine-Saint-Denis, les souris passent par des trous de la taille d’un stylo.',
    paras: [
      'La **souris domestique** entre dans les maisons et les immeubles par les **joints de murs**, les **passages de tuyaux** et les **gaines**. À l’automne, elle cherche la chaleur et s’installe dans les **cloisons**, les **faux plafonds** et les **cuisines**.',
      'Nous posons des **pièges mécaniques** ou des **postes sécurisés**, puis nous **colmatons les accès**. Pour les commerces et entrepôts, nous remettons une **attestation** et proposons un suivi régulier, partout en Seine-Saint-Denis.',
    ],
    points: [
      { t: 'Souris dans un pavillon du 93', x: 'Recherche des accès (vide sanitaire, garage, combles), traitement et colmatage.' },
      { t: 'Souris dans un commerce de Seine-Saint-Denis', x: 'Postes sécurisés, suivi et attestation pour vos contrôles d’hygiène.' },
      { t: 'Souris dans les cloisons d’un appartement', x: 'Repérage des passages par les gaines et traitement ciblé, sans casser les murs.' },
    ],
    faq: [
      { q: 'Intervenez-vous dans tout le 93 ?', a: 'Oui, dans toutes les communes de Seine-Saint-Denis, 7j/7.' },
      { q: 'Utilisez-vous du poison ?', a: 'Selon le lieu : pièges mécaniques ou postes sécurisés et verrouillés, hors de portée des enfants et des animaux. La méthode est choisie avec vous.' },
      { q: 'Combien coûte le traitement ?', a: 'Dès 120 € TTC pour un appartement, sur devis pour une maison ou un local professionnel.' },
    ],
  },
}
