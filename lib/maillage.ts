// Liens « dans d'autres villes » en bas des pages villes : 6 villes au plus (voisines d'abord, puis rotation),
// pour que chaque page ne répète pas la liste complète. La liste complète reste sur la page service.
export function villesVoisines<T extends { slug: string; nom: string }>(liste: T[], v: T & { proches: string[] }, n = 6): T[] {
  const autres = liste.filter((x) => x.slug !== v.slug)
  const voisines = autres.filter((x) => v.proches.includes(x.nom))
  const rang = Math.max(0, liste.findIndex((x) => x.slug === v.slug))
  const reste = autres.filter((x) => !voisines.includes(x))
  const tournant = [...reste.slice(rang % Math.max(1, reste.length)), ...reste.slice(0, rang % Math.max(1, reste.length))]
  return [...voisines, ...tournant].slice(0, n)
}

// Première phrase d'un texte : sur les pages villes, les méthodes sont résumées (le détail est sur la page service).
export function premierePhrase(texte: string) {
  const m = texte.match(/^.+?[.!?](?=\s|$)/)
  return m ? m[0] : texte
}
