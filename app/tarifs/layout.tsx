import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Devis gratuit pour vos nuisibles en Île-de-France',
  description: 'Chaque intervention est chiffrée sur devis, gratuit et sans engagement. Appelez-nous ou décrivez votre problème, réponse rapide 7j/7.',
  path: '/tarifs',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
