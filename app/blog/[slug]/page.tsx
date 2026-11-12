import type { Metadata } from 'next'
import { OG_IMAGE } from '@/lib/seo'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ARTICLES, getArticle, type Block } from '../articles'
import NextImage from 'next/image'
import { PHOTOS_CHANTIERS } from '@/lib/photos-chantiers'
import MediasChantier, { Filigrane } from '@/components/MediasChantier'
import VignettesChantier from '@/components/VignettesChantier'
import { ImageCycle } from '@/components/CyclePunaises'
import { VILLES_PUNAISES } from '@/lib/villes-punaises'
import { VILLES_CAFARDS } from '@/lib/villes-cafards'
import { VILLES_FOURMIS } from '@/lib/villes-fourmis'
import { VILLES_PUCES } from '@/lib/villes-puces'
import { VILLES_ACARIENS } from '@/lib/villes-acariens'
import { VILLES_CHENILLES } from '@/lib/villes-chenilles'
import { VILLES_FRELONS, frelonsIndexee } from '@/lib/villes-frelons'
import { plusProches } from '@/lib/centres-villes'

// Maillage blog → pages ville du même nuisible (12/11/2026) : 16 villes autour de notre base de Saint-Maurice
const VILLES_PAR_THEME: Record<string, { base: string; mot: string; villes: { slug: string; nom: string }[] }> = {
  'Punaises de lit': { base: '/punaises-de-lit', mot: 'Punaises de lit', villes: VILLES_PUNAISES },
  'Cafards': { base: '/cafards', mot: 'Cafards', villes: VILLES_CAFARDS },
  'Fourmis': { base: '/fourmis', mot: 'Fourmis', villes: VILLES_FOURMIS },
  'Puces': { base: '/puces', mot: 'Puces', villes: VILLES_PUCES },
  'Acariens': { base: '/acariens', mot: 'Acariens', villes: VILLES_ACARIENS },
  'Chenilles processionnaires': { base: '/chenilles-processionnaires', mot: 'Chenilles', villes: VILLES_CHENILLES },
  'Guêpes et frelons': { base: '/destruction-nid-frelon', mot: 'Nid de frelons', villes: VILLES_FRELONS.filter((v) => frelonsIndexee(v.slug)) },
}
function villesTheme(cat: string) {
  const t = VILLES_PAR_THEME[cat]
  if (!t) return null
  const base = t.villes.find((v) => v.slug === 'saint-maurice')
  return { ...t, liste: [...(base ? [base] : []), ...plusProches(t.villes, 'saint-maurice', base ? 15 : 16)] }
}
import IdentifierRongeur from '@/components/blog/IdentifierRongeur'
import EchelleCrottes from '@/components/blog/EchelleCrottes'
import BruitsRongeurs from '@/components/blog/BruitsRongeurs'

// Maillage blog → pages dératisation par ville (12/11/2026) : sur chaque article rongeurs,
// les départements et les villes où nos pages sont déjà vues par Google.
const RONGEURS = /(^|-)(rats?|souris|rongeurs?|lerot|deratisation|mulot|campagnol)(-|$)/
const DERAT_DEPS: [string, string][] = [['paris', 'Paris'], ['val-de-marne', 'Val-de-Marne (94)'], ['hauts-de-seine', 'Hauts-de-Seine (92)'], ['essonne', 'Essonne (91)'], ['yvelines', 'Yvelines (78)'], ['seine-et-marne', 'Seine-et-Marne (77)']]
const DERAT_VILLES: [string, string][] = [['charenton-le-pont', 'Charenton-le-Pont'], ['cachan', 'Cachan'], ['courbevoie', 'Courbevoie'], ['colombes', 'Colombes'], ['clichy', 'Clichy'], ['antony', 'Antony'], ['issy-les-moulineaux', 'Issy-les-Moulineaux'], ['rueil-malmaison', 'Rueil-Malmaison'], ['maisons-alfort', 'Maisons-Alfort'], ['asnieres-sur-seine', 'Asnières-sur-Seine'], ['paris-12', 'Paris 12e'], ['paris-20', 'Paris 20e'], ['saint-maurice', 'Saint-Maurice'], ['creteil', 'Créteil'], ['saint-maur-des-fosses', 'Saint-Maur-des-Fossés'], ['vitry-sur-seine', 'Vitry-sur-Seine']]

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug)
  if (!a) return {}
  const url = `https://allonuisibleidf.fr/blog/${a.slug}`
  return {
    title: a.seoTitle,
    description: a.description,
    alternates: { canonical: url },
    openGraph: {
      title: a.seoTitle,
      description: a.description,
      url,
      type: 'article',
      locale: 'fr_FR',
      images: [a.ogImage ? { url: a.ogImage, width: 1600, height: 1000, alt: a.seoTitle } : OG_IMAGE],
    },
  }
}

