// Tri alphabétique des listes de villes (22/11/2026, demande de l'utilisateur : « classées par ordre alphabétique,
// pas au hasard »). Ordre français, arrondissements dans l'ordre numérique (Paris 2e avant Paris 10e).
export const compareFr = (a: string, b: string) => a.localeCompare(b, 'fr', { numeric: true, sensitivity: 'base' })

export const parNom = <T extends { nom: string }>(liste: T[]): T[] => [...liste].sort((a, b) => compareFr(a.nom, b.nom))

// Liens vers des pages ville (/punaises-de-lit/creteil) : triés d'après le nom de la ville dans l'adresse
const villeDuLien = (href: string) => (href.split('/').pop() ?? href).replace(/-/g, ' ')
export const liensParVille = <T extends { href: string }>(liens: T[]): T[] => [...liens].sort((a, b) => compareFr(villeDuLien(a.href), villeDuLien(b.href)))
