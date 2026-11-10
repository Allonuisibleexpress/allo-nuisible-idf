import type { BlocMethodes, GuideService } from '@/components/MethodesService'

export const METHODES_FOURMIS: BlocMethodes = {
  titre: 'Traitement anti-fourmis : comment on atteint la reine',
  intro: 'Tuer les fourmis que vous voyez ne sert à rien si **la reine continue de pondre**. Toutes nos méthodes visent le même but : **détruire la colonie à la source**.',
  methodes: [
    {
      nom: 'Identification',
      titre: 'Quelle fourmi avez-vous ? L’identification change tout',
      accroche: 'Une fourmi noire des jardins, une fourmi pharaon ou une fourmi charpentière **ne se traitent pas de la même façon**.',
      etapes: [
        'Observation des ouvrières : **taille, couleur**, comportement.',
        'Questions sur le lieu : cuisine, salle de bain, bois, jardin, étage.',
        'Recherche des **pistes**, que l’on suit jusqu’à leur point d’entrée.',
      ],
      pourquoi: 'Chaque espèce a ses **préférences alimentaires** : sucre, protéines ou graisses. Le bon appât dépend de l’espèce.',
      limites: 'Certaines espèces sont difficiles à distinguer sans loupe : une photo nette nous aide beaucoup.',
      ideal: 'Toutes les interventions.',
    },
    {
      nom: 'Gel appât',
      titre: 'Gel appât anti-fourmis : les ouvrières nourrissent la reine',
      accroche: 'Le gel professionnel est **assez lent** pour que les ouvrières aient le temps de le rapporter au nid.',
      etapes: [
        'Gouttes de gel **sur les pistes**, près des points d’entrée, jamais en travers.',
        'Choix de l’appât selon l’espèce (sucré ou protéiné).',
        'Consigne : **ne pas nettoyer les pistes** ni pulvériser pendant quelques jours.',
      ],
      pourquoi: 'Les ouvrières partagent la nourriture : le produit **atteint la reine et les larves** dans le nid, même invisible.',
      limites: 'Il faut quelques jours : vous verrez parfois **plus de fourmis** au début, c’est bon signe.',
      ideal: 'Fourmis dans la cuisine, fourmi pharaon en immeuble, nids dans les murs.',
    },
    {
      nom: 'Traitement du nid',
      titre: 'Nid de fourmis dans le jardin ou sous la terrasse : traitement direct',
      accroche: 'Quand le nid est **accessible**, notre technicien **Certibiocide** le traite directement avec un insecticide professionnel.',
      etapes: [
        'Localisation des **entrées du nid** (dalles, joints, pied de mur, pelouse).',
        'Application du produit **dans les galeries**.',
        'Traitement en **barrière** autour des seuils si les fourmis entrent par là.',
      ],
      pourquoi: 'Action **rapide** sur une colonie bien localisée.',
      limites: 'Sans effet si le nid principal est ailleurs : d’où l’importance de suivre les pistes.',
      ideal: 'Jardins, terrasses, pieds de façade, fourmis charpentières dans le bois.',
    },
    {
      nom: 'Colmatage',
      titre: 'Fermer les entrées : joints, seuils et passages de tuyaux',
      accroche: 'Une fois la colonie éliminée, on **ferme la porte** aux suivantes.',
      etapes: [
        'Repérage des **fissures, joints de carrelage, seuils** et passages de câbles.',
        'Conseils de colmatage et de rangement des aliments.',
      ],
      pourquoi: 'Moins d’entrées, **moins de risques de nouvelle colonie**.',
      limites: 'Impossible de tout boucher dans un vieux bâtiment : la vigilance reste utile.',
      ideal: 'Maisons, rez-de-chaussée, cuisines en bord de jardin.',
    },
  ],
}

export const GUIDE_FOURMIS: GuideService = {
  sections: [
    {
      titre: 'Fourmis dans la cuisine : que faire en attendant notre passage ?',
      texte: [
        'Rangez **sucre, miel, croquettes et fruits** dans des boîtes fermées, essuyez les miettes et les traces sucrées. Mais **n’écrasez pas les pistes et ne pulvérisez rien** : vous disperseriez la colonie en plusieurs nids, ce qui complique le traitement.',
      ],
      encadre: {
        titre: 'Garantie d’un an',
        texte: 'Traitement **dès 120 €**, devis gratuit au 07 68 07 72 19. Si les fourmis reviennent dans l’année, nous revenons.',
      },
    },
    {"titre": "Fourmis pharaon en appartement : pourquoi les sprays empirent tout", "texte": ["La **fourmi pharaon**, minuscule et jaune pâle, vit dans les immeubles chauffés. Sa colonie compte **plusieurs reines**. Quand on l’attaque avec un insecticide de contact, elle **se divise en plusieurs nids** et se répand dans d’autres pièces, parfois chez les voisins.", "Seul un **gel appât adapté**, déposé avec patience, permet de l’éliminer. C’est un cas typique où il faut **ne rien pulvériser** avant notre passage."]},
    {"titre": "Fourmis charpentières : quand le bois de la maison est attaqué", "texte": ["Grosses et noires, les fourmis charpentières creusent leurs galeries dans le **bois humide ou abîmé** : poutres, huisseries, terrasses. Un petit tas de **sciure** au pied d’une boiserie est un signe d’alerte. Nous traitons le nid et vous indiquons l’origine de l’humidité, à corriger pour éviter le retour."]},
    {"titre": "Fourmis volantes dans la maison : faut-il s’inquiéter ?", "texte": ["Les fourmis ailées sont **les futures reines et les mâles** qui sortent pour s’accoupler, souvent par temps chaud et orageux. Si elles sortent **à l’intérieur**, le nid est dans la maison ou tout près : c’est le bon moment pour le localiser et le traiter."]},
  ],
}

