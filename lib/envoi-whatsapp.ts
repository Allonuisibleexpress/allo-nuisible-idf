// Envoi des anciens formulaires sur WhatsApp (20/11/2026) : remplace Formspree, en attendant un vrai formulaire.
import { NUMERO_WA } from '@/components/LienWhatsApp'

export function envoyerSurWhatsApp(fd: FormData) {
  const v = (k: string) => String(fd.get(k) ?? '').trim()
  const lignes = [
    'Bonjour, je souhaite un devis gratuit.',
    v('nuisible') && `Nuisible : ${v('nuisible')}`,
    v('ville') && `Ville : ${v('ville')}`,
    v('nom') && `Nom : ${v('nom')}`,
    v('telephone') && `Téléphone : ${v('telephone')}`,
    v('email') && `E-mail : ${v('email')}`,
    (v('message') || v('situation')) && `Situation : ${v('message') || v('situation')}`,
  ].filter(Boolean)
  const url = `https://wa.me/${NUMERO_WA}?text=${encodeURIComponent(lignes.join('\n'))}`
  const w = window.open(url, '_blank', 'noopener')
  if (!w) window.location.href = url
}
