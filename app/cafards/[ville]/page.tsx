import { notFound } from 'next/navigation'
import VilleServicePage, { metaVille } from '@/components/VilleServicePage'
import { VILLES_CAFARDS, CONFIG_CAFARDS, getVilleCafards } from '@/lib/villes-cafards'

export const dynamicParams = false

export function generateStaticParams() {
  return VILLES_CAFARDS.map((v) => ({ ville: v.slug }))
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  const v = getVilleCafards(params.ville)
  if (!v) return {}
  return metaVille(v, CONFIG_CAFARDS)
}

export default function CafardsVillePage({ params }: { params: { ville: string } }) {
  const v = getVilleCafards(params.ville)
  if (!v) notFound()
  return <VilleServicePage v={v} villes={VILLES_CAFARDS} c={CONFIG_CAFARDS} />
}
