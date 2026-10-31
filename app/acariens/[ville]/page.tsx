import { notFound } from 'next/navigation'
import VilleServicePage from '@/components/VilleServicePage'
import { pageMetadata } from '@/lib/seo'
import { VILLES_ACARIENS, CONFIG_ACARIENS, getVilleAcariens } from '@/lib/villes-acariens'

export const dynamicParams = false

export function generateStaticParams() {
  return VILLES_ACARIENS.map((v) => ({ ville: v.slug }))
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  const v = getVilleAcariens(params.ville)
  if (!v) return {}
  return pageMetadata({ title: v.title, description: v.description, path: `/acariens/${v.slug}` })
}

export default function AcariensVillePage({ params }: { params: { ville: string } }) {
  const v = getVilleAcariens(params.ville)
  if (!v) notFound()
  return <VilleServicePage v={v} villes={VILLES_ACARIENS} c={CONFIG_ACARIENS} />
}
