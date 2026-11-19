// Sections longues des pages prix (7/7), 20/11/2026 : derniers compléments (objectif 3 000 mots de contenu).
import type { PagePrix } from './types'
type C = NonNullable<PagePrix['complements']>

export const COMPLEMENTS_G: Record<string, C> = {
  fourmis: [
    { titre: 'Pourquoi les fourmis reviennent après les produits du commerce', paras: [
      'Une colonie de fourmis fonctionne comme un organisme : les ouvrières que vous voyez ne sont qu’une petite partie de la population, chargée de chercher la nourriture. Quand on en tue une partie avec un spray, la colonie en envoie d’autres, et la reine continue de pondre. Certaines espèces réagissent même à une agression en se divisant en plusieurs nids, ce qui multiplie le problème.',
      'C’est la raison pour laquelle notre méthode repose sur un appât lent : les ouvrières le rapportent au nid et le partagent avec la reine et les larves. Le résultat n’est pas immédiat, mais il est durable.',
    ] },
  ],
  'guepes-frelons': [
    { titre: 'Intervention en copropriété ou dans un jardin partagé', paras: [
      'Dans une résidence, un nid dans un arbre du jardin commun, sous un balcon ou dans la toiture concerne plusieurs habitants. Le syndic peut nous appeler directement ; nous intervenons au même prix que pour un particulier, selon la hauteur et l’accès, et nous remettons une attestation.',
    ] },
  ],
  'chenilles-processionnaires': [
    { titre: 'Chenilles processionnaires et animaux : précautions au jardin', paras: [
      'Au moment de la procession, à la fin de l’hiver et au printemps, gardez les chiens en laisse près des pins et des chênes touchés, et évitez les promenades sous ces arbres. Surveillez les chats qui chassent au sol. Si votre animal bave, se frotte la gueule ou a la langue gonflée après une sortie, consultez un vétérinaire en urgence.',
      'Pour les chevaux et les animaux de basse-cour, éloignez-les des arbres touchés et ne laissez pas traîner au sol les branches portant des nids. Les poils peuvent rester urticants longtemps dans l’herbe et la litière.',
    ] },
  ],
  pigeons: [
    { titre: 'Pigeons sous les toits et dans les combles', paras: [
      'Dans les pavillons et les immeubles anciens, les pigeons peuvent entrer sous les tuiles, dans les combles ou dans les gaines de ventilation par une ouverture de quelques centimètres. Ils y nichent à l’abri, accumulent fientes et débris, et le bruit de leurs allées et venues s’entend depuis les chambres.',
      'La solution consiste à fermer les ouvertures avec un grillage adapté, après avoir vérifié qu’aucun oiseau ni aucun nid occupé ne reste à l’intérieur, puis à nettoyer et désinfecter les combles. Ce type d’intervention, en hauteur et parfois sur la toiture, est chiffré sur devis.',
    ] },
    { titre: 'Les règles à respecter avec les pigeons', paras: [
      'Le pigeon des villes n’est pas une espèce protégée comme les oiseaux sauvages, mais sa régulation est encadrée et relève des communes. Pour un particulier ou une copropriété, la bonne pratique est d’empêcher les pigeons de se poser et de nicher, sans les blesser. C’est exactement ce que font les pics, les filets et les fils.',
      'Dans de nombreuses villes, le règlement sanitaire ou un arrêté municipal interdit de nourrir les pigeons. Si un voisin le fait, c’est un sujet à porter auprès du syndic ou de la mairie.',
    ] },
  ],
  puces: [
    { titre: 'Puces : les erreurs les plus fréquentes', paras: [
      '**Traiter seulement l’animal** : les puces du logement le réinfestent. **Traiter seulement le logement** : l’animal ramène les puces. **Arrêter l’aspirateur trop tôt** : les derniers cocons n’éclosent pas et l’infestation repart. **Utiliser des bombes au hasard** : elles traitent la surface et laissent les larves dans les fentes.',
      '**Se tromper d’insecte** : des piqûres de punaises de lit, des démangeaisons dues aux acariens ou à des poils d’anthrène sont parfois prises pour des puces. Une photo ou une inspection évite de payer le mauvais traitement.',
    ] },
    { titre: 'Puces et locations meublées, hôtels, pensions', paras: [
      'Dans une location courte durée qui accepte les animaux, une pension pour chats ou chiens ou un hôtel, une infestation de puces peut gêner plusieurs clients successifs. Nous intervenons entre deux occupants, dans un délai court, et nous remettons une attestation au propriétaire ou à l’exploitant. Le prix dépend du nombre de pièces et est donné sur devis.',
    ] },
  ],
  acariens: [
    { titre: 'Acariens chez les professionnels de l’accueil', paras: [
      'Dans les hôtels, chambres d’hôtes et locations meublées, la literie sert à de nombreux clients et les matelas ne sont pas toujours protégés. Les clients allergiques le remarquent vite, et un avis négatif mentionnant « l’allergie » ou « la poussière » pèse sur la réputation.',
      'Un traitement périodique à la vapeur sèche, sans produit, s’intègre facilement dans le planning d’entretien. Nous pouvons traiter plusieurs chambres en une intervention, entre deux séjours. Le prix est donné sur devis selon le nombre de lits.',
    ] },
    { titre: 'Crèches, écoles, établissements de santé', paras: [
      'Dans les crèches et les écoles maternelles, les tapis de jeu, les coussins, les matelas de sieste et les peluches accumulent les acariens. La vapeur sèche permet de les traiter sans produit, hors présence des enfants, avec un séchage rapide. Pour les établissements de santé et les EHPAD, nous adaptons l’intervention aux contraintes d’hygiène du lieu.',
    ] },
  ],
  anthrenes: [
    { titre: 'Les dégâts des anthrènes : à quoi ressemblent-ils', paras: [
      'Les larves d’anthrène font des trous irréguliers dans les lainages, souvent aux endroits cachés : sous les bras, au col, dans les plis. Sur un tapis, elles rongent le velours au ras de la trame, laissant des zones pelées sous les meubles, là où l’on ne passe pas l’aspirateur. On trouve aussi des petites mues brunes et velues, et parfois de fines déjections.',
      'Sur une collection d’insectes ou un oiseau naturalisé, on voit de la poussière sous l’objet, signe que les larves s’en nourrissent. Ces dégâts ne se réparent pas : agir tôt est la meilleure façon de limiter les pertes.',
    ] },
    { titre: 'Les gestes à faire en attendant notre passage', paras: [
      'Isolez les vêtements et textiles touchés dans des sacs fermés. Passez l’aspirateur sous les meubles, le long des plinthes, sous les tapis et dans les placards, puis jetez le contenu dans un sac fermé, à l’extérieur. Ne pulvérisez pas de produit au hasard : vous risquez de tacher les textiles sans atteindre le foyer.',
      'Notez où vous avez vu des larves et des adultes : ces indications aident le technicien à remonter jusqu’à la source et à limiter le temps d’intervention.',
    ] },
  ],
  desinfection: [
    { titre: 'Désinfection après des punaises de lit, des cafards ou des puces', paras: [
      'Après un traitement contre les insectes, une désinfection n’est en général pas nécessaire : les produits utilisés contre les nuisibles et le nettoyage habituel suffisent. Nous vous le disons franchement, plutôt que de vous vendre une prestation inutile.',
      'La désinfection devient utile quand il y a eu contamination par des déjections en quantité (rongeurs, pigeons), par des liquides biologiques, ou par des moisissures après un dégât des eaux. Dans ces cas, elle protège la santé des occupants et rassure le bailleur ou l’assurance.',
    ] },
    { titre: 'Désinfection de caves, locaux poubelles et parties communes', paras: [
      'En copropriété, les caves, les locaux poubelles, les vide-ordures et les parkings peuvent être souillés par des rongeurs ou des pigeons. Une désinfection de ces parties communes, après une dératisation ou un dépigeonnage, limite les odeurs et les risques sanitaires. Nous intervenons à la demande du syndic ou du bailleur, avec un rapport et une attestation.',
      'Certaines dépenses de désinfection des parties communes peuvent ensuite être récupérées dans les charges locatives : le bailleur ou l’ADIL peuvent vous renseigner.',
    ] },
    { titre: 'Pourquoi nous ne donnons pas de prix au mètre carré', paras: [
      'Deux logements de même surface peuvent demander un travail très différent : l’un est simplement à désinfecter, l’autre est rempli d’objets, souillé, et demande des heures de débarras et de nettoyage. Un prix au mètre carré serait trompeur dans un sens ou dans l’autre.',
      'C’est pourquoi nous affichons un prix de départ clair, **dès 150 €** pour un studio, et un devis gratuit et détaillé pour le reste, après photos ou visite. Vous savez ce que vous payez, poste par poste, avant le début de l’intervention.',
    ] },
  ],
}
