import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { waLink } from '@/components/WhatsAppButton'
import { coverage, siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Contacto · Organiza tu boda en Barcelona',
  description:
    'Escribe a La Loca Se Va De Boda para organizar tu boda o despedida en Barcelona, Maresme, Penedès o Costa Brava. Respuesta en menos de 48 horas.',
  path: '/contacto',
})

export default function Contacto() {
  return (
    <>
      <PageHero
        image="/photos/rosa-roja-detalle.webp"
        alt="Detalle de una rosa roja abierta con los pétalos iluminados por luz cálida"
        eyebrow="Contacto"
        lines={['Empieza', <em key="e">la locura</em>]}
        text="Cuéntame lo que tengáis, aunque sea solo una fecha y muchas ganas."
      />

      <section className="section">
        <div className="container contact">
          <div>
            <Reveal>
              <span className="eyebrow">Escríbeme</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Un café y <em>hablamos</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">
                Respondo todos los mensajes en menos de 48 horas. La primera reunión es gratuita y sin compromiso, en Barcelona o por
                videollamada si vivís fuera.
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
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Zona de cobertura</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title" style={{ maxWidth: '18ch' }}>
              Desde Barcelona a <em>toda</em> Catalunya
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="muted" style={{ maxWidth: '38rem' }}>
              Tengo base en Barcelona y me muevo por toda Catalunya. Para bodas destino fuera de la comunidad, lo hablamos y os
              preparo una propuesta con desplazamientos incluidos.
            </p>
          </Reveal>
          <ul className="coverage">
            {coverage.map((c, i) => (
              <Reveal key={c.place} as="li" index={i}>
                <span>{c.place}</span>
                <span>{c.note}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
