// Liens croisés des pages prix (20/11/2026, « plein de liens partout ») : nuisibles proches, services liés.
import type { PagePrix } from './types'
type C = NonNullable<PagePrix['complements']>

export const COMPLEMENTS_I: Record<string, C> = {
  'chenilles-processionnaires': [
    { titre: 'Les autres interventions au jardin', paras: [
      'Les jardins qui accueillent des chenilles processionnaires reçoivent aussi d’autres visiteurs : [nids de guêpes et de frelons](/tarifs/guepes-frelons) dans les haies et les arbres en été, [rats](/tarifs/deratisation) attirés par le compost ou les graines, [fourmis](/tarifs/fourmis) sous les dalles de terrasse. Nous pouvons traiter plusieurs problèmes lors d’un même passage. Voir aussi [nos traitements sans produit chimique](/services/traitements-sans-produit-chimique).',
    ] },
  ],
  pigeons: [
    { titre: 'Les problèmes qui accompagnent souvent les pigeons', paras: [
      'Un balcon ou un grenier occupé par des pigeons attire d’autres nuisibles. Les graines et les restes de nourriture attirent les [rats et les souris](/tarifs/deratisation). Les nids abandonnés abritent des [anthrènes](/tarifs/anthrenes), dont les larves gagnent ensuite les tapis et les lainages. Les fientes accumulées demandent parfois une [désinfection](/tarifs/desinfection). Pour un bâtiment public, voir notre page [mairies et collectivités](/mairies-collectivites) ; pour un immeuble, [professionnels et syndics](/professionnels).',
    ] },
  ],
  puces: [
    { titre: 'Puces, punaises, acariens : ne pas se tromper de traitement', paras: [
      'Des piqûres groupées aux chevilles font penser aux puces. Des piqûres en ligne au réveil font plutôt penser aux [punaises de lit](/tarifs/punaises-de-lit), dont le traitement coûte dès 290 €. Des démangeaisons sans piqûres visibles peuvent venir des [acariens](/tarifs/acariens) ou des poils de larves d’[anthrènes](/tarifs/anthrenes). En cas de doute, [identifiez l’insecte en photo](/identifier-nuisible) ou envoyez-nous une photo sur WhatsApp.',
    ] },
  ],
  acariens: [
    { titre: 'Acariens, punaises de lit, puces : ne pas se tromper de traitement', paras: [
      'Les acariens ne piquent pas. Si vous avez des boutons au réveil, pensez aux [punaises de lit](/tarifs/punaises-de-lit) ; si vos chevilles sont piquées, aux [puces](/tarifs/puces) ; si vos lainages sont troués, aux [anthrènes](/tarifs/anthrenes). Pour un traitement de la literie sans aucun produit, voir aussi [la cryogénie](/services/cryogenie-punaises-de-lit) et [nos traitements sans produit chimique](/services/traitements-sans-produit-chimique). Dans le doute, [identifiez l’insecte en photo](/identifier-nuisible), ou envoyez-nous directement une photo sur WhatsApp : nous vous répondons en quelques minutes, gratuitement, avant tout déplacement.',
    ] },
  ],
  anthrenes: [
    { titre: 'Anthrènes et autres nuisibles liés', paras: [
      'Les anthrènes viennent souvent d’un nid d’oiseau : si des pigeons nichent sur votre balcon ou sous le toit, voir [le prix d’un dépigeonnage](/tarifs/pigeons). Si vous avez des boutons, il peut s’agir de [punaises de lit](/tarifs/punaises-de-lit) ou de [puces](/tarifs/puces) ; si vos placards de cuisine sont envahis de petits papillons, de [mites alimentaires](/blog/mites-alimentaires-cuisine). Pour la literie, voir aussi [les acariens](/tarifs/acariens). Une photo envoyée sur WhatsApp nous permet de vous dire gratuitement de quel insecte il s’agit, avant tout déplacement.',
    ] },
  ],
  desinfection: [
    { titre: 'Désinfection et traitements associés', paras: [
      'Une désinfection suit souvent un autre traitement : une [dératisation](/tarifs/deratisation) dans une cave ou un logement très encombré, un [dépigeonnage](/tarifs/pigeons) quand un balcon ou un grenier est couvert de fientes, un traitement contre les [cafards](/tarifs/cafards) dans une cuisine professionnelle. Pour les bailleurs, syndics et communes, voir [mairies et collectivités](/mairies-collectivites) et [professionnels](/professionnels). Le récit de notre chantier à Maisons-Alfort montre [toutes les étapes, de la dératisation à la désinfection](/blog/deratisation-logement-syndrome-diogene).',
    ] },
  ],
}
