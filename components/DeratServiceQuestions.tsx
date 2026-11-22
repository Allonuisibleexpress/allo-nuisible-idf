// Page /services/deratisation (22/11/2026, refonte demandée par l'utilisateur pour « remonter sur dératisation ») :
// les questions que se posent les gens, avec réponses directes et sourcées (inspiration Allo Nuisible Express et
// urgencesnuisibles.fr, sans copie). Pas de tiret long, pas de chiffre sans source.
import { Check, AlertTriangle, ArrowRight } from 'lucide-react'
import { enrichi } from '@/components/ArticleService'

const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }
const surtitre = (t: string) => <p className="text-xs font-black uppercase tracking-[.15em] mb-3" style={{ color: '#F0562A' }}>{t}</p>

const ETAPES = [
  { t: 'Trouver d’où ils viennent', x: 'Crottes, traces grasses le long des murs, terriers, câbles rongés : le diagnostic dit s’il s’agit de **rats** ou de **souris**, combien ils sont et **par où ils entrent**.' },
  { t: 'Leur couper la nourriture et les abris', x: 'Poubelles fermées, croquettes rentrées, graines et compost protégés, caves débarrassées. Sans cela, ils préfèrent votre nourriture à l’appât. C’est le premier conseil de la [Ville de Paris](https://www.paris.fr/pages/les-rats-a-paris-le-saviez-vous-6418).' },
  { t: 'Poser le bon dispositif', x: '**Postes d’appâtage sécurisés** et verrouillés, **pièges mécaniques** ou **connectés**, ou piège **Ekomille sans raticide** : la méthode dépend du lieu, des enfants, des animaux.' },
  { t: 'Boucher les accès et suivre', x: 'Sans **colmatage**, une autre colonie reprend le même chemin. Le technicien revient contrôler les postes jusqu’à l’arrêt des consommations. Garantie **1 an**.' },
]

const IDEES_RECUES = [
  { t: 'Les appareils à ultrasons', x: 'Ils sont vendus en magasin de bricolage, mais **leurs fabricants eux-mêmes conseillent de les utiliser en complément d’autres méthodes**. Ils ne bouchent aucun trou et ne suppriment aucune source de nourriture : ils ne règlent pas une infestation installée.' },
  { t: 'Le raticide du commerce posé à nu', x: 'Posé sans poste sécurisé, il est accessible aux chiens, aux chats et aux enfants. Selon une étude française des données des centres antipoison vétérinaires, les raticides anticoagulants représentaient **9 % des intoxications d’animaux domestiques** recensées. Nous les utilisons uniquement en **postes verrouillés**.' },
  { t: 'Le chat de la maison', x: 'La Ville de Paris rappelle qu’un chat peut attaquer de jeunes rats, mais que **les adultes sont trop gros et agressifs** pour lui. Et sa gamelle laissée dehors attire les rats. Un chat aide contre une souris, pas contre une colonie.' },
  { t: 'Le piège acheté en magasin', x: 'Utile pour **une souris isolée**. Contre des rats, méfiants envers tout objet nouveau, un piège posé seul et déplacé tous les jours ne suffit pas : c’est l’ensemble diagnostic, dispositif, colmatage et suivi qui règle le problème.' },
]

const AVANT = ['Rangez la nourriture dans des boîtes fermées, rentrez les gamelles des animaux', 'Fermez les poubelles, sortez les sacs le jour même', 'Ne déplacez pas les crottes ni les cadavres à mains nues : gants et sac fermé', 'Notez où vous avez vu des traces : c’est précieux pour le technicien']
const APRES = ['Ne touchez pas aux postes et pièges, ne les déplacez pas', 'Gardez nourriture et poubelles fermées pendant tout le traitement', 'Signalez-nous tout nouveau bruit ou nouvelle trace', 'Laissez les accès rebouchés : ne retirez pas les grilles ni le mastic']

const CHIFFRES = [
  { v: '886', x: 'cas de leptospirose en France en 2024, maladie transmise surtout par l’urine des rats ; 74 % des malades hospitalisés.', s: 'Santé publique France', u: 'https://www.santepubliquefrance.fr/leptospirose/bulletin-national/leptospirose-en-france-en-2024-donnees-de-la-declaration-obligatoire' },
  { v: '≈ 4 000', x: 'interventions par an de la Ville de Paris contre les rongeurs sur le domaine public, dans le cadre d’un plan adopté dès 2017.', s: 'Ville de Paris', u: 'https://www.paris.fr/pages/les-rats-a-paris-le-saviez-vous-6418' },
  { v: 'Art. 119', x: 'du règlement sanitaire du Val-de-Marne : la lutte contre les rongeurs incombe aux propriétaires, syndics, bailleurs et occupants.', s: 'Ville de Fresnes, arrêté n° 2026-213', u: 'https://www.fresnes94.fr/app/uploads/1/2026/07/2026-213-arrete-portant-obligation-de-lutte-contre-proliferation-rongeurs-fresnes.pdf' },
]

