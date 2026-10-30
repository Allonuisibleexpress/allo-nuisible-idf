import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Mise en page commune aux pages légales (mentions légales, politique de confidentialité).
export default function PageLegale({ titre, maj, children }: { titre: string; maj: string; children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ background: '#0d0d0d' }} className="px-4 pt-12 pb-20">
        <article className="max-w-3xl mx-auto text-white/75 leading-relaxed [&_h2]:text-white [&_h2]:font-black [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:mb-3 [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1 [&_a]:underline [&_a]:text-[#E8441A] [&_strong]:text-white">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">{titre}</h1>
          <p className="text-white/45 text-sm">Dernière mise à jour : {maj}</p>
          {children}
        </article>
      </main>
      <Footer />
    </>
  )
}

// Information encore manquante : bien visible tant qu'elle n'est pas complétée.
export function ACompleter({ children }: { children: React.ReactNode }) {
  return <span style={{ background: '#facc15', color: '#1a1a1a', padding: '0 6px', borderRadius: 4, fontWeight: 700 }}>{children}</span>
}
