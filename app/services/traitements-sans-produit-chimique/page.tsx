// Page centrale « Nos traitements écologiques, sans produit chimique » (13/11/2026, demande de l'utilisateur), onglet « Écologique » du menu.
// Regroupe uniquement les offres réellement sans biocide : punaises de lit (cryogénie, vapeur, chambre froide),
// dératisation sans raticide, chenilles (retrait des nids, écopièges), acariens (vapeur, cryogénie), pigeons (pics, filets).
// « Écologique » est toujours défini : aucun biocide déposé chez le client. Honnête sur les nuisibles qui demandent un produit.
// Mot-clé visé : « traitement écologique des nuisibles / sans produit chimique » (chaque page écologique garde son propre mot-clé).
// 13/11/2026 : page enrichie (audit : 1 344 mots contre 7 477 chez Express). Sources : ARS Île-de-France (page du 10/11/2026), Ameli.
import { pageMetadata } from '@/lib/seo'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import ArticleService from '@/components/ArticleService'
import ChoixEcologique from '@/components/ChoixEcologique'

const ARTICLE = [
  { h: 'Traitement écologique des nuisibles : notre définition', p: [
    'Chez Allo Nuisible IDF, un traitement **écologique** est un traitement **sans biocide** : aucun insecticide, raticide ou autre produit chimique n’est déposé chez vous. Les nuisibles sont éliminés par la **température** (froid ou chaleur), capturés par des **pièges**, ou tenus à distance par des **barrières physiques**, et nous fermons leurs accès.',
    'Le mot a ici un sens précis et vérifiable. Il ne veut pas dire que la méthode n’a aucun impact : la cryogénie utilise du dioxyde de carbone en bouteille, la vapeur sèche de l’électricité, et nos techniciens se déplacent. Il veut dire une chose simple : **rien ne reste chez vous** après notre passage, ni sur le matelas, ni dans les placards, ni sur les plinthes.',
    'Nos techniciens sont **certifiés Certibiocide**. Ils connaissent aussi les produits, et c’est justement ce qui nous permet d’être honnêtes : nous vous disons quand une méthode sans produit suffit, et quand elle ne suffit pas.',
    'Ce n’est pas possible pour tous les nuisibles ni pour toutes les infestations. Cette page présente les cas où nous savons le faire, et ceux où un produit reste nécessaire.',
  ] },
  { h: 'Pourquoi choisir un traitement écologique, sans produit chimique ?', p: [
    '### Parce que vous ne voulez aucun produit chez vous',
    'Un bébé qui joue par terre, des enfants, un chat ou un chien, une personne âgée ou fragile, une cuisine, un lit dans lequel vous dormez le soir même : beaucoup de familles nous appellent avec une seule demande, **pas de produit**. Avec le froid, la chaleur et les pièges, c’est possible pour les nuisibles présentés ci-dessous.',
    '### Parce que c’est souvent la méthode la plus efficace contre les punaises de lit',
    'L’**ARS Île-de-France** rappelle que les punaises de lit sont devenues **très résistantes à de nombreux insecticides**, d’après les travaux menés notamment par l’hôpital Avicenne. C’est pourquoi les autorités sanitaires **privilégient aujourd’hui les traitements mécaniques et thermiques**, comme la vapeur sèche et le froid. Le traitement écologique n’est donc pas un choix « au rabais » : pour les punaises, c’est la méthode de référence.',
    '### Parce que le logement reste utilisable',
    'Pas de produit qui doit sécher, pas d’odeur, pas de pièce condamnée : vous pouvez rester chez vous pendant le traitement et réutiliser les pièces dès la fin du passage. Après une cryogénie, il suffit d’**aérer** pour évacuer le dioxyde de carbone.',
    '### Parce que certains lieux l’exigent',
    'Crèches, écoles, foyers, établissements de santé, hôtels, restaurants : dans ces lieux, on évite autant que possible les produits. Nous avons par exemple traité en urgence un **foyer pour enfants** par cryogénie, chambre par chambre, sans aucun biocide : voir le [récit de cette intervention](/blog/cryogenie-punaises-de-lit-foyer-enfants).',
  ] },
  { h: 'Nos 6 méthodes de traitement écologique', p: [
    'Selon le nuisible et l’ampleur de l’infestation, nos techniciens combinent une ou plusieurs de ces méthodes. Aucune ne dépose de produit chez vous.',
    '### 1. Le froid : cryogénie à −78 °C et chambre froide à −20 °C',
    'La **cryogénie** projette de la **neige carbonique** à environ **−78 °C**. Le choc thermique tue les punaises de lit et leurs œufs **au contact**. Elle est **sèche** (rien ne mouille) et **précise** : idéale pour les lattes du sommier, les fentes, les cadres de lit, les meubles et les zones proches des prises. Pour les objets qui ne se lavent pas (chaussures, sacs, livres, peluches), nous utilisons notre **chambre froide à −20 °C**, pendant au moins 72 heures. Tout le détail, avec nos vidéos de chantier : [traitement écologique des punaises de lit par cryogénie](/services/cryogenie-punaises-de-lit).',
    '### 2. La chaleur : vapeur sèche à plus de 120 °C',
    'La **vapeur sèche** traite le matelas, les canapés, les rideaux et les textiles. L’ARS Île-de-France cite le nettoyage à la vapeur sèche à **plus de 120 °C**, capable de détruire les punaises et leurs œufs, parmi les méthodes de référence, avec le lavage du linge à **60 °C minimum** et le sèche-linge. Voir [vapeur sèche et punaises de lit : efficacité et limites](/blog/vapeur-seche-punaises-de-lit).',
    '### 3. Les pièges : rongeurs capturés sans poison',
    'Contre les rats et les souris : le **piège Ekomille**, qui capture plusieurs rongeurs à la suite dans une cuve fermée, les **pièges connectés**, qui envoient une alerte à chaque capture, les **pièges électriques**, les **tapettes en boîtes sécurisées** et les plaques de glu. Le rongeur ne va pas mourir dans une cloison, et aucun appât empoisonné n’est laissé à portée d’un enfant ou d’un animal. Voir la [dératisation écologique, sans raticide](/services/deratisation-ecologique).',
    '### 4. Les barrières physiques : fermer la porte aux nuisibles',
    'Un nuisible qui ne peut plus entrer ne revient pas. Nous **rebouchons les accès** des rongeurs (trous, passages de canalisations, aérations), posons un **clapet anti-retour** quand un rat remonte par les toilettes, un **chapeau grillagé** sur une cheminée, et, contre les pigeons, des **pics anti-pose en inox**, des **filets sur mesure** ou des **dispositifs électriques** discrets.',
    '### 5. Le retrait mécanique : nids et chenilles',
    'Contre les chenilles processionnaires, les **nids sont retirés et détruits** par nos techniciens équipés contre les poils urticants, et des **écopièges** posés autour du tronc capturent les chenilles quand elles descendent. Des **pièges à phéromones** complètent la surveillance. L’**aspiration soigneuse** du matelas, du sommier et des plinthes fait aussi partie de la lutte mécanique contre les punaises de lit recommandée par l’ARS.',
    '### 6. La détection sans produit : savoir où traiter',
    'Un traitement écologique est d’autant plus efficace qu’il vise **juste**. Nos techniciens commencent toujours par une **inspection minutieuse** : sommier latte par latte, coutures du matelas, plinthes, prises. Vous pouvez aussi nous envoyer une photo depuis la page [identifier un nuisible](/identifier-nuisible). Pour les punaises de lit cachées, nous proposons aussi la **détection canine**, sur devis : un chien dressé les repère à l’odeur, sans aucun produit. Voir notre guide [détection canine des punaises de lit, fiabilité et limites](/blog/detection-canine-punaises-de-lit).',
  ] },
  { h: 'Nuisible par nuisible : nos traitements écologiques', p: [
    '### Punaises de lit : cryogénie, vapeur sèche et chambre froide',
    'C’est notre traitement écologique le plus demandé. Après l’inspection, la cryogénie traite le lit et les meubles, la vapeur sèche les textiles, et la chambre froide les objets fragiles. **Deux passages sont inclus**, car les œufs éclosent après le premier : le second élimine les jeunes punaises. **Dès 290 €** pour un studio, garantie 1 an. Voir notre page [traitement des punaises de lit](/services/punaises-de-lit) pour comparer avec le traitement insecticide.',
    '### Rats et souris : dératisation sans raticide',
    'Inspection, **rebouchage des accès**, pose des pièges sur les passages, contrôles, puis fermeture des derniers trous à la fin. C’est la méthode que nous proposons pour une maison avec jardin, une cave, des combles ou un établissement qui ne veut pas de poison. Le devis est gratuit et donné avant l’intervention. Voir la [dératisation écologique](/services/deratisation-ecologique) et notre article [dératisation sans mort-aux-rats](/blog/deratisation-sans-mort-aux-rats).',
    '### Chenilles processionnaires : retrait des nids et écopièges',
    'Retrait et destruction des nids, écopièges autour des troncs, pièges à phéromones et calendrier de surveillance. **Dès 89 €** pour un nid accessible, **dès 149 €** pour un nid en hauteur à la perche télescopique. Voir [chenilles processionnaires](/services/chenilles-processionnaires).',
    '### Acariens : vapeur sèche et cryogénie',
    'Matelas, oreillers, canapés, tapis et rideaux sont traités par **vapeur sèche** ou par **cryogénie**, sans produit. Une pulvérisation acaricide reste possible si vous la choisissez. Pour limiter leur retour, Ameli conseille d’**aérer au moins 10 minutes par jour**, de garder **moins de 20 °C** dans les pièces de vie et une **humidité entre 40 % et 60 %**. **Dès 120 €**. Voir [traitement des acariens](/services/acariens).',
    '### Pigeons : pics, filets et dispositifs électriques',
    'Contre les pigeons, aucun produit : des **pics anti-pose en inox**, des **filets sur mesure** et des **dispositifs électriques** discrets empêchent les oiseaux de se poser et de nicher sur un balcon, un rebord ou une façade. **Dès 150 €** pour un balcon ou un rebord. Voir [dépigeonnage](/services/pigeons).',
  ] },
  { h: 'Comment se déroule un traitement écologique chez vous', p: [
    '- **Le premier contact** : vous nous appelez ou nous envoyez une photo. Nous identifions le nuisible et vous disons tout de suite si une méthode sans produit est envisageable.',
    '- **L’inspection** : le technicien se déplace, cherche les foyers et les accès, et mesure l’ampleur de l’infestation.',
    '- **Le devis gratuit** : la méthode, le nombre de passages et le prix, avant toute intervention. Si un traitement sans produit ne suffit pas dans votre cas, nous vous le disons.',
    '- **Le traitement** : froid, chaleur, pièges ou barrières, pièce par pièce, sans rien déposer.',
    '- **Le contrôle** : deuxième passage pour les punaises de lit, relevé des pièges pour les rongeurs, jusqu’à disparition des signes.',
    '- **La garantie** : nos traitements sont garantis 1 an.',
  ] },
  { h: 'Préparer son logement avant un traitement sans produit', p: [
    '### Pour les punaises de lit',
    '- Lavez le linge de lit, les vêtements et les textiles à **60 °C minimum**, ou passez-les au sèche-linge, puis rangez-les dans des **sacs fermés**.',
    '- **Désencombrez** autour du lit : moins de cachettes, c’est un traitement plus efficace. L’ARS recommande aussi de réparer les fissures et les plinthes décollées.',
    '- **Ne déplacez pas** les meubles ni les affaires d’une pièce infestée vers une autre pièce ou chez quelqu’un.',
    '- **N’utilisez ni insecticide du commerce ni fumigène** : l’ARS Île-de-France les déconseille, car ils dispersent les punaises vers d’autres pièces.',
    '### Pour les rats et les souris',
    '- Rangez la nourriture, les croquettes et les graines dans des **boîtes fermées**, sortez les poubelles chaque soir.',
    '- Notez les endroits où vous avez vu des **crottes**, entendu des **bruits** ou trouvé des **trous** : le technicien gagnera du temps.',
    '- Ne bouchez pas un trou avant notre passage si un rongeur est peut-être encore à l’intérieur.',
  ] },
  { h: 'Particuliers, bailleurs et établissements', p: [
    'Nous intervenons chez les **particuliers**, pour les **bailleurs et syndics**, et dans les **établissements** qui accueillent du public : crèches, écoles, foyers, EHPAD, hôtels, restaurants, copropriétés. Pour eux, nous adaptons le **planning** (le soir, entre deux séjours, pendant les vacances), nous fournissons un **compte rendu** et, pour la dératisation, un registre et une attestation.',
    'En location, l’ARS Île-de-France rappelle que la **loi Élan** prévoit qu’un logement mis en location doit être exempt d’infestation de nuisibles à l’entrée dans les lieux. Voir notre page [professionnels](/professionnels).',
  ] },
  { h: 'Les fausses bonnes idées à éviter', p: [
    '- **Les insecticides interdits** : l’ARS, l’ANSES et les centres antipoison alertent sur les produits à base de **dichlorvos**, interdits à la vente depuis 2013 mais encore vendus de manière clandestine (SNIPER 1000, SHOOTER 1000 EC DDVP). Ils provoquent des intoxications graves : ne les utilisez jamais.',
    '- **Les fumigènes et « bombes » insecticides** : ils atteignent mal les cachettes des punaises et exposent les occupants aux produits.',
    '- **Les insecticides du commerce contre les punaises** : les punaises y sont devenues résistantes. Voir [pourquoi l’insecticide doit être professionnel](/blog/insecticide-punaises-de-lit).',
    '- **Les appareils à ultrasons contre les rongeurs** : leur efficacité dans la durée n’est pas démontrée. Ils ne remplacent ni le colmatage des accès ni un vrai traitement.',
  ] },
  { h: 'Et les autres nuisibles ?', p: [
    'Pour les **cafards**, les **fourmis**, les **puces**, les **guêpes** et les **frelons**, un traitement efficace demande en général un produit biocide, appliqué par nos techniciens certifiés Certibiocide, de façon ciblée. Nous vous expliquons toujours au devis ce qui sera utilisé et où. Voir [cafards](/services/cafards-blattes), [fourmis](/services/fourmis), [puces](/services/puces) et [guêpes et frelons](/services/guepes-frelons).',
  ] },
  { h: 'Un traitement sans produit est-il toujours suffisant ?', p: [
    'Pour une infestation **localisée ou moyenne**, oui dans la plupart des cas, à condition de respecter le protocole (deux passages pour les punaises, colmatage pour les rongeurs). Pour une infestation **très importante**, nous vous disons honnêtement après le diagnostic si une méthode sans produit suffit ou s’il vaut mieux un traitement classique, ou une combinaison des deux.',
  ] },
]

