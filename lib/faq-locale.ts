// Questions locales des pages ville punaises de lit et dératisation (18/11/2026, demande de l'utilisateur : 8 questions par
// page ville, propres à chaque ville). Réponses construites à partir des données réelles de la ville (lib/donnees-locales.ts :
// Insee, OpenStreetMap, inventaire SRU) et des affirmations confirmées par l'entreprise (dès 290 € / dès 120 €, 2 passages,
// garantie 1 an, détection canine sur devis, base à Saint-Maurice, 7j/7). Pas de chiffre inventé, pas de tiret long.
// Plusieurs tournures par question, choisies selon la ville, pour garder les pages différentes les unes des autres.
import { DONNEES_LOCALES } from './donnees-locales'
import { phraseDistance } from '@/components/VilleBlocs'

type V = { slug: string; nom: string; a: string; code: string }
type QR = { q: string; a: string }

const nf = (n: number) => n.toLocaleString('fr-FR')
function liste(l: string[]) { return l.length <= 1 ? l.join('') : `${l.slice(0, -1).join(', ')} et ${l[l.length - 1]}` }
function h(s: string) { let x = 0; for (const c of s) x = (x * 31 + c.charCodeAt(0)) >>> 0; return x }
function choix<T>(slug: string, sel: string, l: T[]): T { return l[h(slug + sel) % l.length] }

// Thèmes déjà couverts par les questions existantes de la page : on ne les repose pas.
function dejaTraite(existantes: QR[], motif: RegExp) { return existantes.some((f) => motif.test(f.q)) }

function voisinesNoms(v: V, n = 3) {
  const d = DONNEES_LOCALES[v.slug]
  return (d?.voisines ?? []).slice(0, n)
}

function delai(v: V, quoi: string): QR {
  const dist = phraseDistance(v.slug, v.nom)
  return {
    q: choix(v.slug, 'dq', [`En combien de temps un technicien peut-il venir ${v.a} ?`, `Pouvez-vous intervenir rapidement ${v.a} ?`, `Intervenez-vous le jour même ${v.a} ?`]),
    a: `${dist ? dist + ' ' : ''}${choix(v.slug, 'da', [
      `Pour ${quoi}, un technicien peut souvent passer le jour même, 7j/7. Le devis est gratuit.`,
      `Nous intervenons 7j/7, souvent le jour même pour ${quoi}, avec un devis gratuit.`,
      `Appelez le 07 68 07 72 19 : pour ${quoi}, une intervention le jour même est souvent possible, 7j/7.`,
    ])}`,
  }
}

function quartiers(v: V, quoi: string): QR | null {
  const d = DONNEES_LOCALES[v.slug]
  const q = d?.quartiers?.slice(0, 4) ?? []
  if (!q.length) return null
  const vs = voisinesNoms(v, 2)
  return {
    q: choix(v.slug, 'qq', [`Intervenez-vous dans tous les quartiers de ${v.nom} ?`, `Quels quartiers de ${v.nom} couvrez-vous ?`, `Venez-vous dans mon quartier ${v.a} ?`]),
    a: `Oui, ${choix(v.slug, 'qa', ['dans toute la ville', 'partout dans la commune', 'dans tous les quartiers'])} pour ${quoi}, notamment ${liste(q)}${vs.length ? `, ainsi qu’à ${liste(vs)}` : ''}.`,
  }
}

