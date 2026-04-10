import Link from 'next/link'

/**
 * Hub hero: text column + dedicated CTA panel (no stretched “empty middle”).
 * Reuse on Emotional Intelligence, Women, Safety, etc.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {string} [props.eyebrow] - Small label above the title
 * @param {string} props.ctaHref
 * @param {string} props.ctaLabel
 * @param {string} [props.ctaHint] - Muted line under the button
 * @param {string} [props.ctaPanelTitle] - Short label above the button in the accent panel
 * @param {string} [props.ctaPanelDescription] - Supporting copy in the accent panel (above the button)
 * @param {string} [props.className]
 */
export default function LearningHubHero({
  title,
  subtitle,
  eyebrow,
  ctaHref,
  ctaLabel,
  ctaHint,
  ctaPanelTitle = 'Next step',
  ctaPanelDescription,
  className = '',
}) {
  return (
    <section
      className={[
        'relative overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[0_8px_30px_rgba(0,0,0,0.06)]',
        className,
      ].join(' ')}
      aria-labelledby="learning-hub-hero-title"
    >
      {/* Soft decoration — keeps the white side from feeling flat */}
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[color:var(--color-primary)]/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-1/4 -translate-y-1/4 rounded-full bg-[color:var(--color-secondary)]/30 blur-2xl lg:hidden"
        aria-hidden="true"
      />

      <div className="relative grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-stretch">
        {/* Copy */}
        <div className="flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="max-w-xl">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-primary)]">
                {eyebrow}
              </p>
            ) : null}
            <h1
              id="learning-hub-hero-title"
              className={[
                'font-bold leading-[1.08] tracking-tight text-[color:var(--text-primary)]',
                'text-[clamp(1.875rem,4.2vw,3.25rem)]',
                eyebrow ? 'mt-3' : '',
              ].join(' ')}
            >
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-5 text-base leading-relaxed text-[color:var(--text-secondary)] sm:text-lg sm:leading-relaxed">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>

        {/* CTA panel — fixed width on large screens so the button never floats in empty space */}
        <div className="relative flex flex-col justify-center border-t border-[color:var(--border-light)] bg-gradient-to-br from-[color:var(--color-primary)] via-[#5c2d4f] to-[#3d1f36] px-6 py-8 sm:px-8 sm:py-10 lg:border-l lg:border-white/10 lg:border-t-0 lg:px-10 lg:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14) 0, transparent 45%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0, transparent 40%)',
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{ctaPanelTitle}</p>
              {ctaPanelDescription ? (
                <p className="mt-2 text-sm leading-relaxed text-white/85">{ctaPanelDescription}</p>
              ) : null}
            </div>
            <Link
              href={ctaHref}
              className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-center text-base font-semibold text-[color:var(--color-primary)] shadow-lg transition-[transform,box-shadow] duration-200 hover:bg-white hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.99] sm:text-[1.05rem]"
            >
              <span>{ctaLabel}</span>
              <span
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
            {ctaHint ? <p className="text-center text-xs leading-relaxed text-white/65 lg:text-left">{ctaHint}</p> : null}
          </div>
        </div>
      </div>
    </section>
  )
}
