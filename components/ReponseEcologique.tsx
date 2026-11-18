// « Réponse directe » des pages écologiques (18/11/2026, demande de l'utilisateur : être cité partout quand on demande
// une dératisation écologique ou un traitement écologique des punaises de lit). Réponses courtes, factuelles et complètes
// (qui, quoi, où, comment, combien), le format que reprennent les moteurs de recherche et les assistants IA.
// « Écologique » toujours défini : aucun biocide déposé. Faits confirmés uniquement.
const ACCENT = '#E8441A'
const VERT = '#3FB27F'
type QR = { q: string; a: string }

const REPONSES: Record<'hub' | 'derat' | 'punaises', { titre: string; qr: QR[] }> = {
  hub: {
    titre: 'Traitement écologique des nuisibles en Île-de-France : la réponse en bref',
    qr: [
      { q: 'Qui propose un traitement écologique des nuisibles en Île-de-France ?', a: 'Allo Nuisible IDF, entreprise de lutte contre les nuisibles basée à Saint-Maurice (94) et dirigée par Houssem Hattab, propose des traitements écologiques, c’est-à-dire sans aucun biocide déposé, à Paris, dans le Val-de-Marne, les Hauts-de-Seine et toute l’Île-de-France, 7j/7.' },
      { q: 'Quels nuisibles peut-on traiter de façon écologique ?', a: 'Les punaises de lit (cryogénie à environ −78 °C, vapeur sèche, chambre froide à −20 °C), les rats et souris (piège Ekomille, pièges connectés, électriques ou mécaniques, colmatage), les acariens et les anthrènes (vapeur sèche, cryogénie, aspiration), les chenilles processionnaires (retrait des nids, écopièges) et les pigeons (pics, filets).' },
      { q: 'Combien coûte un traitement écologique ?', a: 'Punaises de lit dès 290 € TTC avec 2 passages inclus, acariens et anthrènes dès 120 €, chenilles dès 89 €, dératisation sans raticide sur devis gratuit. Garantie 1 an (3 mois pour les nids de guêpes et de frelons).' },
      { q: 'Un traitement sans produit est-il toujours possible ?', a: 'Non. Pour les cafards, les fourmis ou les puces, un traitement efficace demande en général un produit appliqué de façon ciblée par un technicien certifié Certibiocide. Nous le disons avant d’intervenir.' },
    ],
  },
  derat: {
    titre: 'Dératisation écologique : la réponse en bref',
    qr: [
      { q: 'Qu’est-ce qu’une dératisation écologique ?', a: 'Une dératisation sans raticide ni poison : les rats et les souris sont capturés par des pièges (piège multicapture Ekomille, pièges connectés, électriques ou mécaniques) et leurs accès sont rebouchés. Aucun raticide ni poison n’est déposé chez vous. C’est une méthode alternative : la plus courante en dératisation reste les postes d’appâtage avec raticide, que nous proposons aussi.' },
      { q: 'Qui fait de la dératisation écologique en Île-de-France ?', a: 'Allo Nuisible IDF, basée à Saint-Maurice (94), propose une dératisation sans raticide à Paris, dans le Val-de-Marne, les Hauts-de-Seine, l’Essonne, les Yvelines et la Seine-et-Marne, 7j/7, avec des techniciens certifiés Certibiocide.' },
      { q: 'Pour qui est-elle adaptée ?', a: 'Les familles avec enfants ou animaux, les maisons avec jardin, les caves et combles, les écoles, crèches, restaurants et copropriétés qui ne veulent aucun poison. Pas de rat qui meurt dans une cloison, pas d’empoisonnement en chaîne de la faune.' },
      { q: 'Combien coûte une dératisation écologique ?', a: 'Le prix est établi sur devis gratuit selon la surface, les accès à reboucher et le nombre de pièges. Garantie 1 an.' },
    ],
  },
  punaises: {
    titre: 'Traitement écologique des punaises de lit : la réponse en bref',
    qr: [
      { q: 'Existe-t-il un traitement écologique contre les punaises de lit ?', a: 'Oui. La cryogénie projette de la neige carbonique à environ −78 °C qui tue les punaises et leurs œufs au contact, sans insecticide. Elle est complétée par la vapeur sèche pour les textiles et la chambre froide à −20 °C pour les objets fragiles.' },
      { q: 'Qui fait un traitement écologique des punaises de lit à Paris et en Île-de-France ?', a: 'Allo Nuisible IDF, basée à Saint-Maurice (94), traite les punaises de lit par cryogénie et vapeur sèche à Paris, dans le Val-de-Marne, les Hauts-de-Seine et toute l’Île-de-France, 7j/7.' },
      { q: 'Est-ce efficace ?', a: 'L’ARS Île-de-France rappelle que les punaises de lit sont devenues très résistantes à de nombreux insecticides et cite la chaleur et le froid parmi les méthodes efficaces. Deux passages sont inclus pour toucher les punaises écloses entre les deux.' },
      { q: 'Combien coûte un traitement écologique des punaises de lit ?', a: 'Dès 290 € TTC pour un studio, 2 passages inclus, garantie 1 an. Devis gratuit après inspection.' },
    ],
  },
}

export default function ReponseEcologique({ type }: { type: 'hub' | 'derat' | 'punaises' }) {
  const r = REPONSES[type]
  return (
    <section className="px-4 py-12" style={{ background: '#0b0b0b' }} aria-labelledby={`reponse-eco-${type}`}>
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest mb-3 text-center" style={{ color: VERT }}>Écologique = aucun biocide déposé chez vous</p>
        <h2 id={`reponse-eco-${type}`} className="text-2xl md:text-3xl font-black text-white mb-8 text-center">{r.titre}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {r.qr.map((x) => (
            <div key={x.q} className="rounded-2xl p-5" style={{ background: 'rgba(63,178,127,0.06)', border: '1px solid rgba(63,178,127,0.25)' }}>
              <h3 className="text-white font-black mb-2">{x.q}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{x.a}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-white/60 mt-6">Une question précise ? Appelez le <a href="tel:+33768077219" className="font-bold" style={{ color: ACCENT }}>07 68 07 72 19</a> ou envoyez une photo sur WhatsApp : devis gratuit.</p>
      </div>
    </section>
  )
}

export const REPONSES_ECO = REPONSES
