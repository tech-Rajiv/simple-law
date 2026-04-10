/**
 * Vertical timeline with accent line — milestones, learning path, or process (distinct from TopicStepRibbon).
 */
export default function TopicVerticalTimelineModern({ title, steps = [], className = '' }) {
  if (!steps.length) return null

  return (
    <section className={className} aria-labelledby={title ? 'vtimeline-title' : undefined}>
      {title ? (
        <h2
          id="vtimeline-title"
          className="mb-8 text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl"
        >
          {title}
        </h2>
      ) : null}
      <div className="relative pl-2 md:pl-4">
        <div
          className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--color-primary)] via-[color:var(--color-primary)]/40 to-transparent md:left-[15px]"
          aria-hidden="true"
        />
        <ol className="space-y-8 md:space-y-10">
          {steps.map((step, i) => (
            <li key={i} className="relative flex gap-5 md:gap-6">
              <span
                className="relative z-[1] mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--color-primary)] bg-[color:var(--bg-card)] text-xs font-bold text-[color:var(--color-primary)] md:h-8 md:w-8 md:text-sm"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="min-w-0 flex-1 rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)] md:p-6">
                <h3 className="text-base font-semibold text-[color:var(--text-primary)] md:text-lg">{step.title}</h3>
                {step.body ? (
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">{step.body}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
