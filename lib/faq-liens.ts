// Lien de redirection sous chaque réponse de FAQ (19/11/2026, demande de l'utilisateur : « dès qu'il y a une FAQ,
// rediriger le client vers sa demande, avec un lien précis du secteur où il est et du nuisible recherché », « bien fait »).
// Règle : on lit l'INTENTION de la question (jamais la réponse) ; mots entiers seulement ; un sujet précis n'est relié
// qu'au bon nuisible ; pas de lien vers la page courante ; s'il n'y a pas de lien vraiment utile, aucun lien.
// Fonction pure (client et serveur). L'existence d'une page ville est vérifiée par « existe » (lib/villes-famille).
import { prixSlug, PRIX_LABELS } from './prix-liens'
export type LienFaq = { href: string; label: string }
export type CtxFaq = {
  page?: string // page courante
  base?: string // famille de la page (« /deratisation ») ou du sujet de l'article
  slug?: string // ville de la page
  a?: string // « à Créteil »
  dep?: { slug: string; dans: string } // département de la page
  existe?: (base: string, slug: string) => boolean
}

type Nuisible = { re: RegExp; base: string | null; service: string; nom: string; le: string }
const N: Nuisible[] = [
  { re: /\bpunaises?\b/i, base: '/punaises-de-lit', service: '/services/punaises-de-lit', nom: 'Punaises de lit', le: 'les punaises de lit' },
  { re: /\bsouris\b/i, base: '/souris', service: '/services/deratisation', nom: 'Souris', le: 'les souris' },
  { re: /\brats?\b|dératis|\brongeurs?\b|surmulot/i, base: '/deratisation', service: '/services/deratisation', nom: 'Dératisation', le: 'les rats et les souris' },
  { re: /\bcafards?\b|\bblattes?\b/i, base: '/cafards', service: '/services/cafards-blattes', nom: 'Cafards', le: 'les cafards' },
  { re: /\bfourmis?\b/i, base: '/fourmis', service: '/services/fourmis', nom: 'Fourmis', le: 'les fourmis' },
  { re: /\bpuces?\b/i, base: '/puces', service: '/services/puces', nom: 'Puces', le: 'les puces' },
  { re: /\bacariens?\b/i, base: '/acariens', service: '/services/acariens', nom: 'Acariens', le: 'les acariens' },
  { re: /\banthr[eè]nes?\b/i, base: '/anthrenes', service: '/services/anthrenes', nom: 'Anthrènes', le: 'les anthrènes' },
  { re: /\bfrelons?\b|\bguêpes?\b|\bguepes?\b/i, base: '/destruction-nid-frelon', service: '/services/guepes-frelons', nom: 'Nid de guêpes ou de frelons', le: 'les nids de guêpes et de frelons' },
  { re: /\bchenilles?\b/i, base: '/chenilles-processionnaires', service: '/services/chenilles-processionnaires', nom: 'Chenilles processionnaires', le: 'les chenilles processionnaires' },
  { re: /\bpigeons?\b/i, base: null, service: '/services/pigeons', nom: 'Dépigeonnage', le: 'les pigeons' },
]
const PAR_BASE = (b?: string) => N.find((x) => x.base === b)
const nuisibleDe = (t: string) => N.find((x) => x.re.test(t))

