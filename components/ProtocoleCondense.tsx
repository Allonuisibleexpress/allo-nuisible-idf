// Protocole d'intervention en version condensée pour les pages nuisible + ville (10/11/2026).
// Le texte complet est sur la page service (ancre #protocole) ; ici, l'essentiel, en une seule version rédigée.
import NextImage from 'next/image'
import { PHOTOS_CHANTIERS, type PhotoKey, type PhotoChantier } from '@/lib/photos-chantiers'

const ACCENT = '#E8441A'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }

export type Protocole = {
  titre: string // avec {a}
  intro: string
  etapes: { titre: string; texte: string; lien?: { href: string; label: string; photo?: PhotoKey } }[]
  complet: { href: string; label: string }
}

function g(t: string) {
  return t.split(/(\*\*[^*]+\*\*)/g).map((m, i) => (m.startsWith('**') ? <strong key={i} className="text-white font-bold">{m.slice(2, -2)}</strong> : m))
}

export default function ProtocoleCondense({ p, a }: { p: Protocole; a: string }) {
  const r = (t: string) => t.replaceAll('{a}', a).replaceAll(' ?', ' ?')
  return (
    <section id="protocole" className="py-14 md:py-20 px-4 scroll-mt-20" style={{ background: '#0b0b0b' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 text-center leading-tight">{r(p.titre)}</h2>
        <p className="text-white/60 mb-8 max-w-3xl mx-auto text-center leading-relaxed">{g(r(p.intro))}</p>
        <ol className="space-y-4">
          {p.etapes.map((e, i) => (
            <li key={e.titre} className="rounded-2xl p-5 md:p-6" style={card}>
              <div className={e.lien?.photo ? 'grid md:grid-cols-[minmax(0,1fr)_220px] gap-5 items-start' : ''}>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-black text-white" style={{ background: ACCENT }}>{i + 1}</span>
                  <div>
                    <h3 className="font-black text-white text-lg mb-1.5">{r(e.titre)}</h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">{g(r(e.texte))}</p>
                    {e.lien && !e.lien.photo && <a href={e.lien.href} className="inline-block mt-2 text-sm font-bold underline" style={{ color: ACCENT }}>{e.lien.label} →</a>}
                  </div>
                </div>
                {e.lien?.photo && (
                  <a href={e.lien.href} className="block rounded-xl overflow-hidden group" style={card}>
                    <div className="relative w-full h-36">
                      <NextImage src={PHOTOS_CHANTIERS[e.lien.photo].src} alt={PHOTOS_CHANTIERS[e.lien.photo].alt} fill sizes="220px" style={{ objectFit: 'cover', objectPosition: (PHOTOS_CHANTIERS[e.lien.photo] as PhotoChantier).cadrage }} />
                    </div>
                    <p className="p-2.5 text-xs font-bold text-center group-hover:underline" style={{ color: ACCENT }}>{e.lien.label} →</p>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
        <p className="text-center mt-8">
          <a href={p.complet.href} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white" style={{ background: 'rgba(232,68,26,0.15)', border: '1px solid rgba(232,68,26,0.4)' }}>{p.complet.label} →</a>
        </p>
      </div>
    </section>
  )
}

// ── Textes ──
export const PROTOCOLE_PUNAISES: Protocole = {
  titre: 'Traitement des punaises de lit {a} : notre protocole en détail',
  intro: 'Le technicien se déplace chez vous {a}, le **devis est gratuit**. Voici exactement ce qu’il fait, de l’inspection au second passage.',
  etapes: [
    { titre: 'Une inspection minutieuse, latte par latte', texte: 'Il inspecte chaque endroit où l’on soupçonne des punaises : **coutures du matelas**, tête de lit, **lattes du sommier retirées et contrôlées une par une** (avec leurs trous de fixation), meubles proches. Si nécessaire, il **enlève les plinthes** et vérifie **derrière le papier peint** décollé et les prises. Une fois les punaises trouvées ou **le nid localisé**, il prépare l’intervention.', lien: { href: '/blog/punaises-de-lit-creteil-sommier-lattes', label: 'Exemple : punaises dans les lattes', photo: 'creteilLattes1' } },
    { titre: 'Vapeur sèche : la chaleur, sans produit', texte: 'Une **vapeur sèche à très haute température** est projetée sur le matelas, le sommier, le canapé et les recoins. La chaleur **tue les punaises et leurs œufs** au contact. Aucun produit n’est déposé : la pièce est utilisable juste après.' },
    { titre: 'Cryogénie : la neige carbonique à −78 °C', texte: 'Le technicien vient avec ses **bonbonnes de CO2**, comme sur nos vidéos. La **neige carbonique** projetée à environ −78 °C tue les punaises et leurs œufs par **choc thermique**, sans eau ni résidu.', lien: { href: '/services/cryogenie-punaises-de-lit', label: 'Voir une intervention en cryogénie', photo: 'cryoSalle' } },
    { titre: 'Insecticide professionnel : chaque recoin traité', texte: 'Le technicien **pulvérise chaque recoin** : plinthes, sols, **parquet** (le produit pénètre dans les interstices). En **nébulisation**, une **pellicule invisible** d’insecticide se dépose aussi sur les **murs et le plafond**. Selon le produit, il reste actif **de 30 à 90 jours** (la rémanence). Ces produits professionnels sont réservés aux techniciens titulaires du **Certibiocide**. Vous revenez chez vous après **4 heures en moyenne**.' },
    { titre: 'Deux passages, garantie d’un an', texte: 'Les œufs pondus avant le traitement **éclosent ensuite** : le **second passage** élimine ces jeunes punaises avant qu’elles ne pondent. Les **deux passages sont inclus dès 290 €**, avec une **garantie d’un an**.' },
  ],
  complet: { href: '/services/punaises-de-lit#protocole', label: 'Lire le protocole complet, méthode par méthode' },
}

export const PROTOCOLE_DERATISATION: Protocole = {
  titre: 'Dératisation {a} : notre protocole en détail',
  intro: 'Une dératisation réussie, c’est **d’abord tout un travail d’observation**. Voici ce que fait notre technicien chez vous {a}, avant, pendant et après l’intervention. **Devis gratuit.**',
  etapes: [
    { titre: 'L’observation : lire les traces des rongeurs', texte: 'Avant de poser quoi que ce soit, le technicien **recherche les accès** (tuyaux, soupiraux, bas de portes, fissures), **repère les crottes** (leur forme dit si c’est un rat ou une souris), les **trous et les galeries**, les **traces d’urine** et les coulées grasses le long des murs, les **odeurs** et les **dégâts** (câbles rongés, isolant arraché, emballages percés). Ce repérage dessine le trajet des rongeurs.', lien: { href: '/blog/rat-cheminee-intervention', label: 'Exemple : trous de rats repérés', photo: 'trouRat1' } },
    { titre: 'Postes d’appâtage sécurisés', texte: 'La méthode la plus courante : le raticide est fixé dans des **boîtes verrouillées à clé**, hors de portée des enfants et des animaux, posées **sur les trajets repérés**. L’appât agit en différé, ce qui permet de toucher **toute la colonie**.', lien: { href: '/blog/deratisation-logement-syndrome-diogene', label: 'Voir un chantier de dératisation', photo: 'ratDiogene' } },
    { titre: 'Méthode alternative : le piège Ekomille', texte: 'Si vous ne voulez pas de mort-aux-rats, nous posons un **piège multicapture Ekomille** sur le passage le plus fréquenté, avec des appâts alimentaires. Le rongeur reste dans une **cuve fermée**, au lieu d’aller mourir dans une cloison.' },
    { titre: 'Pièges et colmatage des accès', texte: 'Des **pièges mécaniques** complètent le dispositif là où c’est utile. Les accès trouvés sont **bouchés** avec de la laine d’acier, du grillage fin ou du mortier : sans cette étape, d’autres rongeurs reviennent.' },
    { titre: 'Suivi et garantie d’un an', texte: 'Le technicien **revient relever les postes**, recharge ceux qui sont consommés et ajuste le dispositif. La dératisation est **garantie un an**, dès **120 €** pour un appartement.' },
  ],
  complet: { href: '/services/deratisation#protocole', label: 'Lire le protocole complet, méthode par méthode' },
}
