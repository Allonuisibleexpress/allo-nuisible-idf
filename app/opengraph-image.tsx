import { ImageResponse } from 'next/og'

// Image d'aperçu affichée lors d'un partage (WhatsApp, Facebook, SMS…), commune à tout le site.
export const alt = 'Allo Nuisible IDF, lutte contre les nuisibles 7j/7'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', padding: '80px', background: '#0d0d0d',
          backgroundImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(232,68,26,0.28) 0%, transparent 70%)',
          color: '#fff', fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, color: '#E8441A', letterSpacing: 2 }}>ALLO NUISIBLE IDF</div>
        <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05, marginTop: 24 }}>Votre spécialiste</div>
        <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05 }}>anti-nuisibles</div>
        <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05, color: '#E8441A' }}>en Île-de-France.</div>
        <div style={{ fontSize: 34, marginTop: 40, color: 'rgba(255,255,255,0.8)' }}>Intervention le jour même, 7j/7 · 07 68 07 72 19</div>
      </div>
    ),
    size,
  )
}
