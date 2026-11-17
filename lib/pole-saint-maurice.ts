// Pôle « autour de Saint-Maurice » (18/11/2026, demande de l'utilisateur : maillage renforcé sur les villes à moins de 5 km
// de la base, plus Villejuif). Liste des pages qui existent réellement (relevée sur le sitemap du 18/11/2026).
// Toute nouvelle page dans ces villes doit être ajoutée ici pour entrer dans le maillage.
export type Famille = 'punaises-de-lit' | 'deratisation' | 'souris' | 'cafards' | 'fourmis' | 'puces' | 'acariens' | 'destruction-nid-frelon' | 'chenilles-processionnaires' | 'zones'

export const FAMILLES: Record<Famille, string> = {
  'punaises-de-lit': 'Punaises de lit',
  deratisation: 'Dératisation',
  souris: 'Souris',
  cafards: 'Cafards',
  fourmis: 'Fourmis',
  puces: 'Puces',
  acariens: 'Acariens',
  'destruction-nid-frelon': 'Nid de frelons',
  'chenilles-processionnaires': 'Chenilles processionnaires',
  zones: 'Tous nos services',
}

const TOUT: Famille[] = ['zones', 'deratisation', 'punaises-de-lit', 'cafards', 'souris', 'fourmis', 'acariens', 'puces', 'destruction-nid-frelon']
export const POLE: { slug: string; nom: string; km: number; pages: Famille[] }[] = [
  { slug: 'saint-maurice', nom: 'Saint-Maurice', km: 0, pages: TOUT },
  { slug: 'maisons-alfort', nom: 'Maisons-Alfort', km: 1.8, pages: TOUT },
  { slug: 'joinville-le-pont', nom: 'Joinville-le-Pont', km: 1.9, pages: TOUT.filter((f) => f !== 'acariens') },
  { slug: 'paris-12', nom: 'Paris 12e', km: 2.6, pages: TOUT.filter((f) => f !== 'zones' && f !== 'acariens') },
  { slug: 'alfortville', nom: 'Alfortville', km: 2.8, pages: TOUT },
  { slug: 'charenton-le-pont', nom: 'Charenton-le-Pont', km: 2.8, pages: TOUT },
  { slug: 'saint-mande', nom: 'Saint-Mandé', km: 3.1, pages: [...TOUT, 'chenilles-processionnaires'] },
  { slug: 'vincennes', nom: 'Vincennes', km: 3.3, pages: [...TOUT, 'chenilles-processionnaires'] },
  { slug: 'nogent-sur-marne', nom: 'Nogent-sur-Marne', km: 3.5, pages: [...TOUT, 'chenilles-processionnaires'] },
  { slug: 'creteil', nom: 'Créteil', km: 3.8, pages: TOUT },
  { slug: 'ivry-sur-seine', nom: 'Ivry-sur-Seine', km: 4.1, pages: TOUT },
  { slug: 'saint-maur-des-fosses', nom: 'Saint-Maur-des-Fossés', km: 4.2, pages: [...TOUT, 'chenilles-processionnaires'] },
  { slug: 'fontenay-sous-bois', nom: 'Fontenay-sous-Bois', km: 4.3, pages: TOUT },
  { slug: 'vitry-sur-seine', nom: 'Vitry-sur-Seine', km: 4.7, pages: TOUT.filter((f) => f !== 'destruction-nid-frelon') },
  { slug: 'villejuif', nom: 'Villejuif', km: 6.6, pages: ['zones', 'deratisation', 'punaises-de-lit', 'souris', 'fourmis', 'acariens', 'puces'] },
]

export function lienPole(f: Famille, slug: string) {
  return f === 'zones' ? `/zones/val-de-marne/${slug}` : `/${f}/${slug}`
}

export function dansPole(slug: string) { return POLE.some((v) => v.slug === slug) }
