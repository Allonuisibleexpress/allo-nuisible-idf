import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Traitement fourmis en Île-de-France, garanti 1 mois',
  description: 'Gel appât professionnel et barrière rémanente pour éliminer la colonie, reine comprise. Intervention le jour même possible, garantie 1 mois.',
  path: '/services/fourmis',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