// ── Punaises de lit ────────────────────────────────────────────────────────────────────────────────────────────
export function faqLocalePunaises(v: V, existantes: QR[], total = 8): QR[] {
  const d = DONNEES_LOCALES[v.slug]
  const out: QR[] = []
  const add = (x: QR | null) => { if (x && existantes.length + out.length < total) out.push(x) }

  add(quartiers(v, 'les punaises de lit'))
  if (!dejaTraite(existantes, /combien de temps|rapidement|jour même/i)) add(delai(v, 'les punaises de lit'))
  if (!dejaTraite(existantes, /co[uû]te|prix|tarif/i)) add({
    q: choix(v.slug, 'pq', [`Combien coûte un traitement contre les punaises de lit ${v.a} ?`, `Quel est le prix d’un traitement punaises de lit ${v.a} ?`]),
    a: `Dès 290 € pour un studio, deux passages inclus, ${choix(v.slug, 'pa', ['au même prix en cryogénie, sans insecticide', 'que vous choisissiez l’insecticide ou la cryogénie sans produit'])}. Le devis est gratuit et donné avant l’intervention, avec une garantie d’un an.`,
  })
  add({
    q: choix(v.slug, 'cq', [`Proposez-vous la détection canine des punaises de lit ${v.a} ?`, `Un chien détecteur de punaises peut-il venir ${v.a} ?`]),
    a: choix(v.slug, 'ca', [
      `Oui, sur devis. Le chien repère les punaises à l’odeur, même cachées : utile quand l’infestation débute ou pour vérifier un traitement.`,
      `Oui, sur devis ${v.a}. Un chien dressé sent les punaises vivantes et leurs œufs ; chaque signalement se confirme ensuite à l’œil.`,
      `C’est possible, sur devis : avant un traitement pour savoir quelles pièces sont touchées, ou après pour contrôler le résultat.`,
    ]),
  })
  const gares = (d?.gares ?? []).filter((g, i, t) => t.indexOf(g) === i).slice(0, 2)
  if (gares.length) add({
    q: choix(v.slug, 'tq', [`Peut-on ramener des punaises de lit des transports ${v.a} ?`, `Les gares de ${v.nom} sont-elles un risque pour les punaises de lit ?`]),
    a: `${gares.length > 1 ? `Les gares ${liste(gares)} voient passer` : `La gare ${gares[0]} voit passer`} beaucoup de voyageurs, mais les punaises de lit ne sautent pas et ne volent pas : elles se déplacent dans les sacs, les valises et les vêtements. Après un voyage, videz vos bagages loin du lit et lavez le linge à 60 °C.`,
  })
  const hotels = d?.poi?.hotels ?? 0
  if (hotels > 0) add({
    q: choix(v.slug, 'hq', [`Traitez-vous les hôtels et meublés de tourisme ${v.a} ?`, `J’ai une location courte durée ${v.a} : intervenez-vous entre deux séjours ?`]),
    a: `Oui. OpenStreetMap recense ${hotels > 1 ? `${nf(hotels)} hôtels` : 'un hôtel'} à ${v.nom} ; pour un hôtel ou un meublé, nous traitons chambre par chambre et nous adaptons l’horaire entre deux séjours.`,
  })
  const dense = (d?.densite ?? 0) > 9000 || !!d?.sru
  if (dense && !dejaTraite(existantes, /syndic|voisin|bailleur/i)) add({
    q: choix(v.slug, 'vq', [`Mon voisin a des punaises de lit ${v.a} : suis-je concerné ?`, `Dans un immeuble ${v.a}, les punaises passent-elles d’un logement à l’autre ?`]),
    a: `C’est possible : elles circulent par les gaines, les prises et sous les plinthes. Prévenez le syndic ou le bailleur, surveillez votre literie (taches noires, traces de sang, œufs blanchâtres) et faites inspecter votre logement en cas de doute.`,
  })
  // Secours (petites villes sans données de quartiers, gares ou hôtels)
  const vs = voisinesNoms(v, 3)
  if (vs.length) add({
    q: choix(v.slug, 'nq', [`Intervenez-vous aussi autour de ${v.nom} ?`, `Couvrez-vous les communes voisines de ${v.nom} ?`]),
    a: `Oui, nous traitons aussi les punaises de lit à ${liste(vs)}, avec les mêmes méthodes et le même prix de départ.`,
  })
  add({
    q: choix(v.slug, 'eq', [`Que faire en attendant le technicien ${v.a} ?`, `Quels gestes faire avant notre passage ${v.a} ?`]),
    a: choix(v.slug, 'ea', [
      `Lavez le linge de lit à 60 °C ou passez-le au sèche-linge, fermez-le dans des sacs, et ne pulvérisez ni insecticide du commerce ni fumigène.`,
      `Ne déplacez pas vos affaires vers une autre pièce, aspirez le matelas et le sommier, et évitez les bombes insecticides, qui dispersent les punaises.`,
    ]),
  })
  if (!dense) add({
    q: `Les punaises de lit touchent-elles aussi les maisons ${v.a} ?`,
    a: `Oui. Elles ne dépendent pas de la propreté du logement, comme le rappelle l’ARS Île-de-France : une maison peut être infestée après un voyage, un déménagement ou l’achat d’un meuble d’occasion.`,
  })
  return out
}

