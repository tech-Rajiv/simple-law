'use client'

import Image from 'next/image'
import { useCallback, useEffect, useId, useState } from 'react'

/**
 * Simple carousel for topic detail pages. Pass one slot per slide; use imageSrc: null for empty placeholders.
 *
 * @param {Object} props
 * @param {{ imageSrc?: string | null, alt?: string, caption?: string }[]} props.slides
 * @param {string} [props.heading]
 */
export default function TopicImageCarousel({ slides = [], heading = 'Illustrations' }) {
  const id = useId()
  const [index, setIndex] = useState(0)
  const count = slides.length

  const go = useCallback(
    (next) => {
      if (count === 0) return
      const i = ((next % count) + count) % count
      setIndex(i)
    },
    [count]
  )

  useEffect(() => {
    function onKey(e) {
      if (count < 2) return
      if (e.key === 'ArrowLeft') go(index - 1)
      if (e.key === 'ArrowRight') go(index + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [count, go, index])

  if (count === 0) return null

  return (
    <section
      className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)] md:p-6"
      aria-roledescription="carousel"
      aria-label={heading}
    >
      {heading ? (
        <h2 className="text-lg font-semibold text-[color:var(--text-primary)]">{heading}</h2>
      ) : null}

      <div className={heading ? 'mt-4' : ''}>
        <div className="relative overflow-hidden rounded-xl bg-[color:var(--hover-bg)]">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
            id={`${id}-track`}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full shrink-0"
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={i !== index}
              >
                <div className="relative aspect-[16/10] w-full md:max-w-[85%] md:mx-auto">
                  {slide.imageSrc ? (
                    <Image
                      src={slide.imageSrc}
                      alt={slide.alt || ''}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  ) : (
                    <div className="flex h-full min-h-[200px] w-full flex-col items-center justify-center gap-2 bg-[color:var(--bg-topic-serious)] px-6 text-center md:min-h-[240px]">
                      <span className="text-sm font-medium text-[color:var(--text-muted)]">Image slot {i + 1}</span>
                      <span className="max-w-xs text-xs text-[color:var(--text-muted)]">
                        Add your visual here later — background reserved for your asset.
                      </span>
                    </div>
                  )}
                </div>
                {slide.caption ? (
                  <p className="border-t border-[color:var(--border-light)] px-4 py-3 text-center text-sm text-[color:var(--text-secondary)]">
                    {slide.caption}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {count > 1 ? (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-lg border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-3 py-2 text-sm font-medium text-[color:var(--text-primary)] hover:bg-[color:var(--hover-bg)]"
                onClick={() => go(index - 1)}
                aria-controls={`${id}-track`}
                aria-label="Previous slide"
              >
                Previous
              </button>
              <button
                type="button"
                className="rounded-lg border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-3 py-2 text-sm font-medium text-[color:var(--text-primary)] hover:bg-[color:var(--hover-bg)]"
                onClick={() => go(index + 1)}
                aria-controls={`${id}-track`}
                aria-label="Next slide"
              >
                Next
              </button>
            </div>
            <div className="flex gap-1.5" role="tablist" aria-label="Slide indicators">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => go(i)}
                  className={[
                    'h-2.5 w-2.5 rounded-full transition-colors',
                    i === index ? 'bg-[color:var(--color-primary)]' : 'bg-[color:var(--border-light)] hover:bg-[color:var(--text-muted)]',
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
