'use client'

import { useState, useEffect } from 'react'
import { Phone, ShieldCheck, ChevronDown, X } from 'lucide-react'
import AvisGoogle from '@/components/AvisGoogle'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const PHONE = '07 68 07 72 19'
const PHONE_HREF = 'tel:+33768077219'
const ACCENT = '#E8441A'
const FORMSPREE = 'https://formspree.io/f/xvzjpwdd'

/* ── FAQ Item ── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-white text-sm hover:bg-white/5 transition-colors"
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 ml-3 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} style={{ color: ACCENT }} />
      </button>
      <div className={`faq-body${open ? ' open' : ''}`}>
        <div className="px-5 pb-5 pt-3 text-sm text-gray-400 leading-relaxed border-t border-white/5">
          {a}
        </div>
      </div>
    </div>
  )
}

/* ── Page ── */
export default function FourmisPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [floatVisible, setFloatVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const nearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 140
          setFloatVisible(window.scrollY > 380 && !nearBottom)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = () => setModalOpen(true)
    window.addEventListener('openRdvModal', handler)
    return () => window.removeEventListener('openRdvModal', handler)
  }, [])

  return (
    <>
      <QuickModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ── Bouton flottant ── */}
      <a
        href={PHONE_HREF}
        aria-label="Appeler maintenant"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '50%',
          transform: floatVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(24px)',
          opacity: floatVisible ? 1 : 0,
          pointerEvents: floatVisible ? 'auto' : 'none',
          transition: 'opacity 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1)',
          zIndex: 55,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          background: ACCENT,
          color: '#fff',
          fontWeight: 800,
          fontSize: '0.9rem',
          padding: '0.9rem 2rem',
          borderRadius: '9999px',
          boxShadow: '0 8px 32px rgba(232,68,26,0.45), 0 2px 8px rgba(0,0,0,0.3)',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          letterSpacing: '0.01em',
        }}
      >
        <Phone style={{ width: '1rem', height: '1rem', flexShrink: 0 }} />
        Appelez maintenant
      </a>

      <style>{`
        @keyframes sp-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(.85)}}
        @keyframes blobA{0%,100%{transform:translate(0,0) scale(1)}25%{transform:translate(70px,-45px) scale(1.12)}50%{transform:translate(-35px,60px) scale(0.88)}75%{transform:translate(50px,25px) scale(1.05)}}
        @keyframes blobB{0%,100%{transform:translate(0,0) scale(1)}25%{transform:translate(-60px,50px) scale(0.92)}50%{transform:translate(45px,-70px) scale(1.18)}75%{transform:translate(-25px,-18px) scale(0.96)}}
        @keyframes marquee-l{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes marquee-r{from{transform:translateX(-50%)}to{transform:translateX(0)}}
        .marquee-l{animation:marquee-l 38s linear infinite;}
        .marquee-r{animation:marquee-r 44s linear infinite;}
        .marquee-l:hover,.marquee-r:hover{animation-play-state:paused;}
      `}</style>

      <Navbar />
      <main>

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-16 overflow-hidden pt-10 pb-12 md:pt-14 md:pb-16" style={{ background: '#0d0d0d', minHeight: '100svh' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(13,13,13,0.25) 50%, rgba(13,13,13,0.92) 100%)' }} />

          <div className="relative w-full max-w-5xl mx-auto text-center">

            {/* Titre */}
            <h1 className="hero-2 font-black text-white leading-none tracking-tight mb-8" style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}>
              Les fourmis ont{' '}
              <em className="not-italic" style={{ color: ACCENT }}>envahi votre logement.</em>
            </h1>

            <p className="hero-3 text-white/65 max-w-3xl mx-auto mb-12 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.25rem)' }}>
              Tant que la reine pond, la colonie se reconstitue.{' '}
              <strong style={{ color: ACCENT }}>Nos techniciens ciblent le nid entier</strong>{' '}
              et garantissent le résultat sous 48h, 7j/7 en Île-de-France.{' '}
              <strong style={{ color: ACCENT }}>Devis et déplacement gratuits.</strong>
            </p>

            {/* ── NUMÉRO — bouton lava ── */}
            <div className="hero-4 mb-12">
              <a
                href={PHONE_HREF}
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '18px',
                  padding: 'clamp(20px,3vw,32px) clamp(40px,6vw,80px)',
                  borderRadius: '20px',
                  background: 'linear-gradient(105deg, #FF5A1A 0%, #E8441A 45%, #C00000 100%)',
                  color: '#0d0000',
                  fontWeight: 900,
                  fontSize: 'clamp(1.8rem, 5vw, 3.25rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  textDecoration: 'none',
                  overflow: 'hidden',
                  boxShadow: '0 8px 60px rgba(232,68,26,0.7), inset 0 1px 0 rgba(255,255,255,0.18)',
                }}
              >
                <span aria-hidden="true" style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,90,10,0.45)', filter: 'blur(60px)', left: '-80px', top: '50%', transform: 'translateY(-50%)', animation: 'blobA 9s ease-in-out infinite', pointerEvents: 'none' }} />
                <span aria-hidden="true" style={{ position: 'absolute', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(160,0,0,0.55)', filter: 'blur(55px)', right: '-70px', top: '50%', transform: 'translateY(-50%)', animation: 'blobB 12s ease-in-out infinite', pointerEvents: 'none' }} />
                <Phone style={{ width: '0.75em', height: '0.75em', flexShrink: 0, position: 'relative', zIndex: 1, color: '#0d0000' }} />
                <span style={{ position: 'relative', zIndex: 1 }}>07 68 07 72 19</span>
              </a>
              <p className="text-white/30 text-xs tracking-widest uppercase mt-4">
                Appel gratuit · Réponse sous 5 min · 7j/7
              </p>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center justify-center gap-0 max-w-2xl mx-auto mb-10 overflow-hidden rounded-2xl" style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.14)' }}>
              <div className="flex items-center gap-3 px-6 py-4">
                <span className="tracking-wide text-sm" style={{ color: '#facc15' }}>★★★★★</span>
                <span className="text-white font-semibold">4,7/5</span>
                <span className="text-white/40 text-sm hidden sm:inline">· 49 avis</span>
              </div>
              <div className="w-px self-stretch bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2.5 px-6 py-4">
                <ShieldCheck className="w-4 h-4" style={{ color: ACCENT }} />
                <span className="text-white/80">Certibiocide</span>
              </div>
              <div className="w-px self-stretch bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2.5 px-6 py-4">
                <Phone className="w-4 h-4" style={{ color: ACCENT }} />
                <span className="text-white/80">Sans engagement</span>
              </div>
            </div>

            {/* CTAs secondaires */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2.5 text-white font-bold rounded-xl transition-all hover:brightness-110" style={{ background: ACCENT, boxShadow: '0 4px 24px rgba(232,68,26,0.4)', padding: 'clamp(14px,2vw,18px) clamp(24px,4vw,40px)', fontSize: 'clamp(0.9rem,1.6vw,1.1rem)' }}>
                <Phone className="w-5 h-5" />
                {PHONE}
              </a>
              <button type="button" onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2.5 font-bold rounded-xl transition-all hover:brightness-125" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', padding: 'clamp(14px,2vw,18px) clamp(24px,4vw,40px)', fontSize: 'clamp(0.9rem,1.6vw,1.1rem)' }}>
                Prendre rendez-vous
              </button>
              <a href="https://wa.me/33768077219" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 font-bold rounded-xl transition-all hover:brightness-110" style={{ background: '#25D366', color: '#fff', boxShadow: '0 4px 20px rgba(37,211,102,0.3)', padding: 'clamp(14px,2vw,18px) clamp(24px,4vw,40px)', fontSize: 'clamp(0.9rem,1.6vw,1.1rem)' }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L0 24l6.335-1.502A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.803 9.803 0 01-5.002-1.368l-.36-.214-3.735.885.944-3.619-.235-.372A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                WhatsApp
              </a>
            </div>
            <p className="text-white/30 text-sm">
              Rappel sous 5 min · Prix confirmé · Résultat garanti · RC Pro
            </p>
          </div>
        </section>

        {/* ══════════════════ GARANTIE 1 MOIS ══════════════════ */}
        <section className="reveal" style={{ background: '#141414', padding: '52px 16px' }}>
          <div className="max-w-2xl mx-auto">
            <div style={{
              borderRadius: '22px',
              padding: '40px 36px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              background: 'rgba(232,68,26,0.05)',
              border: '1.5px solid rgba(232,68,26,0.25)',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg,transparent,${ACCENT},transparent)` }} />
              <div style={{ width: '62px', height: '62px', background: 'rgba(232,68,26,0.11)', border: '1.5px solid rgba(232,68,26,0.3)', borderRadius: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <ShieldCheck style={{ width: '26px', height: '26px', stroke: ACCENT, fill: 'none' }} />
              </div>
              <p style={{ color: ACCENT, fontSize: '10.5px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Garantie résultat
              </p>
              <div style={{ fontSize: 'clamp(56px,15vw,88px)', fontWeight: 900, color: ACCENT, lineHeight: 0.88, marginBottom: '14px' }}>
                1 an
              </div>
              <p style={{ color: 'white', fontSize: '17px', fontWeight: 800, marginBottom: '10px', lineHeight: 1.35 }}>
                Si les fourmis reviennent, on revient sans frais.
              </p>
              <p style={{ color: 'rgba(255,255,255,.4)', fontSize: '13px', lineHeight: 1.75, maxWidth: '420px', margin: '0 auto 24px' }}>
                Toute intervention est garantie. En cas de réapparition après les passages effectués, notre technicien revient : seuls les frais de déplacement vous sont facturés, le traitement est offert.
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 font-bold text-white px-6 py-3 rounded-full text-sm transition-all hover:opacity-90"
                style={{ background: ACCENT, boxShadow: `0 4px 20px rgba(232,68,26,0.3)` }}
              >
                <Phone className="w-4 h-4" />
                Appeler pour un devis gratuit
              </a>
            </div>
          </div>
        </section>

        {/* Vrais avis Google (lib/avis-google.ts) */}
        <AvisGoogle />

        {/* ══════════════════ FORMULAIRE RAPPEL ══════════════════ */}
        <section id="rappel" className="reveal py-14" style={{ background: '#0d0d0d' }}>
          <div className="max-w-xl mx-auto px-4 md:px-6">
            <div className="relative rounded-2xl p-7 md:p-10 overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${ACCENT},transparent)` }} />
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT, letterSpacing: '.1em' }}>Rappel gratuit</p>
              <h2 className="text-xl md:text-2xl font-black text-white mb-1.5">Vous préférez qu&apos;on vous rappelle ?</h2>
              <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.38)' }}>
                Réponse sous 5 minutes · Devis gratuit · Sans engagement
              </p>
              <CallbackForm />
            </div>
          </div>
        </section>

        {/* ══════════════════ TYPES DE FOURMIS ══════════════════ */}
        <section className="reveal py-14 md:py-20 px-4 md:px-6" style={{ background: '#0a0a0a' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT, letterSpacing: '.1em' }}>Identification</p>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Quelle espèce a envahi votre logement ?</h2>
              <p className="text-white/50 max-w-2xl mx-auto">Chaque espèce a un comportement et un traitement différent. Une mauvaise identification = un traitement inefficace.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { name: 'Fourmi noire des jardins', latin: 'Lasius niger', danger: '●● Modéré', color: '#888', signs: ['Pistes continues vers la cuisine', 'Nid sous dalles ou au pied des murs', 'Attirées par sucre et miettes'], traitement: 'Gel appât + barrière rémanente', saison: 'Mars – Octobre' },
                { name: 'Fourmi charpentière', latin: 'Camponotus sp.', danger: '●●● Élevé', color: ACCENT, signs: ['Sciure fine (frass) près des bois', 'Galeries dans charpente / parquet', 'Grandes fourmis noires (8–15 mm)'], traitement: 'Injection en galeries + insecticide', saison: 'Avril – Septembre', alert: true },
                { name: 'Fourmi pharaon', latin: 'Monomorium pharaonis', danger: '●●● Critique', color: '#C00000', signs: ['Très petite (1,5–2 mm), jaune pâle', 'Nids multiples derrière plinthes', "Présente toute l'année en appartement"], traitement: 'Gel appât exclusivement', saison: "Toute l'année", alert: true },
                { name: 'Fourmi de feu', latin: 'Solenopsis invicta', danger: '●●●● Urgent', color: '#BE0800', signs: ['Piqûres douloureuses, pustules blanches', 'Monticules de terre dans jardins', 'Espèce invasive signalée en IDF'], traitement: 'Protocole renforcé · signalement DDPP', saison: 'Printemps – Été', alert: true },
              ].map((ant) => (
                <div key={ant.name} className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: ant.alert ? 'rgba(232,68,26,0.07)' : 'rgba(255,255,255,0.04)', border: ant.alert ? '1px solid rgba(232,68,26,0.25)' : '1px solid rgba(255,255,255,0.08)' }}>
                  <div>
                    <div className="text-[11px] font-bold mb-1 uppercase tracking-widest" style={{ color: ant.color }}>{ant.danger}</div>
                    <h3 className="text-white font-black text-lg leading-tight">{ant.name}</h3>
                    <p className="text-white/30 text-xs italic">{ant.latin}</p>
                  </div>
                  <ul className="space-y-1.5 flex-1">
                    {ant.signs.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-white/60 text-sm">
                        <span style={{ color: ant.color, flexShrink: 0, marginTop: '2px' }}>›</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 space-y-1" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <p className="text-white/40 text-xs"><span className="text-white/60 font-semibold">Traitement :</span> {ant.traitement}</p>
                    <p className="text-white/40 text-xs"><span className="text-white/60 font-semibold">Saison :</span> {ant.saison}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ POURQUOI PAS SEUL ══════════════════ */}
        <section className="reveal py-14 md:py-20 px-4 md:px-6" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT, letterSpacing: '.1em' }}>Erreur fréquente</p>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Pourquoi traiter seul ne fonctionne pas</h2>
              <p className="text-white/50 max-w-2xl mx-auto">Les fourmis que vous voyez représentent seulement 10 % de la colonie. Le reste est dans le nid.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-3 mb-6">
              {[
                { title: 'Le spray ne tue que 10 %', text: "Les ouvrières visibles sont éliminées, mais la reine continue de pondre jusqu'à 1 000 œufs par jour. La colonie se reconstitue en 48h." },
                { title: "La poudre n'atteint pas le nid", text: "La diatomée agit sur les pistes mais ne pénètre pas dans les galeries. La reine reste protégée et pond." },
                { title: "L'appât du commerce est trop faible", text: "Concentration insuffisante. Les fourmis apprennent à l'éviter. Le «budding» disperse la colonie en plusieurs sous-nids." },
              ].map(({ title, text }) => (
                <div key={title} className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-[26px] h-[26px] rounded-lg flex items-center justify-center mb-3.5" style={{ background: 'rgba(239,68,68,0.12)' }}>
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <p className="font-bold text-white text-sm mb-2">{title}</p>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8125rem', lineHeight: 1.65 }}>{text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl px-5 py-4" style={{ background: 'rgba(232,68,26,0.06)', border: '1px solid rgba(232,68,26,0.16)' }}>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8125rem' }}>Un technicien certifié règle le problème définitivement : gel appât professionnel + barrière rémanente.</p>
              <a href={PHONE_HREF} className="shrink-0 inline-flex items-center gap-2 font-bold text-white px-5 py-2.5 rounded-lg text-sm" style={{ background: ACCENT }}>
                <Phone className="w-3.5 h-3.5" /> Appeler maintenant
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════ LOCALISATION ══════════════════ */}
        <section className="reveal py-14 md:py-20 px-4 md:px-6" style={{ background: '#080808' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT, letterSpacing: '.1em' }}>Localisations</p>
            <h2 className="text-xl md:text-2xl font-black text-white mb-3">Où se trouvent les fourmis ?</h2>
            <p className="mb-6" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', lineHeight: 1.65 }}>
              Les fourmis s&apos;installent dans des endroits difficiles d&apos;accès, proches de la nourriture ou de l&apos;humidité. Elles peuvent nidifier à l&apos;intérieur comme à l&apos;extérieur et traverser les murs par les moindres fissures. Chaque emplacement demande un protocole de traitement adapté.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
              {['Cuisine & plan de travail', 'Plinthes & cloisons', 'Jardin & terrasse', 'Garde-manger', 'Charpente & bois', 'Salle de bain', 'Vides sanitaires', 'Sous dalles & fondations'].map((loc) => (
                <div key={loc} className="text-center py-3 px-3 rounded-xl text-xs font-semibold" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(255,255,255,0.55)' }}>
                  {loc}
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl p-7 md:p-10 text-center overflow-hidden" style={{ background: 'rgba(232,68,26,0.06)', border: '1px solid rgba(232,68,26,0.2)', boxShadow: '0 12px 48px rgba(0,0,0,0.3),inset 0 1px 0 rgba(232,68,26,0.1)' }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${ACCENT},transparent)` }} />
              <p className="font-black text-white text-xl md:text-2xl mb-2">Des fourmis chez vous ? Appelez maintenant.</p>
              <p className="mb-7" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8125rem' }}>Rappel sous 5 min · Devis gratuit · Résultat garanti · RC Pro incluse</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 font-bold text-white px-8 py-4 rounded-xl text-sm" style={{ background: ACCENT, boxShadow: '0 4px 20px rgba(232,68,26,0.28)' }}>
                  <Phone className="w-4 h-4" />{PHONE}
                </a>
                <button type="button" onClick={() => setModalOpen(true)} className="inline-flex items-center justify-center gap-2 font-semibold text-white px-8 py-4 rounded-xl text-sm" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ CALENDRIER ══════════════════ */}
        <section className="reveal py-14 md:py-20 px-4 md:px-6" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT, letterSpacing: '.1em' }}>Saisonnalité</p>
            <h2 className="text-xl md:text-2xl font-black text-white mb-6">Quand intervenir ?</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="relative rounded-xl p-5 overflow-hidden" style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)' }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(34,197,94,0.65),transparent)' }} />
                <p className="font-bold text-white text-sm mb-2">Printemps (mars–juin) : idéal</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8125rem', lineHeight: 1.65 }}>
                  Reprise d&apos;activité après l&apos;hiver. Les colonies sont encore petites.{' '}
                  <strong style={{ color: 'rgba(255,255,255,0.8)' }}>C&apos;est le meilleur moment pour traiter avant l&apos;explosion estivale.</strong>
                </p>
              </div>
              <div className="relative rounded-xl p-5 overflow-hidden" style={{ background: 'rgba(251,146,60,0.07)', border: '1px solid rgba(251,146,60,0.2)' }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(251,146,60,0.8),transparent)' }} />
                <p className="font-bold text-white text-sm mb-2">Été (juin–septembre) : urgent</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8125rem', lineHeight: 1.65 }}>
                  Activité maximale. Invasions massives dans cuisines et garde-mangers.{' '}
                  <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Appelez immédiatement, chaque jour = centaines de nouvelles fourmis.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ FAQ ══════════════════ */}
        <section className="reveal py-12 lg:py-16" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT, letterSpacing: '.1em' }}>FAQ</p>
            <h2 className="text-2xl font-black text-white mb-8">Questions fréquentes</h2>
            <div className="space-y-3">
              {[
                { q: 'Pourquoi les fourmis reviennent-elles après un spray ?', a: "Le spray ne tue que les ouvrières visibles, soit 10 % de la colonie. La reine, en sécurité dans le nid, continue de pondre jusqu'à 1 000 œufs par jour. Seul le gel appât professionnel «effet domino» atteint la reine via les ouvrières elles-mêmes." },
                { q: 'La fourmi pharaon est-elle dangereuse ?', a: "Oui, particulièrement en milieu hospitalier et pour les personnes immunodéprimées : elle peut transporter des bactéries pathogènes. En appartement, elle s'installe derrière les plinthes et dans les circuits électriques. Un pulvérisateur classique aggrave la situation en dispersant la colonie." },
                { q: 'Combien de temps dure l\'effet du traitement ?', a: "Le gel appât agit sous 48–72h sur les fourmis visibles et sous 2–3 semaines sur la colonie entière. La barrière rémanente protège pendant 2 à 3 mois. En cas de réapparition dans l'année, nous revenons gratuitement." },
                { q: 'Le traitement est-il dangereux pour mes enfants et animaux ?', a: "Non. Nos produits sont homologués et appliqués en très petites quantités aux endroits ciblés, hors de portée des enfants et animaux. Nous indiquons un délai de précaution de 1 à 2h après application, le temps que le gel sèche." },
                { q: 'Quelle différence entre fourmis charpentières et termites ?', a: "Les fourmis charpentières creusent le bois pour nidifier mais ne le mangent pas (contrairement aux termites). Vous trouverez de la sciure fine (frass) sous les zones touchées. Le traitement est différent : injection en galeries + insecticide de contact. Si vous avez un doute, appelez pour une inspection." },
                { q: 'Intervenez-vous le week-end et en soirée ?', a: "Oui, 7j/7 y compris week-ends et jours fériés. Nos techniciens peuvent intervenir le jour même partout en Île-de-France. Appelez le 07 68 07 72 19 pour un créneau rapide." },
              ].map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
            </div>
          </div>
        </section>

        {/* ══════════════════ CTA FOOTER ══════════════════ */}
        <section className="reveal relative py-14 px-4 sm:px-6 overflow-hidden" style={{ background: ACCENT }}>
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <span className="text-white font-black text-sm uppercase tracking-wider">Intervention rapide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
              Des fourmis chez vous ?<br />On intervient aujourd&apos;hui.
            </h2>
            <p className="text-white/80 text-base mb-8">Intervention 7j/7 en Île-de-France. Devis gratuit, résultat garanti.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-white font-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 text-sm" style={{ color: ACCENT }}>
                <Phone className="w-4 h-4" />{PHONE}
              </a>
              <button type="button" onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white font-bold px-8 py-4 rounded-full transition-all text-sm hover:text-[#E8441A]">
                Envoyer un message
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

/* ── CallbackForm ── */
function CallbackForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [nuisible, setNuisible] = useState('')
  const [nuisibleError, setNuisibleError] = useState(false)

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem',
    border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)',
    color: '#fff', fontSize: '0.875rem', outline: 'none',
  }
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '0.75rem', fontWeight: 600,
    color: 'rgba(255,255,255,0.5)', marginBottom: '0.375rem',
    textTransform: 'uppercase', letterSpacing: '0.05em',
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!nuisible) { setNuisibleError(true); return }
    setNuisibleError(false)
    setLoading(true)
    setError('')
    const formData = new FormData(e.currentTarget)
    formData.set('nuisible', nuisible)
    try {
      const res = await fetch(FORMSPREE, { method: 'POST', body: formData, headers: { Accept: 'application/json' } })
      if (res.ok) setSubmitted(true)
      else setError("Une erreur est survenue, veuillez réessayer ou nous appeler directement.")
    } catch {
      setError("Impossible d'envoyer le formulaire. Appelez-nous directement.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-3">
        <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center" style={{ background: 'rgba(34,197,94,0.15)' }}>
          <span className="text-2xl text-green-400">✓</span>
        </div>
        <p className="font-black text-white text-lg">Demande envoyée !</p>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>Nous vous rappelons sous 5 minutes.</p>
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label style={labelStyle}>Votre nom</label>
        <input type="text" name="nom" placeholder="Jean Dupont" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Votre téléphone *</label>
        <input type="tel" name="telephone" required placeholder="06 12 34 56 78" style={inputStyle} />
      </div>
      <div>
        <label style={{ ...labelStyle, color: nuisibleError ? '#f87171' : 'rgba(255,255,255,0.5)' }}>Type de fourmis *</label>
        <div className="flex flex-wrap gap-2 mt-1.5">
          {['Fourmis noires', 'Fourmis pharaon', 'Fourmis charpentières', 'Autre (je ne sais pas quelle espèce)'].map((val) => (
            <button key={val} type="button" onClick={() => { setNuisible(val); setNuisibleError(false) }}
              className="py-2 px-3 rounded-lg text-sm font-semibold transition-all"
              style={{ background: nuisible === val ? ACCENT : 'rgba(255,255,255,0.05)', border: `1px solid ${nuisible === val ? ACCENT : nuisibleError ? 'rgba(248,113,113,0.6)' : 'rgba(255,255,255,0.1)'}`, color: '#fff' }}>
              {val}
            </button>
          ))}
        </div>
        {nuisibleError && <p className="text-xs mt-1.5" style={{ color: '#f87171' }}>Veuillez sélectionner un type de fourmis</p>}
      </div>
      <div>
        <label style={labelStyle}>Votre ville</label>
        <input type="text" name="ville" placeholder="Paris, Versailles, Créteil…" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Message (optionnel)</label>
        <textarea name="message" rows={3} placeholder="Décrivez la situation (emplacement, espèce identifiée si connue…)" style={{ ...inputStyle, resize: 'none' }} />
      </div>
      {error && <p className="text-xs text-center" style={{ color: '#f87171' }}>{error}</p>}
      <button type="submit" disabled={loading} className="w-full font-bold text-white py-4 rounded-xl text-sm uppercase tracking-wider transition-all hover:opacity-90 disabled:opacity-60" style={{ background: ACCENT }}>
        {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}
      </button>
      <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem', textAlign: 'center' }}>
        * Champs obligatoires. Vos données restent confidentielles
      </p>
    </form>
  )
}

