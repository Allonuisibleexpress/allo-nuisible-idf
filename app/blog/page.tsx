'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ARTICLES } from './articles'

interface Card {
  slug: string
  title: string
  description: string
  date: string
  category: string
}

// Article historique (page statique dédiée) + articles data-driven.
const legacy: Card[] = [
  {
    slug: 'punaise-colza-invasion-idf-2026',
    title: `Punaise de colza en Île-de-France : invasion estivale sans danger (12 jours)`,
    description: `Invasion massive de punaises de colza après moisson ? Complètement inoffensif. Voici ce qu'il faut vraiment faire (et ne pas faire).`,
    date: '2026-08-23',
    category: 'Guide',
  },
]

const cards: Card[] = [
  ...ARTICLES.map((a) => ({ slug: a.slug, title: a.title, description: a.description, date: a.date, category: a.category })),
  ...legacy,
].sort((a, b) => (a.date < b.date ? 1 : -1))

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a0a', minHeight: '100vh' }}>

        {/* Hero */}
        <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'linear-gradient(135deg, #0a0a0a 0%, rgba(232, 68, 26, 0.03) 100%)', borderBottom: '1px solid rgba(232, 68, 26, 0.15)' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#E8441A', marginBottom: '12px' }}>Expertise & conseils</p>
            <h1 style={{ fontSize: 'clamp(32px, 8vw, 56px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: '16px' }}>Blog anti-nuisibles</h1>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Guides complets, conseils de terrain et actualités sur les nuisibles en Île-de-France. Rédigé par nos techniciens certifiés Certibiocide.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section style={{ padding: '60px 16px', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
                <article
                  style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '26px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(232, 68, 26, 0.2)', transition: 'all 0.3s ease', cursor: 'pointer' }}
                  className="hover:bg-white/5 hover:border-[#E8441A]/40 hover:shadow-lg hover:shadow-[#E8441A]/10"
                >
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#E8441A', background: 'rgba(232, 68, 26, 0.15)', padding: '4px 10px', borderRadius: '6px' }}>{article.category}</span>
                    <time style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>
                      {new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.3 }} className="group-hover:text-[#E8441A]">{article.title}</h2>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6, flexGrow: 1 }}>{article.description}</p>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#E8441A', marginTop: '18px' }}>Lire l'article →</span>
                </article>
              </Link>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
