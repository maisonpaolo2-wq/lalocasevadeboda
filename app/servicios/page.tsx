import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import { faqs, services } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Servicios de wedding planner en Barcelona',
  description:
    'Organización integral de bodas, diseño y styling, coordinación del día B y despedidas en Barcelona y Catalunya. Bodas diferentes, cuidadas al milímetro.',
  path: '/servicios',
  image: '/og-image.jpg',
})

export default function Servicios() {
  return (
    <>
      <PageHero
        image="/photos/novia-rostro-rosas.webp"
        alt="Novia con la mano en la mejilla y dos rosas rojas oscuras junto a su rostro"
        eyebrow="Servicios · Barcelona y Catalunya"
        lines={['Todo lo que', <em key="e">sé hacer</em>]}
        text="Desde organizar la boda entera hasta tomar el mando solo el día B. Elegid lo que necesitáis, el resto lo ponemos juntos."
      />

      <section className="section">
        <div className="container">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className="svc" style={{ scrollMarginTop: '6rem' }}>
              <Reveal variant="scale-in" className="svc__img">
                <Image src={s.image} alt={`${s.title}, servicio de La Loca Se Va De Boda`} fill sizes="(min-width: 768px) 42vw, 100vw" />
              </Reveal>
              <div>
                <Reveal>
                  <span className="svc__num">0{i + 1}</span>
                  <h3>{s.title}</h3>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="muted">{s.longDescription}</p>
                </Reveal>
                <Reveal delay={0.16}>
                  <ul>
                    {s.includes.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.24}>
                  <Link href={s.slug === 'despedidas' ? '/despedidas' : '/contacto'} className="link-arrow">
                    {s.slug === 'despedidas' ? 'Ver despedidas →' : 'Pedir propuesta →'}
                  </Link>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="duo" aria-label="Retratos de pareja">
        <div>
          <Image src="/photos/pareja-bn-caricia.webp" alt="Retrato en blanco y negro de una pareja abrazada" fill sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <div>
          <Image src="/photos/pareja-bn-baile.webp" alt="Novios bailando abrazados en blanco y negro con una rosa en la mano" fill sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </section>

      <section className="section section--surface">
        <div className="container" style={{ maxWidth: '860px' }}>
          <Reveal>
            <span className="eyebrow">Preguntas frecuentes</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title">
              Lo que siempre me <em>preguntan</em>
            </h2>
          </Reveal>
          <div className="faq">
            {faqs.map((f, i) => (
              <Reveal key={f.q} index={i}>
                <details>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand surface={false} />
    </>
  )
}
