/**
 * Asymmetric “bento” stat / fact grid — varied card weights for a modern dashboard feel.
 *
 * @param {{ value: string, label: string, hint?: string, span?: 'wide' | 'tall' | 'default' }[]} props.items
 */
export default function TopicBentoHighlightGrid({ title, items = [], className = '' }) {
  if (!items.length) return null

  return (
    <section
      className={className}
      aria-labelledby={title ? 'bento-grid-title' : undefined}
    >
      {title ? (
        <h2
          id="bento-grid-title"
          className="mb-6 text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl"
        >
          {title}
        </h2>
      ) : null}
      <div className="grid auto-rows-fr grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {items.map((item, i) => {
          const wide = item.span === 'wide'
          const tall = item.span === 'tall'
          return (
            <div
              key={i}
              className={[
                'flex flex-col justify-between rounded-2xl border p-4 md:p-5',
                'border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)]',
                wide ? 'col-span-2' : '',
                tall ? 'row-span-2 min-h-[140px]' : 'min-h-[100px]',
                i === 0
                  ? 'bg-gradient-to-br from-[color:var(--color-primary)]/12 to-transparent md:min-h-[120px]'
                  : '',
              ].join(' ')}
            >
              <p className="font-mono text-2xl font-bold tabular-nums text-[color:var(--color-primary)] md:text-3xl">
                {item.value}
              </p>
              <div className="mt-3">
                <p className="text-sm font-semibold text-[color:var(--text-primary)]">{item.label}</p>
                {item.hint ? (
                  <p className="mt-1 text-xs leading-relaxed text-[color:var(--text-secondary)]">{item.hint}</p>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
