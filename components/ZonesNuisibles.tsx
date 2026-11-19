// Contenu nuisible par nuisible des pages /zones/[département] (19/11/2026) : En bref, sommaire, tableau des prix,
// une section par nuisible (texte local, méthode, prix, liens vers la page département, les villes et les guides),
// vrais chantiers du département. Données : lib/zones-departements-contenu.ts.
import NextImage from 'next/image'
import { ArrowRight, MapPin, BookOpen } from 'lucide-react'
import { PHOTOS_CHANTIERS, type PhotoKey, type PhotoChantier } from '@/lib/photos-chantiers'
import { Filigrane } from '@/components/MediasChantier'
import { PestIcon, type PestKey } from '@/components/PestIcons'
import { NUISIBLES_ZONES, CONTENU_ZONES } from '@/lib/zones-departements-contenu'
import { SERVICES_DEP, estDep } from '@/lib/departements-services'
import { villesFamilleDep } from '@/lib/services-ville'
import { BoutonWhatsApp, LienWhatsApp } from '@/components/LienWhatsApp'
import { prixHref } from '@/lib/prix-liens'

const ICONES: Record<string, PestKey> = {
  rats: 'deratisation', souris: 'rongeurs', punaises: 'punaises-de-lit', cafards: 'cafards-blattes', fourmis: 'fourmis', frelons: 'guepes-frelons',
  chenilles: 'chenilles', pigeons: 'pigeons', puces: 'acariens', acariens: 'acariens', anthrenes: 'anthrenes', desinfection: 'desinfection',
}
// Vraies photos de chantier par nuisible (19/11/2026, demande de l'utilisateur : « rajoute des photos »).
// 2 photos par section, choisies en tournant selon le département pour ne pas répéter les mêmes d'une page à l'autre.
const PHOTOS: Partial<Record<string, PhotoKey[]>> = {
  rats: ['trouRat1', 'ratPiege', 'ratPlaque', 'trouRat2', 'trouRat3', 'ratDiogene'],
  souris: ['sourisGlu', 'sourisAirbnb', 'rongeursGlu'],
  punaises: ['creteilLattes1', 'vincennesMortes1', 'litCryo', 'cryoFoyer', 'creteilLattes2', 'vincennesMortes2', 'litEnfant', 'cryoSalle'],
  cafards: ['cafardsSol', 'cafardsTiroir', 'cafardsMeuble', 'cafardsTiroir2'],
  frelons: ['frelonsPerche', 'frelonsArbre', 'frelonsNacelle1', 'frelonsPorte', 'nidGuepes', 'frelonsAsiatiques', 'frelonsBuissonTech', 'frelonsEcoleNid'],
  pigeons: ['balconEncombre', 'balcon', 'toit'],
  desinfection: ['diogeneNettoyage', 'diogeneCrottes'],
}
const ORDRE_DEP = ['paris', 'val-de-marne', 'hauts-de-seine', 'seine-saint-denis', 'essonne', 'yvelines', 'seine-et-marne', 'val-d-oise']
function photosDe(cle: string, slug: string): PhotoKey[] {
  const l = PHOTOS[cle] ?? []
  if (l.length <= 2) return l
  const k = Math.max(0, ORDRE_DEP.indexOf(slug)) * 2
  return [l[k % l.length], l[(k + 1) % l.length]]
}
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }
const gras = (t: string) => t.split(/(\*\*[^*]+\*\*)/g).map((m, k) => (m.startsWith('**') ? <strong key={k} className="text-white">{m.slice(2, -2)}</strong> : m))

