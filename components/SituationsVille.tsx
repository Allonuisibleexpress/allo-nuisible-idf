// Sous-titres « longue traîne » des pages nuisible + ville (demande de l'utilisateur, 09/11/2026) :
// les situations précises que les gens recherchent (« souris dans les murs à Champigny »…), moins concurrentielles
// que la requête principale. 4 situations par page, choisies selon la ville pour limiter le texte identique.
import { ArrowRight } from 'lucide-react'
import type { FamilleVille } from '@/lib/services-ville'

const ACCENT = '#E8441A'
const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }
import { melange } from '@/components/PucesVilleExtra'

const h = (s: string) => s.split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 17)

type Situation = { t: (a: string) => string; x: string; lien?: { href: string; label: string } }

const SITUATIONS: Record<FamilleVille, { titre: (a: string) => string; liste: Situation[] }> = {
  souris: {
    titre: (a) => `Souris ${a} : les situations que nous traitons le plus`,
    liste: [
      { t: (a) => `Souris dans les murs ${a}`, x: 'Grattements dans une cloison ou derrière un doublage : les souris circulent dans les vides des murs. Nous repérons leurs sorties et posons les dispositifs au bon endroit.' },
      { t: (a) => `Souris dans le faux plafond ${a}`, x: 'Petites courses au-dessus de vous la nuit : le faux plafond est un couloir idéal. Nous traitons l’accès et bouchons les passages vers les pièces.' },
      { t: (a) => `Souris dans la cuisine ${a}`, x: 'Emballages grignotés, crottes dans les placards ou derrière l’électroménager : on protège les aliments et on traite sans risque pour la famille.' },
      { t: (a) => `Bruit de souris la nuit ${a}`, x: 'Elles sont surtout actives la nuit. Un bruit régulier dans les murs, les combles ou sous le plancher suffit pour lancer un diagnostic.' },
      { t: (a) => `Souris dans le moteur de la voiture ${a}`, x: 'Câbles rongés, nid sous le capot : les rongeurs adorent la chaleur des moteurs.', lien: { href: '/blog/rongeur-moteur-voiture-cables', label: 'Rongeurs dans le moteur' } },
      { t: (a) => `Par où entrent les souris ${a} ?`, x: 'Passages de tuyaux, bas de portes, gaines électriques : un trou de la taille d’un crayon leur suffit.', lien: { href: '/blog/souris-par-ou-entrent-elles', label: 'Par où entrent les souris' } },
    ],
  },
  deratisation: {
    titre: (a) => `Rats ${a} : les cas que nous rencontrons le plus`,
    liste: [
      { t: (a) => `Rats dans le jardin ${a}`, x: 'Terriers au pied d’un mur, sous un abri ou près du compost : nous traitons les galeries et protégeons les enfants et les animaux.', lien: { href: '/blog/trou-dans-le-jardin', label: 'Trou dans le jardin : rat ou autre ?' } },
      { t: (a) => `Rat dans les toilettes ${a}`, x: 'Un rat peut remonter par les canalisations jusqu’aux WC. Il existe des solutions pour le bloquer durablement.', lien: { href: '/blog/rat-dans-les-toilettes', label: 'Rat dans les toilettes' } },
      { t: (a) => `Rats dans les combles ${a}`, x: 'Bruits lourds au-dessus du plafond, isolant arraché : les rats noirs grimpent par les façades et les gouttières.', lien: { href: '/blog/rats-dans-les-combles', label: 'Rats dans les combles' } },
      { t: (a) => `Rats dans la cave ou le vide sanitaire ${a}`, x: 'Les sous-sols humides attirent le surmulot. Nous posons des postes sécurisés et fermons les accès vers les logements.', lien: { href: '/blog/rat-vide-sanitaire', label: 'Rat dans le vide sanitaire' } },
      { t: (a) => `Rat dans les murs ${a}`, x: 'Grattements dans une cloison : le rongeur a trouvé un passage dans le doublage. Nous localisons l’entrée avant de traiter.', lien: { href: '/blog/rat-dans-les-murs-cloisons', label: 'Rat dans les murs' } },
      { t: (a) => `Dératisation pour restaurant ${a}`, x: 'Postes sécurisés, suivi régulier et attestation pour vos contrôles d’hygiène : un plan de lutte adapté aux commerces.', lien: { href: '/blog/restaurant-plan-lutte-nuisibles', label: 'Plan de lutte en restaurant' } },
      { t: (a) => `Dératiseur ${a} sans mort-aux-rats`, x: 'Pièges mécaniques, connectés ou piège Ekomille : il est possible de dératiser sans raticide.', lien: { href: '/blog/deratisation-sans-mort-aux-rats', label: 'Dératisation sans mort-aux-rats' } },
    ],
  },
  punaises: {
    titre: (a) => `Punaises de lit ${a} : les situations les plus fréquentes`,
    liste: [
      { t: (a) => `Punaises de lit dans un Airbnb ${a}`, x: 'Un voyageur les apporte, le suivant se fait piquer : il faut traiter vite pour relouer sereinement.', lien: { href: '/blog/punaises-de-lit-airbnb-location-courte-duree', label: 'Airbnb : traiter et relouer vite' } },
      { t: (a) => `Piqûres au réveil ${a}`, x: 'Boutons groupés ou en ligne sur les bras et le dos : c’est le signe le plus courant. Une inspection confirme en quelques minutes.' },
      { t: (a) => `Punaises de lit sans insecticide ${a}`, x: 'Cryogénie et vapeur sèche tuent les punaises et leurs œufs au contact, sans produit.', lien: { href: '/blog/punaises-de-lit-sans-insecticide', label: 'Les méthodes sans insecticide' } },
      { t: (a) => `Punaises de lit dans le canapé ${a}`, x: 'Coutures, dessous et cadre du canapé sont des cachettes fréquentes, surtout dans un canapé-lit.' },
      { t: (a) => `Punaises de lit après un voyage ${a}`, x: 'Valises et vêtements les ramènent d’un hôtel ou d’un train. Les bons gestes au retour évitent l’infestation.', lien: { href: '/blog/comment-attrape-t-on-des-punaises-de-lit', label: 'Comment on les attrape' } },
      { t: (a) => `Traiter ses vêtements ${a}`, x: 'Lavage à 60 °C, sèche-linge ou congélateur : voici ce qui fonctionne vraiment pour le linge.', lien: { href: '/blog/traiter-vetements-punaises-de-lit', label: 'Traiter les vêtements' } },
    ],
  },
  cafards: {
    titre: (a) => `Cafards ${a} : là où nous intervenons le plus`,
    liste: [
      { t: (a) => `Cafards dans la cuisine ${a}`, x: 'Chaleur et nourriture : derrière le frigo, le four et sous l’évier, les blattes trouvent tout ce qu’il leur faut.' },
      { t: (a) => `Cafards dans la salle de bain ${a}`, x: 'Siphons, gaines et joints humides : les blattes orientales remontent souvent par les canalisations.' },
      { t: (a) => `Cafards qui viennent des voisins ${a}`, x: 'En immeuble, ils passent par les gaines et les bouches d’aération : traiter un seul logement ne suffit pas toujours.' },
      { t: (a) => `Petits cafards bruns ${a}`, x: 'Ce sont souvent des blattes germaniques, les plus courantes en appartement. Elles se reproduisent très vite.' },
      { t: (a) => `Cafards dans un restaurant ${a}`, x: 'Traitement discret hors service, suivi et attestation pour vos contrôles d’hygiène.', lien: { href: '/blog/restaurant-plan-lutte-nuisibles', label: 'Plan de lutte en restaurant' } },
      { t: (a) => `Le gel anti-cafards ne marche pas ${a} ?`, x: 'Mal placé ou mélangé à un spray, le gel perd son efficacité. Voici pourquoi un traitement pro réussit.', lien: { href: '/blog/gel-anti-cafard-ne-marche-pas', label: 'Pourquoi le gel ne suffit pas' } },
    ],
  },
  fourmis: {
    titre: (a) => `Fourmis ${a} : les invasions que nous traitons le plus`,
    liste: [
      { t: (a) => `Fourmis dans la cuisine ${a}`, x: 'Longues files vers le sucre au printemps : elles viennent souvent du jardin ou d’une fissure.' },
      { t: (a) => `Fourmis volantes ${a}`, x: 'Ce sont les futures reines et les mâles d’une colonie : si elles sortent chez vous, le nid est tout proche.' },
      { t: (a) => `Petites fourmis jaunes ${a}`, x: 'Minuscules et présentes toute l’année en immeuble chauffé : c’est souvent la fourmi pharaon, à ne jamais traiter au spray.', lien: { href: '/fourmis', label: 'Les 11 types de fourmis' } },
      { t: (a) => `Fourmis dans la salle de bain ${a}`, x: 'Joints, plinthes et prises : elles cherchent l’eau et la chaleur. On remonte la piste jusqu’au nid.' },
      { t: (a) => `Fourmis sur la terrasse ${a}`, x: 'Petits tas de sable entre les dalles : la colonie est installée dessous. On traite sans soulever les dalles.' },
      { t: (a) => `Fourmis Tapinoma ${a}`, x: 'Noires, brillantes et en très grand nombre : cette espèce envahissante demande un traitement spécifique.', lien: { href: '/blog/tapinoma-magnum-fourmi-invasive', label: 'Tout savoir sur Tapinoma' } },
    ],
  },
  chenilles: {
    titre: (a) => `Chenilles processionnaires ${a} : les cas les plus courants`,
    liste: [
      { t: (a) => `Nid de chenilles dans un pin ${a}`, x: 'Une poche blanche et soyeuse en haut des branches en hiver : c’est le nid de la processionnaire du pin.', lien: { href: '/blog/chenille-processionnaire-du-pin', label: 'La processionnaire du pin' } },
      { t: (a) => `Chenilles et chien ${a}`, x: 'Un chien qui renifle une procession peut être gravement touché à la langue : consultez un vétérinaire en urgence.' },
      { t: (a) => `Quand traiter les chenilles ${a} ?`, x: 'Le bon moment dépend de l’espèce : en hiver pour le pin, avant les processions ; au printemps pour le chêne.', lien: { href: '/blog/chenilles-processionnaires-traitement-prevention', label: 'Traitement et prévention' } },
      { t: (a) => `Chenilles du chêne ${a}`, x: 'Nids collés au tronc et aux grosses branches, poils urticants dans l’air en été : prudence près des aires de jeux.', lien: { href: '/blog/chenille-processionnaire-du-chene', label: 'La processionnaire du chêne' } },
      { t: (a) => `Procession au sol ${a}`, x: 'Une file de chenilles qui traverse le jardin : ne la touchez pas et éloignez enfants et animaux.' },
    ],
  },
  puces: {
    titre: (a) => `Puces ${a} : les situations les plus fréquentes`,
    liste: [
      { t: (a) => `Puces de parquet au retour de vacances ${a}`, x: 'Des adultes attendaient dans leurs cocons : la chaleur et les vibrations de votre retour les font sortir toutes ensemble.', lien: { href: '/blog/puces-tout-savoir', label: 'Les puces expliquées' } },
      { t: (a) => `Puces sans animal ${a}`, x: 'Ancien occupant avec un animal, rongeurs, meuble d’occasion : les cocons peuvent attendre des semaines.' },
      { t: (a) => `Puces du chat ou du chien ${a}`, x: 'Traitez l’animal chez le vétérinaire et le logement en même temps, sinon les puces reviennent.' },
      { t: (a) => `Piqûres de puces aux chevilles ${a}`, x: 'Petits boutons groupés sur le bas des jambes, qui démangent : c’est le signe le plus courant.' },
      { t: (a) => `Puces après un emménagement ${a}`, x: 'Si l’ancien occupant avait un animal, les cocons restés dans le parquet éclosent à votre arrivée.' },
      { t: (a) => `Puces dans le canapé ${a}`, x: 'Les œufs tombent là où l’animal se couche : coussins, dessous et sol autour du canapé sont à traiter.' },
    ],
  },
  acariens: {
    titre: (a) => `Acariens ${a} : les situations les plus fréquentes`,
    liste: [
      { t: (a) => `Allergie aux acariens du matelas ${a}`, x: 'Nez bouché et yeux qui grattent au réveil : le matelas est le premier foyer à traiter.', lien: { href: '/blog/acariens-matelas', label: 'Acariens du matelas' } },
      { t: (a) => `Acariens dans le canapé ${a}`, x: 'Tissu épais et poussière : le canapé se traite en profondeur à la vapeur sèche.' },
      { t: (a) => `Acariens dans une chambre d’enfant ${a}`, x: 'Peluches, tapis et literie : un traitement sans produit convient aux chambres d’enfants.' },
      { t: (a) => `Acariens et humidité ${a}`, x: 'Un logement humide favorise leur prolifération : réduire l’humidité est indispensable.', lien: { href: '/blog/acariens-humidite-maison', label: 'Acariens et humidité' } },
      { t: (a) => `Acariens ou punaises de lit ${a} ?`, x: 'Les acariens ne piquent pas : s’il y a des boutons, cherchez plutôt les punaises de lit.', lien: { href: '/blog/acariens-ou-punaises-de-lit', label: 'Acariens ou punaises ?' } },
    ],
  },
  frelons: {
    titre: (a) => `Nids de frelons ${a} : là où nous les trouvons`,
    liste: [
      { t: (a) => `Nid de frelons asiatiques dans un arbre ${a}`, x: 'Souvent très haut et caché par le feuillage : notre perche télescopique le traite sans grimper.', lien: { href: '/blog/frelon-asiatique-tout-savoir', label: 'Tout savoir sur le frelon asiatique' } },
      { t: (a) => `Nid dans un volet roulant ${a}`, x: 'Le coffre du volet est un abri parfait : n’actionnez plus le volet et appelez-nous.' },
      { t: (a) => `Nid de guêpes sous la toiture ${a}`, x: 'Va-et-vient sous une tuile ou un rebord de toit : le nid est dans les combles ou sous la couverture.' },
      { t: (a) => `Frelons dans la cheminée ${a}`, x: 'Le conduit est un abri recherché : surtout, n’allumez pas de feu pour les déloger.', lien: { href: '/blog/nid-frelons-cheminee-nogent-sur-marne', label: 'Un nid dans une cheminée' } },
      { t: (a) => `Frelons européens la nuit ${a}`, x: 'Ils volent aussi la nuit et sont attirés par la lumière : fermez les fenêtres éclairées près d’un nid.', lien: { href: '/blog/frelon-europeen-tout-savoir', label: 'Le frelon européen' } },
      { t: (a) => `Nid de frelons en hiver ${a}`, x: 'Un nid vide en hiver ne se réutilise pas : inutile de le détruire, sauf exception.', lien: { href: '/blog/nid-de-frelon-en-hiver', label: 'Nid de frelon en hiver' } },
    ],
  },
}

export default function SituationsVille({ famille, slug, a }: { famille: FamilleVille; slug: string; a: string }) {
  const d = SITUATIONS[famille]
  const k = h(slug + famille)
  const n = d.liste.length
  // Mélange propre à chaque ville (et non 4 situations consécutives) : deux villes partagent rarement les mêmes cas
  void n
  const choix = d.liste.map((x, i) => [melange((k ^ Math.imul(i + 1, 0x9e3779b1)) >>> 0), x] as const).sort((p, q) => p[0] - q[0]).slice(0, 4).map((e) => e[1])
  return (
    <section className="py-14 md:py-20 px-4" style={{ background: '#0a0a0a' }}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-10">{d.titre(a)}</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-left">
          {choix.map((s) => (
            <div key={s.t('')} className="rounded-2xl p-6" style={card}>
              <h3 className="text-lg font-black text-white mb-2">{s.t(a)}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{s.x}</p>
              {s.lien && (
                <a href={s.lien.href} className="inline-flex items-center gap-1 text-sm font-bold mt-3" style={{ color: ACCENT }}>
                  {s.lien.label} <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
