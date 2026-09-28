'use client'

import Image from 'next/image'
import { useState } from 'react'
import Reveal from './Reveal'
import Lightbox from './Lightbox'

type Photo = { src: string; alt: string; orientation: 'landscape' | 'portrait' }

export default function Gallery({ photos, layout = 'masonry' }: { photos: Photo[]; layout?: 'masonry' | 'filmstrip' }) {
  const [active, setActive] = useState<number | null>(null)
  const film = layout === 'filmstrip'
  return (
    <>
      <div className={film ? 'filmstrip' : 'masonry'}>
        {photos.map((p, i) => (
          <Reveal key={p.src} variant="scale-in" index={film ? Math.min(i, 4) : i % 3}>
            <button
              type="button"
              className={film ? 'filmstrip__item' : `masonry__item masonry__item--${p.orientation}`}
              onClick={() => setActive(i)}
              aria-label={`Ampliar: ${p.alt}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes={film ? '(min-width: 1200px) 24vw, (min-width: 768px) 34vw, 78vw' : '(min-width: 1000px) 33vw, (min-width: 560px) 50vw, 100vw'}
              />
            </button>
          </Reveal>
        ))}
      </div>
      <Lightbox photos={photos} index={active} onChange={setActive} />
    </>
  )
}
