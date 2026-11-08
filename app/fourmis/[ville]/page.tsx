import { notFound } from 'next/navigation'
import VilleServicePage, { metaVille } from '@/components/VilleServicePage'
import { VILLES_FOURMIS, CONFIG_FOURMIS, getVilleFourmis } from '@/lib/villes-fourmis'

export const dynamicParams = false

export function generateStaticParams() {
  return VILLES_FOURMIS.map((v) => ({ ville: v.slug }))
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  const v = getVilleFourmis(params.ville)
  if (!v) return {}
  return metaVille(v, CONFIG_FOURMIS)
}

export default function FourmisVillePage({ params }: { params: { ville: string } }) {
  const v = getVilleFourmis(params.ville)
  if (!v) notFound()
  return <VilleServicePage v={v} villes={VILLES_FOURMIS} c={CONFIG_FOURMIS} />
}
