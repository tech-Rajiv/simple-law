import Link from 'next/link'

/**
 * Back link + title for topic detail pages under any hub.
 */
export default function TopicDetailPageHeader({
  hubHref,
  backLabel = 'Back to overview',
  title,
  description,
}) {
  return (
    <header className="space-y-3">
      <Link
        href={hubHref}
        className="inline-flex text-sm font-medium text-[color:var(--color-primary)] hover:underline"
      >
        ← {backLabel}
      </Link>
      <h1 className="text-2xl font-bold tracking-tight text-[color:var(--text-primary)] md:text-3xl">{title}</h1>
      {description ? (
        <p className="max-w-3xl text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
          {description}
        </p>
      ) : null}
    </header>
  )
}
