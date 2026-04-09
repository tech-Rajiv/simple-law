import React from 'react'

export default function SubHeading({ title, description, eyebrow, right }) {
  return (
    <div className="mb-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--text-muted)]">
            {eyebrow}
          </p>
        ) : null}
          <div className="mt-1 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-6 w-1 rounded-full bg-[color:var(--color-primary)]"
            />
            <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-primary)] sm:text-3xl">
              {title}
            </h2>
          </div>
        {description ? (
          <p className="mt-2  text-sm leading-relaxed text-[color:var(--text-secondary)]">
            {description}
          </p>
        ) : null}
      </div>

      {right ? <div className="shrink-0">{right}</div> : null}
      </div>

    </div>
  )
}