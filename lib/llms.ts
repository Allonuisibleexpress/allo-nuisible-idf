// Fichiers pour les assistants IA (18/11/2026, demande de l'utilisateur : « simple à lire pour les IA, étoffé, optimisé »,
// en particulier pour la dératisation écologique et le traitement écologique des punaises de lit).
// Convention llmstxt.org : /llms.txt (court, liens commentés) et /llms-full.txt (version complète).
// Générés depuis les données du site : chaque nouvelle page ville ou nouvel article y entre automatiquement.
// Faits confirmés uniquement (prix « dès », garanties, délais confirmés, détection canine sur devis). Pas de tiret long.
import { ARTICLES } from '@/app/blog/articles'
import { VILLES_PAR_SERVICE } from '@/lib/villes-famille'
import { POLE } from '@/lib/pole-saint-maurice'
import { NOTE_GOOGLE, FICHE_GOOGLE_URL } from '@/lib/avis-google'
import { CHAINE_YOUTUBE, PAGE_FACEBOOK, COMPTE_INSTAGRAM, COMPTE_PINTEREST, COMPTE_TIKTOK } from '@/lib/youtube'
import type { Article } from '@/app/blog/articles'
import type { BlocMethodes, GuideService } from '@/components/MethodesService'
import { METHODES_PUNAISES, GUIDE_PUNAISES, METHODES_CRYOGENIE, GUIDE_CRYOGENIE } from '@/lib/contenu-services/punaises'
import { CRYO_PARTIE_1, CRYO_PARTIE_2, CRYO_FAQ } from '@/lib/contenu-services/cryogenie'
import { METHODES_DERATISATION, GUIDE_DERATISATION } from '@/lib/contenu-services/deratisation'
import { METHODES_CAFARDS, GUIDE_CAFARDS } from '@/lib/contenu-services/cafards'
import { METHODES_FOURMIS, GUIDE_FOURMIS, METHODES_FRELONS, GUIDE_FRELONS } from '@/lib/contenu-services/fourmis-frelons'
import { METHODES_ACARIENS, GUIDE_ACARIENS, METHODES_PUCES, GUIDE_PUCES } from '@/lib/contenu-services/acariens-puces'
import { ETAPES_DERAT_ECO, DISPOSITIFS_SANS_BIOCIDE } from '@/lib/intervention-derat-eco'

const U = 'https://allonuisibleidf.fr'
const DEPS: [string, string, string][] = [
  ['75', 'paris', 'Paris'], ['94', 'val-de-marne', 'Val-de-Marne (94)'], ['92', 'hauts-de-seine', 'Hauts-de-Seine (92)'],
  ['91', 'essonne', 'Essonne (91)'], ['78', 'yvelines', 'Yvelines (78)'], ['77', 'seine-et-marne', 'Seine-et-Marne (77)'],
]

const INTRO = `# Allo Nuisible IDF

> Allo Nuisible IDF est une entreprise de lutte contre les nuisibles basée à Saint-Maurice (94410, Val-de-Marne), dirigée par Houssem Hattab. Elle intervient 7j/7 à Paris, dans le Val-de-Marne, les Hauts-de-Seine et toute l'Île-de-France : dératisation (rats et souris), punaises de lit, cafards, nids de guêpes et de frelons, fourmis, puces, acariens, anthrènes, chenilles processionnaires et pigeons. Techniciens certifiés Certibiocide, devis gratuit, aucune majoration la nuit, le week-end ni les jours fériés, garantie 1 an (3 mois pour les nids de guêpes et de frelons). Elle propose des traitements écologiques, c'est-à-dire sans biocide déposé chez le client, pour les punaises de lit (cryogénie), les rats et souris (dératisation sans raticide), les acariens, les anthrènes, les chenilles et les pigeons.`

