// Lien de redirection affiché sous une réponse de FAQ (19/11/2026). Voir lib/faq-liens.ts.
// 20/11/2026 : suivi d'un lien WhatsApp sous chaque réponse, sur tout le site.
import { lienFaq, type CtxFaq } from '@/lib/faq-liens'
import { LienWhatsApp } from '@/components/LienWhatsApp'

export default function FaqLien({ q, a, ctx }: { q: string; a: string; ctx?: CtxFaq }) {
  const l = lienFaq(q, a, ctx)
  return (
    <>
      {l && (
        <a href={l.href} className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold underline underline-offset-4 decoration-[#F0562A]/40 hover:decoration-[#F0562A]" style={{ color: '#F0562A' }}>
          → {l.label}
        </a>
      )}
      <span className="block"><LienWhatsApp texte="Votre cas est différent ? Envoyez une photo sur WhatsApp" /></span>
    </>
  )
}
