/**
 * Simple FAQ list (no accordion — good for SEO and print; swap later if needed).
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {{ question: string, answer: string }[]} props.items
 */
export default function TopicSimpleFaq({ title, items = [] }) {
  if (!items.length) return null

  return (
    <section
      className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8"
      aria-labelledby="topic-faq-heading"
    >
      <h2 id="topic-faq-heading" className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl">
        {title}
      </h2>
      <div className="mt-6 space-y-8">
        {items.map((item, i) => (
          <div key={i}>
            <h3 className="text-base font-semibold text-[color:var(--text-primary)] md:text-lg">{item.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
