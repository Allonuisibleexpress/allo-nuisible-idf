import { notFound } from 'next/navigation'
import VilleServicePage from '@/components/VilleServicePage'
import { pageMetadata } from '@/lib/seo'
import { VILLES_FOURMIS, CONFIG_FOURMIS, getVilleFourmis } from '@/lib/villes-fourmis'

export const dynamicParams = false

export function generateStaticParams() {
  return VILLES_FOURMIS.map((v) => ({ ville: v.slug }))
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  const v = getVilleFourmis(params.ville)
  if (!v) return {}
  return pageMetadata({ title: v.title, description: v.description, path: `/fourmis/${v.slug}` })
}

export default function FourmisVillePage({ params }: { params: { ville: string } }) {
  const v = getVilleFourmis(params.ville)
  if (!v) notFound()
  return <VilleServicePage v={v} villes={VILLES_FOURMIS} c={CONFIG_FOURMIS} />
}
