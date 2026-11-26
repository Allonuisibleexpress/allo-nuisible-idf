import { REFONTE_DERATISATION } from '@/lib/refonte-deratisation'
// Dernière modification commune à toutes les pages dératisation refondues (question « qui paie » ajoutée le 27/11/2026)
const MAJ_COMMUNE_DERAT = '2026-11-27'
import { REFONTE_DERAT_DEP } from '@/lib/refonte-deratisation-departements'
import { PAGES_PRIX } from '@/lib/prix-nuisibles'
import type { MetadataRoute } from 'next'
import { ARTICLES } from './blog/articles'
import { DEPARTEMENTS_IDF } from '@/lib/departements'
import { COMMUNES_94 } from '@/lib/communes94'
import { VILLES_DERATISATION } from '@/lib/villes-deratisation'
import { VILLES_PUNAISES } from '@/lib/villes-punaises'
import { VILLES_CAFARDS } from '@/lib/villes-cafards'
import { VILLES_SOURIS } from '@/lib/villes-souris'
import { VILLES_FOURMIS } from '@/lib/villes-fourmis'
import { VILLES_FRELONS, frelonsIndexee } from '@/lib/villes-frelons'
import { VILLES_CHENILLES } from '@/lib/villes-chenilles'
import { VILLES_ACARIENS } from '@/lib/villes-acariens'
import { VILLES_ANTHRENES } from '@/lib/villes-anthrenes'
import { SERVICES_DEP, DEP_SLUGS } from '@/lib/departements-services'
import { VILLES_PUCES } from '@/lib/villes-puces'

const BASE = 'https://allonuisibleidf.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  // Pas de lastModified (22/11/2026) : la date de construction était envoyée pour toutes les pages, Google l'ignorait

  const staticPages = ['', '/faq', '/identifier-nuisible', '/nos-interventions', '/blog', '/tarifs', '/professionnels', '/qui-sommes-nous', '/avis', '/auteur/houssem-hattab', '/mairies-collectivites', '/barometre-des-nuisibles-punaises-de-lit-deratisation-2026', ...PAGES_PRIX.map((p) => `/tarifs/${p.slug}`)]
  const services = [
    'cafards-blattes', 'deratisation', 'desinfection', 'fourmis',
    'guepes-frelons', 'pigeons', 'punaises-de-lit', 'cryogenie-punaises-de-lit', 'chenilles-processionnaires', 'acariens', 'anthrenes', 'puces', 'deratisation-ecologique', 'traitements-sans-produit-chimique',
  ]
  const legacyPosts = ['punaise-colza-invasion-idf-2026']

  return [
    ...staticPages.map((p) => ({
      url: `${BASE}${p}`,
      changeFrequency: 'weekly' as const,
      priority: p === '' ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${BASE}/services/${s}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...[
      '/zones',
      ...DEPARTEMENTS_IDF.map((d) => `/zones/${d.slug}`),
      ...COMMUNES_94.map((c) => `/zones/val-de-marne/${c.slug}`),
    ].map((p) => ({
      url: `${BASE}${p}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // 27/11/2026 : date de refonte transmise à Google pour les pages dératisation refaites
    ...VILLES_DERATISATION.map((v) => ({
      url: `${BASE}/deratisation/${v.slug}`,
      ...(REFONTE_DERATISATION[v.slug] ? { lastModified: new Date([REFONTE_DERATISATION[v.slug].maj, MAJ_COMMUNE_DERAT].sort().pop()!) } : {}),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...VILLES_PUNAISES.map((v) => ({
      url: `${BASE}/punaises-de-lit/${v.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...[...VILLES_CAFARDS.map((v) => `/cafards/${v.slug}`), ...VILLES_SOURIS.map((v) => `/souris/${v.slug}`), ...VILLES_FOURMIS.map((v) => `/fourmis/${v.slug}`), '/fourmis', ...VILLES_CHENILLES.map((v) => `/chenilles-processionnaires/${v.slug}`), ...VILLES_ACARIENS.map((v) => `/acariens/${v.slug}`), ...VILLES_ANTHRENES.map((v) => `/anthrenes/${v.slug}`), ...VILLES_PUCES.map((v) => `/puces/${v.slug}`), ...VILLES_FRELONS.filter((v) => frelonsIndexee(v.slug)).map((v) => `/destruction-nid-frelon/${v.slug}`)].map((p) => ({
      url: `${BASE}${p}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Pages service + département (/deratisation/val-de-marne…)
    ...(Object.values(SERVICES_DEP).flatMap((s) => DEP_SLUGS.map((d) => `${s.base}/${d}`))).map((p) => ({
      url: `${BASE}${p}`,
      ...(p.startsWith('/deratisation/') && REFONTE_DERAT_DEP[p.split('/')[2] as keyof typeof REFONTE_DERAT_DEP] ? { lastModified: new Date(REFONTE_DERAT_DEP[p.split('/')[2] as keyof typeof REFONTE_DERAT_DEP]!.maj) } : {}),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...ARTICLES.map((a) => ({
      url: `${BASE}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...legacyPosts.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
