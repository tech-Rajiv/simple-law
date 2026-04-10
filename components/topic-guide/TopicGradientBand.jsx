/**
 * Bold gradient band — use for hero-style emphasis, announcements, or section breaks.
 */
export default function TopicGradientBand({ eyebrow, title, body, className = '' }) {
  return (
    <section
      className={[
        'relative overflow-hidden rounded-3xl px-6 py-10 text-white shadow-[0_20px_50px_-20px_rgba(97,45,83,0.45)] md:px-10 md:py-12',
        'bg-gradient-to-br from-[color:var(--color-primary)] via-[#7a3d66] to-[#9b5a7a]',
        className,
      ].join(' ')}
      aria-labelledby={title ? 'gradient-band-title' : undefined}
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-[color:var(--color-secondary)]/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative max-w-3xl">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">{eyebrow}</p>
        ) : null}
        {title ? (
          <h2 id="gradient-band-title" className="mt-2 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            {title}
          </h2>
        ) : null}
        {body ? (
          <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-base md:leading-relaxed">{body}</p>
        ) : null}
      </div>
    </section>
  )
}
