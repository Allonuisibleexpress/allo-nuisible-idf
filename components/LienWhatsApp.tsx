// Liens et boutons WhatsApp répétés sur toutes les pages (20/11/2026, demande de l'utilisateur : « autant que lui »).
// Message prérempli pour que le client n'ait plus qu'à joindre sa photo.
import { MessageCircle } from 'lucide-react'

export const NUMERO_WA = '33768077219'
export const lienWa = (sujet?: string) =>
  `https://wa.me/${NUMERO_WA}?text=${encodeURIComponent(`Bonjour, voici une photo de mon problème${sujet ? ` (${sujet})` : ''}. Pouvez-vous me donner un devis ?`)}`

// Petit lien texte (sous une réponse de FAQ, dans une section)
export function LienWhatsApp({ sujet, texte = 'Envoyez-nous une photo sur WhatsApp : réponse en 5 minutes' }: { sujet?: string; texte?: string }) {
  return (
    <a href={lienWa(sujet)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold underline underline-offset-4" style={{ color: '#3DDC84' }}>
      <MessageCircle className="w-4 h-4" aria-hidden="true" />{texte}
    </a>
  )
}

// Bouton vert (fin de section)
export function BoutonWhatsApp({ sujet, texte = 'Envoyer une photo sur WhatsApp' }: { sujet?: string; texte?: string }) {
  return (
    <a href={lienWa(sujet)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-white text-sm px-5 py-3 rounded-xl m-2 align-middle" style={{ background: '#157A40' }}>
      <MessageCircle className="w-4 h-4" aria-hidden="true" />{texte}
    </a>
  )
}
