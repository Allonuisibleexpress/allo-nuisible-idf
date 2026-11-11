// Infographie « Cycle de vie de la punaise de lit » (11/11/2026). Images : public/infographies (SVG large, SVG mobile, JPG).
// Chiffres sourcés : EPA (tailles), Université du Kentucky (éclosion, durée totale), Wikipédia d'après P. Delaunay 2015 et
// Reinhardt & Siva-Jothy 2007 (durée des stades, durée de vie, nombre d'œufs), CDC (survie sans repas).
const ACCENT = '#E8441A'
export const BLOG_CYCLE = '/blog/cycle-de-vie-punaise-de-lit'
const ALT = 'Cycle de vie de la punaise de lit : œuf (1 mm, 7 à 15 jours), 5 stades larvaires de 1,5 à 4,5 mm (3 à 15 jours chacun, un repas de sang avant chaque mue), adulte de 5 à 7 mm'

export function ImageCycle({ sources = true }: { sources?: boolean }) {
  return (
    <figure className="m-0">
      <picture>
        <source media="(max-width: 640px)" srcSet="/infographies/cycle-punaise-de-lit-mobile.svg" />
        <img src="/infographies/cycle-punaise-de-lit.svg" alt={ALT} width={1600} height={1000} loading="lazy"
          className="w-full h-auto rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.1)' }} />
      </picture>
      {sources && <figcaption className="text-[11px] text-white/40 mt-2 text-center">
        Sources : EPA, Université du Kentucky, Wikipédia (P. Delaunay 2015 ; Reinhardt &amp; Siva-Jothy 2007), CDC. Dessins à l’échelle.
      </figcaption>}
    </figure>
  )
}

// Bloc pour les pages punaises (service et villes) : infographie + texte court + lien vers le guide détaillé
export default function CyclePunaises({ a, titre, texte }: { a?: string; titre?: string; texte?: string }) {
  return (
    <section id="cycle" className="py-14 md:py-20 px-4 scroll-mt-20" style={{ background: '#0a0a0a' }}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>En images</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
          {titre ?? <>Œuf, larve, adulte : <span style={{ color: ACCENT }}>reconnaissez la punaise de lit à chaque stade</span></>}
        </h2>
        <p className="text-white/65 max-w-3xl mx-auto mb-8 leading-relaxed">
          {texte ?? `Un œuf éclot en 7 à 15 jours, puis la larve passe par 5 stades avant de devenir adulte, avec un repas de sang avant chaque mue. C’est pour toucher les punaises sorties des œufs après le premier passage que notre traitement${a ? ` ${a}` : ''} prévoit toujours 2 passages.`}
        </p>
        <ImageCycle sources={!a} />
        <a href={BLOG_CYCLE} className="inline-flex items-center gap-2 mt-8 rounded-full px-5 py-2.5 text-sm font-bold text-white"
          style={{ background: 'rgba(232,68,26,0.15)', border: '1px solid rgba(232,68,26,0.4)' }}>
          {a ? 'Voir le guide complet' : 'Le guide complet du cycle de vie de la punaise de lit'} →
        </a>
      </div>
    </section>
  )
}
