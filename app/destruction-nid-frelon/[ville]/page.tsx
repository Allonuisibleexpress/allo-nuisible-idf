import { notFound } from 'next/navigation'
import DepartementServicePage, { metaDep } from '@/components/DepartementServicePage'
import { DEP_SLUGS, estDep } from '@/lib/departements-services'
import VilleServicePage, { metaVille } from '@/components/VilleServicePage'
import { VILLES_FRELONS, CONFIG_FRELONS, frelonsIndexee, getVilleFrelons } from '@/lib/villes-frelons'

export const dynamicParams = false

export function generateStaticParams() {
  return [...VILLES_FRELONS.map((v) => ({ ville: v.slug })), ...DEP_SLUGS.map((d) => ({ ville: d }))]
}

export function generateMetadata({ params }: { params: { ville: string } }) {
  if (estDep(params.ville)) return metaDep('frelons', params.ville)
  const v = getVilleFrelons(params.ville)
  if (!v) return {}
  const meta = metaVille(v, CONFIG_FRELONS)
  // Mise en ligne progressive : noindex pour les villes absentes de FRELONS_VILLES_INDEXEES
  return frelonsIndexee(v.slug) ? meta : { ...meta, robots: { index: false, follow: true } }
}

export default function FrelonsVillePage({ params }: { params: { ville: string } }) {
  if (estDep(params.ville)) return <DepartementServicePage s="frelons" d={params.ville} />
  const v = getVilleFrelons(params.ville)
  if (!v) notFound()
  return <VilleServicePage v={v} villes={VILLES_FRELONS} c={CONFIG_FRELONS} />
}
