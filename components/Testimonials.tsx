import { testimonials } from '@/content/data'
import Reveal from './Reveal'

export default function Testimonials({ all = false }: { all?: boolean }) {
  const list = all ? testimonials : testimonials.slice(0, 3)
  return (
    <div className={all ? 'cards cards--all' : 'cards'}>
      {list.map((t, i) => (
        <Reveal key={t.name} index={i} as="article">
          <figure className="tcard" style={{ margin: 0 }}>
            <span className="tcard__mark" aria-hidden="true">
              “
            </span>
            <blockquote>{t.text}</blockquote>
            <cite>
              <b>{t.name}</b>
              <span>
                {t.date} · {t.location}
              </span>
            </cite>
          </figure>
        </Reveal>
      ))}
    </div>
  )
}
