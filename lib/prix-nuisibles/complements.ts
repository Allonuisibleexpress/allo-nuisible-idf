import type { PagePrix } from './types'
import { COMPLEMENTS_A } from './complements-a'
import { COMPLEMENTS_B } from './complements-b'
import { COMPLEMENTS_C } from './complements-c'
import { COMPLEMENTS_D, FAQ_PLUS } from './complements-d'
import { COMPLEMENTS_E } from './complements-e'
import { COMPLEMENTS_F } from './complements-f'
import { COMPLEMENTS_G } from './complements-g'
import { COMPLEMENTS_H } from './complements-h'
import { COMPLEMENTS_I } from './complements-i'
type C = NonNullable<PagePrix['complements']>
const fusion = (...l: Record<string, C>[]) => l.reduce<Record<string, C>>((acc, x) => { for (const k of Object.keys(x)) acc[k] = [...(acc[k] ?? []), ...x[k]]; return acc }, {})
export const COMPLEMENTS = fusion(COMPLEMENTS_A, COMPLEMENTS_B, COMPLEMENTS_C, COMPLEMENTS_D, COMPLEMENTS_E, COMPLEMENTS_F, COMPLEMENTS_G, COMPLEMENTS_H, COMPLEMENTS_I)
export { FAQ_PLUS }
