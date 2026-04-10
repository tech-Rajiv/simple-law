/**
 * Situation → suggested approach cards for applied learning.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {{ situation: string, approach: string }[]} props.scenarios
 */
export default function TopicScenarioCards({ title, scenarios = [] }) {
  if (!scenarios.length) return null

  return (
    <section
      className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8"
      aria-labelledby="topic-scenarios-heading"
    >
      <h2 id="topic-scenarios-heading" className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl">
        {title}
      </h2>
      <ul className="mt-6 space-y-4">
        {scenarios.map((s, i) => (
          <li
            key={i}
            className="rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-page)] p-5 md:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">Scenario</p>
            <p className="mt-1 text-sm font-medium text-[color:var(--text-primary)] md:text-base">{s.situation}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-primary)]">
              Try this
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">{s.approach}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
