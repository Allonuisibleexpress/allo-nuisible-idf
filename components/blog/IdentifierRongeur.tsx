'use client'
// Test « Quel animal est chez moi ? » (12/11/2026) : 4 questions, le résultat oriente vers la bonne page.
// Barème qualitatif tiré des guides du blog (crottes, bruits, lieu, saison), pas de statistique.
import { useState } from 'react'

const ACCENT = '#E8441A'
type Animal = 'souris' | 'surmulot' | 'ratnoir' | 'lerot' | 'fouine'

const Q: { q: string; r: { t: string; s: Partial<Record<Animal, number>> }[] }[] = [
  { q: 'Où voyez-vous ou entendez-vous des signes ?', r: [
    { t: 'Cuisine, placards, derrière l’électroménager', s: { souris: 3, ratnoir: 1 } },
    { t: 'Cave, sous-sol, garage, jardin', s: { surmulot: 3, souris: 1 } },
    { t: 'Combles, plafond, toiture', s: { ratnoir: 2, lerot: 2, fouine: 2, souris: 1 } },
    { t: 'Toilettes, canalisations', s: { surmulot: 4 } },
  ] },
  { q: 'Les crottes trouvées ressemblent à…', r: [
    { t: 'Des grains de riz (3 à 6 mm)', s: { souris: 4 } },
    { t: 'Des grains allongés et pointus (6 à 12 mm)', s: { ratnoir: 3, lerot: 2 } },
    { t: 'Des raisins secs, bouts arrondis (environ 2 cm)', s: { surmulot: 4 } },
    { t: 'Des boudins torsadés de plusieurs centimètres', s: { fouine: 4 } },
    { t: 'Je n’en ai pas trouvé', s: {} },
  ] },
  { q: 'Le bruit ressemble plutôt à…', r: [
    { t: 'De tout petits trottinements, grattements légers', s: { souris: 3 } },
    { t: 'Des pas plus appuyés, des grattements forts, un bruit de rongement', s: { surmulot: 2, ratnoir: 3 } },
    { t: 'Des cavalcades, des billes qui roulent, des petits cris aigus', s: { lerot: 3, ratnoir: 1 } },
    { t: 'De gros bruits, des chocs, des cris, une forte odeur', s: { fouine: 4 } },
    { t: 'Je n’entends rien', s: { surmulot: 1 } },
  ] },
  { q: 'À quelle période ?', r: [
    { t: 'Toute l’année, même en hiver', s: { souris: 2, surmulot: 2, ratnoir: 2, fouine: 1 } },
    { t: 'Du printemps à l’automne, plus rien en hiver', s: { lerot: 4 } },
    { t: 'Surtout au printemps et en été, avec beaucoup de bruit', s: { fouine: 3, lerot: 1 } },
  ] },
]

const R: Record<Animal, { nom: string; texte: string; href: string; lien: string }> = {
  souris: { nom: 'Probablement une souris', texte: 'Petites crottes, petits bruits, cuisine et placards : la souris passe par des ouvertures minuscules le long des gaines et des tuyaux. Elle se reproduit très vite : mieux vaut agir tôt.', href: '/services/deratisation', lien: 'Traiter les souris, dès 120 €' },
  surmulot: { nom: 'Probablement un surmulot (rat d’égout)', texte: 'Grosses crottes arrondies, cave, jardin ou canalisations : le surmulot vit au sol et dans les réseaux. Il faut le traiter et boucher ses accès.', href: '/services/deratisation', lien: 'Dératisation, dès 120 €' },
  ratnoir: { nom: 'Probablement un rat noir', texte: 'Crottes pointues et bruits appuyés en hauteur : le rat noir est un grimpeur qui s’installe dans les combles et les faux plafonds.', href: '/services/deratisation', lien: 'Dératisation, dès 120 €' },
  lerot: { nom: 'Probablement un lérot ou un loir', texte: 'Cavalcades et cris dans les combles du printemps à l’automne, silence en hiver : ce sont les signes d’un lérot ou d’un loir, qui hibernent. On ferme surtout les accès à la toiture.', href: '/blog/lerot-grenier-combles', lien: 'Lire notre guide sur le lérot' },
  fouine: { nom: 'Probablement une fouine', texte: 'Gros bruits, cris, crottes torsadées et forte odeur : c’est le profil d’une fouine. Ce n’est pas un rongeur : on ne la dératise pas, on bouche ses accès en dehors de la période des petits.', href: '/blog/guide-des-rongeurs', lien: 'Voir la fiche fouine du guide' },
}

export default function IdentifierRongeur() {
  const [rep, setRep] = useState<number[]>([])
  const fini = rep.length === Q.length
  const score: Record<Animal, number> = { souris: 0, surmulot: 0, ratnoir: 0, lerot: 0, fouine: 0 }
  rep.forEach((r, i) => Object.entries(Q[i].r[r].s).forEach(([a, v]) => { score[a as Animal] += v ?? 0 }))
  const top = (Object.keys(score) as Animal[]).sort((a, b) => score[b] - score[a])[0]
  const box = { background: 'rgba(232,68,26,0.07)', border: '1px solid rgba(232,68,26,0.3)', borderRadius: '18px', padding: '24px 20px', margin: '8px 0 32px' } as const

  return (
    <div style={box} id="test">
      <p style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.08em', color: ACCENT, textAlign: 'center', marginBottom: '6px' }}>Test en 4 questions</p>
      <p style={{ fontSize: '20px', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: '18px' }}>Quel animal est chez moi ?</p>
      {!fini ? (
        <div>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: '8px' }}>Question {rep.length + 1} sur {Q.length}</p>
          <p style={{ fontSize: '17px', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: '14px' }}>{Q[rep.length].q}</p>
          <div style={{ display: 'grid', gap: '10px' }}>
            {Q[rep.length].r.map((r, j) => (
              <button key={j} type="button" onClick={() => setRep([...rep, j])}
                style={{ textAlign: 'left', padding: '13px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.9)', fontSize: '15px', cursor: 'pointer' }}>
                {r.t}
              </button>
            ))}
          </div>
          {rep.length > 0 && (
            <button type="button" onClick={() => setRep(rep.slice(0, -1))} style={{ marginTop: '12px', background: 'none', border: 0, color: 'rgba(255,255,255,0.5)', fontSize: '13px', cursor: 'pointer', textDecoration: 'underline' }}>← Question précédente</button>
          )}
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '22px', fontWeight: 900, color: ACCENT, marginBottom: '10px' }}>{R[top].nom}</p>
          <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'rgba(255,255,255,0.82)', maxWidth: '560px', margin: '0 auto 18px' }}>{R[top].texte}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            <a href={R[top].href} style={{ background: ACCENT, color: '#fff', fontWeight: 800, fontSize: '14px', padding: '12px 22px', borderRadius: '10px', textDecoration: 'none' }}>{R[top].lien}</a>
            <a href="tel:+33768077219" style={{ color: '#fff', fontWeight: 700, fontSize: '14px', padding: '12px 22px', borderRadius: '10px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>Un doute ? 07 68 07 72 19</a>
          </div>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '14px' }}>Ce test donne une orientation. Une photo des crottes sur WhatsApp nous permet de confirmer.</p>
          <button type="button" onClick={() => setRep([])} style={{ marginTop: '8px', background: 'none', border: 0, color: 'rgba(255,255,255,0.55)', fontSize: '13px', cursor: 'pointer', textDecoration: 'underline' }}>Recommencer le test</button>
        </div>
      )}
    </div>
  )
}
