// Articles du blog Allo Nuisible IDF.
// Sujets choisis pour NE PAS cannibaliser le blog d'allonuisibleexpress.fr (aucun doublon d'intention).
// Texte riche : **gras** et [ancre](/lien) sont interprétés au rendu.

export type Block =
  | { t: 'p'; x: string }
  | { t: 'h2'; x: string }
  | { t: 'h3'; x: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'callout'; tone: 'warn' | 'ok' | 'info'; title: string; x: string }
  | { t: 'table'; head: string[]; rows: string[][] }

export interface Article {
  slug: string
  title: string
  seoTitle: string
  description: string
  date: string
  category: string
  readMin: number
  tldr: string
  service: { href: string; label: string }
  blocks: Block[]
  terrain: string
  faq: { q: string; a: string }[]
  sources: { label: string; url: string }[]
  cta: { title: string; text: string }
}

export const ARTICLES: Article[] = [
  // 1 ─────────────────────────────────────────────────────────────
  {
    slug: 'rat-dans-les-toilettes',
    title: "Rat dans les toilettes : comment il remonte (et comment le bloquer)",
    seoTitle: "Rat dans les toilettes : comment il remonte (et le bloquer)",
    description: "Un rat est sorti de vos WC ? Voici par où il passe, les 4 gestes à faire tout de suite et la seule protection durable : le clapet anti-retour.",
    date: '2026-09-23',
    category: 'Rongeurs',
    readMin: 7,
    tldr: "Un rat peut remonter par les toilettes : le surmulot (Rattus norvegicus), le rat des égouts, nage, retient sa respiration et grimpe dans les colonnes d'évacuation jusqu'à la cuvette. Cela arrive surtout après de fortes pluies ou des travaux sur le réseau. Sur le moment : abattant fermé et lesté, porte de la pièce close. Durablement : un clapet anti-retour sur l'évacuation et une dératisation des réseaux et parties communes. Allo Nuisible IDF intervient 7j/7 en Île-de-France.",
    service: { href: '/services/deratisation', label: 'Dératisation en Île-de-France' },
    blocks: [
      { t: 'p', x: "Oui, **un rat peut sortir de vos toilettes**, et ce n'est pas une légende urbaine. Le coupable est presque toujours le **surmulot** (*Rattus norvegicus*), aussi appelé rat d'égout. Il vit dans les réseaux d'assainissement, nage très bien, retient sa respiration le temps de franchir le siphon et grimpe à l'intérieur des canalisations verticales. La cuvette n'est pour lui qu'une sortie de plus." },
      { t: 'callout', tone: 'warn', title: 'Pourquoi ne pas prendre ça à la légère', x: "Selon **Santé publique France**, la France compte en moyenne **300 à 600 cas de leptospirose par an**, en hausse depuis 2014, et **les rats en sont le principal réservoir animal**. La bactérie passe par leur urine, précisément ce qu'ils laissent sur la lunette et dans la salle de bain." },
      { t: 'h2', x: "Par où un rat remonte-t-il jusqu'aux WC ?" },
      { t: 'p', x: "Le trajet est toujours le même : égout public, branchement de l'immeuble, **colonne d'évacuation commune**, puis la dérivation de votre appartement. Le siphon rempli d'eau au fond de la cuvette ne l'arrête pas : quelques secondes d'apnée lui suffisent." },
      { t: 'h3', x: "Les 3 situations qui déclenchent une remontée" },
      { t: 'ul', items: [
        "**Fortes pluies et orages** : les galeries se remplissent, les rats cherchent des sorties vers le haut.",
        "**Travaux de voirie ou de réseau** à proximité : les colonies sont dérangées et se déplacent.",
        "**Canalisation fissurée ou regard mal fermé** dans l'immeuble : l'accès devient permanent, ce n'est plus un accident mais une route.",
      ] },
      { t: 'h2', x: "Rat dans la cuvette : les 4 gestes à faire tout de suite" },
      { t: 'ol', items: [
        "**Fermez l'abattant et lestez-le** (pack d'eau, seau rempli). Un rat soulève facilement un abattant léger.",
        "**Fermez la porte de la pièce** et bouchez le bas avec une serviette pour qu'il ne se réfugie pas ailleurs.",
        "**Ne tentez pas de l'attraper** à mains nues : morsure possible et contact avec l'urine.",
        "**Prévenez le syndic ou le bailleur** si vous êtes en immeuble : la colonne est commune, vos voisins sont concernés.",
      ] },
      { t: 'callout', tone: 'info', title: "L'erreur qu'on voit souvent", x: "Verser de la javel ou de l'insecticide en grande quantité dans la cuvette. Cela n'élimine pas les rats du réseau, abîme les canalisations et dégage des vapeurs irritantes dans une petite pièce fermée." },
      { t: 'h2', x: "La seule protection durable : le clapet anti-retour" },
      { t: 'p', x: "Le **clapet anti-retour** (ou clapet anti-rongeurs) se pose sur l'évacuation des toilettes ou sur le collecteur de l'immeuble. Il ne s'ouvre que dans le sens de l'écoulement puis se referme : un rat qui remonte trouve une porte close qu'il ne peut ni pousser ni ronger. C'est une pose de plomberie, rapide dans la plupart des configurations." },
      { t: 'table', head: ['Solution', 'Efficacité', 'Pour qui'], rows: [
        ['Abattant lesté', 'Dépannage de quelques heures', 'Tout le monde, tout de suite'],
        ['Clapet anti-retour', 'Durable, bloque le passage', 'Appartement ou maison touchés'],
        ['Dératisation du réseau et des parties communes', 'Fait baisser la population à la source', 'Copropriété, bailleur, commerce'],
        ['Réparation des fissures et regards', 'Supprime la cause', 'Copropriété, propriétaire'],
      ] },
      { t: 'h2', x: "Pourquoi la dératisation doit viser tout l'immeuble" },
      { t: 'p', x: "Tuer le rat sorti de la cuvette ne règle rien : il fait partie d'une colonie installée dans le réseau. Une intervention sérieuse commence par un **diagnostic des points d'accès** (caves, vide-ordures, regards, locaux poubelles), puis la pose de postes d'appâtage sécurisés aux bons endroits et un suivi. C'est ce que nous faisons lors d'une [dératisation en Île-de-France](/services/deratisation)." },
      { t: 'p', x: "Vous hésitez entre rat et souris selon les traces trouvées ? Les petites déjections et les grignotages dans les placards orientent plutôt vers la souris : voir notre article sur [les points d'entrée des souris](/blog/souris-par-ou-entrent-elles)." },
    ],
    terrain: "Dans les immeubles anciens de Paris et de la petite couronne, quand un rat sort d'une cuvette, on trouve presque toujours un défaut en cave : regard descellé, fonte fissurée, trappe de vide-ordures qui ferme mal. Tant que ce point n'est pas réparé, le clapet protège l'appartement mais les rats continuent de circuler dans l'immeuble.",
    faq: [
      { q: "Un rat peut-il vraiment passer par le siphon des toilettes ?", a: "Oui. Le surmulot nage et retient sa respiration assez longtemps pour franchir le siphon, puis grimpe dans les canalisations verticales. La cuvette est une sortie comme une autre pour lui." },
      { q: "Tirer la chasse d'eau suffit-il à le faire repartir ?", a: "Rarement. Il peut redescendre puis revenir. Fermez l'abattant, lestez-le et faites poser un clapet anti-retour si l'épisode se répète." },
      { q: "Qui paie la dératisation si le rat vient de la colonne commune ?", a: "En copropriété, les réseaux et parties communes relèvent du syndicat des copropriétaires, via le syndic. Signalez l'incident par écrit pour qu'une intervention globale soit déclenchée." },
      { q: "Le clapet anti-retour gêne-t-il l'évacuation ?", a: "Non, il s'ouvre sous la pression de l'eau qui s'écoule et se referme ensuite. Il doit être adapté au diamètre de la canalisation et posé par un professionnel." },
      { q: "Un rat dans les toilettes est-il dangereux pour la santé ?", a: "Le risque principal est la leptospirose, transmise par l'urine des rats. Désinfectez la cuvette, la lunette et le sol avec des gants, et consultez un médecin en cas de fièvre après un contact ou une morsure." },
    ],
    sources: [
      { label: 'Santé publique France, leptospirose', url: 'https://www.santepubliquefrance.fr/maladies-et-traumatismes/maladies-transmissibles-de-l-animal-a-l-homme/leptospirose' },
    ],
    cta: { title: 'Un rat est sorti de vos toilettes ?', text: "Nos techniciens certifiés Certibiocide trouvent le point d'entrée et traitent le réseau, 7j/7 en Île-de-France." },
  },

  // 2 ─────────────────────────────────────────────────────────────
  {
    slug: 'lerot-grenier-combles',
    title: "Lérot dans le grenier : le « rongeur masqué » qui hiberne chez vous",
    seoTitle: "Lérot dans le grenier : bruits la nuit (et que faire)",
    description: "Galopades au grenier la nuit, masque noir, queue touffue ? C'est sans doute un lérot. Comment le reconnaître, ce que dit la loi et comment l'écarter.",
    date: '2026-09-23',
    category: 'Rongeurs',
    readMin: 7,
    tldr: "Le lérot (Eliomys quercinus) est un petit rongeur nocturne reconnaissable à son masque noir autour des yeux et à sa queue terminée par une touffe noir et blanc. Il s'installe dans les greniers et combles pour hiberner, d'octobre à avril environ, et fait beaucoup de bruit la nuit. Il ne figure pas sur la liste nationale des mammifères protégés (arrêté du 23 avril 2007), mais les raticides ne sont pas autorisés pour lui : la bonne méthode est l'exclusion, en bouchant les accès.",
    service: { href: '/services/rongeurs', label: 'Traitement des rongeurs en Île-de-France' },
    blocks: [
      { t: 'p', x: "Des **bruits de course au grenier la nuit**, des noyaux ou des fruits rongés retrouvés sous la charpente, un petit animal gris aux grands yeux cerclés de noir : c'est très probablement un **lérot** (*Eliomys quercinus*). Ce cousin du loir est fréquent dans les pavillons de grande couronne, près des jardins, vergers et bois." },
      { t: 'h2', x: "Comment reconnaître un lérot en 10 secondes ?" },
      { t: 'ul', items: [
        "**Un masque noir** qui entoure l'œil et file vers l'oreille, comme un loup de carnaval.",
        "**De grandes oreilles** arrondies et un pelage gris-brun dessus, blanc dessous.",
        "**Une queue longue terminée par une touffe** noir et blanc, bien plus fournie que celle d'une souris ou d'un rat.",
        "**Une activité strictement nocturne**, avec des bruits plus sonores qu'une souris.",
      ] },
      { t: 'table', head: ['Critère', 'Lérot', 'Loir gris', 'Souris'], rows: [
        ['Signe distinctif', 'Masque noir, queue à touffe noir et blanc', 'Tout gris, queue entièrement touffue', 'Petite, queue nue, pas de masque'],
        ['Bruit', 'Galopades nettes', 'Galopades nettes', 'Grattements légers'],
        ['Hiberne', 'Oui', 'Oui', 'Non, actif toute l\'année'],
        ['Statut national', 'Non protégé', 'Non protégé', 'Non protégé'],
        ['Raticides autorisés', 'Non', 'Non', 'Oui'],
      ] },
      { t: 'h2', x: "Pourquoi il choisit votre grenier en automne" },
      { t: 'p', x: "Le lérot **hiberne d'octobre ou novembre jusqu'à mars ou avril**, roulé en boule dans un nid, selon les observations naturalistes. Son sommeil n'est pas continu : il alterne de longues phases de torpeur et de courts réveils, surtout lors des redoux. Un grenier isolé, calme et hors gel est pour lui l'abri idéal, d'autant qu'il y trouve souvent de quoi faire son nid dans la laine de verre." },
      { t: 'h3', x: "Les dégâts qu'il peut causer" },
      { t: 'ul', items: [
        "**Isolant fouillé et tassé**, ce qui dégrade la performance thermique.",
        "**Gaines et câbles rongés** dans certains cas.",
        "**Crottes et urine** accumulées sur l'isolant et les solives.",
        "**Nuisances sonores** qui empêchent de dormir sous les combles.",
      ] },
      { t: 'h2', x: "Lérot : ce que dit vraiment la loi" },
      { t: 'p', x: "Beaucoup de sites affirment que le lérot est protégé. C'est inexact au niveau national : **l'arrêté du 23 avril 2007 fixant la liste des mammifères terrestres protégés ne cite, parmi les gliridés, que le muscardin**. Le lérot et le loir gris n'y figurent pas." },
      { t: 'callout', tone: 'warn', title: 'Mais pas de mort-aux-rats', x: "Les raticides sont des produits biocides autorisés pour des cibles précises : **rats et souris**. Le lérot n'en fait pas partie. En plus, un lérot empoisonné mourrait dans l'isolant, avec une odeur tenace pendant des semaines. La réponse adaptée est l'**exclusion**." },
      { t: 'h2', x: "Comment se débarrasser d'un lérot, dans le bon ordre" },
      { t: 'ol', items: [
        "**Repérer les accès** : rives de toit, tuiles déplacées, arbres ou treilles qui touchent la façade, passages de câbles.",
        "**Attendre qu'il sorte** (hors pleine hibernation) ou poser un dispositif qui lui permet de sortir sans revenir.",
        "**Obturer les passages** avec du grillage métallique à petites mailles, pas de mousse expansive seule qu'il perce.",
        "**Élaguer** les branches qui servent de pont vers la toiture.",
        "**Nettoyer et désinfecter** la zone souillée, remplacer l'isolant si besoin.",
      ] },
      { t: 'p', x: "Si les bruits viennent plutôt des cloisons que de la charpente, il peut s'agir de souris ou de rats. Dans ce cas, notre équipe spécialisée [rongeurs en Île-de-France](/services/rongeurs) identifie l'animal avant de choisir la méthode. Pour les accès des petits rongeurs, voyez aussi [par où entrent les souris](/blog/souris-par-ou-entrent-elles)." },
    ],
    terrain: "En octobre et novembre, dans les pavillons proches des bois de l'Essonne, des Yvelines ou de Seine-et-Marne, on nous appelle pour des « rats au grenier » et on trouve régulièrement des lérots. Le premier réflexe des gens est la mort-aux-rats : c'est justement ce qu'il ne faut pas faire. Une fois les accès fermés, le problème ne revient pas.",
    faq: [
      { q: "Le lérot est-il une espèce protégée en France ?", a: "Non, il ne figure pas sur la liste nationale des mammifères protégés (arrêté du 23 avril 2007), qui ne cite que le muscardin parmi les gliridés. Les raticides ne sont toutefois pas autorisés pour lui : on privilégie l'exclusion." },
      { q: "Combien de temps un lérot hiberne-t-il ?", a: "En général d'octobre ou novembre jusqu'à mars ou avril, avec de courts réveils lors des redoux. Les jeunes entrent en hibernation plus tard." },
      { q: "Le lérot est-il dangereux ?", a: "Il n'est pas agressif mais peut mordre s'il est saisi. Ses déjections souillent l'isolant : nettoyez avec gants et masque." },
      { q: "Quelle différence entre un lérot et un loir ?", a: "Le lérot a un masque noir autour des yeux et une queue terminée par une touffe noir et blanc. Le loir gris est uniformément gris avec une queue entièrement touffue." },
      { q: "Les répulsifs à ultrasons font-ils fuir les lérots ?", a: "Les résultats sont très inconstants. Boucher les accès reste la seule méthode fiable." },
    ],
    sources: [
      { label: "Arrêté du 23 avril 2007, mammifères terrestres protégés (Légifrance)", url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000649682' },
      { label: "Espèces-menacées.fr, fiche lérot", url: 'https://www.especes-menacees.fr/dossiers/petits-mammiferes-france/lerot/' },
      { label: "ARB Île-de-France, atlas Biodiv'îdF", url: 'https://geonature.arb-idf.fr/atlas/espece/61618' },
    ],
    cta: { title: 'Des bruits au grenier la nuit ?', text: "On identifie l'animal (lérot, loir, rat ou souris) et on ferme les accès, partout en Île-de-France." },
  },

  // 3 ─────────────────────────────────────────────────────────────
  {
    slug: 'rongeur-moteur-voiture-cables',
    title: "Câbles rongés sous le capot : rat, souris ou fouine ?",
    seoTitle: "Câbles de voiture rongés : rat, souris ou fouine ?",
    description: "Voyant allumé, câbles grignotés, isolant arraché sous le capot ? Voici comment savoir qui est passé, ce que couvre l'assurance et comment protéger la voiture.",
    date: '2026-09-23',
    category: 'Rongeurs',
    readMin: 6,
    tldr: "Des câbles rongés sous le capot viennent le plus souvent de rats, de souris ou d'une fouine (qui n'est pas un rongeur mais un petit carnivore). Les rongeurs laissent des crottes et font parfois un nid, la fouine laisse des durites mâchées et des traces de pattes. Les dégâts vont de quelques dizaines à plusieurs centaines d'euros et ne sont en général couverts qu'en assurance tous risques. La prévention passe par le garage, le traitement du parking et des abords.",
    service: { href: '/services/rongeurs', label: 'Traitement des rongeurs en Île-de-France' },
    blocks: [
      { t: 'p', x: "Un voyant moteur qui s'allume, une voiture qui refuse de démarrer après quelques jours d'immobilisation, et sous le capot : **des câbles grignotés**, de l'isolant arraché, parfois un nid de papier et de feuilles. Trois suspects reviennent presque toujours : **le rat, la souris et la fouine**." },
      { t: 'h2', x: "Qui a rongé vos câbles ? Les indices qui tranchent" },
      { t: 'table', head: ['Indice', 'Rat', 'Souris', 'Fouine'], rows: [
        ['Crottes', 'En fuseau, 1 à 2 cm', 'Grains de riz, quelques mm', 'Allongées, torsadées, avec poils ou graines'],
        ['Nid', 'Rare', 'Fréquent (filtre habitacle, isolant)', 'Non, mais restes de nourriture'],
        ['Dégâts typiques', 'Câbles sectionnés net', 'Petits grignotages, isolant fouillé', 'Durites et soufflets mâchés, isolant de capot arraché'],
        ['Traces', 'Traînées grasses', 'Peu visibles', 'Empreintes de pattes sur le capot'],
      ] },
      { t: 'callout', tone: 'info', title: 'Bon à savoir', x: "La **fouine n'est pas un rongeur** : c'est un mustélidé, un petit carnivore. Les raticides ne la concernent pas et une dératisation ne la fera pas partir. D'où l'intérêt de bien identifier l'auteur avant d'agir." },
      { t: 'h2', x: "Pourquoi les rongeurs s'attaquent aux voitures" },
      { t: 'ul', items: [
        "**La chaleur du moteur** : en automne et en hiver, un moteur tiède est un abri recherché.",
        "**L'immobilisation** : une voiture qui ne roule pas pendant plusieurs jours devient un gîte tranquille.",
        "**La proximité d'une source de nourriture** : poubelles, local vélos, stockage dans le box, jardin.",
        "**Le besoin de ronger** : les incisives des rongeurs poussent en continu, ils usent tout ce qui est à portée.",
      ] },
      { t: 'h2', x: "Qui paie les réparations ?" },
      { t: 'p', x: "D'après les guides des assureurs (MAIF, Leocare), les dégâts de rongeurs vont **de quelques dizaines à plusieurs centaines d'euros** et ne sont généralement couverts que par une formule **tous risques**. En assurance au tiers, ils sont le plus souvent exclus. Prenez des photos des câbles et des crottes avant réparation : elles servent à la déclaration." },
      { t: 'h2', x: "Comment protéger sa voiture durablement" },
      { t: 'ol', items: [
        "**Traiter la source** : si les rongeurs vivent dans le parking souterrain, le box ou le jardin, la voiture sera réattaquée. C'est là qu'une [dératisation](/services/deratisation) agit.",
        "**Rouler régulièrement** ou déplacer la voiture : une place fixe et un moteur froid attirent moins qu'un véhicule immobile.",
        "**Supprimer la nourriture** autour : sacs de graines, croquettes, poubelles ouvertes dans le box.",
        "**Protéger mécaniquement** : grillage sous le compartiment moteur ou gaines anti-rongeurs posées par un garagiste.",
      ] },
      { t: 'p', x: "Pour une copropriété, un parking d'entreprise ou un garage automobile, nous mettons en place un plan de lutte avec postes d'appâtage sécurisés et suivi : voir notre offre [professionnels](/professionnels) et notre page [rongeurs en Île-de-France](/services/rongeurs)." },
    ],
    terrain: "Dans les parkings souterrains de résidence, c'est souvent la même histoire : plusieurs voitures touchées en quelques semaines, et un local poubelles ou un local vélo qui sert de garde-manger aux rats. Tant que ce local n'est pas traité et fermé correctement, les garagistes voient revenir les mêmes véhicules.",
    faq: [
      { q: "L'assurance auto couvre-t-elle les câbles rongés ?", a: "En général seulement en formule tous risques ; les formules au tiers excluent le plus souvent ces dégâts. Vérifiez vos conditions générales et photographiez les dégâts." },
      { q: "Comment savoir si c'est une fouine ou un rat ?", a: "La fouine mâche les durites et les soufflets, laisse des empreintes sur le capot et des crottes torsadées. Le rat sectionne net les câbles et laisse des crottes en fuseau de 1 à 2 cm." },
      { q: "Une souris peut-elle faire son nid dans une voiture ?", a: "Oui, souvent dans le boîtier du filtre à air d'habitacle ou dans l'isolant, surtout sur une voiture peu utilisée." },
      { q: "Les répulsifs à ultrasons pour voiture fonctionnent-ils ?", a: "Les résultats sont variables. Ils ne remplacent pas le traitement de la source ni une protection mécanique." },
      { q: "Faut-il dératiser tout le parking ?", a: "Si plusieurs véhicules sont touchés, oui : les rongeurs ont un gîte à proximité. Le traitement doit viser le parking et les locaux annexes." },
    ],
    sources: [
      { label: 'MAIF, dégâts de rongeurs et assurance auto', url: 'https://www.maif.fr/vehicule-mobilite/guide-assurance-auto/degats-rongeurs' },
      { label: 'Leocare, voiture et rongeurs', url: 'https://leocare.eu/fr/blog/voiture-rongeurs-que-faire-cables-ronges/' },
    ],
    cta: { title: 'Rongeurs dans votre parking ou votre box ?', text: "On traite la source pour que vos câbles ne soient plus grignotés. Particuliers, copropriétés et entreprises en Île-de-France." },
  },

  // 4 ─────────────────────────────────────────────────────────────
  {
    slug: 'souris-par-ou-entrent-elles',
    title: "Souris : par où entrent-elles dans la maison ? (le test du crayon)",
    seoTitle: "Souris : par où entrent-elles ? (le test du crayon)",
    description: "Une souris passe par un trou de 6 mm, la largeur d'un crayon. Les 8 points d'entrée à vérifier cet automne et comment les boucher sans erreur.",
    date: '2026-09-23',
    category: 'Rongeurs',
    readMin: 6,
    tldr: "Une souris adulte passe par une ouverture d'environ 6 mm, le diamètre d'un crayon ; un rat par 2 cm. Seul son crâne limite le passage. Les entrées les plus fréquentes sont les passages de tuyaux et de gaines, le bas des portes, les bouches d'aération et le garage. On les bouche avec de la laine d'acier et un mastic, ou du grillage fin, jamais avec de la mousse expansive seule. Et on bouche après avoir éliminé les souris déjà à l'intérieur.",
    service: { href: '/services/deratisation', label: 'Dératisation en Île-de-France' },
    blocks: [
      { t: 'p', x: "**Une souris passe par un trou de 6 mm**, soit la largeur d'un crayon. Un rat passe par 2 cm, à peu près une pièce de 2 €. La raison est anatomique : seul le crâne est rigide, le reste du corps suit. Voilà pourquoi les souris réapparaissent chaque automne dans des maisons qui semblent pourtant « bien fermées »." },
      { t: 'h2', x: "Le test du crayon : vérifier un trou en 2 secondes" },
      { t: 'p', x: "Prenez un crayon de papier. **Si le crayon passe, une souris passe.** Faites le tour de la maison avec, en commençant par les endroits sombres et peu fréquentés. C'est la méthode la plus simple pour dresser la liste des trous à boucher." },
      { t: 'h2', x: "Les 8 points d'entrée à vérifier en priorité" },
      { t: 'ol', items: [
        "**Passages de tuyaux** sous l'évier, derrière le lave-linge et le lave-vaisselle.",
        "**Gaines électriques et de fibre** qui traversent les murs.",
        "**Bas des portes** d'entrée, de garage et de cave (jour sous la porte).",
        "**Bouches d'aération** et grilles de ventilation sans grillage.",
        "**Coffres de volets roulants**, souvent creux et mal jointés.",
        "**Joints de dilatation et fissures** en pied de façade.",
        "**Garage et cellier**, qui communiquent souvent avec la maison.",
        "**Conduits de cheminée** et tuiles déplacées pour les souris grimpeuses.",
      ] },
      { t: 'h2', x: "Avec quoi boucher (et ce qui ne marche pas)" },
      { t: 'table', head: ['Matériau', 'Efficace ?', 'Commentaire'], rows: [
        ['Laine d\'acier + mastic ou mortier', 'Oui', 'La souris ne peut pas ronger l\'acier'],
        ['Grillage métallique mailles de 6 mm maximum', 'Oui', 'Idéal pour aérations et vides sanitaires'],
        ['Bas de porte brosse ou plinthe caoutchouc', 'Oui', 'Supprime le jour sous la porte'],
        ['Mousse expansive seule', 'Non', 'Rongée en quelques nuits'],
        ['Scotch, carton, papier', 'Non', 'Aucune résistance'],
      ] },
      { t: 'callout', tone: 'warn', title: "L'erreur qui aggrave tout", x: "Boucher les trous **alors que des souris sont encore dedans**. Elles se retrouvent enfermées, cherchent de nouvelles sorties en rongeant et se reproduisent sur place. Le bon ordre : **éliminer d'abord, calfeutrer ensuite**." },
      { t: 'h2', x: "Pourquoi l'automne est la saison des souris" },
      { t: 'p', x: "Dès que les températures baissent, les souris quittent jardins, champs et abords pour chercher chaleur et nourriture à l'intérieur. C'est le moment où la plupart des appels commencent en Île-de-France, en pavillon comme en immeuble. Faire la tournée du crayon **en septembre et octobre** évite une bonne partie des invasions." },
      { t: 'p', x: "Déjà des crottes dans les placards ? Il faut traiter avant de calfeutrer. Notre équipe de [dératisation en Île-de-France](/services/deratisation) élimine les souris présentes puis vous indique précisément les points à boucher. Des bruits plutôt dans les combles ? Lisez notre article sur [le lérot au grenier](/blog/lerot-grenier-combles)." },
    ],
    terrain: "Sur les pavillons, le point d'entrée qu'on trouve le plus souvent n'est pas un trou spectaculaire : c'est le passage des tuyaux derrière le lave-linge ou sous l'évier, laissé ouvert après une installation. Un doigt de laine d'acier et du mastic, et le problème est réglé pour des années.",
    faq: [
      { q: "Par quelle taille de trou passe une souris ?", a: "Environ 6 mm, le diamètre d'un crayon. Un rat passe par une ouverture d'environ 2 cm." },
      { q: "Pourquoi ne pas utiliser de la mousse expansive ?", a: "Parce que les souris la rongent facilement. Utilisez de la laine d'acier associée à un mastic ou du mortier, ou un grillage métallique à petites mailles." },
      { q: "Faut-il boucher les trous avant ou après le traitement ?", a: "Après. Boucher avant enferme les souris à l'intérieur, qui continuent de se reproduire et rongent d'autres sorties." },
      { q: "Les souris peuvent-elles grimper aux murs ?", a: "Oui, sur les crépis rugueux, le long des tuyaux et des câbles. Les entrées en hauteur (coffres de volets, toiture) ne sont donc pas à négliger." },
      { q: "Comment savoir si les souris sont parties ?", a: "Plus de nouvelles crottes, plus de bruits la nuit et plus de grignotages pendant plusieurs semaines. Un professionnel peut poser des postes de contrôle pour le vérifier." },
    ],
    sources: [
      { label: 'Guide anti-nuisibles, taille de passage des souris', url: 'https://www.guideantinuisibles.fr/blog/trou-passage-souris-taille/' },
    ],
    cta: { title: 'Des souris chez vous cet automne ?', text: "On élimine celles qui sont déjà là, puis on vous montre exactement quoi boucher. Intervention 7j/7 en Île-de-France." },
  },

  // 5 ─────────────────────────────────────────────────────────────
  {
    slug: 'terre-de-diatomee-punaises-de-lit',
    title: "Terre de diatomée contre les punaises de lit : ce qu'elle fait vraiment",
    seoTitle: "Terre de diatomée punaises de lit : efficace ou piège ?",
    description: "La terre de diatomée tue les punaises de lit, mais lentement, pas les œufs, et mal en milieu humide. Mode d'emploi honnête, erreurs à éviter et limites.",
    date: '2026-09-23',
    category: 'Punaises de lit',
    readMin: 7,
    tldr: "La terre de diatomée tue les punaises de lit par abrasion de leur cuticule puis déshydratation, mais lentement (plusieurs jours de contact), sans effet sur les œufs, et beaucoup moins bien en atmosphère humide. Elle peut compléter un traitement professionnel en poudrage fin dans les plinthes et interstices, jamais le remplacer. Utilisez uniquement une terre non calcinée, en couche invisible, et jamais sur le matelas ou l'oreiller.",
    service: { href: '/services/punaises-de-lit', label: 'Traitement des punaises de lit en Île-de-France' },
    blocks: [
      { t: 'p', x: "La **terre de diatomée** est l'une des solutions « naturelles » les plus recommandées contre les punaises de lit. Elle agit réellement, mais pas comme on le croit : **elle ne tue pas vite, elle ne tue pas les œufs** et elle échoue souvent parce qu'elle est mal appliquée. Voici ce qu'il faut savoir avant d'en acheter un sac." },
      { t: 'callout', tone: 'info', title: "Le contexte en chiffres", x: "Selon l'**ANSES**, **11 % des ménages français** ont été infestés par les punaises de lit entre 2017 et 2022, pour un **coût moyen de 866 € par ménage**. Une bonne part de ce coût vient des tentatives ratées qui laissent l'infestation s'installer." },
      { t: 'h2', x: "Comment la terre de diatomée tue une punaise" },
      { t: 'p', x: "Il s'agit de squelettes fossilisés d'algues microscopiques, réduits en poudre. Quand une punaise traverse cette poudre, les particules **rayent la couche cireuse de sa cuticule** et absorbent ses lipides. L'insecte se **déshydrate** progressivement et meurt. C'est une action mécanique, pas chimique : pas de résistance possible, mais un effet lent." },
      { t: 'h2', x: "Les 4 limites à connaître" },
      { t: 'ol', items: [
        "**Elle est lente** : il faut plusieurs jours de contact, pendant lesquels les punaises continuent de piquer et de pondre.",
        "**Elle ne tue pas les œufs** : il faut que les larves écloses traversent à leur tour la poudre, donc la laisser en place plusieurs semaines.",
        "**L'humidité la neutralise** : dans une pièce humide ou après un nettoyage à la vapeur, la poudre agglomérée perd son effet.",
        "**Les punaises contournent les tas** : une couche épaisse et visible est évitée. Seul un voile quasi invisible fonctionne.",
      ] },
      { t: 'h2', x: "Mode d'emploi honnête" },
      { t: 'ol', items: [
        "Choisir une terre de diatomée **non calcinée** (dite « blanche » ou d'usage alimentaire). La terre **calcinée** contient de la silice cristalline, à ne pas respirer.",
        "Appliquer avec une **poire à poudrer**, en voile très fin, dans les **plinthes, fentes du sommier, dessous du lit, cadres de lit, prises murales hors tension**.",
        "**Jamais sur le matelas, l'oreiller ou les draps** : on respire à 20 cm toute la nuit.",
        "Porter un **masque** pendant l'application et aérer ensuite.",
        "Laisser en place plusieurs semaines, sans aspirer la zone traitée.",
      ] },
      { t: 'table', head: ['Méthode', 'Tue les adultes', 'Tue les œufs', 'Rapidité'], rows: [
        ['Terre de diatomée', 'Oui, lentement', 'Non', 'Plusieurs jours'],
        ['Vapeur sèche haute température', 'Oui, au contact', 'Oui, au contact', 'Immédiate mais locale'],
        ['Traitement professionnel combiné', 'Oui', 'Oui (protocole en plusieurs passages)', 'Quelques semaines pour l\'éradication'],
      ] },
      { t: 'h2', x: "Quand elle est utile… et quand elle fait perdre du temps" },
      { t: 'p', x: "Utile : **en complément** d'un traitement professionnel, comme barrière dans les interstices, ou en prévention dans les plinthes d'une chambre d'amis. Contre-productive : **en solution unique** face à une infestation installée. Pendant que la poudre agit lentement, la population continue de croître et peut se disperser dans les pièces voisines." },
      { t: 'p', x: "Si vous voyez des piqûres alignées au réveil, des taches noires sur le sommier ou des punaises vivantes, faites intervenir un professionnel. Notre protocole de [traitement des punaises de lit en Île-de-France](/services/punaises-de-lit) combine vapeur, produits biocides autorisés et passages de contrôle." },
    ],
    terrain: "On arrive souvent dans des chambres couvertes d'une couche blanche bien visible, parfois sur le matelas. Les punaises contournent simplement les tas et vont pondre ailleurs, et les occupants ont passé trois ou quatre semaines de plus à se faire piquer. Bien utilisée, en voile fin dans les plinthes après notre passage, la terre de diatomée est une bonne alliée.",
    faq: [
      { q: "La terre de diatomée tue-t-elle les œufs de punaises de lit ?", a: "Non. Elle agit sur les insectes qui la traversent. Les larves écloses doivent entrer en contact avec la poudre, ce qui impose de la laisser en place plusieurs semaines." },
      { q: "En combien de temps agit-elle ?", a: "Il faut plusieurs jours de contact pour qu'une punaise meure par déshydratation. L'effet est plus lent et moins régulier en logement réel qu'en laboratoire." },
      { q: "Peut-on en mettre sur le matelas ?", a: "Non. Vous respireriez la poudre toute la nuit. Réservez-la aux plinthes, fentes, dessous et cadres de lit." },
      { q: "Terre de diatomée calcinée ou non calcinée ?", a: "Non calcinée uniquement. La calcination forme de la silice cristalline, irritante et dangereuse à inhaler." },
      { q: "Peut-on l'utiliser avec un traitement professionnel ?", a: "Oui, en complément et en accord avec le technicien, souvent après le premier passage pour créer une barrière dans les interstices." },
    ],
    sources: [
      { label: "ANSES, punaises de lit : impacts, prévention et lutte", url: 'https://www.anses.fr/fr/content/punaises-de-lit' },
    ],
    cta: { title: 'La poudre ne suffit pas ?', text: "Nos techniciens Certibiocide éradiquent les punaises de lit, œufs compris, avec un protocole en plusieurs passages en Île-de-France." },
  },

  // 6 ─────────────────────────────────────────────────────────────
  {
    slug: 'gel-anti-cafard-ne-marche-pas',
    title: "Gel anti-cafard qui ne marche pas : les 5 raisons (dont une génétique)",
    seoTitle: "Gel anti-cafard inefficace : 5 raisons (dont 1 génétique)",
    description: "Vous posez du gel et les blattes reviennent ? Aversion au glucose, gel mal placé, spray par-dessus, oothèques : les 5 causes d'échec et comment les corriger.",
    date: '2026-09-23',
    category: 'Cafards',
    readMin: 7,
    tldr: "Un gel anti-cafard échoue le plus souvent pour 5 raisons : des blattes germaniques devenues aversives au glucose (un trait génétique décrit dès 1993), un gel posé loin des cachettes, trop de nourriture concurrente, un insecticide en spray pulvérisé à côté qui fait fuir les blattes, et des oothèques (capsules d'œufs) qui continuent d'éclore. La solution : changer de matière active et de formule, poser en petits points près des refuges et suivre dans le temps.",
    service: { href: '/services/cafards-blattes', label: 'Traitement des cafards en Île-de-France' },
    blocks: [
      { t: 'p', x: "Vous avez posé du **gel anti-cafard** comme indiqué, et deux semaines plus tard les blattes courent toujours dans la cuisine. Ce n'est pas forcément le produit qui est mauvais. Dans la grande majorité des cas, l'échec s'explique par **l'une des 5 raisons ci-dessous**, et la première surprend presque tout le monde." },
      { t: 'h2', x: "1. Vos blattes n'aiment plus le sucre (c'est génétique)" },
      { t: 'p', x: "En **1993**, des chercheurs ont décrit chez la **blatte germanique** (*Blattella germanica*) une **aversion au glucose** : certaines populations rejettent les aliments qui en contiennent, même en faible dose. Or beaucoup d'appâts utilisaient du glucose comme attractif. Les blattes qui le refusaient ont survécu et transmis ce trait. Des études publiées dans le *Journal of Economic Entomology* ont depuis montré que cette résistance comportementale se transmet d'une génération à l'autre." },
      { t: 'callout', tone: 'info', title: "Ce que ça change pour vous", x: "Si une marque de gel ne donne rien, **changez de produit** (autre matière active, autre base attractive) plutôt que d'en remettre davantage. Les professionnels font tourner les formules pour cette raison." },
      { t: 'h2', x: "2. Le gel est posé au mauvais endroit" },
      { t: 'p', x: "Une blatte germanique s'éloigne peu de son refuge. Un gel posé au milieu d'un plan de travail propre ne sera jamais trouvé. Il doit être **au plus près des cachettes** : charnières de placards, derrière le frigo, sous l'évier, autour du moteur du lave-vaisselle, dans les fentes de plinthes." },
      { t: 'h2', x: "3. Trop de nourriture concurrente" },
      { t: 'p', x: "Miettes, gras derrière la plaque, gamelle d'animal, poubelle ouverte : si la nourriture est partout, le gel n'est qu'un repas parmi d'autres. Un **nettoyage soigné avant la pose** multiplie son efficacité." },
      { t: 'h2', x: "4. Un spray insecticide pulvérisé à côté" },
      { t: 'p', x: "C'est l'erreur la plus fréquente. Un aérosol pulvérisé près du gel **le contamine et fait fuir les blattes** : elles évitent la zone, se dispersent et l'infestation s'étend aux pièces voisines. Gel et spray ne font pas bon ménage." },
      { t: 'h2', x: "5. Les oothèques continuent d'éclore" },
      { t: 'p', x: "La blatte germanique femelle porte une **oothèque**, une capsule contenant plusieurs dizaines d'œufs, que le gel n'atteint pas. De nouvelles larves apparaissent donc pendant des semaines après la pose. Ce n'est pas un échec si elles meurent ensuite : il faut **renouveler le gel** et suivre la décroissance." },
      { t: 'table', head: ['Erreur', 'Correction'], rows: [
        ['Même gel reposé en boucle', 'Changer de matière active et de base attractive'],
        ['Grosses gouttes au milieu des surfaces', 'Petits points près des refuges'],
        ['Spray à côté du gel', 'Arrêter les aérosols pendant le traitement'],
        ['Cuisine non nettoyée', 'Supprimer miettes et graisses avant la pose'],
        ['Arrêt au bout d\'une semaine', 'Renouveler et suivre plusieurs semaines'],
      ] },
      { t: 'h2', x: "Pourquoi il ne faut pas laisser traîner" },
      { t: 'p', x: "D'après l'**ANSES**, les blattes transportent **plus de 30 bactéries différentes** sur leurs pattes et dans leur tube digestif, et leurs déjections libèrent des allergènes impliqués dans l'asthme. En habitat collectif, une infestation non maîtrisée passe par les gaines techniques d'un appartement à l'autre." },
      { t: 'p', x: "Si après deux tentatives les blattes sont toujours là, un [traitement professionnel des cafards](/services/cafards-blattes) combine inspection des refuges, rotation des gels, pièges de contrôle et suivi. Pour les établissements alimentaires, voir aussi nos obligations [plan de lutte en restauration](/blog/restaurant-plan-lutte-nuisibles)." },
    ],
    terrain: "Dans les cuisines où « le gel ne marche pas », on trouve presque toujours la même combinaison : un aérosol rangé sous l'évier qui a été pulvérisé partout, et un gel posé en grosses gouttes loin des charnières. En changeant de formule et en posant de petits points aux bons endroits, on voit la population chuter en quelques semaines.",
    faq: [
      { q: "Pourquoi les cafards ne mangent-ils pas mon gel ?", a: "Soit ils sont aversifs à l'attractif du gel (aversion au glucose décrite chez la blatte germanique), soit le gel est trop loin de leurs cachettes, soit ils trouvent mieux à manger à côté." },
      { q: "Combien de temps met un gel anti-cafard à agir ?", a: "Les premiers effets se voient en quelques jours, mais il faut plusieurs semaines pour venir à bout des larves qui éclosent des oothèques. Le gel doit être renouvelé." },
      { q: "Peut-on utiliser un spray en même temps que le gel ?", a: "Non. Le spray contamine le gel et fait fuir les blattes, qui se dispersent dans le logement." },
      { q: "Les blattes deviennent-elles résistantes aux insecticides ?", a: "Oui, par des mécanismes physiologiques et comportementaux. C'est pourquoi les professionnels font tourner les matières actives." },
      { q: "Faut-il traiter tout l'immeuble ?", a: "En habitat collectif, oui idéalement : les blattes circulent par les gaines techniques. Un traitement isolé est souvent recolonisé." },
    ],
    sources: [
      { label: "Journal of Economic Entomology, résistance comportementale de la blatte germanique aux gels", url: 'https://academic.oup.com/jee/article-abstract/97/6/2067/2218194' },
      { label: "PubMed, appâts et blattes aversives au glucose", url: 'https://pubmed.ncbi.nlm.nih.gov/36888567/' },
    ],
    cta: { title: 'Les cafards résistent à tout ?', text: "Rotation des produits, pose ciblée et suivi : nos techniciens Certibiocide règlent les infestations tenaces en Île-de-France." },
  },

  // 7 ─────────────────────────────────────────────────────────────
  {
    slug: 'tapinoma-magnum-fourmi-invasive',
    title: "Tapinoma magnum : la fourmi invasive qui sent le beurre rance",
    seoTitle: "Tapinoma magnum : la fourmi invasive qui arrive au nord",
    description: "Fourmis noires brillantes par milliers, odeur de beurre rance quand on les écrase ? C'est peut-être Tapinoma magnum. Identification, risques et traitement.",
    date: '2026-09-23',
    category: 'Fourmis',
    readMin: 7,
    tldr: "Tapinoma magnum est une fourmi invasive d'origine méditerranéenne, noire et brillante, de 2 à 5 mm, qui dégage une odeur de beurre rance quand on l'écrase. Elle forme des supercolonies de nids interconnectés avec de nombreuses reines, ce qui rend les produits du commerce inefficaces. Transportée avec les plantes en pot et la terre, elle progresse vers le nord de la France. Le traitement demande une cartographie des nids et plusieurs passages.",
    service: { href: '/services/fourmis', label: 'Traitement des fourmis en Île-de-France' },
    blocks: [
      { t: 'p', x: "Des **fourmis noires et brillantes** qui envahissent terrasse, cuisine et salle de bain par milliers, et une **odeur de beurre rance** quand on en écrase une : ces deux indices suffisent souvent à reconnaître ***Tapinoma magnum***, une fourmi invasive venue du pourtour méditerranéen qui s'installe désormais de plus en plus au nord." },
      { t: 'h2', x: "Comment reconnaître Tapinoma magnum" },
      { t: 'ul', items: [
        "**Couleur** : noir brillant, presque vernie.",
        "**Taille variable** dans une même colonie, d'environ **2 à 5 mm**.",
        "**Odeur** : une nette odeur de **beurre rance** quand on l'écrase.",
        "**Comportement** : très rapide, en **pistes denses** et continues, jour et nuit par temps doux.",
        "**Nids** : sous les dalles, pavés et bordures, avec de petits monticules de terre fine.",
      ] },
      { t: 'h2', x: "Pourquoi on parle de supercolonie" },
      { t: 'p', x: "Selon des chercheurs de l'**Université de Montpellier** (article publié dans *The Conversation*), les colonies observées sont constituées de **nombreux nids interconnectés** par des pistes permanentes, un réseau pouvant couvrir **plusieurs hectares**, avec des centaines de reines. Ces fourmis ont été repérées dès **2011** en France, en Allemagne et en Italie, et sont aujourd'hui signalées du pourtour méditerranéen jusqu'à la région nantaise et la frontière rhénane." },
      { t: 'callout', tone: 'warn', title: "Pourquoi les appâts du supermarché échouent", x: "Un appât classique élimine au mieux un nid. Avec des dizaines de nids reliés et des centaines de reines, **la colonie se réorganise en quelques jours**. Pulvériser un insecticide sur une piste fait même éclater les nids en de nouveaux foyers." },
      { t: 'h2', x: "Quels dégâts et quels risques ?" },
      { t: 'ul', items: [
        "**Pas de danger direct pour la santé** : elle ne pique pas de façon notable et ne transmet pas de maladie connue.",
        "**Envahissement massif** des logements, notamment cuisines et pièces d'eau.",
        "**Dégâts techniques** : elle peut s'installer dans les boîtiers et coffrets électriques.",
        "**Soulèvement de pavés** et de dalles de terrasse.",
        "**Élevage de pucerons** dans le jardin et éviction des fourmis locales.",
      ] },
      { t: 'h2', x: "Comment elle arrive jusqu'à chez vous" },
      { t: 'p', x: "Principalement par les **échanges commerciaux** : **plantes en pot, terre, matériaux de construction**. Un olivier ou un agrume acheté en pépinière du sud, une livraison de terre végétale ou de sable peuvent suffire à introduire une colonie. Avant de planter, **inspectez les mottes** : pistes de fourmis noires brillantes, odeur caractéristique." },
      { t: 'h2', x: "Le traitement qui fonctionne" },
      { t: 'ol', items: [
        "**Cartographier** tous les nids et pistes, y compris chez les voisins si la colonie déborde.",
        "**Combiner** appâts adaptés et traitement ciblé des nids, dans le bon ordre.",
        "**Traiter les points d'entrée** du bâtiment.",
        "**Revenir** : plusieurs passages sont nécessaires pour épuiser la supercolonie.",
      ] },
      { t: 'p', x: "Pour les fourmis « classiques » de la maison, notre page [traitement des fourmis en Île-de-France](/services/fourmis) détaille la méthode. Pour Tapinoma magnum, nous établissons un plan d'intervention sur mesure, y compris pour les établissements recevant du public." },
    ],
    terrain: "Nous avons traité Tapinoma magnum dans un établissement recevant du public de l'Oise, aux portes de l'Île-de-France : plusieurs bâtiments touchés, des pistes jusque dans les locaux de soins. Il a fallu pulvérisation et nébulisation, bâtiment par bâtiment, avec un suivi dans le temps. Sur ce type de fourmi, un passage unique ne suffit jamais.",
    faq: [
      { q: "Comment savoir si j'ai des Tapinoma magnum ?", a: "Fourmis noires brillantes de taille variable (2 à 5 mm), très rapides, en pistes denses, et une odeur de beurre rance quand on en écrase une." },
      { q: "Tapinoma magnum est-elle dangereuse ?", a: "Pas directement pour la santé, mais elle envahit massivement les bâtiments, peut s'installer dans les équipements électriques et soulever pavés et dalles." },
      { q: "Pourquoi les produits du commerce ne marchent-ils pas ?", a: "Parce qu'elle forme des supercolonies de nids reliés avec de nombreuses reines. Éliminer un nid ne suffit pas, et les pulvérisations font essaimer la colonie." },
      { q: "Est-elle présente en Île-de-France ?", a: "Elle progresse vers le nord de la France via les plantes en pot et la terre. Nous l'avons déjà traitée dans l'Oise. Au moindre doute, envoyez-nous une photo pour identification." },
      { q: "Combien de passages faut-il ?", a: "Toujours plusieurs, selon la taille de la supercolonie. Le technicien fixe le calendrier après la cartographie des nids." },
    ],
    sources: [
      { label: "The Conversation / Université de Montpellier, ce que l'on sait de Tapinoma magnum", url: 'https://theconversation.com/ce-que-lon-sait-de-tapinoma-magnum-la-fourmi-noire-et-brillante-qui-envahit-leurope-267608' },
    ],
    cta: { title: 'Des milliers de fourmis noires brillantes ?', text: "Envoyez une photo, on identifie l'espèce et on bâtit un plan de traitement adapté, pour particuliers, collectivités et ERP." },
  },

  // 8 ─────────────────────────────────────────────────────────────
  {
    slug: 'nid-de-frelon-en-hiver',
    title: "Nid de frelon en hiver : faut-il vraiment le détruire ?",
    seoTitle: "Nid de frelon en hiver : faut-il vraiment le détruire ?",
    description: "En hiver, un nid de frelons asiatiques est vide et ne sera jamais réutilisé. Mais en octobre et novembre, il fabrique les reines de l'an prochain. Le bon calendrier.",
    date: '2026-09-23',
    category: 'Guêpes et frelons',
    readMin: 6,
    tldr: "Un nid de frelons asiatiques est abandonné à la fin de l'automne et n'est jamais réutilisé : les jeunes reines fécondées hivernent ailleurs et construisent un nouveau nid au printemps. Le détruire en plein hiver ne sert donc à rien, sauf à le décrocher. En revanche, un nid encore actif en septembre, octobre ou novembre produit les futures fondatrices : c'est la période où sa destruction a le plus d'impact. Le frelon asiatique est présent dans 96 départements.",
    service: { href: '/services/guepes-frelons', label: 'Destruction de nids de guêpes et frelons en Île-de-France' },
    blocks: [
      { t: 'p', x: "Les feuilles tombent et vous découvrez **une énorme boule en haut d'un arbre** : un nid de frelons asiatiques, invisible tout l'été. Faut-il le faire détruire ? **Tout dépend de la date.** Un nid détruit en octobre et un nid détruit en janvier n'ont pas du tout le même intérêt." },
      { t: 'h2', x: "Le cycle d'un nid de frelons asiatiques en un coup d'œil" },
      { t: 'table', head: ['Période', 'Ce qui se passe', 'Détruire ?'], rows: [
        ['Printemps', 'La fondatrice crée seule un nid primaire', 'Oui, petit nid facile'],
        ['Été', 'Le nid secondaire grossit, des milliers d\'ouvrières', 'Oui, surtout près des habitations'],
        ['Septembre à novembre', 'Le nid produit mâles et futures reines', 'Oui, impact maximal'],
        ['Décembre à février', 'Le nid se vide, les ouvrières meurent', 'Inutile s\'il est vide'],
      ] },
      { t: 'h2', x: "En hiver, le nid est vide et ne sera jamais réutilisé" },
      { t: 'p', x: "Les nids de frelons asiatiques **se vident progressivement à la fin de l'automne** et sont en général abandonnés en début d'année. Comme le rappelle le **Muséum national d'Histoire naturelle**, ils **ne sont pas réutilisés** : les jeunes reines fécondées quittent le nid, hivernent dans des abris (bois dégradé, interstices) et construiront un nid neuf au printemps, ailleurs. La vieille reine, les ouvrières et les mâles meurent." },
      { t: 'callout', tone: 'ok', title: "En pratique", x: "Un nid **sans aucune activité** en décembre ou janvier n'est pas une menace. Le faire « détruire » par un prestataire est une dépense inutile, sauf s'il faut le décrocher parce qu'il risque de tomber." },
      { t: 'h2', x: "En automne, c'est le moment où la destruction compte le plus" },
      { t: 'p', x: "C'est en **fin d'été et en automne** que le nid produit les **futures fondatrices**. Chaque nid laissé actif jusqu'en novembre peut libérer de nombreuses reines, donc potentiellement de nombreux nids l'année suivante. Le **frelon asiatique** est désormais présent dans **96 départements**, et sa progression se joue en partie à ce moment-là." },
      { t: 'h3', x: "Comment savoir si un nid est encore actif ?" },
      { t: 'ul', items: [
        "Observez **l'orifice de sortie**, sur le côté du nid, **par temps doux en milieu de journée**.",
        "Des **allers-retours de frelons** : le nid est actif, il faut agir.",
        "Aucun mouvement pendant plusieurs jours doux, nid abîmé par le vent : il est probablement abandonné.",
      ] },
      { t: 'callout', tone: 'warn', title: "Ne l'approchez pas", x: "Un nid actif en octobre contient encore beaucoup de frelons défensifs. Ne tirez pas dessus, ne l'arrosez pas, ne le percez pas. Même un nid qui semble calme peut réagir aux vibrations." },
      { t: 'h2', x: "Et les nids de guêpes ?" },
      { t: 'p', x: "Le principe est le même : les nids de guêpes communes sont **annuels**, abandonnés en hiver et non réutilisés. Un vieux nid dans un grenier ou un cabanon peut être retiré sans risque en plein hiver s'il n'y a plus aucune activité." },
      { t: 'p', x: "Un doute sur l'activité d'un nid cet automne ? Envoyez une photo. Nous intervenons pour la [destruction de nids de guêpes et frelons en Île-de-France](/services/guepes-frelons), y compris en hauteur." },
    ],
    terrain: "Chaque hiver, on nous appelle pour des nids découverts dans les arbres après la chute des feuilles. Dans la très grande majorité des cas, ils sont vides depuis des semaines et on le dit honnêtement au client. À l'inverse, en octobre, on trouve encore des nids très actifs, et c'est là que notre intervention est vraiment utile.",
    faq: [
      { q: "Un nid de frelons asiatiques est-il réutilisé l'année suivante ?", a: "Non. Les jeunes reines hivernent hors du nid et construisent un nouveau nid au printemps, généralement ailleurs." },
      { q: "Faut-il détruire un nid de frelons en hiver ?", a: "Pas s'il est vide : il n'y a plus de frelons à l'intérieur. On peut simplement le décrocher s'il risque de tomber." },
      { q: "Quand est-il le plus utile de détruire un nid de frelons asiatiques ?", a: "Quand il est encore actif, en particulier de la fin de l'été à novembre, car il produit alors les futures reines." },
      { q: "Comment savoir si un nid est vide ?", a: "Observez l'orifice par temps doux en milieu de journée. Aucune entrée ni sortie pendant plusieurs jours indique un nid probablement abandonné." },
      { q: "Peut-on enlever soi-même un vieux nid vide ?", a: "Oui s'il est accessible sans risque et sans aucune activité. En hauteur ou au moindre doute, faites appel à un professionnel." },
    ],
    sources: [
      { label: 'Nuisibook, nid de frelons en hiver', url: 'https://www.nuisibook.com/blog-nuisibook/nid-de-frelons-hiver-danger-solutions' },
      { label: 'Mairie de Praz-sur-Arly, que deviennent les nids en hiver', url: 'https://www.mairie-prazsurarly.fr/actualites/journal-ligne/frelons-asiatiques-deviennent-nids-hiver' },
    ],
    cta: { title: 'Un nid encore actif cet automne ?', text: "Destruction sécurisée, y compris en hauteur, par des techniciens équipés, partout en Île-de-France." },
  },

  // 9 ─────────────────────────────────────────────────────────────
  {
    slug: 'nid-de-pigeon-balcon-enlever',
    title: "Nid de pigeon sur le balcon : a-t-on le droit de l'enlever ?",
    seoTitle: "Nid de pigeon sur le balcon : a-t-on le droit de l'enlever ?",
    description: "Nid vide, œufs ou pigeonneaux : ce que vous pouvez faire, ce qui est interdit, l'amende pour nourrissage et les protections qui empêchent le retour.",
    date: '2026-09-23',
    category: 'Pigeons',
    readMin: 6,
    tldr: "Le pigeon biset ne figure pas sur la liste des oiseaux protégés (arrêté du 29 octobre 2009). Un nid vide peut être retiré sans difficulté, idéalement avant la ponte. Un nid avec œufs ou pigeonneaux ne doit pas être détruit : il faut attendre l'envol, environ un mois et demi après la ponte. Nourrir les pigeons est interdit par l'article 120 du règlement sanitaire départemental (contravention de 3e classe). Filets, pics et fils tendus empêchent le retour.",
    service: { href: '/services/pigeons', label: 'Anti-pigeons en Île-de-France' },
    blocks: [
      { t: 'p', x: "Un couple de pigeons a installé un **nid sur votre balcon**, dans une jardinière ou derrière le climatiseur. Vous avez le droit d'agir, mais **pas n'importe comment ni à n'importe quel moment**. Tout dépend de ce que contient le nid." },
      { t: 'h2', x: "Ce que dit la loi, simplement" },
      { t: 'p', x: "Le **pigeon biset** (*Columba livia*), le pigeon des villes, **ne figure pas sur la liste des oiseaux protégés** fixée par l'arrêté du 29 octobre 2009. Cela ne veut pas dire que tout est permis : la destruction d'œufs ou de jeunes vivants reste à proscrire, et la maltraitance animale est sanctionnée." },
      { t: 'table', head: ['Situation', 'Que faire ?'], rows: [
        ['Pigeons qui repèrent le balcon, pas encore de nid', 'Agir tout de suite : retirer brindilles, poser une protection'],
        ['Nid vide ou abandonné', 'Le retirer avec gants et masque, désinfecter'],
        ['Nid avec œufs', 'Attendre l\'éclosion puis l\'envol'],
        ['Nid avec pigeonneaux', 'Attendre l\'envol, puis retirer et protéger'],
      ] },
      { t: 'callout', tone: 'info', title: "Combien de temps attendre ?", x: "Comptez **environ un mois et demi entre la ponte et l'envol** des pigeonneaux. Profitez de ce délai pour préparer la pose de la protection, qui sera installée juste après leur départ, sinon le couple repondra au même endroit." },
      { t: 'h2', x: "Nourrir les pigeons : interdit et sanctionné" },
      { t: 'p', x: "L'**article 120 du règlement sanitaire départemental** interdit de jeter ou déposer des graines ou de la nourriture susceptibles d'attirer les pigeons, sur la voie publique comme dans les cours et parties d'immeuble quand cela gêne le voisinage ou attire des rongeurs. L'infraction relève de la **contravention de 3e classe**, jusqu'à **450 €**. Si un voisin nourrit les pigeons, c'est souvent la vraie cause du problème : signalez-le au syndic ou à la mairie." },
      { t: 'h2', x: "Retirer un nid vide sans risque" },
      { t: 'ol', items: [
        "**Gants et masque** : les fientes sèches forment une poussière à ne pas respirer.",
        "**Humidifier** les fientes avant de gratter, pour éviter la poussière.",
        "**Mettre en sac fermé** nid et fientes.",
        "**Désinfecter** la surface.",
        "**Poser une protection** le jour même, sinon ils reviennent.",
      ] },
      { t: 'h2', x: "Les protections qui empêchent vraiment le retour" },
      { t: 'ul', items: [
        "**Filet anti-pigeons** : ferme totalement la loggia ou le balcon, la solution la plus radicale.",
        "**Pics anti-pigeons** : sur rebords, garde-corps et dessus de climatiseur.",
        "**Fils tendus** : discrets, sur les rambardes et corniches.",
        "**Suppression des recoins** : dessous de climatiseur, jardinières vides, cartons.",
      ] },
      { t: 'p', x: "En copropriété, un filet visible en façade peut nécessiter l'accord du syndic. Nous installons ces protections et nous nous occupons du nettoyage : voir notre service [anti-pigeons en Île-de-France](/services/pigeons)." },
    ],
    terrain: "Les gens attendent souvent qu'il y ait des œufs pour appeler, et se retrouvent bloqués plusieurs semaines. Le bon moment, c'est quand on voit un couple tourner autour du balcon et déposer des brindilles : à ce stade on retire, on pose un filet ou des pics, et le problème est réglé.",
    faq: [
      { q: "Le pigeon est-il une espèce protégée ?", a: "Le pigeon biset, celui des villes, ne figure pas sur la liste des oiseaux protégés de l'arrêté du 29 octobre 2009. Les œufs et les jeunes ne doivent toutefois pas être détruits." },
      { q: "Peut-on enlever un nid de pigeon avec des œufs ?", a: "Il faut attendre l'éclosion puis l'envol des jeunes, environ un mois et demi après la ponte, avant de retirer le nid et de protéger le balcon." },
      { q: "Quelle amende pour avoir nourri des pigeons ?", a: "L'article 120 du règlement sanitaire départemental l'interdit. L'infraction est une contravention de 3e classe, jusqu'à 450 €." },
      { q: "Les fientes de pigeon sont-elles dangereuses ?", a: "Elles peuvent contenir des agents pathogènes, surtout sous forme de poussière sèche. Nettoyez avec gants et masque, après avoir humidifié." },
      { q: "Quelle est la protection la plus efficace ?", a: "Le filet anti-pigeons, qui ferme complètement l'accès. Les pics et fils conviennent aux rebords et garde-corps." },
    ],
    sources: [
      { label: "Arrêté du 29 octobre 2009, oiseaux protégés (Légifrance)", url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000021384277' },
      { label: "Règlement sanitaire départemental de Paris, article 120 (Légifrance)", url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006364005' },
    ],
    cta: { title: 'Des pigeons installés sur votre balcon ?', text: "Nettoyage, désinfection et pose de filets ou pics, pour particuliers et copropriétés en Île-de-France." },
  },

  // 10 ────────────────────────────────────────────────────────────
  {
    slug: 'restaurant-plan-lutte-nuisibles',
    title: "Restaurant : le plan de lutte contre les nuisibles exigé au contrôle",
    seoTitle: "Plan de lutte nuisibles restaurant : ce que vérifie la DDPP",
    description: "Règlement 852/2004, PMS, registre, obligation de résultat : ce que l'inspecteur regarde dans votre plan de lutte contre les nuisibles, et les erreurs qui coûtent cher.",
    date: '2026-09-23',
    category: 'Professionnels',
    readMin: 7,
    tldr: "Tout restaurant doit intégrer à son Plan de Maîtrise Sanitaire un plan de lutte contre les nuisibles documenté, en application du règlement (CE) n° 852/2004. L'obligation est de résultat : l'absence de nuisibles, pas seulement un contrat signé. Lors d'un contrôle de la DDPP, l'inspecteur vérifie le plan des postes, les rapports de passage, les fiches des produits et les actions correctives. En cas de manquement grave, la fermeture administrative est possible et le résultat est publié sur Alim'confiance.",
    service: { href: '/professionnels', label: 'Contrats nuisibles pour professionnels' },
    blocks: [
      { t: 'p', x: "Si vous tenez un **restaurant, une boulangerie ou un commerce de bouche** en Île-de-France, votre **plan de lutte contre les nuisibles** est l'un des premiers documents que l'inspecteur de la DDPP demandera. Ce n'est pas une formalité : c'est un point qui peut faire basculer un contrôle." },
      { t: 'h2', x: "D'où vient l'obligation ?" },
      { t: 'p', x: "Du **règlement (CE) n° 852/2004** relatif à l'hygiène des denrées alimentaires, dit « paquet hygiène ». Son annexe II impose que les locaux permettent de bonnes pratiques d'hygiène, **notamment en luttant contre les nuisibles**. En pratique, cela se traduit par un plan de lutte intégré à votre **Plan de Maîtrise Sanitaire (PMS)**, au même titre que le nettoyage ou la maîtrise des températures." },
      { t: 'callout', tone: 'warn', title: "Obligation de résultat", x: "Avoir un contrat ne suffit pas. **Vous devez garantir l'absence de nuisibles.** Des crottes de souris sous un meuble ou des blattes dans un joint de chambre froide sont une non-conformité, même avec un prestataire qui passe tous les trimestres." },
      { t: 'h2', x: "Un contrat de dératisation est-il obligatoire ?" },
      { t: 'p', x: "Aucun texte n'impose de signer un contrat avec une entreprise précise, ni un nombre fixe de passages. Mais vous devez **prouver** que la lutte est organisée et efficace. Un contrat avec un prestataire certifié **Certibiocide**, qui fournit rapports et traçabilité, est de loin la manière la plus simple d'apporter cette preuve. La fréquence des passages se fixe selon le risque : activité, environnement, historique." },
      { t: 'h2', x: "Ce que l'inspecteur vérifie dans votre classeur" },
      { t: 'ul', items: [
        "**Le plan des postes** : où sont les boîtes d'appâtage, pièges et désinsectiseurs, numérotés.",
        "**Les rapports de passage** datés et signés, avec constats et consommations.",
        "**Les fiches techniques et fiches de données de sécurité** des produits utilisés.",
        "**Les actions correctives** : ce qui a été fait quand une activité a été constatée.",
        "**Le certificat Certibiocide** de l'entreprise intervenante.",
        "**L'état réel des locaux** : l'inspecteur regarde aussi derrière les équipements.",
      ] },
      { t: 'h2', x: "Ce que vous risquez" },
      { t: 'table', head: ['Constat', 'Suite possible'], rows: [
        ['Plan incomplet, pas de traces', 'Avertissement, mise en demeure'],
        ['Présence de nuisibles sans action corrective', 'Mise en demeure, contrôle de suivi'],
        ['Infestation avec risque pour la santé', 'Fermeture administrative'],
      ] },
      { t: 'p', x: "Depuis 2017, les résultats des contrôles sanitaires sont **publiés sur Alim'confiance**, consultable par vos clients. Un niveau « à améliorer » ou « à corriger de manière urgente » se voit." },
      { t: 'h2', x: "Les 5 erreurs qu'on voit le plus en restauration" },
      { t: 'ol', items: [
        "**Un classeur à jour mais des postes vides** depuis des mois.",
        "**Un aérosol acheté en grande surface** utilisé en cuisine, sans fiche et qui disperse les blattes.",
        "**Les réserves et caves oubliées** du plan.",
        "**Aucune action corrective notée** après un rapport signalant une activité.",
        "**Des accès non traités** : bas de porte de livraison, passages de gaines, siphons de sol.",
      ] },
      { t: 'p', x: "Nous mettons en place des plans de lutte clés en main pour la restauration et les commerces alimentaires, avec [dératisation](/services/deratisation), [traitement des cafards](/services/cafards-blattes) et registre à jour : voir notre offre [professionnels](/professionnels). Les blattes résistent à vos gels ? Lisez [pourquoi le gel anti-cafard échoue](/blog/gel-anti-cafard-ne-marche-pas)." },
    ],
    terrain: "Quand un restaurateur nous appelle en urgence avant ou après un contrôle, le problème n'est presque jamais l'absence de contrat : c'est un classeur qui dort pendant que les souris passent par la porte de livraison. Un plan qui marche, c'est des postes bien placés, des accès fermés et des rapports lus et suivis d'actions.",
    faq: [
      { q: "Un restaurant est-il obligé d'avoir un contrat de dératisation ?", a: "Aucun texte n'impose un contrat, mais le règlement (CE) n° 852/2004 impose une lutte efficace et documentée contre les nuisibles. Un contrat avec un prestataire Certibiocide est la façon la plus simple de le prouver." },
      { q: "Combien de passages par an faut-il prévoir ?", a: "La réglementation ne fixe pas de nombre. La fréquence dépend du risque : type d'activité, environnement, historique d'infestation." },
      { q: "Que contient un plan de lutte contre les nuisibles ?", a: "Un plan des postes, les rapports de passage, les fiches des produits, les actions correctives et le certificat Certibiocide du prestataire." },
      { q: "Une infestation peut-elle entraîner la fermeture du restaurant ?", a: "Oui, en cas de risque pour la santé des consommateurs, l'autorité peut prononcer une fermeture administrative." },
      { q: "Où sont publiés les résultats des contrôles ?", a: "Sur le site et l'application Alim'confiance, accessibles à tous." },
    ],
    sources: [
      { label: 'Règlement (CE) n° 852/2004 (EUR-Lex)', url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32004R0852' },
      { label: "Alim'confiance, résultats des contrôles sanitaires", url: 'https://alim-confiance.gouv.fr/' },
    ],
    cta: { title: 'Un contrôle DDPP approche ?', text: "Plan de lutte, postes, registre et suivi : on met votre établissement en conformité, partout en Île-de-France." },
  },
]

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug)
