'use client'

import { useState, useEffect } from 'react'
import {
  Phone, ShieldCheck, Star, ChevronDown, ArrowRight,
  AlertTriangle, Clock, FileText, Briefcase, RefreshCw, X
} from 'lucide-react'
import NextImage from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const PHONE = '07 68 07 72 19'
const PHONE_HREF = 'tel:+33768077219'
const ACCENT = '#E8441A'

/* ─────────────────────────── FAQ ─────────────────────────── */
const faq = [
  {
    q: 'Comment reconnaître un nid de guêpes ou de frelons ?',
    a: "Un nid de guêpes ressemble à une boule grise en papier mâché, souvent suspendu sous un avant-toit, dans un grenier ou un arbre. Il peut atteindre 40 à 60 cm de diamètre en plein été. Le nid de frelon européen est similaire mais plus volumineux, avec une ouverture latérale. Le nid de frelon asiatique (Vespa velutina) est en forme de poire et peut dépasser 80 cm, installé en hauteur dans les arbres. Contactez Allo Nuisible IDF dès que vous repérez un nid en Île-de-France.",
  },
  {
    q: "Comment distinguer un frelon européen d'un frelon asiatique ?",
    a: "Le frelon européen (Vespa crabro) mesure 25 à 35 mm, avec un abdomen jaune et brun et une tête jaune-rouge. Le frelon asiatique (Vespa velutina) mesure 25 à 30 mm, avec un corps presque entièrement noir, un segment abdominal orange et des pattes jaunes aux extrémités. Le frelon asiatique est plus agressif près de son nid et menace directement les colonies d'abeilles. Allo Nuisible IDF identifie l'espèce gratuitement et adapte son protocole en conséquence.",
  },
  {
    q: "Quel est le tarif pour la destruction d'un nid de guêpes ?",
    a: "Le tarif dépend de l'emplacement du nid, de son accessibilité et de la taille de la colonie. Appelez-nous pour un devis gratuit en 5 minutes, intervention possible le jour même 7j/7.",
  },
  {
    q: "Peut-on détruire un nid de guêpes soi-même ?",
    a: "Non, c'est fortement déconseillé. Un nid d'été peut abriter entre 2 000 et 10 000 individus qui attaquent massivement en cas de menace. Les piqûres multiples peuvent provoquer un choc anaphylactique, potentiellement fatal même sans allergie connue. Les méthodes maison (eau bouillante, fumée, bombe insecticide du commerce) sont inefficaces et dangereuses. Nos techniciens disposent de combinaisons intégrales et d'insecticides foudroyants professionnels.",
  },
  {
    q: "Les guêpes reviennent-elles après la destruction du nid ?",
    a: "Après intervention, les guêpes en vol peuvent tourner autour de l'emplacement 24 à 48 heures, mais sans reine la colonie meurt en quelques jours. Le produit rémanent appliqué lors de notre passage élimine les dernières individus de retour. L'année suivante, une nouvelle reine pourrait choisir le même endroit, mais c'est rare. Nous proposons un traitement préventif pour éviter toute réinstallation.",
  },
  {
    q: "À quelle période les guêpes sont-elles le plus agressives ?",
    a: "Les guêpes sont les plus dangereuses entre juillet et septembre, quand les colonies atteignent leur pic (5 000 à 10 000 individus). En fin d'été, les ouvrières s'activent à la recherche de sucre et s'approchent facilement des repas en extérieur, des boissons et des poubelles. Le meilleur moment pour agir reste le printemps (avril-mai), quand le nid ne contient encore que la reine et quelques ouvrières. Nous intervenons à toute période en Île-de-France.",
  },
  {
    q: "Que faire en cas de piqûre de frelon asiatique ?",
    a: "Retirez le dard si visible, désinfectez, appliquez du froid pour limiter le gonflement, prenez un antihistaminique si disponible. Surveillez les 30 minutes suivantes : gonflement du visage ou de la gorge, difficultés respiratoires, vertiges ou chute de tension sont des signaux d'alarme : appelez le 15 (SAMU) immédiatement. Plus de 5 piqûres simultanées nécessitent aussi une consultation urgente, même sans allergie connue.",
  },
  {
    q: 'Pompiers ou exterminateur : qui appeler pour un nid de guêpes ?',
    a: "Les pompiers n'interviennent plus gratuitement pour les nids de guêpes depuis 2014, sauf danger immédiat dans un espace public. Un professionnel comme Allo Nuisible IDF reste la solution la plus fiable : intervention le jour même en Île-de-France, équipement adapté, produit rémanent et garantie de résultat.",
  },
]

/* ─────────────────────────── Garanties ─────────────────────── */
const garanties = [
  {
    icon: ShieldCheck,
    title: 'Équipement certifié',
    text: `Combinaison intégrale anti-piqûres, perche télescopique jusqu'à 23 m, insecticide foudroyant professionnel homologué.`,
  },
  {
    icon: Clock,
    title: 'Intervention sous 1h',
    text: 'Un technicien équipé se déplace chez vous le jour même. Le nid est neutralisé en une seule visite.',
  },
  {
    icon: FileText,
    title: 'Technicien Certibiocide',
    text: `Certification reconnue par le Ministère de l'Agriculture. Seuls les professionnels agréés utilisent les biocides professionnels.`,
  },
  {
    icon: Phone,
    title: 'Devis gratuit en 5 min',
    text: 'Nous évaluons votre situation par téléphone et confirmons le tarif avant intervention. Sans engagement.',
  },
  {
    icon: RefreshCw,
    title: 'Garantie re-intervention',
    text: 'En cas de réapparition dans les 15 jours suivant notre passage, notre technicien revient sans frais supplémentaires.',
  },
  {
    icon: Briefcase,
    title: 'Assurance RC Pro',
    text: 'Toutes nos interventions sont couvertes par une assurance RC professionnelle. En cas de dommage accidentel, vous êtes intégralement protégé.',
  },
]

