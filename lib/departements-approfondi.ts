// Contenu rédigé pour enrichir les pages /zones/[département] (11/11/2026, audit : pages trop courtes).
// Faits généraux sur chaque département, pas de chiffre inventé. Populations et communes : geo.api.gouv.fr (Insee).
// Pas de tiret long, pas de « naturel », « écologique », « sans danger ».
export const DEPARTEMENTS_APPROFONDI: Record<string, { titre: string; paras: string[] }[]> = {
  'seine-et-marne': [
    {
      titre: 'Les nuisibles de la Seine-et-Marne, territoire par territoire',
      paras: [
        'La **Seine-et-Marne** est de loin le plus grand département d’Île-de-France : **507 communes**, des villes nouvelles, de grandes plaines agricoles et de vastes forêts. Les nuisibles n’y sont pas les mêmes d’un secteur à l’autre.',
        'À l’ouest, dans les villes nouvelles de **Marne-la-Vallée** (Champs-sur-Marne, Bussy-Saint-Georges, Torcy) et de **Sénart** (Savigny-le-Temple, Combs-la-Ville), on rencontre surtout des **punaises de lit**, des **cafards** dans les résidences et des **souris** qui profitent des parkings et des chantiers.',
        'Dans la **Brie** et autour de **Meaux**, les **grandes cultures** poussent souris et mulots vers les maisons après les moissons, tandis que les **granges** et **greniers** accueillent les nids de **guêpes**. Au sud, autour de la **forêt de Fontainebleau** et de **Melun**, les **frelons asiatiques** et les **chenilles processionnaires** sont des sujets fréquents.',
      ],
    },
    {
      titre: 'Particuliers, collectivités et exploitations',
      paras: [
        'Nous intervenons chez les **particuliers**, dans les **copropriétés** et les **résidences** des bailleurs, dans les **restaurants** et **commerces** des centres-villes, mais aussi pour les **exploitations agricoles** et les **entrepôts** des zones logistiques.',
        'Pour les communes éloignées de notre base, nous regroupons les rendez-vous afin de proposer un créneau rapide. Le **devis est gratuit** et le prix est fixé avant l’intervention, le même dans tout le département.',
      ],
    },
  ],
  yvelines: [
    {
      titre: 'Les nuisibles des Yvelines, de Versailles à Mantes-la-Jolie',
      paras: [
        'Les **Yvelines** comptent **259 communes**, parmi lesquelles des villes au riche patrimoine comme **Versailles** et **Saint-Germain-en-Laye**, des boucles de la **Seine** très urbanisées (Sartrouville, Houilles, Poissy, Conflans-Sainte-Honorine) et une grande ville nouvelle, **Saint-Quentin-en-Yvelines**.',
        'Dans les **immeubles anciens**, les problèmes les plus fréquents sont les **punaises de lit** cachées dans les parquets et les boiseries, les **souris** sous les planchers et les **rats** dans les caves voûtées. Dans les **résidences** de Mantes-la-Jolie, Trappes ou Les Mureaux, ce sont plutôt les **cafards** qui circulent par les gaines.',
        'Le département est aussi l’un des plus **boisés** d’Île-de-France : forêts de **Saint-Germain**, de **Marly** et de **Rambouillet**. En lisière, les maisons voient arriver **mulots**, **lérots**, **guêpes** et **frelons asiatiques**.',
      ],
    },
    {
      titre: 'Une intervention adaptée au bâti des Yvelines',
      paras: [
        'Dans les bâtiments anciens et protégés, nous choisissons des méthodes qui respectent les matériaux : **vapeur sèche** et **cryogénie** pour les parquets et tissus fragiles, colmatage discret au mortier pour les rongeurs.',
        'Pour les **sites industriels** et les **zones d’activités** de la vallée de la Seine et de Saint-Quentin-en-Yvelines, nous proposons des **contrats de suivi** avec postes numérotés et comptes rendus.',
      ],
    },
  ],
  essonne: [
    {
      titre: 'Les nuisibles de l’Essonne, du plateau de Saclay au sud rural',
      paras: [
        'L’**Essonne** compte **194 communes**. Au nord, des villes denses comme **Massy**, **Palaiseau**, **Athis-Mons** ou **Évry-Courcouronnes**, préfecture et ville nouvelle bâtie sur dalles. Au sud, autour d’**Étampes** et de **Dourdan**, des villages et de grandes zones agricoles.',
        'Le département est traversé par la **Seine**, l’**Orge**, l’**Yvette** et la rivière **Essonne**. Le long de ces cours d’eau, le **surmulot** est fréquent dans les caves et les jardins. Dans les **grands ensembles**, les **cafards** et les **punaises de lit** passent d’un logement à l’autre par les gaines.',
        'Le **plateau de Saclay**, avec ses écoles et ses laboratoires, accueille de nombreux étudiants en résidence : les **punaises de lit** y voyagent avec les bagages. Près d’**Orly**, les entrepôts et hôtels demandent un suivi régulier contre les **rongeurs**.',
      ],
    },
    {
      titre: 'Comment nous intervenons dans le 91',
      paras: [
        'Chaque intervention commence par un **diagnostic** : identification du nuisible, recherche de la source et des accès. Nous choisissons ensuite la méthode adaptée au logement et aux occupants, avec un **devis gratuit** et un prix fixé à l’avance.',
        'Pour les bailleurs et copropriétés, nous traitons les **logements touchés** et conseillons sur les **parties communes**, avec un rapport d’intervention. Nos traitements sont **garantis un an**.',
      ],
    },
  ],
  'hauts-de-seine': [
    {
      titre: 'Les nuisibles des Hauts-de-Seine, de Boulogne à Gennevilliers',
      paras: [
        'Les **Hauts-de-Seine** forment un département très dense, de **36 communes**, entre les boucles de la **Seine** et Paris. Immeubles haussmanniens à **Neuilly** ou **Levallois-Perret**, quartiers d’affaires de **La Défense**, pavillons de **Rueil-Malmaison** ou d’**Antony** : chaque type de bâti a ses nuisibles.',
        'Dans les **immeubles**, les **punaises de lit**, les **cafards** et les **souris** circulent par les gaines et les cloisons. Dans les **parkings souterrains** et les **sous-sols** de bureaux, les **rats** trouvent des couloirs de passage. Dans les **parcs** (Saint-Cloud, Sceaux, Meudon), les **chenilles processionnaires** et les **frelons asiatiques** sont présents chaque année.',
      ],
    },
    {
      titre: 'Bureaux, copropriétés et particuliers',
      paras: [
        'Pour les **bureaux** et **commerces**, nous intervenons en dehors des heures d’activité, avec une **attestation** pour l’entreprise. Pour les **copropriétés**, nous travaillons avec le **syndic** sur les parties communes.',
        'Chez les **particuliers**, nous choisissons la méthode selon le logement et les occupants, avec un **devis gratuit** et une **garantie d’un an**.',
      ],
    },
  ],
  'seine-saint-denis': [
    {
      titre: 'Les nuisibles de la Seine-Saint-Denis',
      paras: [
        'La **Seine-Saint-Denis** est un département très urbain, avec de nombreux **grands ensembles**, des **pavillons** et de vastes **zones d’activités**. Les **cafards** et les **punaises de lit** y sont des problèmes fréquents dans les logements collectifs, où ils circulent par les gaines et les colonnes.',
        'Le long du **canal de l’Ourcq**, du **canal Saint-Denis** et de la **Seine**, les **rats** trouvent abri et nourriture. Les **entrepôts** et **commerces de gros** demandent un plan de lutte suivi contre les rongeurs.',
      ],
    },
    {
      titre: 'Locataires, bailleurs et professionnels',
      paras: [
        'Quand plusieurs logements d’un immeuble sont touchés, le traitement doit être **coordonné avec le bailleur**, sinon les nuisibles reviennent depuis les appartements voisins. Nous remettons un **rapport d’intervention** utile pour ces échanges.',
        'Pour les professionnels, nous proposons des **contrats de suivi** et des **attestations** pour les contrôles d’hygiène. Le devis est gratuit et le prix fixé avant l’intervention.',
      ],
    },
  ],
  'val-d-oise': [
    {
      titre: 'Les nuisibles du Val-d’Oise',
      paras: [
        'Le **Val-d’Oise** mêle villes denses au sud (Argenteuil, Sarcelles, Cergy-Pontoise), **pavillons** et grandes zones agricoles du **Vexin**. Les **rongeurs** profitent des bords de **Seine** et de l’**Oise**, les **guêpes** et **frelons** des jardins et des forêts (Montmorency, L’Isle-Adam).',
        'Dans les **résidences**, les **cafards** et **punaises de lit** demandent un traitement coordonné. Près de l’aéroport de **Roissy**, les hôtels et entrepôts ont besoin d’un suivi régulier.',
      ],
    },
    {
      titre: 'Notre intervention dans le 95',
      paras: [
        'Nous intervenons sur **devis gratuit**, avec un diagnostic, une méthode adaptée et une **garantie d’un an**. Pour les communes éloignées, nous regroupons les rendez-vous pour proposer un créneau rapide.',
      ],
    },
  ],
}
