// Chaîne YouTube « Allo Nuisible IDF » (@allonuisibleidf), créée le 06/11/2026.
// Correspondance entre les vidéos du site (public/chantiers) et leur version publiée sur YouTube.
export const CHAINE_YOUTUBE = 'https://www.youtube.com/@allonuisibleidf'

export const YOUTUBE_VIDEOS: Record<string, string> = {
  '/chantiers/punaises-ivry-lit-medicalise-video.mp4': 'JhLxYlhejvM',
  '/chantiers/punaises-paris-12-infestation-video.mp4': 'UUd88dVCh1w',
  '/chantiers/punaises-creteil-lattes-video.mp4': 'Add5rFXETgo',
  '/chantiers/cryogenie-cadre-lit-lattes-video.mp4': 'LncI3RokIfw',
  '/chantiers/rats-diogene-video-2.mp4': 'dIq3ZSvGwqs',
  '/chantiers/rats-trous-cloison-video.mp4': 'Xas1AzmaqWc',
  '/chantiers/frelons-asiatiques-nid-video.mp4': 'nWg6ElvfdUc',
  '/chantiers/frelons-cheminee-nogent-sur-marne-video.mp4': '1EjWa9lK0u0',
  '/chantiers/guepes-gretz-armainvilliers-nid-video.mp4': 'DzsEaDJASno',
  '/chantiers/punaises-de-lit-paris-16-gros-plan-video.mp4': 'Xa4WFvJn4Sk',
}

export const lienYoutube = (src: string) => (YOUTUBE_VIDEOS[src] ? `https://www.youtube.com/shorts/${YOUTUBE_VIDEOS[src]}` : null)

// Page Facebook « Allo Nuisible IDF », créée le 14/11/2026 (bas de page de tout le site + données structurées sameAs).
// Si une adresse courte (facebook.com/allonuisibleidf) est choisie plus tard, la changer ici uniquement.
export const PAGE_FACEBOOK = 'https://www.facebook.com/profile.php?id=61596338559755'

// Compte Instagram professionnel « allonuisibleidf », créé le 14/11/2026 (bas de page + données structurées sameAs).
export const COMPTE_INSTAGRAM = 'https://www.instagram.com/allonuisibleidf/'

// Compte Pinterest professionnel « allonuisibleidf », créé le 14/11/2026 (bas de page + données structurées sameAs).
export const COMPTE_PINTEREST = 'https://www.pinterest.fr/allonuisibleidf/'

// Compte TikTok « @allo.nuisible.idf », créé le 14/11/2026 (bas de page + données structurées sameAs).
export const COMPTE_TIKTOK = 'https://www.tiktok.com/@allo.nuisible.idf'