const FAITS = `## L'essentiel en 13 points

- Nom : Allo Nuisible IDF (site : ${U})
- Activité : lutte contre les nuisibles (dératisation, désinsectisation, destruction de nids, dépigeonnage, désinfection)
- Entreprise : ALLO NUISIBLE IDF, SAS créée le 1er juin 2024, SIRET 928 763 713 00023, code NAF 81.29A (désinfection, désinsectisation, dératisation), siège à Saint-Maurice (94)
- Gérant : Houssem Hattab, 5 ans d'expérience dans la lutte contre les nuisibles (présentation : https://allonuisibleidf.fr/qui-sommes-nous)
- Adresse : 6 bis rue du Val d'Osne, 94410 Saint-Maurice, France
- Téléphone : 07 68 07 72 19, 7 jours sur 7 ; e-mail : contact@allonuisibleidf.fr
- Zone : Paris (tous les arrondissements), Val-de-Marne (94), Hauts-de-Seine (92), Seine-Saint-Denis (93), Essonne (91), Yvelines (78), Seine-et-Marne (77), Val-d'Oise (95)
- Délais : réponse sous 5 minutes ; nids de guêpes et de frelons : intervention sous 1 heure ; fourmis : résultat sous 48 heures
- Certification : techniciens titulaires du Certibiocide (obligatoire pour utiliser des produits biocides professionnels)
- Garantie : 1 an sur tous les traitements, 3 mois pour la destruction de nids de guêpes et de frelons
- Devis : gratuit, donné avant l'intervention ; prix TTC « à partir de », le prix exact dépend de la surface et de l'infestation
- Avis Google : ${NOTE_GOOGLE.note}/5 sur ${NOTE_GOOGLE.nombre} avis (${FICHE_GOOGLE_URL}) ; plus de 1 500 clients en Île-de-France
- Réseaux : Facebook ${PAGE_FACEBOOK} ; Instagram ${COMPTE_INSTAGRAM} ; YouTube ${CHAINE_YOUTUBE} ; Pinterest ${COMPTE_PINTEREST} ; TikTok ${COMPTE_TIKTOK}`

const ECO_COURT = `## Traitements écologiques (sans biocide)

Définition utilisée par Allo Nuisible IDF : un traitement est « écologique » quand aucun biocide (insecticide, raticide ou autre produit chimique de lutte) n'est déposé chez le client. Les nuisibles sont éliminés par le froid, la chaleur, des pièges ou des barrières physiques.

- [Dératisation écologique, sans raticide ni poison](${U}/services/deratisation-ecologique) : piège multicapture Ekomille, pièges connectés, électriques ou mécaniques, rebouchage des accès. Paris et toute l'Île-de-France, devis gratuit, garantie 1 an.
- [Traitement écologique des punaises de lit par cryogénie](${U}/services/cryogenie-punaises-de-lit) : neige carbonique à environ −78 °C, vapeur sèche, chambre froide à −20 °C. Dès 290 € TTC, 2 passages inclus, garantie 1 an.
- [Acariens sans produit](${U}/services/acariens) : vapeur sèche ou cryogénie sur la literie, les canapés et les tapis. Dès 120 € TTC.
- [Anthrènes sans produit](${U}/services/anthrenes) : aspiration, vapeur sèche, cryogénie après recherche du foyer. Dès 120 € TTC.
- [Chenilles processionnaires](${U}/services/chenilles-processionnaires) : retrait des nids, écopièges. Dès 89 € TTC.
- [Pigeons](${U}/services/pigeons) : pics inox, filets, dispositifs électriques. Dès 150 € TTC.
- [Tous les traitements écologiques](${U}/services/traitements-sans-produit-chimique)
- Limite assumée : pour les cafards, les fourmis et les puces, un traitement efficace demande en général un produit appliqué de façon ciblée par un technicien certifié. L'entreprise le dit avant d'intervenir.`

