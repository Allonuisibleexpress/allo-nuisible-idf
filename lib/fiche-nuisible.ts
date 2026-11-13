// Fiche « nuisible » des pages fourmis et puces (12/11/2026) : le nuisible d'abord, la ville en appui.
// Chaque paragraphe s'appuie sur les données réelles de la ville (Insee, OpenStreetMap, inventaire SRU : lib/donnees-locales.ts)
// et contient des liens internes (service, blog, villes voisines, département). Pas de chiffre inventé, pas de tiret long.
import { DONNEES_LOCALES } from './donnees-locales'

type V = { slug: string; nom: string; a: string; code: string }
type Voisine = { slug: string; nom: string }

const nf = (n: number) => n.toLocaleString('fr-FR')
const DEP: Record<string, [string, string]> = { '75': ['paris', 'à Paris'], '94': ['val-de-marne', 'dans le Val-de-Marne'], '92': ['hauts-de-seine', 'dans les Hauts-de-Seine'], '91': ['essonne', 'en Essonne'], '78': ['yvelines', 'dans les Yvelines'], '77': ['seine-et-marne', 'en Seine-et-Marne'] }

function liste(l: string[]) { return l.length <= 1 ? l.join('') : `${l.slice(0, -1).join(', ')} et ${l[l.length - 1]}` }
function liensVoisines(base: string, vs: Voisine[]) { return liste(vs.slice(0, 4).map((x) => `[${x.nom}](${base}/${x.slug})`)) }

function habitat(v: V) {
  const d = DONNEES_LOCALES[v.slug]
  if (!d) return { dense: false, phrase: '' }
  const dense = d.densite > 9000
  const sru = d.sru ? ` et ${d.sru.taux} de logements sociaux selon l’inventaire SRU` : ''
  return {
    dense,
    phrase: dense
      ? `${v.nom} compte ${nf(d.population)} habitants sur ${String(d.surfaceKm2).replace('.', ',')} km² (Insee)${sru} : une ville dense, où les logements partagent gaines, colonnes et caves.`
      : `${v.nom} compte ${nf(d.population)} habitants sur ${String(d.surfaceKm2).replace('.', ',')} km² (Insee), avec de nombreuses maisons et jardins.`,
  }
}

