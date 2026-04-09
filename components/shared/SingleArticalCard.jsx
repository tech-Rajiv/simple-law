import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SingleArticalCard({ article }) {
  return (
    <Link
      href={article.href}
      className={[
        'overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)]',
        'shadow-[var(--shadow-soft)]',
      ].join(' ')}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_220px]">
        <div className="flex flex-col justify-between gap-4 p-5">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold tracking-tight text-[color:var(--text-primary)]">
              {article.label}
            </h3>
            {article.description ? (
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                {article.description}
              </p>
            ) : null}
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-3 py-2 text-sm font-medium text-[color:var(--text-primary)] transition-colors hover:bg-[color:var(--bg-section)]">
              Read article <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>

        <div className="relative order-first aspect-[16/9] w-full overflow-hidden bg-[color:var(--bg-section)] md:order-none md:aspect-auto md:min-h-[160px] md:border-l md:border-[color:var(--border-light)]">
          {article.imageSrc ? (
            <Image
              src={article.imageSrc}
              alt={article.label}
              fill
              sizes="(max-width: 768px) 100vw, 220px"
              className="object-cover"
              priority={Boolean(article.imagePriority)}
            />
          ) : null}
        </div>
      </div>
    </Link>
  )
}   