// Textes locaux écrits à la main pour les 15 villes du pôle « autour de Saint-Maurice » (18/11/2026, étape 2 demandée
// par l'utilisateur) : souris, cafards, fourmis, puces, acariens, nids de frelons. Même principe que lib/local-pole.ts
// (punaises, dératisation) : données réelles (lib/donnees-locales.ts : Insee, OpenStreetMap, SRU), repères de chaque ville,
// faits confirmés par l'entreprise (prix, fourmis sous 48 h, frelons sous 1 h, perche 23 m, garanties) et vrais chantiers.
// Pas de chiffre inventé, pas de tiret long. Clé : chemin de la famille (VilleServicePage, c.basePath).

const SOURIS: Record<string, string[]> = {
  'saint-maurice': [
    '### Souris à Saint-Maurice : notre propre ville',
    'Notre base est à Saint-Maurice : pour des souris au **Plateau**, près du **Pont** ou vers **Écluse-Gravelle**, nous passons souvent le jour même. Avec plus de 10 000 habitants au km², la ville est dense : en immeuble, les souris circulent par les gaines, les faux plafonds et les caves d’un logement à l’autre.',
    'Le long du **canal de Saint-Maur** et du **bras de Gravelle**, les maisons et rez-de-chaussée reçoivent plutôt des souris qui viennent des berges et des jardins à l’automne. Nous repérons les passages, posons les pièges et rebouchons les entrées : c’est ce rebouchage qui évite qu’elles reviennent.',
  ],
  'maisons-alfort': [
    '### Souris à Maisons-Alfort, de Charentonneau au Vert de Maisons',
    'À moins de 2 km de notre base, Maisons-Alfort est une ville où nous intervenons très souvent. Dans les pavillons de **Charentonneau** et des **Planètes**, les souris entrent par les soupiraux, les garages et les bas de portes. Dans les immeubles du **centre** et d’**Alfort**, elles suivent les gaines techniques.',
    'Les commerces de bouche autour du **marché de Charentonneau** et du **marché du Centre** attirent aussi les rongeurs : un local bien fermé et des réserves en hauteur limitent le risque. Pour un restaurant ou une boulangerie, voir notre page [professionnels](/professionnels).',
  ],
  'joinville-le-pont': [
    '### Souris à Joinville-le-Pont, entre Marne et canaux',
    'Entre la **Marne**, le **canal de Polangis** et le **canal de Saint-Maur**, Joinville-le-Pont a beaucoup de maisons au bord de l’eau. À l’automne, les souris quittent les berges et les jardins pour les sous-sols, les garages et les cuisines.',
    'Dans les quartiers **Oudinot**, **Polangis** ou des **Platanes**, nous cherchons d’abord les ouvertures de moins d’un centimètre (passages de câbles, bouches d’aération, bas de portes), puis nous posons les pièges. Notre base est à 1,9 km : le passage est rapide.',
  ],
  'paris-12': [
    '### Souris dans le 12e : de Bercy à Picpus',
    'Le 12e compte plus de 138 000 habitants (Insee) et beaucoup d’immeubles anciens. Les souris y circulent par les caves, les vide-ordures et les colonnes techniques, de **Bercy** à **Picpus**, de **Bel-Air** aux **Quinze-Vingts**.',
    'Les marchés **Daumesnil** et **Ledru-Rollin**, les commerces de bouche et la proximité du **Bois de Vincennes** expliquent qu’on nous appelle souvent à l’automne. En copropriété, un traitement coordonné des parties communes avec le syndic évite que les souris passent d’un appartement à l’autre.',
  ],
  alfortville: [
    '### Souris à Alfortville : une ville dense entre deux fleuves',
    'Avec plus de 12 000 habitants au km², Alfortville est très dense. Dans les immeubles de **Zola Carnot**, **Diderot Louis Blanc** ou **Jardin Val de Seine**, les souris passent par les gaines, les caves et les locaux poubelles.',
    'Au bord de la **Seine** et de la **darse**, les pavillons et rez-de-chaussée reçoivent davantage de souris venues de l’extérieur à l’arrivée du froid. Nous traitons, puis rebouchons les passages : sans cela, d’autres souris prennent la place.',
  ],
  'charenton-le-pont': [
    '### Souris à Charenton-le-Pont, aux portes de Paris',
    'Charenton-le-Pont est l’une des villes les plus denses du Val-de-Marne (plus de 15 000 habitants au km²). Dans les immeubles anciens de **Valmy**, des **Carrières** ou du **Plateau**, les souris circulent entre les étages par les gaines et les doublages.',
    'Les logements proches du **Bois de Vincennes** et de la **Seine** voient arriver les souris à l’automne. Le **parc de Conflans** et les squares sont aussi des zones de passage. Notre base est à 2,8 km : nous venons vite pour poser les pièges et reboucher les entrées.',
  ],
  'saint-mande': [
    '### Souris à Saint-Mandé, en lisière du Bois',
    'Saint-Mandé est la ville la plus dense de notre secteur après Vincennes (plus de 23 000 habitants au km²). Dans les immeubles de **Daumesnil**, **Saint-Louis** ou **Charles de Gaulle**, les souris se déplacent par les caves et les colonnes techniques.',
    'La lisière du **Bois de Vincennes** est une réserve naturelle de rongeurs : les logements en rez-de-chaussée côté **La Pelouse** sont les plus exposés à l’automne. Le **marché de la Tourelle** et les commerces de bouche demandent aussi une attention particulière.',
  ],
  vincennes: [
    '### Souris à Vincennes : immeubles anciens et Bois tout proche',
    'Vincennes est la ville la plus dense de notre secteur (plus de 25 000 habitants au km²). Les immeubles anciens du **Centre Nord** et du **Centre Sud** ont des caves et des planchers où les souris circulent discrètement d’un logement à l’autre.',
    'Le **Bois de Vincennes** et les marchés de la **place Carnot** et de la **rue de Fontenay** attirent les rongeurs. Nous intervenons souvent en copropriété : traitement des caves et des parties communes avec le syndic, puis des logements touchés.',
  ],
  'nogent-sur-marne': [
    '### Souris à Nogent-sur-Marne, des Hauts de Nogent aux bords de Marne',
    'À Nogent-sur-Marne, les maisons des **Hauts de Nogent** et des **Maréchaux** ont souvent sous-sol et jardin : les souris y entrent par les soupiraux et les garages dès les premiers froids. Les immeubles du **boulevard de Strasbourg** et de la **place Leclerc** connaissent plutôt des passages par les caves.',
    'Près de la **Marne** et du **parc Watteau**, les rongeurs trouvent abri et nourriture. Nous posons les pièges et rebouchons les entrées, à 3,5 km de notre base.',
  ],
  creteil: [
    '### Souris à Créteil : grands ensembles et pavillons',
    'Créteil compte plus de 93 000 habitants (Insee). Dans les grands ensembles du **Palais**, de **La Habette** ou du **Montaigut**, les souris passent par les gaines, les vide-ordures et les caves. Dans les pavillons du **Vieux Créteil**, ce sont plutôt les sous-sols et les garages.',
    'Le **lac de Créteil**, l’**île de loisirs** et les bras de la **Marne** sont des zones où les rongeurs abondent. Nous intervenons en appartement comme en maison, et en coordination avec les bailleurs pour les résidences.',
  ],
  'ivry-sur-seine': [
    '### Souris à Ivry-sur-Seine, d’Ivry-Port au Fort',
    'Ivry-sur-Seine mêle grands ensembles, immeubles anciens et anciens entrepôts transformés en logements. Les souris y circulent par les caves et les gaines, de **Gagarine** au **Petit Ivry**, de **Monmousseau** au quartier du **Fort**.',
    'Le long de la **Seine**, les chantiers et les locaux d’activité déplacent souvent les rongeurs vers les logements voisins. Nous repérons les passages, posons les pièges et rebouchons, à 4,1 km de notre base.',
  ],
  'saint-maur-des-fosses': [
    '### Souris à Saint-Maur-des-Fossés : maisons, jardins et locations',
    'Saint-Maur-des-Fossés compte beaucoup de maisons avec jardin, à **La Varenne**, au **Parc**, à **Adamville** ou au **Vieux Saint-Maur**. À l’automne, les souris quittent les bords de **Marne** et les jardins pour les sous-sols, les vérandas et les cuisines.',
    'Nous y sommes intervenus dans un logement loué en courte durée, avec une souris photographiée sur le carrelage : voir [souris dans un Airbnb à Saint-Maur](/blog/souris-airbnb-saint-maur-des-fosses). Pour un loueur, une intervention rapide entre deux voyageurs évite les mauvais commentaires.',
  ],
  'fontenay-sous-bois': [
    '### Souris à Fontenay-sous-Bois, du Village à Val de Fontenay',
    'À Fontenay-sous-Bois, les pavillons du **Village**, des **Larris** et du **Bois Cadet** reçoivent les souris par les garages et les soupiraux. Les immeubles autour de **Val de Fontenay** connaissent plutôt des passages par les gaines et les caves.',
    'La proximité du **Bois de Vincennes** et de l’**Écoparc des Carrières** fournit abri et nourriture aux rongeurs. Nous intervenons à 4,3 km de notre base, avec pièges et rebouchage des entrées.',
  ],
  'vitry-sur-seine': [
    '### Souris à Vitry-sur-Seine, des Ardoines au Coteau',
    'Vitry-sur-Seine compte près de 94 000 habitants (Insee), dans des grands ensembles comme dans des quartiers pavillonnaires. Les souris passent par les caves et les vide-ordures dans les résidences de **Rabelais** ou de la **Petite Saussaie**, par les garages dans les maisons de **Dalou** ou de la **Ferme Sud**.',
    'Le long de la **Seine** et autour des chantiers des **Ardoines**, les travaux déplacent les rongeurs vers les habitations. Nous traitons et rebouchons, en lien avec les bailleurs pour les parties communes.',
  ],
  villejuif: [
    '### Souris à Villejuif, des Hautes Bruyères au Lion d’Or',
    'À Villejuif, les nombreux chantiers liés aux nouvelles gares (**Louis Aragon**, **Gustave Roussy**) dérangent les rongeurs, qui cherchent alors refuge dans les immeubles et les maisons voisines.',
    'Dans les pavillons des **Esselières** ou des **Guipons**, ce sont les sous-sols et les garages ; dans les résidences de **République** ou du **Lion d’Or**, les caves et les gaines. Le **parc des Hautes Bruyères** est aussi une zone de passage.',
  ],
}

