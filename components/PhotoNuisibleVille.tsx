// Photo du nuisible sur chaque page ville (18/11/2026) : photos libres de Wikimedia Commons, auteur et licence affichés.
const ACCENT = '#E8441A'
type P = { src: string; alt: string; legende: string; credit: string; licence: string; page: string }
const W = 'https://commons.wikimedia.org/wiki/File:'
const PHOTOS: Record<string, { titre: string; photos: P[] }> = {
  '/deratisation': { titre: 'Le rat brun : à quoi il ressemble', photos: [
    { src: '/identifier/rattus.jpg', alt: 'Rat brun (Rattus norvegicus), le surmulot', legende: 'Le **rat brun** (surmulot) : museau arrondi, petites oreilles, queue plus courte que le corps. C’est le rat des caves, égouts et vides sanitaires.', credit: 'Charles J. Sharp', licence: 'CC BY-SA 4.0', page: W + 'Brown_rat_(Rattus_norvegicus)_Drenthe_2.jpg' },
    { src: '/identifier/mus.jpg', alt: 'Souris domestique (Mus musculus)', legende: 'À ne pas confondre avec la **souris** : museau pointu, grandes oreilles, queue aussi longue que le corps.', credit: 'Ahunt', licence: 'CC0', page: W + 'House_mouse_(Mus_musculus)_2732.jpg' },
  ] },
  '/souris': { titre: 'La souris domestique : comment la reconnaître', photos: [
    { src: '/identifier/mus.jpg', alt: 'Souris domestique (Mus musculus)', legende: 'La **souris domestique** : petite, museau pointu, grandes oreilles, queue aussi longue que le corps. Elle passe par un trou de la taille d’un stylo.', credit: 'Ahunt', licence: 'CC0', page: W + 'House_mouse_(Mus_musculus)_2732.jpg' },
    { src: '/identifier/rattus.jpg', alt: 'Rat brun (Rattus norvegicus)', legende: 'Pour comparer : le **rat brun**, bien plus massif, au museau arrondi et aux petites oreilles.', credit: 'Charles J. Sharp', licence: 'CC BY-SA 4.0', page: W + 'Brown_rat_(Rattus_norvegicus)_Drenthe_2.jpg' },
  ] },
  '/punaises-de-lit': { titre: 'La punaise de lit et ses traces', photos: [
    { src: '/identifier/cimex.jpg', alt: 'Punaise de lit adulte (Cimex lectularius) en train de piquer', legende: 'La **punaise de lit adulte** : 4 à 7 mm, corps plat brun-rouge. Elle ne vole pas et ne saute pas.', credit: 'CDC, Dr. Gary Alpert (Harvard University)', licence: 'Domaine public', page: W + 'Adult_bed_bug,_Cimex_lectularius.jpg' },
    { src: '/piqures/dejections-punaises-latte-sommier.jpg', alt: 'Déjections noires de punaises de lit sur une latte de sommier', legende: 'Les **points noirs** sur les lattes du sommier : ce sont leurs déjections, le signe le plus sûr.', credit: 'NY State IPM Program at Cornell University', licence: 'CC BY 2.0', page: W + 'Bed_Bug_Evidence.jpg' },
  ] },
  '/cafards': { titre: 'Blatte germanique ou blatte orientale ?', photos: [
    { src: '/identifier/blattella.jpg', alt: 'Blatte germanique (Blattella germanica)', legende: 'La **blatte germanique** : 1 à 1,5 cm, deux bandes sombres sur le thorax. La plus fréquente dans les cuisines et salles de bain.', credit: 'Clemson University, USDA Cooperative Extension', licence: 'CC BY 3.0 US', page: W + 'Blattella_germanica_1236168.jpg' },
    { src: '/identifier/blatta.jpg', alt: 'Blatte orientale (Blatta orientalis)', legende: 'La **blatte orientale** : plus grande et noire, elle préfère les caves, sous-sols et canalisations.', credit: 'Alvesgaspar', licence: 'CC BY-SA 4.0', page: W + 'Cockroach_May_2007-1.jpg' },
  ] },
  '/fourmis': { titre: 'Les fourmis les plus courantes', photos: [
    { src: '/fourmis/lasius-niger.jpg', alt: 'Fourmi noire des jardins (Lasius niger)', legende: 'La **fourmi noire des jardins** (Lasius niger), la plus répandue : elle entre au printemps pour chercher du sucre.', credit: 'Katja Schulz', licence: 'CC BY 2.0', page: W + 'Black_Garden_Ant_tending_Citrus_Mealybug_(16063538972).jpg' },
    { src: '/fourmis/monomorium-pharaonis.jpg', alt: 'Fourmi pharaon (Monomorium pharaonis)', legende: 'La **fourmi pharaon** : minuscule, jaune ambré, elle niche à l’intérieur des immeubles chauffés.', credit: 'April Nobile, AntWeb', licence: 'CC BY 4.0', page: W + 'Monomorium_pharaonis_casent0173986_profile_1.jpg' },
  ] },
  '/puces': { titre: 'La puce et ses piqûres', photos: [
    { src: '/puces/puce-du-chat.jpg', alt: 'Puce du chat (Ctenocephalides felis)', legende: 'La **puce du chat** : 2 à 3 mm, brune, aplatie sur les côtés. C’est elle qu’on trouve sur la grande majorité des chats et des chiens.', credit: 'Erturac', licence: 'CC BY-SA 3.0', page: W + 'Flea.JPG' },
    { src: '/piqures/piqures-puces-jambe.jpg', alt: 'Piqûres de puces sur le bas de la jambe', legende: 'Les **piqûres de puces** : petites, groupées, surtout aux **chevilles et au bas des jambes**.', credit: 'Maslesha', licence: 'CC BY 4.0', page: W + 'Flea_Bites_on_the_Lower_Leg_02.jpg' },
  ] },
  '/anthrenes': { titre: 'L’anthrène : la larve et l’adulte', photos: [
    { src: '/anthrenes/larve-anthrene.jpg', alt: 'Larve d’anthrène brune et velue', legende: 'La **larve d’anthrène** : brune, **velue**, 4 à 5 mm. C’est elle qui troue la laine, les tapis et les plumes. Elle **ne pique pas**.', credit: 'Arnoldius', licence: 'CC BY-SA 4.0', page: W + 'Anthrenus_verbasci_(Larva).jpg' },
    { src: '/anthrenes/anthrene-bigarre-adulte.jpg', alt: 'Anthrène bigarré adulte tacheté', legende: 'L’**adulte** : petit coléoptère **rond** de 2 à 4 mm, taché de blanc, brun et jaune. On le voit sur les **rebords de fenêtre** au printemps.', credit: 'Luis Fernández García', licence: 'CC BY-SA 4.0', page: W + 'Anthrenus_verbasci_20200524a.jpg' },
  ] },
  '/acariens': { titre: 'L’acarien de la poussière', photos: [
    { src: '/identifier/dermatophagoides.jpg', alt: 'Acarien de la poussière (Dermatophagoides) au microscope', legende: 'L’**acarien de la poussière** vu au microscope : moins de 0,5 mm, invisible à l’œil nu. Il vit dans la literie, les tapis et les canapés.', credit: 'Gouvernement des États-Unis', licence: 'Domaine public', page: W + 'House_Dust_Mite.jpg' },
  ] },
  '/chenilles-processionnaires': { titre: 'La chenille processionnaire', photos: [
    { src: '/identifier/thaumetopoea.jpg', alt: 'Procession de chenilles processionnaires du pin', legende: 'Une **procession** de chenilles processionnaires du pin : ne jamais les toucher, leurs poils sont urticants (enfants et chiens surtout).', credit: 'Tuscia', licence: 'CC BY-SA 4.0', page: W + 'Thaumetopoea_Pityocampa_-_Procession.jpg' },
  ] },
  '/destruction-nid-frelon': { titre: 'Frelon asiatique ou frelon européen ?', photos: [
    { src: '/frelons/vespa-velutina.jpg', alt: 'Frelon asiatique (Vespa velutina)', legende: 'Le **frelon asiatique** : thorax noir, un seul anneau orangé, **pattes jaunes** au bout.', credit: 'Charles J. Sharp', licence: 'CC BY-SA 4.0', page: W + 'Asian_hornet_(Vespa_velutina).jpg' },
    { src: '/frelons/vespa-crabro.jpg', alt: 'Frelon européen (Vespa crabro)', legende: 'Le **frelon européen** : tête et thorax brun-roux, abdomen jaune rayé de brun.', credit: 'Didier Descouens', licence: 'CC BY-SA 4.0', page: W + 'Frelon_europeen.jpg' },
  ] },
}

