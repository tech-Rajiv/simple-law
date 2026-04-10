/**
 * Placeholder block for links, PDFs, or official resources you will add later.
 *
 * @param {Object} props
 * @param {string} [props.title]
 * @param {string} props.body
 */
export default function TopicFurtherReading({ title = 'Further reading & resources', body }) {
  return (
    <section
      className="rounded-2xl border border-dashed border-[color:var(--border-light)] bg-[color:var(--bg-page)] p-6 md:p-8"
      aria-labelledby="topic-further-heading"
    >
      <h2 id="topic-further-heading" className="text-lg font-semibold text-[color:var(--text-primary)] md:text-xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">{body}</p>
    </section>
  )
}