const CAFARDS: Record<string, string[]> = {
  'saint-maurice': [
    '### Cafards à Saint-Maurice : résidences et commerces',
    'À Saint-Maurice, plus d’un logement sur quatre est un logement social (inventaire SRU) : dans les résidences du **Plateau**, les blattes passent par les gaines, les colonnes d’eau et les vide-ordures. Traiter un seul appartement ne suffit pas toujours ; une action coordonnée avec le bailleur est plus efficace.',
    'Nous sommes basés ici : pour des cafards dans une cuisine, autour du **marché Émile Bertrand** ou dans un commerce de bouche, nous passons rapidement. Gel appât professionnel dans les recoins, deux passages, garantie 1 an.',
  ],
  'maisons-alfort': [
    '### Cafards à Maisons-Alfort, en appartement et en commerce',
    'À Maisons-Alfort, les blattes se rencontrent surtout dans les immeubles du **centre**, d’**Alfort** et des **Planètes** : cuisines, salles de bain, locaux poubelles. Elles circulent par les gaines techniques d’un étage à l’autre.',
    'Les restaurants et commerces autour des marchés du **Centre** et de **Charentonneau** sont aussi concernés. Pour un professionnel, nous intervenons en dehors des heures d’ouverture et laissons une attestation. Voir [nos interventions pour les professionnels](/professionnels).',
  ],
  'joinville-le-pont': [
    '### Cafards à Joinville-le-Pont',
    'À Joinville-le-Pont, les blattes s’installent surtout dans les résidences des quartiers **Péri** et **Môquet** et dans les cuisines des restaurants des bords de **Marne**. Chaleur, humidité et nourriture : c’est tout ce qu’il leur faut.',
    'Dans les maisons de **Polangis**, elles arrivent souvent avec des cartons ou des appareils d’occasion. Nous traitons au gel appât et à la vapeur sèche dans les recoins, en deux passages, à 1,9 km de notre base.',
  ],
  'paris-12': [
    '### Cafards dans le 12e arrondissement',
    'Dans les immeubles anciens du 12e, de **Bercy** à **Picpus**, les blattes circulent par les colonnes d’eau et les vide-ordures. Les restaurants, les commerces autour des marchés **Daumesnil** et **Ledru-Rollin**, et les cuisines d’appartements anciens sont les plus touchés.',
    'En copropriété, un traitement des parties communes avec le syndic, puis des logements touchés, donne de bien meilleurs résultats qu’un traitement isolé. Nous sommes à 2,6 km, de l’autre côté du Bois de Vincennes.',
  ],
  alfortville: [
    '### Cafards à Alfortville : la densité joue contre vous',
    'Très dense, Alfortville compte beaucoup d’immeubles où les blattes passent d’un logement à l’autre par les gaines et les colonnes d’eau, notamment à **Zola Carnot**, **Marché Guesde** ou **Diderot Louis Blanc**.',
    'Nous traitons au gel appât professionnel, en deux passages, et vous conseillons sur les gestes qui comptent : ne rien laisser traîner la nuit, réparer les fuites, vider les cartons dehors. Notre base est à 2,8 km.',
  ],
  'charenton-le-pont': [
    '### Cafards à Charenton-le-Pont, immeubles anciens et Bercy',
    'À Charenton-le-Pont, les immeubles anciens de **Valmy** et des **Carrières** offrent aux blattes des colonnes d’eau et des gaines où elles se déplacent librement. Les commerces et restaurants autour de **Bercy-Charenton** sont aussi souvent concernés.',
    'Un traitement réussi passe par les recoins chauds et humides : arrière du réfrigérateur, sous l’évier, moteurs d’appareils. Nous intervenons à 2,8 km de notre base, en deux passages.',
  ],
  'saint-mande': [
    '### Cafards à Saint-Mandé',
    'À Saint-Mandé, très dense, les blattes s’installent dans les cuisines des immeubles de **Daumesnil**, **Saint-Michel** ou **Saint-Louis**, et passent d’un étage à l’autre par les gaines.',
    'Les commerces de bouche autour du **marché de la Tourelle** sont aussi exposés. Nous traitons au gel appât dans les recoins, deux passages, et nous coordonnons avec le syndic quand plusieurs logements sont touchés.',
  ],
  vincennes: [
    '### Cafards à Vincennes : copropriétés et restaurants',
    'Vincennes est la ville la plus dense de notre secteur. Dans les copropriétés anciennes du **Centre Nord** et du **Centre Sud**, les blattes circulent par les colonnes d’eau et les vide-ordures.',
    'Les restaurants et commerces autour de la **place Carnot** et de la **rue de Fontenay** nous appellent aussi régulièrement. Intervention discrète, en dehors des heures d’ouverture pour les professionnels, à 3,3 km de notre base.',
  ],
  'nogent-sur-marne': [
    '### Cafards à Nogent-sur-Marne',
    'À Nogent-sur-Marne, les blattes se rencontrent surtout dans les immeubles de la **Sous-Préfecture**, du **boulevard de Strasbourg** et de la **place Leclerc**, autour du **marché Leclerc** et dans les restaurants des bords de **Marne**.',
    'Dans les maisons des **Hauts de Nogent**, elles arrivent souvent avec des cartons ou un appareil d’occasion. Gel appât, vapeur sèche dans les recoins, deux passages, garantie 1 an.',
  ],
  creteil: [
    '### Cafards à Créteil : grands ensembles et centre commercial',
    'Dans les grands ensembles de Créteil (**Palais**, **La Habette**, **Montaigut**), les blattes passent d’un logement à l’autre par les gaines et les vide-ordures. Un traitement coordonné avec le bailleur évite qu’elles reviennent depuis l’appartement voisin.',
    'Les restaurants et commerces, nombreux autour de **Créteil Soleil** et de l’**université**, demandent un suivi régulier. Nous intervenons à 3,8 km de notre base.',
  ],
  'ivry-sur-seine': [
    '### Cafards à Ivry-sur-Seine',
    'À Ivry-sur-Seine, les blattes s’installent dans les résidences de **Gagarine**, du **Petit Ivry** ou de **Monmousseau**, et dans les cuisines des restaurants et entreprises d’**Ivry-Port**.',
    'Nous traitons au gel appât dans les recoins chauds (moteurs, arrière des appareils, sous les éviers), en deux passages. Pour une résidence, nous travaillons avec le bailleur pour traiter les parties communes.',
  ],
  'saint-maur-des-fosses': [
    '### Cafards à Saint-Maur-des-Fossés',
    'À Saint-Maur-des-Fossés, ville de maisons, les blattes arrivent souvent avec des cartons de déménagement, des courses ou des appareils d’occasion, puis s’installent près des sources de chaleur et d’humidité.',
    'Les restaurants et commerces d’**Adamville**, de **La Varenne** et du **Vieux Saint-Maur**, autour des marchés **Diderot** et d’**Adamville**, nous appellent aussi. Gel appât, deux passages, garantie 1 an.',
  ],
  'fontenay-sous-bois': [
    '### Cafards à Fontenay-sous-Bois',
    'À Fontenay-sous-Bois, les blattes se rencontrent surtout dans les résidences de **Val de Fontenay** et des **Larris**, où elles circulent par les gaines, et dans les cuisines des commerces autour du **marché Moreau David**.',
    'Dans les pavillons du **Village**, une infestation reste souvent limitée à la cuisine si elle est traitée tôt. Nous intervenons à 4,3 km de notre base.',
  ],
  'vitry-sur-seine': [
    '### Cafards à Vitry-sur-Seine',
    'Vitry-sur-Seine compte beaucoup de grands ensembles, où les blattes passent d’un logement à l’autre par les colonnes d’eau et les vide-ordures, à **Rabelais**, à la **Petite Saussaie** ou à **Auber**.',
    'Un traitement coordonné avec le bailleur, parties communes comprises, donne les meilleurs résultats. Nous traitons au gel appât et à la vapeur sèche, en deux passages.',
  ],
}

