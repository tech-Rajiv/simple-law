/**
 * Action checklist for the week / next conversation.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string[]} props.steps
 */
export default function TopicPracticeChecklist({ title, steps = [] }) {
  if (!steps.length) return null

  return (
    <section
      className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8"
      aria-labelledby="topic-practice-heading"
    >
      <h2 id="topic-practice-heading" className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl">
        {title}
      </h2>
      <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-[color:var(--text-secondary)] marker:font-semibold marker:text-[color:var(--color-primary)] md:text-base">
        {steps.map((step, i) => (
          <li key={i} className="pl-1">
            {step}
          </li>
        ))}
      </ol>
    </section>
  )
}
