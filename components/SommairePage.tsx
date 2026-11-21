'use client'
// Sommaire cliquable « Dans cette page » (22/11/2026, demande de l'utilisateur) : pastilles numérotées qui mènent
// directement à chaque partie de la page. Un seul composant pour tout le site (placé dans app/layout.tsx) :
// il lit les titres H2 de la page, leur donne une ancre, fabrique un libellé court et s'insère juste sous « En bref »
// (ou sous le haut de page). Les listes de liens (villes, articles, guides) et les appels à l'action sont ignorés.
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'

type Entree = { id: string; label: string }

// Titres à ne pas mettre dans le sommaire (listes de liens, formulaires, bas de page)
const IGNORER = /liens rapides|^nos services$|zones couvertes|demandez votre devis|on intervient dès|appelez-nous|^en bref$/i

// Libellés courts, du plus précis au plus général (premier qui correspond)
const REGLES: [RegExp, string][] = [
  [/vidéo/i, 'Vidéos'],
  [/articles|aller plus loin|à lire aussi/i, 'Articles'],
  [/nos guides|guides pour|guide sur/i, 'Guides'],
  [/toutes nos villes|par ville|villes les plus|trouvez votre ville/i, 'Villes'],
  [/par département/i, 'Départements'],
  [/autres interventions|nos autres/i, 'Autres services'],
  [/autour de/i, 'Autour de chez vous'],
  [/devis gratuit|le prix avant|devis sur mesure/i, 'Devis gratuit'],
  [/prix|tarif|dès \d/i, 'Prix'],
  [/qui doit agir|qui paie|qui contacter/i, 'Qui paie ?'],
  [/mairie/i, 'Mairie'],
  [/question/i, 'Questions'],
  [/confiance|nos clients|ils en parlent|avis/i, 'Avis clients'],
  [/sans insecticide|écologique|sans produit|sans aucun biocide/i, 'Sans produit chimique'],
  [/deux passages|2 passages/i, '2 passages'],
  [/préparer/i, 'Préparation'],
  [/erreurs/i, 'Erreurs à éviter'],
  [/piqûre/i, 'Piqûres'],
  [/signes/i, 'Signes'],
  [/conséquences|danger/i, 'Risques'],
  [/ne pas confondre|ou frelon|asiatique ou|reconna|identifier|chaque âge|chaque stade/i, 'Reconnaître'],
  [/saison/i, 'Saison'],
  [/hôtel|location|foyer/i, 'Hôtels, locations'],
  [/protocole|étape par étape|comment ça se passe|comment nous intervenons|notre intervention|pourquoi dératiser avant/i, 'Déroulement'],
  [/vapeur|cryogénie|comment nous traitons|traitement/i, 'Traitement'],
  [/situations|cas que nous|là où nous|les cas/i, 'Cas fréquents'],
  [/constatons|voyons|terrain|enquête|retour sur le chantier/i, 'Sur le terrain'],
  [/c'est quoi|c’est quoi|pourquoi les rats|ce qu.il faut savoir|ce que nous savons|guide complet/i, 'Comprendre'],
  [/photos|images/i, 'Photos'],
  [/chantier|avant \/ après/i, 'Nos interventions en vidéo'],
  [/à la traque/i, 'Nos services'],
  [/dans votre ville/i, 'Votre ville'],
  [/qui sommes-nous/i, 'Qui sommes-nous'],
  [/différence/i, 'Avant / après'],
  [/rendez-vous/i, 'Rendez-vous'],
  [/distingue|pourquoi choisir|pourquoi faire appel|une entreprise locale/i, 'Pourquoi nous'],
  [/nuisibles que nous traitons/i, 'Nuisibles traités'],
]

function libelle(texte: string): string {
  // Partie consacrée à la ville (« ce que nous voyons à Maisons-Alfort ») : « Pourquoi Maisons-Alfort »
  const ville = texte.match(/(?:voyons à|savons de|savoir sur) ([A-ZÉÈÎ][^:,?]+)$/)
  if (ville) return `Pourquoi ${ville[1].trim()}`
  for (const [re, l] of REGLES) if (re.test(texte)) return l
  // Sinon : la partie après « : » (ou le titre), limitée à 3 mots
  const t = (texte.includes(':') ? texte.split(':').slice(1).join(':') : texte).trim()
  const mots = t.replace(/[?!.]+$/, '').split(/\s+/).slice(0, 3).join(' ')
  return mots.charAt(0).toUpperCase() + mots.slice(1)
}

const ancre = (t: string) =>
  t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60)

export default function SommairePage() {
  const chemin = usePathname()
  const [cible, setCible] = useState<HTMLElement | null>(null)
  const [entrees, setEntrees] = useState<Entree[]>([])

  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return
    const vus = new Set<string>()
    const liste: Entree[] = []
    Array.from(main.querySelectorAll('h2')).forEach((h) => {
      if (h.closest('form, footer, [data-sans-sommaire]')) return
      const texte = (h.textContent ?? '').replace(/\s+/g, ' ').trim()
      if (!texte || IGNORER.test(texte)) return
      // Appel à l'action en fin de page (« Des rats à Maisons-Alfort ? ») : ignoré
      if (/\?$/.test(texte) && /^(des|un|une|nid de)\b/i.test(texte) && texte.split(' ').length < 9) return
      const label = libelle(texte)
      if (vus.has(label)) return
      vus.add(label)
      if (!h.id) h.id = ancre(texte)
      h.style.scrollMarginTop = '130px'
      liste.push({ id: h.id, label })
    })
    if (liste.length < 4) return
    // Emplacement : juste après la section « En bref », sinon après le haut de page
    const enBref = Array.from(main.querySelectorAll('h2, p')).find((e) => (e.textContent ?? '').trim() === 'En bref')
    const apres = (enBref?.closest('section') as HTMLElement | null) ?? (main.querySelector(':scope > section') as HTMLElement | null)
    if (!apres?.parentElement) return
    const conteneur = document.createElement('div')
    conteneur.setAttribute('data-sommaire', '')
    apres.parentElement.insertBefore(conteneur, apres.nextSibling)
    setEntrees(liste.slice(0, 24))
    setCible(conteneur)
    return () => { conteneur.remove(); setCible(null) }
  }, [chemin])

  if (!cible || !entrees.length) return null
  return createPortal(
    <nav aria-label="Dans cette page" className="px-4 py-8" style={{ background: '#0b0b0b' }}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs font-black uppercase tracking-[.18em] mb-4" style={{ color: '#F0562A' }}>Dans cette page : cliquez pour y aller</p>
        <ol className="flex flex-wrap justify-center gap-2.5 list-none p-0 m-0">
          {entrees.map((e, i) => (
            <li key={e.id}>
              <a href={`#${e.id}`}
                className="group inline-flex items-center gap-2 rounded-full pl-1.5 pr-4 py-1.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.03)' }}>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-[11px] font-black text-white" style={{ background: '#B8330D' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {e.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>,
    cible,
  )
}
