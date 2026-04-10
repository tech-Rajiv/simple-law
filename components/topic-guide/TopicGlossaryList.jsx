/**
 * Key terms for the topic — reusable in psychology, safety, legal literacy hubs.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {{ term: string, definition: string }[]} props.entries
 */
export default function TopicGlossaryList({ title, entries = [] }) {
  if (!entries.length) return null

  return (
    <section
      className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8"
      aria-labelledby="topic-glossary-heading"
    >
      <h2 id="topic-glossary-heading" className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl">
        {title}
      </h2>
      <dl className="mt-6 space-y-5">
        {entries.map((e, i) => (
          <div key={i} className="border-b border-[color:var(--border-light)] pb-5 last:border-b-0 last:pb-0">
            <dt className="text-sm font-semibold text-[color:var(--text-primary)] md:text-base">{e.term}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">{e.definition}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
