import type { PagePrix } from './types'

export const PRIX_CHENILLES: PagePrix = {
  slug: 'chenilles-processionnaires',
  nom: 'chenilles processionnaires',
  titreSeo: 'Prix traitement chenilles processionnaires : dès 89 €',
  description: 'Combien coûte le traitement des chenilles processionnaires en Île-de-France ? Nid accessible dès 89 €, en hauteur 149 €, grand arbre sur devis, garantie 1 an.',
  h1: 'Prix du traitement des chenilles processionnaires',
  prixDes: '89 €',
  garantie: '1 an',
  service: '/services/chenilles-processionnaires',
  famille: 'chenilles',
  intro: [
    'Le traitement des chenilles processionnaires coûte **dès 89 € TTC** chez Allo Nuisible IDF pour un nid accessible, **149 €** pour un nid en hauteur traité à la perche, et **sur devis** pour un grand arbre, plusieurs arbres ou un passage en nacelle. Le prix est le même tous les jours, week-end et jours fériés compris.',
    'Les chenilles processionnaires du pin et du chêne sont inscrites depuis 2022 dans le Code de la santé publique parmi les espèces nuisibles à la santé humaine. Leurs **poils urticants** provoquent des démangeaisons, des atteintes des yeux et, chez les chiens, des lésions graves de la langue. C’est pour cela que le retrait des nids se fait avec un équipement de protection, et que le prix comprend la destruction sécurisée des nids.',
    'Cette page détaille notre grille, ce qui fait varier le prix (hauteur, nombre de nids, type d’arbre), le bon moment pour agir, et les solutions qui protègent votre jardin d’une année sur l’autre.',
  ],
  enBref: [
    { q: 'Combien coûte le traitement des chenilles processionnaires ?', r: 'Dès 89 € pour un nid accessible, 149 € en hauteur, grand arbre ou nacelle sur devis. Garantie 1 an.' },
    { q: 'Quand faut-il intervenir ?', r: 'L’hiver, avant que les chenilles ne descendent de l’arbre en procession au printemps.' },
    { q: 'Les écopièges sont-ils compris ?', r: 'Ils sont proposés en complément, sur devis selon le nombre d’arbres.' },
    { q: 'Est-ce plus cher le week-end ?', r: 'Non, aucune majoration.' },
  ],
  grille: [
    { situation: 'Nid accessible', prix: 'dès 89 €', inclus: 'Retrait et destruction du nid, protection contre les poils' },
    { situation: 'Nid en hauteur', prix: '149 €', inclus: 'Retrait à la perche télescopique' },
    { situation: 'Grand arbre, plusieurs nids', prix: 'sur devis', inclus: 'Selon la hauteur et le nombre de nids' },
    { situation: 'Écopièges sur les troncs', prix: 'sur devis', inclus: 'Pose avant la descente des chenilles' },
    { situation: 'Nacelle', prix: 'sur devis', inclus: 'Pour les nids hors de portée de la perche' },
  ],
  inclus: [
    'L’**identification** : processionnaire du pin (nids blancs soyeux en haut des branches) ou du chêne (nids sur le tronc).',
    'Le **retrait** des nids accessibles et leur **destruction** sécurisée.',
    'L’**équipement de protection** du technicien contre les poils urticants.',
    'Les **conseils** pour les enfants, les chiens et le jardin.',
    'La **garantie 1 an**.',
  ],
  nonInclus: [
    'L’**élagage** ou l’abattage d’un arbre : à voir avec un élagueur.',
    'La **nacelle** pour les nids très hauts : sur devis.',
    'Les **écopièges** et pièges à phéromones : sur devis, en complément.',
  ],
  facteurs: [
    { t: '1. La hauteur des nids', x: 'Les processionnaires du pin installent leurs nids en haut des branches exposées au soleil. Un nid à portée de main coûte **89 €**, un nid à la perche **149 €**. Au-delà, il faut une nacelle.' },
    { t: '2. Le nombre de nids et d’arbres', x: 'Un pin isolé avec un nid n’est pas un alignement de pins avec dix nids chacun. Le devis tient compte du temps passé arbre par arbre.' },
    { t: '3. Le pin ou le chêne', x: 'La processionnaire du chêne fait ses nids sur le tronc et les grosses branches. Le travail est différent. Voir [la processionnaire du pin](/blog/chenille-processionnaire-du-pin) et [la processionnaire du chêne](/blog/chenille-processionnaire-du-chene).' },
    { t: '4. La saison', x: 'En hiver, les nids sont bien visibles et les chenilles sont dedans. Au printemps, une fois descendues en procession, elles sont dispersées au sol : le traitement est moins efficace.' },
    { t: '5. La protection sur plusieurs années', x: 'Retirer les nids règle l’année en cours. Les écopièges sur les troncs et les pièges à phéromones limitent l’infestation suivante : c’est un coût en plus, mais qui évite de recommencer chaque hiver.' },
  ],
  methodes: {
    titre: 'Retrait des nids, écopièges, phéromones : les méthodes et leur prix',
    intro: 'Nous combinons plusieurs méthodes selon l’arbre et la saison. Aucune ne demande de pulvériser un insecticide dans tout le jardin.',
    lignes: [
      { methode: 'Retrait du nid à la main', quand: 'Nid bas, accessible', prix: 'dès 89 €' },
      { methode: 'Retrait à la perche', quand: 'Nid en hauteur', prix: '149 €' },
      { methode: 'Écopiège sur le tronc', quand: 'Avant la descente des chenilles', prix: 'sur devis' },
      { methode: 'Pièges à phéromones', quand: 'Capture des papillons en été, prévention', prix: 'sur devis' },
      { methode: 'Nacelle', quand: 'Grands arbres', prix: 'sur devis' },
    ],
    apres: [
      'L’**écopiège** est une collerette posée autour du tronc : les chenilles qui descendent sont guidées vers un sac. Il n’utilise aucun produit : c’est une méthode écologique, au sens où aucun biocide n’est utilisé.',
      'À **Versailles**, nous avons décroché à la perche des nids jusqu’au sommet de cèdres : voir [la vidéo](/chenilles-processionnaires/versailles).',
    ],
  },
  exemples: [
    { t: 'Un pin dans un jardin du Val-de-Marne', x: 'Deux nids à portée de perche : **149 €** pour le retrait en hauteur.' },
    { t: 'Nid bas sur un jeune pin', x: 'Nid accessible : **dès 89 €**.' },
    { t: 'Alignement de pins en copropriété', x: 'Plusieurs nids, plusieurs arbres, écopièges : **sur devis**.' },
    { t: 'Chênes près d’une école', x: 'Nids sur les troncs, intervention hors présence des enfants : **sur devis**. Voir [mairies et collectivités](/mairies-collectivites).' },
  ],
  soiMeme: [
    'Ne touchez jamais un nid ni une procession à mains nues : les poils se détachent et se dispersent dans l’air. Ne passez pas le nid au jet d’eau, ne le brûlez pas dans l’arbre.',
    'Les chiens sont particulièrement exposés : ils reniflent ou lèchent les chenilles au sol. En cas de contact, consultez un vétérinaire sans attendre.',
    'Ce que vous pouvez faire : repérer les nids en hiver, tenir les enfants et les animaux éloignés des arbres touchés, et installer des nichoirs à mésanges, qui mangent les chenilles. Voir [cycle et dangers](/blog/chenilles-processionnaires-cycle-dangers).',
  ],
  economiser: [
    { t: 'Agir en hiver', x: 'Les nids sont visibles et pleins : un seul passage suffit souvent.' },
    { t: 'Regrouper les arbres', x: 'Traiter tous les arbres touchés le même jour évite plusieurs déplacements.' },
    { t: 'Prévenir l’année suivante', x: 'Écopièges et phéromones évitent de payer un retrait de nids chaque hiver.' },
    { t: 'Envoyer une photo', x: 'Hauteur et nombre de nids se voient sur photo : prix plus juste dès l’appel.' },
  ],
  quiPaie: [
    'Les arbres d’un jardin privé sont à la charge du **propriétaire**. En **copropriété**, les arbres des espaces communs relèvent du syndic.',
    'Dans les parcs, les écoles et sur la voie publique, c’est la **commune**. Depuis 2022, les processionnaires font partie des espèces dont la prolifération est nuisible à la santé humaine, ce qui permet au maire d’imposer des mesures.',
  ],
  deroule: [
    { t: 'Photo ou appel', x: 'Nous voyons la hauteur et le nombre de nids, et vous donnons le prix.' },
    { t: 'Intervention', x: 'Retrait et destruction des nids, technicien protégé.' },
    { t: 'Prévention', x: 'Pose d’écopièges ou de pièges à phéromones si vous le souhaitez.' },
    { t: 'Garantie 1 an', x: 'Si des nids réapparaissent sur les arbres traités, nous revenons.' },
  ],
  pieges: [
    'Méfiez-vous des traitements par pulvérisation « de tout le jardin » : ils ne sont pas nécessaires pour quelques nids, et coûtent plus cher.',
    'Une intervention au printemps, quand les chenilles sont déjà descendues, est moins efficace : le bon moment est l’hiver.',
  ],
  faq: [
    { q: 'Quel est le prix du retrait d’un nid de chenilles processionnaires ?', a: 'Dès 89 € pour un nid accessible, 149 € en hauteur à la perche, sur devis pour un grand arbre ou une nacelle.' },
    { q: 'Quand faire retirer les nids ?', a: 'En hiver, avant la descente des chenilles au printemps.' },
    { q: 'Les chenilles sont-elles dangereuses pour les chiens ?', a: 'Oui, leurs poils urticants peuvent provoquer des lésions graves de la langue. Consultez un vétérinaire en cas de contact.' },
    { q: 'Qu’est-ce qu’un écopiège ?', a: 'Une collerette posée autour du tronc qui guide les chenilles vers un sac, sans aucun produit.' },
    { q: 'Est-ce plus cher le week-end ?', a: 'Non, aucune majoration.' },
  ],
  guides: [
    { href: '/blog/chenilles-processionnaires-cycle-dangers', label: 'Cycle et dangers' },
    { href: '/blog/chenilles-processionnaires-traitement-prevention', label: 'Traitement et prévention' },
    { href: '/blog/chenille-processionnaire-du-pin', label: 'La processionnaire du pin' },
    { href: '/blog/chenille-processionnaire-du-chene', label: 'La processionnaire du chêne' },
  ],
}
