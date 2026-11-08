import { notFound } from 'next/navigation'
import VilleServicePage, { metaVille } from '@/components/VilleServicePage'
import { VILLES_FRELONS, CONFIG_FRELONS, frelonsIndexee, getVilleFrelons } from '@/lib/villes-frelons'

export const dynamicParams = false

export function generateStaticParams() {
  return VILLES_FRELONS.map((v) => ({ ville: v.slug }))
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  const v = getVilleFrelons(params.ville)
  if (!v) return {}
  const meta = metaVille(v, CONFIG_FRELONS)
  // Mise en ligne progressive : noindex pour les villes absentes de FRELONS_VILLES_INDEXEES
  return frelonsIndexee(v.slug) ? meta : { ...meta, robots: { index: false, follow: true } }
}

export default function FrelonsVillePage({ params }: { params: { ville: string } }) {
  const v = getVilleFrelons(params.ville)
  if (!v) notFound()
  return <VilleServicePage v={v} villes={VILLES_FRELONS} c={CONFIG_FRELONS} />
}