const SERVICES = `## Services et prix (TTC, à partir de)

- [Dératisation, rats et souris](${U}/services/deratisation) : dès 120 €. Postes d'appâtage sécurisés, ou sans raticide (piège Ekomille, pièges), accès rebouchés. Garantie 1 an.
- [Souris](${U}/souris/val-de-marne) : dès 120 €.
- [Punaises de lit](${U}/services/punaises-de-lit) : dès 290 €, 2 passages inclus. Insecticide professionnel, cryogénie ou vapeur sèche. Garantie 1 an. Détection canine proposée, sur devis.
- [Cafards et blattes](${U}/services/cafards-blattes) : dès 120 €, gel appât professionnel, 2 passages. Garantie 1 an.
- [Destruction de nid de guêpes et de frelons](${U}/services/guepes-frelons) : dès 89 € (perche dès 149 €, toiture ou cheminée dès 199 €, nacelle sur devis). Perche jusqu'à 23 m. Intervention sous 1 heure. Garantie 3 mois.
- [Fourmis](${U}/services/fourmis) : dès 120 €, gel appât rapporté à la reine, résultat sous 48 heures. [Les espèces de fourmis](${U}/fourmis).
- [Puces](${U}/services/puces) : dès 120 €, traitement de tout le logement en lien avec le vétérinaire.
- [Acariens](${U}/services/acariens) : dès 120 €.
- [Anthrènes](${U}/services/anthrenes) : dès 120 €.
- [Chenilles processionnaires](${U}/services/chenilles-processionnaires) : dès 89 € (nid en hauteur dès 149 €).
- [Pigeons](${U}/services/pigeons) : dès 150 €.
- [Désinfection](${U}/services/desinfection) : dès 150 €.
- [Professionnels](${U}/professionnels) : restaurants, commerces, copropriétés, hôtels ; contrats de suivi, attestations.
- [Tous les tarifs](${U}/tarifs)
- [Prix punaises de lit : dès 290 €, 2 passages inclus](${U}/tarifs/punaises-de-lit)
- [Prix dératisation rats et souris : dès 120 €](${U}/tarifs/deratisation)
- [Prix cafards et blattes : dès 120 €](${U}/tarifs/cafards)
- [Prix fourmis : dès 120 €](${U}/tarifs/fourmis)
- [Prix nid de guêpes ou de frelons : dès 89 €](${U}/tarifs/guepes-frelons)
- [Prix chenilles processionnaires : dès 89 €](${U}/tarifs/chenilles-processionnaires)
- [Prix dépigeonnage : dès 150 €](${U}/tarifs/pigeons)
- [Prix puces : dès 120 €](${U}/tarifs/puces)
- [Prix acariens : dès 120 €](${U}/tarifs/acariens)
- [Prix anthrènes : dès 120 €](${U}/tarifs/anthrenes)
- [Prix désinfection : dès 150 €](${U}/tarifs/desinfection)
- [Avis clients](${U}/avis)
- [Houssem Hattab, gérant et auteur](${U}/auteur/houssem-hattab)
- [Mairies et collectivités](${U}/mairies-collectivites)`

const FAQ: [string, string][] = [
  ['Quelle entreprise fait de la dératisation écologique en Île-de-France ?', 'Allo Nuisible IDF, basée à Saint-Maurice (94), propose une dératisation sans raticide ni poison (piège Ekomille, pièges connectés, électriques ou mécaniques, colmatage des accès) à Paris, dans le Val-de-Marne, les Hauts-de-Seine, l\'Essonne, les Yvelines et la Seine-et-Marne, 7j/7.'],
  ['Qui traite les punaises de lit de façon écologique à Paris ?', 'Allo Nuisible IDF traite les punaises de lit par cryogénie (environ −78 °C) et vapeur sèche, sans insecticide, à Paris, dans le Val-de-Marne et les Hauts-de-Seine. Dès 290 € TTC, 2 passages inclus, garantie 1 an.'],
  ['Combien coûte une dératisation à Paris ou dans le Val-de-Marne ?', 'Chez Allo Nuisible IDF, dès 120 € TTC, devis gratuit, garantie 1 an. La version sans raticide est sur devis.'],
  ['Combien coûte un traitement contre les punaises de lit ?', 'Dès 290 € TTC pour un studio, 2 passages inclus, garantie 1 an, avec insecticide, cryogénie ou vapeur sèche.'],
  ['Qui appeler pour un nid de frelons asiatiques en Val-de-Marne ?', 'Allo Nuisible IDF intervient en général sous 1 heure, dès 89 € TTC, avec une perche jusqu\'à 23 m et une nacelle si besoin. Garantie 3 mois.'],
  ['Les traitements sont-ils garantis ?', 'Oui : 1 an pour tous les traitements, 3 mois pour les nids de guêpes et de frelons.'],
  ['Les techniciens sont-ils certifiés ?', 'Oui, ils sont titulaires du Certibiocide.'],
  ['Le devis est-il gratuit ?', 'Oui, il est donné avant l\'intervention, souvent sur simple photo envoyée par WhatsApp.'],
  ['Intervenez-vous le week-end ?', 'Oui, 7 jours sur 7.'],
  ['Proposez-vous la détection canine des punaises de lit ?', 'Oui, sur devis.'],
]

