'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PunaiseCorzaArticle() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a0a', minHeight: '100vh' }}>

        {/* Hero article */}
        <section style={{
          paddingTop: '120px',
          paddingBottom: '40px',
          background: 'linear-gradient(135deg, #0a0a0a 0%, rgba(232, 68, 26, 0.05) 100%)',
          borderBottom: '1px solid rgba(232, 68, 26, 0.15)',
        }}>
          <div className="max-w-3xl mx-auto px-4">
            <div style={{ marginBottom: '24px' }}>
              <Link href="/blog" style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#E8441A',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                ← Retour au blog
              </Link>
            </div>
            <p style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: '#E8441A',
              marginBottom: '12px',
            }}>
              Guide
            </p>
            <h1 style={{
              fontSize: 'clamp(28px, 6vw, 48px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '16px',
            }}>
              Punaise de colza en Île-de-France : invasion estivale sans danger (12 jours)
            </h1>
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.6)',
            }}>
              <span>Par Techniciens Certibiocide</span>
              <span>·</span>
              <time>23 août 2026</time>
              <span>·</span>
              <span>Temps de lecture : 8 min</span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4" style={{ paddingTop: '60px', paddingBottom: '80px' }}>

          {/* Section : EN BREF */}
          <section style={{
            background: 'rgba(232, 68, 26, 0.08)',
            border: '1px solid rgba(232, 68, 26, 0.25)',
            borderRadius: '14px',
            padding: '24px',
            marginBottom: '48px',
          }}>
            <h2 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: '#E8441A', marginBottom: '12px' }}>EN BREF</h2>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
              La punaise de colza (Eurydema oleracea) est un petit insecte noir de 8 mm qui envahit massivement les façades et intérieurs d'Île-de-France après la moisson du colza (juillet-août). Complètement inoffensive : ne pique pas, ne transmet aucune maladie, n'endommage rien. La vague passe seule en 10 à 15 jours, accélérée par pluie et baisse des températures. Prévention efficace : fermeture des ouvertures, moustiquaires, aspiration, eau savonneuse. Traitement professionnel indispensable seulement en cas d'invasion massive (façade recouverte &gt; 60 %), sinon, c'est une arnaque commerciale.
            </p>
          </section>

          {/* Heading H2 */}
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '16px', marginTop: '48px', lineHeight: 1.2 }}>
            Introduction : l'invasion estivale d'Île-de-France que nul ne redoute (mais qui alarme)
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: '16px' }}>
            Depuis 20 ans, chaque été et début automne, l'Île-de-France fait face au même phénomène : des milliers de petites punaises noires envahissent façades, appuis de fenêtres et intérieurs des logements. Les médias locaux la couvrent comme une urgence sanitaire. Les habitants paniquent. Les arnaqueurs commercialisent des « traitements d'urgence ». Pourtant, c'est l'une des seules invasions de nuisibles où l'intervention professionnelle est <strong>presque toujours inutile</strong>.
          </p>

          {/* Callout */}
          <div style={{
            background: 'rgba(34, 197, 94, 0.08)',
            border: '1px solid rgba(34, 197, 94, 0.25)',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '32px',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.85)',
          }}>
            <strong style={{ color: '#22c55e' }}>✓ Bonne nouvelle :</strong> ces insectes ne représentent <strong>aucun danger</strong> pour vous, vos enfants, vos animaux ou votre logement.
          </div>

          {/* Heading H2 */}
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '16px', marginTop: '48px', lineHeight: 1.2 }}>
            Qu'est-ce que la punaise de colza : identification et biologie
          </h2>

          {/* Heading H3 */}
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '12px', marginTop: '24px' }}>
            Description exacte
          </h3>
          <ul style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', marginBottom: '24px', paddingLeft: '24px' }}>
            <li><strong>Nom scientifique :</strong> Eurydema oleracea (punaise verte et noire du chou sur certains stades)</li>
            <li><strong>Nom courant :</strong> Punaise de colza, punaise des champs, punaise verte du chou</li>
            <li><strong>Taille :</strong> 7–9 mm de long</li>
            <li><strong>Couleur :</strong> Noire à brunâtre avec des taches ou des marques blanches ou rougeâtres (stade larval : entièrement noire, sans ailes)</li>
            <li><strong>Morphologie :</strong> Corps plat, rostre (trompe) adapté uniquement aux végétaux, antennes 5-segmentées</li>
            <li><strong>Déplacement :</strong> Très rapide, en groupes serrés, capable de s'infiltrer dans les moindres interstices (0,2 cm suffit)</li>
          </ul>

          {/* Heading H3 */}
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '12px', marginTop: '24px' }}>
            D'où vient-elle exactement ?
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: '16px' }}>
            La punaise de colza prolifère naturellement dans les cultures de colza (Brassica napus) qui couvrent environ <strong>120 000 hectares en Île-de-France</strong> (source : Agreste Île-de-France 2024). Seine-et-Marne et Yvelines sont particulièrement affectées. Elle se nourrit également de cultures connexes : navettes, radis, capucines, autres brassicacées.
          </p>

          {/* Heading H2 */}
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '16px', marginTop: '48px', lineHeight: 1.2 }}>
            Pourquoi envahissent-elles les maisons en juillet-août exactement
          </h2>

          {/* Heading H3 */}
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '12px', marginTop: '24px' }}>
            Le déclencheur : fin de la moisson
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: '16px' }}>
            Entre mi-juillet et fin août, les agriculteurs d'Île-de-France récolent le colza de l'année. Coupées les plantes, détruits les habitats et sources alimentaires. Les punaises, en centaines de milliers, se retrouvent d'un coup sans abri ni nourriture.
          </p>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: '16px' }}>
            Situation aggravée par : canicule + sécheresse + champs retournés = situation critique pour la survie.
          </p>

          {/* Heading H2 */}
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '16px', marginTop: '48px', lineHeight: 1.2 }}>
            La punaise de colza est-elle dangereuse : le vrai diagnostic
          </h2>

          {/* Callout */}
          <div style={{
            background: 'rgba(34, 197, 94, 0.08)',
            border: '1px solid rgba(34, 197, 94, 0.25)',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '32px',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.85)',
          }}>
            <strong style={{ color: '#22c55e' }}>Verdict : NON, aucune dangerosité mesurable</strong> Contrairement aux punaises diaboliques, aux punaises de lit ou aux insectes nuisibles classiques, la punaise de colza présente un profil de risque sanitaire quasi nul.
          </div>

          {/* Heading H3 */}
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '12px', marginTop: '24px' }}>
            1. Piqûres et prélèvement de sang : absents
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: '16px' }}>
            <strong>Mécanisme d'alimentation :</strong> La punaise de colza possède un rostre (trompe) spécialisé exclusivement en succion de sève végétale. Cette structure est physiquement incapable de percer une peau humaine, animale ou même épaisse.
          </p>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: '16px' }}>
            <strong>Conséquence :</strong> Zéro piqûres, zéro irritation, zéro transmission d'agent pathogène par voie cutanée.
          </p>

          {/* Heading H3 */}
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '12px', marginTop: '24px' }}>
            2. Transmission de maladies : aucune documentée
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: '16px' }}>
            Contrairement au moustique tigre (porteur du virus du Nil en Île-de-France 2026) ou à la tique (Lyme, encéphalite), la punaise de colza : <br />
            • N'effectue aucun prélèvement sanguin (donc pas de transmission pathogène par voie sanguine) <br />
            • Ne transmet aucune maladie listée par Santé Publique France ou l'ANSES <br />
            • N'est porteuse d'aucun parasite transmissible à l'homme
          </p>

          {/* Heading H2 */}
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '16px', marginTop: '48px', lineHeight: 1.2 }}>
            Tableau comparatif : punaise de colza vs autres nuisibles qui RESSEMBLENT
          </h2>

          <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.85)',
            }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(232, 68, 26, 0.3)' }}>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: '#fff' }}>Critère</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: '#22c55e' }}>Punaise de colza ✅</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: '#E8441A' }}>Punaise de lit ⚠️</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '12px' }}>Piqûre humain</td>
                  <td style={{ padding: '12px', color: '#22c55e' }}>Non</td>
                  <td style={{ padding: '12px', color: '#E8441A' }}>Oui (sang)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '12px' }}>Maladie transmise</td>
                  <td style={{ padding: '12px', color: '#22c55e' }}>Aucune</td>
                  <td style={{ padding: '12px', color: '#E8441A' }}>Aucune mais nuisance massive</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '12px' }}>Où on la trouve</td>
                  <td style={{ padding: '12px', color: '#22c55e' }}>Façades, fenêtres, groupes</td>
                  <td style={{ padding: '12px', color: '#E8441A' }}>Lit, matelas, coutures</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '12px' }}>Durée avant disparition</td>
                  <td style={{ padding: '12px', color: '#22c55e' }}>10–15 jours (naturelle)</td>
                  <td style={{ padding: '12px', color: '#E8441A' }}>Mois/années sans traitement</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Heading H2 */}
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '16px', marginTop: '48px', lineHeight: 1.2 }}>
            Durée réelle d'une invasion : quand se termine-t-elle vraiment
          </h2>

          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '12px', marginTop: '24px' }}>
            Fenêtre typique en Île-de-France
          </h3>
          <ul style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', marginBottom: '24px', paddingLeft: '24px' }}>
            <li><strong>J0 (fin moisson) :</strong> Début de l'invasion, volume monte exponentiellement</li>
            <li><strong>J3–J5 :</strong> Pic de présence visible (plusieurs milliers par façade moyenne)</li>
            <li><strong>J8–J10 :</strong> Déclin progressif</li>
            <li><strong>J12–J15 :</strong> Disparition quasi totale</li>
          </ul>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: '16px' }}>
            <strong>Conclusion :</strong> Vous êtes rarement concerné plus de 2 semaines.
          </p>

          {/* Heading H2 */}
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '16px', marginTop: '48px', lineHeight: 1.2 }}>
            Comment s'en débarrasser : méthodes hiérarchisées
          </h2>

          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '12px', marginTop: '24px' }}>
            NIVEAU 1 : Prévention et limitation des intrusions (gratuit, efficace)
          </h3>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>1. Fermeture des accès</h4>
            <ul style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', paddingLeft: '20px' }}>
              <li>Fermer fenêtres aux heures chaudes (surtout 12h–18h)</li>
              <li>Laisser aérations minimales ou fermer grilles aération</li>
              <li>Sceller fentes des portes avec bande adhésive silicone (provisoire)</li>
              <li>Vérifier joints de fenêtres, les réparer si fissuré</li>
            </ul>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>2. Moustiquaires</h4>
            <ul style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', paddingLeft: '20px' }}>
              <li>Pose moustiquaires sur ouvertures principales (chambre, séjour)</li>
              <li>Maille fine (&lt; 0,5 mm) ou moustiquaires anti-insectes</li>
              <li>Budget : 15–50 €/fenêtre</li>
              <li>Efficacité : 85–95 %</li>
            </ul>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>3. Aspiration et balayage</h4>
            <ul style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', paddingLeft: '20px' }}>
              <li>Aspirer les insectes qui entrent (videz bac/sac <strong>dehors immédiatement</strong>)</li>
              <li>Balayer et jeter directement à la poubelle extérieure</li>
              <li>Sûr 100 % pour vous (ne piquent pas)</li>
            </ul>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>4. Nettoyage à l'eau savonneuse</h4>
            <ul style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', paddingLeft: '20px' }}>
              <li>Spray 1 L eau + 2 cuillères savon noir liquide</li>
              <li>Pulvériser sur groupes visibles (façade, rebord fenêtre)</li>
              <li>Tue au contact par asphyxie des spiracles respiratoires</li>
              <li>Effet immédiat, zéro toxicité environnement</li>
            </ul>
          </div>

          <p style={{
            fontSize: '13px',
            fontWeight: 600,
            color: '#E8441A',
            background: 'rgba(232, 68, 26, 0.1)',
            border: '1px solid rgba(232, 68, 26, 0.25)',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '32px',
          }}>
            <strong>Coût total niveau 1 :</strong> 20–100 €, efficacité 70–80 %
          </p>

          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '12px', marginTop: '24px' }}>
            NIVEAU 3 : Traitement professionnel (rarement utile)
          </h3>

          <div style={{
            background: 'rgba(232, 68, 26, 0.08)',
            border: '1px solid rgba(232, 68, 26, 0.25)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '24px',
          }}>
            <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: '12px' }}>
              <strong>Quand intervenir :</strong> <br />
              • Façade envahie (&gt; 60 % recouverte) malgré prévention <br />
              • Intrusions constantes 24h/24, rues bloquées par volume <br />
              • Situation psychologiquement intolérable (très rare)
            </p>
            <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
              <strong>Technique unique efficace :</strong> Traitement de barrière périmétrique (pulvérisation insecticide rémanent autour fenêtres, seuils, joints portes, corniches). Coût : 180–350 € selon surface. Efficacité : réduit intrusions de 75–90 %, n'élimine pas l'invasion (elle repart seule).
            </p>
          </div>

          <p style={{
            fontSize: '13px',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.6)',
            paddingLeft: '16px',
            borderLeft: '2px solid rgba(232, 68, 26, 0.3)',
          }}>
            <strong>Avis honnête :</strong> Dans 95 % des cas, c'est une dépense inutile. Si un spécialiste vous la propose sans que vous n'ayez spécifié « invasion ingérable », c'est une arnaque commerciale.
          </p>

          {/* Heading H2 */}
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '16px', marginTop: '48px', lineHeight: 1.2 }}>
            FAQ : tout ce qu'on vous demande
          </h2>

          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { q: 'La punaise de colza pique-t-elle l\'homme ?', a: 'Non, jamais. Elle ne dispose pas de rostre piqueur. Zéro piqûre possible. Si piqûres au réveil, c\'est autre chose (lit, moustique).' },
              { q: 'Peut-elle transmettre une maladie ?', a: 'Non. Contrairement au moustique tigre (virus du Nil en Île-de-France 2026), elle n\'effectue aucun prélèvement sanguin. Zéro transmission documentée.' },
              { q: 'Dangereux pour chien / chat ?', a: 'Non. Pas toxique, pas d\'allergie, pas de parasite transmis. Animal qui en croque une = zéro conséquence grave.' },
              { q: 'Durée de l\'invasion ?', a: '10–15 jours naturellement. Pluie ou baisse température accélèrent (−3 à −5 jours).' },
              { q: 'Peuvent-elles nicher définitivement dans ma maison ?', a: 'Non. Ce sont des migrantes saisonnières de crise. Elles repartent seules en 2 semaines, ne s\'installent pas.' },
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '16px',
              }}>
                <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#E8441A', marginBottom: '8px' }}>
                  {item.q}
                </h4>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)' }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <section style={{
            background: 'rgba(232, 68, 26, 0.1)',
            border: '2px solid rgba(232, 68, 26, 0.3)',
            borderRadius: '16px',
            padding: '40px',
            marginTop: '60px',
            textAlign: 'center',
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
              Invasion de punaises de colza ingérable ?
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', marginBottom: '24px' }}>
              Nos techniciens certifiés Certibiocide d'Allo Nuisible IDF vous aident. Diagnostic honnête : traitement seulement si vraiment nécessaire.
            </p>
            <a href="tel:+33768077219" style={{
              display: 'inline-block',
              background: '#E8441A',
              color: '#fff',
              fontWeight: 800,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '.08em',
              padding: '14px 28px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            className="hover:bg-[#d03a15] hover:shadow-lg hover:shadow-[#E8441A]/30">
              Appeler : 07 68 07 72 19
            </a>
          </section>

        </article>

      </main>
      <Footer />
    </>
  )
}
