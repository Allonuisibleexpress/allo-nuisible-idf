// Punaises de lit : traitement écologique, sans produit chimique (12/11/2026, demande de l'utilisateur).
// « Écologique » est toujours défini sur la page : aucun insecticide ni produit chimique déposé (cryogénie, vapeur sèche, froid).
// Mot-clé visé : « punaises de lit traitement écologique / sans produit chimique » (la page cryogénie vise « cryogénie punaises de lit »).
import { pageMetadata } from '@/lib/seo'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import ArticleService from '@/components/ArticleService'

const ARTICLE = [
  { h: 'Traitement écologique des punaises de lit : ce que cela veut dire chez nous', p: [
    'Par **traitement écologique**, nous entendons un traitement **sans insecticide ni aucun produit chimique déposé chez vous**. Les punaises de lit et leurs œufs sont éliminés par la **température** : le froid extrême de la **cryogénie** (neige carbonique à environ −78 °C) et la chaleur de la **vapeur sèche**. Rien ne reste sur vos meubles, votre matelas ou vos sols après notre passage.',
    'C’est la solution recherchée par les familles avec un **bébé**, une **femme enceinte**, des **personnes âgées** ou des **animaux**, par les **crèches**, les **écoles**, les **foyers**, les **hôtels** et les **EHPAD**, et par toutes les personnes qui ne veulent simplement pas de produit chez elles.',
  ] },
  { h: 'Cryogénie : tuer les punaises de lit par le froid, sans produit chimique', p: [
    'La lance projette de la **neige carbonique** issue de bonbonnes de CO2, à environ **−78 °C**. Au contact, le choc thermique tue les **adultes**, les **larves** et les **œufs**. La neige se transforme aussitôt en gaz : pas d’eau, pas d’humidité, pas de résidu. Le technicien suit chaque couture du matelas, chaque fente du sommier, chaque jonction de meuble et chaque plinthe.',
    'Voir notre page détaillée [cryogénie punaises de lit](/services/cryogenie-punaises-de-lit) et nos vidéos de chantier, dont l’intervention dans un [établissement accueillant de jeunes enfants à Champigny-sur-Marne](/punaises-de-lit/champigny-sur-marne).',
  ] },
  { h: 'Vapeur sèche : la chaleur pour les matelas, canapés et textiles', p: [
    'La **vapeur sèche** à très haute température pénètre les tissus épais : matelas, canapés, fauteuils, rideaux, têtes de lit capitonnées. Elle tue les punaises et les œufs au contact, sans détremper les textiles. Cryogénie et vapeur se complètent : le froid pour les fentes et le mobilier, la vapeur pour les grandes surfaces textiles.',
  ] },
  { h: 'Le linge et les vêtements : lavage à 60 °C et grand froid', p: [
    'Le linge est mis en **sacs fermés**, puis **lavé à 60 °C** ou plus. Ce qui ne se lave pas peut passer dans notre **chambre froide à −20 °C**, pendant au moins 72 heures. Notre guide [traiter ses vêtements contre les punaises de lit](/blog/traiter-vetements-punaises-de-lit) détaille chaque étape.',
  ] },
  { h: 'Notre protocole sans produit chimique, étape par étape', p: [
    '- **Inspection** : lampe et carte en main, le technicien repère les foyers (points noirs, mues, œufs, punaises vivantes) autour des lits et des canapés.',
    '- **Préparation** : linge en sacs, désencombrement autour des lits, rien n’est déplacé d’une pièce infestée vers une pièce saine.',
    '- **Cryogénie et vapeur sèche**, pièce par pièce, du lit vers l’extérieur de la pièce, puis **aspiration** des insectes morts.',
    '- **Second passage** 10 à 15 jours plus tard : sans produit, il n’y a pas d’effet qui dure ; ce passage élimine les punaises sorties des œufs qui auraient échappé au premier.',
    '- **Garantie 1 an** : si les punaises reviennent, nous revenons.',
  ] },
  { h: 'Un traitement écologique est-il aussi efficace qu’un insecticide ?', p: [
    'Oui pour les **infestations localisées et moyennes**, à condition de respecter le protocole : deux passages, préparation du linge, aspiration. La limite, c’est l’absence d’effet rémanent : un œuf que le jet n’a pas touché éclora. C’est pourquoi le second passage est indispensable.',
    'Pour une **infestation très importante**, dans de nombreuses pièces, nous vous dirons honnêtement si un traitement sans produit suffit, ou s’il vaut mieux un traitement classique : voir [toutes nos méthodes contre les punaises de lit](/services/punaises-de-lit).',
  ] },
  { h: 'Reconnaître les punaises de lit avant de traiter', p: [
    'Piqûres alignées au réveil, petits points noirs sur le matelas, mues brunes, punaises plates de 5 à 7 mm cachées dans les coutures : ce sont les signes typiques. Notre infographie du [cycle de vie de la punaise de lit](/blog/cycle-de-vie-punaise-de-lit) montre les 7 stades, de l’œuf à l’adulte.',
  ] },
  { h: 'Traitement écologique des punaises de lit près de chez vous', p: [
    'Nous intervenons 7j/7 en Île-de-France depuis Saint-Maurice : [punaises de lit à Paris](/punaises-de-lit/paris), [dans le Val-de-Marne](/punaises-de-lit/val-de-marne), [dans les Hauts-de-Seine](/punaises-de-lit/hauts-de-seine), [en Essonne](/punaises-de-lit/essonne), [dans les Yvelines](/punaises-de-lit/yvelines) et [en Seine-et-Marne](/punaises-de-lit/seine-et-marne). Par exemple : [Créteil](/punaises-de-lit/creteil), [Vincennes](/punaises-de-lit/vincennes), [Saint-Maur-des-Fossés](/punaises-de-lit/saint-maur-des-fosses), [Paris 12e](/punaises-de-lit/paris-12), [Paris 16e](/punaises-de-lit/paris-16).',
  ] },
]

