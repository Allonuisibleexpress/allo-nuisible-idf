// Punaises de lit : protocole décrit par l'entreprise le 10/11/2026 (inspection lattes par lattes, plinthes,
// papier peint ; vapeur sèche ; cryogénie aux bonbonnes de CO2 comme dans nos vidéos ; insecticide avec rémanence
// de 30 à 90 jours selon le produit, nébulisation, 2 passages, retour au logement après 4 h en moyenne).
import type { ContenuFamille } from '@/components/ContenuNuisible'

export const CONTENU_PUNAISES: ContenuFamille = {
  observation: {
    titres: [
      'Punaises de lit {a} : avant de traiter, notre technicien enquête',
      'Inspection punaises de lit {a} : la chasse aux cachettes, latte par latte',
      'Où se cachent les punaises {a} ? Notre inspection minutieuse avant tout traitement',
    ],
    intros: [
      'Un bon traitement commence **toujours par une inspection**. Le technicien se déplace chez vous {a}, le **devis est gratuit**, et il passe au peigne fin chaque endroit où l’on soupçonne la présence de punaises de lit.',
      'Avant de sortir le moindre appareil, notre technicien **observe**. Chez vous {a}, il cherche les punaises, leurs œufs et leurs traces **dans chaque recoin suspect** : c’est ce travail qui décide de la méthode. **Devis gratuit**.',
      'La punaise de lit est **experte du camouflage**. Notre technicien vient chez vous {a}, devis gratuit, et inspecte méthodiquement le couchage, les meubles et les murs avant de choisir le traitement.',
    ],
    points: [
      ['Le matelas, couture par couture|Le technicien soulève le matelas et inspecte les **coutures, étiquettes, passepoils et poignées**, là où les punaises se regroupent et laissent des **points noirs**.', 'Le matelas passé à la lampe|Coutures, étiquette, bourrelets : chaque pli du matelas est examiné à la **lampe**. Les **points noirs** (déjections) et les **mues** translucides trahissent un foyer.'],
      ['Le sommier : chaque latte retirée et inspectée|Il **retire les lattes du sommier** et les inspecte **une par une**, ainsi que leurs **trous de fixation** : c’est l’une des cachettes favorites des punaises.', 'Les lattes, une par une|Les **lattes sont démontées** et contrôlées individuellement. Dans les petits trous où elles s’emboîtent, on trouve souvent **des grappes de punaises et d’œufs**.'],
      ['La tête de lit et le cadre|Assemblages, vis, fentes du bois, dessous de la tête de lit : le technicien démonte ce qui doit l’être pour **voir à l’intérieur**.', 'Le cadre de lit démonté si besoin|Les punaises adorent les **jonctions du bois** et les **trous de vis**. Si nécessaire, le cadre est démonté pour atteindre les cachettes.'],
      ['Les plinthes, retirées si nécessaire|Si nécessaire, il **enlève les plinthes** : l’espace derrière est un refuge sombre où les punaises s’installent à l’abri de tout.', 'Derrière les plinthes|Quand l’infestation est avancée, le technicien **décolle une plinthe** pour vérifier l’espace derrière : un nid y passe facilement inaperçu.'],
      ['Derrière le papier peint|Un **papier peint qui se décolle**, un cadre au mur, une prise électrique : les punaises s’y glissent. Le technicien vérifie ces zones autour du lit.', 'Papier peint, prises et cadres|Les punaises peuvent se cacher **derrière le papier peint décollé**, dans les **prises** et derrière les **tableaux**. Rien n’est laissé au hasard autour du couchage.'],
      ['Canapés, fauteuils et pièces voisines|Les **canapés**, les **fauteuils**, les tables de chevet et les pièces voisines sont contrôlés : une punaise voyage facilement d’une pièce à l’autre.', 'Le reste du logement|Le technicien élargit ensuite aux **canapés**, à la **commode**, aux **rideaux** et aux autres chambres, pour connaître **l’étendue réelle** de l’infestation.'],
    ],
    photos: ['creteilLattes1', 'creteilLattes2', 'vincennesMortes2'],
    conclusion: [
      'Une fois **une punaise trouvée** ou **le nid localisé**, le technicien sait exactement où agir. Il se prépare alors à intervenir avec la méthode adaptée à votre logement {a}.',
      'C’est seulement quand **les foyers sont localisés** que le technicien prépare le traitement : vapeur sèche, cryogénie ou insecticide, selon ce qu’il a trouvé chez vous {a}.',
      'Résultat de l’inspection : **une carte précise des foyers**. Le technicien peut alors choisir la bonne méthode pour votre logement {a}, et vous l’expliquer avant de commencer.',
    ],
  },
  methodes: {
    titres: [
      'Vapeur sèche, cryogénie ou insecticide : comment nous traitons les punaises {a}',
      'Les 3 méthodes de traitement des punaises de lit {a}, expliquées simplement',
      'Traitement punaises de lit {a} : ce que fait notre technicien, méthode par méthode',
    ],
    intros: [
      'Selon l’inspection, le technicien choisit **un traitement insecticide ou sans insecticide**, et peut **combiner les méthodes**. Voici exactement ce qui se passe chez vous {a}.',
      'Il n’y a pas une seule bonne méthode : il y a **la bonne méthode pour votre logement** {a}. Voici comment chacune fonctionne, et pourquoi le technicien la choisit.',
      'Chaleur, froid extrême ou produit professionnel : chaque méthode a ses forces. Le technicien vous explique son choix **avant d’intervenir** {a}.',
    ],
    items: [
      {
        nom: 'Vapeur sèche',
        titres: ['La vapeur sèche : les punaises et leurs œufs tués par la chaleur', 'Traitement à la vapeur sèche {a} : la chaleur qui ne laisse aucune chance aux œufs'],
        paras: [
          ['Le technicien projette une **vapeur sèche à très haute température**, très peu chargée en eau, directement sur les cachettes : coutures du matelas, sommier, canapé, plinthes. La chaleur **tue les punaises et leurs œufs au contact**.', 'Avec un générateur de **vapeur sèche**, le technicien traite le couchage et les meubles **centimètre par centimètre**. La température élevée **détruit instantanément** les adultes, les larves et les œufs touchés par le jet.'],
          ['Aucun produit n’est déposé : la pièce est **utilisable juste après**, et la literie sèche très vite. C’est la méthode idéale pour les **matelas, canapés en tissu, rideaux** et grandes surfaces textiles.', 'Avantage : **zéro produit chimique**, et un logement réutilisable dès la fin du passage. Elle est particulièrement efficace sur les **textiles épais**, que la chaleur traverse en profondeur.'],
        ],
        lien: { href: '/blog/vapeur-seche-punaises-de-lit', label: 'Tout savoir sur la vapeur sèche' },
      },
      {
        nom: 'Cryogénie',
        titres: ['La cryogénie : la neige carbonique à −78 °C, sans insecticide', 'Cryogénie punaises de lit {a} : le froid extrême, comme sur nos vidéos'],
        paras: [
          ['Pour la cryogénie, le technicien vient avec ses **bonbonnes de CO2**, comme sur nos vidéos. Le gaz est projeté par une lance sous forme de **neige carbonique à environ −78 °C** : le choc thermique **tue les punaises et leurs œufs** au contact.', 'Le technicien arrive équipé de **bonbonnes de CO2** (vous les voyez sur nos vidéos de chantier). Par une lance, il projette une **neige carbonique à environ −78 °C** dans chaque fente : adultes et œufs ne survivent pas à ce froid brutal.'],
          ['La neige se transforme directement en gaz : **pas d’eau, pas de résidu**. C’est la méthode que nous avons choisie pour un **foyer d’enfants**, où aucun produit ne devait être déposé. Le logement est aéré, puis réutilisable aussitôt.', 'Sans humidité ni produit, la cryogénie convient aux **lieux sensibles** : bébés, personnes âgées, animaux, électronique. Elle va au plus près des **lattes, prises et jonctions** du mobilier.'],
        ],
        lien: { href: '/services/cryogenie-punaises-de-lit', label: 'Voir une intervention en cryogénie (photos et vidéos)', photo: 'cryoSalle' },
      },
      {
        nom: 'Insecticide professionnel',
        titres: ['L’insecticide : chaque recoin pulvérisé, une protection qui dure', 'Traitement insecticide des punaises de lit {a} : comment ça se passe vraiment'],
        paras: [
          ['Le technicien **pulvérise chaque recoin** du logement : **plinthes, sols, parquet**, cadres de lit, dessous des meubles. Sur un parquet, le produit **pénètre dans les interstices**, là où se cachent les punaises.', 'La pulvérisation vise **toutes les cachettes** : le long des **plinthes**, sur le **sol**, dans les **lames du parquet** où le produit s’infiltre, autour du lit et des meubles. Aucun recoin n’est oublié.'],
          ['Avec la **nébulisation**, une **pellicule invisible d’insecticide** se dépose aussi sur **les murs et le plafond**. Selon le produit, la **rémanence** (la durée pendant laquelle il reste actif) varie **entre 30 et 90 jours** : les punaises qui sortent après le passage sont éliminées.', 'Lors d’une **nébulisation**, le produit forme une **couche invisible** (une fine pellicule) sur **les murs et le plafond**. Il continue d’agir **de 30 à 90 jours selon le produit** : c’est la **rémanence**.'],
          ['Nous utilisons des **insecticides professionnels**, réservés aux techniciens titulaires du **Certibiocide**, la certification obligatoire pour les manipuler. Après le passage, **vous revenez chez vous après 4 heures en moyenne**, en aérant.', 'Ces produits professionnels ne sont **pas vendus au grand public** : il faut le **Certibiocide** pour les manipuler. Comptez **4 heures en moyenne** avant de réintégrer le logement, fenêtres ouvertes.'],
        ],
        etapes: [
          ['**Deux passages sont nécessaires** : les œufs vont éclore après le premier, et le second élimine ces jeunes punaises avant qu’elles ne pondent.', 'Le **second passage** est indispensable : les œufs pondus avant le traitement **éclosent ensuite**, et il faut les détruire avant qu’ils ne deviennent adultes.'],
          ['Les deux passages sont **inclus dans notre tarif dès 290 €**, avec une **garantie d’un an**.', 'Notre prix **dès 290 €** comprend **les deux passages** et la **garantie d’un an**.'],
        ],
        lien: { href: '/blog/punaises-de-lit-traitement-insecticide-appartement', label: 'Voir un chantier traité à l’insecticide', photo: 'vincennesMortes1' },
      },
    ],
  },
  signes: {
    titres: ['Punaises de lit {a} : les signes qui doivent vous alerter', 'Comment savoir si vous avez des punaises de lit {a}'],
    intros: ['Avant même de voir une punaise, plusieurs indices peuvent vous mettre sur la piste. Si vous en reconnaissez deux, **appelez-nous**.', 'Les punaises se cachent le jour, mais elles laissent **des traces**. Voici ce que nos techniciens repèrent le plus souvent {a}.'],
    points: [
      ['Piqûres alignées au réveil|Des boutons **en ligne ou en grappe** sur les bras, le cou ou les épaules, apparus pendant la nuit.', 'Des boutons le matin|Plusieurs piqûres groupées, souvent **par trois ou quatre**, sur les zones découvertes pendant le sommeil.'],
      ['Points noirs sur le matelas|De petites taches noires, comme des **points de feutre**, sur les coutures et le sommier : ce sont des déjections.', 'Des taches d’encre|Des **points noirs** qui bavent sur le tissu quand on les frotte avec un chiffon humide.'],
      ['Taches de sang sur les draps|De petites traces rouges ou brunes, laissées par une punaise écrasée pendant la nuit.', 'Draps tachés|Des **petites taches rougeâtres** sur les draps ou la taie d’oreiller au réveil.'],
      ['Mues et œufs|Des **peaux translucides** et de minuscules œufs blancs dans les fentes du lit.', 'Peaux vides|Les punaises muent cinq fois : leurs **mues translucides** s’accumulent près des cachettes.'],
      ['Une odeur particulière|En cas de forte infestation, une **odeur sucrée et désagréable** peut se dégager de la chambre.', 'Une odeur de moisi sucré|Quand les punaises sont nombreuses, la pièce prend parfois une **odeur caractéristique**.'],
      ['Un insecte brun et plat|Une punaise adulte est **plate, brun-rouge**, de la taille d’un **pépin de pomme**. Elle marche, elle ne saute pas.', 'L’insecte lui-même|Brun, plat, ovale, environ **5 mm** : la punaise adulte est visible à l’œil nu.'],
    ],
  },
  risques: {
    titres: ['Punaises de lit {a} : quelles conséquences si on attend ?', 'Pourquoi il ne faut pas laisser traîner des punaises de lit {a}'],
    cartes: [
      { t: 'Sur votre santé', v: ['Démangeaisons, **troubles du sommeil**, anxiété : vivre avec des punaises use le moral. En cas de réaction importante aux piqûres, consultez votre médecin.', 'Les piqûres ne transmettent pas de maladie connue, mais elles provoquent **démangeaisons et insomnies**, parfois une vraie détresse. Votre médecin peut vous aider.'] },
      { t: 'Sur votre logement', v: ['L’infestation **gagne les autres pièces** puis les logements voisins. Plus on attend, plus il y a de pièces à traiter.', 'Une femelle pond tous les jours : en quelques semaines, une chambre peut **contaminer tout l’appartement** {a}.'] },
      { t: 'Sur votre budget', v: ['Jeter matelas et meubles **ne règle rien** si le logement n’est pas traité. Un traitement professionnel précoce est **l’option la moins chère**.', 'Les achats de produits du commerce et de literie neuve s’additionnent, sans résultat. **Traiter tôt coûte moins cher.**'] },
    ],
  },
  erreurs: {
    titres: ['Punaises de lit {a} : les 6 erreurs qui aggravent tout', 'Ce qu’il ne faut surtout pas faire avec des punaises de lit {a}'],
    items: [
      ['Jeter le matelas tout de suite|Le jeter dans l’escalier **disperse les punaises** dans l’immeuble, et le nouveau matelas sera recolonisé.', 'Se débarrasser du lit|Sans traitement du logement, un **lit neuf est infesté** en quelques jours.'],
      ['Utiliser une bombe insecticide|Les produits du commerce **font fuir les punaises** dans les murs et les pièces voisines, sans tuer les œufs.', 'Pulvériser un fumigène|Il **disperse l’infestation** au lieu de la régler, et les punaises y résistent souvent.'],
      ['Dormir dans le salon|Changer de pièce, c’est **emmener les punaises** avec vous : elles suivent l’hôte.', 'Changer de chambre|Les punaises vous suivent : **la deuxième pièce sera infestée** à son tour.'],
      ['Mettre la terre de diatomée partout|Seule, elle **ne règle pas** une infestation installée et retarde le vrai traitement.', 'Compter sur une astuce maison|Diatomée, huiles, vinaigre : **aucune** n’élimine les œufs cachés.'],
      ['Sauter le second passage|Les œufs **éclosent après le premier passage** : sans le second, l’infestation repart.', 'Croire que c’est fini après un passage|Les jeunes punaises sortent des œufs **dans les jours qui suivent** : le second passage est indispensable.'],
      ['Attendre que ça passe|Une infestation **ne disparaît jamais seule** : elle grossit chaque semaine.', 'Avoir honte d’appeler|Les punaises n’ont **rien à voir avec la propreté** : elles voyagent dans les valises, partout.'],
    ],
  },
  garantie: {
    accroches: ['Les punaises reviennent ? **Nous revenons, sans frais**, pendant un an.', 'Deux passages inclus, **garantie d’un an** : si une punaise réapparaît, on repasse gratuitement.', 'Notre promesse {a} : **pas de punaise, pas de souci**. Sinon, nous revenons gratuitement pendant un an.'],
    texte: 'Notre traitement des punaises de lit {a} comprend **deux passages** et une **garantie d’un an**. Suivez nos consignes (linge à 60 °C, sacs fermés, pas de changement de chambre) pour un résultat durable.',
  },
  quiPaie: {
    titres: ['Punaises de lit {a} : qui doit agir et qui paie le traitement ?', 'Locataire, propriétaire, syndic : qui paie les punaises de lit {a} ?'],
    intros: ['La question revient à chaque intervention. Voici les **règles générales**, à adapter à votre bail et à votre situation {a}.', 'Avant de payer, mieux vaut savoir **qui est responsable**. Tout dépend de **votre statut** et du **moment** où les punaises sont apparues.'],
    cartes: [
      { t: 'Vous êtes locataire', v: ['Le bailleur doit louer un logement **exempt de toute infestation d’espèces nuisibles et parasites** (loi du 6 juillet 1989, article 6). Si les punaises étaient là **à votre arrivée**, prévenez-le **par écrit**, avec photos.', 'Punaises dès l’emménagement {a} ? Écrivez au propriétaire avec **photos et date d’entrée** : un logement doit être loué sans infestation. Si elles arrivent plus tard (voyage, meuble d’occasion), le traitement est souvent à votre charge.'], court: 'Punaises présentes **dès votre arrivée** : écrivez au bailleur, c’est en principe à lui de faire traiter.' },
      { t: 'Vous êtes propriétaire bailleur', v: ['Vous devez remettre un logement **sans infestation**. En cas de signalement, faites intervenir un professionnel rapidement : notre **attestation** prouve le traitement.', 'Un locataire signale des punaises {a} ? Agissez vite : plus on attend, plus l’infestation s’étend et coûte cher. Nous remettons une **attestation d’intervention**.'], court: 'Vous devez louer **sans infestation** : faites traiter vite et gardez notre **attestation**.' },
      { t: 'Vous êtes en copropriété', v: ['Si plusieurs logements sont touchés, prévenez le **syndic** : un traitement coordonné évite que les punaises passent d’un appartement à l’autre par les gaines.', 'Plusieurs voisins piqués {a} ? Le **syndic** peut organiser un traitement coordonné, et chaque logement concerné est traité en même temps.'], court: 'Plusieurs logements touchés : le **syndic** organise un traitement coordonné.' },
      { t: 'Hôtel, location courte durée, foyer', v: ['L’**exploitant** est responsable. Nous traitons **chambre par chambre**, entre deux réservations, avec la cryogénie pour **relouer vite**, et une attestation.', 'Hôteliers, hôtes et gestionnaires de foyer {a} : nous intervenons **rapidement et discrètement**, avec une **attestation** pour votre registre.'], court: 'L’**exploitant** fait traiter, chambre par chambre, avec attestation.' },
    ],
    lien: '/services/punaises-de-lit#qui-paie',
    note: 'Informations générales, qui ne remplacent pas un conseil juridique. Source : loi n° 89-462 du 6 juillet 1989, article 6 (Légifrance).',
  },
}
