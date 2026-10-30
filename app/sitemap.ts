import type { MetadataRoute } from 'next'
import { ARTICLES } from './blog/articles'
import { DEPARTEMENTS_IDF } from '@/lib/departements'
import { COMMUNES_94 } from '@/lib/communes94'
import { VILLES_DERATISATION } from '@/lib/villes-deratisation'
import { VILLES_PUNAISES } from '@/lib/villes-punaises'
import { VILLES_CAFARDS } from '@/lib/villes-cafards'
import { VILLES_SOURIS } from '@/lib/villes-souris'
import { VILLES_CHENILLES } from '@/lib/villes-chenilles'

const BASE = 'https://allonuisibleidf.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = ['', '/blog', '/tarifs', '/professionnels']
  const services = [
    'cafards-blattes', 'deratisation', 'desinfection', 'fourmis',
    'guepes-frelons', 'pigeons', 'punaises-de-lit', 'rongeurs', 'chenilles-processionnaires',
  ]
  const legacyPosts = ['punaise-colza-invasion-idf-2026']

  return [
    ...staticPages.map((p) => ({
      url: `${BASE}${p}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: p === '' ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${BASE}/services/${s}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...[
      '/zones',
      ...DEPARTEMENTS_IDF.map((d) => `/zones/${d.slug}`),
      ...COMMUNES_94.map((c) => `/zones/val-de-marne/${c.slug}`),
    ].map((p) => ({
      url: `${BASE}${p}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...VILLES_DERATISATION.map((v) => ({
      url: `${BASE}/deratisation/${v.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...VILLES_PUNAISES.map((v) => ({
      url: `${BASE}/punaises-de-lit/${v.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...[...VILLES_CAFARDS.map((v) => `/cafards/${v.slug}`), ...VILLES_SOURIS.map((v) => `/souris/${v.slug}`), ...VILLES_CHENILLES.map((v) => `/chenilles-processionnaires/${v.slug}`)].map((p) => ({
      url: `${BASE}${p}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...ARTICLES.map((a) => ({
      url: `${BASE}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...legacyPosts.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
