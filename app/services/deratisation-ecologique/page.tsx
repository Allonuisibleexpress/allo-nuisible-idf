// Dératisation écologique, sans raticide (12/11/2026, demande de l'utilisateur).
// « Écologique » est toujours défini sur la page : aucun raticide ni poison (pièges mécaniques, piège Ekomille, colmatage).
// Ekomille reste présenté honnêtement : la méthode la plus courante en dératisation reste les postes avec raticide.
// Mot-clé visé : « dératisation écologique / sans raticide » (l'article blog vise « dératisation sans mort-aux-rats »).
import { pageMetadata } from '@/lib/seo'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import ArticleService from '@/components/ArticleService'
import DeratEco from '@/components/DeratEco'
import { ETAPES_DERAT_ECO } from '@/lib/intervention-derat-eco'

const ARTICLE = [
  { h: 'Dératisation écologique : ce que cela veut dire chez nous', p: [
    'Par **dératisation écologique**, nous entendons une dératisation **sans raticide ni poison** : aucun produit toxique n’est déposé chez vous, dans votre jardin ou dans vos caves. Les rats et les souris sont capturés par des **pièges**, et surtout, nous **bouchons leurs accès** pour qu’ils ne reviennent pas.',
    'La méthode la plus courante en dératisation reste les postes d’appâtage avec raticide. Cette page présente notre offre **sans raticide**, pour les familles avec enfants ou animaux, les jardins, les potagers, les écoles et les crèches, et toutes les personnes qui ne veulent pas de poison.',
  ] },
  { h: 'Pourquoi choisir une dératisation sans raticide ?', p: [
    '- **Pas de poison** à portée des enfants, des chiens, des chats ou de la faune du jardin.',
    '- **Pas de rat qui meurt dans une cloison** : avec un raticide, l’animal empoisonné peut mourir dans un mur ou un faux plafond et provoquer une forte odeur pendant des semaines.',
    '- **Pas d’empoisonnement en chaîne** : un rongeur affaibli par le raticide est une proie facile pour une fouine, un chat ou un rapace, qui peut s’empoisonner à son tour.',
    '- **Une solution durable** : le colmatage des accès règle la cause, pas seulement les rongeurs présents.',
  ] },
  { h: 'Le piège Ekomille : capturer les rats sans raticide', p: [
    'Le **piège Ekomille** est un appareil de capture multiple et continue, posé sur le passage le plus fréquenté. Attirés par des appâts alimentaires, les rats basculent dans une cuve où ils meurent ; le cadavre reste dans l’appareil, sans se décomposer. Le rat ne va donc pas mourir dans la rue, dans une cloison ou à portée d’un chien. Il fonctionne aussi contre les souris. Voir notre article [dératisation sans mort-aux-rats](/blog/deratisation-sans-mort-aux-rats).',
  ] },
  { h: 'Pièges mécaniques professionnels', p: [
    'Pour les souris et les petites infestations, nous posons des **pièges mécaniques professionnels** dans des boîtes sécurisées, sur les passages repérés : le long des murs, derrière l’électroménager, dans les combles ou les caves. Ils sont contrôlés et relevés lors de nos passages.',
  ] },
  { h: 'Le colmatage : la base d’une dératisation écologique', p: [
    'Un rat passe par une ouverture à peine plus grande qu’une pièce de monnaie, une souris par un trou encore plus petit. Nous bouchons les passages de canalisations, les bas de portes, les soupiraux et les grilles abîmées avec des matériaux que les rongeurs ne peuvent pas ronger : **grillage métallique fin**, **laine d’acier**, **mortier**. Sans colmatage, d’autres rongeurs reviennent, quel que soit le traitement.',
  ] },
  { h: 'Une dératisation sans raticide est-elle aussi rapide ?', p: [
    'Pour une **petite ou moyenne infestation**, oui, surtout quand le colmatage est bien fait. Pour une **infestation importante**, la capture prend plus de temps qu’un raticide et demande des passages de suivi. Après le diagnostic, nous vous disons honnêtement si une dératisation sans raticide suffit dans votre cas.',
  ] },
  { h: 'Rats et souris : les signes à repérer', p: [
    'Crottes de 3 à 6 mm (souris) ou d’environ 2 cm (surmulot), bruits la nuit dans les cloisons, emballages rongés, traînées sombres au bas des murs : voir notre [guide des rongeurs](/blog/guide-des-rongeurs). Les rongeurs transportent aussi des puces : si vous êtes piqué, voir [nos pages puces](/services/puces).',
  ] },
  { h: 'Dératisation écologique près de chez vous', p: [
    'Nous intervenons 7j/7 en Île-de-France depuis Saint-Maurice : [dératisation à Paris](/deratisation/paris), [dans le Val-de-Marne](/deratisation/val-de-marne), [dans les Hauts-de-Seine](/deratisation/hauts-de-seine), [en Essonne](/deratisation/essonne), [dans les Yvelines](/deratisation/yvelines) et [en Seine-et-Marne](/deratisation/seine-et-marne). Par exemple : [Créteil](/deratisation/creteil), [Saint-Maur-des-Fossés](/deratisation/saint-maur-des-fosses), [Vincennes](/deratisation/vincennes), [Montreuil](/deratisation/montreuil), [Boulogne-Billancourt](/deratisation/boulogne-billancourt). Uniquement des souris ? Voir [souris à Créteil](/souris/creteil) ou [souris dans le Val-de-Marne](/souris/val-de-marne).',
  ] },
]

