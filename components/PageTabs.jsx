'use client'

import { useId, useMemo, useState } from 'react'

const DEFAULT_TABS = [
    { id: 'overall', label: 'Overall' },
    { id: 'do', label: 'What to do' },
    { id: 'dont', label: 'What not to do' },
]

export default function PageTabs({ tabs = DEFAULT_TABS }) {
    const baseId = useId()
    const [active, setActive] = useState(tabs[0]?.id ?? 'overall')

    const activeTab = useMemo(
        () => tabs.find((t) => t.id === active) ?? tabs[0],
        [active, tabs]
    )

    return (
        <div className="mb-8 mt-2">
            <div
                role="tablist"
                aria-label="Page sections"
                className="flex flex-wrap gap-x-8 gap-y-2 border-b border-[color:var(--border-light)]"
            >
                {tabs.map((t) => {
                    const isActive = active === t.id
                    return (
                        <button
                            key={t.id}
                            type="button"
                            role="tab"
                            id={`${baseId}-${t.id}`}
                            aria-selected={isActive}
                            aria-controls={`${baseId}-panel`}
                            tabIndex={isActive ? 0 : -1}
                            onClick={() => setActive(t.id)}
                            className={[
                                '-mb-px border-b-2 pb-3 text-sm font-medium transition-colors',
                                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primary)]',
                                isActive
                                    ? 'border-[color:var(--color-primary)] text-[color:var(--color-primary)]'
                                    : 'border-transparent text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]',
                            ].join(' ')}
                        >
                            {t.label}
                        </button>
                    )
                })}
            </div>
            <div
                role="tabpanel"
                id={`${baseId}-panel`}
                aria-labelledby={activeTab ? `${baseId}-${activeTab.id}` : undefined}
                className="pt-5 text-sm leading-relaxed text-[color:var(--text-secondary)]"
            >
                <p className="text-[color:var(--text-muted)]">
                    Content for &ldquo;{activeTab?.label}&rdquo; will go here.
                </p>
            </div>
        </div>
    )
}