/* ─────────────────────────── Timeline ─────────────────────── */
const timeline = [
  { num: '1', title: 'Appel & rappel sous 5 min', text: 'Vous nous contactez, on vous rappelle sous 5 minutes. Diagnostic par téléphone et devis gratuit immédiat.' },
  { num: '2', title: 'Intervention le jour même', text: 'Un technicien équipé intervient sous une heure. Traitement insecticide foudroyant directement dans le nid.' },
  { num: '3', title: 'Neutralisation complète', text: 'Le nid est traité et retiré si accessible. Le produit rémanent agit sous 48h pour éliminer les guêpes de retour.' },
  { num: '4', title: 'Contrôle post-intervention', text: `En cas d'activité persistante sous 48h, notre technicien revient sans délai ni frais supplémentaires.` },
]

/* ─────────────────────────── Sections texte ─────────────────── */
const sections = [
  {
    title: 'Pourquoi confier la destruction à un professionnel ?',
    content: "Détruire un nid de guêpes ou de frelons sans équipement adéquat est une prise de risque inutile. Les piqûres en masse peuvent provoquer un choc anaphylactique même chez une personne non allergique. Le frelon asiatique (Vespa velutina), de plus en plus présent en Île-de-France, est particulièrement agressif à l'approche de son nid. Nos techniciens interviennent en combinaison intégrale avec du matériel d'accès en hauteur pour garantir la sécurité de tous.",
  },
  {
    title: "Comment se passe concrètement l'intervention ?",
    content: "1. Identification précise du nid et de l'espèce (guêpe, frelon européen ou asiatique). 2. Sécurisation du périmètre autour du nid. 3. Injection d'insecticide foudroyant directement dans le nid via une perche télescopique ou un accès en hauteur. 4. Retrait du nid si l'emplacement le permet. L'ensemble dure généralement entre 30 et 60 minutes.",
  },
  {
    title: 'Quel est le bon moment pour intervenir ?',
    content: "Au printemps, les nids primaires ont la taille d'une balle de golf, c'est la fenêtre idéale pour intervenir rapidement et à moindre coût. En été, les colonies atteignent leur pleine taille et peuvent compter des milliers d'individus. N'essayez jamais de les approcher seul. Contactez-nous pour une intervention sécurisée partout en Île-de-France.",
  },
]

/* ─────────────────────────── Composant FAQ ─────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
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
        <ChevronDown
          className={`w-5 h-5 text-[#E8441A] flex-shrink-0 ml-3 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`faq-body${open ? ' open' : ''}`}>
        <div className="px-5 pb-5 pt-3 text-sm text-gray-400 leading-relaxed border-t border-white/5">
          {a}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────── Page ─────────────────────────── */
