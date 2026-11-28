import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

// 28/11/2026 : robots d'IA et de moteurs explicitement autorisés (ChatGPT, Claude, Perplexity, Copilot/Bing, Gemini, Apple),
// pour être lus et cités. /partage : fichiers avec bannière destinés à Google Business, pas à indexer.
const IA = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Bingbot', 'Google-Extended', 'Googlebot', 'Applebot', 'Applebot-Extended', 'DuckAssistBot', 'MistralAI-User']
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: IA, allow: '/', disallow: '/partage/' },
      { userAgent: '*', allow: '/', disallow: '/partage/' },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/video-sitemap.xml`],
  }
}