const FOURMIS: Record<string, string[]> = {
  'saint-maurice': [
    '### Fourmis à Saint-Maurice',
    'Au printemps, les fourmis noires des jardins remontent des bords de **Marne** et du **canal de Saint-Maur** vers les maisons et les rez-de-chaussée de Saint-Maurice. Elles suivent des pistes le long des plinthes jusqu’au sucre de la cuisine.',
    'Nous sommes basés ici : nous posons un gel appât sur les pistes, que les ouvrières rapportent à la reine. Le résultat se voit en général sous 48 heures. Dès 120 €, garantie 1 an.',
  ],
  'maisons-alfort': [
    '### Fourmis à Maisons-Alfort',
    'Dans les pavillons de **Charentonneau** et du **Vert de Maisons**, les fourmis nichent sous les dalles des terrasses et au pied des murs, puis entrent dans la cuisine au printemps et en été.',
    'En immeuble, la fourmi pharaon peut s’installer dans les logements chauffés : minuscule et jaune ambré, elle demande un traitement différent. Le **parc du Château Gaillard** et le **parc de l’Alsacienne** sont des réservoirs naturels de fourmis noires.',
  ],
  'joinville-le-pont': [
    '### Fourmis à Joinville-le-Pont',
    'À Joinville-le-Pont, les jardins des bords de **Marne** et des canaux accueillent de nombreuses colonies de fourmis noires. Au printemps, elles entrent par les seuils et les fissures des maisons de **Polangis** et d’**Oudinot**.',
    'Gel appât sur les pistes, rapporté à la reine : c’est la colonie entière qui est touchée. Résultat en général sous 48 heures.',
  ],
  'paris-12': [
    '### Fourmis dans le 12e',
    'Dans le 12e, les fourmis viennent souvent des espaces verts (**Bois de Vincennes**, **Parc Floral**, **parc de Bercy**, **Coulée verte**) et des cours intérieures. Elles remontent par les façades et les gaines jusqu’aux cuisines.',
    'En immeuble ancien, la fourmi pharaon, minuscule et jaune, peut aussi coloniser plusieurs appartements. Nous identifions l’espèce avant de traiter : voir [les espèces de fourmis](/fourmis).',
  ],
  alfortville: [
    '### Fourmis à Alfortville',
    'À Alfortville, les fourmis noires nichent dans les squares et le long des berges de la **Seine**, puis entrent dans les rez-de-chaussée et les pavillons au printemps.',
    'Dans les immeubles, elles suivent les canalisations et les gaines. Nous traitons au gel appât sur les pistes, rapporté à la reine. Résultat en général sous 48 heures, dès 120 €.',
  ],
  'charenton-le-pont': [
    '### Fourmis à Charenton-le-Pont',
    'À Charenton-le-Pont, les fourmis viennent souvent du **Bois de Vincennes** voisin et du **parc de Conflans**. Les logements des **franges du Bois** et des rez-de-chaussée sont les plus exposés.',
    'Nous identifions l’espèce (fourmi noire des jardins, fourmi pharaon) puis posons un gel appât adapté. Le résultat se voit en général sous 48 heures.',
  ],
  'saint-mande': [
    '### Fourmis à Saint-Mandé',
    'En lisière du **Bois de Vincennes**, Saint-Mandé voit arriver les fourmis au printemps, surtout dans les rez-de-chaussée et les logements avec balcon fleuri.',
    'Dans les immeubles anciens, elles empruntent les gaines et les fissures. Gel appât sur les pistes, rapporté à la reine : c’est la colonie entière qui est touchée.',
  ],
  vincennes: [
    '### Fourmis à Vincennes',
    'À Vincennes, les fourmis viennent du **Bois** et des jardins (**Cœur de Ville**, **jardin du Couchant**, **jardin du Midi**). Elles entrent par les façades, les balcons et les fenêtres des étages bas.',
    'Dans les immeubles anciens et chauffés, la fourmi pharaon peut s’installer durablement. Nous identifions l’espèce, puis traitons au gel appât. Résultat en général sous 48 heures.',
  ],
  'nogent-sur-marne': [
    '### Fourmis à Nogent-sur-Marne',
    'À Nogent-sur-Marne, les maisons avec jardin des **Hauts de Nogent** et des **Maréchaux** sont les plus touchées : les fourmis nichent sous les dalles et au pied des murs, puis entrent dans la cuisine.',
    'Le **parc Watteau**, le **parc des Artistes** et les bords de **Marne** sont des réservoirs naturels. Gel appât, dès 120 €, garantie 1 an.',
  ],
  creteil: [
    '### Fourmis à Créteil',
    'À Créteil, autour du **lac**, de l’**île de loisirs** et des parcs **Dupeyroux** et de **la Brèche**, les colonies de fourmis sont nombreuses. Elles entrent dans les pavillons du **Vieux Créteil** et dans les rez-de-chaussée des résidences.',
    'Nous posons un gel appât sur les pistes, que les ouvrières rapportent à la reine. Résultat en général sous 48 heures.',
  ],
  'ivry-sur-seine': [
    '### Fourmis à Ivry-sur-Seine',
    'À Ivry-sur-Seine, les fourmis viennent des espaces verts (**parc des Cormailles**, **promenade des Petits Bois**, **promenade du Fort**) et des berges de la **Seine**.',
    'Dans les résidences, elles suivent les canalisations jusqu’aux cuisines et salles de bain. Gel appât adapté à l’espèce, résultat en général sous 48 heures.',
  ],
  'saint-maur-des-fosses': [
    '### Fourmis à Saint-Maur-des-Fossés',
    'Ville de jardins, Saint-Maur-des-Fossés est très exposée aux fourmis au printemps et en été, à **La Varenne**, au **Parc**, à **Adamville** comme au **Vieux Saint-Maur**. Elles nichent sous les terrasses et les allées, puis entrent dans les cuisines.',
    'Nous traitons au gel appât sur les pistes et, si besoin, au pied des murs. Résultat en général sous 48 heures, dès 120 €, garantie 1 an.',
  ],
  'fontenay-sous-bois': [
    '### Fourmis à Fontenay-sous-Bois',
    'À Fontenay-sous-Bois, les pavillons du **Village**, des **Larris** et du **Bois Cadet** sont exposés aux fourmis qui viennent des jardins, du **Bois de Vincennes** et de l’**Écoparc des Carrières**.',
    'Gel appât sur les pistes, rapporté à la reine : c’est la colonie entière qui est touchée. Résultat en général sous 48 heures.',
  ],
  'vitry-sur-seine': [
    '### Fourmis à Vitry-sur-Seine',
    'À Vitry-sur-Seine, les fourmis viennent des grands parcs (**parc des Lilas**, **parc Joliot Curie**, **parc du Coteau**) et des jardins des quartiers pavillonnaires.',
    'Dans les résidences, elles suivent les canalisations jusqu’aux cuisines. Nous identifions l’espèce, puis posons un gel appât. Résultat en général sous 48 heures.',
  ],
  villejuif: [
    '### Fourmis à Villejuif',
    'À Villejuif, le **parc des Hautes Bruyères**, le **parc du 8 mai 1945** et le **parc des Lilas** abritent de nombreuses colonies. Les fourmis entrent ensuite dans les pavillons et les rez-de-chaussée.',
    'Gel appât sur les pistes, adapté à l’espèce. Résultat en général sous 48 heures, dès 120 €.',
  ],
}

