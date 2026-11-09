import { notFound } from 'next/navigation'
import DepartementServicePage, { metaDep } from '@/components/DepartementServicePage'
import { DEP_SLUGS, estDep } from '@/lib/departements-services'
import VilleServicePage, { metaVille } from '@/components/VilleServicePage'
import { VILLES_SOURIS, CONFIG_SOURIS, getVilleSouris } from '@/lib/villes-souris'

export const dynamicParams = false

export function generateStaticParams() {
  return [...VILLES_SOURIS.map((v) => ({ ville: v.slug })), ...DEP_SLUGS.map((d) => ({ ville: d }))]
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  if (estDep(params.ville)) return metaDep('souris', params.ville)
  const v = getVilleSouris(params.ville)
  if (!v) return {}
  return metaVille(v, CONFIG_SOURIS)
}

export default function SourisVillePage({ params }: { params: { ville: string } }) {
  if (estDep(params.ville)) return <DepartementServicePage s="souris" d={params.ville} />
  const v = getVilleSouris(params.ville)
  if (!v) notFound()
  return <VilleServicePage v={v} villes={VILLES_SOURIS} c={CONFIG_SOURIS} />
}
