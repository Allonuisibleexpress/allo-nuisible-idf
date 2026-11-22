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
      // Page « Punaises de lit : traitement écologique » fusionnée avec la page cryogénie (13/11/2026, même requête)
      { source: '/services/punaises-de-lit-ecologique', destination: '/services/cryogenie-punaises-de-lit', permanent: true },
      // Adresses « parent » des pages ville (22/11/2026) : renvoyaient une erreur 404 (vues par Google pour /souris et /cafards)
      { source: '/deratisation', destination: '/services/deratisation', permanent: true },
      { source: '/souris', destination: '/services/deratisation', permanent: true },
      { source: '/punaises-de-lit', destination: '/services/punaises-de-lit', permanent: true },
      { source: '/cafards', destination: '/services/cafards-blattes', permanent: true },
      { source: '/puces', destination: '/services/puces', permanent: true },
      { source: '/acariens', destination: '/services/acariens', permanent: true },
      { source: '/anthrenes', destination: '/services/anthrenes', permanent: true },
      { source: '/chenilles-processionnaires', destination: '/services/chenilles-processionnaires', permanent: true },
      { source: '/destruction-nid-frelon', destination: '/services/guepes-frelons', permanent: true },
      // Bilan Nuisibles renommé « Baromètre des nuisibles » (22/11/2026, choix de l'utilisateur)
      { source: '/bilan-nuisibles-ile-de-france-2026', destination: '/barometre-des-nuisibles-punaises-de-lit-deratisation-2026', permanent: true },
    ]
  },
}
export default nextConfig
