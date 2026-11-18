// /llms-full.txt : version complète pour les assistants IA (lib/llms.ts)
import { llmsComplet } from '@/lib/llms'
export const dynamic = 'force-static'
export function GET() {
  return new Response(llmsComplet(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
