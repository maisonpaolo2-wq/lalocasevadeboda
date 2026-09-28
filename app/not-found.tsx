import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Página no encontrada',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <>
      <PageHero
        image="/photos/rosas-rojas-espigas.webp"
        alt="Rosas rojas de tallo largo entre espigas doradas"
        eyebrow="Error 404"
        lines={['Esta página', <em key="e">se fue de boda</em>]}
        text="La página que buscas no existe o ha cambiado de sitio."
      />
      <section className="section cta-band">
        <div className="container">
          <div className="btn-row">
            <Link href="/" className="btn btn--solid">
              Volver al inicio
            </Link>
            <Link href="/contacto" className="btn">
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