function gras(t: string) {
  return t.split(/(\*\*[^*]+\*\*)/).map((x, i) => (x.startsWith('**') ? <strong key={i} className="text-white">{x.slice(2, -2)}</strong> : x))
}

export default function PhotoNuisibleVille({ basePath, a }: { basePath: string; a: string }) {
  const d = PHOTOS[basePath]
  if (!d) return null
  return (
    <section className="py-14 px-4" style={{ background: '#0b0b0b' }}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>Identifier le nuisible</p>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-8">{d.titre} {a}</h2>
        <div className={`grid gap-6 ${d.photos.length > 1 ? 'md:grid-cols-2' : 'max-w-xl mx-auto'}`}>
          {d.photos.map((p) => (
            <figure key={p.src} className="rounded-2xl overflow-hidden text-left" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <img src={p.src} alt={p.alt} loading="lazy" className="w-full object-cover" style={{ aspectRatio: '4 / 3' }} />
              <figcaption className="p-4">
                <p className="text-sm text-white/75 leading-relaxed">{gras(p.legende)}</p>
                <p className="text-[11px] text-white/45 mt-2">Photo : {p.credit}, <a href={p.page} target="_blank" rel="noopener noreferrer nofollow" className="underline">{p.licence}</a>, Wikimedia Commons</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <a href="/identifier-nuisible" className="inline-block mt-6 text-sm font-bold" style={{ color: ACCENT }}>Un doute sur l’insecte ? Notre guide pour identifier un nuisible</a>
      </div>
    </section>
  )
}
