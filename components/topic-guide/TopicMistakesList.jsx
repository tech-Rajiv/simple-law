/**
 * Common pitfalls for a topic.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {{ title: string, body: string }[]} props.mistakes
 */
export default function TopicMistakesList({ title, mistakes = [] }) {
  if (!mistakes.length) return null

  return (
    <section
      className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8"
      aria-labelledby="topic-mistakes-heading"
    >
      <h2 id="topic-mistakes-heading" className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl">
        {title}
      </h2>
      <ol className="mt-6 space-y-6">
        {mistakes.map((m, i) => (
          <li key={i} className="border-t border-[color:var(--border-light)] pt-6 first:border-t-0 first:pt-0">
            <p className="text-sm font-semibold text-[color:var(--text-primary)] md:text-base">{m.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">{m.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
