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
