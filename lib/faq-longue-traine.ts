// FAQ « longue traîne » des pages dératisation refondues (25/11/2026, audit concurrents : Express affiche 14-15 questions
// en H3 qui ciblent les recherches longues). 7 questions de plus, avec la ville dans la question, réponses en deux
// formulations alternées selon la ville pour éviter le texte identique. Faits repris de contenus déjà publiés et sourcés.
type Q = { q: string; a: string }
const h = (s: string) => s.split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7)

export function faqLongueTraine(slug: string, a: string): Q[] {
  const k = h(slug) % 2
  const v = (x: [string, string]) => x[k]
  return [
    { q: `Quel dératiseur choisir ${a} ?`, a: v([
      'Un professionnel certifié Certibiocide, qui annonce son prix avant de venir, travaille avec des postes sécurisés, rebouche les accès et remet une attestation. Méfiez-vous des tarifs donnés au téléphone puis multipliés sur place : voir [les arnaques à la dératisation](/blog/arnaques-deratisation-nuisibles).',
      'Choisissez un dératiseur certifié Certibiocide, avec un prix connu d’avance, une garantie écrite et une attestation d’intervention. Un démarchage insistant ou un prix qui change sur place sont de mauvais signes ([les arnaques à éviter](/blog/arnaques-deratisation-nuisibles)).',
    ]) },
    // 27/11/2026 (demande de l'utilisateur) : la question « qui paie ? » sur toutes les pages, propriétaire ou locataire
    { q: `Qui paie la dératisation ${a} : le propriétaire ou le locataire ?`, a: v([
      'En règle générale, le propriétaire. Il doit louer un logement décent, exempt de toute infestation de nuisibles (loi du 6 juillet 1989, article 6). En copropriété, les caves, parkings et locaux à poubelles relèvent du syndic. Le locataire n’a pas à payer un problème qui existait à son arrivée ou qui vient de l’immeuble : signalez-le par écrit, avec photos.',
      'Le plus souvent, c’est le propriétaire : la loi du 6 juillet 1989 (article 6) l’oblige à fournir un logement exempt de nuisibles. Les parties communes (caves, locaux à poubelles, parkings) se traitent à la demande du syndic ou du bailleur. Locataire, prévenez votre propriétaire par écrit, avec photos et dates, et gardez une copie.',
    ]) },
    { q: `Combien de temps dure une dératisation ${a} ?`, a: v([
      'Le premier passage sert au diagnostic, à la pose des postes et au rebouchage. Nous revenons ensuite contrôler les consommations jusqu’à ce qu’elles s’arrêtent : la durée totale dépend de l’ampleur de l’infestation et du lieu.',
      'Elle se fait en plusieurs temps : diagnostic et pose du dispositif au premier passage, puis visites de contrôle jusqu’à l’arrêt des consommations. Une souris isolée se règle plus vite qu’une colonie de rats dans des caves.',
    ]) },
    { q: 'Faut-il quitter le logement pendant la dératisation ?', a: v([
      'Non. Les appâts sont placés dans des postes verrouillés, hors de portée des enfants et des animaux, et les pièges sont posés aux endroits de passage. Vous pouvez rester chez vous normalement.',
      'Non, vous restez chez vous. Le dispositif est sécurisé : postes fermés à clé, pièges hors de portée. Nous vous indiquons simplement où ils se trouvent pour ne pas les déplacer.',
    ]) },
    { q: 'Pourquoi les rats ne touchent-ils pas aux pièges les premiers jours ?', a: v([
      'Le rat se méfie de tout objet nouveau sur son trajet. Il faut souvent quelques jours avant qu’il s’en approche : c’est normal, et c’est pour cela que nous revenons contrôler plutôt que de déplacer les postes.',
      'Par méfiance : un objet nouveau sur son passage l’inquiète. Les consommations commencent souvent après quelques jours. Surtout, ne déplacez pas les postes : cela retarderait le résultat ([le mode de vie du rat](/blog/rat-mode-de-vie)).',
    ]) },
    { q: `Les rats d’un voisin peuvent-ils venir chez moi ${a} ?`, a: v([
      'Oui. Une colonie se déplace par les caves, les jardins mitoyens, les réseaux et les gaines. Prévenir vos voisins, le syndic ou le bailleur permet de traiter le secteur entier, sinon les rats reviennent.',
      'Oui, les rats ignorent les limites de propriété : murs mitoyens, caves communes, égouts. Le plus efficace est un traitement coordonné avec les voisins ou le syndic.',
    ]) },
    { q: 'À quelle vitesse les rats se reproduisent-ils ?', a: v([
      'La femelle surmulot peut se reproduire dès 8 semaines et avoir 3 à 5 portées par an, selon la Ville de Paris. D’où l’intérêt d’agir dès les premiers signes ([la reproduction des rats](/blog/reproduction-des-rats)).',
      'Très vite : une femelle surmulot peut se reproduire dès 8 semaines et avoir 3 à 5 portées par an (Ville de Paris). Quelques rats peuvent devenir une colonie en une saison ([la reproduction des rats](/blog/reproduction-des-rats)).',
    ]) },
    { q: `Faites-vous la désinfection après des rats ${a} ?`, a: v([
      'Oui. Crottes, urine et nids laissent des souillures : après la dératisation, nous pouvons désinfecter les zones touchées, dès 150 €. Voir [notre service de désinfection](/services/desinfection).',
      'Oui, c’est conseillé quand une cave, un grenier ou un local a été très fréquenté par les rats. La désinfection est proposée dès 150 € : voir [désinfection après nuisibles](/services/desinfection).',
    ]) },
    { q: 'La dératisation présente-t-elle un risque pour mon chien ou mon chat ?', a: v([
      'Les appâts sont enfermés dans des postes verrouillés, hors de portée des animaux, et nous vous indiquons où ils se trouvent. Si vous préférez éviter tout raticide, nous utilisons des pièges mécaniques ou le piège Ekomille ([dératisation écologique](/services/deratisation-ecologique)).',
      'Nous adaptons le dispositif aux animaux présents : postes fermés à clé et placés hors de leur portée, ou méthode sans raticide avec pièges et Ekomille ([dératisation écologique](/services/deratisation-ecologique)). Signalez-nous vos animaux dès l’appel.',
    ]) },
    { q: `Intervenez-vous en urgence le soir ou le week-end ${a} ?`, a: v([
      'Oui, 7 jours sur 7, souvent le jour même, sans majoration la nuit, le week-end ni les jours fériés. Un rat dans une chambre d’enfant ou une cuisine de restaurant ne peut pas attendre lundi.',
      'Oui : nous intervenons tous les jours, y compris le soir, le week-end et les jours fériés, au même tarif. Appelez ou envoyez une photo, nous vous donnons un créneau rapidement.',
    ]) },
  ]
}
