import { notFound } from 'next/navigation'
import DepartementServicePage, { metaDep } from '@/components/DepartementServicePage'
import { DEP_SLUGS, estDep } from '@/lib/departements-services'
import VilleServicePage, { metaVille } from '@/components/VilleServicePage'
import { VILLES_CAFARDS, CONFIG_CAFARDS, getVilleCafards } from '@/lib/villes-cafards'

export const dynamicParams = false

export function generateStaticParams() {
  return [...VILLES_CAFARDS.map((v) => ({ ville: v.slug })), ...DEP_SLUGS.map((d) => ({ ville: d }))]
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  if (estDep(params.ville)) return metaDep('cafards', params.ville)
  const v = getVilleCafards(params.ville)
  if (!v) return {}
  return metaVille(v, CONFIG_CAFARDS)
}

export default function CafardsVillePage({ params }: { params: { ville: string } }) {
  if (estDep(params.ville)) return <DepartementServicePage s="cafards" d={params.ville} />
  const v = getVilleCafards(params.ville)
  if (!v) notFound()
  return <VilleServicePage v={v} villes={VILLES_CAFARDS} c={CONFIG_CAFARDS} />
}
