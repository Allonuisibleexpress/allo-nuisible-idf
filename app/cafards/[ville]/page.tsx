import { notFound } from 'next/navigation'
import VilleServicePage from '@/components/VilleServicePage'
import { pageMetadata } from '@/lib/seo'
import { VILLES_CAFARDS, CONFIG_CAFARDS, getVilleCafards } from '@/lib/villes-cafards'

export const dynamicParams = false

export function generateStaticParams() {
  return VILLES_CAFARDS.map((v) => ({ ville: v.slug }))
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  const v = getVilleCafards(params.ville)
  if (!v) return {}
  return pageMetadata({ title: v.title, description: v.description, path: `/cafards/${v.slug}` })
}

export default function CafardsVillePage({ params }: { params: { ville: string } }) {
  const v = getVilleCafards(params.ville)
  if (!v) notFound()
  return <VilleServicePage v={v} villes={VILLES_CAFARDS} c={CONFIG_CAFARDS} />
}
