import { notFound } from 'next/navigation'
import VilleServicePage from '@/components/VilleServicePage'
import { pageMetadata } from '@/lib/seo'
import { VILLES_CHENILLES, CONFIG_CHENILLES, getVilleChenilles } from '@/lib/villes-chenilles'

export const dynamicParams = false

export function generateStaticParams() {
  return VILLES_CHENILLES.map((v) => ({ ville: v.slug }))
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  const v = getVilleChenilles(params.ville)
  if (!v) return {}
  return pageMetadata({ title: v.title, description: v.description, path: `/chenilles-processionnaires/${v.slug}` })
}

export default function ChenillesVillePage({ params }: { params: { ville: string } }) {
  const v = getVilleChenilles(params.ville)
  if (!v) notFound()
  return <VilleServicePage v={v} villes={VILLES_CHENILLES} c={CONFIG_CHENILLES} />
}
