// Bouton WhatsApp flottant, visible sur toutes les pages en bas à droite (20/11/2026).
import { MessageCircle } from 'lucide-react'
import { lienWa } from '@/components/LienWhatsApp'

export default function WhatsAppFlottant() {
  return (
    <a href={lienWa()} target="_blank" rel="noopener noreferrer" aria-label="Envoyer une photo sur WhatsApp"
      className="fixed z-50 flex items-center justify-center rounded-full shadow-lg hover:brightness-110"
      style={{ right: 'calc(14px + env(safe-area-inset-right, 0px))', bottom: 'calc(84px + env(safe-area-inset-bottom, 0px))', width: 56, height: 56, background: '#157A40', boxShadow: '0 6px 20px rgba(0,0,0,0.45)' }}>
      <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
    </a>
  )
}