const PUCES: Record<string, string[]> = {
  'saint-maurice': [
    '### Puces à Saint-Maurice',
    'Saint-Maurice est notre base : pour des puces dans un appartement du **Plateau** ou une maison des bords de **Marne**, nous intervenons rapidement. En maison, elles viennent souvent du jardin (hérissons, chats errants) ; en appartement, d’un animal ou d’un ancien occupant.',
    'Le traitement réussit quand l’animal (chez le vétérinaire) et le logement (chez nous) sont traités en même temps. Dès 120 €, second passage si besoin pour les puces qui sortent des cocons. Voir [le cycle de vie de la puce](/blog/cycle-de-vie-puce).',
  ],
  'maisons-alfort': [
    '### Puces à Maisons-Alfort',
    'À Maisons-Alfort, les pavillons avec jardin de **Charentonneau** et des **Planètes** sont exposés aux puces apportées par les chats et les hérissons. En appartement, les cocons laissés par un ancien occupant avec un animal peuvent éclore à l’emménagement.',
    'Nous traitons tout le logement, en insistant sur les fentes du parquet, les plinthes et le couchage de l’animal. Dès 120 €, garantie 1 an.',
  ],
  'joinville-le-pont': [
    '### Puces à Joinville-le-Pont',
    'À Joinville-le-Pont, les maisons avec jardin au bord de la **Marne** reçoivent souvent des puces apportées par la faune des berges et les chats du quartier.',
    'Les œufs tombent là où l’animal se couche : panier, canapé, tapis. Nous traitons ces zones en priorité, en lien avec le traitement de l’animal par votre vétérinaire.',
  ],
  'paris-12': [
    '### Puces dans le 12e',
    'Dans le 12e, beaucoup d’appartements anciens ont des parquets à larges fentes : un endroit idéal pour les larves et les cocons de puces. Un chat, un chien ou un ancien occupant avec un animal suffit à lancer une infestation.',
    'Au retour de vacances, des dizaines de puces qui sautent sur les jambes : ce sont des adultes qui attendaient dans leurs cocons. Nous traitons tout le logement, avec un second passage si besoin.',
  ],
  alfortville: [
    '### Puces à Alfortville',
    'À Alfortville, ville dense, les puces se transmettent souvent par les animaux qui circulent dans les parties communes, ou restent dans un logement après le départ d’un occupant avec un animal.',
    'Nous traitons sols, textiles et couchage de l’animal, en lien avec votre vétérinaire. Dès 120 €, garantie 1 an.',
  ],
  'charenton-le-pont': [
    '### Puces à Charenton-le-Pont',
    'À Charenton-le-Pont, les appartements anciens avec parquet et moquette gardent facilement œufs, larves et cocons. Les promenades au **Bois de Vincennes** voisin sont aussi l’occasion pour un chien de ramener des puces.',
    'Nous traitons tout le logement et vous conseillons pour la suite : aspirateur tous les jours pendant quelques semaines, lavage à 60 °C du couchage.',
  ],
  'saint-mande': [
    '### Puces à Saint-Mandé',
    'À Saint-Mandé, les chiens qui se promènent au **Bois de Vincennes** ramènent parfois des puces dans les appartements, où elles se cachent dans les parquets, les tapis et les canapés.',
    'Le traitement du logement se fait en même temps que celui de l’animal chez le vétérinaire. Dès 120 €, second passage si besoin.',
  ],
  vincennes: [
    '### Puces à Vincennes',
    'À Vincennes, ville très dense, les appartements anciens aux parquets profonds gardent les cocons de puces des semaines. Les promenades au **Bois** sont l’occasion pour un chien de les ramener.',
    'Nous traitons sols, fentes, plinthes et textiles, en lien avec votre vétérinaire, à 3,3 km de notre base.',
  ],
  'nogent-sur-marne': [
    '### Puces à Nogent-sur-Marne',
    'À Nogent-sur-Marne, les maisons avec jardin des **Hauts de Nogent** reçoivent souvent des puces apportées par les hérissons, les chats du voisinage ou la faune des bords de **Marne**.',
    'Le panier, le canapé et la voiture de l’animal concentrent œufs et larves : nous les traitons en priorité. Dès 120 €, garantie 1 an.',
  ],
  creteil: [
    '### Puces à Créteil',
    'À Créteil, nous traitons les puces en appartement comme en maison. Dans les résidences, un logement repris après un occupant avec animal peut cacher des cocons prêts à éclore.',
    'Les pavillons du **Vieux Créteil** et des bords de **Marne** reçoivent plutôt des puces venues du jardin. Traitement de tout le logement, second passage si besoin.',
  ],
  'ivry-sur-seine': [
    '### Puces à Ivry-sur-Seine',
    'À Ivry-sur-Seine, les puces s’installent dans les appartements où vit un animal, et parfois dans les logements où des rongeurs circulent (caves, faux plafonds) : la puce du rat existe aussi.',
    'Si vous avez des puces sans animal, nous vérifions aussi la présence de rongeurs. Voir [dératisation à Ivry-sur-Seine](/deratisation/ivry-sur-seine).',
  ],
  'saint-maur-des-fosses': [
    '### Puces à Saint-Maur-des-Fossés',
    'Ville de jardins, Saint-Maur-des-Fossés est exposée aux puces apportées par les hérissons, les chats et la faune des bords de **Marne**, à **La Varenne**, au **Parc** comme à **Adamville**.',
    'Nous traitons la maison entière, véranda et garage compris quand l’animal y dort. Dès 120 €, garantie 1 an.',
  ],
  'fontenay-sous-bois': [
    '### Puces à Fontenay-sous-Bois',
    'À Fontenay-sous-Bois, les chiens qui se promènent au **Bois de Vincennes** et les chats des pavillons du **Village** ramènent régulièrement des puces.',
    'Le traitement du logement (sols, fentes, couchage) se fait en même temps que celui de l’animal. Second passage si besoin pour les puces qui sortent des cocons.',
  ],
  'vitry-sur-seine': [
    '### Puces à Vitry-sur-Seine',
    'À Vitry-sur-Seine, nous traitons les puces dans les résidences comme dans les pavillons. En maison, elles viennent souvent du jardin ; en appartement, d’un animal ou d’un ancien occupant.',
    'Après le traitement, passez l’aspirateur tous les jours pendant quelques semaines : les vibrations font sortir les dernières puces de leurs cocons, au contact des surfaces traitées.',
  ],
  villejuif: [
    '### Puces à Villejuif',
    'À Villejuif, les puces s’installent là où l’animal se couche : panier, canapé, tapis. En pavillon, les hérissons et chats du voisinage les apportent depuis le jardin.',
    'Nous traitons tout le logement, en lien avec votre vétérinaire. Dès 120 €, garantie 1 an.',
  ],
}