export const METHODES_FRELONS: BlocMethodes = {
  titre: 'Destruction de nid : comment notre technicien procède',
  intro: 'Guêpes, frelon européen ou frelon asiatique : **un nid se détruit à la source**, avec un produit injecté au cœur de la colonie, par un technicien protégé et équipé.',
  methodes: [
    {
      nom: 'Identification',
      titre: 'Guêpe, frelon européen ou frelon asiatique : savoir qui est là',
      accroche: 'La taille du nid, sa forme et son emplacement nous disent **quel matériel prévoir**.',
      etapes: [
        'Photo du nid et des insectes **à distance** : jamais de près.',
        'Repérage de l’emplacement : toit, cheminée, haie, arbre, sol, mur.',
        'Estimation de la hauteur et de l’accès pour fixer le prix.',
      ],
      pourquoi: 'Le **frelon asiatique** construit souvent très haut dans les arbres ; les **guêpes** nichent aussi dans le sol ou sous les tuiles.',
      limites: 'Un nid caché (dans un mur, sous un toit) n’est visible que par l’entrée des insectes.',
      ideal: 'Tous les appels : c’est ce qui permet de vous donner un prix au téléphone.',
    },
    {
      nom: 'Injection dans le nid',
      titre: 'Traitement insecticide du nid à la perche télescopique',
      accroche: 'Le technicien **Certibiocide**, en **tenue de protection intégrale**, injecte un insecticide professionnel **directement dans le nid**.',
      etapes: [
        'Sécurisation de la zone : personnes et animaux tenus à distance.',
        'Injection par l’entrée du nid ou en le perçant, **à la perche télescopique** si le nid est en hauteur.',
        'Le produit agit sur les insectes présents et sur **ceux qui rentrent** dans les heures suivantes.',
      ],
      pourquoi: 'On détruit **toute la colonie**, couvain compris, sans s’exposer aux piqûres.',
      limites: 'Quelques insectes peuvent encore tourner autour du nid le jour même : c’est normal.',
      ideal: 'Nids de toit, de cheminée, d’arbre, de haie ou enterrés.',
    },
    {
      nom: 'Retrait et contrôle',
      titre: 'Faut-il retirer le nid après le traitement ?',
      accroche: 'Un nid traité **ne sera pas réutilisé**. Nous le retirons quand il est **accessible** et gênant.',
      etapes: [
        'Retrait du nid accessible, mis en sac et emporté.',
        'Consignes pour les heures qui suivent : ne pas approcher le nid.',
        'Si une activité persiste **au-delà de 48 heures**, nous revenons.',
      ],
      pourquoi: 'Vous retrouvez votre jardin ou votre terrasse **en toute tranquillité**.',
      limites: 'Un nid dans une cloison ou un toit reste parfois en place : une fois inactif, il ne pose plus de problème.',
      ideal: 'Nids sous un abri, dans une haie, sur une façade.',
    },
  ],
}

export const GUIDE_FRELONS: GuideService = {
  sections: [
    {
      titre: 'Nid de frelons asiatiques : ce que vous ne devez jamais faire',
      texte: ['Le frelon asiatique défend son nid **en groupe** dès qu’il se sent menacé. Les accidents arrivent presque toujours en voulant agir seul :'],
      liste: [
        '**Ne tapez pas** dans le nid et ne le jetez pas au sol',
        '**Ne l’arrosez pas** au jet d’eau',
        '**Ne passez pas la tondeuse ou le taille-haie** près d’un nid',
        '**N’utilisez pas** d’aérosol à bout de bras sur un gros nid',
      ],
      encadre: {
        titre: 'Intervention rapide, prix clair',
        texte: 'Destruction **dès 89 €**, nids en hauteur à **149 € ou 199 €**. Envoyez une photo au 07 68 07 72 19 pour un prix immédiat. Renseignez-vous aussi auprès de votre mairie : **certaines communes participent** aux frais pour le frelon asiatique.',
      },
    },
    {"titre": "Nid de guêpes dans le toit, sous les tuiles ou dans un mur", "texte": ["Les guêpes aiment les **cavités** : sous les tuiles, dans un caisson de volet roulant, un trou de mur ou un conduit. Vous ne voyez pas le nid, seulement **des allées et venues** par une petite ouverture. Notre technicien injecte le produit **par cette entrée** : les insectes le rapportent dans le nid.", "**Ne bouchez jamais l’entrée** avant le traitement : les guêpes chercheraient une autre sortie, parfois vers l’intérieur de la maison."]},
    {"titre": "Frelon asiatique ou frelon européen : comment les reconnaître ?", "texte": ["Le **frelon asiatique** est sombre, avec **l’extrémité des pattes jaune** et une seule bande orange sur l’abdomen. Son nid, souvent très haut dans un arbre, a une **petite entrée sur le côté**. Le **frelon européen** est plus grand, roux et jaune, et niche plutôt dans des cavités : arbre creux, grenier, cabane."]},
  ],
}
