import { secteurService } from '@/lib/secteurs'
import { PUNAISES_DEMANDEES } from '@/lib/villes-demandees'
import { pageMetadata } from '@/lib/seo'
import { maillageService } from '@/lib/maillage-services'
import { METHODES_PUNAISES, GUIDE_PUNAISES } from '@/lib/contenu-services/punaises'
import { CONTENU_PUNAISES } from '@/lib/contenu-nuisibles/punaises'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import CyclePunaises from '@/components/CyclePunaises'
import VideosDetaillees from '@/components/VideosDetaillees'
import { PUNAISES_VIDEOS, PUNAISES_VIDEOS_INTRO } from '@/lib/contenu-services/videos-chantiers'
import { VILLES_PUNAISES, GUIDES_PUNAISES } from '@/lib/villes-punaises'

const data: ServiceData = {
  badge: 'Urgence 7j/7 · Cryogénie · Vapeur sèche · Insecticide',
  devis: 'Devis gratuit punaises de lit',
  heroTitle: 'Traitement punaises de lit',
  heroHighlight: 'Paris et Île-de-France, dès 290 €',
  heroDescription: 'Deux approches professionnelles, choisies selon votre logement : cryogénie ou vapeur sèche, sans produit, et insecticide rémanent longue durée. Souvent, on combine les deux.',
  urgence: {
    titre: 'Urgence punaises de lit : intervention possible le jour même, 7j/7',
    texte: 'Appelez-nous dès les premières piqûres : selon les disponibilités, un technicien passe dans la journée, week-end compris, partout en Île-de-France.',
  },
  heroPrices: [
    { price: '290', label: 'Studio' },
    { price: 'Sur devis', label: 'T2 ou T3' },
    { price: 'Sur devis', label: 'Maison' },
  ],
  trustBar: ['Certibiocide', 'Résultat garanti', 'Devis gratuit', '2 passages inclus', 'Garantie 1 an'],
  benefits: [
    { icon: 'microscope', title: 'Insecticides professionnels', text: 'Les punaises de lit ont développé des résistances aux produits grand public. Nos biocides professionnels agissent sur le système nerveux et restent actifs plusieurs semaines après le passage.' },
    { icon: 'thermo', title: 'Cryogénie et vapeur sèche', text: 'La neige carbonique (environ −78 °C) ou la vapeur sèche à très haute température tuent les punaises et leurs œufs au contact, sans produit chimique. Idéal pour matelas, sommiers, canapés et plinthes : le logement reste utilisable juste après.' },
    { icon: 'search', title: 'Inspection complète du logement', text: 'Matelas, sommier, cadre de lit, plinthes, prises électriques, meubles proches du lit : nos techniciens inspectent chaque recoin pour ne laisser aucun foyer sans traitement.' },
    { icon: 'shield', title: 'Protocole complet, toutes les pièces', text: 'Notre protocole s\'appuie sur les recommandations officielles (ANSES, ministère de la Santé). Traitement de toutes les zones de vie, pas seulement le lit.' },
  ],
  process: [
    { title: 'Diagnostic téléphonique', text: 'Vous décrivez les symptômes (piqûres, taches, observations). Nous évaluons le niveau d\'infestation et confirmons le tarif. Devis gratuit, sans engagement.' },
    { title: 'Inspection sur place', text: 'Le technicien inspecte l\'ensemble du logement avec une lampe UV. Identification de tous les foyers et cartographie complète avant traitement.' },
    { title: 'Traitement adapté à votre logement', text: 'Cryogénie ou vapeur sèche sur la literie, les meubles et les recoins, et insecticide rémanent de 4e génération sur les surfaces infestées et adjacentes. Après un traitement insecticide, vous quittez le logement 4 heures en moyenne.' },
    { title: 'Suivi & garantie', text: 'Retour sous 15 jours pour contrôle. En cas de réapparition dans le délai de garantie, intervention gratuite. Vous dormez tranquille.' },
  ],
  apresProcess: (
    <>
      <CyclePunaises />
      <VideosDetaillees
        renvoiHaut
        titre="Nos chantiers de punaises de lit en vidéo : ce que nous avons fait"
        intro={PUNAISES_VIDEOS_INTRO}
        videos={PUNAISES_VIDEOS}
        photos={['creteilLattes1', 'cryoFoyer', 'litEnfant']}
      />
    </>
  ),
  methodes: METHODES_PUNAISES,
  guide: GUIDE_PUNAISES,
  contenu: CONTENU_PUNAISES,
  pricing: [
    {
      label: 'Studio',
      price: '290',
      description: 'Une pièce principale',
      features: ['2 passages inclus', 'Insecticide professionnel', 'Zones à risque traitées', 'Garantie 1 an'],
    },
    {
      label: 'T2 ou T3',
      price: 'Sur devis',
      description: 'Appartement de 2 à 3 pièces',
      features: ['2 passages inclus', 'Toutes pièces traitées', 'Produit rémanent longue durée', 'Cryogénie ou vapeur sèche possible', 'Garantie 1 an'],
      highlight: true,
    },
    {
      label: 'Maison / Grande surface',
      price: 'Sur devis',
      description: 'T4, maison ou forte infestation',
      features: ['2 passages inclus', 'Traitement thermique en option', 'Toutes pièces + mobilier', 'Garantie 1 an'],
      cta: 'Obtenir un devis gratuit',
    },
  ],
  // FAQ optimisée le 16/11/2026 : questions les plus posées en ligne, réponse directe dans la 1re phrase (citable par Google et les IA),
  // faits sourcés : ANSES « Les punaises de lit en 13 questions » (2023), stop-punaises.gouv.fr, loi n° 2018-1021 (ELAN).
  faq: [
    { q: 'Comment savoir si j’ai des punaises de lit ?', a: 'Cherchez trois signes : des piqûres groupées au réveil, des petits points noirs (leurs déjections) sur le matelas, les lattes ou les plinthes, et des traces de sang sur les draps. Selon l’ANSES, elles vivent surtout dans la chambre, sous le matelas et dans le sommier, à l’abri de la lumière. Le plus sûr est de voir l’insecte lui-même : envoyez-nous une photo, nos techniciens vous répondent gratuitement.' },
    { q: 'À quoi ressemblent les piqûres de punaises de lit ?', a: 'Ce sont des boutons rouges qui démangent, souvent groupés par 3 ou 4, parfois alignés, sur les parties découvertes pendant la nuit (visage, cou, bras, jambes). L’ANSES précise qu’elles ressemblent aux piqûres de moustique ou de puce : les piqûres seules ne suffisent donc pas à confirmer une infestation, il faut trouver l’insecte ou ses traces.' },
    { q: 'À quoi ressemble une punaise de lit ?', a: 'L’adulte a la taille d’un pépin de pomme (5 à 7 mm) : corps plat, ovale, brun-rouge, visible à l’œil nu. Les jeunes sont plus petites et plus claires, les œufs blancs mesurent environ 1 mm. Les punaises de lit ne volent pas et ne sautent pas (stop-punaises.gouv.fr) : elles marchent jusqu’à vous la nuit.' },
    { q: 'Les punaises de lit transmettent-elles des maladies ?', a: 'Non. L’ANSES indique que la punaise de lit n’est pas considérée comme vectrice de maladies. Ses piqûres provoquent en revanche des démangeaisons, parfois des réactions allergiques, et les nuits perturbées entraînent fatigue, troubles du sommeil et anxiété. En cas de forte réaction cutanée, consultez votre médecin.' },
    { q: 'D’où viennent les punaises de lit ?', a: 'Elles arrivent presque toujours dans des bagages, des vêtements ou des meubles. Selon l’enquête citée par l’ANSES, environ 40 % des infestations font suite à un séjour à l’hôtel ou en location de vacances et 20 % à l’achat d’objets d’occasion. Ce n’est pas une question de propreté : un logement impeccable peut être infesté. Entre 2017 et 2022, 11 % des foyers français en ont eu.' },
    { q: 'Comment se débarrasser des punaises de lit définitivement ?', a: 'Avec un traitement professionnel en 2 passages, combiné à une bonne préparation du logement. Chez Allo Nuisible IDF, le technicien choisit selon votre logement la cryogénie, la vapeur sèche (sans produit) ou un insecticide professionnel rémanent, souvent en les associant. Le second passage, 10 à 15 jours plus tard, élimine les punaises sorties des œufs. Le traitement est garanti 1 an.' },
    { q: 'Les bombes et sprays anti-punaises du commerce sont-ils efficaces ?', a: 'Non. Le site officiel stop-punaises.gouv.fr indique que les insecticides courants sont inefficaces contre les punaises de lit et présentent des risques pour la santé. L’ANSES rappelle qu’ils favorisent les résistances et peuvent provoquer des intoxications : utilisés seuls, ils dispersent les punaises dans les autres pièces sans régler le problème.' },
    { q: 'Combien de temps faut-il pour se débarrasser des punaises de lit ?', a: 'Comptez en général 2 à 4 semaines avec un professionnel : 2 passages espacés de 10 à 15 jours, le temps que les œufs éclosent (7 à 15 jours) pour traiter les jeunes punaises. Selon l’ANSES, les deux tiers des foyers touchés en viennent à bout en moins de 2 mois. Plus vous agissez tôt, plus c’est rapide.' },
    { q: 'Pourquoi faut-il deux passages contre les punaises de lit ?', a: 'Parce qu’aucun traitement ne détruit à coup sûr tous les œufs cachés. Le premier passage élimine les punaises présentes ; le second, 10 à 15 jours plus tard, élimine les jeunes sorties des œufs entre-temps, avant qu’elles ne pondent à leur tour (une femelle pond 5 à 15 œufs par jour selon l’ANSES). Chez nous, les 2 passages sont toujours inclus dans le prix.' },
    { q: 'Combien coûte un traitement contre les punaises de lit ?', a: 'Chez Allo Nuisible IDF, à partir de 290 € TTC pour un studio ou un T1, 2 passages et garantie 1 an inclus ; sur devis gratuit pour un T2, un T3 ou une maison. Le prix dépend de la surface, du nombre de pièces touchées et de la méthode. Pour comparaison, l’ANSES estime le coût moyen de la lutte à près de 900 € par foyer.' },
    { q: 'Faut-il jeter son matelas en cas de punaises de lit ?', a: 'Non, dans la plupart des cas : un matelas se traite, à la vapeur sèche, par cryogénie ou à l’insecticide. Ne le déplacez surtout pas dans une autre pièce avant le traitement, vous étendriez l’infestation. S’il est très abîmé, le technicien vous le dira ; dans ce cas, emballez-le dans du plastique avant de le sortir et rendez-le inutilisable.' },
    { q: 'Comment laver le linge contre les punaises de lit ?', a: 'Lavez à 60 °C ou plus, ou passez au sèche-linge au moins 30 minutes à la température la plus haute (stop-punaises.gouv.fr). Pour ce qui ne se lave pas, mettez-le dans un sac fermé au congélateur pendant 72 heures. Transportez le linge jusqu’à la machine dans des sacs fermés, puis rangez-le propre dans des sacs neufs jusqu’à la fin du traitement.' },
    { q: 'Comment préparer son logement avant le traitement ?', a: 'Rangez, aspirez et dégagez l’accès aux lits, plinthes et prises : l’ANSES recommande de nettoyer et d’aspirer avant tout traitement. Lavez le linge à 60 °C, videz les tables de chevet, jetez le sac d’aspirateur dans un sac fermé. Ne déplacez rien vers une autre pièce. Avant l’intervention, nous vous envoyons la liste complète des consignes.' },
    { q: 'Faut-il quitter le logement pendant le traitement ?', a: 'Avec un insecticide, oui, environ 4 heures, animaux domestiques compris, puis on aère avant de revenir. Avec la cryogénie ou la vapeur sèche, ce n’est pas nécessaire : aucun produit n’est diffusé. Nos techniciens vous donnent toutes les consignes de préparation avant l’intervention.' },
    { q: 'Combien de temps une punaise de lit peut-elle vivre sans manger ?', a: 'Plusieurs mois, selon l’ANSES. C’est pourquoi laisser le logement vide quelques semaines ou partir en vacances ne suffit pas à les faire disparaître : elles attendent votre retour. Seul un traitement complet, avec deux passages, vient à bout de l’infestation.' },
    { q: 'Existe-t-il un traitement contre les punaises de lit sans insecticide ?', a: 'Oui. La cryogénie (neige carbonique, environ −78 °C) et la vapeur sèche à très haute température tuent les punaises et leurs œufs au contact, sans produit chimique ; l’ANSES recommande d’ailleurs de privilégier les méthodes non chimiques. L’insecticide rémanent, lui, continue d’agir après le passage. Selon l’infestation, le technicien vous propose l’une, l’autre ou les deux.' },
    { q: 'Locataire : qui paie le traitement des punaises de lit ?', a: 'En principe le propriétaire. Depuis la loi ELAN (loi n° 2018-1021 du 23 novembre 2018), le bailleur doit louer un logement exempt de toute infestation d’espèces nuisibles et parasites. Prévenez-le par écrit dès les premiers signes. En cas de difficulté, le numéro national Info logement indigne (0806 706 806) vous oriente ; votre CAF peut aussi aider dans certains cas.' },
    { q: 'Comment savoir si le traitement a fonctionné ?', a: 'Plus de nouvelles piqûres et plus de nouvelles traces (points noirs, mues, punaises vivantes) dans les semaines qui suivent le second passage. Attention : ne plus en voir pendant quelques jours ne prouve pas qu’elles ont disparu. Si elles reviennent dans l’année, notre garantie de 1 an couvre une nouvelle intervention.' },
    { q: 'Proposez-vous la détection canine des punaises de lit ?', a: 'Oui, sur devis, à Paris et dans toute l’Île-de-France. Un chien dressé repère les punaises à l’odeur, même cachées : utile quand l’infestation débute, avant un traitement pour localiser les foyers ou après pour vérifier le résultat. Chaque signalement se confirme à l’œil. Voir notre guide sur la détection canine.' },
  ],
  avis: ['jo', 'lina', 'christine'],
  photos: ['cryoFoyer', 'cryoSalle', 'litCryo', 'litEnfant'],
  chantier: {
    photos: ['creteilLattes1', 'cryoFoyer'],
    videos: PUNAISES_VIDEOS.slice(0, 5).map((v) => ({ src: v.src, legende: v.legende, banniere: true, poster: v.poster })),
    titre: 'Nos chantiers de punaises de lit en images',
    vignettes: 'Nos interventions en vidéo',
  },
  galerieDansContenu: true,
  related: {
    vedette: { title: 'Punaises de lit : les villes les plus demandées', links: PUNAISES_DEMANDEES },
    extra: maillageService('/services/punaises-de-lit'),
    villes: { title: 'Punaises de lit par ville', links: VILLES_PUNAISES.map((v) => ({ href: `/punaises-de-lit/${v.slug}`, label: `Punaises de lit ${v.a} (${v.code})` })) },
    guides: { title: 'Nos guides sur les punaises de lit', links: [{ href: '/services/cryogenie-punaises-de-lit', label: 'Traitement écologique par cryogénie, sans biocide, en vidéos' }, { href: '/blog/punaises-de-lit-creteil-sommier-lattes', label: 'Chantier à Créteil : punaises dans les sommiers' }, { href: '/blog/punaises-de-lit-paris-12-grosse-infestation', label: 'Chantier à Paris 12e : résultat du premier passage' }, { href: '/blog/cryogenie-punaises-de-lit-sommier', label: 'Chantier à L’Haÿ-les-Roses : cryogénie sur un sommier' }, ...Object.entries(GUIDES_PUNAISES).map(([slug, label]) => ({ href: `/blog/${slug}`, label }))] },
  },
  ctaTitle: 'Des punaises de lit ?\nOn intervient dès aujourd\'hui.',
}

export const metadata = pageMetadata({
  title: 'Punaises de lit : traitement dès 290 €, 2 passages inclus',
  description: 'Cryogénie, vapeur sèche ou insecticide rémanent selon votre logement, par des techniciens certifiés. Résultat garanti, 7j/7, devis gratuit.',
  path: '/services/punaises-de-lit',
})

export default function PunaisesPage() {
  return <ServicePageTemplate data={{ ...data, secteur: secteurService('/services/punaises-de-lit') }} />
}
