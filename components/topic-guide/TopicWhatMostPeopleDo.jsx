/**
 * A structured section for "what most people do" under pressure.
 *
 * @param {Object} props
 * @param {string} [props.title]
 * @param {string[]} [props.paragraphs]
 * @param {string[]} [props.patterns]
 * @param {string[]} [props.examples]
 * @param {string} [props.closing]
 */
export default function TopicWhatMostPeopleDo({
  title = 'What most people do',
  paragraphs = [],
  patterns = [],
  examples = [],
  closing,
}) {
  const hasAny =
    Boolean(title) ||
    paragraphs.length > 0 ||
    patterns.length > 0 ||
    examples.length > 0 ||
    Boolean(closing)

  if (!hasAny) return null

  return (
    <section className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
      {title ? (
        <h2 className="text-lg font-semibold text-[color:var(--text-primary)] md:text-xl">{title}</h2>
      ) : null}

      {paragraphs.length ? (
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ) : null}

      {patterns.length ? (
        <div className="mt-6">
          <p className="text-sm font-semibold text-[color:var(--text-primary)] md:text-base">
            Common patterns include:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[color:var(--text-secondary)] marker:text-[color:var(--color-primary)] md:text-base">
            {patterns.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {examples.length ? (
        <div className="mt-6">
          <p className="text-sm font-semibold text-[color:var(--text-primary)] md:text-base">For example:</p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[color:var(--text-secondary)] marker:text-[color:var(--color-primary)] md:text-base">
            {examples.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {closing ? (
        <p className="mt-6 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">{closing}</p>
      ) : null}
    </section>
  )
}

