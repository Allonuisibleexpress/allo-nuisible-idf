// Pages « prix par nuisible » (/tarifs/[nuisible], 20/11/2026, demande de l'utilisateur : une page de prix par
// nuisible comme Express, « bien remplie, au moins 3 000 à 4 000 mots », sans trop copier).
// Prix : uniquement ceux de /tarifs (« dès X € » ou « sur devis »). Aucun chiffre inventé. Pas de tiret long.
// Biocides : jamais « naturel », « non toxique », « sans danger » ; « écologique » réservé aux méthodes sans biocide.
export type Bloc = { t: string; x: string }
export type PagePrix = {
  slug: string
  nom: string // « punaises de lit »
  titreSeo: string // 40 à 60 caractères
  description: string
  h1: string
  prixDes: string // « 290 € » ou « 89 € »
  garantie: string // « 1 an » ou « 3 mois »
  service: string // page service
  famille?: string // base des pages ville (/punaises-de-lit)
  depBase?: string // base des pages département, si elles existent
  intro: string[]
  enBref: { q: string; r: string }[]
  grille: { situation: string; prix: string; inclus: string }[]
  inclus: string[]
  nonInclus: string[]
  facteurs: Bloc[]
  methodes: { titre: string; intro: string; lignes: { methode: string; quand: string; prix: string }[]; apres: string[] }
  exemples: Bloc[]
  soiMeme: string[]
  economiser: Bloc[]
  quiPaie: string[]
  deroule: Bloc[]
  pieges: string[]
  faq: { q: string; a: string }[]
  guides: { href: string; label: string }[]
  // Sections longues propres à chaque nuisible (lib/prix-nuisibles/complements.ts)
  complements?: { titre: string; paras: string[] }[]
}