const data: ServiceData = {
  badge: 'Sans biocide · Froid, chaleur, pièges · Garantie 1 an',
  devis: 'Devis gratuit traitement écologique',
  heroTitle: 'Nos traitements écologiques',
  heroHighlight: 'Sans produit chimique',
  heroDescription: 'Punaises de lit, rats et souris, chenilles processionnaires, acariens, pigeons : quand c’est possible, nous traitons sans aucun biocide, par le froid, la chaleur, des pièges ou des barrières physiques. Devis gratuit, garantie 1 an, toute l’Île-de-France.',
  trustBar: ['Aucun biocide déposé', 'Cryogénie et vapeur sèche', 'Pièges sans raticide', 'Techniciens certifiés', 'Garantie 1 an'],
  titres: {
    benefits: 'Pourquoi un traitement écologique ?',
    process: 'Un traitement écologique en 4 étapes',
    pricing: 'Prix de nos traitements écologiques',
    faq: 'Traitement écologique : vos questions',
  },
  benefits: [
    { icon: 'health', title: 'Rien ne reste chez vous', text: 'Ni insecticide ni raticide : idéal avec un bébé, des enfants, des animaux ou des personnes fragiles.' },
    { icon: 'thermo', title: 'Le froid et la chaleur', text: 'Cryogénie à environ −78 °C, vapeur sèche et chambre froide à −20 °C contre les punaises de lit et les acariens.' },
    { icon: 'lock', title: 'Pièges et accès fermés', text: 'Contre les rongeurs : piège Ekomille, pièges connectés et électriques, et colmatage des passages.' },
    { icon: 'search', title: 'Un diagnostic honnête', text: 'Nous vous disons si une méthode sans produit suffit dans votre cas, selon le nuisible et l’ampleur.' },
  ],
  process: [
    { title: 'Diagnostic', text: 'Identification du nuisible et de l’ampleur, pour savoir si une méthode sans produit convient.' },
    { title: 'Devis', text: 'La méthode, le nombre de passages et le prix, avant toute intervention.' },
    { title: 'Traitement sans biocide', text: 'Froid, chaleur, pièges ou barrières physiques, selon le nuisible.' },
    { title: 'Suivi et garantie', text: 'Passages de contrôle si besoin, garantie 1 an.' },
  ],
  tableau: {
    titre: 'Nuisible par nuisible : la méthode écologique',
    head: ['Nuisible', 'Méthode sans biocide', 'Page dédiée'],
    rows: [
      ['Punaises de lit', 'Cryogénie, vapeur sèche, chambre froide −20 °C', 'Traitement écologique par cryogénie'],
      ['Rats et souris', 'Ekomille, pièges connectés, électriques, tapettes, accès rebouchés', 'Dératisation écologique'],
      ['Chenilles processionnaires', 'Retrait des nids, écopièges, pièges à phéromones', 'Chenilles processionnaires'],
      ['Acariens', 'Vapeur sèche, cryogénie', 'Traitement des acariens'],
      ['Pigeons', 'Pics inox, filets, dispositifs électriques', 'Dépigeonnage'],
    ],
  },
  apresHero: <ChoixEcologique />,
  apresProcess: <ArticleService blocs={ARTICLE} />,
  pricing: [
    { label: 'Punaises de lit', price: '290', description: 'Studio, traitement écologique', features: ['Cryogénie et vapeur sèche', '2 passages inclus', 'Aucun produit chimique', 'Garantie 1 an'], highlight: true },
    { label: 'Rats et souris', price: 'Sur devis', description: 'Dératisation sans raticide', features: ['Inspection et colmatage', 'Pièges sans poison', 'Suivi des captures', 'Garantie 1 an'] },
    { label: 'Établissement', price: 'Sur devis', description: 'Crèche, école, hôtel, EHPAD, restaurant', features: ['Plan sans biocide', 'Planning adapté', 'Compte rendu', 'Garantie 1 an'], cta: 'Demander un devis' },
  ],
  faq: [
    { q: 'Que veut dire « traitement écologique » chez vous ?', a: 'Un traitement sans biocide : aucun insecticide, raticide ou autre produit chimique n’est déposé chez vous. Les nuisibles sont éliminés par le froid, la chaleur, des pièges ou des barrières physiques.' },
    { q: 'Quels nuisibles pouvez-vous traiter sans produit ?', a: 'Les punaises de lit (cryogénie, vapeur sèche, chambre froide), les rats et souris (pièges sans raticide et colmatage), les chenilles processionnaires (retrait des nids, écopièges), les acariens (vapeur, cryogénie) et les pigeons (pics, filets).' },
    { q: 'Le traitement écologique est-il aussi efficace qu’un insecticide ?', a: 'Pour les punaises de lit, les autorités sanitaires privilégient même la chaleur et le froid, car les punaises résistent à de nombreux insecticides. Pour les rongeurs, pièges et colmatage donnent de bons résultats. Pour une infestation très importante, nous vous disons après le diagnostic si un produit est préférable.' },
    { q: 'Est-ce adapté avec un bébé, des enfants ou des animaux ?', a: 'Oui, c’est même la raison principale de nos clients : aucun produit n’est déposé. Après une cryogénie, il suffit d’aérer pour évacuer le dioxyde de carbone.' },
    { q: 'Pourquoi pas pour les cafards ou les fourmis ?', a: 'Pour ces insectes, un traitement efficace demande en général un produit biocide, appliqué de façon ciblée par nos techniciens certifiés. Nous vous expliquons au devis ce qui sera utilisé.' },
    { q: 'Un traitement sans produit est-il efficace ?', a: 'Oui pour les infestations localisées et moyennes, avec le bon protocole. Pour une infestation très importante, nous vous disons après le diagnostic si une méthode sans produit suffit.' },
    { q: 'Combien coûte un traitement sans produit chimique ?', a: 'Le traitement écologique des punaises de lit commence à 290 € pour un studio, 2 passages inclus. Chenilles dès 89 €, acariens dès 120 €, pigeons dès 150 €. Pour les rongeurs, le devis est gratuit et donné avant l’intervention. Garantie 1 an.' },
    { q: 'Faut-il quitter le logement ?', a: 'Non. Aucun produit n’est diffusé : vous pouvez rester chez vous et réutiliser les pièces dès la fin du passage.' },
    { q: 'Que faire en attendant l’intervention ?', a: 'Pour les punaises de lit : lavez les textiles à 60 °C minimum ou passez-les au sèche-linge, aspirez le matelas et le sommier, et n’utilisez ni insecticide du commerce ni fumigène. Pour les rongeurs : rangez la nourriture dans des boîtes fermées et notez les endroits où vous voyez des traces.' },
    { q: 'La détection canine est-elle une méthode écologique ?', a: 'Oui, le chien ne dépose aucun produit. Nous la proposons, sur devis. Mais c’est un diagnostic, pas un traitement : il localise les punaises de lit, et chaque signalement se confirme à l’œil avant de traiter.' },
    { q: 'Les ultrasons sont-ils une solution écologique contre les rats ?', a: 'Leur efficacité dans la durée n’est pas démontrée. Ils ne remplacent ni le colmatage des accès ni un vrai traitement par pièges.' },
    { q: 'Le traitement écologique est-il garanti ?', a: 'Oui, nos traitements sont garantis 1 an. Si les nuisibles reviennent dans ce délai, nous revenons.' },
    { q: 'Intervenez-vous dans toute l’Île-de-France ?', a: 'Oui, 7j/7, à Paris, dans le Val-de-Marne, les Hauts-de-Seine, l’Essonne, les Yvelines et la Seine-et-Marne. Notre base est à Saint-Maurice (94).' },
  ],
  related: {
    guides: { title: 'Nos pages et guides écologiques', links: [
      { href: '/services/cryogenie-punaises-de-lit', label: 'Punaises de lit : traitement écologique par cryogénie' },
      { href: '/services/deratisation-ecologique', label: 'Dératisation écologique sans raticide' },
      { href: '/blog/detection-canine-punaises-de-lit', label: 'Détection canine des punaises de lit : fiabilité et limites' },
      { href: '/blog/punaises-de-lit-sans-insecticide', label: 'Punaises de lit sans insecticide : les méthodes qui marchent' },
      { href: '/blog/vapeur-seche-punaises-de-lit', label: 'Vapeur sèche et punaises de lit' },
      { href: '/blog/deratisation-sans-mort-aux-rats', label: 'Dératisation sans mort-aux-rats' },
      { href: '/services/chenilles-processionnaires', label: 'Chenilles processionnaires' },
      { href: '/services/acariens', label: 'Traitement des acariens' },
      { href: '/services/pigeons', label: 'Dépigeonnage' },
    ] },
  },
  ctaTitle: 'Un nuisible, sans produit chimique ?\nOn vous dit si c’est possible.',
}

export const metadata = pageMetadata({
  title: 'Traitement écologique des nuisibles, sans produit chimique',
  description: 'Traitement écologique des nuisibles en Île-de-France : punaises de lit, rats, chenilles, acariens, pigeons. Froid, chaleur, pièges, sans biocide. Devis gratuit.',
  path: '/services/traitements-sans-produit-chimique',
})

export default function TraitementsSansProduitPage() {
  return <ServicePageTemplate data={data} />
}
