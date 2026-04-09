import Link from 'next/link'
import React from 'react'

export default function page() {
  const options = [
    {
      href: '/safety/building-safety',
      label: 'Building safety',
      description: 'Fire exits, drills, stairs, and staying alert indoors.',
    },
    {
      href: '/safety/road-safety',
      label: 'Road safety',
      description: 'Crossing rules, helmets, visibility, and bus safety.',
    },
  ]
  return (
    <div className="rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
      <h1 className="text-2xl font-semibold text-[color:var(--text-primary)]">
        Safety
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-muted)]">
        Choose a topic below.
      </p>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {options.map((option) => (
          <Link
            href={option.href}
            key={option.href}
            className="group rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-4 shadow-[var(--shadow-soft)] transition-colors hover:bg-[color:var(--hover-bg)]"
          >
            <div
              className="aspect-[16/9] w-full rounded-lg border border-[color:var(--border-light)] bg-[color:var(--hover-bg)]"
              aria-hidden="true"
            />
            <p className="mt-3 text-base font-semibold text-[color:var(--text-primary)] group-hover:text-[color:var(--color-primary)]">
              {option.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[color:var(--text-muted)]">
              {option.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}   