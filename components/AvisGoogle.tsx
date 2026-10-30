import { AVIS_GOOGLE, FICHE_GOOGLE_URL, NOTE_GOOGLE, type CleAvis } from '@/lib/avis-google'

const ACCENT = '#E8441A'

// Vrais avis de la fiche Google (lib/avis-google.ts). `ordre` met en avant l'avis le plus proche du service.
export default function AvisGoogle({ ordre = ['jo', 'lauren', 'lisa'], fond = '#0d0d0d' }: { ordre?: CleAvis[]; fond?: string }) {
  return (
    <section className="py-16 md:py-24 px-4" style={{ background: fond }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: ACCENT }}>Avis Google</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Ce que disent nos clients</h2>
          <p className="text-white/60 text-sm">
            <span className="text-yellow-400">★★★★★</span>{' '}
            <strong className="text-white">{NOTE_GOOGLE.note}/5</strong> sur {NOTE_GOOGLE.nombre} avis Google. Avis reproduits mot pour mot.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {ordre.map((cle) => {
            const a = AVIS_GOOGLE[cle]
            return (
              <figure key={cle} className="rounded-2xl p-6 flex flex-col"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm flex-shrink-0"
                    style={{ background: ACCENT }}>
                    {a.auteur[0]}
                  </div>
                  <figcaption>
                    <p className="font-black text-white text-sm leading-none mb-1">{a.auteur}</p>
                    <p className="text-white/40 text-xs">{a.sujet} · septembre 2026</p>
                  </figcaption>
                </div>
                <p className="text-yellow-400 text-xs mb-3" aria-label="5 étoiles sur 5">★★★★★</p>
                <blockquote style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', lineHeight: 1.7 }}>{a.texte}</blockquote>
              </figure>
            )
          })}
        </div>
        <div className="text-center mt-10">
          <a href={FICHE_GOOGLE_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-white px-7 py-3.5 rounded-full text-sm"
            style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
            Lire nos {NOTE_GOOGLE.nombre} avis sur Google
          </a>
        </div>
      </div>
    </section>
  )
}