// ── Dératisation ───────────────────────────────────────────────────────────────────────────────────────────────
export function faqLocaleDeratisation(v: V, existantes: QR[], total = 8): QR[] {
  const d = DONNEES_LOCALES[v.slug]
  const out: QR[] = []
  const add = (x: QR | null) => { if (x && existantes.length + out.length < total) out.push(x) }

  add(quartiers(v, 'les rats et les souris'))
  if (!dejaTraite(existantes, /combien de temps|rapidement|jour même/i)) add(delai(v, 'une dératisation'))
  add({
    q: choix(v.slug, 'rq', [`Peut-on dératiser sans raticide ${v.a} ?`, `Proposez-vous une dératisation écologique ${v.a} ?`]),
    a: choix(v.slug, 'ra', [
      `Oui, dans la plupart des logements : on rebouche les accès puis on pose des pièges sans poison, comme le piège Ekomille. Aucun appât empoisonné ne reste chez vous.`,
      `Oui : colmatage des passages, puis pièges connectés ou mécaniques en boîtes sécurisées. Le rongeur ne va pas mourir dans une cloison.`,
      `C’est possible ${v.a} : inspection, accès rebouchés et pièges sans raticide, contrôlés à chaque passage jusqu’à la fin des signes.`,
    ]),
  })
  const eaux = d?.eaux?.slice(0, 2) ?? []
  if (eaux.length && !dejaTraite(existantes, /berge|crue|seine|marne|canal|lac|rivi|étang|eau/i)) add({
    q: `Les rats viennent-ils ${eaux.length > 1 ? `de ${liste(eaux)}` : `de ${eaux[0]}`} ?`,
    a: `C’est souvent le cas près de l’eau : le surmulot, ou rat d’égout, nage très bien, vit dans les réseaux et le long des berges, puis remonte par les canalisations, les regards et les caves.`,
  })
  const jardins = d?.jardins ?? 0
  if (jardins > 0) add({
    q: `Un composteur ou un jardin attire-t-il les rats ${v.a} ?`,
    a: `Oui s’il est ouvert : restes de repas, graines et fruits tombés les nourrissent. OpenStreetMap recense ${jardins > 1 ? `${jardins} jardins partagés` : 'un jardin partagé'} à ${v.nom} ; un composteur fermé, posé sur un grillage fin, éloigne les rats.`,
  })
  const p = d?.poi
  if (p && (p.resto > 0 || p.commercesAlim > 0)) add({
    q: choix(v.slug, 'cq2', [`Faites-vous la dératisation des restaurants et commerces ${v.a} ?`, `Je tiens un commerce alimentaire ${v.a} : que proposez-vous ?`]),
    a: `Oui : un plan de lutte avec passages programmés, registre et attestation, à des horaires qui ne gênent pas l’activité. ${v.nom} compte ${liste([p.resto > 0 ? `${nf(p.resto)} restaurants et cafés` : '', p.commercesAlim > 0 ? `${nf(p.commercesAlim)} commerces alimentaires` : ''].filter(Boolean))} selon OpenStreetMap.`,
  })
  if (!dejaTraite(existantes, /locataire|syndic|bailleur|qui (doit )?pa/i)) add({
    q: `Qui paie la dératisation dans un immeuble ${v.a} ?`,
    a: `En général, les parties communes (caves, locaux poubelles, vide-ordures) relèvent du syndic ou du bailleur. À l’intérieur du logement, voyez avec votre bailleur : un logement loué doit être exempt de nuisibles à l’entrée dans les lieux.`,
  })
  add({
    q: `Rat ou souris : comment savoir ce qui est chez moi ${v.a} ?`,
    a: choix(v.slug, 'sa', [
      `Regardez les crottes : 3 à 6 mm pour une souris, environ 2 cm et arrondies pour un surmulot. Le technicien confirme à l’inspection.`,
      `La taille des crottes tranche le plus souvent : celles d’une souris font 3 à 6 mm, celles d’un rat noir 6 à 12 mm et sont pointues.`,
      `Une souris laisse des crottes de 3 à 6 mm, le surmulot d’environ 2 cm. Bruits dans les cloisons, emballages rongés : envoyez-nous une photo.`,
    ]),
  })
  return out
}

