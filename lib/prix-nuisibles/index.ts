// Pages prix par nuisible (/tarifs/[nuisible]), 20/11/2026
import type { PagePrix } from './types'
import { PRIX_PUNAISES } from './punaises'
import { PRIX_DERATISATION } from './deratisation'
import { PRIX_CAFARDS } from './cafards'
import { PRIX_FOURMIS } from './fourmis'
import { PRIX_GUEPES } from './guepes'
import { PRIX_CHENILLES } from './chenilles'
import { PRIX_PIGEONS } from './autres'
import { PRIX_PUCES, PRIX_ACARIENS, PRIX_ANTHRENES, PRIX_DESINFECTION } from './insectes'
import { COMPLEMENTS, FAQ_PLUS } from './complements'

export const PAGES_PRIX: PagePrix[] = [PRIX_PUNAISES, PRIX_DERATISATION, PRIX_CAFARDS, PRIX_FOURMIS, PRIX_GUEPES, PRIX_CHENILLES, PRIX_PIGEONS, PRIX_PUCES, PRIX_ACARIENS, PRIX_ANTHRENES, PRIX_DESINFECTION]
  .map((p) => ({ ...p, complements: COMPLEMENTS[p.slug] ?? [], faq: [...p.faq, ...(FAQ_PLUS[p.slug] ?? [])] }))
export const getPagePrix = (slug: string) => PAGES_PRIX.find((p) => p.slug === slug)
