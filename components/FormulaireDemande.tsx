'use client'
// Formulaire de demande sur toutes les pages (20/11/2026, demande de l'utilisateur après l'audit face à Express).
// Pas de serveur ni de compte : la demande part sur le WhatsApp de l'entreprise (ou par SMS) avec tous les champs
// déjà écrits ; le visiteur n'a plus qu'à appuyer sur « Envoyer ». Nuisible et ville préremplis d'après la page.
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Phone, MessageCircle, Send } from 'lucide-react'

const NUMERO = '33768077219'
const NUISIBLES = ['Punaises de lit', 'Rats', 'Souris', 'Cafards ou blattes', 'Fourmis', 'Nid de guêpes ou de frelons', 'Chenilles processionnaires', 'Pigeons', 'Puces', 'Acariens', 'Anthrènes ou mites', 'Désinfection', 'Je ne sais pas']
const PAR_CHEMIN: [string, string][] = [['punaise', 'Punaises de lit'], ['cryog', 'Punaises de lit'], ['souris', 'Souris'], ['derat', 'Rats'], ['rongeur', 'Rats'], ['cafard', 'Cafards ou blattes'], ['fourmi', 'Fourmis'], ['frelon', 'Nid de guêpes ou de frelons'], ['guepe', 'Nid de guêpes ou de frelons'], ['chenille', 'Chenilles processionnaires'], ['pigeon', 'Pigeons'], ['puce', 'Puces'], ['acarien', 'Acariens'], ['anthren', 'Anthrènes ou mites'], ['mite', 'Anthrènes ou mites'], ['desinfect', 'Désinfection']]
const FAMILLES_VILLE = ['punaises-de-lit', 'deratisation', 'souris', 'cafards', 'fourmis', 'puces', 'acariens', 'anthrenes', 'chenilles-processionnaires', 'destruction-nid-frelon']

const joli = (s: string) => s.replace(/^paris-(\d+)$/, (_, n) => `Paris ${n}${n === '1' ? 'er' : 'e'}`).split('-').map((m) => (['sur', 'sous', 'le', 'la', 'les', 'de', 'des', 'en', 'aux'].includes(m) ? m : m.charAt(0).toUpperCase() + m.slice(1))).join('-').replace(/^Paris-/, 'Paris ')
const champ = { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.16)' }

