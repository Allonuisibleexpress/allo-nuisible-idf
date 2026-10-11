import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ARTICLES, getArticle, type Block } from '../articles'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug)
  if (!a) return {}
  const url = `https://allonuisibleidf.fr/blog/${a.slug}`
  return {
    title: `${a.seoTitle} | Allo Nuisible IDF`,
    description: a.description,
    alternates: { canonical: url },
    openGraph: {
      title: a.seoTitle,
      description: a.description,
      url,
      type: 'article',
      locale: 'fr_FR',
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main style={{ background: '#0a0a0a', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ paddingTop: '120px', paddingBottom: '40px', background: 'linear-gradient(135deg, #0a0a0a 0%, rgba(232, 68, 26, 0.05) 100%)', borderBottom: '1px solid rgba(232, 68, 26, 0.15)' }}>
          <div className="max-w-3xl mx-auto px-4">
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
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4" style={{ paddingTop: '48px', paddingBottom: '80px' }}>

          {/* EN BREF */}
          <section style={{ background: 'rgba(232, 68, 26, 0.08)', border: '1px solid rgba(232, 68, 26, 0.25)', borderRadius: '16px', padding: '24px', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: '#E8441A', marginBottom: '12px' }}>En bref</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', margin: 0 }}>{a.tldr}</p>
          </section>

          {a.blocks.map(renderBlock)}

          {/* Ce qu'on observe sur le terrain */}
          <div style={{ borderLeft: '3px solid #E8441A', background: 'rgba(255,255,255,0.03)', borderRadius: '0 12px 12px 0', padding: '22px 24px', marginTop: '48px', marginBottom: '8px' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: '#E8441A', marginBottom: '12px' }}>Ce qu'on observe sur le terrain</p>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', marginBottom: '12px' }}>« {a.terrain} »</p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', margin: 0 }}>L'équipe Allo Nuisible IDF, techniciens certifiés Certibiocide en Île-de-France</p>
          </div>

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
