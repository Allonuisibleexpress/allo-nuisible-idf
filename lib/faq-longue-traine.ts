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
  ]
}
