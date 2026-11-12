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

// Maillage garanti (12/11/2026) : chaque élément reçoit au moins `min` liens.
// On part d'une liste de base par élément (ex. ses voisins les plus proches), puis chaque élément
// qui reçoit trop peu de liens est ajouté aux listes des éléments qui lui sont le plus proches.
// Résultat mémorisé par liste : calcul fait une seule fois à la compilation.
const CACHE = new WeakMap<object, Map<string, string[]>>()
export function maillageGaranti<T extends { slug: string }>(
  liste: T[], base: (x: T) => string[], proches: (x: T) => string[], min = 10, max = 18,
): Map<string, string[]> {
  const deja = CACHE.get(liste)
  if (deja) return deja
  const L = new Map(liste.map((x) => [x.slug, base(x).filter((s) => s !== x.slug)]))
  const recus = new Map(liste.map((x) => [x.slug, 0]))
  L.forEach((v) => v.forEach((s) => recus.set(s, (recus.get(s) ?? 0) + 1)))
  // Les éléments les moins reliés passent en premier
  const ordre = [...liste].sort((a, b) => (recus.get(a.slug) ?? 0) - (recus.get(b.slug) ?? 0))
  for (const x of ordre) {
    if ((recus.get(x.slug) ?? 0) >= min) continue
    for (const p of proches(x)) {
      if ((recus.get(x.slug) ?? 0) >= min) break
      const l = L.get(p)
      if (!l || p === x.slug || l.includes(x.slug) || l.length >= max) continue
      l.push(x.slug); recus.set(x.slug, (recus.get(x.slug) ?? 0) + 1)
    }
  }
  CACHE.set(liste, L)
  return L
}
