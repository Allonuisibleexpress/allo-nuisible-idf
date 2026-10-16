import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'

const data: ServiceData = {
  badge: '2 passages inclus · Oothèques éliminées · HACCP',
  heroTitle: 'Cafards & Blattes',
  heroHighlight: 'Éradication définitive',
  heroDescription: 'Protocole en 2 passages pour éliminer adultes ET oothèques (cocons d\'œufs). Produits professionnels adaptés aux cuisines et locaux alimentaires.',
  heroPrices: [
    { price: '180', label: 'Appartement' },
    { price: '280', label: 'Maison' },
    { price: '350', label: 'Local pro' },
  ],
  trustBar: ['2 passages inclus', 'Gel HACCP', 'Oothèques traitées', 'Normes ERP', 'Résultat garanti'],
  benefits: [
    { icon: 'flask', title: 'Gel appât haute performance', text: 'Application de gel insecticide attractif dans les zones de vie des blattes. Les cafards ingèrent le produit et le transmettent à toute la colonie via leurs excréments et cadavres. Effet domino.' },
    { icon: 'repeat', title: '2e passage obligatoire', text: 'Un 2e passage 2 à 3 semaines plus tard détruit les jeunes issus des oothèques qui n\'étaient pas encore éclos lors du 1er traitement. C\'est la seule façon d\'éradiquer définitivement une infestation.' },
    { icon: 'store', title: 'Conformité restaurateurs & ERP', text: 'Nos produits respectent les normes HACCP. Nous fournissons les attestations d\'intervention requises pour les restaurants, hôtels, épiceries et tous établissements alimentaires.' },
  ],
  process: [
    { title: 'Diagnostic & devis', text: 'Identification de l\'espèce (blatte germanique, orientale, américaine) et du niveau d\'infestation par téléphone ou sur place. Devis gratuit, intervention possible le jour même.' },
    { title: '1er passage : traitement principal', text: 'Application de gel appât dans les zones clés (derrière les appareils électroménagers, sous les éviers, dans les fissures) + pulvérisation insecticide sur les surfaces.' },
    { title: '2e passage : élimination des oothèques', text: 'Retour 2 à 3 semaines plus tard pour éliminer les jeunes blattes issues des cocons qui n\'avaient pas encore éclos. Cette étape est indispensable pour une éradication totale.' },
    { title: 'Attestation et garantie', text: 'Fourniture d\'une attestation d\'intervention pour vos obligations réglementaires. Garantie re-intervention si réapparition dans le mois suivant.' },
  ],
  pricing: [
    {
      label: 'Appartement',
      price: '180',
      description: 'Logement jusqu\'à 80 m²',
      features: ['2 passages inclus', 'Gel appât professionnel', 'Traitement toutes pièces', 'Garantie 1 mois'],
    },
    {
      label: 'Maison / Grand logement',
      price: '280',
      description: 'Logement de plus de 80 m²',
      features: ['2 passages inclus', 'Gel + pulvérisation rémanente', 'Traitement intérieur complet', 'Garantie 1 mois', 'Conseils préventifs'],
      highlight: true,
    },
    {
      label: 'Local professionnel',
      price: '350',
      description: 'Restaurant, commerce, hôtel',
      features: ['2 passages inclus', 'Produits HACCP homologués', 'Attestation officielle fournie', 'Rapport d\'intervention', 'Contrat annuel disponible'],
      cta: 'Obtenir un devis pro',
    },
  ],
  testimonials: [
    { name: 'Rachid M.', ville: 'Paris 15e', note: 5, texte: 'Restaurant fermé d\'urgence à cause des cafards. Allo Nuisible IDF est intervenu le soir même. 2 passages, attestation HACCP fournie, aucun cafard depuis 3 mois.' },
    { name: 'Isabelle T.', ville: 'Rueil-Malmaison', note: 5, texte: 'Infestation dans la cuisine. Le technicien a tout expliqué clairement, notamment pourquoi 2 passages sont nécessaires. Résultat impeccable.' },
    { name: 'Marc P.', ville: 'Saint-Cloud', note: 5, texte: 'Très réactifs et professionnels. Le gel appât a fonctionné bien mieux que tous les produits du commerce que j\'avais essayés. Je recommande.' },
  ],
  faq: [
    { q: 'Pourquoi y a-t-il des cafards chez moi ?', a: 'Les blattes sont attirées par la chaleur, l\'humidité et les sources alimentaires. Elles s\'introduisent via les canalisations, fissures, cartons et livraisons. Leur présence n\'est pas liée à la propreté du logement.' },
    { q: 'Les cafards sont-ils dangereux pour la santé ?', a: 'Oui. Les blattes transportent salmonelles, E. coli et autres agents pathogènes. Elles peuvent déclencher des allergies respiratoires, notamment chez les enfants asthmatiques. Leur présence dans une cuisine est un risque sanitaire sérieux.' },
    { q: 'Pourquoi faut-il obligatoirement 2 passages ?', a: 'Les oothèques (cocons d\'œufs) sont résistantes aux insecticides. Lors du 1er passage, seuls les adultes et larves sont éliminés. Les œufs éclosent 2 à 3 semaines plus tard : le 2e passage les détruit avant qu\'ils ne se reproduisent.' },
    { q: 'Combien de temps après le traitement peut-on cuisiner ?', a: 'Généralement 2 à 4 heures après l\'intervention. Le gel appât est appliqué en petites quantités aux endroits ciblés et ne nécessite pas de nettoyage de toute la cuisine. Votre technicien vous donnera les instructions précises.' },
    { q: 'Êtes-vous conformes aux normes HACCP pour les restaurants ?', a: 'Oui. Nos techniciens sont formés aux exigences HACCP et utilisent des produits homologués pour les locaux alimentaires. Nous fournissons les attestations et rapports d\'intervention requis pour vos contrôles sanitaires.' },
  ],
  ctaTitle: 'Des cafards chez vous ?\nOn intervient rapidement.',
}

export default function CafardsPage() {
  return <ServicePageTemplate data={data} />
}
