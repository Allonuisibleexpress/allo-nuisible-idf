import { pageMetadata } from '@/lib/seo'
import { maillageService } from '@/lib/maillage-services'
import ServicePageTemplate, { ServiceData } from '@/components/ServicePageTemplate'
import { VILLES_ANTHRENES } from '@/lib/villes-anthrenes'

// Traitement des anthrènes (18/11/2026) : demande de l'utilisateur, blog et pages complètes 75/92/94.
// Faits : Wikipédia (Anthrène des tapis, Varied carpet beetle). Prix aligné sur Express (anthrène 120 à 250 €) : dès 120 €.
// « Écologique » = sans aucun produit biocide, toujours défini. Photos : Wikimedia Commons, auteur et licence affichés.
const W = 'https://commons.wikimedia.org/wiki/File:'
const STADES = [
  { src: '/anthrenes/oeuf-anthrene-laine.jpg', titre: '1. L’œuf', texte: 'Minuscule et blanc, pondu par lots de 30 à 60 entre les fibres. Éclosion en 2 à 3 semaines.', credit: 'CSIRO', licence: 'CC BY 3.0', page: W + 'CSIRO_ScienceImage_2072_A_Carpet_Beetle_Egg.jpg' },
  { src: '/anthrenes/larve-anthrene.jpg', titre: '2. La larve', texte: 'Brune et velue, de 1 mm à 4 ou 5 mm. C’est la seule qui abîme laine, tapis, plumes et fourrure.', credit: 'Arnoldius', licence: 'CC BY-SA 4.0', page: W + 'Anthrenus_verbasci_(Larva).jpg' },
  { src: '/anthrenes/cycle-anthrene-4-stades.jpg', titre: '3. La nymphe', texte: 'Blanche, formée à l’abri de la dernière peau de larve (deuxième et troisième sur la photo).', credit: 'CSIRO', licence: 'CC BY 3.0', page: W + 'CSIRO_ScienceImage_2027_Lifecycle_of_the_Carpet_Beetle.jpg' },
  { src: '/anthrenes/anthrene-bigarre-adulte.jpg', titre: '4. L’adulte', texte: 'Coléoptère rond de 2 à 4 mm, tacheté. Il vit environ deux semaines et se nourrit de pollen.', credit: 'Luis Fernández García', licence: 'CC BY-SA 4.0', page: W + 'Anthrenus_verbasci_20200524a.jpg' },
]

