// Section « Contactez votre mairie » des pages ville (Paris par arrondissement, Hauts-de-Seine, Val-de-Marne).
// Coordonnées : Annuaire de l'administration, service-public.fr (lib/mairies.ts).
// Rappels juridiques : loi n° 89-462 du 6 juillet 1989, article 6 (logement décent exempt de toute infestation
// d'espèces nuisibles et parasites, ajout de la loi ELAN de 2018) ; règlement sanitaire départemental.
import { Landmark, Phone, MapPin, ExternalLink } from 'lucide-react'
import { MAIRIES } from '@/lib/mairies'
import type { ServiceLocal } from '@/components/ContexteLocal'

const ACCENT = '#E8441A'
const h = (s: string) => s.split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 11)
const pick = <T,>(cle: string, l: T[]) => l[h(cle) % l.length]

const LOI_1989 = 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000509310'

type Texte = { nuisible: string; points: (a: string) => string[][] }

// Chaque point a plusieurs formulations : la page en choisit une selon la ville (moins de texte identique entre pages)
const LOCATAIRE = [
  'Vous êtes locataire : le logement loué doit être exempt de toute infestation d’espèces nuisibles et parasites (loi du 6 juillet 1989, article 6). Prévenez votre propriétaire ou votre bailleur par écrit dès les premiers signes.',
  'Locataire ? La loi du 6 juillet 1989 (article 6) impose un logement exempt de nuisibles et de parasites. Écrivez à votre propriétaire dès que vous constatez le problème, en gardant une copie.',
  'Si vous louez, votre propriétaire doit vous fournir un logement sans infestation de nuisibles ni de parasites (article 6 de la loi du 6 juillet 1989). Informez-le par écrit, photos à l’appui.',
]

const TEXTES: Record<ServiceLocal, Texte> = {
  punaises: {
    nuisible: 'punaises de lit',
    points: (a) => [
      LOCATAIRE,
      [
        `Le propriétaire ne réagit pas, ou tout l’immeuble est touché : la mairie peut vous orienter vers le bon service (hygiène, logement) et vous expliquer les démarches ${a}.`,
        `Plusieurs appartements touchés, un bailleur qui tarde : appelez la mairie, elle vous indiquera le service compétent ${a} (hygiène ou logement).`,
        `Quand le problème dépasse votre logement ou que le propriétaire ne bouge pas, la mairie est un bon relais ${a} : elle vous oriente vers le service qui peut agir.`,
      ],
      [
        'Pour vous informer, le site du gouvernement stop-punaises.gouv.fr explique comment reconnaître les punaises de lit et comment agir.',
        'Le site officiel stop-punaises.gouv.fr donne aussi les bons réflexes pour reconnaître les punaises de lit et éviter leur propagation.',
      ],
    ],
  },
  cafards: {
    nuisible: 'cafards',
    points: (a) => [
      LOCATAIRE,
      [
        `Les cafards viennent des parties communes, des caves ou d’un local voisin : la mairie peut vous orienter vers le service compétent ${a}.`,
        `Si les cafards arrivent des caves, des vide-ordures ou d’un commerce voisin, la mairie vous dira qui contacter ${a}.`,
      ],
    ],
  },
  deratisation: {
    nuisible: 'rats',
    points: (a) => [
      [
        `Des rats dans la rue, un parc, un square ou près des égouts : c’est à la mairie qu’il faut le signaler. Elle intervient sur l’espace public ${a}.`,
        `Rats sur la voie publique, dans un square ou autour des bouches d’égout : signalez-les à la mairie, qui gère l’espace public ${a}.`,
        `Vous voyez des rats dehors (trottoir, parc, berges, égouts) ? La mairie est compétente sur l’espace public ${a} : faites un signalement.`,
      ],
      [
        'Chez vous, dans une cour, une cave ou un jardin, la dératisation revient au propriétaire ou au syndic, comme le prévoit le règlement sanitaire départemental.',
        'Dans un immeuble, une cave ou un jardin privé, c’est au propriétaire ou à la copropriété d’agir : le règlement sanitaire départemental l’impose.',
      ],
      LOCATAIRE,
    ],
  },
  souris: {
    nuisible: 'souris',
    points: (a) => [
      [
        `Les souris viennent d’un local voisin, d’un commerce ou des parties communes : la mairie peut vous orienter vers le service compétent ${a}.`,
        `Si les souris arrivent d’un commerce, d’une cave ou des parties communes, la mairie vous indiquera le bon interlocuteur ${a}.`,
      ],
      LOCATAIRE,
    ],
  },
  chenilles: {
    nuisible: 'chenilles processionnaires',
    points: (a) => [
      [
        `Des nids dans des pins d’une rue, d’un parc ou d’une école : signalez-les à la mairie, qui gère les arbres de l’espace public ${a}.`,
        `Un nid dans un arbre de la rue, d’un square ou d’une cour d’école ? Prévenez la mairie : les arbres publics ${a} relèvent de ses services.`,
      ],
      [
        'Certaines communes prennent un arrêté qui oblige les propriétaires à traiter leurs arbres : la mairie vous dira ce qui s’applique chez vous.',
        'Selon les communes, un arrêté municipal peut obliger les propriétaires à traiter leurs pins : renseignez-vous auprès de la mairie.',
      ],
    ],
  },
  puces: {
    nuisible: 'puces',
    points: (a) => [
      LOCATAIRE,
      [
        `Rongeurs dans les caves ou animaux errants qui apportent les puces : la mairie peut vous orienter vers le bon service ${a}.`,
        `Si les puces viennent des parties communes ou de rongeurs de l’immeuble, prévenez le syndic, et au besoin la mairie ${a}.`,
      ],
    ],
  },
  acariens: {
    nuisible: 'acariens',
    points: (a) => [
      [
        `Logement très humide, moisissures, aération qui ne fonctionne pas : la mairie peut vous orienter vers le service hygiène ou logement ${a}.`,
        `Humidité, moisissures, ventilation en panne : ces problèmes favorisent les acariens, et la mairie peut vous orienter ${a}.`,
      ],
      ['Locataire : le propriétaire doit fournir un logement décent. Signalez-lui le problème par écrit.'],
    ],
  },
  fourmis: {
    nuisible: 'fourmis',
    points: (a) => [
      [
        `Des fourmis envahissent toute une rue, un square ou plusieurs maisons, comme le font les espèces envahissantes (Tapinoma) : signalez-le à la mairie ${a}, une action collective est plus efficace.`,
        `Une invasion de fourmis qui touche plusieurs jardins ou l'espace public ${a} mérite un signalement à la mairie : contre les fourmis envahissantes, il faut agir ensemble.`,
        `Fourmis sur un trottoir, dans un parc ou chez tous les voisins de la rue ${a} : prévenez la mairie, surtout s'il peut s'agir d'une espèce envahissante.`,
        `Si plusieurs maisons de votre quartier ${a} sont envahies en même temps, parlez-en à la mairie : une colonie envahissante se traite mieux à l'échelle du quartier.`,
      ],
      LOCATAIRE,
    ],
  },
  frelons: {
    nuisible: 'frelons et guêpes',
    points: (a) => [
      [
        `Un nid de frelons dans un arbre de la rue, d’un parc ou d’une école : signalez-le à la mairie ${a}, qui gère l’espace public.`,
        `Nid de frelons asiatiques sur l’espace public ${a} (square, arbre d’alignement, bâtiment communal) : c’est à la mairie qu’il faut le signaler.`,
        `Vous repérez un nid dans un arbre public ou près d’une école ${a} ? Prévenez la mairie : l’espace public relève de ses services.`,
      ],
      [
        'Certaines communes participent aux frais de destruction des nids de frelons asiatiques chez les particuliers : demandez à votre mairie si c’est le cas chez vous.',
        'Renseignez-vous auprès de votre mairie : certaines communes aident financièrement à la destruction des nids de frelons asiatiques.',
      ],
    ],
  },
  commune: {
    nuisible: 'nuisibles',
    points: (a) => [
      [
        `Rats sur l’espace public, nids dans les arbres d’un parc, immeuble entier infesté : la mairie est votre premier relais ${a}.`,
        `Pour les rats dans la rue, les nids dans les arbres publics ou un immeuble entier touché, adressez-vous d’abord à la mairie ${a}.`,
      ],
      LOCATAIRE,
    ],
  },
}

