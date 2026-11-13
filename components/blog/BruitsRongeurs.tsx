// « Quel bruit, quel animal ? » (12/11/2026) : bruits entendus dans les murs, cloisons et plafonds.
// Intensité indicative (1 à 5) pour comparer les animaux entre eux, pas une mesure.
// Enregistrements réels : cris de lérot, Wikimedia Commons (CC BY-SA 4.0), métadonnées retirées.
const ACCENT = '#E8441A'

type Bruit = { nom: string; niveau: number; entend: string; ou: string; quand: string; sons?: { src: string; legende: string; credit: string; page: string }[] }

export const BRUITS: Record<string, Bruit> = {
  souris: { nom: 'Souris', niveau: 1, entend: 'Tout petits trottinements rapides, grattements légers et fins, parfois un léger grignotage. La plupart de ses cris sont des ultrasons que l’oreille humaine n’entend pas.', ou: 'Cloisons, doublages, derrière les meubles de cuisine, faux plafonds', quand: 'La nuit et au petit matin, toute l’année' },
  ratnoir: { nom: 'Rat noir', niveau: 3, entend: 'Pas plus appuyés et plus espacés, grattements nets, bruit de rongement sur le bois ou les gaines, couinements lors des bagarres.', ou: 'En hauteur : combles, plafonds, toitures', quand: 'La nuit, toute l’année' },
  surmulot: { nom: 'Surmulot (rat d’égout)', niveau: 3, entend: 'Grattements lourds, bruit de creusement, rongement, objets déplacés. Rarement dans les plafonds : il vit au sol.', ou: 'Caves, vides sanitaires, bas des murs, sous les planchers', quand: 'La nuit, toute l’année' },
  lerot: { nom: 'Lérot', niveau: 4, entend: 'Cavalcades bruyantes, comme des billes qui roulent, grattements, petits cris aigus et grognements bien audibles.', ou: 'Combles, greniers, entre toiture et isolant', quand: 'La nuit, du printemps à l’automne ; silence en hiver car il hiberne', sons: [
    { src: '/sons/lerot-cri-2.mp3', legende: 'Cri de lérot (7 secondes)', credit: 'Christian Bolz', page: 'https://commons.wikimedia.org/wiki/File:Gartenschl%C3%A4fer-Ruf_(lauter).ogg' },
    { src: '/sons/lerot-cri-1.mp3', legende: 'Cris et sons de lérot (45 secondes)', credit: 'Nahefoto', page: 'https://commons.wikimedia.org/wiki/File:Laute_Eliomys_quercinus.ogg' },
  ] },
  loir: { nom: 'Loir gris', niveau: 4, entend: 'Courses et chutes d’objets dans les combles, grattements, cris, et un claquement de dents rapide quand il se sent menacé.', ou: 'Combles des maisons proches des bois et des parcs', quand: 'La nuit, de la fin du printemps à l’automne ; silence en hiver car il hiberne' },
  fouine: { nom: 'Fouine (pas un rongeur)', niveau: 5, entend: 'Gros bruits sourds, cavalcades, chocs, cris et feulements, surtout pendant la période des accouplements et quand elle élève ses petits. Souvent avec une forte odeur.', ou: 'Combles, isolant, toiture, parfois sous le capot des voitures', quand: 'La nuit, toute l’année, avec des pics au printemps et en été' },
}

function Niveau({ n }: { n: number }) {
  return (
    <span aria-label={`Intensité ${n} sur 5`} style={{ display: 'inline-flex', gap: '3px', alignItems: 'flex-end' }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ width: '7px', height: `${6 + i * 4}px`, borderRadius: '2px', background: i <= n ? ACCENT : 'rgba(255,255,255,0.15)' }} />
      ))}
    </span>
  )
}

export default function BruitsRongeurs({ animaux }: { animaux?: string[] }) {
  const liste = (animaux ?? Object.keys(BRUITS)).map((k) => BRUITS[k]).filter(Boolean)
  return (
    <div style={{ display: 'grid', gap: '14px', margin: '8px 0 28px' }}>
      {liste.map((b) => (
        <div key={b.nom} style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '18px 18px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
            <p style={{ fontSize: '17px', fontWeight: 800, color: '#fff', margin: 0 }}>{b.nom}</p>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>Bruit <Niveau n={b.niveau} /></span>
          </div>
          <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'rgba(255,255,255,0.82)', margin: '0 0 8px' }}>{b.entend}</p>
          <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', margin: 0 }}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Où :</strong> {b.ou}<br /><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Quand :</strong> {b.quand}</p>
          {b.sons?.map((s) => (
            <div key={s.src} style={{ marginTop: '12px' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, color: ACCENT, margin: '0 0 6px' }}>Écouter : {s.legende}</p>
              <audio controls preload="none" src={s.src} style={{ width: '100%' }} />
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '4px 0 0' }}>Enregistrement : {s.credit}, <a href={s.page} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>CC BY-SA 4.0</a>, Wikimedia Commons</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