const ACARIENS: Record<string, string[]> = {
  'saint-maurice': [
    '### Acariens à Saint-Maurice',
    'Entre la **Marne**, le **canal de Saint-Maur** et le **bras de Gravelle**, certains logements de Saint-Maurice sont plus humides, surtout en rez-de-chaussée. Or les acariens prolifèrent quand l’air reste chaud et humide.',
    'Nous traitons literie, canapés et tapis à la vapeur sèche ou en cryogénie, sans produit, dès 120 € pour une chambre. Notre base est ici : le passage est rapide.',
  ],
  'maisons-alfort': [
    '### Acariens à Maisons-Alfort',
    'À Maisons-Alfort, les pavillons au bord de la **Marne** et les rez-de-chaussée sont parfois humides. Les acariens s’y développent dans les matelas, les canapés et les moquettes.',
    'Pour une chambre d’enfant ou une personne allergique, nous traitons sans produit, à la vapeur sèche ou en cryogénie, et vous conseillons sur l’humidité et l’aération.',
  ],
  alfortville: [
    '### Acariens à Alfortville',
    'Entre la **Seine** et la **Marne**, certains logements d’Alfortville gardent l’humidité, surtout en bas d’immeuble. Les acariens y prolifèrent dans la literie.',
    'Vapeur sèche ou cryogénie sur les matelas, sommiers et canapés, puis conseils d’aération. Dès 120 € pour une chambre.',
  ],
  'charenton-le-pont': [
    '### Acariens à Charenton-le-Pont',
    'À Charenton-le-Pont, les appartements anciens ont souvent des moquettes, des tentures et des canapés en tissu, où les acariens s’accumulent avec les années.',
    'Nous traitons ces textiles à la vapeur sèche ou en cryogénie selon les matières, sans produit, et vous laissons les gestes qui prolongent le résultat.',
  ],
  'saint-mande': [
    '### Acariens à Saint-Mandé',
    'À Saint-Mandé, les appartements bourgeois accueillent tapis, rideaux épais et literie ancienne : des réservoirs à acariens. Une chambre peu aérée en hiver aggrave le problème.',
    'Nous traitons literie et textiles en profondeur, sans produit, et vous conseillons pour garder une humidité entre 40 et 60 %, comme le recommande l’Assurance maladie.',
  ],
  vincennes: [
    '### Acariens à Vincennes',
    'À Vincennes, ville très dense, beaucoup d’appartements sont petits et bien chauffés. Sans aération quotidienne, l’humidité reste dans les chambres et les acariens prolifèrent dans les matelas.',
    'Vapeur sèche ou cryogénie sur la literie, les canapés et les tapis, dès 120 € pour une chambre.',
  ],
  'nogent-sur-marne': [
    '### Acariens à Nogent-sur-Marne',
    'À Nogent-sur-Marne, les maisons des bords de **Marne** et les chambres en sous-sol ou rez-de-jardin sont souvent plus humides : c’est là que les acariens prolifèrent en premier.',
    'Nous traitons la literie et les textiles, en commençant par la chambre des personnes allergiques, et vous conseillons sur l’humidité.',
  ],
  creteil: [
    '### Acariens à Créteil',
    'À Créteil, entre le **lac**, les bras de la **Marne** et de grandes résidences, l’humidité est un sujet dans beaucoup de logements. Les acariens s’y développent dans la literie.',
    'Pour les étudiants de l’**université**, un traitement du matelas à l’entrée dans le logement permet de partir sur de bonnes bases. Dès 120 € pour une chambre.',
  ],
  'ivry-sur-seine': [
    '### Acariens à Ivry-sur-Seine',
    'À Ivry-sur-Seine, les logements proches de la **Seine** et les rez-de-chaussée sont parfois humides. Les acariens y prolifèrent dans les matelas, les canapés et les tapis.',
    'Nous traitons sans produit, à la vapeur sèche ou en cryogénie, et vous aidons à repérer les sources d’humidité (linge qui sèche, ventilation bouchée).',
  ],
  'saint-maur-des-fosses': [
    '### Acariens à Saint-Maur-des-Fossés',
    'Dans la boucle de la **Marne**, les maisons de Saint-Maur-des-Fossés ont souvent des chambres en rez-de-jardin ou en sous-sol aménagé, plus humides. Les acariens s’y développent dans la literie.',
    'Vapeur sèche ou cryogénie sur matelas, canapés et tapis, puis conseils d’aération. Dès 120 € pour une chambre.',
  ],
  'fontenay-sous-bois': [
    '### Acariens à Fontenay-sous-Bois',
    'À Fontenay-sous-Bois, dans les pavillons du **Village** comme dans les résidences de **Val de Fontenay**, les acariens prolifèrent dans les chambres peu aérées et bien chauffées.',
    'Nous traitons la literie et les textiles sans produit, et vous rappelons les recommandations de l’Assurance maladie : aérer 10 minutes par jour, laver les draps à 60 °C.',
  ],
  'vitry-sur-seine': [
    '### Acariens à Vitry-sur-Seine',
    'À Vitry-sur-Seine, les logements proches de la **Seine** et les appartements très chauffés favorisent les acariens dans la literie et les canapés.',
    'Pour une chambre d’enfant ou une personne allergique, nous traitons sans produit, à la vapeur sèche ou en cryogénie, dès 120 € pour une chambre.',
  ],
  villejuif: [
    '### Acariens à Villejuif',
    'À Villejuif, beaucoup de familles nous appellent pour la chambre d’un enfant allergique. Les acariens vivent dans le matelas, les peluches et les tapis.',
    'Vapeur sèche ou cryogénie, sans produit, puis conseils simples : aération quotidienne, housses intégrales, lavage à 60 °C. Le suivi de l’allergie reste l’affaire du médecin.',
  ],
}