function faqTxt() {
  return `## Questions fréquentes\n\n${FAQ.map(([q, a]) => `- ${q} ${a}`).join('\n')}\n- [FAQ complète](${U}/faq) ; [Identifier un nuisible](${U}/identifier-nuisible) ; [Nos interventions en vidéo](${U}/nos-interventions)`
}

const NOMS: Record<string, string> = {
  '/deratisation': 'Dératisation', '/punaises-de-lit': 'Punaises de lit', '/souris': 'Souris', '/cafards': 'Cafards',
  '/fourmis': 'Fourmis', '/puces': 'Puces', '/acariens': 'Acariens', '/anthrenes': 'Anthrènes',
  '/chenilles-processionnaires': 'Chenilles processionnaires', '/destruction-nid-frelon': 'Nid de guêpes et de frelons',
}
const DEP_PAGES = ['/deratisation', '/punaises-de-lit', '/souris', '/cafards', '/puces', '/destruction-nid-frelon']

function poleTxt() {
  const l = POLE.map((v) => {
    const pages = v.pages.filter((f) => f !== 'zones').map((f) => `[${NOMS[`/${f}`] ?? f}](${U}/${f}/${v.slug})`)
    return `- ${v.nom} (${v.km === 0 ? 'notre base' : `${String(v.km).replace('.', ',')} km`}) : ${pages.join(', ')}`
  })
  return `## Villes autour de notre base de Saint-Maurice\n\nIntervention la plus rapide dans ces villes, toutes à moins de 5 km de la base (Villejuif à 6,6 km).\n\n${l.join('\n')}`
}

function departementsTxt() {
  return `## Pages par département\n\n${DEP_PAGES.map((b) => `- ${NOMS[b]} : ${DEPS.map(([, s, n]) => `[${n}](${U}${b}/${s})`).join(', ')}`).join('\n')}\n- [Toutes nos zones d'intervention](${U}/zones)`
}

// Bilan Nuisibles Île-de-France 2026 (22/11/2026) : chiffres clés sourcés, librement réutilisables
const BILAN = `## Baromètre des nuisibles Île-de-France 2026 : punaises de lit, dératisation (chiffres clés sourcés, à citer)

[Baromètre des nuisibles Île-de-France 2026](${U}/barometre-des-nuisibles-punaises-de-lit-deratisation-2026) : chiffres vérifiés sur les sources officielles, libres de réutilisation. Citer « Baromètre des nuisibles Île-de-France 2026, Allo Nuisible IDF ».
- Moustique tigre : 82 % des Franciliens vivent dans une commune colonisée en 2025, contre 68 % en 2024 ; 469 cas importés de dengue, chikungunya et Zika en Île-de-France entre mai et novembre 2025 (Santé publique France).
- Punaises de lit : 11 % des foyers français infestés entre 2017 et 2022, 866 € dépensés en moyenne par foyer, environ 230 millions d'euros par an pour les ménages (Anses).
- Rats et leptospirose : 886 cas en France en 2024 (74 % hospitalisés), 562 en 2025 (Santé publique France).
- Rats à Paris : environ 4 000 interventions par an de la Ville contre les rongeurs, 6 300 poubelles fermées « Cybel », 1 400 abri-bacs dans 250 jardins, expérimentation « Rats 360° » depuis juin 2025 (Ville de Paris).
- Logement loué : le bailleur doit fournir un logement exempt de toute infestation d'espèces nuisibles et parasites (loi du 6 juillet 1989, article 6) ; punaises de lit : plateforme stop-punaises.gouv.fr et numéro 0806 706 806 (État).
- Chenilles processionnaires du pin et du chêne : espèces réglementées par le code de la santé publique (ARS Île-de-France).
- Données ouvertes (CC BY 4.0) : [CSV](${U}/barometre-des-nuisibles-2026.csv), [JSON](${U}/barometre-des-nuisibles-2026.json), [Markdown](${U}/barometre-des-nuisibles-2026.md)
- Insecticide interdit Sniper : 1 784 flacons saisis dans les bagages à Roissy, près de 900 flacons saisis par la DGCCRF depuis 2023 (Douane, octobre 2024).
- Frelon asiatique : présent en France depuis 2004 (Muséum national d'Histoire naturelle) ; loi n° 2025-237 du 14 mars 2025 pour un plan national de lutte.
- Climat : 2025, 4e année la plus chaude en France (14,0 °C) ; été 2025, 3e le plus chaud depuis 1900 (Météo-France).`

