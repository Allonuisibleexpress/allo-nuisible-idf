// Page centrale « Nos traitements sans produit chimique » (13/11/2026, demande de l'utilisateur).
// Regroupe uniquement les offres réellement sans biocide : punaises de lit (cryogénie, vapeur, chambre froide),
// dératisation sans raticide, chenilles (retrait des nids, écopièges), acariens (vapeur, cryogénie), pigeons (pics, filets).
// « Écologique » est toujours défini : aucun biocide déposé chez le client. Honnête sur les nuisibles qui demandent un produit.
// Mot-clé visé : « traitement nuisibles sans produit chimique » (chaque page écologique garde son propre mot-clé).
import { pageMetadata } from '@/lib/seo'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import ArticleService from '@/components/ArticleService'

const ARTICLE = [
  { h: 'Traitement écologique des nuisibles : notre définition', p: [
    'Chez Allo Nuisible IDF, un traitement **écologique** est un traitement **sans biocide** : aucun insecticide, raticide ou autre produit chimique n’est déposé chez vous. Les nuisibles sont éliminés par la **température** (froid ou chaleur), capturés par des **pièges**, ou tenus à distance par des **barrières physiques**, et nous fermons leurs accès.',
    'Ce n’est pas possible pour tous les nuisibles ni pour toutes les infestations. Cette page présente les cas où nous savons le faire, et ceux où un produit reste nécessaire.',
  ] },
  { h: 'Punaises de lit : cryogénie, vapeur sèche et chambre froide', p: [
    'La **cryogénie** projette de la neige carbonique à environ **−78 °C** sur le sommier, les fentes et le mobilier ; la **vapeur sèche** traite le matelas, les canapés et les rideaux ; notre **chambre froide à −20 °C** reçoit les objets qui ne se lavent pas. Deux passages sont inclus, dès 290 €. Voir notre page [traitement écologique des punaises de lit par cryogénie](/services/cryogenie-punaises-de-lit), avec nos chantiers en vidéo.',
  ] },
  { h: 'Dératisation sans raticide : pièges et accès rebouchés', p: [
    'Inspection, **rebouchage des accès**, puis **piège Ekomille**, pièges connectés, pièges électriques, tapettes en boîtes sécurisées ou plaques de glu, et fermeture des derniers passages à la fin. Aucun poison chez vous, et pas de rongeur qui meurt dans une cloison. Voir la [dératisation écologique sans raticide](/services/deratisation-ecologique).',
  ] },
  { h: 'Chenilles processionnaires : retrait des nids et écopièges', p: [
    'Les nids sont **retirés et détruits** par nos techniciens équipés contre les poils urticants, et des **écopièges** posés autour du tronc capturent les chenilles quand elles descendent en procession. Voir [chenilles processionnaires](/services/chenilles-processionnaires).',
  ] },
  { h: 'Acariens : vapeur sèche et cryogénie', p: [
    'Matelas, oreillers, canapés, tapis et rideaux peuvent être traités par **vapeur sèche** ou par **cryogénie**, sans produit. Une pulvérisation acaricide reste possible si vous la choisissez. Voir [traitement des acariens](/services/acariens).',
  ] },
  { h: 'Pigeons : pics, filets et dispositifs électriques', p: [
    'Contre les pigeons, aucun produit : des **pics anti-pose en inox**, des **filets sur mesure** et des **dispositifs électriques** discrets empêchent les oiseaux de se poser et de nicher. Voir [dépigeonnage](/services/pigeons).',
  ] },
  { h: 'Et les autres nuisibles ?', p: [
    'Pour les **cafards**, les **fourmis**, les **puces**, les **guêpes** et les **frelons**, un traitement efficace demande en général un produit biocide, appliqué par nos techniciens certifiés Certibiocide, de façon ciblée. Nous vous expliquons toujours au devis ce qui sera utilisé et où. Voir [cafards](/services/cafards-blattes), [fourmis](/services/fourmis), [puces](/services/puces) et [guêpes et frelons](/services/guepes-frelons).',
  ] },
  { h: 'Un traitement sans produit est-il toujours suffisant ?', p: [
    'Pour une infestation **localisée ou moyenne**, oui dans la plupart des cas, à condition de respecter le protocole (deux passages pour les punaises, colmatage pour les rongeurs). Pour une infestation **très importante**, nous vous disons honnêtement après le diagnostic si une méthode sans produit suffit ou s’il vaut mieux un traitement classique.',
  ] },
]

