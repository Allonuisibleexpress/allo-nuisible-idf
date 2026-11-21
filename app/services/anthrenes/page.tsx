import { secteurService } from '@/lib/secteurs'
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
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F0562A' }}>Cycle de vie</p>
        <h2 className="text-2xl md:text-4xl font-black text-white mb-3">Les 4 stades de l’anthrène en photos</h2>
        <p className="text-white/60 max-w-2xl mx-auto mb-10">Le cycle de l’anthrène bigarré dure de 1 à 3 ans selon la température. Dans un logement chauffé, les larves mangent toute l’année. <a href="/blog/cycle-de-vie-anthrene" className="underline font-bold" style={{ color: '#F0562A' }}>Le cycle complet expliqué</a></p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {STADES.map((s) => (
            <figure key={s.titre} className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src={s.src} alt={`Anthrène, ${s.titre.slice(3).toLowerCase()}`} loading="lazy" className="w-full object-cover" style={{ aspectRatio: '4 / 3' }} />
              <figcaption className="p-4">
                <p className="text-white font-black mb-1">{s.titre}</p>
                <p className="text-sm text-white/70 leading-relaxed">{s.texte}</p>
                <p className="text-[11px] text-white/60 mt-2">Photo : {s.credit}, <a href={s.page} target="_blank" rel="noopener noreferrer nofollow" className="underline">{s.licence}</a>, Wikimedia Commons</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

// Galerie (22/11/2026, demande de l'utilisateur : plus de photos) : adultes, larves, dégâts, espèce voisine
const GALERIE = [
  { src: '/anthrenes/anthrene-des-tapis-adulte.jpg', titre: 'L’anthrène des tapis', texte: 'Noir tacheté de blanc, avec une bande rouge orangé au milieu du dos. 2,5 à 3,8 mm.', credit: 'JackyM59', licence: 'CC BY-SA 4.0', page: W + 'Anthr%C3%A8ne_des_tapis_(Anthrenus_scrophulariae).jpg' },
  { src: '/anthrenes/anthrene-des-meubles-adulte.jpg', titre: 'L’anthrène des meubles', texte: 'Anthrenus flavipes, une troisième espèce rencontrée dans les maisons, plus fréquente dans les régions chaudes.', credit: 'CSIRO', licence: 'CC BY 3.0', page: W + 'CSIRO_ScienceImage_2071_Carpet_Beetle_-_Anthrenus_flavipes.jpg' },
  { src: '/anthrenes/anthrene-larve-adulte-laine.jpg', titre: 'Larves et adulte sur un lainage', texte: 'Les dégâts apparaissent là où l’on ne touche à rien : fond de placard, dessous de tapis, pull rangé depuis longtemps.', credit: 'Clemson University, USDA Cooperative Extension', licence: 'Domaine public', page: W + 'Anthrenus_flavipes_larva_adult_wool.jpg' },
  { src: '/anthrenes/degats-anthrene-tissu.jpg', titre: 'Les dégâts sur un tissu', texte: 'Des trous irréguliers, souvent dans les zones peu manipulées et à l’abri de la lumière.', credit: 'Clemson University, USDA Cooperative Extension Slide Series, Bugwood.org', licence: 'CC BY 3.0 US', page: W + 'Anthrenus_flavipes_damage_to_cloth.jpg' },
  { src: '/anthrenes/mues-larves-anthrene.jpg', titre: 'Les mues de la larve', texte: 'Jusqu’à 16 stades larvaires chez l’anthrène bigarré : chaque mue laisse une petite peau brune et velue.', credit: 'Bogdan Nikolovv', licence: 'CC0', page: W + 'All_larval_instars_of_Anthrenus_verbasci_(4-16).png' },
  { src: '/anthrenes/larve-attagene.jpg', titre: 'Ne pas confondre : la larve d’attagène', texte: 'Un cousin de la même famille, plus allongé, brun doré, avec une longue touffe de poils. Même traitement.', credit: 'Ryan Hodnett', licence: 'CC BY-SA 4.0', page: W + 'Black_Carpet_Beetle_(Attagenus_sp.)_Larva_-_Kitchener,_Ontario_2018-01-19_(01).jpg' },
  { src: '/anthrenes/stades-anthrene-gravure.jpg', titre: 'Une gravure de 1910', texte: 'Les stades de l’anthrène : l’adulte (d), la nymphe (c), la larve vue de dessous (b) et de dessus (a).', credit: 'Popular Science Monthly, 1910', licence: 'Domaine public', page: W + 'PSM_V76_D223_Carpet_beetle_and_its_stages_of_development.png' },
]

function Galerie() {
  return (
    <section id="anthrenes-en-photos" className="py-16 px-4" style={{ background: '#080808' }}>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F0562A' }}>Identifier</p>
        <h2 className="text-2xl md:text-4xl font-black text-white mb-3">Les anthrènes en photos : espèces, larves et dégâts</h2>
        <p className="text-white/60 max-w-2xl mx-auto mb-10">Comparez avec ce que vous trouvez chez vous. Un doute ? <a href="https://wa.me/33768077219" className="underline font-bold" style={{ color: '#F0562A' }}>Envoyez-nous une photo sur WhatsApp</a>, nous identifions l’insecte gratuitement.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {GALERIE.map((s) => (
            <figure key={s.src} className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src={s.src} alt={s.titre} loading="lazy" className="w-full object-cover" style={{ aspectRatio: '4 / 3', background: '#111' }} />
              <figcaption className="p-4">
                <p className="text-white font-black mb-1">{s.titre}</p>
                <p className="text-sm text-white/70 leading-relaxed">{s.texte}</p>
                <p className="text-[11px] text-white/60 mt-2">Photo : {s.credit}, <a href={s.page} target="_blank" rel="noopener noreferrer nofollow" className="underline">{s.licence}</a>, Wikimedia Commons</p>
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
  apresProcess: <><Stades /><Galerie /></>,
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
        titre: 'Que mangent les larves d’anthrène ?',
        texte: [
          "La larve digère la **kératine**, la protéine des **poils**, des **plumes**, de la **laine**, de la **soie**, de la **fourrure** et du **cuir**, ainsi que la chitine des **insectes morts**.",
        ],
        liste: [
          '**Tapis et moquettes en laine**, surtout sous les meubles et le long des plinthes.',
          '**Vêtements rangés** : pulls, manteaux, écharpes en laine ou cachemire, au fond du dressing.',
          '**Couettes, oreillers et coussins en plumes**.',
          '**Fourrures, cuir, peaux** et animaux naturalisés.',
          '**Feutres des instruments de musique** rangés longtemps, selon Wikipédia.',
          '**Poils d’animaux et insectes morts** accumulés dans les luminaires, les gaines et derrière les plinthes.',
        ],
      },
      {
        titre: 'Où chercher les larves chez vous, pièce par pièce',
        texte: ['La femelle pond dans un endroit **sec, sombre et peu dérangé**, au plus près de la nourriture. C’est là que notre technicien commence :'],
        liste: [
          '**Chambre et dressing** : fonds de placard, lainages rangés depuis longtemps, dessous du lit où s’accumulent poils et poussière.',
          '**Salon** : dessous et bords du tapis en laine jamais déplacé, dessous du canapé, plinthes.',
          '**Literie** : couette et oreillers en plumes, sommier proche d’une moquette en laine.',
          '**Gaines de ventilation, luminaires, rebords de fenêtre** : insectes morts et adultes au printemps.',
          '**Combles et toiture** (maisons) : nids d’oiseaux sous les tuiles ou derrière un coffre de volet roulant.',
        ],
      },
      {
        titre: 'Les signes qui doivent vous alerter',
        texte: ['Un seul indice peut passer inaperçu. Deux ou trois ensemble signalent presque toujours une colonie installée :'],
        liste: [
          '**Petits coléoptères ronds et tachetés** sur les vitres ou les rebords de fenêtre, au printemps et au début de l’été.',
          '**Larves brunes et velues** de 1 à 5 mm, sous les tapis ou au fond des placards, même en hiver.',
          '**Petites peaux vides et velues** : les mues des larves.',
          '**Trous irréguliers** dans les lainages, tapis rongés « tondus » par endroits.',
          '**Démangeaisons ou plaques irritées** sans piqûre visible : les poils et les mues des larves peuvent provoquer une dermatite (consultez un médecin).',
        ],
      },
      {
        titre: 'Pourquoi un logement chauffé favorise les anthrènes',
        texte: [
          "La température change tout. Une étude de 1958, citée par Wikipédia, a mesuré une **nymphose de 89 jours à 10 °C**, contre **9 jours seulement à 25 °C**. Dans un appartement chauffé, les larves **mangent toute l’année** et la colonie grandit même en hiver.",
          "C’est aussi pour cela que l’**automne et l’hiver** sont de **bons moments pour traiter** : les larves sont regroupées près de leur nourriture, et l’on évite que de nouveaux adultes sortent au printemps pour pondre ailleurs.",
        ],
        encadre: { titre: 'Les erreurs qui font perdre des mois', texte: 'Pulvériser une bombe du commerce au hasard (elle n’atteint pas les larves cachées), jeter tous ses vêtements (la plupart se traitent), oublier le foyer : tant qu’un nid d’oiseaux ou un vieux tapis infesté reste en place, les anthrènes reviennent.' },
      },
      {
        titre: 'Boutiques, hôtels, collections : les anthrènes chez les professionnels',
        texte: [
          "Les anthrènes sont redoutés partout où l’on conserve des **matières animales** : boutiques de vêtements et de tapis, hôtels (moquettes, literie en plumes), musées et collections. **English Heritage**, qui gère des monuments et des collections au Royaume-Uni, leur consacre une fiche dédiée.",
          "Pour les professionnels, nous intervenons **en dehors des heures d’ouverture**, traitons les **pièces fragiles en cryogénie** (sans eau ni produit) et remettons une **attestation d’intervention**. Voir aussi notre page [professionnels](/professionnels).",
        ],
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
  return <ServicePageTemplate data={{ ...data, secteur: secteurService('/services/anthrenes') }} />
}
