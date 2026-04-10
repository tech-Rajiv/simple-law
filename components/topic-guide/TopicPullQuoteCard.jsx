/**
 * Editorial pull-quote — breaks up dense pages; great for expert voice or learner testimonial placeholders.
 */
export default function TopicPullQuoteCard({ quote, attribution, role, className = '' }) {
  if (!quote) return null

  return (
    <figure
      className={[
        'relative rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-8 py-10 shadow-[var(--shadow-soft)] md:px-12 md:py-12',
        className,
      ].join(' ')}
    >
      <span
        className="absolute left-6 top-6 font-serif text-6xl leading-none text-[color:var(--color-primary)]/20 md:left-8 md:text-7xl"
        aria-hidden="true"
      >
        “
      </span>
      <blockquote className="relative pt-6 text-lg font-medium leading-relaxed text-[color:var(--text-primary)] md:text-xl md:leading-relaxed">
        {quote}
      </blockquote>
      {(attribution || role) && (
        <figcaption className="mt-6 flex flex-col gap-0.5 border-t border-[color:var(--border-light)] pt-6 text-sm">
          {attribution ? (
            <cite className="not-italic font-semibold text-[color:var(--text-primary)]">{attribution}</cite>
          ) : null}
          {role ? <span className="text-[color:var(--text-secondary)]">{role}</span> : null}
        </figcaption>
      )}
    </figure>
  )
}
