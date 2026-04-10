/**
 * Intro block for content hubs (emotional intelligence, women, safety, etc.).
 * Pass title + paragraph strings from your route’s content module.
 */
export default function TopicHubIntro({ title, paragraphs, className = '' }) {
  if (!title && (!paragraphs || paragraphs.length === 0)) return null

  return (
    <section
      className={`rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8 ${className}`}
      aria-labelledby={title ? 'topic-hub-intro-heading' : undefined}
    >
      {title ? (
        <h1
          id="topic-hub-intro-heading"
          className="text-2xl font-bold tracking-tight text-[color:var(--text-primary)] md:text-3xl"
        >
          {title}
        </h1>
      ) : null}
      {paragraphs?.length ? (
        <div className={title ? 'mt-5 space-y-4' : 'space-y-4'}>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
              {p}
            </p>
          ))}
        </div>
      ) : null}
    </section>
  )
}
