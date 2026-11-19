// Lien de redirection affiché sous une réponse de FAQ (19/11/2026). Voir lib/faq-liens.ts.
import { lienFaq, type CtxFaq } from '@/lib/faq-liens'

export default function FaqLien({ q, a, ctx }: { q: string; a: string; ctx?: CtxFaq }) {
  const l = lienFaq(q, a, ctx)
  if (!l) return null
  return (
    <a href={l.href} className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold underline underline-offset-4 decoration-[#F0562A]/40 hover:decoration-[#F0562A]" style={{ color: '#F0562A' }}>
      → {l.label}
    </a>
  )
}
