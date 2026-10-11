import type { Metadata } from 'next'
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
  title: 'Allo Nuisible IDF — Chasseurs de nuisibles en Île-de-France',
  description: 'Entreprise certifiée de dératisation, désinsectisation et désinfection en Île-de-France. Interventions 7j/7 et 24h/24. Punaises de lit, cafards, rongeurs, guêpes. Devis gratuit.',
  keywords: 'nuisible, Île-de-France, Paris, dératisation, désinsectisation, punaises de lit, cafards, rongeurs, guêpes',
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