export default function ContactMairie({ slug, service, a }: { slug: string; service: ServiceLocal; a: string }) {
  const m = MAIRIES[slug]
  if (!m) return null
  const t = TEXTES[service]
  const titre = pick(slug + service, [
    `Un problème de ${t.nuisible} ${a} ? N’hésitez pas à contacter votre mairie`,
    `${t.nuisible.charAt(0).toUpperCase() + t.nuisible.slice(1)} ${a} : pensez aussi à votre mairie`,
    `${t.nuisible.charAt(0).toUpperCase() + t.nuisible.slice(1)} : le rôle de votre mairie ${a}`,
  ])
  const telHref = `tel:+33${m.tel.replace(/\s/g, '').slice(1)}`
  return (
    <section className="py-14 md:py-16 px-4" style={{ background: '#0d0d0d' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">{titre}</h2>
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 space-y-3">
            {t.points(a).map((alts, i) => pick(slug + service + i, alts)).map((p) => (
              <p key={p} className="text-white/70 leading-relaxed">{p}</p>
            ))}
            <p className="text-white/70 leading-relaxed">
              Pour le traitement lui-même, chez vous ou dans votre immeuble, nos techniciens interviennent rapidement, sur devis.
            </p>
          </div>
          <div className="md:col-span-2 rounded-2xl overflow-hidden self-start" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="p-6">
            <p className="flex items-center gap-2 text-white font-bold mb-4">
              <Landmark className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />{m.mairie}
            </p>
            <p className="flex items-start gap-2 text-white/70 text-sm mb-3">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />{m.adresse}
            </p>
            {m.tel && (
              <a href={telHref} className="flex items-center gap-2 text-white/70 text-sm mb-3 hover:text-white">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />{m.tel}
              </a>
            )}
            {m.site && (
              <a href={m.site} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2 text-sm font-bold" style={{ color: ACCENT }}>
                <ExternalLink className="w-4 h-4 flex-shrink-0" />Site de la mairie
              </a>
            )}
            <p className="text-white/60 text-xs mt-4">
              Source : <a href="https://lannuaire.service-public.fr/" target="_blank" rel="noopener noreferrer nofollow" className="underline">Annuaire service-public.fr</a>
              {service !== 'chenilles' && service !== 'frelons' && (
                <> · <a href={LOI_1989} target="_blank" rel="noopener noreferrer nofollow" className="underline">Loi du 6 juillet 1989</a></>
              )}
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
