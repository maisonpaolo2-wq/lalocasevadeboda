import Image from 'next/image'
import Link from 'next/link'
import HeroTitle from '@/components/HeroTitle'
import Reveal, { Line } from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Badge from '@/components/Badge'
import Marquee from '@/components/Marquee'
import { waLink } from '@/components/WhatsAppButton'
import { photos, processSteps, services, siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Wedding planner en Barcelona · Bodas diferentes',
  description:
    'La Loca Se Va De Boda, wedding planner en Barcelona. Organización integral, diseño, coordinación del día B y despedidas para parejas que salen de lo tradicional.',
  path: '/',
})

const portfolioHome = photos.filter((p) => p.src !== '/photos/sonrisa-gafas.webp')

export default function Home() {
  return (
    <>
      {/* HERO · a sangre en móvil, split editorial en desktop */}
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/photos/novia-jardin-rosa.webp"
            alt="Novia con traje de chaqueta blanco caminando por un patio con una rosa roja en la mano"
            fill
            priority
            sizes="(min-width: 900px) 48vw, 100vw"
          />
        </div>
        <Badge />
        <div className="container hero__content">
          <Reveal variant="fade-in">
            <span className="eyebrow eyebrow--light">Wedding planner · Barcelona</span>
          </Reveal>
          <HeroTitle
            lines={[
              'Sal de lo',
              <em key="l2">tradicional</em>,
            ]}
          />
          <Reveal delay={0.5}>
            <p className="hero__sub">Y convierte tu boda en una locura, con mucho corazón y cada detalle bajo control.</p>
          </Reveal>
          <Reveal delay={0.6} className="btn-row">
            <Link href="/contacto" className="btn btn--solid">
              Cuéntame tu idea
            </Link>
            <a href="#servicios" className="btn btn--light">
              Qué hago
            </a>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* INTRO · asimétrica 40/60, empieza con subtítulo fino */}
      <section className="section" id="intro">
        <div className="container intro">
          <div>
            <Reveal>
              <span className="eyebrow">Hola, soy La Loca</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Bodas con <em>alma</em>, sin plantillas
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">{siteConfig.bioShort}</p>
              <p className="muted">
                Rosas rojas de tallo largo, retratos en blanco y negro o una despedida con lazos gigantes. Si os lo imagináis, lo
                organizamos. Y si todavía no lo imagináis, para eso estoy.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <Link href="/sobre-mi" className="link-arrow">
                Conóceme →
              </Link>
            </Reveal>
          </div>
          <div className="intro__photos">
            <Reveal variant="scale-in" className="intro__main">
              <Image
                src="/photos/pareja-bn-telas.webp"
                alt="Pareja en blanco y negro ante telas blancas drapeadas, ella sentada con una rosa y él de pie con traje"
                fill
                sizes="(min-width: 900px) 45vw, 84vw"
              />
            </Reveal>
            <Reveal variant="fade-up" delay={0.2} className="intro__polaroid">
              <div>
                <Image
                  src="/photos/rosa-roja-detalle.webp"
                  alt="Detalle de una rosa roja abierta iluminada con luz cálida"
                  fill
                  sizes="(min-width: 900px) 22vw, 46vw"
                />
              </div>
              <span className="hand">el detalle manda</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICIOS · stacked, empieza con número grande */}
      <section className="section section--surface" id="servicios">
        <div className="container">
          <div className="services-head">
            <span className="watermark" aria-hidden="true">
              04
            </span>
            <Reveal>
              <span className="eyebrow">Lo que hago</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title" style={{ marginBottom: 0, maxWidth: '14ch' }}>
                Cuatro maneras de <em>perder</em> la cabeza
              </h2>
            </Reveal>
          </div>
          {services.map((s, i) => (
            <article key={s.slug} className="svc svc--home">
              <Reveal variant="scale-in" className="svc__img">
                <Image src={s.image} alt={`${s.title}, La Loca Se Va De Boda`} fill sizes="(min-width: 1100px) 30vw, (min-width: 768px) 40vw, 100vw" />
              </Reveal>
              <Reveal delay={0.08}>
                <span className="svc__num">0{i + 1}</span>
                <h3>{s.title}</h3>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="muted">{s.description}</p>
                <Link href={`/servicios#${s.slug}`} className="link-arrow">
                  Ver en detalle →
                </Link>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* SEPARADOR a sangre */}
      <section className="separator" aria-label="Rosas rojas">
        <Image src="/photos/mano-ramo-rosas.webp" alt="Mano de la novia sujetando boca abajo un ramo de rosas rojas" fill sizes="100vw" />
        <Reveal className="separator__text" variant="fade-in">
          <span className="hand">hay historias que no se explican…</span>
          <p>se sienten</p>
        </Reveal>
      </section>

      {/* PROCESO · timeline, empieza con línea + título */}
      <section className="section" id="proceso">
        <div className="container">
          <Line width="5rem" />
          <Reveal>
            <h2 className="title" style={{ marginTop: '1.6rem', maxWidth: '16ch' }}>
              Del primer café al <em>último</em> baile
            </h2>
          </Reveal>
          <ol className="timeline">
            {processSteps.map((s, i) => (
              <Reveal key={s.number} as="li" className="tl" index={i}>
                <span className="tl__dot">{s.number}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PORTFOLIO · filmstrip a sangre */}
      <section className="section section--surface" id="portfolio">
        <div className="container portfolio-head">
          <div>
            <Reveal>
              <span className="eyebrow">Portfolio</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title" style={{ marginBottom: 0 }}>
                Rosas, blanco y negro y <em>lazos</em> gigantes
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link href="/portfolio" className="link-arrow">
              Ver todo el portfolio →
            </Link>
          </Reveal>
        </div>
        <Gallery photos={portfolioHome} layout="filmstrip" />
      </section>

      {/* SOBRE MÍ */}
      <section className="section" id="sobre-mi">
        <div className="container about">
          <Reveal variant="scale-in" className="about__photo">
            <div>
              <Image
                src="/photos/sonrisa-gafas.webp"
                alt="La planner de La Loca Se Va De Boda sonriendo con gafas y jersey azul claro"
                fill
                sizes="(min-width: 900px) 52vw, 100vw"
              />
            </div>
          </Reveal>
          <div className="about__text">
            <span className="watermark" aria-hidden="true">
              loca
            </span>
            <Reveal>
              <span className="eyebrow">Sobre mí</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Loca, sí. <em>Desorganizada</em>, nunca
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">{siteConfig.bio}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="signature">{siteConfig.planner}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link href="/sobre-mi" className="link-arrow">
                Mi historia completa →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS · tarjetas */}
      <section className="section section--surface" id="testimonios">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Lo que cuentan</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title" style={{ marginBottom: '2.5rem' }}>
              Parejas que se <em>atrevieron</em>
            </h2>
          </Reveal>
          <Testimonials />
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section" id="contacto">
        <div className="container contact">
          <div>
            <Reveal>
              <span className="eyebrow">Contacto</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                ¿Tenéis fecha? <em>Hablemos</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">
                Contadme cuándo, cuántos y qué os ronda por la cabeza. Os respondo en menos de 48 horas para quedar a tomar un café en
                Barcelona o por videollamada.
              </p>
            </Reveal>
            <dl>
              <Reveal>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </dd>
              </Reveal>
              <Reveal index={1}>
                <dt>WhatsApp</dt>
                <dd>
                  <a href={waLink()} target="_blank" rel="noopener noreferrer">
                    Escríbeme por WhatsApp
                  </a>
                </dd>
              </Reveal>
              <Reveal index={2}>
                <dt>Instagram</dt>
                <dd>
                  <a href={`https://www.instagram.com/${siteConfig.instagram.replace('@', '')}/`} target="_blank" rel="noopener noreferrer">
                    {siteConfig.instagram}
                  </a>
                </dd>
              </Reveal>
            </dl>
          </div>
          <Reveal delay={0.1}>
            <ContactForm compact />
          </Reveal>
        </div>
      </section>
    </>
  )
}
