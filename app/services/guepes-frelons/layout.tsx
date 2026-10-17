import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Nid de guêpes ou de frelons : destruction en Île-de-France',
  description: 'Nid de guêpes ou de frelons asiatiques ? Ne le touchez pas. Un technicien équipé peut intervenir le jour même, 7j/7. Devis gratuit.',
  path: '/services/guepes-frelons',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
