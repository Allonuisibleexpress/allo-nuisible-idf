// Bandeau « Devis gratuit » des pages ville (demande de l'utilisateur, 08/11/2026 : faire ressortir « devis gratuit »
// avec le mot-clé du service). Formulations en rotation d'une ville à l'autre pour éviter le texte identique.
import { Phone } from 'lucide-react'

const ACCENT = '#E8441A'
const h = (s: string) => s.split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 3)

export default function BandeauDevis({ slug, mot, a, prix }: { slug: string; mot: string; a: string; prix?: string | null }) {
  const k = h(slug + mot)
  const M = mot.charAt(0).toUpperCase() + mot.slice(1)
  const titre = [
    `Devis gratuit ${mot} ${a} : le prix avant l'intervention`,
    `${M} ${a} : votre devis gratuit en quelques minutes`,
    `Devis gratuit et sans engagement : ${mot} ${a}`,
    `${M} ${a} ? Demandez votre devis gratuit`,
    `Combien ça coûte ? Devis gratuit ${mot} ${a}`,
    `${M} ${a} : devis gratuit, prix clair, zéro surprise`,
  ][k % 6]
  const texte = [
    `Appelez-nous ou envoyez une photo : nous vous donnons le prix avant de nous déplacer ${a}, puis le technicien le confirme sur place.`,
    `Un appel ou une photo suffit pour connaître le prix ${a}, sans engagement. Pas de mauvaise surprise sur la facture.`,
    `Décrivez la situation par téléphone ou par photo : vous savez tout de suite combien coûte l'intervention ${a}.`,
    `Pas de devis payant chez nous : ${a} comme ailleurs, vous connaissez le tarif avant que le technicien commence.`,
    `Une photo prise de loin, quelques questions, et vous avez votre prix ${a}. Vous décidez ensuite, librement.`,
    `Le technicien vous annonce le prix avant toute intervention ${a}. Si vous refusez, vous ne payez rien.`,
  ][(k >> 8) % 6]
  return (
    <section className="py-12 md:py-14 px-4" style={{ background: '#0b0b0b' }}>
      <div className="max-w-3xl mx-auto text-center rounded-3xl px-6 py-9 md:px-10" style={{ background: 'rgba(232,68,26,0.08)', border: '1.5px solid rgba(232,68,26,0.35)' }}>
        <p className="inline-block font-black uppercase tracking-widest text-sm md:text-base px-4 py-1.5 rounded-full mb-4" style={{ background: ACCENT, color: '#fff' }}>Devis gratuit</p>
        <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-4">{titre}</h2>
        <p className="text-white/75 md:text-lg leading-relaxed mb-6">{texte}</p>
        {prix && (
          <p className="text-white/80 font-bold mb-6">
            À partir de <span className="font-black text-3xl md:text-4xl align-middle" style={{ color: ACCENT }}>{prix}</span> TTC
          </p>
        )}
        <a href="tel:+33768077219" className="inline-flex items-center gap-2 font-black text-white px-7 py-4 rounded-2xl text-base md:text-lg" style={{ background: ACCENT, boxShadow: '0 6px 24px rgba(232,68,26,0.35)' }}>
          <Phone className="w-5 h-5" /> Mon devis gratuit : 07 68 07 72 19
        </a>
      </div>
    </section>
  )
}
