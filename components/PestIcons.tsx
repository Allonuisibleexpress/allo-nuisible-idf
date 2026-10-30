'use client'

/**
 * Jeu d'icônes SVG sur-mesure — style ligne premium, cohérent.
 * viewBox 32×32, tracé en currentColor (teintable), stroke 1.7.
 * Remplace les emojis pour un rendu haut de gamme.
 */

type IconProps = { className?: string; size?: number }

const base = (size = 32): React.SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
})

/* ── Punaises de lit — corps ovale segmenté, vue de dessus ── */
export function IconPunaise({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <ellipse cx="16" cy="17" rx="6.5" ry="8" />
      <path d="M16 9.2c-1.4-1.5-3-2.4-4.4-2.6M16 9.2c1.4-1.5 3-2.4 4.4-2.6" />
      <path d="M9.5 13.5h13M9.6 17.5h12.8M10.5 21.5h11" />
      <path d="M9.5 13.5 6 11.5M22.5 13.5 26 11.5M9.6 17.5 6 17.5M22.4 17.5 26 17.5M10.5 21.5 7 23.5M21.5 21.5 25 23.5" />
    </svg>
  )
}

/* ── Cafards & blattes — corps allongé, longues antennes ── */
export function IconCafard({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <ellipse cx="16" cy="18" rx="5.2" ry="8.5" />
      <circle cx="16" cy="8.5" r="2.4" />
      <path d="M14.4 6.7C12.5 4.6 10.4 3.6 8.4 3.7M17.6 6.7c1.9-2.1 4-3.1 6-3" />
      <path d="M10.9 14.5 6 12M21.1 14.5 26 12M10.8 18.5 5.6 18.5M21.2 18.5 26.4 18.5M11 22.5 6.4 25M21 22.5 25.6 25" />
    </svg>
  )
}

/* ── Fourmis — trois segments, antennes coudées ── */
export function IconFourmi({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <circle cx="16" cy="8.5" r="2.6" />
      <ellipse cx="16" cy="15" rx="2.7" ry="3.1" />
      <ellipse cx="16" cy="22.5" rx="4" ry="4.6" />
      <path d="M14.5 6.7c-1.3-1.6-2.4-2.2-3.9-2.2M17.5 6.7c1.3-1.6 2.4-2.2 3.9-2.2" />
      <path d="M13.6 13.2 8 10.5M18.4 13.2 24 10.5M13.4 15.6 7.8 16.4M18.6 15.6 24.2 16.4M13.8 17.6 8.4 20.2M18.2 17.6 23.6 20.2" />
    </svg>
  )
}

/* ── Guêpes & frelons — abdomen rayé, ailes ── */
export function IconGuepe({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <circle cx="16" cy="7.5" r="2.3" />
      <ellipse cx="16" cy="13" rx="3" ry="3.2" />
      <path d="M16 16.2c-2.4.4-3.6 2-3.6 4.4 0 2.8 1.7 5.6 3.6 6.9 1.9-1.3 3.6-4.1 3.6-6.9 0-2.4-1.2-4-3.6-4.4Z" />
      <path d="M12.7 19.8h6.6M13 23h6" />
      <path d="M13.2 11.5C9.8 9.6 6.6 9.9 5 12.2c1.9 2.2 5.1 2.6 7.7 1M18.8 11.5c3.4-1.9 6.6-1.6 8.2.7-1.9 2.2-5.1 2.6-7.7 1" />
      <path d="M15 5.6c-.9-1-1.9-1.5-2.9-1.4M17 5.6c.9-1 1.9-1.5 2.9-1.4" />
    </svg>
  )
}

/* ── Rongeurs — souris de profil, grande oreille, queue enroulée ── */
export function IconRongeur({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      {/* corps + tête (silhouette fermée, museau à droite) */}
      <path d="M24.8 18.2c-1.8 0-2.7-.9-3.6-1.7-.9-.8-1.8-1.4-3-1.6.5-.7.8-1.5.8-2.4 0-1.9-1.5-3.4-3.4-3.4-1.6 0-3 1.1-3.3 2.7C8.7 12.4 6 15.3 6 18.6c0 1.9 1.5 3.4 3.4 3.4h9.9c3 0 5.5-1.6 5.5-3.8Z" />
      {/* oreille */}
      <circle cx="12.6" cy="11" r="3" />
      {/* œil + museau */}
      <circle cx="15.4" cy="13.2" r=".9" fill="currentColor" stroke="none" />
      <circle cx="24.4" cy="18.1" r=".7" fill="currentColor" stroke="none" />
      {/* queue enroulée */}
      <path d="M7.4 21.4c-2.6.5-4.4 2-4.4 4 0 1.2.9 2.1 2.1 2.1 1 0 1.7-.7 1.7-1.6" />
    </svg>
  )
}