const data: ServiceData = {
  badge: 'Écologique · Sans raticide · Piège Ekomille · Colmatage · Garantie 1 an',
  devis: 'Devis gratuit dératisation sans raticide',
  heroTitle: 'Dératisation',
  heroHighlight: 'Écologique, sans raticide',
  heroDescription: 'Une dératisation écologique, c’est-à-dire sans raticide ni poison déposé chez vous : inspection, accès rebouchés, puis piège Ekomille, pièges connectés, électriques ou mécaniques et plaques de glu, et fermeture des derniers accès à la fin. Devis gratuit, garantie 1 an.',
  trustBar: ['Sans biocide', 'Sans raticide ni poison', 'Ekomille, pièges connectés et électriques', 'Accès rebouchés', 'Garantie 1 an'],
  benefits: [
    { icon: 'health', title: 'Aucun poison chez vous', text: 'Rien de toxique à portée des enfants, des chiens et des chats, ni dans le jardin ou le potager.' },
    { icon: 'shield', title: 'Pas de rat mort dans les murs', text: 'Avec le piège Ekomille, le rongeur reste dans l’appareil : pas d’odeur de cadavre dans une cloison.' },
    { icon: 'lock', title: 'Les accès bouchés', text: 'Grillage métallique, laine d’acier, mortier : nous fermons les passages, la vraie clé d’une dératisation durable.' },
    { icon: 'search', title: 'Un diagnostic honnête', text: 'Nous vous disons si une dératisation sans raticide suffit dans votre cas, selon l’espèce et l’ampleur.' },
  ],
  process: ETAPES_DERAT_ECO.slice(0, 4).map((e) => ({ title: e.titre, text: e.texte.split(/(?<=[.!?])\s/)[0] })),
  apresProcess: <><DeratEco complet /><ArticleService blocs={ARTICLE} /></>,
  pricing: [
    { label: 'Appartement', price: 'Sur devis', description: 'Souris ou rats, petite surface', features: ['Pièges mécaniques', 'Colmatage des accès', 'Sans raticide', 'Garantie 1 an'] },
    { label: 'Maison et jardin', price: 'Sur devis', description: 'Rats au jardin, caves, combles', features: ['Piège Ekomille', 'Colmatage des accès', 'Suivi jusqu’à la fin', 'Garantie 1 an'], highlight: true },
    { label: 'Établissement', price: 'Sur devis', description: 'École, crèche, restaurant, copropriété', features: ['Plan de lutte sans raticide', 'Registre et attestation', 'Passages programmés', 'Garantie 1 an'], cta: 'Demander un devis' },
  ],
  faq: [
    { q: 'Existe-t-il une dératisation écologique ?', a: 'Oui : lors d’une dératisation, il est possible de ne pas utiliser de biocide. On inspecte le lieu, on rebouche les accès, on installe des dispositifs sans biocide (piège Ekomille, pièges connectés, électriques, mécaniques type tapette, plaques de glu), puis on ferme les derniers accès à la fin de l’intervention.' },
    { q: 'Quels pièges utilisez-vous sans raticide ?', a: 'Le piège Ekomille, des pièges connectés qui signalent les captures, des pièges électriques, des pièges mécaniques type tapette en boîtes sécurisées, et des plaques de glu posées dans des endroits fermés et contrôlés.' },
    { q: 'Le piège Ekomille fonctionne-t-il contre les souris ?', a: 'Oui, il fonctionne contre les rats et contre les souris. Pour les souris, nous utilisons aussi des pièges mécaniques professionnels.' },
    { q: 'Une dératisation sans raticide est-elle efficace ?', a: 'Oui pour les petites et moyennes infestations, surtout avec un bon colmatage. Pour une infestation importante, la capture prend plus de temps et demande un suivi : nous vous le disons après le diagnostic.' },
    { q: 'Pourquoi éviter le raticide avec des animaux ?', a: 'Un chien ou un chat peut consommer un rongeur empoisonné. La faune du jardin (fouines, rapaces) aussi. Sans raticide, ce risque disparaît.' },
    { q: 'Combien coûte une dératisation écologique ?', a: 'Le prix dépend du lieu, de l’espèce et de l’ampleur. Le devis est gratuit et donné avant l’intervention ; garantie 1 an.' },
    { q: 'Faut-il quitter le logement ?', a: 'Non. Les pièges ne diffusent aucun produit ; ils sont placés hors de portée des enfants et des animaux.' },
  ],
  related: {
    villes: { title: 'Dératisation sans raticide : nos départements', links: [['paris', 'Paris'], ['val-de-marne', 'Val-de-Marne (94)'], ['hauts-de-seine', 'Hauts-de-Seine (92)'], ['essonne', 'Essonne (91)'], ['yvelines', 'Yvelines (78)'], ['seine-et-marne', 'Seine-et-Marne (77)']].map(([d, n]) => ({ href: `/deratisation/${d}`, label: `Dératisation : ${n}` })) },
    guides: { title: 'Pour aller plus loin', links: [
      { href: '/services/deratisation', label: 'Dératisation : toutes nos méthodes' },
      { href: '/blog/deratisation-sans-mort-aux-rats', label: 'Dératisation sans mort-aux-rats : méthodes alternatives' },
      { href: '/blog/rat-ou-souris-comment-reconnaitre', label: 'Rat ou souris ? Comment les reconnaître' },
      { href: '/blog/guide-des-rongeurs', label: 'Le guide des rongeurs' },
      { href: '/blog/souris-par-ou-entrent-elles', label: 'Souris : par où entrent-elles ?' },
      { href: '/blog/rat-mode-de-vie', label: 'Le rat : mode de vie et comportement' },
    ] },
  },
  ctaTitle: 'Des rats ou des souris, sans raticide ?\nOn intervient rapidement.',
}

export const metadata = pageMetadata({
  title: 'Dératisation écologique sans raticide ni poison, IDF',
  description: 'Dératisation écologique en Île-de-France : sans raticide ni poison, piège Ekomille, pièges professionnels et colmatage des accès. Devis gratuit, garantie 1 an.',
  path: '/services/deratisation-ecologique',
})

export default function DeratisationEcologiquePage() {
  return <ServicePageTemplate data={data} />
}
