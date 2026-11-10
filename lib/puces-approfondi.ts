// Contenu approfondi des pages « Puces à [ville] » (demande du 10/11/2026 : pages plus riches,
// méthode du technicien, cycle, prévention de la récidive, FAQ élargie). Chaque bloc a plusieurs
// variantes, choisies selon la ville, pour garder des pages différentes les unes des autres.
// Pas de chiffre inventé, pas de tiret long, rien de « naturel » ou « sans danger ».
import type { VilleServiceConfig } from '@/components/VilleServicePage'

export const PUCES_APPROFONDI: NonNullable<VilleServiceConfig['approfondi']> = {
  protocoleTitre: (a) => `Traitement anti-puces ${a} : comment notre technicien procède, étape par étape`,
  protocoleIntro: [
    'Un traitement contre les puces réussi ne se résume pas à « pulvériser un produit ». Voici, **étape par étape**, ce que fait notre technicien **Certibiocide** chez vous, et pourquoi chaque geste compte.',
    'Les puces que vous voyez ne représentent qu’une petite partie de l’infestation : **œufs, larves et cocons** sont cachés dans les sols et les textiles. Notre protocole vise **tous les stades**, dans cet ordre.',
    'Voici le **déroulé réel** d’une intervention contre les puces, de votre appel jusqu’au contrôle final. Rien n’est laissé au hasard : chaque étape prépare la suivante.',
  ],
  etapes: [
    [
      'Diagnostic par téléphone ou photo|Vous nous décrivez les **piqûres** (chevilles, mollets), les insectes vus et vos animaux. Une **photo** suffit souvent pour confirmer qu’il s’agit de puces et non de punaises de lit ou d’acariens. Le prix vous est donné tout de suite.',
      'Confirmation : puces ou autre insecte ?|Piqûres groupées aux **chevilles**, petits insectes noirs qui **sautent**, animal qui se gratte : ces signes orientent vers les puces. Nous vérifions avec vous avant de déplacer un technicien, et le **devis est gratuit**.',
      'Premier échange et devis gratuit|Quelques questions suffisent : surface du logement, nombre d’animaux, depuis quand vous êtes piqué, emménagement récent ou non. Vous connaissez **le tarif avant l’intervention**.',
    ],
    [
      'Recherche de l’origine|Le technicien cherche **d’où viennent les puces** : animal de la maison, ancien occupant, **rongeurs** dans la cave, chats errants dans le jardin, meuble d’occasion. Sans cette étape, l’infestation peut revenir.',
      'Inspection des zones de repos|Les larves vivent là où l’animal **dort et se repose** : panier, canapé, lit, tapis, voiture. Le technicien inspecte ces zones en priorité, avec une **lampe**, au ras du sol.',
      'Cartographie des pièces touchées|Toutes les pièces fréquentées par l’animal sont repérées, même celles où vous ne voyez pas de puces. Les **fentes du parquet**, les **plinthes** et le **dessous des meubles** sont notés pour le traitement.',
    ],
    [
      'Préparation du logement avec vous|Avant le passage, vous **aspirez tout le logement** (sac jeté dehors, fermé), vous **lavez à 60 °C** le couchage de l’animal et les plaids, et vous dégagez les sols. Le produit pénètre alors bien mieux dans les fentes.',
      'Sols dégagés, textiles lavés|Une bonne préparation fait la moitié du résultat : **aspiration complète**, lavage à **60 °C** des housses et coussins, objets retirés du sol. Le technicien vous laisse une **liste claire** à suivre.',
      'Aspiration et lavage avant le traitement|L’aspiration retire une partie des **œufs et des larves**, et ses vibrations poussent certaines puces à sortir de leur cocon, ce qui les rend plus faciles à atteindre. Le linge part en machine **à 60 °C**.',
    ],
    [
      'Pulvérisation de l’insecticide professionnel|Le technicien applique un **insecticide professionnel** sur les sols, en insistant sur les **fentes du parquet**, les **plinthes**, les **tapis**, les **moquettes** et le dessous des meubles, là où les larves fuient la lumière.',
      'Traitement des sols et des textiles|Le produit est pulvérisé en **fine couche** sur les sols et les textiles d’ameublement : canapés, fauteuils, tapis. Selon les cas, il contient un **régulateur de croissance** qui empêche les larves de devenir adultes.',
      'Traitement de fond, pièce par pièce|Chaque pièce est traitée **du fond vers la porte**, sans oublier les recoins sombres, les bas de placards et les zones de repos de l’animal. Le **garage**, la **véranda** ou la **voiture** peuvent être inclus.',
    ],
    [
      'Temps d’absence et aération|Vous quittez le logement avec vos animaux le **temps indiqué par le technicien**, puis vous **aérez** avant de revenir. Vous ne lavez pas les sols à grande eau pendant quelques jours, pour laisser agir le produit.',
      'Retour dans le logement|Après le temps d’absence prévu, vous aérez et vous pouvez réoccuper les pièces. Le technicien vous indique **quand reprendre le lavage des sols** et comment continuer à aspirer.',
      'Consignes après le passage|Pas de serpillière pendant quelques jours, **aspiration chaque jour**, sac jeté dehors : ces gestes simples font sortir les dernières puces de leur cocon, et le produit les élimine.',
    ],
    [
      'Second passage et garantie d’un an|Le **cocon protège** la puce en formation. Si des puces sont encore vues dans les semaines suivantes, un **second passage** les élimine. Notre traitement est **garanti un an**.',
      'Suivi et contrôle|Nous restons joignables après l’intervention. Si les piqûres continuent au-delà de la période normale, le technicien revient pour un **second passage**. **Garantie d’un an**.',
      'Contrôle des dernières puces|Quelques puces peuvent encore apparaître : ce sont celles qui sortent de leur cocon et rencontrent le produit. Si elles persistent, **nous revenons**, dans le cadre de la **garantie d’un an**.',
    ],
  ],
  cycleTitre: (a) => `Œufs, larves, cocons : pourquoi les puces envahissent un logement ${a}`,
  cycle: [
    [
      'La puce adulte vit sur l’animal et se nourrit de son sang. La femelle pond **plusieurs dizaines d’œufs par jour** dans le pelage. Ces œufs ne sont pas collés : ils **tombent partout où l’animal passe**, sur le panier, le canapé, le tapis ou le lit.',
      'Une puce femelle installée sur un chat ou un chien pond chaque jour de nombreux œufs, qui **glissent du pelage** et se répartissent dans tout le logement. C’est pour cela que les puces apparaissent d’abord **là où l’animal dort**.',
      'Tout commence sur l’animal : la puce adulte s’y nourrit et y pond. Mais les œufs **tombent au sol** à chaque mouvement, et c’est dans la maison que la suite du cycle se joue.',
    ],
    [
      'Les œufs donnent des **larves** qui fuient la lumière et s’enfoncent dans les **fentes du parquet**, les **tapis** et les **moquettes**. Elles se nourrissent des poussières et des **déjections des puces adultes**, riches en sang séché.',
      'Les larves ressemblent à de **minuscules vers blancs**. Elles vivent cachées au ras du sol, dans les fibres et les fentes, et se nourrissent des **excréments des puces adultes**. Un aspirateur passé régulièrement en retire une partie.',
      'Après l’éclosion, les **larves** descendent au plus profond des textiles et des fentes. Invisibles à l’œil nu ou presque, elles se développent tranquillement **pendant que vous ne voyez rien**.',
    ],
    [
      'Chaque larve tisse ensuite un **cocon**, collant et couvert de poussière, presque impossible à repérer. À l’intérieur, la puce peut **attendre longtemps** avant de sortir : elle guette la **chaleur**, les **vibrations** et le **gaz carbonique** d’un hôte qui passe.',
      'Le **cocon** est le stade le plus résistant : il protège la puce des produits et de l’aspirateur. Elle n’en sort que lorsqu’elle détecte un hôte, ce qui explique les **piqûres en série** au retour de vacances ou à l’emménagement.',
      'Le stade **cocon** est la raison pour laquelle on voit encore des puces après un traitement : elles sortent progressivement, rencontrent le produit sur le sol et meurent. C’est **normal**, et c’est pour cela qu’il faut continuer d’aspirer.',
    ],
  ],
  recidiveTitre: (a) => `Éviter le retour des puces ${a} : nos conseils après le traitement`,
  recidiveIntro: [
    'Le traitement élimine l’infestation, mais **quelques habitudes** font toute la différence pour qu’elle ne revienne pas. Voici les conseils que nous donnons après chaque intervention.',
    'Une **récidive** de puces a presque toujours la même cause : un animal non traité, un nid de rongeurs oublié ou des cocons restés intacts. Ces gestes vous en protègent.',
    'Après notre passage, **vous jouez un rôle clé**. Ces conseils simples évitent que les puces reviennent dans les semaines et les mois qui suivent.',
  ],
  recidive: [
    '**Traitez tous vos animaux** chez le vétérinaire, en même temps, même ceux qui ne se grattent pas.',
    '**Renouvelez l’antiparasitaire** de vos animaux toute l’année, selon la prescription du vétérinaire : en logement chauffé, les puces sont actives même en hiver.',
    '**Aspirez chaque jour** pendant plusieurs semaines, surtout les zones de repos de l’animal, et **jetez le sac dehors**.',
    '**Ne lavez pas les sols à grande eau** dans les jours qui suivent le traitement : vous retireriez le produit.',
    '**Lavez à 60 °C** le couchage de l’animal, les plaids et les housses de coussins chaque semaine pendant le premier mois.',
    '**Traitez aussi la voiture** et le panier de transport si votre animal y voyage souvent.',
    '**Vérifiez les caves et les combles** : un nid de rongeurs ou d’oiseaux peut apporter de nouvelles puces.',
    '**Inspectez et aspirez** tout tapis, canapé ou panier d’occasion avant de l’installer chez vous.',
    '**Évitez les contacts** de votre animal avec des chats errants ou des animaux non traités.',
    '**Ne déplacez pas le couchage** de l’animal dans une autre pièce pendant le traitement : vous déplaceriez les œufs.',
    '**Signalez-nous rapidement** toute nouvelle piqûre : un passage de contrôle est prévu dans la garantie d’un an.',
    '**N’utilisez pas de diffuseur fumigène** du commerce en plus : il n’atteint pas les cocons et peut gêner l’action du produit appliqué.',
    '**Gardez le jardin propre** près de la maison : pas de croquettes dehors, abris d’animaux errants limités.',
    '**Avant un emménagement**, demandez si l’ancien occupant avait un animal, et faites traiter le logement vide si besoin.',
  ],
  faqPool: [
    { q: 'Quelle est la différence entre une piqûre de puce et une piqûre de punaise de lit ?', a: 'Les puces piquent surtout le bas des jambes et les chevilles, en petits groupes, à toute heure. Les punaises de lit piquent la nuit, sur les zones découvertes pendant le sommeil (bras, épaules, cou), souvent en ligne. En cas de doute, envoyez-nous une photo.' },
    { q: 'Les puces peuvent-elles vivre sur l’homme ?', a: 'Non, la puce du chat et celle du chien ne s’installent pas sur l’homme : elles le piquent, puis retournent au sol ou sur l’animal. Sans animal pour s’y installer durablement, elles finissent par mourir, mais les cocons peuvent attendre longtemps.' },
    { q: 'Combien de temps dure le traitement chez moi ?', a: 'Le passage du technicien dure en général de quelques dizaines de minutes à une à deux heures selon la surface et le nombre de pièces. Il faut ensuite quitter le logement le temps indiqué, puis aérer.' },
    { q: 'Peut-on rester dans le logement pendant le traitement ?', a: 'Non. Vous sortez avec vos animaux pendant l’application et le temps d’absence indiqué par le technicien, puis vous aérez avant de revenir.' },
    { q: 'Faut-il retirer l’aquarium ou les autres animaux ?', a: 'Oui pour les petits animaux (rongeurs, oiseaux), qui sortent du logement. L’aquarium est couvert et sa pompe à air coupée pendant le traitement : le technicien vous l’indique avant de commencer.' },
    { q: 'Les puces transmettent-elles des maladies ?', a: 'Elles peuvent transmettre le ténia (dipylidium) aux animaux qui les avalent en se léchant, et provoquer des allergies cutanées chez l’animal. Chez l’homme, les piqûres causent surtout des démangeaisons. Votre médecin ou votre vétérinaire reste votre interlocuteur pour la santé.' },
    { q: 'Le traitement est-il compatible avec un chat ou un chien ?', a: 'Oui, à condition de respecter les consignes : l’animal sort pendant le traitement et revient après aération. Il doit être traité en parallèle par votre vétérinaire.' },
    { q: 'Les puces meurent-elles toutes tout de suite ?', a: 'Les adultes touchés meurent rapidement. Celles qui sont encore dans leur cocon sortent dans les jours ou les semaines suivants et rencontrent le produit : c’est pour cela que l’on voit encore quelques puces après le traitement.' },
    { q: 'L’aspirateur suffit-il à éliminer les puces ?', a: 'Non, mais il aide beaucoup : il retire une partie des œufs et des larves, et ses vibrations font sortir les puces des cocons. Il complète le traitement, il ne le remplace pas.' },
    { q: 'Le gel douche ou le vinaigre éloignent-ils les puces ?', a: 'Ces astuces n’éliminent pas les œufs, les larves ni les cocons cachés dans les sols. Elles peuvent retarder le vrai traitement pendant que l’infestation grossit.' },
    { q: 'Mon chien a été traité mais il se gratte encore, pourquoi ?', a: 'Les puces qui sortent des cocons dans la maison remontent sur lui avant d’être éliminées par son antiparasitaire. Tant que le logement n’est pas traité, le cycle continue.' },
    { q: 'Y a-t-il des puces sans animal de compagnie ?', a: 'Oui : un ancien occupant avec un animal, des rongeurs dans la cave, des oiseaux sous le toit ou un meuble d’occasion peuvent apporter des puces. Nous recherchons l’origine pendant l’intervention.' },
    { q: 'Le traitement laisse-t-il une odeur ?', a: 'Une légère odeur peut être perçue juste après l’application. Elle disparaît avec l’aération du logement.' },
    { q: 'Faut-il traiter les étages où l’animal ne va jamais ?', a: 'Pas forcément. Le technicien traite les pièces fréquentées par l’animal et celles où des puces ou des piqûres ont été signalées. Il vous l’indique pendant l’inspection.' },
    { q: 'Puis-je faire traiter un logement vide avant d’emménager ?', a: 'Oui, c’est même le moment idéal : sols dégagés, aucun meuble à déplacer. Le traitement est plus rapide et plus complet.' },
    { q: 'Les puces de rat sont-elles différentes des puces du chat ?', a: 'Ce sont d’autres espèces, mais elles piquent aussi l’homme. Si les puces viennent de rongeurs, il faut traiter les rongeurs en même temps, sinon de nouvelles puces arrivent.' },
  ],
}
