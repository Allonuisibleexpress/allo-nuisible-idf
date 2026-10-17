import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Blog anti-nuisibles : conseils pour l\'Île-de-France',
  description: 'Rats, souris, cafards, punaises de lit, fourmis, guêpes : nos conseils de techniciens pour reconnaître, prévenir et traiter les nuisibles.',
  path: '/blog',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