const data: ServiceData = {
  badge: 'Écologique · Sans produit chimique · Cryogénie et vapeur · Garantie 1 an',
  devis: 'Devis gratuit punaises de lit sans produit chimique',
  heroTitle: 'Punaises de lit',
  heroHighlight: 'Traitement écologique',
  heroDescription: 'Un traitement écologique, c’est-à-dire sans insecticide ni aucun produit chimique déposé chez vous : les punaises de lit et leurs œufs sont tués par le froid de la cryogénie (−78 °C) et la chaleur de la vapeur sèche. 2 passages inclus, garantie 1 an.',
  heroPrices: [
    { price: '290', label: 'Studio' },
    { price: 'Sur devis', label: 'Appartement' },
    { price: 'Sur devis', label: 'Établissement' },
  ],
  trustBar: ['Aucun produit chimique', 'Cryogénie −78 °C', 'Vapeur sèche', '2 passages inclus', 'Garantie 1 an'],
  benefits: [
    { icon: 'health', title: 'Rien ne reste chez vous', text: 'Ni insecticide ni résidu : le froid et la chaleur agissent au contact, puis disparaissent. Idéal avec un bébé, des enfants, des animaux ou des personnes fragiles.' },
    { icon: 'thermo', title: 'Le froid et la chaleur', text: 'Cryogénie pour les fentes, le sommier et le mobilier ; vapeur sèche pour le matelas, les canapés et les textiles. Les œufs sont tués comme les adultes.' },
    { icon: 'building', title: 'Pour les lieux sensibles', text: 'Crèches, écoles, foyers, hôtels, EHPAD : nous traitons chambre par chambre, avec un planning et un compte rendu à la direction.' },
    { icon: 'repeat', title: '2 passages inclus', text: 'Sans effet rémanent, le second passage 10 à 15 jours après élimine les punaises écloses entre-temps. Garantie 1 an.' },
  ],
  process: [
    { title: 'Inspection', text: 'Repérage des foyers autour des lits et des canapés, et choix des zones à traiter.' },
    { title: 'Préparation', text: 'Linge en sacs fermés, lavé à 60 °C ou passé au froid ; désencombrement autour des lits.' },
    { title: 'Cryogénie et vapeur', text: 'Pièce par pièce, au plus près des coutures, fentes et jonctions, puis aspiration des insectes morts.' },
    { title: 'Second passage', text: '10 à 15 jours plus tard, pour les punaises sorties des œufs. Garantie 1 an.' },
  ],
  apresProcess: <ArticleService blocs={ARTICLE} />,
  pricing: [
    { label: 'Studio', price: '290', description: 'Une pièce principale', features: ['2 passages inclus', 'Cryogénie et vapeur sèche', 'Aucun produit chimique', 'Garantie 1 an'] },
    { label: 'Appartement ou maison', price: 'Sur devis', description: 'Plusieurs pièces touchées', features: ['2 passages inclus', 'Toutes les pièces touchées', 'Conseils pour le linge', 'Garantie 1 an'], highlight: true },
    { label: 'Établissement', price: 'Sur devis', description: 'Crèche, école, foyer, hôtel, EHPAD', features: ['Planning chambre par chambre', 'Compte rendu à la direction', 'Aucun produit chimique', 'Garantie 1 an'], cta: 'Demander un devis' },
  ],
  avis: ['jo', 'lina', 'christine'],
  faq: [
    { q: 'Existe-t-il un traitement écologique contre les punaises de lit ?', a: 'Oui : la cryogénie (froid à environ −78 °C) et la vapeur sèche tuent les punaises et leurs œufs au contact, sans insecticide ni produit chimique déposé. Deux passages sont nécessaires.' },
    { q: 'Un traitement sans produit chimique est-il efficace ?', a: 'Oui pour les infestations localisées et moyennes, avec deux passages et une bonne préparation du linge. Pour une infestation très importante, nous vous dirons honnêtement si un traitement classique est préférable.' },
    { q: 'Peut-on rester chez soi pendant le traitement ?', a: 'Nous demandons de quitter le logement pendant l’intervention, puis on aère. Aucun produit n’est déposé : les pièces peuvent être réutilisées ensuite.' },
    { q: 'Est-ce adapté avec un bébé ou des animaux ?', a: 'Oui, c’est précisément pour ces situations que les familles choisissent le traitement sans produit chimique.' },
    { q: 'Combien coûte un traitement écologique des punaises de lit ?', a: 'À partir de 290 € TTC pour un studio, 2 passages inclus, garantie 1 an. Appartements, maisons et établissements sur devis gratuit.' },
    { q: 'Pourquoi deux passages ?', a: 'Sans produit, il n’y a pas d’effet qui dure : un œuf non touché éclot en une à deux semaines. Le second passage élimine ces jeunes punaises avant qu’elles ne pondent.' },
  ],
  related: {
    villes: { title: 'Traitement sans produit chimique : nos départements', links: [['paris', 'Paris'], ['val-de-marne', 'Val-de-Marne (94)'], ['hauts-de-seine', 'Hauts-de-Seine (92)'], ['essonne', 'Essonne (91)'], ['yvelines', 'Yvelines (78)'], ['seine-et-marne', 'Seine-et-Marne (77)']].map(([d, n]) => ({ href: `/punaises-de-lit/${d}`, label: `Punaises de lit : ${n}` })) },
    guides: { title: 'Pour aller plus loin', links: [
      { href: '/services/cryogenie-punaises-de-lit', label: 'Cryogénie punaises de lit : la méthode en détail' },
      { href: '/services/punaises-de-lit', label: 'Punaises de lit : toutes nos méthodes' },
      { href: '/blog/cryogenie-punaises-de-lit', label: 'Cryogénie : comment ça marche, efficacité et limites' },
      { href: '/blog/cryogenie-punaises-de-lit-foyer-enfants', label: 'Récit : cryogénie dans un foyer pour enfants' },
      { href: '/blog/traiter-vetements-punaises-de-lit', label: 'Traiter ses vêtements contre les punaises de lit' },
      { href: '/blog/cycle-de-vie-punaise-de-lit', label: 'Cycle de vie de la punaise de lit en images' },
    ] },
  },
  ctaTitle: 'Des punaises de lit, sans produit chimique ?\nOn intervient rapidement.',
}

export const metadata = pageMetadata({
  title: 'Punaises de lit : traitement écologique dès 290 €',
  description: 'Traitement écologique des punaises de lit, sans produit chimique : cryogénie −78 °C et vapeur sèche, 2 passages inclus dès 290 € TTC, garantie 1 an, Île-de-France.',
  path: '/services/punaises-de-lit-ecologique',
})

export default function PunaisesEcologiquePage() {
  return <ServicePageTemplate data={data} />
}
