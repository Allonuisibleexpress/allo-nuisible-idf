import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Punaise de colza : l\'invasion estivale en Île-de-France',
  description: 'Punaises de colza sur vos murs et fenêtres ? Pourquoi elles arrivent en été, combien de temps dure l\'invasion et que faire en attendant.',
  path: '/blog/punaise-colza-invasion-idf-2026',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
