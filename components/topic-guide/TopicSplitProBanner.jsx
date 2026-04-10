/**
 * Split panel: narrative + solid accent block — modern landing-page strip.
 */
export default function TopicSplitProBanner({
  title,
  body,
  asideTitle,
  asideBody,
  className = '',
}) {
  return (
    <section
      className={[
        'grid overflow-hidden rounded-3xl border border-[color:var(--border-light)] shadow-[var(--shadow-soft)] md:grid-cols-5',
        className,
      ].join(' ')}
      aria-labelledby="split-pro-title"
    >
      <div className="flex flex-col justify-center bg-[color:var(--bg-card)] p-8 md:col-span-3 md:p-10 lg:p-12">
        <h2 id="split-pro-title" className="text-2xl font-bold tracking-tight text-[color:var(--text-primary)] md:text-3xl">
          {title}
        </h2>
        {body ? (
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">{body}</p>
        ) : null}
      </div>
      <div className="flex flex-col justify-center bg-[color:var(--color-primary)] p-8 text-[color:var(--text-inverse)] md:col-span-2 md:p-10 lg:p-12">
        {asideTitle ? (
          <h3 className="text-lg font-semibold md:text-xl">{asideTitle}</h3>
        ) : null}
        {asideBody ? (
          <p className="mt-3 text-sm leading-relaxed text-white/90 md:text-base">{asideBody}</p>
        ) : null}
      </div>
    </section>
  )
}
