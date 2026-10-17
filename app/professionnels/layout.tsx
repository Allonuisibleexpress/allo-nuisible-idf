import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Anti-nuisibles pour professionnels : contrats et HACCP',
  description: 'Restaurants, commerces, copropriétés : contrats de visites préventives, attestations et registres conformes HACCP en Île-de-France.',
  path: '/professionnels',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