export default function DeratServiceQuestions() {
  return (
    <>
      <section id="se-debarrasser-des-rats" className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
        <div className="max-w-5xl mx-auto text-center">
          {surtitre('La réponse courte')}
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-4">Comment se débarrasser des rats et des souris définitivement ?</h2>
          <p className="text-white/75 max-w-3xl mx-auto leading-relaxed mb-10 text-lg">En traitant la <strong className="text-white">cause</strong>, pas seulement les rongeurs que l’on voit. Une dératisation qui tient dans le temps repose sur quatre étapes, toujours dans cet ordre :</p>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left list-none p-0 m-0">
            {ETAPES.map((e, i) => (
              <li key={e.t} className="rounded-2xl p-5" style={card}>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full font-black text-white mb-3" style={{ background: '#B8330D' }}>{i + 1}</span>
                <h3 className="text-white font-black mb-2">{e.t}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{enrichi(e.x)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="idees-recues" className="py-14 md:py-20 px-4" style={{ background: '#080808' }}>
        <div className="max-w-4xl mx-auto text-center">
          {surtitre('Avant d’acheter quoi que ce soit')}
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-10">Ultrasons, raticide du commerce, chat : ce qui marche et ce qui ne suffit pas</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {IDEES_RECUES.map((c) => (
              <div key={c.t} className="rounded-2xl p-5 md:p-6" style={card}>
                <h3 className="flex items-center gap-2 text-white font-black text-lg mb-2"><AlertTriangle className="w-5 h-5 flex-shrink-0" style={{ color: '#F0562A' }} aria-hidden="true" />{c.t}</h3>
                <p className="text-white/75 leading-relaxed text-sm md:text-base">{enrichi(c.x)}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-white/60 mt-5">Sources : <a href="https://scottsmiraclegro.com/fr-ca/marques/tomcat/products/rat-control/4302506.html" target="_blank" rel="noopener noreferrer nofollow" className="underline">fiche fabricant d’un répulsif à ultrasons (Tomcat)</a> ; <a href="https://agris.fao.org/search/fr/records/675abb110ce2cede71cf2bf1" target="_blank" rel="noopener noreferrer nofollow" className="underline">Prevalence of anticoagulant rodenticide poisoning in France: human and animal data</a> ; <a href="https://www.paris.fr/pages/les-rats-a-paris-le-saviez-vous-6418" target="_blank" rel="noopener noreferrer" className="underline">Ville de Paris, Comment Paris lutte contre les rats</a>.</p>
        </div>
      </section>

      <section id="avant-apres" className="py-14 md:py-20 px-4" style={{ background: '#0d0d0d' }}>
        <div className="max-w-5xl mx-auto text-center">
          {surtitre('Votre part du travail')}
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-10">Avant et après notre passage : ce qui fait réussir une dératisation</h2>
          <div className="grid md:grid-cols-2 gap-5 text-left">
            {[['Avant notre venue', AVANT], ['Après le traitement', APRES]].map(([t, l]) => (
              <div key={t as string} className="rounded-2xl p-6" style={card}>
                <h3 className="text-white font-black text-lg mb-4">{t as string}</h3>
                <ul className="space-y-2.5 list-none p-0 m-0">
                  {(l as string[]).map((x) => <li key={x} className="flex items-start gap-2.5 text-white/80 text-sm leading-relaxed"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#F0562A' }} aria-hidden="true" />{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="chiffres-rats" className="py-14 md:py-20 px-4" style={{ background: '#080808' }}>
        <div className="max-w-5xl mx-auto text-center">
          {surtitre('Chiffres vérifiés')}
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight mb-10">Rats et dératisation en Île-de-France : les chiffres à connaître</h2>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {CHIFFRES.map((c) => (
              <figure key={c.v} className="rounded-2xl p-5" style={card}>
                <p className="text-3xl font-black mb-2" style={{ color: '#F0562A' }}>{c.v}</p>
                <p className="text-white/80 text-sm leading-relaxed">{c.x}</p>
                <figcaption className="mt-3 text-[11px] text-white/60">Source : <a href={c.u} target="_blank" rel="noopener noreferrer" className="underline">{c.s}</a></figcaption>
              </figure>
            ))}
          </div>
          <a href="/barometre-des-nuisibles-punaises-de-lit-deratisation-2026" className="inline-flex items-center gap-2 mt-8 font-bold underline underline-offset-4" style={{ color: '#F0562A' }}>Tous les chiffres dans notre Baromètre des nuisibles 2026 <ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
        </div>
      </section>
    </>
  )
}