function Stades() {
  return (
    <section className="py-16 px-4" style={{ background: '#0b0b0b' }}>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#E8441A' }}>Cycle de vie</p>
        <h2 className="text-2xl md:text-4xl font-black text-white mb-3">Les 4 stades de l’anthrène en photos</h2>
        <p className="text-white/60 max-w-2xl mx-auto mb-10">Le cycle de l’anthrène bigarré dure de 1 à 3 ans selon la température. Dans un logement chauffé, les larves mangent toute l’année. <a href="/blog/cycle-de-vie-anthrene" className="underline font-bold" style={{ color: '#E8441A' }}>Le cycle complet expliqué</a></p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {STADES.map((s) => (
            <figure key={s.titre} className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src={s.src} alt={`Anthrène, ${s.titre.slice(3).toLowerCase()}`} loading="lazy" className="w-full object-cover" style={{ aspectRatio: '4 / 3' }} />
              <figcaption className="p-4">
                <p className="text-white font-black mb-1">{s.titre}</p>
                <p className="text-sm text-white/70 leading-relaxed">{s.texte}</p>
                <p className="text-[11px] text-white/40 mt-2">Photo : {s.credit}, <a href={s.page} target="_blank" rel="noopener noreferrer nofollow" className="underline">{s.licence}</a>, Wikimedia Commons</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

const data: ServiceData = {
  badge: 'Tapis · Lainages · Placards · Literie en plumes',
  devis: 'Devis gratuit anthrènes',
  heroTitle: 'Traitement des anthrènes',
  heroHighlight: 'Larves trouvées, textiles sauvés',
  heroDescription: 'Larves velues sous le tapis, pulls troués, petits insectes ronds sur la fenêtre : nous trouvons le foyer et traitons avec ou sans insecticide, à Paris, dans le Val-de-Marne et les Hauts-de-Seine.',
  heroPrices: [
    { price: '120', label: 'Une pièce' },
    { price: 'Sur devis', label: 'Logement complet' },
    { price: 'Sur devis', label: 'Professionnels' },
  ],
  trustBar: ['Recherche du foyer', 'Vapeur sèche', 'Cryogénie', 'Certibiocide', 'Garantie 1 an'],
  benefits: [
    { icon: 'search', title: 'Recherche du foyer', text: 'Tapis jamais déplacé, dressing, literie en plumes, nid d’oiseaux sous la toiture : sans supprimer la source, les larves reviennent. Nous la cherchons en premier.' },
    { icon: 'thermo', title: 'Vapeur sèche', text: 'Vapeur très chaude et très peu humide sur les tapis, moquettes, canapés et plinthes. Sans aucun produit biocide, elle agit au contact sur les larves et les œufs.' },
    { icon: 'wind', title: 'Cryogénie', text: 'Neige carbonique à environ -78 °C pour les tapis anciens, fourrures et textiles fragiles. Sèche, sans eau, sans produit, sans résidu.' },
    { icon: 'spray', title: 'Pulvérisation ciblée', text: 'Insecticide professionnel appliqué par un technicien Certibiocide sur les plinthes, fentes et bords de moquette quand plusieurs pièces sont touchées.' },
  ],
  process: [
    { title: 'Photo et devis', text: 'Envoyez-nous une photo de l’insecte ou de la larve : nous confirmons qu’il s’agit d’anthrènes et vous donnons le prix. Devis gratuit.' },
    { title: 'Recherche du foyer', text: 'Tapis, placards, dressing, literie en plumes, combles : le technicien trouve d’où viennent les larves et vous montre ce qu’il a trouvé.' },
    { title: 'Aspiration et traitement', text: 'Plinthes, bords de tapis, fonds de placard et fentes du parquet aspirés, puis vapeur sèche, cryogénie ou pulvérisation ciblée selon les textiles.' },
    { title: 'Prévention', text: 'Rangement des lainages, moustiquaires, nids d’oiseaux abandonnés à faire retirer : nous vous laissons un plan simple pour que les anthrènes ne reviennent pas.' },
  ],
  apresProcess: <Stades />,
  titres: { benefits: 'Comment nous éliminons les anthrènes', process: 'Notre intervention, étape par étape', pricing: 'Prix d’un traitement contre les anthrènes', faq: 'Anthrènes : vos questions' },
  guide: {
    sections: [
      {
        titre: 'Anthrène : comment le reconnaître',
        texte: [
          "L'**adulte** est un petit **coléoptère presque rond**, de **2 à 4 mm**, couvert d'écailles **blanches, brunes, jaunes ou orangées**. Les espèces les plus courantes sont l'**anthrène bigarré** (Anthrenus verbasci, 1,7 à 3,5 mm) et l'**anthrène des tapis** (Anthrenus scrophulariae, 2,5 à 3,8 mm, avec des écailles orange au milieu du dos).",
          "La **larve** est **brune**, **allongée** et **couverte de poils**, avec des touffes à l'arrière : les Anglais l'appellent « woolly bear », l'ourson laineux. Elle mesure **4 à 5 mm** en fin de croissance et laisse de petites **peaux vides** à chaque mue.",
        ],
      },
      {
        titre: 'Anthrènes dans la maison : d’où viennent-ils ?',
        texte: ["Les anthrènes vivent d'abord **dehors**, notamment dans les **nids d'oiseaux** (moineaux, martinets), où les larves trouvent plumes, poils et insectes morts. Ils entrent chez vous par plusieurs chemins :"],
        liste: [
          '**Par les fenêtres** ouvertes au printemps : les adultes qui butinaient entrent pour pondre.',
          '**Par les combles et la toiture** : un nid d’oiseaux sous les tuiles ou derrière un volet roulant devient une source permanente.',
          '**Avec des fleurs coupées** du jardin, sur lesquelles se trouvent des adultes.',
          '**Avec des objets d’occasion** : tapis, lainages, fourrures, meubles rembourrés.',
        ],
      },
      {
        titre: 'Pourquoi les anthrènes prolifèrent sans qu’on les voie',
        texte: [
          "Le cycle de l'anthrène bigarré dure **de 1 à 3 ans** selon la température (Wikipédia). Les œufs sont pondus **par lots de 30 à 60** accrochés aux fibres. Les larves **fuient la lumière**, restent près de leur nourriture et, dans un logement chauffé, **mangent toute l'année**.",
          "Résultat : on découvre souvent les dégâts **des mois après** l'arrivée des premiers insectes, au fond d'un placard ou sous un tapis jamais déplacé.",
        ],
        encadre: { titre: 'Des anthrènes sur la fenêtre ?', texte: 'Des adultes à l’intérieur, sur les vitres, au printemps, signalent le plus souvent des larves dans le logement. Ce sont elles qu’il faut chercher.' },
      },
      {
        titre: 'Traitement écologique des anthrènes : ce que l’on entend par là',
        texte: [
          "Une **méthode écologique**, chez nous, est un traitement **sans aucun produit biocide** : uniquement la **chaleur** (vapeur sèche), le **froid** (cryogénie à la neige carbonique, environ -78 °C) et l'**action mécanique** (aspiration). Wikipédia confirme que **la chaleur et le froid sont efficaces contre les larves et les œufs**.",
          "Ces méthodes agissent **au contact** et ne laissent pas de protection après le passage. Elles sont donc associées à la **suppression du foyer** et à la **prévention**. Si plusieurs pièces sont touchées, une **pulvérisation ciblée** peut compléter : nous vous expliquons les options avant d'intervenir.",
        ],
      },
      {
        titre: 'Anthrène, mite ou punaise de lit ?',
        texte: ["Trois insectes souvent confondus. La **larve d'anthrène** est **velue** et **ne pique pas**. La **larve de mite** est **blanchâtre**, souvent dans un **fourreau**, et laisse des fils de soie. La **punaise de lit** est **plate et lisse** et **pique la nuit**. En cas de doute, envoyez-nous une photo : nous vous répondons gratuitement."],
      },
      {
        titre: 'Empêcher le retour des anthrènes',
        texte: ['Après le traitement, quelques gestes suffisent :'],
        liste: [
          '**Aspirez régulièrement** sous les meubles, le long des plinthes et sous les tapis.',
          '**Rangez les lainages propres** dans des housses ou des boîtes fermées.',
          '**Posez des moustiquaires** au printemps dans les pièces où sont stockés les textiles.',
          '**Faites retirer les nids d’oiseaux abandonnés**, hors période de nidification (les nids occupés sont protégés).',
          '**Inspectez les tapis et lainages d’occasion** avant de les faire entrer.',
        ],
      },
    ],
  },
  pricing: [
    { label: 'Une pièce', price: '120', description: 'Recherche du foyer et traitement des textiles', features: ['Recherche du foyer', 'Aspiration minutieuse', 'Vapeur sèche ou cryogénie', 'Garantie 1 an'], highlight: true },
    { label: 'Logement complet', price: 'Sur devis', description: 'Plusieurs pièces, tapis, dressings, combles', features: ['Toutes les pièces touchées', 'Avec ou sans insecticide', 'Plan de prévention', 'Garantie 1 an'] },
    { label: 'Professionnels', price: 'Sur devis', description: 'Boutiques, hôtels, collections', features: ['Intervention planifiée', 'Pièces fragiles en cryogénie', 'Attestation d’intervention', 'Contrat possible'] },
  ],
  avis: ['lisa', 'christine', 'jo'],
  faq: [
    { q: 'Comment savoir si j’ai des anthrènes ?', a: 'Petits coléoptères ronds et tachetés sur les rebords de fenêtre au printemps, larves brunes et velues de 4 à 5 mm sous les tapis ou au fond des placards, petites peaux vides velues, trous irréguliers dans la laine. En cas de doute, envoyez-nous une photo.' },
    { q: 'Les anthrènes piquent-ils ?', a: 'Non. Ni l’adulte ni la larve ne piquent et ils ne transmettent pas de maladie. Les poils et les mues des larves peuvent en revanche irriter la peau (dermatite). Des piqûres alignées au réveil font plutôt penser aux punaises de lit.' },
    { q: 'Combien de temps vit un anthrène ?', a: 'L’adulte vit environ deux semaines. Le cycle complet de l’anthrène bigarré, de l’œuf à l’adulte, dure de 1 à 3 ans selon la température, car la larve peut se développer pendant des mois.' },
    { q: 'Peut-on traiter les anthrènes sans insecticide ?', a: 'Oui : aspiration, vapeur sèche, cryogénie et lavage à 60 °C n’utilisent aucun produit biocide. La chaleur et le froid sont efficaces contre les larves et les œufs. Ces méthodes agissent au contact : il faut aussi supprimer le foyer.' },
    { q: 'Faut-il jeter les tapis et les vêtements touchés ?', a: 'Rarement. La plupart se traitent par aspiration, lavage, vapeur sèche ou cryogénie. On ne jette que les pièces très abîmées ou impossibles à traiter.' },
    { q: 'Pourquoi trouve-t-on des larves d’anthrène en hiver ?', a: 'Dans un logement chauffé, les larves mangent toute l’année. Seuls les adultes sont saisonniers (printemps et début d’été). Des larves en hiver signifient que l’infestation est installée, et c’est un bon moment pour traiter.' },
    { q: 'Les anthrènes viennent-ils des nids d’oiseaux ?', a: 'Souvent. Leurs larves se développent dans les nids de moineaux, de martinets ou de bergeronnettes, riches en plumes et insectes morts. Un nid abandonné sous la toiture peut nourrir une infestation : il se retire hors période de nidification.' },
    { q: 'Combien coûte un traitement contre les anthrènes ?', a: 'À partir de 120 € TTC pour une pièce. Pour un logement complet ou un professionnel, le prix est établi sur devis gratuit, selon le nombre de pièces, les textiles et la méthode choisie. Garantie 1 an.' },
  ],
  related: {
    extra: maillageService('/services/anthrenes'),
    villes: { title: 'Traitement des anthrènes par ville', links: VILLES_ANTHRENES.map((v) => ({ href: `/anthrenes/${v.slug}`, label: `Anthrènes ${v.a} (${v.code})` })) },
    guides: { title: 'Nos guides sur les anthrènes', links: [
      { href: '/blog/cycle-de-vie-anthrene', label: 'Cycle de l’anthrène : chaque stade en photo' },
      { href: '/blog/anthrenes-origine-traitement', label: 'Anthrènes : origine et traitement' },
      { href: '/blog/mites-vetements-origine-traitement-prevention', label: 'Mites des vêtements : les différences' },
      { href: '/blog/vapeur-seche-punaises-de-lit', label: 'La vapeur sèche : principe et limites' },
      { href: '/blog/cryogenie-punaises-de-lit', label: 'La cryogénie : comment ça marche' },
    ] },
  },
  ctaTitle: 'Des larves velues dans vos tapis ?\nOn trouve le foyer.',
}

export const metadata = pageMetadata({
  title: 'Anthrènes : traitement dès 120 €, avec ou sans produit',
  description: 'Larves velues, tapis et pulls troués ? Nous trouvons le foyer et traitons les anthrènes (vapeur, cryogénie). Paris, 94, 92. Dès 120 € TTC.',
  path: '/services/anthrenes',
})

export default function AnthrenesPage() {
  return <ServicePageTemplate data={data} />
}