const data: ServiceData = {
  badge: 'Sans biocide · Froid, chaleur, pièges · Garantie 1 an',
  devis: 'Devis gratuit traitement sans produit chimique',
  heroTitle: 'Nos traitements',
  heroHighlight: 'Sans produit chimique',
  heroDescription: 'Punaises de lit, rats et souris, chenilles processionnaires, acariens, pigeons : quand c’est possible, nous traitons sans aucun biocide, par le froid, la chaleur, des pièges ou des barrières physiques. Devis gratuit, garantie 1 an, toute l’Île-de-France.',
  trustBar: ['Aucun biocide déposé', 'Cryogénie et vapeur sèche', 'Pièges sans raticide', 'Techniciens certifiés', 'Garantie 1 an'],
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
    titre: 'Nuisible par nuisible : la méthode sans produit',
    head: ['Nuisible', 'Méthode sans biocide', 'Page dédiée'],
    rows: [
      ['Punaises de lit', 'Cryogénie, vapeur sèche, chambre froide −20 °C', 'Traitement écologique par cryogénie'],
      ['Rats et souris', 'Ekomille, pièges connectés, électriques, tapettes, accès rebouchés', 'Dératisation écologique'],
      ['Chenilles processionnaires', 'Retrait des nids, écopièges', 'Chenilles processionnaires'],
      ['Acariens', 'Vapeur sèche, cryogénie', 'Traitement des acariens'],
      ['Pigeons', 'Pics inox, filets, dispositifs électriques', 'Dépigeonnage'],
    ],
  },
  apresProcess: <ArticleService blocs={ARTICLE} />,
  pricing: [
    { label: 'Punaises de lit', price: '290', description: 'Studio, traitement écologique', features: ['Cryogénie et vapeur sèche', '2 passages inclus', 'Aucun produit chimique', 'Garantie 1 an'], highlight: true },
    { label: 'Rats et souris', price: 'Sur devis', description: 'Dératisation sans raticide', features: ['Inspection et colmatage', 'Pièges sans poison', 'Suivi des captures', 'Garantie 1 an'] },
    { label: 'Établissement', price: 'Sur devis', description: 'Crèche, école, hôtel, EHPAD, restaurant', features: ['Plan sans biocide', 'Planning adapté', 'Compte rendu', 'Garantie 1 an'], cta: 'Demander un devis' },
  ],
  faq: [
    { q: 'Que veut dire « traitement écologique » chez vous ?', a: 'Un traitement sans biocide : aucun insecticide, raticide ou autre produit chimique n’est déposé chez vous. Les nuisibles sont éliminés par le froid, la chaleur, des pièges ou des barrières physiques.' },
    { q: 'Quels nuisibles pouvez-vous traiter sans produit ?', a: 'Les punaises de lit (cryogénie, vapeur sèche, chambre froide), les rats et souris (pièges sans raticide et colmatage), les chenilles processionnaires (retrait des nids, écopièges), les acariens (vapeur, cryogénie) et les pigeons (pics, filets).' },
    { q: 'Pourquoi pas pour les cafards ou les fourmis ?', a: 'Pour ces insectes, un traitement efficace demande en général un produit biocide, appliqué de façon ciblée par nos techniciens certifiés. Nous vous expliquons au devis ce qui sera utilisé.' },
    { q: 'Un traitement sans produit est-il efficace ?', a: 'Oui pour les infestations localisées et moyennes, avec le bon protocole. Pour une infestation très importante, nous vous disons après le diagnostic si une méthode sans produit suffit.' },
    { q: 'Combien coûte un traitement sans produit chimique ?', a: 'Le traitement écologique des punaises de lit commence à 290 € pour un studio, 2 passages inclus. Pour les autres nuisibles, le devis est gratuit et donné avant l’intervention. Garantie 1 an.' },
    { q: 'Faut-il quitter le logement ?', a: 'Non. Aucun produit n’est diffusé : vous pouvez rester chez vous et réutiliser les pièces dès la fin du passage.' },
  ],
  related: {
    guides: { title: 'Nos pages sans produit chimique', links: [
      { href: '/services/cryogenie-punaises-de-lit', label: 'Punaises de lit : traitement écologique par cryogénie' },
      { href: '/services/deratisation-ecologique', label: 'Dératisation écologique sans raticide' },
      { href: '/blog/deratisation-sans-mort-aux-rats', label: 'Dératisation sans mort-aux-rats' },
      { href: '/services/chenilles-processionnaires', label: 'Chenilles processionnaires' },
      { href: '/services/acariens', label: 'Traitement des acariens' },
      { href: '/services/pigeons', label: 'Dépigeonnage' },
    ] },
  },
  ctaTitle: 'Un nuisible, sans produit chimique ?\nOn vous dit si c’est possible.',
}

export const metadata = pageMetadata({
  title: 'Traitement nuisibles sans produit chimique, IDF',
  description: 'Punaises de lit, rats, chenilles, acariens, pigeons : nos 5 traitements sans biocide en Île-de-France. Froid, chaleur, pièges. Devis gratuit.',
  path: '/services/traitements-sans-produit-chimique',
})

export default function TraitementsSansProduitPage() {
  return <ServicePageTemplate data={data} />
}
