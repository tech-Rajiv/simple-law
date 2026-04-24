/**
 * A "practice plan" section with step cards.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string[]} props.steps
 */
export default function TopicPracticePlan({ title, steps = [] }) {
  if (!steps.length) return null

  function parseStep(raw, fallbackLabel) {
    const text = String(raw ?? '').trim()
    const m = text.match(/^Day\s*([0-9]+(?:\s*[–-]\s*[0-9]+)?)\s*:\s*(.+)$/i)
    if (!m) return { label: fallbackLabel, body: text }
    const range = m[1].replace(/\s+/g, '')
    return { label: `Day ${range.replace('-', '–')}`, body: m[2].trim() }
  }

  return (
    <section
      className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] p-6 shadow-[var(--shadow-soft)] md:p-8"
      aria-labelledby="topic-practice-plan-heading"
    >
      <h2
        id="topic-practice-plan-heading"
        className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl"
      >
        {title}
      </h2>

      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((step, i) => {
          const fallback = i === 0 ? 'Day 1–2' : i === 1 ? 'Day 3–4' : `Day ${i + 1}`
          const parsed = parseStep(step, fallback)
          return (
            <li
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)] md:p-6"
            >
              <div
                className="absolute inset-y-0 left-0 w-1 bg-[color:var(--color-primary)]/70"
                aria-hidden="true"
              />
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-page)] text-[color:var(--color-primary)]"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-primary)]">
                    {parsed.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
                    {parsed.body}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

