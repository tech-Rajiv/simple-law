/**
 * Short highlight cards in a responsive grid (pillars, outcomes, principles).
 *
 * @param {Object} props
 * @param {string} [props.title] - Optional section heading above the grid
 * @param {{ title: string, description: string }[]} props.items
 * @param {string} [props.className]
 */
export default function LearningPillarGrid({ title, items = [], className = '' }) {
  if (!items.length) return null

  const lgCols =
    items.length >= 4 ? 'lg:grid-cols-4' : items.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
  const gridClass = `grid gap-4 sm:grid-cols-2 ${lgCols} lg:gap-6`

  return (
    <section
      className={`rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8 ${className}`}
      aria-labelledby={title ? 'learning-pillars-heading' : undefined}
    >
      {title ? (
        <h2
          id="learning-pillars-heading"
          className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl"
        >
          {title}
        </h2>
      ) : null}
      <ul
        className={
          title ? `mt-6 ${gridClass}` : gridClass
        }
      >
        {items.map((item, i) => (
          <li
            key={`${item.title}-${i}`}
            className="rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-page)] p-5"
          >
            <h3 className="text-sm font-semibold text-[color:var(--text-primary)] md:text-base">{item.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-[color:var(--text-secondary)] md:text-sm">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