// Rendu inline : **gras** et [texte](/lien).
function inline(text: string, keyBase: string) {
  const nodes: React.ReactNode[] = []
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    if (m[1] !== undefined) {
      nodes.push(<strong key={`${keyBase}-b${i}`} style={{ color: '#fff', fontWeight: 700 }}>{m[1]}</strong>)
    } else {
      nodes.push(
        <Link key={`${keyBase}-l${i}`} href={m[3]} style={{ color: '#E8441A', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
          {m[2]}
        </Link>
      )
    }
    last = re.lastIndex
    i++
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

const P = { fontSize: '16px', lineHeight: 1.75, color: 'rgba(255,255,255,0.78)', marginBottom: '18px' } as const

function renderBlock(b: Block, idx: number) {
  const k = `b${idx}`
  switch (b.t) {
    case 'p':
      return <p key={k} style={P}>{inline(b.x, k)}</p>
    case 'h2':
      return <h2 key={k} style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 800, color: '#fff', marginTop: '48px', marginBottom: '16px', lineHeight: 1.25 }}>{b.x}</h2>
    case 'h3':
      return <h3 key={k} style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginTop: '32px', marginBottom: '12px' }}>{b.x}</h3>
    case 'ul':
      return (
        <ul key={k} style={{ marginBottom: '18px', paddingLeft: '4px', listStyle: 'none' }}>
          {b.items.map((it, j) => (
            <li key={j} style={{ ...P, marginBottom: '10px', display: 'flex', gap: '12px' }}>
              <span style={{ color: '#E8441A', fontWeight: 900, flexShrink: 0 }}>•</span>
              <span>{inline(it, `${k}-${j}`)}</span>
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={k} style={{ marginBottom: '18px', paddingLeft: '4px', listStyle: 'none', counterReset: 'li' }}>
          {b.items.map((it, j) => (
            <li key={j} style={{ ...P, marginBottom: '12px', display: 'flex', gap: '14px' }}>
              <span style={{ color: '#E8441A', fontWeight: 800, flexShrink: 0, minWidth: '24px' }}>{j + 1}.</span>
              <span>{inline(it, `${k}-${j}`)}</span>
            </li>
          ))}
        </ol>
      )
    case 'callout': {
      const tones = {
        warn: { bg: 'rgba(232, 68, 26, 0.08)', bd: 'rgba(232, 68, 26, 0.3)', c: '#E8441A' },
        ok: { bg: 'rgba(34, 197, 94, 0.08)', bd: 'rgba(34, 197, 94, 0.3)', c: '#22c55e' },
        info: { bg: 'rgba(255,255,255,0.04)', bd: 'rgba(255,255,255,0.15)', c: 'rgba(255,255,255,0.9)' },
      }[b.tone]
      return (
        <div key={k} style={{ background: tones.bg, border: `1px solid ${tones.bd}`, borderRadius: '14px', padding: '20px 22px', marginBottom: '24px', marginTop: '8px' }}>
          <p style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: tones.c, marginBottom: '8px' }}>{b.title}</p>
          <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'rgba(255,255,255,0.85)', margin: 0 }}>{inline(b.x, k)}</p>
        </div>
      )
    }
    case 'cycle':
      return <div key={k} style={{ margin: '12px 0 32px', width: 'min(1100px, calc(100vw - 32px))', position: 'relative', left: '50%', transform: 'translateX(-50%)' }}><ImageCycle /></div>
    case 'quiz':
      return <IdentifierRongeur key={k} />
    case 'crottes':
      return <EchelleCrottes key={k} />
    case 'bruits':
      return <BruitsRongeurs key={k} animaux={b.animaux} />
    case 'img':
      return (
        <figure key={k} style={{ margin: '8px auto 28px', maxWidth: '520px', textAlign: 'center' }}>
          <img src={b.src} alt={b.alt} loading="lazy" style={{ width: '100%', borderRadius: '14px', display: 'block' }} />
          <figcaption style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', marginTop: '10px' }}>{inline(b.legende, k)}</figcaption>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>
            Photo : {b.credit}, <a href={b.page} target="_blank" rel="noopener noreferrer nofollow" style={{ textDecoration: 'underline' }}>{b.licence}</a>, Wikimedia Commons
          </p>
        </figure>
      )
    case 'table':
      return (
        <div key={k} style={{ overflowX: 'auto', marginBottom: '28px', marginTop: '8px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.12)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '420px' }}>
            <thead>
              <tr>
                {b.head.map((h, j) => (
                  <th key={j} style={{ textAlign: 'left', padding: '12px 14px', color: '#E8441A', fontWeight: 700, background: 'rgba(232, 68, 26, 0.08)', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, j) => (
                <tr key={j}>
                  {r.map((c, ci) => (
                    <td key={ci} style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.78)', borderBottom: '1px solid rgba(255,255,255,0.07)', fontWeight: ci === 0 ? 600 : 400 }}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug)
  if (!a) notFound()

  const url = `https://allonuisibleidf.fr/blog/${a.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: a.title,
        description: a.description,
        datePublished: a.date,
        dateModified: a.date,
        inLanguage: 'fr-FR',
        author: { '@type': 'Organization', name: 'Allo Nuisible IDF', url: 'https://allonuisibleidf.fr' },
        publisher: { '@type': 'Organization', name: 'Allo Nuisible IDF' },
        mainEntityOfPage: url,
        abstract: a.tldr,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://allonuisibleidf.fr' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://allonuisibleidf.fr/blog' },
          { '@type': 'ListItem', position: 3, name: a.title, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: a.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  // Récits de chantier : mise en page centrée
  const recit = !!(a.videos || a.mediasEnHaut)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: '#0a0a0a', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ paddingTop: '120px', paddingBottom: '40px', background: 'linear-gradient(135deg, #0a0a0a 0%, rgba(232, 68, 26, 0.05) 100%)', borderBottom: '1px solid rgba(232, 68, 26, 0.15)' }}>
          <div className="max-w-3xl mx-auto px-4 recit-centre">
            <div style={{ marginBottom: '20px' }}>
              <Link href="/blog" style={{ fontSize: '12px', fontWeight: 600, color: '#E8441A', textDecoration: 'none' }}>← Retour au blog</Link>
            </div>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#E8441A', marginBottom: '12px' }}>{a.category}</p>
            <h1 style={{ fontSize: 'clamp(28px, 6vw, 46px)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '16px' }}>{a.title}</h1>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
              <span>Par les techniciens certifiés Certibiocide</span>
              <span>·</span>
              <time dateTime={a.date}>{new Date(a.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <span>·</span>
              <span>Lecture {a.readMin} min</span>
            </div>
            {(a.videos || a.mediasEnHaut) && (
              <div style={{ marginTop: '20px' }}>
                <VignettesChantier photos={a.photos} videos={a.videos} centre={recit} texte="Photos et vidéos du chantier" />
              </div>
            )}
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 recit-centre" style={{ paddingTop: '48px', paddingBottom: '80px' }}>

          {/* Le chantier en images, tout en haut : les clients veulent voir avant de lire */}
          {(a.videos || a.mediasEnHaut) && (
            <div id="chantier-en-images" style={{ marginBottom: '40px', scrollMarginTop: '90px' }}>
              <MediasChantier photos={a.photos} videos={a.videos} />
            </div>
          )}

          {/* EN BREF */}
          <section style={{ background: 'rgba(232, 68, 26, 0.08)', border: '1px solid rgba(232, 68, 26, 0.25)', borderRadius: '16px', padding: '24px', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: '#E8441A', marginBottom: '12px' }}>En bref</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', margin: 0 }}>{a.tldr}</p>
          </section>

          {a.blocks.map(renderBlock)}

          {/* Vraies photos de chantier (en haut de page quand il y a des vidéos) */}
          {a.photos && !a.videos && !a.mediasEnHaut && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px', marginTop: '40px' }}>
              {a.photos.map((cle) => {
                const p = PHOTOS_CHANTIERS[cle]
                return (
                  <figure key={cle} style={{ margin: 0 }}>
                    <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: '12px', overflow: 'hidden', background: '#1a1a1a' }}>
                      <NextImage src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 360px" style={{ objectFit: 'cover' }} />
                      <Filigrane />
                    </div>
                    <figcaption style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginTop: '8px', lineHeight: 1.5 }}>{p.legende}</figcaption>
                  </figure>
                )
              })}
            </div>
          )}

          {/* Ce qu'on observe sur le terrain (uniquement si un vrai retour d'expérience est fourni) */}
          {a.terrain && (
          <div style={{ borderLeft: '3px solid #E8441A', background: 'rgba(255,255,255,0.03)', borderRadius: '0 12px 12px 0', padding: '22px 24px', marginTop: '48px', marginBottom: '8px' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: '#E8441A', marginBottom: '12px' }}>Ce qu'on observe sur le terrain</p>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', marginBottom: '12px' }}>« {a.terrain} »</p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', margin: 0 }}>L'équipe Allo Nuisible IDF, techniciens certifiés Certibiocide en Île-de-France</p>
          </div>
          )}

          {/* FAQ */}
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 800, color: '#fff', marginTop: '56px', marginBottom: '20px' }}>Questions fréquentes</h2>
          <div style={{ display: 'grid', gap: '14px' }}>
            {a.faq.map((f, j) => (
              <div key={j} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '18px 20px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{f.q}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>

          {/* Sources */}
          {a.sources.length > 0 && (
            <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'rgba(255,255,255,0.5)', marginBottom: '10px' }}>Sources</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {a.sources.map((s, j) => (
                  <li key={j} style={{ fontSize: '13px', marginBottom: '6px' }}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>{s.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Dératisation par ville (articles rongeurs) */}
          {(RONGEURS.test(a.slug) || a.service.href.includes('deratisation')) && (
            <section style={{ marginTop: '48px', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(20px, 3.5vw, 26px)', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Dératisation dans votre ville, dès 120 €</h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '18px' }}>Rats ou souris chez vous ? Choisissez votre ville ou votre département.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '12px' }}>
                {DERAT_DEPS.map(([s, n]) => (
                  <a key={s} href={`/deratisation/${s}`} style={{ fontSize: '13px', fontWeight: 700, color: '#fff', padding: '7px 14px', borderRadius: '99px', background: 'rgba(232,68,26,0.15)', border: '1px solid rgba(232,68,26,0.4)', textDecoration: 'none' }}>Dératisation {n}</a>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                {DERAT_VILLES.map(([s, n]) => (
                  <a key={s} href={`/deratisation/${s}`} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', padding: '6px 13px', borderRadius: '99px', border: '1px solid rgba(255,255,255,0.14)', textDecoration: 'none' }}>Dératisation {n}</a>
                ))}
              </div>
            </section>
          )}

          {/* Pages ville du même nuisible */}
          {(() => {
            const t = villesTheme(a.category)
            if (!t) return null
            return (
              <section style={{ marginTop: '48px', textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(20px, 3.5vw, 26px)', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{t.mot} : nos pages près de chez vous</h2>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>Prix, méthode et délai d'intervention dans votre ville.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                  {t.liste.map((v) => (
                    <a key={v.slug} href={`${t.base}/${v.slug}`} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', padding: '6px 13px', borderRadius: '99px', border: '1px solid rgba(255,255,255,0.14)', textDecoration: 'none' }}>{v.nom}</a>
                  ))}
                </div>
              </section>
            )
          })()}

          {/* À lire aussi : articles du même thème (maillage blog, 12/11/2026) */}
          {(() => {
            const lies = ARTICLES.filter((x) => x.slug !== a.slug && x.category === a.category).sort((x, y) => y.date.localeCompare(x.date)).slice(0, 6)
            if (!lies.length) return null
            return (
              <section style={{ marginTop: '48px' }}>
                <h2 style={{ fontSize: 'clamp(20px, 3.5vw, 26px)', fontWeight: 800, color: '#fff', marginBottom: '16px', textAlign: 'center' }}>À lire aussi sur le même sujet</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
                  {lies.map((x) => (
                    <a key={x.slug} href={`/blog/${x.slug}`} style={{ display: 'block', padding: '14px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 700, lineHeight: 1.4 }}>
                      {x.seoTitle}
                      <span style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: '#E8441A', marginTop: '6px' }}>Lire l'article →</span>
                    </a>
                  ))}
                </div>
              </section>
            )
          })()}

          {/* CTA */}
          <section style={{ background: 'rgba(232, 68, 26, 0.1)', border: '2px solid rgba(232, 68, 26, 0.3)', borderRadius: '18px', padding: '36px', marginTop: '56px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>{a.cta.title}</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', marginBottom: '10px', maxWidth: '540px', marginLeft: 'auto', marginRight: 'auto' }}>{a.cta.text}</p>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#22c55e', marginBottom: '24px' }}>Aucune majoration la nuit, le week-end ni les jours fériés.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+33768077219" style={{ display: 'inline-block', background: '#E8441A', color: '#fff', fontWeight: 800, fontSize: '14px', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none' }}>Appeler : 07 68 07 72 19</a>
              <Link href={a.service.href} style={{ display: 'inline-block', background: 'transparent', color: '#fff', fontWeight: 700, fontSize: '14px', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)' }}>{a.service.label}</Link>
            </div>
          </section>

        </article>
      </main>
      <Footer />
    </>
  )
}
