// Bloc « En bref » en haut des pages service (19/11/2026, demande de l'utilisateur : être cité par le mode IA de Google).
// Des questions courtes et des réponses directes, reprises telles quelles par les moteurs à réponse.
// Uniquement des faits déjà publiés sur le site (prix « dès », garanties, délais confirmés, méthodes).
// Pas de tiret long, jamais « naturel » ni « sans danger » pour un biocide, « écologique » toujours défini.
export type QR = { q: string; r: string }

export const EN_BREF_SERVICES: Record<string, QR[]> = {
  'punaises-de-lit': [
    { q: 'Combien coûte un traitement des punaises de lit ?', r: 'Dès 290 € TTC pour un studio ou un T1, 2 passages inclus, garantie 1 an. Plus grand logement : sur devis gratuit.' },
    { q: 'Pourquoi 2 passages ?', r: 'Les œufs ne sont pas tous détruits au premier passage : le second élimine les punaises nées entre-temps.' },
    { q: 'Peut-on traiter sans insecticide ?', r: 'Oui, par cryogénie (neige carbonique à −78 °C) ou vapeur sèche, sans aucun biocide.' },
    { q: 'Où intervenez-vous ?', r: 'Paris et toute l’Île-de-France, 7j/7, depuis notre base de Saint-Maurice (94). Réponse en 5 minutes.' },
  ],
  'cryogenie-punaises-de-lit': [
    { q: 'Qu’est-ce que la cryogénie contre les punaises de lit ?', r: 'Un traitement par le froid : la neige carbonique à −78 °C tue les punaises et leurs œufs au contact.' },
    { q: 'Utilise-t-elle un produit chimique ?', r: 'Non : aucun insecticide, aucun biocide, aucun résidu. C’est en ce sens qu’elle est écologique.' },
    { q: 'Combien coûte-t-elle ?', r: 'Dès 290 € TTC pour un studio, 2 passages inclus, garantie 1 an.' },
    { q: 'Pour qui ?', r: 'Familles avec bébé, enfants ou animaux, personnes sensibles, crèches, hôtels et établissements.' },
  ],
  deratisation: [
    { q: 'Combien coûte une dératisation ?', r: 'Dès 120 € TTC pour un appartement, rats ou souris, garantie 1 an. Maison, commerce, copropriété : sur devis gratuit.' },
    { q: 'Comment se passe-t-elle ?', r: 'Inspection, postes d’appâtage sécurisés ou pièges, contrôles, puis rebouchage des accès.' },
    { q: 'Existe-t-il une dératisation sans raticide ?', r: 'Oui : piège multicapture Ekomille, pièges mécaniques ou connectés, sans poison déposé chez vous.' },
    { q: 'Où intervenez-vous ?', r: 'Paris et toute l’Île-de-France, 7j/7, souvent le jour même autour de Saint-Maurice (94).' },
  ],
  'deratisation-ecologique': [
    { q: 'Qu’est-ce qu’une dératisation écologique ?', r: 'Une dératisation sans raticide ni poison déposé chez vous : pièges et rebouchage des accès.' },
    { q: 'Quels pièges utilisez-vous ?', r: 'Piège multicapture Ekomille, pièges connectés, électriques ou mécaniques, plaques de glu.' },
    { q: 'Combien coûte-t-elle ?', r: 'Sur devis gratuit, selon le lieu et le nombre de pièges. Garantie 1 an.' },
    { q: 'Pour qui ?', r: 'Familles avec enfants ou animaux, jardins, écoles, crèches et établissements accueillant du public.' },
  ],
  'cafards-blattes': [
    { q: 'Combien coûte un traitement contre les cafards ?', r: 'Dès 120 € TTC pour un T1 ou un T2, garantie 1 an. Grand logement ou local pro : sur devis gratuit.' },
    { q: 'Pourquoi 2 passages ?', r: 'Le second passage élimine les cafards sortis des oothèques (cocons d’œufs) après le premier.' },
    { q: 'Quelles méthodes ?', r: 'Gel et insecticide professionnels, vapeur sèche ou cryogénie selon les pièces.' },
    { q: 'Où intervenez-vous ?', r: 'Paris et toute l’Île-de-France, 7j/7, réponse en 5 minutes.' },
  ],
  fourmis: [
    { q: 'Combien coûte un traitement des fourmis ?', r: 'Dès 120 € TTC, garantie 1 an, intervention sous 48 h.' },
    { q: 'Pourquoi les fourmis reviennent-elles ?', r: 'Tant que la reine vit, la colonie se reforme : il faut l’atteindre, pas seulement tuer les ouvrières.' },
    { q: 'Quelle méthode ?', r: 'Gel appât professionnel rapporté jusqu’à la reine, traitement du nid, injection dans le bois pour les charpentières.' },
  ],
  'guepes-frelons': [
    { q: 'Combien coûte la destruction d’un nid de guêpes ou de frelons ?', r: 'Dès 89 € TTC, puis 149 € et 199 € selon la hauteur et l’accès. Garantie 3 mois.' },
    { q: 'En combien de temps intervenez-vous ?', r: 'En général sous 1 heure, 7j/7.' },
    { q: 'Et si le nid est très haut ?', r: 'Notre perche télescopique atteint jusqu’à 23 m ; au-delà, intervention en hauteur sur devis.' },
    { q: 'Quels nids ?', r: 'Frelon asiatique, frelon européen et guêpes : arbre, toiture, cheminée, haie, façade.' },
  ],
  'chenilles-processionnaires': [
    { q: 'Combien coûte le traitement des chenilles processionnaires ?', r: 'Dès 89 € pour un nid accessible, 149 € en hauteur, grand arbre sur devis.' },
    { q: 'Que faites-vous ?', r: 'Retrait et destruction des nids, écopièges sur les troncs, pièges à phéromones, conseils de prévention.' },
    { q: 'Pourquoi faire appel à un professionnel ?', r: 'Les poils urticants des chenilles provoquent des réactions chez l’homme et les animaux : nos techniciens sont équipés.' },
  ],
  acariens: [
    { q: 'Combien coûte un traitement anti-acariens ?', r: 'Dès 120 € TTC pour une chambre, garantie 1 an. Logement complet : sur devis.' },
    { q: 'Quelles méthodes ?', r: 'Vapeur sèche, cryogénie ou pulvérisation acaricide sur matelas, sommiers, canapés, tapis et rideaux.' },
    { q: 'Peut-on traiter sans produit ?', r: 'Oui, la vapeur sèche et la cryogénie n’utilisent aucun biocide.' },
  ],
  anthrenes: [
    { q: 'Combien coûte un traitement des anthrènes ?', r: 'Dès 120 € TTC pour une pièce, garantie 1 an. Logement complet : sur devis.' },
    { q: 'Comment les reconnaître ?', r: 'Larves velues sous les tapis, pulls troués, petits insectes ronds près des fenêtres.' },
    { q: 'Comment les traitez-vous ?', r: 'Nous trouvons le foyer, puis traitons avec ou sans insecticide selon votre choix.' },
  ],
  puces: [
    { q: 'Combien coûte un traitement contre les puces ?', r: 'Dès 120 € TTC pour un appartement, garantie 1 an. Maison : sur devis.' },
    { q: 'Faut-il aussi traiter les animaux ?', r: 'Oui, chez le vétérinaire, en même temps que nous traitons tout le logement.' },
    { q: 'Où intervenez-vous ?', r: 'Paris, Val-de-Marne, Hauts-de-Seine et toute l’Île-de-France, 7j/7.' },
  ],
  pigeons: [
    { q: 'Combien coûte un dépigeonnage ?', r: 'Dès 150 € pour un balcon ou un rebord. Terrasse ou façade : sur devis.' },
    { q: 'Quelles solutions ?', r: 'Pics inox, filets sur mesure et dispositifs répulsifs, posés durablement.' },
    { q: 'Les pigeons sont-ils tués ?', r: 'Non : ce sont des barrières physiques qui les empêchent de se poser et de nicher.' },
  ],
  desinfection: [
    { q: 'Combien coûte une désinfection ?', r: 'Dès 150 € pour un studio. T2, T3 ou local professionnel : sur devis.' },
    { q: 'Dans quels cas ?', r: 'Après une infestation, un sinistre, un décès ou une contamination, ou un logement insalubre.' },
    { q: 'Recevez-vous une attestation ?', r: 'Oui, une attestation officielle est fournie pour vos obligations réglementaires.' },
  ],
  'traitements-sans-produit-chimique': [
    { q: 'Peut-on traiter les nuisibles sans produit chimique ?', r: 'Oui, quand c’est possible : par le froid, la chaleur, des pièges ou des barrières physiques.' },
    { q: 'Pour quels nuisibles ?', r: 'Punaises de lit (cryogénie, vapeur sèche), rats et souris (pièges), acariens, anthrènes, chenilles, pigeons.' },
    { q: 'Que veut dire « écologique » ici ?', r: 'Aucun biocide déposé chez vous. Devis gratuit, garantie 1 an.' },
  ],
}
