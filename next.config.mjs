/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Une seule adresse officielle : www.allonuisibleidf.fr redirige vers allonuisibleidf.fr (redirection permanente)
  // Réglages de sécurité envoyés avec chaque page (13/11/2026)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.allonuisibleidf.fr' }],
        destination: 'https://allonuisibleidf.fr/:path*',
        permanent: true,
      },
      // Page « Rongeurs » fusionnée avec « Dératisation » (même requête, une seule page)
      { source: '/services/rongeurs', destination: '/services/deratisation', permanent: true },
    ]
  },
}
export default nextConfig
