/**
 * Short numbered path through the guide (overview, practice, review).
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {{ label: string, detail: string }[]} props.steps
 */
export default function TopicStepRibbon({ title, steps = [] }) {
  if (!steps.length) return null

  return (
    <section
      className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8"
      aria-labelledby="topic-steps-heading"
    >
      <h2 id="topic-steps-heading" className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl">
        {title}
      </h2>
      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li
            key={i}
            className="relative rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-page)] p-4 md:p-5"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-primary)] text-sm font-bold text-[color:var(--text-inverse)]"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <p className="mt-3 text-sm font-semibold text-[color:var(--text-primary)]">{s.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-[color:var(--text-secondary)] md:text-sm">{s.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
