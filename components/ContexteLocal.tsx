// Section « contexte local » commune à toutes les pages ville.
// Le texte est construit à partir de données publiques propres à chaque commune (lib/donnees-locales.ts) :
// population et superficie (Insee via geo.api.gouv.fr), gares (Île-de-France Mobilités),
// cours d'eau et espaces verts (OpenStreetMap), forêts de pins (IGN). Aucun chiffre inventé.
import { MapPin } from 'lucide-react'
import { DONNEES_LOCALES, type DonneesLocales } from '@/lib/donnees-locales'

const ACCENT = '#E8441A'

export type ServiceLocal = 'deratisation' | 'punaises' | 'cafards' | 'souris' | 'chenilles' | 'acariens' | 'commune'

const nf = (n: number) => n.toLocaleString('fr-FR')
// Choix déterministe d'une variante de phrase, différent d'une ville et d'un service à l'autre
const h = (s: string) => s.split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7)
const pick = <T,>(cle: string, l: T[]) => l[h(cle) % l.length]
const liste = (l: string[]) => (l.length <= 1 ? l.join('') : `${l.slice(0, -1).join(', ')} et ${l[l.length - 1]}`)

// Nom de ligne lisible ; avecArticle pour l'intégrer dans une phrase (« le métro 8 », « la ligne R du Transilien »)
function ligneLisible(l: string, avecArticle = false) {
  const [mode, ...r] = l.split(' ')
  const n = r.join(' ')
  const a = (art: string, x: string) => (avecArticle ? `${art}${x}` : x)
  if (mode === 'METRO') return a('le ', `métro ${n}`)
  if (mode === 'TRAM') return a('le ', `tram T${n}`)
  if (mode === 'TRAIN') return a('la ', `ligne ${n} du Transilien`)
  if (mode === 'RER') return a('le ', `RER ${n}`)
  if (mode === 'FUNICULAIRE') return a('le ', 'funiculaire de Montmartre')
  return l.charAt(0) + l.slice(1).toLowerCase()
}

