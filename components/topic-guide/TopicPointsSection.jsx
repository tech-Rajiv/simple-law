/**
 * Numbered key points for topic detail pages.
 *
 * @param {Object} props
 * @param {string} [props.heading]
 * @param {{ title: string, body: string }[]} props.points
 */
export default function TopicPointsSection({ heading = 'Key ideas', points = [] }) {
  if (!points.length) return null

  return (
    <section
      className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8"
      aria-labelledby="topic-points-heading"
    >
      <h2 id="topic-points-heading" className="text-lg font-semibold text-[color:var(--text-primary)]">
        {heading}
      </h2>
      <ol className="mt-6 space-y-8">
        {points.map((point, index) => (
          <li key={point.title} className="border-t border-[color:var(--border-light)] pt-8 first:border-t-0 first:pt-0">
            <div className="flex flex-wrap items-baseline gap-2">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-primary)] text-sm font-semibold text-[color:var(--text-inverse)]"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="text-base font-semibold text-[color:var(--text-primary)]">{point.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)] md:pl-10">{point.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
