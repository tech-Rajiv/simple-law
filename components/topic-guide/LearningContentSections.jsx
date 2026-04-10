/**
 * Stack of titled content blocks for learning hubs (static copy from your utils).
 *
 * @param {Object} props
 * @param {{ title: string, paragraphs: string[] }[]} props.sections
 * @param {string} [props.className]
 * @param {string} [props.headingLevel] - "h2" | "h3" for section titles (default h2)
 */
export default function LearningContentSections({ sections = [], className = '', headingLevel = 'h2' }) {
  if (!sections.length) return null

  const HeadingTag = headingLevel === 'h3' ? 'h3' : 'h2'

  return (
    <div className={`space-y-6 md:space-y-8 ${className}`}>
      {sections.map((section, i) => (
        <section
          key={`${section.title}-${i}`}
          className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8"
          aria-labelledby={`learning-section-${i}`}
        >
          <HeadingTag
            id={`learning-section-${i}`}
            className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl"
          >
            {section.title}
          </HeadingTag>
          <div className="mt-4 space-y-4">
            {section.paragraphs.map((p, j) => (
              <p
                key={j}
                className="text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base md:leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