// ── Autres familles du modèle commun (souris, cafards, fourmis, chenilles, frelons, puces, acariens) ───────────
// 18/11/2026 : complète la FAQ jusqu'à 8 questions. Uniquement des faits déjà publiés et confirmés par l'entreprise
// (prix des profils, frelons : intervention sous 1 h, perche jusqu'à 23 m, garantie 3 mois ; fourmis : résultat sous 48 h).
type Tarif = { label: string; prix: string; detail: string }
const NOMS: Record<string, { de: string; les: string }> = {
  souris: { de: 'souris', les: 'les souris' }, cafards: { de: 'cafards', les: 'les cafards' }, fourmis: { de: 'fourmis', les: 'les fourmis' },
  chenilles: { de: 'chenilles processionnaires', les: 'les chenilles processionnaires' }, frelons: { de: 'nid de frelons ou de guêpes', les: 'les nids de frelons et de guêpes' },
  puces: { de: 'puces', les: 'les puces' }, acariens: { de: 'acariens', les: 'les acariens' }, anthrenes: { de: 'anthrènes', les: 'les anthrènes' },
}
const SPECIFIQUES: Record<string, (v: V) => QR[]> = {
  anthrenes: (v) => [{ q: choix(v.slug, 'an1', [`Comment reconnaître une larve d’anthrène ${v.a} ?`, `À quoi ressemble une larve d’anthrène ${v.a} ?`]), a: choix(v.slug, 'an2', [`Elle est brune, velue, allongée, et mesure 4 à 5 mm en fin de croissance, avec des touffes de poils à l’arrière. Elle laisse de petites peaux vides en muant.`, `C’est une petite larve brune couverte de poils, de 4 à 5 mm au maximum, qui se cache sous les tapis et au fond des placards et laisse des mues velues.`]) }],
  souris: (v) => [
    { q: `Une seule souris ${v.a}, faut-il traiter ?`, a: choix(v.slug, 's1', [`Mieux vaut agir vite : là où l’on voit une souris, il y en a souvent d’autres, et elles se reproduisent rapidement.`, `Oui, sans attendre : une souris aperçue en signale souvent d’autres dans les cloisons ou les placards.`]) },
    { q: `Par où les souris entrent-elles dans un logement ${v.a} ?`, a: `Par les passages de tuyaux, les gaines, les bas de porte, les aérations et les fissures. Le technicien les repère et les rebouche : sans cela, d’autres souris reviennent.` },
  ],
  cafards: (v) => [
    { q: `Les cafards passent-ils d’un appartement à l’autre ${v.a} ?`, a: `Oui, en immeuble ils circulent par les gaines, les colonnes et les passages de canalisations. Si vos voisins en ont aussi, prévenez le syndic ou le bailleur pour traiter ensemble.` },
    { q: `Combien de passages faut-il contre les cafards ${v.a} ?`, a: `En général deux passages : le premier élimine les cafards présents, le second ceux qui sortent des oothèques (les capsules d’œufs) entre-temps.` },
  ],
  fourmis: (v) => [
    { q: `En combien de temps les fourmis disparaissent-elles ${v.a} ?`, a: choix(v.slug, 'f1', [`En général sous 48 h : le gel appât est rapporté au nid et la colonie s’effondre.`, `Comptez environ 48 h : les ouvrières nourrissent la colonie avec le gel, reine comprise.`]) },
    { q: `Faut-il trouver la reine des fourmis ${v.a} ?`, a: choix(v.slug, 'f2', [`Oui : tant que la reine vit, la colonie se reconstitue.`, `C’est la clé du traitement. Le gel déposé sur les pistes est rapporté jusqu’à la reine.`]) },
  ],
  chenilles: (v) => [
    { q: `Les poils des chenilles processionnaires sont-ils dangereux ${v.a} ?`, a: `Oui, ils sont urticants pour les humains et les animaux. Ne touchez pas les nids et éloignez enfants et animaux : nos techniciens interviennent équipés.` },
    { q: `Retirez-vous les nids en hauteur ${v.a} ?`, a: `Oui : dès 89 € pour un nid accessible, dès 149 € pour un nid en hauteur à la perche télescopique, et sur devis pour un grand arbre à la nacelle.` },
  ],
  frelons: (v) => [
    { q: `En combien de temps venez-vous pour un nid ${v.a} ?`, a: `En général sous 1 h, 7j/7. ${phraseDistance(v.slug, v.nom)}`.trim() },
    { q: `Jusqu’à quelle hauteur pouvez-vous détruire un nid ${v.a} ?`, a: choix(v.slug, 'h1', [`Jusqu’à 23 m à la perche télescopique ; au-delà, nacelle sur devis.`, `La perche atteint 23 m. Toiture, cheminée ou très grand arbre : nacelle, sur devis.`]) },
    { q: `La destruction du nid est-elle garantie ${v.a} ?`, a: choix(v.slug, 'h2', [`Oui, garantie 3 mois.`, `Oui : 3 mois de garantie sur la destruction du nid.`]) },
  ],
  puces: (v) => [{ q: `Faut-il traiter l’animal en même temps que le logement ${v.a} ?`, a: `Oui : le vétérinaire traite l’animal, nous traitons le logement. Sans les deux, les puces reviennent.` }],
  acariens: (v) => [{ q: `Comment limiter le retour des acariens ${v.a} ?`, a: `Ameli conseille d’aérer au moins 10 minutes par jour, de garder moins de 20 °C dans les pièces de vie et une humidité entre 40 % et 60 %.` }],
}
const ATTENTE: Record<string, string[]> = {
  anthrenes: [`Aspirez les bords de tapis et les plinthes, videz l’aspirateur dehors et rangez les lainages propres dans des housses fermées en attendant le technicien.`],
  souris: [`Rangez la nourriture et les croquettes dans des boîtes fermées et notez où vous voyez des crottes.`, `Fermez les aliments, sortez les poubelles le soir et ne bouchez pas un trou si une souris est peut-être encore à l’intérieur.`],
  cafards: [`Ne laissez ni vaisselle sale ni miettes la nuit, et n’utilisez jamais d’insecticide interdit acheté en ligne.`, `Fermez les aliments et évitez les bombes insecticides : elles dispersent les cafards sans atteindre leurs cachettes.`],
  fourmis: [`Ne détruisez pas les pistes avant notre passage : elles mènent au nid, où le gel appât doit être rapporté.`, `Rangez sucre et miettes, mais laissez les pistes en place : elles nous guident vers la colonie.`, `Évitez les bombes insecticides : elles tuent quelques ouvrières mais pas la reine, et la colonie se déplace.`],
  chenilles: [`Ne touchez pas les nids, n’essayez pas de les brûler, et gardez enfants et animaux à distance des arbres touchés.`],
  frelons: [`Ne vous approchez pas du nid, ne le bouchez pas et ne l’aspergez pas : éloignez-vous et appelez-nous.`, `Gardez vos distances, fermez les fenêtres proches et ne tentez rien vous-même : un nid dérangé devient agressif.`],
  puces: [`Lavez le couchage de l’animal à 60 °C et aspirez les sols, puis jetez le sac de l’aspirateur dehors.`],
  acariens: [`Aérez chaque jour et lavez draps et taies à 60 °C en attendant le traitement de la literie.`],
}
export function faqLocaleFamille(v: V, famille: string, tarifs: Tarif[] | undefined, existantes: QR[], total = 8): QR[] {
  const n = NOMS[famille]
  if (!n) return []
  const out: QR[] = []
  const add = (x: QR | null) => { if (x && existantes.length + out.length < total && !existantes.concat(out).some((f) => f.q === x.q)) out.push(x) }
  for (const x of (SPECIFIQUES[famille]?.(v) ?? [])) add(x)
  add(quartiers(v, n.les))
  if (famille !== 'frelons' && !dejaTraite(existantes, /combien de temps|rapidement|jour même/i)) add(delai(v, n.les))
  if (tarifs?.length && !dejaTraite(existantes.concat(out), /co[uû]te|prix|tarif/i)) add({
    q: choix(v.slug, 'tq', [`Combien coûte un traitement ${famille === 'frelons' ? 'contre un nid de frelons' : `contre ${n.les}`} ${v.a} ?`, `Quel est le prix ${famille === 'frelons' ? 'pour un nid de frelons' : `d’un traitement ${n.de}`} ${v.a} ?`]),
    a: `${tarifs.map((t) => `${t.label} : ${t.prix}`).join(' ; ')}. Le devis est gratuit et donné avant l’intervention.`,
  })
  const vs = voisinesNoms(v, 3)
  if (vs.length) add({
    q: choix(v.slug, 'vq3', [`Intervenez-vous aussi autour de ${v.nom} ?`, `Couvrez-vous les communes voisines de ${v.nom} ?`]),
    a: choix(v.slug, 'va3', [`Oui, pour ${n.les}, nous intervenons aussi à ${liste(vs)}, avec les mêmes prix de départ.`, `Bien sûr : ${liste(vs)} font partie de notre secteur, aux mêmes conditions.`]),
  })
  const att = ATTENTE[famille]
  if (att) add({ q: choix(v.slug, 'aq', [`Que faire en attendant le technicien ${v.a} ?`, `Quels gestes faire avant notre passage ${v.a} ?`]), a: choix(v.slug, 'aa', att) })
  return out
}
