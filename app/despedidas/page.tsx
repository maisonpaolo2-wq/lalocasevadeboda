import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Despedidas de soltera y soltero en Barcelona',
  description:
    'Despedidas de soltera y soltero en Barcelona organizadas a medida: decoración, juegos, merienda y fiesta. La amiga organizadora también disfruta.',
  path: '/despedidas',
})

const ideas = [
  { title: 'Casa decorada', text: 'Lazos gigantes, collares de flores, globos y un photocall pensado para el grupo. Llegáis y todo está listo.' },
  { title: 'Juegos con sentido', text: 'Dinámicas personalizadas con anécdotas reales de la novia o el novio. Risas aseguradas, vergüenza la justa.' },
  { title: 'Merienda o cena', text: 'Catering, mesa dulce o reserva en un restaurante de Barcelona que encaje con el plan y el presupuesto.' },
  { title: 'Fotógrafa y fiesta', text: 'Una fotógrafa para que nadie tenga que sacar el móvil, y una playlist hecha por vosotras para cerrar bailando.' },
]

export default function Despedidas() {
  return (
    <>
      <PageHero
        image="/photos/despedida-lazo-rosa.webp"
        alt="Novia de despedida con gran lazo rosa en el pelo y collar de flores bailando con sus amigas"
        eyebrow="Despedidas · Barcelona"
        lines={['La previa', <em key="e">también cuenta</em>]}
        text="Despedidas de soltera y soltero con juegos, disfraces y mucho baile, organizadas para que la amiga que siempre organiza pueda disfrutar."
      />

      <section className="section">
        <div className="container intro">
          <div>
            <Reveal>
              <span className="eyebrow">Cómo son</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Divertidas, cuidadas y <em>muy</em> vuestras
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">
                Me contáis cómo es la persona homenajeada, cuántas sois y qué os apetece. Yo propongo un plan, cierro reservas y
                preparo la decoración y los juegos. El día de la despedida vosotras solo tenéis que llegar con ganas.
              </p>
            </Reveal>
          </div>
          <div className="intro__photos">
            <Reveal variant="scale-in" className="intro__main">
              <Image
                src="/photos/despedida-juego-arco.webp"
                alt="Amigas jugando en una despedida, la novia pasa agachada bajo un arco de churros de piscina"
                fill
                sizes="(min-width: 900px) 45vw, 84vw"
              />
            </Reveal>
            <Reveal delay={0.2} className="intro__polaroid">
              <div>
                <Image src="/photos/sonrisa-gafas.webp" alt="Invitada sonriendo con gafas durante la despedida" fill sizes="(min-width: 900px) 22vw, 46vw" />
              </div>
              <span className="hand">¡qué risas!</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Qué incluye</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title" style={{ maxWidth: '16ch' }}>
              Un plan a medida del <em>grupo</em>
            </h2>
          </Reveal>
          <div className="values">
            {ideas.map((v, i) => (
              <Reveal key={v.title} index={i} className="value">
                <span className="value__num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        surface={false}
        watermark="fiesta"
        title={
          <>
            Organicemos la <em>despedida</em>
          </>
        }
        text="Dime la fecha, cuántas sois y qué le encanta a la novia o al novio. Te preparo una propuesta en 48 horas."
      />
    </>
  )
}
