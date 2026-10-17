import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME } from '@/lib/seo'
import { Inter } from 'next/font/google'
import './globals.css'
import GlobalRdvButton from '@/components/GlobalRdvButton'
import RevealManager from '@/components/RevealManager'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Lutte contre les nuisibles 7j/7 en Île-de-France',
  description: 'Entreprise certifiée de dératisation, désinsectisation et désinfection en Île-de-France. Interventions 7j/7 et 24h/24. Punaises de lit, cafards, rongeurs, guêpes. Devis gratuit.',
  keywords: 'nuisible, Île-de-France, Paris, dératisation, désinsectisation, punaises de lit, cafards, rongeurs, guêpes',
  openGraph: { siteName: SITE_NAME, locale: 'fr_FR', type: 'website' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        {children}
        <GlobalRdvButton />
        <RevealManager />
      </body>
    </html>
  )
}
