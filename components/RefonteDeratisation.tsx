// Dossier local d'une page dératisation refondue (22/11/2026) : société de dératisation, chiffres sourcés, la ville
// quartier par quartier avec photos, intervention, dératiseur, mairie. Données : lib/refonte-deratisation.ts.
// Pages centrées (règle du site). Pas de tiret long.
import { MapPin, Building2, Phone, ExternalLink } from 'lucide-react'
import { enrichi } from '@/components/ArticleService'
import type { RefonteDerat } from '@/lib/refonte-deratisation'

const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }
const surtitre = (t: string) => <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: '#F0562A' }}>{t}</p>

export function RefonteSociete({ r }: { r: RefonteDerat }) {
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
      <div className="max-w-4xl mx-auto text-center">
        {surtitre('Votre société de dératisation')}
        <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-6">{r.societe.titre}</h2>
        <div className="space-y-4 text-white/75 leading-relaxed text-base md:text-lg">
          {r.societe.paras.map((p) => <p key={p.slice(0, 30)}>{enrichi(p)}</p>)}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 text-left">
          {r.chiffres.map((c) => (
            <figure key={c.valeur} className="rounded-2xl p-5 flex flex-col" style={card}>
              <p className="text-3xl font-black mb-2" style={{ color: '#F0562A' }}>{c.valeur}</p>
              <p className="text-white/80 text-sm leading-relaxed flex-1">{c.texte}</p>
              <figcaption className="mt-3 text-[11px] text-white/60">Source : <a href={c.source.url} target="_blank" rel="noopener noreferrer" className="underline">{c.source.label}</a></figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-white/75 leading-relaxed">Rats, punaises de lit, leptospirose : tous nos chiffres sourcés sur les nuisibles en Île-de-France sont réunis dans notre <a href="/barometre-des-nuisibles-punaises-de-lit-deratisation-2026" className="font-bold underline underline-offset-4" style={{ color: '#F0562A' }}>Baromètre des nuisibles 2026</a>.</p>
      </div>
    </section>
  )
}

export function RefonteQuartiers({ r }: { r: RefonteDerat }) {
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: '#080808' }}>
      <div className="max-w-5xl mx-auto text-center">
        {surtitre('Le terrain')}
        <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">{r.quartiers.titre}</h2>
        <p className="text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">{enrichi(r.quartiers.intro)}</p>
        <div className="space-y-8 text-left">
          {r.quartiers.zones.map((z) => (
            <article key={z.nom} className={`rounded-2xl overflow-hidden ${z.photo ? 'md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]' : ''}`} style={card}>
              {z.photo && (
                <figure className="m-0">
                  <img src={z.photo.src} alt={z.photo.alt} loading="lazy" className="w-full h-full object-cover" style={{ aspectRatio: '4 / 3', background: '#111' }} />
                  <figcaption className="px-4 py-2 text-[11px] text-white/60">
                    {z.photo.legende} Photo : {z.photo.credit}, <a href={z.photo.page} target="_blank" rel="noopener noreferrer nofollow" className="underline">{z.photo.licence}</a>, Wikimedia Commons
                  </figcaption>
                </figure>
              )}
              <div className="p-6 md:p-7">
                <h3 className="flex items-center gap-2 text-lg md:text-xl font-black text-white mb-3"><MapPin className="w-5 h-5 flex-shrink-0" style={{ color: '#F0562A' }} aria-hidden="true" />{z.nom}</h3>
                <p className="text-white/75 leading-relaxed">{enrichi(z.texte)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RefonteIntervention({ r }: { r: RefonteDerat }) {
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
      <div className="max-w-5xl mx-auto text-center">
        {surtitre('Étape par étape')}
        <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-10">{r.intervention.titre}</h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left list-none p-0 m-0">
          {r.intervention.etapes.map((e, i) => (
            <li key={e.t} className="rounded-2xl p-5" style={card}>
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full font-black text-white mb-3" style={{ background: '#B8330D' }}>{i + 1}</span>
              <h3 className="text-white font-black mb-2">{e.t}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{enrichi(e.x)}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-white/75 leading-relaxed">Voyez comment nous travaillons sur le terrain : <a href="/blog/deratisation-logement-syndrome-diogene#video" className="font-bold underline underline-offset-4" style={{ color: '#F0562A' }}>notre dératisation filmée à Maisons-Alfort</a>, du ramassage des rats en tenue de protection aux postes contrôlés deux jours après. Toutes nos vidéos : <a href="/nos-interventions" className="font-bold underline underline-offset-4" style={{ color: '#F0562A' }}>nos interventions en vidéo</a>.</p>
      </div>
    </section>
  )
}

export function RefonteDeratiseur({ r }: { r: RefonteDerat }) {
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: '#080808' }}>
      <div className="max-w-4xl mx-auto text-center">
        {surtitre('Ce que nous voyons le plus')}
        <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-10">{r.dératiseur.titre}</h2>
        <div className="space-y-4 text-left">
          {r.dératiseur.cas.map((c) => (
            <div key={c.t} className="rounded-2xl p-5 md:p-6" style={card}>
              <h3 className="text-white font-black text-lg mb-2">{c.t}</h3>
              <p className="text-white/75 leading-relaxed">{enrichi(c.x)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RefonteMairie({ r }: { r: RefonteDerat }) {
  const m = r.mairie
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
      <div className="max-w-4xl mx-auto text-center">
        {surtitre('Les bons interlocuteurs')}
        <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-6">{m.titre}</h2>
        <div className="space-y-4 text-white/75 leading-relaxed">
          {m.paras.map((p) => <p key={p.slice(0, 30)}>{enrichi(p)}</p>)}
        </div>
        {m.contact && (
          <div className="mt-8 rounded-2xl p-6 inline-block text-left max-w-2xl" style={{ background: 'rgba(232,68,26,0.08)', border: '1px solid rgba(232,68,26,0.3)' }}>
            <p className="flex items-start gap-2 text-white/85 leading-relaxed"><Building2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#F0562A' }} aria-hidden="true" />{m.contact.label}</p>
            <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {m.contact.tel && <a href={`tel:+33${m.contact.tel.replace(/\s/g, '').slice(1)}`} className="inline-flex items-center gap-1.5 font-bold text-white underline"><Phone className="w-4 h-4" aria-hidden="true" />{m.contact.tel}</a>}
              {m.contact.lien && <a href={m.contact.lien.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-bold underline" style={{ color: '#F0562A' }}>{m.contact.lien.label} <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" /></a>}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
