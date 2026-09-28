import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import CtaBand from '@/components/CtaBand'
import { photos } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Portfolio · Bodas diferentes y despedidas',
  description:
    'Portfolio de La Loca Se Va De Boda: styling con rosas rojas, retratos de pareja en blanco y negro y despedidas llenas de color en Barcelona y Catalunya.',
  path: '/portfolio',
})

// Bodas primero, despedidas al final
const ordered = [...photos.filter((p) => !/despedida|sonrisa/.test(p.src)), ...photos.filter((p) => /despedida|sonrisa/.test(p.src))]

export default function Portfolio() {
  return (
    <>
      <PageHero
        image="/photos/pareja-bn-baile.webp"
        alt="Novios bailando abrazados en blanco y negro con una rosa en la mano"
        eyebrow="Portfolio"
        lines={['Locuras', <em key="e">que salieron bien</em>]}
        text="Una selección de bodas, sesiones y despedidas. Toca cualquier foto para verla en grande."
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Rosas rojas · retratos · despedidas</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title" style={{ maxWidth: '18ch', marginBottom: '2.5rem' }}>
              Hay historias que no se explican, <em>se sienten</em>
            </h2>
          </Reveal>
          <Gallery photos={ordered} />
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Lo que cuentan</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title" style={{ marginBottom: '2.5rem' }}>
              Detrás de cada <em>foto</em>
            </h2>
          </Reveal>
          <Testimonials all />
        </div>
      </section>

      <CtaBand surface={false} />
    </>
  )
}
