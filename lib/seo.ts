import type { Metadata } from 'next'

export const SITE_URL = 'https://allonuisibleidf.fr'
export const SITE_NAME = 'Allo Nuisible IDF'
export const OG_IMAGE = { url: '/opengraph-image', width: 1200, height: 630, alt: 'Allo Nuisible IDF, lutte contre les nuisibles 7j/7' }

// Titre, description, adresse canonique et aperçu de partage d'une page.
// `path` est relatif à la racine du site ('' pour l'accueil).
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = path === '' ? '/' : path
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: 'website',
      images: [OG_IMAGE],
    },
  }
}

// Gérant de la société (13/11/2026), affiché comme auteur des pages et déclaré à Google
export const GERANT_NOM = 'Houssem Hattab'
export const GERANT = {
  '@type': 'Person',
  '@id': 'https://allonuisibleidf.fr/#gerant',
  name: GERANT_NOM,
  jobTitle: 'Gérant',
  url: 'https://allonuisibleidf.fr/auteur/houssem-hattab',
  image: 'https://allonuisibleidf.fr/equipe/houssem-hattab-gerant.jpg',
  description: 'Gérant d’Allo Nuisible IDF, entreprise de lutte contre les nuisibles basée à Saint-Maurice (94). 5 ans d’expérience en dératisation, désinsectisation et désinfection.',
  knowsAbout: ['Dératisation', 'Punaises de lit', 'Cryogénie', 'Cafards', 'Nids de guêpes et de frelons', 'Lutte contre les nuisibles'],
  worksFor: { '@id': 'https://allonuisibleidf.fr/#entreprise' },
}
