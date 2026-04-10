/**
 * Two-column do / don’t lists (stacks on small screens).
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string[]} props.dos
 * @param {string[]} props.donts
 */
export default function TopicDosDonts({ title, dos = [], donts = [] }) {
  if (!dos.length && !donts.length) return null

  return (
    <section
      className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8"
      aria-labelledby="topic-dos-donts-heading"
    >
      <h2 id="topic-dos-donts-heading" className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl">
        {title}
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
        <div>
          <h3 className="text-sm font-semibold text-[color:var(--color-primary)]">Do</h3>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
            {dos.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[color:var(--error)]">Avoid</h3>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
            {donts.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