const FRELONS: Record<string, string[]> = {
  'saint-maurice': [
    '### Nids de frelons à Saint-Maurice',
    'Les arbres des bords de **Marne**, du **canal de Saint-Maur** et des squares de Saint-Maurice accueillent régulièrement des nids de frelons asiatiques, souvent haut dans les branches. Les guêpes, elles, nichent sous les toitures et dans les haies.',
    'Notre base est ici : nous intervenons en général **dans l’heure**. Perche jusqu’à 23 m, garantie 3 mois sur la destruction de nid.',
  ],
  'maisons-alfort': [
    '### Nids de frelons à Maisons-Alfort',
    'À Maisons-Alfort, les jardins de **Charentonneau** et les parcs (**Château Gaillard**, **Vert-de-Maisons**, **l’Alsacienne**) abritent des nids de guêpes et de frelons de la fin du printemps à l’automne.',
    'Nous intervenons rapidement depuis Saint-Maurice, à 1,8 km. Nid traité au cœur, en tenue de protection, perche jusqu’à 23 m.',
  ],
  'joinville-le-pont': [
    '### Nids de frelons à Joinville-le-Pont',
    'À Joinville-le-Pont, les grands arbres des bords de **Marne**, de l’**île Fanac** et du **parc du Parangon** sont des emplacements fréquents pour les nids de frelons asiatiques.',
    'Notre base est à 1,9 km : intervention en général sous 1 heure. Garantie 3 mois.',
  ],
  'paris-12': [
    '### Nids de frelons dans le 12e',
    'Dans le 12e, les nids de frelons et de guêpes se trouvent dans les arbres des cours et des squares, sur les balcons et sous les toitures, et bien sûr près du **Bois de Vincennes** et du **Parc Floral**.',
    'Nous intervenons à la perche (jusqu’à 23 m) depuis le sol ou un balcon, en tenue de protection. Garantie 3 mois.',
  ],
  alfortville: [
    '### Nids de frelons à Alfortville',
    'À Alfortville, les arbres des berges de la **Seine**, de l’**île au Cointre** et du **parc Saint-Pierre** accueillent des nids de frelons asiatiques. Les guêpes nichent sous les toitures et dans les volets roulants.',
    'Intervention rapide depuis Saint-Maurice, à 2,8 km, perche jusqu’à 23 m, garantie 3 mois.',
  ],
  'charenton-le-pont': [
    '### Nids de frelons à Charenton-le-Pont',
    'À Charenton-le-Pont, les nids de frelons se trouvent dans les arbres du **parc de Conflans**, des squares et des **franges du Bois de Vincennes**, mais aussi sur les balcons et dans les coffres de volets.',
    'Nous intervenons en général sous 1 heure, à la perche ou depuis le balcon. Garantie 3 mois.',
  ],
  'saint-mande': [
    '### Nids de frelons à Saint-Mandé',
    'En lisière du **Bois de Vincennes**, Saint-Mandé voit régulièrement des nids de frelons asiatiques dans les grands arbres, et des nids de guêpes sous les toitures et les balcons.',
    'Perche jusqu’à 23 m, tenue de protection intégrale, garantie 3 mois sur la destruction de nid.',
  ],
  vincennes: [
    '### Nids de frelons à Vincennes',
    'À Vincennes, les grands arbres du **Bois**, des jardins et des cours d’immeubles accueillent des nids de frelons asiatiques, parfois très haut. Les guêpes nichent sous les toits et dans les murs.',
    'Nous intervenons rapidement depuis Saint-Maurice, à 3,3 km. Perche jusqu’à 23 m, garantie 3 mois.',
  ],
  'nogent-sur-marne': [
    '### Nids de frelons à Nogent-sur-Marne',
    'À Nogent-sur-Marne, les nids se cachent dans les arbres des jardins des **Hauts de Nogent**, du **parc Watteau** et des bords de **Marne**, mais aussi dans les conduits. Nous y avons retiré un nid installé dans une cheminée : voir [nid de frelons dans une cheminée à Nogent](/blog/nid-frelons-cheminee-nogent-sur-marne).',
    'Intervention en général sous 1 heure, garantie 3 mois.',
  ],
  creteil: [
    '### Nids de frelons à Créteil',
    'Autour du **lac de Créteil**, de l’**île de loisirs** et des parcs **Dupeyroux** et de **la Brèche**, les grands arbres accueillent des nids de frelons asiatiques. Les guêpes nichent dans les haies et sous les toits des pavillons.',
    'Perche jusqu’à 23 m, tenue de protection intégrale, garantie 3 mois.',
  ],
  'ivry-sur-seine': [
    '### Nids de frelons à Ivry-sur-Seine',
    'À Ivry-sur-Seine, les nids se trouvent dans les arbres du **parc des Cormailles**, des **promenades des Petits Bois** et **du Fort**, et sous les toitures des pavillons.',
    'Nous intervenons à 4,1 km de notre base, à la perche jusqu’à 23 m. Garantie 3 mois.',
  ],
  'saint-maur-des-fosses': [
    '### Nids de frelons à Saint-Maur-des-Fossés',
    'Ville de jardins et de grands arbres, Saint-Maur-des-Fossés est l’une des villes où nous retirons le plus de nids de frelons et de guêpes, à **La Varenne**, au **Parc** comme à **Adamville**, dans les haies, les arbres et sous les toitures.',
    'Voir nos interventions dans les haies : [nids de frelons cachés dans les haies](/blog/nids-frelons-buissons-haies-intervention). Perche jusqu’à 23 m, garantie 3 mois.',
  ],
  'fontenay-sous-bois': [
    '### Nids de frelons à Fontenay-sous-Bois',
    'À Fontenay-sous-Bois, les nids de frelons asiatiques se trouvent dans les grands arbres proches du **Bois de Vincennes**, de l’**Écoparc des Carrières** et des jardins des pavillons du **Village**.',
    'Intervention rapide depuis Saint-Maurice, perche jusqu’à 23 m, garantie 3 mois.',
  ],
}

export const LOCAL_POLE_FAMILLES: Record<string, Record<string, string[]>> = {
  '/souris': SOURIS,
  '/cafards': CAFARDS,
  '/fourmis': FOURMIS,
  '/puces': PUCES,
  '/acariens': ACARIENS,
  '/destruction-nid-frelon': FRELONS,
}
