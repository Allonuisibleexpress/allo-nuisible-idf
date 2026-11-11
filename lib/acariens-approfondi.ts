// Contenu approfondi des pages « Acariens à [ville] » (demande du 11/11/2026 : enrichir énormément les pages acariens).
// Même principe que les puces : protocole détaillé, mode de vie, prévention de la récidive, FAQ élargie.
// Chaque bloc a plusieurs variantes, choisies selon la ville, pour garder des pages différentes.
// Repères santé repris de l'Assurance maladie (ameli.fr). Aucune promesse médicale.
// Pas de chiffre inventé, pas de tiret long, rien de « naturel », « bio », « écologique » ou « sans danger ».
import type { VilleServiceConfig } from '@/components/VilleServicePage'

export const ACARIENS_APPROFONDI: NonNullable<VilleServiceConfig['approfondi']> = {
  protocoleTitre: (a) => `Traitement anti-acariens ${a} : notre méthode, étape par étape`,
  protocoleIntro: [
    'Traiter les acariens, ce n’est pas seulement passer un appareil sur un matelas. Voici **ce que fait réellement notre technicien** chez vous, du premier appel aux conseils qui font durer le résultat.',
    'Les acariens vivent **au cœur des textiles**, là où l’aspirateur n’arrive pas. Notre protocole les atteint en profondeur, puis s’attaque à **ce qui les fait revenir** : l’humidité et la chaleur.',
    'Voici le **déroulé concret** d’une intervention anti-acariens, pensée pour les personnes allergiques, les familles avec enfants et les logements meublés.',
  ],
  etapes: [
    [
      'Un premier échange, un prix|Vous nous décrivez votre logement, le nombre de **lits**, de **canapés** et de **tapis**, et la raison de votre appel : allergie, arrivée d’un bébé, emménagement. Vous connaissez le **tarif avant l’intervention**.',
      'Le devis gratuit|Quelques questions suffisent : combien de chambres, quels textiles, y a-t-il une personne allergique ou un nourrisson. Le **prix est fixé avant le déplacement**, sans surprise.',
      'Comprendre votre besoin|Un enfant qui tousse la nuit, un matelas d’occasion, une location entre deux voyageurs : le besoin n’est pas le même. Nous adaptons la méthode, et vous donnons **le prix tout de suite**.',
      'Votre appel {a}|Vous nous appelez ou nous écrivez sur WhatsApp : nous faisons le point sur les **pièces et les textiles** à traiter, et vous proposons un créneau, souvent dans la semaine.',
    ],
    [
      'Le diagnostic du logement|Sur place, le technicien repère les **réservoirs d’acariens** (matelas, sommier tapissier, oreillers, canapé, tapis, rideaux) et contrôle ce qui favorise leur développement : **humidité**, condensation, aération, chauffage.',
      'Mesurer l’humidité|Un **hygromètre** permet de vérifier si l’air de la chambre reste au-dessus du taux conseillé. C’est souvent la clé : un logement trop humide recrée vite une forte population d’acariens.',
      'Inspection pièce par pièce|Chambres, salon, chambre d’enfant : le technicien note les textiles à traiter et ceux à laver vous-même. Il vérifie aussi les **bouches de ventilation** et les traces d’humidité sur les murs.',
      'Le tour du logement {a}|Le technicien commence par la **chambre de la personne la plus gênée**, puis passe aux pièces de vie. Il note ce qui se lave à 60 °C, ce qui doit être traité sur place et ce qui mérite d’être remplacé.',
    ],
    [
      'La préparation, avec vous|Avant le passage, vous **lavez le linge de lit à 60 °C** si l’étiquette le permet, vous retirez les objets posés sur le lit et le canapé, et vous dégagez l’accès aux tapis. Le traitement atteint alors toute la surface.',
      'Une liste simple à suivre|Draps, housses de couette et taies à **60 °C**, peluches au lavage ou au congélateur, objets retirés du lit et du canapé : dix minutes de préparation rendent le traitement **bien plus complet**.',
      'Préparer les textiles|Le technicien vous laisse une **liste claire** : ce qui part en machine, ce qui reste en place pour être traité, et comment dégager les pièces pour qu’il puisse travailler partout.',
    ],
    [
      'La vapeur sèche, en profondeur|Une vapeur à **très haute température**, presque sans eau, est appliquée lentement sur le matelas, le sommier, les oreillers, le canapé et les tapis. La chaleur pénètre dans les fibres et tue les acariens **sans aucun produit**.',
      'La cryogénie pour les tissus fragiles|Pour les matières qui supportent mal la chaleur (tissus anciens, velours, certains canapés), le technicien projette de la **neige carbonique** très froide. Elle tue les acariens par le froid, **sans humidité ni produit**.',
      'La pulvérisation acaricide si besoin|Quand plusieurs pièces sont touchées ou que la population est très importante, un **acaricide professionnel** est appliqué par un technicien **Certibiocide**, sur les textiles d’ameublement et les zones de vie.',
      'La bonne méthode pour chaque textile|Matelas et tapis à la **vapeur sèche**, tissus fragiles en **cryogénie**, grandes surfaces à l’**acaricide** : le technicien combine les méthodes selon votre logement {a}.',
    ],
    [
      'Aération et retour dans la pièce|Avec la vapeur sèche ou la cryogénie, la pièce est **utilisable dès la fin du passage**, une fois les textiles secs. Après une pulvérisation acaricide, il faut compter **en moyenne 4 heures** avant de réoccuper la pièce, fenêtres ouvertes.',
      'Après le passage|Le matelas traité à la vapeur sèche **sèche vite** et peut être utilisé le soir même. Si un acaricide a été pulvérisé, vous aérez et attendez **en moyenne 4 heures** avant de revenir.',
      'Le retour à la normale|Vous refaites le lit avec du **linge propre lavé à 60 °C**. Si une housse anti-acariens intégrale est prévue, c’est le moment de la poser, avant les draps.',
    ],
    [
      'Les conseils qui font durer le résultat|Le technicien vous laisse un **plan simple** : taux d’humidité à viser, aération quotidienne, lavage du linge de lit, housses intégrales, entretien des tapis. C’est ce qui empêche les acariens de se réinstaller.',
      'Un suivi et une garantie|Vous repartez avec des **conseils adaptés à votre logement**, une **attestation** si vous êtes professionnel ou bailleur, et la **garantie d’un an** de nos traitements.',
      'Garder un logement sain|Les acariens vivent dans tous les logements : le but est de **réduire fortement leur nombre** et de le maintenir bas. Nos conseils, inspirés de ceux de l’Assurance maladie, vous y aident.',
    ],
  ],
  cycleTitre: (a) => `Comprendre les acariens ${a} : où ils vivent et pourquoi ils prolifèrent`,
  cycle: [
    [
      'Les acariens de la poussière sont de **minuscules animaux** de la famille des araignées, invisibles à l’œil nu. Ils vivent dans les textiles de la maison et se nourrissent des **petites peaux mortes** que nous perdons chaque jour, surtout dans le lit.',
      'Un acarien de la poussière ne mesure qu’une **fraction de millimètre** : on ne le voit jamais. Il vit dans la poussière des textiles et se nourrit de **squames**, les fines peaux mortes que nous laissons dans les draps, les oreillers et le canapé.',
      'Dans un logement {a}, comme partout, les acariens sont **présents dans chaque lit**. Ils ne piquent pas, ne sautent pas et ne se voient pas : ils vivent cachés au cœur des **matelas**, des **oreillers** et des **tapis**.',
    ],
    [
      'Ce ne sont pas les acariens eux-mêmes qui gênent les personnes allergiques, mais surtout les **allergènes** contenus dans leurs **déjections** et leurs débris. Ces particules s’accumulent dans les textiles et se remettent en suspension quand on fait le lit ou qu’on s’assoit sur le canapé.',
      'Le problème vient des **allergènes** que les acariens laissent derrière eux : déjections et fragments de corps morts. C’est pourquoi un traitement efficace tue les acariens **et** retire le plus possible ces particules des textiles.',
      'Même morts, les acariens laissent des **allergènes** dans les fibres. Le lavage à **60 °C**, l’aspiration avec un **filtre HEPA** et les housses intégrales servent justement à réduire ces particules.',
    ],
    [
      'Les acariens aiment la **chaleur** et surtout l’**humidité**. L’Assurance maladie conseille de garder un taux d’humidité **entre 40 et 60 %** et une température **entre 18 et 22 °C** : au-delà, ils se multiplient beaucoup plus vite.',
      'Leur meilleur allié est l’**humidité de l’air**. Une chambre peu aérée, du linge qui sèche à l’intérieur, une douche sans ventilation ou une infiltration suffisent à créer un terrain idéal, été comme hiver.',
      'Dans un logement bien chauffé {a} mais peu aéré, l’**humidité de la respiration**, de la cuisine et des douches reste piégée. C’est exactement ce que recherchent les acariens.',
    ],
    [
      'C’est pourquoi un traitement seul ne suffit pas toujours : si l’humidité reste élevée, la population se **reconstitue** en quelques semaines. Le traitement réduit fortement le nombre d’acariens, la prévention garde ce résultat.',
      'Le traitement professionnel fait **baisser brutalement** la population ; les gestes du quotidien (aération, lavage, housses) l’empêchent de remonter. Les deux vont ensemble.',
      'Un matelas traité puis protégé par une **housse intégrale**, dans une chambre aérée chaque jour, reste longtemps peu peuplé. Sans ces précautions, les acariens reviennent depuis le canapé, les tapis ou l’oreiller.',
    ],
  ],
  recidiveTitre: (a) => `Éviter le retour des acariens ${a} : nos conseils après le traitement`,
  recidiveIntro: [
    'Les acariens vivent dans tous les logements : on ne les élimine pas pour toujours, mais on peut **les garder à un niveau très bas**. Voici les gestes que nous conseillons après chaque intervention.',
    'Le résultat d’un traitement anti-acariens dépend surtout de **ce qui se passe ensuite**. Ces conseils, inspirés de ceux de l’Assurance maladie, font la différence.',
    'Après notre passage, quelques **habitudes simples** suffisent à empêcher les acariens de se réinstaller dans la literie et les textiles.',
  ],
  recidive: [
    '**Aérez chaque pièce au moins 10 minutes par jour**, même en hiver, de préférence le matin.',
    '**Visez une humidité entre 40 et 60 %** : un hygromètre, peu coûteux, permet de la surveiller dans la chambre.',
    '**Gardez la chambre autour de 18 à 20 °C** : une chambre surchauffée favorise les acariens.',
    '**Lavez draps, taies et housses de couette à 60 °C** chaque semaine si l’étiquette le permet.',
    '**Posez des housses anti-acariens intégrales** sur le matelas et l’oreiller, qui l’enveloppent sur toutes ses faces.',
    '**Aspirez avec un filtre HEPA** le matelas, le canapé et les tapis, régulièrement.',
    '**Ne faites pas sécher le linge dans les chambres** : l’humidité remonte aussitôt.',
    '**Limitez les peluches dans le lit** des enfants, et lavez-les à 60 °C ou passez-les au congélateur avant lavage.',
    '**Vérifiez que la VMC fonctionne** et nettoyez les bouches d’aération : ne les bouchez jamais.',
    '**Préférez les sols durs** aux moquettes dans les chambres quand c’est possible.',
    '**Laissez le lit ouvert** quelques minutes le matin avant de le refaire, pour que l’humidité de la nuit s’évapore.',
    '**Signalez à votre bailleur** toute infiltration, moisissure ou ventilation en panne : l’humidité vient parfois d’un défaut du logement.',
    '**Lavez ou faites traiter les rideaux** et les tentures épaisses, souvent oubliés.',
    '**Évitez que l’animal dorme sur le lit** si une personne allergique y dort.',
  ],
  faqPool: [
    { q: 'Acariens ou punaises de lit : comment faire la différence ?', a: 'Les acariens ne piquent pas : ils provoquent surtout des symptômes allergiques (nez qui coule, éternuements, yeux qui grattent). Les punaises de lit piquent et laissent des boutons en ligne, avec parfois des petites taches noires sur le matelas. Une photo nous aide à trancher.' },
    { q: 'Les acariens piquent-ils ?', a: 'Non. Les acariens de la poussière ne piquent pas et ne mordent pas. Si vous avez des boutons, pensez plutôt à des punaises de lit, des puces ou une autre cause, à vérifier avec un médecin.' },
    { q: 'Le traitement est-il possible avec un bébé ou une femme enceinte à la maison ?', a: 'Oui. La vapeur sèche et la cryogénie n’utilisent aucun produit. Si une pulvérisation acaricide est envisagée, le technicien vous explique les précautions et le temps d’aération, en moyenne 4 heures.' },
    { q: 'Combien de temps dure l’intervention ?', a: 'Selon le nombre de matelas, de canapés et de tapis, comptez en général une à deux heures pour un appartement. Le technicien vous donne une estimation au moment du devis.' },
    { q: 'Faut-il changer son matelas ?', a: 'Pas forcément. Un traitement en profondeur suivi d’une housse intégrale suffit souvent. Un matelas très ancien, affaissé ou abîmé peut en revanche mériter d’être remplacé.' },
    { q: 'Que faire des peluches de mon enfant ?', a: 'Lavez-les à 60 °C si possible. Sinon, placez-les au congélateur dans un sac, puis lavez-les pour retirer les acariens morts. Limitez leur nombre dans le lit.' },
    { q: 'Le congélateur tue-t-il les acariens ?', a: 'Oui, un passage au congélateur tue les acariens d’un petit textile, comme une peluche ou un oreiller de voyage. Il faut ensuite le laver pour retirer les allergènes.' },
    { q: 'Un purificateur d’air suffit-il ?', a: 'Il peut réduire les particules dans l’air, mais les acariens vivent dans les textiles, pas dans l’air. Il ne remplace pas le traitement de la literie ni les gestes contre l’humidité.' },
    { q: 'Les acariens sont-ils plus nombreux en automne ?', a: 'Souvent, oui : on chauffe plus, on aère moins, et l’humidité reste dans le logement. C’est une bonne période pour faire traiter la literie.' },
    { q: 'Traitez-vous les canapés en cuir ?', a: 'Le cuir lisse abrite peu d’acariens. Ce sont surtout les canapés en tissu qui sont concernés. Les coussins et plaids posés sur un canapé en cuir peuvent, eux, être traités.' },
    { q: 'Pouvez-vous traiter un logement meublé entre deux locataires ?', a: 'Oui. Nous traitons les matelas, canapés et rideaux entre deux occupants, et remettons une attestation au bailleur ou à la conciergerie.' },
    { q: 'Le traitement laisse-t-il une odeur ?', a: 'La vapeur sèche et la cryogénie ne laissent aucune odeur. Une pulvérisation acaricide peut laisser une légère odeur qui disparaît avec l’aération.' },
    { q: 'Les acariens peuvent-ils vivre dans la voiture ?', a: 'Oui, dans les sièges en tissu, mais en bien plus petit nombre que dans un lit. Une aspiration régulière avec filtre HEPA suffit en général.' },
    { q: 'Mon animal a-t-il des acariens de la poussière ?', a: 'Non, les acariens de la poussière vivent dans les textiles. Mais les squames de l’animal les nourrissent : lavez souvent son couchage et évitez qu’il dorme sur le lit d’une personne allergique.' },
    { q: 'Quelle différence entre acariens et gale ?', a: 'La gale est causée par un autre acarien, qui vit dans la peau et se transmet par contact. Elle se soigne avec un traitement médical prescrit par un médecin. Le traitement anti-acariens de la literie ne la soigne pas, même s’il aide à éviter la recontamination.' },
    { q: 'Faut-il traiter toute la maison ?', a: 'Les chambres d’abord, car on y passe le plus de temps. Le salon, les canapés et les tapis sont traités si la personne gênée y passe beaucoup de temps.' },
  ],
}
