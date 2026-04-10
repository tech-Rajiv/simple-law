'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Horizontally scrollable topic cards (wraps on large screens).
 * Reuse on any hub: pass `basePath` (e.g. /emotional-intelligence, /women) and items with slug/title/teaser/imageSrc.
 *
 * @param {Object} props
 * @param {string} props.basePath - Route prefix, no trailing slash (e.g. "/women")
 * @param {{ slug: string, title: string, teaser: string, imageSrc?: string | null }[]} props.items
 * @param {string} [props.sectionHeading]
 * @param {string} [props.ctaLabel]
 */
export default function TopicCategoryCardNav({
  basePath,
  items,
  sectionHeading = 'Explore topics',
  ctaLabel = 'Open guide →',
}) {
  const pathname = usePathname() || ''
  const root = basePath.replace(/\/$/, '')

  return (
    <div className="space-y-4">
      {sectionHeading ? (
        <h2 className="text-lg font-semibold text-[color:var(--text-primary)]">{sectionHeading}</h2>
      ) : null}
      <div
        className={[
          '-mx-1 min-w-0 pb-1',
          'overflow-x-auto overflow-y-hidden',
          '[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'lg:mx-0 lg:overflow-x-visible',
        ].join(' ')}
      >
        <div className="flex w-max max-w-none flex-nowrap gap-4 px-1 lg:w-full lg:max-w-full lg:flex-wrap">
          {items.map((topic) => {
            const href = `${root}/${topic.slug}`
            const active = pathname === href
            return (
              <Link
                key={topic.slug}
                href={href}
                scroll
                className={[
                  'flex w-[min(100vw-2.5rem,280px)] shrink-0 flex-col overflow-hidden rounded-2xl border transition-colors lg:w-[min(100%,260px)]',
                  active
                    ? 'border-[color:var(--color-primary)] bg-[color:var(--active-bg)] ring-1 ring-[color:var(--color-primary)]/20'
                    : 'border-[color:var(--border-light)] bg-[color:var(--bg-card)] hover:bg-[color:var(--hover-bg)]',
                ].join(' ')}
              >
                <div className="relative aspect-[16/10] w-full bg-[color:var(--hover-bg)]">
                  {topic.imageSrc ? (
                    <Image
                      src={topic.imageSrc}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 280px, 260px"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full flex-col items-center justify-center gap-1 px-4 text-center"
                      aria-hidden="true"
                    >
                      <span className="text-xs font-medium text-[color:var(--text-muted)]">Image</span>
                      <span className="text-[10px] text-[color:var(--text-muted)]">Add later</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-1 border-t border-[color:var(--border-light)] p-4">
                  <span
                    className={[
                      'text-sm font-semibold',
                      active ? 'text-[color:var(--color-primary)]' : 'text-[color:var(--text-primary)]',
                    ].join(' ')}
                  >
                    {topic.title}
                  </span>
                  <p className="text-xs leading-relaxed text-[color:var(--text-secondary)]">{topic.teaser}</p>
                  <span className="mt-2 text-xs font-medium text-[color:var(--color-primary)]">{ctaLabel}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
