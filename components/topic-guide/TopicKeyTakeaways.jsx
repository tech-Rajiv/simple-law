/**
 * Short bullets at the top of a topic guide.
 *
 * @param {Object} props
 * @param {string} [props.title]
 * @param {string[]} props.items
 */
export default function TopicKeyTakeaways({ title = 'At a glance', items = [] }) {
  if (!items.length) return null

  return (
    <section
      className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] p-6 shadow-[var(--shadow-soft)] md:p-8"
      aria-labelledby="topic-takeaways-heading"
    >
      <h2 id="topic-takeaways-heading" className="text-lg font-semibold text-[color:var(--text-primary)] md:text-xl">
        {title}
      </h2>
      <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-[color:var(--text-secondary)] marker:text-[color:var(--color-primary)] md:text-base">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
