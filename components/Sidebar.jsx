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
        <div className="h-full rounded-r-2xl rounded-l-none bg-[color:var(--color-surface)] p-3 md:rounded-2xl">
            <div className="flex items-center justify-between gap-2 px-2 py-2">
                <p className="text-sm font-semibold text-[color:var(--color-text)] md:hidden">
                    Menu
                </p>
                <div className="flex items-center gap-2">
                    {onClose ? (
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close sidebar"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)] hover:bg-[color:var(--color-background)] md:hidden"
                        >
                            <span className="text-lg leading-none">×</span>
                        </button>
                    ) : null}
                </div>
            </div>

            <nav className="mt-1 flex flex-col gap-1">
                <Link
                    href="/"
                    onClick={handleNavigate}
                    className={[
                        'rounded-xl px-3 py-2 text-sm hover:bg-[color:var(--color-background)]',
                        activeHref === '/'
                            ? 'bg-[color:var(--color-background)] font-medium text-[color:var(--color-primary)]'
                            : 'text-[color:var(--color-text)]',
                    ].join(' ')}
                >
                    Home
                </Link>

                <Link
                    href="/issues"
                    onClick={handleNavigate}
                    className={[
                        'rounded-xl px-3 py-2 text-sm hover:bg-[color:var(--color-background)]',
                        activeHref === '/issues'
                            ? 'bg-[color:var(--color-background)] font-medium text-[color:var(--color-primary)]'
                            : 'text-[color:var(--color-text)]',
                    ].join(' ')}
                >
                    Issues
                </Link>

                <div className="my-2 h-px bg-[color:var(--color-border)]" />

                {GROUPS.map((group) => {
                    const isOpen = openGroups.has(group.id)
                    return (
                        <div key={group.id} className="flex flex-col">
                            <button
                                type="button"
                                onClick={() => toggleGroup(group.id)}
                                className="flex items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium text-[color:var(--color-text)] hover:bg-[color:var(--color-background)]"
                                aria-expanded={isOpen}
                            >
                                <span className="capitalize">{group.label}</span>
                                <span className="text-[color:var(--color-muted)]">
                                    {isOpen ? '▾' : '▸'}
                                </span>
                            </button>

                            {isOpen ? (
                                <div className="mt-1 flex flex-col gap-1 pl-4">
                                    {group.items.map((it) => {
                                        const isActive =
                                            activeHref === it.href ||
                                            activeHref?.startsWith(it.href + '/')
                                        return (
                                            <Link
                                                key={it.href}
                                                href={it.href}
                                                onClick={handleNavigate}
                                                className={[
                                                    'rounded-xl px-3 py-2 text-sm hover:bg-[color:var(--color-background)]',
                                                    isActive
                                                        ? 'bg-[color:var(--color-background)] font-medium text-[color:var(--color-primary)]'
                                                        : 'text-[color:var(--color-muted)]',
                                                ].join(' ')}
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

