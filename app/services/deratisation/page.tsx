import { secteurService } from '@/lib/secteurs'
import { DERAT_DEMANDEES } from '@/lib/villes-demandees'
import { pageMetadata } from '@/lib/seo'
import DeratEco from '@/components/DeratEco'
import DeratServiceQuestions from '@/components/DeratServiceQuestions'
import { maillageService } from '@/lib/maillage-services'
import { CONTENU_DERATISATION } from '@/lib/contenu-nuisibles/deratisation'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import { CHANTIER_DIOGENE, MEDIAS_DERATISATION } from '@/lib/photos-chantiers'
import { VILLES_DERATISATION, GUIDES_RONGEURS } from '@/lib/villes-deratisation'
import { VILLES_SOURIS } from '@/lib/villes-souris'
import { METHODES_DERATISATION, GUIDE_DERATISATION } from '@/lib/contenu-services/deratisation'
import VideosDetaillees from '@/components/VideosDetaillees'
import { DERAT_VIDEOS, DERAT_VIDEOS_INTRO } from '@/lib/contenu-services/videos-chantiers'

const data: ServiceData = {
  badge: 'Rats · Souris · Ragondins · Particuliers, pros & copropriétés',
  devis: 'Devis gratuit dératisation',
  heroTitle: 'Dératisation rats et souris',
  heroHighlight: 'Paris et Île-de-France, dès 120 €',
  heroDescription: 'Rats, souris ou ragondins : élimination des rongeurs par des techniciens Certibiocide, avec recherche et colmatage des accès. Postes d\'appâtage sécurisés, pièges connectés ou, en méthode alternative, piège multicapture Ekomille sans raticide, attestations pour professionnels, contrats de maintenance.',
  heroPrices: [
    { price: '120', label: 'Particulier' },
    { price: 'Sur devis', label: 'Professionnel' },
    { price: 'Sur devis', label: 'Copropriété' },
  ],
  trustBar: ['Certibiocide', 'Postes sécurisés', 'Attestation HACCP', 'Alternative Ekomille', 'Contrats maintenance', 'RC Pro incluse'],
  benefits: [
    { icon: 'home', title: 'Particuliers : intervention rapide', text: 'Inspection du logement, identification des points d\'entrée, installation de postes d\'appâtage sécurisés. Intervention le jour même pour les urgences, discrète et efficace.' },
    { icon: 'food', title: 'Professionnels & ERP conformes', text: 'Intervention conforme aux normes HACCP. Fourniture des attestations et rapports d\'intervention obligatoires pour restaurants, hôtels, commerces alimentaires et ERP.' },
    { icon: 'building', title: 'Copropriétés & parties communes', text: 'Traitement des caves, locaux poubelles, parkings et parties communes. Intervention en lien avec le syndic. Contrats pluriannuels avec visites régulières et registre de suivi.' },
    { icon: 'shield', title: 'Méthode alternative : Ekomille', text: 'Si vous ne voulez pas de mort-aux-rats (la méthode la plus courante reste les postes avec raticide) : piège multicapture posé sur le passage le plus fréquenté, avec des appâts alimentaires. Le rongeur tombe dans une cuve fermée et reste dans l\'appareil, au lieu d\'aller mourir dans la rue ou une cloison, à portée des chiens et des enfants. Version connectée pour suivre les captures.' },
  ],
  process: [
    { title: 'Inspection & cartographie', text: 'Inspection complète des locaux : points d\'entrée, couloirs, zones de nidification et d\'alimentation. Cartographie précise pour un traitement ciblé et efficace.' },
    { title: 'Installation du dispositif', text: 'Pose de boîtiers d\'appâtage sécurisés contenant des raticides homologués, la méthode la plus courante, ou en méthode alternative du piège Ekomille et de pièges mécaniques et connectés selon le lieu. Positionnement stratégique le long des murs et dans les zones de passage.' },
    { title: 'Suivi & relevés réguliers', text: 'Retour sous 1 à 2 semaines pour relever les consommations, recharger les appâts et évaluer l\'efficacité. Ajustement du dispositif si nécessaire.' },
    { title: 'Colmatage & attestation', text: 'Identification et colmatage des points d\'entrée. Fourniture de l\'attestation d\'intervention et du rapport de suivi. Conseils préventifs pour éviter les réinfestations.' },
  ],
  methodes: METHODES_DERATISATION,
  guide: GUIDE_DERATISATION,
  contenu: CONTENU_DERATISATION,
  apresProcess: (
    <>
      <DeratServiceQuestions />
      <DeratEco />
      <VideosDetaillees
        renvoiHaut
        titre="Notre chantier de dératisation en vidéo : ce que nous avons fait"
        intro={DERAT_VIDEOS_INTRO}
        videos={[...DERAT_VIDEOS.filter((v) => !v.src.includes('avant-apres')), ...DERAT_VIDEOS.filter((v) => v.src.includes('avant-apres'))]} // 20/11 : les vidéos de rats d'abord, l'avant/après du logement en dernier
        photos={MEDIAS_DERATISATION.photos}
      />
    </>
  ),
  pricing: [
    {
      label: 'Particulier',
      price: '120',
      description: 'Appartement',
      features: ['Inspection complète', 'Postes sécurisés', 'Suivi 2 semaines', 'Conseils préventifs'],
    },
    {
      label: 'Professionnel',
      price: 'Sur devis',
      description: 'Restaurant, commerce, bureau',
      features: ['Inspection HACCP', 'Postes certifiés', 'Attestation officielle', 'Rapport d\'intervention', 'Garantie résultat'],
      highlight: true,
    },
    {
      label: 'Copropriété',
      price: 'Sur devis',
      description: 'Parties communes et caves',
      features: ['Audit complet', 'Postes multiples', 'Registre de suivi', 'Contrat annuel dispo', 'Coordination syndic'],
      cta: 'Demander un devis',
    },
  ],
  avis: ['lauren', 'christine', 'lisa'],
  photos: ['ratDiogene'],
  chantier: {
    photos: MEDIAS_DERATISATION.photos,
    videos: DERAT_VIDEOS.filter((v) => !v.src.includes('avant-apres')).map((v) => ({ src: v.src, legende: v.legende, banniere: true, poster: v.poster })),
    titre: 'Nos chantiers de dératisation en images',
    lien: { href: CHANTIER_DIOGENE.article, label: 'Lire le récit d’un chantier : logement très encombré à Maisons-Alfort' },
  },
  galerieDansContenu: true,
  // FAQ optimisée le 16/11/2026 : questions les plus posées en ligne, réponse directe dans la 1re phrase (citable par Google et les IA),
  // faits sourcés : paris.fr « Comment Paris lutte contre les rats » (2026), strasbourg.eu « Les rongeurs », Santé publique France
  // (leptospirose, bilan 2024), loi du 6 juillet 1989 et loi ELAN, règlements sanitaires départementaux (art. 119 à Paris et dans le 94).
  faq: [
    { q: 'Comment savoir si j’ai des rats ou des souris ?', a: 'Regardez les crottes : celles de rat mesurent 1 à 2 cm, celles de souris 3 à 6 mm, comme des grains de riz. Autres signes : grignotages sur les câbles et les emballages, bruits la nuit dans les cloisons ou le plafond, traces grasses le long des murs, odeur d’urine. Le rat brun (surmulot) mesure 19 à 27 cm sans la queue et pèse environ 300 g (Ville de Paris). Envoyez-nous une photo, on vous répond gratuitement.' },
    { q: 'Comment se débarrasser des rats définitivement ?', a: 'En traitant la cause, pas seulement les rongeurs visibles. Une dératisation efficace combine 4 étapes : diagnostic des traces et des points d’entrée, dispositif adapté (postes d’appâtage sécurisés, pièges mécaniques ou connectés, piège Ekomille), colmatage des accès et suppression de la nourriture, puis suivi jusqu’à l’arrêt des consommations. Comme le rappelle la Ville de Strasbourg, sans action sur la nourriture et les abris, les rongeurs reviennent.' },
    { q: 'Les rats sont-ils dangereux pour la santé ?', a: 'Ils peuvent l’être, surtout par leur urine. La Ville de Paris précise que la transmission à l’homme reste rare et suppose un contact direct ou indirect ; la principale maladie est la leptospirose, qui se transmet par contact de la peau abîmée ou des muqueuses avec de l’eau ou un sol souillés par l’urine. Santé publique France a recensé 441 cas en 2024 dans l’Hexagone et en Corse. Les rongeurs rongent aussi les câbles électriques, avec un risque de court-circuit ou d’incendie.' },
    { q: 'À quelle vitesse les rats se reproduisent-ils ?', a: 'Très vite : selon la Ville de Paris, la femelle surmulot peut se reproduire dès 8 semaines et avoir 3 à 5 portées par an, et la chaleur accélère encore le cycle. Quelques rats aperçus peuvent donc devenir une colonie en quelques mois si la nourriture est accessible. C’est pourquoi il vaut mieux agir dès les premiers signes.' },
    { q: 'Combien de temps dure une dératisation ?', a: 'En général 2 à 4 semaines pour éliminer une infestation de rats. Le rat est néophobe : il se méfie de tout objet nouveau et met plusieurs jours avant de consommer les appâts. Le technicien revient contrôler les postes et ajuste le dispositif jusqu’à l’arrêt complet des consommations. Pour les souris, souvent moins méfiantes, c’est généralement plus court.' },
    { q: 'Combien coûte une dératisation ?', a: 'Chez Allo Nuisible IDF, à partir de 120 € TTC pour un appartement ; sur devis gratuit pour une maison, un commerce, un restaurant ou une copropriété. Le prix dépend de l’espèce, de la surface, de l’importance de l’infestation et du nombre de passages. Vous connaissez le prix avant l’intervention.' },
    { q: 'J’entends des bruits dans les murs ou le plafond : rat ou souris ?', a: 'Des grattements et trottinements la nuit dans une cloison, un faux plafond ou les combles signalent presque toujours des rongeurs. Des bruits légers et rapides évoquent plutôt des souris, des bruits plus lourds ou de rongement des rats. Cherchez des crottes près des plinthes, dans les placards et sous l’évier : leur taille tranche la question.' },
    { q: 'Que faire si je vois un rat dans mon jardin ?', a: 'Supprimez d’abord ce qui l’attire : croquettes et gamelles dehors, graines pour oiseaux, compost ouvert, fruits tombés, sacs poubelle non fermés. Cherchez les terriers (trous de 6 à 8 cm au pied des murs ou des haies). Ne touchez ni aux cadavres ni aux pièges à mains nues, comme le recommande la Ville de Paris. Si les rats reviennent ou approchent de la maison, une dératisation s’impose.' },
    { q: 'Un chat suffit-il à chasser les rats ?', a: 'Non. La Ville de Paris indique qu’un chat peut éventuellement attaquer de jeunes rats, mais que les adultes sont trop gros et agressifs pour lui. Et la nourriture du chat laissée dehors attire justement les rats. Un chat peut aider contre les souris, pas régler une infestation de rats.' },
    { q: 'Les raticides sont-ils dangereux pour mes animaux et mes enfants ?', a: 'Oui, c’est pourquoi nous les plaçons uniquement dans des postes d’appâtage sécurisés, verrouillés et inaccessibles aux animaux domestiques et aux enfants. Si vous préférez, nous utilisons des pièges mécaniques, des pièges connectés ou le piège Ekomille, sans raticide.' },
    { q: 'Peut-on dératiser sans mort-aux-rats ?', a: 'Oui, en méthode alternative. La méthode la plus courante reste les postes d’appâtage avec raticide, mais si vous n’en voulez pas, nous utilisons notamment le piège multicapture Ekomille : posé sur le passage le plus fréquenté et garni d’appâts alimentaires, il fait tomber le rongeur dans une cuve fermée où il reste. Le cadavre ne se retrouve ni dans la rue ni dans une cloison. Tout est expliqué dans notre guide sur la dératisation sans mort-aux-rats.' },
    { q: 'Odeur de rat mort dans un mur : que faire ?', a: 'Aérez largement et cherchez l’animal s’il est accessible (gaine, faux plafond, derrière un meuble) ; manipulez-le avec des gants et un sac fermé. S’il est inaccessible, l’odeur diminue d’elle-même à mesure que le cadavre sèche, ce qui peut prendre plusieurs semaines. Une odeur qui revient signale souvent d’autres rongeurs : faites vérifier l’infestation.' },
    { q: 'Quelle différence entre dératisation et simple piégeage ?', a: 'Un piège posé seul, sans diagnostic, ne règle pas la source. Une dératisation professionnelle combine identification des points d’entrée, colmatage et un dispositif adapté au lieu : appâts raticides en postes sécurisés, pièges mécaniques ou pièges connectés. Objectif : éliminer la population entière et empêcher le retour.' },
    { q: 'Puis-je rester chez moi pendant la dératisation ?', a: 'Oui, dans la plupart des cas. Les postes d’appâtage sont sécurisés et verrouillés, et les pièges mécaniques ou connectés ne diffusent aucun produit. Nous vous informons des précautions à prendre, notamment si vous avez des animaux domestiques.' },
    { q: 'Locataire : qui paie la dératisation ?', a: 'En principe le propriétaire. Le bailleur doit fournir un logement décent, exempt d’espèces nuisibles (loi du 6 juillet 1989, complétée par la loi ELAN de 2018), et la dératisation ne fait pas partie des charges récupérables. Le locataire ne paie que si une négligence de sa part est prouvée. Dans les parties communes d’un immeuble (caves, parkings, locaux poubelles), c’est le syndic ou le bailleur qui fait intervenir.' },
    { q: 'La dératisation est-elle obligatoire ?', a: 'Oui en cas de présence de rongeurs. Les règlements sanitaires départementaux (article 119 à Paris et dans le Val-de-Marne) imposent aux propriétaires et aux occupants de prendre les mesures pour empêcher l’introduction et la prolifération des rongeurs. Les restaurants, hôtels et commerces alimentaires doivent en plus prouver leur lutte contre les nuisibles lors des contrôles sanitaires : nous fournissons les attestations HACCP et rapports d’intervention.' },
    { q: 'Comment empêcher les rats de revenir ?', a: 'Coupez-leur l’accès à la nourriture et aux abris : poubelles et sacs bien fermés, aucune nourriture d’animal laissée dehors, caves et cours débarrassées des encombrants, siphons et grilles d’évacuation en bon état (conseils de la Ville de Paris). Bouchez les trous et fissures, posez des grilles sur les soupiraux. Pour les commerces et copropriétés, un contrat de suivi détecte tout retour très tôt.' },
    { q: 'Proposez-vous des contrats de dératisation annuels ?', a: 'Oui. Nous proposons des contrats mensuels, trimestriels ou annuels pour les professionnels et les copropriétés, avec visites programmées, relevés et rapports d’intervention fournis à chaque passage.' },
  ],
  related: {
    // 22/11/2026 : libellés réduits au nom de la ville (le titre du bloc porte déjà « dératisation » : pas de répétition)
    vedette: { title: 'Dératisation : les villes les plus demandées', links: DERAT_DEMANDEES.map((l) => ({ ...l, label: l.label.replace(/^Dératisation /, '') })) },
    extra: maillageService('/services/deratisation'),
    villes: { title: 'Dératisation par ville', links: VILLES_DERATISATION.map((v) => ({ href: `/deratisation/${v.slug}`, label: `${v.nom} (${v.code})` })) },
    guides: { title: 'Nos guides sur les rongeurs', links: [...Object.entries(GUIDES_RONGEURS).map(([slug, label]) => ({ href: `/blog/${slug}`, label }))] },
    souris: { title: 'Souris par ville', links: VILLES_SOURIS.map((v) => ({ href: `/souris/${v.slug}`, label: `${v.nom} (${v.code})` })) },
  },
  ctaTitle: 'Besoin d\'une dératisation ?\nOn intervient rapidement.',
}

export const metadata = pageMetadata({
  title: 'Dératisation en Île-de-France dès 120 € : rats, souris',
  description: 'Rats ou souris ? Dératisation par des techniciens Certibiocide : postes sécurisés ou pièges connectés, colmatage, attestation pro. Devis gratuit.',
  path: '/services/deratisation',
})

export default function DeratisationPage() {
  return <ServicePageTemplate data={{ ...data, secteur: secteurService('/services/deratisation') }} />
}