export default function GuêpesFrelonsPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  const [lightbox, setLightbox] = useState<{src:string,city:string}|null>(null)

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
      <QuickModal open={modalOpen} onClose={closeModal} />

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
        @keyframes blobC{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(-55px,-40px) scale(1.1)}66%{transform:translate(60px,45px) scale(0.9)}}
      `}</style>
      <Navbar />
      <main>

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-16 overflow-hidden py-20 md:py-28" style={{ background: '#0d0d0d' }}>
          {/* Photo de fond */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/hero-guepes.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 30%', opacity: 0.5 }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(13,13,13,0.25) 50%, rgba(13,13,13,0.92) 100%)' }} />

          <div className="relative w-full max-w-5xl mx-auto text-center">

            {/* Titre */}
            <h1 className="hero-2 font-black text-white leading-none tracking-tight mb-8" style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}>
              Ne touchez pas{' '}
              <em className="not-italic" style={{ color: ACCENT }}>à ce nid.</em>
            </h1>

            <p className="hero-3 text-white/65 max-w-3xl mx-auto mb-12 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.25rem)' }}>
              Une attaque de frelons peut provoquer un{' '}
              <strong style={{ color: ACCENT }}>choc anaphylactique</strong>, même sans allergie.
              Nos techniciens interviennent en moins d&apos;1h partout en Île-de-France, résultat garanti.
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

            {/* Sur devis */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="relative rounded-2xl flex flex-col items-center text-center" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.18)', padding: 'clamp(20px,3vw,32px) clamp(24px,4vw,48px)' }}>
                <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(232,68,26,0.7),transparent)' }} />
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '.1em' }}>Tarification</p>
                <p className="font-black text-white mb-2" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>Sur devis</p>
                <p className="text-white/55 text-sm leading-relaxed">Tout dépend de la taille de la colonie,<br />de l&apos;accessibilité et de l&apos;emplacement du nid.</p>
              </div>
              <p className="text-white/35 text-xs mt-3 text-center">Devis gratuit · Réponse en 5 min · 7j/7 soirs et week-ends</p>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center justify-center gap-0 max-w-2xl mx-auto mb-10 overflow-hidden rounded-2xl" style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.14)' }}>
              <div className="flex items-center gap-3 px-6 py-4">
                <span className="tracking-wide text-sm" style={{ color: '#facc15' }}>★★★★★</span>
                <span className="text-white font-semibold">4,9/5</span>
                <span className="text-white/40 text-sm hidden sm:inline">· 47 avis</span>
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
              <button type="button" onClick={openModal} className="inline-flex items-center gap-2.5 font-bold rounded-xl transition-all hover:brightness-125" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', padding: 'clamp(14px,2vw,18px) clamp(24px,4vw,40px)', fontSize: 'clamp(0.9rem,1.6vw,1.1rem)' }}>
                Prendre rendez-vous
              </button>
              <a href="https://wa.me/33768077219" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 font-bold rounded-xl transition-all hover:brightness-110" style={{ background: '#25D366', color: '#fff', boxShadow: '0 4px 20px rgba(37,211,102,0.3)', padding: 'clamp(14px,2vw,18px) clamp(24px,4vw,40px)', fontSize: 'clamp(0.9rem,1.6vw,1.1rem)' }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L0 24l6.335-1.502A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.803 9.803 0 01-5.002-1.368l-.36-.214-3.735.885.944-3.619-.235-.372A9.79 9.79 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                WhatsApp
              </a>
            </div>
            <p className="text-white/30 text-sm">
              Rappel sous 5 min · Devis offert · Résultat garanti · RC Pro
            </p>
          </div>
        </section>

        {/* ══════════════════ GARANTIE 1 MOIS PREMIUM ══════════════════ */}
        <section className="reveal" style={{ background: '#141414', padding: '52px 16px' }}>
          <div className="max-w-2xl mx-auto">
            <div
              style={{
                borderRadius: '22px',
                padding: '40px 36px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(232,68,26,0.05)',
                border: '1.5px solid rgba(232,68,26,0.25)',
              }}
            >
              {/* Ligne de lueur en haut */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(90deg,transparent,${ACCENT},transparent)` }} />
              {/* Icône bouclier */}
              <div style={{ width: '62px', height: '62px', background: 'rgba(232,68,26,0.11)', border: '1.5px solid rgba(232,68,26,0.3)', borderRadius: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                <ShieldCheck style={{ width: '26px', height: '26px', stroke: ACCENT, fill: 'none' }} />
              </div>
              {/* Label */}
              <p style={{ color: ACCENT, fontSize: '10.5px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Garantie résultat
              </p>
              {/* Grand "1 mois" */}
              <div style={{ fontSize: 'clamp(56px,15vw,88px)', fontWeight: 900, color: ACCENT, lineHeight: 0.88, marginBottom: '14px' }}>
                1 mois
              </div>
              <p style={{ color: 'white', fontSize: '17px', fontWeight: 800, marginBottom: '10px', lineHeight: 1.35 }}>
                Si les nuisibles reviennent, on revient sans frais.
              </p>
              <p style={{ color: 'rgba(255,255,255,.4)', fontSize: '13px', lineHeight: 1.75, maxWidth: '420px', margin: '0 auto 24px' }}>
                Toute intervention est garantie 1 mois. En cas de réapparition, notre technicien revient sans aucun supplément.
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

        {/* ══════════════════ GARANTIES ══════════════════ */}
        <section className="reveal py-12 md:py-16" style={{ background: '#0d0d0d' }}>
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT, letterSpacing: '.1em' }}>Nos garanties</p>
              <h2 className="text-xl md:text-2xl font-black text-white">Pourquoi faire appel à un professionnel ?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {garanties.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-xl p-5 md:p-6 hover:bg-white/6 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: `rgba(232,68,26,0.1)` }}>
                    <Icon className="w-4 h-4" style={{ color: ACCENT }} />
                  </div>
                  <p className="font-bold text-white text-sm mb-2">{title}</p>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8125rem', lineHeight: 1.65 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ GALERIE ══════════════════ */}
        <section className="reveal py-14 md:py-20" style={{ background: '#111' }}>
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT, letterSpacing: '.1em' }}>Galerie</p>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Nos interventions en images</h2>
              <div className="w-12 h-1 mx-auto rounded-full" style={{ background: ACCENT }} />
            </div>
            {/* Grille 2 colonnes, 3 rangées */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: '/galerie-1.png', alt: 'Nid de guêpes dans une cloison traité par notre technicien en Île-de-France', city: 'Paris 6e' },
                { src: '/galerie-2.png', alt: 'Destruction nid de guêpes sous avant-toit, intervention Île-de-France', city: 'Créteil' },
                { src: '/galerie-3.png', alt: 'Intervention nid de guêpes en hauteur, technicien certifié Île-de-France', city: 'Pontault-Combault' },
                { src: '/galerie-4.png', alt: 'Technicien Allo Nuisible IDF lors d\'une intervention guêpes', city: 'Évry' },
                { src: '/galerie-5.png', alt: 'Nid de guêpes neutralisé dans les combles en Île-de-France', city: 'Drancy' },
                { src: '/galerie-6.png', alt: 'Traitement nid de frelons par notre équipe en Île-de-France', city: 'Montmorency' },
              ].map(({ src, alt, city }) => (
                <div
                  key={src}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group"
                  style={{ aspectRatio: '4/3' }}
                  onClick={() => setLightbox({ src, city })}
                >
                  <NextImage src={src} alt={alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.72) 0%,transparent 100%)', padding: '18px 10px 8px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(232,68,26,0.88)', borderRadius: 999, padding: '3px 10px', fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Intervention · {city}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 font-bold text-white px-7 py-3.5 rounded-full text-sm"
                style={{ background: ACCENT, boxShadow: `0 4px 20px rgba(232,68,26,0.3)` }}
              >
                <Phone className="w-4 h-4" />
                Appelez maintenant
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════ SECTION CONVERSION SOMBRE ══════════════════ */}
        <section
          className="py-14 md:py-20 overflow-hidden"
          style={{
            background: '#080808',
            backgroundImage:
              `radial-gradient(ellipse 70% 28% at 8% 6%, rgba(232,68,26,0.09) 0%,transparent 52%),
               radial-gradient(ellipse 55% 30% at 90% 10%, rgba(220,38,38,0.07) 0%,transparent 48%),
               radial-gradient(ellipse 60% 32% at 50% 92%, rgba(232,68,26,0.06) 0%,transparent 55%)`,
          }}
        >
          <div className="max-w-4xl mx-auto px-4 md:px-6">

            {/* Alerte danger */}
            <div className="relative rounded-2xl mb-12 overflow-hidden" style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.22)' }}>
              <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: 'linear-gradient(to bottom,#ef4444,#991b1b)' }} />
              <div className="flex gap-4 items-start p-5 md:p-7" style={{ paddingLeft: '1.75rem' }}>
                <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5" style={{ background: 'rgba(239,68,68,0.12)' }}>
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm md:text-base mb-1.5">
                    N&apos;intervenez jamais seul, c&apos;est dangereux
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                    Un nid d&apos;été peut renfermer jusqu&apos;à{' '}
                    <strong style={{ color: 'rgba(255,255,255,0.85)' }}>10 000 individus</strong>.
                    Une attaque collective peut déclencher un choc anaphylactique, même chez une personne
                    non allergique. Le frelon asiatique est particulièrement agressif à proximité de son nid.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 stats */}
            <div className="grid grid-cols-3 mb-14 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.03)' }}>
              {[
                { val: '-1h', label: "délai d'intervention garanti" },
                { val: '7j/7', label: 'soirs et week-ends inclus' },
                { val: '100%', label: 'clients satisfaits après intervention' },
              ].map(({ val, label }, i) => (
                <div
                  key={val}
                  className="text-center px-3 py-7 md:py-10"
                  style={i === 1 ? { background: 'rgba(255,255,255,0.04)', borderLeft: '1px solid rgba(255,255,255,0.08)', borderRight: '1px solid rgba(255,255,255,0.08)' } : {}}
                >
                  <p className="text-3xl md:text-4xl font-black text-white leading-none mb-2">{val}</p>
                  <div className="w-[18px] h-[2px] mx-auto mb-2.5 rounded-full" style={{ background: ACCENT }} />
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', lineHeight: 1.5 }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Objections spray maison */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-[3px] h-5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                <p className="font-bold text-white text-sm md:text-base">
                  {'"Je vais juste prendre un spray au supermarché..."'}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  {
                    title: "Le spray n'atteint pas le nid",
                    text: "Les insecticides grand public ne pénètrent pas dans les galeries internes du nid. Vous éliminez quelques ouvrières, les 9 000 autres poursuivent. Le nid reprend de plus belle sous 48h.",
                  },
                  {
                    title: 'Sans tenue de protection, le risque est maximal',
                    text: "S'approcher sans combinaison intégrale déclenche une attaque massive. Même sans terrain allergique, 50 piqûres simultanées peuvent être fatales.",
                  },
                  {
                    title: 'Sans traitement rémanent, ça revient',
                    text: "Même en neutralisant le nid, les individus de retour réinfestent le même emplacement. Notre insecticide professionnel continue d'agir 48h après notre départ.",
                  },
                ].map(({ title, text }) => (
                  <div
                    key={title}
                    className="rounded-xl p-5"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div className="w-[26px] h-[26px] rounded-lg flex items-center justify-center mb-3.5" style={{ background: 'rgba(239,68,68,0.12)' }}>
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <p className="font-bold text-white text-sm mb-2">{title}</p>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8125rem', lineHeight: 1.65 }}>{text}</p>
                  </div>
                ))}
              </div>
              <div
                className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-3 rounded-xl px-5 py-4"
                style={{ background: `rgba(232,68,26,0.06)`, border: `1px solid rgba(232,68,26,0.16)` }}
              >
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8125rem' }}>
                  Un technicien certifié règle le problème définitivement, en une seule visite.
                </p>
                <a
                  href={PHONE_HREF}
                  className="shrink-0 inline-flex items-center gap-2 font-bold text-white px-5 py-2.5 rounded-lg text-sm"
                  style={{ background: ACCENT }}
                >
                  <Phone className="w-3.5 h-3.5" />
                  Appeler maintenant
                </a>
              </div>
            </div>

            {/* Timeline */}
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT, letterSpacing: '.1em' }}>Déroulé</p>
            <h2 className="text-xl md:text-2xl font-black text-white mb-7">Comment se déroule l&apos;intervention ?</h2>
            <div className="space-y-0 mb-14">
              {timeline.map(({ num, title, text }, i) => (
                <div key={num} className="flex gap-5 pb-8 relative">
                  {i < timeline.length - 1 && (
                    <div
                      className="absolute left-5 top-10 bottom-0 w-px"
                      style={{ background: `rgba(232,68,26,0.2)` }}
                    />
                  )}
                  <div
                    className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-black text-white text-sm z-10"
                    style={{ background: ACCENT }}
                  >
                    {num}
                  </div>
                  <div className="pt-2.5">
                    <p className="font-bold text-white text-sm mb-1.5">{title}</p>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8125rem', lineHeight: 1.65 }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quand intervenir */}
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT, letterSpacing: '.1em' }}>Calendrier</p>
            <h2 className="text-xl md:text-2xl font-black text-white mb-6">Quand intervenir ?</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="relative rounded-xl p-5 overflow-hidden" style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)' }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(34,197,94,0.65),transparent)' }} />
                <p className="font-bold text-white text-sm mb-2">Printemps (mars–juin) : idéal</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8125rem', lineHeight: 1.65 }}>
                  Le nid est encore petit (taille d&apos;une balle de golf). L&apos;intervention est plus rapide, moins coûteuse.{' '}
                  <strong style={{ color: 'rgba(255,255,255,0.8)' }}>C&apos;est le meilleur moment pour agir.</strong>
                </p>
              </div>
              <div className="relative rounded-xl p-5 overflow-hidden" style={{ background: 'rgba(251,146,60,0.07)', border: '1px solid rgba(251,146,60,0.2)' }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(251,146,60,0.8),transparent)' }} />
                <p className="font-bold text-white text-sm mb-2">Été (juillet–septembre) : urgent</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8125rem', lineHeight: 1.65 }}>
                  Le nid peut atteindre la taille d&apos;un ballon de foot et contenir des milliers d&apos;individus.{' '}
                  <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Appelez immédiatement, chaque heure compte.</strong>
                </p>
              </div>
            </div>

            {/* Emplacements */}
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT, letterSpacing: '.1em' }}>Localisations</p>
            <h2 className="text-xl md:text-2xl font-black text-white mb-3">Où se trouvent les nids ?</h2>
            <p className="mb-6" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', lineHeight: 1.65 }}>
              Guêpes et frelons s&apos;installent dans des endroits souvent difficiles d&apos;accès : sous la toiture,
              dans une cheminée ou un volet roulant, sur un mur ou une façade, dans un arbre ou une haie,
              et parfois directement sous terre. Chaque emplacement demande un protocole spécifique.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
              {['Toiture & sous-toiture', 'Tuiles & combles', 'Cheminée', 'Volet roulant', 'Mur & façade', 'Arbre & haie', 'Jardin & balcon', 'Sous terre'].map((loc) => (
                <div
                  key={loc}
                  className="text-center py-3 px-3 rounded-xl text-xs font-semibold"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(255,255,255,0.55)' }}
                >
                  {loc}
                </div>
              ))}
            </div>

            {/* CTA final conversion */}
            <div
              className="relative rounded-2xl p-7 md:p-10 text-center overflow-hidden"
              style={{ background: `rgba(232,68,26,0.06)`, border: `1px solid rgba(232,68,26,0.2)`, boxShadow: '0 12px 48px rgba(0,0,0,0.3),inset 0 1px 0 rgba(232,68,26,0.1)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${ACCENT},transparent)` }} />
              <p className="font-black text-white text-xl md:text-2xl mb-2">Un nid chez vous ? Appelez maintenant.</p>
              <p className="mb-7" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8125rem' }}>
                Rappel sous 5 min · Devis gratuit · Résultat garanti · RC Pro incluse
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 font-bold text-white px-8 py-4 rounded-xl text-sm"
                  style={{ background: ACCENT, boxShadow: `0 4px 20px rgba(232,68,26,0.28)` }}
                >
                  <Phone className="w-4 h-4" />
                  {PHONE}
                </a>
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-2 font-semibold text-white px-8 py-4 rounded-xl text-sm"
                  style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  Prendre rendez-vous
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════ TÉMOIGNAGES CAROUSEL ══════════════════ */}
        <section className="reveal py-14 md:py-20 overflow-hidden" style={{ background: '#111' }}>
          <style>{`
            @keyframes marquee-l { from { transform:translateX(0) } to { transform:translateX(-50%) } }
            @keyframes marquee-r { from { transform:translateX(-50%) } to { transform:translateX(0) } }
            .marquee-l { animation: marquee-l 38s linear infinite; }
            .marquee-r { animation: marquee-r 44s linear infinite; }
            .marquee-l:hover, .marquee-r:hover { animation-play-state: paused; }
            @keyframes sp-pulse { 0%, 100% { opacity:1; transform:scale(1); } 50% { opacity:0.6; transform:scale(0.85); } }
          `}</style>

          <div className="text-center mb-10 px-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT, letterSpacing: '.1em' }}>Témoignages</p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Ce que disent nos clients</h2>
            <div className="w-12 h-1 mx-auto rounded-full" style={{ background: ACCENT }} />
          </div>

          {/* Rangée 1 → gauche */}
          <div className="overflow-hidden mb-4">
            <div className="flex gap-4 marquee-l" style={{ width: 'max-content' }}>
              {[
                { name: 'Mathieu L.', ville: 'Paris 15e', date: 'il y a 3 jours', texte: "Nid de frelons asiatiques dans nos combles, impossible d'y aller. Appelé à 9h, technicien présent à 10h30 avec son équipement complet. Le nid faisait la taille d'un ballon de foot. Traitement immédiat, résultat parfait. Merci !" },
                { name: 'Sophie R.', ville: 'Versailles', date: 'il y a 1 semaine', texte: "Des guêpes avaient installé un nid sous la terrasse en bois. Mes enfants ne pouvaient plus jouer dehors. Intervention rapide, propre et efficace. Prix exactement celui annoncé par téléphone. Je recommande à 100%." },
                { name: 'Pierre D.', ville: 'Boulogne-Billancourt', date: 'il y a 2 semaines', texte: "Nid de guêpes découvert dans le volet roulant du salon. L'équipe est intervenue en combinaison intégrale, a retiré le nid proprement sans abîmer le volet. Vraiment sérieux et professionnels." },
                { name: 'Isabelle M.', ville: 'Vincennes', date: 'il y a 3 semaines', texte: "Frelons asiatiques dans un arbre du jardin. J'étais paniquée, le nid était énorme. Le technicien est arrivé en moins d'une heure, très rassurant, très compétent. Le nid a été neutralisé le soir même." },
                { name: 'Thomas B.', ville: 'Neuilly-sur-Seine', date: 'il y a 1 mois', texte: "Urgence absolue : nid de guêpes découvert dans les combles lors de travaux. Contacté en urgence, intervention le soir même malgré l'heure tardive. Sérieux, efficace, je garde le numéro précieusement." },
                { name: 'Claire V.', ville: 'Saint-Cloud', date: 'il y a 1 mois', texte: "Petit nid repéré tôt au printemps sous l'avant-toit. Traitement rapide et à un tarif très raisonnable. Le technicien m'a expliqué comment éviter une réinstallation l'année prochaine. Service au top !" },
              ].concat([
                { name: 'Mathieu L.', ville: 'Paris 15e', date: 'il y a 3 jours', texte: "Nid de frelons asiatiques dans nos combles, impossible d'y aller. Appelé à 9h, technicien présent à 10h30 avec son équipement complet. Le nid faisait la taille d'un ballon de foot. Traitement immédiat, résultat parfait. Merci !" },
                { name: 'Sophie R.', ville: 'Versailles', date: 'il y a 1 semaine', texte: "Des guêpes avaient installé un nid sous la terrasse en bois. Mes enfants ne pouvaient plus jouer dehors. Intervention rapide, propre et efficace. Prix exactement celui annoncé par téléphone. Je recommande à 100%." },
                { name: 'Pierre D.', ville: 'Boulogne-Billancourt', date: 'il y a 2 semaines', texte: "Nid de guêpes découvert dans le volet roulant du salon. L'équipe est intervenue en combinaison intégrale, a retiré le nid proprement sans abîmer le volet. Vraiment sérieux et professionnels." },
                { name: 'Isabelle M.', ville: 'Vincennes', date: 'il y a 3 semaines', texte: "Frelons asiatiques dans un arbre du jardin. J'étais paniquée, le nid était énorme. Le technicien est arrivé en moins d'une heure, très rassurant, très compétent. Le nid a été neutralisé le soir même." },
                { name: 'Thomas B.', ville: 'Neuilly-sur-Seine', date: 'il y a 1 mois', texte: "Urgence absolue : nid de guêpes découvert dans les combles lors de travaux. Contacté en urgence, intervention le soir même malgré l'heure tardive. Sérieux, efficace, je garde le numéro précieusement." },
                { name: 'Claire V.', ville: 'Saint-Cloud', date: 'il y a 1 mois', texte: "Petit nid repéré tôt au printemps sous l'avant-toit. Traitement rapide et à un tarif très raisonnable. Le technicien m'a expliqué comment éviter une réinstallation l'année prochaine. Service au top !" },
              ]).map((a, i) => (
                <div key={i} className="flex-shrink-0 w-80 rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-white text-sm shrink-0" style={{ background: ACCENT }}>
                        {a.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm leading-none mb-0.5">{a.name}</p>
                        <p className="text-white/35 text-xs">{a.ville}</p>
                      </div>
                    </div>
                    <p className="text-white/25 text-xs">{a.date}</p>
                  </div>
                  <p className="text-xs mb-3" style={{ color: '#facc15' }}>★★★★★</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{a.texte}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rangée 2 → droite */}
          <div className="overflow-hidden">
            <div className="flex gap-4 marquee-r" style={{ width: 'max-content' }}>
              {[
                { name: 'Jean-Marc T.', ville: 'Créteil', date: 'il y a 5 jours', texte: "Frelon asiatique repéré sur la terrasse, nid trouvé dans un arbre voisin. Intervention très professionnelle, le technicien a sécurisé le périmètre avant de traiter. Aucun incident, nid retiré proprement." },
                { name: 'Nathalie G.', ville: 'Montreuil', date: 'il y a 10 jours', texte: "Guêpes dans le cabanon de jardin depuis plusieurs semaines. Je n'osais plus y aller. Un seul appel, un technicien le lendemain matin, problème réglé en 45 minutes. Service impeccable et prix honnête." },
                { name: 'Romain P.', ville: 'Rueil-Malmaison', date: 'il y a 2 semaines', texte: "Nid de guêpes découvert par mes enfants en jouant. J'ai appelé en urgence, le technicien est arrivé en 50 minutes. Travail soigné, zone sécurisée, mes enfants ont pu jouer dehors dès le lendemain." },
                { name: 'Aurélie D.', ville: 'Maisons-Laffitte', date: 'il y a 3 semaines', texte: "Très impressionnée par le professionnalisme. Le technicien est venu en combinaison complète, a identifié l'espèce (frelon européen), traité le nid et laissé les lieux propres. Garantie re-intervention incluse. Parfait." },
                { name: 'Laurent M.', ville: 'Nogent-sur-Marne', date: 'il y a 1 mois', texte: "Nid dans la haie mitoyenne, impossible de tondre. L'équipe est intervenue rapidement avec du matériel adapté. Résultat garanti et technicien Certibiocide, ça inspire confiance. Je recommande sans hésiter." },
                { name: 'Valérie C.', ville: 'Enghien-les-Bains', date: 'il y a 5 semaines', texte: "Deuxième fois que je fais appel à eux, toujours aussi efficaces. Cette année c'était un nid de frelons asiatiques dans le garage. Intervention le soir même après mon appel en fin d'après-midi. Remarquable." },
              ].concat([
                { name: 'Jean-Marc T.', ville: 'Créteil', date: 'il y a 5 jours', texte: "Frelon asiatique repéré sur la terrasse, nid trouvé dans un arbre voisin. Intervention très professionnelle, le technicien a sécurisé le périmètre avant de traiter. Aucun incident, nid retiré proprement." },
                { name: 'Nathalie G.', ville: 'Montreuil', date: 'il y a 10 jours', texte: "Guêpes dans le cabanon de jardin depuis plusieurs semaines. Je n'osais plus y aller. Un seul appel, un technicien le lendemain matin, problème réglé en 45 minutes. Service impeccable et prix honnête." },
                { name: 'Romain P.', ville: 'Rueil-Malmaison', date: 'il y a 2 semaines', texte: "Nid de guêpes découvert par mes enfants en jouant. J'ai appelé en urgence, le technicien est arrivé en 50 minutes. Travail soigné, zone sécurisée, mes enfants ont pu jouer dehors dès le lendemain." },
                { name: 'Aurélie D.', ville: 'Maisons-Laffitte', date: 'il y a 3 semaines', texte: "Très impressionnée par le professionnalisme. Le technicien est venu en combinaison complète, a identifié l'espèce (frelon européen), traité le nid et laissé les lieux propres. Garantie re-intervention incluse. Parfait." },
                { name: 'Laurent M.', ville: 'Nogent-sur-Marne', date: 'il y a 1 mois', texte: "Nid dans la haie mitoyenne, impossible de tondre. L'équipe est intervenue rapidement avec du matériel adapté. Résultat garanti et technicien Certibiocide, ça inspire confiance. Je recommande sans hésiter." },
                { name: 'Valérie C.', ville: 'Enghien-les-Bains', date: 'il y a 5 semaines', texte: "Deuxième fois que je fais appel à eux, toujours aussi efficaces. Cette année c'était un nid de frelons asiatiques dans le garage. Intervention le soir même après mon appel en fin d'après-midi. Remarquable." },
              ]).map((a, i) => (
                <div key={i} className="flex-shrink-0 w-80 rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-white text-sm shrink-0" style={{ background: 'rgba(232,68,26,0.6)' }}>
                        {a.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm leading-none mb-0.5">{a.name}</p>
                        <p className="text-white/35 text-xs">{a.ville}</p>
                      </div>
                    </div>
                    <p className="text-white/25 text-xs">{a.date}</p>
                  </div>
                  <p className="text-xs mb-3" style={{ color: '#facc15' }}>★★★★★</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{a.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ FORMULAIRE DE RAPPEL ══════════════════ */}
        <section id="rappel" className="reveal py-14 md:py-18" style={{ background: '#0d0d0d' }}>
          <div className="max-w-xl mx-auto px-4 md:px-6">
            <div
              className="relative rounded-2xl p-7 md:p-10 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
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

        {/* ══════════════════ FAQ ══════════════════ */}
        <section className="reveal py-12 lg:py-16" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT, letterSpacing: '.1em' }}>FAQ</p>
            <h2 className="text-2xl font-black text-white mb-8">Questions fréquentes</h2>
            <div className="space-y-3">
              {faq.map(({ q, a }) => <FaqItem key={q} q={q} a={a} />)}
            </div>
          </div>
        </section>

        {/* ══════════════════ SECTIONS TEXTE ══════════════════ */}
        <section className="reveal py-16 lg:py-24 px-4 sm:px-6" style={{ background: '#0d0d0d' }}>
          <div className="max-w-3xl mx-auto space-y-12">
            {sections.map(({ title, content }) => (
              <div key={title}>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight">{title}</h2>
                <div className="w-10 h-1 rounded-full mb-4" style={{ background: ACCENT }} />
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.75 }}>{content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════ CTA URGENCE FOOTER ══════════════════ */}
        <section className="reveal relative py-14 px-4 sm:px-6 overflow-hidden" style={{ background: ACCENT }}>
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <span className="text-white font-black text-sm uppercase tracking-wider">Urgence nid</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
              Un nid chez vous ?<br />On intervient aujourd&apos;hui.
            </h2>
            <p className="text-white/80 text-base mb-8">
              Intervention 7j/7 en Île-de-France. Devis gratuit, résultat garanti.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-white font-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 text-sm"
                style={{ color: ACCENT }}
              >
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white font-bold px-8 py-4 rounded-full transition-all text-sm hover:text-[#E8441A]"
              >
                Envoyer un message
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Lightbox galerie */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.93)', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, padding: 20, cursor: 'pointer' }}
        >
          <div style={{ position: 'relative', width: '90vw', maxWidth: 700, height: 'min(60vh,525px)' }}>
            <NextImage src={lightbox.src} alt={lightbox.city} fill style={{ objectFit: 'contain' }} className="rounded-2xl" />
          </div>
          <p style={{ fontSize: 'clamp(1.1rem,3vw,1.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Intervention à <span style={{ color: ACCENT }}>{lightbox.city}</span>
          </p>
          <button
            onClick={e => { e.stopPropagation(); setLightbox(null) }}
            style={{ position: 'absolute', top: 16, right: 16, width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X style={{ width: 18, height: 18 }} />
          </button>
        </div>
      )}

      <Footer />
    </>
  )
}

/* ─────────────────────────── Formulaire rappel ─────────────── */
function CallbackForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [nuisible, setNuisible] = useState('')
  const [nuisibleError, setNuisibleError] = useState(false)

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.05)',
    color: '#fff',
    fontSize: '0.875rem',
    outline: 'none',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '0.375rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!nuisible) {
      setNuisibleError(true)
      return
    }
    setNuisibleError(false)
    setLoading(true)
    setError('')
    const formData = new FormData(e.currentTarget)
    formData.set('nuisible', nuisible)
    try {
      const res = await fetch('https://formspree.io/f/xvzjpwdd', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError("Une erreur est survenue, veuillez réessayer ou nous appeler directement.")
      }
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
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
          Nous vous rappelons sous 5 minutes.
        </p>
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
        <input
          type="tel"
          name="telephone"
          required
          placeholder="06 12 34 56 78"
          style={inputStyle}
        />
      </div>
      <div>
        <label style={{ ...labelStyle, color: nuisibleError ? '#f87171' : 'rgba(255,255,255,0.5)' }}>
          Type de nuisible *
        </label>
        <div className="flex gap-3 mt-1.5">
          {['Guêpes', 'Frelons'].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => { setNuisible(val); setNuisibleError(false) }}
              className="flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all"
              style={{
                background: nuisible === val ? ACCENT : 'rgba(255,255,255,0.05)',
                border: `1px solid ${nuisible === val ? ACCENT : nuisibleError ? 'rgba(248,113,113,0.6)' : 'rgba(255,255,255,0.1)'}`,
                color: '#fff',
              }}
            >
              {val}
            </button>
          ))}
        </div>
        {nuisibleError && (
          <p className="text-xs mt-1.5" style={{ color: '#f87171' }}>
            Veuillez sélectionner Guêpes ou Frelons
          </p>
        )}
      </div>
      <div>
        <label style={labelStyle}>Votre ville</label>
        <input type="text" name="ville" placeholder="Paris, Versailles, Créteil…" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Message (optionnel)</label>
        <textarea
          name="message"
          rows={3}
          placeholder="Décrivez la situation (emplacement du nid, hauteur approximative…)"
          style={{ ...inputStyle, resize: 'none' }}
        />
      </div>
      {error && (
        <p className="text-xs text-center" style={{ color: '#f87171' }}>{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full font-bold text-white py-4 rounded-xl text-sm uppercase tracking-wider transition-all hover:opacity-90 disabled:opacity-60"
        style={{ background: ACCENT }}
      >
        {loading ? 'Envoi en cours…' : 'Envoyer ma demande'}
      </button>
      <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem', textAlign: 'center' }}>
        * Champs obligatoires. Vos données restent confidentielles
      </p>
    </form>
  )
}

/* ─────────────────────────── Modale rendez-vous ────────────── */
function QuickModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [nuisible, setNuisible] = useState('')
  const [nuisibleError, setNuisibleError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const field: React.CSSProperties = {
    width: '100%',
    padding: '0.8rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.06)',
    color: '#fff',
    fontSize: '0.875rem',
    outline: 'none',
  }

  const lbl: React.CSSProperties = {
    display: 'block',
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.45)',
    marginBottom: '0.4rem',
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!nuisible) { setNuisibleError(true); return }
    setNuisibleError(false)
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    fd.set('nuisible', nuisible)
    try {
      const res = await fetch('https://formspree.io/f/xvzjpwdd', {
        method: 'POST', body: fd, headers: { Accept: 'application/json' },
      })
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
            <button
              type="button"
              onClick={handleClose}
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white/60 hover:text-white hover:bg-white/10 transition-colors text-sm"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}
            >
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
            {/* Nom + Téléphone */}
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

            {/* Email */}
            <div>
              <label style={lbl}>E-mail <span style={{ color: '#f87171' }}>*</span></label>
              <input type="email" name="email" required placeholder="vous@exemple.fr" style={field} />
            </div>

            {/* Nuisible */}
            <div>
              <label style={{ ...lbl, color: nuisibleError ? '#f87171' : 'rgba(255,255,255,0.45)' }}>
                Type de nuisible
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Guêpes', 'Frelons', 'Autre', 'Je ne sais pas'].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => { setNuisible(val); setNuisibleError(false) }}
                    className="py-2.5 px-3 rounded-xl text-sm font-bold transition-all"
                    style={{
                      background: nuisible === val ? ACCENT : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${nuisible === val ? ACCENT : nuisibleError ? 'rgba(248,113,113,0.5)' : 'rgba(255,255,255,0.12)'}`,
                      color: '#fff',
                    }}
                  >
                    {val}
                  </button>
                ))}
              </div>
              {nuisibleError && <p className="text-xs mt-1.5" style={{ color: '#f87171' }}>Sélectionnez un type de nuisible</p>}
            </div>

            {/* Ville */}
            <div>
              <label style={lbl}>Où habitez-vous ?</label>
              <input type="text" name="ville" placeholder="Votre ville" style={field} />
            </div>

            {/* Message */}
            <div>
              <label style={lbl}>Décrivez votre situation</label>
              <textarea
                name="message"
                rows={3}
                placeholder="Où se trouve le nid ? Jardin, toiture, combles… Urgence ce soir ou demain ?"
                style={{ ...field, resize: 'none' }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full font-black text-white py-4 rounded-xl text-sm uppercase tracking-wider transition-all hover:opacity-90 disabled:opacity-60"
              style={{ background: ACCENT, boxShadow: `0 4px 20px rgba(232,68,26,0.3)` }}
            >
              {loading ? 'Envoi en cours…' : 'Confirmer ma demande'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