/* ── Pigeons — oiseau de profil posé ── */
export function IconPigeon({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      {/* corps (silhouette, tête à gauche, queue à droite) */}
      <path d="M12.6 13.2c2.5.5 4.4 2 5.4 4 1.3 2.7 3.9 3.6 6.6 3.6-1.1 1.9-3 2.9-5.2 2.9h-6.8c-3.3 0-6-2.6-6-5.9 0-2.2 1.5-4 3.6-4.5Z" />
      {/* tête */}
      <circle cx="10.8" cy="9.8" r="3.2" />
      {/* bec */}
      <path d="M7.9 9.2 4.8 10.2 7.9 11.5" />
      {/* aile */}
      <path d="M12.4 16c1.7.3 3.1 1.3 4 2.8" />
      {/* pattes */}
      <path d="M12 23.6 11.4 26.4M15.6 23.6 15 26.4" />
      {/* œil */}
      <circle cx="10.4" cy="9.3" r=".8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/* ── Dératisation — bouclier + rongeur (protection ERP) ── */
export function IconDeratisation({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M16 3.5 26 6.4v7.2c0 6.3-4.2 11.2-10 13.4C10.2 24.8 6 19.9 6 13.6V6.4L16 3.5Z" />
      <path d="M11 17.3c0-2.2 1.8-3.9 4.1-3.9 1.3 0 2.3.5 3.4 1.3.8.6 1.4.9 2.3 1" />
      <path d="M20.8 15.7c1.3 0 2.2-.9 2.2-2 0-.5-.2-1-.6-1.4" />
      <path d="M11 17.3c0 1.4 1 2.4 2.4 2.4h3.7" />
      <circle cx="13.4" cy="12.7" r="1.4" />
    </svg>
  )
}

/* ── Désinfection — pulvérisateur + fines gouttes ── */
export function IconDesinfection({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M13 11h5.2c1.9 0 3.4 1.5 3.4 3.4v9.1c0 1.6-1.3 3-3 3H14c-1.6 0-3-1.3-3-3v-9.1c0-1.4.8-2.6 2-3.4Z" />
      <path d="M13 11V8.4c0-.8.6-1.4 1.4-1.4h3" />
      <path d="M17.4 7 22 5.6M17.4 8.6h4.8M18 10.4l4.3 1.2" />
      <path d="M26 6.2c1 0 1 1.4 0 1.4s-1-1.4 0-1.4ZM27 10.4c1 0 1 1.4 0 1.4s-1-1.4 0-1.4ZM25.6 14.4c1 0 1 1.4 0 1.4s-1-1.4 0-1.4Z" fill="currentColor" stroke="none" />
      <path d="M14 20h4.6" />
    </svg>
  )
}

/* ── Chenilles processionnaires : corps segmenté, poils urticants ── */
export function IconChenille({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <circle cx="6.5" cy="19" r="2.8" />
      <circle cx="11.5" cy="18" r="3" />
      <circle cx="17" cy="18" r="3" />
      <circle cx="22.5" cy="19" r="2.8" />
      <circle cx="26.8" cy="16.2" r="2.2" />
      <path d="M6.5 16.2v-2.6M11.5 15v-3M17 15v-3M22.5 16.2v-2.6M9 15.6l-1.4-2.2M14.3 14.8l-.9-2.4M19.7 14.8l.9-2.4" />
      <path d="M7.5 21.6v2.6M12.5 20.9v2.8M17.5 20.9v2.8M22 21.6v2.6" />
    </svg>
  )
}

/* ── Registre / map (icônes utilitaires) ── */
export function IconShieldCheck({ className, size }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M16 3.5 26 6.4v7.2c0 6.3-4.2 11.2-10 13.4C10.2 24.8 6 19.9 6 13.6V6.4L16 3.5Z" />
      <path d="m11.5 15 3 3 6-6.5" />
    </svg>
  )
}

/* Mapping nom → composant, pour usage data-driven */
export const PEST_ICONS = {
  'punaises-de-lit': IconPunaise,
  'cafards-blattes': IconCafard,
  fourmis: IconFourmi,
  'guepes-frelons': IconGuepe,
  rongeurs: IconRongeur,
  pigeons: IconPigeon,
  chenilles: IconChenille,
  deratisation: IconDeratisation,
  desinfection: IconDesinfection,
} as const

export type PestKey = keyof typeof PEST_ICONS

export function PestIcon({ name, className, size }: { name: PestKey } & IconProps) {
  const Cmp = PEST_ICONS[name]
  return Cmp ? <Cmp className={className} size={size} /> : null
}
