'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'

const GROUPS = [
    {
        id: 'saftey',
        label: 'safety',
        items: [
            { href: '/saftey/road-safety', label: 'road safety' },
            { href: '/saftey/building-safety', label: 'building safety' },
        ],
    },
    {
        id: 'health',
        label: 'health',
        items: [
            { href: '/health/first-aid', label: 'first aid' },
            { href: '/health/senior-care', label: 'senior care' },
        ],
    },
    {
        id: 'learning',
        label: 'learning',
        items: [
            { href: '/learning/good-habits', label: 'good habits' },
            { href: '/learning/basic-laws', label: 'basic laws' },
        ],
    },
    {
        id: 'fun',
        label: 'fun',
        items: [
            { href: '/fun/stories', label: 'stories' },
            { href: '/fun/games', label: 'games' },
        ],
    },
]

function itemClass(isActive) {
    return [
        'block rounded-md border-l-[3px] border-l-transparent py-2.5 pl-[calc(1rem-3px)] pr-3 text-sm transition-colors',
        'bg-transparent',
        'hover:bg-[color:var(--hover-bg)]',
        isActive
            ? 'border-l-[color:var(--color-primary)] bg-[color:var(--active-bg)] font-medium text-[color:var(--color-primary)]'
            : 'text-[color:var(--text-primary)]',
    ].join(' ')
}

export default function Sidebar({ onNavigate, onClose }) {
    const pathname = usePathname()
    const [openGroups, setOpenGroups] = useState(
        () => new Set(GROUPS.map((g) => g.id))
    )

    const activeHref = useMemo(() => pathname || '/', [pathname])

    function handleNavigate() {
        if (typeof onNavigate === 'function') onNavigate()
    }

    function toggleGroup(id) {
        setOpenGroups((prev) => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }

    return (
        <div className="h-full bg-transparent p-4 md:rounded-lg">
            <div className="flex items-center justify-between gap-2 pb-2">
                <p className="text-sm font-semibold text-[color:var(--text-primary)] md:hidden">
                    Menu
                </p>
                <div className="flex items-center gap-2">
                    {onClose ? (
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close sidebar"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--border-light)] bg-transparent text-[color:var(--text-primary)] hover:bg-[color:var(--hover-bg)] md:hidden"
                        >
                            <span className="text-lg leading-none">×</span>
                        </button>
                    ) : null}
                </div>
            </div>

            <nav className="mt-2 flex flex-col gap-0.5">
                <Link
                    href="/"
                    onClick={handleNavigate}
                    className={itemClass(activeHref === '/')}
                >
                    Home
                </Link>

                <Link
                    href="/issues"
                    onClick={handleNavigate}
                    className={itemClass(activeHref === '/issues')}
                >
                    Issues
                </Link>

                <div className="my-4 h-px bg-[color:var(--border-light)]" />

                {GROUPS.map((group) => {
                    const isOpen = openGroups.has(group.id)
                    return (
                        <div key={group.id} className="flex flex-col gap-0.5">
                            <button
                                type="button"
                                onClick={() => toggleGroup(group.id)}
                                className="flex w-full items-center justify-between rounded-md bg-transparent px-3 py-2.5 text-left text-sm font-medium text-[color:var(--text-secondary)] hover:bg-[color:var(--hover-bg)]"
                                aria-expanded={isOpen}
                            >
                                <span className="capitalize">{group.label}</span>
                                <span className="text-[color:var(--text-muted)]" aria-hidden>
                                    {isOpen ? '▾' : '▸'}
                                </span>
                            </button>

                            {isOpen ? (
                                <div className="mt-1 flex flex-col gap-0.5 pl-2">
                                    {group.items.map((it) => {
                                        const isActive =
                                            activeHref === it.href ||
                                            activeHref?.startsWith(it.href + '/')
                                        return (
                                            <Link
                                                key={it.href}
                                                href={it.href}
                                                onClick={handleNavigate}
                                                className={itemClass(isActive)}
                                            >
                                                {it.label}
                                            </Link>
                                        )
                                    })}
                                </div>
                            ) : null}
                        </div>
                    )
                })}
            </nav>
        </div>
    )
}
