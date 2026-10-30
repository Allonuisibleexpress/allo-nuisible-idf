import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Prix anti-nuisibles en Île-de-France : dès 89 €',
  description: 'Nos tarifs en Île-de-France : nid de guêpes dès 89 €, cafards, rats et fourmis dès 120 €, punaises de lit dès 290 €. Cas complexes sur devis gratuit.',
  path: '/tarifs',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
