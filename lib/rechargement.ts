// Détection des erreurs de chargement de fichiers JavaScript après une mise en ligne, et rechargement unique (13/11/2026).
// Utilisé par app/error.tsx et app/global-error.tsx.
export function estErreurDeChargement(e: unknown): boolean {
  const err = e as { name?: string; message?: string } | null
  const msg = `${err?.name ?? ''} ${err?.message ?? ''}`
  return /ChunkLoadError|Loading (CSS )?chunk|Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module/i.test(msg)
}

export function rechargerUneFois(): boolean {
  try {
    const cle = 'an-recharge-apres-erreur'
    const derniere = Number(sessionStorage.getItem(cle) || 0)
    if (Date.now() - derniere < 60_000) return false
    sessionStorage.setItem(cle, String(Date.now()))
  } catch {
    // Stockage indisponible (navigation privée stricte) : on recharge quand même, une fois par affichage
  }
  window.location.reload()
  return true
}
