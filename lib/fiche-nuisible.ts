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