// Sujets précis : reliés seulement si la famille correspond
const RONGEURS = ['/deratisation', '/souris']
// Familles qui ont une page par département (lib/departements-services.ts)
const AVEC_DEP = ['/deratisation', '/punaises-de-lit', '/destruction-nid-frelon', '/cafards', '/puces', '/souris']
const SUJETS: { re: RegExp; fam: string[]; href: string; label: string }[] = [
  { re: /voiture|câbles?|moteur|capot/, fam: RONGEURS, href: '/blog/rongeur-moteur-voiture-cables', label: 'Câbles de voiture rongés : que faire ?' },
  { re: /toilettes?|\bwc\b|cuvette|siphon/, fam: RONGEURS, href: '/blog/rat-dans-les-toilettes', label: 'Rat dans les toilettes : que faire ?' },
  { re: /vide sanitaire|sous le plancher/, fam: RONGEURS, href: '/blog/rat-vide-sanitaire', label: 'Rat dans le vide sanitaire' },
  { re: /combles?|grenier|toiture|plafond/, fam: RONGEURS, href: '/blog/rats-dans-les-combles', label: 'Rats dans les combles' },
  { re: /\bmurs?\b|cloisons?|gratt|\bbruits?\b/, fam: RONGEURS, href: '/blog/rat-dans-les-murs-cloisons', label: 'Rats et souris dans les murs' },
  { re: /jardin|terriers?|trou dans/, fam: RONGEURS, href: '/blog/trou-dans-le-jardin', label: 'Un trou dans le jardin : rat ou autre ?' },
  { re: /compost/, fam: RONGEURS, href: '/blog/rat-compost', label: 'Rats et compost' },
  { re: /par où|\bentrent\b|\bentrer\b|passages? |reboucher|\bboucher\b/, fam: RONGEURS, href: '/blog/souris-par-ou-entrent-elles', label: 'Par où entrent les souris et les rats' },
  { re: /crottes?|reconna|différence|distinguer/, fam: RONGEURS, href: '/blog/rat-ou-souris-comment-reconnaitre', label: 'Rat ou souris : comment les reconnaître' },
  { re: /berges?|marne|seine|canal|égouts?|canalisations?/, fam: ['/deratisation'], href: '/blog/rat-mode-de-vie', label: 'Le mode de vie du rat' },
  { re: /mort-aux-rats|raticide|poison/, fam: RONGEURS, href: '/blog/deratisation-sans-mort-aux-rats', label: 'Dératisation sans mort-aux-rats' },
  { re: /piqûres?|piqures?|boutons?|démange/, fam: ['/punaises-de-lit'], href: '/blog/piqures-de-punaises-de-lit', label: 'Piqûres de punaises de lit en photos' },
  { re: /vêtements?|linge|valises?|bagages?/, fam: ['/punaises-de-lit'], href: '/blog/traiter-vetements-punaises-de-lit', label: 'Traiter ses vêtements contre les punaises' },
  { re: /courte durée|airbnb|location|\bloue\b/, fam: ['/punaises-de-lit'], href: '/blog/punaises-de-lit-airbnb-location-courte-duree', label: 'Punaises de lit en location courte durée' },
  { re: /courte durée|airbnb|location|\bloue\b|gîte/, fam: ['/souris'], href: '/blog/souris-airbnb-saint-maur-des-fosses', label: 'Souris dans un Airbnb : notre intervention' },
  { re: /vacances|voyage|gares?|métro|\brer\b|transports?|hôtel|attrape|ramené/, fam: ['/punaises-de-lit'], href: '/blog/comment-attrape-t-on-des-punaises-de-lit', label: 'Comment attrape-t-on des punaises de lit ?' },
  { re: /vapeur/, fam: ['/punaises-de-lit', '/acariens', '/anthrenes'], href: '/blog/vapeur-seche-punaises-de-lit', label: 'La vapeur sèche, principe et limites' },
  { re: /froid|congél|cryog/, fam: ['/punaises-de-lit'], href: '/blog/cryogenie-punaises-de-lit', label: 'Le froid tue-t-il les punaises de lit ?' },
  { re: /insecticide|bombe/, fam: ['/punaises-de-lit'], href: '/blog/insecticide-punaises-de-lit', label: 'L’insecticide contre les punaises de lit' },
  { re: /matelas|sommier|lattes?/, fam: ['/punaises-de-lit'], href: '/blog/punaises-de-lit-creteil-sommier-lattes', label: 'Punaises cachées dans le sommier : nos photos' },
  { re: /cycle|œufs?|oeufs?|stades?|larves?|pondent|deux passages|2 passages/, fam: ['/punaises-de-lit'], href: '/blog/cycle-de-vie-punaise-de-lit', label: 'Le cycle de vie de la punaise de lit' },
  { re: /cycle|œufs?|oeufs?|stades?|larves?|cocons?/, fam: ['/puces'], href: '/blog/cycle-de-vie-puce', label: 'Le cycle de vie de la puce' },
  { re: /cycle|œufs?|larves?|stades?|nymphe/, fam: ['/anthrenes'], href: '/blog/cycle-de-vie-anthrene', label: 'Le cycle de vie de l’anthrène' },
  { re: /reprodu|portées?/, fam: ['/deratisation'], href: '/blog/reproduction-des-rats', label: 'La reproduction des rats' },
  { re: /hiver|nid vide|réutilis/, fam: ['/destruction-nid-frelon'], href: '/blog/nid-de-frelon-en-hiver', label: 'Que devient un nid de frelons en hiver ?' },
  { re: /cheminée/, fam: ['/destruction-nid-frelon'], href: '/blog/nid-frelons-cheminee-nogent-sur-marne', label: 'Nid de frelons dans une cheminée : notre intervention' },
  { re: /hauteur|perche|nacelle|arbre/, fam: ['/destruction-nid-frelon'], href: '/blog/nid-frelons-asiatiques-12-metres-nacelle-champigny-sur-marne', label: 'Nid à 12 mètres : intervention à la nacelle' },
  { re: /asiatique|européen|reconna|différence/, fam: ['/destruction-nid-frelon'], href: '/blog/frelon-asiatique-tout-savoir', label: 'Tout savoir sur le frelon asiatique' },
  { re: /\bgel\b|appât|ne marche pas|résist/, fam: ['/cafards'], href: '/blog/gel-anti-cafard-ne-marche-pas', label: 'Pourquoi le gel anti-cafard ne marche pas' },
  { re: /reines?|colonies?|volantes?|espèces?/, fam: ['/fourmis'], href: '/fourmis', label: 'Les espèces de fourmis et leurs reines' },
  { re: /humidit|literie|allerg/, fam: ['/acariens'], href: '/blog/acariens-humidite-maison', label: 'Acariens et humidité : les bons gestes' },
  { re: /\bpins?\b|chênes?|processions?|\bpoils?\b/, fam: ['/chenilles-processionnaires'], href: '/blog/chenilles-processionnaires-cycle-dangers', label: 'Chenilles processionnaires : cycle et dangers' },
]