// Ajoute l'article à un nom de lieu (« la Seine », « le canal Saint-Martin », « l'Île de loisirs »)
function article(nom: string) {
  const m = nom.match(/^(Le|La|Les|L['’])\s?(.*)$/)
  if (m) return `${m[1].toLowerCase()}${m[1].endsWith('e') || m[1].endsWith('a') || m[1].endsWith('s') ? ' ' : ''}${m[2]}`
  const mot = nom.split(' ')[0]
  const commun = /^(Canal|Bras|Ru)$/.test(mot) ? nom.charAt(0).toLowerCase() + nom.slice(1) : nom
  if (/^[AEIOUÉÈÎÏaeiouéèîï]/.test(nom)) return `l'${commun}`
  if (/^(Forêt|Coulée|Promenade|Pelouse|Plaine|Butte|Colline|Roseraie|Rivière|Coulée)$/.test(mot)) return `la ${commun}`
  return `le ${commun}`
}
// « de » + article : « du parc », « de la forêt », « de l'étang »
const deArt = (nom: string) => article(nom).replace(/^le /, 'du ').replace(/^les /, 'des ').replace(/^la /, 'de la ').replace(/^l'/, "de l'")
const majuscule = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

function eau(d: DonneesLocales, s: ServiceLocal) {
  if (!d.eaux.length) return null
  const e = liste(d.eaux.slice(0, 3).map(article))
  const pl = d.eaux.length > 1
  if (s === 'deratisation' || s === 'commune')
    return pick(`${d.slug}${s}eau`, [
      `${majuscule(e)} ${pl ? 'traversent ou bordent' : 'traverse ou borde'} le territoire. Le rat brun, ou surmulot, vit volontiers près de l'eau : berges, collecteurs d'eaux pluviales et égouts sont ses voies de passage, d'où l'importance de contrôler les caves et les regards des bâtiments proches.`,
      `La présence ${pl ? 'de cours d\'eau' : 'd\'un cours d\'eau'} (${e}) compte pour la dératisation : le surmulot recherche l'humidité des berges et circule par les réseaux d'eaux pluviales et d'égouts jusqu'aux sous-sols.`,
    ])
  if (s === 'souris')
    return `${majuscule(e)} ${pl ? 'passent' : 'passe'} par ${d.paris ? 'l\'arrondissement' : 'la commune'} : près de l'eau, on rencontre plus souvent le rat brun que la souris. Un diagnostic permet de savoir à quel rongeur vous avez affaire, car le traitement n'est pas le même.`
  return null
}

function verdure(d: DonneesLocales, s: ServiceLocal) {
  const v = d.verts.slice(0, 3)
  const j = d.jardins
  const parts: string[] = []
  if (s === 'chenilles') {
    if (d.pinsHa) parts.push(`Selon l'inventaire forestier de l'IGN, la commune compte environ ${d.pinsHa.toLocaleString('fr-FR')} hectares de forêt de pins, l'arbre favori de la processionnaire du pin.`)
    if (v.length) parts.push(pick(`${d.slug}chv`, [
      `Parcs et bois comme ${liste(v.map(article))} abritent souvent des pins ou des chênes : surveillez les nids en hiver et les processions au printemps lors de vos promenades.`,
      `Autour ${liste(v.map(deArt))}, gardez les enfants et les chiens à distance des files de chenilles et des nids blancs dans les branches.`,
    ]))
    return parts
  }
  if (s === 'deratisation' || s === 'souris') {
    if (v.length) parts.push(pick(`${d.slug}${s}v`, [
      `Les espaces verts comme ${liste(v.map(article))} offrent aux rongeurs abri et nourriture : graines, fruits tombés, restes de pique-nique. Les terriers se repèrent au pied des haies, des talus et des murets.`,
      `Près ${liste(v.map(deArt))}, les rongeurs trouvent couvert et nourriture, puis gagnent les jardins, les garages et les sous-sols voisins quand le froid arrive.`,
    ]))
    if (j) parts.push(`OpenStreetMap recense aussi ${j > 1 ? `${j} jardins familiaux ou partagés` : 'un jardin familial ou partagé'} ${d.paris ? 'dans l\'arrondissement' : 'sur la commune'} : un composteur mal fermé ou un abri de jardin encombré suffit à attirer rats et souris.`)
    return parts
  }
  if (s === 'commune' && v.length)
    return [`Côté nature, ${liste(v.map(article))} ${v.length > 1 ? 'font' : 'fait'} partie des espaces verts de la commune. Au printemps et en été, guêpes et frelons y trouvent de quoi construire leurs nids, souvent sous les toits et dans les haies des maisons voisines.`]
  return parts
}

function habitat(d: DonneesLocales, s: ServiceLocal) {
  const dense = d.densite >= 7000
  const k = `${d.slug}${s}hab`
  switch (s) {
    case 'deratisation':
      return dense
        ? pick(k, ['Dans un tissu aussi dense, les points à contrôler en priorité sont les locaux poubelles, les caves, les cours d\'immeuble et les commerces de bouche en rez-de-chaussée.', 'En immeuble, les rats remontent par les colonnes d\'évacuation et les vides techniques : locaux poubelles et caves sont les premiers endroits à vérifier.', 'Dans les immeubles, une dératisation efficace concerne toute la copropriété : caves, local vélos, cour et colonnes d\'évacuation, pas seulement un appartement.'])
        : pick(k, ['En habitat pavillonnaire, les rongeurs entrent surtout par les vides sanitaires, les garages, les abris de jardin et les composts.', 'Autour des maisons, ce sont les soupiraux, les bouches d\'aération et les abris de jardin qui servent de porte d\'entrée aux rongeurs.', 'Dans un pavillon, le technicien vérifie le sous-sol, le garage et le jardin, puis pose les postes d\'appâtage là où les rats circulent, à l\'abri des enfants et des animaux.'])
    case 'punaises':
      return dense
        ? pick(k, ['En immeuble, les punaises de lit passent d\'un appartement à l\'autre par les gaines, les plinthes et les parties communes : prévenez votre syndic ou votre bailleur si plusieurs logements sont touchés.', 'Dans les immeubles, une infestation mal traitée chez un voisin peut gagner les appartements mitoyens par les gaines et les fissures : traiter vite limite la propagation.', 'En appartement, les punaises de lit se cachent dans les coutures du matelas, les fentes du sommier et derrière les plinthes : c\'est là que le technicien concentre le traitement.', 'Dans un immeuble, il est utile de prévenir les voisins de palier : si plusieurs logements sont touchés, un traitement coordonné évite que les punaises reviennent.', 'En logement collectif, le traitement porte sur la chambre, mais aussi sur le salon, les plinthes et les prises proches du lit, où les punaises se glissent facilement.'])
        : pick(k, ['En maison, l\'infestation reste souvent limitée aux chambres au début : plus elle est traitée tôt, plus le traitement est simple.', 'Dans une maison, les punaises de lit se concentrent d\'abord autour des lits et des canapés, ce qui facilite un traitement ciblé si l\'on agit vite.', 'En pavillon, pensez aussi à la chambre d\'amis et au canapé-lit : les punaises de lit s\'y installent quand un invité ou un bagage les apporte.', 'Dans une maison, le technicien inspecte toutes les chambres, même celles qui semblent épargnées, pour traiter l\'ensemble des cachettes en une fois.'])
    case 'cafards':
      return dense
        ? pick(k, ['Dans l\'habitat collectif, les cafards circulent par les gaines techniques, les colonnes d\'eau et les vide-ordures : un traitement isolé dans un seul appartement ne suffit pas toujours.', 'En immeuble, cuisines et salles de bains sont reliées par les gaines : c\'est par là que les blattes passent d\'un logement à l\'autre.'])
        : pick(k, ['En maison, les cafards arrivent souvent avec des cartons, des courses ou des appareils d\'occasion, puis s\'installent près des sources de chaleur et d\'humidité.', 'Dans les maisons, les blattes se cachent derrière l\'électroménager, sous l\'évier et dans les placards de cuisine.'])
    case 'souris':
      return dense
        ? 'En immeuble, les souris profitent des gaines, des faux plafonds et des caves pour passer d\'un étage à l\'autre.'
        : pick(k, ['Autour des maisons, les souris entrent par des ouvertures de moins de 1 cm : bas de portes, passages de câbles, bouches d\'aération.', 'En pavillon, garages, celliers et combles sont les premières pièces visitées par les souris à l\'automne.'])
    case 'acariens':
      return dense
        ? pick(k, ['En appartement, une aération quotidienne et un taux d\'humidité entre 40 et 60 % (recommandation de l\'Assurance maladie) limitent la prolifération des acariens dans la literie.', 'Dans les logements collectifs, souvent moins ventilés, la literie et les textiles concentrent les acariens : aérez chaque jour, même en hiver.', 'Petites chambres, cuisine ouverte, linge qui sèche à l\'intérieur : en appartement, l\'humidité monte vite, et les acariens de la literie en profitent.', 'Dans un immeuble, la chambre est souvent la pièce la moins aérée : ouvrir les fenêtres dix minutes chaque matin aide à garder la literie plus saine.'])
        : pick(k, ['Dans une maison avec sous-sol, la chambre du rez-de-chaussée ou la pièce aménagée en bas est souvent la plus humide : c\'est là que les acariens prolifèrent en premier.', 'En maison, pensez aux chambres peu chauffées ou peu aérées, aux sous-sols aménagés et aux chambres d\'amis : l\'humidité y favorise les acariens.', 'Dans une maison, les pièces fermées une partie de l\'année gardent l\'humidité : aérez-les avant de les utiliser.'])
    case 'chenilles':
      return dense
        ? 'Même en ville, un seul pin dans une cour, un square ou une résidence peut accueillir des nids.'
        : pick(k, ['Haies, bosquets et allées plantées : dans les quartiers de maisons, les nids se voient surtout de décembre à mars, quand les arbres sont dégarnis autour.', 'Un pin planté près d\'une terrasse ou d\'une aire de jeux mérite une inspection chaque automne : c\'est là que le contact avec les poils urticants est le plus probable.', 'Dans les jardins privés, ce sont souvent un ou deux pins isolés qui hébergent les nids : inspectez-les dès l\'automne.', 'Les grands jardins plantés de pins sont les plus exposés : les nids apparaissent en hiver au sommet des branches ensoleillées.'])
    default:
      return dense
        ? pick(k, ['Dans les immeubles, punaises de lit et cafards passent d\'un logement à l\'autre par les gaines et les parties communes, et les rats fréquentent caves et locaux poubelles.', 'En habitat collectif, les demandes les plus courantes concernent les punaises de lit, les cafards dans les cuisines et les rats dans les caves.', 'En copropriété, rats des parties communes, cafards des gaines et punaises de lit se traitent mieux à l\'échelle de l\'immeuble qu\'appartement par appartement.'])
        : pick(k, ['Autour des maisons, rongeurs, guêpes et fourmis sont les demandes les plus fréquentes, surtout au printemps et à l\'automne.', 'En pavillon, ce sont souvent les souris à l\'automne, les nids de guêpes en été et les fourmis au printemps qui motivent un appel.', 'Jardins, garages et combles : autour des maisons, rats et souris cherchent un abri au froid, et les guêpes nichent sous les toits dès les beaux jours.'])
  }
}

// Le nuisible et son traitement d'abord : c'est l'objet de la page
function traitement(d: DonneesLocales, s: ServiceLocal, a: string) {
  const k = `${d.slug}${s}trt`
  switch (s) {
    case 'punaises':
      return pick(k, [
        `Contre les punaises de lit ${a}, nous proposons un traitement insecticide professionnel ou un traitement sans insecticide, par cryogénie et vapeur sèche. 2 passages sont inclus, à partir de 290 € TTC, avec une garantie 1 an.`,
        `Punaises de lit ${a} : le technicien inspecte le lit, le sommier, les plinthes et les meubles, puis traite par insecticide ou sans insecticide (cryogénie, vapeur sèche). 2 passages inclus, dès 290 € TTC, garantie 1 an.`,
        `${majuscule(a)}, nous traitons les punaises de lit au choix par insecticide professionnel ou sans insecticide, grâce à la cryogénie et à la vapeur sèche, qui tuent punaises et œufs au contact. Le tarif part de 290 € TTC, 2 passages compris, garantie 1 an.`,
        `Vous avez des piqûres au réveil ${a} ? Après inspection, nous traitons les punaises de lit par insecticide professionnel ou sans insecticide (cryogénie et vapeur sèche), avec 2 passages inclus dès 290 € TTC et une garantie 1 an.`,
        `Traitement des punaises de lit ${a} : insecticide rémanent ou méthodes sans insecticide, la cryogénie pour les fentes et la vapeur sèche pour les textiles. Deux passages compris, à partir de 290 € TTC, garantie 1 an.`,
        `${majuscule(a)}, chaque intervention contre les punaises de lit comprend 2 passages : un traitement insecticide ou sans insecticide (cryogénie, vapeur sèche), puis un contrôle. À partir de 290 € TTC, garantie 1 an.`,
      ])
    case 'deratisation':
      return pick(k, [
        `Pour une dératisation ${a}, la méthode la plus courante reste les postes d'appâtage sécurisés avec raticide. Nous posons aussi des pièges mécaniques ou connectés, et proposons en méthode alternative le piège Ekomille, sans raticide. Les accès sont toujours colmatés, avec une garantie 1 an.`,
        `Rats ${a} : diagnostic des points d'entrée, postes d'appâtage sécurisés avec raticide (la méthode la plus courante), pièges si besoin, et colmatage des accès. En méthode alternative, le piège Ekomille capture les rats sans raticide. Garantie 1 an.`,
        `${majuscule(a)}, nous traitons les rats en trois temps : recherche des passages, pose de postes d'appâtage sécurisés avec raticide (la méthode la plus courante), puis colmatage. Le piège Ekomille, sans raticide, est proposé en méthode alternative. Garantie 1 an.`,
        `Contre les rats ${a}, postes d'appâtage verrouillés avec raticide, pièges mécaniques ou connectés selon le lieu, et fermeture des accès. Pour qui ne veut pas de raticide, le piège Ekomille est une méthode alternative. Garantie 1 an.`,
      ])
    case 'souris':
      return pick(k, [
        `Contre les souris ${a}, nous posons des postes d'appâtage sécurisés avec raticide, la méthode la plus courante, ou des pièges mécaniques, puis nous bouchons les passages. En méthode alternative, le piège Ekomille fonctionne sans raticide. Garantie 1 an.`,
        `Souris ${a} : repérage des passages, postes d'appâtage sécurisés (méthode la plus courante) ou pièges, et colmatage des ouvertures. Si vous ne souhaitez pas de raticide, le piège Ekomille est une méthode alternative. Garantie 1 an.`,
      ])
    case 'cafards':
      return pick(k, [
        `Contre les cafards ${a}, nous combinons gel appât professionnel, insecticide ciblé et vapeur sèche dans les recoins, en 2 passages pour atteindre les éclosions. Garantie 1 an.`,
        `Cafards et blattes ${a} : gel appât qui atteint toute la colonie, insecticide sur les zones de passage et vapeur sèche sans produit, avec 2 passages et une garantie 1 an.`,
      ])
    case 'chenilles':
      return pick(k, [
        `Chenilles processionnaires ${a} : nous retirons et détruisons les nids, posons des écopièges autour des troncs et adaptons l'intervention à la saison. À partir de 89 € TTC, garantie 1 an.`,
        `${majuscule(a)}, nous intervenons contre les chenilles processionnaires du pin et du chêne : retrait des nids en hiver, écopièges au printemps, conseils pour protéger enfants et animaux. Dès 89 € TTC.`,
        `Un nid de chenilles processionnaires ${a} ? Nous intervenons avec une tenue de protection, retirons les nids accessibles et posons des écopièges pour capter les chenilles qui descendent du tronc. À partir de 89 € TTC.`,
        `Contre les chenilles processionnaires ${a}, l'intervention dépend de la saison : retrait des nids en hiver, écopièges avant les processions du printemps. À partir de 89 € TTC, garantie 1 an.`,
      ])
    case 'acariens':
      return pick(k, [
        `Contre les acariens ${a}, nous traitons la literie, les canapés et les tapis par vapeur sèche, cryogénie ou pulvérisation acaricide selon les textiles. À partir de 120 € TTC, garantie 1 an.`,
        `Acariens ${a} : vapeur sèche et cryogénie sans produit, ou pulvérisation acaricide professionnelle quand plusieurs pièces sont touchées. Dès 120 € TTC pour une chambre, garantie 1 an.`,
        `${majuscule(a)}, le traitement anti-acariens porte sur les matelas, sommiers, canapés, coussins et tapis : vapeur sèche, cryogénie ou acaricide professionnel, dès 120 € TTC, garantie 1 an.`,
        `Pour réduire les acariens ${a}, nous assainissons la literie et les textiles à la vapeur sèche ou à la cryogénie, sans produit, ou par pulvérisation acaricide. À partir de 120 € TTC.`,
      ])
    default:
      return pick(k, [
        `${majuscule(a)}, nous traitons rats, souris, punaises de lit, cafards, guêpes et fourmis, avec un traitement professionnel ou une méthode sans produit (cryogénie, vapeur sèche, pièges) selon la situation. Garantie 1 an.`,
        `Rats, punaises de lit, cafards ou nid de guêpes ${a} : un technicien certifié Certibiocide identifie le nuisible, vous propose un traitement chimique ou sans produit, et intervient avec une garantie 1 an.`,
        `Nos traitements ${a} couvrent tous les nuisibles courants : dératisation par postes sécurisés, punaises de lit par insecticide ou sans insecticide, cafards au gel appât, guêpes et frelons par traitement du nid. Garantie 1 an.`,
        `${majuscule(a)}, chaque intervention commence par un diagnostic : le technicien identifie le nuisible, puis traite avec un produit professionnel ou sans produit (cryogénie, vapeur sèche, pièges). Devis gratuit, garantie 1 an.`,
      ])
  }
}

// La ville, en une phrase : juste de quoi situer
function villeCourte(d: DonneesLocales, s: ServiceLocal) {
  const lieu = d.paris ? `Le ${d.nom.replace('Paris ', '')} arrondissement` : d.nom
  const v = liste(d.voisines.slice(0, 3))
  return pick(`${d.slug}${s}ville`, [
    `${lieu} (${d.cp.join(', ')}) compte ${nf(d.population)} habitants. Nous intervenons aussi tout près, à ${v}.`,
    `${lieu}, ${nf(d.population)} habitants, code postal ${d.cp[0]} : intervention possible le jour même, comme dans les communes voisines (${v}).`,
    `Nous couvrons tout ${d.paris ? 'l\'arrondissement' : 'le territoire de la commune'} (${d.cp.join(', ')}, ${nf(d.population)} habitants) et les alentours : ${v}.`,
  ])
}

// Version courte pour les punaises : pas de liste de lignes
function transportsCourt(d: DonneesLocales) {
  if (!d.gares.length) return null
  return `Le risque d'attraper des punaises de lit dans les transports, ici ${ligneLisible(d.lignes[0], true)}${d.lignes[1] ? ` ou ${ligneLisible(d.lignes[1], true)}` : ''}, reste faible : elles voyagent surtout dans les bagages, après un séjour à l'hôtel ou un voyage.`
}

const TITRES: Record<ServiceLocal, (a: string) => string> = {
  deratisation: (a) => `Dératisation ${a}`,
  punaises: (a) => `Traitement des punaises de lit ${a}`,
  cafards: (a) => `Traitement des cafards ${a}`,
  souris: (a) => `Traitement des souris ${a}`,
  chenilles: (a) => `Chenilles processionnaires ${a} : notre intervention`,
  acariens: (a) => `Traitement des acariens ${a}`,
  commune: (a) => `Nos traitements ${a}`,
}

export default function ContexteLocal({ slug, service, a }: { slug: string; service: ServiceLocal; a: string }) {
  const d = DONNEES_LOCALES[slug]
  if (!d) return null
  // 1. le traitement, 2. le conseil lié au type de logement, 3. au plus 2 détails locaux utiles au nuisible, 4. la ville en une phrase
  const details = [eau(d, service), ...verdure(d, service), service === 'punaises' ? transportsCourt(d) : null].filter((p): p is string => Boolean(p)).slice(0, 2)
  const paragraphes = [traitement(d, service, a), habitat(d, service), ...details, villeCourte(d, service)].filter(
    (p): p is string => Boolean(p),
  )
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: '#0a0a0a' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-6">{TITRES[service](a)}</h2>
        {paragraphes.map((p, i) => (
          <p key={p.slice(0, 32)} className={i === paragraphes.length - 1 ? 'text-white/50 text-sm leading-relaxed mt-6 flex items-start gap-2' : 'text-white/70 leading-relaxed mb-4'}>
            {i === paragraphes.length - 1 && <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />}
            {p}
          </p>
        ))}
        <p className="text-white/35 text-xs mt-5">
          Sources : Insee, population municipale (geo.api.gouv.fr) ; Île-de-France Mobilités, gares et stations ; OpenStreetMap, cours d&apos;eau et espaces verts{service === 'chenilles' && d.pinsHa ? ' ; IGN, inventaire forestier' : ''}.
        </p>
      </div>
    </section>
  )
}
