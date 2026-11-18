// Villes les plus recherchées (Search Console, 17/11/2026) : liens à ancre exacte depuis l'accueil et les pages services,
// pour renforcer les pages ville qui ont reculé pendant la mise à jour Google de novembre 2026.
// Liste courte et volontairement limitée (pas de bloc de mots-clés) : à revoir avec la Search Console.
import { VILLES_DERATISATION } from './villes-deratisation'
import { VILLES_PUNAISES } from './villes-punaises'

const DERAT = ['paris-16', 'vincennes', 'cachan', 'villejuif', 'paris-20', 'rueil-malmaison', 'courbevoie', 'colombes', 'clichy', 'nanterre', 'paris-12', 'charenton-le-pont']
const PUNAISES = ['ivry-sur-seine', 'paris-19', 'paris-10', 'maisons-alfort', 'charenton-le-pont', 'choisy-le-roi']

const nomCourt = (nom: string) => nom.replace(/^Paris (\d+)e$/, 'Paris $1e')

export const DERAT_DEMANDEES = DERAT.map((s) => VILLES_DERATISATION.find((v) => v.slug === s)).filter(Boolean)
  .map((v) => ({ href: `/deratisation/${v!.slug}`, label: `Dératisation ${nomCourt(v!.nom)}` }))

export const PUNAISES_DEMANDEES = PUNAISES.map((s) => VILLES_PUNAISES.find((v) => v.slug === s)).filter(Boolean)
  .map((v) => ({ href: `/punaises-de-lit/${v!.slug}`, label: `Punaises de lit ${nomCourt(v!.nom)}` }))
