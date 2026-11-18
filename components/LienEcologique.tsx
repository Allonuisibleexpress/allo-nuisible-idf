// Lien vers l'offre écologique depuis les pages ville et département (18/11/2026) : maillage vers les pages
// « dératisation écologique » et « traitements sans produit chimique ». Seulement pour les nuisibles où une méthode
// sans biocide existe réellement (pas de cafards, fourmis, puces ni frelons). Les punaises de lit ont déjà leur lien
// vers la cryogénie (components/CryoPunaisesLien.tsx).
const VERT = '#3FB27F'
const h = (s: string) => s.split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 11)

const OFFRES: Record<string, { href: string; ancre: string; phrases: ((a: string) => string)[] }> = {
  '/deratisation': { href: '/services/deratisation-ecologique', ancre: 'Dératisation écologique, sans raticide ni poison', phrases: [
    (a) => `Vous ne voulez aucun poison ${a} ? Nous proposons aussi une dératisation écologique : piège multicapture Ekomille, pièges mécaniques ou connectés, et accès rebouchés.`,
    (a) => `Enfants, chien, chat ou jardin ${a} : la dératisation peut se faire sans raticide, avec des pièges et le colmatage des passages.`,
    (a) => `${a.charAt(0).toUpperCase() + a.slice(1)}, nous traitons aussi les rats et les souris sans aucun poison : capture par pièges, puis rebouchage des entrées.`,
  ] },
  '/souris': { href: '/services/deratisation-ecologique', ancre: 'Traitement écologique des souris, sans raticide', phrases: [
    (a) => `Des souris ${a}, mais aucun poison à la maison ? Pièges mécaniques ou connectés et rebouchage des passages : c’est notre méthode sans raticide.`,
    (a) => `${a.charAt(0).toUpperCase() + a.slice(1)}, nous pouvons capturer les souris sans raticide, puis fermer leurs accès : pas de souris qui meurt dans une cloison.`,
  ] },
  '/acariens': { href: '/services/traitements-sans-produit-chimique', ancre: 'Nos traitements écologiques, sans produit chimique', phrases: [
    (a) => `Notre traitement des acariens ${a} peut être entièrement écologique : vapeur sèche ou cryogénie, aucun produit déposé dans la literie.`,
    (a) => `${a.charAt(0).toUpperCase() + a.slice(1)}, matelas, canapés et tapis peuvent être traités sans aucun produit, par la chaleur ou le froid.`,
  ] },
  '/anthrenes': { href: '/services/traitements-sans-produit-chimique', ancre: 'Nos traitements écologiques, sans produit chimique', phrases: [
    (a) => `Les anthrènes ${a} se traitent souvent sans insecticide : aspiration, vapeur sèche et cryogénie sur les tapis et les lainages.`,
    (a) => `${a.charAt(0).toUpperCase() + a.slice(1)}, nous pouvons traiter tapis, dressings et literie en plumes sans aucun produit, par le froid ou la chaleur.`,
  ] },
  '/chenilles-processionnaires': { href: '/services/traitements-sans-produit-chimique', ancre: 'Nos traitements écologiques, sans produit chimique', phrases: [
    (a) => `Contre les chenilles processionnaires ${a}, nous intervenons sans produit : retrait des nids et écopièges autour des troncs.`,
  ] },
}

export default function LienEcologique({ basePath, slug, a }: { basePath: string; slug: string; a: string }) {
  const o = OFFRES[basePath]
  if (!o) return null
  const phrase = o.phrases[h(slug) % o.phrases.length](a)
  return (
    <div className="max-w-3xl mx-auto mb-10 rounded-2xl px-6 py-5 text-center" style={{ background: 'rgba(63,178,127,0.07)', border: '1px solid rgba(63,178,127,0.3)' }}>
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: VERT }}>Option écologique : aucun biocide déposé</p>
      <p className="text-white/80 text-sm leading-relaxed">{phrase}</p>
      <a href={o.href} className="inline-block mt-3 font-bold underline underline-offset-4" style={{ color: VERT }}>{o.ancre}</a>
    </div>
  )
}
