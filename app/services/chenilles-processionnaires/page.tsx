import { pageMetadata } from '@/lib/seo'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import { VILLES_CHENILLES, GUIDES_CHENILLES } from '@/lib/villes-chenilles'

// Méthodes présentées : uniquement celles sans certification spécifique (retrait des nids, écopièges,
// pièges à phéromones, conseils). Le Bacillus thuringiensis (produit phytosanitaire, Certiphyto) n'est pas annoncé.
const data: ServiceData = {
  badge: 'Pins · Chênes · Retrait des nids · Écopièges',
  heroTitle: 'Chenilles processionnaires',
  heroHighlight: 'Protégez votre jardin',
  heroDescription: 'Retrait et destruction des nids, écopièges sur les troncs, pièges à phéromones et conseils de prévention, par des techniciens équipés contre les poils urticants.',
  heroPrices: [
    { price: 'devis', label: 'Jardin' },
    { price: 'devis-2', label: 'Grand terrain' },
    { price: 'devis-3', label: 'Copropriété' },
  ],
  trustBar: ['Équipement de protection', 'Pins et chênes', 'Écopièges', 'Pièges à phéromones', 'Conseils de prévention'],
  benefits: [
    { icon: 'shield', title: 'Intervention protégée', text: 'Les poils urticants des chenilles provoquent démangeaisons et irritations des yeux et des voies respiratoires. Nos techniciens interviennent avec combinaison, gants, masque et lunettes.' },
    { icon: 'search', title: 'Retrait des nids', text: 'Repérage et coupe des nids dans les pins, les cèdres et les chênes, en hauteur si besoin, puis destruction sécurisée pour que les poils ne se dispersent pas.' },
    { icon: 'net', title: 'Écopièges et phéromones', text: 'Colliers posés sur le tronc pour capturer les chenilles qui descendent en procession, et pièges à phéromones en été contre les papillons qui pondent.' },
  ],
  process: [
    { title: 'Diagnostic', text: 'Identification de l\'espèce (processionnaire du pin ou du chêne), comptage des nids, repérage des arbres touchés et des accès. Devis gratuit.' },
    { title: 'Retrait des nids', text: 'Coupe et destruction des nids, de préférence en hiver pour la processionnaire du pin, avant que les chenilles ne descendent des arbres.' },
    { title: 'Écopièges et pièges', text: 'Pose d\'écopièges sur les troncs avant la descente des chenilles, et de pièges à phéromones l\'été pour limiter la ponte de l\'année suivante.' },
    { title: 'Conseils et suivi', text: 'Calendrier d\'intervention pour l\'année suivante, conseils de prévention (nichoirs à mésanges, choix des essences) et suivi des arbres.' },
  ],
  pricing: [
    { label: 'Jardin', price: 'Sur devis', description: 'Quelques arbres', features: ['Diagnostic', 'Retrait des nids', 'Écopièges si besoin', 'Conseils de prévention'] },
    { label: 'Grand terrain', price: 'Sur devis', description: 'Propriété, plusieurs arbres touchés', features: ['Diagnostic complet', 'Retrait des nids en hauteur', 'Écopièges et pièges à phéromones', 'Calendrier annuel'], highlight: true },
    { label: 'Copropriété', price: 'Sur devis', description: 'Résidences, espaces verts', features: ['Intervention coordonnée', 'Sécurisation des zones', 'Rapport d\'intervention', 'Suivi saisonnier'], cta: 'Demander un devis' },
  ],
  faq: [
    { q: 'Comment reconnaître les chenilles processionnaires ?', a: 'Elles se déplacent en file indienne, d\'où leur nom. Celle du pin forme en hiver des nids blancs et soyeux au bout des branches de pins et de cèdres. Celle du chêne installe ses nids sur le tronc et les grosses branches des chênes, au printemps et en été.' },
    { q: 'Les chenilles processionnaires sont-elles dangereuses ?', a: 'Oui. Leurs poils urticants, libérés au moindre contact et transportés par le vent, provoquent des démangeaisons, des irritations des yeux et parfois des voies respiratoires. Pour les chiens, un contact avec la gueule peut provoquer des lésions graves : consultez un vétérinaire en urgence.' },
    { q: 'Quand faut-il intervenir ?', a: 'Pour la processionnaire du pin, le retrait des nids se fait en hiver, et les écopièges se posent avant la descente des chenilles à la fin de l\'hiver. Les pièges à phéromones se placent l\'été. Pour la processionnaire du chêne, on intervient au printemps et en été.' },
    { q: 'Puis-je enlever un nid moi-même ?', a: 'C\'est déconseillé : sans équipement, vous risquez d\'être exposé aux poils urticants, qui restent actifs longtemps, même dans les vieux nids. Faites appel à un professionnel équipé.' },
    { q: 'Que faire en cas de contact avec une chenille ?', a: 'Ne vous frottez pas, rincez abondamment la peau à l\'eau, changez de vêtements et lavez-les. En cas de réaction aux yeux, de gêne respiratoire ou de réaction importante, consultez un médecin ou appelez un centre antipoison.' },
  ],
  related: {
    villes: { title: 'Chenilles processionnaires par ville', links: VILLES_CHENILLES.map((v) => ({ href: `/chenilles-processionnaires/${v.slug}`, label: `Chenilles processionnaires ${v.a} (${v.code})` })) },
    guides: { title: 'Nos guides', links: Object.entries(GUIDES_CHENILLES).map(([slug, label]) => ({ href: `/blog/${slug}`, label })) },
  },
  ctaTitle: 'Des chenilles processionnaires ?\nOn intervient rapidement.',
}

export const metadata = pageMetadata({
  title: 'Chenilles processionnaires : retrait des nids, écopièges',
  description: 'Chenilles processionnaires du pin et du chêne : retrait des nids, écopièges, pièges à phéromones et prévention, par des techniciens équipés. Devis gratuit.',
  path: '/services/chenilles-processionnaires',
})

export default function ChenillesPage() {
  return <ServicePageTemplate data={data} />
}
