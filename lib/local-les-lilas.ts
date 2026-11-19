// Contenu local rédigé à la main pour les pages des Lilas (93260), 20/11/2026 : cafards, souris, puces, acariens, anthrènes.
// Faits généraux vérifiables (plateau, fort de Romainville, ligne 11, bâti), aucun chiffre inventé.
export const LILAS_D93 = { code: '93', departement: 'Seine-Saint-Denis', zoneHref: '/zones/seine-saint-denis' }
export const LILAS_PROCHES = ['Pantin', 'Bagnolet', 'Paris 19e', 'Paris 20e', 'Romainville']

export const LOCAL_LILAS: Record<'cafards' | 'souris' | 'puces' | 'acariens' | 'anthrenes', string[]> = {
  cafards: [
    'Les Lilas est une petite commune **très dense**, accrochée au plateau de Romainville, où les immeubles se touchent et partagent souvent des murs mitoyens. Les blattes germaniques passent d’un logement à l’autre par les colonnes d’eau et les passages de tuyaux.',
    'Le long de la **rue de Paris**, l’axe commerçant qui descend vers la porte des Lilas, boulangeries, restaurants et épiceries occupent les rez-de-chaussée. Leurs réserves en sous-sol, chaudes et humides, sont un point de départ fréquent des cafards qui montent dans les étages.',
    'Les petites **maisons de ville** et pavillons des rues pentues ont souvent une cave ou un sous-sol humide où vit la blatte orientale, plus grande et plus sombre. Elle remonte par les siphons de sol et les canalisations : il faut les traiter et remplir d’eau les siphons peu utilisés.',
  ],
  souris: [
    'Aux Lilas, beaucoup de **maisons de ville** et de petits immeubles anciens ont des caves voûtées, des planchers en bois et des murs en moellons aux joints usés. La souris domestique s’y glisse par des trous de la taille d’un stylo.',
    'Le **fort de Romainville**, situé sur le territoire de la commune, et les espaces verts du plateau, comme le parc Lucie-Aubrac, offrent aux rongeurs des abris à proximité des habitations. À l’automne, les souris cherchent la chaleur et entrent dans les maisons voisines.',
    'Dans les **commerces de bouche** de la rue de Paris, une souris dans la réserve est un vrai problème d’hygiène. Nous posons des postes sécurisés et des pièges mécaniques, colmatons les accès et remettons une attestation d’intervention.',
  ],
  puces: [
    'Les Lilas compte beaucoup de **familles avec chats et chiens**, dans des appartements et des maisons avec petit jardin. Les puces passent de l’animal aux tapis, aux parquets et aux canapés, où les larves se cachent dans les fentes.',
    'Les **parquets anciens** des maisons de ville et des immeubles d’avant-guerre ont des lames disjointes où les larves et les cocons se mettent à l’abri : c’est là que le traitement doit insister.',
    'Après un **déménagement** dans un logement où vivait un animal, les cocons peuvent éclore des semaines plus tard, au moindre mouvement. Les nouveaux habitants des résidences récentes proches de la station Serge-Gainsbourg de la ligne 11 nous appellent parfois pour cette raison.',
  ],
  acariens: [
    'Les **immeubles anciens** des Lilas, parfois mal ventilés, et les logements en rez-de-chaussée sur cour gardent l’humidité : les acariens s’y plaisent, surtout dans les matelas, les oreillers et les canapés en tissu.',
    'Sur les hauteurs du **plateau de Romainville**, les maisons sont mieux exposées, mais les chambres d’enfants pleines de peluches et de tapis restent des réservoirs à acariens. Un traitement à la vapeur sèche, sans produit, permet de dormir dans son lit le soir même.',
    'Pour les **personnes allergiques**, nous combinons le traitement de la literie et des textiles avec des conseils simples : aérer chaque jour, laver les draps à 60 °C, garder la chambre autour de 18 à 19 °C.',
  ],
  anthrenes: [
    'Aux Lilas, les **toitures des maisons de ville** et des immeubles anciens abritent souvent des nids de pigeons ou de moineaux. Ces nids sont la source la plus fréquente d’anthrènes, dont les larves descendent ensuite dans les logements.',
    'Les **parquets anciens**, les tapis et les dressings remplis de lainages offrent aux larves de quoi se nourrir. On les trouve sous les meubles, le long des plinthes et au fond des placards peu ouverts.',
    'Au **printemps**, quand les adultes sortent vers la lumière, les habitants les voient sur les rebords de fenêtre. C’est le bon moment pour faire chercher le foyer, avant que les larves de l’année suivante ne s’installent.',
  ],
}