export function ficheFourmis(v: V, voisines: Voisine[]): string[] {
  const d = DONNEES_LOCALES[v.slug]
  const h = habitat(v)
  const verts = d?.verts?.slice(0, 2) ?? []
  const eau = d?.eaux?.[0]
  const quartiers = d?.quartiers?.slice(0, 3) ?? []
  const dep = DEP[v.code]
  return [
    `### Invasion de fourmis ${v.a} : les signes à repérer`,
    `Une colonne de fourmis le long d’une plinthe, de petits tas de terre fine entre les dalles de la terrasse, des fourmis dans le sucrier ou autour de la gamelle du chat : ce sont les signes d’une **colonie installée tout près**. ${h.phrase} ${h.dense ? `Ici, les fourmis remontent souvent par les canalisations et les gaines jusqu’aux cuisines et aux salles de bains.` : `Ici, le nid se trouve le plus souvent dehors : sous une dalle, dans la pelouse ou au pied d’un mur.`}${d && d.jardins > 0 ? ` La ville compte ${d.jardins} jardin${d.jardins > 1 ? 's' : ''} partagé${d.jardins > 1 ? 's' : ''} recensé${d.jardins > 1 ? 's' : ''} sur OpenStreetMap, autant de lieux de vie pour les colonies.` : ''}`,
    `### Nid de fourmis ${v.a} : où se cache la colonie ?`,
    `Les fourmis que vous voyez ne sont qu’une petite partie de la colonie : la **reine** et la majorité des ouvrières restent au nid. Il se cache sous les dalles, dans les joints de terrasse, au pied des murs, dans les jardinières, et parfois à l’intérieur, dans un doublage ou sous un plancher.${verts.length ? ` Près des espaces verts comme ${liste(verts)}, les colonies sont nombreuses.` : ''}${eau ? ` Les sols frais des bords de ${eau.replace(/^(La |Le |L’|L')/, (m) => m.toLowerCase())} conviennent aussi très bien aux fourmis.` : ''} Suivre la colonne jusqu’à son point d’entrée est la première étape pour trouver le nid.`,
    `### Le mode de vie des fourmis : ce qu’il faut savoir pour s’en débarrasser`,
    `Une colonie s’organise autour d’une ou de plusieurs reines qui pondent, et de milliers d’ouvrières qui cherchent la nourriture, soignent les larves et défendent le nid. Les ouvrières marquent leur chemin d’une **piste chimique** : c’est pourquoi elles avancent en file, toujours par le même passage. Notre article [tout savoir sur les fourmis](/blog/fourmis-tout-savoir-mode-de-vie-reproduction) détaille leur mode de vie et leur reproduction.`,
    `### Comment tuer les fourmis ${v.a} : la méthode qui marche`,
    `Tuer les fourmis visibles ne règle rien tant que la reine pond. La solution efficace est le **gel appât** : les ouvrières le rapportent au nid et le partagent avec les larves et la reine, et la colonie s’éteint en quelques jours à quelques semaines. Évitez la bombe insecticide sur la colonne (elle disperse les fourmis sans atteindre la reine), l’eau bouillante ou le vinaigre (qui ne touchent que la surface du nid). Nos techniciens identifient d’abord l’espèce, puis choisissent l’appât et le traitement du nid : voir [nos méthodes contre les fourmis](/services/fourmis).`,
    `### Fourmis volantes ${v.a} : faut-il s’inquiéter ?`,
    `Les jours chauds et orageux de l’été, les colonies lâchent leurs **fourmis ailées** : c’est l’essaimage, le vol nuptial des futures reines. Des fourmis volantes dans la maison signalent un nid tout proche, souvent sous une terrasse, dans un mur ou sous un plancher. C’est le bon moment pour faire traiter la colonie.`,
    `### Traitement anti-fourmis ${v.a} : prix, délai et garantie`,
    `Notre traitement contre les fourmis ${v.a} commence **dès 120 € TTC**, avec un devis gratuit donné avant le déplacement et une **garantie d’un an**. Nous intervenons dans tous les quartiers${quartiers.length ? `, de ${liste(quartiers)}` : ''}, 7j/7, souvent dans la semaine. Pour les copropriétés, restaurants et commerces, nous proposons un suivi avec attestation.`,
    `### Fourmis près de ${v.nom} : nos autres villes`,
    `Nous traitons aussi les fourmis à ${liensVoisines('/fourmis', voisines)}.${dep ? ` Pour tous nos services ${dep[1]}, voir [la page du département](/zones/${dep[0]}).` : ''} Vous hésitez sur l’espèce ? Lisez notre article sur la [fourmi Tapinoma magnum](/blog/tapinoma-magnum-fourmi-invasive), souvent confondue avec les fourmis de jardin.`,
  ]
}

export function fichePuces(v: V, voisines: Voisine[], derat: boolean, souris = false): string[] {
  const d = DONNEES_LOCALES[v.slug]
  const h = habitat(v)
  const verts = d?.verts?.slice(0, 2) ?? []
  const quartiers = d?.quartiers?.slice(0, 3) ?? []
  const dep = DEP[v.code]
  return [
    `### Piqûres de puces ${v.a} : que faire tout de suite ?`,
    `Des piqûres groupées par trois ou quatre sur les chevilles, un chat ou un chien qui se gratte, des petits points noirs dans son panier : ce sont les signes d’une **infestation de puces**. ${h.phrase} Avant notre passage : **aspirez** soigneusement sols, plinthes, canapé et tapis puis jetez le sac, **lavez** le linge de lit et les coussins à haute température, et faites traiter l’animal par votre **vétérinaire** le même jour. Évitez les bombes anti-puces du commerce, qui ne touchent pas les larves cachées dans les joints de parquet.`,
    `### Puces dans un logement sans animal ${v.a} : d’où viennent-elles ?`,
    `C’est plus fréquent qu’on ne le pense. Les puces peuvent avoir été laissées par un **ancien occupant** et son animal : leurs cocons attendent parfois longtemps qu’un nouvel hôte arrive. Elles peuvent aussi venir d’une **cave** fréquentée par des rongeurs : quand les rats ou les souris disparaissent, leurs puces cherchent un autre hôte et montent vers les logements.${derat ? ` Si vous avez aussi des rongeurs, voyez notre page [dératisation ${v.a}](/deratisation/${v.slug}).` : ''}${verts.length ? ` Enfin, les chiens promenés dans les espaces verts comme ${liste(verts)} peuvent ramener des puces.` : ''}`,
    `### Rats, souris, fouines : quand les animaux sauvages amènent des puces ${v.a}`,
    `Les puces ne viennent pas seulement du chat ou du chien. Les **rats**, les **souris** et la **fouine** (qui n’est pas un rongeur mais un petit carnivore de la famille de la belette) portent eux aussi des puces. Quand ils s’installent dans une cave, des combles ou un vide sanitaire, leurs puces se multiplient dans leur nid. Si l’animal meurt, est chassé ou piégé, ses puces cherchent aussitôt un nouvel hôte : elles descendent alors vers les pièces habitées et piquent les occupants. C’est une cause fréquente de **puces sans animal domestique**.`,
    `C’est pourquoi nous traitons toujours les deux problèmes ensemble : éliminer les rongeurs et boucher leurs accès, puis traiter les puces.${derat ? ` Voir notre page [dératisation ${v.a}](/deratisation/${v.slug})` : ' Voir notre page [dératisation en Île-de-France](/services/deratisation)'}${souris ? ` et notre page [souris ${v.a}](/souris/${v.slug})` : ''}. Pour savoir quel animal vit chez vous, lisez [rat ou souris : comment les reconnaître](/blog/rat-ou-souris-comment-reconnaitre) et notre [guide des rongeurs](/blog/guide-des-rongeurs), qui présente aussi la fouine et le lérot.`,
    `### Traitement anti-puces ${v.a} : prix, délai et garantie`,
    `Notre traitement contre les puces ${v.a} commence **dès 120 € TTC**, avec un devis gratuit et une **garantie d’un an**. Le technicien traite toutes les pièces où l’animal circule, avec un insecticide professionnel qui agit aussi sur les larves. Nous intervenons dans tous les quartiers${quartiers.length ? `, de ${liste(quartiers)}` : ''}, 7j/7. Pour comprendre le cycle de la puce et pourquoi un second passage est parfois utile, lisez [tout savoir sur les puces](/blog/puces-tout-savoir).`,
    `### Puces près de ${v.nom} : nos autres villes`,
    `Nous traitons aussi les puces à ${liensVoisines('/puces', voisines)}.${dep ? ` Toutes nos villes ${dep[1]} : [puces ${dep[1]}](/puces/${dep[0]}).` : ''} Voir aussi notre page [traitement des puces en Île-de-France](/services/puces).`,
  ]
}

export function ficheFrelons(v: V, voisines: Voisine[]): string[] {
  const d = DONNEES_LOCALES[v.slug]
  const h = habitat(v)
  const verts = d?.verts?.slice(0, 2) ?? []
  const eau = d?.eaux?.[0]
  const dep = DEP[v.code]
  return [
    `### Frelon européen ou frelon asiatique ${v.a} : comment savoir ?`,
    `Le **frelon européen** est brun-roux et jaune, gros (20 à 25 mm pour une ouvrière), et vole aussi **la nuit**, attiré par les fenêtres éclairées. Le **frelon asiatique** est plus petit, très sombre, avec un seul anneau orangé et des **pattes jaunes** au bout ; il construit souvent son nid **très haut dans les arbres**. Une photo sur WhatsApp nous suffit pour vous répondre. Tout savoir : [frelon européen](/blog/frelon-europeen-tout-savoir), [frelon asiatique](/blog/frelon-asiatique-tout-savoir), [guêpes](/blog/guepes-tout-savoir).`,
    `### Où trouve-t-on les nids de frelons ${v.a} ?`,
    `${h.phrase} ${h.dense ? 'Ici, les nids se cachent surtout dans les coffres de volets roulants, les combles, les cheminées, les balcons peu utilisés et les arbres des cours et des squares.' : 'Ici, les nids se trouvent surtout dans les haies, les arbres des jardins, les abris, les combles et sous les avant-toits.'}${verts.length ? ` Les grands arbres d’espaces verts comme ${liste(verts)} accueillent aussi des nids de frelons asiatiques, parfois repérés seulement à l’automne, quand les feuilles tombent.` : ''}${eau ? ` Près de ${eau.replace(/^(La |Le |L’|L')/, (m) => m.toLowerCase())}, les frelons trouvent de l’eau en abondance pour construire leur nid.` : ''}`,
    `### Un nid de frelons ${v.a} : que faire en attendant notre passage ?`,
    `Restez à distance, ne bouchez pas l’entrée et n’arrosez pas le nid ${v.a} : les frelons défendent vivement ses abords. Éloignez enfants et animaux. En cas de piqûres multiples ou de gonflement du visage, appelez le **15** ou le **112**.`,
    `### Destruction de nid de frelons ${v.a} : prix, délai et méthode`,
    `Nous détruisons les nids de frelons et de guêpes ${v.a} **dès 89 € TTC** pour un nid accessible, **149 €** à la perche, **199 €** en toiture, combles ou cheminée, nacelle sur devis, avec un devis donné avant le déplacement. Voir notre service [destruction de nids de guêpes et frelons](/services/guepes-frelons) et notre article [nid de frelon en hiver](/blog/nid-de-frelon-en-hiver).`,
    `### Nids de frelons près de ${v.nom} : nos autres villes`,
    `Nous intervenons aussi à ${liensVoisines('/destruction-nid-frelon', voisines)}.${dep ? ` Toutes nos villes ${dep[1]} : [destruction de nid de frelons ${dep[1]}](/destruction-nid-frelon/${dep[0]}).` : ''} Nos chantiers en images : [nid de 12 mètres en nacelle à Champigny](/blog/nid-frelons-asiatiques-12-metres-nacelle-champigny-sur-marne), [nid dans une cheminée à Nogent](/blog/nid-frelons-cheminee-nogent-sur-marne).`,
  ]
}

function nomLigne(l: string) {
  const [t, n] = l.split(' ')
  if (t === 'METRO') return `la ligne ${n} du métro`
  if (t === 'RER') return `le RER ${n}`
  if (t === 'TRAIN') return `la ligne ${n} du Transilien`
  if (t === 'TRAM') return `le tramway T${n}`
  if (t === 'CABLE') return 'le téléphérique Câble 1'
  if (t === 'ORLYVAL') return 'l’Orlyval'
  return 'le funiculaire de Montmartre'
}

// Fiche punaises de lit (13/11/2026) : transports, immeuble, hôtels, erreurs à éviter, durée.
// Données réelles : gares et lignes (Île-de-France Mobilités), Insee, inventaire SRU, hôtels recensés sur OpenStreetMap.
export function fichePunaises(v: V, voisines: Voisine[]): string[] {
  const d = DONNEES_LOCALES[v.slug]
  const h = habitat(v)
  const gares = (d?.gares ?? []).filter((g, i, t) => t.indexOf(g) === i && !t.some((x) => x !== g && x.includes(g))).slice(0, 3)
  const lignes = (d?.lignes ?? []).filter((l) => !l.startsWith('FUNI')).slice(0, 4).map(nomLigne)
  const quartiers = d?.quartiers?.slice(0, 4) ?? []
  const hotels = d?.poi?.hotels ?? 0
  const dep = DEP[v.code]
  const out: string[] = []
  if (gares.length || lignes.length) {
    out.push(
      `### Punaises de lit et transports ${v.a}`,
      `${gares.length ? `Gares ${v.a} : ${liste(gares)}.` : ''}${lignes.length ? ` Lignes : ${liste(lignes)}.` : ''} Les punaises de lit ne sautent pas et ne volent pas : elles voyagent **dans les sacs et les vêtements**. Voir [punaises de lit dans les transports en commun](/blog/punaises-de-lit-transports-en-commun).`,
    )
  }
  if (d) {
    const sru = d.sru ? `, dont ${d.sru.taux} de logements sociaux selon l’inventaire SRU` : ''
    out.push(
      `### Punaises de lit ${h.dense ? 'en immeuble' : 'en maison et en immeuble'} ${v.a}`,
      `${v.nom} compte ${nf(d.population)} habitants sur ${String(d.surfaceKm2).replace('.', ',')} km² (Insee)${sru}.${quartiers.length ? ` Quartiers où nous intervenons : ${liste(quartiers)}.` : ''} ${h.dense || d.sru ? 'Les punaises passent d’un appartement à l’autre par les **gaines** et les **prises** : prévenez votre bailleur ou votre syndic.' : 'Traitez toutes les pièces où quelqu’un dort : les punaises gagnent vite les chambres voisines.'}`,
    )
  }
  if (hotels > 0) {
    out.push(
      `### Hôtels et locations courte durée ${v.a}`,
      `OpenStreetMap recense ${hotels > 1 ? `${nf(hotels)} hôtels` : 'un hôtel'} à ${v.nom}. Pour un hôtel ou un meublé loué à la nuit ${v.a}, nous traitons chambre par chambre : voir [punaises de lit en location courte durée](/blog/punaises-de-lit-airbnb-location-courte-duree).`,
    )
  }
  out.push(
    `### Punaises de lit près de ${v.nom}`,
    `Nous traitons aussi les punaises de lit à ${liensVoisines('/punaises-de-lit', voisines)}${dep ? `, et dans toutes nos [villes ${dep[1]}](/punaises-de-lit/${dep[0]})` : ''}.`,
  )
  return out
}
