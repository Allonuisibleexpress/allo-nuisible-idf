// Lien texte vers la page cryogénie (13/11/2026) : une seule page cryogénie (qui absorbe l'ancienne page écologique), reliée à toutes les pages punaises
// (villes et départements) par un lien avec mot-clé. Pas de page cryogénie par ville (même requête, risque de spam).
// 19/11/2026 : sous-titre H2 « Traitement des punaises de lit sans insecticide + lieu » (demande de l'utilisateur), texte en 3 variantes.
const VARIANTES = [
  (a: string) => <>Vous ne voulez pas d’insecticide {a}, à cause d’un bébé, d’un animal ou par choix ? La <strong className="text-white">cryogénie</strong> tue les punaises et leurs œufs au contact de la neige carbonique à <strong className="text-white">−78 °C</strong>, sans aucun biocide. 2 passages dès 290 €.</>,
  (a: string) => <>{a.charAt(0).toUpperCase() + a.slice(1)}, nous traitons aussi les punaises de lit <strong className="text-white">sans insecticide</strong> : neige carbonique à <strong className="text-white">−78 °C</strong> (cryogénie), complétée si besoin par la vapeur sèche. Écologique au sens où aucun biocide n’est utilisé. Dès 290 €, 2 passages.</>,
  (a: string) => <>Literie, sommier, lattes, plinthes : la <strong className="text-white">cryogénie</strong> traite chaque cachette par le froid (<strong className="text-white">−78 °C</strong>), <strong className="text-white">sans insecticide</strong> ni résidu. Une solution choisie {a} par les familles avec enfants et les établissements. Dès 290 €.</>,
]

export default function CryoPunaisesLien({ a }: { a: string }) {
  const n = a.split("").reduce((s, c) => s + c.charCodeAt(0), 0) % VARIANTES.length
  return (
    <section className="px-4 pb-10" style={{ background: '#0d0d0d' }}>
      <div className="max-w-3xl mx-auto text-center rounded-2xl p-6" style={{ background: 'rgba(232,68,26,0.06)', border: '1px solid rgba(232,68,26,0.25)' }}>
        <h2 className="text-xl md:text-2xl font-black text-white mb-3">Traitement des punaises de lit sans insecticide {a}</h2>
        <p className="text-white/70 leading-relaxed">{VARIANTES[n](a)}</p>
        <a href="/services/cryogenie-punaises-de-lit" className="inline-block mt-4 font-bold underline underline-offset-2" style={{ color: '#F0562A' }}>
          Punaises de lit sans insecticide : la cryogénie en détail (déroulé, efficacité, prix)
        </a>
      </div>
    </section>
  )
}
