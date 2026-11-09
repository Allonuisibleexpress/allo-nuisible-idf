// Galerie de vrais chantiers sur les pages nuisible + ville (accord de l'utilisateur, 09/11/2026) :
// 4 photos choisies selon la ville parmi celles du nuisible (pages moins semblables entre elles),
// titrée « Nos chantiers en Île-de-France » (chaque légende garde la vraie ville du chantier), chargement différé.
import PhotosChantiers from '@/components/PhotosChantiers'
import type { PhotoKey } from '@/lib/photos-chantiers'
import type { FamilleVille } from '@/lib/services-ville'

const POOL: Partial<Record<FamilleVille, PhotoKey[]>> = {
  punaises: ['vincennesMortes1', 'vincennesMortes2', 'creteilLattes1', 'creteilLattes2', 'cryoFoyer', 'cryoSalle', 'litCryo', 'litEnfant'],
  deratisation: ['ratDiogene', 'trouRat1', 'trouRat2', 'trouRat3', 'ratPiege', 'ratPlaque', 'rongeursGlu'],
  souris: ['sourisAirbnb', 'sourisGlu', 'rongeursGlu', 'ratPiege', 'trouRat1', 'ratPlaque'],
  cafards: ['cafardsSol', 'cafardsTiroir', 'cafardsTiroir2', 'cafardsMeuble'],
  frelons: ['frelonsPerche', 'frelonsPorte', 'frelonsArbre', 'frelonsAsiatiques', 'frelonsEcoleTech', 'frelonsEcoleNid', 'frelonsBuissonTech', 'nidGuepes', 'toit'],
}
const LABEL: Partial<Record<FamilleVille, string>> = {
  punaises: 'de punaises de lit', deratisation: 'de dératisation', souris: 'contre les souris', cafards: 'contre les cafards', frelons: 'de destruction de nids',
}

export default function GalerieChantiersVille({ famille, slug, a, exclure = [] }: { famille: FamilleVille; slug: string; a: string; exclure?: PhotoKey[] }) {
  const pool = (POOL[famille] ?? []).filter((p) => !exclure.includes(p))
  if (pool.length < 2) return null
  const h = slug.split('').reduce((x, c) => (x * 31 + c.charCodeAt(0)) >>> 0, 13)
  const d = h % pool.length
  const photos = [...pool.slice(d), ...pool.slice(0, d)].slice(0, 4)
  return (
    <PhotosChantiers photos={photos} fond="#0b0b0b"
      titre={`Nos chantiers ${LABEL[famille] ?? ''} en Île-de-France`}
      intro={`Photos prises par nos techniciens sur de vraies interventions, près de chez vous. Chaque légende indique la ville du chantier. Nous intervenons ${a} avec les mêmes méthodes.`} />
  )
}
