// /llms.txt généré au build depuis les données du site (lib/llms.ts)
import { llmsCourt } from '@/lib/llms'
export const dynamic = 'force-static'
export function GET() {
  return new Response(llmsCourt(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
