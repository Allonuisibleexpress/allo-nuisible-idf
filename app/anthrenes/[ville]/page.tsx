import { notFound } from 'next/navigation'
import VilleServicePage, { metaVille } from '@/components/VilleServicePage'
import { VILLES_ANTHRENES, CONFIG_ANTHRENES, getVilleAnthrenes } from '@/lib/villes-anthrenes'

export const dynamicParams = false

export function generateStaticParams() {
  return VILLES_ANTHRENES.map((v) => ({ ville: v.slug }))
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  const v = getVilleAnthrenes(params.ville)
  if (!v) return {}
  return metaVille(v, CONFIG_ANTHRENES)
}

export default function AnthrenesVillePage({ params }: { params: { ville: string } }) {
  const v = getVilleAnthrenes(params.ville)
  if (!v) notFound()
  return <VilleServicePage v={v} villes={VILLES_ANTHRENES} c={CONFIG_ANTHRENES} />
}
