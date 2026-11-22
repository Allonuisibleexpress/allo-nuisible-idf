// Fiche entreprise complète (données structurées LocalBusiness), la même sur tout le site (22/11/2026).
// Uniquement des informations vérifiées :
// - raison sociale, SIREN/SIRET, forme juridique, date de création, code NAF : annuaire officiel des entreprises
//   (recherche-entreprises.api.gouv.fr, consulté le 22/11/2026) ;
// - prix « dès » : pages /tarifs du site ; certification Certibiocide, garantie, horaires : informations confirmées.
// Pas d'aggregateRating : la note vient de la fiche Google, et Google interdit de reprendre dans les données structurées
// des avis recueillis sur un autre site (la note reste affichée en clair sur les pages, avec le lien vers Google).
import { GERANT } from '@/lib/seo'
import { CHAINE_YOUTUBE, PAGE_FACEBOOK, COMPTE_INSTAGRAM, COMPTE_PINTEREST, COMPTE_TIKTOK } from '@/lib/youtube'

const SITE = 'https://allonuisibleidf.fr'
const FICHE_GOOGLE = 'https://maps.google.com/?cid=11887181769674817823'

// Catalogue des interventions : prix « à partir de », TTC (pages /tarifs)
const CATALOGUE: { nom: string; service: string; tarif: string; prix: number }[] = [
  { nom: 'Traitement des punaises de lit (2 passages)', service: '/services/punaises-de-lit', tarif: '/tarifs/punaises-de-lit', prix: 290 },
  { nom: 'Dératisation (rats et souris)', service: '/services/deratisation', tarif: '/tarifs/deratisation', prix: 120 },
  { nom: 'Traitement des cafards et blattes', service: '/services/cafards-blattes', tarif: '/tarifs/cafards', prix: 120 },
  { nom: 'Destruction de nid de guêpes ou de frelons', service: '/services/guepes-frelons', tarif: '/tarifs/guepes-frelons', prix: 89 },
  { nom: 'Traitement des fourmis', service: '/services/fourmis', tarif: '/tarifs/fourmis', prix: 120 },
  { nom: 'Traitement des puces', service: '/services/puces', tarif: '/tarifs/puces', prix: 120 },
  { nom: 'Traitement des acariens', service: '/services/acariens', tarif: '/tarifs/acariens', prix: 120 },
  { nom: 'Traitement des anthrènes', service: '/services/anthrenes', tarif: '/tarifs/anthrenes', prix: 120 },
  { nom: 'Retrait de nids de chenilles processionnaires', service: '/services/chenilles-processionnaires', tarif: '/tarifs/chenilles-processionnaires', prix: 89 },
  { nom: 'Dépigeonnage (pics, filets)', service: '/services/pigeons', tarif: '/tarifs/pigeons', prix: 150 },
  { nom: 'Désinfection', service: '/services/desinfection', tarif: '/tarifs/desinfection', prix: 150 },
]

const DEPARTEMENTS = ['Paris', 'Val-de-Marne', 'Hauts-de-Seine', 'Seine-Saint-Denis', 'Essonne', 'Yvelines', 'Seine-et-Marne', 'Val-d’Oise']

export const ENTREPRISE = {
  '@type': 'LocalBusiness',
  '@id': `${SITE}/#entreprise`,
  name: 'Allo Nuisible IDF',
  legalName: 'ALLO NUISIBLE IDF',
  description: 'Entreprise de lutte contre les nuisibles basée à Saint-Maurice (94) : dératisation, punaises de lit (insecticide, cryogénie, vapeur sèche), cafards, nids de guêpes et de frelons, fourmis, puces, acariens, anthrènes, chenilles processionnaires, pigeons et désinfection, 7j/7 à Paris et en Île-de-France. Techniciens certifiés Certibiocide, devis gratuit, garantie 1 an (3 mois pour les nids de guêpes et de frelons).',
  url: SITE,
  logo: `${SITE}/logo-transparent.png`,
  image: `${SITE}/opengraph-image`,
  telephone: '+33768077219',
  email: 'contact@allonuisibleidf.fr',
  address: { '@type': 'PostalAddress', streetAddress: '6 bis rue du Val d’Osne', postalCode: '94410', addressLocality: 'Saint-Maurice', addressRegion: 'Île-de-France', addressCountry: 'FR' },
  geo: { '@type': 'GeoCoordinates', latitude: 48.8187651, longitude: 2.4246496 },
  hasMap: FICHE_GOOGLE,
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Île-de-France' },
    ...DEPARTEMENTS.map((name) => ({ '@type': 'AdministrativeArea', name })),
  ],
  openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
  priceRange: 'dès 89 € TTC',
  currenciesAccepted: 'EUR',
  foundingDate: '2024-06-01',
  founder: GERANT,
  employee: GERANT,
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'SIRET', value: '92876371300023' },
    { '@type': 'PropertyValue', propertyID: 'SIREN', value: '928763713' },
    { '@type': 'PropertyValue', propertyID: 'NAF', value: '81.29A', description: 'Désinfection, désinsectisation, dératisation' },
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Certibiocide',
    credentialCategory: 'Certificat professionnel',
    description: 'Certificat obligatoire pour utiliser des produits biocides professionnels (insecticides, raticides) en France.',
  },
  knowsAbout: ['Dératisation', 'Désinsectisation', 'Désinfection', 'Punaises de lit', 'Cryogénie', 'Vapeur sèche', 'Cafards', 'Guêpes et frelons', 'Fourmis', 'Puces', 'Acariens', 'Anthrènes', 'Chenilles processionnaires', 'Dépigeonnage', 'Syndrome de Diogène'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Nos interventions contre les nuisibles',
    itemListElement: CATALOGUE.map((c) => ({
      '@type': 'Offer',
      url: `${SITE}${c.tarif}`,
      priceCurrency: 'EUR',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: c.prix, priceCurrency: 'EUR', valueAddedTaxIncluded: true },
      itemOffered: { '@type': 'Service', name: c.nom, url: `${SITE}${c.service}`, areaServed: 'Île-de-France' },
    })),
  },
  sameAs: [FICHE_GOOGLE, CHAINE_YOUTUBE, PAGE_FACEBOOK, COMPTE_INSTAGRAM, COMPTE_PINTEREST, COMPTE_TIKTOK],
}
