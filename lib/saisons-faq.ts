// Questions « saisons » par nuisible (demande de l'utilisateur, 09/11/2026) : ajoutées aux FAQ des pages
// département (toutes) et des pages ville (une en rotation, pour limiter le texte identique). Pas de chiffre inventé.
import type { FamilleVille } from './services-ville'

export const SAISONS_FAQ: Record<FamilleVille, { q: string; a: string }[]> = {
  deratisation: [
    { q: 'En hiver, est-il normal d’avoir des rats dans la maison ?', a: 'Oui, c’est fréquent. Quand il fait froid, les rats cherchent la chaleur et la nourriture des bâtiments : caves, vides sanitaires, cuisines, combles. Ce n’est pas une fatalité : il faut trouver par où ils entrent, les traiter et reboucher les accès.' },
    { q: 'Y a-t-il plus de rats en automne ?', a: 'On en voit souvent davantage à l’automne : les rongeurs quittent les jardins et l’extérieur pour s’abriter avant l’hiver. C’est le bon moment pour vérifier les grilles, les soupiraux et les passages de tuyaux.' },
    { q: 'Les rats sont-ils actifs en été ?', a: 'Oui, toute l’année. En été, ils restent davantage dehors (jardins, composts, poubelles) mais peuvent entrer à tout moment, surtout après des travaux ou de fortes pluies qui inondent leurs galeries.' },
  ],
  souris: [
    { q: 'Pourquoi y a-t-il plus de souris dans la maison en automne ?', a: 'Dès les premiers froids, les souris quittent l’extérieur et cherchent un abri chauffé. Elles entrent par des ouvertures minuscules : c’est la saison où l’on reçoit le plus d’appels pour des souris.' },
    { q: 'Est-il normal d’entendre des souris dans les murs en hiver ?', a: 'C’est un signe classique : en hiver, elles s’installent dans les cloisons, les faux plafonds et les combles, au chaud. Un bruit régulier la nuit justifie un diagnostic.' },
    { q: 'Les souris partent-elles toutes seules au printemps ?', a: 'Rarement. Une fois installées avec de la nourriture et un nid, elles restent et se reproduisent. Il faut les traiter et boucher les passages.' },
  ],
  punaises: [
    { q: 'Y a-t-il une saison des punaises de lit ?', a: 'Pas vraiment : dans un logement chauffé, elles se reproduisent toute l’année. On observe surtout plus de cas après les vacances, à cause des voyages et des séjours à l’hôtel.' },
    { q: 'Les punaises de lit meurent-elles en hiver ?', a: 'Non. Elles vivent à l’intérieur, à la température du logement, et peuvent jeûner longtemps. Le froid de l’hiver dehors ne les touche pas.' },
    { q: 'Pourquoi des punaises de lit après les vacances ?', a: 'Elles voyagent dans les valises et les vêtements depuis un hôtel, une location ou un train. Au retour, inspectez la valise et lavez le linge à 60 °C.' },
  ],
  cafards: [
    { q: 'Y a-t-il plus de cafards en été ?', a: 'Oui, la chaleur les rend plus actifs et plus visibles, parfois même en journée. Mais dans une cuisine ou une gaine chauffée, ils se reproduisent toute l’année.' },
    { q: 'Les cafards disparaissent-ils en hiver ?', a: 'Non. À l’intérieur, ils restent au chaud près des appareils, des tuyaux et des gaines. On les voit simplement moins.' },
    { q: 'Pourquoi des cafards après des travaux dans l’immeuble ?', a: 'Un chantier dérange les colonies installées dans les gaines et les cloisons : elles se déplacent vers les logements voisins.' },
  ],
  fourmis: [
    { q: 'Pourquoi y a-t-il plus de fourmis au printemps ?', a: 'Au retour des beaux jours, les colonies se réveillent et les ouvrières cherchent de la nourriture sucrée : c’est la période des longues files dans les cuisines.' },
    { q: 'D’où viennent les fourmis volantes en été ?', a: 'Ce sont les futures reines et les mâles qui sortent pour s’accoupler, souvent par temps chaud et orageux. S’ils sortent à l’intérieur, le nid est tout proche.' },
    { q: 'Les fourmis restent-elles en hiver ?', a: 'Au jardin, la colonie ralentit. Mais certaines espèces, comme la fourmi pharaon, vivent dans les immeubles chauffés et restent actives toute l’année.' },
  ],
  chenilles: [
    { q: 'Quand voit-on les chenilles processionnaires ?', a: 'Pour la processionnaire du pin, les nids blancs sont visibles en hiver et les processions au sol à la fin de l’hiver et au printemps. Pour celle du chêne, plutôt au printemps et au début de l’été.' },
    { q: 'Quelle est la meilleure saison pour traiter ?', a: 'Pour le pin, en hiver, avant que les chenilles ne descendent. Les pièges à phéromones se posent en été, pour capturer les papillons.' },
    { q: 'Les poils sont-ils dangereux même en été ?', a: 'Oui : les poils urticants restent actifs longtemps dans les nids et au sol. Ne touchez jamais un nid, même vide.' },
  ],
  acariens: [
    { q: 'Y a-t-il plus d’acariens à l’automne ?', a: 'Beaucoup d’allergiques le ressentent : avec le chauffage et des fenêtres moins ouvertes, l’humidité intérieure et la poussière favorisent les acariens.' },
    { q: 'Les acariens meurent-ils en hiver ?', a: 'Non, ils vivent dans la literie et les textiles, à la température du logement. Aérer chaque jour et limiter l’humidité aide toute l’année.' },
    { q: 'Quand faire un traitement anti-acariens ?', a: 'À tout moment, mais beaucoup de familles le font avant l’hiver ou au moment où les symptômes reviennent.' },
  ],
  puces: [
    { q: 'Y a-t-il plus de puces en été ?', a: 'Oui : la chaleur et l’humidité accélèrent leur cycle. Les infestations deviennent souvent visibles à la fin de l’été et au début de l’automne.' },
    { q: 'Les puces disparaissent-elles en hiver ?', a: 'Non. Dans un logement chauffé, elles continuent de se développer, et un adulte peut attendre longtemps dans son cocon.' },
    { q: 'Pourquoi des puces au retour des vacances ?', a: 'Des adultes attendaient dans leurs cocons. Votre retour (chaleur, vibrations, gaz carbonique) déclenche leur sortie en masse.' },
  ],
  frelons: [
    { q: 'Les frelons meurent-ils en hiver ?', a: 'La colonie disparaît à la fin de l’automne : seules les futures reines passent l’hiver à l’abri. Le nid est abandonné et ne sera pas réutilisé.' },
    { q: 'Quand les nids de frelons sont-ils les plus gros ?', a: 'À la fin de l’été et au début de l’automne : la colonie est alors à son maximum, et les insectes plus agressifs près du nid.' },
    { q: 'Faut-il détruire un nid en hiver ?', a: 'En général non, car il est vide. Au printemps, en revanche, un petit nid de reine est le plus simple à traiter.' },
  ],
}

// Une question « saison » pour une page ville, choisie selon la ville
export function saisonVille(famille: FamilleVille, slug: string) {
  const l = SAISONS_FAQ[famille]
  const h = slug.split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 5)
  return l[h % l.length]
}
