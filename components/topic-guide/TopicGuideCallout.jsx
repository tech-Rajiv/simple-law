/**
 * Highlighted note, tip, or caution for topic guides.
 *
 * @param {Object} props
 * @param {'note' | 'tip' | 'caution'} [props.variant]
 * @param {string} props.title
 * @param {string} props.body
 */
export default function TopicGuideCallout({ variant = 'note', title, body }) {
  const v = variant === 'tip' || variant === 'caution' ? variant : 'note'
  const styles = {
    note: 'border-[color:var(--border-light)] bg-[color:var(--bg-page)]',
    tip: 'border-[color:var(--color-primary)]/25 bg-[color:var(--active-bg)]',
    caution: 'border-[color:var(--warning)]/50 bg-[color:var(--bg-card)]',
  }

  return (
    <aside
      className={`rounded-2xl border p-5 md:p-6 ${styles[v]}`}
      role="note"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">
        {v === 'tip' ? 'Tip' : v === 'caution' ? 'Important' : 'Note'}
      </p>
      <h3 className="mt-1 text-base font-semibold text-[color:var(--text-primary)] md:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">{body}</p>
    </aside>
  )
}