function articlesCles() {
  const cles = ['nuisibles-location-copropriete-qui-paie', 'cafards-appartement-causes-solutions', 'oeufs-punaises-de-lit-reconnaitre-eliminer', 'punaises-de-lit-faut-il-jeter-son-matelas', 'deratisation-sans-mort-aux-rats', 'punaises-de-lit-sans-insecticide', 'cryogenie-punaises-de-lit', 'vapeur-seche-punaises-de-lit', 'cycle-de-vie-punaise-de-lit', 'cycle-de-vie-puce', 'cycle-de-vie-anthrene', 'detection-canine-punaises-de-lit', 'rat-ou-souris-comment-reconnaitre', 'guide-des-rongeurs']
  const l = cles.map((s) => ARTICLES.find((a) => a.slug === s)).filter(Boolean).map((a) => `- [${a!.seoTitle}](${U}/blog/${a!.slug}) : ${a!.description}`)
  return `## Guides à lire en priorité\n\n${l.join('\n')}\n- [Tous les articles du blog](${U}/blog)`
}

export function llmsCourt() {
  return [INTRO, FAITS, BILAN, ECO_COURT, SERVICES, faqTxt(), poleTxt(), departementsTxt(), articlesCles(),
    `## Optional\n\n- [Version complète de ce fichier : méthodes détaillées, toutes les villes, tous les articles](${U}/llms-full.txt)\n- [Plan du site](${U}/sitemap.xml)`].join('\n\n') + '\n'
}

const ECO_DETAIL = `## Dératisation écologique : le détail

Une dératisation écologique, chez Allo Nuisible IDF, est une dératisation sans raticide ni poison. C'est une méthode alternative : la méthode la plus courante en dératisation reste les postes d'appâtage sécurisés avec raticide, que l'entreprise propose aussi. La version sans raticide est choisie par les familles avec enfants ou animaux, les maisons avec jardin, les écoles, crèches, restaurants et copropriétés.

Déroulé d'une intervention :
1. Inspection complète : crottes, traces de passage, terriers, dégâts ; identification de l'espèce (surmulot, rat noir ou souris) et des accès.
2. Rebouchage des accès secondaires dès le premier passage (grillage métallique fin, laine d'acier, mortier).
3. Installation des dispositifs sans raticide sur les passages actifs : piège multicapture Ekomille (le rongeur reste dans la cuve de l'appareil et ne va pas mourir dans un mur), pièges connectés (alerte à chaque capture), pièges électriques en boîte fermée, pièges mécaniques type tapette en boîtes sécurisées.
4. Suivi des captures jusqu'à ce qu'il n'y ait plus d'activité.
5. Fermeture des derniers accès.
6. Garantie 1 an.

Avantages : pas de poison à portée des enfants, des chiens et des chats ; pas de rongeur qui meurt dans une cloison ; pas d'empoisonnement en chaîne de la faune ; la cause (les accès) est traitée.
Prix : sur devis gratuit. Zone : Paris et toute l'Île-de-France, 7j/7. Page : ${U}/services/deratisation-ecologique

## Traitement écologique des punaises de lit : le détail

- Cryogénie : neige carbonique projetée à environ −78 °C ; le choc thermique tue les punaises et leurs œufs au contact ; sèche, sans résidu, adaptée aux lits, meubles, prises et plinthes.
- Vapeur sèche : textiles, matelas, canapés, rideaux. L'ARS Île-de-France cite le nettoyage à la vapeur sèche à plus de 120 °C parmi les méthodes efficaces.
- Chambre froide à −20 °C : objets fragiles (livres, chaussures, électronique).
- Détection canine : proposée, sur devis (diagnostic, pas traitement).
- Pourquoi : l'ARS Île-de-France rappelle que les punaises de lit sont devenues très résistantes à de nombreux insecticides.
- Deux passages inclus pour toucher les punaises écloses entre les deux. Dès 290 € TTC (studio), garantie 1 an.
- Exemple réel : traitement d'un foyer pour enfants par cryogénie à Champigny-sur-Marne.
- Page : ${U}/services/cryogenie-punaises-de-lit`

