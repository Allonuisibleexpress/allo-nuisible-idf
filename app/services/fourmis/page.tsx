import ServiceFourmisClient from '@/components/ServiceFourmisClient'
import { secteurService } from '@/lib/secteurs'

export default function Page() {
  return <ServiceFourmisClient secteur={secteurService('/services/fourmis')} />
}
