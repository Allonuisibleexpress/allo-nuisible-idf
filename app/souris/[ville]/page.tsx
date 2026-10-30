import { notFound } from 'next/navigation'
import VilleServicePage from '@/components/VilleServicePage'
import { pageMetadata } from '@/lib/seo'
import { VILLES_SOURIS, CONFIG_SOURIS, getVilleSouris } from '@/lib/villes-souris'

export const dynamicParams = false

export function generateStaticParams() {
  return VILLES_SOURIS.map((v) => ({ ville: v.slug }))
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  const v = getVilleSouris(params.ville)
  if (!v) return {}
  return pageMetadata({ title: v.title, description: v.description, path: `/souris/${v.slug}` })
}

export default function SourisVillePage({ params }: { params: { ville: string } }) {
  const v = getVilleSouris(params.ville)
  if (!v) notFound()
  return <VilleServicePage v={v} villes={VILLES_SOURIS} c={CONFIG_SOURIS} />
}