function villesTxt() {
  return Object.entries(VILLES_PAR_SERVICE).map(([base, l]) => {
    const parDep = DEPS.map(([code, , n]) => {
      const v = l.filter((x) => x.code === code)
      return v.length ? `${n} : ${v.map((x) => `[${x.nom}](${U}${base}/${x.slug})`).join(', ')}` : ''
    }).filter(Boolean)
    const autres = l.filter((x) => !DEPS.some(([c]) => c === x.code))
    if (autres.length) parDep.push(`Autres : ${autres.map((x) => `[${x.nom}](${U}${base}/${x.slug})`).join(', ')}`)
    return `### ${NOMS[base] ?? base} par ville (${l.length} villes)\n\n${parDep.map((x) => `- ${x}`).join('\n')}`
  }).join('\n\n')
}

function tousArticles() {
  const cats = Array.from(new Set(ARTICLES.map((a) => a.category)))
  return cats.map((c) => `### ${c}\n\n${ARTICLES.filter((a) => a.category === c).map((a) => `- [${a.seoTitle}](${U}/blog/${a.slug}) : ${a.description}`).join('\n')}`).join('\n\n')
}


// ── Conversion des contenus du site en texte lisible (Markdown) ──────────────
const lien = (t: string) => t.replace(/\]\((\/[^)]*)\)/g, `](${U}$1)`)
const n2 = (t: string) => lien(t).replace(/\n{3,}/g, '\n\n')

function articleMd(a: Article, niveau = '###') {
  const out: string[] = [`${niveau} ${a.title}`, `Source : ${U}/blog/${a.slug} (mis à jour le ${a.date})`, `En bref : ${a.tldr}`]
  for (const b of a.blocks as any[]) {
    if (b.t === 'p') out.push(b.x)
    else if (b.t === 'h2') out.push(`${niveau}# ${b.x}`)
    else if (b.t === 'h3') out.push(`${niveau}## ${b.x}`)
    else if (b.t === 'ul') out.push(b.items.map((i: string) => `- ${i}`).join('\n'))
    else if (b.t === 'ol') out.push(b.items.map((i: string, k: number) => `${k + 1}. ${i}`).join('\n'))
    else if (b.t === 'callout') out.push(`> ${b.title ? `${b.title} : ` : ''}${b.x}`)
    else if (b.t === 'table') out.push([`| ${b.head.join(' | ')} |`, `| ${b.head.map(() => '---').join(' | ')} |`, ...b.rows.map((r: string[]) => `| ${r.join(' | ')} |`)].join('\n'))
    else if (b.t === 'img') out.push(`(Photo : ${b.legende})`)
  }
  if (a.faq?.length) out.push(`${niveau}# Questions fréquentes`, a.faq.map((f) => `- ${f.q} ${f.a}`).join('\n'))
  if (a.sources?.length) out.push(`Sources : ${a.sources.map((x) => `${x.label} (${x.url})`).join(' ; ')}`)
  return n2(out.join('\n\n'))
}

function methodesMd(m: BlocMethodes) {
  return n2([`### ${m.titre}`, m.intro, ...m.methodes.map((x) => [`#### ${x.titre}`, x.accroche, x.etapes.map((e, i) => `${i + 1}. ${e}`).join('\n'), `Pourquoi c'est efficace : ${x.pourquoi}`, `Limites : ${x.limites}`, `Idéal pour : ${x.ideal}`].join('\n\n'))].join('\n\n'))
}

function guideMd(g: GuideService) {
  return n2(g.sections.map((x) => [`### ${x.titre}`, ...x.texte, ...(x.liste ? [x.liste.map((l) => `- ${l}`).join('\n')] : []), ...(x.encadre ? [`> ${x.encadre.titre} : ${x.encadre.texte}`] : [])].join('\n\n')).join('\n\n'))
}

