'use client'
import { useMemo, useState } from 'react'

function classNames(...xs) {
  return xs.filter(Boolean).join(' ')
}

export default function HomeVariantSwitcher({ title = 'Design variations', variants = [] }) {
  const items = useMemo(() => (Array.isArray(variants) ? variants.filter(Boolean) : []), [variants])
  const [activeId, setActiveId] = useState(items?.[0]?.id ?? 'v1')

  const active = items.find((v) => v.id === activeId) ?? items[0]
  if (!active) return null

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
       

        <div className="flex items-center gap-2 rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-1 shadow-[var(--shadow-soft)]">
          {items.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setActiveId(v.id)}
              className={classNames(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                activeId === v.id
                  ? 'bg-[color:var(--active-bg)] text-[color:var(--text-primary)]'
                  : 'text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-hover)]',
              )}
              aria-pressed={activeId === v.id}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-3xl ring-1 ring-[color:var(--border-light)] overflow-hidden">
        {active.node}
      </div>
    </section>
  )
}

