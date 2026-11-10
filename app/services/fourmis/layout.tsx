import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Traitement fourmis dès 120 € : on élimine la reine',
  description: 'Gel appât professionnel et barrière rémanente pour éliminer la colonie, reine comprise. Intervention le jour même possible, garantie 1 an.',
  path: '/services/fourmis',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
