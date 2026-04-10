/**
 * Soft gradient chips — keywords, skills, or filters; feels lighter than bullet lists.
 */
export default function TopicConceptChipCloud({ title, tags = [], className = '' }) {
  if (!tags.length) return null

  return (
    <section className={className} aria-labelledby={title ? 'chip-cloud-title' : undefined}>
      {title ? (
        <h2
          id="chip-cloud-title"
          className="mb-4 text-lg font-semibold text-[color:var(--text-primary)] md:text-xl"
        >
          {title}
        </h2>
      ) : null}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {tags.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="inline-flex items-center rounded-full border border-[color:var(--border-light)] bg-gradient-to-br from-[color:var(--bg-card)] to-[color:var(--hover-bg)] px-4 py-2 text-xs font-medium text-[color:var(--text-primary)] shadow-sm md:text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}