export default function ZonesNuisibles({ slug, code, nom, dans }: { slug: string; code: string; nom: string; dans: string }) {
  const c = CONTENU_ZONES[slug]
  if (!c) return null
  const villes = villesFamilleDep(code)
  const pageDep = (n: (typeof NUISIBLES_ZONES)[number]) => (n.dep && estDep(slug) ? `${SERVICES_DEP[n.dep].base}/${slug}` : null)
  const enBref = [
    { q: `Qui contacter pour un nuisible ${dans} ?`, r: `Allo Nuisible IDF, entreprise de lutte contre les nuisibles basée à Saint-Maurice (94), techniciens certifiés Certibiocide, 7j/7. Plus de 1 500 clients.` },
    { q: `Quels nuisibles rencontre-t-on le plus ${dans} ?`, r: `Surtout les ${c.frequents}.` },
    { q: `Combien coûte une intervention ${dans} ?`, r: 'Dès 89 € pour un nid de guêpes ou de frelons, 120 € pour les rats, souris, cafards ou fourmis, 290 € pour les punaises de lit (2 passages inclus). Devis gratuit.' },
    { q: 'En combien de temps intervenez-vous ?', r: c.delai },
  ]

  return (
    <>
      {/* En bref */}
      <section className="px-4 pt-10 pb-6" style={{ background: '#080808' }} aria-labelledby="en-bref-dep">
        <div className="max-w-3xl mx-auto rounded-2xl p-6 md:p-7" style={{ background: 'rgba(232,68,26,0.07)', border: '1px solid rgba(232,68,26,0.25)' }}>
          <h2 id="en-bref-dep" className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color: '#F0562A' }}>En bref</h2>
          <dl className="space-y-3">
            {enBref.map(({ q, r }) => (
              <div key={q}>
                <dt className="font-black text-white text-sm md:text-base">{q}</dt>
                <dd className="text-white/80 text-sm md:text-base leading-relaxed">{r}</dd>
              </div>
            ))}
          </dl>
          <div className="text-center"><LienWhatsApp /></div>
          {c.population && <p className="text-white/60 text-xs mt-4 text-center">{nom} ({code}) : {c.population}.</p>}
        </div>
      </section>

      {/* Sommaire */}
      <nav className="px-4 pb-10" style={{ background: '#080808' }} aria-label={`Nuisibles traités ${dans}`}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white font-black mb-4">Choisissez votre nuisible</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {NUISIBLES_ZONES.map((n) => (
              <li key={n.cle}>
                <a href={`#${n.cle}`} className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white rounded-full px-3.5 py-2" style={card}>
                  <span style={{ color: '#F0562A' }}><PestIcon name={ICONES[n.cle]} size={18} /></span>{n.nom}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Tableau des prix */}
      <section className="px-4 py-14" style={{ background: '#0d0d0d' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Prix des traitements anti-nuisibles {dans}</h2>
          <p className="text-white/60 mb-6">Les mêmes prix dans tout le département, annoncés avant l’intervention. Tous nos <a href="/tarifs" className="underline underline-offset-2" style={{ color: '#F0562A' }}>tarifs détaillés</a>.</p>
          <div className="overflow-x-auto rounded-2xl" style={card}>
            <table className="w-full text-sm text-left">
              <caption className="sr-only">Prix de départ et garantie par nuisible {dans}</caption>
              <thead>
                <tr className="text-white" style={{ background: 'rgba(232,68,26,0.12)' }}>
                  <th scope="col" className="px-4 py-3 font-black">Nuisible</th>
                  <th scope="col" className="px-4 py-3 font-black">Prix TTC</th>
                  <th scope="col" className="px-4 py-3 font-black">Garantie</th>
                  <th scope="col" className="px-4 py-3 font-black">Notre page</th>
                </tr>
              </thead>
              <tbody>
                {NUISIBLES_ZONES.map((n) => {
                  const h = pageDep(n) ?? n.service
                  return (
                    <tr key={n.cle} className="border-t border-white/10 text-white/80">
                      <th scope="row" className="px-4 py-3 font-bold text-white"><a href={`#${n.cle}`} className="hover:underline">{n.nom}</a></th>
                      <td className="px-4 py-3">{prixHref(n.service) ? <a href={prixHref(n.service)!} className="underline underline-offset-2">{n.prix}</a> : n.prix}</td>
                      <td className="px-4 py-3">{n.garantie}</td>
                      <td className="px-4 py-3"><a href={h} className="underline underline-offset-2" style={{ color: '#F0562A' }}>{n.titre} {pageDep(n) ? dans : ''}</a></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Une section par nuisible */}
      {NUISIBLES_ZONES.map((n, i) => {
        const dep = pageDep(n)
        const vs = n.famille ? villes[n.famille] : []
        const montre = vs.slice(0, 15)
        return (
          <section key={n.cle} id={n.cle} className="px-4 py-14 md:py-16 scroll-mt-24" style={{ background: i % 2 ? '#0d0d0d' : '#0a0a0a' }}>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex w-12 h-12 rounded-xl items-center justify-center mb-4" style={{ background: 'rgba(232,68,26,0.12)', color: '#F0562A' }}>
                <PestIcon name={ICONES[n.cle]} size={28} />
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-5">{n.titre} <span style={{ color: '#F0562A' }}>{dans}</span></h2>
              <p className="text-white/75 leading-relaxed mb-4">{gras(c.textes[n.cle])}</p>
              {photosDe(n.cle, slug).length > 0 && (
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {photosDe(n.cle, slug).map((k) => {
                    const ph: PhotoChantier = PHOTOS_CHANTIERS[k]
                    return (
                      <figure key={k} className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3', background: '#1a1a1a' }}>
                        <NextImage src={ph.src} alt={ph.alt} fill sizes="(max-width: 768px) 50vw, 384px" className="object-cover" style={ph.cadrage ? { objectPosition: ph.cadrage } : undefined} />
                        <figcaption className="absolute inset-x-0 bottom-0 text-white text-[11px] font-semibold leading-snug text-left" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)', padding: '24px 8px 8px' }}>
                          {ph.legende}
                        </figcaption>
                        <Filigrane bas={34} />
                      </figure>
                    )
                  })}
                </div>
              )}
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                <strong className="text-white">Notre méthode :</strong> {n.methode} <strong className="text-white">Prix : {n.prix} TTC</strong>, garantie {n.garantie}, devis gratuit.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {dep && (
                  <a href={dep} className="inline-flex items-center gap-2 font-bold text-white text-sm px-5 py-3 rounded-xl" style={{ background: '#B8330D' }}>
                    {n.titre} {dans} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
                <BoutonWhatsApp sujet={`${n.nom} ${dans}`} texte="Photo sur WhatsApp" />
                <a href={n.service} className="inline-flex items-center gap-2 font-bold text-white/90 text-sm px-5 py-3 rounded-xl" style={card}>
                  Notre service : {n.nom.toLowerCase()} <ArrowRight className="w-4 h-4" style={{ color: '#F0562A' }} aria-hidden="true" />
                </a>
              </div>
              {montre.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-white font-black text-sm mb-3">{n.nom} : nos pages par {slug === 'paris' ? 'arrondissement' : 'ville'} {dans}</h3>
                  <ul className="flex flex-wrap justify-center gap-1.5">
                    {montre.map((v) => (
                      <li key={v.href}>
                        <a href={v.href} className="inline-flex items-center gap-1 text-xs text-white/75 hover:text-white rounded-full px-3 py-1.5" style={{ border: '1px solid rgba(255,255,255,0.14)' }}>
                          <MapPin className="w-3 h-3" style={{ color: '#F0562A' }} aria-hidden="true" />{v.nom}
                        </a>
                      </li>
                    ))}
                    {vs.length > montre.length && dep && (
                      <li><a href={dep} className="inline-block text-xs font-bold rounded-full px-3 py-1.5" style={{ color: '#F0562A', border: '1px solid rgba(232,68,26,0.4)' }}>+ {vs.length - montre.length} autres villes</a></li>
                    )}
                  </ul>
                </div>
              )}
              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
                {n.guides.map((g) => (
                  <li key={g.href}>
                    <a href={g.href} className="inline-flex items-center gap-1.5 underline underline-offset-2 text-white/75 hover:text-white">
                      <BookOpen className="w-3.5 h-3.5" style={{ color: '#F0562A' }} aria-hidden="true" />{g.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )
      })}

      {/* Vrais chantiers */}
      {c.chantiers && c.chantiers.length > 0 && (
        <section className="px-4 py-14" style={{ background: '#080808' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Nos vrais chantiers <span style={{ color: '#F0562A' }}>{dans}</span></h2>
            <p className="text-white/60 mb-6">Photos et vidéos de nos interventions, avec le récit complet. Toutes nos images : <a href="/nos-interventions" className="underline underline-offset-2" style={{ color: '#F0562A' }}>nos interventions en images</a>.</p>
            <ul className="space-y-2 text-left">
              {c.chantiers.map((x) => (
                <li key={x.href}><a href={x.href} className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-white/85 text-sm hover:text-white" style={card}>{x.t}<ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: '#F0562A' }} aria-hidden="true" /></a></li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
