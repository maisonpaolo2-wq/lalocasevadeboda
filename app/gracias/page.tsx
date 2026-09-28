import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { waLink } from '@/components/WhatsAppButton'
import { siteConfig } from '@/content/data'

export const metadata: Metadata = {
  title: 'Gracias por escribirme',
  description:
    'He recibido tu mensaje para organizar tu boda o despedida en Barcelona. La Loca Se Va De Boda te responderá por email en menos de 48 horas. Gracias.',
  robots: { index: false, follow: true },
  openGraph: { images: ['/og-image.jpg'] },
}

export default function Gracias() {
  return (
    <>
      <PageHero
        image="/photos/pareja-bn-baile.webp"
        alt="Novios bailando abrazados en blanco y negro"
        eyebrow="Mensaje recibido"
        lines={['¡Gracias!', <em key="e">Empieza lo bueno</em>]}
        text="Ya tengo vuestro mensaje. En menos de 48 horas os escribo para conocernos y hablar de vuestra idea."
      />
      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <p className="signature" style={{ marginTop: 0 }}>
              {siteConfig.planner}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="muted" style={{ maxWidth: '34rem', margin: '1rem auto 2rem' }}>
              Mientras tanto, podéis cotillear el portfolio o, si tenéis prisa, escribirme directamente por WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="btn-row">
            <Link href="/portfolio" className="btn btn--solid">
              Ver portfolio
            </Link>
            <a href={waLink()} className="btn" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
