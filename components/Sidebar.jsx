'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

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

    const activeHref = useMemo(() => pathname || '/', [pathname])

    function handleNavigate() {
        if (typeof onNavigate === 'function') onNavigate()
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
                    href="/assessment"
                    onClick={handleNavigate}
                    className={itemClass(activeHref === '/assessment')}
                >
                    Assessments
                </Link>

                <Link
                    href="/emotional-intelligence"
                    onClick={handleNavigate}
                    className={itemClass(activeHref.startsWith('/emotional-intelligence'))}
                >
                    Emotional Intelligence
                </Link>

                <Link
                    href="/women"
                    onClick={handleNavigate}
                    className={itemClass(activeHref.startsWith('/women'))}
                >
                    Women
                </Link>

                <Link
                    href="/awareness"
                    onClick={handleNavigate}
                    className={itemClass(activeHref.startsWith('/awareness'))}
                >
                    Real-world Awareness
                </Link>

                <Link
                    href="/complaint"
                    onClick={handleNavigate}
                    className={itemClass(activeHref === '/complaint')}
                >
                    Complaint guide
                </Link>
            </nav>
        </div>
    )
}
