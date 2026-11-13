// Lien texte vers la page cryogénie (13/11/2026) : une seule page cryogénie, reliée à toutes les pages punaises
// (villes et départements) par un lien avec mot-clé. Pas de page cryogénie par ville (même requête, risque de spam).
const ACCENT = '#E8441A'

export default function CryoPunaisesLien({ a }: { a: string }) {
  return (
    <section className="px-4 pb-10" style={{ background: '#0d0d0d' }}>
      <div className="max-w-3xl mx-auto text-center rounded-2xl p-6" style={{ background: 'rgba(232,68,26,0.06)', border: '1px solid rgba(232,68,26,0.25)' }}>
        <h3 className="text-xl md:text-2xl font-black text-white mb-3">Cryogénie des punaises de lit {a}</h3>
        <p className="text-white/70 leading-relaxed">
          Neige carbonique à <strong className="text-white">−78 °C</strong> : punaises et œufs tués au contact, <strong className="text-white">sans insecticide</strong>, dès 290 €.
        </p>
        <a href="/services/cryogenie-punaises-de-lit" className="inline-block mt-4 font-bold underline underline-offset-2" style={{ color: ACCENT }}>
          Cryogénie punaises de lit : déroulé, efficacité et prix
        </a>
        <a href="/services/punaises-de-lit-ecologique" className="block mt-2 text-sm font-bold underline underline-offset-2 text-white/80">
          Traitement écologique, sans produit chimique
        </a>
      </div>
    </section>
  )
}
