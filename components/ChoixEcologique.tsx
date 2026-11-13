/* eslint-disable @next/next/no-img-element */
// Choix rapide en haut de la page « Écologique » (13/11/2026, demande de l'utilisateur) :
// le client choisit son problème (rongeurs, punaises de lit, autre nuisible) et arrive sur la bonne page.
import { ArrowRight, Leaf } from 'lucide-react'
import { Filigrane } from '@/components/MediasChantier'

const VERT = '#3FB27F'

type Choix = { href: string; photo: string; alt: string; position: string; banniere: boolean; photo2?: { src: string; alt: string; position: string; credit?: string }; titre: string; sous: string; texte: string }

const CHOIX: Choix[] = [
  {
    href: '/services/deratisation-ecologique',
    photo: '/chantiers/choix/rats-houssem-rat-capture.jpg',
    alt: 'Technicien Allo Nuisible IDF tenant un rat capturé lors d’une dératisation',
    position: 'center 35%',
    banniere: false, // bannière déjà incrustée dans la photo
    titre: 'Rats et souris',
    sous: 'Dératisation écologique',
    texte: 'Pièges sans raticide (Ekomille, pièges connectés) et accès rebouchés. Aucun poison chez vous.',
  },
  {
    href: '/services/cryogenie-punaises-de-lit',
    photo: '/chantiers/choix/punaises-cryogenie-lit.jpg',
    alt: 'Technicien avec la lance de cryogénie sur un sommier infesté de punaises de lit',
    position: 'center center',
    banniere: false, // bannière déjà incrustée dans la vidéo
    // Deuxième photo à droite : une punaise de lit adulte en gros plan (photo CDC, domaine public, sans notre bannière : ce n'est pas notre photo)
    photo2: { src: '/chantiers/choix/punaise-de-lit-cdc.jpg', alt: 'Punaise de lit adulte (Cimex lectularius) en gros plan', position: '88% center', credit: 'Photo : CDC' },
    titre: 'Punaises de lit',
    sous: 'Cryogénie à −78 °C',
    texte: 'Neige carbonique, vapeur sèche et chambre froide : punaises et œufs éliminés sans insecticide.',
  },
  {
    href: '/identifier-nuisible',
    photo: '/chantiers/choix/autre-nuisible-intervention.jpg',
    alt: 'Technicien Allo Nuisible IDF en tenue de protection sur un balcon',
    position: 'center 30%',
    banniere: true,
    titre: 'Un autre nuisible',
    sous: 'On l’identifie avec vous',
    texte: 'Chenilles, acariens, pigeons ou autre : identifiez-le, nous vous disons si un traitement sans produit est possible.',
  },
]

export default function ChoixEcologique() {
  return (
    <section id="choix-ecologique" className="px-4 sm:px-6 py-12 md:py-16 scroll-mt-20" style={{ background: '#081009' }}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: VERT }}>
          <Leaf className="w-4 h-4" aria-hidden="true" /> Sans biocide
        </p>
        <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
          Quel est votre problème ?
        </h2>
        <p className="text-white/70 mt-3 max-w-2xl mx-auto">
          Choisissez votre nuisible : vous arrivez directement sur notre traitement écologique, sans produit chimique.
        </p>

        <div className="mt-8 grid gap-4 md:gap-5 md:grid-cols-3">
          {CHOIX.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="group flex flex-col items-center text-center rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-1"
              style={{ background: 'rgba(63,178,127,0.07)', border: '1.5px solid rgba(63,178,127,0.45)' }}
            >
              <span className="relative block w-full aspect-[4/3] overflow-hidden">
                                {c.photo2 ? (
                  <span className="grid grid-cols-[2fr_3fr] gap-0.5 w-full h-full">
                    <img src={c.photo} alt={c.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" style={{ objectPosition: c.position }} />
                    <span className="relative block w-full h-full overflow-hidden">
                      {/* Fond flouté de la même photo, punaise affichée en entier par-dessus */}
                      <img src={c.photo2.src} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-125 blur-md brightness-90" />
                      <img src={c.photo2.src} alt={c.photo2.alt} loading="lazy" className="relative w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
                      {c.photo2.credit && <span className="absolute right-1.5 bottom-1.5 text-[10px] text-white/90 bg-black/55 px-1.5 py-0.5 rounded">{c.photo2.credit}</span>}
                    </span>
                  </span>
                ) : (
                  <img src={c.photo} alt={c.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" style={{ objectPosition: c.position }} />
                )}
                {c.banniere && (c.photo2 ? <span className="absolute left-0 bottom-0 w-2/5 h-full pointer-events-none"><Filigrane /></span> : <Filigrane />)}
              </span>
              <span className="flex flex-col items-center px-6 pt-5 pb-6">
              <span className="text-xl font-black text-white">{c.titre}</span>
              <span className="text-sm font-bold mt-1" style={{ color: VERT }}>{c.sous}</span>
              <span className="text-sm text-white/70 mt-3 leading-relaxed">{c.texte}</span>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition-colors group-hover:bg-[#3FB27F]" style={{ background: 'rgba(63,178,127,0.25)' }}>
                Voir la solution <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
