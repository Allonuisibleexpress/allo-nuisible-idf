import type { Metadata } from 'next'
import { SITE_URL, SITE_NAME } from '@/lib/seo'
import { Inter } from 'next/font/google'
import './globals.css'
import './theme-clair.css' // aperçu fond blanc, inactif sauf si APERCU_CLAIR=1 au moment de la construction
import GlobalRdvButton from '@/components/GlobalRdvButton'
import WhatsAppFlottant from '@/components/WhatsAppFlottant'
import ChoixDevis from '@/components/ChoixDevis'
import RevealManager from '@/components/RevealManager'
import SommairePage from '@/components/SommairePage'

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
  // Validation du site sur Pinterest (compte « allonuisibleidf », 14/11/2026)
  other: { 'p:domain_verify': '7c61f4adfef92a829607ee102c4daebf' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable}${process.env.APERCU_CLAIR === '1' ? ' theme-clair' : ''}`}>
      <body>
        {children}
        <SommairePage />
        <GlobalRdvButton />
        <WhatsAppFlottant />
        <ChoixDevis />
        <RevealManager />
      </body>
    </html>
  )
}