export default function FormulaireDemande() {
  const chemin = usePathname() ?? ''
  const morceaux = chemin.split('/').filter(Boolean)
  const nuisibleDefaut = PAR_CHEMIN.find(([k]) => chemin.includes(k))?.[1] ?? ''
  const villeDefaut = (FAMILLES_VILLE.includes(morceaux[0]) || morceaux[0] === 'zones') && morceaux.length >= 2 && !['val-de-marne', 'paris', 'hauts-de-seine', 'essonne', 'yvelines', 'seine-et-marne', 'seine-saint-denis', 'val-d-oise'].includes(morceaux[morceaux.length - 1]) ? joli(morceaux[morceaux.length - 1]) : ''

  const [nom, setNom] = useState('')
  const [tel, setTel] = useState('')
  const [ville, setVille] = useState(villeDefaut)
  const [nuisible, setNuisible] = useState(nuisibleDefaut)
  const [message, setMessage] = useState('')
  const [erreur, setErreur] = useState('')
  const [ouvert, setOuvert] = useState<'' | 'wa' | 'sms'>('')

  // Nom exact de la ville (accents) lu dans le fil d'Ariane de la page
  useEffect(() => {
    if (!villeDefaut) return
    try {
      for (const el of Array.from(document.querySelectorAll('script[type="application/ld+json"]'))) {
        const d = JSON.parse(el.textContent || '{}')
        const liste = Array.isArray(d['@graph']) ? d['@graph'] : [d]
        const fil = liste.find((x: { '@type'?: string }) => x['@type'] === 'BreadcrumbList')
        const nomVille = fil?.itemListElement?.[fil.itemListElement.length - 1]?.name
        if (nomVille) { setVille((v) => (v === villeDefaut ? nomVille : v)); return }
      }
    } catch { /* on garde le nom tiré de l'adresse */ }
  }, [villeDefaut])

  const texte = () => [
    'Bonjour, je souhaite un devis gratuit.',
    `Nom : ${nom.trim()}`,
    `Téléphone : ${tel.trim()}`,
    `Ville : ${ville.trim()}`,
    `Nuisible : ${nuisible || 'Je ne sais pas'}`,
    message.trim() ? `Détails : ${message.trim()}` : '',
    `(Demande envoyée depuis allonuisibleidf.fr${chemin})`,
  ].filter(Boolean).join('\n')

  function verifier() {
    if (!nom.trim()) return 'Indiquez votre nom.'
    if (tel.replace(/\D/g, '').length < 10) return 'Indiquez un numéro de téléphone à 10 chiffres pour que nous puissions vous rappeler.'
    if (!ville.trim()) return 'Indiquez votre ville ou votre code postal.'
    return ''
  }
  function envoyer(par: 'wa' | 'sms') {
    const e = verifier()
    setErreur(e)
    if (e) return
    const t = encodeURIComponent(texte())
    const url = par === 'wa' ? `https://wa.me/${NUMERO}?text=${t}` : `sms:+${NUMERO}?&body=${t}`
    setOuvert(par)
    window.open(url, par === 'wa' ? '_blank' : '_self')
  }

  return (
    <section id="demande" className="px-4 py-14 md:py-16 scroll-mt-24" style={{ background: '#0b0b0b', borderTop: '1px solid rgba(232,68,26,0.25)' }} aria-labelledby="demande-titre">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#F0562A' }}>Devis gratuit · réponse en 5 minutes · 7j/7</p>
          <h2 id="demande-titre" className="text-2xl md:text-3xl font-black text-white mb-3">Demandez votre devis gratuit</h2>
          <p className="text-white/65">Remplissez ces 4 lignes : votre demande arrive directement sur le téléphone de notre technicien, qui vous rappelle en moins de 5 minutes.</p>
        </div>
        <form className="rounded-2xl p-5 md:p-7 grid gap-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }} onSubmit={(e) => { e.preventDefault(); envoyer('wa') }} noValidate>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <label htmlFor="dm-nom" className="text-sm font-bold text-white">Nom</label>
              <input id="dm-nom" name="nom" autoComplete="name" value={nom} onChange={(e) => setNom(e.target.value)} className="rounded-xl px-4 py-3 text-white placeholder-white/40" style={champ} placeholder="Votre nom" />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="dm-tel" className="text-sm font-bold text-white">Téléphone</label>
              <input id="dm-tel" name="telephone" type="tel" inputMode="tel" autoComplete="tel" value={tel} onChange={(e) => setTel(e.target.value)} className="rounded-xl px-4 py-3 text-white placeholder-white/40" style={champ} placeholder="06 12 34 56 78" />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="dm-ville" className="text-sm font-bold text-white">Ville ou code postal</label>
              <input id="dm-ville" name="ville" autoComplete="address-level2" value={ville} onChange={(e) => setVille(e.target.value)} className="rounded-xl px-4 py-3 text-white placeholder-white/40" style={champ} placeholder="Ex. Créteil, 94000" />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="dm-nuisible" className="text-sm font-bold text-white">Nuisible</label>
              <select id="dm-nuisible" name="nuisible" value={nuisible} onChange={(e) => setNuisible(e.target.value)} className="rounded-xl px-4 py-3 text-white" style={{ ...champ, background: '#1a1a1a' }}>
                <option value="">Choisir</option>
                {NUISIBLES.map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="dm-message" className="text-sm font-bold text-white">Ce que vous avez vu <span className="font-normal text-white/60">(facultatif)</span></label>
            <textarea id="dm-message" name="message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className="rounded-xl px-4 py-3 text-white placeholder-white/40" style={champ} placeholder="Ex. piqûres au réveil depuis une semaine, crottes dans la cuisine, nid sous le toit…" />
          </div>
          {erreur && <p role="alert" className="text-sm font-bold rounded-lg px-3 py-2" style={{ color: '#ffb4a0', background: 'rgba(232,68,26,0.12)' }}>{erreur}</p>}
          <div className="grid sm:grid-cols-2 gap-3">
            <button type="submit" className="inline-flex items-center justify-center gap-2 font-black text-white px-6 py-4 rounded-xl" style={{ background: '#157A40' }}>
              <MessageCircle className="w-5 h-5" aria-hidden="true" /> Envoyer sur WhatsApp
            </button>
            <button type="button" onClick={() => envoyer('sms')} className="inline-flex items-center justify-center gap-2 font-black text-white px-6 py-4 rounded-xl" style={{ background: '#B8330D' }}>
              <Send className="w-5 h-5" aria-hidden="true" /> Envoyer par SMS
            </button>
          </div>
          {ouvert && (
            <p role="status" className="text-sm text-white/80 rounded-lg px-3 py-2" style={{ background: 'rgba(26,143,76,0.15)' }}>
              Votre message est prêt dans {ouvert === 'wa' ? 'WhatsApp' : 'vos SMS'} : appuyez sur « Envoyer » pour nous le transmettre. Vous pouvez y joindre une photo.
            </p>
          )}
          <p className="text-center text-sm text-white/60">
            Vous préférez parler tout de suite ? <a href="tel:+33768077219" className="font-bold text-white underline underline-offset-2 inline-flex items-center gap-1"><Phone className="w-3.5 h-3.5" aria-hidden="true" />07 68 07 72 19</a>
          </p>
        </form>
      </div>
    </section>
  )
}