/* ── QuickModal ── */
function QuickModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [nuisible, setNuisible] = useState('')
  const [nuisibleError, setNuisibleError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (open) {
      const sy = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${sy}px`
      document.body.style.width = '100%'
    } else {
      const top = Math.abs(parseInt(document.body.style.top || '0'))
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      if (top) window.scrollTo(0, top)
    }
  }, [open])

  const field: React.CSSProperties = {
    width: '100%', padding: '0.8rem 1rem', borderRadius: '0.75rem',
    border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.06)',
    color: '#fff', fontSize: '0.875rem', outline: 'none',
  }
  const lbl: React.CSSProperties = {
    display: 'block', fontSize: '0.7rem', fontWeight: 700,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.45)', marginBottom: '0.4rem',
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!nuisible) { setNuisibleError(true); return }
    setNuisibleError(false)
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    fd.set('nuisible', nuisible)
    try {
      const res = await fetch(FORMSPREE, { method: 'POST', body: fd, headers: { Accept: 'application/json' } })
      if (res.ok) setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  function handleClose() {
    onClose()
    setTimeout(() => { setSubmitted(false); setNuisible(''); setNuisibleError(false) }, 300)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl overflow-hidden"
        style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.09)', maxHeight: '90vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Devis gratuit
              </span>
            </div>
            <button type="button" onClick={handleClose}
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white/60 hover:text-white hover:bg-white/10 transition-colors text-sm"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
              ✕
            </button>
          </div>
          <h3 className="text-2xl font-black text-white leading-tight">Prendre rendez-vous</h3>
          <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>Confirmation sous 5 minutes · 7j/7</p>
        </div>

        {submitted ? (
          <div className="text-center py-12 px-6 space-y-3">
            <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center" style={{ background: 'rgba(34,197,94,0.15)' }}>
              <span className="text-2xl text-green-400">✓</span>
            </div>
            <p className="font-black text-white text-lg">Demande envoyée !</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>On vous rappelle sous 5 minutes.</p>
            <button type="button" onClick={handleClose} className="mt-2 text-sm font-bold px-6 py-3 rounded-xl" style={{ background: ACCENT, color: '#fff' }}>
              Fermer
            </button>
          </div>
        ) : (
          <form className="px-6 py-5 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label style={lbl}>Nom <span style={{ color: '#f87171' }}>*</span></label>
                <input type="text" name="nom" required placeholder="Dupont" style={field} />
              </div>
              <div>
                <label style={lbl}>Téléphone <span style={{ color: '#f87171' }}>*</span></label>
                <input type="tel" name="telephone" required placeholder="06 00 00 00 00" style={field} />
              </div>
            </div>
            <div>
              <label style={lbl}>E-mail <span style={{ color: '#f87171' }}>*</span></label>
              <input type="email" name="email" required placeholder="vous@exemple.fr" style={field} />
            </div>
            <div>
              <label style={{ ...lbl, color: nuisibleError ? '#f87171' : 'rgba(255,255,255,0.45)' }}>Type de fourmis</label>
              <div className="grid grid-cols-2 gap-2">
                {['Fourmis noires', 'Fourmis pharaon', 'Fourmis charpentières', 'Autre (je ne sais pas quelle espèce)'].map((val) => (
                  <button key={val} type="button" onClick={() => { setNuisible(val); setNuisibleError(false) }}
                    className="py-2.5 px-3 rounded-xl text-sm font-bold transition-all"
                    style={{ background: nuisible === val ? ACCENT : 'rgba(255,255,255,0.05)', border: `1px solid ${nuisible === val ? ACCENT : nuisibleError ? 'rgba(248,113,113,0.5)' : 'rgba(255,255,255,0.12)'}`, color: '#fff' }}>
                    {val}
                  </button>
                ))}
              </div>
              {nuisibleError && <p className="text-xs mt-1.5" style={{ color: '#f87171' }}>Sélectionnez un type de nuisible</p>}
            </div>
            <div>
              <label style={lbl}>Où habitez-vous ?</label>
              <input type="text" name="ville" placeholder="Votre ville" style={field} />
            </div>
            <div>
              <label style={lbl}>Décrivez votre situation</label>
              <textarea name="message" rows={3} placeholder="Où se trouvent les fourmis ? Cuisine, jardin, charpente… Urgence ce soir ou demain ?" style={{ ...field, resize: 'none' }} />
            </div>
            <button type="submit" disabled={loading}
              className="w-full font-black text-white py-4 rounded-xl text-sm uppercase tracking-wider transition-all hover:opacity-90 disabled:opacity-60"
              style={{ background: ACCENT, boxShadow: '0 4px 20px rgba(232,68,26,0.3)' }}>
              {loading ? 'Envoi en cours…' : 'Confirmer ma demande'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
