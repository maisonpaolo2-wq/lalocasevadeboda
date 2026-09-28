import Image from 'next/image'
import HeroTitle from '@/components/HeroTitle'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import { siteConfig, values } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Sobre mí · La wedding planner detrás de la locura',
  description:
    'Conoce a La Loca, wedding planner en Barcelona formada en Entre Tonos Wedding Plan Academy. Bodas diferentes con alma, detalle y un plan B para todo.',
  path: '/sobre-mi',
})

export default function SobreMi() {
  return (
    <>
      <section className="editorial-hero">
        <span className="watermark" aria-hidden="true">
          hola
        </span>
        <div className="container" style={{ position: 'relative' }}>
          <Reveal variant="fade-in">
            <span className="eyebrow">Sobre mí</span>
          </Reveal>
          <HeroTitle lines={['Me llaman', <em key="e">La Loca</em>, 'y con razón']} />
        </div>
      </section>

      <section className="section">
        <div className="container story-long">
          <Reveal variant="scale-in" className="story-long__photo">
            <Image
              src="/photos/sonrisa-gafas.webp"
              alt="La planner de La Loca Se Va De Boda sonriendo con gafas y jersey azul claro"
              fill
              priority
              sizes="(min-width: 900px) 55vw, 100vw"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="dropcap">
                Siempre he sido la amiga que organiza. La que hace la lista de la compra del viaje, la que se acuerda de los
                cumpleaños y la que acaba decorando la mesa con lo que haya en casa. Un día me di cuenta de que eso tenía nombre y
                de que podía dedicarme a ello.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted">
                Me formé como wedding planner en Entre Tonos Wedding Plan Academy, donde aprendí la parte que no se ve: contratos,
                presupuestos, timings, montajes y cómo tratar con cada proveedor. Esa base es la que me permite proponer ideas
                atrevidas sin que nada se me escape.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">
                Lo de loca viene de otra parte. Me aburren las bodas que se parecen todas, los protocolos que nadie entiende y los
                detalles que se ponen porque toca. Me gustan las rosas rojas de tallo largo, los retratos en blanco y negro, las
                despedidas con lazos gigantes y las fiestas en las que el novio acaba cantando.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="muted">
                Vivo y trabajo en Barcelona, y organizo bodas en toda Catalunya. Trabajo con pocas parejas al año para poder estar
                de verdad en cada una.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="signature">{siteConfig.planner}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="separator" aria-label="Retrato de pareja">
        <Image src="/photos/pareja-bn-telas.webp" alt="Pareja en blanco y negro ante telas blancas drapeadas" fill sizes="100vw" />
        <Reveal className="separator__text" variant="fade-in">
          <span className="hand">mi manera de trabajar</span>
          <p>corazón y Excel</p>
        </Reveal>
      </section>

      <section className="section section--surface">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Valores</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title" style={{ maxWidth: '16ch' }}>
              Lo que no <em>negocio</em>
            </h2>
          </Reveal>
          <div className="values">
            {values.map((v, i) => (
              <Reveal key={v.title} index={i} className="value">
                <span className="value__num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand surface={false} title={<>¿Nos tomamos un <em>café</em>?</>} watermark="café" />
    </>
  )
}