export function lienFaq(q: string, _rep: string, ctx: CtxFaq = {}): LienFaq | null {
  const t = q.toLowerCase()
  const ok = (l: LienFaq | null | undefined) => (l && l.href.split('#')[0] !== (ctx.page ?? '').split('#')[0] ? l : null)
  const first = (...l: (LienFaq | null | undefined)[]) => { for (const x of l) { const y = ok(x); if (y) return y } return null }
  const nq = nuisibleDe(t)
  const fam = ctx.base ?? nq?.base ?? undefined
  const famN = PAR_BASE(fam)
  const villeDe = (base: string) => (ctx.slug && ctx.existe?.(base, ctx.slug) ? `${base}/${ctx.slug}` : null)

  // 1. Un autre nuisible que celui de la page : ce nuisible dans la même ville si la page existe
  if (nq && (ctx.base || ctx.slug) && nq.base !== ctx.base && !(ctx.base && RONGEURS.includes(ctx.base) && nq.base && RONGEURS.includes(nq.base))) {
    const v = nq.base ? villeDe(nq.base) : null
    const l = first(v ? { href: v, label: `${nq.nom} ${ctx.a ?? ''}`.trim() } : null, { href: nq.service, label: `Notre traitement : ${nq.le}` })
    if (l) return l
  }
  // 2. Détection canine
  if (/canine|chien renifl/.test(t)) { const l = first({ href: '/blog/detection-canine-punaises-de-lit', label: 'La détection canine des punaises de lit' }); if (l) return l }
  // 3. Sans produit, écologique, enfants, animaux
  if (/écolog|ecolog|sans produit|sans insecticide|sans raticide|sans poison|chimique|biocide|bébé|bebe|\benfants?\b|animaux|\bchats?\b|\bchiens?\b/.test(t)) {
    const r = fam && RONGEURS.includes(fam)
    const l = first(fam === '/punaises-de-lit' ? { href: '/services/cryogenie-punaises-de-lit', label: 'Traitement écologique des punaises de lit (cryogénie)' }
      : r ? { href: '/services/deratisation-ecologique', label: 'Dératisation écologique, sans raticide' }
      : { href: '/services/traitements-sans-produit-chimique', label: 'Nos traitements sans produit chimique' })
    if (l) return l
  }
  // 4. Prix
  if (/\bprix\b|coût|coûte|\btarifs?\b|\bdevis\b|\bcher\b|\bttc\b/.test(t)) {
    const ps = prixSlug(nq?.base ?? fam ?? famN?.service ?? '')
    const l = first(ps ? { href: `/tarifs/${ps}`, label: `Prix ${PRIX_LABELS[ps]} : le détail` } : null, { href: '/tarifs', label: 'Tous nos tarifs, nuisible par nuisible' }); if (l) return l
  }
  // 5. Sujet précis, pour le bon nuisible
  for (const x of SUJETS) if (fam && x.fam.includes(fam) && x.re.test(t)) { const l = first({ href: x.href, label: x.label }); if (l) return l }
  // 6. Professionnels
  if (/professionnel|restaurant|attestation|copropriét|syndic|bailleur|hôtel|commerces?\b|contrat|immeuble/.test(t)) { const l = first({ href: '/professionnels', label: 'Nos interventions pour les professionnels' }); if (l) return l }
  // 7. Zone, quartiers, villes voisines, où vous trouver
  if (/quartiers?|villes? voisines|communes voisines|autour de|\bvilles?\b|secteur|département|où se trouve|où êtes|basés?/.test(t)) {
    const l = first(fam && ctx.dep && AVEC_DEP.includes(fam) ? { href: `${fam}/${ctx.dep.slug}`, label: `${famN?.nom ?? 'Nos services'} ${ctx.dep.dans} : toutes nos villes` } : null, ctx.dep ? { href: `/zones/${ctx.dep.slug}`, label: `Tous nos services ${ctx.dep.dans}` } : null, { href: '/zones', label: 'Nos zones d’intervention autour de Saint-Maurice' })
    if (l) return l
  }
  // 8. Délai, urgence, jour même
  if (/jour même|délai|en combien de temps|urgence|rapidement|week-end|dimanche|7j\/7|venir|intervenez|intervenir/.test(t)) {
    const l = first({ href: '/#contact', label: 'Demander une intervention rapide' }); if (l) return l
  }
  // 9. Identifier
  if (/identifi|reconna|à quoi ressemble|différence/.test(t)) { const l = first({ href: '/identifier-nuisible', label: 'Identifier un nuisible en photo' }); if (l) return l }
  // 10. Préparation, déroulé, garantie, saison… : la page du traitement ; sinon aucun lien plutôt qu'un lien hors sujet
  return famN ? first({ href: famN.service, label: `Notre traitement : ${famN.le}` }) : null
}