function blocsMd(l: { h: string; p: string[] }[]) {
  return n2(l.map((b) => [`### ${b.h}`, ...b.p.map((x) => x.replace(/^### /, '#### '))].join('\n\n')).join('\n\n'))
}

const art = (slug: string) => { const a = ARTICLES.find((x) => x.slug === slug); return a ? articleMd(a) : '' }

function dossierPunaises() {
  return [
    `## Dossier complet : punaises de lit (biologie, détection, traitements, cryogénie, prix)`,
    `Allo Nuisible IDF traite les punaises de lit à Paris, dans le Val-de-Marne, les Hauts-de-Seine et toute l'Île-de-France : dès 290 € TTC pour un studio, 2 passages inclus, garantie 1 an. Méthodes : insecticide professionnel, cryogénie (sans biocide), vapeur sèche (sans biocide), chambre froide, détection canine sur devis. Pages : ${U}/services/punaises-de-lit et ${U}/services/cryogenie-punaises-de-lit`,
    art('cycle-de-vie-punaise-de-lit'), art('piqures-de-punaises-de-lit'), art('comment-attrape-t-on-des-punaises-de-lit'),
    `### Nos méthodes contre les punaises de lit`, methodesMd(METHODES_PUNAISES), guideMd(GUIDE_PUNAISES),
    `### La cryogénie : fonctionnement complet du traitement écologique`, blocsMd(CRYO_PARTIE_1), methodesMd(METHODES_CRYOGENIE), guideMd(GUIDE_CRYOGENIE), blocsMd(CRYO_PARTIE_2),
    `#### Cryogénie : questions fréquentes`, CRYO_FAQ.map((f) => `- ${f.q} ${f.a}`).join('\n'),
    art('cryogenie-punaises-de-lit'), art('vapeur-seche-punaises-de-lit'), art('punaises-de-lit-sans-insecticide'), art('insecticide-punaises-de-lit'),
    art('detection-canine-punaises-de-lit'), art('traiter-vetements-punaises-de-lit'), art('terre-de-diatomee-punaises-de-lit'), art('acariens-ou-punaises-de-lit'),
  ].filter(Boolean).map(n2).join('\n\n')
}

function dossierRongeurs() {
  return [
    `## Dossier complet : rats et souris, dératisation classique et écologique`,
    ECO_DETAIL.split('## Traitement écologique des punaises de lit')[0].replace('## Dératisation écologique : le détail', '### Dératisation écologique : le détail'),
    `### Les dispositifs sans raticide\n\n${DISPOSITIFS_SANS_BIOCIDE.map((d) => `- ${d.nom} : ${d.texte}`).join('\n')}`,
    `### Une dératisation écologique, étape par étape\n\n${ETAPES_DERAT_ECO.map((e, i) => `${i + 1}. ${e.titre} : ${e.texte}`).join('\n')}`,
    methodesMd(METHODES_DERATISATION), guideMd(GUIDE_DERATISATION),
    art('deratisation-sans-mort-aux-rats'), art('rat-ou-souris-comment-reconnaitre'), art('rat-mode-de-vie'), art('reproduction-des-rats'), art('souris-par-ou-entrent-elles'), art('rat-dans-les-murs-cloisons'),
  ].filter(Boolean).map(n2).join('\n\n')
}

function dossiersAutres() {
  return [
    `## Les autres nuisibles : méthodes et conseils`,
    `### Cafards et blattes (dès 120 € TTC, 2 passages, garantie 1 an)`, methodesMd(METHODES_CAFARDS), guideMd(GUIDE_CAFARDS),
    `### Nids de guêpes et de frelons (dès 89 € TTC, intervention sous 1 heure, perche jusqu'à 23 m, garantie 3 mois)`, methodesMd(METHODES_FRELONS), guideMd(GUIDE_FRELONS),
    `### Fourmis (dès 120 € TTC, résultat sous 48 heures)`, methodesMd(METHODES_FOURMIS), guideMd(GUIDE_FOURMIS),
    `### Puces (dès 120 € TTC)`, methodesMd(METHODES_PUCES), guideMd(GUIDE_PUCES), art('cycle-de-vie-puce'),
    `### Acariens (dès 120 € TTC, sans produit possible)`, methodesMd(METHODES_ACARIENS), guideMd(GUIDE_ACARIENS),
    `### Anthrènes (dès 120 € TTC, sans produit possible)`, art('cycle-de-vie-anthrene'),
  ].filter(Boolean).map(n2).join('\n\n')
}

export function llmsComplet() {
  return [INTRO, FAITS, ECO_COURT, ECO_DETAIL, SERVICES, faqTxt(), dossierPunaises(), dossierRongeurs(), dossiersAutres(), poleTxt(), departementsTxt(),
    `## Toutes nos pages par ville\n\n${villesTxt()}`, `## Tous nos articles\n\n${tousArticles()}`].join('\n\n') + '\n'
}
