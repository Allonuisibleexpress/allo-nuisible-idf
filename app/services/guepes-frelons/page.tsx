import ServiceGuepesFrelonsClient from '@/components/ServiceGuepesFrelonsClient'
import { secteurService } from '@/lib/secteurs'

export default function Page() {
  return <ServiceGuepesFrelonsClient secteur={secteurService('/services/guepes-frelons')} />
}
