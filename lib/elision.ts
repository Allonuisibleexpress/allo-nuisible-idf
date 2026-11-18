// « de » + nom de ville avec la bonne élision (18/11/2026) : d'Orly, du Perreux-sur-Marne, des Mureaux, de La Garenne-Colombes.
export function deVille(nom: string): string {
  if (/^Le /.test(nom)) return `du ${nom.slice(3)}`
  if (/^Les /.test(nom)) return `des ${nom.slice(4)}`
  // Cours d'eau (« La Seine », « La Marne ») ; une ville comme La Garenne-Colombes garde sa majuscule
  if (/^La (Seine|Marne|Bièvre|Dhuis|Yerres|Mauldre|Vesgre|Juine|Rémarde|Morée)/.test(nom)) return `de la ${nom.slice(3)}`
  if (/^L’|^L'/.test(nom)) return `de ${nom}`
  if (/^[AEIOUYÉÈÊÎÔ]/i.test(nom) && !/^H/i.test(nom)) return `d’${nom}`
  return `de ${nom}`
}
