import { notFound } from 'next/navigation'
import DepartementServicePage, { metaDep } from '@/components/DepartementServicePage'
import { DEP_SLUGS, estDep } from '@/lib/departements-services'
import VilleServicePage, { metaVille } from '@/components/VilleServicePage'
import { VILLES_PUCES, CONFIG_PUCES, getVillePuces } from '@/lib/villes-puces'

export const dynamicParams = false

export function generateStaticParams() {
  return [...VILLES_PUCES.map((v) => ({ ville: v.slug })), ...DEP_SLUGS.map((d) => ({ ville: d }))]
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  if (estDep(params.ville)) return metaDep('puces', params.ville)
  const v = getVillePuces(params.ville)
  if (!v) return {}
  return metaVille(v, CONFIG_PUCES)
}

export default function PucesVillePage({ params }: { params: { ville: string } }) {
  if (estDep(params.ville)) return <DepartementServicePage s="puces" d={params.ville} />
  const v = getVillePuces(params.ville)
  if (!v) notFound()
  return <VilleServicePage v={v} villes={VILLES_PUCES} c={CONFIG_PUCES} />
}
